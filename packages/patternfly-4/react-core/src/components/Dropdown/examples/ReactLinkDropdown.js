import React, { Component } from 'react';

export default class ReactLinkDropdown extends Component {
  render() {
    return (
      <pre>
        {`
  /** Wrapped Link for DropdownItem list **/
  <DropdownItem key="link">
    <Link to={'/'}>Link</Link>
  </DropdownItem>

  /** Direct child of Dropdown **/
  <Dropdown
    onSelect={this.onSelect}
    toggle={
      <DropdownToggle onToggle={this.onToggle}>
        Expanded Dropdown
      </DropdownToggle>
    }
    isOpen={isOpen}
  >
    <Link to={'/'}>Link</Link>
  </Dropdown>
        `}
      </pre>
    );
  }
}
