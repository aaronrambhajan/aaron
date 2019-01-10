// @flow

import React from 'react';

export default class ImageWide extends React.Component {
  props: {
    image: image,
    alt: string,
    caption: Object,
    style: Object,
  };
  render = () => {
    return (
      <div
        class="image-wide"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 10,
          marginBottom: 0,
        }}
      >
        <div>
          <img
            src={this.props.image}
            alt={this.props.alt}
            style={{ ...this.props.style }}
          />
        </div>
        <p
          style={{
            marginTop: 10,
            fontSize: '0.7em',
            color: 'grey',
          }}
        >
          {!!this.props.caption ? this.props.caption.text : ''}
        </p>
      </div>
    );
  };
}
