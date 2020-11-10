---
id: Touchspin
section: components
cssPrefix: pf-c-touchspin
propComponents: ['Touchspin']
beta: true
---

## Examples

### Default

```js
import React from 'react';
import { Touchspin } from '@patternfly/react-core';

class BasicTouchspin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 90
    };

    this.onMinus = () => {
      this.setState({
        value: this.state.value - 1
      });
    };

    this.onChange = event => {
      this.setState({
        value: Number(event.target.value)
      });
    };

    this.onPlus = () => {
      this.setState({
        value: this.state.value + 1
      });
    };
  }

  render() {
    const { value } = this.state;
    return (
      <Touchspin
        value={value}
        onMinus={this.onMinus}
        onChange={this.onChange}
        onPlus={this.onPlus}
        inputProps={{ name: 'basic-touchspin-input', 'aria-label': 'touchspin input' }}
        minusButtonProps={{ 'aria-label': 'minus' }}
        plusButtonProps={{ 'aria-label': 'plus' }}
      />
    );
  }
}
```

### With unit

```js
import React from 'react';
import { Touchspin } from '@patternfly/react-core';

class UnitTouchspin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: 90,
      value2: (1.0).toFixed(2)
    };

    this.onMinus1 = () => {
      this.setState({
        value1: this.state.value1 - 1
      });
    };

    this.onChange1 = event => {
      this.setState({
        value1: Number(event.target.value)
      });
    };

    this.onPlus1 = () => {
      this.setState({
        value1: this.state.value1 + 1
      });
    };

    this.onMinus2 = () => {
      this.setState({
        value2: (Number(this.state.value2) - 0.01).toFixed(2)
      });
    };

    this.onChange2 = event => {
      console.log(event.target.value);
      this.setState({
        value2: event.target.value
      });
    };

    this.onPlus2 = () => {
      this.setState({
        value2: (Number(this.state.value2) + 0.01).toFixed(2)
      });
    };
  }

  render() {
    const { value1, value2 } = this.state;
    return (
      <React.Fragment>
        <Touchspin
          value={value1}
          onMinus={this.onMinus1}
          onPlus={this.onPlus1}
          inputProps={{ onChange: this.onChange1, name: 'touchspin-input1', 'aria-label': 'touchspin input 1' }}
          minusButtonProps={{ 'aria-label': 'input 1 minus 1' }}
          plusButtonProps={{ 'aria-label': 'input 1 plus 1' }}
          unit="%"
        />
        <br />
        <br />
        <Touchspin
          value={value2}
          onMinus={this.onMinus2}
          onChange={this.onChange2}
          onPlus={this.onPlus2}
          inputProps={{ name: 'touchspin-input2', 'aria-label': 'touchspin input 2' }}
          minusButtonProps={{ 'aria-label': 'input 2 minus 0.01' }}
          plusButtonProps={{ 'aria-label': 'input 2 plus 0.01' }}
          unit="$"
          unitPosition="before"
        />
      </React.Fragment>
    );
  }
}
```

### With unit and thresholds

```js
import React from 'react';
import { Touchspin } from '@patternfly/react-core';

class UnitThresholdTouchspin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };

    this.onMinus = () => {
      this.setState({
        value: this.state.value - 1
      });
    };

    this.onChange = event => {
      this.setState({
        value: Number(event.target.value)
      });
    };

    this.onPlus = () => {
      this.setState({
        value: this.state.value + 1
      });
    };
  }

  render() {
    const { value } = this.state;
    const minValue = 0;
    const maxValue = 10;

    return (
      <React.Fragment>
        With a minimum value of 0 and maximum value of 10
        <br />
        <Touchspin
          value={value}
          onMinus={this.onMinus}
          onChange={this.onChange}
          onPlus={this.onPlus}
          inputProps={{ name: 'touchspin-input1', 'aria-label': 'touchspin input' }}
          minusButtonProps={{ isDisabled: value === minValue, 'aria-label': 'minus 1' }}
          plusButtonProps={{ isDisabled: value === maxValue, 'aria-label': 'plus 1' }}
          unit="%"
        />
      </React.Fragment>
    );
  }
}
```

### Disabled

```js
import React from 'react';
import { Touchspin } from '@patternfly/react-core';

class DisabledTouchspin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 100
    };

    this.onMinus = () => {
      this.setState({
        value: this.state.value - 1
      });
    };

    this.onChange = event => {
      this.setState({
        value: Number(event.target.value)
      });
    };

    this.onPlus = () => {
      this.setState({
        value: this.state.value + 1
      });
    };
  }

  render() {
    const { value } = this.state;
    const minValue = 0;
    const maxValue = 100;

    return (
      <Touchspin
        value={value}
        onMinus={this.onMinus}
        onChange={this.onChange}
        onPlus={this.onPlus}
        inputProps={{ name: 'touchspin-input1', 'aria-label': 'input touchspin' }}
        minusButtonProps={{ isDisabled: value === minValue, 'aria-label': 'minus 1' }}
        plusButtonProps={{ isDisabled: value === maxValue, 'aria-label': 'plus 1' }}
        unit="%"
        isDisabled
      />
    );
  }
}
```

### Varying sizes

```js
import React from 'react';
import { Touchspin } from '@patternfly/react-core';

class TouchspinSizes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input1Value: 1,
      input2Value: 1234567890,
      input3Value: 5,
      input4Value: 12345
    };

    this.onChange = event => {
      this.setState({
        [`${event.target.name}Value`]: Number(event.target.value)
      });
    };

    this.onMinus = inputName => {
      this.setState({
        [`${inputName}Value`]: this.state[`${inputName}Value`] - 1
      });
    };

    this.onPlus = inputName => {
      this.setState({
        [`${inputName}Value`]: this.state[`${inputName}Value`] + 1
      });
    };
  }

  render() {
    const { input1Value, input2Value, input3Value, input4Value } = this.state;

    return (
      <React.Fragment>
        <Touchspin
          value={input1Value}
          onMinus={this.onMinus}
          onChange={this.onChange}
          onPlus={this.onPlus}
          inputProps={{ name: 'input1', 'aria-label': 'touchspin input 1' }}
          minusButtonProps={{ 'aria-label': 'input 1 minus 1' }}
          plusButtonProps={{ 'aria-label': 'input 1 plus 1' }}
          widthChars={1}
        />
        <br />
        <br />
        <Touchspin
          value={input2Value}
          onMinus={this.onMinus}
          onChange={this.onChange}
          onPlus={this.onPlus}
          inputProps={{ name: 'input2', 'aria-label': 'touchspin input 2' }}
          minusButtonProps={{ 'aria-label': 'input 2 minus 1' }}
          plusButtonProps={{ 'aria-label': 'input 2 plus 1' }}
          widthChars={10}
        />
        <br />
        <br />
        <Touchspin
          value={input3Value}
          onMinus={this.onMinus}
          onChange={this.onChange}
          onPlus={this.onPlus}
          inputProps={{ name: 'input3', 'aria-label': 'touchspin input 3' }}
          minusButtonProps={{ 'aria-label': 'input 3 minus 1' }}
          plusButtonProps={{ 'aria-label': 'input 3 plus 1' }}
          widthChars={5}
        />
        <br />
        <br />
        <Touchspin
          value={input4Value}
          onMinus={this.onMinus}
          onChange={this.onChange}
          onPlus={this.onPlus}
          inputProps={{ name: 'input4', 'aria-label': 'touchspin input 4' }}
          minusButtonProps={{ 'aria-label': 'input 4 minus 1' }}
          plusButtonProps={{ 'aria-label': 'input 4 plus 1' }}
          widthChars={5}
        />
      </React.Fragment>
    );
  }
}
```
