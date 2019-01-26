import React from 'react';
import { colors, changeOpacity } from '../colors';

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
          src="https://docs.google.com/presentation/d/e/2PACX-1vRov__FCgqk3N-xnNXiTwrW15CJDEmqijtiK0Y_EASlsNrQHPuE7AW5EKUY121dF2eRrQM360xDhn55/embed?start=false&loop=false&delayms=3000"
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
          Experiments:{' '}
          <a href="https://fathomless-spire-44257.herokuapp.com/">
            Psychophysical Staircase
          </a>
          ,{' '}
          <a href="https://whispering-atoll-88012.herokuapp.com/">
            Category Detection
          </a>
        </p>
      </div>
    );
  };
}
