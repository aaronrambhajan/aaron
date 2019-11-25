import React from 'react';
import { Subheader } from '../Landing';

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
