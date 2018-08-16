import React from 'react';
import { Stack, StackItem } from '@patternfly/react-core';
import getContainerProps from './common/getContainerProps';

class StackWithGutter extends React.Component {
  static title = 'Stack Layout With Gutter';
  static getContainerProps = getContainerProps;

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
