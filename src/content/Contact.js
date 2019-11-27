import React from 'react';
import styled from 'styled-components';
import { Subheader } from '../Landing';

const Subtitle = styled.div`
  font-size: 0.5em;
  font-family: monospace;
  text-transform: uppercase;
  // margin-top: 1em;
`;

export default class Contact extends React.Component {
  render = () => {
    if (!this.props.isLanding) {
      return (
        <div style={{ marginBottom: '4em' }}>
          <Subheader>Contact</Subheader>
          <ul>
            <li>
              <a
                href="https://www.dropbox.com/s/txwwykhhr39h16j/Aaron-Rambhajan-Resum%C3%A9.pdf?dl=0"
                target="_blank"
              >
                CV
              </a>
            </li>
            <li>
              <a
                href="https://www.dropbox.com/s/txwwykhhr39h16j/Aaron-Rambhajan-Resum%C3%A9.pdf?dl=0"
                target="_blank"
              >
                Resumé
              </a>
            </li>
            <li>
              <a href="mailto:aaronrambhajan@gmail.com">Message</a>
            </li>

            <li>
              <a href="https://www.linkedin.com/in/arambhajan" target="_blank">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/aaronrambhajan" target="_blank">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://soundcloud.com/rambhajan" target="_blank">
                SoundCloud
              </a>
            </li>
            <li>
              <a href="/">
                <Subtitle>[more]</Subtitle>
              </a>
            </li>
          </ul>
        </div>
      );
    }

    return (
      <div style={{ marginBottom: '4em' }}>
        <Subheader>Contact</Subheader>
        <ul>
          <li>
            <a
              href="https://www.dropbox.com/s/txwwykhhr39h16j/Aaron-Rambhajan-Resum%C3%A9.pdf?dl=0"
              target="_blank"
            >
              Resumé
            </a>
          </li>
          <li>
            <a href="mailto:aaronrambhajan@gmail.com">Message</a>
          </li>
          <li>
            <a href="/contact">...</a>
          </li>
        </ul>
      </div>
    );
  };
}
