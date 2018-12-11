import React from 'react';
import { Button } from 'reactstrap';
import ProjectCard from '../components/ProjectCard';

export default class WorkPage extends React.Component {
  render = () => {
    return (
      <div class="work">
        <h1 class="intro-hed" style={{ marginBottom: 10 }}>
          You can download my resume{' '}
          <a href="https://www.dropbox.com/s/600rbuu5ydpo8lk/Aaron-Rambhajan-Resume.pdf?dl=0">
            here
          </a>
          .
        </h1>
        <hr />

        <div class="work-list">
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              color: 'black',
            }}
          >
            <p>
              <a style={{ textAlign: 'left' }} href="/projects/ADHD">
                <strong>
                  ADHD <code>&</code> Time Management
                </strong>
              </a>
            </p>
            <p>12/14/18</p>
          </div>
          <div
            class="disabled"
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <p>
              <strong>trash.io</strong>: designing garbage
            </p>
            <p>coming soon</p>
          </div>
        </div>
      </div>
    );
  };
}
