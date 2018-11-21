import React from 'react';
import { Level, LevelItem } from '@patternfly/react-core';

class SimpleLevel extends React.Component {
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
