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

module.exports = React.createClass({
  displayName: 'ZRTable',
  getDefaultProps: function getDefaultProps() {
    return {
      valueKey: 'zxnz_UUID',
      rowKey: 'zxnz_UUID'
    };
  },
  getInitialState: function getInitialState() {
    return {
      data: [],
      columns: [],
      checkeds: []
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
  __onSort: function __onSort(sort) {
    var _this = this;

    var _sort = null;

    for (var key in sort) {
      _sort = sort[key];
      this.state.data = this.state.data.sort(function (next, prev) {
        return _this.__sortFunction(next, prev, key, _sort);
      });
    }

    this.forceUpdate();
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
      context: this.props.context,
      eachRowData: this.__onTBodyEachRowData
    }, this.props.tbody, {
      columns: columns,
      data: this.state.data,
      table: this
    }));
  },
  __tbodyLoadingRender: function __tbodyLoadingRender(columns) {
    return /*#__PURE__*/React.createElement(table.TBody, _extends({
      rowKey: this.props.rowKey,
      context: this.props.context
    }, this.props.tbody, {
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
      loadingEnabled: this.props.loadingEnabled || false,
      loadingRender: function loadingRender() {
        return _this2.__tbodyLoadingRender(columns);
      },
      responseHandler: this.props.responseHandler,
      onDataCreated: this.__onDataCreated,
      onFinished: this.__tbodyDataLoaded
    });
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

        if (_checkeds.indexOf(item[_valueKey]) == -1) {
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
    var _valueKey = this.props.valueKey || 'zxnz_UUID';

    if (event.checked) {
      var _iterator2 = _createForOfIteratorHelper(this.state.data),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var item = _step2.value;

          if (this.state.checkeds.indexOf(item[_valueKey]) == -1) {
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

          if (this.state.checkeds.indexOf(item[_valueKey]) != -1) {
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
    var _valueKey = this.props.valueKey || 'zxnz_UUID';

    var _checkbox = {
      width: 60,
      head: function (argv) {
        var _table = argv.thead.props.table;
        if (!_table) return;
        return /*#__PURE__*/React.createElement(selector.Checkbox, {
          style: {
            justifyContent: 'center'
          },
          key: zn.uuid(),
          text: '(' + _table.state.checkeds.length + ')',
          checked: this.__rowHeadCheckboxChecked(),
          onChange: this.__onRowHeadCheckboxChange
        });
      }.bind(this),
      body: function (argv) {
        var _this3 = this;

        var _data = argv.data;
        return /*#__PURE__*/React.createElement(selector.UncontrolCheckbox, {
          style: {
            justifyContent: 'center'
          },
          checked: this.state.checkeds.indexOf(_data[_valueKey]) !== -1,
          onClick: function onClick(event, checkbox) {
            event.stopPropagation();

            if (checkbox.props.checked) {
              _this3.state.checkeds.splice(_this3.state.checkeds.indexOf(_data[_valueKey]), 1);
            } else {
              _this3.state.checkeds.push(_data[_valueKey]);
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
    if (columns && zn.is(columns, 'array')) {
      var _temp = null,
          _result = null,
          _columnIterator = this.props.columnIterator,
          _columns = columns.map(function (column) {
        _temp = zn.deepAssign({}, column);
        _result = _columnIterator && _columnIterator(_temp, this);
        if (_result === false) return null;
        if (_typeof(_result) == 'object') return _result;
        return _temp;
      }.bind(this));

      this.__initCheckbox(_columns);

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

    if (_typeof(_return) == 'object') {
      data = _return;
    }

    this.state.table.state.data.push(zn.extend({}, data));
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
      pageIndex: this.props.pageIndex || 1
    };
  },
  componentDidMount: function componentDidMount() {
    this.props.onComponentDidMount && this.props.onComponentDidMount(this);
  },
  setPageIndex: function setPageIndex(pageIndex, callback) {
    if (this.data) {
      this.state.pageIndex = pageIndex;
      this.state.current = pageIndex;
      this.forceUpdate();
      this.data._argv = this.__onDataInitial(this.props.data);
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
      onPageChanged: this.__handlePageChanged
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
          total: Math.ceil(_pagerCount / this.props.pageSize),
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
          total: Math.ceil(_data[this.state.keyMaps.total] / this.props.pageSize),
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
    var _this = this;

    return /*#__PURE__*/React.createElement(Table, _extends({}, this.props, {
      className: znui.react.classname('zr-table-pager', this.props.className),
      childrenRender: this.__renderPager,
      onComponentDidMount: function onComponentDidMount(table) {
        _this._table = table;
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

var React = znui.React || __webpack_require__(/*! react */ "react");

var TRow = __webpack_require__(/*! ./TRow */ "./table/TRow.js");

var loader = __webpack_require__(/*! znui-react-loader */ "znui-react-loader");

module.exports = React.createClass({
  displayName: 'ZRTBody',
  getInitialState: function getInitialState() {
    var _pageSize = this.props.pageSize || 50;

    return {
      active: null,
      checkeds: [],
      className: '',
      pageIndex: this.props.pageIndex || 1,
      pageSize: _pageSize,
      pageCount: Math.ceil(this.props.data.length / _pageSize),
      style: {},
      loading: false
    };
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
      key: _key,
      context: this.props.context
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
    return /*#__PURE__*/React.createElement("td", {
      className: znui.react.classname("zr-table-tcell", this.props.className, this.state.className),
      style: znui.react.style(this.props.style, this.state.style),
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
  __onFilterChange: function __onFilterChange(event) {
    if (event.name) {
      if (event.value) {
        this.state.data[event.name] = {
          value: event.value,
          opt: event.opt
        };
      } else if (event.value === null || event.value === undefined) {
        this.state.data[event.name] = null;
        delete this.state.data[event.name];
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
        _content = /*#__PURE__*/React.createElement(filter.FilterField, _extends({
          key: zn.uuid()
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
      className: znui.react.classname('tfilter-cell', _cell.className),
      style: _cell.style
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
      this.state.sort[column.name] = sort == 'faSortAlphaDown' ? 'desc' : 'asc';
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

    if (!_content) {
      _content = /*#__PURE__*/React.createElement("div", {
        className: "cell-label",
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
      className: znui.react.classname('thead-cell', _cell.className),
      style: _cell.style
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
      sort: 'faSort'
    };
  },
  __renderIcon: function __renderIcon() {
    switch (this.state.sort) {
      case "faSort":
        return /*#__PURE__*/React.createElement("svg", {
          onClick: this.__iconClick,
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

      case "faSortAlphaDown":
        return /*#__PURE__*/React.createElement("svg", {
          onClick: this.__iconClick,
          "aria-hidden": "true",
          focusable: "false",
          "data-prefix": "fas",
          "data-icon": "sort-alpha-down",
          className: "icon svg-inline--fa fa-sort-alpha-down fa-w-14 ",
          role: "img",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 448 512"
        }, /*#__PURE__*/React.createElement("path", {
          fill: "currentColor",
          d: "M176 352h-48V48a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v304H16c-14.19 0-21.36 17.24-11.29 27.31l80 96a16 16 0 0 0 22.62 0l80-96C197.35 369.26 190.22 352 176 352zm240-64H288a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h56l-61.26 70.45A32 32 0 0 0 272 446.37V464a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-56l61.26-70.45A32 32 0 0 0 432 321.63V304a16 16 0 0 0-16-16zm31.06-85.38l-59.27-160A16 16 0 0 0 372.72 32h-41.44a16 16 0 0 0-15.07 10.62l-59.27 160A16 16 0 0 0 272 224h24.83a16 16 0 0 0 15.23-11.08l4.42-12.92h71l4.41 12.92A16 16 0 0 0 407.16 224H432a16 16 0 0 0 15.06-21.38zM335.61 144L352 96l16.39 48z"
        }));

      case "faSortAlphaUp":
        return /*#__PURE__*/React.createElement("svg", {
          onClick: this.__iconClick,
          "aria-hidden": "true",
          focusable: "false",
          "data-prefix": "fas",
          "data-icon": "sort-alpha-up",
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
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname('zr-thead-sort', this.props.className),
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
      className: '',
      style: {}
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
      onCellClick: this.props.onCellClick,
      className: znui.react.classname('trow-cell', _props.className)
    }));
  },
  render: function render() {
    var _className = this.props.className,
        _style = this.props.style;

    if (typeof _className == 'function') {
      _className = _className(this.props.data, this);
    }

    if (typeof _style == 'function') {
      _style = _style(this.props.data, this);
    }

    return /*#__PURE__*/React.createElement("tr", {
      className: znui.react.classname('zr-table-trow', _className, this.state.className),
      style: znui.react.style(_style, this.state.style),
      "data-active": this.props.active,
      "data-checked": this.props.checked,
      onClick: this.__onRowClick
    }, (this.props.columns || []).map(this.__cellRender));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vUG9wdXBUYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9UYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9UYWJsZUVkaXRvci5qcyIsIndlYnBhY2s6Ly8vLi9UYWJsZVBhZ2VyLmpzIiwid2VicGFjazovLy8uL2NlbGwvQ2hlY2tib3guanMiLCJ3ZWJwYWNrOi8vLy4vY2VsbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi90YWJsZS9Db2xncm91cC5qcyIsIndlYnBhY2s6Ly8vLi90YWJsZS9UQm9keS5qcyIsIndlYnBhY2s6Ly8vLi90YWJsZS9UQm9keUVtcHR5LmpzIiwid2VicGFjazovLy8uL3RhYmxlL1RDZWxsLmpzIiwid2VicGFjazovLy8uL3RhYmxlL1RGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdGFibGUvVEZvb3QuanMiLCJ3ZWJwYWNrOi8vLy4vdGFibGUvVEhlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vdGFibGUvVEhlYWRTb3J0LmpzIiwid2VicGFjazovLy8uL3RhYmxlL1RSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vdGFibGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdERPTVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpbHRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImlucHV0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianNvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvYWRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhZ2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicG9wdXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZWxlY3RvclwiIl0sIm5hbWVzIjpbIlJlYWN0Iiwiem51aSIsInJlcXVpcmUiLCJUYWJsZVBhZ2VyIiwic2VsZWN0b3IiLCJtb2R1bGUiLCJleHBvcnRzIiwiY3JlYXRlQ2xhc3MiLCJkaXNwbGF5TmFtZSIsImdldERlZmF1bHRQcm9wcyIsInRleHRLZXkiLCJ2YWx1ZUtleSIsImdldEluaXRpYWxTdGF0ZSIsInRleHQiLCJwcm9wcyIsInZhbHVlIiwiZ2V0VGV4dCIsInN0YXRlIiwic2V0VGV4dCIsInNldFN0YXRlIiwiZ2V0VmFsdWUiLCJzZXRWYWx1ZSIsIl9fb25Sb3dDbGljayIsImV2ZW50IiwiZHJvcGRvd25FdmVudCIsIl9kYXRhIiwiZGF0YSIsInRyb3ciLCJwb3B1cFNlbGVjdCIsInNldERhdGEiLCJkcm9wZG93biIsImNsb3NlUG9wb3ZlciIsIm9uQ2hhbmdlIiwiX19wb3B1cFJlbmRlciIsImZpbHRlciIsIm9uUm93Q2xpY2siLCJyZW5kZXIiLCJyZWFjdCIsImNsYXNzbmFtZSIsImNsYXNzTmFtZSIsInN0eWxlIiwidGFibGUiLCJyb3dLZXkiLCJjb2x1bW5zIiwiY2hlY2tlZHMiLCJjb21wb25lbnREaWRNb3VudCIsIm9uQ29tcG9uZW50RGlkTW91bnQiLCJfX3NvcnRGdW5jdGlvbiIsIm5leHQiLCJwcmV2Iiwia2V5IiwiX3NvcnQiLCJzb3J0RnVuY3Rpb24iLCJfX29uU29ydCIsInNvcnQiLCJmb3JjZVVwZGF0ZSIsIl9fb25GaWx0ZXIiLCJmaWx0ZXJzIiwiX3JldHVybiIsIm9uRmlsdGVyQ2hhbmdlIiwiem4iLCJpc1pOT2JqZWN0IiwiX2FyZ3YiLCJyZWZyZXNoIiwiX19vblRCb2R5RWFjaFJvd0RhdGEiLCJpbmRleCIsInRib2R5IiwiX3ZhbHVlS2V5IiwiY2hlY2tib3giLCJfdmFsdWUiLCJpbmRleE9mIiwicHVzaCIsIl9fdGJvZHlEYXRhUmVuZGVyIiwibGVuZ3RoIiwiY29udGV4dCIsIl9fdGJvZHlMb2FkaW5nUmVuZGVyIiwiX19vblRIZWFkQ29sdW1uQ2hhbmdlIiwiX190Ym9keURhdGFMb2FkZWQiLCJvbkRhdGFMb2FkZWQiLCJpcyIsInJlc3VsdCIsIl9fb25EYXRhQ3JlYXRlZCIsImxpZnljeWNsZSIsIm9uRGF0YUNyZWF0ZWQiLCJjYWxsYmFjayIsInJlZnJlc2hIZWFkZXJzIiwiX19yZW5kZXJUQm9keSIsIl9yZXN1bHQiLCJvbkRhdGFJbml0aWFsIiwibG9hZGluZ0VuYWJsZWQiLCJyZXNwb25zZUhhbmRsZXIiLCJfX3JlbmRlciIsIndpZHRoIiwiZml4ZWQiLCJjZWxsUGFkZGluZyIsImNlbGxTcGFjaW5nIiwiYXR0cnMiLCJjYXB0aW9uIiwiY29sZ3JvdXAiLCJrZXlNYXBwaW5nIiwidGhlYWQiLCJ0ZmlsdGVyIiwidGZvb3QiLCJjaGlsZHJlblJlbmRlciIsImNoaWxkcmVuIiwiX19yb3dIZWFkQ2hlY2tib3hDaGVja2VkIiwiX2NoZWNrZWRzIiwiaXRlbSIsIl9fb25Sb3dIZWFkQ2hlY2tib3hDaGFuZ2UiLCJjaGVja2VkIiwic3BsaWNlIiwib25DaGVja2JveENoYW5nZSIsIl9faW5pdENoZWNrYm94IiwiX2NoZWNrYm94IiwiaGVhZCIsImFyZ3YiLCJfdGFibGUiLCJqdXN0aWZ5Q29udGVudCIsInV1aWQiLCJiaW5kIiwiYm9keSIsInN0b3BQcm9wYWdhdGlvbiIsInR5cGUiLCJleHRlbmQiLCJ1bnNoaWZ0IiwiX19jb2x1bW5zTG9hZGVkIiwiX3RlbXAiLCJfY29sdW1uSXRlcmF0b3IiLCJjb2x1bW5JdGVyYXRvciIsIl9jb2x1bW5zIiwibWFwIiwiY29sdW1uIiwiZGVlcEFzc2lnbiIsIm9uQ29sdW1uc0xvYWRlZCIsIl9fb25Db2x1bW5EYXRhQ3JlYXRlZCIsImxpZmVjeWNsZSIsIm9uQ29sdW1uc0NyZWF0ZWQiLCJnZXREYXRhIiwicmVtb3ZlUm93RGF0YSIsInVwZGF0ZVJvd0RhdGEiLCJfaW5kZXgiLCJvbkNvbHVtbkxvYWRpbmciLCJvbkNvbHVtbkxvYWRFcnJvciIsIlRhYmxlIiwiaW5wdXQiLCJfX2NlbGxDaGFuZ2UiLCJ0Y2VsbCIsIm5hbWUiLCJfX2NvbHVtbkJvZHlSZW5kZXIiLCJfX2NvbHVtbkl0ZXJhdG9yIiwib25EYXRhQ2hhbmdlIiwiYWRkUm93IiwicmVmIiwicGFnZXIiLCJjb3VudCIsImN1cnJlbnQiLCJ0b3RhbCIsInBhZ2VJbmRleCIsInNldFBhZ2VJbmRleCIsIl9fb25EYXRhSW5pdGlhbCIsIl9faGFuZGxlUGFnZUNoYW5nZWQiLCJuZXdQYWdlIiwib25QYWdlQ2hhbmdlZCIsIl9fcmVuZGVyUGFnZXIiLCJfY29sdW1uU2l6ZSIsIl9zdGF0ZSIsIl9lbGVtZW50IiwiX3BhZ2VyUHJvcHMiLCJfQ29tcG9uZW50IiwiUGFnZXIiLCJwYXRoIiwid2luZG93IiwiY29tcG9uZW50IiwiY3JlYXRlUmVhY3RFbGVtZW50IiwicGFnZXJSZW5kZXIiLCJfbWV0aG9kIiwibWV0aG9kIiwiX3BhcmFtcyIsIl9rZXlNYXBzIiwicGFnZVNpemUiLCJrZXlNYXBzIiwicGFyYW1zIiwiX19vbkRhdGFMb2FkZWQiLCJ6eG56IiwiY29kZSIsImNvbnNvbGUiLCJlcnJvciIsImRldGFpbCIsIl9wYWdlckNvdW50IiwiTWF0aCIsImNlaWwiLCJfX29uRmlsdGVyQ2hhbmdlIiwiQ2hlY2tib3giLCJfX29uQ2hlY2tib3hDaGFuZ2UiLCJfX29uSGVhZENoYW5nZSIsIl9fb25Cb2R5Q2hhbmdlIiwibG9nIiwiY2VsbCIsIlBvcHVwVGFibGUiLCJUYWJsZUVkaXRvciIsIl9rZXlNYXBwaW5nIiwiX3dpZHRoIiwiVFJvdyIsImxvYWRlciIsIl9wYWdlU2l6ZSIsImFjdGl2ZSIsInBhZ2VDb3VudCIsImxvYWRpbmciLCJfX2dldERhdGEiLCJfcGFnZUluZGV4Iiwic2xpY2UiLCJtaW4iLCJfX3JlbmRlckxvYWRpbmciLCJsb2FkaW5nUmVuZGVyIiwiX2xvYWRpbmciLCJfX3JlbmRlckVtcHR5IiwiZW1wdHlSZW5kZXIiLCJfZW1wdHkiLCJlbXB0eSIsIl9fb25DZWxsQ2xpY2siLCJvbkNlbGxDbGljayIsIl9fcmVuZGVyUm93IiwiZWFjaFJvd0RhdGEiLCJyb3dSZW5kZXIiLCJyb3dJbmRleCIsIl9yb3dLZXkiLCJfa2V5Iiwicm93IiwiY2VsbFJlbmRlciIsIl9fcGFnZUNoYW5nZSIsIl9fcGFnZXNSZW5kZXIiLCJfcGFnZUNvdW50IiwiX3BhZ2VzIiwiaSIsIl9fcmVuZGVyRGF0YSIsIlJlYWN0RE9NIiwiZGlzYWJsZWQiLCJfX3JlbmRlckNlbGxDb250ZW50IiwiX3JlbmRlciIsImNlbGxJbmRleCIsIl9fY2VsbENsaWNrIiwiX3RoaXMiLCJmaW5kVERET00iLCJmaW5kRE9NTm9kZSIsIm9uQ2xpY2siLCJvcHQiLCJ1bmRlZmluZWQiLCJvbkZpbHRlciIsIl9fb25GaWx0ZXJDYW5jZWwiLCJfX3JlbmRlckNlbGwiLCJfY29udGVudCIsIl9maWx0ZXIiLCJwcm90b3R5cGUiLCJjYWxsIiwiX2NlbGwiLCJfcm93IiwiX19yZW5kZXJDaGlsZHJlbiIsImZvb3QiLCJUSGVhZFNvcnQiLCJwb3B1cCIsInpyanNvbiIsIl9fb25Db2x1bW5Tb3J0Iiwib25Tb3J0IiwiX19vbkNvbHVtbkVkaXRvckNoYW5nZSIsImNoaWxkIiwicm9vdCIsIl9yb290Iiwib25Db2x1bW5DaGFuZ2UiLCJfX2ljb25DbGlja1JlbmRlciIsInBhZGRpbmciLCJtYXhIZWlnaHQiLCJvdmVyZmxvdyIsIl9tYXBwaW5nIiwiX2xhYmVsS2V5IiwiX2xhYmVsIiwicmVxdWlyZWQiLCJlZGl0YWJsZSIsImNsb3NlYWJsZSIsIl9fcmVuZGVySWNvbiIsIl9faWNvbkNsaWNrIiwiVENlbGwiLCJfX2dldFRhcmdldFREIiwidGFyZ2V0IiwidGFnTmFtZSIsInBhcmVudE5vZGUiLCJfdGQiLCJmaW5kVFJET00iLCJ0ZCIsIl9fY2VsbFJlbmRlciIsIl9wcm9wcyIsIl9jbGFzc05hbWUiLCJfc3R5bGUiLCJDb2xncm91cCIsIlRGaWx0ZXIiLCJUQm9keSIsIlRCb2R5RW1wdHkiLCJURm9vdCIsIlRIZWFkIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FB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bUMsRUFBRSxJIiwiZmlsZSI6Ii4vZGlzdC9kZXZlbG9wbWVudC9pbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFRhYmxlUGFnZXIgPSByZXF1aXJlKCcuL1RhYmxlUGFnZXInKTtcbnZhciBzZWxlY3RvciA9IHJlcXVpcmUoJ3pudWktcmVhY3Qtc2VsZWN0b3InKTtcbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTogJ1pSUG9wdXBUYWJsZScsXG5cdGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHRleHRLZXk6ICd6eG56X0xhYmVsJyxcblx0XHRcdHZhbHVlS2V5OiAnenhuel9VVUlEJ1xuXHRcdH07XG5cdH0sXG4gICAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiB7XG5cdFx0XHR0ZXh0OiB0aGlzLnByb3BzLnRleHQsXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5wcm9wcy52YWx1ZVxuXHRcdH07XG5cdH0sXG4gICAgZ2V0VGV4dDogZnVuY3Rpb24gKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnRleHQ7XG4gICAgfSxcbiAgICBzZXRUZXh0OiBmdW5jdGlvbiAodGV4dCl7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdGV4dDogdGV4dFxuICAgICAgICB9KTtcbiAgICB9LFxuXHRnZXRWYWx1ZTogZnVuY3Rpb24gKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnZhbHVlO1xuICAgIH0sXG4gICAgc2V0VmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSl7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgX19vblJvd0NsaWNrOiBmdW5jdGlvbiAoZXZlbnQsIGRyb3Bkb3duRXZlbnQpe1xuICAgICAgICB2YXIgX2RhdGEgPSBldmVudC5kYXRhLnRyb3cucHJvcHMuZGF0YTtcbiAgICAgICAgZXZlbnQuZGF0YSA9IF9kYXRhO1xuICAgICAgICBldmVudC52YWx1ZSA9IF9kYXRhW3RoaXMucHJvcHMudmFsdWVLZXldO1xuXHRcdGV2ZW50LnRleHQgPSBfZGF0YVt0aGlzLnByb3BzLnRleHRLZXldO1xuICAgICAgICBkcm9wZG93bkV2ZW50LnBvcHVwU2VsZWN0LnNldERhdGEoZXZlbnQudmFsdWUsIGV2ZW50LnRleHQpO1xuICAgICAgICBkcm9wZG93bkV2ZW50LmRyb3Bkb3duLmNsb3NlUG9wb3ZlcigpO1xuICAgICAgICB0aGlzLnNldFZhbHVlKGV2ZW50LnZhbHVlKTtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSAmJiB0aGlzLnByb3BzLm9uQ2hhbmdlKGV2ZW50LCBkcm9wZG93bkV2ZW50KTtcbiAgICB9LFxuXHRfX3BvcHVwUmVuZGVyOiBmdW5jdGlvbiAoZHJvcGRvd25FdmVudCl7XG5cdFx0cmV0dXJuIDxUYWJsZVBhZ2VyXG4gICAgICAgICAgICB6eG56PXt0cnVlfVxuICAgICAgICAgICAgY29sZ3JvdXA9e3t9fVxuICAgICAgICAgICAgY2VsbFBhZGRpbmc9ezV9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ6ci10YWJsZS1jbGFzcy1ub3JtYWxcIlxuICAgICAgICAgICAgZml4ZWQ9e3RydWV9XG4gICAgICAgICAgICB0aGVhZD17e1xuICAgICAgICAgICAgICAgIGZpbHRlcjogdHJ1ZVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHRmaWx0ZXI9e3t9fVxuICAgICAgICAgICAgdGJvZHk9e3tcbiAgICAgICAgICAgICAgICBvblJvd0NsaWNrOiAoZXZlbnQpPT50aGlzLl9fb25Sb3dDbGljayhldmVudCwgZHJvcGRvd25FdmVudClcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBwYWdlSW5kZXg9ezF9XG4gICAgICAgICAgICBwYWdlU2l6ZT17NX0gey4uLnRoaXMucHJvcHN9IC8+O1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxzZWxlY3Rvci5Qb3B1cFNlbGVjdCBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd6ci10YWJsZS1wb3B1cC10YWJsZScsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9IHBvcHVwUmVuZGVyPXt0aGlzLl9fcG9wdXBSZW5kZXJ9IC8+XG5cdFx0KTtcblx0fVxufSk7IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIHRhYmxlID0gcmVxdWlyZSgnLi90YWJsZS9pbmRleCcpO1xudmFyIHNlbGVjdG9yID0gcmVxdWlyZSgnem51aS1yZWFjdC1zZWxlY3RvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSVGFibGUnLFxuXHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHR2YWx1ZUtleTogJ3p4bnpfVVVJRCcsXG5cdFx0XHRyb3dLZXk6ICd6eG56X1VVSUQnXG5cdFx0fTtcblx0fSxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0ZGF0YTogW10sIFxuXHRcdFx0Y29sdW1uczogW10sXG5cdFx0XHRjaGVja2VkczogW11cblx0XHR9O1xuXHR9LFxuXHRjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24oKXtcblx0XHR0aGlzLnByb3BzLm9uQ29tcG9uZW50RGlkTW91bnQgJiYgdGhpcy5wcm9wcy5vbkNvbXBvbmVudERpZE1vdW50KHRoaXMpO1xuXHR9LFxuXHRfX3NvcnRGdW5jdGlvbjogZnVuY3Rpb24gKG5leHQsIHByZXYsIGtleSwgX3NvcnQpe1xuXHRcdGlmKHRoaXMucHJvcHMuc29ydEZ1bmN0aW9uKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5wcm9wcy5zb3J0RnVuY3Rpb24obmV4dCwgcHJldiwga2V5LCBfc29ydCk7XG5cdFx0fVxuXHRcdGlmKF9zb3J0PT0nZGVzYycpe1xuXHRcdFx0aWYobmV4dFtrZXldID4gcHJldltrZXldKXtcblx0XHRcdFx0cmV0dXJuIDE7XG5cdFx0XHR9ZWxzZSBpZihuZXh0W2tleV0gPT0gcHJldltrZXldKXtcblx0XHRcdFx0cmV0dXJuIDA7XG5cdFx0XHR9ZWxzZSBpZihuZXh0W2tleV0gPCBwcmV2W2tleV0pe1xuXHRcdFx0XHRyZXR1cm4gLTE7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKF9zb3J0PT0nYXNjJyl7XG5cdFx0XHRpZihuZXh0W2tleV0gPCBwcmV2W2tleV0pe1xuXHRcdFx0XHRyZXR1cm4gMTtcblx0XHRcdH1lbHNlIGlmKG5leHRba2V5XSA9PSBwcmV2W2tleV0pe1xuXHRcdFx0XHRyZXR1cm4gMDtcblx0XHRcdH1lbHNlIGlmKG5leHRba2V5XSA+IHByZXZba2V5XSl7XG5cdFx0XHRcdHJldHVybiAtMTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdF9fb25Tb3J0OiBmdW5jdGlvbiAoc29ydCl7XG5cdFx0dmFyIF9zb3J0ID0gbnVsbDtcblx0XHRmb3IodmFyIGtleSBpbiBzb3J0KXtcblx0XHRcdF9zb3J0ID0gc29ydFtrZXldXG5cdFx0XHR0aGlzLnN0YXRlLmRhdGEgPSB0aGlzLnN0YXRlLmRhdGEuc29ydCgobmV4dCwgcHJldikgPT4gdGhpcy5fX3NvcnRGdW5jdGlvbihuZXh0LCBwcmV2LCBrZXksIF9zb3J0KSk7XG5cdFx0fVxuXG5cdFx0dGhpcy5mb3JjZVVwZGF0ZSgpO1xuXHR9LFxuXHRfX29uRmlsdGVyOiBmdW5jdGlvbiAoZmlsdGVycyl7XG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLm9uRmlsdGVyQ2hhbmdlICYmIHRoaXMucHJvcHMub25GaWx0ZXJDaGFuZ2UoZmlsdGVycywgdGhpcy5zdGF0ZS5kYXRhLCB0aGlzKTtcblx0XHRpZihfcmV0dXJuICE9PSBmYWxzZSl7XG5cdFx0XHRpZih0aGlzLmRhdGEgJiYgem4uaXNaTk9iamVjdCh0aGlzLmRhdGEpKSB7XG5cdFx0XHRcdGlmKCF0aGlzLmRhdGEuX2FyZ3YuZGF0YSkge1xuXHRcdFx0XHRcdHRoaXMuZGF0YS5fYXJndi5kYXRhID0ge307XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5kYXRhLl9hcmd2LmRhdGEuZmlsdGVycyA9IGZpbHRlcnM7XG5cdFx0XHRcdHRoaXMuZGF0YS5yZWZyZXNoKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHRfX29uVEJvZHlFYWNoUm93RGF0YTogZnVuY3Rpb24gKGRhdGEsIGluZGV4LCB0Ym9keSl7XG5cdFx0dmFyIF92YWx1ZUtleSA9IHRoaXMucHJvcHMudmFsdWVLZXkgfHwgJ3p4bnpfVVVJRCc7XG5cdFx0aWYodGhpcy5wcm9wcy5jaGVja2JveCAmJiB0aGlzLnByb3BzLnZhbHVlICYmIF92YWx1ZUtleSkge1xuXHRcdFx0dmFyIF92YWx1ZSA9IGRhdGFbX3ZhbHVlS2V5XTtcblx0XHRcdGlmKHRoaXMucHJvcHMudmFsdWUuaW5kZXhPZihfdmFsdWUpIT0tMSl7XG5cdFx0XHRcdHRoaXMuc3RhdGUuY2hlY2tlZHMucHVzaChfdmFsdWUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0X190Ym9keURhdGFSZW5kZXI6IGZ1bmN0aW9uIChjb2x1bW5zKXtcblx0XHRpZighdGhpcy5zdGF0ZS5kYXRhLmxlbmd0aCl7XG5cdFx0XHRyZXR1cm4gPHRhYmxlLlRCb2R5RW1wdHkgY29udGV4dD17dGhpcy5wcm9wcy5jb250ZXh0fSB7Li4udGhpcy5wcm9wcy50Ym9keX0gY29sdW1ucz17Y29sdW1uc30gZGF0YT17dGhpcy5zdGF0ZS5kYXRhfSB0YWJsZT17dGhpc30gLz47XG5cdFx0fVxuXHRcdHJldHVybiA8dGFibGUuVEJvZHkgcm93S2V5PXt0aGlzLnByb3BzLnJvd0tleX0gY29udGV4dD17dGhpcy5wcm9wcy5jb250ZXh0fSBlYWNoUm93RGF0YT17dGhpcy5fX29uVEJvZHlFYWNoUm93RGF0YX0gey4uLnRoaXMucHJvcHMudGJvZHl9IGNvbHVtbnM9e2NvbHVtbnN9IGRhdGE9e3RoaXMuc3RhdGUuZGF0YX0gdGFibGU9e3RoaXN9IC8+O1xuXHR9LFxuXHRfX3Rib2R5TG9hZGluZ1JlbmRlcjogZnVuY3Rpb24gKGNvbHVtbnMpe1xuXHRcdHJldHVybiA8dGFibGUuVEJvZHkgcm93S2V5PXt0aGlzLnByb3BzLnJvd0tleX0gY29udGV4dD17dGhpcy5wcm9wcy5jb250ZXh0fSB7Li4udGhpcy5wcm9wcy50Ym9keX0gY29sdW1ucz17Y29sdW1uc30gbG9hZGluZz17dHJ1ZX0gdGFibGU9e3RoaXN9IC8+O1xuXHR9LFxuXHRfX29uVEhlYWRDb2x1bW5DaGFuZ2U6IGZ1bmN0aW9uIChkYXRhLCBpbmRleCl7XG5cdFx0aWYodGhpcy5zdGF0ZS5jb2x1bW5zKXtcblx0XHRcdHRoaXMuc3RhdGUuY29sdW1uc1tpbmRleF0gPSBkYXRhO1xuXHRcdFx0dGhpcy5mb3JjZVVwZGF0ZSgpO1xuXHRcdH1cblx0fSxcblx0X190Ym9keURhdGFMb2FkZWQ6IGZ1bmN0aW9uIChkYXRhKSB7XG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLm9uRGF0YUxvYWRlZCAmJiB0aGlzLnByb3BzLm9uRGF0YUxvYWRlZChkYXRhLCB0aGlzKTtcblx0XHRpZihfcmV0dXJuICE9PSBmYWxzZSl7XG5cdFx0XHRpZih6bi5pcyhkYXRhLCAnb2JqZWN0JykgJiYgZGF0YS5yZXN1bHQpe1xuXHRcdFx0XHRkYXRhID0gZGF0YS5yZXN1bHQ7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgZGF0YTogZGF0YSB9KTtcblx0XHR9XG5cdH0sXG5cdF9fb25EYXRhQ3JlYXRlZDogZnVuY3Rpb24gKGRhdGEsIGxpZnljeWNsZSl7XG5cdFx0dGhpcy5kYXRhID0gZGF0YTtcblx0XHR0aGlzLnByb3BzLm9uRGF0YUNyZWF0ZWQgJiYgdGhpcy5wcm9wcy5vbkRhdGFDcmVhdGVkKGRhdGEsIHRoaXMsIGxpZnljeWNsZSk7XG5cdH0sXG5cdHJlZnJlc2g6IGZ1bmN0aW9uIChjYWxsYmFjayl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRjaGVja2VkczogW11cblx0XHR9KTtcblx0XHRpZih0aGlzLmRhdGEpe1xuXHRcdFx0dGhpcy5kYXRhLnJlZnJlc2goKTtcblx0XHR9XG5cdFx0Y2FsbGJhY2sgJiYgY2FsbGJhY2soKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXHRyZWZyZXNoSGVhZGVyczogZnVuY3Rpb24gKCl7XG5cdFx0aWYodGhpcy5jb2x1bW5zKXtcblx0XHRcdHRoaXMuY29sdW1ucy5yZWZyZXNoKCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cdF9fcmVuZGVyVEJvZHk6IGZ1bmN0aW9uIChjb2x1bW5zKXtcblx0XHR2YXIgX2RhdGEgPSB0aGlzLnByb3BzLmRhdGEgfHwgdGhpcy5wcm9wcy50Ym9keS5kYXRhO1xuXHRcdHZhciBfcmVzdWx0ID0gdGhpcy5wcm9wcy5vbkRhdGFJbml0aWFsICYmIHRoaXMucHJvcHMub25EYXRhSW5pdGlhbChfZGF0YSwgdGhpcyk7XG5cdFx0aWYoX3Jlc3VsdCl7XG5cdFx0XHRfZGF0YSA9IF9yZXN1bHQ7XG5cdFx0fVxuXHRcdHJldHVybiA8em51aS5yZWFjdC5EYXRhTGlmZWN5Y2xlIGRhdGE9e19kYXRhfSBcblx0XHRcdFx0XHRkYXRhUmVuZGVyPXsoKT0+dGhpcy5fX3Rib2R5RGF0YVJlbmRlcihjb2x1bW5zKX0gXG5cdFx0XHRcdFx0bG9hZGluZ0VuYWJsZWQ9e3RoaXMucHJvcHMubG9hZGluZ0VuYWJsZWR8fGZhbHNlfVxuXHRcdFx0XHRcdGxvYWRpbmdSZW5kZXI9eygpPT50aGlzLl9fdGJvZHlMb2FkaW5nUmVuZGVyKGNvbHVtbnMpfVxuXHRcdFx0XHRcdHJlc3BvbnNlSGFuZGxlcj17dGhpcy5wcm9wcy5yZXNwb25zZUhhbmRsZXJ9XG5cdFx0XHRcdFx0b25EYXRhQ3JlYXRlZD17dGhpcy5fX29uRGF0YUNyZWF0ZWR9XG5cdFx0XHRcdFx0b25GaW5pc2hlZD17dGhpcy5fX3Rib2R5RGF0YUxvYWRlZH0gLz47XG5cdH0sXG5cdF9fcmVuZGVyOiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgY29sdW1ucyA9IHRoaXMuc3RhdGUuY29sdW1ucztcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHRhYmxlIGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci10YWJsZVwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IFxuXHRcdFx0XHRzdHlsZT17em51aS5yZWFjdC5zdHlsZSh0aGlzLnByb3BzLnN0eWxlLCB7IHdpZHRoOiB0aGlzLnByb3BzLndpZHRoIH0pfSBcblx0XHRcdFx0ZGF0YS1maXhlZD17dGhpcy5wcm9wcy5maXhlZH0gXHRcblx0XHRcdFx0Y2VsbFBhZGRpbmc9e3RoaXMucHJvcHMuY2VsbFBhZGRpbmcgfHwgMH0gXG5cdFx0XHRcdGNlbGxTcGFjaW5nPXt0aGlzLnByb3BzLmNlbGxTcGFjaW5nIHx8IDB9IHsuLi50aGlzLnByb3BzLmF0dHJzfT5cblx0XHRcdFx0eyAhIXRoaXMucHJvcHMuY2FwdGlvbiAmJiA8Y2FwdGlvbiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2FwdGlvbi5jbGFzc05hbWV9IHN0eWxlPXt0aGlzLnByb3BzLmNhcHRpb24uc3R5bGV9Pnt0aGlzLnByb3BzLmNhcHRpb24ucmVuZGVyfTwvY2FwdGlvbj4gfVxuXHRcdFx0XHR7ICEhdGhpcy5wcm9wcy5jb2xncm91cCAmJiA8dGFibGUuQ29sZ3JvdXAgY29udGV4dD17dGhpcy5wcm9wcy5jb250ZXh0fSBrZXlNYXBwaW5nPXt0aGlzLnByb3BzLmtleU1hcHBpbmd9IGNvbHVtbnM9e2NvbHVtbnN9IHsuLi50aGlzLnByb3BzLmNvbGdyb3VwfSAvPiB9XG5cdFx0XHRcdHsgISF0aGlzLnByb3BzLnRoZWFkICYmIDx0YWJsZS5USGVhZCBjb250ZXh0PXt0aGlzLnByb3BzLmNvbnRleHR9IG9uU29ydD17dGhpcy5fX29uU29ydH0gb25Db2x1bW5DaGFuZ2U9e3RoaXMuX19vblRIZWFkQ29sdW1uQ2hhbmdlfSBjb2x1bW5zPXtjb2x1bW5zfSBrZXlNYXBwaW5nPXt0aGlzLnByb3BzLmtleU1hcHBpbmd9IHsuLi50aGlzLnByb3BzLnRoZWFkfSB0YWJsZT17dGhpc30gLz59XG5cdFx0XHRcdHsgISF0aGlzLnByb3BzLnRmaWx0ZXIgJiYgPHRhYmxlLlRGaWx0ZXIgY29udGV4dD17dGhpcy5wcm9wcy5jb250ZXh0fSBvbkZpbHRlcj17dGhpcy5fX29uRmlsdGVyfSBjb2x1bW5zPXtjb2x1bW5zfSB7Li4udGhpcy5wcm9wcy50ZmlsdGVyfSB0YWJsZT17dGhpc30gLz59XG5cdFx0XHRcdHsgKHRoaXMucHJvcHMudGJvZHkgfHwgdGhpcy5wcm9wcy5kYXRhKSAmJiB0aGlzLl9fcmVuZGVyVEJvZHkoY29sdW1ucykgfVxuXHRcdFx0XHR7ICEhdGhpcy5wcm9wcy50Zm9vdCAmJiA8dGFibGUuVEZvb3QgY29udGV4dD17dGhpcy5wcm9wcy5jb250ZXh0fSBjb2x1bW5zPXtjb2x1bW5zfSB7Li4udGhpcy5wcm9wcy50Zm9vdH0gdGFibGU9e3RoaXN9IC8+fVxuXHRcdFx0XHR7IHRoaXMucHJvcHMuY2hpbGRyZW5SZW5kZXIgJiYgdGhpcy5wcm9wcy5jaGlsZHJlblJlbmRlcihjb2x1bW5zLCB0aGlzKSB9XG5cdFx0XHRcdHsgdGhpcy5wcm9wcy5jaGlsZHJlbiB9XG5cdFx0XHQ8L3RhYmxlPlxuXHRcdCk7XG5cdH0sXG5cdF9fcm93SGVhZENoZWNrYm94Q2hlY2tlZDogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF9jaGVja2VkcyA9IHRoaXMuc3RhdGUuY2hlY2tlZHMsIF92YWx1ZUtleSA9IHRoaXMucHJvcHMudmFsdWVLZXkgfHwgJ3p4bnpfVVVJRCc7XG5cdFx0aWYoIV9jaGVja2Vkcy5sZW5ndGgpIHJldHVybiBmYWxzZTtcblx0XHRmb3IodmFyIGl0ZW0gb2YgdGhpcy5zdGF0ZS5kYXRhKSB7XG5cdFx0XHRpZihfY2hlY2tlZHMuaW5kZXhPZihpdGVtW192YWx1ZUtleV0pID09IC0xKXtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9LFxuXHRfX29uUm93SGVhZENoZWNrYm94Q2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdHZhciBfdmFsdWVLZXkgPSB0aGlzLnByb3BzLnZhbHVlS2V5IHx8ICd6eG56X1VVSUQnO1xuXHRcdGlmKGV2ZW50LmNoZWNrZWQpIHtcblx0XHRcdGZvcih2YXIgaXRlbSBvZiB0aGlzLnN0YXRlLmRhdGEpIHtcblx0XHRcdFx0aWYodGhpcy5zdGF0ZS5jaGVja2Vkcy5pbmRleE9mKGl0ZW1bX3ZhbHVlS2V5XSkgPT0gLTEpe1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUuY2hlY2tlZHMucHVzaChpdGVtW192YWx1ZUtleV0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fWVsc2V7XG5cdFx0XHRmb3IodmFyIGl0ZW0gb2YgdGhpcy5zdGF0ZS5kYXRhKSB7XG5cdFx0XHRcdGlmKHRoaXMuc3RhdGUuY2hlY2tlZHMuaW5kZXhPZihpdGVtW192YWx1ZUtleV0pICE9IC0xKXtcblx0XHRcdFx0XHR0aGlzLnN0YXRlLmNoZWNrZWRzLnNwbGljZSh0aGlzLnN0YXRlLmNoZWNrZWRzLmluZGV4T2YoaXRlbVtfdmFsdWVLZXldKSwgMSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0dGhpcy5mb3JjZVVwZGF0ZSgpO1xuXHRcdHRoaXMucHJvcHMub25DaGVja2JveENoYW5nZSAmJiB0aGlzLnByb3BzLm9uQ2hlY2tib3hDaGFuZ2UodGhpcy5zdGF0ZS5jaGVja2VkcywgdGhpcyk7XG5cdH0sXG5cdF9faW5pdENoZWNrYm94OiBmdW5jdGlvbiAoY29sdW1ucyl7XG5cdFx0dmFyIF92YWx1ZUtleSA9IHRoaXMucHJvcHMudmFsdWVLZXkgfHwgJ3p4bnpfVVVJRCc7XG5cdFx0dmFyIF9jaGVja2JveCA9IHtcblx0XHRcdFx0d2lkdGg6IDYwLFxuXHRcdFx0XHRoZWFkOiBmdW5jdGlvbiAoYXJndil7XG5cdFx0XHRcdFx0dmFyIF90YWJsZSA9IGFyZ3YudGhlYWQucHJvcHMudGFibGU7XG5cdFx0XHRcdFx0aWYoIV90YWJsZSkgcmV0dXJuO1xuXHRcdFx0XHRcdHJldHVybiA8c2VsZWN0b3IuQ2hlY2tib3hcblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgfX1cblx0XHRcdFx0XHRcdFx0XHRrZXk9e3puLnV1aWQoKX1cblx0XHRcdFx0XHRcdFx0XHR0ZXh0PXsnKCcgKyBfdGFibGUuc3RhdGUuY2hlY2tlZHMubGVuZ3RoICsnKSd9XG5cdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17dGhpcy5fX3Jvd0hlYWRDaGVja2JveENoZWNrZWQoKX1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5fX29uUm93SGVhZENoZWNrYm94Q2hhbmdlfSAvPjtcblx0XHRcdFx0fS5iaW5kKHRoaXMpLFxuXHRcdFx0XHRib2R5OiBmdW5jdGlvbiAoYXJndil7XG5cdFx0XHRcdFx0dmFyIF9kYXRhID0gYXJndi5kYXRhO1xuXHRcdFx0XHRcdHJldHVybiA8c2VsZWN0b3IuVW5jb250cm9sQ2hlY2tib3ggXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19XG5cdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17dGhpcy5zdGF0ZS5jaGVja2Vkcy5pbmRleE9mKF9kYXRhW192YWx1ZUtleV0pICE9PSAtMX1cblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoZXZlbnQsIGNoZWNrYm94KT0+e1xuXHRcdFx0XHRcdFx0XHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZihjaGVja2JveC5wcm9wcy5jaGVja2VkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc3RhdGUuY2hlY2tlZHMuc3BsaWNlKHRoaXMuc3RhdGUuY2hlY2tlZHMuaW5kZXhPZihfZGF0YVtfdmFsdWVLZXldKSwgMSk7IFxuXHRcdFx0XHRcdFx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc3RhdGUuY2hlY2tlZHMucHVzaChfZGF0YVtfdmFsdWVLZXldKTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuZm9yY2VVcGRhdGUoKTtcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMub25DaGVja2JveENoYW5nZSAmJiB0aGlzLnByb3BzLm9uQ2hlY2tib3hDaGFuZ2UodGhpcy5zdGF0ZS5jaGVja2VkcywgdGhpcyk7XG5cdFx0XHRcdFx0XHRcdFx0fX0gLz47XG5cdFx0XHRcdH0uYmluZCh0aGlzKVxuXHRcdFx0fSxcblx0XHRcdF92YWx1ZSA9IHRoaXMucHJvcHMuY2hlY2tib3g7XG5cdFx0c3dpdGNoKHpuLnR5cGUoX3ZhbHVlKSkge1xuXHRcdFx0Y2FzZSAnb2JqZWN0Jzpcblx0XHRcdFx0X2NoZWNrYm94ID0gem4uZXh0ZW5kKHt9LCBfdmFsdWUpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ251bWJlcic6XG5cdFx0XHRcdF9jaGVja2JveC53aWR0aCA9IF92YWx1ZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdGlmKF92YWx1ZSkge1xuXHRcdFx0Y29sdW1ucyA9IGNvbHVtbnMudW5zaGlmdChfY2hlY2tib3gpO1xuXHRcdH1cblx0fSxcblx0X19jb2x1bW5zTG9hZGVkOiBmdW5jdGlvbiAoY29sdW1ucyl7XG5cdFx0aWYoY29sdW1ucyAmJiB6bi5pcyhjb2x1bW5zLCAnYXJyYXknKSl7XG5cdFx0XHR2YXIgX3RlbXAgPSBudWxsLFxuXHRcdFx0XHRfcmVzdWx0ID0gbnVsbCxcblx0XHRcdFx0X2NvbHVtbkl0ZXJhdG9yID0gdGhpcy5wcm9wcy5jb2x1bW5JdGVyYXRvcixcblx0XHRcdFx0X2NvbHVtbnMgPSBjb2x1bW5zLm1hcChmdW5jdGlvbiAoY29sdW1uKXtcblx0XHRcdFx0XHRfdGVtcCA9IHpuLmRlZXBBc3NpZ24oe30sIGNvbHVtbik7XG5cdFx0XHRcdFx0X3Jlc3VsdCA9IF9jb2x1bW5JdGVyYXRvciAmJiBfY29sdW1uSXRlcmF0b3IoX3RlbXAsIHRoaXMpO1xuXHRcdFx0XHRcdGlmKF9yZXN1bHQgPT09IGZhbHNlKSByZXR1cm4gbnVsbDtcblx0XHRcdFx0XHRpZih0eXBlb2YgX3Jlc3VsdCA9PSAnb2JqZWN0JykgcmV0dXJuIF9yZXN1bHQ7XG5cblx0XHRcdFx0XHRyZXR1cm4gX3RlbXA7XG5cdFx0XHRcdH0uYmluZCh0aGlzKSk7XG5cdFx0XHR0aGlzLl9faW5pdENoZWNrYm94KF9jb2x1bW5zKTtcblx0XHRcdHRoaXMucHJvcHMub25Db2x1bW5zTG9hZGVkICYmIHRoaXMucHJvcHMub25Db2x1bW5zTG9hZGVkKGNvbHVtbnMpO1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGNvbHVtbnM6IF9jb2x1bW5zIH0pO1xuXHRcdH1cblx0fSxcblx0X19vbkNvbHVtbkRhdGFDcmVhdGVkOiBmdW5jdGlvbiAoZGF0YSwgbGlmZWN5Y2xlKXtcblx0XHR0aGlzLmNvbHVtbnMgPSBkYXRhO1xuXHRcdHRoaXMucHJvcHMub25Db2x1bW5zQ3JlYXRlZCAmJiB0aGlzLnByb3BzLm9uQ29sdW1uc0NyZWF0ZWQoZGF0YSwgdGhpcywgbGlmZWN5Y2xlKTtcblx0fSxcblx0Z2V0RGF0YTogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHRoaXMuc3RhdGUuZGF0YTtcblx0fSxcblx0cmVtb3ZlUm93RGF0YTogZnVuY3Rpb24gKGRhdGEpe1xuXHRcdGlmKGRhdGEpIHtcblx0XHRcdHRoaXMuc3RhdGUuZGF0YS5zcGxpY2UodGhpcy5zdGF0ZS5kYXRhLmluZGV4T2YoZGF0YSksIDEpO1xuXHRcdFx0dGhpcy5mb3JjZVVwZGF0ZSgpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXHR1cGRhdGVSb3dEYXRhOiBmdW5jdGlvbiAoZGF0YSl7XG5cdFx0aWYoZGF0YSkge1xuXHRcdFx0dmFyIF9pbmRleCA9IHRoaXMuc3RhdGUuZGF0YS5pbmRleE9mKGRhdGEpO1xuXHRcdFx0dGhpcy5zdGF0ZS5kYXRhW19pbmRleF0gPSBkYXRhO1xuXHRcdFx0dGhpcy5mb3JjZVVwZGF0ZSgpO1xuXHRcdH1cblx0XHRcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiA8em51aS5yZWFjdC5EYXRhTGlmZWN5Y2xlXG5cdFx0XHRcdFx0ZGF0YT17dGhpcy5wcm9wcy5jb2x1bW5zfVxuXHRcdFx0XHRcdHJlbmRlcj17dGhpcy5fX3JlbmRlcn1cblx0XHRcdFx0XHRyZXNwb25zZUhhbmRsZXI9e3RoaXMucHJvcHMucmVzcG9uc2VIYW5kbGVyfVxuXHRcdFx0XHRcdG9uTG9hZGluZz17dGhpcy5wcm9wcy5vbkNvbHVtbkxvYWRpbmd9XG5cdFx0XHRcdFx0b25GaW5pc2hlZD17dGhpcy5fX2NvbHVtbnNMb2FkZWR9XG5cdFx0XHRcdFx0b25FcnJvcj17dGhpcy5wcm9wcy5vbkNvbHVtbkxvYWRFcnJvcn1cblx0XHRcdFx0XHRvbkRhdGFDcmVhdGVkPXt0aGlzLl9fb25Db2x1bW5EYXRhQ3JlYXRlZH0gLz47XG5cdH1cbn0pOyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBUYWJsZSA9IHJlcXVpcmUoJy4vVGFibGUnKTtcbnZhciBpbnB1dCA9IHJlcXVpcmUoJ3pudWktcmVhY3QtaW5wdXQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUlRhYmxlRWRpdG9yJyxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dGFibGU6IG51bGwsXG5cdFx0XHRjb2x1bW5zOiBbXVxuXHRcdH07XG5cdH0sXG5cdF9fY2VsbENoYW5nZTogZnVuY3Rpb24gKGV2ZW50LCBhcmd2KXtcblx0XHRhcmd2LmRhdGFbYXJndi50Y2VsbC5wcm9wcy5uYW1lXSA9IGV2ZW50LnZhbHVlO1xuXHRcdGFyZ3YudHJvdy5mb3JjZVVwZGF0ZSgpO1xuXHR9LFxuXHRfX2NvbHVtbkJvZHlSZW5kZXI6IGZ1bmN0aW9uIChhcmd2KXtcblx0XHRyZXR1cm4gPGlucHV0LklucHV0IFxuXHRcdFx0a2V5PXthcmd2LnZhbHVlfSBcblx0XHRcdHZhbHVlPXthcmd2LnZhbHVlfSBcblx0XHRcdG9uQmx1cj17KGV2ZW50KT0+dGhpcy5fX2NlbGxDaGFuZ2UoZXZlbnQsIGFyZ3YpfVxuXHRcdFx0b25FbnRlcj17KGV2ZW50KT0+dGhpcy5fX2NlbGxDaGFuZ2UoZXZlbnQsIGFyZ3YpfSAvPjtcblx0fSxcblx0X19jb2x1bW5JdGVyYXRvcjogZnVuY3Rpb24gKGNvbHVtbiwgdGFibGUpe1xuXHRcdGlmKCFjb2x1bW4uYm9keSkge1xuXHRcdFx0Y29sdW1uLmJvZHkgPSB0aGlzLl9fY29sdW1uQm9keVJlbmRlcjtcblx0XHR9XG5cblx0XHRyZXR1cm4gY29sdW1uO1xuXHR9LFxuXHRzZXREYXRhOiBmdW5jdGlvbiAoZGF0YSl7XG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLm9uRGF0YUNoYW5nZSAmJiB0aGlzLnByb3BzLm9uRGF0YUNoYW5nZShkYXRhLCB0aGlzLnN0YXRlLnRhYmxlLCB0aGlzKTtcblx0XHRpZihfcmV0dXJuID09PSBmYWxzZSl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGlmKHR5cGVvZiBfcmV0dXJuID09ICdvYmplY3QnKSB7XG5cdFx0XHRkYXRhID0gX3JldHVybjtcblx0XHR9XG5cdFx0dGhpcy5zdGF0ZS50YWJsZS5zdGF0ZS5kYXRhID0gZGF0YTtcblx0XHR0aGlzLnN0YXRlLnRhYmxlLmZvcmNlVXBkYXRlKCk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblx0Z2V0RGF0YTogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHRoaXMuc3RhdGUudGFibGUuZ2V0RGF0YSgpO1xuXHR9LFxuXHRhZGRSb3c6IGZ1bmN0aW9uIChkYXRhKXtcblx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMub25EYXRhQ2hhbmdlICYmIHRoaXMucHJvcHMub25EYXRhQ2hhbmdlKFtkYXRhXSwgdGhpcy5zdGF0ZS50YWJsZSwgdGhpcyk7XG5cdFx0aWYoX3JldHVybiA9PT0gZmFsc2Upe1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRpZih0eXBlb2YgX3JldHVybiA9PSAnb2JqZWN0Jykge1xuXHRcdFx0ZGF0YSA9IF9yZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuc3RhdGUudGFibGUuc3RhdGUuZGF0YS5wdXNoKHpuLmV4dGVuZCh7fSwgZGF0YSkpO1xuXHRcdHRoaXMuc3RhdGUudGFibGUuZm9yY2VVcGRhdGUoKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxUYWJsZSB7Li4udGhpcy5wcm9wc30gcmVmPXsocmVmKSA9PiB0aGlzLnN0YXRlLnRhYmxlID0gcmVmfSBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd6ci10YWJsZS1lZGl0b3InLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IGNvbHVtbkl0ZXJhdG9yPXt0aGlzLl9fY29sdW1uSXRlcmF0b3J9IC8+XG5cdFx0KVxuXHR9XG59KTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgVGFibGUgPSByZXF1aXJlKCcuL1RhYmxlJyk7XG52YXIgcGFnZXIgPSByZXF1aXJlKCd6bnVpLXJlYWN0LXBhZ2VyJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJUYWJsZVBhZ2VyJyxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y291bnQ6IDAsXG5cdFx0XHRjdXJyZW50OiAxLFxuXHRcdFx0ZGF0YTogW10sXG5cdFx0XHR0b3RhbDogMCxcblx0XHRcdHBhZ2VJbmRleDogdGhpcy5wcm9wcy5wYWdlSW5kZXggfHwgMVxuXHRcdH07XG5cdH0sXG5cdGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpe1xuXHRcdHRoaXMucHJvcHMub25Db21wb25lbnREaWRNb3VudCAmJiB0aGlzLnByb3BzLm9uQ29tcG9uZW50RGlkTW91bnQodGhpcyk7XG5cdH0sXG5cdHNldFBhZ2VJbmRleDogZnVuY3Rpb24gKHBhZ2VJbmRleCwgY2FsbGJhY2spe1xuXHRcdGlmKHRoaXMuZGF0YSl7XG5cdFx0XHR0aGlzLnN0YXRlLnBhZ2VJbmRleCA9IHBhZ2VJbmRleDtcblx0XHRcdHRoaXMuc3RhdGUuY3VycmVudCA9IHBhZ2VJbmRleDtcblx0XHRcdHRoaXMuZm9yY2VVcGRhdGUoKTtcblx0XHRcdHRoaXMuZGF0YS5fYXJndiA9IHRoaXMuX19vbkRhdGFJbml0aWFsKHRoaXMucHJvcHMuZGF0YSk7XG5cdFx0XHR0aGlzLmRhdGEucmVmcmVzaChjYWxsYmFjayk7XG5cdFx0fVxuXHR9LFxuXHRyZWZyZXNoOiBmdW5jdGlvbiAoY2FsbGJhY2spe1xuXHRcdGlmKHRoaXMuX3RhYmxlKXtcblx0XHRcdHRoaXMuX3RhYmxlLnJlZnJlc2goY2FsbGJhY2spO1xuXHRcdH1cblx0fSxcblx0X19oYW5kbGVQYWdlQ2hhbmdlZDogZnVuY3Rpb24gKG5ld1BhZ2Upe1xuXHRcdHZhciBfcmV0dXJuID0gdGhpcy5wcm9wcy5vblBhZ2VDaGFuZ2VkICYmIHRoaXMucHJvcHMub25QYWdlQ2hhbmdlZChuZXdQYWdlLCB0aGlzKTtcblx0XHRpZihfcmV0dXJuICE9PSBmYWxzZSkge1xuXHRcdFx0dGhpcy5zZXRQYWdlSW5kZXgobmV3UGFnZSk7XG5cdFx0fVxuXHR9LFxuXHRfX3JlbmRlclBhZ2VyOiBmdW5jdGlvbiAoY29sdW1ucywgdGFibGUpe1xuXHRcdHZhciBfY29sdW1uU2l6ZSA9IGNvbHVtbnMubGVuZ3RoO1xuXHRcdGlmKCFfY29sdW1uU2l6ZSl7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0dmFyIF9zdGF0ZSA9IHRoaXMuc3RhdGUsXG5cdFx0XHRfZWxlbWVudCA9IG51bGwsXG5cdFx0XHRfcGFnZXJQcm9wcyA9IHtcblx0XHRcdFx0dG90YWw6IF9zdGF0ZS50b3RhbCxcblx0XHRcdFx0Y291bnQ6IF9zdGF0ZS5jb3VudCxcblx0XHRcdFx0Y3VycmVudDogX3N0YXRlLmN1cnJlbnQsXG5cdFx0XHRcdG9uUGFnZUNoYW5nZWQ6IHRoaXMuX19oYW5kbGVQYWdlQ2hhbmdlZFxuXHRcdFx0fSxcblx0XHRcdF9Db21wb25lbnQgPSB0aGlzLnByb3BzLnBhZ2VyIHx8IHBhZ2VyLlBhZ2VyO1xuXHRcdGlmKHpuLmlzKF9Db21wb25lbnQsICdzdHJpbmcnKSl7XG5cdFx0XHRfQ29tcG9uZW50ID0gem4ucGF0aCh3aW5kb3csIF9Db21wb25lbnQpO1xuXHRcdH1lbHNlIGlmKHpuLmlzKF9Db21wb25lbnQsICdvYmplY3QnKSAmJiBfQ29tcG9uZW50LmNvbXBvbmVudCl7XG5cdFx0XHRfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KF9Db21wb25lbnQuY29tcG9uZW50LCB6bi5leHRlbmQoe30sIF9Db21wb25lbnQsIF9wYWdlclByb3BzKSk7XG5cdFx0fVxuXG5cdFx0aWYodGhpcy5wcm9wcy5wYWdlclJlbmRlcil7XG5cdFx0XHRfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMucGFnZXJSZW5kZXIsIF9wYWdlclByb3BzKTtcblx0XHR9XG5cblx0XHRpZighX2VsZW1lbnQgJiYgX0NvbXBvbmVudCAmJiB6bi5pcyhfQ29tcG9uZW50LCAnZnVuY3Rpb24nKSl7XG5cdFx0IFx0X2VsZW1lbnQgPSA8X0NvbXBvbmVudCB7Li4uX3BhZ2VyUHJvcHN9IC8+O1xuXHRcdH1cblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8dGZvb3QgY2xhc3NOYW1lPVwidGFibGUtcGFnZXJcIj5cblx0XHRcdFx0PHRyIGNsYXNzTmFtZT1cInBhZ2VyLXJvd1wiPlxuXHRcdFx0XHRcdDx0ZCBjb2xTcGFuPXtfY29sdW1uU2l6ZX0+e19lbGVtZW50fTwvdGQ+XG5cdFx0XHRcdDwvdHI+XG5cdFx0XHQ8L3Rmb290PlxuXHRcdCk7XG5cdH0sXG5cdF9fb25EYXRhSW5pdGlhbDogZnVuY3Rpb24gKGRhdGEpe1xuXHRcdHZhciBfbWV0aG9kID0gZGF0YS5tZXRob2R8fCdwb3N0Jyxcblx0XHRcdF9wYXJhbXMgPSB7fSxcblx0XHRcdF9rZXlNYXBzID0gem4uZGVlcEFzc2lnbih7XG5cdFx0XHRcdHRvdGFsOiBcInRvdGFsXCIsXG5cdFx0XHRcdHBhZ2VJbmRleDogJ3BhZ2VJbmRleCcsXG5cdFx0XHRcdHBhZ2VTaXplOiAncGFnZVNpemUnLFxuXHRcdFx0XHRkYXRhOiAnZGF0YSdcblx0XHRcdH0sIHRoaXMucHJvcHMua2V5TWFwcyk7XG5cblx0XHRfcGFyYW1zW19rZXlNYXBzLnBhZ2VJbmRleF0gPSB0aGlzLnN0YXRlLnBhZ2VJbmRleCB8fCAxO1xuXHRcdF9wYXJhbXNbX2tleU1hcHMucGFnZVNpemVdID0gdGhpcy5wcm9wcy5wYWdlU2l6ZSB8fCAxMDtcblx0XHRpZihfbWV0aG9kID09ICdnZXQnKXtcblx0XHRcdGRhdGEgPSB6bi5kZWVwQXNzaWduKGRhdGEsIHtcblx0XHRcdFx0cGFyYW1zOiBfcGFyYW1zXG5cdFx0XHR9KTtcblx0XHR9ZWxzZXtcblx0XHRcdGRhdGEgPSB6bi5kZWVwQXNzaWduKGRhdGEsIHtcblx0XHRcdFx0ZGF0YTogX3BhcmFtc1xuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdFxuXHRcdHJldHVybiB0aGlzLnN0YXRlLmtleU1hcHMgPSBfa2V5TWFwcywgZGF0YTtcblx0fSxcblx0X19vbkRhdGFDcmVhdGVkOiBmdW5jdGlvbiAoZGF0YSwgdGFibGUpe1xuXHRcdHRoaXMuZGF0YSA9IGRhdGE7XG5cdFx0dGhpcy5wcm9wcy5vbkRhdGFDcmVhdGVkICYmIHRoaXMucHJvcHMub25EYXRhQ3JlYXRlZChkYXRhLCB0YWJsZSwgdGhpcyk7XG5cdH0sXG5cdF9fb25EYXRhTG9hZGVkOiBmdW5jdGlvbiAoZGF0YSwgdGFibGUpe1xuXHRcdGlmKHRoaXMucHJvcHMuenhueil7XG5cdFx0XHRpZih6bi5pcyhkYXRhLCAnb2JqZWN0JykgJiYgZGF0YS5jb2RlICE9IDIwMCl7XG5cdFx0XHRcdHJldHVybiBjb25zb2xlLmVycm9yKGRhdGEuZGV0YWlsKSwgZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRpZih6bi5pcyhkYXRhLCAnb2JqZWN0JykgJiYgZGF0YS5jb2RlID09IDIwMCl7XG5cdFx0XHRcdGRhdGEgPSBkYXRhLnJlc3VsdDtcblx0XHRcdH1cblx0XHRcdGlmKCF6bi5pcyhkYXRhLCAnYXJyYXknKSl7XG5cdFx0XHRcdHJldHVybiBjb25zb2xlLmVycm9yKFwiVGFibGVQYWdlciBDb21wb25lbnQgRGF0YSBUeXBlIEVycm9yLlwiKSwgZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHR2YXIgX2RhdGEgPSBkYXRhWzBdLFxuXHRcdFx0XHRfcGFnZXJDb3VudCA9IGRhdGFbMV1bMF0uY291bnQ7XG5cdFx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMub25EYXRhTG9hZGVkICYmIHRoaXMucHJvcHMub25EYXRhTG9hZGVkKF9kYXRhLCB0YWJsZSwgdGhpcyk7XG5cdFx0XHRpZihfcmV0dXJuICE9PSBmYWxzZSl7XG5cdFx0XHRcdHRhYmxlLnNldFN0YXRlKHtcblx0XHRcdFx0XHRkYXRhOiBfZGF0YVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0dG90YWw6IE1hdGguY2VpbChfcGFnZXJDb3VudC90aGlzLnByb3BzLnBhZ2VTaXplKSxcblx0XHRcdFx0XHRjb3VudDogX3BhZ2VyQ291bnQsXG5cdFx0XHRcdFx0Y3VycmVudDogdGhpcy5zdGF0ZS5jdXJyZW50LFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9ZWxzZXtcblx0XHRcdGlmKHpuLmlzKGRhdGEsICdhcnJheScpKXtcblx0XHRcdFx0cmV0dXJuIGNvbnNvbGUuZXJyb3IoJ1RoZSBkYXRhIGlzIGFycmF5LCBidXQgaXQgbmVlZCByZXR1cm4gb2JqZWN0JyksIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0dmFyIF9kYXRhID0gZGF0YS5kYXRhO1xuXHRcdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLm9uRGF0YUxvYWRlZCAmJiB0aGlzLnByb3BzLm9uRGF0YUxvYWRlZChfZGF0YSwgdGFibGUsIHRoaXMpO1xuXHRcdFx0aWYoX3JldHVybiAhPT0gZmFsc2Upe1xuXHRcdFx0XHR0YWJsZS5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0ZGF0YTogX2RhdGFbdGhpcy5zdGF0ZS5rZXlNYXBzLmRhdGFdXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHR0b3RhbDogTWF0aC5jZWlsKF9kYXRhW3RoaXMuc3RhdGUua2V5TWFwcy50b3RhbF0vdGhpcy5wcm9wcy5wYWdlU2l6ZSksXG5cdFx0XHRcdFx0Y291bnQ6IF9kYXRhW3RoaXMuc3RhdGUua2V5TWFwcy50b3RhbF0sXG5cdFx0XHRcdFx0Y3VycmVudDogX2RhdGFbdGhpcy5zdGF0ZS5rZXlNYXBzLnBhZ2VJbmRleF0sXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fSxcblx0X19vbkZpbHRlckNoYW5nZTogZnVuY3Rpb24gKGZpbHRlcnMsIGRhdGEsIHRhYmxlKXtcblx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMub25GaWx0ZXJDaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkZpbHRlckNoYW5nZShmaWx0ZXJzLCBkYXRhLCB0YWJsZSk7XG5cdFx0aWYoX3JldHVybiAhPT0gZmFsc2Upe1xuXHRcdFx0aWYoIXRoaXMuZGF0YS5fYXJndi5kYXRhKSB7XG5cdFx0XHRcdHRoaXMuZGF0YS5fYXJndi5kYXRhID0ge307XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmRhdGEuX2FyZ3YuZGF0YS5maWx0ZXJzID0gZmlsdGVycztcblx0XHRcdHRoaXMuc2V0UGFnZUluZGV4KDEpO1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8VGFibGUgey4uLnRoaXMucHJvcHN9IFxuXHRcdFx0XHRjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd6ci10YWJsZS1wYWdlcicsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gXG5cdFx0XHRcdGNoaWxkcmVuUmVuZGVyPXt0aGlzLl9fcmVuZGVyUGFnZXJ9XG5cdFx0XHRcdG9uQ29tcG9uZW50RGlkTW91bnQ9eyh0YWJsZSk9PnsgXG5cdFx0XHRcdFx0dGhpcy5fdGFibGUgPSB0YWJsZTsgXG5cdFx0XHRcdH19XG5cdFx0XHRcdG9uRmlsdGVyQ2hhbmdlPXt0aGlzLl9fb25GaWx0ZXJDaGFuZ2V9XG5cdFx0XHRcdG9uRGF0YUluaXRpYWw9e3RoaXMuX19vbkRhdGFJbml0aWFsfVxuXHRcdFx0XHRvbkRhdGFDcmVhdGVkPXt0aGlzLl9fb25EYXRhQ3JlYXRlZH1cblx0XHRcdFx0b25EYXRhTG9hZGVkPXt0aGlzLl9fb25EYXRhTG9hZGVkfSAvPlxuXHRcdCk7XG5cdH1cbn0pOyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBDaGVja2JveCA9IHJlcXVpcmUoJ3pudWktcmVhY3Qtc2VsZWN0b3InKS5DaGVja2JveDtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUlRDZWxsQ2hlY2tib3gnLFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y2hlY2tlZDogdGhpcy5wcm9wcy5jaGVja2VkIHx8IGZhbHNlXG5cdFx0fVxuXHR9LFxuXHRfX29uQ2hlY2tib3hDaGFuZ2U6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0aWYodGhpcy5wcm9wcy50aGVhZCkge1xuXHRcdFx0dGhpcy5fX29uSGVhZENoYW5nZShldmVudCk7XG5cdFx0fWVsc2UgaWYodGhpcy5wcm9wcy50Ym9keSkge1xuXHRcdFx0dGhpcy5fX29uQm9keUNoYW5nZShldmVudCk7XG5cdFx0fVxuXHR9LFxuXHRfX29uSGVhZENoYW5nZTogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHRjb25zb2xlLmxvZyhldmVudC5jaGVja2VkLCB0aGlzLnByb3BzKTtcblx0fSxcblx0X19vbkJvZHlDaGFuZ2U6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0Y29uc29sZS5sb2coZXZlbnQuY2hlY2tlZCwgdGhpcy5wcm9wcyk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ6ci10YWJsZS1jZWxsLWNoZWNrYm94XCI+PENoZWNrYm94IGNoZWNrZWQ9e3RydWV9IG9uQ2hhbmdlPXt0aGlzLl9fb25DaGVja2JveENoYW5nZX0vPjwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgQ2hlY2tib3g6IHJlcXVpcmUoJy4vQ2hlY2tib3gnKSxcbiAgICAvL0J1dHRvbnM6IHJlcXVpcmUoJy4vQnV0dG9ucycpLFxuICAgIC8vSW5wdXQ6IHJlcXVpcmUoJy4vSW5wdXQnKSxcbiAgICAvL0NhbGN1bGF0b3I6IHJlcXVpcmUoJy4vQ2FsY3VsYXRvcicpXG59OyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIHRhYmxlOiByZXF1aXJlKCcuL3RhYmxlL2luZGV4JyksXG4gICAgY2VsbDogcmVxdWlyZSgnLi9jZWxsL2luZGV4JyksXG4gICAgUG9wdXBUYWJsZTogcmVxdWlyZSgnLi9Qb3B1cFRhYmxlJyksXG4gICAgVGFibGU6IHJlcXVpcmUoJy4vVGFibGUnKSxcbiAgICBUYWJsZUVkaXRvcjogcmVxdWlyZSgnLi9UYWJsZUVkaXRvcicpLFxuICAgIFRhYmxlUGFnZXI6IHJlcXVpcmUoJy4vVGFibGVQYWdlcicpXG59OyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUlRhYmxlQ29sZ3JvdXAnLFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0dmFyIF9rZXlNYXBwaW5nID0gdGhpcy5wcm9wcy5rZXlNYXBwaW5nIHx8IHsgfTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGNvbGdyb3VwPlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0KHRoaXMucHJvcHMuY29sdW1uc3x8W10pLm1hcChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcblx0XHRcdFx0XHRcdHZhciBfd2lkdGggPSBfa2V5TWFwcGluZy53aWR0aCB8fCAnd2lkdGgnO1xuXHRcdFx0XHRcdFx0cmV0dXJuIDxjb2wga2V5PXtpbmRleH0gc3R5bGU9e3sgd2lkdGg6IGl0ZW1bX3dpZHRoXSB9fSAvPjtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHQ8L2NvbGdyb3VwPlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFRSb3cgPSByZXF1aXJlKCcuL1RSb3cnKTtcbnZhciBsb2FkZXIgPSByZXF1aXJlKCd6bnVpLXJlYWN0LWxvYWRlcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSVEJvZHknLFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCl7XG5cdFx0dmFyIF9wYWdlU2l6ZSA9IHRoaXMucHJvcHMucGFnZVNpemUgfHwgNTA7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGFjdGl2ZTogbnVsbCxcblx0XHRcdGNoZWNrZWRzOiBbXSxcblx0XHRcdGNsYXNzTmFtZTogJycsXG5cdFx0XHRwYWdlSW5kZXg6IHRoaXMucHJvcHMucGFnZUluZGV4IHx8IDEsXG5cdFx0XHRwYWdlU2l6ZTogX3BhZ2VTaXplLFxuXHRcdFx0cGFnZUNvdW50OiBNYXRoLmNlaWwodGhpcy5wcm9wcy5kYXRhLmxlbmd0aCAvIF9wYWdlU2l6ZSksXG5cdFx0XHRzdHlsZToge30sXG5cdFx0XHRsb2FkaW5nOiBmYWxzZVxuXHRcdH07XG5cdH0sXG5cdF9fZ2V0RGF0YTogZnVuY3Rpb24gKHBhZ2VJbmRleCwgcGFnZVNpemUpe1xuXHRcdHZhciBfcGFnZUluZGV4ID0gcGFnZUluZGV4IHx8IHRoaXMuc3RhdGUucGFnZUluZGV4O1xuXHRcdHZhciBfcGFnZVNpemUgPSBwYWdlU2l6ZSB8fCB0aGlzLnN0YXRlLnBhZ2VTaXplO1xuXHRcdHJldHVybiB0aGlzLnByb3BzLmRhdGEuc2xpY2UoKF9wYWdlSW5kZXgtMSkgKiBfcGFnZVNpemUsIE1hdGgubWluKF9wYWdlSW5kZXggKiBfcGFnZVNpemUsIHRoaXMucHJvcHMuZGF0YS5sZW5ndGgpKTtcblx0fSxcblx0X19yZW5kZXJMb2FkaW5nOiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX2VsZW1lbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudCh0aGlzLnByb3BzLmxvYWRpbmdSZW5kZXIsIHtcblx0XHRcdHRib2R5OiB0aGlzXG5cdFx0fSwgdGhpcy5wcm9wcy5jb250ZXh0KTtcblxuXHRcdGlmKCFfZWxlbWVudCl7XG5cdFx0IFx0X2VsZW1lbnQgPSA8bG9hZGVyLkRhdGFMb2FkZXIgbG9hZGVyPVwid2F2ZVwiIHRpdGxlPXsnTG9hZGluZy4uLid9IC8+O1xuXHRcdH1cblxuXHRcdHZhciBfbG9hZGluZyA9IHpuLmV4dGVuZCh7IGNsYXNzTmFtZTogJycsIHN0eWxlOiB7fSB9LCB0aGlzLnByb3BzLmxvYWRpbmcpO1xuXHRcdHJldHVybiA8dHIgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInRib2R5LWxvYWRpbmdcIiwgX2xvYWRpbmcuY2xhc3NOYW1lKX0gc3R5bGU9e19sb2FkaW5nLnN0eWxlfT5cblx0XHRcdDx0ZCBjb2xTcGFuPXt0aGlzLnByb3BzLmNvbHVtbnMubGVuZ3RofT57X2VsZW1lbnR9PC90ZD5cblx0XHQ8L3RyPjtcblx0fSxcblx0X19yZW5kZXJFbXB0eTogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF9lbGVtZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQodGhpcy5wcm9wcy5lbXB0eVJlbmRlciwge1xuXHRcdFx0dGJvZHk6IHRoaXNcblx0XHR9LCB0aGlzLnByb3BzLmNvbnRleHQpO1xuXG5cdFx0aWYoIV9lbGVtZW50KXtcblx0XHQgXHRfZWxlbWVudCA9IDxkaXYgY2xhc3NOYW1lPVwiZW1wdHktY29udGVudFwiPlxuXHRcdFx0XHQgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFzXCIgZGF0YS1pY29uPVwiZGVza3RvcFwiIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUtLWZhIGZhLWRlc2t0b3AgZmEtdy0xOCBcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTc2IDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTUyOCAwSDQ4QzIxLjUgMCAwIDIxLjUgMCA0OHYzMjBjMCAyNi41IDIxLjUgNDggNDggNDhoMTkybC0xNiA0OGgtNzJjLTEzLjMgMC0yNCAxMC43LTI0IDI0czEwLjcgMjQgMjQgMjRoMjcyYzEzLjMgMCAyNC0xMC43IDI0LTI0cy0xMC43LTI0LTI0LTI0aC03MmwtMTYtNDhoMTkyYzI2LjUgMCA0OC0yMS41IDQ4LTQ4VjQ4YzAtMjYuNS0yMS41LTQ4LTQ4LTQ4em0tMTYgMzUySDY0VjY0aDQ0OHYyODh6XCI+PC9wYXRoPjwvc3ZnPlxuXHRcdFx0XHQgPHNwYW4+RW1wdHk8L3NwYW4+XG5cdFx0XHQgPC9kaXY+O1xuXHRcdH1cblx0XHR2YXIgX2VtcHR5ID0gem4uZXh0ZW5kKHsgY2xhc3NOYW1lOiAnJywgc3R5bGU6IHt9IH0sIHRoaXMucHJvcHMuZW1wdHkpO1xuXHRcdHJldHVybiA8dHIgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInRib2R5LWVtcHR5XCIsIF9lbXB0eS5jbGFzc05hbWUpfSBzdHlsZT17X2VtcHR5LnN0eWxlfT5cblx0XHRcdDx0ZCBjb2xTcGFuPXt0aGlzLnByb3BzLmNvbHVtbnMubGVuZ3RofT57X2VsZW1lbnR9PC90ZD5cblx0XHQ8L3RyPjtcblx0fSxcblx0X19vblJvd0NsaWNrOiBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHR2YXIgX2RhdGEgPSBldmVudC5kYXRhO1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0YWN0aXZlOiBfZGF0YS50cm93LnByb3BzLmRhdGFcblx0XHR9KTtcblx0XHRldmVudC50Ym9keSA9IHRoaXM7XG5cdFx0dGhpcy5wcm9wcy5vblJvd0NsaWNrICYmIHRoaXMucHJvcHMub25Sb3dDbGljayhldmVudCk7XG5cdH0sXG5cdF9fb25DZWxsQ2xpY2s6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0ZXZlbnQudGJvZHkgPSB0aGlzO1xuXHRcdHRoaXMucHJvcHMub25DZWxsQ2xpY2sgJiYgdGhpcy5wcm9wcy5vbkNlbGxDbGljayhldmVudCk7XG5cdH0sXG5cdF9fcmVuZGVyUm93OiBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpe1xuXHRcdGlmKCF6bi5pcyhpdGVtLCAnb2JqZWN0JykpIHsgcmV0dXJuIG51bGw7fVxuXHRcdHZhciBfdGVtcCA9IHRoaXMucHJvcHMuZWFjaFJvd0RhdGEgJiYgdGhpcy5wcm9wcy5lYWNoUm93RGF0YShpdGVtLCBpbmRleCwgdGhpcyk7XG5cdFx0aWYoX3RlbXAgJiYgem4uaXMoX3RlbXAsICdvYmplY3QnKSl7XG5cdFx0XHRpdGVtID0gX3RlbXA7XG5cdFx0fVxuXHRcdHZhciBfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMucm93UmVuZGVyLCB7XG5cdFx0XHRkYXRhOiBpdGVtLFxuXHRcdFx0cm93SW5kZXg6IGluZGV4LFxuXHRcdFx0dGJvZHk6IHRoaXNcblx0XHR9LCB0aGlzLnByb3BzLmNvbnRleHQpO1xuXG5cdFx0aWYoX2VsZW1lbnQpe1xuXHRcdFx0cmV0dXJuIF9lbGVtZW50O1xuXHRcdH1cblx0XHR2YXIgX3Jvd0tleSA9IHRoaXMucHJvcHMucm93S2V5O1xuXHRcdHZhciBfa2V5ID0gaXRlbVtfcm93S2V5XSB8fCBpbmRleDtcblx0XHRyZXR1cm4gPFRSb3cga2V5PXtfa2V5fSBjb250ZXh0PXt0aGlzLnByb3BzLmNvbnRleHR9IHsuLi50aGlzLnByb3BzLnJvd30gXG5cdFx0XHRcdFx0Y2VsbD17dGhpcy5wcm9wcy5jZWxsfVxuXHRcdFx0XHRcdGNlbGxSZW5kZXI9e3RoaXMucHJvcHMuY2VsbFJlbmRlcn1cblx0XHRcdFx0XHRjb2x1bW5zPXt0aGlzLnByb3BzLmNvbHVtbnN9IFxuXHRcdFx0XHRcdHRib2R5PXt0aGlzfVxuXHRcdFx0XHRcdGRhdGE9e2l0ZW19IFxuXHRcdFx0XHRcdGFjdGl2ZT17dGhpcy5zdGF0ZS5hY3RpdmUgPT0gaXRlbX0gXG5cdFx0XHRcdFx0Y2hlY2tlZD17dGhpcy5zdGF0ZS5jaGVja2Vkcy5pbmRleE9mKGl0ZW0pICE9PSAtMX0gXG5cdFx0XHRcdFx0b25Sb3dDbGljaz17dGhpcy5fX29uUm93Q2xpY2t9XG5cdFx0XHRcdFx0b25DZWxsQ2xpY2s9e3RoaXMuX19vbkNlbGxDbGlja30gLz47XG5cdH0sXG5cdF9fcGFnZUNoYW5nZTogZnVuY3Rpb24gKHBhZ2VJbmRleCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRwYWdlSW5kZXg6IHBhZ2VJbmRleFxuXHRcdH0pO1xuXHR9LFxuXHRfX3BhZ2VzUmVuZGVyOiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX3BhZ2VDb3VudCA9IHRoaXMuc3RhdGUucGFnZUNvdW50LCBfcGFnZXMgPSBbXTtcblx0XHRpZihfcGFnZUNvdW50ID4gMSkge1xuXHRcdFx0Zm9yKHZhciBpID0gMTsgaSA8IF9wYWdlQ291bnQgKyAxOyBpKyspIHsgX3BhZ2VzLnB1c2goaSk7IH1cblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDx0ciBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwidGJvZHktcGFnZXNcIiwgJycpfT5cblx0XHRcdFx0XHQ8dGQgY29sU3Bhbj17dGhpcy5wcm9wcy5jb2x1bW5zLmxlbmd0aH0+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRhdGEtcGFnZVwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBhZ2VzXCI+XG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0X3BhZ2VzLm1hcCgoaSwgaW5kZXgpPT57XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiA8c3BhbiBrZXk9e2luZGV4fSBjbGFzc05hbWU9eydwYWdlICcgKyAodGhpcy5zdGF0ZS5wYWdlSW5kZXg9PWk/J2FjdGl2ZSc6JycpfSBvbkNsaWNrPXsoKT0+dGhpcy5fX3BhZ2VDaGFuZ2UoaSl9PntpfTwvc3Bhbj47XG5cdFx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInBhZ2UtY291bnRcIj7lhbEge3RoaXMucHJvcHMuZGF0YS5sZW5ndGh9IOadoTwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvdGQ+XG5cdFx0XHRcdDwvdHI+XG5cdFx0XHQpO1xuXHRcdH1cblx0fSxcblx0X19yZW5kZXJEYXRhOiBmdW5jdGlvbiAoKXtcblx0XHRpZih0aGlzLnByb3BzLmRhdGEgPT0gbnVsbCB8fCAodGhpcy5wcm9wcy5kYXRhICYmICF0aGlzLnByb3BzLmRhdGEubGVuZ3RoKSl7XG5cdFx0XHRyZXR1cm4gdGhpcy5fX3JlbmRlckVtcHR5KCk7XG5cdFx0fVxuXHRcdGlmKHRoaXMuc3RhdGUucGFnZUNvdW50ID4gMSl7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8PlxuXHRcdFx0XHRcdHt0aGlzLl9fcGFnZXNSZW5kZXIoKX1cblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLl9fZ2V0RGF0YSh0aGlzLnN0YXRlLnBhZ2VJbmRleCwgdGhpcy5zdGF0ZS5wYWdlU2l6ZSkubWFwKHRoaXMuX19yZW5kZXJSb3cpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ8Lz5cblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDw+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnByb3BzLmRhdGEubWFwKHRoaXMuX19yZW5kZXJSb3cpXG5cdFx0XHRcdH1cblx0XHRcdDwvPlxuXHRcdCk7XG5cdH0sXG5cdF9fcmVuZGVyOiBmdW5jdGlvbiAoKXtcblx0XHRpZih0aGlzLnByb3BzLmxvYWRpbmcgfHwgdGhpcy5zdGF0ZS5sb2FkaW5nKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5fX3JlbmRlckxvYWRpbmcoKTtcblx0XHR9ZWxzZXtcblx0XHRcdHJldHVybiB0aGlzLl9fcmVuZGVyRGF0YSgpO1xuXHRcdH1cblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8dGJvZHkgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXRhYmxlLXRib2R5XCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lLCB0aGlzLnN0YXRlLmNsYXNzTmFtZSl9IHN0eWxlPXt6bnVpLnJlYWN0LnN0eWxlKHRoaXMucHJvcHMuc3R5bGUsIHRoaXMuc3RhdGUuc3R5bGUpfT5cblx0XHRcdFx0eyB0aGlzLl9fcmVuZGVyKCkgfVxuXHRcdFx0PC90Ym9keT5cblx0XHQpO1xuXHR9XG59KTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUlRCb2R5RW1wdHknLFxuXHRfX3JlbmRlckVtcHR5OiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX2VsZW1lbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudCh0aGlzLnByb3BzLmVtcHR5UmVuZGVyLCB7XG5cdFx0XHR0Ym9keTogdGhpc1xuXHRcdH0sIHRoaXMucHJvcHMuY29udGV4dCk7XG5cblx0XHRpZighX2VsZW1lbnQpe1xuXHRcdCBcdF9lbGVtZW50ID0gPGRpdiBjbGFzc05hbWU9XCJlbXB0eS1jb250ZW50XCI+XG5cdFx0XHRcdCA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1wcmVmaXg9XCJmYXNcIiBkYXRhLWljb249XCJkZXNrdG9wXCIgY2xhc3NOYW1lPVwic3ZnLWlubGluZS0tZmEgZmEtZGVza3RvcCBmYS13LTE4IFwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1NzYgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNTI4IDBINDhDMjEuNSAwIDAgMjEuNSAwIDQ4djMyMGMwIDI2LjUgMjEuNSA0OCA0OCA0OGgxOTJsLTE2IDQ4aC03MmMtMTMuMyAwLTI0IDEwLjctMjQgMjRzMTAuNyAyNCAyNCAyNGgyNzJjMTMuMyAwIDI0LTEwLjcgMjQtMjRzLTEwLjctMjQtMjQtMjRoLTcybC0xNi00OGgxOTJjMjYuNSAwIDQ4LTIxLjUgNDgtNDhWNDhjMC0yNi41LTIxLjUtNDgtNDgtNDh6bS0xNiAzNTJINjRWNjRoNDQ4djI4OHpcIj48L3BhdGg+PC9zdmc+XG5cdFx0XHRcdCA8c3Bhbj5FbXB0eTwvc3Bhbj5cblx0XHRcdCA8L2Rpdj47XG5cdFx0fVxuXHRcdHZhciBfZW1wdHkgPSB6bi5leHRlbmQoeyBjbGFzc05hbWU6ICcnLCBzdHlsZToge30gfSwgdGhpcy5wcm9wcy5lbXB0eSk7XG5cdFx0cmV0dXJuIDx0ciBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwidGJvZHktZW1wdHlcIiwgX2VtcHR5LmNsYXNzTmFtZSl9IHN0eWxlPXtfZW1wdHkuc3R5bGV9PlxuXHRcdFx0PHRkIGNvbFNwYW49e3RoaXMucHJvcHMuY29sdW1ucy5sZW5ndGh9PntfZWxlbWVudH08L3RkPlxuXHRcdDwvdHI+O1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDx0Ym9keSBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItdGFibGUtdGJvZHktZW1wdHlcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBzdHlsZT17em51aS5yZWFjdC5zdHlsZSh0aGlzLnByb3BzLnN0eWxlKX0+XG5cdFx0XHRcdHsgdGhpcy5fX3JlbmRlckVtcHR5KCkgfVxuXHRcdFx0PC90Ym9keT5cblx0XHQpO1xuXHR9XG59KTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSZWFjdERPTSA9IHpudWkuUmVhY3RET00gfHwgcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJUQ2VsbCcsXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRjbGFzc05hbWU6ICcnLFxuXHRcdFx0c3R5bGU6IHt9LFxuXHRcdFx0ZGlzYWJsZWQ6IHRoaXMucHJvcHMuZGlzYWJsZWQsXG5cdFx0XHRjaGVja2VkOiB0aGlzLnByb3BzLmNoZWNrZWQsXG5cdFx0XHRhY3RpdmU6IHRoaXMucHJvcHMuYWN0aXZlXG5cdFx0fVxuXHR9LFxuXHRfX3JlbmRlckNlbGxDb250ZW50OiBmdW5jdGlvbiAoKXtcblx0XHRpZih0aGlzLnByb3BzLmNoaWxkcmVuKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbjtcblx0XHR9XG5cdFx0XG5cdFx0dmFyIF92YWx1ZSA9IG51bGw7XG5cdFx0aWYodGhpcy5wcm9wcy5kYXRhICYmIHRoaXMucHJvcHMubmFtZSkge1xuXHRcdFx0X3ZhbHVlID0gdGhpcy5wcm9wcy5kYXRhW3RoaXMucHJvcHMubmFtZV07XG5cdFx0fVxuXG5cdFx0dmFyIF9yZW5kZXIgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudCh0aGlzLnByb3BzLnJlbmRlciB8fCB0aGlzLnByb3BzLmJvZHksIHtcblx0XHRcdGNlbGxJbmRleDogdGhpcy5wcm9wcy5jZWxsSW5kZXgsIFxuXHRcdFx0Y29sdW1uOiB0aGlzLnByb3BzLmNvbHVtbixcblx0XHRcdGRhdGE6IHRoaXMucHJvcHMuZGF0YSxcblx0XHRcdHZhbHVlOiBfdmFsdWUsXG5cdFx0XHR0Y2VsbDogdGhpcyxcblx0XHRcdHRyb3c6IHRoaXMucHJvcHMudHJvdyxcblx0XHRcdHRib2R5OiB0aGlzLnByb3BzLnRib2R5LFxuXHRcdFx0dGFibGU6IHRoaXMucHJvcHMudGJvZHkucHJvcHMudGFibGVcblx0XHR9LCB0aGlzLnByb3BzLmNvbnRleHQpO1xuXHRcdFxuXHRcdGlmKF9yZW5kZXIpe1xuXHRcdFx0cmV0dXJuIF9yZW5kZXI7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY2VsbC1sYWJlbFwiIHRpdGxlPXtfdmFsdWV9PntfdmFsdWV9PC9kaXY+O1xuXHR9LFxuXHRfX2NlbGxDbGljazogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHR2YXIgX3RoaXMgPSB0aGlzO1xuXHRcdGV2ZW50LmRhdGEgPSB7XG5cdFx0XHRmaW5kVERET006IGZ1bmN0aW9uICgpe1xuXHRcdFx0XHRyZXR1cm4gUmVhY3RET00uZmluZERPTU5vZGUoX3RoaXMpO1xuXHRcdFx0fSxcblx0XHRcdHRjZWxsOiB0aGlzXG5cdFx0fTtcblx0XHR0aGlzLnByb3BzLm9uQ2xpY2sgJiYgdGhpcy5wcm9wcy5vbkNsaWNrKGV2ZW50KTtcblx0XHR0aGlzLnByb3BzLm9uQ2VsbENsaWNrICYmIHRoaXMucHJvcHMub25DZWxsQ2xpY2soZXZlbnQpO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDx0ZCBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItdGFibGUtdGNlbGxcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUsIHRoaXMuc3RhdGUuY2xhc3NOYW1lKX0gc3R5bGU9e3pudWkucmVhY3Quc3R5bGUodGhpcy5wcm9wcy5zdHlsZSwgdGhpcy5zdGF0ZS5zdHlsZSl9XHRcblx0XHRcdFx0ZGF0YS1kaXNhYmxlZD17dGhpcy5zdGF0ZS5kaXNhYmxlZH1cblx0XHRcdFx0ZGF0YS1jaGVja2VkPXt0aGlzLnN0YXRlLmNoZWNrZWR9XG5cdFx0XHRcdGRhdGEtYWN0aXZlPXt0aGlzLnN0YXRlLmFjdGl2ZX1cblx0XHRcdFx0b25DbGljaz17dGhpcy5fX2NlbGxDbGlja30gPlxuXHRcdFx0XHR7dGhpcy5fX3JlbmRlckNlbGxDb250ZW50KCl9XG5cdFx0XHQ8L3RkPlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIGZpbHRlciA9IHJlcXVpcmUoJ3pudWktcmVhY3QtZmlsdGVyJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTogJ1pSRmlsdGVyJyxcblx0Z2V0SW5pdGlhbFN0YXRlOmZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNsYXNzTmFtZTogJycsXG5cdFx0XHRzdHlsZToge30sXG5cdFx0XHRkYXRhOiB7fVxuXHRcdH1cblx0fSxcblx0X19vbkZpbHRlckNoYW5nZTogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHRpZihldmVudC5uYW1lKSB7XG5cdFx0XHRpZihldmVudC52YWx1ZSkge1xuXHRcdFx0XHR0aGlzLnN0YXRlLmRhdGFbZXZlbnQubmFtZV0gPSB7XG5cdFx0XHRcdFx0dmFsdWU6IGV2ZW50LnZhbHVlLFxuXHRcdFx0XHRcdG9wdDogZXZlbnQub3B0XG5cdFx0XHRcdH07XG5cdFx0XHR9ZWxzZSBpZihldmVudC52YWx1ZSA9PT0gbnVsbCB8fCBldmVudC52YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRoaXMuc3RhdGUuZGF0YVtldmVudC5uYW1lXSA9IG51bGw7XG5cdFx0XHRcdGRlbGV0ZSB0aGlzLnN0YXRlLmRhdGFbZXZlbnQubmFtZV07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHRoaXMucHJvcHMub25GaWx0ZXIgJiYgdGhpcy5wcm9wcy5vbkZpbHRlcih0aGlzLnN0YXRlLmRhdGEpO1xuXHR9LFxuXHRfX29uRmlsdGVyQ2FuY2VsOiBmdW5jdGlvbiAobmFtZSl7XG5cdFx0aWYobmFtZSAmJiB0aGlzLnN0YXRlLmRhdGEpe1xuXHRcdFx0dGhpcy5zdGF0ZS5kYXRhW25hbWVdID0gbnVsbDtcblx0XHRcdGRlbGV0ZSB0aGlzLnN0YXRlLmRhdGFbbmFtZV07XG5cdFx0fVxuXHR9LFxuXHRfX3JlbmRlckNlbGw6IGZ1bmN0aW9uIChjb2x1bW4sIGluZGV4KXtcblx0XHRpZighem4uaXMoY29sdW1uLCAnb2JqZWN0JykpIHsgcmV0dXJuIG51bGw7IH1cblx0XHR2YXIgX2VsZW1lbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudCh0aGlzLnByb3BzLmNlbGxSZW5kZXIsIHtcblx0XHRcdGNvbHVtbjogY29sdW1uLFxuXHRcdFx0Y2VsbEluZGV4OiBpbmRleCwgXG5cdFx0XHR0ZmlsdGVyOiB0aGlzXG5cdFx0fSk7XG5cdFx0aWYoX2VsZW1lbnQpe1xuXHRcdFx0cmV0dXJuIF9lbGVtZW50O1xuXHRcdH1cblx0XHRcblx0XHR2YXIgX2NvbnRlbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudChjb2x1bW4ucmVuZGVyLCB7XG5cdFx0XHRjb2x1bW46IGNvbHVtbixcblx0XHRcdGNlbGxJbmRleDogaW5kZXgsIFxuXHRcdFx0dGZpbHRlcjogdGhpc1xuXHRcdH0pO1xuXG5cdFx0aWYoIV9jb250ZW50ICYmIGNvbHVtbi5maWx0ZXIpIHtcblx0XHRcdHZhciBfZmlsdGVyID0gY29sdW1uLmZpbHRlcjtcblx0XHRcdGlmKHpuLmlzKF9maWx0ZXIsICdmdW5jdGlvbicpKSB7XG5cdFx0XHRcdGlmKF9maWx0ZXIucHJvdG90eXBlICYmIF9maWx0ZXIucHJvdG90eXBlLnJlbmRlcikge1xuXHRcdFx0XHRcdF9jb250ZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQoX2ZpbHRlciwge1xuXHRcdFx0XHRcdFx0Y29sdW1uOiBjb2x1bW4sXG5cdFx0XHRcdFx0XHR0ZmlsdGVyOiB0aGlzXG5cdFx0XHRcdFx0fSk7XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIF9maWx0ZXIgPSBfZmlsdGVyLmNhbGwobnVsbCwgY29sdW1uLCB0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG5cdFx0XHR9XG5cblx0XHRcdGlmKHpuLmlzKF9maWx0ZXIsICdvYmplY3QnKSkge1xuXHRcdFx0XHRfY29udGVudCA9IDxmaWx0ZXIuRmlsdGVyRmllbGQga2V5PXt6bi51dWlkKCl9IHsuLi5fZmlsdGVyfSBuYW1lPXtjb2x1bW4ubmFtZX0gb25GaWx0ZXJDaGFuZ2U9e3RoaXMuX19vbkZpbHRlckNoYW5nZX0gb25DYW5jZWw9e3RoaXMuX19vbkZpbHRlckNhbmNlbH0gLz47XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dmFyIF9jZWxsID0gem4uZXh0ZW5kKHsgc3R5bGU6IHt9LCBjbGFzc05hbWU6ICcnIH0sIHRoaXMucHJvcHMuY2VsbCk7XG5cdFx0cmV0dXJuIDx0ZCBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd0ZmlsdGVyLWNlbGwnLCBfY2VsbC5jbGFzc05hbWUpfSBzdHlsZT17X2NlbGwuc3R5bGV9PlxuXHRcdFx0eyBfY29udGVudCB9XG5cdFx0PC90ZD47XG5cdH0sXG5cdF9fcmVuZGVyUm93OiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX2VsZW1lbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudCh0aGlzLnByb3BzLnJvd1JlbmRlciwge1xuXHRcdFx0dGZpbHRlcjogdGhpc1xuXHRcdH0pO1xuXHRcdGlmKF9lbGVtZW50KXtcblx0XHRcdHJldHVybiBfZWxlbWVudDtcblx0XHR9XG5cdFx0dmFyIF9yb3cgPSB6bi5leHRlbmQoeyBjbGFzc05hbWU6ICcnLCBzdHlsZToge30gfSwgdGhpcy5wcm9wcy5yb3cpO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8dHIgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInRmaWx0ZXItcm93IHpyLXRhYmxlLXRyb3dcIiwgX3Jvdy5jbGFzc05hbWUpfSBzdHlsZT17X3Jvdy5zdHlsZX0+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHQodGhpcy5wcm9wcy5jb2x1bW5zfHxbXSkubWFwKHRoaXMuX19yZW5kZXJDZWxsKVxuXHRcdFx0XHR9XG5cdFx0XHQ8L3RyPlxuXHRcdCk7XG5cdH0sXG5cdHJlbmRlcjpmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8dGhlYWQgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXRhYmxlLXRmaWx0ZXJcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUsIHRoaXMuc3RhdGUuY2xhc3NOYW1lKX0gc3R5bGU9e3pudWkucmVhY3Quc3R5bGUodGhpcy5wcm9wcy5zdHlsZSwgdGhpcy5zdGF0ZS5zdHlsZSl9PlxuXHRcdFx0XHR7dGhpcy5fX3JlbmRlclJvdygpfVxuXHRcdFx0PC90aGVhZD5cblx0XHQpO1xuXHR9XG59KTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJURm9vdCcsXG5cdF9fcmVuZGVyQ2hpbGRyZW46IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfY29sdW1ucyA9IHRoaXMucHJvcHMuY29sdW1ucyB8fCBbXTtcblx0XHRpZih0aGlzLnByb3BzLmNoaWxkcmVuKXtcblx0XHRcdHJldHVybiA8dHIgY2xhc3NOYW1lPVwidGZvb3Qtcm93XCI+XG5cdFx0XHRcdDx0ZCBjb2xTcGFuPXtfY29sdW1ucy5sZW5ndGh9Pnt0aGlzLnByb3BzLmNoaWxkcmVufTwvdGQ+XG5cdFx0XHQ8L3RyPjtcblx0XHR9ZWxzZXtcblx0XHRcdHJldHVybiB0aGlzLl9fcmVuZGVyUm93KCk7XG5cdFx0fVxuXHR9LFxuXHRfX3JlbmRlckNlbGw6IGZ1bmN0aW9uIChjb2x1bW4sIGluZGV4KXtcblx0XHRpZighem4uaXMoY29sdW1uLCAnb2JqZWN0JykpIHsgcmV0dXJuIG51bGw7IH1cblx0XHR2YXIgX2VsZW1lbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudCh0aGlzLnByb3BzLmNlbGxSZW5kZXIsIHtcblx0XHRcdGNvbHVtbjogY29sdW1uLFxuXHRcdFx0Y2VsbEluZGV4OiBpbmRleCwgXG5cdFx0XHR0Zm9vdDogdGhpc1xuXHRcdH0pO1xuXHRcdGlmKF9lbGVtZW50KXtcblx0XHRcdHJldHVybiBfZWxlbWVudDtcblx0XHR9XG5cblx0XHR2YXIgX2NvbnRlbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudChjb2x1bW4ucmVuZGVyIHx8IGNvbHVtbi5mb290LCB7XG5cdFx0XHRjb2x1bW46IGNvbHVtbixcblx0XHRcdGNlbGxJbmRleDogaW5kZXgsIFxuXHRcdFx0dGZvb3Q6IHRoaXNcblx0XHR9KTtcblxuXHRcdGlmKHRoaXMucHJvcHMucmVuZGVyKSB7XG5cdFx0XHRfY29udGVudCA9IHRoaXMucHJvcHMucmVuZGVyKGNvbHVtbiwgaW5kZXgsIHRoaXMpO1xuXHRcdH1cblxuXHRcdHZhciBfY2VsbCA9IHpuLmV4dGVuZCh7IHN0eWxlOiB7fSwgY2xhc3NOYW1lOiAnJyB9LCB0aGlzLnByb3BzLmNlbGwpO1xuXHRcdHJldHVybiA8dGgga2V5PXtpbmRleH0gY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgndGZvb3QtY2VsbCcsIF9jZWxsLmNsYXNzTmFtZSl9IHN0eWxlPXtfY2VsbC5zdHlsZX0+XG5cdFx0XHR7IF9jb250ZW50IH1cblx0XHQ8L3RoPjtcblx0fSxcblx0X19yZW5kZXJSb3c6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMucm93UmVuZGVyLCB7XG5cdFx0XHR0aGVhZDogdGhpc1xuXHRcdH0pO1xuXHRcdGlmKF9lbGVtZW50KXtcblx0XHRcdHJldHVybiBfZWxlbWVudDtcblx0XHR9XG5cdFx0dmFyIF9yb3cgPSB6bi5leHRlbmQoeyBjbGFzc05hbWU6ICcnLCBzdHlsZToge30gfSwgdGhpcy5wcm9wcy5yb3cpO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8dHIgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInRmb290LXJvd1wiLCBfcm93LmNsYXNzTmFtZSl9IHN0eWxlPXtfcm93LnN0eWxlfT5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdCh0aGlzLnByb3BzLmNvbHVtbnN8fFtdKS5tYXAodGhpcy5fX3JlbmRlckNlbGwpXG5cdFx0XHRcdH1cblx0XHRcdDwvdHI+XG5cdFx0KTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8dGZvb3QgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXRhYmxlLXRmb290XCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9PlxuXHRcdFx0XHR7dGhpcy5fX3JlbmRlckNoaWxkcmVuKCl9XG5cdFx0XHQ8L3Rmb290PlxuXHRcdCk7XG5cdH1cbn0pOyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBUSGVhZFNvcnQgPSByZXF1aXJlKCcuL1RIZWFkU29ydCcpO1xudmFyIHBvcHVwID0gcmVxdWlyZSgnem51aS1yZWFjdC1wb3B1cCcpO1xudmFyIHpyanNvbiA9IHJlcXVpcmUoJ3pudWktcmVhY3QtanNvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidUSGVhZCcsXG5cdGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHt9O1xuXHR9LFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRjbGFzc05hbWU6ICcnLFxuXHRcdFx0c3R5bGU6IHt9LFxuXHRcdFx0c29ydDoge30sXG5cdFx0XHRmaWx0ZXI6IHt9XG5cdFx0fTtcblx0fSxcblx0X19vbkNvbHVtblNvcnQ6IGZ1bmN0aW9uIChzb3J0LCBjb2x1bW4pe1xuXHRcdGlmKGNvbHVtbi5uYW1lKSB7XG5cdFx0XHR0aGlzLnN0YXRlLnNvcnRbY29sdW1uLm5hbWVdID0gKHNvcnQ9PSdmYVNvcnRBbHBoYURvd24nID8gJ2Rlc2MnIDogJ2FzYycpO1xuXHRcdH1cblx0XHR0aGlzLnByb3BzLm9uU29ydCAmJiB0aGlzLnByb3BzLm9uU29ydCh0aGlzLnN0YXRlLnNvcnQpO1xuXHR9LFxuXHRfX29uQ29sdW1uRWRpdG9yQ2hhbmdlOiBmdW5jdGlvbiAoZGF0YSwgY2hpbGQsIHJvb3QsIGluZGV4KXtcbiAgICAgICAgdmFyIF9yb290ID0gcm9vdCB8fCBjaGlsZDtcblx0XHR0aGlzLnByb3BzLm9uQ29sdW1uQ2hhbmdlICYmIHRoaXMucHJvcHMub25Db2x1bW5DaGFuZ2UoX3Jvb3Quc3RhdGUudmFsdWUsIGluZGV4KTtcbiAgICB9LFxuXHRfX2ljb25DbGlja1JlbmRlcjogZnVuY3Rpb24gKGNvbHVtbiwgaW5kZXgpe1xuXHRcdHJldHVybiA8ZGl2IHN0eWxlPXt7cGFkZGluZzogMTAsIG1heEhlaWdodDogNTAwLCB3aWR0aDogNDAwLCBvdmVyZmxvdzogJ2F1dG8nfX0+XG5cdFx0XHQ8enJqc29uLmVkaXRvci5vYmplY3QgZm9sZD17ZmFsc2V9XG5cdFx0XHRcdGRpc3BsYXlDbG9zdXJlPXt0cnVlfSBcblx0XHRcdFx0ZGlzcGxheUl0ZW1Db3VudD17dHJ1ZX0gXG5cdFx0XHRcdGxhYmVsPXsnQ29sdW1uJ30gXG5cdFx0XHRcdHZhbHVlPXtjb2x1bW59IFxuXHRcdFx0XHRvbkNoYW5nZT17KGRhdGEsIGNoaWxkLCByb290KT0+dGhpcy5fX29uQ29sdW1uRWRpdG9yQ2hhbmdlKGRhdGEsIGNoaWxkLCByb290LCBpbmRleCl9IC8+XG5cdFx0PC9kaXY+O1xuXHR9LFxuXHRfX3JlbmRlckNlbGw6IGZ1bmN0aW9uIChjb2x1bW4sIGluZGV4KXtcblx0XHRpZighem4uaXMoY29sdW1uLCAnb2JqZWN0JykpIHsgcmV0dXJuIG51bGw7IH1cblx0XHR2YXIgX2VsZW1lbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudCh0aGlzLnByb3BzLmNlbGxSZW5kZXIsIHtcblx0XHRcdGNvbHVtbjogY29sdW1uLFxuXHRcdFx0Y2VsbEluZGV4OiBpbmRleCwgXG5cdFx0XHR0aGVhZDogdGhpc1xuXHRcdH0pO1xuXHRcdGlmKF9lbGVtZW50KXtcblx0XHRcdHJldHVybiBfZWxlbWVudDtcblx0XHR9XG5cblx0XHR2YXIgX2NvbnRlbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudChjb2x1bW4ucmVuZGVyIHx8IGNvbHVtbi5oZWFkLCB7XG5cdFx0XHRcdGNvbHVtbjogY29sdW1uLFxuXHRcdFx0XHRjZWxsSW5kZXg6IGluZGV4LCBcblx0XHRcdFx0dGhlYWQ6IHRoaXMsXG5cdFx0XHRcdHRhYmxlOiB0aGlzLnByb3BzLnRhYmxlXG5cdFx0XHR9KSxcblx0XHRcdF9tYXBwaW5nID0gdGhpcy5wcm9wcy5rZXlNYXBwaW5nIHx8IHt9LFxuXHRcdFx0X2xhYmVsS2V5ID0gX21hcHBpbmdbJ2xhYmVsJ10gfHwgJ2xhYmVsJyxcblx0XHRcdF9sYWJlbCA9IGNvbHVtbltfbGFiZWxLZXldO1xuXHRcdGlmKCFfY29udGVudCkge1xuXHRcdFx0X2NvbnRlbnQgPSA8ZGl2IGNsYXNzTmFtZT1cImNlbGwtbGFiZWxcIiB0aXRsZT17X2xhYmVsfT5cblx0XHRcdFx0eyAhIWNvbHVtbi5yZXF1aXJlZCAmJiA8c3BhbiBkYXRhLXpyLXBvcHVwLXRvb2x0aXA9XCLlv4XopoHlrZfmrrVcIiBjbGFzc05hbWU9XCJyZXF1aXJlZFwiPio8L3NwYW4+fVxuXHRcdFx0XHR7IF9sYWJlbCB9XG5cdFx0XHRcdHsgXG5cdFx0XHRcdFx0ISFjb2x1bW4uZWRpdGFibGUgJiYgPHBvcHVwLkRyb3Bkb3duIFxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY2VsbC1lZGl0b3JcIiBcblx0XHRcdFx0XHRcdHBvcG92ZXI9e3tcblx0XHRcdFx0XHRcdFx0cmVuZGVyOiB0aGlzLl9faWNvbkNsaWNrUmVuZGVyKGNvbHVtbiwgaW5kZXgpLFxuXHRcdFx0XHRcdFx0XHRjbG9zZWFibGU6IHRydWVcblx0XHRcdFx0XHRcdH19ID5cblx0XHRcdFx0XHRcdDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhc1wiIGRhdGEtaWNvbj1cImVkaXRcIiBjbGFzc05hbWU9XCJpY29uIHN2Zy1pbmxpbmUtLWZhIGZhLWVkaXQgZmEtdy0xOCBcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTc2IDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTQwMi42IDgzLjJsOTAuMiA5MC4yYzMuOCAzLjggMy44IDEwIDAgMTMuOEwyNzQuNCA0MDUuNmwtOTIuOCAxMC4zYy0xMi40IDEuNC0yMi45LTkuMS0yMS41LTIxLjVsMTAuMy05Mi44TDM4OC44IDgzLjJjMy44LTMuOCAxMC0zLjggMTMuOCAwem0xNjItMjIuOWwtNDguOC00OC44Yy0xNS4yLTE1LjItMzkuOS0xNS4yLTU1LjIgMGwtMzUuNCAzNS40Yy0zLjggMy44LTMuOCAxMCAwIDEzLjhsOTAuMiA5MC4yYzMuOCAzLjggMTAgMy44IDEzLjggMGwzNS40LTM1LjRjMTUuMi0xNS4zIDE1LjItNDAgMC01NS4yek0zODQgMzQ2LjJWNDQ4SDY0VjEyOGgyMjkuOGMzLjIgMCA2LjItMS4zIDguNS0zLjVsNDAtNDBjNy42LTcuNiAyLjItMjAuNS04LjUtMjAuNUg0OEMyMS41IDY0IDAgODUuNSAwIDExMnYzNTJjMCAyNi41IDIxLjUgNDggNDggNDhoMzUyYzI2LjUgMCA0OC0yMS41IDQ4LTQ4VjMwNi4yYzAtMTAuNy0xMi45LTE2LTIwLjUtOC41bC00MCA0MGMtMi4yIDIuMy0zLjUgNS4zLTMuNSA4LjV6XCI+PC9wYXRoPjwvc3ZnPlxuXHRcdFx0XHRcdDwvcG9wdXAuRHJvcGRvd24+XG5cdFx0XHRcdH1cblx0XHRcdDwvZGl2Pjtcblx0XHR9XG5cblx0XHR2YXIgX2NlbGwgPSB6bi5leHRlbmQoeyBzdHlsZToge30sIGNsYXNzTmFtZTogJycgfSwgdGhpcy5wcm9wcy5jZWxsLCBjb2x1bW4pO1xuXHRcdHJldHVybiA8dGgga2V5PXtpbmRleH0gY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgndGhlYWQtY2VsbCcsIF9jZWxsLmNsYXNzTmFtZSl9IHN0eWxlPXtfY2VsbC5zdHlsZX0+XG5cdFx0XHR7IF9jb250ZW50IH1cblx0XHRcdHsgISFjb2x1bW4uc29ydCAmJiA8VEhlYWRTb3J0IGNsYXNzTmFtZT1cImNlbGwtc29ydFwiIG9uU29ydD17KHNvcnQpPT50aGlzLl9fb25Db2x1bW5Tb3J0KHNvcnQsIGNvbHVtbil9IC8+fVxuXHRcdDwvdGg+O1xuXHR9LFxuXHRfX3JlbmRlclJvdzogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF9lbGVtZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQodGhpcy5wcm9wcy5yb3dSZW5kZXIsIHtcblx0XHRcdHRoZWFkOiB0aGlzXG5cdFx0fSk7XG5cdFx0aWYoX2VsZW1lbnQpe1xuXHRcdFx0cmV0dXJuIF9lbGVtZW50O1xuXHRcdH1cblx0XHR2YXIgX3JvdyA9IHpuLmV4dGVuZCh7IGNsYXNzTmFtZTogJycsIHN0eWxlOiB7fSB9LCB0aGlzLnByb3BzLnJvdyk7XG5cdFx0cmV0dXJuIChcblx0XHRcdDx0ciBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwidGhlYWQtcm93XCIsIF9yb3cuY2xhc3NOYW1lKX0gc3R5bGU9e19yb3cuc3R5bGV9PlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0KHRoaXMucHJvcHMuY29sdW1uc3x8W10pLm1hcCh0aGlzLl9fcmVuZGVyQ2VsbClcblx0XHRcdFx0fVxuXHRcdFx0PC90cj5cblx0XHQpO1xuXHR9LFxuXHRyZW5kZXI6ZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHRoZWFkIGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci10YWJsZS10aGVhZFwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSwgdGhpcy5zdGF0ZS5jbGFzc05hbWUpfSBzdHlsZT17em51aS5yZWFjdC5zdHlsZSh0aGlzLnByb3BzLnN0eWxlLCB0aGlzLnN0YXRlLnN0eWxlKX0+XG5cdFx0XHRcdHt0aGlzLl9fcmVuZGVyUm93KCl9XG5cdFx0XHQ8L3RoZWFkPlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSVEhlYWRTb3J0Jyxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c29ydDogJ2ZhU29ydCcsXG5cdFx0fVxuXHR9LFxuXHRfX3JlbmRlckljb246IGZ1bmN0aW9uICgpe1xuXHRcdHN3aXRjaCh0aGlzLnN0YXRlLnNvcnQpe1xuXHRcdFx0Y2FzZSBcImZhU29ydFwiOlxuXHRcdFx0XHRyZXR1cm4gPHN2ZyBvbkNsaWNrPXt0aGlzLl9faWNvbkNsaWNrfSBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFzXCIgZGF0YS1pY29uPVwic29ydFwiIGNsYXNzTmFtZT1cImljb24gc3ZnLWlubGluZS0tZmEgZmEtc29ydCBmYS13LTEwIFwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNDEgMjg4aDIzOGMyMS40IDAgMzIuMSAyNS45IDE3IDQxTDE3NyA0NDhjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwTDI0IDMyOWMtMTUuMS0xNS4xLTQuNC00MSAxNy00MXptMjU1LTEwNUwxNzcgNjRjLTkuNC05LjQtMjQuNi05LjQtMzMuOSAwTDI0IDE4M2MtMTUuMSAxNS4xLTQuNCA0MSAxNyA0MWgyMzhjMjEuNCAwIDMyLjEtMjUuOSAxNy00MXpcIj48L3BhdGg+PC9zdmc+O1xuXHRcdFx0Y2FzZSBcImZhU29ydEFscGhhRG93blwiOlxuXHRcdFx0XHRyZXR1cm4gPHN2ZyBvbkNsaWNrPXt0aGlzLl9faWNvbkNsaWNrfSBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFzXCIgZGF0YS1pY29uPVwic29ydC1hbHBoYS1kb3duXCIgY2xhc3NOYW1lPVwiaWNvbiBzdmctaW5saW5lLS1mYSBmYS1zb3J0LWFscGhhLWRvd24gZmEtdy0xNCBcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNDQ4IDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTE3NiAzNTJoLTQ4VjQ4YTE2IDE2IDAgMCAwLTE2LTE2SDgwYTE2IDE2IDAgMCAwLTE2IDE2djMwNEgxNmMtMTQuMTkgMC0yMS4zNiAxNy4yNC0xMS4yOSAyNy4zMWw4MCA5NmExNiAxNiAwIDAgMCAyMi42MiAwbDgwLTk2QzE5Ny4zNSAzNjkuMjYgMTkwLjIyIDM1MiAxNzYgMzUyem0yNDAtNjRIMjg4YTE2IDE2IDAgMCAwLTE2IDE2djMyYTE2IDE2IDAgMCAwIDE2IDE2aDU2bC02MS4yNiA3MC40NUEzMiAzMiAwIDAgMCAyNzIgNDQ2LjM3VjQ2NGExNiAxNiAwIDAgMCAxNiAxNmgxMjhhMTYgMTYgMCAwIDAgMTYtMTZ2LTMyYTE2IDE2IDAgMCAwLTE2LTE2aC01Nmw2MS4yNi03MC40NUEzMiAzMiAwIDAgMCA0MzIgMzIxLjYzVjMwNGExNiAxNiAwIDAgMC0xNi0xNnptMzEuMDYtODUuMzhsLTU5LjI3LTE2MEExNiAxNiAwIDAgMCAzNzIuNzIgMzJoLTQxLjQ0YTE2IDE2IDAgMCAwLTE1LjA3IDEwLjYybC01OS4yNyAxNjBBMTYgMTYgMCAwIDAgMjcyIDIyNGgyNC44M2ExNiAxNiAwIDAgMCAxNS4yMy0xMS4wOGw0LjQyLTEyLjkyaDcxbDQuNDEgMTIuOTJBMTYgMTYgMCAwIDAgNDA3LjE2IDIyNEg0MzJhMTYgMTYgMCAwIDAgMTUuMDYtMjEuMzh6TTMzNS42MSAxNDRMMzUyIDk2bDE2LjM5IDQ4elwiPjwvcGF0aD48L3N2Zz47XG5cdFx0XHRjYXNlIFwiZmFTb3J0QWxwaGFVcFwiOlxuXHRcdFx0XHRyZXR1cm4gPHN2ZyBvbkNsaWNrPXt0aGlzLl9faWNvbkNsaWNrfSBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFzXCIgZGF0YS1pY29uPVwic29ydC1hbHBoYS11cFwiIGNsYXNzTmFtZT1cImljb24gc3ZnLWlubGluZS0tZmEgZmEtc29ydC1hbHBoYS11cCBmYS13LTE0IFwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA0NDggNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMTYgMTYwaDQ4djMwNGExNiAxNiAwIDAgMCAxNiAxNmgzMmExNiAxNiAwIDAgMCAxNi0xNlYxNjBoNDhjMTQuMjEgMCAyMS4zOC0xNy4yNCAxMS4zMS0yNy4zMWwtODAtOTZhMTYgMTYgMCAwIDAtMjIuNjIgMGwtODAgOTZDLTUuMzUgMTQyLjc0IDEuNzggMTYwIDE2IDE2MHptNDAwIDEyOEgyODhhMTYgMTYgMCAwIDAtMTYgMTZ2MzJhMTYgMTYgMCAwIDAgMTYgMTZoNTZsLTYxLjI2IDcwLjQ1QTMyIDMyIDAgMCAwIDI3MiA0NDYuMzdWNDY0YTE2IDE2IDAgMCAwIDE2IDE2aDEyOGExNiAxNiAwIDAgMCAxNi0xNnYtMzJhMTYgMTYgMCAwIDAtMTYtMTZoLTU2bDYxLjI2LTcwLjQ1QTMyIDMyIDAgMCAwIDQzMiAzMjEuNjNWMzA0YTE2IDE2IDAgMCAwLTE2LTE2em0zMS4wNi04NS4zOGwtNTkuMjctMTYwQTE2IDE2IDAgMCAwIDM3Mi43MiAzMmgtNDEuNDRhMTYgMTYgMCAwIDAtMTUuMDcgMTAuNjJsLTU5LjI3IDE2MEExNiAxNiAwIDAgMCAyNzIgMjI0aDI0LjgzYTE2IDE2IDAgMCAwIDE1LjIzLTExLjA4bDQuNDItMTIuOTJoNzFsNC40MSAxMi45MkExNiAxNiAwIDAgMCA0MDcuMTYgMjI0SDQzMmExNiAxNiAwIDAgMCAxNS4wNi0yMS4zOHpNMzM1LjYxIDE0NEwzNTIgOTZsMTYuMzkgNDh6XCI+PC9wYXRoPjwvc3ZnPjtcblx0XHR9XHRcblx0fSxcblx0cmVuZGVyOmZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItdGhlYWQtc29ydCcsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9PlxuXHRcdFx0XHR7dGhpcy5fX3JlbmRlckljb24oKX1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFJlYWN0RE9NID0gem51aS5SZWFjdERPTSB8fCByZXF1aXJlKCdyZWFjdC1kb20nKTtcbnZhciBUQ2VsbCA9IHJlcXVpcmUoJy4vVENlbGwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUlRSb3cnLFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNsYXNzTmFtZTogJycsXG5cdFx0XHRzdHlsZToge31cblx0XHR9XG5cdH0sXG5cdF9fZ2V0VGFyZ2V0VEQ6IGZ1bmN0aW9uICh0YXJnZXQpIHtcblx0XHRpZih0YXJnZXQgJiYgdGFyZ2V0LnRhZ05hbWUhPT0nVEQnKXtcblx0XHRcdHJldHVybiB0aGlzLl9fZ2V0VGFyZ2V0VEQodGFyZ2V0LnBhcmVudE5vZGUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGFyZ2V0O1xuXHRcdH1cblx0fSxcblx0X19vblJvd0NsaWNrOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdHZhciBfdGhpcyA9IHRoaXM7XG5cdFx0dmFyIF90ZCA9IHRoaXMuX19nZXRUYXJnZXRURChldmVudC50YXJnZXQpO1xuXHRcdGV2ZW50LmRhdGEgPSB7XG5cdFx0XHRmaW5kVFJET006IGZ1bmN0aW9uICgpe1xuXHRcdFx0XHRyZXR1cm4gUmVhY3RET00uZmluZERPTU5vZGUoX3RoaXMpO1xuXHRcdFx0fSxcblx0XHRcdHRkOiBfdGQsXG5cdFx0XHR0cm93OiB0aGlzXG5cdFx0fTtcblx0XHR0aGlzLnByb3BzLm9uQ2xpY2sgJiYgdGhpcy5wcm9wcy5vbkNsaWNrKGV2ZW50KTtcblx0XHR0aGlzLnByb3BzLm9uUm93Q2xpY2sgJiYgdGhpcy5wcm9wcy5vblJvd0NsaWNrKGV2ZW50KTtcblx0fSxcblx0X19jZWxsUmVuZGVyOiBmdW5jdGlvbiAoY29sdW1uLCBpbmRleCl7XG5cdFx0aWYoIXpuLmlzKGNvbHVtbiwgJ29iamVjdCcpKSB7IHJldHVybiBudWxsO31cblx0XHR2YXIgX3Byb3BzID0gem4uZXh0ZW5kKHtcblx0XHRcdGNvbHVtbjogY29sdW1uLFxuXHRcdFx0dHJvdzogdGhpcyxcblx0XHRcdGNlbGxJbmRleDogaW5kZXgsXG5cdFx0XHRjb250ZXh0OiB0aGlzLnByb3BzLmNvbnRleHQsXG5cdFx0XHRkYXRhOiB0aGlzLnByb3BzLmRhdGEsXG5cdFx0XHR0Ym9keTogdGhpcy5wcm9wcy50Ym9keVxuXHRcdH0sIHRoaXMucHJvcHMuY2VsbCwgY29sdW1uKTtcblx0XHR2YXIgX2VsZW1lbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudCh0aGlzLnByb3BzLmNlbGxSZW5kZXIsIF9wcm9wcywgdGhpcy5wcm9wcy5jb250ZXh0KTtcblxuXHRcdGlmKF9lbGVtZW50KXtcblx0XHRcdHJldHVybiBfZWxlbWVudDtcblx0XHR9XG5cblx0XHRyZXR1cm4gPFRDZWxsIGtleT17aW5kZXh9IHsuLi5fcHJvcHN9IG9uQ2VsbENsaWNrPXt0aGlzLnByb3BzLm9uQ2VsbENsaWNrfSBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd0cm93LWNlbGwnLCBfcHJvcHMuY2xhc3NOYW1lKX0gLz47XG5cdH0sXG5cdHJlbmRlcjpmdW5jdGlvbigpe1xuXHRcdHZhciBfY2xhc3NOYW1lID0gdGhpcy5wcm9wcy5jbGFzc05hbWUsIF9zdHlsZSA9IHRoaXMucHJvcHMuc3R5bGU7XG5cdFx0aWYodHlwZW9mIF9jbGFzc05hbWUgPT0gJ2Z1bmN0aW9uJyl7XG5cdFx0XHRfY2xhc3NOYW1lID0gX2NsYXNzTmFtZSh0aGlzLnByb3BzLmRhdGEsIHRoaXMpO1xuXHRcdH1cblx0XHRpZih0eXBlb2YgX3N0eWxlID09ICdmdW5jdGlvbicpe1xuXHRcdFx0X3N0eWxlID0gX3N0eWxlKHRoaXMucHJvcHMuZGF0YSwgdGhpcyk7XG5cdFx0fVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8dHIgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItdGFibGUtdHJvdycsIF9jbGFzc05hbWUsIHRoaXMuc3RhdGUuY2xhc3NOYW1lKX0gXG5cdFx0XHRcdHN0eWxlPXt6bnVpLnJlYWN0LnN0eWxlKF9zdHlsZSwgdGhpcy5zdGF0ZS5zdHlsZSl9XG5cdFx0XHRcdGRhdGEtYWN0aXZlPXt0aGlzLnByb3BzLmFjdGl2ZX0gXG5cdFx0XHRcdGRhdGEtY2hlY2tlZD17dGhpcy5wcm9wcy5jaGVja2VkfSBcblx0XHRcdFx0b25DbGljaz17dGhpcy5fX29uUm93Q2xpY2t9PlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0KHRoaXMucHJvcHMuY29sdW1uc3x8W10pLm1hcCh0aGlzLl9fY2VsbFJlbmRlcilcblx0XHRcdFx0fVxuXHRcdFx0PC90cj5cblx0XHQpO1xuXHR9XG59KTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIENvbGdyb3VwOiByZXF1aXJlKCcuL0NvbGdyb3VwJyksXG4gICAgVEZpbHRlcjogcmVxdWlyZSgnLi9URmlsdGVyJyksXG4gICAgVEJvZHk6IHJlcXVpcmUoJy4vVEJvZHknKSxcbiAgICBUQm9keUVtcHR5OiByZXF1aXJlKCcuL1RCb2R5RW1wdHknKSxcbiAgICBUQ2VsbDogcmVxdWlyZSgnLi9UQ2VsbCcpLFxuICAgIFRGb290OiByZXF1aXJlKCcuL1RGb290JyksXG4gICAgVEhlYWQ6IHJlcXVpcmUoJy4vVEhlYWQnKSxcbiAgICBUUm93OiByZXF1aXJlKCcuL1RSb3cnKVxufTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcIlJlYWN0XCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiUmVhY3RET01cIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJmaWx0ZXJcIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJpbnB1dFwiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcImpzb25cIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJsb2FkZXJcIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJwYWdlclwiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcInBvcHVwXCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wic2VsZWN0b3JcIl07IH0oKSk7Il0sInNvdXJjZVJvb3QiOiIifQ==