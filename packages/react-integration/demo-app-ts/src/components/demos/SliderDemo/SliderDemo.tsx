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
    valueDiscreteNoLinearMinMax: 25,
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

  stepsDiscreteNoLinearWithMaxMin = [
    { value: 12, label: '12' },
    { value: 15, label: '15' },
    { value: 25, label: '25' },
    { value: 54, label: '54' },
    { value: 67, label: '67' },
    { value: 86, label: '86' }
  ];

  stepsPercent = [
    { value: 0, label: '0%' },
    { value: 25, label: '25%', isLabelHidden: true },
    { value: 50, label: '50%' },
    { value: 75, label: '75%', isLabelHidden: true },
    { value: 100, label: '100%' }
  ];

  onChangeDiscreteNoLInearMinMax = (value: number) => {
    this.setState({ valueDiscreteMinMax: value });
  };

  onChangeDiscrete = (value: number, inputValue: number) => {
    let newValue;
    let newInputValue;

    if (!inputValue) {
      const step = this.stepsDiscrete.find(step => step.value === value);
      newInputValue = step ? step.label : 0;
      newInputValue = Number(newInputValue);
      newValue = value;
    } else {
      const maxValue = Number(this.stepsDiscrete[this.stepsDiscrete.length - 1].label);
      if (inputValue > maxValue) {
        newValue = Number(this.stepsDiscrete[this.stepsDiscrete.length - 1].value);
        newInputValue = maxValue;
      } else {
        const stepIndex = this.stepsDiscrete.findIndex(step => Number(step.label) >= inputValue);
        if (Number(this.stepsDiscrete[stepIndex].label) === inputValue) {
          newValue = this.stepsDiscrete[stepIndex].value;
        } else {
          const midpoint =
            (Number(this.stepsDiscrete[stepIndex].label) + Number(this.stepsDiscrete[stepIndex - 1].label)) / 2;
          if (midpoint > inputValue) {
            newValue = this.stepsDiscrete[stepIndex - 1].value;
            newInputValue = Number(this.stepsDiscrete[stepIndex - 1].label);
          } else {
            newValue = this.stepsDiscrete[stepIndex].value;
            newInputValue = Number(this.stepsDiscrete[stepIndex].label);
          }
        }
      }
    }

    this.setState({
      inputValueDiscrete: newInputValue,
      valueDiscrete: newValue
    });
  };

  onChangePercent = (value: number, inputValue: number) => {
    let newValue;
    let newInputValue;

    if (!inputValue) {
      const step = this.stepsPercent.find(step => step.value === value);
      newInputValue = step ? step.label.slice(0, -1) : 0;
      newInputValue = Number(newInputValue);
      newValue = value;
    } else {
      const maxValue = Number(this.stepsPercent[this.stepsPercent.length - 1].label.slice(0, -1));
      if (inputValue > maxValue) {
        newValue = Number(this.stepsPercent[this.stepsPercent.length - 1].value);
        newInputValue = maxValue;
      } else {
        const stepIndex = this.stepsPercent.findIndex(step => Number(step.label.slice(0, -1)) >= inputValue);
        if (Number(this.stepsPercent[stepIndex].label.slice(0, -1)) === inputValue) {
          newValue = this.stepsPercent[stepIndex].value;
        } else {
          const midpoint =
            (Number(this.stepsPercent[stepIndex].label.slice(0, -1)) +
              Number(this.stepsPercent[stepIndex - 1].label.slice(0, -1))) /
            2;
          if (midpoint > inputValue) {
            newValue = this.stepsPercent[stepIndex - 1].value;
            newInputValue = Number(this.stepsPercent[stepIndex - 1].label.slice(0, -1));
          } else {
            newValue = this.stepsPercent[stepIndex].value;
            newInputValue = Number(this.stepsPercent[stepIndex].label.slice(0, -1));
          }
        }
      }
    }
    this.setState({
      inputValuePercent: newInputValue,
      valuePercent: newValue
    });
  };

  onChangeContinuous = (value: number) => {
    const newValue = Math.floor(value);
    this.setState({
      inputValueContinuous: newValue,
      valueContinuous: newValue
    });
  };

  render() {
    return (
      <>
        <Slider
          id="discrete-slider"
          value={this.state.valueDiscrete}
          customSteps={this.stepsDiscrete}
          onChange={this.onChangeDiscrete}
        />
        <br />
        <Slider
          value={this.state.valueDiscreteNoLinearMinMax}
          showTicks
          customSteps={this.stepsDiscreteNoLinearWithMaxMin}
          onChange={this.onChangeDiscreteNoLInearMinMax}
          min={12}
          max={86}
        />
        <br />
        <Slider
          id="discrete-slider-input-label"
          value={this.state.valuePercent}
          isInputVisible
          inputValue={this.state.inputValuePercent}
          inputLabel="%"
          onChange={this.onChangePercent}
          customSteps={this.stepsPercent}
        />
        <br />
        <Slider
          id="continuous-slider"
          value={this.state.valueContinuous}
          isInputVisible
          inputPosition="aboveThumb"
          inputValue={this.state.inputValueContinuous}
          inputLabel="%"
          onChange={this.onChangeContinuous}
        />
      </>
    );
  }
}
