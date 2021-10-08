var React = znui.React || require('react');
var TablePager = require('./TablePager');
var selector = require('znui-react-selector');
module.exports = React.createClass({
	displayName: 'ZRPopupTable',
	getDefaultProps: function (){
		return {
			textKey: 'zxnz_Label',
			valueKey: 'zxnz_UUID'
		};
	},
    getInitialState: function(){
		return {
			text: this.props.text,
            value: this.props.value
		};
	},
    getText: function (){
        return this.state.text;
    },
    setText: function (text){
        this.setState({
            text: text
        });
    },
	getValue: function (){
        return this.state.value;
    },
    setValue: function (value){
        this.setState({
            value: value
        });
    },
    __onRowClick: function (event, dropdownEvent){
        var _data = event.data.trow.props.data;
        event.data = _data;
        event.value = _data[this.props.valueKey];
		event.text = _data[this.props.textKey];
        dropdownEvent.popupSelect.setData(event.value, event.text);
        dropdownEvent.dropdown.closePopover();
        this.setValue(event.value);
        this.props.onChange && this.props.onChange(event, dropdownEvent);
    },
	__popupRender: function (dropdownEvent){
		return <TablePager
            zxnz={true}
            colgroup={{}}
            cellPadding={5}
            className="zr-table-class-normal"
            fixed={true}
            thead={{
                filter: true
            }}
            tfilter={{}}
            tbody={{
                onRowClick: (event)=>this.__onRowClick(event, dropdownEvent)
            }}
            pageIndex={1}
            pageSize={5} {...this.props} />;
	},
	render: function(){
		return (
			<selector.PopupSelect className={znui.react.classname('zr-table-popup-table', this.props.className)} style={this.props.style} popupRender={this.__popupRender} />
		);
	}
});