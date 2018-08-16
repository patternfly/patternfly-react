import React from 'react';
import { Checkbox } from '@patternfly/react-core';

class ControlledCheckbox extends React.Component {
  static title = 'Controlled Checkbox';

  state = {
    checked: false
  };

  handleChange = checked => {
    this.setState({ checked });
  };

  render() {
    return (
      <Checkbox checked={this.state.checked} onChange={this.handleChange} aria-label="controlled checkbox example" />
    );
  }
}

export default ControlledCheckbox;
