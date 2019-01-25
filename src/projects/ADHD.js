// @flow

import React from 'react';
import {
  Button,
  Collapse,
  Popover,
  PopoverHeader,
  PopoverBody,
} from 'reactstrap';
import { colors, changeOpacity } from '../colors';

// Components
import ProjectTitle from '../components/ProjectTitle';
import ProjectSubheading from '../components/ProjectSubheading';
import ImageRow from '../components/ImageRow';
import ImageWithSideCaption from '../components/ImageWithSideCaption';
import ImageWide from '../components/ImageWide';
import CitationPopover from '../components/CitationPopover';
import NeedsCarousel from '../components/NeedsCarousel';
import Divider from '../components/Divider';

/* IMAGES */
// Apps
import appAsana from '../images/ADHD/Asana';
import appTrello from '../images/ADHD/Trello';
import appTodoist from '../images/ADHD/Todoist';
import miscUpGif from '../images/ADHD/up-gif.gif';
import TeamPhoto from '../images/ADHD/the-team.jpeg';

// Story
import storyNataliaNormal from '../images/ADHD/natalia-normal.png';
import storyNataliaAnxious from '../images/ADHD/natalia-anxious.png';
import storyMessyRoomBlank from '../images/ADHD/messy-room-blank.png';
import storyMessyRoom from '../images/ADHD/natalia-room-adhd.gif';
import storyTextAnxious from '../images/ADHD/text-anxious.gif';

// Process
import procResearchStats from '../images/ADHD/research-stats.svg';
import procEmpathyMap from '../images/ADHD/empathy-map.png';
import procBigIdeas from '../images/ADHD/big-ideas.svg';
import procPhone1 from '../images/ADHD/full-1.png';

export default class ADHDProjectPage extends React.Component {
  state: {
    popover: boolean,
  };

  state = {
    popover: false,
  };

  togglePopover = () => {
    this.setState({ popover: !this.state.popover });
  };

  render = () => {
    return (
      <div class="projects">
        {/* TITLE */}
        <hr style={{ marginTop: 0 }} />
        <h1
          class="intro-hed"
          style={{ color: 'black', fontWeight: 600, marginBottom: 0 }}
        >
          10
          <code>Four</code>
        </h1>{' '}
        <p
          style={{
            color: changeOpacity(colors.SECONDARY, '0.4'),
            fontSize: '0.6em',
            margin: 0,
            marginBottom: 10,
            fontFamily: 'times',
            fontWeight: 100,
          }}
        >
          12-14-18 / INF1602 / Finished
        </p>
        <p>An app made to help students with ADHD manage their lives. </p>
        {/* ARTICLE */}
        <div class="project-article">
          <hr />
          <Divider size={4} />

          <div id="whats-adhd">
            <h2 style={{ color: colors.PINK_PRIMARY }}>What's ADHD?</h2>
            <Divider />

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
            <Divider />
            <ImageWide
              image={miscUpGif}
              alt="Dog from the movie UP"
              caption={{
                text: (
                  <div>
                    How we <strong>imagine</strong> ADHD.
                  </div>
                ),
              }}
            />
            <Divider />
            <p>
              Now, that's not <em>entirely</em> wrong. I mean, it's mostly
              wrong. But what most of us don't realize is that people with ADHD
              experience focus in <strong>extremes</strong>. Sure, they{' '}
              <em>can</em> be distractable, but they can just as easily focus so
              hard they forget about the world.
            </p>
            <Divider />
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
          </div>
          <Divider />
          <hr />
          <Divider size={4} />
          <div id="understanding-adhd">
            <h2 style={{ color: colors.PINK_PRIMARY }}>Understanding ADHD</h2>
            <div style={{ height: '0.5em' }} />
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
          </div>
          <Divider />

          <hr />
          <Divider size={4} />

          <div id="meet-natalia">
            <h2 style={{ color: colors.PINK_PRIMARY }}>Meet Natalia</h2>
            <Divider />

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
            <Divider size={4} />

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

            <p style={{ marginTop: 20 }}>
              Tonight, Natalia has plans with an old friend,{' '}
              <strong>Rebeka</strong>. They went to elementary school together
              and they're seeing each other for the first time in a year.
              Natalia's super excited. She comes home from class and heads to
              her room to get ready, but when she gets in, she realizes her room
              is a <strong>mess</strong>.
            </p>
            <Divider />
            <ImageWide
              image={storyMessyRoomBlank}
              alt="messy room"
              caption={{
                text: (
                  <div>
                    <strong>Natalia's</strong> room
                  </div>
                ),
              }}
            />
            <Divider />
            <p>
              Natalia feels like she <strong>needs</strong> to clean it. She's
              getting anxious, and starts forgetting what's going on. Looking to
              the laundry piled up in her room, Natalia realizes she doesn't
              have clean clothes for tonight. Natalia's{' '}
              <strong>overwhelmed</strong>, and her mind starts racing to coming
              up with excuses to cancel on Rebeka...
            </p>
            <Divider />
            <ImageWide
              image={storyTextAnxious}
              alt="Natalia's phone"
              caption={{
                text: (
                  <div>
                    <strong>Natalia's</strong> phone
                  </div>
                ),
              }}
              style={{ height: 500, width: 'auto' }}
            />
            <Divider />

            <p>
              I know what you're thinking.{' '}
              <em>Why can't she just clean it later?</em> That's what most of us
              would do. But here's the thing. Remember when we said people with
              ADHD experience focus in <em>extremes</em>? Right now, Natalia is{' '}
              <strong>hyperfocusing</strong>. Natalia doesn't <em>just</em> see
              a messy room. In her mind, this is what's going on.
            </p>
            <Divider />
            <ImageWide
              image={storyMessyRoom}
              alt="messy room animation"
              caption={{
                text: (
                  <div>
                    <strong>Natalia's</strong> room, from <strong>her</strong>{' '}
                    eyes
                  </div>
                ),
              }}
            />
            <Divider />
            <p>
              Her brain is all over the place. Natalia <em>hates</em> this
              feeling. Sure, ADHD makes simple things impossible, but she can
              handle that. Doing her work sucks, but Natalia's figured out how
              to cope. This is where it really hurts her—when it starts
              affecting her loved ones. Natalia <em>loves</em> her friends and
              family, but her{' '}
              <strong>symptoms make it so hard to connect</strong> with them.
            </p>
            <Divider />
            <ImageWide
              image={storyNataliaAnxious}
              alt="natalia-anxious"
              caption={{
                text: (
                  <div>
                    Will I <em>ever</em> get <strong>better</strong>? Is it{' '}
                    <em>always</em> going to feel like <strong>this</strong>?
                  </div>
                ),
              }}
              style={{ maxHeight: 250, width: 'auto' }}
            />
          </div>

          <Divider />

          <hr />
          <Divider size={4} />
          <div id="adhd-needs">
            <h2 style={{ color: colors.PINK_PRIMARY }}>ADHD Needs</h2>
            <Divider />
            <p>
              What applications would Natalia use to deal with her symptoms
              right now?
            </p>
            <Divider />

            <ImageRow
              img1={appTrello}
              img1txt="Trello"
              img2={appAsana}
              img2txt="Asana"
              img3={appTodoist}
              img3txt="Todoist"
              size={70}
            />
            <Divider />
            <p>
              These are productivity apps that she'd normally use. They use
              checklists and alarms, sending her alerts that fixate on
              deadlines. For most people, this is fine. For Natalia, it's not
              quite the same. See, though they'll alert her, they won't hold her
              accountable. There's no sense of urgency. By this, we mean to say
              that these apps <strong>weren't made for Natalia</strong>. That
              begs the question,{' '}
              <code>
                <strong>what does Natalia need</strong>
              </code>
              ?
            </p>
            <Divider />
            <NeedsCarousel />
            <Divider />
            <p>
              Traditional push notifications are <strong>easy to ignore</strong>
              . We make notifications <em>salient</em> and <em>meaningful</em>{' '}
              to specific situations by creating custom notifications tailored
              to Natalia's symptoms. When she's hyperfocusing, it's critical to{' '}
              <strong>de-escalate</strong> her symptoms. We make it easier for
              her to be normal by having an{' '}
              <strong>accountability partner</strong> for her to work with.
            </p>
            <p>
              Getting to understand Natalia's needs gave us everything necessary
              to start ideating and to step even closer towards building a
              solution that is actually <strong>made for Natalia</strong>.
            </p>
          </div>
          <Divider />

          <hr />
          <Divider size={4} />

          <div id="introducing-10four">
            <h2 style={{ color: colors.PINK_PRIMARY }}>Introducing 10Four</h2>
            <Divider />

            <p>
              With those needs in mind, we ideated. We came up with a lot of{' '}
              <strong>awesome</strong> ideas, a few of which we used.
            </p>
            <Divider />

            <ImageWide image={procBigIdeas} alt="Big ideas" />
            <Divider />
            <p>
              We eventually focused on features that directly addressed how she
              would actually cope with her symptoms in our{' '}
              <strong>real-life</strong> situation:{' '}
              <code>pairing users doing similar tasks</code> and using{' '}
              <code>voice memos as notifications</code>. Out of those two needs,{' '}
              <strong>10Four</strong> was born.
            </p>
            <Divider />
            <ImageWide
              image={procPhone1}
              alt="The final wireframe"
              caption={{
                text: (
                  <div>
                    Our <strong>final</strong> wireframe
                  </div>
                ),
              }}
            />
            <Divider />
            <p>
              To test this, we conducted <strong>think-alouds</strong> and{' '}
              <strong>interviews</strong>, putting our participants in Natalia's
              story by asking them to use the product while doing a crossword
              puzzle.
            </p>
            <Divider />
            <p>
              We knew before testing that people who have ADHD struggle with
              productivity. Like most, they're procrastinators, doing things
              only when they feel urgent—more often than not at the last minute.
              That said, they <em>do</em> get things done, though the perception
              is that they don't. Their real problem is <em>how</em>. They don't{' '}
              <strong>feel like they have control</strong> over it. They can't
              ever seem to do it in the way <em>they</em> want to.
            </p>
            <Divider />
            <p>
              Realizing that was the key to our final product. Understanding
              that thinking about{' '}
              <code>
                ADHD as productivity is an easy way to explain away the nuances
                of what makes their experience unique was so powerful
              </code>
              . Natalia helped us understand what it means to deal with ADHD,
              and taught all of us a crucial lesson in the role empathy plays in
              designing great product. Though our idea is far from perfect, I'm
              grateful to have had the opportunity to learn as much as I did.
            </p>
          </div>
          <Divider />
          <hr />
          <Divider size={4} />
          <div id="credits">
            <h2 style={{ color: colors.PINK_PRIMARY }}>Credits</h2>
            <Divider />

            <p>
              Part of <strong>INF1602</strong>, Fundamentals of User Experience.
              Taught by Professor Olivier St-Cyr as a part of the Master of
              Information program at the University of Toronto.
            </p>

            <Divider />
            <ImageWide
              image={TeamPhoto}
              alt="the team"
              caption={{
                text: (
                  <div>
                    Ali Jafar, Christina Vuong, Olivia Zhang, (me),{' '}
                    <a
                      href="https://alexandrascandolo.com"
                      alt="Alexandra Scandolo"
                    >
                      Alexandra Scandolo
                    </a>
                  </div>
                ),
              }}
            />
            <Divider />
          </div>
        </div>
      </div>
    );
  };
}
