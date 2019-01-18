// @flow

import React from 'react';
import { Button, Badge, Alert } from 'reactstrap';
import ImageWide from '../components/ImageWide';
import Chevron from '../images/Chevron';
import { colors, changeOpacity } from '../colors';

export default class ProjectCard extends React.Component {
  props: {
    href: String,
    text: Object, // .title, .text, .info {date, context, status}
    image: Object, // .img, .alt, .caption
    labels: Array,
  };

  render = () => {
    return (
      <button class="project-card">
        <a href={this.props.href}>
          {/* title */}
          <div>
            <h1
              class="intro-hed"
              style={{ color: 'black', fontWeight: 600, marginBottom: 0 }}
            >
              {this.props.text.title}
            </h1>
            <p
              style={{
                color: changeOpacity(colors.SECONDARY, '0.5'),
                fontSize: '0.6em',
                margin: 0,
                marginBottom: 10,
                fontFamily: 'times',
                fontWeight: 100,
              }}
            >
              {this.props.text.info}
            </p>
          </div>

          {!!this.props.text.description && this.props.text.description}

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
              alignItems: 'center',
            }}
          >
            <div class="skill-group">
              {this.props.labels.map((label) => {
                return ButtonGroupings(label);
              })}
            </div>

            {/* <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          > */}
            {/* <Chevron
              size={20}
              colour={colors.BLUE_SECONDARY}
              style={{ marginRight: '5%' }}
            /> */}
            {/* </div> */}
          </div>
        </a>
      </button>
    );
  };
}

export function ButtonGroupings(label) {
  const buttonStyle = {
    fontSize: '0.6em',
    padding: 8,
    fontWeight: 400,
    marginRight: 10,
    opacity: 0.6,
    borderRadius: 15,
    backgroundColor: 'transparent',
  };

  return (
    <Button outline color="secondary" size="sm" style={buttonStyle}>
      {label}
    </Button>
  );
}
