import { Touchspin } from '@patternfly/react-core';
import React, { Component } from 'react';

export interface TouchspinDemoState {
  value: number;
}

export class TouchspinDemo extends Component<TouchspinDemoState> {
  static displayName = 'TouchspinDemo';
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
        <Touchspin
          id="touchspin1"
          value={value}
          onMinus={this.onMinus}
          onChange={this.onChange}
          onPlus={this.onPlus}
          inputProps={{ id: 'input1', name: 'touchspin-input', 'aria-label': 'touchspin input' }}
          minusButtonProps={{ isDisabled: value === minValue, id: 'minus-button', 'aria-label': 'minus' }}
          plusButtonProps={{ isDisabled: value === maxValue, id: 'plus-button', 'aria-label': 'plus' }}
          unit="%"
          widthChars={5}
        />
        <br />
        <br />
        <Touchspin
          id="touchspin2"
          value={value}
          onMinus={this.onMinus}
          onChange={this.onChange}
          onPlus={this.onPlus}
          inputProps={{ id: 'input2', name: 'touchspin-input', 'aria-label': 'touchspin input' }}
          minusButtonProps={{ isDisabled: value === minValue, id: 'minus-button2', 'aria-label': 'minus' }}
          plusButtonProps={{ isDisabled: value === maxValue, id: 'plus-button2', 'aria-label': 'plus' }}
          unit="$"
          unitPosition="before"
          isDisabled
        />
      </React.Fragment>
    );
  }
}
