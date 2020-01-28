import React from 'react';
import {
  Container,
  Header,
  HeroImage,
  Content,
  Subheader,
  FooterLine,
  FooterList,
  FooterItem,
} from './styles';
import stuff from '../../images/exp1.gif';

export default class Synthesis extends React.Component {
  /*

          <MagicListItem
            link="https://github.com/aaronrambhajan/-memories"
            title="@memories" // 📚
            headers="Java, JavaFX, Git, Agile | CSC207 | 2018"
            description="Desktop app for managing and tagging image files. Enabled
            users to search tags, review history (and subsequently revert), and
            autosave. Built with a team of 3."
            toggle={() => {
              this.setState({ displayItem3: !this.state.displayItem3 });
            }}
            isDroppedDown={this.state.displayItem3}
          />

  */
  render = () => {
    return (
      <Container>
        <Header>@memories</Header>
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
