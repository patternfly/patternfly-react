import React from 'react';
import { Level, LevelItem } from '@patternfly/react-core';

export class LevelDemo extends React.Component {
  static displayName = 'LevelDemo';
  render() {
    return (
      <Level hasGutter>
        <LevelItem>Level Item</LevelItem>
        <LevelItem>Level Item</LevelItem>
        <LevelItem>Level Item</LevelItem>
      </Level>
    );
  }
}
