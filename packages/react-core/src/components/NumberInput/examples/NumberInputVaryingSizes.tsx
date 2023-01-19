import React from 'react';
import { NumberInput } from '@patternfly/react-core';

export const NumberInputVaryingSizes: React.FunctionComponent = () => {
  const [input1Value, setInput1Value] = React.useState<number | ''>(1);
  const [input2Value, setInput2Value] = React.useState<number | ''>(1234567890);
  const [input3Value, setInput3Value] = React.useState<number | ''>(5);
  const [input4Value, setInput4Value] = React.useState<number | ''>(12345);

  const onChange = (
    event: React.FormEvent<HTMLInputElement>,
    updateFunction: React.Dispatch<React.SetStateAction<number | ''>>
  ) => {
    const value = (event.target as HTMLInputElement).value;
    updateFunction(value === '' ? value : +value);
  };

  const onMinus = (value: number | '', updateFunction: React.Dispatch<React.SetStateAction<number | ''>>) => {
    updateFunction((value || 0) - 1);
  };

  const onPlus = (value: number | '', updateFunction: React.Dispatch<React.SetStateAction<number | ''>>) => {
    updateFunction((value || 0) + 1);
  };

  return (
    <React.Fragment>
      <NumberInput
        value={input1Value}
        onMinus={() => onMinus(input1Value, setInput1Value)}
        onChange={event => onChange(event, setInput1Value)}
        onPlus={() => onPlus(input1Value, setInput1Value)}
        inputName="input1"
        inputAriaLabel="number input 1"
        minusBtnAriaLabel="input 2 minus"
        plusBtnAriaLabel="input 2 plus"
        widthChars={1}
        allowEmptyInput
      />
      <br />
      <br />
      <NumberInput
        value={input2Value}
        onMinus={() => onMinus(input2Value, setInput2Value)}
        onChange={event => onChange(event, setInput2Value)}
        onPlus={() => onPlus(input2Value, setInput2Value)}
        inputName="input2"
        inputAriaLabel="number input 2"
        minusBtnAriaLabel="input 2 minus"
        plusBtnAriaLabel="input 2 plus"
        widthChars={10}
        allowEmptyInput
      />
      <br />
      <br />
      <NumberInput
        value={input3Value}
        onMinus={() => onMinus(input3Value, setInput3Value)}
        onChange={event => onChange(event, setInput3Value)}
        onPlus={() => onPlus(input3Value, setInput3Value)}
        inputName="input3"
        inputAriaLabel="number input 3"
        minusBtnAriaLabel="input 3 minus"
        plusBtnAriaLabel="input 3 plus"
        widthChars={5}
        allowEmptyInput
      />
      <br />
      <br />
      <NumberInput
        value={input4Value}
        onMinus={() => onMinus(input4Value, setInput4Value)}
        onChange={event => onChange(event, setInput4Value)}
        onPlus={() => onPlus(input4Value, setInput4Value)}
        inputName="input4"
        inputAriaLabel="number input 4"
        minusBtnAriaLabel="input 4 minus"
        plusBtnAriaLabel="input 4 plus"
        widthChars={5}
        allowEmptyInput
      />
    </React.Fragment>
  );
};
