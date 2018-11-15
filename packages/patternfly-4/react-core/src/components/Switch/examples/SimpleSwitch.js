import React from 'react';
import { Switch } from '@patternfly/react-core';

class SimpleSwitch extends React.Component {
  state = {
    isChecked: true
  };

  handleChange = isChecked => {
    this.setState({ isChecked });
  };

  render() {
    const { isChecked } = this.state;
    return (
      <Switch
        id="simple-switch"
        label={isChecked ? 'On' : 'Off'}
        isChecked={isChecked}
        onChange={this.handleChange}
        aria-label="simple Switch example"
      />
    );
  }
}

export default SimpleSwitch;
