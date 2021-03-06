var React = znui.React || require('react');
var ReactDOM = znui.ReactDOM || require('react-dom');
var TCell = require('./TCell');

module.exports = React.createClass({
	displayName:'ZRTRow',
	getInitialState: function(){
		return {
			className: '',
			style: {}
		}
	},
	__getTargetTD: function (target) {
		if(target.tagName!=='TD'){
			return this.__getTargetTD(target.parentNode);
		} else {
			return target;
		}
	},
	__onRowClick: function (event){
		var _td = this.__getTargetTD(event.target),
			_tr = ReactDOM.findDOMNode(this);
		event.data = {
			td: _td,
			tr: _tr,
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
			cellIndex: index,
			data: this.props.data,
			tbody: this.props.tbody
		}, this.props.cell, column);
		var _element = znui.react.createReactElement(this.props.cellRender, _props);

		if(_element){
			return _element;
		}

		return <TCell key={index} {..._props} onCellClick={this.props.onCellClick} className={znui.react.classname('trow-cell', _props.className)} />;
	},
	render:function(){
		return (
			<tr className={znui.react.classname('zr-table-trow', this.props.className, this.state.className)} style={znui.react.style(this.props.style, this.state.style)}
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
