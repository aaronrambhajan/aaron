// @flow

import React from 'react';
import styled from 'styled-components';
import images from '../../images/images';
import Header from '../../components/Header';
import ImageWide from '../../components/ImageWide';
import { SectionContainer, SectionHeader, Prose, CenteredImage } from './util';

export default class TrashMethodology extends React.Component {
  render = () => {
    return (
      <SectionContainer>
        <SectionHeader
          title="Methodology"
          description="Measuring label success"
        />

        {/* <ImageWide
          image={images.trash.methodology_label_change}
          alt="methodology-change"
        /> */}

        <Prose>
          The challenge of measuring label success is figuring out how to{' '}
          <strong>test it as it's used in the real world</strong>. How do we
          mimic the physical environment? The psychological environment? How do
          we control all of the confounds that come in the real world?
        </Prose>

        <Prose>
          In my case, it was impossible to control everything—but this presented
          a huge opportunity. See, garbage sorting has two key stakeholders:{' '}
          <strong>people who use garbage bins</strong> and{' '}
          <strong>waste management</strong>. Their needs are seemingly opposite:
          garbage bin users care about experience and ease of use, where waste
          management cares about accuracy, cleanliness, and ease of disposal.
        </Prose>

        <CenteredImage
          image={images.trash.methodology_scope}
          alt="methodology-scope"
        />

        <Prose>
          We can't merely say "people have a better experience" or "people
          perform better"—I needed to use methods that would help us understand{' '}
          <em>why</em>. So, how did I go beyond this? I based all of this
          research on an A/B test between old and new labels, but I used
          different methods to retain different contexts.
        </Prose>
      </SectionContainer>
    );
  };
}
