var React = znui.React || require('react');
var Table = require('./Table');
var pager = require('znui-react-pager');

module.exports = React.createClass({
	displayName:'ZRTablePager',
	getInitialState: function (){
		return {
			count: 0,
			current: 1,
			data: [],
			total: 0,
			pageIndex: this.props.pageIndex || 1
		};
	},
	__handlePageChanged: function (newPage){
		var _return = this.props.onPageChanged && this.props.onPageChanged(newPage, this);
		if(_return !== false) {
			this.setPageIndex(newPage);
		}
	},
	setPageIndex: function (pageIndex){
		if(this.data){
			this.state.pageIndex = pageIndex;
			this.state.current = pageIndex;
			this.forceUpdate();
			this.data._argv = this.__onDataInitial(this.props.data);
			this.data.refresh();
		}
	},
	__renderPager: function (columns, table){
		var _columnSize = columns.length;
		if(!_columnSize){
			return null;
		}
		var _state = this.state,
			_element = null,
			_pagerProps = {
				total: _state.total,
				count: _state.count,
				current: _state.current,
				onPageChanged: this.__handlePageChanged
			},
			_Component = this.props.pager || pager.Pager;
		if(zn.is(_Component, 'string')){
			_Component = zn.path(window, _Component);
		}else if(zn.is(_Component, 'object') && _Component.component){
			_element = znui.react.createReactElement(_Component.component, zn.extend({}, _Component, _pagerProps));
		}

		if(this.props.pagerRender){
			_element = znui.react.createReactElement(this.props.pagerRender, _pagerProps);
		}

		if(!_element && _Component && zn.is(_Component, 'function')){
		 	_element = <_Component {..._pagerProps} />;
		}

		return (
			<tfoot className="table-pager">
				<tr className="pager-row">
					<td colSpan={_columnSize}>{_element}</td>
				</tr>
			</tfoot>
		);
	},
	__onDataInitial: function (data){
		var _method = data.method||'post',
			_params = {},
			_keyMaps = zn.deepAssign({
				total: "total",
				pageIndex: 'pageIndex',
				pageSize: 'pageSize',
				data: 'data'
			}, this.props.keyMaps);

		_params[_keyMaps.pageIndex] = this.state.pageIndex || 1;
		_params[_keyMaps.pageSize] = this.props.pageSize || 10;
		if(_method == 'get'){
			data = zn.deepAssign(data, {
				params: _params
			});
		}else{
			data = zn.deepAssign(data, {
				data: _params
			});
		}
		
		return this.state.keyMaps = _keyMaps, data;
	},
	__onDataCreated: function (data, table){
		this.data = data;
		this.props.onDataCreated && this.props.onDataCreated(data, table, this);
	},
	__onDataLoaded: function (data, table){
		if(this.props.zxnz){
			if(zn.is(data, 'object') && data.code != 200){
				return console.error(data.detail), false;
			}
			if(!zn.is(data, 'array')){
				return console.error("TablePager Component Data Type Error."), false;
			}
			var _data = data[0],
				_pagerCount = data[1][0].count;
			var _return = this.props.onDataLoaded && this.props.onDataLoaded(_data, table, this);
			if(_return !== false){
				table.setState({
					data: _data
				});
				this.setState({
					total: Math.ceil(_pagerCount/this.props.pageSize),
					count: _pagerCount,
					current: this.state.current,
				});
			}
		}else{
			if(zn.is(data, 'array')){
				return console.error('The data is array, but it need return object'), false;
			}
			var _data = data.data;
			var _return = this.props.onDataLoaded && this.props.onDataLoaded(_data, table, this);
			if(_return !== false){
				table.setState({
					data: _data[this.state.keyMaps.data]
				});
				this.setState({
					total: Math.ceil(_data[this.state.keyMaps.total]/this.props.pageSize),
					count: _data[this.state.keyMaps.total],
					current: _data[this.state.keyMaps.pageIndex],
				});
			}
		}

		return false;
	},
	render: function(){
		return (
			<Table {...this.props} className={znui.react.classname('zr-table-pager', this.props.className)} 
				childrenRender={this.__renderPager}
				onDataInitial={this.__onDataInitial}
				onDataCreated={this.__onDataCreated}
				onDataLoaded={this.__onDataLoaded} />
		);
	}
});