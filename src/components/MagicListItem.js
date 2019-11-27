import React from 'react';
import styled from 'styled-components';

const DescriptionContainer = styled.div`
  // max-width: 75%;
`;

const OnHoverDescription = styled.li`
  font-size: 0.5em;
  font-family: monospace;
  text-transform: uppercase;
  margin-top: 1em;
  margin-bottom: 0.5em;
`;

export const MagicListItem = ({
  link,
  title,
  description,
  headers,
  toggle,
  isDroppedDown,
}) => {
  return (
    <li onClick={toggle}>
      <a
        // href={link}
        style={{
          color: isDroppedDown ? 'grey' : 'inherit',
        }}
      >
        {title}
      </a>
      {!!isDroppedDown ? (
        !!description ? (
          <DescriptionContainer>
            <OnHoverDescription>{description}</OnHoverDescription>
            <OnHoverDescription style={{ marginBottom: '1em' }}>
              <a href={link} target="_blank" style={{ color: '#518EF4' }}>
                link
              </a>{' '}
              | {headers}
            </OnHoverDescription>
          </DescriptionContainer>
        ) : (
          ''
        )
      ) : (
        ''
      )}
    </li>
  );
};
