// @flow

import React from 'react';
import { Button } from 'reactstrap';

export default class ProjectHeader extends React.Component {
  props: {
    toggle: Function,
    title: string,
    titleColor: boolean,
  };
  state: {
    collapse: boolean,
  };
  state = {
    collapse: false,
  };

  render = () => {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <h2 style={{ color: this.props.titleColor }}>{this.props.title}</h2>
        <Button
          onClick={this.props.toggle}
          color="secondary"
          size="sm"
          style={{ marginRight: 10 }}
        >
          See more
        </Button>
      </div>
    );
  };
}
