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
      fixed: true,
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
      key: _key,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vUG9wdXBUYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9UYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9UYWJsZUVkaXRvci5qcyIsIndlYnBhY2s6Ly8vLi9UYWJsZVBhZ2VyLmpzIiwid2VicGFjazovLy8uL2NlbGwvQ2hlY2tib3guanMiLCJ3ZWJwYWNrOi8vLy4vY2VsbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi90YWJsZS9Db2xncm91cC5qcyIsIndlYnBhY2s6Ly8vLi90YWJsZS9UQm9keS5qcyIsIndlYnBhY2s6Ly8vLi90YWJsZS9UQm9keUVtcHR5LmpzIiwid2VicGFjazovLy8uL3RhYmxlL1RDZWxsLmpzIiwid2VicGFjazovLy8uL3RhYmxlL1RGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdGFibGUvVEZvb3QuanMiLCJ3ZWJwYWNrOi8vLy4vdGFibGUvVEhlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vdGFibGUvVEhlYWRTb3J0LmpzIiwid2VicGFjazovLy8uL3RhYmxlL1RSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vdGFibGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdERPTVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpbHRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImlucHV0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianNvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvYWRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhZ2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicG9wdXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZWxlY3RvclwiIl0sIm5hbWVzIjpbIlJlYWN0Iiwiem51aSIsInJlcXVpcmUiLCJUYWJsZVBhZ2VyIiwic2VsZWN0b3IiLCJtb2R1bGUiLCJleHBvcnRzIiwiY3JlYXRlQ2xhc3MiLCJkaXNwbGF5TmFtZSIsImdldERlZmF1bHRQcm9wcyIsInRleHRLZXkiLCJ2YWx1ZUtleSIsImdldEluaXRpYWxTdGF0ZSIsInRleHQiLCJwcm9wcyIsInZhbHVlIiwiZ2V0VGV4dCIsInN0YXRlIiwic2V0VGV4dCIsInNldFN0YXRlIiwiZ2V0VmFsdWUiLCJzZXRWYWx1ZSIsIl9fb25Sb3dDbGljayIsImV2ZW50IiwiZHJvcGRvd25FdmVudCIsIl9kYXRhIiwiZGF0YSIsInRyb3ciLCJwb3B1cFNlbGVjdCIsInNldERhdGEiLCJkcm9wZG93biIsImNsb3NlUG9wb3ZlciIsIm9uQ2hhbmdlIiwiX19wb3B1cFJlbmRlciIsImZpbHRlciIsIm9uUm93Q2xpY2siLCJyZW5kZXIiLCJyZWFjdCIsImNsYXNzbmFtZSIsImNsYXNzTmFtZSIsInN0eWxlIiwidGFibGUiLCJkYXRhSW5kZXhFbmFibGVkIiwiZml4ZWRMYXlvdXQiLCJyb3dLZXkiLCJjb2x1bW5zIiwiY2hlY2tlZHMiLCJjb21wb25lbnREaWRNb3VudCIsIm9uQ29tcG9uZW50RGlkTW91bnQiLCJfX3NvcnRGdW5jdGlvbiIsIm5leHQiLCJwcmV2Iiwia2V5IiwiX3NvcnQiLCJzb3J0RnVuY3Rpb24iLCJfX29uU29ydCIsInNvcnRzIiwiX3JldHVybiIsIm9uU29ydENoYW5nZSIsInpuIiwiaXNaTk9iamVjdCIsIl9hcmd2IiwicmVmcmVzaCIsInNvcnQiLCJmb3JjZVVwZGF0ZSIsIl9fb25GaWx0ZXIiLCJmaWx0ZXJzIiwib25GaWx0ZXJDaGFuZ2UiLCJfX29uVEJvZHlFYWNoUm93RGF0YSIsImluZGV4IiwidGJvZHkiLCJfdmFsdWVLZXkiLCJjaGVja2JveCIsIl92YWx1ZSIsImluZGV4T2YiLCJwdXNoIiwiX190Ym9keURhdGFSZW5kZXIiLCJsZW5ndGgiLCJjb250ZXh0Iiwicm93IiwiZml4ZWRDb2x1bW5zIiwiX190Ym9keUxvYWRpbmdSZW5kZXIiLCJfX29uVEhlYWRDb2x1bW5DaGFuZ2UiLCJfX3Rib2R5RGF0YUxvYWRlZCIsIm9uRGF0YUxvYWRlZCIsImlzIiwicmVzdWx0IiwiX19vbkRhdGFDcmVhdGVkIiwibGlmeWN5Y2xlIiwib25EYXRhQ3JlYXRlZCIsImNhbGxiYWNrIiwicmVmcmVzaEhlYWRlcnMiLCJfX2ZpeGVkU3R5bGVzIiwiX2NvbHVtbnMiLCJfd2lkdGgiLCJpIiwiZml4ZWQiLCJ3aWR0aCIsImxlZnQiLCJfX3JlbmRlclRCb2R5IiwiX3Jlc3VsdCIsIm9uRGF0YUluaXRpYWwiLCJsb2FkaW5nRW5hYmxlZCIsInJlc3BvbnNlSGFuZGxlciIsIl9fb25GaXhlZExheW91dEJvZHlTY3JvbGwiLCJlIiwiX2xheW91dEhlYWRlciIsInNjcm9sbExlZnQiLCJ0YXJnZXQiLCJfX3JlbmRlciIsIm1hcCIsIml0ZW0iLCJmaXhlZFN0eWxlcyIsImJpbmQiLCJyZWYiLCJjZWxsUGFkZGluZyIsImNlbGxTcGFjaW5nIiwiYXR0cnMiLCJjYXB0aW9uIiwiY29sZ3JvdXAiLCJrZXlNYXBwaW5nIiwidGhlYWQiLCJ0ZmlsdGVyIiwidGZvb3QiLCJjaGlsZHJlblJlbmRlciIsImNoaWxkcmVuIiwiX19yb3dIZWFkQ2hlY2tib3hDaGVja2VkIiwiX2NoZWNrZWRzIiwiX19vblJvd0hlYWRDaGVja2JveENoYW5nZSIsInN0b3BQcm9wYWdhdGlvbiIsImNoZWNrZWQiLCJzcGxpY2UiLCJvbkNoZWNrYm94Q2hhbmdlIiwiX19pbml0Q2hlY2tib3giLCJfY2hlY2tib3giLCJoZWFkIiwiYXJndiIsIl90YWJsZSIsImp1c3RpZnlDb250ZW50IiwidXVpZCIsImJvZHkiLCJ0eXBlIiwiZXh0ZW5kIiwidW5zaGlmdCIsIl9faW5pdEluZGV4Q29sdW1uIiwibGFiZWwiLCJuYW1lIiwidGV4dEFsaWduIiwicm93SW5kZXgiLCJfX2NvbHVtbnNMb2FkZWQiLCJfdGVtcCIsIl9jb2x1bW5JdGVyYXRvciIsImNvbHVtbkl0ZXJhdG9yIiwiY29sdW1uIiwiZGVlcEFzc2lnbiIsIm9uQ29sdW1uc0xvYWRlZCIsIl9fb25Db2x1bW5EYXRhQ3JlYXRlZCIsImxpZmVjeWNsZSIsIm9uQ29sdW1uc0NyZWF0ZWQiLCJnZXREYXRhIiwicmVtb3ZlUm93RGF0YSIsInVwZGF0ZVJvd0RhdGEiLCJfaW5kZXgiLCJvbkNvbHVtbkxvYWRpbmciLCJvbkNvbHVtbkxvYWRFcnJvciIsIlRhYmxlIiwiaW5wdXQiLCJfX2NlbGxDaGFuZ2UiLCJ0Y2VsbCIsIl9fY29sdW1uQm9keVJlbmRlciIsIl9fY29sdW1uSXRlcmF0b3IiLCJvbkRhdGFDaGFuZ2UiLCJhZGRSb3ciLCJjb25jYXQiLCJwYWdlciIsImNvdW50IiwiY3VycmVudCIsInRvdGFsIiwicGFnZUluZGV4IiwicGFnZVNpemUiLCJzZXQiLCJfdHlwZSIsInNldFBhZ2VJbmRleCIsIl9fb25EYXRhSW5pdGlhbCIsIl9faGFuZGxlUGFnZUNoYW5nZWQiLCJuZXdQYWdlIiwib25QYWdlQ2hhbmdlZCIsIl9faGFuZGxlUGFnZVNpemVDaGFuZ2UiLCJfX3JlbmRlclBhZ2VyIiwiX2NvbHVtblNpemUiLCJfc3RhdGUiLCJfZWxlbWVudCIsIl9wYWdlclByb3BzIiwib25QYWdlU2l6ZUNoYW5nZSIsIl9Db21wb25lbnQiLCJQYWdlciIsInBhdGgiLCJ3aW5kb3ciLCJjb21wb25lbnQiLCJjcmVhdGVSZWFjdEVsZW1lbnQiLCJwYWdlclJlbmRlciIsIl9tZXRob2QiLCJtZXRob2QiLCJfcGFyYW1zIiwiX2tleU1hcHMiLCJrZXlNYXBzIiwicGFyYW1zIiwiX19vbkRhdGFMb2FkZWQiLCJ6eG56IiwiY29kZSIsImNvbnNvbGUiLCJlcnJvciIsImRldGFpbCIsIl9wYWdlckNvdW50IiwiTWF0aCIsImNlaWwiLCJfX29uRmlsdGVyQ2hhbmdlIiwiQ2hlY2tib3giLCJfX29uQ2hlY2tib3hDaGFuZ2UiLCJfX29uSGVhZENoYW5nZSIsIl9fb25Cb2R5Q2hhbmdlIiwibG9nIiwiY2VsbCIsIlBvcHVwVGFibGUiLCJUYWJsZUVkaXRvciIsIl9rZXlNYXBwaW5nIiwiVFJvdyIsImxvYWRlciIsIl9wYWdlU2l6ZSIsIl9jb2x1bW5LZXlNYXAiLCJfZGVmYXVsdCIsInVuZGVmaW5lZCIsImFjdGl2ZSIsImNvbHVtbktleU1hcCIsInBhZ2VDb3VudCIsImxvYWRpbmciLCJfX2luaXRpYWxEYXRhSXRlbSIsImZvcm1hdCIsImRhdGFUeXBlIiwiZXZhbCIsImVyciIsInN0cmluZ2lmeVByaWNlIiwiX19nZXREYXRhIiwiX3BhZ2VJbmRleCIsInNsaWNlIiwibWluIiwiX19yZW5kZXJMb2FkaW5nIiwibG9hZGluZ1JlbmRlciIsIl9sb2FkaW5nIiwiX19yZW5kZXJFbXB0eSIsImVtcHR5UmVuZGVyIiwiX2VtcHR5IiwiZW1wdHkiLCJfX29uQ2VsbENsaWNrIiwib25DZWxsQ2xpY2siLCJfX3JlbmRlclJvdyIsImVhY2hSb3dEYXRhIiwicm93UmVuZGVyIiwiX3Jvd0tleSIsIl9rZXkiLCJjZWxsUmVuZGVyIiwiX19wYWdlQ2hhbmdlIiwiX19wYWdlc1JlbmRlciIsIl9wYWdlQ291bnQiLCJfcGFnZXMiLCJfX3JlbmRlckRhdGEiLCJSZWFjdERPTSIsImRpc2FibGVkIiwiX19yZW5kZXJDZWxsQ29udGVudCIsIl9yZW5kZXIiLCJjZWxsSW5kZXgiLCJfX2NlbGxDbGljayIsIl90aGlzIiwiZmluZFRERE9NIiwiZmluZERPTU5vZGUiLCJvbkNsaWNrIiwiX2NvbHVtbiIsImJvZHlDbGFzc05hbWUiLCJib2R5U3R5bGUiLCJmaWx0ZXJGaWVsZCIsIm9wdCIsImVtcHR5VmFsdWVFbmFibGVkIiwib25GaWx0ZXIiLCJfX29uRmlsdGVyQ2FuY2VsIiwiX19yZW5kZXJDZWxsIiwiX2NvbnRlbnQiLCJfZmlsdGVyIiwicHJvdG90eXBlIiwiY2FsbCIsIl9jZWxsIiwiX3JvdyIsIl9fcmVuZGVyQ2hpbGRyZW4iLCJmb290IiwiVEhlYWRTb3J0IiwicG9wdXAiLCJ6cmpzb24iLCJfX29uQ29sdW1uU29ydCIsIm9uU29ydCIsIl9fb25Db2x1bW5FZGl0b3JDaGFuZ2UiLCJjaGlsZCIsInJvb3QiLCJfcm9vdCIsIm9uQ29sdW1uQ2hhbmdlIiwiX19pY29uQ2xpY2tSZW5kZXIiLCJwYWRkaW5nIiwibWF4SGVpZ2h0Iiwib3ZlcmZsb3ciLCJfX3NvcnRSZW5kZXIiLCJfbWFwcGluZyIsIl9sYWJlbEtleSIsIl9sYWJlbCIsInJlcXVpcmVkIiwiZWRpdGFibGUiLCJjbG9zZWFibGUiLCJfX3JlbmRlckljb24iLCJfX2ljb25DbGljayIsIlRDZWxsIiwiX19nZXRUYXJnZXRURCIsInRhZ05hbWUiLCJwYXJlbnROb2RlIiwiX3RkIiwiZmluZFRSRE9NIiwidGQiLCJfX2NlbGxSZW5kZXIiLCJfcHJvcHMiLCJfX2ZpeGVkV2lkdGgiLCJvbkRhdGFWYWxpZGF0ZSIsIl9jbGFzc05hbWUiLCJfc3R5bGUiLCJDb2xncm91cCIsIlRGaWx0ZXIiLCJUQm9keSIsIlRCb2R5RW1wdHkiLCJURm9vdCIsIlRIZWFkIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7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VSxZQUFVLEVBQUUxVSxtQkFBTyxDQUFDLDJDQUFELENBSk47QUFLYjBULE9BQUssRUFBRTFULG1CQUFPLENBQUMsaUNBQUQsQ0FMRDtBQU1iMlUsT0FBSyxFQUFFM1UsbUJBQU8sQ0FBQyxpQ0FBRCxDQU5EO0FBT2I0VSxPQUFLLEVBQUU1VSxtQkFBTyxDQUFDLGlDQUFELENBUEQ7QUFRYmdPLE1BQUksRUFBRWhPLG1CQUFPLENBQUMsK0JBQUQ7QUFSQSxDQUFqQixDOzs7Ozs7Ozs7OztBQ0FBLGFBQWEsZ0NBQWdDLEVBQUUsSTs7Ozs7Ozs7Ozs7QUNBL0MsYUFBYSxtQ0FBbUMsRUFBRSxJOzs7Ozs7Ozs7OztBQ0FsRCxhQUFhLGlDQUFpQyxFQUFFLEk7Ozs7Ozs7Ozs7O0FDQWhELGFBQWEsZ0NBQWdDLEVBQUUsSTs7Ozs7Ozs7Ozs7QUNBL0MsYUFBYSwrQkFBK0IsRUFBRSxJOzs7Ozs7Ozs7OztBQ0E5QyxhQUFhLGlDQUFpQyxFQUFFLEk7Ozs7Ozs7Ozs7O0FDQWhELGFBQWEsZ0NBQWdDLEVBQUUsSTs7Ozs7Ozs7Ozs7QUNBL0MsYUFBYSxnQ0FBZ0MsRUFBRSxJOzs7Ozs7Ozs7OztBQ0EvQyxhQUFhLG1DQUFtQyxFQUFFLEkiLCJmaWxlIjoiLi9kaXN0L2RldmVsb3BtZW50L2luZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgVGFibGVQYWdlciA9IHJlcXVpcmUoJy4vVGFibGVQYWdlcicpO1xudmFyIHNlbGVjdG9yID0gcmVxdWlyZSgnem51aS1yZWFjdC1zZWxlY3RvcicpO1xubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOiAnWlJQb3B1cFRhYmxlJyxcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dGV4dEtleTogJ3p4bnpfTGFiZWwnLFxuXHRcdFx0dmFsdWVLZXk6ICd6eG56X1VVSUQnXG5cdFx0fTtcblx0fSxcbiAgICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHRleHQ6IHRoaXMucHJvcHMudGV4dCxcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLnByb3BzLnZhbHVlXG5cdFx0fTtcblx0fSxcbiAgICBnZXRUZXh0OiBmdW5jdGlvbiAoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUudGV4dDtcbiAgICB9LFxuICAgIHNldFRleHQ6IGZ1bmN0aW9uICh0ZXh0KXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0ZXh0OiB0ZXh0XG4gICAgICAgIH0pO1xuICAgIH0sXG5cdGdldFZhbHVlOiBmdW5jdGlvbiAoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUudmFsdWU7XG4gICAgfSxcbiAgICBzZXRWYWx1ZTogZnVuY3Rpb24gKHZhbHVlKXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBfX29uUm93Q2xpY2s6IGZ1bmN0aW9uIChldmVudCwgZHJvcGRvd25FdmVudCl7XG4gICAgICAgIHZhciBfZGF0YSA9IGV2ZW50LmRhdGEudHJvdy5wcm9wcy5kYXRhO1xuICAgICAgICBldmVudC5kYXRhID0gX2RhdGE7XG4gICAgICAgIGV2ZW50LnZhbHVlID0gX2RhdGFbdGhpcy5wcm9wcy52YWx1ZUtleV07XG5cdFx0ZXZlbnQudGV4dCA9IF9kYXRhW3RoaXMucHJvcHMudGV4dEtleV07XG4gICAgICAgIGRyb3Bkb3duRXZlbnQucG9wdXBTZWxlY3Quc2V0RGF0YShldmVudC52YWx1ZSwgZXZlbnQudGV4dCk7XG4gICAgICAgIGRyb3Bkb3duRXZlbnQuZHJvcGRvd24uY2xvc2VQb3BvdmVyKCk7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUoZXZlbnQudmFsdWUpO1xuICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlICYmIHRoaXMucHJvcHMub25DaGFuZ2UoZXZlbnQsIGRyb3Bkb3duRXZlbnQpO1xuICAgIH0sXG5cdF9fcG9wdXBSZW5kZXI6IGZ1bmN0aW9uIChkcm9wZG93bkV2ZW50KXtcblx0XHRyZXR1cm4gPFRhYmxlUGFnZXJcbiAgICAgICAgICAgIHp4bno9e3RydWV9XG4gICAgICAgICAgICBjb2xncm91cD17e319XG4gICAgICAgICAgICBjZWxsUGFkZGluZz17NX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInpyLXRhYmxlLWNsYXNzLW5vcm1hbFwiXG4gICAgICAgICAgICBmaXhlZD17dHJ1ZX1cbiAgICAgICAgICAgIHRoZWFkPXt7XG4gICAgICAgICAgICAgICAgZmlsdGVyOiB0cnVlXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgdGZpbHRlcj17e319XG4gICAgICAgICAgICB0Ym9keT17e1xuICAgICAgICAgICAgICAgIG9uUm93Q2xpY2s6IChldmVudCk9PnRoaXMuX19vblJvd0NsaWNrKGV2ZW50LCBkcm9wZG93bkV2ZW50KVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHBhZ2VJbmRleD17MX1cbiAgICAgICAgICAgIHBhZ2VTaXplPXs1fSB7Li4udGhpcy5wcm9wc30gLz47XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHNlbGVjdG9yLlBvcHVwU2VsZWN0IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLXRhYmxlLXBvcHVwLXRhYmxlJywgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0gcG9wdXBSZW5kZXI9e3RoaXMuX19wb3B1cFJlbmRlcn0gLz5cblx0XHQpO1xuXHR9XG59KTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgdGFibGUgPSByZXF1aXJlKCcuL3RhYmxlL2luZGV4Jyk7XG52YXIgc2VsZWN0b3IgPSByZXF1aXJlKCd6bnVpLXJlYWN0LXNlbGVjdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJUYWJsZScsXG5cdGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGRhdGFJbmRleEVuYWJsZWQ6IGZhbHNlLFxuXHRcdFx0Zml4ZWRMYXlvdXQ6IGZhbHNlLFxuXHRcdFx0dmFsdWVLZXk6ICd6eG56X1VVSUQnLFxuXHRcdFx0cm93S2V5OiAnenhuel9VVUlEJ1xuXHRcdH07XG5cdH0sXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGRhdGE6IFtdLCBcblx0XHRcdGNvbHVtbnM6IFtdLFxuXHRcdFx0Y2hlY2tlZHM6IHRoaXMucHJvcHMuY2hlY2tlZHMgfHwgW11cblx0XHR9O1xuXHR9LFxuXHRjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24oKXtcblx0XHR0aGlzLnByb3BzLm9uQ29tcG9uZW50RGlkTW91bnQgJiYgdGhpcy5wcm9wcy5vbkNvbXBvbmVudERpZE1vdW50KHRoaXMpO1xuXHR9LFxuXHRfX3NvcnRGdW5jdGlvbjogZnVuY3Rpb24gKG5leHQsIHByZXYsIGtleSwgX3NvcnQpe1xuXHRcdGlmKHRoaXMucHJvcHMuc29ydEZ1bmN0aW9uKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5wcm9wcy5zb3J0RnVuY3Rpb24obmV4dCwgcHJldiwga2V5LCBfc29ydCk7XG5cdFx0fVxuXHRcdGlmKF9zb3J0PT0nZGVzYycpe1xuXHRcdFx0aWYobmV4dFtrZXldID4gcHJldltrZXldKXtcblx0XHRcdFx0cmV0dXJuIDE7XG5cdFx0XHR9ZWxzZSBpZihuZXh0W2tleV0gPT0gcHJldltrZXldKXtcblx0XHRcdFx0cmV0dXJuIDA7XG5cdFx0XHR9ZWxzZSBpZihuZXh0W2tleV0gPCBwcmV2W2tleV0pe1xuXHRcdFx0XHRyZXR1cm4gLTE7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKF9zb3J0PT0nYXNjJyl7XG5cdFx0XHRpZihuZXh0W2tleV0gPCBwcmV2W2tleV0pe1xuXHRcdFx0XHRyZXR1cm4gMTtcblx0XHRcdH1lbHNlIGlmKG5leHRba2V5XSA9PSBwcmV2W2tleV0pe1xuXHRcdFx0XHRyZXR1cm4gMDtcblx0XHRcdH1lbHNlIGlmKG5leHRba2V5XSA+IHByZXZba2V5XSl7XG5cdFx0XHRcdHJldHVybiAtMTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdF9fb25Tb3J0OiBmdW5jdGlvbiAoc29ydHMpe1xuXHRcdHZhciBfcmV0dXJuID0gdGhpcy5wcm9wcy5vblNvcnRDaGFuZ2UgJiYgdGhpcy5wcm9wcy5vblNvcnRDaGFuZ2Uoc29ydHMsIHRoaXMuc3RhdGUuZGF0YSwgdGhpcyk7XG5cdFx0aWYoX3JldHVybiAhPT0gZmFsc2Upe1xuXHRcdFx0aWYodGhpcy5kYXRhICYmIHpuLmlzWk5PYmplY3QodGhpcy5kYXRhKSkge1xuXHRcdFx0XHRpZighdGhpcy5kYXRhLl9hcmd2LmRhdGEpIHtcblx0XHRcdFx0XHR0aGlzLmRhdGEuX2FyZ3YuZGF0YSA9IHt9O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuZGF0YS5fYXJndi5kYXRhLnNvcnRzID0gc29ydHM7XG5cdFx0XHRcdHRoaXMuZGF0YS5yZWZyZXNoKCk7XG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0dmFyIF9zb3J0ID0gbnVsbDtcblx0XHRcdFx0Zm9yKHZhciBrZXkgaW4gc29ydHMpe1xuXHRcdFx0XHRcdF9zb3J0ID0gc29ydHNba2V5XVxuXHRcdFx0XHRcdHRoaXMuc3RhdGUuZGF0YSA9IHRoaXMuc3RhdGUuZGF0YS5zb3J0KChuZXh0LCBwcmV2KSA9PiB0aGlzLl9fc29ydEZ1bmN0aW9uKG5leHQsIHByZXYsIGtleSwgX3NvcnQpKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuZm9yY2VVcGRhdGUoKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdF9fb25GaWx0ZXI6IGZ1bmN0aW9uIChmaWx0ZXJzKXtcblx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMub25GaWx0ZXJDaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkZpbHRlckNoYW5nZShmaWx0ZXJzLCB0aGlzLnN0YXRlLmRhdGEsIHRoaXMpO1xuXHRcdGlmKF9yZXR1cm4gIT09IGZhbHNlKXtcblx0XHRcdGlmKHRoaXMuZGF0YSAmJiB6bi5pc1pOT2JqZWN0KHRoaXMuZGF0YSkpIHtcblx0XHRcdFx0aWYoIXRoaXMuZGF0YS5fYXJndi5kYXRhKSB7XG5cdFx0XHRcdFx0dGhpcy5kYXRhLl9hcmd2LmRhdGEgPSB7fTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmRhdGEuX2FyZ3YuZGF0YS5maWx0ZXJzID0gZmlsdGVycztcblx0XHRcdFx0dGhpcy5kYXRhLnJlZnJlc2goKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdF9fb25UQm9keUVhY2hSb3dEYXRhOiBmdW5jdGlvbiAoZGF0YSwgaW5kZXgsIHRib2R5KXtcblx0XHR2YXIgX3ZhbHVlS2V5ID0gdGhpcy5wcm9wcy52YWx1ZUtleSB8fCAnenhuel9VVUlEJztcblx0XHRpZih0aGlzLnByb3BzLmNoZWNrYm94ICYmIHRoaXMucHJvcHMudmFsdWUgJiYgX3ZhbHVlS2V5KSB7XG5cdFx0XHR2YXIgX3ZhbHVlID0gZGF0YVtfdmFsdWVLZXldO1xuXHRcdFx0aWYodGhpcy5wcm9wcy52YWx1ZS5pbmRleE9mKF92YWx1ZSkhPS0xKXtcblx0XHRcdFx0dGhpcy5zdGF0ZS5jaGVja2Vkcy5wdXNoKF92YWx1ZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHRfX3Rib2R5RGF0YVJlbmRlcjogZnVuY3Rpb24gKGNvbHVtbnMpe1xuXHRcdGlmKCF0aGlzLnN0YXRlLmRhdGEubGVuZ3RoKXtcblx0XHRcdHJldHVybiA8dGFibGUuVEJvZHlFbXB0eSBjb250ZXh0PXt0aGlzLnByb3BzLmNvbnRleHR9IHsuLi50aGlzLnByb3BzLnRib2R5fSBjb2x1bW5zPXtjb2x1bW5zfSBkYXRhPXt0aGlzLnN0YXRlLmRhdGF9IHRhYmxlPXt0aGlzfSAvPjtcblx0XHR9XG5cdFx0cmV0dXJuIDx0YWJsZS5UQm9keSByb3dLZXk9e3RoaXMucHJvcHMucm93S2V5fSByb3c9e3RoaXMucHJvcHMucm93fSBjb250ZXh0PXt0aGlzLnByb3BzLmNvbnRleHR9IGVhY2hSb3dEYXRhPXt0aGlzLl9fb25UQm9keUVhY2hSb3dEYXRhfSB7Li4udGhpcy5wcm9wcy50Ym9keX0gY29sdW1ucz17Y29sdW1uc30gZml4ZWRDb2x1bW5zPXt0aGlzLnByb3BzLmZpeGVkQ29sdW1uc30gZGF0YT17dGhpcy5zdGF0ZS5kYXRhfSB0YWJsZT17dGhpc30gLz47XG5cdH0sXG5cdF9fdGJvZHlMb2FkaW5nUmVuZGVyOiBmdW5jdGlvbiAoY29sdW1ucyl7XG5cdFx0cmV0dXJuIDx0YWJsZS5UQm9keSByb3dLZXk9e3RoaXMucHJvcHMucm93S2V5fSByb3c9e3RoaXMucHJvcHMucm93fSBjb250ZXh0PXt0aGlzLnByb3BzLmNvbnRleHR9IHsuLi50aGlzLnByb3BzLnRib2R5fSBjb2x1bW5zPXtjb2x1bW5zfSBmaXhlZENvbHVtbnM9e3RoaXMucHJvcHMuZml4ZWRDb2x1bW5zfSBsb2FkaW5nPXt0cnVlfSB0YWJsZT17dGhpc30gLz47XG5cdH0sXG5cdF9fb25USGVhZENvbHVtbkNoYW5nZTogZnVuY3Rpb24gKGRhdGEsIGluZGV4KXtcblx0XHRpZih0aGlzLnN0YXRlLmNvbHVtbnMpe1xuXHRcdFx0dGhpcy5zdGF0ZS5jb2x1bW5zW2luZGV4XSA9IGRhdGE7XG5cdFx0XHR0aGlzLmZvcmNlVXBkYXRlKCk7XG5cdFx0fVxuXHR9LFxuXHRfX3Rib2R5RGF0YUxvYWRlZDogZnVuY3Rpb24gKGRhdGEpIHtcblx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMub25EYXRhTG9hZGVkICYmIHRoaXMucHJvcHMub25EYXRhTG9hZGVkKGRhdGEsIHRoaXMpO1xuXHRcdGlmKF9yZXR1cm4gIT09IGZhbHNlKXtcblx0XHRcdGlmKHpuLmlzKGRhdGEsICdvYmplY3QnKSAmJiBkYXRhLnJlc3VsdCl7XG5cdFx0XHRcdGRhdGEgPSBkYXRhLnJlc3VsdDtcblx0XHRcdH1cblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBkYXRhOiBkYXRhIH0pO1xuXHRcdH1cblx0fSxcblx0X19vbkRhdGFDcmVhdGVkOiBmdW5jdGlvbiAoZGF0YSwgbGlmeWN5Y2xlKXtcblx0XHR0aGlzLmRhdGEgPSBkYXRhO1xuXHRcdHRoaXMucHJvcHMub25EYXRhQ3JlYXRlZCAmJiB0aGlzLnByb3BzLm9uRGF0YUNyZWF0ZWQoZGF0YSwgdGhpcywgbGlmeWN5Y2xlKTtcblx0fSxcblx0cmVmcmVzaDogZnVuY3Rpb24gKGNhbGxiYWNrKXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGNoZWNrZWRzOiBbXVxuXHRcdH0pO1xuXHRcdGlmKHRoaXMuZGF0YSl7XG5cdFx0XHR0aGlzLmRhdGEucmVmcmVzaCgpO1xuXHRcdH1cblx0XHRjYWxsYmFjayAmJiBjYWxsYmFjaygpO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cdHJlZnJlc2hIZWFkZXJzOiBmdW5jdGlvbiAoKXtcblx0XHRpZih0aGlzLmNvbHVtbnMpe1xuXHRcdFx0dGhpcy5jb2x1bW5zLnJlZnJlc2goKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblx0c2V0RGF0YTogZnVuY3Rpb24gKGRhdGEpe1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBkYXRhOiBkYXRhIH0pO1xuXHR9LFxuXHRfX2ZpeGVkU3R5bGVzOiBmdW5jdGlvbiAoaW5kZXgpe1xuXHRcdHZhciBfY29sdW1ucyA9IHRoaXMuc3RhdGUuY29sdW1uc3x8W10sIF93aWR0aCA9IDA7XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IGluZGV4OyBpKyspe1xuXHRcdFx0aWYoX2NvbHVtbnNbaV0uZml4ZWQpIHtcblx0XHRcdFx0X3dpZHRoICs9IChfY29sdW1uc1tpXS53aWR0aCB8fCAwKSAtIDE7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdGxlZnQ6IF93aWR0aCAtIDFcblx0XHR9O1xuXHR9LFxuXHRfX3JlbmRlclRCb2R5OiBmdW5jdGlvbiAoY29sdW1ucyl7XG5cdFx0dmFyIF9kYXRhID0gdGhpcy5wcm9wcy5kYXRhIHx8IHRoaXMucHJvcHMudGJvZHkuZGF0YTtcblx0XHR2YXIgX3Jlc3VsdCA9IHRoaXMucHJvcHMub25EYXRhSW5pdGlhbCAmJiB0aGlzLnByb3BzLm9uRGF0YUluaXRpYWwoX2RhdGEsIHRoaXMpO1xuXHRcdGlmKF9yZXN1bHQpe1xuXHRcdFx0X2RhdGEgPSBfcmVzdWx0O1xuXHRcdH1cblx0XHRyZXR1cm4gPHpudWkucmVhY3QuRGF0YUxpZmVjeWNsZSBkYXRhPXtfZGF0YX0gXG5cdFx0XHRcdFx0ZGF0YVJlbmRlcj17KCk9PnRoaXMuX190Ym9keURhdGFSZW5kZXIoY29sdW1ucyl9IFxuXHRcdFx0XHRcdGxvYWRpbmdFbmFibGVkPXt0aGlzLnByb3BzLmxvYWRpbmdFbmFibGVkfHxmYWxzZX1cblx0XHRcdFx0XHRsb2FkaW5nUmVuZGVyPXsoKT0+dGhpcy5fX3Rib2R5TG9hZGluZ1JlbmRlcihjb2x1bW5zKX1cblx0XHRcdFx0XHRyZXNwb25zZUhhbmRsZXI9e3RoaXMucHJvcHMucmVzcG9uc2VIYW5kbGVyfVxuXHRcdFx0XHRcdG9uRGF0YUNyZWF0ZWQ9e3RoaXMuX19vbkRhdGFDcmVhdGVkfVxuXHRcdFx0XHRcdG9uRmluaXNoZWQ9e3RoaXMuX190Ym9keURhdGFMb2FkZWR9IC8+O1xuXHR9LFxuXHRfX29uRml4ZWRMYXlvdXRCb2R5U2Nyb2xsOiBmdW5jdGlvbiAoZSl7XG5cdFx0dGhpcy5fbGF5b3V0SGVhZGVyLnNjcm9sbExlZnQgPSBlLnRhcmdldC5zY3JvbGxMZWZ0O1xuXHR9LFxuXHRfX3JlbmRlcjogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIGNvbHVtbnMgPSB0aGlzLnN0YXRlLmNvbHVtbnM7XG5cdFx0Y29sdW1ucyA9IGNvbHVtbnMubWFwKGZ1bmN0aW9uIChpdGVtLCBpbmRleCl7XG5cdFx0XHRpZihpdGVtLmZpeGVkKSB7XG5cdFx0XHRcdGl0ZW0uZml4ZWRTdHlsZXMgPSB0aGlzLl9fZml4ZWRTdHlsZXMoaW5kZXgpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGl0ZW07XG5cdFx0fS5iaW5kKHRoaXMpKTtcblx0XHRpZih0aGlzLnByb3BzLmZpeGVkTGF5b3V0KSB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInpyLXRhYmxlLWZpeGVkLWxheW91dFwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQtbGF5b3V0LWhlYWRlclwiIHJlZj17KHJlZik9PnRoaXMuX2xheW91dEhlYWRlciA9IHJlZn0+XG5cdFx0XHRcdFx0XHQ8dGFibGUgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXRhYmxlXCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gXG5cdFx0XHRcdFx0XHRcdHN0eWxlPXt6bnVpLnJlYWN0LnN0eWxlKHRoaXMucHJvcHMuc3R5bGUsIHsgd2lkdGg6IHRoaXMucHJvcHMud2lkdGggfSl9IFxuXHRcdFx0XHRcdFx0XHRkYXRhLWZpeGVkPXt0aGlzLnByb3BzLmZpeGVkfSBcdFxuXHRcdFx0XHRcdFx0XHRjZWxsUGFkZGluZz17dGhpcy5wcm9wcy5jZWxsUGFkZGluZyB8fCAwfSBcblx0XHRcdFx0XHRcdFx0Y2VsbFNwYWNpbmc9e3RoaXMucHJvcHMuY2VsbFNwYWNpbmcgfHwgMH0gey4uLnRoaXMucHJvcHMuYXR0cnN9PlxuXHRcdFx0XHRcdFx0XHR7ICEhdGhpcy5wcm9wcy5jYXB0aW9uICYmIDxjYXB0aW9uIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jYXB0aW9uLmNsYXNzTmFtZX0gc3R5bGU9e3RoaXMucHJvcHMuY2FwdGlvbi5zdHlsZX0+e3RoaXMucHJvcHMuY2FwdGlvbi5yZW5kZXJ9PC9jYXB0aW9uPiB9XG5cdFx0XHRcdFx0XHRcdHsgISF0aGlzLnByb3BzLmNvbGdyb3VwICYmIDx0YWJsZS5Db2xncm91cCBjb250ZXh0PXt0aGlzLnByb3BzLmNvbnRleHR9IGtleU1hcHBpbmc9e3RoaXMucHJvcHMua2V5TWFwcGluZ30gY29sdW1ucz17Y29sdW1uc30gey4uLnRoaXMucHJvcHMuY29sZ3JvdXB9IC8+IH1cblx0XHRcdFx0XHRcdFx0eyAhIXRoaXMucHJvcHMudGhlYWQgJiYgPHRhYmxlLlRIZWFkIGNvbnRleHQ9e3RoaXMucHJvcHMuY29udGV4dH0gb25Tb3J0PXt0aGlzLl9fb25Tb3J0fSBvbkNvbHVtbkNoYW5nZT17dGhpcy5fX29uVEhlYWRDb2x1bW5DaGFuZ2V9IGNvbHVtbnM9e2NvbHVtbnN9IGtleU1hcHBpbmc9e3RoaXMucHJvcHMua2V5TWFwcGluZ30gey4uLnRoaXMucHJvcHMudGhlYWR9IHRhYmxlPXt0aGlzfSAvPn1cblx0XHRcdFx0XHRcdFx0eyAhIXRoaXMucHJvcHMudGZpbHRlciAmJiA8dGFibGUuVEZpbHRlciBjb250ZXh0PXt0aGlzLnByb3BzLmNvbnRleHR9IG9uRmlsdGVyPXt0aGlzLl9fb25GaWx0ZXJ9IGNvbHVtbnM9e2NvbHVtbnN9IHsuLi50aGlzLnByb3BzLnRmaWx0ZXJ9IHRhYmxlPXt0aGlzfSAvPn1cblx0XHRcdFx0XHRcdDwvdGFibGU+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmaXhlZC1sYXlvdXQtYm9keVwiIG9uU2Nyb2xsPXt0aGlzLl9fb25GaXhlZExheW91dEJvZHlTY3JvbGx9PlxuXHRcdFx0XHRcdFx0PHRhYmxlIGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci10YWJsZVwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IFxuXHRcdFx0XHRcdFx0XHRzdHlsZT17em51aS5yZWFjdC5zdHlsZSh0aGlzLnByb3BzLnN0eWxlLCB7IHdpZHRoOiB0aGlzLnByb3BzLndpZHRoIH0pfSBcblx0XHRcdFx0XHRcdFx0ZGF0YS1maXhlZD17dGhpcy5wcm9wcy5maXhlZH0gXHRcblx0XHRcdFx0XHRcdFx0Y2VsbFBhZGRpbmc9e3RoaXMucHJvcHMuY2VsbFBhZGRpbmcgfHwgMH0gXG5cdFx0XHRcdFx0XHRcdGNlbGxTcGFjaW5nPXt0aGlzLnByb3BzLmNlbGxTcGFjaW5nIHx8IDB9IHsuLi50aGlzLnByb3BzLmF0dHJzfT5cblx0XHRcdFx0XHRcdFx0eyAhIXRoaXMucHJvcHMuY2FwdGlvbiAmJiA8Y2FwdGlvbiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2FwdGlvbi5jbGFzc05hbWV9IHN0eWxlPXt0aGlzLnByb3BzLmNhcHRpb24uc3R5bGV9Pnt0aGlzLnByb3BzLmNhcHRpb24ucmVuZGVyfTwvY2FwdGlvbj4gfVxuXHRcdFx0XHRcdFx0XHR7ICEhdGhpcy5wcm9wcy5jb2xncm91cCAmJiA8dGFibGUuQ29sZ3JvdXAgY29udGV4dD17dGhpcy5wcm9wcy5jb250ZXh0fSBrZXlNYXBwaW5nPXt0aGlzLnByb3BzLmtleU1hcHBpbmd9IGNvbHVtbnM9e2NvbHVtbnN9IHsuLi50aGlzLnByb3BzLmNvbGdyb3VwfSAvPiB9XG5cdFx0XHRcdFx0XHRcdHsgKHRoaXMucHJvcHMudGJvZHkgfHwgdGhpcy5wcm9wcy5kYXRhKSAmJiB0aGlzLl9fcmVuZGVyVEJvZHkoY29sdW1ucykgfVxuXHRcdFx0XHRcdFx0PC90YWJsZT5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZpeGVkLWxheW91dC1mb290ZXJcIj5cblx0XHRcdFx0XHRcdHsgISF0aGlzLnByb3BzLnRmb290ICYmIDx0YWJsZT48dGFibGUuVEZvb3QgY29udGV4dD17dGhpcy5wcm9wcy5jb250ZXh0fSBjb2x1bW5zPXtjb2x1bW5zfSB7Li4udGhpcy5wcm9wcy50Zm9vdH0gdGFibGU9e3RoaXN9IC8+PC90YWJsZT59XG5cdFx0XHRcdFx0XHR7IHRoaXMucHJvcHMuY2hpbGRyZW5SZW5kZXIgJiYgdGhpcy5wcm9wcy5jaGlsZHJlblJlbmRlcihjb2x1bW5zLCB0aGlzKSB9XG5cdFx0XHRcdFx0XHR7IHRoaXMucHJvcHMuY2hpbGRyZW4gfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDx0YWJsZSBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItdGFibGVcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBcblx0XHRcdFx0c3R5bGU9e3pudWkucmVhY3Quc3R5bGUodGhpcy5wcm9wcy5zdHlsZSwgeyB3aWR0aDogdGhpcy5wcm9wcy53aWR0aCB9KX0gXG5cdFx0XHRcdGRhdGEtZml4ZWQ9e3RoaXMucHJvcHMuZml4ZWR9IFx0XG5cdFx0XHRcdGNlbGxQYWRkaW5nPXt0aGlzLnByb3BzLmNlbGxQYWRkaW5nIHx8IDB9IFxuXHRcdFx0XHRjZWxsU3BhY2luZz17dGhpcy5wcm9wcy5jZWxsU3BhY2luZyB8fCAwfSB7Li4udGhpcy5wcm9wcy5hdHRyc30+XG5cdFx0XHRcdHsgISF0aGlzLnByb3BzLmNhcHRpb24gJiYgPGNhcHRpb24gY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNhcHRpb24uY2xhc3NOYW1lfSBzdHlsZT17dGhpcy5wcm9wcy5jYXB0aW9uLnN0eWxlfT57dGhpcy5wcm9wcy5jYXB0aW9uLnJlbmRlcn08L2NhcHRpb24+IH1cblx0XHRcdFx0eyAhIXRoaXMucHJvcHMuY29sZ3JvdXAgJiYgPHRhYmxlLkNvbGdyb3VwIGNvbnRleHQ9e3RoaXMucHJvcHMuY29udGV4dH0ga2V5TWFwcGluZz17dGhpcy5wcm9wcy5rZXlNYXBwaW5nfSBjb2x1bW5zPXtjb2x1bW5zfSB7Li4udGhpcy5wcm9wcy5jb2xncm91cH0gLz4gfVxuXHRcdFx0XHR7ICEhdGhpcy5wcm9wcy50aGVhZCAmJiA8dGFibGUuVEhlYWQgY29udGV4dD17dGhpcy5wcm9wcy5jb250ZXh0fSBvblNvcnQ9e3RoaXMuX19vblNvcnR9IG9uQ29sdW1uQ2hhbmdlPXt0aGlzLl9fb25USGVhZENvbHVtbkNoYW5nZX0gY29sdW1ucz17Y29sdW1uc30ga2V5TWFwcGluZz17dGhpcy5wcm9wcy5rZXlNYXBwaW5nfSB7Li4udGhpcy5wcm9wcy50aGVhZH0gdGFibGU9e3RoaXN9IC8+fVxuXHRcdFx0XHR7ICEhdGhpcy5wcm9wcy50ZmlsdGVyICYmIDx0YWJsZS5URmlsdGVyIGNvbnRleHQ9e3RoaXMucHJvcHMuY29udGV4dH0gb25GaWx0ZXI9e3RoaXMuX19vbkZpbHRlcn0gY29sdW1ucz17Y29sdW1uc30gey4uLnRoaXMucHJvcHMudGZpbHRlcn0gdGFibGU9e3RoaXN9IC8+fVxuXHRcdFx0XHR7ICh0aGlzLnByb3BzLnRib2R5IHx8IHRoaXMucHJvcHMuZGF0YSkgJiYgdGhpcy5fX3JlbmRlclRCb2R5KGNvbHVtbnMpIH1cblx0XHRcdFx0eyAhIXRoaXMucHJvcHMudGZvb3QgJiYgPHRhYmxlLlRGb290IGNvbnRleHQ9e3RoaXMucHJvcHMuY29udGV4dH0gY29sdW1ucz17Y29sdW1uc30gey4uLnRoaXMucHJvcHMudGZvb3R9IHRhYmxlPXt0aGlzfSAvPn1cblx0XHRcdFx0eyB0aGlzLnByb3BzLmNoaWxkcmVuUmVuZGVyICYmIHRoaXMucHJvcHMuY2hpbGRyZW5SZW5kZXIoY29sdW1ucywgdGhpcykgfVxuXHRcdFx0XHR7IHRoaXMucHJvcHMuY2hpbGRyZW4gfVxuXHRcdFx0PC90YWJsZT5cblx0XHQpO1xuXHR9LFxuXHRfX3Jvd0hlYWRDaGVja2JveENoZWNrZWQ6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfY2hlY2tlZHMgPSB0aGlzLnN0YXRlLmNoZWNrZWRzLCBfdmFsdWVLZXkgPSB0aGlzLnByb3BzLnZhbHVlS2V5IHx8ICd6eG56X1VVSUQnO1xuXHRcdGlmKCFfY2hlY2tlZHMubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG5cdFx0Zm9yKHZhciBpdGVtIG9mIHRoaXMuc3RhdGUuZGF0YSkge1xuXHRcdFx0aWYoX2NoZWNrZWRzLmluZGV4T2YoaXRlbVtfdmFsdWVLZXldKSA9PSAtMSl7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSxcblx0X19vblJvd0hlYWRDaGVja2JveENoYW5nZTogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR2YXIgX3ZhbHVlS2V5ID0gdGhpcy5wcm9wcy52YWx1ZUtleSB8fCAnenhuel9VVUlEJztcblx0XHRpZihldmVudC5jaGVja2VkKSB7XG5cdFx0XHRmb3IodmFyIGl0ZW0gb2YgdGhpcy5zdGF0ZS5kYXRhKSB7XG5cdFx0XHRcdGlmKHRoaXMuc3RhdGUuY2hlY2tlZHMuaW5kZXhPZihpdGVtW192YWx1ZUtleV0pID09IC0xKXtcblx0XHRcdFx0XHR0aGlzLnN0YXRlLmNoZWNrZWRzLnB1c2goaXRlbVtfdmFsdWVLZXldKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1lbHNle1xuXHRcdFx0Zm9yKHZhciBpdGVtIG9mIHRoaXMuc3RhdGUuZGF0YSkge1xuXHRcdFx0XHRpZih0aGlzLnN0YXRlLmNoZWNrZWRzLmluZGV4T2YoaXRlbVtfdmFsdWVLZXldKSAhPSAtMSl7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZS5jaGVja2Vkcy5zcGxpY2UodGhpcy5zdGF0ZS5jaGVja2Vkcy5pbmRleE9mKGl0ZW1bX3ZhbHVlS2V5XSksIDEpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHRoaXMuZm9yY2VVcGRhdGUoKTtcblx0XHR0aGlzLnByb3BzLm9uQ2hlY2tib3hDaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkNoZWNrYm94Q2hhbmdlKHRoaXMuc3RhdGUuY2hlY2tlZHMsIHRoaXMpO1xuXHR9LFxuXHRfX2luaXRDaGVja2JveDogZnVuY3Rpb24gKGNvbHVtbnMpe1xuXHRcdHZhciBfdmFsdWVLZXkgPSB0aGlzLnByb3BzLnZhbHVlS2V5IHx8ICd6eG56X1VVSUQnO1xuXHRcdHZhciBfY2hlY2tib3ggPSB7XG5cdFx0XHRcdHdpZHRoOiA4MCxcblx0XHRcdFx0Zml4ZWQ6IHRydWUsXG5cdFx0XHRcdGhlYWQ6IGZ1bmN0aW9uIChhcmd2KXtcblx0XHRcdFx0XHR2YXIgX3RhYmxlID0gYXJndi50aGVhZC5wcm9wcy50YWJsZTtcblx0XHRcdFx0XHRpZighX3RhYmxlKSByZXR1cm47XG5cdFx0XHRcdFx0cmV0dXJuIDxzZWxlY3Rvci5DaGVja2JveFxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fVxuXHRcdFx0XHRcdFx0XHRcdGtleT17em4udXVpZCgpfVxuXHRcdFx0XHRcdFx0XHRcdHRleHQ9eycoJyArIF90YWJsZS5zdGF0ZS5jaGVja2Vkcy5sZW5ndGggKycpJ31cblx0XHRcdFx0XHRcdFx0XHRjaGVja2VkPXt0aGlzLl9fcm93SGVhZENoZWNrYm94Q2hlY2tlZCgpfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLl9fb25Sb3dIZWFkQ2hlY2tib3hDaGFuZ2V9IC8+O1xuXHRcdFx0XHR9LmJpbmQodGhpcyksXG5cdFx0XHRcdGJvZHk6IGZ1bmN0aW9uIChhcmd2KXtcblx0XHRcdFx0XHR2YXIgX2RhdGEgPSBhcmd2LmRhdGE7XG5cdFx0XHRcdFx0cmV0dXJuIDxzZWxlY3Rvci5VbmNvbnRyb2xDaGVja2JveCBcblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgfX1cblx0XHRcdFx0XHRcdFx0XHRjaGVja2VkPXt0aGlzLnN0YXRlLmNoZWNrZWRzLmluZGV4T2YoX2RhdGFbX3ZhbHVlS2V5XSkgIT09IC0xfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyhldmVudCwgY2hlY2tib3gpPT57XG5cdFx0XHRcdFx0XHRcdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0XHRcdFx0XHRcdGlmKGNoZWNrYm94LnByb3BzLmNoZWNrZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zdGF0ZS5jaGVja2Vkcy5zcGxpY2UodGhpcy5zdGF0ZS5jaGVja2Vkcy5pbmRleE9mKF9kYXRhW192YWx1ZUtleV0pLCAxKTsgXG5cdFx0XHRcdFx0XHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zdGF0ZS5jaGVja2Vkcy5wdXNoKF9kYXRhW192YWx1ZUtleV0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5mb3JjZVVwZGF0ZSgpO1xuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5vbkNoZWNrYm94Q2hhbmdlICYmIHRoaXMucHJvcHMub25DaGVja2JveENoYW5nZSh0aGlzLnN0YXRlLmNoZWNrZWRzLCB0aGlzKTtcblx0XHRcdFx0XHRcdFx0XHR9fSAvPjtcblx0XHRcdFx0fS5iaW5kKHRoaXMpXG5cdFx0XHR9LFxuXHRcdFx0X3ZhbHVlID0gdGhpcy5wcm9wcy5jaGVja2JveDtcblx0XHRzd2l0Y2goem4udHlwZShfdmFsdWUpKSB7XG5cdFx0XHRjYXNlICdvYmplY3QnOlxuXHRcdFx0XHRfY2hlY2tib3ggPSB6bi5leHRlbmQoe30sIF92YWx1ZSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnbnVtYmVyJzpcblx0XHRcdFx0X2NoZWNrYm94LndpZHRoID0gX3ZhbHVlO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdFx0aWYoX3ZhbHVlKSB7XG5cdFx0XHRjb2x1bW5zID0gY29sdW1ucy51bnNoaWZ0KF9jaGVja2JveCk7XG5cdFx0fVxuXHR9LFxuXHRfX2luaXRJbmRleENvbHVtbjogZnVuY3Rpb24gKGNvbHVtbnMpe1xuXHRcdGlmKHRoaXMucHJvcHMuZGF0YUluZGV4RW5hYmxlZCkge1xuXHRcdFx0Y29sdW1ucyA9IGNvbHVtbnMudW5zaGlmdCh7XG5cdFx0XHRcdHdpZHRoOiA0OCxcblx0XHRcdFx0bGFiZWw6ICfntKLlvJUnLCBcblx0XHRcdFx0Zml4ZWQ6IHRydWUsXG5cdFx0XHRcdG5hbWU6ICdfX2luZGV4X18nLFxuXHRcdFx0XHRib2R5OiBmdW5jdGlvbiAoYXJndil7XG5cdFx0XHRcdFx0cmV0dXJuICg8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+eygrYXJndi5yb3dJbmRleCkgKyAxfTwvZGl2Pik7XG5cdFx0XHRcdH0uYmluZCh0aGlzKVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9LFxuXHRfX2NvbHVtbnNMb2FkZWQ6IGZ1bmN0aW9uIChjb2x1bW5zKXtcblx0XHRpZihjb2x1bW5zICYmIHpuLmlzKGNvbHVtbnMsICdhcnJheScpKXtcblx0XHRcdHZhciBfdGVtcCA9IG51bGwsXG5cdFx0XHRcdF9yZXN1bHQgPSBudWxsLFxuXHRcdFx0XHRfY29sdW1uSXRlcmF0b3IgPSB0aGlzLnByb3BzLmNvbHVtbkl0ZXJhdG9yLFxuXHRcdFx0XHRfY29sdW1ucyA9IGNvbHVtbnMubWFwKGZ1bmN0aW9uIChjb2x1bW4pe1xuXHRcdFx0XHRcdF90ZW1wID0gem4uZGVlcEFzc2lnbih7fSwgY29sdW1uKTtcblx0XHRcdFx0XHRfcmVzdWx0ID0gX2NvbHVtbkl0ZXJhdG9yICYmIF9jb2x1bW5JdGVyYXRvcihfdGVtcCwgdGhpcyk7XG5cdFx0XHRcdFx0aWYoX3Jlc3VsdCA9PT0gZmFsc2UpIHJldHVybiBudWxsO1xuXHRcdFx0XHRcdGlmKHR5cGVvZiBfcmVzdWx0ID09ICdvYmplY3QnKSByZXR1cm4gX3Jlc3VsdDtcblxuXHRcdFx0XHRcdHJldHVybiBfdGVtcDtcblx0XHRcdFx0fS5iaW5kKHRoaXMpKTtcblx0XHRcdHRoaXMuX19pbml0Q2hlY2tib3goX2NvbHVtbnMpO1xuXHRcdFx0dGhpcy5fX2luaXRJbmRleENvbHVtbihfY29sdW1ucyk7XG5cdFx0XHR0aGlzLnByb3BzLm9uQ29sdW1uc0xvYWRlZCAmJiB0aGlzLnByb3BzLm9uQ29sdW1uc0xvYWRlZChjb2x1bW5zKTtcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBjb2x1bW5zOiBfY29sdW1ucyB9KTtcblx0XHR9XG5cdH0sXG5cdF9fb25Db2x1bW5EYXRhQ3JlYXRlZDogZnVuY3Rpb24gKGRhdGEsIGxpZmVjeWNsZSl7XG5cdFx0dGhpcy5jb2x1bW5zID0gZGF0YTtcblx0XHR0aGlzLnByb3BzLm9uQ29sdW1uc0NyZWF0ZWQgJiYgdGhpcy5wcm9wcy5vbkNvbHVtbnNDcmVhdGVkKGRhdGEsIHRoaXMsIGxpZmVjeWNsZSk7XG5cdH0sXG5cdGdldERhdGE6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB0aGlzLnN0YXRlLmRhdGE7XG5cdH0sXG5cdHJlbW92ZVJvd0RhdGE6IGZ1bmN0aW9uIChkYXRhKXtcblx0XHRpZihkYXRhKSB7XG5cdFx0XHR0aGlzLnN0YXRlLmRhdGEuc3BsaWNlKHRoaXMuc3RhdGUuZGF0YS5pbmRleE9mKGRhdGEpLCAxKTtcblx0XHRcdHRoaXMuZm9yY2VVcGRhdGUoKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblx0dXBkYXRlUm93RGF0YTogZnVuY3Rpb24gKGRhdGEpe1xuXHRcdGlmKGRhdGEpIHtcblx0XHRcdHZhciBfaW5kZXggPSB0aGlzLnN0YXRlLmRhdGEuaW5kZXhPZihkYXRhKTtcblx0XHRcdHRoaXMuc3RhdGUuZGF0YVtfaW5kZXhdID0gZGF0YTtcblx0XHRcdHRoaXMuZm9yY2VVcGRhdGUoKTtcblx0XHR9XG5cdFx0XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gPHpudWkucmVhY3QuRGF0YUxpZmVjeWNsZVxuXHRcdFx0XHRcdGRhdGE9e3RoaXMucHJvcHMuY29sdW1uc31cblx0XHRcdFx0XHRyZW5kZXI9e3RoaXMuX19yZW5kZXJ9XG5cdFx0XHRcdFx0cmVzcG9uc2VIYW5kbGVyPXt0aGlzLnByb3BzLnJlc3BvbnNlSGFuZGxlcn1cblx0XHRcdFx0XHRvbkxvYWRpbmc9e3RoaXMucHJvcHMub25Db2x1bW5Mb2FkaW5nfVxuXHRcdFx0XHRcdG9uRmluaXNoZWQ9e3RoaXMuX19jb2x1bW5zTG9hZGVkfVxuXHRcdFx0XHRcdG9uRXJyb3I9e3RoaXMucHJvcHMub25Db2x1bW5Mb2FkRXJyb3J9XG5cdFx0XHRcdFx0b25EYXRhQ3JlYXRlZD17dGhpcy5fX29uQ29sdW1uRGF0YUNyZWF0ZWR9IC8+O1xuXHR9XG59KTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgVGFibGUgPSByZXF1aXJlKCcuL1RhYmxlJyk7XG52YXIgaW5wdXQgPSByZXF1aXJlKCd6bnVpLXJlYWN0LWlucHV0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJUYWJsZUVkaXRvcicsXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHRhYmxlOiBudWxsLFxuXHRcdFx0Y29sdW1uczogW11cblx0XHR9O1xuXHR9LFxuXHRfX2NlbGxDaGFuZ2U6IGZ1bmN0aW9uIChldmVudCwgYXJndil7XG5cdFx0YXJndi5kYXRhW2FyZ3YudGNlbGwucHJvcHMubmFtZV0gPSBldmVudC52YWx1ZTtcblx0XHRhcmd2LnRyb3cuZm9yY2VVcGRhdGUoKTtcblx0fSxcblx0X19jb2x1bW5Cb2R5UmVuZGVyOiBmdW5jdGlvbiAoYXJndil7XG5cdFx0cmV0dXJuIDxpbnB1dC5JbnB1dCBcblx0XHRcdGtleT17YXJndi52YWx1ZX0gXG5cdFx0XHR2YWx1ZT17YXJndi52YWx1ZX0gXG5cdFx0XHRvbkJsdXI9eyhldmVudCk9PnRoaXMuX19jZWxsQ2hhbmdlKGV2ZW50LCBhcmd2KX1cblx0XHRcdG9uRW50ZXI9eyhldmVudCk9PnRoaXMuX19jZWxsQ2hhbmdlKGV2ZW50LCBhcmd2KX0gLz47XG5cdH0sXG5cdF9fY29sdW1uSXRlcmF0b3I6IGZ1bmN0aW9uIChjb2x1bW4sIHRhYmxlKXtcblx0XHRpZighY29sdW1uLmJvZHkpIHtcblx0XHRcdGNvbHVtbi5ib2R5ID0gdGhpcy5fX2NvbHVtbkJvZHlSZW5kZXI7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNvbHVtbjtcblx0fSxcblx0c2V0RGF0YTogZnVuY3Rpb24gKGRhdGEpe1xuXHRcdHZhciBfcmV0dXJuID0gdGhpcy5wcm9wcy5vbkRhdGFDaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkRhdGFDaGFuZ2UoZGF0YSwgdGhpcy5zdGF0ZS50YWJsZSwgdGhpcyk7XG5cdFx0aWYoX3JldHVybiA9PT0gZmFsc2Upe1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRpZih0eXBlb2YgX3JldHVybiA9PSAnb2JqZWN0Jykge1xuXHRcdFx0ZGF0YSA9IF9yZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuc3RhdGUudGFibGUuc3RhdGUuZGF0YSA9IGRhdGE7XG5cdFx0dGhpcy5zdGF0ZS50YWJsZS5mb3JjZVVwZGF0ZSgpO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cdGdldERhdGE6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB0aGlzLnN0YXRlLnRhYmxlLmdldERhdGEoKTtcblx0fSxcblx0YWRkUm93OiBmdW5jdGlvbiAoZGF0YSl7XG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLm9uRGF0YUNoYW5nZSAmJiB0aGlzLnByb3BzLm9uRGF0YUNoYW5nZShbZGF0YV0sIHRoaXMuc3RhdGUudGFibGUsIHRoaXMpO1xuXHRcdGlmKF9yZXR1cm4gPT09IGZhbHNlKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0aWYoem4uaXMoX3JldHVybiwgJ2FycmF5JykpIHtcblx0XHRcdGRhdGEgPSBfcmV0dXJuO1xuXHRcdH1lbHNlIGlmKHpuLmlzKF9yZXR1cm4sICdvYmplY3QnKSl7XG5cdFx0XHRkYXRhID0gWyBkYXRhIF07XG5cdFx0fVxuXG5cdFx0dGhpcy5zdGF0ZS50YWJsZS5zdGF0ZS5kYXRhID0gdGhpcy5zdGF0ZS50YWJsZS5zdGF0ZS5kYXRhLmNvbmNhdChkYXRhKTtcblx0XHR0aGlzLnN0YXRlLnRhYmxlLmZvcmNlVXBkYXRlKCk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8VGFibGUgey4uLnRoaXMucHJvcHN9IHJlZj17KHJlZikgPT4gdGhpcy5zdGF0ZS50YWJsZSA9IHJlZn0gY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItdGFibGUtZWRpdG9yJywgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBjb2x1bW5JdGVyYXRvcj17dGhpcy5fX2NvbHVtbkl0ZXJhdG9yfSAvPlxuXHRcdClcblx0fVxufSk7IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFRhYmxlID0gcmVxdWlyZSgnLi9UYWJsZScpO1xudmFyIHBhZ2VyID0gcmVxdWlyZSgnem51aS1yZWFjdC1wYWdlcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSVGFibGVQYWdlcicsXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNvdW50OiAwLFxuXHRcdFx0Y3VycmVudDogMSxcblx0XHRcdGRhdGE6IFtdLFxuXHRcdFx0dG90YWw6IDAsXG5cdFx0XHRwYWdlSW5kZXg6IHRoaXMucHJvcHMucGFnZUluZGV4IHx8IDEsXG5cdFx0XHRwYWdlU2l6ZTogdGhpcy5wcm9wcy5wYWdlU2l6ZSB8fCAxMCxcblx0XHR9O1xuXHR9LFxuXHRjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24oKXtcblx0XHR0aGlzLnByb3BzLm9uQ29tcG9uZW50RGlkTW91bnQgJiYgdGhpcy5wcm9wcy5vbkNvbXBvbmVudERpZE1vdW50KHRoaXMpO1xuXHR9LFxuXHRzZXQ6IGZ1bmN0aW9uICgpe1xuXHRcdHRoaXMuX3RhYmxlLmRhdGEuX2FyZ3YuZGF0YS50eXBlID0gX3R5cGU7XG5cdFx0XHR0aGlzLl90YWJsZS5zZXRQYWdlSW5kZXgoMSk7XG5cdH0sXG5cdHNldFBhZ2VJbmRleDogZnVuY3Rpb24gKHBhZ2VJbmRleCwgYXJndiwgY2FsbGJhY2spe1xuXHRcdGlmKHRoaXMuZGF0YSl7XG5cdFx0XHRpZihwYWdlSW5kZXggPT0gMSl7XG5cdFx0XHRcdHRoaXMuX3RhYmxlLnNldFN0YXRlKHtcblx0XHRcdFx0XHRjaGVja2VkczogW11cblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnN0YXRlLnBhZ2VJbmRleCA9IHBhZ2VJbmRleDtcblx0XHRcdHRoaXMuc3RhdGUuY3VycmVudCA9IHBhZ2VJbmRleDtcblx0XHRcdHRoaXMuZm9yY2VVcGRhdGUoKTtcblx0XHRcdHRoaXMuZGF0YS5fYXJndiA9IHRoaXMuX19vbkRhdGFJbml0aWFsKHRoaXMucHJvcHMuZGF0YSk7XG5cdFx0XHRpZihhcmd2ICYmIHR5cGVvZiBhcmd2ID09ICdvYmplY3QnKXtcblx0XHRcdFx0aWYoIXRoaXMuZGF0YS5fYXJndi5kYXRhKXtcblx0XHRcdFx0XHR0aGlzLmRhdGEuX2FyZ3YuZGF0YSA9IHt9O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGZvcih2YXIga2V5IGluIGFyZ3Ype1xuXHRcdFx0XHRcdHRoaXMuZGF0YS5fYXJndi5kYXRhW2tleV0gPSBhcmd2W2tleV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRoaXMuZGF0YS5yZWZyZXNoKGNhbGxiYWNrKTtcblx0XHR9XG5cdH0sXG5cdHJlZnJlc2g6IGZ1bmN0aW9uIChjYWxsYmFjayl7XG5cdFx0aWYodGhpcy5fdGFibGUpe1xuXHRcdFx0dGhpcy5fdGFibGUucmVmcmVzaChjYWxsYmFjayk7XG5cdFx0fVxuXHR9LFxuXHRfX2hhbmRsZVBhZ2VDaGFuZ2VkOiBmdW5jdGlvbiAobmV3UGFnZSl7XG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLm9uUGFnZUNoYW5nZWQgJiYgdGhpcy5wcm9wcy5vblBhZ2VDaGFuZ2VkKG5ld1BhZ2UsIHRoaXMpO1xuXHRcdGlmKF9yZXR1cm4gIT09IGZhbHNlKSB7XG5cdFx0XHR0aGlzLnNldFBhZ2VJbmRleChuZXdQYWdlKTtcblx0XHR9XG5cdH0sXG5cdF9faGFuZGxlUGFnZVNpemVDaGFuZ2U6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRwYWdlU2l6ZTogZXZlbnQudGFyZ2V0LnZhbHVlXG5cdFx0fSwgKCk9PnRoaXMuc2V0UGFnZUluZGV4KDEpKTtcblx0fSxcblx0X19yZW5kZXJQYWdlcjogZnVuY3Rpb24gKGNvbHVtbnMsIHRhYmxlKXtcblx0XHR2YXIgX2NvbHVtblNpemUgPSBjb2x1bW5zLmxlbmd0aDtcblx0XHRpZighX2NvbHVtblNpemUpe1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdHZhciBfc3RhdGUgPSB0aGlzLnN0YXRlLFxuXHRcdFx0X2VsZW1lbnQgPSBudWxsLFxuXHRcdFx0X3BhZ2VyUHJvcHMgPSB7XG5cdFx0XHRcdHRvdGFsOiBfc3RhdGUudG90YWwsXG5cdFx0XHRcdGNvdW50OiBfc3RhdGUuY291bnQsXG5cdFx0XHRcdGN1cnJlbnQ6IF9zdGF0ZS5jdXJyZW50LFxuXHRcdFx0XHRwYWdlU2l6ZTogX3N0YXRlLnBhZ2VTaXplLFxuXHRcdFx0XHRvblBhZ2VDaGFuZ2VkOiB0aGlzLl9faGFuZGxlUGFnZUNoYW5nZWQsXG5cdFx0XHRcdG9uUGFnZVNpemVDaGFuZ2U6IHRoaXMuX19oYW5kbGVQYWdlU2l6ZUNoYW5nZVxuXHRcdFx0fSxcblx0XHRcdF9Db21wb25lbnQgPSB0aGlzLnByb3BzLnBhZ2VyIHx8IHBhZ2VyLlBhZ2VyO1xuXHRcdGlmKHpuLmlzKF9Db21wb25lbnQsICdzdHJpbmcnKSl7XG5cdFx0XHRfQ29tcG9uZW50ID0gem4ucGF0aCh3aW5kb3csIF9Db21wb25lbnQpO1xuXHRcdH1lbHNlIGlmKHpuLmlzKF9Db21wb25lbnQsICdvYmplY3QnKSAmJiBfQ29tcG9uZW50LmNvbXBvbmVudCl7XG5cdFx0XHRfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KF9Db21wb25lbnQuY29tcG9uZW50LCB6bi5leHRlbmQoe30sIF9Db21wb25lbnQsIF9wYWdlclByb3BzKSk7XG5cdFx0fVxuXG5cdFx0aWYodGhpcy5wcm9wcy5wYWdlclJlbmRlcil7XG5cdFx0XHRfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMucGFnZXJSZW5kZXIsIF9wYWdlclByb3BzKTtcblx0XHR9XG5cblx0XHRpZighX2VsZW1lbnQgJiYgX0NvbXBvbmVudCAmJiB6bi5pcyhfQ29tcG9uZW50LCAnZnVuY3Rpb24nKSl7XG5cdFx0IFx0X2VsZW1lbnQgPSA8X0NvbXBvbmVudCB7Li4uX3BhZ2VyUHJvcHN9IC8+O1xuXHRcdH1cblxuXHRcdGlmKHRoaXMucHJvcHMuZml4ZWRMYXlvdXQpIHtcblx0XHRcdHJldHVybiAoPGRpdj57X2VsZW1lbnR9PC9kaXY+KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PHRmb290IGNsYXNzTmFtZT1cInRhYmxlLXBhZ2VyXCI+XG5cdFx0XHRcdDx0ciBjbGFzc05hbWU9XCJwYWdlci1yb3dcIj5cblx0XHRcdFx0XHQ8dGQgY29sU3Bhbj17X2NvbHVtblNpemV9PntfZWxlbWVudH08L3RkPlxuXHRcdFx0XHQ8L3RyPlxuXHRcdFx0PC90Zm9vdD5cblx0XHQpO1xuXHR9LFxuXHRfX29uRGF0YUluaXRpYWw6IGZ1bmN0aW9uIChkYXRhKXtcblx0XHR2YXIgX21ldGhvZCA9IGRhdGEubWV0aG9kfHwncG9zdCcsXG5cdFx0XHRfcGFyYW1zID0ge30sXG5cdFx0XHRfa2V5TWFwcyA9IHpuLmRlZXBBc3NpZ24oe1xuXHRcdFx0XHR0b3RhbDogXCJ0b3RhbFwiLFxuXHRcdFx0XHRwYWdlSW5kZXg6ICdwYWdlSW5kZXgnLFxuXHRcdFx0XHRwYWdlU2l6ZTogJ3BhZ2VTaXplJyxcblx0XHRcdFx0ZGF0YTogJ2RhdGEnXG5cdFx0XHR9LCB0aGlzLnByb3BzLmtleU1hcHMpO1xuXG5cdFx0X3BhcmFtc1tfa2V5TWFwcy5wYWdlSW5kZXhdID0gdGhpcy5zdGF0ZS5wYWdlSW5kZXggfHwgMTtcblx0XHRfcGFyYW1zW19rZXlNYXBzLnBhZ2VTaXplXSA9IHRoaXMuc3RhdGUucGFnZVNpemUgfHwgMTA7XG5cdFx0aWYoX21ldGhvZCA9PSAnZ2V0Jyl7XG5cdFx0XHRkYXRhID0gem4uZGVlcEFzc2lnbihkYXRhLCB7XG5cdFx0XHRcdHBhcmFtczogX3BhcmFtc1xuXHRcdFx0fSk7XG5cdFx0fWVsc2V7XG5cdFx0XHRkYXRhID0gem4uZGVlcEFzc2lnbihkYXRhLCB7XG5cdFx0XHRcdGRhdGE6IF9wYXJhbXNcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRcblx0XHRyZXR1cm4gdGhpcy5zdGF0ZS5rZXlNYXBzID0gX2tleU1hcHMsIGRhdGE7XG5cdH0sXG5cdF9fb25EYXRhQ3JlYXRlZDogZnVuY3Rpb24gKGRhdGEsIHRhYmxlKXtcblx0XHR0aGlzLmRhdGEgPSBkYXRhO1xuXHRcdHRoaXMucHJvcHMub25EYXRhQ3JlYXRlZCAmJiB0aGlzLnByb3BzLm9uRGF0YUNyZWF0ZWQoZGF0YSwgdGFibGUsIHRoaXMpO1xuXHR9LFxuXHRfX29uRGF0YUxvYWRlZDogZnVuY3Rpb24gKGRhdGEsIHRhYmxlKXtcblx0XHRpZih0aGlzLnByb3BzLnp4bnope1xuXHRcdFx0aWYoem4uaXMoZGF0YSwgJ29iamVjdCcpICYmIGRhdGEuY29kZSAhPSAyMDApe1xuXHRcdFx0XHRyZXR1cm4gY29uc29sZS5lcnJvcihkYXRhLmRldGFpbCksIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0aWYoem4uaXMoZGF0YSwgJ29iamVjdCcpICYmIGRhdGEuY29kZSA9PSAyMDApe1xuXHRcdFx0XHRkYXRhID0gZGF0YS5yZXN1bHQ7XG5cdFx0XHR9XG5cdFx0XHRpZighem4uaXMoZGF0YSwgJ2FycmF5Jykpe1xuXHRcdFx0XHRyZXR1cm4gY29uc29sZS5lcnJvcihcIlRhYmxlUGFnZXIgQ29tcG9uZW50IERhdGEgVHlwZSBFcnJvci5cIiksIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0dmFyIF9kYXRhID0gZGF0YVswXSxcblx0XHRcdFx0X3BhZ2VyQ291bnQgPSBkYXRhWzFdWzBdLmNvdW50O1xuXHRcdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLm9uRGF0YUxvYWRlZCAmJiB0aGlzLnByb3BzLm9uRGF0YUxvYWRlZChfZGF0YSwgdGFibGUsIHRoaXMpO1xuXHRcdFx0aWYoX3JldHVybiAhPT0gZmFsc2Upe1xuXHRcdFx0XHR0YWJsZS5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0ZGF0YTogX2RhdGFcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdHRvdGFsOiBNYXRoLmNlaWwoX3BhZ2VyQ291bnQvdGhpcy5zdGF0ZS5wYWdlU2l6ZSksXG5cdFx0XHRcdFx0Y291bnQ6IF9wYWdlckNvdW50LFxuXHRcdFx0XHRcdGN1cnJlbnQ6IHRoaXMuc3RhdGUuY3VycmVudCxcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fWVsc2V7XG5cdFx0XHRpZih6bi5pcyhkYXRhLCAnYXJyYXknKSl7XG5cdFx0XHRcdHJldHVybiBjb25zb2xlLmVycm9yKCdUaGUgZGF0YSBpcyBhcnJheSwgYnV0IGl0IG5lZWQgcmV0dXJuIG9iamVjdCcpLCBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHZhciBfZGF0YSA9IGRhdGEuZGF0YTtcblx0XHRcdHZhciBfcmV0dXJuID0gdGhpcy5wcm9wcy5vbkRhdGFMb2FkZWQgJiYgdGhpcy5wcm9wcy5vbkRhdGFMb2FkZWQoX2RhdGEsIHRhYmxlLCB0aGlzKTtcblx0XHRcdGlmKF9yZXR1cm4gIT09IGZhbHNlKXtcblx0XHRcdFx0dGFibGUuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdGRhdGE6IF9kYXRhW3RoaXMuc3RhdGUua2V5TWFwcy5kYXRhXVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0dG90YWw6IE1hdGguY2VpbChfZGF0YVt0aGlzLnN0YXRlLmtleU1hcHMudG90YWxdL3RoaXMuc3RhdGUucGFnZVNpemUpLFxuXHRcdFx0XHRcdGNvdW50OiBfZGF0YVt0aGlzLnN0YXRlLmtleU1hcHMudG90YWxdLFxuXHRcdFx0XHRcdGN1cnJlbnQ6IF9kYXRhW3RoaXMuc3RhdGUua2V5TWFwcy5wYWdlSW5kZXhdXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fSxcblx0X19vbkZpbHRlckNoYW5nZTogZnVuY3Rpb24gKGZpbHRlcnMsIGRhdGEsIHRhYmxlKXtcblx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMub25GaWx0ZXJDaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkZpbHRlckNoYW5nZShmaWx0ZXJzLCBkYXRhLCB0YWJsZSk7XG5cdFx0aWYoX3JldHVybiAhPT0gZmFsc2Upe1xuXHRcdFx0aWYoIXRoaXMuZGF0YS5fYXJndi5kYXRhKSB7XG5cdFx0XHRcdHRoaXMuZGF0YS5fYXJndi5kYXRhID0ge307XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmRhdGEuX2FyZ3YuZGF0YS5maWx0ZXJzID0gZmlsdGVycztcblx0XHRcdHRoaXMuc2V0UGFnZUluZGV4KDEpO1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8VGFibGUgey4uLnRoaXMucHJvcHN9IFxuXHRcdFx0XHRjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd6ci10YWJsZS1wYWdlcicsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gXG5cdFx0XHRcdGNoaWxkcmVuUmVuZGVyPXt0aGlzLl9fcmVuZGVyUGFnZXJ9XG5cdFx0XHRcdG9uQ29tcG9uZW50RGlkTW91bnQ9eyh0YWJsZSk9PnsgXG5cdFx0XHRcdFx0dGhpcy5fdGFibGUgPSB0YWJsZTsgXG5cdFx0XHRcdH19XG5cdFx0XHRcdG9uRmlsdGVyQ2hhbmdlPXt0aGlzLl9fb25GaWx0ZXJDaGFuZ2V9XG5cdFx0XHRcdG9uRGF0YUluaXRpYWw9e3RoaXMuX19vbkRhdGFJbml0aWFsfVxuXHRcdFx0XHRvbkRhdGFDcmVhdGVkPXt0aGlzLl9fb25EYXRhQ3JlYXRlZH1cblx0XHRcdFx0b25EYXRhTG9hZGVkPXt0aGlzLl9fb25EYXRhTG9hZGVkfSAvPlxuXHRcdCk7XG5cdH1cbn0pOyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBDaGVja2JveCA9IHJlcXVpcmUoJ3pudWktcmVhY3Qtc2VsZWN0b3InKS5DaGVja2JveDtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUlRDZWxsQ2hlY2tib3gnLFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y2hlY2tlZDogdGhpcy5wcm9wcy5jaGVja2VkIHx8IGZhbHNlXG5cdFx0fVxuXHR9LFxuXHRfX29uQ2hlY2tib3hDaGFuZ2U6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0aWYodGhpcy5wcm9wcy50aGVhZCkge1xuXHRcdFx0dGhpcy5fX29uSGVhZENoYW5nZShldmVudCk7XG5cdFx0fWVsc2UgaWYodGhpcy5wcm9wcy50Ym9keSkge1xuXHRcdFx0dGhpcy5fX29uQm9keUNoYW5nZShldmVudCk7XG5cdFx0fVxuXHR9LFxuXHRfX29uSGVhZENoYW5nZTogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHRjb25zb2xlLmxvZyhldmVudC5jaGVja2VkLCB0aGlzLnByb3BzKTtcblx0fSxcblx0X19vbkJvZHlDaGFuZ2U6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0Y29uc29sZS5sb2coZXZlbnQuY2hlY2tlZCwgdGhpcy5wcm9wcyk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ6ci10YWJsZS1jZWxsLWNoZWNrYm94XCI+PENoZWNrYm94IGNoZWNrZWQ9e3RydWV9IG9uQ2hhbmdlPXt0aGlzLl9fb25DaGVja2JveENoYW5nZX0vPjwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgQ2hlY2tib3g6IHJlcXVpcmUoJy4vQ2hlY2tib3gnKSxcbiAgICAvL0J1dHRvbnM6IHJlcXVpcmUoJy4vQnV0dG9ucycpLFxuICAgIC8vSW5wdXQ6IHJlcXVpcmUoJy4vSW5wdXQnKSxcbiAgICAvL0NhbGN1bGF0b3I6IHJlcXVpcmUoJy4vQ2FsY3VsYXRvcicpXG59OyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIHRhYmxlOiByZXF1aXJlKCcuL3RhYmxlL2luZGV4JyksXG4gICAgY2VsbDogcmVxdWlyZSgnLi9jZWxsL2luZGV4JyksXG4gICAgUG9wdXBUYWJsZTogcmVxdWlyZSgnLi9Qb3B1cFRhYmxlJyksXG4gICAgVGFibGU6IHJlcXVpcmUoJy4vVGFibGUnKSxcbiAgICBUYWJsZUVkaXRvcjogcmVxdWlyZSgnLi9UYWJsZUVkaXRvcicpLFxuICAgIFRhYmxlUGFnZXI6IHJlcXVpcmUoJy4vVGFibGVQYWdlcicpXG59OyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUlRhYmxlQ29sZ3JvdXAnLFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0dmFyIF9rZXlNYXBwaW5nID0gdGhpcy5wcm9wcy5rZXlNYXBwaW5nIHx8IHsgfTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGNvbGdyb3VwPlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0KHRoaXMucHJvcHMuY29sdW1uc3x8W10pLm1hcChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcblx0XHRcdFx0XHRcdHZhciBfd2lkdGggPSBfa2V5TWFwcGluZy53aWR0aCB8fCAnd2lkdGgnO1xuXHRcdFx0XHRcdFx0cmV0dXJuIDxjb2wga2V5PXtpbmRleH0gc3R5bGU9e3sgd2lkdGg6IGl0ZW1bX3dpZHRoXSB9fSAvPjtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHQ8L2NvbGdyb3VwPlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFRSb3cgPSByZXF1aXJlKCcuL1RSb3cnKTtcbnZhciBsb2FkZXIgPSByZXF1aXJlKCd6bnVpLXJlYWN0LWxvYWRlcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSVEJvZHknLFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCl7XG5cdFx0dmFyIF9wYWdlU2l6ZSA9IHRoaXMucHJvcHMucGFnZVNpemUgfHwgNTA7XG5cdFx0dmFyIF9jb2x1bW5LZXlNYXAgPSB7fSwgX2RlZmF1bHQgPSB7fTtcblx0XHRmb3IodmFyIGNvbHVtbiBvZiB0aGlzLnByb3BzLmNvbHVtbnMpe1xuXHRcdFx0X2NvbHVtbktleU1hcFtjb2x1bW4ubmFtZV0gPSBjb2x1bW47XG5cdFx0XHRpZihjb2x1bW4udmFsdWUgIT09IG51bGwgJiYgY29sdW1uLnZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0X2RlZmF1bHRbY29sdW1uLm5hbWVdID0gY29sdW1uLnZhbHVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHRhY3RpdmU6IG51bGwsXG5cdFx0XHRjaGVja2VkczogW10sXG5cdFx0XHRjbGFzc05hbWU6ICcnLFxuXHRcdFx0Y29sdW1uS2V5TWFwOiBfY29sdW1uS2V5TWFwLFxuXHRcdFx0ZGVmYXVsdDogX2RlZmF1bHQsXG5cdFx0XHRwYWdlSW5kZXg6IHRoaXMucHJvcHMucGFnZUluZGV4IHx8IDEsXG5cdFx0XHRwYWdlU2l6ZTogX3BhZ2VTaXplLFxuXHRcdFx0cGFnZUNvdW50OiBNYXRoLmNlaWwodGhpcy5wcm9wcy5kYXRhLmxlbmd0aCAvIF9wYWdlU2l6ZSksXG5cdFx0XHRzdHlsZToge30sXG5cdFx0XHRsb2FkaW5nOiBmYWxzZVxuXHRcdH07XG5cdH0sXG5cdGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiAoKXtcblx0XHRmb3IodmFyIGl0ZW0gb2YgdGhpcy5wcm9wcy5kYXRhKXtcblx0XHRcdHRoaXMuX19pbml0aWFsRGF0YUl0ZW0oaXRlbSk7XG5cdFx0fVxuXHR9LFxuXHRfX2luaXRpYWxEYXRhSXRlbTogZnVuY3Rpb24gKGRhdGEpe1xuXHRcdHZhciBfZGVmYXVsdCA9IHRoaXMuc3RhdGUuZGVmYXVsdCwgX2NvbHVtbktleU1hcCA9IHRoaXMuc3RhdGUuY29sdW1uS2V5TWFwLCBfdmFsdWUgPSBudWxsO1xuXHRcdGZvcih2YXIga2V5IGluIF9kZWZhdWx0KXtcblx0XHRcdF92YWx1ZSA9IF9kZWZhdWx0W2tleV07XG5cdFx0XHRpZih0eXBlb2YgX3ZhbHVlID09ICdzdHJpbmcnICYmIF92YWx1ZS5pbmRleE9mKCd7JykgIT0gLTEgJiYgX3ZhbHVlLmluZGV4T2YoJ30nKSAhPS0xKSB7XG5cdFx0XHRcdF92YWx1ZSA9IF92YWx1ZS5mb3JtYXQoZGF0YXx8e30pO1xuXHRcdFx0XHRpZihfY29sdW1uS2V5TWFwW2tleV0pIHtcblx0XHRcdFx0XHRzd2l0Y2goX2NvbHVtbktleU1hcFtrZXldLmRhdGFUeXBlKSB7XG5cdFx0XHRcdFx0XHRjYXNlICdOdW1iZXInOlxuXHRcdFx0XHRcdFx0XHRpZihfdmFsdWUuaW5kZXhPZigneycpID09IC0xKXtcblx0XHRcdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRcdFx0X3ZhbHVlID0gZXZhbChfdmFsdWUpO1xuXHRcdFx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRcdFx0XHRcdFx0X3ZhbHVlID0gMDtcblx0XHRcdFx0XHRcdFx0XHRcdHpuLmVycm9yKGVycik7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0Y2FzZSAnUHJpY2UnOlxuXHRcdFx0XHRcdFx0XHRfdmFsdWUgPSB6bnVpLnJlYWN0LnN0cmluZ2lmeVByaWNlKF92YWx1ZSk7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGRhdGFba2V5XSA9IF92YWx1ZTtcblx0XHRcdH1cblxuXG5cdFx0XHRpZihkYXRhW2tleV0gPT0gbnVsbCkge1xuXHRcdFx0XHRkYXRhW2tleV0gPSBfdmFsdWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGRhdGE7XG5cdH0sXG5cdF9fZ2V0RGF0YTogZnVuY3Rpb24gKHBhZ2VJbmRleCwgcGFnZVNpemUpe1xuXHRcdHZhciBfcGFnZUluZGV4ID0gcGFnZUluZGV4IHx8IHRoaXMuc3RhdGUucGFnZUluZGV4O1xuXHRcdHZhciBfcGFnZVNpemUgPSBwYWdlU2l6ZSB8fCB0aGlzLnN0YXRlLnBhZ2VTaXplO1xuXHRcdHJldHVybiB0aGlzLnByb3BzLmRhdGEuc2xpY2UoKF9wYWdlSW5kZXgtMSkgKiBfcGFnZVNpemUsIE1hdGgubWluKF9wYWdlSW5kZXggKiBfcGFnZVNpemUsIHRoaXMucHJvcHMuZGF0YS5sZW5ndGgpKTtcblx0fSxcblx0X19yZW5kZXJMb2FkaW5nOiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX2VsZW1lbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudCh0aGlzLnByb3BzLmxvYWRpbmdSZW5kZXIsIHtcblx0XHRcdHRib2R5OiB0aGlzXG5cdFx0fSwgdGhpcy5wcm9wcy5jb250ZXh0KTtcblxuXHRcdGlmKCFfZWxlbWVudCl7XG5cdFx0IFx0X2VsZW1lbnQgPSA8bG9hZGVyLkRhdGFMb2FkZXIgbG9hZGVyPVwid2F2ZVwiIHRpdGxlPXsnTG9hZGluZy4uLid9IC8+O1xuXHRcdH1cblxuXHRcdHZhciBfbG9hZGluZyA9IHpuLmV4dGVuZCh7IGNsYXNzTmFtZTogJycsIHN0eWxlOiB7fSB9LCB0aGlzLnByb3BzLmxvYWRpbmcpO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8dHIgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInRib2R5LWxvYWRpbmdcIiwgX2xvYWRpbmcuY2xhc3NOYW1lKX0gc3R5bGU9e19sb2FkaW5nLnN0eWxlfT5cblx0XHRcdFx0PHRkIGNvbFNwYW49e3RoaXMucHJvcHMuY29sdW1ucy5sZW5ndGh9PntfZWxlbWVudH08L3RkPlxuXHRcdFx0PC90cj5cblx0XHQpO1xuXHR9LFxuXHRfX3JlbmRlckVtcHR5OiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX2VsZW1lbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudCh0aGlzLnByb3BzLmVtcHR5UmVuZGVyLCB7XG5cdFx0XHR0Ym9keTogdGhpc1xuXHRcdH0sIHRoaXMucHJvcHMuY29udGV4dCk7XG5cblx0XHRpZighX2VsZW1lbnQpe1xuXHRcdCBcdF9lbGVtZW50ID0gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImVtcHR5LWNvbnRlbnRcIj5cblx0XHRcdFx0XHQ8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1wcmVmaXg9XCJmYXNcIiBkYXRhLWljb249XCJkZXNrdG9wXCIgY2xhc3NOYW1lPVwic3ZnLWlubGluZS0tZmEgZmEtZGVza3RvcCBmYS13LTE4IFwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1NzYgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNTI4IDBINDhDMjEuNSAwIDAgMjEuNSAwIDQ4djMyMGMwIDI2LjUgMjEuNSA0OCA0OCA0OGgxOTJsLTE2IDQ4aC03MmMtMTMuMyAwLTI0IDEwLjctMjQgMjRzMTAuNyAyNCAyNCAyNGgyNzJjMTMuMyAwIDI0LTEwLjcgMjQtMjRzLTEwLjctMjQtMjQtMjRoLTcybC0xNi00OGgxOTJjMjYuNSAwIDQ4LTIxLjUgNDgtNDhWNDhjMC0yNi41LTIxLjUtNDgtNDgtNDh6bS0xNiAzNTJINjRWNjRoNDQ4djI4OHpcIj48L3BhdGg+PC9zdmc+XG5cdFx0XHRcdFx0PHNwYW4+RW1wdHk8L3NwYW4+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9XG5cdFx0dmFyIF9lbXB0eSA9IHpuLmV4dGVuZCh7IGNsYXNzTmFtZTogJycsIHN0eWxlOiB7fSB9LCB0aGlzLnByb3BzLmVtcHR5KTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHRyIGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ0Ym9keS1lbXB0eVwiLCBfZW1wdHkuY2xhc3NOYW1lKX0gc3R5bGU9e19lbXB0eS5zdHlsZX0+XG5cdFx0XHRcdDx0ZCBjb2xTcGFuPXt0aGlzLnByb3BzLmNvbHVtbnMubGVuZ3RofT57X2VsZW1lbnR9PC90ZD5cblx0XHRcdDwvdHI+XG5cdFx0KTtcblx0fSxcblx0X19vblJvd0NsaWNrOiBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHR2YXIgX2RhdGEgPSBldmVudC5kYXRhO1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0YWN0aXZlOiBfZGF0YS50cm93LnByb3BzLmRhdGFcblx0XHR9KTtcblx0XHRldmVudC50Ym9keSA9IHRoaXM7XG5cdFx0dGhpcy5wcm9wcy5vblJvd0NsaWNrICYmIHRoaXMucHJvcHMub25Sb3dDbGljayhldmVudCk7XG5cdH0sXG5cdF9fb25DZWxsQ2xpY2s6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0ZXZlbnQudGJvZHkgPSB0aGlzO1xuXHRcdHRoaXMucHJvcHMub25DZWxsQ2xpY2sgJiYgdGhpcy5wcm9wcy5vbkNlbGxDbGljayhldmVudCk7XG5cdH0sXG5cdF9fcmVuZGVyUm93OiBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpe1xuXHRcdGlmKCF6bi5pcyhpdGVtLCAnb2JqZWN0JykpIHsgcmV0dXJuIG51bGw7fVxuXHRcdHZhciBfdGVtcCA9IHRoaXMucHJvcHMuZWFjaFJvd0RhdGEgJiYgdGhpcy5wcm9wcy5lYWNoUm93RGF0YShpdGVtLCBpbmRleCwgdGhpcyk7XG5cdFx0aWYoX3RlbXAgJiYgem4uaXMoX3RlbXAsICdvYmplY3QnKSl7XG5cdFx0XHRpdGVtID0gX3RlbXA7XG5cdFx0fVxuXHRcdHZhciBfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMucm93UmVuZGVyLCB7XG5cdFx0XHRkYXRhOiBpdGVtLFxuXHRcdFx0cm93SW5kZXg6IGluZGV4LFxuXHRcdFx0dGJvZHk6IHRoaXNcblx0XHR9LCB0aGlzLnByb3BzLmNvbnRleHQpO1xuXG5cdFx0aWYoX2VsZW1lbnQpe1xuXHRcdFx0cmV0dXJuIF9lbGVtZW50O1xuXHRcdH1cblx0XHR2YXIgX3Jvd0tleSA9IHRoaXMucHJvcHMucm93S2V5O1xuXHRcdHZhciBfa2V5ID0gaXRlbVtfcm93S2V5XSB8fCBpbmRleDtcblx0XHRyZXR1cm4gPFRSb3cga2V5PXtfa2V5fSByb3dJbmRleD17aW5kZXh9IHsuLi50aGlzLnByb3BzLnJvd30gXG5cdFx0XHRcdFx0Y29udGV4dD17dGhpcy5wcm9wcy5jb250ZXh0fSBcblx0XHRcdFx0XHRjZWxsPXt0aGlzLnByb3BzLmNlbGx9XG5cdFx0XHRcdFx0Y2VsbFJlbmRlcj17dGhpcy5wcm9wcy5jZWxsUmVuZGVyfVxuXHRcdFx0XHRcdGNvbHVtbnM9e3RoaXMucHJvcHMuY29sdW1uc30gXG5cdFx0XHRcdFx0Zml4ZWRDb2x1bW5zPXt0aGlzLnByb3BzLmZpeGVkQ29sdW1uc31cblx0XHRcdFx0XHR0Ym9keT17dGhpc31cblx0XHRcdFx0XHRhY3RpdmU9e3RoaXMuc3RhdGUuYWN0aXZlID09IGl0ZW19IFxuXHRcdFx0XHRcdGRhdGE9e2l0ZW19IFxuXHRcdFx0XHRcdGNoZWNrZWQ9e3RoaXMuc3RhdGUuY2hlY2tlZHMuaW5kZXhPZihpdGVtKSAhPT0gLTF9IFxuXHRcdFx0XHRcdG9uUm93Q2xpY2s9e3RoaXMuX19vblJvd0NsaWNrfVxuXHRcdFx0XHRcdG9uQ2VsbENsaWNrPXt0aGlzLl9fb25DZWxsQ2xpY2t9IC8+O1xuXHR9LFxuXHRfX3BhZ2VDaGFuZ2U6IGZ1bmN0aW9uIChwYWdlSW5kZXgpe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0cGFnZUluZGV4OiBwYWdlSW5kZXhcblx0XHR9KTtcblx0fSxcblx0X19wYWdlc1JlbmRlcjogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF9wYWdlQ291bnQgPSB0aGlzLnN0YXRlLnBhZ2VDb3VudCwgX3BhZ2VzID0gW107XG5cdFx0aWYoX3BhZ2VDb3VudCA+IDEpIHtcblx0XHRcdGZvcih2YXIgaSA9IDE7IGkgPCBfcGFnZUNvdW50ICsgMTsgaSsrKSB7IF9wYWdlcy5wdXNoKGkpOyB9XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8dHIgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInRib2R5LXBhZ2VzXCIsICcnKX0+XG5cdFx0XHRcdFx0PHRkIGNvbFNwYW49e3RoaXMucHJvcHMuY29sdW1ucy5sZW5ndGh9PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkYXRhLXBhZ2VcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwYWdlc1wiPlxuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdF9wYWdlcy5tYXAoKGksIGluZGV4KT0+e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gPHNwYW4ga2V5PXtpbmRleH0gY2xhc3NOYW1lPXsncGFnZSAnICsgKHRoaXMuc3RhdGUucGFnZUluZGV4PT1pPydhY3RpdmUnOicnKX0gb25DbGljaz17KCk9PnRoaXMuX19wYWdlQ2hhbmdlKGkpfT57aX08L3NwYW4+O1xuXHRcdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJwYWdlLWNvdW50XCI+5YWxIHt0aGlzLnByb3BzLmRhdGEubGVuZ3RofSDmnaE8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L3RkPlxuXHRcdFx0XHQ8L3RyPlxuXHRcdFx0KTtcblx0XHR9XG5cdH0sXG5cdF9fcmVuZGVyRGF0YTogZnVuY3Rpb24gKCl7XG5cdFx0aWYodGhpcy5wcm9wcy5kYXRhID09IG51bGwgfHwgKHRoaXMucHJvcHMuZGF0YSAmJiAhdGhpcy5wcm9wcy5kYXRhLmxlbmd0aCkpe1xuXHRcdFx0cmV0dXJuIHRoaXMuX19yZW5kZXJFbXB0eSgpO1xuXHRcdH1cblx0XHRpZih0aGlzLnN0YXRlLnBhZ2VDb3VudCA+IDEpe1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PD5cblx0XHRcdFx0XHR7dGhpcy5fX3BhZ2VzUmVuZGVyKCl9XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGhpcy5fX2dldERhdGEodGhpcy5zdGF0ZS5wYWdlSW5kZXgsIHRoaXMuc3RhdGUucGFnZVNpemUpLm1hcCh0aGlzLl9fcmVuZGVyUm93KVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0PC8+XG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8PlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5kYXRhLm1hcCh0aGlzLl9fcmVuZGVyUm93KVxuXHRcdFx0XHR9XG5cdFx0XHQ8Lz5cblx0XHQpO1xuXHR9LFxuXHRfX3JlbmRlcjogZnVuY3Rpb24gKCl7XG5cdFx0aWYodGhpcy5wcm9wcy5sb2FkaW5nIHx8IHRoaXMuc3RhdGUubG9hZGluZykge1xuXHRcdFx0cmV0dXJuIHRoaXMuX19yZW5kZXJMb2FkaW5nKCk7XG5cdFx0fWVsc2V7XG5cdFx0XHRyZXR1cm4gdGhpcy5fX3JlbmRlckRhdGEoKTtcblx0XHR9XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHRib2R5IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci10YWJsZS10Ym9keVwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSwgdGhpcy5zdGF0ZS5jbGFzc05hbWUpfSBzdHlsZT17em51aS5yZWFjdC5zdHlsZSh0aGlzLnByb3BzLnN0eWxlLCB0aGlzLnN0YXRlLnN0eWxlKX0+XG5cdFx0XHRcdHsgdGhpcy5fX3JlbmRlcigpIH1cblx0XHRcdDwvdGJvZHk+XG5cdFx0KTtcblx0fVxufSk7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJUQm9keUVtcHR5Jyxcblx0X19yZW5kZXJFbXB0eTogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF9lbGVtZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQodGhpcy5wcm9wcy5lbXB0eVJlbmRlciwge1xuXHRcdFx0dGJvZHk6IHRoaXNcblx0XHR9LCB0aGlzLnByb3BzLmNvbnRleHQpO1xuXG5cdFx0aWYoIV9lbGVtZW50KXtcblx0XHQgXHRfZWxlbWVudCA9IDxkaXYgY2xhc3NOYW1lPVwiZW1wdHktY29udGVudFwiPlxuXHRcdFx0XHQgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFzXCIgZGF0YS1pY29uPVwiZGVza3RvcFwiIGNsYXNzTmFtZT1cInN2Zy1pbmxpbmUtLWZhIGZhLWRlc2t0b3AgZmEtdy0xOCBcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTc2IDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTUyOCAwSDQ4QzIxLjUgMCAwIDIxLjUgMCA0OHYzMjBjMCAyNi41IDIxLjUgNDggNDggNDhoMTkybC0xNiA0OGgtNzJjLTEzLjMgMC0yNCAxMC43LTI0IDI0czEwLjcgMjQgMjQgMjRoMjcyYzEzLjMgMCAyNC0xMC43IDI0LTI0cy0xMC43LTI0LTI0LTI0aC03MmwtMTYtNDhoMTkyYzI2LjUgMCA0OC0yMS41IDQ4LTQ4VjQ4YzAtMjYuNS0yMS41LTQ4LTQ4LTQ4em0tMTYgMzUySDY0VjY0aDQ0OHYyODh6XCI+PC9wYXRoPjwvc3ZnPlxuXHRcdFx0XHQgPHNwYW4+RW1wdHk8L3NwYW4+XG5cdFx0XHQgPC9kaXY+O1xuXHRcdH1cblx0XHR2YXIgX2VtcHR5ID0gem4uZXh0ZW5kKHsgY2xhc3NOYW1lOiAnJywgc3R5bGU6IHt9IH0sIHRoaXMucHJvcHMuZW1wdHkpO1xuXHRcdHJldHVybiA8dHIgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInRib2R5LWVtcHR5XCIsIF9lbXB0eS5jbGFzc05hbWUpfSBzdHlsZT17X2VtcHR5LnN0eWxlfT5cblx0XHRcdDx0ZCBjb2xTcGFuPXt0aGlzLnByb3BzLmNvbHVtbnMubGVuZ3RofT57X2VsZW1lbnR9PC90ZD5cblx0XHQ8L3RyPjtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8dGJvZHkgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXRhYmxlLXRib2R5LWVtcHR5XCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gc3R5bGU9e3pudWkucmVhY3Quc3R5bGUodGhpcy5wcm9wcy5zdHlsZSl9PlxuXHRcdFx0XHR7IHRoaXMuX19yZW5kZXJFbXB0eSgpIH1cblx0XHRcdDwvdGJvZHk+XG5cdFx0KTtcblx0fVxufSk7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUmVhY3RET00gPSB6bnVpLlJlYWN0RE9NIHx8IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSVENlbGwnLFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y2xhc3NOYW1lOiAnJyxcblx0XHRcdHN0eWxlOiB7fSxcblx0XHRcdGRpc2FibGVkOiB0aGlzLnByb3BzLmRpc2FibGVkLFxuXHRcdFx0Y2hlY2tlZDogdGhpcy5wcm9wcy5jaGVja2VkLFxuXHRcdFx0YWN0aXZlOiB0aGlzLnByb3BzLmFjdGl2ZVxuXHRcdH1cblx0fSxcblx0X19yZW5kZXJDZWxsQ29udGVudDogZnVuY3Rpb24gKCl7XG5cdFx0aWYodGhpcy5wcm9wcy5jaGlsZHJlbikge1xuXHRcdFx0cmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW47XG5cdFx0fVxuXHRcdFxuXHRcdHZhciBfdmFsdWUgPSBudWxsO1xuXHRcdGlmKHRoaXMucHJvcHMuZGF0YSAmJiB0aGlzLnByb3BzLm5hbWUpIHtcblx0XHRcdF92YWx1ZSA9IHRoaXMucHJvcHMuZGF0YVt0aGlzLnByb3BzLm5hbWVdO1xuXHRcdH1cblxuXHRcdHZhciBfcmVuZGVyID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQodGhpcy5wcm9wcy5yZW5kZXIgfHwgdGhpcy5wcm9wcy5ib2R5LCB7XG5cdFx0XHRyb3dJbmRleDogdGhpcy5wcm9wcy5yb3dJbmRleCxcblx0XHRcdGNlbGxJbmRleDogdGhpcy5wcm9wcy5jZWxsSW5kZXgsIFxuXHRcdFx0Y29sdW1uOiB0aGlzLnByb3BzLmNvbHVtbixcblx0XHRcdGRhdGE6IHRoaXMucHJvcHMuZGF0YSxcblx0XHRcdHZhbHVlOiBfdmFsdWUsXG5cdFx0XHR0Y2VsbDogdGhpcyxcblx0XHRcdHRyb3c6IHRoaXMucHJvcHMudHJvdyxcblx0XHRcdHRib2R5OiB0aGlzLnByb3BzLnRib2R5LFxuXHRcdFx0dGFibGU6IHRoaXMucHJvcHMudGJvZHkucHJvcHMudGFibGVcblx0XHR9LCB0aGlzLnByb3BzLmNvbnRleHQpO1xuXHRcdFxuXHRcdGlmKF9yZW5kZXIpe1xuXHRcdFx0cmV0dXJuIF9yZW5kZXI7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY2VsbC1sYWJlbFwiIHRpdGxlPXtfdmFsdWV9PntfdmFsdWV9PC9kaXY+O1xuXHR9LFxuXHRfX2NlbGxDbGljazogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHR2YXIgX3RoaXMgPSB0aGlzO1xuXHRcdGV2ZW50LmRhdGEgPSB7XG5cdFx0XHRmaW5kVERET006IGZ1bmN0aW9uICgpe1xuXHRcdFx0XHRyZXR1cm4gUmVhY3RET00uZmluZERPTU5vZGUoX3RoaXMpO1xuXHRcdFx0fSxcblx0XHRcdHRjZWxsOiB0aGlzXG5cdFx0fTtcblx0XHR0aGlzLnByb3BzLm9uQ2xpY2sgJiYgdGhpcy5wcm9wcy5vbkNsaWNrKGV2ZW50KTtcblx0XHR0aGlzLnByb3BzLm9uQ2VsbENsaWNrICYmIHRoaXMucHJvcHMub25DZWxsQ2xpY2soZXZlbnQpO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0dmFyIF9jb2x1bW4gPSB0aGlzLnByb3BzLmNvbHVtbiB8fCB7fTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHRkIGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci10YWJsZS10Y2VsbFwiLCAoX2NvbHVtbi5maXhlZD8nZml4ZWQnOicnKSwgdGhpcy5wcm9wcy5jbGFzc05hbWUsIF9jb2x1bW4uYm9keUNsYXNzTmFtZSwgdGhpcy5zdGF0ZS5jbGFzc05hbWUpfSBzdHlsZT17em51aS5yZWFjdC5zdHlsZSh0aGlzLnByb3BzLnN0eWxlLCBfY29sdW1uLmJvZHlTdHlsZSwgdGhpcy5zdGF0ZS5zdHlsZSwgX2NvbHVtbi5maXhlZFN0eWxlcyl9XHRcblx0XHRcdFx0ZGF0YS1kaXNhYmxlZD17dGhpcy5zdGF0ZS5kaXNhYmxlZH1cblx0XHRcdFx0ZGF0YS1jaGVja2VkPXt0aGlzLnN0YXRlLmNoZWNrZWR9XG5cdFx0XHRcdGRhdGEtYWN0aXZlPXt0aGlzLnN0YXRlLmFjdGl2ZX1cblx0XHRcdFx0b25DbGljaz17dGhpcy5fX2NlbGxDbGlja30gPlxuXHRcdFx0XHR7dGhpcy5fX3JlbmRlckNlbGxDb250ZW50KCl9XG5cdFx0XHQ8L3RkPlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIGZpbHRlciA9IHJlcXVpcmUoJ3pudWktcmVhY3QtZmlsdGVyJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTogJ1pSRmlsdGVyJyxcblx0Z2V0SW5pdGlhbFN0YXRlOmZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNsYXNzTmFtZTogJycsXG5cdFx0XHRzdHlsZToge30sXG5cdFx0XHRkYXRhOiB7fVxuXHRcdH1cblx0fSxcblx0X19vbkZpbHRlckNoYW5nZTogZnVuY3Rpb24gKGV2ZW50LCBpbnB1dCwgZmlsdGVyRmllbGQpe1xuXHRcdGlmKGV2ZW50Lm5hbWUgJiYgZXZlbnQub3B0KSB7XG5cdFx0XHRpZihldmVudC52YWx1ZSA9PT0gbnVsbCB8fCBldmVudC52YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRoaXMuc3RhdGUuZGF0YVtldmVudC5uYW1lXSA9IG51bGw7XG5cdFx0XHRcdGRlbGV0ZSB0aGlzLnN0YXRlLmRhdGFbZXZlbnQubmFtZV07XG5cdFx0XHR9ZWxzZSBpZighZXZlbnQudmFsdWUgJiYgIWlucHV0LnByb3BzLmVtcHR5VmFsdWVFbmFibGVkKXtcblx0XHRcdFx0dGhpcy5zdGF0ZS5kYXRhW2V2ZW50Lm5hbWVdID0gbnVsbDtcblx0XHRcdFx0ZGVsZXRlIHRoaXMuc3RhdGUuZGF0YVtldmVudC5uYW1lXTtcblx0XHRcdH1lbHNle1xuXHRcdFx0XHR0aGlzLnN0YXRlLmRhdGFbZXZlbnQubmFtZV0gPSB7XG5cdFx0XHRcdFx0dmFsdWU6IGV2ZW50LnZhbHVlLFxuXHRcdFx0XHRcdG9wdDogZXZlbnQub3B0XG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHRoaXMucHJvcHMub25GaWx0ZXIgJiYgdGhpcy5wcm9wcy5vbkZpbHRlcih0aGlzLnN0YXRlLmRhdGEpO1xuXHR9LFxuXHRfX29uRmlsdGVyQ2FuY2VsOiBmdW5jdGlvbiAobmFtZSl7XG5cdFx0aWYobmFtZSAmJiB0aGlzLnN0YXRlLmRhdGEpe1xuXHRcdFx0dGhpcy5zdGF0ZS5kYXRhW25hbWVdID0gbnVsbDtcblx0XHRcdGRlbGV0ZSB0aGlzLnN0YXRlLmRhdGFbbmFtZV07XG5cdFx0fVxuXHR9LFxuXHRfX3JlbmRlckNlbGw6IGZ1bmN0aW9uIChjb2x1bW4sIGluZGV4KXtcblx0XHRpZighem4uaXMoY29sdW1uLCAnb2JqZWN0JykpIHsgcmV0dXJuIG51bGw7IH1cblx0XHR2YXIgX2VsZW1lbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudCh0aGlzLnByb3BzLmNlbGxSZW5kZXIsIHtcblx0XHRcdGNvbHVtbjogY29sdW1uLFxuXHRcdFx0Y2VsbEluZGV4OiBpbmRleCwgXG5cdFx0XHR0ZmlsdGVyOiB0aGlzXG5cdFx0fSk7XG5cdFx0aWYoX2VsZW1lbnQpe1xuXHRcdFx0cmV0dXJuIF9lbGVtZW50O1xuXHRcdH1cblx0XHRcblx0XHR2YXIgX2NvbnRlbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudChjb2x1bW4ucmVuZGVyLCB7XG5cdFx0XHRjb2x1bW46IGNvbHVtbixcblx0XHRcdGNlbGxJbmRleDogaW5kZXgsIFxuXHRcdFx0dGZpbHRlcjogdGhpc1xuXHRcdH0pO1xuXG5cdFx0aWYoIV9jb250ZW50ICYmIGNvbHVtbi5maWx0ZXIpIHtcblx0XHRcdHZhciBfZmlsdGVyID0gY29sdW1uLmZpbHRlcjtcblx0XHRcdGlmKHpuLmlzKF9maWx0ZXIsICdmdW5jdGlvbicpKSB7XG5cdFx0XHRcdGlmKF9maWx0ZXIucHJvdG90eXBlICYmIF9maWx0ZXIucHJvdG90eXBlLnJlbmRlcikge1xuXHRcdFx0XHRcdF9jb250ZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQoX2ZpbHRlciwge1xuXHRcdFx0XHRcdFx0Y29sdW1uOiBjb2x1bW4sXG5cdFx0XHRcdFx0XHR0ZmlsdGVyOiB0aGlzXG5cdFx0XHRcdFx0fSk7XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIF9maWx0ZXIgPSBfZmlsdGVyLmNhbGwobnVsbCwgY29sdW1uLCB0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG5cdFx0XHR9XG5cblx0XHRcdGlmKHpuLmlzKF9maWx0ZXIsICdvYmplY3QnKSkge1xuXHRcdFx0XHR2YXIgX2tleSA9IF9maWx0ZXIua2V5IHx8IGNvbHVtbi5uYW1lO1xuXHRcdFx0XHRpZih6bi5pcyhfa2V5LCAnZnVuY3Rpb24nKSkge1xuXHRcdFx0XHRcdF9rZXkgPSBfa2V5LmNhbGwobnVsbCwgY29sdW1uLCB0aGlzKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdF9jb250ZW50ID0gPGZpbHRlci5GaWx0ZXJGaWVsZCBrZXk9e19rZXkgfHwgem4udXVpZCgpfSB7Li4uX2ZpbHRlcn0gbmFtZT17Y29sdW1uLm5hbWV9IG9uRmlsdGVyQ2hhbmdlPXt0aGlzLl9fb25GaWx0ZXJDaGFuZ2V9IG9uQ2FuY2VsPXt0aGlzLl9fb25GaWx0ZXJDYW5jZWx9IC8+O1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHZhciBfY2VsbCA9IHpuLmV4dGVuZCh7IHN0eWxlOiB7fSwgY2xhc3NOYW1lOiAnJyB9LCB0aGlzLnByb3BzLmNlbGwpO1xuXHRcdHJldHVybiA8dGQga2V5PXtpbmRleH0gY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgndGZpbHRlci1jZWxsJywgKGNvbHVtbi5maXhlZD8nZml4ZWQnOicnKSwgX2NlbGwuY2xhc3NOYW1lKX0gc3R5bGU9e3pudWkucmVhY3Quc3R5bGUoX2NlbGwuc3R5bGUsIGNvbHVtbi5maXhlZFN0eWxlcyl9PlxuXHRcdFx0eyBfY29udGVudCB9XG5cdFx0PC90ZD47XG5cdH0sXG5cdF9fcmVuZGVyUm93OiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX2VsZW1lbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudCh0aGlzLnByb3BzLnJvd1JlbmRlciwge1xuXHRcdFx0dGZpbHRlcjogdGhpc1xuXHRcdH0pO1xuXHRcdGlmKF9lbGVtZW50KXtcblx0XHRcdHJldHVybiBfZWxlbWVudDtcblx0XHR9XG5cdFx0dmFyIF9yb3cgPSB6bi5leHRlbmQoeyBjbGFzc05hbWU6ICcnLCBzdHlsZToge30gfSwgdGhpcy5wcm9wcy5yb3cpO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8dHIgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInRmaWx0ZXItcm93IHpyLXRhYmxlLXRyb3dcIiwgX3Jvdy5jbGFzc05hbWUpfSBzdHlsZT17X3Jvdy5zdHlsZX0+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHQodGhpcy5wcm9wcy5jb2x1bW5zfHxbXSkubWFwKHRoaXMuX19yZW5kZXJDZWxsKVxuXHRcdFx0XHR9XG5cdFx0XHQ8L3RyPlxuXHRcdCk7XG5cdH0sXG5cdHJlbmRlcjpmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8dGhlYWQgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXRhYmxlLXRmaWx0ZXJcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUsIHRoaXMuc3RhdGUuY2xhc3NOYW1lKX0gc3R5bGU9e3pudWkucmVhY3Quc3R5bGUodGhpcy5wcm9wcy5zdHlsZSwgdGhpcy5zdGF0ZS5zdHlsZSl9PlxuXHRcdFx0XHR7dGhpcy5fX3JlbmRlclJvdygpfVxuXHRcdFx0PC90aGVhZD5cblx0XHQpO1xuXHR9XG59KTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJURm9vdCcsXG5cdF9fcmVuZGVyQ2hpbGRyZW46IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfY29sdW1ucyA9IHRoaXMucHJvcHMuY29sdW1ucyB8fCBbXTtcblx0XHRpZih0aGlzLnByb3BzLmNoaWxkcmVuKXtcblx0XHRcdHJldHVybiA8dHIgY2xhc3NOYW1lPVwidGZvb3Qtcm93XCI+XG5cdFx0XHRcdDx0ZCBjb2xTcGFuPXtfY29sdW1ucy5sZW5ndGh9Pnt0aGlzLnByb3BzLmNoaWxkcmVufTwvdGQ+XG5cdFx0XHQ8L3RyPjtcblx0XHR9ZWxzZXtcblx0XHRcdHJldHVybiB0aGlzLl9fcmVuZGVyUm93KCk7XG5cdFx0fVxuXHR9LFxuXHRfX3JlbmRlckNlbGw6IGZ1bmN0aW9uIChjb2x1bW4sIGluZGV4KXtcblx0XHRpZighem4uaXMoY29sdW1uLCAnb2JqZWN0JykpIHsgcmV0dXJuIG51bGw7IH1cblx0XHR2YXIgX2VsZW1lbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudCh0aGlzLnByb3BzLmNlbGxSZW5kZXIsIHtcblx0XHRcdGNvbHVtbjogY29sdW1uLFxuXHRcdFx0Y2VsbEluZGV4OiBpbmRleCwgXG5cdFx0XHR0Zm9vdDogdGhpc1xuXHRcdH0pO1xuXHRcdGlmKF9lbGVtZW50KXtcblx0XHRcdHJldHVybiBfZWxlbWVudDtcblx0XHR9XG5cblx0XHR2YXIgX2NvbnRlbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudChjb2x1bW4ucmVuZGVyIHx8IGNvbHVtbi5mb290LCB7XG5cdFx0XHRjb2x1bW46IGNvbHVtbixcblx0XHRcdGNlbGxJbmRleDogaW5kZXgsIFxuXHRcdFx0dGZvb3Q6IHRoaXNcblx0XHR9KTtcblxuXHRcdGlmKHRoaXMucHJvcHMucmVuZGVyKSB7XG5cdFx0XHRfY29udGVudCA9IHRoaXMucHJvcHMucmVuZGVyKGNvbHVtbiwgaW5kZXgsIHRoaXMpO1xuXHRcdH1cblxuXHRcdHZhciBfY2VsbCA9IHpuLmV4dGVuZCh7IHN0eWxlOiB7fSwgY2xhc3NOYW1lOiAnJyB9LCB0aGlzLnByb3BzLmNlbGwpO1xuXHRcdHJldHVybiA8dGgga2V5PXtpbmRleH0gY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgndGZvb3QtY2VsbCcsIF9jZWxsLmNsYXNzTmFtZSl9IHN0eWxlPXtfY2VsbC5zdHlsZX0+XG5cdFx0XHR7IF9jb250ZW50IH1cblx0XHQ8L3RoPjtcblx0fSxcblx0X19yZW5kZXJSb3c6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMucm93UmVuZGVyLCB7XG5cdFx0XHR0aGVhZDogdGhpc1xuXHRcdH0pO1xuXHRcdGlmKF9lbGVtZW50KXtcblx0XHRcdHJldHVybiBfZWxlbWVudDtcblx0XHR9XG5cdFx0dmFyIF9yb3cgPSB6bi5leHRlbmQoeyBjbGFzc05hbWU6ICcnLCBzdHlsZToge30gfSwgdGhpcy5wcm9wcy5yb3cpO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8dHIgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInRmb290LXJvd1wiLCBfcm93LmNsYXNzTmFtZSl9IHN0eWxlPXtfcm93LnN0eWxlfT5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdCh0aGlzLnByb3BzLmNvbHVtbnN8fFtdKS5tYXAodGhpcy5fX3JlbmRlckNlbGwpXG5cdFx0XHRcdH1cblx0XHRcdDwvdHI+XG5cdFx0KTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8dGZvb3QgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXRhYmxlLXRmb290XCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9PlxuXHRcdFx0XHR7dGhpcy5fX3JlbmRlckNoaWxkcmVuKCl9XG5cdFx0XHQ8L3Rmb290PlxuXHRcdCk7XG5cdH1cbn0pOyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBUSGVhZFNvcnQgPSByZXF1aXJlKCcuL1RIZWFkU29ydCcpO1xudmFyIHBvcHVwID0gcmVxdWlyZSgnem51aS1yZWFjdC1wb3B1cCcpO1xudmFyIHpyanNvbiA9IHJlcXVpcmUoJ3pudWktcmVhY3QtanNvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidUSGVhZCcsXG5cdGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHt9O1xuXHR9LFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRjbGFzc05hbWU6ICcnLFxuXHRcdFx0c3R5bGU6IHt9LFxuXHRcdFx0c29ydDoge30sXG5cdFx0XHRmaWx0ZXI6IHt9XG5cdFx0fTtcblx0fSxcblx0X19vbkNvbHVtblNvcnQ6IGZ1bmN0aW9uIChzb3J0LCBjb2x1bW4pe1xuXHRcdGlmKGNvbHVtbi5uYW1lKSB7XG5cdFx0XHR0aGlzLnN0YXRlLnNvcnRbY29sdW1uLm5hbWVdID0gc29ydDtcblx0XHR9XG5cdFx0dGhpcy5wcm9wcy5vblNvcnQgJiYgdGhpcy5wcm9wcy5vblNvcnQodGhpcy5zdGF0ZS5zb3J0KTtcblx0fSxcblx0X19vbkNvbHVtbkVkaXRvckNoYW5nZTogZnVuY3Rpb24gKGRhdGEsIGNoaWxkLCByb290LCBpbmRleCl7XG4gICAgICAgIHZhciBfcm9vdCA9IHJvb3QgfHwgY2hpbGQ7XG5cdFx0dGhpcy5wcm9wcy5vbkNvbHVtbkNoYW5nZSAmJiB0aGlzLnByb3BzLm9uQ29sdW1uQ2hhbmdlKF9yb290LnN0YXRlLnZhbHVlLCBpbmRleCk7XG4gICAgfSxcblx0X19pY29uQ2xpY2tSZW5kZXI6IGZ1bmN0aW9uIChjb2x1bW4sIGluZGV4KXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBzdHlsZT17e3BhZGRpbmc6IDEwLCBtYXhIZWlnaHQ6IDUwMCwgd2lkdGg6IDQwMCwgb3ZlcmZsb3c6ICdhdXRvJ319PlxuXHRcdFx0XHQ8enJqc29uLmVkaXRvci5vYmplY3QgZm9sZD17ZmFsc2V9XG5cdFx0XHRcdFx0ZGlzcGxheUNsb3N1cmU9e3RydWV9IFxuXHRcdFx0XHRcdGRpc3BsYXlJdGVtQ291bnQ9e3RydWV9IFxuXHRcdFx0XHRcdGxhYmVsPXsnQ29sdW1uJ30gXG5cdFx0XHRcdFx0dmFsdWU9e2NvbHVtbn0gXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyhkYXRhLCBjaGlsZCwgcm9vdCk9PnRoaXMuX19vbkNvbHVtbkVkaXRvckNoYW5nZShkYXRhLCBjaGlsZCwgcm9vdCwgaW5kZXgpfSAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fSxcblx0X19zb3J0UmVuZGVyOiBmdW5jdGlvbiAoKXtcblxuXHR9LFxuXHRfX3JlbmRlckNlbGw6IGZ1bmN0aW9uIChjb2x1bW4sIGluZGV4KXtcblx0XHRpZighem4uaXMoY29sdW1uLCAnb2JqZWN0JykpIHsgcmV0dXJuIG51bGw7IH1cblx0XHR2YXIgX2VsZW1lbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudCh0aGlzLnByb3BzLmNlbGxSZW5kZXIsIHtcblx0XHRcdGNvbHVtbjogY29sdW1uLFxuXHRcdFx0Y2VsbEluZGV4OiBpbmRleCwgXG5cdFx0XHR0aGVhZDogdGhpc1xuXHRcdH0pO1xuXHRcdGlmKF9lbGVtZW50KXtcblx0XHRcdHJldHVybiBfZWxlbWVudDtcblx0XHR9XG5cblx0XHR2YXIgX2NvbnRlbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudChjb2x1bW4ucmVuZGVyIHx8IGNvbHVtbi5oZWFkLCB7XG5cdFx0XHRcdGNvbHVtbjogY29sdW1uLFxuXHRcdFx0XHRjZWxsSW5kZXg6IGluZGV4LCBcblx0XHRcdFx0dGhlYWQ6IHRoaXMsXG5cdFx0XHRcdHRhYmxlOiB0aGlzLnByb3BzLnRhYmxlXG5cdFx0XHR9KSxcblx0XHRcdF9tYXBwaW5nID0gdGhpcy5wcm9wcy5rZXlNYXBwaW5nIHx8IHt9LFxuXHRcdFx0X2xhYmVsS2V5ID0gX21hcHBpbmdbJ2xhYmVsJ10gfHwgJ2xhYmVsJyxcblx0XHRcdF9sYWJlbCA9IGNvbHVtbltfbGFiZWxLZXldO1xuXG5cdFx0aWYoem4uaXMoX2xhYmVsLCAnZnVuY3Rpb24nKSl7XG5cdFx0XHRfbGFiZWwgPSBfbGFiZWwoY29sdW1uLCB0aGlzKTtcblx0XHR9XG5cdFx0aWYoIV9jb250ZW50KSB7XG5cdFx0XHRfY29udGVudCA9IChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e1wiY2VsbC1sYWJlbCBcIiArIChjb2x1bW4uc29ydD8nc29ydGFibGUnOicnKX0gdGl0bGU9e19sYWJlbH0+XG5cdFx0XHRcdFx0eyAhIWNvbHVtbi5yZXF1aXJlZCAmJiA8c3BhbiBkYXRhLXpyLXBvcHVwLXRvb2x0aXA9XCLlv4XopoHlrZfmrrVcIiBjbGFzc05hbWU9XCJyZXF1aXJlZFwiPio8L3NwYW4+fVxuXHRcdFx0XHRcdHsgX2xhYmVsIH1cblx0XHRcdFx0XHR7IFxuXHRcdFx0XHRcdFx0ISFjb2x1bW4uZWRpdGFibGUgJiYgPHBvcHVwLkRyb3Bkb3duIFxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjZWxsLWVkaXRvclwiIFxuXHRcdFx0XHRcdFx0XHRwb3BvdmVyPXt7XG5cdFx0XHRcdFx0XHRcdFx0cmVuZGVyOiB0aGlzLl9faWNvbkNsaWNrUmVuZGVyKGNvbHVtbiwgaW5kZXgpLFxuXHRcdFx0XHRcdFx0XHRcdGNsb3NlYWJsZTogdHJ1ZVxuXHRcdFx0XHRcdFx0XHR9fSA+XG5cdFx0XHRcdFx0XHRcdDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhc1wiIGRhdGEtaWNvbj1cImVkaXRcIiBjbGFzc05hbWU9XCJpY29uIHN2Zy1pbmxpbmUtLWZhIGZhLWVkaXQgZmEtdy0xOCBcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTc2IDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTQwMi42IDgzLjJsOTAuMiA5MC4yYzMuOCAzLjggMy44IDEwIDAgMTMuOEwyNzQuNCA0MDUuNmwtOTIuOCAxMC4zYy0xMi40IDEuNC0yMi45LTkuMS0yMS41LTIxLjVsMTAuMy05Mi44TDM4OC44IDgzLjJjMy44LTMuOCAxMC0zLjggMTMuOCAwem0xNjItMjIuOWwtNDguOC00OC44Yy0xNS4yLTE1LjItMzkuOS0xNS4yLTU1LjIgMGwtMzUuNCAzNS40Yy0zLjggMy44LTMuOCAxMCAwIDEzLjhsOTAuMiA5MC4yYzMuOCAzLjggMTAgMy44IDEzLjggMGwzNS40LTM1LjRjMTUuMi0xNS4zIDE1LjItNDAgMC01NS4yek0zODQgMzQ2LjJWNDQ4SDY0VjEyOGgyMjkuOGMzLjIgMCA2LjItMS4zIDguNS0zLjVsNDAtNDBjNy42LTcuNiAyLjItMjAuNS04LjUtMjAuNUg0OEMyMS41IDY0IDAgODUuNSAwIDExMnYzNTJjMCAyNi41IDIxLjUgNDggNDggNDhoMzUyYzI2LjUgMCA0OC0yMS41IDQ4LTQ4VjMwNi4yYzAtMTAuNy0xMi45LTE2LTIwLjUtOC41bC00MCA0MGMtMi4yIDIuMy0zLjUgNS4zLTMuNSA4LjV6XCI+PC9wYXRoPjwvc3ZnPlxuXHRcdFx0XHRcdFx0PC9wb3B1cC5Ecm9wZG93bj5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHR2YXIgX2NlbGwgPSB6bi5leHRlbmQoeyBzdHlsZToge30sIGNsYXNzTmFtZTogJycgfSwgdGhpcy5wcm9wcy5jZWxsLCBjb2x1bW4pO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8dGgga2V5PXtpbmRleH0gY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgndGhlYWQtY2VsbCcsIChjb2x1bW4uZml4ZWQ/J2ZpeGVkJzonJyksIF9jZWxsLmNsYXNzTmFtZSl9IHN0eWxlPXt6bnVpLnJlYWN0LnN0eWxlKF9jZWxsLnN0eWxlLCBjb2x1bW4uZml4ZWRTdHlsZXMpfT5cblx0XHRcdFx0eyBfY29udGVudCB9XG5cdFx0XHRcdHsgISFjb2x1bW4uc29ydCAmJiA8VEhlYWRTb3J0IGNsYXNzTmFtZT1cImNlbGwtc29ydFwiIG9uU29ydD17KHNvcnQpPT50aGlzLl9fb25Db2x1bW5Tb3J0KHNvcnQsIGNvbHVtbil9IC8+fVxuXHRcdFx0PC90aD5cblx0XHQpO1xuXHR9LFxuXHRfX3JlbmRlclJvdzogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF9lbGVtZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQodGhpcy5wcm9wcy5yb3dSZW5kZXIsIHtcblx0XHRcdHRoZWFkOiB0aGlzXG5cdFx0fSk7XG5cdFx0aWYoX2VsZW1lbnQpe1xuXHRcdFx0cmV0dXJuIF9lbGVtZW50O1xuXHRcdH1cblx0XHR2YXIgX3JvdyA9IHpuLmV4dGVuZCh7IGNsYXNzTmFtZTogJycsIHN0eWxlOiB7fSB9LCB0aGlzLnByb3BzLnJvdyk7XG5cdFx0cmV0dXJuIChcblx0XHRcdDx0ciBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwidGhlYWQtcm93XCIsIF9yb3cuY2xhc3NOYW1lKX0gc3R5bGU9e19yb3cuc3R5bGV9PlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0KHRoaXMucHJvcHMuY29sdW1uc3x8W10pLm1hcCh0aGlzLl9fcmVuZGVyQ2VsbClcblx0XHRcdFx0fVxuXHRcdFx0PC90cj5cblx0XHQpO1xuXHR9LFxuXHRyZW5kZXI6ZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHRoZWFkIGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci10YWJsZS10aGVhZFwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSwgdGhpcy5zdGF0ZS5jbGFzc05hbWUpfSBzdHlsZT17em51aS5yZWFjdC5zdHlsZSh0aGlzLnByb3BzLnN0eWxlLCB0aGlzLnN0YXRlLnN0eWxlKX0+XG5cdFx0XHRcdHt0aGlzLl9fcmVuZGVyUm93KCl9XG5cdFx0XHQ8L3RoZWFkPlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSVEhlYWRTb3J0Jyxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c29ydDogJ2Rlc2MnLFxuXHRcdH1cblx0fSxcblx0X19yZW5kZXJJY29uOiBmdW5jdGlvbiAoKXtcblx0XHRzd2l0Y2godGhpcy5zdGF0ZS5zb3J0KXtcblx0XHRcdGNhc2UgXCJmYVNvcnRcIjpcblx0XHRcdFx0cmV0dXJuIDxzdmcgb25DbGljaz17KCk9PnRoaXMuX19pY29uQ2xpY2soJ3VwJyl9IGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1wcmVmaXg9XCJmYXNcIiBkYXRhLWljb249XCJzb3J0XCIgY2xhc3NOYW1lPVwiaWNvbiBzdmctaW5saW5lLS1mYSBmYS1zb3J0IGZhLXctMTAgXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyMCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk00MSAyODhoMjM4YzIxLjQgMCAzMi4xIDI1LjkgMTcgNDFMMTc3IDQ0OGMtOS40IDkuNC0yNC42IDkuNC0zMy45IDBMMjQgMzI5Yy0xNS4xLTE1LjEtNC40LTQxIDE3LTQxem0yNTUtMTA1TDE3NyA2NGMtOS40LTkuNC0yNC42LTkuNC0zMy45IDBMMjQgMTgzYy0xNS4xIDE1LjEtNC40IDQxIDE3IDQxaDIzOGMyMS40IDAgMzIuMS0yNS45IDE3LTQxelwiPjwvcGF0aD48L3N2Zz47XG5cdFx0XHRjYXNlIFwiZGVzY1wiOlxuXHRcdFx0XHRyZXR1cm4gPHN2ZyBvbkNsaWNrPXsoKT0+dGhpcy5fX2ljb25DbGljaygnYXNjJyl9IGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1wcmVmaXg9XCJmYXNcIiBkYXRhLWljb249XCJzb3J0LWRvd25cIiBjbGFzc05hbWU9XCJpY29uIHN2Zy1pbmxpbmUtLWZhIGZhLXNvcnQtYWxwaGEtZG93biBmYS13LTE0IFwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA0NDggNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMTc2IDM1MmgtNDhWNDhhMTYgMTYgMCAwIDAtMTYtMTZIODBhMTYgMTYgMCAwIDAtMTYgMTZ2MzA0SDE2Yy0xNC4xOSAwLTIxLjM2IDE3LjI0LTExLjI5IDI3LjMxbDgwIDk2YTE2IDE2IDAgMCAwIDIyLjYyIDBsODAtOTZDMTk3LjM1IDM2OS4yNiAxOTAuMjIgMzUyIDE3NiAzNTJ6bTI0MC02NEgyODhhMTYgMTYgMCAwIDAtMTYgMTZ2MzJhMTYgMTYgMCAwIDAgMTYgMTZoNTZsLTYxLjI2IDcwLjQ1QTMyIDMyIDAgMCAwIDI3MiA0NDYuMzdWNDY0YTE2IDE2IDAgMCAwIDE2IDE2aDEyOGExNiAxNiAwIDAgMCAxNi0xNnYtMzJhMTYgMTYgMCAwIDAtMTYtMTZoLTU2bDYxLjI2LTcwLjQ1QTMyIDMyIDAgMCAwIDQzMiAzMjEuNjNWMzA0YTE2IDE2IDAgMCAwLTE2LTE2em0zMS4wNi04NS4zOGwtNTkuMjctMTYwQTE2IDE2IDAgMCAwIDM3Mi43MiAzMmgtNDEuNDRhMTYgMTYgMCAwIDAtMTUuMDcgMTAuNjJsLTU5LjI3IDE2MEExNiAxNiAwIDAgMCAyNzIgMjI0aDI0LjgzYTE2IDE2IDAgMCAwIDE1LjIzLTExLjA4bDQuNDItMTIuOTJoNzFsNC40MSAxMi45MkExNiAxNiAwIDAgMCA0MDcuMTYgMjI0SDQzMmExNiAxNiAwIDAgMCAxNS4wNi0yMS4zOHpNMzM1LjYxIDE0NEwzNTIgOTZsMTYuMzkgNDh6XCI+PC9wYXRoPjwvc3ZnPjtcblx0XHRcdGNhc2UgXCJhc2NcIjpcblx0XHRcdFx0cmV0dXJuIDxzdmcgb25DbGljaz17KCk9PnRoaXMuX19pY29uQ2xpY2soJ2Rlc2MnKX0gYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhc1wiIGRhdGEtaWNvbj1cInNvcnQtdXBcIiBjbGFzc05hbWU9XCJpY29uIHN2Zy1pbmxpbmUtLWZhIGZhLXNvcnQtYWxwaGEtdXAgZmEtdy0xNCBcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNDQ4IDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTE2IDE2MGg0OHYzMDRhMTYgMTYgMCAwIDAgMTYgMTZoMzJhMTYgMTYgMCAwIDAgMTYtMTZWMTYwaDQ4YzE0LjIxIDAgMjEuMzgtMTcuMjQgMTEuMzEtMjcuMzFsLTgwLTk2YTE2IDE2IDAgMCAwLTIyLjYyIDBsLTgwIDk2Qy01LjM1IDE0Mi43NCAxLjc4IDE2MCAxNiAxNjB6bTQwMCAxMjhIMjg4YTE2IDE2IDAgMCAwLTE2IDE2djMyYTE2IDE2IDAgMCAwIDE2IDE2aDU2bC02MS4yNiA3MC40NUEzMiAzMiAwIDAgMCAyNzIgNDQ2LjM3VjQ2NGExNiAxNiAwIDAgMCAxNiAxNmgxMjhhMTYgMTYgMCAwIDAgMTYtMTZ2LTMyYTE2IDE2IDAgMCAwLTE2LTE2aC01Nmw2MS4yNi03MC40NUEzMiAzMiAwIDAgMCA0MzIgMzIxLjYzVjMwNGExNiAxNiAwIDAgMC0xNi0xNnptMzEuMDYtODUuMzhsLTU5LjI3LTE2MEExNiAxNiAwIDAgMCAzNzIuNzIgMzJoLTQxLjQ0YTE2IDE2IDAgMCAwLTE1LjA3IDEwLjYybC01OS4yNyAxNjBBMTYgMTYgMCAwIDAgMjcyIDIyNGgyNC44M2ExNiAxNiAwIDAgMCAxNS4yMy0xMS4wOGw0LjQyLTEyLjkyaDcxbDQuNDEgMTIuOTJBMTYgMTYgMCAwIDAgNDA3LjE2IDIyNEg0MzJhMTYgMTYgMCAwIDAgMTUuMDYtMjEuMzh6TTMzNS42MSAxNDRMMzUyIDk2bDE2LjM5IDQ4elwiPjwvcGF0aD48L3N2Zz47XG5cdFx0fVx0XG5cdH0sXG5cdF9faWNvbkNsaWNrOiBmdW5jdGlvbiAoc29ydCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRzb3J0OiBzb3J0XG5cdFx0fSk7XG5cdFx0dGhpcy5wcm9wcy5vblNvcnQgJiYgdGhpcy5wcm9wcy5vblNvcnQoc29ydCk7XG5cdH0sXG5cdHJlbmRlcjpmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLXRhYmxlLXRoZWFkLXNvcnQnLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfT5cblx0XHRcdFx0e3RoaXMuX19yZW5kZXJJY29uKCl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSZWFjdERPTSA9IHpudWkuUmVhY3RET00gfHwgcmVxdWlyZSgncmVhY3QtZG9tJyk7XG52YXIgVENlbGwgPSByZXF1aXJlKCcuL1RDZWxsJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJUUm93Jyxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRzdHlsZToge30sXG5cdFx0XHRjbGFzc05hbWU6ICcnXG5cdFx0fVxuXHR9LFxuXHRfX2dldFRhcmdldFREOiBmdW5jdGlvbiAodGFyZ2V0KSB7XG5cdFx0aWYodGFyZ2V0ICYmIHRhcmdldC50YWdOYW1lIT09J1REJyl7XG5cdFx0XHRyZXR1cm4gdGhpcy5fX2dldFRhcmdldFREKHRhcmdldC5wYXJlbnROb2RlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRhcmdldDtcblx0XHR9XG5cdH0sXG5cdF9fb25Sb3dDbGljazogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHR2YXIgX3RoaXMgPSB0aGlzO1xuXHRcdHZhciBfdGQgPSB0aGlzLl9fZ2V0VGFyZ2V0VEQoZXZlbnQudGFyZ2V0KTtcblx0XHRldmVudC5kYXRhID0ge1xuXHRcdFx0ZmluZFRSRE9NOiBmdW5jdGlvbiAoKXtcblx0XHRcdFx0cmV0dXJuIFJlYWN0RE9NLmZpbmRET01Ob2RlKF90aGlzKTtcblx0XHRcdH0sXG5cdFx0XHR0ZDogX3RkLFxuXHRcdFx0dHJvdzogdGhpc1xuXHRcdH07XG5cdFx0dGhpcy5wcm9wcy5vbkNsaWNrICYmIHRoaXMucHJvcHMub25DbGljayhldmVudCk7XG5cdFx0dGhpcy5wcm9wcy5vblJvd0NsaWNrICYmIHRoaXMucHJvcHMub25Sb3dDbGljayhldmVudCk7XG5cdH0sXG5cdF9fY2VsbFJlbmRlcjogZnVuY3Rpb24gKGNvbHVtbiwgaW5kZXgpe1xuXHRcdGlmKCF6bi5pcyhjb2x1bW4sICdvYmplY3QnKSkgeyByZXR1cm4gbnVsbDt9XG5cdFx0dmFyIF9wcm9wcyA9IHpuLmV4dGVuZCh7XG5cdFx0XHRjb2x1bW46IGNvbHVtbixcblx0XHRcdHRyb3c6IHRoaXMsXG5cdFx0XHRyb3dJbmRleDogdGhpcy5wcm9wcy5yb3dJbmRleCxcblx0XHRcdGNlbGxJbmRleDogaW5kZXgsXG5cdFx0XHRjb250ZXh0OiB0aGlzLnByb3BzLmNvbnRleHQsXG5cdFx0XHRkYXRhOiB0aGlzLnByb3BzLmRhdGEsXG5cdFx0XHR0Ym9keTogdGhpcy5wcm9wcy50Ym9keVxuXHRcdH0sIHRoaXMucHJvcHMuY2VsbCwgY29sdW1uKTtcblx0XHR2YXIgX2VsZW1lbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudCh0aGlzLnByb3BzLmNlbGxSZW5kZXIsIF9wcm9wcywgdGhpcy5wcm9wcy5jb250ZXh0KTtcblxuXHRcdGlmKF9lbGVtZW50KXtcblx0XHRcdHJldHVybiBfZWxlbWVudDtcblx0XHR9XG5cblx0XHRyZXR1cm4gPFRDZWxsIGtleT17aW5kZXh9IHsuLi5fcHJvcHN9IGZpeGVkU3R5bGU9e3RoaXMuX19maXhlZFdpZHRoKGluZGV4KX0gb25DZWxsQ2xpY2s9e3RoaXMucHJvcHMub25DZWxsQ2xpY2t9IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3Ryb3ctY2VsbCcsIF9wcm9wcy5jbGFzc05hbWUpfSAvPjtcblx0fSxcblx0X19maXhlZFdpZHRoOiBmdW5jdGlvbiAoaW5kZXgpe1xuXHRcdHZhciBfY29sdW1ucyA9IHRoaXMucHJvcHMuY29sdW1uc3x8W10sIF93aWR0aCA9IDA7XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IGluZGV4OyBpKyspe1xuXHRcdFx0aWYoX2NvbHVtbnNbaV0uZml4ZWQpIHtcblx0XHRcdFx0X3dpZHRoICs9IF9jb2x1bW5zW2ldLndpZHRoIHx8IDA7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdGxlZnQ6IF93aWR0aFxuXHRcdH07XG5cdH0sXG5cdHJlbmRlcjpmdW5jdGlvbigpe1xuXHRcdHRoaXMucHJvcHMudGJvZHkuX19pbml0aWFsRGF0YUl0ZW0odGhpcy5wcm9wcy5kYXRhKTtcblx0XHR0aGlzLnByb3BzLm9uRGF0YVZhbGlkYXRlICYmIHRoaXMucHJvcHMub25EYXRhVmFsaWRhdGUodGhpcy5wcm9wcy5kYXRhLCB0aGlzKTtcblx0XHR2YXIgX2NsYXNzTmFtZSA9IHRoaXMucHJvcHMuY2xhc3NOYW1lLCBfc3R5bGUgPSB0aGlzLnByb3BzLnN0eWxlO1xuXHRcdGlmKHR5cGVvZiBfY2xhc3NOYW1lID09ICdmdW5jdGlvbicpe1xuXHRcdFx0X2NsYXNzTmFtZSA9IF9jbGFzc05hbWUodGhpcy5wcm9wcy5kYXRhLCB0aGlzKTtcblx0XHR9XG5cdFx0aWYodHlwZW9mIF9zdHlsZSA9PSAnZnVuY3Rpb24nKXtcblx0XHRcdF9zdHlsZSA9IF9zdHlsZSh0aGlzLnByb3BzLmRhdGEsIHRoaXMpO1xuXHRcdH1cblx0XHRyZXR1cm4gKFxuXHRcdFx0PHRyIGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLXRhYmxlLXRyb3cnLCBfY2xhc3NOYW1lLCB0aGlzLnN0YXRlLmNsYXNzTmFtZSl9IFxuXHRcdFx0XHRzdHlsZT17em51aS5yZWFjdC5zdHlsZShfc3R5bGUsIHRoaXMuc3RhdGUuc3R5bGUpfVxuXHRcdFx0XHRkYXRhLWFjdGl2ZT17dGhpcy5wcm9wcy5hY3RpdmV9IFxuXHRcdFx0XHRkYXRhLWNoZWNrZWQ9e3RoaXMucHJvcHMuY2hlY2tlZH0gXG5cdFx0XHRcdG9uQ2xpY2s9e3RoaXMuX19vblJvd0NsaWNrfT5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdCh0aGlzLnByb3BzLmNvbHVtbnN8fFtdKS5tYXAodGhpcy5fX2NlbGxSZW5kZXIpXG5cdFx0XHRcdH1cblx0XHRcdDwvdHI+XG5cdFx0KTtcblx0fVxufSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBDb2xncm91cDogcmVxdWlyZSgnLi9Db2xncm91cCcpLFxuICAgIFRGaWx0ZXI6IHJlcXVpcmUoJy4vVEZpbHRlcicpLFxuICAgIFRCb2R5OiByZXF1aXJlKCcuL1RCb2R5JyksXG4gICAgVEJvZHlFbXB0eTogcmVxdWlyZSgnLi9UQm9keUVtcHR5JyksXG4gICAgVENlbGw6IHJlcXVpcmUoJy4vVENlbGwnKSxcbiAgICBURm9vdDogcmVxdWlyZSgnLi9URm9vdCcpLFxuICAgIFRIZWFkOiByZXF1aXJlKCcuL1RIZWFkJyksXG4gICAgVFJvdzogcmVxdWlyZSgnLi9UUm93Jylcbn07IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJSZWFjdFwiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcIlJlYWN0RE9NXCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiZmlsdGVyXCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiaW5wdXRcIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJqc29uXCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wibG9hZGVyXCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wicGFnZXJcIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJwb3B1cFwiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcInNlbGVjdG9yXCJdOyB9KCkpOyJdLCJzb3VyY2VSb290IjoiIn0=