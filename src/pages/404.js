// @flow

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 70vh;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default class Message extends React.Component {
  render = () => {
    return (
      <Container>
        <code>@aaronrambhajan</code>
      </Container>
    );
  };
}
