import { Slider } from '@patternfly/react-core';
import React, { Component } from 'react';

export interface SliderDemoState {
  valueDiscrete: number;
  inputValueDiscrete: number;
  valuePercent: number;
  inputValuePercent: number;
  valueContinuous: number;
  inputValueContinuous: number;
}

export class SliderDemo extends Component<SliderDemoState> {
  static displayName = 'SliderDemo';
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  state = {
    valueDiscrete: 62.5,
    valuePercent: 50,
    inputValuePercent: 50,
    valueContinuous: 50,
    inputValueContinuous: 50
  };

  stepsDiscrete = [
    { value: 0, label: '0' },
    { value: 12.5, label: '1', isLabelHidden: true },
    { value: 25, label: '2' },
    { value: 37.5, label: '3', isLabelHidden: true },
    { value: 50, label: '4' },
    { value: 62.5, label: '5', isLabelHidden: true },
    { value: 75, label: '6' },
    { value: 87.5, label: '7', isLabelHidden: true },
    { value: 100, label: '8' }
  ];

  stepsPercent = [
    { value: 0, label: '0%' },
    { value: 25, label: '25%', isLabelHidden: true },
    { value: 50, label: '50%' },
    { value: 75, label: '75%', isLabelHidden: true },
    { value: 100, label: '100%' }
  ];

  onValueChangeDiscrete = (value: number) => {
    if (value) {
      const step = this.stepsDiscrete.find(step => step.value === value);
      const inputValue = step ? step.label : undefined;
      const inputValueNumber: number = Number(inputValue);
      this.setState({
        valueDiscrete: value,
        inputValueDiscrete: inputValueNumber
      });
    }
  };

  onValueChangePercent = (value: number) => {
    if (value) {
      const step = this.stepsPercent.find((step: any) => step.value === value);
      const inputValue = step ? step.label.slice(0, -1) : undefined;
      const inputValueNumber: number = Number(inputValue);
      this.setState({
        valuePercent: value,
        inputValuePercent: inputValueNumber
      });
    }
  };

  onChangeValueContinuous = (value: number) => {
    const newValue = Math.floor(value);
    this.setState({
      inputValueContinuous: newValue,
      valueContinuous: newValue
    });
  };

  onChangePercent = (value: number) => {
    let newValue = this.state.valuePercent;
    let newInputValue = this.state.inputValuePercent;
    const step = this.stepsPercent.find(step => step.label === value.toString() + '%');
    newValue = step ? step.value : this.state.valuePercent;
    newInputValue = step ? Number(step.label.slice(0, -1)) : this.state.inputValuePercent;
    this.setState({
      inputValuePercent: newInputValue,
      valuePercent: newValue
    });
  };

  onChangeContinuous = (value: number) => {
    this.setState({
      inputValueContinuous: value,
      valueContinuous: value
    });
  };

  render() {
    return (
      <>
        <Slider
          id="discrete-slider"
          isDiscrete
          currentValue={this.state.valueDiscrete}
          steps={this.stepsDiscrete}
          onValueChange={this.onValueChangeDiscrete}
        />
        <br />
        <Slider
          id="discrete-slider-input-label"
          currentValue={this.state.valuePercent}
          isInputVisible
          inputValue={this.state.inputValuePercent}
          inputLabel="%"
          isDiscrete
          onValueChange={this.onValueChangePercent}
          onChange={this.onChangePercent}
          steps={this.stepsPercent}
        />
        <br />
        <Slider
          id="continuous-slider"
          currentValue={this.state.valueContinuous}
          isInputVisible
          inputPosition="aboveThumb"
          inputValue={this.state.inputValueContinuous}
          inputLabel="%"
          onValueChange={this.onChangeValueContinuous}
          onChange={this.onChangeContinuous}
        />
      </>
    );
  }
}
