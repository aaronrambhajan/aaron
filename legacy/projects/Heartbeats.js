import React from 'react';
import { colors, changeOpacity } from '../colors';
import Divider from '../components/Divider';

export default class Heartbeats extends React.Component {
  render = () => {
    return (
      <div class="projects">
        {/* TITLE */}
        <hr style={{ marginTop: 0 }} />
        <h1
          class="intro-hed"
          style={{ color: 'black', fontWeight: 600, marginBottom: 0 }}
        >
          heartbeat <code>detection</code>
        </h1>
        <p
          style={{
            color: changeOpacity(colors.SECONDARY, '0.4'),
            fontSize: '0.6em',
            margin: 0,
            marginBottom: 10,
            fontFamily: 'times',
            fontWeight: 100,
          }}
        >
          12-01-18 / Mack Lab / Piloting
        </p>
        <div class="project-article">
          <hr />
        </div>
        <iframe
          title="heartbeats"
          src="https://docs.google.com/presentation/d/e/2PACX-1vSI7nnxoHXpVNZ6IZTQG1ZOpu0d2j7r4MfK8C4aa1HrCu0LhuKShck-HtXrEvTuwnNvw6HpknPdiD9p/embed?start=false&loop=false&delayms=3000"
          frameborder="0"
          width="100%"
          height="300"
          allowfullscreen="true"
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
        />

        <div style={{ height: 20 }} />

        {/* @todo: Create demo versions of these */}
        <p>
          <strong>Methods</strong>: Quantitative (psychophysics, category
          learning, surveys)
        </p>
        <Divider size={0.5} />
        <p>
          <strong>Experiments</strong>:{' '}
          <a href="https://fathomless-spire-44257.herokuapp.com/">
            Psychophysical Staircase
          </a>{' '}
          (<a href="https://github.com/aaronrambhajan/hb-staircase">code</a>) ,{' '}
          <a href="https://whispering-atoll-88012.herokuapp.com/">
            Category Detection
          </a>{' '}
          (<a href="https://github.com/aaronrambhajan/heartbeats_one">code</a>)
        </p>
        <Divider size={0.5} />
        <p>
          <strong>Skills</strong>: Experimental Design, Digital Signal
          Processing (Python [librosa, pydub, scipy]), Web/Mobile Development
          (Javascript [React, JSPsych, ES6, HTML/CSS])
        </p>
      </div>
    );
  };
}
