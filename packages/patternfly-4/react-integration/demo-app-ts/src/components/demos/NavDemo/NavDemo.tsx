import { Nav, NavList, NavItem, NavProps } from '@patternfly/react-core';
import React, { Component } from 'react';

const myProps: NavProps = {
  "aria-label": 'Test Nav Props'
};

export class NavDemo extends Component {
  render() {
    // Nav onToggle and onSelect should be optional
    // https://github.com/patternfly/patternfly-react/issues/1234
    return (
      <Nav aria-label={myProps["aria-label"]}>
        <NavList>
          <NavItem preventDefault={false}>Link 1</NavItem>
          <NavItem>Link 2</NavItem>
        </NavList>
      </Nav>
    );
  }
}
