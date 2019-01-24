// @flow

import React from 'react';

const styles = {
  itemContainer: {
    maxWidth: '25%',
    fontSize: '0.7em',
    padding: 5,
  },
  title: {
    marginBottom: 2,
  },
  caption: {
    fontFamily: 'helvetica',
  },
};

export default class ProjectInfo extends React.Component {
  props: {
    role: string,
    timeline: string,
    team: string,
    methods: string,
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
          opacity: 0.7,
        }}
      >
        <div style={styles.itemContainer}>
          <p style={styles.title}>Role</p>
          <p style={styles.caption}>{this.props.role}</p>
        </div>
        <div style={styles.itemContainer}>
          <p style={styles.title}>Methods</p>
          <p style={styles.caption}>{this.props.methods}</p>
        </div>

        <div style={styles.itemContainer}>
          <p style={styles.title}>Team</p>
          <p style={styles.caption}>{this.props.team}</p>
        </div>

        <div style={styles.itemContainer}>
          <p style={styles.title}>Timeline</p>
          <p style={styles.caption}>{this.props.timeline}</p>
        </div>
      </div>
    );
  };
}
