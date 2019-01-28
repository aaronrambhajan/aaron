// @flow

import React from 'react';
import Divider from '../components/Divider';
import AaronDrawing from '../components/AaronDrawing';
import AaronRound from '../images/aaron-round.png';

export default class AboutPage extends React.Component {
  render = () => {
    return (
      <div style={{ color: 'black' }}>
        <AaronDrawing />

        <Divider size={2} />
        {/* Bio description */}
        <div class="about">
          <h2>
            Who <strong>is</strong> Aaron?
          </h2>
          <Divider size={0.33} />
          <p
            style={{
              // maxWidth: '75%',
              // textAlign: 'center',
              // fontSize: '0.5em',
              opacity: 0.7,
            }}
          >
            I'm <em>always</em> asking questions, solving problems, and
            creating. I believe design will solve the world's greatest problems,
            because in my mind, <strong>design is everywhere</strong>, and in
            everything. I learned how to think like a designer from music, but I
            see it in everything from <u>garbage sorting</u> to{' '}
            <u>heartbeat diagnostics</u>.
          </p>
          <p
            style={{
              maxWidth: '75%',
              // textAlign: 'center',
              // fontSize: '0.5em',
              opacity: 0.7,
            }}
          >
            Design needs advocates, people from all angles who understand it. My
            work is a testament to this: take <strong>Quan</strong>, the
            non-profit I founded to redesign garbage bin UX. We created{' '}
            <em>stickers</em>, but through deep, multimodal, rigorous research,
            they became a UN-funded project.
          </p>
          {/* <img src={AaronRound} /> */}
          <p
            style={{
              maxWidth: '75%',
              // textAlign: 'center',
              // fontSize: '0.5em',
              opacity: 0.7,
            }}
          >
            My goal in life is to help build the future by <u>empowering</u>{' '}
            design through <strong>research</strong> and{' '}
            <strong>software engineering</strong>.
          </p>
          <Divider />
          <h2>
            My <strong>Background</strong>
          </h2>
          <Divider size={0.33} />
          <p
            style={{
              maxWidth: '75%',
              // textAlign: 'center',
              // fontSize: '0.5em',
              opacity: 0.7,
            }}
          >
            I've explored this as a <u>design entrepreneur</u>,{' '}
            <u>psychology researcher</u>, and <u>software engineer</u>. Each
            experience has taught me invaluable lessons about the impact design
            has on people's lives, and importantly, what my role is in that.
            I've seen the power of design
          </p>
          <p
            style={{
              // textAlign: 'center',
              // fontSize: '0.5em',
              opacity: 0.7,
            }}
          >
            Music is my foundation for how I understand technology. Producing
            music is an empathy-first process that constantly reminds me that
            empathy is about{' '}
            <u>understanding people as they understand themselves</u>.
          </p>
          <p
            style={{
              // textAlign: 'center',
              // fontSize: '0.5em',
              opacity: 0.7,
            }}
          >
            I still feel like I'm 4 years old, sitting in my grandmother's
            living room building LEGO. I live to learn, and that I get the
            opportunity to use that learning to make people's lives better is
            the most meaningful, beautiful thing I've ever experienced.
          </p>

          <Divider />

          <h2>
            What I'm <strong>learning</strong>
          </h2>
          <Divider size={0.33} />
          <p
            style={{
              maxWidth: '75%',
              // textAlign: 'center',
              // fontSize: '0.5em',
              opacity: 0.7,
            }}
          >
            <ul style={{ listStyleType: 'disc', paddingLeft: 30 }}>
              <li>Anything related to music</li>
              <li>Connecting people and communities</li>
              <li>Mental health awareness and treatment</li>
              <li>Sustainability, transportation, and micromobility</li>
              <li>Empowering creators</li>
            </ul>
          </p>
          <Divider />
        </div>
      </div>
    );
  };
}

{
  /*
        <div class="now">
          <code style={{ fontFamily: 'menlo', fontWeight: '600' }}>/now</code>
          <ul style={{ listStyle: 'disc', paddingLeft: '2em' }}>
            <li>
              Researching how people make decisions with real-world information
              at the{' '}
              <a href="http://macklab.utoronto.ca/members.html">Mack Lab</a>
            </li>
            <li>
              Helping build the future of urban transportation at{' '}
              <a href="http://dropmobility.com">Drop Mobility</a>
            </li>
            <li>
              Producing <a href="/music">music</a> for artists
            </li>
            <li>
              Doing my{' '}
              <a href="https://www.ischool.utoronto.ca">
                Master of Information
              </a>{' '}
              in Human-Centered Data Science
            </li>
          </ul>

          <code style={{ fontFamily: 'menlo', fontWeight: '600' }}>
            /highlights
          </code>
          <ul style={{ listStyle: 'disc', paddingLeft: '2em', fontWeight: 50 }}>
            <li>
              Started a non-profit, Quan, to improve UX in waste management
            </li>
            <li>Studied U of T's waste UX at the Sustainability Office</li>
            <li>
              Finished my undergrad in Psychology, Art History, and Computer
              Science
            </li>
          </ul>
        </div> */
}
