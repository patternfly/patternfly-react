import React from 'react';
import { Split, SplitItem } from '@patternfly/react-core';

class SimpleSplit extends React.Component {
  render() {
    return (
      <Split>
        <SplitItem>Secondary content</SplitItem>
        <SplitItem isMain>Primary Content</SplitItem>
        <SplitItem>Secondary content</SplitItem>
      </Split>
    );
  }
}

export default SimpleSplit;
