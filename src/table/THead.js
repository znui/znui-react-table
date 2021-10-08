var React = znui.React || require('react');
var THeadSort = require('./THeadSort');
var popup = require('znui-react-popup');
var zrjson = require('znui-react-json');
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
			<zrjson.editor.object fold={false}
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
				thead: this,
				table: this.props.table
			}),
			_mapping = this.props.keyMapping || {},
			_labelKey = _mapping['label'] || 'label',
			_label = column[_labelKey];
		if(!_content) {
			_content = <div className="cell-label" title={_label}>
				{ !!column.required && <span data-zr-popup-tooltip="必要字段" className="required">*</span>}
				{ _label }
				{ 
					!!column.editable && <popup.Dropdown 
						className="cell-editor" 
						popover={{
							render: this.__iconClickRender(column, index),
							closeable: true
						}} >
						<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="edit" className="icon svg-inline--fa fa-edit fa-w-18 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"></path></svg>
					</popup.Dropdown>
				}
			</div>;
		}

		var _cell = zn.extend({ style: {}, className: '' }, this.props.cell, column);
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
