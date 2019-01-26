import React from 'react';
import { colors } from '../colors';

import Divider from '../components/Divider';
import TableOfContents from '../components/TableOfContents';
import Collaborators from '../images/trash-field-study/collaborators.png';

export default class extends React.Component {
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
            awards
          </h2>

          <TableOfContents />
        </div>

        <Divider />
        <iframe
          title="quan-awards"
          src="https://docs.google.com/presentation/d/e/2PACX-1vQx_DVKtH2wjFn97FOODSPsX7rvLpYRJJ46jIYdIedwOyS6Mom9ozpeEgIY5u1kPMoO-n7vB4CkB61p/embed?start=true&loop=true&delayms=5000"
          frameborder="0"
          width="100%"
          height="300"
          allowfullscreen="true"
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
        />
        <Divider />
        <p>
          <ul style={{ listStyleType: 'disc', paddingLeft: 20 }}>
            <li>
              Placed 2<sup style={{ fontSize: '0.5em' }}>nd</sup> / 2000 teams
              in the <strong>United Nations & Baidu</strong>{' '}
              <em>Geek for Good</em> design competition ($20,000 seed funding)
            </li>
            <li>
              Selected to present at the{' '}
              <em>
                International Symposium on Sustainable Systems & Technology
              </em>{' '}
              Conference
            </li>
            <li>
              Co-authored an indicator for <em>ISO 37122</em> on Smart Cities
            </li>
            <li>
              Collaborate and consulted the Sustainability Office on a user
              research study
            </li>
            <li>
              Collaborated with Nobel Prize-winner, Dr. John B. Robinson on our
              field study
            </li>
            <li>Became a researcher at the Mack Lab</li>
            <li>
              Brought garbage bin labels around the world and got to see
              first-hand how design can impact communities
            </li>
          </ul>
        </p>

        <img
          src={Collaborators}
          alt="collaborators"
          style={{ width: '100%', height: 'auto' }}
        />
        <Divider />
        <p>
          None of this wouldn't have been possible with every single one of
          these people—and so many other people we met along the way. I'm
          forever grateful to have had this experience.
        </p>
        <Divider />
      </div>
    );
  };
}
