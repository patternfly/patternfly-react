import { NumberInput } from '@patternfly/react-core';
import React, { Component } from 'react';

export interface NumberInputDemoState {
  value: number;
  value2: number | null;
}

export class NumberInputDemo extends Component<NumberInputDemoState> {
  static displayName = 'NumberInputDemo';
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  state: NumberInputDemoState = {
    value: 0,
    value2: undefined
  };

  onMinus = () => {
    this.setState({
      value: this.state.value - 1
    });
  };

  onMinus2 = () => {
    this.setState({
      value2: this.state.value2 - 1
    });
  };

  onChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      value: Number((event.target as HTMLInputElement).value)
    });
  };

  onChange2 = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      value2: Number((event.target as HTMLInputElement).value)
    });
  };

  onPlus = () => {
    this.setState({
      value: this.state.value + 1
    });
  };

  onPlus2 = () => {
    this.setState({
      value2: (this.state.value2 || 0) + 1
    });
  };

  onBlur = () => {
    if (this.state.value2 > 3) {
      this.setState({
        value2: 3
      });
    } else if (this.state.value2 < 0) {
      this.setState({ value2: 0 });
    }
  };

  render() {
    const { value, value2 } = this.state;
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
        <br />
        <br />
        <NumberInput
          id="numberInput3"
          value={value2}
          min={minValue}
          max={maxValue}
          onMinus={this.onMinus2}
          onChange={this.onChange2}
          onPlus={this.onPlus2}
          onBlur={this.onBlur}
          inputName="input 3"
          inputAriaLabel="number input 3"
          minusBtnAriaLabel="minus"
          plusBtnAriaLabel="plus"
          inputProps={{ id: 'input3' }}
          minusBtnProps={{ id: 'minus-button3' }}
          plusBtnProps={{ id: 'plus-button3' }}
          unit="$"
          unitPosition="before"
        />
      </React.Fragment>
    );
  }
}
