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

/***/ "./Table.js":
/*!******************!*\
  !*** ./Table.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = znui.React || __webpack_require__(/*! react */ "react");

var table = __webpack_require__(/*! ./table/index */ "./table/index.js");

var selector = __webpack_require__(/*! znui-react-selector */ "znui-react-selector");

module.exports = React.createClass({
  displayName: 'ZRTable',
  getInitialState: function getInitialState() {
    return {
      data: [],
      columns: [],
      checkeds: []
    };
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
  __onFilter: function __onFilter(filter) {
    this.props.onFilterChange && this.props.onFilterChange(filter, this.state.data, this);
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
    var _return = this.props.onDataLoaded && this.props.onDataLoaded(data, this);

    if (_return !== false) {
      this.setState({
        data: data
      });
    }
  },
  __onDataCreated: function __onDataCreated(data, lifycycle) {
    this.data = data;
    this.props.onDataCreated && this.props.onDataCreated(data, this, lifycycle);
  },
  refresh: function refresh() {
    if (this.data) {
      this.state.checkeds = [];
      this.data.refresh();
    }

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
      keyMapping: this.props.keyMapping,
      columns: columns
    }, this.props.colgroup)), !!this.props.thead && /*#__PURE__*/React.createElement(table.THead, _extends({
      onSort: this.__onSort,
      onColumnChange: this.__onTHeadColumnChange,
      columns: columns,
      keyMapping: this.props.keyMapping
    }, this.props.thead, {
      table: this
    })), !!this.props.tfilter && /*#__PURE__*/React.createElement(table.TFilter, _extends({
      onFilter: this.__onFilter,
      columns: columns
    }, this.props.tfilter, {
      table: this
    })), (this.props.tbody || this.props.data) && this.__renderTBody(columns), !!this.props.tfoot && /*#__PURE__*/React.createElement(table.TFoot, _extends({
      columns: columns
    }, this.props.tfoot, {
      table: this
    })), this.props.childrenRender && this.props.childrenRender(columns, this), this.props.children);
  },
  __initCheckbox: function __initCheckbox(columns) {
    var _checkbox = {
      width: 60,
      head: function (argv) {
        var _this3 = this;

        var _table = argv.thead.props.table;
        if (!_table) return;
        return /*#__PURE__*/React.createElement(selector.Checkbox, {
          style: {
            justifyContent: 'center'
          },
          key: this.state.checkeds.length,
          text: '(' + _table.state.checkeds.length + ')',
          checked: !!_table.state.data.length && _table.state.checkeds.length === _table.state.data.length,
          onChange: function onChange(event) {
            if (event.checked) {
              _this3.state.checkeds = _this3.state.data.slice(0);
            } else {
              _this3.state.checkeds = [];
            }

            _this3.forceUpdate();

            _this3.props.onCheckboxChange && _this3.props.onCheckboxChange(_this3.state.checkeds, _this3);
          }
        });
      }.bind(this),
      body: function (argv) {
        var _this4 = this;

        var _data = argv.data;
        return /*#__PURE__*/React.createElement(selector.UncontrolCheckbox, {
          style: {
            justifyContent: 'center'
          },
          checked: this.state.checkeds.indexOf(_data) !== -1,
          onClick: function onClick(event, checkbox) {
            event.stopPropagation();

            if (checkbox.props.checked) {
              _this4.state.checkeds.splice(_this4.state.checkeds.indexOf(_data), 1);
            } else {
              _this4.state.checkeds.push(_data);
            }

            _this4.forceUpdate();

            _this4.props.onCheckboxChange && _this4.props.onCheckboxChange(_this4.state.checkeds, _this4);
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

var React = znui.React || __webpack_require__(/*! react */ "react");

var Table = __webpack_require__(/*! ./Table */ "./Table.js");

var input = __webpack_require__(/*! znui-react-input */ "znui-react-input");

module.exports = React.createClass({
  displayName: 'ZRTableEditor',
  getInitialState: function getInitialState() {
    return {
      columns: []
    };
  },
  __cellChange: function __cellChange(event, argv) {
    //console.log(event);
    //console.log(argv);
    argv.data[argv.tcell.props.name] = event.value;
    argv.trow.forceUpdate();
  },
  __columnBodyRender: function __columnBodyRender(argv) {
    var _this = this;

    return /*#__PURE__*/React.createElement(input.Input, {
      key: argv.value,
      value: argv.value,
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
  render: function render() {
    return /*#__PURE__*/React.createElement(Table, _extends({}, this.props, {
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
  __handlePageChanged: function __handlePageChanged(newPage) {
    var _return = this.props.onPageChanged && this.props.onPageChanged(newPage, this);

    if (_return !== false) {
      this.setPageIndex(newPage);
    }
  },
  setPageIndex: function setPageIndex(pageIndex) {
    if (this.data) {
      this.state.pageIndex = pageIndex;
      this.state.current = pageIndex;
      this.forceUpdate();
      this.data._argv = this.__onDataInitial(this.props.data);
      this.data.refresh();
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

var loader = __webpack_require__(/*! znui-react-loader */ "znui-react-input");

module.exports = React.createClass({
  displayName: 'ZRTBody',
  getInitialState: function getInitialState() {
    return {
      active: null,
      checkeds: [],
      className: '',
      style: {},
      loading: false
    };
  },
  __renderLoading: function __renderLoading() {
    var _element = znui.react.createReactElement(this.props.loadingRender, {
      tbody: this
    });

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
    });

    if (!_element) {
      _element = /*#__PURE__*/React.createElement("div", {
        className: "empty-content"
      }, "No Data.");
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

    var _temp = this.props.eachRowData && this.props.eachRowData(item, index);

    if (_temp && zn.is(_temp, 'object')) {
      item = _temp;
    }

    var _element = znui.react.createReactElement(this.props.rowRender, {
      data: item,
      rowIndex: index,
      tbody: this
    });

    if (_element) {
      return _element;
    }

    return /*#__PURE__*/React.createElement(TRow, _extends({
      key: index
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
  __renderData: function __renderData() {
    if (this.props.data == null || this.props.data && !this.props.data.length) {
      return this.__renderEmpty();
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
      tbody: this.props.tbody
    });

    if (_render) {
      return _render;
    }

    return _value;
  },
  __cellClick: function __cellClick(event) {
    event.data = {
      td: ReactDOM.findDOMNode(this),
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
    if (event.name && event.value) {
      this.state.data[event.name] = {
        value: event.value,
        opt: event.opt
      };
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
      _content = /*#__PURE__*/React.createElement(filter.FilterField, _extends({}, column.filter, {
        name: column.name,
        onFilterChange: this.__onFilterChange,
        onCancel: this.__onFilterCancel
      }));
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
      thead: this
    }),
        _mapping = this.props.keyMapping || {},
        _labelKey = _mapping['label'] || 'label',
        _label = column[_labelKey];

    if (!_content) {
      _content = /*#__PURE__*/React.createElement("div", {
        className: "cell-label"
      }, _label, !!column.editable && /*#__PURE__*/React.createElement(popup.Dropdown, {
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
    }, this.props.cell);

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
    if (target.tagName !== 'TD') {
      return this.__getTargetTD(target.parentNode);
    } else {
      return target;
    }
  },
  __onRowClick: function __onRowClick(event) {
    var _td = this.__getTargetTD(event.target),
        _tr = ReactDOM.findDOMNode(this);

    event.data = {
      td: _td,
      tr: _tr,
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
      data: this.props.data,
      tbody: this.props.tbody
    }, this.props.cell, column);

    var _element = znui.react.createReactElement(this.props.cellRender, _props);

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
    return /*#__PURE__*/React.createElement("tr", {
      className: znui.react.classname('zr-table-trow', this.props.className, this.state.className),
      style: znui.react.style(this.props.style, this.state.style),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vVGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vVGFibGVFZGl0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vVGFibGVQYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9jZWxsL0NoZWNrYm94LmpzIiwid2VicGFjazovLy8uL2NlbGwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vdGFibGUvQ29sZ3JvdXAuanMiLCJ3ZWJwYWNrOi8vLy4vdGFibGUvVEJvZHkuanMiLCJ3ZWJwYWNrOi8vLy4vdGFibGUvVENlbGwuanMiLCJ3ZWJwYWNrOi8vLy4vdGFibGUvVEZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi90YWJsZS9URm9vdC5qcyIsIndlYnBhY2s6Ly8vLi90YWJsZS9USGVhZC5qcyIsIndlYnBhY2s6Ly8vLi90YWJsZS9USGVhZFNvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vdGFibGUvVFJvdy5qcyIsIndlYnBhY2s6Ly8vLi90YWJsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlsdGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW5wdXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqc29uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGFnZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwb3B1cFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNlbGVjdG9yXCIiXSwibmFtZXMiOlsiUmVhY3QiLCJ6bnVpIiwicmVxdWlyZSIsInRhYmxlIiwic2VsZWN0b3IiLCJtb2R1bGUiLCJleHBvcnRzIiwiY3JlYXRlQ2xhc3MiLCJkaXNwbGF5TmFtZSIsImdldEluaXRpYWxTdGF0ZSIsImRhdGEiLCJjb2x1bW5zIiwiY2hlY2tlZHMiLCJfX3NvcnRGdW5jdGlvbiIsIm5leHQiLCJwcmV2Iiwia2V5IiwiX3NvcnQiLCJwcm9wcyIsInNvcnRGdW5jdGlvbiIsIl9fb25Tb3J0Iiwic29ydCIsInN0YXRlIiwiZm9yY2VVcGRhdGUiLCJfX29uRmlsdGVyIiwiZmlsdGVyIiwib25GaWx0ZXJDaGFuZ2UiLCJfX3Rib2R5RGF0YVJlbmRlciIsInRib2R5IiwiX190Ym9keUxvYWRpbmdSZW5kZXIiLCJfX29uVEhlYWRDb2x1bW5DaGFuZ2UiLCJpbmRleCIsIl9fdGJvZHlEYXRhTG9hZGVkIiwiX3JldHVybiIsIm9uRGF0YUxvYWRlZCIsInNldFN0YXRlIiwiX19vbkRhdGFDcmVhdGVkIiwibGlmeWN5Y2xlIiwib25EYXRhQ3JlYXRlZCIsInJlZnJlc2giLCJyZWZyZXNoSGVhZGVycyIsIl9fcmVuZGVyVEJvZHkiLCJfZGF0YSIsIl9yZXN1bHQiLCJvbkRhdGFJbml0aWFsIiwicmVzcG9uc2VIYW5kbGVyIiwiX19yZW5kZXIiLCJyZWFjdCIsImNsYXNzbmFtZSIsImNsYXNzTmFtZSIsInN0eWxlIiwid2lkdGgiLCJmaXhlZCIsImNlbGxQYWRkaW5nIiwiY2VsbFNwYWNpbmciLCJhdHRycyIsImNhcHRpb24iLCJyZW5kZXIiLCJjb2xncm91cCIsImtleU1hcHBpbmciLCJ0aGVhZCIsInRmaWx0ZXIiLCJ0Zm9vdCIsImNoaWxkcmVuUmVuZGVyIiwiY2hpbGRyZW4iLCJfX2luaXRDaGVja2JveCIsIl9jaGVja2JveCIsImhlYWQiLCJhcmd2IiwiX3RhYmxlIiwianVzdGlmeUNvbnRlbnQiLCJsZW5ndGgiLCJldmVudCIsImNoZWNrZWQiLCJzbGljZSIsIm9uQ2hlY2tib3hDaGFuZ2UiLCJiaW5kIiwiYm9keSIsImluZGV4T2YiLCJjaGVja2JveCIsInN0b3BQcm9wYWdhdGlvbiIsInNwbGljZSIsInB1c2giLCJfdmFsdWUiLCJ6biIsInR5cGUiLCJleHRlbmQiLCJ1bnNoaWZ0IiwiX19jb2x1bW5zTG9hZGVkIiwiaXMiLCJfdGVtcCIsIl9jb2x1bW5JdGVyYXRvciIsImNvbHVtbkl0ZXJhdG9yIiwiX2NvbHVtbnMiLCJtYXAiLCJjb2x1bW4iLCJkZWVwQXNzaWduIiwib25Db2x1bW5zTG9hZGVkIiwiX19vbkNvbHVtbkRhdGFDcmVhdGVkIiwibGlmZWN5Y2xlIiwib25Db2x1bW5zQ3JlYXRlZCIsIm9uQ29sdW1uTG9hZGluZyIsIm9uQ29sdW1uTG9hZEVycm9yIiwiVGFibGUiLCJpbnB1dCIsIl9fY2VsbENoYW5nZSIsInRjZWxsIiwibmFtZSIsInZhbHVlIiwidHJvdyIsIl9fY29sdW1uQm9keVJlbmRlciIsIl9fY29sdW1uSXRlcmF0b3IiLCJwYWdlciIsImNvdW50IiwiY3VycmVudCIsInRvdGFsIiwicGFnZUluZGV4IiwiX19oYW5kbGVQYWdlQ2hhbmdlZCIsIm5ld1BhZ2UiLCJvblBhZ2VDaGFuZ2VkIiwic2V0UGFnZUluZGV4IiwiX2FyZ3YiLCJfX29uRGF0YUluaXRpYWwiLCJfX3JlbmRlclBhZ2VyIiwiX2NvbHVtblNpemUiLCJfc3RhdGUiLCJfZWxlbWVudCIsIl9wYWdlclByb3BzIiwiX0NvbXBvbmVudCIsIlBhZ2VyIiwicGF0aCIsIndpbmRvdyIsImNvbXBvbmVudCIsImNyZWF0ZVJlYWN0RWxlbWVudCIsInBhZ2VyUmVuZGVyIiwiX21ldGhvZCIsIm1ldGhvZCIsIl9wYXJhbXMiLCJfa2V5TWFwcyIsInBhZ2VTaXplIiwia2V5TWFwcyIsInBhcmFtcyIsIl9fb25EYXRhTG9hZGVkIiwienhueiIsImNvZGUiLCJjb25zb2xlIiwiZXJyb3IiLCJkZXRhaWwiLCJfcGFnZXJDb3VudCIsIk1hdGgiLCJjZWlsIiwiQ2hlY2tib3giLCJfX29uQ2hlY2tib3hDaGFuZ2UiLCJfX29uSGVhZENoYW5nZSIsIl9fb25Cb2R5Q2hhbmdlIiwibG9nIiwiY2VsbCIsIlRhYmxlRWRpdG9yIiwiVGFibGVQYWdlciIsIl9rZXlNYXBwaW5nIiwiaXRlbSIsIl93aWR0aCIsIlRSb3ciLCJsb2FkZXIiLCJhY3RpdmUiLCJsb2FkaW5nIiwiX19yZW5kZXJMb2FkaW5nIiwibG9hZGluZ1JlbmRlciIsIl9sb2FkaW5nIiwiX19yZW5kZXJFbXB0eSIsImVtcHR5UmVuZGVyIiwiX2VtcHR5IiwiZW1wdHkiLCJfX29uUm93Q2xpY2siLCJvblJvd0NsaWNrIiwiX19vbkNlbGxDbGljayIsIm9uQ2VsbENsaWNrIiwiX19yZW5kZXJSb3ciLCJlYWNoUm93RGF0YSIsInJvd1JlbmRlciIsInJvd0luZGV4Iiwicm93IiwiY2VsbFJlbmRlciIsIl9fcmVuZGVyRGF0YSIsIlJlYWN0RE9NIiwiZGlzYWJsZWQiLCJfX3JlbmRlckNlbGxDb250ZW50IiwiX3JlbmRlciIsImNlbGxJbmRleCIsIl9fY2VsbENsaWNrIiwidGQiLCJmaW5kRE9NTm9kZSIsIm9uQ2xpY2siLCJfX29uRmlsdGVyQ2hhbmdlIiwib3B0Iiwib25GaWx0ZXIiLCJfX29uRmlsdGVyQ2FuY2VsIiwiX19yZW5kZXJDZWxsIiwiX2NvbnRlbnQiLCJfY2VsbCIsIl9yb3ciLCJfX3JlbmRlckNoaWxkcmVuIiwiZm9vdCIsIlRIZWFkU29ydCIsInBvcHVwIiwienJqc29uIiwiZ2V0RGVmYXVsdFByb3BzIiwiX19vbkNvbHVtblNvcnQiLCJvblNvcnQiLCJfX29uQ29sdW1uRWRpdG9yQ2hhbmdlIiwiY2hpbGQiLCJyb290IiwiX3Jvb3QiLCJvbkNvbHVtbkNoYW5nZSIsIl9faWNvbkNsaWNrUmVuZGVyIiwicGFkZGluZyIsIm1heEhlaWdodCIsIm92ZXJmbG93IiwiX21hcHBpbmciLCJfbGFiZWxLZXkiLCJfbGFiZWwiLCJlZGl0YWJsZSIsImNsb3NlYWJsZSIsIl9fcmVuZGVySWNvbiIsIl9faWNvbkNsaWNrIiwiVENlbGwiLCJfX2dldFRhcmdldFREIiwidGFyZ2V0IiwidGFnTmFtZSIsInBhcmVudE5vZGUiLCJfdGQiLCJfdHIiLCJ0ciIsIl9fY2VsbFJlbmRlciIsIl9wcm9wcyIsIkNvbGdyb3VwIiwiVEZpbHRlciIsIlRCb2R5IiwiVEZvb3QiLCJUSGVhZCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FB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b0IsRUFBckIsRUFBeUJtRixHQUF6QixDQUE2QixLQUFLMkksWUFBbEMsQ0FMRixDQUREO0FBVUE7QUF0RGlDLENBQWxCLENBQWpCLEM7Ozs7Ozs7Ozs7O0FDSkFwTyxNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDYnFPLFVBQVEsRUFBRXpPLG1CQUFPLENBQUMsdUNBQUQsQ0FESjtBQUViME8sU0FBTyxFQUFFMU8sbUJBQU8sQ0FBQyxxQ0FBRCxDQUZIO0FBR2IyTyxPQUFLLEVBQUUzTyxtQkFBTyxDQUFDLGlDQUFELENBSEQ7QUFJYitOLE9BQUssRUFBRS9OLG1CQUFPLENBQUMsaUNBQUQsQ0FKRDtBQUtiNE8sT0FBSyxFQUFFNU8sbUJBQU8sQ0FBQyxpQ0FBRCxDQUxEO0FBTWI2TyxPQUFLLEVBQUU3TyxtQkFBTyxDQUFDLGlDQUFELENBTkQ7QUFPYmdLLE1BQUksRUFBRWhLLG1CQUFPLENBQUMsK0JBQUQ7QUFQQSxDQUFqQixDOzs7Ozs7Ozs7OztBQ0FBLGFBQWEsZ0NBQWdDLEVBQUUsSTs7Ozs7Ozs7Ozs7QUNBL0MsYUFBYSxtQ0FBbUMsRUFBRSxJOzs7Ozs7Ozs7OztBQ0FsRCxhQUFhLGlDQUFpQyxFQUFFLEk7Ozs7Ozs7Ozs7O0FDQWhELGFBQWEsZ0NBQWdDLEVBQUUsSTs7Ozs7Ozs7Ozs7QUNBL0MsYUFBYSwrQkFBK0IsRUFBRSxJOzs7Ozs7Ozs7OztBQ0E5QyxhQUFhLGdDQUFnQyxFQUFFLEk7Ozs7Ozs7Ozs7O0FDQS9DLGFBQWEsZ0NBQWdDLEVBQUUsSTs7Ozs7Ozs7Ozs7QUNBL0MsYUFBYSxtQ0FBbUMsRUFBRSxJIiwiZmlsZSI6Ii4vZGlzdC9kZXZlbG9wbWVudC9pbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIHRhYmxlID0gcmVxdWlyZSgnLi90YWJsZS9pbmRleCcpO1xudmFyIHNlbGVjdG9yID0gcmVxdWlyZSgnem51aS1yZWFjdC1zZWxlY3RvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSVGFibGUnLFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRkYXRhOiBbXSwgXG5cdFx0XHRjb2x1bW5zOiBbXSxcblx0XHRcdGNoZWNrZWRzOiBbXVxuXHRcdH07XG5cdH0sXG5cdF9fc29ydEZ1bmN0aW9uOiBmdW5jdGlvbiAobmV4dCwgcHJldiwga2V5LCBfc29ydCl7XG5cdFx0aWYodGhpcy5wcm9wcy5zb3J0RnVuY3Rpb24pIHtcblx0XHRcdHJldHVybiB0aGlzLnByb3BzLnNvcnRGdW5jdGlvbihuZXh0LCBwcmV2LCBrZXksIF9zb3J0KTtcblx0XHR9XG5cdFx0aWYoX3NvcnQ9PSdkZXNjJyl7XG5cdFx0XHRpZihuZXh0W2tleV0gPiBwcmV2W2tleV0pe1xuXHRcdFx0XHRyZXR1cm4gMTtcblx0XHRcdH1lbHNlIGlmKG5leHRba2V5XSA9PSBwcmV2W2tleV0pe1xuXHRcdFx0XHRyZXR1cm4gMDtcblx0XHRcdH1lbHNlIGlmKG5leHRba2V5XSA8IHByZXZba2V5XSl7XG5cdFx0XHRcdHJldHVybiAtMTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoX3NvcnQ9PSdhc2MnKXtcblx0XHRcdGlmKG5leHRba2V5XSA8IHByZXZba2V5XSl7XG5cdFx0XHRcdHJldHVybiAxO1xuXHRcdFx0fWVsc2UgaWYobmV4dFtrZXldID09IHByZXZba2V5XSl7XG5cdFx0XHRcdHJldHVybiAwO1xuXHRcdFx0fWVsc2UgaWYobmV4dFtrZXldID4gcHJldltrZXldKXtcblx0XHRcdFx0cmV0dXJuIC0xO1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0X19vblNvcnQ6IGZ1bmN0aW9uIChzb3J0KXtcblx0XHR2YXIgX3NvcnQgPSBudWxsO1xuXHRcdGZvcih2YXIga2V5IGluIHNvcnQpe1xuXHRcdFx0X3NvcnQgPSBzb3J0W2tleV1cblx0XHRcdHRoaXMuc3RhdGUuZGF0YSA9IHRoaXMuc3RhdGUuZGF0YS5zb3J0KChuZXh0LCBwcmV2KSA9PiB0aGlzLl9fc29ydEZ1bmN0aW9uKG5leHQsIHByZXYsIGtleSwgX3NvcnQpKTtcblx0XHR9XG5cblx0XHR0aGlzLmZvcmNlVXBkYXRlKCk7XG5cdH0sXG5cdF9fb25GaWx0ZXI6IGZ1bmN0aW9uIChmaWx0ZXIpe1xuXHRcdHRoaXMucHJvcHMub25GaWx0ZXJDaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkZpbHRlckNoYW5nZShmaWx0ZXIsIHRoaXMuc3RhdGUuZGF0YSwgdGhpcyk7XG5cdH0sXG5cdF9fdGJvZHlEYXRhUmVuZGVyOiBmdW5jdGlvbiAoY29sdW1ucyl7XG5cdFx0cmV0dXJuIDx0YWJsZS5UQm9keSB7Li4udGhpcy5wcm9wcy50Ym9keX0gY29sdW1ucz17Y29sdW1uc30gZGF0YT17dGhpcy5zdGF0ZS5kYXRhfSB0YWJsZT17dGhpc30gLz47XG5cdH0sXG5cdF9fdGJvZHlMb2FkaW5nUmVuZGVyOiBmdW5jdGlvbiAoY29sdW1ucyl7XG5cdFx0cmV0dXJuIDx0YWJsZS5UQm9keSB7Li4udGhpcy5wcm9wcy50Ym9keX0gY29sdW1ucz17Y29sdW1uc30gbG9hZGluZz17dHJ1ZX0gdGFibGU9e3RoaXN9IC8+O1xuXHR9LFxuXHRfX29uVEhlYWRDb2x1bW5DaGFuZ2U6IGZ1bmN0aW9uIChkYXRhLCBpbmRleCl7XG5cdFx0aWYodGhpcy5zdGF0ZS5jb2x1bW5zKXtcblx0XHRcdHRoaXMuc3RhdGUuY29sdW1uc1tpbmRleF0gPSBkYXRhO1xuXHRcdFx0dGhpcy5mb3JjZVVwZGF0ZSgpO1xuXHRcdH1cblx0fSxcblx0X190Ym9keURhdGFMb2FkZWQ6IGZ1bmN0aW9uIChkYXRhKSB7XG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLm9uRGF0YUxvYWRlZCAmJiB0aGlzLnByb3BzLm9uRGF0YUxvYWRlZChkYXRhLCB0aGlzKTtcblx0XHRpZihfcmV0dXJuICE9PSBmYWxzZSl7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgZGF0YTogZGF0YSB9KTtcblx0XHR9XG5cdH0sXG5cdF9fb25EYXRhQ3JlYXRlZDogZnVuY3Rpb24gKGRhdGEsIGxpZnljeWNsZSl7XG5cdFx0dGhpcy5kYXRhID0gZGF0YTtcblx0XHR0aGlzLnByb3BzLm9uRGF0YUNyZWF0ZWQgJiYgdGhpcy5wcm9wcy5vbkRhdGFDcmVhdGVkKGRhdGEsIHRoaXMsIGxpZnljeWNsZSk7XG5cdH0sXG5cdHJlZnJlc2g6IGZ1bmN0aW9uICgpe1xuXHRcdGlmKHRoaXMuZGF0YSl7XG5cdFx0XHR0aGlzLnN0YXRlLmNoZWNrZWRzID0gW107XG5cdFx0XHR0aGlzLmRhdGEucmVmcmVzaCgpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXHRyZWZyZXNoSGVhZGVyczogZnVuY3Rpb24gKCl7XG5cdFx0aWYodGhpcy5jb2x1bW5zKXtcblx0XHRcdHRoaXMuY29sdW1ucy5yZWZyZXNoKCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cdF9fcmVuZGVyVEJvZHk6IGZ1bmN0aW9uIChjb2x1bW5zKXtcblx0XHR2YXIgX2RhdGEgPSB0aGlzLnByb3BzLmRhdGEgfHwgdGhpcy5wcm9wcy50Ym9keS5kYXRhO1xuXHRcdHZhciBfcmVzdWx0ID0gdGhpcy5wcm9wcy5vbkRhdGFJbml0aWFsICYmIHRoaXMucHJvcHMub25EYXRhSW5pdGlhbChfZGF0YSwgdGhpcyk7XG5cdFx0aWYoX3Jlc3VsdCl7XG5cdFx0XHRfZGF0YSA9IF9yZXN1bHQ7XG5cdFx0fVxuXHRcdHJldHVybiA8em51aS5yZWFjdC5EYXRhTGlmZWN5Y2xlIGRhdGE9e19kYXRhfSBcblx0XHRcdFx0XHRkYXRhUmVuZGVyPXsoKT0+dGhpcy5fX3Rib2R5RGF0YVJlbmRlcihjb2x1bW5zKX0gXG5cdFx0XHRcdFx0bG9hZGluZ1JlbmRlcj17KCk9PnRoaXMuX190Ym9keUxvYWRpbmdSZW5kZXIoY29sdW1ucyl9XG5cdFx0XHRcdFx0cmVzcG9uc2VIYW5kbGVyPXt0aGlzLnByb3BzLnJlc3BvbnNlSGFuZGxlcn1cblx0XHRcdFx0XHRvbkRhdGFDcmVhdGVkPXt0aGlzLl9fb25EYXRhQ3JlYXRlZH1cblx0XHRcdFx0XHRvbkZpbmlzaGVkPXt0aGlzLl9fdGJvZHlEYXRhTG9hZGVkfSAvPjtcblx0fSxcblx0X19yZW5kZXI6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBjb2x1bW5zID0gdGhpcy5zdGF0ZS5jb2x1bW5zO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8dGFibGUgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXRhYmxlXCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gXG5cdFx0XHRcdHN0eWxlPXt6bnVpLnJlYWN0LnN0eWxlKHRoaXMucHJvcHMuc3R5bGUsIHsgd2lkdGg6IHRoaXMucHJvcHMud2lkdGggfSl9IFxuXHRcdFx0XHRkYXRhLWZpeGVkPXt0aGlzLnByb3BzLmZpeGVkfSBcdFxuXHRcdFx0XHRjZWxsUGFkZGluZz17dGhpcy5wcm9wcy5jZWxsUGFkZGluZyB8fCAwfSBcblx0XHRcdFx0Y2VsbFNwYWNpbmc9e3RoaXMucHJvcHMuY2VsbFNwYWNpbmcgfHwgMH0gey4uLnRoaXMucHJvcHMuYXR0cnN9PlxuXHRcdFx0XHR7ICEhdGhpcy5wcm9wcy5jYXB0aW9uICYmIDxjYXB0aW9uIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jYXB0aW9uLmNsYXNzTmFtZX0gc3R5bGU9e3RoaXMucHJvcHMuY2FwdGlvbi5zdHlsZX0+e3RoaXMucHJvcHMuY2FwdGlvbi5yZW5kZXJ9PC9jYXB0aW9uPiB9XG5cdFx0XHRcdHsgISF0aGlzLnByb3BzLmNvbGdyb3VwICYmIDx0YWJsZS5Db2xncm91cCBrZXlNYXBwaW5nPXt0aGlzLnByb3BzLmtleU1hcHBpbmd9IGNvbHVtbnM9e2NvbHVtbnN9IHsuLi50aGlzLnByb3BzLmNvbGdyb3VwfSAvPiB9XG5cdFx0XHRcdHsgISF0aGlzLnByb3BzLnRoZWFkICYmIDx0YWJsZS5USGVhZCBvblNvcnQ9e3RoaXMuX19vblNvcnR9IG9uQ29sdW1uQ2hhbmdlPXt0aGlzLl9fb25USGVhZENvbHVtbkNoYW5nZX0gY29sdW1ucz17Y29sdW1uc30ga2V5TWFwcGluZz17dGhpcy5wcm9wcy5rZXlNYXBwaW5nfSB7Li4udGhpcy5wcm9wcy50aGVhZH0gdGFibGU9e3RoaXN9IC8+fVxuXHRcdFx0XHR7ICEhdGhpcy5wcm9wcy50ZmlsdGVyICYmIDx0YWJsZS5URmlsdGVyIG9uRmlsdGVyPXt0aGlzLl9fb25GaWx0ZXJ9IGNvbHVtbnM9e2NvbHVtbnN9IHsuLi50aGlzLnByb3BzLnRmaWx0ZXJ9IHRhYmxlPXt0aGlzfSAvPn1cblx0XHRcdFx0eyAodGhpcy5wcm9wcy50Ym9keSB8fCB0aGlzLnByb3BzLmRhdGEpICYmIHRoaXMuX19yZW5kZXJUQm9keShjb2x1bW5zKSB9XG5cdFx0XHRcdHsgISF0aGlzLnByb3BzLnRmb290ICYmIDx0YWJsZS5URm9vdCBjb2x1bW5zPXtjb2x1bW5zfSB7Li4udGhpcy5wcm9wcy50Zm9vdH0gdGFibGU9e3RoaXN9IC8+fVxuXHRcdFx0XHR7IHRoaXMucHJvcHMuY2hpbGRyZW5SZW5kZXIgJiYgdGhpcy5wcm9wcy5jaGlsZHJlblJlbmRlcihjb2x1bW5zLCB0aGlzKSB9XG5cdFx0XHRcdHsgdGhpcy5wcm9wcy5jaGlsZHJlbiB9XG5cdFx0XHQ8L3RhYmxlPlxuXHRcdCk7XG5cdH0sXG5cdF9faW5pdENoZWNrYm94OiBmdW5jdGlvbiAoY29sdW1ucyl7XG5cdFx0dmFyIF9jaGVja2JveCA9IHtcblx0XHRcdFx0d2lkdGg6IDYwLFxuXHRcdFx0XHRoZWFkOiBmdW5jdGlvbiAoYXJndil7XG5cdFx0XHRcdFx0dmFyIF90YWJsZSA9IGFyZ3YudGhlYWQucHJvcHMudGFibGU7XG5cdFx0XHRcdFx0aWYoIV90YWJsZSkgcmV0dXJuO1xuXHRcdFx0XHRcdHJldHVybiA8c2VsZWN0b3IuQ2hlY2tib3hcblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgfX1cblx0XHRcdFx0XHRcdFx0XHRrZXk9e3RoaXMuc3RhdGUuY2hlY2tlZHMubGVuZ3RofVxuXHRcdFx0XHRcdFx0XHRcdHRleHQ9eycoJyArIF90YWJsZS5zdGF0ZS5jaGVja2Vkcy5sZW5ndGggKycpJ31cblx0XHRcdFx0XHRcdFx0XHRjaGVja2VkPXshIV90YWJsZS5zdGF0ZS5kYXRhLmxlbmd0aCAmJiBfdGFibGUuc3RhdGUuY2hlY2tlZHMubGVuZ3RoID09PSBfdGFibGUuc3RhdGUuZGF0YS5sZW5ndGh9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhldmVudCk9Pntcblx0XHRcdFx0XHRcdFx0XHRcdGlmKGV2ZW50LmNoZWNrZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zdGF0ZS5jaGVja2VkcyA9IHRoaXMuc3RhdGUuZGF0YS5zbGljZSgwKTtcblx0XHRcdFx0XHRcdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnN0YXRlLmNoZWNrZWRzID0gW107XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmZvcmNlVXBkYXRlKCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLm9uQ2hlY2tib3hDaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkNoZWNrYm94Q2hhbmdlKHRoaXMuc3RhdGUuY2hlY2tlZHMsIHRoaXMpO1xuXHRcdFx0XHRcdFx0XHRcdH19IC8+O1xuXHRcdFx0XHR9LmJpbmQodGhpcyksXG5cdFx0XHRcdGJvZHk6IGZ1bmN0aW9uIChhcmd2KXtcblx0XHRcdFx0XHR2YXIgX2RhdGEgPSBhcmd2LmRhdGE7XG5cdFx0XHRcdFx0cmV0dXJuIDxzZWxlY3Rvci5VbmNvbnRyb2xDaGVja2JveCBcblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgfX1cblx0XHRcdFx0XHRcdFx0XHRjaGVja2VkPXt0aGlzLnN0YXRlLmNoZWNrZWRzLmluZGV4T2YoX2RhdGEpICE9PSAtMX1cblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoZXZlbnQsIGNoZWNrYm94KT0+e1xuXHRcdFx0XHRcdFx0XHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZihjaGVja2JveC5wcm9wcy5jaGVja2VkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc3RhdGUuY2hlY2tlZHMuc3BsaWNlKHRoaXMuc3RhdGUuY2hlY2tlZHMuaW5kZXhPZihfZGF0YSksIDEpOyBcblx0XHRcdFx0XHRcdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnN0YXRlLmNoZWNrZWRzLnB1c2goX2RhdGEpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5mb3JjZVVwZGF0ZSgpO1xuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5vbkNoZWNrYm94Q2hhbmdlICYmIHRoaXMucHJvcHMub25DaGVja2JveENoYW5nZSh0aGlzLnN0YXRlLmNoZWNrZWRzLCB0aGlzKTtcblx0XHRcdFx0XHRcdFx0XHR9fSAvPjtcblx0XHRcdFx0fS5iaW5kKHRoaXMpXG5cdFx0XHR9LFxuXHRcdFx0X3ZhbHVlID0gdGhpcy5wcm9wcy5jaGVja2JveDtcblx0XHRzd2l0Y2goem4udHlwZShfdmFsdWUpKSB7XG5cdFx0XHRjYXNlICdvYmplY3QnOlxuXHRcdFx0XHRfY2hlY2tib3ggPSB6bi5leHRlbmQoe30sIF92YWx1ZSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnbnVtYmVyJzpcblx0XHRcdFx0X2NoZWNrYm94LndpZHRoID0gX3ZhbHVlO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdFx0aWYoX3ZhbHVlKSB7XG5cdFx0XHRjb2x1bW5zID0gY29sdW1ucy51bnNoaWZ0KF9jaGVja2JveCk7XG5cdFx0fVxuXHR9LFxuXHRfX2NvbHVtbnNMb2FkZWQ6IGZ1bmN0aW9uIChjb2x1bW5zKXtcblx0XHRpZihjb2x1bW5zICYmIHpuLmlzKGNvbHVtbnMsICdhcnJheScpKXtcblx0XHRcdHZhciBfdGVtcCA9IG51bGwsXG5cdFx0XHRcdF9yZXN1bHQgPSBudWxsLFxuXHRcdFx0XHRfY29sdW1uSXRlcmF0b3IgPSB0aGlzLnByb3BzLmNvbHVtbkl0ZXJhdG9yLFxuXHRcdFx0XHRfY29sdW1ucyA9IGNvbHVtbnMubWFwKGZ1bmN0aW9uIChjb2x1bW4pe1xuXHRcdFx0XHRcdF90ZW1wID0gem4uZGVlcEFzc2lnbih7fSwgY29sdW1uKTtcblx0XHRcdFx0XHRfcmVzdWx0ID0gX2NvbHVtbkl0ZXJhdG9yICYmIF9jb2x1bW5JdGVyYXRvcihfdGVtcCwgdGhpcyk7XG5cdFx0XHRcdFx0aWYoX3Jlc3VsdCA9PT0gZmFsc2UpIHJldHVybiBudWxsO1xuXHRcdFx0XHRcdGlmKHR5cGVvZiBfcmVzdWx0ID09ICdvYmplY3QnKSByZXR1cm4gX3Jlc3VsdDtcblxuXHRcdFx0XHRcdHJldHVybiBfdGVtcDtcblx0XHRcdFx0fS5iaW5kKHRoaXMpKTtcblx0XHRcdHRoaXMuX19pbml0Q2hlY2tib3goX2NvbHVtbnMpO1xuXHRcdFx0dGhpcy5wcm9wcy5vbkNvbHVtbnNMb2FkZWQgJiYgdGhpcy5wcm9wcy5vbkNvbHVtbnNMb2FkZWQoY29sdW1ucyk7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgY29sdW1uczogX2NvbHVtbnMgfSk7XG5cdFx0fVxuXHR9LFxuXHRfX29uQ29sdW1uRGF0YUNyZWF0ZWQ6IGZ1bmN0aW9uIChkYXRhLCBsaWZlY3ljbGUpe1xuXHRcdHRoaXMuY29sdW1ucyA9IGRhdGE7XG5cdFx0dGhpcy5wcm9wcy5vbkNvbHVtbnNDcmVhdGVkICYmIHRoaXMucHJvcHMub25Db2x1bW5zQ3JlYXRlZChkYXRhLCB0aGlzLCBsaWZlY3ljbGUpO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIDx6bnVpLnJlYWN0LkRhdGFMaWZlY3ljbGVcblx0XHRcdFx0XHRkYXRhPXt0aGlzLnByb3BzLmNvbHVtbnN9XG5cdFx0XHRcdFx0cmVuZGVyPXt0aGlzLl9fcmVuZGVyfVxuXHRcdFx0XHRcdHJlc3BvbnNlSGFuZGxlcj17dGhpcy5wcm9wcy5yZXNwb25zZUhhbmRsZXJ9XG5cdFx0XHRcdFx0b25Mb2FkaW5nPXt0aGlzLnByb3BzLm9uQ29sdW1uTG9hZGluZ31cblx0XHRcdFx0XHRvbkZpbmlzaGVkPXt0aGlzLl9fY29sdW1uc0xvYWRlZH1cblx0XHRcdFx0XHRvbkVycm9yPXt0aGlzLnByb3BzLm9uQ29sdW1uTG9hZEVycm9yfVxuXHRcdFx0XHRcdG9uRGF0YUNyZWF0ZWQ9e3RoaXMuX19vbkNvbHVtbkRhdGFDcmVhdGVkfSAvPjtcblx0fVxufSk7IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFRhYmxlID0gcmVxdWlyZSgnLi9UYWJsZScpO1xudmFyIGlucHV0ID0gcmVxdWlyZSgnem51aS1yZWFjdC1pbnB1dCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSVGFibGVFZGl0b3InLFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRjb2x1bW5zOiBbXVxuXHRcdH07XG5cdH0sXG5cdF9fY2VsbENoYW5nZTogZnVuY3Rpb24gKGV2ZW50LCBhcmd2KXtcblx0XHQvL2NvbnNvbGUubG9nKGV2ZW50KTtcblx0XHQvL2NvbnNvbGUubG9nKGFyZ3YpO1xuXHRcdGFyZ3YuZGF0YVthcmd2LnRjZWxsLnByb3BzLm5hbWVdID0gZXZlbnQudmFsdWU7XG5cdFx0YXJndi50cm93LmZvcmNlVXBkYXRlKCk7XG5cdH0sXG5cdF9fY29sdW1uQm9keVJlbmRlcjogZnVuY3Rpb24gKGFyZ3Ype1xuXHRcdHJldHVybiA8aW5wdXQuSW5wdXQga2V5PXthcmd2LnZhbHVlfSB2YWx1ZT17YXJndi52YWx1ZX0gb25FbnRlcj17KGV2ZW50KT0+dGhpcy5fX2NlbGxDaGFuZ2UoZXZlbnQsIGFyZ3YpfSAvPjtcblx0fSxcblx0X19jb2x1bW5JdGVyYXRvcjogZnVuY3Rpb24gKGNvbHVtbiwgdGFibGUpe1xuXHRcdGlmKCFjb2x1bW4uYm9keSkge1xuXHRcdFx0Y29sdW1uLmJvZHkgPSB0aGlzLl9fY29sdW1uQm9keVJlbmRlcjtcblx0XHR9XG5cblx0XHRyZXR1cm4gY29sdW1uO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxUYWJsZSB7Li4udGhpcy5wcm9wc30gY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItdGFibGUtZWRpdG9yJywgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBjb2x1bW5JdGVyYXRvcj17dGhpcy5fX2NvbHVtbkl0ZXJhdG9yfSAvPlxuXHRcdClcblx0fVxufSk7IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFRhYmxlID0gcmVxdWlyZSgnLi9UYWJsZScpO1xudmFyIHBhZ2VyID0gcmVxdWlyZSgnem51aS1yZWFjdC1wYWdlcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSVGFibGVQYWdlcicsXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNvdW50OiAwLFxuXHRcdFx0Y3VycmVudDogMSxcblx0XHRcdGRhdGE6IFtdLFxuXHRcdFx0dG90YWw6IDAsXG5cdFx0XHRwYWdlSW5kZXg6IHRoaXMucHJvcHMucGFnZUluZGV4IHx8IDFcblx0XHR9O1xuXHR9LFxuXHRfX2hhbmRsZVBhZ2VDaGFuZ2VkOiBmdW5jdGlvbiAobmV3UGFnZSl7XG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLm9uUGFnZUNoYW5nZWQgJiYgdGhpcy5wcm9wcy5vblBhZ2VDaGFuZ2VkKG5ld1BhZ2UsIHRoaXMpO1xuXHRcdGlmKF9yZXR1cm4gIT09IGZhbHNlKSB7XG5cdFx0XHR0aGlzLnNldFBhZ2VJbmRleChuZXdQYWdlKTtcblx0XHR9XG5cdH0sXG5cdHNldFBhZ2VJbmRleDogZnVuY3Rpb24gKHBhZ2VJbmRleCl7XG5cdFx0aWYodGhpcy5kYXRhKXtcblx0XHRcdHRoaXMuc3RhdGUucGFnZUluZGV4ID0gcGFnZUluZGV4O1xuXHRcdFx0dGhpcy5zdGF0ZS5jdXJyZW50ID0gcGFnZUluZGV4O1xuXHRcdFx0dGhpcy5mb3JjZVVwZGF0ZSgpO1xuXHRcdFx0dGhpcy5kYXRhLl9hcmd2ID0gdGhpcy5fX29uRGF0YUluaXRpYWwodGhpcy5wcm9wcy5kYXRhKTtcblx0XHRcdHRoaXMuZGF0YS5yZWZyZXNoKCk7XG5cdFx0fVxuXHR9LFxuXHRfX3JlbmRlclBhZ2VyOiBmdW5jdGlvbiAoY29sdW1ucywgdGFibGUpe1xuXHRcdHZhciBfY29sdW1uU2l6ZSA9IGNvbHVtbnMubGVuZ3RoO1xuXHRcdGlmKCFfY29sdW1uU2l6ZSl7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0dmFyIF9zdGF0ZSA9IHRoaXMuc3RhdGUsXG5cdFx0XHRfZWxlbWVudCA9IG51bGwsXG5cdFx0XHRfcGFnZXJQcm9wcyA9IHtcblx0XHRcdFx0dG90YWw6IF9zdGF0ZS50b3RhbCxcblx0XHRcdFx0Y291bnQ6IF9zdGF0ZS5jb3VudCxcblx0XHRcdFx0Y3VycmVudDogX3N0YXRlLmN1cnJlbnQsXG5cdFx0XHRcdG9uUGFnZUNoYW5nZWQ6IHRoaXMuX19oYW5kbGVQYWdlQ2hhbmdlZFxuXHRcdFx0fSxcblx0XHRcdF9Db21wb25lbnQgPSB0aGlzLnByb3BzLnBhZ2VyIHx8IHBhZ2VyLlBhZ2VyO1xuXHRcdGlmKHpuLmlzKF9Db21wb25lbnQsICdzdHJpbmcnKSl7XG5cdFx0XHRfQ29tcG9uZW50ID0gem4ucGF0aCh3aW5kb3csIF9Db21wb25lbnQpO1xuXHRcdH1lbHNlIGlmKHpuLmlzKF9Db21wb25lbnQsICdvYmplY3QnKSAmJiBfQ29tcG9uZW50LmNvbXBvbmVudCl7XG5cdFx0XHRfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KF9Db21wb25lbnQuY29tcG9uZW50LCB6bi5leHRlbmQoe30sIF9Db21wb25lbnQsIF9wYWdlclByb3BzKSk7XG5cdFx0fVxuXG5cdFx0aWYodGhpcy5wcm9wcy5wYWdlclJlbmRlcil7XG5cdFx0XHRfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMucGFnZXJSZW5kZXIsIF9wYWdlclByb3BzKTtcblx0XHR9XG5cblx0XHRpZighX2VsZW1lbnQgJiYgX0NvbXBvbmVudCAmJiB6bi5pcyhfQ29tcG9uZW50LCAnZnVuY3Rpb24nKSl7XG5cdFx0IFx0X2VsZW1lbnQgPSA8X0NvbXBvbmVudCB7Li4uX3BhZ2VyUHJvcHN9IC8+O1xuXHRcdH1cblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8dGZvb3QgY2xhc3NOYW1lPVwidGFibGUtcGFnZXJcIj5cblx0XHRcdFx0PHRyIGNsYXNzTmFtZT1cInBhZ2VyLXJvd1wiPlxuXHRcdFx0XHRcdDx0ZCBjb2xTcGFuPXtfY29sdW1uU2l6ZX0+e19lbGVtZW50fTwvdGQ+XG5cdFx0XHRcdDwvdHI+XG5cdFx0XHQ8L3Rmb290PlxuXHRcdCk7XG5cdH0sXG5cdF9fb25EYXRhSW5pdGlhbDogZnVuY3Rpb24gKGRhdGEpe1xuXHRcdHZhciBfbWV0aG9kID0gZGF0YS5tZXRob2R8fCdwb3N0Jyxcblx0XHRcdF9wYXJhbXMgPSB7fSxcblx0XHRcdF9rZXlNYXBzID0gem4uZGVlcEFzc2lnbih7XG5cdFx0XHRcdHRvdGFsOiBcInRvdGFsXCIsXG5cdFx0XHRcdHBhZ2VJbmRleDogJ3BhZ2VJbmRleCcsXG5cdFx0XHRcdHBhZ2VTaXplOiAncGFnZVNpemUnLFxuXHRcdFx0XHRkYXRhOiAnZGF0YSdcblx0XHRcdH0sIHRoaXMucHJvcHMua2V5TWFwcyk7XG5cblx0XHRfcGFyYW1zW19rZXlNYXBzLnBhZ2VJbmRleF0gPSB0aGlzLnN0YXRlLnBhZ2VJbmRleCB8fCAxO1xuXHRcdF9wYXJhbXNbX2tleU1hcHMucGFnZVNpemVdID0gdGhpcy5wcm9wcy5wYWdlU2l6ZSB8fCAxMDtcblx0XHRpZihfbWV0aG9kID09ICdnZXQnKXtcblx0XHRcdGRhdGEgPSB6bi5kZWVwQXNzaWduKGRhdGEsIHtcblx0XHRcdFx0cGFyYW1zOiBfcGFyYW1zXG5cdFx0XHR9KTtcblx0XHR9ZWxzZXtcblx0XHRcdGRhdGEgPSB6bi5kZWVwQXNzaWduKGRhdGEsIHtcblx0XHRcdFx0ZGF0YTogX3BhcmFtc1xuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdFxuXHRcdHJldHVybiB0aGlzLnN0YXRlLmtleU1hcHMgPSBfa2V5TWFwcywgZGF0YTtcblx0fSxcblx0X19vbkRhdGFDcmVhdGVkOiBmdW5jdGlvbiAoZGF0YSwgdGFibGUpe1xuXHRcdHRoaXMuZGF0YSA9IGRhdGE7XG5cdFx0dGhpcy5wcm9wcy5vbkRhdGFDcmVhdGVkICYmIHRoaXMucHJvcHMub25EYXRhQ3JlYXRlZChkYXRhLCB0YWJsZSwgdGhpcyk7XG5cdH0sXG5cdF9fb25EYXRhTG9hZGVkOiBmdW5jdGlvbiAoZGF0YSwgdGFibGUpe1xuXHRcdGlmKHRoaXMucHJvcHMuenhueil7XG5cdFx0XHRpZih6bi5pcyhkYXRhLCAnb2JqZWN0JykgJiYgZGF0YS5jb2RlICE9IDIwMCl7XG5cdFx0XHRcdHJldHVybiBjb25zb2xlLmVycm9yKGRhdGEuZGV0YWlsKSwgZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRpZighem4uaXMoZGF0YSwgJ2FycmF5Jykpe1xuXHRcdFx0XHRyZXR1cm4gY29uc29sZS5lcnJvcihcIlRhYmxlUGFnZXIgQ29tcG9uZW50IERhdGEgVHlwZSBFcnJvci5cIiksIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0dmFyIF9kYXRhID0gZGF0YVswXSxcblx0XHRcdFx0X3BhZ2VyQ291bnQgPSBkYXRhWzFdWzBdLmNvdW50O1xuXHRcdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLm9uRGF0YUxvYWRlZCAmJiB0aGlzLnByb3BzLm9uRGF0YUxvYWRlZChfZGF0YSwgdGFibGUsIHRoaXMpO1xuXHRcdFx0aWYoX3JldHVybiAhPT0gZmFsc2Upe1xuXHRcdFx0XHR0YWJsZS5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0ZGF0YTogX2RhdGFcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdHRvdGFsOiBNYXRoLmNlaWwoX3BhZ2VyQ291bnQvdGhpcy5wcm9wcy5wYWdlU2l6ZSksXG5cdFx0XHRcdFx0Y291bnQ6IF9wYWdlckNvdW50LFxuXHRcdFx0XHRcdGN1cnJlbnQ6IHRoaXMuc3RhdGUuY3VycmVudCxcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fWVsc2V7XG5cdFx0XHRpZih6bi5pcyhkYXRhLCAnYXJyYXknKSl7XG5cdFx0XHRcdHJldHVybiBjb25zb2xlLmVycm9yKCdUaGUgZGF0YSBpcyBhcnJheSwgYnV0IGl0IG5lZWQgcmV0dXJuIG9iamVjdCcpLCBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHZhciBfZGF0YSA9IGRhdGEuZGF0YTtcblx0XHRcdHZhciBfcmV0dXJuID0gdGhpcy5wcm9wcy5vbkRhdGFMb2FkZWQgJiYgdGhpcy5wcm9wcy5vbkRhdGFMb2FkZWQoX2RhdGEsIHRhYmxlLCB0aGlzKTtcblx0XHRcdGlmKF9yZXR1cm4gIT09IGZhbHNlKXtcblx0XHRcdFx0dGFibGUuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdGRhdGE6IF9kYXRhW3RoaXMuc3RhdGUua2V5TWFwcy5kYXRhXVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0dG90YWw6IE1hdGguY2VpbChfZGF0YVt0aGlzLnN0YXRlLmtleU1hcHMudG90YWxdL3RoaXMucHJvcHMucGFnZVNpemUpLFxuXHRcdFx0XHRcdGNvdW50OiBfZGF0YVt0aGlzLnN0YXRlLmtleU1hcHMudG90YWxdLFxuXHRcdFx0XHRcdGN1cnJlbnQ6IF9kYXRhW3RoaXMuc3RhdGUua2V5TWFwcy5wYWdlSW5kZXhdLFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PFRhYmxlIHsuLi50aGlzLnByb3BzfSBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd6ci10YWJsZS1wYWdlcicsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gXG5cdFx0XHRcdGNoaWxkcmVuUmVuZGVyPXt0aGlzLl9fcmVuZGVyUGFnZXJ9XG5cdFx0XHRcdG9uRGF0YUluaXRpYWw9e3RoaXMuX19vbkRhdGFJbml0aWFsfVxuXHRcdFx0XHRvbkRhdGFDcmVhdGVkPXt0aGlzLl9fb25EYXRhQ3JlYXRlZH1cblx0XHRcdFx0b25EYXRhTG9hZGVkPXt0aGlzLl9fb25EYXRhTG9hZGVkfSAvPlxuXHRcdCk7XG5cdH1cbn0pOyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBDaGVja2JveCA9IHJlcXVpcmUoJ3pudWktcmVhY3Qtc2VsZWN0b3InKS5DaGVja2JveDtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUlRDZWxsQ2hlY2tib3gnLFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y2hlY2tlZDogdGhpcy5wcm9wcy5jaGVja2VkIHx8IGZhbHNlXG5cdFx0fVxuXHR9LFxuXHRfX29uQ2hlY2tib3hDaGFuZ2U6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0aWYodGhpcy5wcm9wcy50aGVhZCkge1xuXHRcdFx0dGhpcy5fX29uSGVhZENoYW5nZShldmVudCk7XG5cdFx0fWVsc2UgaWYodGhpcy5wcm9wcy50Ym9keSkge1xuXHRcdFx0dGhpcy5fX29uQm9keUNoYW5nZShldmVudCk7XG5cdFx0fVxuXHR9LFxuXHRfX29uSGVhZENoYW5nZTogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHRjb25zb2xlLmxvZyhldmVudC5jaGVja2VkLCB0aGlzLnByb3BzKTtcblx0fSxcblx0X19vbkJvZHlDaGFuZ2U6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0Y29uc29sZS5sb2coZXZlbnQuY2hlY2tlZCwgdGhpcy5wcm9wcyk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ6ci10YWJsZS1jZWxsLWNoZWNrYm94XCI+PENoZWNrYm94IGNoZWNrZWQ9e3RydWV9IG9uQ2hhbmdlPXt0aGlzLl9fb25DaGVja2JveENoYW5nZX0vPjwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgQ2hlY2tib3g6IHJlcXVpcmUoJy4vQ2hlY2tib3gnKSxcbiAgICAvL0J1dHRvbnM6IHJlcXVpcmUoJy4vQnV0dG9ucycpLFxuICAgIC8vSW5wdXQ6IHJlcXVpcmUoJy4vSW5wdXQnKSxcbiAgICAvL0NhbGN1bGF0b3I6IHJlcXVpcmUoJy4vQ2FsY3VsYXRvcicpXG59OyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIHRhYmxlOiByZXF1aXJlKCcuL3RhYmxlL2luZGV4JyksXG4gICAgY2VsbDogcmVxdWlyZSgnLi9jZWxsL2luZGV4JyksXG4gICAgVGFibGU6IHJlcXVpcmUoJy4vVGFibGUnKSxcbiAgICBUYWJsZUVkaXRvcjogcmVxdWlyZSgnLi9UYWJsZUVkaXRvcicpLFxuICAgIFRhYmxlUGFnZXI6IHJlcXVpcmUoJy4vVGFibGVQYWdlcicpXG59OyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUlRhYmxlQ29sZ3JvdXAnLFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0dmFyIF9rZXlNYXBwaW5nID0gdGhpcy5wcm9wcy5rZXlNYXBwaW5nIHx8IHsgfTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGNvbGdyb3VwPlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0KHRoaXMucHJvcHMuY29sdW1uc3x8W10pLm1hcChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcblx0XHRcdFx0XHRcdHZhciBfd2lkdGggPSBfa2V5TWFwcGluZy53aWR0aCB8fCAnd2lkdGgnO1xuXHRcdFx0XHRcdFx0cmV0dXJuIDxjb2wga2V5PXtpbmRleH0gc3R5bGU9e3sgd2lkdGg6IGl0ZW1bX3dpZHRoXSB9fSAvPjtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHQ8L2NvbGdyb3VwPlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFRSb3cgPSByZXF1aXJlKCcuL1RSb3cnKTtcbnZhciBsb2FkZXIgPSByZXF1aXJlKCd6bnVpLXJlYWN0LWxvYWRlcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSVEJvZHknLFxuXHRnZXRJbml0aWFsU3RhdGU6ZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0YWN0aXZlOiBudWxsLFxuXHRcdFx0Y2hlY2tlZHM6IFtdLFxuXHRcdFx0Y2xhc3NOYW1lOiAnJyxcblx0XHRcdHN0eWxlOiB7fSxcblx0XHRcdGxvYWRpbmc6IGZhbHNlXG5cdFx0fVxuXHR9LFxuXHRfX3JlbmRlckxvYWRpbmc6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMubG9hZGluZ1JlbmRlciwge1xuXHRcdFx0dGJvZHk6IHRoaXNcblx0XHR9KTtcblxuXHRcdGlmKCFfZWxlbWVudCl7XG5cdFx0IFx0X2VsZW1lbnQgPSA8bG9hZGVyLkRhdGFMb2FkZXIgbG9hZGVyPVwid2F2ZVwiIHRpdGxlPXsnTG9hZGluZy4uLid9IC8+O1xuXHRcdH1cblxuXHRcdHZhciBfbG9hZGluZyA9IHpuLmV4dGVuZCh7IGNsYXNzTmFtZTogJycsIHN0eWxlOiB7fSB9LCB0aGlzLnByb3BzLmxvYWRpbmcpO1xuXHRcdHJldHVybiA8dHIgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInRib2R5LWxvYWRpbmdcIiwgX2xvYWRpbmcuY2xhc3NOYW1lKX0gc3R5bGU9e19sb2FkaW5nLnN0eWxlfT5cblx0XHRcdDx0ZCBjb2xTcGFuPXt0aGlzLnByb3BzLmNvbHVtbnMubGVuZ3RofT57X2VsZW1lbnR9PC90ZD5cblx0XHQ8L3RyPjtcblx0fSxcblx0X19yZW5kZXJFbXB0eTogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF9lbGVtZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQodGhpcy5wcm9wcy5lbXB0eVJlbmRlciwge1xuXHRcdFx0dGJvZHk6IHRoaXNcblx0XHR9KTtcblxuXHRcdGlmKCFfZWxlbWVudCl7XG5cdFx0IFx0X2VsZW1lbnQgPSA8ZGl2IGNsYXNzTmFtZT1cImVtcHR5LWNvbnRlbnRcIj5ObyBEYXRhLjwvZGl2Pjtcblx0XHR9XG5cdFx0dmFyIF9lbXB0eSA9IHpuLmV4dGVuZCh7IGNsYXNzTmFtZTogJycsIHN0eWxlOiB7fSB9LCB0aGlzLnByb3BzLmVtcHR5KTtcblx0XHRyZXR1cm4gPHRyIGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ0Ym9keS1lbXB0eVwiLCBfZW1wdHkuY2xhc3NOYW1lKX0gc3R5bGU9e19lbXB0eS5zdHlsZX0+XG5cdFx0XHQ8dGQgY29sU3Bhbj17dGhpcy5wcm9wcy5jb2x1bW5zLmxlbmd0aH0+e19lbGVtZW50fTwvdGQ+XG5cdFx0PC90cj47XG5cdH0sXG5cdF9fb25Sb3dDbGljazogZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0dmFyIF9kYXRhID0gZXZlbnQuZGF0YTtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGFjdGl2ZTogX2RhdGEudHJvdy5wcm9wcy5kYXRhXG5cdFx0fSk7XG5cdFx0ZXZlbnQudGJvZHkgPSB0aGlzO1xuXHRcdHRoaXMucHJvcHMub25Sb3dDbGljayAmJiB0aGlzLnByb3BzLm9uUm93Q2xpY2soZXZlbnQpO1xuXHR9LFxuXHRfX29uQ2VsbENsaWNrOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdGV2ZW50LnRib2R5ID0gdGhpcztcblx0XHR0aGlzLnByb3BzLm9uQ2VsbENsaWNrICYmIHRoaXMucHJvcHMub25DZWxsQ2xpY2soZXZlbnQpO1xuXHR9LFxuXHRfX3JlbmRlclJvdzogZnVuY3Rpb24gKGl0ZW0sIGluZGV4KXtcblx0XHRpZighem4uaXMoaXRlbSwgJ29iamVjdCcpKSB7IHJldHVybiBudWxsO31cblx0XHR2YXIgX3RlbXAgPSB0aGlzLnByb3BzLmVhY2hSb3dEYXRhICYmIHRoaXMucHJvcHMuZWFjaFJvd0RhdGEoaXRlbSwgaW5kZXgpO1xuXHRcdGlmKF90ZW1wICYmIHpuLmlzKF90ZW1wLCAnb2JqZWN0Jykpe1xuXHRcdFx0aXRlbSA9IF90ZW1wO1xuXHRcdH1cblx0XHR2YXIgX2VsZW1lbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudCh0aGlzLnByb3BzLnJvd1JlbmRlciwge1xuXHRcdFx0ZGF0YTogaXRlbSxcblx0XHRcdHJvd0luZGV4OiBpbmRleCxcblx0XHRcdHRib2R5OiB0aGlzXG5cdFx0fSk7XG5cblx0XHRpZihfZWxlbWVudCl7XG5cdFx0XHRyZXR1cm4gX2VsZW1lbnQ7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIDxUUm93IGtleT17aW5kZXh9IHsuLi50aGlzLnByb3BzLnJvd30gXG5cdFx0XHRcdFx0Y2VsbD17dGhpcy5wcm9wcy5jZWxsfVxuXHRcdFx0XHRcdGNlbGxSZW5kZXI9e3RoaXMucHJvcHMuY2VsbFJlbmRlcn1cblx0XHRcdFx0XHRjb2x1bW5zPXt0aGlzLnByb3BzLmNvbHVtbnN9IFxuXHRcdFx0XHRcdHRib2R5PXt0aGlzfVxuXHRcdFx0XHRcdGRhdGE9e2l0ZW19IFxuXHRcdFx0XHRcdGFjdGl2ZT17dGhpcy5zdGF0ZS5hY3RpdmUgPT0gaXRlbX0gXG5cdFx0XHRcdFx0Y2hlY2tlZD17dGhpcy5zdGF0ZS5jaGVja2Vkcy5pbmRleE9mKGl0ZW0pICE9PSAtMX0gXG5cdFx0XHRcdFx0b25Sb3dDbGljaz17dGhpcy5fX29uUm93Q2xpY2t9XG5cdFx0XHRcdFx0b25DZWxsQ2xpY2s9e3RoaXMuX19vbkNlbGxDbGlja30gLz47XG5cdH0sXG5cdF9fcmVuZGVyRGF0YTogZnVuY3Rpb24gKCl7XG5cdFx0aWYodGhpcy5wcm9wcy5kYXRhID09IG51bGwgfHwgKHRoaXMucHJvcHMuZGF0YSAmJiAhdGhpcy5wcm9wcy5kYXRhLmxlbmd0aCkpe1xuXHRcdFx0cmV0dXJuIHRoaXMuX19yZW5kZXJFbXB0eSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gPD5cblx0XHRcdHtcblx0XHRcdFx0dGhpcy5wcm9wcy5kYXRhLm1hcCh0aGlzLl9fcmVuZGVyUm93KVxuXHRcdFx0fVxuXHRcdDwvPjtcblx0fSxcblx0X19yZW5kZXI6IGZ1bmN0aW9uICgpe1xuXHRcdGlmKHRoaXMucHJvcHMubG9hZGluZyB8fCB0aGlzLnN0YXRlLmxvYWRpbmcpIHtcblx0XHRcdHJldHVybiB0aGlzLl9fcmVuZGVyTG9hZGluZygpO1xuXHRcdH1lbHNle1xuXHRcdFx0cmV0dXJuIHRoaXMuX19yZW5kZXJEYXRhKCk7XG5cdFx0fVxuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDx0Ym9keSBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItdGFibGUtdGJvZHlcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUsIHRoaXMuc3RhdGUuY2xhc3NOYW1lKX0gc3R5bGU9e3pudWkucmVhY3Quc3R5bGUodGhpcy5wcm9wcy5zdHlsZSwgdGhpcy5zdGF0ZS5zdHlsZSl9PlxuXHRcdFx0XHR7IHRoaXMuX19yZW5kZXIoKSB9XG5cdFx0XHQ8L3Rib2R5PlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFJlYWN0RE9NID0gem51aS5SZWFjdERPTSB8fCByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUlRDZWxsJyxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNsYXNzTmFtZTogJycsXG5cdFx0XHRzdHlsZToge30sXG5cdFx0XHRkaXNhYmxlZDogdGhpcy5wcm9wcy5kaXNhYmxlZCxcblx0XHRcdGNoZWNrZWQ6IHRoaXMucHJvcHMuY2hlY2tlZCxcblx0XHRcdGFjdGl2ZTogdGhpcy5wcm9wcy5hY3RpdmVcblx0XHR9XG5cdH0sXG5cdF9fcmVuZGVyQ2VsbENvbnRlbnQ6IGZ1bmN0aW9uICgpe1xuXHRcdGlmKHRoaXMucHJvcHMuY2hpbGRyZW4pIHtcblx0XHRcdHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuO1xuXHRcdH1cblx0XHRcblx0XHR2YXIgX3ZhbHVlID0gbnVsbDtcblx0XHRpZih0aGlzLnByb3BzLmRhdGEgJiYgdGhpcy5wcm9wcy5uYW1lKSB7XG5cdFx0XHRfdmFsdWUgPSB0aGlzLnByb3BzLmRhdGFbdGhpcy5wcm9wcy5uYW1lXTtcblx0XHR9XG5cblx0XHR2YXIgX3JlbmRlciA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMucmVuZGVyIHx8IHRoaXMucHJvcHMuYm9keSwge1xuXHRcdFx0Y2VsbEluZGV4OiB0aGlzLnByb3BzLmNlbGxJbmRleCwgXG5cdFx0XHRjb2x1bW46IHRoaXMucHJvcHMuY29sdW1uLFxuXHRcdFx0ZGF0YTogdGhpcy5wcm9wcy5kYXRhLFxuXHRcdFx0dmFsdWU6IF92YWx1ZSxcblx0XHRcdHRjZWxsOiB0aGlzLFxuXHRcdFx0dHJvdzogdGhpcy5wcm9wcy50cm93LFxuXHRcdFx0dGJvZHk6IHRoaXMucHJvcHMudGJvZHlcblx0XHR9KTtcblx0XHRcblx0XHRpZihfcmVuZGVyKXtcblx0XHRcdHJldHVybiBfcmVuZGVyO1xuXHRcdH1cblxuXHRcdHJldHVybiBfdmFsdWU7XG5cdH0sXG5cdF9fY2VsbENsaWNrOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdGV2ZW50LmRhdGEgPSB7XG5cdFx0XHR0ZDogUmVhY3RET00uZmluZERPTU5vZGUodGhpcyksXG5cdFx0XHR0Y2VsbDogdGhpc1xuXHRcdH07XG5cdFx0dGhpcy5wcm9wcy5vbkNsaWNrICYmIHRoaXMucHJvcHMub25DbGljayhldmVudCk7XG5cdFx0dGhpcy5wcm9wcy5vbkNlbGxDbGljayAmJiB0aGlzLnByb3BzLm9uQ2VsbENsaWNrKGV2ZW50KTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8dGQgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXRhYmxlLXRjZWxsXCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lLCB0aGlzLnN0YXRlLmNsYXNzTmFtZSl9IHN0eWxlPXt6bnVpLnJlYWN0LnN0eWxlKHRoaXMucHJvcHMuc3R5bGUsIHRoaXMuc3RhdGUuc3R5bGUpfVx0XG5cdFx0XHRcdGRhdGEtZGlzYWJsZWQ9e3RoaXMuc3RhdGUuZGlzYWJsZWR9XG5cdFx0XHRcdGRhdGEtY2hlY2tlZD17dGhpcy5zdGF0ZS5jaGVja2VkfVxuXHRcdFx0XHRkYXRhLWFjdGl2ZT17dGhpcy5zdGF0ZS5hY3RpdmV9XG5cdFx0XHRcdG9uQ2xpY2s9e3RoaXMuX19jZWxsQ2xpY2t9ID5cblx0XHRcdFx0e3RoaXMuX19yZW5kZXJDZWxsQ29udGVudCgpfVxuXHRcdFx0PC90ZD5cblx0XHQpO1xuXHR9XG59KTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBmaWx0ZXIgPSByZXF1aXJlKCd6bnVpLXJlYWN0LWZpbHRlcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6ICdaUkZpbHRlcicsXG5cdGdldEluaXRpYWxTdGF0ZTpmdW5jdGlvbigpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRjbGFzc05hbWU6ICcnLFxuXHRcdFx0c3R5bGU6IHt9LFxuXHRcdFx0ZGF0YToge31cblx0XHR9XG5cdH0sXG5cdF9fb25GaWx0ZXJDaGFuZ2U6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0aWYoZXZlbnQubmFtZSAmJiBldmVudC52YWx1ZSkge1xuXHRcdFx0dGhpcy5zdGF0ZS5kYXRhW2V2ZW50Lm5hbWVdID0ge1xuXHRcdFx0XHR2YWx1ZTogZXZlbnQudmFsdWUsXG5cdFx0XHRcdG9wdDogZXZlbnQub3B0XG5cdFx0XHR9O1xuXHRcdH1cblx0XHR0aGlzLnByb3BzLm9uRmlsdGVyICYmIHRoaXMucHJvcHMub25GaWx0ZXIodGhpcy5zdGF0ZS5kYXRhKTtcblx0fSxcblx0X19vbkZpbHRlckNhbmNlbDogZnVuY3Rpb24gKG5hbWUpe1xuXHRcdGlmKG5hbWUgJiYgdGhpcy5zdGF0ZS5kYXRhKXtcblx0XHRcdHRoaXMuc3RhdGUuZGF0YVtuYW1lXSA9IG51bGw7XG5cdFx0XHRkZWxldGUgdGhpcy5zdGF0ZS5kYXRhW25hbWVdO1xuXHRcdH1cblx0fSxcblx0X19yZW5kZXJDZWxsOiBmdW5jdGlvbiAoY29sdW1uLCBpbmRleCl7XG5cdFx0aWYoIXpuLmlzKGNvbHVtbiwgJ29iamVjdCcpKSB7IHJldHVybiBudWxsOyB9XG5cdFx0dmFyIF9lbGVtZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQodGhpcy5wcm9wcy5jZWxsUmVuZGVyLCB7XG5cdFx0XHRjb2x1bW46IGNvbHVtbixcblx0XHRcdGNlbGxJbmRleDogaW5kZXgsIFxuXHRcdFx0dGZpbHRlcjogdGhpc1xuXHRcdH0pO1xuXHRcdGlmKF9lbGVtZW50KXtcblx0XHRcdHJldHVybiBfZWxlbWVudDtcblx0XHR9XG5cdFx0XG5cdFx0dmFyIF9jb250ZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQoY29sdW1uLnJlbmRlciwge1xuXHRcdFx0Y29sdW1uOiBjb2x1bW4sXG5cdFx0XHRjZWxsSW5kZXg6IGluZGV4LCBcblx0XHRcdHRmaWx0ZXI6IHRoaXNcblx0XHR9KTtcblxuXHRcdGlmKCFfY29udGVudCAmJiBjb2x1bW4uZmlsdGVyKSB7XG5cdFx0XHRfY29udGVudCA9IDxmaWx0ZXIuRmlsdGVyRmllbGQgey4uLmNvbHVtbi5maWx0ZXJ9IG5hbWU9e2NvbHVtbi5uYW1lfSBvbkZpbHRlckNoYW5nZT17dGhpcy5fX29uRmlsdGVyQ2hhbmdlfSBvbkNhbmNlbD17dGhpcy5fX29uRmlsdGVyQ2FuY2VsfSAvPjtcblx0XHR9XG5cblx0XHR2YXIgX2NlbGwgPSB6bi5leHRlbmQoeyBzdHlsZToge30sIGNsYXNzTmFtZTogJycgfSwgdGhpcy5wcm9wcy5jZWxsKTtcblx0XHRyZXR1cm4gPHRkIGtleT17aW5kZXh9IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3RmaWx0ZXItY2VsbCcsIF9jZWxsLmNsYXNzTmFtZSl9IHN0eWxlPXtfY2VsbC5zdHlsZX0+XG5cdFx0XHR7IF9jb250ZW50IH1cblx0XHQ8L3RkPjtcblx0fSxcblx0X19yZW5kZXJSb3c6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMucm93UmVuZGVyLCB7XG5cdFx0XHR0ZmlsdGVyOiB0aGlzXG5cdFx0fSk7XG5cdFx0aWYoX2VsZW1lbnQpe1xuXHRcdFx0cmV0dXJuIF9lbGVtZW50O1xuXHRcdH1cblx0XHR2YXIgX3JvdyA9IHpuLmV4dGVuZCh7IGNsYXNzTmFtZTogJycsIHN0eWxlOiB7fSB9LCB0aGlzLnByb3BzLnJvdyk7XG5cdFx0cmV0dXJuIChcblx0XHRcdDx0ciBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwidGZpbHRlci1yb3cgenItdGFibGUtdHJvd1wiLCBfcm93LmNsYXNzTmFtZSl9IHN0eWxlPXtfcm93LnN0eWxlfT5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdCh0aGlzLnByb3BzLmNvbHVtbnN8fFtdKS5tYXAodGhpcy5fX3JlbmRlckNlbGwpXG5cdFx0XHRcdH1cblx0XHRcdDwvdHI+XG5cdFx0KTtcblx0fSxcblx0cmVuZGVyOmZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDx0aGVhZCBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItdGFibGUtdGZpbHRlclwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSwgdGhpcy5zdGF0ZS5jbGFzc05hbWUpfSBzdHlsZT17em51aS5yZWFjdC5zdHlsZSh0aGlzLnByb3BzLnN0eWxlLCB0aGlzLnN0YXRlLnN0eWxlKX0+XG5cdFx0XHRcdHt0aGlzLl9fcmVuZGVyUm93KCl9XG5cdFx0XHQ8L3RoZWFkPlxuXHRcdCk7XG5cdH1cbn0pOyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUlRGb290Jyxcblx0X19yZW5kZXJDaGlsZHJlbjogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF9jb2x1bW5zID0gdGhpcy5wcm9wcy5jb2x1bW5zIHx8IFtdO1xuXHRcdGlmKHRoaXMucHJvcHMuY2hpbGRyZW4pe1xuXHRcdFx0cmV0dXJuIDx0ciBjbGFzc05hbWU9XCJ0Zm9vdC1yb3dcIj5cblx0XHRcdFx0PHRkIGNvbFNwYW49e19jb2x1bW5zLmxlbmd0aH0+e3RoaXMucHJvcHMuY2hpbGRyZW59PC90ZD5cblx0XHRcdDwvdHI+O1xuXHRcdH1lbHNle1xuXHRcdFx0cmV0dXJuIHRoaXMuX19yZW5kZXJSb3coKTtcblx0XHR9XG5cdH0sXG5cdF9fcmVuZGVyQ2VsbDogZnVuY3Rpb24gKGNvbHVtbiwgaW5kZXgpe1xuXHRcdGlmKCF6bi5pcyhjb2x1bW4sICdvYmplY3QnKSkgeyByZXR1cm4gbnVsbDsgfVxuXHRcdHZhciBfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMuY2VsbFJlbmRlciwge1xuXHRcdFx0Y29sdW1uOiBjb2x1bW4sXG5cdFx0XHRjZWxsSW5kZXg6IGluZGV4LCBcblx0XHRcdHRmb290OiB0aGlzXG5cdFx0fSk7XG5cdFx0aWYoX2VsZW1lbnQpe1xuXHRcdFx0cmV0dXJuIF9lbGVtZW50O1xuXHRcdH1cblxuXHRcdHZhciBfY29udGVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KGNvbHVtbi5yZW5kZXIgfHwgY29sdW1uLmZvb3QsIHtcblx0XHRcdGNvbHVtbjogY29sdW1uLFxuXHRcdFx0Y2VsbEluZGV4OiBpbmRleCwgXG5cdFx0XHR0Zm9vdDogdGhpc1xuXHRcdH0pO1xuXG5cdFx0aWYodGhpcy5wcm9wcy5yZW5kZXIpIHtcblx0XHRcdF9jb250ZW50ID0gdGhpcy5wcm9wcy5yZW5kZXIoY29sdW1uLCBpbmRleCwgdGhpcyk7XG5cdFx0fVxuXG5cdFx0dmFyIF9jZWxsID0gem4uZXh0ZW5kKHsgc3R5bGU6IHt9LCBjbGFzc05hbWU6ICcnIH0sIHRoaXMucHJvcHMuY2VsbCk7XG5cdFx0cmV0dXJuIDx0aCBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd0Zm9vdC1jZWxsJywgX2NlbGwuY2xhc3NOYW1lKX0gc3R5bGU9e19jZWxsLnN0eWxlfT5cblx0XHRcdHsgX2NvbnRlbnQgfVxuXHRcdDwvdGg+O1xuXHR9LFxuXHRfX3JlbmRlclJvdzogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF9lbGVtZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQodGhpcy5wcm9wcy5yb3dSZW5kZXIsIHtcblx0XHRcdHRoZWFkOiB0aGlzXG5cdFx0fSk7XG5cdFx0aWYoX2VsZW1lbnQpe1xuXHRcdFx0cmV0dXJuIF9lbGVtZW50O1xuXHRcdH1cblx0XHR2YXIgX3JvdyA9IHpuLmV4dGVuZCh7IGNsYXNzTmFtZTogJycsIHN0eWxlOiB7fSB9LCB0aGlzLnByb3BzLnJvdyk7XG5cdFx0cmV0dXJuIChcblx0XHRcdDx0ciBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwidGZvb3Qtcm93XCIsIF9yb3cuY2xhc3NOYW1lKX0gc3R5bGU9e19yb3cuc3R5bGV9PlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0KHRoaXMucHJvcHMuY29sdW1uc3x8W10pLm1hcCh0aGlzLl9fcmVuZGVyQ2VsbClcblx0XHRcdFx0fVxuXHRcdFx0PC90cj5cblx0XHQpO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDx0Zm9vdCBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItdGFibGUtdGZvb3RcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0+XG5cdFx0XHRcdHt0aGlzLl9fcmVuZGVyQ2hpbGRyZW4oKX1cblx0XHRcdDwvdGZvb3Q+XG5cdFx0KTtcblx0fVxufSk7IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFRIZWFkU29ydCA9IHJlcXVpcmUoJy4vVEhlYWRTb3J0Jyk7XG52YXIgcG9wdXAgPSByZXF1aXJlKCd6bnVpLXJlYWN0LXBvcHVwJyk7XG52YXIgenJqc29uID0gcmVxdWlyZSgnem51aS1yZWFjdC1qc29uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1RIZWFkJyxcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge307XG5cdH0sXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNsYXNzTmFtZTogJycsXG5cdFx0XHRzdHlsZToge30sXG5cdFx0XHRzb3J0OiB7fSxcblx0XHRcdGZpbHRlcjoge31cblx0XHR9O1xuXHR9LFxuXHRfX29uQ29sdW1uU29ydDogZnVuY3Rpb24gKHNvcnQsIGNvbHVtbil7XG5cdFx0aWYoY29sdW1uLm5hbWUpIHtcblx0XHRcdHRoaXMuc3RhdGUuc29ydFtjb2x1bW4ubmFtZV0gPSAoc29ydD09J2ZhU29ydEFscGhhRG93bicgPyAnZGVzYycgOiAnYXNjJyk7XG5cdFx0fVxuXHRcdHRoaXMucHJvcHMub25Tb3J0ICYmIHRoaXMucHJvcHMub25Tb3J0KHRoaXMuc3RhdGUuc29ydCk7XG5cdH0sXG5cdF9fb25Db2x1bW5FZGl0b3JDaGFuZ2U6IGZ1bmN0aW9uIChkYXRhLCBjaGlsZCwgcm9vdCwgaW5kZXgpe1xuICAgICAgICB2YXIgX3Jvb3QgPSByb290IHx8IGNoaWxkO1xuXHRcdHRoaXMucHJvcHMub25Db2x1bW5DaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkNvbHVtbkNoYW5nZShfcm9vdC5zdGF0ZS52YWx1ZSwgaW5kZXgpO1xuICAgIH0sXG5cdF9faWNvbkNsaWNrUmVuZGVyOiBmdW5jdGlvbiAoY29sdW1uLCBpbmRleCl7XG5cdFx0XG5cdFx0cmV0dXJuIDxkaXYgc3R5bGU9e3twYWRkaW5nOiAxMCwgbWF4SGVpZ2h0OiA1MDAsIHdpZHRoOiA0MDAsIG92ZXJmbG93OiAnYXV0byd9fT5cblx0XHRcdDx6cmpzb24uZWRpdG9yLm9iamVjdCBmb2xkPXtmYWxzZX1cblx0XHRcdFx0ZGlzcGxheUNsb3N1cmU9e3RydWV9IFxuXHRcdFx0XHRkaXNwbGF5SXRlbUNvdW50PXt0cnVlfSBcblx0XHRcdFx0bGFiZWw9eydDb2x1bW4nfSBcblx0XHRcdFx0dmFsdWU9e2NvbHVtbn0gXG5cdFx0XHRcdG9uQ2hhbmdlPXsoZGF0YSwgY2hpbGQsIHJvb3QpPT50aGlzLl9fb25Db2x1bW5FZGl0b3JDaGFuZ2UoZGF0YSwgY2hpbGQsIHJvb3QsIGluZGV4KX0gLz5cblx0XHQ8L2Rpdj47XG5cdH0sXG5cdF9fcmVuZGVyQ2VsbDogZnVuY3Rpb24gKGNvbHVtbiwgaW5kZXgpe1xuXHRcdGlmKCF6bi5pcyhjb2x1bW4sICdvYmplY3QnKSkgeyByZXR1cm4gbnVsbDsgfVxuXHRcdHZhciBfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMuY2VsbFJlbmRlciwge1xuXHRcdFx0Y29sdW1uOiBjb2x1bW4sXG5cdFx0XHRjZWxsSW5kZXg6IGluZGV4LCBcblx0XHRcdHRoZWFkOiB0aGlzXG5cdFx0fSk7XG5cdFx0aWYoX2VsZW1lbnQpe1xuXHRcdFx0cmV0dXJuIF9lbGVtZW50O1xuXHRcdH1cblxuXHRcdHZhciBfY29udGVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KGNvbHVtbi5yZW5kZXIgfHwgY29sdW1uLmhlYWQsIHtcblx0XHRcdFx0Y29sdW1uOiBjb2x1bW4sXG5cdFx0XHRcdGNlbGxJbmRleDogaW5kZXgsIFxuXHRcdFx0XHR0aGVhZDogdGhpc1xuXHRcdFx0fSksXG5cdFx0XHRfbWFwcGluZyA9IHRoaXMucHJvcHMua2V5TWFwcGluZyB8fCB7fSxcblx0XHRcdF9sYWJlbEtleSA9IF9tYXBwaW5nWydsYWJlbCddIHx8ICdsYWJlbCcsXG5cdFx0XHRfbGFiZWwgPSBjb2x1bW5bX2xhYmVsS2V5XTtcblx0XHRpZighX2NvbnRlbnQpIHtcblx0XHRcdF9jb250ZW50ID0gPGRpdiBjbGFzc05hbWU9XCJjZWxsLWxhYmVsXCI+XG5cdFx0XHRcdHsgX2xhYmVsIH1cblx0XHRcdFx0eyBcblx0XHRcdFx0XHQhIWNvbHVtbi5lZGl0YWJsZSAmJiA8cG9wdXAuRHJvcGRvd24gXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjZWxsLWVkaXRvclwiIFxuXHRcdFx0XHRcdFx0cG9wb3Zlcj17e1xuXHRcdFx0XHRcdFx0XHRyZW5kZXI6IHRoaXMuX19pY29uQ2xpY2tSZW5kZXIoY29sdW1uLCBpbmRleCksXG5cdFx0XHRcdFx0XHRcdGNsb3NlYWJsZTogdHJ1ZVxuXHRcdFx0XHRcdFx0fX0gPlxuXHRcdFx0XHRcdFx0PHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFzXCIgZGF0YS1pY29uPVwiZWRpdFwiIGNsYXNzTmFtZT1cImljb24gc3ZnLWlubGluZS0tZmEgZmEtZWRpdCBmYS13LTE4IFwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1NzYgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNDAyLjYgODMuMmw5MC4yIDkwLjJjMy44IDMuOCAzLjggMTAgMCAxMy44TDI3NC40IDQwNS42bC05Mi44IDEwLjNjLTEyLjQgMS40LTIyLjktOS4xLTIxLjUtMjEuNWwxMC4zLTkyLjhMMzg4LjggODMuMmMzLjgtMy44IDEwLTMuOCAxMy44IDB6bTE2Mi0yMi45bC00OC44LTQ4LjhjLTE1LjItMTUuMi0zOS45LTE1LjItNTUuMiAwbC0zNS40IDM1LjRjLTMuOCAzLjgtMy44IDEwIDAgMTMuOGw5MC4yIDkwLjJjMy44IDMuOCAxMCAzLjggMTMuOCAwbDM1LjQtMzUuNGMxNS4yLTE1LjMgMTUuMi00MCAwLTU1LjJ6TTM4NCAzNDYuMlY0NDhINjRWMTI4aDIyOS44YzMuMiAwIDYuMi0xLjMgOC41LTMuNWw0MC00MGM3LjYtNy42IDIuMi0yMC41LTguNS0yMC41SDQ4QzIxLjUgNjQgMCA4NS41IDAgMTEydjM1MmMwIDI2LjUgMjEuNSA0OCA0OCA0OGgzNTJjMjYuNSAwIDQ4LTIxLjUgNDgtNDhWMzA2LjJjMC0xMC43LTEyLjktMTYtMjAuNS04LjVsLTQwIDQwYy0yLjIgMi4zLTMuNSA1LjMtMy41IDguNXpcIj48L3BhdGg+PC9zdmc+XG5cdFx0XHRcdFx0PC9wb3B1cC5Ecm9wZG93bj5cblx0XHRcdFx0fVxuXHRcdFx0PC9kaXY+O1xuXHRcdH1cblxuXHRcdHZhciBfY2VsbCA9IHpuLmV4dGVuZCh7IHN0eWxlOiB7fSwgY2xhc3NOYW1lOiAnJyB9LCB0aGlzLnByb3BzLmNlbGwpO1xuXHRcdHJldHVybiA8dGgga2V5PXtpbmRleH0gY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgndGhlYWQtY2VsbCcsIF9jZWxsLmNsYXNzTmFtZSl9IHN0eWxlPXtfY2VsbC5zdHlsZX0+XG5cdFx0XHR7IF9jb250ZW50IH1cblx0XHRcdHsgISFjb2x1bW4uc29ydCAmJiA8VEhlYWRTb3J0IGNsYXNzTmFtZT1cImNlbGwtc29ydFwiIG9uU29ydD17KHNvcnQpPT50aGlzLl9fb25Db2x1bW5Tb3J0KHNvcnQsIGNvbHVtbil9IC8+fVxuXHRcdDwvdGg+O1xuXHR9LFxuXHRfX3JlbmRlclJvdzogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF9lbGVtZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQodGhpcy5wcm9wcy5yb3dSZW5kZXIsIHtcblx0XHRcdHRoZWFkOiB0aGlzXG5cdFx0fSk7XG5cdFx0aWYoX2VsZW1lbnQpe1xuXHRcdFx0cmV0dXJuIF9lbGVtZW50O1xuXHRcdH1cblx0XHR2YXIgX3JvdyA9IHpuLmV4dGVuZCh7IGNsYXNzTmFtZTogJycsIHN0eWxlOiB7fSB9LCB0aGlzLnByb3BzLnJvdyk7XG5cdFx0cmV0dXJuIChcblx0XHRcdDx0ciBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwidGhlYWQtcm93XCIsIF9yb3cuY2xhc3NOYW1lKX0gc3R5bGU9e19yb3cuc3R5bGV9PlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0KHRoaXMucHJvcHMuY29sdW1uc3x8W10pLm1hcCh0aGlzLl9fcmVuZGVyQ2VsbClcblx0XHRcdFx0fVxuXHRcdFx0PC90cj5cblx0XHQpO1xuXHR9LFxuXHRyZW5kZXI6ZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHRoZWFkIGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci10YWJsZS10aGVhZFwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSwgdGhpcy5zdGF0ZS5jbGFzc05hbWUpfSBzdHlsZT17em51aS5yZWFjdC5zdHlsZSh0aGlzLnByb3BzLnN0eWxlLCB0aGlzLnN0YXRlLnN0eWxlKX0+XG5cdFx0XHRcdHt0aGlzLl9fcmVuZGVyUm93KCl9XG5cdFx0XHQ8L3RoZWFkPlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSVEhlYWRTb3J0Jyxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c29ydDogJ2ZhU29ydCcsXG5cdFx0fVxuXHR9LFxuXHRfX3JlbmRlckljb246IGZ1bmN0aW9uICgpe1xuXHRcdHN3aXRjaCh0aGlzLnN0YXRlLnNvcnQpe1xuXHRcdFx0Y2FzZSBcImZhU29ydFwiOlxuXHRcdFx0XHRyZXR1cm4gPHN2ZyBvbkNsaWNrPXt0aGlzLl9faWNvbkNsaWNrfSBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFzXCIgZGF0YS1pY29uPVwic29ydFwiIGNsYXNzTmFtZT1cImljb24gc3ZnLWlubGluZS0tZmEgZmEtc29ydCBmYS13LTEwIFwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNDEgMjg4aDIzOGMyMS40IDAgMzIuMSAyNS45IDE3IDQxTDE3NyA0NDhjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwTDI0IDMyOWMtMTUuMS0xNS4xLTQuNC00MSAxNy00MXptMjU1LTEwNUwxNzcgNjRjLTkuNC05LjQtMjQuNi05LjQtMzMuOSAwTDI0IDE4M2MtMTUuMSAxNS4xLTQuNCA0MSAxNyA0MWgyMzhjMjEuNCAwIDMyLjEtMjUuOSAxNy00MXpcIj48L3BhdGg+PC9zdmc+O1xuXHRcdFx0Y2FzZSBcImZhU29ydEFscGhhRG93blwiOlxuXHRcdFx0XHRyZXR1cm4gPHN2ZyBvbkNsaWNrPXt0aGlzLl9faWNvbkNsaWNrfSBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFzXCIgZGF0YS1pY29uPVwic29ydC1hbHBoYS1kb3duXCIgY2xhc3NOYW1lPVwiaWNvbiBzdmctaW5saW5lLS1mYSBmYS1zb3J0LWFscGhhLWRvd24gZmEtdy0xNCBcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNDQ4IDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTE3NiAzNTJoLTQ4VjQ4YTE2IDE2IDAgMCAwLTE2LTE2SDgwYTE2IDE2IDAgMCAwLTE2IDE2djMwNEgxNmMtMTQuMTkgMC0yMS4zNiAxNy4yNC0xMS4yOSAyNy4zMWw4MCA5NmExNiAxNiAwIDAgMCAyMi42MiAwbDgwLTk2QzE5Ny4zNSAzNjkuMjYgMTkwLjIyIDM1MiAxNzYgMzUyem0yNDAtNjRIMjg4YTE2IDE2IDAgMCAwLTE2IDE2djMyYTE2IDE2IDAgMCAwIDE2IDE2aDU2bC02MS4yNiA3MC40NUEzMiAzMiAwIDAgMCAyNzIgNDQ2LjM3VjQ2NGExNiAxNiAwIDAgMCAxNiAxNmgxMjhhMTYgMTYgMCAwIDAgMTYtMTZ2LTMyYTE2IDE2IDAgMCAwLTE2LTE2aC01Nmw2MS4yNi03MC40NUEzMiAzMiAwIDAgMCA0MzIgMzIxLjYzVjMwNGExNiAxNiAwIDAgMC0xNi0xNnptMzEuMDYtODUuMzhsLTU5LjI3LTE2MEExNiAxNiAwIDAgMCAzNzIuNzIgMzJoLTQxLjQ0YTE2IDE2IDAgMCAwLTE1LjA3IDEwLjYybC01OS4yNyAxNjBBMTYgMTYgMCAwIDAgMjcyIDIyNGgyNC44M2ExNiAxNiAwIDAgMCAxNS4yMy0xMS4wOGw0LjQyLTEyLjkyaDcxbDQuNDEgMTIuOTJBMTYgMTYgMCAwIDAgNDA3LjE2IDIyNEg0MzJhMTYgMTYgMCAwIDAgMTUuMDYtMjEuMzh6TTMzNS42MSAxNDRMMzUyIDk2bDE2LjM5IDQ4elwiPjwvcGF0aD48L3N2Zz47XG5cdFx0XHRjYXNlIFwiZmFTb3J0QWxwaGFVcFwiOlxuXHRcdFx0XHRyZXR1cm4gPHN2ZyBvbkNsaWNrPXt0aGlzLl9faWNvbkNsaWNrfSBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFzXCIgZGF0YS1pY29uPVwic29ydC1hbHBoYS11cFwiIGNsYXNzTmFtZT1cImljb24gc3ZnLWlubGluZS0tZmEgZmEtc29ydC1hbHBoYS11cCBmYS13LTE0IFwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA0NDggNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMTYgMTYwaDQ4djMwNGExNiAxNiAwIDAgMCAxNiAxNmgzMmExNiAxNiAwIDAgMCAxNi0xNlYxNjBoNDhjMTQuMjEgMCAyMS4zOC0xNy4yNCAxMS4zMS0yNy4zMWwtODAtOTZhMTYgMTYgMCAwIDAtMjIuNjIgMGwtODAgOTZDLTUuMzUgMTQyLjc0IDEuNzggMTYwIDE2IDE2MHptNDAwIDEyOEgyODhhMTYgMTYgMCAwIDAtMTYgMTZ2MzJhMTYgMTYgMCAwIDAgMTYgMTZoNTZsLTYxLjI2IDcwLjQ1QTMyIDMyIDAgMCAwIDI3MiA0NDYuMzdWNDY0YTE2IDE2IDAgMCAwIDE2IDE2aDEyOGExNiAxNiAwIDAgMCAxNi0xNnYtMzJhMTYgMTYgMCAwIDAtMTYtMTZoLTU2bDYxLjI2LTcwLjQ1QTMyIDMyIDAgMCAwIDQzMiAzMjEuNjNWMzA0YTE2IDE2IDAgMCAwLTE2LTE2em0zMS4wNi04NS4zOGwtNTkuMjctMTYwQTE2IDE2IDAgMCAwIDM3Mi43MiAzMmgtNDEuNDRhMTYgMTYgMCAwIDAtMTUuMDcgMTAuNjJsLTU5LjI3IDE2MEExNiAxNiAwIDAgMCAyNzIgMjI0aDI0LjgzYTE2IDE2IDAgMCAwIDE1LjIzLTExLjA4bDQuNDItMTIuOTJoNzFsNC40MSAxMi45MkExNiAxNiAwIDAgMCA0MDcuMTYgMjI0SDQzMmExNiAxNiAwIDAgMCAxNS4wNi0yMS4zOHpNMzM1LjYxIDE0NEwzNTIgOTZsMTYuMzkgNDh6XCI+PC9wYXRoPjwvc3ZnPjtcblx0XHR9XHRcblx0fSxcblx0cmVuZGVyOmZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItdGhlYWQtc29ydCcsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9PlxuXHRcdFx0XHR7dGhpcy5fX3JlbmRlckljb24oKX1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFJlYWN0RE9NID0gem51aS5SZWFjdERPTSB8fCByZXF1aXJlKCdyZWFjdC1kb20nKTtcbnZhciBUQ2VsbCA9IHJlcXVpcmUoJy4vVENlbGwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUlRSb3cnLFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNsYXNzTmFtZTogJycsXG5cdFx0XHRzdHlsZToge31cblx0XHR9XG5cdH0sXG5cdF9fZ2V0VGFyZ2V0VEQ6IGZ1bmN0aW9uICh0YXJnZXQpIHtcblx0XHRpZih0YXJnZXQudGFnTmFtZSE9PSdURCcpe1xuXHRcdFx0cmV0dXJuIHRoaXMuX19nZXRUYXJnZXRURCh0YXJnZXQucGFyZW50Tm9kZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0YXJnZXQ7XG5cdFx0fVxuXHR9LFxuXHRfX29uUm93Q2xpY2s6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0dmFyIF90ZCA9IHRoaXMuX19nZXRUYXJnZXRURChldmVudC50YXJnZXQpLFxuXHRcdFx0X3RyID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XG5cdFx0ZXZlbnQuZGF0YSA9IHtcblx0XHRcdHRkOiBfdGQsXG5cdFx0XHR0cjogX3RyLFxuXHRcdFx0dHJvdzogdGhpc1xuXHRcdH07XG5cdFx0dGhpcy5wcm9wcy5vbkNsaWNrICYmIHRoaXMucHJvcHMub25DbGljayhldmVudCk7XG5cdFx0dGhpcy5wcm9wcy5vblJvd0NsaWNrICYmIHRoaXMucHJvcHMub25Sb3dDbGljayhldmVudCk7XG5cdH0sXG5cdF9fY2VsbFJlbmRlcjogZnVuY3Rpb24gKGNvbHVtbiwgaW5kZXgpe1xuXHRcdGlmKCF6bi5pcyhjb2x1bW4sICdvYmplY3QnKSkgeyByZXR1cm4gbnVsbDt9XG5cdFx0dmFyIF9wcm9wcyA9IHpuLmV4dGVuZCh7XG5cdFx0XHRjb2x1bW46IGNvbHVtbixcblx0XHRcdHRyb3c6IHRoaXMsXG5cdFx0XHRjZWxsSW5kZXg6IGluZGV4LFxuXHRcdFx0ZGF0YTogdGhpcy5wcm9wcy5kYXRhLFxuXHRcdFx0dGJvZHk6IHRoaXMucHJvcHMudGJvZHlcblx0XHR9LCB0aGlzLnByb3BzLmNlbGwsIGNvbHVtbik7XG5cdFx0dmFyIF9lbGVtZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQodGhpcy5wcm9wcy5jZWxsUmVuZGVyLCBfcHJvcHMpO1xuXG5cdFx0aWYoX2VsZW1lbnQpe1xuXHRcdFx0cmV0dXJuIF9lbGVtZW50O1xuXHRcdH1cblxuXHRcdHJldHVybiA8VENlbGwga2V5PXtpbmRleH0gey4uLl9wcm9wc30gb25DZWxsQ2xpY2s9e3RoaXMucHJvcHMub25DZWxsQ2xpY2t9IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3Ryb3ctY2VsbCcsIF9wcm9wcy5jbGFzc05hbWUpfSAvPjtcblx0fSxcblx0cmVuZGVyOmZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDx0ciBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd6ci10YWJsZS10cm93JywgdGhpcy5wcm9wcy5jbGFzc05hbWUsIHRoaXMuc3RhdGUuY2xhc3NOYW1lKX0gc3R5bGU9e3pudWkucmVhY3Quc3R5bGUodGhpcy5wcm9wcy5zdHlsZSwgdGhpcy5zdGF0ZS5zdHlsZSl9XG5cdFx0XHRcdGRhdGEtYWN0aXZlPXt0aGlzLnByb3BzLmFjdGl2ZX0gXG5cdFx0XHRcdGRhdGEtY2hlY2tlZD17dGhpcy5wcm9wcy5jaGVja2VkfSBcblx0XHRcdFx0b25DbGljaz17dGhpcy5fX29uUm93Q2xpY2t9PlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0KHRoaXMucHJvcHMuY29sdW1uc3x8W10pLm1hcCh0aGlzLl9fY2VsbFJlbmRlcilcblx0XHRcdFx0fVxuXHRcdFx0PC90cj5cblx0XHQpO1xuXHR9XG59KTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIENvbGdyb3VwOiByZXF1aXJlKCcuL0NvbGdyb3VwJyksXG4gICAgVEZpbHRlcjogcmVxdWlyZSgnLi9URmlsdGVyJyksXG4gICAgVEJvZHk6IHJlcXVpcmUoJy4vVEJvZHknKSxcbiAgICBUQ2VsbDogcmVxdWlyZSgnLi9UQ2VsbCcpLFxuICAgIFRGb290OiByZXF1aXJlKCcuL1RGb290JyksXG4gICAgVEhlYWQ6IHJlcXVpcmUoJy4vVEhlYWQnKSxcbiAgICBUUm93OiByZXF1aXJlKCcuL1RSb3cnKVxufTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcIlJlYWN0XCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiUmVhY3RET01cIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJmaWx0ZXJcIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJpbnB1dFwiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcImpzb25cIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJwYWdlclwiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcInBvcHVwXCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wic2VsZWN0b3JcIl07IH0oKSk7Il0sInNvdXJjZVJvb3QiOiIifQ==