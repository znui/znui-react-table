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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
  Checkbox: __webpack_require__(/*! ./Checkbox */ "./cell/Checkbox.js") //Buttons: require('./Buttons'),
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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vTG9hZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9Qb3B1cFRhYmxlLmpzIiwid2VicGFjazovLy8uL1RhYmxlLmpzIiwid2VicGFjazovLy8uL1RhYmxlRWRpdG9yLmpzIiwid2VicGFjazovLy8uL1RhYmxlUGFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY2VsbC9DaGVja2JveC5qcyIsIndlYnBhY2s6Ly8vLi9jZWxsL2luZGV4LmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3RhYmxlL0NvbGdyb3VwLmpzIiwid2VicGFjazovLy8uL3RhYmxlL1RCb2R5LmpzIiwid2VicGFjazovLy8uL3RhYmxlL1RCb2R5RW1wdHkuanMiLCJ3ZWJwYWNrOi8vLy4vdGFibGUvVENlbGwuanMiLCJ3ZWJwYWNrOi8vLy4vdGFibGUvVEZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi90YWJsZS9URm9vdC5qcyIsIndlYnBhY2s6Ly8vLi90YWJsZS9USGVhZC5qcyIsIndlYnBhY2s6Ly8vLi90YWJsZS9USGVhZFNvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vdGFibGUvVFJvdy5qcyIsIndlYnBhY2s6Ly8vLi90YWJsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlsdGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW5wdXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqc29uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9hZGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGFnZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwb3B1cFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNlbGVjdG9yXCIiXSwibmFtZXMiOlsiUmVhY3QiLCJ6bnVpIiwicmVxdWlyZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJjcmVhdGVDbGFzcyIsInJlbmRlciIsInByb3BzIiwic3R5bGUiLCJjbGFzc05hbWUiLCJUYWJsZVBhZ2VyIiwic2VsZWN0b3IiLCJkaXNwbGF5TmFtZSIsImdldERlZmF1bHRQcm9wcyIsInRleHRLZXkiLCJ2YWx1ZUtleSIsImdldEluaXRpYWxTdGF0ZSIsInRleHQiLCJ2YWx1ZSIsImdldFRleHQiLCJzdGF0ZSIsInNldFRleHQiLCJzZXRTdGF0ZSIsImdldFZhbHVlIiwic2V0VmFsdWUiLCJfX29uUm93Q2xpY2siLCJldmVudCIsImRyb3Bkb3duRXZlbnQiLCJfZGF0YSIsImRhdGEiLCJ0cm93IiwicG9wdXBTZWxlY3QiLCJzZXREYXRhIiwiZHJvcGRvd24iLCJjbG9zZVBvcG92ZXIiLCJvbkNoYW5nZSIsIl9fcG9wdXBSZW5kZXIiLCJmaWx0ZXIiLCJvblJvd0NsaWNrIiwicmVhY3QiLCJjbGFzc25hbWUiLCJ0YWJsZSIsIkxvYWRpbmciLCJib3JkZXIiLCJyZXNldENoZWNrZWRzIiwiZml4ZWRMYXlvdXQiLCJsb2FkaW5nRW5hYmxlZCIsImRhdGFJbmRleEVuYWJsZWQiLCJyb3dLZXkiLCJjb2x1bW5zIiwiY2hlY2tlZHMiLCJjb21wb25lbnREaWRNb3VudCIsIm9uQ29tcG9uZW50RGlkTW91bnQiLCJfX3NvcnRGdW5jdGlvbiIsIm5leHQiLCJwcmV2Iiwia2V5IiwiX3NvcnQiLCJzb3J0RnVuY3Rpb24iLCJfX29uU29ydCIsInNvcnRzIiwiX3JldHVybiIsIm9uU29ydENoYW5nZSIsInpuIiwiaXNaTk9iamVjdCIsIl9hcmd2IiwicmVmcmVzaCIsInNvcnQiLCJmb3JjZVVwZGF0ZSIsIl9fb25GaWx0ZXIiLCJmaWx0ZXJzIiwib25GaWx0ZXJDaGFuZ2UiLCJfX29uVEJvZHlFYWNoUm93RGF0YSIsImluZGV4IiwidGJvZHkiLCJfdmFsdWVLZXkiLCJjaGVja2JveCIsIl92YWx1ZSIsImluZGV4T2YiLCJwdXNoIiwib25FYWNoUm93RGF0YSIsIl9fdGJvZHlEYXRhUmVuZGVyIiwibGVuZ3RoIiwiY29udGV4dCIsInJvdyIsImZpeGVkQ29sdW1ucyIsIl9fdGJvZHlMb2FkaW5nUmVuZGVyIiwiX19vblRIZWFkQ29sdW1uQ2hhbmdlIiwiX190Ym9keURhdGFMb2FkZWQiLCJvbkRhdGFMb2FkZWQiLCJpcyIsInJlc3VsdCIsIl9fb25EYXRhQ3JlYXRlZCIsImxpZnljeWNsZSIsIm9uRGF0YUNyZWF0ZWQiLCJjYWxsYmFjayIsInJlc2V0IiwicmVzZXRDaGVja2VkIiwiYWZ0ZXIiLCJzZW5kZXIiLCJyZXNwb25zZSIsInhociIsInJlZnJlc2hIZWFkZXJzIiwiX19maXhlZFN0eWxlcyIsIl9jb2x1bW5zIiwiX3dpZHRoIiwiaSIsImZpeGVkIiwid2lkdGgiLCJsZWZ0IiwiX19yZW5kZXJUQm9keSIsIl9yZXN1bHQiLCJvbkRhdGFJbml0aWFsIiwicmVzcG9uc2VIYW5kbGVyIiwiX19vbkZpeGVkTGF5b3V0Qm9keVNjcm9sbCIsImUiLCJfbGF5b3V0SGVhZGVyIiwic2Nyb2xsTGVmdCIsInRhcmdldCIsIl9fcmVuZGVyIiwibWFwIiwiaXRlbSIsImZpeGVkU3R5bGVzIiwiX3N0eWxlIiwicmVmIiwiY2VsbFBhZGRpbmciLCJjZWxsU3BhY2luZyIsImF0dHJzIiwiY2FwdGlvbiIsImNvbGdyb3VwIiwia2V5TWFwcGluZyIsInRoZWFkIiwidGZpbHRlciIsInNob3dGb290IiwidGZvb3QiLCJjaGlsZHJlblJlbmRlciIsImNoaWxkcmVuIiwiX19yb3dIZWFkQ2hlY2tib3hDaGVja2VkIiwiX2NoZWNrZWRzIiwiX19jaGVja2VkRGlzYWJsZWRfXyIsIl9fb25Sb3dIZWFkQ2hlY2tib3hDaGFuZ2UiLCJzdG9wUHJvcGFnYXRpb24iLCJjaGVja2VkIiwic3BsaWNlIiwib25DaGVja2JveENoYW5nZSIsIl9faW5pdENoZWNrYm94IiwiX2NoZWNrYm94IiwiaGVhZCIsImFyZ3YiLCJfdGFibGUiLCJqdXN0aWZ5Q29udGVudCIsInV1aWQiLCJib2R5Iiwib25Cb2R5Q29sdW1uQ2hlY2tib3hSZW5kZXIiLCJ0eXBlIiwiZXh0ZW5kIiwidW5zaGlmdCIsIl9faW5pdEluZGV4Q29sdW1uIiwibGFiZWwiLCJuYW1lIiwidGV4dEFsaWduIiwicm93SW5kZXgiLCJiaW5kIiwiX19jb2x1bW5zTG9hZGVkIiwiX3RlbXAiLCJfY29sdW1uSXRlcmF0b3IiLCJjb2x1bW5JdGVyYXRvciIsImNvbHVtbiIsImRlZXBBc3NpZ24iLCJvbkNvbHVtbnNMb2FkZWQiLCJfX29uQ29sdW1uRGF0YUNyZWF0ZWQiLCJsaWZlY3ljbGUiLCJvbkNvbHVtbnNDcmVhdGVkIiwiZ2V0RGF0YSIsInJlbW92ZVJvd0RhdGEiLCJ1cGRhdGVSb3dEYXRhIiwiX2luZGV4Iiwib25Db2x1bW5Mb2FkaW5nIiwib25Db2x1bW5Mb2FkRXJyb3IiLCJUYWJsZSIsImlucHV0IiwiX19jZWxsQ2hhbmdlIiwidGNlbGwiLCJfX2NvbHVtbkJvZHlSZW5kZXIiLCJfX2NvbHVtbkl0ZXJhdG9yIiwib25EYXRhQ2hhbmdlIiwiYWRkUm93IiwiY29uY2F0IiwicGFnZXIiLCJjb3VudCIsImN1cnJlbnQiLCJ0b3RhbCIsInBhZ2VJbmRleCIsInBhZ2VTaXplIiwic2V0UGFnZUluZGV4IiwiX19yZXNldF9fIiwiX19vbkRhdGFJbml0aWFsIiwiX19oYW5kbGVQYWdlQ2hhbmdlZCIsIm5ld1BhZ2UiLCJvblBhZ2VDaGFuZ2VkIiwiX19oYW5kbGVQYWdlU2l6ZUNoYW5nZSIsIl9fcmVuZGVyUGFnZXIiLCJfY29sdW1uU2l6ZSIsIl9zdGF0ZSIsIl9lbGVtZW50IiwiX3BhZ2VyUHJvcHMiLCJvblBhZ2VTaXplQ2hhbmdlIiwiX0NvbXBvbmVudCIsIlBhZ2VyIiwicGF0aCIsIndpbmRvdyIsImNvbXBvbmVudCIsImNyZWF0ZVJlYWN0RWxlbWVudCIsInBhZ2VyUmVuZGVyIiwiX21ldGhvZCIsIm1ldGhvZCIsIl9wYXJhbXMiLCJfa2V5TWFwcyIsImtleU1hcHMiLCJwYXJhbXMiLCJfX29uRGF0YUxvYWRlZCIsInp4bnoiLCJjb2RlIiwiY29uc29sZSIsImVycm9yIiwiZGV0YWlsIiwiX3BhZ2VyQ291bnQiLCJNYXRoIiwiY2VpbCIsIl9fb25GaWx0ZXJDaGFuZ2UiLCJDaGVja2JveCIsIl9fb25DaGVja2JveENoYW5nZSIsIl9fb25IZWFkQ2hhbmdlIiwiX19vbkJvZHlDaGFuZ2UiLCJsb2ciLCJjZWxsIiwiUG9wdXBUYWJsZSIsIlRhYmxlRWRpdG9yIiwiX192YWxpZGF0ZUNvbHVtbiIsInZhbGlkYXRlIiwiYXBwbHkiLCJfa2V5TWFwcGluZyIsIl93aWR0aEtleSIsIl93aWR0aFZhbHVlIiwiVFJvdyIsImxvYWRlciIsIl9wYWdlU2l6ZSIsIl9jb2x1bW5LZXlNYXAiLCJfZGVmYXVsdCIsInVuZGVmaW5lZCIsImFjdGl2ZSIsImNvbHVtbktleU1hcCIsImxvYWRpbmciLCJfX2luaXRpYWxEYXRhSXRlbSIsImZvcm1hdCIsImRhdGFUeXBlIiwiZXZhbCIsImVyciIsInN0cmluZ2lmeVByaWNlIiwiX19nZXREYXRhIiwiX3BhZ2VJbmRleCIsInNsaWNlIiwibWluIiwiX19yZW5kZXJMb2FkaW5nIiwibG9hZGluZ1JlbmRlciIsIl9sb2FkaW5nIiwiX19yZW5kZXJFbXB0eSIsImVtcHR5UmVuZGVyIiwiX2VtcHR5IiwiZW1wdHkiLCJfX29uQ2VsbENsaWNrIiwib25DZWxsQ2xpY2siLCJfX3JlbmRlclJvdyIsImVhY2hSb3dEYXRhIiwicm93UmVuZGVyIiwiX3Jvd0tleSIsIl9rZXkiLCJjZWxsUmVuZGVyIiwiX19wYWdlQ2hhbmdlIiwiX19wYWdlc1JlbmRlciIsIl9wYWdlQ291bnQiLCJfcGFnZXMiLCJfX3JlbmRlckRhdGEiLCJSZWFjdERPTSIsImRpc2FibGVkIiwiX19yZW5kZXJDZWxsQ29udGVudCIsIl9yZW5kZXIiLCJjZWxsSW5kZXgiLCJfX2NlbGxDbGljayIsIl90aGlzIiwiZmluZFRERE9NIiwiZmluZERPTU5vZGUiLCJvbkNsaWNrIiwiX2NvbHVtbiIsImJvZHlDbGFzc05hbWUiLCJib2R5U3R5bGUiLCJmaWx0ZXJGaWVsZCIsIm9wdCIsImVtcHR5VmFsdWVFbmFibGVkIiwib25GaWx0ZXIiLCJfX29uRmlsdGVyQ2FuY2VsIiwiX19yZW5kZXJDZWxsIiwiX2NvbnRlbnQiLCJfZmlsdGVyIiwicHJvdG90eXBlIiwiY2FsbCIsIl9jZWxsIiwiX3JvdyIsIl9fcmVuZGVyQ2hpbGRyZW4iLCJmb290IiwiVEhlYWRTb3J0IiwicG9wdXAiLCJ6cmpzb24iLCJfX29uQ29sdW1uU29ydCIsIm9uU29ydCIsIl9fb25Db2x1bW5FZGl0b3JDaGFuZ2UiLCJjaGlsZCIsInJvb3QiLCJfcm9vdCIsIm9uQ29sdW1uQ2hhbmdlIiwiX19pY29uQ2xpY2tSZW5kZXIiLCJwYWRkaW5nIiwibWF4SGVpZ2h0Iiwib3ZlcmZsb3ciLCJfX3NvcnRSZW5kZXIiLCJfbWFwcGluZyIsIl9sYWJlbEtleSIsIl9sYWJlbCIsInJlcXVpcmVkIiwiZWRpdGFibGUiLCJjbG9zZWFibGUiLCJfX3JlbmRlckljb24iLCJfX2ljb25DbGljayIsIlRDZWxsIiwiX19nZXRUYXJnZXRURCIsInRhZ05hbWUiLCJwYXJlbnROb2RlIiwiX3RkIiwiZmluZFRSRE9NIiwidGQiLCJfX2NlbGxSZW5kZXIiLCJfcHJvcHMiLCJfX2ZpeGVkV2lkdGgiLCJvbkRhdGFWYWxpZGF0ZSIsIl9jb2x1bW5MZW5ndGgiLCJfY2xhc3NOYW1lIiwiQ29sZ3JvdXAiLCJURmlsdGVyIiwiVEJvZHkiLCJUQm9keUVtcHR5IiwiVEZvb3QiLCJUSGVhZCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFD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QWdDLEVBQUUsSTs7Ozs7Ozs7Ozs7QUNBL0MsYUFBYSwrQkFBK0IsRUFBRSxJOzs7Ozs7Ozs7OztBQ0E5QyxhQUFhLGlDQUFpQyxFQUFFLEk7Ozs7Ozs7Ozs7O0FDQWhELGFBQWEsZ0NBQWdDLEVBQUUsSTs7Ozs7Ozs7Ozs7QUNBL0MsYUFBYSxnQ0FBZ0MsRUFBRSxJOzs7Ozs7Ozs7OztBQ0EvQyxhQUFhLG1DQUFtQyxFQUFFLEkiLCJmaWxlIjoiLi9kaXN0L2RldmVsb3BtZW50L2luZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9IGNsYXNzTmFtZT17J3pyLXRhYmxlLWxvYWRpbmcgJyArICh0aGlzLnByb3BzLmNsYXNzTmFtZSB8fCAnJyl9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxkcy1yaW5nXCI+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pOyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBUYWJsZVBhZ2VyID0gcmVxdWlyZSgnLi9UYWJsZVBhZ2VyJyk7XG52YXIgc2VsZWN0b3IgPSByZXF1aXJlKCd6bnVpLXJlYWN0LXNlbGVjdG9yJyk7XG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6ICdaUlBvcHVwVGFibGUnLFxuXHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHR0ZXh0S2V5OiAnenhuel9MYWJlbCcsXG5cdFx0XHR2YWx1ZUtleTogJ3p4bnpfVVVJRCdcblx0XHR9O1xuXHR9LFxuICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dGV4dDogdGhpcy5wcm9wcy50ZXh0LFxuICAgICAgICAgICAgdmFsdWU6IHRoaXMucHJvcHMudmFsdWVcblx0XHR9O1xuXHR9LFxuICAgIGdldFRleHQ6IGZ1bmN0aW9uICgpe1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS50ZXh0O1xuICAgIH0sXG4gICAgc2V0VGV4dDogZnVuY3Rpb24gKHRleHQpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHRleHQ6IHRleHRcbiAgICAgICAgfSk7XG4gICAgfSxcblx0Z2V0VmFsdWU6IGZ1bmN0aW9uICgpe1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS52YWx1ZTtcbiAgICB9LFxuICAgIHNldFZhbHVlOiBmdW5jdGlvbiAodmFsdWUpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIF9fb25Sb3dDbGljazogZnVuY3Rpb24gKGV2ZW50LCBkcm9wZG93bkV2ZW50KXtcbiAgICAgICAgdmFyIF9kYXRhID0gZXZlbnQuZGF0YS50cm93LnByb3BzLmRhdGE7XG4gICAgICAgIGV2ZW50LmRhdGEgPSBfZGF0YTtcbiAgICAgICAgZXZlbnQudmFsdWUgPSBfZGF0YVt0aGlzLnByb3BzLnZhbHVlS2V5XTtcblx0XHRldmVudC50ZXh0ID0gX2RhdGFbdGhpcy5wcm9wcy50ZXh0S2V5XTtcbiAgICAgICAgZHJvcGRvd25FdmVudC5wb3B1cFNlbGVjdC5zZXREYXRhKGV2ZW50LnZhbHVlLCBldmVudC50ZXh0KTtcbiAgICAgICAgZHJvcGRvd25FdmVudC5kcm9wZG93bi5jbG9zZVBvcG92ZXIoKTtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZShldmVudC52YWx1ZSk7XG4gICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkNoYW5nZShldmVudCwgZHJvcGRvd25FdmVudCk7XG4gICAgfSxcblx0X19wb3B1cFJlbmRlcjogZnVuY3Rpb24gKGRyb3Bkb3duRXZlbnQpe1xuXHRcdHJldHVybiA8VGFibGVQYWdlclxuICAgICAgICAgICAgenhuej17dHJ1ZX1cbiAgICAgICAgICAgIGNvbGdyb3VwPXt7fX1cbiAgICAgICAgICAgIGNlbGxQYWRkaW5nPXs1fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwienItdGFibGUtY2xhc3Mtbm9ybWFsXCJcbiAgICAgICAgICAgIGZpeGVkPXt0cnVlfVxuICAgICAgICAgICAgdGhlYWQ9e3tcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IHRydWVcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB0ZmlsdGVyPXt7fX1cbiAgICAgICAgICAgIHRib2R5PXt7XG4gICAgICAgICAgICAgICAgb25Sb3dDbGljazogKGV2ZW50KT0+dGhpcy5fX29uUm93Q2xpY2soZXZlbnQsIGRyb3Bkb3duRXZlbnQpXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgcGFnZUluZGV4PXsxfVxuICAgICAgICAgICAgcGFnZVNpemU9ezV9IHsuLi50aGlzLnByb3BzfSAvPjtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8c2VsZWN0b3IuUG9wdXBTZWxlY3QgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItdGFibGUtcG9wdXAtdGFibGUnLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfSBwb3B1cFJlbmRlcj17dGhpcy5fX3BvcHVwUmVuZGVyfSAvPlxuXHRcdCk7XG5cdH1cbn0pOyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciB0YWJsZSA9IHJlcXVpcmUoJy4vdGFibGUvaW5kZXgnKTtcbnZhciBzZWxlY3RvciA9IHJlcXVpcmUoJ3pudWktcmVhY3Qtc2VsZWN0b3InKTtcbnZhciBMb2FkaW5nID0gcmVxdWlyZSgnLi9Mb2FkaW5nJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJUYWJsZScsXG5cdGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGJvcmRlcjogdHJ1ZSxcblx0XHRcdHJlc2V0Q2hlY2tlZHM6IGZhbHNlLFxuXHRcdFx0Zml4ZWRMYXlvdXQ6IGZhbHNlLFxuXHRcdFx0bG9hZGluZ0VuYWJsZWQ6IHRydWUsXG5cdFx0XHRkYXRhSW5kZXhFbmFibGVkOiBmYWxzZSxcblx0XHRcdHZhbHVlS2V5OiAnenhuel9VVUlEJyxcblx0XHRcdHJvd0tleTogJ3p4bnpfVVVJRCdcblx0XHR9O1xuXHR9LFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRkYXRhOiBbXSwgXG5cdFx0XHRjb2x1bW5zOiBbXSxcblx0XHRcdGNoZWNrZWRzOiB0aGlzLnByb3BzLmNoZWNrZWRzIHx8IFtdXG5cdFx0fTtcblx0fSxcblx0Y29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCl7XG5cdFx0dGhpcy5wcm9wcy5vbkNvbXBvbmVudERpZE1vdW50ICYmIHRoaXMucHJvcHMub25Db21wb25lbnREaWRNb3VudCh0aGlzKTtcblx0fSxcblx0X19zb3J0RnVuY3Rpb246IGZ1bmN0aW9uIChuZXh0LCBwcmV2LCBrZXksIF9zb3J0KXtcblx0XHRpZih0aGlzLnByb3BzLnNvcnRGdW5jdGlvbikge1xuXHRcdFx0cmV0dXJuIHRoaXMucHJvcHMuc29ydEZ1bmN0aW9uKG5leHQsIHByZXYsIGtleSwgX3NvcnQpO1xuXHRcdH1cblx0XHRpZihfc29ydD09J2Rlc2MnKXtcblx0XHRcdGlmKG5leHRba2V5XSA+IHByZXZba2V5XSl7XG5cdFx0XHRcdHJldHVybiAxO1xuXHRcdFx0fWVsc2UgaWYobmV4dFtrZXldID09IHByZXZba2V5XSl7XG5cdFx0XHRcdHJldHVybiAwO1xuXHRcdFx0fWVsc2UgaWYobmV4dFtrZXldIDwgcHJldltrZXldKXtcblx0XHRcdFx0cmV0dXJuIC0xO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihfc29ydD09J2FzYycpe1xuXHRcdFx0aWYobmV4dFtrZXldIDwgcHJldltrZXldKXtcblx0XHRcdFx0cmV0dXJuIDE7XG5cdFx0XHR9ZWxzZSBpZihuZXh0W2tleV0gPT0gcHJldltrZXldKXtcblx0XHRcdFx0cmV0dXJuIDA7XG5cdFx0XHR9ZWxzZSBpZihuZXh0W2tleV0gPiBwcmV2W2tleV0pe1xuXHRcdFx0XHRyZXR1cm4gLTE7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHRfX29uU29ydDogZnVuY3Rpb24gKHNvcnRzKXtcblx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMub25Tb3J0Q2hhbmdlICYmIHRoaXMucHJvcHMub25Tb3J0Q2hhbmdlKHNvcnRzLCB0aGlzLnN0YXRlLmRhdGEsIHRoaXMpO1xuXHRcdGlmKF9yZXR1cm4gIT09IGZhbHNlKXtcblx0XHRcdGlmKHRoaXMuZGF0YSAmJiB6bi5pc1pOT2JqZWN0KHRoaXMuZGF0YSkpIHtcblx0XHRcdFx0aWYoIXRoaXMuZGF0YS5fYXJndi5kYXRhKSB7XG5cdFx0XHRcdFx0dGhpcy5kYXRhLl9hcmd2LmRhdGEgPSB7fTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmRhdGEuX2FyZ3YuZGF0YS5zb3J0cyA9IHNvcnRzO1xuXHRcdFx0XHR0aGlzLmRhdGEucmVmcmVzaCgpO1xuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdHZhciBfc29ydCA9IG51bGw7XG5cdFx0XHRcdGZvcih2YXIga2V5IGluIHNvcnRzKXtcblx0XHRcdFx0XHRfc29ydCA9IHNvcnRzW2tleV1cblx0XHRcdFx0XHR0aGlzLnN0YXRlLmRhdGEgPSB0aGlzLnN0YXRlLmRhdGEuc29ydCgobmV4dCwgcHJldikgPT4gdGhpcy5fX3NvcnRGdW5jdGlvbihuZXh0LCBwcmV2LCBrZXksIF9zb3J0KSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLmZvcmNlVXBkYXRlKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHRfX29uRmlsdGVyOiBmdW5jdGlvbiAoZmlsdGVycyl7XG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLm9uRmlsdGVyQ2hhbmdlICYmIHRoaXMucHJvcHMub25GaWx0ZXJDaGFuZ2UoZmlsdGVycywgdGhpcy5zdGF0ZS5kYXRhLCB0aGlzKTtcblx0XHRpZihfcmV0dXJuICE9PSBmYWxzZSl7XG5cdFx0XHRpZih0aGlzLmRhdGEgJiYgem4uaXNaTk9iamVjdCh0aGlzLmRhdGEpKSB7XG5cdFx0XHRcdGlmKCF0aGlzLmRhdGEuX2FyZ3YuZGF0YSkge1xuXHRcdFx0XHRcdHRoaXMuZGF0YS5fYXJndi5kYXRhID0ge307XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5kYXRhLl9hcmd2LmRhdGEuZmlsdGVycyA9IGZpbHRlcnM7XG5cdFx0XHRcdHRoaXMuZGF0YS5yZWZyZXNoKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHRfX29uVEJvZHlFYWNoUm93RGF0YTogZnVuY3Rpb24gKGRhdGEsIGluZGV4LCB0Ym9keSl7XG5cdFx0dmFyIF92YWx1ZUtleSA9IHRoaXMucHJvcHMudmFsdWVLZXkgfHwgJ3p4bnpfVVVJRCc7XG5cdFx0aWYodGhpcy5wcm9wcy5jaGVja2JveCAmJiB0aGlzLnByb3BzLnZhbHVlICYmIF92YWx1ZUtleSkge1xuXHRcdFx0dmFyIF92YWx1ZSA9IGRhdGFbX3ZhbHVlS2V5XTtcblx0XHRcdGlmKHRoaXMucHJvcHMudmFsdWUuaW5kZXhPZihfdmFsdWUpIT0tMSl7XG5cdFx0XHRcdHRoaXMuc3RhdGUuY2hlY2tlZHMucHVzaChfdmFsdWUpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHR0aGlzLnByb3BzLm9uRWFjaFJvd0RhdGEgJiYgdGhpcy5wcm9wcy5vbkVhY2hSb3dEYXRhKGRhdGEsIGluZGV4LCB0Ym9keSwgdGhpcyk7XG5cdH0sXG5cdF9fdGJvZHlEYXRhUmVuZGVyOiBmdW5jdGlvbiAoY29sdW1ucyl7XG5cdFx0aWYoIXRoaXMuc3RhdGUuZGF0YS5sZW5ndGgpe1xuXHRcdFx0cmV0dXJuIDx0YWJsZS5UQm9keUVtcHR5IGNvbnRleHQ9e3RoaXMucHJvcHMuY29udGV4dH0gey4uLnRoaXMucHJvcHMudGJvZHl9IGNvbHVtbnM9e2NvbHVtbnN9IGRhdGE9e3RoaXMuc3RhdGUuZGF0YX0gdGFibGU9e3RoaXN9IC8+O1xuXHRcdH1cblx0XHRyZXR1cm4gPHRhYmxlLlRCb2R5IHJvd0tleT17dGhpcy5wcm9wcy5yb3dLZXl9IHJvdz17dGhpcy5wcm9wcy5yb3d9IGNvbnRleHQ9e3RoaXMucHJvcHMuY29udGV4dH0gZWFjaFJvd0RhdGE9e3RoaXMuX19vblRCb2R5RWFjaFJvd0RhdGF9IHsuLi50aGlzLnByb3BzLnRib2R5fSBjb2x1bW5zPXtjb2x1bW5zfSBmaXhlZENvbHVtbnM9e3RoaXMucHJvcHMuZml4ZWRDb2x1bW5zfSBkYXRhPXt0aGlzLnN0YXRlLmRhdGF9IHRhYmxlPXt0aGlzfSAvPjtcblx0fSxcblx0X190Ym9keUxvYWRpbmdSZW5kZXI6IGZ1bmN0aW9uIChjb2x1bW5zKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHRib2R5IGNsYXNzTmFtZT0ndGJvZHktbG9hZGVyJz5cblx0XHRcdFx0PHRyPlxuXHRcdFx0XHRcdDx0ZD5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdkYXRhLWxvYWRpbmcnPlxuXHRcdFx0XHRcdFx0XHQ8c3Bhbj7liqDovb3kuK08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDxMb2FkaW5nIC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L3RkPlxuXHRcdFx0XHQ8L3RyPlxuXHRcdFx0PC90Ym9keT5cblx0XHQpO1xuXHRcdHJldHVybiA8dGFibGUuVEJvZHkgcm93S2V5PXt0aGlzLnByb3BzLnJvd0tleX0gcm93PXt0aGlzLnByb3BzLnJvd30gY29udGV4dD17dGhpcy5wcm9wcy5jb250ZXh0fSB7Li4udGhpcy5wcm9wcy50Ym9keX0gY29sdW1ucz17Y29sdW1uc30gZml4ZWRDb2x1bW5zPXt0aGlzLnByb3BzLmZpeGVkQ29sdW1uc30gbG9hZGluZz17dHJ1ZX0gdGFibGU9e3RoaXN9IC8+O1xuXHR9LFxuXHRfX29uVEhlYWRDb2x1bW5DaGFuZ2U6IGZ1bmN0aW9uIChkYXRhLCBpbmRleCl7XG5cdFx0aWYodGhpcy5zdGF0ZS5jb2x1bW5zKXtcblx0XHRcdHRoaXMuc3RhdGUuY29sdW1uc1tpbmRleF0gPSBkYXRhO1xuXHRcdFx0dGhpcy5mb3JjZVVwZGF0ZSgpO1xuXHRcdH1cblx0fSxcblx0X190Ym9keURhdGFMb2FkZWQ6IGZ1bmN0aW9uIChkYXRhKSB7XG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLm9uRGF0YUxvYWRlZCAmJiB0aGlzLnByb3BzLm9uRGF0YUxvYWRlZChkYXRhLCB0aGlzKTtcblx0XHRpZihfcmV0dXJuICE9PSBmYWxzZSl7XG5cdFx0XHRpZih6bi5pcyhkYXRhLCAnb2JqZWN0JykgJiYgZGF0YS5yZXN1bHQpe1xuXHRcdFx0XHRkYXRhID0gZGF0YS5yZXN1bHQ7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgZGF0YTogZGF0YSB9KTtcblx0XHR9XG5cdH0sXG5cdF9fb25EYXRhQ3JlYXRlZDogZnVuY3Rpb24gKGRhdGEsIGxpZnljeWNsZSl7XG5cdFx0dGhpcy5kYXRhID0gZGF0YTtcblx0XHR0aGlzLnByb3BzLm9uRGF0YUNyZWF0ZWQgJiYgdGhpcy5wcm9wcy5vbkRhdGFDcmVhdGVkKGRhdGEsIHRoaXMsIGxpZnljeWNsZSk7XG5cdH0sXG5cdHJlZnJlc2g6IGZ1bmN0aW9uIChjYWxsYmFjaywgcmVzZXQpe1xuXHRcdGlmKHRoaXMucHJvcHMucmVzZXRDaGVja2VkIHx8IHJlc2V0KSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0Y2hlY2tlZHM6IFtdXG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRpZih0aGlzLmRhdGEpe1xuXHRcdFx0dGhpcy5kYXRhLnJlZnJlc2gobnVsbCwge1xuXHRcdFx0XHRhZnRlcjogKHNlbmRlciwgZGF0YSwgcmVzcG9uc2UsIHhocik9PnsgXG5cdFx0XHRcdFx0Y2FsbGJhY2sgJiYgY2FsbGJhY2soZGF0YSwgcmVzcG9uc2UsIHhocik7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1lbHNle1xuXHRcdFx0Y2FsbGJhY2sgJiYgY2FsbGJhY2soKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblx0cmVmcmVzaEhlYWRlcnM6IGZ1bmN0aW9uICgpe1xuXHRcdGlmKHRoaXMuY29sdW1ucyl7XG5cdFx0XHR0aGlzLmNvbHVtbnMucmVmcmVzaCgpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXHRzZXREYXRhOiBmdW5jdGlvbiAoZGF0YSl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IGRhdGE6IGRhdGEgfSk7XG5cdH0sXG5cdF9fZml4ZWRTdHlsZXM6IGZ1bmN0aW9uIChpbmRleCl7XG5cdFx0dmFyIF9jb2x1bW5zID0gdGhpcy5zdGF0ZS5jb2x1bW5zfHxbXSwgX3dpZHRoID0gMDtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgaW5kZXg7IGkrKyl7XG5cdFx0XHRpZihfY29sdW1uc1tpXS5maXhlZCkge1xuXHRcdFx0XHRfd2lkdGggKz0gKF9jb2x1bW5zW2ldLndpZHRoIHx8IDApIC0gMTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0bGVmdDogX3dpZHRoIC0gMVxuXHRcdH07XG5cdH0sXG5cdF9fcmVuZGVyVEJvZHk6IGZ1bmN0aW9uIChjb2x1bW5zKXtcblx0XHR2YXIgX2RhdGEgPSB0aGlzLnByb3BzLmRhdGEgfHwgdGhpcy5wcm9wcy50Ym9keS5kYXRhO1xuXHRcdHZhciBfcmVzdWx0ID0gdGhpcy5wcm9wcy5vbkRhdGFJbml0aWFsICYmIHRoaXMucHJvcHMub25EYXRhSW5pdGlhbChfZGF0YSwgdGhpcyk7XG5cdFx0aWYoX3Jlc3VsdCl7XG5cdFx0XHRfZGF0YSA9IF9yZXN1bHQ7XG5cdFx0fVxuXHRcdHJldHVybiA8em51aS5yZWFjdC5EYXRhTGlmZWN5Y2xlIGRhdGE9e19kYXRhfSBcblx0XHRcdFx0XHRkYXRhUmVuZGVyPXsoKT0+dGhpcy5fX3Rib2R5RGF0YVJlbmRlcihjb2x1bW5zKX0gXG5cdFx0XHRcdFx0bG9hZGluZ0VuYWJsZWQ9e3RoaXMucHJvcHMubG9hZGluZ0VuYWJsZWR9XG5cdFx0XHRcdFx0bG9hZGluZ1JlbmRlcj17KCk9PnRoaXMuX190Ym9keUxvYWRpbmdSZW5kZXIoY29sdW1ucyl9XG5cdFx0XHRcdFx0cmVzcG9uc2VIYW5kbGVyPXt0aGlzLnByb3BzLnJlc3BvbnNlSGFuZGxlcn1cblx0XHRcdFx0XHRvbkRhdGFDcmVhdGVkPXt0aGlzLl9fb25EYXRhQ3JlYXRlZH1cblx0XHRcdFx0XHRvbkZpbmlzaGVkPXt0aGlzLl9fdGJvZHlEYXRhTG9hZGVkfSAvPjtcblx0fSxcblx0X19vbkZpeGVkTGF5b3V0Qm9keVNjcm9sbDogZnVuY3Rpb24gKGUpe1xuXHRcdHRoaXMuX2xheW91dEhlYWRlci5zY3JvbGxMZWZ0ID0gZS50YXJnZXQuc2Nyb2xsTGVmdDtcblx0fSxcblx0X19yZW5kZXI6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBjb2x1bW5zID0gdGhpcy5zdGF0ZS5jb2x1bW5zO1xuXHRcdGNvbHVtbnMgPSBjb2x1bW5zLm1hcCgoaXRlbSwgaW5kZXgpPT57XG5cdFx0XHRpZihpdGVtLmZpeGVkKSB7XG5cdFx0XHRcdGl0ZW0uZml4ZWRTdHlsZXMgPSB0aGlzLl9fZml4ZWRTdHlsZXMoaW5kZXgpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGl0ZW07XG5cdFx0fSk7XG5cdFx0aWYodGhpcy5wcm9wcy5maXhlZExheW91dCkge1xuXHRcdFx0dmFyIF9zdHlsZSA9IHt9O1xuXHRcdFx0aWYodGhpcy5wcm9wcy5ib3JkZXIpIHtcblx0XHRcdFx0X3N0eWxlLmJvcmRlciA9ICcxcHggc29saWQgI2U2ZTZlNic7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInpyLXRhYmxlLWZpeGVkLWxheW91dFwiIHN0eWxlPXtfc3R5bGV9PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQtbGF5b3V0LWhlYWRlclwiIHJlZj17KHJlZik9PnRoaXMuX2xheW91dEhlYWRlciA9IHJlZn0+XG5cdFx0XHRcdFx0XHQ8dGFibGUgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXRhYmxlXCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gXG5cdFx0XHRcdFx0XHRcdHN0eWxlPXt6bnVpLnJlYWN0LnN0eWxlKHRoaXMucHJvcHMuc3R5bGUsIHsgd2lkdGg6IHRoaXMucHJvcHMud2lkdGggfSl9IFxuXHRcdFx0XHRcdFx0XHRkYXRhLWZpeGVkPXt0aGlzLnByb3BzLmZpeGVkfSBcdFxuXHRcdFx0XHRcdFx0XHRjZWxsUGFkZGluZz17dGhpcy5wcm9wcy5jZWxsUGFkZGluZyB8fCAwfSBcblx0XHRcdFx0XHRcdFx0Y2VsbFNwYWNpbmc9e3RoaXMucHJvcHMuY2VsbFNwYWNpbmcgfHwgMH0gey4uLnRoaXMucHJvcHMuYXR0cnN9PlxuXHRcdFx0XHRcdFx0XHR7ICEhdGhpcy5wcm9wcy5jYXB0aW9uICYmIDxjYXB0aW9uIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jYXB0aW9uLmNsYXNzTmFtZX0gc3R5bGU9e3RoaXMucHJvcHMuY2FwdGlvbi5zdHlsZX0+e3RoaXMucHJvcHMuY2FwdGlvbi5yZW5kZXJ9PC9jYXB0aW9uPiB9XG5cdFx0XHRcdFx0XHRcdHsgISF0aGlzLnByb3BzLmNvbGdyb3VwICYmIDx0YWJsZS5Db2xncm91cCBjb250ZXh0PXt0aGlzLnByb3BzLmNvbnRleHR9IGtleU1hcHBpbmc9e3RoaXMucHJvcHMua2V5TWFwcGluZ30gY29sdW1ucz17Y29sdW1uc30gey4uLnRoaXMucHJvcHMuY29sZ3JvdXB9IC8+IH1cblx0XHRcdFx0XHRcdFx0eyAhIXRoaXMucHJvcHMudGhlYWQgJiYgPHRhYmxlLlRIZWFkIGNvbnRleHQ9e3RoaXMucHJvcHMuY29udGV4dH0gb25Tb3J0PXt0aGlzLl9fb25Tb3J0fSBvbkNvbHVtbkNoYW5nZT17dGhpcy5fX29uVEhlYWRDb2x1bW5DaGFuZ2V9IGNvbHVtbnM9e2NvbHVtbnN9IGtleU1hcHBpbmc9e3RoaXMucHJvcHMua2V5TWFwcGluZ30gey4uLnRoaXMucHJvcHMudGhlYWR9IHRhYmxlPXt0aGlzfSAvPn1cblx0XHRcdFx0XHRcdFx0eyAhIXRoaXMucHJvcHMudGZpbHRlciAmJiA8dGFibGUuVEZpbHRlciBjb250ZXh0PXt0aGlzLnByb3BzLmNvbnRleHR9IG9uRmlsdGVyPXt0aGlzLl9fb25GaWx0ZXJ9IGNvbHVtbnM9e2NvbHVtbnN9IHsuLi50aGlzLnByb3BzLnRmaWx0ZXJ9IHRhYmxlPXt0aGlzfSAvPn1cblx0XHRcdFx0XHRcdDwvdGFibGU+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmaXhlZC1sYXlvdXQtYm9keVwiIG9uU2Nyb2xsPXt0aGlzLl9fb25GaXhlZExheW91dEJvZHlTY3JvbGx9PlxuXHRcdFx0XHRcdFx0PHRhYmxlIGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci10YWJsZVwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IFxuXHRcdFx0XHRcdFx0XHRzdHlsZT17em51aS5yZWFjdC5zdHlsZSh0aGlzLnByb3BzLnN0eWxlLCB7IHdpZHRoOiB0aGlzLnByb3BzLndpZHRoIH0pfSBcblx0XHRcdFx0XHRcdFx0ZGF0YS1maXhlZD17dGhpcy5wcm9wcy5maXhlZH0gXHRcblx0XHRcdFx0XHRcdFx0Y2VsbFBhZGRpbmc9e3RoaXMucHJvcHMuY2VsbFBhZGRpbmcgfHwgMH0gXG5cdFx0XHRcdFx0XHRcdGNlbGxTcGFjaW5nPXt0aGlzLnByb3BzLmNlbGxTcGFjaW5nIHx8IDB9IHsuLi50aGlzLnByb3BzLmF0dHJzfT5cblx0XHRcdFx0XHRcdFx0eyAhIXRoaXMucHJvcHMuY2FwdGlvbiAmJiA8Y2FwdGlvbiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2FwdGlvbi5jbGFzc05hbWV9IHN0eWxlPXt0aGlzLnByb3BzLmNhcHRpb24uc3R5bGV9Pnt0aGlzLnByb3BzLmNhcHRpb24ucmVuZGVyfTwvY2FwdGlvbj4gfVxuXHRcdFx0XHRcdFx0XHR7ICEhdGhpcy5wcm9wcy5jb2xncm91cCAmJiA8dGFibGUuQ29sZ3JvdXAgY29udGV4dD17dGhpcy5wcm9wcy5jb250ZXh0fSBrZXlNYXBwaW5nPXt0aGlzLnByb3BzLmtleU1hcHBpbmd9IGNvbHVtbnM9e2NvbHVtbnN9IHsuLi50aGlzLnByb3BzLmNvbGdyb3VwfSAvPiB9XG5cdFx0XHRcdFx0XHRcdHsgKHRoaXMucHJvcHMudGJvZHkgfHwgdGhpcy5wcm9wcy5kYXRhKSAmJiB0aGlzLl9fcmVuZGVyVEJvZHkoY29sdW1ucykgfVxuXHRcdFx0XHRcdFx0PC90YWJsZT5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLnByb3BzLnNob3dGb290ICE9PSBmYWxzZSAmJiA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkLWxheW91dC1mb290ZXJcIj5cblx0XHRcdFx0XHRcdFx0eyAhIXRoaXMucHJvcHMudGZvb3QgJiYgPHRhYmxlPjx0YWJsZS5URm9vdCBjb250ZXh0PXt0aGlzLnByb3BzLmNvbnRleHR9IGNvbHVtbnM9e2NvbHVtbnN9IHsuLi50aGlzLnByb3BzLnRmb290fSB0YWJsZT17dGhpc30gLz48L3RhYmxlPn1cblx0XHRcdFx0XHRcdFx0eyB0aGlzLnByb3BzLmNoaWxkcmVuUmVuZGVyICYmIHRoaXMucHJvcHMuY2hpbGRyZW5SZW5kZXIoY29sdW1ucywgdGhpcykgfVxuXHRcdFx0XHRcdFx0XHR7IHRoaXMucHJvcHMuY2hpbGRyZW4gfVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0dmFyIF9zdHlsZSA9IHt9O1xuXHRcdC8qXG5cdFx0aWYodGhpcy5wcm9wcy5ib3JkZXIpIHtcblx0XHRcdF9zdHlsZS5ib3JkZXIgPSAnMXB4IHNvbGlkICNlNmU2ZTYnO1xuXHRcdH1cblx0XHQqL1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDx0YWJsZSBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItdGFibGVcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBcblx0XHRcdFx0c3R5bGU9e3pudWkucmVhY3Quc3R5bGUodGhpcy5wcm9wcy5zdHlsZSwgeyB3aWR0aDogdGhpcy5wcm9wcy53aWR0aCB9LCBfc3R5bGUpfSBcblx0XHRcdFx0ZGF0YS1maXhlZD17dGhpcy5wcm9wcy5maXhlZH0gXHRcblx0XHRcdFx0Y2VsbFBhZGRpbmc9e3RoaXMucHJvcHMuY2VsbFBhZGRpbmcgfHwgMH0gXG5cdFx0XHRcdGNlbGxTcGFjaW5nPXt0aGlzLnByb3BzLmNlbGxTcGFjaW5nIHx8IDB9IHsuLi50aGlzLnByb3BzLmF0dHJzfT5cblx0XHRcdFx0eyAhIXRoaXMucHJvcHMuY2FwdGlvbiAmJiA8Y2FwdGlvbiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2FwdGlvbi5jbGFzc05hbWV9IHN0eWxlPXt0aGlzLnByb3BzLmNhcHRpb24uc3R5bGV9Pnt0aGlzLnByb3BzLmNhcHRpb24ucmVuZGVyfTwvY2FwdGlvbj4gfVxuXHRcdFx0XHR7ICEhdGhpcy5wcm9wcy5jb2xncm91cCAmJiA8dGFibGUuQ29sZ3JvdXAgY29udGV4dD17dGhpcy5wcm9wcy5jb250ZXh0fSBrZXlNYXBwaW5nPXt0aGlzLnByb3BzLmtleU1hcHBpbmd9IGNvbHVtbnM9e2NvbHVtbnN9IHsuLi50aGlzLnByb3BzLmNvbGdyb3VwfSAvPiB9XG5cdFx0XHRcdHsgISF0aGlzLnByb3BzLnRoZWFkICYmIDx0YWJsZS5USGVhZCBjb250ZXh0PXt0aGlzLnByb3BzLmNvbnRleHR9IG9uU29ydD17dGhpcy5fX29uU29ydH0gb25Db2x1bW5DaGFuZ2U9e3RoaXMuX19vblRIZWFkQ29sdW1uQ2hhbmdlfSBjb2x1bW5zPXtjb2x1bW5zfSBrZXlNYXBwaW5nPXt0aGlzLnByb3BzLmtleU1hcHBpbmd9IHsuLi50aGlzLnByb3BzLnRoZWFkfSB0YWJsZT17dGhpc30gLz59XG5cdFx0XHRcdHsgISF0aGlzLnByb3BzLnRmaWx0ZXIgJiYgPHRhYmxlLlRGaWx0ZXIgY29udGV4dD17dGhpcy5wcm9wcy5jb250ZXh0fSBvbkZpbHRlcj17dGhpcy5fX29uRmlsdGVyfSBjb2x1bW5zPXtjb2x1bW5zfSB7Li4udGhpcy5wcm9wcy50ZmlsdGVyfSB0YWJsZT17dGhpc30gLz59XG5cdFx0XHRcdHsgKHRoaXMucHJvcHMudGJvZHkgfHwgdGhpcy5wcm9wcy5kYXRhKSAmJiB0aGlzLl9fcmVuZGVyVEJvZHkoY29sdW1ucykgfVxuXHRcdFx0XHR7ICEhdGhpcy5wcm9wcy50Zm9vdCAmJiA8dGFibGUuVEZvb3QgY29udGV4dD17dGhpcy5wcm9wcy5jb250ZXh0fSBjb2x1bW5zPXtjb2x1bW5zfSB7Li4udGhpcy5wcm9wcy50Zm9vdH0gdGFibGU9e3RoaXN9IC8+fVxuXHRcdFx0XHR7IHRoaXMucHJvcHMuY2hpbGRyZW5SZW5kZXIgJiYgdGhpcy5wcm9wcy5jaGlsZHJlblJlbmRlcihjb2x1bW5zLCB0aGlzKSB9XG5cdFx0XHRcdHsgdGhpcy5wcm9wcy5jaGlsZHJlbiB9XG5cdFx0XHQ8L3RhYmxlPlxuXHRcdCk7XG5cdH0sXG5cdF9fcm93SGVhZENoZWNrYm94Q2hlY2tlZDogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF9jaGVja2VkcyA9IHRoaXMuc3RhdGUuY2hlY2tlZHMsIF92YWx1ZUtleSA9IHRoaXMucHJvcHMudmFsdWVLZXkgfHwgJ3p4bnpfVVVJRCc7XG5cdFx0aWYoIV9jaGVja2Vkcy5sZW5ndGgpIHJldHVybiBmYWxzZTtcblx0XHRmb3IodmFyIGl0ZW0gb2YgdGhpcy5zdGF0ZS5kYXRhKSB7XG5cdFx0XHRpZighaXRlbS5fX2NoZWNrZWREaXNhYmxlZF9fICYmIF9jaGVja2Vkcy5pbmRleE9mKGl0ZW1bX3ZhbHVlS2V5XSkgPT0gLTEpe1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0sXG5cdF9fb25Sb3dIZWFkQ2hlY2tib3hDaGFuZ2U6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0dmFyIF92YWx1ZUtleSA9IHRoaXMucHJvcHMudmFsdWVLZXkgfHwgJ3p4bnpfVVVJRCc7XG5cdFx0aWYoZXZlbnQuY2hlY2tlZCkge1xuXHRcdFx0Zm9yKHZhciBpdGVtIG9mIHRoaXMuc3RhdGUuZGF0YSkge1xuXHRcdFx0XHRpZighaXRlbS5fX2NoZWNrZWREaXNhYmxlZF9fICYmIHRoaXMuc3RhdGUuY2hlY2tlZHMuaW5kZXhPZihpdGVtW192YWx1ZUtleV0pID09IC0xKXtcblx0XHRcdFx0XHR0aGlzLnN0YXRlLmNoZWNrZWRzLnB1c2goaXRlbVtfdmFsdWVLZXldKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1lbHNle1xuXHRcdFx0Zm9yKHZhciBpdGVtIG9mIHRoaXMuc3RhdGUuZGF0YSkge1xuXHRcdFx0XHRpZighaXRlbS5fX2NoZWNrZWREaXNhYmxlZF9fICYmIHRoaXMuc3RhdGUuY2hlY2tlZHMuaW5kZXhPZihpdGVtW192YWx1ZUtleV0pICE9IC0xKXtcblx0XHRcdFx0XHR0aGlzLnN0YXRlLmNoZWNrZWRzLnNwbGljZSh0aGlzLnN0YXRlLmNoZWNrZWRzLmluZGV4T2YoaXRlbVtfdmFsdWVLZXldKSwgMSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0dGhpcy5mb3JjZVVwZGF0ZSgpO1xuXHRcdHRoaXMucHJvcHMub25DaGVja2JveENoYW5nZSAmJiB0aGlzLnByb3BzLm9uQ2hlY2tib3hDaGFuZ2UodGhpcy5zdGF0ZS5jaGVja2VkcywgdGhpcyk7XG5cdH0sXG5cdF9faW5pdENoZWNrYm94OiBmdW5jdGlvbiAoY29sdW1ucyl7XG5cdFx0aWYoIXRoaXMucHJvcHMuY2hlY2tib3gpIHJldHVybjtcblx0XHR2YXIgX3ZhbHVlS2V5ID0gdGhpcy5wcm9wcy52YWx1ZUtleSB8fCAnenhuel9VVUlEJywgX3ZhbHVlID0gdGhpcy5wcm9wcy5jaGVja2JveDtcblx0XHR2YXIgX2NoZWNrYm94ID0ge1xuXHRcdFx0d2lkdGg6IDYwLFxuXHRcdFx0Zml4ZWQ6IHRydWUsXG5cdFx0XHRoZWFkOiAoYXJndik9Pntcblx0XHRcdFx0dmFyIF90YWJsZSA9IGFyZ3YudGhlYWQucHJvcHMudGFibGU7XG5cdFx0XHRcdGlmKCFfdGFibGUpIHJldHVybjtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8c2VsZWN0b3IuQ2hlY2tib3hcblx0XHRcdFx0XHRcdHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fVxuXHRcdFx0XHRcdFx0a2V5PXt6bi51dWlkKCl9XG5cdFx0XHRcdFx0XHR0ZXh0PXsnICcgKyBfdGFibGUuc3RhdGUuY2hlY2tlZHMubGVuZ3RofVxuXHRcdFx0XHRcdFx0Y2hlY2tlZD17dGhpcy5fX3Jvd0hlYWRDaGVja2JveENoZWNrZWQoKX1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLl9fb25Sb3dIZWFkQ2hlY2tib3hDaGFuZ2V9IC8+XG5cdFx0XHRcdCk7XG5cdFx0XHR9LFxuXHRcdFx0Ym9keTogKGFyZ3YpPT57XG5cdFx0XHRcdHZhciBfZGF0YSA9IGFyZ3YuZGF0YTtcblx0XHRcdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLm9uQm9keUNvbHVtbkNoZWNrYm94UmVuZGVyICYmIHRoaXMucHJvcHMub25Cb2R5Q29sdW1uQ2hlY2tib3hSZW5kZXIoYXJndiwgdGhpcyk7XG5cdFx0XHRcdGlmKF9yZXR1cm4pIHtcblx0XHRcdFx0XHRyZXR1cm4gX3JldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZihfcmV0dXJuID09PSBmYWxzZSl7XG5cdFx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8c2VsZWN0b3IuVW5jb250cm9sQ2hlY2tib3ggXG5cdFx0XHRcdFx0XHRzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgfX1cblx0XHRcdFx0XHRcdGRpc2FibGVkPXtfZGF0YS5fX2NoZWNrZWREaXNhYmxlZF9ffVxuXHRcdFx0XHRcdFx0Y2hlY2tlZD17dGhpcy5zdGF0ZS5jaGVja2Vkcy5pbmRleE9mKF9kYXRhW192YWx1ZUtleV0pICE9PSAtMX1cblx0XHRcdFx0XHRcdG9uQ2xpY2s9eyhldmVudCwgY2hlY2tib3gpPT57XG5cdFx0XHRcdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHRcdFx0XHRpZihjaGVja2JveC5wcm9wcy5jaGVja2VkKSB7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5zdGF0ZS5jaGVja2Vkcy5zcGxpY2UodGhpcy5zdGF0ZS5jaGVja2Vkcy5pbmRleE9mKF9kYXRhW192YWx1ZUtleV0pLCAxKTsgXG5cdFx0XHRcdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc3RhdGUuY2hlY2tlZHMucHVzaChfZGF0YVtfdmFsdWVLZXldKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR0aGlzLmZvcmNlVXBkYXRlKCk7XG5cdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMub25DaGVja2JveENoYW5nZSAmJiB0aGlzLnByb3BzLm9uQ2hlY2tib3hDaGFuZ2UodGhpcy5zdGF0ZS5jaGVja2VkcywgdGhpcyk7XG5cdFx0XHRcdFx0XHR9fSAvPlxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0c3dpdGNoKHpuLnR5cGUoX3ZhbHVlKSkge1xuXHRcdFx0Y2FzZSAnb2JqZWN0Jzpcblx0XHRcdFx0X2NoZWNrYm94ID0gem4uZXh0ZW5kKHt9LCBfdmFsdWUpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ251bWJlcic6XG5cdFx0XHRcdF9jaGVja2JveC53aWR0aCA9IF92YWx1ZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXG5cdFx0Y29sdW1ucyA9IGNvbHVtbnMudW5zaGlmdChfY2hlY2tib3gpO1xuXHR9LFxuXHRfX2luaXRJbmRleENvbHVtbjogZnVuY3Rpb24gKGNvbHVtbnMpe1xuXHRcdGlmKHRoaXMucHJvcHMuZGF0YUluZGV4RW5hYmxlZCkge1xuXHRcdFx0Y29sdW1ucyA9IGNvbHVtbnMudW5zaGlmdCh7XG5cdFx0XHRcdHdpZHRoOiA0OCxcblx0XHRcdFx0bGFiZWw6ICfntKLlvJUnLCBcblx0XHRcdFx0Zml4ZWQ6IHRydWUsXG5cdFx0XHRcdG5hbWU6ICdfX2luZGV4X18nLFxuXHRcdFx0XHRib2R5OiBmdW5jdGlvbiAoYXJndil7XG5cdFx0XHRcdFx0cmV0dXJuICg8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+eygrYXJndi5yb3dJbmRleCkgKyAxfTwvZGl2Pik7XG5cdFx0XHRcdH0uYmluZCh0aGlzKVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9LFxuXHRfX2NvbHVtbnNMb2FkZWQ6IGZ1bmN0aW9uIChjb2x1bW5zKXtcblx0XHRpZihjb2x1bW5zICYmIHpuLmlzKGNvbHVtbnMsICdhcnJheScpKXtcblx0XHRcdHZhciBfdGVtcCA9IG51bGwsXG5cdFx0XHRcdF9yZXN1bHQgPSBudWxsLFxuXHRcdFx0XHRfY29sdW1uSXRlcmF0b3IgPSB0aGlzLnByb3BzLmNvbHVtbkl0ZXJhdG9yLFxuXHRcdFx0XHRfY29sdW1ucyA9IGNvbHVtbnMubWFwKChjb2x1bW4pPT57XG5cdFx0XHRcdFx0X3RlbXAgPSB6bi5kZWVwQXNzaWduKHt9LCBjb2x1bW4pO1xuXHRcdFx0XHRcdF9yZXN1bHQgPSBfY29sdW1uSXRlcmF0b3IgJiYgX2NvbHVtbkl0ZXJhdG9yKF90ZW1wLCB0aGlzKTtcblx0XHRcdFx0XHRpZihfcmVzdWx0ID09PSBmYWxzZSkgcmV0dXJuIG51bGw7XG5cdFx0XHRcdFx0aWYodHlwZW9mIF9yZXN1bHQgPT0gJ29iamVjdCcpIHJldHVybiBfcmVzdWx0O1xuXG5cdFx0XHRcdFx0cmV0dXJuIF90ZW1wO1xuXHRcdFx0XHR9KTtcblx0XHRcdHRoaXMuX19pbml0Q2hlY2tib3goX2NvbHVtbnMpO1xuXHRcdFx0dGhpcy5fX2luaXRJbmRleENvbHVtbihfY29sdW1ucyk7XG5cdFx0XHR0aGlzLnByb3BzLm9uQ29sdW1uc0xvYWRlZCAmJiB0aGlzLnByb3BzLm9uQ29sdW1uc0xvYWRlZChjb2x1bW5zKTtcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBjb2x1bW5zOiBfY29sdW1ucyB9KTtcblx0XHR9XG5cdH0sXG5cdF9fb25Db2x1bW5EYXRhQ3JlYXRlZDogZnVuY3Rpb24gKGRhdGEsIGxpZmVjeWNsZSl7XG5cdFx0dGhpcy5jb2x1bW5zID0gZGF0YTtcblx0XHR0aGlzLnByb3BzLm9uQ29sdW1uc0NyZWF0ZWQgJiYgdGhpcy5wcm9wcy5vbkNvbHVtbnNDcmVhdGVkKGRhdGEsIHRoaXMsIGxpZmVjeWNsZSk7XG5cdH0sXG5cdGdldERhdGE6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB0aGlzLnN0YXRlLmRhdGE7XG5cdH0sXG5cdHJlbW92ZVJvd0RhdGE6IGZ1bmN0aW9uIChkYXRhKXtcblx0XHRpZihkYXRhKSB7XG5cdFx0XHR0aGlzLnN0YXRlLmRhdGEuc3BsaWNlKHRoaXMuc3RhdGUuZGF0YS5pbmRleE9mKGRhdGEpLCAxKTtcblx0XHRcdHRoaXMuZm9yY2VVcGRhdGUoKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblx0dXBkYXRlUm93RGF0YTogZnVuY3Rpb24gKGRhdGEpe1xuXHRcdGlmKGRhdGEpIHtcblx0XHRcdHZhciBfaW5kZXggPSB0aGlzLnN0YXRlLmRhdGEuaW5kZXhPZihkYXRhKTtcblx0XHRcdHRoaXMuc3RhdGUuZGF0YVtfaW5kZXhdID0gZGF0YTtcblx0XHRcdHRoaXMuZm9yY2VVcGRhdGUoKTtcblx0XHR9XG5cdFx0XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gPHpudWkucmVhY3QuRGF0YUxpZmVjeWNsZVxuXHRcdFx0XHRcdGRhdGE9e3RoaXMucHJvcHMuY29sdW1uc31cblx0XHRcdFx0XHRyZW5kZXI9e3RoaXMuX19yZW5kZXJ9XG5cdFx0XHRcdFx0cmVzcG9uc2VIYW5kbGVyPXt0aGlzLnByb3BzLnJlc3BvbnNlSGFuZGxlcn1cblx0XHRcdFx0XHRvbkxvYWRpbmc9e3RoaXMucHJvcHMub25Db2x1bW5Mb2FkaW5nfVxuXHRcdFx0XHRcdG9uRmluaXNoZWQ9e3RoaXMuX19jb2x1bW5zTG9hZGVkfVxuXHRcdFx0XHRcdG9uRXJyb3I9e3RoaXMucHJvcHMub25Db2x1bW5Mb2FkRXJyb3J9XG5cdFx0XHRcdFx0b25EYXRhQ3JlYXRlZD17dGhpcy5fX29uQ29sdW1uRGF0YUNyZWF0ZWR9IC8+O1xuXHR9XG59KTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgVGFibGUgPSByZXF1aXJlKCcuL1RhYmxlJyk7XG52YXIgaW5wdXQgPSByZXF1aXJlKCd6bnVpLXJlYWN0LWlucHV0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJUYWJsZUVkaXRvcicsXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHRhYmxlOiBudWxsLFxuXHRcdFx0Y29sdW1uczogW11cblx0XHR9O1xuXHR9LFxuXHRfX2NlbGxDaGFuZ2U6IGZ1bmN0aW9uIChldmVudCwgYXJndil7XG5cdFx0YXJndi5kYXRhW2FyZ3YudGNlbGwucHJvcHMubmFtZV0gPSBldmVudC52YWx1ZTtcblx0XHRhcmd2LnRyb3cuZm9yY2VVcGRhdGUoKTtcblx0fSxcblx0X19jb2x1bW5Cb2R5UmVuZGVyOiBmdW5jdGlvbiAoYXJndil7XG5cdFx0cmV0dXJuIDxpbnB1dC5JbnB1dCBcblx0XHRcdGtleT17YXJndi52YWx1ZX0gXG5cdFx0XHR2YWx1ZT17YXJndi52YWx1ZX0gXG5cdFx0XHRvbkJsdXI9eyhldmVudCk9PnRoaXMuX19jZWxsQ2hhbmdlKGV2ZW50LCBhcmd2KX1cblx0XHRcdG9uRW50ZXI9eyhldmVudCk9PnRoaXMuX19jZWxsQ2hhbmdlKGV2ZW50LCBhcmd2KX0gLz47XG5cdH0sXG5cdF9fY29sdW1uSXRlcmF0b3I6IGZ1bmN0aW9uIChjb2x1bW4sIHRhYmxlKXtcblx0XHRpZighY29sdW1uLmJvZHkpIHtcblx0XHRcdGNvbHVtbi5ib2R5ID0gdGhpcy5fX2NvbHVtbkJvZHlSZW5kZXI7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNvbHVtbjtcblx0fSxcblx0c2V0RGF0YTogZnVuY3Rpb24gKGRhdGEpe1xuXHRcdHZhciBfcmV0dXJuID0gdGhpcy5wcm9wcy5vbkRhdGFDaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkRhdGFDaGFuZ2UoZGF0YSwgdGhpcy5zdGF0ZS50YWJsZSwgdGhpcyk7XG5cdFx0aWYoX3JldHVybiA9PT0gZmFsc2Upe1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRpZih0eXBlb2YgX3JldHVybiA9PSAnb2JqZWN0Jykge1xuXHRcdFx0ZGF0YSA9IF9yZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuc3RhdGUudGFibGUuc3RhdGUuZGF0YSA9IGRhdGE7XG5cdFx0dGhpcy5zdGF0ZS50YWJsZS5mb3JjZVVwZGF0ZSgpO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cdGdldERhdGE6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB0aGlzLnN0YXRlLnRhYmxlLmdldERhdGEoKTtcblx0fSxcblx0YWRkUm93OiBmdW5jdGlvbiAoZGF0YSl7XG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLm9uRGF0YUNoYW5nZSAmJiB0aGlzLnByb3BzLm9uRGF0YUNoYW5nZShbZGF0YV0sIHRoaXMuc3RhdGUudGFibGUsIHRoaXMpO1xuXHRcdGlmKF9yZXR1cm4gPT09IGZhbHNlKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0aWYoem4uaXMoX3JldHVybiwgJ2FycmF5JykpIHtcblx0XHRcdGRhdGEgPSBfcmV0dXJuO1xuXHRcdH1lbHNlIGlmKHpuLmlzKF9yZXR1cm4sICdvYmplY3QnKSl7XG5cdFx0XHRkYXRhID0gWyBkYXRhIF07XG5cdFx0fVxuXG5cdFx0dGhpcy5zdGF0ZS50YWJsZS5zdGF0ZS5kYXRhID0gdGhpcy5zdGF0ZS50YWJsZS5zdGF0ZS5kYXRhLmNvbmNhdChkYXRhKTtcblx0XHR0aGlzLnN0YXRlLnRhYmxlLmZvcmNlVXBkYXRlKCk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8VGFibGUgey4uLnRoaXMucHJvcHN9IHJlZj17KHJlZikgPT4gdGhpcy5zdGF0ZS50YWJsZSA9IHJlZn0gY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItdGFibGUtZWRpdG9yJywgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBjb2x1bW5JdGVyYXRvcj17dGhpcy5fX2NvbHVtbkl0ZXJhdG9yfSAvPlxuXHRcdClcblx0fVxufSk7IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFRhYmxlID0gcmVxdWlyZSgnLi9UYWJsZScpO1xudmFyIHBhZ2VyID0gcmVxdWlyZSgnem51aS1yZWFjdC1wYWdlcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSVGFibGVQYWdlcicsXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNvdW50OiAwLFxuXHRcdFx0Y3VycmVudDogMSxcblx0XHRcdGRhdGE6IFtdLFxuXHRcdFx0dG90YWw6IDAsXG5cdFx0XHRwYWdlSW5kZXg6IHRoaXMucHJvcHMucGFnZUluZGV4IHx8IDEsXG5cdFx0XHRwYWdlU2l6ZTogdGhpcy5wcm9wcy5wYWdlU2l6ZSB8fCAxMCxcblx0XHR9O1xuXHR9LFxuXHRjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24oKXtcblx0XHR0aGlzLnByb3BzLm9uQ29tcG9uZW50RGlkTW91bnQgJiYgdGhpcy5wcm9wcy5vbkNvbXBvbmVudERpZE1vdW50KHRoaXMpO1xuXHR9LFxuXHRyZXNldENoZWNrZWRzOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4gdGhpcy5fdGFibGUuc2V0U3RhdGUoe1xuXHRcdFx0Y2hlY2tlZHM6IFtdXG5cdFx0fSksIHRoaXM7XG5cdH0sXG5cdHNldFBhZ2VJbmRleDogZnVuY3Rpb24gKHBhZ2VJbmRleCwgYXJndiwgY2FsbGJhY2spe1xuXHRcdGlmKHRoaXMuZGF0YSl7XG5cdFx0XHRpZihhcmd2ICYmIGFyZ3YuX19yZXNldF9fKXtcblx0XHRcdFx0YXJndi5fX3Jlc2V0X18gPSBudWxsO1xuXHRcdFx0XHRkZWxldGUgYXJndi5fX3Jlc2V0X187XG5cdFx0XHRcdGlmKHBhZ2VJbmRleCA9PSAxKSB7XG5cdFx0XHRcdFx0dGhpcy5fdGFibGUuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdFx0Y2hlY2tlZHM6IFtdXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRoaXMuc3RhdGUucGFnZUluZGV4ID0gcGFnZUluZGV4O1xuXHRcdFx0dGhpcy5zdGF0ZS5jdXJyZW50ID0gcGFnZUluZGV4O1xuXHRcdFx0dGhpcy5mb3JjZVVwZGF0ZSgpO1xuXHRcdFx0dGhpcy5kYXRhLl9hcmd2ID0gdGhpcy5fX29uRGF0YUluaXRpYWwodGhpcy5wcm9wcy5kYXRhKTtcblx0XHRcdGlmKGFyZ3YgJiYgdHlwZW9mIGFyZ3YgPT0gJ29iamVjdCcpe1xuXHRcdFx0XHRpZighdGhpcy5kYXRhLl9hcmd2LmRhdGEpe1xuXHRcdFx0XHRcdHRoaXMuZGF0YS5fYXJndi5kYXRhID0ge307XG5cdFx0XHRcdH1cblx0XHRcdFx0Zm9yKHZhciBrZXkgaW4gYXJndil7XG5cdFx0XHRcdFx0dGhpcy5kYXRhLl9hcmd2LmRhdGFba2V5XSA9IGFyZ3Zba2V5XTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGhpcy5kYXRhLnJlZnJlc2goY2FsbGJhY2spO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXHRyZWZyZXNoOiBmdW5jdGlvbiAoY2FsbGJhY2ssIHJlc2V0KXtcblx0XHRpZih0aGlzLl90YWJsZSl7XG5cdFx0XHR0aGlzLl90YWJsZS5yZWZyZXNoKGNhbGxiYWNrLCByZXNldCk7XG5cdFx0fVxuXHR9LFxuXHRfX2hhbmRsZVBhZ2VDaGFuZ2VkOiBmdW5jdGlvbiAobmV3UGFnZSl7XG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLm9uUGFnZUNoYW5nZWQgJiYgdGhpcy5wcm9wcy5vblBhZ2VDaGFuZ2VkKG5ld1BhZ2UsIHRoaXMpO1xuXHRcdGlmKF9yZXR1cm4gIT09IGZhbHNlKSB7XG5cdFx0XHR0aGlzLnNldFBhZ2VJbmRleChuZXdQYWdlKTtcblx0XHR9XG5cdH0sXG5cdF9faGFuZGxlUGFnZVNpemVDaGFuZ2U6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRwYWdlU2l6ZTogZXZlbnQudGFyZ2V0LnZhbHVlXG5cdFx0fSwgKCk9PnRoaXMuc2V0UGFnZUluZGV4KDEpKTtcblx0fSxcblx0X19yZW5kZXJQYWdlcjogZnVuY3Rpb24gKGNvbHVtbnMsIHRhYmxlKXtcblx0XHR2YXIgX2NvbHVtblNpemUgPSBjb2x1bW5zLmxlbmd0aDtcblx0XHRpZighX2NvbHVtblNpemUpe1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdHZhciBfc3RhdGUgPSB0aGlzLnN0YXRlLFxuXHRcdFx0X2VsZW1lbnQgPSBudWxsLFxuXHRcdFx0X3BhZ2VyUHJvcHMgPSB7XG5cdFx0XHRcdHRvdGFsOiBfc3RhdGUudG90YWwsXG5cdFx0XHRcdGNvdW50OiBfc3RhdGUuY291bnQsXG5cdFx0XHRcdGN1cnJlbnQ6IF9zdGF0ZS5jdXJyZW50LFxuXHRcdFx0XHRwYWdlU2l6ZTogX3N0YXRlLnBhZ2VTaXplLFxuXHRcdFx0XHRvblBhZ2VDaGFuZ2VkOiB0aGlzLl9faGFuZGxlUGFnZUNoYW5nZWQsXG5cdFx0XHRcdG9uUGFnZVNpemVDaGFuZ2U6IHRoaXMuX19oYW5kbGVQYWdlU2l6ZUNoYW5nZVxuXHRcdFx0fSxcblx0XHRcdF9Db21wb25lbnQgPSB0aGlzLnByb3BzLnBhZ2VyIHx8IHBhZ2VyLlBhZ2VyO1xuXHRcdGlmKHpuLmlzKF9Db21wb25lbnQsICdzdHJpbmcnKSl7XG5cdFx0XHRfQ29tcG9uZW50ID0gem4ucGF0aCh3aW5kb3csIF9Db21wb25lbnQpO1xuXHRcdH1lbHNlIGlmKHpuLmlzKF9Db21wb25lbnQsICdvYmplY3QnKSAmJiBfQ29tcG9uZW50LmNvbXBvbmVudCl7XG5cdFx0XHRfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KF9Db21wb25lbnQuY29tcG9uZW50LCB6bi5leHRlbmQoe30sIF9Db21wb25lbnQsIF9wYWdlclByb3BzKSk7XG5cdFx0fVxuXG5cdFx0aWYodGhpcy5wcm9wcy5wYWdlclJlbmRlcil7XG5cdFx0XHRfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMucGFnZXJSZW5kZXIsIF9wYWdlclByb3BzKTtcblx0XHR9XG5cblx0XHRpZighX2VsZW1lbnQgJiYgX0NvbXBvbmVudCAmJiB6bi5pcyhfQ29tcG9uZW50LCAnZnVuY3Rpb24nKSl7XG5cdFx0IFx0X2VsZW1lbnQgPSA8X0NvbXBvbmVudCB7Li4uX3BhZ2VyUHJvcHN9IC8+O1xuXHRcdH1cblxuXHRcdGlmKHRoaXMucHJvcHMuZml4ZWRMYXlvdXQpIHtcblx0XHRcdHJldHVybiAoPGRpdj57X2VsZW1lbnR9PC9kaXY+KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PHRmb290IGNsYXNzTmFtZT1cInRhYmxlLXBhZ2VyXCI+XG5cdFx0XHRcdDx0ciBjbGFzc05hbWU9XCJwYWdlci1yb3dcIj5cblx0XHRcdFx0XHQ8dGQgY29sU3Bhbj17X2NvbHVtblNpemV9PntfZWxlbWVudH08L3RkPlxuXHRcdFx0XHQ8L3RyPlxuXHRcdFx0PC90Zm9vdD5cblx0XHQpO1xuXHR9LFxuXHRfX29uRGF0YUluaXRpYWw6IGZ1bmN0aW9uIChkYXRhKXtcblx0XHR2YXIgX21ldGhvZCA9IGRhdGEubWV0aG9kfHwncG9zdCcsXG5cdFx0XHRfcGFyYW1zID0ge30sXG5cdFx0XHRfa2V5TWFwcyA9IHpuLmRlZXBBc3NpZ24oe1xuXHRcdFx0XHR0b3RhbDogXCJ0b3RhbFwiLFxuXHRcdFx0XHRwYWdlSW5kZXg6ICdwYWdlSW5kZXgnLFxuXHRcdFx0XHRwYWdlU2l6ZTogJ3BhZ2VTaXplJyxcblx0XHRcdFx0ZGF0YTogJ2RhdGEnXG5cdFx0XHR9LCB0aGlzLnByb3BzLmtleU1hcHMpO1xuXG5cdFx0X3BhcmFtc1tfa2V5TWFwcy5wYWdlSW5kZXhdID0gdGhpcy5zdGF0ZS5wYWdlSW5kZXggfHwgMTtcblx0XHRfcGFyYW1zW19rZXlNYXBzLnBhZ2VTaXplXSA9IHRoaXMuc3RhdGUucGFnZVNpemUgfHwgMTA7XG5cdFx0aWYoX21ldGhvZCA9PSAnZ2V0Jyl7XG5cdFx0XHRkYXRhID0gem4uZGVlcEFzc2lnbihkYXRhLCB7XG5cdFx0XHRcdHBhcmFtczogX3BhcmFtc1xuXHRcdFx0fSk7XG5cdFx0fWVsc2V7XG5cdFx0XHRkYXRhID0gem4uZGVlcEFzc2lnbihkYXRhLCB7XG5cdFx0XHRcdGRhdGE6IF9wYXJhbXNcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRcblx0XHRyZXR1cm4gdGhpcy5zdGF0ZS5rZXlNYXBzID0gX2tleU1hcHMsIGRhdGE7XG5cdH0sXG5cdF9fb25EYXRhQ3JlYXRlZDogZnVuY3Rpb24gKGRhdGEsIHRhYmxlKXtcblx0XHR0aGlzLmRhdGEgPSBkYXRhO1xuXHRcdHRoaXMucHJvcHMub25EYXRhQ3JlYXRlZCAmJiB0aGlzLnByb3BzLm9uRGF0YUNyZWF0ZWQoZGF0YSwgdGFibGUsIHRoaXMpO1xuXHR9LFxuXHRfX29uRGF0YUxvYWRlZDogZnVuY3Rpb24gKGRhdGEsIHRhYmxlKXtcblx0XHRpZih0aGlzLnByb3BzLnp4bnope1xuXHRcdFx0aWYoem4uaXMoZGF0YSwgJ29iamVjdCcpICYmIGRhdGEuY29kZSAhPSAyMDApe1xuXHRcdFx0XHRyZXR1cm4gY29uc29sZS5lcnJvcihkYXRhLmRldGFpbCksIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0aWYoem4uaXMoZGF0YSwgJ29iamVjdCcpICYmIGRhdGEuY29kZSA9PSAyMDApe1xuXHRcdFx0XHRkYXRhID0gZGF0YS5yZXN1bHQ7XG5cdFx0XHR9XG5cdFx0XHRpZighem4uaXMoZGF0YSwgJ2FycmF5Jykpe1xuXHRcdFx0XHRyZXR1cm4gY29uc29sZS5lcnJvcihcIlRhYmxlUGFnZXIgQ29tcG9uZW50IERhdGEgVHlwZSBFcnJvci5cIiksIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0dmFyIF9kYXRhID0gZGF0YVswXSxcblx0XHRcdFx0X3BhZ2VyQ291bnQgPSBkYXRhWzFdWzBdLmNvdW50O1xuXHRcdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLm9uRGF0YUxvYWRlZCAmJiB0aGlzLnByb3BzLm9uRGF0YUxvYWRlZChfZGF0YSwgdGFibGUsIHRoaXMpO1xuXHRcdFx0aWYoX3JldHVybiAhPT0gZmFsc2Upe1xuXHRcdFx0XHR0YWJsZS5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0ZGF0YTogX2RhdGFcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdHRvdGFsOiBNYXRoLmNlaWwoX3BhZ2VyQ291bnQvdGhpcy5zdGF0ZS5wYWdlU2l6ZSksXG5cdFx0XHRcdFx0Y291bnQ6IF9wYWdlckNvdW50LFxuXHRcdFx0XHRcdGN1cnJlbnQ6IHRoaXMuc3RhdGUuY3VycmVudCxcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fWVsc2V7XG5cdFx0XHRpZih6bi5pcyhkYXRhLCAnYXJyYXknKSl7XG5cdFx0XHRcdHJldHVybiBjb25zb2xlLmVycm9yKCdUaGUgZGF0YSBpcyBhcnJheSwgYnV0IGl0IG5lZWQgcmV0dXJuIG9iamVjdCcpLCBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHZhciBfZGF0YSA9IGRhdGEuZGF0YTtcblx0XHRcdHZhciBfcmV0dXJuID0gdGhpcy5wcm9wcy5vbkRhdGFMb2FkZWQgJiYgdGhpcy5wcm9wcy5vbkRhdGFMb2FkZWQoX2RhdGEsIHRhYmxlLCB0aGlzKTtcblx0XHRcdGlmKF9yZXR1cm4gIT09IGZhbHNlKXtcblx0XHRcdFx0dGFibGUuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdGRhdGE6IF9kYXRhW3RoaXMuc3RhdGUua2V5TWFwcy5kYXRhXVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0dG90YWw6IE1hdGguY2VpbChfZGF0YVt0aGlzLnN0YXRlLmtleU1hcHMudG90YWxdL3RoaXMuc3RhdGUucGFnZVNpemUpLFxuXHRcdFx0XHRcdGNvdW50OiBfZGF0YVt0aGlzLnN0YXRlLmtleU1hcHMudG90YWxdLFxuXHRcdFx0XHRcdGN1cnJlbnQ6IF9kYXRhW3RoaXMuc3RhdGUua2V5TWFwcy5wYWdlSW5kZXhdXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fSxcblx0X19vbkZpbHRlckNoYW5nZTogZnVuY3Rpb24gKGZpbHRlcnMsIGRhdGEsIHRhYmxlKXtcblx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMub25GaWx0ZXJDaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkZpbHRlckNoYW5nZShmaWx0ZXJzLCBkYXRhLCB0YWJsZSk7XG5cdFx0aWYoX3JldHVybiAhPT0gZmFsc2Upe1xuXHRcdFx0dGhpcy5zZXRQYWdlSW5kZXgoMSwge1xuXHRcdFx0XHRmaWx0ZXJzOiBmaWx0ZXJzXG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PFRhYmxlIHsuLi50aGlzLnByb3BzfSBcblx0XHRcdFx0Y2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItdGFibGUtcGFnZXInLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IFxuXHRcdFx0XHRjaGlsZHJlblJlbmRlcj17dGhpcy5fX3JlbmRlclBhZ2VyfVxuXHRcdFx0XHRvbkNvbXBvbmVudERpZE1vdW50PXsodGFibGUpPT57IFxuXHRcdFx0XHRcdHRoaXMuX3RhYmxlID0gdGFibGU7IFxuXHRcdFx0XHR9fVxuXHRcdFx0XHRvbkZpbHRlckNoYW5nZT17dGhpcy5fX29uRmlsdGVyQ2hhbmdlfVxuXHRcdFx0XHRvbkRhdGFJbml0aWFsPXt0aGlzLl9fb25EYXRhSW5pdGlhbH1cblx0XHRcdFx0b25EYXRhQ3JlYXRlZD17dGhpcy5fX29uRGF0YUNyZWF0ZWR9XG5cdFx0XHRcdG9uRGF0YUxvYWRlZD17dGhpcy5fX29uRGF0YUxvYWRlZH0gLz5cblx0XHQpO1xuXHR9XG59KTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgQ2hlY2tib3ggPSByZXF1aXJlKCd6bnVpLXJlYWN0LXNlbGVjdG9yJykuQ2hlY2tib3g7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJUQ2VsbENoZWNrYm94Jyxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNoZWNrZWQ6IHRoaXMucHJvcHMuY2hlY2tlZCB8fCBmYWxzZVxuXHRcdH1cblx0fSxcblx0X19vbkNoZWNrYm94Q2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdGlmKHRoaXMucHJvcHMudGhlYWQpIHtcblx0XHRcdHRoaXMuX19vbkhlYWRDaGFuZ2UoZXZlbnQpO1xuXHRcdH1lbHNlIGlmKHRoaXMucHJvcHMudGJvZHkpIHtcblx0XHRcdHRoaXMuX19vbkJvZHlDaGFuZ2UoZXZlbnQpO1xuXHRcdH1cblx0fSxcblx0X19vbkhlYWRDaGFuZ2U6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0Y29uc29sZS5sb2coZXZlbnQuY2hlY2tlZCwgdGhpcy5wcm9wcyk7XG5cdH0sXG5cdF9fb25Cb2R5Q2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdGNvbnNvbGUubG9nKGV2ZW50LmNoZWNrZWQsIHRoaXMucHJvcHMpO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwienItdGFibGUtY2VsbC1jaGVja2JveFwiPjxDaGVja2JveCBjaGVja2VkPXt0cnVlfSBvbkNoYW5nZT17dGhpcy5fX29uQ2hlY2tib3hDaGFuZ2V9Lz48L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIENoZWNrYm94OiByZXF1aXJlKCcuL0NoZWNrYm94JyksXG4gICAgLy9CdXR0b25zOiByZXF1aXJlKCcuL0J1dHRvbnMnKSxcbiAgICAvL0lucHV0OiByZXF1aXJlKCcuL0lucHV0JyksXG4gICAgLy9DYWxjdWxhdG9yOiByZXF1aXJlKCcuL0NhbGN1bGF0b3InKVxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICB0YWJsZTogcmVxdWlyZSgnLi90YWJsZS9pbmRleCcpLFxuICAgIGNlbGw6IHJlcXVpcmUoJy4vY2VsbC9pbmRleCcpLFxuICAgIFBvcHVwVGFibGU6IHJlcXVpcmUoJy4vUG9wdXBUYWJsZScpLFxuICAgIFRhYmxlOiByZXF1aXJlKCcuL1RhYmxlJyksXG4gICAgVGFibGVFZGl0b3I6IHJlcXVpcmUoJy4vVGFibGVFZGl0b3InKSxcbiAgICBUYWJsZVBhZ2VyOiByZXF1aXJlKCcuL1RhYmxlUGFnZXInKVxufTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJUYWJsZUNvbGdyb3VwJyxcblx0X192YWxpZGF0ZUNvbHVtbjogZnVuY3Rpb24gKGNvbHVtbiwgaW5kZXgpe1xuXHRcdGlmKGNvbHVtbi52YWxpZGF0ZSA9PT0gZmFsc2UpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0aWYoem4uaXMoY29sdW1uLnZhbGlkYXRlLCAnZnVuY3Rpb24nKSkge1xuXHRcdFx0dmFyIF9yZXR1cm4gPSBjb2x1bW4udmFsaWRhdGUuYXBwbHkobnVsbCwgW2NvbHVtbiwgaW5kZXhdKTtcblx0XHRcdGlmKF9yZXR1cm4gPT09IGZhbHNlKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZVxuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHZhciBfa2V5TWFwcGluZyA9IHRoaXMucHJvcHMua2V5TWFwcGluZyB8fCB7IH07XG5cdFx0cmV0dXJuIChcblx0XHRcdDxjb2xncm91cD5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdCh0aGlzLnByb3BzLmNvbHVtbnN8fFtdKS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG5cdFx0XHRcdFx0XHRpZih0aGlzLl9fdmFsaWRhdGVDb2x1bW4oaXRlbSwgaW5kZXgpID09PSBmYWxzZSl7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0dmFyIF93aWR0aEtleSA9IF9rZXlNYXBwaW5nLndpZHRoIHx8ICd3aWR0aCcsIF93aWR0aFZhbHVlID0gaXRlbVtfd2lkdGhLZXldO1xuXHRcdFx0XHRcdFx0c3dpdGNoKHpuLnR5cGUoX3dpZHRoVmFsdWUpKSB7XG5cdFx0XHRcdFx0XHRcdGNhc2UgJ2Z1bmN0aW9uJzpcblx0XHRcdFx0XHRcdFx0XHRfd2lkdGhWYWx1ZSA9IF93aWR0aFZhbHVlLmFwcGx5KG51bGwsIFtpdGVtLCBpbmRleF0pO1xuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRyZXR1cm4gPGNvbCBrZXk9e2luZGV4fSBzdHlsZT17eyB3aWR0aDogX3dpZHRoVmFsdWUgfX0gLz47XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fVxuXHRcdFx0PC9jb2xncm91cD5cblx0XHQpO1xuXHR9XG59KTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBUUm93ID0gcmVxdWlyZSgnLi9UUm93Jyk7XG52YXIgbG9hZGVyID0gcmVxdWlyZSgnem51aS1yZWFjdC1sb2FkZXInKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUlRCb2R5Jyxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpe1xuXHRcdHZhciBfcGFnZVNpemUgPSB0aGlzLnByb3BzLnBhZ2VTaXplIHx8IDUwO1xuXHRcdHZhciBfY29sdW1uS2V5TWFwID0ge30sIF9kZWZhdWx0ID0ge307XG5cdFx0Zm9yKHZhciBjb2x1bW4gb2YgdGhpcy5wcm9wcy5jb2x1bW5zKXtcblx0XHRcdF9jb2x1bW5LZXlNYXBbY29sdW1uLm5hbWVdID0gY29sdW1uO1xuXHRcdFx0aWYoY29sdW1uLnZhbHVlICE9PSBudWxsICYmIGNvbHVtbi52YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdF9kZWZhdWx0W2NvbHVtbi5uYW1lXSA9IGNvbHVtbi52YWx1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0YWN0aXZlOiBudWxsLFxuXHRcdFx0Y2hlY2tlZHM6IFtdLFxuXHRcdFx0Y2xhc3NOYW1lOiAnJyxcblx0XHRcdGNvbHVtbktleU1hcDogX2NvbHVtbktleU1hcCxcblx0XHRcdGRlZmF1bHQ6IF9kZWZhdWx0LFxuXHRcdFx0cGFnZUluZGV4OiB0aGlzLnByb3BzLnBhZ2VJbmRleCB8fCAxLFxuXHRcdFx0cGFnZVNpemU6IF9wYWdlU2l6ZSxcblx0XHRcdHN0eWxlOiB7fSxcblx0XHRcdGxvYWRpbmc6IGZhbHNlXG5cdFx0fTtcblx0fSxcblx0Y29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uICgpe1xuXHRcdGZvcih2YXIgaXRlbSBvZiB0aGlzLnByb3BzLmRhdGEpe1xuXHRcdFx0dGhpcy5fX2luaXRpYWxEYXRhSXRlbShpdGVtKTtcblx0XHR9XG5cdH0sXG5cdF9faW5pdGlhbERhdGFJdGVtOiBmdW5jdGlvbiAoZGF0YSl7XG5cdFx0dmFyIF9kZWZhdWx0ID0gdGhpcy5zdGF0ZS5kZWZhdWx0LCBfY29sdW1uS2V5TWFwID0gdGhpcy5zdGF0ZS5jb2x1bW5LZXlNYXAsIF92YWx1ZSA9IG51bGw7XG5cdFx0Zm9yKHZhciBrZXkgaW4gX2RlZmF1bHQpe1xuXHRcdFx0X3ZhbHVlID0gX2RlZmF1bHRba2V5XTtcblx0XHRcdGlmKHR5cGVvZiBfdmFsdWUgPT0gJ3N0cmluZycgJiYgX3ZhbHVlLmluZGV4T2YoJ3snKSAhPSAtMSAmJiBfdmFsdWUuaW5kZXhPZignfScpICE9LTEpIHtcblx0XHRcdFx0X3ZhbHVlID0gX3ZhbHVlLmZvcm1hdChkYXRhfHx7fSk7XG5cdFx0XHRcdGlmKF9jb2x1bW5LZXlNYXBba2V5XSkge1xuXHRcdFx0XHRcdHN3aXRjaChfY29sdW1uS2V5TWFwW2tleV0uZGF0YVR5cGUpIHtcblx0XHRcdFx0XHRcdGNhc2UgJ051bWJlcic6XG5cdFx0XHRcdFx0XHRcdGlmKF92YWx1ZS5pbmRleE9mKCd7JykgPT0gLTEpe1xuXHRcdFx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRfdmFsdWUgPSBldmFsKF92YWx1ZSk7XG5cdFx0XHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRfdmFsdWUgPSAwO1xuXHRcdFx0XHRcdFx0XHRcdFx0em4uZXJyb3IoZXJyKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRjYXNlICdQcmljZSc6XG5cdFx0XHRcdFx0XHRcdF92YWx1ZSA9IHpudWkucmVhY3Quc3RyaW5naWZ5UHJpY2UoX3ZhbHVlKTtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0ZGF0YVtrZXldID0gX3ZhbHVlO1xuXHRcdFx0fVxuXG5cblx0XHRcdGlmKGRhdGFba2V5XSA9PSBudWxsKSB7XG5cdFx0XHRcdGRhdGFba2V5XSA9IF92YWx1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gZGF0YTtcblx0fSxcblx0X19nZXREYXRhOiBmdW5jdGlvbiAocGFnZUluZGV4LCBwYWdlU2l6ZSl7XG5cdFx0dmFyIF9wYWdlSW5kZXggPSBwYWdlSW5kZXggfHwgdGhpcy5zdGF0ZS5wYWdlSW5kZXg7XG5cdFx0dmFyIF9wYWdlU2l6ZSA9IHBhZ2VTaXplIHx8IHRoaXMuc3RhdGUucGFnZVNpemU7XG5cdFx0cmV0dXJuIHRoaXMucHJvcHMuZGF0YS5zbGljZSgoX3BhZ2VJbmRleC0xKSAqIF9wYWdlU2l6ZSwgTWF0aC5taW4oX3BhZ2VJbmRleCAqIF9wYWdlU2l6ZSwgdGhpcy5wcm9wcy5kYXRhLmxlbmd0aCkpO1xuXHR9LFxuXHRfX3JlbmRlckxvYWRpbmc6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMubG9hZGluZ1JlbmRlciwge1xuXHRcdFx0dGJvZHk6IHRoaXNcblx0XHR9LCB0aGlzLnByb3BzLmNvbnRleHQpO1xuXG5cdFx0aWYoIV9lbGVtZW50KXtcblx0XHQgXHRfZWxlbWVudCA9IDxsb2FkZXIuRGF0YUxvYWRlciBsb2FkZXI9XCJ3YXZlXCIgdGl0bGU9eydMb2FkaW5nLi4uJ30gLz47XG5cdFx0fVxuXG5cdFx0dmFyIF9sb2FkaW5nID0gem4uZXh0ZW5kKHsgY2xhc3NOYW1lOiAnJywgc3R5bGU6IHt9IH0sIHRoaXMucHJvcHMubG9hZGluZyk7XG5cdFx0cmV0dXJuIChcblx0XHRcdDx0ciBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwidGJvZHktbG9hZGluZ1wiLCBfbG9hZGluZy5jbGFzc05hbWUpfSBzdHlsZT17X2xvYWRpbmcuc3R5bGV9PlxuXHRcdFx0XHQ8dGQgY29sU3Bhbj17dGhpcy5wcm9wcy5jb2x1bW5zLmxlbmd0aH0+e19lbGVtZW50fTwvdGQ+XG5cdFx0XHQ8L3RyPlxuXHRcdCk7XG5cdH0sXG5cdF9fcmVuZGVyRW1wdHk6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMuZW1wdHlSZW5kZXIsIHtcblx0XHRcdHRib2R5OiB0aGlzXG5cdFx0fSwgdGhpcy5wcm9wcy5jb250ZXh0KTtcblxuXHRcdGlmKCFfZWxlbWVudCl7XG5cdFx0IFx0X2VsZW1lbnQgPSAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZW1wdHktY29udGVudFwiPlxuXHRcdFx0XHRcdDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhc1wiIGRhdGEtaWNvbj1cImRlc2t0b3BcIiBjbGFzc05hbWU9XCJzdmctaW5saW5lLS1mYSBmYS1kZXNrdG9wIGZhLXctMTggXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDU3NiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk01MjggMEg0OEMyMS41IDAgMCAyMS41IDAgNDh2MzIwYzAgMjYuNSAyMS41IDQ4IDQ4IDQ4aDE5MmwtMTYgNDhoLTcyYy0xMy4zIDAtMjQgMTAuNy0yNCAyNHMxMC43IDI0IDI0IDI0aDI3MmMxMy4zIDAgMjQtMTAuNyAyNC0yNHMtMTAuNy0yNC0yNC0yNGgtNzJsLTE2LTQ4aDE5MmMyNi41IDAgNDgtMjEuNSA0OC00OFY0OGMwLTI2LjUtMjEuNS00OC00OC00OHptLTE2IDM1Mkg2NFY2NGg0NDh2Mjg4elwiPjwvcGF0aD48L3N2Zz5cblx0XHRcdFx0XHQ8c3Bhbj5FbXB0eTwvc3Bhbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH1cblx0XHR2YXIgX2VtcHR5ID0gem4uZXh0ZW5kKHsgY2xhc3NOYW1lOiAnJywgc3R5bGU6IHt9IH0sIHRoaXMucHJvcHMuZW1wdHkpO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8dHIgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInRib2R5LWVtcHR5XCIsIF9lbXB0eS5jbGFzc05hbWUpfSBzdHlsZT17X2VtcHR5LnN0eWxlfT5cblx0XHRcdFx0PHRkIGNvbFNwYW49e3RoaXMucHJvcHMuY29sdW1ucy5sZW5ndGh9PntfZWxlbWVudH08L3RkPlxuXHRcdFx0PC90cj5cblx0XHQpO1xuXHR9LFxuXHRfX29uUm93Q2xpY2s6IGZ1bmN0aW9uIChldmVudCkge1xuXHRcdHZhciBfZGF0YSA9IGV2ZW50LmRhdGE7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRhY3RpdmU6IF9kYXRhLnRyb3cucHJvcHMuZGF0YVxuXHRcdH0pO1xuXHRcdGV2ZW50LnRib2R5ID0gdGhpcztcblx0XHR0aGlzLnByb3BzLm9uUm93Q2xpY2sgJiYgdGhpcy5wcm9wcy5vblJvd0NsaWNrKGV2ZW50KTtcblx0fSxcblx0X19vbkNlbGxDbGljazogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHRldmVudC50Ym9keSA9IHRoaXM7XG5cdFx0dGhpcy5wcm9wcy5vbkNlbGxDbGljayAmJiB0aGlzLnByb3BzLm9uQ2VsbENsaWNrKGV2ZW50KTtcblx0fSxcblx0X19yZW5kZXJSb3c6IGZ1bmN0aW9uIChpdGVtLCBpbmRleCl7XG5cdFx0aWYoIXpuLmlzKGl0ZW0sICdvYmplY3QnKSkgeyByZXR1cm4gbnVsbDt9XG5cdFx0dmFyIF90ZW1wID0gdGhpcy5wcm9wcy5lYWNoUm93RGF0YSAmJiB0aGlzLnByb3BzLmVhY2hSb3dEYXRhKGl0ZW0sIGluZGV4LCB0aGlzKTtcblx0XHRpZihfdGVtcCAmJiB6bi5pcyhfdGVtcCwgJ29iamVjdCcpKXtcblx0XHRcdGl0ZW0gPSBfdGVtcDtcblx0XHR9XG5cdFx0dmFyIF9lbGVtZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQodGhpcy5wcm9wcy5yb3dSZW5kZXIsIHtcblx0XHRcdGRhdGE6IGl0ZW0sXG5cdFx0XHRyb3dJbmRleDogaW5kZXgsXG5cdFx0XHR0Ym9keTogdGhpc1xuXHRcdH0sIHRoaXMucHJvcHMuY29udGV4dCk7XG5cblx0XHRpZihfZWxlbWVudCl7XG5cdFx0XHRyZXR1cm4gX2VsZW1lbnQ7XG5cdFx0fVxuXHRcdHZhciBfcm93S2V5ID0gdGhpcy5wcm9wcy5yb3dLZXk7XG5cdFx0dmFyIF9rZXkgPSBpdGVtW19yb3dLZXldIHx8IGluZGV4O1xuXHRcdHJldHVybiA8VFJvdyBrZXk9e19rZXkgKyAnLScgKyBpbmRleH0gcm93SW5kZXg9e2luZGV4fSB7Li4udGhpcy5wcm9wcy5yb3d9IFxuXHRcdFx0XHRcdGNvbnRleHQ9e3RoaXMucHJvcHMuY29udGV4dH0gXG5cdFx0XHRcdFx0Y2VsbD17dGhpcy5wcm9wcy5jZWxsfVxuXHRcdFx0XHRcdGNlbGxSZW5kZXI9e3RoaXMucHJvcHMuY2VsbFJlbmRlcn1cblx0XHRcdFx0XHRjb2x1bW5zPXt0aGlzLnByb3BzLmNvbHVtbnN9IFxuXHRcdFx0XHRcdGZpeGVkQ29sdW1ucz17dGhpcy5wcm9wcy5maXhlZENvbHVtbnN9XG5cdFx0XHRcdFx0dGJvZHk9e3RoaXN9XG5cdFx0XHRcdFx0YWN0aXZlPXt0aGlzLnN0YXRlLmFjdGl2ZSA9PSBpdGVtfSBcblx0XHRcdFx0XHRkYXRhPXtpdGVtfSBcblx0XHRcdFx0XHRjaGVja2VkPXt0aGlzLnN0YXRlLmNoZWNrZWRzLmluZGV4T2YoaXRlbSkgIT09IC0xfSBcblx0XHRcdFx0XHRvblJvd0NsaWNrPXt0aGlzLl9fb25Sb3dDbGlja31cblx0XHRcdFx0XHRvbkNlbGxDbGljaz17dGhpcy5fX29uQ2VsbENsaWNrfSAvPjtcblx0fSxcblx0X19wYWdlQ2hhbmdlOiBmdW5jdGlvbiAocGFnZUluZGV4KXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHBhZ2VJbmRleDogcGFnZUluZGV4XG5cdFx0fSk7XG5cdH0sXG5cdF9fcGFnZXNSZW5kZXI6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfcGFnZUNvdW50ID0gTWF0aC5jZWlsKHRoaXMucHJvcHMuZGF0YS5sZW5ndGggLyB0aGlzLnN0YXRlLnBhZ2VTaXplKSwgX3BhZ2VzID0gW107XG5cdFx0aWYoX3BhZ2VDb3VudCA+IDEpIHtcblx0XHRcdGZvcih2YXIgaSA9IDE7IGkgPCBfcGFnZUNvdW50ICsgMTsgaSsrKSB7IF9wYWdlcy5wdXNoKGkpOyB9XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8dHIgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInRib2R5LXBhZ2VzXCIsICcnKX0+XG5cdFx0XHRcdFx0PHRkIGNvbFNwYW49e3RoaXMucHJvcHMuY29sdW1ucy5sZW5ndGh9PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkYXRhLXBhZ2VcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwYWdlc1wiPlxuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdF9wYWdlcy5tYXAoKGksIGluZGV4KT0+e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gPHNwYW4ga2V5PXtpbmRleH0gY2xhc3NOYW1lPXsncGFnZSAnICsgKHRoaXMuc3RhdGUucGFnZUluZGV4PT1pPydhY3RpdmUnOicnKX0gb25DbGljaz17KCk9PnRoaXMuX19wYWdlQ2hhbmdlKGkpfT57aX08L3NwYW4+O1xuXHRcdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJwYWdlLWNvdW50XCI+5YWxIHt0aGlzLnByb3BzLmRhdGEubGVuZ3RofSDmnaE8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L3RkPlxuXHRcdFx0XHQ8L3RyPlxuXHRcdFx0KTtcblx0XHR9XG5cdH0sXG5cdF9fcmVuZGVyRGF0YTogZnVuY3Rpb24gKCl7XG5cdFx0aWYodGhpcy5wcm9wcy5kYXRhID09IG51bGwgfHwgKHRoaXMucHJvcHMuZGF0YSAmJiAhdGhpcy5wcm9wcy5kYXRhLmxlbmd0aCkpe1xuXHRcdFx0cmV0dXJuIHRoaXMuX19yZW5kZXJFbXB0eSgpO1xuXHRcdH1cblx0XHR2YXIgX3BhZ2VDb3VudCA9IE1hdGguY2VpbCh0aGlzLnByb3BzLmRhdGEubGVuZ3RoIC8gdGhpcy5zdGF0ZS5wYWdlU2l6ZSk7XG5cdFx0aWYoX3BhZ2VDb3VudCA+IDEpe1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PD5cblx0XHRcdFx0XHR7dGhpcy5fX3BhZ2VzUmVuZGVyKCl9XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGhpcy5fX2dldERhdGEodGhpcy5zdGF0ZS5wYWdlSW5kZXgsIHRoaXMuc3RhdGUucGFnZVNpemUpLm1hcCh0aGlzLl9fcmVuZGVyUm93KVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0PC8+XG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8PlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5kYXRhLm1hcCh0aGlzLl9fcmVuZGVyUm93KVxuXHRcdFx0XHR9XG5cdFx0XHQ8Lz5cblx0XHQpO1xuXHR9LFxuXHRfX3JlbmRlcjogZnVuY3Rpb24gKCl7XG5cdFx0aWYodGhpcy5wcm9wcy5sb2FkaW5nIHx8IHRoaXMuc3RhdGUubG9hZGluZykge1xuXHRcdFx0cmV0dXJuIHRoaXMuX19yZW5kZXJMb2FkaW5nKCk7XG5cdFx0fWVsc2V7XG5cdFx0XHRyZXR1cm4gdGhpcy5fX3JlbmRlckRhdGEoKTtcblx0XHR9XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHRib2R5IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci10YWJsZS10Ym9keVwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSwgdGhpcy5zdGF0ZS5jbGFzc05hbWUpfSBzdHlsZT17em51aS5yZWFjdC5zdHlsZSh0aGlzLnByb3BzLnN0eWxlLCB0aGlzLnN0YXRlLnN0eWxlKX0+XG5cdFx0XHRcdHsgdGhpcy5fX3JlbmRlcigpIH1cblx0XHRcdDwvdGJvZHk+XG5cdFx0KTtcblx0fVxufSk7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJUQm9keUVtcHR5Jyxcblx0X19yZW5kZXJFbXB0eTogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF9lbGVtZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQodGhpcy5wcm9wcy5lbXB0eVJlbmRlciwge1xuXHRcdFx0dGJvZHk6IHRoaXNcblx0XHR9LCB0aGlzLnByb3BzLmNvbnRleHQpO1xuXG5cdFx0aWYoIV9lbGVtZW50KXtcblx0XHQgXHRfZWxlbWVudCA9IDxkaXYgY2xhc3NOYW1lPVwiZW1wdHktY29udGVudFwiPlxuXHRcdFx0XHQgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFzXCIgZGF0YS1pY29uPVwiZGVza3RvcFwiIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUtLWZhIGZhLWRlc2t0b3AgZmEtdy0xOCBcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTc2IDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTUyOCAwSDQ4QzIxLjUgMCAwIDIxLjUgMCA0OHYzMjBjMCAyNi41IDIxLjUgNDggNDggNDhoMTkybC0xNiA0OGgtNzJjLTEzLjMgMC0yNCAxMC43LTI0IDI0czEwLjcgMjQgMjQgMjRoMjcyYzEzLjMgMCAyNC0xMC43IDI0LTI0cy0xMC43LTI0LTI0LTI0aC03MmwtMTYtNDhoMTkyYzI2LjUgMCA0OC0yMS41IDQ4LTQ4VjQ4YzAtMjYuNS0yMS41LTQ4LTQ4LTQ4em0tMTYgMzUySDY0VjY0aDQ0OHYyODh6XCI+PC9wYXRoPjwvc3ZnPlxuXHRcdFx0XHQgPHNwYW4+RW1wdHk8L3NwYW4+XG5cdFx0XHQgPC9kaXY+O1xuXHRcdH1cblx0XHR2YXIgX2VtcHR5ID0gem4uZXh0ZW5kKHsgY2xhc3NOYW1lOiAnJywgc3R5bGU6IHt9IH0sIHRoaXMucHJvcHMuZW1wdHkpO1xuXHRcdHJldHVybiA8dHIgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInRib2R5LWVtcHR5XCIsIF9lbXB0eS5jbGFzc05hbWUpfSBzdHlsZT17X2VtcHR5LnN0eWxlfT5cblx0XHRcdDx0ZCBjb2xTcGFuPXt0aGlzLnByb3BzLmNvbHVtbnMubGVuZ3RofT57X2VsZW1lbnR9PC90ZD5cblx0XHQ8L3RyPjtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8dGJvZHkgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXRhYmxlLXRib2R5LWVtcHR5XCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gc3R5bGU9e3pudWkucmVhY3Quc3R5bGUodGhpcy5wcm9wcy5zdHlsZSl9PlxuXHRcdFx0XHR7IHRoaXMuX19yZW5kZXJFbXB0eSgpIH1cblx0XHRcdDwvdGJvZHk+XG5cdFx0KTtcblx0fVxufSk7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUmVhY3RET00gPSB6bnVpLlJlYWN0RE9NIHx8IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSVENlbGwnLFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y2xhc3NOYW1lOiAnJyxcblx0XHRcdHN0eWxlOiB7fSxcblx0XHRcdGRpc2FibGVkOiB0aGlzLnByb3BzLmRpc2FibGVkLFxuXHRcdFx0Y2hlY2tlZDogdGhpcy5wcm9wcy5jaGVja2VkLFxuXHRcdFx0YWN0aXZlOiB0aGlzLnByb3BzLmFjdGl2ZVxuXHRcdH1cblx0fSxcblx0X19yZW5kZXJDZWxsQ29udGVudDogZnVuY3Rpb24gKCl7XG5cdFx0aWYodGhpcy5wcm9wcy5jaGlsZHJlbikge1xuXHRcdFx0cmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW47XG5cdFx0fVxuXHRcdFxuXHRcdHZhciBfdmFsdWUgPSBudWxsO1xuXHRcdGlmKHRoaXMucHJvcHMuZGF0YSAmJiB0aGlzLnByb3BzLm5hbWUpIHtcblx0XHRcdF92YWx1ZSA9IHRoaXMucHJvcHMuZGF0YVt0aGlzLnByb3BzLm5hbWVdO1xuXHRcdH1cblxuXHRcdHZhciBfcmVuZGVyID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQodGhpcy5wcm9wcy5yZW5kZXIgfHwgdGhpcy5wcm9wcy5ib2R5LCB7XG5cdFx0XHRyb3dJbmRleDogdGhpcy5wcm9wcy5yb3dJbmRleCxcblx0XHRcdGNlbGxJbmRleDogdGhpcy5wcm9wcy5jZWxsSW5kZXgsIFxuXHRcdFx0Y29sdW1uOiB0aGlzLnByb3BzLmNvbHVtbixcblx0XHRcdGRhdGE6IHRoaXMucHJvcHMuZGF0YSxcblx0XHRcdHZhbHVlOiBfdmFsdWUsXG5cdFx0XHR0Y2VsbDogdGhpcyxcblx0XHRcdHRyb3c6IHRoaXMucHJvcHMudHJvdyxcblx0XHRcdHRib2R5OiB0aGlzLnByb3BzLnRib2R5LFxuXHRcdFx0dGFibGU6IHRoaXMucHJvcHMudGJvZHkucHJvcHMudGFibGVcblx0XHR9LCB0aGlzLnByb3BzLmNvbnRleHQpO1xuXHRcdFxuXHRcdGlmKF9yZW5kZXIpe1xuXHRcdFx0cmV0dXJuIF9yZW5kZXI7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY2VsbC1sYWJlbFwiIHRpdGxlPXtfdmFsdWV9PntfdmFsdWV9PC9kaXY+O1xuXHR9LFxuXHRfX2NlbGxDbGljazogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHR2YXIgX3RoaXMgPSB0aGlzO1xuXHRcdGV2ZW50LmRhdGEgPSB7XG5cdFx0XHRmaW5kVERET006IGZ1bmN0aW9uICgpe1xuXHRcdFx0XHRyZXR1cm4gUmVhY3RET00uZmluZERPTU5vZGUoX3RoaXMpO1xuXHRcdFx0fSxcblx0XHRcdHRjZWxsOiB0aGlzXG5cdFx0fTtcblx0XHR0aGlzLnByb3BzLm9uQ2xpY2sgJiYgdGhpcy5wcm9wcy5vbkNsaWNrKGV2ZW50KTtcblx0XHR0aGlzLnByb3BzLm9uQ2VsbENsaWNrICYmIHRoaXMucHJvcHMub25DZWxsQ2xpY2soZXZlbnQpO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0dmFyIF9jb2x1bW4gPSB0aGlzLnByb3BzLmNvbHVtbiB8fCB7fTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHRkIGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci10YWJsZS10Y2VsbFwiLCAoX2NvbHVtbi5maXhlZD8nZml4ZWQnOicnKSwgdGhpcy5wcm9wcy5jbGFzc05hbWUsIF9jb2x1bW4uYm9keUNsYXNzTmFtZSwgdGhpcy5zdGF0ZS5jbGFzc05hbWUpfSBzdHlsZT17em51aS5yZWFjdC5zdHlsZSh0aGlzLnByb3BzLnN0eWxlLCBfY29sdW1uLmJvZHlTdHlsZSwgdGhpcy5zdGF0ZS5zdHlsZSwgX2NvbHVtbi5maXhlZFN0eWxlcyl9XHRcblx0XHRcdFx0ZGF0YS1kaXNhYmxlZD17dGhpcy5zdGF0ZS5kaXNhYmxlZH1cblx0XHRcdFx0ZGF0YS1jaGVja2VkPXt0aGlzLnN0YXRlLmNoZWNrZWR9XG5cdFx0XHRcdGRhdGEtYWN0aXZlPXt0aGlzLnN0YXRlLmFjdGl2ZX1cblx0XHRcdFx0b25DbGljaz17dGhpcy5fX2NlbGxDbGlja30gPlxuXHRcdFx0XHR7dGhpcy5fX3JlbmRlckNlbGxDb250ZW50KCl9XG5cdFx0XHQ8L3RkPlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIGZpbHRlciA9IHJlcXVpcmUoJ3pudWktcmVhY3QtZmlsdGVyJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTogJ1pSRmlsdGVyJyxcblx0Z2V0SW5pdGlhbFN0YXRlOmZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNsYXNzTmFtZTogJycsXG5cdFx0XHRzdHlsZToge30sXG5cdFx0XHRkYXRhOiB7fVxuXHRcdH1cblx0fSxcblx0X19vbkZpbHRlckNoYW5nZTogZnVuY3Rpb24gKGV2ZW50LCBpbnB1dCwgZmlsdGVyRmllbGQpe1xuXHRcdGlmKGV2ZW50Lm5hbWUgJiYgZXZlbnQub3B0KSB7XG5cdFx0XHRpZihldmVudC52YWx1ZSA9PT0gbnVsbCB8fCBldmVudC52YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IGV2ZW50LnZhbHVlID09PSAnJykge1xuXHRcdFx0XHR0aGlzLnN0YXRlLmRhdGFbZXZlbnQubmFtZV0gPSBudWxsO1xuXHRcdFx0XHRkZWxldGUgdGhpcy5zdGF0ZS5kYXRhW2V2ZW50Lm5hbWVdO1xuXHRcdFx0fWVsc2UgaWYoIWV2ZW50LnZhbHVlICYmIGlucHV0ICYmIGlucHV0LnByb3BzICYmICFpbnB1dC5wcm9wcy5lbXB0eVZhbHVlRW5hYmxlZCl7XG5cdFx0XHRcdHRoaXMuc3RhdGUuZGF0YVtldmVudC5uYW1lXSA9IG51bGw7XG5cdFx0XHRcdGRlbGV0ZSB0aGlzLnN0YXRlLmRhdGFbZXZlbnQubmFtZV07XG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0dGhpcy5zdGF0ZS5kYXRhW2V2ZW50Lm5hbWVdID0ge1xuXHRcdFx0XHRcdHZhbHVlOiBldmVudC52YWx1ZSxcblx0XHRcdFx0XHRvcHQ6IGV2ZW50Lm9wdFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdH1cblx0XHR0aGlzLnByb3BzLm9uRmlsdGVyICYmIHRoaXMucHJvcHMub25GaWx0ZXIodGhpcy5zdGF0ZS5kYXRhKTtcblx0fSxcblx0X19vbkZpbHRlckNhbmNlbDogZnVuY3Rpb24gKG5hbWUpe1xuXHRcdGlmKG5hbWUgJiYgdGhpcy5zdGF0ZS5kYXRhKXtcblx0XHRcdHRoaXMuc3RhdGUuZGF0YVtuYW1lXSA9IG51bGw7XG5cdFx0XHRkZWxldGUgdGhpcy5zdGF0ZS5kYXRhW25hbWVdO1xuXHRcdH1cblx0fSxcblx0X192YWxpZGF0ZUNvbHVtbjogZnVuY3Rpb24gKGNvbHVtbiwgaW5kZXgpe1xuXHRcdGlmKGNvbHVtbi52YWxpZGF0ZSA9PT0gZmFsc2UpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0aWYoem4uaXMoY29sdW1uLnZhbGlkYXRlLCAnZnVuY3Rpb24nKSkge1xuXHRcdFx0dmFyIF9yZXR1cm4gPSBjb2x1bW4udmFsaWRhdGUuYXBwbHkobnVsbCwgW2NvbHVtbiwgaW5kZXhdKTtcblx0XHRcdGlmKF9yZXR1cm4gPT09IGZhbHNlKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZVxuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0X19yZW5kZXJDZWxsOiBmdW5jdGlvbiAoY29sdW1uLCBpbmRleCl7XG5cdFx0aWYodGhpcy5fX3ZhbGlkYXRlQ29sdW1uKGNvbHVtbiwgaW5kZXgpID09PSBmYWxzZSl7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0aWYoIXpuLmlzKGNvbHVtbiwgJ29iamVjdCcpKSB7IHJldHVybiBudWxsOyB9XG5cdFx0dmFyIF9lbGVtZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQodGhpcy5wcm9wcy5jZWxsUmVuZGVyLCB7XG5cdFx0XHRjb2x1bW46IGNvbHVtbixcblx0XHRcdGNlbGxJbmRleDogaW5kZXgsIFxuXHRcdFx0dGZpbHRlcjogdGhpc1xuXHRcdH0pO1xuXHRcdGlmKF9lbGVtZW50KXtcblx0XHRcdHJldHVybiBfZWxlbWVudDtcblx0XHR9XG5cdFx0XG5cdFx0dmFyIF9jb250ZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQoY29sdW1uLnJlbmRlciwge1xuXHRcdFx0Y29sdW1uOiBjb2x1bW4sXG5cdFx0XHRjZWxsSW5kZXg6IGluZGV4LCBcblx0XHRcdHRmaWx0ZXI6IHRoaXNcblx0XHR9KTtcblxuXHRcdGlmKCFfY29udGVudCAmJiBjb2x1bW4uZmlsdGVyKSB7XG5cdFx0XHR2YXIgX2ZpbHRlciA9IGNvbHVtbi5maWx0ZXI7XG5cdFx0XHRpZih6bi5pcyhfZmlsdGVyLCAnZnVuY3Rpb24nKSkge1xuXHRcdFx0XHRpZihfZmlsdGVyLnByb3RvdHlwZSAmJiBfZmlsdGVyLnByb3RvdHlwZS5yZW5kZXIpIHtcblx0XHRcdFx0XHRfY29udGVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KF9maWx0ZXIsIHtcblx0XHRcdFx0XHRcdGNvbHVtbjogY29sdW1uLFxuXHRcdFx0XHRcdFx0dGZpbHRlcjogdGhpc1xuXHRcdFx0XHRcdH0pO1xuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICBfZmlsdGVyID0gX2ZpbHRlci5jYWxsKG51bGwsIGNvbHVtbiwgdGhpcyk7XG4gICAgICAgICAgICAgICAgfVxuXHRcdFx0fVxuXG5cdFx0XHRpZih6bi5pcyhfZmlsdGVyLCAnb2JqZWN0JykpIHtcblx0XHRcdFx0dmFyIF9rZXkgPSBfZmlsdGVyLmtleSB8fCBjb2x1bW4ubmFtZTtcblx0XHRcdFx0aWYoem4uaXMoX2tleSwgJ2Z1bmN0aW9uJykpIHtcblx0XHRcdFx0XHRfa2V5ID0gX2tleS5jYWxsKG51bGwsIGNvbHVtbiwgdGhpcyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRfY29udGVudCA9IDxmaWx0ZXIuRmlsdGVyRmllbGQga2V5PXtfa2V5IHx8IHpuLnV1aWQoKX0gey4uLl9maWx0ZXJ9IG5hbWU9e2NvbHVtbi5uYW1lfSBvbkZpbHRlckNoYW5nZT17dGhpcy5fX29uRmlsdGVyQ2hhbmdlfSBvbkNhbmNlbD17dGhpcy5fX29uRmlsdGVyQ2FuY2VsfSAvPjtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR2YXIgX2NlbGwgPSB6bi5leHRlbmQoeyBzdHlsZToge30sIGNsYXNzTmFtZTogJycgfSwgdGhpcy5wcm9wcy5jZWxsKTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHRkIGtleT17aW5kZXh9IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3RmaWx0ZXItY2VsbCcsIChjb2x1bW4uZml4ZWQ/J2ZpeGVkJzonJyksIF9jZWxsLmNsYXNzTmFtZSl9IHN0eWxlPXt6bnVpLnJlYWN0LnN0eWxlKF9jZWxsLnN0eWxlLCBjb2x1bW4uZml4ZWRTdHlsZXMpfT5cblx0XHRcdFx0eyBfY29udGVudCB9XG5cdFx0XHQ8L3RkPlxuXHRcdCk7XG5cdH0sXG5cdF9fcmVuZGVyUm93OiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX2VsZW1lbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudCh0aGlzLnByb3BzLnJvd1JlbmRlciwge1xuXHRcdFx0dGZpbHRlcjogdGhpc1xuXHRcdH0pO1xuXHRcdGlmKF9lbGVtZW50KXtcblx0XHRcdHJldHVybiBfZWxlbWVudDtcblx0XHR9XG5cdFx0dmFyIF9yb3cgPSB6bi5leHRlbmQoeyBjbGFzc05hbWU6ICcnLCBzdHlsZToge30gfSwgdGhpcy5wcm9wcy5yb3cpO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8dHIgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInRmaWx0ZXItcm93IHpyLXRhYmxlLXRyb3dcIiwgX3Jvdy5jbGFzc05hbWUpfSBzdHlsZT17X3Jvdy5zdHlsZX0+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHQodGhpcy5wcm9wcy5jb2x1bW5zfHxbXSkubWFwKHRoaXMuX19yZW5kZXJDZWxsKVxuXHRcdFx0XHR9XG5cdFx0XHQ8L3RyPlxuXHRcdCk7XG5cdH0sXG5cdHJlbmRlcjpmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8dGhlYWQgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXRhYmxlLXRmaWx0ZXJcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUsIHRoaXMuc3RhdGUuY2xhc3NOYW1lKX0gc3R5bGU9e3pudWkucmVhY3Quc3R5bGUodGhpcy5wcm9wcy5zdHlsZSwgdGhpcy5zdGF0ZS5zdHlsZSl9PlxuXHRcdFx0XHR7dGhpcy5fX3JlbmRlclJvdygpfVxuXHRcdFx0PC90aGVhZD5cblx0XHQpO1xuXHR9XG59KTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJURm9vdCcsXG5cdF9fcmVuZGVyQ2hpbGRyZW46IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfY29sdW1ucyA9IHRoaXMucHJvcHMuY29sdW1ucyB8fCBbXTtcblx0XHRpZih0aGlzLnByb3BzLmNoaWxkcmVuKXtcblx0XHRcdHJldHVybiA8dHIgY2xhc3NOYW1lPVwidGZvb3Qtcm93XCI+XG5cdFx0XHRcdDx0ZCBjb2xTcGFuPXtfY29sdW1ucy5sZW5ndGh9Pnt0aGlzLnByb3BzLmNoaWxkcmVufTwvdGQ+XG5cdFx0XHQ8L3RyPjtcblx0XHR9ZWxzZXtcblx0XHRcdHJldHVybiB0aGlzLl9fcmVuZGVyUm93KCk7XG5cdFx0fVxuXHR9LFxuXHRfX3JlbmRlckNlbGw6IGZ1bmN0aW9uIChjb2x1bW4sIGluZGV4KXtcblx0XHRpZighem4uaXMoY29sdW1uLCAnb2JqZWN0JykpIHsgcmV0dXJuIG51bGw7IH1cblx0XHR2YXIgX2VsZW1lbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudCh0aGlzLnByb3BzLmNlbGxSZW5kZXIsIHtcblx0XHRcdGNvbHVtbjogY29sdW1uLFxuXHRcdFx0Y2VsbEluZGV4OiBpbmRleCwgXG5cdFx0XHR0Zm9vdDogdGhpc1xuXHRcdH0pO1xuXHRcdGlmKF9lbGVtZW50KXtcblx0XHRcdHJldHVybiBfZWxlbWVudDtcblx0XHR9XG5cblx0XHR2YXIgX2NvbnRlbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudChjb2x1bW4ucmVuZGVyIHx8IGNvbHVtbi5mb290LCB7XG5cdFx0XHRjb2x1bW46IGNvbHVtbixcblx0XHRcdGNlbGxJbmRleDogaW5kZXgsIFxuXHRcdFx0dGZvb3Q6IHRoaXNcblx0XHR9KTtcblxuXHRcdGlmKHRoaXMucHJvcHMucmVuZGVyKSB7XG5cdFx0XHRfY29udGVudCA9IHRoaXMucHJvcHMucmVuZGVyKGNvbHVtbiwgaW5kZXgsIHRoaXMpO1xuXHRcdH1cblxuXHRcdHZhciBfY2VsbCA9IHpuLmV4dGVuZCh7IHN0eWxlOiB7fSwgY2xhc3NOYW1lOiAnJyB9LCB0aGlzLnByb3BzLmNlbGwpO1xuXHRcdHJldHVybiA8dGgga2V5PXtpbmRleH0gY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgndGZvb3QtY2VsbCcsIF9jZWxsLmNsYXNzTmFtZSl9IHN0eWxlPXtfY2VsbC5zdHlsZX0+XG5cdFx0XHR7IF9jb250ZW50IH1cblx0XHQ8L3RoPjtcblx0fSxcblx0X19yZW5kZXJSb3c6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMucm93UmVuZGVyLCB7XG5cdFx0XHR0aGVhZDogdGhpc1xuXHRcdH0pO1xuXHRcdGlmKF9lbGVtZW50KXtcblx0XHRcdHJldHVybiBfZWxlbWVudDtcblx0XHR9XG5cdFx0dmFyIF9yb3cgPSB6bi5leHRlbmQoeyBjbGFzc05hbWU6ICcnLCBzdHlsZToge30gfSwgdGhpcy5wcm9wcy5yb3cpO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8dHIgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInRmb290LXJvd1wiLCBfcm93LmNsYXNzTmFtZSl9IHN0eWxlPXtfcm93LnN0eWxlfT5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdCh0aGlzLnByb3BzLmNvbHVtbnN8fFtdKS5tYXAodGhpcy5fX3JlbmRlckNlbGwpXG5cdFx0XHRcdH1cblx0XHRcdDwvdHI+XG5cdFx0KTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8dGZvb3QgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXRhYmxlLXRmb290XCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9PlxuXHRcdFx0XHR7dGhpcy5fX3JlbmRlckNoaWxkcmVuKCl9XG5cdFx0XHQ8L3Rmb290PlxuXHRcdCk7XG5cdH1cbn0pOyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBUSGVhZFNvcnQgPSByZXF1aXJlKCcuL1RIZWFkU29ydCcpO1xudmFyIHBvcHVwID0gcmVxdWlyZSgnem51aS1yZWFjdC1wb3B1cCcpO1xudmFyIHpyanNvbiA9IHJlcXVpcmUoJ3pudWktcmVhY3QtanNvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidUSGVhZCcsXG5cdGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHt9O1xuXHR9LFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRjbGFzc05hbWU6ICcnLFxuXHRcdFx0c3R5bGU6IHt9LFxuXHRcdFx0c29ydDoge30sXG5cdFx0XHRmaWx0ZXI6IHt9XG5cdFx0fTtcblx0fSxcblx0X19vbkNvbHVtblNvcnQ6IGZ1bmN0aW9uIChzb3J0LCBjb2x1bW4pe1xuXHRcdGlmKGNvbHVtbi5uYW1lKSB7XG5cdFx0XHR0aGlzLnN0YXRlLnNvcnRbY29sdW1uLm5hbWVdID0gc29ydDtcblx0XHR9XG5cdFx0dGhpcy5wcm9wcy5vblNvcnQgJiYgdGhpcy5wcm9wcy5vblNvcnQodGhpcy5zdGF0ZS5zb3J0KTtcblx0fSxcblx0X19vbkNvbHVtbkVkaXRvckNoYW5nZTogZnVuY3Rpb24gKGRhdGEsIGNoaWxkLCByb290LCBpbmRleCl7XG4gICAgICAgIHZhciBfcm9vdCA9IHJvb3QgfHwgY2hpbGQ7XG5cdFx0dGhpcy5wcm9wcy5vbkNvbHVtbkNoYW5nZSAmJiB0aGlzLnByb3BzLm9uQ29sdW1uQ2hhbmdlKF9yb290LnN0YXRlLnZhbHVlLCBpbmRleCk7XG4gICAgfSxcblx0X19pY29uQ2xpY2tSZW5kZXI6IGZ1bmN0aW9uIChjb2x1bW4sIGluZGV4KXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBzdHlsZT17e3BhZGRpbmc6IDEwLCBtYXhIZWlnaHQ6IDUwMCwgd2lkdGg6IDQwMCwgb3ZlcmZsb3c6ICdhdXRvJ319PlxuXHRcdFx0XHQ8enJqc29uLmVkaXRvci5vYmplY3QgZm9sZD17ZmFsc2V9XG5cdFx0XHRcdFx0ZGlzcGxheUNsb3N1cmU9e3RydWV9IFxuXHRcdFx0XHRcdGRpc3BsYXlJdGVtQ291bnQ9e3RydWV9IFxuXHRcdFx0XHRcdGxhYmVsPXsnQ29sdW1uJ30gXG5cdFx0XHRcdFx0dmFsdWU9e2NvbHVtbn0gXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyhkYXRhLCBjaGlsZCwgcm9vdCk9PnRoaXMuX19vbkNvbHVtbkVkaXRvckNoYW5nZShkYXRhLCBjaGlsZCwgcm9vdCwgaW5kZXgpfSAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fSxcblx0X19zb3J0UmVuZGVyOiBmdW5jdGlvbiAoKXtcblxuXHR9LFxuXHRfX3ZhbGlkYXRlQ29sdW1uOiBmdW5jdGlvbiAoY29sdW1uLCBpbmRleCl7XG5cdFx0aWYoY29sdW1uLnZhbGlkYXRlID09PSBmYWxzZSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRpZih6bi5pcyhjb2x1bW4udmFsaWRhdGUsICdmdW5jdGlvbicpKSB7XG5cdFx0XHR2YXIgX3JldHVybiA9IGNvbHVtbi52YWxpZGF0ZS5hcHBseShudWxsLCBbY29sdW1uLCBpbmRleF0pO1xuXHRcdFx0aWYoX3JldHVybiA9PT0gZmFsc2UpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlXG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHRfX3JlbmRlckNlbGw6IGZ1bmN0aW9uIChjb2x1bW4sIGluZGV4KXtcblx0XHRpZih0aGlzLl9fdmFsaWRhdGVDb2x1bW4oY29sdW1uLCBpbmRleCkgPT09IGZhbHNlKXtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRpZighem4uaXMoY29sdW1uLCAnb2JqZWN0JykpIHsgcmV0dXJuIG51bGw7IH1cblx0XHR2YXIgX2VsZW1lbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudCh0aGlzLnByb3BzLmNlbGxSZW5kZXIsIHtcblx0XHRcdGNvbHVtbjogY29sdW1uLFxuXHRcdFx0Y2VsbEluZGV4OiBpbmRleCwgXG5cdFx0XHR0aGVhZDogdGhpc1xuXHRcdH0pO1xuXHRcdGlmKF9lbGVtZW50KXtcblx0XHRcdHJldHVybiBfZWxlbWVudDtcblx0XHR9XG5cblx0XHR2YXIgX2NvbnRlbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudChjb2x1bW4ucmVuZGVyIHx8IGNvbHVtbi5oZWFkLCB7XG5cdFx0XHRcdGNvbHVtbjogY29sdW1uLFxuXHRcdFx0XHRjZWxsSW5kZXg6IGluZGV4LCBcblx0XHRcdFx0dGhlYWQ6IHRoaXMsXG5cdFx0XHRcdHRhYmxlOiB0aGlzLnByb3BzLnRhYmxlXG5cdFx0XHR9KSxcblx0XHRcdF9tYXBwaW5nID0gdGhpcy5wcm9wcy5rZXlNYXBwaW5nIHx8IHt9LFxuXHRcdFx0X2xhYmVsS2V5ID0gX21hcHBpbmdbJ2xhYmVsJ10gfHwgJ2xhYmVsJyxcblx0XHRcdF9sYWJlbCA9IGNvbHVtbltfbGFiZWxLZXldO1xuXG5cdFx0aWYoem4uaXMoX2xhYmVsLCAnZnVuY3Rpb24nKSl7XG5cdFx0XHRfbGFiZWwgPSBfbGFiZWwoY29sdW1uLCB0aGlzKTtcblx0XHR9XG5cdFx0aWYoIV9jb250ZW50KSB7XG5cdFx0XHRfY29udGVudCA9IChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e1wiY2VsbC1sYWJlbCBcIiArIChjb2x1bW4uc29ydD8nc29ydGFibGUnOicnKX0gdGl0bGU9e19sYWJlbH0+XG5cdFx0XHRcdFx0eyAhIWNvbHVtbi5yZXF1aXJlZCAmJiA8c3BhbiBkYXRhLXpyLXBvcHVwLXRvb2x0aXA9XCLlv4XopoHlrZfmrrVcIiBjbGFzc05hbWU9XCJyZXF1aXJlZFwiPio8L3NwYW4+fVxuXHRcdFx0XHRcdHsgX2xhYmVsIH1cblx0XHRcdFx0XHR7IFxuXHRcdFx0XHRcdFx0ISFjb2x1bW4uZWRpdGFibGUgJiYgKFxuXHRcdFx0XHRcdFx0XHQ8cG9wdXAuRHJvcGRvd24gXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY2VsbC1lZGl0b3JcIiBcblx0XHRcdFx0XHRcdFx0XHRwb3BvdmVyPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZW5kZXI6IHRoaXMuX19pY29uQ2xpY2tSZW5kZXIoY29sdW1uLCBpbmRleCksXG5cdFx0XHRcdFx0XHRcdFx0XHRjbG9zZWFibGU6IHRydWVcblx0XHRcdFx0XHRcdFx0XHR9fSA+XG5cdFx0XHRcdFx0XHRcdFx0PHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFzXCIgZGF0YS1pY29uPVwiZWRpdFwiIGNsYXNzTmFtZT1cImljb24gc3ZnLWlubGluZS0tZmEgZmEtZWRpdCBmYS13LTE4IFwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1NzYgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNDAyLjYgODMuMmw5MC4yIDkwLjJjMy44IDMuOCAzLjggMTAgMCAxMy44TDI3NC40IDQwNS42bC05Mi44IDEwLjNjLTEyLjQgMS40LTIyLjktOS4xLTIxLjUtMjEuNWwxMC4zLTkyLjhMMzg4LjggODMuMmMzLjgtMy44IDEwLTMuOCAxMy44IDB6bTE2Mi0yMi45bC00OC44LTQ4LjhjLTE1LjItMTUuMi0zOS45LTE1LjItNTUuMiAwbC0zNS40IDM1LjRjLTMuOCAzLjgtMy44IDEwIDAgMTMuOGw5MC4yIDkwLjJjMy44IDMuOCAxMCAzLjggMTMuOCAwbDM1LjQtMzUuNGMxNS4yLTE1LjMgMTUuMi00MCAwLTU1LjJ6TTM4NCAzNDYuMlY0NDhINjRWMTI4aDIyOS44YzMuMiAwIDYuMi0xLjMgOC41LTMuNWw0MC00MGM3LjYtNy42IDIuMi0yMC41LTguNS0yMC41SDQ4QzIxLjUgNjQgMCA4NS41IDAgMTEydjM1MmMwIDI2LjUgMjEuNSA0OCA0OCA0OGgzNTJjMjYuNSAwIDQ4LTIxLjUgNDgtNDhWMzA2LjJjMC0xMC43LTEyLjktMTYtMjAuNS04LjVsLTQwIDQwYy0yLjIgMi4zLTMuNSA1LjMtMy41IDguNXpcIj48L3BhdGg+PC9zdmc+XG5cdFx0XHRcdFx0XHRcdDwvcG9wdXAuRHJvcGRvd24+XG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0dmFyIF9jZWxsID0gem4uZXh0ZW5kKHsgc3R5bGU6IHt9LCBjbGFzc05hbWU6ICcnIH0sIHRoaXMucHJvcHMuY2VsbCwgY29sdW1uKTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHRoIGtleT17aW5kZXh9IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3RoZWFkLWNlbGwnLCAoY29sdW1uLmZpeGVkPydmaXhlZCc6JycpLCBfY2VsbC5jbGFzc05hbWUpfSBzdHlsZT17em51aS5yZWFjdC5zdHlsZShfY2VsbC5zdHlsZSwgY29sdW1uLmZpeGVkU3R5bGVzKX0+XG5cdFx0XHRcdHsgX2NvbnRlbnQgfVxuXHRcdFx0XHR7ICEhY29sdW1uLnNvcnQgJiYgPFRIZWFkU29ydCBjbGFzc05hbWU9XCJjZWxsLXNvcnRcIiBvblNvcnQ9eyhzb3J0KT0+dGhpcy5fX29uQ29sdW1uU29ydChzb3J0LCBjb2x1bW4pfSAvPn1cblx0XHRcdDwvdGg+XG5cdFx0KTtcblx0fSxcblx0X19yZW5kZXJSb3c6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMucm93UmVuZGVyLCB7XG5cdFx0XHR0aGVhZDogdGhpc1xuXHRcdH0pO1xuXHRcdGlmKF9lbGVtZW50KXtcblx0XHRcdHJldHVybiBfZWxlbWVudDtcblx0XHR9XG5cdFx0dmFyIF9yb3cgPSB6bi5leHRlbmQoeyBjbGFzc05hbWU6ICcnLCBzdHlsZToge30gfSwgdGhpcy5wcm9wcy5yb3cpO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8dHIgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInRoZWFkLXJvd1wiLCBfcm93LmNsYXNzTmFtZSl9IHN0eWxlPXtfcm93LnN0eWxlfT5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdCh0aGlzLnByb3BzLmNvbHVtbnN8fFtdKS5tYXAodGhpcy5fX3JlbmRlckNlbGwpXG5cdFx0XHRcdH1cblx0XHRcdDwvdHI+XG5cdFx0KTtcblx0fSxcblx0cmVuZGVyOmZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDx0aGVhZCBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItdGFibGUtdGhlYWRcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUsIHRoaXMuc3RhdGUuY2xhc3NOYW1lKX0gc3R5bGU9e3pudWkucmVhY3Quc3R5bGUodGhpcy5wcm9wcy5zdHlsZSwgdGhpcy5zdGF0ZS5zdHlsZSl9PlxuXHRcdFx0XHR7dGhpcy5fX3JlbmRlclJvdygpfVxuXHRcdFx0PC90aGVhZD5cblx0XHQpO1xuXHR9XG59KTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUlRIZWFkU29ydCcsXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHNvcnQ6ICdkZXNjJyxcblx0XHR9XG5cdH0sXG5cdF9fcmVuZGVySWNvbjogZnVuY3Rpb24gKCl7XG5cdFx0c3dpdGNoKHRoaXMuc3RhdGUuc29ydCl7XG5cdFx0XHRjYXNlIFwiZmFTb3J0XCI6XG5cdFx0XHRcdHJldHVybiA8c3ZnIG9uQ2xpY2s9eygpPT50aGlzLl9faWNvbkNsaWNrKCd1cCcpfSBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFzXCIgZGF0YS1pY29uPVwic29ydFwiIGNsYXNzTmFtZT1cImljb24gc3ZnLWlubGluZS0tZmEgZmEtc29ydCBmYS13LTEwIFwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNDEgMjg4aDIzOGMyMS40IDAgMzIuMSAyNS45IDE3IDQxTDE3NyA0NDhjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwTDI0IDMyOWMtMTUuMS0xNS4xLTQuNC00MSAxNy00MXptMjU1LTEwNUwxNzcgNjRjLTkuNC05LjQtMjQuNi05LjQtMzMuOSAwTDI0IDE4M2MtMTUuMSAxNS4xLTQuNCA0MSAxNyA0MWgyMzhjMjEuNCAwIDMyLjEtMjUuOSAxNy00MXpcIj48L3BhdGg+PC9zdmc+O1xuXHRcdFx0Y2FzZSBcImRlc2NcIjpcblx0XHRcdFx0cmV0dXJuIDxzdmcgb25DbGljaz17KCk9PnRoaXMuX19pY29uQ2xpY2soJ2FzYycpfSBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFzXCIgZGF0YS1pY29uPVwic29ydC1kb3duXCIgY2xhc3NOYW1lPVwiaWNvbiBzdmctaW5saW5lLS1mYSBmYS1zb3J0LWFscGhhLWRvd24gZmEtdy0xNCBcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNDQ4IDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTE3NiAzNTJoLTQ4VjQ4YTE2IDE2IDAgMCAwLTE2LTE2SDgwYTE2IDE2IDAgMCAwLTE2IDE2djMwNEgxNmMtMTQuMTkgMC0yMS4zNiAxNy4yNC0xMS4yOSAyNy4zMWw4MCA5NmExNiAxNiAwIDAgMCAyMi42MiAwbDgwLTk2QzE5Ny4zNSAzNjkuMjYgMTkwLjIyIDM1MiAxNzYgMzUyem0yNDAtNjRIMjg4YTE2IDE2IDAgMCAwLTE2IDE2djMyYTE2IDE2IDAgMCAwIDE2IDE2aDU2bC02MS4yNiA3MC40NUEzMiAzMiAwIDAgMCAyNzIgNDQ2LjM3VjQ2NGExNiAxNiAwIDAgMCAxNiAxNmgxMjhhMTYgMTYgMCAwIDAgMTYtMTZ2LTMyYTE2IDE2IDAgMCAwLTE2LTE2aC01Nmw2MS4yNi03MC40NUEzMiAzMiAwIDAgMCA0MzIgMzIxLjYzVjMwNGExNiAxNiAwIDAgMC0xNi0xNnptMzEuMDYtODUuMzhsLTU5LjI3LTE2MEExNiAxNiAwIDAgMCAzNzIuNzIgMzJoLTQxLjQ0YTE2IDE2IDAgMCAwLTE1LjA3IDEwLjYybC01OS4yNyAxNjBBMTYgMTYgMCAwIDAgMjcyIDIyNGgyNC44M2ExNiAxNiAwIDAgMCAxNS4yMy0xMS4wOGw0LjQyLTEyLjkyaDcxbDQuNDEgMTIuOTJBMTYgMTYgMCAwIDAgNDA3LjE2IDIyNEg0MzJhMTYgMTYgMCAwIDAgMTUuMDYtMjEuMzh6TTMzNS42MSAxNDRMMzUyIDk2bDE2LjM5IDQ4elwiPjwvcGF0aD48L3N2Zz47XG5cdFx0XHRjYXNlIFwiYXNjXCI6XG5cdFx0XHRcdHJldHVybiA8c3ZnIG9uQ2xpY2s9eygpPT50aGlzLl9faWNvbkNsaWNrKCdkZXNjJyl9IGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1wcmVmaXg9XCJmYXNcIiBkYXRhLWljb249XCJzb3J0LXVwXCIgY2xhc3NOYW1lPVwiaWNvbiBzdmctaW5saW5lLS1mYSBmYS1zb3J0LWFscGhhLXVwIGZhLXctMTQgXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDQ0OCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0xNiAxNjBoNDh2MzA0YTE2IDE2IDAgMCAwIDE2IDE2aDMyYTE2IDE2IDAgMCAwIDE2LTE2VjE2MGg0OGMxNC4yMSAwIDIxLjM4LTE3LjI0IDExLjMxLTI3LjMxbC04MC05NmExNiAxNiAwIDAgMC0yMi42MiAwbC04MCA5NkMtNS4zNSAxNDIuNzQgMS43OCAxNjAgMTYgMTYwem00MDAgMTI4SDI4OGExNiAxNiAwIDAgMC0xNiAxNnYzMmExNiAxNiAwIDAgMCAxNiAxNmg1NmwtNjEuMjYgNzAuNDVBMzIgMzIgMCAwIDAgMjcyIDQ0Ni4zN1Y0NjRhMTYgMTYgMCAwIDAgMTYgMTZoMTI4YTE2IDE2IDAgMCAwIDE2LTE2di0zMmExNiAxNiAwIDAgMC0xNi0xNmgtNTZsNjEuMjYtNzAuNDVBMzIgMzIgMCAwIDAgNDMyIDMyMS42M1YzMDRhMTYgMTYgMCAwIDAtMTYtMTZ6bTMxLjA2LTg1LjM4bC01OS4yNy0xNjBBMTYgMTYgMCAwIDAgMzcyLjcyIDMyaC00MS40NGExNiAxNiAwIDAgMC0xNS4wNyAxMC42MmwtNTkuMjcgMTYwQTE2IDE2IDAgMCAwIDI3MiAyMjRoMjQuODNhMTYgMTYgMCAwIDAgMTUuMjMtMTEuMDhsNC40Mi0xMi45Mmg3MWw0LjQxIDEyLjkyQTE2IDE2IDAgMCAwIDQwNy4xNiAyMjRINDMyYTE2IDE2IDAgMCAwIDE1LjA2LTIxLjM4ek0zMzUuNjEgMTQ0TDM1MiA5NmwxNi4zOSA0OHpcIj48L3BhdGg+PC9zdmc+O1xuXHRcdH1cdFxuXHR9LFxuXHRfX2ljb25DbGljazogZnVuY3Rpb24gKHNvcnQpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0c29ydDogc29ydFxuXHRcdH0pO1xuXHRcdHRoaXMucHJvcHMub25Tb3J0ICYmIHRoaXMucHJvcHMub25Tb3J0KHNvcnQpO1xuXHR9LFxuXHRyZW5kZXI6ZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd6ci10YWJsZS10aGVhZC1zb3J0JywgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0+XG5cdFx0XHRcdHt0aGlzLl9fcmVuZGVySWNvbigpfVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUmVhY3RET00gPSB6bnVpLlJlYWN0RE9NIHx8IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xudmFyIFRDZWxsID0gcmVxdWlyZSgnLi9UQ2VsbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSVFJvdycsXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c3R5bGU6IHt9LFxuXHRcdFx0Y2xhc3NOYW1lOiAnJ1xuXHRcdH1cblx0fSxcblx0X19nZXRUYXJnZXRURDogZnVuY3Rpb24gKHRhcmdldCkge1xuXHRcdGlmKHRhcmdldCAmJiB0YXJnZXQudGFnTmFtZSE9PSdURCcpe1xuXHRcdFx0cmV0dXJuIHRoaXMuX19nZXRUYXJnZXRURCh0YXJnZXQucGFyZW50Tm9kZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0YXJnZXQ7XG5cdFx0fVxuXHR9LFxuXHRfX29uUm93Q2xpY2s6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0dmFyIF90aGlzID0gdGhpcztcblx0XHR2YXIgX3RkID0gdGhpcy5fX2dldFRhcmdldFREKGV2ZW50LnRhcmdldCk7XG5cdFx0ZXZlbnQuZGF0YSA9IHtcblx0XHRcdGZpbmRUUkRPTTogZnVuY3Rpb24gKCl7XG5cdFx0XHRcdHJldHVybiBSZWFjdERPTS5maW5kRE9NTm9kZShfdGhpcyk7XG5cdFx0XHR9LFxuXHRcdFx0dGQ6IF90ZCxcblx0XHRcdHRyb3c6IHRoaXNcblx0XHR9O1xuXHRcdHRoaXMucHJvcHMub25DbGljayAmJiB0aGlzLnByb3BzLm9uQ2xpY2soZXZlbnQpO1xuXHRcdHRoaXMucHJvcHMub25Sb3dDbGljayAmJiB0aGlzLnByb3BzLm9uUm93Q2xpY2soZXZlbnQpO1xuXHR9LFxuXHRfX3ZhbGlkYXRlQ29sdW1uOiBmdW5jdGlvbiAoY29sdW1uLCBpbmRleCl7XG5cdFx0aWYoY29sdW1uLnZhbGlkYXRlID09PSBmYWxzZSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRpZih6bi5pcyhjb2x1bW4udmFsaWRhdGUsICdmdW5jdGlvbicpKSB7XG5cdFx0XHR2YXIgX3JldHVybiA9IGNvbHVtbi52YWxpZGF0ZS5hcHBseShudWxsLCBbY29sdW1uLCBpbmRleF0pO1xuXHRcdFx0aWYoX3JldHVybiA9PT0gZmFsc2UpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlXG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHRfX2NlbGxSZW5kZXI6IGZ1bmN0aW9uIChjb2x1bW4sIGluZGV4KXtcblx0XHRpZih0aGlzLl9fdmFsaWRhdGVDb2x1bW4oY29sdW1uLCBpbmRleCkgPT09IGZhbHNlKXtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRpZighem4uaXMoY29sdW1uLCAnb2JqZWN0JykpIHsgcmV0dXJuIG51bGw7fVxuXHRcdHZhciBfcHJvcHMgPSB6bi5leHRlbmQoe1xuXHRcdFx0Y29sdW1uOiBjb2x1bW4sXG5cdFx0XHR0cm93OiB0aGlzLFxuXHRcdFx0cm93SW5kZXg6IHRoaXMucHJvcHMucm93SW5kZXgsXG5cdFx0XHRjZWxsSW5kZXg6IGluZGV4LFxuXHRcdFx0Y29udGV4dDogdGhpcy5wcm9wcy5jb250ZXh0LFxuXHRcdFx0ZGF0YTogdGhpcy5wcm9wcy5kYXRhLFxuXHRcdFx0dGJvZHk6IHRoaXMucHJvcHMudGJvZHlcblx0XHR9LCB0aGlzLnByb3BzLmNlbGwsIGNvbHVtbik7XG5cdFx0dmFyIF9lbGVtZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQodGhpcy5wcm9wcy5jZWxsUmVuZGVyLCBfcHJvcHMsIHRoaXMucHJvcHMuY29udGV4dCk7XG5cblx0XHRpZihfZWxlbWVudCl7XG5cdFx0XHRyZXR1cm4gX2VsZW1lbnQ7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIDxUQ2VsbCBrZXk9e2luZGV4fSB7Li4uX3Byb3BzfSBmaXhlZFN0eWxlPXt0aGlzLl9fZml4ZWRXaWR0aChpbmRleCl9IG9uQ2VsbENsaWNrPXt0aGlzLnByb3BzLm9uQ2VsbENsaWNrfSBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd0cm93LWNlbGwnLCBfcHJvcHMuY2xhc3NOYW1lKX0gLz47XG5cdH0sXG5cdF9fZml4ZWRXaWR0aDogZnVuY3Rpb24gKGluZGV4KXtcblx0XHR2YXIgX2NvbHVtbnMgPSB0aGlzLnByb3BzLmNvbHVtbnN8fFtdLCBfd2lkdGggPSAwO1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBpbmRleDsgaSsrKXtcblx0XHRcdGlmKF9jb2x1bW5zW2ldLmZpeGVkKSB7XG5cdFx0XHRcdF93aWR0aCArPSBfY29sdW1uc1tpXS53aWR0aCB8fCAwO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHRsZWZ0OiBfd2lkdGhcblx0XHR9O1xuXHR9LFxuXHRyZW5kZXI6ZnVuY3Rpb24oKXtcblx0XHR0aGlzLnByb3BzLnRib2R5Ll9faW5pdGlhbERhdGFJdGVtKHRoaXMucHJvcHMuZGF0YSk7XG5cdFx0dGhpcy5wcm9wcy5vbkRhdGFWYWxpZGF0ZSAmJiB0aGlzLnByb3BzLm9uRGF0YVZhbGlkYXRlKHRoaXMucHJvcHMuZGF0YSwgdGhpcyk7XG5cdFx0dmFyIF9jb2x1bW5MZW5ndGggPSAodGhpcy5wcm9wcy5jb2x1bW5zfHxbXSkubGVuZ3RoO1xuXHRcdHZhciBfY2xhc3NOYW1lID0gdGhpcy5wcm9wcy5jbGFzc05hbWUsIF9zdHlsZSA9IHRoaXMucHJvcHMuc3R5bGU7XG5cdFx0aWYodHlwZW9mIF9jbGFzc05hbWUgPT0gJ2Z1bmN0aW9uJyl7XG5cdFx0XHRfY2xhc3NOYW1lID0gX2NsYXNzTmFtZSh0aGlzLnByb3BzLmRhdGEsIHRoaXMpO1xuXHRcdH1cblx0XHRpZih0eXBlb2YgX3N0eWxlID09ICdmdW5jdGlvbicpe1xuXHRcdFx0X3N0eWxlID0gX3N0eWxlKHRoaXMucHJvcHMuZGF0YSwgdGhpcyk7XG5cdFx0fVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8PlxuXHRcdFx0XHQ8dHIgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItdGFibGUtdHJvdycsIF9jbGFzc05hbWUsIHRoaXMuc3RhdGUuY2xhc3NOYW1lKX0gXG5cdFx0XHRcdFx0c3R5bGU9e3pudWkucmVhY3Quc3R5bGUoX3N0eWxlLCB0aGlzLnN0YXRlLnN0eWxlKX1cblx0XHRcdFx0XHRkYXRhLWFjdGl2ZT17dGhpcy5wcm9wcy5hY3RpdmV9IFxuXHRcdFx0XHRcdGRhdGEtY2hlY2tlZD17dGhpcy5wcm9wcy5jaGVja2VkfSBcblx0XHRcdFx0XHRvbkNsaWNrPXt0aGlzLl9fb25Sb3dDbGlja30+XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0KHRoaXMucHJvcHMuY29sdW1uc3x8W10pLm1hcCh0aGlzLl9fY2VsbFJlbmRlcilcblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvdHI+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlLmNoaWxkICYmIDx0ciBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd6ci10YWJsZS10cm93LWNoaWxkJyl9Pjx0ZCBjb2xTcGFuPXtfY29sdW1uTGVuZ3RofT57dGhpcy5zdGF0ZS5jaGlsZH08L3RkPjwvdHI+XG5cdFx0XHRcdH1cblx0XHRcdDwvPlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgQ29sZ3JvdXA6IHJlcXVpcmUoJy4vQ29sZ3JvdXAnKSxcbiAgICBURmlsdGVyOiByZXF1aXJlKCcuL1RGaWx0ZXInKSxcbiAgICBUQm9keTogcmVxdWlyZSgnLi9UQm9keScpLFxuICAgIFRCb2R5RW1wdHk6IHJlcXVpcmUoJy4vVEJvZHlFbXB0eScpLFxuICAgIFRDZWxsOiByZXF1aXJlKCcuL1RDZWxsJyksXG4gICAgVEZvb3Q6IHJlcXVpcmUoJy4vVEZvb3QnKSxcbiAgICBUSGVhZDogcmVxdWlyZSgnLi9USGVhZCcpLFxuICAgIFRSb3c6IHJlcXVpcmUoJy4vVFJvdycpXG59OyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiUmVhY3RcIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJSZWFjdERPTVwiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcImZpbHRlclwiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcImlucHV0XCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wianNvblwiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcImxvYWRlclwiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcInBhZ2VyXCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wicG9wdXBcIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJzZWxlY3RvclwiXTsgfSgpKTsiXSwic291cmNlUm9vdCI6IiJ9