import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Radio",
  "section": "components",
  "source": "react",
  "slug": "/components/radio/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/Radio/examples/Radio.md",
  "propComponents": [
    {
      "name": "Radio",
      "description": "",
      "props": [
        {
          "name": "aria-label",
          "type": "string",
          "description": "Aria label for the radio."
        },
        {
          "name": "body",
          "type": "React.ReactNode",
          "description": "Body of the radio."
        },
        {
          "name": "checked",
          "type": "boolean",
          "description": "Flag to show if the radio is checked."
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the radio.",
          "defaultValue": "''"
        },
        {
          "name": "description",
          "type": "React.ReactNode",
          "description": "Description text of the radio."
        },
        {
          "name": "id",
          "type": "string",
          "description": "Id of the radio.",
          "required": true
        },
        {
          "name": "isChecked",
          "type": "boolean",
          "description": "Flag to show if the radio is checked."
        },
        {
          "name": "isDisabled",
          "type": "boolean",
          "description": "Flag to show if the radio is disabled.",
          "defaultValue": "false"
        },
        {
          "name": "isLabelBeforeButton",
          "type": "boolean",
          "description": "Flag to show if the radio label is shown before the radio button."
        },
        {
          "name": "isLabelWrapped",
          "type": "boolean",
          "description": "Flag to show if the radio label is wrapped on small screen."
        },
        {
          "name": "isValid",
          "type": "boolean",
          "description": "Flag to show if the radio selection is valid or invalid.",
          "defaultValue": "true"
        },
        {
          "name": "label",
          "type": "React.ReactNode",
          "description": "Label text of the radio."
        },
        {
          "name": "name",
          "type": "string",
          "description": "Name for group of radios",
          "required": true
        },
        {
          "name": "onChange",
          "type": "(checked: boolean, event: React.FormEvent<HTMLInputElement>) => void",
          "description": "A callback for when the radio selection changes.",
          "defaultValue": "() => {}"
        }
      ]
    }
  ],
  "cssPrefix": [
    "pf-c-radio"
  ],
  "examples": [
    "Controlled",
    "Uncontrolled",
    "Reversed",
    "Label wraps",
    "Disabled",
    "With description",
    "With body",
    "With description and body",
    "Standalone input"
  ]
};
pageData.examples = {
  'Controlled': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Radio } from '@patternfly/react-core';\n\nclass ControlledRadio extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      check1: false,\n    };\n\n    this.handleChange = (_, event) => {\n      const { value } = event.currentTarget;\n      this.setState({ [value]: true });\n    };\n  }\n\n  render() {\n    return (\n      <React.Fragment>\n        <Radio\n          isChecked={this.state.check1}\n          name=\"radio-1\"\n          onChange={this.handleChange}\n          label=\"Controlled radio\"\n          id=\"radio-controlled\"\n          value=\"check1\"\n        />\n      </React.Fragment>\n    );\n  }\n}","title":"Controlled","lang":"js"}}>
      
    </Example>,
  'Uncontrolled': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Radio } from '@patternfly/react-core';\n\nconst Uncontrolled = () => <Radio label=\"Uncontrolled radio example\" id=\"radio-uncontrolled\" name=\"radio-2\" />","title":"Uncontrolled","lang":"js"}}>
      
    </Example>,
  'Reversed': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Radio } from '@patternfly/react-core';\n\nconst Reversed = () => <Radio isLabelBeforeButton label=\"Reversed radio example\" id=\"radio-reversed\" name=\"radio-3\" />","title":"Reversed","lang":"js"}}>
      
    </Example>,
  'Label wraps': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Radio } from '@patternfly/react-core';\n\nconst LabelWraps = () => <Radio isLabelWrapped label=\"Label wraps input example\" id=\"radio-label-wraps-input\" name=\"radio-4\" />","title":"Label wraps","lang":"js"}}>
      
    </Example>,
  'Disabled': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Radio } from '@patternfly/react-core';\n\nconst Disabled = () => (\n  <React.Fragment>\n    <Radio id=\"radio-disabled\" label=\"Disabled radio example\" isDisabled name=\"radio-5\" />\n    <Radio id=\"radio-disabled-checked\" defaultChecked label=\"Disabled and checked radio example\" isDisabled name=\"radio-6\" />\n  </React.Fragment>\n)","title":"Disabled","lang":"js"}}>
      
    </Example>,
  'With description': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Radio } from '@patternfly/react-core';\n\nconst WithDescription = () => <Radio id=\"radio-with-description\" label=\"Radio with description example\" description=\"Single-tenant cloud service hosted and managed by Red Hat that offers high-availability enterprise-grade clusters in a virtual private cloud on AWS or GCP.\" />","title":"With description","lang":"js"}}>
      
    </Example>,
  'With body': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Radio } from '@patternfly/react-core';\n\nconst WithBody = () => <Radio id=\"radio-with-body\" label=\"Radio with body\" body=\"This is where custom content goes.\" />","title":"With body","lang":"js"}}>
      
    </Example>,
  'With description and body': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Radio } from '@patternfly/react-core';\n\nconst WithDescriptionAndBody = () => <Radio id=\"radio-description-body\" label=\"Radio with description and body\" description=\"Single-tenant cloud service hosted and managed by Red Hat that offers high-availability enterprise-grade clusters in a virtual private cloud on AWS or GCP.\" body=\"This is where custom content goes.\" />","title":"With description and body","lang":"js"}}>
      
    </Example>,
  'Standalone input': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Radio } from '@patternfly/react-core';\n\nconst StandaloneInput = () => <Radio id=\"radio-standalone\" aria-label=\"Standalone input\" name=\"exampleRadioStandalone\"/>","title":"Standalone input","lang":"js"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Controlled"])}
    {React.createElement(pageData.examples["Uncontrolled"])}
    {React.createElement(pageData.examples["Reversed"])}
    {React.createElement(pageData.examples["Label wraps"])}
    {React.createElement(pageData.examples["Disabled"])}
    {React.createElement(pageData.examples["With description"])}
    {React.createElement(pageData.examples["With body"])}
    {React.createElement(pageData.examples["With description and body"])}
    {React.createElement(pageData.examples["Standalone input"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsRadioReactDocs';
Component.pageData = pageData;

export default Component;
