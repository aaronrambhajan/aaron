import React from 'react';

export default class Heartbeats extends React.Component {
  render = () => {
    return (
      <div>
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
