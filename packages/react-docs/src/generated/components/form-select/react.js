import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Form select",
  "section": "components",
  "source": "react",
  "slug": "/components/form-select/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/FormSelect/examples/FormSelect.md",
  "propComponents": [
    {
      "name": "FormSelect",
      "description": "",
      "props": [
        {
          "name": "aria-label",
          "type": "string",
          "description": "Custom flag to show that the FormSelect requires an associated id or aria-label."
        },
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "content rendered inside the FormSelect",
          "required": true
        },
        {
          "name": "className",
          "type": "string",
          "description": "additional classes added to the FormSelect control",
          "defaultValue": "''"
        },
        {
          "name": "isDisabled",
          "type": "boolean",
          "description": "Flag indicating the FormSelect is disabled",
          "defaultValue": "false"
        },
        {
          "name": "isIconSprite",
          "type": "boolean",
          "description": "Use the external file instead of a data URI",
          "defaultValue": "false"
        },
        {
          "name": "isRequired",
          "type": "boolean",
          "description": "Sets the FormSelect required.",
          "defaultValue": "false"
        },
        {
          "name": "onBlur",
          "type": "(event: React.FormEvent<HTMLSelectElement>) => void",
          "description": "Optional callback for updating when selection loses focus",
          "defaultValue": "(): any => undefined"
        },
        {
          "name": "onChange",
          "type": "(value: string, event: React.FormEvent<HTMLSelectElement>) => void",
          "description": "Optional callback for updating when selection changes",
          "defaultValue": "(): any => undefined"
        },
        {
          "name": "onFocus",
          "type": "(event: React.FormEvent<HTMLSelectElement>) => void",
          "description": "Optional callback for updating when selection gets focus",
          "defaultValue": "(): any => undefined"
        },
        {
          "name": "ouiaSafe",
          "type": "No type info",
          "defaultValue": "true"
        },
        {
          "name": "validated",
          "type": "'success' | 'warning' | 'error' | 'default'",
          "description": "Value to indicate if the select is modified to show that validation state.\nIf set to success, select will be modified to indicate valid state.\nIf set to error, select will be modified to indicate error state.",
          "defaultValue": "'default'"
        },
        {
          "name": "value",
          "type": "any",
          "description": "value of selected option",
          "defaultValue": "''"
        }
      ]
    },
    {
      "name": "FormSelectOption",
      "description": "",
      "props": [
        {
          "name": "className",
          "type": "string",
          "description": "additional classes added to the Select Option",
          "defaultValue": "''"
        },
        {
          "name": "isDisabled",
          "type": "boolean",
          "description": "flag indicating if the option is disabled",
          "defaultValue": "false"
        },
        {
          "name": "isPlaceholder",
          "type": "boolean",
          "description": "flag indicating if option will have placeholder styling applied when selected *",
          "defaultValue": "false"
        },
        {
          "name": "label",
          "type": "string",
          "description": "the label for the option",
          "required": true
        },
        {
          "name": "value",
          "type": "any",
          "description": "the value for the option",
          "defaultValue": "''"
        }
      ]
    },
    {
      "name": "FormSelectOptionGroup",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "content rendered inside the Select Option Group",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "additional classes added to the Select Option",
          "defaultValue": "''"
        },
        {
          "name": "isDisabled",
          "type": "boolean",
          "description": "flag indicating if the Option Group is disabled",
          "defaultValue": "false"
        },
        {
          "name": "label",
          "type": "string",
          "description": "the label for the option",
          "required": true
        }
      ]
    }
  ],
  "cssPrefix": [
    "pf-c-form-control"
  ],
  "examples": [
    "Basic",
    "Validated",
    "Disabled",
    "Grouped",
    "Icon sprite variant"
  ]
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { FormSelect, FormSelectOption } from '@patternfly/react-core';\n\nexport const FormSelectBasic: React.FunctionComponent = () => {\n  const [formSelectValue, setFormSelectValue] = React.useState('mrs');\n\n  const onChange = (value: string) => {\n    setFormSelectValue(value);\n  };\n\n  const options = [\n    { value: 'please choose', label: 'Select one', disabled: true },\n    { value: 'mr', label: 'Mr', disabled: false },\n    { value: 'miss', label: 'Miss', disabled: false },\n    { value: 'mrs', label: 'Mrs', disabled: false },\n    { value: 'ms', label: 'Ms', disabled: false },\n    { value: 'dr', label: 'Dr', disabled: false },\n    { value: 'other', label: 'Other', disabled: false }\n  ];\n\n  return (\n    <FormSelect value={formSelectValue} onChange={onChange} aria-label=\"FormSelect Input\">\n      {options.map((option, index) => (\n        <FormSelectOption isDisabled={option.disabled} key={index} value={option.value} label={option.label} />\n      ))}\n    </FormSelect>\n  );\n};\n","title":"Basic","lang":"ts"}}>
      
    </Example>,
  'Validated': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Form, FormGroup, FormSelect, FormSelectOption, ValidatedOptions } from '@patternfly/react-core';\n\nexport const FormSelectValidated: React.FunctionComponent = () => {\n  const [formValue, setFormValue] = React.useState('');\n  const [invalidText, setInvalidText] = React.useState('You must choose something');\n  const [helperText, setHelperText] = React.useState('');\n  const [validated, setValidated] = React.useState<ValidatedOptions>(ValidatedOptions.default);\n\n  const simulateNetworkCall = (callback: () => void) => {\n    setTimeout(callback, 2000);\n  };\n\n  const onChange = (value: string) => {\n    setFormValue(value);\n    setValidated(ValidatedOptions.default);\n    setHelperText('Validating...');\n    simulateNetworkCall(() => {\n      if (value === '3') {\n        setValidated(ValidatedOptions.success);\n        setHelperText('You chose wisely');\n      } else if (value === '') {\n        setValidated(ValidatedOptions.warning);\n        setHelperText('You must select a value');\n      } else {\n        setValidated(ValidatedOptions.error);\n        setInvalidText('You must chose Three (thought that was obvious)');\n      }\n    });\n  };\n\n  const options = [\n    { value: '', label: 'Select a number', disabled: false, isPlaceholder: true },\n    { value: '1', label: 'One', disabled: false, isPlaceholder: false },\n    { value: '2', label: 'Two', disabled: false, isPlaceholder: false },\n    { value: '3', label: 'Three - the only valid option', disabled: false, isPlaceholder: false }\n  ];\n\n  return (\n    <Form>\n      <FormGroup\n        label=\"Selection:\"\n        type=\"string\"\n        helperText={helperText}\n        helperTextInvalid={invalidText}\n        fieldId=\"selection\"\n        validated={validated}\n      >\n        <FormSelect\n          id=\"selection\"\n          validated={validated}\n          value={formValue}\n          onChange={onChange}\n          aria-label=\"FormSelect Input\"\n        >\n          {options.map((option, index) => (\n            <FormSelectOption\n              isDisabled={option.disabled}\n              key={index}\n              value={option.value}\n              label={option.label}\n              isPlaceholder={option.isPlaceholder}\n            />\n          ))}\n        </FormSelect>\n      </FormGroup>\n    </Form>\n  );\n};\n","title":"Validated","lang":"ts"}}>
      
    </Example>,
  'Disabled': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { FormSelect, FormSelectOption } from '@patternfly/react-core';\n\nexport const FormSelectDisabled: React.FunctionComponent = () => {\n  const [formSelectValue, setFormSelectValue] = React.useState('mrs');\n\n  const onChange = (value: string) => {\n    setFormSelectValue(value);\n  };\n\n  const options = [\n    { value: 'please choose', label: 'Select one', disabled: true },\n    { value: 'mr', label: 'Mr', disabled: false },\n    { value: 'miss', label: 'Miss', disabled: false },\n    { value: 'mrs', label: 'Mrs', disabled: false },\n    { value: 'ms', label: 'Ms', disabled: false },\n    { value: 'dr', label: 'Dr', disabled: false },\n    { value: 'other', label: 'Other', disabled: false }\n  ];\n\n  return (\n    <FormSelect value={formSelectValue} onChange={onChange} isDisabled aria-label=\"FormSelect Input\">\n      {options.map((option, index) => (\n        <FormSelectOption isDisabled={option.disabled} key={index} value={option.value} label={option.label} />\n      ))}\n    </FormSelect>\n  );\n};\n","title":"Disabled","lang":"ts"}}>
      
    </Example>,
  'Grouped': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { FormSelect, FormSelectOption, FormSelectOptionGroup } from '@patternfly/react-core';\n\nexport const FormSelectGrouped: React.FunctionComponent = () => {\n  const [formSelectValue, setFormSelectValue] = React.useState('2');\n\n  const onChange = (value: string) => {\n    setFormSelectValue(value);\n  };\n\n  const groups = [\n    {\n      groupLabel: 'Group1',\n      disabled: false,\n      options: [\n        { value: '1', label: 'The first option', disabled: false },\n        { value: '2', label: 'Second option is selected by default', disabled: false }\n      ]\n    },\n    {\n      groupLabel: 'Group2',\n      disabled: false,\n      options: [\n        { value: '3', label: 'The third option', disabled: false },\n        { value: '4', label: 'The fourth option', disabled: false }\n      ]\n    },\n    {\n      groupLabel: 'Group3',\n      disabled: true,\n      options: [\n        { value: '5', label: 'The fifth option', disabled: false },\n        { value: '6', label: 'The sixth option', disabled: false }\n      ]\n    }\n  ];\n\n  return (\n    <FormSelect value={formSelectValue} onChange={onChange} aria-label=\"FormSelect Input\">\n      {groups.map((group, index) => (\n        <FormSelectOptionGroup isDisabled={group.disabled} key={index} label={group.groupLabel}>\n          {group.options.map((option, i) => (\n            <FormSelectOption isDisabled={option.disabled} key={i} value={option.value} label={option.label} />\n          ))}\n        </FormSelectOptionGroup>\n      ))}\n    </FormSelect>\n  );\n};\n","title":"Grouped","lang":"ts"}}>
      
    </Example>,
  'Icon sprite variant': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Form, FormGroup, FormSelect, FormSelectOption, ValidatedOptions } from '@patternfly/react-core';\n\nexport const FormSelectIconSpriteVariant: React.FunctionComponent = () => {\n  const [formSelectValue, setFormSelectValue] = React.useState('');\n  const [validated, setValidated] = React.useState<ValidatedOptions>(ValidatedOptions.default);\n  const [invalidText, setInvalidText] = React.useState('You must choose something');\n  const [helperText, setHelperText] = React.useState('');\n\n  const onChange = (value: string) => {\n    if (value === '3') {\n      setFormSelectValue(value);\n      setValidated(ValidatedOptions.success);\n      setHelperText('You chose wisely');\n    } else if (value === '') {\n      setFormSelectValue(value);\n      setValidated(ValidatedOptions.warning);\n      setHelperText('You must select a value');\n    } else {\n      setFormSelectValue(value);\n      setValidated(ValidatedOptions.error);\n      setInvalidText('You must chose Three (thought that was obvious)');\n    }\n  };\n\n  const options = [\n    { value: '', label: 'Select a number', disabled: false, isPlaceholder: true },\n    { value: '1', label: 'One', disabled: false, isPlaceholder: false },\n    { value: '2', label: 'Two', disabled: false, isPlaceholder: false },\n    { value: '3', label: 'Three - the only valid option', disabled: false, isPlaceholder: false }\n  ];\n\n  return (\n    <Form>\n      <FormGroup\n        label=\"Selection:\"\n        type=\"string\"\n        helperText={helperText}\n        helperTextInvalid={invalidText}\n        fieldId=\"selection\"\n        validated={validated}\n      >\n        <FormSelect\n          validated={validated}\n          isIconSprite\n          value={formSelectValue}\n          onChange={onChange}\n          aria-label=\"FormSelect Input\"\n        >\n          {options.map((option, index) => (\n            <FormSelectOption isDisabled={option.disabled} key={index} value={option.value} label={option.label} />\n          ))}\n        </FormSelect>\n      </FormGroup>\n    </Form>\n  );\n};\n","title":"Icon sprite variant","lang":"ts","isBeta":true}}>
      
      <p {...{"className":"ws-p"}}>
        
        <strong>
          {`Note:`}
        </strong>
        {` The dropdown toggle icon is applied as a background image to the form element. By default, the image URLs for these icons are data URIs. However, there may be cases where data URIs are not ideal, such as in an application with a content security policy that disallows data URIs for security reasons. The `}
        
        <code {...{"className":"ws-code"}}>
          {`isIconSprite`}
        </code>
        {` variation changes the icon source to an external SVG file that serves as a sprite for all of the supported icons.`}
      </p>
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["Validated"])}
    {React.createElement(pageData.examples["Disabled"])}
    {React.createElement(pageData.examples["Grouped"])}
    {React.createElement(pageData.examples["Icon sprite variant"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsFormSelectReactDocs';
Component.pageData = pageData;

export default Component;
