import { FunctionComponent, FormEvent, useState } from 'react';
import { Switch } from '@patternfly/react-core';

export const SwitchCheckedWithLabel: FunctionComponent = () => {
  const [isChecked, setIsChecked] = useState<boolean>(true);

  const handleChange = (_event: FormEvent<HTMLInputElement>, checked: boolean) => {
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
