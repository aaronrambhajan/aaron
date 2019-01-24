// @flow

import React from 'react';

export default class Divider extends React.Component {
  props: {
    size: Number,
    color: String,
  };

  render = () => {
    return (
      <div
        style={{
          height: !!this.props.size ? this.props.size * 25 : 25,
          // height: !!this.props.size ? `${this.props.size}em` : '1em',
          backgroundColor: !!this.props.color ? this.props.color : '',
        }}
      />
    );
  };
}
