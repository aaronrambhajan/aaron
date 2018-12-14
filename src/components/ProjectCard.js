// @flow

import React from 'react';
import { Button, Alert } from 'reactstrap';

export default class ProjectCard extends React.Component {
  props: {
    title: string,
    description: string,
    labels: Array,
  };
  render = () => {
    return (
      <div class="projects-header" style={{ marginBottom: 20 }}>
        <h1
          class="intro-hed"
          style={{ color: 'black', fontWeight: 600, marginBottom: 0 }}
        >
          {this.props.title}
        </h1>

        <p>{this.props.description}</p>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <div class="skill-group">
            {this.props.labels.map((label) => {
              return ButtonGroupings(label);
            })}
          </div>
          <div>
            <Button color="primary" size="sm">
              See <strong>more</strong>
            </Button>
          </div>
        </div>
      </div>
    );
  };
}

export function ButtonGroupings(label) {
  switch (label) {
    case 'User Research':
      return (
        <Button disabled color="danger" size="sm" style={{ marginRight: 10 }}>
          User Research
        </Button>
      );
      break;
    case 'Data Analysis':
      return (
        <Button disabled color="info" size="sm" style={{ marginRight: 10 }}>
          Data Analysis
        </Button>
      );
      break;
    case 'UX/UI Design':
      return (
        <Button disabled color="warning" size="sm" style={{ marginRight: 10 }}>
          UX/UI Design
        </Button>
      );
  }
}
