// @flow

import React from 'react';
import Aaron from '../images/aaron-round.png';

export default class AboutPage extends React.Component {
  render = () => {
    return (
      <div style={{ color: 'black' }}>
        <h1 class="intro-hed" style={{ marginBottom: 0 }}>
          I'm <strong>Aaron Rambhajan</strong>.
        </h1>

        {/* Bio image */}
        <div
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
        </div>

        {/* Bio description */}
        <div class="about" style={{ marginTop: 10 }}>
          <p>
            I still feel like I'm 4-years-old discovering LEGO for the first
            time. I love learning more than anything in the world and I'm lucky
            enough to have had the opportunity to learn so much from so many
            amazing people. I'm technical, creative, and analytical, but at my
            core, I'm a creative problem-solver who loves to build.
          </p>

          <p>
            Currently, I'm a researcher and developer at the Mack Lab, doing my
            Master of Information at the University of Toronto and working
            part-time at Drop Mobility as a Software Engineer. I did my
            undergrad at U of T in Psychology, Art History, and Computer Science
            , with a brief interlude studying Electronic Production and Design
            at Berklee College of Music in Boston, MA.
          </p>
          <p>
            My place in the world—in technology, more saliently—is making
            connections you'd never expect. I believe innovation is just making
            timely combinations no one expected—ambient music existed before
            808's & Heartbreak, Kanye just got to it first. There's nothing I
            won't learn to solve a problem, and no greater feat than being able
            to impact communities by doing so.
          </p>
          <p>
            In any case, thanks for dropping by. If you'd like to get in touch,
            please feel free to contact me at any of the links below.
            (Pssssstttt....you can also check out my music{' '}
            <a href="https://soundcloud.com/rambhajan">here</a>
            .)
          </p>
          {/* <p>
            I'd like to take a bit of space here to thank those amazing people.
            In the spirit of Amazon recommendations, if you like me, you'll also
            like:
          </p> */}
        </div>

        {/* Thank you to Russell Goldenberg for this website layout. */}
      </div>
    );
  };
}
