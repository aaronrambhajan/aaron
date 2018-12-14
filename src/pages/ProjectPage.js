// @flow

import React from 'react';
import { Button, Collapse } from 'reactstrap';

// Components
import Persona from '../components/Persona';
import ProjectTitle from '../components/ProjectTitle';
import ProjectSubheading from '../components/ProjectSubheading';
import { ButtonGroupings } from '../components/ProjectCard';
import ImageRow from '../components/ImageRow';
import ImageWithSideCaption from '../components/ImageWithSideCaption';
import ImageWide from '../components/ImageWide';
import Carousel from '../components/Carousel';

/* IMAGES */
// Apps
import appAsana from '../images/ADHD/Asana';
import appTrello from '../images/ADHD/Trello';
import appTodoist from '../images/ADHD/Todoist';

import miscUpGif from '../images/ADHD/up-gif.gif';

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
    story: boolean,
    needs: boolean,
    product: boolean,
    credits: boolean,
  };

  state = {
    problem: false,
    story: false,
    needs: false,
    product: false,
    credits: false,
  };

  toggleProblem = () => {
    this.setState({
      problem: !this.state.problem,
      story: false,
      needs: false,
      product: false,
      credits: false,
    });
  };

  toggleStory = () => {
    this.setState({
      problem: false,
      story: !this.state.story,
      needs: false,
      product: false,
      credits: false,
    });
  };

  toggleNeeds = () => {
    this.setState({
      problem: false,
      story: false,
      needs: !this.state.needs,
      product: false,
      credits: false,
    });
  };

  toggleProduct = () => {
    this.setState({
      problem: false,
      story: false,
      needs: false,
      product: !this.state.product,
      credits: false,
    });
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

          <div>
            <p>
              For <em>Fundamental of User Experience</em>, we created{' '}
              <strong>10Four</strong>, an mobile productivity application
              designed for <strong>students with ADHD</strong>. We designed a
              product focused on <strong>measurably reducing overwhelm</strong>{' '}
              by partnering people on tasks.
            </p>

            <p>
              We learned that being a student with ADHD is hard, but not in the
              way we expect—most people think it’s about getting things done. We
              learned that it’s really about{' '}
              <code>
                helping them live their lives, how{' '}
                <span style={{ fontWeight: 600 }}>they</span> want to
              </code>
              .
            </p>
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
            title="Problem"
            titleColor={this.state.problem ? 'grey' : 'black'}
          />

          <Collapse isOpen={this.state.problem}>
            <p>
              When most people think of ADHD, we think of children bouncing off
              the walls. We think of the dog from <strong>Up</strong> getting
              distracted at the sight of a squirrel, or a friend who's always
              fidgeting.
            </p>

            <ImageWide
              image={miscUpGif}
              alt="Dog from the movie UP"
              caption="Does Dug have ADHD?"
            />

            <p>
              What most people don't know is that this is far from the whole
              truth. The reality is that people with ADHD experience focus in{' '}
              <strong>extremes</strong>. Sure, they <em>can</em> be
              distractable, but they can just as easily be so hyperfocused they
              forget about the world around them.
            </p>

            <p>
              You'd be forgiven for not understanding this. It's largely a{' '}
              <strong>silent</strong>* illness, and is often misunderstood. With
              symptoms as abstract as impulsivity, hyperactivity, and
              inattention, how are we to even understand that? This is where we
              started our project. Our task was to{' '}
              <a href="https://chi2019.acm.org/authors/student-design-competition/">
                "weave the social fabric"{' '}
              </a>
              using technology, and we sought to do that for people with ADHD by
              asking ourselves:
              <em> How are these symptoms experienced? How are they felt?</em>
            </p>

            <ProjectSubheading text="Research" />
            <p>
              Understanding what people with ADHD feel took one part research,
              and 99 parts empathy. Throughout this whole process, we
              interviewed the same 4 people—people from our personal lives we
              knew who lived with ADHD. Though we struggled with recruiting more
              ADHD participants, the nature of these connections empowered us to
              understand their experiences so much better. Taken together with
              our in-depth clinical research, we were able to start answering
              the call of empathy—how do we deeply understand someone's{' '}
              <strong>psychological experience</strong>?
            </p>
            <p>
              We focused on asking questions about their relationship with their
              loved ones, technology, and themselves. Conducting semi-structured
              interviews, these conversations took on lives of their own,
              becoming a treasure trove of insight. We supplemented this data
              with surveys focused on people whom <em>struggle</em> with
              productivity—in part to cope with our lack of population, and in
              part to address quiet ADHD.
            </p>
            <p>
              What we found was incredible. Our research, though ripe with
              obstructions along the way, was profoundly insightful. Discussing
              it together, we built this empathy map, which served as the
              cornerstone everything that was to come—it became the foundation
              for <strong>Natalia</strong>, our persona.
            </p>
            <ImageWide image={procEmpathyMap} alt="empathy-map" />
          </Collapse>

          <hr />
          <ProjectTitle
            toggle={this.toggleStory}
            title="Story"
            titleColor={this.state.story ? 'grey' : 'black'}
          />

          <Collapse isOpen={this.state.story}>
            {/* @todo: Add tooltips to the symptoms. */}
            <Persona />

            <p>
              Tonight, Natalia has plans with an old friend,{' '}
              <strong>Rebeka</strong>. They went to elementary school together,
              and they're seeing each other for the first time in a year. As you
              can imagine, Natalia's super excited. She comes home from class in
              the afternoon, and heads to her room to get ready. But when she
              gets in, her room is a mess.
            </p>

            <ImageWide
              image={storyMessyRoomBlank}
              alt="messy room"
              caption="Natalia's Room"
            />
            <p>
              Natalia feels like she <strong>needs</strong> to clean it. She's
              getting anxious and starting to forget what's going on. Becoming
              overwhlemed, Natalia's mind is racing with thoughts about her
              room, about cancelling on Rebeka...
            </p>

            <ImageWide
              image={storyTextAnxious}
              alt="Natalia's phone"
              caption="Natalia's phone"
              style={{ height: 500, width: 'auto' }}
            />

            <p>
              I know what you're thinking.{' '}
              <em>Why can't she just clean it later?</em> After all, that's what
              most of us would do. Here's the thing. Remember when we said
              people with ADHD experience focus in <em>extremes</em>? This is
              Natalia in one of those extremes. <strong>Hyperfocusing</strong>.
              Natalia doesn't <em>just</em> see a messy room. In her mind, this
              is what's happening.
            </p>
            <ImageWide
              image={storyMessyRoom}
              alt="messy room animation"
              caption="What Natalia sees"
            />
            <p>
              Her brain is all over the place. Natalia hates this feeling. Sure,
              ADHD makes simple things impossible, but this is where it really
              affects her. She can get through her work, through school—but when
              it starts affecting her loved ones, she gets so frustrated.
              Natalia <em>loves</em> her friends and family, but her{' '}
              <strong>symptoms make it so hard to connect</strong> with them.
            </p>
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
              text="Notification systems built for her symptoms that keep her self-aware."
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
              text="Someone who can empathize with her and hold her accountable."
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
