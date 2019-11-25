import React from 'react';
import styled from 'styled-components';
import GitHub from '../images/icons/GitHub';
import LinkedIn from '../images/icons/LinkedIn';
import Email from '../images/icons/Email';
import CV from '../images/icons/CV';
import { colors, changeOpacity } from '../colors';

const Container = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`;

export default class Footer extends React.Component {
  render = () => {
    return (
      <Container>
        {/* <p> */}
        <a href="/" style={{ color: '#9900ff' }}>
          Aaron Rambhajan
        </a>
        {/* <span style={{ opacity: 0.2 }}>
            {' '}
            is passionate about understanding how people interact with the world
            through technology. Inspired by empowering creators, entrepreneurs,
            the arts, and mental health. Currently researching 🧠.
          </span>
        </p> */}
        {/* <p
          className="footericons"
          style={{ marginBottom: 0, marginLeft: '0.5em', opacity: 0.5 }}
        >
          <a target="_blank" href="https://www.linkedin.com/in/arambhajan/">
            <LinkedIn size={12} />
          </a>
          <a target="_blank" href="https://github.com/aaronrambhajan">
            <CV size={12} />
          </a>
          <a target="_blank" href="mailto:aaron.rambhajan@mail.utoronto.ca">
            <Email size={12} />
          </a>
        </p> */}
      </Container>
    );
  };
}
