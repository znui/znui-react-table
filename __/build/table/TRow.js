"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var React = znui.React || require('react');
var ReactDOM = znui.ReactDOM || require('react-dom');
var TCell = require('./TCell');
module.exports = React.createClass({
  displayName: 'ZRTRow',
  getInitialState: function getInitialState() {
    return {
      style: {},
      className: ''
    };
  },
  __getTargetTD: function __getTargetTD(target) {
    if (target && target.tagName !== 'TD') {
      return this.__getTargetTD(target.parentNode);
    } else {
      return target;
    }
  },
  __onRowClick: function __onRowClick(event) {
    var _this = this;
    var _td = this.__getTargetTD(event.target);
    event.data = {
      findTRDOM: function findTRDOM() {
        return ReactDOM.findDOMNode(_this);
      },
      td: _td,
      trow: this
    };
    this.props.onClick && this.props.onClick(event);
    this.props.onRowClick && this.props.onRowClick(event);
  },
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
  __cellRender: function __cellRender(column, index) {
    if (this.__validateColumn(column, index) === false) {
      return null;
    }
    if (!zn.is(column, 'object')) {
      return null;
    }
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
    if (_element) {
      return _element;
    }
    return /*#__PURE__*/React.createElement(TCell, _extends({
      key: index
    }, _props, {
      fixedStyle: this.__fixedWidth(index),
      onCellClick: this.props.onCellClick,
      className: znui.react.classname('trow-cell', _props.className)
    }));
  },
  __fixedWidth: function __fixedWidth(index) {
    var _columns = this.props.columns || [],
      _width = 0;
    for (var i = 0; i < index; i++) {
      if (_columns[i].fixed) {
        _width += _columns[i].width || 0;
      }
    }
    return {
      left: _width
    };
  },
  render: function render() {
    this.props.tbody.__initialDataItem(this.props.data);
    this.props.onDataValidate && this.props.onDataValidate(this.props.data, this);
    var _columnLength = (this.props.columns || []).length;
    var _className = this.props.className,
      _style = this.props.style;
    if (typeof _className == 'function') {
      _className = _className(this.props.data, this);
    }
    if (typeof _style == 'function') {
      _style = _style(this.props.data, this);
    }
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("tr", {
      className: znui.react.classname('zr-table-trow', _className, this.state.className),
      style: znui.react.style(_style, this.state.style),
      "data-active": this.props.active,
      "data-checked": this.props.checked,
      onClick: this.__onRowClick
    }, (this.props.columns || []).map(this.__cellRender)), this.state.child && /*#__PURE__*/React.createElement("tr", {
      className: znui.react.classname('zr-table-trow-child')
    }, /*#__PURE__*/React.createElement("td", {
      colSpan: _columnLength
    }, this.state.child)));
  }
});