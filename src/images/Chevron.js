import React from 'react';

export default class Twitter extends React.Component {
  props: {
    size: Number,
    colour: string,
    style: Object,
  };
  render = () => {
    return (
      <svg
        width={this.props.size}
        height={this.props.size}
        viewBox="0 0 24 24"
        fill={this.props.colour}
        style={{ ...this.props.style }}
      >
        <path d="M10.477 0h-8.977l12.024 12-12.024 12h8.977l12.023-12z" />
      </svg>
    );
  };
}
