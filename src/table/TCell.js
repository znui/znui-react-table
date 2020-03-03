var React = znui.React || require('react');
var ReactDOM = znui.ReactDOM || require('react-dom');

module.exports = React.createClass({
	displayName:'ZRTCell',
	getInitialState: function () {
		return {
			className: '',
			style: {},
			disabled: this.props.disabled,
			checked: this.props.checked,
			active: this.props.active
		}
	},
	__renderCellContent: function (){
		if(this.props.children) {
			return this.props.children;
		}
		
		var _value = null;
		if(this.props.data && this.props.name) {
			_value = this.props.data[this.props.name];
		}

		var _render = znui.react.createReactElement(this.props.render || this.props.body, {
			cellIndex: this.props.cellIndex, 
			column: this.props.column,
			data: this.props.data,
			value: _value,
			tcell: this,
			trow: this.props.trow,
			tbody: this.props.tbody
		});
		
		if(_render){
			return _render;
		}

		return _value;
	},
	__cellClick: function (event){
		event.data = {
			td: ReactDOM.findDOMNode(this),
			tcell: this
		};
		this.props.onClick && this.props.onClick(event);
		this.props.onCellClick && this.props.onCellClick(event);
	},
	render: function(){
		return (
			<td className={znui.react.classname("zr-table-tcell", this.props.className, this.state.className)} style={znui.react.style(this.props.style, this.state.style)}	
				data-disabled={this.state.disabled}
				data-checked={this.state.checked}
				data-active={this.state.active}
				onClick={this.__cellClick} >
				{this.__renderCellContent()}
			</td>
		);
	}
});
