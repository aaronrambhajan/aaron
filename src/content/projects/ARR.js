import React from 'react';
import styled from 'styled-components';
import {
  Container,
  Link,
  Header,
  HeroImage,
  Content,
  Subheader,
  FooterLine,
  FooterList,
  FooterItem,
  Code,
} from './styles';
import arrowsMap from '../../images/arr/arrows-map.png';
import arrows from '../../images/arr/arrows.png';
import longLine from '../../images/arr/long-line.png';
import movingMarker from '../../images/arr/moving-marker.png';
import signposts from '../../images/arr/signposts.png';
import globalCue from '../../images/arr/global.png';
import localCue from '../../images/arr/local.png';

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 700px;
  margin-top: 1em;
  margin-bottom: 1em;
`;

const CaptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DoubleImage = styled.img`
  // display: flex;
  max-width: 200px;
  // margin-right: 1em;
`;

const ImageCaption = styled.caption`
  font-family: times;
  margin-top: 0.5em;
  font-style: italic;
  font-size: 0.5em;
`;

const TwoImageContainer = ({ img1, img2, caption1, caption2 }) => {
  return (
    <ImageContainer>
      <CaptionContainer>
        <DoubleImage src={img1} style={{ marginRight: '0.5em' }} />
        <ImageCaption>{caption1}</ImageCaption>
      </CaptionContainer>
      <CaptionContainer>
        <DoubleImage src={img2} style={{ marginLeft: '0.5em' }} />
        <ImageCaption>{caption2}</ImageCaption>
      </CaptionContainer>
    </ImageContainer>
  );
};

export default class Synthesis extends React.Component {
  render = () => {
    return (
      <Container>
        <Header>Night Market AR</Header>

        <Content>
          <em>Tang & Co.</em>, our (fictional) client, developed an AR app to
          help people navigate their night market. Our group (myself, Viya Chen,
          Jianchen Zhu, Oscar Chou) was hired to evaluate which of three
          interaction techniques would be most successful at getting users from
          one place to the next. To this end, we designed two novel AR
          interaction techniques, developed a test plan, conducted and analyzed
          the research, then wrote a report with recommendations.
        </Content>

        <TwoImageContainer
          img1={longLine}
          img2={signposts}
          caption1={'Long Line'}
          caption2={'Signposts'}
        />

        <Subheader>Process</Subheader>
        <Content>
          To design the novel interaction techniques, we were provided two
          pre-existing interaction techniques: a moving marker, and a set of
          arrows.
        </Content>

        <TwoImageContainer
          img1={arrowsMap}
          img2={movingMarker}
          caption1={'Arrows'}
          caption2={'Moving Marker'}
        />

        <Content>
          We used Dillman et al. (2018)’s paper, A Visual Interaction Cue
          Framework from Video Game Environments for Augmented Reality to inform
          our ideation. Two categories of navigational cues emerged: local and
          global. Local cues show users their immediate next steps. Global cues
          show users their destination.
        </Content>
        <TwoImageContainer
          img1={globalCue}
          img2={localCue}
          caption1={'Global Cue'}
          caption2={'Local Cue'}
        />
        <Content>
          We immediately conceived of the <Code>Long Line</Code>, which draws a
          line from the user’s current position to the specified destination. It
          contains cues that are global and local, providing continuous,
          trigger-free guidance.
        </Content>
        <ImageContainer>
          <CaptionContainer>
            <iframe
              width="315"
              height="560"
              src="https://www.youtube.com/embed/0rNtuPWlu6g"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </CaptionContainer>
        </ImageContainer>

        <Content>
          <Code>Signposts</Code> took longer to create—after experimenting with
          global and local cues, we wanted to develop a technique akin to the
          real-world, where signs are positioned at critical junctures along the
          user’s route. These signs are static, and privilege local cues—they
          make no visual references to the specified destination.
        </Content>
        <ImageContainer>
          <CaptionContainer>
            <iframe
              width="315"
              height="560"
              src="https://www.youtube.com/embed/S9yCQtuytVY"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </CaptionContainer>
        </ImageContainer>
        <Content>
          Once our interaction techniques were solidified, we developed our
          testing plan. We cycled through many metrics, ranging from the obvious
          (<Code>Task Completion Time</Code>) to the clever (
          <Code>Exploration</Code>, which describes user behaviour towards
          encountering novel situations along the path to their destination). We
          developed a paradigm wherein participants would perform a navigation
          task with each interaction technique in a randomized order (to control
          learning effects). They began by completing a pre-test questionnaire
          to evaluate AR/VR familiarity, followed by a post-technique
          questionnaire to evaluate their initial impressions of the interaction
          technique, then a post-experiment questionnaire to rank the three
          interaction techniques. For more on this, please see the report.
        </Content>
        <Subheader>Reflection</Subheader>
        <Content>
          Due to being conducted in the midst of COVID-19, we were only able to
          recruit a single participant. This meant statistical significance
          could not be achieved and randomized, controlled testing could not be
          conducted.
        </Content>
        <Content>
          One shortcoming concerned our survey design. Because it was conceived
          as supplementary to the task, we failed to design it thoughtfully—we
          ended up struggling with analysis because the questions were not
          explicitly prepared for quantitative or qualitative analysis. In the
          future, I would be sure to (1) shorten the survey and (2) prepare it
          for analysis prior to use.
        </Content>
        <Content>
          This work also suffered from low external validity. Though the night
          market was simulated, it bears little resemblance. Stimulus like
          noises, lighting, various physical obstacles, and human interactions
          which pose non-trivial risk to navigability were not developed in this
          simulation—this is largely a result of the limitations of our
          prototyping technology, Wiarframe. While powerful enough for a
          demonstration, its lack of computational resources forced us to ignore
          important parts of this task: like creating a complex enough
          environment where a user would actually need navigational cues.
        </Content>
        <Content>
          As a whole, testing could have been improved with (1) better
          computational resources, (2) better survey design, and (3) different
          global circumstances. With those changes it would have been possible
          to facilitate an ecologically valid study.
        </Content>

        {/* <FooterLine /> */}
        <Subheader>Links</Subheader>

        <FooterList>
          <FooterItem>
            <a href="https://www.dropbox.com/s/04urth3ksap5401/INF2310%20P3%20Final%20Report.pdf?dl=0">
              Final Report
            </a>
          </FooterItem>
          <FooterItem>
            <a href="https://www.youtube.com/watch?v=0rNtuPWlu6g">
              Video Demo (Long Line)
            </a>
          </FooterItem>
          <FooterItem>
            <a href="https://www.youtube.com/watch?v=S9yCQtuytVY">
              Video Demo (Signposts)
            </a>
          </FooterItem>
        </FooterList>
      </Container>
    );
  };
}
