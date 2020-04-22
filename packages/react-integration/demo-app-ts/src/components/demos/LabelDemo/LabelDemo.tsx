import { Label } from '@patternfly/react-core';
import React, { Component } from 'react';

export class LabelDemo extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <React.Fragment>
        <Label>Default label</Label>
        <Label>Compact label</Label>
      </React.Fragment>
    );
  }
}

export default LabelDemo;
