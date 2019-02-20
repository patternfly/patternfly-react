import React from 'react';
import { Radio } from '../index';

class UncontrolledRadio extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Radio label="Uncontrolled radio example" id="radio-4" name="radio-4" />
        <Radio label="Uncontrolled radio example" id="radio-5" name="radio-4" />
      </React.Fragment>
    );
  }
}

export default UncontrolledRadio;
