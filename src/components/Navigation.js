import React from 'react';

export default class Navigation extends React.Component {
  render = () => {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
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
            {/* <a href="/writing">
            <span>Writing</span>
          </a>{' '}
          /{' '} */}
            <a href="/about">
              <span>About</span>
            </a>{' '}
            /{' '}
            <a href="/contact">
              <span>Contact</span>
            </a>{' '}
            <a className="thoughts" href="/thoughts">
              <span>/ Thoughts</span>
            </a>
          </p>
        </div>
        <div style={{ fontWeight: '600', color: 'grey' }}>AR</div>
      </div>
    );
  };
}
