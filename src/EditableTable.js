require('./EditableTable.less');
var React = require('react');
var Table = require('./Table');
var ReactFA = require('@fortawesome/react-fontawesome');
var ReactSVGIcons = require('@fortawesome/free-solid-svg-icons');
module.exports = React.createClass({
	getDefaultProps: function (){
		return {
			headers: [],
			data: []
		};
	},
	getInitialState: function () {
		return {

		}
	},
	componentDidMount:function(){
		this._tableBody = this.refs.dstable.refs.body;
	},
	getValue: function (){
		return this._tableBody.getData();
	},
	setValue: function (data){
		this._tableBody.setData(data);
	},
	getText: function (){

	},
	__onRowAdd: function (){
		this._tableBody.insertRow({ _editable: true });
	},
	__onRowDelete: function (rowIndex, columnIndex, data, item, value){
		console.log('delete', data);
		this._tableBody.deleteRow(data);
	},
	__onRowAppend: function (rowIndex, columnIndex, data, item, value){
		console.log('append', data);
		this._tableBody.insertRow({ _editable: true }, rowIndex);
	},
	__tableHeaderRender: function (item, index, columnSize){
		if(index == 0){
			return <div style={{textAlign: 'center'}}>
				<ReactFA.FontAwesomeIcon icon={ReactSVGIcons.faPlus} onClick={this.__onRowAdd} />
			</div>;
		}
	},
	__tableColumnRender: function (rowIndex, columnIndex, data, item, value){
		if(item.type == "action"){
			return <div style={{textAlign: 'center'}}>
				<ReactFA.FontAwesomeIcon icon={ReactSVGIcons.faMinus} onClick={()=>this.__onRowDelete(rowIndex, columnIndex, data, item, value)} />
				{
					/*
						<ReactFA.FontAwesomeIcon icon={ReactSVGIcons.faPlus} onClick={()=>this.__onRowAppend(rowIndex, columnIndex, data, item, value)} />
					*/
				}
			</div>;
		}
	},
	render: function(){
		return (
			<Table {...this.props} className={"znui-react-table " + (this.props.className||'')} ref="dstable"
				singleSelect={false}
				editable={true}
				enableFilter={false}
				checkbox={false}
				showHeader={true}
				data={this.props.data}
				items={[
					{ title: 'Actions', name: 'Actions', type: 'action', width: 50, textAlign: 'center' }
				].concat(this.props.headers)}
				headerRender={this.__tableHeaderRender}
				columnRender={this.__tableColumnRender}/>
		);
	}
});
