require('@zeanium/core');
var argv = zn.convertArrayArgv(process.argv).argv;
var _path = argv['znui-react.path'] || '';
module.exports = require(_path + 'znui-react/webpack').component.development(function (config){
    return {
        externals: {
            "react": "React",
            "react-dom": "ReactDOM",
            "znui-react": "zr",
            "znui-react-json": "json",
            "znui-react-filter": "filter",
            "znui-react-icon": "icon",
            "znui-react-input": "input",
            "znui-react-loader": "loader",
            "znui-react-pager": "pager",
            "znui-react-popup": "popup",
            "znui-react-router": "router",
            "znui-react-selector": "selector"
        }
    };
});