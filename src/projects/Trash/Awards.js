import React from 'react';
import images from '../../images/images';
import { Slides, Prose, SectionContainer, Subheading } from './util';
import ImageWide from '../../components/ImageWide';

export default class extends React.Component {
  render = () => {
    return (
      <SectionContainer>
        <Subheading>Awards</Subheading>

        <Slides
          url="https://docs.google.com/presentation/d/e/2PACX-1vQx_DVKtH2wjFn97FOODSPsX7rvLpYRJJ46jIYdIedwOyS6Mom9ozpeEgIY5u1kPMoO-n7vB4CkB61p/embed?start=true&loop=true&delayms=5000"
          alt="quan-awards"
        />
        <Prose>
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
        </Prose>

        <ImageWide
          image={images.trash.awards_collaborators}
          alt="collaborators"
          style={{ width: '100%', height: 'auto' }}
        />
        <Prose>
          None of this wouldn't have been possible with every single one of
          these people—and so many other people we met along the way. I'm
          forever grateful to have had this experience.
        </Prose>
      </SectionContainer>
    );
  };
}
