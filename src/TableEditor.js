var React = znui.React || require('react');
var Table = require('./Table');
var input = require('znui-react-input');

module.exports = React.createClass({
	displayName:'ZRTableEditor',
	getInitialState: function (){
		return {
			columns: []
		};
	},
	__cellChange: function (event, argv){
		//console.log(event);
		//console.log(argv);
		argv.data[argv.tcell.props.name] = event.value;
		argv.trow.forceUpdate();
	},
	__columnBodyRender: function (argv){
		return <input.Input key={argv.value} value={argv.value} onEnter={(event)=>this.__cellChange(event, argv)} />;
	},
	__columnIterator: function (column, table){
		if(!column.body) {
			column.body = this.__columnBodyRender;
		}

		return column;
	},
	render: function(){
		return (
			<Table {...this.props} className={znui.react.classname('zr-table-editor', this.props.className)} columnIterator={this.__columnIterator} />
		)
	}
});