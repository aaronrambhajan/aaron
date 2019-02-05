import React from 'react';
import Divider from '../components/Divider';

export default class Navigation extends React.Component {
  render = () => {
    const marginDistance = '3%';

    return (
      <div>
        <div className="navigation">
          <div
            className="navigation-text"
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              padding: 20,
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                maxWidth: '50%',
              }}
            >
              <div>
                <a href="/#research">Work</a>
              </div>
              <div
                className="nav-margin"
                style={{
                  // marginLeft: marginDistance,
                  // marginRight: marginDistance,
                  opacity: 0.5,
                }}
              >
                /
              </div>
              <a href="/music">Music</a>
              <div
                style={{
                  marginLeft: marginDistance,
                  marginRight: marginDistance,
                  opacity: 0.5,
                }}
              >
                /
              </div>

              <a href="/about">About</a>
              <div
                style={{
                  marginLeft: marginDistance,
                  marginRight: marginDistance,
                  opacity: 0.5,
                }}
              >
                /
              </div>
              <a href="https://www.dropbox.com/s/3x0ksm3xb1d3p5e/Aaron-Rambhajan-Resume.pdf?dl=0">
                Resumé
              </a>
            </div>
            <div>
              <a href="/">
                rambhajan.me{' '}
                <span role="img" style={{ marginLeft: 5 }}>
                  🏠
                </span>
              </a>
            </div>
          </div>
        </div>

        <Divider />
      </div>
    );
  };
}
