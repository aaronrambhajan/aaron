// @flow

import React from 'react';
import { colors, changeOpacity } from '../colors';

const styles = {
  table: {
    fontSize: '75%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    flex: 3,
    fontWeight: 600,
    paddingLeft: 10,
    // textAlign: 'center',
  },
  description: {
    flex: 6,
    fontSize: '75%',
  },
  arrow: {
    flex: 1,
    textAlign: 'center',
    fontSize: '150%',
    fontWeight: 600,
    fontFamily:
      'BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, sans-serif, -apple-system',
  },
  link: {
    color: '#2d89ef',
    textDecoration: 'none',
  },
};

export default class Example extends React.Component {
  props: {
    info: Array<Object>,
  };

  render = () => {
    return (
      <div style={{ color: changeOpacity(colors.SECONDARY, '0.75') }}>
        {this.props.info.map((rsc, n) => {
          return (
            <div
              style={{
                ...styles.table,
                backgroundColor:
                  (n + 1) % 2 == 1
                    ? changeOpacity(colors.SECONDARY, '0.1')
                    : '',
              }}
              className="notes-table"
            >
              <div className="cell" style={styles.title}>
                {rsc.title}
              </div>
              <div className="cell" style={styles.description}>
                {rsc.description}
              </div>
              <div className="cell" style={styles.arrow}>
                <a href={rsc.link} style={styles.link}>
                  ↗
                </a>
              </div>
            </div>
          );
        })}
      </div>
    );
  };
}
