import React from 'react';
import { Radio } from '@patternfly/react-core';

class DisabledRadio extends React.Component {
  static title = 'Disabled Radio';

  render() {
    return (
      <React.Fragment>
        <Radio aria-label="disabled checked radio example" defaultChecked isDisabled />{' '}
        <Radio aria-label="disabled radio example" isDisabled />
      </React.Fragment>
    );
  }
}

export default DisabledRadio;
