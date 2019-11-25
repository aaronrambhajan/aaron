// @flow

import React from 'react';

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
      <div className="test-work">
        <a href={this.props.route}>
          <div className="test-work-image">
            <img src={this.props.image} alt="phone" />
          </div>
        </a>

        <div className="test-work-text">
          <h1
            style={{
              margin: 0,
              textAlign: 'center',
              fontWeight: 600,
              color: this.props.color,
            }}
          >
            {this.props.title}
          </h1>
          <p
            style={{
              margin: 0,
              opacity: 0.4,
              fontWeight: 'normal',
              textAlign: 'left',
            }}
          >
            {this.props.caption}
          </p>
        </div>
      </div>
    );
  };
}
