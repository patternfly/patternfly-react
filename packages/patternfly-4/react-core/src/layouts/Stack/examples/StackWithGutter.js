import React from 'react';
import { Stack, StackItem } from '../index';

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
