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
            I still feel like I'm a 4-year-old discovering LEGO for the first
            time. I <strong>love learning</strong> more than anything in the
            world and I'm lucky enough to have had the opportunity to learn so
            much from so many amazing people. I'm <code>technical</code>,{' '}
            <code>creative</code>, and <code>analytical</code>, but at my core,
            I'm just a <strong>creative problem-solver</strong> who loves to
            build.
          </p>

          <p>
            Right now I'm a researcher and developer at the{' '}
            <a href="http://macklab.utoronto.ca/members.html">Mack Lab</a>,
            doing my{' '}
            <a href="https://www.ischool.utoronto.ca">Master of Information</a>{' '}
            at the University of Toronto and working part-time at{' '}
            <a href="http://dropmobility.com">Drop Mobility</a> as a Software
            Engineer. I did my undergrad at U of T in Psychology, Art History,
            and Computer Science with a brief interlude studying Electronic
            Production and Design at{' '}
            <a href="http://berklee.edu">Berklee College of Music</a> in Boston,
            MA.
          </p>
          <p>
            My place in the world—in technology, more saliently—is making
            unexpected connections, using my diverse background to make
            technology better for everyone. I believe innovation can be reduced
            down to making timely combinations no one expects—ambient music
            existed before 808's & Heartbreak, Kanye just got to it first.
            There's nothing I won't learn to solve a problem, and this attitude
            has taken me down the path I've taken, from{' '}
            <strong>entrepreneurship</strong> to <strong>music</strong>.
          </p>
          <p>
            In any case, thanks for dropping by. If you'd like to get in touch,
            please feel free to contact me at any of the links below.
            (Pssssstttt....you can also check out my music{' '}
            <a href="https://soundcloud.com/rambhajan">here</a>
            .)
          </p>
          {/* @todo I'd also like to eventually include my full CV here, somewhere */}
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
