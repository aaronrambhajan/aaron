// @flow

import React from 'react';
import images from '../images/images';
import {
  ArticleContainer,
  SectionContainer,
  ArticleHeaderContainer,
  ArticleHeaderText,
  ArticleHeaderCaption,
  Summary,
  Prose,
  Subheading,
  ImageRow,
  Slides,
} from './Trash/util';
import { colors, changeOpacity } from '../colors';

// Components
// import ImageRow from '../components/ImageRow';
import Header from '../components/Header';
import ImageWide from '../components/ImageWide';
import CitationPopover from '../components/CitationPopover';
import NeedsCarousel from '../components/NeedsCarousel';

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
      <ArticleContainer>
        <SectionContainer>
          <ArticleHeaderContainer>
            <ArticleHeaderText>
              10
              <code>Four</code>
              –Designing ADHD
            </ArticleHeaderText>
            <ArticleHeaderCaption>
              {' '}
              12-14-18 / INF1602 / Finished
            </ArticleHeaderCaption>
          </ArticleHeaderContainer>

          <Summary>
            An app made to help students with ADHD manage their lives.
          </Summary>
        </SectionContainer>

        <SectionContainer>
          <Header title="Context" description="What's ADHD?" />

          <Prose>
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
          </Prose>
          <ImageWide
            image={images.adhd.app_up_gif}
            alt="Dog from the movie UP"
            caption={{
              text: (
                <div>
                  How we <strong>imagine</strong> ADHD.
                </div>
              ),
            }}
          />
          <Prose>
            Now, that's not <em>entirely</em> wrong. I mean, it's mostly wrong.
            But what most of us don't realize is that people with ADHD
            experience focus in <strong>extremes</strong>. Sure, they{' '}
            <em>can</em> be distractable, but they can just as easily focus so
            hard they forget about the world.
          </Prose>
          <Prose>
            ADHD is often misunderstood beacuse it can be{' '}
            <a href="https://www.everydayhealth.com/columns/a-doctors-personal-take-on-adhd/whats-quiet-adhd/">
              silent
            </a>
            —it often happens that people with symptoms aren't even aware of it.
            More pertinently, however, with symptoms as abstract as impulsivity,
            hyperactivity, and inattention, is it really that surprising we
            think of ADHD as characters like Dug? We started our project with
            this question:{' '}
            <em>
              how do people with ADHD <u>experience</u> these symptoms?{' '}
            </em>
          </Prose>
        </SectionContainer>

        <SectionContainer>
          <Header title="Research" description="Understanding ADHD" />
          <Prose>
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
          </Prose>
          <Prose>
            We focused on <strong> students between 18 and 24 with ADHD</strong>
            . Throughout the process, we interviewed the same 4 people with
            ADHD, all whom are from our personal lives. We struggled recruiting
            more ADHD participants because of the nature of dealing with a
            sensitive population, but the nature of these connections empowered
            us to understand their experiences so much better. We complemented
            this with <strong>53 survey participants</strong> without ADHD, but
            whom <em>struggle with productivity</em>, playing into the quietness
            of ADHD, but also how regular people experience it.
          </Prose>

          <ImageWide
            image={images.adhd.process_research_stats}
            alt="research-stats"
            style={{ maxHeight: 250 }}
          />

          <Prose>
            We focused on asking questions about their{' '}
            <code>
              relationship with their loved ones, technology, and themselves
            </code>
            . Our interviews were <strong>semi-structured</strong>, allowing
            these conversations to take on lives of their own. The surveys
            helped us understand people's needs, and more vitally, <em>how</em>{' '}
            people struggle with productivity.
          </Prose>
          <Prose>
            Though we encountered many obstacles, our research proved to be
            hugely insightful. After discussing it together, we built the
            empathy map that would become the foundation for{' '}
            <strong>Natalia</strong>, our persona.
          </Prose>
          <ImageWide
            image={images.adhd.process_empathy_maps}
            alt="empathy-map"
          />
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
        </SectionContainer>
        <SectionContainer>
          <Header title="Persona" description="Meet Natalia" />
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
                <img
                  src={images.adhd.story_natalia_normal}
                  alt="natalia-normal"
                />
              </div>

              <div style={{ marginLeft: 20 }}>
                <h3 style={{ color: 'black' }}>
                  Meet <strong>Natalia</strong>.
                </h3>
                <Prose>22 / Graduate student / ADHD</Prose>
              </div>
            </div>
          </div>

          <Prose>
            Like many of us, Natalia's balancing school, a part-time job, and
            her friends and family. Unlike many of us, Natalia struggles with{' '}
            <strong>ADHD</strong>. We know already this means she struggles with{' '}
            <strong>impulsivity</strong>, <strong>hyperactivity</strong>, and{' '}
            <strong>inattention</strong>. But, what you need to understand is
            that Natalia's symptoms make even
          </Prose>

          <h2 style={{ textAlign: 'center', marginTop: 20, marginBottom: 20 }}>
            <code>
              the <strong>simplest</strong> things feel{' '}
              <strong>impossible</strong>.
            </code>
          </h2>
          <Prose>
            Tonight, Natalia has plans with an old friend,{' '}
            <strong>Rebeka</strong>. They went to elementary school together and
            they're seeing each other for the first time in a year. Natalia's
            super excited. She comes home from class and heads to her room to
            get ready, but when she gets in, she realizes her room is a{' '}
            <strong>mess</strong>.
          </Prose>

          <ImageWide
            image={images.adhd.story_messy_room_empty}
            alt="messy room"
            caption={{
              text: (
                <div>
                  <strong>Natalia's</strong> room
                </div>
              ),
            }}
          />

          <Prose>
            Natalia feels like she <strong>needs</strong> to clean it. She's
            getting anxious, and starts forgetting what's going on. Looking to
            the laundry piled up in her room, Natalia realizes she doesn't have
            clean clothes for tonight. Natalia's <strong>overwhelmed</strong>,
            and her mind starts racing to coming up with excuses to cancel on
            Rebeka...
          </Prose>
          <ImageWide
            image={images.adhd.story_text_anxious}
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
          <Prose>
            I know what you're thinking.{' '}
            <em>Why can't she just clean it later?</em> That's what most of us
            would do. But here's the thing. Remember when we said people with
            ADHD experience focus in <em>extremes</em>? Right now, Natalia is{' '}
            <strong>hyperfocusing</strong>. Natalia doesn't <em>just</em> see a
            messy room. In her mind, this is what's going on.
          </Prose>

          <ImageWide
            image={images.adhd.story_messy_room_full}
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

          <Prose>
            Her brain is all over the place. Natalia <em>hates</em> this
            feeling. Sure, ADHD makes simple things impossible, but she can
            handle that. Doing her work sucks, but Natalia's figured out how to
            cope. This is where it really hurts her—when it starts affecting her
            loved ones. Natalia <em>loves</em> her friends and family, but her{' '}
            <strong>symptoms make it so hard to connect</strong> with them.
          </Prose>

          <ImageWide
            image={images.adhd.story_natalia_anxious}
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
        </SectionContainer>

        <SectionContainer>
          <Header title="Needs" description="What does ADHD need?" />
          <Prose>
            What applications would Natalia use to deal with her symptoms right
            now?
          </Prose>

          <ImageRow
            img1={images.adhd.app_trello}
            img1txt="Trello"
            img2={images.adhd.app_asana}
            img2txt="Asana"
            img3={images.adhd.app_todoist}
            img3txt="Todoist"
            size={70}
          />
          <Prose>
            These are productivity apps that she'd normally use. They use
            checklists and alarms, sending her alerts that fixate on deadlines.
            For most people, this is fine. For Natalia, it's not quite the same.
            See, though they'll alert her, they won't hold her accountable.
            There's no sense of urgency. By this, we mean to say that these apps{' '}
            <strong>weren't made for Natalia</strong>. That begs the question,{' '}
            <code>
              <strong>what does Natalia need</strong>
            </code>
            ?
          </Prose>

          <NeedsCarousel />

          <Prose>
            Traditional push notifications are <strong>easy to ignore</strong>.
            We make notifications <em>salient</em> and <em>meaningful</em> to
            specific situations by creating custom notifications tailored to
            Natalia's symptoms. When she's hyperfocusing, it's critical to{' '}
            <strong>de-escalate</strong> her symptoms. We make it easier for her
            to be normal by having an <strong>accountability partner</strong>{' '}
            for her to work with.
          </Prose>
          <Prose>
            Getting to understand Natalia's needs gave us everything necessary
            to start ideating and to step even closer towards building a
            solution that is actually <strong>made for Natalia</strong>.
          </Prose>
        </SectionContainer>
        <SectionContainer>
          <Header title="Solution" description="Introducing 10Four" />

          <Prose>
            With those needs in mind, we ideated. We came up with a lot of{' '}
            <strong>awesome</strong> ideas, a few of which we used.
          </Prose>
          <ImageWide image={images.adhd.process_big_ideas} alt="Big ideas" />
          <Prose>
            We eventually focused on features that directly addressed how she
            would actually cope with her symptoms in our{' '}
            <strong>real-life</strong> situation:{' '}
            <code>pairing users doing similar tasks</code> and using{' '}
            <code>voice memos as notifications</code>. Out of those two needs,{' '}
            <strong>10Four</strong> was born.
          </Prose>

          <ImageWide
            image={images.adhd.process_phone}
            alt="The final wireframe"
            caption={{
              text: (
                <div>
                  Our <strong>final</strong> wireframe
                </div>
              ),
            }}
          />
          <Prose>
            To test this, we conducted <strong>think-alouds</strong> and{' '}
            <strong>interviews</strong>, putting our participants in Natalia's
            story by asking them to use the product while doing a crossword
            puzzle.
          </Prose>
          <Prose>
            We knew before testing that people who have ADHD struggle with
            productivity. Like most, they're procrastinators, doing things only
            when they feel urgent—more often than not at the last minute. That
            said, they <em>do</em> get things done, though the perception is
            that they don't. Their real problem is <em>how</em>. They don't{' '}
            <strong>feel like they have control</strong> over it. They can't
            ever seem to do it in the way <em>they</em> want to.
          </Prose>
          <Prose>
            Realizing that was the key to our final product. Understanding that
            thinking about{' '}
            <code>
              ADHD as productivity is an easy way to explain away the nuances of
              what makes their experience unique was so powerful
            </code>
            . Natalia helped us understand what it means to deal with ADHD, and
            taught all of us a crucial lesson in the role empathy plays in
            designing great product. Though our idea is far from perfect, I'm
            grateful to have had the opportunity to learn as much as I did.
          </Prose>
        </SectionContainer>
        <SectionContainer>
          <Header title="Credits" description="Meet the team" />
          <Prose>
            Part of <strong>INF1602</strong>, Fundamentals of User Experience.
            Taught by Professor Olivier St-Cyr as a part of the Master of
            Information program at the University of Toronto.
          </Prose>
          <ImageWide
            image={images.adhd.app_team_photo}
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
        </SectionContainer>
      </ArticleContainer>
    );
  };
}
