// @flow

import React from 'react';
import ImageWide from '../components/ImageWide';
import Divider from '../components/Divider';
import Arrow from '../images/arrow.svg';

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
          className="project-card"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {/* <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            > */}
            <ImageWide
              image={this.props.image}
              alt="phone"
              style={{
                maxHeight: 400,
                maxWidth: 400,
                width: '90%',
                minHeight: 250,
                minWidth: 250,
                boxShadow: '0px 3px 10px 0px rgba(0,0,0,0.5)',
              }}
            />
            {/* <img
                src={Arrow}
                style={{
                  opacity: 0.5,
                  width: 50,
                  height: 50,
                  zIndex: 1000,
                }}
              />
            </div> */}

            <Divider size={1} />

            <div className="project-card-text">
              <h1
                className="intro-hed"
                style={{
                  margin: 0,
                  textAlign: 'center',
                  fontWeight: 600,
                  color: this.props.color,
                }}
              >
                {this.props.title}
              </h1>
              <Divider size={0.5} />
              <h1
                className="intro-hed"
                style={{
                  margin: 0,
                  opacity: 0.3,
                  fontWeight: 'normal',
                  textAlign: 'left',
                }}
              >
                {this.props.caption}
              </h1>
            </div>
          </div>
        </div>
      </a>
    );
  };
}
