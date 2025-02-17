(function(e, a) { for(var i in a) e[i] = a[i]; }(this, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Loading.js":
/*!********************!*\
  !*** ./Loading.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = znui.React || __webpack_require__(/*! react */ "react");
module.exports = React.createClass({
  displayName: "exports",
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      style: this.props.style,
      className: 'zr-table-loading ' + (this.props.className || '')
    }, /*#__PURE__*/React.createElement("div", {
      className: "lds-ring"
    }, /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null)));
  }
});

/***/ }),

/***/ "./PopupTable.js":
/*!***********************!*\
  !*** ./PopupTable.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var React = znui.React || __webpack_require__(/*! react */ "react");
var TablePager = __webpack_require__(/*! ./TablePager */ "./TablePager.js");
var selector = __webpack_require__(/*! znui-react-selector */ "znui-react-selector");
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

/***/ }),

/***/ "./Table.js":
/*!******************!*\
  !*** ./Table.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var React = znui.React || __webpack_require__(/*! react */ "react");
var table = __webpack_require__(/*! ./table/index */ "./table/index.js");
var selector = __webpack_require__(/*! znui-react-selector */ "znui-react-selector");
var Loading = __webpack_require__(/*! ./Loading */ "./Loading.js");
module.exports = React.createClass({
  displayName: 'ZRTable',
  getDefaultProps: function getDefaultProps() {
    return {
      border: true,
      resetCheckeds: false,
      fixedLayout: false,
      loadingEnabled: true,
      dataIndexEnabled: false,
      valueKey: 'zxnz_UUID',
      rowKey: 'zxnz_UUID'
    };
  },
  getInitialState: function getInitialState() {
    return {
      data: [],
      columns: [],
      checkeds: this.props.checkeds || []
    };
  },
  componentDidMount: function componentDidMount() {
    this.props.onComponentDidMount && this.props.onComponentDidMount(this);
  },
  __sortFunction: function __sortFunction(next, prev, key, _sort) {
    if (this.props.sortFunction) {
      return this.props.sortFunction(next, prev, key, _sort);
    }
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
  },
  __onSort: function __onSort(sorts) {
    var _this = this;
    var _return = this.props.onSortChange && this.props.onSortChange(sorts, this.state.data, this);
    if (_return !== false) {
      if (this.data && zn.isZNObject(this.data)) {
        if (!this.data._argv.data) {
          this.data._argv.data = {};
        }
        this.data._argv.data.sorts = sorts;
        this.data.refresh();
      } else {
        var _sort = null;
        for (var key in sorts) {
          _sort = sorts[key];
          this.state.data = this.state.data.sort(function (next, prev) {
            return _this.__sortFunction(next, prev, key, _sort);
          });
        }
        this.forceUpdate();
      }
    }
  },
  __onFilterChange: function __onFilterChange(evt, data) {
    var _return = this.props.onFilterFieldChange && this.props.onFilterFieldChange(evt, data, this);
    if (_return === false) {
      return false;
    }
  },
  __onFilter: function __onFilter(filters) {
    var _return = this.props.onFilterChange && this.props.onFilterChange(filters, this.state.data, this);
    if (_return !== false) {
      if (this.data && zn.isZNObject(this.data)) {
        if (!this.data._argv.data) {
          this.data._argv.data = {};
        }
        this.data._argv.data.filters = filters;
        this.data.refresh();
      }
    }
  },
  __onTBodyEachRowData: function __onTBodyEachRowData(data, index, tbody) {
    var _valueKey = this.props.valueKey || 'zxnz_UUID';
    if (this.props.checkbox && this.props.value && _valueKey) {
      var _value = data[_valueKey];
      if (this.props.value.indexOf(_value) != -1) {
        this.state.checkeds.push(_value);
      }
    }
    this.props.onEachRowData && this.props.onEachRowData(data, index, tbody, this);
  },
  __tbodyDataRender: function __tbodyDataRender(columns) {
    if (!this.state.data.length) {
      return /*#__PURE__*/React.createElement(table.TBodyEmpty, _extends({
        context: this.props.context
      }, this.props.tbody, {
        columns: columns,
        data: this.state.data,
        table: this
      }));
    }
    return /*#__PURE__*/React.createElement(table.TBody, _extends({
      rowKey: this.props.rowKey,
      row: this.props.row,
      context: this.props.context,
      eachRowData: this.__onTBodyEachRowData
    }, this.props.tbody, {
      columns: columns,
      fixedColumns: this.props.fixedColumns,
      data: this.state.data,
      table: this
    }));
  },
  __tbodyLoadingRender: function __tbodyLoadingRender(columns) {
    return /*#__PURE__*/React.createElement("tbody", {
      className: "tbody-loader"
    }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
      className: "data-loading"
    }, /*#__PURE__*/React.createElement("span", null, "\u52A0\u8F7D\u4E2D"), /*#__PURE__*/React.createElement(Loading, null)))));
    return /*#__PURE__*/React.createElement(table.TBody, _extends({
      rowKey: this.props.rowKey,
      row: this.props.row,
      context: this.props.context
    }, this.props.tbody, {
      columns: columns,
      fixedColumns: this.props.fixedColumns,
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
    var _return = this.props.onDataLoaded && this.props.onDataLoaded(data, this);
    if (_return !== false) {
      if (zn.is(data, 'object') && data.result) {
        data = data.result;
      }
      this.setState({
        data: data
      });
    }
  },
  __onDataCreated: function __onDataCreated(data, lifycycle) {
    this.data = data;
    this.props.onDataCreated && this.props.onDataCreated(data, this, lifycycle);
  },
  refresh: function refresh(callback, reset) {
    if (this.props.resetChecked || reset) {
      this.setState({
        checkeds: []
      });
    }
    if (this.data) {
      this.data.refresh(null, {
        after: function after(sender, data, response, xhr) {
          callback && callback(data, response, xhr);
        }
      });
    } else {
      callback && callback();
    }
    return this;
  },
  refreshHeaders: function refreshHeaders() {
    if (this.columns) {
      this.columns.refresh();
    }
    return this;
  },
  setData: function setData(data) {
    this.setState({
      data: data
    });
  },
  __fixedStyles: function __fixedStyles(index) {
    var _columns = this.state.columns || [],
      _width = 0;
    for (var i = 0; i < index; i++) {
      if (_columns[i].fixed) {
        _width += (_columns[i].width || 0) - 1;
      }
    }
    return {
      left: _width - 1
    };
  },
  __renderTBody: function __renderTBody(columns) {
    var _this2 = this;
    var _data = this.props.data || this.props.tbody.data;
    var _result = this.props.onDataInitial && this.props.onDataInitial(_data, this);
    if (_result) {
      _data = _result;
    }
    return /*#__PURE__*/React.createElement(znui.react.DataLifecycle, {
      data: _data,
      dataRender: function dataRender() {
        return _this2.__tbodyDataRender(columns);
      },
      loadingEnabled: this.props.loadingEnabled,
      loadingRender: function loadingRender() {
        return _this2.__tbodyLoadingRender(columns);
      },
      responseHandler: this.props.responseHandler,
      onDataCreated: this.__onDataCreated,
      onFinished: this.__tbodyDataLoaded
    });
  },
  __onFixedLayoutBodyScroll: function __onFixedLayoutBodyScroll(e) {
    this._layoutHeader.scrollLeft = e.target.scrollLeft;
  },
  __render: function __render() {
    var _this3 = this;
    var columns = this.state.columns;
    columns = columns.map(function (item, index) {
      if (item.fixed) {
        item.fixedStyles = _this3.__fixedStyles(index);
      }
      return item;
    });
    if (this.props.fixedLayout) {
      var _style = {};
      if (this.props.border) {
        _style.border = '1px solid #e6e6e6';
      }
      return /*#__PURE__*/React.createElement("div", {
        className: "zr-table-fixed-layout",
        style: _style
      }, /*#__PURE__*/React.createElement("div", {
        className: "fixed-layout-header",
        ref: function ref(_ref) {
          return _this3._layoutHeader = _ref;
        }
      }, /*#__PURE__*/React.createElement("table", _extends({
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
        context: this.props.context,
        keyMapping: this.props.keyMapping,
        columns: columns
      }, this.props.colgroup)), !!this.props.thead && /*#__PURE__*/React.createElement(table.THead, _extends({
        context: this.props.context,
        onSort: this.__onSort,
        onColumnChange: this.__onTHeadColumnChange,
        columns: columns,
        keyMapping: this.props.keyMapping
      }, this.props.thead, {
        table: this
      })), !!this.props.tfilter && /*#__PURE__*/React.createElement(table.TFilter, _extends({
        context: this.props.context,
        onFilterChange: this.__onFilterChange,
        onFilter: this.__onFilter,
        columns: columns
      }, this.props.tfilter, {
        table: this
      })), !!this.props.trowadder && /*#__PURE__*/React.createElement(table.TRowAdder, _extends({
        context: this.props.context,
        onAddSubmit: this.__onAddSubmit,
        onInputChange: this.__onAddInputChange,
        columns: columns
      }, this.props.trowadder, {
        table: this
      })))), /*#__PURE__*/React.createElement("div", {
        className: "fixed-layout-body",
        onScroll: this.__onFixedLayoutBodyScroll
      }, /*#__PURE__*/React.createElement("table", _extends({
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
        context: this.props.context,
        keyMapping: this.props.keyMapping,
        columns: columns
      }, this.props.colgroup)), (this.props.tbody || this.props.data) && this.__renderTBody(columns))), this.props.showFoot !== false && /*#__PURE__*/React.createElement("div", {
        className: "fixed-layout-footer"
      }, !!this.props.tfoot && /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement(table.TFoot, _extends({
        context: this.props.context,
        columns: columns
      }, this.props.tfoot, {
        table: this
      }))), this.props.childrenRender && this.props.childrenRender(columns, this), this.props.children));
    }
    var _style = {};
    /*
    if(this.props.border) {
    	_style.border = '1px solid #e6e6e6';
    }
    */

    return /*#__PURE__*/React.createElement("table", _extends({
      className: znui.react.classname("zr-table", this.props.className),
      style: znui.react.style(this.props.style, {
        width: this.props.width
      }, _style),
      "data-fixed": this.props.fixed,
      cellPadding: this.props.cellPadding || 0,
      cellSpacing: this.props.cellSpacing || 0
    }, this.props.attrs), !!this.props.caption && /*#__PURE__*/React.createElement("caption", {
      className: this.props.caption.className,
      style: this.props.caption.style
    }, this.props.caption.render), !!this.props.colgroup && /*#__PURE__*/React.createElement(table.Colgroup, _extends({
      context: this.props.context,
      keyMapping: this.props.keyMapping,
      columns: columns
    }, this.props.colgroup)), !!this.props.thead && /*#__PURE__*/React.createElement(table.THead, _extends({
      context: this.props.context,
      onSort: this.__onSort,
      onColumnChange: this.__onTHeadColumnChange,
      columns: columns,
      keyMapping: this.props.keyMapping
    }, this.props.thead, {
      table: this
    })), !!this.props.tfilter && /*#__PURE__*/React.createElement(table.TFilter, _extends({
      context: this.props.context,
      onFilter: this.__onFilter,
      columns: columns
    }, this.props.tfilter, {
      table: this
    })), (this.props.tbody || this.props.data) && this.__renderTBody(columns), !!this.props.tfoot && /*#__PURE__*/React.createElement(table.TFoot, _extends({
      context: this.props.context,
      columns: columns
    }, this.props.tfoot, {
      table: this
    })), this.props.childrenRender && this.props.childrenRender(columns, this), this.props.children);
  },
  __rowHeadCheckboxChecked: function __rowHeadCheckboxChecked() {
    var _checkeds = this.state.checkeds,
      _valueKey = this.props.valueKey || 'zxnz_UUID';
    if (!_checkeds.length) return false;
    var _iterator = _createForOfIteratorHelper(this.state.data),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var item = _step.value;
        if (!item.__checkedDisabled__ && _checkeds.indexOf(item[_valueKey]) == -1) {
          return false;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return true;
  },
  __onRowHeadCheckboxChange: function __onRowHeadCheckboxChange(event) {
    event.stopPropagation();
    var _valueKey = this.props.valueKey || 'zxnz_UUID';
    if (event.checked) {
      var _iterator2 = _createForOfIteratorHelper(this.state.data),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var item = _step2.value;
          if (!item.__checkedDisabled__ && this.state.checkeds.indexOf(item[_valueKey]) == -1) {
            this.state.checkeds.push(item[_valueKey]);
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    } else {
      var _iterator3 = _createForOfIteratorHelper(this.state.data),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var item = _step3.value;
          if (!item.__checkedDisabled__ && this.state.checkeds.indexOf(item[_valueKey]) != -1) {
            this.state.checkeds.splice(this.state.checkeds.indexOf(item[_valueKey]), 1);
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
    this.forceUpdate();
    this.props.onCheckboxChange && this.props.onCheckboxChange(this.state.checkeds, this);
  },
  __initCheckbox: function __initCheckbox(columns) {
    var _this4 = this;
    if (!this.props.checkbox) return;
    var _valueKey = this.props.valueKey || 'zxnz_UUID',
      _value = this.props.checkbox;
    var _checkbox = {
      width: 60,
      fixed: true,
      head: function head(argv) {
        var _table = argv.thead.props.table;
        if (!_table) return;
        return /*#__PURE__*/React.createElement(selector.Checkbox, {
          style: {
            justifyContent: 'center'
          },
          key: zn.uuid(),
          text: ' ' + _table.state.checkeds.length,
          checked: _this4.__rowHeadCheckboxChecked(),
          onChange: _this4.__onRowHeadCheckboxChange
        });
      },
      body: function body(argv) {
        var _data = argv.data;
        var _return = _this4.props.onBodyColumnCheckboxRender && _this4.props.onBodyColumnCheckboxRender(argv, _this4);
        if (_return) {
          return _return;
        }
        if (_return === false) {
          return null;
        }
        return /*#__PURE__*/React.createElement(selector.UncontrolCheckbox, {
          style: {
            justifyContent: 'center'
          },
          disabled: _data.__checkedDisabled__,
          checked: _this4.state.checkeds.indexOf(_data[_valueKey]) !== -1,
          onClick: function onClick(event, checkbox) {
            event.stopPropagation();
            if (checkbox.props.checked) {
              _this4.state.checkeds.splice(_this4.state.checkeds.indexOf(_data[_valueKey]), 1);
            } else {
              _this4.state.checkeds.push(_data[_valueKey]);
            }
            _this4.forceUpdate();
            _this4.props.onCheckboxChange && _this4.props.onCheckboxChange(_this4.state.checkeds, _this4);
          }
        });
      }
    };
    switch (zn.type(_value)) {
      case 'object':
        _checkbox = zn.extend({}, _value);
        break;
      case 'number':
        _checkbox.width = _value;
        break;
    }
    columns = columns.unshift(_checkbox);
  },
  __initIndexColumn: function __initIndexColumn(columns) {
    if (this.props.dataIndexEnabled) {
      columns = columns.unshift({
        width: 48,
        label: '索引',
        fixed: true,
        name: '__index__',
        body: function (argv) {
          return /*#__PURE__*/React.createElement("div", {
            style: {
              textAlign: 'center'
            }
          }, +argv.rowIndex + 1);
        }.bind(this)
      });
    }
  },
  __columnsLoaded: function __columnsLoaded(columns) {
    var _this5 = this;
    if (columns && zn.is(columns, 'array')) {
      var _temp = null,
        _result = null,
        _columnIterator = this.props.columnIterator,
        _columns = columns.map(function (column) {
          _temp = zn.deepAssign({}, column);
          _result = _columnIterator && _columnIterator(_temp, _this5);
          if (_result === false) return null;
          if (_typeof(_result) == 'object') return _result;
          return _temp;
        });
      this.__initCheckbox(_columns);
      this.__initIndexColumn(_columns);
      this.props.onColumnsLoaded && this.props.onColumnsLoaded(columns);
      this.setState({
        columns: _columns
      });
    }
  },
  __onColumnDataCreated: function __onColumnDataCreated(data, lifecycle) {
    this.columns = data;
    this.props.onColumnsCreated && this.props.onColumnsCreated(data, this, lifecycle);
  },
  getData: function getData() {
    return this.state.data;
  },
  removeRowData: function removeRowData(data) {
    if (data) {
      this.state.data.splice(this.state.data.indexOf(data), 1);
      this.forceUpdate();
    }
    return this;
  },
  updateRowData: function updateRowData(data) {
    if (data) {
      var _index = this.state.data.indexOf(data);
      this.state.data[_index] = data;
      this.forceUpdate();
    }
    return this;
  },
  render: function render() {
    return /*#__PURE__*/React.createElement(znui.react.DataLifecycle, {
      data: this.props.columns,
      render: this.__render,
      responseHandler: this.props.responseHandler,
      onLoading: this.props.onColumnLoading,
      onFinished: this.__columnsLoaded,
      onError: this.props.onColumnLoadError,
      onDataCreated: this.__onColumnDataCreated
    });
  }
});

/***/ }),

/***/ "./TableEditor.js":
/*!************************!*\
  !*** ./TableEditor.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var React = znui.React || __webpack_require__(/*! react */ "react");
var Table = __webpack_require__(/*! ./Table */ "./Table.js");
var input = __webpack_require__(/*! znui-react-input */ "znui-react-input");
module.exports = React.createClass({
  displayName: 'ZRTableEditor',
  getInitialState: function getInitialState() {
    return {
      table: null,
      columns: []
    };
  },
  __cellChange: function __cellChange(event, argv) {
    argv.data[argv.tcell.props.name] = event.value;
    argv.trow.forceUpdate();
  },
  __columnBodyRender: function __columnBodyRender(argv) {
    var _this = this;
    return /*#__PURE__*/React.createElement(input.Input, {
      key: argv.value,
      value: argv.value,
      onBlur: function onBlur(event) {
        return _this.__cellChange(event, argv);
      },
      onEnter: function onEnter(event) {
        return _this.__cellChange(event, argv);
      }
    });
  },
  __columnIterator: function __columnIterator(column, table) {
    if (!column.body) {
      column.body = this.__columnBodyRender;
    }
    return column;
  },
  setData: function setData(data) {
    var _return = this.props.onDataChange && this.props.onDataChange(data, this.state.table, this);
    if (_return === false) {
      return false;
    }
    if (_typeof(_return) == 'object') {
      data = _return;
    }
    this.state.table.state.data = data;
    this.state.table.forceUpdate();
    return this;
  },
  getData: function getData() {
    return this.state.table.getData();
  },
  addRow: function addRow(data) {
    var _return = this.props.onDataChange && this.props.onDataChange([data], this.state.table, this);
    if (_return === false) {
      return false;
    }
    if (zn.is(_return, 'array')) {
      data = _return;
    } else if (zn.is(_return, 'object')) {
      data = [data];
    }
    this.state.table.state.data = this.state.table.state.data.concat(data);
    this.state.table.forceUpdate();
    return this;
  },
  render: function render() {
    var _this2 = this;
    return /*#__PURE__*/React.createElement(Table, _extends({}, this.props, {
      ref: function ref(_ref) {
        return _this2.state.table = _ref;
      },
      className: znui.react.classname('zr-table-editor', this.props.className),
      columnIterator: this.__columnIterator
    }));
  }
});

/***/ }),

/***/ "./TablePager.js":
/*!***********************!*\
  !*** ./TablePager.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var React = znui.React || __webpack_require__(/*! react */ "react");
var Table = __webpack_require__(/*! ./Table */ "./Table.js");
var pager = __webpack_require__(/*! znui-react-pager */ "znui-react-pager");
module.exports = React.createClass({
  displayName: 'ZRTablePager',
  getInitialState: function getInitialState() {
    return {
      count: 0,
      current: 1,
      data: [],
      total: 0,
      pageIndex: this.props.pageIndex || 1,
      pageSize: this.props.pageSize || 10
    };
  },
  componentDidMount: function componentDidMount() {
    this.props.onComponentDidMount && this.props.onComponentDidMount(this);
  },
  resetCheckeds: function resetCheckeds() {
    return this._table.setState({
      checkeds: []
    }), this;
  },
  setPageIndex: function setPageIndex(pageIndex, argv, callback) {
    if (this.data) {
      if (argv && argv.__reset__) {
        argv.__reset__ = null;
        delete argv.__reset__;
        if (pageIndex == 1) {
          this._table.setState({
            checkeds: []
          });
        }
      }
      this.state.pageIndex = pageIndex;
      this.state.current = pageIndex;
      this.forceUpdate();
      this.data._argv = this.__onDataInitial(this.props.data);
      if (argv && _typeof(argv) == 'object') {
        if (!this.data._argv.data) {
          this.data._argv.data = {};
        }
        for (var key in argv) {
          this.data._argv.data[key] = argv[key];
        }
      }
      this.data.refresh(callback);
    }
    return this;
  },
  refresh: function refresh(callback, reset) {
    if (this._table) {
      this._table.refresh(callback, reset);
    }
  },
  __handlePageChanged: function __handlePageChanged(newPage) {
    var _return = this.props.onPageChanged && this.props.onPageChanged(newPage, this);
    if (_return !== false) {
      this.setPageIndex(newPage);
    }
  },
  __handlePageSizeChange: function __handlePageSizeChange(event) {
    var _this = this;
    this.setState({
      pageSize: event.target.value
    }, function () {
      return _this.setPageIndex(1);
    });
  },
  __renderPager: function __renderPager(columns, table) {
    var _columnSize = columns.length;
    if (!_columnSize) {
      return null;
    }
    var _state = this.state,
      _element = null,
      _pagerProps = {
        total: _state.total,
        count: _state.count,
        current: _state.current,
        pageSize: _state.pageSize,
        onPageChanged: this.__handlePageChanged,
        onPageSizeChange: this.__handlePageSizeChange
      },
      _Component = this.props.pager || pager.Pager;
    if (zn.is(_Component, 'string')) {
      _Component = zn.path(window, _Component);
    } else if (zn.is(_Component, 'object') && _Component.component) {
      _element = znui.react.createReactElement(_Component.component, zn.extend({}, _Component, _pagerProps));
    }
    if (this.props.pagerRender) {
      _element = znui.react.createReactElement(this.props.pagerRender, _pagerProps);
    }
    if (!_element && _Component && zn.is(_Component, 'function')) {
      _element = /*#__PURE__*/React.createElement(_Component, _pagerProps);
    }
    if (this.props.fixedLayout) {
      return /*#__PURE__*/React.createElement("div", null, _element);
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
    _params[_keyMaps.pageIndex] = this.state.pageIndex || 1;
    _params[_keyMaps.pageSize] = this.state.pageSize || 10;
    if (_method == 'get') {
      data = zn.deepAssign(data, {
        params: _params
      });
    } else {
      data = zn.deepAssign(data, {
        data: _params
      });
    }
    return this.state.keyMaps = _keyMaps, data;
  },
  __onDataCreated: function __onDataCreated(data, table) {
    this.data = data;
    this.props.onDataCreated && this.props.onDataCreated(data, table, this);
  },
  __onDataLoaded: function __onDataLoaded(data, table) {
    if (this.props.zxnz) {
      if (zn.is(data, 'object') && data.code != 200) {
        return console.error(data.detail), false;
      }
      if (zn.is(data, 'object') && data.code == 200) {
        data = data.result;
      }
      if (!zn.is(data, 'array')) {
        return console.error("TablePager Component Data Type Error."), false;
      }
      var _data = data[0],
        _pagerCount = data[1][0].count;
      var _return = this.props.onDataLoaded && this.props.onDataLoaded(_data, table, this);
      if (_return !== false) {
        table.setState({
          data: _data
        });
        this.setState({
          total: Math.ceil(_pagerCount / this.state.pageSize),
          count: _pagerCount,
          current: this.state.current
        });
      }
    } else {
      if (zn.is(data, 'array')) {
        return console.error('The data is array, but it need return object'), false;
      }
      var _data = data.data;
      var _return = this.props.onDataLoaded && this.props.onDataLoaded(_data, table, this);
      if (_return !== false) {
        table.setState({
          data: _data[this.state.keyMaps.data]
        });
        this.setState({
          total: Math.ceil(_data[this.state.keyMaps.total] / this.state.pageSize),
          count: _data[this.state.keyMaps.total],
          current: _data[this.state.keyMaps.pageIndex]
        });
      }
    }
    return false;
  },
  __onFilterChange: function __onFilterChange(filters, data, table) {
    var _return = this.props.onFilterChange && this.props.onFilterChange(filters, data, table);
    if (_return !== false) {
      this.setPageIndex(1, {
        filters: filters
      });
    }
    return false;
  },
  render: function render() {
    var _this2 = this;
    return /*#__PURE__*/React.createElement(Table, _extends({}, this.props, {
      className: znui.react.classname('zr-table-pager', this.props.className),
      childrenRender: this.__renderPager,
      onComponentDidMount: function onComponentDidMount(table) {
        _this2._table = table;
      },
      onFilterChange: this.__onFilterChange,
      onDataInitial: this.__onDataInitial,
      onDataCreated: this.__onDataCreated,
      onDataLoaded: this.__onDataLoaded
    }));
  }
});

/***/ }),

/***/ "./cell/Checkbox.js":
/*!**************************!*\
  !*** ./cell/Checkbox.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = znui.React || __webpack_require__(/*! react */ "react");
var Checkbox = __webpack_require__(/*! znui-react-selector */ "znui-react-selector").Checkbox;
module.exports = React.createClass({
  displayName: 'ZRTCellCheckbox',
  getInitialState: function getInitialState() {
    return {
      checked: this.props.checked || false
    };
  },
  __onCheckboxChange: function __onCheckboxChange(event) {
    event.stopPropagation();
    if (this.props.thead) {
      this.__onHeadChange(event);
    } else if (this.props.tbody) {
      this.__onBodyChange(event);
    }
  },
  __onHeadChange: function __onHeadChange(event) {
    console.log(event.checked, this.props);
  },
  __onBodyChange: function __onBodyChange(event) {
    console.log(event.checked, this.props);
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "zr-table-cell-checkbox"
    }, /*#__PURE__*/React.createElement(Checkbox, {
      checked: true,
      onChange: this.__onCheckboxChange
    }));
  }
});

/***/ }),

/***/ "./cell/index.js":
/*!***********************!*\
  !*** ./cell/index.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  Checkbox: __webpack_require__(/*! ./Checkbox */ "./cell/Checkbox.js")
  //Buttons: require('./Buttons'),
  //Input: require('./Input'),
  //Calculator: require('./Calculator')
};

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  table: __webpack_require__(/*! ./table/index */ "./table/index.js"),
  cell: __webpack_require__(/*! ./cell/index */ "./cell/index.js"),
  PopupTable: __webpack_require__(/*! ./PopupTable */ "./PopupTable.js"),
  Table: __webpack_require__(/*! ./Table */ "./Table.js"),
  TableEditor: __webpack_require__(/*! ./TableEditor */ "./TableEditor.js"),
  TablePager: __webpack_require__(/*! ./TablePager */ "./TablePager.js")
};

/***/ }),

/***/ "./table/Colgroup.js":
/*!***************************!*\
  !*** ./table/Colgroup.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = znui.React || __webpack_require__(/*! react */ "react");
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

/***/ }),

/***/ "./table/TBody.js":
/*!************************!*\
  !*** ./table/TBody.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var React = znui.React || __webpack_require__(/*! react */ "react");
var TRow = __webpack_require__(/*! ./TRow */ "./table/TRow.js");
var loader = __webpack_require__(/*! znui-react-loader */ "znui-react-loader");
module.exports = React.createClass({
  displayName: 'ZRTBody',
  getInitialState: function getInitialState() {
    var _pageSize = this.props.pageSize || 50;
    var _columnKeyMap = {},
      _default = {};
    var _iterator = _createForOfIteratorHelper(this.props.columns),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var column = _step.value;
        _columnKeyMap[column.name] = column;
        if (column.value !== null && column.value !== undefined) {
          _default[column.name] = column.value;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return {
      active: null,
      checkeds: [],
      className: '',
      columnKeyMap: _columnKeyMap,
      "default": _default,
      pageIndex: this.props.pageIndex || 1,
      pageSize: _pageSize,
      style: {},
      loading: false
    };
  },
  componentDidMount: function componentDidMount() {
    var _iterator2 = _createForOfIteratorHelper(this.props.data),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var item = _step2.value;
        this.__initialDataItem(item);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  },
  __initialDataItem: function __initialDataItem(data) {
    var _default = this.state["default"],
      _columnKeyMap = this.state.columnKeyMap,
      _value = null;
    for (var key in _default) {
      _value = _default[key];
      if (typeof _value == 'string' && _value.indexOf('{') != -1 && _value.indexOf('}') != -1) {
        _value = _value.format(data || {});
        if (_columnKeyMap[key]) {
          switch (_columnKeyMap[key].dataType) {
            case 'Number':
              if (_value.indexOf('{') == -1) {
                try {
                  _value = eval(_value);
                } catch (err) {
                  _value = 0;
                  zn.error(err);
                }
              }
              break;
            case 'Price':
              _value = znui.react.stringifyPrice(_value);
              break;
          }
        }
        data[key] = _value;
      }
      if (data[key] == null) {
        data[key] = _value;
      }
    }
    return data;
  },
  __getData: function __getData(pageIndex, pageSize) {
    var _pageIndex = pageIndex || this.state.pageIndex;
    var _pageSize = pageSize || this.state.pageSize;
    return this.props.data.slice((_pageIndex - 1) * _pageSize, Math.min(_pageIndex * _pageSize, this.props.data.length));
  },
  __renderLoading: function __renderLoading() {
    var _element = znui.react.createReactElement(this.props.loadingRender, {
      tbody: this
    }, this.props.context);
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
    }, this.props.context);
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
    var _temp = this.props.eachRowData && this.props.eachRowData(item, index, this);
    if (_temp && zn.is(_temp, 'object')) {
      item = _temp;
    }
    var _element = znui.react.createReactElement(this.props.rowRender, {
      data: item,
      rowIndex: index,
      tbody: this
    }, this.props.context);
    if (_element) {
      return _element;
    }
    var _rowKey = this.props.rowKey;
    var _key = item[_rowKey] || index;
    return /*#__PURE__*/React.createElement(TRow, _extends({
      key: _key + '-' + index,
      rowIndex: index
    }, this.props.row, {
      context: this.props.context,
      cell: this.props.cell,
      cellRender: this.props.cellRender,
      columns: this.props.columns,
      fixedColumns: this.props.fixedColumns,
      tbody: this,
      active: this.state.active == item,
      data: item,
      checked: this.state.checkeds.indexOf(item) !== -1,
      onRowClick: this.__onRowClick,
      onCellClick: this.__onCellClick
    }));
  },
  __pageChange: function __pageChange(pageIndex) {
    this.setState({
      pageIndex: pageIndex
    });
  },
  __pagesRender: function __pagesRender() {
    var _this = this;
    var _pageCount = Math.ceil(this.props.data.length / this.state.pageSize),
      _pages = [];
    if (_pageCount > 1) {
      for (var i = 1; i < _pageCount + 1; i++) {
        _pages.push(i);
      }
      return /*#__PURE__*/React.createElement("tr", {
        className: znui.react.classname("tbody-pages", '')
      }, /*#__PURE__*/React.createElement("td", {
        colSpan: this.props.columns.length
      }, /*#__PURE__*/React.createElement("div", {
        className: "data-page"
      }, /*#__PURE__*/React.createElement("div", {
        className: "pages"
      }, _pages.map(function (i, index) {
        return /*#__PURE__*/React.createElement("span", {
          key: index,
          className: 'page ' + (_this.state.pageIndex == i ? 'active' : ''),
          onClick: function onClick() {
            return _this.__pageChange(i);
          }
        }, i);
      })), /*#__PURE__*/React.createElement("span", {
        className: "page-count"
      }, "\u5171 ", this.props.data.length, " \u6761"))));
    }
  },
  __renderData: function __renderData() {
    if (this.props.data == null || this.props.data && !this.props.data.length) {
      return this.__renderEmpty();
    }
    var _pageCount = Math.ceil(this.props.data.length / this.state.pageSize);
    if (_pageCount > 1) {
      return /*#__PURE__*/React.createElement(React.Fragment, null, this.__pagesRender(), this.__getData(this.state.pageIndex, this.state.pageSize).map(this.__renderRow));
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

/***/ }),

/***/ "./table/TBodyEmpty.js":
/*!*****************************!*\
  !*** ./table/TBodyEmpty.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = znui.React || __webpack_require__(/*! react */ "react");
module.exports = React.createClass({
  displayName: 'ZRTBodyEmpty',
  __renderEmpty: function __renderEmpty() {
    var _element = znui.react.createReactElement(this.props.emptyRender, {
      tbody: this
    }, this.props.context);
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
  render: function render() {
    return /*#__PURE__*/React.createElement("tbody", {
      className: znui.react.classname("zr-table-tbody-empty", this.props.className),
      style: znui.react.style(this.props.style)
    }, this.__renderEmpty());
  }
});

/***/ }),

/***/ "./table/TCell.js":
/*!************************!*\
  !*** ./table/TCell.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = znui.React || __webpack_require__(/*! react */ "react");
var ReactDOM = znui.ReactDOM || __webpack_require__(/*! react-dom */ "react-dom");
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

/***/ }),

/***/ "./table/TFilter.js":
/*!**************************!*\
  !*** ./table/TFilter.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var React = znui.React || __webpack_require__(/*! react */ "react");
var filter = __webpack_require__(/*! znui-react-filter */ "znui-react-filter");
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

/***/ }),

/***/ "./table/TFoot.js":
/*!************************!*\
  !*** ./table/TFoot.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = znui.React || __webpack_require__(/*! react */ "react");
module.exports = React.createClass({
  displayName: 'ZRTFoot',
  __renderChildren: function __renderChildren() {
    var _columns = this.props.columns || [];
    if (this.props.children) {
      return /*#__PURE__*/React.createElement("tr", {
        className: "tfoot-row"
      }, /*#__PURE__*/React.createElement("td", {
        colSpan: _columns.length
      }, this.props.children));
    } else {
      return this.__renderRow();
    }
  },
  __renderCell: function __renderCell(column, index) {
    if (!zn.is(column, 'object')) {
      return null;
    }
    var _element = znui.react.createReactElement(this.props.cellRender, {
      column: column,
      cellIndex: index,
      tfoot: this
    });
    if (_element) {
      return _element;
    }
    var _content = znui.react.createReactElement(column.render || column.foot, {
      column: column,
      cellIndex: index,
      tfoot: this
    });
    if (this.props.render) {
      _content = this.props.render(column, index, this);
    }
    var _cell = zn.extend({
      style: {},
      className: ''
    }, this.props.cell);
    return /*#__PURE__*/React.createElement("th", {
      key: index,
      className: znui.react.classname('tfoot-cell', _cell.className),
      style: _cell.style
    }, _content);
  },
  __renderRow: function __renderRow() {
    var _element = znui.react.createReactElement(this.props.rowRender, {
      thead: this
    });
    if (_element) {
      return _element;
    }
    var _row = zn.extend({
      className: '',
      style: {}
    }, this.props.row);
    return /*#__PURE__*/React.createElement("tr", {
      className: znui.react.classname("tfoot-row", _row.className),
      style: _row.style
    }, (this.props.columns || []).map(this.__renderCell));
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("tfoot", {
      className: znui.react.classname("zr-table-tfoot", this.props.className),
      style: this.props.style
    }, this.__renderChildren());
  }
});

/***/ }),

/***/ "./table/THead.js":
/*!************************!*\
  !*** ./table/THead.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = znui.React || __webpack_require__(/*! react */ "react");
var THeadSort = __webpack_require__(/*! ./THeadSort */ "./table/THeadSort.js");
var popup = __webpack_require__(/*! znui-react-popup */ "znui-react-popup");
var zrjson = __webpack_require__(/*! znui-react-json */ "znui-react-json");
module.exports = React.createClass({
  displayName: 'THead',
  getDefaultProps: function getDefaultProps() {
    return {};
  },
  getInitialState: function getInitialState() {
    return {
      className: '',
      style: {},
      sort: {},
      filter: {}
    };
  },
  __onColumnSort: function __onColumnSort(sort, column) {
    if (column.name) {
      this.state.sort[column.name] = sort;
    }
    this.props.onSort && this.props.onSort(this.state.sort);
  },
  __onColumnEditorChange: function __onColumnEditorChange(data, child, root, index) {
    var _root = root || child;
    this.props.onColumnChange && this.props.onColumnChange(_root.state.value, index);
  },
  __iconClickRender: function __iconClickRender(column, index) {
    var _this = this;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 10,
        maxHeight: 500,
        width: 400,
        overflow: 'auto'
      }
    }, /*#__PURE__*/React.createElement(zrjson.editor.object, {
      fold: false,
      displayClosure: true,
      displayItemCount: true,
      label: 'Column',
      value: column,
      onChange: function onChange(data, child, root) {
        return _this.__onColumnEditorChange(data, child, root, index);
      }
    }));
  },
  __sortRender: function __sortRender() {},
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
    var _this2 = this;
    if (this.__validateColumn(column, index) === false) {
      return null;
    }
    if (!zn.is(column, 'object')) {
      return null;
    }
    var _element = znui.react.createReactElement(this.props.cellRender, {
      column: column,
      cellIndex: index,
      thead: this
    });
    if (_element) {
      return _element;
    }
    var _content = znui.react.createReactElement(column.render || column.head, {
        column: column,
        cellIndex: index,
        thead: this,
        table: this.props.table
      }),
      _mapping = this.props.keyMapping || {},
      _labelKey = _mapping['label'] || 'label',
      _label = column[_labelKey];
    if (zn.is(_label, 'function')) {
      _label = _label(column, this);
    }
    if (!_content) {
      _content = /*#__PURE__*/React.createElement("div", {
        className: "cell-label " + (column.sort ? 'sortable' : ''),
        title: _label
      }, !!column.required && /*#__PURE__*/React.createElement("span", {
        "data-zr-popup-tooltip": "\u5FC5\u8981\u5B57\u6BB5",
        className: "required"
      }, "*"), _label, !!column.editable && /*#__PURE__*/React.createElement(popup.Dropdown, {
        className: "cell-editor",
        popover: {
          render: this.__iconClickRender(column, index),
          closeable: true
        }
      }, /*#__PURE__*/React.createElement("svg", {
        "aria-hidden": "true",
        focusable: "false",
        "data-prefix": "fas",
        "data-icon": "edit",
        className: "icon svg-inline--fa fa-edit fa-w-18 ",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 576 512"
      }, /*#__PURE__*/React.createElement("path", {
        fill: "currentColor",
        d: "M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"
      }))));
    }
    var _cell = zn.extend({
      style: {},
      className: ''
    }, this.props.cell, column);
    return /*#__PURE__*/React.createElement("th", {
      key: index,
      className: znui.react.classname('thead-cell', column.fixed ? 'fixed' : '', _cell.className),
      style: znui.react.style(_cell.style, column.fixedStyles)
    }, _content, !!column.sort && /*#__PURE__*/React.createElement(THeadSort, {
      className: "cell-sort",
      onSort: function onSort(sort) {
        return _this2.__onColumnSort(sort, column);
      }
    }));
  },
  __renderRow: function __renderRow() {
    var _element = znui.react.createReactElement(this.props.rowRender, {
      thead: this
    });
    if (_element) {
      return _element;
    }
    var _row = zn.extend({
      className: '',
      style: {}
    }, this.props.row);
    return /*#__PURE__*/React.createElement("tr", {
      className: znui.react.classname("thead-row", _row.className),
      style: _row.style
    }, (this.props.columns || []).map(this.__renderCell));
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("thead", {
      className: znui.react.classname("zr-table-thead", this.props.className, this.state.className),
      style: znui.react.style(this.props.style, this.state.style)
    }, this.__renderRow());
  }
});

/***/ }),

/***/ "./table/THeadSort.js":
/*!****************************!*\
  !*** ./table/THeadSort.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = znui.React || __webpack_require__(/*! react */ "react");
module.exports = React.createClass({
  displayName: 'ZRTHeadSort',
  getInitialState: function getInitialState() {
    return {
      sort: 'desc'
    };
  },
  __renderIcon: function __renderIcon() {
    var _this = this;
    switch (this.state.sort) {
      case "faSort":
        return /*#__PURE__*/React.createElement("svg", {
          onClick: function onClick() {
            return _this.__iconClick('up');
          },
          "aria-hidden": "true",
          focusable: "false",
          "data-prefix": "fas",
          "data-icon": "sort",
          className: "icon svg-inline--fa fa-sort fa-w-10 ",
          role: "img",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 320 512"
        }, /*#__PURE__*/React.createElement("path", {
          fill: "currentColor",
          d: "M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"
        }));
      case "desc":
        return /*#__PURE__*/React.createElement("svg", {
          onClick: function onClick() {
            return _this.__iconClick('asc');
          },
          "aria-hidden": "true",
          focusable: "false",
          "data-prefix": "fas",
          "data-icon": "sort-down",
          className: "icon svg-inline--fa fa-sort-alpha-down fa-w-14 ",
          role: "img",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 448 512"
        }, /*#__PURE__*/React.createElement("path", {
          fill: "currentColor",
          d: "M176 352h-48V48a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v304H16c-14.19 0-21.36 17.24-11.29 27.31l80 96a16 16 0 0 0 22.62 0l80-96C197.35 369.26 190.22 352 176 352zm240-64H288a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h56l-61.26 70.45A32 32 0 0 0 272 446.37V464a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-56l61.26-70.45A32 32 0 0 0 432 321.63V304a16 16 0 0 0-16-16zm31.06-85.38l-59.27-160A16 16 0 0 0 372.72 32h-41.44a16 16 0 0 0-15.07 10.62l-59.27 160A16 16 0 0 0 272 224h24.83a16 16 0 0 0 15.23-11.08l4.42-12.92h71l4.41 12.92A16 16 0 0 0 407.16 224H432a16 16 0 0 0 15.06-21.38zM335.61 144L352 96l16.39 48z"
        }));
      case "asc":
        return /*#__PURE__*/React.createElement("svg", {
          onClick: function onClick() {
            return _this.__iconClick('desc');
          },
          "aria-hidden": "true",
          focusable: "false",
          "data-prefix": "fas",
          "data-icon": "sort-up",
          className: "icon svg-inline--fa fa-sort-alpha-up fa-w-14 ",
          role: "img",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 448 512"
        }, /*#__PURE__*/React.createElement("path", {
          fill: "currentColor",
          d: "M16 160h48v304a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V160h48c14.21 0 21.38-17.24 11.31-27.31l-80-96a16 16 0 0 0-22.62 0l-80 96C-5.35 142.74 1.78 160 16 160zm400 128H288a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h56l-61.26 70.45A32 32 0 0 0 272 446.37V464a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-56l61.26-70.45A32 32 0 0 0 432 321.63V304a16 16 0 0 0-16-16zm31.06-85.38l-59.27-160A16 16 0 0 0 372.72 32h-41.44a16 16 0 0 0-15.07 10.62l-59.27 160A16 16 0 0 0 272 224h24.83a16 16 0 0 0 15.23-11.08l4.42-12.92h71l4.41 12.92A16 16 0 0 0 407.16 224H432a16 16 0 0 0 15.06-21.38zM335.61 144L352 96l16.39 48z"
        }));
    }
  },
  __iconClick: function __iconClick(sort) {
    this.setState({
      sort: sort
    });
    this.props.onSort && this.props.onSort(sort);
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname('zr-table-thead-sort', this.props.className),
      style: this.props.style
    }, this.__renderIcon());
  }
});

/***/ }),

/***/ "./table/TRow.js":
/*!***********************!*\
  !*** ./table/TRow.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var React = znui.React || __webpack_require__(/*! react */ "react");
var ReactDOM = znui.ReactDOM || __webpack_require__(/*! react-dom */ "react-dom");
var TCell = __webpack_require__(/*! ./TCell */ "./table/TCell.js");
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

/***/ }),

/***/ "./table/TRowAdder.js":
/*!****************************!*\
  !*** ./table/TRowAdder.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var React = znui.React || __webpack_require__(/*! react */ "react");
var filter = __webpack_require__(/*! znui-react-filter */ "znui-react-filter");
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

/***/ }),

/***/ "./table/index.js":
/*!************************!*\
  !*** ./table/index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  Colgroup: __webpack_require__(/*! ./Colgroup */ "./table/Colgroup.js"),
  TFilter: __webpack_require__(/*! ./TFilter */ "./table/TFilter.js"),
  TRowAdder: __webpack_require__(/*! ./TRowAdder */ "./table/TRowAdder.js"),
  TBody: __webpack_require__(/*! ./TBody */ "./table/TBody.js"),
  TBodyEmpty: __webpack_require__(/*! ./TBodyEmpty */ "./table/TBodyEmpty.js"),
  TCell: __webpack_require__(/*! ./TCell */ "./table/TCell.js"),
  TFoot: __webpack_require__(/*! ./TFoot */ "./table/TFoot.js"),
  THead: __webpack_require__(/*! ./THead */ "./table/THead.js"),
  TRow: __webpack_require__(/*! ./TRow */ "./table/TRow.js")
};

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["ReactDOM"]; }());

/***/ }),

/***/ "znui-react-filter":
/*!*************************!*\
  !*** external "filter" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["filter"]; }());

/***/ }),

/***/ "znui-react-input":
/*!************************!*\
  !*** external "input" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["input"]; }());

/***/ }),

/***/ "znui-react-json":
/*!***********************!*\
  !*** external "json" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["json"]; }());

/***/ }),

/***/ "znui-react-loader":
/*!*************************!*\
  !*** external "loader" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["loader"]; }());

/***/ }),

/***/ "znui-react-pager":
/*!************************!*\
  !*** external "pager" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["pager"]; }());

/***/ }),

/***/ "znui-react-popup":
/*!************************!*\
  !*** external "popup" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["popup"]; }());

/***/ }),

/***/ "znui-react-selector":
/*!***************************!*\
  !*** external "selector" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["selector"]; }());

/***/ })

/******/ })));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vTG9hZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9Qb3B1cFRhYmxlLmpzIiwid2VicGFjazovLy8uL1RhYmxlLmpzIiwid2VicGFjazovLy8uL1RhYmxlRWRpdG9yLmpzIiwid2VicGFjazovLy8uL1RhYmxlUGFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY2VsbC9DaGVja2JveC5qcyIsIndlYnBhY2s6Ly8vLi9jZWxsL2luZGV4LmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3RhYmxlL0NvbGdyb3VwLmpzIiwid2VicGFjazovLy8uL3RhYmxlL1RCb2R5LmpzIiwid2VicGFjazovLy8uL3RhYmxlL1RCb2R5RW1wdHkuanMiLCJ3ZWJwYWNrOi8vLy4vdGFibGUvVENlbGwuanMiLCJ3ZWJwYWNrOi8vLy4vdGFibGUvVEZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi90YWJsZS9URm9vdC5qcyIsIndlYnBhY2s6Ly8vLi90YWJsZS9USGVhZC5qcyIsIndlYnBhY2s6Ly8vLi90YWJsZS9USGVhZFNvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vdGFibGUvVFJvdy5qcyIsIndlYnBhY2s6Ly8vLi90YWJsZS9UUm93QWRkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdGFibGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdERPTVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpbHRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImlucHV0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianNvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvYWRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhZ2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicG9wdXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZWxlY3RvclwiIl0sIm5hbWVzIjpbIlJlYWN0Iiwiem51aSIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwiY3JlYXRlQ2xhc3MiLCJkaXNwbGF5TmFtZSIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsInByb3BzIiwiY2xhc3NOYW1lIiwiVGFibGVQYWdlciIsInNlbGVjdG9yIiwiZ2V0RGVmYXVsdFByb3BzIiwidGV4dEtleSIsInZhbHVlS2V5IiwiZ2V0SW5pdGlhbFN0YXRlIiwidGV4dCIsInZhbHVlIiwiZ2V0VGV4dCIsInN0YXRlIiwic2V0VGV4dCIsInNldFN0YXRlIiwiZ2V0VmFsdWUiLCJzZXRWYWx1ZSIsIl9fb25Sb3dDbGljayIsImV2ZW50IiwiZHJvcGRvd25FdmVudCIsIl9kYXRhIiwiZGF0YSIsInRyb3ciLCJwb3B1cFNlbGVjdCIsInNldERhdGEiLCJkcm9wZG93biIsImNsb3NlUG9wb3ZlciIsIm9uQ2hhbmdlIiwiX19wb3B1cFJlbmRlciIsIl90aGlzIiwiX2V4dGVuZHMiLCJ6eG56IiwiY29sZ3JvdXAiLCJjZWxsUGFkZGluZyIsImZpeGVkIiwidGhlYWQiLCJmaWx0ZXIiLCJ0ZmlsdGVyIiwidGJvZHkiLCJvblJvd0NsaWNrIiwicGFnZUluZGV4IiwicGFnZVNpemUiLCJQb3B1cFNlbGVjdCIsInJlYWN0IiwiY2xhc3NuYW1lIiwicG9wdXBSZW5kZXIiLCJ0YWJsZSIsIkxvYWRpbmciLCJib3JkZXIiLCJyZXNldENoZWNrZWRzIiwiZml4ZWRMYXlvdXQiLCJsb2FkaW5nRW5hYmxlZCIsImRhdGFJbmRleEVuYWJsZWQiLCJyb3dLZXkiLCJjb2x1bW5zIiwiY2hlY2tlZHMiLCJjb21wb25lbnREaWRNb3VudCIsIm9uQ29tcG9uZW50RGlkTW91bnQiLCJfX3NvcnRGdW5jdGlvbiIsIm5leHQiLCJwcmV2Iiwia2V5IiwiX3NvcnQiLCJzb3J0RnVuY3Rpb24iLCJfX29uU29ydCIsInNvcnRzIiwiX3JldHVybiIsIm9uU29ydENoYW5nZSIsInpuIiwiaXNaTk9iamVjdCIsIl9hcmd2IiwicmVmcmVzaCIsInNvcnQiLCJmb3JjZVVwZGF0ZSIsIl9fb25GaWx0ZXJDaGFuZ2UiLCJldnQiLCJvbkZpbHRlckZpZWxkQ2hhbmdlIiwiX19vbkZpbHRlciIsImZpbHRlcnMiLCJvbkZpbHRlckNoYW5nZSIsIl9fb25UQm9keUVhY2hSb3dEYXRhIiwiaW5kZXgiLCJfdmFsdWVLZXkiLCJjaGVja2JveCIsIl92YWx1ZSIsImluZGV4T2YiLCJwdXNoIiwib25FYWNoUm93RGF0YSIsIl9fdGJvZHlEYXRhUmVuZGVyIiwibGVuZ3RoIiwiVEJvZHlFbXB0eSIsImNvbnRleHQiLCJUQm9keSIsInJvdyIsImVhY2hSb3dEYXRhIiwiZml4ZWRDb2x1bW5zIiwiX190Ym9keUxvYWRpbmdSZW5kZXIiLCJsb2FkaW5nIiwiX19vblRIZWFkQ29sdW1uQ2hhbmdlIiwiX190Ym9keURhdGFMb2FkZWQiLCJvbkRhdGFMb2FkZWQiLCJpcyIsInJlc3VsdCIsIl9fb25EYXRhQ3JlYXRlZCIsImxpZnljeWNsZSIsIm9uRGF0YUNyZWF0ZWQiLCJjYWxsYmFjayIsInJlc2V0IiwicmVzZXRDaGVja2VkIiwiYWZ0ZXIiLCJzZW5kZXIiLCJyZXNwb25zZSIsInhociIsInJlZnJlc2hIZWFkZXJzIiwiX19maXhlZFN0eWxlcyIsIl9jb2x1bW5zIiwiX3dpZHRoIiwiaSIsIndpZHRoIiwibGVmdCIsIl9fcmVuZGVyVEJvZHkiLCJfdGhpczIiLCJfcmVzdWx0Iiwib25EYXRhSW5pdGlhbCIsIkRhdGFMaWZlY3ljbGUiLCJkYXRhUmVuZGVyIiwibG9hZGluZ1JlbmRlciIsInJlc3BvbnNlSGFuZGxlciIsIm9uRmluaXNoZWQiLCJfX29uRml4ZWRMYXlvdXRCb2R5U2Nyb2xsIiwiZSIsIl9sYXlvdXRIZWFkZXIiLCJzY3JvbGxMZWZ0IiwidGFyZ2V0IiwiX19yZW5kZXIiLCJfdGhpczMiLCJtYXAiLCJpdGVtIiwiZml4ZWRTdHlsZXMiLCJfc3R5bGUiLCJyZWYiLCJjZWxsU3BhY2luZyIsImF0dHJzIiwiY2FwdGlvbiIsIkNvbGdyb3VwIiwia2V5TWFwcGluZyIsIlRIZWFkIiwib25Tb3J0Iiwib25Db2x1bW5DaGFuZ2UiLCJURmlsdGVyIiwib25GaWx0ZXIiLCJ0cm93YWRkZXIiLCJUUm93QWRkZXIiLCJvbkFkZFN1Ym1pdCIsIl9fb25BZGRTdWJtaXQiLCJvbklucHV0Q2hhbmdlIiwiX19vbkFkZElucHV0Q2hhbmdlIiwib25TY3JvbGwiLCJzaG93Rm9vdCIsInRmb290IiwiVEZvb3QiLCJjaGlsZHJlblJlbmRlciIsImNoaWxkcmVuIiwiX19yb3dIZWFkQ2hlY2tib3hDaGVja2VkIiwiX2NoZWNrZWRzIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJfc3RlcCIsInMiLCJuIiwiZG9uZSIsIl9fY2hlY2tlZERpc2FibGVkX18iLCJlcnIiLCJmIiwiX19vblJvd0hlYWRDaGVja2JveENoYW5nZSIsInN0b3BQcm9wYWdhdGlvbiIsImNoZWNrZWQiLCJfaXRlcmF0b3IyIiwiX3N0ZXAyIiwiX2l0ZXJhdG9yMyIsIl9zdGVwMyIsInNwbGljZSIsIm9uQ2hlY2tib3hDaGFuZ2UiLCJfX2luaXRDaGVja2JveCIsIl90aGlzNCIsIl9jaGVja2JveCIsImhlYWQiLCJhcmd2IiwiX3RhYmxlIiwiQ2hlY2tib3giLCJqdXN0aWZ5Q29udGVudCIsInV1aWQiLCJib2R5Iiwib25Cb2R5Q29sdW1uQ2hlY2tib3hSZW5kZXIiLCJVbmNvbnRyb2xDaGVja2JveCIsImRpc2FibGVkIiwib25DbGljayIsInR5cGUiLCJleHRlbmQiLCJ1bnNoaWZ0IiwiX19pbml0SW5kZXhDb2x1bW4iLCJsYWJlbCIsIm5hbWUiLCJ0ZXh0QWxpZ24iLCJyb3dJbmRleCIsImJpbmQiLCJfX2NvbHVtbnNMb2FkZWQiLCJfdGhpczUiLCJfdGVtcCIsIl9jb2x1bW5JdGVyYXRvciIsImNvbHVtbkl0ZXJhdG9yIiwiY29sdW1uIiwiZGVlcEFzc2lnbiIsIl90eXBlb2YiLCJvbkNvbHVtbnNMb2FkZWQiLCJfX29uQ29sdW1uRGF0YUNyZWF0ZWQiLCJsaWZlY3ljbGUiLCJvbkNvbHVtbnNDcmVhdGVkIiwiZ2V0RGF0YSIsInJlbW92ZVJvd0RhdGEiLCJ1cGRhdGVSb3dEYXRhIiwiX2luZGV4Iiwib25Mb2FkaW5nIiwib25Db2x1bW5Mb2FkaW5nIiwib25FcnJvciIsIm9uQ29sdW1uTG9hZEVycm9yIiwiVGFibGUiLCJpbnB1dCIsIl9fY2VsbENoYW5nZSIsInRjZWxsIiwiX19jb2x1bW5Cb2R5UmVuZGVyIiwiSW5wdXQiLCJvbkJsdXIiLCJvbkVudGVyIiwiX19jb2x1bW5JdGVyYXRvciIsIm9uRGF0YUNoYW5nZSIsImFkZFJvdyIsImNvbmNhdCIsInBhZ2VyIiwiY291bnQiLCJjdXJyZW50IiwidG90YWwiLCJzZXRQYWdlSW5kZXgiLCJfX3Jlc2V0X18iLCJfX29uRGF0YUluaXRpYWwiLCJfX2hhbmRsZVBhZ2VDaGFuZ2VkIiwibmV3UGFnZSIsIm9uUGFnZUNoYW5nZWQiLCJfX2hhbmRsZVBhZ2VTaXplQ2hhbmdlIiwiX19yZW5kZXJQYWdlciIsIl9jb2x1bW5TaXplIiwiX3N0YXRlIiwiX2VsZW1lbnQiLCJfcGFnZXJQcm9wcyIsIm9uUGFnZVNpemVDaGFuZ2UiLCJfQ29tcG9uZW50IiwiUGFnZXIiLCJwYXRoIiwid2luZG93IiwiY29tcG9uZW50IiwiY3JlYXRlUmVhY3RFbGVtZW50IiwicGFnZXJSZW5kZXIiLCJjb2xTcGFuIiwiX21ldGhvZCIsIm1ldGhvZCIsIl9wYXJhbXMiLCJfa2V5TWFwcyIsImtleU1hcHMiLCJwYXJhbXMiLCJfX29uRGF0YUxvYWRlZCIsImNvZGUiLCJjb25zb2xlIiwiZXJyb3IiLCJkZXRhaWwiLCJfcGFnZXJDb3VudCIsIk1hdGgiLCJjZWlsIiwiX19vbkNoZWNrYm94Q2hhbmdlIiwiX19vbkhlYWRDaGFuZ2UiLCJfX29uQm9keUNoYW5nZSIsImxvZyIsImNlbGwiLCJQb3B1cFRhYmxlIiwiVGFibGVFZGl0b3IiLCJfX3ZhbGlkYXRlQ29sdW1uIiwidmFsaWRhdGUiLCJhcHBseSIsIl9rZXlNYXBwaW5nIiwiX3dpZHRoS2V5IiwiX3dpZHRoVmFsdWUiLCJUUm93IiwibG9hZGVyIiwiX3BhZ2VTaXplIiwiX2NvbHVtbktleU1hcCIsIl9kZWZhdWx0IiwidW5kZWZpbmVkIiwiYWN0aXZlIiwiY29sdW1uS2V5TWFwIiwiX19pbml0aWFsRGF0YUl0ZW0iLCJmb3JtYXQiLCJkYXRhVHlwZSIsImV2YWwiLCJzdHJpbmdpZnlQcmljZSIsIl9fZ2V0RGF0YSIsIl9wYWdlSW5kZXgiLCJzbGljZSIsIm1pbiIsIl9fcmVuZGVyTG9hZGluZyIsIkRhdGFMb2FkZXIiLCJ0aXRsZSIsIl9sb2FkaW5nIiwiX19yZW5kZXJFbXB0eSIsImVtcHR5UmVuZGVyIiwiZm9jdXNhYmxlIiwicm9sZSIsInhtbG5zIiwidmlld0JveCIsImZpbGwiLCJkIiwiX2VtcHR5IiwiZW1wdHkiLCJfX29uQ2VsbENsaWNrIiwib25DZWxsQ2xpY2siLCJfX3JlbmRlclJvdyIsInJvd1JlbmRlciIsIl9yb3dLZXkiLCJfa2V5IiwiY2VsbFJlbmRlciIsIl9fcGFnZUNoYW5nZSIsIl9fcGFnZXNSZW5kZXIiLCJfcGFnZUNvdW50IiwiX3BhZ2VzIiwiX19yZW5kZXJEYXRhIiwiRnJhZ21lbnQiLCJSZWFjdERPTSIsIl9fcmVuZGVyQ2VsbENvbnRlbnQiLCJfcmVuZGVyIiwiY2VsbEluZGV4IiwiX19jZWxsQ2xpY2siLCJmaW5kVERET00iLCJmaW5kRE9NTm9kZSIsIl9jb2x1bW4iLCJib2R5Q2xhc3NOYW1lIiwiYm9keVN0eWxlIiwiZmlsdGVyRmllbGQiLCJvcHQiLCJlbXB0eVZhbHVlRW5hYmxlZCIsIl9fb25GaWx0ZXJDYW5jZWwiLCJfX3JlbmRlckNlbGwiLCJfY29udGVudCIsIl9maWx0ZXIiLCJwcm90b3R5cGUiLCJjYWxsIiwiRmlsdGVyRmllbGQiLCJvbkNhbmNlbCIsIl9jZWxsIiwiX3JvdyIsIl9fcmVuZGVyQ2hpbGRyZW4iLCJmb290IiwiVEhlYWRTb3J0IiwicG9wdXAiLCJ6cmpzb24iLCJfX29uQ29sdW1uU29ydCIsIl9fb25Db2x1bW5FZGl0b3JDaGFuZ2UiLCJjaGlsZCIsInJvb3QiLCJfcm9vdCIsIl9faWNvbkNsaWNrUmVuZGVyIiwicGFkZGluZyIsIm1heEhlaWdodCIsIm92ZXJmbG93IiwiZWRpdG9yIiwib2JqZWN0IiwiZm9sZCIsImRpc3BsYXlDbG9zdXJlIiwiZGlzcGxheUl0ZW1Db3VudCIsIl9fc29ydFJlbmRlciIsIl9tYXBwaW5nIiwiX2xhYmVsS2V5IiwiX2xhYmVsIiwicmVxdWlyZWQiLCJlZGl0YWJsZSIsIkRyb3Bkb3duIiwicG9wb3ZlciIsImNsb3NlYWJsZSIsIl9fcmVuZGVySWNvbiIsIl9faWNvbkNsaWNrIiwiVENlbGwiLCJfX2dldFRhcmdldFREIiwidGFnTmFtZSIsInBhcmVudE5vZGUiLCJfdGQiLCJmaW5kVFJET00iLCJ0ZCIsIl9fY2VsbFJlbmRlciIsIl9wcm9wcyIsImZpeGVkU3R5bGUiLCJfX2ZpeGVkV2lkdGgiLCJvbkRhdGFWYWxpZGF0ZSIsIl9jb2x1bW5MZW5ndGgiLCJfY2xhc3NOYW1lIiwic3VibWl0X2tleSIsInJlcXVpcmVkX2ZpZWxkcyIsIm9uQWRkSW5wdXRDaGFuZ2UiLCJfX3ZhbGlkYXRlRGF0YSIsIl9yZXF1aXJlZF9maWVsZHMiLCJfdmFsaWRhdGUiLCJfX3N1Ym1pdCIsInN1Ym1pdEFwaSIsImNyZWF0ZSIsImJlZm9yZSIsIm9uU3VibWl0U3VjY2VzcyIsIm9uU3VibWl0RXJyb3IiLCJjaGVja2luZyIsInJvd2FkZGVyIiwiX3Jvd2FkZGVyIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsSUFBSUEsS0FBSyxHQUFHQyxJQUFJLENBQUNELEtBQUssSUFBSUUsbUJBQU8sQ0FBQyxvQkFBTyxDQUFDO0FBRTFDQyxNQUFNLENBQUNDLE9BQU8sR0FBR0osS0FBSyxDQUFDSyxXQUFXLENBQUM7RUFBQUMsV0FBQTtFQUNsQ0MsTUFBTSxFQUFFLFNBQVJBLE1BQU1BLENBQUEsRUFBWTtJQUNqQixvQkFDQ1AsS0FBQSxDQUFBUSxhQUFBO01BQUtDLEtBQUssRUFBRSxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsS0FBTTtNQUFDRSxTQUFTLEVBQUUsbUJBQW1CLElBQUksSUFBSSxDQUFDRCxLQUFLLENBQUNDLFNBQVMsSUFBSSxFQUFFO0lBQUUsZ0JBQzNGWCxLQUFBLENBQUFRLGFBQUE7TUFBS0csU0FBUyxFQUFDO0lBQVUsZ0JBQUNYLEtBQUEsQ0FBQVEsYUFBQSxZQUFVLENBQUMsZUFBQVIsS0FBQSxDQUFBUSxhQUFBLFlBQVUsQ0FBQyxlQUFBUixLQUFBLENBQUFRLGFBQUEsWUFBVSxDQUFDLGVBQUFSLEtBQUEsQ0FBQVEsYUFBQSxZQUFVLENBQU0sQ0FDdkUsQ0FBQztFQUVSO0FBQ0QsQ0FBQyxDQUFDLEM7Ozs7Ozs7Ozs7OztBQ1ZGLElBQUlSLEtBQUssR0FBR0MsSUFBSSxDQUFDRCxLQUFLLElBQUlFLG1CQUFPLENBQUMsb0JBQU8sQ0FBQztBQUMxQyxJQUFJVSxVQUFVLEdBQUdWLG1CQUFPLENBQUMscUNBQWMsQ0FBQztBQUN4QyxJQUFJVyxRQUFRLEdBQUdYLG1CQUFPLENBQUMsZ0RBQXFCLENBQUM7QUFDN0NDLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHSixLQUFLLENBQUNLLFdBQVcsQ0FBQztFQUNsQ0MsV0FBVyxFQUFFLGNBQWM7RUFDM0JRLGVBQWUsRUFBRSxTQUFqQkEsZUFBZUEsQ0FBQSxFQUFhO0lBQzNCLE9BQU87TUFDTkMsT0FBTyxFQUFFLFlBQVk7TUFDckJDLFFBQVEsRUFBRTtJQUNYLENBQUM7RUFDRixDQUFDO0VBQ0VDLGVBQWUsRUFBRSxTQUFqQkEsZUFBZUEsQ0FBQSxFQUFZO0lBQzdCLE9BQU87TUFDTkMsSUFBSSxFQUFFLElBQUksQ0FBQ1IsS0FBSyxDQUFDUSxJQUFJO01BQ1pDLEtBQUssRUFBRSxJQUFJLENBQUNULEtBQUssQ0FBQ1M7SUFDNUIsQ0FBQztFQUNGLENBQUM7RUFDRUMsT0FBTyxFQUFFLFNBQVRBLE9BQU9BLENBQUEsRUFBYTtJQUNoQixPQUFPLElBQUksQ0FBQ0MsS0FBSyxDQUFDSCxJQUFJO0VBQzFCLENBQUM7RUFDREksT0FBTyxFQUFFLFNBQVRBLE9BQU9BLENBQVlKLElBQUksRUFBQztJQUNwQixJQUFJLENBQUNLLFFBQVEsQ0FBQztNQUNWTCxJQUFJLEVBQUVBO0lBQ1YsQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUNKTSxRQUFRLEVBQUUsU0FBVkEsUUFBUUEsQ0FBQSxFQUFhO0lBQ2QsT0FBTyxJQUFJLENBQUNILEtBQUssQ0FBQ0YsS0FBSztFQUMzQixDQUFDO0VBQ0RNLFFBQVEsRUFBRSxTQUFWQSxRQUFRQSxDQUFZTixLQUFLLEVBQUM7SUFDdEIsSUFBSSxDQUFDSSxRQUFRLENBQUM7TUFDVkosS0FBSyxFQUFFQTtJQUNYLENBQUMsQ0FBQztFQUNOLENBQUM7RUFDRE8sWUFBWSxFQUFFLFNBQWRBLFlBQVlBLENBQVlDLEtBQUssRUFBRUMsYUFBYSxFQUFDO0lBQ3pDLElBQUlDLEtBQUssR0FBR0YsS0FBSyxDQUFDRyxJQUFJLENBQUNDLElBQUksQ0FBQ3JCLEtBQUssQ0FBQ29CLElBQUk7SUFDdENILEtBQUssQ0FBQ0csSUFBSSxHQUFHRCxLQUFLO0lBQ2xCRixLQUFLLENBQUNSLEtBQUssR0FBR1UsS0FBSyxDQUFDLElBQUksQ0FBQ25CLEtBQUssQ0FBQ00sUUFBUSxDQUFDO0lBQzlDVyxLQUFLLENBQUNULElBQUksR0FBR1csS0FBSyxDQUFDLElBQUksQ0FBQ25CLEtBQUssQ0FBQ0ssT0FBTyxDQUFDO0lBQ2hDYSxhQUFhLENBQUNJLFdBQVcsQ0FBQ0MsT0FBTyxDQUFDTixLQUFLLENBQUNSLEtBQUssRUFBRVEsS0FBSyxDQUFDVCxJQUFJLENBQUM7SUFDMURVLGFBQWEsQ0FBQ00sUUFBUSxDQUFDQyxZQUFZLENBQUMsQ0FBQztJQUNyQyxJQUFJLENBQUNWLFFBQVEsQ0FBQ0UsS0FBSyxDQUFDUixLQUFLLENBQUM7SUFDMUIsSUFBSSxDQUFDVCxLQUFLLENBQUMwQixRQUFRLElBQUksSUFBSSxDQUFDMUIsS0FBSyxDQUFDMEIsUUFBUSxDQUFDVCxLQUFLLEVBQUVDLGFBQWEsQ0FBQztFQUNwRSxDQUFDO0VBQ0pTLGFBQWEsRUFBRSxTQUFmQSxhQUFhQSxDQUFZVCxhQUFhLEVBQUM7SUFBQSxJQUFBVSxLQUFBO0lBQ3RDLG9CQUFPdEMsS0FBQSxDQUFBUSxhQUFBLENBQUNJLFVBQVUsRUFBQTJCLFFBQUE7TUFDUkMsSUFBSSxFQUFFLElBQUs7TUFDWEMsUUFBUSxFQUFFLENBQUMsQ0FBRTtNQUNiQyxXQUFXLEVBQUUsQ0FBRTtNQUNmL0IsU0FBUyxFQUFDLHVCQUF1QjtNQUNqQ2dDLEtBQUssRUFBRSxJQUFLO01BQ1pDLEtBQUssRUFBRTtRQUNIQyxNQUFNLEVBQUU7TUFDWixDQUFFO01BQ0ZDLE9BQU8sRUFBRSxDQUFDLENBQUU7TUFDWkMsS0FBSyxFQUFFO1FBQ0hDLFVBQVUsRUFBRSxTQUFaQSxVQUFVQSxDQUFHckIsS0FBSztVQUFBLE9BQUdXLEtBQUksQ0FBQ1osWUFBWSxDQUFDQyxLQUFLLEVBQUVDLGFBQWEsQ0FBQztRQUFBO01BQ2hFLENBQUU7TUFDRnFCLFNBQVMsRUFBRSxDQUFFO01BQ2JDLFFBQVEsRUFBRTtJQUFFLEdBQUssSUFBSSxDQUFDeEMsS0FBSyxDQUFHLENBQUM7RUFDMUMsQ0FBQztFQUNESCxNQUFNLEVBQUUsU0FBUkEsTUFBTUEsQ0FBQSxFQUFZO0lBQ2pCLG9CQUNDUCxLQUFBLENBQUFRLGFBQUEsQ0FBQ0ssUUFBUSxDQUFDc0MsV0FBVztNQUFDeEMsU0FBUyxFQUFFVixJQUFJLENBQUNtRCxLQUFLLENBQUNDLFNBQVMsQ0FBQyxzQkFBc0IsRUFBRSxJQUFJLENBQUMzQyxLQUFLLENBQUNDLFNBQVMsQ0FBRTtNQUFDRixLQUFLLEVBQUUsSUFBSSxDQUFDQyxLQUFLLENBQUNELEtBQU07TUFBQzZDLFdBQVcsRUFBRSxJQUFJLENBQUNqQjtJQUFjLENBQUUsQ0FBQztFQUVuSztBQUNELENBQUMsQ0FBQyxDOzs7Ozs7Ozs7Ozs7Ozs7O0FDakVGLElBQUlyQyxLQUFLLEdBQUdDLElBQUksQ0FBQ0QsS0FBSyxJQUFJRSxtQkFBTyxDQUFDLG9CQUFPLENBQUM7QUFDMUMsSUFBSXFELEtBQUssR0FBR3JELG1CQUFPLENBQUMsdUNBQWUsQ0FBQztBQUNwQyxJQUFJVyxRQUFRLEdBQUdYLG1CQUFPLENBQUMsZ0RBQXFCLENBQUM7QUFDN0MsSUFBSXNELE9BQU8sR0FBR3RELG1CQUFPLENBQUMsK0JBQVcsQ0FBQztBQUVsQ0MsTUFBTSxDQUFDQyxPQUFPLEdBQUdKLEtBQUssQ0FBQ0ssV0FBVyxDQUFDO0VBQ2xDQyxXQUFXLEVBQUMsU0FBUztFQUNyQlEsZUFBZSxFQUFFLFNBQWpCQSxlQUFlQSxDQUFBLEVBQWE7SUFDM0IsT0FBTztNQUNOMkMsTUFBTSxFQUFFLElBQUk7TUFDWkMsYUFBYSxFQUFFLEtBQUs7TUFDcEJDLFdBQVcsRUFBRSxLQUFLO01BQ2xCQyxjQUFjLEVBQUUsSUFBSTtNQUNwQkMsZ0JBQWdCLEVBQUUsS0FBSztNQUN2QjdDLFFBQVEsRUFBRSxXQUFXO01BQ3JCOEMsTUFBTSxFQUFFO0lBQ1QsQ0FBQztFQUNGLENBQUM7RUFDRDdDLGVBQWUsRUFBRSxTQUFqQkEsZUFBZUEsQ0FBQSxFQUFhO0lBQzNCLE9BQU87TUFDTmEsSUFBSSxFQUFFLEVBQUU7TUFDUmlDLE9BQU8sRUFBRSxFQUFFO01BQ1hDLFFBQVEsRUFBRSxJQUFJLENBQUN0RCxLQUFLLENBQUNzRCxRQUFRLElBQUk7SUFDbEMsQ0FBQztFQUNGLENBQUM7RUFDREMsaUJBQWlCLEVBQUUsU0FBbkJBLGlCQUFpQkEsQ0FBQSxFQUFZO0lBQzVCLElBQUksQ0FBQ3ZELEtBQUssQ0FBQ3dELG1CQUFtQixJQUFJLElBQUksQ0FBQ3hELEtBQUssQ0FBQ3dELG1CQUFtQixDQUFDLElBQUksQ0FBQztFQUN2RSxDQUFDO0VBQ0RDLGNBQWMsRUFBRSxTQUFoQkEsY0FBY0EsQ0FBWUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLEdBQUcsRUFBRUMsS0FBSyxFQUFDO0lBQ2hELElBQUcsSUFBSSxDQUFDN0QsS0FBSyxDQUFDOEQsWUFBWSxFQUFFO01BQzNCLE9BQU8sSUFBSSxDQUFDOUQsS0FBSyxDQUFDOEQsWUFBWSxDQUFDSixJQUFJLEVBQUVDLElBQUksRUFBRUMsR0FBRyxFQUFFQyxLQUFLLENBQUM7SUFDdkQ7SUFDQSxJQUFHQSxLQUFLLElBQUUsTUFBTSxFQUFDO01BQ2hCLElBQUdILElBQUksQ0FBQ0UsR0FBRyxDQUFDLEdBQUdELElBQUksQ0FBQ0MsR0FBRyxDQUFDLEVBQUM7UUFDeEIsT0FBTyxDQUFDO01BQ1QsQ0FBQyxNQUFLLElBQUdGLElBQUksQ0FBQ0UsR0FBRyxDQUFDLElBQUlELElBQUksQ0FBQ0MsR0FBRyxDQUFDLEVBQUM7UUFDL0IsT0FBTyxDQUFDO01BQ1QsQ0FBQyxNQUFLLElBQUdGLElBQUksQ0FBQ0UsR0FBRyxDQUFDLEdBQUdELElBQUksQ0FBQ0MsR0FBRyxDQUFDLEVBQUM7UUFDOUIsT0FBTyxDQUFDLENBQUM7TUFDVjtJQUNEO0lBQ0EsSUFBR0MsS0FBSyxJQUFFLEtBQUssRUFBQztNQUNmLElBQUdILElBQUksQ0FBQ0UsR0FBRyxDQUFDLEdBQUdELElBQUksQ0FBQ0MsR0FBRyxDQUFDLEVBQUM7UUFDeEIsT0FBTyxDQUFDO01BQ1QsQ0FBQyxNQUFLLElBQUdGLElBQUksQ0FBQ0UsR0FBRyxDQUFDLElBQUlELElBQUksQ0FBQ0MsR0FBRyxDQUFDLEVBQUM7UUFDL0IsT0FBTyxDQUFDO01BQ1QsQ0FBQyxNQUFLLElBQUdGLElBQUksQ0FBQ0UsR0FBRyxDQUFDLEdBQUdELElBQUksQ0FBQ0MsR0FBRyxDQUFDLEVBQUM7UUFDOUIsT0FBTyxDQUFDLENBQUM7TUFDVjtJQUNEO0VBQ0QsQ0FBQztFQUNERyxRQUFRLEVBQUUsU0FBVkEsUUFBUUEsQ0FBWUMsS0FBSyxFQUFDO0lBQUEsSUFBQXBDLEtBQUE7SUFDekIsSUFBSXFDLE9BQU8sR0FBRyxJQUFJLENBQUNqRSxLQUFLLENBQUNrRSxZQUFZLElBQUksSUFBSSxDQUFDbEUsS0FBSyxDQUFDa0UsWUFBWSxDQUFDRixLQUFLLEVBQUUsSUFBSSxDQUFDckQsS0FBSyxDQUFDUyxJQUFJLEVBQUUsSUFBSSxDQUFDO0lBQzlGLElBQUc2QyxPQUFPLEtBQUssS0FBSyxFQUFDO01BQ3BCLElBQUcsSUFBSSxDQUFDN0MsSUFBSSxJQUFJK0MsRUFBRSxDQUFDQyxVQUFVLENBQUMsSUFBSSxDQUFDaEQsSUFBSSxDQUFDLEVBQUU7UUFDekMsSUFBRyxDQUFDLElBQUksQ0FBQ0EsSUFBSSxDQUFDaUQsS0FBSyxDQUFDakQsSUFBSSxFQUFFO1VBQ3pCLElBQUksQ0FBQ0EsSUFBSSxDQUFDaUQsS0FBSyxDQUFDakQsSUFBSSxHQUFHLENBQUMsQ0FBQztRQUMxQjtRQUNBLElBQUksQ0FBQ0EsSUFBSSxDQUFDaUQsS0FBSyxDQUFDakQsSUFBSSxDQUFDNEMsS0FBSyxHQUFHQSxLQUFLO1FBQ2xDLElBQUksQ0FBQzVDLElBQUksQ0FBQ2tELE9BQU8sQ0FBQyxDQUFDO01BQ3BCLENBQUMsTUFBSTtRQUNKLElBQUlULEtBQUssR0FBRyxJQUFJO1FBQ2hCLEtBQUksSUFBSUQsR0FBRyxJQUFJSSxLQUFLLEVBQUM7VUFDcEJILEtBQUssR0FBR0csS0FBSyxDQUFDSixHQUFHLENBQUM7VUFDbEIsSUFBSSxDQUFDakQsS0FBSyxDQUFDUyxJQUFJLEdBQUcsSUFBSSxDQUFDVCxLQUFLLENBQUNTLElBQUksQ0FBQ21ELElBQUksQ0FBQyxVQUFDYixJQUFJLEVBQUVDLElBQUk7WUFBQSxPQUFLL0IsS0FBSSxDQUFDNkIsY0FBYyxDQUFDQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsR0FBRyxFQUFFQyxLQUFLLENBQUM7VUFBQSxFQUFDO1FBQ3BHO1FBRUEsSUFBSSxDQUFDVyxXQUFXLENBQUMsQ0FBQztNQUNuQjtJQUNEO0VBQ0QsQ0FBQztFQUNEQyxnQkFBZ0IsRUFBRSxTQUFsQkEsZ0JBQWdCQSxDQUFZQyxHQUFHLEVBQUV0RCxJQUFJLEVBQUM7SUFDckMsSUFBSTZDLE9BQU8sR0FBRyxJQUFJLENBQUNqRSxLQUFLLENBQUMyRSxtQkFBbUIsSUFBSSxJQUFJLENBQUMzRSxLQUFLLENBQUMyRSxtQkFBbUIsQ0FBQ0QsR0FBRyxFQUFFdEQsSUFBSSxFQUFFLElBQUksQ0FBQztJQUMvRixJQUFHNkMsT0FBTyxLQUFLLEtBQUssRUFBRTtNQUNyQixPQUFPLEtBQUs7SUFDYjtFQUNELENBQUM7RUFDRFcsVUFBVSxFQUFFLFNBQVpBLFVBQVVBLENBQVlDLE9BQU8sRUFBQztJQUM3QixJQUFJWixPQUFPLEdBQUcsSUFBSSxDQUFDakUsS0FBSyxDQUFDOEUsY0FBYyxJQUFJLElBQUksQ0FBQzlFLEtBQUssQ0FBQzhFLGNBQWMsQ0FBQ0QsT0FBTyxFQUFFLElBQUksQ0FBQ2xFLEtBQUssQ0FBQ1MsSUFBSSxFQUFFLElBQUksQ0FBQztJQUNwRyxJQUFHNkMsT0FBTyxLQUFLLEtBQUssRUFBQztNQUNwQixJQUFHLElBQUksQ0FBQzdDLElBQUksSUFBSStDLEVBQUUsQ0FBQ0MsVUFBVSxDQUFDLElBQUksQ0FBQ2hELElBQUksQ0FBQyxFQUFFO1FBQ3pDLElBQUcsQ0FBQyxJQUFJLENBQUNBLElBQUksQ0FBQ2lELEtBQUssQ0FBQ2pELElBQUksRUFBRTtVQUN6QixJQUFJLENBQUNBLElBQUksQ0FBQ2lELEtBQUssQ0FBQ2pELElBQUksR0FBRyxDQUFDLENBQUM7UUFDMUI7UUFDQSxJQUFJLENBQUNBLElBQUksQ0FBQ2lELEtBQUssQ0FBQ2pELElBQUksQ0FBQ3lELE9BQU8sR0FBR0EsT0FBTztRQUN0QyxJQUFJLENBQUN6RCxJQUFJLENBQUNrRCxPQUFPLENBQUMsQ0FBQztNQUNwQjtJQUNEO0VBQ0QsQ0FBQztFQUNEUyxvQkFBb0IsRUFBRSxTQUF0QkEsb0JBQW9CQSxDQUFZM0QsSUFBSSxFQUFFNEQsS0FBSyxFQUFFM0MsS0FBSyxFQUFDO0lBQ2xELElBQUk0QyxTQUFTLEdBQUcsSUFBSSxDQUFDakYsS0FBSyxDQUFDTSxRQUFRLElBQUksV0FBVztJQUNsRCxJQUFHLElBQUksQ0FBQ04sS0FBSyxDQUFDa0YsUUFBUSxJQUFJLElBQUksQ0FBQ2xGLEtBQUssQ0FBQ1MsS0FBSyxJQUFJd0UsU0FBUyxFQUFFO01BQ3hELElBQUlFLE1BQU0sR0FBRy9ELElBQUksQ0FBQzZELFNBQVMsQ0FBQztNQUM1QixJQUFHLElBQUksQ0FBQ2pGLEtBQUssQ0FBQ1MsS0FBSyxDQUFDMkUsT0FBTyxDQUFDRCxNQUFNLENBQUMsSUFBRSxDQUFDLENBQUMsRUFBQztRQUN2QyxJQUFJLENBQUN4RSxLQUFLLENBQUMyQyxRQUFRLENBQUMrQixJQUFJLENBQUNGLE1BQU0sQ0FBQztNQUNqQztJQUNEO0lBQ0EsSUFBSSxDQUFDbkYsS0FBSyxDQUFDc0YsYUFBYSxJQUFJLElBQUksQ0FBQ3RGLEtBQUssQ0FBQ3NGLGFBQWEsQ0FBQ2xFLElBQUksRUFBRTRELEtBQUssRUFBRTNDLEtBQUssRUFBRSxJQUFJLENBQUM7RUFDL0UsQ0FBQztFQUNEa0QsaUJBQWlCLEVBQUUsU0FBbkJBLGlCQUFpQkEsQ0FBWWxDLE9BQU8sRUFBQztJQUNwQyxJQUFHLENBQUMsSUFBSSxDQUFDMUMsS0FBSyxDQUFDUyxJQUFJLENBQUNvRSxNQUFNLEVBQUM7TUFDMUIsb0JBQU9sRyxLQUFBLENBQUFRLGFBQUEsQ0FBQytDLEtBQUssQ0FBQzRDLFVBQVUsRUFBQTVELFFBQUE7UUFBQzZELE9BQU8sRUFBRSxJQUFJLENBQUMxRixLQUFLLENBQUMwRjtNQUFRLEdBQUssSUFBSSxDQUFDMUYsS0FBSyxDQUFDcUMsS0FBSztRQUFFZ0IsT0FBTyxFQUFFQSxPQUFRO1FBQUNqQyxJQUFJLEVBQUUsSUFBSSxDQUFDVCxLQUFLLENBQUNTLElBQUs7UUFBQ3lCLEtBQUssRUFBRTtNQUFLLEVBQUUsQ0FBQztJQUNySTtJQUNBLG9CQUFPdkQsS0FBQSxDQUFBUSxhQUFBLENBQUMrQyxLQUFLLENBQUM4QyxLQUFLLEVBQUE5RCxRQUFBO01BQUN1QixNQUFNLEVBQUUsSUFBSSxDQUFDcEQsS0FBSyxDQUFDb0QsTUFBTztNQUFDd0MsR0FBRyxFQUFFLElBQUksQ0FBQzVGLEtBQUssQ0FBQzRGLEdBQUk7TUFBQ0YsT0FBTyxFQUFFLElBQUksQ0FBQzFGLEtBQUssQ0FBQzBGLE9BQVE7TUFBQ0csV0FBVyxFQUFFLElBQUksQ0FBQ2Q7SUFBcUIsR0FBSyxJQUFJLENBQUMvRSxLQUFLLENBQUNxQyxLQUFLO01BQUVnQixPQUFPLEVBQUVBLE9BQVE7TUFBQ3lDLFlBQVksRUFBRSxJQUFJLENBQUM5RixLQUFLLENBQUM4RixZQUFhO01BQUMxRSxJQUFJLEVBQUUsSUFBSSxDQUFDVCxLQUFLLENBQUNTLElBQUs7TUFBQ3lCLEtBQUssRUFBRTtJQUFLLEVBQUUsQ0FBQztFQUMvUCxDQUFDO0VBQ0RrRCxvQkFBb0IsRUFBRSxTQUF0QkEsb0JBQW9CQSxDQUFZMUMsT0FBTyxFQUFDO0lBQ3ZDLG9CQUNDL0QsS0FBQSxDQUFBUSxhQUFBO01BQU9HLFNBQVMsRUFBQztJQUFjLGdCQUM5QlgsS0FBQSxDQUFBUSxhQUFBLDBCQUNDUixLQUFBLENBQUFRLGFBQUEsMEJBQ0NSLEtBQUEsQ0FBQVEsYUFBQTtNQUFLRyxTQUFTLEVBQUM7SUFBYyxnQkFDNUJYLEtBQUEsQ0FBQVEsYUFBQSxlQUFNLG9CQUFTLENBQUMsZUFDaEJSLEtBQUEsQ0FBQVEsYUFBQSxDQUFDZ0QsT0FBTyxNQUFFLENBQ04sQ0FDRixDQUNELENBQ0UsQ0FBQztJQUVULG9CQUFPeEQsS0FBQSxDQUFBUSxhQUFBLENBQUMrQyxLQUFLLENBQUM4QyxLQUFLLEVBQUE5RCxRQUFBO01BQUN1QixNQUFNLEVBQUUsSUFBSSxDQUFDcEQsS0FBSyxDQUFDb0QsTUFBTztNQUFDd0MsR0FBRyxFQUFFLElBQUksQ0FBQzVGLEtBQUssQ0FBQzRGLEdBQUk7TUFBQ0YsT0FBTyxFQUFFLElBQUksQ0FBQzFGLEtBQUssQ0FBQzBGO0lBQVEsR0FBSyxJQUFJLENBQUMxRixLQUFLLENBQUNxQyxLQUFLO01BQUVnQixPQUFPLEVBQUVBLE9BQVE7TUFBQ3lDLFlBQVksRUFBRSxJQUFJLENBQUM5RixLQUFLLENBQUM4RixZQUFhO01BQUNFLE9BQU8sRUFBRSxJQUFLO01BQUNuRCxLQUFLLEVBQUU7SUFBSyxFQUFFLENBQUM7RUFDL00sQ0FBQztFQUNEb0QscUJBQXFCLEVBQUUsU0FBdkJBLHFCQUFxQkEsQ0FBWTdFLElBQUksRUFBRTRELEtBQUssRUFBQztJQUM1QyxJQUFHLElBQUksQ0FBQ3JFLEtBQUssQ0FBQzBDLE9BQU8sRUFBQztNQUNyQixJQUFJLENBQUMxQyxLQUFLLENBQUMwQyxPQUFPLENBQUMyQixLQUFLLENBQUMsR0FBRzVELElBQUk7TUFDaEMsSUFBSSxDQUFDb0QsV0FBVyxDQUFDLENBQUM7SUFDbkI7RUFDRCxDQUFDO0VBQ0QwQixpQkFBaUIsRUFBRSxTQUFuQkEsaUJBQWlCQSxDQUFZOUUsSUFBSSxFQUFFO0lBQ2xDLElBQUk2QyxPQUFPLEdBQUcsSUFBSSxDQUFDakUsS0FBSyxDQUFDbUcsWUFBWSxJQUFJLElBQUksQ0FBQ25HLEtBQUssQ0FBQ21HLFlBQVksQ0FBQy9FLElBQUksRUFBRSxJQUFJLENBQUM7SUFDNUUsSUFBRzZDLE9BQU8sS0FBSyxLQUFLLEVBQUM7TUFDcEIsSUFBR0UsRUFBRSxDQUFDaUMsRUFBRSxDQUFDaEYsSUFBSSxFQUFFLFFBQVEsQ0FBQyxJQUFJQSxJQUFJLENBQUNpRixNQUFNLEVBQUM7UUFDdkNqRixJQUFJLEdBQUdBLElBQUksQ0FBQ2lGLE1BQU07TUFDbkI7TUFDQSxJQUFJLENBQUN4RixRQUFRLENBQUM7UUFBRU8sSUFBSSxFQUFFQTtNQUFLLENBQUMsQ0FBQztJQUM5QjtFQUNELENBQUM7RUFDRGtGLGVBQWUsRUFBRSxTQUFqQkEsZUFBZUEsQ0FBWWxGLElBQUksRUFBRW1GLFNBQVMsRUFBQztJQUMxQyxJQUFJLENBQUNuRixJQUFJLEdBQUdBLElBQUk7SUFDaEIsSUFBSSxDQUFDcEIsS0FBSyxDQUFDd0csYUFBYSxJQUFJLElBQUksQ0FBQ3hHLEtBQUssQ0FBQ3dHLGFBQWEsQ0FBQ3BGLElBQUksRUFBRSxJQUFJLEVBQUVtRixTQUFTLENBQUM7RUFDNUUsQ0FBQztFQUNEakMsT0FBTyxFQUFFLFNBQVRBLE9BQU9BLENBQVltQyxRQUFRLEVBQUVDLEtBQUssRUFBQztJQUNsQyxJQUFHLElBQUksQ0FBQzFHLEtBQUssQ0FBQzJHLFlBQVksSUFBSUQsS0FBSyxFQUFFO01BQ3BDLElBQUksQ0FBQzdGLFFBQVEsQ0FBQztRQUNieUMsUUFBUSxFQUFFO01BQ1gsQ0FBQyxDQUFDO0lBQ0g7SUFFQSxJQUFHLElBQUksQ0FBQ2xDLElBQUksRUFBQztNQUNaLElBQUksQ0FBQ0EsSUFBSSxDQUFDa0QsT0FBTyxDQUFDLElBQUksRUFBRTtRQUN2QnNDLEtBQUssRUFBRSxTQUFQQSxLQUFLQSxDQUFHQyxNQUFNLEVBQUV6RixJQUFJLEVBQUUwRixRQUFRLEVBQUVDLEdBQUcsRUFBRztVQUNyQ04sUUFBUSxJQUFJQSxRQUFRLENBQUNyRixJQUFJLEVBQUUwRixRQUFRLEVBQUVDLEdBQUcsQ0FBQztRQUMxQztNQUNELENBQUMsQ0FBQztJQUNILENBQUMsTUFBSTtNQUNKTixRQUFRLElBQUlBLFFBQVEsQ0FBQyxDQUFDO0lBQ3ZCO0lBRUEsT0FBTyxJQUFJO0VBQ1osQ0FBQztFQUNETyxjQUFjLEVBQUUsU0FBaEJBLGNBQWNBLENBQUEsRUFBYTtJQUMxQixJQUFHLElBQUksQ0FBQzNELE9BQU8sRUFBQztNQUNmLElBQUksQ0FBQ0EsT0FBTyxDQUFDaUIsT0FBTyxDQUFDLENBQUM7SUFDdkI7SUFFQSxPQUFPLElBQUk7RUFDWixDQUFDO0VBQ0QvQyxPQUFPLEVBQUUsU0FBVEEsT0FBT0EsQ0FBWUgsSUFBSSxFQUFDO0lBQ3ZCLElBQUksQ0FBQ1AsUUFBUSxDQUFDO01BQUVPLElBQUksRUFBRUE7SUFBSyxDQUFDLENBQUM7RUFDOUIsQ0FBQztFQUNENkYsYUFBYSxFQUFFLFNBQWZBLGFBQWFBLENBQVlqQyxLQUFLLEVBQUM7SUFDOUIsSUFBSWtDLFFBQVEsR0FBRyxJQUFJLENBQUN2RyxLQUFLLENBQUMwQyxPQUFPLElBQUUsRUFBRTtNQUFFOEQsTUFBTSxHQUFHLENBQUM7SUFDakQsS0FBSSxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdwQyxLQUFLLEVBQUVvQyxDQUFDLEVBQUUsRUFBQztNQUM3QixJQUFHRixRQUFRLENBQUNFLENBQUMsQ0FBQyxDQUFDbkYsS0FBSyxFQUFFO1FBQ3JCa0YsTUFBTSxJQUFJLENBQUNELFFBQVEsQ0FBQ0UsQ0FBQyxDQUFDLENBQUNDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQztNQUN2QztJQUNEO0lBRUEsT0FBTztNQUNOQyxJQUFJLEVBQUVILE1BQU0sR0FBRztJQUNoQixDQUFDO0VBQ0YsQ0FBQztFQUNESSxhQUFhLEVBQUUsU0FBZkEsYUFBYUEsQ0FBWWxFLE9BQU8sRUFBQztJQUFBLElBQUFtRSxNQUFBO0lBQ2hDLElBQUlyRyxLQUFLLEdBQUcsSUFBSSxDQUFDbkIsS0FBSyxDQUFDb0IsSUFBSSxJQUFJLElBQUksQ0FBQ3BCLEtBQUssQ0FBQ3FDLEtBQUssQ0FBQ2pCLElBQUk7SUFDcEQsSUFBSXFHLE9BQU8sR0FBRyxJQUFJLENBQUN6SCxLQUFLLENBQUMwSCxhQUFhLElBQUksSUFBSSxDQUFDMUgsS0FBSyxDQUFDMEgsYUFBYSxDQUFDdkcsS0FBSyxFQUFFLElBQUksQ0FBQztJQUMvRSxJQUFHc0csT0FBTyxFQUFDO01BQ1Z0RyxLQUFLLEdBQUdzRyxPQUFPO0lBQ2hCO0lBQ0Esb0JBQU9uSSxLQUFBLENBQUFRLGFBQUEsQ0FBQ1AsSUFBSSxDQUFDbUQsS0FBSyxDQUFDaUYsYUFBYTtNQUFDdkcsSUFBSSxFQUFFRCxLQUFNO01BQzFDeUcsVUFBVSxFQUFFLFNBQVpBLFVBQVVBLENBQUE7UUFBQSxPQUFNSixNQUFJLENBQUNqQyxpQkFBaUIsQ0FBQ2xDLE9BQU8sQ0FBQztNQUFBLENBQUM7TUFDaERILGNBQWMsRUFBRSxJQUFJLENBQUNsRCxLQUFLLENBQUNrRCxjQUFlO01BQzFDMkUsYUFBYSxFQUFFLFNBQWZBLGFBQWFBLENBQUE7UUFBQSxPQUFNTCxNQUFJLENBQUN6QixvQkFBb0IsQ0FBQzFDLE9BQU8sQ0FBQztNQUFBLENBQUM7TUFDdER5RSxlQUFlLEVBQUUsSUFBSSxDQUFDOUgsS0FBSyxDQUFDOEgsZUFBZ0I7TUFDNUN0QixhQUFhLEVBQUUsSUFBSSxDQUFDRixlQUFnQjtNQUNwQ3lCLFVBQVUsRUFBRSxJQUFJLENBQUM3QjtJQUFrQixDQUFFLENBQUM7RUFDMUMsQ0FBQztFQUNEOEIseUJBQXlCLEVBQUUsU0FBM0JBLHlCQUF5QkEsQ0FBWUMsQ0FBQyxFQUFDO0lBQ3RDLElBQUksQ0FBQ0MsYUFBYSxDQUFDQyxVQUFVLEdBQUdGLENBQUMsQ0FBQ0csTUFBTSxDQUFDRCxVQUFVO0VBQ3BELENBQUM7RUFDREUsUUFBUSxFQUFFLFNBQVZBLFFBQVFBLENBQUEsRUFBYTtJQUFBLElBQUFDLE1BQUE7SUFDcEIsSUFBSWpGLE9BQU8sR0FBRyxJQUFJLENBQUMxQyxLQUFLLENBQUMwQyxPQUFPO0lBQ2hDQSxPQUFPLEdBQUdBLE9BQU8sQ0FBQ2tGLEdBQUcsQ0FBQyxVQUFDQyxJQUFJLEVBQUV4RCxLQUFLLEVBQUc7TUFDcEMsSUFBR3dELElBQUksQ0FBQ3ZHLEtBQUssRUFBRTtRQUNkdUcsSUFBSSxDQUFDQyxXQUFXLEdBQUdILE1BQUksQ0FBQ3JCLGFBQWEsQ0FBQ2pDLEtBQUssQ0FBQztNQUM3QztNQUNBLE9BQU93RCxJQUFJO0lBQ1osQ0FBQyxDQUFDO0lBQ0YsSUFBRyxJQUFJLENBQUN4SSxLQUFLLENBQUNpRCxXQUFXLEVBQUU7TUFDMUIsSUFBSXlGLE1BQU0sR0FBRyxDQUFDLENBQUM7TUFDZixJQUFHLElBQUksQ0FBQzFJLEtBQUssQ0FBQytDLE1BQU0sRUFBRTtRQUNyQjJGLE1BQU0sQ0FBQzNGLE1BQU0sR0FBRyxtQkFBbUI7TUFDcEM7TUFDQSxvQkFDQ3pELEtBQUEsQ0FBQVEsYUFBQTtRQUFLRyxTQUFTLEVBQUMsdUJBQXVCO1FBQUNGLEtBQUssRUFBRTJJO01BQU8sZ0JBQ3BEcEosS0FBQSxDQUFBUSxhQUFBO1FBQUtHLFNBQVMsRUFBQyxxQkFBcUI7UUFBQzBJLEdBQUcsRUFBRSxTQUFMQSxHQUFHQSxDQUFHQSxJQUFHO1VBQUEsT0FBR0wsTUFBSSxDQUFDSixhQUFhLEdBQUdTLElBQUc7UUFBQTtNQUFDLGdCQUN6RXJKLEtBQUEsQ0FBQVEsYUFBQSxVQUFBK0IsUUFBQTtRQUFPNUIsU0FBUyxFQUFFVixJQUFJLENBQUNtRCxLQUFLLENBQUNDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDM0MsS0FBSyxDQUFDQyxTQUFTLENBQUU7UUFDeEVGLEtBQUssRUFBRVIsSUFBSSxDQUFDbUQsS0FBSyxDQUFDM0MsS0FBSyxDQUFDLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxLQUFLLEVBQUU7VUFBRXNILEtBQUssRUFBRSxJQUFJLENBQUNySCxLQUFLLENBQUNxSDtRQUFNLENBQUMsQ0FBRTtRQUN2RSxjQUFZLElBQUksQ0FBQ3JILEtBQUssQ0FBQ2lDLEtBQU07UUFDN0JELFdBQVcsRUFBRSxJQUFJLENBQUNoQyxLQUFLLENBQUNnQyxXQUFXLElBQUksQ0FBRTtRQUN6QzRHLFdBQVcsRUFBRSxJQUFJLENBQUM1SSxLQUFLLENBQUM0SSxXQUFXLElBQUk7TUFBRSxHQUFLLElBQUksQ0FBQzVJLEtBQUssQ0FBQzZJLEtBQUssR0FDNUQsQ0FBQyxDQUFDLElBQUksQ0FBQzdJLEtBQUssQ0FBQzhJLE9BQU8saUJBQUl4SixLQUFBLENBQUFRLGFBQUE7UUFBU0csU0FBUyxFQUFFLElBQUksQ0FBQ0QsS0FBSyxDQUFDOEksT0FBTyxDQUFDN0ksU0FBVTtRQUFDRixLQUFLLEVBQUUsSUFBSSxDQUFDQyxLQUFLLENBQUM4SSxPQUFPLENBQUMvSTtNQUFNLEdBQUUsSUFBSSxDQUFDQyxLQUFLLENBQUM4SSxPQUFPLENBQUNqSixNQUFnQixDQUFDLEVBQ2hKLENBQUMsQ0FBQyxJQUFJLENBQUNHLEtBQUssQ0FBQytCLFFBQVEsaUJBQUl6QyxLQUFBLENBQUFRLGFBQUEsQ0FBQytDLEtBQUssQ0FBQ2tHLFFBQVEsRUFBQWxILFFBQUE7UUFBQzZELE9BQU8sRUFBRSxJQUFJLENBQUMxRixLQUFLLENBQUMwRixPQUFRO1FBQUNzRCxVQUFVLEVBQUUsSUFBSSxDQUFDaEosS0FBSyxDQUFDZ0osVUFBVztRQUFDM0YsT0FBTyxFQUFFQTtNQUFRLEdBQUssSUFBSSxDQUFDckQsS0FBSyxDQUFDK0IsUUFBUSxDQUFHLENBQUMsRUFDdEosQ0FBQyxDQUFDLElBQUksQ0FBQy9CLEtBQUssQ0FBQ2tDLEtBQUssaUJBQUk1QyxLQUFBLENBQUFRLGFBQUEsQ0FBQytDLEtBQUssQ0FBQ29HLEtBQUssRUFBQXBILFFBQUE7UUFBQzZELE9BQU8sRUFBRSxJQUFJLENBQUMxRixLQUFLLENBQUMwRixPQUFRO1FBQUN3RCxNQUFNLEVBQUUsSUFBSSxDQUFDbkYsUUFBUztRQUFDb0YsY0FBYyxFQUFFLElBQUksQ0FBQ2xELHFCQUFzQjtRQUFDNUMsT0FBTyxFQUFFQSxPQUFRO1FBQUMyRixVQUFVLEVBQUUsSUFBSSxDQUFDaEosS0FBSyxDQUFDZ0o7TUFBVyxHQUFLLElBQUksQ0FBQ2hKLEtBQUssQ0FBQ2tDLEtBQUs7UUFBRVcsS0FBSyxFQUFFO01BQUssRUFBRSxDQUFDLEVBQzdOLENBQUMsQ0FBQyxJQUFJLENBQUM3QyxLQUFLLENBQUNvQyxPQUFPLGlCQUFJOUMsS0FBQSxDQUFBUSxhQUFBLENBQUMrQyxLQUFLLENBQUN1RyxPQUFPLEVBQUF2SCxRQUFBO1FBQUM2RCxPQUFPLEVBQUUsSUFBSSxDQUFDMUYsS0FBSyxDQUFDMEYsT0FBUTtRQUFDWixjQUFjLEVBQUUsSUFBSSxDQUFDTCxnQkFBaUI7UUFBQzRFLFFBQVEsRUFBRSxJQUFJLENBQUN6RSxVQUFXO1FBQUN2QixPQUFPLEVBQUVBO01BQVEsR0FBSyxJQUFJLENBQUNyRCxLQUFLLENBQUNvQyxPQUFPO1FBQUVTLEtBQUssRUFBRTtNQUFLLEVBQUUsQ0FBQyxFQUMvTCxDQUFDLENBQUMsSUFBSSxDQUFDN0MsS0FBSyxDQUFDc0osU0FBUyxpQkFBSWhLLEtBQUEsQ0FBQVEsYUFBQSxDQUFDK0MsS0FBSyxDQUFDMEcsU0FBUyxFQUFBMUgsUUFBQTtRQUFDNkQsT0FBTyxFQUFFLElBQUksQ0FBQzFGLEtBQUssQ0FBQzBGLE9BQVE7UUFBQzhELFdBQVcsRUFBRSxJQUFJLENBQUNDLGFBQWM7UUFBQ0MsYUFBYSxFQUFFLElBQUksQ0FBQ0Msa0JBQW1CO1FBQUN0RyxPQUFPLEVBQUVBO01BQVEsR0FBSyxJQUFJLENBQUNyRCxLQUFLLENBQUNzSixTQUFTO1FBQUV6RyxLQUFLLEVBQUU7TUFBSyxFQUFFLENBQ3ZNLENBQ0gsQ0FBQyxlQUNOdkQsS0FBQSxDQUFBUSxhQUFBO1FBQUtHLFNBQVMsRUFBQyxtQkFBbUI7UUFBQzJKLFFBQVEsRUFBRSxJQUFJLENBQUM1QjtNQUEwQixnQkFDM0UxSSxLQUFBLENBQUFRLGFBQUEsVUFBQStCLFFBQUE7UUFBTzVCLFNBQVMsRUFBRVYsSUFBSSxDQUFDbUQsS0FBSyxDQUFDQyxTQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQzNDLEtBQUssQ0FBQ0MsU0FBUyxDQUFFO1FBQ3hFRixLQUFLLEVBQUVSLElBQUksQ0FBQ21ELEtBQUssQ0FBQzNDLEtBQUssQ0FBQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsS0FBSyxFQUFFO1VBQUVzSCxLQUFLLEVBQUUsSUFBSSxDQUFDckgsS0FBSyxDQUFDcUg7UUFBTSxDQUFDLENBQUU7UUFDdkUsY0FBWSxJQUFJLENBQUNySCxLQUFLLENBQUNpQyxLQUFNO1FBQzdCRCxXQUFXLEVBQUUsSUFBSSxDQUFDaEMsS0FBSyxDQUFDZ0MsV0FBVyxJQUFJLENBQUU7UUFDekM0RyxXQUFXLEVBQUUsSUFBSSxDQUFDNUksS0FBSyxDQUFDNEksV0FBVyxJQUFJO01BQUUsR0FBSyxJQUFJLENBQUM1SSxLQUFLLENBQUM2SSxLQUFLLEdBQzVELENBQUMsQ0FBQyxJQUFJLENBQUM3SSxLQUFLLENBQUM4SSxPQUFPLGlCQUFJeEosS0FBQSxDQUFBUSxhQUFBO1FBQVNHLFNBQVMsRUFBRSxJQUFJLENBQUNELEtBQUssQ0FBQzhJLE9BQU8sQ0FBQzdJLFNBQVU7UUFBQ0YsS0FBSyxFQUFFLElBQUksQ0FBQ0MsS0FBSyxDQUFDOEksT0FBTyxDQUFDL0k7TUFBTSxHQUFFLElBQUksQ0FBQ0MsS0FBSyxDQUFDOEksT0FBTyxDQUFDakosTUFBZ0IsQ0FBQyxFQUNoSixDQUFDLENBQUMsSUFBSSxDQUFDRyxLQUFLLENBQUMrQixRQUFRLGlCQUFJekMsS0FBQSxDQUFBUSxhQUFBLENBQUMrQyxLQUFLLENBQUNrRyxRQUFRLEVBQUFsSCxRQUFBO1FBQUM2RCxPQUFPLEVBQUUsSUFBSSxDQUFDMUYsS0FBSyxDQUFDMEYsT0FBUTtRQUFDc0QsVUFBVSxFQUFFLElBQUksQ0FBQ2hKLEtBQUssQ0FBQ2dKLFVBQVc7UUFBQzNGLE9BQU8sRUFBRUE7TUFBUSxHQUFLLElBQUksQ0FBQ3JELEtBQUssQ0FBQytCLFFBQVEsQ0FBRyxDQUFDLEVBQ3RKLENBQUMsSUFBSSxDQUFDL0IsS0FBSyxDQUFDcUMsS0FBSyxJQUFJLElBQUksQ0FBQ3JDLEtBQUssQ0FBQ29CLElBQUksS0FBSyxJQUFJLENBQUNtRyxhQUFhLENBQUNsRSxPQUFPLENBQy9ELENBQ0gsQ0FBQyxFQUVMLElBQUksQ0FBQ3JELEtBQUssQ0FBQzZKLFFBQVEsS0FBSyxLQUFLLGlCQUFJdkssS0FBQSxDQUFBUSxhQUFBO1FBQUtHLFNBQVMsRUFBQztNQUFxQixHQUNsRSxDQUFDLENBQUMsSUFBSSxDQUFDRCxLQUFLLENBQUM4SixLQUFLLGlCQUFJeEssS0FBQSxDQUFBUSxhQUFBLDZCQUFPUixLQUFBLENBQUFRLGFBQUEsQ0FBQytDLEtBQUssQ0FBQ2tILEtBQUssRUFBQWxJLFFBQUE7UUFBQzZELE9BQU8sRUFBRSxJQUFJLENBQUMxRixLQUFLLENBQUMwRixPQUFRO1FBQUNyQyxPQUFPLEVBQUVBO01BQVEsR0FBSyxJQUFJLENBQUNyRCxLQUFLLENBQUM4SixLQUFLO1FBQUVqSCxLQUFLLEVBQUU7TUFBSyxFQUFFLENBQVEsQ0FBQyxFQUN0SSxJQUFJLENBQUM3QyxLQUFLLENBQUNnSyxjQUFjLElBQUksSUFBSSxDQUFDaEssS0FBSyxDQUFDZ0ssY0FBYyxDQUFDM0csT0FBTyxFQUFFLElBQUksQ0FBQyxFQUNyRSxJQUFJLENBQUNyRCxLQUFLLENBQUNpSyxRQUNULENBRUYsQ0FBQztJQUVSO0lBRUEsSUFBSXZCLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDZjtBQUNGO0FBQ0E7QUFDQTtBQUNBOztJQUVFLG9CQUNDcEosS0FBQSxDQUFBUSxhQUFBLFVBQUErQixRQUFBO01BQU81QixTQUFTLEVBQUVWLElBQUksQ0FBQ21ELEtBQUssQ0FBQ0MsU0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMzQyxLQUFLLENBQUNDLFNBQVMsQ0FBRTtNQUN4RUYsS0FBSyxFQUFFUixJQUFJLENBQUNtRCxLQUFLLENBQUMzQyxLQUFLLENBQUMsSUFBSSxDQUFDQyxLQUFLLENBQUNELEtBQUssRUFBRTtRQUFFc0gsS0FBSyxFQUFFLElBQUksQ0FBQ3JILEtBQUssQ0FBQ3FIO01BQU0sQ0FBQyxFQUFFcUIsTUFBTSxDQUFFO01BQy9FLGNBQVksSUFBSSxDQUFDMUksS0FBSyxDQUFDaUMsS0FBTTtNQUM3QkQsV0FBVyxFQUFFLElBQUksQ0FBQ2hDLEtBQUssQ0FBQ2dDLFdBQVcsSUFBSSxDQUFFO01BQ3pDNEcsV0FBVyxFQUFFLElBQUksQ0FBQzVJLEtBQUssQ0FBQzRJLFdBQVcsSUFBSTtJQUFFLEdBQUssSUFBSSxDQUFDNUksS0FBSyxDQUFDNkksS0FBSyxHQUM1RCxDQUFDLENBQUMsSUFBSSxDQUFDN0ksS0FBSyxDQUFDOEksT0FBTyxpQkFBSXhKLEtBQUEsQ0FBQVEsYUFBQTtNQUFTRyxTQUFTLEVBQUUsSUFBSSxDQUFDRCxLQUFLLENBQUM4SSxPQUFPLENBQUM3SSxTQUFVO01BQUNGLEtBQUssRUFBRSxJQUFJLENBQUNDLEtBQUssQ0FBQzhJLE9BQU8sQ0FBQy9JO0lBQU0sR0FBRSxJQUFJLENBQUNDLEtBQUssQ0FBQzhJLE9BQU8sQ0FBQ2pKLE1BQWdCLENBQUMsRUFDaEosQ0FBQyxDQUFDLElBQUksQ0FBQ0csS0FBSyxDQUFDK0IsUUFBUSxpQkFBSXpDLEtBQUEsQ0FBQVEsYUFBQSxDQUFDK0MsS0FBSyxDQUFDa0csUUFBUSxFQUFBbEgsUUFBQTtNQUFDNkQsT0FBTyxFQUFFLElBQUksQ0FBQzFGLEtBQUssQ0FBQzBGLE9BQVE7TUFBQ3NELFVBQVUsRUFBRSxJQUFJLENBQUNoSixLQUFLLENBQUNnSixVQUFXO01BQUMzRixPQUFPLEVBQUVBO0lBQVEsR0FBSyxJQUFJLENBQUNyRCxLQUFLLENBQUMrQixRQUFRLENBQUcsQ0FBQyxFQUN0SixDQUFDLENBQUMsSUFBSSxDQUFDL0IsS0FBSyxDQUFDa0MsS0FBSyxpQkFBSTVDLEtBQUEsQ0FBQVEsYUFBQSxDQUFDK0MsS0FBSyxDQUFDb0csS0FBSyxFQUFBcEgsUUFBQTtNQUFDNkQsT0FBTyxFQUFFLElBQUksQ0FBQzFGLEtBQUssQ0FBQzBGLE9BQVE7TUFBQ3dELE1BQU0sRUFBRSxJQUFJLENBQUNuRixRQUFTO01BQUNvRixjQUFjLEVBQUUsSUFBSSxDQUFDbEQscUJBQXNCO01BQUM1QyxPQUFPLEVBQUVBLE9BQVE7TUFBQzJGLFVBQVUsRUFBRSxJQUFJLENBQUNoSixLQUFLLENBQUNnSjtJQUFXLEdBQUssSUFBSSxDQUFDaEosS0FBSyxDQUFDa0MsS0FBSztNQUFFVyxLQUFLLEVBQUU7SUFBSyxFQUFFLENBQUMsRUFDN04sQ0FBQyxDQUFDLElBQUksQ0FBQzdDLEtBQUssQ0FBQ29DLE9BQU8saUJBQUk5QyxLQUFBLENBQUFRLGFBQUEsQ0FBQytDLEtBQUssQ0FBQ3VHLE9BQU8sRUFBQXZILFFBQUE7TUFBQzZELE9BQU8sRUFBRSxJQUFJLENBQUMxRixLQUFLLENBQUMwRixPQUFRO01BQUMyRCxRQUFRLEVBQUUsSUFBSSxDQUFDekUsVUFBVztNQUFDdkIsT0FBTyxFQUFFQTtJQUFRLEdBQUssSUFBSSxDQUFDckQsS0FBSyxDQUFDb0MsT0FBTztNQUFFUyxLQUFLLEVBQUU7SUFBSyxFQUFFLENBQUMsRUFDeEosQ0FBQyxJQUFJLENBQUM3QyxLQUFLLENBQUNxQyxLQUFLLElBQUksSUFBSSxDQUFDckMsS0FBSyxDQUFDb0IsSUFBSSxLQUFLLElBQUksQ0FBQ21HLGFBQWEsQ0FBQ2xFLE9BQU8sQ0FBQyxFQUNwRSxDQUFDLENBQUMsSUFBSSxDQUFDckQsS0FBSyxDQUFDOEosS0FBSyxpQkFBSXhLLEtBQUEsQ0FBQVEsYUFBQSxDQUFDK0MsS0FBSyxDQUFDa0gsS0FBSyxFQUFBbEksUUFBQTtNQUFDNkQsT0FBTyxFQUFFLElBQUksQ0FBQzFGLEtBQUssQ0FBQzBGLE9BQVE7TUFBQ3JDLE9BQU8sRUFBRUE7SUFBUSxHQUFLLElBQUksQ0FBQ3JELEtBQUssQ0FBQzhKLEtBQUs7TUFBRWpILEtBQUssRUFBRTtJQUFLLEVBQUUsQ0FBQyxFQUN2SCxJQUFJLENBQUM3QyxLQUFLLENBQUNnSyxjQUFjLElBQUksSUFBSSxDQUFDaEssS0FBSyxDQUFDZ0ssY0FBYyxDQUFDM0csT0FBTyxFQUFFLElBQUksQ0FBQyxFQUNyRSxJQUFJLENBQUNyRCxLQUFLLENBQUNpSyxRQUNQLENBQUM7RUFFVixDQUFDO0VBQ0RDLHdCQUF3QixFQUFFLFNBQTFCQSx3QkFBd0JBLENBQUEsRUFBYTtJQUNwQyxJQUFJQyxTQUFTLEdBQUcsSUFBSSxDQUFDeEosS0FBSyxDQUFDMkMsUUFBUTtNQUFFMkIsU0FBUyxHQUFHLElBQUksQ0FBQ2pGLEtBQUssQ0FBQ00sUUFBUSxJQUFJLFdBQVc7SUFDbkYsSUFBRyxDQUFDNkosU0FBUyxDQUFDM0UsTUFBTSxFQUFFLE9BQU8sS0FBSztJQUFDLElBQUE0RSxTQUFBLEdBQUFDLDBCQUFBLENBQ25CLElBQUksQ0FBQzFKLEtBQUssQ0FBQ1MsSUFBSTtNQUFBa0osS0FBQTtJQUFBO01BQS9CLEtBQUFGLFNBQUEsQ0FBQUcsQ0FBQSxNQUFBRCxLQUFBLEdBQUFGLFNBQUEsQ0FBQUksQ0FBQSxJQUFBQyxJQUFBLEdBQWlDO1FBQUEsSUFBekJqQyxJQUFJLEdBQUE4QixLQUFBLENBQUE3SixLQUFBO1FBQ1gsSUFBRyxDQUFDK0gsSUFBSSxDQUFDa0MsbUJBQW1CLElBQUlQLFNBQVMsQ0FBQy9FLE9BQU8sQ0FBQ29ELElBQUksQ0FBQ3ZELFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUM7VUFDeEUsT0FBTyxLQUFLO1FBQ2I7TUFDRDtJQUFDLFNBQUEwRixHQUFBO01BQUFQLFNBQUEsQ0FBQW5DLENBQUEsQ0FBQTBDLEdBQUE7SUFBQTtNQUFBUCxTQUFBLENBQUFRLENBQUE7SUFBQTtJQUVELE9BQU8sSUFBSTtFQUNaLENBQUM7RUFDREMseUJBQXlCLEVBQUUsU0FBM0JBLHlCQUF5QkEsQ0FBWTVKLEtBQUssRUFBQztJQUMxQ0EsS0FBSyxDQUFDNkosZUFBZSxDQUFDLENBQUM7SUFDdkIsSUFBSTdGLFNBQVMsR0FBRyxJQUFJLENBQUNqRixLQUFLLENBQUNNLFFBQVEsSUFBSSxXQUFXO0lBQ2xELElBQUdXLEtBQUssQ0FBQzhKLE9BQU8sRUFBRTtNQUFBLElBQUFDLFVBQUEsR0FBQVgsMEJBQUEsQ0FDRCxJQUFJLENBQUMxSixLQUFLLENBQUNTLElBQUk7UUFBQTZKLE1BQUE7TUFBQTtRQUEvQixLQUFBRCxVQUFBLENBQUFULENBQUEsTUFBQVUsTUFBQSxHQUFBRCxVQUFBLENBQUFSLENBQUEsSUFBQUMsSUFBQSxHQUFpQztVQUFBLElBQXpCakMsSUFBSSxHQUFBeUMsTUFBQSxDQUFBeEssS0FBQTtVQUNYLElBQUcsQ0FBQytILElBQUksQ0FBQ2tDLG1CQUFtQixJQUFJLElBQUksQ0FBQy9KLEtBQUssQ0FBQzJDLFFBQVEsQ0FBQzhCLE9BQU8sQ0FBQ29ELElBQUksQ0FBQ3ZELFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUM7WUFDbEYsSUFBSSxDQUFDdEUsS0FBSyxDQUFDMkMsUUFBUSxDQUFDK0IsSUFBSSxDQUFDbUQsSUFBSSxDQUFDdkQsU0FBUyxDQUFDLENBQUM7VUFDMUM7UUFDRDtNQUFDLFNBQUEwRixHQUFBO1FBQUFLLFVBQUEsQ0FBQS9DLENBQUEsQ0FBQTBDLEdBQUE7TUFBQTtRQUFBSyxVQUFBLENBQUFKLENBQUE7TUFBQTtJQUNGLENBQUMsTUFBSTtNQUFBLElBQUFNLFVBQUEsR0FBQWIsMEJBQUEsQ0FDWSxJQUFJLENBQUMxSixLQUFLLENBQUNTLElBQUk7UUFBQStKLE1BQUE7TUFBQTtRQUEvQixLQUFBRCxVQUFBLENBQUFYLENBQUEsTUFBQVksTUFBQSxHQUFBRCxVQUFBLENBQUFWLENBQUEsSUFBQUMsSUFBQSxHQUFpQztVQUFBLElBQXpCakMsSUFBSSxHQUFBMkMsTUFBQSxDQUFBMUssS0FBQTtVQUNYLElBQUcsQ0FBQytILElBQUksQ0FBQ2tDLG1CQUFtQixJQUFJLElBQUksQ0FBQy9KLEtBQUssQ0FBQzJDLFFBQVEsQ0FBQzhCLE9BQU8sQ0FBQ29ELElBQUksQ0FBQ3ZELFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUM7WUFDbEYsSUFBSSxDQUFDdEUsS0FBSyxDQUFDMkMsUUFBUSxDQUFDOEgsTUFBTSxDQUFDLElBQUksQ0FBQ3pLLEtBQUssQ0FBQzJDLFFBQVEsQ0FBQzhCLE9BQU8sQ0FBQ29ELElBQUksQ0FBQ3ZELFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1VBQzVFO1FBQ0Q7TUFBQyxTQUFBMEYsR0FBQTtRQUFBTyxVQUFBLENBQUFqRCxDQUFBLENBQUEwQyxHQUFBO01BQUE7UUFBQU8sVUFBQSxDQUFBTixDQUFBO01BQUE7SUFDRjtJQUNBLElBQUksQ0FBQ3BHLFdBQVcsQ0FBQyxDQUFDO0lBQ2xCLElBQUksQ0FBQ3hFLEtBQUssQ0FBQ3FMLGdCQUFnQixJQUFJLElBQUksQ0FBQ3JMLEtBQUssQ0FBQ3FMLGdCQUFnQixDQUFDLElBQUksQ0FBQzFLLEtBQUssQ0FBQzJDLFFBQVEsRUFBRSxJQUFJLENBQUM7RUFDdEYsQ0FBQztFQUNEZ0ksY0FBYyxFQUFFLFNBQWhCQSxjQUFjQSxDQUFZakksT0FBTyxFQUFDO0lBQUEsSUFBQWtJLE1BQUE7SUFDakMsSUFBRyxDQUFDLElBQUksQ0FBQ3ZMLEtBQUssQ0FBQ2tGLFFBQVEsRUFBRTtJQUN6QixJQUFJRCxTQUFTLEdBQUcsSUFBSSxDQUFDakYsS0FBSyxDQUFDTSxRQUFRLElBQUksV0FBVztNQUFFNkUsTUFBTSxHQUFHLElBQUksQ0FBQ25GLEtBQUssQ0FBQ2tGLFFBQVE7SUFDaEYsSUFBSXNHLFNBQVMsR0FBRztNQUNmbkUsS0FBSyxFQUFFLEVBQUU7TUFDVHBGLEtBQUssRUFBRSxJQUFJO01BQ1h3SixJQUFJLEVBQUUsU0FBTkEsSUFBSUEsQ0FBR0MsSUFBSSxFQUFHO1FBQ2IsSUFBSUMsTUFBTSxHQUFHRCxJQUFJLENBQUN4SixLQUFLLENBQUNsQyxLQUFLLENBQUM2QyxLQUFLO1FBQ25DLElBQUcsQ0FBQzhJLE1BQU0sRUFBRTtRQUNaLG9CQUNDck0sS0FBQSxDQUFBUSxhQUFBLENBQUNLLFFBQVEsQ0FBQ3lMLFFBQVE7VUFDakI3TCxLQUFLLEVBQUU7WUFBRThMLGNBQWMsRUFBRTtVQUFTLENBQUU7VUFDcENqSSxHQUFHLEVBQUVPLEVBQUUsQ0FBQzJILElBQUksQ0FBQyxDQUFFO1VBQ2Z0TCxJQUFJLEVBQUUsR0FBRyxHQUFHbUwsTUFBTSxDQUFDaEwsS0FBSyxDQUFDMkMsUUFBUSxDQUFDa0MsTUFBTztVQUN6Q3VGLE9BQU8sRUFBRVEsTUFBSSxDQUFDckIsd0JBQXdCLENBQUMsQ0FBRTtVQUN6Q3hJLFFBQVEsRUFBRTZKLE1BQUksQ0FBQ1Y7UUFBMEIsQ0FBRSxDQUFDO01BRS9DLENBQUM7TUFDRGtCLElBQUksRUFBRSxTQUFOQSxJQUFJQSxDQUFHTCxJQUFJLEVBQUc7UUFDYixJQUFJdkssS0FBSyxHQUFHdUssSUFBSSxDQUFDdEssSUFBSTtRQUNyQixJQUFJNkMsT0FBTyxHQUFHc0gsTUFBSSxDQUFDdkwsS0FBSyxDQUFDZ00sMEJBQTBCLElBQUlULE1BQUksQ0FBQ3ZMLEtBQUssQ0FBQ2dNLDBCQUEwQixDQUFDTixJQUFJLEVBQUVILE1BQUksQ0FBQztRQUN4RyxJQUFHdEgsT0FBTyxFQUFFO1VBQ1gsT0FBT0EsT0FBTztRQUNmO1FBQ0EsSUFBR0EsT0FBTyxLQUFLLEtBQUssRUFBQztVQUNwQixPQUFPLElBQUk7UUFDWjtRQUNBLG9CQUNDM0UsS0FBQSxDQUFBUSxhQUFBLENBQUNLLFFBQVEsQ0FBQzhMLGlCQUFpQjtVQUMxQmxNLEtBQUssRUFBRTtZQUFFOEwsY0FBYyxFQUFFO1VBQVMsQ0FBRTtVQUNwQ0ssUUFBUSxFQUFFL0ssS0FBSyxDQUFDdUosbUJBQW9CO1VBQ3BDSyxPQUFPLEVBQUVRLE1BQUksQ0FBQzVLLEtBQUssQ0FBQzJDLFFBQVEsQ0FBQzhCLE9BQU8sQ0FBQ2pFLEtBQUssQ0FBQzhELFNBQVMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFFO1VBQzlEa0gsT0FBTyxFQUFFLFNBQVRBLE9BQU9BLENBQUdsTCxLQUFLLEVBQUVpRSxRQUFRLEVBQUc7WUFDM0JqRSxLQUFLLENBQUM2SixlQUFlLENBQUMsQ0FBQztZQUN2QixJQUFHNUYsUUFBUSxDQUFDbEYsS0FBSyxDQUFDK0ssT0FBTyxFQUFFO2NBQzFCUSxNQUFJLENBQUM1SyxLQUFLLENBQUMyQyxRQUFRLENBQUM4SCxNQUFNLENBQUNHLE1BQUksQ0FBQzVLLEtBQUssQ0FBQzJDLFFBQVEsQ0FBQzhCLE9BQU8sQ0FBQ2pFLEtBQUssQ0FBQzhELFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzdFLENBQUMsTUFBSTtjQUNKc0csTUFBSSxDQUFDNUssS0FBSyxDQUFDMkMsUUFBUSxDQUFDK0IsSUFBSSxDQUFDbEUsS0FBSyxDQUFDOEQsU0FBUyxDQUFDLENBQUM7WUFDM0M7WUFDQXNHLE1BQUksQ0FBQy9HLFdBQVcsQ0FBQyxDQUFDO1lBQ2xCK0csTUFBSSxDQUFDdkwsS0FBSyxDQUFDcUwsZ0JBQWdCLElBQUlFLE1BQUksQ0FBQ3ZMLEtBQUssQ0FBQ3FMLGdCQUFnQixDQUFDRSxNQUFJLENBQUM1SyxLQUFLLENBQUMyQyxRQUFRLEVBQUVpSSxNQUFJLENBQUM7VUFDdEY7UUFBRSxDQUFFLENBQUM7TUFFUjtJQUNELENBQUM7SUFDRCxRQUFPcEgsRUFBRSxDQUFDaUksSUFBSSxDQUFDakgsTUFBTSxDQUFDO01BQ3JCLEtBQUssUUFBUTtRQUNacUcsU0FBUyxHQUFHckgsRUFBRSxDQUFDa0ksTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFbEgsTUFBTSxDQUFDO1FBQ2pDO01BQ0QsS0FBSyxRQUFRO1FBQ1pxRyxTQUFTLENBQUNuRSxLQUFLLEdBQUdsQyxNQUFNO1FBQ3hCO0lBQ0Y7SUFFQTlCLE9BQU8sR0FBR0EsT0FBTyxDQUFDaUosT0FBTyxDQUFDZCxTQUFTLENBQUM7RUFDckMsQ0FBQztFQUNEZSxpQkFBaUIsRUFBRSxTQUFuQkEsaUJBQWlCQSxDQUFZbEosT0FBTyxFQUFDO0lBQ3BDLElBQUcsSUFBSSxDQUFDckQsS0FBSyxDQUFDbUQsZ0JBQWdCLEVBQUU7TUFDL0JFLE9BQU8sR0FBR0EsT0FBTyxDQUFDaUosT0FBTyxDQUFDO1FBQ3pCakYsS0FBSyxFQUFFLEVBQUU7UUFDVG1GLEtBQUssRUFBRSxJQUFJO1FBQ1h2SyxLQUFLLEVBQUUsSUFBSTtRQUNYd0ssSUFBSSxFQUFFLFdBQVc7UUFDakJWLElBQUksRUFBRSxVQUFVTCxJQUFJLEVBQUM7VUFDcEIsb0JBQVFwTSxLQUFBLENBQUFRLGFBQUE7WUFBS0MsS0FBSyxFQUFFO2NBQUUyTSxTQUFTLEVBQUU7WUFBUztVQUFFLEdBQUcsQ0FBQ2hCLElBQUksQ0FBQ2lCLFFBQVEsR0FBSSxDQUFPLENBQUM7UUFDMUUsQ0FBQyxDQUFDQyxJQUFJLENBQUMsSUFBSTtNQUNaLENBQUMsQ0FBQztJQUNIO0VBQ0QsQ0FBQztFQUNEQyxlQUFlLEVBQUUsU0FBakJBLGVBQWVBLENBQVl4SixPQUFPLEVBQUM7SUFBQSxJQUFBeUosTUFBQTtJQUNsQyxJQUFHekosT0FBTyxJQUFJYyxFQUFFLENBQUNpQyxFQUFFLENBQUMvQyxPQUFPLEVBQUUsT0FBTyxDQUFDLEVBQUM7TUFDckMsSUFBSTBKLEtBQUssR0FBRyxJQUFJO1FBQ2Z0RixPQUFPLEdBQUcsSUFBSTtRQUNkdUYsZUFBZSxHQUFHLElBQUksQ0FBQ2hOLEtBQUssQ0FBQ2lOLGNBQWM7UUFDM0MvRixRQUFRLEdBQUc3RCxPQUFPLENBQUNrRixHQUFHLENBQUMsVUFBQzJFLE1BQU0sRUFBRztVQUNoQ0gsS0FBSyxHQUFHNUksRUFBRSxDQUFDZ0osVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFRCxNQUFNLENBQUM7VUFDakN6RixPQUFPLEdBQUd1RixlQUFlLElBQUlBLGVBQWUsQ0FBQ0QsS0FBSyxFQUFFRCxNQUFJLENBQUM7VUFDekQsSUFBR3JGLE9BQU8sS0FBSyxLQUFLLEVBQUUsT0FBTyxJQUFJO1VBQ2pDLElBQUcyRixPQUFBLENBQU8zRixPQUFPLEtBQUksUUFBUSxFQUFFLE9BQU9BLE9BQU87VUFFN0MsT0FBT3NGLEtBQUs7UUFDYixDQUFDLENBQUM7TUFDSCxJQUFJLENBQUN6QixjQUFjLENBQUNwRSxRQUFRLENBQUM7TUFDN0IsSUFBSSxDQUFDcUYsaUJBQWlCLENBQUNyRixRQUFRLENBQUM7TUFDaEMsSUFBSSxDQUFDbEgsS0FBSyxDQUFDcU4sZUFBZSxJQUFJLElBQUksQ0FBQ3JOLEtBQUssQ0FBQ3FOLGVBQWUsQ0FBQ2hLLE9BQU8sQ0FBQztNQUNqRSxJQUFJLENBQUN4QyxRQUFRLENBQUM7UUFBRXdDLE9BQU8sRUFBRTZEO01BQVMsQ0FBQyxDQUFDO0lBQ3JDO0VBQ0QsQ0FBQztFQUNEb0cscUJBQXFCLEVBQUUsU0FBdkJBLHFCQUFxQkEsQ0FBWWxNLElBQUksRUFBRW1NLFNBQVMsRUFBQztJQUNoRCxJQUFJLENBQUNsSyxPQUFPLEdBQUdqQyxJQUFJO0lBQ25CLElBQUksQ0FBQ3BCLEtBQUssQ0FBQ3dOLGdCQUFnQixJQUFJLElBQUksQ0FBQ3hOLEtBQUssQ0FBQ3dOLGdCQUFnQixDQUFDcE0sSUFBSSxFQUFFLElBQUksRUFBRW1NLFNBQVMsQ0FBQztFQUNsRixDQUFDO0VBQ0RFLE9BQU8sRUFBRSxTQUFUQSxPQUFPQSxDQUFBLEVBQWE7SUFDbkIsT0FBTyxJQUFJLENBQUM5TSxLQUFLLENBQUNTLElBQUk7RUFDdkIsQ0FBQztFQUNEc00sYUFBYSxFQUFFLFNBQWZBLGFBQWFBLENBQVl0TSxJQUFJLEVBQUM7SUFDN0IsSUFBR0EsSUFBSSxFQUFFO01BQ1IsSUFBSSxDQUFDVCxLQUFLLENBQUNTLElBQUksQ0FBQ2dLLE1BQU0sQ0FBQyxJQUFJLENBQUN6SyxLQUFLLENBQUNTLElBQUksQ0FBQ2dFLE9BQU8sQ0FBQ2hFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztNQUN4RCxJQUFJLENBQUNvRCxXQUFXLENBQUMsQ0FBQztJQUNuQjtJQUVBLE9BQU8sSUFBSTtFQUNaLENBQUM7RUFDRG1KLGFBQWEsRUFBRSxTQUFmQSxhQUFhQSxDQUFZdk0sSUFBSSxFQUFDO0lBQzdCLElBQUdBLElBQUksRUFBRTtNQUNSLElBQUl3TSxNQUFNLEdBQUcsSUFBSSxDQUFDak4sS0FBSyxDQUFDUyxJQUFJLENBQUNnRSxPQUFPLENBQUNoRSxJQUFJLENBQUM7TUFDMUMsSUFBSSxDQUFDVCxLQUFLLENBQUNTLElBQUksQ0FBQ3dNLE1BQU0sQ0FBQyxHQUFHeE0sSUFBSTtNQUM5QixJQUFJLENBQUNvRCxXQUFXLENBQUMsQ0FBQztJQUNuQjtJQUVBLE9BQU8sSUFBSTtFQUNaLENBQUM7RUFDRDNFLE1BQU0sRUFBRSxTQUFSQSxNQUFNQSxDQUFBLEVBQVk7SUFDakIsb0JBQU9QLEtBQUEsQ0FBQVEsYUFBQSxDQUFDUCxJQUFJLENBQUNtRCxLQUFLLENBQUNpRixhQUFhO01BQzdCdkcsSUFBSSxFQUFFLElBQUksQ0FBQ3BCLEtBQUssQ0FBQ3FELE9BQVE7TUFDekJ4RCxNQUFNLEVBQUUsSUFBSSxDQUFDd0ksUUFBUztNQUN0QlAsZUFBZSxFQUFFLElBQUksQ0FBQzlILEtBQUssQ0FBQzhILGVBQWdCO01BQzVDK0YsU0FBUyxFQUFFLElBQUksQ0FBQzdOLEtBQUssQ0FBQzhOLGVBQWdCO01BQ3RDL0YsVUFBVSxFQUFFLElBQUksQ0FBQzhFLGVBQWdCO01BQ2pDa0IsT0FBTyxFQUFFLElBQUksQ0FBQy9OLEtBQUssQ0FBQ2dPLGlCQUFrQjtNQUN0Q3hILGFBQWEsRUFBRSxJQUFJLENBQUM4RztJQUFzQixDQUFFLENBQUM7RUFDakQ7QUFDRCxDQUFDLENBQUMsQzs7Ozs7Ozs7Ozs7OztBQ3ZhRixJQUFJaE8sS0FBSyxHQUFHQyxJQUFJLENBQUNELEtBQUssSUFBSUUsbUJBQU8sQ0FBQyxvQkFBTyxDQUFDO0FBQzFDLElBQUl5TyxLQUFLLEdBQUd6TyxtQkFBTyxDQUFDLDJCQUFTLENBQUM7QUFDOUIsSUFBSTBPLEtBQUssR0FBRzFPLG1CQUFPLENBQUMsMENBQWtCLENBQUM7QUFFdkNDLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHSixLQUFLLENBQUNLLFdBQVcsQ0FBQztFQUNsQ0MsV0FBVyxFQUFDLGVBQWU7RUFDM0JXLGVBQWUsRUFBRSxTQUFqQkEsZUFBZUEsQ0FBQSxFQUFhO0lBQzNCLE9BQU87TUFDTnNDLEtBQUssRUFBRSxJQUFJO01BQ1hRLE9BQU8sRUFBRTtJQUNWLENBQUM7RUFDRixDQUFDO0VBQ0Q4SyxZQUFZLEVBQUUsU0FBZEEsWUFBWUEsQ0FBWWxOLEtBQUssRUFBRXlLLElBQUksRUFBQztJQUNuQ0EsSUFBSSxDQUFDdEssSUFBSSxDQUFDc0ssSUFBSSxDQUFDMEMsS0FBSyxDQUFDcE8sS0FBSyxDQUFDeU0sSUFBSSxDQUFDLEdBQUd4TCxLQUFLLENBQUNSLEtBQUs7SUFDOUNpTCxJQUFJLENBQUNySyxJQUFJLENBQUNtRCxXQUFXLENBQUMsQ0FBQztFQUN4QixDQUFDO0VBQ0Q2SixrQkFBa0IsRUFBRSxTQUFwQkEsa0JBQWtCQSxDQUFZM0MsSUFBSSxFQUFDO0lBQUEsSUFBQTlKLEtBQUE7SUFDbEMsb0JBQU90QyxLQUFBLENBQUFRLGFBQUEsQ0FBQ29PLEtBQUssQ0FBQ0ksS0FBSztNQUNsQjFLLEdBQUcsRUFBRThILElBQUksQ0FBQ2pMLEtBQU07TUFDaEJBLEtBQUssRUFBRWlMLElBQUksQ0FBQ2pMLEtBQU07TUFDbEI4TixNQUFNLEVBQUUsU0FBUkEsTUFBTUEsQ0FBR3ROLEtBQUs7UUFBQSxPQUFHVyxLQUFJLENBQUN1TSxZQUFZLENBQUNsTixLQUFLLEVBQUV5SyxJQUFJLENBQUM7TUFBQSxDQUFDO01BQ2hEOEMsT0FBTyxFQUFFLFNBQVRBLE9BQU9BLENBQUd2TixLQUFLO1FBQUEsT0FBR1csS0FBSSxDQUFDdU0sWUFBWSxDQUFDbE4sS0FBSyxFQUFFeUssSUFBSSxDQUFDO01BQUE7SUFBQyxDQUFFLENBQUM7RUFDdEQsQ0FBQztFQUNEK0MsZ0JBQWdCLEVBQUUsU0FBbEJBLGdCQUFnQkEsQ0FBWXZCLE1BQU0sRUFBRXJLLEtBQUssRUFBQztJQUN6QyxJQUFHLENBQUNxSyxNQUFNLENBQUNuQixJQUFJLEVBQUU7TUFDaEJtQixNQUFNLENBQUNuQixJQUFJLEdBQUcsSUFBSSxDQUFDc0Msa0JBQWtCO0lBQ3RDO0lBRUEsT0FBT25CLE1BQU07RUFDZCxDQUFDO0VBQ0QzTCxPQUFPLEVBQUUsU0FBVEEsT0FBT0EsQ0FBWUgsSUFBSSxFQUFDO0lBQ3ZCLElBQUk2QyxPQUFPLEdBQUcsSUFBSSxDQUFDakUsS0FBSyxDQUFDME8sWUFBWSxJQUFJLElBQUksQ0FBQzFPLEtBQUssQ0FBQzBPLFlBQVksQ0FBQ3ROLElBQUksRUFBRSxJQUFJLENBQUNULEtBQUssQ0FBQ2tDLEtBQUssRUFBRSxJQUFJLENBQUM7SUFDOUYsSUFBR29CLE9BQU8sS0FBSyxLQUFLLEVBQUM7TUFDcEIsT0FBTyxLQUFLO0lBQ2I7SUFDQSxJQUFHbUosT0FBQSxDQUFPbkosT0FBTyxLQUFJLFFBQVEsRUFBRTtNQUM5QjdDLElBQUksR0FBRzZDLE9BQU87SUFDZjtJQUNBLElBQUksQ0FBQ3RELEtBQUssQ0FBQ2tDLEtBQUssQ0FBQ2xDLEtBQUssQ0FBQ1MsSUFBSSxHQUFHQSxJQUFJO0lBQ2xDLElBQUksQ0FBQ1QsS0FBSyxDQUFDa0MsS0FBSyxDQUFDMkIsV0FBVyxDQUFDLENBQUM7SUFFOUIsT0FBTyxJQUFJO0VBQ1osQ0FBQztFQUNEaUosT0FBTyxFQUFFLFNBQVRBLE9BQU9BLENBQUEsRUFBYTtJQUNuQixPQUFPLElBQUksQ0FBQzlNLEtBQUssQ0FBQ2tDLEtBQUssQ0FBQzRLLE9BQU8sQ0FBQyxDQUFDO0VBQ2xDLENBQUM7RUFDRGtCLE1BQU0sRUFBRSxTQUFSQSxNQUFNQSxDQUFZdk4sSUFBSSxFQUFDO0lBQ3RCLElBQUk2QyxPQUFPLEdBQUcsSUFBSSxDQUFDakUsS0FBSyxDQUFDME8sWUFBWSxJQUFJLElBQUksQ0FBQzFPLEtBQUssQ0FBQzBPLFlBQVksQ0FBQyxDQUFDdE4sSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDVCxLQUFLLENBQUNrQyxLQUFLLEVBQUUsSUFBSSxDQUFDO0lBQ2hHLElBQUdvQixPQUFPLEtBQUssS0FBSyxFQUFDO01BQ3BCLE9BQU8sS0FBSztJQUNiO0lBQ0EsSUFBR0UsRUFBRSxDQUFDaUMsRUFBRSxDQUFDbkMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxFQUFFO01BQzNCN0MsSUFBSSxHQUFHNkMsT0FBTztJQUNmLENBQUMsTUFBSyxJQUFHRSxFQUFFLENBQUNpQyxFQUFFLENBQUNuQyxPQUFPLEVBQUUsUUFBUSxDQUFDLEVBQUM7TUFDakM3QyxJQUFJLEdBQUcsQ0FBRUEsSUFBSSxDQUFFO0lBQ2hCO0lBRUEsSUFBSSxDQUFDVCxLQUFLLENBQUNrQyxLQUFLLENBQUNsQyxLQUFLLENBQUNTLElBQUksR0FBRyxJQUFJLENBQUNULEtBQUssQ0FBQ2tDLEtBQUssQ0FBQ2xDLEtBQUssQ0FBQ1MsSUFBSSxDQUFDd04sTUFBTSxDQUFDeE4sSUFBSSxDQUFDO0lBQ3RFLElBQUksQ0FBQ1QsS0FBSyxDQUFDa0MsS0FBSyxDQUFDMkIsV0FBVyxDQUFDLENBQUM7SUFFOUIsT0FBTyxJQUFJO0VBQ1osQ0FBQztFQUNEM0UsTUFBTSxFQUFFLFNBQVJBLE1BQU1BLENBQUEsRUFBWTtJQUFBLElBQUEySCxNQUFBO0lBQ2pCLG9CQUNDbEksS0FBQSxDQUFBUSxhQUFBLENBQUNtTyxLQUFLLEVBQUFwTSxRQUFBLEtBQUssSUFBSSxDQUFDN0IsS0FBSztNQUFFMkksR0FBRyxFQUFFLFNBQUxBLEdBQUdBLENBQUdBLElBQUc7UUFBQSxPQUFLbkIsTUFBSSxDQUFDN0csS0FBSyxDQUFDa0MsS0FBSyxHQUFHOEYsSUFBRztNQUFBLENBQUM7TUFBQzFJLFNBQVMsRUFBRVYsSUFBSSxDQUFDbUQsS0FBSyxDQUFDQyxTQUFTLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDM0MsS0FBSyxDQUFDQyxTQUFTLENBQUU7TUFBQ2dOLGNBQWMsRUFBRSxJQUFJLENBQUN3QjtJQUFpQixFQUFFLENBQUM7RUFFbEw7QUFDRCxDQUFDLENBQUMsQzs7Ozs7Ozs7Ozs7OztBQ25FRixJQUFJblAsS0FBSyxHQUFHQyxJQUFJLENBQUNELEtBQUssSUFBSUUsbUJBQU8sQ0FBQyxvQkFBTyxDQUFDO0FBQzFDLElBQUl5TyxLQUFLLEdBQUd6TyxtQkFBTyxDQUFDLDJCQUFTLENBQUM7QUFDOUIsSUFBSXFQLEtBQUssR0FBR3JQLG1CQUFPLENBQUMsMENBQWtCLENBQUM7QUFFdkNDLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHSixLQUFLLENBQUNLLFdBQVcsQ0FBQztFQUNsQ0MsV0FBVyxFQUFDLGNBQWM7RUFDMUJXLGVBQWUsRUFBRSxTQUFqQkEsZUFBZUEsQ0FBQSxFQUFhO0lBQzNCLE9BQU87TUFDTnVPLEtBQUssRUFBRSxDQUFDO01BQ1JDLE9BQU8sRUFBRSxDQUFDO01BQ1YzTixJQUFJLEVBQUUsRUFBRTtNQUNSNE4sS0FBSyxFQUFFLENBQUM7TUFDUnpNLFNBQVMsRUFBRSxJQUFJLENBQUN2QyxLQUFLLENBQUN1QyxTQUFTLElBQUksQ0FBQztNQUNwQ0MsUUFBUSxFQUFFLElBQUksQ0FBQ3hDLEtBQUssQ0FBQ3dDLFFBQVEsSUFBSTtJQUNsQyxDQUFDO0VBQ0YsQ0FBQztFQUNEZSxpQkFBaUIsRUFBRSxTQUFuQkEsaUJBQWlCQSxDQUFBLEVBQVk7SUFDNUIsSUFBSSxDQUFDdkQsS0FBSyxDQUFDd0QsbUJBQW1CLElBQUksSUFBSSxDQUFDeEQsS0FBSyxDQUFDd0QsbUJBQW1CLENBQUMsSUFBSSxDQUFDO0VBQ3ZFLENBQUM7RUFDRFIsYUFBYSxFQUFFLFNBQWZBLGFBQWFBLENBQUEsRUFBYTtJQUN6QixPQUFPLElBQUksQ0FBQzJJLE1BQU0sQ0FBQzlLLFFBQVEsQ0FBQztNQUMzQnlDLFFBQVEsRUFBRTtJQUNYLENBQUMsQ0FBQyxFQUFFLElBQUk7RUFDVCxDQUFDO0VBQ0QyTCxZQUFZLEVBQUUsU0FBZEEsWUFBWUEsQ0FBWTFNLFNBQVMsRUFBRW1KLElBQUksRUFBRWpGLFFBQVEsRUFBQztJQUNqRCxJQUFHLElBQUksQ0FBQ3JGLElBQUksRUFBQztNQUNaLElBQUdzSyxJQUFJLElBQUlBLElBQUksQ0FBQ3dELFNBQVMsRUFBQztRQUN6QnhELElBQUksQ0FBQ3dELFNBQVMsR0FBRyxJQUFJO1FBQ3JCLE9BQU94RCxJQUFJLENBQUN3RCxTQUFTO1FBQ3JCLElBQUczTSxTQUFTLElBQUksQ0FBQyxFQUFFO1VBQ2xCLElBQUksQ0FBQ29KLE1BQU0sQ0FBQzlLLFFBQVEsQ0FBQztZQUNwQnlDLFFBQVEsRUFBRTtVQUNYLENBQUMsQ0FBQztRQUNIO01BQ0Q7TUFDQSxJQUFJLENBQUMzQyxLQUFLLENBQUM0QixTQUFTLEdBQUdBLFNBQVM7TUFDaEMsSUFBSSxDQUFDNUIsS0FBSyxDQUFDb08sT0FBTyxHQUFHeE0sU0FBUztNQUM5QixJQUFJLENBQUNpQyxXQUFXLENBQUMsQ0FBQztNQUNsQixJQUFJLENBQUNwRCxJQUFJLENBQUNpRCxLQUFLLEdBQUcsSUFBSSxDQUFDOEssZUFBZSxDQUFDLElBQUksQ0FBQ25QLEtBQUssQ0FBQ29CLElBQUksQ0FBQztNQUN2RCxJQUFHc0ssSUFBSSxJQUFJMEIsT0FBQSxDQUFPMUIsSUFBSSxLQUFJLFFBQVEsRUFBQztRQUNsQyxJQUFHLENBQUMsSUFBSSxDQUFDdEssSUFBSSxDQUFDaUQsS0FBSyxDQUFDakQsSUFBSSxFQUFDO1VBQ3hCLElBQUksQ0FBQ0EsSUFBSSxDQUFDaUQsS0FBSyxDQUFDakQsSUFBSSxHQUFHLENBQUMsQ0FBQztRQUMxQjtRQUNBLEtBQUksSUFBSXdDLEdBQUcsSUFBSThILElBQUksRUFBQztVQUNuQixJQUFJLENBQUN0SyxJQUFJLENBQUNpRCxLQUFLLENBQUNqRCxJQUFJLENBQUN3QyxHQUFHLENBQUMsR0FBRzhILElBQUksQ0FBQzlILEdBQUcsQ0FBQztRQUN0QztNQUNEO01BQ0EsSUFBSSxDQUFDeEMsSUFBSSxDQUFDa0QsT0FBTyxDQUFDbUMsUUFBUSxDQUFDO0lBQzVCO0lBRUEsT0FBTyxJQUFJO0VBQ1osQ0FBQztFQUNEbkMsT0FBTyxFQUFFLFNBQVRBLE9BQU9BLENBQVltQyxRQUFRLEVBQUVDLEtBQUssRUFBQztJQUNsQyxJQUFHLElBQUksQ0FBQ2lGLE1BQU0sRUFBQztNQUNkLElBQUksQ0FBQ0EsTUFBTSxDQUFDckgsT0FBTyxDQUFDbUMsUUFBUSxFQUFFQyxLQUFLLENBQUM7SUFDckM7RUFDRCxDQUFDO0VBQ0QwSSxtQkFBbUIsRUFBRSxTQUFyQkEsbUJBQW1CQSxDQUFZQyxPQUFPLEVBQUM7SUFDdEMsSUFBSXBMLE9BQU8sR0FBRyxJQUFJLENBQUNqRSxLQUFLLENBQUNzUCxhQUFhLElBQUksSUFBSSxDQUFDdFAsS0FBSyxDQUFDc1AsYUFBYSxDQUFDRCxPQUFPLEVBQUUsSUFBSSxDQUFDO0lBQ2pGLElBQUdwTCxPQUFPLEtBQUssS0FBSyxFQUFFO01BQ3JCLElBQUksQ0FBQ2dMLFlBQVksQ0FBQ0ksT0FBTyxDQUFDO0lBQzNCO0VBQ0QsQ0FBQztFQUNERSxzQkFBc0IsRUFBRSxTQUF4QkEsc0JBQXNCQSxDQUFZdE8sS0FBSyxFQUFDO0lBQUEsSUFBQVcsS0FBQTtJQUN2QyxJQUFJLENBQUNmLFFBQVEsQ0FBQztNQUNiMkIsUUFBUSxFQUFFdkIsS0FBSyxDQUFDbUgsTUFBTSxDQUFDM0g7SUFDeEIsQ0FBQyxFQUFFO01BQUEsT0FBSW1CLEtBQUksQ0FBQ3FOLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFBQSxFQUFDO0VBQzdCLENBQUM7RUFDRE8sYUFBYSxFQUFFLFNBQWZBLGFBQWFBLENBQVluTSxPQUFPLEVBQUVSLEtBQUssRUFBQztJQUN2QyxJQUFJNE0sV0FBVyxHQUFHcE0sT0FBTyxDQUFDbUMsTUFBTTtJQUNoQyxJQUFHLENBQUNpSyxXQUFXLEVBQUM7TUFDZixPQUFPLElBQUk7SUFDWjtJQUNBLElBQUlDLE1BQU0sR0FBRyxJQUFJLENBQUMvTyxLQUFLO01BQ3RCZ1AsUUFBUSxHQUFHLElBQUk7TUFDZkMsV0FBVyxHQUFHO1FBQ2JaLEtBQUssRUFBRVUsTUFBTSxDQUFDVixLQUFLO1FBQ25CRixLQUFLLEVBQUVZLE1BQU0sQ0FBQ1osS0FBSztRQUNuQkMsT0FBTyxFQUFFVyxNQUFNLENBQUNYLE9BQU87UUFDdkJ2TSxRQUFRLEVBQUVrTixNQUFNLENBQUNsTixRQUFRO1FBQ3pCOE0sYUFBYSxFQUFFLElBQUksQ0FBQ0YsbUJBQW1CO1FBQ3ZDUyxnQkFBZ0IsRUFBRSxJQUFJLENBQUNOO01BQ3hCLENBQUM7TUFDRE8sVUFBVSxHQUFHLElBQUksQ0FBQzlQLEtBQUssQ0FBQzZPLEtBQUssSUFBSUEsS0FBSyxDQUFDa0IsS0FBSztJQUM3QyxJQUFHNUwsRUFBRSxDQUFDaUMsRUFBRSxDQUFDMEosVUFBVSxFQUFFLFFBQVEsQ0FBQyxFQUFDO01BQzlCQSxVQUFVLEdBQUczTCxFQUFFLENBQUM2TCxJQUFJLENBQUNDLE1BQU0sRUFBRUgsVUFBVSxDQUFDO0lBQ3pDLENBQUMsTUFBSyxJQUFHM0wsRUFBRSxDQUFDaUMsRUFBRSxDQUFDMEosVUFBVSxFQUFFLFFBQVEsQ0FBQyxJQUFJQSxVQUFVLENBQUNJLFNBQVMsRUFBQztNQUM1RFAsUUFBUSxHQUFHcFEsSUFBSSxDQUFDbUQsS0FBSyxDQUFDeU4sa0JBQWtCLENBQUNMLFVBQVUsQ0FBQ0ksU0FBUyxFQUFFL0wsRUFBRSxDQUFDa0ksTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFeUQsVUFBVSxFQUFFRixXQUFXLENBQUMsQ0FBQztJQUN2RztJQUVBLElBQUcsSUFBSSxDQUFDNVAsS0FBSyxDQUFDb1EsV0FBVyxFQUFDO01BQ3pCVCxRQUFRLEdBQUdwUSxJQUFJLENBQUNtRCxLQUFLLENBQUN5TixrQkFBa0IsQ0FBQyxJQUFJLENBQUNuUSxLQUFLLENBQUNvUSxXQUFXLEVBQUVSLFdBQVcsQ0FBQztJQUM5RTtJQUVBLElBQUcsQ0FBQ0QsUUFBUSxJQUFJRyxVQUFVLElBQUkzTCxFQUFFLENBQUNpQyxFQUFFLENBQUMwSixVQUFVLEVBQUUsVUFBVSxDQUFDLEVBQUM7TUFDMURILFFBQVEsZ0JBQUdyUSxLQUFBLENBQUFRLGFBQUEsQ0FBQ2dRLFVBQVUsRUFBS0YsV0FBYyxDQUFDO0lBQzVDO0lBRUEsSUFBRyxJQUFJLENBQUM1UCxLQUFLLENBQUNpRCxXQUFXLEVBQUU7TUFDMUIsb0JBQVEzRCxLQUFBLENBQUFRLGFBQUEsY0FBTTZQLFFBQWMsQ0FBQztJQUM5QjtJQUVBLG9CQUNDclEsS0FBQSxDQUFBUSxhQUFBO01BQU9HLFNBQVMsRUFBQztJQUFhLGdCQUM3QlgsS0FBQSxDQUFBUSxhQUFBO01BQUlHLFNBQVMsRUFBQztJQUFXLGdCQUN4QlgsS0FBQSxDQUFBUSxhQUFBO01BQUl1USxPQUFPLEVBQUVaO0lBQVksR0FBRUUsUUFBYSxDQUNyQyxDQUNFLENBQUM7RUFFVixDQUFDO0VBQ0RSLGVBQWUsRUFBRSxTQUFqQkEsZUFBZUEsQ0FBWS9OLElBQUksRUFBQztJQUMvQixJQUFJa1AsT0FBTyxHQUFHbFAsSUFBSSxDQUFDbVAsTUFBTSxJQUFFLE1BQU07TUFDaENDLE9BQU8sR0FBRyxDQUFDLENBQUM7TUFDWkMsUUFBUSxHQUFHdE0sRUFBRSxDQUFDZ0osVUFBVSxDQUFDO1FBQ3hCNkIsS0FBSyxFQUFFLE9BQU87UUFDZHpNLFNBQVMsRUFBRSxXQUFXO1FBQ3RCQyxRQUFRLEVBQUUsVUFBVTtRQUNwQnBCLElBQUksRUFBRTtNQUNQLENBQUMsRUFBRSxJQUFJLENBQUNwQixLQUFLLENBQUMwUSxPQUFPLENBQUM7SUFFdkJGLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDbE8sU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDNUIsS0FBSyxDQUFDNEIsU0FBUyxJQUFJLENBQUM7SUFDdkRpTyxPQUFPLENBQUNDLFFBQVEsQ0FBQ2pPLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQzdCLEtBQUssQ0FBQzZCLFFBQVEsSUFBSSxFQUFFO0lBQ3RELElBQUc4TixPQUFPLElBQUksS0FBSyxFQUFDO01BQ25CbFAsSUFBSSxHQUFHK0MsRUFBRSxDQUFDZ0osVUFBVSxDQUFDL0wsSUFBSSxFQUFFO1FBQzFCdVAsTUFBTSxFQUFFSDtNQUNULENBQUMsQ0FBQztJQUNILENBQUMsTUFBSTtNQUNKcFAsSUFBSSxHQUFHK0MsRUFBRSxDQUFDZ0osVUFBVSxDQUFDL0wsSUFBSSxFQUFFO1FBQzFCQSxJQUFJLEVBQUVvUDtNQUNQLENBQUMsQ0FBQztJQUNIO0lBRUEsT0FBTyxJQUFJLENBQUM3UCxLQUFLLENBQUMrUCxPQUFPLEdBQUdELFFBQVEsRUFBRXJQLElBQUk7RUFDM0MsQ0FBQztFQUNEa0YsZUFBZSxFQUFFLFNBQWpCQSxlQUFlQSxDQUFZbEYsSUFBSSxFQUFFeUIsS0FBSyxFQUFDO0lBQ3RDLElBQUksQ0FBQ3pCLElBQUksR0FBR0EsSUFBSTtJQUNoQixJQUFJLENBQUNwQixLQUFLLENBQUN3RyxhQUFhLElBQUksSUFBSSxDQUFDeEcsS0FBSyxDQUFDd0csYUFBYSxDQUFDcEYsSUFBSSxFQUFFeUIsS0FBSyxFQUFFLElBQUksQ0FBQztFQUN4RSxDQUFDO0VBQ0QrTixjQUFjLEVBQUUsU0FBaEJBLGNBQWNBLENBQVl4UCxJQUFJLEVBQUV5QixLQUFLLEVBQUM7SUFDckMsSUFBRyxJQUFJLENBQUM3QyxLQUFLLENBQUM4QixJQUFJLEVBQUM7TUFDbEIsSUFBR3FDLEVBQUUsQ0FBQ2lDLEVBQUUsQ0FBQ2hGLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSUEsSUFBSSxDQUFDeVAsSUFBSSxJQUFJLEdBQUcsRUFBQztRQUM1QyxPQUFPQyxPQUFPLENBQUNDLEtBQUssQ0FBQzNQLElBQUksQ0FBQzRQLE1BQU0sQ0FBQyxFQUFFLEtBQUs7TUFDekM7TUFDQSxJQUFHN00sRUFBRSxDQUFDaUMsRUFBRSxDQUFDaEYsSUFBSSxFQUFFLFFBQVEsQ0FBQyxJQUFJQSxJQUFJLENBQUN5UCxJQUFJLElBQUksR0FBRyxFQUFDO1FBQzVDelAsSUFBSSxHQUFHQSxJQUFJLENBQUNpRixNQUFNO01BQ25CO01BQ0EsSUFBRyxDQUFDbEMsRUFBRSxDQUFDaUMsRUFBRSxDQUFDaEYsSUFBSSxFQUFFLE9BQU8sQ0FBQyxFQUFDO1FBQ3hCLE9BQU8wUCxPQUFPLENBQUNDLEtBQUssQ0FBQyx1Q0FBdUMsQ0FBQyxFQUFFLEtBQUs7TUFDckU7TUFDQSxJQUFJNVAsS0FBSyxHQUFHQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2xCNlAsV0FBVyxHQUFHN1AsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDME4sS0FBSztNQUMvQixJQUFJN0ssT0FBTyxHQUFHLElBQUksQ0FBQ2pFLEtBQUssQ0FBQ21HLFlBQVksSUFBSSxJQUFJLENBQUNuRyxLQUFLLENBQUNtRyxZQUFZLENBQUNoRixLQUFLLEVBQUUwQixLQUFLLEVBQUUsSUFBSSxDQUFDO01BQ3BGLElBQUdvQixPQUFPLEtBQUssS0FBSyxFQUFDO1FBQ3BCcEIsS0FBSyxDQUFDaEMsUUFBUSxDQUFDO1VBQ2RPLElBQUksRUFBRUQ7UUFDUCxDQUFDLENBQUM7UUFDRixJQUFJLENBQUNOLFFBQVEsQ0FBQztVQUNibU8sS0FBSyxFQUFFa0MsSUFBSSxDQUFDQyxJQUFJLENBQUNGLFdBQVcsR0FBQyxJQUFJLENBQUN0USxLQUFLLENBQUM2QixRQUFRLENBQUM7VUFDakRzTSxLQUFLLEVBQUVtQyxXQUFXO1VBQ2xCbEMsT0FBTyxFQUFFLElBQUksQ0FBQ3BPLEtBQUssQ0FBQ29PO1FBQ3JCLENBQUMsQ0FBQztNQUNIO0lBQ0QsQ0FBQyxNQUFJO01BQ0osSUFBRzVLLEVBQUUsQ0FBQ2lDLEVBQUUsQ0FBQ2hGLElBQUksRUFBRSxPQUFPLENBQUMsRUFBQztRQUN2QixPQUFPMFAsT0FBTyxDQUFDQyxLQUFLLENBQUMsOENBQThDLENBQUMsRUFBRSxLQUFLO01BQzVFO01BQ0EsSUFBSTVQLEtBQUssR0FBR0MsSUFBSSxDQUFDQSxJQUFJO01BQ3JCLElBQUk2QyxPQUFPLEdBQUcsSUFBSSxDQUFDakUsS0FBSyxDQUFDbUcsWUFBWSxJQUFJLElBQUksQ0FBQ25HLEtBQUssQ0FBQ21HLFlBQVksQ0FBQ2hGLEtBQUssRUFBRTBCLEtBQUssRUFBRSxJQUFJLENBQUM7TUFDcEYsSUFBR29CLE9BQU8sS0FBSyxLQUFLLEVBQUM7UUFDcEJwQixLQUFLLENBQUNoQyxRQUFRLENBQUM7VUFDZE8sSUFBSSxFQUFFRCxLQUFLLENBQUMsSUFBSSxDQUFDUixLQUFLLENBQUMrUCxPQUFPLENBQUN0UCxJQUFJO1FBQ3BDLENBQUMsQ0FBQztRQUNGLElBQUksQ0FBQ1AsUUFBUSxDQUFDO1VBQ2JtTyxLQUFLLEVBQUVrQyxJQUFJLENBQUNDLElBQUksQ0FBQ2hRLEtBQUssQ0FBQyxJQUFJLENBQUNSLEtBQUssQ0FBQytQLE9BQU8sQ0FBQzFCLEtBQUssQ0FBQyxHQUFDLElBQUksQ0FBQ3JPLEtBQUssQ0FBQzZCLFFBQVEsQ0FBQztVQUNyRXNNLEtBQUssRUFBRTNOLEtBQUssQ0FBQyxJQUFJLENBQUNSLEtBQUssQ0FBQytQLE9BQU8sQ0FBQzFCLEtBQUssQ0FBQztVQUN0Q0QsT0FBTyxFQUFFNU4sS0FBSyxDQUFDLElBQUksQ0FBQ1IsS0FBSyxDQUFDK1AsT0FBTyxDQUFDbk8sU0FBUztRQUM1QyxDQUFDLENBQUM7TUFDSDtJQUNEO0lBRUEsT0FBTyxLQUFLO0VBQ2IsQ0FBQztFQUNEa0MsZ0JBQWdCLEVBQUUsU0FBbEJBLGdCQUFnQkEsQ0FBWUksT0FBTyxFQUFFekQsSUFBSSxFQUFFeUIsS0FBSyxFQUFDO0lBQ2hELElBQUlvQixPQUFPLEdBQUcsSUFBSSxDQUFDakUsS0FBSyxDQUFDOEUsY0FBYyxJQUFJLElBQUksQ0FBQzlFLEtBQUssQ0FBQzhFLGNBQWMsQ0FBQ0QsT0FBTyxFQUFFekQsSUFBSSxFQUFFeUIsS0FBSyxDQUFDO0lBQzFGLElBQUdvQixPQUFPLEtBQUssS0FBSyxFQUFDO01BQ3BCLElBQUksQ0FBQ2dMLFlBQVksQ0FBQyxDQUFDLEVBQUU7UUFDcEJwSyxPQUFPLEVBQUVBO01BQ1YsQ0FBQyxDQUFDO0lBQ0g7SUFFQSxPQUFPLEtBQUs7RUFDYixDQUFDO0VBQ0RoRixNQUFNLEVBQUUsU0FBUkEsTUFBTUEsQ0FBQSxFQUFZO0lBQUEsSUFBQTJILE1BQUE7SUFDakIsb0JBQ0NsSSxLQUFBLENBQUFRLGFBQUEsQ0FBQ21PLEtBQUssRUFBQXBNLFFBQUEsS0FBSyxJQUFJLENBQUM3QixLQUFLO01BQ3BCQyxTQUFTLEVBQUVWLElBQUksQ0FBQ21ELEtBQUssQ0FBQ0MsU0FBUyxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQzNDLEtBQUssQ0FBQ0MsU0FBUyxDQUFFO01BQ3hFK0osY0FBYyxFQUFFLElBQUksQ0FBQ3dGLGFBQWM7TUFDbkNoTSxtQkFBbUIsRUFBRSxTQUFyQkEsbUJBQW1CQSxDQUFHWCxLQUFLLEVBQUc7UUFDN0IyRSxNQUFJLENBQUNtRSxNQUFNLEdBQUc5SSxLQUFLO01BQ3BCLENBQUU7TUFDRmlDLGNBQWMsRUFBRSxJQUFJLENBQUNMLGdCQUFpQjtNQUN0Q2lELGFBQWEsRUFBRSxJQUFJLENBQUN5SCxlQUFnQjtNQUNwQzNJLGFBQWEsRUFBRSxJQUFJLENBQUNGLGVBQWdCO01BQ3BDSCxZQUFZLEVBQUUsSUFBSSxDQUFDeUs7SUFBZSxFQUFFLENBQUM7RUFFeEM7QUFDRCxDQUFDLENBQUMsQzs7Ozs7Ozs7Ozs7QUM5TUYsSUFBSXRSLEtBQUssR0FBR0MsSUFBSSxDQUFDRCxLQUFLLElBQUlFLG1CQUFPLENBQUMsb0JBQU8sQ0FBQztBQUMxQyxJQUFJb00sUUFBUSxHQUFHcE0sbUJBQU8sQ0FBQyxnREFBcUIsQ0FBQyxDQUFDb00sUUFBUTtBQUV0RG5NLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHSixLQUFLLENBQUNLLFdBQVcsQ0FBQztFQUNsQ0MsV0FBVyxFQUFDLGlCQUFpQjtFQUM3QlcsZUFBZSxFQUFFLFNBQWpCQSxlQUFlQSxDQUFBLEVBQWM7SUFDNUIsT0FBTztNQUNOd0ssT0FBTyxFQUFFLElBQUksQ0FBQy9LLEtBQUssQ0FBQytLLE9BQU8sSUFBSTtJQUNoQyxDQUFDO0VBQ0YsQ0FBQztFQUNEcUcsa0JBQWtCLEVBQUUsU0FBcEJBLGtCQUFrQkEsQ0FBWW5RLEtBQUssRUFBQztJQUNuQ0EsS0FBSyxDQUFDNkosZUFBZSxDQUFDLENBQUM7SUFDdkIsSUFBRyxJQUFJLENBQUM5SyxLQUFLLENBQUNrQyxLQUFLLEVBQUU7TUFDcEIsSUFBSSxDQUFDbVAsY0FBYyxDQUFDcFEsS0FBSyxDQUFDO0lBQzNCLENBQUMsTUFBSyxJQUFHLElBQUksQ0FBQ2pCLEtBQUssQ0FBQ3FDLEtBQUssRUFBRTtNQUMxQixJQUFJLENBQUNpUCxjQUFjLENBQUNyUSxLQUFLLENBQUM7SUFDM0I7RUFDRCxDQUFDO0VBQ0RvUSxjQUFjLEVBQUUsU0FBaEJBLGNBQWNBLENBQVlwUSxLQUFLLEVBQUM7SUFDL0I2UCxPQUFPLENBQUNTLEdBQUcsQ0FBQ3RRLEtBQUssQ0FBQzhKLE9BQU8sRUFBRSxJQUFJLENBQUMvSyxLQUFLLENBQUM7RUFDdkMsQ0FBQztFQUNEc1IsY0FBYyxFQUFFLFNBQWhCQSxjQUFjQSxDQUFZclEsS0FBSyxFQUFDO0lBQy9CNlAsT0FBTyxDQUFDUyxHQUFHLENBQUN0USxLQUFLLENBQUM4SixPQUFPLEVBQUUsSUFBSSxDQUFDL0ssS0FBSyxDQUFDO0VBQ3ZDLENBQUM7RUFDREgsTUFBTSxFQUFFLFNBQVJBLE1BQU1BLENBQUEsRUFBWTtJQUNqQixvQkFDQ1AsS0FBQSxDQUFBUSxhQUFBO01BQUtHLFNBQVMsRUFBQztJQUF3QixnQkFBQ1gsS0FBQSxDQUFBUSxhQUFBLENBQUM4TCxRQUFRO01BQUNiLE9BQU8sRUFBRSxJQUFLO01BQUNySixRQUFRLEVBQUUsSUFBSSxDQUFDMFA7SUFBbUIsQ0FBQyxDQUFNLENBQUM7RUFFN0c7QUFDRCxDQUFDLENBQUMsQzs7Ozs7Ozs7Ozs7QUM3QkYzUixNQUFNLENBQUNDLE9BQU8sR0FBRztFQUNia00sUUFBUSxFQUFFcE0sbUJBQU8sQ0FBQyxzQ0FBWTtFQUM5QjtFQUNBO0VBQ0E7QUFDSixDQUFDLEM7Ozs7Ozs7Ozs7O0FDTERDLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHO0VBQ2JtRCxLQUFLLEVBQUVyRCxtQkFBTyxDQUFDLHVDQUFlLENBQUM7RUFDL0JnUyxJQUFJLEVBQUVoUyxtQkFBTyxDQUFDLHFDQUFjLENBQUM7RUFDN0JpUyxVQUFVLEVBQUVqUyxtQkFBTyxDQUFDLHFDQUFjLENBQUM7RUFDbkN5TyxLQUFLLEVBQUV6TyxtQkFBTyxDQUFDLDJCQUFTLENBQUM7RUFDekJrUyxXQUFXLEVBQUVsUyxtQkFBTyxDQUFDLHVDQUFlLENBQUM7RUFDckNVLFVBQVUsRUFBRVYsbUJBQU8sQ0FBQyxxQ0FBYztBQUN0QyxDQUFDLEM7Ozs7Ozs7Ozs7O0FDUEQsSUFBSUYsS0FBSyxHQUFHQyxJQUFJLENBQUNELEtBQUssSUFBSUUsbUJBQU8sQ0FBQyxvQkFBTyxDQUFDO0FBRTFDQyxNQUFNLENBQUNDLE9BQU8sR0FBR0osS0FBSyxDQUFDSyxXQUFXLENBQUM7RUFDbENDLFdBQVcsRUFBQyxpQkFBaUI7RUFDN0IrUixnQkFBZ0IsRUFBRSxTQUFsQkEsZ0JBQWdCQSxDQUFZekUsTUFBTSxFQUFFbEksS0FBSyxFQUFDO0lBQ3pDLElBQUdrSSxNQUFNLENBQUMwRSxRQUFRLEtBQUssS0FBSyxFQUFFO01BQzdCLE9BQU8sS0FBSztJQUNiO0lBQ0EsSUFBR3pOLEVBQUUsQ0FBQ2lDLEVBQUUsQ0FBQzhHLE1BQU0sQ0FBQzBFLFFBQVEsRUFBRSxVQUFVLENBQUMsRUFBRTtNQUN0QyxJQUFJM04sT0FBTyxHQUFHaUosTUFBTSxDQUFDMEUsUUFBUSxDQUFDQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMzRSxNQUFNLEVBQUVsSSxLQUFLLENBQUMsQ0FBQztNQUMxRCxJQUFHZixPQUFPLEtBQUssS0FBSyxFQUFFO1FBQ3JCLE9BQU8sS0FBSztNQUNiO0lBQ0Q7RUFDRCxDQUFDO0VBQ0RwRSxNQUFNLEVBQUUsU0FBUkEsTUFBTUEsQ0FBQSxFQUFZO0lBQUEsSUFBQStCLEtBQUE7SUFDakIsSUFBSWtRLFdBQVcsR0FBRyxJQUFJLENBQUM5UixLQUFLLENBQUNnSixVQUFVLElBQUksQ0FBRSxDQUFDO0lBQzlDLG9CQUNDMUosS0FBQSxDQUFBUSxhQUFBLG1CQUVFLENBQUMsSUFBSSxDQUFDRSxLQUFLLENBQUNxRCxPQUFPLElBQUUsRUFBRSxFQUFFa0YsR0FBRyxDQUFDLFVBQUNDLElBQUksRUFBRXhELEtBQUssRUFBSztNQUM3QyxJQUFHcEQsS0FBSSxDQUFDK1AsZ0JBQWdCLENBQUNuSixJQUFJLEVBQUV4RCxLQUFLLENBQUMsS0FBSyxLQUFLLEVBQUM7UUFDL0MsT0FBTyxJQUFJO01BQ1o7TUFDQSxJQUFJK00sU0FBUyxHQUFHRCxXQUFXLENBQUN6SyxLQUFLLElBQUksT0FBTztRQUFFMkssV0FBVyxHQUFHeEosSUFBSSxDQUFDdUosU0FBUyxDQUFDO01BQzNFLFFBQU81TixFQUFFLENBQUNpSSxJQUFJLENBQUM0RixXQUFXLENBQUM7UUFDMUIsS0FBSyxVQUFVO1VBQ2RBLFdBQVcsR0FBR0EsV0FBVyxDQUFDSCxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUNySixJQUFJLEVBQUV4RCxLQUFLLENBQUMsQ0FBQztVQUNwRDtNQUNGO01BRUEsb0JBQU8xRixLQUFBLENBQUFRLGFBQUE7UUFBSzhELEdBQUcsRUFBRW9CLEtBQU07UUFBQ2pGLEtBQUssRUFBRTtVQUFFc0gsS0FBSyxFQUFFMks7UUFBWTtNQUFFLENBQUUsQ0FBQztJQUMxRCxDQUFDLENBRU8sQ0FBQztFQUViO0FBQ0QsQ0FBQyxDQUFDLEM7Ozs7Ozs7Ozs7Ozs7OztBQ3JDRixJQUFJMVMsS0FBSyxHQUFHQyxJQUFJLENBQUNELEtBQUssSUFBSUUsbUJBQU8sQ0FBQyxvQkFBTyxDQUFDO0FBQzFDLElBQUl5UyxJQUFJLEdBQUd6UyxtQkFBTyxDQUFDLCtCQUFRLENBQUM7QUFDNUIsSUFBSTBTLE1BQU0sR0FBRzFTLG1CQUFPLENBQUMsNENBQW1CLENBQUM7QUFFekNDLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHSixLQUFLLENBQUNLLFdBQVcsQ0FBQztFQUNsQ0MsV0FBVyxFQUFDLFNBQVM7RUFDckJXLGVBQWUsRUFBRSxTQUFqQkEsZUFBZUEsQ0FBQSxFQUFZO0lBQzFCLElBQUk0UixTQUFTLEdBQUcsSUFBSSxDQUFDblMsS0FBSyxDQUFDd0MsUUFBUSxJQUFJLEVBQUU7SUFDekMsSUFBSTRQLGFBQWEsR0FBRyxDQUFDLENBQUM7TUFBRUMsUUFBUSxHQUFHLENBQUMsQ0FBQztJQUFDLElBQUFqSSxTQUFBLEdBQUFDLDBCQUFBLENBQ3BCLElBQUksQ0FBQ3JLLEtBQUssQ0FBQ3FELE9BQU87TUFBQWlILEtBQUE7SUFBQTtNQUFwQyxLQUFBRixTQUFBLENBQUFHLENBQUEsTUFBQUQsS0FBQSxHQUFBRixTQUFBLENBQUFJLENBQUEsSUFBQUMsSUFBQSxHQUFxQztRQUFBLElBQTdCeUMsTUFBTSxHQUFBNUMsS0FBQSxDQUFBN0osS0FBQTtRQUNiMlIsYUFBYSxDQUFDbEYsTUFBTSxDQUFDVCxJQUFJLENBQUMsR0FBR1MsTUFBTTtRQUNuQyxJQUFHQSxNQUFNLENBQUN6TSxLQUFLLEtBQUssSUFBSSxJQUFJeU0sTUFBTSxDQUFDek0sS0FBSyxLQUFLNlIsU0FBUyxFQUFFO1VBQ3ZERCxRQUFRLENBQUNuRixNQUFNLENBQUNULElBQUksQ0FBQyxHQUFHUyxNQUFNLENBQUN6TSxLQUFLO1FBQ3JDO01BQ0Q7SUFBQyxTQUFBa0ssR0FBQTtNQUFBUCxTQUFBLENBQUFuQyxDQUFBLENBQUEwQyxHQUFBO0lBQUE7TUFBQVAsU0FBQSxDQUFBUSxDQUFBO0lBQUE7SUFFRCxPQUFPO01BQ04ySCxNQUFNLEVBQUUsSUFBSTtNQUNaalAsUUFBUSxFQUFFLEVBQUU7TUFDWnJELFNBQVMsRUFBRSxFQUFFO01BQ2J1UyxZQUFZLEVBQUVKLGFBQWE7TUFDM0IsV0FBU0MsUUFBUTtNQUNqQjlQLFNBQVMsRUFBRSxJQUFJLENBQUN2QyxLQUFLLENBQUN1QyxTQUFTLElBQUksQ0FBQztNQUNwQ0MsUUFBUSxFQUFFMlAsU0FBUztNQUNuQnBTLEtBQUssRUFBRSxDQUFDLENBQUM7TUFDVGlHLE9BQU8sRUFBRTtJQUNWLENBQUM7RUFDRixDQUFDO0VBQ0R6QyxpQkFBaUIsRUFBRSxTQUFuQkEsaUJBQWlCQSxDQUFBLEVBQWE7SUFBQSxJQUFBeUgsVUFBQSxHQUFBWCwwQkFBQSxDQUNiLElBQUksQ0FBQ3JLLEtBQUssQ0FBQ29CLElBQUk7TUFBQTZKLE1BQUE7SUFBQTtNQUEvQixLQUFBRCxVQUFBLENBQUFULENBQUEsTUFBQVUsTUFBQSxHQUFBRCxVQUFBLENBQUFSLENBQUEsSUFBQUMsSUFBQSxHQUFnQztRQUFBLElBQXhCakMsSUFBSSxHQUFBeUMsTUFBQSxDQUFBeEssS0FBQTtRQUNYLElBQUksQ0FBQ2dTLGlCQUFpQixDQUFDakssSUFBSSxDQUFDO01BQzdCO0lBQUMsU0FBQW1DLEdBQUE7TUFBQUssVUFBQSxDQUFBL0MsQ0FBQSxDQUFBMEMsR0FBQTtJQUFBO01BQUFLLFVBQUEsQ0FBQUosQ0FBQTtJQUFBO0VBQ0YsQ0FBQztFQUNENkgsaUJBQWlCLEVBQUUsU0FBbkJBLGlCQUFpQkEsQ0FBWXJSLElBQUksRUFBQztJQUNqQyxJQUFJaVIsUUFBUSxHQUFHLElBQUksQ0FBQzFSLEtBQUssV0FBUTtNQUFFeVIsYUFBYSxHQUFHLElBQUksQ0FBQ3pSLEtBQUssQ0FBQzZSLFlBQVk7TUFBRXJOLE1BQU0sR0FBRyxJQUFJO0lBQ3pGLEtBQUksSUFBSXZCLEdBQUcsSUFBSXlPLFFBQVEsRUFBQztNQUN2QmxOLE1BQU0sR0FBR2tOLFFBQVEsQ0FBQ3pPLEdBQUcsQ0FBQztNQUN0QixJQUFHLE9BQU91QixNQUFNLElBQUksUUFBUSxJQUFJQSxNQUFNLENBQUNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSUQsTUFBTSxDQUFDQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUcsQ0FBQyxDQUFDLEVBQUU7UUFDdEZELE1BQU0sR0FBR0EsTUFBTSxDQUFDdU4sTUFBTSxDQUFDdFIsSUFBSSxJQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLElBQUdnUixhQUFhLENBQUN4TyxHQUFHLENBQUMsRUFBRTtVQUN0QixRQUFPd08sYUFBYSxDQUFDeE8sR0FBRyxDQUFDLENBQUMrTyxRQUFRO1lBQ2pDLEtBQUssUUFBUTtjQUNaLElBQUd4TixNQUFNLENBQUNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQztnQkFDNUIsSUFBSTtrQkFDSEQsTUFBTSxHQUFHeU4sSUFBSSxDQUFDek4sTUFBTSxDQUFDO2dCQUN0QixDQUFDLENBQUMsT0FBT3dGLEdBQUcsRUFBRTtrQkFDYnhGLE1BQU0sR0FBRyxDQUFDO2tCQUNWaEIsRUFBRSxDQUFDNE0sS0FBSyxDQUFDcEcsR0FBRyxDQUFDO2dCQUNkO2NBQ0Q7Y0FDQTtZQUNELEtBQUssT0FBTztjQUNYeEYsTUFBTSxHQUFHNUYsSUFBSSxDQUFDbUQsS0FBSyxDQUFDbVEsY0FBYyxDQUFDMU4sTUFBTSxDQUFDO2NBQzFDO1VBQ0Y7UUFDRDtRQUVBL0QsSUFBSSxDQUFDd0MsR0FBRyxDQUFDLEdBQUd1QixNQUFNO01BQ25CO01BR0EsSUFBRy9ELElBQUksQ0FBQ3dDLEdBQUcsQ0FBQyxJQUFJLElBQUksRUFBRTtRQUNyQnhDLElBQUksQ0FBQ3dDLEdBQUcsQ0FBQyxHQUFHdUIsTUFBTTtNQUNuQjtJQUNEO0lBRUEsT0FBTy9ELElBQUk7RUFDWixDQUFDO0VBQ0QwUixTQUFTLEVBQUUsU0FBWEEsU0FBU0EsQ0FBWXZRLFNBQVMsRUFBRUMsUUFBUSxFQUFDO0lBQ3hDLElBQUl1USxVQUFVLEdBQUd4USxTQUFTLElBQUksSUFBSSxDQUFDNUIsS0FBSyxDQUFDNEIsU0FBUztJQUNsRCxJQUFJNFAsU0FBUyxHQUFHM1AsUUFBUSxJQUFJLElBQUksQ0FBQzdCLEtBQUssQ0FBQzZCLFFBQVE7SUFDL0MsT0FBTyxJQUFJLENBQUN4QyxLQUFLLENBQUNvQixJQUFJLENBQUM0UixLQUFLLENBQUMsQ0FBQ0QsVUFBVSxHQUFDLENBQUMsSUFBSVosU0FBUyxFQUFFakIsSUFBSSxDQUFDK0IsR0FBRyxDQUFDRixVQUFVLEdBQUdaLFNBQVMsRUFBRSxJQUFJLENBQUNuUyxLQUFLLENBQUNvQixJQUFJLENBQUNvRSxNQUFNLENBQUMsQ0FBQztFQUNuSCxDQUFDO0VBQ0QwTixlQUFlLEVBQUUsU0FBakJBLGVBQWVBLENBQUEsRUFBYTtJQUMzQixJQUFJdkQsUUFBUSxHQUFHcFEsSUFBSSxDQUFDbUQsS0FBSyxDQUFDeU4sa0JBQWtCLENBQUMsSUFBSSxDQUFDblEsS0FBSyxDQUFDNkgsYUFBYSxFQUFFO01BQ3RFeEYsS0FBSyxFQUFFO0lBQ1IsQ0FBQyxFQUFFLElBQUksQ0FBQ3JDLEtBQUssQ0FBQzBGLE9BQU8sQ0FBQztJQUV0QixJQUFHLENBQUNpSyxRQUFRLEVBQUM7TUFDWEEsUUFBUSxnQkFBR3JRLEtBQUEsQ0FBQVEsYUFBQSxDQUFDb1MsTUFBTSxDQUFDaUIsVUFBVTtRQUFDakIsTUFBTSxFQUFDLE1BQU07UUFBQ2tCLEtBQUssRUFBRTtNQUFhLENBQUUsQ0FBQztJQUNyRTtJQUVBLElBQUlDLFFBQVEsR0FBR2xQLEVBQUUsQ0FBQ2tJLE1BQU0sQ0FBQztNQUFFcE0sU0FBUyxFQUFFLEVBQUU7TUFBRUYsS0FBSyxFQUFFLENBQUM7SUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDQyxLQUFLLENBQUNnRyxPQUFPLENBQUM7SUFDMUUsb0JBQ0MxRyxLQUFBLENBQUFRLGFBQUE7TUFBSUcsU0FBUyxFQUFFVixJQUFJLENBQUNtRCxLQUFLLENBQUNDLFNBQVMsQ0FBQyxlQUFlLEVBQUUwUSxRQUFRLENBQUNwVCxTQUFTLENBQUU7TUFBQ0YsS0FBSyxFQUFFc1QsUUFBUSxDQUFDdFQ7SUFBTSxnQkFDL0ZULEtBQUEsQ0FBQVEsYUFBQTtNQUFJdVEsT0FBTyxFQUFFLElBQUksQ0FBQ3JRLEtBQUssQ0FBQ3FELE9BQU8sQ0FBQ21DO0lBQU8sR0FBRW1LLFFBQWEsQ0FDbkQsQ0FBQztFQUVQLENBQUM7RUFDRDJELGFBQWEsRUFBRSxTQUFmQSxhQUFhQSxDQUFBLEVBQWE7SUFDekIsSUFBSTNELFFBQVEsR0FBR3BRLElBQUksQ0FBQ21ELEtBQUssQ0FBQ3lOLGtCQUFrQixDQUFDLElBQUksQ0FBQ25RLEtBQUssQ0FBQ3VULFdBQVcsRUFBRTtNQUNwRWxSLEtBQUssRUFBRTtJQUNSLENBQUMsRUFBRSxJQUFJLENBQUNyQyxLQUFLLENBQUMwRixPQUFPLENBQUM7SUFFdEIsSUFBRyxDQUFDaUssUUFBUSxFQUFDO01BQ1hBLFFBQVEsZ0JBQ1JyUSxLQUFBLENBQUFRLGFBQUE7UUFBS0csU0FBUyxFQUFDO01BQWUsZ0JBQzdCWCxLQUFBLENBQUFRLGFBQUE7UUFBSyxlQUFZLE1BQU07UUFBQzBULFNBQVMsRUFBQyxPQUFPO1FBQUMsZUFBWSxLQUFLO1FBQUMsYUFBVSxTQUFTO1FBQUN2VCxTQUFTLEVBQUMsb0NBQW9DO1FBQUN3VCxJQUFJLEVBQUMsS0FBSztRQUFDQyxLQUFLLEVBQUMsNEJBQTRCO1FBQUNDLE9BQU8sRUFBQztNQUFhLGdCQUFDclUsS0FBQSxDQUFBUSxhQUFBO1FBQU04VCxJQUFJLEVBQUMsY0FBYztRQUFDQyxDQUFDLEVBQUM7TUFBc08sQ0FBTyxDQUFNLENBQUMsZUFDbmR2VSxLQUFBLENBQUFRLGFBQUEsZUFBTSxPQUFXLENBQ2IsQ0FDTDtJQUNGO0lBQ0EsSUFBSWdVLE1BQU0sR0FBRzNQLEVBQUUsQ0FBQ2tJLE1BQU0sQ0FBQztNQUFFcE0sU0FBUyxFQUFFLEVBQUU7TUFBRUYsS0FBSyxFQUFFLENBQUM7SUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDQyxLQUFLLENBQUMrVCxLQUFLLENBQUM7SUFDdEUsb0JBQ0N6VSxLQUFBLENBQUFRLGFBQUE7TUFBSUcsU0FBUyxFQUFFVixJQUFJLENBQUNtRCxLQUFLLENBQUNDLFNBQVMsQ0FBQyxhQUFhLEVBQUVtUixNQUFNLENBQUM3VCxTQUFTLENBQUU7TUFBQ0YsS0FBSyxFQUFFK1QsTUFBTSxDQUFDL1Q7SUFBTSxnQkFDekZULEtBQUEsQ0FBQVEsYUFBQTtNQUFJdVEsT0FBTyxFQUFFLElBQUksQ0FBQ3JRLEtBQUssQ0FBQ3FELE9BQU8sQ0FBQ21DO0lBQU8sR0FBRW1LLFFBQWEsQ0FDbkQsQ0FBQztFQUVQLENBQUM7RUFDRDNPLFlBQVksRUFBRSxTQUFkQSxZQUFZQSxDQUFZQyxLQUFLLEVBQUU7SUFDOUIsSUFBSUUsS0FBSyxHQUFHRixLQUFLLENBQUNHLElBQUk7SUFDdEIsSUFBSSxDQUFDUCxRQUFRLENBQUM7TUFDYjBSLE1BQU0sRUFBRXBSLEtBQUssQ0FBQ0UsSUFBSSxDQUFDckIsS0FBSyxDQUFDb0I7SUFDMUIsQ0FBQyxDQUFDO0lBQ0ZILEtBQUssQ0FBQ29CLEtBQUssR0FBRyxJQUFJO0lBQ2xCLElBQUksQ0FBQ3JDLEtBQUssQ0FBQ3NDLFVBQVUsSUFBSSxJQUFJLENBQUN0QyxLQUFLLENBQUNzQyxVQUFVLENBQUNyQixLQUFLLENBQUM7RUFDdEQsQ0FBQztFQUNEK1MsYUFBYSxFQUFFLFNBQWZBLGFBQWFBLENBQVkvUyxLQUFLLEVBQUM7SUFDOUJBLEtBQUssQ0FBQ29CLEtBQUssR0FBRyxJQUFJO0lBQ2xCLElBQUksQ0FBQ3JDLEtBQUssQ0FBQ2lVLFdBQVcsSUFBSSxJQUFJLENBQUNqVSxLQUFLLENBQUNpVSxXQUFXLENBQUNoVCxLQUFLLENBQUM7RUFDeEQsQ0FBQztFQUNEaVQsV0FBVyxFQUFFLFNBQWJBLFdBQVdBLENBQVkxTCxJQUFJLEVBQUV4RCxLQUFLLEVBQUM7SUFDbEMsSUFBRyxDQUFDYixFQUFFLENBQUNpQyxFQUFFLENBQUNvQyxJQUFJLEVBQUUsUUFBUSxDQUFDLEVBQUU7TUFBRSxPQUFPLElBQUk7SUFBQztJQUN6QyxJQUFJdUUsS0FBSyxHQUFHLElBQUksQ0FBQy9NLEtBQUssQ0FBQzZGLFdBQVcsSUFBSSxJQUFJLENBQUM3RixLQUFLLENBQUM2RixXQUFXLENBQUMyQyxJQUFJLEVBQUV4RCxLQUFLLEVBQUUsSUFBSSxDQUFDO0lBQy9FLElBQUcrSCxLQUFLLElBQUk1SSxFQUFFLENBQUNpQyxFQUFFLENBQUMyRyxLQUFLLEVBQUUsUUFBUSxDQUFDLEVBQUM7TUFDbEN2RSxJQUFJLEdBQUd1RSxLQUFLO0lBQ2I7SUFDQSxJQUFJNEMsUUFBUSxHQUFHcFEsSUFBSSxDQUFDbUQsS0FBSyxDQUFDeU4sa0JBQWtCLENBQUMsSUFBSSxDQUFDblEsS0FBSyxDQUFDbVUsU0FBUyxFQUFFO01BQ2xFL1MsSUFBSSxFQUFFb0gsSUFBSTtNQUNWbUUsUUFBUSxFQUFFM0gsS0FBSztNQUNmM0MsS0FBSyxFQUFFO0lBQ1IsQ0FBQyxFQUFFLElBQUksQ0FBQ3JDLEtBQUssQ0FBQzBGLE9BQU8sQ0FBQztJQUV0QixJQUFHaUssUUFBUSxFQUFDO01BQ1gsT0FBT0EsUUFBUTtJQUNoQjtJQUNBLElBQUl5RSxPQUFPLEdBQUcsSUFBSSxDQUFDcFUsS0FBSyxDQUFDb0QsTUFBTTtJQUMvQixJQUFJaVIsSUFBSSxHQUFHN0wsSUFBSSxDQUFDNEwsT0FBTyxDQUFDLElBQUlwUCxLQUFLO0lBQ2pDLG9CQUFPMUYsS0FBQSxDQUFBUSxhQUFBLENBQUNtUyxJQUFJLEVBQUFwUSxRQUFBO01BQUMrQixHQUFHLEVBQUV5USxJQUFJLEdBQUcsR0FBRyxHQUFHclAsS0FBTTtNQUFDMkgsUUFBUSxFQUFFM0g7SUFBTSxHQUFLLElBQUksQ0FBQ2hGLEtBQUssQ0FBQzRGLEdBQUc7TUFDdEVGLE9BQU8sRUFBRSxJQUFJLENBQUMxRixLQUFLLENBQUMwRixPQUFRO01BQzVCOEwsSUFBSSxFQUFFLElBQUksQ0FBQ3hSLEtBQUssQ0FBQ3dSLElBQUs7TUFDdEI4QyxVQUFVLEVBQUUsSUFBSSxDQUFDdFUsS0FBSyxDQUFDc1UsVUFBVztNQUNsQ2pSLE9BQU8sRUFBRSxJQUFJLENBQUNyRCxLQUFLLENBQUNxRCxPQUFRO01BQzVCeUMsWUFBWSxFQUFFLElBQUksQ0FBQzlGLEtBQUssQ0FBQzhGLFlBQWE7TUFDdEN6RCxLQUFLLEVBQUUsSUFBSztNQUNaa1EsTUFBTSxFQUFFLElBQUksQ0FBQzVSLEtBQUssQ0FBQzRSLE1BQU0sSUFBSS9KLElBQUs7TUFDbENwSCxJQUFJLEVBQUVvSCxJQUFLO01BQ1h1QyxPQUFPLEVBQUUsSUFBSSxDQUFDcEssS0FBSyxDQUFDMkMsUUFBUSxDQUFDOEIsT0FBTyxDQUFDb0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFFO01BQ2xEbEcsVUFBVSxFQUFFLElBQUksQ0FBQ3RCLFlBQWE7TUFDOUJpVCxXQUFXLEVBQUUsSUFBSSxDQUFDRDtJQUFjLEVBQUUsQ0FBQztFQUN2QyxDQUFDO0VBQ0RPLFlBQVksRUFBRSxTQUFkQSxZQUFZQSxDQUFZaFMsU0FBUyxFQUFDO0lBQ2pDLElBQUksQ0FBQzFCLFFBQVEsQ0FBQztNQUNiMEIsU0FBUyxFQUFFQTtJQUNaLENBQUMsQ0FBQztFQUNILENBQUM7RUFDRGlTLGFBQWEsRUFBRSxTQUFmQSxhQUFhQSxDQUFBLEVBQWE7SUFBQSxJQUFBNVMsS0FBQTtJQUN6QixJQUFJNlMsVUFBVSxHQUFHdkQsSUFBSSxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDblIsS0FBSyxDQUFDb0IsSUFBSSxDQUFDb0UsTUFBTSxHQUFHLElBQUksQ0FBQzdFLEtBQUssQ0FBQzZCLFFBQVEsQ0FBQztNQUFFa1MsTUFBTSxHQUFHLEVBQUU7SUFDckYsSUFBR0QsVUFBVSxHQUFHLENBQUMsRUFBRTtNQUNsQixLQUFJLElBQUlyTixDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdxTixVQUFVLEdBQUcsQ0FBQyxFQUFFck4sQ0FBQyxFQUFFLEVBQUU7UUFBRXNOLE1BQU0sQ0FBQ3JQLElBQUksQ0FBQytCLENBQUMsQ0FBQztNQUFFO01BQzFELG9CQUNDOUgsS0FBQSxDQUFBUSxhQUFBO1FBQUlHLFNBQVMsRUFBRVYsSUFBSSxDQUFDbUQsS0FBSyxDQUFDQyxTQUFTLENBQUMsYUFBYSxFQUFFLEVBQUU7TUFBRSxnQkFDdERyRCxLQUFBLENBQUFRLGFBQUE7UUFBSXVRLE9BQU8sRUFBRSxJQUFJLENBQUNyUSxLQUFLLENBQUNxRCxPQUFPLENBQUNtQztNQUFPLGdCQUN0Q2xHLEtBQUEsQ0FBQVEsYUFBQTtRQUFLRyxTQUFTLEVBQUM7TUFBVyxnQkFDekJYLEtBQUEsQ0FBQVEsYUFBQTtRQUFLRyxTQUFTLEVBQUM7TUFBTyxHQUVwQnlVLE1BQU0sQ0FBQ25NLEdBQUcsQ0FBQyxVQUFDbkIsQ0FBQyxFQUFFcEMsS0FBSyxFQUFHO1FBQ3RCLG9CQUFPMUYsS0FBQSxDQUFBUSxhQUFBO1VBQU04RCxHQUFHLEVBQUVvQixLQUFNO1VBQUMvRSxTQUFTLEVBQUUsT0FBTyxJQUFJMkIsS0FBSSxDQUFDakIsS0FBSyxDQUFDNEIsU0FBUyxJQUFFNkUsQ0FBQyxHQUFDLFFBQVEsR0FBQyxFQUFFLENBQUU7VUFBQytFLE9BQU8sRUFBRSxTQUFUQSxPQUFPQSxDQUFBO1lBQUEsT0FBTXZLLEtBQUksQ0FBQzJTLFlBQVksQ0FBQ25OLENBQUMsQ0FBQztVQUFBO1FBQUMsR0FBRUEsQ0FBUSxDQUFDO01BQ25JLENBQUMsQ0FFRSxDQUFDLGVBQ045SCxLQUFBLENBQUFRLGFBQUE7UUFBTUcsU0FBUyxFQUFDO01BQVksR0FBQyxTQUFFLEVBQUMsSUFBSSxDQUFDRCxLQUFLLENBQUNvQixJQUFJLENBQUNvRSxNQUFNLEVBQUMsU0FBUSxDQUMzRCxDQUNGLENBQ0QsQ0FBQztJQUVQO0VBQ0QsQ0FBQztFQUNEbVAsWUFBWSxFQUFFLFNBQWRBLFlBQVlBLENBQUEsRUFBYTtJQUN4QixJQUFHLElBQUksQ0FBQzNVLEtBQUssQ0FBQ29CLElBQUksSUFBSSxJQUFJLElBQUssSUFBSSxDQUFDcEIsS0FBSyxDQUFDb0IsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDcEIsS0FBSyxDQUFDb0IsSUFBSSxDQUFDb0UsTUFBTyxFQUFDO01BQzFFLE9BQU8sSUFBSSxDQUFDOE4sYUFBYSxDQUFDLENBQUM7SUFDNUI7SUFDQSxJQUFJbUIsVUFBVSxHQUFHdkQsSUFBSSxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDblIsS0FBSyxDQUFDb0IsSUFBSSxDQUFDb0UsTUFBTSxHQUFHLElBQUksQ0FBQzdFLEtBQUssQ0FBQzZCLFFBQVEsQ0FBQztJQUN4RSxJQUFHaVMsVUFBVSxHQUFHLENBQUMsRUFBQztNQUNqQixvQkFDQ25WLEtBQUEsQ0FBQVEsYUFBQSxDQUFBUixLQUFBLENBQUFzVixRQUFBLFFBQ0UsSUFBSSxDQUFDSixhQUFhLENBQUMsQ0FBQyxFQUVwQixJQUFJLENBQUMxQixTQUFTLENBQUMsSUFBSSxDQUFDblMsS0FBSyxDQUFDNEIsU0FBUyxFQUFFLElBQUksQ0FBQzVCLEtBQUssQ0FBQzZCLFFBQVEsQ0FBQyxDQUFDK0YsR0FBRyxDQUFDLElBQUksQ0FBQzJMLFdBQVcsQ0FFOUUsQ0FBQztJQUVMO0lBRUEsb0JBQ0M1VSxLQUFBLENBQUFRLGFBQUEsQ0FBQVIsS0FBQSxDQUFBc1YsUUFBQSxRQUVFLElBQUksQ0FBQzVVLEtBQUssQ0FBQ29CLElBQUksQ0FBQ21ILEdBQUcsQ0FBQyxJQUFJLENBQUMyTCxXQUFXLENBRXBDLENBQUM7RUFFTCxDQUFDO0VBQ0Q3TCxRQUFRLEVBQUUsU0FBVkEsUUFBUUEsQ0FBQSxFQUFhO0lBQ3BCLElBQUcsSUFBSSxDQUFDckksS0FBSyxDQUFDZ0csT0FBTyxJQUFJLElBQUksQ0FBQ3JGLEtBQUssQ0FBQ3FGLE9BQU8sRUFBRTtNQUM1QyxPQUFPLElBQUksQ0FBQ2tOLGVBQWUsQ0FBQyxDQUFDO0lBQzlCLENBQUMsTUFBSTtNQUNKLE9BQU8sSUFBSSxDQUFDeUIsWUFBWSxDQUFDLENBQUM7SUFDM0I7RUFDRCxDQUFDO0VBQ0Q5VSxNQUFNLEVBQUUsU0FBUkEsTUFBTUEsQ0FBQSxFQUFZO0lBQ2pCLG9CQUNDUCxLQUFBLENBQUFRLGFBQUE7TUFBT0csU0FBUyxFQUFFVixJQUFJLENBQUNtRCxLQUFLLENBQUNDLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMzQyxLQUFLLENBQUNDLFNBQVMsRUFBRSxJQUFJLENBQUNVLEtBQUssQ0FBQ1YsU0FBUyxDQUFFO01BQUNGLEtBQUssRUFBRVIsSUFBSSxDQUFDbUQsS0FBSyxDQUFDM0MsS0FBSyxDQUFDLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxLQUFLLEVBQUUsSUFBSSxDQUFDWSxLQUFLLENBQUNaLEtBQUs7SUFBRSxHQUMvSixJQUFJLENBQUNzSSxRQUFRLENBQUMsQ0FDVixDQUFDO0VBRVY7QUFDRCxDQUFDLENBQUMsQzs7Ozs7Ozs7Ozs7QUN4TkYsSUFBSS9JLEtBQUssR0FBR0MsSUFBSSxDQUFDRCxLQUFLLElBQUlFLG1CQUFPLENBQUMsb0JBQU8sQ0FBQztBQUUxQ0MsTUFBTSxDQUFDQyxPQUFPLEdBQUdKLEtBQUssQ0FBQ0ssV0FBVyxDQUFDO0VBQ2xDQyxXQUFXLEVBQUMsY0FBYztFQUMxQjBULGFBQWEsRUFBRSxTQUFmQSxhQUFhQSxDQUFBLEVBQWE7SUFDekIsSUFBSTNELFFBQVEsR0FBR3BRLElBQUksQ0FBQ21ELEtBQUssQ0FBQ3lOLGtCQUFrQixDQUFDLElBQUksQ0FBQ25RLEtBQUssQ0FBQ3VULFdBQVcsRUFBRTtNQUNwRWxSLEtBQUssRUFBRTtJQUNSLENBQUMsRUFBRSxJQUFJLENBQUNyQyxLQUFLLENBQUMwRixPQUFPLENBQUM7SUFFdEIsSUFBRyxDQUFDaUssUUFBUSxFQUFDO01BQ1hBLFFBQVEsZ0JBQUdyUSxLQUFBLENBQUFRLGFBQUE7UUFBS0csU0FBUyxFQUFDO01BQWUsZ0JBQ3hDWCxLQUFBLENBQUFRLGFBQUE7UUFBSyxlQUFZLE1BQU07UUFBQzBULFNBQVMsRUFBQyxPQUFPO1FBQUMsZUFBWSxLQUFLO1FBQUMsYUFBVSxTQUFTO1FBQUN2VCxTQUFTLEVBQUMsb0NBQW9DO1FBQUN3VCxJQUFJLEVBQUMsS0FBSztRQUFDQyxLQUFLLEVBQUMsNEJBQTRCO1FBQUNDLE9BQU8sRUFBQztNQUFhLGdCQUFDclUsS0FBQSxDQUFBUSxhQUFBO1FBQU04VCxJQUFJLEVBQUMsY0FBYztRQUFDQyxDQUFDLEVBQUM7TUFBc08sQ0FBTyxDQUFNLENBQUMsZUFDbmR2VSxLQUFBLENBQUFRLGFBQUEsZUFBTSxPQUFXLENBQ2IsQ0FBQztJQUNSO0lBQ0EsSUFBSWdVLE1BQU0sR0FBRzNQLEVBQUUsQ0FBQ2tJLE1BQU0sQ0FBQztNQUFFcE0sU0FBUyxFQUFFLEVBQUU7TUFBRUYsS0FBSyxFQUFFLENBQUM7SUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDQyxLQUFLLENBQUMrVCxLQUFLLENBQUM7SUFDdEUsb0JBQU96VSxLQUFBLENBQUFRLGFBQUE7TUFBSUcsU0FBUyxFQUFFVixJQUFJLENBQUNtRCxLQUFLLENBQUNDLFNBQVMsQ0FBQyxhQUFhLEVBQUVtUixNQUFNLENBQUM3VCxTQUFTLENBQUU7TUFBQ0YsS0FBSyxFQUFFK1QsTUFBTSxDQUFDL1Q7SUFBTSxnQkFDaEdULEtBQUEsQ0FBQVEsYUFBQTtNQUFJdVEsT0FBTyxFQUFFLElBQUksQ0FBQ3JRLEtBQUssQ0FBQ3FELE9BQU8sQ0FBQ21DO0lBQU8sR0FBRW1LLFFBQWEsQ0FDbkQsQ0FBQztFQUNOLENBQUM7RUFDRDlQLE1BQU0sRUFBRSxTQUFSQSxNQUFNQSxDQUFBLEVBQVk7SUFDakIsb0JBQ0NQLEtBQUEsQ0FBQVEsYUFBQTtNQUFPRyxTQUFTLEVBQUVWLElBQUksQ0FBQ21ELEtBQUssQ0FBQ0MsU0FBUyxDQUFDLHNCQUFzQixFQUFFLElBQUksQ0FBQzNDLEtBQUssQ0FBQ0MsU0FBUyxDQUFFO01BQUNGLEtBQUssRUFBRVIsSUFBSSxDQUFDbUQsS0FBSyxDQUFDM0MsS0FBSyxDQUFDLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxLQUFLO0lBQUUsR0FDN0gsSUFBSSxDQUFDdVQsYUFBYSxDQUFDLENBQ2YsQ0FBQztFQUVWO0FBQ0QsQ0FBQyxDQUFDLEM7Ozs7Ozs7Ozs7O0FDM0JGLElBQUloVSxLQUFLLEdBQUdDLElBQUksQ0FBQ0QsS0FBSyxJQUFJRSxtQkFBTyxDQUFDLG9CQUFPLENBQUM7QUFDMUMsSUFBSXFWLFFBQVEsR0FBR3RWLElBQUksQ0FBQ3NWLFFBQVEsSUFBSXJWLG1CQUFPLENBQUMsNEJBQVcsQ0FBQztBQUVwREMsTUFBTSxDQUFDQyxPQUFPLEdBQUdKLEtBQUssQ0FBQ0ssV0FBVyxDQUFDO0VBQ2xDQyxXQUFXLEVBQUMsU0FBUztFQUNyQlcsZUFBZSxFQUFFLFNBQWpCQSxlQUFlQSxDQUFBLEVBQWM7SUFDNUIsT0FBTztNQUNOTixTQUFTLEVBQUUsRUFBRTtNQUNiRixLQUFLLEVBQUUsQ0FBQyxDQUFDO01BQ1RtTSxRQUFRLEVBQUUsSUFBSSxDQUFDbE0sS0FBSyxDQUFDa00sUUFBUTtNQUM3Qm5CLE9BQU8sRUFBRSxJQUFJLENBQUMvSyxLQUFLLENBQUMrSyxPQUFPO01BQzNCd0gsTUFBTSxFQUFFLElBQUksQ0FBQ3ZTLEtBQUssQ0FBQ3VTO0lBQ3BCLENBQUM7RUFDRixDQUFDO0VBQ0R1QyxtQkFBbUIsRUFBRSxTQUFyQkEsbUJBQW1CQSxDQUFBLEVBQWE7SUFDL0IsSUFBRyxJQUFJLENBQUM5VSxLQUFLLENBQUNpSyxRQUFRLEVBQUU7TUFDdkIsT0FBTyxJQUFJLENBQUNqSyxLQUFLLENBQUNpSyxRQUFRO0lBQzNCO0lBRUEsSUFBSTlFLE1BQU0sR0FBRyxJQUFJO0lBQ2pCLElBQUcsSUFBSSxDQUFDbkYsS0FBSyxDQUFDb0IsSUFBSSxJQUFJLElBQUksQ0FBQ3BCLEtBQUssQ0FBQ3lNLElBQUksRUFBRTtNQUN0Q3RILE1BQU0sR0FBRyxJQUFJLENBQUNuRixLQUFLLENBQUNvQixJQUFJLENBQUMsSUFBSSxDQUFDcEIsS0FBSyxDQUFDeU0sSUFBSSxDQUFDO0lBQzFDO0lBRUEsSUFBSXNJLE9BQU8sR0FBR3hWLElBQUksQ0FBQ21ELEtBQUssQ0FBQ3lOLGtCQUFrQixDQUFDLElBQUksQ0FBQ25RLEtBQUssQ0FBQ0gsTUFBTSxJQUFJLElBQUksQ0FBQ0csS0FBSyxDQUFDK0wsSUFBSSxFQUFFO01BQ2pGWSxRQUFRLEVBQUUsSUFBSSxDQUFDM00sS0FBSyxDQUFDMk0sUUFBUTtNQUM3QnFJLFNBQVMsRUFBRSxJQUFJLENBQUNoVixLQUFLLENBQUNnVixTQUFTO01BQy9COUgsTUFBTSxFQUFFLElBQUksQ0FBQ2xOLEtBQUssQ0FBQ2tOLE1BQU07TUFDekI5TCxJQUFJLEVBQUUsSUFBSSxDQUFDcEIsS0FBSyxDQUFDb0IsSUFBSTtNQUNyQlgsS0FBSyxFQUFFMEUsTUFBTTtNQUNiaUosS0FBSyxFQUFFLElBQUk7TUFDWC9NLElBQUksRUFBRSxJQUFJLENBQUNyQixLQUFLLENBQUNxQixJQUFJO01BQ3JCZ0IsS0FBSyxFQUFFLElBQUksQ0FBQ3JDLEtBQUssQ0FBQ3FDLEtBQUs7TUFDdkJRLEtBQUssRUFBRSxJQUFJLENBQUM3QyxLQUFLLENBQUNxQyxLQUFLLENBQUNyQyxLQUFLLENBQUM2QztJQUMvQixDQUFDLEVBQUUsSUFBSSxDQUFDN0MsS0FBSyxDQUFDMEYsT0FBTyxDQUFDO0lBRXRCLElBQUdxUCxPQUFPLEVBQUM7TUFDVixPQUFPQSxPQUFPO0lBQ2Y7SUFFQSxvQkFBT3pWLEtBQUEsQ0FBQVEsYUFBQTtNQUFLRyxTQUFTLEVBQUMsWUFBWTtNQUFDbVQsS0FBSyxFQUFFak87SUFBTyxHQUFFQSxNQUFZLENBQUM7RUFDakUsQ0FBQztFQUNEOFAsV0FBVyxFQUFFLFNBQWJBLFdBQVdBLENBQVloVSxLQUFLLEVBQUM7SUFDNUIsSUFBSVcsS0FBSyxHQUFHLElBQUk7SUFDaEJYLEtBQUssQ0FBQ0csSUFBSSxHQUFHO01BQ1o4VCxTQUFTLEVBQUUsU0FBWEEsU0FBU0EsQ0FBQSxFQUFhO1FBQ3JCLE9BQU9MLFFBQVEsQ0FBQ00sV0FBVyxDQUFDdlQsS0FBSyxDQUFDO01BQ25DLENBQUM7TUFDRHdNLEtBQUssRUFBRTtJQUNSLENBQUM7SUFDRCxJQUFJLENBQUNwTyxLQUFLLENBQUNtTSxPQUFPLElBQUksSUFBSSxDQUFDbk0sS0FBSyxDQUFDbU0sT0FBTyxDQUFDbEwsS0FBSyxDQUFDO0lBQy9DLElBQUksQ0FBQ2pCLEtBQUssQ0FBQ2lVLFdBQVcsSUFBSSxJQUFJLENBQUNqVSxLQUFLLENBQUNpVSxXQUFXLENBQUNoVCxLQUFLLENBQUM7RUFDeEQsQ0FBQztFQUNEcEIsTUFBTSxFQUFFLFNBQVJBLE1BQU1BLENBQUEsRUFBWTtJQUNqQixJQUFJdVYsT0FBTyxHQUFHLElBQUksQ0FBQ3BWLEtBQUssQ0FBQ2tOLE1BQU0sSUFBSSxDQUFDLENBQUM7SUFDckMsb0JBQ0M1TixLQUFBLENBQUFRLGFBQUE7TUFBSUcsU0FBUyxFQUFFVixJQUFJLENBQUNtRCxLQUFLLENBQUNDLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBR3lTLE9BQU8sQ0FBQ25ULEtBQUssR0FBQyxPQUFPLEdBQUMsRUFBRSxFQUFHLElBQUksQ0FBQ2pDLEtBQUssQ0FBQ0MsU0FBUyxFQUFFbVYsT0FBTyxDQUFDQyxhQUFhLEVBQUUsSUFBSSxDQUFDMVUsS0FBSyxDQUFDVixTQUFTLENBQUU7TUFBQ0YsS0FBSyxFQUFFUixJQUFJLENBQUNtRCxLQUFLLENBQUMzQyxLQUFLLENBQUMsSUFBSSxDQUFDQyxLQUFLLENBQUNELEtBQUssRUFBRXFWLE9BQU8sQ0FBQ0UsU0FBUyxFQUFFLElBQUksQ0FBQzNVLEtBQUssQ0FBQ1osS0FBSyxFQUFFcVYsT0FBTyxDQUFDM00sV0FBVyxDQUFFO01BQ3pQLGlCQUFlLElBQUksQ0FBQzlILEtBQUssQ0FBQ3VMLFFBQVM7TUFDbkMsZ0JBQWMsSUFBSSxDQUFDdkwsS0FBSyxDQUFDb0ssT0FBUTtNQUNqQyxlQUFhLElBQUksQ0FBQ3BLLEtBQUssQ0FBQzRSLE1BQU87TUFDL0JwRyxPQUFPLEVBQUUsSUFBSSxDQUFDOEk7SUFBWSxHQUN6QixJQUFJLENBQUNILG1CQUFtQixDQUFDLENBQ3ZCLENBQUM7RUFFUDtBQUNELENBQUMsQ0FBQyxDOzs7Ozs7Ozs7Ozs7QUNqRUYsSUFBSXhWLEtBQUssR0FBR0MsSUFBSSxDQUFDRCxLQUFLLElBQUlFLG1CQUFPLENBQUMsb0JBQU8sQ0FBQztBQUMxQyxJQUFJMkMsTUFBTSxHQUFHM0MsbUJBQU8sQ0FBQyw0Q0FBbUIsQ0FBQztBQUV6Q0MsTUFBTSxDQUFDQyxPQUFPLEdBQUdKLEtBQUssQ0FBQ0ssV0FBVyxDQUFDO0VBQ2xDQyxXQUFXLEVBQUUsVUFBVTtFQUN2QlcsZUFBZSxFQUFDLFNBQWhCQSxlQUFlQSxDQUFBLEVBQVc7SUFDekIsT0FBTztNQUNOTixTQUFTLEVBQUUsRUFBRTtNQUNiRixLQUFLLEVBQUUsQ0FBQyxDQUFDO01BQ1RxQixJQUFJLEVBQUUsQ0FBQztJQUNSLENBQUM7RUFDRixDQUFDO0VBQ0RxRCxnQkFBZ0IsRUFBRSxTQUFsQkEsZ0JBQWdCQSxDQUFZeEQsS0FBSyxFQUFFaU4sS0FBSyxFQUFFcUgsV0FBVyxFQUFDO0lBQ3JELElBQUd0VSxLQUFLLENBQUN3TCxJQUFJLElBQUl4TCxLQUFLLENBQUN1VSxHQUFHLEVBQUU7TUFDM0IsSUFBR3ZVLEtBQUssQ0FBQ1IsS0FBSyxLQUFLLElBQUksSUFBSVEsS0FBSyxDQUFDUixLQUFLLEtBQUs2UixTQUFTLElBQUlyUixLQUFLLENBQUNSLEtBQUssS0FBSyxFQUFFLEVBQUU7UUFDM0UsSUFBSSxDQUFDRSxLQUFLLENBQUNTLElBQUksQ0FBQ0gsS0FBSyxDQUFDd0wsSUFBSSxDQUFDLEdBQUcsSUFBSTtRQUNsQyxPQUFPLElBQUksQ0FBQzlMLEtBQUssQ0FBQ1MsSUFBSSxDQUFDSCxLQUFLLENBQUN3TCxJQUFJLENBQUM7TUFDbkMsQ0FBQyxNQUFLLElBQUcsQ0FBQ3hMLEtBQUssQ0FBQ1IsS0FBSyxJQUFJeU4sS0FBSyxJQUFJQSxLQUFLLENBQUNsTyxLQUFLLElBQUksQ0FBQ2tPLEtBQUssQ0FBQ2xPLEtBQUssQ0FBQ3lWLGlCQUFpQixFQUFDO1FBQy9FLElBQUksQ0FBQzlVLEtBQUssQ0FBQ1MsSUFBSSxDQUFDSCxLQUFLLENBQUN3TCxJQUFJLENBQUMsR0FBRyxJQUFJO1FBQ2xDLE9BQU8sSUFBSSxDQUFDOUwsS0FBSyxDQUFDUyxJQUFJLENBQUNILEtBQUssQ0FBQ3dMLElBQUksQ0FBQztNQUNuQyxDQUFDLE1BQUk7UUFDSixJQUFJLENBQUM5TCxLQUFLLENBQUNTLElBQUksQ0FBQ0gsS0FBSyxDQUFDd0wsSUFBSSxDQUFDLEdBQUc7VUFDN0JoTSxLQUFLLEVBQUVRLEtBQUssQ0FBQ1IsS0FBSztVQUNsQitVLEdBQUcsRUFBRXZVLEtBQUssQ0FBQ3VVO1FBQ1osQ0FBQztNQUNGO0lBQ0Q7SUFDQSxJQUFJLENBQUN4VixLQUFLLENBQUM4RSxjQUFjLElBQUksSUFBSSxDQUFDOUUsS0FBSyxDQUFDOEUsY0FBYyxDQUFDN0QsS0FBSyxFQUFFO01BQzdEd0wsSUFBSSxFQUFFeEwsS0FBSyxDQUFDd0wsSUFBSTtNQUNoQitJLEdBQUcsRUFBRXZVLEtBQUssQ0FBQ3VVLEdBQUc7TUFDZHRILEtBQUssRUFBRUEsS0FBSztNQUNacUgsV0FBVyxFQUFFQSxXQUFXO01BQ3hCblUsSUFBSSxFQUFFLElBQUksQ0FBQ1QsS0FBSyxDQUFDUztJQUNsQixDQUFDLENBQUM7SUFDRixJQUFJLENBQUNwQixLQUFLLENBQUNxSixRQUFRLElBQUksSUFBSSxDQUFDckosS0FBSyxDQUFDcUosUUFBUSxDQUFDLElBQUksQ0FBQzFJLEtBQUssQ0FBQ1MsSUFBSSxDQUFDO0VBQzVELENBQUM7RUFDRHNVLGdCQUFnQixFQUFFLFNBQWxCQSxnQkFBZ0JBLENBQVlqSixJQUFJLEVBQUM7SUFDaEMsSUFBR0EsSUFBSSxJQUFJLElBQUksQ0FBQzlMLEtBQUssQ0FBQ1MsSUFBSSxFQUFDO01BQzFCLElBQUksQ0FBQ1QsS0FBSyxDQUFDUyxJQUFJLENBQUNxTCxJQUFJLENBQUMsR0FBRyxJQUFJO01BQzVCLE9BQU8sSUFBSSxDQUFDOUwsS0FBSyxDQUFDUyxJQUFJLENBQUNxTCxJQUFJLENBQUM7SUFDN0I7RUFDRCxDQUFDO0VBQ0RrRixnQkFBZ0IsRUFBRSxTQUFsQkEsZ0JBQWdCQSxDQUFZekUsTUFBTSxFQUFFbEksS0FBSyxFQUFDO0lBQ3pDLElBQUdrSSxNQUFNLENBQUMwRSxRQUFRLEtBQUssS0FBSyxFQUFFO01BQzdCLE9BQU8sS0FBSztJQUNiO0lBQ0EsSUFBR3pOLEVBQUUsQ0FBQ2lDLEVBQUUsQ0FBQzhHLE1BQU0sQ0FBQzBFLFFBQVEsRUFBRSxVQUFVLENBQUMsRUFBRTtNQUN0QyxJQUFJM04sT0FBTyxHQUFHaUosTUFBTSxDQUFDMEUsUUFBUSxDQUFDQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMzRSxNQUFNLEVBQUVsSSxLQUFLLENBQUMsQ0FBQztNQUMxRCxJQUFHZixPQUFPLEtBQUssS0FBSyxFQUFFO1FBQ3JCLE9BQU8sS0FBSztNQUNiO0lBQ0Q7RUFDRCxDQUFDO0VBQ0QwUixZQUFZLEVBQUUsU0FBZEEsWUFBWUEsQ0FBWXpJLE1BQU0sRUFBRWxJLEtBQUssRUFBQztJQUNyQyxJQUFHa0ksTUFBTSxDQUFDVCxJQUFJLElBQUksV0FBVyxFQUFHO01BQy9CLG9CQUNDbk4sS0FBQSxDQUFBUSxhQUFBO1FBQUk4RCxHQUFHLEVBQUVvQixLQUFNO1FBQUMvRSxTQUFTLEVBQUVWLElBQUksQ0FBQ21ELEtBQUssQ0FBQ0MsU0FBUyxDQUFDLGNBQWMsRUFBR3VLLE1BQU0sQ0FBQ2pMLEtBQUssR0FBQyxPQUFPLEdBQUMsRUFBRyxDQUFFO1FBQUNsQyxLQUFLLEVBQUVSLElBQUksQ0FBQ21ELEtBQUssQ0FBQzNDLEtBQUssQ0FBQ21OLE1BQU0sQ0FBQ3pFLFdBQVc7TUFBRSxnQkFDdkluSixLQUFBLENBQUFRLGFBQUE7UUFBS0csU0FBUyxFQUFDO01BQVUsZ0JBQ3hCWCxLQUFBLENBQUFRLGFBQUE7UUFBRyxvQkFBWTtRQUFDRyxTQUFTLEVBQUM7TUFBYyxDQUFFLENBQ3RDLENBQ0YsQ0FBQztJQUVQO0lBQ0EsSUFBRyxJQUFJLENBQUMwUixnQkFBZ0IsQ0FBQ3pFLE1BQU0sRUFBRWxJLEtBQUssQ0FBQyxLQUFLLEtBQUssRUFBQztNQUNqRCxPQUFPLElBQUk7SUFDWjtJQUNBLElBQUcsQ0FBQ2IsRUFBRSxDQUFDaUMsRUFBRSxDQUFDOEcsTUFBTSxFQUFFLFFBQVEsQ0FBQyxFQUFFO01BQUUsT0FBTyxJQUFJO0lBQUU7SUFDNUMsSUFBSXlDLFFBQVEsR0FBR3BRLElBQUksQ0FBQ21ELEtBQUssQ0FBQ3lOLGtCQUFrQixDQUFDLElBQUksQ0FBQ25RLEtBQUssQ0FBQ3NVLFVBQVUsRUFBRTtNQUNuRXBILE1BQU0sRUFBRUEsTUFBTTtNQUNkOEgsU0FBUyxFQUFFaFEsS0FBSztNQUNoQjVDLE9BQU8sRUFBRTtJQUNWLENBQUMsQ0FBQztJQUNGLElBQUd1TixRQUFRLEVBQUM7TUFDWCxPQUFPQSxRQUFRO0lBQ2hCO0lBRUEsSUFBSWlHLFFBQVEsR0FBR3JXLElBQUksQ0FBQ21ELEtBQUssQ0FBQ3lOLGtCQUFrQixDQUFDakQsTUFBTSxDQUFDck4sTUFBTSxFQUFFO01BQzNEcU4sTUFBTSxFQUFFQSxNQUFNO01BQ2Q4SCxTQUFTLEVBQUVoUSxLQUFLO01BQ2hCNUMsT0FBTyxFQUFFO0lBQ1YsQ0FBQyxDQUFDO0lBRUYsSUFBRyxDQUFDd1QsUUFBUSxJQUFJMUksTUFBTSxDQUFDL0ssTUFBTSxFQUFFO01BQzlCLElBQUkwVCxPQUFPLEdBQUczSSxNQUFNLENBQUMvSyxNQUFNO01BQzNCLElBQUdnQyxFQUFFLENBQUNpQyxFQUFFLENBQUN5UCxPQUFPLEVBQUUsVUFBVSxDQUFDLEVBQUU7UUFDOUIsSUFBR0EsT0FBTyxDQUFDQyxTQUFTLElBQUlELE9BQU8sQ0FBQ0MsU0FBUyxDQUFDalcsTUFBTSxFQUFFO1VBQ2pEK1YsUUFBUSxHQUFHclcsSUFBSSxDQUFDbUQsS0FBSyxDQUFDeU4sa0JBQWtCLENBQUMwRixPQUFPLEVBQUU7WUFDakQzSSxNQUFNLEVBQUVBLE1BQU07WUFDZDlLLE9BQU8sRUFBRTtVQUNWLENBQUMsQ0FBQztRQUNTLENBQUMsTUFBSTtVQUNEeVQsT0FBTyxHQUFHQSxPQUFPLENBQUNFLElBQUksQ0FBQyxJQUFJLEVBQUU3SSxNQUFNLEVBQUUsSUFBSSxDQUFDO1FBQzlDO01BQ2I7TUFFQSxJQUFHL0ksRUFBRSxDQUFDaUMsRUFBRSxDQUFDeVAsT0FBTyxFQUFFLFFBQVEsQ0FBQyxFQUFFO1FBQzVCLElBQUl4QixJQUFJLEdBQUd3QixPQUFPLENBQUNqUyxHQUFHLElBQUlzSixNQUFNLENBQUNULElBQUk7UUFDckMsSUFBR3RJLEVBQUUsQ0FBQ2lDLEVBQUUsQ0FBQ2lPLElBQUksRUFBRSxVQUFVLENBQUMsRUFBRTtVQUMzQkEsSUFBSSxHQUFHQSxJQUFJLENBQUMwQixJQUFJLENBQUMsSUFBSSxFQUFFN0ksTUFBTSxFQUFFLElBQUksQ0FBQztRQUNyQztRQUVBMEksUUFBUSxnQkFBR3RXLEtBQUEsQ0FBQVEsYUFBQSxDQUFDcUMsTUFBTSxDQUFDNlQsV0FBVyxFQUFBblUsUUFBQTtVQUFDK0IsR0FBRyxFQUFFeVEsSUFBSSxJQUFJbFEsRUFBRSxDQUFDMkgsSUFBSSxDQUFDO1FBQUUsR0FBSytKLE9BQU87VUFBRXBKLElBQUksRUFBRVMsTUFBTSxDQUFDVCxJQUFLO1VBQUMzSCxjQUFjLEVBQUUsSUFBSSxDQUFDTCxnQkFBaUI7VUFBQ3dSLFFBQVEsRUFBRSxJQUFJLENBQUNQO1FBQWlCLEVBQUUsQ0FBQztNQUNsSztJQUNEO0lBRUEsSUFBSVEsS0FBSyxHQUFHL1IsRUFBRSxDQUFDa0ksTUFBTSxDQUFDO01BQUV0TSxLQUFLLEVBQUUsQ0FBQyxDQUFDO01BQUVFLFNBQVMsRUFBRTtJQUFHLENBQUMsRUFBRSxJQUFJLENBQUNELEtBQUssQ0FBQ3dSLElBQUksQ0FBQztJQUNwRSxvQkFDQ2xTLEtBQUEsQ0FBQVEsYUFBQTtNQUFJOEQsR0FBRyxFQUFFb0IsS0FBTTtNQUFDL0UsU0FBUyxFQUFFVixJQUFJLENBQUNtRCxLQUFLLENBQUNDLFNBQVMsQ0FBQyxjQUFjLEVBQUd1SyxNQUFNLENBQUNqTCxLQUFLLEdBQUMsT0FBTyxHQUFDLEVBQUUsRUFBR2lVLEtBQUssQ0FBQ2pXLFNBQVMsQ0FBRTtNQUFDRixLQUFLLEVBQUVSLElBQUksQ0FBQ21ELEtBQUssQ0FBQzNDLEtBQUssQ0FBQ21XLEtBQUssQ0FBQ25XLEtBQUssRUFBRW1OLE1BQU0sQ0FBQ3pFLFdBQVc7SUFBRSxHQUNuS21OLFFBQ0MsQ0FBQztFQUVQLENBQUM7RUFDRDFCLFdBQVcsRUFBRSxTQUFiQSxXQUFXQSxDQUFBLEVBQWE7SUFDdkIsSUFBSXZFLFFBQVEsR0FBR3BRLElBQUksQ0FBQ21ELEtBQUssQ0FBQ3lOLGtCQUFrQixDQUFDLElBQUksQ0FBQ25RLEtBQUssQ0FBQ21VLFNBQVMsRUFBRTtNQUNsRS9SLE9BQU8sRUFBRTtJQUNWLENBQUMsQ0FBQztJQUNGLElBQUd1TixRQUFRLEVBQUM7TUFDWCxPQUFPQSxRQUFRO0lBQ2hCO0lBQ0EsSUFBSXdHLElBQUksR0FBR2hTLEVBQUUsQ0FBQ2tJLE1BQU0sQ0FBQztNQUFFcE0sU0FBUyxFQUFFLEVBQUU7TUFBRUYsS0FBSyxFQUFFLENBQUM7SUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDQyxLQUFLLENBQUM0RixHQUFHLENBQUM7SUFDbEUsb0JBQ0N0RyxLQUFBLENBQUFRLGFBQUE7TUFBSUcsU0FBUyxFQUFFVixJQUFJLENBQUNtRCxLQUFLLENBQUNDLFNBQVMsQ0FBQywyQkFBMkIsRUFBRXdULElBQUksQ0FBQ2xXLFNBQVMsQ0FBRTtNQUFDRixLQUFLLEVBQUVvVyxJQUFJLENBQUNwVztJQUFNLEdBRWxHLENBQUMsSUFBSSxDQUFDQyxLQUFLLENBQUNxRCxPQUFPLElBQUUsRUFBRSxFQUFFa0YsR0FBRyxDQUFDLElBQUksQ0FBQ29OLFlBQVksQ0FFNUMsQ0FBQztFQUVQLENBQUM7RUFDRDlWLE1BQU0sRUFBQyxTQUFQQSxNQUFNQSxDQUFBLEVBQVc7SUFDaEIsb0JBQ0NQLEtBQUEsQ0FBQVEsYUFBQTtNQUFPRyxTQUFTLEVBQUVWLElBQUksQ0FBQ21ELEtBQUssQ0FBQ0MsU0FBUyxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQzNDLEtBQUssQ0FBQ0MsU0FBUyxFQUFFLElBQUksQ0FBQ1UsS0FBSyxDQUFDVixTQUFTLENBQUU7TUFBQ0YsS0FBSyxFQUFFUixJQUFJLENBQUNtRCxLQUFLLENBQUMzQyxLQUFLLENBQUMsSUFBSSxDQUFDQyxLQUFLLENBQUNELEtBQUssRUFBRSxJQUFJLENBQUNZLEtBQUssQ0FBQ1osS0FBSztJQUFFLEdBQ2xLLElBQUksQ0FBQ21VLFdBQVcsQ0FBQyxDQUNaLENBQUM7RUFFVjtBQUNELENBQUMsQ0FBQyxDOzs7Ozs7Ozs7OztBQ3ZJRixJQUFJNVUsS0FBSyxHQUFHQyxJQUFJLENBQUNELEtBQUssSUFBSUUsbUJBQU8sQ0FBQyxvQkFBTyxDQUFDO0FBRTFDQyxNQUFNLENBQUNDLE9BQU8sR0FBR0osS0FBSyxDQUFDSyxXQUFXLENBQUM7RUFDbENDLFdBQVcsRUFBQyxTQUFTO0VBQ3JCd1csZ0JBQWdCLEVBQUUsU0FBbEJBLGdCQUFnQkEsQ0FBQSxFQUFhO0lBQzVCLElBQUlsUCxRQUFRLEdBQUcsSUFBSSxDQUFDbEgsS0FBSyxDQUFDcUQsT0FBTyxJQUFJLEVBQUU7SUFDdkMsSUFBRyxJQUFJLENBQUNyRCxLQUFLLENBQUNpSyxRQUFRLEVBQUM7TUFDdEIsb0JBQU8zSyxLQUFBLENBQUFRLGFBQUE7UUFBSUcsU0FBUyxFQUFDO01BQVcsZ0JBQy9CWCxLQUFBLENBQUFRLGFBQUE7UUFBSXVRLE9BQU8sRUFBRW5KLFFBQVEsQ0FBQzFCO01BQU8sR0FBRSxJQUFJLENBQUN4RixLQUFLLENBQUNpSyxRQUFhLENBQ3BELENBQUM7SUFDTixDQUFDLE1BQUk7TUFDSixPQUFPLElBQUksQ0FBQ2lLLFdBQVcsQ0FBQyxDQUFDO0lBQzFCO0VBQ0QsQ0FBQztFQUNEeUIsWUFBWSxFQUFFLFNBQWRBLFlBQVlBLENBQVl6SSxNQUFNLEVBQUVsSSxLQUFLLEVBQUM7SUFDckMsSUFBRyxDQUFDYixFQUFFLENBQUNpQyxFQUFFLENBQUM4RyxNQUFNLEVBQUUsUUFBUSxDQUFDLEVBQUU7TUFBRSxPQUFPLElBQUk7SUFBRTtJQUM1QyxJQUFJeUMsUUFBUSxHQUFHcFEsSUFBSSxDQUFDbUQsS0FBSyxDQUFDeU4sa0JBQWtCLENBQUMsSUFBSSxDQUFDblEsS0FBSyxDQUFDc1UsVUFBVSxFQUFFO01BQ25FcEgsTUFBTSxFQUFFQSxNQUFNO01BQ2Q4SCxTQUFTLEVBQUVoUSxLQUFLO01BQ2hCOEUsS0FBSyxFQUFFO0lBQ1IsQ0FBQyxDQUFDO0lBQ0YsSUFBRzZGLFFBQVEsRUFBQztNQUNYLE9BQU9BLFFBQVE7SUFDaEI7SUFFQSxJQUFJaUcsUUFBUSxHQUFHclcsSUFBSSxDQUFDbUQsS0FBSyxDQUFDeU4sa0JBQWtCLENBQUNqRCxNQUFNLENBQUNyTixNQUFNLElBQUlxTixNQUFNLENBQUNtSixJQUFJLEVBQUU7TUFDMUVuSixNQUFNLEVBQUVBLE1BQU07TUFDZDhILFNBQVMsRUFBRWhRLEtBQUs7TUFDaEI4RSxLQUFLLEVBQUU7SUFDUixDQUFDLENBQUM7SUFFRixJQUFHLElBQUksQ0FBQzlKLEtBQUssQ0FBQ0gsTUFBTSxFQUFFO01BQ3JCK1YsUUFBUSxHQUFHLElBQUksQ0FBQzVWLEtBQUssQ0FBQ0gsTUFBTSxDQUFDcU4sTUFBTSxFQUFFbEksS0FBSyxFQUFFLElBQUksQ0FBQztJQUNsRDtJQUVBLElBQUlrUixLQUFLLEdBQUcvUixFQUFFLENBQUNrSSxNQUFNLENBQUM7TUFBRXRNLEtBQUssRUFBRSxDQUFDLENBQUM7TUFBRUUsU0FBUyxFQUFFO0lBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQ0QsS0FBSyxDQUFDd1IsSUFBSSxDQUFDO0lBQ3BFLG9CQUFPbFMsS0FBQSxDQUFBUSxhQUFBO01BQUk4RCxHQUFHLEVBQUVvQixLQUFNO01BQUMvRSxTQUFTLEVBQUVWLElBQUksQ0FBQ21ELEtBQUssQ0FBQ0MsU0FBUyxDQUFDLFlBQVksRUFBRXVULEtBQUssQ0FBQ2pXLFNBQVMsQ0FBRTtNQUFDRixLQUFLLEVBQUVtVyxLQUFLLENBQUNuVztJQUFNLEdBQ3ZHNlYsUUFDQyxDQUFDO0VBQ04sQ0FBQztFQUNEMUIsV0FBVyxFQUFFLFNBQWJBLFdBQVdBLENBQUEsRUFBYTtJQUN2QixJQUFJdkUsUUFBUSxHQUFHcFEsSUFBSSxDQUFDbUQsS0FBSyxDQUFDeU4sa0JBQWtCLENBQUMsSUFBSSxDQUFDblEsS0FBSyxDQUFDbVUsU0FBUyxFQUFFO01BQ2xFalMsS0FBSyxFQUFFO0lBQ1IsQ0FBQyxDQUFDO0lBQ0YsSUFBR3lOLFFBQVEsRUFBQztNQUNYLE9BQU9BLFFBQVE7SUFDaEI7SUFDQSxJQUFJd0csSUFBSSxHQUFHaFMsRUFBRSxDQUFDa0ksTUFBTSxDQUFDO01BQUVwTSxTQUFTLEVBQUUsRUFBRTtNQUFFRixLQUFLLEVBQUUsQ0FBQztJQUFFLENBQUMsRUFBRSxJQUFJLENBQUNDLEtBQUssQ0FBQzRGLEdBQUcsQ0FBQztJQUNsRSxvQkFDQ3RHLEtBQUEsQ0FBQVEsYUFBQTtNQUFJRyxTQUFTLEVBQUVWLElBQUksQ0FBQ21ELEtBQUssQ0FBQ0MsU0FBUyxDQUFDLFdBQVcsRUFBRXdULElBQUksQ0FBQ2xXLFNBQVMsQ0FBRTtNQUFDRixLQUFLLEVBQUVvVyxJQUFJLENBQUNwVztJQUFNLEdBRWxGLENBQUMsSUFBSSxDQUFDQyxLQUFLLENBQUNxRCxPQUFPLElBQUUsRUFBRSxFQUFFa0YsR0FBRyxDQUFDLElBQUksQ0FBQ29OLFlBQVksQ0FFNUMsQ0FBQztFQUVQLENBQUM7RUFDRDlWLE1BQU0sRUFBRSxTQUFSQSxNQUFNQSxDQUFBLEVBQVk7SUFDakIsb0JBQ0NQLEtBQUEsQ0FBQVEsYUFBQTtNQUFPRyxTQUFTLEVBQUVWLElBQUksQ0FBQ21ELEtBQUssQ0FBQ0MsU0FBUyxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQzNDLEtBQUssQ0FBQ0MsU0FBUyxDQUFFO01BQUNGLEtBQUssRUFBRSxJQUFJLENBQUNDLEtBQUssQ0FBQ0Q7SUFBTSxHQUN0RyxJQUFJLENBQUNxVyxnQkFBZ0IsQ0FBQyxDQUNqQixDQUFDO0VBRVY7QUFDRCxDQUFDLENBQUMsQzs7Ozs7Ozs7Ozs7QUMvREYsSUFBSTlXLEtBQUssR0FBR0MsSUFBSSxDQUFDRCxLQUFLLElBQUlFLG1CQUFPLENBQUMsb0JBQU8sQ0FBQztBQUMxQyxJQUFJOFcsU0FBUyxHQUFHOVcsbUJBQU8sQ0FBQyx5Q0FBYSxDQUFDO0FBQ3RDLElBQUkrVyxLQUFLLEdBQUcvVyxtQkFBTyxDQUFDLDBDQUFrQixDQUFDO0FBQ3ZDLElBQUlnWCxNQUFNLEdBQUdoWCxtQkFBTyxDQUFDLHdDQUFpQixDQUFDO0FBQ3ZDQyxNQUFNLENBQUNDLE9BQU8sR0FBR0osS0FBSyxDQUFDSyxXQUFXLENBQUM7RUFDbENDLFdBQVcsRUFBQyxPQUFPO0VBQ25CUSxlQUFlLEVBQUUsU0FBakJBLGVBQWVBLENBQUEsRUFBYTtJQUMzQixPQUFPLENBQUMsQ0FBQztFQUNWLENBQUM7RUFDREcsZUFBZSxFQUFFLFNBQWpCQSxlQUFlQSxDQUFBLEVBQWE7SUFDM0IsT0FBTztNQUNOTixTQUFTLEVBQUUsRUFBRTtNQUNiRixLQUFLLEVBQUUsQ0FBQyxDQUFDO01BQ1R3RSxJQUFJLEVBQUUsQ0FBQyxDQUFDO01BQ1JwQyxNQUFNLEVBQUUsQ0FBQztJQUNWLENBQUM7RUFDRixDQUFDO0VBQ0RzVSxjQUFjLEVBQUUsU0FBaEJBLGNBQWNBLENBQVlsUyxJQUFJLEVBQUUySSxNQUFNLEVBQUM7SUFDdEMsSUFBR0EsTUFBTSxDQUFDVCxJQUFJLEVBQUU7TUFDZixJQUFJLENBQUM5TCxLQUFLLENBQUM0RCxJQUFJLENBQUMySSxNQUFNLENBQUNULElBQUksQ0FBQyxHQUFHbEksSUFBSTtJQUNwQztJQUNBLElBQUksQ0FBQ3ZFLEtBQUssQ0FBQ2tKLE1BQU0sSUFBSSxJQUFJLENBQUNsSixLQUFLLENBQUNrSixNQUFNLENBQUMsSUFBSSxDQUFDdkksS0FBSyxDQUFDNEQsSUFBSSxDQUFDO0VBQ3hELENBQUM7RUFDRG1TLHNCQUFzQixFQUFFLFNBQXhCQSxzQkFBc0JBLENBQVl0VixJQUFJLEVBQUV1VixLQUFLLEVBQUVDLElBQUksRUFBRTVSLEtBQUssRUFBQztJQUNwRCxJQUFJNlIsS0FBSyxHQUFHRCxJQUFJLElBQUlELEtBQUs7SUFDL0IsSUFBSSxDQUFDM1csS0FBSyxDQUFDbUosY0FBYyxJQUFJLElBQUksQ0FBQ25KLEtBQUssQ0FBQ21KLGNBQWMsQ0FBQzBOLEtBQUssQ0FBQ2xXLEtBQUssQ0FBQ0YsS0FBSyxFQUFFdUUsS0FBSyxDQUFDO0VBQzlFLENBQUM7RUFDSjhSLGlCQUFpQixFQUFFLFNBQW5CQSxpQkFBaUJBLENBQVk1SixNQUFNLEVBQUVsSSxLQUFLLEVBQUM7SUFBQSxJQUFBcEQsS0FBQTtJQUMxQyxvQkFDQ3RDLEtBQUEsQ0FBQVEsYUFBQTtNQUFLQyxLQUFLLEVBQUU7UUFBQ2dYLE9BQU8sRUFBRSxFQUFFO1FBQUVDLFNBQVMsRUFBRSxHQUFHO1FBQUUzUCxLQUFLLEVBQUUsR0FBRztRQUFFNFAsUUFBUSxFQUFFO01BQU07SUFBRSxnQkFDdkUzWCxLQUFBLENBQUFRLGFBQUEsQ0FBQzBXLE1BQU0sQ0FBQ1UsTUFBTSxDQUFDQyxNQUFNO01BQUNDLElBQUksRUFBRSxLQUFNO01BQ2pDQyxjQUFjLEVBQUUsSUFBSztNQUNyQkMsZ0JBQWdCLEVBQUUsSUFBSztNQUN2QjlLLEtBQUssRUFBRSxRQUFTO01BQ2hCL0wsS0FBSyxFQUFFeU0sTUFBTztNQUNkeEwsUUFBUSxFQUFFLFNBQVZBLFFBQVFBLENBQUdOLElBQUksRUFBRXVWLEtBQUssRUFBRUMsSUFBSTtRQUFBLE9BQUdoVixLQUFJLENBQUM4VSxzQkFBc0IsQ0FBQ3RWLElBQUksRUFBRXVWLEtBQUssRUFBRUMsSUFBSSxFQUFFNVIsS0FBSyxDQUFDO01BQUE7SUFBQyxDQUFFLENBQ3BGLENBQUM7RUFFUixDQUFDO0VBQ0R1UyxZQUFZLEVBQUUsU0FBZEEsWUFBWUEsQ0FBQSxFQUFhLENBRXpCLENBQUM7RUFDRDVGLGdCQUFnQixFQUFFLFNBQWxCQSxnQkFBZ0JBLENBQVl6RSxNQUFNLEVBQUVsSSxLQUFLLEVBQUM7SUFDekMsSUFBR2tJLE1BQU0sQ0FBQzBFLFFBQVEsS0FBSyxLQUFLLEVBQUU7TUFDN0IsT0FBTyxLQUFLO0lBQ2I7SUFDQSxJQUFHek4sRUFBRSxDQUFDaUMsRUFBRSxDQUFDOEcsTUFBTSxDQUFDMEUsUUFBUSxFQUFFLFVBQVUsQ0FBQyxFQUFFO01BQ3RDLElBQUkzTixPQUFPLEdBQUdpSixNQUFNLENBQUMwRSxRQUFRLENBQUNDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQzNFLE1BQU0sRUFBRWxJLEtBQUssQ0FBQyxDQUFDO01BQzFELElBQUdmLE9BQU8sS0FBSyxLQUFLLEVBQUU7UUFDckIsT0FBTyxLQUFLO01BQ2I7SUFDRDtFQUNELENBQUM7RUFDRDBSLFlBQVksRUFBRSxTQUFkQSxZQUFZQSxDQUFZekksTUFBTSxFQUFFbEksS0FBSyxFQUFDO0lBQUEsSUFBQXdDLE1BQUE7SUFDckMsSUFBRyxJQUFJLENBQUNtSyxnQkFBZ0IsQ0FBQ3pFLE1BQU0sRUFBRWxJLEtBQUssQ0FBQyxLQUFLLEtBQUssRUFBQztNQUNqRCxPQUFPLElBQUk7SUFDWjtJQUNBLElBQUcsQ0FBQ2IsRUFBRSxDQUFDaUMsRUFBRSxDQUFDOEcsTUFBTSxFQUFFLFFBQVEsQ0FBQyxFQUFFO01BQUUsT0FBTyxJQUFJO0lBQUU7SUFDNUMsSUFBSXlDLFFBQVEsR0FBR3BRLElBQUksQ0FBQ21ELEtBQUssQ0FBQ3lOLGtCQUFrQixDQUFDLElBQUksQ0FBQ25RLEtBQUssQ0FBQ3NVLFVBQVUsRUFBRTtNQUNuRXBILE1BQU0sRUFBRUEsTUFBTTtNQUNkOEgsU0FBUyxFQUFFaFEsS0FBSztNQUNoQjlDLEtBQUssRUFBRTtJQUNSLENBQUMsQ0FBQztJQUNGLElBQUd5TixRQUFRLEVBQUM7TUFDWCxPQUFPQSxRQUFRO0lBQ2hCO0lBRUEsSUFBSWlHLFFBQVEsR0FBR3JXLElBQUksQ0FBQ21ELEtBQUssQ0FBQ3lOLGtCQUFrQixDQUFDakQsTUFBTSxDQUFDck4sTUFBTSxJQUFJcU4sTUFBTSxDQUFDekIsSUFBSSxFQUFFO1FBQ3pFeUIsTUFBTSxFQUFFQSxNQUFNO1FBQ2Q4SCxTQUFTLEVBQUVoUSxLQUFLO1FBQ2hCOUMsS0FBSyxFQUFFLElBQUk7UUFDWFcsS0FBSyxFQUFFLElBQUksQ0FBQzdDLEtBQUssQ0FBQzZDO01BQ25CLENBQUMsQ0FBQztNQUNGMlUsUUFBUSxHQUFHLElBQUksQ0FBQ3hYLEtBQUssQ0FBQ2dKLFVBQVUsSUFBSSxDQUFDLENBQUM7TUFDdEN5TyxTQUFTLEdBQUdELFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxPQUFPO01BQ3hDRSxNQUFNLEdBQUd4SyxNQUFNLENBQUN1SyxTQUFTLENBQUM7SUFFM0IsSUFBR3RULEVBQUUsQ0FBQ2lDLEVBQUUsQ0FBQ3NSLE1BQU0sRUFBRSxVQUFVLENBQUMsRUFBQztNQUM1QkEsTUFBTSxHQUFHQSxNQUFNLENBQUN4SyxNQUFNLEVBQUUsSUFBSSxDQUFDO0lBQzlCO0lBQ0EsSUFBRyxDQUFDMEksUUFBUSxFQUFFO01BQ2JBLFFBQVEsZ0JBQ1B0VyxLQUFBLENBQUFRLGFBQUE7UUFBS0csU0FBUyxFQUFFLGFBQWEsSUFBSWlOLE1BQU0sQ0FBQzNJLElBQUksR0FBQyxVQUFVLEdBQUMsRUFBRSxDQUFFO1FBQUM2TyxLQUFLLEVBQUVzRTtNQUFPLEdBQ3hFLENBQUMsQ0FBQ3hLLE1BQU0sQ0FBQ3lLLFFBQVEsaUJBQUlyWSxLQUFBLENBQUFRLGFBQUE7UUFBTSx5QkFBc0IsMEJBQU07UUFBQ0csU0FBUyxFQUFDO01BQVUsR0FBQyxHQUFPLENBQUMsRUFDckZ5WCxNQUFNLEVBRVAsQ0FBQyxDQUFDeEssTUFBTSxDQUFDMEssUUFBUSxpQkFDaEJ0WSxLQUFBLENBQUFRLGFBQUEsQ0FBQ3lXLEtBQUssQ0FBQ3NCLFFBQVE7UUFDZDVYLFNBQVMsRUFBQyxhQUFhO1FBQ3ZCNlgsT0FBTyxFQUFFO1VBQ1JqWSxNQUFNLEVBQUUsSUFBSSxDQUFDaVgsaUJBQWlCLENBQUM1SixNQUFNLEVBQUVsSSxLQUFLLENBQUM7VUFDN0MrUyxTQUFTLEVBQUU7UUFDWjtNQUFFLGdCQUNGelksS0FBQSxDQUFBUSxhQUFBO1FBQUssZUFBWSxNQUFNO1FBQUMwVCxTQUFTLEVBQUMsT0FBTztRQUFDLGVBQVksS0FBSztRQUFDLGFBQVUsTUFBTTtRQUFDdlQsU0FBUyxFQUFDLHNDQUFzQztRQUFDd1QsSUFBSSxFQUFDLEtBQUs7UUFBQ0MsS0FBSyxFQUFDLDRCQUE0QjtRQUFDQyxPQUFPLEVBQUM7TUFBYSxnQkFBQ3JVLEtBQUEsQ0FBQVEsYUFBQTtRQUFNOFQsSUFBSSxFQUFDLGNBQWM7UUFBQ0MsQ0FBQyxFQUFDO01BQTZmLENBQU8sQ0FBTSxDQUN6dEIsQ0FHZCxDQUNMO0lBQ0Y7SUFFQSxJQUFJcUMsS0FBSyxHQUFHL1IsRUFBRSxDQUFDa0ksTUFBTSxDQUFDO01BQUV0TSxLQUFLLEVBQUUsQ0FBQyxDQUFDO01BQUVFLFNBQVMsRUFBRTtJQUFHLENBQUMsRUFBRSxJQUFJLENBQUNELEtBQUssQ0FBQ3dSLElBQUksRUFBRXRFLE1BQU0sQ0FBQztJQUM1RSxvQkFDQzVOLEtBQUEsQ0FBQVEsYUFBQTtNQUFJOEQsR0FBRyxFQUFFb0IsS0FBTTtNQUFDL0UsU0FBUyxFQUFFVixJQUFJLENBQUNtRCxLQUFLLENBQUNDLFNBQVMsQ0FBQyxZQUFZLEVBQUd1SyxNQUFNLENBQUNqTCxLQUFLLEdBQUMsT0FBTyxHQUFDLEVBQUUsRUFBR2lVLEtBQUssQ0FBQ2pXLFNBQVMsQ0FBRTtNQUFDRixLQUFLLEVBQUVSLElBQUksQ0FBQ21ELEtBQUssQ0FBQzNDLEtBQUssQ0FBQ21XLEtBQUssQ0FBQ25XLEtBQUssRUFBRW1OLE1BQU0sQ0FBQ3pFLFdBQVc7SUFBRSxHQUNqS21OLFFBQVEsRUFDUixDQUFDLENBQUMxSSxNQUFNLENBQUMzSSxJQUFJLGlCQUFJakYsS0FBQSxDQUFBUSxhQUFBLENBQUN3VyxTQUFTO01BQUNyVyxTQUFTLEVBQUMsV0FBVztNQUFDaUosTUFBTSxFQUFFLFNBQVJBLE1BQU1BLENBQUczRSxJQUFJO1FBQUEsT0FBR2lELE1BQUksQ0FBQ2lQLGNBQWMsQ0FBQ2xTLElBQUksRUFBRTJJLE1BQU0sQ0FBQztNQUFBO0lBQUMsQ0FBRSxDQUNyRyxDQUFDO0VBRVAsQ0FBQztFQUNEZ0gsV0FBVyxFQUFFLFNBQWJBLFdBQVdBLENBQUEsRUFBYTtJQUN2QixJQUFJdkUsUUFBUSxHQUFHcFEsSUFBSSxDQUFDbUQsS0FBSyxDQUFDeU4sa0JBQWtCLENBQUMsSUFBSSxDQUFDblEsS0FBSyxDQUFDbVUsU0FBUyxFQUFFO01BQ2xFalMsS0FBSyxFQUFFO0lBQ1IsQ0FBQyxDQUFDO0lBQ0YsSUFBR3lOLFFBQVEsRUFBQztNQUNYLE9BQU9BLFFBQVE7SUFDaEI7SUFDQSxJQUFJd0csSUFBSSxHQUFHaFMsRUFBRSxDQUFDa0ksTUFBTSxDQUFDO01BQUVwTSxTQUFTLEVBQUUsRUFBRTtNQUFFRixLQUFLLEVBQUUsQ0FBQztJQUFFLENBQUMsRUFBRSxJQUFJLENBQUNDLEtBQUssQ0FBQzRGLEdBQUcsQ0FBQztJQUNsRSxvQkFDQ3RHLEtBQUEsQ0FBQVEsYUFBQTtNQUFJRyxTQUFTLEVBQUVWLElBQUksQ0FBQ21ELEtBQUssQ0FBQ0MsU0FBUyxDQUFDLFdBQVcsRUFBRXdULElBQUksQ0FBQ2xXLFNBQVMsQ0FBRTtNQUFDRixLQUFLLEVBQUVvVyxJQUFJLENBQUNwVztJQUFNLEdBRWxGLENBQUMsSUFBSSxDQUFDQyxLQUFLLENBQUNxRCxPQUFPLElBQUUsRUFBRSxFQUFFa0YsR0FBRyxDQUFDLElBQUksQ0FBQ29OLFlBQVksQ0FFNUMsQ0FBQztFQUVQLENBQUM7RUFDRDlWLE1BQU0sRUFBQyxTQUFQQSxNQUFNQSxDQUFBLEVBQVc7SUFDaEIsb0JBQ0NQLEtBQUEsQ0FBQVEsYUFBQTtNQUFPRyxTQUFTLEVBQUVWLElBQUksQ0FBQ21ELEtBQUssQ0FBQ0MsU0FBUyxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQzNDLEtBQUssQ0FBQ0MsU0FBUyxFQUFFLElBQUksQ0FBQ1UsS0FBSyxDQUFDVixTQUFTLENBQUU7TUFBQ0YsS0FBSyxFQUFFUixJQUFJLENBQUNtRCxLQUFLLENBQUMzQyxLQUFLLENBQUMsSUFBSSxDQUFDQyxLQUFLLENBQUNELEtBQUssRUFBRSxJQUFJLENBQUNZLEtBQUssQ0FBQ1osS0FBSztJQUFFLEdBQ2hLLElBQUksQ0FBQ21VLFdBQVcsQ0FBQyxDQUNaLENBQUM7RUFFVjtBQUNELENBQUMsQ0FBQyxDOzs7Ozs7Ozs7OztBQ3BJRixJQUFJNVUsS0FBSyxHQUFHQyxJQUFJLENBQUNELEtBQUssSUFBSUUsbUJBQU8sQ0FBQyxvQkFBTyxDQUFDO0FBRTFDQyxNQUFNLENBQUNDLE9BQU8sR0FBR0osS0FBSyxDQUFDSyxXQUFXLENBQUM7RUFDbENDLFdBQVcsRUFBQyxhQUFhO0VBQ3pCVyxlQUFlLEVBQUUsU0FBakJBLGVBQWVBLENBQUEsRUFBYTtJQUMzQixPQUFPO01BQ05nRSxJQUFJLEVBQUU7SUFDUCxDQUFDO0VBQ0YsQ0FBQztFQUNEeVQsWUFBWSxFQUFFLFNBQWRBLFlBQVlBLENBQUEsRUFBYTtJQUFBLElBQUFwVyxLQUFBO0lBQ3hCLFFBQU8sSUFBSSxDQUFDakIsS0FBSyxDQUFDNEQsSUFBSTtNQUNyQixLQUFLLFFBQVE7UUFDWixvQkFBT2pGLEtBQUEsQ0FBQVEsYUFBQTtVQUFLcU0sT0FBTyxFQUFFLFNBQVRBLE9BQU9BLENBQUE7WUFBQSxPQUFNdkssS0FBSSxDQUFDcVcsV0FBVyxDQUFDLElBQUksQ0FBQztVQUFBLENBQUM7VUFBQyxlQUFZLE1BQU07VUFBQ3pFLFNBQVMsRUFBQyxPQUFPO1VBQUMsZUFBWSxLQUFLO1VBQUMsYUFBVSxNQUFNO1VBQUN2VCxTQUFTLEVBQUMsc0NBQXNDO1VBQUN3VCxJQUFJLEVBQUMsS0FBSztVQUFDQyxLQUFLLEVBQUMsNEJBQTRCO1VBQUNDLE9BQU8sRUFBQztRQUFhLGdCQUFDclUsS0FBQSxDQUFBUSxhQUFBO1VBQU04VCxJQUFJLEVBQUMsY0FBYztVQUFDQyxDQUFDLEVBQUM7UUFBd00sQ0FBTyxDQUFNLENBQUM7TUFDamUsS0FBSyxNQUFNO1FBQ1Ysb0JBQU92VSxLQUFBLENBQUFRLGFBQUE7VUFBS3FNLE9BQU8sRUFBRSxTQUFUQSxPQUFPQSxDQUFBO1lBQUEsT0FBTXZLLEtBQUksQ0FBQ3FXLFdBQVcsQ0FBQyxLQUFLLENBQUM7VUFBQSxDQUFDO1VBQUMsZUFBWSxNQUFNO1VBQUN6RSxTQUFTLEVBQUMsT0FBTztVQUFDLGVBQVksS0FBSztVQUFDLGFBQVUsV0FBVztVQUFDdlQsU0FBUyxFQUFDLGlEQUFpRDtVQUFDd1QsSUFBSSxFQUFDLEtBQUs7VUFBQ0MsS0FBSyxFQUFDLDRCQUE0QjtVQUFDQyxPQUFPLEVBQUM7UUFBYSxnQkFBQ3JVLEtBQUEsQ0FBQVEsYUFBQTtVQUFNOFQsSUFBSSxFQUFDLGNBQWM7VUFBQ0MsQ0FBQyxFQUFDO1FBQTZtQixDQUFPLENBQU0sQ0FBQztNQUN2NUIsS0FBSyxLQUFLO1FBQ1Qsb0JBQU92VSxLQUFBLENBQUFRLGFBQUE7VUFBS3FNLE9BQU8sRUFBRSxTQUFUQSxPQUFPQSxDQUFBO1lBQUEsT0FBTXZLLEtBQUksQ0FBQ3FXLFdBQVcsQ0FBQyxNQUFNLENBQUM7VUFBQSxDQUFDO1VBQUMsZUFBWSxNQUFNO1VBQUN6RSxTQUFTLEVBQUMsT0FBTztVQUFDLGVBQVksS0FBSztVQUFDLGFBQVUsU0FBUztVQUFDdlQsU0FBUyxFQUFDLCtDQUErQztVQUFDd1QsSUFBSSxFQUFDLEtBQUs7VUFBQ0MsS0FBSyxFQUFDLDRCQUE0QjtVQUFDQyxPQUFPLEVBQUM7UUFBYSxnQkFBQ3JVLEtBQUEsQ0FBQVEsYUFBQTtVQUFNOFQsSUFBSSxFQUFDLGNBQWM7VUFBQ0MsQ0FBQyxFQUFDO1FBQTBtQixDQUFPLENBQU0sQ0FBQztJQUNsNUI7RUFDRCxDQUFDO0VBQ0RvRSxXQUFXLEVBQUUsU0FBYkEsV0FBV0EsQ0FBWTFULElBQUksRUFBQztJQUMzQixJQUFJLENBQUMxRCxRQUFRLENBQUM7TUFDYjBELElBQUksRUFBRUE7SUFDUCxDQUFDLENBQUM7SUFDRixJQUFJLENBQUN2RSxLQUFLLENBQUNrSixNQUFNLElBQUksSUFBSSxDQUFDbEosS0FBSyxDQUFDa0osTUFBTSxDQUFDM0UsSUFBSSxDQUFDO0VBQzdDLENBQUM7RUFDRDFFLE1BQU0sRUFBQyxTQUFQQSxNQUFNQSxDQUFBLEVBQVc7SUFDaEIsb0JBQ0NQLEtBQUEsQ0FBQVEsYUFBQTtNQUFLRyxTQUFTLEVBQUVWLElBQUksQ0FBQ21ELEtBQUssQ0FBQ0MsU0FBUyxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQzNDLEtBQUssQ0FBQ0MsU0FBUyxDQUFFO01BQUNGLEtBQUssRUFBRSxJQUFJLENBQUNDLEtBQUssQ0FBQ0Q7SUFBTSxHQUN6RyxJQUFJLENBQUNpWSxZQUFZLENBQUMsQ0FDZixDQUFDO0VBRVI7QUFDRCxDQUFDLENBQUMsQzs7Ozs7Ozs7Ozs7O0FDaENGLElBQUkxWSxLQUFLLEdBQUdDLElBQUksQ0FBQ0QsS0FBSyxJQUFJRSxtQkFBTyxDQUFDLG9CQUFPLENBQUM7QUFDMUMsSUFBSXFWLFFBQVEsR0FBR3RWLElBQUksQ0FBQ3NWLFFBQVEsSUFBSXJWLG1CQUFPLENBQUMsNEJBQVcsQ0FBQztBQUNwRCxJQUFJMFksS0FBSyxHQUFHMVksbUJBQU8sQ0FBQyxpQ0FBUyxDQUFDO0FBRTlCQyxNQUFNLENBQUNDLE9BQU8sR0FBR0osS0FBSyxDQUFDSyxXQUFXLENBQUM7RUFDbENDLFdBQVcsRUFBQyxRQUFRO0VBQ3BCVyxlQUFlLEVBQUUsU0FBakJBLGVBQWVBLENBQUEsRUFBWTtJQUMxQixPQUFPO01BQ05SLEtBQUssRUFBRSxDQUFDLENBQUM7TUFDVEUsU0FBUyxFQUFFO0lBQ1osQ0FBQztFQUNGLENBQUM7RUFDRGtZLGFBQWEsRUFBRSxTQUFmQSxhQUFhQSxDQUFZL1AsTUFBTSxFQUFFO0lBQ2hDLElBQUdBLE1BQU0sSUFBSUEsTUFBTSxDQUFDZ1EsT0FBTyxLQUFHLElBQUksRUFBQztNQUNsQyxPQUFPLElBQUksQ0FBQ0QsYUFBYSxDQUFDL1AsTUFBTSxDQUFDaVEsVUFBVSxDQUFDO0lBQzdDLENBQUMsTUFBTTtNQUNOLE9BQU9qUSxNQUFNO0lBQ2Q7RUFDRCxDQUFDO0VBQ0RwSCxZQUFZLEVBQUUsU0FBZEEsWUFBWUEsQ0FBWUMsS0FBSyxFQUFDO0lBQzdCLElBQUlXLEtBQUssR0FBRyxJQUFJO0lBQ2hCLElBQUkwVyxHQUFHLEdBQUcsSUFBSSxDQUFDSCxhQUFhLENBQUNsWCxLQUFLLENBQUNtSCxNQUFNLENBQUM7SUFDMUNuSCxLQUFLLENBQUNHLElBQUksR0FBRztNQUNabVgsU0FBUyxFQUFFLFNBQVhBLFNBQVNBLENBQUEsRUFBYTtRQUNyQixPQUFPMUQsUUFBUSxDQUFDTSxXQUFXLENBQUN2VCxLQUFLLENBQUM7TUFDbkMsQ0FBQztNQUNENFcsRUFBRSxFQUFFRixHQUFHO01BQ1BqWCxJQUFJLEVBQUU7SUFDUCxDQUFDO0lBQ0QsSUFBSSxDQUFDckIsS0FBSyxDQUFDbU0sT0FBTyxJQUFJLElBQUksQ0FBQ25NLEtBQUssQ0FBQ21NLE9BQU8sQ0FBQ2xMLEtBQUssQ0FBQztJQUMvQyxJQUFJLENBQUNqQixLQUFLLENBQUNzQyxVQUFVLElBQUksSUFBSSxDQUFDdEMsS0FBSyxDQUFDc0MsVUFBVSxDQUFDckIsS0FBSyxDQUFDO0VBQ3RELENBQUM7RUFDRDBRLGdCQUFnQixFQUFFLFNBQWxCQSxnQkFBZ0JBLENBQVl6RSxNQUFNLEVBQUVsSSxLQUFLLEVBQUM7SUFDekMsSUFBR2tJLE1BQU0sQ0FBQzBFLFFBQVEsS0FBSyxLQUFLLEVBQUU7TUFDN0IsT0FBTyxLQUFLO0lBQ2I7SUFDQSxJQUFHek4sRUFBRSxDQUFDaUMsRUFBRSxDQUFDOEcsTUFBTSxDQUFDMEUsUUFBUSxFQUFFLFVBQVUsQ0FBQyxFQUFFO01BQ3RDLElBQUkzTixPQUFPLEdBQUdpSixNQUFNLENBQUMwRSxRQUFRLENBQUNDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQzNFLE1BQU0sRUFBRWxJLEtBQUssQ0FBQyxDQUFDO01BQzFELElBQUdmLE9BQU8sS0FBSyxLQUFLLEVBQUU7UUFDckIsT0FBTyxLQUFLO01BQ2I7SUFDRDtFQUNELENBQUM7RUFDRHdVLFlBQVksRUFBRSxTQUFkQSxZQUFZQSxDQUFZdkwsTUFBTSxFQUFFbEksS0FBSyxFQUFDO0lBQ3JDLElBQUcsSUFBSSxDQUFDMk0sZ0JBQWdCLENBQUN6RSxNQUFNLEVBQUVsSSxLQUFLLENBQUMsS0FBSyxLQUFLLEVBQUM7TUFDakQsT0FBTyxJQUFJO0lBQ1o7SUFDQSxJQUFHLENBQUNiLEVBQUUsQ0FBQ2lDLEVBQUUsQ0FBQzhHLE1BQU0sRUFBRSxRQUFRLENBQUMsRUFBRTtNQUFFLE9BQU8sSUFBSTtJQUFDO0lBQzNDLElBQUl3TCxNQUFNLEdBQUd2VSxFQUFFLENBQUNrSSxNQUFNLENBQUM7TUFDdEJhLE1BQU0sRUFBRUEsTUFBTTtNQUNkN0wsSUFBSSxFQUFFLElBQUk7TUFDVnNMLFFBQVEsRUFBRSxJQUFJLENBQUMzTSxLQUFLLENBQUMyTSxRQUFRO01BQzdCcUksU0FBUyxFQUFFaFEsS0FBSztNQUNoQlUsT0FBTyxFQUFFLElBQUksQ0FBQzFGLEtBQUssQ0FBQzBGLE9BQU87TUFDM0J0RSxJQUFJLEVBQUUsSUFBSSxDQUFDcEIsS0FBSyxDQUFDb0IsSUFBSTtNQUNyQmlCLEtBQUssRUFBRSxJQUFJLENBQUNyQyxLQUFLLENBQUNxQztJQUNuQixDQUFDLEVBQUUsSUFBSSxDQUFDckMsS0FBSyxDQUFDd1IsSUFBSSxFQUFFdEUsTUFBTSxDQUFDO0lBQzNCLElBQUl5QyxRQUFRLEdBQUdwUSxJQUFJLENBQUNtRCxLQUFLLENBQUN5TixrQkFBa0IsQ0FBQyxJQUFJLENBQUNuUSxLQUFLLENBQUNzVSxVQUFVLEVBQUVvRSxNQUFNLEVBQUUsSUFBSSxDQUFDMVksS0FBSyxDQUFDMEYsT0FBTyxDQUFDO0lBRS9GLElBQUdpSyxRQUFRLEVBQUM7TUFDWCxPQUFPQSxRQUFRO0lBQ2hCO0lBRUEsb0JBQU9yUSxLQUFBLENBQUFRLGFBQUEsQ0FBQ29ZLEtBQUssRUFBQXJXLFFBQUE7TUFBQytCLEdBQUcsRUFBRW9CO0lBQU0sR0FBSzBULE1BQU07TUFBRUMsVUFBVSxFQUFFLElBQUksQ0FBQ0MsWUFBWSxDQUFDNVQsS0FBSyxDQUFFO01BQUNpUCxXQUFXLEVBQUUsSUFBSSxDQUFDalUsS0FBSyxDQUFDaVUsV0FBWTtNQUFDaFUsU0FBUyxFQUFFVixJQUFJLENBQUNtRCxLQUFLLENBQUNDLFNBQVMsQ0FBQyxXQUFXLEVBQUUrVixNQUFNLENBQUN6WSxTQUFTO0lBQUUsRUFBRSxDQUFDO0VBQ3BMLENBQUM7RUFDRDJZLFlBQVksRUFBRSxTQUFkQSxZQUFZQSxDQUFZNVQsS0FBSyxFQUFDO0lBQzdCLElBQUlrQyxRQUFRLEdBQUcsSUFBSSxDQUFDbEgsS0FBSyxDQUFDcUQsT0FBTyxJQUFFLEVBQUU7TUFBRThELE1BQU0sR0FBRyxDQUFDO0lBQ2pELEtBQUksSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHcEMsS0FBSyxFQUFFb0MsQ0FBQyxFQUFFLEVBQUM7TUFDN0IsSUFBR0YsUUFBUSxDQUFDRSxDQUFDLENBQUMsQ0FBQ25GLEtBQUssRUFBRTtRQUNyQmtGLE1BQU0sSUFBSUQsUUFBUSxDQUFDRSxDQUFDLENBQUMsQ0FBQ0MsS0FBSyxJQUFJLENBQUM7TUFDakM7SUFDRDtJQUVBLE9BQU87TUFDTkMsSUFBSSxFQUFFSDtJQUNQLENBQUM7RUFDRixDQUFDO0VBQ0R0SCxNQUFNLEVBQUMsU0FBUEEsTUFBTUEsQ0FBQSxFQUFXO0lBQ2hCLElBQUksQ0FBQ0csS0FBSyxDQUFDcUMsS0FBSyxDQUFDb1EsaUJBQWlCLENBQUMsSUFBSSxDQUFDelMsS0FBSyxDQUFDb0IsSUFBSSxDQUFDO0lBQ25ELElBQUksQ0FBQ3BCLEtBQUssQ0FBQzZZLGNBQWMsSUFBSSxJQUFJLENBQUM3WSxLQUFLLENBQUM2WSxjQUFjLENBQUMsSUFBSSxDQUFDN1ksS0FBSyxDQUFDb0IsSUFBSSxFQUFFLElBQUksQ0FBQztJQUM3RSxJQUFJMFgsYUFBYSxHQUFHLENBQUMsSUFBSSxDQUFDOVksS0FBSyxDQUFDcUQsT0FBTyxJQUFFLEVBQUUsRUFBRW1DLE1BQU07SUFDbkQsSUFBSXVULFVBQVUsR0FBRyxJQUFJLENBQUMvWSxLQUFLLENBQUNDLFNBQVM7TUFBRXlJLE1BQU0sR0FBRyxJQUFJLENBQUMxSSxLQUFLLENBQUNELEtBQUs7SUFDaEUsSUFBRyxPQUFPZ1osVUFBVSxJQUFJLFVBQVUsRUFBQztNQUNsQ0EsVUFBVSxHQUFHQSxVQUFVLENBQUMsSUFBSSxDQUFDL1ksS0FBSyxDQUFDb0IsSUFBSSxFQUFFLElBQUksQ0FBQztJQUMvQztJQUNBLElBQUcsT0FBT3NILE1BQU0sSUFBSSxVQUFVLEVBQUM7TUFDOUJBLE1BQU0sR0FBR0EsTUFBTSxDQUFDLElBQUksQ0FBQzFJLEtBQUssQ0FBQ29CLElBQUksRUFBRSxJQUFJLENBQUM7SUFDdkM7SUFDQSxvQkFDQzlCLEtBQUEsQ0FBQVEsYUFBQSxDQUFBUixLQUFBLENBQUFzVixRQUFBLHFCQUNDdFYsS0FBQSxDQUFBUSxhQUFBO01BQUlHLFNBQVMsRUFBRVYsSUFBSSxDQUFDbUQsS0FBSyxDQUFDQyxTQUFTLENBQUMsZUFBZSxFQUFFb1csVUFBVSxFQUFFLElBQUksQ0FBQ3BZLEtBQUssQ0FBQ1YsU0FBUyxDQUFFO01BQ3RGRixLQUFLLEVBQUVSLElBQUksQ0FBQ21ELEtBQUssQ0FBQzNDLEtBQUssQ0FBQzJJLE1BQU0sRUFBRSxJQUFJLENBQUMvSCxLQUFLLENBQUNaLEtBQUssQ0FBRTtNQUNsRCxlQUFhLElBQUksQ0FBQ0MsS0FBSyxDQUFDdVMsTUFBTztNQUMvQixnQkFBYyxJQUFJLENBQUN2UyxLQUFLLENBQUMrSyxPQUFRO01BQ2pDb0IsT0FBTyxFQUFFLElBQUksQ0FBQ25MO0lBQWEsR0FFMUIsQ0FBQyxJQUFJLENBQUNoQixLQUFLLENBQUNxRCxPQUFPLElBQUUsRUFBRSxFQUFFa0YsR0FBRyxDQUFDLElBQUksQ0FBQ2tRLFlBQVksQ0FFNUMsQ0FBQyxFQUVKLElBQUksQ0FBQzlYLEtBQUssQ0FBQ2dXLEtBQUssaUJBQUlyWCxLQUFBLENBQUFRLGFBQUE7TUFBSUcsU0FBUyxFQUFFVixJQUFJLENBQUNtRCxLQUFLLENBQUNDLFNBQVMsQ0FBQyxxQkFBcUI7SUFBRSxnQkFBQ3JELEtBQUEsQ0FBQVEsYUFBQTtNQUFJdVEsT0FBTyxFQUFFeUk7SUFBYyxHQUFFLElBQUksQ0FBQ25ZLEtBQUssQ0FBQ2dXLEtBQVUsQ0FBSyxDQUV2SSxDQUFDO0VBRUw7QUFDRCxDQUFDLENBQUMsQzs7Ozs7Ozs7Ozs7Ozs7O0FDekdGLElBQUlyWCxLQUFLLEdBQUdDLElBQUksQ0FBQ0QsS0FBSyxJQUFJRSxtQkFBTyxDQUFDLG9CQUFPLENBQUM7QUFDMUMsSUFBSTJDLE1BQU0sR0FBRzNDLG1CQUFPLENBQUMsNENBQW1CLENBQUM7QUFFekNDLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHSixLQUFLLENBQUNLLFdBQVcsQ0FBQztFQUNsQ0MsV0FBVyxFQUFFLFlBQVk7RUFDekJXLGVBQWUsRUFBQyxTQUFoQkEsZUFBZUEsQ0FBQSxFQUFXO0lBQ3pCLE9BQU87TUFDTnlZLFVBQVUsRUFBRSxFQUFFO01BQ2QvWSxTQUFTLEVBQUUsRUFBRTtNQUNiRixLQUFLLEVBQUUsQ0FBQyxDQUFDO01BQ1RxQixJQUFJLEVBQUUsQ0FBQyxDQUFDO01BQ1J3USxRQUFRLEVBQUUsS0FBSztNQUNmcUgsZUFBZSxFQUFFO0lBQ2xCLENBQUM7RUFDRixDQUFDO0VBQ0R4VSxnQkFBZ0IsRUFBRSxTQUFsQkEsZ0JBQWdCQSxDQUFZeEQsS0FBSyxFQUFFaU4sS0FBSyxFQUFDO0lBQ3hDLElBQUdqTixLQUFLLENBQUN3TCxJQUFJLElBQUl4TCxLQUFLLENBQUN1VSxHQUFHLEVBQUU7TUFDM0IsSUFBR3ZVLEtBQUssQ0FBQ1IsS0FBSyxLQUFLLElBQUksSUFBSVEsS0FBSyxDQUFDUixLQUFLLEtBQUs2UixTQUFTLElBQUlyUixLQUFLLENBQUNSLEtBQUssS0FBSyxFQUFFLEVBQUU7UUFDM0UsSUFBSSxDQUFDRSxLQUFLLENBQUNTLElBQUksQ0FBQ0gsS0FBSyxDQUFDd0wsSUFBSSxDQUFDLEdBQUcsSUFBSTtRQUNsQyxPQUFPLElBQUksQ0FBQzlMLEtBQUssQ0FBQ1MsSUFBSSxDQUFDSCxLQUFLLENBQUN3TCxJQUFJLENBQUM7TUFDbkMsQ0FBQyxNQUFLLElBQUcsQ0FBQ3hMLEtBQUssQ0FBQ1IsS0FBSyxJQUFJeU4sS0FBSyxJQUFJQSxLQUFLLENBQUNsTyxLQUFLLElBQUksQ0FBQ2tPLEtBQUssQ0FBQ2xPLEtBQUssQ0FBQ3lWLGlCQUFpQixFQUFDO1FBQy9FLElBQUksQ0FBQzlVLEtBQUssQ0FBQ1MsSUFBSSxDQUFDSCxLQUFLLENBQUN3TCxJQUFJLENBQUMsR0FBRyxJQUFJO1FBQ2xDLE9BQU8sSUFBSSxDQUFDOUwsS0FBSyxDQUFDUyxJQUFJLENBQUNILEtBQUssQ0FBQ3dMLElBQUksQ0FBQztNQUNuQyxDQUFDLE1BQUk7UUFDSixJQUFJLENBQUM5TCxLQUFLLENBQUNTLElBQUksQ0FBQ0gsS0FBSyxDQUFDd0wsSUFBSSxDQUFDLEdBQUd4TCxLQUFLLENBQUNSLEtBQUs7TUFDMUM7SUFDRDtJQUVBLElBQUksQ0FBQ1QsS0FBSyxDQUFDa1osZ0JBQWdCLElBQUksSUFBSSxDQUFDbFosS0FBSyxDQUFDa1osZ0JBQWdCLENBQUNqWSxLQUFLLEVBQUU7TUFDakV3TCxJQUFJLEVBQUV4TCxLQUFLLENBQUN3TCxJQUFJO01BQ2hCK0ksR0FBRyxFQUFFdlUsS0FBSyxDQUFDdVUsR0FBRztNQUNkdEgsS0FBSyxFQUFFQSxLQUFLO01BQ1o5TSxJQUFJLEVBQUUsSUFBSSxDQUFDVCxLQUFLLENBQUNTO0lBQ2xCLENBQUMsQ0FBQztJQUVGLElBQUksQ0FBQytYLGNBQWMsQ0FBQyxDQUFDO0VBQ3RCLENBQUM7RUFDREEsY0FBYyxFQUFFLFNBQWhCQSxjQUFjQSxDQUFBLEVBQWE7SUFDMUIsSUFBSUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDelksS0FBSyxDQUFDc1ksZUFBZTtJQUNqRCxJQUFJOVgsS0FBSyxHQUFHLElBQUksQ0FBQ1IsS0FBSyxDQUFDUyxJQUFJO0lBQzNCLElBQUlpWSxTQUFTLEdBQUcsSUFBSTtJQUFDLElBQUFqUCxTQUFBLEdBQUFDLDBCQUFBLENBQ0wrTyxnQkFBZ0I7TUFBQTlPLEtBQUE7SUFBQTtNQUFoQyxLQUFBRixTQUFBLENBQUFHLENBQUEsTUFBQUQsS0FBQSxHQUFBRixTQUFBLENBQUFJLENBQUEsSUFBQUMsSUFBQSxHQUFrQztRQUFBLElBQTFCZ0MsSUFBSSxHQUFBbkMsS0FBQSxDQUFBN0osS0FBQTtRQUNYLElBQUcsQ0FBQ1UsS0FBSyxDQUFDc0wsSUFBSSxDQUFDLEVBQUU7VUFDaEI0TSxTQUFTLEdBQUcsS0FBSztVQUNqQjtRQUNEO01BQ0Q7SUFBQyxTQUFBMU8sR0FBQTtNQUFBUCxTQUFBLENBQUFuQyxDQUFBLENBQUEwQyxHQUFBO0lBQUE7TUFBQVAsU0FBQSxDQUFBUSxDQUFBO0lBQUE7SUFFRCxJQUFJLENBQUMvSixRQUFRLENBQUM7TUFBQytRLFFBQVEsRUFBRXlIO0lBQVMsQ0FBQyxDQUFDO0VBQ3JDLENBQUM7RUFDRDNELGdCQUFnQixFQUFFLFNBQWxCQSxnQkFBZ0JBLENBQVlqSixJQUFJLEVBQUM7SUFDaEMsSUFBR0EsSUFBSSxJQUFJLElBQUksQ0FBQzlMLEtBQUssQ0FBQ1MsSUFBSSxFQUFDO01BQzFCLElBQUksQ0FBQ1QsS0FBSyxDQUFDUyxJQUFJLENBQUNxTCxJQUFJLENBQUMsR0FBRyxJQUFJO01BQzVCLE9BQU8sSUFBSSxDQUFDOUwsS0FBSyxDQUFDUyxJQUFJLENBQUNxTCxJQUFJLENBQUM7TUFDNUIsSUFBSSxDQUFDME0sY0FBYyxDQUFDLENBQUM7SUFDdEI7RUFDRCxDQUFDO0VBQ0R4SCxnQkFBZ0IsRUFBRSxTQUFsQkEsZ0JBQWdCQSxDQUFZekUsTUFBTSxFQUFFbEksS0FBSyxFQUFDO0lBQ3pDLElBQUdrSSxNQUFNLENBQUMwRSxRQUFRLEtBQUssS0FBSyxFQUFFO01BQzdCLE9BQU8sS0FBSztJQUNiO0lBQ0EsSUFBR3pOLEVBQUUsQ0FBQ2lDLEVBQUUsQ0FBQzhHLE1BQU0sQ0FBQzBFLFFBQVEsRUFBRSxVQUFVLENBQUMsRUFBRTtNQUN0QyxJQUFJM04sT0FBTyxHQUFHaUosTUFBTSxDQUFDMEUsUUFBUSxDQUFDQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMzRSxNQUFNLEVBQUVsSSxLQUFLLENBQUMsQ0FBQztNQUMxRCxJQUFHZixPQUFPLEtBQUssS0FBSyxFQUFFO1FBQ3JCLE9BQU8sS0FBSztNQUNiO0lBQ0Q7RUFDRCxDQUFDO0VBQ0RxVixRQUFRLEVBQUUsU0FBVkEsUUFBUUEsQ0FBQSxFQUFhO0lBQUEsSUFBQTFYLEtBQUE7SUFDcEIsSUFBRyxJQUFJLENBQUNqQixLQUFLLENBQUNpUixRQUFRLEVBQUU7TUFDdkIsSUFBSSxDQUFDNVIsS0FBSyxDQUFDd0osV0FBVyxJQUFJLElBQUksQ0FBQ3hKLEtBQUssQ0FBQ3dKLFdBQVcsQ0FBQyxJQUFJLENBQUM3SSxLQUFLLENBQUNTLElBQUksQ0FBQztNQUNqRSxJQUFHLElBQUksQ0FBQ3BCLEtBQUssQ0FBQ3VaLFNBQVMsRUFBRTtRQUN4QixJQUFJLENBQUN2WixLQUFLLENBQUN1WixTQUFTLENBQUNuWSxJQUFJLENBQUNBLElBQUksR0FBRyxJQUFJLENBQUNULEtBQUssQ0FBQ1MsSUFBSTtRQUNoRCtDLEVBQUUsQ0FBQy9DLElBQUksQ0FBQ29ZLE1BQU0sQ0FBQyxJQUFJLENBQUN4WixLQUFLLENBQUN1WixTQUFTLEVBQUU7VUFDcENFLE1BQU0sRUFBRSxTQUFSQSxNQUFNQSxDQUFHNVMsTUFBTSxFQUFFekYsSUFBSSxFQUFHO1lBQ3ZCUSxLQUFJLENBQUNmLFFBQVEsQ0FBQztjQUNibUYsT0FBTyxFQUFFO1lBQ1YsQ0FBQyxDQUFDO1VBQ0gsQ0FBQztVQUNEWSxLQUFLLEVBQUUsU0FBUEEsS0FBS0EsQ0FBR0MsTUFBTSxFQUFFekYsSUFBSSxFQUFFMEYsUUFBUSxFQUFFQyxHQUFHLEVBQUc7WUFDckMsSUFBRzNGLElBQUksQ0FBQ3lQLElBQUksSUFBSSxHQUFHLEVBQUM7Y0FDbkJqUCxLQUFJLENBQUM1QixLQUFLLENBQUM2QyxLQUFLLENBQUN5QixPQUFPLENBQUMsQ0FBQztjQUMxQjFDLEtBQUksQ0FBQ2pCLEtBQUssQ0FBQ1MsSUFBSSxHQUFHLENBQUMsQ0FBQztjQUNwQlEsS0FBSSxDQUFDakIsS0FBSyxDQUFDcVksVUFBVSxHQUFHN1UsRUFBRSxDQUFDMkgsSUFBSSxDQUFDLENBQUM7Y0FDakNsSyxLQUFJLENBQUNnUSxRQUFRLENBQUMsQ0FBQztjQUNmaFEsS0FBSSxDQUFDNUIsS0FBSyxDQUFDMFosZUFBZSxJQUFJOVgsS0FBSSxDQUFDNUIsS0FBSyxDQUFDMFosZUFBZSxDQUFDdFksSUFBSSxFQUFFMEYsUUFBUSxFQUFFQyxHQUFHLENBQUM7WUFDOUUsQ0FBQyxNQUFJO2NBQ0puRixLQUFJLENBQUM1QixLQUFLLENBQUMyWixhQUFhLElBQUkvWCxLQUFJLENBQUM1QixLQUFLLENBQUMyWixhQUFhLENBQUN2WSxJQUFJLEVBQUUwRixRQUFRLEVBQUVDLEdBQUcsQ0FBQztZQUMxRTtZQUNBbkYsS0FBSSxDQUFDZixRQUFRLENBQUM7Y0FDYm1GLE9BQU8sRUFBRTtZQUNWLENBQUMsQ0FBQztVQUNILENBQUM7VUFDRCtLLEtBQUssRUFBRSxTQUFQQSxLQUFLQSxDQUFHbEssTUFBTSxFQUFFRSxHQUFHLEVBQUc7WUFDckJuRixLQUFJLENBQUNmLFFBQVEsQ0FBQztjQUNibUYsT0FBTyxFQUFFO1lBQ1YsQ0FBQyxDQUFDO1VBQ0g7UUFDRCxDQUFDLENBQUM7TUFDSDtJQUNEO0VBQ0QsQ0FBQztFQUNEMlAsWUFBWSxFQUFFLFNBQWRBLFlBQVlBLENBQVl6SSxNQUFNLEVBQUVsSSxLQUFLLEVBQUM7SUFDckMsSUFBR2tJLE1BQU0sQ0FBQ1QsSUFBSSxJQUFJLFdBQVcsRUFBRztNQUMvQixJQUFJaEYsT0FBTyxHQUFHLElBQUksQ0FBQ3pILEtBQUssQ0FBQzRaLFFBQVEsSUFBSSxJQUFJLENBQUM1WixLQUFLLENBQUM0WixRQUFRLENBQUMxTSxNQUFNLEVBQUVsSSxLQUFLLENBQUM7TUFDdkUsSUFBR3lDLE9BQU8sS0FBSyxLQUFLLEVBQUU7UUFDckIsb0JBQ0NuSSxLQUFBLENBQUFRLGFBQUE7VUFBSThELEdBQUcsRUFBRW9CLEtBQU07VUFBQy9FLFNBQVMsRUFBRVYsSUFBSSxDQUFDbUQsS0FBSyxDQUFDQyxTQUFTLENBQUMsY0FBYyxFQUFHdUssTUFBTSxDQUFDakwsS0FBSyxHQUFDLE9BQU8sR0FBQyxFQUFHLENBQUU7VUFBQ2xDLEtBQUssRUFBRVIsSUFBSSxDQUFDbUQsS0FBSyxDQUFDM0MsS0FBSyxDQUFDbU4sTUFBTSxDQUFDekUsV0FBVztRQUFFLENBQ3BJLENBQUM7TUFFUDtNQUNBLG9CQUNDbkosS0FBQSxDQUFBUSxhQUFBO1FBQUk4RCxHQUFHLEVBQUVvQixLQUFNO1FBQUMvRSxTQUFTLEVBQUVWLElBQUksQ0FBQ21ELEtBQUssQ0FBQ0MsU0FBUyxDQUFDLGNBQWMsRUFBR3VLLE1BQU0sQ0FBQ2pMLEtBQUssR0FBQyxPQUFPLEdBQUMsRUFBRyxDQUFFO1FBQUNsQyxLQUFLLEVBQUVSLElBQUksQ0FBQ21ELEtBQUssQ0FBQzNDLEtBQUssQ0FBQ21OLE1BQU0sQ0FBQ3pFLFdBQVc7TUFBRSxHQUV0SSxJQUFJLENBQUM5SCxLQUFLLENBQUNxRixPQUFPLGdCQUNqQjFHLEtBQUEsQ0FBQVEsYUFBQTtRQUFLRyxTQUFTLEVBQUU7TUFBb0IsZ0JBQ25DWCxLQUFBLENBQUFRLGFBQUE7UUFBR0csU0FBUyxFQUFDO01BQXVCLENBQUUsQ0FDbEMsQ0FBQyxnQkFFTlgsS0FBQSxDQUFBUSxhQUFBO1FBQUtHLFNBQVMsRUFBRSxXQUFXLElBQUksSUFBSSxDQUFDVSxLQUFLLENBQUNpUixRQUFRLEdBQUcsRUFBRSxHQUFDLFVBQVUsQ0FBRTtRQUFDekYsT0FBTyxFQUFFLElBQUksQ0FBQ21OO01BQVMsZ0JBQzNGaGEsS0FBQSxDQUFBUSxhQUFBO1FBQUcsb0JBQVk7UUFBQ0csU0FBUyxFQUFDO01BQVksQ0FBRSxDQUNwQyxDQUdKLENBQUM7SUFFUDtJQUVBLElBQUdpTixNQUFNLENBQUMyTSxRQUFRLEtBQUssS0FBSyxFQUFFO01BQzdCLG9CQUNDdmEsS0FBQSxDQUFBUSxhQUFBO1FBQUk4RCxHQUFHLEVBQUVvQixLQUFNO1FBQUMvRSxTQUFTLEVBQUVWLElBQUksQ0FBQ21ELEtBQUssQ0FBQ0MsU0FBUyxDQUFDLGNBQWMsRUFBR3VLLE1BQU0sQ0FBQ2pMLEtBQUssR0FBQyxPQUFPLEdBQUMsRUFBRyxDQUFFO1FBQUNsQyxLQUFLLEVBQUVSLElBQUksQ0FBQ21ELEtBQUssQ0FBQzNDLEtBQUssQ0FBQ21OLE1BQU0sQ0FBQ3pFLFdBQVc7TUFBRSxDQUNwSSxDQUFDO0lBRVAsQ0FBQyxNQUFJLENBRUw7SUFFQSxJQUFHLElBQUksQ0FBQ2tKLGdCQUFnQixDQUFDekUsTUFBTSxFQUFFbEksS0FBSyxDQUFDLEtBQUssS0FBSyxFQUFDO01BQ2pELE9BQU8sSUFBSTtJQUNaO0lBQ0EsSUFBRyxDQUFDYixFQUFFLENBQUNpQyxFQUFFLENBQUM4RyxNQUFNLEVBQUUsUUFBUSxDQUFDLEVBQUU7TUFBRSxPQUFPLElBQUk7SUFBRTtJQUM1QyxJQUFJeUMsUUFBUSxHQUFHcFEsSUFBSSxDQUFDbUQsS0FBSyxDQUFDeU4sa0JBQWtCLENBQUMsSUFBSSxDQUFDblEsS0FBSyxDQUFDc1UsVUFBVSxFQUFFO01BQ25FcEgsTUFBTSxFQUFFQSxNQUFNO01BQ2Q4SCxTQUFTLEVBQUVoUSxLQUFLO01BQ2hCc0UsU0FBUyxFQUFFO0lBQ1osQ0FBQyxDQUFDO0lBQ0YsSUFBR3FHLFFBQVEsRUFBQztNQUNYLE9BQU9BLFFBQVE7SUFDaEI7SUFFQSxJQUFJaUcsUUFBUSxHQUFHclcsSUFBSSxDQUFDbUQsS0FBSyxDQUFDeU4sa0JBQWtCLENBQUNqRCxNQUFNLENBQUNyTixNQUFNLEVBQUU7TUFDM0RxTixNQUFNLEVBQUVBLE1BQU07TUFDZDhILFNBQVMsRUFBRWhRLEtBQUs7TUFDaEJzRSxTQUFTLEVBQUU7SUFDWixDQUFDLENBQUM7SUFFRixJQUFJd1EsU0FBUyxHQUFHM1YsRUFBRSxDQUFDa0ksTUFBTSxDQUFDYSxNQUFNLENBQUMyTSxRQUFRLEVBQUUzTSxNQUFNLENBQUMvSyxNQUFNLENBQUM7SUFDekQsSUFBRzJYLFNBQVMsQ0FBQ25DLFFBQVEsSUFBSSxJQUFJLENBQUNoWCxLQUFLLENBQUNzWSxlQUFlLENBQUM3VCxPQUFPLENBQUM4SCxNQUFNLENBQUNULElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO01BQy9FLElBQUksQ0FBQzlMLEtBQUssQ0FBQ3NZLGVBQWUsQ0FBQzVULElBQUksQ0FBQzZILE1BQU0sQ0FBQ1QsSUFBSSxDQUFDO0lBQzdDO0lBQ0EsSUFBRyxDQUFDbUosUUFBUSxJQUFJa0UsU0FBUyxFQUFFO01BQzFCLElBQUczVixFQUFFLENBQUNpQyxFQUFFLENBQUMwVCxTQUFTLEVBQUUsVUFBVSxDQUFDLEVBQUU7UUFDaEMsSUFBR0EsU0FBUyxDQUFDaEUsU0FBUyxJQUFJZ0UsU0FBUyxDQUFDaEUsU0FBUyxDQUFDalcsTUFBTSxFQUFFO1VBQ3JEK1YsUUFBUSxHQUFHclcsSUFBSSxDQUFDbUQsS0FBSyxDQUFDeU4sa0JBQWtCLENBQUMySixTQUFTLEVBQUU7WUFDbkQ1TSxNQUFNLEVBQUVBLE1BQU07WUFDZDVELFNBQVMsRUFBRTtVQUNaLENBQUMsQ0FBQztRQUNTLENBQUMsTUFBSTtVQUNEd1EsU0FBUyxHQUFHQSxTQUFTLENBQUMvRCxJQUFJLENBQUMsSUFBSSxFQUFFN0ksTUFBTSxFQUFFLElBQUksQ0FBQztRQUNsRDtNQUNiO01BRUEsSUFBRy9JLEVBQUUsQ0FBQ2lDLEVBQUUsQ0FBQzBULFNBQVMsRUFBRSxRQUFRLENBQUMsRUFBRTtRQUM5QixJQUFJekYsSUFBSSxHQUFHeUYsU0FBUyxDQUFDbFcsR0FBRyxJQUFJc0osTUFBTSxDQUFDVCxJQUFJO1FBQ3ZDLElBQUd0SSxFQUFFLENBQUNpQyxFQUFFLENBQUNpTyxJQUFJLEVBQUUsVUFBVSxDQUFDLEVBQUU7VUFDM0JBLElBQUksR0FBR0EsSUFBSSxDQUFDMEIsSUFBSSxDQUFDLElBQUksRUFBRTdJLE1BQU0sRUFBRSxJQUFJLENBQUM7UUFDckM7UUFFQTBJLFFBQVEsZ0JBQUd0VyxLQUFBLENBQUFRLGFBQUEsQ0FBQ3FDLE1BQU0sQ0FBQzZULFdBQVcsRUFBQW5VLFFBQUE7VUFBQzhWLFFBQVEsRUFBRW1DLFNBQVMsQ0FBQ25DLFFBQVM7VUFBQy9ULEdBQUcsRUFBRXlRLElBQUksSUFBSWxRLEVBQUUsQ0FBQzJILElBQUksQ0FBQztRQUFFLEdBQUtnTyxTQUFTO1VBQUVyTixJQUFJLEVBQUVTLE1BQU0sQ0FBQ1QsSUFBSztVQUFDL0ssUUFBUSxFQUFFLElBQUksQ0FBQytDLGdCQUFpQjtVQUFDd1IsUUFBUSxFQUFFLElBQUksQ0FBQ1A7UUFBaUIsRUFBRSxDQUFDO01BQzVMO0lBQ0Q7SUFFQSxJQUFJUSxLQUFLLEdBQUcvUixFQUFFLENBQUNrSSxNQUFNLENBQUM7TUFBRXRNLEtBQUssRUFBRSxDQUFDLENBQUM7TUFBRUUsU0FBUyxFQUFFO0lBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQ0QsS0FBSyxDQUFDd1IsSUFBSSxDQUFDO0lBQ3BFLG9CQUNDbFMsS0FBQSxDQUFBUSxhQUFBO01BQUk4RCxHQUFHLEVBQUVvQixLQUFNO01BQUMvRSxTQUFTLEVBQUVWLElBQUksQ0FBQ21ELEtBQUssQ0FBQ0MsU0FBUyxDQUFDLGNBQWMsRUFBR3VLLE1BQU0sQ0FBQ2pMLEtBQUssR0FBQyxPQUFPLEdBQUMsRUFBRSxFQUFJNlgsU0FBUyxDQUFDbkMsUUFBUSxHQUFDLFVBQVUsR0FBQyxFQUFFLEVBQUd6QixLQUFLLENBQUNqVyxTQUFTLENBQUU7TUFBQ0YsS0FBSyxFQUFFUixJQUFJLENBQUNtRCxLQUFLLENBQUMzQyxLQUFLLENBQUNtVyxLQUFLLENBQUNuVyxLQUFLLEVBQUVtTixNQUFNLENBQUN6RSxXQUFXO0lBQUUsR0FDdk1tTixRQUNDLENBQUM7RUFFUCxDQUFDO0VBQ0QxQixXQUFXLEVBQUUsU0FBYkEsV0FBV0EsQ0FBQSxFQUFhO0lBQ3ZCLElBQUl2RSxRQUFRLEdBQUdwUSxJQUFJLENBQUNtRCxLQUFLLENBQUN5TixrQkFBa0IsQ0FBQyxJQUFJLENBQUNuUSxLQUFLLENBQUNtVSxTQUFTLEVBQUU7TUFDbEU3SyxTQUFTLEVBQUU7SUFDWixDQUFDLENBQUM7SUFDRixJQUFHcUcsUUFBUSxFQUFDO01BQ1gsT0FBT0EsUUFBUTtJQUNoQjtJQUNBLElBQUl3RyxJQUFJLEdBQUdoUyxFQUFFLENBQUNrSSxNQUFNLENBQUM7TUFBRXBNLFNBQVMsRUFBRSxFQUFFO01BQUVGLEtBQUssRUFBRSxDQUFDO0lBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQ0MsS0FBSyxDQUFDNEYsR0FBRyxDQUFDO0lBQ2xFLG9CQUNDdEcsS0FBQSxDQUFBUSxhQUFBO01BQUlHLFNBQVMsRUFBRVYsSUFBSSxDQUFDbUQsS0FBSyxDQUFDQyxTQUFTLENBQUMsMkJBQTJCLEVBQUV3VCxJQUFJLENBQUNsVyxTQUFTLENBQUU7TUFBQ0YsS0FBSyxFQUFFb1csSUFBSSxDQUFDcFc7SUFBTSxHQUVsRyxDQUFDLElBQUksQ0FBQ0MsS0FBSyxDQUFDcUQsT0FBTyxJQUFFLEVBQUUsRUFBRWtGLEdBQUcsQ0FBQyxJQUFJLENBQUNvTixZQUFZLENBRTVDLENBQUM7RUFFUCxDQUFDO0VBQ0Q5VixNQUFNLEVBQUUsU0FBUkEsTUFBTUEsQ0FBQSxFQUFZO0lBQ2pCLG9CQUNDUCxLQUFBLENBQUFRLGFBQUE7TUFBTzhELEdBQUcsRUFBRSxJQUFJLENBQUNqRCxLQUFLLENBQUNxWSxVQUFXO01BQUMvWSxTQUFTLEVBQUVWLElBQUksQ0FBQ21ELEtBQUssQ0FBQ0MsU0FBUyxDQUFDLHFDQUFxQyxFQUFFLElBQUksQ0FBQzNDLEtBQUssQ0FBQ0MsU0FBUyxFQUFFLElBQUksQ0FBQ1UsS0FBSyxDQUFDVixTQUFTLENBQUU7TUFBQ0YsS0FBSyxFQUFFUixJQUFJLENBQUNtRCxLQUFLLENBQUMzQyxLQUFLLENBQUMsSUFBSSxDQUFDQyxLQUFLLENBQUNELEtBQUssRUFBRSxJQUFJLENBQUNZLEtBQUssQ0FBQ1osS0FBSztJQUFFLEdBQ2pOLElBQUksQ0FBQ21VLFdBQVcsQ0FBQyxDQUNaLENBQUM7RUFFVjtBQUNELENBQUMsQ0FBQyxDOzs7Ozs7Ozs7OztBQ3BORnpVLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHO0VBQ2JxSixRQUFRLEVBQUV2SixtQkFBTyxDQUFDLHVDQUFZLENBQUM7RUFDL0I0SixPQUFPLEVBQUU1SixtQkFBTyxDQUFDLHFDQUFXLENBQUM7RUFDN0IrSixTQUFTLEVBQUUvSixtQkFBTyxDQUFDLHlDQUFhLENBQUM7RUFDakNtRyxLQUFLLEVBQUVuRyxtQkFBTyxDQUFDLGlDQUFTLENBQUM7RUFDekJpRyxVQUFVLEVBQUVqRyxtQkFBTyxDQUFDLDJDQUFjLENBQUM7RUFDbkMwWSxLQUFLLEVBQUUxWSxtQkFBTyxDQUFDLGlDQUFTLENBQUM7RUFDekJ1SyxLQUFLLEVBQUV2SyxtQkFBTyxDQUFDLGlDQUFTLENBQUM7RUFDekJ5SixLQUFLLEVBQUV6SixtQkFBTyxDQUFDLGlDQUFTLENBQUM7RUFDekJ5UyxJQUFJLEVBQUV6UyxtQkFBTyxDQUFDLCtCQUFRO0FBQzFCLENBQUMsQzs7Ozs7Ozs7Ozs7QUNWRCxhQUFhLGdDQUFnQyxFQUFFLEk7Ozs7Ozs7Ozs7O0FDQS9DLGFBQWEsbUNBQW1DLEVBQUUsSTs7Ozs7Ozs7Ozs7QUNBbEQsYUFBYSxpQ0FBaUMsRUFBRSxJOzs7Ozs7Ozs7OztBQ0FoRCxhQUFhLGdDQUFnQyxFQUFFLEk7Ozs7Ozs7Ozs7O0FDQS9DLGFBQWEsK0JBQStCLEVBQUUsSTs7Ozs7Ozs7Ozs7QUNBOUMsYUFBYSxpQ0FBaUMsRUFBRSxJOzs7Ozs7Ozs7OztBQ0FoRCxhQUFhLGdDQUFnQyxFQUFFLEk7Ozs7Ozs7Ozs7O0FDQS9DLGFBQWEsZ0NBQWdDLEVBQUUsSTs7Ozs7Ozs7Ozs7QUNBL0MsYUFBYSxtQ0FBbUMsRUFBRSxJIiwiZmlsZSI6Ii4vZGlzdC9kZXZlbG9wbWVudC9pbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfSBjbGFzc05hbWU9eyd6ci10YWJsZS1sb2FkaW5nICcgKyAodGhpcy5wcm9wcy5jbGFzc05hbWUgfHwgJycpfT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsZHMtcmluZ1wiPjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgVGFibGVQYWdlciA9IHJlcXVpcmUoJy4vVGFibGVQYWdlcicpO1xudmFyIHNlbGVjdG9yID0gcmVxdWlyZSgnem51aS1yZWFjdC1zZWxlY3RvcicpO1xubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOiAnWlJQb3B1cFRhYmxlJyxcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dGV4dEtleTogJ3p4bnpfTGFiZWwnLFxuXHRcdFx0dmFsdWVLZXk6ICd6eG56X1VVSUQnXG5cdFx0fTtcblx0fSxcbiAgICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHRleHQ6IHRoaXMucHJvcHMudGV4dCxcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLnByb3BzLnZhbHVlXG5cdFx0fTtcblx0fSxcbiAgICBnZXRUZXh0OiBmdW5jdGlvbiAoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUudGV4dDtcbiAgICB9LFxuICAgIHNldFRleHQ6IGZ1bmN0aW9uICh0ZXh0KXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0ZXh0OiB0ZXh0XG4gICAgICAgIH0pO1xuICAgIH0sXG5cdGdldFZhbHVlOiBmdW5jdGlvbiAoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUudmFsdWU7XG4gICAgfSxcbiAgICBzZXRWYWx1ZTogZnVuY3Rpb24gKHZhbHVlKXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBfX29uUm93Q2xpY2s6IGZ1bmN0aW9uIChldmVudCwgZHJvcGRvd25FdmVudCl7XG4gICAgICAgIHZhciBfZGF0YSA9IGV2ZW50LmRhdGEudHJvdy5wcm9wcy5kYXRhO1xuICAgICAgICBldmVudC5kYXRhID0gX2RhdGE7XG4gICAgICAgIGV2ZW50LnZhbHVlID0gX2RhdGFbdGhpcy5wcm9wcy52YWx1ZUtleV07XG5cdFx0ZXZlbnQudGV4dCA9IF9kYXRhW3RoaXMucHJvcHMudGV4dEtleV07XG4gICAgICAgIGRyb3Bkb3duRXZlbnQucG9wdXBTZWxlY3Quc2V0RGF0YShldmVudC52YWx1ZSwgZXZlbnQudGV4dCk7XG4gICAgICAgIGRyb3Bkb3duRXZlbnQuZHJvcGRvd24uY2xvc2VQb3BvdmVyKCk7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUoZXZlbnQudmFsdWUpO1xuICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlICYmIHRoaXMucHJvcHMub25DaGFuZ2UoZXZlbnQsIGRyb3Bkb3duRXZlbnQpO1xuICAgIH0sXG5cdF9fcG9wdXBSZW5kZXI6IGZ1bmN0aW9uIChkcm9wZG93bkV2ZW50KXtcblx0XHRyZXR1cm4gPFRhYmxlUGFnZXJcbiAgICAgICAgICAgIHp4bno9e3RydWV9XG4gICAgICAgICAgICBjb2xncm91cD17e319XG4gICAgICAgICAgICBjZWxsUGFkZGluZz17NX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInpyLXRhYmxlLWNsYXNzLW5vcm1hbFwiXG4gICAgICAgICAgICBmaXhlZD17dHJ1ZX1cbiAgICAgICAgICAgIHRoZWFkPXt7XG4gICAgICAgICAgICAgICAgZmlsdGVyOiB0cnVlXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgdGZpbHRlcj17e319XG4gICAgICAgICAgICB0Ym9keT17e1xuICAgICAgICAgICAgICAgIG9uUm93Q2xpY2s6IChldmVudCk9PnRoaXMuX19vblJvd0NsaWNrKGV2ZW50LCBkcm9wZG93bkV2ZW50KVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHBhZ2VJbmRleD17MX1cbiAgICAgICAgICAgIHBhZ2VTaXplPXs1fSB7Li4udGhpcy5wcm9wc30gLz47XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHNlbGVjdG9yLlBvcHVwU2VsZWN0IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLXRhYmxlLXBvcHVwLXRhYmxlJywgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0gcG9wdXBSZW5kZXI9e3RoaXMuX19wb3B1cFJlbmRlcn0gLz5cblx0XHQpO1xuXHR9XG59KTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgdGFibGUgPSByZXF1aXJlKCcuL3RhYmxlL2luZGV4Jyk7XG52YXIgc2VsZWN0b3IgPSByZXF1aXJlKCd6bnVpLXJlYWN0LXNlbGVjdG9yJyk7XG52YXIgTG9hZGluZyA9IHJlcXVpcmUoJy4vTG9hZGluZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSVGFibGUnLFxuXHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRib3JkZXI6IHRydWUsXG5cdFx0XHRyZXNldENoZWNrZWRzOiBmYWxzZSxcblx0XHRcdGZpeGVkTGF5b3V0OiBmYWxzZSxcblx0XHRcdGxvYWRpbmdFbmFibGVkOiB0cnVlLFxuXHRcdFx0ZGF0YUluZGV4RW5hYmxlZDogZmFsc2UsXG5cdFx0XHR2YWx1ZUtleTogJ3p4bnpfVVVJRCcsXG5cdFx0XHRyb3dLZXk6ICd6eG56X1VVSUQnXG5cdFx0fTtcblx0fSxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0ZGF0YTogW10sIFxuXHRcdFx0Y29sdW1uczogW10sXG5cdFx0XHRjaGVja2VkczogdGhpcy5wcm9wcy5jaGVja2VkcyB8fCBbXVxuXHRcdH07XG5cdH0sXG5cdGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpe1xuXHRcdHRoaXMucHJvcHMub25Db21wb25lbnREaWRNb3VudCAmJiB0aGlzLnByb3BzLm9uQ29tcG9uZW50RGlkTW91bnQodGhpcyk7XG5cdH0sXG5cdF9fc29ydEZ1bmN0aW9uOiBmdW5jdGlvbiAobmV4dCwgcHJldiwga2V5LCBfc29ydCl7XG5cdFx0aWYodGhpcy5wcm9wcy5zb3J0RnVuY3Rpb24pIHtcblx0XHRcdHJldHVybiB0aGlzLnByb3BzLnNvcnRGdW5jdGlvbihuZXh0LCBwcmV2LCBrZXksIF9zb3J0KTtcblx0XHR9XG5cdFx0aWYoX3NvcnQ9PSdkZXNjJyl7XG5cdFx0XHRpZihuZXh0W2tleV0gPiBwcmV2W2tleV0pe1xuXHRcdFx0XHRyZXR1cm4gMTtcblx0XHRcdH1lbHNlIGlmKG5leHRba2V5XSA9PSBwcmV2W2tleV0pe1xuXHRcdFx0XHRyZXR1cm4gMDtcblx0XHRcdH1lbHNlIGlmKG5leHRba2V5XSA8IHByZXZba2V5XSl7XG5cdFx0XHRcdHJldHVybiAtMTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoX3NvcnQ9PSdhc2MnKXtcblx0XHRcdGlmKG5leHRba2V5XSA8IHByZXZba2V5XSl7XG5cdFx0XHRcdHJldHVybiAxO1xuXHRcdFx0fWVsc2UgaWYobmV4dFtrZXldID09IHByZXZba2V5XSl7XG5cdFx0XHRcdHJldHVybiAwO1xuXHRcdFx0fWVsc2UgaWYobmV4dFtrZXldID4gcHJldltrZXldKXtcblx0XHRcdFx0cmV0dXJuIC0xO1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0X19vblNvcnQ6IGZ1bmN0aW9uIChzb3J0cyl7XG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLm9uU29ydENoYW5nZSAmJiB0aGlzLnByb3BzLm9uU29ydENoYW5nZShzb3J0cywgdGhpcy5zdGF0ZS5kYXRhLCB0aGlzKTtcblx0XHRpZihfcmV0dXJuICE9PSBmYWxzZSl7XG5cdFx0XHRpZih0aGlzLmRhdGEgJiYgem4uaXNaTk9iamVjdCh0aGlzLmRhdGEpKSB7XG5cdFx0XHRcdGlmKCF0aGlzLmRhdGEuX2FyZ3YuZGF0YSkge1xuXHRcdFx0XHRcdHRoaXMuZGF0YS5fYXJndi5kYXRhID0ge307XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5kYXRhLl9hcmd2LmRhdGEuc29ydHMgPSBzb3J0cztcblx0XHRcdFx0dGhpcy5kYXRhLnJlZnJlc2goKTtcblx0XHRcdH1lbHNle1xuXHRcdFx0XHR2YXIgX3NvcnQgPSBudWxsO1xuXHRcdFx0XHRmb3IodmFyIGtleSBpbiBzb3J0cyl7XG5cdFx0XHRcdFx0X3NvcnQgPSBzb3J0c1trZXldXG5cdFx0XHRcdFx0dGhpcy5zdGF0ZS5kYXRhID0gdGhpcy5zdGF0ZS5kYXRhLnNvcnQoKG5leHQsIHByZXYpID0+IHRoaXMuX19zb3J0RnVuY3Rpb24obmV4dCwgcHJldiwga2V5LCBfc29ydCkpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5mb3JjZVVwZGF0ZSgpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0X19vbkZpbHRlckNoYW5nZTogZnVuY3Rpb24gKGV2dCwgZGF0YSl7XG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLm9uRmlsdGVyRmllbGRDaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkZpbHRlckZpZWxkQ2hhbmdlKGV2dCwgZGF0YSwgdGhpcyk7XG5cdFx0aWYoX3JldHVybiA9PT0gZmFsc2UpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH0sXG5cdF9fb25GaWx0ZXI6IGZ1bmN0aW9uIChmaWx0ZXJzKXtcblx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMub25GaWx0ZXJDaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkZpbHRlckNoYW5nZShmaWx0ZXJzLCB0aGlzLnN0YXRlLmRhdGEsIHRoaXMpO1xuXHRcdGlmKF9yZXR1cm4gIT09IGZhbHNlKXtcblx0XHRcdGlmKHRoaXMuZGF0YSAmJiB6bi5pc1pOT2JqZWN0KHRoaXMuZGF0YSkpIHtcblx0XHRcdFx0aWYoIXRoaXMuZGF0YS5fYXJndi5kYXRhKSB7XG5cdFx0XHRcdFx0dGhpcy5kYXRhLl9hcmd2LmRhdGEgPSB7fTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmRhdGEuX2FyZ3YuZGF0YS5maWx0ZXJzID0gZmlsdGVycztcblx0XHRcdFx0dGhpcy5kYXRhLnJlZnJlc2goKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdF9fb25UQm9keUVhY2hSb3dEYXRhOiBmdW5jdGlvbiAoZGF0YSwgaW5kZXgsIHRib2R5KXtcblx0XHR2YXIgX3ZhbHVlS2V5ID0gdGhpcy5wcm9wcy52YWx1ZUtleSB8fCAnenhuel9VVUlEJztcblx0XHRpZih0aGlzLnByb3BzLmNoZWNrYm94ICYmIHRoaXMucHJvcHMudmFsdWUgJiYgX3ZhbHVlS2V5KSB7XG5cdFx0XHR2YXIgX3ZhbHVlID0gZGF0YVtfdmFsdWVLZXldO1xuXHRcdFx0aWYodGhpcy5wcm9wcy52YWx1ZS5pbmRleE9mKF92YWx1ZSkhPS0xKXtcblx0XHRcdFx0dGhpcy5zdGF0ZS5jaGVja2Vkcy5wdXNoKF92YWx1ZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHRoaXMucHJvcHMub25FYWNoUm93RGF0YSAmJiB0aGlzLnByb3BzLm9uRWFjaFJvd0RhdGEoZGF0YSwgaW5kZXgsIHRib2R5LCB0aGlzKTtcblx0fSxcblx0X190Ym9keURhdGFSZW5kZXI6IGZ1bmN0aW9uIChjb2x1bW5zKXtcblx0XHRpZighdGhpcy5zdGF0ZS5kYXRhLmxlbmd0aCl7XG5cdFx0XHRyZXR1cm4gPHRhYmxlLlRCb2R5RW1wdHkgY29udGV4dD17dGhpcy5wcm9wcy5jb250ZXh0fSB7Li4udGhpcy5wcm9wcy50Ym9keX0gY29sdW1ucz17Y29sdW1uc30gZGF0YT17dGhpcy5zdGF0ZS5kYXRhfSB0YWJsZT17dGhpc30gLz47XG5cdFx0fVxuXHRcdHJldHVybiA8dGFibGUuVEJvZHkgcm93S2V5PXt0aGlzLnByb3BzLnJvd0tleX0gcm93PXt0aGlzLnByb3BzLnJvd30gY29udGV4dD17dGhpcy5wcm9wcy5jb250ZXh0fSBlYWNoUm93RGF0YT17dGhpcy5fX29uVEJvZHlFYWNoUm93RGF0YX0gey4uLnRoaXMucHJvcHMudGJvZHl9IGNvbHVtbnM9e2NvbHVtbnN9IGZpeGVkQ29sdW1ucz17dGhpcy5wcm9wcy5maXhlZENvbHVtbnN9IGRhdGE9e3RoaXMuc3RhdGUuZGF0YX0gdGFibGU9e3RoaXN9IC8+O1xuXHR9LFxuXHRfX3Rib2R5TG9hZGluZ1JlbmRlcjogZnVuY3Rpb24gKGNvbHVtbnMpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8dGJvZHkgY2xhc3NOYW1lPSd0Ym9keS1sb2FkZXInPlxuXHRcdFx0XHQ8dHI+XG5cdFx0XHRcdFx0PHRkPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2RhdGEtbG9hZGluZyc+XG5cdFx0XHRcdFx0XHRcdDxzcGFuPuWKoOi9veS4rTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0PExvYWRpbmcgLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvdGQ+XG5cdFx0XHRcdDwvdHI+XG5cdFx0XHQ8L3Rib2R5PlxuXHRcdCk7XG5cdFx0cmV0dXJuIDx0YWJsZS5UQm9keSByb3dLZXk9e3RoaXMucHJvcHMucm93S2V5fSByb3c9e3RoaXMucHJvcHMucm93fSBjb250ZXh0PXt0aGlzLnByb3BzLmNvbnRleHR9IHsuLi50aGlzLnByb3BzLnRib2R5fSBjb2x1bW5zPXtjb2x1bW5zfSBmaXhlZENvbHVtbnM9e3RoaXMucHJvcHMuZml4ZWRDb2x1bW5zfSBsb2FkaW5nPXt0cnVlfSB0YWJsZT17dGhpc30gLz47XG5cdH0sXG5cdF9fb25USGVhZENvbHVtbkNoYW5nZTogZnVuY3Rpb24gKGRhdGEsIGluZGV4KXtcblx0XHRpZih0aGlzLnN0YXRlLmNvbHVtbnMpe1xuXHRcdFx0dGhpcy5zdGF0ZS5jb2x1bW5zW2luZGV4XSA9IGRhdGE7XG5cdFx0XHR0aGlzLmZvcmNlVXBkYXRlKCk7XG5cdFx0fVxuXHR9LFxuXHRfX3Rib2R5RGF0YUxvYWRlZDogZnVuY3Rpb24gKGRhdGEpIHtcblx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMub25EYXRhTG9hZGVkICYmIHRoaXMucHJvcHMub25EYXRhTG9hZGVkKGRhdGEsIHRoaXMpO1xuXHRcdGlmKF9yZXR1cm4gIT09IGZhbHNlKXtcblx0XHRcdGlmKHpuLmlzKGRhdGEsICdvYmplY3QnKSAmJiBkYXRhLnJlc3VsdCl7XG5cdFx0XHRcdGRhdGEgPSBkYXRhLnJlc3VsdDtcblx0XHRcdH1cblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBkYXRhOiBkYXRhIH0pO1xuXHRcdH1cblx0fSxcblx0X19vbkRhdGFDcmVhdGVkOiBmdW5jdGlvbiAoZGF0YSwgbGlmeWN5Y2xlKXtcblx0XHR0aGlzLmRhdGEgPSBkYXRhO1xuXHRcdHRoaXMucHJvcHMub25EYXRhQ3JlYXRlZCAmJiB0aGlzLnByb3BzLm9uRGF0YUNyZWF0ZWQoZGF0YSwgdGhpcywgbGlmeWN5Y2xlKTtcblx0fSxcblx0cmVmcmVzaDogZnVuY3Rpb24gKGNhbGxiYWNrLCByZXNldCl7XG5cdFx0aWYodGhpcy5wcm9wcy5yZXNldENoZWNrZWQgfHwgcmVzZXQpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRjaGVja2VkczogW11cblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdGlmKHRoaXMuZGF0YSl7XG5cdFx0XHR0aGlzLmRhdGEucmVmcmVzaChudWxsLCB7XG5cdFx0XHRcdGFmdGVyOiAoc2VuZGVyLCBkYXRhLCByZXNwb25zZSwgeGhyKT0+eyBcblx0XHRcdFx0XHRjYWxsYmFjayAmJiBjYWxsYmFjayhkYXRhLCByZXNwb25zZSwgeGhyKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fWVsc2V7XG5cdFx0XHRjYWxsYmFjayAmJiBjYWxsYmFjaygpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXHRyZWZyZXNoSGVhZGVyczogZnVuY3Rpb24gKCl7XG5cdFx0aWYodGhpcy5jb2x1bW5zKXtcblx0XHRcdHRoaXMuY29sdW1ucy5yZWZyZXNoKCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cdHNldERhdGE6IGZ1bmN0aW9uIChkYXRhKXtcblx0XHR0aGlzLnNldFN0YXRlKHsgZGF0YTogZGF0YSB9KTtcblx0fSxcblx0X19maXhlZFN0eWxlczogZnVuY3Rpb24gKGluZGV4KXtcblx0XHR2YXIgX2NvbHVtbnMgPSB0aGlzLnN0YXRlLmNvbHVtbnN8fFtdLCBfd2lkdGggPSAwO1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBpbmRleDsgaSsrKXtcblx0XHRcdGlmKF9jb2x1bW5zW2ldLmZpeGVkKSB7XG5cdFx0XHRcdF93aWR0aCArPSAoX2NvbHVtbnNbaV0ud2lkdGggfHwgMCkgLSAxO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHRsZWZ0OiBfd2lkdGggLSAxXG5cdFx0fTtcblx0fSxcblx0X19yZW5kZXJUQm9keTogZnVuY3Rpb24gKGNvbHVtbnMpe1xuXHRcdHZhciBfZGF0YSA9IHRoaXMucHJvcHMuZGF0YSB8fCB0aGlzLnByb3BzLnRib2R5LmRhdGE7XG5cdFx0dmFyIF9yZXN1bHQgPSB0aGlzLnByb3BzLm9uRGF0YUluaXRpYWwgJiYgdGhpcy5wcm9wcy5vbkRhdGFJbml0aWFsKF9kYXRhLCB0aGlzKTtcblx0XHRpZihfcmVzdWx0KXtcblx0XHRcdF9kYXRhID0gX3Jlc3VsdDtcblx0XHR9XG5cdFx0cmV0dXJuIDx6bnVpLnJlYWN0LkRhdGFMaWZlY3ljbGUgZGF0YT17X2RhdGF9IFxuXHRcdFx0XHRcdGRhdGFSZW5kZXI9eygpPT50aGlzLl9fdGJvZHlEYXRhUmVuZGVyKGNvbHVtbnMpfSBcblx0XHRcdFx0XHRsb2FkaW5nRW5hYmxlZD17dGhpcy5wcm9wcy5sb2FkaW5nRW5hYmxlZH1cblx0XHRcdFx0XHRsb2FkaW5nUmVuZGVyPXsoKT0+dGhpcy5fX3Rib2R5TG9hZGluZ1JlbmRlcihjb2x1bW5zKX1cblx0XHRcdFx0XHRyZXNwb25zZUhhbmRsZXI9e3RoaXMucHJvcHMucmVzcG9uc2VIYW5kbGVyfVxuXHRcdFx0XHRcdG9uRGF0YUNyZWF0ZWQ9e3RoaXMuX19vbkRhdGFDcmVhdGVkfVxuXHRcdFx0XHRcdG9uRmluaXNoZWQ9e3RoaXMuX190Ym9keURhdGFMb2FkZWR9IC8+O1xuXHR9LFxuXHRfX29uRml4ZWRMYXlvdXRCb2R5U2Nyb2xsOiBmdW5jdGlvbiAoZSl7XG5cdFx0dGhpcy5fbGF5b3V0SGVhZGVyLnNjcm9sbExlZnQgPSBlLnRhcmdldC5zY3JvbGxMZWZ0O1xuXHR9LFxuXHRfX3JlbmRlcjogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIGNvbHVtbnMgPSB0aGlzLnN0YXRlLmNvbHVtbnM7XG5cdFx0Y29sdW1ucyA9IGNvbHVtbnMubWFwKChpdGVtLCBpbmRleCk9Pntcblx0XHRcdGlmKGl0ZW0uZml4ZWQpIHtcblx0XHRcdFx0aXRlbS5maXhlZFN0eWxlcyA9IHRoaXMuX19maXhlZFN0eWxlcyhpbmRleCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gaXRlbTtcblx0XHR9KTtcblx0XHRpZih0aGlzLnByb3BzLmZpeGVkTGF5b3V0KSB7XG5cdFx0XHR2YXIgX3N0eWxlID0ge307XG5cdFx0XHRpZih0aGlzLnByb3BzLmJvcmRlcikge1xuXHRcdFx0XHRfc3R5bGUuYm9yZGVyID0gJzFweCBzb2xpZCAjZTZlNmU2Jztcblx0XHRcdH1cblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwienItdGFibGUtZml4ZWQtbGF5b3V0XCIgc3R5bGU9e19zdHlsZX0+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmaXhlZC1sYXlvdXQtaGVhZGVyXCIgcmVmPXsocmVmKT0+dGhpcy5fbGF5b3V0SGVhZGVyID0gcmVmfT5cblx0XHRcdFx0XHRcdDx0YWJsZSBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItdGFibGVcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBcblx0XHRcdFx0XHRcdFx0c3R5bGU9e3pudWkucmVhY3Quc3R5bGUodGhpcy5wcm9wcy5zdHlsZSwgeyB3aWR0aDogdGhpcy5wcm9wcy53aWR0aCB9KX0gXG5cdFx0XHRcdFx0XHRcdGRhdGEtZml4ZWQ9e3RoaXMucHJvcHMuZml4ZWR9IFx0XG5cdFx0XHRcdFx0XHRcdGNlbGxQYWRkaW5nPXt0aGlzLnByb3BzLmNlbGxQYWRkaW5nIHx8IDB9IFxuXHRcdFx0XHRcdFx0XHRjZWxsU3BhY2luZz17dGhpcy5wcm9wcy5jZWxsU3BhY2luZyB8fCAwfSB7Li4udGhpcy5wcm9wcy5hdHRyc30+XG5cdFx0XHRcdFx0XHRcdHsgISF0aGlzLnByb3BzLmNhcHRpb24gJiYgPGNhcHRpb24gY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNhcHRpb24uY2xhc3NOYW1lfSBzdHlsZT17dGhpcy5wcm9wcy5jYXB0aW9uLnN0eWxlfT57dGhpcy5wcm9wcy5jYXB0aW9uLnJlbmRlcn08L2NhcHRpb24+IH1cblx0XHRcdFx0XHRcdFx0eyAhIXRoaXMucHJvcHMuY29sZ3JvdXAgJiYgPHRhYmxlLkNvbGdyb3VwIGNvbnRleHQ9e3RoaXMucHJvcHMuY29udGV4dH0ga2V5TWFwcGluZz17dGhpcy5wcm9wcy5rZXlNYXBwaW5nfSBjb2x1bW5zPXtjb2x1bW5zfSB7Li4udGhpcy5wcm9wcy5jb2xncm91cH0gLz4gfVxuXHRcdFx0XHRcdFx0XHR7ICEhdGhpcy5wcm9wcy50aGVhZCAmJiA8dGFibGUuVEhlYWQgY29udGV4dD17dGhpcy5wcm9wcy5jb250ZXh0fSBvblNvcnQ9e3RoaXMuX19vblNvcnR9IG9uQ29sdW1uQ2hhbmdlPXt0aGlzLl9fb25USGVhZENvbHVtbkNoYW5nZX0gY29sdW1ucz17Y29sdW1uc30ga2V5TWFwcGluZz17dGhpcy5wcm9wcy5rZXlNYXBwaW5nfSB7Li4udGhpcy5wcm9wcy50aGVhZH0gdGFibGU9e3RoaXN9IC8+fVxuXHRcdFx0XHRcdFx0XHR7ICEhdGhpcy5wcm9wcy50ZmlsdGVyICYmIDx0YWJsZS5URmlsdGVyIGNvbnRleHQ9e3RoaXMucHJvcHMuY29udGV4dH0gb25GaWx0ZXJDaGFuZ2U9e3RoaXMuX19vbkZpbHRlckNoYW5nZX0gb25GaWx0ZXI9e3RoaXMuX19vbkZpbHRlcn0gY29sdW1ucz17Y29sdW1uc30gey4uLnRoaXMucHJvcHMudGZpbHRlcn0gdGFibGU9e3RoaXN9IC8+fVxuXHRcdFx0XHRcdFx0XHR7ICEhdGhpcy5wcm9wcy50cm93YWRkZXIgJiYgPHRhYmxlLlRSb3dBZGRlciBjb250ZXh0PXt0aGlzLnByb3BzLmNvbnRleHR9IG9uQWRkU3VibWl0PXt0aGlzLl9fb25BZGRTdWJtaXR9IG9uSW5wdXRDaGFuZ2U9e3RoaXMuX19vbkFkZElucHV0Q2hhbmdlfSBjb2x1bW5zPXtjb2x1bW5zfSB7Li4udGhpcy5wcm9wcy50cm93YWRkZXJ9IHRhYmxlPXt0aGlzfSAvPn1cblx0XHRcdFx0XHRcdDwvdGFibGU+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmaXhlZC1sYXlvdXQtYm9keVwiIG9uU2Nyb2xsPXt0aGlzLl9fb25GaXhlZExheW91dEJvZHlTY3JvbGx9PlxuXHRcdFx0XHRcdFx0PHRhYmxlIGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci10YWJsZVwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IFxuXHRcdFx0XHRcdFx0XHRzdHlsZT17em51aS5yZWFjdC5zdHlsZSh0aGlzLnByb3BzLnN0eWxlLCB7IHdpZHRoOiB0aGlzLnByb3BzLndpZHRoIH0pfSBcblx0XHRcdFx0XHRcdFx0ZGF0YS1maXhlZD17dGhpcy5wcm9wcy5maXhlZH0gXHRcblx0XHRcdFx0XHRcdFx0Y2VsbFBhZGRpbmc9e3RoaXMucHJvcHMuY2VsbFBhZGRpbmcgfHwgMH0gXG5cdFx0XHRcdFx0XHRcdGNlbGxTcGFjaW5nPXt0aGlzLnByb3BzLmNlbGxTcGFjaW5nIHx8IDB9IHsuLi50aGlzLnByb3BzLmF0dHJzfT5cblx0XHRcdFx0XHRcdFx0eyAhIXRoaXMucHJvcHMuY2FwdGlvbiAmJiA8Y2FwdGlvbiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2FwdGlvbi5jbGFzc05hbWV9IHN0eWxlPXt0aGlzLnByb3BzLmNhcHRpb24uc3R5bGV9Pnt0aGlzLnByb3BzLmNhcHRpb24ucmVuZGVyfTwvY2FwdGlvbj4gfVxuXHRcdFx0XHRcdFx0XHR7ICEhdGhpcy5wcm9wcy5jb2xncm91cCAmJiA8dGFibGUuQ29sZ3JvdXAgY29udGV4dD17dGhpcy5wcm9wcy5jb250ZXh0fSBrZXlNYXBwaW5nPXt0aGlzLnByb3BzLmtleU1hcHBpbmd9IGNvbHVtbnM9e2NvbHVtbnN9IHsuLi50aGlzLnByb3BzLmNvbGdyb3VwfSAvPiB9XG5cdFx0XHRcdFx0XHRcdHsgKHRoaXMucHJvcHMudGJvZHkgfHwgdGhpcy5wcm9wcy5kYXRhKSAmJiB0aGlzLl9fcmVuZGVyVEJvZHkoY29sdW1ucykgfVxuXHRcdFx0XHRcdFx0PC90YWJsZT5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnByb3BzLnNob3dGb290ICE9PSBmYWxzZSAmJiA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkLWxheW91dC1mb290ZXJcIj5cblx0XHRcdFx0XHRcdFx0eyAhIXRoaXMucHJvcHMudGZvb3QgJiYgPHRhYmxlPjx0YWJsZS5URm9vdCBjb250ZXh0PXt0aGlzLnByb3BzLmNvbnRleHR9IGNvbHVtbnM9e2NvbHVtbnN9IHsuLi50aGlzLnByb3BzLnRmb290fSB0YWJsZT17dGhpc30gLz48L3RhYmxlPn1cblx0XHRcdFx0XHRcdFx0eyB0aGlzLnByb3BzLmNoaWxkcmVuUmVuZGVyICYmIHRoaXMucHJvcHMuY2hpbGRyZW5SZW5kZXIoY29sdW1ucywgdGhpcykgfVxuXHRcdFx0XHRcdFx0XHR7IHRoaXMucHJvcHMuY2hpbGRyZW4gfVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0dmFyIF9zdHlsZSA9IHt9O1xuXHRcdC8qXG5cdFx0aWYodGhpcy5wcm9wcy5ib3JkZXIpIHtcblx0XHRcdF9zdHlsZS5ib3JkZXIgPSAnMXB4IHNvbGlkICNlNmU2ZTYnO1xuXHRcdH1cblx0XHQqL1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDx0YWJsZSBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItdGFibGVcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBcblx0XHRcdFx0c3R5bGU9e3pudWkucmVhY3Quc3R5bGUodGhpcy5wcm9wcy5zdHlsZSwgeyB3aWR0aDogdGhpcy5wcm9wcy53aWR0aCB9LCBfc3R5bGUpfSBcblx0XHRcdFx0ZGF0YS1maXhlZD17dGhpcy5wcm9wcy5maXhlZH0gXHRcblx0XHRcdFx0Y2VsbFBhZGRpbmc9e3RoaXMucHJvcHMuY2VsbFBhZGRpbmcgfHwgMH0gXG5cdFx0XHRcdGNlbGxTcGFjaW5nPXt0aGlzLnByb3BzLmNlbGxTcGFjaW5nIHx8IDB9IHsuLi50aGlzLnByb3BzLmF0dHJzfT5cblx0XHRcdFx0eyAhIXRoaXMucHJvcHMuY2FwdGlvbiAmJiA8Y2FwdGlvbiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2FwdGlvbi5jbGFzc05hbWV9IHN0eWxlPXt0aGlzLnByb3BzLmNhcHRpb24uc3R5bGV9Pnt0aGlzLnByb3BzLmNhcHRpb24ucmVuZGVyfTwvY2FwdGlvbj4gfVxuXHRcdFx0XHR7ICEhdGhpcy5wcm9wcy5jb2xncm91cCAmJiA8dGFibGUuQ29sZ3JvdXAgY29udGV4dD17dGhpcy5wcm9wcy5jb250ZXh0fSBrZXlNYXBwaW5nPXt0aGlzLnByb3BzLmtleU1hcHBpbmd9IGNvbHVtbnM9e2NvbHVtbnN9IHsuLi50aGlzLnByb3BzLmNvbGdyb3VwfSAvPiB9XG5cdFx0XHRcdHsgISF0aGlzLnByb3BzLnRoZWFkICYmIDx0YWJsZS5USGVhZCBjb250ZXh0PXt0aGlzLnByb3BzLmNvbnRleHR9IG9uU29ydD17dGhpcy5fX29uU29ydH0gb25Db2x1bW5DaGFuZ2U9e3RoaXMuX19vblRIZWFkQ29sdW1uQ2hhbmdlfSBjb2x1bW5zPXtjb2x1bW5zfSBrZXlNYXBwaW5nPXt0aGlzLnByb3BzLmtleU1hcHBpbmd9IHsuLi50aGlzLnByb3BzLnRoZWFkfSB0YWJsZT17dGhpc30gLz59XG5cdFx0XHRcdHsgISF0aGlzLnByb3BzLnRmaWx0ZXIgJiYgPHRhYmxlLlRGaWx0ZXIgY29udGV4dD17dGhpcy5wcm9wcy5jb250ZXh0fSBvbkZpbHRlcj17dGhpcy5fX29uRmlsdGVyfSBjb2x1bW5zPXtjb2x1bW5zfSB7Li4udGhpcy5wcm9wcy50ZmlsdGVyfSB0YWJsZT17dGhpc30gLz59XG5cdFx0XHRcdHsgKHRoaXMucHJvcHMudGJvZHkgfHwgdGhpcy5wcm9wcy5kYXRhKSAmJiB0aGlzLl9fcmVuZGVyVEJvZHkoY29sdW1ucykgfVxuXHRcdFx0XHR7ICEhdGhpcy5wcm9wcy50Zm9vdCAmJiA8dGFibGUuVEZvb3QgY29udGV4dD17dGhpcy5wcm9wcy5jb250ZXh0fSBjb2x1bW5zPXtjb2x1bW5zfSB7Li4udGhpcy5wcm9wcy50Zm9vdH0gdGFibGU9e3RoaXN9IC8+fVxuXHRcdFx0XHR7IHRoaXMucHJvcHMuY2hpbGRyZW5SZW5kZXIgJiYgdGhpcy5wcm9wcy5jaGlsZHJlblJlbmRlcihjb2x1bW5zLCB0aGlzKSB9XG5cdFx0XHRcdHsgdGhpcy5wcm9wcy5jaGlsZHJlbiB9XG5cdFx0XHQ8L3RhYmxlPlxuXHRcdCk7XG5cdH0sXG5cdF9fcm93SGVhZENoZWNrYm94Q2hlY2tlZDogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF9jaGVja2VkcyA9IHRoaXMuc3RhdGUuY2hlY2tlZHMsIF92YWx1ZUtleSA9IHRoaXMucHJvcHMudmFsdWVLZXkgfHwgJ3p4bnpfVVVJRCc7XG5cdFx0aWYoIV9jaGVja2Vkcy5sZW5ndGgpIHJldHVybiBmYWxzZTtcblx0XHRmb3IodmFyIGl0ZW0gb2YgdGhpcy5zdGF0ZS5kYXRhKSB7XG5cdFx0XHRpZighaXRlbS5fX2NoZWNrZWREaXNhYmxlZF9fICYmIF9jaGVja2Vkcy5pbmRleE9mKGl0ZW1bX3ZhbHVlS2V5XSkgPT0gLTEpe1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0sXG5cdF9fb25Sb3dIZWFkQ2hlY2tib3hDaGFuZ2U6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0dmFyIF92YWx1ZUtleSA9IHRoaXMucHJvcHMudmFsdWVLZXkgfHwgJ3p4bnpfVVVJRCc7XG5cdFx0aWYoZXZlbnQuY2hlY2tlZCkge1xuXHRcdFx0Zm9yKHZhciBpdGVtIG9mIHRoaXMuc3RhdGUuZGF0YSkge1xuXHRcdFx0XHRpZighaXRlbS5fX2NoZWNrZWREaXNhYmxlZF9fICYmIHRoaXMuc3RhdGUuY2hlY2tlZHMuaW5kZXhPZihpdGVtW192YWx1ZUtleV0pID09IC0xKXtcblx0XHRcdFx0XHR0aGlzLnN0YXRlLmNoZWNrZWRzLnB1c2goaXRlbVtfdmFsdWVLZXldKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1lbHNle1xuXHRcdFx0Zm9yKHZhciBpdGVtIG9mIHRoaXMuc3RhdGUuZGF0YSkge1xuXHRcdFx0XHRpZighaXRlbS5fX2NoZWNrZWREaXNhYmxlZF9fICYmIHRoaXMuc3RhdGUuY2hlY2tlZHMuaW5kZXhPZihpdGVtW192YWx1ZUtleV0pICE9IC0xKXtcblx0XHRcdFx0XHR0aGlzLnN0YXRlLmNoZWNrZWRzLnNwbGljZSh0aGlzLnN0YXRlLmNoZWNrZWRzLmluZGV4T2YoaXRlbVtfdmFsdWVLZXldKSwgMSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0dGhpcy5mb3JjZVVwZGF0ZSgpO1xuXHRcdHRoaXMucHJvcHMub25DaGVja2JveENoYW5nZSAmJiB0aGlzLnByb3BzLm9uQ2hlY2tib3hDaGFuZ2UodGhpcy5zdGF0ZS5jaGVja2VkcywgdGhpcyk7XG5cdH0sXG5cdF9faW5pdENoZWNrYm94OiBmdW5jdGlvbiAoY29sdW1ucyl7XG5cdFx0aWYoIXRoaXMucHJvcHMuY2hlY2tib3gpIHJldHVybjtcblx0XHR2YXIgX3ZhbHVlS2V5ID0gdGhpcy5wcm9wcy52YWx1ZUtleSB8fCAnenhuel9VVUlEJywgX3ZhbHVlID0gdGhpcy5wcm9wcy5jaGVja2JveDtcblx0XHR2YXIgX2NoZWNrYm94ID0ge1xuXHRcdFx0d2lkdGg6IDYwLFxuXHRcdFx0Zml4ZWQ6IHRydWUsXG5cdFx0XHRoZWFkOiAoYXJndik9Pntcblx0XHRcdFx0dmFyIF90YWJsZSA9IGFyZ3YudGhlYWQucHJvcHMudGFibGU7XG5cdFx0XHRcdGlmKCFfdGFibGUpIHJldHVybjtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8c2VsZWN0b3IuQ2hlY2tib3hcblx0XHRcdFx0XHRcdHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fVxuXHRcdFx0XHRcdFx0a2V5PXt6bi51dWlkKCl9XG5cdFx0XHRcdFx0XHR0ZXh0PXsnICcgKyBfdGFibGUuc3RhdGUuY2hlY2tlZHMubGVuZ3RofVxuXHRcdFx0XHRcdFx0Y2hlY2tlZD17dGhpcy5fX3Jvd0hlYWRDaGVja2JveENoZWNrZWQoKX1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLl9fb25Sb3dIZWFkQ2hlY2tib3hDaGFuZ2V9IC8+XG5cdFx0XHRcdCk7XG5cdFx0XHR9LFxuXHRcdFx0Ym9keTogKGFyZ3YpPT57XG5cdFx0XHRcdHZhciBfZGF0YSA9IGFyZ3YuZGF0YTtcblx0XHRcdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLm9uQm9keUNvbHVtbkNoZWNrYm94UmVuZGVyICYmIHRoaXMucHJvcHMub25Cb2R5Q29sdW1uQ2hlY2tib3hSZW5kZXIoYXJndiwgdGhpcyk7XG5cdFx0XHRcdGlmKF9yZXR1cm4pIHtcblx0XHRcdFx0XHRyZXR1cm4gX3JldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZihfcmV0dXJuID09PSBmYWxzZSl7XG5cdFx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8c2VsZWN0b3IuVW5jb250cm9sQ2hlY2tib3ggXG5cdFx0XHRcdFx0XHRzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgfX1cblx0XHRcdFx0XHRcdGRpc2FibGVkPXtfZGF0YS5fX2NoZWNrZWREaXNhYmxlZF9ffVxuXHRcdFx0XHRcdFx0Y2hlY2tlZD17dGhpcy5zdGF0ZS5jaGVja2Vkcy5pbmRleE9mKF9kYXRhW192YWx1ZUtleV0pICE9PSAtMX1cblx0XHRcdFx0XHRcdG9uQ2xpY2s9eyhldmVudCwgY2hlY2tib3gpPT57XG5cdFx0XHRcdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHRcdFx0XHRpZihjaGVja2JveC5wcm9wcy5jaGVja2VkKSB7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5zdGF0ZS5jaGVja2Vkcy5zcGxpY2UodGhpcy5zdGF0ZS5jaGVja2Vkcy5pbmRleE9mKF9kYXRhW192YWx1ZUtleV0pLCAxKTsgXG5cdFx0XHRcdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc3RhdGUuY2hlY2tlZHMucHVzaChfZGF0YVtfdmFsdWVLZXldKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR0aGlzLmZvcmNlVXBkYXRlKCk7XG5cdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMub25DaGVja2JveENoYW5nZSAmJiB0aGlzLnByb3BzLm9uQ2hlY2tib3hDaGFuZ2UodGhpcy5zdGF0ZS5jaGVja2VkcywgdGhpcyk7XG5cdFx0XHRcdFx0XHR9fSAvPlxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0c3dpdGNoKHpuLnR5cGUoX3ZhbHVlKSkge1xuXHRcdFx0Y2FzZSAnb2JqZWN0Jzpcblx0XHRcdFx0X2NoZWNrYm94ID0gem4uZXh0ZW5kKHt9LCBfdmFsdWUpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ251bWJlcic6XG5cdFx0XHRcdF9jaGVja2JveC53aWR0aCA9IF92YWx1ZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXG5cdFx0Y29sdW1ucyA9IGNvbHVtbnMudW5zaGlmdChfY2hlY2tib3gpO1xuXHR9LFxuXHRfX2luaXRJbmRleENvbHVtbjogZnVuY3Rpb24gKGNvbHVtbnMpe1xuXHRcdGlmKHRoaXMucHJvcHMuZGF0YUluZGV4RW5hYmxlZCkge1xuXHRcdFx0Y29sdW1ucyA9IGNvbHVtbnMudW5zaGlmdCh7XG5cdFx0XHRcdHdpZHRoOiA0OCxcblx0XHRcdFx0bGFiZWw6ICfntKLlvJUnLCBcblx0XHRcdFx0Zml4ZWQ6IHRydWUsXG5cdFx0XHRcdG5hbWU6ICdfX2luZGV4X18nLFxuXHRcdFx0XHRib2R5OiBmdW5jdGlvbiAoYXJndil7XG5cdFx0XHRcdFx0cmV0dXJuICg8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+eygrYXJndi5yb3dJbmRleCkgKyAxfTwvZGl2Pik7XG5cdFx0XHRcdH0uYmluZCh0aGlzKVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9LFxuXHRfX2NvbHVtbnNMb2FkZWQ6IGZ1bmN0aW9uIChjb2x1bW5zKXtcblx0XHRpZihjb2x1bW5zICYmIHpuLmlzKGNvbHVtbnMsICdhcnJheScpKXtcblx0XHRcdHZhciBfdGVtcCA9IG51bGwsXG5cdFx0XHRcdF9yZXN1bHQgPSBudWxsLFxuXHRcdFx0XHRfY29sdW1uSXRlcmF0b3IgPSB0aGlzLnByb3BzLmNvbHVtbkl0ZXJhdG9yLFxuXHRcdFx0XHRfY29sdW1ucyA9IGNvbHVtbnMubWFwKChjb2x1bW4pPT57XG5cdFx0XHRcdFx0X3RlbXAgPSB6bi5kZWVwQXNzaWduKHt9LCBjb2x1bW4pO1xuXHRcdFx0XHRcdF9yZXN1bHQgPSBfY29sdW1uSXRlcmF0b3IgJiYgX2NvbHVtbkl0ZXJhdG9yKF90ZW1wLCB0aGlzKTtcblx0XHRcdFx0XHRpZihfcmVzdWx0ID09PSBmYWxzZSkgcmV0dXJuIG51bGw7XG5cdFx0XHRcdFx0aWYodHlwZW9mIF9yZXN1bHQgPT0gJ29iamVjdCcpIHJldHVybiBfcmVzdWx0O1xuXG5cdFx0XHRcdFx0cmV0dXJuIF90ZW1wO1xuXHRcdFx0XHR9KTtcblx0XHRcdHRoaXMuX19pbml0Q2hlY2tib3goX2NvbHVtbnMpO1xuXHRcdFx0dGhpcy5fX2luaXRJbmRleENvbHVtbihfY29sdW1ucyk7XG5cdFx0XHR0aGlzLnByb3BzLm9uQ29sdW1uc0xvYWRlZCAmJiB0aGlzLnByb3BzLm9uQ29sdW1uc0xvYWRlZChjb2x1bW5zKTtcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBjb2x1bW5zOiBfY29sdW1ucyB9KTtcblx0XHR9XG5cdH0sXG5cdF9fb25Db2x1bW5EYXRhQ3JlYXRlZDogZnVuY3Rpb24gKGRhdGEsIGxpZmVjeWNsZSl7XG5cdFx0dGhpcy5jb2x1bW5zID0gZGF0YTtcblx0XHR0aGlzLnByb3BzLm9uQ29sdW1uc0NyZWF0ZWQgJiYgdGhpcy5wcm9wcy5vbkNvbHVtbnNDcmVhdGVkKGRhdGEsIHRoaXMsIGxpZmVjeWNsZSk7XG5cdH0sXG5cdGdldERhdGE6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB0aGlzLnN0YXRlLmRhdGE7XG5cdH0sXG5cdHJlbW92ZVJvd0RhdGE6IGZ1bmN0aW9uIChkYXRhKXtcblx0XHRpZihkYXRhKSB7XG5cdFx0XHR0aGlzLnN0YXRlLmRhdGEuc3BsaWNlKHRoaXMuc3RhdGUuZGF0YS5pbmRleE9mKGRhdGEpLCAxKTtcblx0XHRcdHRoaXMuZm9yY2VVcGRhdGUoKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblx0dXBkYXRlUm93RGF0YTogZnVuY3Rpb24gKGRhdGEpe1xuXHRcdGlmKGRhdGEpIHtcblx0XHRcdHZhciBfaW5kZXggPSB0aGlzLnN0YXRlLmRhdGEuaW5kZXhPZihkYXRhKTtcblx0XHRcdHRoaXMuc3RhdGUuZGF0YVtfaW5kZXhdID0gZGF0YTtcblx0XHRcdHRoaXMuZm9yY2VVcGRhdGUoKTtcblx0XHR9XG5cdFx0XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gPHpudWkucmVhY3QuRGF0YUxpZmVjeWNsZVxuXHRcdFx0XHRcdGRhdGE9e3RoaXMucHJvcHMuY29sdW1uc31cblx0XHRcdFx0XHRyZW5kZXI9e3RoaXMuX19yZW5kZXJ9XG5cdFx0XHRcdFx0cmVzcG9uc2VIYW5kbGVyPXt0aGlzLnByb3BzLnJlc3BvbnNlSGFuZGxlcn1cblx0XHRcdFx0XHRvbkxvYWRpbmc9e3RoaXMucHJvcHMub25Db2x1bW5Mb2FkaW5nfVxuXHRcdFx0XHRcdG9uRmluaXNoZWQ9e3RoaXMuX19jb2x1bW5zTG9hZGVkfVxuXHRcdFx0XHRcdG9uRXJyb3I9e3RoaXMucHJvcHMub25Db2x1bW5Mb2FkRXJyb3J9XG5cdFx0XHRcdFx0b25EYXRhQ3JlYXRlZD17dGhpcy5fX29uQ29sdW1uRGF0YUNyZWF0ZWR9IC8+O1xuXHR9XG59KTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgVGFibGUgPSByZXF1aXJlKCcuL1RhYmxlJyk7XG52YXIgaW5wdXQgPSByZXF1aXJlKCd6bnVpLXJlYWN0LWlucHV0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJUYWJsZUVkaXRvcicsXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHRhYmxlOiBudWxsLFxuXHRcdFx0Y29sdW1uczogW11cblx0XHR9O1xuXHR9LFxuXHRfX2NlbGxDaGFuZ2U6IGZ1bmN0aW9uIChldmVudCwgYXJndil7XG5cdFx0YXJndi5kYXRhW2FyZ3YudGNlbGwucHJvcHMubmFtZV0gPSBldmVudC52YWx1ZTtcblx0XHRhcmd2LnRyb3cuZm9yY2VVcGRhdGUoKTtcblx0fSxcblx0X19jb2x1bW5Cb2R5UmVuZGVyOiBmdW5jdGlvbiAoYXJndil7XG5cdFx0cmV0dXJuIDxpbnB1dC5JbnB1dCBcblx0XHRcdGtleT17YXJndi52YWx1ZX0gXG5cdFx0XHR2YWx1ZT17YXJndi52YWx1ZX0gXG5cdFx0XHRvbkJsdXI9eyhldmVudCk9PnRoaXMuX19jZWxsQ2hhbmdlKGV2ZW50LCBhcmd2KX1cblx0XHRcdG9uRW50ZXI9eyhldmVudCk9PnRoaXMuX19jZWxsQ2hhbmdlKGV2ZW50LCBhcmd2KX0gLz47XG5cdH0sXG5cdF9fY29sdW1uSXRlcmF0b3I6IGZ1bmN0aW9uIChjb2x1bW4sIHRhYmxlKXtcblx0XHRpZighY29sdW1uLmJvZHkpIHtcblx0XHRcdGNvbHVtbi5ib2R5ID0gdGhpcy5fX2NvbHVtbkJvZHlSZW5kZXI7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNvbHVtbjtcblx0fSxcblx0c2V0RGF0YTogZnVuY3Rpb24gKGRhdGEpe1xuXHRcdHZhciBfcmV0dXJuID0gdGhpcy5wcm9wcy5vbkRhdGFDaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkRhdGFDaGFuZ2UoZGF0YSwgdGhpcy5zdGF0ZS50YWJsZSwgdGhpcyk7XG5cdFx0aWYoX3JldHVybiA9PT0gZmFsc2Upe1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRpZih0eXBlb2YgX3JldHVybiA9PSAnb2JqZWN0Jykge1xuXHRcdFx0ZGF0YSA9IF9yZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuc3RhdGUudGFibGUuc3RhdGUuZGF0YSA9IGRhdGE7XG5cdFx0dGhpcy5zdGF0ZS50YWJsZS5mb3JjZVVwZGF0ZSgpO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cdGdldERhdGE6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB0aGlzLnN0YXRlLnRhYmxlLmdldERhdGEoKTtcblx0fSxcblx0YWRkUm93OiBmdW5jdGlvbiAoZGF0YSl7XG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLm9uRGF0YUNoYW5nZSAmJiB0aGlzLnByb3BzLm9uRGF0YUNoYW5nZShbZGF0YV0sIHRoaXMuc3RhdGUudGFibGUsIHRoaXMpO1xuXHRcdGlmKF9yZXR1cm4gPT09IGZhbHNlKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0aWYoem4uaXMoX3JldHVybiwgJ2FycmF5JykpIHtcblx0XHRcdGRhdGEgPSBfcmV0dXJuO1xuXHRcdH1lbHNlIGlmKHpuLmlzKF9yZXR1cm4sICdvYmplY3QnKSl7XG5cdFx0XHRkYXRhID0gWyBkYXRhIF07XG5cdFx0fVxuXG5cdFx0dGhpcy5zdGF0ZS50YWJsZS5zdGF0ZS5kYXRhID0gdGhpcy5zdGF0ZS50YWJsZS5zdGF0ZS5kYXRhLmNvbmNhdChkYXRhKTtcblx0XHR0aGlzLnN0YXRlLnRhYmxlLmZvcmNlVXBkYXRlKCk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8VGFibGUgey4uLnRoaXMucHJvcHN9IHJlZj17KHJlZikgPT4gdGhpcy5zdGF0ZS50YWJsZSA9IHJlZn0gY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItdGFibGUtZWRpdG9yJywgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBjb2x1bW5JdGVyYXRvcj17dGhpcy5fX2NvbHVtbkl0ZXJhdG9yfSAvPlxuXHRcdClcblx0fVxufSk7IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFRhYmxlID0gcmVxdWlyZSgnLi9UYWJsZScpO1xudmFyIHBhZ2VyID0gcmVxdWlyZSgnem51aS1yZWFjdC1wYWdlcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSVGFibGVQYWdlcicsXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNvdW50OiAwLFxuXHRcdFx0Y3VycmVudDogMSxcblx0XHRcdGRhdGE6IFtdLFxuXHRcdFx0dG90YWw6IDAsXG5cdFx0XHRwYWdlSW5kZXg6IHRoaXMucHJvcHMucGFnZUluZGV4IHx8IDEsXG5cdFx0XHRwYWdlU2l6ZTogdGhpcy5wcm9wcy5wYWdlU2l6ZSB8fCAxMCxcblx0XHR9O1xuXHR9LFxuXHRjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24oKXtcblx0XHR0aGlzLnByb3BzLm9uQ29tcG9uZW50RGlkTW91bnQgJiYgdGhpcy5wcm9wcy5vbkNvbXBvbmVudERpZE1vdW50KHRoaXMpO1xuXHR9LFxuXHRyZXNldENoZWNrZWRzOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4gdGhpcy5fdGFibGUuc2V0U3RhdGUoe1xuXHRcdFx0Y2hlY2tlZHM6IFtdXG5cdFx0fSksIHRoaXM7XG5cdH0sXG5cdHNldFBhZ2VJbmRleDogZnVuY3Rpb24gKHBhZ2VJbmRleCwgYXJndiwgY2FsbGJhY2spe1xuXHRcdGlmKHRoaXMuZGF0YSl7XG5cdFx0XHRpZihhcmd2ICYmIGFyZ3YuX19yZXNldF9fKXtcblx0XHRcdFx0YXJndi5fX3Jlc2V0X18gPSBudWxsO1xuXHRcdFx0XHRkZWxldGUgYXJndi5fX3Jlc2V0X187XG5cdFx0XHRcdGlmKHBhZ2VJbmRleCA9PSAxKSB7XG5cdFx0XHRcdFx0dGhpcy5fdGFibGUuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdFx0Y2hlY2tlZHM6IFtdXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRoaXMuc3RhdGUucGFnZUluZGV4ID0gcGFnZUluZGV4O1xuXHRcdFx0dGhpcy5zdGF0ZS5jdXJyZW50ID0gcGFnZUluZGV4O1xuXHRcdFx0dGhpcy5mb3JjZVVwZGF0ZSgpO1xuXHRcdFx0dGhpcy5kYXRhLl9hcmd2ID0gdGhpcy5fX29uRGF0YUluaXRpYWwodGhpcy5wcm9wcy5kYXRhKTtcblx0XHRcdGlmKGFyZ3YgJiYgdHlwZW9mIGFyZ3YgPT0gJ29iamVjdCcpe1xuXHRcdFx0XHRpZighdGhpcy5kYXRhLl9hcmd2LmRhdGEpe1xuXHRcdFx0XHRcdHRoaXMuZGF0YS5fYXJndi5kYXRhID0ge307XG5cdFx0XHRcdH1cblx0XHRcdFx0Zm9yKHZhciBrZXkgaW4gYXJndil7XG5cdFx0XHRcdFx0dGhpcy5kYXRhLl9hcmd2LmRhdGFba2V5XSA9IGFyZ3Zba2V5XTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGhpcy5kYXRhLnJlZnJlc2goY2FsbGJhY2spO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXHRyZWZyZXNoOiBmdW5jdGlvbiAoY2FsbGJhY2ssIHJlc2V0KXtcblx0XHRpZih0aGlzLl90YWJsZSl7XG5cdFx0XHR0aGlzLl90YWJsZS5yZWZyZXNoKGNhbGxiYWNrLCByZXNldCk7XG5cdFx0fVxuXHR9LFxuXHRfX2hhbmRsZVBhZ2VDaGFuZ2VkOiBmdW5jdGlvbiAobmV3UGFnZSl7XG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLm9uUGFnZUNoYW5nZWQgJiYgdGhpcy5wcm9wcy5vblBhZ2VDaGFuZ2VkKG5ld1BhZ2UsIHRoaXMpO1xuXHRcdGlmKF9yZXR1cm4gIT09IGZhbHNlKSB7XG5cdFx0XHR0aGlzLnNldFBhZ2VJbmRleChuZXdQYWdlKTtcblx0XHR9XG5cdH0sXG5cdF9faGFuZGxlUGFnZVNpemVDaGFuZ2U6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRwYWdlU2l6ZTogZXZlbnQudGFyZ2V0LnZhbHVlXG5cdFx0fSwgKCk9PnRoaXMuc2V0UGFnZUluZGV4KDEpKTtcblx0fSxcblx0X19yZW5kZXJQYWdlcjogZnVuY3Rpb24gKGNvbHVtbnMsIHRhYmxlKXtcblx0XHR2YXIgX2NvbHVtblNpemUgPSBjb2x1bW5zLmxlbmd0aDtcblx0XHRpZighX2NvbHVtblNpemUpe1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdHZhciBfc3RhdGUgPSB0aGlzLnN0YXRlLFxuXHRcdFx0X2VsZW1lbnQgPSBudWxsLFxuXHRcdFx0X3BhZ2VyUHJvcHMgPSB7XG5cdFx0XHRcdHRvdGFsOiBfc3RhdGUudG90YWwsXG5cdFx0XHRcdGNvdW50OiBfc3RhdGUuY291bnQsXG5cdFx0XHRcdGN1cnJlbnQ6IF9zdGF0ZS5jdXJyZW50LFxuXHRcdFx0XHRwYWdlU2l6ZTogX3N0YXRlLnBhZ2VTaXplLFxuXHRcdFx0XHRvblBhZ2VDaGFuZ2VkOiB0aGlzLl9faGFuZGxlUGFnZUNoYW5nZWQsXG5cdFx0XHRcdG9uUGFnZVNpemVDaGFuZ2U6IHRoaXMuX19oYW5kbGVQYWdlU2l6ZUNoYW5nZVxuXHRcdFx0fSxcblx0XHRcdF9Db21wb25lbnQgPSB0aGlzLnByb3BzLnBhZ2VyIHx8IHBhZ2VyLlBhZ2VyO1xuXHRcdGlmKHpuLmlzKF9Db21wb25lbnQsICdzdHJpbmcnKSl7XG5cdFx0XHRfQ29tcG9uZW50ID0gem4ucGF0aCh3aW5kb3csIF9Db21wb25lbnQpO1xuXHRcdH1lbHNlIGlmKHpuLmlzKF9Db21wb25lbnQsICdvYmplY3QnKSAmJiBfQ29tcG9uZW50LmNvbXBvbmVudCl7XG5cdFx0XHRfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KF9Db21wb25lbnQuY29tcG9uZW50LCB6bi5leHRlbmQoe30sIF9Db21wb25lbnQsIF9wYWdlclByb3BzKSk7XG5cdFx0fVxuXG5cdFx0aWYodGhpcy5wcm9wcy5wYWdlclJlbmRlcil7XG5cdFx0XHRfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMucGFnZXJSZW5kZXIsIF9wYWdlclByb3BzKTtcblx0XHR9XG5cblx0XHRpZighX2VsZW1lbnQgJiYgX0NvbXBvbmVudCAmJiB6bi5pcyhfQ29tcG9uZW50LCAnZnVuY3Rpb24nKSl7XG5cdFx0IFx0X2VsZW1lbnQgPSA8X0NvbXBvbmVudCB7Li4uX3BhZ2VyUHJvcHN9IC8+O1xuXHRcdH1cblxuXHRcdGlmKHRoaXMucHJvcHMuZml4ZWRMYXlvdXQpIHtcblx0XHRcdHJldHVybiAoPGRpdj57X2VsZW1lbnR9PC9kaXY+KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PHRmb290IGNsYXNzTmFtZT1cInRhYmxlLXBhZ2VyXCI+XG5cdFx0XHRcdDx0ciBjbGFzc05hbWU9XCJwYWdlci1yb3dcIj5cblx0XHRcdFx0XHQ8dGQgY29sU3Bhbj17X2NvbHVtblNpemV9PntfZWxlbWVudH08L3RkPlxuXHRcdFx0XHQ8L3RyPlxuXHRcdFx0PC90Zm9vdD5cblx0XHQpO1xuXHR9LFxuXHRfX29uRGF0YUluaXRpYWw6IGZ1bmN0aW9uIChkYXRhKXtcblx0XHR2YXIgX21ldGhvZCA9IGRhdGEubWV0aG9kfHwncG9zdCcsXG5cdFx0XHRfcGFyYW1zID0ge30sXG5cdFx0XHRfa2V5TWFwcyA9IHpuLmRlZXBBc3NpZ24oe1xuXHRcdFx0XHR0b3RhbDogXCJ0b3RhbFwiLFxuXHRcdFx0XHRwYWdlSW5kZXg6ICdwYWdlSW5kZXgnLFxuXHRcdFx0XHRwYWdlU2l6ZTogJ3BhZ2VTaXplJyxcblx0XHRcdFx0ZGF0YTogJ2RhdGEnXG5cdFx0XHR9LCB0aGlzLnByb3BzLmtleU1hcHMpO1xuXG5cdFx0X3BhcmFtc1tfa2V5TWFwcy5wYWdlSW5kZXhdID0gdGhpcy5zdGF0ZS5wYWdlSW5kZXggfHwgMTtcblx0XHRfcGFyYW1zW19rZXlNYXBzLnBhZ2VTaXplXSA9IHRoaXMuc3RhdGUucGFnZVNpemUgfHwgMTA7XG5cdFx0aWYoX21ldGhvZCA9PSAnZ2V0Jyl7XG5cdFx0XHRkYXRhID0gem4uZGVlcEFzc2lnbihkYXRhLCB7XG5cdFx0XHRcdHBhcmFtczogX3BhcmFtc1xuXHRcdFx0fSk7XG5cdFx0fWVsc2V7XG5cdFx0XHRkYXRhID0gem4uZGVlcEFzc2lnbihkYXRhLCB7XG5cdFx0XHRcdGRhdGE6IF9wYXJhbXNcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRcblx0XHRyZXR1cm4gdGhpcy5zdGF0ZS5rZXlNYXBzID0gX2tleU1hcHMsIGRhdGE7XG5cdH0sXG5cdF9fb25EYXRhQ3JlYXRlZDogZnVuY3Rpb24gKGRhdGEsIHRhYmxlKXtcblx0XHR0aGlzLmRhdGEgPSBkYXRhO1xuXHRcdHRoaXMucHJvcHMub25EYXRhQ3JlYXRlZCAmJiB0aGlzLnByb3BzLm9uRGF0YUNyZWF0ZWQoZGF0YSwgdGFibGUsIHRoaXMpO1xuXHR9LFxuXHRfX29uRGF0YUxvYWRlZDogZnVuY3Rpb24gKGRhdGEsIHRhYmxlKXtcblx0XHRpZih0aGlzLnByb3BzLnp4bnope1xuXHRcdFx0aWYoem4uaXMoZGF0YSwgJ29iamVjdCcpICYmIGRhdGEuY29kZSAhPSAyMDApe1xuXHRcdFx0XHRyZXR1cm4gY29uc29sZS5lcnJvcihkYXRhLmRldGFpbCksIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0aWYoem4uaXMoZGF0YSwgJ29iamVjdCcpICYmIGRhdGEuY29kZSA9PSAyMDApe1xuXHRcdFx0XHRkYXRhID0gZGF0YS5yZXN1bHQ7XG5cdFx0XHR9XG5cdFx0XHRpZighem4uaXMoZGF0YSwgJ2FycmF5Jykpe1xuXHRcdFx0XHRyZXR1cm4gY29uc29sZS5lcnJvcihcIlRhYmxlUGFnZXIgQ29tcG9uZW50IERhdGEgVHlwZSBFcnJvci5cIiksIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0dmFyIF9kYXRhID0gZGF0YVswXSxcblx0XHRcdFx0X3BhZ2VyQ291bnQgPSBkYXRhWzFdWzBdLmNvdW50O1xuXHRcdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLm9uRGF0YUxvYWRlZCAmJiB0aGlzLnByb3BzLm9uRGF0YUxvYWRlZChfZGF0YSwgdGFibGUsIHRoaXMpO1xuXHRcdFx0aWYoX3JldHVybiAhPT0gZmFsc2Upe1xuXHRcdFx0XHR0YWJsZS5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0ZGF0YTogX2RhdGFcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdHRvdGFsOiBNYXRoLmNlaWwoX3BhZ2VyQ291bnQvdGhpcy5zdGF0ZS5wYWdlU2l6ZSksXG5cdFx0XHRcdFx0Y291bnQ6IF9wYWdlckNvdW50LFxuXHRcdFx0XHRcdGN1cnJlbnQ6IHRoaXMuc3RhdGUuY3VycmVudCxcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fWVsc2V7XG5cdFx0XHRpZih6bi5pcyhkYXRhLCAnYXJyYXknKSl7XG5cdFx0XHRcdHJldHVybiBjb25zb2xlLmVycm9yKCdUaGUgZGF0YSBpcyBhcnJheSwgYnV0IGl0IG5lZWQgcmV0dXJuIG9iamVjdCcpLCBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHZhciBfZGF0YSA9IGRhdGEuZGF0YTtcblx0XHRcdHZhciBfcmV0dXJuID0gdGhpcy5wcm9wcy5vbkRhdGFMb2FkZWQgJiYgdGhpcy5wcm9wcy5vbkRhdGFMb2FkZWQoX2RhdGEsIHRhYmxlLCB0aGlzKTtcblx0XHRcdGlmKF9yZXR1cm4gIT09IGZhbHNlKXtcblx0XHRcdFx0dGFibGUuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdGRhdGE6IF9kYXRhW3RoaXMuc3RhdGUua2V5TWFwcy5kYXRhXVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0dG90YWw6IE1hdGguY2VpbChfZGF0YVt0aGlzLnN0YXRlLmtleU1hcHMudG90YWxdL3RoaXMuc3RhdGUucGFnZVNpemUpLFxuXHRcdFx0XHRcdGNvdW50OiBfZGF0YVt0aGlzLnN0YXRlLmtleU1hcHMudG90YWxdLFxuXHRcdFx0XHRcdGN1cnJlbnQ6IF9kYXRhW3RoaXMuc3RhdGUua2V5TWFwcy5wYWdlSW5kZXhdXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fSxcblx0X19vbkZpbHRlckNoYW5nZTogZnVuY3Rpb24gKGZpbHRlcnMsIGRhdGEsIHRhYmxlKXtcblx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMub25GaWx0ZXJDaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkZpbHRlckNoYW5nZShmaWx0ZXJzLCBkYXRhLCB0YWJsZSk7XG5cdFx0aWYoX3JldHVybiAhPT0gZmFsc2Upe1xuXHRcdFx0dGhpcy5zZXRQYWdlSW5kZXgoMSwge1xuXHRcdFx0XHRmaWx0ZXJzOiBmaWx0ZXJzXG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PFRhYmxlIHsuLi50aGlzLnByb3BzfSBcblx0XHRcdFx0Y2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItdGFibGUtcGFnZXInLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IFxuXHRcdFx0XHRjaGlsZHJlblJlbmRlcj17dGhpcy5fX3JlbmRlclBhZ2VyfVxuXHRcdFx0XHRvbkNvbXBvbmVudERpZE1vdW50PXsodGFibGUpPT57IFxuXHRcdFx0XHRcdHRoaXMuX3RhYmxlID0gdGFibGU7IFxuXHRcdFx0XHR9fVxuXHRcdFx0XHRvbkZpbHRlckNoYW5nZT17dGhpcy5fX29uRmlsdGVyQ2hhbmdlfVxuXHRcdFx0XHRvbkRhdGFJbml0aWFsPXt0aGlzLl9fb25EYXRhSW5pdGlhbH1cblx0XHRcdFx0b25EYXRhQ3JlYXRlZD17dGhpcy5fX29uRGF0YUNyZWF0ZWR9XG5cdFx0XHRcdG9uRGF0YUxvYWRlZD17dGhpcy5fX29uRGF0YUxvYWRlZH0gLz5cblx0XHQpO1xuXHR9XG59KTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgQ2hlY2tib3ggPSByZXF1aXJlKCd6bnVpLXJlYWN0LXNlbGVjdG9yJykuQ2hlY2tib3g7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJUQ2VsbENoZWNrYm94Jyxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNoZWNrZWQ6IHRoaXMucHJvcHMuY2hlY2tlZCB8fCBmYWxzZVxuXHRcdH1cblx0fSxcblx0X19vbkNoZWNrYm94Q2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdGlmKHRoaXMucHJvcHMudGhlYWQpIHtcblx0XHRcdHRoaXMuX19vbkhlYWRDaGFuZ2UoZXZlbnQpO1xuXHRcdH1lbHNlIGlmKHRoaXMucHJvcHMudGJvZHkpIHtcblx0XHRcdHRoaXMuX19vbkJvZHlDaGFuZ2UoZXZlbnQpO1xuXHRcdH1cblx0fSxcblx0X19vbkhlYWRDaGFuZ2U6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0Y29uc29sZS5sb2coZXZlbnQuY2hlY2tlZCwgdGhpcy5wcm9wcyk7XG5cdH0sXG5cdF9fb25Cb2R5Q2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdGNvbnNvbGUubG9nKGV2ZW50LmNoZWNrZWQsIHRoaXMucHJvcHMpO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwienItdGFibGUtY2VsbC1jaGVja2JveFwiPjxDaGVja2JveCBjaGVja2VkPXt0cnVlfSBvbkNoYW5nZT17dGhpcy5fX29uQ2hlY2tib3hDaGFuZ2V9Lz48L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIENoZWNrYm94OiByZXF1aXJlKCcuL0NoZWNrYm94JyksXG4gICAgLy9CdXR0b25zOiByZXF1aXJlKCcuL0J1dHRvbnMnKSxcbiAgICAvL0lucHV0OiByZXF1aXJlKCcuL0lucHV0JyksXG4gICAgLy9DYWxjdWxhdG9yOiByZXF1aXJlKCcuL0NhbGN1bGF0b3InKVxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICB0YWJsZTogcmVxdWlyZSgnLi90YWJsZS9pbmRleCcpLFxuICAgIGNlbGw6IHJlcXVpcmUoJy4vY2VsbC9pbmRleCcpLFxuICAgIFBvcHVwVGFibGU6IHJlcXVpcmUoJy4vUG9wdXBUYWJsZScpLFxuICAgIFRhYmxlOiByZXF1aXJlKCcuL1RhYmxlJyksXG4gICAgVGFibGVFZGl0b3I6IHJlcXVpcmUoJy4vVGFibGVFZGl0b3InKSxcbiAgICBUYWJsZVBhZ2VyOiByZXF1aXJlKCcuL1RhYmxlUGFnZXInKVxufTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJUYWJsZUNvbGdyb3VwJyxcblx0X192YWxpZGF0ZUNvbHVtbjogZnVuY3Rpb24gKGNvbHVtbiwgaW5kZXgpe1xuXHRcdGlmKGNvbHVtbi52YWxpZGF0ZSA9PT0gZmFsc2UpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0aWYoem4uaXMoY29sdW1uLnZhbGlkYXRlLCAnZnVuY3Rpb24nKSkge1xuXHRcdFx0dmFyIF9yZXR1cm4gPSBjb2x1bW4udmFsaWRhdGUuYXBwbHkobnVsbCwgW2NvbHVtbiwgaW5kZXhdKTtcblx0XHRcdGlmKF9yZXR1cm4gPT09IGZhbHNlKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZVxuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHZhciBfa2V5TWFwcGluZyA9IHRoaXMucHJvcHMua2V5TWFwcGluZyB8fCB7IH07XG5cdFx0cmV0dXJuIChcblx0XHRcdDxjb2xncm91cD5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdCh0aGlzLnByb3BzLmNvbHVtbnN8fFtdKS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG5cdFx0XHRcdFx0XHRpZih0aGlzLl9fdmFsaWRhdGVDb2x1bW4oaXRlbSwgaW5kZXgpID09PSBmYWxzZSl7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0dmFyIF93aWR0aEtleSA9IF9rZXlNYXBwaW5nLndpZHRoIHx8ICd3aWR0aCcsIF93aWR0aFZhbHVlID0gaXRlbVtfd2lkdGhLZXldO1xuXHRcdFx0XHRcdFx0c3dpdGNoKHpuLnR5cGUoX3dpZHRoVmFsdWUpKSB7XG5cdFx0XHRcdFx0XHRcdGNhc2UgJ2Z1bmN0aW9uJzpcblx0XHRcdFx0XHRcdFx0XHRfd2lkdGhWYWx1ZSA9IF93aWR0aFZhbHVlLmFwcGx5KG51bGwsIFtpdGVtLCBpbmRleF0pO1xuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRyZXR1cm4gPGNvbCBrZXk9e2luZGV4fSBzdHlsZT17eyB3aWR0aDogX3dpZHRoVmFsdWUgfX0gLz47XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fVxuXHRcdFx0PC9jb2xncm91cD5cblx0XHQpO1xuXHR9XG59KTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBUUm93ID0gcmVxdWlyZSgnLi9UUm93Jyk7XG52YXIgbG9hZGVyID0gcmVxdWlyZSgnem51aS1yZWFjdC1sb2FkZXInKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUlRCb2R5Jyxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpe1xuXHRcdHZhciBfcGFnZVNpemUgPSB0aGlzLnByb3BzLnBhZ2VTaXplIHx8IDUwO1xuXHRcdHZhciBfY29sdW1uS2V5TWFwID0ge30sIF9kZWZhdWx0ID0ge307XG5cdFx0Zm9yKHZhciBjb2x1bW4gb2YgdGhpcy5wcm9wcy5jb2x1bW5zKXtcblx0XHRcdF9jb2x1bW5LZXlNYXBbY29sdW1uLm5hbWVdID0gY29sdW1uO1xuXHRcdFx0aWYoY29sdW1uLnZhbHVlICE9PSBudWxsICYmIGNvbHVtbi52YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdF9kZWZhdWx0W2NvbHVtbi5uYW1lXSA9IGNvbHVtbi52YWx1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0YWN0aXZlOiBudWxsLFxuXHRcdFx0Y2hlY2tlZHM6IFtdLFxuXHRcdFx0Y2xhc3NOYW1lOiAnJyxcblx0XHRcdGNvbHVtbktleU1hcDogX2NvbHVtbktleU1hcCxcblx0XHRcdGRlZmF1bHQ6IF9kZWZhdWx0LFxuXHRcdFx0cGFnZUluZGV4OiB0aGlzLnByb3BzLnBhZ2VJbmRleCB8fCAxLFxuXHRcdFx0cGFnZVNpemU6IF9wYWdlU2l6ZSxcblx0XHRcdHN0eWxlOiB7fSxcblx0XHRcdGxvYWRpbmc6IGZhbHNlXG5cdFx0fTtcblx0fSxcblx0Y29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uICgpe1xuXHRcdGZvcih2YXIgaXRlbSBvZiB0aGlzLnByb3BzLmRhdGEpe1xuXHRcdFx0dGhpcy5fX2luaXRpYWxEYXRhSXRlbShpdGVtKTtcblx0XHR9XG5cdH0sXG5cdF9faW5pdGlhbERhdGFJdGVtOiBmdW5jdGlvbiAoZGF0YSl7XG5cdFx0dmFyIF9kZWZhdWx0ID0gdGhpcy5zdGF0ZS5kZWZhdWx0LCBfY29sdW1uS2V5TWFwID0gdGhpcy5zdGF0ZS5jb2x1bW5LZXlNYXAsIF92YWx1ZSA9IG51bGw7XG5cdFx0Zm9yKHZhciBrZXkgaW4gX2RlZmF1bHQpe1xuXHRcdFx0X3ZhbHVlID0gX2RlZmF1bHRba2V5XTtcblx0XHRcdGlmKHR5cGVvZiBfdmFsdWUgPT0gJ3N0cmluZycgJiYgX3ZhbHVlLmluZGV4T2YoJ3snKSAhPSAtMSAmJiBfdmFsdWUuaW5kZXhPZignfScpICE9LTEpIHtcblx0XHRcdFx0X3ZhbHVlID0gX3ZhbHVlLmZvcm1hdChkYXRhfHx7fSk7XG5cdFx0XHRcdGlmKF9jb2x1bW5LZXlNYXBba2V5XSkge1xuXHRcdFx0XHRcdHN3aXRjaChfY29sdW1uS2V5TWFwW2tleV0uZGF0YVR5cGUpIHtcblx0XHRcdFx0XHRcdGNhc2UgJ051bWJlcic6XG5cdFx0XHRcdFx0XHRcdGlmKF92YWx1ZS5pbmRleE9mKCd7JykgPT0gLTEpe1xuXHRcdFx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRfdmFsdWUgPSBldmFsKF92YWx1ZSk7XG5cdFx0XHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRfdmFsdWUgPSAwO1xuXHRcdFx0XHRcdFx0XHRcdFx0em4uZXJyb3IoZXJyKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRjYXNlICdQcmljZSc6XG5cdFx0XHRcdFx0XHRcdF92YWx1ZSA9IHpudWkucmVhY3Quc3RyaW5naWZ5UHJpY2UoX3ZhbHVlKTtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0ZGF0YVtrZXldID0gX3ZhbHVlO1xuXHRcdFx0fVxuXG5cblx0XHRcdGlmKGRhdGFba2V5XSA9PSBudWxsKSB7XG5cdFx0XHRcdGRhdGFba2V5XSA9IF92YWx1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gZGF0YTtcblx0fSxcblx0X19nZXREYXRhOiBmdW5jdGlvbiAocGFnZUluZGV4LCBwYWdlU2l6ZSl7XG5cdFx0dmFyIF9wYWdlSW5kZXggPSBwYWdlSW5kZXggfHwgdGhpcy5zdGF0ZS5wYWdlSW5kZXg7XG5cdFx0dmFyIF9wYWdlU2l6ZSA9IHBhZ2VTaXplIHx8IHRoaXMuc3RhdGUucGFnZVNpemU7XG5cdFx0cmV0dXJuIHRoaXMucHJvcHMuZGF0YS5zbGljZSgoX3BhZ2VJbmRleC0xKSAqIF9wYWdlU2l6ZSwgTWF0aC5taW4oX3BhZ2VJbmRleCAqIF9wYWdlU2l6ZSwgdGhpcy5wcm9wcy5kYXRhLmxlbmd0aCkpO1xuXHR9LFxuXHRfX3JlbmRlckxvYWRpbmc6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMubG9hZGluZ1JlbmRlciwge1xuXHRcdFx0dGJvZHk6IHRoaXNcblx0XHR9LCB0aGlzLnByb3BzLmNvbnRleHQpO1xuXG5cdFx0aWYoIV9lbGVtZW50KXtcblx0XHQgXHRfZWxlbWVudCA9IDxsb2FkZXIuRGF0YUxvYWRlciBsb2FkZXI9XCJ3YXZlXCIgdGl0bGU9eydMb2FkaW5nLi4uJ30gLz47XG5cdFx0fVxuXG5cdFx0dmFyIF9sb2FkaW5nID0gem4uZXh0ZW5kKHsgY2xhc3NOYW1lOiAnJywgc3R5bGU6IHt9IH0sIHRoaXMucHJvcHMubG9hZGluZyk7XG5cdFx0cmV0dXJuIChcblx0XHRcdDx0ciBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwidGJvZHktbG9hZGluZ1wiLCBfbG9hZGluZy5jbGFzc05hbWUpfSBzdHlsZT17X2xvYWRpbmcuc3R5bGV9PlxuXHRcdFx0XHQ8dGQgY29sU3Bhbj17dGhpcy5wcm9wcy5jb2x1bW5zLmxlbmd0aH0+e19lbGVtZW50fTwvdGQ+XG5cdFx0XHQ8L3RyPlxuXHRcdCk7XG5cdH0sXG5cdF9fcmVuZGVyRW1wdHk6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMuZW1wdHlSZW5kZXIsIHtcblx0XHRcdHRib2R5OiB0aGlzXG5cdFx0fSwgdGhpcy5wcm9wcy5jb250ZXh0KTtcblxuXHRcdGlmKCFfZWxlbWVudCl7XG5cdFx0IFx0X2VsZW1lbnQgPSAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZW1wdHktY29udGVudFwiPlxuXHRcdFx0XHRcdDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhc1wiIGRhdGEtaWNvbj1cImRlc2t0b3BcIiBjbGFzc05hbWU9XCJzdmctaW5saW5lLS1mYSBmYS1kZXNrdG9wIGZhLXctMTggXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDU3NiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk01MjggMEg0OEMyMS41IDAgMCAyMS41IDAgNDh2MzIwYzAgMjYuNSAyMS41IDQ4IDQ4IDQ4aDE5MmwtMTYgNDhoLTcyYy0xMy4zIDAtMjQgMTAuNy0yNCAyNHMxMC43IDI0IDI0IDI0aDI3MmMxMy4zIDAgMjQtMTAuNyAyNC0yNHMtMTAuNy0yNC0yNC0yNGgtNzJsLTE2LTQ4aDE5MmMyNi41IDAgNDgtMjEuNSA0OC00OFY0OGMwLTI2LjUtMjEuNS00OC00OC00OHptLTE2IDM1Mkg2NFY2NGg0NDh2Mjg4elwiPjwvcGF0aD48L3N2Zz5cblx0XHRcdFx0XHQ8c3Bhbj5FbXB0eTwvc3Bhbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH1cblx0XHR2YXIgX2VtcHR5ID0gem4uZXh0ZW5kKHsgY2xhc3NOYW1lOiAnJywgc3R5bGU6IHt9IH0sIHRoaXMucHJvcHMuZW1wdHkpO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8dHIgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInRib2R5LWVtcHR5XCIsIF9lbXB0eS5jbGFzc05hbWUpfSBzdHlsZT17X2VtcHR5LnN0eWxlfT5cblx0XHRcdFx0PHRkIGNvbFNwYW49e3RoaXMucHJvcHMuY29sdW1ucy5sZW5ndGh9PntfZWxlbWVudH08L3RkPlxuXHRcdFx0PC90cj5cblx0XHQpO1xuXHR9LFxuXHRfX29uUm93Q2xpY2s6IGZ1bmN0aW9uIChldmVudCkge1xuXHRcdHZhciBfZGF0YSA9IGV2ZW50LmRhdGE7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRhY3RpdmU6IF9kYXRhLnRyb3cucHJvcHMuZGF0YVxuXHRcdH0pO1xuXHRcdGV2ZW50LnRib2R5ID0gdGhpcztcblx0XHR0aGlzLnByb3BzLm9uUm93Q2xpY2sgJiYgdGhpcy5wcm9wcy5vblJvd0NsaWNrKGV2ZW50KTtcblx0fSxcblx0X19vbkNlbGxDbGljazogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHRldmVudC50Ym9keSA9IHRoaXM7XG5cdFx0dGhpcy5wcm9wcy5vbkNlbGxDbGljayAmJiB0aGlzLnByb3BzLm9uQ2VsbENsaWNrKGV2ZW50KTtcblx0fSxcblx0X19yZW5kZXJSb3c6IGZ1bmN0aW9uIChpdGVtLCBpbmRleCl7XG5cdFx0aWYoIXpuLmlzKGl0ZW0sICdvYmplY3QnKSkgeyByZXR1cm4gbnVsbDt9XG5cdFx0dmFyIF90ZW1wID0gdGhpcy5wcm9wcy5lYWNoUm93RGF0YSAmJiB0aGlzLnByb3BzLmVhY2hSb3dEYXRhKGl0ZW0sIGluZGV4LCB0aGlzKTtcblx0XHRpZihfdGVtcCAmJiB6bi5pcyhfdGVtcCwgJ29iamVjdCcpKXtcblx0XHRcdGl0ZW0gPSBfdGVtcDtcblx0XHR9XG5cdFx0dmFyIF9lbGVtZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQodGhpcy5wcm9wcy5yb3dSZW5kZXIsIHtcblx0XHRcdGRhdGE6IGl0ZW0sXG5cdFx0XHRyb3dJbmRleDogaW5kZXgsXG5cdFx0XHR0Ym9keTogdGhpc1xuXHRcdH0sIHRoaXMucHJvcHMuY29udGV4dCk7XG5cblx0XHRpZihfZWxlbWVudCl7XG5cdFx0XHRyZXR1cm4gX2VsZW1lbnQ7XG5cdFx0fVxuXHRcdHZhciBfcm93S2V5ID0gdGhpcy5wcm9wcy5yb3dLZXk7XG5cdFx0dmFyIF9rZXkgPSBpdGVtW19yb3dLZXldIHx8IGluZGV4O1xuXHRcdHJldHVybiA8VFJvdyBrZXk9e19rZXkgKyAnLScgKyBpbmRleH0gcm93SW5kZXg9e2luZGV4fSB7Li4udGhpcy5wcm9wcy5yb3d9IFxuXHRcdFx0XHRcdGNvbnRleHQ9e3RoaXMucHJvcHMuY29udGV4dH0gXG5cdFx0XHRcdFx0Y2VsbD17dGhpcy5wcm9wcy5jZWxsfVxuXHRcdFx0XHRcdGNlbGxSZW5kZXI9e3RoaXMucHJvcHMuY2VsbFJlbmRlcn1cblx0XHRcdFx0XHRjb2x1bW5zPXt0aGlzLnByb3BzLmNvbHVtbnN9IFxuXHRcdFx0XHRcdGZpeGVkQ29sdW1ucz17dGhpcy5wcm9wcy5maXhlZENvbHVtbnN9XG5cdFx0XHRcdFx0dGJvZHk9e3RoaXN9XG5cdFx0XHRcdFx0YWN0aXZlPXt0aGlzLnN0YXRlLmFjdGl2ZSA9PSBpdGVtfSBcblx0XHRcdFx0XHRkYXRhPXtpdGVtfSBcblx0XHRcdFx0XHRjaGVja2VkPXt0aGlzLnN0YXRlLmNoZWNrZWRzLmluZGV4T2YoaXRlbSkgIT09IC0xfSBcblx0XHRcdFx0XHRvblJvd0NsaWNrPXt0aGlzLl9fb25Sb3dDbGlja31cblx0XHRcdFx0XHRvbkNlbGxDbGljaz17dGhpcy5fX29uQ2VsbENsaWNrfSAvPjtcblx0fSxcblx0X19wYWdlQ2hhbmdlOiBmdW5jdGlvbiAocGFnZUluZGV4KXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHBhZ2VJbmRleDogcGFnZUluZGV4XG5cdFx0fSk7XG5cdH0sXG5cdF9fcGFnZXNSZW5kZXI6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfcGFnZUNvdW50ID0gTWF0aC5jZWlsKHRoaXMucHJvcHMuZGF0YS5sZW5ndGggLyB0aGlzLnN0YXRlLnBhZ2VTaXplKSwgX3BhZ2VzID0gW107XG5cdFx0aWYoX3BhZ2VDb3VudCA+IDEpIHtcblx0XHRcdGZvcih2YXIgaSA9IDE7IGkgPCBfcGFnZUNvdW50ICsgMTsgaSsrKSB7IF9wYWdlcy5wdXNoKGkpOyB9XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8dHIgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInRib2R5LXBhZ2VzXCIsICcnKX0+XG5cdFx0XHRcdFx0PHRkIGNvbFNwYW49e3RoaXMucHJvcHMuY29sdW1ucy5sZW5ndGh9PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkYXRhLXBhZ2VcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwYWdlc1wiPlxuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdF9wYWdlcy5tYXAoKGksIGluZGV4KT0+e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gPHNwYW4ga2V5PXtpbmRleH0gY2xhc3NOYW1lPXsncGFnZSAnICsgKHRoaXMuc3RhdGUucGFnZUluZGV4PT1pPydhY3RpdmUnOicnKX0gb25DbGljaz17KCk9PnRoaXMuX19wYWdlQ2hhbmdlKGkpfT57aX08L3NwYW4+O1xuXHRcdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJwYWdlLWNvdW50XCI+5YWxIHt0aGlzLnByb3BzLmRhdGEubGVuZ3RofSDmnaE8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L3RkPlxuXHRcdFx0XHQ8L3RyPlxuXHRcdFx0KTtcblx0XHR9XG5cdH0sXG5cdF9fcmVuZGVyRGF0YTogZnVuY3Rpb24gKCl7XG5cdFx0aWYodGhpcy5wcm9wcy5kYXRhID09IG51bGwgfHwgKHRoaXMucHJvcHMuZGF0YSAmJiAhdGhpcy5wcm9wcy5kYXRhLmxlbmd0aCkpe1xuXHRcdFx0cmV0dXJuIHRoaXMuX19yZW5kZXJFbXB0eSgpO1xuXHRcdH1cblx0XHR2YXIgX3BhZ2VDb3VudCA9IE1hdGguY2VpbCh0aGlzLnByb3BzLmRhdGEubGVuZ3RoIC8gdGhpcy5zdGF0ZS5wYWdlU2l6ZSk7XG5cdFx0aWYoX3BhZ2VDb3VudCA+IDEpe1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PD5cblx0XHRcdFx0XHR7dGhpcy5fX3BhZ2VzUmVuZGVyKCl9XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGhpcy5fX2dldERhdGEodGhpcy5zdGF0ZS5wYWdlSW5kZXgsIHRoaXMuc3RhdGUucGFnZVNpemUpLm1hcCh0aGlzLl9fcmVuZGVyUm93KVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0PC8+XG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8PlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5kYXRhLm1hcCh0aGlzLl9fcmVuZGVyUm93KVxuXHRcdFx0XHR9XG5cdFx0XHQ8Lz5cblx0XHQpO1xuXHR9LFxuXHRfX3JlbmRlcjogZnVuY3Rpb24gKCl7XG5cdFx0aWYodGhpcy5wcm9wcy5sb2FkaW5nIHx8IHRoaXMuc3RhdGUubG9hZGluZykge1xuXHRcdFx0cmV0dXJuIHRoaXMuX19yZW5kZXJMb2FkaW5nKCk7XG5cdFx0fWVsc2V7XG5cdFx0XHRyZXR1cm4gdGhpcy5fX3JlbmRlckRhdGEoKTtcblx0XHR9XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHRib2R5IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci10YWJsZS10Ym9keVwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSwgdGhpcy5zdGF0ZS5jbGFzc05hbWUpfSBzdHlsZT17em51aS5yZWFjdC5zdHlsZSh0aGlzLnByb3BzLnN0eWxlLCB0aGlzLnN0YXRlLnN0eWxlKX0+XG5cdFx0XHRcdHsgdGhpcy5fX3JlbmRlcigpIH1cblx0XHRcdDwvdGJvZHk+XG5cdFx0KTtcblx0fVxufSk7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJUQm9keUVtcHR5Jyxcblx0X19yZW5kZXJFbXB0eTogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF9lbGVtZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQodGhpcy5wcm9wcy5lbXB0eVJlbmRlciwge1xuXHRcdFx0dGJvZHk6IHRoaXNcblx0XHR9LCB0aGlzLnByb3BzLmNvbnRleHQpO1xuXG5cdFx0aWYoIV9lbGVtZW50KXtcblx0XHQgXHRfZWxlbWVudCA9IDxkaXYgY2xhc3NOYW1lPVwiZW1wdHktY29udGVudFwiPlxuXHRcdFx0XHQgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFzXCIgZGF0YS1pY29uPVwiZGVza3RvcFwiIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUtLWZhIGZhLWRlc2t0b3AgZmEtdy0xOCBcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTc2IDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTUyOCAwSDQ4QzIxLjUgMCAwIDIxLjUgMCA0OHYzMjBjMCAyNi41IDIxLjUgNDggNDggNDhoMTkybC0xNiA0OGgtNzJjLTEzLjMgMC0yNCAxMC43LTI0IDI0czEwLjcgMjQgMjQgMjRoMjcyYzEzLjMgMCAyNC0xMC43IDI0LTI0cy0xMC43LTI0LTI0LTI0aC03MmwtMTYtNDhoMTkyYzI2LjUgMCA0OC0yMS41IDQ4LTQ4VjQ4YzAtMjYuNS0yMS41LTQ4LTQ4LTQ4em0tMTYgMzUySDY0VjY0aDQ0OHYyODh6XCI+PC9wYXRoPjwvc3ZnPlxuXHRcdFx0XHQgPHNwYW4+RW1wdHk8L3NwYW4+XG5cdFx0XHQgPC9kaXY+O1xuXHRcdH1cblx0XHR2YXIgX2VtcHR5ID0gem4uZXh0ZW5kKHsgY2xhc3NOYW1lOiAnJywgc3R5bGU6IHt9IH0sIHRoaXMucHJvcHMuZW1wdHkpO1xuXHRcdHJldHVybiA8dHIgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInRib2R5LWVtcHR5XCIsIF9lbXB0eS5jbGFzc05hbWUpfSBzdHlsZT17X2VtcHR5LnN0eWxlfT5cblx0XHRcdDx0ZCBjb2xTcGFuPXt0aGlzLnByb3BzLmNvbHVtbnMubGVuZ3RofT57X2VsZW1lbnR9PC90ZD5cblx0XHQ8L3RyPjtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8dGJvZHkgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXRhYmxlLXRib2R5LWVtcHR5XCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gc3R5bGU9e3pudWkucmVhY3Quc3R5bGUodGhpcy5wcm9wcy5zdHlsZSl9PlxuXHRcdFx0XHR7IHRoaXMuX19yZW5kZXJFbXB0eSgpIH1cblx0XHRcdDwvdGJvZHk+XG5cdFx0KTtcblx0fVxufSk7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUmVhY3RET00gPSB6bnVpLlJlYWN0RE9NIHx8IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSVENlbGwnLFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y2xhc3NOYW1lOiAnJyxcblx0XHRcdHN0eWxlOiB7fSxcblx0XHRcdGRpc2FibGVkOiB0aGlzLnByb3BzLmRpc2FibGVkLFxuXHRcdFx0Y2hlY2tlZDogdGhpcy5wcm9wcy5jaGVja2VkLFxuXHRcdFx0YWN0aXZlOiB0aGlzLnByb3BzLmFjdGl2ZVxuXHRcdH1cblx0fSxcblx0X19yZW5kZXJDZWxsQ29udGVudDogZnVuY3Rpb24gKCl7XG5cdFx0aWYodGhpcy5wcm9wcy5jaGlsZHJlbikge1xuXHRcdFx0cmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW47XG5cdFx0fVxuXHRcdFxuXHRcdHZhciBfdmFsdWUgPSBudWxsO1xuXHRcdGlmKHRoaXMucHJvcHMuZGF0YSAmJiB0aGlzLnByb3BzLm5hbWUpIHtcblx0XHRcdF92YWx1ZSA9IHRoaXMucHJvcHMuZGF0YVt0aGlzLnByb3BzLm5hbWVdO1xuXHRcdH1cblxuXHRcdHZhciBfcmVuZGVyID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQodGhpcy5wcm9wcy5yZW5kZXIgfHwgdGhpcy5wcm9wcy5ib2R5LCB7XG5cdFx0XHRyb3dJbmRleDogdGhpcy5wcm9wcy5yb3dJbmRleCxcblx0XHRcdGNlbGxJbmRleDogdGhpcy5wcm9wcy5jZWxsSW5kZXgsIFxuXHRcdFx0Y29sdW1uOiB0aGlzLnByb3BzLmNvbHVtbixcblx0XHRcdGRhdGE6IHRoaXMucHJvcHMuZGF0YSxcblx0XHRcdHZhbHVlOiBfdmFsdWUsXG5cdFx0XHR0Y2VsbDogdGhpcyxcblx0XHRcdHRyb3c6IHRoaXMucHJvcHMudHJvdyxcblx0XHRcdHRib2R5OiB0aGlzLnByb3BzLnRib2R5LFxuXHRcdFx0dGFibGU6IHRoaXMucHJvcHMudGJvZHkucHJvcHMudGFibGVcblx0XHR9LCB0aGlzLnByb3BzLmNvbnRleHQpO1xuXHRcdFxuXHRcdGlmKF9yZW5kZXIpe1xuXHRcdFx0cmV0dXJuIF9yZW5kZXI7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY2VsbC1sYWJlbFwiIHRpdGxlPXtfdmFsdWV9PntfdmFsdWV9PC9kaXY+O1xuXHR9LFxuXHRfX2NlbGxDbGljazogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHR2YXIgX3RoaXMgPSB0aGlzO1xuXHRcdGV2ZW50LmRhdGEgPSB7XG5cdFx0XHRmaW5kVERET006IGZ1bmN0aW9uICgpe1xuXHRcdFx0XHRyZXR1cm4gUmVhY3RET00uZmluZERPTU5vZGUoX3RoaXMpO1xuXHRcdFx0fSxcblx0XHRcdHRjZWxsOiB0aGlzXG5cdFx0fTtcblx0XHR0aGlzLnByb3BzLm9uQ2xpY2sgJiYgdGhpcy5wcm9wcy5vbkNsaWNrKGV2ZW50KTtcblx0XHR0aGlzLnByb3BzLm9uQ2VsbENsaWNrICYmIHRoaXMucHJvcHMub25DZWxsQ2xpY2soZXZlbnQpO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0dmFyIF9jb2x1bW4gPSB0aGlzLnByb3BzLmNvbHVtbiB8fCB7fTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHRkIGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci10YWJsZS10Y2VsbFwiLCAoX2NvbHVtbi5maXhlZD8nZml4ZWQnOicnKSwgdGhpcy5wcm9wcy5jbGFzc05hbWUsIF9jb2x1bW4uYm9keUNsYXNzTmFtZSwgdGhpcy5zdGF0ZS5jbGFzc05hbWUpfSBzdHlsZT17em51aS5yZWFjdC5zdHlsZSh0aGlzLnByb3BzLnN0eWxlLCBfY29sdW1uLmJvZHlTdHlsZSwgdGhpcy5zdGF0ZS5zdHlsZSwgX2NvbHVtbi5maXhlZFN0eWxlcyl9XHRcblx0XHRcdFx0ZGF0YS1kaXNhYmxlZD17dGhpcy5zdGF0ZS5kaXNhYmxlZH1cblx0XHRcdFx0ZGF0YS1jaGVja2VkPXt0aGlzLnN0YXRlLmNoZWNrZWR9XG5cdFx0XHRcdGRhdGEtYWN0aXZlPXt0aGlzLnN0YXRlLmFjdGl2ZX1cblx0XHRcdFx0b25DbGljaz17dGhpcy5fX2NlbGxDbGlja30gPlxuXHRcdFx0XHR7dGhpcy5fX3JlbmRlckNlbGxDb250ZW50KCl9XG5cdFx0XHQ8L3RkPlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIGZpbHRlciA9IHJlcXVpcmUoJ3pudWktcmVhY3QtZmlsdGVyJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTogJ1pSRmlsdGVyJyxcblx0Z2V0SW5pdGlhbFN0YXRlOmZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNsYXNzTmFtZTogJycsXG5cdFx0XHRzdHlsZToge30sXG5cdFx0XHRkYXRhOiB7fVxuXHRcdH1cblx0fSxcblx0X19vbkZpbHRlckNoYW5nZTogZnVuY3Rpb24gKGV2ZW50LCBpbnB1dCwgZmlsdGVyRmllbGQpe1xuXHRcdGlmKGV2ZW50Lm5hbWUgJiYgZXZlbnQub3B0KSB7XG5cdFx0XHRpZihldmVudC52YWx1ZSA9PT0gbnVsbCB8fCBldmVudC52YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IGV2ZW50LnZhbHVlID09PSAnJykge1xuXHRcdFx0XHR0aGlzLnN0YXRlLmRhdGFbZXZlbnQubmFtZV0gPSBudWxsO1xuXHRcdFx0XHRkZWxldGUgdGhpcy5zdGF0ZS5kYXRhW2V2ZW50Lm5hbWVdO1xuXHRcdFx0fWVsc2UgaWYoIWV2ZW50LnZhbHVlICYmIGlucHV0ICYmIGlucHV0LnByb3BzICYmICFpbnB1dC5wcm9wcy5lbXB0eVZhbHVlRW5hYmxlZCl7XG5cdFx0XHRcdHRoaXMuc3RhdGUuZGF0YVtldmVudC5uYW1lXSA9IG51bGw7XG5cdFx0XHRcdGRlbGV0ZSB0aGlzLnN0YXRlLmRhdGFbZXZlbnQubmFtZV07XG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0dGhpcy5zdGF0ZS5kYXRhW2V2ZW50Lm5hbWVdID0ge1xuXHRcdFx0XHRcdHZhbHVlOiBldmVudC52YWx1ZSxcblx0XHRcdFx0XHRvcHQ6IGV2ZW50Lm9wdFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdH1cblx0XHR0aGlzLnByb3BzLm9uRmlsdGVyQ2hhbmdlICYmIHRoaXMucHJvcHMub25GaWx0ZXJDaGFuZ2UoZXZlbnQsIHtcblx0XHRcdG5hbWU6IGV2ZW50Lm5hbWUsXG5cdFx0XHRvcHQ6IGV2ZW50Lm9wdCxcblx0XHRcdGlucHV0OiBpbnB1dCwgXG5cdFx0XHRmaWx0ZXJGaWVsZDogZmlsdGVyRmllbGQsXG5cdFx0XHRkYXRhOiB0aGlzLnN0YXRlLmRhdGFcblx0XHR9KTtcblx0XHR0aGlzLnByb3BzLm9uRmlsdGVyICYmIHRoaXMucHJvcHMub25GaWx0ZXIodGhpcy5zdGF0ZS5kYXRhKTtcblx0fSxcblx0X19vbkZpbHRlckNhbmNlbDogZnVuY3Rpb24gKG5hbWUpe1xuXHRcdGlmKG5hbWUgJiYgdGhpcy5zdGF0ZS5kYXRhKXtcblx0XHRcdHRoaXMuc3RhdGUuZGF0YVtuYW1lXSA9IG51bGw7XG5cdFx0XHRkZWxldGUgdGhpcy5zdGF0ZS5kYXRhW25hbWVdO1xuXHRcdH1cblx0fSxcblx0X192YWxpZGF0ZUNvbHVtbjogZnVuY3Rpb24gKGNvbHVtbiwgaW5kZXgpe1xuXHRcdGlmKGNvbHVtbi52YWxpZGF0ZSA9PT0gZmFsc2UpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0aWYoem4uaXMoY29sdW1uLnZhbGlkYXRlLCAnZnVuY3Rpb24nKSkge1xuXHRcdFx0dmFyIF9yZXR1cm4gPSBjb2x1bW4udmFsaWRhdGUuYXBwbHkobnVsbCwgW2NvbHVtbiwgaW5kZXhdKTtcblx0XHRcdGlmKF9yZXR1cm4gPT09IGZhbHNlKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZVxuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0X19yZW5kZXJDZWxsOiBmdW5jdGlvbiAoY29sdW1uLCBpbmRleCl7XG5cdFx0aWYoY29sdW1uLm5hbWUgPT0gXCJfX2luZGV4X19cIikgIHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDx0ZCBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd0ZmlsdGVyLWNlbGwnLCAoY29sdW1uLmZpeGVkPydmaXhlZCc6JycpKX0gc3R5bGU9e3pudWkucmVhY3Quc3R5bGUoY29sdW1uLmZpeGVkU3R5bGVzKX0+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ljb24tYnRuJz5cblx0XHRcdFx0XHRcdDxpIGRhdGEtdG9vbHRpcCBjbGFzc05hbWU9J2ZhIGZhLWZpbHRlcicgLz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC90ZD5cblx0XHRcdCk7XG5cdFx0fVxuXHRcdGlmKHRoaXMuX192YWxpZGF0ZUNvbHVtbihjb2x1bW4sIGluZGV4KSA9PT0gZmFsc2Upe1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGlmKCF6bi5pcyhjb2x1bW4sICdvYmplY3QnKSkgeyByZXR1cm4gbnVsbDsgfVxuXHRcdHZhciBfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMuY2VsbFJlbmRlciwge1xuXHRcdFx0Y29sdW1uOiBjb2x1bW4sXG5cdFx0XHRjZWxsSW5kZXg6IGluZGV4LCBcblx0XHRcdHRmaWx0ZXI6IHRoaXNcblx0XHR9KTtcblx0XHRpZihfZWxlbWVudCl7XG5cdFx0XHRyZXR1cm4gX2VsZW1lbnQ7XG5cdFx0fVxuXHRcdFxuXHRcdHZhciBfY29udGVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KGNvbHVtbi5yZW5kZXIsIHtcblx0XHRcdGNvbHVtbjogY29sdW1uLFxuXHRcdFx0Y2VsbEluZGV4OiBpbmRleCwgXG5cdFx0XHR0ZmlsdGVyOiB0aGlzXG5cdFx0fSk7XG5cblx0XHRpZighX2NvbnRlbnQgJiYgY29sdW1uLmZpbHRlcikge1xuXHRcdFx0dmFyIF9maWx0ZXIgPSBjb2x1bW4uZmlsdGVyO1xuXHRcdFx0aWYoem4uaXMoX2ZpbHRlciwgJ2Z1bmN0aW9uJykpIHtcblx0XHRcdFx0aWYoX2ZpbHRlci5wcm90b3R5cGUgJiYgX2ZpbHRlci5wcm90b3R5cGUucmVuZGVyKSB7XG5cdFx0XHRcdFx0X2NvbnRlbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudChfZmlsdGVyLCB7XG5cdFx0XHRcdFx0XHRjb2x1bW46IGNvbHVtbixcblx0XHRcdFx0XHRcdHRmaWx0ZXI6IHRoaXNcblx0XHRcdFx0XHR9KTtcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgX2ZpbHRlciA9IF9maWx0ZXIuY2FsbChudWxsLCBjb2x1bW4sIHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cblx0XHRcdH1cblxuXHRcdFx0aWYoem4uaXMoX2ZpbHRlciwgJ29iamVjdCcpKSB7XG5cdFx0XHRcdHZhciBfa2V5ID0gX2ZpbHRlci5rZXkgfHwgY29sdW1uLm5hbWU7XG5cdFx0XHRcdGlmKHpuLmlzKF9rZXksICdmdW5jdGlvbicpKSB7XG5cdFx0XHRcdFx0X2tleSA9IF9rZXkuY2FsbChudWxsLCBjb2x1bW4sIHRoaXMpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0X2NvbnRlbnQgPSA8ZmlsdGVyLkZpbHRlckZpZWxkIGtleT17X2tleSB8fCB6bi51dWlkKCl9IHsuLi5fZmlsdGVyfSBuYW1lPXtjb2x1bW4ubmFtZX0gb25GaWx0ZXJDaGFuZ2U9e3RoaXMuX19vbkZpbHRlckNoYW5nZX0gb25DYW5jZWw9e3RoaXMuX19vbkZpbHRlckNhbmNlbH0gLz47XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dmFyIF9jZWxsID0gem4uZXh0ZW5kKHsgc3R5bGU6IHt9LCBjbGFzc05hbWU6ICcnIH0sIHRoaXMucHJvcHMuY2VsbCk7XG5cdFx0cmV0dXJuIChcblx0XHRcdDx0ZCBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd0ZmlsdGVyLWNlbGwnLCAoY29sdW1uLmZpeGVkPydmaXhlZCc6JycpLCBfY2VsbC5jbGFzc05hbWUpfSBzdHlsZT17em51aS5yZWFjdC5zdHlsZShfY2VsbC5zdHlsZSwgY29sdW1uLmZpeGVkU3R5bGVzKX0+XG5cdFx0XHRcdHsgX2NvbnRlbnQgfVxuXHRcdFx0PC90ZD5cblx0XHQpO1xuXHR9LFxuXHRfX3JlbmRlclJvdzogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF9lbGVtZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQodGhpcy5wcm9wcy5yb3dSZW5kZXIsIHtcblx0XHRcdHRmaWx0ZXI6IHRoaXNcblx0XHR9KTtcblx0XHRpZihfZWxlbWVudCl7XG5cdFx0XHRyZXR1cm4gX2VsZW1lbnQ7XG5cdFx0fVxuXHRcdHZhciBfcm93ID0gem4uZXh0ZW5kKHsgY2xhc3NOYW1lOiAnJywgc3R5bGU6IHt9IH0sIHRoaXMucHJvcHMucm93KTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHRyIGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ0ZmlsdGVyLXJvdyB6ci10YWJsZS10cm93XCIsIF9yb3cuY2xhc3NOYW1lKX0gc3R5bGU9e19yb3cuc3R5bGV9PlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0KHRoaXMucHJvcHMuY29sdW1uc3x8W10pLm1hcCh0aGlzLl9fcmVuZGVyQ2VsbClcblx0XHRcdFx0fVxuXHRcdFx0PC90cj5cblx0XHQpO1xuXHR9LFxuXHRyZW5kZXI6ZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHRoZWFkIGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci10YWJsZS10ZmlsdGVyXCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lLCB0aGlzLnN0YXRlLmNsYXNzTmFtZSl9IHN0eWxlPXt6bnVpLnJlYWN0LnN0eWxlKHRoaXMucHJvcHMuc3R5bGUsIHRoaXMuc3RhdGUuc3R5bGUpfT5cblx0XHRcdFx0e3RoaXMuX19yZW5kZXJSb3coKX1cblx0XHRcdDwvdGhlYWQ+XG5cdFx0KTtcblx0fVxufSk7IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSVEZvb3QnLFxuXHRfX3JlbmRlckNoaWxkcmVuOiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX2NvbHVtbnMgPSB0aGlzLnByb3BzLmNvbHVtbnMgfHwgW107XG5cdFx0aWYodGhpcy5wcm9wcy5jaGlsZHJlbil7XG5cdFx0XHRyZXR1cm4gPHRyIGNsYXNzTmFtZT1cInRmb290LXJvd1wiPlxuXHRcdFx0XHQ8dGQgY29sU3Bhbj17X2NvbHVtbnMubGVuZ3RofT57dGhpcy5wcm9wcy5jaGlsZHJlbn08L3RkPlxuXHRcdFx0PC90cj47XG5cdFx0fWVsc2V7XG5cdFx0XHRyZXR1cm4gdGhpcy5fX3JlbmRlclJvdygpO1xuXHRcdH1cblx0fSxcblx0X19yZW5kZXJDZWxsOiBmdW5jdGlvbiAoY29sdW1uLCBpbmRleCl7XG5cdFx0aWYoIXpuLmlzKGNvbHVtbiwgJ29iamVjdCcpKSB7IHJldHVybiBudWxsOyB9XG5cdFx0dmFyIF9lbGVtZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQodGhpcy5wcm9wcy5jZWxsUmVuZGVyLCB7XG5cdFx0XHRjb2x1bW46IGNvbHVtbixcblx0XHRcdGNlbGxJbmRleDogaW5kZXgsIFxuXHRcdFx0dGZvb3Q6IHRoaXNcblx0XHR9KTtcblx0XHRpZihfZWxlbWVudCl7XG5cdFx0XHRyZXR1cm4gX2VsZW1lbnQ7XG5cdFx0fVxuXG5cdFx0dmFyIF9jb250ZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQoY29sdW1uLnJlbmRlciB8fCBjb2x1bW4uZm9vdCwge1xuXHRcdFx0Y29sdW1uOiBjb2x1bW4sXG5cdFx0XHRjZWxsSW5kZXg6IGluZGV4LCBcblx0XHRcdHRmb290OiB0aGlzXG5cdFx0fSk7XG5cblx0XHRpZih0aGlzLnByb3BzLnJlbmRlcikge1xuXHRcdFx0X2NvbnRlbnQgPSB0aGlzLnByb3BzLnJlbmRlcihjb2x1bW4sIGluZGV4LCB0aGlzKTtcblx0XHR9XG5cblx0XHR2YXIgX2NlbGwgPSB6bi5leHRlbmQoeyBzdHlsZToge30sIGNsYXNzTmFtZTogJycgfSwgdGhpcy5wcm9wcy5jZWxsKTtcblx0XHRyZXR1cm4gPHRoIGtleT17aW5kZXh9IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3Rmb290LWNlbGwnLCBfY2VsbC5jbGFzc05hbWUpfSBzdHlsZT17X2NlbGwuc3R5bGV9PlxuXHRcdFx0eyBfY29udGVudCB9XG5cdFx0PC90aD47XG5cdH0sXG5cdF9fcmVuZGVyUm93OiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX2VsZW1lbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudCh0aGlzLnByb3BzLnJvd1JlbmRlciwge1xuXHRcdFx0dGhlYWQ6IHRoaXNcblx0XHR9KTtcblx0XHRpZihfZWxlbWVudCl7XG5cdFx0XHRyZXR1cm4gX2VsZW1lbnQ7XG5cdFx0fVxuXHRcdHZhciBfcm93ID0gem4uZXh0ZW5kKHsgY2xhc3NOYW1lOiAnJywgc3R5bGU6IHt9IH0sIHRoaXMucHJvcHMucm93KTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHRyIGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ0Zm9vdC1yb3dcIiwgX3Jvdy5jbGFzc05hbWUpfSBzdHlsZT17X3Jvdy5zdHlsZX0+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHQodGhpcy5wcm9wcy5jb2x1bW5zfHxbXSkubWFwKHRoaXMuX19yZW5kZXJDZWxsKVxuXHRcdFx0XHR9XG5cdFx0XHQ8L3RyPlxuXHRcdCk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHRmb290IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci10YWJsZS10Zm9vdFwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfT5cblx0XHRcdFx0e3RoaXMuX19yZW5kZXJDaGlsZHJlbigpfVxuXHRcdFx0PC90Zm9vdD5cblx0XHQpO1xuXHR9XG59KTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgVEhlYWRTb3J0ID0gcmVxdWlyZSgnLi9USGVhZFNvcnQnKTtcbnZhciBwb3B1cCA9IHJlcXVpcmUoJ3pudWktcmVhY3QtcG9wdXAnKTtcbnZhciB6cmpzb24gPSByZXF1aXJlKCd6bnVpLXJlYWN0LWpzb24nKTtcbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonVEhlYWQnLFxuXHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7fTtcblx0fSxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y2xhc3NOYW1lOiAnJyxcblx0XHRcdHN0eWxlOiB7fSxcblx0XHRcdHNvcnQ6IHt9LFxuXHRcdFx0ZmlsdGVyOiB7fVxuXHRcdH07XG5cdH0sXG5cdF9fb25Db2x1bW5Tb3J0OiBmdW5jdGlvbiAoc29ydCwgY29sdW1uKXtcblx0XHRpZihjb2x1bW4ubmFtZSkge1xuXHRcdFx0dGhpcy5zdGF0ZS5zb3J0W2NvbHVtbi5uYW1lXSA9IHNvcnQ7XG5cdFx0fVxuXHRcdHRoaXMucHJvcHMub25Tb3J0ICYmIHRoaXMucHJvcHMub25Tb3J0KHRoaXMuc3RhdGUuc29ydCk7XG5cdH0sXG5cdF9fb25Db2x1bW5FZGl0b3JDaGFuZ2U6IGZ1bmN0aW9uIChkYXRhLCBjaGlsZCwgcm9vdCwgaW5kZXgpe1xuICAgICAgICB2YXIgX3Jvb3QgPSByb290IHx8IGNoaWxkO1xuXHRcdHRoaXMucHJvcHMub25Db2x1bW5DaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkNvbHVtbkNoYW5nZShfcm9vdC5zdGF0ZS52YWx1ZSwgaW5kZXgpO1xuICAgIH0sXG5cdF9faWNvbkNsaWNrUmVuZGVyOiBmdW5jdGlvbiAoY29sdW1uLCBpbmRleCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgc3R5bGU9e3twYWRkaW5nOiAxMCwgbWF4SGVpZ2h0OiA1MDAsIHdpZHRoOiA0MDAsIG92ZXJmbG93OiAnYXV0byd9fT5cblx0XHRcdFx0PHpyanNvbi5lZGl0b3Iub2JqZWN0IGZvbGQ9e2ZhbHNlfVxuXHRcdFx0XHRcdGRpc3BsYXlDbG9zdXJlPXt0cnVlfSBcblx0XHRcdFx0XHRkaXNwbGF5SXRlbUNvdW50PXt0cnVlfSBcblx0XHRcdFx0XHRsYWJlbD17J0NvbHVtbid9IFxuXHRcdFx0XHRcdHZhbHVlPXtjb2x1bW59IFxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsoZGF0YSwgY2hpbGQsIHJvb3QpPT50aGlzLl9fb25Db2x1bW5FZGl0b3JDaGFuZ2UoZGF0YSwgY2hpbGQsIHJvb3QsIGluZGV4KX0gLz5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH0sXG5cdF9fc29ydFJlbmRlcjogZnVuY3Rpb24gKCl7XG5cblx0fSxcblx0X192YWxpZGF0ZUNvbHVtbjogZnVuY3Rpb24gKGNvbHVtbiwgaW5kZXgpe1xuXHRcdGlmKGNvbHVtbi52YWxpZGF0ZSA9PT0gZmFsc2UpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0aWYoem4uaXMoY29sdW1uLnZhbGlkYXRlLCAnZnVuY3Rpb24nKSkge1xuXHRcdFx0dmFyIF9yZXR1cm4gPSBjb2x1bW4udmFsaWRhdGUuYXBwbHkobnVsbCwgW2NvbHVtbiwgaW5kZXhdKTtcblx0XHRcdGlmKF9yZXR1cm4gPT09IGZhbHNlKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZVxuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0X19yZW5kZXJDZWxsOiBmdW5jdGlvbiAoY29sdW1uLCBpbmRleCl7XG5cdFx0aWYodGhpcy5fX3ZhbGlkYXRlQ29sdW1uKGNvbHVtbiwgaW5kZXgpID09PSBmYWxzZSl7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0aWYoIXpuLmlzKGNvbHVtbiwgJ29iamVjdCcpKSB7IHJldHVybiBudWxsOyB9XG5cdFx0dmFyIF9lbGVtZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQodGhpcy5wcm9wcy5jZWxsUmVuZGVyLCB7XG5cdFx0XHRjb2x1bW46IGNvbHVtbixcblx0XHRcdGNlbGxJbmRleDogaW5kZXgsIFxuXHRcdFx0dGhlYWQ6IHRoaXNcblx0XHR9KTtcblx0XHRpZihfZWxlbWVudCl7XG5cdFx0XHRyZXR1cm4gX2VsZW1lbnQ7XG5cdFx0fVxuXG5cdFx0dmFyIF9jb250ZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQoY29sdW1uLnJlbmRlciB8fCBjb2x1bW4uaGVhZCwge1xuXHRcdFx0XHRjb2x1bW46IGNvbHVtbixcblx0XHRcdFx0Y2VsbEluZGV4OiBpbmRleCwgXG5cdFx0XHRcdHRoZWFkOiB0aGlzLFxuXHRcdFx0XHR0YWJsZTogdGhpcy5wcm9wcy50YWJsZVxuXHRcdFx0fSksXG5cdFx0XHRfbWFwcGluZyA9IHRoaXMucHJvcHMua2V5TWFwcGluZyB8fCB7fSxcblx0XHRcdF9sYWJlbEtleSA9IF9tYXBwaW5nWydsYWJlbCddIHx8ICdsYWJlbCcsXG5cdFx0XHRfbGFiZWwgPSBjb2x1bW5bX2xhYmVsS2V5XTtcblxuXHRcdGlmKHpuLmlzKF9sYWJlbCwgJ2Z1bmN0aW9uJykpe1xuXHRcdFx0X2xhYmVsID0gX2xhYmVsKGNvbHVtbiwgdGhpcyk7XG5cdFx0fVxuXHRcdGlmKCFfY29udGVudCkge1xuXHRcdFx0X2NvbnRlbnQgPSAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtcImNlbGwtbGFiZWwgXCIgKyAoY29sdW1uLnNvcnQ/J3NvcnRhYmxlJzonJyl9IHRpdGxlPXtfbGFiZWx9PlxuXHRcdFx0XHRcdHsgISFjb2x1bW4ucmVxdWlyZWQgJiYgPHNwYW4gZGF0YS16ci1wb3B1cC10b29sdGlwPVwi5b+F6KaB5a2X5q61XCIgY2xhc3NOYW1lPVwicmVxdWlyZWRcIj4qPC9zcGFuPn1cblx0XHRcdFx0XHR7IF9sYWJlbCB9XG5cdFx0XHRcdFx0eyBcblx0XHRcdFx0XHRcdCEhY29sdW1uLmVkaXRhYmxlICYmIChcblx0XHRcdFx0XHRcdFx0PHBvcHVwLkRyb3Bkb3duIFxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImNlbGwtZWRpdG9yXCIgXG5cdFx0XHRcdFx0XHRcdFx0cG9wb3Zlcj17e1xuXHRcdFx0XHRcdFx0XHRcdFx0cmVuZGVyOiB0aGlzLl9faWNvbkNsaWNrUmVuZGVyKGNvbHVtbiwgaW5kZXgpLFxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xvc2VhYmxlOiB0cnVlXG5cdFx0XHRcdFx0XHRcdFx0fX0gPlxuXHRcdFx0XHRcdFx0XHRcdDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhc1wiIGRhdGEtaWNvbj1cImVkaXRcIiBjbGFzc05hbWU9XCJpY29uIHN2Zy1pbmxpbmUtLWZhIGZhLWVkaXQgZmEtdy0xOCBcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTc2IDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTQwMi42IDgzLjJsOTAuMiA5MC4yYzMuOCAzLjggMy44IDEwIDAgMTMuOEwyNzQuNCA0MDUuNmwtOTIuOCAxMC4zYy0xMi40IDEuNC0yMi45LTkuMS0yMS41LTIxLjVsMTAuMy05Mi44TDM4OC44IDgzLjJjMy44LTMuOCAxMC0zLjggMTMuOCAwem0xNjItMjIuOWwtNDguOC00OC44Yy0xNS4yLTE1LjItMzkuOS0xNS4yLTU1LjIgMGwtMzUuNCAzNS40Yy0zLjggMy44LTMuOCAxMCAwIDEzLjhsOTAuMiA5MC4yYzMuOCAzLjggMTAgMy44IDEzLjggMGwzNS40LTM1LjRjMTUuMi0xNS4zIDE1LjItNDAgMC01NS4yek0zODQgMzQ2LjJWNDQ4SDY0VjEyOGgyMjkuOGMzLjIgMCA2LjItMS4zIDguNS0zLjVsNDAtNDBjNy42LTcuNiAyLjItMjAuNS04LjUtMjAuNUg0OEMyMS41IDY0IDAgODUuNSAwIDExMnYzNTJjMCAyNi41IDIxLjUgNDggNDggNDhoMzUyYzI2LjUgMCA0OC0yMS41IDQ4LTQ4VjMwNi4yYzAtMTAuNy0xMi45LTE2LTIwLjUtOC41bC00MCA0MGMtMi4yIDIuMy0zLjUgNS4zLTMuNSA4LjV6XCI+PC9wYXRoPjwvc3ZnPlxuXHRcdFx0XHRcdFx0XHQ8L3BvcHVwLkRyb3Bkb3duPlxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdHZhciBfY2VsbCA9IHpuLmV4dGVuZCh7IHN0eWxlOiB7fSwgY2xhc3NOYW1lOiAnJyB9LCB0aGlzLnByb3BzLmNlbGwsIGNvbHVtbik7XG5cdFx0cmV0dXJuIChcblx0XHRcdDx0aCBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd0aGVhZC1jZWxsJywgKGNvbHVtbi5maXhlZD8nZml4ZWQnOicnKSwgX2NlbGwuY2xhc3NOYW1lKX0gc3R5bGU9e3pudWkucmVhY3Quc3R5bGUoX2NlbGwuc3R5bGUsIGNvbHVtbi5maXhlZFN0eWxlcyl9PlxuXHRcdFx0XHR7IF9jb250ZW50IH1cblx0XHRcdFx0eyAhIWNvbHVtbi5zb3J0ICYmIDxUSGVhZFNvcnQgY2xhc3NOYW1lPVwiY2VsbC1zb3J0XCIgb25Tb3J0PXsoc29ydCk9PnRoaXMuX19vbkNvbHVtblNvcnQoc29ydCwgY29sdW1uKX0gLz59XG5cdFx0XHQ8L3RoPlxuXHRcdCk7XG5cdH0sXG5cdF9fcmVuZGVyUm93OiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX2VsZW1lbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudCh0aGlzLnByb3BzLnJvd1JlbmRlciwge1xuXHRcdFx0dGhlYWQ6IHRoaXNcblx0XHR9KTtcblx0XHRpZihfZWxlbWVudCl7XG5cdFx0XHRyZXR1cm4gX2VsZW1lbnQ7XG5cdFx0fVxuXHRcdHZhciBfcm93ID0gem4uZXh0ZW5kKHsgY2xhc3NOYW1lOiAnJywgc3R5bGU6IHt9IH0sIHRoaXMucHJvcHMucm93KTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHRyIGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ0aGVhZC1yb3dcIiwgX3Jvdy5jbGFzc05hbWUpfSBzdHlsZT17X3Jvdy5zdHlsZX0+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHQodGhpcy5wcm9wcy5jb2x1bW5zfHxbXSkubWFwKHRoaXMuX19yZW5kZXJDZWxsKVxuXHRcdFx0XHR9XG5cdFx0XHQ8L3RyPlxuXHRcdCk7XG5cdH0sXG5cdHJlbmRlcjpmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8dGhlYWQgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXRhYmxlLXRoZWFkXCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lLCB0aGlzLnN0YXRlLmNsYXNzTmFtZSl9IHN0eWxlPXt6bnVpLnJlYWN0LnN0eWxlKHRoaXMucHJvcHMuc3R5bGUsIHRoaXMuc3RhdGUuc3R5bGUpfT5cblx0XHRcdFx0e3RoaXMuX19yZW5kZXJSb3coKX1cblx0XHRcdDwvdGhlYWQ+XG5cdFx0KTtcblx0fVxufSk7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJUSGVhZFNvcnQnLFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRzb3J0OiAnZGVzYycsXG5cdFx0fVxuXHR9LFxuXHRfX3JlbmRlckljb246IGZ1bmN0aW9uICgpe1xuXHRcdHN3aXRjaCh0aGlzLnN0YXRlLnNvcnQpe1xuXHRcdFx0Y2FzZSBcImZhU29ydFwiOlxuXHRcdFx0XHRyZXR1cm4gPHN2ZyBvbkNsaWNrPXsoKT0+dGhpcy5fX2ljb25DbGljaygndXAnKX0gYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhc1wiIGRhdGEtaWNvbj1cInNvcnRcIiBjbGFzc05hbWU9XCJpY29uIHN2Zy1pbmxpbmUtLWZhIGZhLXNvcnQgZmEtdy0xMCBcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTQxIDI4OGgyMzhjMjEuNCAwIDMyLjEgMjUuOSAxNyA0MUwxNzcgNDQ4Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMEwyNCAzMjljLTE1LjEtMTUuMS00LjQtNDEgMTctNDF6bTI1NS0xMDVMMTc3IDY0Yy05LjQtOS40LTI0LjYtOS40LTMzLjkgMEwyNCAxODNjLTE1LjEgMTUuMS00LjQgNDEgMTcgNDFoMjM4YzIxLjQgMCAzMi4xLTI1LjkgMTctNDF6XCI+PC9wYXRoPjwvc3ZnPjtcblx0XHRcdGNhc2UgXCJkZXNjXCI6XG5cdFx0XHRcdHJldHVybiA8c3ZnIG9uQ2xpY2s9eygpPT50aGlzLl9faWNvbkNsaWNrKCdhc2MnKX0gYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhc1wiIGRhdGEtaWNvbj1cInNvcnQtZG93blwiIGNsYXNzTmFtZT1cImljb24gc3ZnLWlubGluZS0tZmEgZmEtc29ydC1hbHBoYS1kb3duIGZhLXctMTQgXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDQ0OCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0xNzYgMzUyaC00OFY0OGExNiAxNiAwIDAgMC0xNi0xNkg4MGExNiAxNiAwIDAgMC0xNiAxNnYzMDRIMTZjLTE0LjE5IDAtMjEuMzYgMTcuMjQtMTEuMjkgMjcuMzFsODAgOTZhMTYgMTYgMCAwIDAgMjIuNjIgMGw4MC05NkMxOTcuMzUgMzY5LjI2IDE5MC4yMiAzNTIgMTc2IDM1MnptMjQwLTY0SDI4OGExNiAxNiAwIDAgMC0xNiAxNnYzMmExNiAxNiAwIDAgMCAxNiAxNmg1NmwtNjEuMjYgNzAuNDVBMzIgMzIgMCAwIDAgMjcyIDQ0Ni4zN1Y0NjRhMTYgMTYgMCAwIDAgMTYgMTZoMTI4YTE2IDE2IDAgMCAwIDE2LTE2di0zMmExNiAxNiAwIDAgMC0xNi0xNmgtNTZsNjEuMjYtNzAuNDVBMzIgMzIgMCAwIDAgNDMyIDMyMS42M1YzMDRhMTYgMTYgMCAwIDAtMTYtMTZ6bTMxLjA2LTg1LjM4bC01OS4yNy0xNjBBMTYgMTYgMCAwIDAgMzcyLjcyIDMyaC00MS40NGExNiAxNiAwIDAgMC0xNS4wNyAxMC42MmwtNTkuMjcgMTYwQTE2IDE2IDAgMCAwIDI3MiAyMjRoMjQuODNhMTYgMTYgMCAwIDAgMTUuMjMtMTEuMDhsNC40Mi0xMi45Mmg3MWw0LjQxIDEyLjkyQTE2IDE2IDAgMCAwIDQwNy4xNiAyMjRINDMyYTE2IDE2IDAgMCAwIDE1LjA2LTIxLjM4ek0zMzUuNjEgMTQ0TDM1MiA5NmwxNi4zOSA0OHpcIj48L3BhdGg+PC9zdmc+O1xuXHRcdFx0Y2FzZSBcImFzY1wiOlxuXHRcdFx0XHRyZXR1cm4gPHN2ZyBvbkNsaWNrPXsoKT0+dGhpcy5fX2ljb25DbGljaygnZGVzYycpfSBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFzXCIgZGF0YS1pY29uPVwic29ydC11cFwiIGNsYXNzTmFtZT1cImljb24gc3ZnLWlubGluZS0tZmEgZmEtc29ydC1hbHBoYS11cCBmYS13LTE0IFwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA0NDggNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMTYgMTYwaDQ4djMwNGExNiAxNiAwIDAgMCAxNiAxNmgzMmExNiAxNiAwIDAgMCAxNi0xNlYxNjBoNDhjMTQuMjEgMCAyMS4zOC0xNy4yNCAxMS4zMS0yNy4zMWwtODAtOTZhMTYgMTYgMCAwIDAtMjIuNjIgMGwtODAgOTZDLTUuMzUgMTQyLjc0IDEuNzggMTYwIDE2IDE2MHptNDAwIDEyOEgyODhhMTYgMTYgMCAwIDAtMTYgMTZ2MzJhMTYgMTYgMCAwIDAgMTYgMTZoNTZsLTYxLjI2IDcwLjQ1QTMyIDMyIDAgMCAwIDI3MiA0NDYuMzdWNDY0YTE2IDE2IDAgMCAwIDE2IDE2aDEyOGExNiAxNiAwIDAgMCAxNi0xNnYtMzJhMTYgMTYgMCAwIDAtMTYtMTZoLTU2bDYxLjI2LTcwLjQ1QTMyIDMyIDAgMCAwIDQzMiAzMjEuNjNWMzA0YTE2IDE2IDAgMCAwLTE2LTE2em0zMS4wNi04NS4zOGwtNTkuMjctMTYwQTE2IDE2IDAgMCAwIDM3Mi43MiAzMmgtNDEuNDRhMTYgMTYgMCAwIDAtMTUuMDcgMTAuNjJsLTU5LjI3IDE2MEExNiAxNiAwIDAgMCAyNzIgMjI0aDI0LjgzYTE2IDE2IDAgMCAwIDE1LjIzLTExLjA4bDQuNDItMTIuOTJoNzFsNC40MSAxMi45MkExNiAxNiAwIDAgMCA0MDcuMTYgMjI0SDQzMmExNiAxNiAwIDAgMCAxNS4wNi0yMS4zOHpNMzM1LjYxIDE0NEwzNTIgOTZsMTYuMzkgNDh6XCI+PC9wYXRoPjwvc3ZnPjtcblx0XHR9XHRcblx0fSxcblx0X19pY29uQ2xpY2s6IGZ1bmN0aW9uIChzb3J0KXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHNvcnQ6IHNvcnRcblx0XHR9KTtcblx0XHR0aGlzLnByb3BzLm9uU29ydCAmJiB0aGlzLnByb3BzLm9uU29ydChzb3J0KTtcblx0fSxcblx0cmVuZGVyOmZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItdGFibGUtdGhlYWQtc29ydCcsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9PlxuXHRcdFx0XHR7dGhpcy5fX3JlbmRlckljb24oKX1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFJlYWN0RE9NID0gem51aS5SZWFjdERPTSB8fCByZXF1aXJlKCdyZWFjdC1kb20nKTtcbnZhciBUQ2VsbCA9IHJlcXVpcmUoJy4vVENlbGwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUlRSb3cnLFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHN0eWxlOiB7fSxcblx0XHRcdGNsYXNzTmFtZTogJydcblx0XHR9XG5cdH0sXG5cdF9fZ2V0VGFyZ2V0VEQ6IGZ1bmN0aW9uICh0YXJnZXQpIHtcblx0XHRpZih0YXJnZXQgJiYgdGFyZ2V0LnRhZ05hbWUhPT0nVEQnKXtcblx0XHRcdHJldHVybiB0aGlzLl9fZ2V0VGFyZ2V0VEQodGFyZ2V0LnBhcmVudE5vZGUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGFyZ2V0O1xuXHRcdH1cblx0fSxcblx0X19vblJvd0NsaWNrOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdHZhciBfdGhpcyA9IHRoaXM7XG5cdFx0dmFyIF90ZCA9IHRoaXMuX19nZXRUYXJnZXRURChldmVudC50YXJnZXQpO1xuXHRcdGV2ZW50LmRhdGEgPSB7XG5cdFx0XHRmaW5kVFJET006IGZ1bmN0aW9uICgpe1xuXHRcdFx0XHRyZXR1cm4gUmVhY3RET00uZmluZERPTU5vZGUoX3RoaXMpO1xuXHRcdFx0fSxcblx0XHRcdHRkOiBfdGQsXG5cdFx0XHR0cm93OiB0aGlzXG5cdFx0fTtcblx0XHR0aGlzLnByb3BzLm9uQ2xpY2sgJiYgdGhpcy5wcm9wcy5vbkNsaWNrKGV2ZW50KTtcblx0XHR0aGlzLnByb3BzLm9uUm93Q2xpY2sgJiYgdGhpcy5wcm9wcy5vblJvd0NsaWNrKGV2ZW50KTtcblx0fSxcblx0X192YWxpZGF0ZUNvbHVtbjogZnVuY3Rpb24gKGNvbHVtbiwgaW5kZXgpe1xuXHRcdGlmKGNvbHVtbi52YWxpZGF0ZSA9PT0gZmFsc2UpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0aWYoem4uaXMoY29sdW1uLnZhbGlkYXRlLCAnZnVuY3Rpb24nKSkge1xuXHRcdFx0dmFyIF9yZXR1cm4gPSBjb2x1bW4udmFsaWRhdGUuYXBwbHkobnVsbCwgW2NvbHVtbiwgaW5kZXhdKTtcblx0XHRcdGlmKF9yZXR1cm4gPT09IGZhbHNlKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZVxuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0X19jZWxsUmVuZGVyOiBmdW5jdGlvbiAoY29sdW1uLCBpbmRleCl7XG5cdFx0aWYodGhpcy5fX3ZhbGlkYXRlQ29sdW1uKGNvbHVtbiwgaW5kZXgpID09PSBmYWxzZSl7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0aWYoIXpuLmlzKGNvbHVtbiwgJ29iamVjdCcpKSB7IHJldHVybiBudWxsO31cblx0XHR2YXIgX3Byb3BzID0gem4uZXh0ZW5kKHtcblx0XHRcdGNvbHVtbjogY29sdW1uLFxuXHRcdFx0dHJvdzogdGhpcyxcblx0XHRcdHJvd0luZGV4OiB0aGlzLnByb3BzLnJvd0luZGV4LFxuXHRcdFx0Y2VsbEluZGV4OiBpbmRleCxcblx0XHRcdGNvbnRleHQ6IHRoaXMucHJvcHMuY29udGV4dCxcblx0XHRcdGRhdGE6IHRoaXMucHJvcHMuZGF0YSxcblx0XHRcdHRib2R5OiB0aGlzLnByb3BzLnRib2R5XG5cdFx0fSwgdGhpcy5wcm9wcy5jZWxsLCBjb2x1bW4pO1xuXHRcdHZhciBfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMuY2VsbFJlbmRlciwgX3Byb3BzLCB0aGlzLnByb3BzLmNvbnRleHQpO1xuXG5cdFx0aWYoX2VsZW1lbnQpe1xuXHRcdFx0cmV0dXJuIF9lbGVtZW50O1xuXHRcdH1cblxuXHRcdHJldHVybiA8VENlbGwga2V5PXtpbmRleH0gey4uLl9wcm9wc30gZml4ZWRTdHlsZT17dGhpcy5fX2ZpeGVkV2lkdGgoaW5kZXgpfSBvbkNlbGxDbGljaz17dGhpcy5wcm9wcy5vbkNlbGxDbGlja30gY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgndHJvdy1jZWxsJywgX3Byb3BzLmNsYXNzTmFtZSl9IC8+O1xuXHR9LFxuXHRfX2ZpeGVkV2lkdGg6IGZ1bmN0aW9uIChpbmRleCl7XG5cdFx0dmFyIF9jb2x1bW5zID0gdGhpcy5wcm9wcy5jb2x1bW5zfHxbXSwgX3dpZHRoID0gMDtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgaW5kZXg7IGkrKyl7XG5cdFx0XHRpZihfY29sdW1uc1tpXS5maXhlZCkge1xuXHRcdFx0XHRfd2lkdGggKz0gX2NvbHVtbnNbaV0ud2lkdGggfHwgMDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0bGVmdDogX3dpZHRoXG5cdFx0fTtcblx0fSxcblx0cmVuZGVyOmZ1bmN0aW9uKCl7XG5cdFx0dGhpcy5wcm9wcy50Ym9keS5fX2luaXRpYWxEYXRhSXRlbSh0aGlzLnByb3BzLmRhdGEpO1xuXHRcdHRoaXMucHJvcHMub25EYXRhVmFsaWRhdGUgJiYgdGhpcy5wcm9wcy5vbkRhdGFWYWxpZGF0ZSh0aGlzLnByb3BzLmRhdGEsIHRoaXMpO1xuXHRcdHZhciBfY29sdW1uTGVuZ3RoID0gKHRoaXMucHJvcHMuY29sdW1uc3x8W10pLmxlbmd0aDtcblx0XHR2YXIgX2NsYXNzTmFtZSA9IHRoaXMucHJvcHMuY2xhc3NOYW1lLCBfc3R5bGUgPSB0aGlzLnByb3BzLnN0eWxlO1xuXHRcdGlmKHR5cGVvZiBfY2xhc3NOYW1lID09ICdmdW5jdGlvbicpe1xuXHRcdFx0X2NsYXNzTmFtZSA9IF9jbGFzc05hbWUodGhpcy5wcm9wcy5kYXRhLCB0aGlzKTtcblx0XHR9XG5cdFx0aWYodHlwZW9mIF9zdHlsZSA9PSAnZnVuY3Rpb24nKXtcblx0XHRcdF9zdHlsZSA9IF9zdHlsZSh0aGlzLnByb3BzLmRhdGEsIHRoaXMpO1xuXHRcdH1cblx0XHRyZXR1cm4gKFxuXHRcdFx0PD5cblx0XHRcdFx0PHRyIGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLXRhYmxlLXRyb3cnLCBfY2xhc3NOYW1lLCB0aGlzLnN0YXRlLmNsYXNzTmFtZSl9IFxuXHRcdFx0XHRcdHN0eWxlPXt6bnVpLnJlYWN0LnN0eWxlKF9zdHlsZSwgdGhpcy5zdGF0ZS5zdHlsZSl9XG5cdFx0XHRcdFx0ZGF0YS1hY3RpdmU9e3RoaXMucHJvcHMuYWN0aXZlfSBcblx0XHRcdFx0XHRkYXRhLWNoZWNrZWQ9e3RoaXMucHJvcHMuY2hlY2tlZH0gXG5cdFx0XHRcdFx0b25DbGljaz17dGhpcy5fX29uUm93Q2xpY2t9PlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdCh0aGlzLnByb3BzLmNvbHVtbnN8fFtdKS5tYXAodGhpcy5fX2NlbGxSZW5kZXIpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ8L3RyPlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZS5jaGlsZCAmJiA8dHIgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItdGFibGUtdHJvdy1jaGlsZCcpfT48dGQgY29sU3Bhbj17X2NvbHVtbkxlbmd0aH0+e3RoaXMuc3RhdGUuY2hpbGR9PC90ZD48L3RyPlxuXHRcdFx0XHR9XG5cdFx0XHQ8Lz5cblx0XHQpO1xuXHR9XG59KTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBmaWx0ZXIgPSByZXF1aXJlKCd6bnVpLXJlYWN0LWZpbHRlcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6ICdaUlJvd0FkZGVyJyxcblx0Z2V0SW5pdGlhbFN0YXRlOmZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHN1Ym1pdF9rZXk6ICcnLFxuXHRcdFx0Y2xhc3NOYW1lOiAnJyxcblx0XHRcdHN0eWxlOiB7fSxcblx0XHRcdGRhdGE6IHt9LFxuXHRcdFx0dmFsaWRhdGU6IGZhbHNlLFxuXHRcdFx0cmVxdWlyZWRfZmllbGRzOiBbXVxuXHRcdH1cblx0fSxcblx0X19vbkZpbHRlckNoYW5nZTogZnVuY3Rpb24gKGV2ZW50LCBpbnB1dCl7XG5cdFx0aWYoZXZlbnQubmFtZSAmJiBldmVudC5vcHQpIHtcblx0XHRcdGlmKGV2ZW50LnZhbHVlID09PSBudWxsIHx8IGV2ZW50LnZhbHVlID09PSB1bmRlZmluZWQgfHwgZXZlbnQudmFsdWUgPT09ICcnKSB7XG5cdFx0XHRcdHRoaXMuc3RhdGUuZGF0YVtldmVudC5uYW1lXSA9IG51bGw7XG5cdFx0XHRcdGRlbGV0ZSB0aGlzLnN0YXRlLmRhdGFbZXZlbnQubmFtZV07XG5cdFx0XHR9ZWxzZSBpZighZXZlbnQudmFsdWUgJiYgaW5wdXQgJiYgaW5wdXQucHJvcHMgJiYgIWlucHV0LnByb3BzLmVtcHR5VmFsdWVFbmFibGVkKXtcblx0XHRcdFx0dGhpcy5zdGF0ZS5kYXRhW2V2ZW50Lm5hbWVdID0gbnVsbDtcblx0XHRcdFx0ZGVsZXRlIHRoaXMuc3RhdGUuZGF0YVtldmVudC5uYW1lXTtcblx0XHRcdH1lbHNle1xuXHRcdFx0XHR0aGlzLnN0YXRlLmRhdGFbZXZlbnQubmFtZV0gPSBldmVudC52YWx1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aGlzLnByb3BzLm9uQWRkSW5wdXRDaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkFkZElucHV0Q2hhbmdlKGV2ZW50LCB7XG5cdFx0XHRuYW1lOiBldmVudC5uYW1lLFxuXHRcdFx0b3B0OiBldmVudC5vcHQsXG5cdFx0XHRpbnB1dDogaW5wdXQsIFxuXHRcdFx0ZGF0YTogdGhpcy5zdGF0ZS5kYXRhXG5cdFx0fSk7XG5cblx0XHR0aGlzLl9fdmFsaWRhdGVEYXRhKCk7XG5cdH0sXG5cdF9fdmFsaWRhdGVEYXRhOiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX3JlcXVpcmVkX2ZpZWxkcyA9IHRoaXMuc3RhdGUucmVxdWlyZWRfZmllbGRzO1xuXHRcdHZhciBfZGF0YSA9IHRoaXMuc3RhdGUuZGF0YTtcblx0XHR2YXIgX3ZhbGlkYXRlID0gdHJ1ZTtcblx0XHRmb3IodmFyIG5hbWUgb2YgX3JlcXVpcmVkX2ZpZWxkcykge1xuXHRcdFx0aWYoIV9kYXRhW25hbWVdKSB7XG5cdFx0XHRcdF92YWxpZGF0ZSA9IGZhbHNlO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdFx0XG5cdFx0dGhpcy5zZXRTdGF0ZSh7dmFsaWRhdGU6IF92YWxpZGF0ZX0pO1xuXHR9LFxuXHRfX29uRmlsdGVyQ2FuY2VsOiBmdW5jdGlvbiAobmFtZSl7XG5cdFx0aWYobmFtZSAmJiB0aGlzLnN0YXRlLmRhdGEpe1xuXHRcdFx0dGhpcy5zdGF0ZS5kYXRhW25hbWVdID0gbnVsbDtcblx0XHRcdGRlbGV0ZSB0aGlzLnN0YXRlLmRhdGFbbmFtZV07XG5cdFx0XHR0aGlzLl9fdmFsaWRhdGVEYXRhKCk7XG5cdFx0fVxuXHR9LFxuXHRfX3ZhbGlkYXRlQ29sdW1uOiBmdW5jdGlvbiAoY29sdW1uLCBpbmRleCl7XG5cdFx0aWYoY29sdW1uLnZhbGlkYXRlID09PSBmYWxzZSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRpZih6bi5pcyhjb2x1bW4udmFsaWRhdGUsICdmdW5jdGlvbicpKSB7XG5cdFx0XHR2YXIgX3JldHVybiA9IGNvbHVtbi52YWxpZGF0ZS5hcHBseShudWxsLCBbY29sdW1uLCBpbmRleF0pO1xuXHRcdFx0aWYoX3JldHVybiA9PT0gZmFsc2UpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlXG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHRfX3N1Ym1pdDogZnVuY3Rpb24gKCl7XG5cdFx0aWYodGhpcy5zdGF0ZS52YWxpZGF0ZSkge1xuXHRcdFx0dGhpcy5wcm9wcy5vbkFkZFN1Ym1pdCAmJiB0aGlzLnByb3BzLm9uQWRkU3VibWl0KHRoaXMuc3RhdGUuZGF0YSk7XG5cdFx0XHRpZih0aGlzLnByb3BzLnN1Ym1pdEFwaSkge1xuXHRcdFx0XHR0aGlzLnByb3BzLnN1Ym1pdEFwaS5kYXRhLmRhdGEgPSB0aGlzLnN0YXRlLmRhdGE7XG5cdFx0XHRcdHpuLmRhdGEuY3JlYXRlKHRoaXMucHJvcHMuc3VibWl0QXBpLCB7XG5cdFx0XHRcdFx0YmVmb3JlOiAoc2VuZGVyLCBkYXRhKT0+e1xuXHRcdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0XHRcdGxvYWRpbmc6IHRydWVcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0YWZ0ZXI6IChzZW5kZXIsIGRhdGEsIHJlc3BvbnNlLCB4aHIpPT57XG5cdFx0XHRcdFx0XHRpZihkYXRhLmNvZGUgPT0gMjAwKXtcblx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy50YWJsZS5yZWZyZXNoKCk7XG5cdFx0XHRcdFx0XHRcdHRoaXMuc3RhdGUuZGF0YSA9IHt9O1xuXHRcdFx0XHRcdFx0XHR0aGlzLnN0YXRlLnN1Ym1pdF9rZXkgPSB6bi51dWlkKCk7XG5cdFx0XHRcdFx0XHRcdHRoaXMudmFsaWRhdGUoKTtcblx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5vblN1Ym1pdFN1Y2Nlc3MgJiYgdGhpcy5wcm9wcy5vblN1Ym1pdFN1Y2Nlc3MoZGF0YSwgcmVzcG9uc2UsIHhocik7XG5cdFx0XHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5vblN1Ym1pdEVycm9yICYmIHRoaXMucHJvcHMub25TdWJtaXRFcnJvcihkYXRhLCByZXNwb25zZSwgeGhyKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdFx0XHRsb2FkaW5nOiBmYWxzZVxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRlcnJvcjogKHNlbmRlciwgeGhyKT0+e1xuXHRcdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0XHRcdGxvYWRpbmc6IGZhbHNlXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0X19yZW5kZXJDZWxsOiBmdW5jdGlvbiAoY29sdW1uLCBpbmRleCl7XG5cdFx0aWYoY29sdW1uLm5hbWUgPT0gXCJfX2luZGV4X19cIikgIHtcblx0XHRcdHZhciBfcmVzdWx0ID0gdGhpcy5wcm9wcy5jaGVja2luZyAmJiB0aGlzLnByb3BzLmNoZWNraW5nKGNvbHVtbiwgaW5kZXgpO1xuXHRcdFx0aWYoX3Jlc3VsdCA9PT0gZmFsc2UpIHtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8dGQga2V5PXtpbmRleH0gY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgndGZpbHRlci1jZWxsJywgKGNvbHVtbi5maXhlZD8nZml4ZWQnOicnKSl9IHN0eWxlPXt6bnVpLnJlYWN0LnN0eWxlKGNvbHVtbi5maXhlZFN0eWxlcyl9PlxuXHRcdFx0XHRcdDwvdGQ+XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8dGQga2V5PXtpbmRleH0gY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgndGZpbHRlci1jZWxsJywgKGNvbHVtbi5maXhlZD8nZml4ZWQnOicnKSl9IHN0eWxlPXt6bnVpLnJlYWN0LnN0eWxlKGNvbHVtbi5maXhlZFN0eWxlcyl9PlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUubG9hZGluZyA/IChcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eydpY29uLWJ0biBkaXNhYmxlZCd9PlxuXHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT0nZmEgZmEtc3Bpbm5lciBmYS1zcGluJyAvPiBcblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17J2ljb24tYnRuICcgKyAodGhpcy5zdGF0ZS52YWxpZGF0ZSA/ICcnOidkaXNhYmxlZCcpfSBvbkNsaWNrPXt0aGlzLl9fc3VibWl0fT5cblx0XHRcdFx0XHRcdFx0XHQ8aSBkYXRhLXRvb2x0aXAgY2xhc3NOYW1lPSdmYSBmYS1wbHVzJyAvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvdGQ+XG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdGlmKGNvbHVtbi5yb3dhZGRlciA9PT0gZmFsc2UpIHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDx0ZCBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd0ZmlsdGVyLWNlbGwnLCAoY29sdW1uLmZpeGVkPydmaXhlZCc6JycpKX0gc3R5bGU9e3pudWkucmVhY3Quc3R5bGUoY29sdW1uLmZpeGVkU3R5bGVzKX0+XG5cdFx0XHRcdDwvdGQ+XG5cdFx0XHQpO1xuXHRcdH1lbHNle1xuXG5cdFx0fVxuXG5cdFx0aWYodGhpcy5fX3ZhbGlkYXRlQ29sdW1uKGNvbHVtbiwgaW5kZXgpID09PSBmYWxzZSl7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0aWYoIXpuLmlzKGNvbHVtbiwgJ29iamVjdCcpKSB7IHJldHVybiBudWxsOyB9XG5cdFx0dmFyIF9lbGVtZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQodGhpcy5wcm9wcy5jZWxsUmVuZGVyLCB7XG5cdFx0XHRjb2x1bW46IGNvbHVtbixcblx0XHRcdGNlbGxJbmRleDogaW5kZXgsIFxuXHRcdFx0dHJvd2FkZGVyOiB0aGlzXG5cdFx0fSk7XG5cdFx0aWYoX2VsZW1lbnQpe1xuXHRcdFx0cmV0dXJuIF9lbGVtZW50O1xuXHRcdH1cblx0XHRcblx0XHR2YXIgX2NvbnRlbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudChjb2x1bW4ucmVuZGVyLCB7XG5cdFx0XHRjb2x1bW46IGNvbHVtbixcblx0XHRcdGNlbGxJbmRleDogaW5kZXgsIFxuXHRcdFx0dHJvd2FkZGVyOiB0aGlzXG5cdFx0fSk7XG5cblx0XHR2YXIgX3Jvd2FkZGVyID0gem4uZXh0ZW5kKGNvbHVtbi5yb3dhZGRlciwgY29sdW1uLmZpbHRlcik7XG5cdFx0aWYoX3Jvd2FkZGVyLnJlcXVpcmVkICYmIHRoaXMuc3RhdGUucmVxdWlyZWRfZmllbGRzLmluZGV4T2YoY29sdW1uLm5hbWUpID09IC0xKSB7XG5cdFx0XHR0aGlzLnN0YXRlLnJlcXVpcmVkX2ZpZWxkcy5wdXNoKGNvbHVtbi5uYW1lKTtcblx0XHR9XG5cdFx0aWYoIV9jb250ZW50ICYmIF9yb3dhZGRlcikge1xuXHRcdFx0aWYoem4uaXMoX3Jvd2FkZGVyLCAnZnVuY3Rpb24nKSkge1xuXHRcdFx0XHRpZihfcm93YWRkZXIucHJvdG90eXBlICYmIF9yb3dhZGRlci5wcm90b3R5cGUucmVuZGVyKSB7XG5cdFx0XHRcdFx0X2NvbnRlbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudChfcm93YWRkZXIsIHtcblx0XHRcdFx0XHRcdGNvbHVtbjogY29sdW1uLFxuXHRcdFx0XHRcdFx0dHJvd2FkZGVyOiB0aGlzXG5cdFx0XHRcdFx0fSk7XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIF9yb3dhZGRlciA9IF9yb3dhZGRlci5jYWxsKG51bGwsIGNvbHVtbiwgdGhpcyk7XG4gICAgICAgICAgICAgICAgfVxuXHRcdFx0fVxuXG5cdFx0XHRpZih6bi5pcyhfcm93YWRkZXIsICdvYmplY3QnKSkge1xuXHRcdFx0XHR2YXIgX2tleSA9IF9yb3dhZGRlci5rZXkgfHwgY29sdW1uLm5hbWU7XG5cdFx0XHRcdGlmKHpuLmlzKF9rZXksICdmdW5jdGlvbicpKSB7XG5cdFx0XHRcdFx0X2tleSA9IF9rZXkuY2FsbChudWxsLCBjb2x1bW4sIHRoaXMpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0X2NvbnRlbnQgPSA8ZmlsdGVyLkZpbHRlckZpZWxkIHJlcXVpcmVkPXtfcm93YWRkZXIucmVxdWlyZWR9IGtleT17X2tleSB8fCB6bi51dWlkKCl9IHsuLi5fcm93YWRkZXJ9IG5hbWU9e2NvbHVtbi5uYW1lfSBvbkNoYW5nZT17dGhpcy5fX29uRmlsdGVyQ2hhbmdlfSBvbkNhbmNlbD17dGhpcy5fX29uRmlsdGVyQ2FuY2VsfSAvPjtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR2YXIgX2NlbGwgPSB6bi5leHRlbmQoeyBzdHlsZToge30sIGNsYXNzTmFtZTogJycgfSwgdGhpcy5wcm9wcy5jZWxsKTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHRkIGtleT17aW5kZXh9IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3RmaWx0ZXItY2VsbCcsIChjb2x1bW4uZml4ZWQ/J2ZpeGVkJzonJyksIChfcm93YWRkZXIucmVxdWlyZWQ/J3JlcXVpcmVkJzonJyksIF9jZWxsLmNsYXNzTmFtZSl9IHN0eWxlPXt6bnVpLnJlYWN0LnN0eWxlKF9jZWxsLnN0eWxlLCBjb2x1bW4uZml4ZWRTdHlsZXMpfT5cblx0XHRcdFx0eyBfY29udGVudCB9XG5cdFx0XHQ8L3RkPlxuXHRcdCk7XG5cdH0sXG5cdF9fcmVuZGVyUm93OiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX2VsZW1lbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudCh0aGlzLnByb3BzLnJvd1JlbmRlciwge1xuXHRcdFx0dHJvd2FkZGVyOiB0aGlzXG5cdFx0fSk7XG5cdFx0aWYoX2VsZW1lbnQpe1xuXHRcdFx0cmV0dXJuIF9lbGVtZW50O1xuXHRcdH1cblx0XHR2YXIgX3JvdyA9IHpuLmV4dGVuZCh7IGNsYXNzTmFtZTogJycsIHN0eWxlOiB7fSB9LCB0aGlzLnByb3BzLnJvdyk7XG5cdFx0cmV0dXJuIChcblx0XHRcdDx0ciBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwidGZpbHRlci1yb3cgenItdGFibGUtdHJvd1wiLCBfcm93LmNsYXNzTmFtZSl9IHN0eWxlPXtfcm93LnN0eWxlfT5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdCh0aGlzLnByb3BzLmNvbHVtbnN8fFtdKS5tYXAodGhpcy5fX3JlbmRlckNlbGwpXG5cdFx0XHRcdH1cblx0XHRcdDwvdHI+XG5cdFx0KTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8dGhlYWQga2V5PXt0aGlzLnN0YXRlLnN1Ym1pdF9rZXl9IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci10YWJsZS10cm93YWRkZXIgenItdGFibGUtdGZpbHRlclwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSwgdGhpcy5zdGF0ZS5jbGFzc05hbWUpfSBzdHlsZT17em51aS5yZWFjdC5zdHlsZSh0aGlzLnByb3BzLnN0eWxlLCB0aGlzLnN0YXRlLnN0eWxlKX0+XG5cdFx0XHRcdHt0aGlzLl9fcmVuZGVyUm93KCl9XG5cdFx0XHQ8L3RoZWFkPlxuXHRcdCk7XG5cdH1cbn0pOyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIENvbGdyb3VwOiByZXF1aXJlKCcuL0NvbGdyb3VwJyksXG4gICAgVEZpbHRlcjogcmVxdWlyZSgnLi9URmlsdGVyJyksXG4gICAgVFJvd0FkZGVyOiByZXF1aXJlKCcuL1RSb3dBZGRlcicpLFxuICAgIFRCb2R5OiByZXF1aXJlKCcuL1RCb2R5JyksXG4gICAgVEJvZHlFbXB0eTogcmVxdWlyZSgnLi9UQm9keUVtcHR5JyksXG4gICAgVENlbGw6IHJlcXVpcmUoJy4vVENlbGwnKSxcbiAgICBURm9vdDogcmVxdWlyZSgnLi9URm9vdCcpLFxuICAgIFRIZWFkOiByZXF1aXJlKCcuL1RIZWFkJyksXG4gICAgVFJvdzogcmVxdWlyZSgnLi9UUm93Jylcbn07IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJSZWFjdFwiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcIlJlYWN0RE9NXCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiZmlsdGVyXCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiaW5wdXRcIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJqc29uXCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wibG9hZGVyXCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wicGFnZXJcIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJwb3B1cFwiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcInNlbGVjdG9yXCJdOyB9KCkpOyJdLCJzb3VyY2VSb290IjoiIn0=