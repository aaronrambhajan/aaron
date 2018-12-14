// @flow

import React from 'react';
import { Button, Collapse } from 'reactstrap';

// Components
import Persona from '../components/Persona';
import ProjectTitle from '../components/ProjectTitle';
import { ButtonGroupings } from '../components/ProjectCard';
import ImageRow from '../components/ImageRow';
import ImageWithSideCaption from '../components/ImageWithSideCaption';
import ImageWide from '../components/ImageWide';

/* IMAGES */
// Apps
import appAsana from '../images/ADHD/Asana';
import appTrello from '../images/ADHD/Trello';
import appTodoist from '../images/ADHD/Todoist';

// Story
import storyMessyRoomBlank from '../images/ADHD/messy-room-blank.png';
import storyMessyRoom from '../images/ADHD/natalia-room-adhd.gif';
import storyTextAnxious from '../images/ADHD/text-anxious.gif';
import storyTextSafe from '../images/ADHD/text-safe.gif';

// Needs
import needsAccountability from '../images/ADHD/needs-accountability.svg';
import needsAwareness from '../images/ADHD/needs-awareness.svg';
import needsFocus from '../images/ADHD/needs-focus.svg';
import needsGuilt from '../images/ADHD/needs-guilt.svg';

// Process
import procIdeation from '../images/ADHD/ideation.png';
import procLowFidelity from '../images/ADHD/low-fidelity.png';
import procMidFidelity from '../images/ADHD/medium-fidelity.png';
import procPhone1 from '../images/ADHD/full-1.png';
import procPhone2 from '../images/ADHD/full-2.png';
import procPhone3 from '../images/ADHD/full-3.png';
import procPhoneFull from '../images/ADHD/phone.png';

export default class ProjectPage extends React.Component {
  state: {
    problem: boolean,
    story: boolean,
    credits: boolean,
  };

  state = {
    problem: true,
    story: false,
    credits: false,
  };

  toggleProblem = () => {
    this.setState({ problem: !this.state.problem });
  };

  toggleStory = () => {
    this.setState({ story: !this.state.story });
  };

  toggleCredits = () => {
    this.setState({ credits: !this.state.credits });
  };

  render = () => {
    return (
      <div class="projects">
        {/* SUMMARY */}
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
            {['User Research', 'UX/UI Design'].map((label) =>
              ButtonGroupings(label)
            )}
          </div>
        </div>

        <hr />

        {/* SECTION 1 */}
        <div class="project-article">
          <ProjectTitle
            toggle={this.toggleStory}
            title="Story"
            titleColor={this.state.story ? 'grey' : 'black'}
          />

          <Collapse isOpen={this.state.story}>
            {/* @todo: Add tooltips to the symptoms. */}
            <Persona />

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

            <p>
              Tonight, Natalia has plans with an old friend,{' '}
              <strong>Rebeka</strong>. They went to elementary school together,
              and they're seeing each other for the first time in a year. As you
              can imagine, Natalia's super excited. She comes home from class in
              the afternoon, and heads to her room to get ready. But when she
              gets in... Her room is a mess.
            </p>

            <ImageWide
              image={storyMessyRoomBlank}
              alt="messy room"
              caption="Natalia's Room"
            />

            <p>
              Natalia feels like she <strong>needs</strong> to clean it. Well,
              it's not so much that she needs to. She's getting anxious and
              starting to freak out. Really, it's because she's{' '}
              <strong>hyperfocusing</strong>.
            </p>

            <p>
              I know what you're thinking.{' '}
              <i>Why can't she just... clean it later?</i> Totally fair. After
              all, that's what most of us would do. Here's the thing, though.
              See, people with ADHD experience focus in <i>extremes</i>. Most of
              us think of ADHD as young children, bouncing off the walls, being
              easily distracted. But the opposite is also common—being so
              focused into something that she forgets the rest of the world.
            </p>
            <p>
              {' '}
              What you need to understand, is that Natalia doesn't just see a
              messy room. <strong>This</strong> is what she sees.
            </p>
            <ImageWide
              image={storyMessyRoom}
              alt="messy room animation"
              caption="What she sees"
            />
          </Collapse>
          <hr />

          <ProjectTitle
            toggle={this.toggleProblem}
            title="Problem"
            titleColor={this.state.problem ? 'grey' : 'black'}
          />

          <Collapse isOpen={this.state.problem}>
            <p>
              ADHD is complicated. When most people think of ADHD, they think of
              children bouncing off the walls, being easily distractable, or a
              friend who's just always fidgeting. What most people don't know is
              that the reality is that people with ADHD experience focus in{' '}
              <strong>extremes</strong>. See, dealing with ADHD is
              complicated—even though we know their symptoms are impulsivity,
              hyperactivity, and inattention, we don't understand what those{' '}
              <i>mean</i>. How are they experienced? How are they <i>felt?</i>
            </p>

            <p>
              Unsurprisingly, people who have ADHD struggle with productivity.
              Like many of us, they're (clinical) procrastinators, tending to do
              things only when they feel urgent—more often than not, that means
              it's happening at the last minute. The thing is, it's not that
              simple. They <i>do</i> get things done. It's just that it's
              draining. It only happens at the last minute. It only happens when
              they hyperfocus. <strong>They don't have control over it</strong>.
            </p>

            <h3 style={{ fontWeight: 700 }}>Research</h3>

            <p>
              So, how do people with ADHD deal with that right now? How do they
              manage their lives, right now? We talked to them to find out. We
              found out that they struggle with this thing and that thing, and
              these symptoms affect them the most. Three apps that came up
              during our primary research were:
            </p>

            <ImageRow
              img1={appTrello}
              img1txt="Trello"
              img2={appAsana}
              img2txt="Asana"
              img3={appTodoist}
              img3txt="Todoist"
              size={90}
            />

            <p>
              They work fine for most people. The issue is that{' '}
              <strong>these apps weren't built for ADHD</strong>. They're just
              reminders. They don't help people with ADHD because they just
              forget. Well, not quite. Let me explain why they don't work—
            </p>

            <ImageWithSideCaption
              text="Notification systems built for her symptoms that keep her self-aware"
              image={needsAccountability}
              alt="needs-accountability"
            />

            <ImageWithSideCaption
              text="Someone who can empathize with her and hold her accountable"
              image={needsAwareness}
              alt="needs-awareness"
            />

            <p>
              The current apps fail on these specific dimensions. So... we
              started thinking, how can we address that?
            </p>

            <h3 style={{ fontWeight: 700 }}>Big Ideas</h3>

            <ImageWide image={procIdeation} alt="big ideas" />
            <ImageWide image={storyTextAnxious} alt="storytime" />
          </Collapse>

          <hr />
          <ProjectTitle
            toggle={this.toggleCredits}
            title="Credits"
            titleColor={this.state.credits ? 'grey' : 'black'}
          />

          <Collapse isOpen={this.state.credits}>
            <p>
              Part of <strong>INF1602</strong>, Fundamentals of User Experience.
              Taught by Professor Olivier St-Cyr as a part of the Master of
              Information program at the University of Toronto.
            </p>
            <p>
              <strong>Team</strong>:{' '}
              <a href="https://alexandrascandolo.com" alt="Alexandra Scandolo">
                Alexandra Scandolo
              </a>
              , Ali Jafar, Christina Vuong, Olivia Zhang{' '}
            </p>
          </Collapse>
        </div>
        <hr />
      </div>
    );
  };
}
