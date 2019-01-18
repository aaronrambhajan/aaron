// @flow

import React from 'react';

export default class Divider extends React.Component {
  props: {
    size: Number,
  };

  render = () => {
    return (
      <div
        style={{ height: !!this.props.size ? `${this.props.size}em` : '1em' }}
      />
    );
  };
}
