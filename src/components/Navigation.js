import React from 'react';
import Divider from '../components/Divider';

export default class Navigation extends React.Component {
  render = () => {
    return (
      <div>
        <div
          class="navigation"
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
            }}
          >
            <div>
              <a href="/about">About</a>
            </div>
            <div style={{ marginLeft: '3%', marginRight: '3%', opacity: 0.5 }}>
              /
            </div>
            <a href="/#work">Work</a>
            <div style={{ marginLeft: '3%', marginRight: '3%', opacity: 0.5 }}>
              /
            </div>
            <a href="/music">Music</a>
            <div style={{ marginLeft: '3%', marginRight: '3%', opacity: 0.5 }}>
              /
            </div>
            <a href="/contact">Contact</a>{' '}
          </div>
          <div>
            <a href="/">rambhajan.me</a>
          </div>
        </div>
        <Divider />
      </div>
    );
  };
}
