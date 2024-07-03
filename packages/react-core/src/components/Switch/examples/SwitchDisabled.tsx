import React from 'react';
import { Switch } from '@patternfly/react-core';

export const SwitchDisabled: React.FunctionComponent = () => (
  <React.Fragment>
    <Switch id="disabled-switch-on" label="Togglable option for disabled checked example" isChecked isDisabled />
    <br />
    <Switch
      id="disabled-switch-off"
      label="Togglable option for disabled unchecked example"
      isChecked={false}
      isDisabled
    />
    <br />
    <Switch
      id="disabled-no-label-switch-on"
      aria-label="Togglable option for checked with no visible label example"
      isChecked
      isDisabled
    />
    <br />
    <Switch
      id="disabled-no-label-switch-off"
      aria-label="Togglable option for unchecked with no visible label example"
      isChecked={false}
      isDisabled
    />
  </React.Fragment>
);
