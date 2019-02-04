import React from 'react';
import { colors } from '../../colors';

import Divider from '../../components/Divider';
import TableOfContents from '../../components/TableOfContents';
import ImageWide from '../../components/ImageWide';

import methods from '../../images/trash-field-study/methodology-methods.png';
import users from '../../images/trash-field-study/methodology-users.png';

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
          <Divider size={2} />
          <p>
            The purpose of this study is to test whether these new labels work
            better for people, which brings us to my key research question:{' '}
            <strong>how do we measure the success of the labels</strong>?
          </p>
          <Divider size={4} />

          <ImageWide image={users} alt="users" />
          <Divider size={2} />

          <p>
            There are two key stakeholders in this problem:{' '}
            <strong>users of garbage bins</strong> (everyone on campus) and{' '}
            <strong>waste management</strong>. The people who <em>use</em>{' '}
            garbage bins do so everywhere: in buildings, on streets, using
            public transit. WM is responsible everything from the bin to the
            landfill disposal.
          </p>
          <Divider size={6} />
          <ImageWide image={methods} alt="methods" />
          <Divider size={4} />
          <p>
            Comparing new and old labels is naturally structured as an A/B test.
            The issue is there are many confounds—people throw out garbage in
            the real world! I needed to use methods that would retain context.
          </p>
          <Divider />
          <p>
            The <strong>field evaluation</strong> was used to learn how people
            sort in the real-world. This took the form of a field A/B test. We
            conducted 4 different iterations—2 prototypes, a pilot, then a
            proper study—all which I used to study and compare product impact.
          </p>
          <Divider />
          <p>
            The <strong>user research</strong> was used to learn how people's
            perception compare to their performance. This took the form of 59
            in-person <strong>surveys</strong> and 226{' '}
            <strong>observations</strong>. These findings directly influenced
            the designs.
          </p>
          <Divider />
          <p>
            The <strong>psychology lab</strong> was used to learn how label
            design influences people's decisions. This took the form of{' '}
            <strong>rapid categorization</strong> (n = 64) and{' '}
            <strong>mouse-tracking</strong> (n = 41) studies.
          </p>
          <Divider />
        </div>
      </div>
    );
  };
}
