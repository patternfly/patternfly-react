import React from 'react';
import { Radio } from '@patternfly/react-core';

class DisabledRadio extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Radio
          label="Disabled checked radio example"
          aria-label="disabled checked radio example"
          defaultChecked
          isDisabled
          name="group-2"
          id="radio-disabled"
        />{' '}
        <Radio
          id="radio-disabled-2"
          label="Disabled radio example"
          aria-label="disabled radio example"
          isDisabled
          name="group-2"
        />
      </React.Fragment>
    );
  }
}

export default DisabledRadio;
