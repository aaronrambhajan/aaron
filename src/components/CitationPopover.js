// @flow

import React from 'react';
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';

export default class CitationPopover extends React.Component {
  props: {
    placement: string,
    isOpen: boolean,
    target: string,
    toggle: Function,
    content: Array,
  };

  render = () => {
    return (
      <Popover
        placement={this.props.placement}
        isOpen={this.props.isOpen}
        target={this.props.target}
        toggle={this.props.toggle}
      >
        {/* <PopoverHeader>Popover Title</PopoverHeader> */}
        <PopoverBody>
          {this.props.content.map((src, index) => {
            return createCitation(index + 1, src.bio, src.title);
          })}
        </PopoverBody>
      </Popover>
    );
  };
}

function createCitation(num, bio, title) {
  return (
    <p class="citation-popover">
      <sup>{num}</sup> {bio} <em>{title}</em>
    </p>
  );
}
