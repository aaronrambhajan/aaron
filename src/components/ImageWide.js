// @flow

import React from 'react';

export default class ImageWide extends React.Component {
  props: {
    image: image,
    alt: string,
    caption: string,
    style: Object,
  };
  render = () => {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20,
          marginBottom: 20,
        }}
      >
        <div>
          <img
            src={this.props.image}
            alt={this.props.alt}
            style={{ ...this.props.style }}
          />
        </div>
        <p style={{ marginTop: 10, fontWeight: 600, color: 'grey' }}>
          {!!this.props.caption ? this.props.caption : ''}
        </p>
      </div>
    );
  };
}
