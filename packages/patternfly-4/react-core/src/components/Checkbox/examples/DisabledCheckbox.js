import React from 'react';
import { Checkbox } from '@patternfly/react-core';

class DisabledCheckbox extends React.Component {
  static title = 'Disabled Checkbox';
  render() {
    return (
      <React.Fragment>
        <Checkbox
          id="check-3"
          label="Disabled CheckBox"
          aria-label="disabled checked checkbox example"
          defaultChecked
          isDisabled
        />{' '}
        <Checkbox id="check-4" label="Disabled CheckBox" aria-label="disabled checkbox example" isDisabled />
      </React.Fragment>
    );
  }
}

export default DisabledCheckbox;
