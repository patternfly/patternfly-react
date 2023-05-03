import React from 'react';
import { Switch } from '@patternfly/react-core';

export const SwitchWithoutLabel: React.FunctionComponent = () => {
  const [isChecked, setIsChecked] = React.useState<boolean>(true);

  const handleChange = (_event: React.FormEvent<HTMLInputElement>, checked: boolean) => {
    setIsChecked(checked);
  };

  return <Switch id="no-label-switch-on" aria-label="Message when on" isChecked={isChecked} onChange={handleChange} />;
};
