import { Nav, NavList, NavItem, NavProps } from '@patternfly/react-core';
import React, { Component } from 'react';

class myProps implements NavProps {
  'aria-label': string = 'Test Nav Props';
}

export class NavDemo extends Component {
  render() {
    // Nav onToggle and onSelect should be optional
    // https://github.com/patternfly/patternfly-react/issues/1234
    return (
      <Nav aria-label={new myProps()['aria-label']}>
        <NavList>
          <NavItem preventDefault={false}>Link 1</NavItem>
          <NavItem>Link 2</NavItem>
        </NavList>
      </Nav>
    );
  }
}
