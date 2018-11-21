import React from 'react';
import { Level, LevelItem } from '@patternfly/react-core';

class LevelWithGutters extends React.Component {
  render() {
    return (
      <Level gutter="md">
        <LevelItem>Level Item</LevelItem>
        <LevelItem>Level Item</LevelItem>
        <LevelItem>Level Item</LevelItem>
      </Level>
    );
  }
}

export default LevelWithGutters;
