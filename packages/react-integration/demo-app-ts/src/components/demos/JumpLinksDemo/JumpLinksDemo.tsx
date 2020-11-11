import { JumpLinks, JumpLinksItem } from '@patternfly/react-core';
import React, { Component } from 'react';

export class JumpLinksDemo extends Component {
  render() {
    return (
      <JumpLinks>
        <JumpLinksItem>Inactive section</JumpLinksItem>
        <JumpLinksItem isActive>Active section</JumpLinksItem>
        <JumpLinksItem>Inactive section</JumpLinksItem>
      </JumpLinks>
    );
  }
}
