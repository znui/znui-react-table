var React = znui.React || require('react');
var filter = require('znui-react-filter');

module.exports = React.createClass({
	displayName: 'ZRRowAdder',
	getInitialState:function(){
		return {
			submit_key: '',
			className: '',
			style: {},
			data: {},
			validate: false,
			required_fields: []
		}
	},
	__onFilterChange: function (event, input){
		if(event.name && event.opt) {
			if(event.value === null || event.value === undefined || event.value === '') {
				this.state.data[event.name] = null;
				delete this.state.data[event.name];
			}else if(!event.value && input && input.props && !input.props.emptyValueEnabled){
				this.state.data[event.name] = null;
				delete this.state.data[event.name];
			}else{
				this.state.data[event.name] = event.value;
			}
		}

		this.props.onAddInputChange && this.props.onAddInputChange(event, {
			name: event.name,
			opt: event.opt,
			input: input, 
			data: this.state.data
		});

		this.__validateData();
	},
	__validateData: function (){
		var _required_fields = this.state.required_fields;
		var _data = this.state.data;
		var _validate = true;
		for(var name of _required_fields) {
			if(!_data[name]) {
				_validate = false;
				break;
			}
		}
		
		this.setState({validate: _validate});
	},
	__onFilterCancel: function (name){
		if(name && this.state.data){
			this.state.data[name] = null;
			delete this.state.data[name];
			this.__validateData();
		}
	},
	__validateColumn: function (column, index){
		if(column.validate === false) {
			return false;
		}
		if(zn.is(column.validate, 'function')) {
			var _return = column.validate.apply(null, [column, index]);
			if(_return === false) {
				return false
			}
		}
	},
	__submit: function (){
		if(this.state.validate) {
			this.props.onAddSubmit && this.props.onAddSubmit(this.state.data);
			if(this.props.submitApi) {
				this.props.submitApi.data.data = this.state.data;
				zn.data.create(this.props.submitApi, {
					before: (sender, data)=>{
						this.setState({
							loading: true
						});
					},
					after: (sender, data, response, xhr)=>{
						if(data.code == 200){
							this.props.table.refresh();
							this.state.data = {};
							this.state.submit_key = zn.uuid();
							this.validate();
							this.props.onSubmitSuccess && this.props.onSubmitSuccess(data, response, xhr);
						}else{
							this.props.onSubmitError && this.props.onSubmitError(data, response, xhr);
						}
						this.setState({
							loading: false
						});
					},
					error: (sender, xhr)=>{
						this.setState({
							loading: false
						});
					}
				});
			}
		}
	},
	__renderCell: function (column, index){
		if(column.name == "__index__")  {
			var _result = this.props.checking && this.props.checking(column, index);
			if(_result === false) {
				return (
					<td key={index} className={znui.react.classname('tfilter-cell', (column.fixed?'fixed':''))} style={znui.react.style(column.fixedStyles)}>
					</td>
				);
			}
			return (
				<td key={index} className={znui.react.classname('tfilter-cell', (column.fixed?'fixed':''))} style={znui.react.style(column.fixedStyles)}>
					{
						this.state.loading ? (
							<div className={'icon-btn disabled'}>
								<i className='fa fa-spinner fa-spin' /> 
							</div>
						) : (
							<div className={'icon-btn ' + (this.state.validate ? '':'disabled')} onClick={this.__submit}>
								<i data-tooltip className='fa fa-plus' />
							</div>
						)
					}
				</td>
			);
		}

		if(column.rowadder === false) {
			return (
				<td key={index} className={znui.react.classname('tfilter-cell', (column.fixed?'fixed':''))} style={znui.react.style(column.fixedStyles)}>
				</td>
			);
		}else{

		}

		if(this.__validateColumn(column, index) === false){
			return null;
		}
		if(!zn.is(column, 'object')) { return null; }
		var _element = znui.react.createReactElement(this.props.cellRender, {
			column: column,
			cellIndex: index, 
			trowadder: this
		});
		if(_element){
			return _element;
		}
		
		var _content = znui.react.createReactElement(column.render, {
			column: column,
			cellIndex: index, 
			trowadder: this
		});

		var _rowadder = zn.extend(column.rowadder, column.filter);
		if(_rowadder.required && this.state.required_fields.indexOf(column.name) == -1) {
			this.state.required_fields.push(column.name);
		}
		if(!_content && _rowadder) {
			if(zn.is(_rowadder, 'function')) {
				if(_rowadder.prototype && _rowadder.prototype.render) {
					_content = znui.react.createReactElement(_rowadder, {
						column: column,
						trowadder: this
					});
                }else{
                    _rowadder = _rowadder.call(null, column, this);
                }
			}

			if(zn.is(_rowadder, 'object')) {
				var _key = _rowadder.key || column.name;
				if(zn.is(_key, 'function')) {
					_key = _key.call(null, column, this);
				}

				_content = <filter.FilterField required={_rowadder.required} key={_key || zn.uuid()} {..._rowadder} name={column.name} onChange={this.__onFilterChange} onCancel={this.__onFilterCancel} />;
			}
		}

		var _cell = zn.extend({ style: {}, className: '' }, this.props.cell);
		return (
			<td key={index} className={znui.react.classname('tfilter-cell', (column.fixed?'fixed':''), (_rowadder.required?'required':''), _cell.className)} style={znui.react.style(_cell.style, column.fixedStyles)}>
				{ _content }
			</td>
		);
	},
	__renderRow: function (){
		var _element = znui.react.createReactElement(this.props.rowRender, {
			trowadder: this
		});
		if(_element){
			return _element;
		}
		var _row = zn.extend({ className: '', style: {} }, this.props.row);
		return (
			<tr className={znui.react.classname("tfilter-row zr-table-trow", _row.className)} style={_row.style}>
				{
					(this.props.columns||[]).map(this.__renderCell)
				}
			</tr>
		);
	},
	render: function(){
		return (
			<thead key={this.state.submit_key} className={znui.react.classname("zr-table-trowadder zr-table-tfilter", this.props.className, this.state.className)} style={znui.react.style(this.props.style, this.state.style)}>
				{this.__renderRow()}
			</thead>
		);
	}
});