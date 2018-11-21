import React from 'react';
import { Label } from '@patternfly/react-core';

class SimpleLabel extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Label>Default Label</Label> <Label isCompact>Compact Label</Label>
      </React.Fragment>
    );
  }
}

export default SimpleLabel;
