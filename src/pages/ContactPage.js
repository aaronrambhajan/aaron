// @flow

import React from 'react';
import Twitter from '../images/Twitter';
import Instagram from '../images/Instagram';
import Soundcloud from '../images/Soundcloud';

export default class ContactPage extends React.Component {
  render = () => {
    return (
      <div>
        <h1 className="intro-hed">
          You can find me in a few different places. Catch me chirping with the
          birds on{' '}
          <a href="https://twitter.com/AARONRAMBHAJAN">
            <Twitter size={24} />
          </a>
          , snappin' around at{' '}
          <a href="https://instagram.com/aaronrambhajan/">
            <Instagram size={24} />
          </a>
          , making noise on{' '}
          <a href="https://soundcloud.com/rambhajan">
            <Soundcloud size={24} />
          </a>
          , or just send me an{' '}
          <a href="mailto:aaron.rambhajan@mail.utoronto.ca">email</a>. If those
          don't suit your fancy, you can find my LinkedIn and GitHub below. I'm
          always looking for new things to learn.
        </h1>
      </div>
    );
  };
}
