// @flow

import React from 'react';
import { Sticky, StickyContainer } from 'react-sticky';
import { colors, changeOpacity } from '../colors';
import Divider from '../components/Divider';

export default class Header extends React.Component {
  render = () => {
    return (
      <StickyContainer>
        <div id="methodology-header" style={{ height: '100vh' }}>
          <Sticky>
            {({ style }) => (
              <div style={style}>
                <Divider size={0.33} />
                <div
                  style={{
                    fontWeight: 'normal',
                    color: changeOpacity(colors.SECONDARY, '0.7'),
                  }}
                >
                  <h4>{this.props.title} –</h4>
                </div>
                <Divider size={0.33} />
                <div>
                  <h2
                    style={{
                      fontWeight: 100,
                      fontSize: '200%',
                      margin: 0,
                    }}
                  >
                    <span style={{ backgroundColor: 'black', color: 'white' }}>
                      {this.props.description}
                    </span>
                  </h2>
                </div>
              </div>
            )}
          </Sticky>
          {this.props.summary && (
            <div
              style={{
                width: '100%',
                fontSize: '80%',
                backgroundColor: changeOpacity(colors.SECONDARY, '0.05'),
                color: changeOpacity(colors.SECONDARY, '0.6'),
                padding: 20,
                paddingTop: 40,
                paddingBottom: 40,
                marginTop: 20,
                fontFamily: 'helvetica',
              }}
            >
              <p style={{ fontFamily: 'helvetica' }}>{this.props.summary}</p>
            </div>
          )}
        </div>
      </StickyContainer>
    );
  };
}
