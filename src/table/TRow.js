var React = znui.React || require('react');
var ReactDOM = znui.ReactDOM || require('react-dom');
var TCell = require('./TCell');

module.exports = React.createClass({
	displayName:'ZRTRow',
	getInitialState: function(){
		return {
			style: {},
			className: ''
		}
	},
	__getTargetTD: function (target) {
		if(target && target.tagName!=='TD'){
			return this.__getTargetTD(target.parentNode);
		} else {
			return target;
		}
	},
	__onRowClick: function (event){
		var _this = this;
		var _td = this.__getTargetTD(event.target);
		event.data = {
			findTRDOM: function (){
				return ReactDOM.findDOMNode(_this);
			},
			td: _td,
			trow: this
		};
		this.props.onClick && this.props.onClick(event);
		this.props.onRowClick && this.props.onRowClick(event);
	},
	__cellRender: function (column, index){
		if(!zn.is(column, 'object')) { return null;}
		var _props = zn.extend({
			column: column,
			trow: this,
			rowIndex: this.props.rowIndex,
			cellIndex: index,
			context: this.props.context,
			data: this.props.data,
			tbody: this.props.tbody
		}, this.props.cell, column);
		var _element = znui.react.createReactElement(this.props.cellRender, _props, this.props.context);

		if(_element){
			return _element;
		}

		return <TCell key={index} {..._props} fixedStyle={this.__fixedWidth(index)} onCellClick={this.props.onCellClick} className={znui.react.classname('trow-cell', _props.className)} />;
	},
	__fixedWidth: function (index){
		var _columns = this.props.columns||[], _width = 0;
		for(var i = 0; i < index; i++){
			if(_columns[i].fixed) {
				_width += _columns[i].width || 0;
			}
		}

		return {
			left: _width
		};
	},
	render:function(){
		this.props.tbody.__initialDataItem(this.props.data);
		this.props.onDataValidate && this.props.onDataValidate(this.props.data, this);
		var _className = this.props.className, _style = this.props.style;
		if(typeof _className == 'function'){
			_className = _className(this.props.data, this);
		}
		if(typeof _style == 'function'){
			_style = _style(this.props.data, this);
		}
		return (
			<tr className={znui.react.classname('zr-table-trow', _className, this.state.className)} 
				style={znui.react.style(_style, this.state.style)}
				data-active={this.props.active} 
				data-checked={this.props.checked} 
				onClick={this.__onRowClick}>
				{
					(this.props.columns||[]).map(this.__cellRender)
				}
			</tr>
		);
	}
});
