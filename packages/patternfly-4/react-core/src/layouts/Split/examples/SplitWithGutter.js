import React from 'react';
import { Split, SplitItem } from '@patternfly/react-core';

class SplitWithGutter extends React.Component {
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
