"use strict";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var React = znui.React || require('react');
var TablePager = require('./TablePager');
var selector = require('znui-react-selector');
module.exports = React.createClass({
  displayName: 'ZRPopupTable',
  getDefaultProps: function getDefaultProps() {
    return {
      textKey: 'zxnz_Label',
      valueKey: 'zxnz_UUID'
    };
  },
  getInitialState: function getInitialState() {
    return {
      text: this.props.text,
      value: this.props.value
    };
  },
  getText: function getText() {
    return this.state.text;
  },
  setText: function setText(text) {
    this.setState({
      text: text
    });
  },
  getValue: function getValue() {
    return this.state.value;
  },
  setValue: function setValue(value) {
    this.setState({
      value: value
    });
  },
  __onRowClick: function __onRowClick(event, dropdownEvent) {
    var _data = event.data.trow.props.data;
    event.data = _data;
    event.value = _data[this.props.valueKey];
    event.text = _data[this.props.textKey];
    dropdownEvent.popupSelect.setData(event.value, event.text);
    dropdownEvent.dropdown.closePopover();
    this.setValue(event.value);
    this.props.onChange && this.props.onChange(event, dropdownEvent);
  },
  __popupRender: function __popupRender(dropdownEvent) {
    var _this = this;
    return /*#__PURE__*/React.createElement(TablePager, _extends({
      zxnz: true,
      colgroup: {},
      cellPadding: 5,
      className: "zr-table-class-normal",
      fixed: true,
      thead: {
        filter: true
      },
      tfilter: {},
      tbody: {
        onRowClick: function onRowClick(event) {
          return _this.__onRowClick(event, dropdownEvent);
        }
      },
      pageIndex: 1,
      pageSize: 5
    }, this.props));
  },
  render: function render() {
    return /*#__PURE__*/React.createElement(selector.PopupSelect, {
      className: znui.react.classname('zr-table-popup-table', this.props.className),
      style: this.props.style,
      popupRender: this.__popupRender
    });
  }
});