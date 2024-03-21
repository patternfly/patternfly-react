import { FunctionComponent, FormEvent, useState } from 'react';
import { Switch } from '@patternfly/react-core';

export const SwitchReversed: FunctionComponent = () => {
  const [isChecked, setIsChecked] = useState<boolean>(true);

  const handleChange = (_event: FormEvent<HTMLInputElement>, checked: boolean) => {
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
