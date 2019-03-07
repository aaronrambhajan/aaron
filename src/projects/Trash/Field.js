// @flow

import React from 'react';
import { colors, changeOpacity } from '../../colors';
import images from '../../images/images';

import {
  SectionContainer,
  SectionTitleContainer,
  Prose,
  Subheading,
  SectionHeader,
  Slides,
  CenteredImage,
} from './util';
import Header from '../../components/Header';
import ProjectInfo from '../../components/ProjectInfo';
import NotesTable from '../../components/NotesTable';

export default class TrashField extends React.Component {
  render = () => {
    return (
      <SectionContainer>
        <SectionTitleContainer>
          <SectionHeader
            title="Field Evaluation"
            description="Do the new labels perform better in the real world?"
          />
        </SectionTitleContainer>

        <Subheading>Objective</Subheading>
        <Prose>
          I structured the experiment as a <strong>field A/B test</strong>, but
          adapted it to properly study the context that people actually use bins
          in. To understand everything that needed to be controlled, we ran{' '}
          <strong>straight to testing</strong>!
        </Prose>

        <CenteredImage
          image={images.trash.field_iterations}
          alt="field-iterations"
        />

        <Prose>
          We started off by watching people for hours and tallying their items,
          one-by-one. We eventually got smart and started taking pictures,
          instead (more about our iterations{' '}
          <a href="https://www.dropbox.com/s/mfznnvugt8y8amq/QUAN-%281%29-Iterations.pdf?dl=0">
            here
          </a>
          ). We managed to collect enough data in the first 3 attempts (5,000+
          items!) to pitch and win 2nd prize from the{' '}
          <a href="#awards">United Nations</a>.
        </Prose>

        <Subheading>Experimental Design</Subheading>

        <Prose>
          We conducted this study over 8 weeks, 5 days a week, 3 times a day in
          6 different settings at Sidney Smith Hall at the University of
          Toronto. I implemented a control during the experimental condition
          (new labels) to cope with potential confounds like time of day, bin
          fullness, and foot traffic (for more, read{' '}
          <a href="https://www.dropbox.com/s/li3xogv2pkq30lj/Experimental%20Design_%20TRASH.IO.pdf?dl=0">
            here
          </a>
          ).
        </Prose>

        <CenteredImage
          image={images.trash.field_timeline}
          alt="field-timeline"
        />

        <Subheading>Data Processing</Subheading>

        <Prose>
          Data was collected by taking photos of each bin hole. Before each
          session, a form was filled describing environment conditions. After
          each set of bin photos, a form was filled describing its fullness,
          order, and state. Photos were uploaded to our database, then items
          were annotated in the web application we created. Contamination rate
          was then calculated by taking the # correct items / # items in a given
          bin hole.
        </Prose>

        <CenteredImage
          image={images.trash.field_processing}
          alt="field-processing"
        />

        <Subheading>Collaboration</Subheading>
        <Prose>
          In collaboration with the Sustainability Office, we were able to
          directly use the school environment to test. Consequently, we made 3
          siginficant changes in the experimental condition:
          <ul style={{ listStyleType: 'disc', paddingLeft: 30, margin: 0 }}>
            <li>
              <strong>Label change</strong>: We took a data-driven approach to
              choosing which items should be represented on the labels—the most
              frequent contaminants based on our data, and problem items
              identified by the Sustainability Office.
            </li>
            <li>
              <strong>Icon change</strong>: Our label design was made to be
              clear and consistent, using the same dimensions
            </li>
            <li>
              <strong>Order change</strong>: In order to map items to the hole
              shapes better, we changed the order of categories
            </li>
          </ul>
        </Prose>

        <Subheading>Analysis</Subheading>

        <Prose>
          Our labels <strong>reduce contamination by 5%</strong>. The result was
          significant when subjected to T-testing, but exploring a little
          further, we starting seeing that there are a number of items where our
          labelling made it <em>worse</em>. One of the most difficult parts of
          this project was <strong>controlling learned effects</strong>
          —as in, the previous system has been learned for extended period of
          time, and we have no guarantee that users will pay attention to the
          new ones.
        </Prose>

        <Slides
          url="https://docs.google.com/presentation/d/e/2PACX-1vQPm10uYg7MOROxF2Fd-5NsBNbr1Gsf1n0uBF-P0ucD04jeVrgnTD4jp5xqC9sAPyAoyWFK66Al1N10/embed?start=true&loop=true&delayms=5000"
          alt="interesting"
        />

        <Subheading>Impact</Subheading>
        <Prose>
          Though contamination is still bad, it's a little better. In Toronto, a
          5% improvement could turn into $5 million in savings—that's from a
          sticker that costs $0.30. Labelling is a little thing that can matter
          a lot at scale! We still can’t conclude that labelling (and
          behaviour-focused interventions, generally) are the best way to go,
          but it certainly introduces a new way of thinking that focuses on the
          users, key actors in waste management system who we always forget
          about.
        </Prose>

        <Slides
          url="https://docs.google.com/presentation/d/e/2PACX-1vTUGxAncXszff-_gP-wLVVhZ0jZPzWNaADiDRhUF6jrQAOU7znE5Lct3m_zThllEq3UFdoRHUUxRd5n/embed?start=true&loop=true&delayms=5000"
          title="stuff"
        />

        <Prose>
          That said, future research should focus on separating and analyzing
          the sorting process. Because we developed an integrated solution, we
          weren’t able to examine everything–we focused on understanding whether
          this is a viable intervention at U of T. We hope to introduce this
          labelling system wherever we can, we aspire for this idea to be
          open-source.
        </Prose>

        <Subheading>Materials</Subheading>

        <NotesTable
          info={[
            {
              title: 'Experiment Iterations',
              description:
                'Detailed pictures on the initial, guerilla attempts at trying to conduct the experiment',
              link:
                'https://www.dropbox.com/s/mfznnvugt8y8amq/QUAN-%281%29-Iterations.pdf?dl=0',
            },
            {
              title: 'Sustainability Office',
              description:
                'We performed this experiment in collaboration with the Sustainability Office. We were featured in their 2017-18 yearbook.',
              link:
                'http://www.fs.utoronto.ca/SustainabilityOffice/SustainabilityYearbook2017-18',
            },
            {
              title: 'Experimental Design',
              description:
                'Details about my design of these experiments along with a comprehensive list of confounds.',
              link:
                'https://www.dropbox.com/s/li3xogv2pkq30lj/Experimental%20Design_%20TRASH.IO.pdf?dl=0',
            },
            {
              title: 'Pilot Deck',
              description:
                'These are slides from our original pitch to the United Nations, and later, the Sustainability Office, after having only done our pilot.',
              link:
                'https://www.dropbox.com/s/n2w4zxl4d6ydrbf/QUAN-%282%29-Pilot.pdf?dl=0',
            },
          ]}
        />
      </SectionContainer>
    );
  };
}
