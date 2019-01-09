// @flow

import React from 'react';
import { Button } from 'reactstrap';
import ImageWide from '../components/ImageWide';
import Chevron from '../images/Chevron.svg';

export default class ProjectCard extends React.Component {
  props: {
    href: String,
    text: Object, // .title, .text
    image: Object, // .img, .alt, .caption
    labels: Array,
  };

  render = () => {
    return (
      <div class="project-card">
        <h1
          class="intro-hed"
          style={{ color: 'black', fontWeight: 600, marginBottom: 0 }}
        >
          {this.props.text.title}
        </h1>

        {this.props.text.description}

        {!!this.props.image && (
          <ImageWide
            image={this.props.image.img}
            alt={this.props.image.alt}
            caption={{ text: this.props.image.caption }}
            style={{ maxHeight: 250, width: 'auto' }}
          />
        )}

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
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <a href={this.props.href} style={{ fontSize: '10' }}>
              See more
            </a>
            <div style={{ marginRight: 10 }} />
            <img
              src={Chevron}
              alt="Chevron"
              style={{ height: 10, width: 10, fill: 'blue' }}
            />
          </div>
        </div>
      </div>
    );
  };
}

export function ButtonGroupings(label) {
  // colors:
  //  primary, secondary, success, info, danger, warning
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
    case 'Experimental Design':
      return (
        <Button disabled color="primary" size="sm" style={{ marginRight: 10 }}>
          Experimental Design
        </Button>
      );
    case 'Cognitive Psychology':
      return (
        <Button disabled color="success" size="sm" style={{ marginRight: 10 }}>
          Cognitive Psychology
        </Button>
      );
    case 'Programming':
      return (
        <Button
          disabled
          color="secondary"
          size="sm"
          style={{ marginRight: 10 }}
        >
          Programming
        </Button>
      );
    default:
      return;
  }
}
