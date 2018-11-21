import React from 'react';
import { Checkbox } from '@patternfly/react-core';

class ControlledCheckbox extends React.Component {
  state = {
    checked: false
  };

  handleChange = checked => {
    this.setState({ checked });
  };

  render() {
    return (
      <Checkbox
        label="Controlled CheckBox"
        isChecked={this.state.checked}
        onChange={this.handleChange}
        aria-label="controlled checkbox example"
        id="check-1"
      />
    );
  }
}

export default ControlledCheckbox;
