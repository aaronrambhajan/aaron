// @flow

import React from 'react';
import {
  Button,
  Collapse,
  Popover,
  PopoverHeader,
  PopoverBody,
} from 'reactstrap';

// Components
import ProjectTitle from '../components/ProjectTitle';
import ProjectSubheading from '../components/ProjectSubheading';
import { ButtonGroupings } from '../components/ProjectCard';
import ImageRow from '../components/ImageRow';
import ImageWithSideCaption from '../components/ImageWithSideCaption';
import ImageWide from '../components/ImageWide';
import CitationPopover from '../components/CitationPopover';
import Carousel from '../components/Carousel';

/* IMAGES */
// Apps
import appAsana from '../images/ADHD/Asana';
import appTrello from '../images/ADHD/Trello';
import appTodoist from '../images/ADHD/Todoist';

import miscUpGif from '../images/ADHD/up-gif.gif';

// Story
import storyNataliaNormal from '../images/ADHD/natalia-normal.png';
import storyNataliaAnxious from '../images/ADHD/natalia-anxious.png';
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
import procResearchStats from '../images/ADHD/research-stats.svg';
import procEmpathyMap from '../images/ADHD/empathy-map.png';
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
    research: boolean,
    story: boolean,
    needs: boolean,
    product: boolean,
    credits: boolean,
    popover: boolean,
  };

  state = {
    problem: false,
    research: false,
    story: true,
    needs: false,
    product: false,
    credits: false,
    popover: false,
  };

  toggleProblem = () => {
    this.setState({
      problem: !this.state.problem,
      research: false,
      story: false,
      needs: false,
      product: false,
      credits: false,
    });
  };

  toggleResearch = () => {
    this.setState({
      problem: false,
      research: !this.state.research,
      story: false,
      needs: false,
      product: false,
      credits: false,
    });
  };

  toggleStory = () => {
    this.setState({
      problem: false,
      research: false,
      story: !this.state.story,
      needs: false,
      product: false,
      credits: false,
    });
  };

  toggleNeeds = () => {
    this.setState({
      problem: false,
      research: false,
      story: false,
      needs: !this.state.needs,
      product: false,
      credits: false,
    });
  };

  toggleProduct = () => {
    this.setState({
      problem: false,
      research: false,
      story: false,
      needs: false,
      product: !this.state.product,
      credits: false,
    });
  };

  toggleCredits = () => {
    this.setState({ credits: !this.state.credits });
  };

  togglePopover = () => {
    this.setState({ popover: !this.state.popover });
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

          <div>
            <p>
              Being a student with ADHD is hard, but not in the way we
              expect—most people think it’s about getting things done. We
              learned that it’s really about{' '}
              <code>
                helping them live their lives, how{' '}
                <span style={{ fontWeight: 600 }}>they</span> want to
              </code>
              .
            </p>

            <ImageWide
              image={procPhoneFull}
              alt="full-app"
              caption="We created 10Four to help them do that."
              style={{ maxHeight: 250, width: 'auto' }}
            />
          </div>

          <div>
            {['User Research', 'UX/UI Design'].map((label) =>
              ButtonGroupings(label)
            )}
          </div>
        </div>

        <div class="project-article">
          {/* SECTION 1 */}
          <hr />
          <ProjectTitle
            toggle={this.toggleProblem}
            title="What's ADHD?"
            titleColor={this.state.problem ? 'grey' : 'black'}
          />

          <Collapse isOpen={this.state.problem}>
            <p>
              When we think of ADHD, we tend to imagine children bouncing off
              walls, forgetting what they're doing, getting distracted every 10
              seconds, fidgeting constantly. We basically picture Dug, from{' '}
              <a
                style={{ fontWeight: 600 }}
                href="https://en.wikipedia.org/wiki/Up_(2009_film)"
              >
                Up
              </a>
              .
            </p>
            <ImageWide
              image={miscUpGif}
              alt="Dog from the movie UP"
              caption="How we imagine ADHD."
            />
            <p>
              Now, that's not <em>entirely</em> wrong. I mean, it's mostly
              wrong. But what most of us don't realize is that people with ADHD
              experience focus in <strong>extremes</strong>. Sure, they{' '}
              <em>can</em> be distractable, but they can just as easily focus so
              hard they forget about the world.
            </p>
            <p>
              ADHD is often misunderstood beacuse it can be{' '}
              <a href="https://www.everydayhealth.com/columns/a-doctors-personal-take-on-adhd/whats-quiet-adhd/">
                silent
              </a>
              —it often happens that people with symptoms aren't even aware of
              it. More pertinently, however, with symptoms as abstract as
              impulsivity, hyperactivity, and inattention, is it really that
              surprising we think of ADHD as characters like Dug? We started our
              project with this question:{' '}
              <em>
                how do people with ADHD <u>experience</u> these symptoms?{' '}
              </em>
            </p>
          </Collapse>

          <hr />
          <ProjectTitle
            toggle={this.toggleResearch}
            title="Understanding ADHD"
            titleColor={this.state.research ? 'grey' : 'black'}
          />

          <Collapse isOpen={this.state.research}>
            <p>
              Understanding what people with ADHD feel took 1 part research, and
              99 parts empathy. That equation isn't accurate at all, but it sure
              felt like it. We had to take a deep <em>and</em> wide approach—we
              looked to{' '}
              <span
                class="citation"
                id="medical-popover"
                onClick={this.togglePopover}
              >
                medical literature*
              </span>
              , productivity apps (and reviews), textbooks, and then of course,
              our own surveys and interviews.
            </p>
            <p>
              We focused on{' '}
              <strong> students between 18 and 24 with ADHD</strong>. Throughout
              the process, we interviewed the same 4 people with ADHD, all whom
              are from our personal lives. We struggled recruiting more ADHD
              participants because of the nature of dealing with a sensitive
              population, but the nature of these connections empowered us to
              understand their experiences so much better. We complemented this
              with <strong>53 survey participants</strong> without ADHD, but
              whom <em>struggle with productivity</em>, playing into the
              quietness of ADHD, but also how regular people experience it.
            </p>

            <ImageWide
              image={procResearchStats}
              alt="research-stats"
              style={{ maxHeight: 250 }}
            />
            <p>
              We focused on asking questions about their{' '}
              <code>
                relationship with their loved ones, technology, and themselves
              </code>
              . Our interviews were <strong>semi-structured</strong>, allowing
              these conversations to take on lives of their own. The surveys
              helped us understand people's needs, and more vitally,{' '}
              <em>how</em> people struggle with productivity.
            </p>
            <p>
              Though we encountered many obstacles, our research proved to be
              hugely insightful. After discussing it together, we built the
              empathy map that would become the foundation for{' '}
              <strong>Natalia</strong>, our persona.
            </p>
            <ImageWide image={procEmpathyMap} alt="empathy-map" />

            <CitationPopover
              placement="top"
              isOpen={this.state.popover}
              target="medical-popover"
              toggle={this.togglePopover}
              content={[
                {
                  bio: 'Maté, G. (2011).',
                  title:
                    'Scattered Minds: The Origins and Healing of Attention Deficit Disorder.',
                },
                {
                  bio: 'Ratey, N. (2008).',
                  title: 'The Disorganized Mind: Coaching Your ADHD Brain.',
                },
                {
                  bio: 'Mikami, A. Y., Smit, S., & Khalis, A. (2017).',
                  title: 'Social Skills Training and ADHD—What Works?',
                },
                {
                  bio: 'Overbey, G. A., Snell, W. E., & Callis, K. E. (2009).',
                  title:
                    ' Subclinical ADHD, Stress, and Coping in Romantic Relationships of University Students.',
                },
              ]}
            />
          </Collapse>

          <hr />
          <ProjectTitle
            toggle={this.toggleStory}
            title="Natalia's Story"
            titleColor={this.state.story ? 'grey' : 'black'}
          />

          <Collapse isOpen={this.state.story}>
            {/* @todo: Add tooltips to the symptoms. */}
            {/* I hate so much that I can't use my `ImageWithSideCaption`
                component because I need to stylize the text... */}
            <div style={{ marginTop: 20, marginBottom: 20 }}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                }}
              >
                <div
                  class="with-side-caption"
                  style={{
                    maxHeight: 200,
                    maxWidth: 200,
                  }}
                >
                  <img src={storyNataliaNormal} alt="natalia-normal" />
                </div>

                <div style={{ marginLeft: 20 }}>
                  <h3 style={{ color: 'black' }}>
                    Meet <strong>Natalia</strong>.
                  </h3>
                  <p style={{ color: 'grey' }}>22 / Graduate student / ADHD</p>
                </div>
              </div>
            </div>

            <p style={{ marginBottom: 0 }}>
              Like many of us, Natalia's balancing school, a part-time job, and
              her friends and family. Unlike many of us, Natalia struggles with{' '}
              <strong>ADHD</strong>. We know already this means she struggles
              with <strong>impulsivity</strong>, <strong>hyperactivity</strong>,
              and <strong>inattention</strong>. But, what you need to understand
              is that Natalia's symptoms make even
            </p>
            <h2
              style={{ textAlign: 'center', marginTop: 20, marginBottom: 20 }}
            >
              <code>
                the <strong>simplest</strong> things feel{' '}
                <strong>impossible</strong>.
              </code>
            </h2>
            <hr />

            <p style={{ marginTop: 20 }}>
              Tonight, Natalia has plans with an old friend,{' '}
              <strong>Rebeka</strong>. They went to elementary school together
              and they're seeing each other for the first time in a year.
              Natalia's super excited. She comes home from class and heads to
              her room to get ready, but when she gets in, she realizes her room
              is a <strong>mess</strong>.
            </p>

            <ImageWide
              image={storyMessyRoomBlank}
              alt="messy room"
              caption="Natalia's Room"
            />
            <p>
              Natalia feels like she <strong>needs</strong> to clean it. She's
              getting anxious, and starts forgetting what's going on. Looking to
              the laundry piled up in her room, Natalia realizes she doesn't
              have clean clothes for tonight. Natalia's{' '}
              <strong>overwhelmed</strong>, and her mind starts racing to coming
              up with excuses to cancel on Rebeka...
            </p>

            <ImageWide
              image={storyTextAnxious}
              alt="Natalia's phone"
              caption="Natalia's phone"
              style={{ height: 500, width: 'auto' }}
            />

            <p>
              I know what you're thinking.{' '}
              <em>Why can't she just clean it later?</em> That's what most of us
              would do. But here's the thing. Remember when we said people with
              ADHD experience focus in <em>extremes</em>? Right now, Natalia is{' '}
              <strong>hyperfocusing</strong>. Natalia doesn't <em>just</em> see
              a messy room. In her mind, this is what's going on.
            </p>
            <ImageWide
              image={storyMessyRoom}
              alt="messy room animation"
              caption="Natalia's room, to Natalia"
            />
            <p>
              Her brain is all over the place. Natalia <em>hates</em> this
              feeling. Sure, ADHD makes simple things impossible, but she can
              handle that. Doing her work sucks, but Natalia's figured out how
              to cope. This is where it really hurts her—when it starts
              affecting her loved ones. Natalia <em>loves</em> her friends and
              family, but her{' '}
              <strong>symptoms make it so hard to connect</strong> with them.
            </p>
            <ImageWide
              image={storyNataliaAnxious}
              alt="natalia-anxious"
              caption="Will I ever get better? Is it always going to be like this?"
              style={{ maxHeight: 250, width: 'auto' }}
            />
          </Collapse>
          <hr />
          <ProjectTitle
            toggle={this.toggleNeeds}
            title="Needs"
            titleColor={this.state.needs ? 'grey' : 'black'}
          />

          <Collapse isOpen={this.state.needs}>
            <p>How would Natalia deal with her symptoms right now?</p>

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
              These are all productivity apps that she'd normally use. They
              improve productivity by using checklists and alarms, alerting her
              around deadlines. For most people this is fine, but for Natalia,
              there's no sense of urgency, and ultimately, though it will alert
              her, it won't hold her accountable. This is to say that these apps{' '}
              <strong>weren't made for Natalia</strong>.
            </p>
            <p>
              Natalia's needs are different than most, and we realized
              throughout this process that understanding what this means would
              be the crux of helping her. So, what <em>does</em> she need?
            </p>

            <ProjectSubheading
              style={{ textAlign: 'center' }}
              text="Natalia needs..."
            />

            <ImageWithSideCaption
              caption="Notification systems built for her symptoms that keep her self-aware."
              image={needsAwareness}
              alt="needs-accountability"
            />

            <p>
              Traditional push notifications are easy to ignore and fall into
              the noise of other apps. Natalia needs notifications that
              facilitate a strong <strong>sense of urgency</strong>. We created
              a way to make notifications salient and meaningful to specific
              situations by creating custom notifications tailored to Natalia's
              symptoms.
            </p>

            {/* @todo: Replace these needs with a needs carousel of slidess */}
            {/* <Carousel /> */}
            <ImageWithSideCaption
              caption="Someone who can empathize with her and hold her accountable."
              image={needsAccountability}
              alt="needs-awareness"
            />
            <p>
              Part of helping Natalia is about de-escalating her symptoms. When
              she's hyperfocusing, it's so easy for her to get lost, and most
              people don't understand that. Having an accountability partner
              will help her feel normal and focus on the task at hand.
            </p>

            {/* <h3 style={{ fontWeight: 700 }}>Big Ideas</h3>

*/}
          </Collapse>

          <hr />
          <ProjectTitle
            toggle={this.toggleProduct}
            title="Product"
            titleColor={this.state.product ? 'grey' : 'black'}
          />

          <Collapse isOpen={this.state.product}>
            <p>
              Using those needs, we started ideating. We focused on features
              that directly addressed those to really make an impact:{' '}
              <strong>pairing users doing similar tasks</strong> and{' '}
              <strong>notifications as voice memos</strong>.
            </p>
            <ImageWide
              image={procPhone1}
              alt="The final wireframe"
              caption="Final wireframe"
            />
            <p>
              These features were focused on her needs, and intended to directly
              address how she would actually cope with her symptoms in our{' '}
              <strong>real-life</strong> situation. To test this, we conducted{' '}
              <strong>think-alouds</strong> and <strong>interviews</strong>,
              putting our participants in Natalia's story by asking them to use
              the product while doing a crossword puzzle.
            </p>
            <p>
              What we found wasn't surprising, but was incredibly enlightening.
              We know that people who have ADHD struggle with productivity. Like
              many of us, they're (clinical) procrastinators, doing things only
              when they feel urgent—more often than not at the last minute. They{' '}
              <em>do</em> get things done, but their real problem is{' '}
              <em>how</em>
              .They don't <strong>feel like they have control</strong> over it.
            </p>
            <p>
              Realizing that was the key to our final product, and our
              perspective as we wrapped up the project. Understanding that
              thinking about ADHD as productivity is an easy way to explain away
              the nuances of what makes their experience unique. Natalia helped
              us understand what it means to deal with ADHD, and taught all of
              us a crucial lesson in the role empathy plays in designing great
              product. Though our idea is far from perfect, I'm grateful to have
              had the opportunity to learn as much as I did.
            </p>
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
