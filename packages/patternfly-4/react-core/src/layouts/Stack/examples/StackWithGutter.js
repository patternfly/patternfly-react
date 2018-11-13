import React from 'react';
import { Stack, StackItem } from '@patternfly/react-core';

class StackWithGutter extends React.Component {
  render() {
    return (
      <Stack gutter="md">
        <StackItem>Secondary content</StackItem>
        <StackItem isMain>Primary Content</StackItem>
        <StackItem>Secondary content</StackItem>
      </Stack>
    );
  }
}

export default StackWithGutter;
