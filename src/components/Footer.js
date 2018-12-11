import React from 'react';
import GitHub from '../images/GitHub';
import LinkedIn from '../images/LinkedIn';
import Email from '../images/Email';

export default class Footer extends React.Component {
  render = () => {
    return (
      <div>
        <p className="footer">
          <a target="_blank" href="https://www.linkedin.com/in/arambhajan/">
            <LinkedIn size={24} />
          </a>

          <a target="_blank" href="https://github.com/aaronrambhajan">
            <GitHub size={24} />
          </a>

          <a target="_blank" href="mailto:aaron.rambhajan@mail.utoronto.ca">
            <Email size={24} />
          </a>
        </p>
      </div>
    );
  };
}
