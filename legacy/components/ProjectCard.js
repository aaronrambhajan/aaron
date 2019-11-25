// @flow

import React from 'react';
import styled from 'styled-components';

const Container = styled.a``;

const TextContainer = styled.div`
  margin-top: 1rem;
  font-size: 0.7em;
`;

const Title = styled.span`
  font-weight: 600;
  color: black;
  margin-right: 0.7em;
`;

const Caption = styled.p`
  margin-top: 0.5rem;
  color: #c0c0c0;
`;

const Image = styled.img`
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.5);
  height: 280px;
  max-width: 500px;
`;

export default class ProjectCard extends React.Component {
  props: {
    title: string,
    caption: string,
    roles: string,
    img: image,
    color: string,
    route: string,
  };

  render = () => {
    return (
      <div>
        <Container href={this.props.route}>
          <Image src={this.props.img} alt="image" />
        </Container>

        <TextContainer>
          <Caption>
            <Title>{this.props.title}</Title>
            {this.props.caption}
          </Caption>
        </TextContainer>
      </div>
    );
  };
}
