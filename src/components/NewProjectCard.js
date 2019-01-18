// @flow

import React from 'react';
import ImageWide from '../components/ImageWide';
import Divider from '../components/Divider';

export default class NewProjectCard extends React.Component {
  props: {
    title: string,
    caption: string,
    roles: string,
    image: image,
    color: string,
    route: string,
  };

  render = () => {
    return (
      <a href={this.props.route}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div style={{ minHeight: 250, minWidth: 250 }}>
            <div
              style={{
                backgroundColor: this.props.color,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',

                padding: 20,
                margin: 0,
              }}
            >
              <ImageWide
                image={this.props.image}
                alt="phone"
                style={{ maxWidth: '75%', height: 'auto' }}
              />
            </div>

            <Divider size={0.5} />

            <div style={{ maxHeight: 400, overflow: 'hidden' }}>
              <p
                style={{
                  // fontFamily: 'times',
                  fontSize: '0.8em',
                  color: 'grey',
                  marginBottom: 0,
                  fontWeight: 100,
                }}
              >
                <em>{this.props.roles}</em>
              </p>
              <Divider size={0.5} />
              <h1
                className="intro-hed"
                style={{ marginTop: 0, color: 'black' }}
              >
                <span style={{ fontWeight: 600, color: this.props.color }}>
                  {this.props.title}
                </span>{' '}
                – {this.props.caption}.
              </h1>
            </div>
          </div>
        </div>
      </a>
    );
  };
}
