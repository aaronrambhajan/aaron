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
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
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
              // caption={{
              //   text: (
              //     <div
              //       style={{
              //         display: 'flex',
              //         flexDirection: 'row',
              //         justifyContent: 'space-between',
              //         alignItems: 'center',
              //         width: '100%  ',
              //       }}
              //     >
              //       <div>@{this.props.org}</div>
              //       <div>supervised by mikey</div>
              //     </div>
              //   ),
              // }}
            />

            <Divider size={1} />

            <div className="project-card">
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
                  opacity: 0.5,
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
