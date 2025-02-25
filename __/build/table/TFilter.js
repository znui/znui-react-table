"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var React = znui.React || require('react');
var filter = require('znui-react-filter');
module.exports = React.createClass({
  displayName: 'ZRFilter',
  getInitialState: function getInitialState() {
    return {
      className: '',
      style: {},
      data: {}
    };
  },
  __onFilterChange: function __onFilterChange(event, input, filterField) {
    if (event.name && event.opt) {
      if (event.value === null || event.value === undefined || event.value === '') {
        this.state.data[event.name] = null;
        delete this.state.data[event.name];
      } else if (!event.value && input && input.props && !input.props.emptyValueEnabled) {
        this.state.data[event.name] = null;
        delete this.state.data[event.name];
      } else {
        this.state.data[event.name] = {
          value: event.value,
          opt: event.opt
        };
      }
    }
    this.props.onFilterChange && this.props.onFilterChange(event, {
      name: event.name,
      opt: event.opt,
      input: input,
      filterField: filterField,
      data: this.state.data
    });
    this.props.onFilter && this.props.onFilter(this.state.data);
  },
  __onFilterCancel: function __onFilterCancel(name) {
    if (name && this.state.data) {
      this.state.data[name] = null;
      delete this.state.data[name];
    }
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
  __renderCell: function __renderCell(column, index) {
    if (column.name == "__index__") {
      return /*#__PURE__*/React.createElement("td", {
        key: index,
        className: znui.react.classname('tfilter-cell', column.fixed ? 'fixed' : ''),
        style: znui.react.style(column.fixedStyles)
      }, /*#__PURE__*/React.createElement("div", {
        className: "icon-btn"
      }, /*#__PURE__*/React.createElement("i", {
        "data-tooltip": true,
        className: "fa fa-filter"
      })));
    }
    if (this.__validateColumn(column, index) === false) {
      return null;
    }
    if (!zn.is(column, 'object')) {
      return null;
    }
    var _element = znui.react.createReactElement(this.props.cellRender, {
      column: column,
      cellIndex: index,
      tfilter: this
    });
    if (_element) {
      return _element;
    }
    var _content = znui.react.createReactElement(column.render, {
      column: column,
      cellIndex: index,
      tfilter: this
    });
    if (!_content && column.filter) {
      var _filter = column.filter;
      if (zn.is(_filter, 'function')) {
        if (_filter.prototype && _filter.prototype.render) {
          _content = znui.react.createReactElement(_filter, {
            column: column,
            tfilter: this
          });
        } else {
          _filter = _filter.call(null, column, this);
        }
      }
      if (zn.is(_filter, 'object')) {
        var _key = _filter.key || column.name;
        if (zn.is(_key, 'function')) {
          _key = _key.call(null, column, this);
        }
        _content = /*#__PURE__*/React.createElement(filter.FilterField, _extends({
          key: _key || zn.uuid()
        }, _filter, {
          name: column.name,
          onFilterChange: this.__onFilterChange,
          onCancel: this.__onFilterCancel
        }));
      }
    }
    var _cell = zn.extend({
      style: {},
      className: ''
    }, this.props.cell);
    return /*#__PURE__*/React.createElement("td", {
      key: index,
      className: znui.react.classname('tfilter-cell', column.fixed ? 'fixed' : '', _cell.className),
      style: znui.react.style(_cell.style, column.fixedStyles)
    }, _content);
  },
  __renderRow: function __renderRow() {
    var _element = znui.react.createReactElement(this.props.rowRender, {
      tfilter: this
    });
    if (_element) {
      return _element;
    }
    var _row = zn.extend({
      className: '',
      style: {}
    }, this.props.row);
    return /*#__PURE__*/React.createElement("tr", {
      className: znui.react.classname("tfilter-row zr-table-trow", _row.className),
      style: _row.style
    }, (this.props.columns || []).map(this.__renderCell));
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("thead", {
      className: znui.react.classname("zr-table-tfilter", this.props.className, this.state.className),
      style: znui.react.style(this.props.style, this.state.style)
    }, this.__renderRow());
  }
});