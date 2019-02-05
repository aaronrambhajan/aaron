// @flow

import React from 'react';
import { colors } from '../../colors';

import ProjectInfo from '../../components/ProjectInfo';
import Divider from '../../components/Divider';
import TableOfContents from '../../components/TableOfContents';
import NotesTable from '../../components/NotesTable';

export default class TrashField extends React.Component {
  props: {
    id: string,
  };

  render = () => {
    return (
      <div id={this.props.id}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <h2
            style={{
              fontWeight: 100,
              color: colors.PROJECT_2,
              fontSize: '150%',
            }}
          >
            field evaluation
          </h2>

          <TableOfContents />
        </div>
        <Divider size={2} />
        <p
          style={{
            fontSize: '1.25em',
            textAlign: 'center',
          }}
        >
          <em>
            Do the <u>new</u> labels perform better than the <u>old</u> labels
            in the real world?
          </em>
        </p>
        <Divider size={2} />
        <ProjectInfo
          roles={['Experimental Design', 'Data Analysis']}
          timeline="Dec. 2016 - Dec. 2017"
          team={['Te Chen', 'Dr. John Robinson', 'Dr. Colin Furness']}
          methods={['Field Evaluation', 'A/B testing']}
        />
        <Divider />
        <h3 style={{ fontWeight: 600, color: colors.PROJECT_2 }}>objective</h3>
        <p>
          The primary objective was to determine the effectiveness of the new
          labels against the old labels. Secondary objectives included any
          insights about changes in order, and observations from interacting
          with users, caretaking staff, and building staff during data
          collection.
        </p>
        <Divider size={2} />
        <h3 style={{ fontWeight: 600, color: colors.PROJECT_2 }}>
          experimental design
          <span style={{ fontWeight: 100 }}>: background</span>
        </h3>
        <Divider />
        <iframe
          src="https://docs.google.com/presentation/d/e/2PACX-1vQi0QT8ZPNqr3t2uB09upsjYKHPnCdZUo4TI_eCMwxnBe_ycJ5JKz3xtomitbgEAvLEixFgCbaFygSH/embed?start=true&loop=true&delayms=5000"
          frameborder="0"
          width="100%"
          height="300"
          allowfullscreen="true"
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
        />
        <Divider />
        <p>
          It took 3 failed prototypes, before I designed the complete
          experiment—though we used the 3rd, the <u>pilot experiment</u>, having
          tallied 4,714 items to pitch to the United Nations (see{' '}
          <a href="#awards">awards</a> for UN results, and{' '}
          <a href="https://www.dropbox.com/s/n2w4zxl4d6ydrbf/QUAN-%282%29-Pilot.pdf?dl=0">
            here
          </a>{' '}
          for the design and results from the pilot) and get official
          supervision from Dr. John Robinson and Dr. Colin Furness for the final
          iteration.
        </p>
        <Divider size={2} />
        <h3 style={{ fontWeight: 600, color: colors.PROJECT_2 }}>
          experimental design
          <span style={{ fontWeight: 100 }}>: final</span>
        </h3>
        <Divider />
        <iframe
          src="https://docs.google.com/presentation/d/e/2PACX-1vQt-EhT2_-nB0Ee2mcPRR-VXZ_oIUM0FNdy_lDv2AGTT9vb5rLMNc_aHDR8uGN5mbomC83AXYxwsmCe/embed?start=true&loop=true&delayms=5000"
          frameborder="0"
          width="100%"
          height="300"
          allowfullscreen="true"
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
        />
        <Divider />
        <p>
          We conducted this study over 8 weeks, 5 days a week, 3 times a day in
          6 different settings at Sidney Smith Hall @ University of Toronto. I
          implemented a control during the experimental condition (new labels)
          in order to cope with a miscellany of confounds: weather, time of day,
          bin fullness, busyness—for further documentation, you can read{' '}
          <a href="https://www.dropbox.com/s/li3xogv2pkq30lj/Experimental%20Design_%20TRASH.IO.pdf?dl=0">
            this link
          </a>
          . This design was made to be as rigorous as possible—we even built our
          own annotation tool to test.
        </p>
        <Divider />
        <iframe
          src="https://docs.google.com/presentation/d/e/2PACX-1vS1ckgvILEkzLfn3kK2mASA29FxZp2nEAx6B8qSTE2vIXul1o_-BpFBsIbCpZA9CQmI-F10WLn8Bgv6/embed?start=true&loop=true&delayms=5000"
          frameborder="0"
          width="100%"
          height="300"
          allowfullscreen="true"
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
        />
        <Divider />
        <p>
          In collaboration with the Sustainability Office, we were able to
          directly use the school environment to test. Consequently, we made 3
          siginficant changes in the <u>experimental condition</u>:
          <ul style={{ listStyleType: 'disc', padding: 30, margin: 0 }}>
            <li>
              <strong>Label change</strong>: We took a data-driven approach to
              choosing which items should be represented on the labels—the{' '}
              <u>most frequent contaminants</u> based on our data, and{' '}
              <u>problem items</u> identified by the Sustainability Office.
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
        </p>
        <Divider />
        {/* <h3 style={{ fontWeight: 600, color: colors.PROJECT_2 }}>
              results overview
            </h3>
            <Divider />
            <iframe
              src="https://docs.google.com/presentation/d/e/2PACX-1vQCwbTAE1KCihxyUvql5kST9DyhQo0xIKTVFCh7ewknKsMFVy1lmPnkcjTJRHZOBH0CGkSz4KWjfttS/embed?start=true&loop=true&delayms=5000"
              frameborder="0"
              width="100%"
              height="300"
              allowfullscreen="true"
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
            />
            <Divider />
            <p>
              After collecting data for 8 weeks, 5 days a week, 3 times a day—we
              collected just under 16,000 images. Here, you can see the spread
              of data we collected by area and date.
            </p> */}
        <h3 style={{ fontWeight: 600, color: colors.PROJECT_2 }}>analysis</h3>
        <Divider />
        <iframe
          src="https://docs.google.com/presentation/d/e/2PACX-1vQPm10uYg7MOROxF2Fd-5NsBNbr1Gsf1n0uBF-P0ucD04jeVrgnTD4jp5xqC9sAPyAoyWFK66Al1N10/embed?start=true&loop=true&delayms=5000"
          frameborder="0"
          width="100%"
          height="300"
          allowfullscreen="true"
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
        />
        <Divider />
        <p>
          Our labels reduce contamination by <strong>5%</strong>. The result was
          significant when subjected to T-testing, but exploring a little
          further, we starting seeing that there are a number of items where our
          labelling made it <em>worse</em>. One of the most difficult parts of
          this project was controlling <u>learned effects</u>
          —as in, the previous system has been learned for extended period of
          time, and we have no guarantee that users will pay attention to the
          new ones.
        </p>
        <Divider size={2} />
        <h3 style={{ fontWeight: 600, color: colors.PROJECT_2 }}>
          impact & conclusions
        </h3>
        <Divider />
        <iframe
          src="https://docs.google.com/presentation/d/e/2PACX-1vTUGxAncXszff-_gP-wLVVhZ0jZPzWNaADiDRhUF6jrQAOU7znE5Lct3m_zThllEq3UFdoRHUUxRd5n/embed?start=true&loop=true&delayms=5000"
          frameborder="0"
          width="100%"
          height="300"
          allowfullscreen="true"
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
        />
        <Divider />
        <p>
          Though contamination is still bad, it's a little better. In Toronto, a
          5% improvement could turn into $5 million in savings—that's from a
          sticker that costs $0.30.{' '}
          <u>Labelling is a little thing that can matter a lot at scale</u>! We
          still can’t conclude that labelling (and behaviour-focused
          interventions, generally) are the best way to go, but it certainly
          introduces <u>a new way of thinking that focuses on the users</u>, key
          actors in waste management system who we always forget about.
        </p>
        <Divider />
        <p>
          That said, future research should focus on separating and analyzing
          the sorting process. Because we developed an integrated solution, we
          weren’t able to examine everything–we focused on understanding whether
          this is a viable intervention at U of T. We hope to introduce this
          labelling system wherever we can, we aspire for this idea to be
          open-source.
        </p>
        <Divider size={2} />
        <h3 style={{ fontWeight: 600, color: colors.PROJECT_2 }}>notes</h3>
        <Divider size={0.33} />

        <NotesTable
          info={[
            {
              title: 'Sustainability office',
              description:
                'We performed this experiment in collaboration with the Sustainability Office to build for waste management.',
              link:
                'http://www.fs.utoronto.ca/SustainabilityOffice/SustainabilityYearbook2017-18',
            },
            {
              title: 'Experimental design',
              description: 'Details about magic',
              link:
                'https://www.dropbox.com/s/li3xogv2pkq30lj/Experimental%20Design_%20TRASH.IO.pdf?dl=0',
            },
            {
              title: 'Pilot deck',
              description: 'Slides from our original pilot pitch',
              link:
                'https://www.dropbox.com/s/n2w4zxl4d6ydrbf/QUAN-%282%29-Pilot.pdf?dl=0',
            },
            {
              title: 'S.O. yearbook',
              description:
                "Featured in the Sustainability Office's 2017-18 yearbook",
              link:
                'http://www.fs.utoronto.ca/SustainabilityOffice/SustainabilityYearbook2017-18',
            },
          ]}
        />
        {/* <p>
              <strong>Ethnography: </strong>
              The first two iterations of this study weren't just about tallying
              what was right and wrong—we went up to people and talked to them,
              observerd them in the real environments (Eaton Centre, ROM) where
              they're already doing something else. We watched them and
              interviewed people and observed and iteracted with the people who
              use garbage bins every single day. Spent entire days there! I
              really wanted to understand...what do people actually experience
              when they do this? Wrote down all of the observations possbile.
            </p>
            <p>
              Sorted ourselves, observed each other... still tallying. Started
              form some intuitions about how <u>passive</u> of a process it is.
            </p>
            <p>
              Eventually, after our initial iterations, I realized something:
              I'm them. I empathize with people who do this because I also don't
              care—I just want to throw my stuff away and go on with my day.
              Ultimately, people <strong>don't care</strong> about garbage. And
              why should they! Let them live their lives.
            </p>

            <p>
              Field evaluation started ethnographical—tallying, observing
              people, trying to collect as much data as possible—all during
              Christmastime at a huge shopping mall. We gained enough
              information and got more rigorous through our iterations—when we
              landed, we had funding, and were trying to rigorously prove and
              understand how they worked. We ended up with an 8-week evaluation.
              What did it feel like to throw out garbage in a <em>real</em>{' '}
              context?
            </p>
            <p>
            Teamwork: Collaborating and reaching out to Professors,
                  reaching out to researchers in the area for advice,
                  collaborating with the Sustainability Office to calibrate our
                  product impact, help from research assistants
            </p> */}
      </div>
    );
  };
}
