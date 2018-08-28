import React from 'react';
import { Checkbox } from '@patternfly/react-core';

class DisabledCheckbox extends React.Component {
  static title = 'Disabled Checkbox';
  render() {
    return (
      <React.Fragment>
        <Checkbox aria-label="disabled checked checkbox example" defaultChecked isDisabled />{' '}
        <Checkbox aria-label="disabled checkbox example" isDisabled />
      </React.Fragment>
    );
  }
}

export default DisabledCheckbox;
