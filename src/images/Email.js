import React from 'react';

export default class Email extends React.Component {
  props: {
    size: Number,
  };
  render = () => {
    return (
      <svg
        style={{ marginLeft: 10, marginRight: 10 }}
        width={this.props.size}
        height={this.props.size}
        viewBox="0 0 24 24"
      >
        <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" />
      </svg>
    );
  };
}
