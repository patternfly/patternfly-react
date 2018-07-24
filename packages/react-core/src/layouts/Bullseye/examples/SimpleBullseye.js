import React from 'react';
import { Bullseye } from '@patternfly/react-core';
import getContainerProps from './common/getContainerProps';

class SimpleBullseye extends React.Component {
  static title = 'Simple Bullseye Layout';
  static getContainerProps = getContainerProps;

  render() {
    return (
      <Bullseye>
        <div>centered</div>
      </Bullseye>
    );
  }
}

export default SimpleBullseye;
