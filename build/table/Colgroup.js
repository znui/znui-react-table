"use strict";

var React = znui.React || require('react');

module.exports = React.createClass({
  displayName: 'ZRTableColgroup',
  render: function render() {
    return React.createElement("colgroup", null, (this.props.columns || []).map(function (item, index) {
      return React.createElement("col", {
        key: index,
        style: {
          width: item.width
        }
      });
    }));
  }
});