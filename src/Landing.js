import React from 'react';
import styled from 'styled-components';
import Code from './content/Code';
import Music from './content/Music';
import About from './content/About';
import Contact from './content/Contact';

const Container = styled.div``;

export const Subheader = styled.p`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.5em;
  margin-top: 1em;
  margin-bottom: 1em;
`;

export default class Landing extends React.Component {
  render = () => {
    return (
      <Container>
        <About isLanding={true} />
        <Code isLanding={true} />
        <Music isLanding={true} />
        <Contact isLanding={true} />
      </Container>
    );
  };
}
