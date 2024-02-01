"use strict";

var React = znui.React || require('react');
module.exports = React.createClass({
  displayName: 'ZRTableColgroup',
  __validateColumn: function __validateColumn(column, index) {
    if (column.validate === false) {
      return false;
    }
    if (zn.is(column.validate, 'function')) {
      var _return = column.validate.apply(null, [column, index]);
      if (_return === false) {
        return false;
      }
    }
  },
  render: function render() {
    var _this = this;
    var _keyMapping = this.props.keyMapping || {};
    return /*#__PURE__*/React.createElement("colgroup", null, (this.props.columns || []).map(function (item, index) {
      if (_this.__validateColumn(item, index) === false) {
        return null;
      }
      var _widthKey = _keyMapping.width || 'width',
        _widthValue = item[_widthKey];
      switch (zn.type(_widthValue)) {
        case 'function':
          _widthValue = _widthValue.apply(null, [item, index]);
          break;
      }
      return /*#__PURE__*/React.createElement("col", {
        key: index,
        style: {
          width: _widthValue
        }
      });
    }));
  }
});