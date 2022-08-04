import React from 'react';
import { Switch } from '@patternfly/react-core';

export const SwitchWithoutLabel: React.FunctionComponent = () => {
  const [isChecked, setIsChecked] = React.useState<boolean>(true);

  const handleChange = (checked: boolean, _event: React.FormEvent<HTMLInputElement>) => {
    setIsChecked(checked);
  };

  return <Switch id="no-label-switch-on" aria-label="Message when on" isChecked={isChecked} onChange={handleChange} />;
};
