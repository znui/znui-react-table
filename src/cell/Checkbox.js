var React = znui.React || require('react');
var Checkbox = require('znui-react-selector').Checkbox;

module.exports = React.createClass({
	displayName:'ZRTCellCheckbox',
	getInitialState: function () {
		return {
			checked: this.props.checked || false
		}
	},
	__onCheckboxChange: function (event){
		event.stopPropagation();
		if(this.props.thead) {
			this.__onHeadChange(event);
		}else if(this.props.tbody) {
			this.__onBodyChange(event);
		}
	},
	__onHeadChange: function (event){
		console.log(event.checked, this.props);
	},
	__onBodyChange: function (event){
		console.log(event.checked, this.props);
	},
	render: function(){
		return (
			<div className="zr-table-cell-checkbox"><Checkbox checked={true} onChange={this.__onCheckboxChange}/></div>
		);
	}
});
