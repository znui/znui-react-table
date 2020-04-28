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
      this.forceUpdate();
      this.data.refresh();
    }
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
        _Component = this.props.pager || pager.Pager;

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
  __onDataLoaded: function __onDataLoaded(response, table) {
    var _data = response.data;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vVGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vVGFibGVFZGl0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vVGFibGVQYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9jZWxsL0NoZWNrYm94LmpzIiwid2VicGFjazovLy8uL2NlbGwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vdGFibGUvQ29sZ3JvdXAuanMiLCJ3ZWJwYWNrOi8vLy4vdGFibGUvVEJvZHkuanMiLCJ3ZWJwYWNrOi8vLy4vdGFibGUvVENlbGwuanMiLCJ3ZWJwYWNrOi8vLy4vdGFibGUvVEZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi90YWJsZS9URm9vdC5qcyIsIndlYnBhY2s6Ly8vLi90YWJsZS9USGVhZC5qcyIsIndlYnBhY2s6Ly8vLi90YWJsZS9USGVhZFNvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vdGFibGUvVFJvdy5qcyIsIndlYnBhY2s6Ly8vLi90YWJsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianNvbmVkaXRvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpbHRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImljb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbnB1dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvYWRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhZ2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicG9wdXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZWxlY3RvclwiIl0sIm5hbWVzIjpbIlJlYWN0Iiwiem51aSIsInJlcXVpcmUiLCJ0YWJsZSIsInNlbGVjdG9yIiwibW9kdWxlIiwiZXhwb3J0cyIsImNyZWF0ZUNsYXNzIiwiZGlzcGxheU5hbWUiLCJnZXRJbml0aWFsU3RhdGUiLCJkYXRhIiwiY29sdW1ucyIsImNoZWNrZWRzIiwiX19zb3J0RnVuY3Rpb24iLCJuZXh0IiwicHJldiIsImtleSIsIl9zb3J0IiwicHJvcHMiLCJzb3J0RnVuY3Rpb24iLCJfX29uU29ydCIsInNvcnQiLCJzdGF0ZSIsImZvcmNlVXBkYXRlIiwiX19vbkZpbHRlciIsImZpbHRlciIsImNvbnNvbGUiLCJsb2ciLCJfX3Rib2R5RGF0YVJlbmRlciIsInRib2R5IiwiX190Ym9keUxvYWRpbmdSZW5kZXIiLCJfX29uVEhlYWRDb2x1bW5DaGFuZ2UiLCJpbmRleCIsIl9fdGJvZHlEYXRhTG9hZGVkIiwicmVzcG9uc2UiLCJfcmV0dXJuIiwib25EYXRhTG9hZGVkIiwic2V0U3RhdGUiLCJfX29uRGF0YUNyZWF0ZWQiLCJsaWZ5Y3ljbGUiLCJvbkRhdGFDcmVhdGVkIiwiX19yZW5kZXJUQm9keSIsIl9kYXRhIiwiX3Jlc3VsdCIsIm9uRGF0YUluaXRpYWwiLCJfX3JlbmRlciIsInJlYWN0IiwiY2xhc3NuYW1lIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJ3aWR0aCIsImZpeGVkIiwiY2VsbFBhZGRpbmciLCJjZWxsU3BhY2luZyIsImF0dHJzIiwiY2FwdGlvbiIsInJlbmRlciIsImNvbGdyb3VwIiwidGhlYWQiLCJ0ZmlsdGVyIiwidGZvb3QiLCJjaGlsZHJlblJlbmRlciIsImNoaWxkcmVuIiwiX19pbml0Q2hlY2tib3giLCJfY2hlY2tib3giLCJoZWFkIiwiYXJndiIsIl90YWJsZSIsImp1c3RpZnlDb250ZW50IiwibGVuZ3RoIiwiZXZlbnQiLCJjaGVja2VkIiwic2xpY2UiLCJvbkNoZWNrYm94Q2hhbmdlIiwiYmluZCIsImJvZHkiLCJpbmRleE9mIiwiY2hlY2tib3giLCJzdG9wUHJvcGFnYXRpb24iLCJzcGxpY2UiLCJwdXNoIiwiX3ZhbHVlIiwiem4iLCJ0eXBlIiwiZXh0ZW5kIiwidW5zaGlmdCIsIl9fY29sdW1uc0xvYWRlZCIsIl90ZW1wIiwiX2NvbHVtbkl0ZXJhdG9yIiwiY29sdW1uSXRlcmF0b3IiLCJfY29sdW1ucyIsIm1hcCIsImNvbHVtbiIsImRlZXBBc3NpZ24iLCJvbkNvbHVtbnNMb2FkZWQiLCJUYWJsZSIsImlucHV0IiwiX19jZWxsQ2hhbmdlIiwidGNlbGwiLCJuYW1lIiwidmFsdWUiLCJ0cm93IiwiX19jb2x1bW5Cb2R5UmVuZGVyIiwiX19jb2x1bW5JdGVyYXRvciIsInBhZ2VyIiwiY291bnQiLCJjdXJyZW50IiwidG90YWwiLCJwYWdlSW5kZXgiLCJfX2hhbmRsZVBhZ2VDaGFuZ2VkIiwibmV3UGFnZSIsIm9uUGFnZUNoYW5nZWQiLCJzZXRQYWdlSW5kZXgiLCJyZWZyZXNoIiwiX19yZW5kZXJQYWdlciIsIl9jb2x1bW5TaXplIiwiX3N0YXRlIiwiX3BhZ2VyUHJvcHMiLCJfQ29tcG9uZW50IiwiUGFnZXIiLCJpcyIsInBhdGgiLCJ3aW5kb3ciLCJfZWxlbWVudCIsImNyZWF0ZVJlYWN0RWxlbWVudCIsInBhZ2VyUmVuZGVyIiwiX19vbkRhdGFJbml0aWFsIiwiX21ldGhvZCIsIm1ldGhvZCIsIl9wYXJhbXMiLCJfa2V5TWFwcyIsInBhZ2VTaXplIiwia2V5TWFwcyIsInBhcmFtcyIsIl9fb25EYXRhTG9hZGVkIiwiTWF0aCIsImNlaWwiLCJSZWFjdERPTSIsIkNoZWNrYm94IiwiX19vbkNoZWNrYm94Q2hhbmdlIiwiX19vbkhlYWRDaGFuZ2UiLCJfX29uQm9keUNoYW5nZSIsImNlbGwiLCJUYWJsZUVkaXRvciIsIlRhYmxlUGFnZXIiLCJpdGVtIiwiVFJvdyIsImxvYWRlciIsImFjdGl2ZSIsImxvYWRpbmciLCJfX3JlbmRlckxvYWRpbmciLCJsb2FkaW5nUmVuZGVyIiwiX2xvYWRpbmciLCJfX3JlbmRlckVtcHR5IiwiZW1wdHlSZW5kZXIiLCJfZW1wdHkiLCJlbXB0eSIsIl9fb25Sb3dDbGljayIsIm9uUm93Q2xpY2siLCJfX29uQ2VsbENsaWNrIiwib25DZWxsQ2xpY2siLCJfX3JlbmRlclJvdyIsImVhY2hSb3dEYXRhIiwicm93UmVuZGVyIiwicm93SW5kZXgiLCJyb3ciLCJjZWxsUmVuZGVyIiwiX19yZW5kZXJEYXRhIiwiZGlzYWJsZWQiLCJfX3JlbmRlckNlbGxDb250ZW50IiwiX3JlbmRlciIsImNlbGxJbmRleCIsIl9fY2VsbENsaWNrIiwidGQiLCJmaW5kRE9NTm9kZSIsIm9uQ2xpY2siLCJfX29uRmlsdGVyQ2hhbmdlIiwib3B0Iiwib25GaWx0ZXIiLCJfX29uRmlsdGVyQ2FuY2VsIiwiX19yZW5kZXJDZWxsIiwiX2NvbnRlbnQiLCJfY2VsbCIsIl9yb3ciLCJfX3JlbmRlckNoaWxkcmVuIiwiZm9vdCIsIlRIZWFkU29ydCIsInBvcHVwIiwiU1ZHSWNvbiIsImpzb25lZGl0b3IiLCJfX29uQ29sdW1uU29ydCIsIm9uU29ydCIsIl9fb25Db2x1bW5FZGl0b3JDaGFuZ2UiLCJjaGlsZCIsInJvb3QiLCJfcm9vdCIsIm9uQ29sdW1uQ2hhbmdlIiwiX19pY29uQ2xpY2tSZW5kZXIiLCJwYWRkaW5nIiwibWF4SGVpZ2h0Iiwib3ZlcmZsb3ciLCJsYWJlbCIsImVkaXRhYmxlIiwiY2xvc2VhYmxlIiwiX19pY29uQ2xpY2siLCJUQ2VsbCIsIl9fZ2V0VGFyZ2V0VEQiLCJ0YXJnZXQiLCJ0YWdOYW1lIiwicGFyZW50Tm9kZSIsIl90ZCIsIl90ciIsInRyIiwiX19jZWxsUmVuZGVyIiwiX3Byb3BzIiwiQ29sZ3JvdXAiLCJURmlsdGVyIiwiVEJvZHkiLCJURm9vdCIsIlRIZWFkIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtR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QUNBOUMsYUFBYSxnQ0FBZ0MsRUFBRSxJOzs7Ozs7Ozs7OztBQ0EvQyxhQUFhLGlDQUFpQyxFQUFFLEk7Ozs7Ozs7Ozs7O0FDQWhELGFBQWEsZ0NBQWdDLEVBQUUsSTs7Ozs7Ozs7Ozs7QUNBL0MsYUFBYSxnQ0FBZ0MsRUFBRSxJOzs7Ozs7Ozs7OztBQ0EvQyxhQUFhLG1DQUFtQyxFQUFFLEkiLCJmaWxlIjoiLi9kaXN0L2RldmVsb3BtZW50L2luZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgdGFibGUgPSByZXF1aXJlKCcuL3RhYmxlL2luZGV4Jyk7XG52YXIgc2VsZWN0b3IgPSByZXF1aXJlKCd6bnVpLXJlYWN0LXNlbGVjdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJUYWJsZScsXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGRhdGE6IG51bGwsIFxuXHRcdFx0Y29sdW1uczogW10sXG5cdFx0XHRjaGVja2VkczogW11cblx0XHR9O1xuXHR9LFxuXHRfX3NvcnRGdW5jdGlvbjogZnVuY3Rpb24gKG5leHQsIHByZXYsIGtleSwgX3NvcnQpe1xuXHRcdGlmKHRoaXMucHJvcHMuc29ydEZ1bmN0aW9uKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5wcm9wcy5zb3J0RnVuY3Rpb24obmV4dCwgcHJldiwga2V5LCBfc29ydCk7XG5cdFx0fVxuXHRcdGlmKF9zb3J0PT0nZGVzYycpe1xuXHRcdFx0aWYobmV4dFtrZXldID4gcHJldltrZXldKXtcblx0XHRcdFx0cmV0dXJuIDE7XG5cdFx0XHR9ZWxzZSBpZihuZXh0W2tleV0gPT0gcHJldltrZXldKXtcblx0XHRcdFx0cmV0dXJuIDA7XG5cdFx0XHR9ZWxzZSBpZihuZXh0W2tleV0gPCBwcmV2W2tleV0pe1xuXHRcdFx0XHRyZXR1cm4gLTE7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKF9zb3J0PT0nYXNjJyl7XG5cdFx0XHRpZihuZXh0W2tleV0gPCBwcmV2W2tleV0pe1xuXHRcdFx0XHRyZXR1cm4gMTtcblx0XHRcdH1lbHNlIGlmKG5leHRba2V5XSA9PSBwcmV2W2tleV0pe1xuXHRcdFx0XHRyZXR1cm4gMDtcblx0XHRcdH1lbHNlIGlmKG5leHRba2V5XSA+IHByZXZba2V5XSl7XG5cdFx0XHRcdHJldHVybiAtMTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdF9fb25Tb3J0OiBmdW5jdGlvbiAoc29ydCl7XG5cdFx0dmFyIF9zb3J0ID0gbnVsbDtcblx0XHRmb3IodmFyIGtleSBpbiBzb3J0KXtcblx0XHRcdF9zb3J0ID0gc29ydFtrZXldXG5cdFx0XHR0aGlzLnN0YXRlLmRhdGEgPSB0aGlzLnN0YXRlLmRhdGEuc29ydCgobmV4dCwgcHJldikgPT4gdGhpcy5fX3NvcnRGdW5jdGlvbihuZXh0LCBwcmV2LCBrZXksIF9zb3J0KSk7XG5cdFx0fVxuXG5cdFx0dGhpcy5mb3JjZVVwZGF0ZSgpO1xuXHR9LFxuXHRfX29uRmlsdGVyOiBmdW5jdGlvbiAoZmlsdGVyKXtcblx0XHRjb25zb2xlLmxvZyhmaWx0ZXIsIHRoaXMuc3RhdGUuZGF0YSk7XG5cdH0sXG5cdF9fdGJvZHlEYXRhUmVuZGVyOiBmdW5jdGlvbiAoY29sdW1ucyl7XG5cdFx0cmV0dXJuIDx0YWJsZS5UQm9keSB7Li4udGhpcy5wcm9wcy50Ym9keX0gY29sdW1ucz17Y29sdW1uc30gZGF0YT17dGhpcy5zdGF0ZS5kYXRhfSB0YWJsZT17dGhpc30gLz47XG5cdH0sXG5cdF9fdGJvZHlMb2FkaW5nUmVuZGVyOiBmdW5jdGlvbiAoY29sdW1ucyl7XG5cdFx0cmV0dXJuIDx0YWJsZS5UQm9keSB7Li4udGhpcy5wcm9wcy50Ym9keX0gY29sdW1ucz17Y29sdW1uc30gbG9hZGluZz17dHJ1ZX0gdGFibGU9e3RoaXN9IC8+O1xuXHR9LFxuXHRfX29uVEhlYWRDb2x1bW5DaGFuZ2U6IGZ1bmN0aW9uIChkYXRhLCBpbmRleCl7XG5cdFx0aWYodGhpcy5zdGF0ZS5jb2x1bW5zKXtcblx0XHRcdHRoaXMuc3RhdGUuY29sdW1uc1tpbmRleF0gPSBkYXRhO1xuXHRcdFx0dGhpcy5mb3JjZVVwZGF0ZSgpO1xuXHRcdH1cblx0fSxcblx0X190Ym9keURhdGFMb2FkZWQ6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdHZhciBfcmV0dXJuID0gdGhpcy5wcm9wcy5vbkRhdGFMb2FkZWQgJiYgdGhpcy5wcm9wcy5vbkRhdGFMb2FkZWQocmVzcG9uc2UsIHRoaXMpO1xuXHRcdGlmKF9yZXR1cm4gIT09IGZhbHNlKXtcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBkYXRhOiByZXNwb25zZSB9KTtcblx0XHR9XG5cdH0sXG5cdF9fb25EYXRhQ3JlYXRlZDogZnVuY3Rpb24gKGRhdGEsIGxpZnljeWNsZSl7XG5cdFx0dGhpcy5kYXRhID0gZGF0YTtcblx0XHR0aGlzLnByb3BzLm9uRGF0YUNyZWF0ZWQgJiYgdGhpcy5wcm9wcy5vbkRhdGFDcmVhdGVkKGRhdGEsIHRoaXMpO1xuXHR9LFxuXHRfX3JlbmRlclRCb2R5OiBmdW5jdGlvbiAoY29sdW1ucyl7XG5cdFx0dmFyIF9kYXRhID0gdGhpcy5wcm9wcy5kYXRhIHx8IHRoaXMucHJvcHMudGJvZHkuZGF0YTtcblx0XHR2YXIgX3Jlc3VsdCA9IHRoaXMucHJvcHMub25EYXRhSW5pdGlhbCAmJiB0aGlzLnByb3BzLm9uRGF0YUluaXRpYWwoX2RhdGEsIHRoaXMpO1xuXHRcdGlmKF9yZXN1bHQpe1xuXHRcdFx0X2RhdGEgPSBfcmVzdWx0O1xuXHRcdH1cblx0XHRyZXR1cm4gPHpudWkucmVhY3QuRGF0YUxpZmVjeWNsZSBkYXRhPXtfZGF0YX0gXG5cdFx0XHRcdFx0cmVuZGVyPXsoKT0+dGhpcy5fX3Rib2R5RGF0YVJlbmRlcihjb2x1bW5zKX0gXG5cdFx0XHRcdFx0bG9hZGluZ1JlbmRlcj17KCk9PnRoaXMuX190Ym9keUxvYWRpbmdSZW5kZXIoY29sdW1ucyl9XG5cdFx0XHRcdFx0b25EYXRhQ3JlYXRlZD17dGhpcy5fX29uRGF0YUNyZWF0ZWR9XG5cdFx0XHRcdFx0b25GaW5pc2hlZD17dGhpcy5fX3Rib2R5RGF0YUxvYWRlZH0gLz47XG5cdH0sXG5cdF9fcmVuZGVyOiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgY29sdW1ucyA9IHRoaXMuc3RhdGUuY29sdW1ucztcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHRhYmxlIGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci10YWJsZVwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IFxuXHRcdFx0XHRzdHlsZT17em51aS5yZWFjdC5zdHlsZSh0aGlzLnByb3BzLnN0eWxlLCB7IHdpZHRoOiB0aGlzLnByb3BzLndpZHRoIH0pfSBcblx0XHRcdFx0ZGF0YS1maXhlZD17dGhpcy5wcm9wcy5maXhlZH0gXHRcblx0XHRcdFx0Y2VsbFBhZGRpbmc9e3RoaXMucHJvcHMuY2VsbFBhZGRpbmcgfHwgMH0gXG5cdFx0XHRcdGNlbGxTcGFjaW5nPXt0aGlzLnByb3BzLmNlbGxTcGFjaW5nIHx8IDB9IHsuLi50aGlzLnByb3BzLmF0dHJzfT5cblx0XHRcdFx0eyAhIXRoaXMucHJvcHMuY2FwdGlvbiAmJiA8Y2FwdGlvbiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2FwdGlvbi5jbGFzc05hbWV9IHN0eWxlPXt0aGlzLnByb3BzLmNhcHRpb24uc3R5bGV9Pnt0aGlzLnByb3BzLmNhcHRpb24ucmVuZGVyfTwvY2FwdGlvbj4gfVxuXHRcdFx0XHR7ICEhdGhpcy5wcm9wcy5jb2xncm91cCAmJiA8dGFibGUuQ29sZ3JvdXAgY29sdW1ucz17Y29sdW1uc30gey4uLnRoaXMucHJvcHMuY29sZ3JvdXB9IC8+IH1cblx0XHRcdFx0eyAhIXRoaXMucHJvcHMudGhlYWQgJiYgPHRhYmxlLlRIZWFkIG9uU29ydD17dGhpcy5fX29uU29ydH0gIG9uQ29sdW1uQ2hhbmdlPXt0aGlzLl9fb25USGVhZENvbHVtbkNoYW5nZX0gY29sdW1ucz17Y29sdW1uc30gey4uLnRoaXMucHJvcHMudGhlYWR9IHRhYmxlPXt0aGlzfSAvPn1cblx0XHRcdFx0eyAhIXRoaXMucHJvcHMudGZpbHRlciAmJiA8dGFibGUuVEZpbHRlciBvbkZpbHRlcj17dGhpcy5fX29uRmlsdGVyfSBjb2x1bW5zPXtjb2x1bW5zfSB7Li4udGhpcy5wcm9wcy5maWx0ZXJ9IHRhYmxlPXt0aGlzfSAvPn1cblx0XHRcdFx0eyAodGhpcy5wcm9wcy50Ym9keSB8fCB0aGlzLnByb3BzLmRhdGEpICYmIHRoaXMuX19yZW5kZXJUQm9keShjb2x1bW5zKSB9XG5cdFx0XHRcdHsgISF0aGlzLnByb3BzLnRmb290ICYmIDx0YWJsZS5URm9vdCBjb2x1bW5zPXtjb2x1bW5zfSB7Li4udGhpcy5wcm9wcy50Zm9vdH0gdGFibGU9e3RoaXN9IC8+fVxuXHRcdFx0XHR7IHRoaXMucHJvcHMuY2hpbGRyZW5SZW5kZXIgJiYgdGhpcy5wcm9wcy5jaGlsZHJlblJlbmRlcihjb2x1bW5zLCB0aGlzKSB9XG5cdFx0XHRcdHsgdGhpcy5wcm9wcy5jaGlsZHJlbiB9XG5cdFx0XHQ8L3RhYmxlPlxuXHRcdCk7XG5cdH0sXG5cdF9faW5pdENoZWNrYm94OiBmdW5jdGlvbiAoY29sdW1ucyl7XG5cdFx0dmFyIF9jaGVja2JveCA9IHtcblx0XHRcdFx0d2lkdGg6IDYwLFxuXHRcdFx0XHRoZWFkOiBmdW5jdGlvbiAoYXJndil7XG5cdFx0XHRcdFx0dmFyIF90YWJsZSA9IGFyZ3YudGhlYWQucHJvcHMudGFibGU7XG5cdFx0XHRcdFx0cmV0dXJuIDxzZWxlY3Rvci5DaGVja2JveFxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fVxuXHRcdFx0XHRcdFx0XHRcdGtleT17dGhpcy5zdGF0ZS5jaGVja2Vkcy5sZW5ndGh9XG5cdFx0XHRcdFx0XHRcdFx0dGV4dD17JygnICsgX3RhYmxlLnN0YXRlLmNoZWNrZWRzLmxlbmd0aCArJyknfVxuXHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQ9eyEhX3RhYmxlLnN0YXRlLmRhdGEubGVuZ3RoICYmIF90YWJsZS5zdGF0ZS5jaGVja2Vkcy5sZW5ndGggPT09IF90YWJsZS5zdGF0ZS5kYXRhLmxlbmd0aH1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGV2ZW50KT0+e1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYoZXZlbnQuY2hlY2tlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnN0YXRlLmNoZWNrZWRzID0gdGhpcy5zdGF0ZS5kYXRhLnNsaWNlKDApO1xuXHRcdFx0XHRcdFx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc3RhdGUuY2hlY2tlZHMgPSBbXTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuZm9yY2VVcGRhdGUoKTtcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMub25DaGVja2JveENoYW5nZSAmJiB0aGlzLnByb3BzLm9uQ2hlY2tib3hDaGFuZ2UodGhpcy5zdGF0ZS5jaGVja2VkcywgdGhpcyk7XG5cdFx0XHRcdFx0XHRcdFx0fX0gLz47XG5cdFx0XHRcdH0uYmluZCh0aGlzKSxcblx0XHRcdFx0Ym9keTogZnVuY3Rpb24gKGFyZ3Ype1xuXHRcdFx0XHRcdHZhciBfZGF0YSA9IGFyZ3YuZGF0YTtcblx0XHRcdFx0XHRyZXR1cm4gPHNlbGVjdG9yLlVuY29udHJvbENoZWNrYm94IFxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fVxuXHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQ9e3RoaXMuc3RhdGUuY2hlY2tlZHMuaW5kZXhPZihfZGF0YSkgIT09IC0xfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyhldmVudCwgY2hlY2tib3gpPT57XG5cdFx0XHRcdFx0XHRcdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0XHRcdFx0XHRcdGlmKGNoZWNrYm94LnByb3BzLmNoZWNrZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zdGF0ZS5jaGVja2Vkcy5zcGxpY2UodGhpcy5zdGF0ZS5jaGVja2Vkcy5pbmRleE9mKF9kYXRhKSwgMSk7IFxuXHRcdFx0XHRcdFx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc3RhdGUuY2hlY2tlZHMucHVzaChfZGF0YSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmZvcmNlVXBkYXRlKCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLm9uQ2hlY2tib3hDaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkNoZWNrYm94Q2hhbmdlKHRoaXMuc3RhdGUuY2hlY2tlZHMsIHRoaXMpO1xuXHRcdFx0XHRcdFx0XHRcdH19IC8+O1xuXHRcdFx0XHR9LmJpbmQodGhpcylcblx0XHRcdH0sXG5cdFx0XHRfdmFsdWUgPSB0aGlzLnByb3BzLmNoZWNrYm94O1xuXHRcdHN3aXRjaCh6bi50eXBlKF92YWx1ZSkpIHtcblx0XHRcdGNhc2UgJ29iamVjdCc6XG5cdFx0XHRcdF9jaGVja2JveCA9IHpuLmV4dGVuZCh7fSwgX3ZhbHVlKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdudW1iZXInOlxuXHRcdFx0XHRfY2hlY2tib3gud2lkdGggPSBfdmFsdWU7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHRpZihfdmFsdWUpIHtcblx0XHRcdGNvbHVtbnMgPSBjb2x1bW5zLnVuc2hpZnQoX2NoZWNrYm94KTtcblx0XHR9XG5cdH0sXG5cdF9fY29sdW1uc0xvYWRlZDogZnVuY3Rpb24gKGNvbHVtbnMpe1xuXHRcdHZhciBfdGVtcCA9IG51bGwsXG5cdFx0XHRfcmVzdWx0ID0gbnVsbCxcblx0XHRcdF9jb2x1bW5JdGVyYXRvciA9IHRoaXMucHJvcHMuY29sdW1uSXRlcmF0b3IsXG5cdFx0XHRfY29sdW1ucyA9IGNvbHVtbnMubWFwKGZ1bmN0aW9uIChjb2x1bW4pe1xuXHRcdFx0XHRfdGVtcCA9IHpuLmRlZXBBc3NpZ24oe30sIGNvbHVtbik7XG5cdFx0XHRcdF9yZXN1bHQgPSBfY29sdW1uSXRlcmF0b3IgJiYgX2NvbHVtbkl0ZXJhdG9yKF90ZW1wLCB0aGlzKTtcblx0XHRcdFx0aWYoX3Jlc3VsdCA9PT0gZmFsc2UpIHJldHVybiBudWxsO1xuXHRcdFx0XHRpZih0eXBlb2YgX3Jlc3VsdCA9PSAnb2JqZWN0JykgcmV0dXJuIF9yZXN1bHQ7XG5cblx0XHRcdFx0cmV0dXJuIF90ZW1wO1xuXHRcdFx0fS5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLl9faW5pdENoZWNrYm94KF9jb2x1bW5zKTtcblx0XHR0aGlzLnByb3BzLm9uQ29sdW1uc0xvYWRlZCAmJiB0aGlzLnByb3BzLm9uQ29sdW1uc0xvYWRlZChjb2x1bW5zKTtcblx0XHR0aGlzLnNldFN0YXRlKHsgY29sdW1uczogX2NvbHVtbnMgfSk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gPHpudWkucmVhY3QuRGF0YUxpZmVjeWNsZSBvbkZpbmlzaGVkPXt0aGlzLl9fY29sdW1uc0xvYWRlZH0gZGF0YT17dGhpcy5wcm9wcy5jb2x1bW5zfSByZW5kZXI9e3RoaXMuX19yZW5kZXJ9IC8+XG5cdH1cbn0pOyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBUYWJsZSA9IHJlcXVpcmUoJy4vVGFibGUnKTtcbnZhciBpbnB1dCA9IHJlcXVpcmUoJ3pudWktcmVhY3QtaW5wdXQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUlRhYmxlRWRpdG9yJyxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y29sdW1uczogW11cblx0XHR9O1xuXHR9LFxuXHRfX2NlbGxDaGFuZ2U6IGZ1bmN0aW9uIChldmVudCwgYXJndil7XG5cdFx0Ly9jb25zb2xlLmxvZyhldmVudCk7XG5cdFx0Ly9jb25zb2xlLmxvZyhhcmd2KTtcblx0XHRhcmd2LmRhdGFbYXJndi50Y2VsbC5wcm9wcy5uYW1lXSA9IGV2ZW50LnZhbHVlO1xuXHRcdGFyZ3YudHJvdy5mb3JjZVVwZGF0ZSgpO1xuXHR9LFxuXHRfX2NvbHVtbkJvZHlSZW5kZXI6IGZ1bmN0aW9uIChhcmd2KXtcblx0XHRyZXR1cm4gPGlucHV0LklucHV0IGtleT17YXJndi52YWx1ZX0gdmFsdWU9e2FyZ3YudmFsdWV9IG9uRW50ZXI9eyhldmVudCk9PnRoaXMuX19jZWxsQ2hhbmdlKGV2ZW50LCBhcmd2KX0gLz47XG5cdH0sXG5cdF9fY29sdW1uSXRlcmF0b3I6IGZ1bmN0aW9uIChjb2x1bW4sIHRhYmxlKXtcblx0XHRpZighY29sdW1uLmJvZHkpIHtcblx0XHRcdGNvbHVtbi5ib2R5ID0gdGhpcy5fX2NvbHVtbkJvZHlSZW5kZXI7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNvbHVtbjtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8VGFibGUgey4uLnRoaXMucHJvcHN9IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLXRhYmxlLWVkaXRvcicsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gY29sdW1uSXRlcmF0b3I9e3RoaXMuX19jb2x1bW5JdGVyYXRvcn0gLz5cblx0XHQpXG5cdH1cbn0pOyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBUYWJsZSA9IHJlcXVpcmUoJy4vVGFibGUnKTtcbnZhciBwYWdlciA9IHJlcXVpcmUoJ3pudWktcmVhY3QtcGFnZXInKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUlRhYmxlUGFnZXInLFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRjb3VudDogMCxcblx0XHRcdGN1cnJlbnQ6IDEsXG5cdFx0XHRkYXRhOiBbXSxcblx0XHRcdHRvdGFsOiAwLFxuXHRcdFx0cGFnZUluZGV4OiB0aGlzLnByb3BzLnBhZ2VJbmRleCB8fCAxXG5cdFx0fTtcblx0fSxcblx0X19oYW5kbGVQYWdlQ2hhbmdlZDogZnVuY3Rpb24gKG5ld1BhZ2Upe1xuXHRcdHZhciBfcmV0dXJuID0gdGhpcy5wcm9wcy5vblBhZ2VDaGFuZ2VkICYmIHRoaXMucHJvcHMub25QYWdlQ2hhbmdlZChuZXdQYWdlLCB0aGlzKTtcblx0XHRpZihfcmV0dXJuICE9PSBmYWxzZSkge1xuXHRcdFx0dGhpcy5zZXRQYWdlSW5kZXgobmV3UGFnZSk7XG5cdFx0fVxuXHR9LFxuXHRzZXRQYWdlSW5kZXg6IGZ1bmN0aW9uIChwYWdlSW5kZXgpe1xuXHRcdGlmKHRoaXMuZGF0YSl7XG5cdFx0XHR0aGlzLnN0YXRlLnBhZ2VJbmRleCA9IHBhZ2VJbmRleDtcblx0XHRcdHRoaXMuZm9yY2VVcGRhdGUoKTtcblx0XHRcdHRoaXMuZGF0YS5yZWZyZXNoKCk7XG5cdFx0fVxuXHR9LFxuXHRfX3JlbmRlclBhZ2VyOiBmdW5jdGlvbiAoY29sdW1ucywgdGFibGUpe1xuXHRcdHZhciBfY29sdW1uU2l6ZSA9IGNvbHVtbnMubGVuZ3RoO1xuXHRcdGlmKCFfY29sdW1uU2l6ZSl7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0dmFyIF9zdGF0ZSA9IHRoaXMuc3RhdGUsXG5cdFx0XHRfcGFnZXJQcm9wcyA9IHtcblx0XHRcdFx0dG90YWw6IF9zdGF0ZS50b3RhbCxcblx0XHRcdFx0Y291bnQ6IF9zdGF0ZS5jb3VudCxcblx0XHRcdFx0Y3VycmVudDogX3N0YXRlLmN1cnJlbnQsXG5cdFx0XHRcdG9uUGFnZUNoYW5nZWQ6IHRoaXMuX19oYW5kbGVQYWdlQ2hhbmdlZFxuXHRcdFx0fSxcblx0XHRcdF9Db21wb25lbnQgPSB0aGlzLnByb3BzLnBhZ2VyIHx8IHBhZ2VyLlBhZ2VyO1xuXHRcdGlmKHpuLmlzKF9Db21wb25lbnQsICdzdHJpbmcnKSl7XG5cdFx0XHRfQ29tcG9uZW50ID0gem4ucGF0aCh3aW5kb3csIF9Db21wb25lbnQpO1xuXHRcdH1cblxuXHRcdHZhciBfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMucGFnZXJSZW5kZXIsIF9wYWdlclByb3BzKTtcblxuXHRcdGlmKCFfZWxlbWVudCl7XG5cdFx0IFx0X2VsZW1lbnQgPSA8X0NvbXBvbmVudCB7Li4uX3BhZ2VyUHJvcHN9IC8+O1xuXHRcdH1cblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8dGZvb3QgY2xhc3NOYW1lPVwidGFibGUtcGFnZXJcIj5cblx0XHRcdFx0PHRyIGNsYXNzTmFtZT1cInBhZ2VyLXJvd1wiPlxuXHRcdFx0XHRcdDx0ZCBjb2xTcGFuPXtfY29sdW1uU2l6ZX0+e19lbGVtZW50fTwvdGQ+XG5cdFx0XHRcdDwvdHI+XG5cdFx0XHQ8L3Rmb290PlxuXHRcdCk7XG5cdH0sXG5cdF9fb25EYXRhSW5pdGlhbDogZnVuY3Rpb24gKGRhdGEpe1xuXHRcdHZhciBfbWV0aG9kID0gZGF0YS5tZXRob2R8fCdwb3N0Jyxcblx0XHRcdF9wYXJhbXMgPSB7fSxcblx0XHRcdF9rZXlNYXBzID0gem4uZGVlcEFzc2lnbih7XG5cdFx0XHRcdHRvdGFsOiBcInRvdGFsXCIsXG5cdFx0XHRcdHBhZ2VJbmRleDogJ3BhZ2VJbmRleCcsXG5cdFx0XHRcdHBhZ2VTaXplOiAncGFnZVNpemUnLFxuXHRcdFx0XHRkYXRhOiAnZGF0YSdcblx0XHRcdH0sIHRoaXMucHJvcHMua2V5TWFwcyk7XG5cblx0XHRfcGFyYW1zW19rZXlNYXBzLnBhZ2VJbmRleF0gPSB0aGlzLnN0YXRlLnBhZ2VJbmRleCB8fCAxO1xuXHRcdF9wYXJhbXNbX2tleU1hcHMucGFnZVNpemVdID0gdGhpcy5wcm9wcy5wYWdlU2l6ZSB8fCAxMDtcblx0XHRpZihfbWV0aG9kID09ICdnZXQnKXtcblx0XHRcdGRhdGEgPSB6bi5kZWVwQXNzaWduKGRhdGEsIHtcblx0XHRcdFx0cGFyYW1zOiBfcGFyYW1zXG5cdFx0XHR9KTtcblx0XHR9ZWxzZXtcblx0XHRcdGRhdGEgPSB6bi5kZWVwQXNzaWduKGRhdGEsIHtcblx0XHRcdFx0ZGF0YTogX3BhcmFtc1xuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdFxuXHRcdHJldHVybiB0aGlzLnN0YXRlLmtleU1hcHMgPSBfa2V5TWFwcywgZGF0YTtcblx0fSxcblx0X19vbkRhdGFDcmVhdGVkOiBmdW5jdGlvbiAoZGF0YSwgdGFibGUpe1xuXHRcdHRoaXMuZGF0YSA9IGRhdGE7XG5cdFx0dGhpcy5wcm9wcy5vbkRhdGFDcmVhdGVkICYmIHRoaXMucHJvcHMub25EYXRhQ3JlYXRlZChkYXRhLCB0YWJsZSwgdGhpcyk7XG5cdH0sXG5cdF9fb25EYXRhTG9hZGVkOiBmdW5jdGlvbiAocmVzcG9uc2UsIHRhYmxlKXtcblx0XHR2YXIgX2RhdGEgPSByZXNwb25zZS5kYXRhO1xuXHRcdHZhciBfcmV0dXJuID0gdGhpcy5wcm9wcy5vbkRhdGFMb2FkZWQgJiYgdGhpcy5wcm9wcy5vbkRhdGFMb2FkZWQoX2RhdGEsIHRhYmxlLCB0aGlzKTtcblx0XHRpZihfcmV0dXJuICE9PSBmYWxzZSl7XG5cdFx0XHR0YWJsZS5zZXRTdGF0ZSh7XG5cdFx0XHRcdGRhdGE6IF9kYXRhW3RoaXMuc3RhdGUua2V5TWFwcy5kYXRhXVxuXHRcdFx0fSk7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0dG90YWw6IE1hdGguY2VpbChfZGF0YVt0aGlzLnN0YXRlLmtleU1hcHMudG90YWxdL3RoaXMucHJvcHMucGFnZVNpemUpLFxuXHRcdFx0XHRjb3VudDogX2RhdGFbdGhpcy5zdGF0ZS5rZXlNYXBzLnRvdGFsXSxcblx0XHRcdFx0Y3VycmVudDogX2RhdGFbdGhpcy5zdGF0ZS5rZXlNYXBzLnBhZ2VJbmRleF0sXG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PFRhYmxlIHsuLi50aGlzLnByb3BzfSBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd6ci10YWJsZS1wYWdlcicsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gXG5cdFx0XHRcdGNoaWxkcmVuUmVuZGVyPXt0aGlzLl9fcmVuZGVyUGFnZXJ9XG5cdFx0XHRcdG9uRGF0YUluaXRpYWw9e3RoaXMuX19vbkRhdGFJbml0aWFsfVxuXHRcdFx0XHRvbkRhdGFDcmVhdGVkPXt0aGlzLl9fb25EYXRhQ3JlYXRlZH1cblx0XHRcdFx0b25EYXRhTG9hZGVkPXt0aGlzLl9fb25EYXRhTG9hZGVkfSAvPlxuXHRcdCk7XG5cdH1cbn0pOyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSZWFjdERPTSA9IHpudWkuUmVhY3RET00gfHwgcmVxdWlyZSgncmVhY3QtZG9tJyk7XG52YXIgQ2hlY2tib3ggPSByZXF1aXJlKCd6bnVpLXJlYWN0LXNlbGVjdG9yJykuQ2hlY2tib3g7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJUQ2VsbENoZWNrYm94Jyxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNoZWNrZWQ6IHRoaXMucHJvcHMuY2hlY2tlZCB8fCBmYWxzZVxuXHRcdH1cblx0fSxcblx0X19vbkNoZWNrYm94Q2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdGlmKHRoaXMucHJvcHMudGhlYWQpIHtcblx0XHRcdHRoaXMuX19vbkhlYWRDaGFuZ2UoZXZlbnQpO1xuXHRcdH1lbHNlIGlmKHRoaXMucHJvcHMudGJvZHkpIHtcblx0XHRcdHRoaXMuX19vbkJvZHlDaGFuZ2UoZXZlbnQpO1xuXHRcdH1cblx0fSxcblx0X19vbkhlYWRDaGFuZ2U6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0Y29uc29sZS5sb2coZXZlbnQuY2hlY2tlZCwgdGhpcy5wcm9wcyk7XG5cdH0sXG5cdF9fb25Cb2R5Q2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdGNvbnNvbGUubG9nKGV2ZW50LmNoZWNrZWQsIHRoaXMucHJvcHMpO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwienItdGFibGUtY2VsbC1jaGVja2JveFwiPjxDaGVja2JveCBjaGVja2VkPXt0cnVlfSBvbkNoYW5nZT17dGhpcy5fX29uQ2hlY2tib3hDaGFuZ2V9Lz48L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIENoZWNrYm94OiByZXF1aXJlKCcuL0NoZWNrYm94JyksXG4gICAgLy9CdXR0b25zOiByZXF1aXJlKCcuL0J1dHRvbnMnKSxcbiAgICAvL0lucHV0OiByZXF1aXJlKCcuL0lucHV0JyksXG4gICAgLy9DYWxjdWxhdG9yOiByZXF1aXJlKCcuL0NhbGN1bGF0b3InKVxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICB0YWJsZTogcmVxdWlyZSgnLi90YWJsZS9pbmRleCcpLFxuICAgIGNlbGw6IHJlcXVpcmUoJy4vY2VsbC9pbmRleCcpLFxuICAgIFRhYmxlOiByZXF1aXJlKCcuL1RhYmxlJyksXG4gICAgVGFibGVFZGl0b3I6IHJlcXVpcmUoJy4vVGFibGVFZGl0b3InKSxcbiAgICBUYWJsZVBhZ2VyOiByZXF1aXJlKCcuL1RhYmxlUGFnZXInKVxufTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJUYWJsZUNvbGdyb3VwJyxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8Y29sZ3JvdXA+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHQodGhpcy5wcm9wcy5jb2x1bW5zfHxbXSkubWFwKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIDxjb2wga2V5PXtpbmRleH0gc3R5bGU9e3sgd2lkdGg6IGl0ZW0ud2lkdGggfX0gLz47XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fVxuXHRcdFx0PC9jb2xncm91cD5cblx0XHQpO1xuXHR9XG59KTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBUUm93ID0gcmVxdWlyZSgnLi9UUm93Jyk7XG52YXIgbG9hZGVyID0gcmVxdWlyZSgnem51aS1yZWFjdC1sb2FkZXInKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUlRCb2R5Jyxcblx0Z2V0SW5pdGlhbFN0YXRlOmZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGFjdGl2ZTogbnVsbCxcblx0XHRcdGNoZWNrZWRzOiBbXSxcblx0XHRcdGNsYXNzTmFtZTogJycsXG5cdFx0XHRzdHlsZToge30sXG5cdFx0XHRsb2FkaW5nOiBmYWxzZVxuXHRcdH1cblx0fSxcblx0X19yZW5kZXJMb2FkaW5nOiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX2VsZW1lbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudCh0aGlzLnByb3BzLmxvYWRpbmdSZW5kZXIsIHtcblx0XHRcdHRib2R5OiB0aGlzXG5cdFx0fSk7XG5cblx0XHRpZighX2VsZW1lbnQpe1xuXHRcdCBcdF9lbGVtZW50ID0gPGxvYWRlci5EYXRhTG9hZGVyIGxvYWRlcj1cIndhdmVcIiB0aXRsZT17J0xvYWRpbmcuLi4nfSAvPjtcblx0XHR9XG5cblx0XHR2YXIgX2xvYWRpbmcgPSB6bi5leHRlbmQoeyBjbGFzc05hbWU6ICcnLCBzdHlsZToge30gfSwgdGhpcy5wcm9wcy5sb2FkaW5nKTtcblx0XHRyZXR1cm4gPHRyIGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ0Ym9keS1sb2FkaW5nXCIsIF9sb2FkaW5nLmNsYXNzTmFtZSl9IHN0eWxlPXtfbG9hZGluZy5zdHlsZX0+XG5cdFx0XHQ8dGQgY29sU3Bhbj17dGhpcy5wcm9wcy5jb2x1bW5zLmxlbmd0aH0+e19lbGVtZW50fTwvdGQ+XG5cdFx0PC90cj47XG5cdH0sXG5cdF9fcmVuZGVyRW1wdHk6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMuZW1wdHlSZW5kZXIsIHtcblx0XHRcdHRib2R5OiB0aGlzXG5cdFx0fSk7XG5cblx0XHRpZighX2VsZW1lbnQpe1xuXHRcdCBcdF9lbGVtZW50ID0gPGRpdiBjbGFzc05hbWU9XCJlbXB0eS1jb250ZW50XCI+Tm8gRGF0YS48L2Rpdj47XG5cdFx0fVxuXHRcdHZhciBfZW1wdHkgPSB6bi5leHRlbmQoeyBjbGFzc05hbWU6ICcnLCBzdHlsZToge30gfSwgdGhpcy5wcm9wcy5lbXB0eSk7XG5cdFx0cmV0dXJuIDx0ciBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwidGJvZHktZW1wdHlcIiwgX2VtcHR5LmNsYXNzTmFtZSl9IHN0eWxlPXtfZW1wdHkuc3R5bGV9PlxuXHRcdFx0PHRkIGNvbFNwYW49e3RoaXMucHJvcHMuY29sdW1ucy5sZW5ndGh9PntfZWxlbWVudH08L3RkPlxuXHRcdDwvdHI+O1xuXHR9LFxuXHRfX29uUm93Q2xpY2s6IGZ1bmN0aW9uIChldmVudCkge1xuXHRcdHZhciBfZGF0YSA9IGV2ZW50LmRhdGE7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRhY3RpdmU6IF9kYXRhLnRyb3cucHJvcHMuZGF0YVxuXHRcdH0pO1xuXHRcdGV2ZW50LnRib2R5ID0gdGhpcztcblx0XHR0aGlzLnByb3BzLm9uUm93Q2xpY2sgJiYgdGhpcy5wcm9wcy5vblJvd0NsaWNrKGV2ZW50KTtcblx0fSxcblx0X19vbkNlbGxDbGljazogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHRldmVudC50Ym9keSA9IHRoaXM7XG5cdFx0dGhpcy5wcm9wcy5vbkNlbGxDbGljayAmJiB0aGlzLnByb3BzLm9uQ2VsbENsaWNrKGV2ZW50KTtcblx0fSxcblx0X19yZW5kZXJSb3c6IGZ1bmN0aW9uIChpdGVtLCBpbmRleCl7XG5cdFx0aWYoIXpuLmlzKGl0ZW0sICdvYmplY3QnKSkgeyByZXR1cm4gbnVsbDt9XG5cdFx0dmFyIF90ZW1wID0gdGhpcy5wcm9wcy5lYWNoUm93RGF0YSAmJiB0aGlzLnByb3BzLmVhY2hSb3dEYXRhKGl0ZW0sIGluZGV4KTtcblx0XHRpZihfdGVtcCAmJiB6bi5pcyhfdGVtcCwgJ29iamVjdCcpKXtcblx0XHRcdGl0ZW0gPSBfdGVtcDtcblx0XHR9XG5cdFx0dmFyIF9lbGVtZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQodGhpcy5wcm9wcy5yb3dSZW5kZXIsIHtcblx0XHRcdGRhdGE6IGl0ZW0sXG5cdFx0XHRyb3dJbmRleDogaW5kZXgsXG5cdFx0XHR0Ym9keTogdGhpc1xuXHRcdH0pO1xuXG5cdFx0aWYoX2VsZW1lbnQpe1xuXHRcdFx0cmV0dXJuIF9lbGVtZW50O1xuXHRcdH1cblxuXHRcdHJldHVybiA8VFJvdyBrZXk9e2luZGV4fSB7Li4udGhpcy5wcm9wcy5yb3d9IFxuXHRcdFx0XHRcdGNlbGw9e3RoaXMucHJvcHMuY2VsbH1cblx0XHRcdFx0XHRjZWxsUmVuZGVyPXt0aGlzLnByb3BzLmNlbGxSZW5kZXJ9XG5cdFx0XHRcdFx0Y29sdW1ucz17dGhpcy5wcm9wcy5jb2x1bW5zfSBcblx0XHRcdFx0XHR0Ym9keT17dGhpc31cblx0XHRcdFx0XHRkYXRhPXtpdGVtfSBcblx0XHRcdFx0XHRhY3RpdmU9e3RoaXMuc3RhdGUuYWN0aXZlID09IGl0ZW19IFxuXHRcdFx0XHRcdGNoZWNrZWQ9e3RoaXMuc3RhdGUuY2hlY2tlZHMuaW5kZXhPZihpdGVtKSAhPT0gLTF9IFxuXHRcdFx0XHRcdG9uUm93Q2xpY2s9e3RoaXMuX19vblJvd0NsaWNrfVxuXHRcdFx0XHRcdG9uQ2VsbENsaWNrPXt0aGlzLl9fb25DZWxsQ2xpY2t9IC8+O1xuXHR9LFxuXHRfX3JlbmRlckRhdGE6IGZ1bmN0aW9uICgpe1xuXHRcdGlmKHRoaXMucHJvcHMuZGF0YSA9PSBudWxsIHx8ICh0aGlzLnByb3BzLmRhdGEgJiYgIXRoaXMucHJvcHMuZGF0YS5sZW5ndGgpKXtcblx0XHRcdHJldHVybiB0aGlzLl9fcmVuZGVyRW1wdHkoKTtcblx0XHR9XG5cdFx0cmV0dXJuIDw+XG5cdFx0XHR7XG5cdFx0XHRcdHRoaXMucHJvcHMuZGF0YS5tYXAodGhpcy5fX3JlbmRlclJvdylcblx0XHRcdH1cblx0XHQ8Lz47XG5cdH0sXG5cdF9fcmVuZGVyOiBmdW5jdGlvbiAoKXtcblx0XHRpZih0aGlzLnByb3BzLmxvYWRpbmcgfHwgdGhpcy5zdGF0ZS5sb2FkaW5nKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5fX3JlbmRlckxvYWRpbmcoKTtcblx0XHR9ZWxzZXtcblx0XHRcdHJldHVybiB0aGlzLl9fcmVuZGVyRGF0YSgpO1xuXHRcdH1cblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8dGJvZHkgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXRhYmxlLXRib2R5XCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lLCB0aGlzLnN0YXRlLmNsYXNzTmFtZSl9IHN0eWxlPXt6bnVpLnJlYWN0LnN0eWxlKHRoaXMucHJvcHMuc3R5bGUsIHRoaXMuc3RhdGUuc3R5bGUpfT5cblx0XHRcdFx0eyB0aGlzLl9fcmVuZGVyKCkgfVxuXHRcdFx0PC90Ym9keT5cblx0XHQpO1xuXHR9XG59KTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSZWFjdERPTSA9IHpudWkuUmVhY3RET00gfHwgcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJUQ2VsbCcsXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRjbGFzc05hbWU6ICcnLFxuXHRcdFx0c3R5bGU6IHt9LFxuXHRcdFx0ZGlzYWJsZWQ6IHRoaXMucHJvcHMuZGlzYWJsZWQsXG5cdFx0XHRjaGVja2VkOiB0aGlzLnByb3BzLmNoZWNrZWQsXG5cdFx0XHRhY3RpdmU6IHRoaXMucHJvcHMuYWN0aXZlXG5cdFx0fVxuXHR9LFxuXHRfX3JlbmRlckNlbGxDb250ZW50OiBmdW5jdGlvbiAoKXtcblx0XHRpZih0aGlzLnByb3BzLmNoaWxkcmVuKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbjtcblx0XHR9XG5cdFx0XG5cdFx0dmFyIF92YWx1ZSA9IG51bGw7XG5cdFx0aWYodGhpcy5wcm9wcy5kYXRhICYmIHRoaXMucHJvcHMubmFtZSkge1xuXHRcdFx0X3ZhbHVlID0gdGhpcy5wcm9wcy5kYXRhW3RoaXMucHJvcHMubmFtZV07XG5cdFx0fVxuXG5cdFx0dmFyIF9yZW5kZXIgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudCh0aGlzLnByb3BzLnJlbmRlciB8fCB0aGlzLnByb3BzLmJvZHksIHtcblx0XHRcdGNlbGxJbmRleDogdGhpcy5wcm9wcy5jZWxsSW5kZXgsIFxuXHRcdFx0Y29sdW1uOiB0aGlzLnByb3BzLmNvbHVtbixcblx0XHRcdGRhdGE6IHRoaXMucHJvcHMuZGF0YSxcblx0XHRcdHZhbHVlOiBfdmFsdWUsXG5cdFx0XHR0Y2VsbDogdGhpcyxcblx0XHRcdHRyb3c6IHRoaXMucHJvcHMudHJvdyxcblx0XHRcdHRib2R5OiB0aGlzLnByb3BzLnRib2R5XG5cdFx0fSk7XG5cdFx0XG5cdFx0aWYoX3JlbmRlcil7XG5cdFx0XHRyZXR1cm4gX3JlbmRlcjtcblx0XHR9XG5cblx0XHRyZXR1cm4gX3ZhbHVlO1xuXHR9LFxuXHRfX2NlbGxDbGljazogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHRldmVudC5kYXRhID0ge1xuXHRcdFx0dGQ6IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpLFxuXHRcdFx0dGNlbGw6IHRoaXNcblx0XHR9O1xuXHRcdHRoaXMucHJvcHMub25DbGljayAmJiB0aGlzLnByb3BzLm9uQ2xpY2soZXZlbnQpO1xuXHRcdHRoaXMucHJvcHMub25DZWxsQ2xpY2sgJiYgdGhpcy5wcm9wcy5vbkNlbGxDbGljayhldmVudCk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHRkIGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci10YWJsZS10Y2VsbFwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSwgdGhpcy5zdGF0ZS5jbGFzc05hbWUpfSBzdHlsZT17em51aS5yZWFjdC5zdHlsZSh0aGlzLnByb3BzLnN0eWxlLCB0aGlzLnN0YXRlLnN0eWxlKX1cdFxuXHRcdFx0XHRkYXRhLWRpc2FibGVkPXt0aGlzLnN0YXRlLmRpc2FibGVkfVxuXHRcdFx0XHRkYXRhLWNoZWNrZWQ9e3RoaXMuc3RhdGUuY2hlY2tlZH1cblx0XHRcdFx0ZGF0YS1hY3RpdmU9e3RoaXMuc3RhdGUuYWN0aXZlfVxuXHRcdFx0XHRvbkNsaWNrPXt0aGlzLl9fY2VsbENsaWNrfSA+XG5cdFx0XHRcdHt0aGlzLl9fcmVuZGVyQ2VsbENvbnRlbnQoKX1cblx0XHRcdDwvdGQ+XG5cdFx0KTtcblx0fVxufSk7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgZmlsdGVyID0gcmVxdWlyZSgnem51aS1yZWFjdC1maWx0ZXInKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOiAnWlJGaWx0ZXInLFxuXHRnZXRJbml0aWFsU3RhdGU6ZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y2xhc3NOYW1lOiAnJyxcblx0XHRcdHN0eWxlOiB7fSxcblx0XHRcdGRhdGE6IHt9XG5cdFx0fVxuXHR9LFxuXHRfX29uRmlsdGVyQ2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdGlmKGV2ZW50Lm5hbWUgJiYgZXZlbnQudmFsdWUpIHtcblx0XHRcdHRoaXMuc3RhdGUuZGF0YVtldmVudC5uYW1lXSA9IHtcblx0XHRcdFx0dmFsdWU6IGV2ZW50LnZhbHVlLFxuXHRcdFx0XHRvcHQ6IGV2ZW50Lm9wdFxuXHRcdFx0fTtcblx0XHR9XG5cdFx0dGhpcy5wcm9wcy5vbkZpbHRlciAmJiB0aGlzLnByb3BzLm9uRmlsdGVyKHRoaXMuc3RhdGUuZGF0YSk7XG5cdH0sXG5cdF9fb25GaWx0ZXJDYW5jZWw6IGZ1bmN0aW9uIChuYW1lKXtcblx0XHRpZihuYW1lICYmIHRoaXMuc3RhdGUuZGF0YSl7XG5cdFx0XHR0aGlzLnN0YXRlLmRhdGFbbmFtZV0gPSBudWxsO1xuXHRcdFx0ZGVsZXRlIHRoaXMuc3RhdGUuZGF0YVtuYW1lXTtcblx0XHR9XG5cdH0sXG5cdF9fcmVuZGVyQ2VsbDogZnVuY3Rpb24gKGNvbHVtbiwgaW5kZXgpe1xuXHRcdGlmKCF6bi5pcyhjb2x1bW4sICdvYmplY3QnKSkgeyByZXR1cm4gbnVsbDsgfVxuXHRcdHZhciBfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMuY2VsbFJlbmRlciwge1xuXHRcdFx0Y29sdW1uOiBjb2x1bW4sXG5cdFx0XHRjZWxsSW5kZXg6IGluZGV4LCBcblx0XHRcdHRmaWx0ZXI6IHRoaXNcblx0XHR9KTtcblx0XHRpZihfZWxlbWVudCl7XG5cdFx0XHRyZXR1cm4gX2VsZW1lbnQ7XG5cdFx0fVxuXHRcdFxuXHRcdHZhciBfY29udGVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KGNvbHVtbi5yZW5kZXIsIHtcblx0XHRcdGNvbHVtbjogY29sdW1uLFxuXHRcdFx0Y2VsbEluZGV4OiBpbmRleCwgXG5cdFx0XHR0ZmlsdGVyOiB0aGlzXG5cdFx0fSk7XG5cblx0XHRpZighX2NvbnRlbnQgJiYgY29sdW1uLmZpbHRlcikge1xuXHRcdFx0X2NvbnRlbnQgPSA8ZmlsdGVyLkZpbHRlckZpZWxkIHsuLi5jb2x1bW4uZmlsdGVyfSBuYW1lPXtjb2x1bW4ubmFtZX0gb25GaWx0ZXJDaGFuZ2U9e3RoaXMuX19vbkZpbHRlckNoYW5nZX0gb25DYW5jZWw9e3RoaXMuX19vbkZpbHRlckNhbmNlbH0gLz47XG5cdFx0fVxuXG5cdFx0dmFyIF9jZWxsID0gem4uZXh0ZW5kKHsgc3R5bGU6IHt9LCBjbGFzc05hbWU6ICcnIH0sIHRoaXMucHJvcHMuY2VsbCk7XG5cdFx0cmV0dXJuIDx0ZCBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd0ZmlsdGVyLWNlbGwnLCBfY2VsbC5jbGFzc05hbWUpfSBzdHlsZT17X2NlbGwuc3R5bGV9PlxuXHRcdFx0eyBfY29udGVudCB9XG5cdFx0PC90ZD47XG5cdH0sXG5cdF9fcmVuZGVyUm93OiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX2VsZW1lbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudCh0aGlzLnByb3BzLnJvd1JlbmRlciwge1xuXHRcdFx0dGZpbHRlcjogdGhpc1xuXHRcdH0pO1xuXHRcdGlmKF9lbGVtZW50KXtcblx0XHRcdHJldHVybiBfZWxlbWVudDtcblx0XHR9XG5cdFx0dmFyIF9yb3cgPSB6bi5leHRlbmQoeyBjbGFzc05hbWU6ICcnLCBzdHlsZToge30gfSwgdGhpcy5wcm9wcy5yb3cpO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8dHIgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInRmaWx0ZXItcm93IHpyLXRhYmxlLXRyb3dcIiwgX3Jvdy5jbGFzc05hbWUpfSBzdHlsZT17X3Jvdy5zdHlsZX0+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHQodGhpcy5wcm9wcy5jb2x1bW5zfHxbXSkubWFwKHRoaXMuX19yZW5kZXJDZWxsKVxuXHRcdFx0XHR9XG5cdFx0XHQ8L3RyPlxuXHRcdCk7XG5cdH0sXG5cdHJlbmRlcjpmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8dGhlYWQgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXRhYmxlLXRmaWx0ZXJcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUsIHRoaXMuc3RhdGUuY2xhc3NOYW1lKX0gc3R5bGU9e3pudWkucmVhY3Quc3R5bGUodGhpcy5wcm9wcy5zdHlsZSwgdGhpcy5zdGF0ZS5zdHlsZSl9PlxuXHRcdFx0XHR7dGhpcy5fX3JlbmRlclJvdygpfVxuXHRcdFx0PC90aGVhZD5cblx0XHQpO1xuXHR9XG59KTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJURm9vdCcsXG5cdF9fcmVuZGVyQ2hpbGRyZW46IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfY29sdW1ucyA9IHRoaXMucHJvcHMuY29sdW1ucyB8fCBbXTtcblx0XHRpZih0aGlzLnByb3BzLmNoaWxkcmVuKXtcblx0XHRcdHJldHVybiA8dHIgY2xhc3NOYW1lPVwidGZvb3Qtcm93XCI+XG5cdFx0XHRcdDx0ZCBjb2xTcGFuPXtfY29sdW1ucy5sZW5ndGh9Pnt0aGlzLnByb3BzLmNoaWxkcmVufTwvdGQ+XG5cdFx0XHQ8L3RyPjtcblx0XHR9ZWxzZXtcblx0XHRcdHJldHVybiB0aGlzLl9fcmVuZGVyUm93KCk7XG5cdFx0fVxuXHR9LFxuXHRfX3JlbmRlckNlbGw6IGZ1bmN0aW9uIChjb2x1bW4sIGluZGV4KXtcblx0XHRpZighem4uaXMoY29sdW1uLCAnb2JqZWN0JykpIHsgcmV0dXJuIG51bGw7IH1cblx0XHR2YXIgX2VsZW1lbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudCh0aGlzLnByb3BzLmNlbGxSZW5kZXIsIHtcblx0XHRcdGNvbHVtbjogY29sdW1uLFxuXHRcdFx0Y2VsbEluZGV4OiBpbmRleCwgXG5cdFx0XHR0Zm9vdDogdGhpc1xuXHRcdH0pO1xuXHRcdGlmKF9lbGVtZW50KXtcblx0XHRcdHJldHVybiBfZWxlbWVudDtcblx0XHR9XG5cblx0XHR2YXIgX2NvbnRlbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudChjb2x1bW4ucmVuZGVyIHx8IGNvbHVtbi5mb290LCB7XG5cdFx0XHRjb2x1bW46IGNvbHVtbixcblx0XHRcdGNlbGxJbmRleDogaW5kZXgsIFxuXHRcdFx0dGZvb3Q6IHRoaXNcblx0XHR9KTtcblxuXHRcdGlmKHRoaXMucHJvcHMucmVuZGVyKSB7XG5cdFx0XHRfY29udGVudCA9IHRoaXMucHJvcHMucmVuZGVyKGNvbHVtbiwgaW5kZXgsIHRoaXMpO1xuXHRcdH1cblxuXHRcdHZhciBfY2VsbCA9IHpuLmV4dGVuZCh7IHN0eWxlOiB7fSwgY2xhc3NOYW1lOiAnJyB9LCB0aGlzLnByb3BzLmNlbGwpO1xuXHRcdHJldHVybiA8dGgga2V5PXtpbmRleH0gY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgndGZvb3QtY2VsbCcsIF9jZWxsLmNsYXNzTmFtZSl9IHN0eWxlPXtfY2VsbC5zdHlsZX0+XG5cdFx0XHR7IF9jb250ZW50IH1cblx0XHQ8L3RoPjtcblx0fSxcblx0X19yZW5kZXJSb3c6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMucm93UmVuZGVyLCB7XG5cdFx0XHR0aGVhZDogdGhpc1xuXHRcdH0pO1xuXHRcdGlmKF9lbGVtZW50KXtcblx0XHRcdHJldHVybiBfZWxlbWVudDtcblx0XHR9XG5cdFx0dmFyIF9yb3cgPSB6bi5leHRlbmQoeyBjbGFzc05hbWU6ICcnLCBzdHlsZToge30gfSwgdGhpcy5wcm9wcy5yb3cpO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8dHIgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInRmb290LXJvd1wiLCBfcm93LmNsYXNzTmFtZSl9IHN0eWxlPXtfcm93LnN0eWxlfT5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdCh0aGlzLnByb3BzLmNvbHVtbnN8fFtdKS5tYXAodGhpcy5fX3JlbmRlckNlbGwpXG5cdFx0XHRcdH1cblx0XHRcdDwvdHI+XG5cdFx0KTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8dGZvb3QgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXRhYmxlLXRmb290XCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9PlxuXHRcdFx0XHR7dGhpcy5fX3JlbmRlckNoaWxkcmVuKCl9XG5cdFx0XHQ8L3Rmb290PlxuXHRcdCk7XG5cdH1cbn0pOyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBUSGVhZFNvcnQgPSByZXF1aXJlKCcuL1RIZWFkU29ydCcpO1xudmFyIHBvcHVwID0gcmVxdWlyZSgnem51aS1yZWFjdC1wb3B1cCcpO1xudmFyIFNWR0ljb24gPSByZXF1aXJlKCd6bnVpLXJlYWN0LWljb24nKS5TVkdJY29uO1xudmFyIGpzb25lZGl0b3IgPSByZXF1aXJlKCdydC1qc29uLWVkaXRvcicpO1xubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidUSGVhZCcsXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNsYXNzTmFtZTogJycsXG5cdFx0XHRzdHlsZToge30sXG5cdFx0XHRzb3J0OiB7fSxcblx0XHRcdGZpbHRlcjoge31cblx0XHR9O1xuXHR9LFxuXHRfX29uQ29sdW1uU29ydDogZnVuY3Rpb24gKHNvcnQsIGNvbHVtbil7XG5cdFx0aWYoY29sdW1uLm5hbWUpIHtcblx0XHRcdHRoaXMuc3RhdGUuc29ydFtjb2x1bW4ubmFtZV0gPSAoc29ydD09J2ZhU29ydEFscGhhRG93bicgPyAnZGVzYycgOiAnYXNjJyk7XG5cdFx0fVxuXHRcdHRoaXMucHJvcHMub25Tb3J0ICYmIHRoaXMucHJvcHMub25Tb3J0KHRoaXMuc3RhdGUuc29ydCk7XG5cdH0sXG5cdF9fb25Db2x1bW5FZGl0b3JDaGFuZ2U6IGZ1bmN0aW9uIChkYXRhLCBjaGlsZCwgcm9vdCwgaW5kZXgpe1xuICAgICAgICB2YXIgX3Jvb3QgPSByb290IHx8IGNoaWxkO1xuXHRcdHRoaXMucHJvcHMub25Db2x1bW5DaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkNvbHVtbkNoYW5nZShfcm9vdC5zdGF0ZS52YWx1ZSwgaW5kZXgpO1xuICAgIH0sXG5cdF9faWNvbkNsaWNrUmVuZGVyOiBmdW5jdGlvbiAoY29sdW1uLCBpbmRleCl7XG5cdFx0cmV0dXJuIDxkaXYgc3R5bGU9e3twYWRkaW5nOiAxMCwgbWF4SGVpZ2h0OiA1MDAsIHdpZHRoOiA0MDAsIG92ZXJmbG93OiAnYXV0byd9fT5cblx0XHRcdDxqc29uZWRpdG9yLmZvcm0ub2JqZWN0IGZvbGQ9e2ZhbHNlfVxuXHRcdFx0XHRkaXNwbGF5Q2xvc3VyZT17dHJ1ZX0gXG5cdFx0XHRcdGRpc3BsYXlJdGVtQ291bnQ9e3RydWV9IFxuXHRcdFx0XHRsYWJlbD17J0NvbHVtbid9IFxuXHRcdFx0XHR2YWx1ZT17Y29sdW1ufSBcblx0XHRcdFx0b25DaGFuZ2U9eyhkYXRhLCBjaGlsZCwgcm9vdCk9PnRoaXMuX19vbkNvbHVtbkVkaXRvckNoYW5nZShkYXRhLCBjaGlsZCwgcm9vdCwgaW5kZXgpfSAvPlxuXHRcdDwvZGl2Pjtcblx0fSxcblx0X19yZW5kZXJDZWxsOiBmdW5jdGlvbiAoY29sdW1uLCBpbmRleCl7XG5cdFx0aWYoIXpuLmlzKGNvbHVtbiwgJ29iamVjdCcpKSB7IHJldHVybiBudWxsOyB9XG5cdFx0dmFyIF9lbGVtZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQodGhpcy5wcm9wcy5jZWxsUmVuZGVyLCB7XG5cdFx0XHRjb2x1bW46IGNvbHVtbixcblx0XHRcdGNlbGxJbmRleDogaW5kZXgsIFxuXHRcdFx0dGhlYWQ6IHRoaXNcblx0XHR9KTtcblx0XHRpZihfZWxlbWVudCl7XG5cdFx0XHRyZXR1cm4gX2VsZW1lbnQ7XG5cdFx0fVxuXG5cdFx0dmFyIF9jb250ZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQoY29sdW1uLnJlbmRlciB8fCBjb2x1bW4uaGVhZCwge1xuXHRcdFx0Y29sdW1uOiBjb2x1bW4sXG5cdFx0XHRjZWxsSW5kZXg6IGluZGV4LCBcblx0XHRcdHRoZWFkOiB0aGlzXG5cdFx0fSk7XG5cdFx0aWYoIV9jb250ZW50KSB7XG5cdFx0XHRfY29udGVudCA9IDxkaXYgY2xhc3NOYW1lPVwiY2VsbC1sYWJlbFwiPlxuXHRcdFx0XHR7IGNvbHVtbi5sYWJlbCB9XG5cdFx0XHRcdHsgXG5cdFx0XHRcdFx0ISFjb2x1bW4uZWRpdGFibGUgJiYgPHBvcHVwLkRyb3Bkb3duIFxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY2VsbC1lZGl0b3JcIiBcblx0XHRcdFx0XHRcdHBvcG92ZXI9e3tcblx0XHRcdFx0XHRcdFx0cmVuZGVyOiB0aGlzLl9faWNvbkNsaWNrUmVuZGVyKGNvbHVtbiwgaW5kZXgpLFxuXHRcdFx0XHRcdFx0XHRjbG9zZWFibGU6IHRydWVcblx0XHRcdFx0XHRcdH19ID5cblx0XHRcdFx0XHRcdDxTVkdJY29uIGljb249XCJmYUVkaXRcIiAvPlxuXHRcdFx0XHRcdDwvcG9wdXAuRHJvcGRvd24+XG5cdFx0XHRcdH1cblx0XHRcdDwvZGl2Pjtcblx0XHR9XG5cblx0XHR2YXIgX2NlbGwgPSB6bi5leHRlbmQoeyBzdHlsZToge30sIGNsYXNzTmFtZTogJycgfSwgdGhpcy5wcm9wcy5jZWxsKTtcblx0XHRyZXR1cm4gPHRoIGtleT17aW5kZXh9IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3RoZWFkLWNlbGwnLCBfY2VsbC5jbGFzc05hbWUpfSBzdHlsZT17X2NlbGwuc3R5bGV9PlxuXHRcdFx0eyBfY29udGVudCB9XG5cdFx0XHR7ICEhY29sdW1uLnNvcnQgJiYgPFRIZWFkU29ydCBjbGFzc05hbWU9XCJjZWxsLXNvcnRcIiBvblNvcnQ9eyhzb3J0KT0+dGhpcy5fX29uQ29sdW1uU29ydChzb3J0LCBjb2x1bW4pfSAvPn1cblx0XHQ8L3RoPjtcblx0fSxcblx0X19yZW5kZXJSb3c6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMucm93UmVuZGVyLCB7XG5cdFx0XHR0aGVhZDogdGhpc1xuXHRcdH0pO1xuXHRcdGlmKF9lbGVtZW50KXtcblx0XHRcdHJldHVybiBfZWxlbWVudDtcblx0XHR9XG5cdFx0dmFyIF9yb3cgPSB6bi5leHRlbmQoeyBjbGFzc05hbWU6ICcnLCBzdHlsZToge30gfSwgdGhpcy5wcm9wcy5yb3cpO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8dHIgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInRoZWFkLXJvd1wiLCBfcm93LmNsYXNzTmFtZSl9IHN0eWxlPXtfcm93LnN0eWxlfT5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdCh0aGlzLnByb3BzLmNvbHVtbnN8fFtdKS5tYXAodGhpcy5fX3JlbmRlckNlbGwpXG5cdFx0XHRcdH1cblx0XHRcdDwvdHI+XG5cdFx0KTtcblx0fSxcblx0cmVuZGVyOmZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDx0aGVhZCBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItdGFibGUtdGhlYWRcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUsIHRoaXMuc3RhdGUuY2xhc3NOYW1lKX0gc3R5bGU9e3pudWkucmVhY3Quc3R5bGUodGhpcy5wcm9wcy5zdHlsZSwgdGhpcy5zdGF0ZS5zdHlsZSl9PlxuXHRcdFx0XHR7dGhpcy5fX3JlbmRlclJvdygpfVxuXHRcdFx0PC90aGVhZD5cblx0XHQpO1xuXHR9XG59KTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBTVkdJY29uID0gcmVxdWlyZSgnem51aS1yZWFjdC1pY29uJykuU1ZHSWNvbjtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUlRIZWFkU29ydCcsXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHNvcnQ6ICdmYVNvcnQnLFxuXHRcdH1cblx0fSxcblx0X19pY29uQ2xpY2s6IGZ1bmN0aW9uICgpe1xuXHRcdGlmKHRoaXMuc3RhdGUuc29ydCA9PSAnZmFTb3J0Jyl7XG5cdFx0XHR0aGlzLnN0YXRlLnNvcnQgPSAnZmFTb3J0QWxwaGFEb3duJztcblx0XHR9IGVsc2UgaWYodGhpcy5zdGF0ZS5zb3J0ID09ICdmYVNvcnRBbHBoYURvd24nKXtcblx0XHRcdHRoaXMuc3RhdGUuc29ydCA9ICdmYVNvcnRBbHBoYVVwJztcblx0XHR9IGVsc2UgaWYodGhpcy5zdGF0ZS5zb3J0ID09ICdmYVNvcnRBbHBoYVVwJyl7XG5cdFx0XHR0aGlzLnN0YXRlLnNvcnQgPSAnZmFTb3J0QWxwaGFEb3duJztcblx0XHR9XG5cdFx0dGhpcy5mb3JjZVVwZGF0ZSgpO1xuXHRcdHRoaXMucHJvcHMub25Tb3J0ICYmIHRoaXMucHJvcHMub25Tb3J0KHRoaXMuc3RhdGUuc29ydCk7XG5cdH0sXG5cdHJlbmRlcjpmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLXRoZWFkLXNvcnQnLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfT5cblx0XHRcdFx0PFNWR0ljb24gb25DbGljaz17dGhpcy5fX2ljb25DbGlja30gaWNvbj17dGhpcy5zdGF0ZS5zb3J0fSAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUmVhY3RET00gPSB6bnVpLlJlYWN0RE9NIHx8IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xudmFyIFRDZWxsID0gcmVxdWlyZSgnLi9UQ2VsbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSVFJvdycsXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y2xhc3NOYW1lOiAnJyxcblx0XHRcdHN0eWxlOiB7fVxuXHRcdH1cblx0fSxcblx0X19nZXRUYXJnZXRURDogZnVuY3Rpb24gKHRhcmdldCkge1xuXHRcdGlmKHRhcmdldC50YWdOYW1lIT09J1REJyl7XG5cdFx0XHRyZXR1cm4gdGhpcy5fX2dldFRhcmdldFREKHRhcmdldC5wYXJlbnROb2RlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRhcmdldDtcblx0XHR9XG5cdH0sXG5cdF9fb25Sb3dDbGljazogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHR2YXIgX3RkID0gdGhpcy5fX2dldFRhcmdldFREKGV2ZW50LnRhcmdldCksXG5cdFx0XHRfdHIgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcblx0XHRldmVudC5kYXRhID0ge1xuXHRcdFx0dGQ6IF90ZCxcblx0XHRcdHRyOiBfdHIsXG5cdFx0XHR0cm93OiB0aGlzXG5cdFx0fTtcblx0XHR0aGlzLnByb3BzLm9uQ2xpY2sgJiYgdGhpcy5wcm9wcy5vbkNsaWNrKGV2ZW50KTtcblx0XHR0aGlzLnByb3BzLm9uUm93Q2xpY2sgJiYgdGhpcy5wcm9wcy5vblJvd0NsaWNrKGV2ZW50KTtcblx0fSxcblx0X19jZWxsUmVuZGVyOiBmdW5jdGlvbiAoY29sdW1uLCBpbmRleCl7XG5cdFx0aWYoIXpuLmlzKGNvbHVtbiwgJ29iamVjdCcpKSB7IHJldHVybiBudWxsO31cblx0XHR2YXIgX3Byb3BzID0gem4uZXh0ZW5kKHtcblx0XHRcdGNvbHVtbjogY29sdW1uLFxuXHRcdFx0dHJvdzogdGhpcyxcblx0XHRcdGNlbGxJbmRleDogaW5kZXgsXG5cdFx0XHRkYXRhOiB0aGlzLnByb3BzLmRhdGEsXG5cdFx0XHR0Ym9keTogdGhpcy5wcm9wcy50Ym9keVxuXHRcdH0sIHRoaXMucHJvcHMuY2VsbCwgY29sdW1uKTtcblx0XHR2YXIgX2VsZW1lbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudCh0aGlzLnByb3BzLmNlbGxSZW5kZXIsIF9wcm9wcyk7XG5cblx0XHRpZihfZWxlbWVudCl7XG5cdFx0XHRyZXR1cm4gX2VsZW1lbnQ7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIDxUQ2VsbCBrZXk9e2luZGV4fSB7Li4uX3Byb3BzfSBvbkNlbGxDbGljaz17dGhpcy5wcm9wcy5vbkNlbGxDbGlja30gY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgndHJvdy1jZWxsJywgX3Byb3BzLmNsYXNzTmFtZSl9IC8+O1xuXHR9LFxuXHRyZW5kZXI6ZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHRyIGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLXRhYmxlLXRyb3cnLCB0aGlzLnByb3BzLmNsYXNzTmFtZSwgdGhpcy5zdGF0ZS5jbGFzc05hbWUpfSBzdHlsZT17em51aS5yZWFjdC5zdHlsZSh0aGlzLnByb3BzLnN0eWxlLCB0aGlzLnN0YXRlLnN0eWxlKX1cblx0XHRcdFx0ZGF0YS1hY3RpdmU9e3RoaXMucHJvcHMuYWN0aXZlfSBcblx0XHRcdFx0ZGF0YS1jaGVja2VkPXt0aGlzLnByb3BzLmNoZWNrZWR9IFxuXHRcdFx0XHRvbkNsaWNrPXt0aGlzLl9fb25Sb3dDbGlja30+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHQodGhpcy5wcm9wcy5jb2x1bW5zfHxbXSkubWFwKHRoaXMuX19jZWxsUmVuZGVyKVxuXHRcdFx0XHR9XG5cdFx0XHQ8L3RyPlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgQ29sZ3JvdXA6IHJlcXVpcmUoJy4vQ29sZ3JvdXAnKSxcbiAgICBURmlsdGVyOiByZXF1aXJlKCcuL1RGaWx0ZXInKSxcbiAgICBUQm9keTogcmVxdWlyZSgnLi9UQm9keScpLFxuICAgIFRDZWxsOiByZXF1aXJlKCcuL1RDZWxsJyksXG4gICAgVEZvb3Q6IHJlcXVpcmUoJy4vVEZvb3QnKSxcbiAgICBUSGVhZDogcmVxdWlyZSgnLi9USGVhZCcpLFxuICAgIFRSb3c6IHJlcXVpcmUoJy4vVFJvdycpXG59OyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiUmVhY3RcIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJSZWFjdERPTVwiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcImpzb25lZGl0b3JcIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJmaWx0ZXJcIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJpY29uXCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiaW5wdXRcIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJsb2FkZXJcIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJwYWdlclwiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcInBvcHVwXCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wic2VsZWN0b3JcIl07IH0oKSk7Il0sInNvdXJjZVJvb3QiOiIifQ==