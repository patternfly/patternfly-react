import React from 'react';
import { Switch } from '@patternfly/react-core';

export const SwitchCheckedWithLabel: React.FunctionComponent = () => {
  const [isChecked, setIsChecked] = React.useState<boolean>(true);

  const handleChange = (checked: boolean, _event: React.FormEvent<HTMLInputElement>) => {
    setIsChecked(checked);
  };

  return (
    <Switch
      label="Message when on"
      labelOff="Message when off"
      id="checked-with-label-switch-on"
      aria-label="Message when on"
      isChecked={isChecked}
      hasCheckIcon
      onChange={handleChange}
    />
  );
};
