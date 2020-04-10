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
  Code,
} from './styles';
import stuff from '../../images/exp1.gif';

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
          testing how people perceive heartbeat abnormalities, we kept
          encountering issues with the recordings. They were cut short, ripe
          with digital artifacts, and (critically) incorrectly classified. I
          decided to develop a way of synthesizing them to give us control over
          these issues. It was my first time working with DSP, so there was a
          steep learning curve, but I based it on{' '}
          <Link href="https://github.com/bencholmes/heartbeat">
            Ben Holmes' heartbeat script
          </Link>
          . This repository includes code for everything from synthesis to
          file-parsing to audio effects.
        </Content>

        <Subheader>Technologies</Subheader>

        {/* <OnHoverDescription>Python, SciPy, Librosa, MATLAB</OnHoverDescription>
        Software engineering generalist looking for experience with architecture and design with experiencne in UXR

        */}
        <Content>
          <Code>synthesis/</Code> was written in Python, though I spent a great
          deal of time creating custom Python functions to mock MATLAB
          behaviour. <Code>numpy</Code> was used to model MATLAB data
          structures; <Code>scipy</Code> was used for Digital Signal Processing;
          and <Code>librosa</Code>. portinn The webapp itself was built with a{' '}
          <Code>react.js</Code> and node stack, using the usual webpack and
          react-router boilerplate that I use for most of my web dev projects.
          The front end uses react-router, although it became clear a couple
          hours in that it had been mostly a waste of time.
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
          I wasted a lot of time trying to There's no need to use a technology
          you don't need (looking at you, react-router). It's important to get
          layouts for headers and footers pinned down early on, rather than
          trying to retrofit them at the every end. I should've built this more
          than a day before the election.
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
