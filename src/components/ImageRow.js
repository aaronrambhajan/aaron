// @flow

import React from 'react';

export default class ImageRows extends React.Component {
  props: {
    img1: Component,
    img1txt: string,
    img2: Component,
    img2txt: string,
    img3: Component,
    img3txt: string,
  };

  render = () => {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '1em',
            marginBottom: '1em',
          }}
        >
          <this.props.img1 size={90} />
          <p
            style={{
              color: 'gray',
              marginTop: 10,
              fontWeight: 600,
              marginBottom: 0,
            }}
          >
            {this.props.img1txt}
          </p>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '1em',
            marginBottom: '1em',
          }}
        >
          <this.props.img2 size={90} />
          <p
            style={{
              color: 'gray',
              marginTop: 10,
              fontWeight: 600,
              marginBottom: 0,
            }}
          >
            {this.props.img2txt}
          </p>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '1em',
            marginBottom: '1em',
          }}
        >
          <this.props.img3 size={90} />
          <p
            style={{
              color: 'gray',
              marginTop: 10,
              fontWeight: 600,
              marginBottom: 0,
            }}
          >
            {this.props.img3txt}
          </p>
        </div>
      </div>
    );
  };
}