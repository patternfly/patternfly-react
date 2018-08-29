import React from 'react';
import { Level, LevelItem } from '@patternfly/react-core';
import getContainerProps from './common/getContainerProps';

class SimpleLevel extends React.Component {
  static title = 'Simple Level Layout';
  static getContainerProps = getContainerProps;

  render() {
    return (
      <Level>
        <LevelItem>Level Item</LevelItem>
        <LevelItem>Level Item</LevelItem>
        <LevelItem>Level Item</LevelItem>
      </Level>
    );
  }
}

export default SimpleLevel;
