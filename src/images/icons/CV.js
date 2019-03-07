import React from 'react';

export default class CV extends React.Component {
  props: {
    size: Number,
  };
  render = () => {
    // width = 246
    return (
      <svg
        className="cv"
        style={{ marginLeft: 10, marginRight: 10 }}
        width={this.props.size}
        height={this.props.size * 1.1991869}
        viewBox="0 0 246 295"
      >
        <g
          transform="translate(-386.000000, -384.000000)"
          fill="#000"
          stroke="none"
          strokeWidth={1}
          fillRule="evenodd"
        >
          <path
            d="M545.9 408.583v61.459h61.5v184.375H410.6V408.583h135.3zM558.2 384H386v295h246V457.75L558.2 384z"
            fillRule="nonzero"
          />
          <text fontFamily="Menlo-Bold, Menlo" fontSize={120} fontWeight="bold">
            <tspan x={437} y={603}>
              CV
            </tspan>
          </text>
        </g>
      </svg>
    );
  };
}
