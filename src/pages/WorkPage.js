// @flow

import React from 'react';
import { colors, changeOpacity } from '../colors';
import NewNewProjectCard from '../components/NewNewProjectCard';
import Divider from '../components/Divider';
import HomeTitle from '../components/HomeTitle';
import HomeHover from '../components/HomeHover';
import HomeModal from '../components/HomeModal';

import ThrowingOutTrash from '../images/trash-field-study/throwing-out.gif';
import TrashExp1 from '../images/trash-field-study/trash-exp1.gif';
import heartbeatExp1 from '../images/heartbeats/exp1.gif';
import ADHDRoom from '../images/ADHD/natalia-room-adhd.gif';
import UrLogo from '../images/trash-field-study/ur-logo.png';

export default class WorkPage extends React.Component {
  render = () => {
    return (
      <div>
        <div className="test-work-page">
          {/* <HomeTitle header="Research" /> */}

          {/* <Divider size={0.5} /> */}

          <NewNewProjectCard
            title="trash.io"
            caption="I founded a non-profit to create a human-centered way to sort garbage. We won $20,000 from the UN & Baidu. I designed and conducted field, lab, and user studies."
            route="/projects/trash#field-evaluation"
            image={ThrowingOutTrash}
            color={colors.PROJECT_2}
          />

          <NewNewProjectCard
            title="trash.io [psych lab]"
            caption="I designed, built, and conducted 2 cognitive experiments to study how label design impacts people's decisions."
            route="/projects/trash#mack-lab"
            image={TrashExp1}
            color={colors.PROJECT_4}
          />

          <NewNewProjectCard
            title="trash.io [user research]"
            caption="Using observations and surveys, I studied how people's perception and reality of their garbage sorting performance compares."
            route="/projects/trash#user-research"
            image={UrLogo}
            color={colors.PROJECT_1}
          />

          <NewNewProjectCard
            title="trash.io [psych lab]"
            caption="I designed, built, and conducted 2 cognitive experiments to study how label design impacts people's decisions."
            route="/projects/trash#mack-lab"
            image={TrashExp1}
            color={colors.PROJECT_4}
          />

          <NewNewProjectCard
            title="heartbeats pilot"
            org="mack lab"
            caption="Two experiments studying how experts and novices categorize regular and irregular heartbeats, building to Long QT using category learning and psychophysical staircases."
            route="/projects/heartbeats"
            image={heartbeatExp1}
            color={colors.PROJECT_4}
          />

          <NewNewProjectCard
            title="trash.io [psych lab]"
            caption="I designed, built, and conducted 2 cognitive experiments to study how label design impacts people's decisions."
            route="/projects/trash#mack-lab"
            image={TrashExp1}
            color={colors.PROJECT_4}
          />

          <NewNewProjectCard
            title="10four"
            org="master of information"
            caption="I designed a time management app for students struggling with ADHD. It's about helping them live their lives like they want to. "
            route="/projects/ADHD"
            image={ADHDRoom}
            color={colors.PROJECT_3}
          />
        </div>

        <div id="code">
          <HomeTitle
            header="Code"
            description="💻 Python, Javascript, PostgreSQL, Bash"
          />
          <Divider size={0.5} />
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

        <div>
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
      </div>
    );
  };
}
