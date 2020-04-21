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
      data: null,
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
    console.log(filter, this.state.data);
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
  __tbodyDataLoaded: function __tbodyDataLoaded(response) {
    var _return = this.props.onDataLoaded && this.props.onDataLoaded(response, this);

    if (_return !== false) {
      this.setState({
        data: response
      });
    }
  },
  __onDataCreated: function __onDataCreated(data, lifycycle) {
    this.data = data;
    this.props.onDataCreated && this.props.onDataCreated(data, this);
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
      render: function render() {
        return _this2.__tbodyDataRender(columns);
      },
      loadingRender: function loadingRender() {
        return _this2.__tbodyLoadingRender(columns);
      },
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
      columns: columns
    }, this.props.colgroup)), !!this.props.thead && /*#__PURE__*/React.createElement(table.THead, _extends({
      onSort: this.__onSort,
      onColumnChange: this.__onTHeadColumnChange,
      columns: columns
    }, this.props.thead, {
      table: this
    })), !!this.props.tfilter && /*#__PURE__*/React.createElement(table.TFilter, _extends({
      onFilter: this.__onFilter,
      columns: columns
    }, this.props.filter, {
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
  },
  render: function render() {
    return /*#__PURE__*/React.createElement(znui.react.DataLifecycle, {
      onFinished: this.__columnsLoaded,
      data: this.props.columns,
      render: this.__render
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
      total: 0,
      count: 0,
      current: 1,
      data: null
    };
  },
  __handlePageChanged: function __handlePageChanged(page, pager) {
    this.state.current = page;
    this.props.onPageChanged && this.props.onPageChanged(page, pager, this);

    if (this.data) {
      console.log(this.state.data, this.data);
    }

    this.forceUpdate();
  },
  __renderPager: function __renderPager(columns, table) {
    var _columnSize = columns.length;

    if (!_columnSize) {
      return null;
    }

    var _state = this.state,
        _pagerProps = {
      total: _state.total,
      count: _state.count,
      current: _state.current,
      onPageChanged: this.__handlePageChanged
    },
        _Component = this.props.pager || pager.SimplePager;

    if (zn.is(_Component, 'string')) {
      _Component = zn.path(window, _Component);
    }

    var _element = znui.react.createReactElement(this.props.pagerRender, _pagerProps);

    if (!_element) {
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

    _params[_keyMaps.pageIndex] = this.props.pageIndex || 1;
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

    this.state.keyMaps = _keyMaps;
    return this.state.data = data, data;
  },
  __onDataCreated: function __onDataCreated(data, table) {
    this.data = data;
  },
  __getPageCount: function __getPageCount(total, pageSize) {
    var _count = parseInt(total / pageSize);

    if (total % pageSize > 0) {
      _count += 1;
    }

    return _count;
  },
  __onDataLoaded: function __onDataLoaded(response, table) {
    var _data = response.data;

    var _return = this.props.onDataLoaded && this.props.onDataLoaded(_data, table, tablePager);

    if (_return !== false) {
      table.setState({
        data: _data[this.state.keyMaps.data]
      });
      this.setState({
        total: this.__getPageCount(this.state.keyMaps.total, this.state.keyMaps.pageSize),
        count: _data[this.state.keyMaps.total],
        current: _data[this.state.keyMaps.pageIndex]
      });
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

var ReactDOM = znui.ReactDOM || __webpack_require__(/*! react-dom */ "react-dom");

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
    return /*#__PURE__*/React.createElement("colgroup", null, (this.props.columns || []).map(function (item, index) {
      return /*#__PURE__*/React.createElement("col", {
        key: index,
        style: {
          width: item.width
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

var jsoneditor = __webpack_require__(/*! rt-json-editor */ "rt-json-editor");

module.exports = React.createClass({
  displayName: 'THead',
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
    }, /*#__PURE__*/React.createElement(jsoneditor.form.object, {
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
    });

    if (!_content) {
      _content = /*#__PURE__*/React.createElement("div", {
        className: "cell-label"
      }, column.label, !!column.editable && /*#__PURE__*/React.createElement(popup.Dropdown, {
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

/***/ "rt-json-editor":
/*!*****************************!*\
  !*** external "jsoneditor" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["jsoneditor"]; }());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vVGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vVGFibGVFZGl0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vVGFibGVQYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9jZWxsL0NoZWNrYm94LmpzIiwid2VicGFjazovLy8uL2NlbGwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vdGFibGUvQ29sZ3JvdXAuanMiLCJ3ZWJwYWNrOi8vLy4vdGFibGUvVEJvZHkuanMiLCJ3ZWJwYWNrOi8vLy4vdGFibGUvVENlbGwuanMiLCJ3ZWJwYWNrOi8vLy4vdGFibGUvVEZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi90YWJsZS9URm9vdC5qcyIsIndlYnBhY2s6Ly8vLi90YWJsZS9USGVhZC5qcyIsIndlYnBhY2s6Ly8vLi90YWJsZS9USGVhZFNvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vdGFibGUvVFJvdy5qcyIsIndlYnBhY2s6Ly8vLi90YWJsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianNvbmVkaXRvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpbHRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImljb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbnB1dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvYWRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhZ2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicG9wdXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZWxlY3RvclwiIl0sIm5hbWVzIjpbIlJlYWN0Iiwiem51aSIsInJlcXVpcmUiLCJ0YWJsZSIsInNlbGVjdG9yIiwibW9kdWxlIiwiZXhwb3J0cyIsImNyZWF0ZUNsYXNzIiwiZGlzcGxheU5hbWUiLCJnZXRJbml0aWFsU3RhdGUiLCJkYXRhIiwiY29sdW1ucyIsImNoZWNrZWRzIiwiX19zb3J0RnVuY3Rpb24iLCJuZXh0IiwicHJldiIsImtleSIsIl9zb3J0IiwicHJvcHMiLCJzb3J0RnVuY3Rpb24iLCJfX29uU29ydCIsInNvcnQiLCJzdGF0ZSIsImZvcmNlVXBkYXRlIiwiX19vbkZpbHRlciIsImZpbHRlciIsImNvbnNvbGUiLCJsb2ciLCJfX3Rib2R5RGF0YVJlbmRlciIsInRib2R5IiwiX190Ym9keUxvYWRpbmdSZW5kZXIiLCJfX29uVEhlYWRDb2x1bW5DaGFuZ2UiLCJpbmRleCIsIl9fdGJvZHlEYXRhTG9hZGVkIiwicmVzcG9uc2UiLCJfcmV0dXJuIiwib25EYXRhTG9hZGVkIiwic2V0U3RhdGUiLCJfX29uRGF0YUNyZWF0ZWQiLCJsaWZ5Y3ljbGUiLCJvbkRhdGFDcmVhdGVkIiwiX19yZW5kZXJUQm9keSIsIl9kYXRhIiwiX3Jlc3VsdCIsIm9uRGF0YUluaXRpYWwiLCJfX3JlbmRlciIsInJlYWN0IiwiY2xhc3NuYW1lIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJ3aWR0aCIsImZpeGVkIiwiY2VsbFBhZGRpbmciLCJjZWxsU3BhY2luZyIsImF0dHJzIiwiY2FwdGlvbiIsInJlbmRlciIsImNvbGdyb3VwIiwidGhlYWQiLCJ0ZmlsdGVyIiwidGZvb3QiLCJjaGlsZHJlblJlbmRlciIsImNoaWxkcmVuIiwiX19pbml0Q2hlY2tib3giLCJfY2hlY2tib3giLCJoZWFkIiwiYXJndiIsIl90YWJsZSIsImp1c3RpZnlDb250ZW50IiwibGVuZ3RoIiwiZXZlbnQiLCJjaGVja2VkIiwic2xpY2UiLCJvbkNoZWNrYm94Q2hhbmdlIiwiYmluZCIsImJvZHkiLCJpbmRleE9mIiwiY2hlY2tib3giLCJzdG9wUHJvcGFnYXRpb24iLCJzcGxpY2UiLCJwdXNoIiwiX3ZhbHVlIiwiem4iLCJ0eXBlIiwiZXh0ZW5kIiwidW5zaGlmdCIsIl9fY29sdW1uc0xvYWRlZCIsIl90ZW1wIiwiX2NvbHVtbkl0ZXJhdG9yIiwiY29sdW1uSXRlcmF0b3IiLCJfY29sdW1ucyIsIm1hcCIsImNvbHVtbiIsImRlZXBBc3NpZ24iLCJvbkNvbHVtbnNMb2FkZWQiLCJUYWJsZSIsImlucHV0IiwiX19jZWxsQ2hhbmdlIiwidGNlbGwiLCJuYW1lIiwidmFsdWUiLCJ0cm93IiwiX19jb2x1bW5Cb2R5UmVuZGVyIiwiX19jb2x1bW5JdGVyYXRvciIsInBhZ2VyIiwidG90YWwiLCJjb3VudCIsImN1cnJlbnQiLCJfX2hhbmRsZVBhZ2VDaGFuZ2VkIiwicGFnZSIsIm9uUGFnZUNoYW5nZWQiLCJfX3JlbmRlclBhZ2VyIiwiX2NvbHVtblNpemUiLCJfc3RhdGUiLCJfcGFnZXJQcm9wcyIsIl9Db21wb25lbnQiLCJTaW1wbGVQYWdlciIsImlzIiwicGF0aCIsIndpbmRvdyIsIl9lbGVtZW50IiwiY3JlYXRlUmVhY3RFbGVtZW50IiwicGFnZXJSZW5kZXIiLCJfX29uRGF0YUluaXRpYWwiLCJfbWV0aG9kIiwibWV0aG9kIiwiX3BhcmFtcyIsIl9rZXlNYXBzIiwicGFnZUluZGV4IiwicGFnZVNpemUiLCJrZXlNYXBzIiwicGFyYW1zIiwiX19nZXRQYWdlQ291bnQiLCJfY291bnQiLCJwYXJzZUludCIsIl9fb25EYXRhTG9hZGVkIiwidGFibGVQYWdlciIsIlJlYWN0RE9NIiwiQ2hlY2tib3giLCJfX29uQ2hlY2tib3hDaGFuZ2UiLCJfX29uSGVhZENoYW5nZSIsIl9fb25Cb2R5Q2hhbmdlIiwiY2VsbCIsIlRhYmxlRWRpdG9yIiwiVGFibGVQYWdlciIsIml0ZW0iLCJUUm93IiwibG9hZGVyIiwiYWN0aXZlIiwibG9hZGluZyIsIl9fcmVuZGVyTG9hZGluZyIsImxvYWRpbmdSZW5kZXIiLCJfbG9hZGluZyIsIl9fcmVuZGVyRW1wdHkiLCJlbXB0eVJlbmRlciIsIl9lbXB0eSIsImVtcHR5IiwiX19vblJvd0NsaWNrIiwib25Sb3dDbGljayIsIl9fb25DZWxsQ2xpY2siLCJvbkNlbGxDbGljayIsIl9fcmVuZGVyUm93IiwiZWFjaFJvd0RhdGEiLCJyb3dSZW5kZXIiLCJyb3dJbmRleCIsInJvdyIsImNlbGxSZW5kZXIiLCJfX3JlbmRlckRhdGEiLCJkaXNhYmxlZCIsIl9fcmVuZGVyQ2VsbENvbnRlbnQiLCJfcmVuZGVyIiwiY2VsbEluZGV4IiwiX19jZWxsQ2xpY2siLCJ0ZCIsImZpbmRET01Ob2RlIiwib25DbGljayIsIl9fb25GaWx0ZXJDaGFuZ2UiLCJvcHQiLCJvbkZpbHRlciIsIl9fb25GaWx0ZXJDYW5jZWwiLCJfX3JlbmRlckNlbGwiLCJfY29udGVudCIsIl9jZWxsIiwiX3JvdyIsIl9fcmVuZGVyQ2hpbGRyZW4iLCJmb290IiwiVEhlYWRTb3J0IiwicG9wdXAiLCJTVkdJY29uIiwianNvbmVkaXRvciIsIl9fb25Db2x1bW5Tb3J0Iiwib25Tb3J0IiwiX19vbkNvbHVtbkVkaXRvckNoYW5nZSIsImNoaWxkIiwicm9vdCIsIl9yb290Iiwib25Db2x1bW5DaGFuZ2UiLCJfX2ljb25DbGlja1JlbmRlciIsInBhZGRpbmciLCJtYXhIZWlnaHQiLCJvdmVyZmxvdyIsImxhYmVsIiwiZWRpdGFibGUiLCJjbG9zZWFibGUiLCJfX2ljb25DbGljayIsIlRDZWxsIiwiX19nZXRUYXJnZXRURCIsInRhcmdldCIsInRhZ05hbWUiLCJwYXJlbnROb2RlIiwiX3RkIiwiX3RyIiwidHIiLCJfX2NlbGxSZW5kZXIiLCJfcHJvcHMiLCJDb2xncm91cCIsIlRGaWx0ZXIiLCJUQm9keSIsIlRGb290IiwiVEhlYWQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3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O0FDQWhELGFBQWEsK0JBQStCLEVBQUUsSTs7Ozs7Ozs7Ozs7QUNBOUMsYUFBYSxnQ0FBZ0MsRUFBRSxJOzs7Ozs7Ozs7OztBQ0EvQyxhQUFhLGlDQUFpQyxFQUFFLEk7Ozs7Ozs7Ozs7O0FDQWhELGFBQWEsZ0NBQWdDLEVBQUUsSTs7Ozs7Ozs7Ozs7QUNBL0MsYUFBYSxnQ0FBZ0MsRUFBRSxJOzs7Ozs7Ozs7OztBQ0EvQyxhQUFhLG1DQUFtQyxFQUFFLEkiLCJmaWxlIjoiLi9kaXN0L2RldmVsb3BtZW50L2luZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgdGFibGUgPSByZXF1aXJlKCcuL3RhYmxlL2luZGV4Jyk7XG52YXIgc2VsZWN0b3IgPSByZXF1aXJlKCd6bnVpLXJlYWN0LXNlbGVjdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJUYWJsZScsXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGRhdGE6IG51bGwsIFxuXHRcdFx0Y29sdW1uczogW10sXG5cdFx0XHRjaGVja2VkczogW11cblx0XHR9O1xuXHR9LFxuXHRfX3NvcnRGdW5jdGlvbjogZnVuY3Rpb24gKG5leHQsIHByZXYsIGtleSwgX3NvcnQpe1xuXHRcdGlmKHRoaXMucHJvcHMuc29ydEZ1bmN0aW9uKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5wcm9wcy5zb3J0RnVuY3Rpb24obmV4dCwgcHJldiwga2V5LCBfc29ydCk7XG5cdFx0fVxuXHRcdGlmKF9zb3J0PT0nZGVzYycpe1xuXHRcdFx0aWYobmV4dFtrZXldID4gcHJldltrZXldKXtcblx0XHRcdFx0cmV0dXJuIDE7XG5cdFx0XHR9ZWxzZSBpZihuZXh0W2tleV0gPT0gcHJldltrZXldKXtcblx0XHRcdFx0cmV0dXJuIDA7XG5cdFx0XHR9ZWxzZSBpZihuZXh0W2tleV0gPCBwcmV2W2tleV0pe1xuXHRcdFx0XHRyZXR1cm4gLTE7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKF9zb3J0PT0nYXNjJyl7XG5cdFx0XHRpZihuZXh0W2tleV0gPCBwcmV2W2tleV0pe1xuXHRcdFx0XHRyZXR1cm4gMTtcblx0XHRcdH1lbHNlIGlmKG5leHRba2V5XSA9PSBwcmV2W2tleV0pe1xuXHRcdFx0XHRyZXR1cm4gMDtcblx0XHRcdH1lbHNlIGlmKG5leHRba2V5XSA+IHByZXZba2V5XSl7XG5cdFx0XHRcdHJldHVybiAtMTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdF9fb25Tb3J0OiBmdW5jdGlvbiAoc29ydCl7XG5cdFx0dmFyIF9zb3J0ID0gbnVsbDtcblx0XHRmb3IodmFyIGtleSBpbiBzb3J0KXtcblx0XHRcdF9zb3J0ID0gc29ydFtrZXldXG5cdFx0XHR0aGlzLnN0YXRlLmRhdGEgPSB0aGlzLnN0YXRlLmRhdGEuc29ydCgobmV4dCwgcHJldikgPT4gdGhpcy5fX3NvcnRGdW5jdGlvbihuZXh0LCBwcmV2LCBrZXksIF9zb3J0KSk7XG5cdFx0fVxuXG5cdFx0dGhpcy5mb3JjZVVwZGF0ZSgpO1xuXHR9LFxuXHRfX29uRmlsdGVyOiBmdW5jdGlvbiAoZmlsdGVyKXtcblx0XHRjb25zb2xlLmxvZyhmaWx0ZXIsIHRoaXMuc3RhdGUuZGF0YSk7XG5cdH0sXG5cdF9fdGJvZHlEYXRhUmVuZGVyOiBmdW5jdGlvbiAoY29sdW1ucyl7XG5cdFx0cmV0dXJuIDx0YWJsZS5UQm9keSB7Li4udGhpcy5wcm9wcy50Ym9keX0gY29sdW1ucz17Y29sdW1uc30gZGF0YT17dGhpcy5zdGF0ZS5kYXRhfSB0YWJsZT17dGhpc30gLz47XG5cdH0sXG5cdF9fdGJvZHlMb2FkaW5nUmVuZGVyOiBmdW5jdGlvbiAoY29sdW1ucyl7XG5cdFx0cmV0dXJuIDx0YWJsZS5UQm9keSB7Li4udGhpcy5wcm9wcy50Ym9keX0gY29sdW1ucz17Y29sdW1uc30gbG9hZGluZz17dHJ1ZX0gdGFibGU9e3RoaXN9IC8+O1xuXHR9LFxuXHRfX29uVEhlYWRDb2x1bW5DaGFuZ2U6IGZ1bmN0aW9uIChkYXRhLCBpbmRleCl7XG5cdFx0aWYodGhpcy5zdGF0ZS5jb2x1bW5zKXtcblx0XHRcdHRoaXMuc3RhdGUuY29sdW1uc1tpbmRleF0gPSBkYXRhO1xuXHRcdFx0dGhpcy5mb3JjZVVwZGF0ZSgpO1xuXHRcdH1cblx0fSxcblx0X190Ym9keURhdGFMb2FkZWQ6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdHZhciBfcmV0dXJuID0gdGhpcy5wcm9wcy5vbkRhdGFMb2FkZWQgJiYgdGhpcy5wcm9wcy5vbkRhdGFMb2FkZWQocmVzcG9uc2UsIHRoaXMpO1xuXHRcdGlmKF9yZXR1cm4gIT09IGZhbHNlKXtcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBkYXRhOiByZXNwb25zZSB9KTtcblx0XHR9XG5cdH0sXG5cdF9fb25EYXRhQ3JlYXRlZDogZnVuY3Rpb24gKGRhdGEsIGxpZnljeWNsZSl7XG5cdFx0dGhpcy5kYXRhID0gZGF0YTtcblx0XHR0aGlzLnByb3BzLm9uRGF0YUNyZWF0ZWQgJiYgdGhpcy5wcm9wcy5vbkRhdGFDcmVhdGVkKGRhdGEsIHRoaXMpO1xuXHR9LFxuXHRfX3JlbmRlclRCb2R5OiBmdW5jdGlvbiAoY29sdW1ucyl7XG5cdFx0dmFyIF9kYXRhID0gdGhpcy5wcm9wcy5kYXRhIHx8IHRoaXMucHJvcHMudGJvZHkuZGF0YTtcblx0XHR2YXIgX3Jlc3VsdCA9IHRoaXMucHJvcHMub25EYXRhSW5pdGlhbCAmJiB0aGlzLnByb3BzLm9uRGF0YUluaXRpYWwoX2RhdGEsIHRoaXMpO1xuXHRcdGlmKF9yZXN1bHQpe1xuXHRcdFx0X2RhdGEgPSBfcmVzdWx0O1xuXHRcdH1cblx0XHRyZXR1cm4gPHpudWkucmVhY3QuRGF0YUxpZmVjeWNsZSBkYXRhPXtfZGF0YX0gXG5cdFx0XHRcdFx0cmVuZGVyPXsoKT0+dGhpcy5fX3Rib2R5RGF0YVJlbmRlcihjb2x1bW5zKX0gXG5cdFx0XHRcdFx0bG9hZGluZ1JlbmRlcj17KCk9PnRoaXMuX190Ym9keUxvYWRpbmdSZW5kZXIoY29sdW1ucyl9XG5cdFx0XHRcdFx0b25EYXRhQ3JlYXRlZD17dGhpcy5fX29uRGF0YUNyZWF0ZWR9XG5cdFx0XHRcdFx0b25GaW5pc2hlZD17dGhpcy5fX3Rib2R5RGF0YUxvYWRlZH0gLz47XG5cdH0sXG5cdF9fcmVuZGVyOiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgY29sdW1ucyA9IHRoaXMuc3RhdGUuY29sdW1ucztcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHRhYmxlIGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci10YWJsZVwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IFxuXHRcdFx0XHRzdHlsZT17em51aS5yZWFjdC5zdHlsZSh0aGlzLnByb3BzLnN0eWxlLCB7IHdpZHRoOiB0aGlzLnByb3BzLndpZHRoIH0pfSBcblx0XHRcdFx0ZGF0YS1maXhlZD17dGhpcy5wcm9wcy5maXhlZH0gXHRcblx0XHRcdFx0Y2VsbFBhZGRpbmc9e3RoaXMucHJvcHMuY2VsbFBhZGRpbmcgfHwgMH0gXG5cdFx0XHRcdGNlbGxTcGFjaW5nPXt0aGlzLnByb3BzLmNlbGxTcGFjaW5nIHx8IDB9IHsuLi50aGlzLnByb3BzLmF0dHJzfT5cblx0XHRcdFx0eyAhIXRoaXMucHJvcHMuY2FwdGlvbiAmJiA8Y2FwdGlvbiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2FwdGlvbi5jbGFzc05hbWV9IHN0eWxlPXt0aGlzLnByb3BzLmNhcHRpb24uc3R5bGV9Pnt0aGlzLnByb3BzLmNhcHRpb24ucmVuZGVyfTwvY2FwdGlvbj4gfVxuXHRcdFx0XHR7ICEhdGhpcy5wcm9wcy5jb2xncm91cCAmJiA8dGFibGUuQ29sZ3JvdXAgY29sdW1ucz17Y29sdW1uc30gey4uLnRoaXMucHJvcHMuY29sZ3JvdXB9IC8+IH1cblx0XHRcdFx0eyAhIXRoaXMucHJvcHMudGhlYWQgJiYgPHRhYmxlLlRIZWFkIG9uU29ydD17dGhpcy5fX29uU29ydH0gIG9uQ29sdW1uQ2hhbmdlPXt0aGlzLl9fb25USGVhZENvbHVtbkNoYW5nZX0gY29sdW1ucz17Y29sdW1uc30gey4uLnRoaXMucHJvcHMudGhlYWR9IHRhYmxlPXt0aGlzfSAvPn1cblx0XHRcdFx0eyAhIXRoaXMucHJvcHMudGZpbHRlciAmJiA8dGFibGUuVEZpbHRlciBvbkZpbHRlcj17dGhpcy5fX29uRmlsdGVyfSBjb2x1bW5zPXtjb2x1bW5zfSB7Li4udGhpcy5wcm9wcy5maWx0ZXJ9IHRhYmxlPXt0aGlzfSAvPn1cblx0XHRcdFx0eyAodGhpcy5wcm9wcy50Ym9keSB8fCB0aGlzLnByb3BzLmRhdGEpICYmIHRoaXMuX19yZW5kZXJUQm9keShjb2x1bW5zKSB9XG5cdFx0XHRcdHsgISF0aGlzLnByb3BzLnRmb290ICYmIDx0YWJsZS5URm9vdCBjb2x1bW5zPXtjb2x1bW5zfSB7Li4udGhpcy5wcm9wcy50Zm9vdH0gdGFibGU9e3RoaXN9IC8+fVxuXHRcdFx0XHR7IHRoaXMucHJvcHMuY2hpbGRyZW5SZW5kZXIgJiYgdGhpcy5wcm9wcy5jaGlsZHJlblJlbmRlcihjb2x1bW5zLCB0aGlzKSB9XG5cdFx0XHRcdHsgdGhpcy5wcm9wcy5jaGlsZHJlbiB9XG5cdFx0XHQ8L3RhYmxlPlxuXHRcdCk7XG5cdH0sXG5cdF9faW5pdENoZWNrYm94OiBmdW5jdGlvbiAoY29sdW1ucyl7XG5cdFx0dmFyIF9jaGVja2JveCA9IHtcblx0XHRcdFx0d2lkdGg6IDYwLFxuXHRcdFx0XHRoZWFkOiBmdW5jdGlvbiAoYXJndil7XG5cdFx0XHRcdFx0dmFyIF90YWJsZSA9IGFyZ3YudGhlYWQucHJvcHMudGFibGU7XG5cdFx0XHRcdFx0cmV0dXJuIDxzZWxlY3Rvci5DaGVja2JveFxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fVxuXHRcdFx0XHRcdFx0XHRcdGtleT17dGhpcy5zdGF0ZS5jaGVja2Vkcy5sZW5ndGh9XG5cdFx0XHRcdFx0XHRcdFx0dGV4dD17JygnICsgX3RhYmxlLnN0YXRlLmNoZWNrZWRzLmxlbmd0aCArJyknfVxuXHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQ9eyEhX3RhYmxlLnN0YXRlLmRhdGEubGVuZ3RoICYmIF90YWJsZS5zdGF0ZS5jaGVja2Vkcy5sZW5ndGggPT09IF90YWJsZS5zdGF0ZS5kYXRhLmxlbmd0aH1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGV2ZW50KT0+e1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYoZXZlbnQuY2hlY2tlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnN0YXRlLmNoZWNrZWRzID0gdGhpcy5zdGF0ZS5kYXRhLnNsaWNlKDApO1xuXHRcdFx0XHRcdFx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc3RhdGUuY2hlY2tlZHMgPSBbXTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuZm9yY2VVcGRhdGUoKTtcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMub25DaGVja2JveENoYW5nZSAmJiB0aGlzLnByb3BzLm9uQ2hlY2tib3hDaGFuZ2UodGhpcy5zdGF0ZS5jaGVja2VkcywgdGhpcyk7XG5cdFx0XHRcdFx0XHRcdFx0fX0gLz47XG5cdFx0XHRcdH0uYmluZCh0aGlzKSxcblx0XHRcdFx0Ym9keTogZnVuY3Rpb24gKGFyZ3Ype1xuXHRcdFx0XHRcdHZhciBfZGF0YSA9IGFyZ3YuZGF0YTtcblx0XHRcdFx0XHRyZXR1cm4gPHNlbGVjdG9yLlVuY29udHJvbENoZWNrYm94IFxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fVxuXHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQ9e3RoaXMuc3RhdGUuY2hlY2tlZHMuaW5kZXhPZihfZGF0YSkgIT09IC0xfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyhldmVudCwgY2hlY2tib3gpPT57XG5cdFx0XHRcdFx0XHRcdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0XHRcdFx0XHRcdGlmKGNoZWNrYm94LnByb3BzLmNoZWNrZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zdGF0ZS5jaGVja2Vkcy5zcGxpY2UodGhpcy5zdGF0ZS5jaGVja2Vkcy5pbmRleE9mKF9kYXRhKSwgMSk7IFxuXHRcdFx0XHRcdFx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc3RhdGUuY2hlY2tlZHMucHVzaChfZGF0YSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmZvcmNlVXBkYXRlKCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLm9uQ2hlY2tib3hDaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkNoZWNrYm94Q2hhbmdlKHRoaXMuc3RhdGUuY2hlY2tlZHMsIHRoaXMpO1xuXHRcdFx0XHRcdFx0XHRcdH19IC8+O1xuXHRcdFx0XHR9LmJpbmQodGhpcylcblx0XHRcdH0sXG5cdFx0XHRfdmFsdWUgPSB0aGlzLnByb3BzLmNoZWNrYm94O1xuXHRcdHN3aXRjaCh6bi50eXBlKF92YWx1ZSkpIHtcblx0XHRcdGNhc2UgJ29iamVjdCc6XG5cdFx0XHRcdF9jaGVja2JveCA9IHpuLmV4dGVuZCh7fSwgX3ZhbHVlKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdudW1iZXInOlxuXHRcdFx0XHRfY2hlY2tib3gud2lkdGggPSBfdmFsdWU7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHRpZihfdmFsdWUpIHtcblx0XHRcdGNvbHVtbnMgPSBjb2x1bW5zLnVuc2hpZnQoX2NoZWNrYm94KTtcblx0XHR9XG5cdH0sXG5cdF9fY29sdW1uc0xvYWRlZDogZnVuY3Rpb24gKGNvbHVtbnMpe1xuXHRcdHZhciBfdGVtcCA9IG51bGwsXG5cdFx0XHRfcmVzdWx0ID0gbnVsbCxcblx0XHRcdF9jb2x1bW5JdGVyYXRvciA9IHRoaXMucHJvcHMuY29sdW1uSXRlcmF0b3IsXG5cdFx0XHRfY29sdW1ucyA9IGNvbHVtbnMubWFwKGZ1bmN0aW9uIChjb2x1bW4pe1xuXHRcdFx0XHRfdGVtcCA9IHpuLmRlZXBBc3NpZ24oe30sIGNvbHVtbik7XG5cdFx0XHRcdF9yZXN1bHQgPSBfY29sdW1uSXRlcmF0b3IgJiYgX2NvbHVtbkl0ZXJhdG9yKF90ZW1wLCB0aGlzKTtcblx0XHRcdFx0aWYoX3Jlc3VsdCA9PT0gZmFsc2UpIHJldHVybiBudWxsO1xuXHRcdFx0XHRpZih0eXBlb2YgX3Jlc3VsdCA9PSAnb2JqZWN0JykgcmV0dXJuIF9yZXN1bHQ7XG5cblx0XHRcdFx0cmV0dXJuIF90ZW1wO1xuXHRcdFx0fS5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLl9faW5pdENoZWNrYm94KF9jb2x1bW5zKTtcblx0XHR0aGlzLnByb3BzLm9uQ29sdW1uc0xvYWRlZCAmJiB0aGlzLnByb3BzLm9uQ29sdW1uc0xvYWRlZChjb2x1bW5zKTtcblx0XHR0aGlzLnNldFN0YXRlKHsgY29sdW1uczogX2NvbHVtbnMgfSk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gPHpudWkucmVhY3QuRGF0YUxpZmVjeWNsZSBvbkZpbmlzaGVkPXt0aGlzLl9fY29sdW1uc0xvYWRlZH0gZGF0YT17dGhpcy5wcm9wcy5jb2x1bW5zfSByZW5kZXI9e3RoaXMuX19yZW5kZXJ9IC8+XG5cdH1cbn0pOyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBUYWJsZSA9IHJlcXVpcmUoJy4vVGFibGUnKTtcbnZhciBpbnB1dCA9IHJlcXVpcmUoJ3pudWktcmVhY3QtaW5wdXQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUlRhYmxlRWRpdG9yJyxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y29sdW1uczogW11cblx0XHR9O1xuXHR9LFxuXHRfX2NlbGxDaGFuZ2U6IGZ1bmN0aW9uIChldmVudCwgYXJndil7XG5cdFx0Ly9jb25zb2xlLmxvZyhldmVudCk7XG5cdFx0Ly9jb25zb2xlLmxvZyhhcmd2KTtcblx0XHRhcmd2LmRhdGFbYXJndi50Y2VsbC5wcm9wcy5uYW1lXSA9IGV2ZW50LnZhbHVlO1xuXHRcdGFyZ3YudHJvdy5mb3JjZVVwZGF0ZSgpO1xuXHR9LFxuXHRfX2NvbHVtbkJvZHlSZW5kZXI6IGZ1bmN0aW9uIChhcmd2KXtcblx0XHRyZXR1cm4gPGlucHV0LklucHV0IGtleT17YXJndi52YWx1ZX0gdmFsdWU9e2FyZ3YudmFsdWV9IG9uRW50ZXI9eyhldmVudCk9PnRoaXMuX19jZWxsQ2hhbmdlKGV2ZW50LCBhcmd2KX0gLz47XG5cdH0sXG5cdF9fY29sdW1uSXRlcmF0b3I6IGZ1bmN0aW9uIChjb2x1bW4sIHRhYmxlKXtcblx0XHRpZighY29sdW1uLmJvZHkpIHtcblx0XHRcdGNvbHVtbi5ib2R5ID0gdGhpcy5fX2NvbHVtbkJvZHlSZW5kZXI7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNvbHVtbjtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8VGFibGUgey4uLnRoaXMucHJvcHN9IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLXRhYmxlLWVkaXRvcicsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gY29sdW1uSXRlcmF0b3I9e3RoaXMuX19jb2x1bW5JdGVyYXRvcn0gLz5cblx0XHQpXG5cdH1cbn0pOyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBUYWJsZSA9IHJlcXVpcmUoJy4vVGFibGUnKTtcbnZhciBwYWdlciA9IHJlcXVpcmUoJ3pudWktcmVhY3QtcGFnZXInKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUlRhYmxlUGFnZXInLFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHR0b3RhbDogMCxcblx0XHRcdGNvdW50OiAwLFxuXHRcdFx0Y3VycmVudDogMSxcblx0XHRcdGRhdGE6IG51bGxcblx0XHR9O1xuXHR9LFxuXHRfX2hhbmRsZVBhZ2VDaGFuZ2VkOiBmdW5jdGlvbiAocGFnZSwgcGFnZXIpe1xuXHRcdHRoaXMuc3RhdGUuY3VycmVudCA9IHBhZ2U7XG5cdFx0dGhpcy5wcm9wcy5vblBhZ2VDaGFuZ2VkICYmIHRoaXMucHJvcHMub25QYWdlQ2hhbmdlZChwYWdlLCBwYWdlciwgdGhpcyk7XG5cdFx0aWYodGhpcy5kYXRhKXtcblx0XHRcdGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuZGF0YSwgdGhpcy5kYXRhKTtcblx0XHR9XG5cdFx0dGhpcy5mb3JjZVVwZGF0ZSgpO1xuXHR9LFxuXHRfX3JlbmRlclBhZ2VyOiBmdW5jdGlvbiAoY29sdW1ucywgdGFibGUpe1xuXHRcdHZhciBfY29sdW1uU2l6ZSA9IGNvbHVtbnMubGVuZ3RoO1xuXHRcdGlmKCFfY29sdW1uU2l6ZSl7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0dmFyIF9zdGF0ZSA9IHRoaXMuc3RhdGUsXG5cdFx0XHRfcGFnZXJQcm9wcyA9IHtcblx0XHRcdFx0dG90YWw6IF9zdGF0ZS50b3RhbCxcblx0XHRcdFx0Y291bnQ6IF9zdGF0ZS5jb3VudCxcblx0XHRcdFx0Y3VycmVudDogX3N0YXRlLmN1cnJlbnQsXG5cdFx0XHRcdG9uUGFnZUNoYW5nZWQ6IHRoaXMuX19oYW5kbGVQYWdlQ2hhbmdlZFxuXHRcdFx0fSxcblx0XHRcdF9Db21wb25lbnQgPSB0aGlzLnByb3BzLnBhZ2VyIHx8IHBhZ2VyLlNpbXBsZVBhZ2VyO1xuXHRcdGlmKHpuLmlzKF9Db21wb25lbnQsICdzdHJpbmcnKSl7XG5cdFx0XHRfQ29tcG9uZW50ID0gem4ucGF0aCh3aW5kb3csIF9Db21wb25lbnQpO1xuXHRcdH1cblxuXHRcdHZhciBfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMucGFnZXJSZW5kZXIsIF9wYWdlclByb3BzKTtcblxuXHRcdGlmKCFfZWxlbWVudCl7XG5cdFx0IFx0X2VsZW1lbnQgPSA8X0NvbXBvbmVudCB7Li4uX3BhZ2VyUHJvcHN9IC8+O1xuXHRcdH1cblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8dGZvb3QgY2xhc3NOYW1lPVwidGFibGUtcGFnZXJcIj5cblx0XHRcdFx0PHRyIGNsYXNzTmFtZT1cInBhZ2VyLXJvd1wiPlxuXHRcdFx0XHRcdDx0ZCBjb2xTcGFuPXtfY29sdW1uU2l6ZX0+e19lbGVtZW50fTwvdGQ+XG5cdFx0XHRcdDwvdHI+XG5cdFx0XHQ8L3Rmb290PlxuXHRcdCk7XG5cdH0sXG5cdF9fb25EYXRhSW5pdGlhbDogZnVuY3Rpb24gKGRhdGEpe1xuXHRcdHZhciBfbWV0aG9kID0gZGF0YS5tZXRob2R8fCdwb3N0Jyxcblx0XHRcdF9wYXJhbXMgPSB7fSxcblx0XHRcdF9rZXlNYXBzID0gem4uZGVlcEFzc2lnbih7XG5cdFx0XHRcdHRvdGFsOiBcInRvdGFsXCIsXG5cdFx0XHRcdHBhZ2VJbmRleDogJ3BhZ2VJbmRleCcsXG5cdFx0XHRcdHBhZ2VTaXplOiAncGFnZVNpemUnLFxuXHRcdFx0XHRkYXRhOiAnZGF0YSdcblx0XHRcdH0sIHRoaXMucHJvcHMua2V5TWFwcyk7XG5cblxuXHRcdF9wYXJhbXNbX2tleU1hcHMucGFnZUluZGV4XSA9IHRoaXMucHJvcHMucGFnZUluZGV4IHx8IDE7XG5cdFx0X3BhcmFtc1tfa2V5TWFwcy5wYWdlU2l6ZV0gPSB0aGlzLnByb3BzLnBhZ2VTaXplIHx8IDEwO1xuXHRcdGlmKF9tZXRob2QgPT0gJ2dldCcpe1xuXHRcdFx0ZGF0YSA9IHpuLmRlZXBBc3NpZ24oZGF0YSwge1xuXHRcdFx0XHRwYXJhbXM6IF9wYXJhbXNcblx0XHRcdH0pO1xuXHRcdH1lbHNle1xuXHRcdFx0ZGF0YSA9IHpuLmRlZXBBc3NpZ24oZGF0YSwge1xuXHRcdFx0XHRkYXRhOiBfcGFyYW1zXG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0dGhpcy5zdGF0ZS5rZXlNYXBzID0gX2tleU1hcHM7XG5cblx0XHRyZXR1cm4gdGhpcy5zdGF0ZS5kYXRhID0gZGF0YSwgZGF0YTtcblx0fSxcblx0X19vbkRhdGFDcmVhdGVkOiBmdW5jdGlvbiAoZGF0YSwgdGFibGUpe1xuXHRcdHRoaXMuZGF0YSA9IGRhdGE7XG5cdH0sXG5cdF9fZ2V0UGFnZUNvdW50OiBmdW5jdGlvbih0b3RhbCwgcGFnZVNpemUpIHtcbiAgICAgICAgdmFyIF9jb3VudCA9IHBhcnNlSW50KHRvdGFsL3BhZ2VTaXplKTtcbiAgICAgICAgaWYoKHRvdGFsJXBhZ2VTaXplKT4wKXtcbiAgICAgICAgICAgIF9jb3VudCArPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIF9jb3VudDtcbiAgICB9LFxuXHRfX29uRGF0YUxvYWRlZDogZnVuY3Rpb24gKHJlc3BvbnNlLCB0YWJsZSl7XG5cdFx0dmFyIF9kYXRhID0gcmVzcG9uc2UuZGF0YTtcblx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMub25EYXRhTG9hZGVkICYmIHRoaXMucHJvcHMub25EYXRhTG9hZGVkKF9kYXRhLCB0YWJsZSwgdGFibGVQYWdlcik7XG5cdFx0aWYoX3JldHVybiAhPT0gZmFsc2Upe1xuXHRcdFx0dGFibGUuc2V0U3RhdGUoe1xuXHRcdFx0XHRkYXRhOiBfZGF0YVt0aGlzLnN0YXRlLmtleU1hcHMuZGF0YV1cblx0XHRcdH0pO1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdHRvdGFsOiB0aGlzLl9fZ2V0UGFnZUNvdW50KHRoaXMuc3RhdGUua2V5TWFwcy50b3RhbCwgdGhpcy5zdGF0ZS5rZXlNYXBzLnBhZ2VTaXplKSxcblx0XHRcdFx0Y291bnQ6IF9kYXRhW3RoaXMuc3RhdGUua2V5TWFwcy50b3RhbF0sXG5cdFx0XHRcdGN1cnJlbnQ6IF9kYXRhW3RoaXMuc3RhdGUua2V5TWFwcy5wYWdlSW5kZXhdLFxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxUYWJsZSB7Li4udGhpcy5wcm9wc30gY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItdGFibGUtcGFnZXInLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IFxuXHRcdFx0XHRjaGlsZHJlblJlbmRlcj17dGhpcy5fX3JlbmRlclBhZ2VyfVxuXHRcdFx0XHRvbkRhdGFJbml0aWFsPXt0aGlzLl9fb25EYXRhSW5pdGlhbH1cblx0XHRcdFx0b25EYXRhQ3JlYXRlZD17dGhpcy5fX29uRGF0YUNyZWF0ZWR9XG5cdFx0XHRcdG9uRGF0YUxvYWRlZD17dGhpcy5fX29uRGF0YUxvYWRlZH0gLz5cblx0XHQpO1xuXHR9XG59KTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUmVhY3RET00gPSB6bnVpLlJlYWN0RE9NIHx8IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xudmFyIENoZWNrYm94ID0gcmVxdWlyZSgnem51aS1yZWFjdC1zZWxlY3RvcicpLkNoZWNrYm94O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSVENlbGxDaGVja2JveCcsXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRjaGVja2VkOiB0aGlzLnByb3BzLmNoZWNrZWQgfHwgZmFsc2Vcblx0XHR9XG5cdH0sXG5cdF9fb25DaGVja2JveENoYW5nZTogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRpZih0aGlzLnByb3BzLnRoZWFkKSB7XG5cdFx0XHR0aGlzLl9fb25IZWFkQ2hhbmdlKGV2ZW50KTtcblx0XHR9ZWxzZSBpZih0aGlzLnByb3BzLnRib2R5KSB7XG5cdFx0XHR0aGlzLl9fb25Cb2R5Q2hhbmdlKGV2ZW50KTtcblx0XHR9XG5cdH0sXG5cdF9fb25IZWFkQ2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdGNvbnNvbGUubG9nKGV2ZW50LmNoZWNrZWQsIHRoaXMucHJvcHMpO1xuXHR9LFxuXHRfX29uQm9keUNoYW5nZTogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHRjb25zb2xlLmxvZyhldmVudC5jaGVja2VkLCB0aGlzLnByb3BzKTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInpyLXRhYmxlLWNlbGwtY2hlY2tib3hcIj48Q2hlY2tib3ggY2hlY2tlZD17dHJ1ZX0gb25DaGFuZ2U9e3RoaXMuX19vbkNoZWNrYm94Q2hhbmdlfS8+PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBDaGVja2JveDogcmVxdWlyZSgnLi9DaGVja2JveCcpLFxuICAgIC8vQnV0dG9uczogcmVxdWlyZSgnLi9CdXR0b25zJyksXG4gICAgLy9JbnB1dDogcmVxdWlyZSgnLi9JbnB1dCcpLFxuICAgIC8vQ2FsY3VsYXRvcjogcmVxdWlyZSgnLi9DYWxjdWxhdG9yJylcbn07IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgdGFibGU6IHJlcXVpcmUoJy4vdGFibGUvaW5kZXgnKSxcbiAgICBjZWxsOiByZXF1aXJlKCcuL2NlbGwvaW5kZXgnKSxcbiAgICBUYWJsZTogcmVxdWlyZSgnLi9UYWJsZScpLFxuICAgIFRhYmxlRWRpdG9yOiByZXF1aXJlKCcuL1RhYmxlRWRpdG9yJyksXG4gICAgVGFibGVQYWdlcjogcmVxdWlyZSgnLi9UYWJsZVBhZ2VyJylcbn07IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSVGFibGVDb2xncm91cCcsXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGNvbGdyb3VwPlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0KHRoaXMucHJvcHMuY29sdW1uc3x8W10pLm1hcChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcblx0XHRcdFx0XHRcdHJldHVybiA8Y29sIGtleT17aW5kZXh9IHN0eWxlPXt7IHdpZHRoOiBpdGVtLndpZHRoIH19IC8+O1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdDwvY29sZ3JvdXA+XG5cdFx0KTtcblx0fVxufSk7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgVFJvdyA9IHJlcXVpcmUoJy4vVFJvdycpO1xudmFyIGxvYWRlciA9IHJlcXVpcmUoJ3pudWktcmVhY3QtbG9hZGVyJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJUQm9keScsXG5cdGdldEluaXRpYWxTdGF0ZTpmdW5jdGlvbigpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRhY3RpdmU6IG51bGwsXG5cdFx0XHRjaGVja2VkczogW10sXG5cdFx0XHRjbGFzc05hbWU6ICcnLFxuXHRcdFx0c3R5bGU6IHt9LFxuXHRcdFx0bG9hZGluZzogZmFsc2Vcblx0XHR9XG5cdH0sXG5cdF9fcmVuZGVyTG9hZGluZzogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF9lbGVtZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQodGhpcy5wcm9wcy5sb2FkaW5nUmVuZGVyLCB7XG5cdFx0XHR0Ym9keTogdGhpc1xuXHRcdH0pO1xuXG5cdFx0aWYoIV9lbGVtZW50KXtcblx0XHQgXHRfZWxlbWVudCA9IDxsb2FkZXIuRGF0YUxvYWRlciBsb2FkZXI9XCJ3YXZlXCIgdGl0bGU9eydMb2FkaW5nLi4uJ30gLz47XG5cdFx0fVxuXG5cdFx0dmFyIF9sb2FkaW5nID0gem4uZXh0ZW5kKHsgY2xhc3NOYW1lOiAnJywgc3R5bGU6IHt9IH0sIHRoaXMucHJvcHMubG9hZGluZyk7XG5cdFx0cmV0dXJuIDx0ciBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwidGJvZHktbG9hZGluZ1wiLCBfbG9hZGluZy5jbGFzc05hbWUpfSBzdHlsZT17X2xvYWRpbmcuc3R5bGV9PlxuXHRcdFx0PHRkIGNvbFNwYW49e3RoaXMucHJvcHMuY29sdW1ucy5sZW5ndGh9PntfZWxlbWVudH08L3RkPlxuXHRcdDwvdHI+O1xuXHR9LFxuXHRfX3JlbmRlckVtcHR5OiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX2VsZW1lbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudCh0aGlzLnByb3BzLmVtcHR5UmVuZGVyLCB7XG5cdFx0XHR0Ym9keTogdGhpc1xuXHRcdH0pO1xuXG5cdFx0aWYoIV9lbGVtZW50KXtcblx0XHQgXHRfZWxlbWVudCA9IDxkaXYgY2xhc3NOYW1lPVwiZW1wdHktY29udGVudFwiPk5vIERhdGEuPC9kaXY+O1xuXHRcdH1cblx0XHR2YXIgX2VtcHR5ID0gem4uZXh0ZW5kKHsgY2xhc3NOYW1lOiAnJywgc3R5bGU6IHt9IH0sIHRoaXMucHJvcHMuZW1wdHkpO1xuXHRcdHJldHVybiA8dHIgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInRib2R5LWVtcHR5XCIsIF9lbXB0eS5jbGFzc05hbWUpfSBzdHlsZT17X2VtcHR5LnN0eWxlfT5cblx0XHRcdDx0ZCBjb2xTcGFuPXt0aGlzLnByb3BzLmNvbHVtbnMubGVuZ3RofT57X2VsZW1lbnR9PC90ZD5cblx0XHQ8L3RyPjtcblx0fSxcblx0X19vblJvd0NsaWNrOiBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHR2YXIgX2RhdGEgPSBldmVudC5kYXRhO1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0YWN0aXZlOiBfZGF0YS50cm93LnByb3BzLmRhdGFcblx0XHR9KTtcblx0XHRldmVudC50Ym9keSA9IHRoaXM7XG5cdFx0dGhpcy5wcm9wcy5vblJvd0NsaWNrICYmIHRoaXMucHJvcHMub25Sb3dDbGljayhldmVudCk7XG5cdH0sXG5cdF9fb25DZWxsQ2xpY2s6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0ZXZlbnQudGJvZHkgPSB0aGlzO1xuXHRcdHRoaXMucHJvcHMub25DZWxsQ2xpY2sgJiYgdGhpcy5wcm9wcy5vbkNlbGxDbGljayhldmVudCk7XG5cdH0sXG5cdF9fcmVuZGVyUm93OiBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpe1xuXHRcdGlmKCF6bi5pcyhpdGVtLCAnb2JqZWN0JykpIHsgcmV0dXJuIG51bGw7fVxuXHRcdHZhciBfdGVtcCA9IHRoaXMucHJvcHMuZWFjaFJvd0RhdGEgJiYgdGhpcy5wcm9wcy5lYWNoUm93RGF0YShpdGVtLCBpbmRleCk7XG5cdFx0aWYoX3RlbXAgJiYgem4uaXMoX3RlbXAsICdvYmplY3QnKSl7XG5cdFx0XHRpdGVtID0gX3RlbXA7XG5cdFx0fVxuXHRcdHZhciBfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMucm93UmVuZGVyLCB7XG5cdFx0XHRkYXRhOiBpdGVtLFxuXHRcdFx0cm93SW5kZXg6IGluZGV4LFxuXHRcdFx0dGJvZHk6IHRoaXNcblx0XHR9KTtcblxuXHRcdGlmKF9lbGVtZW50KXtcblx0XHRcdHJldHVybiBfZWxlbWVudDtcblx0XHR9XG5cblx0XHRyZXR1cm4gPFRSb3cga2V5PXtpbmRleH0gey4uLnRoaXMucHJvcHMucm93fSBcblx0XHRcdFx0XHRjZWxsPXt0aGlzLnByb3BzLmNlbGx9XG5cdFx0XHRcdFx0Y2VsbFJlbmRlcj17dGhpcy5wcm9wcy5jZWxsUmVuZGVyfVxuXHRcdFx0XHRcdGNvbHVtbnM9e3RoaXMucHJvcHMuY29sdW1uc30gXG5cdFx0XHRcdFx0dGJvZHk9e3RoaXN9XG5cdFx0XHRcdFx0ZGF0YT17aXRlbX0gXG5cdFx0XHRcdFx0YWN0aXZlPXt0aGlzLnN0YXRlLmFjdGl2ZSA9PSBpdGVtfSBcblx0XHRcdFx0XHRjaGVja2VkPXt0aGlzLnN0YXRlLmNoZWNrZWRzLmluZGV4T2YoaXRlbSkgIT09IC0xfSBcblx0XHRcdFx0XHRvblJvd0NsaWNrPXt0aGlzLl9fb25Sb3dDbGlja31cblx0XHRcdFx0XHRvbkNlbGxDbGljaz17dGhpcy5fX29uQ2VsbENsaWNrfSAvPjtcblx0fSxcblx0X19yZW5kZXJEYXRhOiBmdW5jdGlvbiAoKXtcblx0XHRpZih0aGlzLnByb3BzLmRhdGEgPT0gbnVsbCB8fCAodGhpcy5wcm9wcy5kYXRhICYmICF0aGlzLnByb3BzLmRhdGEubGVuZ3RoKSl7XG5cdFx0XHRyZXR1cm4gdGhpcy5fX3JlbmRlckVtcHR5KCk7XG5cdFx0fVxuXHRcdHJldHVybiA8PlxuXHRcdFx0e1xuXHRcdFx0XHR0aGlzLnByb3BzLmRhdGEubWFwKHRoaXMuX19yZW5kZXJSb3cpXG5cdFx0XHR9XG5cdFx0PC8+O1xuXHR9LFxuXHRfX3JlbmRlcjogZnVuY3Rpb24gKCl7XG5cdFx0aWYodGhpcy5wcm9wcy5sb2FkaW5nIHx8IHRoaXMuc3RhdGUubG9hZGluZykge1xuXHRcdFx0cmV0dXJuIHRoaXMuX19yZW5kZXJMb2FkaW5nKCk7XG5cdFx0fWVsc2V7XG5cdFx0XHRyZXR1cm4gdGhpcy5fX3JlbmRlckRhdGEoKTtcblx0XHR9XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHRib2R5IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci10YWJsZS10Ym9keVwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSwgdGhpcy5zdGF0ZS5jbGFzc05hbWUpfSBzdHlsZT17em51aS5yZWFjdC5zdHlsZSh0aGlzLnByb3BzLnN0eWxlLCB0aGlzLnN0YXRlLnN0eWxlKX0+XG5cdFx0XHRcdHsgdGhpcy5fX3JlbmRlcigpIH1cblx0XHRcdDwvdGJvZHk+XG5cdFx0KTtcblx0fVxufSk7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUmVhY3RET00gPSB6bnVpLlJlYWN0RE9NIHx8IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSVENlbGwnLFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y2xhc3NOYW1lOiAnJyxcblx0XHRcdHN0eWxlOiB7fSxcblx0XHRcdGRpc2FibGVkOiB0aGlzLnByb3BzLmRpc2FibGVkLFxuXHRcdFx0Y2hlY2tlZDogdGhpcy5wcm9wcy5jaGVja2VkLFxuXHRcdFx0YWN0aXZlOiB0aGlzLnByb3BzLmFjdGl2ZVxuXHRcdH1cblx0fSxcblx0X19yZW5kZXJDZWxsQ29udGVudDogZnVuY3Rpb24gKCl7XG5cdFx0aWYodGhpcy5wcm9wcy5jaGlsZHJlbikge1xuXHRcdFx0cmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW47XG5cdFx0fVxuXHRcdFxuXHRcdHZhciBfdmFsdWUgPSBudWxsO1xuXHRcdGlmKHRoaXMucHJvcHMuZGF0YSAmJiB0aGlzLnByb3BzLm5hbWUpIHtcblx0XHRcdF92YWx1ZSA9IHRoaXMucHJvcHMuZGF0YVt0aGlzLnByb3BzLm5hbWVdO1xuXHRcdH1cblxuXHRcdHZhciBfcmVuZGVyID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQodGhpcy5wcm9wcy5yZW5kZXIgfHwgdGhpcy5wcm9wcy5ib2R5LCB7XG5cdFx0XHRjZWxsSW5kZXg6IHRoaXMucHJvcHMuY2VsbEluZGV4LCBcblx0XHRcdGNvbHVtbjogdGhpcy5wcm9wcy5jb2x1bW4sXG5cdFx0XHRkYXRhOiB0aGlzLnByb3BzLmRhdGEsXG5cdFx0XHR2YWx1ZTogX3ZhbHVlLFxuXHRcdFx0dGNlbGw6IHRoaXMsXG5cdFx0XHR0cm93OiB0aGlzLnByb3BzLnRyb3csXG5cdFx0XHR0Ym9keTogdGhpcy5wcm9wcy50Ym9keVxuXHRcdH0pO1xuXHRcdFxuXHRcdGlmKF9yZW5kZXIpe1xuXHRcdFx0cmV0dXJuIF9yZW5kZXI7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIF92YWx1ZTtcblx0fSxcblx0X19jZWxsQ2xpY2s6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0ZXZlbnQuZGF0YSA9IHtcblx0XHRcdHRkOiBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKSxcblx0XHRcdHRjZWxsOiB0aGlzXG5cdFx0fTtcblx0XHR0aGlzLnByb3BzLm9uQ2xpY2sgJiYgdGhpcy5wcm9wcy5vbkNsaWNrKGV2ZW50KTtcblx0XHR0aGlzLnByb3BzLm9uQ2VsbENsaWNrICYmIHRoaXMucHJvcHMub25DZWxsQ2xpY2soZXZlbnQpO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDx0ZCBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItdGFibGUtdGNlbGxcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUsIHRoaXMuc3RhdGUuY2xhc3NOYW1lKX0gc3R5bGU9e3pudWkucmVhY3Quc3R5bGUodGhpcy5wcm9wcy5zdHlsZSwgdGhpcy5zdGF0ZS5zdHlsZSl9XHRcblx0XHRcdFx0ZGF0YS1kaXNhYmxlZD17dGhpcy5zdGF0ZS5kaXNhYmxlZH1cblx0XHRcdFx0ZGF0YS1jaGVja2VkPXt0aGlzLnN0YXRlLmNoZWNrZWR9XG5cdFx0XHRcdGRhdGEtYWN0aXZlPXt0aGlzLnN0YXRlLmFjdGl2ZX1cblx0XHRcdFx0b25DbGljaz17dGhpcy5fX2NlbGxDbGlja30gPlxuXHRcdFx0XHR7dGhpcy5fX3JlbmRlckNlbGxDb250ZW50KCl9XG5cdFx0XHQ8L3RkPlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIGZpbHRlciA9IHJlcXVpcmUoJ3pudWktcmVhY3QtZmlsdGVyJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTogJ1pSRmlsdGVyJyxcblx0Z2V0SW5pdGlhbFN0YXRlOmZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNsYXNzTmFtZTogJycsXG5cdFx0XHRzdHlsZToge30sXG5cdFx0XHRkYXRhOiB7fVxuXHRcdH1cblx0fSxcblx0X19vbkZpbHRlckNoYW5nZTogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHRpZihldmVudC5uYW1lICYmIGV2ZW50LnZhbHVlKSB7XG5cdFx0XHR0aGlzLnN0YXRlLmRhdGFbZXZlbnQubmFtZV0gPSB7XG5cdFx0XHRcdHZhbHVlOiBldmVudC52YWx1ZSxcblx0XHRcdFx0b3B0OiBldmVudC5vcHRcblx0XHRcdH07XG5cdFx0fVxuXHRcdHRoaXMucHJvcHMub25GaWx0ZXIgJiYgdGhpcy5wcm9wcy5vbkZpbHRlcih0aGlzLnN0YXRlLmRhdGEpO1xuXHR9LFxuXHRfX29uRmlsdGVyQ2FuY2VsOiBmdW5jdGlvbiAobmFtZSl7XG5cdFx0aWYobmFtZSAmJiB0aGlzLnN0YXRlLmRhdGEpe1xuXHRcdFx0dGhpcy5zdGF0ZS5kYXRhW25hbWVdID0gbnVsbDtcblx0XHRcdGRlbGV0ZSB0aGlzLnN0YXRlLmRhdGFbbmFtZV07XG5cdFx0fVxuXHR9LFxuXHRfX3JlbmRlckNlbGw6IGZ1bmN0aW9uIChjb2x1bW4sIGluZGV4KXtcblx0XHRpZighem4uaXMoY29sdW1uLCAnb2JqZWN0JykpIHsgcmV0dXJuIG51bGw7IH1cblx0XHR2YXIgX2VsZW1lbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudCh0aGlzLnByb3BzLmNlbGxSZW5kZXIsIHtcblx0XHRcdGNvbHVtbjogY29sdW1uLFxuXHRcdFx0Y2VsbEluZGV4OiBpbmRleCwgXG5cdFx0XHR0ZmlsdGVyOiB0aGlzXG5cdFx0fSk7XG5cdFx0aWYoX2VsZW1lbnQpe1xuXHRcdFx0cmV0dXJuIF9lbGVtZW50O1xuXHRcdH1cblx0XHRcblx0XHR2YXIgX2NvbnRlbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudChjb2x1bW4ucmVuZGVyLCB7XG5cdFx0XHRjb2x1bW46IGNvbHVtbixcblx0XHRcdGNlbGxJbmRleDogaW5kZXgsIFxuXHRcdFx0dGZpbHRlcjogdGhpc1xuXHRcdH0pO1xuXG5cdFx0aWYoIV9jb250ZW50ICYmIGNvbHVtbi5maWx0ZXIpIHtcblx0XHRcdF9jb250ZW50ID0gPGZpbHRlci5GaWx0ZXJGaWVsZCB7Li4uY29sdW1uLmZpbHRlcn0gbmFtZT17Y29sdW1uLm5hbWV9IG9uRmlsdGVyQ2hhbmdlPXt0aGlzLl9fb25GaWx0ZXJDaGFuZ2V9IG9uQ2FuY2VsPXt0aGlzLl9fb25GaWx0ZXJDYW5jZWx9IC8+O1xuXHRcdH1cblxuXHRcdHZhciBfY2VsbCA9IHpuLmV4dGVuZCh7IHN0eWxlOiB7fSwgY2xhc3NOYW1lOiAnJyB9LCB0aGlzLnByb3BzLmNlbGwpO1xuXHRcdHJldHVybiA8dGQga2V5PXtpbmRleH0gY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgndGZpbHRlci1jZWxsJywgX2NlbGwuY2xhc3NOYW1lKX0gc3R5bGU9e19jZWxsLnN0eWxlfT5cblx0XHRcdHsgX2NvbnRlbnQgfVxuXHRcdDwvdGQ+O1xuXHR9LFxuXHRfX3JlbmRlclJvdzogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF9lbGVtZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQodGhpcy5wcm9wcy5yb3dSZW5kZXIsIHtcblx0XHRcdHRmaWx0ZXI6IHRoaXNcblx0XHR9KTtcblx0XHRpZihfZWxlbWVudCl7XG5cdFx0XHRyZXR1cm4gX2VsZW1lbnQ7XG5cdFx0fVxuXHRcdHZhciBfcm93ID0gem4uZXh0ZW5kKHsgY2xhc3NOYW1lOiAnJywgc3R5bGU6IHt9IH0sIHRoaXMucHJvcHMucm93KTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHRyIGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ0ZmlsdGVyLXJvdyB6ci10YWJsZS10cm93XCIsIF9yb3cuY2xhc3NOYW1lKX0gc3R5bGU9e19yb3cuc3R5bGV9PlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0KHRoaXMucHJvcHMuY29sdW1uc3x8W10pLm1hcCh0aGlzLl9fcmVuZGVyQ2VsbClcblx0XHRcdFx0fVxuXHRcdFx0PC90cj5cblx0XHQpO1xuXHR9LFxuXHRyZW5kZXI6ZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHRoZWFkIGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci10YWJsZS10ZmlsdGVyXCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lLCB0aGlzLnN0YXRlLmNsYXNzTmFtZSl9IHN0eWxlPXt6bnVpLnJlYWN0LnN0eWxlKHRoaXMucHJvcHMuc3R5bGUsIHRoaXMuc3RhdGUuc3R5bGUpfT5cblx0XHRcdFx0e3RoaXMuX19yZW5kZXJSb3coKX1cblx0XHRcdDwvdGhlYWQ+XG5cdFx0KTtcblx0fVxufSk7IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSVEZvb3QnLFxuXHRfX3JlbmRlckNoaWxkcmVuOiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX2NvbHVtbnMgPSB0aGlzLnByb3BzLmNvbHVtbnMgfHwgW107XG5cdFx0aWYodGhpcy5wcm9wcy5jaGlsZHJlbil7XG5cdFx0XHRyZXR1cm4gPHRyIGNsYXNzTmFtZT1cInRmb290LXJvd1wiPlxuXHRcdFx0XHQ8dGQgY29sU3Bhbj17X2NvbHVtbnMubGVuZ3RofT57dGhpcy5wcm9wcy5jaGlsZHJlbn08L3RkPlxuXHRcdFx0PC90cj47XG5cdFx0fWVsc2V7XG5cdFx0XHRyZXR1cm4gdGhpcy5fX3JlbmRlclJvdygpO1xuXHRcdH1cblx0fSxcblx0X19yZW5kZXJDZWxsOiBmdW5jdGlvbiAoY29sdW1uLCBpbmRleCl7XG5cdFx0aWYoIXpuLmlzKGNvbHVtbiwgJ29iamVjdCcpKSB7IHJldHVybiBudWxsOyB9XG5cdFx0dmFyIF9lbGVtZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQodGhpcy5wcm9wcy5jZWxsUmVuZGVyLCB7XG5cdFx0XHRjb2x1bW46IGNvbHVtbixcblx0XHRcdGNlbGxJbmRleDogaW5kZXgsIFxuXHRcdFx0dGZvb3Q6IHRoaXNcblx0XHR9KTtcblx0XHRpZihfZWxlbWVudCl7XG5cdFx0XHRyZXR1cm4gX2VsZW1lbnQ7XG5cdFx0fVxuXG5cdFx0dmFyIF9jb250ZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQoY29sdW1uLnJlbmRlciB8fCBjb2x1bW4uZm9vdCwge1xuXHRcdFx0Y29sdW1uOiBjb2x1bW4sXG5cdFx0XHRjZWxsSW5kZXg6IGluZGV4LCBcblx0XHRcdHRmb290OiB0aGlzXG5cdFx0fSk7XG5cblx0XHRpZih0aGlzLnByb3BzLnJlbmRlcikge1xuXHRcdFx0X2NvbnRlbnQgPSB0aGlzLnByb3BzLnJlbmRlcihjb2x1bW4sIGluZGV4LCB0aGlzKTtcblx0XHR9XG5cblx0XHR2YXIgX2NlbGwgPSB6bi5leHRlbmQoeyBzdHlsZToge30sIGNsYXNzTmFtZTogJycgfSwgdGhpcy5wcm9wcy5jZWxsKTtcblx0XHRyZXR1cm4gPHRoIGtleT17aW5kZXh9IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3Rmb290LWNlbGwnLCBfY2VsbC5jbGFzc05hbWUpfSBzdHlsZT17X2NlbGwuc3R5bGV9PlxuXHRcdFx0eyBfY29udGVudCB9XG5cdFx0PC90aD47XG5cdH0sXG5cdF9fcmVuZGVyUm93OiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX2VsZW1lbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudCh0aGlzLnByb3BzLnJvd1JlbmRlciwge1xuXHRcdFx0dGhlYWQ6IHRoaXNcblx0XHR9KTtcblx0XHRpZihfZWxlbWVudCl7XG5cdFx0XHRyZXR1cm4gX2VsZW1lbnQ7XG5cdFx0fVxuXHRcdHZhciBfcm93ID0gem4uZXh0ZW5kKHsgY2xhc3NOYW1lOiAnJywgc3R5bGU6IHt9IH0sIHRoaXMucHJvcHMucm93KTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHRyIGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ0Zm9vdC1yb3dcIiwgX3Jvdy5jbGFzc05hbWUpfSBzdHlsZT17X3Jvdy5zdHlsZX0+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHQodGhpcy5wcm9wcy5jb2x1bW5zfHxbXSkubWFwKHRoaXMuX19yZW5kZXJDZWxsKVxuXHRcdFx0XHR9XG5cdFx0XHQ8L3RyPlxuXHRcdCk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHRmb290IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci10YWJsZS10Zm9vdFwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfT5cblx0XHRcdFx0e3RoaXMuX19yZW5kZXJDaGlsZHJlbigpfVxuXHRcdFx0PC90Zm9vdD5cblx0XHQpO1xuXHR9XG59KTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgVEhlYWRTb3J0ID0gcmVxdWlyZSgnLi9USGVhZFNvcnQnKTtcbnZhciBwb3B1cCA9IHJlcXVpcmUoJ3pudWktcmVhY3QtcG9wdXAnKTtcbnZhciBTVkdJY29uID0gcmVxdWlyZSgnem51aS1yZWFjdC1pY29uJykuU1ZHSWNvbjtcbnZhciBqc29uZWRpdG9yID0gcmVxdWlyZSgncnQtanNvbi1lZGl0b3InKTtcbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonVEhlYWQnLFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRjbGFzc05hbWU6ICcnLFxuXHRcdFx0c3R5bGU6IHt9LFxuXHRcdFx0c29ydDoge30sXG5cdFx0XHRmaWx0ZXI6IHt9XG5cdFx0fTtcblx0fSxcblx0X19vbkNvbHVtblNvcnQ6IGZ1bmN0aW9uIChzb3J0LCBjb2x1bW4pe1xuXHRcdGlmKGNvbHVtbi5uYW1lKSB7XG5cdFx0XHR0aGlzLnN0YXRlLnNvcnRbY29sdW1uLm5hbWVdID0gKHNvcnQ9PSdmYVNvcnRBbHBoYURvd24nID8gJ2Rlc2MnIDogJ2FzYycpO1xuXHRcdH1cblx0XHR0aGlzLnByb3BzLm9uU29ydCAmJiB0aGlzLnByb3BzLm9uU29ydCh0aGlzLnN0YXRlLnNvcnQpO1xuXHR9LFxuXHRfX29uQ29sdW1uRWRpdG9yQ2hhbmdlOiBmdW5jdGlvbiAoZGF0YSwgY2hpbGQsIHJvb3QsIGluZGV4KXtcbiAgICAgICAgdmFyIF9yb290ID0gcm9vdCB8fCBjaGlsZDtcblx0XHR0aGlzLnByb3BzLm9uQ29sdW1uQ2hhbmdlICYmIHRoaXMucHJvcHMub25Db2x1bW5DaGFuZ2UoX3Jvb3Quc3RhdGUudmFsdWUsIGluZGV4KTtcbiAgICB9LFxuXHRfX2ljb25DbGlja1JlbmRlcjogZnVuY3Rpb24gKGNvbHVtbiwgaW5kZXgpe1xuXHRcdHJldHVybiA8ZGl2IHN0eWxlPXt7cGFkZGluZzogMTAsIG1heEhlaWdodDogNTAwLCB3aWR0aDogNDAwLCBvdmVyZmxvdzogJ2F1dG8nfX0+XG5cdFx0XHQ8anNvbmVkaXRvci5mb3JtLm9iamVjdCBmb2xkPXtmYWxzZX1cblx0XHRcdFx0ZGlzcGxheUNsb3N1cmU9e3RydWV9IFxuXHRcdFx0XHRkaXNwbGF5SXRlbUNvdW50PXt0cnVlfSBcblx0XHRcdFx0bGFiZWw9eydDb2x1bW4nfSBcblx0XHRcdFx0dmFsdWU9e2NvbHVtbn0gXG5cdFx0XHRcdG9uQ2hhbmdlPXsoZGF0YSwgY2hpbGQsIHJvb3QpPT50aGlzLl9fb25Db2x1bW5FZGl0b3JDaGFuZ2UoZGF0YSwgY2hpbGQsIHJvb3QsIGluZGV4KX0gLz5cblx0XHQ8L2Rpdj47XG5cdH0sXG5cdF9fcmVuZGVyQ2VsbDogZnVuY3Rpb24gKGNvbHVtbiwgaW5kZXgpe1xuXHRcdGlmKCF6bi5pcyhjb2x1bW4sICdvYmplY3QnKSkgeyByZXR1cm4gbnVsbDsgfVxuXHRcdHZhciBfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMuY2VsbFJlbmRlciwge1xuXHRcdFx0Y29sdW1uOiBjb2x1bW4sXG5cdFx0XHRjZWxsSW5kZXg6IGluZGV4LCBcblx0XHRcdHRoZWFkOiB0aGlzXG5cdFx0fSk7XG5cdFx0aWYoX2VsZW1lbnQpe1xuXHRcdFx0cmV0dXJuIF9lbGVtZW50O1xuXHRcdH1cblxuXHRcdHZhciBfY29udGVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KGNvbHVtbi5yZW5kZXIgfHwgY29sdW1uLmhlYWQsIHtcblx0XHRcdGNvbHVtbjogY29sdW1uLFxuXHRcdFx0Y2VsbEluZGV4OiBpbmRleCwgXG5cdFx0XHR0aGVhZDogdGhpc1xuXHRcdH0pO1xuXHRcdGlmKCFfY29udGVudCkge1xuXHRcdFx0X2NvbnRlbnQgPSA8ZGl2IGNsYXNzTmFtZT1cImNlbGwtbGFiZWxcIj5cblx0XHRcdFx0eyBjb2x1bW4ubGFiZWwgfVxuXHRcdFx0XHR7IFxuXHRcdFx0XHRcdCEhY29sdW1uLmVkaXRhYmxlICYmIDxwb3B1cC5Ecm9wZG93biBcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImNlbGwtZWRpdG9yXCIgXG5cdFx0XHRcdFx0XHRwb3BvdmVyPXt7XG5cdFx0XHRcdFx0XHRcdHJlbmRlcjogdGhpcy5fX2ljb25DbGlja1JlbmRlcihjb2x1bW4sIGluZGV4KSxcblx0XHRcdFx0XHRcdFx0Y2xvc2VhYmxlOiB0cnVlXG5cdFx0XHRcdFx0XHR9fSA+XG5cdFx0XHRcdFx0XHQ8U1ZHSWNvbiBpY29uPVwiZmFFZGl0XCIgLz5cblx0XHRcdFx0XHQ8L3BvcHVwLkRyb3Bkb3duPlxuXHRcdFx0XHR9XG5cdFx0XHQ8L2Rpdj47XG5cdFx0fVxuXG5cdFx0dmFyIF9jZWxsID0gem4uZXh0ZW5kKHsgc3R5bGU6IHt9LCBjbGFzc05hbWU6ICcnIH0sIHRoaXMucHJvcHMuY2VsbCk7XG5cdFx0cmV0dXJuIDx0aCBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd0aGVhZC1jZWxsJywgX2NlbGwuY2xhc3NOYW1lKX0gc3R5bGU9e19jZWxsLnN0eWxlfT5cblx0XHRcdHsgX2NvbnRlbnQgfVxuXHRcdFx0eyAhIWNvbHVtbi5zb3J0ICYmIDxUSGVhZFNvcnQgY2xhc3NOYW1lPVwiY2VsbC1zb3J0XCIgb25Tb3J0PXsoc29ydCk9PnRoaXMuX19vbkNvbHVtblNvcnQoc29ydCwgY29sdW1uKX0gLz59XG5cdFx0PC90aD47XG5cdH0sXG5cdF9fcmVuZGVyUm93OiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX2VsZW1lbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudCh0aGlzLnByb3BzLnJvd1JlbmRlciwge1xuXHRcdFx0dGhlYWQ6IHRoaXNcblx0XHR9KTtcblx0XHRpZihfZWxlbWVudCl7XG5cdFx0XHRyZXR1cm4gX2VsZW1lbnQ7XG5cdFx0fVxuXHRcdHZhciBfcm93ID0gem4uZXh0ZW5kKHsgY2xhc3NOYW1lOiAnJywgc3R5bGU6IHt9IH0sIHRoaXMucHJvcHMucm93KTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHRyIGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ0aGVhZC1yb3dcIiwgX3Jvdy5jbGFzc05hbWUpfSBzdHlsZT17X3Jvdy5zdHlsZX0+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHQodGhpcy5wcm9wcy5jb2x1bW5zfHxbXSkubWFwKHRoaXMuX19yZW5kZXJDZWxsKVxuXHRcdFx0XHR9XG5cdFx0XHQ8L3RyPlxuXHRcdCk7XG5cdH0sXG5cdHJlbmRlcjpmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8dGhlYWQgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXRhYmxlLXRoZWFkXCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lLCB0aGlzLnN0YXRlLmNsYXNzTmFtZSl9IHN0eWxlPXt6bnVpLnJlYWN0LnN0eWxlKHRoaXMucHJvcHMuc3R5bGUsIHRoaXMuc3RhdGUuc3R5bGUpfT5cblx0XHRcdFx0e3RoaXMuX19yZW5kZXJSb3coKX1cblx0XHRcdDwvdGhlYWQ+XG5cdFx0KTtcblx0fVxufSk7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgU1ZHSWNvbiA9IHJlcXVpcmUoJ3pudWktcmVhY3QtaWNvbicpLlNWR0ljb247XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJUSGVhZFNvcnQnLFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRzb3J0OiAnZmFTb3J0Jyxcblx0XHR9XG5cdH0sXG5cdF9faWNvbkNsaWNrOiBmdW5jdGlvbiAoKXtcblx0XHRpZih0aGlzLnN0YXRlLnNvcnQgPT0gJ2ZhU29ydCcpe1xuXHRcdFx0dGhpcy5zdGF0ZS5zb3J0ID0gJ2ZhU29ydEFscGhhRG93bic7XG5cdFx0fSBlbHNlIGlmKHRoaXMuc3RhdGUuc29ydCA9PSAnZmFTb3J0QWxwaGFEb3duJyl7XG5cdFx0XHR0aGlzLnN0YXRlLnNvcnQgPSAnZmFTb3J0QWxwaGFVcCc7XG5cdFx0fSBlbHNlIGlmKHRoaXMuc3RhdGUuc29ydCA9PSAnZmFTb3J0QWxwaGFVcCcpe1xuXHRcdFx0dGhpcy5zdGF0ZS5zb3J0ID0gJ2ZhU29ydEFscGhhRG93bic7XG5cdFx0fVxuXHRcdHRoaXMuZm9yY2VVcGRhdGUoKTtcblx0XHR0aGlzLnByb3BzLm9uU29ydCAmJiB0aGlzLnByb3BzLm9uU29ydCh0aGlzLnN0YXRlLnNvcnQpO1xuXHR9LFxuXHRyZW5kZXI6ZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd6ci10aGVhZC1zb3J0JywgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0+XG5cdFx0XHRcdDxTVkdJY29uIG9uQ2xpY2s9e3RoaXMuX19pY29uQ2xpY2t9IGljb249e3RoaXMuc3RhdGUuc29ydH0gLz5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFJlYWN0RE9NID0gem51aS5SZWFjdERPTSB8fCByZXF1aXJlKCdyZWFjdC1kb20nKTtcbnZhciBUQ2VsbCA9IHJlcXVpcmUoJy4vVENlbGwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUlRSb3cnLFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNsYXNzTmFtZTogJycsXG5cdFx0XHRzdHlsZToge31cblx0XHR9XG5cdH0sXG5cdF9fZ2V0VGFyZ2V0VEQ6IGZ1bmN0aW9uICh0YXJnZXQpIHtcblx0XHRpZih0YXJnZXQudGFnTmFtZSE9PSdURCcpe1xuXHRcdFx0cmV0dXJuIHRoaXMuX19nZXRUYXJnZXRURCh0YXJnZXQucGFyZW50Tm9kZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0YXJnZXQ7XG5cdFx0fVxuXHR9LFxuXHRfX29uUm93Q2xpY2s6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0dmFyIF90ZCA9IHRoaXMuX19nZXRUYXJnZXRURChldmVudC50YXJnZXQpLFxuXHRcdFx0X3RyID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XG5cdFx0ZXZlbnQuZGF0YSA9IHtcblx0XHRcdHRkOiBfdGQsXG5cdFx0XHR0cjogX3RyLFxuXHRcdFx0dHJvdzogdGhpc1xuXHRcdH07XG5cdFx0dGhpcy5wcm9wcy5vbkNsaWNrICYmIHRoaXMucHJvcHMub25DbGljayhldmVudCk7XG5cdFx0dGhpcy5wcm9wcy5vblJvd0NsaWNrICYmIHRoaXMucHJvcHMub25Sb3dDbGljayhldmVudCk7XG5cdH0sXG5cdF9fY2VsbFJlbmRlcjogZnVuY3Rpb24gKGNvbHVtbiwgaW5kZXgpe1xuXHRcdGlmKCF6bi5pcyhjb2x1bW4sICdvYmplY3QnKSkgeyByZXR1cm4gbnVsbDt9XG5cdFx0dmFyIF9wcm9wcyA9IHpuLmV4dGVuZCh7XG5cdFx0XHRjb2x1bW46IGNvbHVtbixcblx0XHRcdHRyb3c6IHRoaXMsXG5cdFx0XHRjZWxsSW5kZXg6IGluZGV4LFxuXHRcdFx0ZGF0YTogdGhpcy5wcm9wcy5kYXRhLFxuXHRcdFx0dGJvZHk6IHRoaXMucHJvcHMudGJvZHlcblx0XHR9LCB0aGlzLnByb3BzLmNlbGwsIGNvbHVtbik7XG5cdFx0dmFyIF9lbGVtZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQodGhpcy5wcm9wcy5jZWxsUmVuZGVyLCBfcHJvcHMpO1xuXG5cdFx0aWYoX2VsZW1lbnQpe1xuXHRcdFx0cmV0dXJuIF9lbGVtZW50O1xuXHRcdH1cblxuXHRcdHJldHVybiA8VENlbGwga2V5PXtpbmRleH0gey4uLl9wcm9wc30gb25DZWxsQ2xpY2s9e3RoaXMucHJvcHMub25DZWxsQ2xpY2t9IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3Ryb3ctY2VsbCcsIF9wcm9wcy5jbGFzc05hbWUpfSAvPjtcblx0fSxcblx0cmVuZGVyOmZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDx0ciBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd6ci10YWJsZS10cm93JywgdGhpcy5wcm9wcy5jbGFzc05hbWUsIHRoaXMuc3RhdGUuY2xhc3NOYW1lKX0gc3R5bGU9e3pudWkucmVhY3Quc3R5bGUodGhpcy5wcm9wcy5zdHlsZSwgdGhpcy5zdGF0ZS5zdHlsZSl9XG5cdFx0XHRcdGRhdGEtYWN0aXZlPXt0aGlzLnByb3BzLmFjdGl2ZX0gXG5cdFx0XHRcdGRhdGEtY2hlY2tlZD17dGhpcy5wcm9wcy5jaGVja2VkfSBcblx0XHRcdFx0b25DbGljaz17dGhpcy5fX29uUm93Q2xpY2t9PlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0KHRoaXMucHJvcHMuY29sdW1uc3x8W10pLm1hcCh0aGlzLl9fY2VsbFJlbmRlcilcblx0XHRcdFx0fVxuXHRcdFx0PC90cj5cblx0XHQpO1xuXHR9XG59KTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIENvbGdyb3VwOiByZXF1aXJlKCcuL0NvbGdyb3VwJyksXG4gICAgVEZpbHRlcjogcmVxdWlyZSgnLi9URmlsdGVyJyksXG4gICAgVEJvZHk6IHJlcXVpcmUoJy4vVEJvZHknKSxcbiAgICBUQ2VsbDogcmVxdWlyZSgnLi9UQ2VsbCcpLFxuICAgIFRGb290OiByZXF1aXJlKCcuL1RGb290JyksXG4gICAgVEhlYWQ6IHJlcXVpcmUoJy4vVEhlYWQnKSxcbiAgICBUUm93OiByZXF1aXJlKCcuL1RSb3cnKVxufTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcIlJlYWN0XCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiUmVhY3RET01cIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJqc29uZWRpdG9yXCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiZmlsdGVyXCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiaWNvblwiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcImlucHV0XCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wibG9hZGVyXCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wicGFnZXJcIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJwb3B1cFwiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcInNlbGVjdG9yXCJdOyB9KCkpOyJdLCJzb3VyY2VSb290IjoiIn0=