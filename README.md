# znui-react-table
React Table Component


[![npm](https://img.shields.io/npm/v/znui-react-table.svg)](https://www.npmjs.com/package/znui-react-table)
[![npm](https://img.shields.io/npm/dm/znui-react-table.svg)](https://www.npmjs.com/package/znui-react-table)

## Demo

[Take a look at the demo](https://znui.github.io/znui-react-table/example/www/index.html)

## Installation

```bash
npm install znui-react-table -s
```

## Usage

```javascript

var ReactDOM = require('react-dom');
var table = require('znui-react-table');

var _items = [
    { 
        label: '页面', 
        name: 'page', 
        width: 220
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
            var _value = parseInt(argv.data.age * 5);
            if(isNaN(_value)){
                _value = 0;
            }

            return <span>{_value}</span>;
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
};

znui.react.createApplication({
    render: <div className="container">
        <table.Table {..._table1} />
        <table.TableEditor {..._table} />
    </div>
});

```

## Preiview

<img src="https://znui.github.io/znui-react-table/example/images/table.png" />

## License

MIT