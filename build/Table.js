"use strict";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = znui.React || require('react');

var table = require('./table/index');

var selector = require('znui-react-selector');

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
    return React.createElement(table.TBody, _extends({}, this.props.tbody, {
      columns: columns,
      data: this.state.data,
      table: this
    }));
  },
  __tbodyLoadingRender: function __tbodyLoadingRender(columns) {
    return React.createElement(table.TBody, _extends({}, this.props.tbody, {
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
  __render: function __render() {
    var _this = this;

    var columns = this.state.columns;
    return React.createElement("table", _extends({
      className: znui.react.classname("zr-table", this.props.className),
      style: this.props.style,
      "data-fixed": this.props.fixed,
      cellPadding: this.props.cellPadding || 0,
      cellSpacing: this.props.cellSpacing || 0
    }, this.props.attrs), !!this.props.caption && React.createElement("caption", {
      className: this.props.caption.className,
      style: this.props.caption.style
    }, this.props.caption.render), !!this.props.colgroup && React.createElement(table.Colgroup, _extends({
      columns: columns
    }, this.props.colgroup)), !!this.props.thead && React.createElement(table.THead, _extends({
      onSort: this.__onSort,
      onColumnChange: this.__onTHeadColumnChange,
      columns: columns
    }, this.props.thead, {
      table: this
    })), !!this.props.tfilter && React.createElement(table.TFilter, _extends({
      onFilter: this.__onFilter,
      columns: columns
    }, this.props.filter, {
      table: this
    })), !!this.props.tbody && React.createElement(znui.react.DataLifecycle, {
      onFinished: this.__tbodyDataLoaded,
      data: this.props.data || this.props.tbody.data,
      render: function render() {
        return _this.__tbodyDataRender(columns);
      },
      onLoading: function onLoading() {
        return _this.__tbodyLoadingRender(columns);
      }
    }), !!this.props.tfoot && React.createElement(table.TFoot, _extends({
      columns: columns
    }, this.props.tfoot, {
      table: this
    })));
  },
  __initCheckbox: function __initCheckbox(columns) {
    var _checkbox = {
      width: 60,
      head: function (argv) {
        var _this2 = this;

        var _table = argv.thead.props.table;
        return React.createElement(selector.Checkbox, {
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
        return React.createElement(selector.UncontrolCheckbox, {
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
    return React.createElement(znui.react.DataLifecycle, {
      onFinished: this.__columnsLoaded,
      data: this.props.columns,
      render: this.__render
    });
  }
});