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
            padding: 10,
            paddingBottom: 0,
          }}
        >
          <div>
            <p>
              <a href="/about">About</a> / <a href="/#work">Work</a> /{' '}
              <a href="/music">Music</a> / <a href="/contact">Contact</a>{' '}
            </p>
          </div>
          <div>
            <a
              href="/"
              style={{
                color: 'grey',
                margin: 0,
              }}
            >
              rambhajan.me
            </a>
          </div>
        </div>
        <Divider />
      </div>
    );
  };
}
