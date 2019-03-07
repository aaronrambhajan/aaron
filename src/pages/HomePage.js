// @flow

import React from 'react';

import Divider from '../components/Divider';
import ImageWide from '../components/ImageWide';
import NewProjectCard from '../components/NewProjectCard';
import HomeHover from '../components/HomeHover';
import HomeTitle from '../components/HomeTitle';
import HomeModal from '../components/HomeModal';

import { colors, changeOpacity } from '../colors';

import ThrowingOutTrash from '../images/trash-field-study/throwing-out.gif';
import TrashExp1 from '../images/trash-field-study/trash-exp1.gif';
import heartbeatExp1 from '../images/heartbeats/exp1.gif';
import ADHDRoom from '../images/ADHD/natalia-room-adhd.gif';
import UrLogo from '../images/trash-field-study/ur-logo.png';

import ClosedCaption from '../components/ClosedCaption';

export default class HomePage extends React.Component {
  render = () => {
    return (
      <div className="home">
        <div>
          <h1 class="intro-hed" style={{ color: 'black' }}>
            Hi! I’m{' '}
            <a
              style={{ textDecoration: 'none', fontWeight: 600 }}
              href="/about"
            >
              Aaron
            </a>
            .
          </h1>
          <Divider size={0.5} />
          <p
            style={{
              maxWidth: '75%',
              fontSize: '125%',
              color: changeOpacity(colors.SECONDARY, '0.5'),
            }}
          >
            <a href="#research">UX Researcher</a> &{' '}
            <a href="#code">Software Engineer</a> passionate about understanding
            how people interact with the world.
          </p>
        </div>

        <section
          style={{
            marginTop: '3.75rem',
            marginBottom: '8rem',
          }}
        >
          <HomeTitle header="Research" />

          <Divider size={0.5} />

          <NewProjectCard
            title="trash.io"
            caption="For two years, I ran a non-profit, Quan, to make sorting garbage easy for everyone. I led research, designing and conducting field, user, and lab studies. We won $20,000 from the UN & Baidu and presented our results at the world-renown ISSST conference."
            route="/projects/trash"
            image={ThrowingOutTrash}
            color={colors.PROJECT_2}
          />
          <Divider size={2} />
          <HomeHover
            description="Click here for more research projects"
            link="/work"
          />

          <div id="code">
            <HomeTitle header="Code" />
            <Divider size={0.5} />
            <HomeHover
              header="Heartbeat Staircasing"
              description="Experiment studying perceptual thresholds in heartbeat listening"
              link="https://github.com/aaronrambhajan/hb-staircase"
            />
          </div>
        </section>

        {/* <ClosedCaption text="Hey. I'm Aaron." /> */}
        <Divider size={4} />
      </div>
    );
  };
}
