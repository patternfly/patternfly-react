import React from 'react';
import { Label } from '@patternfly/react-core';

class CompactLabel extends React.Component {
  static title = 'Compact Label';

  render() {
    return <Label variant="compact">Compact Label</Label>;
  }
}

export default CompactLabel;
