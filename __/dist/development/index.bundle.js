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
    return /*#__PURE__*/React.createElement("div", {
      className: "data-loading"
    }, /*#__PURE__*/React.createElement("span", null, "\u52A0\u8F7D\u4E2D"), /*#__PURE__*/React.createElement(Loading, null));
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
  refresh: function refresh(callback) {
    this.setState({
      checkeds: []
    });

    if (this.data) {
      this.data.refresh();
    }

    callback && callback();
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
      return /*#__PURE__*/React.createElement("div", {
        className: "zr-table-fixed-layout"
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
  set: function set() {
    this._table.data._argv.data.type = _type;

    this._table.setPageIndex(1);
  },
  setPageIndex: function setPageIndex(pageIndex, argv, callback) {
    if (this.data) {
      if (pageIndex == 1) {
        this._table.setState({
          checkeds: []
        });
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
  },
  refresh: function refresh(callback) {
    if (this._table) {
      this._table.refresh(callback);
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
      if (!this.data._argv.data) {
        this.data._argv.data = {};
      }

      this.data._argv.data.filters = filters;
      this.setPageIndex(1);
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
  render: function render() {
    var _keyMapping = this.props.keyMapping || {};

    return /*#__PURE__*/React.createElement("colgroup", null, (this.props.columns || []).map(function (item, index) {
      var _width = _keyMapping.width || 'width';

      return /*#__PURE__*/React.createElement("col", {
        key: index,
        style: {
          width: item[_width]
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
      pageCount: Math.ceil(this.props.data.length / _pageSize),
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

    var _pageCount = this.state.pageCount,
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

    if (this.state.pageCount > 1) {
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
      if (event.value === null || event.value === undefined) {
        this.state.data[event.name] = null;
        delete this.state.data[event.name];
      } else if (!event.value && !input.props.emptyValueEnabled) {
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
  __renderCell: function __renderCell(column, index) {
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
  __renderCell: function __renderCell(column, index) {
    var _this2 = this;

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
  __cellRender: function __cellRender(column, index) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vTG9hZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9Qb3B1cFRhYmxlLmpzIiwid2VicGFjazovLy8uL1RhYmxlLmpzIiwid2VicGFjazovLy8uL1RhYmxlRWRpdG9yLmpzIiwid2VicGFjazovLy8uL1RhYmxlUGFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY2VsbC9DaGVja2JveC5qcyIsIndlYnBhY2s6Ly8vLi9jZWxsL2luZGV4LmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3RhYmxlL0NvbGdyb3VwLmpzIiwid2VicGFjazovLy8uL3RhYmxlL1RCb2R5LmpzIiwid2VicGFjazovLy8uL3RhYmxlL1RCb2R5RW1wdHkuanMiLCJ3ZWJwYWNrOi8vLy4vdGFibGUvVENlbGwuanMiLCJ3ZWJwYWNrOi8vLy4vdGFibGUvVEZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi90YWJsZS9URm9vdC5qcyIsIndlYnBhY2s6Ly8vLi90YWJsZS9USGVhZC5qcyIsIndlYnBhY2s6Ly8vLi90YWJsZS9USGVhZFNvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vdGFibGUvVFJvdy5qcyIsIndlYnBhY2s6Ly8vLi90YWJsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlsdGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW5wdXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqc29uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9hZGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGFnZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwb3B1cFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNlbGVjdG9yXCIiXSwibmFtZXMiOlsiUmVhY3QiLCJ6bnVpIiwicmVxdWlyZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJjcmVhdGVDbGFzcyIsInJlbmRlciIsInByb3BzIiwic3R5bGUiLCJjbGFzc05hbWUiLCJUYWJsZVBhZ2VyIiwic2VsZWN0b3IiLCJkaXNwbGF5TmFtZSIsImdldERlZmF1bHRQcm9wcyIsInRleHRLZXkiLCJ2YWx1ZUtleSIsImdldEluaXRpYWxTdGF0ZSIsInRleHQiLCJ2YWx1ZSIsImdldFRleHQiLCJzdGF0ZSIsInNldFRleHQiLCJzZXRTdGF0ZSIsImdldFZhbHVlIiwic2V0VmFsdWUiLCJfX29uUm93Q2xpY2siLCJldmVudCIsImRyb3Bkb3duRXZlbnQiLCJfZGF0YSIsImRhdGEiLCJ0cm93IiwicG9wdXBTZWxlY3QiLCJzZXREYXRhIiwiZHJvcGRvd24iLCJjbG9zZVBvcG92ZXIiLCJvbkNoYW5nZSIsIl9fcG9wdXBSZW5kZXIiLCJmaWx0ZXIiLCJvblJvd0NsaWNrIiwicmVhY3QiLCJjbGFzc25hbWUiLCJ0YWJsZSIsIkxvYWRpbmciLCJmaXhlZExheW91dCIsImxvYWRpbmdFbmFibGVkIiwiZGF0YUluZGV4RW5hYmxlZCIsInJvd0tleSIsImNvbHVtbnMiLCJjaGVja2VkcyIsImNvbXBvbmVudERpZE1vdW50Iiwib25Db21wb25lbnREaWRNb3VudCIsIl9fc29ydEZ1bmN0aW9uIiwibmV4dCIsInByZXYiLCJrZXkiLCJfc29ydCIsInNvcnRGdW5jdGlvbiIsIl9fb25Tb3J0Iiwic29ydHMiLCJfcmV0dXJuIiwib25Tb3J0Q2hhbmdlIiwiem4iLCJpc1pOT2JqZWN0IiwiX2FyZ3YiLCJyZWZyZXNoIiwic29ydCIsImZvcmNlVXBkYXRlIiwiX19vbkZpbHRlciIsImZpbHRlcnMiLCJvbkZpbHRlckNoYW5nZSIsIl9fb25UQm9keUVhY2hSb3dEYXRhIiwiaW5kZXgiLCJ0Ym9keSIsIl92YWx1ZUtleSIsImNoZWNrYm94IiwiX3ZhbHVlIiwiaW5kZXhPZiIsInB1c2giLCJvbkVhY2hSb3dEYXRhIiwiX190Ym9keURhdGFSZW5kZXIiLCJsZW5ndGgiLCJjb250ZXh0Iiwicm93IiwiZml4ZWRDb2x1bW5zIiwiX190Ym9keUxvYWRpbmdSZW5kZXIiLCJfX29uVEhlYWRDb2x1bW5DaGFuZ2UiLCJfX3Rib2R5RGF0YUxvYWRlZCIsIm9uRGF0YUxvYWRlZCIsImlzIiwicmVzdWx0IiwiX19vbkRhdGFDcmVhdGVkIiwibGlmeWN5Y2xlIiwib25EYXRhQ3JlYXRlZCIsImNhbGxiYWNrIiwicmVmcmVzaEhlYWRlcnMiLCJfX2ZpeGVkU3R5bGVzIiwiX2NvbHVtbnMiLCJfd2lkdGgiLCJpIiwiZml4ZWQiLCJ3aWR0aCIsImxlZnQiLCJfX3JlbmRlclRCb2R5IiwiX3Jlc3VsdCIsIm9uRGF0YUluaXRpYWwiLCJyZXNwb25zZUhhbmRsZXIiLCJfX29uRml4ZWRMYXlvdXRCb2R5U2Nyb2xsIiwiZSIsIl9sYXlvdXRIZWFkZXIiLCJzY3JvbGxMZWZ0IiwidGFyZ2V0IiwiX19yZW5kZXIiLCJtYXAiLCJpdGVtIiwiZml4ZWRTdHlsZXMiLCJyZWYiLCJjZWxsUGFkZGluZyIsImNlbGxTcGFjaW5nIiwiYXR0cnMiLCJjYXB0aW9uIiwiY29sZ3JvdXAiLCJrZXlNYXBwaW5nIiwidGhlYWQiLCJ0ZmlsdGVyIiwic2hvd0Zvb3QiLCJ0Zm9vdCIsImNoaWxkcmVuUmVuZGVyIiwiY2hpbGRyZW4iLCJfX3Jvd0hlYWRDaGVja2JveENoZWNrZWQiLCJfY2hlY2tlZHMiLCJfX2NoZWNrZWREaXNhYmxlZF9fIiwiX19vblJvd0hlYWRDaGVja2JveENoYW5nZSIsInN0b3BQcm9wYWdhdGlvbiIsImNoZWNrZWQiLCJzcGxpY2UiLCJvbkNoZWNrYm94Q2hhbmdlIiwiX19pbml0Q2hlY2tib3giLCJfY2hlY2tib3giLCJoZWFkIiwiYXJndiIsIl90YWJsZSIsImp1c3RpZnlDb250ZW50IiwidXVpZCIsImJvZHkiLCJvbkJvZHlDb2x1bW5DaGVja2JveFJlbmRlciIsInR5cGUiLCJleHRlbmQiLCJ1bnNoaWZ0IiwiX19pbml0SW5kZXhDb2x1bW4iLCJsYWJlbCIsIm5hbWUiLCJ0ZXh0QWxpZ24iLCJyb3dJbmRleCIsImJpbmQiLCJfX2NvbHVtbnNMb2FkZWQiLCJfdGVtcCIsIl9jb2x1bW5JdGVyYXRvciIsImNvbHVtbkl0ZXJhdG9yIiwiY29sdW1uIiwiZGVlcEFzc2lnbiIsIm9uQ29sdW1uc0xvYWRlZCIsIl9fb25Db2x1bW5EYXRhQ3JlYXRlZCIsImxpZmVjeWNsZSIsIm9uQ29sdW1uc0NyZWF0ZWQiLCJnZXREYXRhIiwicmVtb3ZlUm93RGF0YSIsInVwZGF0ZVJvd0RhdGEiLCJfaW5kZXgiLCJvbkNvbHVtbkxvYWRpbmciLCJvbkNvbHVtbkxvYWRFcnJvciIsIlRhYmxlIiwiaW5wdXQiLCJfX2NlbGxDaGFuZ2UiLCJ0Y2VsbCIsIl9fY29sdW1uQm9keVJlbmRlciIsIl9fY29sdW1uSXRlcmF0b3IiLCJvbkRhdGFDaGFuZ2UiLCJhZGRSb3ciLCJjb25jYXQiLCJwYWdlciIsImNvdW50IiwiY3VycmVudCIsInRvdGFsIiwicGFnZUluZGV4IiwicGFnZVNpemUiLCJzZXQiLCJfdHlwZSIsInNldFBhZ2VJbmRleCIsIl9fb25EYXRhSW5pdGlhbCIsIl9faGFuZGxlUGFnZUNoYW5nZWQiLCJuZXdQYWdlIiwib25QYWdlQ2hhbmdlZCIsIl9faGFuZGxlUGFnZVNpemVDaGFuZ2UiLCJfX3JlbmRlclBhZ2VyIiwiX2NvbHVtblNpemUiLCJfc3RhdGUiLCJfZWxlbWVudCIsIl9wYWdlclByb3BzIiwib25QYWdlU2l6ZUNoYW5nZSIsIl9Db21wb25lbnQiLCJQYWdlciIsInBhdGgiLCJ3aW5kb3ciLCJjb21wb25lbnQiLCJjcmVhdGVSZWFjdEVsZW1lbnQiLCJwYWdlclJlbmRlciIsIl9tZXRob2QiLCJtZXRob2QiLCJfcGFyYW1zIiwiX2tleU1hcHMiLCJrZXlNYXBzIiwicGFyYW1zIiwiX19vbkRhdGFMb2FkZWQiLCJ6eG56IiwiY29kZSIsImNvbnNvbGUiLCJlcnJvciIsImRldGFpbCIsIl9wYWdlckNvdW50IiwiTWF0aCIsImNlaWwiLCJfX29uRmlsdGVyQ2hhbmdlIiwiQ2hlY2tib3giLCJfX29uQ2hlY2tib3hDaGFuZ2UiLCJfX29uSGVhZENoYW5nZSIsIl9fb25Cb2R5Q2hhbmdlIiwibG9nIiwiY2VsbCIsIlBvcHVwVGFibGUiLCJUYWJsZUVkaXRvciIsIl9rZXlNYXBwaW5nIiwiVFJvdyIsImxvYWRlciIsIl9wYWdlU2l6ZSIsIl9jb2x1bW5LZXlNYXAiLCJfZGVmYXVsdCIsInVuZGVmaW5lZCIsImFjdGl2ZSIsImNvbHVtbktleU1hcCIsInBhZ2VDb3VudCIsImxvYWRpbmciLCJfX2luaXRpYWxEYXRhSXRlbSIsImZvcm1hdCIsImRhdGFUeXBlIiwiZXZhbCIsImVyciIsInN0cmluZ2lmeVByaWNlIiwiX19nZXREYXRhIiwiX3BhZ2VJbmRleCIsInNsaWNlIiwibWluIiwiX19yZW5kZXJMb2FkaW5nIiwibG9hZGluZ1JlbmRlciIsIl9sb2FkaW5nIiwiX19yZW5kZXJFbXB0eSIsImVtcHR5UmVuZGVyIiwiX2VtcHR5IiwiZW1wdHkiLCJfX29uQ2VsbENsaWNrIiwib25DZWxsQ2xpY2siLCJfX3JlbmRlclJvdyIsImVhY2hSb3dEYXRhIiwicm93UmVuZGVyIiwiX3Jvd0tleSIsIl9rZXkiLCJjZWxsUmVuZGVyIiwiX19wYWdlQ2hhbmdlIiwiX19wYWdlc1JlbmRlciIsIl9wYWdlQ291bnQiLCJfcGFnZXMiLCJfX3JlbmRlckRhdGEiLCJSZWFjdERPTSIsImRpc2FibGVkIiwiX19yZW5kZXJDZWxsQ29udGVudCIsIl9yZW5kZXIiLCJjZWxsSW5kZXgiLCJfX2NlbGxDbGljayIsIl90aGlzIiwiZmluZFRERE9NIiwiZmluZERPTU5vZGUiLCJvbkNsaWNrIiwiX2NvbHVtbiIsImJvZHlDbGFzc05hbWUiLCJib2R5U3R5bGUiLCJmaWx0ZXJGaWVsZCIsIm9wdCIsImVtcHR5VmFsdWVFbmFibGVkIiwib25GaWx0ZXIiLCJfX29uRmlsdGVyQ2FuY2VsIiwiX19yZW5kZXJDZWxsIiwiX2NvbnRlbnQiLCJfZmlsdGVyIiwicHJvdG90eXBlIiwiY2FsbCIsIl9jZWxsIiwiX3JvdyIsIl9fcmVuZGVyQ2hpbGRyZW4iLCJmb290IiwiVEhlYWRTb3J0IiwicG9wdXAiLCJ6cmpzb24iLCJfX29uQ29sdW1uU29ydCIsIm9uU29ydCIsIl9fb25Db2x1bW5FZGl0b3JDaGFuZ2UiLCJjaGlsZCIsInJvb3QiLCJfcm9vdCIsIm9uQ29sdW1uQ2hhbmdlIiwiX19pY29uQ2xpY2tSZW5kZXIiLCJwYWRkaW5nIiwibWF4SGVpZ2h0Iiwib3ZlcmZsb3ciLCJfX3NvcnRSZW5kZXIiLCJfbWFwcGluZyIsIl9sYWJlbEtleSIsIl9sYWJlbCIsInJlcXVpcmVkIiwiZWRpdGFibGUiLCJjbG9zZWFibGUiLCJfX3JlbmRlckljb24iLCJfX2ljb25DbGljayIsIlRDZWxsIiwiX19nZXRUYXJnZXRURCIsInRhZ05hbWUiLCJwYXJlbnROb2RlIiwiX3RkIiwiZmluZFRSRE9NIiwidGQiLCJfX2NlbGxSZW5kZXIiLCJfcHJvcHMiLCJfX2ZpeGVkV2lkdGgiLCJvbkRhdGFWYWxpZGF0ZSIsIl9jb2x1bW5MZW5ndGgiLCJfY2xhc3NOYW1lIiwiX3N0eWxlIiwiQ29sZ3JvdXAiLCJURmlsdGVyIiwiVEJvZHkiLCJUQm9keUVtcHR5IiwiVEZvb3QiLCJUSGVhZCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7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L0MsYUFBYSxtQ0FBbUMsRUFBRSxJIiwiZmlsZSI6Ii4vZGlzdC9kZXZlbG9wbWVudC9pbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfSBjbGFzc05hbWU9eyd6ci10YWJsZS1sb2FkaW5nICcgKyAodGhpcy5wcm9wcy5jbGFzc05hbWUgfHwgJycpfT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsZHMtcmluZ1wiPjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgVGFibGVQYWdlciA9IHJlcXVpcmUoJy4vVGFibGVQYWdlcicpO1xudmFyIHNlbGVjdG9yID0gcmVxdWlyZSgnem51aS1yZWFjdC1zZWxlY3RvcicpO1xubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOiAnWlJQb3B1cFRhYmxlJyxcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dGV4dEtleTogJ3p4bnpfTGFiZWwnLFxuXHRcdFx0dmFsdWVLZXk6ICd6eG56X1VVSUQnXG5cdFx0fTtcblx0fSxcbiAgICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHRleHQ6IHRoaXMucHJvcHMudGV4dCxcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLnByb3BzLnZhbHVlXG5cdFx0fTtcblx0fSxcbiAgICBnZXRUZXh0OiBmdW5jdGlvbiAoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUudGV4dDtcbiAgICB9LFxuICAgIHNldFRleHQ6IGZ1bmN0aW9uICh0ZXh0KXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0ZXh0OiB0ZXh0XG4gICAgICAgIH0pO1xuICAgIH0sXG5cdGdldFZhbHVlOiBmdW5jdGlvbiAoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUudmFsdWU7XG4gICAgfSxcbiAgICBzZXRWYWx1ZTogZnVuY3Rpb24gKHZhbHVlKXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBfX29uUm93Q2xpY2s6IGZ1bmN0aW9uIChldmVudCwgZHJvcGRvd25FdmVudCl7XG4gICAgICAgIHZhciBfZGF0YSA9IGV2ZW50LmRhdGEudHJvdy5wcm9wcy5kYXRhO1xuICAgICAgICBldmVudC5kYXRhID0gX2RhdGE7XG4gICAgICAgIGV2ZW50LnZhbHVlID0gX2RhdGFbdGhpcy5wcm9wcy52YWx1ZUtleV07XG5cdFx0ZXZlbnQudGV4dCA9IF9kYXRhW3RoaXMucHJvcHMudGV4dEtleV07XG4gICAgICAgIGRyb3Bkb3duRXZlbnQucG9wdXBTZWxlY3Quc2V0RGF0YShldmVudC52YWx1ZSwgZXZlbnQudGV4dCk7XG4gICAgICAgIGRyb3Bkb3duRXZlbnQuZHJvcGRvd24uY2xvc2VQb3BvdmVyKCk7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUoZXZlbnQudmFsdWUpO1xuICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlICYmIHRoaXMucHJvcHMub25DaGFuZ2UoZXZlbnQsIGRyb3Bkb3duRXZlbnQpO1xuICAgIH0sXG5cdF9fcG9wdXBSZW5kZXI6IGZ1bmN0aW9uIChkcm9wZG93bkV2ZW50KXtcblx0XHRyZXR1cm4gPFRhYmxlUGFnZXJcbiAgICAgICAgICAgIHp4bno9e3RydWV9XG4gICAgICAgICAgICBjb2xncm91cD17e319XG4gICAgICAgICAgICBjZWxsUGFkZGluZz17NX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInpyLXRhYmxlLWNsYXNzLW5vcm1hbFwiXG4gICAgICAgICAgICBmaXhlZD17dHJ1ZX1cbiAgICAgICAgICAgIHRoZWFkPXt7XG4gICAgICAgICAgICAgICAgZmlsdGVyOiB0cnVlXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgdGZpbHRlcj17e319XG4gICAgICAgICAgICB0Ym9keT17e1xuICAgICAgICAgICAgICAgIG9uUm93Q2xpY2s6IChldmVudCk9PnRoaXMuX19vblJvd0NsaWNrKGV2ZW50LCBkcm9wZG93bkV2ZW50KVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHBhZ2VJbmRleD17MX1cbiAgICAgICAgICAgIHBhZ2VTaXplPXs1fSB7Li4udGhpcy5wcm9wc30gLz47XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHNlbGVjdG9yLlBvcHVwU2VsZWN0IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLXRhYmxlLXBvcHVwLXRhYmxlJywgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0gcG9wdXBSZW5kZXI9e3RoaXMuX19wb3B1cFJlbmRlcn0gLz5cblx0XHQpO1xuXHR9XG59KTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgdGFibGUgPSByZXF1aXJlKCcuL3RhYmxlL2luZGV4Jyk7XG52YXIgc2VsZWN0b3IgPSByZXF1aXJlKCd6bnVpLXJlYWN0LXNlbGVjdG9yJyk7XG52YXIgTG9hZGluZyA9IHJlcXVpcmUoJy4vTG9hZGluZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSVGFibGUnLFxuXHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRmaXhlZExheW91dDogZmFsc2UsXG5cdFx0XHRsb2FkaW5nRW5hYmxlZDogdHJ1ZSxcblx0XHRcdGRhdGFJbmRleEVuYWJsZWQ6IGZhbHNlLFxuXHRcdFx0dmFsdWVLZXk6ICd6eG56X1VVSUQnLFxuXHRcdFx0cm93S2V5OiAnenhuel9VVUlEJ1xuXHRcdH07XG5cdH0sXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGRhdGE6IFtdLCBcblx0XHRcdGNvbHVtbnM6IFtdLFxuXHRcdFx0Y2hlY2tlZHM6IHRoaXMucHJvcHMuY2hlY2tlZHMgfHwgW11cblx0XHR9O1xuXHR9LFxuXHRjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24oKXtcblx0XHR0aGlzLnByb3BzLm9uQ29tcG9uZW50RGlkTW91bnQgJiYgdGhpcy5wcm9wcy5vbkNvbXBvbmVudERpZE1vdW50KHRoaXMpO1xuXHR9LFxuXHRfX3NvcnRGdW5jdGlvbjogZnVuY3Rpb24gKG5leHQsIHByZXYsIGtleSwgX3NvcnQpe1xuXHRcdGlmKHRoaXMucHJvcHMuc29ydEZ1bmN0aW9uKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5wcm9wcy5zb3J0RnVuY3Rpb24obmV4dCwgcHJldiwga2V5LCBfc29ydCk7XG5cdFx0fVxuXHRcdGlmKF9zb3J0PT0nZGVzYycpe1xuXHRcdFx0aWYobmV4dFtrZXldID4gcHJldltrZXldKXtcblx0XHRcdFx0cmV0dXJuIDE7XG5cdFx0XHR9ZWxzZSBpZihuZXh0W2tleV0gPT0gcHJldltrZXldKXtcblx0XHRcdFx0cmV0dXJuIDA7XG5cdFx0XHR9ZWxzZSBpZihuZXh0W2tleV0gPCBwcmV2W2tleV0pe1xuXHRcdFx0XHRyZXR1cm4gLTE7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKF9zb3J0PT0nYXNjJyl7XG5cdFx0XHRpZihuZXh0W2tleV0gPCBwcmV2W2tleV0pe1xuXHRcdFx0XHRyZXR1cm4gMTtcblx0XHRcdH1lbHNlIGlmKG5leHRba2V5XSA9PSBwcmV2W2tleV0pe1xuXHRcdFx0XHRyZXR1cm4gMDtcblx0XHRcdH1lbHNlIGlmKG5leHRba2V5XSA+IHByZXZba2V5XSl7XG5cdFx0XHRcdHJldHVybiAtMTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdF9fb25Tb3J0OiBmdW5jdGlvbiAoc29ydHMpe1xuXHRcdHZhciBfcmV0dXJuID0gdGhpcy5wcm9wcy5vblNvcnRDaGFuZ2UgJiYgdGhpcy5wcm9wcy5vblNvcnRDaGFuZ2Uoc29ydHMsIHRoaXMuc3RhdGUuZGF0YSwgdGhpcyk7XG5cdFx0aWYoX3JldHVybiAhPT0gZmFsc2Upe1xuXHRcdFx0aWYodGhpcy5kYXRhICYmIHpuLmlzWk5PYmplY3QodGhpcy5kYXRhKSkge1xuXHRcdFx0XHRpZighdGhpcy5kYXRhLl9hcmd2LmRhdGEpIHtcblx0XHRcdFx0XHR0aGlzLmRhdGEuX2FyZ3YuZGF0YSA9IHt9O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuZGF0YS5fYXJndi5kYXRhLnNvcnRzID0gc29ydHM7XG5cdFx0XHRcdHRoaXMuZGF0YS5yZWZyZXNoKCk7XG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0dmFyIF9zb3J0ID0gbnVsbDtcblx0XHRcdFx0Zm9yKHZhciBrZXkgaW4gc29ydHMpe1xuXHRcdFx0XHRcdF9zb3J0ID0gc29ydHNba2V5XVxuXHRcdFx0XHRcdHRoaXMuc3RhdGUuZGF0YSA9IHRoaXMuc3RhdGUuZGF0YS5zb3J0KChuZXh0LCBwcmV2KSA9PiB0aGlzLl9fc29ydEZ1bmN0aW9uKG5leHQsIHByZXYsIGtleSwgX3NvcnQpKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuZm9yY2VVcGRhdGUoKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdF9fb25GaWx0ZXI6IGZ1bmN0aW9uIChmaWx0ZXJzKXtcblx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMub25GaWx0ZXJDaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkZpbHRlckNoYW5nZShmaWx0ZXJzLCB0aGlzLnN0YXRlLmRhdGEsIHRoaXMpO1xuXHRcdGlmKF9yZXR1cm4gIT09IGZhbHNlKXtcblx0XHRcdGlmKHRoaXMuZGF0YSAmJiB6bi5pc1pOT2JqZWN0KHRoaXMuZGF0YSkpIHtcblx0XHRcdFx0aWYoIXRoaXMuZGF0YS5fYXJndi5kYXRhKSB7XG5cdFx0XHRcdFx0dGhpcy5kYXRhLl9hcmd2LmRhdGEgPSB7fTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmRhdGEuX2FyZ3YuZGF0YS5maWx0ZXJzID0gZmlsdGVycztcblx0XHRcdFx0dGhpcy5kYXRhLnJlZnJlc2goKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdF9fb25UQm9keUVhY2hSb3dEYXRhOiBmdW5jdGlvbiAoZGF0YSwgaW5kZXgsIHRib2R5KXtcblx0XHR2YXIgX3ZhbHVlS2V5ID0gdGhpcy5wcm9wcy52YWx1ZUtleSB8fCAnenhuel9VVUlEJztcblx0XHRpZih0aGlzLnByb3BzLmNoZWNrYm94ICYmIHRoaXMucHJvcHMudmFsdWUgJiYgX3ZhbHVlS2V5KSB7XG5cdFx0XHR2YXIgX3ZhbHVlID0gZGF0YVtfdmFsdWVLZXldO1xuXHRcdFx0aWYodGhpcy5wcm9wcy52YWx1ZS5pbmRleE9mKF92YWx1ZSkhPS0xKXtcblx0XHRcdFx0dGhpcy5zdGF0ZS5jaGVja2Vkcy5wdXNoKF92YWx1ZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHRoaXMucHJvcHMub25FYWNoUm93RGF0YSAmJiB0aGlzLnByb3BzLm9uRWFjaFJvd0RhdGEoZGF0YSwgaW5kZXgsIHRib2R5LCB0aGlzKTtcblx0fSxcblx0X190Ym9keURhdGFSZW5kZXI6IGZ1bmN0aW9uIChjb2x1bW5zKXtcblx0XHRpZighdGhpcy5zdGF0ZS5kYXRhLmxlbmd0aCl7XG5cdFx0XHRyZXR1cm4gPHRhYmxlLlRCb2R5RW1wdHkgY29udGV4dD17dGhpcy5wcm9wcy5jb250ZXh0fSB7Li4udGhpcy5wcm9wcy50Ym9keX0gY29sdW1ucz17Y29sdW1uc30gZGF0YT17dGhpcy5zdGF0ZS5kYXRhfSB0YWJsZT17dGhpc30gLz47XG5cdFx0fVxuXHRcdHJldHVybiA8dGFibGUuVEJvZHkgcm93S2V5PXt0aGlzLnByb3BzLnJvd0tleX0gcm93PXt0aGlzLnByb3BzLnJvd30gY29udGV4dD17dGhpcy5wcm9wcy5jb250ZXh0fSBlYWNoUm93RGF0YT17dGhpcy5fX29uVEJvZHlFYWNoUm93RGF0YX0gey4uLnRoaXMucHJvcHMudGJvZHl9IGNvbHVtbnM9e2NvbHVtbnN9IGZpeGVkQ29sdW1ucz17dGhpcy5wcm9wcy5maXhlZENvbHVtbnN9IGRhdGE9e3RoaXMuc3RhdGUuZGF0YX0gdGFibGU9e3RoaXN9IC8+O1xuXHR9LFxuXHRfX3Rib2R5TG9hZGluZ1JlbmRlcjogZnVuY3Rpb24gKGNvbHVtbnMpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZGF0YS1sb2FkaW5nJz5cblx0XHRcdFx0PHNwYW4+5Yqg6L295LitPC9zcGFuPlxuXHRcdFx0XHQ8TG9hZGluZyAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0XHRyZXR1cm4gPHRhYmxlLlRCb2R5IHJvd0tleT17dGhpcy5wcm9wcy5yb3dLZXl9IHJvdz17dGhpcy5wcm9wcy5yb3d9IGNvbnRleHQ9e3RoaXMucHJvcHMuY29udGV4dH0gey4uLnRoaXMucHJvcHMudGJvZHl9IGNvbHVtbnM9e2NvbHVtbnN9IGZpeGVkQ29sdW1ucz17dGhpcy5wcm9wcy5maXhlZENvbHVtbnN9IGxvYWRpbmc9e3RydWV9IHRhYmxlPXt0aGlzfSAvPjtcblx0fSxcblx0X19vblRIZWFkQ29sdW1uQ2hhbmdlOiBmdW5jdGlvbiAoZGF0YSwgaW5kZXgpe1xuXHRcdGlmKHRoaXMuc3RhdGUuY29sdW1ucyl7XG5cdFx0XHR0aGlzLnN0YXRlLmNvbHVtbnNbaW5kZXhdID0gZGF0YTtcblx0XHRcdHRoaXMuZm9yY2VVcGRhdGUoKTtcblx0XHR9XG5cdH0sXG5cdF9fdGJvZHlEYXRhTG9hZGVkOiBmdW5jdGlvbiAoZGF0YSkge1xuXHRcdHZhciBfcmV0dXJuID0gdGhpcy5wcm9wcy5vbkRhdGFMb2FkZWQgJiYgdGhpcy5wcm9wcy5vbkRhdGFMb2FkZWQoZGF0YSwgdGhpcyk7XG5cdFx0aWYoX3JldHVybiAhPT0gZmFsc2Upe1xuXHRcdFx0aWYoem4uaXMoZGF0YSwgJ29iamVjdCcpICYmIGRhdGEucmVzdWx0KXtcblx0XHRcdFx0ZGF0YSA9IGRhdGEucmVzdWx0O1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGRhdGE6IGRhdGEgfSk7XG5cdFx0fVxuXHR9LFxuXHRfX29uRGF0YUNyZWF0ZWQ6IGZ1bmN0aW9uIChkYXRhLCBsaWZ5Y3ljbGUpe1xuXHRcdHRoaXMuZGF0YSA9IGRhdGE7XG5cdFx0dGhpcy5wcm9wcy5vbkRhdGFDcmVhdGVkICYmIHRoaXMucHJvcHMub25EYXRhQ3JlYXRlZChkYXRhLCB0aGlzLCBsaWZ5Y3ljbGUpO1xuXHR9LFxuXHRyZWZyZXNoOiBmdW5jdGlvbiAoY2FsbGJhY2spe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0Y2hlY2tlZHM6IFtdXG5cdFx0fSk7XG5cdFx0aWYodGhpcy5kYXRhKXtcblx0XHRcdHRoaXMuZGF0YS5yZWZyZXNoKCk7XG5cdFx0fVxuXHRcdGNhbGxiYWNrICYmIGNhbGxiYWNrKCk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblx0cmVmcmVzaEhlYWRlcnM6IGZ1bmN0aW9uICgpe1xuXHRcdGlmKHRoaXMuY29sdW1ucyl7XG5cdFx0XHR0aGlzLmNvbHVtbnMucmVmcmVzaCgpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXHRzZXREYXRhOiBmdW5jdGlvbiAoZGF0YSl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IGRhdGE6IGRhdGEgfSk7XG5cdH0sXG5cdF9fZml4ZWRTdHlsZXM6IGZ1bmN0aW9uIChpbmRleCl7XG5cdFx0dmFyIF9jb2x1bW5zID0gdGhpcy5zdGF0ZS5jb2x1bW5zfHxbXSwgX3dpZHRoID0gMDtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgaW5kZXg7IGkrKyl7XG5cdFx0XHRpZihfY29sdW1uc1tpXS5maXhlZCkge1xuXHRcdFx0XHRfd2lkdGggKz0gKF9jb2x1bW5zW2ldLndpZHRoIHx8IDApIC0gMTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0bGVmdDogX3dpZHRoIC0gMVxuXHRcdH07XG5cdH0sXG5cdF9fcmVuZGVyVEJvZHk6IGZ1bmN0aW9uIChjb2x1bW5zKXtcblx0XHR2YXIgX2RhdGEgPSB0aGlzLnByb3BzLmRhdGEgfHwgdGhpcy5wcm9wcy50Ym9keS5kYXRhO1xuXHRcdHZhciBfcmVzdWx0ID0gdGhpcy5wcm9wcy5vbkRhdGFJbml0aWFsICYmIHRoaXMucHJvcHMub25EYXRhSW5pdGlhbChfZGF0YSwgdGhpcyk7XG5cdFx0aWYoX3Jlc3VsdCl7XG5cdFx0XHRfZGF0YSA9IF9yZXN1bHQ7XG5cdFx0fVxuXHRcdHJldHVybiA8em51aS5yZWFjdC5EYXRhTGlmZWN5Y2xlIGRhdGE9e19kYXRhfSBcblx0XHRcdFx0XHRkYXRhUmVuZGVyPXsoKT0+dGhpcy5fX3Rib2R5RGF0YVJlbmRlcihjb2x1bW5zKX0gXG5cdFx0XHRcdFx0bG9hZGluZ0VuYWJsZWQ9e3RoaXMucHJvcHMubG9hZGluZ0VuYWJsZWR9XG5cdFx0XHRcdFx0bG9hZGluZ1JlbmRlcj17KCk9PnRoaXMuX190Ym9keUxvYWRpbmdSZW5kZXIoY29sdW1ucyl9XG5cdFx0XHRcdFx0cmVzcG9uc2VIYW5kbGVyPXt0aGlzLnByb3BzLnJlc3BvbnNlSGFuZGxlcn1cblx0XHRcdFx0XHRvbkRhdGFDcmVhdGVkPXt0aGlzLl9fb25EYXRhQ3JlYXRlZH1cblx0XHRcdFx0XHRvbkZpbmlzaGVkPXt0aGlzLl9fdGJvZHlEYXRhTG9hZGVkfSAvPjtcblx0fSxcblx0X19vbkZpeGVkTGF5b3V0Qm9keVNjcm9sbDogZnVuY3Rpb24gKGUpe1xuXHRcdHRoaXMuX2xheW91dEhlYWRlci5zY3JvbGxMZWZ0ID0gZS50YXJnZXQuc2Nyb2xsTGVmdDtcblx0fSxcblx0X19yZW5kZXI6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBjb2x1bW5zID0gdGhpcy5zdGF0ZS5jb2x1bW5zO1xuXHRcdGNvbHVtbnMgPSBjb2x1bW5zLm1hcCgoaXRlbSwgaW5kZXgpPT57XG5cdFx0XHRpZihpdGVtLmZpeGVkKSB7XG5cdFx0XHRcdGl0ZW0uZml4ZWRTdHlsZXMgPSB0aGlzLl9fZml4ZWRTdHlsZXMoaW5kZXgpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGl0ZW07XG5cdFx0fSk7XG5cdFx0aWYodGhpcy5wcm9wcy5maXhlZExheW91dCkge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ6ci10YWJsZS1maXhlZC1sYXlvdXRcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZpeGVkLWxheW91dC1oZWFkZXJcIiByZWY9eyhyZWYpPT50aGlzLl9sYXlvdXRIZWFkZXIgPSByZWZ9PlxuXHRcdFx0XHRcdFx0PHRhYmxlIGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci10YWJsZVwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IFxuXHRcdFx0XHRcdFx0XHRzdHlsZT17em51aS5yZWFjdC5zdHlsZSh0aGlzLnByb3BzLnN0eWxlLCB7IHdpZHRoOiB0aGlzLnByb3BzLndpZHRoIH0pfSBcblx0XHRcdFx0XHRcdFx0ZGF0YS1maXhlZD17dGhpcy5wcm9wcy5maXhlZH0gXHRcblx0XHRcdFx0XHRcdFx0Y2VsbFBhZGRpbmc9e3RoaXMucHJvcHMuY2VsbFBhZGRpbmcgfHwgMH0gXG5cdFx0XHRcdFx0XHRcdGNlbGxTcGFjaW5nPXt0aGlzLnByb3BzLmNlbGxTcGFjaW5nIHx8IDB9IHsuLi50aGlzLnByb3BzLmF0dHJzfT5cblx0XHRcdFx0XHRcdFx0eyAhIXRoaXMucHJvcHMuY2FwdGlvbiAmJiA8Y2FwdGlvbiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2FwdGlvbi5jbGFzc05hbWV9IHN0eWxlPXt0aGlzLnByb3BzLmNhcHRpb24uc3R5bGV9Pnt0aGlzLnByb3BzLmNhcHRpb24ucmVuZGVyfTwvY2FwdGlvbj4gfVxuXHRcdFx0XHRcdFx0XHR7ICEhdGhpcy5wcm9wcy5jb2xncm91cCAmJiA8dGFibGUuQ29sZ3JvdXAgY29udGV4dD17dGhpcy5wcm9wcy5jb250ZXh0fSBrZXlNYXBwaW5nPXt0aGlzLnByb3BzLmtleU1hcHBpbmd9IGNvbHVtbnM9e2NvbHVtbnN9IHsuLi50aGlzLnByb3BzLmNvbGdyb3VwfSAvPiB9XG5cdFx0XHRcdFx0XHRcdHsgISF0aGlzLnByb3BzLnRoZWFkICYmIDx0YWJsZS5USGVhZCBjb250ZXh0PXt0aGlzLnByb3BzLmNvbnRleHR9IG9uU29ydD17dGhpcy5fX29uU29ydH0gb25Db2x1bW5DaGFuZ2U9e3RoaXMuX19vblRIZWFkQ29sdW1uQ2hhbmdlfSBjb2x1bW5zPXtjb2x1bW5zfSBrZXlNYXBwaW5nPXt0aGlzLnByb3BzLmtleU1hcHBpbmd9IHsuLi50aGlzLnByb3BzLnRoZWFkfSB0YWJsZT17dGhpc30gLz59XG5cdFx0XHRcdFx0XHRcdHsgISF0aGlzLnByb3BzLnRmaWx0ZXIgJiYgPHRhYmxlLlRGaWx0ZXIgY29udGV4dD17dGhpcy5wcm9wcy5jb250ZXh0fSBvbkZpbHRlcj17dGhpcy5fX29uRmlsdGVyfSBjb2x1bW5zPXtjb2x1bW5zfSB7Li4udGhpcy5wcm9wcy50ZmlsdGVyfSB0YWJsZT17dGhpc30gLz59XG5cdFx0XHRcdFx0XHQ8L3RhYmxlPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQtbGF5b3V0LWJvZHlcIiBvblNjcm9sbD17dGhpcy5fX29uRml4ZWRMYXlvdXRCb2R5U2Nyb2xsfT5cblx0XHRcdFx0XHRcdDx0YWJsZSBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItdGFibGVcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBcblx0XHRcdFx0XHRcdFx0c3R5bGU9e3pudWkucmVhY3Quc3R5bGUodGhpcy5wcm9wcy5zdHlsZSwgeyB3aWR0aDogdGhpcy5wcm9wcy53aWR0aCB9KX0gXG5cdFx0XHRcdFx0XHRcdGRhdGEtZml4ZWQ9e3RoaXMucHJvcHMuZml4ZWR9IFx0XG5cdFx0XHRcdFx0XHRcdGNlbGxQYWRkaW5nPXt0aGlzLnByb3BzLmNlbGxQYWRkaW5nIHx8IDB9IFxuXHRcdFx0XHRcdFx0XHRjZWxsU3BhY2luZz17dGhpcy5wcm9wcy5jZWxsU3BhY2luZyB8fCAwfSB7Li4udGhpcy5wcm9wcy5hdHRyc30+XG5cdFx0XHRcdFx0XHRcdHsgISF0aGlzLnByb3BzLmNhcHRpb24gJiYgPGNhcHRpb24gY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNhcHRpb24uY2xhc3NOYW1lfSBzdHlsZT17dGhpcy5wcm9wcy5jYXB0aW9uLnN0eWxlfT57dGhpcy5wcm9wcy5jYXB0aW9uLnJlbmRlcn08L2NhcHRpb24+IH1cblx0XHRcdFx0XHRcdFx0eyAhIXRoaXMucHJvcHMuY29sZ3JvdXAgJiYgPHRhYmxlLkNvbGdyb3VwIGNvbnRleHQ9e3RoaXMucHJvcHMuY29udGV4dH0ga2V5TWFwcGluZz17dGhpcy5wcm9wcy5rZXlNYXBwaW5nfSBjb2x1bW5zPXtjb2x1bW5zfSB7Li4udGhpcy5wcm9wcy5jb2xncm91cH0gLz4gfVxuXHRcdFx0XHRcdFx0XHR7ICh0aGlzLnByb3BzLnRib2R5IHx8IHRoaXMucHJvcHMuZGF0YSkgJiYgdGhpcy5fX3JlbmRlclRCb2R5KGNvbHVtbnMpIH1cblx0XHRcdFx0XHRcdDwvdGFibGU+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5zaG93Rm9vdCAhPT0gZmFsc2UgJiYgPGRpdiBjbGFzc05hbWU9XCJmaXhlZC1sYXlvdXQtZm9vdGVyXCI+XG5cdFx0XHRcdFx0XHRcdHsgISF0aGlzLnByb3BzLnRmb290ICYmIDx0YWJsZT48dGFibGUuVEZvb3QgY29udGV4dD17dGhpcy5wcm9wcy5jb250ZXh0fSBjb2x1bW5zPXtjb2x1bW5zfSB7Li4udGhpcy5wcm9wcy50Zm9vdH0gdGFibGU9e3RoaXN9IC8+PC90YWJsZT59XG5cdFx0XHRcdFx0XHRcdHsgdGhpcy5wcm9wcy5jaGlsZHJlblJlbmRlciAmJiB0aGlzLnByb3BzLmNoaWxkcmVuUmVuZGVyKGNvbHVtbnMsIHRoaXMpIH1cblx0XHRcdFx0XHRcdFx0eyB0aGlzLnByb3BzLmNoaWxkcmVuIH1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8dGFibGUgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXRhYmxlXCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gXG5cdFx0XHRcdHN0eWxlPXt6bnVpLnJlYWN0LnN0eWxlKHRoaXMucHJvcHMuc3R5bGUsIHsgd2lkdGg6IHRoaXMucHJvcHMud2lkdGggfSl9IFxuXHRcdFx0XHRkYXRhLWZpeGVkPXt0aGlzLnByb3BzLmZpeGVkfSBcdFxuXHRcdFx0XHRjZWxsUGFkZGluZz17dGhpcy5wcm9wcy5jZWxsUGFkZGluZyB8fCAwfSBcblx0XHRcdFx0Y2VsbFNwYWNpbmc9e3RoaXMucHJvcHMuY2VsbFNwYWNpbmcgfHwgMH0gey4uLnRoaXMucHJvcHMuYXR0cnN9PlxuXHRcdFx0XHR7ICEhdGhpcy5wcm9wcy5jYXB0aW9uICYmIDxjYXB0aW9uIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jYXB0aW9uLmNsYXNzTmFtZX0gc3R5bGU9e3RoaXMucHJvcHMuY2FwdGlvbi5zdHlsZX0+e3RoaXMucHJvcHMuY2FwdGlvbi5yZW5kZXJ9PC9jYXB0aW9uPiB9XG5cdFx0XHRcdHsgISF0aGlzLnByb3BzLmNvbGdyb3VwICYmIDx0YWJsZS5Db2xncm91cCBjb250ZXh0PXt0aGlzLnByb3BzLmNvbnRleHR9IGtleU1hcHBpbmc9e3RoaXMucHJvcHMua2V5TWFwcGluZ30gY29sdW1ucz17Y29sdW1uc30gey4uLnRoaXMucHJvcHMuY29sZ3JvdXB9IC8+IH1cblx0XHRcdFx0eyAhIXRoaXMucHJvcHMudGhlYWQgJiYgPHRhYmxlLlRIZWFkIGNvbnRleHQ9e3RoaXMucHJvcHMuY29udGV4dH0gb25Tb3J0PXt0aGlzLl9fb25Tb3J0fSBvbkNvbHVtbkNoYW5nZT17dGhpcy5fX29uVEhlYWRDb2x1bW5DaGFuZ2V9IGNvbHVtbnM9e2NvbHVtbnN9IGtleU1hcHBpbmc9e3RoaXMucHJvcHMua2V5TWFwcGluZ30gey4uLnRoaXMucHJvcHMudGhlYWR9IHRhYmxlPXt0aGlzfSAvPn1cblx0XHRcdFx0eyAhIXRoaXMucHJvcHMudGZpbHRlciAmJiA8dGFibGUuVEZpbHRlciBjb250ZXh0PXt0aGlzLnByb3BzLmNvbnRleHR9IG9uRmlsdGVyPXt0aGlzLl9fb25GaWx0ZXJ9IGNvbHVtbnM9e2NvbHVtbnN9IHsuLi50aGlzLnByb3BzLnRmaWx0ZXJ9IHRhYmxlPXt0aGlzfSAvPn1cblx0XHRcdFx0eyAodGhpcy5wcm9wcy50Ym9keSB8fCB0aGlzLnByb3BzLmRhdGEpICYmIHRoaXMuX19yZW5kZXJUQm9keShjb2x1bW5zKSB9XG5cdFx0XHRcdHsgISF0aGlzLnByb3BzLnRmb290ICYmIDx0YWJsZS5URm9vdCBjb250ZXh0PXt0aGlzLnByb3BzLmNvbnRleHR9IGNvbHVtbnM9e2NvbHVtbnN9IHsuLi50aGlzLnByb3BzLnRmb290fSB0YWJsZT17dGhpc30gLz59XG5cdFx0XHRcdHsgdGhpcy5wcm9wcy5jaGlsZHJlblJlbmRlciAmJiB0aGlzLnByb3BzLmNoaWxkcmVuUmVuZGVyKGNvbHVtbnMsIHRoaXMpIH1cblx0XHRcdFx0eyB0aGlzLnByb3BzLmNoaWxkcmVuIH1cblx0XHRcdDwvdGFibGU+XG5cdFx0KTtcblx0fSxcblx0X19yb3dIZWFkQ2hlY2tib3hDaGVja2VkOiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX2NoZWNrZWRzID0gdGhpcy5zdGF0ZS5jaGVja2VkcywgX3ZhbHVlS2V5ID0gdGhpcy5wcm9wcy52YWx1ZUtleSB8fCAnenhuel9VVUlEJztcblx0XHRpZighX2NoZWNrZWRzLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuXHRcdGZvcih2YXIgaXRlbSBvZiB0aGlzLnN0YXRlLmRhdGEpIHtcblx0XHRcdGlmKCFpdGVtLl9fY2hlY2tlZERpc2FibGVkX18gJiYgX2NoZWNrZWRzLmluZGV4T2YoaXRlbVtfdmFsdWVLZXldKSA9PSAtMSl7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSxcblx0X19vblJvd0hlYWRDaGVja2JveENoYW5nZTogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR2YXIgX3ZhbHVlS2V5ID0gdGhpcy5wcm9wcy52YWx1ZUtleSB8fCAnenhuel9VVUlEJztcblx0XHRpZihldmVudC5jaGVja2VkKSB7XG5cdFx0XHRmb3IodmFyIGl0ZW0gb2YgdGhpcy5zdGF0ZS5kYXRhKSB7XG5cdFx0XHRcdGlmKCFpdGVtLl9fY2hlY2tlZERpc2FibGVkX18gJiYgdGhpcy5zdGF0ZS5jaGVja2Vkcy5pbmRleE9mKGl0ZW1bX3ZhbHVlS2V5XSkgPT0gLTEpe1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUuY2hlY2tlZHMucHVzaChpdGVtW192YWx1ZUtleV0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fWVsc2V7XG5cdFx0XHRmb3IodmFyIGl0ZW0gb2YgdGhpcy5zdGF0ZS5kYXRhKSB7XG5cdFx0XHRcdGlmKCFpdGVtLl9fY2hlY2tlZERpc2FibGVkX18gJiYgdGhpcy5zdGF0ZS5jaGVja2Vkcy5pbmRleE9mKGl0ZW1bX3ZhbHVlS2V5XSkgIT0gLTEpe1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUuY2hlY2tlZHMuc3BsaWNlKHRoaXMuc3RhdGUuY2hlY2tlZHMuaW5kZXhPZihpdGVtW192YWx1ZUtleV0pLCAxKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHR0aGlzLmZvcmNlVXBkYXRlKCk7XG5cdFx0dGhpcy5wcm9wcy5vbkNoZWNrYm94Q2hhbmdlICYmIHRoaXMucHJvcHMub25DaGVja2JveENoYW5nZSh0aGlzLnN0YXRlLmNoZWNrZWRzLCB0aGlzKTtcblx0fSxcblx0X19pbml0Q2hlY2tib3g6IGZ1bmN0aW9uIChjb2x1bW5zKXtcblx0XHRpZighdGhpcy5wcm9wcy5jaGVja2JveCkgcmV0dXJuO1xuXHRcdHZhciBfdmFsdWVLZXkgPSB0aGlzLnByb3BzLnZhbHVlS2V5IHx8ICd6eG56X1VVSUQnLCBfdmFsdWUgPSB0aGlzLnByb3BzLmNoZWNrYm94O1xuXHRcdHZhciBfY2hlY2tib3ggPSB7XG5cdFx0XHR3aWR0aDogNjAsXG5cdFx0XHRmaXhlZDogdHJ1ZSxcblx0XHRcdGhlYWQ6IChhcmd2KT0+e1xuXHRcdFx0XHR2YXIgX3RhYmxlID0gYXJndi50aGVhZC5wcm9wcy50YWJsZTtcblx0XHRcdFx0aWYoIV90YWJsZSkgcmV0dXJuO1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxzZWxlY3Rvci5DaGVja2JveFxuXHRcdFx0XHRcdFx0c3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19XG5cdFx0XHRcdFx0XHRrZXk9e3puLnV1aWQoKX1cblx0XHRcdFx0XHRcdHRleHQ9eycgJyArIF90YWJsZS5zdGF0ZS5jaGVja2Vkcy5sZW5ndGh9XG5cdFx0XHRcdFx0XHRjaGVja2VkPXt0aGlzLl9fcm93SGVhZENoZWNrYm94Q2hlY2tlZCgpfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuX19vblJvd0hlYWRDaGVja2JveENoYW5nZX0gLz5cblx0XHRcdFx0KTtcblx0XHRcdH0sXG5cdFx0XHRib2R5OiAoYXJndik9Pntcblx0XHRcdFx0dmFyIF9kYXRhID0gYXJndi5kYXRhO1xuXHRcdFx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMub25Cb2R5Q29sdW1uQ2hlY2tib3hSZW5kZXIgJiYgdGhpcy5wcm9wcy5vbkJvZHlDb2x1bW5DaGVja2JveFJlbmRlcihhcmd2LCB0aGlzKTtcblx0XHRcdFx0aWYoX3JldHVybikge1xuXHRcdFx0XHRcdHJldHVybiBfcmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmKF9yZXR1cm4gPT09IGZhbHNlKXtcblx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxzZWxlY3Rvci5VbmNvbnRyb2xDaGVja2JveCBcblx0XHRcdFx0XHRcdHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fVxuXHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e19kYXRhLl9fY2hlY2tlZERpc2FibGVkX199XG5cdFx0XHRcdFx0XHRjaGVja2VkPXt0aGlzLnN0YXRlLmNoZWNrZWRzLmluZGV4T2YoX2RhdGFbX3ZhbHVlS2V5XSkgIT09IC0xfVxuXHRcdFx0XHRcdFx0b25DbGljaz17KGV2ZW50LCBjaGVja2JveCk9Pntcblx0XHRcdFx0XHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdFx0XHRcdGlmKGNoZWNrYm94LnByb3BzLmNoZWNrZWQpIHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnN0YXRlLmNoZWNrZWRzLnNwbGljZSh0aGlzLnN0YXRlLmNoZWNrZWRzLmluZGV4T2YoX2RhdGFbX3ZhbHVlS2V5XSksIDEpOyBcblx0XHRcdFx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5zdGF0ZS5jaGVja2Vkcy5wdXNoKF9kYXRhW192YWx1ZUtleV0pO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdHRoaXMuZm9yY2VVcGRhdGUoKTtcblx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5vbkNoZWNrYm94Q2hhbmdlICYmIHRoaXMucHJvcHMub25DaGVja2JveENoYW5nZSh0aGlzLnN0YXRlLmNoZWNrZWRzLCB0aGlzKTtcblx0XHRcdFx0XHRcdH19IC8+XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRzd2l0Y2goem4udHlwZShfdmFsdWUpKSB7XG5cdFx0XHRjYXNlICdvYmplY3QnOlxuXHRcdFx0XHRfY2hlY2tib3ggPSB6bi5leHRlbmQoe30sIF92YWx1ZSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnbnVtYmVyJzpcblx0XHRcdFx0X2NoZWNrYm94LndpZHRoID0gX3ZhbHVlO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cblx0XHRjb2x1bW5zID0gY29sdW1ucy51bnNoaWZ0KF9jaGVja2JveCk7XG5cdH0sXG5cdF9faW5pdEluZGV4Q29sdW1uOiBmdW5jdGlvbiAoY29sdW1ucyl7XG5cdFx0aWYodGhpcy5wcm9wcy5kYXRhSW5kZXhFbmFibGVkKSB7XG5cdFx0XHRjb2x1bW5zID0gY29sdW1ucy51bnNoaWZ0KHtcblx0XHRcdFx0d2lkdGg6IDQ4LFxuXHRcdFx0XHRsYWJlbDogJ+e0ouW8lScsIFxuXHRcdFx0XHRmaXhlZDogdHJ1ZSxcblx0XHRcdFx0bmFtZTogJ19faW5kZXhfXycsXG5cdFx0XHRcdGJvZHk6IGZ1bmN0aW9uIChhcmd2KXtcblx0XHRcdFx0XHRyZXR1cm4gKDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT57KCthcmd2LnJvd0luZGV4KSArIDF9PC9kaXY+KTtcblx0XHRcdFx0fS5iaW5kKHRoaXMpXG5cdFx0XHR9KTtcblx0XHR9XG5cdH0sXG5cdF9fY29sdW1uc0xvYWRlZDogZnVuY3Rpb24gKGNvbHVtbnMpe1xuXHRcdGlmKGNvbHVtbnMgJiYgem4uaXMoY29sdW1ucywgJ2FycmF5Jykpe1xuXHRcdFx0dmFyIF90ZW1wID0gbnVsbCxcblx0XHRcdFx0X3Jlc3VsdCA9IG51bGwsXG5cdFx0XHRcdF9jb2x1bW5JdGVyYXRvciA9IHRoaXMucHJvcHMuY29sdW1uSXRlcmF0b3IsXG5cdFx0XHRcdF9jb2x1bW5zID0gY29sdW1ucy5tYXAoKGNvbHVtbik9Pntcblx0XHRcdFx0XHRfdGVtcCA9IHpuLmRlZXBBc3NpZ24oe30sIGNvbHVtbik7XG5cdFx0XHRcdFx0X3Jlc3VsdCA9IF9jb2x1bW5JdGVyYXRvciAmJiBfY29sdW1uSXRlcmF0b3IoX3RlbXAsIHRoaXMpO1xuXHRcdFx0XHRcdGlmKF9yZXN1bHQgPT09IGZhbHNlKSByZXR1cm4gbnVsbDtcblx0XHRcdFx0XHRpZih0eXBlb2YgX3Jlc3VsdCA9PSAnb2JqZWN0JykgcmV0dXJuIF9yZXN1bHQ7XG5cblx0XHRcdFx0XHRyZXR1cm4gX3RlbXA7XG5cdFx0XHRcdH0pO1xuXHRcdFx0dGhpcy5fX2luaXRDaGVja2JveChfY29sdW1ucyk7XG5cdFx0XHR0aGlzLl9faW5pdEluZGV4Q29sdW1uKF9jb2x1bW5zKTtcblx0XHRcdHRoaXMucHJvcHMub25Db2x1bW5zTG9hZGVkICYmIHRoaXMucHJvcHMub25Db2x1bW5zTG9hZGVkKGNvbHVtbnMpO1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGNvbHVtbnM6IF9jb2x1bW5zIH0pO1xuXHRcdH1cblx0fSxcblx0X19vbkNvbHVtbkRhdGFDcmVhdGVkOiBmdW5jdGlvbiAoZGF0YSwgbGlmZWN5Y2xlKXtcblx0XHR0aGlzLmNvbHVtbnMgPSBkYXRhO1xuXHRcdHRoaXMucHJvcHMub25Db2x1bW5zQ3JlYXRlZCAmJiB0aGlzLnByb3BzLm9uQ29sdW1uc0NyZWF0ZWQoZGF0YSwgdGhpcywgbGlmZWN5Y2xlKTtcblx0fSxcblx0Z2V0RGF0YTogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHRoaXMuc3RhdGUuZGF0YTtcblx0fSxcblx0cmVtb3ZlUm93RGF0YTogZnVuY3Rpb24gKGRhdGEpe1xuXHRcdGlmKGRhdGEpIHtcblx0XHRcdHRoaXMuc3RhdGUuZGF0YS5zcGxpY2UodGhpcy5zdGF0ZS5kYXRhLmluZGV4T2YoZGF0YSksIDEpO1xuXHRcdFx0dGhpcy5mb3JjZVVwZGF0ZSgpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXHR1cGRhdGVSb3dEYXRhOiBmdW5jdGlvbiAoZGF0YSl7XG5cdFx0aWYoZGF0YSkge1xuXHRcdFx0dmFyIF9pbmRleCA9IHRoaXMuc3RhdGUuZGF0YS5pbmRleE9mKGRhdGEpO1xuXHRcdFx0dGhpcy5zdGF0ZS5kYXRhW19pbmRleF0gPSBkYXRhO1xuXHRcdFx0dGhpcy5mb3JjZVVwZGF0ZSgpO1xuXHRcdH1cblx0XHRcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiA8em51aS5yZWFjdC5EYXRhTGlmZWN5Y2xlXG5cdFx0XHRcdFx0ZGF0YT17dGhpcy5wcm9wcy5jb2x1bW5zfVxuXHRcdFx0XHRcdHJlbmRlcj17dGhpcy5fX3JlbmRlcn1cblx0XHRcdFx0XHRyZXNwb25zZUhhbmRsZXI9e3RoaXMucHJvcHMucmVzcG9uc2VIYW5kbGVyfVxuXHRcdFx0XHRcdG9uTG9hZGluZz17dGhpcy5wcm9wcy5vbkNvbHVtbkxvYWRpbmd9XG5cdFx0XHRcdFx0b25GaW5pc2hlZD17dGhpcy5fX2NvbHVtbnNMb2FkZWR9XG5cdFx0XHRcdFx0b25FcnJvcj17dGhpcy5wcm9wcy5vbkNvbHVtbkxvYWRFcnJvcn1cblx0XHRcdFx0XHRvbkRhdGFDcmVhdGVkPXt0aGlzLl9fb25Db2x1bW5EYXRhQ3JlYXRlZH0gLz47XG5cdH1cbn0pOyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBUYWJsZSA9IHJlcXVpcmUoJy4vVGFibGUnKTtcbnZhciBpbnB1dCA9IHJlcXVpcmUoJ3pudWktcmVhY3QtaW5wdXQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUlRhYmxlRWRpdG9yJyxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dGFibGU6IG51bGwsXG5cdFx0XHRjb2x1bW5zOiBbXVxuXHRcdH07XG5cdH0sXG5cdF9fY2VsbENoYW5nZTogZnVuY3Rpb24gKGV2ZW50LCBhcmd2KXtcblx0XHRhcmd2LmRhdGFbYXJndi50Y2VsbC5wcm9wcy5uYW1lXSA9IGV2ZW50LnZhbHVlO1xuXHRcdGFyZ3YudHJvdy5mb3JjZVVwZGF0ZSgpO1xuXHR9LFxuXHRfX2NvbHVtbkJvZHlSZW5kZXI6IGZ1bmN0aW9uIChhcmd2KXtcblx0XHRyZXR1cm4gPGlucHV0LklucHV0IFxuXHRcdFx0a2V5PXthcmd2LnZhbHVlfSBcblx0XHRcdHZhbHVlPXthcmd2LnZhbHVlfSBcblx0XHRcdG9uQmx1cj17KGV2ZW50KT0+dGhpcy5fX2NlbGxDaGFuZ2UoZXZlbnQsIGFyZ3YpfVxuXHRcdFx0b25FbnRlcj17KGV2ZW50KT0+dGhpcy5fX2NlbGxDaGFuZ2UoZXZlbnQsIGFyZ3YpfSAvPjtcblx0fSxcblx0X19jb2x1bW5JdGVyYXRvcjogZnVuY3Rpb24gKGNvbHVtbiwgdGFibGUpe1xuXHRcdGlmKCFjb2x1bW4uYm9keSkge1xuXHRcdFx0Y29sdW1uLmJvZHkgPSB0aGlzLl9fY29sdW1uQm9keVJlbmRlcjtcblx0XHR9XG5cblx0XHRyZXR1cm4gY29sdW1uO1xuXHR9LFxuXHRzZXREYXRhOiBmdW5jdGlvbiAoZGF0YSl7XG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLm9uRGF0YUNoYW5nZSAmJiB0aGlzLnByb3BzLm9uRGF0YUNoYW5nZShkYXRhLCB0aGlzLnN0YXRlLnRhYmxlLCB0aGlzKTtcblx0XHRpZihfcmV0dXJuID09PSBmYWxzZSl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGlmKHR5cGVvZiBfcmV0dXJuID09ICdvYmplY3QnKSB7XG5cdFx0XHRkYXRhID0gX3JldHVybjtcblx0XHR9XG5cdFx0dGhpcy5zdGF0ZS50YWJsZS5zdGF0ZS5kYXRhID0gZGF0YTtcblx0XHR0aGlzLnN0YXRlLnRhYmxlLmZvcmNlVXBkYXRlKCk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblx0Z2V0RGF0YTogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHRoaXMuc3RhdGUudGFibGUuZ2V0RGF0YSgpO1xuXHR9LFxuXHRhZGRSb3c6IGZ1bmN0aW9uIChkYXRhKXtcblx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMub25EYXRhQ2hhbmdlICYmIHRoaXMucHJvcHMub25EYXRhQ2hhbmdlKFtkYXRhXSwgdGhpcy5zdGF0ZS50YWJsZSwgdGhpcyk7XG5cdFx0aWYoX3JldHVybiA9PT0gZmFsc2Upe1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRpZih6bi5pcyhfcmV0dXJuLCAnYXJyYXknKSkge1xuXHRcdFx0ZGF0YSA9IF9yZXR1cm47XG5cdFx0fWVsc2UgaWYoem4uaXMoX3JldHVybiwgJ29iamVjdCcpKXtcblx0XHRcdGRhdGEgPSBbIGRhdGEgXTtcblx0XHR9XG5cblx0XHR0aGlzLnN0YXRlLnRhYmxlLnN0YXRlLmRhdGEgPSB0aGlzLnN0YXRlLnRhYmxlLnN0YXRlLmRhdGEuY29uY2F0KGRhdGEpO1xuXHRcdHRoaXMuc3RhdGUudGFibGUuZm9yY2VVcGRhdGUoKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxUYWJsZSB7Li4udGhpcy5wcm9wc30gcmVmPXsocmVmKSA9PiB0aGlzLnN0YXRlLnRhYmxlID0gcmVmfSBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd6ci10YWJsZS1lZGl0b3InLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IGNvbHVtbkl0ZXJhdG9yPXt0aGlzLl9fY29sdW1uSXRlcmF0b3J9IC8+XG5cdFx0KVxuXHR9XG59KTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgVGFibGUgPSByZXF1aXJlKCcuL1RhYmxlJyk7XG52YXIgcGFnZXIgPSByZXF1aXJlKCd6bnVpLXJlYWN0LXBhZ2VyJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJUYWJsZVBhZ2VyJyxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y291bnQ6IDAsXG5cdFx0XHRjdXJyZW50OiAxLFxuXHRcdFx0ZGF0YTogW10sXG5cdFx0XHR0b3RhbDogMCxcblx0XHRcdHBhZ2VJbmRleDogdGhpcy5wcm9wcy5wYWdlSW5kZXggfHwgMSxcblx0XHRcdHBhZ2VTaXplOiB0aGlzLnByb3BzLnBhZ2VTaXplIHx8IDEwLFxuXHRcdH07XG5cdH0sXG5cdGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpe1xuXHRcdHRoaXMucHJvcHMub25Db21wb25lbnREaWRNb3VudCAmJiB0aGlzLnByb3BzLm9uQ29tcG9uZW50RGlkTW91bnQodGhpcyk7XG5cdH0sXG5cdHNldDogZnVuY3Rpb24gKCl7XG5cdFx0dGhpcy5fdGFibGUuZGF0YS5fYXJndi5kYXRhLnR5cGUgPSBfdHlwZTtcblx0XHR0aGlzLl90YWJsZS5zZXRQYWdlSW5kZXgoMSk7XG5cdH0sXG5cdHNldFBhZ2VJbmRleDogZnVuY3Rpb24gKHBhZ2VJbmRleCwgYXJndiwgY2FsbGJhY2spe1xuXHRcdGlmKHRoaXMuZGF0YSl7XG5cdFx0XHRpZihwYWdlSW5kZXggPT0gMSl7XG5cdFx0XHRcdHRoaXMuX3RhYmxlLnNldFN0YXRlKHtcblx0XHRcdFx0XHRjaGVja2VkczogW11cblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnN0YXRlLnBhZ2VJbmRleCA9IHBhZ2VJbmRleDtcblx0XHRcdHRoaXMuc3RhdGUuY3VycmVudCA9IHBhZ2VJbmRleDtcblx0XHRcdHRoaXMuZm9yY2VVcGRhdGUoKTtcblx0XHRcdHRoaXMuZGF0YS5fYXJndiA9IHRoaXMuX19vbkRhdGFJbml0aWFsKHRoaXMucHJvcHMuZGF0YSk7XG5cdFx0XHRpZihhcmd2ICYmIHR5cGVvZiBhcmd2ID09ICdvYmplY3QnKXtcblx0XHRcdFx0aWYoIXRoaXMuZGF0YS5fYXJndi5kYXRhKXtcblx0XHRcdFx0XHR0aGlzLmRhdGEuX2FyZ3YuZGF0YSA9IHt9O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGZvcih2YXIga2V5IGluIGFyZ3Ype1xuXHRcdFx0XHRcdHRoaXMuZGF0YS5fYXJndi5kYXRhW2tleV0gPSBhcmd2W2tleV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRoaXMuZGF0YS5yZWZyZXNoKGNhbGxiYWNrKTtcblx0XHR9XG5cdH0sXG5cdHJlZnJlc2g6IGZ1bmN0aW9uIChjYWxsYmFjayl7XG5cdFx0aWYodGhpcy5fdGFibGUpe1xuXHRcdFx0dGhpcy5fdGFibGUucmVmcmVzaChjYWxsYmFjayk7XG5cdFx0fVxuXHR9LFxuXHRfX2hhbmRsZVBhZ2VDaGFuZ2VkOiBmdW5jdGlvbiAobmV3UGFnZSl7XG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLm9uUGFnZUNoYW5nZWQgJiYgdGhpcy5wcm9wcy5vblBhZ2VDaGFuZ2VkKG5ld1BhZ2UsIHRoaXMpO1xuXHRcdGlmKF9yZXR1cm4gIT09IGZhbHNlKSB7XG5cdFx0XHR0aGlzLnNldFBhZ2VJbmRleChuZXdQYWdlKTtcblx0XHR9XG5cdH0sXG5cdF9faGFuZGxlUGFnZVNpemVDaGFuZ2U6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRwYWdlU2l6ZTogZXZlbnQudGFyZ2V0LnZhbHVlXG5cdFx0fSwgKCk9PnRoaXMuc2V0UGFnZUluZGV4KDEpKTtcblx0fSxcblx0X19yZW5kZXJQYWdlcjogZnVuY3Rpb24gKGNvbHVtbnMsIHRhYmxlKXtcblx0XHR2YXIgX2NvbHVtblNpemUgPSBjb2x1bW5zLmxlbmd0aDtcblx0XHRpZighX2NvbHVtblNpemUpe1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdHZhciBfc3RhdGUgPSB0aGlzLnN0YXRlLFxuXHRcdFx0X2VsZW1lbnQgPSBudWxsLFxuXHRcdFx0X3BhZ2VyUHJvcHMgPSB7XG5cdFx0XHRcdHRvdGFsOiBfc3RhdGUudG90YWwsXG5cdFx0XHRcdGNvdW50OiBfc3RhdGUuY291bnQsXG5cdFx0XHRcdGN1cnJlbnQ6IF9zdGF0ZS5jdXJyZW50LFxuXHRcdFx0XHRwYWdlU2l6ZTogX3N0YXRlLnBhZ2VTaXplLFxuXHRcdFx0XHRvblBhZ2VDaGFuZ2VkOiB0aGlzLl9faGFuZGxlUGFnZUNoYW5nZWQsXG5cdFx0XHRcdG9uUGFnZVNpemVDaGFuZ2U6IHRoaXMuX19oYW5kbGVQYWdlU2l6ZUNoYW5nZVxuXHRcdFx0fSxcblx0XHRcdF9Db21wb25lbnQgPSB0aGlzLnByb3BzLnBhZ2VyIHx8IHBhZ2VyLlBhZ2VyO1xuXHRcdGlmKHpuLmlzKF9Db21wb25lbnQsICdzdHJpbmcnKSl7XG5cdFx0XHRfQ29tcG9uZW50ID0gem4ucGF0aCh3aW5kb3csIF9Db21wb25lbnQpO1xuXHRcdH1lbHNlIGlmKHpuLmlzKF9Db21wb25lbnQsICdvYmplY3QnKSAmJiBfQ29tcG9uZW50LmNvbXBvbmVudCl7XG5cdFx0XHRfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KF9Db21wb25lbnQuY29tcG9uZW50LCB6bi5leHRlbmQoe30sIF9Db21wb25lbnQsIF9wYWdlclByb3BzKSk7XG5cdFx0fVxuXG5cdFx0aWYodGhpcy5wcm9wcy5wYWdlclJlbmRlcil7XG5cdFx0XHRfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMucGFnZXJSZW5kZXIsIF9wYWdlclByb3BzKTtcblx0XHR9XG5cblx0XHRpZighX2VsZW1lbnQgJiYgX0NvbXBvbmVudCAmJiB6bi5pcyhfQ29tcG9uZW50LCAnZnVuY3Rpb24nKSl7XG5cdFx0IFx0X2VsZW1lbnQgPSA8X0NvbXBvbmVudCB7Li4uX3BhZ2VyUHJvcHN9IC8+O1xuXHRcdH1cblxuXHRcdGlmKHRoaXMucHJvcHMuZml4ZWRMYXlvdXQpIHtcblx0XHRcdHJldHVybiAoPGRpdj57X2VsZW1lbnR9PC9kaXY+KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PHRmb290IGNsYXNzTmFtZT1cInRhYmxlLXBhZ2VyXCI+XG5cdFx0XHRcdDx0ciBjbGFzc05hbWU9XCJwYWdlci1yb3dcIj5cblx0XHRcdFx0XHQ8dGQgY29sU3Bhbj17X2NvbHVtblNpemV9PntfZWxlbWVudH08L3RkPlxuXHRcdFx0XHQ8L3RyPlxuXHRcdFx0PC90Zm9vdD5cblx0XHQpO1xuXHR9LFxuXHRfX29uRGF0YUluaXRpYWw6IGZ1bmN0aW9uIChkYXRhKXtcblx0XHR2YXIgX21ldGhvZCA9IGRhdGEubWV0aG9kfHwncG9zdCcsXG5cdFx0XHRfcGFyYW1zID0ge30sXG5cdFx0XHRfa2V5TWFwcyA9IHpuLmRlZXBBc3NpZ24oe1xuXHRcdFx0XHR0b3RhbDogXCJ0b3RhbFwiLFxuXHRcdFx0XHRwYWdlSW5kZXg6ICdwYWdlSW5kZXgnLFxuXHRcdFx0XHRwYWdlU2l6ZTogJ3BhZ2VTaXplJyxcblx0XHRcdFx0ZGF0YTogJ2RhdGEnXG5cdFx0XHR9LCB0aGlzLnByb3BzLmtleU1hcHMpO1xuXG5cdFx0X3BhcmFtc1tfa2V5TWFwcy5wYWdlSW5kZXhdID0gdGhpcy5zdGF0ZS5wYWdlSW5kZXggfHwgMTtcblx0XHRfcGFyYW1zW19rZXlNYXBzLnBhZ2VTaXplXSA9IHRoaXMuc3RhdGUucGFnZVNpemUgfHwgMTA7XG5cdFx0aWYoX21ldGhvZCA9PSAnZ2V0Jyl7XG5cdFx0XHRkYXRhID0gem4uZGVlcEFzc2lnbihkYXRhLCB7XG5cdFx0XHRcdHBhcmFtczogX3BhcmFtc1xuXHRcdFx0fSk7XG5cdFx0fWVsc2V7XG5cdFx0XHRkYXRhID0gem4uZGVlcEFzc2lnbihkYXRhLCB7XG5cdFx0XHRcdGRhdGE6IF9wYXJhbXNcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRcblx0XHRyZXR1cm4gdGhpcy5zdGF0ZS5rZXlNYXBzID0gX2tleU1hcHMsIGRhdGE7XG5cdH0sXG5cdF9fb25EYXRhQ3JlYXRlZDogZnVuY3Rpb24gKGRhdGEsIHRhYmxlKXtcblx0XHR0aGlzLmRhdGEgPSBkYXRhO1xuXHRcdHRoaXMucHJvcHMub25EYXRhQ3JlYXRlZCAmJiB0aGlzLnByb3BzLm9uRGF0YUNyZWF0ZWQoZGF0YSwgdGFibGUsIHRoaXMpO1xuXHR9LFxuXHRfX29uRGF0YUxvYWRlZDogZnVuY3Rpb24gKGRhdGEsIHRhYmxlKXtcblx0XHRpZih0aGlzLnByb3BzLnp4bnope1xuXHRcdFx0aWYoem4uaXMoZGF0YSwgJ29iamVjdCcpICYmIGRhdGEuY29kZSAhPSAyMDApe1xuXHRcdFx0XHRyZXR1cm4gY29uc29sZS5lcnJvcihkYXRhLmRldGFpbCksIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0aWYoem4uaXMoZGF0YSwgJ29iamVjdCcpICYmIGRhdGEuY29kZSA9PSAyMDApe1xuXHRcdFx0XHRkYXRhID0gZGF0YS5yZXN1bHQ7XG5cdFx0XHR9XG5cdFx0XHRpZighem4uaXMoZGF0YSwgJ2FycmF5Jykpe1xuXHRcdFx0XHRyZXR1cm4gY29uc29sZS5lcnJvcihcIlRhYmxlUGFnZXIgQ29tcG9uZW50IERhdGEgVHlwZSBFcnJvci5cIiksIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0dmFyIF9kYXRhID0gZGF0YVswXSxcblx0XHRcdFx0X3BhZ2VyQ291bnQgPSBkYXRhWzFdWzBdLmNvdW50O1xuXHRcdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLm9uRGF0YUxvYWRlZCAmJiB0aGlzLnByb3BzLm9uRGF0YUxvYWRlZChfZGF0YSwgdGFibGUsIHRoaXMpO1xuXHRcdFx0aWYoX3JldHVybiAhPT0gZmFsc2Upe1xuXHRcdFx0XHR0YWJsZS5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0ZGF0YTogX2RhdGFcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdHRvdGFsOiBNYXRoLmNlaWwoX3BhZ2VyQ291bnQvdGhpcy5zdGF0ZS5wYWdlU2l6ZSksXG5cdFx0XHRcdFx0Y291bnQ6IF9wYWdlckNvdW50LFxuXHRcdFx0XHRcdGN1cnJlbnQ6IHRoaXMuc3RhdGUuY3VycmVudCxcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fWVsc2V7XG5cdFx0XHRpZih6bi5pcyhkYXRhLCAnYXJyYXknKSl7XG5cdFx0XHRcdHJldHVybiBjb25zb2xlLmVycm9yKCdUaGUgZGF0YSBpcyBhcnJheSwgYnV0IGl0IG5lZWQgcmV0dXJuIG9iamVjdCcpLCBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHZhciBfZGF0YSA9IGRhdGEuZGF0YTtcblx0XHRcdHZhciBfcmV0dXJuID0gdGhpcy5wcm9wcy5vbkRhdGFMb2FkZWQgJiYgdGhpcy5wcm9wcy5vbkRhdGFMb2FkZWQoX2RhdGEsIHRhYmxlLCB0aGlzKTtcblx0XHRcdGlmKF9yZXR1cm4gIT09IGZhbHNlKXtcblx0XHRcdFx0dGFibGUuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdGRhdGE6IF9kYXRhW3RoaXMuc3RhdGUua2V5TWFwcy5kYXRhXVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0dG90YWw6IE1hdGguY2VpbChfZGF0YVt0aGlzLnN0YXRlLmtleU1hcHMudG90YWxdL3RoaXMuc3RhdGUucGFnZVNpemUpLFxuXHRcdFx0XHRcdGNvdW50OiBfZGF0YVt0aGlzLnN0YXRlLmtleU1hcHMudG90YWxdLFxuXHRcdFx0XHRcdGN1cnJlbnQ6IF9kYXRhW3RoaXMuc3RhdGUua2V5TWFwcy5wYWdlSW5kZXhdXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fSxcblx0X19vbkZpbHRlckNoYW5nZTogZnVuY3Rpb24gKGZpbHRlcnMsIGRhdGEsIHRhYmxlKXtcblx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMub25GaWx0ZXJDaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkZpbHRlckNoYW5nZShmaWx0ZXJzLCBkYXRhLCB0YWJsZSk7XG5cdFx0aWYoX3JldHVybiAhPT0gZmFsc2Upe1xuXHRcdFx0aWYoIXRoaXMuZGF0YS5fYXJndi5kYXRhKSB7XG5cdFx0XHRcdHRoaXMuZGF0YS5fYXJndi5kYXRhID0ge307XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmRhdGEuX2FyZ3YuZGF0YS5maWx0ZXJzID0gZmlsdGVycztcblx0XHRcdHRoaXMuc2V0UGFnZUluZGV4KDEpO1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8VGFibGUgey4uLnRoaXMucHJvcHN9IFxuXHRcdFx0XHRjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd6ci10YWJsZS1wYWdlcicsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gXG5cdFx0XHRcdGNoaWxkcmVuUmVuZGVyPXt0aGlzLl9fcmVuZGVyUGFnZXJ9XG5cdFx0XHRcdG9uQ29tcG9uZW50RGlkTW91bnQ9eyh0YWJsZSk9PnsgXG5cdFx0XHRcdFx0dGhpcy5fdGFibGUgPSB0YWJsZTsgXG5cdFx0XHRcdH19XG5cdFx0XHRcdG9uRmlsdGVyQ2hhbmdlPXt0aGlzLl9fb25GaWx0ZXJDaGFuZ2V9XG5cdFx0XHRcdG9uRGF0YUluaXRpYWw9e3RoaXMuX19vbkRhdGFJbml0aWFsfVxuXHRcdFx0XHRvbkRhdGFDcmVhdGVkPXt0aGlzLl9fb25EYXRhQ3JlYXRlZH1cblx0XHRcdFx0b25EYXRhTG9hZGVkPXt0aGlzLl9fb25EYXRhTG9hZGVkfSAvPlxuXHRcdCk7XG5cdH1cbn0pOyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBDaGVja2JveCA9IHJlcXVpcmUoJ3pudWktcmVhY3Qtc2VsZWN0b3InKS5DaGVja2JveDtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUlRDZWxsQ2hlY2tib3gnLFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y2hlY2tlZDogdGhpcy5wcm9wcy5jaGVja2VkIHx8IGZhbHNlXG5cdFx0fVxuXHR9LFxuXHRfX29uQ2hlY2tib3hDaGFuZ2U6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0aWYodGhpcy5wcm9wcy50aGVhZCkge1xuXHRcdFx0dGhpcy5fX29uSGVhZENoYW5nZShldmVudCk7XG5cdFx0fWVsc2UgaWYodGhpcy5wcm9wcy50Ym9keSkge1xuXHRcdFx0dGhpcy5fX29uQm9keUNoYW5nZShldmVudCk7XG5cdFx0fVxuXHR9LFxuXHRfX29uSGVhZENoYW5nZTogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHRjb25zb2xlLmxvZyhldmVudC5jaGVja2VkLCB0aGlzLnByb3BzKTtcblx0fSxcblx0X19vbkJvZHlDaGFuZ2U6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0Y29uc29sZS5sb2coZXZlbnQuY2hlY2tlZCwgdGhpcy5wcm9wcyk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ6ci10YWJsZS1jZWxsLWNoZWNrYm94XCI+PENoZWNrYm94IGNoZWNrZWQ9e3RydWV9IG9uQ2hhbmdlPXt0aGlzLl9fb25DaGVja2JveENoYW5nZX0vPjwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgQ2hlY2tib3g6IHJlcXVpcmUoJy4vQ2hlY2tib3gnKSxcbiAgICAvL0J1dHRvbnM6IHJlcXVpcmUoJy4vQnV0dG9ucycpLFxuICAgIC8vSW5wdXQ6IHJlcXVpcmUoJy4vSW5wdXQnKSxcbiAgICAvL0NhbGN1bGF0b3I6IHJlcXVpcmUoJy4vQ2FsY3VsYXRvcicpXG59OyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIHRhYmxlOiByZXF1aXJlKCcuL3RhYmxlL2luZGV4JyksXG4gICAgY2VsbDogcmVxdWlyZSgnLi9jZWxsL2luZGV4JyksXG4gICAgUG9wdXBUYWJsZTogcmVxdWlyZSgnLi9Qb3B1cFRhYmxlJyksXG4gICAgVGFibGU6IHJlcXVpcmUoJy4vVGFibGUnKSxcbiAgICBUYWJsZUVkaXRvcjogcmVxdWlyZSgnLi9UYWJsZUVkaXRvcicpLFxuICAgIFRhYmxlUGFnZXI6IHJlcXVpcmUoJy4vVGFibGVQYWdlcicpXG59OyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUlRhYmxlQ29sZ3JvdXAnLFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0dmFyIF9rZXlNYXBwaW5nID0gdGhpcy5wcm9wcy5rZXlNYXBwaW5nIHx8IHsgfTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGNvbGdyb3VwPlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0KHRoaXMucHJvcHMuY29sdW1uc3x8W10pLm1hcChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcblx0XHRcdFx0XHRcdHZhciBfd2lkdGggPSBfa2V5TWFwcGluZy53aWR0aCB8fCAnd2lkdGgnO1xuXHRcdFx0XHRcdFx0cmV0dXJuIDxjb2wga2V5PXtpbmRleH0gc3R5bGU9e3sgd2lkdGg6IGl0ZW1bX3dpZHRoXSB9fSAvPjtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHQ8L2NvbGdyb3VwPlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFRSb3cgPSByZXF1aXJlKCcuL1RSb3cnKTtcbnZhciBsb2FkZXIgPSByZXF1aXJlKCd6bnVpLXJlYWN0LWxvYWRlcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSVEJvZHknLFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCl7XG5cdFx0dmFyIF9wYWdlU2l6ZSA9IHRoaXMucHJvcHMucGFnZVNpemUgfHwgNTA7XG5cdFx0dmFyIF9jb2x1bW5LZXlNYXAgPSB7fSwgX2RlZmF1bHQgPSB7fTtcblx0XHRmb3IodmFyIGNvbHVtbiBvZiB0aGlzLnByb3BzLmNvbHVtbnMpe1xuXHRcdFx0X2NvbHVtbktleU1hcFtjb2x1bW4ubmFtZV0gPSBjb2x1bW47XG5cdFx0XHRpZihjb2x1bW4udmFsdWUgIT09IG51bGwgJiYgY29sdW1uLnZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0X2RlZmF1bHRbY29sdW1uLm5hbWVdID0gY29sdW1uLnZhbHVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHRhY3RpdmU6IG51bGwsXG5cdFx0XHRjaGVja2VkczogW10sXG5cdFx0XHRjbGFzc05hbWU6ICcnLFxuXHRcdFx0Y29sdW1uS2V5TWFwOiBfY29sdW1uS2V5TWFwLFxuXHRcdFx0ZGVmYXVsdDogX2RlZmF1bHQsXG5cdFx0XHRwYWdlSW5kZXg6IHRoaXMucHJvcHMucGFnZUluZGV4IHx8IDEsXG5cdFx0XHRwYWdlU2l6ZTogX3BhZ2VTaXplLFxuXHRcdFx0cGFnZUNvdW50OiBNYXRoLmNlaWwodGhpcy5wcm9wcy5kYXRhLmxlbmd0aCAvIF9wYWdlU2l6ZSksXG5cdFx0XHRzdHlsZToge30sXG5cdFx0XHRsb2FkaW5nOiBmYWxzZVxuXHRcdH07XG5cdH0sXG5cdGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiAoKXtcblx0XHRmb3IodmFyIGl0ZW0gb2YgdGhpcy5wcm9wcy5kYXRhKXtcblx0XHRcdHRoaXMuX19pbml0aWFsRGF0YUl0ZW0oaXRlbSk7XG5cdFx0fVxuXHR9LFxuXHRfX2luaXRpYWxEYXRhSXRlbTogZnVuY3Rpb24gKGRhdGEpe1xuXHRcdHZhciBfZGVmYXVsdCA9IHRoaXMuc3RhdGUuZGVmYXVsdCwgX2NvbHVtbktleU1hcCA9IHRoaXMuc3RhdGUuY29sdW1uS2V5TWFwLCBfdmFsdWUgPSBudWxsO1xuXHRcdGZvcih2YXIga2V5IGluIF9kZWZhdWx0KXtcblx0XHRcdF92YWx1ZSA9IF9kZWZhdWx0W2tleV07XG5cdFx0XHRpZih0eXBlb2YgX3ZhbHVlID09ICdzdHJpbmcnICYmIF92YWx1ZS5pbmRleE9mKCd7JykgIT0gLTEgJiYgX3ZhbHVlLmluZGV4T2YoJ30nKSAhPS0xKSB7XG5cdFx0XHRcdF92YWx1ZSA9IF92YWx1ZS5mb3JtYXQoZGF0YXx8e30pO1xuXHRcdFx0XHRpZihfY29sdW1uS2V5TWFwW2tleV0pIHtcblx0XHRcdFx0XHRzd2l0Y2goX2NvbHVtbktleU1hcFtrZXldLmRhdGFUeXBlKSB7XG5cdFx0XHRcdFx0XHRjYXNlICdOdW1iZXInOlxuXHRcdFx0XHRcdFx0XHRpZihfdmFsdWUuaW5kZXhPZigneycpID09IC0xKXtcblx0XHRcdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRcdFx0X3ZhbHVlID0gZXZhbChfdmFsdWUpO1xuXHRcdFx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRcdFx0XHRcdFx0X3ZhbHVlID0gMDtcblx0XHRcdFx0XHRcdFx0XHRcdHpuLmVycm9yKGVycik7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0Y2FzZSAnUHJpY2UnOlxuXHRcdFx0XHRcdFx0XHRfdmFsdWUgPSB6bnVpLnJlYWN0LnN0cmluZ2lmeVByaWNlKF92YWx1ZSk7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGRhdGFba2V5XSA9IF92YWx1ZTtcblx0XHRcdH1cblxuXG5cdFx0XHRpZihkYXRhW2tleV0gPT0gbnVsbCkge1xuXHRcdFx0XHRkYXRhW2tleV0gPSBfdmFsdWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGRhdGE7XG5cdH0sXG5cdF9fZ2V0RGF0YTogZnVuY3Rpb24gKHBhZ2VJbmRleCwgcGFnZVNpemUpe1xuXHRcdHZhciBfcGFnZUluZGV4ID0gcGFnZUluZGV4IHx8IHRoaXMuc3RhdGUucGFnZUluZGV4O1xuXHRcdHZhciBfcGFnZVNpemUgPSBwYWdlU2l6ZSB8fCB0aGlzLnN0YXRlLnBhZ2VTaXplO1xuXHRcdHJldHVybiB0aGlzLnByb3BzLmRhdGEuc2xpY2UoKF9wYWdlSW5kZXgtMSkgKiBfcGFnZVNpemUsIE1hdGgubWluKF9wYWdlSW5kZXggKiBfcGFnZVNpemUsIHRoaXMucHJvcHMuZGF0YS5sZW5ndGgpKTtcblx0fSxcblx0X19yZW5kZXJMb2FkaW5nOiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX2VsZW1lbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudCh0aGlzLnByb3BzLmxvYWRpbmdSZW5kZXIsIHtcblx0XHRcdHRib2R5OiB0aGlzXG5cdFx0fSwgdGhpcy5wcm9wcy5jb250ZXh0KTtcblxuXHRcdGlmKCFfZWxlbWVudCl7XG5cdFx0IFx0X2VsZW1lbnQgPSA8bG9hZGVyLkRhdGFMb2FkZXIgbG9hZGVyPVwid2F2ZVwiIHRpdGxlPXsnTG9hZGluZy4uLid9IC8+O1xuXHRcdH1cblxuXHRcdHZhciBfbG9hZGluZyA9IHpuLmV4dGVuZCh7IGNsYXNzTmFtZTogJycsIHN0eWxlOiB7fSB9LCB0aGlzLnByb3BzLmxvYWRpbmcpO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8dHIgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInRib2R5LWxvYWRpbmdcIiwgX2xvYWRpbmcuY2xhc3NOYW1lKX0gc3R5bGU9e19sb2FkaW5nLnN0eWxlfT5cblx0XHRcdFx0PHRkIGNvbFNwYW49e3RoaXMucHJvcHMuY29sdW1ucy5sZW5ndGh9PntfZWxlbWVudH08L3RkPlxuXHRcdFx0PC90cj5cblx0XHQpO1xuXHR9LFxuXHRfX3JlbmRlckVtcHR5OiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX2VsZW1lbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudCh0aGlzLnByb3BzLmVtcHR5UmVuZGVyLCB7XG5cdFx0XHR0Ym9keTogdGhpc1xuXHRcdH0sIHRoaXMucHJvcHMuY29udGV4dCk7XG5cblx0XHRpZighX2VsZW1lbnQpe1xuXHRcdCBcdF9lbGVtZW50ID0gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImVtcHR5LWNvbnRlbnRcIj5cblx0XHRcdFx0XHQ8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1wcmVmaXg9XCJmYXNcIiBkYXRhLWljb249XCJkZXNrdG9wXCIgY2xhc3NOYW1lPVwic3ZnLWlubGluZS0tZmEgZmEtZGVza3RvcCBmYS13LTE4IFwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1NzYgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNTI4IDBINDhDMjEuNSAwIDAgMjEuNSAwIDQ4djMyMGMwIDI2LjUgMjEuNSA0OCA0OCA0OGgxOTJsLTE2IDQ4aC03MmMtMTMuMyAwLTI0IDEwLjctMjQgMjRzMTAuNyAyNCAyNCAyNGgyNzJjMTMuMyAwIDI0LTEwLjcgMjQtMjRzLTEwLjctMjQtMjQtMjRoLTcybC0xNi00OGgxOTJjMjYuNSAwIDQ4LTIxLjUgNDgtNDhWNDhjMC0yNi41LTIxLjUtNDgtNDgtNDh6bS0xNiAzNTJINjRWNjRoNDQ4djI4OHpcIj48L3BhdGg+PC9zdmc+XG5cdFx0XHRcdFx0PHNwYW4+RW1wdHk8L3NwYW4+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9XG5cdFx0dmFyIF9lbXB0eSA9IHpuLmV4dGVuZCh7IGNsYXNzTmFtZTogJycsIHN0eWxlOiB7fSB9LCB0aGlzLnByb3BzLmVtcHR5KTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHRyIGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ0Ym9keS1lbXB0eVwiLCBfZW1wdHkuY2xhc3NOYW1lKX0gc3R5bGU9e19lbXB0eS5zdHlsZX0+XG5cdFx0XHRcdDx0ZCBjb2xTcGFuPXt0aGlzLnByb3BzLmNvbHVtbnMubGVuZ3RofT57X2VsZW1lbnR9PC90ZD5cblx0XHRcdDwvdHI+XG5cdFx0KTtcblx0fSxcblx0X19vblJvd0NsaWNrOiBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHR2YXIgX2RhdGEgPSBldmVudC5kYXRhO1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0YWN0aXZlOiBfZGF0YS50cm93LnByb3BzLmRhdGFcblx0XHR9KTtcblx0XHRldmVudC50Ym9keSA9IHRoaXM7XG5cdFx0dGhpcy5wcm9wcy5vblJvd0NsaWNrICYmIHRoaXMucHJvcHMub25Sb3dDbGljayhldmVudCk7XG5cdH0sXG5cdF9fb25DZWxsQ2xpY2s6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0ZXZlbnQudGJvZHkgPSB0aGlzO1xuXHRcdHRoaXMucHJvcHMub25DZWxsQ2xpY2sgJiYgdGhpcy5wcm9wcy5vbkNlbGxDbGljayhldmVudCk7XG5cdH0sXG5cdF9fcmVuZGVyUm93OiBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpe1xuXHRcdGlmKCF6bi5pcyhpdGVtLCAnb2JqZWN0JykpIHsgcmV0dXJuIG51bGw7fVxuXHRcdHZhciBfdGVtcCA9IHRoaXMucHJvcHMuZWFjaFJvd0RhdGEgJiYgdGhpcy5wcm9wcy5lYWNoUm93RGF0YShpdGVtLCBpbmRleCwgdGhpcyk7XG5cdFx0aWYoX3RlbXAgJiYgem4uaXMoX3RlbXAsICdvYmplY3QnKSl7XG5cdFx0XHRpdGVtID0gX3RlbXA7XG5cdFx0fVxuXHRcdHZhciBfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMucm93UmVuZGVyLCB7XG5cdFx0XHRkYXRhOiBpdGVtLFxuXHRcdFx0cm93SW5kZXg6IGluZGV4LFxuXHRcdFx0dGJvZHk6IHRoaXNcblx0XHR9LCB0aGlzLnByb3BzLmNvbnRleHQpO1xuXG5cdFx0aWYoX2VsZW1lbnQpe1xuXHRcdFx0cmV0dXJuIF9lbGVtZW50O1xuXHRcdH1cblx0XHR2YXIgX3Jvd0tleSA9IHRoaXMucHJvcHMucm93S2V5O1xuXHRcdHZhciBfa2V5ID0gaXRlbVtfcm93S2V5XSB8fCBpbmRleDtcblx0XHRyZXR1cm4gPFRSb3cga2V5PXtfa2V5ICsgJy0nICsgaW5kZXh9IHJvd0luZGV4PXtpbmRleH0gey4uLnRoaXMucHJvcHMucm93fSBcblx0XHRcdFx0XHRjb250ZXh0PXt0aGlzLnByb3BzLmNvbnRleHR9IFxuXHRcdFx0XHRcdGNlbGw9e3RoaXMucHJvcHMuY2VsbH1cblx0XHRcdFx0XHRjZWxsUmVuZGVyPXt0aGlzLnByb3BzLmNlbGxSZW5kZXJ9XG5cdFx0XHRcdFx0Y29sdW1ucz17dGhpcy5wcm9wcy5jb2x1bW5zfSBcblx0XHRcdFx0XHRmaXhlZENvbHVtbnM9e3RoaXMucHJvcHMuZml4ZWRDb2x1bW5zfVxuXHRcdFx0XHRcdHRib2R5PXt0aGlzfVxuXHRcdFx0XHRcdGFjdGl2ZT17dGhpcy5zdGF0ZS5hY3RpdmUgPT0gaXRlbX0gXG5cdFx0XHRcdFx0ZGF0YT17aXRlbX0gXG5cdFx0XHRcdFx0Y2hlY2tlZD17dGhpcy5zdGF0ZS5jaGVja2Vkcy5pbmRleE9mKGl0ZW0pICE9PSAtMX0gXG5cdFx0XHRcdFx0b25Sb3dDbGljaz17dGhpcy5fX29uUm93Q2xpY2t9XG5cdFx0XHRcdFx0b25DZWxsQ2xpY2s9e3RoaXMuX19vbkNlbGxDbGlja30gLz47XG5cdH0sXG5cdF9fcGFnZUNoYW5nZTogZnVuY3Rpb24gKHBhZ2VJbmRleCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRwYWdlSW5kZXg6IHBhZ2VJbmRleFxuXHRcdH0pO1xuXHR9LFxuXHRfX3BhZ2VzUmVuZGVyOiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX3BhZ2VDb3VudCA9IHRoaXMuc3RhdGUucGFnZUNvdW50LCBfcGFnZXMgPSBbXTtcblx0XHRpZihfcGFnZUNvdW50ID4gMSkge1xuXHRcdFx0Zm9yKHZhciBpID0gMTsgaSA8IF9wYWdlQ291bnQgKyAxOyBpKyspIHsgX3BhZ2VzLnB1c2goaSk7IH1cblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDx0ciBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwidGJvZHktcGFnZXNcIiwgJycpfT5cblx0XHRcdFx0XHQ8dGQgY29sU3Bhbj17dGhpcy5wcm9wcy5jb2x1bW5zLmxlbmd0aH0+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRhdGEtcGFnZVwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBhZ2VzXCI+XG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0X3BhZ2VzLm1hcCgoaSwgaW5kZXgpPT57XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiA8c3BhbiBrZXk9e2luZGV4fSBjbGFzc05hbWU9eydwYWdlICcgKyAodGhpcy5zdGF0ZS5wYWdlSW5kZXg9PWk/J2FjdGl2ZSc6JycpfSBvbkNsaWNrPXsoKT0+dGhpcy5fX3BhZ2VDaGFuZ2UoaSl9PntpfTwvc3Bhbj47XG5cdFx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInBhZ2UtY291bnRcIj7lhbEge3RoaXMucHJvcHMuZGF0YS5sZW5ndGh9IOadoTwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvdGQ+XG5cdFx0XHRcdDwvdHI+XG5cdFx0XHQpO1xuXHRcdH1cblx0fSxcblx0X19yZW5kZXJEYXRhOiBmdW5jdGlvbiAoKXtcblx0XHRpZih0aGlzLnByb3BzLmRhdGEgPT0gbnVsbCB8fCAodGhpcy5wcm9wcy5kYXRhICYmICF0aGlzLnByb3BzLmRhdGEubGVuZ3RoKSl7XG5cdFx0XHRyZXR1cm4gdGhpcy5fX3JlbmRlckVtcHR5KCk7XG5cdFx0fVxuXHRcdGlmKHRoaXMuc3RhdGUucGFnZUNvdW50ID4gMSl7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8PlxuXHRcdFx0XHRcdHt0aGlzLl9fcGFnZXNSZW5kZXIoKX1cblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLl9fZ2V0RGF0YSh0aGlzLnN0YXRlLnBhZ2VJbmRleCwgdGhpcy5zdGF0ZS5wYWdlU2l6ZSkubWFwKHRoaXMuX19yZW5kZXJSb3cpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ8Lz5cblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDw+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnByb3BzLmRhdGEubWFwKHRoaXMuX19yZW5kZXJSb3cpXG5cdFx0XHRcdH1cblx0XHRcdDwvPlxuXHRcdCk7XG5cdH0sXG5cdF9fcmVuZGVyOiBmdW5jdGlvbiAoKXtcblx0XHRpZih0aGlzLnByb3BzLmxvYWRpbmcgfHwgdGhpcy5zdGF0ZS5sb2FkaW5nKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5fX3JlbmRlckxvYWRpbmcoKTtcblx0XHR9ZWxzZXtcblx0XHRcdHJldHVybiB0aGlzLl9fcmVuZGVyRGF0YSgpO1xuXHRcdH1cblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8dGJvZHkgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXRhYmxlLXRib2R5XCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lLCB0aGlzLnN0YXRlLmNsYXNzTmFtZSl9IHN0eWxlPXt6bnVpLnJlYWN0LnN0eWxlKHRoaXMucHJvcHMuc3R5bGUsIHRoaXMuc3RhdGUuc3R5bGUpfT5cblx0XHRcdFx0eyB0aGlzLl9fcmVuZGVyKCkgfVxuXHRcdFx0PC90Ym9keT5cblx0XHQpO1xuXHR9XG59KTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUlRCb2R5RW1wdHknLFxuXHRfX3JlbmRlckVtcHR5OiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX2VsZW1lbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudCh0aGlzLnByb3BzLmVtcHR5UmVuZGVyLCB7XG5cdFx0XHR0Ym9keTogdGhpc1xuXHRcdH0sIHRoaXMucHJvcHMuY29udGV4dCk7XG5cblx0XHRpZighX2VsZW1lbnQpe1xuXHRcdCBcdF9lbGVtZW50ID0gPGRpdiBjbGFzc05hbWU9XCJlbXB0eS1jb250ZW50XCI+XG5cdFx0XHRcdCA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1wcmVmaXg9XCJmYXNcIiBkYXRhLWljb249XCJkZXNrdG9wXCIgY2xhc3NOYW1lPVwic3ZnLWlubGluZS0tZmEgZmEtZGVza3RvcCBmYS13LTE4IFwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1NzYgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNTI4IDBINDhDMjEuNSAwIDAgMjEuNSAwIDQ4djMyMGMwIDI2LjUgMjEuNSA0OCA0OCA0OGgxOTJsLTE2IDQ4aC03MmMtMTMuMyAwLTI0IDEwLjctMjQgMjRzMTAuNyAyNCAyNCAyNGgyNzJjMTMuMyAwIDI0LTEwLjcgMjQtMjRzLTEwLjctMjQtMjQtMjRoLTcybC0xNi00OGgxOTJjMjYuNSAwIDQ4LTIxLjUgNDgtNDhWNDhjMC0yNi41LTIxLjUtNDgtNDgtNDh6bS0xNiAzNTJINjRWNjRoNDQ4djI4OHpcIj48L3BhdGg+PC9zdmc+XG5cdFx0XHRcdCA8c3Bhbj5FbXB0eTwvc3Bhbj5cblx0XHRcdCA8L2Rpdj47XG5cdFx0fVxuXHRcdHZhciBfZW1wdHkgPSB6bi5leHRlbmQoeyBjbGFzc05hbWU6ICcnLCBzdHlsZToge30gfSwgdGhpcy5wcm9wcy5lbXB0eSk7XG5cdFx0cmV0dXJuIDx0ciBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwidGJvZHktZW1wdHlcIiwgX2VtcHR5LmNsYXNzTmFtZSl9IHN0eWxlPXtfZW1wdHkuc3R5bGV9PlxuXHRcdFx0PHRkIGNvbFNwYW49e3RoaXMucHJvcHMuY29sdW1ucy5sZW5ndGh9PntfZWxlbWVudH08L3RkPlxuXHRcdDwvdHI+O1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDx0Ym9keSBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItdGFibGUtdGJvZHktZW1wdHlcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBzdHlsZT17em51aS5yZWFjdC5zdHlsZSh0aGlzLnByb3BzLnN0eWxlKX0+XG5cdFx0XHRcdHsgdGhpcy5fX3JlbmRlckVtcHR5KCkgfVxuXHRcdFx0PC90Ym9keT5cblx0XHQpO1xuXHR9XG59KTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSZWFjdERPTSA9IHpudWkuUmVhY3RET00gfHwgcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJUQ2VsbCcsXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRjbGFzc05hbWU6ICcnLFxuXHRcdFx0c3R5bGU6IHt9LFxuXHRcdFx0ZGlzYWJsZWQ6IHRoaXMucHJvcHMuZGlzYWJsZWQsXG5cdFx0XHRjaGVja2VkOiB0aGlzLnByb3BzLmNoZWNrZWQsXG5cdFx0XHRhY3RpdmU6IHRoaXMucHJvcHMuYWN0aXZlXG5cdFx0fVxuXHR9LFxuXHRfX3JlbmRlckNlbGxDb250ZW50OiBmdW5jdGlvbiAoKXtcblx0XHRpZih0aGlzLnByb3BzLmNoaWxkcmVuKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbjtcblx0XHR9XG5cdFx0XG5cdFx0dmFyIF92YWx1ZSA9IG51bGw7XG5cdFx0aWYodGhpcy5wcm9wcy5kYXRhICYmIHRoaXMucHJvcHMubmFtZSkge1xuXHRcdFx0X3ZhbHVlID0gdGhpcy5wcm9wcy5kYXRhW3RoaXMucHJvcHMubmFtZV07XG5cdFx0fVxuXG5cdFx0dmFyIF9yZW5kZXIgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudCh0aGlzLnByb3BzLnJlbmRlciB8fCB0aGlzLnByb3BzLmJvZHksIHtcblx0XHRcdHJvd0luZGV4OiB0aGlzLnByb3BzLnJvd0luZGV4LFxuXHRcdFx0Y2VsbEluZGV4OiB0aGlzLnByb3BzLmNlbGxJbmRleCwgXG5cdFx0XHRjb2x1bW46IHRoaXMucHJvcHMuY29sdW1uLFxuXHRcdFx0ZGF0YTogdGhpcy5wcm9wcy5kYXRhLFxuXHRcdFx0dmFsdWU6IF92YWx1ZSxcblx0XHRcdHRjZWxsOiB0aGlzLFxuXHRcdFx0dHJvdzogdGhpcy5wcm9wcy50cm93LFxuXHRcdFx0dGJvZHk6IHRoaXMucHJvcHMudGJvZHksXG5cdFx0XHR0YWJsZTogdGhpcy5wcm9wcy50Ym9keS5wcm9wcy50YWJsZVxuXHRcdH0sIHRoaXMucHJvcHMuY29udGV4dCk7XG5cdFx0XG5cdFx0aWYoX3JlbmRlcil7XG5cdFx0XHRyZXR1cm4gX3JlbmRlcjtcblx0XHR9XG5cblx0XHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjZWxsLWxhYmVsXCIgdGl0bGU9e192YWx1ZX0+e192YWx1ZX08L2Rpdj47XG5cdH0sXG5cdF9fY2VsbENsaWNrOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdHZhciBfdGhpcyA9IHRoaXM7XG5cdFx0ZXZlbnQuZGF0YSA9IHtcblx0XHRcdGZpbmRURERPTTogZnVuY3Rpb24gKCl7XG5cdFx0XHRcdHJldHVybiBSZWFjdERPTS5maW5kRE9NTm9kZShfdGhpcyk7XG5cdFx0XHR9LFxuXHRcdFx0dGNlbGw6IHRoaXNcblx0XHR9O1xuXHRcdHRoaXMucHJvcHMub25DbGljayAmJiB0aGlzLnByb3BzLm9uQ2xpY2soZXZlbnQpO1xuXHRcdHRoaXMucHJvcHMub25DZWxsQ2xpY2sgJiYgdGhpcy5wcm9wcy5vbkNlbGxDbGljayhldmVudCk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHR2YXIgX2NvbHVtbiA9IHRoaXMucHJvcHMuY29sdW1uIHx8IHt9O1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8dGQgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXRhYmxlLXRjZWxsXCIsIChfY29sdW1uLmZpeGVkPydmaXhlZCc6JycpLCB0aGlzLnByb3BzLmNsYXNzTmFtZSwgX2NvbHVtbi5ib2R5Q2xhc3NOYW1lLCB0aGlzLnN0YXRlLmNsYXNzTmFtZSl9IHN0eWxlPXt6bnVpLnJlYWN0LnN0eWxlKHRoaXMucHJvcHMuc3R5bGUsIF9jb2x1bW4uYm9keVN0eWxlLCB0aGlzLnN0YXRlLnN0eWxlLCBfY29sdW1uLmZpeGVkU3R5bGVzKX1cdFxuXHRcdFx0XHRkYXRhLWRpc2FibGVkPXt0aGlzLnN0YXRlLmRpc2FibGVkfVxuXHRcdFx0XHRkYXRhLWNoZWNrZWQ9e3RoaXMuc3RhdGUuY2hlY2tlZH1cblx0XHRcdFx0ZGF0YS1hY3RpdmU9e3RoaXMuc3RhdGUuYWN0aXZlfVxuXHRcdFx0XHRvbkNsaWNrPXt0aGlzLl9fY2VsbENsaWNrfSA+XG5cdFx0XHRcdHt0aGlzLl9fcmVuZGVyQ2VsbENvbnRlbnQoKX1cblx0XHRcdDwvdGQ+XG5cdFx0KTtcblx0fVxufSk7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgZmlsdGVyID0gcmVxdWlyZSgnem51aS1yZWFjdC1maWx0ZXInKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOiAnWlJGaWx0ZXInLFxuXHRnZXRJbml0aWFsU3RhdGU6ZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y2xhc3NOYW1lOiAnJyxcblx0XHRcdHN0eWxlOiB7fSxcblx0XHRcdGRhdGE6IHt9XG5cdFx0fVxuXHR9LFxuXHRfX29uRmlsdGVyQ2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQsIGlucHV0LCBmaWx0ZXJGaWVsZCl7XG5cdFx0aWYoZXZlbnQubmFtZSAmJiBldmVudC5vcHQpIHtcblx0XHRcdGlmKGV2ZW50LnZhbHVlID09PSBudWxsIHx8IGV2ZW50LnZhbHVlID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dGhpcy5zdGF0ZS5kYXRhW2V2ZW50Lm5hbWVdID0gbnVsbDtcblx0XHRcdFx0ZGVsZXRlIHRoaXMuc3RhdGUuZGF0YVtldmVudC5uYW1lXTtcblx0XHRcdH1lbHNlIGlmKCFldmVudC52YWx1ZSAmJiAhaW5wdXQucHJvcHMuZW1wdHlWYWx1ZUVuYWJsZWQpe1xuXHRcdFx0XHR0aGlzLnN0YXRlLmRhdGFbZXZlbnQubmFtZV0gPSBudWxsO1xuXHRcdFx0XHRkZWxldGUgdGhpcy5zdGF0ZS5kYXRhW2V2ZW50Lm5hbWVdO1xuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdHRoaXMuc3RhdGUuZGF0YVtldmVudC5uYW1lXSA9IHtcblx0XHRcdFx0XHR2YWx1ZTogZXZlbnQudmFsdWUsXG5cdFx0XHRcdFx0b3B0OiBldmVudC5vcHRcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHR9XG5cdFx0dGhpcy5wcm9wcy5vbkZpbHRlciAmJiB0aGlzLnByb3BzLm9uRmlsdGVyKHRoaXMuc3RhdGUuZGF0YSk7XG5cdH0sXG5cdF9fb25GaWx0ZXJDYW5jZWw6IGZ1bmN0aW9uIChuYW1lKXtcblx0XHRpZihuYW1lICYmIHRoaXMuc3RhdGUuZGF0YSl7XG5cdFx0XHR0aGlzLnN0YXRlLmRhdGFbbmFtZV0gPSBudWxsO1xuXHRcdFx0ZGVsZXRlIHRoaXMuc3RhdGUuZGF0YVtuYW1lXTtcblx0XHR9XG5cdH0sXG5cdF9fcmVuZGVyQ2VsbDogZnVuY3Rpb24gKGNvbHVtbiwgaW5kZXgpe1xuXHRcdGlmKCF6bi5pcyhjb2x1bW4sICdvYmplY3QnKSkgeyByZXR1cm4gbnVsbDsgfVxuXHRcdHZhciBfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMuY2VsbFJlbmRlciwge1xuXHRcdFx0Y29sdW1uOiBjb2x1bW4sXG5cdFx0XHRjZWxsSW5kZXg6IGluZGV4LCBcblx0XHRcdHRmaWx0ZXI6IHRoaXNcblx0XHR9KTtcblx0XHRpZihfZWxlbWVudCl7XG5cdFx0XHRyZXR1cm4gX2VsZW1lbnQ7XG5cdFx0fVxuXHRcdFxuXHRcdHZhciBfY29udGVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KGNvbHVtbi5yZW5kZXIsIHtcblx0XHRcdGNvbHVtbjogY29sdW1uLFxuXHRcdFx0Y2VsbEluZGV4OiBpbmRleCwgXG5cdFx0XHR0ZmlsdGVyOiB0aGlzXG5cdFx0fSk7XG5cblx0XHRpZighX2NvbnRlbnQgJiYgY29sdW1uLmZpbHRlcikge1xuXHRcdFx0dmFyIF9maWx0ZXIgPSBjb2x1bW4uZmlsdGVyO1xuXHRcdFx0aWYoem4uaXMoX2ZpbHRlciwgJ2Z1bmN0aW9uJykpIHtcblx0XHRcdFx0aWYoX2ZpbHRlci5wcm90b3R5cGUgJiYgX2ZpbHRlci5wcm90b3R5cGUucmVuZGVyKSB7XG5cdFx0XHRcdFx0X2NvbnRlbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudChfZmlsdGVyLCB7XG5cdFx0XHRcdFx0XHRjb2x1bW46IGNvbHVtbixcblx0XHRcdFx0XHRcdHRmaWx0ZXI6IHRoaXNcblx0XHRcdFx0XHR9KTtcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgX2ZpbHRlciA9IF9maWx0ZXIuY2FsbChudWxsLCBjb2x1bW4sIHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cblx0XHRcdH1cblxuXHRcdFx0aWYoem4uaXMoX2ZpbHRlciwgJ29iamVjdCcpKSB7XG5cdFx0XHRcdHZhciBfa2V5ID0gX2ZpbHRlci5rZXkgfHwgY29sdW1uLm5hbWU7XG5cdFx0XHRcdGlmKHpuLmlzKF9rZXksICdmdW5jdGlvbicpKSB7XG5cdFx0XHRcdFx0X2tleSA9IF9rZXkuY2FsbChudWxsLCBjb2x1bW4sIHRoaXMpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0X2NvbnRlbnQgPSA8ZmlsdGVyLkZpbHRlckZpZWxkIGtleT17X2tleSB8fCB6bi51dWlkKCl9IHsuLi5fZmlsdGVyfSBuYW1lPXtjb2x1bW4ubmFtZX0gb25GaWx0ZXJDaGFuZ2U9e3RoaXMuX19vbkZpbHRlckNoYW5nZX0gb25DYW5jZWw9e3RoaXMuX19vbkZpbHRlckNhbmNlbH0gLz47XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dmFyIF9jZWxsID0gem4uZXh0ZW5kKHsgc3R5bGU6IHt9LCBjbGFzc05hbWU6ICcnIH0sIHRoaXMucHJvcHMuY2VsbCk7XG5cdFx0cmV0dXJuIChcblx0XHRcdDx0ZCBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd0ZmlsdGVyLWNlbGwnLCAoY29sdW1uLmZpeGVkPydmaXhlZCc6JycpLCBfY2VsbC5jbGFzc05hbWUpfSBzdHlsZT17em51aS5yZWFjdC5zdHlsZShfY2VsbC5zdHlsZSwgY29sdW1uLmZpeGVkU3R5bGVzKX0+XG5cdFx0XHRcdHsgX2NvbnRlbnQgfVxuXHRcdFx0PC90ZD5cblx0XHQpO1xuXHR9LFxuXHRfX3JlbmRlclJvdzogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF9lbGVtZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQodGhpcy5wcm9wcy5yb3dSZW5kZXIsIHtcblx0XHRcdHRmaWx0ZXI6IHRoaXNcblx0XHR9KTtcblx0XHRpZihfZWxlbWVudCl7XG5cdFx0XHRyZXR1cm4gX2VsZW1lbnQ7XG5cdFx0fVxuXHRcdHZhciBfcm93ID0gem4uZXh0ZW5kKHsgY2xhc3NOYW1lOiAnJywgc3R5bGU6IHt9IH0sIHRoaXMucHJvcHMucm93KTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHRyIGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ0ZmlsdGVyLXJvdyB6ci10YWJsZS10cm93XCIsIF9yb3cuY2xhc3NOYW1lKX0gc3R5bGU9e19yb3cuc3R5bGV9PlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0KHRoaXMucHJvcHMuY29sdW1uc3x8W10pLm1hcCh0aGlzLl9fcmVuZGVyQ2VsbClcblx0XHRcdFx0fVxuXHRcdFx0PC90cj5cblx0XHQpO1xuXHR9LFxuXHRyZW5kZXI6ZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHRoZWFkIGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci10YWJsZS10ZmlsdGVyXCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lLCB0aGlzLnN0YXRlLmNsYXNzTmFtZSl9IHN0eWxlPXt6bnVpLnJlYWN0LnN0eWxlKHRoaXMucHJvcHMuc3R5bGUsIHRoaXMuc3RhdGUuc3R5bGUpfT5cblx0XHRcdFx0e3RoaXMuX19yZW5kZXJSb3coKX1cblx0XHRcdDwvdGhlYWQ+XG5cdFx0KTtcblx0fVxufSk7IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSVEZvb3QnLFxuXHRfX3JlbmRlckNoaWxkcmVuOiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX2NvbHVtbnMgPSB0aGlzLnByb3BzLmNvbHVtbnMgfHwgW107XG5cdFx0aWYodGhpcy5wcm9wcy5jaGlsZHJlbil7XG5cdFx0XHRyZXR1cm4gPHRyIGNsYXNzTmFtZT1cInRmb290LXJvd1wiPlxuXHRcdFx0XHQ8dGQgY29sU3Bhbj17X2NvbHVtbnMubGVuZ3RofT57dGhpcy5wcm9wcy5jaGlsZHJlbn08L3RkPlxuXHRcdFx0PC90cj47XG5cdFx0fWVsc2V7XG5cdFx0XHRyZXR1cm4gdGhpcy5fX3JlbmRlclJvdygpO1xuXHRcdH1cblx0fSxcblx0X19yZW5kZXJDZWxsOiBmdW5jdGlvbiAoY29sdW1uLCBpbmRleCl7XG5cdFx0aWYoIXpuLmlzKGNvbHVtbiwgJ29iamVjdCcpKSB7IHJldHVybiBudWxsOyB9XG5cdFx0dmFyIF9lbGVtZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQodGhpcy5wcm9wcy5jZWxsUmVuZGVyLCB7XG5cdFx0XHRjb2x1bW46IGNvbHVtbixcblx0XHRcdGNlbGxJbmRleDogaW5kZXgsIFxuXHRcdFx0dGZvb3Q6IHRoaXNcblx0XHR9KTtcblx0XHRpZihfZWxlbWVudCl7XG5cdFx0XHRyZXR1cm4gX2VsZW1lbnQ7XG5cdFx0fVxuXG5cdFx0dmFyIF9jb250ZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQoY29sdW1uLnJlbmRlciB8fCBjb2x1bW4uZm9vdCwge1xuXHRcdFx0Y29sdW1uOiBjb2x1bW4sXG5cdFx0XHRjZWxsSW5kZXg6IGluZGV4LCBcblx0XHRcdHRmb290OiB0aGlzXG5cdFx0fSk7XG5cblx0XHRpZih0aGlzLnByb3BzLnJlbmRlcikge1xuXHRcdFx0X2NvbnRlbnQgPSB0aGlzLnByb3BzLnJlbmRlcihjb2x1bW4sIGluZGV4LCB0aGlzKTtcblx0XHR9XG5cblx0XHR2YXIgX2NlbGwgPSB6bi5leHRlbmQoeyBzdHlsZToge30sIGNsYXNzTmFtZTogJycgfSwgdGhpcy5wcm9wcy5jZWxsKTtcblx0XHRyZXR1cm4gPHRoIGtleT17aW5kZXh9IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3Rmb290LWNlbGwnLCBfY2VsbC5jbGFzc05hbWUpfSBzdHlsZT17X2NlbGwuc3R5bGV9PlxuXHRcdFx0eyBfY29udGVudCB9XG5cdFx0PC90aD47XG5cdH0sXG5cdF9fcmVuZGVyUm93OiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX2VsZW1lbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudCh0aGlzLnByb3BzLnJvd1JlbmRlciwge1xuXHRcdFx0dGhlYWQ6IHRoaXNcblx0XHR9KTtcblx0XHRpZihfZWxlbWVudCl7XG5cdFx0XHRyZXR1cm4gX2VsZW1lbnQ7XG5cdFx0fVxuXHRcdHZhciBfcm93ID0gem4uZXh0ZW5kKHsgY2xhc3NOYW1lOiAnJywgc3R5bGU6IHt9IH0sIHRoaXMucHJvcHMucm93KTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHRyIGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ0Zm9vdC1yb3dcIiwgX3Jvdy5jbGFzc05hbWUpfSBzdHlsZT17X3Jvdy5zdHlsZX0+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHQodGhpcy5wcm9wcy5jb2x1bW5zfHxbXSkubWFwKHRoaXMuX19yZW5kZXJDZWxsKVxuXHRcdFx0XHR9XG5cdFx0XHQ8L3RyPlxuXHRcdCk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHRmb290IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci10YWJsZS10Zm9vdFwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfT5cblx0XHRcdFx0e3RoaXMuX19yZW5kZXJDaGlsZHJlbigpfVxuXHRcdFx0PC90Zm9vdD5cblx0XHQpO1xuXHR9XG59KTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgVEhlYWRTb3J0ID0gcmVxdWlyZSgnLi9USGVhZFNvcnQnKTtcbnZhciBwb3B1cCA9IHJlcXVpcmUoJ3pudWktcmVhY3QtcG9wdXAnKTtcbnZhciB6cmpzb24gPSByZXF1aXJlKCd6bnVpLXJlYWN0LWpzb24nKTtcbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonVEhlYWQnLFxuXHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7fTtcblx0fSxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y2xhc3NOYW1lOiAnJyxcblx0XHRcdHN0eWxlOiB7fSxcblx0XHRcdHNvcnQ6IHt9LFxuXHRcdFx0ZmlsdGVyOiB7fVxuXHRcdH07XG5cdH0sXG5cdF9fb25Db2x1bW5Tb3J0OiBmdW5jdGlvbiAoc29ydCwgY29sdW1uKXtcblx0XHRpZihjb2x1bW4ubmFtZSkge1xuXHRcdFx0dGhpcy5zdGF0ZS5zb3J0W2NvbHVtbi5uYW1lXSA9IHNvcnQ7XG5cdFx0fVxuXHRcdHRoaXMucHJvcHMub25Tb3J0ICYmIHRoaXMucHJvcHMub25Tb3J0KHRoaXMuc3RhdGUuc29ydCk7XG5cdH0sXG5cdF9fb25Db2x1bW5FZGl0b3JDaGFuZ2U6IGZ1bmN0aW9uIChkYXRhLCBjaGlsZCwgcm9vdCwgaW5kZXgpe1xuICAgICAgICB2YXIgX3Jvb3QgPSByb290IHx8IGNoaWxkO1xuXHRcdHRoaXMucHJvcHMub25Db2x1bW5DaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkNvbHVtbkNoYW5nZShfcm9vdC5zdGF0ZS52YWx1ZSwgaW5kZXgpO1xuICAgIH0sXG5cdF9faWNvbkNsaWNrUmVuZGVyOiBmdW5jdGlvbiAoY29sdW1uLCBpbmRleCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgc3R5bGU9e3twYWRkaW5nOiAxMCwgbWF4SGVpZ2h0OiA1MDAsIHdpZHRoOiA0MDAsIG92ZXJmbG93OiAnYXV0byd9fT5cblx0XHRcdFx0PHpyanNvbi5lZGl0b3Iub2JqZWN0IGZvbGQ9e2ZhbHNlfVxuXHRcdFx0XHRcdGRpc3BsYXlDbG9zdXJlPXt0cnVlfSBcblx0XHRcdFx0XHRkaXNwbGF5SXRlbUNvdW50PXt0cnVlfSBcblx0XHRcdFx0XHRsYWJlbD17J0NvbHVtbid9IFxuXHRcdFx0XHRcdHZhbHVlPXtjb2x1bW59IFxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsoZGF0YSwgY2hpbGQsIHJvb3QpPT50aGlzLl9fb25Db2x1bW5FZGl0b3JDaGFuZ2UoZGF0YSwgY2hpbGQsIHJvb3QsIGluZGV4KX0gLz5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH0sXG5cdF9fc29ydFJlbmRlcjogZnVuY3Rpb24gKCl7XG5cblx0fSxcblx0X19yZW5kZXJDZWxsOiBmdW5jdGlvbiAoY29sdW1uLCBpbmRleCl7XG5cdFx0aWYoIXpuLmlzKGNvbHVtbiwgJ29iamVjdCcpKSB7IHJldHVybiBudWxsOyB9XG5cdFx0dmFyIF9lbGVtZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQodGhpcy5wcm9wcy5jZWxsUmVuZGVyLCB7XG5cdFx0XHRjb2x1bW46IGNvbHVtbixcblx0XHRcdGNlbGxJbmRleDogaW5kZXgsIFxuXHRcdFx0dGhlYWQ6IHRoaXNcblx0XHR9KTtcblx0XHRpZihfZWxlbWVudCl7XG5cdFx0XHRyZXR1cm4gX2VsZW1lbnQ7XG5cdFx0fVxuXG5cdFx0dmFyIF9jb250ZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQoY29sdW1uLnJlbmRlciB8fCBjb2x1bW4uaGVhZCwge1xuXHRcdFx0XHRjb2x1bW46IGNvbHVtbixcblx0XHRcdFx0Y2VsbEluZGV4OiBpbmRleCwgXG5cdFx0XHRcdHRoZWFkOiB0aGlzLFxuXHRcdFx0XHR0YWJsZTogdGhpcy5wcm9wcy50YWJsZVxuXHRcdFx0fSksXG5cdFx0XHRfbWFwcGluZyA9IHRoaXMucHJvcHMua2V5TWFwcGluZyB8fCB7fSxcblx0XHRcdF9sYWJlbEtleSA9IF9tYXBwaW5nWydsYWJlbCddIHx8ICdsYWJlbCcsXG5cdFx0XHRfbGFiZWwgPSBjb2x1bW5bX2xhYmVsS2V5XTtcblxuXHRcdGlmKHpuLmlzKF9sYWJlbCwgJ2Z1bmN0aW9uJykpe1xuXHRcdFx0X2xhYmVsID0gX2xhYmVsKGNvbHVtbiwgdGhpcyk7XG5cdFx0fVxuXHRcdGlmKCFfY29udGVudCkge1xuXHRcdFx0X2NvbnRlbnQgPSAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtcImNlbGwtbGFiZWwgXCIgKyAoY29sdW1uLnNvcnQ/J3NvcnRhYmxlJzonJyl9IHRpdGxlPXtfbGFiZWx9PlxuXHRcdFx0XHRcdHsgISFjb2x1bW4ucmVxdWlyZWQgJiYgPHNwYW4gZGF0YS16ci1wb3B1cC10b29sdGlwPVwi5b+F6KaB5a2X5q61XCIgY2xhc3NOYW1lPVwicmVxdWlyZWRcIj4qPC9zcGFuPn1cblx0XHRcdFx0XHR7IF9sYWJlbCB9XG5cdFx0XHRcdFx0eyBcblx0XHRcdFx0XHRcdCEhY29sdW1uLmVkaXRhYmxlICYmIDxwb3B1cC5Ecm9wZG93biBcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY2VsbC1lZGl0b3JcIiBcblx0XHRcdFx0XHRcdFx0cG9wb3Zlcj17e1xuXHRcdFx0XHRcdFx0XHRcdHJlbmRlcjogdGhpcy5fX2ljb25DbGlja1JlbmRlcihjb2x1bW4sIGluZGV4KSxcblx0XHRcdFx0XHRcdFx0XHRjbG9zZWFibGU6IHRydWVcblx0XHRcdFx0XHRcdFx0fX0gPlxuXHRcdFx0XHRcdFx0XHQ8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1wcmVmaXg9XCJmYXNcIiBkYXRhLWljb249XCJlZGl0XCIgY2xhc3NOYW1lPVwiaWNvbiBzdmctaW5saW5lLS1mYSBmYS1lZGl0IGZhLXctMTggXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDU3NiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk00MDIuNiA4My4ybDkwLjIgOTAuMmMzLjggMy44IDMuOCAxMCAwIDEzLjhMMjc0LjQgNDA1LjZsLTkyLjggMTAuM2MtMTIuNCAxLjQtMjIuOS05LjEtMjEuNS0yMS41bDEwLjMtOTIuOEwzODguOCA4My4yYzMuOC0zLjggMTAtMy44IDEzLjggMHptMTYyLTIyLjlsLTQ4LjgtNDguOGMtMTUuMi0xNS4yLTM5LjktMTUuMi01NS4yIDBsLTM1LjQgMzUuNGMtMy44IDMuOC0zLjggMTAgMCAxMy44bDkwLjIgOTAuMmMzLjggMy44IDEwIDMuOCAxMy44IDBsMzUuNC0zNS40YzE1LjItMTUuMyAxNS4yLTQwIDAtNTUuMnpNMzg0IDM0Ni4yVjQ0OEg2NFYxMjhoMjI5LjhjMy4yIDAgNi4yLTEuMyA4LjUtMy41bDQwLTQwYzcuNi03LjYgMi4yLTIwLjUtOC41LTIwLjVINDhDMjEuNSA2NCAwIDg1LjUgMCAxMTJ2MzUyYzAgMjYuNSAyMS41IDQ4IDQ4IDQ4aDM1MmMyNi41IDAgNDgtMjEuNSA0OC00OFYzMDYuMmMwLTEwLjctMTIuOS0xNi0yMC41LTguNWwtNDAgNDBjLTIuMiAyLjMtMy41IDUuMy0zLjUgOC41elwiPjwvcGF0aD48L3N2Zz5cblx0XHRcdFx0XHRcdDwvcG9wdXAuRHJvcGRvd24+XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0dmFyIF9jZWxsID0gem4uZXh0ZW5kKHsgc3R5bGU6IHt9LCBjbGFzc05hbWU6ICcnIH0sIHRoaXMucHJvcHMuY2VsbCwgY29sdW1uKTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHRoIGtleT17aW5kZXh9IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3RoZWFkLWNlbGwnLCAoY29sdW1uLmZpeGVkPydmaXhlZCc6JycpLCBfY2VsbC5jbGFzc05hbWUpfSBzdHlsZT17em51aS5yZWFjdC5zdHlsZShfY2VsbC5zdHlsZSwgY29sdW1uLmZpeGVkU3R5bGVzKX0+XG5cdFx0XHRcdHsgX2NvbnRlbnQgfVxuXHRcdFx0XHR7ICEhY29sdW1uLnNvcnQgJiYgPFRIZWFkU29ydCBjbGFzc05hbWU9XCJjZWxsLXNvcnRcIiBvblNvcnQ9eyhzb3J0KT0+dGhpcy5fX29uQ29sdW1uU29ydChzb3J0LCBjb2x1bW4pfSAvPn1cblx0XHRcdDwvdGg+XG5cdFx0KTtcblx0fSxcblx0X19yZW5kZXJSb3c6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMucm93UmVuZGVyLCB7XG5cdFx0XHR0aGVhZDogdGhpc1xuXHRcdH0pO1xuXHRcdGlmKF9lbGVtZW50KXtcblx0XHRcdHJldHVybiBfZWxlbWVudDtcblx0XHR9XG5cdFx0dmFyIF9yb3cgPSB6bi5leHRlbmQoeyBjbGFzc05hbWU6ICcnLCBzdHlsZToge30gfSwgdGhpcy5wcm9wcy5yb3cpO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8dHIgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInRoZWFkLXJvd1wiLCBfcm93LmNsYXNzTmFtZSl9IHN0eWxlPXtfcm93LnN0eWxlfT5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdCh0aGlzLnByb3BzLmNvbHVtbnN8fFtdKS5tYXAodGhpcy5fX3JlbmRlckNlbGwpXG5cdFx0XHRcdH1cblx0XHRcdDwvdHI+XG5cdFx0KTtcblx0fSxcblx0cmVuZGVyOmZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDx0aGVhZCBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItdGFibGUtdGhlYWRcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUsIHRoaXMuc3RhdGUuY2xhc3NOYW1lKX0gc3R5bGU9e3pudWkucmVhY3Quc3R5bGUodGhpcy5wcm9wcy5zdHlsZSwgdGhpcy5zdGF0ZS5zdHlsZSl9PlxuXHRcdFx0XHR7dGhpcy5fX3JlbmRlclJvdygpfVxuXHRcdFx0PC90aGVhZD5cblx0XHQpO1xuXHR9XG59KTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUlRIZWFkU29ydCcsXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHNvcnQ6ICdkZXNjJyxcblx0XHR9XG5cdH0sXG5cdF9fcmVuZGVySWNvbjogZnVuY3Rpb24gKCl7XG5cdFx0c3dpdGNoKHRoaXMuc3RhdGUuc29ydCl7XG5cdFx0XHRjYXNlIFwiZmFTb3J0XCI6XG5cdFx0XHRcdHJldHVybiA8c3ZnIG9uQ2xpY2s9eygpPT50aGlzLl9faWNvbkNsaWNrKCd1cCcpfSBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFzXCIgZGF0YS1pY29uPVwic29ydFwiIGNsYXNzTmFtZT1cImljb24gc3ZnLWlubGluZS0tZmEgZmEtc29ydCBmYS13LTEwIFwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNDEgMjg4aDIzOGMyMS40IDAgMzIuMSAyNS45IDE3IDQxTDE3NyA0NDhjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwTDI0IDMyOWMtMTUuMS0xNS4xLTQuNC00MSAxNy00MXptMjU1LTEwNUwxNzcgNjRjLTkuNC05LjQtMjQuNi05LjQtMzMuOSAwTDI0IDE4M2MtMTUuMSAxNS4xLTQuNCA0MSAxNyA0MWgyMzhjMjEuNCAwIDMyLjEtMjUuOSAxNy00MXpcIj48L3BhdGg+PC9zdmc+O1xuXHRcdFx0Y2FzZSBcImRlc2NcIjpcblx0XHRcdFx0cmV0dXJuIDxzdmcgb25DbGljaz17KCk9PnRoaXMuX19pY29uQ2xpY2soJ2FzYycpfSBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFzXCIgZGF0YS1pY29uPVwic29ydC1kb3duXCIgY2xhc3NOYW1lPVwiaWNvbiBzdmctaW5saW5lLS1mYSBmYS1zb3J0LWFscGhhLWRvd24gZmEtdy0xNCBcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNDQ4IDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTE3NiAzNTJoLTQ4VjQ4YTE2IDE2IDAgMCAwLTE2LTE2SDgwYTE2IDE2IDAgMCAwLTE2IDE2djMwNEgxNmMtMTQuMTkgMC0yMS4zNiAxNy4yNC0xMS4yOSAyNy4zMWw4MCA5NmExNiAxNiAwIDAgMCAyMi42MiAwbDgwLTk2QzE5Ny4zNSAzNjkuMjYgMTkwLjIyIDM1MiAxNzYgMzUyem0yNDAtNjRIMjg4YTE2IDE2IDAgMCAwLTE2IDE2djMyYTE2IDE2IDAgMCAwIDE2IDE2aDU2bC02MS4yNiA3MC40NUEzMiAzMiAwIDAgMCAyNzIgNDQ2LjM3VjQ2NGExNiAxNiAwIDAgMCAxNiAxNmgxMjhhMTYgMTYgMCAwIDAgMTYtMTZ2LTMyYTE2IDE2IDAgMCAwLTE2LTE2aC01Nmw2MS4yNi03MC40NUEzMiAzMiAwIDAgMCA0MzIgMzIxLjYzVjMwNGExNiAxNiAwIDAgMC0xNi0xNnptMzEuMDYtODUuMzhsLTU5LjI3LTE2MEExNiAxNiAwIDAgMCAzNzIuNzIgMzJoLTQxLjQ0YTE2IDE2IDAgMCAwLTE1LjA3IDEwLjYybC01OS4yNyAxNjBBMTYgMTYgMCAwIDAgMjcyIDIyNGgyNC44M2ExNiAxNiAwIDAgMCAxNS4yMy0xMS4wOGw0LjQyLTEyLjkyaDcxbDQuNDEgMTIuOTJBMTYgMTYgMCAwIDAgNDA3LjE2IDIyNEg0MzJhMTYgMTYgMCAwIDAgMTUuMDYtMjEuMzh6TTMzNS42MSAxNDRMMzUyIDk2bDE2LjM5IDQ4elwiPjwvcGF0aD48L3N2Zz47XG5cdFx0XHRjYXNlIFwiYXNjXCI6XG5cdFx0XHRcdHJldHVybiA8c3ZnIG9uQ2xpY2s9eygpPT50aGlzLl9faWNvbkNsaWNrKCdkZXNjJyl9IGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1wcmVmaXg9XCJmYXNcIiBkYXRhLWljb249XCJzb3J0LXVwXCIgY2xhc3NOYW1lPVwiaWNvbiBzdmctaW5saW5lLS1mYSBmYS1zb3J0LWFscGhhLXVwIGZhLXctMTQgXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDQ0OCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0xNiAxNjBoNDh2MzA0YTE2IDE2IDAgMCAwIDE2IDE2aDMyYTE2IDE2IDAgMCAwIDE2LTE2VjE2MGg0OGMxNC4yMSAwIDIxLjM4LTE3LjI0IDExLjMxLTI3LjMxbC04MC05NmExNiAxNiAwIDAgMC0yMi42MiAwbC04MCA5NkMtNS4zNSAxNDIuNzQgMS43OCAxNjAgMTYgMTYwem00MDAgMTI4SDI4OGExNiAxNiAwIDAgMC0xNiAxNnYzMmExNiAxNiAwIDAgMCAxNiAxNmg1NmwtNjEuMjYgNzAuNDVBMzIgMzIgMCAwIDAgMjcyIDQ0Ni4zN1Y0NjRhMTYgMTYgMCAwIDAgMTYgMTZoMTI4YTE2IDE2IDAgMCAwIDE2LTE2di0zMmExNiAxNiAwIDAgMC0xNi0xNmgtNTZsNjEuMjYtNzAuNDVBMzIgMzIgMCAwIDAgNDMyIDMyMS42M1YzMDRhMTYgMTYgMCAwIDAtMTYtMTZ6bTMxLjA2LTg1LjM4bC01OS4yNy0xNjBBMTYgMTYgMCAwIDAgMzcyLjcyIDMyaC00MS40NGExNiAxNiAwIDAgMC0xNS4wNyAxMC42MmwtNTkuMjcgMTYwQTE2IDE2IDAgMCAwIDI3MiAyMjRoMjQuODNhMTYgMTYgMCAwIDAgMTUuMjMtMTEuMDhsNC40Mi0xMi45Mmg3MWw0LjQxIDEyLjkyQTE2IDE2IDAgMCAwIDQwNy4xNiAyMjRINDMyYTE2IDE2IDAgMCAwIDE1LjA2LTIxLjM4ek0zMzUuNjEgMTQ0TDM1MiA5NmwxNi4zOSA0OHpcIj48L3BhdGg+PC9zdmc+O1xuXHRcdH1cdFxuXHR9LFxuXHRfX2ljb25DbGljazogZnVuY3Rpb24gKHNvcnQpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0c29ydDogc29ydFxuXHRcdH0pO1xuXHRcdHRoaXMucHJvcHMub25Tb3J0ICYmIHRoaXMucHJvcHMub25Tb3J0KHNvcnQpO1xuXHR9LFxuXHRyZW5kZXI6ZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd6ci10YWJsZS10aGVhZC1zb3J0JywgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0+XG5cdFx0XHRcdHt0aGlzLl9fcmVuZGVySWNvbigpfVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUmVhY3RET00gPSB6bnVpLlJlYWN0RE9NIHx8IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xudmFyIFRDZWxsID0gcmVxdWlyZSgnLi9UQ2VsbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSVFJvdycsXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c3R5bGU6IHt9LFxuXHRcdFx0Y2xhc3NOYW1lOiAnJ1xuXHRcdH1cblx0fSxcblx0X19nZXRUYXJnZXRURDogZnVuY3Rpb24gKHRhcmdldCkge1xuXHRcdGlmKHRhcmdldCAmJiB0YXJnZXQudGFnTmFtZSE9PSdURCcpe1xuXHRcdFx0cmV0dXJuIHRoaXMuX19nZXRUYXJnZXRURCh0YXJnZXQucGFyZW50Tm9kZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0YXJnZXQ7XG5cdFx0fVxuXHR9LFxuXHRfX29uUm93Q2xpY2s6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0dmFyIF90aGlzID0gdGhpcztcblx0XHR2YXIgX3RkID0gdGhpcy5fX2dldFRhcmdldFREKGV2ZW50LnRhcmdldCk7XG5cdFx0ZXZlbnQuZGF0YSA9IHtcblx0XHRcdGZpbmRUUkRPTTogZnVuY3Rpb24gKCl7XG5cdFx0XHRcdHJldHVybiBSZWFjdERPTS5maW5kRE9NTm9kZShfdGhpcyk7XG5cdFx0XHR9LFxuXHRcdFx0dGQ6IF90ZCxcblx0XHRcdHRyb3c6IHRoaXNcblx0XHR9O1xuXHRcdHRoaXMucHJvcHMub25DbGljayAmJiB0aGlzLnByb3BzLm9uQ2xpY2soZXZlbnQpO1xuXHRcdHRoaXMucHJvcHMub25Sb3dDbGljayAmJiB0aGlzLnByb3BzLm9uUm93Q2xpY2soZXZlbnQpO1xuXHR9LFxuXHRfX2NlbGxSZW5kZXI6IGZ1bmN0aW9uIChjb2x1bW4sIGluZGV4KXtcblx0XHRpZighem4uaXMoY29sdW1uLCAnb2JqZWN0JykpIHsgcmV0dXJuIG51bGw7fVxuXHRcdHZhciBfcHJvcHMgPSB6bi5leHRlbmQoe1xuXHRcdFx0Y29sdW1uOiBjb2x1bW4sXG5cdFx0XHR0cm93OiB0aGlzLFxuXHRcdFx0cm93SW5kZXg6IHRoaXMucHJvcHMucm93SW5kZXgsXG5cdFx0XHRjZWxsSW5kZXg6IGluZGV4LFxuXHRcdFx0Y29udGV4dDogdGhpcy5wcm9wcy5jb250ZXh0LFxuXHRcdFx0ZGF0YTogdGhpcy5wcm9wcy5kYXRhLFxuXHRcdFx0dGJvZHk6IHRoaXMucHJvcHMudGJvZHlcblx0XHR9LCB0aGlzLnByb3BzLmNlbGwsIGNvbHVtbik7XG5cdFx0dmFyIF9lbGVtZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQodGhpcy5wcm9wcy5jZWxsUmVuZGVyLCBfcHJvcHMsIHRoaXMucHJvcHMuY29udGV4dCk7XG5cblx0XHRpZihfZWxlbWVudCl7XG5cdFx0XHRyZXR1cm4gX2VsZW1lbnQ7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIDxUQ2VsbCBrZXk9e2luZGV4fSB7Li4uX3Byb3BzfSBmaXhlZFN0eWxlPXt0aGlzLl9fZml4ZWRXaWR0aChpbmRleCl9IG9uQ2VsbENsaWNrPXt0aGlzLnByb3BzLm9uQ2VsbENsaWNrfSBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd0cm93LWNlbGwnLCBfcHJvcHMuY2xhc3NOYW1lKX0gLz47XG5cdH0sXG5cdF9fZml4ZWRXaWR0aDogZnVuY3Rpb24gKGluZGV4KXtcblx0XHR2YXIgX2NvbHVtbnMgPSB0aGlzLnByb3BzLmNvbHVtbnN8fFtdLCBfd2lkdGggPSAwO1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBpbmRleDsgaSsrKXtcblx0XHRcdGlmKF9jb2x1bW5zW2ldLmZpeGVkKSB7XG5cdFx0XHRcdF93aWR0aCArPSBfY29sdW1uc1tpXS53aWR0aCB8fCAwO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHRsZWZ0OiBfd2lkdGhcblx0XHR9O1xuXHR9LFxuXHRyZW5kZXI6ZnVuY3Rpb24oKXtcblx0XHR0aGlzLnByb3BzLnRib2R5Ll9faW5pdGlhbERhdGFJdGVtKHRoaXMucHJvcHMuZGF0YSk7XG5cdFx0dGhpcy5wcm9wcy5vbkRhdGFWYWxpZGF0ZSAmJiB0aGlzLnByb3BzLm9uRGF0YVZhbGlkYXRlKHRoaXMucHJvcHMuZGF0YSwgdGhpcyk7XG5cdFx0dmFyIF9jb2x1bW5MZW5ndGggPSAodGhpcy5wcm9wcy5jb2x1bW5zfHxbXSkubGVuZ3RoO1xuXHRcdHZhciBfY2xhc3NOYW1lID0gdGhpcy5wcm9wcy5jbGFzc05hbWUsIF9zdHlsZSA9IHRoaXMucHJvcHMuc3R5bGU7XG5cdFx0aWYodHlwZW9mIF9jbGFzc05hbWUgPT0gJ2Z1bmN0aW9uJyl7XG5cdFx0XHRfY2xhc3NOYW1lID0gX2NsYXNzTmFtZSh0aGlzLnByb3BzLmRhdGEsIHRoaXMpO1xuXHRcdH1cblx0XHRpZih0eXBlb2YgX3N0eWxlID09ICdmdW5jdGlvbicpe1xuXHRcdFx0X3N0eWxlID0gX3N0eWxlKHRoaXMucHJvcHMuZGF0YSwgdGhpcyk7XG5cdFx0fVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8PlxuXHRcdFx0XHQ8dHIgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItdGFibGUtdHJvdycsIF9jbGFzc05hbWUsIHRoaXMuc3RhdGUuY2xhc3NOYW1lKX0gXG5cdFx0XHRcdFx0c3R5bGU9e3pudWkucmVhY3Quc3R5bGUoX3N0eWxlLCB0aGlzLnN0YXRlLnN0eWxlKX1cblx0XHRcdFx0XHRkYXRhLWFjdGl2ZT17dGhpcy5wcm9wcy5hY3RpdmV9IFxuXHRcdFx0XHRcdGRhdGEtY2hlY2tlZD17dGhpcy5wcm9wcy5jaGVja2VkfSBcblx0XHRcdFx0XHRvbkNsaWNrPXt0aGlzLl9fb25Sb3dDbGlja30+XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0KHRoaXMucHJvcHMuY29sdW1uc3x8W10pLm1hcCh0aGlzLl9fY2VsbFJlbmRlcilcblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvdHI+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlLmNoaWxkICYmIDx0ciBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd6ci10YWJsZS10cm93LWNoaWxkJyl9Pjx0ZCBjb2xTcGFuPXtfY29sdW1uTGVuZ3RofT57dGhpcy5zdGF0ZS5jaGlsZH08L3RkPjwvdHI+XG5cdFx0XHRcdH1cblx0XHRcdDwvPlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgQ29sZ3JvdXA6IHJlcXVpcmUoJy4vQ29sZ3JvdXAnKSxcbiAgICBURmlsdGVyOiByZXF1aXJlKCcuL1RGaWx0ZXInKSxcbiAgICBUQm9keTogcmVxdWlyZSgnLi9UQm9keScpLFxuICAgIFRCb2R5RW1wdHk6IHJlcXVpcmUoJy4vVEJvZHlFbXB0eScpLFxuICAgIFRDZWxsOiByZXF1aXJlKCcuL1RDZWxsJyksXG4gICAgVEZvb3Q6IHJlcXVpcmUoJy4vVEZvb3QnKSxcbiAgICBUSGVhZDogcmVxdWlyZSgnLi9USGVhZCcpLFxuICAgIFRSb3c6IHJlcXVpcmUoJy4vVFJvdycpXG59OyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiUmVhY3RcIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJSZWFjdERPTVwiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcImZpbHRlclwiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcImlucHV0XCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wianNvblwiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcImxvYWRlclwiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcInBhZ2VyXCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wicG9wdXBcIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJzZWxlY3RvclwiXTsgfSgpKTsiXSwic291cmNlUm9vdCI6IiJ9