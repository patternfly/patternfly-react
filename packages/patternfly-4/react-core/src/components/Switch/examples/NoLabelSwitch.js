import React from 'react';
import { Switch } from '@patternfly/react-core';

class NoLabelSwitch extends React.Component {
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
        id="no-label-switch-on"
        aria-label="Message when on"
        isChecked={isChecked}
        onChange={this.handleChange}
      />
    );
  }
}

export default NoLabelSwitch;
