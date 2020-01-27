import React from 'react';
import styled from 'styled-components';
import stuff from '../../images/exp1.gif';

const Container = styled.div``;

const Header = styled.h2`
  font-weight: bold;
  font-size: 1.5em;
  margin-top: 1em;
  margin-bottom: 1em;
`;

const HeroImage = styled.img`
  margin-top: 1em;
  margin-bottom: 1em;
`;

const Subheader = styled.h3`
  font-weight: bold;
  font-size: 1.25em;
  margin-top: 2em;
  margin-bottom: 1em;
`;

const Content = styled.p`
  font-size: 0.75em;
`;

const Back = styled.a`
  font-weight: bold;
  margin-top: 3em;
  margin-bottom: 1em;
`;

export default class Synthesis extends React.Component {
  /*
    <MagicListItem
    link="https://github.com/aaronrambhajan/heartbeat-scripts"
    title="Heartbeat Synthesis" // ❤️
    headers="Python, SciPy, Librosa, MATLAB | Mack Lab | 2019"
    description={
      <div>
        A suite of scripts generating heartbeat sounds for a
        psychophysics experiment testing perceptual thresholds, based on{' '}
        <Link href="https://github.com/bencholmes/heartbeat">
          Ben Holmes' heartbeat script
        </Link>
        . Covers everything from synthesis to file parsing, sorting, and
        audio effects processing. See{' '}
        <Link href="https://docs.google.com/presentation/d/1GYVKaBqv_7PKEjhkFaf2I5y2KmKbAHzyULz5O2AVHLU/edit?usp=sharing">
          here
        </Link>{' '}
        for context.
      </div>
    }
  />

  */
  render = () => {
    return (
      <Container>
        <Header>Heartbeat Synthesis</Header>
        <HeroImage src={stuff} />
        <Content>
          The day before the 2016 Presidential Election, I noticed a few people
          adding H filters to their profile pictures on Facebook, but it wasn't
          clear where they were getting them. So I decided to implement one
          myself, using the Facebook API. I'd never used it before (although I
          am familiar with OAuth) and thought it'd be a fun experiment to see
          how much I could get done between 10:30 AM and my astrophysics lecture
          at 2:30. I managed to deploy right before class.
        </Content>
        <Content>You can check out the code at my github.</Content>
        <Subheader>Technologies</Subheader>
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
        <Subheader>
          <a href="/projects">Read more</a> / <a href="/projects">Link</a> /
        </Subheader>
      </Container>
    );
  };
}
