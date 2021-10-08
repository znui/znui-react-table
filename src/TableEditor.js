var React = znui.React || require('react');
var Table = require('./Table');
var input = require('znui-react-input');

module.exports = React.createClass({
	displayName:'ZRTableEditor',
	getInitialState: function (){
		return {
			table: null,
			columns: []
		};
	},
	__cellChange: function (event, argv){
		argv.data[argv.tcell.props.name] = event.value;
		argv.trow.forceUpdate();
	},
	__columnBodyRender: function (argv){
		return <input.Input 
			key={argv.value} 
			value={argv.value} 
			onBlur={(event)=>this.__cellChange(event, argv)}
			onEnter={(event)=>this.__cellChange(event, argv)} />;
	},
	__columnIterator: function (column, table){
		if(!column.body) {
			column.body = this.__columnBodyRender;
		}

		return column;
	},
	setData: function (data){
		var _return = this.props.onDataChange && this.props.onDataChange(data, this.state.table, this);
		if(_return === false){
			return false;
		}
		if(typeof _return == 'object') {
			data = _return;
		}
		this.state.table.state.data = data;
		this.state.table.forceUpdate();

		return this;
	},
	getData: function (){
		return this.state.table.getData();
	},
	addRow: function (data){
		var _return = this.props.onDataChange && this.props.onDataChange([data], this.state.table, this);
		if(_return === false){
			return false;
		}
		if(typeof _return == 'object') {
			data = _return;
		}
		this.state.table.state.data.push(zn.extend({}, data));
		this.state.table.forceUpdate();

		return this;
	},
	render: function(){
		return (
			<Table {...this.props} ref={(ref) => this.state.table = ref} className={znui.react.classname('zr-table-editor', this.props.className)} columnIterator={this.__columnIterator} />
		)
	}
});