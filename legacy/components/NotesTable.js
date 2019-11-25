// @flow

import React from 'react';
import styled from 'styled-components';
import { colors, changeOpacity } from '../colors';

const Container = styled.div`
  opacity: 0.75;
`;

const Table = styled.div`
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 0.5em;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const RowTitle = styled.div`
  display: flex;
  flex: 3;
  font-weight: 600;
  padding-left: 10px;
`;

const RowDescription = styled.div`
  display: flex;
  flex: 6;
  font-size: 0.9em;
`;

const RowLink = styled.a`
  text-decoration: none;
  flex: 1;
  text-align: center;
  font-size: 150%;
  font-weight: 600;
  font-family: BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, sans-serif,
    -apple-system;

  &:hover {
    text-decoration: none;
    opacity: 1;
    color: #2d89ef;
  }
`;

export default class NotesTable extends React.Component {
  props: {
    info: Array<Object>,
  };

  render = () => {
    return (
      <Container>
        {this.props.info.map((rsc, n) => {
          return (
            <Table
              style={{
                backgroundColor:
                  (n + 1) % 2 == 1
                    ? changeOpacity(colors.SECONDARY, '0.1')
                    : '',
              }}
            >
              <RowTitle>{rsc.title}</RowTitle>
              <RowDescription>{rsc.description}</RowDescription>
              <RowLink href={rsc.link}>↗</RowLink>
            </Table>
          );
        })}
      </Container>
    );
  };
}
