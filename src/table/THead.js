var React = znui.React || require('react');
var THeadSort = require('./THeadSort');
var popup = require('znui-react-popup');
var SVGIcon = require('znui-react-icon').SVGIcon;
var jsoneditor = require('rt-json-editor');
module.exports = React.createClass({
	displayName:'THead',
	getDefaultProps: function (){
		return {};
	},
	getInitialState: function (){
		return {
			className: '',
			style: {},
			sort: {},
			filter: {}
		};
	},
	__onColumnSort: function (sort, column){
		if(column.name) {
			this.state.sort[column.name] = (sort=='faSortAlphaDown' ? 'desc' : 'asc');
		}
		this.props.onSort && this.props.onSort(this.state.sort);
	},
	__onColumnEditorChange: function (data, child, root, index){
        var _root = root || child;
		this.props.onColumnChange && this.props.onColumnChange(_root.state.value, index);
    },
	__iconClickRender: function (column, index){
		return <div style={{padding: 10, maxHeight: 500, width: 400, overflow: 'auto'}}>
			<jsoneditor.form.object fold={false}
				displayClosure={true} 
				displayItemCount={true} 
				label={'Column'} 
				value={column} 
				onChange={(data, child, root)=>this.__onColumnEditorChange(data, child, root, index)} />
		</div>;
	},
	__renderCell: function (column, index){
		if(!zn.is(column, 'object')) { return null; }
		var _element = znui.react.createReactElement(this.props.cellRender, {
			column: column,
			cellIndex: index, 
			thead: this
		});
		if(_element){
			return _element;
		}

		var _content = znui.react.createReactElement(column.render || column.head, {
				column: column,
				cellIndex: index, 
				thead: this
			}),
			_mapping = this.props.keyMapping || {},
			_labelKey = _mapping['label'] || 'label',
			_label = column[_labelKey];
		if(!_content) {
			_content = <div className="cell-label">
				{ _label }
				{ 
					!!column.editable && <popup.Dropdown 
						className="cell-editor" 
						popover={{
							render: this.__iconClickRender(column, index),
							closeable: true
						}} >
						<SVGIcon icon="faEdit" />
					</popup.Dropdown>
				}
			</div>;
		}

		var _cell = zn.extend({ style: {}, className: '' }, this.props.cell);
		return <th key={index} className={znui.react.classname('thead-cell', _cell.className)} style={_cell.style}>
			{ _content }
			{ !!column.sort && <THeadSort className="cell-sort" onSort={(sort)=>this.__onColumnSort(sort, column)} />}
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
			<tr className={znui.react.classname("thead-row", _row.className)} style={_row.style}>
				{
					(this.props.columns||[]).map(this.__renderCell)
				}
			</tr>
		);
	},
	render:function(){
		return (
			<thead className={znui.react.classname("zr-table-thead", this.props.className, this.state.className)} style={znui.react.style(this.props.style, this.state.style)}>
				{this.__renderRow()}
			</thead>
		);
	}
});
