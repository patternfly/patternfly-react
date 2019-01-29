import React from 'react';
import { Checkbox } from '@patternfly/react-core';

class DisabledCheckbox extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Checkbox
          id="check-5"
          label="Disabled CheckBox"
          aria-label="disabled checked checkbox example"
          defaultChecked
          isDisabled
        />{' '}
        <Checkbox id="check-6" label="Disabled CheckBox" aria-label="disabled checkbox example" isDisabled />
      </React.Fragment>
    );
  }
}

export default DisabledCheckbox;
