// @flow

import React from 'react';
import { colors, changeOpacity } from '../../colors';

import Divider from '../../components/Divider';
import ImageWide from '../../components/ImageWide';
import ProjectInfo from '../../components/ProjectInfo';
import TableOfContents from '../../components/TableOfContents';

import fullProcess from '../../images/trash-field-study/full-process.png';
import torontoBins from '../../images/trash-field-study/toronto-bins.png';
import cupIcon from '../../images/trash-field-study/cup-icon.png';
import labelChange from '../../images/trash-field-study/label-change.svg';
import trashProcess from '../../images/trash-field-study/trash-process.png';

export default class TrashProjectPage extends React.Component {
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
            problem
          </h2>

          <TableOfContents />
        </div>

        <Divider />
        <p>
          <strong>Sorting garbage is hard</strong>. I can think of so many times
          where I approach a bin with a coffee cup in hand and have no idea
          where to put it. The bins are different seemingly everywhere you
          go—bins, holes, labels, and that's without compounding individual
          differences in culture, language, and accessibility.
        </p>
        <Divider />
        <p>
          This is our core problem:{' '}
          <u>waste management has given up on people</u>. They figure people
          don't care, and it's hard to blame them for thinking like that. Who
          uses a garbage bin in a city street? <u>Everyone</u>.
        </p>

        <Divider size={4} />
        <ImageWide
          image={torontoBins}
          alt="toronto-bins"
          style={{
            marginTop: 0,
            height: 'auto',
            width: '100%',
          }}
          caption={{
            text: (
              <div>
                The many different bins around <strong>Toronto</strong>
              </div>
            ),
          }}
        />
        <Divider size={4} />
        <h3 style={{ fontWeight: 600, color: colors.PROJECT_2 }}>impact</h3>
        <p>
          Bad UX aside, <u>who cares</u>? Most of us think garbage bins are a{' '}
          <em>black box</em>
          —surely it ends up in the right place. Unfortunately not.
        </p>
        <Divider size={1} />
        <ImageWide
          image={fullProcess}
          alt="trash-process"
          style={{
            // minWidth: '200%',
            marginTop: 0,
            height: 'auto',
          }}
        />
        <Divider size={4} />
        <p>
          Garbage that starts in our hands so easily ends up across the world,
          just by being in the wrong bin. Ignoring the users of garbage bins
          does more than alienate people.{' '}
          <a href="http://www.cbc.ca/news/technology/recycling-contamination-1.4606893">
            In Toronto, contamination is at <strong>26%</strong>
            —a <strong>1% increase</strong> in contamination costs up to{' '}
            <strong>$1 million</strong> a year.{' '}
          </a>
        </p>
        <Divider />
        <h3 style={{ fontWeight: 600, color: colors.PROJECT_2 }}>solution</h3>
        <p>
          There are so many different factors causing this problem, and the
          reality is that it's a combination of them all.
          <ul
            style={{
              listStyleType: 'disc',
              paddingLeft: 20,
              margin: 0,
            }}
          >
            <li>Education</li>
            <li>Advertising</li>
            <li>Bins</li>
            <li>Labels</li>
            <li>Environment</li>
          </ul>
        </p>
        <Divider />
        <iframe
          src="https://docs.google.com/presentation/d/e/2PACX-1vQq4tyC7XILatJL1k6mDAJx-qbgI40oVAwmUncKiuXOT0C8_KtAh2GpQEvUNxTMbTNcRhNE7kzsgmEt/embed?start=true&loop=true&delayms=3000"
          frameborder="0"
          width="100%"
          height="300"
          allowfullscreen="true"
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
        />

        <Divider />
        <p>
          Our problem with them is that they{' '}
          <u>
            all focus on giving people <strong>more</strong> information
          </u>
          . They don't ask <em>how</em> the information is given—they completely
          ignore the user. So, we started <u>prototyping</u>.
        </p>
        <Divider />
        <iframe
          src="https://docs.google.com/presentation/d/e/2PACX-1vQa3aw0DwEQ7Md3sY2IDut0BM43mJt_p982fPdcMMDecq47jwyTNrFRSA9Gmc0vtMoE2UVF5FdsCnjE/embed?start=true&loop=true&delayms=5000"
          frameborder="0"
          width="100%"
          height="300"
          allowfullscreen="true"
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
        />
        <Divider />
        <p>
          We initially focused on redesigning the bin, because we wanted to work
          on something that would directly affect people using garbage bins
          without putting burden on them. We wanted to invite dialogue between
          the user and waste management. Ultimately, we chose to work on{' '}
          <u>labelling</u> because it allowed us to start trying stuff out and
          influencing behaviour <u>immediately</u>.
        </p>
        <Divider />

        <iframe
          src="https://docs.google.com/presentation/d/e/2PACX-1vR0eBroO0vRUccbm0KSDCuzGRlmVhJAtvJexd2pHhHhE9iYg7OpxjQd03kI2x6THDjcDv70sJ1l2yvC/embed?start=true&loop=true&delayms=5000"
          frameborder="0"
          width="100%"
          height="300"
          allowfullscreen="true"
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
        />
        <Divider />
        <p>
          Labels are a critical decision-making point. They're often overlooked,
          and suffer from the same confusing design as the bins. The key
          difference is that we could create a solution <em>immediately</em>. So
          we did.
        </p>

        <Divider />

        <ImageWide image={cupIcon} alt="label-change" />
        <Divider />
        <p
          style={{
            opacity: 0.5,
            textAlign: 'center',
            fontFamily: 'helvetica',
            fontSize: '0.8em',
          }}
        >
          <u>Note</u>: As of 01/25/19, this write-up is a work-in-progress.
        </p>
        <Divider size={2} />
      </div>
    );
  };
}
