// @flow

import React from 'react';
import Divider from '../components/Divider';
import Aaron from '../images/aaron-round.png';

export default class AboutPage extends React.Component {
  render = () => {
    return (
      <div style={{ color: 'black' }}>
        {/* <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          <div
            style={{
              maxHeight: 300,
              maxWidth: 300,
            }}
          >
            <img src={Aaron} alt="Aaron" />
          </div>
        </div> */}

        {/* Bio description */}
        <div class="about" style={{ marginTop: 10 }}>
          <h2>
            Who <em>is</em> Aaron?
          </h2>
          <p>
            Hi! I'm <strong>Aaron</strong>. I'm a music producer turned{' '}
            <u>UX Researcher</u> & <u>Software Engineer</u> passionate about
            understanding how people interact with design.
          </p>
          <p>
            Fascinated with <u>building things</u> and understanding{' '}
            <u>why they work</u>
            —how and why are my favourite questions to ask, and my experience
            has let me do this.
          </p>
          <Divider />
          <h2>
            Background (a.k.a., where the <em>hell</em> did I come from?)
          </h2>
          <p>
            I've explored this as a <u>design entrepreneur</u>,{' '}
            <u>psychology researcher</u>, and <u>software engineer</u>. Each
            experience has taught me invaluable lessons about the impact design
            has on people's lives, and importantly, what my role is in that.
          </p>
          <p>
            Music production is my foundation for understanding technology. My{' '}
            <em>job</em> is to figure out what the artist is trying to
            communicate. It's not just about <em>empathizing</em> with them, I
            have to understand it as <em>they</em> understand it, feel it as
            they feel it. Ask questions about how the world will receive it.
            Leverage deep, wide technical knowledge. Focus on insight in the
            context. Trust the process. It's the kind of job where you have to
            be able to say that you're not right for it: ego is the opposite of
            great production.
          </p>

          <Divider />

          <h2>
            What I'm <strong>learning</strong>
          </h2>
          <p>
            Areas I love solving problems in:
            <ul style={{ listStyleType: 'disc', paddingLeft: 20 }}>
              <li>Anything related to music</li>
              <li>Connecting people and communities</li>
              <li>Mental health awareness and treatment</li>
              <li>Sustainability, transportation, and micromobility</li>
              <li>Empowering creators</li>
            </ul>
          </p>
          <Divider />
          <p>
            I still feel like I'm 4 years old, sitting in my grandmother's
            living room building LEGO. I live to learn, and that I get the
            opportunity to use that learning to make people's lives better is
            the most meaningful, beautiful thing I've ever experienced.
          </p>

          <Divider />
          <a
            href="https://www.dropbox.com/s/600rbuu5ydpo8lk/Aaron-Rambhajan-Resume.pdf?dl=0"
            style={{ fontWeight: 600, font: 'inherit' }}
          >
            [CV]
          </a>
          {/* @todo I'd also like to eventually include my full CV here, somewhere */}
          {/* <p>
            I'd like to take a bit of space here to thank those amazing people.
            In the spirit of Amazon recommendations, if you like me, you'll also
            like:
          </p> */}
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
