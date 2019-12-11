var React = require('react');
var ReactDOM = require('react-dom');
var createClass = require('create-react-class');
require('../../znui-react/index.all.js');
znui.react.fixCreateReactClass(React, createClass);
require('../src/index.js');
require('./index.less');
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
var icons = require('@fortawesome/free-solid-svg-icons');
var FA = require('react-fontawesome');
console.log(icons);
console.log(FA);
ReactDOM.render(
    <div>
        <FA name="plus" />
        <FontAwesomeIcon icon="check-square" />
        Popular gadgets come from vendors like:
        <FontAwesomeIcon icon={['fab', 'apple']} />
        <FontAwesomeIcon icon={['fab', 'microsoft']} />
        <FontAwesomeIcon icon={['fab', 'google']} />
        <FontAwesomeIcon icon={icons.faCoffee} />
        <FontAwesomeIcon icon={icons.faPlus} color="red" onClick={()=>alert('xxx')} />
        <FontAwesomeIcon icon="spinner" size="xs" />
        <FontAwesomeIcon icon="spinner" size="lg" />
        <FontAwesomeIcon icon="spinner" size="6x" />
    </div>,
    document.getElementById('container'),
);

