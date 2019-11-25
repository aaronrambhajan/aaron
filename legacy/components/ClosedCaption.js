// @flow

import React from 'react';

export default class ClosedCaption extends React.Component {
  props: {
    text: string,
  };

  render = () => {
    return (
      <div
        className="closed-caption"
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <p style={{ textAlign: 'center', fontSize: '200%', color: 'white' }}>
          <span style={{ backgroundColor: 'black' }}>
            {this.props.text} I'm <span className="rainbow">fixed</span>.
          </span>
        </p>
      </div>
    );
  };
}
