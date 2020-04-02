import React, { Component } from 'react';
import { Badge, Stack, StackItem } from '@patternfly/react-core';

export class StackDemo extends Component {
  render() {
    return (
      <React.Fragment>
        <Badge>3</Badge>
        <Badge isRead>13</Badge>
        <Stack component="article" hasGutter>
          <StackItem>content</StackItem>
          <StackItem isFilled>pf-m-fill</StackItem>
          <StackItem>content</StackItem>
        </Stack>
      </React.Fragment>
    );
  }
}
