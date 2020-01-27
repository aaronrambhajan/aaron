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
              link="[coming soon]"
              title="Quan" // ❤️
              headers="Leadership, Experiment Design, User Research | 2016 - 2018"
              description={
                <div>
                  Co-founded a non-profit to make sorting garbage easy. Led,
                  designed, and conducted an{' '}
                  <Link href="https://docs.google.com/presentation/d/127h2mwepAqv4HKEnXUcC711Umd3Ksw5tLYzAGz6xUJ8/edit?usp=sharing">
                    8-week long field experiment
                  </Link>
                  ,{' '}
                  <Link href="https://www.dropbox.com/s/uwgrdwn622mtjt2/User-Research-Report.pdf?dl=0">
                    an observational study
                  </Link>
                  , and two psychophysical studies. Won 2
                  <sup style={{ fontSize: '0.5em' }}>nd</sup> / 2000 teams at
                  the UN & Baidu design challenge. Presented research at the{' '}
                  <Link href="https://www.issst.net/">
                    International Symposium on Sustainable Systems and
                    Technology
                  </Link>
                  . Co-authored a performance indicator for{' '}
                  <Link href="https://www.iso.org/standard/69050.html">
                    ISO 37122
                  </Link>
                  , the new standard for smart cities. First-hand experience
                  learning how to strategically design research to meet business
                  needs. Materials coming soon.
                </div>
              }
              toggle={() => {
                this.setState({ displayItem5: !this.state.displayItem5 });
              }}
              isDroppedDown={this.state.displayItem5}
            />

  */
  render = () => {
    return (
      <Container>
        <Header>Quan</Header>
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
