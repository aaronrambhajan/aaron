import React from 'react';
import { colors } from '../../colors';

import ProjectInfo from '../../components/ProjectInfo';
import Divider from '../../components/Divider';
import TableOfContents from '../../components/TableOfContents';
import NotesTable from '../../components/NotesTable';

export default class TrashUserResearch extends React.Component {
  render = () => {
    return (
      <div id={this.props.id}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <h2
            style={{
              fontWeight: 100,
              color: colors.PROJECT_2,
              fontSize: '150%',
            }}
          >
            user research
          </h2>

          <TableOfContents />
        </div>

        <Divider size={2} />
        <p
          style={{
            fontSize: '1.25em',
            textAlign: 'center',
          }}
        >
          <em>
            How do people's thoughts about garbage sorting compare to their
            performance?
          </em>
        </p>
        <Divider size={2} />
        <ProjectInfo
          roles={['Experimental Design', 'Data Analysis', 'Supervision']}
          timeline="Oct. 2017 – Nov. 2017"
          team={['Te Chen', 'Dr. John Robinson', 'Sustainability Office']}
          methods={['Surveys', 'Observation']}
        />
        <Divider size={2} />
        <h3 style={{ fontWeight: 600, color: colors.PROJECT_2 }}>objective</h3>
        <Divider size={0.33} />
        <p>
          Near the start of our project, I'd been chatting with a caretaker
          about my work. In response, he said:{' '}
          <em>"Garbage sorting? How hard can that really be?"</em>. The
          caretaker unwittingly made me realize something—I have no idea what
          goes where! Even if I wanted to improve, there aren't any ways to go
          about it—no guide, no signs—nothing. That's when I realized: are
          people even aware they're wrong?
        </p>
        <Divider />
        <p>
          The primary objective was to evaluate people's perceptions of garbage
          sorting—did they think it was hard? Do they find the labelling
          helpful? Most importantly, how did it compare to their actual
          performance?
        </p>
        <Divider />
        <h3 style={{ fontWeight: 600, color: colors.PROJECT_2 }}>
          experimental design
        </h3>
        <Divider size={0.33} />
        <p>
          Over the course of 4 weeks during the field study (2 weeks control, 2
          weeks experimental), we conducted 108 observations during control and
          117 observations during the new bin labels. This means that we noted
          the item being thrown, where they threw it, and how long they took. Of
          those observations, we <u>surveyed</u> a random subset of 30 people
          from current and 29 people from experimental. We would approach them
          directly after observation under the pretense of a survey about
          sorting on campus—they were not told it was about improving sorting
          accuracy.
        </p>
        <Divider />
        <h3 style={{ fontWeight: 600, color: colors.PROJECT_2 }}>results</h3>
        <Divider size={0.33} />
        <p>
          Things... didn't work out as planned! No one knows what's right and
          very few pay attention—38% of old label things sorted correctly,
          compared to the new, at 36%. These results were consistent across
          specific items and streams, but the most interesting insight was in
          our attitudinal questions.
        </p>
        <Divider />
        <p>
          Using the old labels, <strong>76%</strong> of people who sorted
          incorrectly rated their items as easy to sort. Using the <em>new</em>{' '}
          labels, <strong>only 47% of people</strong> rated it easy to sort.
          This is compounded by the fact that only 55% of people noticed the
          labels were changed in the first place. Taken together, these findings
          are evocative of the study's motive: <u>people aren't aware</u>. This
          finding is clear in its meaning—there's a significant gap between{' '}
          <u>how people perform</u>, and{' '}
          <u>
            how people <em>think</em> they perform
          </u>
          . In short:{' '}
          <strong>they have NO idea they're getting it wrong</strong>.
        </p>
        <Divider />
        <h3 style={{ fontWeight: 600, color: colors.PROJECT_2 }}>
          product impact
        </h3>
        <Divider size={0.33} />
        <p>
          We used this to change how we <u>grouped the items</u> together in the
          label, helping us inform how it would be understood from different
          viewpoints. We additionally used this data to form a series of
          recommendations for the Sustainability Office—particularly for
          advertising. Though the results weren't what was expected, they were
          clear in showing us what people experience. We most often sort garbage
          when we're in a rush, doing something else—it's a passive process.
          That means the bin interface needs to be designed for that, though
          what that means is unclear right now.
        </p>
        <Divider />
        <h3 style={{ fontWeight: 600, color: colors.PROJECT_2 }}>notes</h3>
        <Divider size={0.33} />

        <NotesTable
          info={[
            {
              title: 'Collaboration',
              description:
                'This study was conducted as a collaboration between Te and I (acting as UX Research Consultants to the Sustainability Office) and a group of 6 others enrolled in a graduate class, Campus as a Living Lab: Anastasia Bouziouvis, Swinzle Chauhan, Mengxi Gu, Sun Young Lee, Ahmad Shakeri, and Yuqiao Wen. We compiled these findings into a 20-page report, along with recommendations made to the Sustainability Office.',
              link:
                'https://www.dropbox.com/s/uwgrdwn622mtjt2/User-Research-Report.pdf?dl=0',
            },
          ]}
        />
        <Divider size={2} />
      </div>
    );
  };
}
