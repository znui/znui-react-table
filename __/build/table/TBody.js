"use strict";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = znui.React || require('react');

var TRow = require('./TRow');

var loader = require('znui-react-loader');

module.exports = React.createClass({
  displayName: 'ZRTBody',
  getInitialState: function getInitialState() {
    return {
      active: null,
      checkeds: [],
      className: '',
      style: {},
      loading: false
    };
  },
  __renderLoading: function __renderLoading() {
    var _element = znui.react.createReactElement(this.props.loadingRender, {
      tbody: this
    });

    if (!_element) {
      _element = /*#__PURE__*/React.createElement(loader.DataLoader, {
        loader: "wave",
        title: 'Loading...'
      });
    }

    var _loading = zn.extend({
      className: '',
      style: {}
    }, this.props.loading);

    return /*#__PURE__*/React.createElement("tr", {
      className: znui.react.classname("tbody-loading", _loading.className),
      style: _loading.style
    }, /*#__PURE__*/React.createElement("td", {
      colSpan: this.props.columns.length
    }, _element));
  },
  __renderEmpty: function __renderEmpty() {
    var _element = znui.react.createReactElement(this.props.emptyRender, {
      tbody: this
    });

    if (!_element) {
      _element = /*#__PURE__*/React.createElement("div", {
        className: "empty-content"
      }, /*#__PURE__*/React.createElement("svg", {
        "aria-hidden": "true",
        focusable: "false",
        "data-prefix": "fas",
        "data-icon": "desktop",
        className: "svg-inline--fa fa-desktop fa-w-18 ",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 576 512"
      }, /*#__PURE__*/React.createElement("path", {
        fill: "currentColor",
        d: "M528 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h192l-16 48h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-72l-16-48h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h448v288z"
      })), /*#__PURE__*/React.createElement("span", null, "Empty"));
    }

    var _empty = zn.extend({
      className: '',
      style: {}
    }, this.props.empty);

    return /*#__PURE__*/React.createElement("tr", {
      className: znui.react.classname("tbody-empty", _empty.className),
      style: _empty.style
    }, /*#__PURE__*/React.createElement("td", {
      colSpan: this.props.columns.length
    }, _element));
  },
  __onRowClick: function __onRowClick(event) {
    var _data = event.data;
    this.setState({
      active: _data.trow.props.data
    });
    event.tbody = this;
    this.props.onRowClick && this.props.onRowClick(event);
  },
  __onCellClick: function __onCellClick(event) {
    event.tbody = this;
    this.props.onCellClick && this.props.onCellClick(event);
  },
  __renderRow: function __renderRow(item, index) {
    if (!zn.is(item, 'object')) {
      return null;
    }

    var _temp = this.props.eachRowData && this.props.eachRowData(item, index);

    if (_temp && zn.is(_temp, 'object')) {
      item = _temp;
    }

    var _element = znui.react.createReactElement(this.props.rowRender, {
      data: item,
      rowIndex: index,
      tbody: this
    });

    if (_element) {
      return _element;
    }

    return /*#__PURE__*/React.createElement(TRow, _extends({
      key: index
    }, this.props.row, {
      cell: this.props.cell,
      cellRender: this.props.cellRender,
      columns: this.props.columns,
      tbody: this,
      data: item,
      active: this.state.active == item,
      checked: this.state.checkeds.indexOf(item) !== -1,
      onRowClick: this.__onRowClick,
      onCellClick: this.__onCellClick
    }));
  },
  __renderData: function __renderData() {
    if (this.props.data == null || this.props.data && !this.props.data.length) {
      return this.__renderEmpty();
    }

    return /*#__PURE__*/React.createElement(React.Fragment, null, this.props.data.map(this.__renderRow));
  },
  __render: function __render() {
    if (this.props.loading || this.state.loading) {
      return this.__renderLoading();
    } else {
      return this.__renderData();
    }
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("tbody", {
      className: znui.react.classname("zr-table-tbody", this.props.className, this.state.className),
      style: znui.react.style(this.props.style, this.state.style)
    }, this.__render());
  }
});