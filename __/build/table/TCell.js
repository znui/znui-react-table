"use strict";

var React = znui.React || require('react');

var ReactDOM = znui.ReactDOM || require('react-dom');

module.exports = React.createClass({
  displayName: 'ZRTCell',
  getInitialState: function getInitialState() {
    return {
      className: '',
      style: {},
      disabled: this.props.disabled,
      checked: this.props.checked,
      active: this.props.active
    };
  },
  __renderCellContent: function __renderCellContent() {
    if (this.props.children) {
      return this.props.children;
    }

    var _value = null;

    if (this.props.data && this.props.name) {
      _value = this.props.data[this.props.name];
    }

    var _render = znui.react.createReactElement(this.props.render || this.props.body, {
      rowIndex: this.props.rowIndex,
      cellIndex: this.props.cellIndex,
      column: this.props.column,
      data: this.props.data,
      value: _value,
      tcell: this,
      trow: this.props.trow,
      tbody: this.props.tbody,
      table: this.props.tbody.props.table
    }, this.props.context);

    if (_render) {
      return _render;
    }

    return /*#__PURE__*/React.createElement("div", {
      className: "cell-label",
      title: _value
    }, _value);
  },
  __cellClick: function __cellClick(event) {
    var _this = this;

    event.data = {
      findTDDOM: function findTDDOM() {
        return ReactDOM.findDOMNode(_this);
      },
      tcell: this
    };
    this.props.onClick && this.props.onClick(event);
    this.props.onCellClick && this.props.onCellClick(event);
  },
  render: function render() {
    var _column = this.props.column || {};

    return /*#__PURE__*/React.createElement("td", {
      className: znui.react.classname("zr-table-tcell", _column.fixed ? 'fixed' : '', this.props.className, _column.bodyClassName, this.state.className),
      style: znui.react.style(this.props.style, _column.bodyStyle, this.state.style, _column.fixedStyles),
      "data-disabled": this.state.disabled,
      "data-checked": this.state.checked,
      "data-active": this.state.active,
      onClick: this.__cellClick
    }, this.__renderCellContent());
  }
});