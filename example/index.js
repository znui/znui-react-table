var React = require('react');
var ReactDOM = require('react-dom');
var createClass = require('create-react-class');
require('../../znui-react/index.all.js');
znui.react.fixCreateReactClass(React, createClass);
require('../src/index.js');
require('./index.less');

ReactDOM.render(
    <div>
        
    </div>,
    document.getElementById('container'),
);

