import React from 'react';
import { Bullseye } from '@patternfly/react-core';

export class BullseyeDemo extends React.Component {
  render() {
    return (
      <Bullseye>
        <div>Bullseye ◎ layout</div>
      </Bullseye>
    )
  }
}