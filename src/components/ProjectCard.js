// @flow

import React from 'react';
import { Button } from 'reactstrap';
import ImageWide from '../components/ImageWide';

export default class ProjectCard extends React.Component {
  props: {
    href: String,
    text: Object, // .title, .text
    image: Object, // .img, .alt, .caption
    labels: Array,
  };

  render = () => {
    return (
      <div class="project-card" style={{ marginBottom: 20 }}>
        <h1
          class="intro-hed"
          style={{ color: 'black', fontWeight: 600, marginBottom: 0 }}
        >
          {this.props.text.title}
        </h1>

        <p>{this.props.text.description}</p>

        <ImageWide
          image={this.props.image.img}
          alt={this.props.image.alt}
          caption={this.props.image.caption}
          style={{ maxHeight: 250, width: 'auto' }}
        />

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
              <a href={this.props.href}>
                See <strong>more</strong>
              </a>
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
    case 'Data Analysis':
      return (
        <Button disabled color="info" size="sm" style={{ marginRight: 10 }}>
          Data Analysis
        </Button>
      );
    case 'UX/UI Design':
      return (
        <Button disabled color="warning" size="sm" style={{ marginRight: 10 }}>
          UX/UI Design
        </Button>
      );
    default:
      return;
  }
}
