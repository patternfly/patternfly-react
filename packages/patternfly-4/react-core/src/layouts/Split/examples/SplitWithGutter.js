import React from 'react';
import { Split, SplitItem } from '@patternfly/react-core';
import getContainerProps from './common/getContainerProps';

class SplitWithGutter extends React.Component {
  static title = 'Split Layout With Gutter';
  static getContainerProps = getContainerProps;

  render() {
    return (
      <Split gutter="md">
        <SplitItem>Secondary content</SplitItem>
        <SplitItem isMain>Primary Content</SplitItem>
        <SplitItem>Secondary content</SplitItem>
      </Split>
    );
  }
}

export default SplitWithGutter;
