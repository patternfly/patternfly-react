import React from 'react';
import { Switch } from '@patternfly/react-core';

class DisabledSwitch extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Switch id="disabled-switch-on" aria-label="Message when on" label="Message when on" isChecked isDisabled />
        <br />
        <Switch
          id="disabled-switch-off"
          aria-label="Message when on"
          label="Message when off"
          isChecked={false}
          isDisabled
        />
        <br />
        <Switch
          id="disabled-no-label-switch-on"
          aria-label="Message when on"
          isChecked
          isDisabled
        />
        <br />
        <Switch
          id="disabled-no-label-switch-off"
          aria-label="Message when on"
          isChecked={false}
          isDisabled
        />
      </React.Fragment>
    );
  }
}

export default DisabledSwitch;
