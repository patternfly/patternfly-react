import React from 'react';
import { Slider, SliderOnChangeEvent, Button, Content } from '@patternfly/react-core';
import MinusIcon from '@patternfly/react-icons/dist/esm/icons/minus-icon';
import PlusIcon from '@patternfly/react-icons/dist/esm/icons/plus-icon';
import LockIcon from '@patternfly/react-icons/dist/esm/icons/lock-icon';
import LockOpenIcon from '@patternfly/react-icons/dist/esm/icons/lock-open-icon';

export const SliderActions: React.FunctionComponent = () => {
  const [value1, setValue1] = React.useState(50);
  const [value2, setValue2] = React.useState(50);
  const [inputValue, setInputValue] = React.useState(50);
  const [isDisabled, setIsDisabled] = React.useState(false);

  const onChange1 = (_event: SliderOnChangeEvent, value: number) => {
    setValue1(Math.floor(Number(value)));
  };

  const onChange2 = (
    _event: SliderOnChangeEvent,
    value: number,
    inputValue: number,
    setLocalInputValue: React.Dispatch<React.SetStateAction<number>>
  ) => {
    let newValue;
    if (inputValue === undefined) {
      newValue = Math.floor(Number(value));
    } else {
      if (inputValue > 100) {
        newValue = 100;
        setLocalInputValue(100);
      } else if (inputValue < 0) {
        newValue = 0;
        setLocalInputValue(0);
      } else {
        newValue = Math.floor(inputValue);
      }
    }
    setValue2(newValue);
    setInputValue(newValue);
  };

  const onMinusClick = () => {
    const newValue = value1 - 1;
    if (newValue >= 0) {
      setValue1(newValue);
    }
  };

  const onPlusClick = () => {
    const newValue = value1 + 1;
    if (newValue <= 100) {
      setValue1(newValue);
    }
  };

  const buildAction = (isDisabled: boolean) => (
    <Button
      variant="plain"
      aria-label={isDisabled ? 'Lock' : 'Unlock'}
      onClick={() => setIsDisabled(!isDisabled)}
      icon={isDisabled ? <LockIcon /> : <LockOpenIcon />}
    />
  );

  return (
    <>
      <Content component="h3">Slider value is: {value1}</Content>
      <Slider
        value={value1}
        onChange={onChange1}
        startActions={<Button variant="plain" aria-label="Minus" onClick={onMinusClick} icon={<MinusIcon />} />}
        endActions={<Button variant="plain" aria-label="Plus" onClick={onPlusClick} icon={<PlusIcon />} />}
      />
      <br />
      <br />
      <Slider
        value={value2}
        inputValue={inputValue}
        onChange={onChange2}
        inputLabel="%"
        isInputVisible
        isDisabled={isDisabled}
        endActions={buildAction(isDisabled)}
      />
    </>
  );
};
