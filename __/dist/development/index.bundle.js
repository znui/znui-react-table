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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = znui.React || __webpack_require__(/*! react */ "react");

var table = __webpack_require__(/*! ./table/index */ "./table/index.js");

var selector = __webpack_require__(/*! znui-react-selector */ "znui-react-selector");

var pager = __webpack_require__(/*! znui-react-pager */ "znui-react-pager");

module.exports = React.createClass({
  displayName: 'ZRTable',
  getInitialState: function getInitialState() {
    return {
      data: [],
      columns: [],
      checkeds: []
    };
  },
  __onSort: function __onSort(sort) {
    var _sort = null;

    for (var key in sort) {
      _sort = sort[key];
      this.state.data = this.state.data.sort(function (next, prev) {
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
  __tbodyDataLoaded: function __tbodyDataLoaded(data) {
    this.setState({
      data: data
    });
  },
  __renderTBody: function __renderTBody(columns) {
    var _this = this;

    var _data = this.props.data || this.props.tbody.data;

    if (zn.is(_data, 'object')) {
      return /*#__PURE__*/React.createElement(znui.react.DataLifecycle, {
        data: _data,
        render: function render() {
          return _this.__tbodyDataRender(columns);
        },
        onFinished: this.__tbodyDataLoaded,
        onLoading: function onLoading() {
          return _this.__tbodyLoadingRender(columns);
        }
      });
    }

    if (zn.is(_data, 'array')) {
      return /*#__PURE__*/React.createElement(table.TBody, _extends({}, this.props.tbody, {
        columns: columns,
        data: _data,
        table: this
      }));
    }
  },
  __renderPager: function __renderPager(columns, props) {
    var _props = props,
        _Component = _props.component;

    if (zn.is(_Component, 'string')) {
      _Component = zn.path(window, _Component);
    }

    _Component = _Component || pager.SimplePager;

    if (_props.total == null) {
      _props.total = this.state.total;
    }

    if (_props.count == null) {
      _props.count = this.state.count;
    }

    if (_props.current == null) {
      _props.current = this.state.current || 1;
    }

    var _element = znui.react.createReactElement(this.props.pagerRender, {
      table: this
    });

    if (!_element) {
      _element = /*#__PURE__*/React.createElement(_Component, _props);
    }

    return /*#__PURE__*/React.createElement("tfoot", {
      className: "zr-table-pager"
    }, /*#__PURE__*/React.createElement("tr", {
      className: "pager-row"
    }, /*#__PURE__*/React.createElement("td", {
      colSpan: columns.length
    }, _element)));
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
    })), !!this.props.tbody && this.__renderTBody(columns), !!this.props.tfoot && /*#__PURE__*/React.createElement(table.TFoot, _extends({
      columns: columns
    }, this.props.tfoot, {
      table: this
    })), !!this.props.pager && this.__renderPager(columns, this.props.pager));
  },
  __initCheckbox: function __initCheckbox(columns) {
    var _checkbox = {
      width: 60,
      head: function (argv) {
        var _this2 = this;

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
              _this2.state.checkeds = _this2.state.data.slice(0);
            } else {
              _this2.state.checkeds = [];
            }

            _this2.forceUpdate();

            _this2.props.onCheckboxChange && _this2.props.onCheckboxChange(_this2.state.checkeds, _this2);
          }
        });
      }.bind(this),
      body: function (argv) {
        var _this3 = this;

        var _data = argv.data;
        return /*#__PURE__*/React.createElement(selector.UncontrolCheckbox, {
          style: {
            justifyContent: 'center'
          },
          checked: this.state.checkeds.indexOf(_data) !== -1,
          onClick: function onClick(event, checkbox) {
            event.stopPropagation();

            if (checkbox.props.checked) {
              _this3.state.checkeds.splice(_this3.state.checkeds.indexOf(_data), 1);
            } else {
              _this3.state.checkeds.push(_data);
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
    var _columns = columns.map(function (column) {
      return zn.deepAssign({}, column);
    });

    this.__initCheckbox(_columns);

    if (this.props.eachColumn) {
      _columns = _columns.forEach(this.props.eachColumn);
    }

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

var table = __webpack_require__(/*! ./table/index */ "./table/index.js");

var input = __webpack_require__(/*! znui-react-input */ "znui-react-input");

var selector = __webpack_require__(/*! znui-react-selector */ "znui-react-selector");

module.exports = React.createClass({
  displayName: 'ZRTableEditor',
  getInitialState: function getInitialState() {
    return {
      data: [],
      columns: [],
      checkeds: []
    };
  },
  __onSort: function __onSort(sort) {
    var _sort = null;

    for (var key in sort) {
      _sort = sort[key];
      this.state.data = this.state.data.sort(function (next, prev) {
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
  __tbodyDataLoaded: function __tbodyDataLoaded(data) {
    this.setState({
      data: data
    });
  },
  __render: function __render() {
    var _this = this;

    var columns = this.state.columns;
    return /*#__PURE__*/React.createElement("table", _extends({
      className: znui.react.classname("zr-table-editor", this.props.className),
      style: this.props.style,
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
    })), !!this.props.tbody && /*#__PURE__*/React.createElement(znui.react.DataLifecycle, {
      onFinished: this.__tbodyDataLoaded,
      data: this.props.data || this.props.tbody.data,
      render: function render() {
        return _this.__tbodyDataRender(columns);
      },
      onLoading: function onLoading() {
        return _this.__tbodyLoadingRender(columns);
      }
    }), !!this.props.tfoot && /*#__PURE__*/React.createElement(table.TFoot, _extends({
      columns: columns
    }, this.props.tfoot, {
      table: this
    })));
  },
  __initCheckbox: function __initCheckbox(columns) {
    var _checkbox = {
      width: 60,
      head: function (argv) {
        var _this2 = this;

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
              _this2.state.checkeds = _this2.state.data.slice(0);
            } else {
              _this2.state.checkeds = [];
            }

            _this2.forceUpdate();

            _this2.props.onCheckboxChange && _this2.props.onCheckboxChange(_this2.state.checkeds, _this2);
          }
        });
      }.bind(this),
      body: function (argv) {
        var _this3 = this;

        var _data = argv.data;
        return /*#__PURE__*/React.createElement(selector.UncontrolCheckbox, {
          style: {
            justifyContent: 'center'
          },
          checked: this.state.checkeds.indexOf(_data) !== -1,
          onClick: function onClick(event, checkbox) {
            event.stopPropagation();

            if (checkbox.props.checked) {
              _this3.state.checkeds.splice(_this3.state.checkeds.indexOf(_data), 1);
            } else {
              _this3.state.checkeds.push(_data);
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
  __cellChange: function __cellChange(event, argv) {
    //console.log(event);
    //console.log(argv);
    argv.data[argv.tcell.props.name] = event.value;
    argv.trow.forceUpdate();
  },
  __columnBodyRender: function __columnBodyRender(argv) {
    var _this4 = this;

    return /*#__PURE__*/React.createElement(input.Input, {
      key: argv.value,
      value: argv.value,
      onEnter: function onEnter(event) {
        return _this4.__cellChange(event, argv);
      }
    });
  },
  __columnsLoaded: function __columnsLoaded(columns) {
    var _columns = columns.map(function (column) {
      return zn.deepAssign({}, column);
    });

    this.__initCheckbox(_columns);

    _columns = _columns.map(function (column, index) {
      if (!column.body) {
        column.body = this.__columnBodyRender;
      }

      return column;
    }.bind(this));
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
  TableEditor: __webpack_require__(/*! ./TableEditor */ "./TableEditor.js")
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

    if (_element) {
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

    var _cell = zn.extend({
      style: {},
      className: ''
    }, this.props.cell);

    return /*#__PURE__*/React.createElement("th", {
      key: index,
      className: znui.react.classname('thead-cell', _cell.className),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vVGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vVGFibGVFZGl0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vY2VsbC9DaGVja2JveC5qcyIsIndlYnBhY2s6Ly8vLi9jZWxsL2luZGV4LmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3RhYmxlL0NvbGdyb3VwLmpzIiwid2VicGFjazovLy8uL3RhYmxlL1RCb2R5LmpzIiwid2VicGFjazovLy8uL3RhYmxlL1RDZWxsLmpzIiwid2VicGFjazovLy8uL3RhYmxlL1RGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdGFibGUvVEZvb3QuanMiLCJ3ZWJwYWNrOi8vLy4vdGFibGUvVEhlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vdGFibGUvVEhlYWRTb3J0LmpzIiwid2VicGFjazovLy8uL3RhYmxlL1RSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vdGFibGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdERPTVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzb25lZGl0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaWx0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpY29uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW5wdXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2FkZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYWdlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBvcHVwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2VsZWN0b3JcIiJdLCJuYW1lcyI6WyJSZWFjdCIsInpudWkiLCJyZXF1aXJlIiwidGFibGUiLCJzZWxlY3RvciIsInBhZ2VyIiwibW9kdWxlIiwiZXhwb3J0cyIsImNyZWF0ZUNsYXNzIiwiZGlzcGxheU5hbWUiLCJnZXRJbml0aWFsU3RhdGUiLCJkYXRhIiwiY29sdW1ucyIsImNoZWNrZWRzIiwiX19vblNvcnQiLCJzb3J0IiwiX3NvcnQiLCJrZXkiLCJzdGF0ZSIsIm5leHQiLCJwcmV2IiwiZm9yY2VVcGRhdGUiLCJfX29uRmlsdGVyIiwiZmlsdGVyIiwiY29uc29sZSIsImxvZyIsIl9fdGJvZHlEYXRhUmVuZGVyIiwicHJvcHMiLCJ0Ym9keSIsIl9fdGJvZHlMb2FkaW5nUmVuZGVyIiwiX19vblRIZWFkQ29sdW1uQ2hhbmdlIiwiaW5kZXgiLCJfX3Rib2R5RGF0YUxvYWRlZCIsInNldFN0YXRlIiwiX19yZW5kZXJUQm9keSIsIl9kYXRhIiwiem4iLCJpcyIsIl9fcmVuZGVyUGFnZXIiLCJfcHJvcHMiLCJfQ29tcG9uZW50IiwiY29tcG9uZW50IiwicGF0aCIsIndpbmRvdyIsIlNpbXBsZVBhZ2VyIiwidG90YWwiLCJjb3VudCIsImN1cnJlbnQiLCJfZWxlbWVudCIsInJlYWN0IiwiY3JlYXRlUmVhY3RFbGVtZW50IiwicGFnZXJSZW5kZXIiLCJsZW5ndGgiLCJfX3JlbmRlciIsImNsYXNzbmFtZSIsImNsYXNzTmFtZSIsInN0eWxlIiwid2lkdGgiLCJmaXhlZCIsImNlbGxQYWRkaW5nIiwiY2VsbFNwYWNpbmciLCJhdHRycyIsImNhcHRpb24iLCJyZW5kZXIiLCJjb2xncm91cCIsInRoZWFkIiwidGZpbHRlciIsInRmb290IiwiX19pbml0Q2hlY2tib3giLCJfY2hlY2tib3giLCJoZWFkIiwiYXJndiIsIl90YWJsZSIsImp1c3RpZnlDb250ZW50IiwiZXZlbnQiLCJjaGVja2VkIiwic2xpY2UiLCJvbkNoZWNrYm94Q2hhbmdlIiwiYmluZCIsImJvZHkiLCJpbmRleE9mIiwiY2hlY2tib3giLCJzdG9wUHJvcGFnYXRpb24iLCJzcGxpY2UiLCJwdXNoIiwiX3ZhbHVlIiwidHlwZSIsImV4dGVuZCIsInVuc2hpZnQiLCJfX2NvbHVtbnNMb2FkZWQiLCJfY29sdW1ucyIsIm1hcCIsImNvbHVtbiIsImRlZXBBc3NpZ24iLCJlYWNoQ29sdW1uIiwiZm9yRWFjaCIsImlucHV0IiwiX19jZWxsQ2hhbmdlIiwidGNlbGwiLCJuYW1lIiwidmFsdWUiLCJ0cm93IiwiX19jb2x1bW5Cb2R5UmVuZGVyIiwiUmVhY3RET00iLCJDaGVja2JveCIsIl9fb25DaGVja2JveENoYW5nZSIsIl9fb25IZWFkQ2hhbmdlIiwiX19vbkJvZHlDaGFuZ2UiLCJjZWxsIiwiVGFibGUiLCJUYWJsZUVkaXRvciIsIml0ZW0iLCJUUm93IiwibG9hZGVyIiwiYWN0aXZlIiwibG9hZGluZyIsIl9fcmVuZGVyTG9hZGluZyIsImxvYWRpbmdSZW5kZXIiLCJfbG9hZGluZyIsIl9fcmVuZGVyRW1wdHkiLCJlbXB0eVJlbmRlciIsIl9lbXB0eSIsImVtcHR5IiwiX19vblJvd0NsaWNrIiwib25Sb3dDbGljayIsIl9fb25DZWxsQ2xpY2siLCJvbkNlbGxDbGljayIsIl9fcmVuZGVyUm93IiwiX3RlbXAiLCJlYWNoUm93RGF0YSIsInJvd1JlbmRlciIsInJvd0luZGV4Iiwicm93IiwiY2VsbFJlbmRlciIsIl9fcmVuZGVyRGF0YSIsImRpc2FibGVkIiwiX19yZW5kZXJDZWxsQ29udGVudCIsImNoaWxkcmVuIiwiX3JlbmRlciIsImNlbGxJbmRleCIsIl9fY2VsbENsaWNrIiwidGQiLCJmaW5kRE9NTm9kZSIsIm9uQ2xpY2siLCJfX29uRmlsdGVyQ2hhbmdlIiwib3B0Iiwib25GaWx0ZXIiLCJfX29uRmlsdGVyQ2FuY2VsIiwiX19yZW5kZXJDZWxsIiwiX2NvbnRlbnQiLCJfY2VsbCIsIl9yb3ciLCJfX3JlbmRlckNoaWxkcmVuIiwiZm9vdCIsIlRIZWFkU29ydCIsInBvcHVwIiwiU1ZHSWNvbiIsImpzb25lZGl0b3IiLCJfX29uQ29sdW1uU29ydCIsIm9uU29ydCIsIl9fb25Db2x1bW5FZGl0b3JDaGFuZ2UiLCJjaGlsZCIsInJvb3QiLCJfcm9vdCIsIm9uQ29sdW1uQ2hhbmdlIiwiX19pY29uQ2xpY2tSZW5kZXIiLCJwYWRkaW5nIiwibWF4SGVpZ2h0Iiwib3ZlcmZsb3ciLCJsYWJlbCIsImVkaXRhYmxlIiwiY2xvc2VhYmxlIiwiX19pY29uQ2xpY2siLCJUQ2VsbCIsIl9fZ2V0VGFyZ2V0VEQiLCJ0YXJnZXQiLCJ0YWdOYW1lIiwicGFyZW50Tm9kZSIsIl90ZCIsIl90ciIsInRyIiwiX19jZWxsUmVuZGVyIiwiQ29sZ3JvdXAiLCJURmlsdGVyIiwiVEJvZHkiLCJURm9vdCIsIlRIZWFkIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7OztBQ2xGQSxJQUFJQSxLQUFLLEdBQUdDLElBQUksQ0FBQ0QsS0FBTCxJQUFjRSxtQkFBTyxDQUFDLG9CQUFELENBQWpDOztBQUNBLElBQUlDLEtBQUssR0FBR0QsbUJBQU8sQ0FBQyx1Q0FBRCxDQUFuQjs7QUFDQSxJQUFJRSxRQUFRLEdBQUdGLG1CQUFPLENBQUMsZ0RBQUQsQ0FBdEI7O0FBQ0EsSUFBSUcsS0FBSyxHQUFHSCxtQkFBTyxDQUFDLDBD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QWEsZ0NBQWdDLEVBQUUsSTs7Ozs7Ozs7Ozs7QUNBL0MsYUFBYSxtQ0FBbUMsRUFBRSxJIiwiZmlsZSI6Ii4vZGlzdC9kZXZlbG9wbWVudC9pbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIHRhYmxlID0gcmVxdWlyZSgnLi90YWJsZS9pbmRleCcpO1xudmFyIHNlbGVjdG9yID0gcmVxdWlyZSgnem51aS1yZWFjdC1zZWxlY3RvcicpO1xudmFyIHBhZ2VyID0gcmVxdWlyZSgnem51aS1yZWFjdC1wYWdlcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSVGFibGUnLFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRkYXRhOiBbXSwgXG5cdFx0XHRjb2x1bW5zOiBbXSxcblx0XHRcdGNoZWNrZWRzOiBbXVxuXHRcdH07XG5cdH0sXG5cdF9fb25Tb3J0OiBmdW5jdGlvbiAoc29ydCl7XG5cdFx0dmFyIF9zb3J0ID0gbnVsbDtcblx0XHRmb3IodmFyIGtleSBpbiBzb3J0KXtcblx0XHRcdF9zb3J0ID0gc29ydFtrZXldXG5cdFx0XHR0aGlzLnN0YXRlLmRhdGEgPSB0aGlzLnN0YXRlLmRhdGEuc29ydChmdW5jdGlvbiAobmV4dCwgcHJldil7XG5cdFx0XHRcdGlmKF9zb3J0PT0nZGVzYycpe1xuXHRcdFx0XHRcdGlmKG5leHRba2V5XSA+IHByZXZba2V5XSl7XG5cdFx0XHRcdFx0XHRyZXR1cm4gMTtcblx0XHRcdFx0XHR9ZWxzZSBpZihuZXh0W2tleV0gPT0gcHJldltrZXldKXtcblx0XHRcdFx0XHRcdHJldHVybiAwO1xuXHRcdFx0XHRcdH1lbHNlIGlmKG5leHRba2V5XSA8IHByZXZba2V5XSl7XG5cdFx0XHRcdFx0XHRyZXR1cm4gLTE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmKF9zb3J0PT0nYXNjJyl7XG5cdFx0XHRcdFx0aWYobmV4dFtrZXldIDwgcHJldltrZXldKXtcblx0XHRcdFx0XHRcdHJldHVybiAxO1xuXHRcdFx0XHRcdH1lbHNlIGlmKG5leHRba2V5XSA9PSBwcmV2W2tleV0pe1xuXHRcdFx0XHRcdFx0cmV0dXJuIDA7XG5cdFx0XHRcdFx0fWVsc2UgaWYobmV4dFtrZXldID4gcHJldltrZXldKXtcblx0XHRcdFx0XHRcdHJldHVybiAtMTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHRoaXMuZm9yY2VVcGRhdGUoKTtcblx0fSxcblx0X19vbkZpbHRlcjogZnVuY3Rpb24gKGZpbHRlcil7XG5cdFx0Y29uc29sZS5sb2coZmlsdGVyLCB0aGlzLnN0YXRlLmRhdGEpO1xuXHR9LFxuXHRfX3Rib2R5RGF0YVJlbmRlcjogZnVuY3Rpb24gKGNvbHVtbnMpe1xuXHRcdHJldHVybiA8dGFibGUuVEJvZHkgey4uLnRoaXMucHJvcHMudGJvZHl9IGNvbHVtbnM9e2NvbHVtbnN9IGRhdGE9e3RoaXMuc3RhdGUuZGF0YX0gdGFibGU9e3RoaXN9IC8+O1xuXHR9LFxuXHRfX3Rib2R5TG9hZGluZ1JlbmRlcjogZnVuY3Rpb24gKGNvbHVtbnMpe1xuXHRcdHJldHVybiA8dGFibGUuVEJvZHkgey4uLnRoaXMucHJvcHMudGJvZHl9IGNvbHVtbnM9e2NvbHVtbnN9IGxvYWRpbmc9e3RydWV9IHRhYmxlPXt0aGlzfSAvPjtcblx0fSxcblx0X19vblRIZWFkQ29sdW1uQ2hhbmdlOiBmdW5jdGlvbiAoZGF0YSwgaW5kZXgpe1xuXHRcdGlmKHRoaXMuc3RhdGUuY29sdW1ucyl7XG5cdFx0XHR0aGlzLnN0YXRlLmNvbHVtbnNbaW5kZXhdID0gZGF0YTtcblx0XHRcdHRoaXMuZm9yY2VVcGRhdGUoKTtcblx0XHR9XG5cdH0sXG5cdF9fdGJvZHlEYXRhTG9hZGVkOiBmdW5jdGlvbiAoZGF0YSkge1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBkYXRhOiBkYXRhIH0pO1xuXHR9LFxuXHRfX3JlbmRlclRCb2R5OiBmdW5jdGlvbiAoY29sdW1ucyl7XG5cdFx0dmFyIF9kYXRhID0gdGhpcy5wcm9wcy5kYXRhIHx8IHRoaXMucHJvcHMudGJvZHkuZGF0YTtcblx0XHRpZih6bi5pcyhfZGF0YSwgJ29iamVjdCcpKXtcblx0XHRcdHJldHVybiA8em51aS5yZWFjdC5EYXRhTGlmZWN5Y2xlIGRhdGE9e19kYXRhfSByZW5kZXI9eygpPT50aGlzLl9fdGJvZHlEYXRhUmVuZGVyKGNvbHVtbnMpfSBvbkZpbmlzaGVkPXt0aGlzLl9fdGJvZHlEYXRhTG9hZGVkfSBvbkxvYWRpbmc9eygpPT50aGlzLl9fdGJvZHlMb2FkaW5nUmVuZGVyKGNvbHVtbnMpfSAvPjtcblx0XHR9XG5cdFx0aWYoem4uaXMoX2RhdGEsICdhcnJheScpKSB7XG5cdFx0XHRyZXR1cm4gPHRhYmxlLlRCb2R5IHsuLi50aGlzLnByb3BzLnRib2R5fSBjb2x1bW5zPXtjb2x1bW5zfSBkYXRhPXtfZGF0YX0gdGFibGU9e3RoaXN9IC8+O1xuXHRcdH1cblx0fSxcblx0X19yZW5kZXJQYWdlcjogZnVuY3Rpb24gKGNvbHVtbnMsIHByb3BzKXtcblx0XHR2YXIgX3Byb3BzID0gcHJvcHMsXG5cdFx0XHRfQ29tcG9uZW50ID0gX3Byb3BzLmNvbXBvbmVudDtcblx0XHRpZih6bi5pcyhfQ29tcG9uZW50LCAnc3RyaW5nJykpe1xuXHRcdFx0X0NvbXBvbmVudCA9IHpuLnBhdGgod2luZG93LCBfQ29tcG9uZW50KTtcblx0XHR9XG5cdFx0X0NvbXBvbmVudCA9IF9Db21wb25lbnQgfHwgcGFnZXIuU2ltcGxlUGFnZXI7XG5cdFx0aWYoX3Byb3BzLnRvdGFsID09IG51bGwpIHtcblx0XHRcdF9wcm9wcy50b3RhbCA9IHRoaXMuc3RhdGUudG90YWw7XG5cdFx0fVxuXHRcdGlmKF9wcm9wcy5jb3VudCA9PSBudWxsKSB7XG5cdFx0XHRfcHJvcHMuY291bnQgPSB0aGlzLnN0YXRlLmNvdW50O1xuXHRcdH1cblx0XHRpZihfcHJvcHMuY3VycmVudCA9PSBudWxsKSB7XG5cdFx0XHRfcHJvcHMuY3VycmVudCA9IHRoaXMuc3RhdGUuY3VycmVudCB8fCAxO1xuXHRcdH1cblxuXHRcdHZhciBfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMucGFnZXJSZW5kZXIsIHtcblx0XHRcdHRhYmxlOiB0aGlzXG5cdFx0fSk7XG5cblx0XHRpZighX2VsZW1lbnQpe1xuXHRcdCBcdF9lbGVtZW50ID0gPF9Db21wb25lbnQgey4uLl9wcm9wc30gLz47XG5cdFx0fVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDx0Zm9vdCBjbGFzc05hbWU9XCJ6ci10YWJsZS1wYWdlclwiPlxuXHRcdFx0XHQ8dHIgY2xhc3NOYW1lPVwicGFnZXItcm93XCI+XG5cdFx0XHRcdFx0PHRkIGNvbFNwYW49e2NvbHVtbnMubGVuZ3RofT57X2VsZW1lbnR9PC90ZD5cblx0XHRcdFx0PC90cj5cblx0XHRcdDwvdGZvb3Q+XG5cdFx0KTtcblx0fSxcblx0X19yZW5kZXI6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBjb2x1bW5zID0gdGhpcy5zdGF0ZS5jb2x1bW5zO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8dGFibGUgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXRhYmxlXCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gXG5cdFx0XHRcdHN0eWxlPXt6bnVpLnJlYWN0LnN0eWxlKHRoaXMucHJvcHMuc3R5bGUsIHsgd2lkdGg6IHRoaXMucHJvcHMud2lkdGggfSl9IFxuXHRcdFx0XHRkYXRhLWZpeGVkPXt0aGlzLnByb3BzLmZpeGVkfSBcdFxuXHRcdFx0XHRjZWxsUGFkZGluZz17dGhpcy5wcm9wcy5jZWxsUGFkZGluZyB8fCAwfSBcblx0XHRcdFx0Y2VsbFNwYWNpbmc9e3RoaXMucHJvcHMuY2VsbFNwYWNpbmcgfHwgMH0gey4uLnRoaXMucHJvcHMuYXR0cnN9PlxuXHRcdFx0XHR7ICEhdGhpcy5wcm9wcy5jYXB0aW9uICYmIDxjYXB0aW9uIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jYXB0aW9uLmNsYXNzTmFtZX0gc3R5bGU9e3RoaXMucHJvcHMuY2FwdGlvbi5zdHlsZX0+e3RoaXMucHJvcHMuY2FwdGlvbi5yZW5kZXJ9PC9jYXB0aW9uPiB9XG5cdFx0XHRcdHsgISF0aGlzLnByb3BzLmNvbGdyb3VwICYmIDx0YWJsZS5Db2xncm91cCBjb2x1bW5zPXtjb2x1bW5zfSB7Li4udGhpcy5wcm9wcy5jb2xncm91cH0gLz4gfVxuXHRcdFx0XHR7ICEhdGhpcy5wcm9wcy50aGVhZCAmJiA8dGFibGUuVEhlYWQgb25Tb3J0PXt0aGlzLl9fb25Tb3J0fSAgb25Db2x1bW5DaGFuZ2U9e3RoaXMuX19vblRIZWFkQ29sdW1uQ2hhbmdlfSBjb2x1bW5zPXtjb2x1bW5zfSB7Li4udGhpcy5wcm9wcy50aGVhZH0gdGFibGU9e3RoaXN9IC8+fVxuXHRcdFx0XHR7ICEhdGhpcy5wcm9wcy50ZmlsdGVyICYmIDx0YWJsZS5URmlsdGVyIG9uRmlsdGVyPXt0aGlzLl9fb25GaWx0ZXJ9IGNvbHVtbnM9e2NvbHVtbnN9IHsuLi50aGlzLnByb3BzLmZpbHRlcn0gdGFibGU9e3RoaXN9IC8+fVxuXHRcdFx0XHR7ICEhdGhpcy5wcm9wcy50Ym9keSAmJiB0aGlzLl9fcmVuZGVyVEJvZHkoY29sdW1ucykgfVxuXHRcdFx0XHR7ICEhdGhpcy5wcm9wcy50Zm9vdCAmJiA8dGFibGUuVEZvb3QgY29sdW1ucz17Y29sdW1uc30gey4uLnRoaXMucHJvcHMudGZvb3R9IHRhYmxlPXt0aGlzfSAvPn1cblx0XHRcdFx0eyAhIXRoaXMucHJvcHMucGFnZXIgJiYgdGhpcy5fX3JlbmRlclBhZ2VyKGNvbHVtbnMsIHRoaXMucHJvcHMucGFnZXIpIH1cblx0XHRcdDwvdGFibGU+XG5cdFx0KTtcblx0fSxcblx0X19pbml0Q2hlY2tib3g6IGZ1bmN0aW9uIChjb2x1bW5zKXtcblx0XHR2YXIgX2NoZWNrYm94ID0ge1xuXHRcdFx0XHR3aWR0aDogNjAsXG5cdFx0XHRcdGhlYWQ6IGZ1bmN0aW9uIChhcmd2KXtcblx0XHRcdFx0XHR2YXIgX3RhYmxlID0gYXJndi50aGVhZC5wcm9wcy50YWJsZTtcblx0XHRcdFx0XHRyZXR1cm4gPHNlbGVjdG9yLkNoZWNrYm94IFxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fVxuXHRcdFx0XHRcdFx0XHRcdGtleT17dGhpcy5zdGF0ZS5jaGVja2Vkcy5sZW5ndGh9XG5cdFx0XHRcdFx0XHRcdFx0dGV4dD17JygnICsgX3RhYmxlLnN0YXRlLmNoZWNrZWRzLmxlbmd0aCArJyknfVxuXHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQ9eyEhX3RhYmxlLnN0YXRlLmRhdGEubGVuZ3RoICYmIF90YWJsZS5zdGF0ZS5jaGVja2Vkcy5sZW5ndGggPT09IF90YWJsZS5zdGF0ZS5kYXRhLmxlbmd0aH1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGV2ZW50KT0+e1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYoZXZlbnQuY2hlY2tlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnN0YXRlLmNoZWNrZWRzID0gdGhpcy5zdGF0ZS5kYXRhLnNsaWNlKDApO1xuXHRcdFx0XHRcdFx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc3RhdGUuY2hlY2tlZHMgPSBbXTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuZm9yY2VVcGRhdGUoKTtcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMub25DaGVja2JveENoYW5nZSAmJiB0aGlzLnByb3BzLm9uQ2hlY2tib3hDaGFuZ2UodGhpcy5zdGF0ZS5jaGVja2VkcywgdGhpcyk7XG5cdFx0XHRcdFx0XHRcdFx0fX0gLz47XG5cdFx0XHRcdH0uYmluZCh0aGlzKSxcblx0XHRcdFx0Ym9keTogZnVuY3Rpb24gKGFyZ3Ype1xuXHRcdFx0XHRcdHZhciBfZGF0YSA9IGFyZ3YuZGF0YTtcblx0XHRcdFx0XHRyZXR1cm4gPHNlbGVjdG9yLlVuY29udHJvbENoZWNrYm94IFxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fVxuXHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQ9e3RoaXMuc3RhdGUuY2hlY2tlZHMuaW5kZXhPZihfZGF0YSkgIT09IC0xfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyhldmVudCwgY2hlY2tib3gpPT57XG5cdFx0XHRcdFx0XHRcdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0XHRcdFx0XHRcdGlmKGNoZWNrYm94LnByb3BzLmNoZWNrZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zdGF0ZS5jaGVja2Vkcy5zcGxpY2UodGhpcy5zdGF0ZS5jaGVja2Vkcy5pbmRleE9mKF9kYXRhKSwgMSk7IFxuXHRcdFx0XHRcdFx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc3RhdGUuY2hlY2tlZHMucHVzaChfZGF0YSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmZvcmNlVXBkYXRlKCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLm9uQ2hlY2tib3hDaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkNoZWNrYm94Q2hhbmdlKHRoaXMuc3RhdGUuY2hlY2tlZHMsIHRoaXMpO1xuXHRcdFx0XHRcdFx0XHRcdH19IC8+O1xuXHRcdFx0XHR9LmJpbmQodGhpcylcblx0XHRcdH0sXG5cdFx0XHRfdmFsdWUgPSB0aGlzLnByb3BzLmNoZWNrYm94O1xuXHRcdHN3aXRjaCh6bi50eXBlKF92YWx1ZSkpIHtcblx0XHRcdGNhc2UgJ29iamVjdCc6XG5cdFx0XHRcdF9jaGVja2JveCA9IHpuLmV4dGVuZCh7fSwgX3ZhbHVlKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdudW1iZXInOlxuXHRcdFx0XHRfY2hlY2tib3gud2lkdGggPSBfdmFsdWU7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHRpZihfdmFsdWUpIHtcblx0XHRcdGNvbHVtbnMgPSBjb2x1bW5zLnVuc2hpZnQoX2NoZWNrYm94KTtcblx0XHR9XG5cdH0sXG5cdF9fY29sdW1uc0xvYWRlZDogZnVuY3Rpb24gKGNvbHVtbnMpe1xuXHRcdHZhciBfY29sdW1ucyA9IGNvbHVtbnMubWFwKChjb2x1bW4pPT56bi5kZWVwQXNzaWduKHt9LCBjb2x1bW4pKTtcblx0XHR0aGlzLl9faW5pdENoZWNrYm94KF9jb2x1bW5zKTtcblx0XHRpZih0aGlzLnByb3BzLmVhY2hDb2x1bW4pIHtcblx0XHRcdF9jb2x1bW5zID0gX2NvbHVtbnMuZm9yRWFjaCh0aGlzLnByb3BzLmVhY2hDb2x1bW4pO1xuXHRcdH1cblx0XHR0aGlzLnNldFN0YXRlKHsgY29sdW1uczogX2NvbHVtbnMgfSk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gPHpudWkucmVhY3QuRGF0YUxpZmVjeWNsZSBvbkZpbmlzaGVkPXt0aGlzLl9fY29sdW1uc0xvYWRlZH0gZGF0YT17dGhpcy5wcm9wcy5jb2x1bW5zfSByZW5kZXI9e3RoaXMuX19yZW5kZXJ9IC8+XG5cdH1cbn0pOyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciB0YWJsZSA9IHJlcXVpcmUoJy4vdGFibGUvaW5kZXgnKTtcbnZhciBpbnB1dCA9IHJlcXVpcmUoJ3pudWktcmVhY3QtaW5wdXQnKTtcbnZhciBzZWxlY3RvciA9IHJlcXVpcmUoJ3pudWktcmVhY3Qtc2VsZWN0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUlRhYmxlRWRpdG9yJyxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0ZGF0YTogW10sIFxuXHRcdFx0Y29sdW1uczogW10sXG5cdFx0XHRjaGVja2VkczogW11cblx0XHR9O1xuXHR9LFxuXHRfX29uU29ydDogZnVuY3Rpb24gKHNvcnQpe1xuXHRcdHZhciBfc29ydCA9IG51bGw7XG5cdFx0Zm9yKHZhciBrZXkgaW4gc29ydCl7XG5cdFx0XHRfc29ydCA9IHNvcnRba2V5XVxuXHRcdFx0dGhpcy5zdGF0ZS5kYXRhID0gdGhpcy5zdGF0ZS5kYXRhLnNvcnQoZnVuY3Rpb24gKG5leHQsIHByZXYpe1xuXHRcdFx0XHRpZihfc29ydD09J2Rlc2MnKXtcblx0XHRcdFx0XHRpZihuZXh0W2tleV0gPiBwcmV2W2tleV0pe1xuXHRcdFx0XHRcdFx0cmV0dXJuIDE7XG5cdFx0XHRcdFx0fWVsc2UgaWYobmV4dFtrZXldID09IHByZXZba2V5XSl7XG5cdFx0XHRcdFx0XHRyZXR1cm4gMDtcblx0XHRcdFx0XHR9ZWxzZSBpZihuZXh0W2tleV0gPCBwcmV2W2tleV0pe1xuXHRcdFx0XHRcdFx0cmV0dXJuIC0xO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZihfc29ydD09J2FzYycpe1xuXHRcdFx0XHRcdGlmKG5leHRba2V5XSA8IHByZXZba2V5XSl7XG5cdFx0XHRcdFx0XHRyZXR1cm4gMTtcblx0XHRcdFx0XHR9ZWxzZSBpZihuZXh0W2tleV0gPT0gcHJldltrZXldKXtcblx0XHRcdFx0XHRcdHJldHVybiAwO1xuXHRcdFx0XHRcdH1lbHNlIGlmKG5leHRba2V5XSA+IHByZXZba2V5XSl7XG5cdFx0XHRcdFx0XHRyZXR1cm4gLTE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHR0aGlzLmZvcmNlVXBkYXRlKCk7XG5cdH0sXG5cdF9fb25GaWx0ZXI6IGZ1bmN0aW9uIChmaWx0ZXIpe1xuXHRcdGNvbnNvbGUubG9nKGZpbHRlciwgdGhpcy5zdGF0ZS5kYXRhKTtcblx0fSxcblx0X190Ym9keURhdGFSZW5kZXI6IGZ1bmN0aW9uIChjb2x1bW5zKXtcblx0XHRyZXR1cm4gPHRhYmxlLlRCb2R5IHsuLi50aGlzLnByb3BzLnRib2R5fSBjb2x1bW5zPXtjb2x1bW5zfSBkYXRhPXt0aGlzLnN0YXRlLmRhdGF9IHRhYmxlPXt0aGlzfSAvPjtcblx0fSxcblx0X190Ym9keUxvYWRpbmdSZW5kZXI6IGZ1bmN0aW9uIChjb2x1bW5zKXtcblx0XHRyZXR1cm4gPHRhYmxlLlRCb2R5IHsuLi50aGlzLnByb3BzLnRib2R5fSBjb2x1bW5zPXtjb2x1bW5zfSBsb2FkaW5nPXt0cnVlfSB0YWJsZT17dGhpc30gLz47XG5cdH0sXG5cdF9fb25USGVhZENvbHVtbkNoYW5nZTogZnVuY3Rpb24gKGRhdGEsIGluZGV4KXtcblx0XHRpZih0aGlzLnN0YXRlLmNvbHVtbnMpe1xuXHRcdFx0dGhpcy5zdGF0ZS5jb2x1bW5zW2luZGV4XSA9IGRhdGE7XG5cdFx0XHR0aGlzLmZvcmNlVXBkYXRlKCk7XG5cdFx0fVxuXHR9LFxuXHRfX3Rib2R5RGF0YUxvYWRlZDogZnVuY3Rpb24gKGRhdGEpIHtcblx0XHR0aGlzLnNldFN0YXRlKHsgZGF0YTogZGF0YSB9KTtcblx0fSxcblx0X19yZW5kZXI6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBjb2x1bW5zID0gdGhpcy5zdGF0ZS5jb2x1bW5zO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8dGFibGUgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXRhYmxlLWVkaXRvclwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IFxuXHRcdFx0XHRzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0gXG5cdFx0XHRcdGRhdGEtZml4ZWQ9e3RoaXMucHJvcHMuZml4ZWR9IFx0XG5cdFx0XHRcdGNlbGxQYWRkaW5nPXt0aGlzLnByb3BzLmNlbGxQYWRkaW5nIHx8IDB9IFxuXHRcdFx0XHRjZWxsU3BhY2luZz17dGhpcy5wcm9wcy5jZWxsU3BhY2luZyB8fCAwfSB7Li4udGhpcy5wcm9wcy5hdHRyc30+XG5cdFx0XHRcdHsgISF0aGlzLnByb3BzLmNhcHRpb24gJiYgPGNhcHRpb24gY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNhcHRpb24uY2xhc3NOYW1lfSBzdHlsZT17dGhpcy5wcm9wcy5jYXB0aW9uLnN0eWxlfT57dGhpcy5wcm9wcy5jYXB0aW9uLnJlbmRlcn08L2NhcHRpb24+IH1cblx0XHRcdFx0eyAhIXRoaXMucHJvcHMuY29sZ3JvdXAgJiYgPHRhYmxlLkNvbGdyb3VwIGNvbHVtbnM9e2NvbHVtbnN9IHsuLi50aGlzLnByb3BzLmNvbGdyb3VwfSAvPiB9XG5cdFx0XHRcdHsgISF0aGlzLnByb3BzLnRoZWFkICYmIDx0YWJsZS5USGVhZCBvblNvcnQ9e3RoaXMuX19vblNvcnR9ICBvbkNvbHVtbkNoYW5nZT17dGhpcy5fX29uVEhlYWRDb2x1bW5DaGFuZ2V9IGNvbHVtbnM9e2NvbHVtbnN9IHsuLi50aGlzLnByb3BzLnRoZWFkfSB0YWJsZT17dGhpc30gLz59XG5cdFx0XHRcdHsgISF0aGlzLnByb3BzLnRmaWx0ZXIgJiYgPHRhYmxlLlRGaWx0ZXIgb25GaWx0ZXI9e3RoaXMuX19vbkZpbHRlcn0gY29sdW1ucz17Y29sdW1uc30gey4uLnRoaXMucHJvcHMuZmlsdGVyfSB0YWJsZT17dGhpc30gLz59XG5cdFx0XHRcdHsgISF0aGlzLnByb3BzLnRib2R5ICYmIDx6bnVpLnJlYWN0LkRhdGFMaWZlY3ljbGUgb25GaW5pc2hlZD17dGhpcy5fX3Rib2R5RGF0YUxvYWRlZH0gZGF0YT17dGhpcy5wcm9wcy5kYXRhIHx8IHRoaXMucHJvcHMudGJvZHkuZGF0YX0gcmVuZGVyPXsoKT0+dGhpcy5fX3Rib2R5RGF0YVJlbmRlcihjb2x1bW5zKX0gb25Mb2FkaW5nPXsoKT0+dGhpcy5fX3Rib2R5TG9hZGluZ1JlbmRlcihjb2x1bW5zKX0gLz59XG5cdFx0XHRcdHsgISF0aGlzLnByb3BzLnRmb290ICYmIDx0YWJsZS5URm9vdCBjb2x1bW5zPXtjb2x1bW5zfSB7Li4udGhpcy5wcm9wcy50Zm9vdH0gdGFibGU9e3RoaXN9IC8+fVxuXHRcdFx0PC90YWJsZT5cblx0XHQpO1xuXHR9LFxuXHRfX2luaXRDaGVja2JveDogZnVuY3Rpb24gKGNvbHVtbnMpe1xuXHRcdHZhciBfY2hlY2tib3ggPSB7XG5cdFx0XHRcdHdpZHRoOiA2MCxcblx0XHRcdFx0aGVhZDogZnVuY3Rpb24gKGFyZ3Ype1xuXHRcdFx0XHRcdHZhciBfdGFibGUgPSBhcmd2LnRoZWFkLnByb3BzLnRhYmxlO1xuXHRcdFx0XHRcdHJldHVybiA8c2VsZWN0b3IuQ2hlY2tib3ggXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19XG5cdFx0XHRcdFx0XHRcdFx0a2V5PXt0aGlzLnN0YXRlLmNoZWNrZWRzLmxlbmd0aH1cblx0XHRcdFx0XHRcdFx0XHR0ZXh0PXsnKCcgKyBfdGFibGUuc3RhdGUuY2hlY2tlZHMubGVuZ3RoICsnKSd9XG5cdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17ISFfdGFibGUuc3RhdGUuZGF0YS5sZW5ndGggJiYgX3RhYmxlLnN0YXRlLmNoZWNrZWRzLmxlbmd0aCA9PT0gX3RhYmxlLnN0YXRlLmRhdGEubGVuZ3RofVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZXZlbnQpPT57XG5cdFx0XHRcdFx0XHRcdFx0XHRpZihldmVudC5jaGVja2VkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc3RhdGUuY2hlY2tlZHMgPSB0aGlzLnN0YXRlLmRhdGEuc2xpY2UoMCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zdGF0ZS5jaGVja2VkcyA9IFtdO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5mb3JjZVVwZGF0ZSgpO1xuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5vbkNoZWNrYm94Q2hhbmdlICYmIHRoaXMucHJvcHMub25DaGVja2JveENoYW5nZSh0aGlzLnN0YXRlLmNoZWNrZWRzLCB0aGlzKTtcblx0XHRcdFx0XHRcdFx0XHR9fSAvPjtcblx0XHRcdFx0fS5iaW5kKHRoaXMpLFxuXHRcdFx0XHRib2R5OiBmdW5jdGlvbiAoYXJndil7XG5cdFx0XHRcdFx0dmFyIF9kYXRhID0gYXJndi5kYXRhO1xuXHRcdFx0XHRcdHJldHVybiA8c2VsZWN0b3IuVW5jb250cm9sQ2hlY2tib3ggXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19XG5cdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17dGhpcy5zdGF0ZS5jaGVja2Vkcy5pbmRleE9mKF9kYXRhKSAhPT0gLTF9XG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KGV2ZW50LCBjaGVja2JveCk9Pntcblx0XHRcdFx0XHRcdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYoY2hlY2tib3gucHJvcHMuY2hlY2tlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnN0YXRlLmNoZWNrZWRzLnNwbGljZSh0aGlzLnN0YXRlLmNoZWNrZWRzLmluZGV4T2YoX2RhdGEpLCAxKTsgXG5cdFx0XHRcdFx0XHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zdGF0ZS5jaGVja2Vkcy5wdXNoKF9kYXRhKTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuZm9yY2VVcGRhdGUoKTtcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMub25DaGVja2JveENoYW5nZSAmJiB0aGlzLnByb3BzLm9uQ2hlY2tib3hDaGFuZ2UodGhpcy5zdGF0ZS5jaGVja2VkcywgdGhpcyk7XG5cdFx0XHRcdFx0XHRcdFx0fX0gLz47XG5cdFx0XHRcdH0uYmluZCh0aGlzKVxuXHRcdFx0fSxcblx0XHRcdF92YWx1ZSA9IHRoaXMucHJvcHMuY2hlY2tib3g7XG5cdFx0c3dpdGNoKHpuLnR5cGUoX3ZhbHVlKSkge1xuXHRcdFx0Y2FzZSAnb2JqZWN0Jzpcblx0XHRcdFx0X2NoZWNrYm94ID0gem4uZXh0ZW5kKHt9LCBfdmFsdWUpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ251bWJlcic6XG5cdFx0XHRcdF9jaGVja2JveC53aWR0aCA9IF92YWx1ZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdGlmKF92YWx1ZSkge1xuXHRcdFx0Y29sdW1ucyA9IGNvbHVtbnMudW5zaGlmdChfY2hlY2tib3gpO1xuXHRcdH1cblx0fSxcblx0X19jZWxsQ2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQsIGFyZ3Ype1xuXHRcdC8vY29uc29sZS5sb2coZXZlbnQpO1xuXHRcdC8vY29uc29sZS5sb2coYXJndik7XG5cdFx0YXJndi5kYXRhW2FyZ3YudGNlbGwucHJvcHMubmFtZV0gPSBldmVudC52YWx1ZTtcblx0XHRhcmd2LnRyb3cuZm9yY2VVcGRhdGUoKTtcblx0fSxcblx0X19jb2x1bW5Cb2R5UmVuZGVyOiBmdW5jdGlvbiAoYXJndil7XG5cdFx0cmV0dXJuIDxpbnB1dC5JbnB1dCBrZXk9e2FyZ3YudmFsdWV9IHZhbHVlPXthcmd2LnZhbHVlfSBvbkVudGVyPXsoZXZlbnQpPT50aGlzLl9fY2VsbENoYW5nZShldmVudCwgYXJndil9IC8+O1xuXHR9LFxuXHRfX2NvbHVtbnNMb2FkZWQ6IGZ1bmN0aW9uIChjb2x1bW5zKXtcblx0XHR2YXIgX2NvbHVtbnMgPSBjb2x1bW5zLm1hcCgoY29sdW1uKT0+em4uZGVlcEFzc2lnbih7fSwgY29sdW1uKSk7XG5cdFx0dGhpcy5fX2luaXRDaGVja2JveChfY29sdW1ucyk7XG5cdFx0X2NvbHVtbnMgPSBfY29sdW1ucy5tYXAoZnVuY3Rpb24gKGNvbHVtbiwgaW5kZXgpe1xuXHRcdFx0aWYoIWNvbHVtbi5ib2R5KSB7XG5cdFx0XHRcdGNvbHVtbi5ib2R5ID0gdGhpcy5fX2NvbHVtbkJvZHlSZW5kZXI7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gY29sdW1uO1xuXHRcdH0uYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IGNvbHVtbnM6IF9jb2x1bW5zIH0pO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIDx6bnVpLnJlYWN0LkRhdGFMaWZlY3ljbGUgb25GaW5pc2hlZD17dGhpcy5fX2NvbHVtbnNMb2FkZWR9IGRhdGE9e3RoaXMucHJvcHMuY29sdW1uc30gcmVuZGVyPXt0aGlzLl9fcmVuZGVyfSAvPlxuXHR9XG59KTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUmVhY3RET00gPSB6bnVpLlJlYWN0RE9NIHx8IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xudmFyIENoZWNrYm94ID0gcmVxdWlyZSgnem51aS1yZWFjdC1zZWxlY3RvcicpLkNoZWNrYm94O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSVENlbGxDaGVja2JveCcsXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRjaGVja2VkOiB0aGlzLnByb3BzLmNoZWNrZWQgfHwgZmFsc2Vcblx0XHR9XG5cdH0sXG5cdF9fb25DaGVja2JveENoYW5nZTogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRpZih0aGlzLnByb3BzLnRoZWFkKSB7XG5cdFx0XHR0aGlzLl9fb25IZWFkQ2hhbmdlKGV2ZW50KTtcblx0XHR9ZWxzZSBpZih0aGlzLnByb3BzLnRib2R5KSB7XG5cdFx0XHR0aGlzLl9fb25Cb2R5Q2hhbmdlKGV2ZW50KTtcblx0XHR9XG5cdH0sXG5cdF9fb25IZWFkQ2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdGNvbnNvbGUubG9nKGV2ZW50LmNoZWNrZWQsIHRoaXMucHJvcHMpO1xuXHR9LFxuXHRfX29uQm9keUNoYW5nZTogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHRjb25zb2xlLmxvZyhldmVudC5jaGVja2VkLCB0aGlzLnByb3BzKTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInpyLXRhYmxlLWNlbGwtY2hlY2tib3hcIj48Q2hlY2tib3ggY2hlY2tlZD17dHJ1ZX0gb25DaGFuZ2U9e3RoaXMuX19vbkNoZWNrYm94Q2hhbmdlfS8+PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBDaGVja2JveDogcmVxdWlyZSgnLi9DaGVja2JveCcpLFxuICAgIC8vQnV0dG9uczogcmVxdWlyZSgnLi9CdXR0b25zJyksXG4gICAgLy9JbnB1dDogcmVxdWlyZSgnLi9JbnB1dCcpLFxuICAgIC8vQ2FsY3VsYXRvcjogcmVxdWlyZSgnLi9DYWxjdWxhdG9yJylcbn07IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgdGFibGU6IHJlcXVpcmUoJy4vdGFibGUvaW5kZXgnKSxcbiAgICBjZWxsOiByZXF1aXJlKCcuL2NlbGwvaW5kZXgnKSxcbiAgICBUYWJsZTogcmVxdWlyZSgnLi9UYWJsZScpLFxuICAgIFRhYmxlRWRpdG9yOiByZXF1aXJlKCcuL1RhYmxlRWRpdG9yJylcbn07IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSVGFibGVDb2xncm91cCcsXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGNvbGdyb3VwPlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0KHRoaXMucHJvcHMuY29sdW1uc3x8W10pLm1hcChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcblx0XHRcdFx0XHRcdHJldHVybiA8Y29sIGtleT17aW5kZXh9IHN0eWxlPXt7IHdpZHRoOiBpdGVtLndpZHRoIH19IC8+O1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdDwvY29sZ3JvdXA+XG5cdFx0KTtcblx0fVxufSk7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgVFJvdyA9IHJlcXVpcmUoJy4vVFJvdycpO1xudmFyIGxvYWRlciA9IHJlcXVpcmUoJ3pudWktcmVhY3QtbG9hZGVyJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJUQm9keScsXG5cdGdldEluaXRpYWxTdGF0ZTpmdW5jdGlvbigpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRhY3RpdmU6IG51bGwsXG5cdFx0XHRjaGVja2VkczogW10sXG5cdFx0XHRjbGFzc05hbWU6ICcnLFxuXHRcdFx0c3R5bGU6IHt9LFxuXHRcdFx0bG9hZGluZzogZmFsc2Vcblx0XHR9XG5cdH0sXG5cdF9fcmVuZGVyTG9hZGluZzogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF9lbGVtZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQodGhpcy5wcm9wcy5sb2FkaW5nUmVuZGVyLCB7XG5cdFx0XHR0Ym9keTogdGhpc1xuXHRcdH0pO1xuXG5cdFx0aWYoX2VsZW1lbnQpe1xuXHRcdCBcdF9lbGVtZW50ID0gPGxvYWRlci5EYXRhTG9hZGVyIGxvYWRlcj1cIndhdmVcIiB0aXRsZT17J0xvYWRpbmcuLi4nfSAvPjtcblx0XHR9XG5cblx0XHR2YXIgX2xvYWRpbmcgPSB6bi5leHRlbmQoeyBjbGFzc05hbWU6ICcnLCBzdHlsZToge30gfSwgdGhpcy5wcm9wcy5sb2FkaW5nKTtcblx0XHRyZXR1cm4gPHRyIGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ0Ym9keS1sb2FkaW5nXCIsIF9sb2FkaW5nLmNsYXNzTmFtZSl9IHN0eWxlPXtfbG9hZGluZy5zdHlsZX0+XG5cdFx0XHQ8dGQgY29sU3Bhbj17dGhpcy5wcm9wcy5jb2x1bW5zLmxlbmd0aH0+e19lbGVtZW50fTwvdGQ+XG5cdFx0PC90cj47XG5cdH0sXG5cdF9fcmVuZGVyRW1wdHk6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMuZW1wdHlSZW5kZXIsIHtcblx0XHRcdHRib2R5OiB0aGlzXG5cdFx0fSk7XG5cblx0XHRpZighX2VsZW1lbnQpe1xuXHRcdCBcdF9lbGVtZW50ID0gPGRpdiBjbGFzc05hbWU9XCJlbXB0eS1jb250ZW50XCI+Tm8gRGF0YS48L2Rpdj47XG5cdFx0fVxuXHRcdHZhciBfZW1wdHkgPSB6bi5leHRlbmQoeyBjbGFzc05hbWU6ICcnLCBzdHlsZToge30gfSwgdGhpcy5wcm9wcy5lbXB0eSk7XG5cdFx0cmV0dXJuIDx0ciBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwidGJvZHktZW1wdHlcIiwgX2VtcHR5LmNsYXNzTmFtZSl9IHN0eWxlPXtfZW1wdHkuc3R5bGV9PlxuXHRcdFx0PHRkIGNvbFNwYW49e3RoaXMucHJvcHMuY29sdW1ucy5sZW5ndGh9PntfZWxlbWVudH08L3RkPlxuXHRcdDwvdHI+O1xuXHR9LFxuXHRfX29uUm93Q2xpY2s6IGZ1bmN0aW9uIChldmVudCkge1xuXHRcdHZhciBfZGF0YSA9IGV2ZW50LmRhdGE7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRhY3RpdmU6IF9kYXRhLnRyb3cucHJvcHMuZGF0YVxuXHRcdH0pO1xuXHRcdGV2ZW50LnRib2R5ID0gdGhpcztcblx0XHR0aGlzLnByb3BzLm9uUm93Q2xpY2sgJiYgdGhpcy5wcm9wcy5vblJvd0NsaWNrKGV2ZW50KTtcblx0fSxcblx0X19vbkNlbGxDbGljazogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHRldmVudC50Ym9keSA9IHRoaXM7XG5cdFx0dGhpcy5wcm9wcy5vbkNlbGxDbGljayAmJiB0aGlzLnByb3BzLm9uQ2VsbENsaWNrKGV2ZW50KTtcblx0fSxcblx0X19yZW5kZXJSb3c6IGZ1bmN0aW9uIChpdGVtLCBpbmRleCl7XG5cdFx0aWYoIXpuLmlzKGl0ZW0sICdvYmplY3QnKSkgeyByZXR1cm4gbnVsbDt9XG5cdFx0dmFyIF90ZW1wID0gdGhpcy5wcm9wcy5lYWNoUm93RGF0YSAmJiB0aGlzLnByb3BzLmVhY2hSb3dEYXRhKGl0ZW0sIGluZGV4KTtcblx0XHRpZihfdGVtcCAmJiB6bi5pcyhfdGVtcCwgJ29iamVjdCcpKXtcblx0XHRcdGl0ZW0gPSBfdGVtcDtcblx0XHR9XG5cdFx0dmFyIF9lbGVtZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQodGhpcy5wcm9wcy5yb3dSZW5kZXIsIHtcblx0XHRcdGRhdGE6IGl0ZW0sXG5cdFx0XHRyb3dJbmRleDogaW5kZXgsXG5cdFx0XHR0Ym9keTogdGhpc1xuXHRcdH0pO1xuXG5cdFx0aWYoX2VsZW1lbnQpe1xuXHRcdFx0cmV0dXJuIF9lbGVtZW50O1xuXHRcdH1cblxuXHRcdHJldHVybiA8VFJvdyBrZXk9e2luZGV4fSB7Li4udGhpcy5wcm9wcy5yb3d9IFxuXHRcdFx0XHRcdGNlbGw9e3RoaXMucHJvcHMuY2VsbH1cblx0XHRcdFx0XHRjZWxsUmVuZGVyPXt0aGlzLnByb3BzLmNlbGxSZW5kZXJ9XG5cdFx0XHRcdFx0Y29sdW1ucz17dGhpcy5wcm9wcy5jb2x1bW5zfSBcblx0XHRcdFx0XHR0Ym9keT17dGhpc31cblx0XHRcdFx0XHRkYXRhPXtpdGVtfSBcblx0XHRcdFx0XHRhY3RpdmU9e3RoaXMuc3RhdGUuYWN0aXZlID09IGl0ZW19IFxuXHRcdFx0XHRcdGNoZWNrZWQ9e3RoaXMuc3RhdGUuY2hlY2tlZHMuaW5kZXhPZihpdGVtKSAhPT0gLTF9IFxuXHRcdFx0XHRcdG9uUm93Q2xpY2s9e3RoaXMuX19vblJvd0NsaWNrfVxuXHRcdFx0XHRcdG9uQ2VsbENsaWNrPXt0aGlzLl9fb25DZWxsQ2xpY2t9IC8+O1xuXHR9LFxuXHRfX3JlbmRlckRhdGE6IGZ1bmN0aW9uICgpe1xuXHRcdGlmKHRoaXMucHJvcHMuZGF0YSA9PSBudWxsIHx8ICh0aGlzLnByb3BzLmRhdGEgJiYgIXRoaXMucHJvcHMuZGF0YS5sZW5ndGgpKXtcblx0XHRcdHJldHVybiB0aGlzLl9fcmVuZGVyRW1wdHkoKTtcblx0XHR9XG5cdFx0cmV0dXJuIDw+XG5cdFx0XHR7XG5cdFx0XHRcdHRoaXMucHJvcHMuZGF0YS5tYXAodGhpcy5fX3JlbmRlclJvdylcblx0XHRcdH1cblx0XHQ8Lz47XG5cdH0sXG5cdF9fcmVuZGVyOiBmdW5jdGlvbiAoKXtcblx0XHRpZih0aGlzLnByb3BzLmxvYWRpbmcgfHwgdGhpcy5zdGF0ZS5sb2FkaW5nKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5fX3JlbmRlckxvYWRpbmcoKTtcblx0XHR9ZWxzZXtcblx0XHRcdHJldHVybiB0aGlzLl9fcmVuZGVyRGF0YSgpO1xuXHRcdH1cblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8dGJvZHkgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXRhYmxlLXRib2R5XCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lLCB0aGlzLnN0YXRlLmNsYXNzTmFtZSl9IHN0eWxlPXt6bnVpLnJlYWN0LnN0eWxlKHRoaXMucHJvcHMuc3R5bGUsIHRoaXMuc3RhdGUuc3R5bGUpfT5cblx0XHRcdFx0eyB0aGlzLl9fcmVuZGVyKCkgfVxuXHRcdFx0PC90Ym9keT5cblx0XHQpO1xuXHR9XG59KTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSZWFjdERPTSA9IHpudWkuUmVhY3RET00gfHwgcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJUQ2VsbCcsXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRjbGFzc05hbWU6ICcnLFxuXHRcdFx0c3R5bGU6IHt9LFxuXHRcdFx0ZGlzYWJsZWQ6IHRoaXMucHJvcHMuZGlzYWJsZWQsXG5cdFx0XHRjaGVja2VkOiB0aGlzLnByb3BzLmNoZWNrZWQsXG5cdFx0XHRhY3RpdmU6IHRoaXMucHJvcHMuYWN0aXZlXG5cdFx0fVxuXHR9LFxuXHRfX3JlbmRlckNlbGxDb250ZW50OiBmdW5jdGlvbiAoKXtcblx0XHRpZih0aGlzLnByb3BzLmNoaWxkcmVuKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbjtcblx0XHR9XG5cdFx0XG5cdFx0dmFyIF92YWx1ZSA9IG51bGw7XG5cdFx0aWYodGhpcy5wcm9wcy5kYXRhICYmIHRoaXMucHJvcHMubmFtZSkge1xuXHRcdFx0X3ZhbHVlID0gdGhpcy5wcm9wcy5kYXRhW3RoaXMucHJvcHMubmFtZV07XG5cdFx0fVxuXG5cdFx0dmFyIF9yZW5kZXIgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudCh0aGlzLnByb3BzLnJlbmRlciB8fCB0aGlzLnByb3BzLmJvZHksIHtcblx0XHRcdGNlbGxJbmRleDogdGhpcy5wcm9wcy5jZWxsSW5kZXgsIFxuXHRcdFx0Y29sdW1uOiB0aGlzLnByb3BzLmNvbHVtbixcblx0XHRcdGRhdGE6IHRoaXMucHJvcHMuZGF0YSxcblx0XHRcdHZhbHVlOiBfdmFsdWUsXG5cdFx0XHR0Y2VsbDogdGhpcyxcblx0XHRcdHRyb3c6IHRoaXMucHJvcHMudHJvdyxcblx0XHRcdHRib2R5OiB0aGlzLnByb3BzLnRib2R5XG5cdFx0fSk7XG5cdFx0XG5cdFx0aWYoX3JlbmRlcil7XG5cdFx0XHRyZXR1cm4gX3JlbmRlcjtcblx0XHR9XG5cblx0XHRyZXR1cm4gX3ZhbHVlO1xuXHR9LFxuXHRfX2NlbGxDbGljazogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHRldmVudC5kYXRhID0ge1xuXHRcdFx0dGQ6IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpLFxuXHRcdFx0dGNlbGw6IHRoaXNcblx0XHR9O1xuXHRcdHRoaXMucHJvcHMub25DbGljayAmJiB0aGlzLnByb3BzLm9uQ2xpY2soZXZlbnQpO1xuXHRcdHRoaXMucHJvcHMub25DZWxsQ2xpY2sgJiYgdGhpcy5wcm9wcy5vbkNlbGxDbGljayhldmVudCk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHRkIGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci10YWJsZS10Y2VsbFwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSwgdGhpcy5zdGF0ZS5jbGFzc05hbWUpfSBzdHlsZT17em51aS5yZWFjdC5zdHlsZSh0aGlzLnByb3BzLnN0eWxlLCB0aGlzLnN0YXRlLnN0eWxlKX1cdFxuXHRcdFx0XHRkYXRhLWRpc2FibGVkPXt0aGlzLnN0YXRlLmRpc2FibGVkfVxuXHRcdFx0XHRkYXRhLWNoZWNrZWQ9e3RoaXMuc3RhdGUuY2hlY2tlZH1cblx0XHRcdFx0ZGF0YS1hY3RpdmU9e3RoaXMuc3RhdGUuYWN0aXZlfVxuXHRcdFx0XHRvbkNsaWNrPXt0aGlzLl9fY2VsbENsaWNrfSA+XG5cdFx0XHRcdHt0aGlzLl9fcmVuZGVyQ2VsbENvbnRlbnQoKX1cblx0XHRcdDwvdGQ+XG5cdFx0KTtcblx0fVxufSk7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgZmlsdGVyID0gcmVxdWlyZSgnem51aS1yZWFjdC1maWx0ZXInKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOiAnWlJGaWx0ZXInLFxuXHRnZXRJbml0aWFsU3RhdGU6ZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y2xhc3NOYW1lOiAnJyxcblx0XHRcdHN0eWxlOiB7fSxcblx0XHRcdGRhdGE6IHt9XG5cdFx0fVxuXHR9LFxuXHRfX29uRmlsdGVyQ2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdGlmKGV2ZW50Lm5hbWUgJiYgZXZlbnQudmFsdWUpIHtcblx0XHRcdHRoaXMuc3RhdGUuZGF0YVtldmVudC5uYW1lXSA9IHtcblx0XHRcdFx0dmFsdWU6IGV2ZW50LnZhbHVlLFxuXHRcdFx0XHRvcHQ6IGV2ZW50Lm9wdFxuXHRcdFx0fTtcblx0XHR9XG5cdFx0dGhpcy5wcm9wcy5vbkZpbHRlciAmJiB0aGlzLnByb3BzLm9uRmlsdGVyKHRoaXMuc3RhdGUuZGF0YSk7XG5cdH0sXG5cdF9fb25GaWx0ZXJDYW5jZWw6IGZ1bmN0aW9uIChuYW1lKXtcblx0XHRpZihuYW1lICYmIHRoaXMuc3RhdGUuZGF0YSl7XG5cdFx0XHR0aGlzLnN0YXRlLmRhdGFbbmFtZV0gPSBudWxsO1xuXHRcdFx0ZGVsZXRlIHRoaXMuc3RhdGUuZGF0YVtuYW1lXTtcblx0XHR9XG5cdH0sXG5cdF9fcmVuZGVyQ2VsbDogZnVuY3Rpb24gKGNvbHVtbiwgaW5kZXgpe1xuXHRcdGlmKCF6bi5pcyhjb2x1bW4sICdvYmplY3QnKSkgeyByZXR1cm4gbnVsbDsgfVxuXHRcdHZhciBfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMuY2VsbFJlbmRlciwge1xuXHRcdFx0Y29sdW1uOiBjb2x1bW4sXG5cdFx0XHRjZWxsSW5kZXg6IGluZGV4LCBcblx0XHRcdHRmaWx0ZXI6IHRoaXNcblx0XHR9KTtcblx0XHRpZihfZWxlbWVudCl7XG5cdFx0XHRyZXR1cm4gX2VsZW1lbnQ7XG5cdFx0fVxuXHRcdFxuXHRcdHZhciBfY29udGVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KGNvbHVtbi5yZW5kZXIsIHtcblx0XHRcdGNvbHVtbjogY29sdW1uLFxuXHRcdFx0Y2VsbEluZGV4OiBpbmRleCwgXG5cdFx0XHR0ZmlsdGVyOiB0aGlzXG5cdFx0fSk7XG5cblx0XHRpZighX2NvbnRlbnQgJiYgY29sdW1uLmZpbHRlcikge1xuXHRcdFx0X2NvbnRlbnQgPSA8ZmlsdGVyLkZpbHRlckZpZWxkIHsuLi5jb2x1bW4uZmlsdGVyfSBuYW1lPXtjb2x1bW4ubmFtZX0gb25GaWx0ZXJDaGFuZ2U9e3RoaXMuX19vbkZpbHRlckNoYW5nZX0gb25DYW5jZWw9e3RoaXMuX19vbkZpbHRlckNhbmNlbH0gLz47XG5cdFx0fVxuXG5cdFx0dmFyIF9jZWxsID0gem4uZXh0ZW5kKHsgc3R5bGU6IHt9LCBjbGFzc05hbWU6ICcnIH0sIHRoaXMucHJvcHMuY2VsbCk7XG5cdFx0cmV0dXJuIDx0ZCBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd0ZmlsdGVyLWNlbGwnLCBfY2VsbC5jbGFzc05hbWUpfSBzdHlsZT17X2NlbGwuc3R5bGV9PlxuXHRcdFx0eyBfY29udGVudCB9XG5cdFx0PC90ZD47XG5cdH0sXG5cdF9fcmVuZGVyUm93OiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX2VsZW1lbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudCh0aGlzLnByb3BzLnJvd1JlbmRlciwge1xuXHRcdFx0dGZpbHRlcjogdGhpc1xuXHRcdH0pO1xuXHRcdGlmKF9lbGVtZW50KXtcblx0XHRcdHJldHVybiBfZWxlbWVudDtcblx0XHR9XG5cdFx0dmFyIF9yb3cgPSB6bi5leHRlbmQoeyBjbGFzc05hbWU6ICcnLCBzdHlsZToge30gfSwgdGhpcy5wcm9wcy5yb3cpO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8dHIgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInRmaWx0ZXItcm93IHpyLXRhYmxlLXRyb3dcIiwgX3Jvdy5jbGFzc05hbWUpfSBzdHlsZT17X3Jvdy5zdHlsZX0+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHQodGhpcy5wcm9wcy5jb2x1bW5zfHxbXSkubWFwKHRoaXMuX19yZW5kZXJDZWxsKVxuXHRcdFx0XHR9XG5cdFx0XHQ8L3RyPlxuXHRcdCk7XG5cdH0sXG5cdHJlbmRlcjpmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8dGhlYWQgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXRhYmxlLXRmaWx0ZXJcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUsIHRoaXMuc3RhdGUuY2xhc3NOYW1lKX0gc3R5bGU9e3pudWkucmVhY3Quc3R5bGUodGhpcy5wcm9wcy5zdHlsZSwgdGhpcy5zdGF0ZS5zdHlsZSl9PlxuXHRcdFx0XHR7dGhpcy5fX3JlbmRlclJvdygpfVxuXHRcdFx0PC90aGVhZD5cblx0XHQpO1xuXHR9XG59KTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJURm9vdCcsXG5cdF9fcmVuZGVyQ2hpbGRyZW46IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfY29sdW1ucyA9IHRoaXMucHJvcHMuY29sdW1ucyB8fCBbXTtcblx0XHRpZih0aGlzLnByb3BzLmNoaWxkcmVuKXtcblx0XHRcdHJldHVybiA8dHIgY2xhc3NOYW1lPVwidGZvb3Qtcm93XCI+XG5cdFx0XHRcdDx0ZCBjb2xTcGFuPXtfY29sdW1ucy5sZW5ndGh9Pnt0aGlzLnByb3BzLmNoaWxkcmVufTwvdGQ+XG5cdFx0XHQ8L3RyPjtcblx0XHR9ZWxzZXtcblx0XHRcdHJldHVybiB0aGlzLl9fcmVuZGVyUm93KCk7XG5cdFx0fVxuXHR9LFxuXHRfX3JlbmRlckNlbGw6IGZ1bmN0aW9uIChjb2x1bW4sIGluZGV4KXtcblx0XHRpZighem4uaXMoY29sdW1uLCAnb2JqZWN0JykpIHsgcmV0dXJuIG51bGw7IH1cblx0XHR2YXIgX2VsZW1lbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudCh0aGlzLnByb3BzLmNlbGxSZW5kZXIsIHtcblx0XHRcdGNvbHVtbjogY29sdW1uLFxuXHRcdFx0Y2VsbEluZGV4OiBpbmRleCwgXG5cdFx0XHR0Zm9vdDogdGhpc1xuXHRcdH0pO1xuXHRcdGlmKF9lbGVtZW50KXtcblx0XHRcdHJldHVybiBfZWxlbWVudDtcblx0XHR9XG5cblx0XHR2YXIgX2NvbnRlbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudChjb2x1bW4ucmVuZGVyIHx8IGNvbHVtbi5mb290LCB7XG5cdFx0XHRjb2x1bW46IGNvbHVtbixcblx0XHRcdGNlbGxJbmRleDogaW5kZXgsIFxuXHRcdFx0dGZvb3Q6IHRoaXNcblx0XHR9KTtcblxuXHRcdHZhciBfY2VsbCA9IHpuLmV4dGVuZCh7IHN0eWxlOiB7fSwgY2xhc3NOYW1lOiAnJyB9LCB0aGlzLnByb3BzLmNlbGwpO1xuXHRcdHJldHVybiA8dGgga2V5PXtpbmRleH0gY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgndGhlYWQtY2VsbCcsIF9jZWxsLmNsYXNzTmFtZSl9IHN0eWxlPXtfY2VsbC5zdHlsZX0+XG5cdFx0XHR7IF9jb250ZW50IH1cblx0XHQ8L3RoPjtcblx0fSxcblx0X19yZW5kZXJSb3c6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMucm93UmVuZGVyLCB7XG5cdFx0XHR0aGVhZDogdGhpc1xuXHRcdH0pO1xuXHRcdGlmKF9lbGVtZW50KXtcblx0XHRcdHJldHVybiBfZWxlbWVudDtcblx0XHR9XG5cdFx0dmFyIF9yb3cgPSB6bi5leHRlbmQoeyBjbGFzc05hbWU6ICcnLCBzdHlsZToge30gfSwgdGhpcy5wcm9wcy5yb3cpO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8dHIgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInRmb290LXJvd1wiLCBfcm93LmNsYXNzTmFtZSl9IHN0eWxlPXtfcm93LnN0eWxlfT5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdCh0aGlzLnByb3BzLmNvbHVtbnN8fFtdKS5tYXAodGhpcy5fX3JlbmRlckNlbGwpXG5cdFx0XHRcdH1cblx0XHRcdDwvdHI+XG5cdFx0KTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8dGZvb3QgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXRhYmxlLXRmb290XCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9PlxuXHRcdFx0XHR7dGhpcy5fX3JlbmRlckNoaWxkcmVuKCl9XG5cdFx0XHQ8L3Rmb290PlxuXHRcdCk7XG5cdH1cbn0pOyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBUSGVhZFNvcnQgPSByZXF1aXJlKCcuL1RIZWFkU29ydCcpO1xudmFyIHBvcHVwID0gcmVxdWlyZSgnem51aS1yZWFjdC1wb3B1cCcpO1xudmFyIFNWR0ljb24gPSByZXF1aXJlKCd6bnVpLXJlYWN0LWljb24nKS5TVkdJY29uO1xudmFyIGpzb25lZGl0b3IgPSByZXF1aXJlKCdydC1qc29uLWVkaXRvcicpO1xubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidUSGVhZCcsXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNsYXNzTmFtZTogJycsXG5cdFx0XHRzdHlsZToge30sXG5cdFx0XHRzb3J0OiB7fSxcblx0XHRcdGZpbHRlcjoge31cblx0XHR9O1xuXHR9LFxuXHRfX29uQ29sdW1uU29ydDogZnVuY3Rpb24gKHNvcnQsIGNvbHVtbil7XG5cdFx0aWYoY29sdW1uLm5hbWUpIHtcblx0XHRcdHRoaXMuc3RhdGUuc29ydFtjb2x1bW4ubmFtZV0gPSAoc29ydD09J2ZhU29ydEFscGhhRG93bicgPyAnZGVzYycgOiAnYXNjJyk7XG5cdFx0fVxuXHRcdHRoaXMucHJvcHMub25Tb3J0ICYmIHRoaXMucHJvcHMub25Tb3J0KHRoaXMuc3RhdGUuc29ydCk7XG5cdH0sXG5cdF9fb25Db2x1bW5FZGl0b3JDaGFuZ2U6IGZ1bmN0aW9uIChkYXRhLCBjaGlsZCwgcm9vdCwgaW5kZXgpe1xuICAgICAgICB2YXIgX3Jvb3QgPSByb290IHx8IGNoaWxkO1xuXHRcdHRoaXMucHJvcHMub25Db2x1bW5DaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkNvbHVtbkNoYW5nZShfcm9vdC5zdGF0ZS52YWx1ZSwgaW5kZXgpO1xuICAgIH0sXG5cdF9faWNvbkNsaWNrUmVuZGVyOiBmdW5jdGlvbiAoY29sdW1uLCBpbmRleCl7XG5cdFx0cmV0dXJuIDxkaXYgc3R5bGU9e3twYWRkaW5nOiAxMCwgbWF4SGVpZ2h0OiA1MDAsIHdpZHRoOiA0MDAsIG92ZXJmbG93OiAnYXV0byd9fT5cblx0XHRcdDxqc29uZWRpdG9yLmZvcm0ub2JqZWN0IGZvbGQ9e2ZhbHNlfVxuXHRcdFx0XHRkaXNwbGF5Q2xvc3VyZT17dHJ1ZX0gXG5cdFx0XHRcdGRpc3BsYXlJdGVtQ291bnQ9e3RydWV9IFxuXHRcdFx0XHRsYWJlbD17J0NvbHVtbid9IFxuXHRcdFx0XHR2YWx1ZT17Y29sdW1ufSBcblx0XHRcdFx0b25DaGFuZ2U9eyhkYXRhLCBjaGlsZCwgcm9vdCk9PnRoaXMuX19vbkNvbHVtbkVkaXRvckNoYW5nZShkYXRhLCBjaGlsZCwgcm9vdCwgaW5kZXgpfSAvPlxuXHRcdDwvZGl2Pjtcblx0fSxcblx0X19yZW5kZXJDZWxsOiBmdW5jdGlvbiAoY29sdW1uLCBpbmRleCl7XG5cdFx0aWYoIXpuLmlzKGNvbHVtbiwgJ29iamVjdCcpKSB7IHJldHVybiBudWxsOyB9XG5cdFx0dmFyIF9lbGVtZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQodGhpcy5wcm9wcy5jZWxsUmVuZGVyLCB7XG5cdFx0XHRjb2x1bW46IGNvbHVtbixcblx0XHRcdGNlbGxJbmRleDogaW5kZXgsIFxuXHRcdFx0dGhlYWQ6IHRoaXNcblx0XHR9KTtcblx0XHRpZihfZWxlbWVudCl7XG5cdFx0XHRyZXR1cm4gX2VsZW1lbnQ7XG5cdFx0fVxuXG5cdFx0dmFyIF9jb250ZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQoY29sdW1uLnJlbmRlciB8fCBjb2x1bW4uaGVhZCwge1xuXHRcdFx0Y29sdW1uOiBjb2x1bW4sXG5cdFx0XHRjZWxsSW5kZXg6IGluZGV4LCBcblx0XHRcdHRoZWFkOiB0aGlzXG5cdFx0fSk7XG5cdFx0aWYoIV9jb250ZW50KSB7XG5cdFx0XHRfY29udGVudCA9IDxkaXYgY2xhc3NOYW1lPVwiY2VsbC1sYWJlbFwiPlxuXHRcdFx0XHR7IGNvbHVtbi5sYWJlbCB9XG5cdFx0XHRcdHsgXG5cdFx0XHRcdFx0ISFjb2x1bW4uZWRpdGFibGUgJiYgPHBvcHVwLkRyb3Bkb3duIFxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY2VsbC1lZGl0b3JcIiBcblx0XHRcdFx0XHRcdHBvcG92ZXI9e3tcblx0XHRcdFx0XHRcdFx0cmVuZGVyOiB0aGlzLl9faWNvbkNsaWNrUmVuZGVyKGNvbHVtbiwgaW5kZXgpLFxuXHRcdFx0XHRcdFx0XHRjbG9zZWFibGU6IHRydWVcblx0XHRcdFx0XHRcdH19ID5cblx0XHRcdFx0XHRcdDxTVkdJY29uIGljb249XCJmYUVkaXRcIiAvPlxuXHRcdFx0XHRcdDwvcG9wdXAuRHJvcGRvd24+XG5cdFx0XHRcdH1cblx0XHRcdDwvZGl2Pjtcblx0XHR9XG5cblx0XHR2YXIgX2NlbGwgPSB6bi5leHRlbmQoeyBzdHlsZToge30sIGNsYXNzTmFtZTogJycgfSwgdGhpcy5wcm9wcy5jZWxsKTtcblx0XHRyZXR1cm4gPHRoIGtleT17aW5kZXh9IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3RoZWFkLWNlbGwnLCBfY2VsbC5jbGFzc05hbWUpfSBzdHlsZT17X2NlbGwuc3R5bGV9PlxuXHRcdFx0eyBfY29udGVudCB9XG5cdFx0XHR7ICEhY29sdW1uLnNvcnQgJiYgPFRIZWFkU29ydCBjbGFzc05hbWU9XCJjZWxsLXNvcnRcIiBvblNvcnQ9eyhzb3J0KT0+dGhpcy5fX29uQ29sdW1uU29ydChzb3J0LCBjb2x1bW4pfSAvPn1cblx0XHQ8L3RoPjtcblx0fSxcblx0X19yZW5kZXJSb3c6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMucm93UmVuZGVyLCB7XG5cdFx0XHR0aGVhZDogdGhpc1xuXHRcdH0pO1xuXHRcdGlmKF9lbGVtZW50KXtcblx0XHRcdHJldHVybiBfZWxlbWVudDtcblx0XHR9XG5cdFx0dmFyIF9yb3cgPSB6bi5leHRlbmQoeyBjbGFzc05hbWU6ICcnLCBzdHlsZToge30gfSwgdGhpcy5wcm9wcy5yb3cpO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8dHIgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInRoZWFkLXJvd1wiLCBfcm93LmNsYXNzTmFtZSl9IHN0eWxlPXtfcm93LnN0eWxlfT5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdCh0aGlzLnByb3BzLmNvbHVtbnN8fFtdKS5tYXAodGhpcy5fX3JlbmRlckNlbGwpXG5cdFx0XHRcdH1cblx0XHRcdDwvdHI+XG5cdFx0KTtcblx0fSxcblx0cmVuZGVyOmZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDx0aGVhZCBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItdGFibGUtdGhlYWRcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUsIHRoaXMuc3RhdGUuY2xhc3NOYW1lKX0gc3R5bGU9e3pudWkucmVhY3Quc3R5bGUodGhpcy5wcm9wcy5zdHlsZSwgdGhpcy5zdGF0ZS5zdHlsZSl9PlxuXHRcdFx0XHR7dGhpcy5fX3JlbmRlclJvdygpfVxuXHRcdFx0PC90aGVhZD5cblx0XHQpO1xuXHR9XG59KTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBTVkdJY29uID0gcmVxdWlyZSgnem51aS1yZWFjdC1pY29uJykuU1ZHSWNvbjtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUlRIZWFkU29ydCcsXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHNvcnQ6ICdmYVNvcnQnLFxuXHRcdH1cblx0fSxcblx0X19pY29uQ2xpY2s6IGZ1bmN0aW9uICgpe1xuXHRcdGlmKHRoaXMuc3RhdGUuc29ydCA9PSAnZmFTb3J0Jyl7XG5cdFx0XHR0aGlzLnN0YXRlLnNvcnQgPSAnZmFTb3J0QWxwaGFEb3duJztcblx0XHR9IGVsc2UgaWYodGhpcy5zdGF0ZS5zb3J0ID09ICdmYVNvcnRBbHBoYURvd24nKXtcblx0XHRcdHRoaXMuc3RhdGUuc29ydCA9ICdmYVNvcnRBbHBoYVVwJztcblx0XHR9IGVsc2UgaWYodGhpcy5zdGF0ZS5zb3J0ID09ICdmYVNvcnRBbHBoYVVwJyl7XG5cdFx0XHR0aGlzLnN0YXRlLnNvcnQgPSAnZmFTb3J0QWxwaGFEb3duJztcblx0XHR9XG5cdFx0dGhpcy5mb3JjZVVwZGF0ZSgpO1xuXHRcdHRoaXMucHJvcHMub25Tb3J0ICYmIHRoaXMucHJvcHMub25Tb3J0KHRoaXMuc3RhdGUuc29ydCk7XG5cdH0sXG5cdHJlbmRlcjpmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLXRoZWFkLXNvcnQnLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfT5cblx0XHRcdFx0PFNWR0ljb24gb25DbGljaz17dGhpcy5fX2ljb25DbGlja30gaWNvbj17dGhpcy5zdGF0ZS5zb3J0fSAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUmVhY3RET00gPSB6bnVpLlJlYWN0RE9NIHx8IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xudmFyIFRDZWxsID0gcmVxdWlyZSgnLi9UQ2VsbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSVFJvdycsXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y2xhc3NOYW1lOiAnJyxcblx0XHRcdHN0eWxlOiB7fVxuXHRcdH1cblx0fSxcblx0X19nZXRUYXJnZXRURDogZnVuY3Rpb24gKHRhcmdldCkge1xuXHRcdGlmKHRhcmdldC50YWdOYW1lIT09J1REJyl7XG5cdFx0XHRyZXR1cm4gdGhpcy5fX2dldFRhcmdldFREKHRhcmdldC5wYXJlbnROb2RlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRhcmdldDtcblx0XHR9XG5cdH0sXG5cdF9fb25Sb3dDbGljazogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHR2YXIgX3RkID0gdGhpcy5fX2dldFRhcmdldFREKGV2ZW50LnRhcmdldCksXG5cdFx0XHRfdHIgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcblx0XHRldmVudC5kYXRhID0ge1xuXHRcdFx0dGQ6IF90ZCxcblx0XHRcdHRyOiBfdHIsXG5cdFx0XHR0cm93OiB0aGlzXG5cdFx0fTtcblx0XHR0aGlzLnByb3BzLm9uQ2xpY2sgJiYgdGhpcy5wcm9wcy5vbkNsaWNrKGV2ZW50KTtcblx0XHR0aGlzLnByb3BzLm9uUm93Q2xpY2sgJiYgdGhpcy5wcm9wcy5vblJvd0NsaWNrKGV2ZW50KTtcblx0fSxcblx0X19jZWxsUmVuZGVyOiBmdW5jdGlvbiAoY29sdW1uLCBpbmRleCl7XG5cdFx0aWYoIXpuLmlzKGNvbHVtbiwgJ29iamVjdCcpKSB7IHJldHVybiBudWxsO31cblx0XHR2YXIgX3Byb3BzID0gem4uZXh0ZW5kKHtcblx0XHRcdGNvbHVtbjogY29sdW1uLFxuXHRcdFx0dHJvdzogdGhpcyxcblx0XHRcdGNlbGxJbmRleDogaW5kZXgsXG5cdFx0XHRkYXRhOiB0aGlzLnByb3BzLmRhdGEsXG5cdFx0XHR0Ym9keTogdGhpcy5wcm9wcy50Ym9keVxuXHRcdH0sIHRoaXMucHJvcHMuY2VsbCwgY29sdW1uKTtcblx0XHR2YXIgX2VsZW1lbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudCh0aGlzLnByb3BzLmNlbGxSZW5kZXIsIF9wcm9wcyk7XG5cblx0XHRpZihfZWxlbWVudCl7XG5cdFx0XHRyZXR1cm4gX2VsZW1lbnQ7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIDxUQ2VsbCBrZXk9e2luZGV4fSB7Li4uX3Byb3BzfSBvbkNlbGxDbGljaz17dGhpcy5wcm9wcy5vbkNlbGxDbGlja30gY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgndHJvdy1jZWxsJywgX3Byb3BzLmNsYXNzTmFtZSl9IC8+O1xuXHR9LFxuXHRyZW5kZXI6ZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHRyIGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLXRhYmxlLXRyb3cnLCB0aGlzLnByb3BzLmNsYXNzTmFtZSwgdGhpcy5zdGF0ZS5jbGFzc05hbWUpfSBzdHlsZT17em51aS5yZWFjdC5zdHlsZSh0aGlzLnByb3BzLnN0eWxlLCB0aGlzLnN0YXRlLnN0eWxlKX1cblx0XHRcdFx0ZGF0YS1hY3RpdmU9e3RoaXMucHJvcHMuYWN0aXZlfSBcblx0XHRcdFx0ZGF0YS1jaGVja2VkPXt0aGlzLnByb3BzLmNoZWNrZWR9IFxuXHRcdFx0XHRvbkNsaWNrPXt0aGlzLl9fb25Sb3dDbGlja30+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHQodGhpcy5wcm9wcy5jb2x1bW5zfHxbXSkubWFwKHRoaXMuX19jZWxsUmVuZGVyKVxuXHRcdFx0XHR9XG5cdFx0XHQ8L3RyPlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgQ29sZ3JvdXA6IHJlcXVpcmUoJy4vQ29sZ3JvdXAnKSxcbiAgICBURmlsdGVyOiByZXF1aXJlKCcuL1RGaWx0ZXInKSxcbiAgICBUQm9keTogcmVxdWlyZSgnLi9UQm9keScpLFxuICAgIFRDZWxsOiByZXF1aXJlKCcuL1RDZWxsJyksXG4gICAgVEZvb3Q6IHJlcXVpcmUoJy4vVEZvb3QnKSxcbiAgICBUSGVhZDogcmVxdWlyZSgnLi9USGVhZCcpLFxuICAgIFRSb3c6IHJlcXVpcmUoJy4vVFJvdycpXG59OyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiUmVhY3RcIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJSZWFjdERPTVwiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcImpzb25lZGl0b3JcIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJmaWx0ZXJcIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJpY29uXCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiaW5wdXRcIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJsb2FkZXJcIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJwYWdlclwiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcInBvcHVwXCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wic2VsZWN0b3JcIl07IH0oKSk7Il0sInNvdXJjZVJvb3QiOiIifQ==