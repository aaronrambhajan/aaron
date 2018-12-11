import React from 'react';

export default class Email extends React.Component {
  props: {
    size: Number,
  };
  render = () => {
    return (
      <svg
        width={this.props.size}
        height={this.props.size}
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Page-1" fill="none" fillRule="evenodd">
          <g id="Logos" transform="translate(-1579 -521)">
            <g id="Group" transform="translate(-9 1)">
              <g id="Trello-Logo" transform="translate(468)">
                <g
                  id="Trello-Mark---Blue---Flat"
                  transform="translate(1020 420)"
                >
                  <g id="Mark" transform="translate(100 100)">
                    <rect
                      id="Board"
                      fill="#0079BF"
                      width="200"
                      height="200"
                      rx="25"
                    />
                    <rect
                      id="Right-List"
                      fill="#FFF"
                      x="113"
                      y="26"
                      width="61"
                      height="87.5"
                      rx="12"
                    />
                    <rect
                      id="Left-List"
                      fill="#FFF"
                      x="26"
                      y="26"
                      width="61"
                      height="137.5"
                      rx="12"
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    );
  };
}
