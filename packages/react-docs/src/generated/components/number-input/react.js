import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Number input",
  "section": "components",
  "source": "react",
  "slug": "/components/number-input/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/NumberInput/examples/NumberInput.md",
  "propComponents": [
    {
      "name": "NumberInput",
      "description": "",
      "props": [
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the number input"
        },
        {
          "name": "inputAriaLabel",
          "type": "string",
          "description": "Aria label of the input",
          "defaultValue": "'Input'"
        },
        {
          "name": "inputName",
          "type": "string",
          "description": "Name of the input"
        },
        {
          "name": "inputProps",
          "type": "any",
          "description": "Additional properties added to the text input"
        },
        {
          "name": "isDisabled",
          "type": "boolean",
          "description": "Indicates the whole number input should be disabled",
          "defaultValue": "false"
        },
        {
          "name": "max",
          "type": "number",
          "description": "Maximum value of the number input, disabling the plus button when reached"
        },
        {
          "name": "min",
          "type": "number",
          "description": "Minimum value of the number input, disabling the minus button when reached"
        },
        {
          "name": "minusBtnAriaLabel",
          "type": "string",
          "description": "Aria label of the minus button",
          "defaultValue": "'Minus'"
        },
        {
          "name": "minusBtnProps",
          "type": "ButtonProps",
          "description": "Additional properties added to the minus button"
        },
        {
          "name": "onBlur",
          "type": "(event?: any) => void",
          "description": "Callback function when text input is blurred (focus leaves)"
        },
        {
          "name": "onChange",
          "type": "(event: React.FormEvent<HTMLInputElement>) => void",
          "description": "Callback for the text input changing"
        },
        {
          "name": "onMinus",
          "type": "(event: React.MouseEvent, name?: string) => void",
          "description": "Callback for the minus button",
          "defaultValue": "() => {}"
        },
        {
          "name": "onPlus",
          "type": "(event: React.MouseEvent, name?: string) => void",
          "description": "Callback for the plus button",
          "defaultValue": "() => {}"
        },
        {
          "name": "plusBtnAriaLabel",
          "type": "string",
          "description": "Aria label of the plus button",
          "defaultValue": "'Plus'"
        },
        {
          "name": "plusBtnProps",
          "type": "ButtonProps",
          "description": "Additional properties added to the plus button"
        },
        {
          "name": "unit",
          "type": "React.ReactNode",
          "description": "Adds the given unit to the number input"
        },
        {
          "name": "unitPosition",
          "type": "'before' | 'after'",
          "description": "Position of the number input unit in relation to the number input",
          "defaultValue": "'after'"
        },
        {
          "name": "value",
          "type": "number",
          "description": "Value of the number input",
          "defaultValue": "0"
        },
        {
          "name": "widthChars",
          "type": "number",
          "description": "Sets the width of the number input to a number of characters"
        }
      ]
    }
  ],
  "cssPrefix": [
    "pf-c-number-input"
  ],
  "examples": [
    "Default",
    "With unit",
    "With unit and thresholds",
    "Disabled",
    "Varying sizes",
    "Custom increment/decrement",
    "Custom increment/decrement and thresholds"
  ]
};
pageData.examples = {
  'Default': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { NumberInput } from '@patternfly/react-core';\n\nclass BasicNumberInput extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value: 90\n    };\n\n    this.onMinus = () => {\n      this.setState({\n        value: this.state.value - 1\n      });\n    };\n\n    this.onChange = event => {\n      this.setState({\n        value: Number(event.target.value)\n      });\n    };\n\n    this.onPlus = () => {\n      this.setState({\n        value: this.state.value + 1\n      });\n    };\n  }\n\n  render() {\n    const { value } = this.state;\n    return (\n      <NumberInput\n        value={value}\n        onMinus={this.onMinus}\n        onChange={this.onChange}\n        onPlus={this.onPlus}\n        inputName=\"input\"\n        inputAriaLabel=\"number input\"\n        minusBtnAriaLabel=\"minus\"\n        plusBtnAriaLabel=\"plus\"\n      />\n    );\n  }\n}","title":"Default","lang":"js"}}>
      
    </Example>,
  'With unit': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { NumberInput } from '@patternfly/react-core';\n\nclass UnitNumberInput extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value1: 90,\n      value2: (1.0).toFixed(2)\n    };\n\n    this.onMinus1 = () => {\n      this.setState({\n        value1: this.state.value1 - 1\n      });\n    };\n\n    this.onChange1 = event => {\n      this.setState({\n        value1: Number(event.target.value)\n      });\n    };\n\n    this.onPlus1 = () => {\n      this.setState({\n        value1: this.state.value1 + 1\n      });\n    };\n\n    this.onMinus2 = () => {\n      this.setState({\n        value2: (Number(this.state.value2) - 0.01).toFixed(2)\n      });\n    };\n\n    this.onChange2 = event => {\n      console.log(event.target.value);\n      this.setState({\n        value2: event.target.value\n      });\n    };\n\n    this.onPlus2 = () => {\n      this.setState({\n        value2: (Number(this.state.value2) + 0.01).toFixed(2)\n      });\n    };\n  }\n\n  render() {\n    const { value1, value2 } = this.state;\n    return (\n      <React.Fragment>\n        <NumberInput\n          value={value1}\n          onMinus={this.onMinus1}\n          onChange={this.onChange1}\n          onPlus={this.onPlus1}\n          inputName=\"input 1\"\n          inputAriaLabel=\"number input 1\"\n          minusBtnAriaLabel=\"minus 1\"\n          plusBtnAriaLabel=\"plus 1\"\n          unit=\"%\"\n        />\n        <br />\n        <br />\n        <NumberInput\n          value={value2}\n          onMinus={this.onMinus2}\n          onChange={this.onChange2}\n          onPlus={this.onPlus2}\n          inputName=\"input 2\"\n          inputAriaLabel=\"number input 2\"\n          minusBtnAriaLabel=\"minus 0.01\"\n          plusBtnAriaLabel=\"plus 0.01\"\n          unit=\"$\"\n          unitPosition=\"before\"\n        />\n      </React.Fragment>\n    );\n  }\n}","title":"With unit","lang":"js"}}>
      
    </Example>,
  'With unit and thresholds': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { NumberInput } from '@patternfly/react-core';\n\nclass UnitThresholdNumberInput extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value: 0\n    };\n    this.minValue = 0;\n    this.maxValue = 10;\n\n    this.normalizeBetween = (value, min, max) => {\n      if (min !== undefined && max !== undefined) {\n        return Math.max(Math.min(value, max), min);\n      } else if (value <= min) {\n        return min;\n      } else if (value >= max) {\n        return max;\n      }\n      return value;\n    };\n\n    this.onMinus = () => {\n      this.setState({\n        value: this.normalizeBetween(this.state.value - 1, this.minValue, this.maxValue)\n      });\n    };\n\n    this.onChange = event => {\n      const newValue = isNaN(event.target.value) ? 0 : Number(event.target.value);\n      this.setState({\n        value: newValue > this.maxValue ? this.maxValue : newValue < this.minValue ? this.minValue : newValue\n      });\n    };\n\n    this.onPlus = () => {\n      this.setState({\n        value: this.normalizeBetween(this.state.value + 1, this.minValue, this.maxValue)\n      });\n    };\n  }\n\n  render() {\n    const { value } = this.state;\n\n    return (\n      <React.Fragment>\n        With a minimum value of 0 and maximum value of 10\n        <br />\n        <NumberInput\n          value={value}\n          min={this.minValue}\n          max={this.maxValue}\n          onMinus={this.onMinus}\n          onChange={this.onChange}\n          onPlus={this.onPlus}\n          inputName=\"input\"\n          inputAriaLabel=\"number input\"\n          minusBtnAriaLabel=\"minus\"\n          plusBtnAriaLabel=\"plus\"\n          unit=\"%\"\n        />\n      </React.Fragment>\n    );\n  }\n}","title":"With unit and thresholds","lang":"js"}}>
      
    </Example>,
  'Disabled': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { NumberInput } from '@patternfly/react-core';\n\nclass DisabledNumberInput extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value: 100\n    };\n\n    this.onMinus = () => {\n      this.setState({\n        value: this.state.value - 1\n      });\n    };\n\n    this.onChange = event => {\n      this.setState({\n        value: Number(event.target.value)\n      });\n    };\n\n    this.onPlus = () => {\n      this.setState({\n        value: this.state.value + 1\n      });\n    };\n  }\n\n  render() {\n    const { value } = this.state;\n    const minValue = 0;\n    const maxValue = 100;\n\n    return (\n      <NumberInput\n        value={value}\n        min={minValue}\n        max={maxValue}\n        onMinus={this.onMinus}\n        onChange={this.onChange}\n        onPlus={this.onPlus}\n        inputName=\"input\"\n        inputAriaLabel=\"number input\"\n        minusBtnAriaLabel=\"minus\"\n        plusBtnAriaLabel=\"plus\"\n        unit=\"%\"\n        isDisabled\n      />\n    );\n  }\n}","title":"Disabled","lang":"js"}}>
      
    </Example>,
  'Varying sizes': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { NumberInput } from '@patternfly/react-core';\n\nclass NumberInputSizes extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      input1Value: 1,\n      input2Value: 1234567890,\n      input3Value: 5,\n      input4Value: 12345\n    };\n\n    this.onChange = event => {\n      this.setState({\n        [`${event.target.name}Value`]: Number(event.target.value)\n      });\n    };\n\n    this.onMinus = (e, inputName) => {\n      this.setState({\n        [`${inputName}Value`]: this.state[`${inputName}Value`] - 1\n      });\n    };\n\n    this.onPlus = (e, inputName) => {\n      this.setState({\n        [`${inputName}Value`]: this.state[`${inputName}Value`] + 1\n      });\n    };\n  }\n\n  render() {\n    const { input1Value, input2Value, input3Value, input4Value } = this.state;\n\n    return (\n      <React.Fragment>\n        <NumberInput\n          value={input1Value}\n          onMinus={this.onMinus}\n          onChange={this.onChange}\n          onPlus={this.onPlus}\n          inputName=\"input1\"\n          inputAriaLabel=\"number input 1\"\n          minusBtnAriaLabel=\"input 2 minus\"\n          plusBtnAriaLabel=\"input 2 plus\"\n          widthChars={1}\n        />\n        <br />\n        <br />\n        <NumberInput\n          value={input2Value}\n          onMinus={this.onMinus}\n          onChange={this.onChange}\n          onPlus={this.onPlus}\n          inputName=\"input2\"\n          inputAriaLabel=\"number input 2\"\n          minusBtnAriaLabel=\"input 2 minus\"\n          plusBtnAriaLabel=\"input 2 plus\"\n          widthChars={10}\n        />\n        <br />\n        <br />\n        <NumberInput\n          value={input3Value}\n          onMinus={this.onMinus}\n          onChange={this.onChange}\n          onPlus={this.onPlus}\n          inputName=\"input3\"\n          inputAriaLabel=\"number input 3\"\n          minusBtnAriaLabel=\"input 3 minus\"\n          plusBtnAriaLabel=\"input 3 plus\"\n          widthChars={5}\n        />\n        <br />\n        <br />\n        <NumberInput\n          value={input4Value}\n          onMinus={this.onMinus}\n          onChange={this.onChange}\n          onPlus={this.onPlus}\n          inputName=\"input4\"\n          inputAriaLabel=\"number input 4\"\n          minusBtnAriaLabel=\"input 4 minus\"\n          plusBtnAriaLabel=\"input 4 plus\"\n          widthChars={5}\n        />\n      </React.Fragment>\n    );\n  }\n}","title":"Varying sizes","lang":"js"}}>
      
    </Example>,
  'Custom increment/decrement': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { NumberInput } from '@patternfly/react-core';\n\nclass CustomStepNumberInput extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value: 90,\n      step: 3\n    };\n\n    this.stepper = step => () => {\n      this.setState(prev => ({ ...prev, value: prev.value + step }));\n    };\n\n    this.onChange = event => {\n      this.setState({\n        value: Number(event.target.value)\n      });\n    };\n  }\n\n  render() {\n    const { value } = this.state;\n    return (\n      <NumberInput\n        value={value}\n        onMinus={this.stepper(-3)}\n        onChange={this.onChange}\n        onPlus={this.stepper(3)}\n        inputName=\"input\"\n        inputAriaLabel=\"number input\"\n        minusBtnAriaLabel=\"minus\"\n        plusBtnAriaLabel=\"plus\"\n      />\n    );\n  }\n}","title":"Custom increment/decrement","lang":"js"}}>
      
    </Example>,
  'Custom increment/decrement and thresholds': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { NumberInput } from '@patternfly/react-core';\n\nclass CustomStepNumberInput extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value: 90,\n      step: 3\n    };\n    this.minValue = 90;\n    this.maxValue = 100;\n\n    this.normalizeBetween = (value, min, max) => {\n      if (min !== undefined && max !== undefined) {\n        return Math.max(Math.min(value, max), min);\n      } else if (value <= min) {\n        return min;\n      } else if (value >= max) {\n        return max;\n      }\n      return value;\n    };\n\n    this.stepper = step => () => {\n      this.setState(prev => ({\n        ...prev,\n        value: this.normalizeBetween(prev.value + step, this.minValue, this.maxValue)\n      }));\n    };\n\n    this.onChange = event => {\n      const newValue = isNaN(event.target.value) ? 0 : Number(event.target.value);\n      this.setState({\n        value: newValue\n      });\n    };\n\n    this.onBlur = event => {\n      const newValue = isNaN(event.target.value) ? 0 : Number(event.target.value);\n      this.setState({\n        value: newValue > this.maxValue ? this.maxValue : newValue < this.minValue ? this.minValue : newValue\n      });\n    };\n  }\n\n  render() {\n    const { value } = this.state;\n    return (\n      <NumberInput\n        value={value}\n        min={this.minValue}\n        max={this.maxValue}\n        onMinus={this.stepper(-3)}\n        onChange={this.onChange}\n        onBlur={this.onBlur}\n        onPlus={this.stepper(3)}\n        inputName=\"input\"\n        inputAriaLabel=\"number input\"\n        minusBtnAriaLabel=\"minus\"\n        plusBtnAriaLabel=\"plus\"\n      />\n    );\n  }\n}","title":"Custom increment/decrement and thresholds","lang":"js"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Default"])}
    {React.createElement(pageData.examples["With unit"])}
    {React.createElement(pageData.examples["With unit and thresholds"])}
    {React.createElement(pageData.examples["Disabled"])}
    {React.createElement(pageData.examples["Varying sizes"])}
    {React.createElement(pageData.examples["Custom increment/decrement"])}
    {React.createElement(pageData.examples["Custom increment/decrement and thresholds"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsNumberInputReactDocs';
Component.pageData = pageData;

export default Component;
