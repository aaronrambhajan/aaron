// @flow

import React from 'react';

const styles = {
  itemContainer: {
    maxWidth: '25%',
    fontSize: '0.7em',
    padding: 5,
  },
  title: {
    fontFamily: 'times',
    marginBottom: 2,
  },
};

export default class ProjectInfo extends React.Component {
  props: {
    role: string,
    timeline: string,
    team: string,
    tools: string,
  };

  render = () => {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          margin: 0,
        }}
      >
        <div style={styles.itemContainer}>
          <p style={styles.title}>Role</p>
          <p>{this.props.role}</p>
        </div>

        <div style={styles.itemContainer}>
          <p style={styles.title}>Timeline</p>
          <p>{this.props.timeline}</p>
        </div>

        <div style={styles.itemContainer}>
          <p style={styles.title}>Team</p>
          <p>{this.props.team}</p>
        </div>

        <div style={styles.itemContainer}>
          <p style={styles.title}>Tools</p>
          <p>{this.props.tools}</p>
        </div>
      </div>
    );
  };
}
