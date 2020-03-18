import React from 'react';
import { Switch, SwitchProps } from '@patternfly/react-core';

interface SwitchState {
  isChecked: boolean;
}
export class OuiaDemo extends React.Component<SwitchProps, SwitchState> {
  constructor(props: SwitchProps) {
    super(props);
    this.state = {
      isChecked: true
    };
  }
  handleChange = (isChecked: boolean) => {
    this.setState({
      isChecked
    });
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
          ouiaId="first_switch"
        />
        <br />
        <Switch
          id="disabled-switch-off"
          aria-label="disabled switch"
          label="Message when on"
          isChecked={false}
          isDisabled
        />
      </React.Fragment>
    );
  }
}
