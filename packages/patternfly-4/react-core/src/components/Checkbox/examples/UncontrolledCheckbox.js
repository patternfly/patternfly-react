import React from 'react';
import { Checkbox } from '@patternfly/react-core';

class UncontrolledCheckbox extends React.Component {
  static title = 'Uncontrolled Checkbox';
  render() {
    return <Checkbox label="Uncontrolled CheckBox" aria-label="uncontrolled checkbox example" id="check-2" />;
  }
}

export default UncontrolledCheckbox;
