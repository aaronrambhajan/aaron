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
          <Subheader>About Me</Subheader>
          <BodyText>
            Hey! I'm Aaron. I'm a software developer, aspiring scientist, and
            music producer. I'm passionate about using science and software to
            understand the human experience. My ultimate aspiration is to build
            tools that help creators tell their stories.
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
            In 2016 I co-founded a non-profit, Quan, to make sorting garbage
            easy. We created a low-cost, universal labelling system and won 2
            <sup style={{ fontSize: '0.5em' }}>nd</sup> / 2000 teams at the UN &
            Baidu design challenge, raising $20,000. It was a passion project
            that let me explore
            <br />
            <br />I work at the{' '}
            <Link href="http://macklab.utoronto.ca/">Mack Lab</Link>, a
            computational cognitive neuroscience lab. Under the supervision of
            Dr. Michael Mack, I research the ecological validity of visual
            object categorization using real-world stimuli. I'm currently
            writing a paper comparing deep learning models to humans. In
            addition to psychology, computer science, and music, I have done
            extensive coursework in art history; I wrote an undergraduate thesis
            on <strong>Off-White™</strong> under the supervision of{' '}
            <Link href="https://arthistory-pat.iit.artsci.utoronto.ca/people/directories/all-faculty/jordan-bear">
              Dr. Jordan Bear
            </Link>
            .<br />
            <br />I was born and raised in Toronto, ON and attended Mayfield
            Secondary in the arts program. I was born and raised in Houston, TX
            and am a proud graduate of Clear Lake High School. During my high
            school years, I was named one of 141 U.S. Presidential Scholars and
            was invited to the White House, performed as a guest artist with the
            Houston Symphony, and was featured on National Public Radio's From
            The Top.
            <br />
            <br />
            In my free time, I make music with my friends{' '}
            <Link href="https://www.instagram.com/itsatileo/">
              Atileo
            </Link>, <Link href="https://everythingisvega.co/">Clay</Link>,{' '}
            <Link href="https://www.instagram.com/kylenethersole/">Kyle</Link>,
            and <Link href="http://soundcloud.com/thisisriamusic/">Ria</Link>,
            listen to music (check out what I'm listening to{' '}
            <Link href="https://open.spotify.com/playlist/0vdJIP2WcbGWqwth5Nlvn6?si=DDxngs3aRpSstkIaJLFQyw">
              here
            </Link>
            ), write poetry, read, or play the occasional game of Breath of the
            Wild.
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
          music producer. I'm passionate about using science and software to
          understand the human experience. My ultimate aspiration is to build
          tools that help creators tell their stories.
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
