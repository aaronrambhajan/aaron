// @flow

import React from 'react';

export default class ProjectHover extends React.Component {
  props: {
    header: string,
    description: string,
    link: string,
  };

  render = () => {
    return (
      <div>
        <a href={this.props.link}>
          <div
            className="home-hover"
            style={{
              fontWeight: 600,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div style={{ maxWidth: '75%' }}>
              <h1 style={{ fontSize: '1.35em' }}>{this.props.header}</h1>
              <p
                style={{
                  fontSize: '0.8em',
                  fontFamily: 'times',
                  opacity: 0.8,
                  fontWeight: 100,
                }}
              >
                {this.props.description}
              </p>
            </div>
            {this.props.link && (
              <div
                className="arrow"
                style={{
                  fontFamily:
                    'BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, sans-serif, -apple-system',
                  fontSize: '200%',
                  marginLeft: '1em',
                }}
              >
                ↗
              </div>
            )}
          </div>
        </a>
      </div>
    );
  };
}
