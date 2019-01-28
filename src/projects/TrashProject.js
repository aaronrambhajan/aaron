import React from 'react';
import { colors, changeOpacity } from '../colors';

import ProjectInfo from '../components/ProjectInfo';
import Divider from '../components/Divider';
import ImageWide from '../components/ImageWide';

import TrashDesign from './TrashDesign';
import TrashField from './TrashField';
import TrashMethodology from './TrashMethodology';
import TrashUserResearch from './TrashUserResearch';
import TrashPsychLab from './TrashPsychLab';
import TrashAwards from './TrashAwards';

import ThrowingOut from '../images/trash-field-study/throwing-out.gif';

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
            roles="Research, Experimental Design, Usability Testing"
            timeline="May 2016 - Jan. 2018"
            team="Te Chen, Dr. Michael Mack, Dr. John Robinson, Dr. Colin Furness"
            methods="Field Evaluation, Surveys, Observations, Cognitive and Attentional Tasks"
          />

          <Divider size={4} />

          <p style={{ fontSize: '1.5em' }}>
            Two years ago, I co-founded a non-profit,{' '}
            <strong>
              <em>Quan</em>
            </strong>
            , to make sorting garbage easy for everyone. Driven by clarity,
            adaptability, and rigor, we created{' '}
            <strong>
              <em>trash.io</em>
            </strong>
            , a visual language to become a global open standard for sorting.
          </p>
          <Divider size={2} />
          <p style={{ fontSize: '1.5em' }}>
            I led <u>research</u> for this project over 2 years, designing and
            conducting full-scale field, user, and lab studies. We won{' '}
            <strong>$20,000 in funding from the United Nations</strong>,{' '}
            collaborated with several professors, worked with infrastructure,
            and ultimately, learned how solving problems with design impacts the
            world.
          </p>
          <Divider size={2} />
          <p
            style={{
              opacity: 0.5,
              textAlign: 'center',
              fontFamily: 'helvetica',
              fontSize: '0.8em',
            }}
          >
            <u>Note</u>: As of 01/25/19, this write-up is a work-in-progress.
          </p>
          <Divider size={2} />
        </div>

        <hr />
        <Divider size={4} />

        <div class="project-article">
          <div id="table-of-contents">
            <h2
              style={{
                fontWeight: 100,
                color: colors.PROJECT_2,
                fontSize: '150%',
                margin: 0,
              }}
            >
              table of contents
            </h2>
            <ul style={{ margin: 0, listStyleType: 'disc', padding: 30 }}>
              <li>
                <a href="#problem">problem</a>
              </li>
              <li>
                <a href="#methodology">research methodology</a>
              </li>
              <li>
                <a href="#field-evaluation">field study</a>
              </li>
              <li>
                <a href="#user-research">user research</a>
              </li>
              <li>
                <a href="#mack-lab">psychology lab</a>
              </li>
              <li>
                <a href="#awards">awards</a>
              </li>
            </ul>
          </div>

          <div id="problem">
            <hr />
            <Divider size={4} />
            <TrashDesign id="problem" />
          </div>

          <div id="methodology">
            <hr />
            <Divider size={4} />
            <TrashMethodology id="methodology" />
          </div>

          <div id="field-evaluation">
            <hr />
            <Divider size={4} />
            <TrashField id="field-evaluation" />
          </div>

          <div id="user-research">
            <hr />
            <Divider size={4} />
            <TrashUserResearch id="user-research" />
          </div>

          <div id="mack-lab">
            <hr />
            <Divider size={4} />
            <TrashPsychLab id="mack-lab" />
          </div>

          <div id="awards">
            <hr />
            <Divider size={4} />
            <TrashAwards id="awards" />
          </div>

          <hr />
          <Divider size={2} />
        </div>
      </div>
    );
  };
}
