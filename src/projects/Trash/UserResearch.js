import React from 'react';
import { SectionContainer, SectionHeader, Prose, Subheading } from './util';
import ProjectInfo from '../../components/ProjectInfo';
import NotesTable from '../../components/NotesTable';
import Header from '../../components/Header';

export default class TrashUserResearch extends React.Component {
  render = () => {
    return (
      <SectionContainer>
        <SectionHeader
          title="User Research"
          description="How does perception compare to performance?"
        />

        <Subheading>Objective</Subheading>
        <Prose>
          <strong>"Garbage sorting? How hard can that be?"</strong>. That's a
          quote from a conversation I had with a caretaker. I left that
          conversation to go home, throwing out a coffee cup on the way. To this
          day, <strong>I don't remember where I put it</strong>.
        </Prose>
        <Prose>
          I had an epiphany (yes, <em>that</em> dramatic). I think I know what
          goes where, but I can't even remember where I put it.{' '}
          <strong>I have no idea what's correct</strong>. This got me
          thinking—it can't just be me.
        </Prose>
        <Prose>
          The primary objective was to evaluate people's perceptions of garbage
          sorting—did they think it was hard? Do they find the labelling
          helpful? Most importantly, how did it compare to their actual
          performance?
        </Prose>
        <Subheading>Experimental Design</Subheading>
        <Prose>
          Over the course of 4 weeks (2 weeks control, 2 weeks experimental), we
          conducted <strong>225 observations</strong> and{' '}
          <strong>59 surveys</strong>. This means that we recorded the item
          being thrown, the bin hole they threw it in, and the time they took.
          We would approach a random subset of people we observed directly after
          under the pretense of a survey about sorting on campus—not about
          improving sorting accuracy.
        </Prose>
        <Prose>
          We chose to use observations and surveys because it was to be
          conducted at the same time as the field study. We wanted to glean
          everything possible from the process, while keeping in mind that
          getting in-depth answers would be difficult.
        </Prose>
        <Subheading>Results</Subheading>
        <Prose>
          Things didn't work out as planned! No one knows what's right and few
          pay attention: <strong>38% of old label items</strong> sorted
          correctly compared to <strong>36% of new</strong>. These results were
          consistent across items, but the most interesting insights came in our
          attitudinal questions.
        </Prose>
        <Prose>
          Only 55% of people noticed the labels were changed in the first
          place—indicative that sorting is largely passive. On top of that,
          using the <strong>old</strong> labels,{' '}
          <span>
            <strong>76%</strong> of people who sorted incorrectly rated their
            items as easy to sort
          </span>
          . Using the <strong>new</strong> labels,{' '}
          <span>
            <strong>47%</strong> of people rated it easy to sort
          </span>
          .
        </Prose>
        <Prose>
          Taken together, these findings are evocative of the study's motive:{' '}
          <strong>people aren't aware</strong> they're even getting it wrong!
          There's a significant gap between <span>how people perform</span>, and{' '}
          <span>
            how people <em>think</em> they perform
          </span>
          .
        </Prose>
        <Subheading>Impact</Subheading>
        <Prose>
          We used this to change how we <strong>grouped the items</strong>{' '}
          together in the label, helping us inform how it would be understood
          from invariant viewpoints. We used this data to form a series of
          recommendations for the Sustainability Office specifically geared
          towards advertising (found below).
        </Prose>
        <Prose>
          Though the results weren't what was expected,{' '}
          <strong>they showed us what people experience</strong>. We most often
          sort garbage when we're in a rush, doing something else—it's a passive
          process. That means the bin interface needs to be designed for that,
          though what that means is unclear right now.
        </Prose>
        <Subheading>Materials</Subheading>
        <NotesTable
          info={[
            {
              title: 'Recommendations Report',
              description:
                'This study was conducted as a collaboration between Te and I (acting as UX Research Consultants to the Sustainability Office) and a group of 6 others enrolled in a graduate class, Campus as a Living Lab: Anastasia Bouziouvis, Swinzle Chauhan, Mengxi Gu, Sun Young Lee, Ahmad Shakeri, and Yuqiao Wen. We compiled these findings into a 20-page report, along with recommendations made to the Sustainability Office.',
              link:
                'https://www.dropbox.com/s/uwgrdwn622mtjt2/User-Research-Report.pdf?dl=0',
            },
          ]}
        />
      </SectionContainer>
    );
  };
}
