---
id: Slider
section: components
cssPrefix: pf-c-slider
propComponents: ['Slider', 'SliderStepObject']
beta: true
---

import { Slider, Button, Text, TextVariants } from '@patternfly/react-core';
import MinusIcon from '@patternfly/react-icons/dist/js/icons/minus-icon';
import PlusIcon from '@patternfly/react-icons/dist/js/icons/plus-icon';
import LockIcon from '@patternfly/react-icons/dist/js/icons/lock-icon';
import LockOpenIcon from '@patternfly/react-icons/dist/js/icons/lock-open-icon';

## Examples

### Discrete

```js
import React from 'react';
import { Slider, Text, TextVariants } from '@patternfly/react-core';

class DiscreteInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 50
    };

    this.steps = [
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

    this.onValueChange = value => {
      if (value) {
        this.setState({
          value
        });
      }
    };
  }

  render() {
    const step = this.steps.find(step => step.value === this.state.value);
    const displayValue = step ? step.label : undefined;
    return (
      <>
        <Text component={TextVariants.h3}>Slider Value is: {displayValue}</Text>
        <Slider isDiscrete currentValue={this.state.value} onValueChange={this.onValueChange} steps={this.steps} />
      </>
    );
  }
}
```

### Continuous

```js
import React from 'react';
import { Slider, Text, TextVariants } from '@patternfly/react-core';

class ContinuousInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 50
    };

    this.onValueChange = value => {
      if (value) {
        this.setState({
          value: Math.floor(value)
        });
      }
    };
  }

  render() {
    return (
      <>
        <Text component={TextVariants.h3}>Slider Value is: {this.state.value}</Text>
        <Slider currentValue={this.state.value} onValueChange={this.onValueChange} />
        <br />
        <Slider
          currentValue={50}
          steps={[
            { value: 0, label: '0%' },
            { value: 100, label: '100%' }
          ]}
        />
      </>
    );
  }
}
```

### Value input

```js
import React from 'react';
import { Slider } from '@patternfly/react-core';

class ValueInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valueDiscrete: 62.5,
      inputValueDiscrete: 5,
      valuePercent: 50,
      inputValuePercent: 50,
      valueContinuous: 50,
      inputValueContinuous: 50
    };

    this.stepsDiscrete = [
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

    this.stepsPercent = [
      { value: 0, label: '0%' },
      { value: 25, label: '25%', isLabelHidden: true },
      { value: 50, label: '50%' },
      { value: 75, label: '75%', isLabelHidden: true },
      { value: 100, label: '100%' }
    ];

    this.onValueChangeDiscrete = value => {
      if (value) {
        const step = this.stepsDiscrete.find(step => step.value === value);
        let inputValue = step ? step.label : undefined;
        inputValue = Number(inputValue);
        this.setState({
          valueDiscrete: value,
          inputValueDiscrete: inputValue
        });
      }
    };

    this.onValueChangePercent = value => {
      if (value) {
        const step = this.stepsPercent.find(step => step.value === value);
        let inputValue = step ? step.label.slice(0, -1) : undefined;
        inputValue = Number(inputValue);
        this.setState({
          valuePercent: value,
          inputValuePercent: inputValue
        });
      }
    };

    this.onValueChangeContinuous = value => {
      const newValue = Math.floor(value);
      this.setState({
        inputValueContinuous: newValue,
        valueContinuous: newValue
      });
    };

    this.onChangeDiscrete = value => {
      let newValue = this.state.valueDiscrete;
      let newInputValue = this.state.inputValueDiscrete;
      const step = this.stepsDiscrete.find(step => step.label === value.toString());
      newValue = step ? step.value : this.state.valueDiscrete;
      newInputValue = step ? Number(step.label) : this.state.inputValueDiscrete;
      this.setState({
        inputValueDiscrete: newInputValue,
        valueDiscrete: newValue
      });
    };

    this.onChangePercent = value => {
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

    this.onChangeContinuous = value => {
      this.setState({
        inputValueContinuous: value,
        valueContinuous: value
      });
    };
  }

  render() {
    return (
      <>
        <Slider
          isDiscrete
          currentValue={this.state.valueDiscrete}
          isInputVisible
          inputValue={this.state.inputValueDiscrete}
          steps={this.stepsDiscrete}
          onChange={this.onChangeDiscrete}
          onValueChange={this.onValueChangeDiscrete}
        />
        <br />
        <Slider
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
          currentValue={this.state.valueContinuous}
          isInputVisible
          inputValue={this.state.inputValueContinuous}
          inputLabel="%"
          onValueChange={this.onValueChangeContinuous}
          onChange={this.onChangeContinuous}
        />
      </>
    );
  }
}
```

### Thumb value input

```js
import React from 'react';
import { Slider } from '@patternfly/react-core';

class ThumbValueInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 50,
      inputValue: 50
    };

    this.onChangeValue = value => {
      const newValue = Math.floor(value);
      this.setState({
        value: newValue,
        inputValue: newValue
      });
    };

    this.onChange = value => {
      this.setState({
        value,
        inputValue: value
      });
    };
  }

  render() {
    return (
      <Slider
        currentValue={this.state.value}
        isInputVisible
        inputValue={this.state.inputValue}
        inputLabel="%"
        inputPosition="aboveThumb"
        onChange={this.onChange}
        onValueChange={this.onChangeValue}
      />
    );
  }
}
```

### Actions

```js
import React from 'react';
import { Slider, Button, Text, TextVariants } from '@patternfly/react-core';
import MinusIcon from '@patternfly/react-icons/dist/js/icons/minus-icon';
import PlusIcon from '@patternfly/react-icons/dist/js/icons/plus-icon';
import LockIcon from '@patternfly/react-icons/dist/js/icons/lock-icon';
import LockOpenIcon from '@patternfly/react-icons/dist/js/icons/lock-open-icon';

class SliderActions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: 50,
      value2: 50,
      inputValue: 50,
      isDisabled: false
    };

    this.onChangeValue1 = value => {
      const newValue = Math.floor(value);
      this.setState({
        value1: newValue
      });
    };

    this.onChangeValue2 = value => {
      const newValue = Math.floor(value);
      this.setState({
        value2: newValue,
        inputValue: newValue
      });
    };

    this.onChange = value => {
      this.setState({
        value2,
        inputValue: value
      });
    };

    this.onClick = () => {
      this.setState({
        isDisabled: !this.state.isDisabled
      });
    };

    this.onMinusClick = () => {
      const newValue = this.state.value1 - 1;
      if (newValue >= 0) {
        this.setState({
          value1: newValue
        });
      }
    };

    this.onPlusClick = () => {
      const newValue = this.state.value1 + 1;
      if (newValue <= 100) {
        this.setState({
          value1: newValue
        });
      }
    };
  }

  render() {
    const disabledAction = (
      <Button variant="plain" aria-label="Plus" onClick={this.onClick}>
        <LockIcon />
      </Button>
    );

    const enabledAction = (
      <Button variant="plain" aria-label="Plus" onClick={this.onClick}>
        <LockOpenIcon />
      </Button>
    );

    return (
      <>
        <Text component={TextVariants.h3}>Slider Value is: {this.state.value1}</Text>
        <Slider
          currentValue={this.state.value1}
          onValueChange={this.onChangeValue1}
          leftActions={
            <Button variant="plain" aria-label="Minus" onClick={this.onMinusClick}>
              <MinusIcon />
            </Button>
          }
          rightActions={
            <Button variant="plain" aria-label="Plus" onClick={this.onPlusClick}>
              <PlusIcon />
            </Button>
          }
        />
        <br />
        <br />
        <Slider
          currentValue={this.state.value2}
          inputValue={this.state.inputValue}
          onValueChange={this.onChangeValue2}
          onChange={this.onChange}
          inputLabel="%"
          isInputVisible
          isInputDisabled={this.state.isDisabled}
          rightActions={this.state.isDisabled ? disabledAction : enabledAction}
        />
      </>
    );
  }
}
```
