// @flow

import React from 'react';

export default class ProjectSubheading extends React.Component {
  props: {
    text: string,
  };
  render = () => {
    return (
      <h3 style={{ marginTop: 10, marginBottom: 5, fontWeight: 700 }}>
        {this.props.text}
      </h3>
    );
  };
}
