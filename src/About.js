import React from 'react';

export default class About extends React.Component {
  render = () => {
    return (
      <div>
        {' '}
        <p>
          I am currently a researcher and developer at the{' '}
          <a href="http://macklab.utoronto.ca/" target="_blank">
            Mack Lab
          </a>
          , a computational neuroscience lab at the University of Toronto. You
          can check out what I'm working on{' '}
          <a href="http://russellgoldenberg.github.io/">here</a>.
        </p>
        <p>
          I co-founded a UN-funded non-profit called{' '}
          <a target="_blank" href="http://quan.world">
            Quan
          </a>{' '}
          that redesigned garbage sorting, placed 2nd in a design challenge out
          of 2,000 teams, and most recently finished a Software Engineering
          Internship with{' '}
          <a target="_blank" href="https://dropmobility.com">
            Drop
          </a>
          , a Toronto-based micromobility startup.
        </p>
        <p>
          I previously worked at the{' '}
          <a
            target="_blank"
            href="http://www.fs.utoronto.ca/SustainabilityOffice/"
          >
            Sustainability Office
          </a>{' '}
          at the University of Toronto as a UX Research Consultant, and before
          that I started up a hardware interface company,{' '}
          <a
            target="_blank"
            href="http://www.fs.utoronto.ca/SustainabilityOffice/"
          >
            #Tagface
          </a>{' '}
          to empower grocery stores to manage their inventory sustainably.
        </p>
        <p />
      </div>
    );
  };
}
