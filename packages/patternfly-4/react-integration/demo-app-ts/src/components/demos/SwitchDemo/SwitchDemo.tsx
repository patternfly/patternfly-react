import React from 'react';
import { Switch } from '@patternfly/react-core';

interface SwitchState {
  isChecked: boolean
};
export class SwitchDemo extends React.Component<{}, SwitchState> {
  state = {
    isChecked: true
  };

  handleChange = isChecked => {
    this.setState({ isChecked });
  };


  render() {
    const { isChecked } = this.state;
    return (
      <React.Fragment>
        <Switch
          id="simple-switch"
          label={isChecked ? 'Message when on' : 'Message when off'}
          onChange={this.handleChange}
          aria-label="Switch"
          isChecked={isChecked}
        /> 
        <br />
        <Switch id="disabled-switch-off" aria-label="disabled switch" label="Message when on" isChecked={false} isDisabled />
      </React.Fragment>
    );
  }
}