// @flow

import React from 'react';
import NataliaNormal from '../images/ADHD/natalia-normal.png';

export default class Persona extends React.Component {
  render = () => {
    return (
      <div
        style={{
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 5,
          paddingBottom: 5,
          marginTop: 10,
          marginBottom: 10,
          backgroundColor: '#e7e7e7',
          borderRadius: 10,
        }}
      >
        <div
          class="with-side-caption"
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
          <div>
            <img src={NataliaNormal} alt="anxious-girl" />
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
        <p>
          Having ADHD, Natalia struggles with <strong>impulsivity</strong>,{' '}
          <strong>hyperactivity</strong>, and <strong>inattention</strong>. But,
          what does that mean? The only thing you need to understand about
          Natalia's symptoms is that it makes{' '}
          <code>
            the <strong>simplest</strong> things feel{' '}
            <strong>impossible</strong>.
          </code>
        </p>
      </div>
    );
  };
}
