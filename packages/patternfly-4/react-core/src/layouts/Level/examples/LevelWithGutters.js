import React from 'react';
import { Level, LevelItem } from '@patternfly/react-core';
import getContainerProps from './common/getContainerProps';

class LevelWithGutters extends React.Component {
  static title = 'Level With Gutters';
  static getContainerProps = getContainerProps;

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
