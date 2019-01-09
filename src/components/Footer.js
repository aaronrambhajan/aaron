import React from 'react';
import GitHub from '../images/GitHub';
import LinkedIn from '../images/LinkedIn';
import Email from '../images/Email';
import CV from '../images/CV';

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
          {/* <a
            target="_blank"
            href="https://www.dropbox.com/s/600rbuu5ydpo8lk/Aaron-Rambhajan-Resume.pdf?dl=0"
          >
            <CV size={22} />
          </a> */}
          <a target="_blank" href="mailto:aaron.rambhajan@mail.utoronto.ca">
            <Email size={24} />
          </a>
        </p>
      </div>
    );
  };
}
