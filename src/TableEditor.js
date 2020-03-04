var React = znui.React || require('react');
var DataLifecycle = require('./DataLifecycle');
var table = require('./table/index');
var selector = require('znui-react-selector');

module.exports = React.createClass({
	displayName:'ZRTableEditor',
	getInitialState: function (){
		return {
			data: [], 
			columns: [],
			checkeds: []
		};
	},
	__onSort: function (sort){
		var _sort = null;
		for(var key in sort){
			_sort = sort[key]
			this.state.data = this.state.data.sort(function (next, prev){
				if(_sort=='desc'){
					if(next[key] > prev[key]){
						return 1;
					}else if(next[key] == prev[key]){
						return 0;
					}else if(next[key] < prev[key]){
						return -1;
					}
				}
				if(_sort=='asc'){
					if(next[key] < prev[key]){
						return 1;
					}else if(next[key] == prev[key]){
						return 0;
					}else if(next[key] > prev[key]){
						return -1;
					}
				}
			});
		}

		this.forceUpdate();
	},
	__onFilter: function (filter){
		console.log(filter, this.state.data);
	},
	__tbodyDataRender: function (columns){
		return <table.TBody {...this.props.tbody} columns={columns} data={this.state.data} table={this} />;
	},
	__tbodyLoadingRender: function (columns){
		return <table.TBody {...this.props.tbody} columns={columns} loading={true} table={this} />;
	},
	__onTHeadColumnChange: function (data, index){
		if(this.state.columns){
			this.state.columns[index] = data;
			this.forceUpdate();
		}
	},
	__tbodyDataLoaded: function (data) {
		this.setState({ data: data });
	},
	__render: function (){
		var columns = this.state.columns;
		return (
			<table className={znui.react.classname("zr-table zr-table-editor", this.props.className)} 
				style={this.props.style} 
				data-fixed={this.props.fixed} 	
				cellPadding={this.props.cellPadding || 0} 
				cellSpacing={this.props.cellSpacing || 0} {...this.props.attrs}>
				{ !!this.props.caption && <caption className={this.props.caption.className} style={this.props.caption.style}>{this.props.caption.render}</caption> }
				{ !!this.props.colgroup && <table.Colgroup columns={columns} {...this.props.colgroup} /> }
				{ !!this.props.thead && <table.THead onSort={this.__onSort}  onColumnChange={this.__onTHeadColumnChange} columns={columns} {...this.props.thead} table={this} />}
				{ !!this.props.tfilter && <table.TFilter onFilter={this.__onFilter} columns={columns} {...this.props.filter} table={this} />}
				{ !!this.props.tbody && <DataLifecycle onFinished={this.__tbodyDataLoaded} data={this.props.data || this.props.tbody.data} render={()=>this.__tbodyDataRender(columns)} onLoading={()=>this.__tbodyLoadingRender(columns)} />}
				{ !!this.props.tfoot && <table.TFoot columns={columns} {...this.props.tfoot} table={this} />}
			</table>
		);
	},
	__initCheckbox: function (columns){
		var _checkbox = {
				width: 60,
				head: function (argv){
					var _table = argv.thead.props.table;
					return <selector.Checkbox 
								style={{ justifyContent: 'center' }}
								key={this.state.checkeds.length}
								text={'(' + _table.state.checkeds.length +')'}
								checked={!!_table.state.data.length && _table.state.checkeds.length === _table.state.data.length}
								onChange={(event)=>{
									if(event.checked) {
										this.state.checkeds = this.state.data.slice(0);
									}else{
										this.state.checkeds = [];
									}
									this.forceUpdate();
									this.props.onCheckboxChange && this.props.onCheckboxChange(this.state.checkeds, this);
								}} />;
				}.bind(this),
				body: function (argv){
					var _data = argv.data;
					return <selector.UncontrolCheckbox 
								style={{ justifyContent: 'center' }}
								checked={this.state.checkeds.indexOf(_data) !== -1}
								onClick={(event, checkbox)=>{
									event.stopPropagation();
									if(checkbox.props.checked) {
										this.state.checkeds.splice(this.state.checkeds.indexOf(_data), 1); 
									}else{
										this.state.checkeds.push(_data);
									}
									this.forceUpdate();
									this.props.onCheckboxChange && this.props.onCheckboxChange(this.state.checkeds, this);
								}} />;
				}.bind(this)
			},
			_value = this.props.checkbox;
		switch(zn.type(_value)) {
			case 'object':
				_checkbox = zn.extend({}, _value);
				break;
			case 'number':
				_checkbox.width = _value;
				break;
		}
		if(_value) {
			columns = columns.unshift(_checkbox);
		}
	},
	__columnsLoaded: function (columns){
		var _columns = [].concat(columns);
		this.__initCheckbox(_columns);
		_columns = _columns.forEach(function (column, index){
			console.log(column, index);
		});
		this.setState({ columns: _columns });
	},
	render: function(){
		return <DataLifecycle onFinished={this.__columnsLoaded} data={this.props.columns} render={this.__render} />
	}
});