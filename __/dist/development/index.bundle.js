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

var SVGIcon = __webpack_require__(/*! znui-react-icon */ "znui-react-icon").SVGIcon;

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
      }, /*#__PURE__*/React.createElement(SVGIcon, {
        icon: "faEdit"
      })));
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

var SVGIcon = __webpack_require__(/*! znui-react-icon */ "znui-react-icon").SVGIcon;

module.exports = React.createClass({
  displayName: 'ZRTHeadSort',
  getInitialState: function getInitialState() {
    return {
      sort: 'faSort'
    };
  },
  __iconClick: function __iconClick() {
    if (this.state.sort == 'faSort') {
      this.state.sort = 'faSortAlphaDown';
    } else if (this.state.sort == 'faSortAlphaDown') {
      this.state.sort = 'faSortAlphaUp';
    } else if (this.state.sort == 'faSortAlphaUp') {
      this.state.sort = 'faSortAlphaDown';
    }

    this.forceUpdate();
    this.props.onSort && this.props.onSort(this.state.sort);
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname('zr-thead-sort', this.props.className),
      style: this.props.style
    }, /*#__PURE__*/React.createElement(SVGIcon, {
      onClick: this.__iconClick,
      icon: this.state.sort
    }));
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

/***/ "znui-react-icon":
/*!***********************!*\
  !*** external "icon" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["icon"]; }());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vVGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vVGFibGVFZGl0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vVGFibGVQYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9jZWxsL0NoZWNrYm94LmpzIiwid2VicGFjazovLy8uL2NlbGwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vdGFibGUvQ29sZ3JvdXAuanMiLCJ3ZWJwYWNrOi8vLy4vdGFibGUvVEJvZHkuanMiLCJ3ZWJwYWNrOi8vLy4vdGFibGUvVENlbGwuanMiLCJ3ZWJwYWNrOi8vLy4vdGFibGUvVEZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi90YWJsZS9URm9vdC5qcyIsIndlYnBhY2s6Ly8vLi90YWJsZS9USGVhZC5qcyIsIndlYnBhY2s6Ly8vLi90YWJsZS9USGVhZFNvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vdGFibGUvVFJvdy5qcyIsIndlYnBhY2s6Ly8vLi90YWJsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlsdGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaWNvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImlucHV0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianNvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhZ2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicG9wdXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZWxlY3RvclwiIl0sIm5hbWVzIjpbIlJlYWN0Iiwiem51aSIsInJlcXVpcmUiLCJ0YWJsZSIsInNlbGVjdG9yIiwibW9kdWxlIiwiZXhwb3J0cyIsImNyZWF0ZUNsYXNzIiwiZGlzcGxheU5hbWUiLCJnZXRJbml0aWFsU3RhdGUiLCJkYXRhIiwiY29sdW1ucyIsImNoZWNrZWRzIiwiX19zb3J0RnVuY3Rpb24iLCJuZXh0IiwicHJldiIsImtleSIsIl9zb3J0IiwicHJvcHMiLCJzb3J0RnVuY3Rpb24iLCJfX29uU29ydCIsInNvcnQiLCJzdGF0ZSIsImZvcmNlVXBkYXRlIiwiX19vbkZpbHRlciIsImZpbHRlciIsIm9uRmlsdGVyQ2hhbmdlIiwiX190Ym9keURhdGFSZW5kZXIiLCJ0Ym9keSIsIl9fdGJvZHlMb2FkaW5nUmVuZGVyIiwiX19vblRIZWFkQ29sdW1uQ2hhbmdlIiwiaW5kZXgiLCJfX3Rib2R5RGF0YUxvYWRlZCIsIl9yZXR1cm4iLCJvbkRhdGFMb2FkZWQiLCJzZXRTdGF0ZSIsIl9fb25EYXRhQ3JlYXRlZCIsImxpZnljeWNsZSIsIm9uRGF0YUNyZWF0ZWQiLCJyZWZyZXNoIiwicmVmcmVzaEhlYWRlcnMiLCJfX3JlbmRlclRCb2R5IiwiX2RhdGEiLCJfcmVzdWx0Iiwib25EYXRhSW5pdGlhbCIsInJlc3BvbnNlSGFuZGxlciIsIl9fcmVuZGVyIiwicmVhY3QiLCJjbGFzc25hbWUiLCJjbGFzc05hbWUiLCJzdHlsZSIsIndpZHRoIiwiZml4ZWQiLCJjZWxsUGFkZGluZyIsImNlbGxTcGFjaW5nIiwiYXR0cnMiLCJjYXB0aW9uIiwicmVuZGVyIiwiY29sZ3JvdXAiLCJrZXlNYXBwaW5nIiwidGhlYWQiLCJ0ZmlsdGVyIiwidGZvb3QiLCJjaGlsZHJlblJlbmRlciIsImNoaWxkcmVuIiwiX19pbml0Q2hlY2tib3giLCJfY2hlY2tib3giLCJoZWFkIiwiYXJndiIsIl90YWJsZSIsImp1c3RpZnlDb250ZW50IiwibGVuZ3RoIiwiZXZlbnQiLCJjaGVja2VkIiwic2xpY2UiLCJvbkNoZWNrYm94Q2hhbmdlIiwiYmluZCIsImJvZHkiLCJpbmRleE9mIiwiY2hlY2tib3giLCJzdG9wUHJvcGFnYXRpb24iLCJzcGxpY2UiLCJwdXNoIiwiX3ZhbHVlIiwiem4iLCJ0eXBlIiwiZXh0ZW5kIiwidW5zaGlmdCIsIl9fY29sdW1uc0xvYWRlZCIsImlzIiwiX3RlbXAiLCJfY29sdW1uSXRlcmF0b3IiLCJjb2x1bW5JdGVyYXRvciIsIl9jb2x1bW5zIiwibWFwIiwiY29sdW1uIiwiZGVlcEFzc2lnbiIsIm9uQ29sdW1uc0xvYWRlZCIsIl9fb25Db2x1bW5EYXRhQ3JlYXRlZCIsImxpZmVjeWNsZSIsIm9uQ29sdW1uc0NyZWF0ZWQiLCJvbkNvbHVtbkxvYWRpbmciLCJvbkNvbHVtbkxvYWRFcnJvciIsIlRhYmxlIiwiaW5wdXQiLCJfX2NlbGxDaGFuZ2UiLCJ0Y2VsbCIsIm5hbWUiLCJ2YWx1ZSIsInRyb3ciLCJfX2NvbHVtbkJvZHlSZW5kZXIiLCJfX2NvbHVtbkl0ZXJhdG9yIiwicGFnZXIiLCJjb3VudCIsImN1cnJlbnQiLCJ0b3RhbCIsInBhZ2VJbmRleCIsIl9faGFuZGxlUGFnZUNoYW5nZWQiLCJuZXdQYWdlIiwib25QYWdlQ2hhbmdlZCIsInNldFBhZ2VJbmRleCIsIl9hcmd2IiwiX19vbkRhdGFJbml0aWFsIiwiX19yZW5kZXJQYWdlciIsIl9jb2x1bW5TaXplIiwiX3N0YXRlIiwiX2VsZW1lbnQiLCJfcGFnZXJQcm9wcyIsIl9Db21wb25lbnQiLCJQYWdlciIsInBhdGgiLCJ3aW5kb3ciLCJjb21wb25lbnQiLCJjcmVhdGVSZWFjdEVsZW1lbnQiLCJwYWdlclJlbmRlciIsIl9tZXRob2QiLCJtZXRob2QiLCJfcGFyYW1zIiwiX2tleU1hcHMiLCJwYWdlU2l6ZSIsImtleU1hcHMiLCJwYXJhbXMiLCJfX29uRGF0YUxvYWRlZCIsInp4bnoiLCJjb2RlIiwiY29uc29sZSIsImVycm9yIiwiZGV0YWlsIiwiX3BhZ2VyQ291bnQiLCJNYXRoIiwiY2VpbCIsIkNoZWNrYm94IiwiX19vbkNoZWNrYm94Q2hhbmdlIiwiX19vbkhlYWRDaGFuZ2UiLCJfX29uQm9keUNoYW5nZSIsImxvZyIsImNlbGwiLCJUYWJsZUVkaXRvciIsIlRhYmxlUGFnZXIiLCJfa2V5TWFwcGluZyIsIml0ZW0iLCJfd2lkdGgiLCJUUm93IiwibG9hZGVyIiwiYWN0aXZlIiwibG9hZGluZyIsIl9fcmVuZGVyTG9hZGluZyIsImxvYWRpbmdSZW5kZXIiLCJfbG9hZGluZyIsIl9fcmVuZGVyRW1wdHkiLCJlbXB0eVJlbmRlciIsIl9lbXB0eSIsImVtcHR5IiwiX19vblJvd0NsaWNrIiwib25Sb3dDbGljayIsIl9fb25DZWxsQ2xpY2siLCJvbkNlbGxDbGljayIsIl9fcmVuZGVyUm93IiwiZWFjaFJvd0RhdGEiLCJyb3dSZW5kZXIiLCJyb3dJbmRleCIsInJvdyIsImNlbGxSZW5kZXIiLCJfX3JlbmRlckRhdGEiLCJSZWFjdERPTSIsImRpc2FibGVkIiwiX19yZW5kZXJDZWxsQ29udGVudCIsIl9yZW5kZXIiLCJjZWxsSW5kZXgiLCJfX2NlbGxDbGljayIsInRkIiwiZmluZERPTU5vZGUiLCJvbkNsaWNrIiwiX19vbkZpbHRlckNoYW5nZSIsIm9wdCIsIm9uRmlsdGVyIiwiX19vbkZpbHRlckNhbmNlbCIsIl9fcmVuZGVyQ2VsbCIsIl9jb250ZW50IiwiX2NlbGwiLCJfcm93IiwiX19yZW5kZXJDaGlsZHJlbiIsImZvb3QiLCJUSGVhZFNvcnQiLCJwb3B1cCIsIlNWR0ljb24iLCJ6cmpzb24iLCJnZXREZWZhdWx0UHJvcHMiLCJfX29uQ29sdW1uU29ydCIsIm9uU29ydCIsIl9fb25Db2x1bW5FZGl0b3JDaGFuZ2UiLCJjaGlsZCIsInJvb3QiLCJfcm9vdCIsIm9uQ29sdW1uQ2hhbmdlIiwiX19pY29uQ2xpY2tSZW5kZXIiLCJwYWRkaW5nIiwibWF4SGVpZ2h0Iiwib3ZlcmZsb3ciLCJfbWFwcGluZyIsIl9sYWJlbEtleSIsIl9sYWJlbCIsImVkaXRhYmxlIiwiY2xvc2VhYmxlIiwiX19pY29uQ2xpY2siLCJUQ2VsbCIsIl9fZ2V0VGFyZ2V0VEQiLCJ0YXJnZXQiLCJ0YWdOYW1lIiwicGFyZW50Tm9kZSIsIl90ZCIsIl90ciIsInRyIiwiX19jZWxsUmVuZGVyIiwiX3Byb3BzIiwiQ29sZ3JvdXAiLCJURmlsdGVyIiwiVEJvZHkiLCJURm9vdCIsIlRI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QS9DLGFBQWEsbUNBQW1DLEVBQUUsSTs7Ozs7Ozs7Ozs7QUNBbEQsYUFBYSxpQ0FBaUMsRUFBRSxJOzs7Ozs7Ozs7OztBQ0FoRCxhQUFhLCtCQUErQixFQUFFLEk7Ozs7Ozs7Ozs7O0FDQTlDLGFBQWEsZ0NBQWdDLEVBQUUsSTs7Ozs7Ozs7Ozs7QUNBL0MsYUFBYSwrQkFBK0IsRUFBRSxJOzs7Ozs7Ozs7OztBQ0E5QyxhQUFhLGdDQUFnQyxFQUFFLEk7Ozs7Ozs7Ozs7O0FDQS9DLGFBQWEsZ0NBQWdDLEVBQUUsSTs7Ozs7Ozs7Ozs7QUNBL0MsYUFBYSxtQ0FBbUMsRUFBRSxJIiwiZmlsZSI6Ii4vZGlzdC9kZXZlbG9wbWVudC9pbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIHRhYmxlID0gcmVxdWlyZSgnLi90YWJsZS9pbmRleCcpO1xudmFyIHNlbGVjdG9yID0gcmVxdWlyZSgnem51aS1yZWFjdC1zZWxlY3RvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSVGFibGUnLFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRkYXRhOiBbXSwgXG5cdFx0XHRjb2x1bW5zOiBbXSxcblx0XHRcdGNoZWNrZWRzOiBbXVxuXHRcdH07XG5cdH0sXG5cdF9fc29ydEZ1bmN0aW9uOiBmdW5jdGlvbiAobmV4dCwgcHJldiwga2V5LCBfc29ydCl7XG5cdFx0aWYodGhpcy5wcm9wcy5zb3J0RnVuY3Rpb24pIHtcblx0XHRcdHJldHVybiB0aGlzLnByb3BzLnNvcnRGdW5jdGlvbihuZXh0LCBwcmV2LCBrZXksIF9zb3J0KTtcblx0XHR9XG5cdFx0aWYoX3NvcnQ9PSdkZXNjJyl7XG5cdFx0XHRpZihuZXh0W2tleV0gPiBwcmV2W2tleV0pe1xuXHRcdFx0XHRyZXR1cm4gMTtcblx0XHRcdH1lbHNlIGlmKG5leHRba2V5XSA9PSBwcmV2W2tleV0pe1xuXHRcdFx0XHRyZXR1cm4gMDtcblx0XHRcdH1lbHNlIGlmKG5leHRba2V5XSA8IHByZXZba2V5XSl7XG5cdFx0XHRcdHJldHVybiAtMTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoX3NvcnQ9PSdhc2MnKXtcblx0XHRcdGlmKG5leHRba2V5XSA8IHByZXZba2V5XSl7XG5cdFx0XHRcdHJldHVybiAxO1xuXHRcdFx0fWVsc2UgaWYobmV4dFtrZXldID09IHByZXZba2V5XSl7XG5cdFx0XHRcdHJldHVybiAwO1xuXHRcdFx0fWVsc2UgaWYobmV4dFtrZXldID4gcHJldltrZXldKXtcblx0XHRcdFx0cmV0dXJuIC0xO1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0X19vblNvcnQ6IGZ1bmN0aW9uIChzb3J0KXtcblx0XHR2YXIgX3NvcnQgPSBudWxsO1xuXHRcdGZvcih2YXIga2V5IGluIHNvcnQpe1xuXHRcdFx0X3NvcnQgPSBzb3J0W2tleV1cblx0XHRcdHRoaXMuc3RhdGUuZGF0YSA9IHRoaXMuc3RhdGUuZGF0YS5zb3J0KChuZXh0LCBwcmV2KSA9PiB0aGlzLl9fc29ydEZ1bmN0aW9uKG5leHQsIHByZXYsIGtleSwgX3NvcnQpKTtcblx0XHR9XG5cblx0XHR0aGlzLmZvcmNlVXBkYXRlKCk7XG5cdH0sXG5cdF9fb25GaWx0ZXI6IGZ1bmN0aW9uIChmaWx0ZXIpe1xuXHRcdHRoaXMucHJvcHMub25GaWx0ZXJDaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkZpbHRlckNoYW5nZShmaWx0ZXIsIHRoaXMuc3RhdGUuZGF0YSwgdGhpcyk7XG5cdH0sXG5cdF9fdGJvZHlEYXRhUmVuZGVyOiBmdW5jdGlvbiAoY29sdW1ucyl7XG5cdFx0cmV0dXJuIDx0YWJsZS5UQm9keSB7Li4udGhpcy5wcm9wcy50Ym9keX0gY29sdW1ucz17Y29sdW1uc30gZGF0YT17dGhpcy5zdGF0ZS5kYXRhfSB0YWJsZT17dGhpc30gLz47XG5cdH0sXG5cdF9fdGJvZHlMb2FkaW5nUmVuZGVyOiBmdW5jdGlvbiAoY29sdW1ucyl7XG5cdFx0cmV0dXJuIDx0YWJsZS5UQm9keSB7Li4udGhpcy5wcm9wcy50Ym9keX0gY29sdW1ucz17Y29sdW1uc30gbG9hZGluZz17dHJ1ZX0gdGFibGU9e3RoaXN9IC8+O1xuXHR9LFxuXHRfX29uVEhlYWRDb2x1bW5DaGFuZ2U6IGZ1bmN0aW9uIChkYXRhLCBpbmRleCl7XG5cdFx0aWYodGhpcy5zdGF0ZS5jb2x1bW5zKXtcblx0XHRcdHRoaXMuc3RhdGUuY29sdW1uc1tpbmRleF0gPSBkYXRhO1xuXHRcdFx0dGhpcy5mb3JjZVVwZGF0ZSgpO1xuXHRcdH1cblx0fSxcblx0X190Ym9keURhdGFMb2FkZWQ6IGZ1bmN0aW9uIChkYXRhKSB7XG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLm9uRGF0YUxvYWRlZCAmJiB0aGlzLnByb3BzLm9uRGF0YUxvYWRlZChkYXRhLCB0aGlzKTtcblx0XHRpZihfcmV0dXJuICE9PSBmYWxzZSl7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgZGF0YTogZGF0YSB9KTtcblx0XHR9XG5cdH0sXG5cdF9fb25EYXRhQ3JlYXRlZDogZnVuY3Rpb24gKGRhdGEsIGxpZnljeWNsZSl7XG5cdFx0dGhpcy5kYXRhID0gZGF0YTtcblx0XHR0aGlzLnByb3BzLm9uRGF0YUNyZWF0ZWQgJiYgdGhpcy5wcm9wcy5vbkRhdGFDcmVhdGVkKGRhdGEsIHRoaXMsIGxpZnljeWNsZSk7XG5cdH0sXG5cdHJlZnJlc2g6IGZ1bmN0aW9uICgpe1xuXHRcdGlmKHRoaXMuZGF0YSl7XG5cdFx0XHR0aGlzLnN0YXRlLmNoZWNrZWRzID0gW107XG5cdFx0XHR0aGlzLmRhdGEucmVmcmVzaCgpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXHRyZWZyZXNoSGVhZGVyczogZnVuY3Rpb24gKCl7XG5cdFx0aWYodGhpcy5jb2x1bW5zKXtcblx0XHRcdHRoaXMuY29sdW1ucy5yZWZyZXNoKCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cdF9fcmVuZGVyVEJvZHk6IGZ1bmN0aW9uIChjb2x1bW5zKXtcblx0XHR2YXIgX2RhdGEgPSB0aGlzLnByb3BzLmRhdGEgfHwgdGhpcy5wcm9wcy50Ym9keS5kYXRhO1xuXHRcdHZhciBfcmVzdWx0ID0gdGhpcy5wcm9wcy5vbkRhdGFJbml0aWFsICYmIHRoaXMucHJvcHMub25EYXRhSW5pdGlhbChfZGF0YSwgdGhpcyk7XG5cdFx0aWYoX3Jlc3VsdCl7XG5cdFx0XHRfZGF0YSA9IF9yZXN1bHQ7XG5cdFx0fVxuXHRcdHJldHVybiA8em51aS5yZWFjdC5EYXRhTGlmZWN5Y2xlIGRhdGE9e19kYXRhfSBcblx0XHRcdFx0XHRkYXRhUmVuZGVyPXsoKT0+dGhpcy5fX3Rib2R5RGF0YVJlbmRlcihjb2x1bW5zKX0gXG5cdFx0XHRcdFx0bG9hZGluZ1JlbmRlcj17KCk9PnRoaXMuX190Ym9keUxvYWRpbmdSZW5kZXIoY29sdW1ucyl9XG5cdFx0XHRcdFx0cmVzcG9uc2VIYW5kbGVyPXt0aGlzLnByb3BzLnJlc3BvbnNlSGFuZGxlcn1cblx0XHRcdFx0XHRvbkRhdGFDcmVhdGVkPXt0aGlzLl9fb25EYXRhQ3JlYXRlZH1cblx0XHRcdFx0XHRvbkZpbmlzaGVkPXt0aGlzLl9fdGJvZHlEYXRhTG9hZGVkfSAvPjtcblx0fSxcblx0X19yZW5kZXI6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBjb2x1bW5zID0gdGhpcy5zdGF0ZS5jb2x1bW5zO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8dGFibGUgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXRhYmxlXCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gXG5cdFx0XHRcdHN0eWxlPXt6bnVpLnJlYWN0LnN0eWxlKHRoaXMucHJvcHMuc3R5bGUsIHsgd2lkdGg6IHRoaXMucHJvcHMud2lkdGggfSl9IFxuXHRcdFx0XHRkYXRhLWZpeGVkPXt0aGlzLnByb3BzLmZpeGVkfSBcdFxuXHRcdFx0XHRjZWxsUGFkZGluZz17dGhpcy5wcm9wcy5jZWxsUGFkZGluZyB8fCAwfSBcblx0XHRcdFx0Y2VsbFNwYWNpbmc9e3RoaXMucHJvcHMuY2VsbFNwYWNpbmcgfHwgMH0gey4uLnRoaXMucHJvcHMuYXR0cnN9PlxuXHRcdFx0XHR7ICEhdGhpcy5wcm9wcy5jYXB0aW9uICYmIDxjYXB0aW9uIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jYXB0aW9uLmNsYXNzTmFtZX0gc3R5bGU9e3RoaXMucHJvcHMuY2FwdGlvbi5zdHlsZX0+e3RoaXMucHJvcHMuY2FwdGlvbi5yZW5kZXJ9PC9jYXB0aW9uPiB9XG5cdFx0XHRcdHsgISF0aGlzLnByb3BzLmNvbGdyb3VwICYmIDx0YWJsZS5Db2xncm91cCBrZXlNYXBwaW5nPXt0aGlzLnByb3BzLmtleU1hcHBpbmd9IGNvbHVtbnM9e2NvbHVtbnN9IHsuLi50aGlzLnByb3BzLmNvbGdyb3VwfSAvPiB9XG5cdFx0XHRcdHsgISF0aGlzLnByb3BzLnRoZWFkICYmIDx0YWJsZS5USGVhZCBvblNvcnQ9e3RoaXMuX19vblNvcnR9IG9uQ29sdW1uQ2hhbmdlPXt0aGlzLl9fb25USGVhZENvbHVtbkNoYW5nZX0gY29sdW1ucz17Y29sdW1uc30ga2V5TWFwcGluZz17dGhpcy5wcm9wcy5rZXlNYXBwaW5nfSB7Li4udGhpcy5wcm9wcy50aGVhZH0gdGFibGU9e3RoaXN9IC8+fVxuXHRcdFx0XHR7ICEhdGhpcy5wcm9wcy50ZmlsdGVyICYmIDx0YWJsZS5URmlsdGVyIG9uRmlsdGVyPXt0aGlzLl9fb25GaWx0ZXJ9IGNvbHVtbnM9e2NvbHVtbnN9IHsuLi50aGlzLnByb3BzLnRmaWx0ZXJ9IHRhYmxlPXt0aGlzfSAvPn1cblx0XHRcdFx0eyAodGhpcy5wcm9wcy50Ym9keSB8fCB0aGlzLnByb3BzLmRhdGEpICYmIHRoaXMuX19yZW5kZXJUQm9keShjb2x1bW5zKSB9XG5cdFx0XHRcdHsgISF0aGlzLnByb3BzLnRmb290ICYmIDx0YWJsZS5URm9vdCBjb2x1bW5zPXtjb2x1bW5zfSB7Li4udGhpcy5wcm9wcy50Zm9vdH0gdGFibGU9e3RoaXN9IC8+fVxuXHRcdFx0XHR7IHRoaXMucHJvcHMuY2hpbGRyZW5SZW5kZXIgJiYgdGhpcy5wcm9wcy5jaGlsZHJlblJlbmRlcihjb2x1bW5zLCB0aGlzKSB9XG5cdFx0XHRcdHsgdGhpcy5wcm9wcy5jaGlsZHJlbiB9XG5cdFx0XHQ8L3RhYmxlPlxuXHRcdCk7XG5cdH0sXG5cdF9faW5pdENoZWNrYm94OiBmdW5jdGlvbiAoY29sdW1ucyl7XG5cdFx0dmFyIF9jaGVja2JveCA9IHtcblx0XHRcdFx0d2lkdGg6IDYwLFxuXHRcdFx0XHRoZWFkOiBmdW5jdGlvbiAoYXJndil7XG5cdFx0XHRcdFx0dmFyIF90YWJsZSA9IGFyZ3YudGhlYWQucHJvcHMudGFibGU7XG5cdFx0XHRcdFx0aWYoIV90YWJsZSkgcmV0dXJuO1xuXHRcdFx0XHRcdHJldHVybiA8c2VsZWN0b3IuQ2hlY2tib3hcblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgfX1cblx0XHRcdFx0XHRcdFx0XHRrZXk9e3RoaXMuc3RhdGUuY2hlY2tlZHMubGVuZ3RofVxuXHRcdFx0XHRcdFx0XHRcdHRleHQ9eycoJyArIF90YWJsZS5zdGF0ZS5jaGVja2Vkcy5sZW5ndGggKycpJ31cblx0XHRcdFx0XHRcdFx0XHRjaGVja2VkPXshIV90YWJsZS5zdGF0ZS5kYXRhLmxlbmd0aCAmJiBfdGFibGUuc3RhdGUuY2hlY2tlZHMubGVuZ3RoID09PSBfdGFibGUuc3RhdGUuZGF0YS5sZW5ndGh9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhldmVudCk9Pntcblx0XHRcdFx0XHRcdFx0XHRcdGlmKGV2ZW50LmNoZWNrZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zdGF0ZS5jaGVja2VkcyA9IHRoaXMuc3RhdGUuZGF0YS5zbGljZSgwKTtcblx0XHRcdFx0XHRcdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnN0YXRlLmNoZWNrZWRzID0gW107XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmZvcmNlVXBkYXRlKCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLm9uQ2hlY2tib3hDaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkNoZWNrYm94Q2hhbmdlKHRoaXMuc3RhdGUuY2hlY2tlZHMsIHRoaXMpO1xuXHRcdFx0XHRcdFx0XHRcdH19IC8+O1xuXHRcdFx0XHR9LmJpbmQodGhpcyksXG5cdFx0XHRcdGJvZHk6IGZ1bmN0aW9uIChhcmd2KXtcblx0XHRcdFx0XHR2YXIgX2RhdGEgPSBhcmd2LmRhdGE7XG5cdFx0XHRcdFx0cmV0dXJuIDxzZWxlY3Rvci5VbmNvbnRyb2xDaGVja2JveCBcblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgfX1cblx0XHRcdFx0XHRcdFx0XHRjaGVja2VkPXt0aGlzLnN0YXRlLmNoZWNrZWRzLmluZGV4T2YoX2RhdGEpICE9PSAtMX1cblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoZXZlbnQsIGNoZWNrYm94KT0+e1xuXHRcdFx0XHRcdFx0XHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZihjaGVja2JveC5wcm9wcy5jaGVja2VkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc3RhdGUuY2hlY2tlZHMuc3BsaWNlKHRoaXMuc3RhdGUuY2hlY2tlZHMuaW5kZXhPZihfZGF0YSksIDEpOyBcblx0XHRcdFx0XHRcdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnN0YXRlLmNoZWNrZWRzLnB1c2goX2RhdGEpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5mb3JjZVVwZGF0ZSgpO1xuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5vbkNoZWNrYm94Q2hhbmdlICYmIHRoaXMucHJvcHMub25DaGVja2JveENoYW5nZSh0aGlzLnN0YXRlLmNoZWNrZWRzLCB0aGlzKTtcblx0XHRcdFx0XHRcdFx0XHR9fSAvPjtcblx0XHRcdFx0fS5iaW5kKHRoaXMpXG5cdFx0XHR9LFxuXHRcdFx0X3ZhbHVlID0gdGhpcy5wcm9wcy5jaGVja2JveDtcblx0XHRzd2l0Y2goem4udHlwZShfdmFsdWUpKSB7XG5cdFx0XHRjYXNlICdvYmplY3QnOlxuXHRcdFx0XHRfY2hlY2tib3ggPSB6bi5leHRlbmQoe30sIF92YWx1ZSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnbnVtYmVyJzpcblx0XHRcdFx0X2NoZWNrYm94LndpZHRoID0gX3ZhbHVlO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdFx0aWYoX3ZhbHVlKSB7XG5cdFx0XHRjb2x1bW5zID0gY29sdW1ucy51bnNoaWZ0KF9jaGVja2JveCk7XG5cdFx0fVxuXHR9LFxuXHRfX2NvbHVtbnNMb2FkZWQ6IGZ1bmN0aW9uIChjb2x1bW5zKXtcblx0XHRpZihjb2x1bW5zICYmIHpuLmlzKGNvbHVtbnMsICdhcnJheScpKXtcblx0XHRcdHZhciBfdGVtcCA9IG51bGwsXG5cdFx0XHRcdF9yZXN1bHQgPSBudWxsLFxuXHRcdFx0XHRfY29sdW1uSXRlcmF0b3IgPSB0aGlzLnByb3BzLmNvbHVtbkl0ZXJhdG9yLFxuXHRcdFx0XHRfY29sdW1ucyA9IGNvbHVtbnMubWFwKGZ1bmN0aW9uIChjb2x1bW4pe1xuXHRcdFx0XHRcdF90ZW1wID0gem4uZGVlcEFzc2lnbih7fSwgY29sdW1uKTtcblx0XHRcdFx0XHRfcmVzdWx0ID0gX2NvbHVtbkl0ZXJhdG9yICYmIF9jb2x1bW5JdGVyYXRvcihfdGVtcCwgdGhpcyk7XG5cdFx0XHRcdFx0aWYoX3Jlc3VsdCA9PT0gZmFsc2UpIHJldHVybiBudWxsO1xuXHRcdFx0XHRcdGlmKHR5cGVvZiBfcmVzdWx0ID09ICdvYmplY3QnKSByZXR1cm4gX3Jlc3VsdDtcblxuXHRcdFx0XHRcdHJldHVybiBfdGVtcDtcblx0XHRcdFx0fS5iaW5kKHRoaXMpKTtcblx0XHRcdHRoaXMuX19pbml0Q2hlY2tib3goX2NvbHVtbnMpO1xuXHRcdFx0dGhpcy5wcm9wcy5vbkNvbHVtbnNMb2FkZWQgJiYgdGhpcy5wcm9wcy5vbkNvbHVtbnNMb2FkZWQoY29sdW1ucyk7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgY29sdW1uczogX2NvbHVtbnMgfSk7XG5cdFx0fVxuXHR9LFxuXHRfX29uQ29sdW1uRGF0YUNyZWF0ZWQ6IGZ1bmN0aW9uIChkYXRhLCBsaWZlY3ljbGUpe1xuXHRcdHRoaXMuY29sdW1ucyA9IGRhdGE7XG5cdFx0dGhpcy5wcm9wcy5vbkNvbHVtbnNDcmVhdGVkICYmIHRoaXMucHJvcHMub25Db2x1bW5zQ3JlYXRlZChkYXRhLCB0aGlzLCBsaWZlY3ljbGUpO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIDx6bnVpLnJlYWN0LkRhdGFMaWZlY3ljbGVcblx0XHRcdFx0XHRkYXRhPXt0aGlzLnByb3BzLmNvbHVtbnN9XG5cdFx0XHRcdFx0cmVuZGVyPXt0aGlzLl9fcmVuZGVyfVxuXHRcdFx0XHRcdHJlc3BvbnNlSGFuZGxlcj17dGhpcy5wcm9wcy5yZXNwb25zZUhhbmRsZXJ9XG5cdFx0XHRcdFx0b25Mb2FkaW5nPXt0aGlzLnByb3BzLm9uQ29sdW1uTG9hZGluZ31cblx0XHRcdFx0XHRvbkZpbmlzaGVkPXt0aGlzLl9fY29sdW1uc0xvYWRlZH1cblx0XHRcdFx0XHRvbkVycm9yPXt0aGlzLnByb3BzLm9uQ29sdW1uTG9hZEVycm9yfVxuXHRcdFx0XHRcdG9uRGF0YUNyZWF0ZWQ9e3RoaXMuX19vbkNvbHVtbkRhdGFDcmVhdGVkfSAvPjtcblx0fVxufSk7IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFRhYmxlID0gcmVxdWlyZSgnLi9UYWJsZScpO1xudmFyIGlucHV0ID0gcmVxdWlyZSgnem51aS1yZWFjdC1pbnB1dCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSVGFibGVFZGl0b3InLFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRjb2x1bW5zOiBbXVxuXHRcdH07XG5cdH0sXG5cdF9fY2VsbENoYW5nZTogZnVuY3Rpb24gKGV2ZW50LCBhcmd2KXtcblx0XHQvL2NvbnNvbGUubG9nKGV2ZW50KTtcblx0XHQvL2NvbnNvbGUubG9nKGFyZ3YpO1xuXHRcdGFyZ3YuZGF0YVthcmd2LnRjZWxsLnByb3BzLm5hbWVdID0gZXZlbnQudmFsdWU7XG5cdFx0YXJndi50cm93LmZvcmNlVXBkYXRlKCk7XG5cdH0sXG5cdF9fY29sdW1uQm9keVJlbmRlcjogZnVuY3Rpb24gKGFyZ3Ype1xuXHRcdHJldHVybiA8aW5wdXQuSW5wdXQga2V5PXthcmd2LnZhbHVlfSB2YWx1ZT17YXJndi52YWx1ZX0gb25FbnRlcj17KGV2ZW50KT0+dGhpcy5fX2NlbGxDaGFuZ2UoZXZlbnQsIGFyZ3YpfSAvPjtcblx0fSxcblx0X19jb2x1bW5JdGVyYXRvcjogZnVuY3Rpb24gKGNvbHVtbiwgdGFibGUpe1xuXHRcdGlmKCFjb2x1bW4uYm9keSkge1xuXHRcdFx0Y29sdW1uLmJvZHkgPSB0aGlzLl9fY29sdW1uQm9keVJlbmRlcjtcblx0XHR9XG5cblx0XHRyZXR1cm4gY29sdW1uO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxUYWJsZSB7Li4udGhpcy5wcm9wc30gY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItdGFibGUtZWRpdG9yJywgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBjb2x1bW5JdGVyYXRvcj17dGhpcy5fX2NvbHVtbkl0ZXJhdG9yfSAvPlxuXHRcdClcblx0fVxufSk7IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFRhYmxlID0gcmVxdWlyZSgnLi9UYWJsZScpO1xudmFyIHBhZ2VyID0gcmVxdWlyZSgnem51aS1yZWFjdC1wYWdlcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSVGFibGVQYWdlcicsXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNvdW50OiAwLFxuXHRcdFx0Y3VycmVudDogMSxcblx0XHRcdGRhdGE6IFtdLFxuXHRcdFx0dG90YWw6IDAsXG5cdFx0XHRwYWdlSW5kZXg6IHRoaXMucHJvcHMucGFnZUluZGV4IHx8IDFcblx0XHR9O1xuXHR9LFxuXHRfX2hhbmRsZVBhZ2VDaGFuZ2VkOiBmdW5jdGlvbiAobmV3UGFnZSl7XG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLm9uUGFnZUNoYW5nZWQgJiYgdGhpcy5wcm9wcy5vblBhZ2VDaGFuZ2VkKG5ld1BhZ2UsIHRoaXMpO1xuXHRcdGlmKF9yZXR1cm4gIT09IGZhbHNlKSB7XG5cdFx0XHR0aGlzLnNldFBhZ2VJbmRleChuZXdQYWdlKTtcblx0XHR9XG5cdH0sXG5cdHNldFBhZ2VJbmRleDogZnVuY3Rpb24gKHBhZ2VJbmRleCl7XG5cdFx0aWYodGhpcy5kYXRhKXtcblx0XHRcdHRoaXMuc3RhdGUucGFnZUluZGV4ID0gcGFnZUluZGV4O1xuXHRcdFx0dGhpcy5zdGF0ZS5jdXJyZW50ID0gcGFnZUluZGV4O1xuXHRcdFx0dGhpcy5mb3JjZVVwZGF0ZSgpO1xuXHRcdFx0dGhpcy5kYXRhLl9hcmd2ID0gdGhpcy5fX29uRGF0YUluaXRpYWwodGhpcy5wcm9wcy5kYXRhKTtcblx0XHRcdHRoaXMuZGF0YS5yZWZyZXNoKCk7XG5cdFx0fVxuXHR9LFxuXHRfX3JlbmRlclBhZ2VyOiBmdW5jdGlvbiAoY29sdW1ucywgdGFibGUpe1xuXHRcdHZhciBfY29sdW1uU2l6ZSA9IGNvbHVtbnMubGVuZ3RoO1xuXHRcdGlmKCFfY29sdW1uU2l6ZSl7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0dmFyIF9zdGF0ZSA9IHRoaXMuc3RhdGUsXG5cdFx0XHRfZWxlbWVudCA9IG51bGwsXG5cdFx0XHRfcGFnZXJQcm9wcyA9IHtcblx0XHRcdFx0dG90YWw6IF9zdGF0ZS50b3RhbCxcblx0XHRcdFx0Y291bnQ6IF9zdGF0ZS5jb3VudCxcblx0XHRcdFx0Y3VycmVudDogX3N0YXRlLmN1cnJlbnQsXG5cdFx0XHRcdG9uUGFnZUNoYW5nZWQ6IHRoaXMuX19oYW5kbGVQYWdlQ2hhbmdlZFxuXHRcdFx0fSxcblx0XHRcdF9Db21wb25lbnQgPSB0aGlzLnByb3BzLnBhZ2VyIHx8IHBhZ2VyLlBhZ2VyO1xuXHRcdGlmKHpuLmlzKF9Db21wb25lbnQsICdzdHJpbmcnKSl7XG5cdFx0XHRfQ29tcG9uZW50ID0gem4ucGF0aCh3aW5kb3csIF9Db21wb25lbnQpO1xuXHRcdH1lbHNlIGlmKHpuLmlzKF9Db21wb25lbnQsICdvYmplY3QnKSAmJiBfQ29tcG9uZW50LmNvbXBvbmVudCl7XG5cdFx0XHRfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KF9Db21wb25lbnQuY29tcG9uZW50LCB6bi5leHRlbmQoe30sIF9Db21wb25lbnQsIF9wYWdlclByb3BzKSk7XG5cdFx0fVxuXG5cdFx0aWYodGhpcy5wcm9wcy5wYWdlclJlbmRlcil7XG5cdFx0XHRfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMucGFnZXJSZW5kZXIsIF9wYWdlclByb3BzKTtcblx0XHR9XG5cblx0XHRpZighX2VsZW1lbnQgJiYgX0NvbXBvbmVudCAmJiB6bi5pcyhfQ29tcG9uZW50LCAnZnVuY3Rpb24nKSl7XG5cdFx0IFx0X2VsZW1lbnQgPSA8X0NvbXBvbmVudCB7Li4uX3BhZ2VyUHJvcHN9IC8+O1xuXHRcdH1cblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8dGZvb3QgY2xhc3NOYW1lPVwidGFibGUtcGFnZXJcIj5cblx0XHRcdFx0PHRyIGNsYXNzTmFtZT1cInBhZ2VyLXJvd1wiPlxuXHRcdFx0XHRcdDx0ZCBjb2xTcGFuPXtfY29sdW1uU2l6ZX0+e19lbGVtZW50fTwvdGQ+XG5cdFx0XHRcdDwvdHI+XG5cdFx0XHQ8L3Rmb290PlxuXHRcdCk7XG5cdH0sXG5cdF9fb25EYXRhSW5pdGlhbDogZnVuY3Rpb24gKGRhdGEpe1xuXHRcdHZhciBfbWV0aG9kID0gZGF0YS5tZXRob2R8fCdwb3N0Jyxcblx0XHRcdF9wYXJhbXMgPSB7fSxcblx0XHRcdF9rZXlNYXBzID0gem4uZGVlcEFzc2lnbih7XG5cdFx0XHRcdHRvdGFsOiBcInRvdGFsXCIsXG5cdFx0XHRcdHBhZ2VJbmRleDogJ3BhZ2VJbmRleCcsXG5cdFx0XHRcdHBhZ2VTaXplOiAncGFnZVNpemUnLFxuXHRcdFx0XHRkYXRhOiAnZGF0YSdcblx0XHRcdH0sIHRoaXMucHJvcHMua2V5TWFwcyk7XG5cblx0XHRfcGFyYW1zW19rZXlNYXBzLnBhZ2VJbmRleF0gPSB0aGlzLnN0YXRlLnBhZ2VJbmRleCB8fCAxO1xuXHRcdF9wYXJhbXNbX2tleU1hcHMucGFnZVNpemVdID0gdGhpcy5wcm9wcy5wYWdlU2l6ZSB8fCAxMDtcblx0XHRpZihfbWV0aG9kID09ICdnZXQnKXtcblx0XHRcdGRhdGEgPSB6bi5kZWVwQXNzaWduKGRhdGEsIHtcblx0XHRcdFx0cGFyYW1zOiBfcGFyYW1zXG5cdFx0XHR9KTtcblx0XHR9ZWxzZXtcblx0XHRcdGRhdGEgPSB6bi5kZWVwQXNzaWduKGRhdGEsIHtcblx0XHRcdFx0ZGF0YTogX3BhcmFtc1xuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdFxuXHRcdHJldHVybiB0aGlzLnN0YXRlLmtleU1hcHMgPSBfa2V5TWFwcywgZGF0YTtcblx0fSxcblx0X19vbkRhdGFDcmVhdGVkOiBmdW5jdGlvbiAoZGF0YSwgdGFibGUpe1xuXHRcdHRoaXMuZGF0YSA9IGRhdGE7XG5cdFx0dGhpcy5wcm9wcy5vbkRhdGFDcmVhdGVkICYmIHRoaXMucHJvcHMub25EYXRhQ3JlYXRlZChkYXRhLCB0YWJsZSwgdGhpcyk7XG5cdH0sXG5cdF9fb25EYXRhTG9hZGVkOiBmdW5jdGlvbiAoZGF0YSwgdGFibGUpe1xuXHRcdGlmKHRoaXMucHJvcHMuenhueil7XG5cdFx0XHRpZih6bi5pcyhkYXRhLCAnb2JqZWN0JykgJiYgZGF0YS5jb2RlICE9IDIwMCl7XG5cdFx0XHRcdHJldHVybiBjb25zb2xlLmVycm9yKGRhdGEuZGV0YWlsKSwgZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRpZighem4uaXMoZGF0YSwgJ2FycmF5Jykpe1xuXHRcdFx0XHRyZXR1cm4gY29uc29sZS5lcnJvcihcIlRhYmxlUGFnZXIgQ29tcG9uZW50IERhdGEgVHlwZSBFcnJvci5cIiksIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0dmFyIF9kYXRhID0gZGF0YVswXSxcblx0XHRcdFx0X3BhZ2VyQ291bnQgPSBkYXRhWzFdWzBdLmNvdW50O1xuXHRcdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLm9uRGF0YUxvYWRlZCAmJiB0aGlzLnByb3BzLm9uRGF0YUxvYWRlZChfZGF0YSwgdGFibGUsIHRoaXMpO1xuXHRcdFx0aWYoX3JldHVybiAhPT0gZmFsc2Upe1xuXHRcdFx0XHR0YWJsZS5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0ZGF0YTogX2RhdGFcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdHRvdGFsOiBNYXRoLmNlaWwoX3BhZ2VyQ291bnQvdGhpcy5wcm9wcy5wYWdlU2l6ZSksXG5cdFx0XHRcdFx0Y291bnQ6IF9wYWdlckNvdW50LFxuXHRcdFx0XHRcdGN1cnJlbnQ6IHRoaXMuc3RhdGUuY3VycmVudCxcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fWVsc2V7XG5cdFx0XHRpZih6bi5pcyhkYXRhLCAnYXJyYXknKSl7XG5cdFx0XHRcdHJldHVybiBjb25zb2xlLmVycm9yKCdUaGUgZGF0YSBpcyBhcnJheSwgYnV0IGl0IG5lZWQgcmV0dXJuIG9iamVjdCcpLCBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHZhciBfZGF0YSA9IGRhdGEuZGF0YTtcblx0XHRcdHZhciBfcmV0dXJuID0gdGhpcy5wcm9wcy5vbkRhdGFMb2FkZWQgJiYgdGhpcy5wcm9wcy5vbkRhdGFMb2FkZWQoX2RhdGEsIHRhYmxlLCB0aGlzKTtcblx0XHRcdGlmKF9yZXR1cm4gIT09IGZhbHNlKXtcblx0XHRcdFx0dGFibGUuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdGRhdGE6IF9kYXRhW3RoaXMuc3RhdGUua2V5TWFwcy5kYXRhXVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0dG90YWw6IE1hdGguY2VpbChfZGF0YVt0aGlzLnN0YXRlLmtleU1hcHMudG90YWxdL3RoaXMucHJvcHMucGFnZVNpemUpLFxuXHRcdFx0XHRcdGNvdW50OiBfZGF0YVt0aGlzLnN0YXRlLmtleU1hcHMudG90YWxdLFxuXHRcdFx0XHRcdGN1cnJlbnQ6IF9kYXRhW3RoaXMuc3RhdGUua2V5TWFwcy5wYWdlSW5kZXhdLFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PFRhYmxlIHsuLi50aGlzLnByb3BzfSBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd6ci10YWJsZS1wYWdlcicsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gXG5cdFx0XHRcdGNoaWxkcmVuUmVuZGVyPXt0aGlzLl9fcmVuZGVyUGFnZXJ9XG5cdFx0XHRcdG9uRGF0YUluaXRpYWw9e3RoaXMuX19vbkRhdGFJbml0aWFsfVxuXHRcdFx0XHRvbkRhdGFDcmVhdGVkPXt0aGlzLl9fb25EYXRhQ3JlYXRlZH1cblx0XHRcdFx0b25EYXRhTG9hZGVkPXt0aGlzLl9fb25EYXRhTG9hZGVkfSAvPlxuXHRcdCk7XG5cdH1cbn0pOyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBDaGVja2JveCA9IHJlcXVpcmUoJ3pudWktcmVhY3Qtc2VsZWN0b3InKS5DaGVja2JveDtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUlRDZWxsQ2hlY2tib3gnLFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y2hlY2tlZDogdGhpcy5wcm9wcy5jaGVja2VkIHx8IGZhbHNlXG5cdFx0fVxuXHR9LFxuXHRfX29uQ2hlY2tib3hDaGFuZ2U6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0aWYodGhpcy5wcm9wcy50aGVhZCkge1xuXHRcdFx0dGhpcy5fX29uSGVhZENoYW5nZShldmVudCk7XG5cdFx0fWVsc2UgaWYodGhpcy5wcm9wcy50Ym9keSkge1xuXHRcdFx0dGhpcy5fX29uQm9keUNoYW5nZShldmVudCk7XG5cdFx0fVxuXHR9LFxuXHRfX29uSGVhZENoYW5nZTogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHRjb25zb2xlLmxvZyhldmVudC5jaGVja2VkLCB0aGlzLnByb3BzKTtcblx0fSxcblx0X19vbkJvZHlDaGFuZ2U6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0Y29uc29sZS5sb2coZXZlbnQuY2hlY2tlZCwgdGhpcy5wcm9wcyk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ6ci10YWJsZS1jZWxsLWNoZWNrYm94XCI+PENoZWNrYm94IGNoZWNrZWQ9e3RydWV9IG9uQ2hhbmdlPXt0aGlzLl9fb25DaGVja2JveENoYW5nZX0vPjwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgQ2hlY2tib3g6IHJlcXVpcmUoJy4vQ2hlY2tib3gnKSxcbiAgICAvL0J1dHRvbnM6IHJlcXVpcmUoJy4vQnV0dG9ucycpLFxuICAgIC8vSW5wdXQ6IHJlcXVpcmUoJy4vSW5wdXQnKSxcbiAgICAvL0NhbGN1bGF0b3I6IHJlcXVpcmUoJy4vQ2FsY3VsYXRvcicpXG59OyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIHRhYmxlOiByZXF1aXJlKCcuL3RhYmxlL2luZGV4JyksXG4gICAgY2VsbDogcmVxdWlyZSgnLi9jZWxsL2luZGV4JyksXG4gICAgVGFibGU6IHJlcXVpcmUoJy4vVGFibGUnKSxcbiAgICBUYWJsZUVkaXRvcjogcmVxdWlyZSgnLi9UYWJsZUVkaXRvcicpLFxuICAgIFRhYmxlUGFnZXI6IHJlcXVpcmUoJy4vVGFibGVQYWdlcicpXG59OyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUlRhYmxlQ29sZ3JvdXAnLFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0dmFyIF9rZXlNYXBwaW5nID0gdGhpcy5wcm9wcy5rZXlNYXBwaW5nIHx8IHsgfTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGNvbGdyb3VwPlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0KHRoaXMucHJvcHMuY29sdW1uc3x8W10pLm1hcChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcblx0XHRcdFx0XHRcdHZhciBfd2lkdGggPSBfa2V5TWFwcGluZy53aWR0aCB8fCAnd2lkdGgnO1xuXHRcdFx0XHRcdFx0cmV0dXJuIDxjb2wga2V5PXtpbmRleH0gc3R5bGU9e3sgd2lkdGg6IGl0ZW1bX3dpZHRoXSB9fSAvPjtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHQ8L2NvbGdyb3VwPlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFRSb3cgPSByZXF1aXJlKCcuL1RSb3cnKTtcbnZhciBsb2FkZXIgPSByZXF1aXJlKCd6bnVpLXJlYWN0LWxvYWRlcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSVEJvZHknLFxuXHRnZXRJbml0aWFsU3RhdGU6ZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0YWN0aXZlOiBudWxsLFxuXHRcdFx0Y2hlY2tlZHM6IFtdLFxuXHRcdFx0Y2xhc3NOYW1lOiAnJyxcblx0XHRcdHN0eWxlOiB7fSxcblx0XHRcdGxvYWRpbmc6IGZhbHNlXG5cdFx0fVxuXHR9LFxuXHRfX3JlbmRlckxvYWRpbmc6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMubG9hZGluZ1JlbmRlciwge1xuXHRcdFx0dGJvZHk6IHRoaXNcblx0XHR9KTtcblxuXHRcdGlmKCFfZWxlbWVudCl7XG5cdFx0IFx0X2VsZW1lbnQgPSA8bG9hZGVyLkRhdGFMb2FkZXIgbG9hZGVyPVwid2F2ZVwiIHRpdGxlPXsnTG9hZGluZy4uLid9IC8+O1xuXHRcdH1cblxuXHRcdHZhciBfbG9hZGluZyA9IHpuLmV4dGVuZCh7IGNsYXNzTmFtZTogJycsIHN0eWxlOiB7fSB9LCB0aGlzLnByb3BzLmxvYWRpbmcpO1xuXHRcdHJldHVybiA8dHIgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInRib2R5LWxvYWRpbmdcIiwgX2xvYWRpbmcuY2xhc3NOYW1lKX0gc3R5bGU9e19sb2FkaW5nLnN0eWxlfT5cblx0XHRcdDx0ZCBjb2xTcGFuPXt0aGlzLnByb3BzLmNvbHVtbnMubGVuZ3RofT57X2VsZW1lbnR9PC90ZD5cblx0XHQ8L3RyPjtcblx0fSxcblx0X19yZW5kZXJFbXB0eTogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF9lbGVtZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQodGhpcy5wcm9wcy5lbXB0eVJlbmRlciwge1xuXHRcdFx0dGJvZHk6IHRoaXNcblx0XHR9KTtcblxuXHRcdGlmKCFfZWxlbWVudCl7XG5cdFx0IFx0X2VsZW1lbnQgPSA8ZGl2IGNsYXNzTmFtZT1cImVtcHR5LWNvbnRlbnRcIj5ObyBEYXRhLjwvZGl2Pjtcblx0XHR9XG5cdFx0dmFyIF9lbXB0eSA9IHpuLmV4dGVuZCh7IGNsYXNzTmFtZTogJycsIHN0eWxlOiB7fSB9LCB0aGlzLnByb3BzLmVtcHR5KTtcblx0XHRyZXR1cm4gPHRyIGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ0Ym9keS1lbXB0eVwiLCBfZW1wdHkuY2xhc3NOYW1lKX0gc3R5bGU9e19lbXB0eS5zdHlsZX0+XG5cdFx0XHQ8dGQgY29sU3Bhbj17dGhpcy5wcm9wcy5jb2x1bW5zLmxlbmd0aH0+e19lbGVtZW50fTwvdGQ+XG5cdFx0PC90cj47XG5cdH0sXG5cdF9fb25Sb3dDbGljazogZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0dmFyIF9kYXRhID0gZXZlbnQuZGF0YTtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGFjdGl2ZTogX2RhdGEudHJvdy5wcm9wcy5kYXRhXG5cdFx0fSk7XG5cdFx0ZXZlbnQudGJvZHkgPSB0aGlzO1xuXHRcdHRoaXMucHJvcHMub25Sb3dDbGljayAmJiB0aGlzLnByb3BzLm9uUm93Q2xpY2soZXZlbnQpO1xuXHR9LFxuXHRfX29uQ2VsbENsaWNrOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdGV2ZW50LnRib2R5ID0gdGhpcztcblx0XHR0aGlzLnByb3BzLm9uQ2VsbENsaWNrICYmIHRoaXMucHJvcHMub25DZWxsQ2xpY2soZXZlbnQpO1xuXHR9LFxuXHRfX3JlbmRlclJvdzogZnVuY3Rpb24gKGl0ZW0sIGluZGV4KXtcblx0XHRpZighem4uaXMoaXRlbSwgJ29iamVjdCcpKSB7IHJldHVybiBudWxsO31cblx0XHR2YXIgX3RlbXAgPSB0aGlzLnByb3BzLmVhY2hSb3dEYXRhICYmIHRoaXMucHJvcHMuZWFjaFJvd0RhdGEoaXRlbSwgaW5kZXgpO1xuXHRcdGlmKF90ZW1wICYmIHpuLmlzKF90ZW1wLCAnb2JqZWN0Jykpe1xuXHRcdFx0aXRlbSA9IF90ZW1wO1xuXHRcdH1cblx0XHR2YXIgX2VsZW1lbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudCh0aGlzLnByb3BzLnJvd1JlbmRlciwge1xuXHRcdFx0ZGF0YTogaXRlbSxcblx0XHRcdHJvd0luZGV4OiBpbmRleCxcblx0XHRcdHRib2R5OiB0aGlzXG5cdFx0fSk7XG5cblx0XHRpZihfZWxlbWVudCl7XG5cdFx0XHRyZXR1cm4gX2VsZW1lbnQ7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIDxUUm93IGtleT17aW5kZXh9IHsuLi50aGlzLnByb3BzLnJvd30gXG5cdFx0XHRcdFx0Y2VsbD17dGhpcy5wcm9wcy5jZWxsfVxuXHRcdFx0XHRcdGNlbGxSZW5kZXI9e3RoaXMucHJvcHMuY2VsbFJlbmRlcn1cblx0XHRcdFx0XHRjb2x1bW5zPXt0aGlzLnByb3BzLmNvbHVtbnN9IFxuXHRcdFx0XHRcdHRib2R5PXt0aGlzfVxuXHRcdFx0XHRcdGRhdGE9e2l0ZW19IFxuXHRcdFx0XHRcdGFjdGl2ZT17dGhpcy5zdGF0ZS5hY3RpdmUgPT0gaXRlbX0gXG5cdFx0XHRcdFx0Y2hlY2tlZD17dGhpcy5zdGF0ZS5jaGVja2Vkcy5pbmRleE9mKGl0ZW0pICE9PSAtMX0gXG5cdFx0XHRcdFx0b25Sb3dDbGljaz17dGhpcy5fX29uUm93Q2xpY2t9XG5cdFx0XHRcdFx0b25DZWxsQ2xpY2s9e3RoaXMuX19vbkNlbGxDbGlja30gLz47XG5cdH0sXG5cdF9fcmVuZGVyRGF0YTogZnVuY3Rpb24gKCl7XG5cdFx0aWYodGhpcy5wcm9wcy5kYXRhID09IG51bGwgfHwgKHRoaXMucHJvcHMuZGF0YSAmJiAhdGhpcy5wcm9wcy5kYXRhLmxlbmd0aCkpe1xuXHRcdFx0cmV0dXJuIHRoaXMuX19yZW5kZXJFbXB0eSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gPD5cblx0XHRcdHtcblx0XHRcdFx0dGhpcy5wcm9wcy5kYXRhLm1hcCh0aGlzLl9fcmVuZGVyUm93KVxuXHRcdFx0fVxuXHRcdDwvPjtcblx0fSxcblx0X19yZW5kZXI6IGZ1bmN0aW9uICgpe1xuXHRcdGlmKHRoaXMucHJvcHMubG9hZGluZyB8fCB0aGlzLnN0YXRlLmxvYWRpbmcpIHtcblx0XHRcdHJldHVybiB0aGlzLl9fcmVuZGVyTG9hZGluZygpO1xuXHRcdH1lbHNle1xuXHRcdFx0cmV0dXJuIHRoaXMuX19yZW5kZXJEYXRhKCk7XG5cdFx0fVxuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDx0Ym9keSBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItdGFibGUtdGJvZHlcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUsIHRoaXMuc3RhdGUuY2xhc3NOYW1lKX0gc3R5bGU9e3pudWkucmVhY3Quc3R5bGUodGhpcy5wcm9wcy5zdHlsZSwgdGhpcy5zdGF0ZS5zdHlsZSl9PlxuXHRcdFx0XHR7IHRoaXMuX19yZW5kZXIoKSB9XG5cdFx0XHQ8L3Rib2R5PlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFJlYWN0RE9NID0gem51aS5SZWFjdERPTSB8fCByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUlRDZWxsJyxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNsYXNzTmFtZTogJycsXG5cdFx0XHRzdHlsZToge30sXG5cdFx0XHRkaXNhYmxlZDogdGhpcy5wcm9wcy5kaXNhYmxlZCxcblx0XHRcdGNoZWNrZWQ6IHRoaXMucHJvcHMuY2hlY2tlZCxcblx0XHRcdGFjdGl2ZTogdGhpcy5wcm9wcy5hY3RpdmVcblx0XHR9XG5cdH0sXG5cdF9fcmVuZGVyQ2VsbENvbnRlbnQ6IGZ1bmN0aW9uICgpe1xuXHRcdGlmKHRoaXMucHJvcHMuY2hpbGRyZW4pIHtcblx0XHRcdHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuO1xuXHRcdH1cblx0XHRcblx0XHR2YXIgX3ZhbHVlID0gbnVsbDtcblx0XHRpZih0aGlzLnByb3BzLmRhdGEgJiYgdGhpcy5wcm9wcy5uYW1lKSB7XG5cdFx0XHRfdmFsdWUgPSB0aGlzLnByb3BzLmRhdGFbdGhpcy5wcm9wcy5uYW1lXTtcblx0XHR9XG5cblx0XHR2YXIgX3JlbmRlciA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMucmVuZGVyIHx8IHRoaXMucHJvcHMuYm9keSwge1xuXHRcdFx0Y2VsbEluZGV4OiB0aGlzLnByb3BzLmNlbGxJbmRleCwgXG5cdFx0XHRjb2x1bW46IHRoaXMucHJvcHMuY29sdW1uLFxuXHRcdFx0ZGF0YTogdGhpcy5wcm9wcy5kYXRhLFxuXHRcdFx0dmFsdWU6IF92YWx1ZSxcblx0XHRcdHRjZWxsOiB0aGlzLFxuXHRcdFx0dHJvdzogdGhpcy5wcm9wcy50cm93LFxuXHRcdFx0dGJvZHk6IHRoaXMucHJvcHMudGJvZHlcblx0XHR9KTtcblx0XHRcblx0XHRpZihfcmVuZGVyKXtcblx0XHRcdHJldHVybiBfcmVuZGVyO1xuXHRcdH1cblxuXHRcdHJldHVybiBfdmFsdWU7XG5cdH0sXG5cdF9fY2VsbENsaWNrOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdGV2ZW50LmRhdGEgPSB7XG5cdFx0XHR0ZDogUmVhY3RET00uZmluZERPTU5vZGUodGhpcyksXG5cdFx0XHR0Y2VsbDogdGhpc1xuXHRcdH07XG5cdFx0dGhpcy5wcm9wcy5vbkNsaWNrICYmIHRoaXMucHJvcHMub25DbGljayhldmVudCk7XG5cdFx0dGhpcy5wcm9wcy5vbkNlbGxDbGljayAmJiB0aGlzLnByb3BzLm9uQ2VsbENsaWNrKGV2ZW50KTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8dGQgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXRhYmxlLXRjZWxsXCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lLCB0aGlzLnN0YXRlLmNsYXNzTmFtZSl9IHN0eWxlPXt6bnVpLnJlYWN0LnN0eWxlKHRoaXMucHJvcHMuc3R5bGUsIHRoaXMuc3RhdGUuc3R5bGUpfVx0XG5cdFx0XHRcdGRhdGEtZGlzYWJsZWQ9e3RoaXMuc3RhdGUuZGlzYWJsZWR9XG5cdFx0XHRcdGRhdGEtY2hlY2tlZD17dGhpcy5zdGF0ZS5jaGVja2VkfVxuXHRcdFx0XHRkYXRhLWFjdGl2ZT17dGhpcy5zdGF0ZS5hY3RpdmV9XG5cdFx0XHRcdG9uQ2xpY2s9e3RoaXMuX19jZWxsQ2xpY2t9ID5cblx0XHRcdFx0e3RoaXMuX19yZW5kZXJDZWxsQ29udGVudCgpfVxuXHRcdFx0PC90ZD5cblx0XHQpO1xuXHR9XG59KTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBmaWx0ZXIgPSByZXF1aXJlKCd6bnVpLXJlYWN0LWZpbHRlcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6ICdaUkZpbHRlcicsXG5cdGdldEluaXRpYWxTdGF0ZTpmdW5jdGlvbigpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRjbGFzc05hbWU6ICcnLFxuXHRcdFx0c3R5bGU6IHt9LFxuXHRcdFx0ZGF0YToge31cblx0XHR9XG5cdH0sXG5cdF9fb25GaWx0ZXJDaGFuZ2U6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0aWYoZXZlbnQubmFtZSAmJiBldmVudC52YWx1ZSkge1xuXHRcdFx0dGhpcy5zdGF0ZS5kYXRhW2V2ZW50Lm5hbWVdID0ge1xuXHRcdFx0XHR2YWx1ZTogZXZlbnQudmFsdWUsXG5cdFx0XHRcdG9wdDogZXZlbnQub3B0XG5cdFx0XHR9O1xuXHRcdH1cblx0XHR0aGlzLnByb3BzLm9uRmlsdGVyICYmIHRoaXMucHJvcHMub25GaWx0ZXIodGhpcy5zdGF0ZS5kYXRhKTtcblx0fSxcblx0X19vbkZpbHRlckNhbmNlbDogZnVuY3Rpb24gKG5hbWUpe1xuXHRcdGlmKG5hbWUgJiYgdGhpcy5zdGF0ZS5kYXRhKXtcblx0XHRcdHRoaXMuc3RhdGUuZGF0YVtuYW1lXSA9IG51bGw7XG5cdFx0XHRkZWxldGUgdGhpcy5zdGF0ZS5kYXRhW25hbWVdO1xuXHRcdH1cblx0fSxcblx0X19yZW5kZXJDZWxsOiBmdW5jdGlvbiAoY29sdW1uLCBpbmRleCl7XG5cdFx0aWYoIXpuLmlzKGNvbHVtbiwgJ29iamVjdCcpKSB7IHJldHVybiBudWxsOyB9XG5cdFx0dmFyIF9lbGVtZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQodGhpcy5wcm9wcy5jZWxsUmVuZGVyLCB7XG5cdFx0XHRjb2x1bW46IGNvbHVtbixcblx0XHRcdGNlbGxJbmRleDogaW5kZXgsIFxuXHRcdFx0dGZpbHRlcjogdGhpc1xuXHRcdH0pO1xuXHRcdGlmKF9lbGVtZW50KXtcblx0XHRcdHJldHVybiBfZWxlbWVudDtcblx0XHR9XG5cdFx0XG5cdFx0dmFyIF9jb250ZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQoY29sdW1uLnJlbmRlciwge1xuXHRcdFx0Y29sdW1uOiBjb2x1bW4sXG5cdFx0XHRjZWxsSW5kZXg6IGluZGV4LCBcblx0XHRcdHRmaWx0ZXI6IHRoaXNcblx0XHR9KTtcblxuXHRcdGlmKCFfY29udGVudCAmJiBjb2x1bW4uZmlsdGVyKSB7XG5cdFx0XHRfY29udGVudCA9IDxmaWx0ZXIuRmlsdGVyRmllbGQgey4uLmNvbHVtbi5maWx0ZXJ9IG5hbWU9e2NvbHVtbi5uYW1lfSBvbkZpbHRlckNoYW5nZT17dGhpcy5fX29uRmlsdGVyQ2hhbmdlfSBvbkNhbmNlbD17dGhpcy5fX29uRmlsdGVyQ2FuY2VsfSAvPjtcblx0XHR9XG5cblx0XHR2YXIgX2NlbGwgPSB6bi5leHRlbmQoeyBzdHlsZToge30sIGNsYXNzTmFtZTogJycgfSwgdGhpcy5wcm9wcy5jZWxsKTtcblx0XHRyZXR1cm4gPHRkIGtleT17aW5kZXh9IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3RmaWx0ZXItY2VsbCcsIF9jZWxsLmNsYXNzTmFtZSl9IHN0eWxlPXtfY2VsbC5zdHlsZX0+XG5cdFx0XHR7IF9jb250ZW50IH1cblx0XHQ8L3RkPjtcblx0fSxcblx0X19yZW5kZXJSb3c6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMucm93UmVuZGVyLCB7XG5cdFx0XHR0ZmlsdGVyOiB0aGlzXG5cdFx0fSk7XG5cdFx0aWYoX2VsZW1lbnQpe1xuXHRcdFx0cmV0dXJuIF9lbGVtZW50O1xuXHRcdH1cblx0XHR2YXIgX3JvdyA9IHpuLmV4dGVuZCh7IGNsYXNzTmFtZTogJycsIHN0eWxlOiB7fSB9LCB0aGlzLnByb3BzLnJvdyk7XG5cdFx0cmV0dXJuIChcblx0XHRcdDx0ciBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwidGZpbHRlci1yb3cgenItdGFibGUtdHJvd1wiLCBfcm93LmNsYXNzTmFtZSl9IHN0eWxlPXtfcm93LnN0eWxlfT5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdCh0aGlzLnByb3BzLmNvbHVtbnN8fFtdKS5tYXAodGhpcy5fX3JlbmRlckNlbGwpXG5cdFx0XHRcdH1cblx0XHRcdDwvdHI+XG5cdFx0KTtcblx0fSxcblx0cmVuZGVyOmZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDx0aGVhZCBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItdGFibGUtdGZpbHRlclwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSwgdGhpcy5zdGF0ZS5jbGFzc05hbWUpfSBzdHlsZT17em51aS5yZWFjdC5zdHlsZSh0aGlzLnByb3BzLnN0eWxlLCB0aGlzLnN0YXRlLnN0eWxlKX0+XG5cdFx0XHRcdHt0aGlzLl9fcmVuZGVyUm93KCl9XG5cdFx0XHQ8L3RoZWFkPlxuXHRcdCk7XG5cdH1cbn0pOyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUlRGb290Jyxcblx0X19yZW5kZXJDaGlsZHJlbjogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF9jb2x1bW5zID0gdGhpcy5wcm9wcy5jb2x1bW5zIHx8IFtdO1xuXHRcdGlmKHRoaXMucHJvcHMuY2hpbGRyZW4pe1xuXHRcdFx0cmV0dXJuIDx0ciBjbGFzc05hbWU9XCJ0Zm9vdC1yb3dcIj5cblx0XHRcdFx0PHRkIGNvbFNwYW49e19jb2x1bW5zLmxlbmd0aH0+e3RoaXMucHJvcHMuY2hpbGRyZW59PC90ZD5cblx0XHRcdDwvdHI+O1xuXHRcdH1lbHNle1xuXHRcdFx0cmV0dXJuIHRoaXMuX19yZW5kZXJSb3coKTtcblx0XHR9XG5cdH0sXG5cdF9fcmVuZGVyQ2VsbDogZnVuY3Rpb24gKGNvbHVtbiwgaW5kZXgpe1xuXHRcdGlmKCF6bi5pcyhjb2x1bW4sICdvYmplY3QnKSkgeyByZXR1cm4gbnVsbDsgfVxuXHRcdHZhciBfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMuY2VsbFJlbmRlciwge1xuXHRcdFx0Y29sdW1uOiBjb2x1bW4sXG5cdFx0XHRjZWxsSW5kZXg6IGluZGV4LCBcblx0XHRcdHRmb290OiB0aGlzXG5cdFx0fSk7XG5cdFx0aWYoX2VsZW1lbnQpe1xuXHRcdFx0cmV0dXJuIF9lbGVtZW50O1xuXHRcdH1cblxuXHRcdHZhciBfY29udGVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KGNvbHVtbi5yZW5kZXIgfHwgY29sdW1uLmZvb3QsIHtcblx0XHRcdGNvbHVtbjogY29sdW1uLFxuXHRcdFx0Y2VsbEluZGV4OiBpbmRleCwgXG5cdFx0XHR0Zm9vdDogdGhpc1xuXHRcdH0pO1xuXG5cdFx0aWYodGhpcy5wcm9wcy5yZW5kZXIpIHtcblx0XHRcdF9jb250ZW50ID0gdGhpcy5wcm9wcy5yZW5kZXIoY29sdW1uLCBpbmRleCwgdGhpcyk7XG5cdFx0fVxuXG5cdFx0dmFyIF9jZWxsID0gem4uZXh0ZW5kKHsgc3R5bGU6IHt9LCBjbGFzc05hbWU6ICcnIH0sIHRoaXMucHJvcHMuY2VsbCk7XG5cdFx0cmV0dXJuIDx0aCBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd0Zm9vdC1jZWxsJywgX2NlbGwuY2xhc3NOYW1lKX0gc3R5bGU9e19jZWxsLnN0eWxlfT5cblx0XHRcdHsgX2NvbnRlbnQgfVxuXHRcdDwvdGg+O1xuXHR9LFxuXHRfX3JlbmRlclJvdzogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF9lbGVtZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQodGhpcy5wcm9wcy5yb3dSZW5kZXIsIHtcblx0XHRcdHRoZWFkOiB0aGlzXG5cdFx0fSk7XG5cdFx0aWYoX2VsZW1lbnQpe1xuXHRcdFx0cmV0dXJuIF9lbGVtZW50O1xuXHRcdH1cblx0XHR2YXIgX3JvdyA9IHpuLmV4dGVuZCh7IGNsYXNzTmFtZTogJycsIHN0eWxlOiB7fSB9LCB0aGlzLnByb3BzLnJvdyk7XG5cdFx0cmV0dXJuIChcblx0XHRcdDx0ciBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwidGZvb3Qtcm93XCIsIF9yb3cuY2xhc3NOYW1lKX0gc3R5bGU9e19yb3cuc3R5bGV9PlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0KHRoaXMucHJvcHMuY29sdW1uc3x8W10pLm1hcCh0aGlzLl9fcmVuZGVyQ2VsbClcblx0XHRcdFx0fVxuXHRcdFx0PC90cj5cblx0XHQpO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDx0Zm9vdCBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItdGFibGUtdGZvb3RcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0+XG5cdFx0XHRcdHt0aGlzLl9fcmVuZGVyQ2hpbGRyZW4oKX1cblx0XHRcdDwvdGZvb3Q+XG5cdFx0KTtcblx0fVxufSk7IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFRIZWFkU29ydCA9IHJlcXVpcmUoJy4vVEhlYWRTb3J0Jyk7XG52YXIgcG9wdXAgPSByZXF1aXJlKCd6bnVpLXJlYWN0LXBvcHVwJyk7XG52YXIgU1ZHSWNvbiA9IHJlcXVpcmUoJ3pudWktcmVhY3QtaWNvbicpLlNWR0ljb247XG52YXIgenJqc29uID0gcmVxdWlyZSgnem51aS1yZWFjdC1qc29uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1RIZWFkJyxcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge307XG5cdH0sXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNsYXNzTmFtZTogJycsXG5cdFx0XHRzdHlsZToge30sXG5cdFx0XHRzb3J0OiB7fSxcblx0XHRcdGZpbHRlcjoge31cblx0XHR9O1xuXHR9LFxuXHRfX29uQ29sdW1uU29ydDogZnVuY3Rpb24gKHNvcnQsIGNvbHVtbil7XG5cdFx0aWYoY29sdW1uLm5hbWUpIHtcblx0XHRcdHRoaXMuc3RhdGUuc29ydFtjb2x1bW4ubmFtZV0gPSAoc29ydD09J2ZhU29ydEFscGhhRG93bicgPyAnZGVzYycgOiAnYXNjJyk7XG5cdFx0fVxuXHRcdHRoaXMucHJvcHMub25Tb3J0ICYmIHRoaXMucHJvcHMub25Tb3J0KHRoaXMuc3RhdGUuc29ydCk7XG5cdH0sXG5cdF9fb25Db2x1bW5FZGl0b3JDaGFuZ2U6IGZ1bmN0aW9uIChkYXRhLCBjaGlsZCwgcm9vdCwgaW5kZXgpe1xuICAgICAgICB2YXIgX3Jvb3QgPSByb290IHx8IGNoaWxkO1xuXHRcdHRoaXMucHJvcHMub25Db2x1bW5DaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkNvbHVtbkNoYW5nZShfcm9vdC5zdGF0ZS52YWx1ZSwgaW5kZXgpO1xuICAgIH0sXG5cdF9faWNvbkNsaWNrUmVuZGVyOiBmdW5jdGlvbiAoY29sdW1uLCBpbmRleCl7XG5cdFx0XG5cdFx0cmV0dXJuIDxkaXYgc3R5bGU9e3twYWRkaW5nOiAxMCwgbWF4SGVpZ2h0OiA1MDAsIHdpZHRoOiA0MDAsIG92ZXJmbG93OiAnYXV0byd9fT5cblx0XHRcdDx6cmpzb24uZWRpdG9yLm9iamVjdCBmb2xkPXtmYWxzZX1cblx0XHRcdFx0ZGlzcGxheUNsb3N1cmU9e3RydWV9IFxuXHRcdFx0XHRkaXNwbGF5SXRlbUNvdW50PXt0cnVlfSBcblx0XHRcdFx0bGFiZWw9eydDb2x1bW4nfSBcblx0XHRcdFx0dmFsdWU9e2NvbHVtbn0gXG5cdFx0XHRcdG9uQ2hhbmdlPXsoZGF0YSwgY2hpbGQsIHJvb3QpPT50aGlzLl9fb25Db2x1bW5FZGl0b3JDaGFuZ2UoZGF0YSwgY2hpbGQsIHJvb3QsIGluZGV4KX0gLz5cblx0XHQ8L2Rpdj47XG5cdH0sXG5cdF9fcmVuZGVyQ2VsbDogZnVuY3Rpb24gKGNvbHVtbiwgaW5kZXgpe1xuXHRcdGlmKCF6bi5pcyhjb2x1bW4sICdvYmplY3QnKSkgeyByZXR1cm4gbnVsbDsgfVxuXHRcdHZhciBfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMuY2VsbFJlbmRlciwge1xuXHRcdFx0Y29sdW1uOiBjb2x1bW4sXG5cdFx0XHRjZWxsSW5kZXg6IGluZGV4LCBcblx0XHRcdHRoZWFkOiB0aGlzXG5cdFx0fSk7XG5cdFx0aWYoX2VsZW1lbnQpe1xuXHRcdFx0cmV0dXJuIF9lbGVtZW50O1xuXHRcdH1cblxuXHRcdHZhciBfY29udGVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KGNvbHVtbi5yZW5kZXIgfHwgY29sdW1uLmhlYWQsIHtcblx0XHRcdFx0Y29sdW1uOiBjb2x1bW4sXG5cdFx0XHRcdGNlbGxJbmRleDogaW5kZXgsIFxuXHRcdFx0XHR0aGVhZDogdGhpc1xuXHRcdFx0fSksXG5cdFx0XHRfbWFwcGluZyA9IHRoaXMucHJvcHMua2V5TWFwcGluZyB8fCB7fSxcblx0XHRcdF9sYWJlbEtleSA9IF9tYXBwaW5nWydsYWJlbCddIHx8ICdsYWJlbCcsXG5cdFx0XHRfbGFiZWwgPSBjb2x1bW5bX2xhYmVsS2V5XTtcblx0XHRpZighX2NvbnRlbnQpIHtcblx0XHRcdF9jb250ZW50ID0gPGRpdiBjbGFzc05hbWU9XCJjZWxsLWxhYmVsXCI+XG5cdFx0XHRcdHsgX2xhYmVsIH1cblx0XHRcdFx0eyBcblx0XHRcdFx0XHQhIWNvbHVtbi5lZGl0YWJsZSAmJiA8cG9wdXAuRHJvcGRvd24gXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjZWxsLWVkaXRvclwiIFxuXHRcdFx0XHRcdFx0cG9wb3Zlcj17e1xuXHRcdFx0XHRcdFx0XHRyZW5kZXI6IHRoaXMuX19pY29uQ2xpY2tSZW5kZXIoY29sdW1uLCBpbmRleCksXG5cdFx0XHRcdFx0XHRcdGNsb3NlYWJsZTogdHJ1ZVxuXHRcdFx0XHRcdFx0fX0gPlxuXHRcdFx0XHRcdFx0PFNWR0ljb24gaWNvbj1cImZhRWRpdFwiIC8+XG5cdFx0XHRcdFx0PC9wb3B1cC5Ecm9wZG93bj5cblx0XHRcdFx0fVxuXHRcdFx0PC9kaXY+O1xuXHRcdH1cblxuXHRcdHZhciBfY2VsbCA9IHpuLmV4dGVuZCh7IHN0eWxlOiB7fSwgY2xhc3NOYW1lOiAnJyB9LCB0aGlzLnByb3BzLmNlbGwpO1xuXHRcdHJldHVybiA8dGgga2V5PXtpbmRleH0gY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgndGhlYWQtY2VsbCcsIF9jZWxsLmNsYXNzTmFtZSl9IHN0eWxlPXtfY2VsbC5zdHlsZX0+XG5cdFx0XHR7IF9jb250ZW50IH1cblx0XHRcdHsgISFjb2x1bW4uc29ydCAmJiA8VEhlYWRTb3J0IGNsYXNzTmFtZT1cImNlbGwtc29ydFwiIG9uU29ydD17KHNvcnQpPT50aGlzLl9fb25Db2x1bW5Tb3J0KHNvcnQsIGNvbHVtbil9IC8+fVxuXHRcdDwvdGg+O1xuXHR9LFxuXHRfX3JlbmRlclJvdzogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF9lbGVtZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQodGhpcy5wcm9wcy5yb3dSZW5kZXIsIHtcblx0XHRcdHRoZWFkOiB0aGlzXG5cdFx0fSk7XG5cdFx0aWYoX2VsZW1lbnQpe1xuXHRcdFx0cmV0dXJuIF9lbGVtZW50O1xuXHRcdH1cblx0XHR2YXIgX3JvdyA9IHpuLmV4dGVuZCh7IGNsYXNzTmFtZTogJycsIHN0eWxlOiB7fSB9LCB0aGlzLnByb3BzLnJvdyk7XG5cdFx0cmV0dXJuIChcblx0XHRcdDx0ciBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwidGhlYWQtcm93XCIsIF9yb3cuY2xhc3NOYW1lKX0gc3R5bGU9e19yb3cuc3R5bGV9PlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0KHRoaXMucHJvcHMuY29sdW1uc3x8W10pLm1hcCh0aGlzLl9fcmVuZGVyQ2VsbClcblx0XHRcdFx0fVxuXHRcdFx0PC90cj5cblx0XHQpO1xuXHR9LFxuXHRyZW5kZXI6ZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHRoZWFkIGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci10YWJsZS10aGVhZFwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSwgdGhpcy5zdGF0ZS5jbGFzc05hbWUpfSBzdHlsZT17em51aS5yZWFjdC5zdHlsZSh0aGlzLnByb3BzLnN0eWxlLCB0aGlzLnN0YXRlLnN0eWxlKX0+XG5cdFx0XHRcdHt0aGlzLl9fcmVuZGVyUm93KCl9XG5cdFx0XHQ8L3RoZWFkPlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFNWR0ljb24gPSByZXF1aXJlKCd6bnVpLXJlYWN0LWljb24nKS5TVkdJY29uO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSVEhlYWRTb3J0Jyxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c29ydDogJ2ZhU29ydCcsXG5cdFx0fVxuXHR9LFxuXHRfX2ljb25DbGljazogZnVuY3Rpb24gKCl7XG5cdFx0aWYodGhpcy5zdGF0ZS5zb3J0ID09ICdmYVNvcnQnKXtcblx0XHRcdHRoaXMuc3RhdGUuc29ydCA9ICdmYVNvcnRBbHBoYURvd24nO1xuXHRcdH0gZWxzZSBpZih0aGlzLnN0YXRlLnNvcnQgPT0gJ2ZhU29ydEFscGhhRG93bicpe1xuXHRcdFx0dGhpcy5zdGF0ZS5zb3J0ID0gJ2ZhU29ydEFscGhhVXAnO1xuXHRcdH0gZWxzZSBpZih0aGlzLnN0YXRlLnNvcnQgPT0gJ2ZhU29ydEFscGhhVXAnKXtcblx0XHRcdHRoaXMuc3RhdGUuc29ydCA9ICdmYVNvcnRBbHBoYURvd24nO1xuXHRcdH1cblx0XHR0aGlzLmZvcmNlVXBkYXRlKCk7XG5cdFx0dGhpcy5wcm9wcy5vblNvcnQgJiYgdGhpcy5wcm9wcy5vblNvcnQodGhpcy5zdGF0ZS5zb3J0KTtcblx0fSxcblx0cmVuZGVyOmZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItdGhlYWQtc29ydCcsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9PlxuXHRcdFx0XHQ8U1ZHSWNvbiBvbkNsaWNrPXt0aGlzLl9faWNvbkNsaWNrfSBpY29uPXt0aGlzLnN0YXRlLnNvcnR9IC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSZWFjdERPTSA9IHpudWkuUmVhY3RET00gfHwgcmVxdWlyZSgncmVhY3QtZG9tJyk7XG52YXIgVENlbGwgPSByZXF1aXJlKCcuL1RDZWxsJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJUUm93Jyxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRjbGFzc05hbWU6ICcnLFxuXHRcdFx0c3R5bGU6IHt9XG5cdFx0fVxuXHR9LFxuXHRfX2dldFRhcmdldFREOiBmdW5jdGlvbiAodGFyZ2V0KSB7XG5cdFx0aWYodGFyZ2V0LnRhZ05hbWUhPT0nVEQnKXtcblx0XHRcdHJldHVybiB0aGlzLl9fZ2V0VGFyZ2V0VEQodGFyZ2V0LnBhcmVudE5vZGUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGFyZ2V0O1xuXHRcdH1cblx0fSxcblx0X19vblJvd0NsaWNrOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdHZhciBfdGQgPSB0aGlzLl9fZ2V0VGFyZ2V0VEQoZXZlbnQudGFyZ2V0KSxcblx0XHRcdF90ciA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xuXHRcdGV2ZW50LmRhdGEgPSB7XG5cdFx0XHR0ZDogX3RkLFxuXHRcdFx0dHI6IF90cixcblx0XHRcdHRyb3c6IHRoaXNcblx0XHR9O1xuXHRcdHRoaXMucHJvcHMub25DbGljayAmJiB0aGlzLnByb3BzLm9uQ2xpY2soZXZlbnQpO1xuXHRcdHRoaXMucHJvcHMub25Sb3dDbGljayAmJiB0aGlzLnByb3BzLm9uUm93Q2xpY2soZXZlbnQpO1xuXHR9LFxuXHRfX2NlbGxSZW5kZXI6IGZ1bmN0aW9uIChjb2x1bW4sIGluZGV4KXtcblx0XHRpZighem4uaXMoY29sdW1uLCAnb2JqZWN0JykpIHsgcmV0dXJuIG51bGw7fVxuXHRcdHZhciBfcHJvcHMgPSB6bi5leHRlbmQoe1xuXHRcdFx0Y29sdW1uOiBjb2x1bW4sXG5cdFx0XHR0cm93OiB0aGlzLFxuXHRcdFx0Y2VsbEluZGV4OiBpbmRleCxcblx0XHRcdGRhdGE6IHRoaXMucHJvcHMuZGF0YSxcblx0XHRcdHRib2R5OiB0aGlzLnByb3BzLnRib2R5XG5cdFx0fSwgdGhpcy5wcm9wcy5jZWxsLCBjb2x1bW4pO1xuXHRcdHZhciBfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMuY2VsbFJlbmRlciwgX3Byb3BzKTtcblxuXHRcdGlmKF9lbGVtZW50KXtcblx0XHRcdHJldHVybiBfZWxlbWVudDtcblx0XHR9XG5cblx0XHRyZXR1cm4gPFRDZWxsIGtleT17aW5kZXh9IHsuLi5fcHJvcHN9IG9uQ2VsbENsaWNrPXt0aGlzLnByb3BzLm9uQ2VsbENsaWNrfSBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd0cm93LWNlbGwnLCBfcHJvcHMuY2xhc3NOYW1lKX0gLz47XG5cdH0sXG5cdHJlbmRlcjpmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8dHIgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItdGFibGUtdHJvdycsIHRoaXMucHJvcHMuY2xhc3NOYW1lLCB0aGlzLnN0YXRlLmNsYXNzTmFtZSl9IHN0eWxlPXt6bnVpLnJlYWN0LnN0eWxlKHRoaXMucHJvcHMuc3R5bGUsIHRoaXMuc3RhdGUuc3R5bGUpfVxuXHRcdFx0XHRkYXRhLWFjdGl2ZT17dGhpcy5wcm9wcy5hY3RpdmV9IFxuXHRcdFx0XHRkYXRhLWNoZWNrZWQ9e3RoaXMucHJvcHMuY2hlY2tlZH0gXG5cdFx0XHRcdG9uQ2xpY2s9e3RoaXMuX19vblJvd0NsaWNrfT5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdCh0aGlzLnByb3BzLmNvbHVtbnN8fFtdKS5tYXAodGhpcy5fX2NlbGxSZW5kZXIpXG5cdFx0XHRcdH1cblx0XHRcdDwvdHI+XG5cdFx0KTtcblx0fVxufSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBDb2xncm91cDogcmVxdWlyZSgnLi9Db2xncm91cCcpLFxuICAgIFRGaWx0ZXI6IHJlcXVpcmUoJy4vVEZpbHRlcicpLFxuICAgIFRCb2R5OiByZXF1aXJlKCcuL1RCb2R5JyksXG4gICAgVENlbGw6IHJlcXVpcmUoJy4vVENlbGwnKSxcbiAgICBURm9vdDogcmVxdWlyZSgnLi9URm9vdCcpLFxuICAgIFRIZWFkOiByZXF1aXJlKCcuL1RIZWFkJyksXG4gICAgVFJvdzogcmVxdWlyZSgnLi9UUm93Jylcbn07IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJSZWFjdFwiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcIlJlYWN0RE9NXCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiZmlsdGVyXCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiaWNvblwiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcImlucHV0XCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wianNvblwiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcInBhZ2VyXCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wicG9wdXBcIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJzZWxlY3RvclwiXTsgfSgpKTsiXSwic291cmNlUm9vdCI6IiJ9