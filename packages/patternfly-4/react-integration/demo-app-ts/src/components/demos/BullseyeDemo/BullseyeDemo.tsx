import React from 'react';
import { Bullseye } from '@patternfly/react-core';

export class BullseyeDemo extends React.Component {
  render() {
    return (
      <Bullseye component="span">
        <div>Bullseye ◎ layout</div>
      </Bullseye>
    )
  }
}