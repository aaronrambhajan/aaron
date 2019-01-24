// @flow

import React from 'react';

export default class HomeHeader extends React.Component {
  props: {
    header: string,
    description: string,
  };

  render = () => {
    return (
      <div
        style={{
          fontWeight: 600,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div style={{ maxWidth: '75%' }}>
          <h1 style={{ fontSize: '1.35em' }}>{this.props.header}—</h1>
          <p
            style={{
              fontSize: '0.8em',
              fontFamily: 'times',
              opacity: 0.8,
              fontWeight: 100,
            }}
          >
            {this.props.description}
          </p>
        </div>
      </div>
    );
  };
}
