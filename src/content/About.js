import React from 'react';
import styled from 'styled-components';
import { Subheader } from '../Landing';

const Container = styled.div`
  margin-bottom: 4em;
`;

const BodyText = styled.p`
  line-height: 1.5em;
`;

const Link = styled.a`
  text-decoration: underline;
`;

export default class About extends React.Component {
  render = () => {
    if (!this.props.isLanding) {
      return (
        <Container>
          <Subheader>About</Subheader>
          <BodyText>
            Hey! I'm Aaron. I'm a software developer, aspiring scientist, and
            music producer. I'm passionate about web development, artificial
            intelligence and how it can be improved and inspired by the human
            brain, and music.
            <br />
            <br />
            Currently, I'm in my final year of my Master's at U of T, studying
            UX & Data. I did my undergraduate at U of T in Psychology, Art
            History, and Computer Science, and spent a term studying Sound
            Design at Berklee College of Music.
            <br />
            <br />
            During Summer 2019, I was a Full Stack Development Intern at
            TouchBistro in Toronto. I work as a developer at the Mack Lab now,
            and am looking for full-time and internship opportunities for June
            2020.
            <br />
            <br />I took a leave of absence from Harvard in 2015 as a founding
            team member of gifs.com, the world's fastest and most fully-featured
            animated GIF creator. At gifs.com, I redesigned and reimplemented
            the web UI, developed efficient search of millions of gifs, and
            helped raise funding, including from the Thiel Fellowship.
            <br />
            <br />
            At Harvard, I am a classical music DJ at WHRB 95.3 FM, an Arts
            Editor at the Harvard Crimson, and a board member of the Harvard
            Society for Mind, Brain, and Behavior. I also work in Professor
            David Cox's computational neuroscience lab as an undergraduate
            researcher. In addition to computer science, neuroscience, and
            music, I have also taken courses in astrophysics and Russian
            language.
            <br />
            <br />I was born and raised in Houston, TX and am a proud graduate
            of Clear Lake High School. During my high school years, I was named
            one of 141 U.S. Presidential Scholars and was invited to the White
            House, performed as a guest artist with the Houston Symphony, and
            was featured on National Public Radio's From The Top.
            <br />
            <br />
            In my free time, I enjoy traveling the world, photography (street
            and landscape), watching basketball and football (go Rockets and
            Pats!), drinking coffee and tea, collecting fountain pens, and
            playing the occasional game of Civilization V.
            <br />
            <br />
            <a
              href="/"
              style={{
                textDecoration: 'none',
              }}
            >
              ...
            </a>
          </BodyText>
        </Container>
      );
    }

    return (
      <Container>
        <Subheader>About Me</Subheader>
        <BodyText>
          Hey! I'm Aaron. I'm a software developer, aspiring scientist, and
          music producer. I'm passionate about web development, artificial
          intelligence and how it can be improved and inspired by the human
          brain, and music.
          <br />
          <br />
          Currently, I'm in my final year of my{' '}
          <Link href="/code">Master's</Link> at U of T, studying UX & Data. I
          did my undergraduate at U of T in Psychology, Art History, and
          Computer Science, and spent a term studying Sound Design at{' '}
          <Link href="/code">Berklee College of Music</Link>.<br />
          <br />
          During Summer 2019, I was a Full Stack Development Intern at{' '}
          <Link href="/code">TouchBistro</Link> in Toronto. I work as a
          developer at the <Link href="/code">Mack Lab</Link> now, and am
          looking for full-time and internship opportunities for June 2020.
          <br />
          <br />
          <a
            href="/about"
            style={{
              textDecoration: 'none',
            }}
          >
            ...
          </a>
        </BodyText>
      </Container>
    );
  };
}
