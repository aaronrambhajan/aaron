// @flow

import React from 'react';
import { Button, Collapse } from 'reactstrap';
import Persona from '../components/Persona';
import ProjectHeader from '../components/ProjectHeader';
import { ButtonGroupings } from '../components/ProjectCard';
import ImageRow from '../components/ImageRow';
import Asana from '../images/ADHD/Asana';
import Trello from '../images/ADHD/Trello';
import Todoist from '../images/ADHD/Todoist';

export default class HomePage extends React.Component {
  state: {
    problem: boolean,
    story: boolean,
  };

  state = {
    problem: false,
    story: false,
  };

  toggleProblem = () => {
    this.setState({ problem: !this.state.problem });
  };

  toggleStory = () => {
    this.setState({ story: !this.state.story });
  };

  render = () => {
    return (
      <div class="projects">
        <div class="projects-header">
          <h1
            class="intro-hed"
            style={{ color: 'black', fontWeight: 600, marginBottom: 0 }}
          >
            ADHD <code>&</code> Time Management
          </h1>

          <p>
            Being a student with ADHD is hard. Most people think it’s about
            getting things done. We learned that it’s about{' '}
            <code>
              helping them live their lives, how{' '}
              <span style={{ fontWeight: 600 }}>they</span> want to
            </code>
            .
          </p>

          <div>
            {['User Research', 'Data Analysis'].map((label) =>
              ButtonGroupings(label)
            )}
          </div>
        </div>

        <hr />

        <div class="project-article">
          <ProjectHeader
            toggle={this.toggleStory}
            title="Story"
            titleColor={this.state.story ? 'grey' : 'black'}
          />

          <Collapse isOpen={this.state.story}>
            <Persona />

            {/* @todo: Add tooltips to the symptoms. */}
            <p>
              Having ADHD, Natalia struggles with <strong>impulsivity</strong>,{' '}
              <strong>hyperactivity</strong>, and <strong>inattention</strong>.
              But, what does that mean? The only thing you need to understand
              about Natalia's symptoms is that it makes{' '}
              <code>
                the <strong>simplest</strong> things feel{' '}
                <strong>impossible</strong>.
              </code>
            </p>
          </Collapse>
          <hr />
          <h2>Context</h2>
          <hr />

          <ProjectHeader
            toggle={this.toggleProblem}
            title="Problem"
            titleColor={this.state.problem ? 'grey' : 'black'}
          />

          <Collapse isOpen={this.state.problem}>
            <ImageRow
              img1={Trello}
              img1txt="Trello"
              img2={Asana}
              img2txt="Asana"
              img3={Todoist}
              img3txt="Todoist"
            />

            <p>
              Today's recipes Apps do not consider how to use present
              ingredients in people’s kitchens best. In this case, people have
              specific kinds of ingredients in their refrigerator, but they have
              no ideas how to mix them up or cook in an apparent way.
            </p>
            <h2>Approaches</h2>
            <p>
              This App provides users with a mobile experience that offers
              accessible recipes based on what ingredients they own to enhance
              their lives in a healthy and environment-friendly way.
            </p>
            <h2>Objectives</h2>
            <p>
              Provide the users more personalized and healthy recipe
              recommendations when they have no idea about how to mixing the
              exist ingredients to enhance the users’ life quality and to reduce
              food waste.
            </p>
            <p>
              Incorporating the local food markets, the App could increase the
              sales volume of local food according to the recipe
              recommendations.
            </p>
            <p>
              By recording people’s dinning habits, it could help people to form
              a better lifestyle and help people to discover their lives via
              foods.
            </p>

            <h2>Persona</h2>
            <Persona />
            <h2>User Needs</h2>
            <p>
              High-quality, fresh, healthy and time-based recommendations in the
              front page.
            </p>
            <p>
              Clear interface to show the recipe details. It should have good
              readability.
            </p>
            <p>
              Online shopping and ingredient delivery. It may include shopping
              list for offline use.
            </p>
          </Collapse>
        </div>
        <hr />
      </div>
    );
  };
}
