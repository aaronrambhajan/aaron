import React from 'react';
import { MagicListItem } from '../components/MagicListItem';
import { Subheader } from '../Landing';

export default class Code extends React.Component {
  state: {
    songOneDrop: boolean,
    songTwoDrop: boolean,
    songThreeDrop: boolean,
    songFourDrop: boolean,
  };

  state = {
    songOneDrop: false,
    songTwoDrop: false,
    songThreeDrop: false,
    songFourDrop: false,
  };

  render = () => {
    if (!this.props.isLanding) {
      return (
        <div style={{ marginBottom: '4em' }}>
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
                this.setState({ songOneDrop: !this.state.songOneDrop });
              }}
              isDroppedDown={this.state.songOneDrop}
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
                this.setState({ songTwoDrop: !this.state.songTwoDrop });
              }}
              isDroppedDown={this.state.songTwoDrop}
            />
            <MagicListItem
              link="https://github.com/aaronrambhajan/-memories"
              title="@memories" // 📚
              headers="Java, JavaFX, Git, Agile | CSC207 | 2018"
              description="Desktop app for managing and tagging image files. Enabled
            users to search tags, review history (and subsequently revert), and
            autosave. Built with a team of 3."
              toggle={() => {
                this.setState({ songFourDrop: !this.state.songFourDrop });
              }}
              isDroppedDown={this.state.songFourDrop}
            />
            <MagicListItem
              link="https://github.com/aaronrambhajan/images-scraper"
              title="Image Scraper" // 🔬
              headers="Bash, JavaScript | Mack Lab | 2018"
              description="CLI tool for scraping popular search engines to help
            build image databases for classification experiments. Used throughout
            the lab for a variety of experiments."
              toggle={() => {
                this.setState({ songThreeDrop: !this.state.songThreeDrop });
              }}
              isDroppedDown={this.state.songThreeDrop}
            />
            <MagicListItem
              link="https://github.com/aaronrambhajan/images-scraper"
              title="Spotify Playlist VCS" // 🔬
              headers="Bash, JavaScript | Mack Lab | 2018"
              description="CLI tool for scraping popular search engines to help
            build image databases for classification experiments. Used throughout
            the lab for a variety of experiments."
              toggle={() => {
                this.setState({ songThreeDrop: !this.state.songThreeDrop });
              }}
              isDroppedDown={this.state.songThreeDrop}
            />
            <MagicListItem
              link="https://github.com/aaronrambhajan/images-scraper"
              title="Quan" // 🔬
              headers="Bash, JavaScript | Mack Lab | 2018"
              description="CLI tool for scraping popular search engines to help
            build image databases for classification experiments. Used throughout
            the lab for a variety of experiments."
              toggle={() => {
                this.setState({ songThreeDrop: !this.state.songThreeDrop });
              }}
              isDroppedDown={this.state.songThreeDrop}
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
        </div>
      );
    }

    return (
      <div style={{ marginBottom: '4em' }}>
        <Subheader>Projects</Subheader>
        <ul>
          <MagicListItem
            link="https://github.com/aaronrambhajan/heartbeat-scripts"
            title="Digital Heartbeat Synthesis" // ❤️
            headers="Python, SciPy, Librosa, MATLAB | Mack Lab | 2019"
            description={
              <div>
                {/* <img
                src={images.hb.heartbeats_gif}
                style={{
                  height: '50%',
                  width: '50%',
                  marginBottom: '1em',
                  marginTop: '1em',
                  textAlign: 'center',
                }}
              /> */}
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
              this.setState({ songOneDrop: !this.state.songOneDrop });
            }}
            isDroppedDown={this.state.songOneDrop}
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
              this.setState({ songTwoDrop: !this.state.songTwoDrop });
            }}
            isDroppedDown={this.state.songTwoDrop}
          />
          <MagicListItem
            link="https://github.com/aaronrambhajan/-memories"
            title="@memories" // 📚
            headers="Java, JavaFX, Git, Agile | CSC207 | 2018"
            description="Desktop app for managing and tagging image files. Enabled
            users to search tags, review history (and subsequently revert), and
            autosave. Built with a team of 3."
            toggle={() => {
              this.setState({ songFourDrop: !this.state.songFourDrop });
            }}
            isDroppedDown={this.state.songFourDrop}
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
      </div>
    );
  };
}
