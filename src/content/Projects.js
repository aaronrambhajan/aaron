import React from 'react';
import styled from 'styled-components';
import { Subheader } from '../Landing';

const Container = styled.div`
  margin-bottom: 4em;
`;

export default class Projects extends React.Component {
  render = () => {
    if (!this.props.isLanding) {
      return (
        <Container>
          <Subheader>Code</Subheader>
          <ul>
            <li style={{ color: 'lightgrey' }}>Heartbeat Synthesis</li>
            <li style={{ color: 'lightgrey' }}>Staircasing Experiment</li>
            <li style={{ color: 'lightgrey' }}>@memories</li>
            <li style={{ color: 'lightgrey' }}>Image Scraper</li>
          </ul>
          <Subheader>UX Research</Subheader>
          <ul>
            <li style={{ color: 'lightgrey' }}>Quan</li>
            <li style={{ color: 'lightgrey' }}>10Four</li>
            <li style={{ color: 'lightgrey' }}>TTC Information Architecture</li>
          </ul>
          <Subheader>Augmented Reality</Subheader>
          <ul>
            <li>
              <a href="/projects/arr">Night Market AR</a>
            </li>
            <li style={{ color: 'lightgrey' }}>SoundClout</li>
            <li style={{ color: 'lightgrey' }}>Measure</li>
          </ul>
        </Container>
      );
    }

    return (
      <Container>
        <Subheader>Work</Subheader>
        <ul>
          <li>
            <a href="/projects/synthesis">Heartbeat Synthesis</a>
          </li>
          <li>
            <a href="/projects/staircase">Staircasing Experiment</a>
          </li>
          <li>
            <a href="/projects/memories">@memories</a>
          </li>
          <li>
            <a
              href="/projects"
              style={{
                textDecoration: 'none',
              }}
            >
              ...
            </a>
          </li>
        </ul>
      </Container>
    );
  };
}
