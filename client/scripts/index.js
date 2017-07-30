'use strict';

require("../styles/index.styl");

import React from 'react'
import { render } from 'react-dom'
import ReactIntense from '../../lib/ReactIntense'

const DemoImages = [
{
  caption: 'An annual month-long festival in Kyoto',
  classes: 'demo-image first',
  src: require("../img/horse.jpg"),
  title: 'Gion Matsuri',
}]

class IntenseDemos extends React.Component {
  _renderImages (images) {
    return images.map(
      ({ caption, classes, src, thumbnailSrc, title, vertical }) => (
        <ReactIntense
          caption={caption}
          classes={classes}
          key={title}
          src={src}
          title={title}
          vertical={vertical}
        />
      )
    )
  }

  render() {
    return (
      <div id="react-root">
        {this._renderImages(DemoImages)}
      </div>
    );
  }
}

render(<IntenseDemos />, document.getElementById('demos'));
document.body.setAttribute("style","display:block");
