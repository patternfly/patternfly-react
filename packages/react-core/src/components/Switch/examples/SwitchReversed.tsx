import React from 'react';
import { Switch } from '@patternfly/react-core';

export const SwitchReversed: React.FunctionComponent = () => {
  const [isChecked, setIsChecked] = React.useState<boolean>(true);

  const handleChange = (checked: boolean, _event: React.FormEvent<HTMLInputElement>) => {
    setIsChecked(checked);
  };

  return (
    <Switch
      id="reversed-switch"
      label="Message when on"
      labelOff="Message when off"
      isChecked={isChecked}
      onChange={handleChange}
      isReversed
    />
  );
};
