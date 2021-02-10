import { NumberInput } from '@patternfly/react-core';
import React, { Component } from 'react';

export interface NumberInputDemoState {
  value: number;
}

export class NumberInputDemo extends Component<NumberInputDemoState> {
  static displayName = 'NumberInputDemo';
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  state = {
    value: 0
  };

  onMinus = () => {
    this.setState({
      value: this.state.value - 1
    });
  };

  onChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      value: Number((event.target as HTMLInputElement).value)
    });
  };

  onPlus = () => {
    this.setState({
      value: this.state.value + 1
    });
  };

  render() {
    const { value } = this.state;
    const minValue = 0;
    const maxValue = 3;

    return (
      <React.Fragment>
        <NumberInput
          id="numberInput1"
          value={value}
          min={minValue}
          max={maxValue}
          onMinus={this.onMinus}
          onChange={this.onChange}
          onPlus={this.onPlus}
          inputName="input"
          inputAriaLabel="number input"
          minusBtnAriaLabel="minus"
          plusBtnAriaLabel="plus"
          inputProps={{ id: 'input1' }}
          minusBtnProps={{ id: 'minus-button' }}
          plusBtnProps={{ id: 'plus-button' }}
          unit="%"
          widthChars={5}
        />
        <br />
        <br />
        <NumberInput
          id="numberInput2"
          value={value}
          min={minValue}
          max={maxValue}
          onMinus={this.onMinus}
          onChange={this.onChange}
          onPlus={this.onPlus}
          inputName="input 2"
          inputAriaLabel="number input 2"
          minusBtnAriaLabel="minus"
          plusBtnAriaLabel="plus"
          inputProps={{ id: 'input2' }}
          minusBtnProps={{ id: 'minus-button2' }}
          plusBtnProps={{ id: 'plus-button2' }}
          unit="$"
          unitPosition="before"
          isDisabled
        />
      </React.Fragment>
    );
  }
}
