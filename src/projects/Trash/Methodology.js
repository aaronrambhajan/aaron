import React from 'react';
import { colors } from '../../colors';

import Divider from '../../components/Divider';
import TableOfContents from '../../components/TableOfContents';

export default class TrashMethodology extends React.Component {
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
            methodology
          </h2>

          <TableOfContents />
        </div>
        <div>
          <Divider />
          <h3 style={{ fontWeight: 600, color: colors.PROJECT_2 }}>
            objective
          </h3>
          <Divider size={0.33} />
          <p>
            There are two key stakeholders in this problem:{' '}
            <u>people who use garbage bins</u> and{' '}
            <u>people who manage waste</u> (WM). The people who <em>use</em>{' '}
            garbage bins do so everywhere: in buildings, on streets, using
            public transit. WM, however, is responsible everything from the bin
            to the landfill disposal. They tend to be cynical about people, so I
            had to keep that in mind while designing these experiments. The{' '}
            <em>point</em> of this research, as a whole, was to determine{' '}
            <strong>whether these new labels work better for people</strong>.
          </p>

          <Divider />
          <h3 style={{ fontWeight: 600, color: colors.PROJECT_2 }}>methods</h3>
          <Divider size={0.33} />
          <p>
            Determining if the <u>new labels</u> work better than the{' '}
            <u>old labels</u> is naturally structured as an A/B test—but we
            needed something with greater scope. There are many confounding
            factors at play, here, though it's most salient that people throw
            out garbage when they're on the go. We needed to use methods that
            would retain this <u>context</u>.
          </p>
          <Divider />
          <p>
            The <strong>field evaluation</strong> was used to learn how people
            sort in the real-world, with context attached. This took the form of
            a field A/B test. We conducted 4 different iterations—2 prototypes,
            a pilot, then a proper study—all which I used to study and compare
            product impact.
          </p>
          <Divider />
          <p>
            The <strong>user research</strong> was used to learn how people's
            perception of their performance compared to their actual—in essence,
            how did they feel? This took the form of a <u>survey</u> conducted
            in-person with <u>observations</u>. These findings informed a lot of
            our theories about design, and directly influenced how we thought
            about the problem.
          </p>
          <Divider />
          <p>
            The <strong>psychology lab</strong> was used to learn how label
            design impacts the accuracy and speed of people's decisions. I
            wanted to understand how deep the impact of design goes—if subjected
            to cognitive and attentional tasks, would we find the new labels are
            easier for people?
          </p>
          <Divider />
          <h3 style={{ fontWeight: 600, color: colors.PROJECT_2 }}>purpose</h3>
          <p>
            No one method would be sufficient—nor are all of these sufficient.
            Making choices about what was worth testing was incredibly hard, but
            our collaborators kept us grounded and the goal fully in view. We
            did everything possible to keep it focused on the <u>users</u>
            —that meant admitting to ourselves when we failed.
          </p>
          <Divider />
        </div>
      </div>
    );
  };
}
