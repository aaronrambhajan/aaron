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
          backgroundColor: 'white',
        }}
      >
        <div>
          <p
          // style={{
          //   display: 'flex',
          //   flexDirection: 'column',
          //   justifyContent: 'space-between',
          //   alignItems: 'center',
          // }}
          >
            <a href="/about">About</a> / <a href="/work">Work</a> /{' '}
            <a href="/music">Music</a> / <a href="/contact">Contact</a>{' '}
          </p>
        </div>
        <div>
          <a
            href="/"
            style={{
              backgroundColor: 'white',
              color: 'grey',
            }}
          >
            rambhajan.me
          </a>
        </div>
      </div>
    );
  };
}
