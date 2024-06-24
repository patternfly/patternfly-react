import React from 'react';
import { Switch } from '@patternfly/react-core';

export const SwitchCheckedWithLabel: React.FunctionComponent = () => {
  const [isChecked, setIsChecked] = React.useState<boolean>(true);

  const handleChange = (_event: React.FormEvent<HTMLInputElement>, checked: boolean) => {
    setIsChecked(checked);
  };

  return (
    <Switch
      label="Togglable option for check icon example"
      id="checked-with-label-switch-on"
      isChecked={isChecked}
      hasCheckIcon
      onChange={handleChange}
    />
  );
};
