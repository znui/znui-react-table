var React = znui.React || require('react');

module.exports = React.createClass({
	render: function(){
		return (
			<div style={this.props.style} className={'zr-table-loading ' + (this.props.className || '')}>
				<div className="lds-ring"><div></div><div></div><div></div><div></div></div>
			</div>
		);
	}
});