var React = znui.React || require('react');

module.exports = React.createClass({
	displayName:'ZRTableColgroup',
	render: function(){
		var _keyMapping = this.props.keyMapping || { };
		return (
			<colgroup>
				{
					(this.props.columns||[]).map(function (item, index) {
						var _width = _keyMapping.width || 'width';
						return <col key={index} style={{ width: item[_width] }} />;
					})
				}
			</colgroup>
		);
	}
});
