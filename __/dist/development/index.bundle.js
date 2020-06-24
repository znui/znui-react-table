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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vVGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vVGFibGVFZGl0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vVGFibGVQYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9jZWxsL0NoZWNrYm94LmpzIiwid2VicGFjazovLy8uL2NlbGwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vdGFibGUvQ29sZ3JvdXAuanMiLCJ3ZWJwYWNrOi8vLy4vdGFibGUvVEJvZHkuanMiLCJ3ZWJwYWNrOi8vLy4vdGFibGUvVENlbGwuanMiLCJ3ZWJwYWNrOi8vLy4vdGFibGUvVEZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi90YWJsZS9URm9vdC5qcyIsIndlYnBhY2s6Ly8vLi90YWJsZS9USGVhZC5qcyIsIndlYnBhY2s6Ly8vLi90YWJsZS9USGVhZFNvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vdGFibGUvVFJvdy5qcyIsIndlYnBhY2s6Ly8vLi90YWJsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianNvbmVkaXRvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpbHRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImljb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbnB1dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvYWRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhZ2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicG9wdXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZWxlY3RvclwiIl0sIm5hbWVzIjpbIlJlYWN0Iiwiem51aSIsInJlcXVpcmUiLCJ0YWJsZSIsInNlbGVjdG9yIiwibW9kdWxlIiwiZXhwb3J0cyIsImNyZWF0ZUNsYXNzIiwiZGlzcGxheU5hbWUiLCJnZXRJbml0aWFsU3RhdGUiLCJkYXRhIiwiY29sdW1ucyIsImNoZWNrZWRzIiwiX19zb3J0RnVuY3Rpb24iLCJuZXh0IiwicHJldiIsImtleSIsIl9zb3J0IiwicHJvcHMiLCJzb3J0RnVuY3Rpb24iLCJfX29uU29ydCIsInNvcnQiLCJzdGF0ZSIsImZvcmNlVXBkYXRlIiwiX19vbkZpbHRlciIsImZpbHRlciIsImNvbnNvbGUiLCJsb2ciLCJfX3Rib2R5RGF0YVJlbmRlciIsInRib2R5IiwiX190Ym9keUxvYWRpbmdSZW5kZXIiLCJfX29uVEhlYWRDb2x1bW5DaGFuZ2UiLCJpbmRleCIsIl9fdGJvZHlEYXRhTG9hZGVkIiwicmVzcG9uc2UiLCJfcmV0dXJuIiwib25EYXRhTG9hZGVkIiwic2V0U3RhdGUiLCJfX29uRGF0YUNyZWF0ZWQiLCJsaWZ5Y3ljbGUiLCJvbkRhdGFDcmVhdGVkIiwiX19yZW5kZXJUQm9keSIsIl9kYXRhIiwiX3Jlc3VsdCIsIm9uRGF0YUluaXRpYWwiLCJfX3JlbmRlciIsInJlYWN0IiwiY2xhc3NuYW1lIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJ3aWR0aCIsImZpeGVkIiwiY2VsbFBhZGRpbmciLCJjZWxsU3BhY2luZyIsImF0dHJzIiwiY2FwdGlvbiIsInJlbmRlciIsImNvbGdyb3VwIiwidGhlYWQiLCJ0ZmlsdGVyIiwidGZvb3QiLCJjaGlsZHJlblJlbmRlciIsImNoaWxkcmVuIiwiX19pbml0Q2hlY2tib3giLCJfY2hlY2tib3giLCJoZWFkIiwiYXJndiIsIl90YWJsZSIsImp1c3RpZnlDb250ZW50IiwibGVuZ3RoIiwiZXZlbnQiLCJjaGVja2VkIiwic2xpY2UiLCJvbkNoZWNrYm94Q2hhbmdlIiwiYmluZCIsImJvZHkiLCJpbmRleE9mIiwiY2hlY2tib3giLCJzdG9wUHJvcGFnYXRpb24iLCJzcGxpY2UiLCJwdXNoIiwiX3ZhbHVlIiwiem4iLCJ0eXBlIiwiZXh0ZW5kIiwidW5zaGlmdCIsIl9fY29sdW1uc0xvYWRlZCIsIl90ZW1wIiwiX2NvbHVtbkl0ZXJhdG9yIiwiY29sdW1uSXRlcmF0b3IiLCJfY29sdW1ucyIsIm1hcCIsImNvbHVtbiIsImRlZXBBc3NpZ24iLCJvbkNvbHVtbnNMb2FkZWQiLCJUYWJsZSIsImlucHV0IiwiX19jZWxsQ2hhbmdlIiwidGNlbGwiLCJuYW1lIiwidmFsdWUiLCJ0cm93IiwiX19jb2x1bW5Cb2R5UmVuZGVyIiwiX19jb2x1bW5JdGVyYXRvciIsInBhZ2VyIiwiY291bnQiLCJjdXJyZW50IiwidG90YWwiLCJwYWdlSW5kZXgiLCJfX2hhbmRsZVBhZ2VDaGFuZ2VkIiwibmV3UGFnZSIsIm9uUGFnZUNoYW5nZWQiLCJzZXRQYWdlSW5kZXgiLCJyZWZyZXNoIiwiX19yZW5kZXJQYWdlciIsIl9jb2x1bW5TaXplIiwiX3N0YXRlIiwiX3BhZ2VyUHJvcHMiLCJfQ29tcG9uZW50IiwiUGFnZXIiLCJpcyIsInBhdGgiLCJ3aW5kb3ciLCJfZWxlbWVudCIsImNyZWF0ZVJlYWN0RWxlbWVudCIsInBhZ2VyUmVuZGVyIiwiX19vbkRhdGFJbml0aWFsIiwiX21ldGhvZCIsIm1ldGhvZCIsIl9wYXJhbXMiLCJfa2V5TWFwcyIsInBhZ2VTaXplIiwia2V5TWFwcyIsInBhcmFtcyIsIl9fb25EYXRhTG9hZGVkIiwiTWF0aCIsImNlaWwiLCJDaGVja2JveCIsIl9fb25DaGVja2JveENoYW5nZSIsIl9fb25IZWFkQ2hhbmdlIiwiX19vbkJvZHlDaGFuZ2UiLCJjZWxsIiwiVGFibGVFZGl0b3IiLCJUYWJsZVBhZ2VyIiwiaXRlbSIsIlRSb3ciLCJsb2FkZXIiLCJhY3RpdmUiLCJsb2FkaW5nIiwiX19yZW5kZXJMb2FkaW5nIiwibG9hZGluZ1JlbmRlciIsIl9sb2FkaW5nIiwiX19yZW5kZXJFbXB0eSIsImVtcHR5UmVuZGVyIiwiX2VtcHR5IiwiZW1wdHkiLCJfX29uUm93Q2xpY2siLCJvblJvd0NsaWNrIiwiX19vbkNlbGxDbGljayIsIm9uQ2VsbENsaWNrIiwiX19yZW5kZXJSb3ciLCJlYWNoUm93RGF0YSIsInJvd1JlbmRlciIsInJvd0luZGV4Iiwicm93IiwiY2VsbFJlbmRlciIsIl9fcmVuZGVyRGF0YSIsIlJlYWN0RE9NIiwiZGlzYWJsZWQiLCJfX3JlbmRlckNlbGxDb250ZW50IiwiX3JlbmRlciIsImNlbGxJbmRleCIsIl9fY2VsbENsaWNrIiwidGQiLCJmaW5kRE9NTm9kZSIsIm9uQ2xpY2siLCJfX29uRmlsdGVyQ2hhbmdlIiwib3B0Iiwib25GaWx0ZXIiLCJfX29uRmlsdGVyQ2FuY2VsIiwiX19yZW5kZXJDZWxsIiwiX2NvbnRlbnQiLCJfY2VsbCIsIl9yb3ciLCJfX3JlbmRlckNoaWxkcmVuIiwiZm9vdCIsIlRIZWFkU29ydCIsInBvcHVwIiwiU1ZHSWNvbiIsImpzb25lZGl0b3IiLCJfX29uQ29sdW1uU29ydCIsIm9uU29ydCIsIl9fb25Db2x1bW5FZGl0b3JDaGFuZ2UiLCJjaGlsZCIsInJvb3QiLCJfcm9vdCIsIm9uQ29sdW1uQ2hhbmdlIiwiX19pY29uQ2xpY2tSZW5kZXIiLCJwYWRkaW5nIiwibWF4SGVpZ2h0Iiwib3ZlcmZsb3ciLCJsYWJlbCIsImVkaXRhYmxlIiwiY2xvc2VhYmxlIiwiX19pY29uQ2xpY2siLCJUQ2VsbCIsIl9fZ2V0VGFyZ2V0VEQiLCJ0YXJnZXQiLCJ0YWdOYW1lIiwicGFyZW50Tm9kZSIsIl90ZCIsIl90ciIsInRyIiwiX19jZWxsUmVuZGVyIiwiX3Byb3BzIiwiQ29sZ3JvdXAiLCJURmlsdGVyIiwiVEJvZHkiLCJURm9vdCIsIlRIZWFkIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtR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YUFBYSxnQ0FBZ0MsRUFBRSxJOzs7Ozs7Ozs7OztBQ0EvQyxhQUFhLGdDQUFnQyxFQUFFLEk7Ozs7Ozs7Ozs7O0FDQS9DLGFBQWEsbUNBQW1DLEVBQUUsSSIsImZpbGUiOiIuL2Rpc3QvZGV2ZWxvcG1lbnQvaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC5qc1wiKTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciB0YWJsZSA9IHJlcXVpcmUoJy4vdGFibGUvaW5kZXgnKTtcbnZhciBzZWxlY3RvciA9IHJlcXVpcmUoJ3pudWktcmVhY3Qtc2VsZWN0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUlRhYmxlJyxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0ZGF0YTogbnVsbCwgXG5cdFx0XHRjb2x1bW5zOiBbXSxcblx0XHRcdGNoZWNrZWRzOiBbXVxuXHRcdH07XG5cdH0sXG5cdF9fc29ydEZ1bmN0aW9uOiBmdW5jdGlvbiAobmV4dCwgcHJldiwga2V5LCBfc29ydCl7XG5cdFx0aWYodGhpcy5wcm9wcy5zb3J0RnVuY3Rpb24pIHtcblx0XHRcdHJldHVybiB0aGlzLnByb3BzLnNvcnRGdW5jdGlvbihuZXh0LCBwcmV2LCBrZXksIF9zb3J0KTtcblx0XHR9XG5cdFx0aWYoX3NvcnQ9PSdkZXNjJyl7XG5cdFx0XHRpZihuZXh0W2tleV0gPiBwcmV2W2tleV0pe1xuXHRcdFx0XHRyZXR1cm4gMTtcblx0XHRcdH1lbHNlIGlmKG5leHRba2V5XSA9PSBwcmV2W2tleV0pe1xuXHRcdFx0XHRyZXR1cm4gMDtcblx0XHRcdH1lbHNlIGlmKG5leHRba2V5XSA8IHByZXZba2V5XSl7XG5cdFx0XHRcdHJldHVybiAtMTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoX3NvcnQ9PSdhc2MnKXtcblx0XHRcdGlmKG5leHRba2V5XSA8IHByZXZba2V5XSl7XG5cdFx0XHRcdHJldHVybiAxO1xuXHRcdFx0fWVsc2UgaWYobmV4dFtrZXldID09IHByZXZba2V5XSl7XG5cdFx0XHRcdHJldHVybiAwO1xuXHRcdFx0fWVsc2UgaWYobmV4dFtrZXldID4gcHJldltrZXldKXtcblx0XHRcdFx0cmV0dXJuIC0xO1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0X19vblNvcnQ6IGZ1bmN0aW9uIChzb3J0KXtcblx0XHR2YXIgX3NvcnQgPSBudWxsO1xuXHRcdGZvcih2YXIga2V5IGluIHNvcnQpe1xuXHRcdFx0X3NvcnQgPSBzb3J0W2tleV1cblx0XHRcdHRoaXMuc3RhdGUuZGF0YSA9IHRoaXMuc3RhdGUuZGF0YS5zb3J0KChuZXh0LCBwcmV2KSA9PiB0aGlzLl9fc29ydEZ1bmN0aW9uKG5leHQsIHByZXYsIGtleSwgX3NvcnQpKTtcblx0XHR9XG5cblx0XHR0aGlzLmZvcmNlVXBkYXRlKCk7XG5cdH0sXG5cdF9fb25GaWx0ZXI6IGZ1bmN0aW9uIChmaWx0ZXIpe1xuXHRcdGNvbnNvbGUubG9nKGZpbHRlciwgdGhpcy5zdGF0ZS5kYXRhKTtcblx0fSxcblx0X190Ym9keURhdGFSZW5kZXI6IGZ1bmN0aW9uIChjb2x1bW5zKXtcblx0XHRyZXR1cm4gPHRhYmxlLlRCb2R5IHsuLi50aGlzLnByb3BzLnRib2R5fSBjb2x1bW5zPXtjb2x1bW5zfSBkYXRhPXt0aGlzLnN0YXRlLmRhdGF9IHRhYmxlPXt0aGlzfSAvPjtcblx0fSxcblx0X190Ym9keUxvYWRpbmdSZW5kZXI6IGZ1bmN0aW9uIChjb2x1bW5zKXtcblx0XHRyZXR1cm4gPHRhYmxlLlRCb2R5IHsuLi50aGlzLnByb3BzLnRib2R5fSBjb2x1bW5zPXtjb2x1bW5zfSBsb2FkaW5nPXt0cnVlfSB0YWJsZT17dGhpc30gLz47XG5cdH0sXG5cdF9fb25USGVhZENvbHVtbkNoYW5nZTogZnVuY3Rpb24gKGRhdGEsIGluZGV4KXtcblx0XHRpZih0aGlzLnN0YXRlLmNvbHVtbnMpe1xuXHRcdFx0dGhpcy5zdGF0ZS5jb2x1bW5zW2luZGV4XSA9IGRhdGE7XG5cdFx0XHR0aGlzLmZvcmNlVXBkYXRlKCk7XG5cdFx0fVxuXHR9LFxuXHRfX3Rib2R5RGF0YUxvYWRlZDogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLm9uRGF0YUxvYWRlZCAmJiB0aGlzLnByb3BzLm9uRGF0YUxvYWRlZChyZXNwb25zZSwgdGhpcyk7XG5cdFx0aWYoX3JldHVybiAhPT0gZmFsc2Upe1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGRhdGE6IHJlc3BvbnNlIH0pO1xuXHRcdH1cblx0fSxcblx0X19vbkRhdGFDcmVhdGVkOiBmdW5jdGlvbiAoZGF0YSwgbGlmeWN5Y2xlKXtcblx0XHR0aGlzLmRhdGEgPSBkYXRhO1xuXHRcdHRoaXMucHJvcHMub25EYXRhQ3JlYXRlZCAmJiB0aGlzLnByb3BzLm9uRGF0YUNyZWF0ZWQoZGF0YSwgdGhpcyk7XG5cdH0sXG5cdF9fcmVuZGVyVEJvZHk6IGZ1bmN0aW9uIChjb2x1bW5zKXtcblx0XHR2YXIgX2RhdGEgPSB0aGlzLnByb3BzLmRhdGEgfHwgdGhpcy5wcm9wcy50Ym9keS5kYXRhO1xuXHRcdHZhciBfcmVzdWx0ID0gdGhpcy5wcm9wcy5vbkRhdGFJbml0aWFsICYmIHRoaXMucHJvcHMub25EYXRhSW5pdGlhbChfZGF0YSwgdGhpcyk7XG5cdFx0aWYoX3Jlc3VsdCl7XG5cdFx0XHRfZGF0YSA9IF9yZXN1bHQ7XG5cdFx0fVxuXHRcdHJldHVybiA8em51aS5yZWFjdC5EYXRhTGlmZWN5Y2xlIGRhdGE9e19kYXRhfSBcblx0XHRcdFx0XHRyZW5kZXI9eygpPT50aGlzLl9fdGJvZHlEYXRhUmVuZGVyKGNvbHVtbnMpfSBcblx0XHRcdFx0XHRsb2FkaW5nUmVuZGVyPXsoKT0+dGhpcy5fX3Rib2R5TG9hZGluZ1JlbmRlcihjb2x1bW5zKX1cblx0XHRcdFx0XHRvbkRhdGFDcmVhdGVkPXt0aGlzLl9fb25EYXRhQ3JlYXRlZH1cblx0XHRcdFx0XHRvbkZpbmlzaGVkPXt0aGlzLl9fdGJvZHlEYXRhTG9hZGVkfSAvPjtcblx0fSxcblx0X19yZW5kZXI6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBjb2x1bW5zID0gdGhpcy5zdGF0ZS5jb2x1bW5zO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8dGFibGUgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXRhYmxlXCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gXG5cdFx0XHRcdHN0eWxlPXt6bnVpLnJlYWN0LnN0eWxlKHRoaXMucHJvcHMuc3R5bGUsIHsgd2lkdGg6IHRoaXMucHJvcHMud2lkdGggfSl9IFxuXHRcdFx0XHRkYXRhLWZpeGVkPXt0aGlzLnByb3BzLmZpeGVkfSBcdFxuXHRcdFx0XHRjZWxsUGFkZGluZz17dGhpcy5wcm9wcy5jZWxsUGFkZGluZyB8fCAwfSBcblx0XHRcdFx0Y2VsbFNwYWNpbmc9e3RoaXMucHJvcHMuY2VsbFNwYWNpbmcgfHwgMH0gey4uLnRoaXMucHJvcHMuYXR0cnN9PlxuXHRcdFx0XHR7ICEhdGhpcy5wcm9wcy5jYXB0aW9uICYmIDxjYXB0aW9uIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jYXB0aW9uLmNsYXNzTmFtZX0gc3R5bGU9e3RoaXMucHJvcHMuY2FwdGlvbi5zdHlsZX0+e3RoaXMucHJvcHMuY2FwdGlvbi5yZW5kZXJ9PC9jYXB0aW9uPiB9XG5cdFx0XHRcdHsgISF0aGlzLnByb3BzLmNvbGdyb3VwICYmIDx0YWJsZS5Db2xncm91cCBjb2x1bW5zPXtjb2x1bW5zfSB7Li4udGhpcy5wcm9wcy5jb2xncm91cH0gLz4gfVxuXHRcdFx0XHR7ICEhdGhpcy5wcm9wcy50aGVhZCAmJiA8dGFibGUuVEhlYWQgb25Tb3J0PXt0aGlzLl9fb25Tb3J0fSAgb25Db2x1bW5DaGFuZ2U9e3RoaXMuX19vblRIZWFkQ29sdW1uQ2hhbmdlfSBjb2x1bW5zPXtjb2x1bW5zfSB7Li4udGhpcy5wcm9wcy50aGVhZH0gdGFibGU9e3RoaXN9IC8+fVxuXHRcdFx0XHR7ICEhdGhpcy5wcm9wcy50ZmlsdGVyICYmIDx0YWJsZS5URmlsdGVyIG9uRmlsdGVyPXt0aGlzLl9fb25GaWx0ZXJ9IGNvbHVtbnM9e2NvbHVtbnN9IHsuLi50aGlzLnByb3BzLmZpbHRlcn0gdGFibGU9e3RoaXN9IC8+fVxuXHRcdFx0XHR7ICh0aGlzLnByb3BzLnRib2R5IHx8IHRoaXMucHJvcHMuZGF0YSkgJiYgdGhpcy5fX3JlbmRlclRCb2R5KGNvbHVtbnMpIH1cblx0XHRcdFx0eyAhIXRoaXMucHJvcHMudGZvb3QgJiYgPHRhYmxlLlRGb290IGNvbHVtbnM9e2NvbHVtbnN9IHsuLi50aGlzLnByb3BzLnRmb290fSB0YWJsZT17dGhpc30gLz59XG5cdFx0XHRcdHsgdGhpcy5wcm9wcy5jaGlsZHJlblJlbmRlciAmJiB0aGlzLnByb3BzLmNoaWxkcmVuUmVuZGVyKGNvbHVtbnMsIHRoaXMpIH1cblx0XHRcdFx0eyB0aGlzLnByb3BzLmNoaWxkcmVuIH1cblx0XHRcdDwvdGFibGU+XG5cdFx0KTtcblx0fSxcblx0X19pbml0Q2hlY2tib3g6IGZ1bmN0aW9uIChjb2x1bW5zKXtcblx0XHR2YXIgX2NoZWNrYm94ID0ge1xuXHRcdFx0XHR3aWR0aDogNjAsXG5cdFx0XHRcdGhlYWQ6IGZ1bmN0aW9uIChhcmd2KXtcblx0XHRcdFx0XHR2YXIgX3RhYmxlID0gYXJndi50aGVhZC5wcm9wcy50YWJsZTtcblx0XHRcdFx0XHRyZXR1cm4gPHNlbGVjdG9yLkNoZWNrYm94XG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19XG5cdFx0XHRcdFx0XHRcdFx0a2V5PXt0aGlzLnN0YXRlLmNoZWNrZWRzLmxlbmd0aH1cblx0XHRcdFx0XHRcdFx0XHR0ZXh0PXsnKCcgKyBfdGFibGUuc3RhdGUuY2hlY2tlZHMubGVuZ3RoICsnKSd9XG5cdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17ISFfdGFibGUuc3RhdGUuZGF0YS5sZW5ndGggJiYgX3RhYmxlLnN0YXRlLmNoZWNrZWRzLmxlbmd0aCA9PT0gX3RhYmxlLnN0YXRlLmRhdGEubGVuZ3RofVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZXZlbnQpPT57XG5cdFx0XHRcdFx0XHRcdFx0XHRpZihldmVudC5jaGVja2VkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc3RhdGUuY2hlY2tlZHMgPSB0aGlzLnN0YXRlLmRhdGEuc2xpY2UoMCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zdGF0ZS5jaGVja2VkcyA9IFtdO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5mb3JjZVVwZGF0ZSgpO1xuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5vbkNoZWNrYm94Q2hhbmdlICYmIHRoaXMucHJvcHMub25DaGVja2JveENoYW5nZSh0aGlzLnN0YXRlLmNoZWNrZWRzLCB0aGlzKTtcblx0XHRcdFx0XHRcdFx0XHR9fSAvPjtcblx0XHRcdFx0fS5iaW5kKHRoaXMpLFxuXHRcdFx0XHRib2R5OiBmdW5jdGlvbiAoYXJndil7XG5cdFx0XHRcdFx0dmFyIF9kYXRhID0gYXJndi5kYXRhO1xuXHRcdFx0XHRcdHJldHVybiA8c2VsZWN0b3IuVW5jb250cm9sQ2hlY2tib3ggXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19XG5cdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17dGhpcy5zdGF0ZS5jaGVja2Vkcy5pbmRleE9mKF9kYXRhKSAhPT0gLTF9XG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KGV2ZW50LCBjaGVja2JveCk9Pntcblx0XHRcdFx0XHRcdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYoY2hlY2tib3gucHJvcHMuY2hlY2tlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnN0YXRlLmNoZWNrZWRzLnNwbGljZSh0aGlzLnN0YXRlLmNoZWNrZWRzLmluZGV4T2YoX2RhdGEpLCAxKTsgXG5cdFx0XHRcdFx0XHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zdGF0ZS5jaGVja2Vkcy5wdXNoKF9kYXRhKTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuZm9yY2VVcGRhdGUoKTtcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMub25DaGVja2JveENoYW5nZSAmJiB0aGlzLnByb3BzLm9uQ2hlY2tib3hDaGFuZ2UodGhpcy5zdGF0ZS5jaGVja2VkcywgdGhpcyk7XG5cdFx0XHRcdFx0XHRcdFx0fX0gLz47XG5cdFx0XHRcdH0uYmluZCh0aGlzKVxuXHRcdFx0fSxcblx0XHRcdF92YWx1ZSA9IHRoaXMucHJvcHMuY2hlY2tib3g7XG5cdFx0c3dpdGNoKHpuLnR5cGUoX3ZhbHVlKSkge1xuXHRcdFx0Y2FzZSAnb2JqZWN0Jzpcblx0XHRcdFx0X2NoZWNrYm94ID0gem4uZXh0ZW5kKHt9LCBfdmFsdWUpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ251bWJlcic6XG5cdFx0XHRcdF9jaGVja2JveC53aWR0aCA9IF92YWx1ZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdGlmKF92YWx1ZSkge1xuXHRcdFx0Y29sdW1ucyA9IGNvbHVtbnMudW5zaGlmdChfY2hlY2tib3gpO1xuXHRcdH1cblx0fSxcblx0X19jb2x1bW5zTG9hZGVkOiBmdW5jdGlvbiAoY29sdW1ucyl7XG5cdFx0dmFyIF90ZW1wID0gbnVsbCxcblx0XHRcdF9yZXN1bHQgPSBudWxsLFxuXHRcdFx0X2NvbHVtbkl0ZXJhdG9yID0gdGhpcy5wcm9wcy5jb2x1bW5JdGVyYXRvcixcblx0XHRcdF9jb2x1bW5zID0gY29sdW1ucy5tYXAoZnVuY3Rpb24gKGNvbHVtbil7XG5cdFx0XHRcdF90ZW1wID0gem4uZGVlcEFzc2lnbih7fSwgY29sdW1uKTtcblx0XHRcdFx0X3Jlc3VsdCA9IF9jb2x1bW5JdGVyYXRvciAmJiBfY29sdW1uSXRlcmF0b3IoX3RlbXAsIHRoaXMpO1xuXHRcdFx0XHRpZihfcmVzdWx0ID09PSBmYWxzZSkgcmV0dXJuIG51bGw7XG5cdFx0XHRcdGlmKHR5cGVvZiBfcmVzdWx0ID09ICdvYmplY3QnKSByZXR1cm4gX3Jlc3VsdDtcblxuXHRcdFx0XHRyZXR1cm4gX3RlbXA7XG5cdFx0XHR9LmJpbmQodGhpcykpO1xuXHRcdHRoaXMuX19pbml0Q2hlY2tib3goX2NvbHVtbnMpO1xuXHRcdHRoaXMucHJvcHMub25Db2x1bW5zTG9hZGVkICYmIHRoaXMucHJvcHMub25Db2x1bW5zTG9hZGVkKGNvbHVtbnMpO1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBjb2x1bW5zOiBfY29sdW1ucyB9KTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiA8em51aS5yZWFjdC5EYXRhTGlmZWN5Y2xlIG9uRmluaXNoZWQ9e3RoaXMuX19jb2x1bW5zTG9hZGVkfSBkYXRhPXt0aGlzLnByb3BzLmNvbHVtbnN9IHJlbmRlcj17dGhpcy5fX3JlbmRlcn0gLz5cblx0fVxufSk7IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFRhYmxlID0gcmVxdWlyZSgnLi9UYWJsZScpO1xudmFyIGlucHV0ID0gcmVxdWlyZSgnem51aS1yZWFjdC1pbnB1dCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSVGFibGVFZGl0b3InLFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRjb2x1bW5zOiBbXVxuXHRcdH07XG5cdH0sXG5cdF9fY2VsbENoYW5nZTogZnVuY3Rpb24gKGV2ZW50LCBhcmd2KXtcblx0XHQvL2NvbnNvbGUubG9nKGV2ZW50KTtcblx0XHQvL2NvbnNvbGUubG9nKGFyZ3YpO1xuXHRcdGFyZ3YuZGF0YVthcmd2LnRjZWxsLnByb3BzLm5hbWVdID0gZXZlbnQudmFsdWU7XG5cdFx0YXJndi50cm93LmZvcmNlVXBkYXRlKCk7XG5cdH0sXG5cdF9fY29sdW1uQm9keVJlbmRlcjogZnVuY3Rpb24gKGFyZ3Ype1xuXHRcdHJldHVybiA8aW5wdXQuSW5wdXQga2V5PXthcmd2LnZhbHVlfSB2YWx1ZT17YXJndi52YWx1ZX0gb25FbnRlcj17KGV2ZW50KT0+dGhpcy5fX2NlbGxDaGFuZ2UoZXZlbnQsIGFyZ3YpfSAvPjtcblx0fSxcblx0X19jb2x1bW5JdGVyYXRvcjogZnVuY3Rpb24gKGNvbHVtbiwgdGFibGUpe1xuXHRcdGlmKCFjb2x1bW4uYm9keSkge1xuXHRcdFx0Y29sdW1uLmJvZHkgPSB0aGlzLl9fY29sdW1uQm9keVJlbmRlcjtcblx0XHR9XG5cblx0XHRyZXR1cm4gY29sdW1uO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxUYWJsZSB7Li4udGhpcy5wcm9wc30gY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItdGFibGUtZWRpdG9yJywgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBjb2x1bW5JdGVyYXRvcj17dGhpcy5fX2NvbHVtbkl0ZXJhdG9yfSAvPlxuXHRcdClcblx0fVxufSk7IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFRhYmxlID0gcmVxdWlyZSgnLi9UYWJsZScpO1xudmFyIHBhZ2VyID0gcmVxdWlyZSgnem51aS1yZWFjdC1wYWdlcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSVGFibGVQYWdlcicsXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNvdW50OiAwLFxuXHRcdFx0Y3VycmVudDogMSxcblx0XHRcdGRhdGE6IFtdLFxuXHRcdFx0dG90YWw6IDAsXG5cdFx0XHRwYWdlSW5kZXg6IHRoaXMucHJvcHMucGFnZUluZGV4IHx8IDFcblx0XHR9O1xuXHR9LFxuXHRfX2hhbmRsZVBhZ2VDaGFuZ2VkOiBmdW5jdGlvbiAobmV3UGFnZSl7XG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLm9uUGFnZUNoYW5nZWQgJiYgdGhpcy5wcm9wcy5vblBhZ2VDaGFuZ2VkKG5ld1BhZ2UsIHRoaXMpO1xuXHRcdGlmKF9yZXR1cm4gIT09IGZhbHNlKSB7XG5cdFx0XHR0aGlzLnNldFBhZ2VJbmRleChuZXdQYWdlKTtcblx0XHR9XG5cdH0sXG5cdHNldFBhZ2VJbmRleDogZnVuY3Rpb24gKHBhZ2VJbmRleCl7XG5cdFx0aWYodGhpcy5kYXRhKXtcblx0XHRcdHRoaXMuc3RhdGUucGFnZUluZGV4ID0gcGFnZUluZGV4O1xuXHRcdFx0dGhpcy5mb3JjZVVwZGF0ZSgpO1xuXHRcdFx0dGhpcy5kYXRhLnJlZnJlc2goKTtcblx0XHR9XG5cdH0sXG5cdF9fcmVuZGVyUGFnZXI6IGZ1bmN0aW9uIChjb2x1bW5zLCB0YWJsZSl7XG5cdFx0dmFyIF9jb2x1bW5TaXplID0gY29sdW1ucy5sZW5ndGg7XG5cdFx0aWYoIV9jb2x1bW5TaXplKXtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHR2YXIgX3N0YXRlID0gdGhpcy5zdGF0ZSxcblx0XHRcdF9wYWdlclByb3BzID0ge1xuXHRcdFx0XHR0b3RhbDogX3N0YXRlLnRvdGFsLFxuXHRcdFx0XHRjb3VudDogX3N0YXRlLmNvdW50LFxuXHRcdFx0XHRjdXJyZW50OiBfc3RhdGUuY3VycmVudCxcblx0XHRcdFx0b25QYWdlQ2hhbmdlZDogdGhpcy5fX2hhbmRsZVBhZ2VDaGFuZ2VkXG5cdFx0XHR9LFxuXHRcdFx0X0NvbXBvbmVudCA9IHRoaXMucHJvcHMucGFnZXIgfHwgcGFnZXIuUGFnZXI7XG5cdFx0aWYoem4uaXMoX0NvbXBvbmVudCwgJ3N0cmluZycpKXtcblx0XHRcdF9Db21wb25lbnQgPSB6bi5wYXRoKHdpbmRvdywgX0NvbXBvbmVudCk7XG5cdFx0fVxuXG5cdFx0dmFyIF9lbGVtZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQodGhpcy5wcm9wcy5wYWdlclJlbmRlciwgX3BhZ2VyUHJvcHMpO1xuXG5cdFx0aWYoIV9lbGVtZW50KXtcblx0XHQgXHRfZWxlbWVudCA9IDxfQ29tcG9uZW50IHsuLi5fcGFnZXJQcm9wc30gLz47XG5cdFx0fVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDx0Zm9vdCBjbGFzc05hbWU9XCJ0YWJsZS1wYWdlclwiPlxuXHRcdFx0XHQ8dHIgY2xhc3NOYW1lPVwicGFnZXItcm93XCI+XG5cdFx0XHRcdFx0PHRkIGNvbFNwYW49e19jb2x1bW5TaXplfT57X2VsZW1lbnR9PC90ZD5cblx0XHRcdFx0PC90cj5cblx0XHRcdDwvdGZvb3Q+XG5cdFx0KTtcblx0fSxcblx0X19vbkRhdGFJbml0aWFsOiBmdW5jdGlvbiAoZGF0YSl7XG5cdFx0dmFyIF9tZXRob2QgPSBkYXRhLm1ldGhvZHx8J3Bvc3QnLFxuXHRcdFx0X3BhcmFtcyA9IHt9LFxuXHRcdFx0X2tleU1hcHMgPSB6bi5kZWVwQXNzaWduKHtcblx0XHRcdFx0dG90YWw6IFwidG90YWxcIixcblx0XHRcdFx0cGFnZUluZGV4OiAncGFnZUluZGV4Jyxcblx0XHRcdFx0cGFnZVNpemU6ICdwYWdlU2l6ZScsXG5cdFx0XHRcdGRhdGE6ICdkYXRhJ1xuXHRcdFx0fSwgdGhpcy5wcm9wcy5rZXlNYXBzKTtcblxuXHRcdF9wYXJhbXNbX2tleU1hcHMucGFnZUluZGV4XSA9IHRoaXMuc3RhdGUucGFnZUluZGV4IHx8IDE7XG5cdFx0X3BhcmFtc1tfa2V5TWFwcy5wYWdlU2l6ZV0gPSB0aGlzLnByb3BzLnBhZ2VTaXplIHx8IDEwO1xuXHRcdGlmKF9tZXRob2QgPT0gJ2dldCcpe1xuXHRcdFx0ZGF0YSA9IHpuLmRlZXBBc3NpZ24oZGF0YSwge1xuXHRcdFx0XHRwYXJhbXM6IF9wYXJhbXNcblx0XHRcdH0pO1xuXHRcdH1lbHNle1xuXHRcdFx0ZGF0YSA9IHpuLmRlZXBBc3NpZ24oZGF0YSwge1xuXHRcdFx0XHRkYXRhOiBfcGFyYW1zXG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0XG5cdFx0cmV0dXJuIHRoaXMuc3RhdGUua2V5TWFwcyA9IF9rZXlNYXBzLCBkYXRhO1xuXHR9LFxuXHRfX29uRGF0YUNyZWF0ZWQ6IGZ1bmN0aW9uIChkYXRhLCB0YWJsZSl7XG5cdFx0dGhpcy5kYXRhID0gZGF0YTtcblx0XHR0aGlzLnByb3BzLm9uRGF0YUNyZWF0ZWQgJiYgdGhpcy5wcm9wcy5vbkRhdGFDcmVhdGVkKGRhdGEsIHRhYmxlLCB0aGlzKTtcblx0fSxcblx0X19vbkRhdGFMb2FkZWQ6IGZ1bmN0aW9uIChyZXNwb25zZSwgdGFibGUpe1xuXHRcdHZhciBfZGF0YSA9IHJlc3BvbnNlLmRhdGE7XG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLm9uRGF0YUxvYWRlZCAmJiB0aGlzLnByb3BzLm9uRGF0YUxvYWRlZChfZGF0YSwgdGFibGUsIHRoaXMpO1xuXHRcdGlmKF9yZXR1cm4gIT09IGZhbHNlKXtcblx0XHRcdHRhYmxlLnNldFN0YXRlKHtcblx0XHRcdFx0ZGF0YTogX2RhdGFbdGhpcy5zdGF0ZS5rZXlNYXBzLmRhdGFdXG5cdFx0XHR9KTtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHR0b3RhbDogTWF0aC5jZWlsKF9kYXRhW3RoaXMuc3RhdGUua2V5TWFwcy50b3RhbF0vdGhpcy5wcm9wcy5wYWdlU2l6ZSksXG5cdFx0XHRcdGNvdW50OiBfZGF0YVt0aGlzLnN0YXRlLmtleU1hcHMudG90YWxdLFxuXHRcdFx0XHRjdXJyZW50OiBfZGF0YVt0aGlzLnN0YXRlLmtleU1hcHMucGFnZUluZGV4XSxcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8VGFibGUgey4uLnRoaXMucHJvcHN9IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLXRhYmxlLXBhZ2VyJywgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBcblx0XHRcdFx0Y2hpbGRyZW5SZW5kZXI9e3RoaXMuX19yZW5kZXJQYWdlcn1cblx0XHRcdFx0b25EYXRhSW5pdGlhbD17dGhpcy5fX29uRGF0YUluaXRpYWx9XG5cdFx0XHRcdG9uRGF0YUNyZWF0ZWQ9e3RoaXMuX19vbkRhdGFDcmVhdGVkfVxuXHRcdFx0XHRvbkRhdGFMb2FkZWQ9e3RoaXMuX19vbkRhdGFMb2FkZWR9IC8+XG5cdFx0KTtcblx0fVxufSk7IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIENoZWNrYm94ID0gcmVxdWlyZSgnem51aS1yZWFjdC1zZWxlY3RvcicpLkNoZWNrYm94O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSVENlbGxDaGVja2JveCcsXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRjaGVja2VkOiB0aGlzLnByb3BzLmNoZWNrZWQgfHwgZmFsc2Vcblx0XHR9XG5cdH0sXG5cdF9fb25DaGVja2JveENoYW5nZTogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRpZih0aGlzLnByb3BzLnRoZWFkKSB7XG5cdFx0XHR0aGlzLl9fb25IZWFkQ2hhbmdlKGV2ZW50KTtcblx0XHR9ZWxzZSBpZih0aGlzLnByb3BzLnRib2R5KSB7XG5cdFx0XHR0aGlzLl9fb25Cb2R5Q2hhbmdlKGV2ZW50KTtcblx0XHR9XG5cdH0sXG5cdF9fb25IZWFkQ2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdGNvbnNvbGUubG9nKGV2ZW50LmNoZWNrZWQsIHRoaXMucHJvcHMpO1xuXHR9LFxuXHRfX29uQm9keUNoYW5nZTogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHRjb25zb2xlLmxvZyhldmVudC5jaGVja2VkLCB0aGlzLnByb3BzKTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInpyLXRhYmxlLWNlbGwtY2hlY2tib3hcIj48Q2hlY2tib3ggY2hlY2tlZD17dHJ1ZX0gb25DaGFuZ2U9e3RoaXMuX19vbkNoZWNrYm94Q2hhbmdlfS8+PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBDaGVja2JveDogcmVxdWlyZSgnLi9DaGVja2JveCcpLFxuICAgIC8vQnV0dG9uczogcmVxdWlyZSgnLi9CdXR0b25zJyksXG4gICAgLy9JbnB1dDogcmVxdWlyZSgnLi9JbnB1dCcpLFxuICAgIC8vQ2FsY3VsYXRvcjogcmVxdWlyZSgnLi9DYWxjdWxhdG9yJylcbn07IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgdGFibGU6IHJlcXVpcmUoJy4vdGFibGUvaW5kZXgnKSxcbiAgICBjZWxsOiByZXF1aXJlKCcuL2NlbGwvaW5kZXgnKSxcbiAgICBUYWJsZTogcmVxdWlyZSgnLi9UYWJsZScpLFxuICAgIFRhYmxlRWRpdG9yOiByZXF1aXJlKCcuL1RhYmxlRWRpdG9yJyksXG4gICAgVGFibGVQYWdlcjogcmVxdWlyZSgnLi9UYWJsZVBhZ2VyJylcbn07IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSVGFibGVDb2xncm91cCcsXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGNvbGdyb3VwPlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0KHRoaXMucHJvcHMuY29sdW1uc3x8W10pLm1hcChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcblx0XHRcdFx0XHRcdHJldHVybiA8Y29sIGtleT17aW5kZXh9IHN0eWxlPXt7IHdpZHRoOiBpdGVtLndpZHRoIH19IC8+O1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdDwvY29sZ3JvdXA+XG5cdFx0KTtcblx0fVxufSk7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgVFJvdyA9IHJlcXVpcmUoJy4vVFJvdycpO1xudmFyIGxvYWRlciA9IHJlcXVpcmUoJ3pudWktcmVhY3QtbG9hZGVyJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJUQm9keScsXG5cdGdldEluaXRpYWxTdGF0ZTpmdW5jdGlvbigpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRhY3RpdmU6IG51bGwsXG5cdFx0XHRjaGVja2VkczogW10sXG5cdFx0XHRjbGFzc05hbWU6ICcnLFxuXHRcdFx0c3R5bGU6IHt9LFxuXHRcdFx0bG9hZGluZzogZmFsc2Vcblx0XHR9XG5cdH0sXG5cdF9fcmVuZGVyTG9hZGluZzogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF9lbGVtZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQodGhpcy5wcm9wcy5sb2FkaW5nUmVuZGVyLCB7XG5cdFx0XHR0Ym9keTogdGhpc1xuXHRcdH0pO1xuXG5cdFx0aWYoIV9lbGVtZW50KXtcblx0XHQgXHRfZWxlbWVudCA9IDxsb2FkZXIuRGF0YUxvYWRlciBsb2FkZXI9XCJ3YXZlXCIgdGl0bGU9eydMb2FkaW5nLi4uJ30gLz47XG5cdFx0fVxuXG5cdFx0dmFyIF9sb2FkaW5nID0gem4uZXh0ZW5kKHsgY2xhc3NOYW1lOiAnJywgc3R5bGU6IHt9IH0sIHRoaXMucHJvcHMubG9hZGluZyk7XG5cdFx0cmV0dXJuIDx0ciBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwidGJvZHktbG9hZGluZ1wiLCBfbG9hZGluZy5jbGFzc05hbWUpfSBzdHlsZT17X2xvYWRpbmcuc3R5bGV9PlxuXHRcdFx0PHRkIGNvbFNwYW49e3RoaXMucHJvcHMuY29sdW1ucy5sZW5ndGh9PntfZWxlbWVudH08L3RkPlxuXHRcdDwvdHI+O1xuXHR9LFxuXHRfX3JlbmRlckVtcHR5OiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX2VsZW1lbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudCh0aGlzLnByb3BzLmVtcHR5UmVuZGVyLCB7XG5cdFx0XHR0Ym9keTogdGhpc1xuXHRcdH0pO1xuXG5cdFx0aWYoIV9lbGVtZW50KXtcblx0XHQgXHRfZWxlbWVudCA9IDxkaXYgY2xhc3NOYW1lPVwiZW1wdHktY29udGVudFwiPk5vIERhdGEuPC9kaXY+O1xuXHRcdH1cblx0XHR2YXIgX2VtcHR5ID0gem4uZXh0ZW5kKHsgY2xhc3NOYW1lOiAnJywgc3R5bGU6IHt9IH0sIHRoaXMucHJvcHMuZW1wdHkpO1xuXHRcdHJldHVybiA8dHIgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInRib2R5LWVtcHR5XCIsIF9lbXB0eS5jbGFzc05hbWUpfSBzdHlsZT17X2VtcHR5LnN0eWxlfT5cblx0XHRcdDx0ZCBjb2xTcGFuPXt0aGlzLnByb3BzLmNvbHVtbnMubGVuZ3RofT57X2VsZW1lbnR9PC90ZD5cblx0XHQ8L3RyPjtcblx0fSxcblx0X19vblJvd0NsaWNrOiBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHR2YXIgX2RhdGEgPSBldmVudC5kYXRhO1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0YWN0aXZlOiBfZGF0YS50cm93LnByb3BzLmRhdGFcblx0XHR9KTtcblx0XHRldmVudC50Ym9keSA9IHRoaXM7XG5cdFx0dGhpcy5wcm9wcy5vblJvd0NsaWNrICYmIHRoaXMucHJvcHMub25Sb3dDbGljayhldmVudCk7XG5cdH0sXG5cdF9fb25DZWxsQ2xpY2s6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0ZXZlbnQudGJvZHkgPSB0aGlzO1xuXHRcdHRoaXMucHJvcHMub25DZWxsQ2xpY2sgJiYgdGhpcy5wcm9wcy5vbkNlbGxDbGljayhldmVudCk7XG5cdH0sXG5cdF9fcmVuZGVyUm93OiBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpe1xuXHRcdGlmKCF6bi5pcyhpdGVtLCAnb2JqZWN0JykpIHsgcmV0dXJuIG51bGw7fVxuXHRcdHZhciBfdGVtcCA9IHRoaXMucHJvcHMuZWFjaFJvd0RhdGEgJiYgdGhpcy5wcm9wcy5lYWNoUm93RGF0YShpdGVtLCBpbmRleCk7XG5cdFx0aWYoX3RlbXAgJiYgem4uaXMoX3RlbXAsICdvYmplY3QnKSl7XG5cdFx0XHRpdGVtID0gX3RlbXA7XG5cdFx0fVxuXHRcdHZhciBfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMucm93UmVuZGVyLCB7XG5cdFx0XHRkYXRhOiBpdGVtLFxuXHRcdFx0cm93SW5kZXg6IGluZGV4LFxuXHRcdFx0dGJvZHk6IHRoaXNcblx0XHR9KTtcblxuXHRcdGlmKF9lbGVtZW50KXtcblx0XHRcdHJldHVybiBfZWxlbWVudDtcblx0XHR9XG5cblx0XHRyZXR1cm4gPFRSb3cga2V5PXtpbmRleH0gey4uLnRoaXMucHJvcHMucm93fSBcblx0XHRcdFx0XHRjZWxsPXt0aGlzLnByb3BzLmNlbGx9XG5cdFx0XHRcdFx0Y2VsbFJlbmRlcj17dGhpcy5wcm9wcy5jZWxsUmVuZGVyfVxuXHRcdFx0XHRcdGNvbHVtbnM9e3RoaXMucHJvcHMuY29sdW1uc30gXG5cdFx0XHRcdFx0dGJvZHk9e3RoaXN9XG5cdFx0XHRcdFx0ZGF0YT17aXRlbX0gXG5cdFx0XHRcdFx0YWN0aXZlPXt0aGlzLnN0YXRlLmFjdGl2ZSA9PSBpdGVtfSBcblx0XHRcdFx0XHRjaGVja2VkPXt0aGlzLnN0YXRlLmNoZWNrZWRzLmluZGV4T2YoaXRlbSkgIT09IC0xfSBcblx0XHRcdFx0XHRvblJvd0NsaWNrPXt0aGlzLl9fb25Sb3dDbGlja31cblx0XHRcdFx0XHRvbkNlbGxDbGljaz17dGhpcy5fX29uQ2VsbENsaWNrfSAvPjtcblx0fSxcblx0X19yZW5kZXJEYXRhOiBmdW5jdGlvbiAoKXtcblx0XHRpZih0aGlzLnByb3BzLmRhdGEgPT0gbnVsbCB8fCAodGhpcy5wcm9wcy5kYXRhICYmICF0aGlzLnByb3BzLmRhdGEubGVuZ3RoKSl7XG5cdFx0XHRyZXR1cm4gdGhpcy5fX3JlbmRlckVtcHR5KCk7XG5cdFx0fVxuXHRcdHJldHVybiA8PlxuXHRcdFx0e1xuXHRcdFx0XHR0aGlzLnByb3BzLmRhdGEubWFwKHRoaXMuX19yZW5kZXJSb3cpXG5cdFx0XHR9XG5cdFx0PC8+O1xuXHR9LFxuXHRfX3JlbmRlcjogZnVuY3Rpb24gKCl7XG5cdFx0aWYodGhpcy5wcm9wcy5sb2FkaW5nIHx8IHRoaXMuc3RhdGUubG9hZGluZykge1xuXHRcdFx0cmV0dXJuIHRoaXMuX19yZW5kZXJMb2FkaW5nKCk7XG5cdFx0fWVsc2V7XG5cdFx0XHRyZXR1cm4gdGhpcy5fX3JlbmRlckRhdGEoKTtcblx0XHR9XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHRib2R5IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci10YWJsZS10Ym9keVwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSwgdGhpcy5zdGF0ZS5jbGFzc05hbWUpfSBzdHlsZT17em51aS5yZWFjdC5zdHlsZSh0aGlzLnByb3BzLnN0eWxlLCB0aGlzLnN0YXRlLnN0eWxlKX0+XG5cdFx0XHRcdHsgdGhpcy5fX3JlbmRlcigpIH1cblx0XHRcdDwvdGJvZHk+XG5cdFx0KTtcblx0fVxufSk7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUmVhY3RET00gPSB6bnVpLlJlYWN0RE9NIHx8IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSVENlbGwnLFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y2xhc3NOYW1lOiAnJyxcblx0XHRcdHN0eWxlOiB7fSxcblx0XHRcdGRpc2FibGVkOiB0aGlzLnByb3BzLmRpc2FibGVkLFxuXHRcdFx0Y2hlY2tlZDogdGhpcy5wcm9wcy5jaGVja2VkLFxuXHRcdFx0YWN0aXZlOiB0aGlzLnByb3BzLmFjdGl2ZVxuXHRcdH1cblx0fSxcblx0X19yZW5kZXJDZWxsQ29udGVudDogZnVuY3Rpb24gKCl7XG5cdFx0aWYodGhpcy5wcm9wcy5jaGlsZHJlbikge1xuXHRcdFx0cmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW47XG5cdFx0fVxuXHRcdFxuXHRcdHZhciBfdmFsdWUgPSBudWxsO1xuXHRcdGlmKHRoaXMucHJvcHMuZGF0YSAmJiB0aGlzLnByb3BzLm5hbWUpIHtcblx0XHRcdF92YWx1ZSA9IHRoaXMucHJvcHMuZGF0YVt0aGlzLnByb3BzLm5hbWVdO1xuXHRcdH1cblxuXHRcdHZhciBfcmVuZGVyID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQodGhpcy5wcm9wcy5yZW5kZXIgfHwgdGhpcy5wcm9wcy5ib2R5LCB7XG5cdFx0XHRjZWxsSW5kZXg6IHRoaXMucHJvcHMuY2VsbEluZGV4LCBcblx0XHRcdGNvbHVtbjogdGhpcy5wcm9wcy5jb2x1bW4sXG5cdFx0XHRkYXRhOiB0aGlzLnByb3BzLmRhdGEsXG5cdFx0XHR2YWx1ZTogX3ZhbHVlLFxuXHRcdFx0dGNlbGw6IHRoaXMsXG5cdFx0XHR0cm93OiB0aGlzLnByb3BzLnRyb3csXG5cdFx0XHR0Ym9keTogdGhpcy5wcm9wcy50Ym9keVxuXHRcdH0pO1xuXHRcdFxuXHRcdGlmKF9yZW5kZXIpe1xuXHRcdFx0cmV0dXJuIF9yZW5kZXI7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIF92YWx1ZTtcblx0fSxcblx0X19jZWxsQ2xpY2s6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0ZXZlbnQuZGF0YSA9IHtcblx0XHRcdHRkOiBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKSxcblx0XHRcdHRjZWxsOiB0aGlzXG5cdFx0fTtcblx0XHR0aGlzLnByb3BzLm9uQ2xpY2sgJiYgdGhpcy5wcm9wcy5vbkNsaWNrKGV2ZW50KTtcblx0XHR0aGlzLnByb3BzLm9uQ2VsbENsaWNrICYmIHRoaXMucHJvcHMub25DZWxsQ2xpY2soZXZlbnQpO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDx0ZCBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItdGFibGUtdGNlbGxcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUsIHRoaXMuc3RhdGUuY2xhc3NOYW1lKX0gc3R5bGU9e3pudWkucmVhY3Quc3R5bGUodGhpcy5wcm9wcy5zdHlsZSwgdGhpcy5zdGF0ZS5zdHlsZSl9XHRcblx0XHRcdFx0ZGF0YS1kaXNhYmxlZD17dGhpcy5zdGF0ZS5kaXNhYmxlZH1cblx0XHRcdFx0ZGF0YS1jaGVja2VkPXt0aGlzLnN0YXRlLmNoZWNrZWR9XG5cdFx0XHRcdGRhdGEtYWN0aXZlPXt0aGlzLnN0YXRlLmFjdGl2ZX1cblx0XHRcdFx0b25DbGljaz17dGhpcy5fX2NlbGxDbGlja30gPlxuXHRcdFx0XHR7dGhpcy5fX3JlbmRlckNlbGxDb250ZW50KCl9XG5cdFx0XHQ8L3RkPlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIGZpbHRlciA9IHJlcXVpcmUoJ3pudWktcmVhY3QtZmlsdGVyJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTogJ1pSRmlsdGVyJyxcblx0Z2V0SW5pdGlhbFN0YXRlOmZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNsYXNzTmFtZTogJycsXG5cdFx0XHRzdHlsZToge30sXG5cdFx0XHRkYXRhOiB7fVxuXHRcdH1cblx0fSxcblx0X19vbkZpbHRlckNoYW5nZTogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHRpZihldmVudC5uYW1lICYmIGV2ZW50LnZhbHVlKSB7XG5cdFx0XHR0aGlzLnN0YXRlLmRhdGFbZXZlbnQubmFtZV0gPSB7XG5cdFx0XHRcdHZhbHVlOiBldmVudC52YWx1ZSxcblx0XHRcdFx0b3B0OiBldmVudC5vcHRcblx0XHRcdH07XG5cdFx0fVxuXHRcdHRoaXMucHJvcHMub25GaWx0ZXIgJiYgdGhpcy5wcm9wcy5vbkZpbHRlcih0aGlzLnN0YXRlLmRhdGEpO1xuXHR9LFxuXHRfX29uRmlsdGVyQ2FuY2VsOiBmdW5jdGlvbiAobmFtZSl7XG5cdFx0aWYobmFtZSAmJiB0aGlzLnN0YXRlLmRhdGEpe1xuXHRcdFx0dGhpcy5zdGF0ZS5kYXRhW25hbWVdID0gbnVsbDtcblx0XHRcdGRlbGV0ZSB0aGlzLnN0YXRlLmRhdGFbbmFtZV07XG5cdFx0fVxuXHR9LFxuXHRfX3JlbmRlckNlbGw6IGZ1bmN0aW9uIChjb2x1bW4sIGluZGV4KXtcblx0XHRpZighem4uaXMoY29sdW1uLCAnb2JqZWN0JykpIHsgcmV0dXJuIG51bGw7IH1cblx0XHR2YXIgX2VsZW1lbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudCh0aGlzLnByb3BzLmNlbGxSZW5kZXIsIHtcblx0XHRcdGNvbHVtbjogY29sdW1uLFxuXHRcdFx0Y2VsbEluZGV4OiBpbmRleCwgXG5cdFx0XHR0ZmlsdGVyOiB0aGlzXG5cdFx0fSk7XG5cdFx0aWYoX2VsZW1lbnQpe1xuXHRcdFx0cmV0dXJuIF9lbGVtZW50O1xuXHRcdH1cblx0XHRcblx0XHR2YXIgX2NvbnRlbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudChjb2x1bW4ucmVuZGVyLCB7XG5cdFx0XHRjb2x1bW46IGNvbHVtbixcblx0XHRcdGNlbGxJbmRleDogaW5kZXgsIFxuXHRcdFx0dGZpbHRlcjogdGhpc1xuXHRcdH0pO1xuXG5cdFx0aWYoIV9jb250ZW50ICYmIGNvbHVtbi5maWx0ZXIpIHtcblx0XHRcdF9jb250ZW50ID0gPGZpbHRlci5GaWx0ZXJGaWVsZCB7Li4uY29sdW1uLmZpbHRlcn0gbmFtZT17Y29sdW1uLm5hbWV9IG9uRmlsdGVyQ2hhbmdlPXt0aGlzLl9fb25GaWx0ZXJDaGFuZ2V9IG9uQ2FuY2VsPXt0aGlzLl9fb25GaWx0ZXJDYW5jZWx9IC8+O1xuXHRcdH1cblxuXHRcdHZhciBfY2VsbCA9IHpuLmV4dGVuZCh7IHN0eWxlOiB7fSwgY2xhc3NOYW1lOiAnJyB9LCB0aGlzLnByb3BzLmNlbGwpO1xuXHRcdHJldHVybiA8dGQga2V5PXtpbmRleH0gY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgndGZpbHRlci1jZWxsJywgX2NlbGwuY2xhc3NOYW1lKX0gc3R5bGU9e19jZWxsLnN0eWxlfT5cblx0XHRcdHsgX2NvbnRlbnQgfVxuXHRcdDwvdGQ+O1xuXHR9LFxuXHRfX3JlbmRlclJvdzogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF9lbGVtZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQodGhpcy5wcm9wcy5yb3dSZW5kZXIsIHtcblx0XHRcdHRmaWx0ZXI6IHRoaXNcblx0XHR9KTtcblx0XHRpZihfZWxlbWVudCl7XG5cdFx0XHRyZXR1cm4gX2VsZW1lbnQ7XG5cdFx0fVxuXHRcdHZhciBfcm93ID0gem4uZXh0ZW5kKHsgY2xhc3NOYW1lOiAnJywgc3R5bGU6IHt9IH0sIHRoaXMucHJvcHMucm93KTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHRyIGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ0ZmlsdGVyLXJvdyB6ci10YWJsZS10cm93XCIsIF9yb3cuY2xhc3NOYW1lKX0gc3R5bGU9e19yb3cuc3R5bGV9PlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0KHRoaXMucHJvcHMuY29sdW1uc3x8W10pLm1hcCh0aGlzLl9fcmVuZGVyQ2VsbClcblx0XHRcdFx0fVxuXHRcdFx0PC90cj5cblx0XHQpO1xuXHR9LFxuXHRyZW5kZXI6ZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHRoZWFkIGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci10YWJsZS10ZmlsdGVyXCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lLCB0aGlzLnN0YXRlLmNsYXNzTmFtZSl9IHN0eWxlPXt6bnVpLnJlYWN0LnN0eWxlKHRoaXMucHJvcHMuc3R5bGUsIHRoaXMuc3RhdGUuc3R5bGUpfT5cblx0XHRcdFx0e3RoaXMuX19yZW5kZXJSb3coKX1cblx0XHRcdDwvdGhlYWQ+XG5cdFx0KTtcblx0fVxufSk7IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSVEZvb3QnLFxuXHRfX3JlbmRlckNoaWxkcmVuOiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX2NvbHVtbnMgPSB0aGlzLnByb3BzLmNvbHVtbnMgfHwgW107XG5cdFx0aWYodGhpcy5wcm9wcy5jaGlsZHJlbil7XG5cdFx0XHRyZXR1cm4gPHRyIGNsYXNzTmFtZT1cInRmb290LXJvd1wiPlxuXHRcdFx0XHQ8dGQgY29sU3Bhbj17X2NvbHVtbnMubGVuZ3RofT57dGhpcy5wcm9wcy5jaGlsZHJlbn08L3RkPlxuXHRcdFx0PC90cj47XG5cdFx0fWVsc2V7XG5cdFx0XHRyZXR1cm4gdGhpcy5fX3JlbmRlclJvdygpO1xuXHRcdH1cblx0fSxcblx0X19yZW5kZXJDZWxsOiBmdW5jdGlvbiAoY29sdW1uLCBpbmRleCl7XG5cdFx0aWYoIXpuLmlzKGNvbHVtbiwgJ29iamVjdCcpKSB7IHJldHVybiBudWxsOyB9XG5cdFx0dmFyIF9lbGVtZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQodGhpcy5wcm9wcy5jZWxsUmVuZGVyLCB7XG5cdFx0XHRjb2x1bW46IGNvbHVtbixcblx0XHRcdGNlbGxJbmRleDogaW5kZXgsIFxuXHRcdFx0dGZvb3Q6IHRoaXNcblx0XHR9KTtcblx0XHRpZihfZWxlbWVudCl7XG5cdFx0XHRyZXR1cm4gX2VsZW1lbnQ7XG5cdFx0fVxuXG5cdFx0dmFyIF9jb250ZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQoY29sdW1uLnJlbmRlciB8fCBjb2x1bW4uZm9vdCwge1xuXHRcdFx0Y29sdW1uOiBjb2x1bW4sXG5cdFx0XHRjZWxsSW5kZXg6IGluZGV4LCBcblx0XHRcdHRmb290OiB0aGlzXG5cdFx0fSk7XG5cblx0XHRpZih0aGlzLnByb3BzLnJlbmRlcikge1xuXHRcdFx0X2NvbnRlbnQgPSB0aGlzLnByb3BzLnJlbmRlcihjb2x1bW4sIGluZGV4LCB0aGlzKTtcblx0XHR9XG5cblx0XHR2YXIgX2NlbGwgPSB6bi5leHRlbmQoeyBzdHlsZToge30sIGNsYXNzTmFtZTogJycgfSwgdGhpcy5wcm9wcy5jZWxsKTtcblx0XHRyZXR1cm4gPHRoIGtleT17aW5kZXh9IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3Rmb290LWNlbGwnLCBfY2VsbC5jbGFzc05hbWUpfSBzdHlsZT17X2NlbGwuc3R5bGV9PlxuXHRcdFx0eyBfY29udGVudCB9XG5cdFx0PC90aD47XG5cdH0sXG5cdF9fcmVuZGVyUm93OiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX2VsZW1lbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudCh0aGlzLnByb3BzLnJvd1JlbmRlciwge1xuXHRcdFx0dGhlYWQ6IHRoaXNcblx0XHR9KTtcblx0XHRpZihfZWxlbWVudCl7XG5cdFx0XHRyZXR1cm4gX2VsZW1lbnQ7XG5cdFx0fVxuXHRcdHZhciBfcm93ID0gem4uZXh0ZW5kKHsgY2xhc3NOYW1lOiAnJywgc3R5bGU6IHt9IH0sIHRoaXMucHJvcHMucm93KTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHRyIGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ0Zm9vdC1yb3dcIiwgX3Jvdy5jbGFzc05hbWUpfSBzdHlsZT17X3Jvdy5zdHlsZX0+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHQodGhpcy5wcm9wcy5jb2x1bW5zfHxbXSkubWFwKHRoaXMuX19yZW5kZXJDZWxsKVxuXHRcdFx0XHR9XG5cdFx0XHQ8L3RyPlxuXHRcdCk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHRmb290IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci10YWJsZS10Zm9vdFwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfT5cblx0XHRcdFx0e3RoaXMuX19yZW5kZXJDaGlsZHJlbigpfVxuXHRcdFx0PC90Zm9vdD5cblx0XHQpO1xuXHR9XG59KTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgVEhlYWRTb3J0ID0gcmVxdWlyZSgnLi9USGVhZFNvcnQnKTtcbnZhciBwb3B1cCA9IHJlcXVpcmUoJ3pudWktcmVhY3QtcG9wdXAnKTtcbnZhciBTVkdJY29uID0gcmVxdWlyZSgnem51aS1yZWFjdC1pY29uJykuU1ZHSWNvbjtcbnZhciBqc29uZWRpdG9yID0gcmVxdWlyZSgncnQtanNvbi1lZGl0b3InKTtcbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonVEhlYWQnLFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRjbGFzc05hbWU6ICcnLFxuXHRcdFx0c3R5bGU6IHt9LFxuXHRcdFx0c29ydDoge30sXG5cdFx0XHRmaWx0ZXI6IHt9XG5cdFx0fTtcblx0fSxcblx0X19vbkNvbHVtblNvcnQ6IGZ1bmN0aW9uIChzb3J0LCBjb2x1bW4pe1xuXHRcdGlmKGNvbHVtbi5uYW1lKSB7XG5cdFx0XHR0aGlzLnN0YXRlLnNvcnRbY29sdW1uLm5hbWVdID0gKHNvcnQ9PSdmYVNvcnRBbHBoYURvd24nID8gJ2Rlc2MnIDogJ2FzYycpO1xuXHRcdH1cblx0XHR0aGlzLnByb3BzLm9uU29ydCAmJiB0aGlzLnByb3BzLm9uU29ydCh0aGlzLnN0YXRlLnNvcnQpO1xuXHR9LFxuXHRfX29uQ29sdW1uRWRpdG9yQ2hhbmdlOiBmdW5jdGlvbiAoZGF0YSwgY2hpbGQsIHJvb3QsIGluZGV4KXtcbiAgICAgICAgdmFyIF9yb290ID0gcm9vdCB8fCBjaGlsZDtcblx0XHR0aGlzLnByb3BzLm9uQ29sdW1uQ2hhbmdlICYmIHRoaXMucHJvcHMub25Db2x1bW5DaGFuZ2UoX3Jvb3Quc3RhdGUudmFsdWUsIGluZGV4KTtcbiAgICB9LFxuXHRfX2ljb25DbGlja1JlbmRlcjogZnVuY3Rpb24gKGNvbHVtbiwgaW5kZXgpe1xuXHRcdHJldHVybiA8ZGl2IHN0eWxlPXt7cGFkZGluZzogMTAsIG1heEhlaWdodDogNTAwLCB3aWR0aDogNDAwLCBvdmVyZmxvdzogJ2F1dG8nfX0+XG5cdFx0XHQ8anNvbmVkaXRvci5mb3JtLm9iamVjdCBmb2xkPXtmYWxzZX1cblx0XHRcdFx0ZGlzcGxheUNsb3N1cmU9e3RydWV9IFxuXHRcdFx0XHRkaXNwbGF5SXRlbUNvdW50PXt0cnVlfSBcblx0XHRcdFx0bGFiZWw9eydDb2x1bW4nfSBcblx0XHRcdFx0dmFsdWU9e2NvbHVtbn0gXG5cdFx0XHRcdG9uQ2hhbmdlPXsoZGF0YSwgY2hpbGQsIHJvb3QpPT50aGlzLl9fb25Db2x1bW5FZGl0b3JDaGFuZ2UoZGF0YSwgY2hpbGQsIHJvb3QsIGluZGV4KX0gLz5cblx0XHQ8L2Rpdj47XG5cdH0sXG5cdF9fcmVuZGVyQ2VsbDogZnVuY3Rpb24gKGNvbHVtbiwgaW5kZXgpe1xuXHRcdGlmKCF6bi5pcyhjb2x1bW4sICdvYmplY3QnKSkgeyByZXR1cm4gbnVsbDsgfVxuXHRcdHZhciBfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMuY2VsbFJlbmRlciwge1xuXHRcdFx0Y29sdW1uOiBjb2x1bW4sXG5cdFx0XHRjZWxsSW5kZXg6IGluZGV4LCBcblx0XHRcdHRoZWFkOiB0aGlzXG5cdFx0fSk7XG5cdFx0aWYoX2VsZW1lbnQpe1xuXHRcdFx0cmV0dXJuIF9lbGVtZW50O1xuXHRcdH1cblxuXHRcdHZhciBfY29udGVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KGNvbHVtbi5yZW5kZXIgfHwgY29sdW1uLmhlYWQsIHtcblx0XHRcdGNvbHVtbjogY29sdW1uLFxuXHRcdFx0Y2VsbEluZGV4OiBpbmRleCwgXG5cdFx0XHR0aGVhZDogdGhpc1xuXHRcdH0pO1xuXHRcdGlmKCFfY29udGVudCkge1xuXHRcdFx0X2NvbnRlbnQgPSA8ZGl2IGNsYXNzTmFtZT1cImNlbGwtbGFiZWxcIj5cblx0XHRcdFx0eyBjb2x1bW4ubGFiZWwgfVxuXHRcdFx0XHR7IFxuXHRcdFx0XHRcdCEhY29sdW1uLmVkaXRhYmxlICYmIDxwb3B1cC5Ecm9wZG93biBcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImNlbGwtZWRpdG9yXCIgXG5cdFx0XHRcdFx0XHRwb3BvdmVyPXt7XG5cdFx0XHRcdFx0XHRcdHJlbmRlcjogdGhpcy5fX2ljb25DbGlja1JlbmRlcihjb2x1bW4sIGluZGV4KSxcblx0XHRcdFx0XHRcdFx0Y2xvc2VhYmxlOiB0cnVlXG5cdFx0XHRcdFx0XHR9fSA+XG5cdFx0XHRcdFx0XHQ8U1ZHSWNvbiBpY29uPVwiZmFFZGl0XCIgLz5cblx0XHRcdFx0XHQ8L3BvcHVwLkRyb3Bkb3duPlxuXHRcdFx0XHR9XG5cdFx0XHQ8L2Rpdj47XG5cdFx0fVxuXG5cdFx0dmFyIF9jZWxsID0gem4uZXh0ZW5kKHsgc3R5bGU6IHt9LCBjbGFzc05hbWU6ICcnIH0sIHRoaXMucHJvcHMuY2VsbCk7XG5cdFx0cmV0dXJuIDx0aCBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd0aGVhZC1jZWxsJywgX2NlbGwuY2xhc3NOYW1lKX0gc3R5bGU9e19jZWxsLnN0eWxlfT5cblx0XHRcdHsgX2NvbnRlbnQgfVxuXHRcdFx0eyAhIWNvbHVtbi5zb3J0ICYmIDxUSGVhZFNvcnQgY2xhc3NOYW1lPVwiY2VsbC1zb3J0XCIgb25Tb3J0PXsoc29ydCk9PnRoaXMuX19vbkNvbHVtblNvcnQoc29ydCwgY29sdW1uKX0gLz59XG5cdFx0PC90aD47XG5cdH0sXG5cdF9fcmVuZGVyUm93OiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX2VsZW1lbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudCh0aGlzLnByb3BzLnJvd1JlbmRlciwge1xuXHRcdFx0dGhlYWQ6IHRoaXNcblx0XHR9KTtcblx0XHRpZihfZWxlbWVudCl7XG5cdFx0XHRyZXR1cm4gX2VsZW1lbnQ7XG5cdFx0fVxuXHRcdHZhciBfcm93ID0gem4uZXh0ZW5kKHsgY2xhc3NOYW1lOiAnJywgc3R5bGU6IHt9IH0sIHRoaXMucHJvcHMucm93KTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHRyIGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ0aGVhZC1yb3dcIiwgX3Jvdy5jbGFzc05hbWUpfSBzdHlsZT17X3Jvdy5zdHlsZX0+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHQodGhpcy5wcm9wcy5jb2x1bW5zfHxbXSkubWFwKHRoaXMuX19yZW5kZXJDZWxsKVxuXHRcdFx0XHR9XG5cdFx0XHQ8L3RyPlxuXHRcdCk7XG5cdH0sXG5cdHJlbmRlcjpmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8dGhlYWQgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXRhYmxlLXRoZWFkXCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lLCB0aGlzLnN0YXRlLmNsYXNzTmFtZSl9IHN0eWxlPXt6bnVpLnJlYWN0LnN0eWxlKHRoaXMucHJvcHMuc3R5bGUsIHRoaXMuc3RhdGUuc3R5bGUpfT5cblx0XHRcdFx0e3RoaXMuX19yZW5kZXJSb3coKX1cblx0XHRcdDwvdGhlYWQ+XG5cdFx0KTtcblx0fVxufSk7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgU1ZHSWNvbiA9IHJlcXVpcmUoJ3pudWktcmVhY3QtaWNvbicpLlNWR0ljb247XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJUSGVhZFNvcnQnLFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRzb3J0OiAnZmFTb3J0Jyxcblx0XHR9XG5cdH0sXG5cdF9faWNvbkNsaWNrOiBmdW5jdGlvbiAoKXtcblx0XHRpZih0aGlzLnN0YXRlLnNvcnQgPT0gJ2ZhU29ydCcpe1xuXHRcdFx0dGhpcy5zdGF0ZS5zb3J0ID0gJ2ZhU29ydEFscGhhRG93bic7XG5cdFx0fSBlbHNlIGlmKHRoaXMuc3RhdGUuc29ydCA9PSAnZmFTb3J0QWxwaGFEb3duJyl7XG5cdFx0XHR0aGlzLnN0YXRlLnNvcnQgPSAnZmFTb3J0QWxwaGFVcCc7XG5cdFx0fSBlbHNlIGlmKHRoaXMuc3RhdGUuc29ydCA9PSAnZmFTb3J0QWxwaGFVcCcpe1xuXHRcdFx0dGhpcy5zdGF0ZS5zb3J0ID0gJ2ZhU29ydEFscGhhRG93bic7XG5cdFx0fVxuXHRcdHRoaXMuZm9yY2VVcGRhdGUoKTtcblx0XHR0aGlzLnByb3BzLm9uU29ydCAmJiB0aGlzLnByb3BzLm9uU29ydCh0aGlzLnN0YXRlLnNvcnQpO1xuXHR9LFxuXHRyZW5kZXI6ZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd6ci10aGVhZC1zb3J0JywgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0+XG5cdFx0XHRcdDxTVkdJY29uIG9uQ2xpY2s9e3RoaXMuX19pY29uQ2xpY2t9IGljb249e3RoaXMuc3RhdGUuc29ydH0gLz5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFJlYWN0RE9NID0gem51aS5SZWFjdERPTSB8fCByZXF1aXJlKCdyZWFjdC1kb20nKTtcbnZhciBUQ2VsbCA9IHJlcXVpcmUoJy4vVENlbGwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUlRSb3cnLFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNsYXNzTmFtZTogJycsXG5cdFx0XHRzdHlsZToge31cblx0XHR9XG5cdH0sXG5cdF9fZ2V0VGFyZ2V0VEQ6IGZ1bmN0aW9uICh0YXJnZXQpIHtcblx0XHRpZih0YXJnZXQudGFnTmFtZSE9PSdURCcpe1xuXHRcdFx0cmV0dXJuIHRoaXMuX19nZXRUYXJnZXRURCh0YXJnZXQucGFyZW50Tm9kZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0YXJnZXQ7XG5cdFx0fVxuXHR9LFxuXHRfX29uUm93Q2xpY2s6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0dmFyIF90ZCA9IHRoaXMuX19nZXRUYXJnZXRURChldmVudC50YXJnZXQpLFxuXHRcdFx0X3RyID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XG5cdFx0ZXZlbnQuZGF0YSA9IHtcblx0XHRcdHRkOiBfdGQsXG5cdFx0XHR0cjogX3RyLFxuXHRcdFx0dHJvdzogdGhpc1xuXHRcdH07XG5cdFx0dGhpcy5wcm9wcy5vbkNsaWNrICYmIHRoaXMucHJvcHMub25DbGljayhldmVudCk7XG5cdFx0dGhpcy5wcm9wcy5vblJvd0NsaWNrICYmIHRoaXMucHJvcHMub25Sb3dDbGljayhldmVudCk7XG5cdH0sXG5cdF9fY2VsbFJlbmRlcjogZnVuY3Rpb24gKGNvbHVtbiwgaW5kZXgpe1xuXHRcdGlmKCF6bi5pcyhjb2x1bW4sICdvYmplY3QnKSkgeyByZXR1cm4gbnVsbDt9XG5cdFx0dmFyIF9wcm9wcyA9IHpuLmV4dGVuZCh7XG5cdFx0XHRjb2x1bW46IGNvbHVtbixcblx0XHRcdHRyb3c6IHRoaXMsXG5cdFx0XHRjZWxsSW5kZXg6IGluZGV4LFxuXHRcdFx0ZGF0YTogdGhpcy5wcm9wcy5kYXRhLFxuXHRcdFx0dGJvZHk6IHRoaXMucHJvcHMudGJvZHlcblx0XHR9LCB0aGlzLnByb3BzLmNlbGwsIGNvbHVtbik7XG5cdFx0dmFyIF9lbGVtZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQodGhpcy5wcm9wcy5jZWxsUmVuZGVyLCBfcHJvcHMpO1xuXG5cdFx0aWYoX2VsZW1lbnQpe1xuXHRcdFx0cmV0dXJuIF9lbGVtZW50O1xuXHRcdH1cblxuXHRcdHJldHVybiA8VENlbGwga2V5PXtpbmRleH0gey4uLl9wcm9wc30gb25DZWxsQ2xpY2s9e3RoaXMucHJvcHMub25DZWxsQ2xpY2t9IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3Ryb3ctY2VsbCcsIF9wcm9wcy5jbGFzc05hbWUpfSAvPjtcblx0fSxcblx0cmVuZGVyOmZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDx0ciBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd6ci10YWJsZS10cm93JywgdGhpcy5wcm9wcy5jbGFzc05hbWUsIHRoaXMuc3RhdGUuY2xhc3NOYW1lKX0gc3R5bGU9e3pudWkucmVhY3Quc3R5bGUodGhpcy5wcm9wcy5zdHlsZSwgdGhpcy5zdGF0ZS5zdHlsZSl9XG5cdFx0XHRcdGRhdGEtYWN0aXZlPXt0aGlzLnByb3BzLmFjdGl2ZX0gXG5cdFx0XHRcdGRhdGEtY2hlY2tlZD17dGhpcy5wcm9wcy5jaGVja2VkfSBcblx0XHRcdFx0b25DbGljaz17dGhpcy5fX29uUm93Q2xpY2t9PlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0KHRoaXMucHJvcHMuY29sdW1uc3x8W10pLm1hcCh0aGlzLl9fY2VsbFJlbmRlcilcblx0XHRcdFx0fVxuXHRcdFx0PC90cj5cblx0XHQpO1xuXHR9XG59KTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIENvbGdyb3VwOiByZXF1aXJlKCcuL0NvbGdyb3VwJyksXG4gICAgVEZpbHRlcjogcmVxdWlyZSgnLi9URmlsdGVyJyksXG4gICAgVEJvZHk6IHJlcXVpcmUoJy4vVEJvZHknKSxcbiAgICBUQ2VsbDogcmVxdWlyZSgnLi9UQ2VsbCcpLFxuICAgIFRGb290OiByZXF1aXJlKCcuL1RGb290JyksXG4gICAgVEhlYWQ6IHJlcXVpcmUoJy4vVEhlYWQnKSxcbiAgICBUUm93OiByZXF1aXJlKCcuL1RSb3cnKVxufTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcIlJlYWN0XCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiUmVhY3RET01cIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJqc29uZWRpdG9yXCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiZmlsdGVyXCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiaWNvblwiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcImlucHV0XCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wibG9hZGVyXCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wicGFnZXJcIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJwb3B1cFwiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcInNlbGVjdG9yXCJdOyB9KCkpOyJdLCJzb3VyY2VSb290IjoiIn0=