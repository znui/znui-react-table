var React = znui.React || require('react');
var Table = require('./Table');
var pager = require('znui-react-pager');

module.exports = React.createClass({
	displayName:'ZRTablePager',
	getInitialState: function (){
		return {
			total: 0,
			count: 0,
			current: 1,
			pageSize: 10
		};
	},
	__handlePageChanged: function (page){
		this.state.current = page;
		if(this.props.data){
			this.props.data.overwriteArgv({

			});
		}
	},
	__renderPager: function (columns, table){
		var _columnSize = columns.length;
		if(!_columnSize){
			return null;
		}
		var _props = this.props,
			_pagerProps = {
				tablePager: this,
				total: _props.total,
				count: _props.count,
				current: _props.current,
				onPageChanged: this.__handlePageChanged
			},
			_Component = _props.component || pager.SimplePager;
		if(zn.is(_Component, 'string')){
			_Component = zn.path(window, _Component);
		}

		if(_pagerProps.total == null) {
			_pagerProps.total = this.state.total;
		}

		if(_pagerProps.count == null) {
			_pagerProps.count = this.state.count;
		}

		if(_pagerProps.current == null) {
			_pagerProps.current = this.state.current || 1;
		}

		var _element = znui.react.createReactElement(this.props.pagerRender, _pagerProps);

		if(!_element){
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
	render: function(){
		this.props.onData && this.props.onData(this.props.data, this);
		return (
			<Table {...this.props} className={znui.react.classname('zr-table-pager', this.props.className)} childrenRender={this.__renderPager} />
		);
	}
});