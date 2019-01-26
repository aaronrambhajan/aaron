import React from 'react';
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

export default class TableOfContents extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  render = () => {
    return (
      <ButtonDropdown
        size="sm"
        isOpen={this.state.dropdownOpen}
        toggle={this.toggle}
      >
        <DropdownToggle color="info" caret>
          Table of Contents
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>
            <a href="#intro">Intro</a>
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem>
            <a href="#problem">Problem</a>
          </DropdownItem>
          <DropdownItem>
            <a href="#methodology">Methodology</a>
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem>
            <a href="#field-evaluation">Field Study</a>
          </DropdownItem>
          <DropdownItem>
            <a href="#user-research">User Research</a>
          </DropdownItem>
          <DropdownItem>
            <a href="#mack-lab">Psychology Lab</a>
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem>
            <a href="#awards">Awards</a>
          </DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  };
}
