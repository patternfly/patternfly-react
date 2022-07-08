import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import { Slider, Button, Text, TextVariants } from '@patternfly/react-core';
import MinusIcon from '@patternfly/react-icons/dist/esm/icons/minus-icon';
import PlusIcon from '@patternfly/react-icons/dist/esm/icons/plus-icon';
import LockIcon from '@patternfly/react-icons/dist/esm/icons/lock-icon';
import LockOpenIcon from '@patternfly/react-icons/dist/esm/icons/lock-open-icon';
const pageData = {
  "id": "Slider",
  "section": "components",
  "source": "react",
  "slug": "/components/slider/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/Slider/examples/Slider.md",
  "propComponents": [
    {
      "name": "Slider",
      "description": "",
      "props": [
        {
          "name": "areCustomStepsContinuous",
          "type": "boolean",
          "description": "Flag indicating if the slider is is discrete for custom steps.  This will cause the slider to snap to the closest value.",
          "defaultValue": "false"
        },
        {
          "name": "aria-describedby",
          "type": "string",
          "description": "One or more id's to use for the slider thumb description"
        },
        {
          "name": "aria-labelledby",
          "type": "string",
          "description": "One or more id's to use for the slider thumb label"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the spinner."
        },
        {
          "name": "customSteps",
          "type": "SliderStepObject[]",
          "description": "Array of custom slider step objects (value and label of each step) for the slider."
        },
        {
          "name": "hasTooltipOverThumb",
          "type": "boolean",
          "description": "",
          "defaultValue": "false"
        },
        {
          "name": "inputAriaLabel",
          "type": "string",
          "description": "Aria label for the input field",
          "defaultValue": "'Slider value input'"
        },
        {
          "name": "inputLabel",
          "type": "string | number",
          "description": "Label that is place after the input field"
        },
        {
          "name": "inputPosition",
          "type": "'aboveThumb' | 'right'",
          "description": "Position of the input",
          "defaultValue": "'right'"
        },
        {
          "name": "inputValue",
          "type": "number",
          "description": "Value displayed in the input field",
          "defaultValue": "0"
        },
        {
          "name": "isDisabled",
          "type": "boolean",
          "description": "Adds disabled styling and disables the slider and the input component is present",
          "defaultValue": "false"
        },
        {
          "name": "isInputVisible",
          "type": "boolean",
          "description": "Flag to show value input field",
          "defaultValue": "false"
        },
        {
          "name": "leftActions",
          "type": "React.ReactNode",
          "description": "Actions placed to the left of the slider"
        },
        {
          "name": "max",
          "type": "number",
          "description": "The maximum permitted value",
          "defaultValue": "100"
        },
        {
          "name": "min",
          "type": "number",
          "description": "Minimum permitted value",
          "defaultValue": "0"
        },
        {
          "name": "onChange",
          "type": "(\n  value: number,\n  inputValue?: number,\n  setLocalInputValue?: React.Dispatch<React.SetStateAction<number>>\n) => void",
          "description": "Value change callback. This is called when the slider value changes"
        },
        {
          "name": "rightActions",
          "type": "React.ReactNode",
          "description": "Actions placed to the right of the slider"
        },
        {
          "name": "showBoundaries",
          "type": "boolean",
          "description": "Flag to indicate if boundaries should be shown for slider that does not have custom steps",
          "defaultValue": "true"
        },
        {
          "name": "showTicks",
          "type": "boolean",
          "description": "Flag to indicate if ticks should be shown for slider that does not have custom steps",
          "defaultValue": "false"
        },
        {
          "name": "step",
          "type": "number",
          "description": "The step interval",
          "defaultValue": "1"
        },
        {
          "name": "thumbAriaLabel",
          "type": "string",
          "description": "",
          "defaultValue": "'Value'"
        },
        {
          "name": "value",
          "type": "number",
          "description": "Current value",
          "defaultValue": "0"
        }
      ]
    },
    {
      "name": "SliderStepObject",
      "description": "",
      "props": [
        {
          "name": "isLabelHidden",
          "type": "boolean",
          "description": "Flag to hide the label"
        },
        {
          "name": "label",
          "type": "string",
          "description": "The display label for the step value. This is also used for the aria-valuetext",
          "required": true
        },
        {
          "name": "value",
          "type": "number",
          "description": "Value of the step. This value is a percentage of the slider where the  tick is drawn.",
          "required": true
        }
      ]
    }
  ],
  "beta": true,
  "cssPrefix": [
    "pf-c-slider"
  ],
  "examples": [
    "Discrete",
    "Continuous",
    "Value input",
    "Thumb value input",
    "Actions",
    "Disabled"
  ]
};
pageData.liveContext = {
  Slider,
  Button,
  Text,
  TextVariants,
  MinusIcon,
  PlusIcon,
  LockIcon,
  LockOpenIcon
};
pageData.examples = {
  'Discrete': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Slider, Text, TextVariants } from '@patternfly/react-core';\n\nclass DiscreteInput extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value1: 50,\n      value2: 50,\n      value3: 25,\n      value4: 50,\n      value5: 50,\n      value6: 3,\n      value7: 25\n    };\n\n    this.steps = [\n      { value: 0, label: '0' },\n      { value: 12.5, label: '1', isLabelHidden: true },\n      { value: 25, label: '2' },\n      { value: 37.5, label: '3', isLabelHidden: true },\n      { value: 50, label: '4' },\n      { value: 62.5, label: '5', isLabelHidden: true },\n      { value: 75, label: '6' },\n      { value: 87.5, label: '7', isLabelHidden: true },\n      { value: 100, label: '8' }\n    ];\n\n    this.stepsDiscreteWithMax = [\n      { value: 0, label: \"A\" },\n      { value: 1, label: \"B\" },\n      { value: 2, label: \"C\" },\n      { value: 3, label: \"D\" },\n      { value: 4, label: \"E\" },\n      { value: 5, label: \"F\" }\n    ];\n\n    this.stepsDiscreteNoLinearWithMaxMin = [\n      { value: 12, label: '12' },\n      { value: 15, label: '15' },\n      { value: 25, label: '25' },\n      { value: 54, label: '54' },\n      { value: 67, label: '67' },\n      { value: 86, label: '86' }\n  ];\n\n    this.onChange = value => {\n        this.setState({\n          value1: value\n        });\n    };\n\n    this.onChange2 = value => {\n        this.setState({\n          value2: value\n        });\n    };\n\n    this.onChange3 = value => {\n        this.setState({\n          value3: value\n        });\n    };\n\n    this.onChange4 = value => {\n        this.setState({\n          value4: value\n        });\n    };\n\n    this.onChange5 = value => {\n        this.setState({\n          value5: value\n        });\n    };\n\n    this.onChange6 = value => {\n        this.setState({\n          value6: value\n        });\n    };\n\n      this.onChange7 = value => {\n        this.setState({\n          value7: value\n        });\n    };\n  }\n\n  render() {\n    const step = this.steps.find(step => step.value === this.state.value1);\n    const displayValue = step ? step.label : 0;\n    return (\n      <>\n        <Text component={TextVariants.h3}>Slider value is: {displayValue}</Text>\n        <Slider value={this.state.value1} onChange={this.onChange} customSteps={this.steps} />\n        <br />\n        <Text component={TextVariants.h3}>Slider value is: {Math.floor(this.state.value2)}</Text>\n        <Text component={TextVariants.small}>(min = 0, max = 200, step = 50) </Text>\n        <Slider value={this.state.value2} onChange={this.onChange2} max={200} step={50} showTicks/>\n        <br />\n        <Text component={TextVariants.h3}>Slider value is: {Math.floor(this.state.value3)}</Text>\n        <Text component={TextVariants.small}>(min = -25, max = 75, step = 10, boundaries not shown) </Text>\n        <Slider value={this.state.value3} onChange={this.onChange3} min={-25} max={75} step={10} showTicks showBoundaries={false}/>\n        <br />\n        <Text component={TextVariants.h3}>Slider value is: {Math.floor(this.state.value4)}</Text>\n        <Text component={TextVariants.small}>(min = -25, max = 75, step = 10, boundaries shown) </Text>\n        <Slider value={this.state.value4} onChange={this.onChange4} min={-25} max={75} step={10} showTicks />\n        <br />\n        <Text component={TextVariants.h3}>Slider value is: {Math.floor(this.state.value5)}</Text>\n        <Text component={TextVariants.small}>(min = -25, max = 75, step = 10, boundaries shown, ticks not shown) </Text>\n        <Slider value={this.state.value5} onChange={this.onChange5} min={-25} max={75} step={10} />\n        <br />\n        <Text component={TextVariants.h3}>Slider value is: {Math.floor(this.state.value6)}</Text>\n        <Text component={TextVariants.small}>(max = 5, custom steps) </Text>\n        <Slider\n            value={this.state.value6}\n            showTicks\n            max={5}\n            customSteps={this.stepsDiscreteWithMax}\n            onChange={this.onChange6}\n          />\n        <br />\n        <Text component={TextVariants.h3}>Slider value is: {Math.floor(this.state.value7)}</Text>\n        <Text component={TextVariants.small}>(min = 12, max = 86, custom steps with non linear data) </Text>\n        <Slider\n            value={this.state.value7}\n            showTicks\n            customSteps={this.stepsDiscreteNoLinearWithMaxMin}\n            onChange={this.onChange7}\n            min={12}\n            max={86}\n          />\n        <br />\n      </>\n    );\n  }\n}","title":"Discrete","lang":"js"}}>
      
    </Example>,
  'Continuous': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Checkbox, Slider, Text, TextVariants } from '@patternfly/react-core';\n\nclass ContinuousInput extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      hasTooltipOverThumb: false,\n      value: 50,\n      valueCustom: 50\n    };\n\n    this.onChange = value => {\n        this.setState({\n          value: value\n        });\n    };\n\n    this.onChangeCustom = value => {\n        this.setState({\n          valueCustom: value\n        });\n    };\n  }\n\n  render() {\n    return (\n      <>\n        <Checkbox\n          id=\"thumb-has-tooltip\"\n          label=\"hasTooltipOverThumb\"\n          isChecked={this.state.hasTooltipOverThumb}\n          onChange={hasTooltipOverThumb => this.setState({ hasTooltipOverThumb })}\n          style={{ marginBottom: 20 }} />\n        <Text component={TextVariants.h3}>Slider Value is: {this.state.value}</Text>\n        <Slider\n          hasTooltipOverThumb={this.state.hasTooltipOverThumb}\n          value={this.state.value}\n          onChange={this.onChange} />\n        <br />\n        <Text component={TextVariants.h3}>Slider value is: {this.state.valueCustom}</Text>\n        <Slider\n          onChange={this.onChangeCustom}\n          value={this.state.valueCustom}\n          areCustomStepsContinuous\n          hasTooltipOverThumb={this.state.hasTooltipOverThumb}\n          customSteps={[\n            { value: 0, label: '0%' },\n            { value: 100, label: '100%' }\n          ]}\n        />\n      </>\n    );\n  }\n}","title":"Continuous","lang":"js"}}>
      
    </Example>,
  'Value input': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Slider } from '@patternfly/react-core';\n\nclass ValueInput extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      valueDiscrete: 62.5,\n      inputValueDiscrete: 5,\n      valuePercent: 50,\n      inputValuePercent: 50,\n      valueContinuous: 50,\n      inputValueContinuous: 50\n    };\n\n    this.stepsDiscrete = [\n      { value: 0, label: '0' },\n      { value: 12.5, label: '1', isLabelHidden: true },\n      { value: 25, label: '2' },\n      { value: 37.5, label: '3', isLabelHidden: true },\n      { value: 50, label: '4' },\n      { value: 62.5, label: '5', isLabelHidden: true },\n      { value: 75, label: '6' },\n      { value: 87.5, label: '7', isLabelHidden: true },\n      { value: 100, label: '8' }\n    ];\n\n    this.stepsPercent = [\n      { value: 0, label: '0%' },\n      { value: 25, label: '25%', isLabelHidden: true },\n      { value: 50, label: '50%' },\n      { value: 75, label: '75%', isLabelHidden: true },\n      { value: 100, label: '100%' }\n    ];\n\n    this.onChangeDiscrete = (value, inputValue, setLocalInputValue) => {\n\n      let newValue;\n      let newInputValue;\n\n      if (inputValue === undefined) { \n        const step = this.stepsDiscrete.find(step => step.value === value);\n        newInputValue = step ? step.label : 0;\n        newInputValue = Number(newInputValue);\n        newValue = value;\n      } else {\n        const maxValue =  Number(this.stepsDiscrete[this.stepsDiscrete.length -1].label);\n        if (inputValue > maxValue) {\n          newValue = Number(this.stepsDiscrete[this.stepsDiscrete.length -1].value);\n          newInputValue =  maxValue;\n          setLocalInputValue(maxValue);\n        } else {\n          const minValue =  Number(this.stepsDiscrete[0].label);\n          if (inputValue < minValue) {\n            newValue = Number(this.stepsDiscrete[0].value);\n            newInputValue =  minValue;\n            setLocalInputValue(minValue);\n          } else {\n            const stepIndex = this.stepsDiscrete.findIndex(step => Number(step.label) >= inputValue);\n            if (Number(this.stepsDiscrete[stepIndex].label) === inputValue) {\n              newValue = this.stepsDiscrete[stepIndex].value;\n              newInputValue = inputValue;\n            } else {\n              const midpoint = (Number(this.stepsDiscrete[stepIndex].label) + Number(this.stepsDiscrete[stepIndex - 1].label)) / 2;\n              if (midpoint > inputValue) {\n                newValue = this.stepsDiscrete[stepIndex - 1].value;\n                newInputValue = Number(this.stepsDiscrete[stepIndex - 1].label);\n              } else {\n                newValue = this.stepsDiscrete[stepIndex].value;\n                newInputValue = Number(this.stepsDiscrete[stepIndex].label);\n              }\n            }\n          }\n        }\n      }\n\n      this.setState({\n        inputValueDiscrete: newInputValue,\n        valueDiscrete: newValue\n      });\n    };\n\n    this.onChangePercent = (value, inputValue, setLocalInputValue) => {\n      let newValue;\n      let newInputValue;\n\n      if (inputValue === undefined) { \n        const step = this.stepsPercent.find(step => step.value === value);\n        newInputValue = step ? step.label.slice(0, -1) : 0;\n        newInputValue = Number(newInputValue);\n        newValue = value;\n      } else {\n        const maxValue =  Number(this.stepsPercent[this.stepsPercent.length -1].label.slice(0, -1));\n        if (inputValue > maxValue) {\n          newValue = Number(this.stepsPercent[this.stepsPercent.length -1].value);\n          newInputValue =  maxValue;\n          setLocalInputValue(maxValue);\n        } else {\n          const minValue =  Number(this.stepsPercent[0].label.slice(0, -1));\n          if (inputValue < minValue) {\n            newValue = minValue;\n            setLocalInputValue(minValue);\n          } else {\n            const stepIndex = this.stepsPercent.findIndex(step => Number(step.label.slice(0, -1)) >= inputValue);\n            if (Number(this.stepsPercent[stepIndex].label.slice(0, -1)) === inputValue) {\n              newValue = this.stepsPercent[stepIndex].value;\n              newInputValue = inputValue;\n            } else {\n              const midpoint = (Number(this.stepsPercent[stepIndex].label.slice(0, -1)) + Number(this.stepsPercent[stepIndex - 1].label.slice(0, -1))) / 2;\n              if (midpoint > inputValue) {\n                newValue = this.stepsPercent[stepIndex - 1].value;\n                newInputValue = Number(this.stepsPercent[stepIndex - 1].label.slice(0, -1));\n              } else {\n                newValue = this.stepsPercent[stepIndex].value;\n                newInputValue = Number(this.stepsPercent[stepIndex].label.slice(0, -1));\n              }\n            }\n          }\n        }\n      }\n      \n      this.setState({\n        inputValuePercent: newInputValue,\n        valuePercent: newValue\n      });\n    };\n\n    this.onChangeContinuous = (value, inputValue, setLocalInputValue) => { \n      let newValue;\n      if (inputValue === undefined) { \n        newValue = Math.floor(value);\n      } else {\n        if (inputValue > 100) {\n          newValue = 100;\n          setLocalInputValue(100);\n        } else if (inputValue < 0) {\n          newValue = 0;\n          setLocalInputValue(0);\n        } else {\n          newValue = Math.floor(inputValue);\n        }\n      }\n      this.setState({\n        inputValueContinuous: newValue,\n        valueContinuous: newValue\n      });\n    };\n  }\n\n  render() {\n    return (\n      <>\n        <Slider\n          value={this.state.valueDiscrete}\n          isInputVisible\n          inputValue={this.state.inputValueDiscrete}\n          customSteps={this.stepsDiscrete}\n          onChange={this.onChangeDiscrete}\n        />\n        <br />\n        <Slider\n          value={this.state.valuePercent}\n          isInputVisible\n          inputValue={this.state.inputValuePercent}\n          inputLabel=\"%\"\n          onChange={this.onChangePercent}\n          customSteps={this.stepsPercent}\n        />\n        <br />\n        <Slider\n          value={this.state.valueContinuous}\n          isInputVisible\n          inputValue={this.state.inputValueContinuous}\n          inputLabel=\"%\"\n          onChange={this.onChangeContinuous}\n        />\n      </>\n    );\n  }\n}","title":"Value input","lang":"js"}}>
      
    </Example>,
  'Thumb value input': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Slider } from '@patternfly/react-core';\n\nclass ThumbValueInput extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value: 50,\n      inputValue: 50\n    };\n\n    this.onChange = (value, inputValue, setLocalInputValue) => { \n      let newValue;\n      if (inputValue === undefined) { \n        newValue = Number(value);\n      } else {\n        if (inputValue > 100) {\n          newValue = 100;\n          setLocalInputValue(100);\n        } else if (inputValue < 0) {\n          newValue = 0;\n          setLocalInputValue(0);\n        } else {\n          newValue = Math.floor(inputValue);\n        }\n      }\n      this.setState({\n        value: newValue,\n        inputValue: newValue\n      });\n    };\n  }\n\n  render() {\n    return (\n      <Slider\n        value={this.state.value}\n        isInputVisible\n        inputValue={this.state.inputValue}\n        inputLabel=\"%\"\n        inputPosition=\"aboveThumb\"\n        onChange={this.onChange}\n      />\n    );\n  }\n}","title":"Thumb value input","lang":"js"}}>
      
    </Example>,
  'Actions': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Slider, Button, Text, TextVariants } from '@patternfly/react-core';\nimport MinusIcon from '@patternfly/react-icons/dist/esm/icons/minus-icon';\nimport PlusIcon from '@patternfly/react-icons/dist/esm/icons/plus-icon';\nimport LockIcon from '@patternfly/react-icons/dist/esm/icons/lock-icon';\nimport LockOpenIcon from '@patternfly/react-icons/dist/esm/icons/lock-open-icon';\n\nclass SliderActions extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value1: 50,\n      value2: 50,\n      inputValue: 50,\n      isDisabled: false\n    };\n\n    this.onChange1 = value => {\n      const newValue = Math.floor(Number(value));\n      this.setState({\n        value1: newValue\n      });\n    };\n\n    this.onChange2 =(value, inputValue, setLocalInputValue) => { \n      let newValue;\n      if (inputValue === undefined) { \n        newValue = Math.floor(Number(value));\n      } else {\n        if (inputValue > 100) {\n          newValue = 100;\n          setLocalInputValue(100);\n        } else if (inputValue < 0) {\n          newValue = 0;\n          setLocalInputValue(0);\n        } else {\n          newValue = Math.floor(inputValue);\n        }\n      }\n      this.setState({\n        value2: newValue,\n        inputValue: newValue\n      });\n    };\n\n    this.onClick = () => {\n      this.setState({\n        isDisabled: !this.state.isDisabled\n      });\n    };\n\n    this.onMinusClick = () => {\n      const newValue = this.state.value1 - 1;\n      if (newValue >= 0) {\n        this.setState({\n          value1: newValue\n        });\n      }\n    };\n\n    this.onPlusClick = () => {\n      const newValue = this.state.value1 + 1;\n      if (newValue <= 100) {\n        this.setState({\n          value1: newValue\n        });\n      }\n    };\n  }\n\n  render() {\n    const disabledAction = (\n      <Button variant=\"plain\" aria-label=\"Lock\" onClick={this.onClick}>\n        <LockIcon />\n      </Button>\n    );\n\n    const enabledAction = (\n      <Button variant=\"plain\" aria-label=\"Unlock\" onClick={this.onClick}>\n        <LockOpenIcon />\n      </Button>\n    );\n\n    return (\n      <>\n        <Text component={TextVariants.h3}>Slider value is: {this.state.value1}</Text>\n        <Slider\n          value={this.state.value1}\n          onChange={this.onChange1}\n          leftActions={\n            <Button variant=\"plain\" aria-label=\"Minus\" onClick={this.onMinusClick}>\n              <MinusIcon />\n            </Button>\n          }\n          rightActions={\n            <Button variant=\"plain\" aria-label=\"Plus\" onClick={this.onPlusClick}>\n              <PlusIcon />\n            </Button>\n          }\n        />\n        <br />\n        <br />\n        <Slider\n          value={this.state.value2}\n          inputValue={this.state.inputValue}\n          onChange={this.onChange2}\n          inputLabel=\"%\"\n          isInputVisible\n          isDisabled={this.state.isDisabled}\n          rightActions={this.state.isDisabled ? disabledAction : enabledAction}\n        />\n      </>\n    );\n  }\n}","title":"Actions","lang":"js"}}>
      
    </Example>,
  'Disabled': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Slider, Text, TextVariants } from '@patternfly/react-core';\n\nclass DiscreteInput extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value: 50\n    };\n\n    this.steps = [\n      { value: 0, label: '0' },\n      { value: 12.5, label: '1', isLabelHidden: true },\n      { value: 25, label: '2' },\n      { value: 37.5, label: '3', isLabelHidden: true },\n      { value: 50, label: '4' },\n      { value: 62.5, label: '5', isLabelHidden: true },\n      { value: 75, label: '6' },\n      { value: 87.5, label: '7', isLabelHidden: true },\n      { value: 100, label: '8' }\n    ];\n\n    this.onValueChange = value => {\n        this.setState({\n          value\n        });\n    };\n  }\n\n  render() {\n    const step = this.steps.find(step => step.value === this.state.value);\n    const displayValue = step ? step.label : 0;\n    return (\n      <>\n        <Text component={TextVariants.h3}>Slider value is: {displayValue}</Text>\n        <Slider isDisabled value={this.state.value} onChange={this.onValueChange} customSteps={this.steps} />\n      </>\n    );\n  }\n}","title":"Disabled","lang":"js"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Discrete"])}
    {React.createElement(pageData.examples["Continuous"])}
    {React.createElement(pageData.examples["Value input"])}
    {React.createElement(pageData.examples["Thumb value input"])}
    {React.createElement(pageData.examples["Actions"])}
    {React.createElement(pageData.examples["Disabled"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsSliderReactDocs';
Component.pageData = pageData;

export default Component;
