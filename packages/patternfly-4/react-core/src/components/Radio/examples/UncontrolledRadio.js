import React from 'react';
import { Radio } from '@patternfly/react-core';

class UncontrolledRadio extends React.Component {
  render() {
    return (
      <Radio label="Uncontrolled radio example" id="radio-4" name="radio-4" aria-label="uncontrolled radio example" />
    );
  }
}

export default UncontrolledRadio;
