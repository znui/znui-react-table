var React = znui.React || require('react');

module.exports = React.createClass({
	displayName:'ZRTBodyEmpty',
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
	render: function(){
		return (
			<tbody className={znui.react.classname("zr-table-tbody-empty", this.props.className)} style={znui.react.style(this.props.style)}>
				{ this.__renderEmpty() }
			</tbody>
		);
	}
});
