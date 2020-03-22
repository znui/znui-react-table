require('@zeanium/core');
var node_path = require('path');
var argv = zn.convertArrayArgv(process.argv).argv;
var _path = argv['znui-react.path'] || '';
module.exports = require(_path + 'znui-react/webpack').component.example('development', function (config) {
    console.log(config);
    return {
        resolve: {
            alias: {
                "rt-json-editor": node_path.resolve(__dirname, '../../../rt/rt-json-editor'),
                "znui-react": node_path.resolve(__dirname, '../../znui-react'),
                "znui-react-filter": node_path.resolve(__dirname, '../../znui-react-filter'),
                "znui-react-icon": node_path.resolve(__dirname, '../../znui-react-icon'),
                "znui-react-input": node_path.resolve(__dirname, '../../znui-react-input'),
                "znui-react-loader": node_path.resolve(__dirname, '../../znui-react-loader'),
                "znui-react-pager": node_path.resolve(__dirname, '../../znui-react-pager'),
                "znui-react-popup": node_path.resolve(__dirname, '../../znui-react-popup'),
                "znui-react-router": node_path.resolve(__dirname, '../../znui-react-router'),
                "znui-react-selector": node_path.resolve(__dirname, '../../znui-react-selector')
            }
        }
    };
});