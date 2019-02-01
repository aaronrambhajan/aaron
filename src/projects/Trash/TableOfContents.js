import React from 'react';
import Divider from '../../components/Divider';
import { colors } from '../../colors';

export default class TableOfContents extends React.Component {
  render = () => {
    return (
      <div>
        <h2
          style={{
            fontWeight: 100,
            color: colors.PROJECT_2,
            fontSize: '150%',
            margin: 0,
          }}
        >
          table of contents
        </h2>
        <Divider size={0.33} />
        <ul style={{ margin: 0, listStyleType: 'disc', paddingLeft: 30 }}>
          <li>
            <a href="#problem">problem</a>
          </li>
          <li>
            <a href="#methodology">research methodology</a>
          </li>
          <li>
            <a href="#field-evaluation">field study</a>
          </li>
          <li>
            <a href="#user-research">user research</a>
          </li>
          <li>
            <a href="#mack-lab">psychology lab</a>
          </li>
          <li>
            <a href="#awards">awards</a>
          </li>
        </ul>
      </div>
    );
  };
}
