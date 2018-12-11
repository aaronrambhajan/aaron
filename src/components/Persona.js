// @flow

import React from 'react';
import AnxiousGirl from '../images/ADHD/anxious-girl.jpg';

export default class Persona extends React.Component {
  render = () => {
    return (
      <div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginTop: 20,
            marginBottom: 20,
            maxHeight: '200px',
            overflow: 'scroll',
          }}
        >
          <div
            style={{
              maxWidth: '200px',
              maxHeight: '200px',
            }}
          >
            <img
              src={AnxiousGirl}
              alt="anxious-girl"
              style={{
                borderRadius: '50%',
              }}
            />
          </div>

          <div style={{ marginLeft: 20 }}>
            <h3 style={{ color: 'black' }}>
              Meet <strong>Natalia</strong>.
            </h3>
            <p style={{ color: 'grey' }}>22 / Graduate student</p>
            <p>
              Like many of us, she's balancing school, a part-time job, and her
              friends and family. <i>Unlike</i> most of us, however, Natalia
              struggles with <strong>ADHD</strong>.
            </p>
          </div>
        </div>
      </div>
    );
  };
}