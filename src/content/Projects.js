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
              <a href="/projects/scraper">Image Scraper</a>
            </li>
            <li>
              <a
                href="/"
                style={{
                  textDecoration: 'none',
                }}
              >
                ...
              </a>
            </li>
          </ul>
          <Subheader>UX Research</Subheader>
          <ul>
            <li>
              <a href="/projects/quan">Quan</a>
            </li>
            <li style={{ color: 'lightgrey' }}>10Four</li>
            <li style={{ color: 'lightgrey' }}>TTC IA</li>
          </ul>
        </Container>
      );
    }

    return (
      <Container>
        <Subheader>Projects</Subheader>
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
