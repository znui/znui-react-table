var React = znui.React || require('react');
var TRow = require('./TRow');
var loader = require('znui-react-loader');

module.exports = React.createClass({
	displayName:'ZRTBody',
	getInitialState: function(){
		var _pageSize = this.props.pageSize || 50;
		return {
			active: null,
			checkeds: [],
			className: '',
			pageIndex: this.props.pageIndex || 1,
			pageSize: _pageSize,
			pageCount: Math.ceil(this.props.data.length / _pageSize),
			style: {},
			loading: false
		};
	},
	__getData: function (pageIndex, pageSize){
		var _pageIndex = pageIndex || this.state.pageIndex;
		var _pageSize = pageSize || this.state.pageSize;
		return this.props.data.slice((_pageIndex-1) * _pageSize, Math.min(_pageIndex * _pageSize, this.props.data.length));
	},
	__renderLoading: function (){
		var _element = znui.react.createReactElement(this.props.loadingRender, {
			tbody: this
		}, this.props.context);

		if(!_element){
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
		}, this.props.context);

		if(!_element){
		 	_element = <div className="empty-content">
				 <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="desktop" className="svg-inline--fa fa-desktop fa-w-18 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M528 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h192l-16 48h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-72l-16-48h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h448v288z"></path></svg>
				 <span>Empty</span>
			 </div>;
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
		var _temp = this.props.eachRowData && this.props.eachRowData(item, index, this);
		if(_temp && zn.is(_temp, 'object')){
			item = _temp;
		}
		var _element = znui.react.createReactElement(this.props.rowRender, {
			data: item,
			rowIndex: index,
			tbody: this
		}, this.props.context);

		if(_element){
			return _element;
		}
		var _rowKey = this.props.rowKey;
		var _key = item[_rowKey] || index;
		return <TRow key={_key} context={this.props.context} {...this.props.row} 
					rowIndex={index}
					cell={this.props.cell}
					cellRender={this.props.cellRender}
					columns={this.props.columns} 
					fixedColumns={this.props.fixedColumns}
					tbody={this}
					data={item} 
					active={this.state.active == item} 
					checked={this.state.checkeds.indexOf(item) !== -1} 
					onRowClick={this.__onRowClick}
					onCellClick={this.__onCellClick} />;
	},
	__pageChange: function (pageIndex){
		this.setState({
			pageIndex: pageIndex
		});
	},
	__pagesRender: function (){
		var _pageCount = this.state.pageCount, _pages = [];
		if(_pageCount > 1) {
			for(var i = 1; i < _pageCount + 1; i++) { _pages.push(i); }
			return (
				<tr className={znui.react.classname("tbody-pages", '')}>
					<td colSpan={this.props.columns.length}>
						<div className="data-page">
							<div className="pages">
								{
									_pages.map((i, index)=>{
										return <span key={index} className={'page ' + (this.state.pageIndex==i?'active':'')} onClick={()=>this.__pageChange(i)}>{i}</span>;
									})
								}
							</div>
							<span className="page-count">共 {this.props.data.length} 条</span>
						</div>
					</td>
				</tr>
			);
		}
	},
	__renderData: function (){
		if(this.props.data == null || (this.props.data && !this.props.data.length)){
			return this.__renderEmpty();
		}
		if(this.state.pageCount > 1){
			return (
				<>
					{this.__pagesRender()}
					{
						this.__getData(this.state.pageIndex, this.state.pageSize).map(this.__renderRow)
					}
				</>
			);
		}

		return (
			<>
				{
					this.props.data.map(this.__renderRow)
				}
			</>
		);
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
