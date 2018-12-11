import React from 'react';

export default class WorkPage extends React.Component {
  render = () => {
    return (
      <div>
        <h1 class="intro-hed">
          You can download my resume{' '}
          <a href="https://www.dropbox.com/s/600rbuu5ydpo8lk/Aaron-Rambhajan-Resume.pdf?dl=0">
            here
          </a>
          .
        </h1>
        <p>
          A project about <a href="/projects/ADHD">ADHD</a>.
        </p>
      </div>
    );
  };
}
