// @flow

import React from 'react';
import styled from 'styled-components';
import { changeOpacity, colors } from '../colors';

const styles = {
  itemContainer: {
    padding: 5,
  },
  title: {
    marginBottom: 2,
  },
  caption: {
    fontFamily: 'helvetica',
    opacity: 0.6,
  },
};

export default class ProjectInfo extends React.Component {
  props: {
    roles: string,
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
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            margin: 0,
            backgroundColor: changeOpacity(colors.SECONDARY, '0.7'),
            color: 'white',
            borderLeft: '20px solid',
            borderColor: colors.SECONDARY,
            padding: 10,
            paddingRight: 0,
            width: '50%',
            height: 350,
          }}
        >
          <div style={styles.itemContainer}>
            <p style={styles.title}>Role</p>
            <p style={styles.caption}>
              <ul>
                {this.props.roles.map((role) => {
                  return <li>{role}</li>;
                })}
              </ul>
            </p>
          </div>
          <div style={styles.itemContainer}>
            <p style={styles.title}>Methods</p>
            <p style={styles.caption}>
              <ul>
                {this.props.methods.map((method) => {
                  return <li>{method}</li>;
                })}
              </ul>
            </p>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            margin: 0,
            backgroundColor: changeOpacity(colors.SECONDARY, '0.7'),
            color: 'white',
            borderColor: colors.SECONDARY,
            padding: 10,
            paddingRight: 0,
            width: '50%',
            height: 350,
          }}
        >
          <div style={styles.itemContainer}>
            <p style={styles.title}>Collaborators</p>
            <p style={styles.caption}>
              <ul>
                {this.props.team.map((teamMember) => {
                  return <li>{teamMember}</li>;
                })}
              </ul>
            </p>
          </div>

          <div style={styles.itemContainer}>
            <p style={styles.title}>Timeline</p>
            <p style={styles.caption}>{this.props.timeline}</p>
          </div>
        </div>
      </div>
    );
  };
}
