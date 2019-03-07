import React from 'react';
import styled from 'styled-components';
import { colors, changeOpacity } from '../../colors';
import images from '../../images/images';

import {
  SectionContainer,
  SectionTitleContainer,
  Prose,
  SectionHeader,
  Subheading,
  ImageRow,
  CenteredImage,
} from './util';
import ProjectInfo from '../../components/ProjectInfo';
import ImageWide from '../../components/ImageWide';
import NotesTable from '../../components/NotesTable';
import Header from '../../components/Header';

export default class TrashPsychLab extends React.Component {
  render = () => {
    return (
      <SectionContainer>
        <SectionTitleContainer>
          <SectionHeader
            title="Psych Lab"
            description="Design & decision-making"
          />
        </SectionTitleContainer>
        {/* <ProjectInfo
          roles={['Experimental Design', 'Programming', 'Data Analysis']}
          timeline="Aug. 2017 - Dec. 2018"
          team={['Dr. Michael Mack']}
          methods={[
            'Rapid Categorization (cognitive)',
            'Mouse-tracking (attentional)',
          ]}
        /> */}

        <Subheading>[E1, Rapid Categorization] Objective</Subheading>

        <Prose>
          I hypothesized that people would be more accurate and have faster
          response times with the new labels. The new icons were designed with
          human vision processing in mind, so in theory, they should better map
          onto (1) our cognitive models of the items, and (2) our visual
          perception of objects. Ultimately, I hoped to answer:{' '}
          <strong>can we help people make better decisions in less time</strong>
          ?
        </Prose>
        <CenteredImage
          image={images.trash.psych_rc_gif}
          alt="rapid-categorization"
          style={{ maxWidth: '75%' }}
        />
        <Subheading>[E1] Experimental Design</Subheading>

        <Prose>
          I modified{' '}
          <a href="https://www.ncbi.nlm.nih.gov/pubmed/25938178">
            rapid categorization
          </a>
          , a paradigm where people are shown an image of an item for 1000ms,
          then exposed to either an <em>old</em> or <em>new</em> icon for 25,
          33, 50, 75, 125, or 250ms, followed by a mask. They're given a 2000ms
          to <strong>indicate whether the item and icon match</strong>.
        </Prose>
        <Subheading>[E1] Analysis</Subheading>

        <Prose>
          As it turns out,{' '}
          <span>
            we actually <em>can</em> help people make{' '}
            <strong>better decisions in less time</strong>
          </span>
          ! <em>D'</em> (d-prime),borrowed from signal detection theory,
          measures response sensitivity—a.k.a. accuracy. The D' of the{' '}
          <strong>new labels is consistently higher</strong>, especially at 25ms
          and 250ms, where the <em>least</em> and <em>most</em> visual
          information is given. This is critical, especially in light of the{' '}
          user research findings which suggest people look at the labels for
          very brief times.
        </Prose>

        <ImageRow>
          <CenteredImage
            image={images.trash.psych_rc_results1}
            alt="exp1-results1"
            style={{ maxWidth: '90%' }}
          />
          <CenteredImage
            image={images.trash.psych_rc_results2}
            alt="exp1-results2"
            style={{ maxWidth: '90%' }}
          />
        </ImageRow>

        <Prose>
          Ultimately, this research has been crucial to proving our design
          methodology. Being able to test these labels through an exhaustive
          cognitive paradigm introduces rigor that is rarely held by
          design—rigor that is essential for building a open-source standard of
          any kind.
        </Prose>

        <Subheading>[E1] Materials</Subheading>

        <NotesTable
          info={[
            {
              title: 'Code',
              description:
                'This experiment was writen in MATLAB using the Psychtoolbox package. I designed the trials using Python, and conducted analysis in R.',
              link: 'https://github.com/macklab/trash/tree/master/experiment',
            },
            {
              title: 'Experimental design',
              description:
                'All notes and hypotheses regarding my design of this experiment.',
              link:
                'https://www.dropbox.com/s/qzgze7tzdd2rny4/Experimental%20Design%20Trash-Lab.pdf?dl=0',
            },
          ]}
        />

        <Subheading>[E2, Mouse-Tracking] Objective</Subheading>
        <Prose>
          The objective of the second study was to further the first—how do the
          label designs impact the accuracy and speed of people's decisions? The
          first experiment gave us coarse insights, focusing solely on the
          icons. This experiment focuses on using the <em>labels</em> to make
          decisions, and the paradigm itself gives us data we can use to{' '}
          <strong>
            map people's decisions paths to better to understand how they're
            using the labels
          </strong>
          .
        </Prose>

        <CenteredImage
          image={images.trash.psych_mt_gif}
          alt="trash-exp1"
          style={{ maxWidth: '75%' }}
        />
        <Subheading>[E2] Experimental Design</Subheading>

        <Prose>
          Users would be shown an item image. Once they click the image and drag
          it out, the labels appear. They are then to drag the item to the label
          they think it belongs to.
        </Prose>

        <Subheading>[E2] Analysis</Subheading>

        <Prose>
          This experiment just finished data collection with{' '}
          <strong>41 participants</strong>, but is still in the analysis
          stage—more to come!
        </Prose>

        <Subheading>[E2] Materials</Subheading>

        <NotesTable
          info={[
            {
              title: 'Experiment',
              description:
                'Run the second experiment yourself and see what you think!',
              link: 'https://safe-springs-58776.herokuapp.com/',
            },
            {
              title: 'Code',
              description:
                'Repository containing all code, using Javascript, HTML, CSS, and the JSPsych library.',
              link: 'https://github.com/aaronrambhajan/mouse-tracking',
            },
          ]}
        />
      </SectionContainer>
    );
  };
}
