import React from 'react';
import { Checkbox } from '@patternfly/react-core';

class UncontrolledCheckbox extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Checkbox label="Uncontrolled CheckBox" aria-label="uncontrolled checkbox example" id="check-3" />
        <Checkbox label="Uncontrolled CheckBox" aria-label="uncontrolled checkbox example" id="check-4" />
      </React.Fragment>
    );
  }
}

export default UncontrolledCheckbox;
