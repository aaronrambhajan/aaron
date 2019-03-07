// @flow

import React from 'react';
import Divider from '../components/Divider';
import ImageWide from '../components/ImageWide';
import { colors, changeOpacity } from '../colors';

export default class AboutPage extends React.Component {
  render = () => {
    return (
      <div style={{ color: 'black' }}>
        {/* <AaronDrawing /> */}
        <Divider size={4} />
        <div className="about">
          <Divider size={4} />
          <p>
            I'm Aaron. I'm a Master of Information candidate from the University
            of Toronto (2020). I recently finished my degree in Psychology/Art
            History/Computer Science, also at U of T. During my undergrad, I
            briefly left to study Electronic Production & Design at Berklee
            College of Music.
          </p>

          <Divider size={2} />
          <h3
            style={{
              fontWeight: 600,
              color: changeOpacity(colors.SECONDARY, '0.5'),
            }}
          >
            How I got here
          </h3>
          <Divider size={0.33} />
          <p>
            You might say I've had an unconventional path. My roots are in music
            and math, but along the way I've become a{' '}
            <a href="https://www.igi-global.com/article/orders-of-experience/183638">
              published art historian
            </a>{' '}
            (weird, right?), a <a href="https://www.m0851.com/">salesperson</a>,
            and a <a href="http://vicrecords.club/">community leader</a>. Now,
            I'm a <a href="#research">UX Researcher</a> and a{' '}
            <a href="#code">Software Engineer</a>.
          </p>
          <Divider size={0.5} />
          <p>
            I know how exactly this sounds:{' '}
            <em>"Who is this mess of a person?"</em>, or, more generously,{' '}
            <em>"How does one even go about doing that?"</em> and you're totally
            right to think that. To be perfectly candid, I've just always been
            in love with trying to understand how we think.
          </p>
          <Divider size={2} />
          <h3
            style={{
              fontWeight: 600,
              color: changeOpacity(colors.SECONDARY, '0.5'),
            }}
          >
            Who I am
          </h3>
          <Divider size={0.33} />
          <p>
            I'm always asking questions and creating things. That's why I'm here
            now, and what I want to do forever. I love trying to figure out{' '}
            <strong>how things work</strong> and <strong>why they work</strong>.
            I picked up music production when I was 13 because I didn't
            understand why it was so hard. I just wanted to understand.
          </p>
          <Divider size={0.5} />
          <p>
            I won't bore you any longer with exposition, but I want you to know
            that I'm incredibly passionate about learning and I'll stop at
            nothing to solve a problem. I have the curiosity of a researcher
            with the problem-solving of an engineer. My purpose is right now to{' '}
            <strong>empower design</strong> through research and code. I'm an
            aspiring UX Engineer and one day I hope to do my Ph.D. in decision
            and cognitive modelling.
          </p>
          <Divider size={0.5} />
          <p>
            Right now, though, I'm trying to get to my next step: land a co-op
            placement at a company that empowers creativity, curiosity, and
            passion.
          </p>
          <Divider size={2} />
          <h3
            style={{
              fontWeight: 600,
              color: changeOpacity(colors.SECONDARY, '0.5'),
            }}
          >
            What's going on?
          </h3>
          <Divider size={0.33} />
          <p>
            <div class="now">
              <code style={{ fontFamily: 'menlo', fontWeight: '600' }}>
                /now
              </code>
              <ul style={{ listStyle: 'disc', paddingLeft: '2em', margin: 0 }}>
                <li>
                  Researching how design influences decisions at the{' '}
                  <a href="http://macklab.utoronto.ca/members.html">Mack Lab</a>
                </li>
                <li>
                  Coding the future of transportation at{' '}
                  <a href="http://dropmobility.com">Drop Mobility</a>
                </li>
                <li>
                  Doing my{' '}
                  <a href="https://www.ischool.utoronto.ca">Masters'</a> in User
                  Experience & Data Science
                </li>
                <li>
                  Producing <a href="/music">music</a>
                </li>
              </ul>
              <Divider />

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
                  <a href="/projects/trash#user-research">
                    Sustainability Office
                  </a>
                </li>
                <li>
                  Completed my undergrad in Psychology, Art History, and
                  Computer Science at the{' '}
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
              <li>
                <a href="https://www.newyorker.com/culture/cultural-comment/blank-space-what-kind-of-genius-is-max-martin">
                  Max Martin
                </a>{' '}
                &{' '}
                <a href="https://pudding.cool/2017/05/song-repetition/">
                  the algorithmic structure of pop music
                </a>
              </li>
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
