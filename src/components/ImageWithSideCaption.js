// @flow

import React from 'react';

export default class ImageWithSideCaption extends React.Component {
  props: {
    text: string,
    image: image,
    alt: string,
  };

  render = () => {
    return (
      <div style={{ marginTop: 20, marginBottom: 20 }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <div
            class="with-side-caption"
            style={{
              maxHeight: 200,
              maxWidth: 200,
            }}
          >
            <img src={this.props.image} alt={this.props.alt} />
          </div>

          <div style={{ marginLeft: 20 }}>
            <p>{this.props.text}</p>
          </div>
        </div>
      </div>
    );
  };
}
