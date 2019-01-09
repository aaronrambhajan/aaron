import React from 'react';

export default class Navigation extends React.Component {
  render = () => {
    return (
      <div
        class="navigation"
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <p>
            <a href="/work">Work</a> / <a href="/about">About</a> /{' '}
            <a href="/contact">Contact</a>{' '}
          </p>
        </div>
        <div>
          <a href="/" style={{ backgroundColor: 'white', color: 'grey' }}>
            rambhajan.me
          </a>
        </div>
      </div>
    );
  };
}
