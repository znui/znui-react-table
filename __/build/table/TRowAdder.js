"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var React = znui.React || require('react');
var filter = require('znui-react-filter');
module.exports = React.createClass({
  displayName: 'ZRRowAdder',
  getInitialState: function getInitialState() {
    return {
      submit_key: '',
      className: '',
      style: {},
      data: {},
      validate: false,
      required_fields: []
    };
  },
  __onFilterChange: function __onFilterChange(event, input) {
    if (event.name && event.opt) {
      if (event.value === null || event.value === undefined || event.value === '') {
        this.state.data[event.name] = null;
        delete this.state.data[event.name];
      } else if (!event.value && input && input.props && !input.props.emptyValueEnabled) {
        this.state.data[event.name] = null;
        delete this.state.data[event.name];
      } else {
        this.state.data[event.name] = event.value;
      }
    }
    this.props.onAddInputChange && this.props.onAddInputChange(event, {
      name: event.name,
      opt: event.opt,
      input: input,
      data: this.state.data
    });
    this.__validateData();
  },
  __validateData: function __validateData() {
    var _required_fields = this.state.required_fields;
    var _data = this.state.data;
    var _validate = true;
    var _iterator = _createForOfIteratorHelper(_required_fields),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var name = _step.value;
        if (!_data[name]) {
          _validate = false;
          break;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    this.setState({
      validate: _validate
    });
  },
  __onFilterCancel: function __onFilterCancel(name) {
    if (name && this.state.data) {
      this.state.data[name] = null;
      delete this.state.data[name];
      this.__validateData();
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
  __submit: function __submit() {
    var _this = this;
    if (this.state.validate) {
      this.props.onAddSubmit && this.props.onAddSubmit(this.state.data);
      if (this.props.submitApi) {
        this.props.submitApi.data.data = this.state.data;
        zn.data.create(this.props.submitApi, {
          before: function before(sender, data) {
            _this.setState({
              loading: true
            });
          },
          after: function after(sender, data, response, xhr) {
            if (data.code == 200) {
              _this.props.table.refresh();
              _this.state.data = {};
              _this.state.submit_key = zn.uuid();
              _this.validate();
              _this.props.onSubmitSuccess && _this.props.onSubmitSuccess(data, response, xhr);
            } else {
              _this.props.onSubmitError && _this.props.onSubmitError(data, response, xhr);
            }
            _this.setState({
              loading: false
            });
          },
          error: function error(sender, xhr) {
            _this.setState({
              loading: false
            });
          }
        });
      }
    }
  },
  __renderCell: function __renderCell(column, index) {
    if (column.name == "__index__") {
      var _result = this.props.checking && this.props.checking(column, index);
      if (_result === false) {
        return /*#__PURE__*/React.createElement("td", {
          key: index,
          className: znui.react.classname('tfilter-cell', column.fixed ? 'fixed' : ''),
          style: znui.react.style(column.fixedStyles)
        });
      }
      return /*#__PURE__*/React.createElement("td", {
        key: index,
        className: znui.react.classname('tfilter-cell', column.fixed ? 'fixed' : ''),
        style: znui.react.style(column.fixedStyles)
      }, this.state.loading ? /*#__PURE__*/React.createElement("div", {
        className: 'icon-btn disabled'
      }, /*#__PURE__*/React.createElement("i", {
        className: "fa fa-spinner fa-spin"
      })) : /*#__PURE__*/React.createElement("div", {
        className: 'icon-btn ' + (this.state.validate ? '' : 'disabled'),
        onClick: this.__submit
      }, /*#__PURE__*/React.createElement("i", {
        "data-tooltip": true,
        className: "fa fa-plus"
      })));
    }
    if (column.rowadder === false) {
      return /*#__PURE__*/React.createElement("td", {
        key: index,
        className: znui.react.classname('tfilter-cell', column.fixed ? 'fixed' : ''),
        style: znui.react.style(column.fixedStyles)
      });
    } else {}
    if (this.__validateColumn(column, index) === false) {
      return null;
    }
    if (!zn.is(column, 'object')) {
      return null;
    }
    var _element = znui.react.createReactElement(this.props.cellRender, {
      column: column,
      cellIndex: index,
      trowadder: this
    });
    if (_element) {
      return _element;
    }
    var _content = znui.react.createReactElement(column.render, {
      column: column,
      cellIndex: index,
      trowadder: this
    });
    var _rowadder = zn.extend(column.rowadder, column.filter);
    if (_rowadder.required && this.state.required_fields.indexOf(column.name) == -1) {
      this.state.required_fields.push(column.name);
    }
    if (!_content && _rowadder) {
      if (zn.is(_rowadder, 'function')) {
        if (_rowadder.prototype && _rowadder.prototype.render) {
          _content = znui.react.createReactElement(_rowadder, {
            column: column,
            trowadder: this
          });
        } else {
          _rowadder = _rowadder.call(null, column, this);
        }
      }
      if (zn.is(_rowadder, 'object')) {
        var _key = _rowadder.key || column.name;
        if (zn.is(_key, 'function')) {
          _key = _key.call(null, column, this);
        }
        _content = /*#__PURE__*/React.createElement(filter.FilterField, _extends({
          required: _rowadder.required,
          key: _key || zn.uuid()
        }, _rowadder, {
          name: column.name,
          onChange: this.__onFilterChange,
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
      className: znui.react.classname('tfilter-cell', column.fixed ? 'fixed' : '', _rowadder.required ? 'required' : '', _cell.className),
      style: znui.react.style(_cell.style, column.fixedStyles)
    }, _content);
  },
  __renderRow: function __renderRow() {
    var _element = znui.react.createReactElement(this.props.rowRender, {
      trowadder: this
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
      key: this.state.submit_key,
      className: znui.react.classname("zr-table-trowadder zr-table-tfilter", this.props.className, this.state.className),
      style: znui.react.style(this.props.style, this.state.style)
    }, this.__renderRow());
  }
});