// @flow

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`;

export default class ImageWide extends React.Component {
  props: {
    image: image,
    alt: string,
    caption: Object,
    style: Object,
  };

  render = () => {
    return (
      <Container>
        <ImageContainer>
          <img
            src={this.props.image}
            alt={this.props.alt}
            style={{ ...this.props.style }}
          />
        </ImageContainer>
      </Container>
    );
  };
}
