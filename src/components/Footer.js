import React from 'react';
import GitHub from '../images/GitHub';
import LinkedIn from '../images/LinkedIn';

const styles = {
  main: {
    display: 'flex',
    flexDirection: 'row',
  },
};

export default class Footer extends React.Component {
  render = () => {
    return (
      <p style={styles.main}>
        <a target="_blank" href="https://www.linkedin.com/in/arambhajan/">
          <LinkedIn size={24} />
        </a>

        <a target="_blank" href="https://github.com/aaronrambhajan">
          <GitHub size={24} />
        </a>
      </p>
    );
  };
}
