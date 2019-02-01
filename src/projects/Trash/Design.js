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

        <Divider size={4} />
        <p>
          <strong>Sorting garbage is hard</strong>. What goes where? Everything
          from the bins to the shape of the holes is different everywhere you
          go. That's without compounding individual differences in culture,
          language, and accessibility. This is the crux of the problem:{' '}
          <span style={{ backgroundColor: 'yellow' }}>
            <strong>waste management isn't human-centered</strong>
          </span>
          .
        </p>

        <Divider size={4} />
        <ImageWide
          image={torontoBins}
          alt="toronto-bins"
          caption={{
            text: (
              <div style={{ fontFamily: 'helvetica', fontWeight: 'normal' }}>
                The many different bins around Toronto
              </div>
            ),
          }}
        />
        <Divider size={4} />
        <p>
          They all focus on <strong>giving people more information</strong>.
          They don't ask <em>how</em> the information is given—they ignore the
          user.
        </p>
        <Divider size={4} />
        <iframe
          title="reasons"
          src="https://docs.google.com/presentation/d/e/2PACX-1vQq4tyC7XILatJL1k6mDAJx-qbgI40oVAwmUncKiuXOT0C8_KtAh2GpQEvUNxTMbTNcRhNE7kzsgmEt/embed?start=true&loop=true&delayms=3000"
          frameborder="0"
          width="100%"
          height="300"
          allowfullscreen="true"
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
        />
        <Divider size={4} />
        <p>
          We wanted to work on something that would directly affect garbage bin
          users and invite dialogue between users and waste management.
          Ultimately, we chose to work on <strong>labelling</strong>
          —they're often overlooked, they're confusing, and crucially, it let us
          move quickly!
        </p>
        <Divider size={4} />

        {/* <iframe
          src="https://docs.google.com/presentation/d/e/2PACX-1vR0eBroO0vRUccbm0KSDCuzGRlmVhJAtvJexd2pHhHhE9iYg7OpxjQd03kI2x6THDjcDv70sJ1l2yvC/embed?start=true&loop=true&delayms=5000"
          frameborder="0"
          width="100%"
          height="300"
          allowfullscreen="true"
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
        />

        <Divider size={4} /> */}

        <ImageWide image={cupIcon} alt="label-change" />
        <Divider size={4} />
        <h3 style={{ fontWeight: 600 }}>Impact</h3>
        <Divider size={0.33} />

        <p>
          Most of us think that our garbage ends up in the right place no matter
          where we put it—unfortunately not.
        </p>
        <Divider size={4} />
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
          Garbage that starts in our hands ends up across the world just by
          being in the wrong bin. Ignoring garbage bin users does more than
          alienate people:{' '}
          <strong>
            a <span style={{ backgroundColor: 'yellow' }}>1% increase</span> in
            contamination costs up to{' '}
            <span style={{ backgroundColor: 'yellow' }}>$1 million</span> a year
          </strong>
          , and in Toronto,{' '}
          <a href="http://www.cbc.ca/news/technology/recycling-contamination-1.4606893">
            contamination is at 26%
          </a>
          —the highest in the country. Something needed to be done about this.
        </p>
        <Divider size={4} />
      </div>
    );
  };
}
