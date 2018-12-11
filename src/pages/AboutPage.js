// @flow

import React from 'react';
import Aaron from '../images/aaron.png';

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
              maxHeight: 200,
              maxWidth: 200,
              borderRadius: '50%',
              overflow: 'hidden',
            }}
          >
            <img
              src={Aaron}
              alt="Aaron"
              style={{
                width: 'auto',
                height: '100%',
              }}
            />
          </div>
        </div>

        {/* Bio description */}
        <p
          style={{
            marginTop: 10,
            fontSize: '0.8em',
          }}
        >
          To be totally honest with you, I still feel like an all-too-excited
          4-year-old discovering LEGO for the first time. I’m just a curious
          kid. I’m really passionate about solving problems, and I’ve never been
          afraid to learn anything to do that. My background reflects my passion
          for making connections no one else can. I’m technical, creative, and
          analytical, and I believe that’s all that innovation is.
          Intersections.
        </p>
      </div>
    );
  };
}
