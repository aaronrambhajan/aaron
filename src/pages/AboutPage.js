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
            I still feel like a 4-year-old discovering LEGO . I really love
            learning and I'm the luckiest kid in the world because I've had the
            opportunity to learn so much from so many amazing people. I hope
            you'll consider me for an opportunity to learn even more. I'm so
            excited to be alive.
          </p>
          <p>
            I'm a <u>software engineer</u>, a <u>researcher</u>, and a{' '}
            <u>music producer</u>. My place in the world—in technology, more
            saliently—is connecting thhin you'd never expect. I'm technical,
            creative, and analytical, and I believe that’s all that innovation
            is—unexpected combination. I'm passionate about music,
            mentorship/community-building, and mental health.
          </p>
          <p>
            Currently, I'm a researcher and developer at the Mack Lab, doing my
            Masters of Information at the University of Toronto, and working
            part-time at Drop Mobility as a Software Engineer. I did my
            undergrad at U of T, as well, in Psychology, Art History, and
            Computer Science (wild, right?), with a brief interlude studying
            Electronic Production and Design at Berklee College of Music in
            Boston, MA.
          </p>
          <p>
            I'd like to take a bit of space here to thank those amazing people.
            In the spirit of Amazon recommendations, if you like me, you'll also
            like:
          </p>
        </div>

        {/* Thank you to Russell Goldenberg for this website layout. */}
      </div>
    );
  };
}
