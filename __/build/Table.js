"use strict";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = znui.React || require('react');

var table = require('./table/index');

var selector = require('znui-react-selector');

var pager = require('znui-react-pager');

module.exports = React.createClass({
  displayName: 'ZRTable',
  getInitialState: function getInitialState() {
    return {
      data: [],
      columns: [],
      checkeds: []
    };
  },
  __onSort: function __onSort(sort) {
    var _sort = null;

    for (var key in sort) {
      _sort = sort[key];
      this.state.data = this.state.data.sort(function (next, prev) {
        if (_sort == 'desc') {
          if (next[key] > prev[key]) {
            return 1;
          } else if (next[key] == prev[key]) {
            return 0;
          } else if (next[key] < prev[key]) {
            return -1;
          }
        }

        if (_sort == 'asc') {
          if (next[key] < prev[key]) {
            return 1;
          } else if (next[key] == prev[key]) {
            return 0;
          } else if (next[key] > prev[key]) {
            return -1;
          }
        }
      });
    }

    this.forceUpdate();
  },
  __onFilter: function __onFilter(filter) {
    console.log(filter, this.state.data);
  },
  __tbodyDataRender: function __tbodyDataRender(columns) {
    return /*#__PURE__*/React.createElement(table.TBody, _extends({}, this.props.tbody, {
      columns: columns,
      data: this.state.data,
      table: this
    }));
  },
  __tbodyLoadingRender: function __tbodyLoadingRender(columns) {
    return /*#__PURE__*/React.createElement(table.TBody, _extends({}, this.props.tbody, {
      columns: columns,
      loading: true,
      table: this
    }));
  },
  __onTHeadColumnChange: function __onTHeadColumnChange(data, index) {
    if (this.state.columns) {
      this.state.columns[index] = data;
      this.forceUpdate();
    }
  },
  __tbodyDataLoaded: function __tbodyDataLoaded(data) {
    this.setState({
      data: data
    });
  },
  __renderTBody: function __renderTBody(columns) {
    var _this = this;

    var _data = this.props.data || this.props.tbody.data;

    if (zn.is(_data, 'object')) {
      return /*#__PURE__*/React.createElement(znui.react.DataLifecycle, {
        data: _data,
        render: function render() {
          return _this.__tbodyDataRender(columns);
        },
        onFinished: this.__tbodyDataLoaded,
        onLoading: function onLoading() {
          return _this.__tbodyLoadingRender(columns);
        }
      });
    }

    if (zn.is(_data, 'array')) {
      return /*#__PURE__*/React.createElement(table.TBody, _extends({}, this.props.tbody, {
        columns: columns,
        data: _data,
        table: this
      }));
    }
  },
  __renderPager: function __renderPager(columns, props) {
    var _props = props,
        _Component = _props.component;

    if (zn.is(_Component, 'string')) {
      _Component = zn.path(window, _Component);
    }

    _Component = _Component || pager.SimplePager;

    if (_props.total == null) {
      _props.total = this.state.total;
    }

    if (_props.count == null) {
      _props.count = this.state.count;
    }

    if (_props.current == null) {
      _props.current = this.state.current || 1;
    }

    var _element = znui.react.createReactElement(this.props.pagerRender, {
      table: this
    });

    if (!_element) {
      _element = /*#__PURE__*/React.createElement(_Component, _props);
    }

    return /*#__PURE__*/React.createElement("tfoot", {
      className: "zr-table-pager"
    }, /*#__PURE__*/React.createElement("tr", {
      className: "pager-row"
    }, /*#__PURE__*/React.createElement("td", {
      colSpan: columns.length
    }, _element)));
  },
  __render: function __render() {
    var columns = this.state.columns;
    return /*#__PURE__*/React.createElement("table", _extends({
      className: znui.react.classname("zr-table", this.props.className),
      style: znui.react.style(this.props.style, {
        width: this.props.width
      }),
      "data-fixed": this.props.fixed,
      cellPadding: this.props.cellPadding || 0,
      cellSpacing: this.props.cellSpacing || 0
    }, this.props.attrs), !!this.props.caption && /*#__PURE__*/React.createElement("caption", {
      className: this.props.caption.className,
      style: this.props.caption.style
    }, this.props.caption.render), !!this.props.colgroup && /*#__PURE__*/React.createElement(table.Colgroup, _extends({
      columns: columns
    }, this.props.colgroup)), !!this.props.thead && /*#__PURE__*/React.createElement(table.THead, _extends({
      onSort: this.__onSort,
      onColumnChange: this.__onTHeadColumnChange,
      columns: columns
    }, this.props.thead, {
      table: this
    })), !!this.props.tfilter && /*#__PURE__*/React.createElement(table.TFilter, _extends({
      onFilter: this.__onFilter,
      columns: columns
    }, this.props.filter, {
      table: this
    })), !!this.props.tbody && this.__renderTBody(columns), !!this.props.tfoot && /*#__PURE__*/React.createElement(table.TFoot, _extends({
      columns: columns
    }, this.props.tfoot, {
      table: this
    })), !!this.props.pager && this.__renderPager(columns, this.props.pager));
  },
  __initCheckbox: function __initCheckbox(columns) {
    var _checkbox = {
      width: 60,
      head: function (argv) {
        var _this2 = this;

        var _table = argv.thead.props.table;
        return /*#__PURE__*/React.createElement(selector.Checkbox, {
          style: {
            justifyContent: 'center'
          },
          key: this.state.checkeds.length,
          text: '(' + _table.state.checkeds.length + ')',
          checked: !!_table.state.data.length && _table.state.checkeds.length === _table.state.data.length,
          onChange: function onChange(event) {
            if (event.checked) {
              _this2.state.checkeds = _this2.state.data.slice(0);
            } else {
              _this2.state.checkeds = [];
            }

            _this2.forceUpdate();

            _this2.props.onCheckboxChange && _this2.props.onCheckboxChange(_this2.state.checkeds, _this2);
          }
        });
      }.bind(this),
      body: function (argv) {
        var _this3 = this;

        var _data = argv.data;
        return /*#__PURE__*/React.createElement(selector.UncontrolCheckbox, {
          style: {
            justifyContent: 'center'
          },
          checked: this.state.checkeds.indexOf(_data) !== -1,
          onClick: function onClick(event, checkbox) {
            event.stopPropagation();

            if (checkbox.props.checked) {
              _this3.state.checkeds.splice(_this3.state.checkeds.indexOf(_data), 1);
            } else {
              _this3.state.checkeds.push(_data);
            }

            _this3.forceUpdate();

            _this3.props.onCheckboxChange && _this3.props.onCheckboxChange(_this3.state.checkeds, _this3);
          }
        });
      }.bind(this)
    },
        _value = this.props.checkbox;

    switch (zn.type(_value)) {
      case 'object':
        _checkbox = zn.extend({}, _value);
        break;

      case 'number':
        _checkbox.width = _value;
        break;
    }

    if (_value) {
      columns = columns.unshift(_checkbox);
    }
  },
  __columnsLoaded: function __columnsLoaded(columns) {
    var _columns = columns.map(function (column) {
      return zn.deepAssign({}, column);
    });

    this.__initCheckbox(_columns);

    if (this.props.eachColumn) {
      _columns = _columns.forEach(this.props.eachColumn);
    }

    this.setState({
      columns: _columns
    });
  },
  render: function render() {
    return /*#__PURE__*/React.createElement(znui.react.DataLifecycle, {
      onFinished: this.__columnsLoaded,
      data: this.props.columns,
      render: this.__render
    });
  }
});