import React from 'react';
import { Switch } from '@patternfly/react-core';

export const SwitchReversed: React.FunctionComponent = () => {
  const [isChecked, setIsChecked] = React.useState<boolean>(true);

  const handleChange = (_event: React.FormEvent<HTMLInputElement>, checked: boolean) => {
    setIsChecked(checked);
  };

  return (
    <Switch
      id="reversed-switch"
      label="Togglable option for reversed example"
      isChecked={isChecked}
      onChange={handleChange}
      isReversed
    />
  );
};
