var React = znui.React || require('react');

module.exports = React.createClass({
	displayName:'ZRTFoot',
	__renderChildren: function (){
		var _columns = this.props.columns || [];
		if(this.props.children){
			return <tr className="tfoot-row">
				<td colSpan={_columns.length}>{this.props.children}</td>
			</tr>;
		}else{
			return this.__renderRow();
		}
	},
	__renderCell: function (column, index){
		if(!zn.is(column, 'object')) { return null; }
		var _element = znui.react.createReactElement(this.props.cellRender, {
			column: column,
			cellIndex: index, 
			tfoot: this
		});
		if(_element){
			return _element;
		}

		var _content = znui.react.createReactElement(column.render || column.foot, {
			column: column,
			cellIndex: index, 
			tfoot: this
		});

		if(this.props.render) {
			_content = this.props.render(column, index, this);
		}

		var _cell = zn.extend({ style: {}, className: '' }, this.props.cell);
		return <th key={index} className={znui.react.classname('tfoot-cell', _cell.className)} style={_cell.style}>
			{ _content }
		</th>;
	},
	__renderRow: function (){
		var _element = znui.react.createReactElement(this.props.rowRender, {
			thead: this
		});
		if(_element){
			return _element;
		}
		var _row = zn.extend({ className: '', style: {} }, this.props.row);
		return (
			<tr className={znui.react.classname("tfoot-row", _row.className)} style={_row.style}>
				{
					(this.props.columns||[]).map(this.__renderCell)
				}
			</tr>
		);
	},
	render: function(){
		return (
			<tfoot className={znui.react.classname("zr-table-tfoot", this.props.className)} style={this.props.style}>
				{this.__renderChildren()}
			</tfoot>
		);
	}
});