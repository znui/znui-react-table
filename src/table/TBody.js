var React = znui.React || require('react');
var TRow = require('./TRow');
var loader = require('znui-react-loader');

module.exports = React.createClass({
	displayName:'ZRTBody',
	getInitialState:function(){
		return {
			active: null,
			checkeds: [],
			className: '',
			style: {},
			loading: false
		}
	},
	__renderLoading: function (){
		var _element = znui.react.createReactElement(this.props.loadingRender, {
			tbody: this
		});

		if(_element){
		 	_element = <loader.DataLoader loader="wave" title={'Loading...'} />;
		}

		var _loading = zn.extend({ className: '', style: {} }, this.props.loading);
		return <tr className={znui.react.classname("tbody-loading", _loading.className)} style={_loading.style}>
			<td colSpan={this.props.columns.length}>{_element}</td>
		</tr>;
	},
	__renderEmpty: function (){
		var _element = znui.react.createReactElement(this.props.emptyRender, {
			tbody: this
		});

		if(!_element){
		 	_element = <div className="empty-content">No Data.</div>;
		}
		var _empty = zn.extend({ className: '', style: {} }, this.props.empty);
		return <tr className={znui.react.classname("tbody-empty", _empty.className)} style={_empty.style}>
			<td colSpan={this.props.columns.length}>{_element}</td>
		</tr>;
	},
	__onRowClick: function (event) {
		var _data = event.data;
		this.setState({
			active: _data.trow.props.data
		});
		event.tbody = this;
		this.props.onRowClick && this.props.onRowClick(event);
	},
	__onCellClick: function (event){
		event.tbody = this;
		this.props.onCellClick && this.props.onCellClick(event);
	},
	__renderRow: function (item, index){
		if(!zn.is(item, 'object')) { return null;}
		var _temp = this.props.eachRowData && this.props.eachRowData(item, index);
		if(_temp && zn.is(_temp, 'object')){
			item = _temp;
		}
		var _element = znui.react.createReactElement(this.props.rowRender, {
			data: item,
			rowIndex: index,
			tbody: this
		});

		if(_element){
			return _element;
		}

		return <TRow key={index} {...this.props.row} 
					cell={this.props.cell}
					cellRender={this.props.cellRender}
					columns={this.props.columns} 
					tbody={this}
					data={item} 
					active={this.state.active == item} 
					checked={this.state.checkeds.indexOf(item) !== -1} 
					onRowClick={this.__onRowClick}
					onCellClick={this.__onCellClick} />;
	},
	__renderData: function (){
		if(this.props.data == null || (this.props.data && !this.props.data.length)){
			return this.__renderEmpty();
		}
		return <>
			{
				this.props.data.map(this.__renderRow)
			}
		</>;
	},
	__render: function (){
		if(this.props.loading || this.state.loading) {
			return this.__renderLoading();
		}else{
			return this.__renderData();
		}
	},
	render: function(){
		return (
			<tbody className={znui.react.classname("zr-table-tbody", this.props.className, this.state.className)} style={znui.react.style(this.props.style, this.state.style)}>
				{ this.__render() }
			</tbody>
		);
	}
});
