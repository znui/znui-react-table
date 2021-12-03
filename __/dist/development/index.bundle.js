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
      dataIndexEnabled: false,
      fixedLayout: false,
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
      fixedColumns: this.props.fixedColumns,
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
      loadingEnabled: this.props.loadingEnabled || false,
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
        item.fixedStyles = this.__fixedStyles(index);
      }

      return item;
    }.bind(this));

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
      }, this.props.colgroup)), (this.props.tbody || this.props.data) && this.__renderTBody(columns))), /*#__PURE__*/React.createElement("div", {
        className: "fixed-layout-footer"
      }, !!this.props.tfoot && /*#__PURE__*/React.createElement(table.TFoot, _extends({
        context: this.props.context,
        columns: columns
      }, this.props.tfoot, {
        table: this
      })), this.props.childrenRender && this.props.childrenRender(columns, this), this.props.children));
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
    event.stopPropagation();

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
      width: 80,
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
        var _this4 = this;

        var _data = argv.data;
        return /*#__PURE__*/React.createElement(selector.UncontrolCheckbox, {
          style: {
            justifyContent: 'center'
          },
          checked: this.state.checkeds.indexOf(_data[_valueKey]) !== -1,
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
      rowIndex: index,
      cell: this.props.cell,
      cellRender: this.props.cellRender,
      columns: this.props.columns,
      fixedColumns: this.props.fixedColumns,
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
      } else if (!event.value && !filterField.props.emptyValueEnabled) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vUG9wdXBUYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9UYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9UYWJsZUVkaXRvci5qcyIsIndlYnBhY2s6Ly8vLi9UYWJsZVBhZ2VyLmpzIiwid2VicGFjazovLy8uL2NlbGwvQ2hlY2tib3guanMiLCJ3ZWJwYWNrOi8vLy4vY2VsbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi90YWJsZS9Db2xncm91cC5qcyIsIndlYnBhY2s6Ly8vLi90YWJsZS9UQm9keS5qcyIsIndlYnBhY2s6Ly8vLi90YWJsZS9UQm9keUVtcHR5LmpzIiwid2VicGFjazovLy8uL3RhYmxlL1RDZWxsLmpzIiwid2VicGFjazovLy8uL3RhYmxlL1RGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdGFibGUvVEZvb3QuanMiLCJ3ZWJwYWNrOi8vLy4vdGFibGUvVEhlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vdGFibGUvVEhlYWRTb3J0LmpzIiwid2VicGFjazovLy8uL3RhYmxlL1RSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vdGFibGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdERPTVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpbHRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImlucHV0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianNvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvYWRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhZ2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicG9wdXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZWxlY3RvclwiIl0sIm5hbWVzIjpbIlJlYWN0Iiwiem51aSIsInJlcXVpcmUiLCJUYWJsZVBhZ2VyIiwic2VsZWN0b3IiLCJtb2R1bGUiLCJleHBvcnRzIiwiY3JlYXRlQ2xhc3MiLCJkaXNwbGF5TmFtZSIsImdldERlZmF1bHRQcm9wcyIsInRleHRLZXkiLCJ2YWx1ZUtleSIsImdldEluaXRpYWxTdGF0ZSIsInRleHQiLCJwcm9wcyIsInZhbHVlIiwiZ2V0VGV4dCIsInN0YXRlIiwic2V0VGV4dCIsInNldFN0YXRlIiwiZ2V0VmFsdWUiLCJzZXRWYWx1ZSIsIl9fb25Sb3dDbGljayIsImV2ZW50IiwiZHJvcGRvd25FdmVudCIsIl9kYXRhIiwiZGF0YSIsInRyb3ciLCJwb3B1cFNlbGVjdCIsInNldERhdGEiLCJkcm9wZG93biIsImNsb3NlUG9wb3ZlciIsIm9uQ2hhbmdlIiwiX19wb3B1cFJlbmRlciIsImZpbHRlciIsIm9uUm93Q2xpY2siLCJyZW5kZXIiLCJyZWFjdCIsImNsYXNzbmFtZSIsImNsYXNzTmFtZSIsInN0eWxlIiwidGFibGUiLCJkYXRhSW5kZXhFbmFibGVkIiwiZml4ZWRMYXlvdXQiLCJyb3dLZXkiLCJjb2x1bW5zIiwiY2hlY2tlZHMiLCJjb21wb25lbnREaWRNb3VudCIsIm9uQ29tcG9uZW50RGlkTW91bnQiLCJfX3NvcnRGdW5jdGlvbiIsIm5leHQiLCJwcmV2Iiwia2V5IiwiX3NvcnQiLCJzb3J0RnVuY3Rpb24iLCJfX29uU29ydCIsInNvcnQiLCJmb3JjZVVwZGF0ZSIsIl9fb25GaWx0ZXIiLCJmaWx0ZXJzIiwiX3JldHVybiIsIm9uRmlsdGVyQ2hhbmdlIiwiem4iLCJpc1pOT2JqZWN0IiwiX2FyZ3YiLCJyZWZyZXNoIiwiX19vblRCb2R5RWFjaFJvd0RhdGEiLCJpbmRleCIsInRib2R5IiwiX3ZhbHVlS2V5IiwiY2hlY2tib3giLCJfdmFsdWUiLCJpbmRleE9mIiwicHVzaCIsIl9fdGJvZHlEYXRhUmVuZGVyIiwibGVuZ3RoIiwiY29udGV4dCIsImZpeGVkQ29sdW1ucyIsIl9fdGJvZHlMb2FkaW5nUmVuZGVyIiwiX19vblRIZWFkQ29sdW1uQ2hhbmdlIiwiX190Ym9keURhdGFMb2FkZWQiLCJvbkRhdGFMb2FkZWQiLCJpcyIsInJlc3VsdCIsIl9fb25EYXRhQ3JlYXRlZCIsImxpZnljeWNsZSIsIm9uRGF0YUNyZWF0ZWQiLCJjYWxsYmFjayIsInJlZnJlc2hIZWFkZXJzIiwiX19maXhlZFN0eWxlcyIsIl9jb2x1bW5zIiwiX3dpZHRoIiwiaSIsImZpeGVkIiwid2lkdGgiLCJsZWZ0IiwiX19yZW5kZXJUQm9keSIsIl9yZXN1bHQiLCJvbkRhdGFJbml0aWFsIiwibG9hZGluZ0VuYWJsZWQiLCJyZXNwb25zZUhhbmRsZXIiLCJfX29uRml4ZWRMYXlvdXRCb2R5U2Nyb2xsIiwiZSIsIl9sYXlvdXRIZWFkZXIiLCJzY3JvbGxMZWZ0IiwidGFyZ2V0IiwiX19yZW5kZXIiLCJtYXAiLCJpdGVtIiwiZml4ZWRTdHlsZXMiLCJiaW5kIiwicmVmIiwiY2VsbFBhZGRpbmciLCJjZWxsU3BhY2luZyIsImF0dHJzIiwiY2FwdGlvbiIsImNvbGdyb3VwIiwia2V5TWFwcGluZyIsInRoZWFkIiwidGZpbHRlciIsInRmb290IiwiY2hpbGRyZW5SZW5kZXIiLCJjaGlsZHJlbiIsIl9fcm93SGVhZENoZWNrYm94Q2hlY2tlZCIsIl9jaGVja2VkcyIsIl9fb25Sb3dIZWFkQ2hlY2tib3hDaGFuZ2UiLCJzdG9wUHJvcGFnYXRpb24iLCJjaGVja2VkIiwic3BsaWNlIiwib25DaGVja2JveENoYW5nZSIsIl9faW5pdENoZWNrYm94IiwiX2NoZWNrYm94IiwiaGVhZCIsImFyZ3YiLCJfdGFibGUiLCJqdXN0aWZ5Q29udGVudCIsInV1aWQiLCJib2R5IiwidHlwZSIsImV4dGVuZCIsInVuc2hpZnQiLCJfX2luaXRJbmRleENvbHVtbiIsImxhYmVsIiwibmFtZSIsInRleHRBbGlnbiIsInJvd0luZGV4IiwiX19jb2x1bW5zTG9hZGVkIiwiX3RlbXAiLCJfY29sdW1uSXRlcmF0b3IiLCJjb2x1bW5JdGVyYXRvciIsImNvbHVtbiIsImRlZXBBc3NpZ24iLCJvbkNvbHVtbnNMb2FkZWQiLCJfX29uQ29sdW1uRGF0YUNyZWF0ZWQiLCJsaWZlY3ljbGUiLCJvbkNvbHVtbnNDcmVhdGVkIiwiZ2V0RGF0YSIsInJlbW92ZVJvd0RhdGEiLCJ1cGRhdGVSb3dEYXRhIiwiX2luZGV4Iiwib25Db2x1bW5Mb2FkaW5nIiwib25Db2x1bW5Mb2FkRXJyb3IiLCJUYWJsZSIsImlucHV0IiwiX19jZWxsQ2hhbmdlIiwidGNlbGwiLCJfX2NvbHVtbkJvZHlSZW5kZXIiLCJfX2NvbHVtbkl0ZXJhdG9yIiwib25EYXRhQ2hhbmdlIiwiYWRkUm93IiwicGFnZXIiLCJjb3VudCIsImN1cnJlbnQiLCJ0b3RhbCIsInBhZ2VJbmRleCIsInBhZ2VTaXplIiwic2V0IiwiX3R5cGUiLCJzZXRQYWdlSW5kZXgiLCJfX29uRGF0YUluaXRpYWwiLCJfX2hhbmRsZVBhZ2VDaGFuZ2VkIiwibmV3UGFnZSIsIm9uUGFnZUNoYW5nZWQiLCJfX2hhbmRsZVBhZ2VTaXplQ2hhbmdlIiwiX19yZW5kZXJQYWdlciIsIl9jb2x1bW5TaXplIiwiX3N0YXRlIiwiX2VsZW1lbnQiLCJfcGFnZXJQcm9wcyIsIm9uUGFnZVNpemVDaGFuZ2UiLCJfQ29tcG9uZW50IiwiUGFnZXIiLCJwYXRoIiwid2luZG93IiwiY29tcG9uZW50IiwiY3JlYXRlUmVhY3RFbGVtZW50IiwicGFnZXJSZW5kZXIiLCJfbWV0aG9kIiwibWV0aG9kIiwiX3BhcmFtcyIsIl9rZXlNYXBzIiwia2V5TWFwcyIsInBhcmFtcyIsIl9fb25EYXRhTG9hZGVkIiwienhueiIsImNvZGUiLCJjb25zb2xlIiwiZXJyb3IiLCJkZXRhaWwiLCJfcGFnZXJDb3VudCIsIk1hdGgiLCJjZWlsIiwiX19vbkZpbHRlckNoYW5nZSIsIkNoZWNrYm94IiwiX19vbkNoZWNrYm94Q2hhbmdlIiwiX19vbkhlYWRDaGFuZ2UiLCJfX29uQm9keUNoYW5nZSIsImxvZyIsImNlbGwiLCJQb3B1cFRhYmxlIiwiVGFibGVFZGl0b3IiLCJfa2V5TWFwcGluZyIsIlRSb3ciLCJsb2FkZXIiLCJfcGFnZVNpemUiLCJhY3RpdmUiLCJwYWdlQ291bnQiLCJsb2FkaW5nIiwiX19nZXREYXRhIiwiX3BhZ2VJbmRleCIsInNsaWNlIiwibWluIiwiX19yZW5kZXJMb2FkaW5nIiwibG9hZGluZ1JlbmRlciIsIl9sb2FkaW5nIiwiX19yZW5kZXJFbXB0eSIsImVtcHR5UmVuZGVyIiwiX2VtcHR5IiwiZW1wdHkiLCJfX29uQ2VsbENsaWNrIiwib25DZWxsQ2xpY2siLCJfX3JlbmRlclJvdyIsImVhY2hSb3dEYXRhIiwicm93UmVuZGVyIiwiX3Jvd0tleSIsIl9rZXkiLCJyb3ciLCJjZWxsUmVuZGVyIiwiX19wYWdlQ2hhbmdlIiwiX19wYWdlc1JlbmRlciIsIl9wYWdlQ291bnQiLCJfcGFnZXMiLCJfX3JlbmRlckRhdGEiLCJSZWFjdERPTSIsImRpc2FibGVkIiwiX19yZW5kZXJDZWxsQ29udGVudCIsIl9yZW5kZXIiLCJjZWxsSW5kZXgiLCJfX2NlbGxDbGljayIsIl90aGlzIiwiZmluZFRERE9NIiwiZmluZERPTU5vZGUiLCJvbkNsaWNrIiwiX2NvbHVtbiIsImJvZHlDbGFzc05hbWUiLCJib2R5U3R5bGUiLCJmaWx0ZXJGaWVsZCIsIm9wdCIsInVuZGVmaW5lZCIsImVtcHR5VmFsdWVFbmFibGVkIiwib25GaWx0ZXIiLCJfX29uRmlsdGVyQ2FuY2VsIiwiX19yZW5kZXJDZWxsIiwiX2NvbnRlbnQiLCJfZmlsdGVyIiwicHJvdG90eXBlIiwiY2FsbCIsIl9jZWxsIiwiX3JvdyIsIl9fcmVuZGVyQ2hpbGRyZW4iLCJmb290IiwiVEhlYWRTb3J0IiwicG9wdXAiLCJ6cmpzb24iLCJfX29uQ29sdW1uU29ydCIsIm9uU29ydCIsIl9fb25Db2x1bW5FZGl0b3JDaGFuZ2UiLCJjaGlsZCIsInJvb3QiLCJfcm9vdCIsIm9uQ29sdW1uQ2hhbmdlIiwiX19pY29uQ2xpY2tSZW5kZXIiLCJwYWRkaW5nIiwibWF4SGVpZ2h0Iiwib3ZlcmZsb3ciLCJfbWFwcGluZyIsIl9sYWJlbEtleSIsIl9sYWJlbCIsInJlcXVpcmVkIiwiZWRpdGFibGUiLCJjbG9zZWFibGUiLCJfX3JlbmRlckljb24iLCJfX2ljb25DbGljayIsIlRDZWxsIiwiX19nZXRUYXJnZXRURCIsInRhZ05hbWUiLCJwYXJlbnROb2RlIiwiX3RkIiwiZmluZFRSRE9NIiwidGQiLCJfX2NlbGxSZW5kZXIiLCJfcHJvcHMiLCJfX2ZpeGVkV2lkdGgiLCJfY2xhc3NOYW1lIiwiX3N0eWxlIiwiQ29sZ3JvdXAiLCJURmlsdGVyIiwiVEJvZHkiLCJUQm9keUVtcHR5IiwiVEZvb3QiLCJUSGVhZCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsSUFBSUEsS0FBSyxHQUFHQyxJQUFJLENBQUNELEtBQUwsSUFBY0UsbUJBQU8sQ0FBQyxvQkFBRCxDQUFqQzs7QUFDQSxJQUFJQyxVQUFVLEdBQUdELG1CQUFPLENBQUMscUNBQUQsQ0FBeEI7O0FBQ0EsSUFBSUUsUUFBUSxHQUFHRixtQkFBTyxDQUFDLGdEQUFELENBQXRCOztBQUNB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LENBQVcrQixPQUFYLElBQW9CLEVBQXJCLEVBQXlCOEQsR0FBekIsQ0FBNkIsS0FBSzJNLFlBQWxDLENBTkYsQ0FERDtBQVdBO0FBOUVpQyxDQUFsQixDQUFqQixDOzs7Ozs7Ozs7OztBQ0pBalQsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2JxVCxVQUFRLEVBQUV6VCxtQkFBTyxDQUFDLHVDQUFELENBREo7QUFFYjBULFNBQU8sRUFBRTFULG1CQUFPLENBQUMscUNBQUQsQ0FGSDtBQUdiMlQsT0FBSyxFQUFFM1QsbUJBQU8sQ0FBQyxpQ0FBRCxDQUhEO0FBSWI0VCxZQUFVLEVBQUU1VCxtQkFBTyxDQUFDLDJDQUFELENBSk47QUFLYjZTLE9BQUssRUFBRTdTLG1CQUFPLENBQUMsaUNBQUQsQ0FMRDtBQU1iNlQsT0FBSyxFQUFFN1QsbUJBQU8sQ0FBQyxpQ0FBRCxDQU5EO0FBT2I4VCxPQUFLLEVBQUU5VCxtQkFBTyxDQUFDLGlDQUFELENBUEQ7QUFRYjROLE1BQUksRUFBRTVOLG1CQUFPLENBQUMsK0JBQUQ7QUFSQSxDQUFqQixDOzs7Ozs7Ozs7OztBQ0FBLGFBQWEsZ0NBQWdDLEVBQUUsSTs7Ozs7Ozs7Ozs7QUNBL0MsYUFBYSxtQ0FBbUMsRUFBRSxJOzs7Ozs7Ozs7OztBQ0FsRCxhQUFhLGlDQUFpQyxFQUFFLEk7Ozs7Ozs7Ozs7O0FDQWhELGFBQWEsZ0NBQWdDLEVBQUUsSTs7Ozs7Ozs7Ozs7QUNBL0MsYUFBYSwrQkFBK0IsRUFBRSxJOzs7Ozs7Ozs7OztBQ0E5QyxhQUFhLGlDQUFpQyxFQUFFLEk7Ozs7Ozs7Ozs7O0FDQWhELGFBQWEsZ0NBQWdDLEVBQUUsSTs7Ozs7Ozs7Ozs7QUNBL0MsYUFBYSxnQ0FBZ0MsRUFBRSxJOzs7Ozs7Ozs7OztBQ0EvQyxhQUFhLG1DQUFtQyxFQUFFLEkiLCJmaWxlIjoiLi9kaXN0L2RldmVsb3BtZW50L2luZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgVGFibGVQYWdlciA9IHJlcXVpcmUoJy4vVGFibGVQYWdlcicpO1xudmFyIHNlbGVjdG9yID0gcmVxdWlyZSgnem51aS1yZWFjdC1zZWxlY3RvcicpO1xubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOiAnWlJQb3B1cFRhYmxlJyxcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dGV4dEtleTogJ3p4bnpfTGFiZWwnLFxuXHRcdFx0dmFsdWVLZXk6ICd6eG56X1VVSUQnXG5cdFx0fTtcblx0fSxcbiAgICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHRleHQ6IHRoaXMucHJvcHMudGV4dCxcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLnByb3BzLnZhbHVlXG5cdFx0fTtcblx0fSxcbiAgICBnZXRUZXh0OiBmdW5jdGlvbiAoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUudGV4dDtcbiAgICB9LFxuICAgIHNldFRleHQ6IGZ1bmN0aW9uICh0ZXh0KXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0ZXh0OiB0ZXh0XG4gICAgICAgIH0pO1xuICAgIH0sXG5cdGdldFZhbHVlOiBmdW5jdGlvbiAoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUudmFsdWU7XG4gICAgfSxcbiAgICBzZXRWYWx1ZTogZnVuY3Rpb24gKHZhbHVlKXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBfX29uUm93Q2xpY2s6IGZ1bmN0aW9uIChldmVudCwgZHJvcGRvd25FdmVudCl7XG4gICAgICAgIHZhciBfZGF0YSA9IGV2ZW50LmRhdGEudHJvdy5wcm9wcy5kYXRhO1xuICAgICAgICBldmVudC5kYXRhID0gX2RhdGE7XG4gICAgICAgIGV2ZW50LnZhbHVlID0gX2RhdGFbdGhpcy5wcm9wcy52YWx1ZUtleV07XG5cdFx0ZXZlbnQudGV4dCA9IF9kYXRhW3RoaXMucHJvcHMudGV4dEtleV07XG4gICAgICAgIGRyb3Bkb3duRXZlbnQucG9wdXBTZWxlY3Quc2V0RGF0YShldmVudC52YWx1ZSwgZXZlbnQudGV4dCk7XG4gICAgICAgIGRyb3Bkb3duRXZlbnQuZHJvcGRvd24uY2xvc2VQb3BvdmVyKCk7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUoZXZlbnQudmFsdWUpO1xuICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlICYmIHRoaXMucHJvcHMub25DaGFuZ2UoZXZlbnQsIGRyb3Bkb3duRXZlbnQpO1xuICAgIH0sXG5cdF9fcG9wdXBSZW5kZXI6IGZ1bmN0aW9uIChkcm9wZG93bkV2ZW50KXtcblx0XHRyZXR1cm4gPFRhYmxlUGFnZXJcbiAgICAgICAgICAgIHp4bno9e3RydWV9XG4gICAgICAgICAgICBjb2xncm91cD17e319XG4gICAgICAgICAgICBjZWxsUGFkZGluZz17NX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInpyLXRhYmxlLWNsYXNzLW5vcm1hbFwiXG4gICAgICAgICAgICBmaXhlZD17dHJ1ZX1cbiAgICAgICAgICAgIHRoZWFkPXt7XG4gICAgICAgICAgICAgICAgZmlsdGVyOiB0cnVlXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgdGZpbHRlcj17e319XG4gICAgICAgICAgICB0Ym9keT17e1xuICAgICAgICAgICAgICAgIG9uUm93Q2xpY2s6IChldmVudCk9PnRoaXMuX19vblJvd0NsaWNrKGV2ZW50LCBkcm9wZG93bkV2ZW50KVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHBhZ2VJbmRleD17MX1cbiAgICAgICAgICAgIHBhZ2VTaXplPXs1fSB7Li4udGhpcy5wcm9wc30gLz47XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHNlbGVjdG9yLlBvcHVwU2VsZWN0IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLXRhYmxlLXBvcHVwLXRhYmxlJywgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0gcG9wdXBSZW5kZXI9e3RoaXMuX19wb3B1cFJlbmRlcn0gLz5cblx0XHQpO1xuXHR9XG59KTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgdGFibGUgPSByZXF1aXJlKCcuL3RhYmxlL2luZGV4Jyk7XG52YXIgc2VsZWN0b3IgPSByZXF1aXJlKCd6bnVpLXJlYWN0LXNlbGVjdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJUYWJsZScsXG5cdGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGRhdGFJbmRleEVuYWJsZWQ6IGZhbHNlLFxuXHRcdFx0Zml4ZWRMYXlvdXQ6IGZhbHNlLFxuXHRcdFx0dmFsdWVLZXk6ICd6eG56X1VVSUQnLFxuXHRcdFx0cm93S2V5OiAnenhuel9VVUlEJ1xuXHRcdH07XG5cdH0sXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGRhdGE6IFtdLCBcblx0XHRcdGNvbHVtbnM6IFtdLFxuXHRcdFx0Y2hlY2tlZHM6IHRoaXMucHJvcHMuY2hlY2tlZHMgfHwgW11cblx0XHR9O1xuXHR9LFxuXHRjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24oKXtcblx0XHR0aGlzLnByb3BzLm9uQ29tcG9uZW50RGlkTW91bnQgJiYgdGhpcy5wcm9wcy5vbkNvbXBvbmVudERpZE1vdW50KHRoaXMpO1xuXHR9LFxuXHRfX3NvcnRGdW5jdGlvbjogZnVuY3Rpb24gKG5leHQsIHByZXYsIGtleSwgX3NvcnQpe1xuXHRcdGlmKHRoaXMucHJvcHMuc29ydEZ1bmN0aW9uKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5wcm9wcy5zb3J0RnVuY3Rpb24obmV4dCwgcHJldiwga2V5LCBfc29ydCk7XG5cdFx0fVxuXHRcdGlmKF9zb3J0PT0nZGVzYycpe1xuXHRcdFx0aWYobmV4dFtrZXldID4gcHJldltrZXldKXtcblx0XHRcdFx0cmV0dXJuIDE7XG5cdFx0XHR9ZWxzZSBpZihuZXh0W2tleV0gPT0gcHJldltrZXldKXtcblx0XHRcdFx0cmV0dXJuIDA7XG5cdFx0XHR9ZWxzZSBpZihuZXh0W2tleV0gPCBwcmV2W2tleV0pe1xuXHRcdFx0XHRyZXR1cm4gLTE7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKF9zb3J0PT0nYXNjJyl7XG5cdFx0XHRpZihuZXh0W2tleV0gPCBwcmV2W2tleV0pe1xuXHRcdFx0XHRyZXR1cm4gMTtcblx0XHRcdH1lbHNlIGlmKG5leHRba2V5XSA9PSBwcmV2W2tleV0pe1xuXHRcdFx0XHRyZXR1cm4gMDtcblx0XHRcdH1lbHNlIGlmKG5leHRba2V5XSA+IHByZXZba2V5XSl7XG5cdFx0XHRcdHJldHVybiAtMTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdF9fb25Tb3J0OiBmdW5jdGlvbiAoc29ydCl7XG5cdFx0dmFyIF9zb3J0ID0gbnVsbDtcblx0XHRmb3IodmFyIGtleSBpbiBzb3J0KXtcblx0XHRcdF9zb3J0ID0gc29ydFtrZXldXG5cdFx0XHR0aGlzLnN0YXRlLmRhdGEgPSB0aGlzLnN0YXRlLmRhdGEuc29ydCgobmV4dCwgcHJldikgPT4gdGhpcy5fX3NvcnRGdW5jdGlvbihuZXh0LCBwcmV2LCBrZXksIF9zb3J0KSk7XG5cdFx0fVxuXG5cdFx0dGhpcy5mb3JjZVVwZGF0ZSgpO1xuXHR9LFxuXHRfX29uRmlsdGVyOiBmdW5jdGlvbiAoZmlsdGVycyl7XG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLm9uRmlsdGVyQ2hhbmdlICYmIHRoaXMucHJvcHMub25GaWx0ZXJDaGFuZ2UoZmlsdGVycywgdGhpcy5zdGF0ZS5kYXRhLCB0aGlzKTtcblx0XHRpZihfcmV0dXJuICE9PSBmYWxzZSl7XG5cdFx0XHRpZih0aGlzLmRhdGEgJiYgem4uaXNaTk9iamVjdCh0aGlzLmRhdGEpKSB7XG5cdFx0XHRcdGlmKCF0aGlzLmRhdGEuX2FyZ3YuZGF0YSkge1xuXHRcdFx0XHRcdHRoaXMuZGF0YS5fYXJndi5kYXRhID0ge307XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5kYXRhLl9hcmd2LmRhdGEuZmlsdGVycyA9IGZpbHRlcnM7XG5cdFx0XHRcdHRoaXMuZGF0YS5yZWZyZXNoKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHRfX29uVEJvZHlFYWNoUm93RGF0YTogZnVuY3Rpb24gKGRhdGEsIGluZGV4LCB0Ym9keSl7XG5cdFx0dmFyIF92YWx1ZUtleSA9IHRoaXMucHJvcHMudmFsdWVLZXkgfHwgJ3p4bnpfVVVJRCc7XG5cdFx0aWYodGhpcy5wcm9wcy5jaGVja2JveCAmJiB0aGlzLnByb3BzLnZhbHVlICYmIF92YWx1ZUtleSkge1xuXHRcdFx0dmFyIF92YWx1ZSA9IGRhdGFbX3ZhbHVlS2V5XTtcblx0XHRcdGlmKHRoaXMucHJvcHMudmFsdWUuaW5kZXhPZihfdmFsdWUpIT0tMSl7XG5cdFx0XHRcdHRoaXMuc3RhdGUuY2hlY2tlZHMucHVzaChfdmFsdWUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0X190Ym9keURhdGFSZW5kZXI6IGZ1bmN0aW9uIChjb2x1bW5zKXtcblx0XHRpZighdGhpcy5zdGF0ZS5kYXRhLmxlbmd0aCl7XG5cdFx0XHRyZXR1cm4gPHRhYmxlLlRCb2R5RW1wdHkgY29udGV4dD17dGhpcy5wcm9wcy5jb250ZXh0fSB7Li4udGhpcy5wcm9wcy50Ym9keX0gY29sdW1ucz17Y29sdW1uc30gZGF0YT17dGhpcy5zdGF0ZS5kYXRhfSB0YWJsZT17dGhpc30gLz47XG5cdFx0fVxuXHRcdHJldHVybiA8dGFibGUuVEJvZHkgcm93S2V5PXt0aGlzLnByb3BzLnJvd0tleX0gY29udGV4dD17dGhpcy5wcm9wcy5jb250ZXh0fSBlYWNoUm93RGF0YT17dGhpcy5fX29uVEJvZHlFYWNoUm93RGF0YX0gey4uLnRoaXMucHJvcHMudGJvZHl9IGNvbHVtbnM9e2NvbHVtbnN9IGZpeGVkQ29sdW1ucz17dGhpcy5wcm9wcy5maXhlZENvbHVtbnN9IGRhdGE9e3RoaXMuc3RhdGUuZGF0YX0gdGFibGU9e3RoaXN9IC8+O1xuXHR9LFxuXHRfX3Rib2R5TG9hZGluZ1JlbmRlcjogZnVuY3Rpb24gKGNvbHVtbnMpe1xuXHRcdHJldHVybiA8dGFibGUuVEJvZHkgcm93S2V5PXt0aGlzLnByb3BzLnJvd0tleX0gY29udGV4dD17dGhpcy5wcm9wcy5jb250ZXh0fSB7Li4udGhpcy5wcm9wcy50Ym9keX0gY29sdW1ucz17Y29sdW1uc30gZml4ZWRDb2x1bW5zPXt0aGlzLnByb3BzLmZpeGVkQ29sdW1uc30gbG9hZGluZz17dHJ1ZX0gdGFibGU9e3RoaXN9IC8+O1xuXHR9LFxuXHRfX29uVEhlYWRDb2x1bW5DaGFuZ2U6IGZ1bmN0aW9uIChkYXRhLCBpbmRleCl7XG5cdFx0aWYodGhpcy5zdGF0ZS5jb2x1bW5zKXtcblx0XHRcdHRoaXMuc3RhdGUuY29sdW1uc1tpbmRleF0gPSBkYXRhO1xuXHRcdFx0dGhpcy5mb3JjZVVwZGF0ZSgpO1xuXHRcdH1cblx0fSxcblx0X190Ym9keURhdGFMb2FkZWQ6IGZ1bmN0aW9uIChkYXRhKSB7XG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLm9uRGF0YUxvYWRlZCAmJiB0aGlzLnByb3BzLm9uRGF0YUxvYWRlZChkYXRhLCB0aGlzKTtcblx0XHRpZihfcmV0dXJuICE9PSBmYWxzZSl7XG5cdFx0XHRpZih6bi5pcyhkYXRhLCAnb2JqZWN0JykgJiYgZGF0YS5yZXN1bHQpe1xuXHRcdFx0XHRkYXRhID0gZGF0YS5yZXN1bHQ7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgZGF0YTogZGF0YSB9KTtcblx0XHR9XG5cdH0sXG5cdF9fb25EYXRhQ3JlYXRlZDogZnVuY3Rpb24gKGRhdGEsIGxpZnljeWNsZSl7XG5cdFx0dGhpcy5kYXRhID0gZGF0YTtcblx0XHR0aGlzLnByb3BzLm9uRGF0YUNyZWF0ZWQgJiYgdGhpcy5wcm9wcy5vbkRhdGFDcmVhdGVkKGRhdGEsIHRoaXMsIGxpZnljeWNsZSk7XG5cdH0sXG5cdHJlZnJlc2g6IGZ1bmN0aW9uIChjYWxsYmFjayl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRjaGVja2VkczogW11cblx0XHR9KTtcblx0XHRpZih0aGlzLmRhdGEpe1xuXHRcdFx0dGhpcy5kYXRhLnJlZnJlc2goKTtcblx0XHR9XG5cdFx0Y2FsbGJhY2sgJiYgY2FsbGJhY2soKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXHRyZWZyZXNoSGVhZGVyczogZnVuY3Rpb24gKCl7XG5cdFx0aWYodGhpcy5jb2x1bW5zKXtcblx0XHRcdHRoaXMuY29sdW1ucy5yZWZyZXNoKCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cdHNldERhdGE6IGZ1bmN0aW9uIChkYXRhKXtcblx0XHR0aGlzLnNldFN0YXRlKHsgZGF0YTogZGF0YSB9KTtcblx0fSxcblx0X19maXhlZFN0eWxlczogZnVuY3Rpb24gKGluZGV4KXtcblx0XHR2YXIgX2NvbHVtbnMgPSB0aGlzLnN0YXRlLmNvbHVtbnN8fFtdLCBfd2lkdGggPSAwO1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBpbmRleDsgaSsrKXtcblx0XHRcdGlmKF9jb2x1bW5zW2ldLmZpeGVkKSB7XG5cdFx0XHRcdF93aWR0aCArPSAoX2NvbHVtbnNbaV0ud2lkdGggfHwgMCkgLSAxO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHRsZWZ0OiBfd2lkdGggLSAxXG5cdFx0fTtcblx0fSxcblx0X19yZW5kZXJUQm9keTogZnVuY3Rpb24gKGNvbHVtbnMpe1xuXHRcdHZhciBfZGF0YSA9IHRoaXMucHJvcHMuZGF0YSB8fCB0aGlzLnByb3BzLnRib2R5LmRhdGE7XG5cdFx0dmFyIF9yZXN1bHQgPSB0aGlzLnByb3BzLm9uRGF0YUluaXRpYWwgJiYgdGhpcy5wcm9wcy5vbkRhdGFJbml0aWFsKF9kYXRhLCB0aGlzKTtcblx0XHRpZihfcmVzdWx0KXtcblx0XHRcdF9kYXRhID0gX3Jlc3VsdDtcblx0XHR9XG5cdFx0cmV0dXJuIDx6bnVpLnJlYWN0LkRhdGFMaWZlY3ljbGUgZGF0YT17X2RhdGF9IFxuXHRcdFx0XHRcdGRhdGFSZW5kZXI9eygpPT50aGlzLl9fdGJvZHlEYXRhUmVuZGVyKGNvbHVtbnMpfSBcblx0XHRcdFx0XHRsb2FkaW5nRW5hYmxlZD17dGhpcy5wcm9wcy5sb2FkaW5nRW5hYmxlZHx8ZmFsc2V9XG5cdFx0XHRcdFx0bG9hZGluZ1JlbmRlcj17KCk9PnRoaXMuX190Ym9keUxvYWRpbmdSZW5kZXIoY29sdW1ucyl9XG5cdFx0XHRcdFx0cmVzcG9uc2VIYW5kbGVyPXt0aGlzLnByb3BzLnJlc3BvbnNlSGFuZGxlcn1cblx0XHRcdFx0XHRvbkRhdGFDcmVhdGVkPXt0aGlzLl9fb25EYXRhQ3JlYXRlZH1cblx0XHRcdFx0XHRvbkZpbmlzaGVkPXt0aGlzLl9fdGJvZHlEYXRhTG9hZGVkfSAvPjtcblx0fSxcblx0X19vbkZpeGVkTGF5b3V0Qm9keVNjcm9sbDogZnVuY3Rpb24gKGUpe1xuXHRcdHRoaXMuX2xheW91dEhlYWRlci5zY3JvbGxMZWZ0ID0gZS50YXJnZXQuc2Nyb2xsTGVmdDtcblx0fSxcblx0X19yZW5kZXI6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBjb2x1bW5zID0gdGhpcy5zdGF0ZS5jb2x1bW5zO1xuXHRcdGNvbHVtbnMgPSBjb2x1bW5zLm1hcChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpe1xuXHRcdFx0aWYoaXRlbS5maXhlZCkge1xuXHRcdFx0XHRpdGVtLmZpeGVkU3R5bGVzID0gdGhpcy5fX2ZpeGVkU3R5bGVzKGluZGV4KTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBpdGVtO1xuXHRcdH0uYmluZCh0aGlzKSk7XG5cdFx0aWYodGhpcy5wcm9wcy5maXhlZExheW91dCkge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ6ci10YWJsZS1maXhlZC1sYXlvdXRcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZpeGVkLWxheW91dC1oZWFkZXJcIiByZWY9eyhyZWYpPT50aGlzLl9sYXlvdXRIZWFkZXIgPSByZWZ9PlxuXHRcdFx0XHRcdFx0PHRhYmxlIGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci10YWJsZVwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IFxuXHRcdFx0XHRcdFx0XHRzdHlsZT17em51aS5yZWFjdC5zdHlsZSh0aGlzLnByb3BzLnN0eWxlLCB7IHdpZHRoOiB0aGlzLnByb3BzLndpZHRoIH0pfSBcblx0XHRcdFx0XHRcdFx0ZGF0YS1maXhlZD17dGhpcy5wcm9wcy5maXhlZH0gXHRcblx0XHRcdFx0XHRcdFx0Y2VsbFBhZGRpbmc9e3RoaXMucHJvcHMuY2VsbFBhZGRpbmcgfHwgMH0gXG5cdFx0XHRcdFx0XHRcdGNlbGxTcGFjaW5nPXt0aGlzLnByb3BzLmNlbGxTcGFjaW5nIHx8IDB9IHsuLi50aGlzLnByb3BzLmF0dHJzfT5cblx0XHRcdFx0XHRcdFx0eyAhIXRoaXMucHJvcHMuY2FwdGlvbiAmJiA8Y2FwdGlvbiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2FwdGlvbi5jbGFzc05hbWV9IHN0eWxlPXt0aGlzLnByb3BzLmNhcHRpb24uc3R5bGV9Pnt0aGlzLnByb3BzLmNhcHRpb24ucmVuZGVyfTwvY2FwdGlvbj4gfVxuXHRcdFx0XHRcdFx0XHR7ICEhdGhpcy5wcm9wcy5jb2xncm91cCAmJiA8dGFibGUuQ29sZ3JvdXAgY29udGV4dD17dGhpcy5wcm9wcy5jb250ZXh0fSBrZXlNYXBwaW5nPXt0aGlzLnByb3BzLmtleU1hcHBpbmd9IGNvbHVtbnM9e2NvbHVtbnN9IHsuLi50aGlzLnByb3BzLmNvbGdyb3VwfSAvPiB9XG5cdFx0XHRcdFx0XHRcdHsgISF0aGlzLnByb3BzLnRoZWFkICYmIDx0YWJsZS5USGVhZCBjb250ZXh0PXt0aGlzLnByb3BzLmNvbnRleHR9IG9uU29ydD17dGhpcy5fX29uU29ydH0gb25Db2x1bW5DaGFuZ2U9e3RoaXMuX19vblRIZWFkQ29sdW1uQ2hhbmdlfSBjb2x1bW5zPXtjb2x1bW5zfSBrZXlNYXBwaW5nPXt0aGlzLnByb3BzLmtleU1hcHBpbmd9IHsuLi50aGlzLnByb3BzLnRoZWFkfSB0YWJsZT17dGhpc30gLz59XG5cdFx0XHRcdFx0XHRcdHsgISF0aGlzLnByb3BzLnRmaWx0ZXIgJiYgPHRhYmxlLlRGaWx0ZXIgY29udGV4dD17dGhpcy5wcm9wcy5jb250ZXh0fSBvbkZpbHRlcj17dGhpcy5fX29uRmlsdGVyfSBjb2x1bW5zPXtjb2x1bW5zfSB7Li4udGhpcy5wcm9wcy50ZmlsdGVyfSB0YWJsZT17dGhpc30gLz59XG5cdFx0XHRcdFx0XHQ8L3RhYmxlPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQtbGF5b3V0LWJvZHlcIiBvblNjcm9sbD17dGhpcy5fX29uRml4ZWRMYXlvdXRCb2R5U2Nyb2xsfT5cblx0XHRcdFx0XHRcdDx0YWJsZSBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItdGFibGVcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBcblx0XHRcdFx0XHRcdFx0c3R5bGU9e3pudWkucmVhY3Quc3R5bGUodGhpcy5wcm9wcy5zdHlsZSwgeyB3aWR0aDogdGhpcy5wcm9wcy53aWR0aCB9KX0gXG5cdFx0XHRcdFx0XHRcdGRhdGEtZml4ZWQ9e3RoaXMucHJvcHMuZml4ZWR9IFx0XG5cdFx0XHRcdFx0XHRcdGNlbGxQYWRkaW5nPXt0aGlzLnByb3BzLmNlbGxQYWRkaW5nIHx8IDB9IFxuXHRcdFx0XHRcdFx0XHRjZWxsU3BhY2luZz17dGhpcy5wcm9wcy5jZWxsU3BhY2luZyB8fCAwfSB7Li4udGhpcy5wcm9wcy5hdHRyc30+XG5cdFx0XHRcdFx0XHRcdHsgISF0aGlzLnByb3BzLmNhcHRpb24gJiYgPGNhcHRpb24gY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNhcHRpb24uY2xhc3NOYW1lfSBzdHlsZT17dGhpcy5wcm9wcy5jYXB0aW9uLnN0eWxlfT57dGhpcy5wcm9wcy5jYXB0aW9uLnJlbmRlcn08L2NhcHRpb24+IH1cblx0XHRcdFx0XHRcdFx0eyAhIXRoaXMucHJvcHMuY29sZ3JvdXAgJiYgPHRhYmxlLkNvbGdyb3VwIGNvbnRleHQ9e3RoaXMucHJvcHMuY29udGV4dH0ga2V5TWFwcGluZz17dGhpcy5wcm9wcy5rZXlNYXBwaW5nfSBjb2x1bW5zPXtjb2x1bW5zfSB7Li4udGhpcy5wcm9wcy5jb2xncm91cH0gLz4gfVxuXHRcdFx0XHRcdFx0XHR7ICh0aGlzLnByb3BzLnRib2R5IHx8IHRoaXMucHJvcHMuZGF0YSkgJiYgdGhpcy5fX3JlbmRlclRCb2R5KGNvbHVtbnMpIH1cblx0XHRcdFx0XHRcdDwvdGFibGU+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmaXhlZC1sYXlvdXQtZm9vdGVyXCI+XG5cdFx0XHRcdFx0XHR7ICEhdGhpcy5wcm9wcy50Zm9vdCAmJiA8dGFibGUuVEZvb3QgY29udGV4dD17dGhpcy5wcm9wcy5jb250ZXh0fSBjb2x1bW5zPXtjb2x1bW5zfSB7Li4udGhpcy5wcm9wcy50Zm9vdH0gdGFibGU9e3RoaXN9IC8+fVxuXHRcdFx0XHRcdFx0eyB0aGlzLnByb3BzLmNoaWxkcmVuUmVuZGVyICYmIHRoaXMucHJvcHMuY2hpbGRyZW5SZW5kZXIoY29sdW1ucywgdGhpcykgfVxuXHRcdFx0XHRcdFx0eyB0aGlzLnByb3BzLmNoaWxkcmVuIH1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8dGFibGUgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXRhYmxlXCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gXG5cdFx0XHRcdHN0eWxlPXt6bnVpLnJlYWN0LnN0eWxlKHRoaXMucHJvcHMuc3R5bGUsIHsgd2lkdGg6IHRoaXMucHJvcHMud2lkdGggfSl9IFxuXHRcdFx0XHRkYXRhLWZpeGVkPXt0aGlzLnByb3BzLmZpeGVkfSBcdFxuXHRcdFx0XHRjZWxsUGFkZGluZz17dGhpcy5wcm9wcy5jZWxsUGFkZGluZyB8fCAwfSBcblx0XHRcdFx0Y2VsbFNwYWNpbmc9e3RoaXMucHJvcHMuY2VsbFNwYWNpbmcgfHwgMH0gey4uLnRoaXMucHJvcHMuYXR0cnN9PlxuXHRcdFx0XHR7ICEhdGhpcy5wcm9wcy5jYXB0aW9uICYmIDxjYXB0aW9uIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jYXB0aW9uLmNsYXNzTmFtZX0gc3R5bGU9e3RoaXMucHJvcHMuY2FwdGlvbi5zdHlsZX0+e3RoaXMucHJvcHMuY2FwdGlvbi5yZW5kZXJ9PC9jYXB0aW9uPiB9XG5cdFx0XHRcdHsgISF0aGlzLnByb3BzLmNvbGdyb3VwICYmIDx0YWJsZS5Db2xncm91cCBjb250ZXh0PXt0aGlzLnByb3BzLmNvbnRleHR9IGtleU1hcHBpbmc9e3RoaXMucHJvcHMua2V5TWFwcGluZ30gY29sdW1ucz17Y29sdW1uc30gey4uLnRoaXMucHJvcHMuY29sZ3JvdXB9IC8+IH1cblx0XHRcdFx0eyAhIXRoaXMucHJvcHMudGhlYWQgJiYgPHRhYmxlLlRIZWFkIGNvbnRleHQ9e3RoaXMucHJvcHMuY29udGV4dH0gb25Tb3J0PXt0aGlzLl9fb25Tb3J0fSBvbkNvbHVtbkNoYW5nZT17dGhpcy5fX29uVEhlYWRDb2x1bW5DaGFuZ2V9IGNvbHVtbnM9e2NvbHVtbnN9IGtleU1hcHBpbmc9e3RoaXMucHJvcHMua2V5TWFwcGluZ30gey4uLnRoaXMucHJvcHMudGhlYWR9IHRhYmxlPXt0aGlzfSAvPn1cblx0XHRcdFx0eyAhIXRoaXMucHJvcHMudGZpbHRlciAmJiA8dGFibGUuVEZpbHRlciBjb250ZXh0PXt0aGlzLnByb3BzLmNvbnRleHR9IG9uRmlsdGVyPXt0aGlzLl9fb25GaWx0ZXJ9IGNvbHVtbnM9e2NvbHVtbnN9IHsuLi50aGlzLnByb3BzLnRmaWx0ZXJ9IHRhYmxlPXt0aGlzfSAvPn1cblx0XHRcdFx0eyAodGhpcy5wcm9wcy50Ym9keSB8fCB0aGlzLnByb3BzLmRhdGEpICYmIHRoaXMuX19yZW5kZXJUQm9keShjb2x1bW5zKSB9XG5cdFx0XHRcdHsgISF0aGlzLnByb3BzLnRmb290ICYmIDx0YWJsZS5URm9vdCBjb250ZXh0PXt0aGlzLnByb3BzLmNvbnRleHR9IGNvbHVtbnM9e2NvbHVtbnN9IHsuLi50aGlzLnByb3BzLnRmb290fSB0YWJsZT17dGhpc30gLz59XG5cdFx0XHRcdHsgdGhpcy5wcm9wcy5jaGlsZHJlblJlbmRlciAmJiB0aGlzLnByb3BzLmNoaWxkcmVuUmVuZGVyKGNvbHVtbnMsIHRoaXMpIH1cblx0XHRcdFx0eyB0aGlzLnByb3BzLmNoaWxkcmVuIH1cblx0XHRcdDwvdGFibGU+XG5cdFx0KTtcblx0fSxcblx0X19yb3dIZWFkQ2hlY2tib3hDaGVja2VkOiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX2NoZWNrZWRzID0gdGhpcy5zdGF0ZS5jaGVja2VkcywgX3ZhbHVlS2V5ID0gdGhpcy5wcm9wcy52YWx1ZUtleSB8fCAnenhuel9VVUlEJztcblx0XHRpZighX2NoZWNrZWRzLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuXHRcdGZvcih2YXIgaXRlbSBvZiB0aGlzLnN0YXRlLmRhdGEpIHtcblx0XHRcdGlmKF9jaGVja2Vkcy5pbmRleE9mKGl0ZW1bX3ZhbHVlS2V5XSkgPT0gLTEpe1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0sXG5cdF9fb25Sb3dIZWFkQ2hlY2tib3hDaGFuZ2U6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0dmFyIF92YWx1ZUtleSA9IHRoaXMucHJvcHMudmFsdWVLZXkgfHwgJ3p4bnpfVVVJRCc7XG5cdFx0aWYoZXZlbnQuY2hlY2tlZCkge1xuXHRcdFx0Zm9yKHZhciBpdGVtIG9mIHRoaXMuc3RhdGUuZGF0YSkge1xuXHRcdFx0XHRpZih0aGlzLnN0YXRlLmNoZWNrZWRzLmluZGV4T2YoaXRlbVtfdmFsdWVLZXldKSA9PSAtMSl7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZS5jaGVja2Vkcy5wdXNoKGl0ZW1bX3ZhbHVlS2V5XSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9ZWxzZXtcblx0XHRcdGZvcih2YXIgaXRlbSBvZiB0aGlzLnN0YXRlLmRhdGEpIHtcblx0XHRcdFx0aWYodGhpcy5zdGF0ZS5jaGVja2Vkcy5pbmRleE9mKGl0ZW1bX3ZhbHVlS2V5XSkgIT0gLTEpe1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUuY2hlY2tlZHMuc3BsaWNlKHRoaXMuc3RhdGUuY2hlY2tlZHMuaW5kZXhPZihpdGVtW192YWx1ZUtleV0pLCAxKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHR0aGlzLmZvcmNlVXBkYXRlKCk7XG5cdFx0dGhpcy5wcm9wcy5vbkNoZWNrYm94Q2hhbmdlICYmIHRoaXMucHJvcHMub25DaGVja2JveENoYW5nZSh0aGlzLnN0YXRlLmNoZWNrZWRzLCB0aGlzKTtcblx0fSxcblx0X19pbml0Q2hlY2tib3g6IGZ1bmN0aW9uIChjb2x1bW5zKXtcblx0XHR2YXIgX3ZhbHVlS2V5ID0gdGhpcy5wcm9wcy52YWx1ZUtleSB8fCAnenhuel9VVUlEJztcblx0XHR2YXIgX2NoZWNrYm94ID0ge1xuXHRcdFx0XHR3aWR0aDogODAsXG5cdFx0XHRcdGhlYWQ6IGZ1bmN0aW9uIChhcmd2KXtcblx0XHRcdFx0XHR2YXIgX3RhYmxlID0gYXJndi50aGVhZC5wcm9wcy50YWJsZTtcblx0XHRcdFx0XHRpZighX3RhYmxlKSByZXR1cm47XG5cdFx0XHRcdFx0cmV0dXJuIDxzZWxlY3Rvci5DaGVja2JveFxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fVxuXHRcdFx0XHRcdFx0XHRcdGtleT17em4udXVpZCgpfVxuXHRcdFx0XHRcdFx0XHRcdHRleHQ9eycoJyArIF90YWJsZS5zdGF0ZS5jaGVja2Vkcy5sZW5ndGggKycpJ31cblx0XHRcdFx0XHRcdFx0XHRjaGVja2VkPXt0aGlzLl9fcm93SGVhZENoZWNrYm94Q2hlY2tlZCgpfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLl9fb25Sb3dIZWFkQ2hlY2tib3hDaGFuZ2V9IC8+O1xuXHRcdFx0XHR9LmJpbmQodGhpcyksXG5cdFx0XHRcdGJvZHk6IGZ1bmN0aW9uIChhcmd2KXtcblx0XHRcdFx0XHR2YXIgX2RhdGEgPSBhcmd2LmRhdGE7XG5cdFx0XHRcdFx0cmV0dXJuIDxzZWxlY3Rvci5VbmNvbnRyb2xDaGVja2JveCBcblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgfX1cblx0XHRcdFx0XHRcdFx0XHRjaGVja2VkPXt0aGlzLnN0YXRlLmNoZWNrZWRzLmluZGV4T2YoX2RhdGFbX3ZhbHVlS2V5XSkgIT09IC0xfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyhldmVudCwgY2hlY2tib3gpPT57XG5cdFx0XHRcdFx0XHRcdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0XHRcdFx0XHRcdGlmKGNoZWNrYm94LnByb3BzLmNoZWNrZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zdGF0ZS5jaGVja2Vkcy5zcGxpY2UodGhpcy5zdGF0ZS5jaGVja2Vkcy5pbmRleE9mKF9kYXRhW192YWx1ZUtleV0pLCAxKTsgXG5cdFx0XHRcdFx0XHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zdGF0ZS5jaGVja2Vkcy5wdXNoKF9kYXRhW192YWx1ZUtleV0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5mb3JjZVVwZGF0ZSgpO1xuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5vbkNoZWNrYm94Q2hhbmdlICYmIHRoaXMucHJvcHMub25DaGVja2JveENoYW5nZSh0aGlzLnN0YXRlLmNoZWNrZWRzLCB0aGlzKTtcblx0XHRcdFx0XHRcdFx0XHR9fSAvPjtcblx0XHRcdFx0fS5iaW5kKHRoaXMpXG5cdFx0XHR9LFxuXHRcdFx0X3ZhbHVlID0gdGhpcy5wcm9wcy5jaGVja2JveDtcblx0XHRzd2l0Y2goem4udHlwZShfdmFsdWUpKSB7XG5cdFx0XHRjYXNlICdvYmplY3QnOlxuXHRcdFx0XHRfY2hlY2tib3ggPSB6bi5leHRlbmQoe30sIF92YWx1ZSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnbnVtYmVyJzpcblx0XHRcdFx0X2NoZWNrYm94LndpZHRoID0gX3ZhbHVlO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdFx0aWYoX3ZhbHVlKSB7XG5cdFx0XHRjb2x1bW5zID0gY29sdW1ucy51bnNoaWZ0KF9jaGVja2JveCk7XG5cdFx0fVxuXHR9LFxuXHRfX2luaXRJbmRleENvbHVtbjogZnVuY3Rpb24gKGNvbHVtbnMpe1xuXHRcdGlmKHRoaXMucHJvcHMuZGF0YUluZGV4RW5hYmxlZCkge1xuXHRcdFx0Y29sdW1ucyA9IGNvbHVtbnMudW5zaGlmdCh7XG5cdFx0XHRcdHdpZHRoOiA0OCxcblx0XHRcdFx0bGFiZWw6ICfntKLlvJUnLCBcblx0XHRcdFx0Zml4ZWQ6IHRydWUsXG5cdFx0XHRcdG5hbWU6ICdfX2luZGV4X18nLFxuXHRcdFx0XHRib2R5OiBmdW5jdGlvbiAoYXJndil7XG5cdFx0XHRcdFx0cmV0dXJuICg8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+eygrYXJndi5yb3dJbmRleCkgKyAxfTwvZGl2Pik7XG5cdFx0XHRcdH0uYmluZCh0aGlzKVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9LFxuXHRfX2NvbHVtbnNMb2FkZWQ6IGZ1bmN0aW9uIChjb2x1bW5zKXtcblx0XHRpZihjb2x1bW5zICYmIHpuLmlzKGNvbHVtbnMsICdhcnJheScpKXtcblx0XHRcdHZhciBfdGVtcCA9IG51bGwsXG5cdFx0XHRcdF9yZXN1bHQgPSBudWxsLFxuXHRcdFx0XHRfY29sdW1uSXRlcmF0b3IgPSB0aGlzLnByb3BzLmNvbHVtbkl0ZXJhdG9yLFxuXHRcdFx0XHRfY29sdW1ucyA9IGNvbHVtbnMubWFwKGZ1bmN0aW9uIChjb2x1bW4pe1xuXHRcdFx0XHRcdF90ZW1wID0gem4uZGVlcEFzc2lnbih7fSwgY29sdW1uKTtcblx0XHRcdFx0XHRfcmVzdWx0ID0gX2NvbHVtbkl0ZXJhdG9yICYmIF9jb2x1bW5JdGVyYXRvcihfdGVtcCwgdGhpcyk7XG5cdFx0XHRcdFx0aWYoX3Jlc3VsdCA9PT0gZmFsc2UpIHJldHVybiBudWxsO1xuXHRcdFx0XHRcdGlmKHR5cGVvZiBfcmVzdWx0ID09ICdvYmplY3QnKSByZXR1cm4gX3Jlc3VsdDtcblxuXHRcdFx0XHRcdHJldHVybiBfdGVtcDtcblx0XHRcdFx0fS5iaW5kKHRoaXMpKTtcblx0XHRcdHRoaXMuX19pbml0Q2hlY2tib3goX2NvbHVtbnMpO1xuXHRcdFx0dGhpcy5fX2luaXRJbmRleENvbHVtbihfY29sdW1ucyk7XG5cdFx0XHR0aGlzLnByb3BzLm9uQ29sdW1uc0xvYWRlZCAmJiB0aGlzLnByb3BzLm9uQ29sdW1uc0xvYWRlZChjb2x1bW5zKTtcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBjb2x1bW5zOiBfY29sdW1ucyB9KTtcblx0XHR9XG5cdH0sXG5cdF9fb25Db2x1bW5EYXRhQ3JlYXRlZDogZnVuY3Rpb24gKGRhdGEsIGxpZmVjeWNsZSl7XG5cdFx0dGhpcy5jb2x1bW5zID0gZGF0YTtcblx0XHR0aGlzLnByb3BzLm9uQ29sdW1uc0NyZWF0ZWQgJiYgdGhpcy5wcm9wcy5vbkNvbHVtbnNDcmVhdGVkKGRhdGEsIHRoaXMsIGxpZmVjeWNsZSk7XG5cdH0sXG5cdGdldERhdGE6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB0aGlzLnN0YXRlLmRhdGE7XG5cdH0sXG5cdHJlbW92ZVJvd0RhdGE6IGZ1bmN0aW9uIChkYXRhKXtcblx0XHRpZihkYXRhKSB7XG5cdFx0XHR0aGlzLnN0YXRlLmRhdGEuc3BsaWNlKHRoaXMuc3RhdGUuZGF0YS5pbmRleE9mKGRhdGEpLCAxKTtcblx0XHRcdHRoaXMuZm9yY2VVcGRhdGUoKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblx0dXBkYXRlUm93RGF0YTogZnVuY3Rpb24gKGRhdGEpe1xuXHRcdGlmKGRhdGEpIHtcblx0XHRcdHZhciBfaW5kZXggPSB0aGlzLnN0YXRlLmRhdGEuaW5kZXhPZihkYXRhKTtcblx0XHRcdHRoaXMuc3RhdGUuZGF0YVtfaW5kZXhdID0gZGF0YTtcblx0XHRcdHRoaXMuZm9yY2VVcGRhdGUoKTtcblx0XHR9XG5cdFx0XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gPHpudWkucmVhY3QuRGF0YUxpZmVjeWNsZVxuXHRcdFx0XHRcdGRhdGE9e3RoaXMucHJvcHMuY29sdW1uc31cblx0XHRcdFx0XHRyZW5kZXI9e3RoaXMuX19yZW5kZXJ9XG5cdFx0XHRcdFx0cmVzcG9uc2VIYW5kbGVyPXt0aGlzLnByb3BzLnJlc3BvbnNlSGFuZGxlcn1cblx0XHRcdFx0XHRvbkxvYWRpbmc9e3RoaXMucHJvcHMub25Db2x1bW5Mb2FkaW5nfVxuXHRcdFx0XHRcdG9uRmluaXNoZWQ9e3RoaXMuX19jb2x1bW5zTG9hZGVkfVxuXHRcdFx0XHRcdG9uRXJyb3I9e3RoaXMucHJvcHMub25Db2x1bW5Mb2FkRXJyb3J9XG5cdFx0XHRcdFx0b25EYXRhQ3JlYXRlZD17dGhpcy5fX29uQ29sdW1uRGF0YUNyZWF0ZWR9IC8+O1xuXHR9XG59KTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgVGFibGUgPSByZXF1aXJlKCcuL1RhYmxlJyk7XG52YXIgaW5wdXQgPSByZXF1aXJlKCd6bnVpLXJlYWN0LWlucHV0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJUYWJsZUVkaXRvcicsXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHRhYmxlOiBudWxsLFxuXHRcdFx0Y29sdW1uczogW11cblx0XHR9O1xuXHR9LFxuXHRfX2NlbGxDaGFuZ2U6IGZ1bmN0aW9uIChldmVudCwgYXJndil7XG5cdFx0YXJndi5kYXRhW2FyZ3YudGNlbGwucHJvcHMubmFtZV0gPSBldmVudC52YWx1ZTtcblx0XHRhcmd2LnRyb3cuZm9yY2VVcGRhdGUoKTtcblx0fSxcblx0X19jb2x1bW5Cb2R5UmVuZGVyOiBmdW5jdGlvbiAoYXJndil7XG5cdFx0cmV0dXJuIDxpbnB1dC5JbnB1dCBcblx0XHRcdGtleT17YXJndi52YWx1ZX0gXG5cdFx0XHR2YWx1ZT17YXJndi52YWx1ZX0gXG5cdFx0XHRvbkJsdXI9eyhldmVudCk9PnRoaXMuX19jZWxsQ2hhbmdlKGV2ZW50LCBhcmd2KX1cblx0XHRcdG9uRW50ZXI9eyhldmVudCk9PnRoaXMuX19jZWxsQ2hhbmdlKGV2ZW50LCBhcmd2KX0gLz47XG5cdH0sXG5cdF9fY29sdW1uSXRlcmF0b3I6IGZ1bmN0aW9uIChjb2x1bW4sIHRhYmxlKXtcblx0XHRpZighY29sdW1uLmJvZHkpIHtcblx0XHRcdGNvbHVtbi5ib2R5ID0gdGhpcy5fX2NvbHVtbkJvZHlSZW5kZXI7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNvbHVtbjtcblx0fSxcblx0c2V0RGF0YTogZnVuY3Rpb24gKGRhdGEpe1xuXHRcdHZhciBfcmV0dXJuID0gdGhpcy5wcm9wcy5vbkRhdGFDaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkRhdGFDaGFuZ2UoZGF0YSwgdGhpcy5zdGF0ZS50YWJsZSwgdGhpcyk7XG5cdFx0aWYoX3JldHVybiA9PT0gZmFsc2Upe1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRpZih0eXBlb2YgX3JldHVybiA9PSAnb2JqZWN0Jykge1xuXHRcdFx0ZGF0YSA9IF9yZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuc3RhdGUudGFibGUuc3RhdGUuZGF0YSA9IGRhdGE7XG5cdFx0dGhpcy5zdGF0ZS50YWJsZS5mb3JjZVVwZGF0ZSgpO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cdGdldERhdGE6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB0aGlzLnN0YXRlLnRhYmxlLmdldERhdGEoKTtcblx0fSxcblx0YWRkUm93OiBmdW5jdGlvbiAoZGF0YSl7XG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLm9uRGF0YUNoYW5nZSAmJiB0aGlzLnByb3BzLm9uRGF0YUNoYW5nZShbZGF0YV0sIHRoaXMuc3RhdGUudGFibGUsIHRoaXMpO1xuXHRcdGlmKF9yZXR1cm4gPT09IGZhbHNlKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0aWYodHlwZW9mIF9yZXR1cm4gPT0gJ29iamVjdCcpIHtcblx0XHRcdGRhdGEgPSBfcmV0dXJuO1xuXHRcdH1cblx0XHR0aGlzLnN0YXRlLnRhYmxlLnN0YXRlLmRhdGEucHVzaCh6bi5leHRlbmQoe30sIGRhdGEpKTtcblx0XHR0aGlzLnN0YXRlLnRhYmxlLmZvcmNlVXBkYXRlKCk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8VGFibGUgey4uLnRoaXMucHJvcHN9IHJlZj17KHJlZikgPT4gdGhpcy5zdGF0ZS50YWJsZSA9IHJlZn0gY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItdGFibGUtZWRpdG9yJywgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBjb2x1bW5JdGVyYXRvcj17dGhpcy5fX2NvbHVtbkl0ZXJhdG9yfSAvPlxuXHRcdClcblx0fVxufSk7IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFRhYmxlID0gcmVxdWlyZSgnLi9UYWJsZScpO1xudmFyIHBhZ2VyID0gcmVxdWlyZSgnem51aS1yZWFjdC1wYWdlcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSVGFibGVQYWdlcicsXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNvdW50OiAwLFxuXHRcdFx0Y3VycmVudDogMSxcblx0XHRcdGRhdGE6IFtdLFxuXHRcdFx0dG90YWw6IDAsXG5cdFx0XHRwYWdlSW5kZXg6IHRoaXMucHJvcHMucGFnZUluZGV4IHx8IDEsXG5cdFx0XHRwYWdlU2l6ZTogdGhpcy5wcm9wcy5wYWdlU2l6ZSB8fCAxMCxcblx0XHR9O1xuXHR9LFxuXHRjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24oKXtcblx0XHR0aGlzLnByb3BzLm9uQ29tcG9uZW50RGlkTW91bnQgJiYgdGhpcy5wcm9wcy5vbkNvbXBvbmVudERpZE1vdW50KHRoaXMpO1xuXHR9LFxuXHRzZXQ6IGZ1bmN0aW9uICgpe1xuXHRcdHRoaXMuX3RhYmxlLmRhdGEuX2FyZ3YuZGF0YS50eXBlID0gX3R5cGU7XG5cdFx0XHR0aGlzLl90YWJsZS5zZXRQYWdlSW5kZXgoMSk7XG5cdH0sXG5cdHNldFBhZ2VJbmRleDogZnVuY3Rpb24gKHBhZ2VJbmRleCwgYXJndiwgY2FsbGJhY2spe1xuXHRcdGlmKHRoaXMuZGF0YSl7XG5cdFx0XHRpZihwYWdlSW5kZXggPT0gMSl7XG5cdFx0XHRcdHRoaXMuX3RhYmxlLnNldFN0YXRlKHtcblx0XHRcdFx0XHRjaGVja2VkczogW11cblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnN0YXRlLnBhZ2VJbmRleCA9IHBhZ2VJbmRleDtcblx0XHRcdHRoaXMuc3RhdGUuY3VycmVudCA9IHBhZ2VJbmRleDtcblx0XHRcdHRoaXMuZm9yY2VVcGRhdGUoKTtcblx0XHRcdHRoaXMuZGF0YS5fYXJndiA9IHRoaXMuX19vbkRhdGFJbml0aWFsKHRoaXMucHJvcHMuZGF0YSk7XG5cdFx0XHRpZihhcmd2ICYmIHR5cGVvZiBhcmd2ID09ICdvYmplY3QnKXtcblx0XHRcdFx0aWYoIXRoaXMuZGF0YS5fYXJndi5kYXRhKXtcblx0XHRcdFx0XHR0aGlzLmRhdGEuX2FyZ3YuZGF0YSA9IHt9O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGZvcih2YXIga2V5IGluIGFyZ3Ype1xuXHRcdFx0XHRcdHRoaXMuZGF0YS5fYXJndi5kYXRhW2tleV0gPSBhcmd2W2tleV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRoaXMuZGF0YS5yZWZyZXNoKGNhbGxiYWNrKTtcblx0XHR9XG5cdH0sXG5cdHJlZnJlc2g6IGZ1bmN0aW9uIChjYWxsYmFjayl7XG5cdFx0aWYodGhpcy5fdGFibGUpe1xuXHRcdFx0dGhpcy5fdGFibGUucmVmcmVzaChjYWxsYmFjayk7XG5cdFx0fVxuXHR9LFxuXHRfX2hhbmRsZVBhZ2VDaGFuZ2VkOiBmdW5jdGlvbiAobmV3UGFnZSl7XG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLm9uUGFnZUNoYW5nZWQgJiYgdGhpcy5wcm9wcy5vblBhZ2VDaGFuZ2VkKG5ld1BhZ2UsIHRoaXMpO1xuXHRcdGlmKF9yZXR1cm4gIT09IGZhbHNlKSB7XG5cdFx0XHR0aGlzLnNldFBhZ2VJbmRleChuZXdQYWdlKTtcblx0XHR9XG5cdH0sXG5cdF9faGFuZGxlUGFnZVNpemVDaGFuZ2U6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRwYWdlU2l6ZTogZXZlbnQudGFyZ2V0LnZhbHVlXG5cdFx0fSwgKCk9PnRoaXMuc2V0UGFnZUluZGV4KDEpKTtcblx0fSxcblx0X19yZW5kZXJQYWdlcjogZnVuY3Rpb24gKGNvbHVtbnMsIHRhYmxlKXtcblx0XHR2YXIgX2NvbHVtblNpemUgPSBjb2x1bW5zLmxlbmd0aDtcblx0XHRpZighX2NvbHVtblNpemUpe1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdHZhciBfc3RhdGUgPSB0aGlzLnN0YXRlLFxuXHRcdFx0X2VsZW1lbnQgPSBudWxsLFxuXHRcdFx0X3BhZ2VyUHJvcHMgPSB7XG5cdFx0XHRcdHRvdGFsOiBfc3RhdGUudG90YWwsXG5cdFx0XHRcdGNvdW50OiBfc3RhdGUuY291bnQsXG5cdFx0XHRcdGN1cnJlbnQ6IF9zdGF0ZS5jdXJyZW50LFxuXHRcdFx0XHRwYWdlU2l6ZTogX3N0YXRlLnBhZ2VTaXplLFxuXHRcdFx0XHRvblBhZ2VDaGFuZ2VkOiB0aGlzLl9faGFuZGxlUGFnZUNoYW5nZWQsXG5cdFx0XHRcdG9uUGFnZVNpemVDaGFuZ2U6IHRoaXMuX19oYW5kbGVQYWdlU2l6ZUNoYW5nZVxuXHRcdFx0fSxcblx0XHRcdF9Db21wb25lbnQgPSB0aGlzLnByb3BzLnBhZ2VyIHx8IHBhZ2VyLlBhZ2VyO1xuXHRcdGlmKHpuLmlzKF9Db21wb25lbnQsICdzdHJpbmcnKSl7XG5cdFx0XHRfQ29tcG9uZW50ID0gem4ucGF0aCh3aW5kb3csIF9Db21wb25lbnQpO1xuXHRcdH1lbHNlIGlmKHpuLmlzKF9Db21wb25lbnQsICdvYmplY3QnKSAmJiBfQ29tcG9uZW50LmNvbXBvbmVudCl7XG5cdFx0XHRfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KF9Db21wb25lbnQuY29tcG9uZW50LCB6bi5leHRlbmQoe30sIF9Db21wb25lbnQsIF9wYWdlclByb3BzKSk7XG5cdFx0fVxuXG5cdFx0aWYodGhpcy5wcm9wcy5wYWdlclJlbmRlcil7XG5cdFx0XHRfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMucGFnZXJSZW5kZXIsIF9wYWdlclByb3BzKTtcblx0XHR9XG5cblx0XHRpZighX2VsZW1lbnQgJiYgX0NvbXBvbmVudCAmJiB6bi5pcyhfQ29tcG9uZW50LCAnZnVuY3Rpb24nKSl7XG5cdFx0IFx0X2VsZW1lbnQgPSA8X0NvbXBvbmVudCB7Li4uX3BhZ2VyUHJvcHN9IC8+O1xuXHRcdH1cblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8dGZvb3QgY2xhc3NOYW1lPVwidGFibGUtcGFnZXJcIj5cblx0XHRcdFx0PHRyIGNsYXNzTmFtZT1cInBhZ2VyLXJvd1wiPlxuXHRcdFx0XHRcdDx0ZCBjb2xTcGFuPXtfY29sdW1uU2l6ZX0+e19lbGVtZW50fTwvdGQ+XG5cdFx0XHRcdDwvdHI+XG5cdFx0XHQ8L3Rmb290PlxuXHRcdCk7XG5cdH0sXG5cdF9fb25EYXRhSW5pdGlhbDogZnVuY3Rpb24gKGRhdGEpe1xuXHRcdHZhciBfbWV0aG9kID0gZGF0YS5tZXRob2R8fCdwb3N0Jyxcblx0XHRcdF9wYXJhbXMgPSB7fSxcblx0XHRcdF9rZXlNYXBzID0gem4uZGVlcEFzc2lnbih7XG5cdFx0XHRcdHRvdGFsOiBcInRvdGFsXCIsXG5cdFx0XHRcdHBhZ2VJbmRleDogJ3BhZ2VJbmRleCcsXG5cdFx0XHRcdHBhZ2VTaXplOiAncGFnZVNpemUnLFxuXHRcdFx0XHRkYXRhOiAnZGF0YSdcblx0XHRcdH0sIHRoaXMucHJvcHMua2V5TWFwcyk7XG5cblx0XHRfcGFyYW1zW19rZXlNYXBzLnBhZ2VJbmRleF0gPSB0aGlzLnN0YXRlLnBhZ2VJbmRleCB8fCAxO1xuXHRcdF9wYXJhbXNbX2tleU1hcHMucGFnZVNpemVdID0gdGhpcy5zdGF0ZS5wYWdlU2l6ZSB8fCAxMDtcblx0XHRpZihfbWV0aG9kID09ICdnZXQnKXtcblx0XHRcdGRhdGEgPSB6bi5kZWVwQXNzaWduKGRhdGEsIHtcblx0XHRcdFx0cGFyYW1zOiBfcGFyYW1zXG5cdFx0XHR9KTtcblx0XHR9ZWxzZXtcblx0XHRcdGRhdGEgPSB6bi5kZWVwQXNzaWduKGRhdGEsIHtcblx0XHRcdFx0ZGF0YTogX3BhcmFtc1xuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdFxuXHRcdHJldHVybiB0aGlzLnN0YXRlLmtleU1hcHMgPSBfa2V5TWFwcywgZGF0YTtcblx0fSxcblx0X19vbkRhdGFDcmVhdGVkOiBmdW5jdGlvbiAoZGF0YSwgdGFibGUpe1xuXHRcdHRoaXMuZGF0YSA9IGRhdGE7XG5cdFx0dGhpcy5wcm9wcy5vbkRhdGFDcmVhdGVkICYmIHRoaXMucHJvcHMub25EYXRhQ3JlYXRlZChkYXRhLCB0YWJsZSwgdGhpcyk7XG5cdH0sXG5cdF9fb25EYXRhTG9hZGVkOiBmdW5jdGlvbiAoZGF0YSwgdGFibGUpe1xuXHRcdGlmKHRoaXMucHJvcHMuenhueil7XG5cdFx0XHRpZih6bi5pcyhkYXRhLCAnb2JqZWN0JykgJiYgZGF0YS5jb2RlICE9IDIwMCl7XG5cdFx0XHRcdHJldHVybiBjb25zb2xlLmVycm9yKGRhdGEuZGV0YWlsKSwgZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRpZih6bi5pcyhkYXRhLCAnb2JqZWN0JykgJiYgZGF0YS5jb2RlID09IDIwMCl7XG5cdFx0XHRcdGRhdGEgPSBkYXRhLnJlc3VsdDtcblx0XHRcdH1cblx0XHRcdGlmKCF6bi5pcyhkYXRhLCAnYXJyYXknKSl7XG5cdFx0XHRcdHJldHVybiBjb25zb2xlLmVycm9yKFwiVGFibGVQYWdlciBDb21wb25lbnQgRGF0YSBUeXBlIEVycm9yLlwiKSwgZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHR2YXIgX2RhdGEgPSBkYXRhWzBdLFxuXHRcdFx0XHRfcGFnZXJDb3VudCA9IGRhdGFbMV1bMF0uY291bnQ7XG5cdFx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMub25EYXRhTG9hZGVkICYmIHRoaXMucHJvcHMub25EYXRhTG9hZGVkKF9kYXRhLCB0YWJsZSwgdGhpcyk7XG5cdFx0XHRpZihfcmV0dXJuICE9PSBmYWxzZSl7XG5cdFx0XHRcdHRhYmxlLnNldFN0YXRlKHtcblx0XHRcdFx0XHRkYXRhOiBfZGF0YVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0dG90YWw6IE1hdGguY2VpbChfcGFnZXJDb3VudC90aGlzLnN0YXRlLnBhZ2VTaXplKSxcblx0XHRcdFx0XHRjb3VudDogX3BhZ2VyQ291bnQsXG5cdFx0XHRcdFx0Y3VycmVudDogdGhpcy5zdGF0ZS5jdXJyZW50LFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9ZWxzZXtcblx0XHRcdGlmKHpuLmlzKGRhdGEsICdhcnJheScpKXtcblx0XHRcdFx0cmV0dXJuIGNvbnNvbGUuZXJyb3IoJ1RoZSBkYXRhIGlzIGFycmF5LCBidXQgaXQgbmVlZCByZXR1cm4gb2JqZWN0JyksIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0dmFyIF9kYXRhID0gZGF0YS5kYXRhO1xuXHRcdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLm9uRGF0YUxvYWRlZCAmJiB0aGlzLnByb3BzLm9uRGF0YUxvYWRlZChfZGF0YSwgdGFibGUsIHRoaXMpO1xuXHRcdFx0aWYoX3JldHVybiAhPT0gZmFsc2Upe1xuXHRcdFx0XHR0YWJsZS5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0ZGF0YTogX2RhdGFbdGhpcy5zdGF0ZS5rZXlNYXBzLmRhdGFdXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHR0b3RhbDogTWF0aC5jZWlsKF9kYXRhW3RoaXMuc3RhdGUua2V5TWFwcy50b3RhbF0vdGhpcy5zdGF0ZS5wYWdlU2l6ZSksXG5cdFx0XHRcdFx0Y291bnQ6IF9kYXRhW3RoaXMuc3RhdGUua2V5TWFwcy50b3RhbF0sXG5cdFx0XHRcdFx0Y3VycmVudDogX2RhdGFbdGhpcy5zdGF0ZS5rZXlNYXBzLnBhZ2VJbmRleF1cblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9LFxuXHRfX29uRmlsdGVyQ2hhbmdlOiBmdW5jdGlvbiAoZmlsdGVycywgZGF0YSwgdGFibGUpe1xuXHRcdHZhciBfcmV0dXJuID0gdGhpcy5wcm9wcy5vbkZpbHRlckNoYW5nZSAmJiB0aGlzLnByb3BzLm9uRmlsdGVyQ2hhbmdlKGZpbHRlcnMsIGRhdGEsIHRhYmxlKTtcblx0XHRpZihfcmV0dXJuICE9PSBmYWxzZSl7XG5cdFx0XHRpZighdGhpcy5kYXRhLl9hcmd2LmRhdGEpIHtcblx0XHRcdFx0dGhpcy5kYXRhLl9hcmd2LmRhdGEgPSB7fTtcblx0XHRcdH1cblx0XHRcdHRoaXMuZGF0YS5fYXJndi5kYXRhLmZpbHRlcnMgPSBmaWx0ZXJzO1xuXHRcdFx0dGhpcy5zZXRQYWdlSW5kZXgoMSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxUYWJsZSB7Li4udGhpcy5wcm9wc30gXG5cdFx0XHRcdGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLXRhYmxlLXBhZ2VyJywgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBcblx0XHRcdFx0Y2hpbGRyZW5SZW5kZXI9e3RoaXMuX19yZW5kZXJQYWdlcn1cblx0XHRcdFx0b25Db21wb25lbnREaWRNb3VudD17KHRhYmxlKT0+eyBcblx0XHRcdFx0XHR0aGlzLl90YWJsZSA9IHRhYmxlOyBcblx0XHRcdFx0fX1cblx0XHRcdFx0b25GaWx0ZXJDaGFuZ2U9e3RoaXMuX19vbkZpbHRlckNoYW5nZX1cblx0XHRcdFx0b25EYXRhSW5pdGlhbD17dGhpcy5fX29uRGF0YUluaXRpYWx9XG5cdFx0XHRcdG9uRGF0YUNyZWF0ZWQ9e3RoaXMuX19vbkRhdGFDcmVhdGVkfVxuXHRcdFx0XHRvbkRhdGFMb2FkZWQ9e3RoaXMuX19vbkRhdGFMb2FkZWR9IC8+XG5cdFx0KTtcblx0fVxufSk7IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIENoZWNrYm94ID0gcmVxdWlyZSgnem51aS1yZWFjdC1zZWxlY3RvcicpLkNoZWNrYm94O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSVENlbGxDaGVja2JveCcsXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRjaGVja2VkOiB0aGlzLnByb3BzLmNoZWNrZWQgfHwgZmFsc2Vcblx0XHR9XG5cdH0sXG5cdF9fb25DaGVja2JveENoYW5nZTogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRpZih0aGlzLnByb3BzLnRoZWFkKSB7XG5cdFx0XHR0aGlzLl9fb25IZWFkQ2hhbmdlKGV2ZW50KTtcblx0XHR9ZWxzZSBpZih0aGlzLnByb3BzLnRib2R5KSB7XG5cdFx0XHR0aGlzLl9fb25Cb2R5Q2hhbmdlKGV2ZW50KTtcblx0XHR9XG5cdH0sXG5cdF9fb25IZWFkQ2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdGNvbnNvbGUubG9nKGV2ZW50LmNoZWNrZWQsIHRoaXMucHJvcHMpO1xuXHR9LFxuXHRfX29uQm9keUNoYW5nZTogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHRjb25zb2xlLmxvZyhldmVudC5jaGVja2VkLCB0aGlzLnByb3BzKTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInpyLXRhYmxlLWNlbGwtY2hlY2tib3hcIj48Q2hlY2tib3ggY2hlY2tlZD17dHJ1ZX0gb25DaGFuZ2U9e3RoaXMuX19vbkNoZWNrYm94Q2hhbmdlfS8+PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBDaGVja2JveDogcmVxdWlyZSgnLi9DaGVja2JveCcpLFxuICAgIC8vQnV0dG9uczogcmVxdWlyZSgnLi9CdXR0b25zJyksXG4gICAgLy9JbnB1dDogcmVxdWlyZSgnLi9JbnB1dCcpLFxuICAgIC8vQ2FsY3VsYXRvcjogcmVxdWlyZSgnLi9DYWxjdWxhdG9yJylcbn07IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgdGFibGU6IHJlcXVpcmUoJy4vdGFibGUvaW5kZXgnKSxcbiAgICBjZWxsOiByZXF1aXJlKCcuL2NlbGwvaW5kZXgnKSxcbiAgICBQb3B1cFRhYmxlOiByZXF1aXJlKCcuL1BvcHVwVGFibGUnKSxcbiAgICBUYWJsZTogcmVxdWlyZSgnLi9UYWJsZScpLFxuICAgIFRhYmxlRWRpdG9yOiByZXF1aXJlKCcuL1RhYmxlRWRpdG9yJyksXG4gICAgVGFibGVQYWdlcjogcmVxdWlyZSgnLi9UYWJsZVBhZ2VyJylcbn07IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSVGFibGVDb2xncm91cCcsXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHR2YXIgX2tleU1hcHBpbmcgPSB0aGlzLnByb3BzLmtleU1hcHBpbmcgfHwgeyB9O1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8Y29sZ3JvdXA+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHQodGhpcy5wcm9wcy5jb2x1bW5zfHxbXSkubWFwKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuXHRcdFx0XHRcdFx0dmFyIF93aWR0aCA9IF9rZXlNYXBwaW5nLndpZHRoIHx8ICd3aWR0aCc7XG5cdFx0XHRcdFx0XHRyZXR1cm4gPGNvbCBrZXk9e2luZGV4fSBzdHlsZT17eyB3aWR0aDogaXRlbVtfd2lkdGhdIH19IC8+O1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdDwvY29sZ3JvdXA+XG5cdFx0KTtcblx0fVxufSk7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgVFJvdyA9IHJlcXVpcmUoJy4vVFJvdycpO1xudmFyIGxvYWRlciA9IHJlcXVpcmUoJ3pudWktcmVhY3QtbG9hZGVyJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJUQm9keScsXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKXtcblx0XHR2YXIgX3BhZ2VTaXplID0gdGhpcy5wcm9wcy5wYWdlU2l6ZSB8fCA1MDtcblx0XHRyZXR1cm4ge1xuXHRcdFx0YWN0aXZlOiBudWxsLFxuXHRcdFx0Y2hlY2tlZHM6IFtdLFxuXHRcdFx0Y2xhc3NOYW1lOiAnJyxcblx0XHRcdHBhZ2VJbmRleDogdGhpcy5wcm9wcy5wYWdlSW5kZXggfHwgMSxcblx0XHRcdHBhZ2VTaXplOiBfcGFnZVNpemUsXG5cdFx0XHRwYWdlQ291bnQ6IE1hdGguY2VpbCh0aGlzLnByb3BzLmRhdGEubGVuZ3RoIC8gX3BhZ2VTaXplKSxcblx0XHRcdHN0eWxlOiB7fSxcblx0XHRcdGxvYWRpbmc6IGZhbHNlXG5cdFx0fTtcblx0fSxcblx0X19nZXREYXRhOiBmdW5jdGlvbiAocGFnZUluZGV4LCBwYWdlU2l6ZSl7XG5cdFx0dmFyIF9wYWdlSW5kZXggPSBwYWdlSW5kZXggfHwgdGhpcy5zdGF0ZS5wYWdlSW5kZXg7XG5cdFx0dmFyIF9wYWdlU2l6ZSA9IHBhZ2VTaXplIHx8IHRoaXMuc3RhdGUucGFnZVNpemU7XG5cdFx0cmV0dXJuIHRoaXMucHJvcHMuZGF0YS5zbGljZSgoX3BhZ2VJbmRleC0xKSAqIF9wYWdlU2l6ZSwgTWF0aC5taW4oX3BhZ2VJbmRleCAqIF9wYWdlU2l6ZSwgdGhpcy5wcm9wcy5kYXRhLmxlbmd0aCkpO1xuXHR9LFxuXHRfX3JlbmRlckxvYWRpbmc6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMubG9hZGluZ1JlbmRlciwge1xuXHRcdFx0dGJvZHk6IHRoaXNcblx0XHR9LCB0aGlzLnByb3BzLmNvbnRleHQpO1xuXG5cdFx0aWYoIV9lbGVtZW50KXtcblx0XHQgXHRfZWxlbWVudCA9IDxsb2FkZXIuRGF0YUxvYWRlciBsb2FkZXI9XCJ3YXZlXCIgdGl0bGU9eydMb2FkaW5nLi4uJ30gLz47XG5cdFx0fVxuXG5cdFx0dmFyIF9sb2FkaW5nID0gem4uZXh0ZW5kKHsgY2xhc3NOYW1lOiAnJywgc3R5bGU6IHt9IH0sIHRoaXMucHJvcHMubG9hZGluZyk7XG5cdFx0cmV0dXJuIDx0ciBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwidGJvZHktbG9hZGluZ1wiLCBfbG9hZGluZy5jbGFzc05hbWUpfSBzdHlsZT17X2xvYWRpbmcuc3R5bGV9PlxuXHRcdFx0PHRkIGNvbFNwYW49e3RoaXMucHJvcHMuY29sdW1ucy5sZW5ndGh9PntfZWxlbWVudH08L3RkPlxuXHRcdDwvdHI+O1xuXHR9LFxuXHRfX3JlbmRlckVtcHR5OiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX2VsZW1lbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudCh0aGlzLnByb3BzLmVtcHR5UmVuZGVyLCB7XG5cdFx0XHR0Ym9keTogdGhpc1xuXHRcdH0sIHRoaXMucHJvcHMuY29udGV4dCk7XG5cblx0XHRpZighX2VsZW1lbnQpe1xuXHRcdCBcdF9lbGVtZW50ID0gPGRpdiBjbGFzc05hbWU9XCJlbXB0eS1jb250ZW50XCI+XG5cdFx0XHRcdCA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1wcmVmaXg9XCJmYXNcIiBkYXRhLWljb249XCJkZXNrdG9wXCIgY2xhc3NOYW1lPVwic3ZnLWlubGluZS0tZmEgZmEtZGVza3RvcCBmYS13LTE4IFwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1NzYgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNTI4IDBINDhDMjEuNSAwIDAgMjEuNSAwIDQ4djMyMGMwIDI2LjUgMjEuNSA0OCA0OCA0OGgxOTJsLTE2IDQ4aC03MmMtMTMuMyAwLTI0IDEwLjctMjQgMjRzMTAuNyAyNCAyNCAyNGgyNzJjMTMuMyAwIDI0LTEwLjcgMjQtMjRzLTEwLjctMjQtMjQtMjRoLTcybC0xNi00OGgxOTJjMjYuNSAwIDQ4LTIxLjUgNDgtNDhWNDhjMC0yNi41LTIxLjUtNDgtNDgtNDh6bS0xNiAzNTJINjRWNjRoNDQ4djI4OHpcIj48L3BhdGg+PC9zdmc+XG5cdFx0XHRcdCA8c3Bhbj5FbXB0eTwvc3Bhbj5cblx0XHRcdCA8L2Rpdj47XG5cdFx0fVxuXHRcdHZhciBfZW1wdHkgPSB6bi5leHRlbmQoeyBjbGFzc05hbWU6ICcnLCBzdHlsZToge30gfSwgdGhpcy5wcm9wcy5lbXB0eSk7XG5cdFx0cmV0dXJuIDx0ciBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwidGJvZHktZW1wdHlcIiwgX2VtcHR5LmNsYXNzTmFtZSl9IHN0eWxlPXtfZW1wdHkuc3R5bGV9PlxuXHRcdFx0PHRkIGNvbFNwYW49e3RoaXMucHJvcHMuY29sdW1ucy5sZW5ndGh9PntfZWxlbWVudH08L3RkPlxuXHRcdDwvdHI+O1xuXHR9LFxuXHRfX29uUm93Q2xpY2s6IGZ1bmN0aW9uIChldmVudCkge1xuXHRcdHZhciBfZGF0YSA9IGV2ZW50LmRhdGE7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRhY3RpdmU6IF9kYXRhLnRyb3cucHJvcHMuZGF0YVxuXHRcdH0pO1xuXHRcdGV2ZW50LnRib2R5ID0gdGhpcztcblx0XHR0aGlzLnByb3BzLm9uUm93Q2xpY2sgJiYgdGhpcy5wcm9wcy5vblJvd0NsaWNrKGV2ZW50KTtcblx0fSxcblx0X19vbkNlbGxDbGljazogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHRldmVudC50Ym9keSA9IHRoaXM7XG5cdFx0dGhpcy5wcm9wcy5vbkNlbGxDbGljayAmJiB0aGlzLnByb3BzLm9uQ2VsbENsaWNrKGV2ZW50KTtcblx0fSxcblx0X19yZW5kZXJSb3c6IGZ1bmN0aW9uIChpdGVtLCBpbmRleCl7XG5cdFx0aWYoIXpuLmlzKGl0ZW0sICdvYmplY3QnKSkgeyByZXR1cm4gbnVsbDt9XG5cdFx0dmFyIF90ZW1wID0gdGhpcy5wcm9wcy5lYWNoUm93RGF0YSAmJiB0aGlzLnByb3BzLmVhY2hSb3dEYXRhKGl0ZW0sIGluZGV4LCB0aGlzKTtcblx0XHRpZihfdGVtcCAmJiB6bi5pcyhfdGVtcCwgJ29iamVjdCcpKXtcblx0XHRcdGl0ZW0gPSBfdGVtcDtcblx0XHR9XG5cdFx0dmFyIF9lbGVtZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQodGhpcy5wcm9wcy5yb3dSZW5kZXIsIHtcblx0XHRcdGRhdGE6IGl0ZW0sXG5cdFx0XHRyb3dJbmRleDogaW5kZXgsXG5cdFx0XHR0Ym9keTogdGhpc1xuXHRcdH0sIHRoaXMucHJvcHMuY29udGV4dCk7XG5cblx0XHRpZihfZWxlbWVudCl7XG5cdFx0XHRyZXR1cm4gX2VsZW1lbnQ7XG5cdFx0fVxuXHRcdHZhciBfcm93S2V5ID0gdGhpcy5wcm9wcy5yb3dLZXk7XG5cdFx0dmFyIF9rZXkgPSBpdGVtW19yb3dLZXldIHx8IGluZGV4O1xuXHRcdHJldHVybiA8VFJvdyBrZXk9e19rZXl9IGNvbnRleHQ9e3RoaXMucHJvcHMuY29udGV4dH0gey4uLnRoaXMucHJvcHMucm93fSBcblx0XHRcdFx0XHRyb3dJbmRleD17aW5kZXh9XG5cdFx0XHRcdFx0Y2VsbD17dGhpcy5wcm9wcy5jZWxsfVxuXHRcdFx0XHRcdGNlbGxSZW5kZXI9e3RoaXMucHJvcHMuY2VsbFJlbmRlcn1cblx0XHRcdFx0XHRjb2x1bW5zPXt0aGlzLnByb3BzLmNvbHVtbnN9IFxuXHRcdFx0XHRcdGZpeGVkQ29sdW1ucz17dGhpcy5wcm9wcy5maXhlZENvbHVtbnN9XG5cdFx0XHRcdFx0dGJvZHk9e3RoaXN9XG5cdFx0XHRcdFx0ZGF0YT17aXRlbX0gXG5cdFx0XHRcdFx0YWN0aXZlPXt0aGlzLnN0YXRlLmFjdGl2ZSA9PSBpdGVtfSBcblx0XHRcdFx0XHRjaGVja2VkPXt0aGlzLnN0YXRlLmNoZWNrZWRzLmluZGV4T2YoaXRlbSkgIT09IC0xfSBcblx0XHRcdFx0XHRvblJvd0NsaWNrPXt0aGlzLl9fb25Sb3dDbGlja31cblx0XHRcdFx0XHRvbkNlbGxDbGljaz17dGhpcy5fX29uQ2VsbENsaWNrfSAvPjtcblx0fSxcblx0X19wYWdlQ2hhbmdlOiBmdW5jdGlvbiAocGFnZUluZGV4KXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHBhZ2VJbmRleDogcGFnZUluZGV4XG5cdFx0fSk7XG5cdH0sXG5cdF9fcGFnZXNSZW5kZXI6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfcGFnZUNvdW50ID0gdGhpcy5zdGF0ZS5wYWdlQ291bnQsIF9wYWdlcyA9IFtdO1xuXHRcdGlmKF9wYWdlQ291bnQgPiAxKSB7XG5cdFx0XHRmb3IodmFyIGkgPSAxOyBpIDwgX3BhZ2VDb3VudCArIDE7IGkrKykgeyBfcGFnZXMucHVzaChpKTsgfVxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PHRyIGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ0Ym9keS1wYWdlc1wiLCAnJyl9PlxuXHRcdFx0XHRcdDx0ZCBjb2xTcGFuPXt0aGlzLnByb3BzLmNvbHVtbnMubGVuZ3RofT5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGF0YS1wYWdlXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGFnZXNcIj5cblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRfcGFnZXMubWFwKChpLCBpbmRleCk9Pntcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIDxzcGFuIGtleT17aW5kZXh9IGNsYXNzTmFtZT17J3BhZ2UgJyArICh0aGlzLnN0YXRlLnBhZ2VJbmRleD09aT8nYWN0aXZlJzonJyl9IG9uQ2xpY2s9eygpPT50aGlzLl9fcGFnZUNoYW5nZShpKX0+e2l9PC9zcGFuPjtcblx0XHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwicGFnZS1jb3VudFwiPuWFsSB7dGhpcy5wcm9wcy5kYXRhLmxlbmd0aH0g5p2hPC9zcGFuPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC90ZD5cblx0XHRcdFx0PC90cj5cblx0XHRcdCk7XG5cdFx0fVxuXHR9LFxuXHRfX3JlbmRlckRhdGE6IGZ1bmN0aW9uICgpe1xuXHRcdGlmKHRoaXMucHJvcHMuZGF0YSA9PSBudWxsIHx8ICh0aGlzLnByb3BzLmRhdGEgJiYgIXRoaXMucHJvcHMuZGF0YS5sZW5ndGgpKXtcblx0XHRcdHJldHVybiB0aGlzLl9fcmVuZGVyRW1wdHkoKTtcblx0XHR9XG5cdFx0aWYodGhpcy5zdGF0ZS5wYWdlQ291bnQgPiAxKXtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDw+XG5cdFx0XHRcdFx0e3RoaXMuX19wYWdlc1JlbmRlcigpfVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRoaXMuX19nZXREYXRhKHRoaXMuc3RhdGUucGFnZUluZGV4LCB0aGlzLnN0YXRlLnBhZ2VTaXplKS5tYXAodGhpcy5fX3JlbmRlclJvdylcblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvPlxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PD5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRoaXMucHJvcHMuZGF0YS5tYXAodGhpcy5fX3JlbmRlclJvdylcblx0XHRcdFx0fVxuXHRcdFx0PC8+XG5cdFx0KTtcblx0fSxcblx0X19yZW5kZXI6IGZ1bmN0aW9uICgpe1xuXHRcdGlmKHRoaXMucHJvcHMubG9hZGluZyB8fCB0aGlzLnN0YXRlLmxvYWRpbmcpIHtcblx0XHRcdHJldHVybiB0aGlzLl9fcmVuZGVyTG9hZGluZygpO1xuXHRcdH1lbHNle1xuXHRcdFx0cmV0dXJuIHRoaXMuX19yZW5kZXJEYXRhKCk7XG5cdFx0fVxuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDx0Ym9keSBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItdGFibGUtdGJvZHlcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUsIHRoaXMuc3RhdGUuY2xhc3NOYW1lKX0gc3R5bGU9e3pudWkucmVhY3Quc3R5bGUodGhpcy5wcm9wcy5zdHlsZSwgdGhpcy5zdGF0ZS5zdHlsZSl9PlxuXHRcdFx0XHR7IHRoaXMuX19yZW5kZXIoKSB9XG5cdFx0XHQ8L3Rib2R5PlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSVEJvZHlFbXB0eScsXG5cdF9fcmVuZGVyRW1wdHk6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMuZW1wdHlSZW5kZXIsIHtcblx0XHRcdHRib2R5OiB0aGlzXG5cdFx0fSwgdGhpcy5wcm9wcy5jb250ZXh0KTtcblxuXHRcdGlmKCFfZWxlbWVudCl7XG5cdFx0IFx0X2VsZW1lbnQgPSA8ZGl2IGNsYXNzTmFtZT1cImVtcHR5LWNvbnRlbnRcIj5cblx0XHRcdFx0IDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhc1wiIGRhdGEtaWNvbj1cImRlc2t0b3BcIiBjbGFzc05hbWU9XCJzdmctaW5saW5lLS1mYSBmYS1kZXNrdG9wIGZhLXctMTggXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDU3NiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk01MjggMEg0OEMyMS41IDAgMCAyMS41IDAgNDh2MzIwYzAgMjYuNSAyMS41IDQ4IDQ4IDQ4aDE5MmwtMTYgNDhoLTcyYy0xMy4zIDAtMjQgMTAuNy0yNCAyNHMxMC43IDI0IDI0IDI0aDI3MmMxMy4zIDAgMjQtMTAuNyAyNC0yNHMtMTAuNy0yNC0yNC0yNGgtNzJsLTE2LTQ4aDE5MmMyNi41IDAgNDgtMjEuNSA0OC00OFY0OGMwLTI2LjUtMjEuNS00OC00OC00OHptLTE2IDM1Mkg2NFY2NGg0NDh2Mjg4elwiPjwvcGF0aD48L3N2Zz5cblx0XHRcdFx0IDxzcGFuPkVtcHR5PC9zcGFuPlxuXHRcdFx0IDwvZGl2Pjtcblx0XHR9XG5cdFx0dmFyIF9lbXB0eSA9IHpuLmV4dGVuZCh7IGNsYXNzTmFtZTogJycsIHN0eWxlOiB7fSB9LCB0aGlzLnByb3BzLmVtcHR5KTtcblx0XHRyZXR1cm4gPHRyIGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ0Ym9keS1lbXB0eVwiLCBfZW1wdHkuY2xhc3NOYW1lKX0gc3R5bGU9e19lbXB0eS5zdHlsZX0+XG5cdFx0XHQ8dGQgY29sU3Bhbj17dGhpcy5wcm9wcy5jb2x1bW5zLmxlbmd0aH0+e19lbGVtZW50fTwvdGQ+XG5cdFx0PC90cj47XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHRib2R5IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci10YWJsZS10Ym9keS1lbXB0eVwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IHN0eWxlPXt6bnVpLnJlYWN0LnN0eWxlKHRoaXMucHJvcHMuc3R5bGUpfT5cblx0XHRcdFx0eyB0aGlzLl9fcmVuZGVyRW1wdHkoKSB9XG5cdFx0XHQ8L3Rib2R5PlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFJlYWN0RE9NID0gem51aS5SZWFjdERPTSB8fCByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUlRDZWxsJyxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNsYXNzTmFtZTogJycsXG5cdFx0XHRzdHlsZToge30sXG5cdFx0XHRkaXNhYmxlZDogdGhpcy5wcm9wcy5kaXNhYmxlZCxcblx0XHRcdGNoZWNrZWQ6IHRoaXMucHJvcHMuY2hlY2tlZCxcblx0XHRcdGFjdGl2ZTogdGhpcy5wcm9wcy5hY3RpdmVcblx0XHR9XG5cdH0sXG5cdF9fcmVuZGVyQ2VsbENvbnRlbnQ6IGZ1bmN0aW9uICgpe1xuXHRcdGlmKHRoaXMucHJvcHMuY2hpbGRyZW4pIHtcblx0XHRcdHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuO1xuXHRcdH1cblx0XHRcblx0XHR2YXIgX3ZhbHVlID0gbnVsbDtcblx0XHRpZih0aGlzLnByb3BzLmRhdGEgJiYgdGhpcy5wcm9wcy5uYW1lKSB7XG5cdFx0XHRfdmFsdWUgPSB0aGlzLnByb3BzLmRhdGFbdGhpcy5wcm9wcy5uYW1lXTtcblx0XHR9XG5cblx0XHR2YXIgX3JlbmRlciA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMucmVuZGVyIHx8IHRoaXMucHJvcHMuYm9keSwge1xuXHRcdFx0cm93SW5kZXg6IHRoaXMucHJvcHMucm93SW5kZXgsXG5cdFx0XHRjZWxsSW5kZXg6IHRoaXMucHJvcHMuY2VsbEluZGV4LCBcblx0XHRcdGNvbHVtbjogdGhpcy5wcm9wcy5jb2x1bW4sXG5cdFx0XHRkYXRhOiB0aGlzLnByb3BzLmRhdGEsXG5cdFx0XHR2YWx1ZTogX3ZhbHVlLFxuXHRcdFx0dGNlbGw6IHRoaXMsXG5cdFx0XHR0cm93OiB0aGlzLnByb3BzLnRyb3csXG5cdFx0XHR0Ym9keTogdGhpcy5wcm9wcy50Ym9keSxcblx0XHRcdHRhYmxlOiB0aGlzLnByb3BzLnRib2R5LnByb3BzLnRhYmxlXG5cdFx0fSwgdGhpcy5wcm9wcy5jb250ZXh0KTtcblx0XHRcblx0XHRpZihfcmVuZGVyKXtcblx0XHRcdHJldHVybiBfcmVuZGVyO1xuXHRcdH1cblxuXHRcdHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImNlbGwtbGFiZWxcIiB0aXRsZT17X3ZhbHVlfT57X3ZhbHVlfTwvZGl2Pjtcblx0fSxcblx0X19jZWxsQ2xpY2s6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0dmFyIF90aGlzID0gdGhpcztcblx0XHRldmVudC5kYXRhID0ge1xuXHRcdFx0ZmluZFRERE9NOiBmdW5jdGlvbiAoKXtcblx0XHRcdFx0cmV0dXJuIFJlYWN0RE9NLmZpbmRET01Ob2RlKF90aGlzKTtcblx0XHRcdH0sXG5cdFx0XHR0Y2VsbDogdGhpc1xuXHRcdH07XG5cdFx0dGhpcy5wcm9wcy5vbkNsaWNrICYmIHRoaXMucHJvcHMub25DbGljayhldmVudCk7XG5cdFx0dGhpcy5wcm9wcy5vbkNlbGxDbGljayAmJiB0aGlzLnByb3BzLm9uQ2VsbENsaWNrKGV2ZW50KTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHZhciBfY29sdW1uID0gdGhpcy5wcm9wcy5jb2x1bW4gfHwge307XG5cdFx0cmV0dXJuIChcblx0XHRcdDx0ZCBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItdGFibGUtdGNlbGxcIiwgKF9jb2x1bW4uZml4ZWQ/J2ZpeGVkJzonJyksIHRoaXMucHJvcHMuY2xhc3NOYW1lLCBfY29sdW1uLmJvZHlDbGFzc05hbWUsIHRoaXMuc3RhdGUuY2xhc3NOYW1lKX0gc3R5bGU9e3pudWkucmVhY3Quc3R5bGUodGhpcy5wcm9wcy5zdHlsZSwgX2NvbHVtbi5ib2R5U3R5bGUsIHRoaXMuc3RhdGUuc3R5bGUsIF9jb2x1bW4uZml4ZWRTdHlsZXMpfVx0XG5cdFx0XHRcdGRhdGEtZGlzYWJsZWQ9e3RoaXMuc3RhdGUuZGlzYWJsZWR9XG5cdFx0XHRcdGRhdGEtY2hlY2tlZD17dGhpcy5zdGF0ZS5jaGVja2VkfVxuXHRcdFx0XHRkYXRhLWFjdGl2ZT17dGhpcy5zdGF0ZS5hY3RpdmV9XG5cdFx0XHRcdG9uQ2xpY2s9e3RoaXMuX19jZWxsQ2xpY2t9ID5cblx0XHRcdFx0e3RoaXMuX19yZW5kZXJDZWxsQ29udGVudCgpfVxuXHRcdFx0PC90ZD5cblx0XHQpO1xuXHR9XG59KTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBmaWx0ZXIgPSByZXF1aXJlKCd6bnVpLXJlYWN0LWZpbHRlcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6ICdaUkZpbHRlcicsXG5cdGdldEluaXRpYWxTdGF0ZTpmdW5jdGlvbigpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRjbGFzc05hbWU6ICcnLFxuXHRcdFx0c3R5bGU6IHt9LFxuXHRcdFx0ZGF0YToge31cblx0XHR9XG5cdH0sXG5cdF9fb25GaWx0ZXJDaGFuZ2U6IGZ1bmN0aW9uIChldmVudCwgaW5wdXQsIGZpbHRlckZpZWxkKXtcblx0XHRpZihldmVudC5uYW1lICYmIGV2ZW50Lm9wdCkge1xuXHRcdFx0aWYoZXZlbnQudmFsdWUgPT09IG51bGwgfHwgZXZlbnQudmFsdWUgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aGlzLnN0YXRlLmRhdGFbZXZlbnQubmFtZV0gPSBudWxsO1xuXHRcdFx0XHRkZWxldGUgdGhpcy5zdGF0ZS5kYXRhW2V2ZW50Lm5hbWVdO1xuXHRcdFx0fWVsc2UgaWYoIWV2ZW50LnZhbHVlICYmICFmaWx0ZXJGaWVsZC5wcm9wcy5lbXB0eVZhbHVlRW5hYmxlZCl7XG5cdFx0XHRcdHRoaXMuc3RhdGUuZGF0YVtldmVudC5uYW1lXSA9IG51bGw7XG5cdFx0XHRcdGRlbGV0ZSB0aGlzLnN0YXRlLmRhdGFbZXZlbnQubmFtZV07XG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0dGhpcy5zdGF0ZS5kYXRhW2V2ZW50Lm5hbWVdID0ge1xuXHRcdFx0XHRcdHZhbHVlOiBldmVudC52YWx1ZSxcblx0XHRcdFx0XHRvcHQ6IGV2ZW50Lm9wdFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdH1cblx0XHR0aGlzLnByb3BzLm9uRmlsdGVyICYmIHRoaXMucHJvcHMub25GaWx0ZXIodGhpcy5zdGF0ZS5kYXRhKTtcblx0fSxcblx0X19vbkZpbHRlckNhbmNlbDogZnVuY3Rpb24gKG5hbWUpe1xuXHRcdGlmKG5hbWUgJiYgdGhpcy5zdGF0ZS5kYXRhKXtcblx0XHRcdHRoaXMuc3RhdGUuZGF0YVtuYW1lXSA9IG51bGw7XG5cdFx0XHRkZWxldGUgdGhpcy5zdGF0ZS5kYXRhW25hbWVdO1xuXHRcdH1cblx0fSxcblx0X19yZW5kZXJDZWxsOiBmdW5jdGlvbiAoY29sdW1uLCBpbmRleCl7XG5cdFx0aWYoIXpuLmlzKGNvbHVtbiwgJ29iamVjdCcpKSB7IHJldHVybiBudWxsOyB9XG5cdFx0dmFyIF9lbGVtZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQodGhpcy5wcm9wcy5jZWxsUmVuZGVyLCB7XG5cdFx0XHRjb2x1bW46IGNvbHVtbixcblx0XHRcdGNlbGxJbmRleDogaW5kZXgsIFxuXHRcdFx0dGZpbHRlcjogdGhpc1xuXHRcdH0pO1xuXHRcdGlmKF9lbGVtZW50KXtcblx0XHRcdHJldHVybiBfZWxlbWVudDtcblx0XHR9XG5cdFx0XG5cdFx0dmFyIF9jb250ZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQoY29sdW1uLnJlbmRlciwge1xuXHRcdFx0Y29sdW1uOiBjb2x1bW4sXG5cdFx0XHRjZWxsSW5kZXg6IGluZGV4LCBcblx0XHRcdHRmaWx0ZXI6IHRoaXNcblx0XHR9KTtcblxuXHRcdGlmKCFfY29udGVudCAmJiBjb2x1bW4uZmlsdGVyKSB7XG5cdFx0XHR2YXIgX2ZpbHRlciA9IGNvbHVtbi5maWx0ZXI7XG5cdFx0XHRpZih6bi5pcyhfZmlsdGVyLCAnZnVuY3Rpb24nKSkge1xuXHRcdFx0XHRpZihfZmlsdGVyLnByb3RvdHlwZSAmJiBfZmlsdGVyLnByb3RvdHlwZS5yZW5kZXIpIHtcblx0XHRcdFx0XHRfY29udGVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KF9maWx0ZXIsIHtcblx0XHRcdFx0XHRcdGNvbHVtbjogY29sdW1uLFxuXHRcdFx0XHRcdFx0dGZpbHRlcjogdGhpc1xuXHRcdFx0XHRcdH0pO1xuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICBfZmlsdGVyID0gX2ZpbHRlci5jYWxsKG51bGwsIGNvbHVtbiwgdGhpcyk7XG4gICAgICAgICAgICAgICAgfVxuXHRcdFx0fVxuXG5cdFx0XHRpZih6bi5pcyhfZmlsdGVyLCAnb2JqZWN0JykpIHtcblx0XHRcdFx0dmFyIF9rZXkgPSBfZmlsdGVyLmtleSB8fCBjb2x1bW4ubmFtZTtcblx0XHRcdFx0aWYoem4uaXMoX2tleSwgJ2Z1bmN0aW9uJykpIHtcblx0XHRcdFx0XHRfa2V5ID0gX2tleS5jYWxsKG51bGwsIGNvbHVtbiwgdGhpcyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRfY29udGVudCA9IDxmaWx0ZXIuRmlsdGVyRmllbGQga2V5PXtfa2V5IHx8IHpuLnV1aWQoKX0gey4uLl9maWx0ZXJ9IG5hbWU9e2NvbHVtbi5uYW1lfSBvbkZpbHRlckNoYW5nZT17dGhpcy5fX29uRmlsdGVyQ2hhbmdlfSBvbkNhbmNlbD17dGhpcy5fX29uRmlsdGVyQ2FuY2VsfSAvPjtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR2YXIgX2NlbGwgPSB6bi5leHRlbmQoeyBzdHlsZToge30sIGNsYXNzTmFtZTogJycgfSwgdGhpcy5wcm9wcy5jZWxsKTtcblx0XHRyZXR1cm4gPHRkIGtleT17aW5kZXh9IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3RmaWx0ZXItY2VsbCcsIChjb2x1bW4uZml4ZWQ/J2ZpeGVkJzonJyksIF9jZWxsLmNsYXNzTmFtZSl9IHN0eWxlPXt6bnVpLnJlYWN0LnN0eWxlKF9jZWxsLnN0eWxlLCBjb2x1bW4uZml4ZWRTdHlsZXMpfT5cblx0XHRcdHsgX2NvbnRlbnQgfVxuXHRcdDwvdGQ+O1xuXHR9LFxuXHRfX3JlbmRlclJvdzogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF9lbGVtZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQodGhpcy5wcm9wcy5yb3dSZW5kZXIsIHtcblx0XHRcdHRmaWx0ZXI6IHRoaXNcblx0XHR9KTtcblx0XHRpZihfZWxlbWVudCl7XG5cdFx0XHRyZXR1cm4gX2VsZW1lbnQ7XG5cdFx0fVxuXHRcdHZhciBfcm93ID0gem4uZXh0ZW5kKHsgY2xhc3NOYW1lOiAnJywgc3R5bGU6IHt9IH0sIHRoaXMucHJvcHMucm93KTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHRyIGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ0ZmlsdGVyLXJvdyB6ci10YWJsZS10cm93XCIsIF9yb3cuY2xhc3NOYW1lKX0gc3R5bGU9e19yb3cuc3R5bGV9PlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0KHRoaXMucHJvcHMuY29sdW1uc3x8W10pLm1hcCh0aGlzLl9fcmVuZGVyQ2VsbClcblx0XHRcdFx0fVxuXHRcdFx0PC90cj5cblx0XHQpO1xuXHR9LFxuXHRyZW5kZXI6ZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHRoZWFkIGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci10YWJsZS10ZmlsdGVyXCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lLCB0aGlzLnN0YXRlLmNsYXNzTmFtZSl9IHN0eWxlPXt6bnVpLnJlYWN0LnN0eWxlKHRoaXMucHJvcHMuc3R5bGUsIHRoaXMuc3RhdGUuc3R5bGUpfT5cblx0XHRcdFx0e3RoaXMuX19yZW5kZXJSb3coKX1cblx0XHRcdDwvdGhlYWQ+XG5cdFx0KTtcblx0fVxufSk7IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSVEZvb3QnLFxuXHRfX3JlbmRlckNoaWxkcmVuOiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX2NvbHVtbnMgPSB0aGlzLnByb3BzLmNvbHVtbnMgfHwgW107XG5cdFx0aWYodGhpcy5wcm9wcy5jaGlsZHJlbil7XG5cdFx0XHRyZXR1cm4gPHRyIGNsYXNzTmFtZT1cInRmb290LXJvd1wiPlxuXHRcdFx0XHQ8dGQgY29sU3Bhbj17X2NvbHVtbnMubGVuZ3RofT57dGhpcy5wcm9wcy5jaGlsZHJlbn08L3RkPlxuXHRcdFx0PC90cj47XG5cdFx0fWVsc2V7XG5cdFx0XHRyZXR1cm4gdGhpcy5fX3JlbmRlclJvdygpO1xuXHRcdH1cblx0fSxcblx0X19yZW5kZXJDZWxsOiBmdW5jdGlvbiAoY29sdW1uLCBpbmRleCl7XG5cdFx0aWYoIXpuLmlzKGNvbHVtbiwgJ29iamVjdCcpKSB7IHJldHVybiBudWxsOyB9XG5cdFx0dmFyIF9lbGVtZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQodGhpcy5wcm9wcy5jZWxsUmVuZGVyLCB7XG5cdFx0XHRjb2x1bW46IGNvbHVtbixcblx0XHRcdGNlbGxJbmRleDogaW5kZXgsIFxuXHRcdFx0dGZvb3Q6IHRoaXNcblx0XHR9KTtcblx0XHRpZihfZWxlbWVudCl7XG5cdFx0XHRyZXR1cm4gX2VsZW1lbnQ7XG5cdFx0fVxuXG5cdFx0dmFyIF9jb250ZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQoY29sdW1uLnJlbmRlciB8fCBjb2x1bW4uZm9vdCwge1xuXHRcdFx0Y29sdW1uOiBjb2x1bW4sXG5cdFx0XHRjZWxsSW5kZXg6IGluZGV4LCBcblx0XHRcdHRmb290OiB0aGlzXG5cdFx0fSk7XG5cblx0XHRpZih0aGlzLnByb3BzLnJlbmRlcikge1xuXHRcdFx0X2NvbnRlbnQgPSB0aGlzLnByb3BzLnJlbmRlcihjb2x1bW4sIGluZGV4LCB0aGlzKTtcblx0XHR9XG5cblx0XHR2YXIgX2NlbGwgPSB6bi5leHRlbmQoeyBzdHlsZToge30sIGNsYXNzTmFtZTogJycgfSwgdGhpcy5wcm9wcy5jZWxsKTtcblx0XHRyZXR1cm4gPHRoIGtleT17aW5kZXh9IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3Rmb290LWNlbGwnLCBfY2VsbC5jbGFzc05hbWUpfSBzdHlsZT17X2NlbGwuc3R5bGV9PlxuXHRcdFx0eyBfY29udGVudCB9XG5cdFx0PC90aD47XG5cdH0sXG5cdF9fcmVuZGVyUm93OiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX2VsZW1lbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudCh0aGlzLnByb3BzLnJvd1JlbmRlciwge1xuXHRcdFx0dGhlYWQ6IHRoaXNcblx0XHR9KTtcblx0XHRpZihfZWxlbWVudCl7XG5cdFx0XHRyZXR1cm4gX2VsZW1lbnQ7XG5cdFx0fVxuXHRcdHZhciBfcm93ID0gem4uZXh0ZW5kKHsgY2xhc3NOYW1lOiAnJywgc3R5bGU6IHt9IH0sIHRoaXMucHJvcHMucm93KTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHRyIGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ0Zm9vdC1yb3dcIiwgX3Jvdy5jbGFzc05hbWUpfSBzdHlsZT17X3Jvdy5zdHlsZX0+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHQodGhpcy5wcm9wcy5jb2x1bW5zfHxbXSkubWFwKHRoaXMuX19yZW5kZXJDZWxsKVxuXHRcdFx0XHR9XG5cdFx0XHQ8L3RyPlxuXHRcdCk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHRmb290IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci10YWJsZS10Zm9vdFwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfT5cblx0XHRcdFx0e3RoaXMuX19yZW5kZXJDaGlsZHJlbigpfVxuXHRcdFx0PC90Zm9vdD5cblx0XHQpO1xuXHR9XG59KTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgVEhlYWRTb3J0ID0gcmVxdWlyZSgnLi9USGVhZFNvcnQnKTtcbnZhciBwb3B1cCA9IHJlcXVpcmUoJ3pudWktcmVhY3QtcG9wdXAnKTtcbnZhciB6cmpzb24gPSByZXF1aXJlKCd6bnVpLXJlYWN0LWpzb24nKTtcbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonVEhlYWQnLFxuXHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7fTtcblx0fSxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y2xhc3NOYW1lOiAnJyxcblx0XHRcdHN0eWxlOiB7fSxcblx0XHRcdHNvcnQ6IHt9LFxuXHRcdFx0ZmlsdGVyOiB7fVxuXHRcdH07XG5cdH0sXG5cdF9fb25Db2x1bW5Tb3J0OiBmdW5jdGlvbiAoc29ydCwgY29sdW1uKXtcblx0XHRpZihjb2x1bW4ubmFtZSkge1xuXHRcdFx0dGhpcy5zdGF0ZS5zb3J0W2NvbHVtbi5uYW1lXSA9IChzb3J0PT0nZmFTb3J0QWxwaGFEb3duJyA/ICdkZXNjJyA6ICdhc2MnKTtcblx0XHR9XG5cdFx0dGhpcy5wcm9wcy5vblNvcnQgJiYgdGhpcy5wcm9wcy5vblNvcnQodGhpcy5zdGF0ZS5zb3J0KTtcblx0fSxcblx0X19vbkNvbHVtbkVkaXRvckNoYW5nZTogZnVuY3Rpb24gKGRhdGEsIGNoaWxkLCByb290LCBpbmRleCl7XG4gICAgICAgIHZhciBfcm9vdCA9IHJvb3QgfHwgY2hpbGQ7XG5cdFx0dGhpcy5wcm9wcy5vbkNvbHVtbkNoYW5nZSAmJiB0aGlzLnByb3BzLm9uQ29sdW1uQ2hhbmdlKF9yb290LnN0YXRlLnZhbHVlLCBpbmRleCk7XG4gICAgfSxcblx0X19pY29uQ2xpY2tSZW5kZXI6IGZ1bmN0aW9uIChjb2x1bW4sIGluZGV4KXtcblx0XHRyZXR1cm4gPGRpdiBzdHlsZT17e3BhZGRpbmc6IDEwLCBtYXhIZWlnaHQ6IDUwMCwgd2lkdGg6IDQwMCwgb3ZlcmZsb3c6ICdhdXRvJ319PlxuXHRcdFx0PHpyanNvbi5lZGl0b3Iub2JqZWN0IGZvbGQ9e2ZhbHNlfVxuXHRcdFx0XHRkaXNwbGF5Q2xvc3VyZT17dHJ1ZX0gXG5cdFx0XHRcdGRpc3BsYXlJdGVtQ291bnQ9e3RydWV9IFxuXHRcdFx0XHRsYWJlbD17J0NvbHVtbid9IFxuXHRcdFx0XHR2YWx1ZT17Y29sdW1ufSBcblx0XHRcdFx0b25DaGFuZ2U9eyhkYXRhLCBjaGlsZCwgcm9vdCk9PnRoaXMuX19vbkNvbHVtbkVkaXRvckNoYW5nZShkYXRhLCBjaGlsZCwgcm9vdCwgaW5kZXgpfSAvPlxuXHRcdDwvZGl2Pjtcblx0fSxcblx0X19yZW5kZXJDZWxsOiBmdW5jdGlvbiAoY29sdW1uLCBpbmRleCl7XG5cdFx0aWYoIXpuLmlzKGNvbHVtbiwgJ29iamVjdCcpKSB7IHJldHVybiBudWxsOyB9XG5cdFx0dmFyIF9lbGVtZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQodGhpcy5wcm9wcy5jZWxsUmVuZGVyLCB7XG5cdFx0XHRjb2x1bW46IGNvbHVtbixcblx0XHRcdGNlbGxJbmRleDogaW5kZXgsIFxuXHRcdFx0dGhlYWQ6IHRoaXNcblx0XHR9KTtcblx0XHRpZihfZWxlbWVudCl7XG5cdFx0XHRyZXR1cm4gX2VsZW1lbnQ7XG5cdFx0fVxuXG5cdFx0dmFyIF9jb250ZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQoY29sdW1uLnJlbmRlciB8fCBjb2x1bW4uaGVhZCwge1xuXHRcdFx0XHRjb2x1bW46IGNvbHVtbixcblx0XHRcdFx0Y2VsbEluZGV4OiBpbmRleCwgXG5cdFx0XHRcdHRoZWFkOiB0aGlzLFxuXHRcdFx0XHR0YWJsZTogdGhpcy5wcm9wcy50YWJsZVxuXHRcdFx0fSksXG5cdFx0XHRfbWFwcGluZyA9IHRoaXMucHJvcHMua2V5TWFwcGluZyB8fCB7fSxcblx0XHRcdF9sYWJlbEtleSA9IF9tYXBwaW5nWydsYWJlbCddIHx8ICdsYWJlbCcsXG5cdFx0XHRfbGFiZWwgPSBjb2x1bW5bX2xhYmVsS2V5XTtcblx0XHRpZighX2NvbnRlbnQpIHtcblx0XHRcdF9jb250ZW50ID0gPGRpdiBjbGFzc05hbWU9XCJjZWxsLWxhYmVsXCIgdGl0bGU9e19sYWJlbH0+XG5cdFx0XHRcdHsgISFjb2x1bW4ucmVxdWlyZWQgJiYgPHNwYW4gZGF0YS16ci1wb3B1cC10b29sdGlwPVwi5b+F6KaB5a2X5q61XCIgY2xhc3NOYW1lPVwicmVxdWlyZWRcIj4qPC9zcGFuPn1cblx0XHRcdFx0eyBfbGFiZWwgfVxuXHRcdFx0XHR7IFxuXHRcdFx0XHRcdCEhY29sdW1uLmVkaXRhYmxlICYmIDxwb3B1cC5Ecm9wZG93biBcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImNlbGwtZWRpdG9yXCIgXG5cdFx0XHRcdFx0XHRwb3BvdmVyPXt7XG5cdFx0XHRcdFx0XHRcdHJlbmRlcjogdGhpcy5fX2ljb25DbGlja1JlbmRlcihjb2x1bW4sIGluZGV4KSxcblx0XHRcdFx0XHRcdFx0Y2xvc2VhYmxlOiB0cnVlXG5cdFx0XHRcdFx0XHR9fSA+XG5cdFx0XHRcdFx0XHQ8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1wcmVmaXg9XCJmYXNcIiBkYXRhLWljb249XCJlZGl0XCIgY2xhc3NOYW1lPVwiaWNvbiBzdmctaW5saW5lLS1mYSBmYS1lZGl0IGZhLXctMTggXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDU3NiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk00MDIuNiA4My4ybDkwLjIgOTAuMmMzLjggMy44IDMuOCAxMCAwIDEzLjhMMjc0LjQgNDA1LjZsLTkyLjggMTAuM2MtMTIuNCAxLjQtMjIuOS05LjEtMjEuNS0yMS41bDEwLjMtOTIuOEwzODguOCA4My4yYzMuOC0zLjggMTAtMy44IDEzLjggMHptMTYyLTIyLjlsLTQ4LjgtNDguOGMtMTUuMi0xNS4yLTM5LjktMTUuMi01NS4yIDBsLTM1LjQgMzUuNGMtMy44IDMuOC0zLjggMTAgMCAxMy44bDkwLjIgOTAuMmMzLjggMy44IDEwIDMuOCAxMy44IDBsMzUuNC0zNS40YzE1LjItMTUuMyAxNS4yLTQwIDAtNTUuMnpNMzg0IDM0Ni4yVjQ0OEg2NFYxMjhoMjI5LjhjMy4yIDAgNi4yLTEuMyA4LjUtMy41bDQwLTQwYzcuNi03LjYgMi4yLTIwLjUtOC41LTIwLjVINDhDMjEuNSA2NCAwIDg1LjUgMCAxMTJ2MzUyYzAgMjYuNSAyMS41IDQ4IDQ4IDQ4aDM1MmMyNi41IDAgNDgtMjEuNSA0OC00OFYzMDYuMmMwLTEwLjctMTIuOS0xNi0yMC41LTguNWwtNDAgNDBjLTIuMiAyLjMtMy41IDUuMy0zLjUgOC41elwiPjwvcGF0aD48L3N2Zz5cblx0XHRcdFx0XHQ8L3BvcHVwLkRyb3Bkb3duPlxuXHRcdFx0XHR9XG5cdFx0XHQ8L2Rpdj47XG5cdFx0fVxuXG5cdFx0dmFyIF9jZWxsID0gem4uZXh0ZW5kKHsgc3R5bGU6IHt9LCBjbGFzc05hbWU6ICcnIH0sIHRoaXMucHJvcHMuY2VsbCwgY29sdW1uKTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHRoIGtleT17aW5kZXh9IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3RoZWFkLWNlbGwnLCAoY29sdW1uLmZpeGVkPydmaXhlZCc6JycpLCBfY2VsbC5jbGFzc05hbWUpfSBzdHlsZT17em51aS5yZWFjdC5zdHlsZShfY2VsbC5zdHlsZSwgY29sdW1uLmZpeGVkU3R5bGVzKX0+XG5cdFx0XHRcdHsgX2NvbnRlbnQgfVxuXHRcdFx0XHR7ICEhY29sdW1uLnNvcnQgJiYgPFRIZWFkU29ydCBjbGFzc05hbWU9XCJjZWxsLXNvcnRcIiBvblNvcnQ9eyhzb3J0KT0+dGhpcy5fX29uQ29sdW1uU29ydChzb3J0LCBjb2x1bW4pfSAvPn1cblx0XHRcdDwvdGg+XG5cdFx0KTtcblx0fSxcblx0X19yZW5kZXJSb3c6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMucm93UmVuZGVyLCB7XG5cdFx0XHR0aGVhZDogdGhpc1xuXHRcdH0pO1xuXHRcdGlmKF9lbGVtZW50KXtcblx0XHRcdHJldHVybiBfZWxlbWVudDtcblx0XHR9XG5cdFx0dmFyIF9yb3cgPSB6bi5leHRlbmQoeyBjbGFzc05hbWU6ICcnLCBzdHlsZToge30gfSwgdGhpcy5wcm9wcy5yb3cpO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8dHIgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInRoZWFkLXJvd1wiLCBfcm93LmNsYXNzTmFtZSl9IHN0eWxlPXtfcm93LnN0eWxlfT5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdCh0aGlzLnByb3BzLmNvbHVtbnN8fFtdKS5tYXAodGhpcy5fX3JlbmRlckNlbGwpXG5cdFx0XHRcdH1cblx0XHRcdDwvdHI+XG5cdFx0KTtcblx0fSxcblx0cmVuZGVyOmZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDx0aGVhZCBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItdGFibGUtdGhlYWRcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUsIHRoaXMuc3RhdGUuY2xhc3NOYW1lKX0gc3R5bGU9e3pudWkucmVhY3Quc3R5bGUodGhpcy5wcm9wcy5zdHlsZSwgdGhpcy5zdGF0ZS5zdHlsZSl9PlxuXHRcdFx0XHR7dGhpcy5fX3JlbmRlclJvdygpfVxuXHRcdFx0PC90aGVhZD5cblx0XHQpO1xuXHR9XG59KTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUlRIZWFkU29ydCcsXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHNvcnQ6ICdmYVNvcnQnLFxuXHRcdH1cblx0fSxcblx0X19yZW5kZXJJY29uOiBmdW5jdGlvbiAoKXtcblx0XHRzd2l0Y2godGhpcy5zdGF0ZS5zb3J0KXtcblx0XHRcdGNhc2UgXCJmYVNvcnRcIjpcblx0XHRcdFx0cmV0dXJuIDxzdmcgb25DbGljaz17dGhpcy5fX2ljb25DbGlja30gYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhc1wiIGRhdGEtaWNvbj1cInNvcnRcIiBjbGFzc05hbWU9XCJpY29uIHN2Zy1pbmxpbmUtLWZhIGZhLXNvcnQgZmEtdy0xMCBcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTQxIDI4OGgyMzhjMjEuNCAwIDMyLjEgMjUuOSAxNyA0MUwxNzcgNDQ4Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMEwyNCAzMjljLTE1LjEtMTUuMS00LjQtNDEgMTctNDF6bTI1NS0xMDVMMTc3IDY0Yy05LjQtOS40LTI0LjYtOS40LTMzLjkgMEwyNCAxODNjLTE1LjEgMTUuMS00LjQgNDEgMTcgNDFoMjM4YzIxLjQgMCAzMi4xLTI1LjkgMTctNDF6XCI+PC9wYXRoPjwvc3ZnPjtcblx0XHRcdGNhc2UgXCJmYVNvcnRBbHBoYURvd25cIjpcblx0XHRcdFx0cmV0dXJuIDxzdmcgb25DbGljaz17dGhpcy5fX2ljb25DbGlja30gYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhc1wiIGRhdGEtaWNvbj1cInNvcnQtYWxwaGEtZG93blwiIGNsYXNzTmFtZT1cImljb24gc3ZnLWlubGluZS0tZmEgZmEtc29ydC1hbHBoYS1kb3duIGZhLXctMTQgXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDQ0OCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0xNzYgMzUyaC00OFY0OGExNiAxNiAwIDAgMC0xNi0xNkg4MGExNiAxNiAwIDAgMC0xNiAxNnYzMDRIMTZjLTE0LjE5IDAtMjEuMzYgMTcuMjQtMTEuMjkgMjcuMzFsODAgOTZhMTYgMTYgMCAwIDAgMjIuNjIgMGw4MC05NkMxOTcuMzUgMzY5LjI2IDE5MC4yMiAzNTIgMTc2IDM1MnptMjQwLTY0SDI4OGExNiAxNiAwIDAgMC0xNiAxNnYzMmExNiAxNiAwIDAgMCAxNiAxNmg1NmwtNjEuMjYgNzAuNDVBMzIgMzIgMCAwIDAgMjcyIDQ0Ni4zN1Y0NjRhMTYgMTYgMCAwIDAgMTYgMTZoMTI4YTE2IDE2IDAgMCAwIDE2LTE2di0zMmExNiAxNiAwIDAgMC0xNi0xNmgtNTZsNjEuMjYtNzAuNDVBMzIgMzIgMCAwIDAgNDMyIDMyMS42M1YzMDRhMTYgMTYgMCAwIDAtMTYtMTZ6bTMxLjA2LTg1LjM4bC01OS4yNy0xNjBBMTYgMTYgMCAwIDAgMzcyLjcyIDMyaC00MS40NGExNiAxNiAwIDAgMC0xNS4wNyAxMC42MmwtNTkuMjcgMTYwQTE2IDE2IDAgMCAwIDI3MiAyMjRoMjQuODNhMTYgMTYgMCAwIDAgMTUuMjMtMTEuMDhsNC40Mi0xMi45Mmg3MWw0LjQxIDEyLjkyQTE2IDE2IDAgMCAwIDQwNy4xNiAyMjRINDMyYTE2IDE2IDAgMCAwIDE1LjA2LTIxLjM4ek0zMzUuNjEgMTQ0TDM1MiA5NmwxNi4zOSA0OHpcIj48L3BhdGg+PC9zdmc+O1xuXHRcdFx0Y2FzZSBcImZhU29ydEFscGhhVXBcIjpcblx0XHRcdFx0cmV0dXJuIDxzdmcgb25DbGljaz17dGhpcy5fX2ljb25DbGlja30gYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhc1wiIGRhdGEtaWNvbj1cInNvcnQtYWxwaGEtdXBcIiBjbGFzc05hbWU9XCJpY29uIHN2Zy1pbmxpbmUtLWZhIGZhLXNvcnQtYWxwaGEtdXAgZmEtdy0xNCBcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNDQ4IDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTE2IDE2MGg0OHYzMDRhMTYgMTYgMCAwIDAgMTYgMTZoMzJhMTYgMTYgMCAwIDAgMTYtMTZWMTYwaDQ4YzE0LjIxIDAgMjEuMzgtMTcuMjQgMTEuMzEtMjcuMzFsLTgwLTk2YTE2IDE2IDAgMCAwLTIyLjYyIDBsLTgwIDk2Qy01LjM1IDE0Mi43NCAxLjc4IDE2MCAxNiAxNjB6bTQwMCAxMjhIMjg4YTE2IDE2IDAgMCAwLTE2IDE2djMyYTE2IDE2IDAgMCAwIDE2IDE2aDU2bC02MS4yNiA3MC40NUEzMiAzMiAwIDAgMCAyNzIgNDQ2LjM3VjQ2NGExNiAxNiAwIDAgMCAxNiAxNmgxMjhhMTYgMTYgMCAwIDAgMTYtMTZ2LTMyYTE2IDE2IDAgMCAwLTE2LTE2aC01Nmw2MS4yNi03MC40NUEzMiAzMiAwIDAgMCA0MzIgMzIxLjYzVjMwNGExNiAxNiAwIDAgMC0xNi0xNnptMzEuMDYtODUuMzhsLTU5LjI3LTE2MEExNiAxNiAwIDAgMCAzNzIuNzIgMzJoLTQxLjQ0YTE2IDE2IDAgMCAwLTE1LjA3IDEwLjYybC01OS4yNyAxNjBBMTYgMTYgMCAwIDAgMjcyIDIyNGgyNC44M2ExNiAxNiAwIDAgMCAxNS4yMy0xMS4wOGw0LjQyLTEyLjkyaDcxbDQuNDEgMTIuOTJBMTYgMTYgMCAwIDAgNDA3LjE2IDIyNEg0MzJhMTYgMTYgMCAwIDAgMTUuMDYtMjEuMzh6TTMzNS42MSAxNDRMMzUyIDk2bDE2LjM5IDQ4elwiPjwvcGF0aD48L3N2Zz47XG5cdFx0fVx0XG5cdH0sXG5cdHJlbmRlcjpmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLXRoZWFkLXNvcnQnLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfT5cblx0XHRcdFx0e3RoaXMuX19yZW5kZXJJY29uKCl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSZWFjdERPTSA9IHpudWkuUmVhY3RET00gfHwgcmVxdWlyZSgncmVhY3QtZG9tJyk7XG52YXIgVENlbGwgPSByZXF1aXJlKCcuL1RDZWxsJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJUUm93Jyxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRjbGFzc05hbWU6ICcnLFxuXHRcdFx0c3R5bGU6IHt9XG5cdFx0fVxuXHR9LFxuXHRfX2dldFRhcmdldFREOiBmdW5jdGlvbiAodGFyZ2V0KSB7XG5cdFx0aWYodGFyZ2V0ICYmIHRhcmdldC50YWdOYW1lIT09J1REJyl7XG5cdFx0XHRyZXR1cm4gdGhpcy5fX2dldFRhcmdldFREKHRhcmdldC5wYXJlbnROb2RlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRhcmdldDtcblx0XHR9XG5cdH0sXG5cdF9fb25Sb3dDbGljazogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHR2YXIgX3RoaXMgPSB0aGlzO1xuXHRcdHZhciBfdGQgPSB0aGlzLl9fZ2V0VGFyZ2V0VEQoZXZlbnQudGFyZ2V0KTtcblx0XHRldmVudC5kYXRhID0ge1xuXHRcdFx0ZmluZFRSRE9NOiBmdW5jdGlvbiAoKXtcblx0XHRcdFx0cmV0dXJuIFJlYWN0RE9NLmZpbmRET01Ob2RlKF90aGlzKTtcblx0XHRcdH0sXG5cdFx0XHR0ZDogX3RkLFxuXHRcdFx0dHJvdzogdGhpc1xuXHRcdH07XG5cdFx0dGhpcy5wcm9wcy5vbkNsaWNrICYmIHRoaXMucHJvcHMub25DbGljayhldmVudCk7XG5cdFx0dGhpcy5wcm9wcy5vblJvd0NsaWNrICYmIHRoaXMucHJvcHMub25Sb3dDbGljayhldmVudCk7XG5cdH0sXG5cdF9fY2VsbFJlbmRlcjogZnVuY3Rpb24gKGNvbHVtbiwgaW5kZXgpe1xuXHRcdGlmKCF6bi5pcyhjb2x1bW4sICdvYmplY3QnKSkgeyByZXR1cm4gbnVsbDt9XG5cdFx0dmFyIF9wcm9wcyA9IHpuLmV4dGVuZCh7XG5cdFx0XHRjb2x1bW46IGNvbHVtbixcblx0XHRcdHRyb3c6IHRoaXMsXG5cdFx0XHRyb3dJbmRleDogdGhpcy5wcm9wcy5yb3dJbmRleCxcblx0XHRcdGNlbGxJbmRleDogaW5kZXgsXG5cdFx0XHRjb250ZXh0OiB0aGlzLnByb3BzLmNvbnRleHQsXG5cdFx0XHRkYXRhOiB0aGlzLnByb3BzLmRhdGEsXG5cdFx0XHR0Ym9keTogdGhpcy5wcm9wcy50Ym9keVxuXHRcdH0sIHRoaXMucHJvcHMuY2VsbCwgY29sdW1uKTtcblx0XHR2YXIgX2VsZW1lbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudCh0aGlzLnByb3BzLmNlbGxSZW5kZXIsIF9wcm9wcywgdGhpcy5wcm9wcy5jb250ZXh0KTtcblxuXHRcdGlmKF9lbGVtZW50KXtcblx0XHRcdHJldHVybiBfZWxlbWVudDtcblx0XHR9XG5cblx0XHRyZXR1cm4gPFRDZWxsIGtleT17aW5kZXh9IHsuLi5fcHJvcHN9IGZpeGVkU3R5bGU9e3RoaXMuX19maXhlZFdpZHRoKGluZGV4KX0gb25DZWxsQ2xpY2s9e3RoaXMucHJvcHMub25DZWxsQ2xpY2t9IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3Ryb3ctY2VsbCcsIF9wcm9wcy5jbGFzc05hbWUpfSAvPjtcblx0fSxcblx0X19maXhlZFdpZHRoOiBmdW5jdGlvbiAoaW5kZXgpe1xuXHRcdHZhciBfY29sdW1ucyA9IHRoaXMucHJvcHMuY29sdW1uc3x8W10sIF93aWR0aCA9IDA7XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IGluZGV4OyBpKyspe1xuXHRcdFx0aWYoX2NvbHVtbnNbaV0uZml4ZWQpIHtcblx0XHRcdFx0X3dpZHRoICs9IF9jb2x1bW5zW2ldLndpZHRoIHx8IDA7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdGxlZnQ6IF93aWR0aFxuXHRcdH07XG5cdH0sXG5cdHJlbmRlcjpmdW5jdGlvbigpe1xuXHRcdHZhciBfY2xhc3NOYW1lID0gdGhpcy5wcm9wcy5jbGFzc05hbWUsIF9zdHlsZSA9IHRoaXMucHJvcHMuc3R5bGU7XG5cdFx0aWYodHlwZW9mIF9jbGFzc05hbWUgPT0gJ2Z1bmN0aW9uJyl7XG5cdFx0XHRfY2xhc3NOYW1lID0gX2NsYXNzTmFtZSh0aGlzLnByb3BzLmRhdGEsIHRoaXMpO1xuXHRcdH1cblx0XHRpZih0eXBlb2YgX3N0eWxlID09ICdmdW5jdGlvbicpe1xuXHRcdFx0X3N0eWxlID0gX3N0eWxlKHRoaXMucHJvcHMuZGF0YSwgdGhpcyk7XG5cdFx0fVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8dHIgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItdGFibGUtdHJvdycsIF9jbGFzc05hbWUsIHRoaXMuc3RhdGUuY2xhc3NOYW1lKX0gXG5cdFx0XHRcdHN0eWxlPXt6bnVpLnJlYWN0LnN0eWxlKF9zdHlsZSwgdGhpcy5zdGF0ZS5zdHlsZSl9XG5cdFx0XHRcdGRhdGEtYWN0aXZlPXt0aGlzLnByb3BzLmFjdGl2ZX0gXG5cdFx0XHRcdGRhdGEtY2hlY2tlZD17dGhpcy5wcm9wcy5jaGVja2VkfSBcblx0XHRcdFx0b25DbGljaz17dGhpcy5fX29uUm93Q2xpY2t9PlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0KHRoaXMucHJvcHMuY29sdW1uc3x8W10pLm1hcCh0aGlzLl9fY2VsbFJlbmRlcilcblx0XHRcdFx0fVxuXHRcdFx0PC90cj5cblx0XHQpO1xuXHR9XG59KTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIENvbGdyb3VwOiByZXF1aXJlKCcuL0NvbGdyb3VwJyksXG4gICAgVEZpbHRlcjogcmVxdWlyZSgnLi9URmlsdGVyJyksXG4gICAgVEJvZHk6IHJlcXVpcmUoJy4vVEJvZHknKSxcbiAgICBUQm9keUVtcHR5OiByZXF1aXJlKCcuL1RCb2R5RW1wdHknKSxcbiAgICBUQ2VsbDogcmVxdWlyZSgnLi9UQ2VsbCcpLFxuICAgIFRGb290OiByZXF1aXJlKCcuL1RGb290JyksXG4gICAgVEhlYWQ6IHJlcXVpcmUoJy4vVEhlYWQnKSxcbiAgICBUUm93OiByZXF1aXJlKCcuL1RSb3cnKVxufTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcIlJlYWN0XCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiUmVhY3RET01cIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJmaWx0ZXJcIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJpbnB1dFwiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcImpzb25cIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJsb2FkZXJcIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJwYWdlclwiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcInBvcHVwXCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wic2VsZWN0b3JcIl07IH0oKSk7Il0sInNvdXJjZVJvb3QiOiIifQ==