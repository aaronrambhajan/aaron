// @flow

import React from 'react';
import { Button } from 'reactstrap';

export default class ProjectTitle extends React.Component {
  props: {
    toggle: Function,
    title: string,
    titleColor: string,
    backgroundColor: string,
  };

  render = () => {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: this.props.backgroundColor,
          marginBottom: 10,
        }}
      >
        <h2
          style={{
            color: this.props.titleColor,
          }}
        >
          {this.props.title}
          {/* {this.props.title.text} */}
        </h2>
        <Button
          onClick={this.props.toggle}
          color="secondary"
          size="sm"
          style={{ marginRight: 10 }}
        >
          Read
        </Button>
      </div>
    );
  };
}
