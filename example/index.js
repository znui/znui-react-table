var React = require('react');
var ReactDOM = require('react-dom');

var table = require('../src/index.js');
require('../src/index.less');
require('./index.less');
var input = require('znui-react-input');

var _items = [
    { 
        label: '页面', 
        name: 'page', 
        width: 220, 
        body: function (argv){
            console.log(argv.value);
            return <input.Input key={argv.value} value={argv.value} />;
        }
    },
    { 
        label: '姓名', 
        name: 'name', 
        width: 140, 
        editable: true, 
        sort: true, 
        filter: { type: 'Input', opts: ['%'] }
    },
    { label: '性别', name: 'sex', width: 240, filter: { type: zn.CustomerSearcher, opts: ['='] }  },
    { label: '年龄', name: 'age', width: 180, sort: true, filter: { type: 'Input', opts: ['%'] } },
    { 
        label: '备注', 
        name: 'zn_note', 
        width: 400, 
        body: function (argv){
            return <span>{argv.data.age * 5}</span>;
        } 
    }
];
var _data = [
    {
        page: 'page1', name: 'c', sex: 'man', age: 10
    },
    {
        page: 'page2', name: 'b', sex: 'man', age: 20
    },
    {
        page: 'page3', name: 'a', sex: 'man', age: 30
    }
];
var _table = {
    checkbox: true,
    columns: _items,
    colgroup: {},
    cellPadding: 10,
    className: "zr-table-class-editor",
    fixed: true,
    thead: {
        
    },
    tfilter: {

    },
    tbody: {
        data: _data
    },
    tfoot: {

    },
    onCheckboxChange: function (data, table){
        console.log(data);
    }
}
var _table1 = {
    columns: _items,
    colgroup: {},
    cellPadding: 10,
    className: "zr-table-class-normal",
    fixed: true,
    thead: {
        filter: true
    },
    tbody: {
        data: _data
    },
    pager: {

    }
}
ReactDOM.render(
    <div className="container">
        <table.Table {..._table} />
        <table.TableEditor {..._table} />
    </div>,
    document.getElementById('container'),
);

