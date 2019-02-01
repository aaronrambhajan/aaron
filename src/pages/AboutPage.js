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

        <Divider size={4} />
        {/* Bio description */}
        <div class="about">
          <h2>
            I{' '}
            <span style={{ backgroundColor: 'yellow', fontWeight: 600 }}>
              connect disparate worlds
            </span>{' '}
            because I've spent my life doing things that don't fit together.
          </h2>
          <Divider size={4} />
          <p>
            I'm Aaron. Always asking questions and creating things. I'm
            fascinated by understanding <strong>how things work</strong>, and{' '}
            <strong>why they work</strong> that way. I believe design will solve
            the world's greatest problems. I see design is everywhere, and in
            everything. Producing <a href="/music">music</a> taught me how to
            think like a designer by creating experiences for listeners. I bring
            that understanding everywhere—whether that be designing scalable UI
            code at <a href="http://dropmobility.com">Drop Mobility</a>,
            designing experiments at the{' '}
            <a href="http://macklab.utoronto.ca/members.html">Mack Lab</a>, or
            redesigning garbage sorting at <a href="/projects/trash">Quan</a>.
          </p>
          <Divider />
          <p>
            As a UX Researcher, I empower design through rigorous experiments. I
            leverage my background in Psychology Research to study how
            information design affects us. As a Software Engineer, I empower
            design by taking a human-centered approach to my code—who is being
            affected by me, and how can I help them?
          </p>
          <Divider size={2} />
          <h2>
            My <strong>Background</strong>
          </h2>
          <Divider />
          <p>
            <div class="now">
              <code style={{ fontFamily: 'menlo', fontWeight: '600' }}>
                /now
              </code>
              <ul style={{ listStyle: 'disc', paddingLeft: '2em' }}>
                <li>
                  Researching how design impacts people's decisions at the{' '}
                  <a href="http://macklab.utoronto.ca/members.html">Mack Lab</a>
                </li>
                <li>
                  Developing software to help build the future of urban
                  transportation at{' '}
                  <a href="http://dropmobility.com">Drop Mobility</a>
                </li>
                <li>
                  Doing my{' '}
                  <a href="https://www.ischool.utoronto.ca">
                    Master of Information
                  </a>{' '}
                  in User Experience Design at the University of Toronto
                </li>
                <li>
                  Producing <a href="/music">music</a> for artists
                </li>
              </ul>

              <code style={{ fontFamily: 'menlo', fontWeight: '600' }}>
                /before
              </code>
              <ul
                style={{
                  listStyle: 'disc',
                  paddingLeft: '2em',
                }}
              >
                <li>
                  Started a non-profit, <a href="/projects/trash">Quan</a>, to
                  redesign garbage sorting UX
                </li>
                <li>
                  Made UX recommendations to the{' '}
                  <a href="http://www.fs.utoronto.ca/sustainability-office/sustainability-yearbook/">
                    Sustainability Office
                  </a>
                </li>
                <li>
                  Completed my undergrad my undergrad in Psychology, Art
                  History, and Computer Science at the{' '}
                  <a href="utoronto.ca">University of Toronto</a>
                </li>
                <li>
                  Studied{' '}
                  <a href="https://www.berklee.edu/electronic-production-design">
                    Electronic Production & Design
                  </a>{' '}
                  at Berklee College of Music
                </li>
              </ul>
            </div>
          </p>

          <Divider size={2} />

          <h2>
            What I'm <strong>learning</strong>
          </h2>
          <Divider size={0.5} />
          <p
            style={{
              maxWidth: '75%',
              // textAlign: 'center',
              // fontSize: '0.5em',
            }}
          >
            <ul style={{ listStyleType: 'disc', paddingLeft: 30, margin: 0 }}>
              <li>Anything related to music</li>
              <li>Empowering creators</li>
              <li>Connecting people and communities</li>
              <li>Mental health awareness and treatment</li>
              <li>Sustainability, transportation, and micromobility</li>
            </ul>
          </p>
        </div>
        <Divider size={2} />
      </div>
    );
  };
}
