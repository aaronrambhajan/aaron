import React from 'react';
import styled from 'styled-components';
import images from '../../images/images';
import ImageWide from '../../components/ImageWide';
import {
  SectionContainer,
  ArticleHeaderContainer,
  ArticleHeaderText,
  ArticleHeaderCaption,
  Summary,
} from './util';

const Test = styled.div`
  background: url(${images.trash.throwing_out_gif});
  width: 100vw;
  height: 100vh;
  color: white;
`;

export default class Intro extends React.Component {
  render = () => {
    return (
      <SectionContainer>
        <ArticleHeaderContainer>
          <ArticleHeaderText>
            <span>trash.io</span> – redesigning garbage
          </ArticleHeaderText>
          <ArticleHeaderCaption>06-30-18 / Quan / Ongoing</ArticleHeaderCaption>
        </ArticleHeaderContainer>

        <ImageWide
          image={images.trash.intro_throwing_out_gif}
          alt="bin-face"
          // No margins
          style={{ width: '100vw', height: 'auto' }}
        />

        <Summary>
          For two years, I ran a non-profit to make sorting garbage easy for
          everyone. I led research, designing and conducting field, user, and
          lab studies. <span>We won $20,000 from the UN & Baidu</span> and
          presented our results at the world-renown <em>ISSST</em> conference.
        </Summary>
      </SectionContainer>
    );
  };
}
