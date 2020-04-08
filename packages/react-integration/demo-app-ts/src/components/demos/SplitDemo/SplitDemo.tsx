import React from 'react';
import { Split, SplitItem } from '@patternfly/react-core';

export class SplitDemo extends React.Component {
  render() {
    return (
      <Split hasGutter component="article">
        <SplitItem>content</SplitItem>
        <SplitItem isFilled>pf-m-fill</SplitItem>
        <SplitItem>content</SplitItem>
      </Split>
    );
  }
}
