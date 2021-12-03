"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = znui.React || require('react');

var table = require('./table/index');

var selector = require('znui-react-selector');

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