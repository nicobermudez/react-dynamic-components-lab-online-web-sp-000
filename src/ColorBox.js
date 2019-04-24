import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    return (
      <div className="color-box" style={{opacity: 2}}>
        {
          let opacity = this.props.opacity;

          if(opacity >= 0.2) {
            return <ColorBox opacity={opacity - 0.1} />
          } else {
            return null
          }
        }
      </div>
    )
  }

}
