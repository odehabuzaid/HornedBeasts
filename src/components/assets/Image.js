import React, { Component } from 'react';

export default class Image extends Component {
  render() {
    const {title,imgSrc} = this.props;
    return (
      <img
        className="img-fluid"
        src = {imgSrc}
        alt = {title}
      />
    );
  }
}
