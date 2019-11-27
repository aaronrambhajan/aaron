import React from 'react';
import styled from 'styled-components';
import { MagicListItem } from '../components/MagicListItem';
import { Subheader } from '../Landing';

const Container = styled.div`
  margin-bottom: 4em;
`;

const Link = styled.a`
  text-decoration: underline;
`;

export default class Projects extends React.Component {
  state: {
    displayItem1: Boolean,
    displayItem2: Boolean,
    displayItem3: Boolean,
    displayItem4: Boolean,
    displayItem5: Boolean,
    displayItem6: Boolean,
  };

  state = {
    displayItem1: false,
    displayItem2: false,
    displayItem3: false,
    displayItem4: false,
    displayItem5: false,
    displayItem6: false,
  };

  render = () => {
    if (!this.props.isLanding) {
      return (
        <Container>
          <Subheader>Code</Subheader>
          <ul>
            <MagicListItem
              link="https://github.com/aaronrambhajan/heartbeat-scripts"
              title="Digital Heartbeat Synthesis" // ❤️
              headers="Python, SciPy, Librosa, MATLAB | Mack Lab | 2019"
              description={
                <div>
                  A suite of scripts generating heartbeat sounds for a
                  psychophysics experiment testing perceptual thresholds, based
                  on{' '}
                  <Link href="https://github.com/bencholmes/heartbeat">
                    Ben Holmes' heartbeat script
                  </Link>
                  . Covers everything from synthesis to file parsing, sorting,
                  and audio effects processing. See{' '}
                  <Link href="https://docs.google.com/presentation/d/1GYVKaBqv_7PKEjhkFaf2I5y2KmKbAHzyULz5O2AVHLU/edit?usp=sharing">
                    here
                  </Link>{' '}
                  for context.
                </div>
              }
              toggle={() => {
                this.setState({ displayItem1: !this.state.displayItem1 });
              }}
              isDroppedDown={this.state.displayItem1}
            />
            <MagicListItem
              link="https://github.com/aaronrambhajan/hb-staircase"
              title="Heartbeat Perception" // ❤️
              headers="React, Express, MongoDB, Bootstrap | Mack Lab | 2018"
              description={
                <div>
                  A web application to test perceptual thresholds using the{' '}
                  <em>Just-Noticeable Differences</em> paradigm. See{' '}
                  <Link href="https://docs.google.com/presentation/d/1GYVKaBqv_7PKEjhkFaf2I5y2KmKbAHzyULz5O2AVHLU/edit?usp=sharing">
                    here
                  </Link>{' '}
                  for context.
                </div>
              }
              toggle={() => {
                this.setState({ displayItem2: !this.state.displayItem2 });
              }}
              isDroppedDown={this.state.displayItem2}
            />
            <MagicListItem
              link="https://github.com/aaronrambhajan/-memories"
              title="@memories" // 📚
              headers="Java, JavaFX, Git, Agile | CSC207 | 2018"
              description="Desktop app for managing and tagging image files. Enabled
            users to search tags, review history (and subsequently revert), and
            autosave. Built with a team of 3."
              toggle={() => {
                this.setState({ displayItem3: !this.state.displayItem3 });
              }}
              isDroppedDown={this.state.displayItem3}
            />
            <MagicListItem
              link="https://github.com/aaronrambhajan/images-scraper"
              title="Image Scraper" // 🔬
              headers="Bash, JavaScript | Mack Lab | 2018"
              description="CLI tool for scraping popular search engines to help
            build image databases for classification experiments. Used throughout
            the lab for a variety of experiments."
              toggle={() => {
                this.setState({ displayItem4: !this.state.displayItem4 });
              }}
              isDroppedDown={this.state.displayItem4}
            />
            <li>
              <a
                href="/"
                style={{
                  textDecoration: 'none',
                }}
              >
                ...
              </a>
            </li>
          </ul>
          <Subheader>Research</Subheader>
          <ul>
            <MagicListItem
              link="https://www.dropbox.com/sh/h3c66jkngi6a053/AACm6rvn0RHXu_7T6aTz-W28a?dl=0"
              title="Quan" // ❤️
              headers="Leadership, Experiment Design, User Research | 2016 - 2018"
              description={
                <div>
                  Co-founded a non-profit to simplify sorting garbage. Won 2
                  <sup style={{ fontSize: '0.5em' }}>nd</sup> / 2000 teams at
                  the UN & Baidu design challenge. Presented research at the{' '}
                  <Link href="https://www.issst.net/">
                    International Symposium on Sustainable Systems and
                    Technology
                  </Link>
                  . Co-authored a performance indicator for{' '}
                  <Link href="https://www.iso.org/standard/69050.html">
                    ISO 37122
                  </Link>
                  , the new standard for smart cities.
                </div>
              }
              toggle={() => {
                this.setState({ displayItem5: !this.state.displayItem5 });
              }}
              isDroppedDown={this.state.displayItem5}
            />
          </ul>
        </Container>
      );
    }

    return (
      <Container>
        <Subheader>Projects</Subheader>
        <ul>
          <MagicListItem
            link="https://github.com/aaronrambhajan/heartbeat-scripts"
            title="Digital Heartbeat Synthesis" // ❤️
            headers="Python, SciPy, Librosa, MATLAB | Mack Lab | 2019"
            description={
              <div>
                A suite of scripts generating heartbeat sounds for a
                psychophysics experiment testing perceptual thresholds, based on{' '}
                <Link href="https://github.com/bencholmes/heartbeat">
                  Ben Holmes' heartbeat script
                </Link>
                . Covers everything from synthesis to file parsing, sorting, and
                audio effects processing. See{' '}
                <Link href="https://docs.google.com/presentation/d/1GYVKaBqv_7PKEjhkFaf2I5y2KmKbAHzyULz5O2AVHLU/edit?usp=sharing">
                  here
                </Link>{' '}
                for context.
              </div>
            }
            toggle={() => {
              this.setState({ displayItem1: !this.state.displayItem1 });
            }}
            isDroppedDown={this.state.displayItem1}
          />
          <MagicListItem
            link="https://github.com/aaronrambhajan/hb-staircase"
            title="Heartbeat Perception" // ❤️
            headers="React, Express, MongoDB, Bootstrap | Mack Lab | 2018"
            description={
              <div>
                A web application to test perceptual thresholds using the{' '}
                <em>Just-Noticeable Differences</em> paradigm. See{' '}
                <Link href="https://docs.google.com/presentation/d/1GYVKaBqv_7PKEjhkFaf2I5y2KmKbAHzyULz5O2AVHLU/edit?usp=sharing">
                  here
                </Link>{' '}
                for context.
              </div>
            }
            toggle={() => {
              this.setState({ displayItem2: !this.state.displayItem2 });
            }}
            isDroppedDown={this.state.displayItem2}
          />
          <MagicListItem
            link="https://github.com/aaronrambhajan/-memories"
            title="@memories" // 📚
            headers="Java, JavaFX, Git, Agile | CSC207 | 2018"
            description="Desktop app for managing and tagging image files. Enabled
            users to search tags, review history (and subsequently revert), and
            autosave. Built with a team of 3."
            toggle={() => {
              this.setState({ displayItem3: !this.state.displayItem3 });
            }}
            isDroppedDown={this.state.displayItem3}
          />
          <li>
            <a
              href="/projects"
              style={{
                textDecoration: 'none',
              }}
            >
              ...
            </a>
          </li>
        </ul>
      </Container>
    );
  };
}
