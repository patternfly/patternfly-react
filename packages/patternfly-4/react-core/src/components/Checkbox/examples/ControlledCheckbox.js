import React from 'react';
import { Checkbox } from '@patternfly/react-core';

class ControlledCheckbox extends React.Component {
  state = {
    check1: false,
    check2: false
  };

  handleChange = checked => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <React.Fragment>
        <Checkbox
          label="Controlled CheckBox"
          isChecked={this.state.check1}
          onChange={this.handleChange}
          aria-label="controlled checkbox example"
          id="check-1"
        />
        <Checkbox
          label="Controlled CheckBox"
          isChecked={this.state.check2}
          onChange={this.handleChange}
          aria-label="controlled checkbox example"
          id="check-2"
        />
      </React.Fragment>
    );
  }
}

export default ControlledCheckbox;
