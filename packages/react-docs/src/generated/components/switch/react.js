import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Switch",
  "section": "components",
  "source": "react",
  "slug": "/components/switch/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/Switch/examples/Switch.md",
  "propComponents": [
    {
      "name": "Switch",
      "description": "",
      "props": [
        {
          "name": "aria-label",
          "type": "string",
          "description": "Adds accessible text to the switch, and should describe the isChecked=\"true\" state. When label is defined, aria-label should be set to the text string that is visible when isChecked is true.",
          "defaultValue": "''"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the switch"
        },
        {
          "name": "defaultChecked",
          "type": "boolean",
          "description": "Flag to set the default checked value of the switch when it is uncontrolled by React state.\nTo make the switch controlled instead use the isChecked prop, but do not use both."
        },
        {
          "name": "hasCheckIcon",
          "type": "boolean",
          "description": "Flag to show if the switch has a check icon."
        },
        {
          "name": "id",
          "type": "string",
          "description": "id for the label."
        },
        {
          "name": "isChecked",
          "type": "boolean",
          "description": "Flag to show if the switch is checked when it is controlled by React state.\nTo make the switch uncontrolled instead use the defaultChecked prop, but do not use both.",
          "defaultValue": "true"
        },
        {
          "name": "isDisabled",
          "type": "boolean",
          "description": "Flag to show if the switch is disabled.",
          "defaultValue": "false"
        },
        {
          "name": "isReversed",
          "type": "boolean",
          "description": "Flag to reverse the layout of toggle and label (toggle on right).",
          "defaultValue": "false"
        },
        {
          "name": "label",
          "type": "React.ReactNode",
          "description": "Text value for the visible label when on"
        },
        {
          "name": "labelOff",
          "type": "React.ReactNode",
          "description": "Text value for the visible label when off"
        },
        {
          "name": "onChange",
          "type": "(checked: boolean, event: React.FormEvent<HTMLInputElement>) => void",
          "description": "A callback for when the switch selection changes. (isChecked, event) => {}",
          "defaultValue": "() => undefined as any"
        }
      ]
    }
  ],
  "cssPrefix": [
    "pf-c-switch"
  ],
  "examples": [
    "Basic",
    "Reversed Layout",
    "Without label",
    "Checked with label",
    "Disabled",
    "Uncontrolled"
  ]
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Switch } from '@patternfly/react-core';\n\nclass SimpleSwitch extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      isChecked: true\n    };\n    this.handleChange = isChecked => {\n      this.setState({ isChecked });\n    };\n  }\n\n  render() {\n    const { isChecked } = this.state;\n    return (\n      <Switch\n        id=\"simple-switch\"\n        label=\"Message when on\"\n        labelOff=\"Message when off\"\n        isChecked={isChecked}\n        onChange={this.handleChange}\n      />\n    );\n  }\n}","title":"Basic","lang":"js"}}>
      
    </Example>,
  'Reversed Layout': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Switch } from '@patternfly/react-core';\n\nclass ReversedSwitch extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      isChecked: true\n    };\n    this.handleChange = isChecked => {\n      this.setState({ isChecked });\n    };\n  }\n\n  render() {\n    const { isChecked } = this.state;\n    return (\n      <Switch\n        id=\"reversed-switch\"\n        label=\"Message when on\"\n        labelOff=\"Message when off\"\n        isChecked={isChecked}\n        onChange={this.handleChange}\n        isReversed\n      />\n    );\n  }\n}","title":"Reversed Layout","lang":"js"}}>
      
    </Example>,
  'Without label': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Switch } from '@patternfly/react-core';\n\nclass NoLabelSwitch extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      isChecked: true\n    };\n    this.handleChange = isChecked => {\n      this.setState({ isChecked });\n    };\n  }\n\n  render() {\n    const { isChecked } = this.state;\n    return (\n      <Switch id=\"no-label-switch-on\" aria-label=\"Message when on\" isChecked={isChecked} onChange={this.handleChange} />\n    );\n  }\n}","title":"Without label","lang":"js"}}>
      
    </Example>,
  'Checked with label': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Switch } from '@patternfly/react-core';\n\nclass CheckedWithLabelSwitch extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      isChecked: true\n    };\n    this.handleChange = isChecked => {\n      this.setState({ isChecked });\n    };\n  }\n\n  render() {\n    const { isChecked } = this.state;\n    return (\n      <Switch\n        label=\"Message when on\"\n        labelOff=\"Message when off\"\n        id=\"checked-with-label-switch-on\"\n        aria-label=\"Message when on\"\n        isChecked={isChecked}\n        hasCheckIcon\n        onChange={this.handleChange}\n      />\n    );\n  }\n}","title":"Checked with label","lang":"js"}}>
      
    </Example>,
  'Disabled': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Switch } from '@patternfly/react-core';\n\nconst Disabled = () => (\n  <React.Fragment>\n    <Switch\n      id=\"disabled-switch-on\"\n      aria-label=\"Message when on\"\n      label=\"Message when on\"\n      labelOff=\"Message when off\"\n      isChecked\n      isDisabled\n    />\n    <br />\n    <Switch\n      id=\"disabled-switch-off\"\n      aria-label=\"Message when on\"\n      label=\"Message when on\"\n      labelOff=\"Message when off\"\n      isChecked={false}\n      isDisabled\n    />\n    <br />\n    <Switch id=\"disabled-no-label-switch-on\" aria-label=\"Message when on\" isChecked isDisabled />\n    <br />\n    <Switch id=\"disabled-no-label-switch-off\" aria-label=\"Message when on\" isChecked={false} isDisabled />\n  </React.Fragment>\n)","title":"Disabled","lang":"js"}}>
      
    </Example>,
  'Uncontrolled': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Switch } from '@patternfly/react-core';\n\nconst Uncontrolled = () => (\n  <React.Fragment>\n    <Switch id=\"uncontrolled-switch-on\" label=\"Message when on\" labelOff=\"Message when off\" defaultChecked={false} />\n    <br />\n    <Switch id=\"uncontrolled-no-label-switch-on\" aria-label=\"Message when on\" defaultChecked={true} />\n  </React.Fragment>\n)","title":"Uncontrolled","lang":"js"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["Reversed Layout"])}
    {React.createElement(pageData.examples["Without label"])}
    {React.createElement(pageData.examples["Checked with label"])}
    {React.createElement(pageData.examples["Disabled"])}
    {React.createElement(pageData.examples["Uncontrolled"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsSwitchReactDocs';
Component.pageData = pageData;

export default Component;
