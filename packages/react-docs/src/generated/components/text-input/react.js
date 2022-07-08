import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Text input",
  "section": "components",
  "source": "react",
  "slug": "/components/text-input/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/TextInput/examples/TextInput.md",
  "propComponents": [
    {
      "name": "TextInput",
      "description": "",
      "props": [
        {
          "name": "aria-label",
          "type": "string",
          "description": "Aria-label. The input requires an associated id or aria-label."
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the TextInput."
        },
        {
          "name": "customIconDimensions",
          "type": "string",
          "description": "Dimensions for the custom icon set as the input's background-size"
        },
        {
          "name": "customIconUrl",
          "type": "string",
          "description": "Custom icon url to set as the input's background-image"
        },
        {
          "name": "iconVariant",
          "type": "'calendar' | 'clock' | 'search'",
          "description": "icon variant"
        },
        {
          "name": "innerRef",
          "type": "React.RefObject<any>",
          "description": "A reference object to attach to the input box."
        },
        {
          "name": "isDisabled",
          "type": "boolean",
          "description": "Flag to show if the input is disabled."
        },
        {
          "name": "isIconSprite",
          "type": "boolean",
          "description": "Use the external file instead of a data URI"
        },
        {
          "name": "isLeftTruncated",
          "type": "boolean",
          "description": "Trim text on left"
        },
        {
          "name": "isReadOnly",
          "type": "boolean",
          "description": "Flag to show if the input is read only."
        },
        {
          "name": "isRequired",
          "type": "boolean",
          "description": "Flag to show if the input is required."
        },
        {
          "name": "onBlur",
          "type": "(event?: any) => void",
          "description": "Callback function when input is blurred (focus leaves)"
        },
        {
          "name": "onChange",
          "type": "(value: string, event: React.FormEvent<HTMLInputElement>) => void",
          "description": "A callback for when the input value changes."
        },
        {
          "name": "onFocus",
          "type": "(event?: any) => void",
          "description": "Callback function when input is focused"
        },
        {
          "name": "type",
          "type": "'text'\n| 'date'\n| 'datetime-local'\n| 'email'\n| 'month'\n| 'number'\n| 'password'\n| 'search'\n| 'tel'\n| 'time'\n| 'url'",
          "description": "Type that the input accepts."
        },
        {
          "name": "validated",
          "type": "'success' | 'warning' | 'error' | 'default'",
          "description": "Value to indicate if the input is modified to show that validation state.\nIf set to success, input will be modified to indicate valid state.\nIf set to error,  input will be modified to indicate error state."
        },
        {
          "name": "value",
          "type": "string | number",
          "description": "Value of the input."
        }
      ]
    }
  ],
  "cssPrefix": [
    "pf-c-form-control"
  ],
  "examples": [
    "Basic",
    "Disabled",
    "Truncated on Left",
    "Read only",
    "Invalid",
    "Select text using ref",
    "Icon variants",
    "Icon sprite variants"
  ]
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { TextInput } from '@patternfly/react-core';\n\nclass SimpleTextInput extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value: ''\n    };\n    this.handleTextInputChange = value => {\n      this.setState({ value });\n    };\n  }\n\n  render() {\n    const { value } = this.state;\n\n    return (\n      <TextInput value={value} type=\"text\" onChange={this.handleTextInputChange} aria-label=\"text input example\" />\n    );\n  }\n}","title":"Basic","lang":"js"}}>
      
    </Example>,
  'Disabled': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { TextInput } from '@patternfly/react-core';\n\nconst Disabled = () => (\n  <TextInput\n    value=\"disabled text input example\"\n    type=\"text\"\n    onChange={this.handleTextInputChange}\n    aria-label=\"disabled text input example\"\n    isDisabled\n  />\n)","title":"Disabled","lang":"js"}}>
      
    </Example>,
  'Truncated on Left': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { TextInput } from '@patternfly/react-core';\n\nclass LeftTruncatedTextInput extends React.Component {\n\nconstructor(props) {\n    super(props);\n    this.state = {\n      value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'\n    };\n    this.handleTextInputChange = value => {\n      this.setState({ value });\n    };\n  }\n\n  render() {\n    const { value } = this.state;\n    return (\n      <TextInput isLeftTruncated value={value} type=\"text\" onChange={this.handleTextInputChange} aria-label=\"left-truncated text input example\"  />\n    );\n  }\n}","title":"Truncated on Left","lang":"js"}}>
      
    </Example>,
  'Read only': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { TextInput } from '@patternfly/react-core';\n\nconst ReadOnly = () => <TextInput value=\"read only text input example\" type=\"text\" isReadOnly aria-label=\"readonly input example\" />;","title":"Read only","lang":"js"}}>
      
    </Example>,
  'Invalid': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { TextInput, ValidatedOptions } from '@patternfly/react-core';\n\nclass InvalidTextInput extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value: ''\n    };\n    this.handleInvalidTextInputChange = value => {\n      this.setState({ value });\n    };\n  }\n\n  render() {\n    const { value } = this.state;\n\n    return (\n      <TextInput\n        value={value}\n        onChange={this.handleInvalidTextInputChange}\n        isRequired\n        validated={ValidatedOptions.error}\n        type=\"text\"\n        aria-label=\"invalid text input example\"\n      />\n    );\n  }\n}","title":"Invalid","lang":"js"}}>
      
    </Example>,
  'Select text using ref': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { TextInput } from '@patternfly/react-core';\n\nTextInputSelectAll = () => {\n  const [value, setValue] = React.useState('select all on click');\n  const ref = React.useRef(null);\n  return (\n    <TextInput\n      ref={ref}\n      value={value}\n      onFocus={() => ref && ref.current && ref.current.select()}\n      onChange={value => setValue(value)}\n      aria-label=\"select-all\"\n    />\n  );\n};","title":"Select text using ref","lang":"js"}}>
      
    </Example>,
  'Icon variants': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { TextInput } from '@patternfly/react-core';\n\nSimpleTextInput = () => {\n  const [calendar, setCalendar] = React.useState('');\n  const [clock, setClock] = React.useState('');\n  const [custom, setCustom] = React.useState('');\n\n  return (\n    <>\n      <TextInput\n        value={calendar}\n        type=\"text\"\n        iconVariant=\"calendar\"\n        onChange={value => setCalendar(value)}\n        aria-label=\"text input example\"\n      />\n      <br />\n      <br />\n      <TextInput\n        value={clock}\n        type=\"text\"\n        iconVariant=\"clock\"\n        onChange={value => setClock(value)}\n        aria-label=\"text input example\"\n      />\n      <br />\n      <br />\n      <TextInput\n        value={custom}\n        type=\"text\"\n        customIconDimensions=\"24px 24px\"\n        customIconUrl='data:image/svg+xml;charset=utf8,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"%3E%3Cpath fill=\"%23a18fff\" d=\"M158.87.15c-16.16-1.52-31.2 8.42-35.33 24.12l-14.81 56.27c187.62 5.49 314.54 130.61 322.48 317l56.94-15.78c15.72-4.36 25.49-19.68 23.62-35.9C490.89 165.08 340.78 17.32 158.87.15zm-58.47 112L.55 491.64a16.21 16.21 0 0 0 20 19.75l379-105.1c-4.27-174.89-123.08-292.14-299.15-294.1zM128 416a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm48-152a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm104 104a32 32 0 1 1 32-32 32 32 0 0 1-32 32z\"/%3E%3C/svg%3E'\n        onChange={value => setCustom(value)}\n        aria-label=\"text input example\"\n      />\n    </>\n  );\n};","title":"Icon variants","lang":"js"}}>
      
    </Example>,
  'Icon sprite variants': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { TextInput } from '@patternfly/react-core';\n\nIconSpriteTextInputs = () => {\n  const [success, setSuccess] = React.useState('');\n  const [warning, setWarning] = React.useState('');\n  const [error, setError] = React.useState('');\n  const [calendar, setCalendar] = React.useState('');\n  const [clock, setClock] = React.useState('');\n\n  return (\n    <>\n      <TextInput\n        validated={ValidatedOptions.success}\n        isIconSprite\n        type=\"text\"\n        onChange={value => setSuccess(value)}\n        aria-label=\"success icon sprite text input example\"\n      />\n      <br />\n      <br />\n      <TextInput\n        validated={ValidatedOptions.warning}\n        isIconSprite\n        type=\"text\"\n        onChange={value => setWarning(value)}\n        aria-label=\"warning icon sprite text input example\"\n      />\n      <br />\n      <br />\n      <TextInput\n        validated={ValidatedOptions.error}\n        isIconSprite\n        type=\"text\"\n        onChange={value => setError(value)}\n        aria-label=\"error icon sprite text input example\"\n      />\n      <br />\n      <br />\n      <TextInput\n        value={calendar}\n        isIconSprite\n        type=\"text\"\n        iconVariant=\"calendar\"\n        onChange={value => setCalendar(value)}\n        aria-label=\"calendar icon sprite text input example\"\n      />\n      <br />\n      <br />\n      <TextInput\n        value={clock}\n        isIconSprite\n        type=\"text\"\n        iconVariant=\"clock\"\n        onChange={value => setClock(value)}\n        aria-label=\"clock icon sprite text input example\"\n      />\n    </>\n  );\n};","title":"Icon sprite variants","lang":"js","isBeta":true}}>
      
      <p {...{"className":"ws-p"}}>
        
        <strong>
          {`Note:`}
        </strong>
        {` The icons for the success, invalid, calendar, etc. variations in form control elements are applied as background images to the form element. By default, the image URLs for these icons are data URIs. However, there may be cases where data URIs are not ideal, such as in an application with a content security policy that disallows data URIs for security reasons. The `}
        
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
    {React.createElement(pageData.examples["Disabled"])}
    {React.createElement(pageData.examples["Truncated on Left"])}
    {React.createElement(pageData.examples["Read only"])}
    {React.createElement(pageData.examples["Invalid"])}
    {React.createElement(pageData.examples["Select text using ref"])}
    {React.createElement(pageData.examples["Icon variants"])}
    {React.createElement(pageData.examples["Icon sprite variants"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsTextInputReactDocs';
Component.pageData = pageData;

export default Component;
