import React from 'react';
import { Stack, StackItem } from '@patternfly/react-core';
import getContainerProps from './common/getContainerProps';

class SimpleStack extends React.Component {
  static title = 'Simple Stack Layout';
  static getContainerProps = getContainerProps;

  render() {
    return (
      <Stack>
        <StackItem>Secondary content</StackItem>
        <StackItem isMain>Primary Content</StackItem>
        <StackItem>Secondary content</StackItem>
      </Stack>
    );
  }
}

export default SimpleStack;
