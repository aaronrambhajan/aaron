// @flow

import React from 'react';
import { colors } from '../../colors';
import styled from 'styled-components';
import images from '../../images/images';

const ArticleContainer = styled.section`
  font-size: inherit;
  width: 100%;
  /* max-width: 600px; */
  max-width: 40rem;
  padding: 1em;
  margin: 0 auto;
  color: ${colors.SECONDARY};
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

const SectionTitleContainer = styled.div`
  /* background-image: url(${images.trash.field_logo}); */
  background-color: ${colors.PROJECT_1};
  margin-bottom: 2rem;
  border-radius: 15px;
  text-align: center;
  padding: 1em;
  width: auto;
`;

const SectionTitle = styled.h4`
  font-weight: normal;
  color: black;
  font-size: 0.75em;
`;

const SectionTagline = styled.h2`
  font-size: 1.5em;
  font-weight: 100;

  span {
    /* background-color: black; */
    color: white;
  }
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

const Prose = styled.p`
  font-size: 0.8em;
  font-family: 'Times New Roman', Times, serif;
  font-weight: normal;
  margin-bottom: 1rem;

  span {
    background-color: black;
    color: white;
  }
`;

const Subheading = styled.h3`
  font-weight: 600;
  color: black;
  margin-top: 2rem;
  margin-bottom: 0.25rem;
`;

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

const SlideContainer = styled.div`
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

const CenteredImage = ({ image, alt, style }) => {
  return (
    <ImageWideContainer>
      <ImageCenteringContainer>
        <img src={image} alt={alt} style={!!style ? style : {}} />
      </ImageCenteringContainer>
    </ImageWideContainer>
  );
};

const SectionHeader = ({ title, description }) => {
  return (
    <div>
      <SectionTitle>{title} –</SectionTitle>
      <SectionTagline>
        <span>{description}</span>
      </SectionTagline>
    </div>
  );
};

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
  SectionTitleContainer,
  SectionContainer,
  SectionHeader,
  Summary,
  Prose,
  Subheading,
  ImageRow,
  CenteredImage,
  Slides,
};
