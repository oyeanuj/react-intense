import React from 'react'

require('./ReactIntense.css')
require('./polyfills.js')
require('./loader.css')

const propTypes = {
	onClick: React.PropTypes.func,
	classNames: React.PropTypes.string,
	src:	React.PropTypes.string.isRequired,
	loader: React.PropTypes.string,
}

export default class ReactIntenseThumbnail extends React.Component {

	constructor (props) {
		super(props);
	    this._onClick = this._onClick.bind(this);
		this.state = {
			showLoader: false
		};
	}

	_onClick (e) {
		this.props.onClick();
		this.setState({ showLoader: true });
	}

  _renderLoader (loaderClassName, isVisible) {
    const doublyNestedDiv = <div><div></div></div>
	const { showLoader } = this.state;

    return showLoader && loaderClassName ? (
      <div className={loaderClassName + ' ri-loader'}>
        {[...Array(8)].map((e, i) => doublyNestedDiv)}
      </div>
    ) : <div/>
  }


	render() {
		const { src, classNames, loader } = this.props;

		return (
			<a
			  className={classNames}
			  onClick={this._onClick}
			  ref='thumbnail'
			  style={{backgroundImage:'url('+ (src) +')'}}>
			  {this._renderLoader(loader)}
			</a>
		)
	}

}
