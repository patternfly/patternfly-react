import { FunctionComponent, FormEvent, useState } from 'react';
import { Switch } from '@patternfly/react-core';

export const SwitchBasic: FunctionComponent = () => {
  const [isChecked, setIsChecked] = useState<boolean>(true);

  const handleChange = (_event: FormEvent<HTMLInputElement>, checked: boolean) => {
    setIsChecked(checked);
  };

  return (
    <Switch
      id="simple-switch"
      label="Message when on"
      labelOff="Message when off"
      isChecked={isChecked}
      onChange={handleChange}
      ouiaId="BasicSwitch"
    />
  );
};
