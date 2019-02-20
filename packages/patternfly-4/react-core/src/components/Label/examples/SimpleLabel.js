import React from 'react';
import { Label } from '../Label';

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
