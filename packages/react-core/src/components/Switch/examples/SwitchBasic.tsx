import React from 'react';
import { Switch } from '@patternfly/react-core';

export const SwitchBasic: React.FunctionComponent = () => {
  const [isChecked, setIsChecked] = React.useState<boolean>(true);

  const handleChange = (_event: React.FormEvent<HTMLInputElement>, checked: boolean) => {
    setIsChecked(checked);
  };

  return (
    <Switch
      id="simple-switch"
      label="Togglable option for basic example"
      isChecked={isChecked}
      onChange={handleChange}
      ouiaId="BasicSwitch"
    />
  );
};
