import React from 'react';
import { Radio } from '@patternfly/react-core';

class ControlledRadio extends React.Component {
  static title = 'Controlled Radio';

  state = {
    value: '4'
  };

  handleChange = (_, event) => {
    const { value } = event.currentTarget;
    this.setState({ value });
  };

  render() {
    return (
      <React.Fragment>
        <Radio
          value="3"
          checked={this.state.value === '3'}
          name="pf-version"
          onChange={this.handleChange}
          aria-label="Controlled radio 1"
          label="Controlled radio 1"
          id="radio-1"
        />{' '}
        <Radio
          value="4"
          checked={this.state.value === '4'}
          name="pf-version"
          onChange={this.handleChange}
          aria-label="Controlled radio 2"
          label="Controlled radio 2"
          id="radio-2"
        />
      </React.Fragment>
    );
  }
}

export default ControlledRadio;
