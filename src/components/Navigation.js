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
            <a href="/">Home</a> / <a href="/work">Work</a> /{' '}
            <a href="/about">About</a> / <a href="/contact">Contact</a>{' '}
            <a className="thoughts" href="/thoughts">
              / Thoughts
            </a>
          </p>
        </div>
        <div style={{ color: 'grey' }}>AR</div>
      </div>
    );
  };
}
