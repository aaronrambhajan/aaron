import React from 'react';
import AaronDrawn from '../images/aaron-drawn.svg';

export default class AaronDrawing extends React.Component {
  render = () => {
    return (
      <div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          <img
            src={AaronDrawn}
            alt="Aaron"
            style={{
              height: 'auto',
              width: '80%',
            }}
          />
        </div>
        <div>
          <p
            style={{
              marginTop: 20,
              opacity: 0.5,
              textAlign: 'right',
              fontSize: '0.7em',
            }}
          >
            by <a href="https://www.instagram.com/augustineng/">Augustine Ng</a>
          </p>
        </div>
      </div>
    );
  };
}
