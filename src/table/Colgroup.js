var React = znui.React || require('react');

module.exports = React.createClass({
	displayName:'ZRTableColgroup',
	render: function(){
		return (
			<colgroup>
				{
					(this.props.columns||[]).map(function (item, index) {
						return <col key={index} style={{ width: item.width }} />;
					})
				}
			</colgroup>
		);
	}
});
