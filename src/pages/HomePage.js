// @flow

import React from 'react';
import Divider from '../components/Divider';
import ImageWide from '../components/ImageWide';
import NewProjectCard from '../components/NewProjectCard';
import HomeHover from '../components/HomeHover';
import HomeTitle from '../components/HomeTitle';
import HomeModal from '../components/HomeModal';

import { Button } from 'reactstrap';
import { colors, changeOpacity } from '../colors';

import ThrowingOutTrash from '../images/trash-field-study/throwing-out.gif';
import TrashExp1 from '../images/trash-field-study/trash-exp1.gif';
import heartbeatExp1 from '../images/heartbeats/exp1.gif';
import ADHDRoom from '../images/ADHD/natalia-room-adhd.gif';
import UrLogo from '../images/trash-field-study/ur-logo.png';

export default class HomePage extends React.Component {
  render() {
    return (
      <div class="home">
        <div>
          <h1 class="intro-hed" style={{ color: 'black' }}>
            Hi! I’m <a href="/about">Aaron</a>.
          </h1>
          <Divider size={0.5} />
          <p style={{ maxWidth: '75%', fontSize: '0.8em' }}>
            Music producer turned <u>UX Researcher</u> &{' '}
            <u>Software Engineer</u> passionate about understanding how people
            interact with the world.
          </p>
        </div>

        <Divider size={2} />

        <div id="work">
          <HomeTitle
            header="Research"
            description="🔬 Experimental design, field research, surveys, statistical analysis, "
          />

          <Divider size={0.5} />

          <NewProjectCard
            title="trash.io {field study}"
            org="quan"
            caption="I founded a non-profit to create a human-centered way to sort garbage. funded by the United Nations & Baidu. Designed and conducted an 8-week long field study to compare old and new garbage labels."
            route="/projects/trash#field-evaluation"
            image={ThrowingOutTrash}
            color={colors.PROJECT_2}
          />

          <Divider size={2} />

          <NewProjectCard
            title="trash.io {psych lab}"
            org="mack lab"
            caption="Two experiments studying how better label design impacts people's decisions through rapid categorization and mouse-tracking."
            route="/projects/trash#mack-lab"
            image={TrashExp1}
            color={colors.PROJECT_4}
          />

          <Divider size={2} />
          <NewProjectCard
            title="trash.io {user research}"
            org="sustainability office"
            caption="Studying how people's perception, feelings, and reality of their garbage sorting performance compare using observations & surveys."
            route="/projects/trash#user-research"
            image={UrLogo}
            color={colors.PROJECT_1}
          />

          <Divider size={2} />
          <NewProjectCard
            title="heartbeats pilot"
            org="mack lab"
            caption="Two experiments studying how experts and novices categorize regular and irregular heartbeats, building to Long QT using category learning and psychophysical staircases."
            route="/projects/heartbeats"
            image={heartbeatExp1}
            color={colors.PROJECT_2}
          />

          <Divider size={2} />
          <NewProjectCard
            title="10four"
            org="master of information"
            caption="Designing a time management app for students struggling with ADHD. It's about helping them live their lives like they want to. "
            route="/projects/ADHD"
            image={ADHDRoom}
            color={colors.PROJECT_3}
          />
        </div>

        <Divider size={4} />

        <div>
          <HomeTitle
            header="Code"
            description="❤️ Python, React, PostgreSQL, Bash"
          />
          <Divider size={0.5} />
          <HomeHover
            header="Heartbeat Staircasing"
            description="Experiment studying perceptual thresholds in heartbeat listening"
            link="https://github.com/aaronrambhajan/hb-staircase"
          />
          <HomeHover
            header="Heartbeat Discriminations"
            description="Experiment studying how we categorize heartbeats regularity"
            link="https://github.com/aaronrambhajan/heartbeats_one"
          />
          <HomeHover
            header="Heartbeat Synthesis"
            description="Generating heartbeat sounds in Python for experiment use"
            link="https://github.com/macklab/heartbeats/tree/master/synthesis/python"
          />
          <HomeHover
            header="Mouse-tracking"
            description="Studying the impact of design on decision paths"
            link="https://github.com/aaronrambhajan/mouse-tracking"
          />
          <HomeHover
            header="@memories"
            description="A Java-based desktop application for image tagging"
            link="https://github.com/aaronrambhajan/-memories"
          />
        </div>

        <Divider size={2} />

        <a href="https://www.dropbox.com/s/3x0ksm3xb1d3p5e/Aaron-Rambhajan-Resume.pdf?dl=0">
          <HomeTitle header="Resume" description="🛠️ Things I've done" />
        </a>

        {/* <div>
          <HomeTitle header="Experience" description="🛠️ Things I've done" />
          <Divider size={0.5} />
          🔬 💻 🔨 🔍 📉
          <HomeModal
            header="Graduate Researcher & Developer"
            description="Mack Lab"
            emojiWork="🔬 💻 📉"
            modalText={{
              description: (
                <div>
                  <a href="http://macklab.utoronto.ca">Mack Lab</a> is a
                  computational neuroscience based at the University of Toronto,
                  run by Dr. Michael Mack.
                  <Divider size={2} />
                  <div
                    style={{
                      fontSize: '0.7em',
                      fontFamily: 'menlo',
                      opacity: 0.5,
                    }}
                  >
                    Python (numpy, scipy, pandas, librosa), React, JavaScript,
                    R, HTML/CSS, MATLAB
                  </div>
                </div>
              ),
            }}
            style={{ color: colors.BLUE_PRIMARY }}
            headerClass="home-modal-macklab"
          />
          <HomeModal
            header="Software Engineer Intern"
            description="Drop Mobility"
            emojiWork="💻 📉 🔍"
            modalText={{
              description: (
                <div>
                  <a href="http://dropmobility.com">Drop Mobility</a> is a
                  micromobility startup based in Toronto.
                  <Divider size={2} />
                  <div
                    style={{
                      fontSize: '0.7em',
                      fontFamily: 'menlo',
                      opacity: 0.5,
                    }}
                  >
                    React, PostgreSQL, React Native, Pandas, Bash
                  </div>
                </div>
              ),
            }}
            style={{ color: '#FF7D26' }}
            headerClass="home-modal-dropmobility"
          />
          <HomeModal
            header="Co-founder"
            description="Quan"
            emojiWork="🔬 📉"
            modalText={{
              description: (
                <div>
                  <strong>Quan</strong> is a non-profit I co-founded to solve UX
                  in waste management.
                </div>
              ),
            }}
            style={{ color: 'black' }}
            headerClass="home-modal-quan"
          />
        </div>

        <Divider size={4} />
        <div>
          <HomeTitle header="Education" description="📚 What I've studied" />
          <Divider size={0.5} />
          <HomeHover
            header="M.I., University of Toronto"
            description="2018 – 2020      User Experience Design (Co-op)"
            link="https://www.ischool.utoronto.ca"
          />
          <HomeHover
            header="H.B.Sc., University of Toronto"
            description="2013 – 2018      Psychology, Art History, Computer Science"
            link="http://home.psych.utoronto.ca/"
          />
          <HomeHover
            header="B.M., Berklee College of Music"
            description="2015 - 2015      Electronic Production & Design (Incomplete)"
            link="https://www.berklee.edu/"
          />
        </div> */}

        <Divider size={4} />
      </div>
    );
  }
}
