import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import '../../../../../react-core/src/components/Checkbox/examples/./checkbox.css';
const pageData = {
  "id": "Checkbox",
  "section": "components",
  "source": "react",
  "slug": "/components/checkbox/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/Checkbox/examples/Checkbox.md",
  "propComponents": [
    {
      "name": "Checkbox",
      "description": "",
      "props": [
        {
          "name": "aria-label",
          "type": "string",
          "description": "Aria-label of the checkbox."
        },
        {
          "name": "body",
          "type": "React.ReactNode",
          "description": "Body text of the checkbox"
        },
        {
          "name": "checked",
          "type": "boolean",
          "description": ""
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the Checkbox.",
          "defaultValue": "''"
        },
        {
          "name": "component",
          "type": "React.ElementType",
          "description": "Sets the input wrapper component to render. Defaults to <div>",
          "defaultValue": "'div'"
        },
        {
          "name": "description",
          "type": "React.ReactNode",
          "description": "Description text of the checkbox."
        },
        {
          "name": "id",
          "type": "string",
          "description": "Id of the checkbox.",
          "required": true
        },
        {
          "name": "isChecked",
          "type": "boolean | null",
          "description": "Flag to show if the Checkbox is checked. If null, the checkbox will be indeterminate (partially checked).",
          "defaultValue": "false"
        },
        {
          "name": "isDisabled",
          "type": "boolean",
          "description": "Flag to show if the Checkbox is disabled.",
          "defaultValue": "false"
        },
        {
          "name": "isValid",
          "type": "boolean",
          "description": "Flag to show if the Checkbox selection is valid or invalid.",
          "defaultValue": "true"
        },
        {
          "name": "label",
          "type": "React.ReactNode",
          "description": "Label text of the checkbox."
        },
        {
          "name": "onChange",
          "type": "(checked: boolean, event: React.FormEvent<HTMLInputElement>) => void",
          "description": "A callback for when the Checkbox selection changes.",
          "defaultValue": "() => {}"
        },
        {
          "name": "ouiaSafe",
          "type": "No type info",
          "defaultValue": "true"
        }
      ]
    }
  ],
  "cssPrefix": [
    "pf-c-check"
  ],
  "examples": [
    "Controlled",
    "Uncontrolled",
    "Disabled",
    "Checkbox with description",
    "Checkbox with body",
    "Checkbox with description and body",
    "Standalone input"
  ]
};
pageData.examples = {
  'Controlled': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Checkbox } from '@patternfly/react-core';\n\nexport const CheckboxControlled: React.FunctionComponent = () => {\n  const [isChecked1, setIsChecked1] = React.useState<boolean>(false);\n  const [isChecked2, setIsChecked2] = React.useState<boolean>(false);\n  const [isChecked3, setIsChecked3] = React.useState<boolean>(false);\n  const [isChecked4, setIsChecked4] = React.useState<boolean>(false);\n\n  const handleChange = (checked: boolean, event: React.FormEvent<HTMLInputElement>) => {\n    const target = event.currentTarget;\n    const name = target.name;\n\n    switch (name) {\n      case 'check1':\n        setIsChecked1(checked);\n        break;\n      case 'check2':\n        setIsChecked2(checked);\n        break;\n      case 'check3':\n        setIsChecked3(checked);\n        break;\n      case 'check4':\n        setIsChecked4(checked);\n        break;\n      default:\n        // eslint-disable-next-line no-console\n        console.log(name);\n    }\n  };\n\n  React.useEffect(() => {\n    if (isChecked1 !== null) {\n      setIsChecked2(isChecked1);\n      setIsChecked3(isChecked1);\n    }\n  }, [isChecked1]);\n\n  React.useEffect(() => {\n    setIsChecked1((isChecked2 && isChecked3) || (isChecked2 || isChecked3 ? null : false));\n  }, [isChecked2, isChecked3]);\n\n  return (\n    <React.Fragment>\n      <Checkbox\n        label=\"Parent CheckBox\"\n        isChecked={isChecked1}\n        onChange={handleChange}\n        id=\"controlled-check-1\"\n        name=\"check1\"\n      />\n      <Checkbox\n        className=\"nested\"\n        label=\"Child CheckBox 1\"\n        isChecked={isChecked2}\n        onChange={handleChange}\n        id=\"controlled-check-2\"\n        name=\"check2\"\n      />\n      <Checkbox\n        className=\"nested\"\n        label=\"Child CheckBox 2\"\n        isChecked={isChecked3}\n        onChange={handleChange}\n        id=\"controlled-check-3\"\n        name=\"check3\"\n      />\n      <Checkbox\n        label=\"Controlled CheckBox\"\n        isChecked={isChecked4}\n        onChange={handleChange}\n        id=\"controlled-check-4\"\n        name=\"check4\"\n      />\n    </React.Fragment>\n  );\n};\n","title":"Controlled","lang":"ts"}}>
      
    </Example>,
  'Uncontrolled': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Checkbox } from '@patternfly/react-core';\n\nexport const CheckboxUncontrolled: React.FunctionComponent = () => (\n  <React.Fragment>\n    <Checkbox label=\"Uncontrolled CheckBox 1\" id=\"uncontrolled-check-1\" />\n    <Checkbox label=\"Uncontrolled CheckBox 2\" id=\"uncontrolled-check-2\" />\n  </React.Fragment>\n);\n","title":"Uncontrolled","lang":"ts"}}>
      
    </Example>,
  'Disabled': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Checkbox } from '@patternfly/react-core';\n\nexport const CheckboxDisabled: React.FunctionComponent = () => (\n  <React.Fragment>\n    <Checkbox id=\"disabled-check-1\" label=\"Disabled CheckBox 1\" defaultChecked isDisabled />\n    <Checkbox id=\"disabled-check-2\" label=\"Disabled CheckBox 2\" isDisabled />\n  </React.Fragment>\n);\n","title":"Disabled","lang":"ts"}}>
      
    </Example>,
  'Checkbox with description': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Checkbox } from '@patternfly/react-core';\n\nexport const CheckboxWithDescription: React.FunctionComponent = () => (\n  <Checkbox\n    id=\"description-check-1\"\n    label=\"Checkbox with description\"\n    description=\"Single-tenant cloud service hosted and managed by Red Hat that offers high-availability enterprise-grade clusters in a virtual private cloud on AWS or GCP.\"\n  />\n);\n","title":"Checkbox with description","lang":"ts"}}>
      
    </Example>,
  'Checkbox with body': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Checkbox } from '@patternfly/react-core';\n\nexport const CheckboxWithBody: React.FunctionComponent = () => (\n  <Checkbox id=\"body-check-1\" label=\"Checkbox with body\" body=\"This is where custom content goes.\" />\n);\n","title":"Checkbox with body","lang":"ts"}}>
      
    </Example>,
  'Checkbox with description and body': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Checkbox } from '@patternfly/react-core';\n\nexport const CheckboxWithDescriptionBody: React.FunctionComponent = () => (\n  <Checkbox\n    id=\"description-body-check\"\n    label=\"Checkbox with description and body\"\n    description=\"Single-tenant cloud service hosted and managed by Red Hat that offers high-availability enterprise-grade clusters in a virtual private cloud on AWS or GCP.\"\n    body=\"This is where custom content goes.\"\n  />\n);\n","title":"Checkbox with description and body","lang":"ts"}}>
      
    </Example>,
  'Standalone input': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Checkbox } from '@patternfly/react-core';\n\nexport const CheckboxStandaloneInput: React.FunctionComponent = () => (\n  <Checkbox id=\"standalone-check\" name=\"standlone-check\" aria-label=\"Standalone input\" />\n);\n","title":"Standalone input","lang":"ts"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Controlled"])}
    {React.createElement(pageData.examples["Uncontrolled"])}
    {React.createElement(pageData.examples["Disabled"])}
    {React.createElement(pageData.examples["Checkbox with description"])}
    {React.createElement(pageData.examples["Checkbox with body"])}
    {React.createElement(pageData.examples["Checkbox with description and body"])}
    {React.createElement(pageData.examples["Standalone input"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsCheckboxReactDocs';
Component.pageData = pageData;

export default Component;
