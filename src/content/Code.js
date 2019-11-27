import React from 'react';
import styled from 'styled-components';
import { MagicListItem } from '../components/MagicListItem';
import { Subheader } from '../Landing';

const Container = styled.div`
  margin-bottom: 4em;
`;

export default class Code extends React.Component {
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
              link="https://github.com/aaronrambhajan/images-scraper"
              title="Spotify Playlist VCS" // 🔬
              headers="Bash, JavaScript | Mack Lab | 2018"
              description="CLI tool for scraping popular search engines to help
            build image databases for classification experiments. Used throughout
            the lab for a variety of experiments."
              toggle={() => {
                this.setState({ displayItem1: !this.state.displayItem1 });
              }}
              isDroppedDown={this.state.displayItem1}
            />
            <MagicListItem
              link="https://github.com/aaronrambhajan/heartbeat-scripts"
              title="Digital Heartbeat Synthesis" // ❤️
              headers="Python, SciPy, Librosa, MATLAB | Mack Lab | 2019"
              description={
                <div>
                  A suite of scripts generating heartbeat sounds for a
                  psychophysics experiment testing perceptual thresholds, based
                  on{' '}
                  <a
                    href="https://github.com/bencholmes/heartbeat"
                    style={{ textDecoration: 'underline' }}
                  >
                    Ben Holmes' heartbeat script
                  </a>
                  . Covers everything from synthesis to file parsing, sorting,
                  and audio effects processing. See{' '}
                  <a
                    href="https://docs.google.com/presentation/d/1GYVKaBqv_7PKEjhkFaf2I5y2KmKbAHzyULz5O2AVHLU/edit?usp=sharing"
                    style={{ textDecoration: 'underline' }}
                  >
                    here
                  </a>{' '}
                  for context.
                </div>
              }
              toggle={() => {
                this.setState({ displayItem2: !this.state.displayItem2 });
              }}
              isDroppedDown={this.state.displayItem2}
            />
            <MagicListItem
              link="https://github.com/aaronrambhajan/hb-staircase"
              title="Heartbeat Perception" // ❤️
              headers="React, Express, MongoDB, Bootstrap | Mack Lab | 2018"
              description={
                <div>
                  A web application to test perceptual thresholds using the{' '}
                  <em>Just-Noticeable Differences</em> paradigm. See{' '}
                  <a
                    href="https://docs.google.com/presentation/d/1GYVKaBqv_7PKEjhkFaf2I5y2KmKbAHzyULz5O2AVHLU/edit?usp=sharing"
                    style={{ textDecoration: 'underline' }}
                  >
                    here
                  </a>{' '}
                  for context.
                </div>
              }
              toggle={() => {
                this.setState({ displayItem3: !this.state.displayItem3 });
              }}
              isDroppedDown={this.state.displayItem3}
            />
            <MagicListItem
              link="https://github.com/aaronrambhajan/-memories"
              title="@memories" // 📚
              headers="Java, JavaFX, Git, Agile | CSC207 | 2018"
              description="Desktop app for managing and tagging image files. Enabled
            users to search tags, review history (and subsequently revert), and
            autosave. Built with a team of 3."
              toggle={() => {
                this.setState({ displayItem4: !this.state.displayItem4 });
              }}
              isDroppedDown={this.state.displayItem4}
            />
            <MagicListItem
              link="https://github.com/aaronrambhajan/images-scraper"
              title="Image Scraper" // 🔬
              headers="Bash, JavaScript | Mack Lab | 2018"
              description="CLI tool for scraping popular search engines to help
            build image databases for classification experiments. Used throughout
            the lab for a variety of experiments."
              toggle={() => {
                this.setState({ displayItem5: !this.state.displayItem5 });
              }}
              isDroppedDown={this.state.displayItem5}
            />
            <MagicListItem
              link="https://github.com/aaronrambhajan/images-scraper"
              title="Quan" // 🔬
              headers="Bash, JavaScript | Mack Lab | 2018"
              description="CLI tool for scraping popular search engines to help
            build image databases for classification experiments. Used throughout
            the lab for a variety of experiments."
              toggle={() => {
                this.setState({ displayItem6: !this.state.displayItem6 });
              }}
              isDroppedDown={this.state.displayItem6}
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
        </Container>
      );
    }

    return (
      <Container>
        <Subheader>Projects</Subheader>
        <ul>
          <MagicListItem
            link="https://github.com/aaronrambhajan/images-scraper"
            title="Spotify Playlist VCS" // 🔬
            headers="Bash, JavaScript | Mack Lab | 2018"
            description="CLI tool for scraping popular search engines to help
            build image databases for classification experiments. Used throughout
            the lab for a variety of experiments."
            toggle={() => {
              this.setState({ displayItem1: !this.state.displayItem1 });
            }}
            isDroppedDown={this.state.displayItem1}
          />
          <MagicListItem
            link="https://github.com/aaronrambhajan/heartbeat-scripts"
            title="Digital Heartbeat Synthesis" // ❤️
            headers="Python, SciPy, Librosa, MATLAB | Mack Lab | 2019"
            description={
              <div>
                A suite of scripts generating heartbeat sounds for a
                psychophysics experiment testing perceptual thresholds, based on{' '}
                <a
                  href="https://github.com/bencholmes/heartbeat"
                  style={{ textDecoration: 'underline' }}
                >
                  Ben Holmes' heartbeat script
                </a>
                . Covers everything from synthesis to file parsing, sorting, and
                audio effects processing. See{' '}
                <a
                  href="https://docs.google.com/presentation/d/1GYVKaBqv_7PKEjhkFaf2I5y2KmKbAHzyULz5O2AVHLU/edit?usp=sharing"
                  style={{ textDecoration: 'underline' }}
                >
                  here
                </a>{' '}
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
              this.setState({ displayItem4: !this.state.displayItem4 });
            }}
            isDroppedDown={this.state.displayItem4}
          />
          <li>
            <a
              href="/code"
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
