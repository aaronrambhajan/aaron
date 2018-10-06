import React from 'react';

export default class Navigation extends React.Component {
  render = () => {
    return (
      <div>
        <p className="hed">
          <a href="/">
            <span>Home</span>
          </a>{' '}
          /{' '}
          <a href="/work">
            <span>Work</span>
          </a>{' '}
          /{' '}
          <a href="/writing">
            <span>Writing</span>
          </a>{' '}
          /{' '}
          <a href="/contact">
            <span>Contact</span>
          </a>
        </p>
      </div>
    );
  };
}
