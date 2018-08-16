import React from 'react';
import { Radio } from '@patternfly/react-core';

class UncontrolledRadio extends React.Component {
  static title = 'Uncontrolled Radio';

  render() {
    return <Radio aria-label="uncontrolled radio example" />;
  }
}

export default UncontrolledRadio;
