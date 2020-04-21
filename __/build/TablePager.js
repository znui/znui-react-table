"use strict";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = znui.React || require('react');

var Table = require('./Table');

var pager = require('znui-react-pager');

module.exports = React.createClass({
  displayName: 'ZRTablePager',
  getInitialState: function getInitialState() {
    return {
      total: 0,
      count: 0,
      current: 1,
      data: null
    };
  },
  __handlePageChanged: function __handlePageChanged(page, pager) {
    this.state.current = page;
    this.props.onPageChanged && this.props.onPageChanged(page, pager, this);

    if (this.data) {
      console.log(this.state.data, this.data);
    }

    this.forceUpdate();
  },
  __renderPager: function __renderPager(columns, table) {
    var _columnSize = columns.length;

    if (!_columnSize) {
      return null;
    }

    var _state = this.state,
        _pagerProps = {
      total: _state.total,
      count: _state.count,
      current: _state.current,
      onPageChanged: this.__handlePageChanged
    },
        _Component = this.props.pager || pager.SimplePager;

    if (zn.is(_Component, 'string')) {
      _Component = zn.path(window, _Component);
    }

    var _element = znui.react.createReactElement(this.props.pagerRender, _pagerProps);

    if (!_element) {
      _element = /*#__PURE__*/React.createElement(_Component, _pagerProps);
    }

    return /*#__PURE__*/React.createElement("tfoot", {
      className: "table-pager"
    }, /*#__PURE__*/React.createElement("tr", {
      className: "pager-row"
    }, /*#__PURE__*/React.createElement("td", {
      colSpan: _columnSize
    }, _element)));
  },
  __onDataInitial: function __onDataInitial(data) {
    var _method = data.method || 'post',
        _params = {},
        _keyMaps = zn.deepAssign({
      total: "total",
      pageIndex: 'pageIndex',
      pageSize: 'pageSize',
      data: 'data'
    }, this.props.keyMaps);

    _params[_keyMaps.pageIndex] = this.props.pageIndex || 1;
    _params[_keyMaps.pageSize] = this.props.pageSize || 10;

    if (_method == 'get') {
      data = zn.deepAssign(data, {
        params: _params
      });
    } else {
      data = zn.deepAssign(data, {
        data: _params
      });
    }

    this.state.keyMaps = _keyMaps;
    return this.state.data = data, data;
  },
  __onDataCreated: function __onDataCreated(data, table) {
    this.data = data;
  },
  __getPageCount: function __getPageCount(total, pageSize) {
    var _count = parseInt(total / pageSize);

    if (total % pageSize > 0) {
      _count += 1;
    }

    return _count;
  },
  __onDataLoaded: function __onDataLoaded(response, table) {
    var _data = response.data;

    var _return = this.props.onDataLoaded && this.props.onDataLoaded(_data, table, tablePager);

    if (_return !== false) {
      table.setState({
        data: _data[this.state.keyMaps.data]
      });
      this.setState({
        total: this.__getPageCount(this.state.keyMaps.total, this.state.keyMaps.pageSize),
        count: _data[this.state.keyMaps.total],
        current: _data[this.state.keyMaps.pageIndex]
      });
    }

    return false;
  },
  render: function render() {
    return /*#__PURE__*/React.createElement(Table, _extends({}, this.props, {
      className: znui.react.classname('zr-table-pager', this.props.className),
      childrenRender: this.__renderPager,
      onDataInitial: this.__onDataInitial,
      onDataCreated: this.__onDataCreated,
      onDataLoaded: this.__onDataLoaded
    }));
  }
});