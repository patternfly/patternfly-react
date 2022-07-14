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
    "Invalid",
    "Validated",
    "Disabled",
    "Grouped",
    "Icon sprite variant"
  ]
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { FormSelect, FormSelectOption, FormSelectOptionGroup } from '@patternfly/react-core';\n\nclass FormSelectInput extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value: 'mrs'\n    };\n    this.onChange = (value, event) => {\n      this.setState({ value });\n    };\n    this.options = [\n      { value: 'please choose', label: 'Select one', disabled: true },\n      { value: 'mr', label: 'Mr', disabled: false },\n      { value: 'miss', label: 'Miss', disabled: false },\n      { value: 'mrs', label: 'Mrs', disabled: false },\n      { value: 'ms', label: 'Ms', disabled: false },\n      { value: 'dr', label: 'Dr', disabled: false },\n      { value: 'other', label: 'Other', disabled: false }\n    ];\n  }\n\n  render() {\n    return (\n      <FormSelect value={this.state.value} onChange={this.onChange} aria-label=\"FormSelect Input\">\n        {this.options.map((option, index) => (\n          <FormSelectOption isDisabled={option.disabled} key={index} value={option.value} label={option.label} />\n        ))}\n      </FormSelect>\n    );\n  }\n}","title":"Basic","lang":"js"}}>
      
    </Example>,
  'Invalid': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { FormSelect, FormSelectOption, FormSelectOptionGroup, ValidatedOptions } from '@patternfly/react-core';\n\nclass FormSelectInputInvalid extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value: '',\n      validated: ValidatedOptions.default\n    };\n    this.isEmpty = () => this.state.value !== '';\n    this.onChange = (value, event) => {\n      const validated = this.isEmpty() && ValidatedOptions.error\n      this.setState({ value, validated });\n    };\n    this.options = [\n      { value: '', label: 'Select a number', disabled: false, isPlaceholder: true },\n      { value: '1', label: 'One', disabled: false, isPlaceholder: false },\n      { value: '2', label: 'Two', disabled: false, isPlaceholder: false  },\n      { value: '3', label: 'Three', disabled: false, isPlaceholder: false  }\n    ];\n  }\n\n  render() {\n    const { value, validated } = this.state;\n\n    return (\n      <FormSelect\n        validated={validated}\n        value={value}\n        onChange={this.onChange}\n        aria-label=\"FormSelect Input\"\n      >\n        {this.options.map((option, index) => (\n          <FormSelectOption isDisabled={option.disabled} key={index} value={option.value} label={option.label} isPlaceholder={option.isPlaceholder} />\n        ))}\n      </FormSelect>\n    );\n  }\n}","title":"Invalid","lang":"js"}}>
      
    </Example>,
  'Validated': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Form, FormGroup, FormSelect, FormSelectOption, FormSelectOptionGroup, ValidatedOptions } from '@patternfly/react-core';\n\nclass FormSelectInputInvalid extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value: '',\n      invalidText: 'You must choose something',\n      validated: ValidatedOptions.default\n    };\n\n    this.simulateNetworkCall = callback => {\n      setTimeout(callback, 2000);\n    };\n\n    this.onChange = (value, event) => {\n      this.setState(\n        { value, validated: ValidatedOptions.default, helperText: 'Validating...' },\n        this.simulateNetworkCall(() => {\n          if (value === '3') {\n            this.setState({ validated: ValidatedOptions.success, helperText: 'You chose wisely' });\n          } else if (value === '') {\n              this.setState({ validated: ValidatedOptions.warning, helperText: 'You must select a value' });\n          } else {\n            this.setState({ validated: ValidatedOptions.error, invalidText: 'You must chose Three (thought that was obvious)' });\n          }\n        })\n      );\n    };\n\n    this.options = [\n      { value: '', label: 'Select a number', disabled: false, isPlaceholder: true  },\n      { value: '1', label: 'One', disabled: false, isPlaceholder: false  },\n      { value: '2', label: 'Two', disabled: false, isPlaceholder: false  },\n      { value: '3', label: 'Three - the only valid option', disabled: false, isPlaceholder: false  }\n    ];\n  }\n\n  render() {\n    const { value, validated, helperText, invalidText } = this.state;\n    return (\n      <Form>\n        <FormGroup\n          label=\"Selection:\"\n          type=\"string\"\n          helperText={helperText}\n          helperTextInvalid={invalidText}\n          fieldId=\"selection\"\n          validated={validated}\n        >\n          <FormSelect\n            id=\"selection\"\n            validated={validated}\n            value={value}\n            onChange={this.onChange}\n            aria-label=\"FormSelect Input\"\n          >\n            {this.options.map((option, index) => (\n              <FormSelectOption isDisabled={option.disabled} key={index} value={option.value} label={option.label} isPlaceholder={option.isPlaceholder} />\n            ))}\n          </FormSelect>\n        </FormGroup>\n      </Form>\n    );\n  }\n}","title":"Validated","lang":"js"}}>
      
    </Example>,
  'Disabled': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { FormSelect, FormSelectOption, FormSelectOptionGroup } from '@patternfly/react-core';\n\nclass FormSelectInputDisabled extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value: 'mrs'\n    };\n    this.onChange = (value, event) => {\n      this.setState({ value });\n    };\n    this.options = [\n      { value: 'please choose', label: 'Select one', disabled: true },\n      { value: 'mr', label: 'Mr', disabled: false },\n      { value: 'miss', label: 'Miss', disabled: false },\n      { value: 'mrs', label: 'Mrs', disabled: false },\n      { value: 'ms', label: 'Ms', disabled: false },\n      { value: 'dr', label: 'Dr', disabled: false },\n      { value: 'other', label: 'Other', disabled: false }\n    ];\n  }\n\n  render() {\n    return (\n      <FormSelect value={this.state.value} onChange={this.onChange} isDisabled aria-label=\"FormSelect Input\">\n        {this.options.map((option, index) => (\n          <FormSelectOption isDisabled={option.disabled} key={index} value={option.value} label={option.label} />\n        ))}\n      </FormSelect>\n    );\n  }\n}","title":"Disabled","lang":"js"}}>
      
    </Example>,
  'Grouped': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { FormSelect, FormSelectOption, FormSelectOptionGroup } from '@patternfly/react-core';\n\nclass FormSelectInputGrouped extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value: '2'\n    };\n    this.onChange = (value, event) => {\n      this.setState({ value });\n    };\n    this.groups = [\n      {\n        groupLabel: 'Group1',\n        disabled: false,\n        options: [\n          { value: '1', label: 'The first option', disabled: false },\n          { value: '2', label: 'Second option is selected by default', disabled: false }\n        ]\n      },\n      {\n        groupLabel: 'Group2',\n        disabled: false,\n        options: [\n          { value: '3', label: 'The third option', disabled: false },\n          { value: '4', label: 'The fourth option', disabled: false }\n        ]\n      },\n      {\n        groupLabel: 'Group3',\n        disabled: true,\n        options: [\n          { value: '5', label: 'The fifth option', disabled: false },\n          { value: '6', label: 'The sixth option', disabled: false }\n        ]\n      }\n    ];\n    this.getOptionLbl = option => option.label;\n    this.getOptionVal = option => option.value;\n    this.getOptionsGroupLbl = group => group && group.groupLabel;\n    this.getGroupOptions = group => group && group.options;\n  }\n\n  render() {\n    return (\n      <FormSelect value={this.state.value} onChange={this.onChange} aria-label=\"FormSelect Input\">\n        {this.groups.map((group, index) => (\n          <FormSelectOptionGroup isDisabled={group.disabled} key={index} label={group.groupLabel}>\n            {group.options.map((option, i) => (\n              <FormSelectOption isDisabled={option.disabled} key={i} value={option.value} label={option.label} />\n            ))}\n          </FormSelectOptionGroup>\n        ))}\n      </FormSelect>\n    );\n  }\n}","title":"Grouped","lang":"js"}}>
      
    </Example>,
  'Icon sprite variant': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { FormSelect, FormSelectOption, FormSelectOptionGroup } from '@patternfly/react-core';\n\nclass FormSelectIconSpriteInput extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value: '',\n      validated: ValidatedOptions.default\n    };\n\n    this.onChange = (value, event) => {\n      if (value === '3') {\n        this.setState({ value, validated: ValidatedOptions.success, helperText: 'You chose wisely' });\n      } else if (value === '') {\n        this.setState({ value, validated: ValidatedOptions.warning, helperText: 'You must select a value' });\n      } else {\n        this.setState({\n          value,\n          validated: ValidatedOptions.error,\n          invalidText: 'You must chose Three (thought that was obvious)'\n        });\n      }\n    };\n\n    this.options = [\n      { value: '', label: 'Select a number', disabled: false, isPlaceholder: true },\n      { value: '1', label: 'One', disabled: false, isPlaceholder: false },\n      { value: '2', label: 'Two', disabled: false, isPlaceholder: false },\n      { value: '3', label: 'Three - the only valid option', disabled: false, isPlaceholder: false }\n    ];\n  }\n\n  render() {\n    const { value, validated, helperText, invalidText } = this.state;\n\n    return (\n      <FormSelect\n        validated={validated}\n        isIconSprite\n        value={value}\n        onChange={this.onChange}\n        aria-label=\"FormSelect Input\"\n      >\n        {this.options.map((option, index) => (\n          <FormSelectOption isDisabled={option.disabled} key={index} value={option.value} label={option.label} />\n        ))}\n      </FormSelect>\n    );\n  }\n}","title":"Icon sprite variant","lang":"js","isBeta":true}}>
      
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
    {React.createElement(pageData.examples["Invalid"])}
    {React.createElement(pageData.examples["Validated"])}
    {React.createElement(pageData.examples["Disabled"])}
    {React.createElement(pageData.examples["Grouped"])}
    {React.createElement(pageData.examples["Icon sprite variant"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsFormSelectReactDocs';
Component.pageData = pageData;

export default Component;
