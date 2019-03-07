import React from 'react';
import { ArticleContainer } from './util';

import Design from './Design';
import Field from './Field';
import Methodology from './Methodology';
import UserResearch from './UserResearch';
import PsychLab from './PsychLab';
import Awards from './Awards';
import Intro from './Intro';

export default class ProjectIndex extends React.Component {
  render = () => {
    return (
      <ArticleContainer>
        <Intro />
        <hr />
        <Methodology />
        <hr />
        <Field />
        <PsychLab />
        <UserResearch />
        <Awards />
      </ArticleContainer>
    );
  };
}
