import React from 'react';
import { colors, changeOpacity } from '../colors';

import ProjectInfo from '../components/ProjectInfo';
import Divider from '../components/Divider';
import ImageWide from '../components/ImageWide';
import TableOfContents from '../components/TableOfContents';

import MouseTracking from '../images/trash-field-study/mouse-tracking.gif';
import RapidCategorization from '../images/trash-field-study/trash-exp1.gif';
import exp1results1 from '../images/trash-field-study/exp1results1.png';
import exp1results2 from '../images/trash-field-study/exp1results2.png';

export default class TrashPsychLab extends React.Component {
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
            psychology lab
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
          <em>How does design impact decision-making?</em>
        </p>
        <Divider size={2} />
        <ProjectInfo
          roles="Experimental Design, Programming, Data Analysis"
          timeline="Aug. 2017 - Dec. 2018"
          team="Dr. Michael Mack"
          methods="Rapid Categorization (cognitive), Mouse-tracking (attentional)"
        />
        <Divider size={2} />
        <h3 style={{ fontWeight: 600, color: colors.PROJECT_2 }}>
          experiment 1
          <span style={{ fontWeight: 100 }}>: rapid categorization</span>
        </h3>
        <Divider size={0.5} />

        <h3 style={{ fontWeight: 100, color: colors.SECONDARY }}>
          <u>objective</u>
        </h3>
        <Divider size={0.33} />
        <p>
          The objective of the first experiment was to study how the label
          design impacts the accuracy and speed of people's decisions. I
          hypothesized that people would be more accurate and have faster
          response times with the new labels. The new icons were designed with
          human vision processing in mind, so they should better map onto (1)
          our cognitive models of the items, and (2) our visual perception of
          objects. Ultimately, I hoped to answer:{' '}
          <u>can we help people make better decisions in less time</u>?
        </p>
        <Divider />
        <ImageWide
          image={RapidCategorization}
          alt="rapid-categorization"
          style={{ maxWidth: '75%' }}
          caption={{
            text: <div>Rapid categorization design</div>,
          }}
        />
        <Divider />
        <h3 style={{ fontWeight: 100, color: colors.SECONDARY }}>
          <u>experimental design</u>
        </h3>
        <Divider size={0.33} />
        <p>
          I used{' '}
          <a href="https://www.ncbi.nlm.nih.gov/pubmed/25938178">
            rapid categorization
          </a>
          , which exposes users to an image for lengths as short as <u>25ms</u>.
          People are shown an image of an item for 1000ms, then exposed to
          either an <u>old</u> or <u>new</u> icon for 25, 33, 50, 75, 125, or
          250ms, followed by an image mask. After this, they're given a 2000ms
          window to press a button to indicate{' '}
          <u>whether the item and icon match</u>.
        </p>
        <Divider />
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <ImageWide
            image={exp1results1}
            alt="exp1-results1"
            style={{ maxWidth: '90%' }}
            caption={{
              text: (
                <div style={{ fontFamily: 'helvetica' }}>
                  <strong>
                    <em>D'</em>
                  </strong>
                  : our accuracy measure
                </div>
              ),
            }}
          />
          <ImageWide
            image={exp1results2}
            alt="exp1-results2"
            style={{ maxWidth: '90%' }}
            caption={{
              text: (
                <div style={{ fontFamily: 'helvetica' }}>
                  Mean <strong>Response Times</strong>
                </div>
              ),
            }}
          />
        </div>
        <Divider />
        <p>
          As it turns out, <strong>yes, we can</strong>! <em>D'</em> (d-prime),
          borrowed from signal detection theory, measures response
          sensitivity—a.k.a. accuracy. The D' of the <u>new labels</u> is
          consistently higher, especially at 25ms and 250ms, where both the
          least and most visual information is given. This is critical,
          especially in light of the <a href="#user-research">user research</a>{' '}
          findings, because of how little time is spent looking at the labels.
        </p>
        <Divider />
        <p>
          Ultimately, this research has been crucial to proving our design
          methodology. Being able to test these labels through an exhaustive
          cognitive paradigm introduces rigor that is rarely held by
          design—rigor that is essential for building a standard
        </p>

        <Divider />
        <h3 style={{ fontWeight: 100, color: colors.SECONDARY }}>
          <u>notes</u>
        </h3>
        <p>
          I wrote this experiment in MATLAB using the Psychtoolbox package,
          designed the trials using Python, and conducted analysis in R.
        </p>
        <p>
          Links: <a href="https://github.com/aaronrambhajan">Code</a>,{' '}
          <a href="https://www.dropbox.com/s/qzgze7tzdd2rny4/Experimental%20Design%20Trash-Lab.pdf?dl=0">
            full experimental design notes
          </a>
          .
        </p>
        <Divider />

        <h3 style={{ fontWeight: 600, color: colors.PROJECT_2 }}>
          experiment 2<span style={{ fontWeight: 100 }}>: mouse-tracking</span>
        </h3>
        <Divider size={0.5} />
        <h3 style={{ fontWeight: 100, color: colors.SECONDARY }}>
          <u>objective</u>
        </h3>
        <Divider size={0.33} />

        <p>
          The objective of the second study was to further the first—how do the
          label designs impact the accuracy and speed of people's decisions? The
          first experiment gave us insight into these measures coarsely, and
          focused solely on the icons. This mouse-tracking experiment focuses on
          using the <em>labels</em> to make decisions, and the paradigm itself
          gives us data we can use to map people's decisions paths to better to
          understand how they're perceiving the labels.
        </p>
        <Divider />
        <ImageWide
          image={MouseTracking}
          alt="trash-exp1"
          style={{ maxWidth: '75%' }}
          caption={{
            text: <div>Mouse tracking</div>,
          }}
        />
        <Divider />
        <h3 style={{ fontWeight: 100, color: colors.SECONDARY }}>
          <u>objective</u>
        </h3>
        <Divider size={0.33} />
        <p>
          This experiment just finished data collection with <strong>41</strong>{' '}
          participants, but is still in the analysis stage—more to come!
        </p>
        <Divider />
        <h3 style={{ fontWeight: 100, color: colors.SECONDARY }}>
          <u>notes</u>
        </h3>
        <Divider size={0.33} />
        <p>
          I wrote this using JavaScript, HTML, and CSS using the JSPsych
          library.
        </p>
        <p>
          Links:{' '}
          <a href="https://safe-springs-58776.herokuapp.com/">experiment</a>,{' '}
          <a href="https://github.com/aaronrambhajan/mouse-tracking">code</a>.
        </p>
        {/* <ul style={{ listStyleType: 'disc', paddingLeft: 20 }}>
          <li>
            2 experiments: rapid categorization [n=64] and mouse-tracking [n=44]
          </li>
          <li>Supervised by Dr. Michael Mack</li>
          <Divider />
          <li>Methods: Rapid categorization, mouse-tracking </li>
          <li>
            Product impact: Confirmation of theory of low-level designing,
            understanding <em>why</em> this design style works better, and how
            to focus in on designing for low-level, brief exposure vision
          </li>
          <li>
            Teamwork: Collaborating with Dr. Mack to identify research goals,
            calibrating my intention to evaluate our labels and abstracting it
            into a category-learning task for the real world
          </li>
          <li>
            Synthesis & socialization of research: more reliable guarantees that
            the icons are the most effective
          </li>
        </ul> */}
        <Divider size={2} />
      </div>
    );
  };
}
