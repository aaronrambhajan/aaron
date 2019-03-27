// @flow

import React from 'react';
import { colors } from '../../colors';
import styled from 'styled-components';
import images from '../../images/images';

const ArticleContainer = styled.section`
  font-size: inherit;
  width: 100%;
  max-width: 40rem;
  margin: 0 auto;
  color: black;
`;

const ArticleHeaderContainer = styled.div`
  margin-bottom: 3.75rem;
`;

const ArticleHeaderText = styled.h1`
  font-weight: 100;
  color: ${colors.SECONDARY};

  span {
    font-weight: 600;
    color: black;
  }
`;

const ArticleHeaderCaption = styled.p`
  font-family: 'Times New Roman', Times, serif;
  font-weight: 100;
  opacity: 0.5;
  font-size: 0.5em;
`;

// SECTION
const SectionContainer = styled.section`
  margin-top: 3.75rem;
  margin-bottom: 8rem;
`;

const Summary = styled.h2`
  font-family: 'Times New Roman', Times, serif;
  margin-top: 3.75rem;
  color: ${colors.SECONDARY};

  span {
    background-color: black;
    color: white;
  }
`;

const Subheading = styled.h4`
  font-weight: 600;
  font-size: 0.6em;
  margin-top: 4rem;
  margin-bottom: 0.5rem;
  color: ${colors.PROJECT_2};
`;

const Prose = styled.p`
  font-size: 0.8em;
  /* font-family: 'Times New Roman', Times, serif; */
  opacity: 0.75;
  font-weight: 100;
  font-weight: normal;
  margin-bottom: 1rem;
  line-height: 1.5;

  &:span {
    background-color: black;
    color: white;
  }

  sup {
    font-size: 0.5em;
  }

  strong {
    color: black;
  }
`;

const SectionTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  text-align: center;
`;

const SectionTitle = styled.h4`
  background-color: ${colors.PROJECT_2};
  border-radius: 60px;
  padding: 1rem 4rem;
  color: white;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.12);
  font-weight: normal;
`;

const SectionHeader = ({ title, description, image }) => {
  return (
    <SectionTitleContainer>
      <SectionTitle>
        {title}
        {/* {image && (
          <img
            src={image}
            alt={title}
            style={{
              maxWidth: 100,
              height: 'auto',
            }}
          />
        )} */}
      </SectionTitle>
    </SectionTitleContainer>
  );
};

const ImageRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ImageWideContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  margin-bottom: 4rem;
`;

const ImageCenteringContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`;

const CenteredImage = ({ image, alt, style }) => {
  return (
    <ImageWideContainer>
      <ImageCenteringContainer>
        <img
          src={image}
          alt={alt}
          style={!!style ? style : { maxWidth: '75%' }}
        />
      </ImageCenteringContainer>
    </ImageWideContainer>
  );
};

const SlideContainer = styled.div`
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

const Slides = ({ url, alt }) => {
  return (
    <SlideContainer>
      <iframe
        src={url}
        title={alt}
        frameborder="0"
        width="100%"
        height="300"
        allowfullscreen="true"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
      />
    </SlideContainer>
  );
};

export {
  ArticleContainer,
  ArticleHeaderContainer,
  ArticleHeaderText,
  ArticleHeaderCaption,
  SectionContainer,
  SectionHeader,
  Summary,
  Prose,
  Subheading,
  ImageRow,
  CenteredImage,
  Slides,
};
