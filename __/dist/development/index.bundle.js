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

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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

/***/ "./table/index.js":
/*!************************!*\
  !*** ./table/index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  Colgroup: __webpack_require__(/*! ./Colgroup */ "./table/Colgroup.js"),
  TFilter: __webpack_require__(/*! ./TFilter */ "./table/TFilter.js"),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vTG9hZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9Qb3B1cFRhYmxlLmpzIiwid2VicGFjazovLy8uL1RhYmxlLmpzIiwid2VicGFjazovLy8uL1RhYmxlRWRpdG9yLmpzIiwid2VicGFjazovLy8uL1RhYmxlUGFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY2VsbC9DaGVja2JveC5qcyIsIndlYnBhY2s6Ly8vLi9jZWxsL2luZGV4LmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3RhYmxlL0NvbGdyb3VwLmpzIiwid2VicGFjazovLy8uL3RhYmxlL1RCb2R5LmpzIiwid2VicGFjazovLy8uL3RhYmxlL1RCb2R5RW1wdHkuanMiLCJ3ZWJwYWNrOi8vLy4vdGFibGUvVENlbGwuanMiLCJ3ZWJwYWNrOi8vLy4vdGFibGUvVEZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi90YWJsZS9URm9vdC5qcyIsIndlYnBhY2s6Ly8vLi90YWJsZS9USGVhZC5qcyIsIndlYnBhY2s6Ly8vLi90YWJsZS9USGVhZFNvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vdGFibGUvVFJvdy5qcyIsIndlYnBhY2s6Ly8vLi90YWJsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlsdGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW5wdXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqc29uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9hZGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGFnZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwb3B1cFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNlbGVjdG9yXCIiXSwibmFtZXMiOlsiUmVhY3QiLCJ6bnVpIiwicmVxdWlyZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJjcmVhdGVDbGFzcyIsImRpc3BsYXlOYW1lIiwicmVuZGVyIiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwicHJvcHMiLCJjbGFzc05hbWUiLCJUYWJsZVBhZ2VyIiwic2VsZWN0b3IiLCJnZXREZWZhdWx0UHJvcHMiLCJ0ZXh0S2V5IiwidmFsdWVLZXkiLCJnZXRJbml0aWFsU3RhdGUiLCJ0ZXh0IiwidmFsdWUiLCJnZXRUZXh0Iiwic3RhdGUiLCJzZXRUZXh0Iiwic2V0U3RhdGUiLCJnZXRWYWx1ZSIsInNldFZhbHVlIiwiX19vblJvd0NsaWNrIiwiZXZlbnQiLCJkcm9wZG93bkV2ZW50IiwiX2RhdGEiLCJkYXRhIiwidHJvdyIsInBvcHVwU2VsZWN0Iiwic2V0RGF0YSIsImRyb3Bkb3duIiwiY2xvc2VQb3BvdmVyIiwib25DaGFuZ2UiLCJfX3BvcHVwUmVuZGVyIiwiX3RoaXMiLCJfZXh0ZW5kcyIsInp4bnoiLCJjb2xncm91cCIsImNlbGxQYWRkaW5nIiwiZml4ZWQiLCJ0aGVhZCIsImZpbHRlciIsInRmaWx0ZXIiLCJ0Ym9keSIsIm9uUm93Q2xpY2siLCJwYWdlSW5kZXgiLCJwYWdlU2l6ZSIsIlBvcHVwU2VsZWN0IiwicmVhY3QiLCJjbGFzc25hbWUiLCJwb3B1cFJlbmRlciIsInRhYmxlIiwiTG9hZGluZyIsImJvcmRlciIsInJlc2V0Q2hlY2tlZHMiLCJmaXhlZExheW91dCIsImxvYWRpbmdFbmFibGVkIiwiZGF0YUluZGV4RW5hYmxlZCIsInJvd0tleSIsImNvbHVtbnMiLCJjaGVja2VkcyIsImNvbXBvbmVudERpZE1vdW50Iiwib25Db21wb25lbnREaWRNb3VudCIsIl9fc29ydEZ1bmN0aW9uIiwibmV4dCIsInByZXYiLCJrZXkiLCJfc29ydCIsInNvcnRGdW5jdGlvbiIsIl9fb25Tb3J0Iiwic29ydHMiLCJfcmV0dXJuIiwib25Tb3J0Q2hhbmdlIiwiem4iLCJpc1pOT2JqZWN0IiwiX2FyZ3YiLCJyZWZyZXNoIiwic29ydCIsImZvcmNlVXBkYXRlIiwiX19vbkZpbHRlckNoYW5nZSIsImV2dCIsIm9uRmlsdGVyRmllbGRDaGFuZ2UiLCJfX29uRmlsdGVyIiwiZmlsdGVycyIsIm9uRmlsdGVyQ2hhbmdlIiwiX19vblRCb2R5RWFjaFJvd0RhdGEiLCJpbmRleCIsIl92YWx1ZUtleSIsImNoZWNrYm94IiwiX3ZhbHVlIiwiaW5kZXhPZiIsInB1c2giLCJvbkVhY2hSb3dEYXRhIiwiX190Ym9keURhdGFSZW5kZXIiLCJsZW5ndGgiLCJUQm9keUVtcHR5IiwiY29udGV4dCIsIlRCb2R5Iiwicm93IiwiZWFjaFJvd0RhdGEiLCJmaXhlZENvbHVtbnMiLCJfX3Rib2R5TG9hZGluZ1JlbmRlciIsImxvYWRpbmciLCJfX29uVEhlYWRDb2x1bW5DaGFuZ2UiLCJfX3Rib2R5RGF0YUxvYWRlZCIsIm9uRGF0YUxvYWRlZCIsImlzIiwicmVzdWx0IiwiX19vbkRhdGFDcmVhdGVkIiwibGlmeWN5Y2xlIiwib25EYXRhQ3JlYXRlZCIsImNhbGxiYWNrIiwicmVzZXQiLCJyZXNldENoZWNrZWQiLCJhZnRlciIsInNlbmRlciIsInJlc3BvbnNlIiwieGhyIiwicmVmcmVzaEhlYWRlcnMiLCJfX2ZpeGVkU3R5bGVzIiwiX2NvbHVtbnMiLCJfd2lkdGgiLCJpIiwid2lkdGgiLCJsZWZ0IiwiX19yZW5kZXJUQm9keSIsIl90aGlzMiIsIl9yZXN1bHQiLCJvbkRhdGFJbml0aWFsIiwiRGF0YUxpZmVjeWNsZSIsImRhdGFSZW5kZXIiLCJsb2FkaW5nUmVuZGVyIiwicmVzcG9uc2VIYW5kbGVyIiwib25GaW5pc2hlZCIsIl9fb25GaXhlZExheW91dEJvZHlTY3JvbGwiLCJlIiwiX2xheW91dEhlYWRlciIsInNjcm9sbExlZnQiLCJ0YXJnZXQiLCJfX3JlbmRlciIsIl90aGlzMyIsIm1hcCIsIml0ZW0iLCJmaXhlZFN0eWxlcyIsIl9zdHlsZSIsInJlZiIsImNlbGxTcGFjaW5nIiwiYXR0cnMiLCJjYXB0aW9uIiwiQ29sZ3JvdXAiLCJrZXlNYXBwaW5nIiwiVEhlYWQiLCJvblNvcnQiLCJvbkNvbHVtbkNoYW5nZSIsIlRGaWx0ZXIiLCJvbkZpbHRlciIsIm9uU2Nyb2xsIiwic2hvd0Zvb3QiLCJ0Zm9vdCIsIlRGb290IiwiY2hpbGRyZW5SZW5kZXIiLCJjaGlsZHJlbiIsIl9fcm93SGVhZENoZWNrYm94Q2hlY2tlZCIsIl9jaGVja2VkcyIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiX3N0ZXAiLCJzIiwibiIsImRvbmUiLCJfX2NoZWNrZWREaXNhYmxlZF9fIiwiZXJyIiwiZiIsIl9fb25Sb3dIZWFkQ2hlY2tib3hDaGFuZ2UiLCJzdG9wUHJvcGFnYXRpb24iLCJjaGVja2VkIiwiX2l0ZXJhdG9yMiIsIl9zdGVwMiIsIl9pdGVyYXRvcjMiLCJfc3RlcDMiLCJzcGxpY2UiLCJvbkNoZWNrYm94Q2hhbmdlIiwiX19pbml0Q2hlY2tib3giLCJfdGhpczQiLCJfY2hlY2tib3giLCJoZWFkIiwiYXJndiIsIl90YWJsZSIsIkNoZWNrYm94IiwianVzdGlmeUNvbnRlbnQiLCJ1dWlkIiwiYm9keSIsIm9uQm9keUNvbHVtbkNoZWNrYm94UmVuZGVyIiwiVW5jb250cm9sQ2hlY2tib3giLCJkaXNhYmxlZCIsIm9uQ2xpY2siLCJ0eXBlIiwiZXh0ZW5kIiwidW5zaGlmdCIsIl9faW5pdEluZGV4Q29sdW1uIiwibGFiZWwiLCJuYW1lIiwidGV4dEFsaWduIiwicm93SW5kZXgiLCJiaW5kIiwiX19jb2x1bW5zTG9hZGVkIiwiX3RoaXM1IiwiX3RlbXAiLCJfY29sdW1uSXRlcmF0b3IiLCJjb2x1bW5JdGVyYXRvciIsImNvbHVtbiIsImRlZXBBc3NpZ24iLCJfdHlwZW9mIiwib25Db2x1bW5zTG9hZGVkIiwiX19vbkNvbHVtbkRhdGFDcmVhdGVkIiwibGlmZWN5Y2xlIiwib25Db2x1bW5zQ3JlYXRlZCIsImdldERhdGEiLCJyZW1vdmVSb3dEYXRhIiwidXBkYXRlUm93RGF0YSIsIl9pbmRleCIsIm9uTG9hZGluZyIsIm9uQ29sdW1uTG9hZGluZyIsIm9uRXJyb3IiLCJvbkNvbHVtbkxvYWRFcnJvciIsIlRhYmxlIiwiaW5wdXQiLCJfX2NlbGxDaGFuZ2UiLCJ0Y2VsbCIsIl9fY29sdW1uQm9keVJlbmRlciIsIklucHV0Iiwib25CbHVyIiwib25FbnRlciIsIl9fY29sdW1uSXRlcmF0b3IiLCJvbkRhdGFDaGFuZ2UiLCJhZGRSb3ciLCJjb25jYXQiLCJwYWdlciIsImNvdW50IiwiY3VycmVudCIsInRvdGFsIiwic2V0UGFnZUluZGV4IiwiX19yZXNldF9fIiwiX19vbkRhdGFJbml0aWFsIiwiX19oYW5kbGVQYWdlQ2hhbmdlZCIsIm5ld1BhZ2UiLCJvblBhZ2VDaGFuZ2VkIiwiX19oYW5kbGVQYWdlU2l6ZUNoYW5nZSIsIl9fcmVuZGVyUGFnZXIiLCJfY29sdW1uU2l6ZSIsIl9zdGF0ZSIsIl9lbGVtZW50IiwiX3BhZ2VyUHJvcHMiLCJvblBhZ2VTaXplQ2hhbmdlIiwiX0NvbXBvbmVudCIsIlBhZ2VyIiwicGF0aCIsIndpbmRvdyIsImNvbXBvbmVudCIsImNyZWF0ZVJlYWN0RWxlbWVudCIsInBhZ2VyUmVuZGVyIiwiY29sU3BhbiIsIl9tZXRob2QiLCJtZXRob2QiLCJfcGFyYW1zIiwiX2tleU1hcHMiLCJrZXlNYXBzIiwicGFyYW1zIiwiX19vbkRhdGFMb2FkZWQiLCJjb2RlIiwiY29uc29sZSIsImVycm9yIiwiZGV0YWlsIiwiX3BhZ2VyQ291bnQiLCJNYXRoIiwiY2VpbCIsIl9fb25DaGVja2JveENoYW5nZSIsIl9fb25IZWFkQ2hhbmdlIiwiX19vbkJvZHlDaGFuZ2UiLCJsb2ciLCJjZWxsIiwiUG9wdXBUYWJsZSIsIlRhYmxlRWRpdG9yIiwiX192YWxpZGF0ZUNvbHVtbiIsInZhbGlkYXRlIiwiYXBwbHkiLCJfa2V5TWFwcGluZyIsIl93aWR0aEtleSIsIl93aWR0aFZhbHVlIiwiVFJvdyIsImxvYWRlciIsIl9wYWdlU2l6ZSIsIl9jb2x1bW5LZXlNYXAiLCJfZGVmYXVsdCIsInVuZGVmaW5lZCIsImFjdGl2ZSIsImNvbHVtbktleU1hcCIsIl9faW5pdGlhbERhdGFJdGVtIiwiZm9ybWF0IiwiZGF0YVR5cGUiLCJldmFsIiwic3RyaW5naWZ5UHJpY2UiLCJfX2dldERhdGEiLCJfcGFnZUluZGV4Iiwic2xpY2UiLCJtaW4iLCJfX3JlbmRlckxvYWRpbmciLCJEYXRhTG9hZGVyIiwidGl0bGUiLCJfbG9hZGluZyIsIl9fcmVuZGVyRW1wdHkiLCJlbXB0eVJlbmRlciIsImZvY3VzYWJsZSIsInJvbGUiLCJ4bWxucyIsInZpZXdCb3giLCJmaWxsIiwiZCIsIl9lbXB0eSIsImVtcHR5IiwiX19vbkNlbGxDbGljayIsIm9uQ2VsbENsaWNrIiwiX19yZW5kZXJSb3ciLCJyb3dSZW5kZXIiLCJfcm93S2V5IiwiX2tleSIsImNlbGxSZW5kZXIiLCJfX3BhZ2VDaGFuZ2UiLCJfX3BhZ2VzUmVuZGVyIiwiX3BhZ2VDb3VudCIsIl9wYWdlcyIsIl9fcmVuZGVyRGF0YSIsIkZyYWdtZW50IiwiUmVhY3RET00iLCJfX3JlbmRlckNlbGxDb250ZW50IiwiX3JlbmRlciIsImNlbGxJbmRleCIsIl9fY2VsbENsaWNrIiwiZmluZFRERE9NIiwiZmluZERPTU5vZGUiLCJfY29sdW1uIiwiYm9keUNsYXNzTmFtZSIsImJvZHlTdHlsZSIsImZpbHRlckZpZWxkIiwib3B0IiwiZW1wdHlWYWx1ZUVuYWJsZWQiLCJfX29uRmlsdGVyQ2FuY2VsIiwiX19yZW5kZXJDZWxsIiwiX2NvbnRlbnQiLCJfZmlsdGVyIiwicHJvdG90eXBlIiwiY2FsbCIsIkZpbHRlckZpZWxkIiwib25DYW5jZWwiLCJfY2VsbCIsIl9yb3ciLCJfX3JlbmRlckNoaWxkcmVuIiwiZm9vdCIsIlRIZWFkU29ydCIsInBvcHVwIiwienJqc29uIiwiX19vbkNvbHVtblNvcnQiLCJfX29uQ29sdW1uRWRpdG9yQ2hhbmdlIiwiY2hpbGQiLCJyb290IiwiX3Jvb3QiLCJfX2ljb25DbGlja1JlbmRlciIsInBhZGRpbmciLCJtYXhIZWlnaHQiLCJvdmVyZmxvdyIsImVkaXRvciIsIm9iamVjdCIsImZvbGQiLCJkaXNwbGF5Q2xvc3VyZSIsImRpc3BsYXlJdGVtQ291bnQiLCJfX3NvcnRSZW5kZXIiLCJfbWFwcGluZyIsIl9sYWJlbEtleSIsIl9sYWJlbCIsInJlcXVpcmVkIiwiZWRpdGFibGUiLCJEcm9wZG93biIsInBvcG92ZXIiLCJjbG9zZWFibGUiLCJfX3JlbmRlckljb24iLCJfX2ljb25DbGljayIsIlRDZWxsIiwiX19nZXRUYXJnZXRURCIsInRhZ05hbWUiLCJwYXJlbnROb2RlIiwiX3RkIiwiZmluZFRSRE9NIiwidGQiLCJfX2NlbGxSZW5kZXIiLCJfcHJvcHMiLCJmaXhlZFN0eWxlIiwiX19maXhlZFdpZHRoIiwib25EYXRhVmFsaWRhdGUiLCJfY29sdW1uTGVuZ3RoIiwiX2NsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLElBQUlBLEtBQUssR0FBR0MsSUFBSSxDQUFDRCxLQUFLLElBQUlFLG1CQUFPLENBQUMs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QWlDLEVBQUUsSTs7Ozs7Ozs7Ozs7QUNBaEQsYUFBYSxnQ0FBZ0MsRUFBRSxJOzs7Ozs7Ozs7OztBQ0EvQyxhQUFhLCtCQUErQixFQUFFLEk7Ozs7Ozs7Ozs7O0FDQTlDLGFBQWEsaUNBQWlDLEVBQUUsSTs7Ozs7Ozs7Ozs7QUNBaEQsYUFBYSxnQ0FBZ0MsRUFBRSxJOzs7Ozs7Ozs7OztBQ0EvQyxhQUFhLGdDQUFnQyxFQUFFLEk7Ozs7Ozs7Ozs7O0FDQS9DLGFBQWEsbUNBQW1DLEVBQUUsSSIsImZpbGUiOiIuL2Rpc3QvZGV2ZWxvcG1lbnQvaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC5qc1wiKTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXYgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9IGNsYXNzTmFtZT17J3pyLXRhYmxlLWxvYWRpbmcgJyArICh0aGlzLnByb3BzLmNsYXNzTmFtZSB8fCAnJyl9PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGRzLXJpbmdcIj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdCk7XHJcblx0fVxyXG59KTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XHJcbnZhciBUYWJsZVBhZ2VyID0gcmVxdWlyZSgnLi9UYWJsZVBhZ2VyJyk7XHJcbnZhciBzZWxlY3RvciA9IHJlcXVpcmUoJ3pudWktcmVhY3Qtc2VsZWN0b3InKTtcclxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcblx0ZGlzcGxheU5hbWU6ICdaUlBvcHVwVGFibGUnLFxyXG5cdGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCl7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHR0ZXh0S2V5OiAnenhuel9MYWJlbCcsXHJcblx0XHRcdHZhbHVlS2V5OiAnenhuel9VVUlEJ1xyXG5cdFx0fTtcclxuXHR9LFxyXG4gICAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpe1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0dGV4dDogdGhpcy5wcm9wcy50ZXh0LFxyXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5wcm9wcy52YWx1ZVxyXG5cdFx0fTtcclxuXHR9LFxyXG4gICAgZ2V0VGV4dDogZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUudGV4dDtcclxuICAgIH0sXHJcbiAgICBzZXRUZXh0OiBmdW5jdGlvbiAodGV4dCl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHRleHQ6IHRleHRcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcblx0Z2V0VmFsdWU6IGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnZhbHVlO1xyXG4gICAgfSxcclxuICAgIHNldFZhbHVlOiBmdW5jdGlvbiAodmFsdWUpe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWVcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBfX29uUm93Q2xpY2s6IGZ1bmN0aW9uIChldmVudCwgZHJvcGRvd25FdmVudCl7XHJcbiAgICAgICAgdmFyIF9kYXRhID0gZXZlbnQuZGF0YS50cm93LnByb3BzLmRhdGE7XHJcbiAgICAgICAgZXZlbnQuZGF0YSA9IF9kYXRhO1xyXG4gICAgICAgIGV2ZW50LnZhbHVlID0gX2RhdGFbdGhpcy5wcm9wcy52YWx1ZUtleV07XHJcblx0XHRldmVudC50ZXh0ID0gX2RhdGFbdGhpcy5wcm9wcy50ZXh0S2V5XTtcclxuICAgICAgICBkcm9wZG93bkV2ZW50LnBvcHVwU2VsZWN0LnNldERhdGEoZXZlbnQudmFsdWUsIGV2ZW50LnRleHQpO1xyXG4gICAgICAgIGRyb3Bkb3duRXZlbnQuZHJvcGRvd24uY2xvc2VQb3BvdmVyKCk7XHJcbiAgICAgICAgdGhpcy5zZXRWYWx1ZShldmVudC52YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSAmJiB0aGlzLnByb3BzLm9uQ2hhbmdlKGV2ZW50LCBkcm9wZG93bkV2ZW50KTtcclxuICAgIH0sXHJcblx0X19wb3B1cFJlbmRlcjogZnVuY3Rpb24gKGRyb3Bkb3duRXZlbnQpe1xyXG5cdFx0cmV0dXJuIDxUYWJsZVBhZ2VyXHJcbiAgICAgICAgICAgIHp4bno9e3RydWV9XHJcbiAgICAgICAgICAgIGNvbGdyb3VwPXt7fX1cclxuICAgICAgICAgICAgY2VsbFBhZGRpbmc9ezV9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInpyLXRhYmxlLWNsYXNzLW5vcm1hbFwiXHJcbiAgICAgICAgICAgIGZpeGVkPXt0cnVlfVxyXG4gICAgICAgICAgICB0aGVhZD17e1xyXG4gICAgICAgICAgICAgICAgZmlsdGVyOiB0cnVlXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHRmaWx0ZXI9e3t9fVxyXG4gICAgICAgICAgICB0Ym9keT17e1xyXG4gICAgICAgICAgICAgICAgb25Sb3dDbGljazogKGV2ZW50KT0+dGhpcy5fX29uUm93Q2xpY2soZXZlbnQsIGRyb3Bkb3duRXZlbnQpXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHBhZ2VJbmRleD17MX1cclxuICAgICAgICAgICAgcGFnZVNpemU9ezV9IHsuLi50aGlzLnByb3BzfSAvPjtcclxuXHR9LFxyXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxzZWxlY3Rvci5Qb3B1cFNlbGVjdCBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd6ci10YWJsZS1wb3B1cC10YWJsZScsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9IHBvcHVwUmVuZGVyPXt0aGlzLl9fcG9wdXBSZW5kZXJ9IC8+XHJcblx0XHQpO1xyXG5cdH1cclxufSk7IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xyXG52YXIgdGFibGUgPSByZXF1aXJlKCcuL3RhYmxlL2luZGV4Jyk7XHJcbnZhciBzZWxlY3RvciA9IHJlcXVpcmUoJ3pudWktcmVhY3Qtc2VsZWN0b3InKTtcclxudmFyIExvYWRpbmcgPSByZXF1aXJlKCcuL0xvYWRpbmcnKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG5cdGRpc3BsYXlOYW1lOidaUlRhYmxlJyxcclxuXHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpe1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0Ym9yZGVyOiB0cnVlLFxyXG5cdFx0XHRyZXNldENoZWNrZWRzOiBmYWxzZSxcclxuXHRcdFx0Zml4ZWRMYXlvdXQ6IGZhbHNlLFxyXG5cdFx0XHRsb2FkaW5nRW5hYmxlZDogdHJ1ZSxcclxuXHRcdFx0ZGF0YUluZGV4RW5hYmxlZDogZmFsc2UsXHJcblx0XHRcdHZhbHVlS2V5OiAnenhuel9VVUlEJyxcclxuXHRcdFx0cm93S2V5OiAnenhuel9VVUlEJ1xyXG5cdFx0fTtcclxuXHR9LFxyXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCl7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRkYXRhOiBbXSwgXHJcblx0XHRcdGNvbHVtbnM6IFtdLFxyXG5cdFx0XHRjaGVja2VkczogdGhpcy5wcm9wcy5jaGVja2VkcyB8fCBbXVxyXG5cdFx0fTtcclxuXHR9LFxyXG5cdGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpe1xyXG5cdFx0dGhpcy5wcm9wcy5vbkNvbXBvbmVudERpZE1vdW50ICYmIHRoaXMucHJvcHMub25Db21wb25lbnREaWRNb3VudCh0aGlzKTtcclxuXHR9LFxyXG5cdF9fc29ydEZ1bmN0aW9uOiBmdW5jdGlvbiAobmV4dCwgcHJldiwga2V5LCBfc29ydCl7XHJcblx0XHRpZih0aGlzLnByb3BzLnNvcnRGdW5jdGlvbikge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5wcm9wcy5zb3J0RnVuY3Rpb24obmV4dCwgcHJldiwga2V5LCBfc29ydCk7XHJcblx0XHR9XHJcblx0XHRpZihfc29ydD09J2Rlc2MnKXtcclxuXHRcdFx0aWYobmV4dFtrZXldID4gcHJldltrZXldKXtcclxuXHRcdFx0XHRyZXR1cm4gMTtcclxuXHRcdFx0fWVsc2UgaWYobmV4dFtrZXldID09IHByZXZba2V5XSl7XHJcblx0XHRcdFx0cmV0dXJuIDA7XHJcblx0XHRcdH1lbHNlIGlmKG5leHRba2V5XSA8IHByZXZba2V5XSl7XHJcblx0XHRcdFx0cmV0dXJuIC0xO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZihfc29ydD09J2FzYycpe1xyXG5cdFx0XHRpZihuZXh0W2tleV0gPCBwcmV2W2tleV0pe1xyXG5cdFx0XHRcdHJldHVybiAxO1xyXG5cdFx0XHR9ZWxzZSBpZihuZXh0W2tleV0gPT0gcHJldltrZXldKXtcclxuXHRcdFx0XHRyZXR1cm4gMDtcclxuXHRcdFx0fWVsc2UgaWYobmV4dFtrZXldID4gcHJldltrZXldKXtcclxuXHRcdFx0XHRyZXR1cm4gLTE7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9LFxyXG5cdF9fb25Tb3J0OiBmdW5jdGlvbiAoc29ydHMpe1xyXG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLm9uU29ydENoYW5nZSAmJiB0aGlzLnByb3BzLm9uU29ydENoYW5nZShzb3J0cywgdGhpcy5zdGF0ZS5kYXRhLCB0aGlzKTtcclxuXHRcdGlmKF9yZXR1cm4gIT09IGZhbHNlKXtcclxuXHRcdFx0aWYodGhpcy5kYXRhICYmIHpuLmlzWk5PYmplY3QodGhpcy5kYXRhKSkge1xyXG5cdFx0XHRcdGlmKCF0aGlzLmRhdGEuX2FyZ3YuZGF0YSkge1xyXG5cdFx0XHRcdFx0dGhpcy5kYXRhLl9hcmd2LmRhdGEgPSB7fTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy5kYXRhLl9hcmd2LmRhdGEuc29ydHMgPSBzb3J0cztcclxuXHRcdFx0XHR0aGlzLmRhdGEucmVmcmVzaCgpO1xyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHR2YXIgX3NvcnQgPSBudWxsO1xyXG5cdFx0XHRcdGZvcih2YXIga2V5IGluIHNvcnRzKXtcclxuXHRcdFx0XHRcdF9zb3J0ID0gc29ydHNba2V5XVxyXG5cdFx0XHRcdFx0dGhpcy5zdGF0ZS5kYXRhID0gdGhpcy5zdGF0ZS5kYXRhLnNvcnQoKG5leHQsIHByZXYpID0+IHRoaXMuX19zb3J0RnVuY3Rpb24obmV4dCwgcHJldiwga2V5LCBfc29ydCkpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0dGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSxcclxuXHRfX29uRmlsdGVyQ2hhbmdlOiBmdW5jdGlvbiAoZXZ0LCBkYXRhKXtcclxuXHRcdHZhciBfcmV0dXJuID0gdGhpcy5wcm9wcy5vbkZpbHRlckZpZWxkQ2hhbmdlICYmIHRoaXMucHJvcHMub25GaWx0ZXJGaWVsZENoYW5nZShldnQsIGRhdGEsIHRoaXMpO1xyXG5cdFx0aWYoX3JldHVybiA9PT0gZmFsc2UpIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0X19vbkZpbHRlcjogZnVuY3Rpb24gKGZpbHRlcnMpe1xyXG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLm9uRmlsdGVyQ2hhbmdlICYmIHRoaXMucHJvcHMub25GaWx0ZXJDaGFuZ2UoZmlsdGVycywgdGhpcy5zdGF0ZS5kYXRhLCB0aGlzKTtcclxuXHRcdGlmKF9yZXR1cm4gIT09IGZhbHNlKXtcclxuXHRcdFx0aWYodGhpcy5kYXRhICYmIHpuLmlzWk5PYmplY3QodGhpcy5kYXRhKSkge1xyXG5cdFx0XHRcdGlmKCF0aGlzLmRhdGEuX2FyZ3YuZGF0YSkge1xyXG5cdFx0XHRcdFx0dGhpcy5kYXRhLl9hcmd2LmRhdGEgPSB7fTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy5kYXRhLl9hcmd2LmRhdGEuZmlsdGVycyA9IGZpbHRlcnM7XHJcblx0XHRcdFx0dGhpcy5kYXRhLnJlZnJlc2goKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0sXHJcblx0X19vblRCb2R5RWFjaFJvd0RhdGE6IGZ1bmN0aW9uIChkYXRhLCBpbmRleCwgdGJvZHkpe1xyXG5cdFx0dmFyIF92YWx1ZUtleSA9IHRoaXMucHJvcHMudmFsdWVLZXkgfHwgJ3p4bnpfVVVJRCc7XHJcblx0XHRpZih0aGlzLnByb3BzLmNoZWNrYm94ICYmIHRoaXMucHJvcHMudmFsdWUgJiYgX3ZhbHVlS2V5KSB7XHJcblx0XHRcdHZhciBfdmFsdWUgPSBkYXRhW192YWx1ZUtleV07XHJcblx0XHRcdGlmKHRoaXMucHJvcHMudmFsdWUuaW5kZXhPZihfdmFsdWUpIT0tMSl7XHJcblx0XHRcdFx0dGhpcy5zdGF0ZS5jaGVja2Vkcy5wdXNoKF92YWx1ZSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHRoaXMucHJvcHMub25FYWNoUm93RGF0YSAmJiB0aGlzLnByb3BzLm9uRWFjaFJvd0RhdGEoZGF0YSwgaW5kZXgsIHRib2R5LCB0aGlzKTtcclxuXHR9LFxyXG5cdF9fdGJvZHlEYXRhUmVuZGVyOiBmdW5jdGlvbiAoY29sdW1ucyl7XHJcblx0XHRpZighdGhpcy5zdGF0ZS5kYXRhLmxlbmd0aCl7XHJcblx0XHRcdHJldHVybiA8dGFibGUuVEJvZHlFbXB0eSBjb250ZXh0PXt0aGlzLnByb3BzLmNvbnRleHR9IHsuLi50aGlzLnByb3BzLnRib2R5fSBjb2x1bW5zPXtjb2x1bW5zfSBkYXRhPXt0aGlzLnN0YXRlLmRhdGF9IHRhYmxlPXt0aGlzfSAvPjtcclxuXHRcdH1cclxuXHRcdHJldHVybiA8dGFibGUuVEJvZHkgcm93S2V5PXt0aGlzLnByb3BzLnJvd0tleX0gcm93PXt0aGlzLnByb3BzLnJvd30gY29udGV4dD17dGhpcy5wcm9wcy5jb250ZXh0fSBlYWNoUm93RGF0YT17dGhpcy5fX29uVEJvZHlFYWNoUm93RGF0YX0gey4uLnRoaXMucHJvcHMudGJvZHl9IGNvbHVtbnM9e2NvbHVtbnN9IGZpeGVkQ29sdW1ucz17dGhpcy5wcm9wcy5maXhlZENvbHVtbnN9IGRhdGE9e3RoaXMuc3RhdGUuZGF0YX0gdGFibGU9e3RoaXN9IC8+O1xyXG5cdH0sXHJcblx0X190Ym9keUxvYWRpbmdSZW5kZXI6IGZ1bmN0aW9uIChjb2x1bW5zKXtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDx0Ym9keSBjbGFzc05hbWU9J3Rib2R5LWxvYWRlcic+XHJcblx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0PHRkPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZGF0YS1sb2FkaW5nJz5cclxuXHRcdFx0XHRcdFx0XHQ8c3Bhbj7liqDovb3kuK08L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0PExvYWRpbmcgLz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdDwvdHI+XHJcblx0XHRcdDwvdGJvZHk+XHJcblx0XHQpO1xyXG5cdFx0cmV0dXJuIDx0YWJsZS5UQm9keSByb3dLZXk9e3RoaXMucHJvcHMucm93S2V5fSByb3c9e3RoaXMucHJvcHMucm93fSBjb250ZXh0PXt0aGlzLnByb3BzLmNvbnRleHR9IHsuLi50aGlzLnByb3BzLnRib2R5fSBjb2x1bW5zPXtjb2x1bW5zfSBmaXhlZENvbHVtbnM9e3RoaXMucHJvcHMuZml4ZWRDb2x1bW5zfSBsb2FkaW5nPXt0cnVlfSB0YWJsZT17dGhpc30gLz47XHJcblx0fSxcclxuXHRfX29uVEhlYWRDb2x1bW5DaGFuZ2U6IGZ1bmN0aW9uIChkYXRhLCBpbmRleCl7XHJcblx0XHRpZih0aGlzLnN0YXRlLmNvbHVtbnMpe1xyXG5cdFx0XHR0aGlzLnN0YXRlLmNvbHVtbnNbaW5kZXhdID0gZGF0YTtcclxuXHRcdFx0dGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0X190Ym9keURhdGFMb2FkZWQ6IGZ1bmN0aW9uIChkYXRhKSB7XHJcblx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMub25EYXRhTG9hZGVkICYmIHRoaXMucHJvcHMub25EYXRhTG9hZGVkKGRhdGEsIHRoaXMpO1xyXG5cdFx0aWYoX3JldHVybiAhPT0gZmFsc2Upe1xyXG5cdFx0XHRpZih6bi5pcyhkYXRhLCAnb2JqZWN0JykgJiYgZGF0YS5yZXN1bHQpe1xyXG5cdFx0XHRcdGRhdGEgPSBkYXRhLnJlc3VsdDtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgZGF0YTogZGF0YSB9KTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdF9fb25EYXRhQ3JlYXRlZDogZnVuY3Rpb24gKGRhdGEsIGxpZnljeWNsZSl7XHJcblx0XHR0aGlzLmRhdGEgPSBkYXRhO1xyXG5cdFx0dGhpcy5wcm9wcy5vbkRhdGFDcmVhdGVkICYmIHRoaXMucHJvcHMub25EYXRhQ3JlYXRlZChkYXRhLCB0aGlzLCBsaWZ5Y3ljbGUpO1xyXG5cdH0sXHJcblx0cmVmcmVzaDogZnVuY3Rpb24gKGNhbGxiYWNrLCByZXNldCl7XHJcblx0XHRpZih0aGlzLnByb3BzLnJlc2V0Q2hlY2tlZCB8fCByZXNldCkge1xyXG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0XHRjaGVja2VkczogW11cclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYodGhpcy5kYXRhKXtcclxuXHRcdFx0dGhpcy5kYXRhLnJlZnJlc2gobnVsbCwge1xyXG5cdFx0XHRcdGFmdGVyOiAoc2VuZGVyLCBkYXRhLCByZXNwb25zZSwgeGhyKT0+eyBcclxuXHRcdFx0XHRcdGNhbGxiYWNrICYmIGNhbGxiYWNrKGRhdGEsIHJlc3BvbnNlLCB4aHIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0Y2FsbGJhY2sgJiYgY2FsbGJhY2soKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9LFxyXG5cdHJlZnJlc2hIZWFkZXJzOiBmdW5jdGlvbiAoKXtcclxuXHRcdGlmKHRoaXMuY29sdW1ucyl7XHJcblx0XHRcdHRoaXMuY29sdW1ucy5yZWZyZXNoKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fSxcclxuXHRzZXREYXRhOiBmdW5jdGlvbiAoZGF0YSl7XHJcblx0XHR0aGlzLnNldFN0YXRlKHsgZGF0YTogZGF0YSB9KTtcclxuXHR9LFxyXG5cdF9fZml4ZWRTdHlsZXM6IGZ1bmN0aW9uIChpbmRleCl7XHJcblx0XHR2YXIgX2NvbHVtbnMgPSB0aGlzLnN0YXRlLmNvbHVtbnN8fFtdLCBfd2lkdGggPSAwO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IGluZGV4OyBpKyspe1xyXG5cdFx0XHRpZihfY29sdW1uc1tpXS5maXhlZCkge1xyXG5cdFx0XHRcdF93aWR0aCArPSAoX2NvbHVtbnNbaV0ud2lkdGggfHwgMCkgLSAxO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bGVmdDogX3dpZHRoIC0gMVxyXG5cdFx0fTtcclxuXHR9LFxyXG5cdF9fcmVuZGVyVEJvZHk6IGZ1bmN0aW9uIChjb2x1bW5zKXtcclxuXHRcdHZhciBfZGF0YSA9IHRoaXMucHJvcHMuZGF0YSB8fCB0aGlzLnByb3BzLnRib2R5LmRhdGE7XHJcblx0XHR2YXIgX3Jlc3VsdCA9IHRoaXMucHJvcHMub25EYXRhSW5pdGlhbCAmJiB0aGlzLnByb3BzLm9uRGF0YUluaXRpYWwoX2RhdGEsIHRoaXMpO1xyXG5cdFx0aWYoX3Jlc3VsdCl7XHJcblx0XHRcdF9kYXRhID0gX3Jlc3VsdDtcclxuXHRcdH1cclxuXHRcdHJldHVybiA8em51aS5yZWFjdC5EYXRhTGlmZWN5Y2xlIGRhdGE9e19kYXRhfSBcclxuXHRcdFx0XHRcdGRhdGFSZW5kZXI9eygpPT50aGlzLl9fdGJvZHlEYXRhUmVuZGVyKGNvbHVtbnMpfSBcclxuXHRcdFx0XHRcdGxvYWRpbmdFbmFibGVkPXt0aGlzLnByb3BzLmxvYWRpbmdFbmFibGVkfVxyXG5cdFx0XHRcdFx0bG9hZGluZ1JlbmRlcj17KCk9PnRoaXMuX190Ym9keUxvYWRpbmdSZW5kZXIoY29sdW1ucyl9XHJcblx0XHRcdFx0XHRyZXNwb25zZUhhbmRsZXI9e3RoaXMucHJvcHMucmVzcG9uc2VIYW5kbGVyfVxyXG5cdFx0XHRcdFx0b25EYXRhQ3JlYXRlZD17dGhpcy5fX29uRGF0YUNyZWF0ZWR9XHJcblx0XHRcdFx0XHRvbkZpbmlzaGVkPXt0aGlzLl9fdGJvZHlEYXRhTG9hZGVkfSAvPjtcclxuXHR9LFxyXG5cdF9fb25GaXhlZExheW91dEJvZHlTY3JvbGw6IGZ1bmN0aW9uIChlKXtcclxuXHRcdHRoaXMuX2xheW91dEhlYWRlci5zY3JvbGxMZWZ0ID0gZS50YXJnZXQuc2Nyb2xsTGVmdDtcclxuXHR9LFxyXG5cdF9fcmVuZGVyOiBmdW5jdGlvbiAoKXtcclxuXHRcdHZhciBjb2x1bW5zID0gdGhpcy5zdGF0ZS5jb2x1bW5zO1xyXG5cdFx0Y29sdW1ucyA9IGNvbHVtbnMubWFwKChpdGVtLCBpbmRleCk9PntcclxuXHRcdFx0aWYoaXRlbS5maXhlZCkge1xyXG5cdFx0XHRcdGl0ZW0uZml4ZWRTdHlsZXMgPSB0aGlzLl9fZml4ZWRTdHlsZXMoaW5kZXgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBpdGVtO1xyXG5cdFx0fSk7XHJcblx0XHRpZih0aGlzLnByb3BzLmZpeGVkTGF5b3V0KSB7XHJcblx0XHRcdHZhciBfc3R5bGUgPSB7fTtcclxuXHRcdFx0aWYodGhpcy5wcm9wcy5ib3JkZXIpIHtcclxuXHRcdFx0XHRfc3R5bGUuYm9yZGVyID0gJzFweCBzb2xpZCAjZTZlNmU2JztcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwienItdGFibGUtZml4ZWQtbGF5b3V0XCIgc3R5bGU9e19zdHlsZX0+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZpeGVkLWxheW91dC1oZWFkZXJcIiByZWY9eyhyZWYpPT50aGlzLl9sYXlvdXRIZWFkZXIgPSByZWZ9PlxyXG5cdFx0XHRcdFx0XHQ8dGFibGUgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXRhYmxlXCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gXHJcblx0XHRcdFx0XHRcdFx0c3R5bGU9e3pudWkucmVhY3Quc3R5bGUodGhpcy5wcm9wcy5zdHlsZSwgeyB3aWR0aDogdGhpcy5wcm9wcy53aWR0aCB9KX0gXHJcblx0XHRcdFx0XHRcdFx0ZGF0YS1maXhlZD17dGhpcy5wcm9wcy5maXhlZH0gXHRcclxuXHRcdFx0XHRcdFx0XHRjZWxsUGFkZGluZz17dGhpcy5wcm9wcy5jZWxsUGFkZGluZyB8fCAwfSBcclxuXHRcdFx0XHRcdFx0XHRjZWxsU3BhY2luZz17dGhpcy5wcm9wcy5jZWxsU3BhY2luZyB8fCAwfSB7Li4udGhpcy5wcm9wcy5hdHRyc30+XHJcblx0XHRcdFx0XHRcdFx0eyAhIXRoaXMucHJvcHMuY2FwdGlvbiAmJiA8Y2FwdGlvbiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2FwdGlvbi5jbGFzc05hbWV9IHN0eWxlPXt0aGlzLnByb3BzLmNhcHRpb24uc3R5bGV9Pnt0aGlzLnByb3BzLmNhcHRpb24ucmVuZGVyfTwvY2FwdGlvbj4gfVxyXG5cdFx0XHRcdFx0XHRcdHsgISF0aGlzLnByb3BzLmNvbGdyb3VwICYmIDx0YWJsZS5Db2xncm91cCBjb250ZXh0PXt0aGlzLnByb3BzLmNvbnRleHR9IGtleU1hcHBpbmc9e3RoaXMucHJvcHMua2V5TWFwcGluZ30gY29sdW1ucz17Y29sdW1uc30gey4uLnRoaXMucHJvcHMuY29sZ3JvdXB9IC8+IH1cclxuXHRcdFx0XHRcdFx0XHR7ICEhdGhpcy5wcm9wcy50aGVhZCAmJiA8dGFibGUuVEhlYWQgY29udGV4dD17dGhpcy5wcm9wcy5jb250ZXh0fSBvblNvcnQ9e3RoaXMuX19vblNvcnR9IG9uQ29sdW1uQ2hhbmdlPXt0aGlzLl9fb25USGVhZENvbHVtbkNoYW5nZX0gY29sdW1ucz17Y29sdW1uc30ga2V5TWFwcGluZz17dGhpcy5wcm9wcy5rZXlNYXBwaW5nfSB7Li4udGhpcy5wcm9wcy50aGVhZH0gdGFibGU9e3RoaXN9IC8+fVxyXG5cdFx0XHRcdFx0XHRcdHsgISF0aGlzLnByb3BzLnRmaWx0ZXIgJiYgPHRhYmxlLlRGaWx0ZXIgY29udGV4dD17dGhpcy5wcm9wcy5jb250ZXh0fSBvbkZpbHRlckNoYW5nZT17dGhpcy5fX29uRmlsdGVyQ2hhbmdlfSBvbkZpbHRlcj17dGhpcy5fX29uRmlsdGVyfSBjb2x1bW5zPXtjb2x1bW5zfSB7Li4udGhpcy5wcm9wcy50ZmlsdGVyfSB0YWJsZT17dGhpc30gLz59XHJcblx0XHRcdFx0XHRcdDwvdGFibGU+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQtbGF5b3V0LWJvZHlcIiBvblNjcm9sbD17dGhpcy5fX29uRml4ZWRMYXlvdXRCb2R5U2Nyb2xsfT5cclxuXHRcdFx0XHRcdFx0PHRhYmxlIGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci10YWJsZVwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IFxyXG5cdFx0XHRcdFx0XHRcdHN0eWxlPXt6bnVpLnJlYWN0LnN0eWxlKHRoaXMucHJvcHMuc3R5bGUsIHsgd2lkdGg6IHRoaXMucHJvcHMud2lkdGggfSl9IFxyXG5cdFx0XHRcdFx0XHRcdGRhdGEtZml4ZWQ9e3RoaXMucHJvcHMuZml4ZWR9IFx0XHJcblx0XHRcdFx0XHRcdFx0Y2VsbFBhZGRpbmc9e3RoaXMucHJvcHMuY2VsbFBhZGRpbmcgfHwgMH0gXHJcblx0XHRcdFx0XHRcdFx0Y2VsbFNwYWNpbmc9e3RoaXMucHJvcHMuY2VsbFNwYWNpbmcgfHwgMH0gey4uLnRoaXMucHJvcHMuYXR0cnN9PlxyXG5cdFx0XHRcdFx0XHRcdHsgISF0aGlzLnByb3BzLmNhcHRpb24gJiYgPGNhcHRpb24gY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNhcHRpb24uY2xhc3NOYW1lfSBzdHlsZT17dGhpcy5wcm9wcy5jYXB0aW9uLnN0eWxlfT57dGhpcy5wcm9wcy5jYXB0aW9uLnJlbmRlcn08L2NhcHRpb24+IH1cclxuXHRcdFx0XHRcdFx0XHR7ICEhdGhpcy5wcm9wcy5jb2xncm91cCAmJiA8dGFibGUuQ29sZ3JvdXAgY29udGV4dD17dGhpcy5wcm9wcy5jb250ZXh0fSBrZXlNYXBwaW5nPXt0aGlzLnByb3BzLmtleU1hcHBpbmd9IGNvbHVtbnM9e2NvbHVtbnN9IHsuLi50aGlzLnByb3BzLmNvbGdyb3VwfSAvPiB9XHJcblx0XHRcdFx0XHRcdFx0eyAodGhpcy5wcm9wcy50Ym9keSB8fCB0aGlzLnByb3BzLmRhdGEpICYmIHRoaXMuX19yZW5kZXJUQm9keShjb2x1bW5zKSB9XHJcblx0XHRcdFx0XHRcdDwvdGFibGU+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5zaG93Rm9vdCAhPT0gZmFsc2UgJiYgPGRpdiBjbGFzc05hbWU9XCJmaXhlZC1sYXlvdXQtZm9vdGVyXCI+XHJcblx0XHRcdFx0XHRcdFx0eyAhIXRoaXMucHJvcHMudGZvb3QgJiYgPHRhYmxlPjx0YWJsZS5URm9vdCBjb250ZXh0PXt0aGlzLnByb3BzLmNvbnRleHR9IGNvbHVtbnM9e2NvbHVtbnN9IHsuLi50aGlzLnByb3BzLnRmb290fSB0YWJsZT17dGhpc30gLz48L3RhYmxlPn1cclxuXHRcdFx0XHRcdFx0XHR7IHRoaXMucHJvcHMuY2hpbGRyZW5SZW5kZXIgJiYgdGhpcy5wcm9wcy5jaGlsZHJlblJlbmRlcihjb2x1bW5zLCB0aGlzKSB9XHJcblx0XHRcdFx0XHRcdFx0eyB0aGlzLnByb3BzLmNoaWxkcmVuIH1cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIF9zdHlsZSA9IHt9O1xyXG5cdFx0LypcclxuXHRcdGlmKHRoaXMucHJvcHMuYm9yZGVyKSB7XHJcblx0XHRcdF9zdHlsZS5ib3JkZXIgPSAnMXB4IHNvbGlkICNlNmU2ZTYnO1xyXG5cdFx0fVxyXG5cdFx0Ki9cclxuXHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8dGFibGUgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXRhYmxlXCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gXHJcblx0XHRcdFx0c3R5bGU9e3pudWkucmVhY3Quc3R5bGUodGhpcy5wcm9wcy5zdHlsZSwgeyB3aWR0aDogdGhpcy5wcm9wcy53aWR0aCB9LCBfc3R5bGUpfSBcclxuXHRcdFx0XHRkYXRhLWZpeGVkPXt0aGlzLnByb3BzLmZpeGVkfSBcdFxyXG5cdFx0XHRcdGNlbGxQYWRkaW5nPXt0aGlzLnByb3BzLmNlbGxQYWRkaW5nIHx8IDB9IFxyXG5cdFx0XHRcdGNlbGxTcGFjaW5nPXt0aGlzLnByb3BzLmNlbGxTcGFjaW5nIHx8IDB9IHsuLi50aGlzLnByb3BzLmF0dHJzfT5cclxuXHRcdFx0XHR7ICEhdGhpcy5wcm9wcy5jYXB0aW9uICYmIDxjYXB0aW9uIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jYXB0aW9uLmNsYXNzTmFtZX0gc3R5bGU9e3RoaXMucHJvcHMuY2FwdGlvbi5zdHlsZX0+e3RoaXMucHJvcHMuY2FwdGlvbi5yZW5kZXJ9PC9jYXB0aW9uPiB9XHJcblx0XHRcdFx0eyAhIXRoaXMucHJvcHMuY29sZ3JvdXAgJiYgPHRhYmxlLkNvbGdyb3VwIGNvbnRleHQ9e3RoaXMucHJvcHMuY29udGV4dH0ga2V5TWFwcGluZz17dGhpcy5wcm9wcy5rZXlNYXBwaW5nfSBjb2x1bW5zPXtjb2x1bW5zfSB7Li4udGhpcy5wcm9wcy5jb2xncm91cH0gLz4gfVxyXG5cdFx0XHRcdHsgISF0aGlzLnByb3BzLnRoZWFkICYmIDx0YWJsZS5USGVhZCBjb250ZXh0PXt0aGlzLnByb3BzLmNvbnRleHR9IG9uU29ydD17dGhpcy5fX29uU29ydH0gb25Db2x1bW5DaGFuZ2U9e3RoaXMuX19vblRIZWFkQ29sdW1uQ2hhbmdlfSBjb2x1bW5zPXtjb2x1bW5zfSBrZXlNYXBwaW5nPXt0aGlzLnByb3BzLmtleU1hcHBpbmd9IHsuLi50aGlzLnByb3BzLnRoZWFkfSB0YWJsZT17dGhpc30gLz59XHJcblx0XHRcdFx0eyAhIXRoaXMucHJvcHMudGZpbHRlciAmJiA8dGFibGUuVEZpbHRlciBjb250ZXh0PXt0aGlzLnByb3BzLmNvbnRleHR9IG9uRmlsdGVyPXt0aGlzLl9fb25GaWx0ZXJ9IGNvbHVtbnM9e2NvbHVtbnN9IHsuLi50aGlzLnByb3BzLnRmaWx0ZXJ9IHRhYmxlPXt0aGlzfSAvPn1cclxuXHRcdFx0XHR7ICh0aGlzLnByb3BzLnRib2R5IHx8IHRoaXMucHJvcHMuZGF0YSkgJiYgdGhpcy5fX3JlbmRlclRCb2R5KGNvbHVtbnMpIH1cclxuXHRcdFx0XHR7ICEhdGhpcy5wcm9wcy50Zm9vdCAmJiA8dGFibGUuVEZvb3QgY29udGV4dD17dGhpcy5wcm9wcy5jb250ZXh0fSBjb2x1bW5zPXtjb2x1bW5zfSB7Li4udGhpcy5wcm9wcy50Zm9vdH0gdGFibGU9e3RoaXN9IC8+fVxyXG5cdFx0XHRcdHsgdGhpcy5wcm9wcy5jaGlsZHJlblJlbmRlciAmJiB0aGlzLnByb3BzLmNoaWxkcmVuUmVuZGVyKGNvbHVtbnMsIHRoaXMpIH1cclxuXHRcdFx0XHR7IHRoaXMucHJvcHMuY2hpbGRyZW4gfVxyXG5cdFx0XHQ8L3RhYmxlPlxyXG5cdFx0KTtcclxuXHR9LFxyXG5cdF9fcm93SGVhZENoZWNrYm94Q2hlY2tlZDogZnVuY3Rpb24gKCl7XHJcblx0XHR2YXIgX2NoZWNrZWRzID0gdGhpcy5zdGF0ZS5jaGVja2VkcywgX3ZhbHVlS2V5ID0gdGhpcy5wcm9wcy52YWx1ZUtleSB8fCAnenhuel9VVUlEJztcclxuXHRcdGlmKCFfY2hlY2tlZHMubGVuZ3RoKSByZXR1cm4gZmFsc2U7XHJcblx0XHRmb3IodmFyIGl0ZW0gb2YgdGhpcy5zdGF0ZS5kYXRhKSB7XHJcblx0XHRcdGlmKCFpdGVtLl9fY2hlY2tlZERpc2FibGVkX18gJiYgX2NoZWNrZWRzLmluZGV4T2YoaXRlbVtfdmFsdWVLZXldKSA9PSAtMSl7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fSxcclxuXHRfX29uUm93SGVhZENoZWNrYm94Q2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQpe1xyXG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHR2YXIgX3ZhbHVlS2V5ID0gdGhpcy5wcm9wcy52YWx1ZUtleSB8fCAnenhuel9VVUlEJztcclxuXHRcdGlmKGV2ZW50LmNoZWNrZWQpIHtcclxuXHRcdFx0Zm9yKHZhciBpdGVtIG9mIHRoaXMuc3RhdGUuZGF0YSkge1xyXG5cdFx0XHRcdGlmKCFpdGVtLl9fY2hlY2tlZERpc2FibGVkX18gJiYgdGhpcy5zdGF0ZS5jaGVja2Vkcy5pbmRleE9mKGl0ZW1bX3ZhbHVlS2V5XSkgPT0gLTEpe1xyXG5cdFx0XHRcdFx0dGhpcy5zdGF0ZS5jaGVja2Vkcy5wdXNoKGl0ZW1bX3ZhbHVlS2V5XSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0Zm9yKHZhciBpdGVtIG9mIHRoaXMuc3RhdGUuZGF0YSkge1xyXG5cdFx0XHRcdGlmKCFpdGVtLl9fY2hlY2tlZERpc2FibGVkX18gJiYgdGhpcy5zdGF0ZS5jaGVja2Vkcy5pbmRleE9mKGl0ZW1bX3ZhbHVlS2V5XSkgIT0gLTEpe1xyXG5cdFx0XHRcdFx0dGhpcy5zdGF0ZS5jaGVja2Vkcy5zcGxpY2UodGhpcy5zdGF0ZS5jaGVja2Vkcy5pbmRleE9mKGl0ZW1bX3ZhbHVlS2V5XSksIDEpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0dGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG5cdFx0dGhpcy5wcm9wcy5vbkNoZWNrYm94Q2hhbmdlICYmIHRoaXMucHJvcHMub25DaGVja2JveENoYW5nZSh0aGlzLnN0YXRlLmNoZWNrZWRzLCB0aGlzKTtcclxuXHR9LFxyXG5cdF9faW5pdENoZWNrYm94OiBmdW5jdGlvbiAoY29sdW1ucyl7XHJcblx0XHRpZighdGhpcy5wcm9wcy5jaGVja2JveCkgcmV0dXJuO1xyXG5cdFx0dmFyIF92YWx1ZUtleSA9IHRoaXMucHJvcHMudmFsdWVLZXkgfHwgJ3p4bnpfVVVJRCcsIF92YWx1ZSA9IHRoaXMucHJvcHMuY2hlY2tib3g7XHJcblx0XHR2YXIgX2NoZWNrYm94ID0ge1xyXG5cdFx0XHR3aWR0aDogNjAsXHJcblx0XHRcdGZpeGVkOiB0cnVlLFxyXG5cdFx0XHRoZWFkOiAoYXJndik9PntcclxuXHRcdFx0XHR2YXIgX3RhYmxlID0gYXJndi50aGVhZC5wcm9wcy50YWJsZTtcclxuXHRcdFx0XHRpZighX3RhYmxlKSByZXR1cm47XHJcblx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdDxzZWxlY3Rvci5DaGVja2JveFxyXG5cdFx0XHRcdFx0XHRzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgfX1cclxuXHRcdFx0XHRcdFx0a2V5PXt6bi51dWlkKCl9XHJcblx0XHRcdFx0XHRcdHRleHQ9eycgJyArIF90YWJsZS5zdGF0ZS5jaGVja2Vkcy5sZW5ndGh9XHJcblx0XHRcdFx0XHRcdGNoZWNrZWQ9e3RoaXMuX19yb3dIZWFkQ2hlY2tib3hDaGVja2VkKCl9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLl9fb25Sb3dIZWFkQ2hlY2tib3hDaGFuZ2V9IC8+XHJcblx0XHRcdFx0KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Ym9keTogKGFyZ3YpPT57XHJcblx0XHRcdFx0dmFyIF9kYXRhID0gYXJndi5kYXRhO1xyXG5cdFx0XHRcdHZhciBfcmV0dXJuID0gdGhpcy5wcm9wcy5vbkJvZHlDb2x1bW5DaGVja2JveFJlbmRlciAmJiB0aGlzLnByb3BzLm9uQm9keUNvbHVtbkNoZWNrYm94UmVuZGVyKGFyZ3YsIHRoaXMpO1xyXG5cdFx0XHRcdGlmKF9yZXR1cm4pIHtcclxuXHRcdFx0XHRcdHJldHVybiBfcmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZihfcmV0dXJuID09PSBmYWxzZSl7XHJcblx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdDxzZWxlY3Rvci5VbmNvbnRyb2xDaGVja2JveCBcclxuXHRcdFx0XHRcdFx0c3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19XHJcblx0XHRcdFx0XHRcdGRpc2FibGVkPXtfZGF0YS5fX2NoZWNrZWREaXNhYmxlZF9ffVxyXG5cdFx0XHRcdFx0XHRjaGVja2VkPXt0aGlzLnN0YXRlLmNoZWNrZWRzLmluZGV4T2YoX2RhdGFbX3ZhbHVlS2V5XSkgIT09IC0xfVxyXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoZXZlbnQsIGNoZWNrYm94KT0+e1xyXG5cdFx0XHRcdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0XHRcdFx0XHRcdGlmKGNoZWNrYm94LnByb3BzLmNoZWNrZWQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc3RhdGUuY2hlY2tlZHMuc3BsaWNlKHRoaXMuc3RhdGUuY2hlY2tlZHMuaW5kZXhPZihfZGF0YVtfdmFsdWVLZXldKSwgMSk7IFxyXG5cdFx0XHRcdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5zdGF0ZS5jaGVja2Vkcy5wdXNoKF9kYXRhW192YWx1ZUtleV0pO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR0aGlzLmZvcmNlVXBkYXRlKCk7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5vbkNoZWNrYm94Q2hhbmdlICYmIHRoaXMucHJvcHMub25DaGVja2JveENoYW5nZSh0aGlzLnN0YXRlLmNoZWNrZWRzLCB0aGlzKTtcclxuXHRcdFx0XHRcdFx0fX0gLz5cclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdFx0c3dpdGNoKHpuLnR5cGUoX3ZhbHVlKSkge1xyXG5cdFx0XHRjYXNlICdvYmplY3QnOlxyXG5cdFx0XHRcdF9jaGVja2JveCA9IHpuLmV4dGVuZCh7fSwgX3ZhbHVlKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAnbnVtYmVyJzpcclxuXHRcdFx0XHRfY2hlY2tib3gud2lkdGggPSBfdmFsdWU7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29sdW1ucyA9IGNvbHVtbnMudW5zaGlmdChfY2hlY2tib3gpO1xyXG5cdH0sXHJcblx0X19pbml0SW5kZXhDb2x1bW46IGZ1bmN0aW9uIChjb2x1bW5zKXtcclxuXHRcdGlmKHRoaXMucHJvcHMuZGF0YUluZGV4RW5hYmxlZCkge1xyXG5cdFx0XHRjb2x1bW5zID0gY29sdW1ucy51bnNoaWZ0KHtcclxuXHRcdFx0XHR3aWR0aDogNDgsXHJcblx0XHRcdFx0bGFiZWw6ICfntKLlvJUnLCBcclxuXHRcdFx0XHRmaXhlZDogdHJ1ZSxcclxuXHRcdFx0XHRuYW1lOiAnX19pbmRleF9fJyxcclxuXHRcdFx0XHRib2R5OiBmdW5jdGlvbiAoYXJndil7XHJcblx0XHRcdFx0XHRyZXR1cm4gKDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT57KCthcmd2LnJvd0luZGV4KSArIDF9PC9kaXY+KTtcclxuXHRcdFx0XHR9LmJpbmQodGhpcylcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fSxcclxuXHRfX2NvbHVtbnNMb2FkZWQ6IGZ1bmN0aW9uIChjb2x1bW5zKXtcclxuXHRcdGlmKGNvbHVtbnMgJiYgem4uaXMoY29sdW1ucywgJ2FycmF5Jykpe1xyXG5cdFx0XHR2YXIgX3RlbXAgPSBudWxsLFxyXG5cdFx0XHRcdF9yZXN1bHQgPSBudWxsLFxyXG5cdFx0XHRcdF9jb2x1bW5JdGVyYXRvciA9IHRoaXMucHJvcHMuY29sdW1uSXRlcmF0b3IsXHJcblx0XHRcdFx0X2NvbHVtbnMgPSBjb2x1bW5zLm1hcCgoY29sdW1uKT0+e1xyXG5cdFx0XHRcdFx0X3RlbXAgPSB6bi5kZWVwQXNzaWduKHt9LCBjb2x1bW4pO1xyXG5cdFx0XHRcdFx0X3Jlc3VsdCA9IF9jb2x1bW5JdGVyYXRvciAmJiBfY29sdW1uSXRlcmF0b3IoX3RlbXAsIHRoaXMpO1xyXG5cdFx0XHRcdFx0aWYoX3Jlc3VsdCA9PT0gZmFsc2UpIHJldHVybiBudWxsO1xyXG5cdFx0XHRcdFx0aWYodHlwZW9mIF9yZXN1bHQgPT0gJ29iamVjdCcpIHJldHVybiBfcmVzdWx0O1xyXG5cclxuXHRcdFx0XHRcdHJldHVybiBfdGVtcDtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0dGhpcy5fX2luaXRDaGVja2JveChfY29sdW1ucyk7XHJcblx0XHRcdHRoaXMuX19pbml0SW5kZXhDb2x1bW4oX2NvbHVtbnMpO1xyXG5cdFx0XHR0aGlzLnByb3BzLm9uQ29sdW1uc0xvYWRlZCAmJiB0aGlzLnByb3BzLm9uQ29sdW1uc0xvYWRlZChjb2x1bW5zKTtcclxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGNvbHVtbnM6IF9jb2x1bW5zIH0pO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0X19vbkNvbHVtbkRhdGFDcmVhdGVkOiBmdW5jdGlvbiAoZGF0YSwgbGlmZWN5Y2xlKXtcclxuXHRcdHRoaXMuY29sdW1ucyA9IGRhdGE7XHJcblx0XHR0aGlzLnByb3BzLm9uQ29sdW1uc0NyZWF0ZWQgJiYgdGhpcy5wcm9wcy5vbkNvbHVtbnNDcmVhdGVkKGRhdGEsIHRoaXMsIGxpZmVjeWNsZSk7XHJcblx0fSxcclxuXHRnZXREYXRhOiBmdW5jdGlvbiAoKXtcclxuXHRcdHJldHVybiB0aGlzLnN0YXRlLmRhdGE7XHJcblx0fSxcclxuXHRyZW1vdmVSb3dEYXRhOiBmdW5jdGlvbiAoZGF0YSl7XHJcblx0XHRpZihkYXRhKSB7XHJcblx0XHRcdHRoaXMuc3RhdGUuZGF0YS5zcGxpY2UodGhpcy5zdGF0ZS5kYXRhLmluZGV4T2YoZGF0YSksIDEpO1xyXG5cdFx0XHR0aGlzLmZvcmNlVXBkYXRlKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fSxcclxuXHR1cGRhdGVSb3dEYXRhOiBmdW5jdGlvbiAoZGF0YSl7XHJcblx0XHRpZihkYXRhKSB7XHJcblx0XHRcdHZhciBfaW5kZXggPSB0aGlzLnN0YXRlLmRhdGEuaW5kZXhPZihkYXRhKTtcclxuXHRcdFx0dGhpcy5zdGF0ZS5kYXRhW19pbmRleF0gPSBkYXRhO1xyXG5cdFx0XHR0aGlzLmZvcmNlVXBkYXRlKCk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH0sXHJcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xyXG5cdFx0cmV0dXJuIDx6bnVpLnJlYWN0LkRhdGFMaWZlY3ljbGVcclxuXHRcdFx0XHRcdGRhdGE9e3RoaXMucHJvcHMuY29sdW1uc31cclxuXHRcdFx0XHRcdHJlbmRlcj17dGhpcy5fX3JlbmRlcn1cclxuXHRcdFx0XHRcdHJlc3BvbnNlSGFuZGxlcj17dGhpcy5wcm9wcy5yZXNwb25zZUhhbmRsZXJ9XHJcblx0XHRcdFx0XHRvbkxvYWRpbmc9e3RoaXMucHJvcHMub25Db2x1bW5Mb2FkaW5nfVxyXG5cdFx0XHRcdFx0b25GaW5pc2hlZD17dGhpcy5fX2NvbHVtbnNMb2FkZWR9XHJcblx0XHRcdFx0XHRvbkVycm9yPXt0aGlzLnByb3BzLm9uQ29sdW1uTG9hZEVycm9yfVxyXG5cdFx0XHRcdFx0b25EYXRhQ3JlYXRlZD17dGhpcy5fX29uQ29sdW1uRGF0YUNyZWF0ZWR9IC8+O1xyXG5cdH1cclxufSk7IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xyXG52YXIgVGFibGUgPSByZXF1aXJlKCcuL1RhYmxlJyk7XHJcbnZhciBpbnB1dCA9IHJlcXVpcmUoJ3pudWktcmVhY3QtaW5wdXQnKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG5cdGRpc3BsYXlOYW1lOidaUlRhYmxlRWRpdG9yJyxcclxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpe1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0dGFibGU6IG51bGwsXHJcblx0XHRcdGNvbHVtbnM6IFtdXHJcblx0XHR9O1xyXG5cdH0sXHJcblx0X19jZWxsQ2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQsIGFyZ3Ype1xyXG5cdFx0YXJndi5kYXRhW2FyZ3YudGNlbGwucHJvcHMubmFtZV0gPSBldmVudC52YWx1ZTtcclxuXHRcdGFyZ3YudHJvdy5mb3JjZVVwZGF0ZSgpO1xyXG5cdH0sXHJcblx0X19jb2x1bW5Cb2R5UmVuZGVyOiBmdW5jdGlvbiAoYXJndil7XHJcblx0XHRyZXR1cm4gPGlucHV0LklucHV0IFxyXG5cdFx0XHRrZXk9e2FyZ3YudmFsdWV9IFxyXG5cdFx0XHR2YWx1ZT17YXJndi52YWx1ZX0gXHJcblx0XHRcdG9uQmx1cj17KGV2ZW50KT0+dGhpcy5fX2NlbGxDaGFuZ2UoZXZlbnQsIGFyZ3YpfVxyXG5cdFx0XHRvbkVudGVyPXsoZXZlbnQpPT50aGlzLl9fY2VsbENoYW5nZShldmVudCwgYXJndil9IC8+O1xyXG5cdH0sXHJcblx0X19jb2x1bW5JdGVyYXRvcjogZnVuY3Rpb24gKGNvbHVtbiwgdGFibGUpe1xyXG5cdFx0aWYoIWNvbHVtbi5ib2R5KSB7XHJcblx0XHRcdGNvbHVtbi5ib2R5ID0gdGhpcy5fX2NvbHVtbkJvZHlSZW5kZXI7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGNvbHVtbjtcclxuXHR9LFxyXG5cdHNldERhdGE6IGZ1bmN0aW9uIChkYXRhKXtcclxuXHRcdHZhciBfcmV0dXJuID0gdGhpcy5wcm9wcy5vbkRhdGFDaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkRhdGFDaGFuZ2UoZGF0YSwgdGhpcy5zdGF0ZS50YWJsZSwgdGhpcyk7XHJcblx0XHRpZihfcmV0dXJuID09PSBmYWxzZSl7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHRcdGlmKHR5cGVvZiBfcmV0dXJuID09ICdvYmplY3QnKSB7XHJcblx0XHRcdGRhdGEgPSBfcmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5zdGF0ZS50YWJsZS5zdGF0ZS5kYXRhID0gZGF0YTtcclxuXHRcdHRoaXMuc3RhdGUudGFibGUuZm9yY2VVcGRhdGUoKTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9LFxyXG5cdGdldERhdGE6IGZ1bmN0aW9uICgpe1xyXG5cdFx0cmV0dXJuIHRoaXMuc3RhdGUudGFibGUuZ2V0RGF0YSgpO1xyXG5cdH0sXHJcblx0YWRkUm93OiBmdW5jdGlvbiAoZGF0YSl7XHJcblx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMub25EYXRhQ2hhbmdlICYmIHRoaXMucHJvcHMub25EYXRhQ2hhbmdlKFtkYXRhXSwgdGhpcy5zdGF0ZS50YWJsZSwgdGhpcyk7XHJcblx0XHRpZihfcmV0dXJuID09PSBmYWxzZSl7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHRcdGlmKHpuLmlzKF9yZXR1cm4sICdhcnJheScpKSB7XHJcblx0XHRcdGRhdGEgPSBfcmV0dXJuO1xyXG5cdFx0fWVsc2UgaWYoem4uaXMoX3JldHVybiwgJ29iamVjdCcpKXtcclxuXHRcdFx0ZGF0YSA9IFsgZGF0YSBdO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuc3RhdGUudGFibGUuc3RhdGUuZGF0YSA9IHRoaXMuc3RhdGUudGFibGUuc3RhdGUuZGF0YS5jb25jYXQoZGF0YSk7XHJcblx0XHR0aGlzLnN0YXRlLnRhYmxlLmZvcmNlVXBkYXRlKCk7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fSxcclxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8VGFibGUgey4uLnRoaXMucHJvcHN9IHJlZj17KHJlZikgPT4gdGhpcy5zdGF0ZS50YWJsZSA9IHJlZn0gY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItdGFibGUtZWRpdG9yJywgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBjb2x1bW5JdGVyYXRvcj17dGhpcy5fX2NvbHVtbkl0ZXJhdG9yfSAvPlxyXG5cdFx0KVxyXG5cdH1cclxufSk7IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xyXG52YXIgVGFibGUgPSByZXF1aXJlKCcuL1RhYmxlJyk7XHJcbnZhciBwYWdlciA9IHJlcXVpcmUoJ3pudWktcmVhY3QtcGFnZXInKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG5cdGRpc3BsYXlOYW1lOidaUlRhYmxlUGFnZXInLFxyXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCl7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRjb3VudDogMCxcclxuXHRcdFx0Y3VycmVudDogMSxcclxuXHRcdFx0ZGF0YTogW10sXHJcblx0XHRcdHRvdGFsOiAwLFxyXG5cdFx0XHRwYWdlSW5kZXg6IHRoaXMucHJvcHMucGFnZUluZGV4IHx8IDEsXHJcblx0XHRcdHBhZ2VTaXplOiB0aGlzLnByb3BzLnBhZ2VTaXplIHx8IDEwLFxyXG5cdFx0fTtcclxuXHR9LFxyXG5cdGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpe1xyXG5cdFx0dGhpcy5wcm9wcy5vbkNvbXBvbmVudERpZE1vdW50ICYmIHRoaXMucHJvcHMub25Db21wb25lbnREaWRNb3VudCh0aGlzKTtcclxuXHR9LFxyXG5cdHJlc2V0Q2hlY2tlZHM6IGZ1bmN0aW9uICgpe1xyXG5cdFx0cmV0dXJuIHRoaXMuX3RhYmxlLnNldFN0YXRlKHtcclxuXHRcdFx0Y2hlY2tlZHM6IFtdXHJcblx0XHR9KSwgdGhpcztcclxuXHR9LFxyXG5cdHNldFBhZ2VJbmRleDogZnVuY3Rpb24gKHBhZ2VJbmRleCwgYXJndiwgY2FsbGJhY2spe1xyXG5cdFx0aWYodGhpcy5kYXRhKXtcclxuXHRcdFx0aWYoYXJndiAmJiBhcmd2Ll9fcmVzZXRfXyl7XHJcblx0XHRcdFx0YXJndi5fX3Jlc2V0X18gPSBudWxsO1xyXG5cdFx0XHRcdGRlbGV0ZSBhcmd2Ll9fcmVzZXRfXztcclxuXHRcdFx0XHRpZihwYWdlSW5kZXggPT0gMSkge1xyXG5cdFx0XHRcdFx0dGhpcy5fdGFibGUuc2V0U3RhdGUoe1xyXG5cdFx0XHRcdFx0XHRjaGVja2VkczogW11cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLnN0YXRlLnBhZ2VJbmRleCA9IHBhZ2VJbmRleDtcclxuXHRcdFx0dGhpcy5zdGF0ZS5jdXJyZW50ID0gcGFnZUluZGV4O1xyXG5cdFx0XHR0aGlzLmZvcmNlVXBkYXRlKCk7XHJcblx0XHRcdHRoaXMuZGF0YS5fYXJndiA9IHRoaXMuX19vbkRhdGFJbml0aWFsKHRoaXMucHJvcHMuZGF0YSk7XHJcblx0XHRcdGlmKGFyZ3YgJiYgdHlwZW9mIGFyZ3YgPT0gJ29iamVjdCcpe1xyXG5cdFx0XHRcdGlmKCF0aGlzLmRhdGEuX2FyZ3YuZGF0YSl7XHJcblx0XHRcdFx0XHR0aGlzLmRhdGEuX2FyZ3YuZGF0YSA9IHt9O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRmb3IodmFyIGtleSBpbiBhcmd2KXtcclxuXHRcdFx0XHRcdHRoaXMuZGF0YS5fYXJndi5kYXRhW2tleV0gPSBhcmd2W2tleV07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMuZGF0YS5yZWZyZXNoKGNhbGxiYWNrKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9LFxyXG5cdHJlZnJlc2g6IGZ1bmN0aW9uIChjYWxsYmFjaywgcmVzZXQpe1xyXG5cdFx0aWYodGhpcy5fdGFibGUpe1xyXG5cdFx0XHR0aGlzLl90YWJsZS5yZWZyZXNoKGNhbGxiYWNrLCByZXNldCk7XHJcblx0XHR9XHJcblx0fSxcclxuXHRfX2hhbmRsZVBhZ2VDaGFuZ2VkOiBmdW5jdGlvbiAobmV3UGFnZSl7XHJcblx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMub25QYWdlQ2hhbmdlZCAmJiB0aGlzLnByb3BzLm9uUGFnZUNoYW5nZWQobmV3UGFnZSwgdGhpcyk7XHJcblx0XHRpZihfcmV0dXJuICE9PSBmYWxzZSkge1xyXG5cdFx0XHR0aGlzLnNldFBhZ2VJbmRleChuZXdQYWdlKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdF9faGFuZGxlUGFnZVNpemVDaGFuZ2U6IGZ1bmN0aW9uIChldmVudCl7XHJcblx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0cGFnZVNpemU6IGV2ZW50LnRhcmdldC52YWx1ZVxyXG5cdFx0fSwgKCk9PnRoaXMuc2V0UGFnZUluZGV4KDEpKTtcclxuXHR9LFxyXG5cdF9fcmVuZGVyUGFnZXI6IGZ1bmN0aW9uIChjb2x1bW5zLCB0YWJsZSl7XHJcblx0XHR2YXIgX2NvbHVtblNpemUgPSBjb2x1bW5zLmxlbmd0aDtcclxuXHRcdGlmKCFfY29sdW1uU2l6ZSl7XHJcblx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0fVxyXG5cdFx0dmFyIF9zdGF0ZSA9IHRoaXMuc3RhdGUsXHJcblx0XHRcdF9lbGVtZW50ID0gbnVsbCxcclxuXHRcdFx0X3BhZ2VyUHJvcHMgPSB7XHJcblx0XHRcdFx0dG90YWw6IF9zdGF0ZS50b3RhbCxcclxuXHRcdFx0XHRjb3VudDogX3N0YXRlLmNvdW50LFxyXG5cdFx0XHRcdGN1cnJlbnQ6IF9zdGF0ZS5jdXJyZW50LFxyXG5cdFx0XHRcdHBhZ2VTaXplOiBfc3RhdGUucGFnZVNpemUsXHJcblx0XHRcdFx0b25QYWdlQ2hhbmdlZDogdGhpcy5fX2hhbmRsZVBhZ2VDaGFuZ2VkLFxyXG5cdFx0XHRcdG9uUGFnZVNpemVDaGFuZ2U6IHRoaXMuX19oYW5kbGVQYWdlU2l6ZUNoYW5nZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRfQ29tcG9uZW50ID0gdGhpcy5wcm9wcy5wYWdlciB8fCBwYWdlci5QYWdlcjtcclxuXHRcdGlmKHpuLmlzKF9Db21wb25lbnQsICdzdHJpbmcnKSl7XHJcblx0XHRcdF9Db21wb25lbnQgPSB6bi5wYXRoKHdpbmRvdywgX0NvbXBvbmVudCk7XHJcblx0XHR9ZWxzZSBpZih6bi5pcyhfQ29tcG9uZW50LCAnb2JqZWN0JykgJiYgX0NvbXBvbmVudC5jb21wb25lbnQpe1xyXG5cdFx0XHRfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KF9Db21wb25lbnQuY29tcG9uZW50LCB6bi5leHRlbmQoe30sIF9Db21wb25lbnQsIF9wYWdlclByb3BzKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYodGhpcy5wcm9wcy5wYWdlclJlbmRlcil7XHJcblx0XHRcdF9lbGVtZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQodGhpcy5wcm9wcy5wYWdlclJlbmRlciwgX3BhZ2VyUHJvcHMpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmKCFfZWxlbWVudCAmJiBfQ29tcG9uZW50ICYmIHpuLmlzKF9Db21wb25lbnQsICdmdW5jdGlvbicpKXtcclxuXHRcdCBcdF9lbGVtZW50ID0gPF9Db21wb25lbnQgey4uLl9wYWdlclByb3BzfSAvPjtcclxuXHRcdH1cclxuXHJcblx0XHRpZih0aGlzLnByb3BzLmZpeGVkTGF5b3V0KSB7XHJcblx0XHRcdHJldHVybiAoPGRpdj57X2VsZW1lbnR9PC9kaXY+KTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8dGZvb3QgY2xhc3NOYW1lPVwidGFibGUtcGFnZXJcIj5cclxuXHRcdFx0XHQ8dHIgY2xhc3NOYW1lPVwicGFnZXItcm93XCI+XHJcblx0XHRcdFx0XHQ8dGQgY29sU3Bhbj17X2NvbHVtblNpemV9PntfZWxlbWVudH08L3RkPlxyXG5cdFx0XHRcdDwvdHI+XHJcblx0XHRcdDwvdGZvb3Q+XHJcblx0XHQpO1xyXG5cdH0sXHJcblx0X19vbkRhdGFJbml0aWFsOiBmdW5jdGlvbiAoZGF0YSl7XHJcblx0XHR2YXIgX21ldGhvZCA9IGRhdGEubWV0aG9kfHwncG9zdCcsXHJcblx0XHRcdF9wYXJhbXMgPSB7fSxcclxuXHRcdFx0X2tleU1hcHMgPSB6bi5kZWVwQXNzaWduKHtcclxuXHRcdFx0XHR0b3RhbDogXCJ0b3RhbFwiLFxyXG5cdFx0XHRcdHBhZ2VJbmRleDogJ3BhZ2VJbmRleCcsXHJcblx0XHRcdFx0cGFnZVNpemU6ICdwYWdlU2l6ZScsXHJcblx0XHRcdFx0ZGF0YTogJ2RhdGEnXHJcblx0XHRcdH0sIHRoaXMucHJvcHMua2V5TWFwcyk7XHJcblxyXG5cdFx0X3BhcmFtc1tfa2V5TWFwcy5wYWdlSW5kZXhdID0gdGhpcy5zdGF0ZS5wYWdlSW5kZXggfHwgMTtcclxuXHRcdF9wYXJhbXNbX2tleU1hcHMucGFnZVNpemVdID0gdGhpcy5zdGF0ZS5wYWdlU2l6ZSB8fCAxMDtcclxuXHRcdGlmKF9tZXRob2QgPT0gJ2dldCcpe1xyXG5cdFx0XHRkYXRhID0gem4uZGVlcEFzc2lnbihkYXRhLCB7XHJcblx0XHRcdFx0cGFyYW1zOiBfcGFyYW1zXHJcblx0XHRcdH0pO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdGRhdGEgPSB6bi5kZWVwQXNzaWduKGRhdGEsIHtcclxuXHRcdFx0XHRkYXRhOiBfcGFyYW1zXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRyZXR1cm4gdGhpcy5zdGF0ZS5rZXlNYXBzID0gX2tleU1hcHMsIGRhdGE7XHJcblx0fSxcclxuXHRfX29uRGF0YUNyZWF0ZWQ6IGZ1bmN0aW9uIChkYXRhLCB0YWJsZSl7XHJcblx0XHR0aGlzLmRhdGEgPSBkYXRhO1xyXG5cdFx0dGhpcy5wcm9wcy5vbkRhdGFDcmVhdGVkICYmIHRoaXMucHJvcHMub25EYXRhQ3JlYXRlZChkYXRhLCB0YWJsZSwgdGhpcyk7XHJcblx0fSxcclxuXHRfX29uRGF0YUxvYWRlZDogZnVuY3Rpb24gKGRhdGEsIHRhYmxlKXtcclxuXHRcdGlmKHRoaXMucHJvcHMuenhueil7XHJcblx0XHRcdGlmKHpuLmlzKGRhdGEsICdvYmplY3QnKSAmJiBkYXRhLmNvZGUgIT0gMjAwKXtcclxuXHRcdFx0XHRyZXR1cm4gY29uc29sZS5lcnJvcihkYXRhLmRldGFpbCksIGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmKHpuLmlzKGRhdGEsICdvYmplY3QnKSAmJiBkYXRhLmNvZGUgPT0gMjAwKXtcclxuXHRcdFx0XHRkYXRhID0gZGF0YS5yZXN1bHQ7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYoIXpuLmlzKGRhdGEsICdhcnJheScpKXtcclxuXHRcdFx0XHRyZXR1cm4gY29uc29sZS5lcnJvcihcIlRhYmxlUGFnZXIgQ29tcG9uZW50IERhdGEgVHlwZSBFcnJvci5cIiksIGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHRcdHZhciBfZGF0YSA9IGRhdGFbMF0sXHJcblx0XHRcdFx0X3BhZ2VyQ291bnQgPSBkYXRhWzFdWzBdLmNvdW50O1xyXG5cdFx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMub25EYXRhTG9hZGVkICYmIHRoaXMucHJvcHMub25EYXRhTG9hZGVkKF9kYXRhLCB0YWJsZSwgdGhpcyk7XHJcblx0XHRcdGlmKF9yZXR1cm4gIT09IGZhbHNlKXtcclxuXHRcdFx0XHR0YWJsZS5zZXRTdGF0ZSh7XHJcblx0XHRcdFx0XHRkYXRhOiBfZGF0YVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHRcdFx0dG90YWw6IE1hdGguY2VpbChfcGFnZXJDb3VudC90aGlzLnN0YXRlLnBhZ2VTaXplKSxcclxuXHRcdFx0XHRcdGNvdW50OiBfcGFnZXJDb3VudCxcclxuXHRcdFx0XHRcdGN1cnJlbnQ6IHRoaXMuc3RhdGUuY3VycmVudCxcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fWVsc2V7XHJcblx0XHRcdGlmKHpuLmlzKGRhdGEsICdhcnJheScpKXtcclxuXHRcdFx0XHRyZXR1cm4gY29uc29sZS5lcnJvcignVGhlIGRhdGEgaXMgYXJyYXksIGJ1dCBpdCBuZWVkIHJldHVybiBvYmplY3QnKSwgZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdFx0dmFyIF9kYXRhID0gZGF0YS5kYXRhO1xyXG5cdFx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMub25EYXRhTG9hZGVkICYmIHRoaXMucHJvcHMub25EYXRhTG9hZGVkKF9kYXRhLCB0YWJsZSwgdGhpcyk7XHJcblx0XHRcdGlmKF9yZXR1cm4gIT09IGZhbHNlKXtcclxuXHRcdFx0XHR0YWJsZS5zZXRTdGF0ZSh7XHJcblx0XHRcdFx0XHRkYXRhOiBfZGF0YVt0aGlzLnN0YXRlLmtleU1hcHMuZGF0YV1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0XHRcdHRvdGFsOiBNYXRoLmNlaWwoX2RhdGFbdGhpcy5zdGF0ZS5rZXlNYXBzLnRvdGFsXS90aGlzLnN0YXRlLnBhZ2VTaXplKSxcclxuXHRcdFx0XHRcdGNvdW50OiBfZGF0YVt0aGlzLnN0YXRlLmtleU1hcHMudG90YWxdLFxyXG5cdFx0XHRcdFx0Y3VycmVudDogX2RhdGFbdGhpcy5zdGF0ZS5rZXlNYXBzLnBhZ2VJbmRleF1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9LFxyXG5cdF9fb25GaWx0ZXJDaGFuZ2U6IGZ1bmN0aW9uIChmaWx0ZXJzLCBkYXRhLCB0YWJsZSl7XHJcblx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMub25GaWx0ZXJDaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkZpbHRlckNoYW5nZShmaWx0ZXJzLCBkYXRhLCB0YWJsZSk7XHJcblx0XHRpZihfcmV0dXJuICE9PSBmYWxzZSl7XHJcblx0XHRcdHRoaXMuc2V0UGFnZUluZGV4KDEsIHtcclxuXHRcdFx0XHRmaWx0ZXJzOiBmaWx0ZXJzXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9LFxyXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxUYWJsZSB7Li4udGhpcy5wcm9wc30gXHJcblx0XHRcdFx0Y2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItdGFibGUtcGFnZXInLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IFxyXG5cdFx0XHRcdGNoaWxkcmVuUmVuZGVyPXt0aGlzLl9fcmVuZGVyUGFnZXJ9XHJcblx0XHRcdFx0b25Db21wb25lbnREaWRNb3VudD17KHRhYmxlKT0+eyBcclxuXHRcdFx0XHRcdHRoaXMuX3RhYmxlID0gdGFibGU7IFxyXG5cdFx0XHRcdH19XHJcblx0XHRcdFx0b25GaWx0ZXJDaGFuZ2U9e3RoaXMuX19vbkZpbHRlckNoYW5nZX1cclxuXHRcdFx0XHRvbkRhdGFJbml0aWFsPXt0aGlzLl9fb25EYXRhSW5pdGlhbH1cclxuXHRcdFx0XHRvbkRhdGFDcmVhdGVkPXt0aGlzLl9fb25EYXRhQ3JlYXRlZH1cclxuXHRcdFx0XHRvbkRhdGFMb2FkZWQ9e3RoaXMuX19vbkRhdGFMb2FkZWR9IC8+XHJcblx0XHQpO1xyXG5cdH1cclxufSk7IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xyXG52YXIgQ2hlY2tib3ggPSByZXF1aXJlKCd6bnVpLXJlYWN0LXNlbGVjdG9yJykuQ2hlY2tib3g7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuXHRkaXNwbGF5TmFtZTonWlJUQ2VsbENoZWNrYm94JyxcclxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGNoZWNrZWQ6IHRoaXMucHJvcHMuY2hlY2tlZCB8fCBmYWxzZVxyXG5cdFx0fVxyXG5cdH0sXHJcblx0X19vbkNoZWNrYm94Q2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQpe1xyXG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRpZih0aGlzLnByb3BzLnRoZWFkKSB7XHJcblx0XHRcdHRoaXMuX19vbkhlYWRDaGFuZ2UoZXZlbnQpO1xyXG5cdFx0fWVsc2UgaWYodGhpcy5wcm9wcy50Ym9keSkge1xyXG5cdFx0XHR0aGlzLl9fb25Cb2R5Q2hhbmdlKGV2ZW50KTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdF9fb25IZWFkQ2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQpe1xyXG5cdFx0Y29uc29sZS5sb2coZXZlbnQuY2hlY2tlZCwgdGhpcy5wcm9wcyk7XHJcblx0fSxcclxuXHRfX29uQm9keUNoYW5nZTogZnVuY3Rpb24gKGV2ZW50KXtcclxuXHRcdGNvbnNvbGUubG9nKGV2ZW50LmNoZWNrZWQsIHRoaXMucHJvcHMpO1xyXG5cdH0sXHJcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ6ci10YWJsZS1jZWxsLWNoZWNrYm94XCI+PENoZWNrYm94IGNoZWNrZWQ9e3RydWV9IG9uQ2hhbmdlPXt0aGlzLl9fb25DaGVja2JveENoYW5nZX0vPjwvZGl2PlxyXG5cdFx0KTtcclxuXHR9XHJcbn0pO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIENoZWNrYm94OiByZXF1aXJlKCcuL0NoZWNrYm94JyksXHJcbiAgICAvL0J1dHRvbnM6IHJlcXVpcmUoJy4vQnV0dG9ucycpLFxyXG4gICAgLy9JbnB1dDogcmVxdWlyZSgnLi9JbnB1dCcpLFxyXG4gICAgLy9DYWxjdWxhdG9yOiByZXF1aXJlKCcuL0NhbGN1bGF0b3InKVxyXG59OyIsIm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgdGFibGU6IHJlcXVpcmUoJy4vdGFibGUvaW5kZXgnKSxcclxuICAgIGNlbGw6IHJlcXVpcmUoJy4vY2VsbC9pbmRleCcpLFxyXG4gICAgUG9wdXBUYWJsZTogcmVxdWlyZSgnLi9Qb3B1cFRhYmxlJyksXHJcbiAgICBUYWJsZTogcmVxdWlyZSgnLi9UYWJsZScpLFxyXG4gICAgVGFibGVFZGl0b3I6IHJlcXVpcmUoJy4vVGFibGVFZGl0b3InKSxcclxuICAgIFRhYmxlUGFnZXI6IHJlcXVpcmUoJy4vVGFibGVQYWdlcicpXHJcbn07IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcblx0ZGlzcGxheU5hbWU6J1pSVGFibGVDb2xncm91cCcsXHJcblx0X192YWxpZGF0ZUNvbHVtbjogZnVuY3Rpb24gKGNvbHVtbiwgaW5kZXgpe1xyXG5cdFx0aWYoY29sdW1uLnZhbGlkYXRlID09PSBmYWxzZSkge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0XHRpZih6bi5pcyhjb2x1bW4udmFsaWRhdGUsICdmdW5jdGlvbicpKSB7XHJcblx0XHRcdHZhciBfcmV0dXJuID0gY29sdW1uLnZhbGlkYXRlLmFwcGx5KG51bGwsIFtjb2x1bW4sIGluZGV4XSk7XHJcblx0XHRcdGlmKF9yZXR1cm4gPT09IGZhbHNlKSB7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9LFxyXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcclxuXHRcdHZhciBfa2V5TWFwcGluZyA9IHRoaXMucHJvcHMua2V5TWFwcGluZyB8fCB7IH07XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8Y29sZ3JvdXA+XHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0KHRoaXMucHJvcHMuY29sdW1uc3x8W10pLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuXHRcdFx0XHRcdFx0aWYodGhpcy5fX3ZhbGlkYXRlQ29sdW1uKGl0ZW0sIGluZGV4KSA9PT0gZmFsc2Upe1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdHZhciBfd2lkdGhLZXkgPSBfa2V5TWFwcGluZy53aWR0aCB8fCAnd2lkdGgnLCBfd2lkdGhWYWx1ZSA9IGl0ZW1bX3dpZHRoS2V5XTtcclxuXHRcdFx0XHRcdFx0c3dpdGNoKHpuLnR5cGUoX3dpZHRoVmFsdWUpKSB7XHJcblx0XHRcdFx0XHRcdFx0Y2FzZSAnZnVuY3Rpb24nOlxyXG5cdFx0XHRcdFx0XHRcdFx0X3dpZHRoVmFsdWUgPSBfd2lkdGhWYWx1ZS5hcHBseShudWxsLCBbaXRlbSwgaW5kZXhdKTtcclxuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gPGNvbCBrZXk9e2luZGV4fSBzdHlsZT17eyB3aWR0aDogX3dpZHRoVmFsdWUgfX0gLz47XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0PC9jb2xncm91cD5cclxuXHRcdCk7XHJcblx0fVxyXG59KTtcclxuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xyXG52YXIgVFJvdyA9IHJlcXVpcmUoJy4vVFJvdycpO1xyXG52YXIgbG9hZGVyID0gcmVxdWlyZSgnem51aS1yZWFjdC1sb2FkZXInKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG5cdGRpc3BsYXlOYW1lOidaUlRCb2R5JyxcclxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCl7XHJcblx0XHR2YXIgX3BhZ2VTaXplID0gdGhpcy5wcm9wcy5wYWdlU2l6ZSB8fCA1MDtcclxuXHRcdHZhciBfY29sdW1uS2V5TWFwID0ge30sIF9kZWZhdWx0ID0ge307XHJcblx0XHRmb3IodmFyIGNvbHVtbiBvZiB0aGlzLnByb3BzLmNvbHVtbnMpe1xyXG5cdFx0XHRfY29sdW1uS2V5TWFwW2NvbHVtbi5uYW1lXSA9IGNvbHVtbjtcclxuXHRcdFx0aWYoY29sdW1uLnZhbHVlICE9PSBudWxsICYmIGNvbHVtbi52YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0X2RlZmF1bHRbY29sdW1uLm5hbWVdID0gY29sdW1uLnZhbHVlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0YWN0aXZlOiBudWxsLFxyXG5cdFx0XHRjaGVja2VkczogW10sXHJcblx0XHRcdGNsYXNzTmFtZTogJycsXHJcblx0XHRcdGNvbHVtbktleU1hcDogX2NvbHVtbktleU1hcCxcclxuXHRcdFx0ZGVmYXVsdDogX2RlZmF1bHQsXHJcblx0XHRcdHBhZ2VJbmRleDogdGhpcy5wcm9wcy5wYWdlSW5kZXggfHwgMSxcclxuXHRcdFx0cGFnZVNpemU6IF9wYWdlU2l6ZSxcclxuXHRcdFx0c3R5bGU6IHt9LFxyXG5cdFx0XHRsb2FkaW5nOiBmYWxzZVxyXG5cdFx0fTtcclxuXHR9LFxyXG5cdGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiAoKXtcclxuXHRcdGZvcih2YXIgaXRlbSBvZiB0aGlzLnByb3BzLmRhdGEpe1xyXG5cdFx0XHR0aGlzLl9faW5pdGlhbERhdGFJdGVtKGl0ZW0pO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0X19pbml0aWFsRGF0YUl0ZW06IGZ1bmN0aW9uIChkYXRhKXtcclxuXHRcdHZhciBfZGVmYXVsdCA9IHRoaXMuc3RhdGUuZGVmYXVsdCwgX2NvbHVtbktleU1hcCA9IHRoaXMuc3RhdGUuY29sdW1uS2V5TWFwLCBfdmFsdWUgPSBudWxsO1xyXG5cdFx0Zm9yKHZhciBrZXkgaW4gX2RlZmF1bHQpe1xyXG5cdFx0XHRfdmFsdWUgPSBfZGVmYXVsdFtrZXldO1xyXG5cdFx0XHRpZih0eXBlb2YgX3ZhbHVlID09ICdzdHJpbmcnICYmIF92YWx1ZS5pbmRleE9mKCd7JykgIT0gLTEgJiYgX3ZhbHVlLmluZGV4T2YoJ30nKSAhPS0xKSB7XHJcblx0XHRcdFx0X3ZhbHVlID0gX3ZhbHVlLmZvcm1hdChkYXRhfHx7fSk7XHJcblx0XHRcdFx0aWYoX2NvbHVtbktleU1hcFtrZXldKSB7XHJcblx0XHRcdFx0XHRzd2l0Y2goX2NvbHVtbktleU1hcFtrZXldLmRhdGFUeXBlKSB7XHJcblx0XHRcdFx0XHRcdGNhc2UgJ051bWJlcic6XHJcblx0XHRcdFx0XHRcdFx0aWYoX3ZhbHVlLmluZGV4T2YoJ3snKSA9PSAtMSl7XHJcblx0XHRcdFx0XHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRfdmFsdWUgPSBldmFsKF92YWx1ZSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0X3ZhbHVlID0gMDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0em4uZXJyb3IoZXJyKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdGNhc2UgJ1ByaWNlJzpcclxuXHRcdFx0XHRcdFx0XHRfdmFsdWUgPSB6bnVpLnJlYWN0LnN0cmluZ2lmeVByaWNlKF92YWx1ZSk7XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRkYXRhW2tleV0gPSBfdmFsdWU7XHJcblx0XHRcdH1cclxuXHJcblxyXG5cdFx0XHRpZihkYXRhW2tleV0gPT0gbnVsbCkge1xyXG5cdFx0XHRcdGRhdGFba2V5XSA9IF92YWx1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBkYXRhO1xyXG5cdH0sXHJcblx0X19nZXREYXRhOiBmdW5jdGlvbiAocGFnZUluZGV4LCBwYWdlU2l6ZSl7XHJcblx0XHR2YXIgX3BhZ2VJbmRleCA9IHBhZ2VJbmRleCB8fCB0aGlzLnN0YXRlLnBhZ2VJbmRleDtcclxuXHRcdHZhciBfcGFnZVNpemUgPSBwYWdlU2l6ZSB8fCB0aGlzLnN0YXRlLnBhZ2VTaXplO1xyXG5cdFx0cmV0dXJuIHRoaXMucHJvcHMuZGF0YS5zbGljZSgoX3BhZ2VJbmRleC0xKSAqIF9wYWdlU2l6ZSwgTWF0aC5taW4oX3BhZ2VJbmRleCAqIF9wYWdlU2l6ZSwgdGhpcy5wcm9wcy5kYXRhLmxlbmd0aCkpO1xyXG5cdH0sXHJcblx0X19yZW5kZXJMb2FkaW5nOiBmdW5jdGlvbiAoKXtcclxuXHRcdHZhciBfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMubG9hZGluZ1JlbmRlciwge1xyXG5cdFx0XHR0Ym9keTogdGhpc1xyXG5cdFx0fSwgdGhpcy5wcm9wcy5jb250ZXh0KTtcclxuXHJcblx0XHRpZighX2VsZW1lbnQpe1xyXG5cdFx0IFx0X2VsZW1lbnQgPSA8bG9hZGVyLkRhdGFMb2FkZXIgbG9hZGVyPVwid2F2ZVwiIHRpdGxlPXsnTG9hZGluZy4uLid9IC8+O1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBfbG9hZGluZyA9IHpuLmV4dGVuZCh7IGNsYXNzTmFtZTogJycsIHN0eWxlOiB7fSB9LCB0aGlzLnByb3BzLmxvYWRpbmcpO1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PHRyIGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ0Ym9keS1sb2FkaW5nXCIsIF9sb2FkaW5nLmNsYXNzTmFtZSl9IHN0eWxlPXtfbG9hZGluZy5zdHlsZX0+XHJcblx0XHRcdFx0PHRkIGNvbFNwYW49e3RoaXMucHJvcHMuY29sdW1ucy5sZW5ndGh9PntfZWxlbWVudH08L3RkPlxyXG5cdFx0XHQ8L3RyPlxyXG5cdFx0KTtcclxuXHR9LFxyXG5cdF9fcmVuZGVyRW1wdHk6IGZ1bmN0aW9uICgpe1xyXG5cdFx0dmFyIF9lbGVtZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQodGhpcy5wcm9wcy5lbXB0eVJlbmRlciwge1xyXG5cdFx0XHR0Ym9keTogdGhpc1xyXG5cdFx0fSwgdGhpcy5wcm9wcy5jb250ZXh0KTtcclxuXHJcblx0XHRpZighX2VsZW1lbnQpe1xyXG5cdFx0IFx0X2VsZW1lbnQgPSAoXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJlbXB0eS1jb250ZW50XCI+XHJcblx0XHRcdFx0XHQ8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1wcmVmaXg9XCJmYXNcIiBkYXRhLWljb249XCJkZXNrdG9wXCIgY2xhc3NOYW1lPVwic3ZnLWlubGluZS0tZmEgZmEtZGVza3RvcCBmYS13LTE4IFwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1NzYgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNTI4IDBINDhDMjEuNSAwIDAgMjEuNSAwIDQ4djMyMGMwIDI2LjUgMjEuNSA0OCA0OCA0OGgxOTJsLTE2IDQ4aC03MmMtMTMuMyAwLTI0IDEwLjctMjQgMjRzMTAuNyAyNCAyNCAyNGgyNzJjMTMuMyAwIDI0LTEwLjcgMjQtMjRzLTEwLjctMjQtMjQtMjRoLTcybC0xNi00OGgxOTJjMjYuNSAwIDQ4LTIxLjUgNDgtNDhWNDhjMC0yNi41LTIxLjUtNDgtNDgtNDh6bS0xNiAzNTJINjRWNjRoNDQ4djI4OHpcIj48L3BhdGg+PC9zdmc+XHJcblx0XHRcdFx0XHQ8c3Bhbj5FbXB0eTwvc3Bhbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHRcdHZhciBfZW1wdHkgPSB6bi5leHRlbmQoeyBjbGFzc05hbWU6ICcnLCBzdHlsZToge30gfSwgdGhpcy5wcm9wcy5lbXB0eSk7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8dHIgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInRib2R5LWVtcHR5XCIsIF9lbXB0eS5jbGFzc05hbWUpfSBzdHlsZT17X2VtcHR5LnN0eWxlfT5cclxuXHRcdFx0XHQ8dGQgY29sU3Bhbj17dGhpcy5wcm9wcy5jb2x1bW5zLmxlbmd0aH0+e19lbGVtZW50fTwvdGQ+XHJcblx0XHRcdDwvdHI+XHJcblx0XHQpO1xyXG5cdH0sXHJcblx0X19vblJvd0NsaWNrOiBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHRcdHZhciBfZGF0YSA9IGV2ZW50LmRhdGE7XHJcblx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0YWN0aXZlOiBfZGF0YS50cm93LnByb3BzLmRhdGFcclxuXHRcdH0pO1xyXG5cdFx0ZXZlbnQudGJvZHkgPSB0aGlzO1xyXG5cdFx0dGhpcy5wcm9wcy5vblJvd0NsaWNrICYmIHRoaXMucHJvcHMub25Sb3dDbGljayhldmVudCk7XHJcblx0fSxcclxuXHRfX29uQ2VsbENsaWNrOiBmdW5jdGlvbiAoZXZlbnQpe1xyXG5cdFx0ZXZlbnQudGJvZHkgPSB0aGlzO1xyXG5cdFx0dGhpcy5wcm9wcy5vbkNlbGxDbGljayAmJiB0aGlzLnByb3BzLm9uQ2VsbENsaWNrKGV2ZW50KTtcclxuXHR9LFxyXG5cdF9fcmVuZGVyUm93OiBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpe1xyXG5cdFx0aWYoIXpuLmlzKGl0ZW0sICdvYmplY3QnKSkgeyByZXR1cm4gbnVsbDt9XHJcblx0XHR2YXIgX3RlbXAgPSB0aGlzLnByb3BzLmVhY2hSb3dEYXRhICYmIHRoaXMucHJvcHMuZWFjaFJvd0RhdGEoaXRlbSwgaW5kZXgsIHRoaXMpO1xyXG5cdFx0aWYoX3RlbXAgJiYgem4uaXMoX3RlbXAsICdvYmplY3QnKSl7XHJcblx0XHRcdGl0ZW0gPSBfdGVtcDtcclxuXHRcdH1cclxuXHRcdHZhciBfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMucm93UmVuZGVyLCB7XHJcblx0XHRcdGRhdGE6IGl0ZW0sXHJcblx0XHRcdHJvd0luZGV4OiBpbmRleCxcclxuXHRcdFx0dGJvZHk6IHRoaXNcclxuXHRcdH0sIHRoaXMucHJvcHMuY29udGV4dCk7XHJcblxyXG5cdFx0aWYoX2VsZW1lbnQpe1xyXG5cdFx0XHRyZXR1cm4gX2VsZW1lbnQ7XHJcblx0XHR9XHJcblx0XHR2YXIgX3Jvd0tleSA9IHRoaXMucHJvcHMucm93S2V5O1xyXG5cdFx0dmFyIF9rZXkgPSBpdGVtW19yb3dLZXldIHx8IGluZGV4O1xyXG5cdFx0cmV0dXJuIDxUUm93IGtleT17X2tleSArICctJyArIGluZGV4fSByb3dJbmRleD17aW5kZXh9IHsuLi50aGlzLnByb3BzLnJvd30gXHJcblx0XHRcdFx0XHRjb250ZXh0PXt0aGlzLnByb3BzLmNvbnRleHR9IFxyXG5cdFx0XHRcdFx0Y2VsbD17dGhpcy5wcm9wcy5jZWxsfVxyXG5cdFx0XHRcdFx0Y2VsbFJlbmRlcj17dGhpcy5wcm9wcy5jZWxsUmVuZGVyfVxyXG5cdFx0XHRcdFx0Y29sdW1ucz17dGhpcy5wcm9wcy5jb2x1bW5zfSBcclxuXHRcdFx0XHRcdGZpeGVkQ29sdW1ucz17dGhpcy5wcm9wcy5maXhlZENvbHVtbnN9XHJcblx0XHRcdFx0XHR0Ym9keT17dGhpc31cclxuXHRcdFx0XHRcdGFjdGl2ZT17dGhpcy5zdGF0ZS5hY3RpdmUgPT0gaXRlbX0gXHJcblx0XHRcdFx0XHRkYXRhPXtpdGVtfSBcclxuXHRcdFx0XHRcdGNoZWNrZWQ9e3RoaXMuc3RhdGUuY2hlY2tlZHMuaW5kZXhPZihpdGVtKSAhPT0gLTF9IFxyXG5cdFx0XHRcdFx0b25Sb3dDbGljaz17dGhpcy5fX29uUm93Q2xpY2t9XHJcblx0XHRcdFx0XHRvbkNlbGxDbGljaz17dGhpcy5fX29uQ2VsbENsaWNrfSAvPjtcclxuXHR9LFxyXG5cdF9fcGFnZUNoYW5nZTogZnVuY3Rpb24gKHBhZ2VJbmRleCl7XHJcblx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0cGFnZUluZGV4OiBwYWdlSW5kZXhcclxuXHRcdH0pO1xyXG5cdH0sXHJcblx0X19wYWdlc1JlbmRlcjogZnVuY3Rpb24gKCl7XHJcblx0XHR2YXIgX3BhZ2VDb3VudCA9IE1hdGguY2VpbCh0aGlzLnByb3BzLmRhdGEubGVuZ3RoIC8gdGhpcy5zdGF0ZS5wYWdlU2l6ZSksIF9wYWdlcyA9IFtdO1xyXG5cdFx0aWYoX3BhZ2VDb3VudCA+IDEpIHtcclxuXHRcdFx0Zm9yKHZhciBpID0gMTsgaSA8IF9wYWdlQ291bnQgKyAxOyBpKyspIHsgX3BhZ2VzLnB1c2goaSk7IH1cclxuXHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHQ8dHIgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInRib2R5LXBhZ2VzXCIsICcnKX0+XHJcblx0XHRcdFx0XHQ8dGQgY29sU3Bhbj17dGhpcy5wcm9wcy5jb2x1bW5zLmxlbmd0aH0+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGF0YS1wYWdlXCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwYWdlc1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRfcGFnZXMubWFwKChpLCBpbmRleCk9PntcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gPHNwYW4ga2V5PXtpbmRleH0gY2xhc3NOYW1lPXsncGFnZSAnICsgKHRoaXMuc3RhdGUucGFnZUluZGV4PT1pPydhY3RpdmUnOicnKX0gb25DbGljaz17KCk9PnRoaXMuX19wYWdlQ2hhbmdlKGkpfT57aX08L3NwYW4+O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInBhZ2UtY291bnRcIj7lhbEge3RoaXMucHJvcHMuZGF0YS5sZW5ndGh9IOadoTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdDwvdHI+XHJcblx0XHRcdCk7XHJcblx0XHR9XHJcblx0fSxcclxuXHRfX3JlbmRlckRhdGE6IGZ1bmN0aW9uICgpe1xyXG5cdFx0aWYodGhpcy5wcm9wcy5kYXRhID09IG51bGwgfHwgKHRoaXMucHJvcHMuZGF0YSAmJiAhdGhpcy5wcm9wcy5kYXRhLmxlbmd0aCkpe1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5fX3JlbmRlckVtcHR5KCk7XHJcblx0XHR9XHJcblx0XHR2YXIgX3BhZ2VDb3VudCA9IE1hdGguY2VpbCh0aGlzLnByb3BzLmRhdGEubGVuZ3RoIC8gdGhpcy5zdGF0ZS5wYWdlU2l6ZSk7XHJcblx0XHRpZihfcGFnZUNvdW50ID4gMSl7XHJcblx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0PD5cclxuXHRcdFx0XHRcdHt0aGlzLl9fcGFnZXNSZW5kZXIoKX1cclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0dGhpcy5fX2dldERhdGEodGhpcy5zdGF0ZS5wYWdlSW5kZXgsIHRoaXMuc3RhdGUucGFnZVNpemUpLm1hcCh0aGlzLl9fcmVuZGVyUm93KVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdDwvPlxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDw+XHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5kYXRhLm1hcCh0aGlzLl9fcmVuZGVyUm93KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0PC8+XHJcblx0XHQpO1xyXG5cdH0sXHJcblx0X19yZW5kZXI6IGZ1bmN0aW9uICgpe1xyXG5cdFx0aWYodGhpcy5wcm9wcy5sb2FkaW5nIHx8IHRoaXMuc3RhdGUubG9hZGluZykge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5fX3JlbmRlckxvYWRpbmcoKTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5fX3JlbmRlckRhdGEoKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDx0Ym9keSBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItdGFibGUtdGJvZHlcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUsIHRoaXMuc3RhdGUuY2xhc3NOYW1lKX0gc3R5bGU9e3pudWkucmVhY3Quc3R5bGUodGhpcy5wcm9wcy5zdHlsZSwgdGhpcy5zdGF0ZS5zdHlsZSl9PlxyXG5cdFx0XHRcdHsgdGhpcy5fX3JlbmRlcigpIH1cclxuXHRcdFx0PC90Ym9keT5cclxuXHRcdCk7XHJcblx0fVxyXG59KTtcclxuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcblx0ZGlzcGxheU5hbWU6J1pSVEJvZHlFbXB0eScsXHJcblx0X19yZW5kZXJFbXB0eTogZnVuY3Rpb24gKCl7XHJcblx0XHR2YXIgX2VsZW1lbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudCh0aGlzLnByb3BzLmVtcHR5UmVuZGVyLCB7XHJcblx0XHRcdHRib2R5OiB0aGlzXHJcblx0XHR9LCB0aGlzLnByb3BzLmNvbnRleHQpO1xyXG5cclxuXHRcdGlmKCFfZWxlbWVudCl7XHJcblx0XHQgXHRfZWxlbWVudCA9IDxkaXYgY2xhc3NOYW1lPVwiZW1wdHktY29udGVudFwiPlxyXG5cdFx0XHRcdCA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1wcmVmaXg9XCJmYXNcIiBkYXRhLWljb249XCJkZXNrdG9wXCIgY2xhc3NOYW1lPVwic3ZnLWlubGluZS0tZmEgZmEtZGVza3RvcCBmYS13LTE4IFwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1NzYgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNTI4IDBINDhDMjEuNSAwIDAgMjEuNSAwIDQ4djMyMGMwIDI2LjUgMjEuNSA0OCA0OCA0OGgxOTJsLTE2IDQ4aC03MmMtMTMuMyAwLTI0IDEwLjctMjQgMjRzMTAuNyAyNCAyNCAyNGgyNzJjMTMuMyAwIDI0LTEwLjcgMjQtMjRzLTEwLjctMjQtMjQtMjRoLTcybC0xNi00OGgxOTJjMjYuNSAwIDQ4LTIxLjUgNDgtNDhWNDhjMC0yNi41LTIxLjUtNDgtNDgtNDh6bS0xNiAzNTJINjRWNjRoNDQ4djI4OHpcIj48L3BhdGg+PC9zdmc+XHJcblx0XHRcdFx0IDxzcGFuPkVtcHR5PC9zcGFuPlxyXG5cdFx0XHQgPC9kaXY+O1xyXG5cdFx0fVxyXG5cdFx0dmFyIF9lbXB0eSA9IHpuLmV4dGVuZCh7IGNsYXNzTmFtZTogJycsIHN0eWxlOiB7fSB9LCB0aGlzLnByb3BzLmVtcHR5KTtcclxuXHRcdHJldHVybiA8dHIgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInRib2R5LWVtcHR5XCIsIF9lbXB0eS5jbGFzc05hbWUpfSBzdHlsZT17X2VtcHR5LnN0eWxlfT5cclxuXHRcdFx0PHRkIGNvbFNwYW49e3RoaXMucHJvcHMuY29sdW1ucy5sZW5ndGh9PntfZWxlbWVudH08L3RkPlxyXG5cdFx0PC90cj47XHJcblx0fSxcclxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8dGJvZHkgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXRhYmxlLXRib2R5LWVtcHR5XCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gc3R5bGU9e3pudWkucmVhY3Quc3R5bGUodGhpcy5wcm9wcy5zdHlsZSl9PlxyXG5cdFx0XHRcdHsgdGhpcy5fX3JlbmRlckVtcHR5KCkgfVxyXG5cdFx0XHQ8L3Rib2R5PlxyXG5cdFx0KTtcclxuXHR9XHJcbn0pO1xyXG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XHJcbnZhciBSZWFjdERPTSA9IHpudWkuUmVhY3RET00gfHwgcmVxdWlyZSgncmVhY3QtZG9tJyk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuXHRkaXNwbGF5TmFtZTonWlJUQ2VsbCcsXHJcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRjbGFzc05hbWU6ICcnLFxyXG5cdFx0XHRzdHlsZToge30sXHJcblx0XHRcdGRpc2FibGVkOiB0aGlzLnByb3BzLmRpc2FibGVkLFxyXG5cdFx0XHRjaGVja2VkOiB0aGlzLnByb3BzLmNoZWNrZWQsXHJcblx0XHRcdGFjdGl2ZTogdGhpcy5wcm9wcy5hY3RpdmVcclxuXHRcdH1cclxuXHR9LFxyXG5cdF9fcmVuZGVyQ2VsbENvbnRlbnQ6IGZ1bmN0aW9uICgpe1xyXG5cdFx0aWYodGhpcy5wcm9wcy5jaGlsZHJlbikge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbjtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0dmFyIF92YWx1ZSA9IG51bGw7XHJcblx0XHRpZih0aGlzLnByb3BzLmRhdGEgJiYgdGhpcy5wcm9wcy5uYW1lKSB7XHJcblx0XHRcdF92YWx1ZSA9IHRoaXMucHJvcHMuZGF0YVt0aGlzLnByb3BzLm5hbWVdO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBfcmVuZGVyID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQodGhpcy5wcm9wcy5yZW5kZXIgfHwgdGhpcy5wcm9wcy5ib2R5LCB7XHJcblx0XHRcdHJvd0luZGV4OiB0aGlzLnByb3BzLnJvd0luZGV4LFxyXG5cdFx0XHRjZWxsSW5kZXg6IHRoaXMucHJvcHMuY2VsbEluZGV4LCBcclxuXHRcdFx0Y29sdW1uOiB0aGlzLnByb3BzLmNvbHVtbixcclxuXHRcdFx0ZGF0YTogdGhpcy5wcm9wcy5kYXRhLFxyXG5cdFx0XHR2YWx1ZTogX3ZhbHVlLFxyXG5cdFx0XHR0Y2VsbDogdGhpcyxcclxuXHRcdFx0dHJvdzogdGhpcy5wcm9wcy50cm93LFxyXG5cdFx0XHR0Ym9keTogdGhpcy5wcm9wcy50Ym9keSxcclxuXHRcdFx0dGFibGU6IHRoaXMucHJvcHMudGJvZHkucHJvcHMudGFibGVcclxuXHRcdH0sIHRoaXMucHJvcHMuY29udGV4dCk7XHJcblx0XHRcclxuXHRcdGlmKF9yZW5kZXIpe1xyXG5cdFx0XHRyZXR1cm4gX3JlbmRlcjtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjZWxsLWxhYmVsXCIgdGl0bGU9e192YWx1ZX0+e192YWx1ZX08L2Rpdj47XHJcblx0fSxcclxuXHRfX2NlbGxDbGljazogZnVuY3Rpb24gKGV2ZW50KXtcclxuXHRcdHZhciBfdGhpcyA9IHRoaXM7XHJcblx0XHRldmVudC5kYXRhID0ge1xyXG5cdFx0XHRmaW5kVERET006IGZ1bmN0aW9uICgpe1xyXG5cdFx0XHRcdHJldHVybiBSZWFjdERPTS5maW5kRE9NTm9kZShfdGhpcyk7XHJcblx0XHRcdH0sXHJcblx0XHRcdHRjZWxsOiB0aGlzXHJcblx0XHR9O1xyXG5cdFx0dGhpcy5wcm9wcy5vbkNsaWNrICYmIHRoaXMucHJvcHMub25DbGljayhldmVudCk7XHJcblx0XHR0aGlzLnByb3BzLm9uQ2VsbENsaWNrICYmIHRoaXMucHJvcHMub25DZWxsQ2xpY2soZXZlbnQpO1xyXG5cdH0sXHJcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xyXG5cdFx0dmFyIF9jb2x1bW4gPSB0aGlzLnByb3BzLmNvbHVtbiB8fCB7fTtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDx0ZCBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItdGFibGUtdGNlbGxcIiwgKF9jb2x1bW4uZml4ZWQ/J2ZpeGVkJzonJyksIHRoaXMucHJvcHMuY2xhc3NOYW1lLCBfY29sdW1uLmJvZHlDbGFzc05hbWUsIHRoaXMuc3RhdGUuY2xhc3NOYW1lKX0gc3R5bGU9e3pudWkucmVhY3Quc3R5bGUodGhpcy5wcm9wcy5zdHlsZSwgX2NvbHVtbi5ib2R5U3R5bGUsIHRoaXMuc3RhdGUuc3R5bGUsIF9jb2x1bW4uZml4ZWRTdHlsZXMpfVx0XHJcblx0XHRcdFx0ZGF0YS1kaXNhYmxlZD17dGhpcy5zdGF0ZS5kaXNhYmxlZH1cclxuXHRcdFx0XHRkYXRhLWNoZWNrZWQ9e3RoaXMuc3RhdGUuY2hlY2tlZH1cclxuXHRcdFx0XHRkYXRhLWFjdGl2ZT17dGhpcy5zdGF0ZS5hY3RpdmV9XHJcblx0XHRcdFx0b25DbGljaz17dGhpcy5fX2NlbGxDbGlja30gPlxyXG5cdFx0XHRcdHt0aGlzLl9fcmVuZGVyQ2VsbENvbnRlbnQoKX1cclxuXHRcdFx0PC90ZD5cclxuXHRcdCk7XHJcblx0fVxyXG59KTtcclxuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xyXG52YXIgZmlsdGVyID0gcmVxdWlyZSgnem51aS1yZWFjdC1maWx0ZXInKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG5cdGRpc3BsYXlOYW1lOiAnWlJGaWx0ZXInLFxyXG5cdGdldEluaXRpYWxTdGF0ZTpmdW5jdGlvbigpe1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0Y2xhc3NOYW1lOiAnJyxcclxuXHRcdFx0c3R5bGU6IHt9LFxyXG5cdFx0XHRkYXRhOiB7fVxyXG5cdFx0fVxyXG5cdH0sXHJcblx0X19vbkZpbHRlckNoYW5nZTogZnVuY3Rpb24gKGV2ZW50LCBpbnB1dCwgZmlsdGVyRmllbGQpe1xyXG5cdFx0aWYoZXZlbnQubmFtZSAmJiBldmVudC5vcHQpIHtcclxuXHRcdFx0aWYoZXZlbnQudmFsdWUgPT09IG51bGwgfHwgZXZlbnQudmFsdWUgPT09IHVuZGVmaW5lZCB8fCBldmVudC52YWx1ZSA9PT0gJycpIHtcclxuXHRcdFx0XHR0aGlzLnN0YXRlLmRhdGFbZXZlbnQubmFtZV0gPSBudWxsO1xyXG5cdFx0XHRcdGRlbGV0ZSB0aGlzLnN0YXRlLmRhdGFbZXZlbnQubmFtZV07XHJcblx0XHRcdH1lbHNlIGlmKCFldmVudC52YWx1ZSAmJiBpbnB1dCAmJiBpbnB1dC5wcm9wcyAmJiAhaW5wdXQucHJvcHMuZW1wdHlWYWx1ZUVuYWJsZWQpe1xyXG5cdFx0XHRcdHRoaXMuc3RhdGUuZGF0YVtldmVudC5uYW1lXSA9IG51bGw7XHJcblx0XHRcdFx0ZGVsZXRlIHRoaXMuc3RhdGUuZGF0YVtldmVudC5uYW1lXTtcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0dGhpcy5zdGF0ZS5kYXRhW2V2ZW50Lm5hbWVdID0ge1xyXG5cdFx0XHRcdFx0dmFsdWU6IGV2ZW50LnZhbHVlLFxyXG5cdFx0XHRcdFx0b3B0OiBldmVudC5vcHRcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHR0aGlzLnByb3BzLm9uRmlsdGVyQ2hhbmdlICYmIHRoaXMucHJvcHMub25GaWx0ZXJDaGFuZ2UoZXZlbnQsIHtcclxuXHRcdFx0bmFtZTogZXZlbnQubmFtZSxcclxuXHRcdFx0b3B0OiBldmVudC5vcHQsXHJcblx0XHRcdGlucHV0OiBpbnB1dCwgXHJcblx0XHRcdGZpbHRlckZpZWxkOiBmaWx0ZXJGaWVsZCxcclxuXHRcdFx0ZGF0YTogdGhpcy5zdGF0ZS5kYXRhXHJcblx0XHR9KTtcclxuXHRcdHRoaXMucHJvcHMub25GaWx0ZXIgJiYgdGhpcy5wcm9wcy5vbkZpbHRlcih0aGlzLnN0YXRlLmRhdGEpO1xyXG5cdH0sXHJcblx0X19vbkZpbHRlckNhbmNlbDogZnVuY3Rpb24gKG5hbWUpe1xyXG5cdFx0aWYobmFtZSAmJiB0aGlzLnN0YXRlLmRhdGEpe1xyXG5cdFx0XHR0aGlzLnN0YXRlLmRhdGFbbmFtZV0gPSBudWxsO1xyXG5cdFx0XHRkZWxldGUgdGhpcy5zdGF0ZS5kYXRhW25hbWVdO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0X192YWxpZGF0ZUNvbHVtbjogZnVuY3Rpb24gKGNvbHVtbiwgaW5kZXgpe1xyXG5cdFx0aWYoY29sdW1uLnZhbGlkYXRlID09PSBmYWxzZSkge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0XHRpZih6bi5pcyhjb2x1bW4udmFsaWRhdGUsICdmdW5jdGlvbicpKSB7XHJcblx0XHRcdHZhciBfcmV0dXJuID0gY29sdW1uLnZhbGlkYXRlLmFwcGx5KG51bGwsIFtjb2x1bW4sIGluZGV4XSk7XHJcblx0XHRcdGlmKF9yZXR1cm4gPT09IGZhbHNlKSB7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9LFxyXG5cdF9fcmVuZGVyQ2VsbDogZnVuY3Rpb24gKGNvbHVtbiwgaW5kZXgpe1xyXG5cdFx0aWYodGhpcy5fX3ZhbGlkYXRlQ29sdW1uKGNvbHVtbiwgaW5kZXgpID09PSBmYWxzZSl7XHJcblx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0fVxyXG5cdFx0aWYoIXpuLmlzKGNvbHVtbiwgJ29iamVjdCcpKSB7IHJldHVybiBudWxsOyB9XHJcblx0XHR2YXIgX2VsZW1lbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudCh0aGlzLnByb3BzLmNlbGxSZW5kZXIsIHtcclxuXHRcdFx0Y29sdW1uOiBjb2x1bW4sXHJcblx0XHRcdGNlbGxJbmRleDogaW5kZXgsIFxyXG5cdFx0XHR0ZmlsdGVyOiB0aGlzXHJcblx0XHR9KTtcclxuXHRcdGlmKF9lbGVtZW50KXtcclxuXHRcdFx0cmV0dXJuIF9lbGVtZW50O1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHR2YXIgX2NvbnRlbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudChjb2x1bW4ucmVuZGVyLCB7XHJcblx0XHRcdGNvbHVtbjogY29sdW1uLFxyXG5cdFx0XHRjZWxsSW5kZXg6IGluZGV4LCBcclxuXHRcdFx0dGZpbHRlcjogdGhpc1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0aWYoIV9jb250ZW50ICYmIGNvbHVtbi5maWx0ZXIpIHtcclxuXHRcdFx0dmFyIF9maWx0ZXIgPSBjb2x1bW4uZmlsdGVyO1xyXG5cdFx0XHRpZih6bi5pcyhfZmlsdGVyLCAnZnVuY3Rpb24nKSkge1xyXG5cdFx0XHRcdGlmKF9maWx0ZXIucHJvdG90eXBlICYmIF9maWx0ZXIucHJvdG90eXBlLnJlbmRlcikge1xyXG5cdFx0XHRcdFx0X2NvbnRlbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudChfZmlsdGVyLCB7XHJcblx0XHRcdFx0XHRcdGNvbHVtbjogY29sdW1uLFxyXG5cdFx0XHRcdFx0XHR0ZmlsdGVyOiB0aGlzXHJcblx0XHRcdFx0XHR9KTtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIF9maWx0ZXIgPSBfZmlsdGVyLmNhbGwobnVsbCwgY29sdW1uLCB0aGlzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYoem4uaXMoX2ZpbHRlciwgJ29iamVjdCcpKSB7XHJcblx0XHRcdFx0dmFyIF9rZXkgPSBfZmlsdGVyLmtleSB8fCBjb2x1bW4ubmFtZTtcclxuXHRcdFx0XHRpZih6bi5pcyhfa2V5LCAnZnVuY3Rpb24nKSkge1xyXG5cdFx0XHRcdFx0X2tleSA9IF9rZXkuY2FsbChudWxsLCBjb2x1bW4sIHRoaXMpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0X2NvbnRlbnQgPSA8ZmlsdGVyLkZpbHRlckZpZWxkIGtleT17X2tleSB8fCB6bi51dWlkKCl9IHsuLi5fZmlsdGVyfSBuYW1lPXtjb2x1bW4ubmFtZX0gb25GaWx0ZXJDaGFuZ2U9e3RoaXMuX19vbkZpbHRlckNoYW5nZX0gb25DYW5jZWw9e3RoaXMuX19vbkZpbHRlckNhbmNlbH0gLz47XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHR2YXIgX2NlbGwgPSB6bi5leHRlbmQoeyBzdHlsZToge30sIGNsYXNzTmFtZTogJycgfSwgdGhpcy5wcm9wcy5jZWxsKTtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDx0ZCBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd0ZmlsdGVyLWNlbGwnLCAoY29sdW1uLmZpeGVkPydmaXhlZCc6JycpLCBfY2VsbC5jbGFzc05hbWUpfSBzdHlsZT17em51aS5yZWFjdC5zdHlsZShfY2VsbC5zdHlsZSwgY29sdW1uLmZpeGVkU3R5bGVzKX0+XHJcblx0XHRcdFx0eyBfY29udGVudCB9XHJcblx0XHRcdDwvdGQ+XHJcblx0XHQpO1xyXG5cdH0sXHJcblx0X19yZW5kZXJSb3c6IGZ1bmN0aW9uICgpe1xyXG5cdFx0dmFyIF9lbGVtZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQodGhpcy5wcm9wcy5yb3dSZW5kZXIsIHtcclxuXHRcdFx0dGZpbHRlcjogdGhpc1xyXG5cdFx0fSk7XHJcblx0XHRpZihfZWxlbWVudCl7XHJcblx0XHRcdHJldHVybiBfZWxlbWVudDtcclxuXHRcdH1cclxuXHRcdHZhciBfcm93ID0gem4uZXh0ZW5kKHsgY2xhc3NOYW1lOiAnJywgc3R5bGU6IHt9IH0sIHRoaXMucHJvcHMucm93KTtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDx0ciBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwidGZpbHRlci1yb3cgenItdGFibGUtdHJvd1wiLCBfcm93LmNsYXNzTmFtZSl9IHN0eWxlPXtfcm93LnN0eWxlfT5cclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQodGhpcy5wcm9wcy5jb2x1bW5zfHxbXSkubWFwKHRoaXMuX19yZW5kZXJDZWxsKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0PC90cj5cclxuXHRcdCk7XHJcblx0fSxcclxuXHRyZW5kZXI6ZnVuY3Rpb24oKXtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDx0aGVhZCBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItdGFibGUtdGZpbHRlclwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSwgdGhpcy5zdGF0ZS5jbGFzc05hbWUpfSBzdHlsZT17em51aS5yZWFjdC5zdHlsZSh0aGlzLnByb3BzLnN0eWxlLCB0aGlzLnN0YXRlLnN0eWxlKX0+XHJcblx0XHRcdFx0e3RoaXMuX19yZW5kZXJSb3coKX1cclxuXHRcdFx0PC90aGVhZD5cclxuXHRcdCk7XHJcblx0fVxyXG59KTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuXHRkaXNwbGF5TmFtZTonWlJURm9vdCcsXHJcblx0X19yZW5kZXJDaGlsZHJlbjogZnVuY3Rpb24gKCl7XHJcblx0XHR2YXIgX2NvbHVtbnMgPSB0aGlzLnByb3BzLmNvbHVtbnMgfHwgW107XHJcblx0XHRpZih0aGlzLnByb3BzLmNoaWxkcmVuKXtcclxuXHRcdFx0cmV0dXJuIDx0ciBjbGFzc05hbWU9XCJ0Zm9vdC1yb3dcIj5cclxuXHRcdFx0XHQ8dGQgY29sU3Bhbj17X2NvbHVtbnMubGVuZ3RofT57dGhpcy5wcm9wcy5jaGlsZHJlbn08L3RkPlxyXG5cdFx0XHQ8L3RyPjtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5fX3JlbmRlclJvdygpO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0X19yZW5kZXJDZWxsOiBmdW5jdGlvbiAoY29sdW1uLCBpbmRleCl7XHJcblx0XHRpZighem4uaXMoY29sdW1uLCAnb2JqZWN0JykpIHsgcmV0dXJuIG51bGw7IH1cclxuXHRcdHZhciBfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMuY2VsbFJlbmRlciwge1xyXG5cdFx0XHRjb2x1bW46IGNvbHVtbixcclxuXHRcdFx0Y2VsbEluZGV4OiBpbmRleCwgXHJcblx0XHRcdHRmb290OiB0aGlzXHJcblx0XHR9KTtcclxuXHRcdGlmKF9lbGVtZW50KXtcclxuXHRcdFx0cmV0dXJuIF9lbGVtZW50O1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBfY29udGVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KGNvbHVtbi5yZW5kZXIgfHwgY29sdW1uLmZvb3QsIHtcclxuXHRcdFx0Y29sdW1uOiBjb2x1bW4sXHJcblx0XHRcdGNlbGxJbmRleDogaW5kZXgsIFxyXG5cdFx0XHR0Zm9vdDogdGhpc1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0aWYodGhpcy5wcm9wcy5yZW5kZXIpIHtcclxuXHRcdFx0X2NvbnRlbnQgPSB0aGlzLnByb3BzLnJlbmRlcihjb2x1bW4sIGluZGV4LCB0aGlzKTtcclxuXHRcdH1cclxuXHJcblx0XHR2YXIgX2NlbGwgPSB6bi5leHRlbmQoeyBzdHlsZToge30sIGNsYXNzTmFtZTogJycgfSwgdGhpcy5wcm9wcy5jZWxsKTtcclxuXHRcdHJldHVybiA8dGgga2V5PXtpbmRleH0gY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgndGZvb3QtY2VsbCcsIF9jZWxsLmNsYXNzTmFtZSl9IHN0eWxlPXtfY2VsbC5zdHlsZX0+XHJcblx0XHRcdHsgX2NvbnRlbnQgfVxyXG5cdFx0PC90aD47XHJcblx0fSxcclxuXHRfX3JlbmRlclJvdzogZnVuY3Rpb24gKCl7XHJcblx0XHR2YXIgX2VsZW1lbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudCh0aGlzLnByb3BzLnJvd1JlbmRlciwge1xyXG5cdFx0XHR0aGVhZDogdGhpc1xyXG5cdFx0fSk7XHJcblx0XHRpZihfZWxlbWVudCl7XHJcblx0XHRcdHJldHVybiBfZWxlbWVudDtcclxuXHRcdH1cclxuXHRcdHZhciBfcm93ID0gem4uZXh0ZW5kKHsgY2xhc3NOYW1lOiAnJywgc3R5bGU6IHt9IH0sIHRoaXMucHJvcHMucm93KTtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDx0ciBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwidGZvb3Qtcm93XCIsIF9yb3cuY2xhc3NOYW1lKX0gc3R5bGU9e19yb3cuc3R5bGV9PlxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdCh0aGlzLnByb3BzLmNvbHVtbnN8fFtdKS5tYXAodGhpcy5fX3JlbmRlckNlbGwpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHQ8L3RyPlxyXG5cdFx0KTtcclxuXHR9LFxyXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDx0Zm9vdCBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItdGFibGUtdGZvb3RcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0+XHJcblx0XHRcdFx0e3RoaXMuX19yZW5kZXJDaGlsZHJlbigpfVxyXG5cdFx0XHQ8L3Rmb290PlxyXG5cdFx0KTtcclxuXHR9XHJcbn0pOyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcclxudmFyIFRIZWFkU29ydCA9IHJlcXVpcmUoJy4vVEhlYWRTb3J0Jyk7XHJcbnZhciBwb3B1cCA9IHJlcXVpcmUoJ3pudWktcmVhY3QtcG9wdXAnKTtcclxudmFyIHpyanNvbiA9IHJlcXVpcmUoJ3pudWktcmVhY3QtanNvbicpO1xyXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuXHRkaXNwbGF5TmFtZTonVEhlYWQnLFxyXG5cdGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCl7XHJcblx0XHRyZXR1cm4ge307XHJcblx0fSxcclxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpe1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0Y2xhc3NOYW1lOiAnJyxcclxuXHRcdFx0c3R5bGU6IHt9LFxyXG5cdFx0XHRzb3J0OiB7fSxcclxuXHRcdFx0ZmlsdGVyOiB7fVxyXG5cdFx0fTtcclxuXHR9LFxyXG5cdF9fb25Db2x1bW5Tb3J0OiBmdW5jdGlvbiAoc29ydCwgY29sdW1uKXtcclxuXHRcdGlmKGNvbHVtbi5uYW1lKSB7XHJcblx0XHRcdHRoaXMuc3RhdGUuc29ydFtjb2x1bW4ubmFtZV0gPSBzb3J0O1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5wcm9wcy5vblNvcnQgJiYgdGhpcy5wcm9wcy5vblNvcnQodGhpcy5zdGF0ZS5zb3J0KTtcclxuXHR9LFxyXG5cdF9fb25Db2x1bW5FZGl0b3JDaGFuZ2U6IGZ1bmN0aW9uIChkYXRhLCBjaGlsZCwgcm9vdCwgaW5kZXgpe1xyXG4gICAgICAgIHZhciBfcm9vdCA9IHJvb3QgfHwgY2hpbGQ7XHJcblx0XHR0aGlzLnByb3BzLm9uQ29sdW1uQ2hhbmdlICYmIHRoaXMucHJvcHMub25Db2x1bW5DaGFuZ2UoX3Jvb3Quc3RhdGUudmFsdWUsIGluZGV4KTtcclxuICAgIH0sXHJcblx0X19pY29uQ2xpY2tSZW5kZXI6IGZ1bmN0aW9uIChjb2x1bW4sIGluZGV4KXtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXYgc3R5bGU9e3twYWRkaW5nOiAxMCwgbWF4SGVpZ2h0OiA1MDAsIHdpZHRoOiA0MDAsIG92ZXJmbG93OiAnYXV0byd9fT5cclxuXHRcdFx0XHQ8enJqc29uLmVkaXRvci5vYmplY3QgZm9sZD17ZmFsc2V9XHJcblx0XHRcdFx0XHRkaXNwbGF5Q2xvc3VyZT17dHJ1ZX0gXHJcblx0XHRcdFx0XHRkaXNwbGF5SXRlbUNvdW50PXt0cnVlfSBcclxuXHRcdFx0XHRcdGxhYmVsPXsnQ29sdW1uJ30gXHJcblx0XHRcdFx0XHR2YWx1ZT17Y29sdW1ufSBcclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsoZGF0YSwgY2hpbGQsIHJvb3QpPT50aGlzLl9fb25Db2x1bW5FZGl0b3JDaGFuZ2UoZGF0YSwgY2hpbGQsIHJvb3QsIGluZGV4KX0gLz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpO1xyXG5cdH0sXHJcblx0X19zb3J0UmVuZGVyOiBmdW5jdGlvbiAoKXtcclxuXHJcblx0fSxcclxuXHRfX3ZhbGlkYXRlQ29sdW1uOiBmdW5jdGlvbiAoY29sdW1uLCBpbmRleCl7XHJcblx0XHRpZihjb2x1bW4udmFsaWRhdGUgPT09IGZhbHNlKSB7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHRcdGlmKHpuLmlzKGNvbHVtbi52YWxpZGF0ZSwgJ2Z1bmN0aW9uJykpIHtcclxuXHRcdFx0dmFyIF9yZXR1cm4gPSBjb2x1bW4udmFsaWRhdGUuYXBwbHkobnVsbCwgW2NvbHVtbiwgaW5kZXhdKTtcclxuXHRcdFx0aWYoX3JldHVybiA9PT0gZmFsc2UpIHtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2VcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0sXHJcblx0X19yZW5kZXJDZWxsOiBmdW5jdGlvbiAoY29sdW1uLCBpbmRleCl7XHJcblx0XHRpZih0aGlzLl9fdmFsaWRhdGVDb2x1bW4oY29sdW1uLCBpbmRleCkgPT09IGZhbHNlKXtcclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHR9XHJcblx0XHRpZighem4uaXMoY29sdW1uLCAnb2JqZWN0JykpIHsgcmV0dXJuIG51bGw7IH1cclxuXHRcdHZhciBfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMuY2VsbFJlbmRlciwge1xyXG5cdFx0XHRjb2x1bW46IGNvbHVtbixcclxuXHRcdFx0Y2VsbEluZGV4OiBpbmRleCwgXHJcblx0XHRcdHRoZWFkOiB0aGlzXHJcblx0XHR9KTtcclxuXHRcdGlmKF9lbGVtZW50KXtcclxuXHRcdFx0cmV0dXJuIF9lbGVtZW50O1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBfY29udGVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KGNvbHVtbi5yZW5kZXIgfHwgY29sdW1uLmhlYWQsIHtcclxuXHRcdFx0XHRjb2x1bW46IGNvbHVtbixcclxuXHRcdFx0XHRjZWxsSW5kZXg6IGluZGV4LCBcclxuXHRcdFx0XHR0aGVhZDogdGhpcyxcclxuXHRcdFx0XHR0YWJsZTogdGhpcy5wcm9wcy50YWJsZVxyXG5cdFx0XHR9KSxcclxuXHRcdFx0X21hcHBpbmcgPSB0aGlzLnByb3BzLmtleU1hcHBpbmcgfHwge30sXHJcblx0XHRcdF9sYWJlbEtleSA9IF9tYXBwaW5nWydsYWJlbCddIHx8ICdsYWJlbCcsXHJcblx0XHRcdF9sYWJlbCA9IGNvbHVtbltfbGFiZWxLZXldO1xyXG5cclxuXHRcdGlmKHpuLmlzKF9sYWJlbCwgJ2Z1bmN0aW9uJykpe1xyXG5cdFx0XHRfbGFiZWwgPSBfbGFiZWwoY29sdW1uLCB0aGlzKTtcclxuXHRcdH1cclxuXHRcdGlmKCFfY29udGVudCkge1xyXG5cdFx0XHRfY29udGVudCA9IChcclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17XCJjZWxsLWxhYmVsIFwiICsgKGNvbHVtbi5zb3J0Pydzb3J0YWJsZSc6JycpfSB0aXRsZT17X2xhYmVsfT5cclxuXHRcdFx0XHRcdHsgISFjb2x1bW4ucmVxdWlyZWQgJiYgPHNwYW4gZGF0YS16ci1wb3B1cC10b29sdGlwPVwi5b+F6KaB5a2X5q61XCIgY2xhc3NOYW1lPVwicmVxdWlyZWRcIj4qPC9zcGFuPn1cclxuXHRcdFx0XHRcdHsgX2xhYmVsIH1cclxuXHRcdFx0XHRcdHsgXHJcblx0XHRcdFx0XHRcdCEhY29sdW1uLmVkaXRhYmxlICYmIChcclxuXHRcdFx0XHRcdFx0XHQ8cG9wdXAuRHJvcGRvd24gXHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjZWxsLWVkaXRvclwiIFxyXG5cdFx0XHRcdFx0XHRcdFx0cG9wb3Zlcj17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZW5kZXI6IHRoaXMuX19pY29uQ2xpY2tSZW5kZXIoY29sdW1uLCBpbmRleCksXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsb3NlYWJsZTogdHJ1ZVxyXG5cdFx0XHRcdFx0XHRcdFx0fX0gPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFzXCIgZGF0YS1pY29uPVwiZWRpdFwiIGNsYXNzTmFtZT1cImljb24gc3ZnLWlubGluZS0tZmEgZmEtZWRpdCBmYS13LTE4IFwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1NzYgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNDAyLjYgODMuMmw5MC4yIDkwLjJjMy44IDMuOCAzLjggMTAgMCAxMy44TDI3NC40IDQwNS42bC05Mi44IDEwLjNjLTEyLjQgMS40LTIyLjktOS4xLTIxLjUtMjEuNWwxMC4zLTkyLjhMMzg4LjggODMuMmMzLjgtMy44IDEwLTMuOCAxMy44IDB6bTE2Mi0yMi45bC00OC44LTQ4LjhjLTE1LjItMTUuMi0zOS45LTE1LjItNTUuMiAwbC0zNS40IDM1LjRjLTMuOCAzLjgtMy44IDEwIDAgMTMuOGw5MC4yIDkwLjJjMy44IDMuOCAxMCAzLjggMTMuOCAwbDM1LjQtMzUuNGMxNS4yLTE1LjMgMTUuMi00MCAwLTU1LjJ6TTM4NCAzNDYuMlY0NDhINjRWMTI4aDIyOS44YzMuMiAwIDYuMi0xLjMgOC41LTMuNWw0MC00MGM3LjYtNy42IDIuMi0yMC41LTguNS0yMC41SDQ4QzIxLjUgNjQgMCA4NS41IDAgMTEydjM1MmMwIDI2LjUgMjEuNSA0OCA0OCA0OGgzNTJjMjYuNSAwIDQ4LTIxLjUgNDgtNDhWMzA2LjJjMC0xMC43LTEyLjktMTYtMjAuNS04LjVsLTQwIDQwYy0yLjIgMi4zLTMuNSA1LjMtMy41IDguNXpcIj48L3BhdGg+PC9zdmc+XHJcblx0XHRcdFx0XHRcdFx0PC9wb3B1cC5Ecm9wZG93bj5cclxuXHRcdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBfY2VsbCA9IHpuLmV4dGVuZCh7IHN0eWxlOiB7fSwgY2xhc3NOYW1lOiAnJyB9LCB0aGlzLnByb3BzLmNlbGwsIGNvbHVtbik7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8dGgga2V5PXtpbmRleH0gY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgndGhlYWQtY2VsbCcsIChjb2x1bW4uZml4ZWQ/J2ZpeGVkJzonJyksIF9jZWxsLmNsYXNzTmFtZSl9IHN0eWxlPXt6bnVpLnJlYWN0LnN0eWxlKF9jZWxsLnN0eWxlLCBjb2x1bW4uZml4ZWRTdHlsZXMpfT5cclxuXHRcdFx0XHR7IF9jb250ZW50IH1cclxuXHRcdFx0XHR7ICEhY29sdW1uLnNvcnQgJiYgPFRIZWFkU29ydCBjbGFzc05hbWU9XCJjZWxsLXNvcnRcIiBvblNvcnQ9eyhzb3J0KT0+dGhpcy5fX29uQ29sdW1uU29ydChzb3J0LCBjb2x1bW4pfSAvPn1cclxuXHRcdFx0PC90aD5cclxuXHRcdCk7XHJcblx0fSxcclxuXHRfX3JlbmRlclJvdzogZnVuY3Rpb24gKCl7XHJcblx0XHR2YXIgX2VsZW1lbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudCh0aGlzLnByb3BzLnJvd1JlbmRlciwge1xyXG5cdFx0XHR0aGVhZDogdGhpc1xyXG5cdFx0fSk7XHJcblx0XHRpZihfZWxlbWVudCl7XHJcblx0XHRcdHJldHVybiBfZWxlbWVudDtcclxuXHRcdH1cclxuXHRcdHZhciBfcm93ID0gem4uZXh0ZW5kKHsgY2xhc3NOYW1lOiAnJywgc3R5bGU6IHt9IH0sIHRoaXMucHJvcHMucm93KTtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDx0ciBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwidGhlYWQtcm93XCIsIF9yb3cuY2xhc3NOYW1lKX0gc3R5bGU9e19yb3cuc3R5bGV9PlxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdCh0aGlzLnByb3BzLmNvbHVtbnN8fFtdKS5tYXAodGhpcy5fX3JlbmRlckNlbGwpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHQ8L3RyPlxyXG5cdFx0KTtcclxuXHR9LFxyXG5cdHJlbmRlcjpmdW5jdGlvbigpe1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PHRoZWFkIGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci10YWJsZS10aGVhZFwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSwgdGhpcy5zdGF0ZS5jbGFzc05hbWUpfSBzdHlsZT17em51aS5yZWFjdC5zdHlsZSh0aGlzLnByb3BzLnN0eWxlLCB0aGlzLnN0YXRlLnN0eWxlKX0+XHJcblx0XHRcdFx0e3RoaXMuX19yZW5kZXJSb3coKX1cclxuXHRcdFx0PC90aGVhZD5cclxuXHRcdCk7XHJcblx0fVxyXG59KTtcclxuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcblx0ZGlzcGxheU5hbWU6J1pSVEhlYWRTb3J0JyxcclxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpe1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0c29ydDogJ2Rlc2MnLFxyXG5cdFx0fVxyXG5cdH0sXHJcblx0X19yZW5kZXJJY29uOiBmdW5jdGlvbiAoKXtcclxuXHRcdHN3aXRjaCh0aGlzLnN0YXRlLnNvcnQpe1xyXG5cdFx0XHRjYXNlIFwiZmFTb3J0XCI6XHJcblx0XHRcdFx0cmV0dXJuIDxzdmcgb25DbGljaz17KCk9PnRoaXMuX19pY29uQ2xpY2soJ3VwJyl9IGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1wcmVmaXg9XCJmYXNcIiBkYXRhLWljb249XCJzb3J0XCIgY2xhc3NOYW1lPVwiaWNvbiBzdmctaW5saW5lLS1mYSBmYS1zb3J0IGZhLXctMTAgXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk00MSAyODhoMjM4YzIxLjQgMCAzMi4xIDI1LjkgMTcgNDFMMTc3IDQ0OGMtOS40IDkuNC0yNC42IDkuNC0zMy45IDBMMjQgMzI5Yy0xNS4xLTE1LjEtNC40LTQxIDE3LTQxem0yNTUtMTA1TDE3NyA2NGMtOS40LTkuNC0yNC42LTkuNC0zMy45IDBMMjQgMTgzYy0xNS4xIDE1LjEtNC40IDQxIDE3IDQxaDIzOGMyMS40IDAgMzIuMS0yNS45IDE3LTQxelwiPjwvcGF0aD48L3N2Zz47XHJcblx0XHRcdGNhc2UgXCJkZXNjXCI6XHJcblx0XHRcdFx0cmV0dXJuIDxzdmcgb25DbGljaz17KCk9PnRoaXMuX19pY29uQ2xpY2soJ2FzYycpfSBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFzXCIgZGF0YS1pY29uPVwic29ydC1kb3duXCIgY2xhc3NOYW1lPVwiaWNvbiBzdmctaW5saW5lLS1mYSBmYS1zb3J0LWFscGhhLWRvd24gZmEtdy0xNCBcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNDQ4IDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTE3NiAzNTJoLTQ4VjQ4YTE2IDE2IDAgMCAwLTE2LTE2SDgwYTE2IDE2IDAgMCAwLTE2IDE2djMwNEgxNmMtMTQuMTkgMC0yMS4zNiAxNy4yNC0xMS4yOSAyNy4zMWw4MCA5NmExNiAxNiAwIDAgMCAyMi42MiAwbDgwLTk2QzE5Ny4zNSAzNjkuMjYgMTkwLjIyIDM1MiAxNzYgMzUyem0yNDAtNjRIMjg4YTE2IDE2IDAgMCAwLTE2IDE2djMyYTE2IDE2IDAgMCAwIDE2IDE2aDU2bC02MS4yNiA3MC40NUEzMiAzMiAwIDAgMCAyNzIgNDQ2LjM3VjQ2NGExNiAxNiAwIDAgMCAxNiAxNmgxMjhhMTYgMTYgMCAwIDAgMTYtMTZ2LTMyYTE2IDE2IDAgMCAwLTE2LTE2aC01Nmw2MS4yNi03MC40NUEzMiAzMiAwIDAgMCA0MzIgMzIxLjYzVjMwNGExNiAxNiAwIDAgMC0xNi0xNnptMzEuMDYtODUuMzhsLTU5LjI3LTE2MEExNiAxNiAwIDAgMCAzNzIuNzIgMzJoLTQxLjQ0YTE2IDE2IDAgMCAwLTE1LjA3IDEwLjYybC01OS4yNyAxNjBBMTYgMTYgMCAwIDAgMjcyIDIyNGgyNC44M2ExNiAxNiAwIDAgMCAxNS4yMy0xMS4wOGw0LjQyLTEyLjkyaDcxbDQuNDEgMTIuOTJBMTYgMTYgMCAwIDAgNDA3LjE2IDIyNEg0MzJhMTYgMTYgMCAwIDAgMTUuMDYtMjEuMzh6TTMzNS42MSAxNDRMMzUyIDk2bDE2LjM5IDQ4elwiPjwvcGF0aD48L3N2Zz47XHJcblx0XHRcdGNhc2UgXCJhc2NcIjpcclxuXHRcdFx0XHRyZXR1cm4gPHN2ZyBvbkNsaWNrPXsoKT0+dGhpcy5fX2ljb25DbGljaygnZGVzYycpfSBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFzXCIgZGF0YS1pY29uPVwic29ydC11cFwiIGNsYXNzTmFtZT1cImljb24gc3ZnLWlubGluZS0tZmEgZmEtc29ydC1hbHBoYS11cCBmYS13LTE0IFwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA0NDggNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMTYgMTYwaDQ4djMwNGExNiAxNiAwIDAgMCAxNiAxNmgzMmExNiAxNiAwIDAgMCAxNi0xNlYxNjBoNDhjMTQuMjEgMCAyMS4zOC0xNy4yNCAxMS4zMS0yNy4zMWwtODAtOTZhMTYgMTYgMCAwIDAtMjIuNjIgMGwtODAgOTZDLTUuMzUgMTQyLjc0IDEuNzggMTYwIDE2IDE2MHptNDAwIDEyOEgyODhhMTYgMTYgMCAwIDAtMTYgMTZ2MzJhMTYgMTYgMCAwIDAgMTYgMTZoNTZsLTYxLjI2IDcwLjQ1QTMyIDMyIDAgMCAwIDI3MiA0NDYuMzdWNDY0YTE2IDE2IDAgMCAwIDE2IDE2aDEyOGExNiAxNiAwIDAgMCAxNi0xNnYtMzJhMTYgMTYgMCAwIDAtMTYtMTZoLTU2bDYxLjI2LTcwLjQ1QTMyIDMyIDAgMCAwIDQzMiAzMjEuNjNWMzA0YTE2IDE2IDAgMCAwLTE2LTE2em0zMS4wNi04NS4zOGwtNTkuMjctMTYwQTE2IDE2IDAgMCAwIDM3Mi43MiAzMmgtNDEuNDRhMTYgMTYgMCAwIDAtMTUuMDcgMTAuNjJsLTU5LjI3IDE2MEExNiAxNiAwIDAgMCAyNzIgMjI0aDI0LjgzYTE2IDE2IDAgMCAwIDE1LjIzLTExLjA4bDQuNDItMTIuOTJoNzFsNC40MSAxMi45MkExNiAxNiAwIDAgMCA0MDcuMTYgMjI0SDQzMmExNiAxNiAwIDAgMCAxNS4wNi0yMS4zOHpNMzM1LjYxIDE0NEwzNTIgOTZsMTYuMzkgNDh6XCI+PC9wYXRoPjwvc3ZnPjtcclxuXHRcdH1cdFxyXG5cdH0sXHJcblx0X19pY29uQ2xpY2s6IGZ1bmN0aW9uIChzb3J0KXtcclxuXHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHRzb3J0OiBzb3J0XHJcblx0XHR9KTtcclxuXHRcdHRoaXMucHJvcHMub25Tb3J0ICYmIHRoaXMucHJvcHMub25Tb3J0KHNvcnQpO1xyXG5cdH0sXHJcblx0cmVuZGVyOmZ1bmN0aW9uKCl7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLXRhYmxlLXRoZWFkLXNvcnQnLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfT5cclxuXHRcdFx0XHR7dGhpcy5fX3JlbmRlckljb24oKX1cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpO1xyXG5cdH1cclxufSk7XHJcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcclxudmFyIFJlYWN0RE9NID0gem51aS5SZWFjdERPTSB8fCByZXF1aXJlKCdyZWFjdC1kb20nKTtcclxudmFyIFRDZWxsID0gcmVxdWlyZSgnLi9UQ2VsbCcpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcblx0ZGlzcGxheU5hbWU6J1pSVFJvdycsXHJcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpe1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0c3R5bGU6IHt9LFxyXG5cdFx0XHRjbGFzc05hbWU6ICcnXHJcblx0XHR9XHJcblx0fSxcclxuXHRfX2dldFRhcmdldFREOiBmdW5jdGlvbiAodGFyZ2V0KSB7XHJcblx0XHRpZih0YXJnZXQgJiYgdGFyZ2V0LnRhZ05hbWUhPT0nVEQnKXtcclxuXHRcdFx0cmV0dXJuIHRoaXMuX19nZXRUYXJnZXRURCh0YXJnZXQucGFyZW50Tm9kZSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gdGFyZ2V0O1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0X19vblJvd0NsaWNrOiBmdW5jdGlvbiAoZXZlbnQpe1xyXG5cdFx0dmFyIF90aGlzID0gdGhpcztcclxuXHRcdHZhciBfdGQgPSB0aGlzLl9fZ2V0VGFyZ2V0VEQoZXZlbnQudGFyZ2V0KTtcclxuXHRcdGV2ZW50LmRhdGEgPSB7XHJcblx0XHRcdGZpbmRUUkRPTTogZnVuY3Rpb24gKCl7XHJcblx0XHRcdFx0cmV0dXJuIFJlYWN0RE9NLmZpbmRET01Ob2RlKF90aGlzKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0dGQ6IF90ZCxcclxuXHRcdFx0dHJvdzogdGhpc1xyXG5cdFx0fTtcclxuXHRcdHRoaXMucHJvcHMub25DbGljayAmJiB0aGlzLnByb3BzLm9uQ2xpY2soZXZlbnQpO1xyXG5cdFx0dGhpcy5wcm9wcy5vblJvd0NsaWNrICYmIHRoaXMucHJvcHMub25Sb3dDbGljayhldmVudCk7XHJcblx0fSxcclxuXHRfX3ZhbGlkYXRlQ29sdW1uOiBmdW5jdGlvbiAoY29sdW1uLCBpbmRleCl7XHJcblx0XHRpZihjb2x1bW4udmFsaWRhdGUgPT09IGZhbHNlKSB7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHRcdGlmKHpuLmlzKGNvbHVtbi52YWxpZGF0ZSwgJ2Z1bmN0aW9uJykpIHtcclxuXHRcdFx0dmFyIF9yZXR1cm4gPSBjb2x1bW4udmFsaWRhdGUuYXBwbHkobnVsbCwgW2NvbHVtbiwgaW5kZXhdKTtcclxuXHRcdFx0aWYoX3JldHVybiA9PT0gZmFsc2UpIHtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2VcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0sXHJcblx0X19jZWxsUmVuZGVyOiBmdW5jdGlvbiAoY29sdW1uLCBpbmRleCl7XHJcblx0XHRpZih0aGlzLl9fdmFsaWRhdGVDb2x1bW4oY29sdW1uLCBpbmRleCkgPT09IGZhbHNlKXtcclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHR9XHJcblx0XHRpZighem4uaXMoY29sdW1uLCAnb2JqZWN0JykpIHsgcmV0dXJuIG51bGw7fVxyXG5cdFx0dmFyIF9wcm9wcyA9IHpuLmV4dGVuZCh7XHJcblx0XHRcdGNvbHVtbjogY29sdW1uLFxyXG5cdFx0XHR0cm93OiB0aGlzLFxyXG5cdFx0XHRyb3dJbmRleDogdGhpcy5wcm9wcy5yb3dJbmRleCxcclxuXHRcdFx0Y2VsbEluZGV4OiBpbmRleCxcclxuXHRcdFx0Y29udGV4dDogdGhpcy5wcm9wcy5jb250ZXh0LFxyXG5cdFx0XHRkYXRhOiB0aGlzLnByb3BzLmRhdGEsXHJcblx0XHRcdHRib2R5OiB0aGlzLnByb3BzLnRib2R5XHJcblx0XHR9LCB0aGlzLnByb3BzLmNlbGwsIGNvbHVtbik7XHJcblx0XHR2YXIgX2VsZW1lbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudCh0aGlzLnByb3BzLmNlbGxSZW5kZXIsIF9wcm9wcywgdGhpcy5wcm9wcy5jb250ZXh0KTtcclxuXHJcblx0XHRpZihfZWxlbWVudCl7XHJcblx0XHRcdHJldHVybiBfZWxlbWVudDtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gPFRDZWxsIGtleT17aW5kZXh9IHsuLi5fcHJvcHN9IGZpeGVkU3R5bGU9e3RoaXMuX19maXhlZFdpZHRoKGluZGV4KX0gb25DZWxsQ2xpY2s9e3RoaXMucHJvcHMub25DZWxsQ2xpY2t9IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3Ryb3ctY2VsbCcsIF9wcm9wcy5jbGFzc05hbWUpfSAvPjtcclxuXHR9LFxyXG5cdF9fZml4ZWRXaWR0aDogZnVuY3Rpb24gKGluZGV4KXtcclxuXHRcdHZhciBfY29sdW1ucyA9IHRoaXMucHJvcHMuY29sdW1uc3x8W10sIF93aWR0aCA9IDA7XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgaW5kZXg7IGkrKyl7XHJcblx0XHRcdGlmKF9jb2x1bW5zW2ldLmZpeGVkKSB7XHJcblx0XHRcdFx0X3dpZHRoICs9IF9jb2x1bW5zW2ldLndpZHRoIHx8IDA7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRsZWZ0OiBfd2lkdGhcclxuXHRcdH07XHJcblx0fSxcclxuXHRyZW5kZXI6ZnVuY3Rpb24oKXtcclxuXHRcdHRoaXMucHJvcHMudGJvZHkuX19pbml0aWFsRGF0YUl0ZW0odGhpcy5wcm9wcy5kYXRhKTtcclxuXHRcdHRoaXMucHJvcHMub25EYXRhVmFsaWRhdGUgJiYgdGhpcy5wcm9wcy5vbkRhdGFWYWxpZGF0ZSh0aGlzLnByb3BzLmRhdGEsIHRoaXMpO1xyXG5cdFx0dmFyIF9jb2x1bW5MZW5ndGggPSAodGhpcy5wcm9wcy5jb2x1bW5zfHxbXSkubGVuZ3RoO1xyXG5cdFx0dmFyIF9jbGFzc05hbWUgPSB0aGlzLnByb3BzLmNsYXNzTmFtZSwgX3N0eWxlID0gdGhpcy5wcm9wcy5zdHlsZTtcclxuXHRcdGlmKHR5cGVvZiBfY2xhc3NOYW1lID09ICdmdW5jdGlvbicpe1xyXG5cdFx0XHRfY2xhc3NOYW1lID0gX2NsYXNzTmFtZSh0aGlzLnByb3BzLmRhdGEsIHRoaXMpO1xyXG5cdFx0fVxyXG5cdFx0aWYodHlwZW9mIF9zdHlsZSA9PSAnZnVuY3Rpb24nKXtcclxuXHRcdFx0X3N0eWxlID0gX3N0eWxlKHRoaXMucHJvcHMuZGF0YSwgdGhpcyk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8PlxyXG5cdFx0XHRcdDx0ciBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd6ci10YWJsZS10cm93JywgX2NsYXNzTmFtZSwgdGhpcy5zdGF0ZS5jbGFzc05hbWUpfSBcclxuXHRcdFx0XHRcdHN0eWxlPXt6bnVpLnJlYWN0LnN0eWxlKF9zdHlsZSwgdGhpcy5zdGF0ZS5zdHlsZSl9XHJcblx0XHRcdFx0XHRkYXRhLWFjdGl2ZT17dGhpcy5wcm9wcy5hY3RpdmV9IFxyXG5cdFx0XHRcdFx0ZGF0YS1jaGVja2VkPXt0aGlzLnByb3BzLmNoZWNrZWR9IFxyXG5cdFx0XHRcdFx0b25DbGljaz17dGhpcy5fX29uUm93Q2xpY2t9PlxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHQodGhpcy5wcm9wcy5jb2x1bW5zfHxbXSkubWFwKHRoaXMuX19jZWxsUmVuZGVyKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGhpcy5zdGF0ZS5jaGlsZCAmJiA8dHIgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItdGFibGUtdHJvdy1jaGlsZCcpfT48dGQgY29sU3Bhbj17X2NvbHVtbkxlbmd0aH0+e3RoaXMuc3RhdGUuY2hpbGR9PC90ZD48L3RyPlxyXG5cdFx0XHRcdH1cclxuXHRcdFx0PC8+XHJcblx0XHQpO1xyXG5cdH1cclxufSk7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgQ29sZ3JvdXA6IHJlcXVpcmUoJy4vQ29sZ3JvdXAnKSxcclxuICAgIFRGaWx0ZXI6IHJlcXVpcmUoJy4vVEZpbHRlcicpLFxyXG4gICAgVEJvZHk6IHJlcXVpcmUoJy4vVEJvZHknKSxcclxuICAgIFRCb2R5RW1wdHk6IHJlcXVpcmUoJy4vVEJvZHlFbXB0eScpLFxyXG4gICAgVENlbGw6IHJlcXVpcmUoJy4vVENlbGwnKSxcclxuICAgIFRGb290OiByZXF1aXJlKCcuL1RGb290JyksXHJcbiAgICBUSGVhZDogcmVxdWlyZSgnLi9USGVhZCcpLFxyXG4gICAgVFJvdzogcmVxdWlyZSgnLi9UUm93JylcclxufTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcIlJlYWN0XCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiUmVhY3RET01cIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJmaWx0ZXJcIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJpbnB1dFwiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcImpzb25cIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJsb2FkZXJcIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJwYWdlclwiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcInBvcHVwXCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wic2VsZWN0b3JcIl07IH0oKSk7Il0sInNvdXJjZVJvb3QiOiIifQ==