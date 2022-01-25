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
          disabled: _data.__checkedDisabled__,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vUG9wdXBUYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9UYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9UYWJsZUVkaXRvci5qcyIsIndlYnBhY2s6Ly8vLi9UYWJsZVBhZ2VyLmpzIiwid2VicGFjazovLy8uL2NlbGwvQ2hlY2tib3guanMiLCJ3ZWJwYWNrOi8vLy4vY2VsbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi90YWJsZS9Db2xncm91cC5qcyIsIndlYnBhY2s6Ly8vLi90YWJsZS9UQm9keS5qcyIsIndlYnBhY2s6Ly8vLi90YWJsZS9UQm9keUVtcHR5LmpzIiwid2VicGFjazovLy8uL3RhYmxlL1RDZWxsLmpzIiwid2VicGFjazovLy8uL3RhYmxlL1RGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdGFibGUvVEZvb3QuanMiLCJ3ZWJwYWNrOi8vLy4vdGFibGUvVEhlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vdGFibGUvVEhlYWRTb3J0LmpzIiwid2VicGFjazovLy8uL3RhYmxlL1RSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vdGFibGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdERPTVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpbHRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImlucHV0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianNvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvYWRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhZ2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicG9wdXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZWxlY3RvclwiIl0sIm5hbWVzIjpbIlJlYWN0Iiwiem51aSIsInJlcXVpcmUiLCJUYWJsZVBhZ2VyIiwic2VsZWN0b3IiLCJtb2R1bGUiLCJleHBvcnRzIiwiY3JlYXRlQ2xhc3MiLCJkaXNwbGF5TmFtZSIsImdldERlZmF1bHRQcm9wcyIsInRleHRLZXkiLCJ2YWx1ZUtleSIsImdldEluaXRpYWxTdGF0ZSIsInRleHQiLCJwcm9wcyIsInZhbHVlIiwiZ2V0VGV4dCIsInN0YXRlIiwic2V0VGV4dCIsInNldFN0YXRlIiwiZ2V0VmFsdWUiLCJzZXRWYWx1ZSIsIl9fb25Sb3dDbGljayIsImV2ZW50IiwiZHJvcGRvd25FdmVudCIsIl9kYXRhIiwiZGF0YSIsInRyb3ciLCJwb3B1cFNlbGVjdCIsInNldERhdGEiLCJkcm9wZG93biIsImNsb3NlUG9wb3ZlciIsIm9uQ2hhbmdlIiwiX19wb3B1cFJlbmRlciIsImZpbHRlciIsIm9uUm93Q2xpY2siLCJyZW5kZXIiLCJyZWFjdCIsImNsYXNzbmFtZSIsImNsYXNzTmFtZSIsInN0eWxlIiwidGFibGUiLCJkYXRhSW5kZXhFbmFibGVkIiwiZml4ZWRMYXlvdXQiLCJyb3dLZXkiLCJjb2x1bW5zIiwiY2hlY2tlZHMiLCJjb21wb25lbnREaWRNb3VudCIsIm9uQ29tcG9uZW50RGlkTW91bnQiLCJfX3NvcnRGdW5jdGlvbiIsIm5leHQiLCJwcmV2Iiwia2V5IiwiX3NvcnQiLCJzb3J0RnVuY3Rpb24iLCJfX29uU29ydCIsInNvcnRzIiwiX3JldHVybiIsIm9uU29ydENoYW5nZSIsInpuIiwiaXNaTk9iamVjdCIsIl9hcmd2IiwicmVmcmVzaCIsInNvcnQiLCJmb3JjZVVwZGF0ZSIsIl9fb25GaWx0ZXIiLCJmaWx0ZXJzIiwib25GaWx0ZXJDaGFuZ2UiLCJfX29uVEJvZHlFYWNoUm93RGF0YSIsImluZGV4IiwidGJvZHkiLCJfdmFsdWVLZXkiLCJjaGVja2JveCIsIl92YWx1ZSIsImluZGV4T2YiLCJwdXNoIiwib25FYWNoUm93RGF0YSIsIl9fdGJvZHlEYXRhUmVuZGVyIiwibGVuZ3RoIiwiY29udGV4dCIsInJvdyIsImZpeGVkQ29sdW1ucyIsIl9fdGJvZHlMb2FkaW5nUmVuZGVyIiwiX19vblRIZWFkQ29sdW1uQ2hhbmdlIiwiX190Ym9keURhdGFMb2FkZWQiLCJvbkRhdGFMb2FkZWQiLCJpcyIsInJlc3VsdCIsIl9fb25EYXRhQ3JlYXRlZCIsImxpZnljeWNsZSIsIm9uRGF0YUNyZWF0ZWQiLCJjYWxsYmFjayIsInJlZnJlc2hIZWFkZXJzIiwiX19maXhlZFN0eWxlcyIsIl9jb2x1bW5zIiwiX3dpZHRoIiwiaSIsImZpeGVkIiwid2lkdGgiLCJsZWZ0IiwiX19yZW5kZXJUQm9keSIsIl9yZXN1bHQiLCJvbkRhdGFJbml0aWFsIiwibG9hZGluZ0VuYWJsZWQiLCJyZXNwb25zZUhhbmRsZXIiLCJfX29uRml4ZWRMYXlvdXRCb2R5U2Nyb2xsIiwiZSIsIl9sYXlvdXRIZWFkZXIiLCJzY3JvbGxMZWZ0IiwidGFyZ2V0IiwiX19yZW5kZXIiLCJtYXAiLCJpdGVtIiwiZml4ZWRTdHlsZXMiLCJiaW5kIiwicmVmIiwiY2VsbFBhZGRpbmciLCJjZWxsU3BhY2luZyIsImF0dHJzIiwiY2FwdGlvbiIsImNvbGdyb3VwIiwia2V5TWFwcGluZyIsInRoZWFkIiwidGZpbHRlciIsInRmb290IiwiY2hpbGRyZW5SZW5kZXIiLCJjaGlsZHJlbiIsIl9fcm93SGVhZENoZWNrYm94Q2hlY2tlZCIsIl9jaGVja2VkcyIsIl9fY2hlY2tlZERpc2FibGVkX18iLCJfX29uUm93SGVhZENoZWNrYm94Q2hhbmdlIiwic3RvcFByb3BhZ2F0aW9uIiwiY2hlY2tlZCIsInNwbGljZSIsIm9uQ2hlY2tib3hDaGFuZ2UiLCJfX2luaXRDaGVja2JveCIsIl9jaGVja2JveCIsImhlYWQiLCJhcmd2IiwiX3RhYmxlIiwianVzdGlmeUNvbnRlbnQiLCJ1dWlkIiwiYm9keSIsInR5cGUiLCJleHRlbmQiLCJ1bnNoaWZ0IiwiX19pbml0SW5kZXhDb2x1bW4iLCJsYWJlbCIsIm5hbWUiLCJ0ZXh0QWxpZ24iLCJyb3dJbmRleCIsIl9fY29sdW1uc0xvYWRlZCIsIl90ZW1wIiwiX2NvbHVtbkl0ZXJhdG9yIiwiY29sdW1uSXRlcmF0b3IiLCJjb2x1bW4iLCJkZWVwQXNzaWduIiwib25Db2x1bW5zTG9hZGVkIiwiX19vbkNvbHVtbkRhdGFDcmVhdGVkIiwibGlmZWN5Y2xlIiwib25Db2x1bW5zQ3JlYXRlZCIsImdldERhdGEiLCJyZW1vdmVSb3dEYXRhIiwidXBkYXRlUm93RGF0YSIsIl9pbmRleCIsIm9uQ29sdW1uTG9hZGluZyIsIm9uQ29sdW1uTG9hZEVycm9yIiwiVGFibGUiLCJpbnB1dCIsIl9fY2VsbENoYW5nZSIsInRjZWxsIiwiX19jb2x1bW5Cb2R5UmVuZGVyIiwiX19jb2x1bW5JdGVyYXRvciIsIm9uRGF0YUNoYW5nZSIsImFkZFJvdyIsImNvbmNhdCIsInBhZ2VyIiwiY291bnQiLCJjdXJyZW50IiwidG90YWwiLCJwYWdlSW5kZXgiLCJwYWdlU2l6ZSIsInNldCIsIl90eXBlIiwic2V0UGFnZUluZGV4IiwiX19vbkRhdGFJbml0aWFsIiwiX19oYW5kbGVQYWdlQ2hhbmdlZCIsIm5ld1BhZ2UiLCJvblBhZ2VDaGFuZ2VkIiwiX19oYW5kbGVQYWdlU2l6ZUNoYW5nZSIsIl9fcmVuZGVyUGFnZXIiLCJfY29sdW1uU2l6ZSIsIl9zdGF0ZSIsIl9lbGVtZW50IiwiX3BhZ2VyUHJvcHMiLCJvblBhZ2VTaXplQ2hhbmdlIiwiX0NvbXBvbmVudCIsIlBhZ2VyIiwicGF0aCIsIndpbmRvdyIsImNvbXBvbmVudCIsImNyZWF0ZVJlYWN0RWxlbWVudCIsInBhZ2VyUmVuZGVyIiwiX21ldGhvZCIsIm1ldGhvZCIsIl9wYXJhbXMiLCJfa2V5TWFwcyIsImtleU1hcHMiLCJwYXJhbXMiLCJfX29uRGF0YUxvYWRlZCIsInp4bnoiLCJjb2RlIiwiY29uc29sZSIsImVycm9yIiwiZGV0YWlsIiwiX3BhZ2VyQ291bnQiLCJNYXRoIiwiY2VpbCIsIl9fb25GaWx0ZXJDaGFuZ2UiLCJDaGVja2JveCIsIl9fb25DaGVja2JveENoYW5nZSIsIl9fb25IZWFkQ2hhbmdlIiwiX19vbkJvZHlDaGFuZ2UiLCJsb2ciLCJjZWxsIiwiUG9wdXBUYWJsZSIsIlRhYmxlRWRpdG9yIiwiX2tleU1hcHBpbmciLCJUUm93IiwibG9hZGVyIiwiX3BhZ2VTaXplIiwiX2NvbHVtbktleU1hcCIsIl9kZWZhdWx0IiwidW5kZWZpbmVkIiwiYWN0aXZlIiwiY29sdW1uS2V5TWFwIiwicGFnZUNvdW50IiwibG9hZGluZyIsIl9faW5pdGlhbERhdGFJdGVtIiwiZm9ybWF0IiwiZGF0YVR5cGUiLCJldmFsIiwiZXJyIiwic3RyaW5naWZ5UHJpY2UiLCJfX2dldERhdGEiLCJfcGFnZUluZGV4Iiwic2xpY2UiLCJtaW4iLCJfX3JlbmRlckxvYWRpbmciLCJsb2FkaW5nUmVuZGVyIiwiX2xvYWRpbmciLCJfX3JlbmRlckVtcHR5IiwiZW1wdHlSZW5kZXIiLCJfZW1wdHkiLCJlbXB0eSIsIl9fb25DZWxsQ2xpY2siLCJvbkNlbGxDbGljayIsIl9fcmVuZGVyUm93IiwiZWFjaFJvd0RhdGEiLCJyb3dSZW5kZXIiLCJfcm93S2V5IiwiX2tleSIsImNlbGxSZW5kZXIiLCJfX3BhZ2VDaGFuZ2UiLCJfX3BhZ2VzUmVuZGVyIiwiX3BhZ2VDb3VudCIsIl9wYWdlcyIsIl9fcmVuZGVyRGF0YSIsIlJlYWN0RE9NIiwiZGlzYWJsZWQiLCJfX3JlbmRlckNlbGxDb250ZW50IiwiX3JlbmRlciIsImNlbGxJbmRleCIsIl9fY2VsbENsaWNrIiwiX3RoaXMiLCJmaW5kVERET00iLCJmaW5kRE9NTm9kZSIsIm9uQ2xpY2siLCJfY29sdW1uIiwiYm9keUNsYXNzTmFtZSIsImJvZHlTdHlsZSIsImZpbHRlckZpZWxkIiwib3B0IiwiZW1wdHlWYWx1ZUVuYWJsZWQiLCJvbkZpbHRlciIsIl9fb25GaWx0ZXJDYW5jZWwiLCJfX3JlbmRlckNlbGwiLCJfY29udGVudCIsIl9maWx0ZXIiLCJwcm90b3R5cGUiLCJjYWxsIiwiX2NlbGwiLCJfcm93IiwiX19yZW5kZXJDaGlsZHJlbiIsImZvb3QiLCJUSGVhZFNvcnQiLCJwb3B1cCIsInpyanNvbiIsIl9fb25Db2x1bW5Tb3J0Iiwib25Tb3J0IiwiX19vbkNvbHVtbkVkaXRvckNoYW5nZSIsImNoaWxkIiwicm9vdCIsIl9yb290Iiwib25Db2x1bW5DaGFuZ2UiLCJfX2ljb25DbGlja1JlbmRlciIsInBhZGRpbmciLCJtYXhIZWlnaHQiLCJvdmVyZmxvdyIsIl9fc29ydFJlbmRlciIsIl9tYXBwaW5nIiwiX2xhYmVsS2V5IiwiX2xhYmVsIiwicmVxdWlyZWQiLCJlZGl0YWJsZSIsImNsb3NlYWJsZSIsIl9fcmVuZGVySWNvbiIsIl9faWNvbkNsaWNrIiwiVENlbGwiLCJfX2dldFRhcmdldFREIiwidGFnTmFtZSIsInBhcmVudE5vZGUiLCJfdGQiLCJmaW5kVFJET00iLCJ0ZCIsIl9fY2VsbFJlbmRlciIsIl9wcm9wcyIsIl9fZml4ZWRXaWR0aCIsIm9uRGF0YVZhbGlkYXRlIiwiX2NsYXNzTmFtZSIsIl9zdHlsZSIsIkNvbGdyb3VwIiwiVEZpbHRlciIsIlRCb2R5IiwiVEJvZHlFbXB0eSIsIlRGb290IiwiVEhlYWQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNE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OUc7QUFKZixPQU1FLENBQUMsS0FBS1IsS0FBTCxDQUFXK0IsT0FBWCxJQUFvQixFQUFyQixFQUF5QmtFLEdBQXpCLENBQTZCLEtBQUtzTixZQUFsQyxDQU5GLENBREQ7QUFXQTtBQWhGaUMsQ0FBbEIsQ0FBakIsQzs7Ozs7Ozs7Ozs7QUNKQWhVLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNicVUsVUFBUSxFQUFFelUsbUJBQU8sQ0FBQyx1Q0FBRCxDQURKO0FBRWIwVSxTQUFPLEVBQUUxVSxtQkFBTyxDQUFDLHFDQUFELENBRkg7QUFHYjJVLE9BQUssRUFBRTNVLG1CQUFPLENBQUMsaUNBQUQsQ0FIRDtBQUliNFUsWUFBVSxFQUFFNVUsbUJBQU8sQ0FBQywyQ0FBRCxDQUpOO0FBS2I0VCxPQUFLLEVBQUU1VCxtQkFBTyxDQUFDLGlDQUFELENBTEQ7QUFNYjZVLE9BQUssRUFBRTdVLG1CQUFPLENBQUMsaUNBQUQsQ0FORDtBQU9iOFUsT0FBSyxFQUFFOVUsbUJBQU8sQ0FBQyxpQ0FBRCxDQVBEO0FBUWJrTyxNQUFJLEVBQUVsTyxtQkFBTyxDQUFDLCtCQUFEO0FBUkEsQ0FBakIsQzs7Ozs7Ozs7Ozs7QUNBQSxhQUFhLGdDQUFnQyxFQUFFLEk7Ozs7Ozs7Ozs7O0FDQS9DLGFBQWEsbUNBQW1DLEVBQUUsSTs7Ozs7Ozs7Ozs7QUNBbEQsYUFBYSxpQ0FBaUMsRUFBRSxJOzs7Ozs7Ozs7OztBQ0FoRCxhQUFhLGdDQUFnQyxFQUFFLEk7Ozs7Ozs7Ozs7O0FDQS9DLGFBQWEsK0JBQStCLEVBQUUsSTs7Ozs7Ozs7Ozs7QUNBOUMsYUFBYSxpQ0FBaUMsRUFBRSxJOzs7Ozs7Ozs7OztBQ0FoRCxhQUFhLGdDQUFnQyxFQUFFLEk7Ozs7Ozs7Ozs7O0FDQS9DLGFBQWEsZ0NBQWdDLEVBQUUsSTs7Ozs7Ozs7Ozs7QUNBL0MsYUFBYSxtQ0FBbUMsRUFBRSxJIiwiZmlsZSI6Ii4vZGlzdC9kZXZlbG9wbWVudC9pbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFRhYmxlUGFnZXIgPSByZXF1aXJlKCcuL1RhYmxlUGFnZXInKTtcbnZhciBzZWxlY3RvciA9IHJlcXVpcmUoJ3pudWktcmVhY3Qtc2VsZWN0b3InKTtcbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTogJ1pSUG9wdXBUYWJsZScsXG5cdGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHRleHRLZXk6ICd6eG56X0xhYmVsJyxcblx0XHRcdHZhbHVlS2V5OiAnenhuel9VVUlEJ1xuXHRcdH07XG5cdH0sXG4gICAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiB7XG5cdFx0XHR0ZXh0OiB0aGlzLnByb3BzLnRleHQsXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5wcm9wcy52YWx1ZVxuXHRcdH07XG5cdH0sXG4gICAgZ2V0VGV4dDogZnVuY3Rpb24gKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnRleHQ7XG4gICAgfSxcbiAgICBzZXRUZXh0OiBmdW5jdGlvbiAodGV4dCl7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdGV4dDogdGV4dFxuICAgICAgICB9KTtcbiAgICB9LFxuXHRnZXRWYWx1ZTogZnVuY3Rpb24gKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnZhbHVlO1xuICAgIH0sXG4gICAgc2V0VmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSl7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgX19vblJvd0NsaWNrOiBmdW5jdGlvbiAoZXZlbnQsIGRyb3Bkb3duRXZlbnQpe1xuICAgICAgICB2YXIgX2RhdGEgPSBldmVudC5kYXRhLnRyb3cucHJvcHMuZGF0YTtcbiAgICAgICAgZXZlbnQuZGF0YSA9IF9kYXRhO1xuICAgICAgICBldmVudC52YWx1ZSA9IF9kYXRhW3RoaXMucHJvcHMudmFsdWVLZXldO1xuXHRcdGV2ZW50LnRleHQgPSBfZGF0YVt0aGlzLnByb3BzLnRleHRLZXldO1xuICAgICAgICBkcm9wZG93bkV2ZW50LnBvcHVwU2VsZWN0LnNldERhdGEoZXZlbnQudmFsdWUsIGV2ZW50LnRleHQpO1xuICAgICAgICBkcm9wZG93bkV2ZW50LmRyb3Bkb3duLmNsb3NlUG9wb3ZlcigpO1xuICAgICAgICB0aGlzLnNldFZhbHVlKGV2ZW50LnZhbHVlKTtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSAmJiB0aGlzLnByb3BzLm9uQ2hhbmdlKGV2ZW50LCBkcm9wZG93bkV2ZW50KTtcbiAgICB9LFxuXHRfX3BvcHVwUmVuZGVyOiBmdW5jdGlvbiAoZHJvcGRvd25FdmVudCl7XG5cdFx0cmV0dXJuIDxUYWJsZVBhZ2VyXG4gICAgICAgICAgICB6eG56PXt0cnVlfVxuICAgICAgICAgICAgY29sZ3JvdXA9e3t9fVxuICAgICAgICAgICAgY2VsbFBhZGRpbmc9ezV9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ6ci10YWJsZS1jbGFzcy1ub3JtYWxcIlxuICAgICAgICAgICAgZml4ZWQ9e3RydWV9XG4gICAgICAgICAgICB0aGVhZD17e1xuICAgICAgICAgICAgICAgIGZpbHRlcjogdHJ1ZVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHRmaWx0ZXI9e3t9fVxuICAgICAgICAgICAgdGJvZHk9e3tcbiAgICAgICAgICAgICAgICBvblJvd0NsaWNrOiAoZXZlbnQpPT50aGlzLl9fb25Sb3dDbGljayhldmVudCwgZHJvcGRvd25FdmVudClcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBwYWdlSW5kZXg9ezF9XG4gICAgICAgICAgICBwYWdlU2l6ZT17NX0gey4uLnRoaXMucHJvcHN9IC8+O1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxzZWxlY3Rvci5Qb3B1cFNlbGVjdCBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd6ci10YWJsZS1wb3B1cC10YWJsZScsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9IHBvcHVwUmVuZGVyPXt0aGlzLl9fcG9wdXBSZW5kZXJ9IC8+XG5cdFx0KTtcblx0fVxufSk7IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIHRhYmxlID0gcmVxdWlyZSgnLi90YWJsZS9pbmRleCcpO1xudmFyIHNlbGVjdG9yID0gcmVxdWlyZSgnem51aS1yZWFjdC1zZWxlY3RvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSVGFibGUnLFxuXHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRkYXRhSW5kZXhFbmFibGVkOiBmYWxzZSxcblx0XHRcdGZpeGVkTGF5b3V0OiBmYWxzZSxcblx0XHRcdHZhbHVlS2V5OiAnenhuel9VVUlEJyxcblx0XHRcdHJvd0tleTogJ3p4bnpfVVVJRCdcblx0XHR9O1xuXHR9LFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRkYXRhOiBbXSwgXG5cdFx0XHRjb2x1bW5zOiBbXSxcblx0XHRcdGNoZWNrZWRzOiB0aGlzLnByb3BzLmNoZWNrZWRzIHx8IFtdXG5cdFx0fTtcblx0fSxcblx0Y29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCl7XG5cdFx0dGhpcy5wcm9wcy5vbkNvbXBvbmVudERpZE1vdW50ICYmIHRoaXMucHJvcHMub25Db21wb25lbnREaWRNb3VudCh0aGlzKTtcblx0fSxcblx0X19zb3J0RnVuY3Rpb246IGZ1bmN0aW9uIChuZXh0LCBwcmV2LCBrZXksIF9zb3J0KXtcblx0XHRpZih0aGlzLnByb3BzLnNvcnRGdW5jdGlvbikge1xuXHRcdFx0cmV0dXJuIHRoaXMucHJvcHMuc29ydEZ1bmN0aW9uKG5leHQsIHByZXYsIGtleSwgX3NvcnQpO1xuXHRcdH1cblx0XHRpZihfc29ydD09J2Rlc2MnKXtcblx0XHRcdGlmKG5leHRba2V5XSA+IHByZXZba2V5XSl7XG5cdFx0XHRcdHJldHVybiAxO1xuXHRcdFx0fWVsc2UgaWYobmV4dFtrZXldID09IHByZXZba2V5XSl7XG5cdFx0XHRcdHJldHVybiAwO1xuXHRcdFx0fWVsc2UgaWYobmV4dFtrZXldIDwgcHJldltrZXldKXtcblx0XHRcdFx0cmV0dXJuIC0xO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihfc29ydD09J2FzYycpe1xuXHRcdFx0aWYobmV4dFtrZXldIDwgcHJldltrZXldKXtcblx0XHRcdFx0cmV0dXJuIDE7XG5cdFx0XHR9ZWxzZSBpZihuZXh0W2tleV0gPT0gcHJldltrZXldKXtcblx0XHRcdFx0cmV0dXJuIDA7XG5cdFx0XHR9ZWxzZSBpZihuZXh0W2tleV0gPiBwcmV2W2tleV0pe1xuXHRcdFx0XHRyZXR1cm4gLTE7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHRfX29uU29ydDogZnVuY3Rpb24gKHNvcnRzKXtcblx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMub25Tb3J0Q2hhbmdlICYmIHRoaXMucHJvcHMub25Tb3J0Q2hhbmdlKHNvcnRzLCB0aGlzLnN0YXRlLmRhdGEsIHRoaXMpO1xuXHRcdGlmKF9yZXR1cm4gIT09IGZhbHNlKXtcblx0XHRcdGlmKHRoaXMuZGF0YSAmJiB6bi5pc1pOT2JqZWN0KHRoaXMuZGF0YSkpIHtcblx0XHRcdFx0aWYoIXRoaXMuZGF0YS5fYXJndi5kYXRhKSB7XG5cdFx0XHRcdFx0dGhpcy5kYXRhLl9hcmd2LmRhdGEgPSB7fTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmRhdGEuX2FyZ3YuZGF0YS5zb3J0cyA9IHNvcnRzO1xuXHRcdFx0XHR0aGlzLmRhdGEucmVmcmVzaCgpO1xuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdHZhciBfc29ydCA9IG51bGw7XG5cdFx0XHRcdGZvcih2YXIga2V5IGluIHNvcnRzKXtcblx0XHRcdFx0XHRfc29ydCA9IHNvcnRzW2tleV1cblx0XHRcdFx0XHR0aGlzLnN0YXRlLmRhdGEgPSB0aGlzLnN0YXRlLmRhdGEuc29ydCgobmV4dCwgcHJldikgPT4gdGhpcy5fX3NvcnRGdW5jdGlvbihuZXh0LCBwcmV2LCBrZXksIF9zb3J0KSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLmZvcmNlVXBkYXRlKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHRfX29uRmlsdGVyOiBmdW5jdGlvbiAoZmlsdGVycyl7XG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLm9uRmlsdGVyQ2hhbmdlICYmIHRoaXMucHJvcHMub25GaWx0ZXJDaGFuZ2UoZmlsdGVycywgdGhpcy5zdGF0ZS5kYXRhLCB0aGlzKTtcblx0XHRpZihfcmV0dXJuICE9PSBmYWxzZSl7XG5cdFx0XHRpZih0aGlzLmRhdGEgJiYgem4uaXNaTk9iamVjdCh0aGlzLmRhdGEpKSB7XG5cdFx0XHRcdGlmKCF0aGlzLmRhdGEuX2FyZ3YuZGF0YSkge1xuXHRcdFx0XHRcdHRoaXMuZGF0YS5fYXJndi5kYXRhID0ge307XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5kYXRhLl9hcmd2LmRhdGEuZmlsdGVycyA9IGZpbHRlcnM7XG5cdFx0XHRcdHRoaXMuZGF0YS5yZWZyZXNoKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHRfX29uVEJvZHlFYWNoUm93RGF0YTogZnVuY3Rpb24gKGRhdGEsIGluZGV4LCB0Ym9keSl7XG5cdFx0dmFyIF92YWx1ZUtleSA9IHRoaXMucHJvcHMudmFsdWVLZXkgfHwgJ3p4bnpfVVVJRCc7XG5cdFx0aWYodGhpcy5wcm9wcy5jaGVja2JveCAmJiB0aGlzLnByb3BzLnZhbHVlICYmIF92YWx1ZUtleSkge1xuXHRcdFx0dmFyIF92YWx1ZSA9IGRhdGFbX3ZhbHVlS2V5XTtcblx0XHRcdGlmKHRoaXMucHJvcHMudmFsdWUuaW5kZXhPZihfdmFsdWUpIT0tMSl7XG5cdFx0XHRcdHRoaXMuc3RhdGUuY2hlY2tlZHMucHVzaChfdmFsdWUpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHR0aGlzLnByb3BzLm9uRWFjaFJvd0RhdGEgJiYgdGhpcy5wcm9wcy5vbkVhY2hSb3dEYXRhKGRhdGEsIGluZGV4LCB0Ym9keSwgdGhpcyk7XG5cdH0sXG5cdF9fdGJvZHlEYXRhUmVuZGVyOiBmdW5jdGlvbiAoY29sdW1ucyl7XG5cdFx0aWYoIXRoaXMuc3RhdGUuZGF0YS5sZW5ndGgpe1xuXHRcdFx0cmV0dXJuIDx0YWJsZS5UQm9keUVtcHR5IGNvbnRleHQ9e3RoaXMucHJvcHMuY29udGV4dH0gey4uLnRoaXMucHJvcHMudGJvZHl9IGNvbHVtbnM9e2NvbHVtbnN9IGRhdGE9e3RoaXMuc3RhdGUuZGF0YX0gdGFibGU9e3RoaXN9IC8+O1xuXHRcdH1cblx0XHRyZXR1cm4gPHRhYmxlLlRCb2R5IHJvd0tleT17dGhpcy5wcm9wcy5yb3dLZXl9IHJvdz17dGhpcy5wcm9wcy5yb3d9IGNvbnRleHQ9e3RoaXMucHJvcHMuY29udGV4dH0gZWFjaFJvd0RhdGE9e3RoaXMuX19vblRCb2R5RWFjaFJvd0RhdGF9IHsuLi50aGlzLnByb3BzLnRib2R5fSBjb2x1bW5zPXtjb2x1bW5zfSBmaXhlZENvbHVtbnM9e3RoaXMucHJvcHMuZml4ZWRDb2x1bW5zfSBkYXRhPXt0aGlzLnN0YXRlLmRhdGF9IHRhYmxlPXt0aGlzfSAvPjtcblx0fSxcblx0X190Ym9keUxvYWRpbmdSZW5kZXI6IGZ1bmN0aW9uIChjb2x1bW5zKXtcblx0XHRyZXR1cm4gPHRhYmxlLlRCb2R5IHJvd0tleT17dGhpcy5wcm9wcy5yb3dLZXl9IHJvdz17dGhpcy5wcm9wcy5yb3d9IGNvbnRleHQ9e3RoaXMucHJvcHMuY29udGV4dH0gey4uLnRoaXMucHJvcHMudGJvZHl9IGNvbHVtbnM9e2NvbHVtbnN9IGZpeGVkQ29sdW1ucz17dGhpcy5wcm9wcy5maXhlZENvbHVtbnN9IGxvYWRpbmc9e3RydWV9IHRhYmxlPXt0aGlzfSAvPjtcblx0fSxcblx0X19vblRIZWFkQ29sdW1uQ2hhbmdlOiBmdW5jdGlvbiAoZGF0YSwgaW5kZXgpe1xuXHRcdGlmKHRoaXMuc3RhdGUuY29sdW1ucyl7XG5cdFx0XHR0aGlzLnN0YXRlLmNvbHVtbnNbaW5kZXhdID0gZGF0YTtcblx0XHRcdHRoaXMuZm9yY2VVcGRhdGUoKTtcblx0XHR9XG5cdH0sXG5cdF9fdGJvZHlEYXRhTG9hZGVkOiBmdW5jdGlvbiAoZGF0YSkge1xuXHRcdHZhciBfcmV0dXJuID0gdGhpcy5wcm9wcy5vbkRhdGFMb2FkZWQgJiYgdGhpcy5wcm9wcy5vbkRhdGFMb2FkZWQoZGF0YSwgdGhpcyk7XG5cdFx0aWYoX3JldHVybiAhPT0gZmFsc2Upe1xuXHRcdFx0aWYoem4uaXMoZGF0YSwgJ29iamVjdCcpICYmIGRhdGEucmVzdWx0KXtcblx0XHRcdFx0ZGF0YSA9IGRhdGEucmVzdWx0O1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGRhdGE6IGRhdGEgfSk7XG5cdFx0fVxuXHR9LFxuXHRfX29uRGF0YUNyZWF0ZWQ6IGZ1bmN0aW9uIChkYXRhLCBsaWZ5Y3ljbGUpe1xuXHRcdHRoaXMuZGF0YSA9IGRhdGE7XG5cdFx0dGhpcy5wcm9wcy5vbkRhdGFDcmVhdGVkICYmIHRoaXMucHJvcHMub25EYXRhQ3JlYXRlZChkYXRhLCB0aGlzLCBsaWZ5Y3ljbGUpO1xuXHR9LFxuXHRyZWZyZXNoOiBmdW5jdGlvbiAoY2FsbGJhY2spe1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0Y2hlY2tlZHM6IFtdXG5cdFx0fSk7XG5cdFx0aWYodGhpcy5kYXRhKXtcblx0XHRcdHRoaXMuZGF0YS5yZWZyZXNoKCk7XG5cdFx0fVxuXHRcdGNhbGxiYWNrICYmIGNhbGxiYWNrKCk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblx0cmVmcmVzaEhlYWRlcnM6IGZ1bmN0aW9uICgpe1xuXHRcdGlmKHRoaXMuY29sdW1ucyl7XG5cdFx0XHR0aGlzLmNvbHVtbnMucmVmcmVzaCgpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXHRzZXREYXRhOiBmdW5jdGlvbiAoZGF0YSl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IGRhdGE6IGRhdGEgfSk7XG5cdH0sXG5cdF9fZml4ZWRTdHlsZXM6IGZ1bmN0aW9uIChpbmRleCl7XG5cdFx0dmFyIF9jb2x1bW5zID0gdGhpcy5zdGF0ZS5jb2x1bW5zfHxbXSwgX3dpZHRoID0gMDtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgaW5kZXg7IGkrKyl7XG5cdFx0XHRpZihfY29sdW1uc1tpXS5maXhlZCkge1xuXHRcdFx0XHRfd2lkdGggKz0gKF9jb2x1bW5zW2ldLndpZHRoIHx8IDApIC0gMTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0bGVmdDogX3dpZHRoIC0gMVxuXHRcdH07XG5cdH0sXG5cdF9fcmVuZGVyVEJvZHk6IGZ1bmN0aW9uIChjb2x1bW5zKXtcblx0XHR2YXIgX2RhdGEgPSB0aGlzLnByb3BzLmRhdGEgfHwgdGhpcy5wcm9wcy50Ym9keS5kYXRhO1xuXHRcdHZhciBfcmVzdWx0ID0gdGhpcy5wcm9wcy5vbkRhdGFJbml0aWFsICYmIHRoaXMucHJvcHMub25EYXRhSW5pdGlhbChfZGF0YSwgdGhpcyk7XG5cdFx0aWYoX3Jlc3VsdCl7XG5cdFx0XHRfZGF0YSA9IF9yZXN1bHQ7XG5cdFx0fVxuXHRcdHJldHVybiA8em51aS5yZWFjdC5EYXRhTGlmZWN5Y2xlIGRhdGE9e19kYXRhfSBcblx0XHRcdFx0XHRkYXRhUmVuZGVyPXsoKT0+dGhpcy5fX3Rib2R5RGF0YVJlbmRlcihjb2x1bW5zKX0gXG5cdFx0XHRcdFx0bG9hZGluZ0VuYWJsZWQ9e3RoaXMucHJvcHMubG9hZGluZ0VuYWJsZWR8fGZhbHNlfVxuXHRcdFx0XHRcdGxvYWRpbmdSZW5kZXI9eygpPT50aGlzLl9fdGJvZHlMb2FkaW5nUmVuZGVyKGNvbHVtbnMpfVxuXHRcdFx0XHRcdHJlc3BvbnNlSGFuZGxlcj17dGhpcy5wcm9wcy5yZXNwb25zZUhhbmRsZXJ9XG5cdFx0XHRcdFx0b25EYXRhQ3JlYXRlZD17dGhpcy5fX29uRGF0YUNyZWF0ZWR9XG5cdFx0XHRcdFx0b25GaW5pc2hlZD17dGhpcy5fX3Rib2R5RGF0YUxvYWRlZH0gLz47XG5cdH0sXG5cdF9fb25GaXhlZExheW91dEJvZHlTY3JvbGw6IGZ1bmN0aW9uIChlKXtcblx0XHR0aGlzLl9sYXlvdXRIZWFkZXIuc2Nyb2xsTGVmdCA9IGUudGFyZ2V0LnNjcm9sbExlZnQ7XG5cdH0sXG5cdF9fcmVuZGVyOiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgY29sdW1ucyA9IHRoaXMuc3RhdGUuY29sdW1ucztcblx0XHRjb2x1bW5zID0gY29sdW1ucy5tYXAoZnVuY3Rpb24gKGl0ZW0sIGluZGV4KXtcblx0XHRcdGlmKGl0ZW0uZml4ZWQpIHtcblx0XHRcdFx0aXRlbS5maXhlZFN0eWxlcyA9IHRoaXMuX19maXhlZFN0eWxlcyhpbmRleCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gaXRlbTtcblx0XHR9LmJpbmQodGhpcykpO1xuXHRcdGlmKHRoaXMucHJvcHMuZml4ZWRMYXlvdXQpIHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwienItdGFibGUtZml4ZWQtbGF5b3V0XCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmaXhlZC1sYXlvdXQtaGVhZGVyXCIgcmVmPXsocmVmKT0+dGhpcy5fbGF5b3V0SGVhZGVyID0gcmVmfT5cblx0XHRcdFx0XHRcdDx0YWJsZSBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItdGFibGVcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBcblx0XHRcdFx0XHRcdFx0c3R5bGU9e3pudWkucmVhY3Quc3R5bGUodGhpcy5wcm9wcy5zdHlsZSwgeyB3aWR0aDogdGhpcy5wcm9wcy53aWR0aCB9KX0gXG5cdFx0XHRcdFx0XHRcdGRhdGEtZml4ZWQ9e3RoaXMucHJvcHMuZml4ZWR9IFx0XG5cdFx0XHRcdFx0XHRcdGNlbGxQYWRkaW5nPXt0aGlzLnByb3BzLmNlbGxQYWRkaW5nIHx8IDB9IFxuXHRcdFx0XHRcdFx0XHRjZWxsU3BhY2luZz17dGhpcy5wcm9wcy5jZWxsU3BhY2luZyB8fCAwfSB7Li4udGhpcy5wcm9wcy5hdHRyc30+XG5cdFx0XHRcdFx0XHRcdHsgISF0aGlzLnByb3BzLmNhcHRpb24gJiYgPGNhcHRpb24gY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNhcHRpb24uY2xhc3NOYW1lfSBzdHlsZT17dGhpcy5wcm9wcy5jYXB0aW9uLnN0eWxlfT57dGhpcy5wcm9wcy5jYXB0aW9uLnJlbmRlcn08L2NhcHRpb24+IH1cblx0XHRcdFx0XHRcdFx0eyAhIXRoaXMucHJvcHMuY29sZ3JvdXAgJiYgPHRhYmxlLkNvbGdyb3VwIGNvbnRleHQ9e3RoaXMucHJvcHMuY29udGV4dH0ga2V5TWFwcGluZz17dGhpcy5wcm9wcy5rZXlNYXBwaW5nfSBjb2x1bW5zPXtjb2x1bW5zfSB7Li4udGhpcy5wcm9wcy5jb2xncm91cH0gLz4gfVxuXHRcdFx0XHRcdFx0XHR7ICEhdGhpcy5wcm9wcy50aGVhZCAmJiA8dGFibGUuVEhlYWQgY29udGV4dD17dGhpcy5wcm9wcy5jb250ZXh0fSBvblNvcnQ9e3RoaXMuX19vblNvcnR9IG9uQ29sdW1uQ2hhbmdlPXt0aGlzLl9fb25USGVhZENvbHVtbkNoYW5nZX0gY29sdW1ucz17Y29sdW1uc30ga2V5TWFwcGluZz17dGhpcy5wcm9wcy5rZXlNYXBwaW5nfSB7Li4udGhpcy5wcm9wcy50aGVhZH0gdGFibGU9e3RoaXN9IC8+fVxuXHRcdFx0XHRcdFx0XHR7ICEhdGhpcy5wcm9wcy50ZmlsdGVyICYmIDx0YWJsZS5URmlsdGVyIGNvbnRleHQ9e3RoaXMucHJvcHMuY29udGV4dH0gb25GaWx0ZXI9e3RoaXMuX19vbkZpbHRlcn0gY29sdW1ucz17Y29sdW1uc30gey4uLnRoaXMucHJvcHMudGZpbHRlcn0gdGFibGU9e3RoaXN9IC8+fVxuXHRcdFx0XHRcdFx0PC90YWJsZT5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZpeGVkLWxheW91dC1ib2R5XCIgb25TY3JvbGw9e3RoaXMuX19vbkZpeGVkTGF5b3V0Qm9keVNjcm9sbH0+XG5cdFx0XHRcdFx0XHQ8dGFibGUgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXRhYmxlXCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gXG5cdFx0XHRcdFx0XHRcdHN0eWxlPXt6bnVpLnJlYWN0LnN0eWxlKHRoaXMucHJvcHMuc3R5bGUsIHsgd2lkdGg6IHRoaXMucHJvcHMud2lkdGggfSl9IFxuXHRcdFx0XHRcdFx0XHRkYXRhLWZpeGVkPXt0aGlzLnByb3BzLmZpeGVkfSBcdFxuXHRcdFx0XHRcdFx0XHRjZWxsUGFkZGluZz17dGhpcy5wcm9wcy5jZWxsUGFkZGluZyB8fCAwfSBcblx0XHRcdFx0XHRcdFx0Y2VsbFNwYWNpbmc9e3RoaXMucHJvcHMuY2VsbFNwYWNpbmcgfHwgMH0gey4uLnRoaXMucHJvcHMuYXR0cnN9PlxuXHRcdFx0XHRcdFx0XHR7ICEhdGhpcy5wcm9wcy5jYXB0aW9uICYmIDxjYXB0aW9uIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jYXB0aW9uLmNsYXNzTmFtZX0gc3R5bGU9e3RoaXMucHJvcHMuY2FwdGlvbi5zdHlsZX0+e3RoaXMucHJvcHMuY2FwdGlvbi5yZW5kZXJ9PC9jYXB0aW9uPiB9XG5cdFx0XHRcdFx0XHRcdHsgISF0aGlzLnByb3BzLmNvbGdyb3VwICYmIDx0YWJsZS5Db2xncm91cCBjb250ZXh0PXt0aGlzLnByb3BzLmNvbnRleHR9IGtleU1hcHBpbmc9e3RoaXMucHJvcHMua2V5TWFwcGluZ30gY29sdW1ucz17Y29sdW1uc30gey4uLnRoaXMucHJvcHMuY29sZ3JvdXB9IC8+IH1cblx0XHRcdFx0XHRcdFx0eyAodGhpcy5wcm9wcy50Ym9keSB8fCB0aGlzLnByb3BzLmRhdGEpICYmIHRoaXMuX19yZW5kZXJUQm9keShjb2x1bW5zKSB9XG5cdFx0XHRcdFx0XHQ8L3RhYmxlPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQtbGF5b3V0LWZvb3RlclwiPlxuXHRcdFx0XHRcdFx0eyAhIXRoaXMucHJvcHMudGZvb3QgJiYgPHRhYmxlPjx0YWJsZS5URm9vdCBjb250ZXh0PXt0aGlzLnByb3BzLmNvbnRleHR9IGNvbHVtbnM9e2NvbHVtbnN9IHsuLi50aGlzLnByb3BzLnRmb290fSB0YWJsZT17dGhpc30gLz48L3RhYmxlPn1cblx0XHRcdFx0XHRcdHsgdGhpcy5wcm9wcy5jaGlsZHJlblJlbmRlciAmJiB0aGlzLnByb3BzLmNoaWxkcmVuUmVuZGVyKGNvbHVtbnMsIHRoaXMpIH1cblx0XHRcdFx0XHRcdHsgdGhpcy5wcm9wcy5jaGlsZHJlbiB9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PHRhYmxlIGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci10YWJsZVwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IFxuXHRcdFx0XHRzdHlsZT17em51aS5yZWFjdC5zdHlsZSh0aGlzLnByb3BzLnN0eWxlLCB7IHdpZHRoOiB0aGlzLnByb3BzLndpZHRoIH0pfSBcblx0XHRcdFx0ZGF0YS1maXhlZD17dGhpcy5wcm9wcy5maXhlZH0gXHRcblx0XHRcdFx0Y2VsbFBhZGRpbmc9e3RoaXMucHJvcHMuY2VsbFBhZGRpbmcgfHwgMH0gXG5cdFx0XHRcdGNlbGxTcGFjaW5nPXt0aGlzLnByb3BzLmNlbGxTcGFjaW5nIHx8IDB9IHsuLi50aGlzLnByb3BzLmF0dHJzfT5cblx0XHRcdFx0eyAhIXRoaXMucHJvcHMuY2FwdGlvbiAmJiA8Y2FwdGlvbiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2FwdGlvbi5jbGFzc05hbWV9IHN0eWxlPXt0aGlzLnByb3BzLmNhcHRpb24uc3R5bGV9Pnt0aGlzLnByb3BzLmNhcHRpb24ucmVuZGVyfTwvY2FwdGlvbj4gfVxuXHRcdFx0XHR7ICEhdGhpcy5wcm9wcy5jb2xncm91cCAmJiA8dGFibGUuQ29sZ3JvdXAgY29udGV4dD17dGhpcy5wcm9wcy5jb250ZXh0fSBrZXlNYXBwaW5nPXt0aGlzLnByb3BzLmtleU1hcHBpbmd9IGNvbHVtbnM9e2NvbHVtbnN9IHsuLi50aGlzLnByb3BzLmNvbGdyb3VwfSAvPiB9XG5cdFx0XHRcdHsgISF0aGlzLnByb3BzLnRoZWFkICYmIDx0YWJsZS5USGVhZCBjb250ZXh0PXt0aGlzLnByb3BzLmNvbnRleHR9IG9uU29ydD17dGhpcy5fX29uU29ydH0gb25Db2x1bW5DaGFuZ2U9e3RoaXMuX19vblRIZWFkQ29sdW1uQ2hhbmdlfSBjb2x1bW5zPXtjb2x1bW5zfSBrZXlNYXBwaW5nPXt0aGlzLnByb3BzLmtleU1hcHBpbmd9IHsuLi50aGlzLnByb3BzLnRoZWFkfSB0YWJsZT17dGhpc30gLz59XG5cdFx0XHRcdHsgISF0aGlzLnByb3BzLnRmaWx0ZXIgJiYgPHRhYmxlLlRGaWx0ZXIgY29udGV4dD17dGhpcy5wcm9wcy5jb250ZXh0fSBvbkZpbHRlcj17dGhpcy5fX29uRmlsdGVyfSBjb2x1bW5zPXtjb2x1bW5zfSB7Li4udGhpcy5wcm9wcy50ZmlsdGVyfSB0YWJsZT17dGhpc30gLz59XG5cdFx0XHRcdHsgKHRoaXMucHJvcHMudGJvZHkgfHwgdGhpcy5wcm9wcy5kYXRhKSAmJiB0aGlzLl9fcmVuZGVyVEJvZHkoY29sdW1ucykgfVxuXHRcdFx0XHR7ICEhdGhpcy5wcm9wcy50Zm9vdCAmJiA8dGFibGUuVEZvb3QgY29udGV4dD17dGhpcy5wcm9wcy5jb250ZXh0fSBjb2x1bW5zPXtjb2x1bW5zfSB7Li4udGhpcy5wcm9wcy50Zm9vdH0gdGFibGU9e3RoaXN9IC8+fVxuXHRcdFx0XHR7IHRoaXMucHJvcHMuY2hpbGRyZW5SZW5kZXIgJiYgdGhpcy5wcm9wcy5jaGlsZHJlblJlbmRlcihjb2x1bW5zLCB0aGlzKSB9XG5cdFx0XHRcdHsgdGhpcy5wcm9wcy5jaGlsZHJlbiB9XG5cdFx0XHQ8L3RhYmxlPlxuXHRcdCk7XG5cdH0sXG5cdF9fcm93SGVhZENoZWNrYm94Q2hlY2tlZDogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF9jaGVja2VkcyA9IHRoaXMuc3RhdGUuY2hlY2tlZHMsIF92YWx1ZUtleSA9IHRoaXMucHJvcHMudmFsdWVLZXkgfHwgJ3p4bnpfVVVJRCc7XG5cdFx0aWYoIV9jaGVja2Vkcy5sZW5ndGgpIHJldHVybiBmYWxzZTtcblx0XHRmb3IodmFyIGl0ZW0gb2YgdGhpcy5zdGF0ZS5kYXRhKSB7XG5cdFx0XHRpZighaXRlbS5fX2NoZWNrZWREaXNhYmxlZF9fICYmIF9jaGVja2Vkcy5pbmRleE9mKGl0ZW1bX3ZhbHVlS2V5XSkgPT0gLTEpe1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0sXG5cdF9fb25Sb3dIZWFkQ2hlY2tib3hDaGFuZ2U6IGZ1bmN0aW9uIChldmVudCl7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0dmFyIF92YWx1ZUtleSA9IHRoaXMucHJvcHMudmFsdWVLZXkgfHwgJ3p4bnpfVVVJRCc7XG5cdFx0aWYoZXZlbnQuY2hlY2tlZCkge1xuXHRcdFx0Zm9yKHZhciBpdGVtIG9mIHRoaXMuc3RhdGUuZGF0YSkge1xuXHRcdFx0XHRpZighaXRlbS5fX2NoZWNrZWREaXNhYmxlZF9fICYmIHRoaXMuc3RhdGUuY2hlY2tlZHMuaW5kZXhPZihpdGVtW192YWx1ZUtleV0pID09IC0xKXtcblx0XHRcdFx0XHR0aGlzLnN0YXRlLmNoZWNrZWRzLnB1c2goaXRlbVtfdmFsdWVLZXldKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1lbHNle1xuXHRcdFx0Zm9yKHZhciBpdGVtIG9mIHRoaXMuc3RhdGUuZGF0YSkge1xuXHRcdFx0XHRpZighaXRlbS5fX2NoZWNrZWREaXNhYmxlZF9fICYmIHRoaXMuc3RhdGUuY2hlY2tlZHMuaW5kZXhPZihpdGVtW192YWx1ZUtleV0pICE9IC0xKXtcblx0XHRcdFx0XHR0aGlzLnN0YXRlLmNoZWNrZWRzLnNwbGljZSh0aGlzLnN0YXRlLmNoZWNrZWRzLmluZGV4T2YoaXRlbVtfdmFsdWVLZXldKSwgMSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0dGhpcy5mb3JjZVVwZGF0ZSgpO1xuXHRcdHRoaXMucHJvcHMub25DaGVja2JveENoYW5nZSAmJiB0aGlzLnByb3BzLm9uQ2hlY2tib3hDaGFuZ2UodGhpcy5zdGF0ZS5jaGVja2VkcywgdGhpcyk7XG5cdH0sXG5cdF9faW5pdENoZWNrYm94OiBmdW5jdGlvbiAoY29sdW1ucyl7XG5cdFx0dmFyIF92YWx1ZUtleSA9IHRoaXMucHJvcHMudmFsdWVLZXkgfHwgJ3p4bnpfVVVJRCc7XG5cdFx0dmFyIF9jaGVja2JveCA9IHtcblx0XHRcdFx0d2lkdGg6IDgwLFxuXHRcdFx0XHRmaXhlZDogdHJ1ZSxcblx0XHRcdFx0aGVhZDogZnVuY3Rpb24gKGFyZ3Ype1xuXHRcdFx0XHRcdHZhciBfdGFibGUgPSBhcmd2LnRoZWFkLnByb3BzLnRhYmxlO1xuXHRcdFx0XHRcdGlmKCFfdGFibGUpIHJldHVybjtcblx0XHRcdFx0XHRyZXR1cm4gPHNlbGVjdG9yLkNoZWNrYm94XG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19XG5cdFx0XHRcdFx0XHRcdFx0a2V5PXt6bi51dWlkKCl9XG5cdFx0XHRcdFx0XHRcdFx0dGV4dD17JygnICsgX3RhYmxlLnN0YXRlLmNoZWNrZWRzLmxlbmd0aCArJyknfVxuXHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQ9e3RoaXMuX19yb3dIZWFkQ2hlY2tib3hDaGVja2VkKCl9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuX19vblJvd0hlYWRDaGVja2JveENoYW5nZX0gLz47XG5cdFx0XHRcdH0uYmluZCh0aGlzKSxcblx0XHRcdFx0Ym9keTogZnVuY3Rpb24gKGFyZ3Ype1xuXHRcdFx0XHRcdHZhciBfZGF0YSA9IGFyZ3YuZGF0YTtcblx0XHRcdFx0XHRyZXR1cm4gPHNlbGVjdG9yLlVuY29udHJvbENoZWNrYm94IFxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fVxuXHRcdFx0XHRcdFx0XHRcdGRpc2FibGVkPXtfZGF0YS5fX2NoZWNrZWREaXNhYmxlZF9ffVxuXHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQ9e3RoaXMuc3RhdGUuY2hlY2tlZHMuaW5kZXhPZihfZGF0YVtfdmFsdWVLZXldKSAhPT0gLTF9XG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KGV2ZW50LCBjaGVja2JveCk9Pntcblx0XHRcdFx0XHRcdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYoY2hlY2tib3gucHJvcHMuY2hlY2tlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnN0YXRlLmNoZWNrZWRzLnNwbGljZSh0aGlzLnN0YXRlLmNoZWNrZWRzLmluZGV4T2YoX2RhdGFbX3ZhbHVlS2V5XSksIDEpOyBcblx0XHRcdFx0XHRcdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnN0YXRlLmNoZWNrZWRzLnB1c2goX2RhdGFbX3ZhbHVlS2V5XSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmZvcmNlVXBkYXRlKCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLm9uQ2hlY2tib3hDaGFuZ2UgJiYgdGhpcy5wcm9wcy5vbkNoZWNrYm94Q2hhbmdlKHRoaXMuc3RhdGUuY2hlY2tlZHMsIHRoaXMpO1xuXHRcdFx0XHRcdFx0XHRcdH19IC8+O1xuXHRcdFx0XHR9LmJpbmQodGhpcylcblx0XHRcdH0sXG5cdFx0XHRfdmFsdWUgPSB0aGlzLnByb3BzLmNoZWNrYm94O1xuXHRcdHN3aXRjaCh6bi50eXBlKF92YWx1ZSkpIHtcblx0XHRcdGNhc2UgJ29iamVjdCc6XG5cdFx0XHRcdF9jaGVja2JveCA9IHpuLmV4dGVuZCh7fSwgX3ZhbHVlKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdudW1iZXInOlxuXHRcdFx0XHRfY2hlY2tib3gud2lkdGggPSBfdmFsdWU7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHRpZihfdmFsdWUpIHtcblx0XHRcdGNvbHVtbnMgPSBjb2x1bW5zLnVuc2hpZnQoX2NoZWNrYm94KTtcblx0XHR9XG5cdH0sXG5cdF9faW5pdEluZGV4Q29sdW1uOiBmdW5jdGlvbiAoY29sdW1ucyl7XG5cdFx0aWYodGhpcy5wcm9wcy5kYXRhSW5kZXhFbmFibGVkKSB7XG5cdFx0XHRjb2x1bW5zID0gY29sdW1ucy51bnNoaWZ0KHtcblx0XHRcdFx0d2lkdGg6IDQ4LFxuXHRcdFx0XHRsYWJlbDogJ+e0ouW8lScsIFxuXHRcdFx0XHRmaXhlZDogdHJ1ZSxcblx0XHRcdFx0bmFtZTogJ19faW5kZXhfXycsXG5cdFx0XHRcdGJvZHk6IGZ1bmN0aW9uIChhcmd2KXtcblx0XHRcdFx0XHRyZXR1cm4gKDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT57KCthcmd2LnJvd0luZGV4KSArIDF9PC9kaXY+KTtcblx0XHRcdFx0fS5iaW5kKHRoaXMpXG5cdFx0XHR9KTtcblx0XHR9XG5cdH0sXG5cdF9fY29sdW1uc0xvYWRlZDogZnVuY3Rpb24gKGNvbHVtbnMpe1xuXHRcdGlmKGNvbHVtbnMgJiYgem4uaXMoY29sdW1ucywgJ2FycmF5Jykpe1xuXHRcdFx0dmFyIF90ZW1wID0gbnVsbCxcblx0XHRcdFx0X3Jlc3VsdCA9IG51bGwsXG5cdFx0XHRcdF9jb2x1bW5JdGVyYXRvciA9IHRoaXMucHJvcHMuY29sdW1uSXRlcmF0b3IsXG5cdFx0XHRcdF9jb2x1bW5zID0gY29sdW1ucy5tYXAoZnVuY3Rpb24gKGNvbHVtbil7XG5cdFx0XHRcdFx0X3RlbXAgPSB6bi5kZWVwQXNzaWduKHt9LCBjb2x1bW4pO1xuXHRcdFx0XHRcdF9yZXN1bHQgPSBfY29sdW1uSXRlcmF0b3IgJiYgX2NvbHVtbkl0ZXJhdG9yKF90ZW1wLCB0aGlzKTtcblx0XHRcdFx0XHRpZihfcmVzdWx0ID09PSBmYWxzZSkgcmV0dXJuIG51bGw7XG5cdFx0XHRcdFx0aWYodHlwZW9mIF9yZXN1bHQgPT0gJ29iamVjdCcpIHJldHVybiBfcmVzdWx0O1xuXG5cdFx0XHRcdFx0cmV0dXJuIF90ZW1wO1xuXHRcdFx0XHR9LmJpbmQodGhpcykpO1xuXHRcdFx0dGhpcy5fX2luaXRDaGVja2JveChfY29sdW1ucyk7XG5cdFx0XHR0aGlzLl9faW5pdEluZGV4Q29sdW1uKF9jb2x1bW5zKTtcblx0XHRcdHRoaXMucHJvcHMub25Db2x1bW5zTG9hZGVkICYmIHRoaXMucHJvcHMub25Db2x1bW5zTG9hZGVkKGNvbHVtbnMpO1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGNvbHVtbnM6IF9jb2x1bW5zIH0pO1xuXHRcdH1cblx0fSxcblx0X19vbkNvbHVtbkRhdGFDcmVhdGVkOiBmdW5jdGlvbiAoZGF0YSwgbGlmZWN5Y2xlKXtcblx0XHR0aGlzLmNvbHVtbnMgPSBkYXRhO1xuXHRcdHRoaXMucHJvcHMub25Db2x1bW5zQ3JlYXRlZCAmJiB0aGlzLnByb3BzLm9uQ29sdW1uc0NyZWF0ZWQoZGF0YSwgdGhpcywgbGlmZWN5Y2xlKTtcblx0fSxcblx0Z2V0RGF0YTogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHRoaXMuc3RhdGUuZGF0YTtcblx0fSxcblx0cmVtb3ZlUm93RGF0YTogZnVuY3Rpb24gKGRhdGEpe1xuXHRcdGlmKGRhdGEpIHtcblx0XHRcdHRoaXMuc3RhdGUuZGF0YS5zcGxpY2UodGhpcy5zdGF0ZS5kYXRhLmluZGV4T2YoZGF0YSksIDEpO1xuXHRcdFx0dGhpcy5mb3JjZVVwZGF0ZSgpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXHR1cGRhdGVSb3dEYXRhOiBmdW5jdGlvbiAoZGF0YSl7XG5cdFx0aWYoZGF0YSkge1xuXHRcdFx0dmFyIF9pbmRleCA9IHRoaXMuc3RhdGUuZGF0YS5pbmRleE9mKGRhdGEpO1xuXHRcdFx0dGhpcy5zdGF0ZS5kYXRhW19pbmRleF0gPSBkYXRhO1xuXHRcdFx0dGhpcy5mb3JjZVVwZGF0ZSgpO1xuXHRcdH1cblx0XHRcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiA8em51aS5yZWFjdC5EYXRhTGlmZWN5Y2xlXG5cdFx0XHRcdFx0ZGF0YT17dGhpcy5wcm9wcy5jb2x1bW5zfVxuXHRcdFx0XHRcdHJlbmRlcj17dGhpcy5fX3JlbmRlcn1cblx0XHRcdFx0XHRyZXNwb25zZUhhbmRsZXI9e3RoaXMucHJvcHMucmVzcG9uc2VIYW5kbGVyfVxuXHRcdFx0XHRcdG9uTG9hZGluZz17dGhpcy5wcm9wcy5vbkNvbHVtbkxvYWRpbmd9XG5cdFx0XHRcdFx0b25GaW5pc2hlZD17dGhpcy5fX2NvbHVtbnNMb2FkZWR9XG5cdFx0XHRcdFx0b25FcnJvcj17dGhpcy5wcm9wcy5vbkNvbHVtbkxvYWRFcnJvcn1cblx0XHRcdFx0XHRvbkRhdGFDcmVhdGVkPXt0aGlzLl9fb25Db2x1bW5EYXRhQ3JlYXRlZH0gLz47XG5cdH1cbn0pOyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBUYWJsZSA9IHJlcXVpcmUoJy4vVGFibGUnKTtcbnZhciBpbnB1dCA9IHJlcXVpcmUoJ3pudWktcmVhY3QtaW5wdXQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUlRhYmxlRWRpdG9yJyxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dGFibGU6IG51bGwsXG5cdFx0XHRjb2x1bW5zOiBbXVxuXHRcdH07XG5cdH0sXG5cdF9fY2VsbENoYW5nZTogZnVuY3Rpb24gKGV2ZW50LCBhcmd2KXtcblx0XHRhcmd2LmRhdGFbYXJndi50Y2VsbC5wcm9wcy5uYW1lXSA9IGV2ZW50LnZhbHVlO1xuXHRcdGFyZ3YudHJvdy5mb3JjZVVwZGF0ZSgpO1xuXHR9LFxuXHRfX2NvbHVtbkJvZHlSZW5kZXI6IGZ1bmN0aW9uIChhcmd2KXtcblx0XHRyZXR1cm4gPGlucHV0LklucHV0IFxuXHRcdFx0a2V5PXthcmd2LnZhbHVlfSBcblx0XHRcdHZhbHVlPXthcmd2LnZhbHVlfSBcblx0XHRcdG9uQmx1cj17KGV2ZW50KT0+dGhpcy5fX2NlbGxDaGFuZ2UoZXZlbnQsIGFyZ3YpfVxuXHRcdFx0b25FbnRlcj17KGV2ZW50KT0+dGhpcy5fX2NlbGxDaGFuZ2UoZXZlbnQsIGFyZ3YpfSAvPjtcblx0fSxcblx0X19jb2x1bW5JdGVyYXRvcjogZnVuY3Rpb24gKGNvbHVtbiwgdGFibGUpe1xuXHRcdGlmKCFjb2x1bW4uYm9keSkge1xuXHRcdFx0Y29sdW1uLmJvZHkgPSB0aGlzLl9fY29sdW1uQm9keVJlbmRlcjtcblx0XHR9XG5cblx0XHRyZXR1cm4gY29sdW1uO1xuXHR9LFxuXHRzZXREYXRhOiBmdW5jdGlvbiAoZGF0YSl7XG5cdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLm9uRGF0YUNoYW5nZSAmJiB0aGlzLnByb3BzLm9uRGF0YUNoYW5nZShkYXRhLCB0aGlzLnN0YXRlLnRhYmxlLCB0aGlzKTtcblx0XHRpZihfcmV0dXJuID09PSBmYWxzZSl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGlmKHR5cGVvZiBfcmV0dXJuID09ICdvYmplY3QnKSB7XG5cdFx0XHRkYXRhID0gX3JldHVybjtcblx0XHR9XG5cdFx0dGhpcy5zdGF0ZS50YWJsZS5zdGF0ZS5kYXRhID0gZGF0YTtcblx0XHR0aGlzLnN0YXRlLnRhYmxlLmZvcmNlVXBkYXRlKCk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblx0Z2V0RGF0YTogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHRoaXMuc3RhdGUudGFibGUuZ2V0RGF0YSgpO1xuXHR9LFxuXHRhZGRSb3c6IGZ1bmN0aW9uIChkYXRhKXtcblx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMub25EYXRhQ2hhbmdlICYmIHRoaXMucHJvcHMub25EYXRhQ2hhbmdlKFtkYXRhXSwgdGhpcy5zdGF0ZS50YWJsZSwgdGhpcyk7XG5cdFx0aWYoX3JldHVybiA9PT0gZmFsc2Upe1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRpZih6bi5pcyhfcmV0dXJuLCAnYXJyYXknKSkge1xuXHRcdFx0ZGF0YSA9IF9yZXR1cm47XG5cdFx0fWVsc2UgaWYoem4uaXMoX3JldHVybiwgJ29iamVjdCcpKXtcblx0XHRcdGRhdGEgPSBbIGRhdGEgXTtcblx0XHR9XG5cblx0XHR0aGlzLnN0YXRlLnRhYmxlLnN0YXRlLmRhdGEgPSB0aGlzLnN0YXRlLnRhYmxlLnN0YXRlLmRhdGEuY29uY2F0KGRhdGEpO1xuXHRcdHRoaXMuc3RhdGUudGFibGUuZm9yY2VVcGRhdGUoKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxUYWJsZSB7Li4udGhpcy5wcm9wc30gcmVmPXsocmVmKSA9PiB0aGlzLnN0YXRlLnRhYmxlID0gcmVmfSBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd6ci10YWJsZS1lZGl0b3InLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9IGNvbHVtbkl0ZXJhdG9yPXt0aGlzLl9fY29sdW1uSXRlcmF0b3J9IC8+XG5cdFx0KVxuXHR9XG59KTsiLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgVGFibGUgPSByZXF1aXJlKCcuL1RhYmxlJyk7XG52YXIgcGFnZXIgPSByZXF1aXJlKCd6bnVpLXJlYWN0LXBhZ2VyJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJUYWJsZVBhZ2VyJyxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y291bnQ6IDAsXG5cdFx0XHRjdXJyZW50OiAxLFxuXHRcdFx0ZGF0YTogW10sXG5cdFx0XHR0b3RhbDogMCxcblx0XHRcdHBhZ2VJbmRleDogdGhpcy5wcm9wcy5wYWdlSW5kZXggfHwgMSxcblx0XHRcdHBhZ2VTaXplOiB0aGlzLnByb3BzLnBhZ2VTaXplIHx8IDEwLFxuXHRcdH07XG5cdH0sXG5cdGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpe1xuXHRcdHRoaXMucHJvcHMub25Db21wb25lbnREaWRNb3VudCAmJiB0aGlzLnByb3BzLm9uQ29tcG9uZW50RGlkTW91bnQodGhpcyk7XG5cdH0sXG5cdHNldDogZnVuY3Rpb24gKCl7XG5cdFx0dGhpcy5fdGFibGUuZGF0YS5fYXJndi5kYXRhLnR5cGUgPSBfdHlwZTtcblx0XHRcdHRoaXMuX3RhYmxlLnNldFBhZ2VJbmRleCgxKTtcblx0fSxcblx0c2V0UGFnZUluZGV4OiBmdW5jdGlvbiAocGFnZUluZGV4LCBhcmd2LCBjYWxsYmFjayl7XG5cdFx0aWYodGhpcy5kYXRhKXtcblx0XHRcdGlmKHBhZ2VJbmRleCA9PSAxKXtcblx0XHRcdFx0dGhpcy5fdGFibGUuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdGNoZWNrZWRzOiBbXVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdHRoaXMuc3RhdGUucGFnZUluZGV4ID0gcGFnZUluZGV4O1xuXHRcdFx0dGhpcy5zdGF0ZS5jdXJyZW50ID0gcGFnZUluZGV4O1xuXHRcdFx0dGhpcy5mb3JjZVVwZGF0ZSgpO1xuXHRcdFx0dGhpcy5kYXRhLl9hcmd2ID0gdGhpcy5fX29uRGF0YUluaXRpYWwodGhpcy5wcm9wcy5kYXRhKTtcblx0XHRcdGlmKGFyZ3YgJiYgdHlwZW9mIGFyZ3YgPT0gJ29iamVjdCcpe1xuXHRcdFx0XHRpZighdGhpcy5kYXRhLl9hcmd2LmRhdGEpe1xuXHRcdFx0XHRcdHRoaXMuZGF0YS5fYXJndi5kYXRhID0ge307XG5cdFx0XHRcdH1cblx0XHRcdFx0Zm9yKHZhciBrZXkgaW4gYXJndil7XG5cdFx0XHRcdFx0dGhpcy5kYXRhLl9hcmd2LmRhdGFba2V5XSA9IGFyZ3Zba2V5XTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGhpcy5kYXRhLnJlZnJlc2goY2FsbGJhY2spO1xuXHRcdH1cblx0fSxcblx0cmVmcmVzaDogZnVuY3Rpb24gKGNhbGxiYWNrKXtcblx0XHRpZih0aGlzLl90YWJsZSl7XG5cdFx0XHR0aGlzLl90YWJsZS5yZWZyZXNoKGNhbGxiYWNrKTtcblx0XHR9XG5cdH0sXG5cdF9faGFuZGxlUGFnZUNoYW5nZWQ6IGZ1bmN0aW9uIChuZXdQYWdlKXtcblx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMub25QYWdlQ2hhbmdlZCAmJiB0aGlzLnByb3BzLm9uUGFnZUNoYW5nZWQobmV3UGFnZSwgdGhpcyk7XG5cdFx0aWYoX3JldHVybiAhPT0gZmFsc2UpIHtcblx0XHRcdHRoaXMuc2V0UGFnZUluZGV4KG5ld1BhZ2UpO1xuXHRcdH1cblx0fSxcblx0X19oYW5kbGVQYWdlU2l6ZUNoYW5nZTogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHBhZ2VTaXplOiBldmVudC50YXJnZXQudmFsdWVcblx0XHR9LCAoKT0+dGhpcy5zZXRQYWdlSW5kZXgoMSkpO1xuXHR9LFxuXHRfX3JlbmRlclBhZ2VyOiBmdW5jdGlvbiAoY29sdW1ucywgdGFibGUpe1xuXHRcdHZhciBfY29sdW1uU2l6ZSA9IGNvbHVtbnMubGVuZ3RoO1xuXHRcdGlmKCFfY29sdW1uU2l6ZSl7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0dmFyIF9zdGF0ZSA9IHRoaXMuc3RhdGUsXG5cdFx0XHRfZWxlbWVudCA9IG51bGwsXG5cdFx0XHRfcGFnZXJQcm9wcyA9IHtcblx0XHRcdFx0dG90YWw6IF9zdGF0ZS50b3RhbCxcblx0XHRcdFx0Y291bnQ6IF9zdGF0ZS5jb3VudCxcblx0XHRcdFx0Y3VycmVudDogX3N0YXRlLmN1cnJlbnQsXG5cdFx0XHRcdHBhZ2VTaXplOiBfc3RhdGUucGFnZVNpemUsXG5cdFx0XHRcdG9uUGFnZUNoYW5nZWQ6IHRoaXMuX19oYW5kbGVQYWdlQ2hhbmdlZCxcblx0XHRcdFx0b25QYWdlU2l6ZUNoYW5nZTogdGhpcy5fX2hhbmRsZVBhZ2VTaXplQ2hhbmdlXG5cdFx0XHR9LFxuXHRcdFx0X0NvbXBvbmVudCA9IHRoaXMucHJvcHMucGFnZXIgfHwgcGFnZXIuUGFnZXI7XG5cdFx0aWYoem4uaXMoX0NvbXBvbmVudCwgJ3N0cmluZycpKXtcblx0XHRcdF9Db21wb25lbnQgPSB6bi5wYXRoKHdpbmRvdywgX0NvbXBvbmVudCk7XG5cdFx0fWVsc2UgaWYoem4uaXMoX0NvbXBvbmVudCwgJ29iamVjdCcpICYmIF9Db21wb25lbnQuY29tcG9uZW50KXtcblx0XHRcdF9lbGVtZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQoX0NvbXBvbmVudC5jb21wb25lbnQsIHpuLmV4dGVuZCh7fSwgX0NvbXBvbmVudCwgX3BhZ2VyUHJvcHMpKTtcblx0XHR9XG5cblx0XHRpZih0aGlzLnByb3BzLnBhZ2VyUmVuZGVyKXtcblx0XHRcdF9lbGVtZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQodGhpcy5wcm9wcy5wYWdlclJlbmRlciwgX3BhZ2VyUHJvcHMpO1xuXHRcdH1cblxuXHRcdGlmKCFfZWxlbWVudCAmJiBfQ29tcG9uZW50ICYmIHpuLmlzKF9Db21wb25lbnQsICdmdW5jdGlvbicpKXtcblx0XHQgXHRfZWxlbWVudCA9IDxfQ29tcG9uZW50IHsuLi5fcGFnZXJQcm9wc30gLz47XG5cdFx0fVxuXG5cdFx0aWYodGhpcy5wcm9wcy5maXhlZExheW91dCkge1xuXHRcdFx0cmV0dXJuICg8ZGl2PntfZWxlbWVudH08L2Rpdj4pO1xuXHRcdH1cblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8dGZvb3QgY2xhc3NOYW1lPVwidGFibGUtcGFnZXJcIj5cblx0XHRcdFx0PHRyIGNsYXNzTmFtZT1cInBhZ2VyLXJvd1wiPlxuXHRcdFx0XHRcdDx0ZCBjb2xTcGFuPXtfY29sdW1uU2l6ZX0+e19lbGVtZW50fTwvdGQ+XG5cdFx0XHRcdDwvdHI+XG5cdFx0XHQ8L3Rmb290PlxuXHRcdCk7XG5cdH0sXG5cdF9fb25EYXRhSW5pdGlhbDogZnVuY3Rpb24gKGRhdGEpe1xuXHRcdHZhciBfbWV0aG9kID0gZGF0YS5tZXRob2R8fCdwb3N0Jyxcblx0XHRcdF9wYXJhbXMgPSB7fSxcblx0XHRcdF9rZXlNYXBzID0gem4uZGVlcEFzc2lnbih7XG5cdFx0XHRcdHRvdGFsOiBcInRvdGFsXCIsXG5cdFx0XHRcdHBhZ2VJbmRleDogJ3BhZ2VJbmRleCcsXG5cdFx0XHRcdHBhZ2VTaXplOiAncGFnZVNpemUnLFxuXHRcdFx0XHRkYXRhOiAnZGF0YSdcblx0XHRcdH0sIHRoaXMucHJvcHMua2V5TWFwcyk7XG5cblx0XHRfcGFyYW1zW19rZXlNYXBzLnBhZ2VJbmRleF0gPSB0aGlzLnN0YXRlLnBhZ2VJbmRleCB8fCAxO1xuXHRcdF9wYXJhbXNbX2tleU1hcHMucGFnZVNpemVdID0gdGhpcy5zdGF0ZS5wYWdlU2l6ZSB8fCAxMDtcblx0XHRpZihfbWV0aG9kID09ICdnZXQnKXtcblx0XHRcdGRhdGEgPSB6bi5kZWVwQXNzaWduKGRhdGEsIHtcblx0XHRcdFx0cGFyYW1zOiBfcGFyYW1zXG5cdFx0XHR9KTtcblx0XHR9ZWxzZXtcblx0XHRcdGRhdGEgPSB6bi5kZWVwQXNzaWduKGRhdGEsIHtcblx0XHRcdFx0ZGF0YTogX3BhcmFtc1xuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdFxuXHRcdHJldHVybiB0aGlzLnN0YXRlLmtleU1hcHMgPSBfa2V5TWFwcywgZGF0YTtcblx0fSxcblx0X19vbkRhdGFDcmVhdGVkOiBmdW5jdGlvbiAoZGF0YSwgdGFibGUpe1xuXHRcdHRoaXMuZGF0YSA9IGRhdGE7XG5cdFx0dGhpcy5wcm9wcy5vbkRhdGFDcmVhdGVkICYmIHRoaXMucHJvcHMub25EYXRhQ3JlYXRlZChkYXRhLCB0YWJsZSwgdGhpcyk7XG5cdH0sXG5cdF9fb25EYXRhTG9hZGVkOiBmdW5jdGlvbiAoZGF0YSwgdGFibGUpe1xuXHRcdGlmKHRoaXMucHJvcHMuenhueil7XG5cdFx0XHRpZih6bi5pcyhkYXRhLCAnb2JqZWN0JykgJiYgZGF0YS5jb2RlICE9IDIwMCl7XG5cdFx0XHRcdHJldHVybiBjb25zb2xlLmVycm9yKGRhdGEuZGV0YWlsKSwgZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRpZih6bi5pcyhkYXRhLCAnb2JqZWN0JykgJiYgZGF0YS5jb2RlID09IDIwMCl7XG5cdFx0XHRcdGRhdGEgPSBkYXRhLnJlc3VsdDtcblx0XHRcdH1cblx0XHRcdGlmKCF6bi5pcyhkYXRhLCAnYXJyYXknKSl7XG5cdFx0XHRcdHJldHVybiBjb25zb2xlLmVycm9yKFwiVGFibGVQYWdlciBDb21wb25lbnQgRGF0YSBUeXBlIEVycm9yLlwiKSwgZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHR2YXIgX2RhdGEgPSBkYXRhWzBdLFxuXHRcdFx0XHRfcGFnZXJDb3VudCA9IGRhdGFbMV1bMF0uY291bnQ7XG5cdFx0XHR2YXIgX3JldHVybiA9IHRoaXMucHJvcHMub25EYXRhTG9hZGVkICYmIHRoaXMucHJvcHMub25EYXRhTG9hZGVkKF9kYXRhLCB0YWJsZSwgdGhpcyk7XG5cdFx0XHRpZihfcmV0dXJuICE9PSBmYWxzZSl7XG5cdFx0XHRcdHRhYmxlLnNldFN0YXRlKHtcblx0XHRcdFx0XHRkYXRhOiBfZGF0YVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0dG90YWw6IE1hdGguY2VpbChfcGFnZXJDb3VudC90aGlzLnN0YXRlLnBhZ2VTaXplKSxcblx0XHRcdFx0XHRjb3VudDogX3BhZ2VyQ291bnQsXG5cdFx0XHRcdFx0Y3VycmVudDogdGhpcy5zdGF0ZS5jdXJyZW50LFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9ZWxzZXtcblx0XHRcdGlmKHpuLmlzKGRhdGEsICdhcnJheScpKXtcblx0XHRcdFx0cmV0dXJuIGNvbnNvbGUuZXJyb3IoJ1RoZSBkYXRhIGlzIGFycmF5LCBidXQgaXQgbmVlZCByZXR1cm4gb2JqZWN0JyksIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0dmFyIF9kYXRhID0gZGF0YS5kYXRhO1xuXHRcdFx0dmFyIF9yZXR1cm4gPSB0aGlzLnByb3BzLm9uRGF0YUxvYWRlZCAmJiB0aGlzLnByb3BzLm9uRGF0YUxvYWRlZChfZGF0YSwgdGFibGUsIHRoaXMpO1xuXHRcdFx0aWYoX3JldHVybiAhPT0gZmFsc2Upe1xuXHRcdFx0XHR0YWJsZS5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0ZGF0YTogX2RhdGFbdGhpcy5zdGF0ZS5rZXlNYXBzLmRhdGFdXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHR0b3RhbDogTWF0aC5jZWlsKF9kYXRhW3RoaXMuc3RhdGUua2V5TWFwcy50b3RhbF0vdGhpcy5zdGF0ZS5wYWdlU2l6ZSksXG5cdFx0XHRcdFx0Y291bnQ6IF9kYXRhW3RoaXMuc3RhdGUua2V5TWFwcy50b3RhbF0sXG5cdFx0XHRcdFx0Y3VycmVudDogX2RhdGFbdGhpcy5zdGF0ZS5rZXlNYXBzLnBhZ2VJbmRleF1cblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9LFxuXHRfX29uRmlsdGVyQ2hhbmdlOiBmdW5jdGlvbiAoZmlsdGVycywgZGF0YSwgdGFibGUpe1xuXHRcdHZhciBfcmV0dXJuID0gdGhpcy5wcm9wcy5vbkZpbHRlckNoYW5nZSAmJiB0aGlzLnByb3BzLm9uRmlsdGVyQ2hhbmdlKGZpbHRlcnMsIGRhdGEsIHRhYmxlKTtcblx0XHRpZihfcmV0dXJuICE9PSBmYWxzZSl7XG5cdFx0XHRpZighdGhpcy5kYXRhLl9hcmd2LmRhdGEpIHtcblx0XHRcdFx0dGhpcy5kYXRhLl9hcmd2LmRhdGEgPSB7fTtcblx0XHRcdH1cblx0XHRcdHRoaXMuZGF0YS5fYXJndi5kYXRhLmZpbHRlcnMgPSBmaWx0ZXJzO1xuXHRcdFx0dGhpcy5zZXRQYWdlSW5kZXgoMSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxUYWJsZSB7Li4udGhpcy5wcm9wc30gXG5cdFx0XHRcdGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoJ3pyLXRhYmxlLXBhZ2VyJywgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBcblx0XHRcdFx0Y2hpbGRyZW5SZW5kZXI9e3RoaXMuX19yZW5kZXJQYWdlcn1cblx0XHRcdFx0b25Db21wb25lbnREaWRNb3VudD17KHRhYmxlKT0+eyBcblx0XHRcdFx0XHR0aGlzLl90YWJsZSA9IHRhYmxlOyBcblx0XHRcdFx0fX1cblx0XHRcdFx0b25GaWx0ZXJDaGFuZ2U9e3RoaXMuX19vbkZpbHRlckNoYW5nZX1cblx0XHRcdFx0b25EYXRhSW5pdGlhbD17dGhpcy5fX29uRGF0YUluaXRpYWx9XG5cdFx0XHRcdG9uRGF0YUNyZWF0ZWQ9e3RoaXMuX19vbkRhdGFDcmVhdGVkfVxuXHRcdFx0XHRvbkRhdGFMb2FkZWQ9e3RoaXMuX19vbkRhdGFMb2FkZWR9IC8+XG5cdFx0KTtcblx0fVxufSk7IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIENoZWNrYm94ID0gcmVxdWlyZSgnem51aS1yZWFjdC1zZWxlY3RvcicpLkNoZWNrYm94O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSVENlbGxDaGVja2JveCcsXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRjaGVja2VkOiB0aGlzLnByb3BzLmNoZWNrZWQgfHwgZmFsc2Vcblx0XHR9XG5cdH0sXG5cdF9fb25DaGVja2JveENoYW5nZTogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRpZih0aGlzLnByb3BzLnRoZWFkKSB7XG5cdFx0XHR0aGlzLl9fb25IZWFkQ2hhbmdlKGV2ZW50KTtcblx0XHR9ZWxzZSBpZih0aGlzLnByb3BzLnRib2R5KSB7XG5cdFx0XHR0aGlzLl9fb25Cb2R5Q2hhbmdlKGV2ZW50KTtcblx0XHR9XG5cdH0sXG5cdF9fb25IZWFkQ2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdGNvbnNvbGUubG9nKGV2ZW50LmNoZWNrZWQsIHRoaXMucHJvcHMpO1xuXHR9LFxuXHRfX29uQm9keUNoYW5nZTogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHRjb25zb2xlLmxvZyhldmVudC5jaGVja2VkLCB0aGlzLnByb3BzKTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInpyLXRhYmxlLWNlbGwtY2hlY2tib3hcIj48Q2hlY2tib3ggY2hlY2tlZD17dHJ1ZX0gb25DaGFuZ2U9e3RoaXMuX19vbkNoZWNrYm94Q2hhbmdlfS8+PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBDaGVja2JveDogcmVxdWlyZSgnLi9DaGVja2JveCcpLFxuICAgIC8vQnV0dG9uczogcmVxdWlyZSgnLi9CdXR0b25zJyksXG4gICAgLy9JbnB1dDogcmVxdWlyZSgnLi9JbnB1dCcpLFxuICAgIC8vQ2FsY3VsYXRvcjogcmVxdWlyZSgnLi9DYWxjdWxhdG9yJylcbn07IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgdGFibGU6IHJlcXVpcmUoJy4vdGFibGUvaW5kZXgnKSxcbiAgICBjZWxsOiByZXF1aXJlKCcuL2NlbGwvaW5kZXgnKSxcbiAgICBQb3B1cFRhYmxlOiByZXF1aXJlKCcuL1BvcHVwVGFibGUnKSxcbiAgICBUYWJsZTogcmVxdWlyZSgnLi9UYWJsZScpLFxuICAgIFRhYmxlRWRpdG9yOiByZXF1aXJlKCcuL1RhYmxlRWRpdG9yJyksXG4gICAgVGFibGVQYWdlcjogcmVxdWlyZSgnLi9UYWJsZVBhZ2VyJylcbn07IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1pSVGFibGVDb2xncm91cCcsXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHR2YXIgX2tleU1hcHBpbmcgPSB0aGlzLnByb3BzLmtleU1hcHBpbmcgfHwgeyB9O1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8Y29sZ3JvdXA+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHQodGhpcy5wcm9wcy5jb2x1bW5zfHxbXSkubWFwKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuXHRcdFx0XHRcdFx0dmFyIF93aWR0aCA9IF9rZXlNYXBwaW5nLndpZHRoIHx8ICd3aWR0aCc7XG5cdFx0XHRcdFx0XHRyZXR1cm4gPGNvbCBrZXk9e2luZGV4fSBzdHlsZT17eyB3aWR0aDogaXRlbVtfd2lkdGhdIH19IC8+O1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdDwvY29sZ3JvdXA+XG5cdFx0KTtcblx0fVxufSk7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgVFJvdyA9IHJlcXVpcmUoJy4vVFJvdycpO1xudmFyIGxvYWRlciA9IHJlcXVpcmUoJ3pudWktcmVhY3QtbG9hZGVyJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJUQm9keScsXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKXtcblx0XHR2YXIgX3BhZ2VTaXplID0gdGhpcy5wcm9wcy5wYWdlU2l6ZSB8fCA1MDtcblx0XHR2YXIgX2NvbHVtbktleU1hcCA9IHt9LCBfZGVmYXVsdCA9IHt9O1xuXHRcdGZvcih2YXIgY29sdW1uIG9mIHRoaXMucHJvcHMuY29sdW1ucyl7XG5cdFx0XHRfY29sdW1uS2V5TWFwW2NvbHVtbi5uYW1lXSA9IGNvbHVtbjtcblx0XHRcdGlmKGNvbHVtbi52YWx1ZSAhPT0gbnVsbCAmJiBjb2x1bW4udmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRfZGVmYXVsdFtjb2x1bW4ubmFtZV0gPSBjb2x1bW4udmFsdWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdGFjdGl2ZTogbnVsbCxcblx0XHRcdGNoZWNrZWRzOiBbXSxcblx0XHRcdGNsYXNzTmFtZTogJycsXG5cdFx0XHRjb2x1bW5LZXlNYXA6IF9jb2x1bW5LZXlNYXAsXG5cdFx0XHRkZWZhdWx0OiBfZGVmYXVsdCxcblx0XHRcdHBhZ2VJbmRleDogdGhpcy5wcm9wcy5wYWdlSW5kZXggfHwgMSxcblx0XHRcdHBhZ2VTaXplOiBfcGFnZVNpemUsXG5cdFx0XHRwYWdlQ291bnQ6IE1hdGguY2VpbCh0aGlzLnByb3BzLmRhdGEubGVuZ3RoIC8gX3BhZ2VTaXplKSxcblx0XHRcdHN0eWxlOiB7fSxcblx0XHRcdGxvYWRpbmc6IGZhbHNlXG5cdFx0fTtcblx0fSxcblx0Y29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uICgpe1xuXHRcdGZvcih2YXIgaXRlbSBvZiB0aGlzLnByb3BzLmRhdGEpe1xuXHRcdFx0dGhpcy5fX2luaXRpYWxEYXRhSXRlbShpdGVtKTtcblx0XHR9XG5cdH0sXG5cdF9faW5pdGlhbERhdGFJdGVtOiBmdW5jdGlvbiAoZGF0YSl7XG5cdFx0dmFyIF9kZWZhdWx0ID0gdGhpcy5zdGF0ZS5kZWZhdWx0LCBfY29sdW1uS2V5TWFwID0gdGhpcy5zdGF0ZS5jb2x1bW5LZXlNYXAsIF92YWx1ZSA9IG51bGw7XG5cdFx0Zm9yKHZhciBrZXkgaW4gX2RlZmF1bHQpe1xuXHRcdFx0X3ZhbHVlID0gX2RlZmF1bHRba2V5XTtcblx0XHRcdGlmKHR5cGVvZiBfdmFsdWUgPT0gJ3N0cmluZycgJiYgX3ZhbHVlLmluZGV4T2YoJ3snKSAhPSAtMSAmJiBfdmFsdWUuaW5kZXhPZignfScpICE9LTEpIHtcblx0XHRcdFx0X3ZhbHVlID0gX3ZhbHVlLmZvcm1hdChkYXRhfHx7fSk7XG5cdFx0XHRcdGlmKF9jb2x1bW5LZXlNYXBba2V5XSkge1xuXHRcdFx0XHRcdHN3aXRjaChfY29sdW1uS2V5TWFwW2tleV0uZGF0YVR5cGUpIHtcblx0XHRcdFx0XHRcdGNhc2UgJ051bWJlcic6XG5cdFx0XHRcdFx0XHRcdGlmKF92YWx1ZS5pbmRleE9mKCd7JykgPT0gLTEpe1xuXHRcdFx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRfdmFsdWUgPSBldmFsKF92YWx1ZSk7XG5cdFx0XHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRfdmFsdWUgPSAwO1xuXHRcdFx0XHRcdFx0XHRcdFx0em4uZXJyb3IoZXJyKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRjYXNlICdQcmljZSc6XG5cdFx0XHRcdFx0XHRcdF92YWx1ZSA9IHpudWkucmVhY3Quc3RyaW5naWZ5UHJpY2UoX3ZhbHVlKTtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0ZGF0YVtrZXldID0gX3ZhbHVlO1xuXHRcdFx0fVxuXG5cblx0XHRcdGlmKGRhdGFba2V5XSA9PSBudWxsKSB7XG5cdFx0XHRcdGRhdGFba2V5XSA9IF92YWx1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gZGF0YTtcblx0fSxcblx0X19nZXREYXRhOiBmdW5jdGlvbiAocGFnZUluZGV4LCBwYWdlU2l6ZSl7XG5cdFx0dmFyIF9wYWdlSW5kZXggPSBwYWdlSW5kZXggfHwgdGhpcy5zdGF0ZS5wYWdlSW5kZXg7XG5cdFx0dmFyIF9wYWdlU2l6ZSA9IHBhZ2VTaXplIHx8IHRoaXMuc3RhdGUucGFnZVNpemU7XG5cdFx0cmV0dXJuIHRoaXMucHJvcHMuZGF0YS5zbGljZSgoX3BhZ2VJbmRleC0xKSAqIF9wYWdlU2l6ZSwgTWF0aC5taW4oX3BhZ2VJbmRleCAqIF9wYWdlU2l6ZSwgdGhpcy5wcm9wcy5kYXRhLmxlbmd0aCkpO1xuXHR9LFxuXHRfX3JlbmRlckxvYWRpbmc6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMubG9hZGluZ1JlbmRlciwge1xuXHRcdFx0dGJvZHk6IHRoaXNcblx0XHR9LCB0aGlzLnByb3BzLmNvbnRleHQpO1xuXG5cdFx0aWYoIV9lbGVtZW50KXtcblx0XHQgXHRfZWxlbWVudCA9IDxsb2FkZXIuRGF0YUxvYWRlciBsb2FkZXI9XCJ3YXZlXCIgdGl0bGU9eydMb2FkaW5nLi4uJ30gLz47XG5cdFx0fVxuXG5cdFx0dmFyIF9sb2FkaW5nID0gem4uZXh0ZW5kKHsgY2xhc3NOYW1lOiAnJywgc3R5bGU6IHt9IH0sIHRoaXMucHJvcHMubG9hZGluZyk7XG5cdFx0cmV0dXJuIChcblx0XHRcdDx0ciBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwidGJvZHktbG9hZGluZ1wiLCBfbG9hZGluZy5jbGFzc05hbWUpfSBzdHlsZT17X2xvYWRpbmcuc3R5bGV9PlxuXHRcdFx0XHQ8dGQgY29sU3Bhbj17dGhpcy5wcm9wcy5jb2x1bW5zLmxlbmd0aH0+e19lbGVtZW50fTwvdGQ+XG5cdFx0XHQ8L3RyPlxuXHRcdCk7XG5cdH0sXG5cdF9fcmVuZGVyRW1wdHk6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMuZW1wdHlSZW5kZXIsIHtcblx0XHRcdHRib2R5OiB0aGlzXG5cdFx0fSwgdGhpcy5wcm9wcy5jb250ZXh0KTtcblxuXHRcdGlmKCFfZWxlbWVudCl7XG5cdFx0IFx0X2VsZW1lbnQgPSAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZW1wdHktY29udGVudFwiPlxuXHRcdFx0XHRcdDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhc1wiIGRhdGEtaWNvbj1cImRlc2t0b3BcIiBjbGFzc05hbWU9XCJzdmctaW5saW5lLS1mYSBmYS1kZXNrdG9wIGZhLXctMTggXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDU3NiA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk01MjggMEg0OEMyMS41IDAgMCAyMS41IDAgNDh2MzIwYzAgMjYuNSAyMS41IDQ4IDQ4IDQ4aDE5MmwtMTYgNDhoLTcyYy0xMy4zIDAtMjQgMTAuNy0yNCAyNHMxMC43IDI0IDI0IDI0aDI3MmMxMy4zIDAgMjQtMTAuNyAyNC0yNHMtMTAuNy0yNC0yNC0yNGgtNzJsLTE2LTQ4aDE5MmMyNi41IDAgNDgtMjEuNSA0OC00OFY0OGMwLTI2LjUtMjEuNS00OC00OC00OHptLTE2IDM1Mkg2NFY2NGg0NDh2Mjg4elwiPjwvcGF0aD48L3N2Zz5cblx0XHRcdFx0XHQ8c3Bhbj5FbXB0eTwvc3Bhbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH1cblx0XHR2YXIgX2VtcHR5ID0gem4uZXh0ZW5kKHsgY2xhc3NOYW1lOiAnJywgc3R5bGU6IHt9IH0sIHRoaXMucHJvcHMuZW1wdHkpO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8dHIgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInRib2R5LWVtcHR5XCIsIF9lbXB0eS5jbGFzc05hbWUpfSBzdHlsZT17X2VtcHR5LnN0eWxlfT5cblx0XHRcdFx0PHRkIGNvbFNwYW49e3RoaXMucHJvcHMuY29sdW1ucy5sZW5ndGh9PntfZWxlbWVudH08L3RkPlxuXHRcdFx0PC90cj5cblx0XHQpO1xuXHR9LFxuXHRfX29uUm93Q2xpY2s6IGZ1bmN0aW9uIChldmVudCkge1xuXHRcdHZhciBfZGF0YSA9IGV2ZW50LmRhdGE7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRhY3RpdmU6IF9kYXRhLnRyb3cucHJvcHMuZGF0YVxuXHRcdH0pO1xuXHRcdGV2ZW50LnRib2R5ID0gdGhpcztcblx0XHR0aGlzLnByb3BzLm9uUm93Q2xpY2sgJiYgdGhpcy5wcm9wcy5vblJvd0NsaWNrKGV2ZW50KTtcblx0fSxcblx0X19vbkNlbGxDbGljazogZnVuY3Rpb24gKGV2ZW50KXtcblx0XHRldmVudC50Ym9keSA9IHRoaXM7XG5cdFx0dGhpcy5wcm9wcy5vbkNlbGxDbGljayAmJiB0aGlzLnByb3BzLm9uQ2VsbENsaWNrKGV2ZW50KTtcblx0fSxcblx0X19yZW5kZXJSb3c6IGZ1bmN0aW9uIChpdGVtLCBpbmRleCl7XG5cdFx0aWYoIXpuLmlzKGl0ZW0sICdvYmplY3QnKSkgeyByZXR1cm4gbnVsbDt9XG5cdFx0dmFyIF90ZW1wID0gdGhpcy5wcm9wcy5lYWNoUm93RGF0YSAmJiB0aGlzLnByb3BzLmVhY2hSb3dEYXRhKGl0ZW0sIGluZGV4LCB0aGlzKTtcblx0XHRpZihfdGVtcCAmJiB6bi5pcyhfdGVtcCwgJ29iamVjdCcpKXtcblx0XHRcdGl0ZW0gPSBfdGVtcDtcblx0XHR9XG5cdFx0dmFyIF9lbGVtZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQodGhpcy5wcm9wcy5yb3dSZW5kZXIsIHtcblx0XHRcdGRhdGE6IGl0ZW0sXG5cdFx0XHRyb3dJbmRleDogaW5kZXgsXG5cdFx0XHR0Ym9keTogdGhpc1xuXHRcdH0sIHRoaXMucHJvcHMuY29udGV4dCk7XG5cblx0XHRpZihfZWxlbWVudCl7XG5cdFx0XHRyZXR1cm4gX2VsZW1lbnQ7XG5cdFx0fVxuXHRcdHZhciBfcm93S2V5ID0gdGhpcy5wcm9wcy5yb3dLZXk7XG5cdFx0dmFyIF9rZXkgPSBpdGVtW19yb3dLZXldIHx8IGluZGV4O1xuXHRcdHJldHVybiA8VFJvdyBrZXk9e19rZXl9IHJvd0luZGV4PXtpbmRleH0gey4uLnRoaXMucHJvcHMucm93fSBcblx0XHRcdFx0XHRjb250ZXh0PXt0aGlzLnByb3BzLmNvbnRleHR9IFxuXHRcdFx0XHRcdGNlbGw9e3RoaXMucHJvcHMuY2VsbH1cblx0XHRcdFx0XHRjZWxsUmVuZGVyPXt0aGlzLnByb3BzLmNlbGxSZW5kZXJ9XG5cdFx0XHRcdFx0Y29sdW1ucz17dGhpcy5wcm9wcy5jb2x1bW5zfSBcblx0XHRcdFx0XHRmaXhlZENvbHVtbnM9e3RoaXMucHJvcHMuZml4ZWRDb2x1bW5zfVxuXHRcdFx0XHRcdHRib2R5PXt0aGlzfVxuXHRcdFx0XHRcdGFjdGl2ZT17dGhpcy5zdGF0ZS5hY3RpdmUgPT0gaXRlbX0gXG5cdFx0XHRcdFx0ZGF0YT17aXRlbX0gXG5cdFx0XHRcdFx0Y2hlY2tlZD17dGhpcy5zdGF0ZS5jaGVja2Vkcy5pbmRleE9mKGl0ZW0pICE9PSAtMX0gXG5cdFx0XHRcdFx0b25Sb3dDbGljaz17dGhpcy5fX29uUm93Q2xpY2t9XG5cdFx0XHRcdFx0b25DZWxsQ2xpY2s9e3RoaXMuX19vbkNlbGxDbGlja30gLz47XG5cdH0sXG5cdF9fcGFnZUNoYW5nZTogZnVuY3Rpb24gKHBhZ2VJbmRleCl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRwYWdlSW5kZXg6IHBhZ2VJbmRleFxuXHRcdH0pO1xuXHR9LFxuXHRfX3BhZ2VzUmVuZGVyOiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX3BhZ2VDb3VudCA9IHRoaXMuc3RhdGUucGFnZUNvdW50LCBfcGFnZXMgPSBbXTtcblx0XHRpZihfcGFnZUNvdW50ID4gMSkge1xuXHRcdFx0Zm9yKHZhciBpID0gMTsgaSA8IF9wYWdlQ291bnQgKyAxOyBpKyspIHsgX3BhZ2VzLnB1c2goaSk7IH1cblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDx0ciBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwidGJvZHktcGFnZXNcIiwgJycpfT5cblx0XHRcdFx0XHQ8dGQgY29sU3Bhbj17dGhpcy5wcm9wcy5jb2x1bW5zLmxlbmd0aH0+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRhdGEtcGFnZVwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBhZ2VzXCI+XG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0X3BhZ2VzLm1hcCgoaSwgaW5kZXgpPT57XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiA8c3BhbiBrZXk9e2luZGV4fSBjbGFzc05hbWU9eydwYWdlICcgKyAodGhpcy5zdGF0ZS5wYWdlSW5kZXg9PWk/J2FjdGl2ZSc6JycpfSBvbkNsaWNrPXsoKT0+dGhpcy5fX3BhZ2VDaGFuZ2UoaSl9PntpfTwvc3Bhbj47XG5cdFx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInBhZ2UtY291bnRcIj7lhbEge3RoaXMucHJvcHMuZGF0YS5sZW5ndGh9IOadoTwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvdGQ+XG5cdFx0XHRcdDwvdHI+XG5cdFx0XHQpO1xuXHRcdH1cblx0fSxcblx0X19yZW5kZXJEYXRhOiBmdW5jdGlvbiAoKXtcblx0XHRpZih0aGlzLnByb3BzLmRhdGEgPT0gbnVsbCB8fCAodGhpcy5wcm9wcy5kYXRhICYmICF0aGlzLnByb3BzLmRhdGEubGVuZ3RoKSl7XG5cdFx0XHRyZXR1cm4gdGhpcy5fX3JlbmRlckVtcHR5KCk7XG5cdFx0fVxuXHRcdGlmKHRoaXMuc3RhdGUucGFnZUNvdW50ID4gMSl7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8PlxuXHRcdFx0XHRcdHt0aGlzLl9fcGFnZXNSZW5kZXIoKX1cblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0aGlzLl9fZ2V0RGF0YSh0aGlzLnN0YXRlLnBhZ2VJbmRleCwgdGhpcy5zdGF0ZS5wYWdlU2l6ZSkubWFwKHRoaXMuX19yZW5kZXJSb3cpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ8Lz5cblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDw+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnByb3BzLmRhdGEubWFwKHRoaXMuX19yZW5kZXJSb3cpXG5cdFx0XHRcdH1cblx0XHRcdDwvPlxuXHRcdCk7XG5cdH0sXG5cdF9fcmVuZGVyOiBmdW5jdGlvbiAoKXtcblx0XHRpZih0aGlzLnByb3BzLmxvYWRpbmcgfHwgdGhpcy5zdGF0ZS5sb2FkaW5nKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5fX3JlbmRlckxvYWRpbmcoKTtcblx0XHR9ZWxzZXtcblx0XHRcdHJldHVybiB0aGlzLl9fcmVuZGVyRGF0YSgpO1xuXHRcdH1cblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8dGJvZHkgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXRhYmxlLXRib2R5XCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lLCB0aGlzLnN0YXRlLmNsYXNzTmFtZSl9IHN0eWxlPXt6bnVpLnJlYWN0LnN0eWxlKHRoaXMucHJvcHMuc3R5bGUsIHRoaXMuc3RhdGUuc3R5bGUpfT5cblx0XHRcdFx0eyB0aGlzLl9fcmVuZGVyKCkgfVxuXHRcdFx0PC90Ym9keT5cblx0XHQpO1xuXHR9XG59KTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUlRCb2R5RW1wdHknLFxuXHRfX3JlbmRlckVtcHR5OiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX2VsZW1lbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudCh0aGlzLnByb3BzLmVtcHR5UmVuZGVyLCB7XG5cdFx0XHR0Ym9keTogdGhpc1xuXHRcdH0sIHRoaXMucHJvcHMuY29udGV4dCk7XG5cblx0XHRpZighX2VsZW1lbnQpe1xuXHRcdCBcdF9lbGVtZW50ID0gPGRpdiBjbGFzc05hbWU9XCJlbXB0eS1jb250ZW50XCI+XG5cdFx0XHRcdCA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCIgZGF0YS1wcmVmaXg9XCJmYXNcIiBkYXRhLWljb249XCJkZXNrdG9wXCIgY2xhc3NOYW1lPVwic3ZnLWlubGluZS0tZmEgZmEtZGVza3RvcCBmYS13LTE4IFwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1NzYgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNTI4IDBINDhDMjEuNSAwIDAgMjEuNSAwIDQ4djMyMGMwIDI2LjUgMjEuNSA0OCA0OCA0OGgxOTJsLTE2IDQ4aC03MmMtMTMuMyAwLTI0IDEwLjctMjQgMjRzMTAuNyAyNCAyNCAyNGgyNzJjMTMuMyAwIDI0LTEwLjcgMjQtMjRzLTEwLjctMjQtMjQtMjRoLTcybC0xNi00OGgxOTJjMjYuNSAwIDQ4LTIxLjUgNDgtNDhWNDhjMC0yNi41LTIxLjUtNDgtNDgtNDh6bS0xNiAzNTJINjRWNjRoNDQ4djI4OHpcIj48L3BhdGg+PC9zdmc+XG5cdFx0XHRcdCA8c3Bhbj5FbXB0eTwvc3Bhbj5cblx0XHRcdCA8L2Rpdj47XG5cdFx0fVxuXHRcdHZhciBfZW1wdHkgPSB6bi5leHRlbmQoeyBjbGFzc05hbWU6ICcnLCBzdHlsZToge30gfSwgdGhpcy5wcm9wcy5lbXB0eSk7XG5cdFx0cmV0dXJuIDx0ciBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwidGJvZHktZW1wdHlcIiwgX2VtcHR5LmNsYXNzTmFtZSl9IHN0eWxlPXtfZW1wdHkuc3R5bGV9PlxuXHRcdFx0PHRkIGNvbFNwYW49e3RoaXMucHJvcHMuY29sdW1ucy5sZW5ndGh9PntfZWxlbWVudH08L3RkPlxuXHRcdDwvdHI+O1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDx0Ym9keSBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItdGFibGUtdGJvZHktZW1wdHlcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBzdHlsZT17em51aS5yZWFjdC5zdHlsZSh0aGlzLnByb3BzLnN0eWxlKX0+XG5cdFx0XHRcdHsgdGhpcy5fX3JlbmRlckVtcHR5KCkgfVxuXHRcdFx0PC90Ym9keT5cblx0XHQpO1xuXHR9XG59KTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSZWFjdERPTSA9IHpudWkuUmVhY3RET00gfHwgcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJUQ2VsbCcsXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRjbGFzc05hbWU6ICcnLFxuXHRcdFx0c3R5bGU6IHt9LFxuXHRcdFx0ZGlzYWJsZWQ6IHRoaXMucHJvcHMuZGlzYWJsZWQsXG5cdFx0XHRjaGVja2VkOiB0aGlzLnByb3BzLmNoZWNrZWQsXG5cdFx0XHRhY3RpdmU6IHRoaXMucHJvcHMuYWN0aXZlXG5cdFx0fVxuXHR9LFxuXHRfX3JlbmRlckNlbGxDb250ZW50OiBmdW5jdGlvbiAoKXtcblx0XHRpZih0aGlzLnByb3BzLmNoaWxkcmVuKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbjtcblx0XHR9XG5cdFx0XG5cdFx0dmFyIF92YWx1ZSA9IG51bGw7XG5cdFx0aWYodGhpcy5wcm9wcy5kYXRhICYmIHRoaXMucHJvcHMubmFtZSkge1xuXHRcdFx0X3ZhbHVlID0gdGhpcy5wcm9wcy5kYXRhW3RoaXMucHJvcHMubmFtZV07XG5cdFx0fVxuXG5cdFx0dmFyIF9yZW5kZXIgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudCh0aGlzLnByb3BzLnJlbmRlciB8fCB0aGlzLnByb3BzLmJvZHksIHtcblx0XHRcdHJvd0luZGV4OiB0aGlzLnByb3BzLnJvd0luZGV4LFxuXHRcdFx0Y2VsbEluZGV4OiB0aGlzLnByb3BzLmNlbGxJbmRleCwgXG5cdFx0XHRjb2x1bW46IHRoaXMucHJvcHMuY29sdW1uLFxuXHRcdFx0ZGF0YTogdGhpcy5wcm9wcy5kYXRhLFxuXHRcdFx0dmFsdWU6IF92YWx1ZSxcblx0XHRcdHRjZWxsOiB0aGlzLFxuXHRcdFx0dHJvdzogdGhpcy5wcm9wcy50cm93LFxuXHRcdFx0dGJvZHk6IHRoaXMucHJvcHMudGJvZHksXG5cdFx0XHR0YWJsZTogdGhpcy5wcm9wcy50Ym9keS5wcm9wcy50YWJsZVxuXHRcdH0sIHRoaXMucHJvcHMuY29udGV4dCk7XG5cdFx0XG5cdFx0aWYoX3JlbmRlcil7XG5cdFx0XHRyZXR1cm4gX3JlbmRlcjtcblx0XHR9XG5cblx0XHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjZWxsLWxhYmVsXCIgdGl0bGU9e192YWx1ZX0+e192YWx1ZX08L2Rpdj47XG5cdH0sXG5cdF9fY2VsbENsaWNrOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdHZhciBfdGhpcyA9IHRoaXM7XG5cdFx0ZXZlbnQuZGF0YSA9IHtcblx0XHRcdGZpbmRURERPTTogZnVuY3Rpb24gKCl7XG5cdFx0XHRcdHJldHVybiBSZWFjdERPTS5maW5kRE9NTm9kZShfdGhpcyk7XG5cdFx0XHR9LFxuXHRcdFx0dGNlbGw6IHRoaXNcblx0XHR9O1xuXHRcdHRoaXMucHJvcHMub25DbGljayAmJiB0aGlzLnByb3BzLm9uQ2xpY2soZXZlbnQpO1xuXHRcdHRoaXMucHJvcHMub25DZWxsQ2xpY2sgJiYgdGhpcy5wcm9wcy5vbkNlbGxDbGljayhldmVudCk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHR2YXIgX2NvbHVtbiA9IHRoaXMucHJvcHMuY29sdW1uIHx8IHt9O1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8dGQgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXRhYmxlLXRjZWxsXCIsIChfY29sdW1uLmZpeGVkPydmaXhlZCc6JycpLCB0aGlzLnByb3BzLmNsYXNzTmFtZSwgX2NvbHVtbi5ib2R5Q2xhc3NOYW1lLCB0aGlzLnN0YXRlLmNsYXNzTmFtZSl9IHN0eWxlPXt6bnVpLnJlYWN0LnN0eWxlKHRoaXMucHJvcHMuc3R5bGUsIF9jb2x1bW4uYm9keVN0eWxlLCB0aGlzLnN0YXRlLnN0eWxlLCBfY29sdW1uLmZpeGVkU3R5bGVzKX1cdFxuXHRcdFx0XHRkYXRhLWRpc2FibGVkPXt0aGlzLnN0YXRlLmRpc2FibGVkfVxuXHRcdFx0XHRkYXRhLWNoZWNrZWQ9e3RoaXMuc3RhdGUuY2hlY2tlZH1cblx0XHRcdFx0ZGF0YS1hY3RpdmU9e3RoaXMuc3RhdGUuYWN0aXZlfVxuXHRcdFx0XHRvbkNsaWNrPXt0aGlzLl9fY2VsbENsaWNrfSA+XG5cdFx0XHRcdHt0aGlzLl9fcmVuZGVyQ2VsbENvbnRlbnQoKX1cblx0XHRcdDwvdGQ+XG5cdFx0KTtcblx0fVxufSk7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgZmlsdGVyID0gcmVxdWlyZSgnem51aS1yZWFjdC1maWx0ZXInKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOiAnWlJGaWx0ZXInLFxuXHRnZXRJbml0aWFsU3RhdGU6ZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y2xhc3NOYW1lOiAnJyxcblx0XHRcdHN0eWxlOiB7fSxcblx0XHRcdGRhdGE6IHt9XG5cdFx0fVxuXHR9LFxuXHRfX29uRmlsdGVyQ2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQsIGlucHV0LCBmaWx0ZXJGaWVsZCl7XG5cdFx0aWYoZXZlbnQubmFtZSAmJiBldmVudC5vcHQpIHtcblx0XHRcdGlmKGV2ZW50LnZhbHVlID09PSBudWxsIHx8IGV2ZW50LnZhbHVlID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dGhpcy5zdGF0ZS5kYXRhW2V2ZW50Lm5hbWVdID0gbnVsbDtcblx0XHRcdFx0ZGVsZXRlIHRoaXMuc3RhdGUuZGF0YVtldmVudC5uYW1lXTtcblx0XHRcdH1lbHNlIGlmKCFldmVudC52YWx1ZSAmJiAhaW5wdXQucHJvcHMuZW1wdHlWYWx1ZUVuYWJsZWQpe1xuXHRcdFx0XHR0aGlzLnN0YXRlLmRhdGFbZXZlbnQubmFtZV0gPSBudWxsO1xuXHRcdFx0XHRkZWxldGUgdGhpcy5zdGF0ZS5kYXRhW2V2ZW50Lm5hbWVdO1xuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdHRoaXMuc3RhdGUuZGF0YVtldmVudC5uYW1lXSA9IHtcblx0XHRcdFx0XHR2YWx1ZTogZXZlbnQudmFsdWUsXG5cdFx0XHRcdFx0b3B0OiBldmVudC5vcHRcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHR9XG5cdFx0dGhpcy5wcm9wcy5vbkZpbHRlciAmJiB0aGlzLnByb3BzLm9uRmlsdGVyKHRoaXMuc3RhdGUuZGF0YSk7XG5cdH0sXG5cdF9fb25GaWx0ZXJDYW5jZWw6IGZ1bmN0aW9uIChuYW1lKXtcblx0XHRpZihuYW1lICYmIHRoaXMuc3RhdGUuZGF0YSl7XG5cdFx0XHR0aGlzLnN0YXRlLmRhdGFbbmFtZV0gPSBudWxsO1xuXHRcdFx0ZGVsZXRlIHRoaXMuc3RhdGUuZGF0YVtuYW1lXTtcblx0XHR9XG5cdH0sXG5cdF9fcmVuZGVyQ2VsbDogZnVuY3Rpb24gKGNvbHVtbiwgaW5kZXgpe1xuXHRcdGlmKCF6bi5pcyhjb2x1bW4sICdvYmplY3QnKSkgeyByZXR1cm4gbnVsbDsgfVxuXHRcdHZhciBfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMuY2VsbFJlbmRlciwge1xuXHRcdFx0Y29sdW1uOiBjb2x1bW4sXG5cdFx0XHRjZWxsSW5kZXg6IGluZGV4LCBcblx0XHRcdHRmaWx0ZXI6IHRoaXNcblx0XHR9KTtcblx0XHRpZihfZWxlbWVudCl7XG5cdFx0XHRyZXR1cm4gX2VsZW1lbnQ7XG5cdFx0fVxuXHRcdFxuXHRcdHZhciBfY29udGVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KGNvbHVtbi5yZW5kZXIsIHtcblx0XHRcdGNvbHVtbjogY29sdW1uLFxuXHRcdFx0Y2VsbEluZGV4OiBpbmRleCwgXG5cdFx0XHR0ZmlsdGVyOiB0aGlzXG5cdFx0fSk7XG5cblx0XHRpZighX2NvbnRlbnQgJiYgY29sdW1uLmZpbHRlcikge1xuXHRcdFx0dmFyIF9maWx0ZXIgPSBjb2x1bW4uZmlsdGVyO1xuXHRcdFx0aWYoem4uaXMoX2ZpbHRlciwgJ2Z1bmN0aW9uJykpIHtcblx0XHRcdFx0aWYoX2ZpbHRlci5wcm90b3R5cGUgJiYgX2ZpbHRlci5wcm90b3R5cGUucmVuZGVyKSB7XG5cdFx0XHRcdFx0X2NvbnRlbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudChfZmlsdGVyLCB7XG5cdFx0XHRcdFx0XHRjb2x1bW46IGNvbHVtbixcblx0XHRcdFx0XHRcdHRmaWx0ZXI6IHRoaXNcblx0XHRcdFx0XHR9KTtcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgX2ZpbHRlciA9IF9maWx0ZXIuY2FsbChudWxsLCBjb2x1bW4sIHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cblx0XHRcdH1cblxuXHRcdFx0aWYoem4uaXMoX2ZpbHRlciwgJ29iamVjdCcpKSB7XG5cdFx0XHRcdHZhciBfa2V5ID0gX2ZpbHRlci5rZXkgfHwgY29sdW1uLm5hbWU7XG5cdFx0XHRcdGlmKHpuLmlzKF9rZXksICdmdW5jdGlvbicpKSB7XG5cdFx0XHRcdFx0X2tleSA9IF9rZXkuY2FsbChudWxsLCBjb2x1bW4sIHRoaXMpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0X2NvbnRlbnQgPSA8ZmlsdGVyLkZpbHRlckZpZWxkIGtleT17X2tleSB8fCB6bi51dWlkKCl9IHsuLi5fZmlsdGVyfSBuYW1lPXtjb2x1bW4ubmFtZX0gb25GaWx0ZXJDaGFuZ2U9e3RoaXMuX19vbkZpbHRlckNoYW5nZX0gb25DYW5jZWw9e3RoaXMuX19vbkZpbHRlckNhbmNlbH0gLz47XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dmFyIF9jZWxsID0gem4uZXh0ZW5kKHsgc3R5bGU6IHt9LCBjbGFzc05hbWU6ICcnIH0sIHRoaXMucHJvcHMuY2VsbCk7XG5cdFx0cmV0dXJuIDx0ZCBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd0ZmlsdGVyLWNlbGwnLCAoY29sdW1uLmZpeGVkPydmaXhlZCc6JycpLCBfY2VsbC5jbGFzc05hbWUpfSBzdHlsZT17em51aS5yZWFjdC5zdHlsZShfY2VsbC5zdHlsZSwgY29sdW1uLmZpeGVkU3R5bGVzKX0+XG5cdFx0XHR7IF9jb250ZW50IH1cblx0XHQ8L3RkPjtcblx0fSxcblx0X19yZW5kZXJSb3c6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMucm93UmVuZGVyLCB7XG5cdFx0XHR0ZmlsdGVyOiB0aGlzXG5cdFx0fSk7XG5cdFx0aWYoX2VsZW1lbnQpe1xuXHRcdFx0cmV0dXJuIF9lbGVtZW50O1xuXHRcdH1cblx0XHR2YXIgX3JvdyA9IHpuLmV4dGVuZCh7IGNsYXNzTmFtZTogJycsIHN0eWxlOiB7fSB9LCB0aGlzLnByb3BzLnJvdyk7XG5cdFx0cmV0dXJuIChcblx0XHRcdDx0ciBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwidGZpbHRlci1yb3cgenItdGFibGUtdHJvd1wiLCBfcm93LmNsYXNzTmFtZSl9IHN0eWxlPXtfcm93LnN0eWxlfT5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdCh0aGlzLnByb3BzLmNvbHVtbnN8fFtdKS5tYXAodGhpcy5fX3JlbmRlckNlbGwpXG5cdFx0XHRcdH1cblx0XHRcdDwvdHI+XG5cdFx0KTtcblx0fSxcblx0cmVuZGVyOmZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDx0aGVhZCBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItdGFibGUtdGZpbHRlclwiLCB0aGlzLnByb3BzLmNsYXNzTmFtZSwgdGhpcy5zdGF0ZS5jbGFzc05hbWUpfSBzdHlsZT17em51aS5yZWFjdC5zdHlsZSh0aGlzLnByb3BzLnN0eWxlLCB0aGlzLnN0YXRlLnN0eWxlKX0+XG5cdFx0XHRcdHt0aGlzLl9fcmVuZGVyUm93KCl9XG5cdFx0XHQ8L3RoZWFkPlxuXHRcdCk7XG5cdH1cbn0pOyIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUlRGb290Jyxcblx0X19yZW5kZXJDaGlsZHJlbjogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF9jb2x1bW5zID0gdGhpcy5wcm9wcy5jb2x1bW5zIHx8IFtdO1xuXHRcdGlmKHRoaXMucHJvcHMuY2hpbGRyZW4pe1xuXHRcdFx0cmV0dXJuIDx0ciBjbGFzc05hbWU9XCJ0Zm9vdC1yb3dcIj5cblx0XHRcdFx0PHRkIGNvbFNwYW49e19jb2x1bW5zLmxlbmd0aH0+e3RoaXMucHJvcHMuY2hpbGRyZW59PC90ZD5cblx0XHRcdDwvdHI+O1xuXHRcdH1lbHNle1xuXHRcdFx0cmV0dXJuIHRoaXMuX19yZW5kZXJSb3coKTtcblx0XHR9XG5cdH0sXG5cdF9fcmVuZGVyQ2VsbDogZnVuY3Rpb24gKGNvbHVtbiwgaW5kZXgpe1xuXHRcdGlmKCF6bi5pcyhjb2x1bW4sICdvYmplY3QnKSkgeyByZXR1cm4gbnVsbDsgfVxuXHRcdHZhciBfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMuY2VsbFJlbmRlciwge1xuXHRcdFx0Y29sdW1uOiBjb2x1bW4sXG5cdFx0XHRjZWxsSW5kZXg6IGluZGV4LCBcblx0XHRcdHRmb290OiB0aGlzXG5cdFx0fSk7XG5cdFx0aWYoX2VsZW1lbnQpe1xuXHRcdFx0cmV0dXJuIF9lbGVtZW50O1xuXHRcdH1cblxuXHRcdHZhciBfY29udGVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KGNvbHVtbi5yZW5kZXIgfHwgY29sdW1uLmZvb3QsIHtcblx0XHRcdGNvbHVtbjogY29sdW1uLFxuXHRcdFx0Y2VsbEluZGV4OiBpbmRleCwgXG5cdFx0XHR0Zm9vdDogdGhpc1xuXHRcdH0pO1xuXG5cdFx0aWYodGhpcy5wcm9wcy5yZW5kZXIpIHtcblx0XHRcdF9jb250ZW50ID0gdGhpcy5wcm9wcy5yZW5kZXIoY29sdW1uLCBpbmRleCwgdGhpcyk7XG5cdFx0fVxuXG5cdFx0dmFyIF9jZWxsID0gem4uZXh0ZW5kKHsgc3R5bGU6IHt9LCBjbGFzc05hbWU6ICcnIH0sIHRoaXMucHJvcHMuY2VsbCk7XG5cdFx0cmV0dXJuIDx0aCBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd0Zm9vdC1jZWxsJywgX2NlbGwuY2xhc3NOYW1lKX0gc3R5bGU9e19jZWxsLnN0eWxlfT5cblx0XHRcdHsgX2NvbnRlbnQgfVxuXHRcdDwvdGg+O1xuXHR9LFxuXHRfX3JlbmRlclJvdzogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF9lbGVtZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQodGhpcy5wcm9wcy5yb3dSZW5kZXIsIHtcblx0XHRcdHRoZWFkOiB0aGlzXG5cdFx0fSk7XG5cdFx0aWYoX2VsZW1lbnQpe1xuXHRcdFx0cmV0dXJuIF9lbGVtZW50O1xuXHRcdH1cblx0XHR2YXIgX3JvdyA9IHpuLmV4dGVuZCh7IGNsYXNzTmFtZTogJycsIHN0eWxlOiB7fSB9LCB0aGlzLnByb3BzLnJvdyk7XG5cdFx0cmV0dXJuIChcblx0XHRcdDx0ciBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwidGZvb3Qtcm93XCIsIF9yb3cuY2xhc3NOYW1lKX0gc3R5bGU9e19yb3cuc3R5bGV9PlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0KHRoaXMucHJvcHMuY29sdW1uc3x8W10pLm1hcCh0aGlzLl9fcmVuZGVyQ2VsbClcblx0XHRcdFx0fVxuXHRcdFx0PC90cj5cblx0XHQpO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDx0Zm9vdCBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItdGFibGUtdGZvb3RcIiwgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0+XG5cdFx0XHRcdHt0aGlzLl9fcmVuZGVyQ2hpbGRyZW4oKX1cblx0XHRcdDwvdGZvb3Q+XG5cdFx0KTtcblx0fVxufSk7IiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFRIZWFkU29ydCA9IHJlcXVpcmUoJy4vVEhlYWRTb3J0Jyk7XG52YXIgcG9wdXAgPSByZXF1aXJlKCd6bnVpLXJlYWN0LXBvcHVwJyk7XG52YXIgenJqc29uID0gcmVxdWlyZSgnem51aS1yZWFjdC1qc29uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J1RIZWFkJyxcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge307XG5cdH0sXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNsYXNzTmFtZTogJycsXG5cdFx0XHRzdHlsZToge30sXG5cdFx0XHRzb3J0OiB7fSxcblx0XHRcdGZpbHRlcjoge31cblx0XHR9O1xuXHR9LFxuXHRfX29uQ29sdW1uU29ydDogZnVuY3Rpb24gKHNvcnQsIGNvbHVtbil7XG5cdFx0aWYoY29sdW1uLm5hbWUpIHtcblx0XHRcdHRoaXMuc3RhdGUuc29ydFtjb2x1bW4ubmFtZV0gPSBzb3J0O1xuXHRcdH1cblx0XHR0aGlzLnByb3BzLm9uU29ydCAmJiB0aGlzLnByb3BzLm9uU29ydCh0aGlzLnN0YXRlLnNvcnQpO1xuXHR9LFxuXHRfX29uQ29sdW1uRWRpdG9yQ2hhbmdlOiBmdW5jdGlvbiAoZGF0YSwgY2hpbGQsIHJvb3QsIGluZGV4KXtcbiAgICAgICAgdmFyIF9yb290ID0gcm9vdCB8fCBjaGlsZDtcblx0XHR0aGlzLnByb3BzLm9uQ29sdW1uQ2hhbmdlICYmIHRoaXMucHJvcHMub25Db2x1bW5DaGFuZ2UoX3Jvb3Quc3RhdGUudmFsdWUsIGluZGV4KTtcbiAgICB9LFxuXHRfX2ljb25DbGlja1JlbmRlcjogZnVuY3Rpb24gKGNvbHVtbiwgaW5kZXgpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IHN0eWxlPXt7cGFkZGluZzogMTAsIG1heEhlaWdodDogNTAwLCB3aWR0aDogNDAwLCBvdmVyZmxvdzogJ2F1dG8nfX0+XG5cdFx0XHRcdDx6cmpzb24uZWRpdG9yLm9iamVjdCBmb2xkPXtmYWxzZX1cblx0XHRcdFx0XHRkaXNwbGF5Q2xvc3VyZT17dHJ1ZX0gXG5cdFx0XHRcdFx0ZGlzcGxheUl0ZW1Db3VudD17dHJ1ZX0gXG5cdFx0XHRcdFx0bGFiZWw9eydDb2x1bW4nfSBcblx0XHRcdFx0XHR2YWx1ZT17Y29sdW1ufSBcblx0XHRcdFx0XHRvbkNoYW5nZT17KGRhdGEsIGNoaWxkLCByb290KT0+dGhpcy5fX29uQ29sdW1uRWRpdG9yQ2hhbmdlKGRhdGEsIGNoaWxkLCByb290LCBpbmRleCl9IC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9LFxuXHRfX3NvcnRSZW5kZXI6IGZ1bmN0aW9uICgpe1xuXG5cdH0sXG5cdF9fcmVuZGVyQ2VsbDogZnVuY3Rpb24gKGNvbHVtbiwgaW5kZXgpe1xuXHRcdGlmKCF6bi5pcyhjb2x1bW4sICdvYmplY3QnKSkgeyByZXR1cm4gbnVsbDsgfVxuXHRcdHZhciBfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMuY2VsbFJlbmRlciwge1xuXHRcdFx0Y29sdW1uOiBjb2x1bW4sXG5cdFx0XHRjZWxsSW5kZXg6IGluZGV4LCBcblx0XHRcdHRoZWFkOiB0aGlzXG5cdFx0fSk7XG5cdFx0aWYoX2VsZW1lbnQpe1xuXHRcdFx0cmV0dXJuIF9lbGVtZW50O1xuXHRcdH1cblxuXHRcdHZhciBfY29udGVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KGNvbHVtbi5yZW5kZXIgfHwgY29sdW1uLmhlYWQsIHtcblx0XHRcdFx0Y29sdW1uOiBjb2x1bW4sXG5cdFx0XHRcdGNlbGxJbmRleDogaW5kZXgsIFxuXHRcdFx0XHR0aGVhZDogdGhpcyxcblx0XHRcdFx0dGFibGU6IHRoaXMucHJvcHMudGFibGVcblx0XHRcdH0pLFxuXHRcdFx0X21hcHBpbmcgPSB0aGlzLnByb3BzLmtleU1hcHBpbmcgfHwge30sXG5cdFx0XHRfbGFiZWxLZXkgPSBfbWFwcGluZ1snbGFiZWwnXSB8fCAnbGFiZWwnLFxuXHRcdFx0X2xhYmVsID0gY29sdW1uW19sYWJlbEtleV07XG5cblx0XHRpZih6bi5pcyhfbGFiZWwsICdmdW5jdGlvbicpKXtcblx0XHRcdF9sYWJlbCA9IF9sYWJlbChjb2x1bW4sIHRoaXMpO1xuXHRcdH1cblx0XHRpZighX2NvbnRlbnQpIHtcblx0XHRcdF9jb250ZW50ID0gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17XCJjZWxsLWxhYmVsIFwiICsgKGNvbHVtbi5zb3J0Pydzb3J0YWJsZSc6JycpfSB0aXRsZT17X2xhYmVsfT5cblx0XHRcdFx0XHR7ICEhY29sdW1uLnJlcXVpcmVkICYmIDxzcGFuIGRhdGEtenItcG9wdXAtdG9vbHRpcD1cIuW/heimgeWtl+autVwiIGNsYXNzTmFtZT1cInJlcXVpcmVkXCI+Kjwvc3Bhbj59XG5cdFx0XHRcdFx0eyBfbGFiZWwgfVxuXHRcdFx0XHRcdHsgXG5cdFx0XHRcdFx0XHQhIWNvbHVtbi5lZGl0YWJsZSAmJiA8cG9wdXAuRHJvcGRvd24gXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImNlbGwtZWRpdG9yXCIgXG5cdFx0XHRcdFx0XHRcdHBvcG92ZXI9e3tcblx0XHRcdFx0XHRcdFx0XHRyZW5kZXI6IHRoaXMuX19pY29uQ2xpY2tSZW5kZXIoY29sdW1uLCBpbmRleCksXG5cdFx0XHRcdFx0XHRcdFx0Y2xvc2VhYmxlOiB0cnVlXG5cdFx0XHRcdFx0XHRcdH19ID5cblx0XHRcdFx0XHRcdFx0PHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFzXCIgZGF0YS1pY29uPVwiZWRpdFwiIGNsYXNzTmFtZT1cImljb24gc3ZnLWlubGluZS0tZmEgZmEtZWRpdCBmYS13LTE4IFwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1NzYgNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNDAyLjYgODMuMmw5MC4yIDkwLjJjMy44IDMuOCAzLjggMTAgMCAxMy44TDI3NC40IDQwNS42bC05Mi44IDEwLjNjLTEyLjQgMS40LTIyLjktOS4xLTIxLjUtMjEuNWwxMC4zLTkyLjhMMzg4LjggODMuMmMzLjgtMy44IDEwLTMuOCAxMy44IDB6bTE2Mi0yMi45bC00OC44LTQ4LjhjLTE1LjItMTUuMi0zOS45LTE1LjItNTUuMiAwbC0zNS40IDM1LjRjLTMuOCAzLjgtMy44IDEwIDAgMTMuOGw5MC4yIDkwLjJjMy44IDMuOCAxMCAzLjggMTMuOCAwbDM1LjQtMzUuNGMxNS4yLTE1LjMgMTUuMi00MCAwLTU1LjJ6TTM4NCAzNDYuMlY0NDhINjRWMTI4aDIyOS44YzMuMiAwIDYuMi0xLjMgOC41LTMuNWw0MC00MGM3LjYtNy42IDIuMi0yMC41LTguNS0yMC41SDQ4QzIxLjUgNjQgMCA4NS41IDAgMTEydjM1MmMwIDI2LjUgMjEuNSA0OCA0OCA0OGgzNTJjMjYuNSAwIDQ4LTIxLjUgNDgtNDhWMzA2LjJjMC0xMC43LTEyLjktMTYtMjAuNS04LjVsLTQwIDQwYy0yLjIgMi4zLTMuNSA1LjMtMy41IDguNXpcIj48L3BhdGg+PC9zdmc+XG5cdFx0XHRcdFx0XHQ8L3BvcHVwLkRyb3Bkb3duPlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdHZhciBfY2VsbCA9IHpuLmV4dGVuZCh7IHN0eWxlOiB7fSwgY2xhc3NOYW1lOiAnJyB9LCB0aGlzLnByb3BzLmNlbGwsIGNvbHVtbik7XG5cdFx0cmV0dXJuIChcblx0XHRcdDx0aCBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKCd0aGVhZC1jZWxsJywgKGNvbHVtbi5maXhlZD8nZml4ZWQnOicnKSwgX2NlbGwuY2xhc3NOYW1lKX0gc3R5bGU9e3pudWkucmVhY3Quc3R5bGUoX2NlbGwuc3R5bGUsIGNvbHVtbi5maXhlZFN0eWxlcyl9PlxuXHRcdFx0XHR7IF9jb250ZW50IH1cblx0XHRcdFx0eyAhIWNvbHVtbi5zb3J0ICYmIDxUSGVhZFNvcnQgY2xhc3NOYW1lPVwiY2VsbC1zb3J0XCIgb25Tb3J0PXsoc29ydCk9PnRoaXMuX19vbkNvbHVtblNvcnQoc29ydCwgY29sdW1uKX0gLz59XG5cdFx0XHQ8L3RoPlxuXHRcdCk7XG5cdH0sXG5cdF9fcmVuZGVyUm93OiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX2VsZW1lbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudCh0aGlzLnByb3BzLnJvd1JlbmRlciwge1xuXHRcdFx0dGhlYWQ6IHRoaXNcblx0XHR9KTtcblx0XHRpZihfZWxlbWVudCl7XG5cdFx0XHRyZXR1cm4gX2VsZW1lbnQ7XG5cdFx0fVxuXHRcdHZhciBfcm93ID0gem4uZXh0ZW5kKHsgY2xhc3NOYW1lOiAnJywgc3R5bGU6IHt9IH0sIHRoaXMucHJvcHMucm93KTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHRyIGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ0aGVhZC1yb3dcIiwgX3Jvdy5jbGFzc05hbWUpfSBzdHlsZT17X3Jvdy5zdHlsZX0+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHQodGhpcy5wcm9wcy5jb2x1bW5zfHxbXSkubWFwKHRoaXMuX19yZW5kZXJDZWxsKVxuXHRcdFx0XHR9XG5cdFx0XHQ8L3RyPlxuXHRcdCk7XG5cdH0sXG5cdHJlbmRlcjpmdW5jdGlvbigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8dGhlYWQgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZShcInpyLXRhYmxlLXRoZWFkXCIsIHRoaXMucHJvcHMuY2xhc3NOYW1lLCB0aGlzLnN0YXRlLmNsYXNzTmFtZSl9IHN0eWxlPXt6bnVpLnJlYWN0LnN0eWxlKHRoaXMucHJvcHMuc3R5bGUsIHRoaXMuc3RhdGUuc3R5bGUpfT5cblx0XHRcdFx0e3RoaXMuX19yZW5kZXJSb3coKX1cblx0XHRcdDwvdGhlYWQ+XG5cdFx0KTtcblx0fVxufSk7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonWlJUSGVhZFNvcnQnLFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRzb3J0OiAnZGVzYycsXG5cdFx0fVxuXHR9LFxuXHRfX3JlbmRlckljb246IGZ1bmN0aW9uICgpe1xuXHRcdHN3aXRjaCh0aGlzLnN0YXRlLnNvcnQpe1xuXHRcdFx0Y2FzZSBcImZhU29ydFwiOlxuXHRcdFx0XHRyZXR1cm4gPHN2ZyBvbkNsaWNrPXsoKT0+dGhpcy5fX2ljb25DbGljaygndXAnKX0gYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhc1wiIGRhdGEtaWNvbj1cInNvcnRcIiBjbGFzc05hbWU9XCJpY29uIHN2Zy1pbmxpbmUtLWZhIGZhLXNvcnQgZmEtdy0xMCBcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIwIDUxMlwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTQxIDI4OGgyMzhjMjEuNCAwIDMyLjEgMjUuOSAxNyA0MUwxNzcgNDQ4Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMEwyNCAzMjljLTE1LjEtMTUuMS00LjQtNDEgMTctNDF6bTI1NS0xMDVMMTc3IDY0Yy05LjQtOS40LTI0LjYtOS40LTMzLjkgMEwyNCAxODNjLTE1LjEgMTUuMS00LjQgNDEgMTcgNDFoMjM4YzIxLjQgMCAzMi4xLTI1LjkgMTctNDF6XCI+PC9wYXRoPjwvc3ZnPjtcblx0XHRcdGNhc2UgXCJkZXNjXCI6XG5cdFx0XHRcdHJldHVybiA8c3ZnIG9uQ2xpY2s9eygpPT50aGlzLl9faWNvbkNsaWNrKCdhc2MnKX0gYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiBkYXRhLXByZWZpeD1cImZhc1wiIGRhdGEtaWNvbj1cInNvcnQtZG93blwiIGNsYXNzTmFtZT1cImljb24gc3ZnLWlubGluZS0tZmEgZmEtc29ydC1hbHBoYS1kb3duIGZhLXctMTQgXCIgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDQ0OCA1MTJcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0xNzYgMzUyaC00OFY0OGExNiAxNiAwIDAgMC0xNi0xNkg4MGExNiAxNiAwIDAgMC0xNiAxNnYzMDRIMTZjLTE0LjE5IDAtMjEuMzYgMTcuMjQtMTEuMjkgMjcuMzFsODAgOTZhMTYgMTYgMCAwIDAgMjIuNjIgMGw4MC05NkMxOTcuMzUgMzY5LjI2IDE5MC4yMiAzNTIgMTc2IDM1MnptMjQwLTY0SDI4OGExNiAxNiAwIDAgMC0xNiAxNnYzMmExNiAxNiAwIDAgMCAxNiAxNmg1NmwtNjEuMjYgNzAuNDVBMzIgMzIgMCAwIDAgMjcyIDQ0Ni4zN1Y0NjRhMTYgMTYgMCAwIDAgMTYgMTZoMTI4YTE2IDE2IDAgMCAwIDE2LTE2di0zMmExNiAxNiAwIDAgMC0xNi0xNmgtNTZsNjEuMjYtNzAuNDVBMzIgMzIgMCAwIDAgNDMyIDMyMS42M1YzMDRhMTYgMTYgMCAwIDAtMTYtMTZ6bTMxLjA2LTg1LjM4bC01OS4yNy0xNjBBMTYgMTYgMCAwIDAgMzcyLjcyIDMyaC00MS40NGExNiAxNiAwIDAgMC0xNS4wNyAxMC42MmwtNTkuMjcgMTYwQTE2IDE2IDAgMCAwIDI3MiAyMjRoMjQuODNhMTYgMTYgMCAwIDAgMTUuMjMtMTEuMDhsNC40Mi0xMi45Mmg3MWw0LjQxIDEyLjkyQTE2IDE2IDAgMCAwIDQwNy4xNiAyMjRINDMyYTE2IDE2IDAgMCAwIDE1LjA2LTIxLjM4ek0zMzUuNjEgMTQ0TDM1MiA5NmwxNi4zOSA0OHpcIj48L3BhdGg+PC9zdmc+O1xuXHRcdFx0Y2FzZSBcImFzY1wiOlxuXHRcdFx0XHRyZXR1cm4gPHN2ZyBvbkNsaWNrPXsoKT0+dGhpcy5fX2ljb25DbGljaygnZGVzYycpfSBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiIGRhdGEtcHJlZml4PVwiZmFzXCIgZGF0YS1pY29uPVwic29ydC11cFwiIGNsYXNzTmFtZT1cImljb24gc3ZnLWlubGluZS0tZmEgZmEtc29ydC1hbHBoYS11cCBmYS13LTE0IFwiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA0NDggNTEyXCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMTYgMTYwaDQ4djMwNGExNiAxNiAwIDAgMCAxNiAxNmgzMmExNiAxNiAwIDAgMCAxNi0xNlYxNjBoNDhjMTQuMjEgMCAyMS4zOC0xNy4yNCAxMS4zMS0yNy4zMWwtODAtOTZhMTYgMTYgMCAwIDAtMjIuNjIgMGwtODAgOTZDLTUuMzUgMTQyLjc0IDEuNzggMTYwIDE2IDE2MHptNDAwIDEyOEgyODhhMTYgMTYgMCAwIDAtMTYgMTZ2MzJhMTYgMTYgMCAwIDAgMTYgMTZoNTZsLTYxLjI2IDcwLjQ1QTMyIDMyIDAgMCAwIDI3MiA0NDYuMzdWNDY0YTE2IDE2IDAgMCAwIDE2IDE2aDEyOGExNiAxNiAwIDAgMCAxNi0xNnYtMzJhMTYgMTYgMCAwIDAtMTYtMTZoLTU2bDYxLjI2LTcwLjQ1QTMyIDMyIDAgMCAwIDQzMiAzMjEuNjNWMzA0YTE2IDE2IDAgMCAwLTE2LTE2em0zMS4wNi04NS4zOGwtNTkuMjctMTYwQTE2IDE2IDAgMCAwIDM3Mi43MiAzMmgtNDEuNDRhMTYgMTYgMCAwIDAtMTUuMDcgMTAuNjJsLTU5LjI3IDE2MEExNiAxNiAwIDAgMCAyNzIgMjI0aDI0LjgzYTE2IDE2IDAgMCAwIDE1LjIzLTExLjA4bDQuNDItMTIuOTJoNzFsNC40MSAxMi45MkExNiAxNiAwIDAgMCA0MDcuMTYgMjI0SDQzMmExNiAxNiAwIDAgMCAxNS4wNi0yMS4zOHpNMzM1LjYxIDE0NEwzNTIgOTZsMTYuMzkgNDh6XCI+PC9wYXRoPjwvc3ZnPjtcblx0XHR9XHRcblx0fSxcblx0X19pY29uQ2xpY2s6IGZ1bmN0aW9uIChzb3J0KXtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHNvcnQ6IHNvcnRcblx0XHR9KTtcblx0XHR0aGlzLnByb3BzLm9uU29ydCAmJiB0aGlzLnByb3BzLm9uU29ydChzb3J0KTtcblx0fSxcblx0cmVuZGVyOmZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItdGFibGUtdGhlYWQtc29ydCcsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0gc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9PlxuXHRcdFx0XHR7dGhpcy5fX3JlbmRlckljb24oKX1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFJlYWN0RE9NID0gem51aS5SZWFjdERPTSB8fCByZXF1aXJlKCdyZWFjdC1kb20nKTtcbnZhciBUQ2VsbCA9IHJlcXVpcmUoJy4vVENlbGwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidaUlRSb3cnLFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHN0eWxlOiB7fSxcblx0XHRcdGNsYXNzTmFtZTogJydcblx0XHR9XG5cdH0sXG5cdF9fZ2V0VGFyZ2V0VEQ6IGZ1bmN0aW9uICh0YXJnZXQpIHtcblx0XHRpZih0YXJnZXQgJiYgdGFyZ2V0LnRhZ05hbWUhPT0nVEQnKXtcblx0XHRcdHJldHVybiB0aGlzLl9fZ2V0VGFyZ2V0VEQodGFyZ2V0LnBhcmVudE5vZGUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGFyZ2V0O1xuXHRcdH1cblx0fSxcblx0X19vblJvd0NsaWNrOiBmdW5jdGlvbiAoZXZlbnQpe1xuXHRcdHZhciBfdGhpcyA9IHRoaXM7XG5cdFx0dmFyIF90ZCA9IHRoaXMuX19nZXRUYXJnZXRURChldmVudC50YXJnZXQpO1xuXHRcdGV2ZW50LmRhdGEgPSB7XG5cdFx0XHRmaW5kVFJET006IGZ1bmN0aW9uICgpe1xuXHRcdFx0XHRyZXR1cm4gUmVhY3RET00uZmluZERPTU5vZGUoX3RoaXMpO1xuXHRcdFx0fSxcblx0XHRcdHRkOiBfdGQsXG5cdFx0XHR0cm93OiB0aGlzXG5cdFx0fTtcblx0XHR0aGlzLnByb3BzLm9uQ2xpY2sgJiYgdGhpcy5wcm9wcy5vbkNsaWNrKGV2ZW50KTtcblx0XHR0aGlzLnByb3BzLm9uUm93Q2xpY2sgJiYgdGhpcy5wcm9wcy5vblJvd0NsaWNrKGV2ZW50KTtcblx0fSxcblx0X19jZWxsUmVuZGVyOiBmdW5jdGlvbiAoY29sdW1uLCBpbmRleCl7XG5cdFx0aWYoIXpuLmlzKGNvbHVtbiwgJ29iamVjdCcpKSB7IHJldHVybiBudWxsO31cblx0XHR2YXIgX3Byb3BzID0gem4uZXh0ZW5kKHtcblx0XHRcdGNvbHVtbjogY29sdW1uLFxuXHRcdFx0dHJvdzogdGhpcyxcblx0XHRcdHJvd0luZGV4OiB0aGlzLnByb3BzLnJvd0luZGV4LFxuXHRcdFx0Y2VsbEluZGV4OiBpbmRleCxcblx0XHRcdGNvbnRleHQ6IHRoaXMucHJvcHMuY29udGV4dCxcblx0XHRcdGRhdGE6IHRoaXMucHJvcHMuZGF0YSxcblx0XHRcdHRib2R5OiB0aGlzLnByb3BzLnRib2R5XG5cdFx0fSwgdGhpcy5wcm9wcy5jZWxsLCBjb2x1bW4pO1xuXHRcdHZhciBfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMuY2VsbFJlbmRlciwgX3Byb3BzLCB0aGlzLnByb3BzLmNvbnRleHQpO1xuXG5cdFx0aWYoX2VsZW1lbnQpe1xuXHRcdFx0cmV0dXJuIF9lbGVtZW50O1xuXHRcdH1cblxuXHRcdHJldHVybiA8VENlbGwga2V5PXtpbmRleH0gey4uLl9wcm9wc30gZml4ZWRTdHlsZT17dGhpcy5fX2ZpeGVkV2lkdGgoaW5kZXgpfSBvbkNlbGxDbGljaz17dGhpcy5wcm9wcy5vbkNlbGxDbGlja30gY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgndHJvdy1jZWxsJywgX3Byb3BzLmNsYXNzTmFtZSl9IC8+O1xuXHR9LFxuXHRfX2ZpeGVkV2lkdGg6IGZ1bmN0aW9uIChpbmRleCl7XG5cdFx0dmFyIF9jb2x1bW5zID0gdGhpcy5wcm9wcy5jb2x1bW5zfHxbXSwgX3dpZHRoID0gMDtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgaW5kZXg7IGkrKyl7XG5cdFx0XHRpZihfY29sdW1uc1tpXS5maXhlZCkge1xuXHRcdFx0XHRfd2lkdGggKz0gX2NvbHVtbnNbaV0ud2lkdGggfHwgMDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0bGVmdDogX3dpZHRoXG5cdFx0fTtcblx0fSxcblx0cmVuZGVyOmZ1bmN0aW9uKCl7XG5cdFx0dGhpcy5wcm9wcy50Ym9keS5fX2luaXRpYWxEYXRhSXRlbSh0aGlzLnByb3BzLmRhdGEpO1xuXHRcdHRoaXMucHJvcHMub25EYXRhVmFsaWRhdGUgJiYgdGhpcy5wcm9wcy5vbkRhdGFWYWxpZGF0ZSh0aGlzLnByb3BzLmRhdGEsIHRoaXMpO1xuXHRcdHZhciBfY2xhc3NOYW1lID0gdGhpcy5wcm9wcy5jbGFzc05hbWUsIF9zdHlsZSA9IHRoaXMucHJvcHMuc3R5bGU7XG5cdFx0aWYodHlwZW9mIF9jbGFzc05hbWUgPT0gJ2Z1bmN0aW9uJyl7XG5cdFx0XHRfY2xhc3NOYW1lID0gX2NsYXNzTmFtZSh0aGlzLnByb3BzLmRhdGEsIHRoaXMpO1xuXHRcdH1cblx0XHRpZih0eXBlb2YgX3N0eWxlID09ICdmdW5jdGlvbicpe1xuXHRcdFx0X3N0eWxlID0gX3N0eWxlKHRoaXMucHJvcHMuZGF0YSwgdGhpcyk7XG5cdFx0fVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8dHIgY2xhc3NOYW1lPXt6bnVpLnJlYWN0LmNsYXNzbmFtZSgnenItdGFibGUtdHJvdycsIF9jbGFzc05hbWUsIHRoaXMuc3RhdGUuY2xhc3NOYW1lKX0gXG5cdFx0XHRcdHN0eWxlPXt6bnVpLnJlYWN0LnN0eWxlKF9zdHlsZSwgdGhpcy5zdGF0ZS5zdHlsZSl9XG5cdFx0XHRcdGRhdGEtYWN0aXZlPXt0aGlzLnByb3BzLmFjdGl2ZX0gXG5cdFx0XHRcdGRhdGEtY2hlY2tlZD17dGhpcy5wcm9wcy5jaGVja2VkfSBcblx0XHRcdFx0b25DbGljaz17dGhpcy5fX29uUm93Q2xpY2t9PlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0KHRoaXMucHJvcHMuY29sdW1uc3x8W10pLm1hcCh0aGlzLl9fY2VsbFJlbmRlcilcblx0XHRcdFx0fVxuXHRcdFx0PC90cj5cblx0XHQpO1xuXHR9XG59KTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIENvbGdyb3VwOiByZXF1aXJlKCcuL0NvbGdyb3VwJyksXG4gICAgVEZpbHRlcjogcmVxdWlyZSgnLi9URmlsdGVyJyksXG4gICAgVEJvZHk6IHJlcXVpcmUoJy4vVEJvZHknKSxcbiAgICBUQm9keUVtcHR5OiByZXF1aXJlKCcuL1RCb2R5RW1wdHknKSxcbiAgICBUQ2VsbDogcmVxdWlyZSgnLi9UQ2VsbCcpLFxuICAgIFRGb290OiByZXF1aXJlKCcuL1RGb290JyksXG4gICAgVEhlYWQ6IHJlcXVpcmUoJy4vVEhlYWQnKSxcbiAgICBUUm93OiByZXF1aXJlKCcuL1RSb3cnKVxufTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcIlJlYWN0XCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wiUmVhY3RET01cIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJmaWx0ZXJcIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJpbnB1dFwiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcImpzb25cIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJsb2FkZXJcIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJwYWdlclwiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcInBvcHVwXCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1wic2VsZWN0b3JcIl07IH0oKSk7Il0sInNvdXJjZVJvb3QiOiIifQ==