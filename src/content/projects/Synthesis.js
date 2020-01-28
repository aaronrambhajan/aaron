import React from 'react';
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
} from './styles';
import styled from 'styled-components';
import stuff from '../../images/exp1.gif';

const OnHoverDescription = styled.p`
  font-size: 0.5em;
  font-family: monospace;
  text-transform: uppercase;
  margin-top: 1em;
  margin-bottom: 0.5em;
`;

const Code = styled.code`
  font-family: monospace;
  // color: grey;
  font-size: 0.75em;
  margin-bottom: 4em;
  // background-color: black;
  // text-transform: uppercase;
`;

export default class Synthesis extends React.Component {
  render = () => {
    return (
      <Container>
        <Header>Heartbeat Synthesis</Header>
        <HeroImage src={stuff} />
        <Content>
          While developing an{' '}
          <Link href="https://docs.google.com/presentation/d/1GYVKaBqv_7PKEjhkFaf2I5y2KmKbAHzyULz5O2AVHLU/edit?usp=sharing">
            experiment
          </Link>{' '}
          with heartbeats in my{' '}
          <Link href="http://macklab.utoronto.ca/">lab</Link>, we kept
          encountering issues getting good-quality sounds. They were often cut
          short, sounded like garbage, and incorrectly classified. I decided to
          develop a way of systematically synthesizing them to give us control
          over abnormalities and recording quality. It was my first time working
          with DSP, so I thought it a great opportunity to experiment. It's
          based on{' '}
          <Link href="https://github.com/bencholmes/heartbeat">
            Ben Holmes' heartbeat script
          </Link>
          , and includes a whole pipeline of code—from synthesis to file
          parsing, sorting to audio effects.
        </Content>

        <Subheader>Technologies</Subheader>

        {/* <OnHoverDescription>Python, SciPy, Librosa, MATLAB</OnHoverDescription> */}
        <Content>
          The webapp itself was built with a react.js and node stack, using the
          usual webpack and react-router boilerplate that I use for most of my
          web dev projects. The front end uses react-router, although it became
          clear a couple hours in that it had been mostly a waste of time.
        </Content>
        <Content>
          The backend uses express to handle routing, in addition to passport.js
          and and the passport-facebook module for Facebook authentication.
          Although most passport-facebook examples use a model for the User, all
          this app needed was the profile picture. Thus, the FacebookStrategy's
          callback directly calls back with the profile and token, after which
          the app retrives the profile picture using a GET request to the Graph
          API. The profile was serialized into session and no database was
          required.
        </Content>
        <Content>
          The frontend checks for authentication using an endpoint exposed by
          the backend which returns the authentication status (true or false).
          Then it pulls the image from another endpoint, and draws it onto an
          HTML5 Canvas element. Finally, a transparent png containing the logo
          is drawn onto the canvas, and the user can save the filtered photo.
          The user can also log out, which clears authentication from the
          session.
        </Content>
        <Subheader>Lessons</Subheader>
        <Content>
          There's no need to use a technology you don't need (looking at you,
          react-router). It's important to get layouts for headers and footers
          pinned down early on, rather than trying to retrofit them at the every
          end. I should've built this more than a day before the election.
        </Content>

        <FooterLine />
        <Subheader>Links</Subheader>

        <FooterList>
          <FooterItem>
            <a href="/projects">More projects</a>
          </FooterItem>
          <FooterItem>
            <a href="https://github.com/aaronrambhajan/heartbeat-scripts">
              GitHub
            </a>
          </FooterItem>
        </FooterList>
      </Container>
    );
  };
}
