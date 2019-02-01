import React from 'react';
import { colors, changeOpacity } from '../../colors';

import ProjectInfo from '../../components/ProjectInfo';
import Divider from '../../components/Divider';
import ImageWide from '../../components/ImageWide';

import Design from './Design';
import Field from './Field';
import Methodology from './Methodology';
import UserResearch from './UserResearch';
import PsychLab from './PsychLab';
import Awards from './Awards';
import TableOfContents from './TableOfContents';

import ThrowingOut from '../../images/trash-field-study/throwing-out.gif';

export default class TrashFieldStudy extends React.Component {
  render = () => {
    return (
      <div class="projects">
        <div id="intro" class="project-header">
          <h1
            class="intro-hed"
            style={{
              marginBottom: 0,
            }}
          >
            <span style={{ color: colors.PROJECT_2, fontWeight: 600 }}>
              trash.io
            </span>{' '}
            – redesigning garbage
          </h1>
          <p
            style={{
              color: changeOpacity(colors.SECONDARY, '0.5'),
              fontSize: '0.6em',
              margin: 0,
              fontFamily: 'times',
              fontWeight: 100,
              marginBottom: 0,
            }}
          >
            06-30-18 / Quan / Ongoing
          </p>

          <Divider size={2} />

          <ImageWide
            image={ThrowingOut} // whatGoesWhere
            alt="bin-face"
            style={{ maxWidth: '75%', margin: 0 }}
          />

          <Divider size={2} />

          <ProjectInfo
            roles={[
              'Experimental Design',
              'User Research',
              'Usability Testing',
            ]}
            timeline="May 2016 - Jan. 2018"
            team={[
              'Te Chen',
              'Dr. Michael Mack',
              'Dr. John Robinson',
              'Dr. Colin Furness',
            ]}
            methods={[
              'Field Evaluation',
              'Surveys',
              'Observations',
              'Cognitive Tasks',
            ]}
          />

          <Divider size={4} />

          <p style={{ fontSize: '1.5em' }}>
            For two years, I ran a non-profit,{' '}
            <strong>
              <em>Quan</em>
            </strong>
            , to make sorting garbage easy for everyone. We created a language
            of icons, entitled <em>trash.io</em>. I led{' '}
            <strong>research</strong>, designing and conducting field, user, and
            lab studies.{' '}
            <span style={{ backgroundColor: 'yellow' }}>
              We won $20,000 from the UN & Baidu
            </span>{' '}
            and presented our results at the world-renown <em>ISSST</em>{' '}
            conference.
          </p>
          <Divider size={4} />
        </div>

        <div class="project-article">
          <div id="table-of-contents">
            <hr />
            <Divider size={4} />
            <TableOfContents id="table-of-contents" />
            <Divider size={4} />
          </div>

          <div id="problem">
            <hr />
            <Divider size={4} />
            <Design id="problem" />
          </div>

          <div id="methodology">
            <hr />
            <Divider size={4} />
            <Methodology id="methodology" />
          </div>

          <div id="field-evaluation">
            <hr />
            <Divider size={4} />
            <Field id="field-evaluation" />
          </div>

          <div id="user-research">
            <hr />
            <Divider size={4} />
            <UserResearch id="user-research" />
          </div>

          <div id="mack-lab">
            <hr />
            <Divider size={4} />
            <PsychLab id="mack-lab" />
          </div>

          <div id="awards">
            <hr />
            <Divider size={4} />
            <Awards id="awards" />
          </div>

          <hr />
          <Divider size={2} />
        </div>
      </div>
    );
  };
}
