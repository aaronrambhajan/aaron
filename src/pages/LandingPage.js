import React from 'react';
import styled from 'styled-components';
import { colors } from '../colors';
import images from '../images/images';
import ProjectCard from '../components/ProjectCard';
import { Subheading } from '../projects/Trash/util';

const HeaderContainer = styled.div`
  /* max-width: 480px; */
`;

const Header = styled.h1`
  margin-bottom: 1rem;
`;

const SubHeader = styled.h2`
  font-size: 0.7em;
  opacity: 0.6;
  margin-bottom: 2rem;
  max-width: 480px;
`;

const Topic = styled.section`
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

const TopicHeader = styled.h1`
  color: ${colors.SECONDARY};
  opacity: 0.5;
`;

const Projects = styled.div`
  height: 100%;
  overflow: hidden;
  max-width: 1620px;
`;

const Project = styled.div`
  padding: 1em 0;

  @media only screen and (min-width: 540px) {
    float: left;
    width: 50%;
    padding: 1em 1em 0 0;

    &:nth-child(2n + 1) {
      clear: both;
    }
  }

  @media only screen and (min-width: 960px) {
    width: 33.3%;

    &:nth-child(2n + 1) {
      clear: none;
    }
    &:nth-child(3n + 1) {
      clear: both;
    }
  }
`;

export default class Landing extends React.Component {
  render = () => {
    return (
      <div>
        <HeaderContainer>
          <Header>
            Hi! I'm <strong> Aaron Rambhajan</strong>.
          </Header>

          <SubHeader>
            Music Producer turned Software Engineer & UX Researcher. I'm
            passionate about understanding how people interact with the world.
            Constantly creating, building, and questioning. Grateful to be
            alive.
          </SubHeader>
        </HeaderContainer>

        <Topic>
          <TopicHeader>Research –</TopicHeader>
          <Projects>
            <Project>
              <ProjectCard
                title="trash.io"
                caption="For two years, I ran a non-profit. I led research, designing and conducting field, user, and lab studies. We won $20,000 from the UN & Baidu."
                route="/projects/trash"
                img={images.trash.intro_throwing_out_gif}
              />
            </Project>
            <Project>
              <ProjectCard
                title="10four"
                caption="For two years, I ran a non-profit, Quan, to make sorting garbage easy for everyone. I led research, designing and conducting field, user, and lab studies."
                route="/projects/10four"
                img={images.trash.psych_rc_gif}
              />
            </Project>
            <Project>
              <ProjectCard
                title="heartbeats"
                caption="For two years, I ran a non-profit, Quan, to make sorting garbage easy for everyone. I led research, designing and conducting field, user, and lab studies."
                route="/projects/heartbeats"
                img={images.hb.heartbeats_gif}
              />
            </Project>
          </Projects>
        </Topic>

        {/* <TopicHeader>Code –</TopicHeader>
        <Projects>
          <Project>
            <ProjectCard
              title="trash.io"
              caption="For two years, I ran a non-profit, Quan, to make sorting garbage easy for everyone. I led research, designing and conducting field, user, and lab studies. We won $20,000 from the UN & Baidu and presented our results at the world-renown ISSST conference."
              route="/projects/trash"
              img={images.trash.psych_rc_gif}
            />
          </Project>
        </Projects> */}
      </div>
    );
  };
}
