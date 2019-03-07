import React from 'react';
import styled from 'styled-components';
import GitHub from '../images/icons/GitHub';
import LinkedIn from '../images/icons/LinkedIn';
import Email from '../images/icons/Email';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
`;

const Caption = styled.p`
  font-size: 0.75em;
  opacity: 0.5;
`;

export default class Footer extends React.Component {
  render = () => {
    return (
      <Container>
        <Container>
          <p>
            <a target="_blank" href="https://www.linkedin.com/in/arambhajan/">
              <LinkedIn size={24} />
            </a>

            <a target="_blank" href="https://github.com/aaronrambhajan">
              <GitHub size={24} />
            </a>
            <a target="_blank" href="mailto:aaron.rambhajan@mail.utoronto.ca">
              <Email size={24} />
            </a>
          </p>
        </Container>
        {/* <Caption>Built by Aaron</Caption> */}
      </Container>
    );
  };
}
