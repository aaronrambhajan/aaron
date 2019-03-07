// @flow

import React from 'react';
import styled from 'styled-components';
import { colors } from '../colors';

const Container = styled.div``;

const SectionTitle = styled.h4`
  font-weight: normal;
  color: ${colors.SECONDARY};
`;

const Tagline = styled.h2`
  font-weight: 100;
  font-size: 2em;
`;

const TaglineHighlight = styled.span`
  background-color: black;
  color: white;
`;

export default class Header extends React.Component {
  render = () => {
    return (
      <Container>
        <SectionTitle>{this.props.title} –</SectionTitle>
        <Tagline>
          <TaglineHighlight>{this.props.description}</TaglineHighlight>
        </Tagline>
      </Container>
    );
  };
}
