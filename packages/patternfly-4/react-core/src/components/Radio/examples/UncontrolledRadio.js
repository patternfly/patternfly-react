import React from 'react';
import { Radio } from '@patternfly/react-core';

class UncontrolledRadio extends React.Component {
  static title = 'Uncontrolled Radio';

  render() {
    return (
      <Radio label="Uncontrolled radio example" id="radio-4" name="radio-4" aria-label="uncontrolled radio example" />
    );
  }
}

export default UncontrolledRadio;
