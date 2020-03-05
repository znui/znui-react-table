var React = znui.React || require('react');
var filter = require('znui-react-filter');

module.exports = React.createClass({
	displayName: 'ZRFilter',
	getInitialState:function(){
		return {
			className: '',
			style: {},
			data: {}
		}
	},
	__onFilterChange: function (event){
		if(event.name && event.value) {
			this.state.data[event.name] = {
				value: event.value,
				opt: event.opt
			};
		}
		this.props.onFilter && this.props.onFilter(this.state.data);
	},
	__onFilterCancel: function (name){
		if(name && this.state.data){
			this.state.data[name] = null;
			delete this.state.data[name];
		}
	},
	__renderCell: function (column, index){
		if(!zn.is(column, 'object')) { return null; }
		var _element = znui.react.createReactElement(this.props.cellRender, {
			column: column,
			cellIndex: index, 
			tfilter: this
		});
		if(_element){
			return _element;
		}
		
		var _content = znui.react.createReactElement(column.render, {
			column: column,
			cellIndex: index, 
			tfilter: this
		});

		if(!_content && column.filter) {
			_content = <filter.FilterField {...column.filter} name={column.name} onFilterChange={this.__onFilterChange} onCancel={this.__onFilterCancel} />;
		}

		var _cell = zn.extend({ style: {}, className: '' }, this.props.cell);
		return <td key={index} className={znui.react.classname('tfilter-cell', _cell.className)} style={_cell.style}>
			{ _content }
		</td>;
	},
	__renderRow: function (){
		var _element = znui.react.createReactElement(this.props.rowRender, {
			tfilter: this
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
	render:function(){
		return (
			<thead className={znui.react.classname("zr-table-tfilter", this.props.className, this.state.className)} style={znui.react.style(this.props.style, this.state.style)}>
				{this.__renderRow()}
			</thead>
		);
	}
});