import React from 'react';
import { Radio } from '../index';

class DisabledRadio extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Radio label="Disabled checked radio example" defaultChecked isDisabled name="group-1" id="radio-disabled" />{' '}
        <Radio id="radio-disabled-2" label="Disabled radio example" isDisabled name="group-2" />
      </React.Fragment>
    );
  }
}

export default DisabledRadio;
