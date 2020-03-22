"use strict";

var React = znui.React || require('react');

var SVGIcon = require('znui-react-icon').SVGIcon;

module.exports = React.createClass({
  displayName: 'ZRTHeadEditor',
  getInitialState: function getInitialState() {
    return {
      sort: 'faSort'
    };
  },
  __iconClick: function __iconClick() {
    if (this.state.sort == 'faSort') {
      this.state.sort = 'faSortAlphaDown';
    } else if (this.state.sort == 'faSortAlphaDown') {
      this.state.sort = 'faSortAlphaUp';
    } else if (this.state.sort == 'faSortAlphaUp') {
      this.state.sort = 'faSortAlphaDown';
    }

    this.forceUpdate();
    this.props.onSort && this.props.onSort(this.state.sort);
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname('zr-thead-sort', this.props.className),
      style: this.props.style
    }, /*#__PURE__*/React.createElement(SVGIcon, {
      onClick: this.__iconClick,
      icon: this.state.sort
    }));
  }
});