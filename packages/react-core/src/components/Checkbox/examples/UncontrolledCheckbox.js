import React from 'react';
import { Checkbox } from '@patternfly/react-core';

class UncontrolledCheckbox extends React.Component {
  static title = 'Uncontrolled Checkbox';
  render() {
    return <Checkbox aria-label="uncontrolled checkbox example" />;
  }
}

export default UncontrolledCheckbox;
