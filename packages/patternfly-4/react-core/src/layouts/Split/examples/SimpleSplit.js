import React from 'react';
import { Split, SplitItem } from '@patternfly/react-core';
import getContainerProps from './common/getContainerProps';

class SimpleSplit extends React.Component {
  static title = 'Simple Split Layout';
  static getContainerProps = getContainerProps;

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
