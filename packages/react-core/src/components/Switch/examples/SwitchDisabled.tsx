import React from 'react';
import { Switch } from '@patternfly/react-core';

export const SwitchDisabled: React.FunctionComponent = () => (
  <React.Fragment>
    <Switch
      id="disabled-switch-on"
      aria-label="Message when on"
      label="Message when on"
      labelOff="Message when off"
      isChecked
      isDisabled
    />
    <br />
    <Switch
      id="disabled-switch-off"
      aria-label="Message when on"
      label="Message when on"
      labelOff="Message when off"
      isChecked={false}
      isDisabled
    />
    <br />
    <Switch id="disabled-no-label-switch-on" aria-label="Message when on" isChecked isDisabled />
    <br />
    <Switch id="disabled-no-label-switch-off" aria-label="Message when on" isChecked={false} isDisabled />
  </React.Fragment>
);
