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
            understand the human experience. My ultimate aspiration is to help
            creators tell their stories.
            <br />
            <br />
            Currently, I'm in my final year of my{' '}
            <Link href="/https://ischool.utoronto.ca/">Master's</Link> at U of
            T, studying UX Design. I did my undergraduate at U of T in
            Psychology, Art History, and Computer Science, and briefly studied
            Sound Design at{' '}
            <Link href="/https://www.berklee.edu/">
              Berklee College of Music
            </Link>
            .<br />
            <br />
            In Summer 2019, I was a Full Stack Development Intern at{' '}
            <Link href="https://www.touchbistro.com/">TouchBistro</Link> in
            Toronto. I now work as a developer and researcher at the{' '}
            <Link href="http://macklab.utoronto.ca/">Mack Lab</Link>, and am
            looking for full-time and internship opportunities for June 2020.
            <br />
            <br />
            In 2016 I co-founded a non-profit,{' '}
            <Link href="https://docs.google.com/presentation/d/1PmflOEb9WzHWy8FFKMhvz4lXCbUsodbxkNTIA7OZryU/edit?usp=sharing">
              Quan
            </Link>
            . We tried to make sorting garbage easy by creating a low-cost,
            universal labelling system. We raised won 2
            <sup style={{ fontSize: '0.5em' }}>nd</sup> / 2000 teams at the UN &
            Baidu design challenge, raising $20,000. Soon after, in 2017, I led
            product and research for{' '}
            <Link href="https://www.linkedin.com/company/tagface/">
              #Tagface
            </Link>
            , a device that reduced food waste in grocery stores through smart
            inventory management.
            <br />
            <br />I work at the{' '}
            <Link href="http://macklab.utoronto.ca/">Mack Lab</Link>, a
            computational cognitive neuroscience lab. Under the supervision of
            Dr. Michael Mack, I research the ecological validity of visual
            object categorization using real-world stimuli. I'm currently
            writing a paper comparing deep learning models to humans. I have
            also done extensive coursework in art history—I wrote an
            undergraduate thesis on Off-White™ under the supervision of{' '}
            <Link href="https://arthistory-pat.iit.artsci.utoronto.ca/people/directories/all-faculty/jordan-bear">
              Dr. Jordan Bear
            </Link>
            .<br />
            <br />I was born in Brampton, ON and attended Mayfield Secondary in
            the arts program (I played flute and piano!). My father is an Air
            Traffic Controller and my mother is a Systems Programmer. My parents
            were strong believers that art and science are one in the same.
            Combined with my Montessori education, it's safe to say there's
            nonthing I love more than learning.
            <br />
            <br />
            In my free time, I make music with my friends{' '}
            <Link href="https://www.instagram.com/itsatileo/">
              Atileo
            </Link>, <Link href="https://everythingisvega.co/">Irwan</Link>,{' '}
            <Link href="https://www.instagram.com/kylenethersole/">Kyle</Link>,
            and <Link href="http://soundcloud.com/thisisriamusic/">Ria</Link>; I{' '}
            <Link href="https://open.spotify.com/playlist/0vdJIP2WcbGWqwth5Nlvn6?si=DDxngs3aRpSstkIaJLFQyw">
              listen to music
            </Link>
            , write poetry, and read. I do many different things in my life, but
            I am always inspired by story.
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
          understand the human experience. My ultimate aspiration is to help
          creators tell their stories.
          <br />
          <br />
          Currently, I'm in my final year of my{' '}
          <Link href="/https://ischool.utoronto.ca/">Master's</Link> at U of T,
          studying UX Design. I did my undergraduate at U of T in Psychology,
          Art History, and Computer Science, and briefly studied Sound Design at{' '}
          <Link href="/https://www.berklee.edu/">Berklee College of Music</Link>
          .<br />
          <br />
          In Summer 2019, I was a Full Stack Development Intern at{' '}
          <Link href="https://www.touchbistro.com/">TouchBistro</Link> in
          Toronto. I now work as a developer and researcher at the{' '}
          <Link href="http://macklab.utoronto.ca/">Mack Lab</Link>, and am
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
