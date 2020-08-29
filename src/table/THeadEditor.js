var React = znui.React || require('react');

module.exports = React.createClass({
	displayName:'ZRTHeadEditor',
	getInitialState: function (){
		return {
			sort: 'faSort',
		}
	},
	__iconClick: function (){
		if(this.state.sort == 'faSort'){
			this.state.sort = 'faSortAlphaDown';
		} else if(this.state.sort == 'faSortAlphaDown'){
			this.state.sort = 'faSortAlphaUp';
		} else if(this.state.sort == 'faSortAlphaUp'){
			this.state.sort = 'faSortAlphaDown';
		}
		this.forceUpdate();
		this.props.onSort && this.props.onSort(this.state.sort);
	},
	__renderIcon: function (){
		switch(this.state.sort){
			case "faSort":
				return <svg onClick={this.__iconClick} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sort" className="icon svg-inline--fa fa-sort fa-w-10 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"></path></svg>;
			case "faSortAlphaDown":
				return <svg onClick={this.__iconClick} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sort-alpha-down" className="icon svg-inline--fa fa-sort-alpha-down fa-w-14 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M176 352h-48V48a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v304H16c-14.19 0-21.36 17.24-11.29 27.31l80 96a16 16 0 0 0 22.62 0l80-96C197.35 369.26 190.22 352 176 352zm240-64H288a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h56l-61.26 70.45A32 32 0 0 0 272 446.37V464a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-56l61.26-70.45A32 32 0 0 0 432 321.63V304a16 16 0 0 0-16-16zm31.06-85.38l-59.27-160A16 16 0 0 0 372.72 32h-41.44a16 16 0 0 0-15.07 10.62l-59.27 160A16 16 0 0 0 272 224h24.83a16 16 0 0 0 15.23-11.08l4.42-12.92h71l4.41 12.92A16 16 0 0 0 407.16 224H432a16 16 0 0 0 15.06-21.38zM335.61 144L352 96l16.39 48z"></path></svg>;
			case "faSortAlphaUp":
				return <svg onClick={this.__iconClick} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sort-alpha-up" className="icon svg-inline--fa fa-sort-alpha-up fa-w-14 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M16 160h48v304a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V160h48c14.21 0 21.38-17.24 11.31-27.31l-80-96a16 16 0 0 0-22.62 0l-80 96C-5.35 142.74 1.78 160 16 160zm400 128H288a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h56l-61.26 70.45A32 32 0 0 0 272 446.37V464a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-56l61.26-70.45A32 32 0 0 0 432 321.63V304a16 16 0 0 0-16-16zm31.06-85.38l-59.27-160A16 16 0 0 0 372.72 32h-41.44a16 16 0 0 0-15.07 10.62l-59.27 160A16 16 0 0 0 272 224h24.83a16 16 0 0 0 15.23-11.08l4.42-12.92h71l4.41 12.92A16 16 0 0 0 407.16 224H432a16 16 0 0 0 15.06-21.38zM335.61 144L352 96l16.39 48z"></path></svg>;
		}	
	},
	render:function(){
		return (
			<div className={znui.react.classname('zr-thead-sort', this.props.className)} style={this.props.style}>
				{this.__renderIcon()}
			</div>
		);
	}
});
