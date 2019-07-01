import React, { Component } from 'react';
import { Stack, StackItem } from '@patternfly/react-core';

export class StackDemo extends Component {
  render() {
    return (
      <Stack gutter="sm">
        <StackItem>content</StackItem>
        <StackItem isFilled>pf-m-fill</StackItem>
        <StackItem>content</StackItem>
      </Stack>
    )
  }
}
