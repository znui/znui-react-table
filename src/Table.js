var React = znui.React || require('react');
var table = require('./table/index');
var selector = require('znui-react-selector');

module.exports = React.createClass({
	displayName:'ZRTable',
	getDefaultProps: function (){
		return {
			dataIndexEnabled: false,
			fixedLayout: false,
			valueKey: 'zxnz_UUID',
			rowKey: 'zxnz_UUID'
		};
	},
	getInitialState: function (){
		return {
			data: [], 
			columns: [],
			checkeds: this.props.checkeds || []
		};
	},
	componentDidMount: function(){
		this.props.onComponentDidMount && this.props.onComponentDidMount(this);
	},
	__sortFunction: function (next, prev, key, _sort){
		if(this.props.sortFunction) {
			return this.props.sortFunction(next, prev, key, _sort);
		}
		if(_sort=='desc'){
			if(next[key] > prev[key]){
				return 1;
			}else if(next[key] == prev[key]){
				return 0;
			}else if(next[key] < prev[key]){
				return -1;
			}
		}
		if(_sort=='asc'){
			if(next[key] < prev[key]){
				return 1;
			}else if(next[key] == prev[key]){
				return 0;
			}else if(next[key] > prev[key]){
				return -1;
			}
		}
	},
	__onSort: function (sorts){
		var _return = this.props.onSortChange && this.props.onSortChange(sorts, this.state.data, this);
		if(_return !== false){
			if(this.data && zn.isZNObject(this.data)) {
				if(!this.data._argv.data) {
					this.data._argv.data = {};
				}
				this.data._argv.data.sorts = sorts;
				this.data.refresh();
			}else{
				var _sort = null;
				for(var key in sorts){
					_sort = sorts[key]
					this.state.data = this.state.data.sort((next, prev) => this.__sortFunction(next, prev, key, _sort));
				}

				this.forceUpdate();
			}
		}
	},
	__onFilter: function (filters){
		var _return = this.props.onFilterChange && this.props.onFilterChange(filters, this.state.data, this);
		if(_return !== false){
			if(this.data && zn.isZNObject(this.data)) {
				if(!this.data._argv.data) {
					this.data._argv.data = {};
				}
				this.data._argv.data.filters = filters;
				this.data.refresh();
			}
		}
	},
	__onTBodyEachRowData: function (data, index, tbody){
		var _valueKey = this.props.valueKey || 'zxnz_UUID';
		if(this.props.checkbox && this.props.value && _valueKey) {
			var _value = data[_valueKey];
			if(this.props.value.indexOf(_value)!=-1){
				this.state.checkeds.push(_value);
			}
		}
		this.props.onEachRowData && this.props.onEachRowData(data, index, tbody, this);
	},
	__tbodyDataRender: function (columns){
		if(!this.state.data.length){
			return <table.TBodyEmpty context={this.props.context} {...this.props.tbody} columns={columns} data={this.state.data} table={this} />;
		}
		return <table.TBody rowKey={this.props.rowKey} row={this.props.row} context={this.props.context} eachRowData={this.__onTBodyEachRowData} {...this.props.tbody} columns={columns} fixedColumns={this.props.fixedColumns} data={this.state.data} table={this} />;
	},
	__tbodyLoadingRender: function (columns){
		return <table.TBody rowKey={this.props.rowKey} row={this.props.row} context={this.props.context} {...this.props.tbody} columns={columns} fixedColumns={this.props.fixedColumns} loading={true} table={this} />;
	},
	__onTHeadColumnChange: function (data, index){
		if(this.state.columns){
			this.state.columns[index] = data;
			this.forceUpdate();
		}
	},
	__tbodyDataLoaded: function (data) {
		var _return = this.props.onDataLoaded && this.props.onDataLoaded(data, this);
		if(_return !== false){
			if(zn.is(data, 'object') && data.result){
				data = data.result;
			}
			this.setState({ data: data });
		}
	},
	__onDataCreated: function (data, lifycycle){
		this.data = data;
		this.props.onDataCreated && this.props.onDataCreated(data, this, lifycycle);
	},
	refresh: function (callback){
		this.setState({
			checkeds: []
		});
		if(this.data){
			this.data.refresh();
		}
		callback && callback();

		return this;
	},
	refreshHeaders: function (){
		if(this.columns){
			this.columns.refresh();
		}

		return this;
	},
	setData: function (data){
		this.setState({ data: data });
	},
	__fixedStyles: function (index){
		var _columns = this.state.columns||[], _width = 0;
		for(var i = 0; i < index; i++){
			if(_columns[i].fixed) {
				_width += (_columns[i].width || 0) - 1;
			}
		}

		return {
			left: _width - 1
		};
	},
	__renderTBody: function (columns){
		var _data = this.props.data || this.props.tbody.data;
		var _result = this.props.onDataInitial && this.props.onDataInitial(_data, this);
		if(_result){
			_data = _result;
		}
		return <znui.react.DataLifecycle data={_data} 
					dataRender={()=>this.__tbodyDataRender(columns)} 
					loadingEnabled={this.props.loadingEnabled||false}
					loadingRender={()=>this.__tbodyLoadingRender(columns)}
					responseHandler={this.props.responseHandler}
					onDataCreated={this.__onDataCreated}
					onFinished={this.__tbodyDataLoaded} />;
	},
	__onFixedLayoutBodyScroll: function (e){
		this._layoutHeader.scrollLeft = e.target.scrollLeft;
	},
	__render: function (){
		var columns = this.state.columns;
		columns = columns.map(function (item, index){
			if(item.fixed) {
				item.fixedStyles = this.__fixedStyles(index);
			}
			return item;
		}.bind(this));
		if(this.props.fixedLayout) {
			return (
				<div className="zr-table-fixed-layout">
					<div className="fixed-layout-header" ref={(ref)=>this._layoutHeader = ref}>
						<table className={znui.react.classname("zr-table", this.props.className)} 
							style={znui.react.style(this.props.style, { width: this.props.width })} 
							data-fixed={this.props.fixed} 	
							cellPadding={this.props.cellPadding || 0} 
							cellSpacing={this.props.cellSpacing || 0} {...this.props.attrs}>
							{ !!this.props.caption && <caption className={this.props.caption.className} style={this.props.caption.style}>{this.props.caption.render}</caption> }
							{ !!this.props.colgroup && <table.Colgroup context={this.props.context} keyMapping={this.props.keyMapping} columns={columns} {...this.props.colgroup} /> }
							{ !!this.props.thead && <table.THead context={this.props.context} onSort={this.__onSort} onColumnChange={this.__onTHeadColumnChange} columns={columns} keyMapping={this.props.keyMapping} {...this.props.thead} table={this} />}
							{ !!this.props.tfilter && <table.TFilter context={this.props.context} onFilter={this.__onFilter} columns={columns} {...this.props.tfilter} table={this} />}
						</table>
					</div>
					<div className="fixed-layout-body" onScroll={this.__onFixedLayoutBodyScroll}>
						<table className={znui.react.classname("zr-table", this.props.className)} 
							style={znui.react.style(this.props.style, { width: this.props.width })} 
							data-fixed={this.props.fixed} 	
							cellPadding={this.props.cellPadding || 0} 
							cellSpacing={this.props.cellSpacing || 0} {...this.props.attrs}>
							{ !!this.props.caption && <caption className={this.props.caption.className} style={this.props.caption.style}>{this.props.caption.render}</caption> }
							{ !!this.props.colgroup && <table.Colgroup context={this.props.context} keyMapping={this.props.keyMapping} columns={columns} {...this.props.colgroup} /> }
							{ (this.props.tbody || this.props.data) && this.__renderTBody(columns) }
						</table>
					</div>
					<div className="fixed-layout-footer">
						{ !!this.props.tfoot && <table><table.TFoot context={this.props.context} columns={columns} {...this.props.tfoot} table={this} /></table>}
						{ this.props.childrenRender && this.props.childrenRender(columns, this) }
						{ this.props.children }
					</div>
				</div>
			);
		}

		return (
			<table className={znui.react.classname("zr-table", this.props.className)} 
				style={znui.react.style(this.props.style, { width: this.props.width })} 
				data-fixed={this.props.fixed} 	
				cellPadding={this.props.cellPadding || 0} 
				cellSpacing={this.props.cellSpacing || 0} {...this.props.attrs}>
				{ !!this.props.caption && <caption className={this.props.caption.className} style={this.props.caption.style}>{this.props.caption.render}</caption> }
				{ !!this.props.colgroup && <table.Colgroup context={this.props.context} keyMapping={this.props.keyMapping} columns={columns} {...this.props.colgroup} /> }
				{ !!this.props.thead && <table.THead context={this.props.context} onSort={this.__onSort} onColumnChange={this.__onTHeadColumnChange} columns={columns} keyMapping={this.props.keyMapping} {...this.props.thead} table={this} />}
				{ !!this.props.tfilter && <table.TFilter context={this.props.context} onFilter={this.__onFilter} columns={columns} {...this.props.tfilter} table={this} />}
				{ (this.props.tbody || this.props.data) && this.__renderTBody(columns) }
				{ !!this.props.tfoot && <table.TFoot context={this.props.context} columns={columns} {...this.props.tfoot} table={this} />}
				{ this.props.childrenRender && this.props.childrenRender(columns, this) }
				{ this.props.children }
			</table>
		);
	},
	__rowHeadCheckboxChecked: function (){
		var _checkeds = this.state.checkeds, _valueKey = this.props.valueKey || 'zxnz_UUID';
		if(!_checkeds.length) return false;
		for(var item of this.state.data) {
			if(!item.__checkedDisabled__ && _checkeds.indexOf(item[_valueKey]) == -1){
				return false;
			}
		}

		return true;
	},
	__onRowHeadCheckboxChange: function (event){
		event.stopPropagation();
		var _valueKey = this.props.valueKey || 'zxnz_UUID';
		if(event.checked) {
			for(var item of this.state.data) {
				if(!item.__checkedDisabled__ && this.state.checkeds.indexOf(item[_valueKey]) == -1){
					this.state.checkeds.push(item[_valueKey]);
				}
			}
		}else{
			for(var item of this.state.data) {
				if(!item.__checkedDisabled__ && this.state.checkeds.indexOf(item[_valueKey]) != -1){
					this.state.checkeds.splice(this.state.checkeds.indexOf(item[_valueKey]), 1);
				}
			}
		}
		this.forceUpdate();
		this.props.onCheckboxChange && this.props.onCheckboxChange(this.state.checkeds, this);
	},
	__initCheckbox: function (columns){
		var _valueKey = this.props.valueKey || 'zxnz_UUID';
		var _checkbox = {
				width: 80,
				fixed: true,
				head: function (argv){
					var _table = argv.thead.props.table;
					if(!_table) return;
					return <selector.Checkbox
								style={{ justifyContent: 'center' }}
								key={zn.uuid()}
								text={'(' + _table.state.checkeds.length +')'}
								checked={this.__rowHeadCheckboxChecked()}
								onChange={this.__onRowHeadCheckboxChange} />;
				}.bind(this),
				body: function (argv){
					var _data = argv.data;
					return <selector.UncontrolCheckbox 
								style={{ justifyContent: 'center' }}
								disabled={_data.__checkedDisabled__}
								checked={this.state.checkeds.indexOf(_data[_valueKey]) !== -1}
								onClick={(event, checkbox)=>{
									event.stopPropagation();
									if(checkbox.props.checked) {
										this.state.checkeds.splice(this.state.checkeds.indexOf(_data[_valueKey]), 1); 
									}else{
										this.state.checkeds.push(_data[_valueKey]);
									}
									this.forceUpdate();
									this.props.onCheckboxChange && this.props.onCheckboxChange(this.state.checkeds, this);
								}} />;
				}.bind(this)
			},
			_value = this.props.checkbox;
		switch(zn.type(_value)) {
			case 'object':
				_checkbox = zn.extend({}, _value);
				break;
			case 'number':
				_checkbox.width = _value;
				break;
		}
		if(_value) {
			columns = columns.unshift(_checkbox);
		}
	},
	__initIndexColumn: function (columns){
		if(this.props.dataIndexEnabled) {
			columns = columns.unshift({
				width: 48,
				label: '索引', 
				fixed: true,
				name: '__index__',
				body: function (argv){
					return (<div style={{ textAlign: 'center' }}>{(+argv.rowIndex) + 1}</div>);
				}.bind(this)
			});
		}
	},
	__columnsLoaded: function (columns){
		if(columns && zn.is(columns, 'array')){
			var _temp = null,
				_result = null,
				_columnIterator = this.props.columnIterator,
				_columns = columns.map(function (column){
					_temp = zn.deepAssign({}, column);
					_result = _columnIterator && _columnIterator(_temp, this);
					if(_result === false) return null;
					if(typeof _result == 'object') return _result;

					return _temp;
				}.bind(this));
			this.__initCheckbox(_columns);
			this.__initIndexColumn(_columns);
			this.props.onColumnsLoaded && this.props.onColumnsLoaded(columns);
			this.setState({ columns: _columns });
		}
	},
	__onColumnDataCreated: function (data, lifecycle){
		this.columns = data;
		this.props.onColumnsCreated && this.props.onColumnsCreated(data, this, lifecycle);
	},
	getData: function (){
		return this.state.data;
	},
	removeRowData: function (data){
		if(data) {
			this.state.data.splice(this.state.data.indexOf(data), 1);
			this.forceUpdate();
		}

		return this;
	},
	updateRowData: function (data){
		if(data) {
			var _index = this.state.data.indexOf(data);
			this.state.data[_index] = data;
			this.forceUpdate();
		}
		
		return this;
	},
	render: function(){
		return <znui.react.DataLifecycle
					data={this.props.columns}
					render={this.__render}
					responseHandler={this.props.responseHandler}
					onLoading={this.props.onColumnLoading}
					onFinished={this.__columnsLoaded}
					onError={this.props.onColumnLoadError}
					onDataCreated={this.__onColumnDataCreated} />;
	}
});