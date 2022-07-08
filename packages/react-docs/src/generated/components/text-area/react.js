import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Text area",
  "section": "components",
  "source": "react",
  "slug": "/components/text-area/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/TextArea/examples/TextArea.md",
  "propComponents": [
    {
      "name": "TextArea",
      "description": "",
      "props": []
    }
  ],
  "cssPrefix": [
    "pf-c-form-control"
  ],
  "examples": [
    "Basic",
    "Invalid",
    "Validated",
    "Vertically resizable text area",
    "Horizontally resizable text area",
    "Uncontrolled",
    "Disabled",
    "Auto resizing",
    "Icon sprite variants"
  ]
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { TextArea } from '@patternfly/react-core';\n\nclass SimpleTextArea extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value: ''\n    };\n\n    this.handleTextAreaChange = value => {\n      this.setState({ value });\n    };\n  }\n\n  render() {\n    const { value } = this.state;\n\n    return <TextArea value={value} onChange={this.handleTextAreaChange} aria-label=\"text area example\" />;\n  }\n}","title":"Basic","lang":"js"}}>
      
    </Example>,
  'Invalid': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { TextArea } from '@patternfly/react-core';\n\nclass InvalidTextArea extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value: ''\n    };\n    \n    this.handleInvalidTextAreaChange = value => {\n      this.setState({ value });\n    };\n  }\n\n  render() {\n    const { value } = this.state;\n\n    return (\n      <TextArea\n        value={value}\n        onChange={this.handleInvalidTextAreaChange}\n        isRequired\n        validated={'error'}\n        aria-label=\"invalid text area example\"\n      />\n    );\n  }\n}","title":"Invalid","lang":"js"}}>
      
    </Example>,
  'Validated': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Form, FormGroup, TextArea } from '@patternfly/react-core';\n\nclass InvalidTextArea extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value: '',\n      invalidText: 'You must have something to say',\n      validated: 'default',\n      helperText: 'Share your thoughts.'\n    };\n    \n    this.simulateNetworkCall = callback => {\n      setTimeout(callback, 2000);\n    }\n    \n    this.handleTextAreaChange = value => {\n\n      this.setState({\n        value,\n        validated: 'default',\n        helperText: 'Validating...',\n      },\n        this.simulateNetworkCall(() => {\n          if (value && value.length > 0) {\n            if (value.length >= 10) {\n              this.setState({validated: 'success', helperText: 'Thanks for your comments!'});\n            } else {\n              this.setState({validated: 'error', invalidText: 'Your being too brief, please enter at least 10 characters.'});\n            }\n          }\n          else {\n            this.setState({validated: 'warning', helperText: 'You must have something to say'});\n          }\n        })\n      );\n    };\n  }\n\n  render() {\n    const { value, validated, helperText, invalidText } = this.state;\n\n    return (\n      <Form>\n        <FormGroup\n          label=\"Comments:\"\n          type=\"string\"\n          helperText={helperText}\n          helperTextInvalid={invalidText}\n          fieldId=\"selection\"\n          validated={validated}\n        >\n          <TextArea\n            value={value}\n            onChange={this.handleTextAreaChange}\n            isRequired\n            validated={validated}\n            aria-label=\"invalid text area example\"\n          />\n        </FormGroup>\n      </Form>\n    );\n  }\n}","title":"Validated","lang":"js"}}>
      
    </Example>,
  'Vertically resizable text area': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { TextArea } from '@patternfly/react-core';\n\nclass VerticalResizeTextArea extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value: ''\n    };\n\n    this.handleTextAreaChange = value => {\n      this.setState({ value });\n    };\n  }\n\n  render() {\n    const { value } = this.state;\n\n    return <TextArea value={value} onChange={this.handleTextAreaChange} resizeOrientation='vertical' aria-label=\"text vertical resize example\" />;\n  }\n}","title":"Vertically resizable text area","lang":"js"}}>
      
    </Example>,
  'Horizontally resizable text area': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { TextArea } from '@patternfly/react-core';\n\nclass HorizontalResizeTextArea extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value: ''\n    };\n\n    this.handleTextAreaChange = value => {\n      this.setState({ value });\n    };\n  }\n\n  render() {\n    const { value } = this.state;\n\n    return <TextArea value={value} onChange={this.handleTextAreaChange} resizeOrientation='horizontal' aria-label=\"text horizontal resize example\" />;\n  }\n}","title":"Horizontally resizable text area","lang":"js"}}>
      
    </Example>,
  'Uncontrolled': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { TextArea } from '@patternfly/react-core';\n\nconst Uncontrolled = () => <TextArea defaultValue=\"default value\" aria-label=\"uncontrolled text area example\" />","title":"Uncontrolled","lang":"js"}}>
      
    </Example>,
  'Disabled': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { TextArea } from '@patternfly/react-core';\n\nconst Disabled = () => <TextArea aria-label=\"disabled text area example\" isDisabled />","title":"Disabled","lang":"js"}}>
      
    </Example>,
  'Auto resizing': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { TextArea } from '@patternfly/react-core';\n\nconst AutoResizing = () => <TextArea aria-label=\"auto resizing text area example\" autoResize />","title":"Auto resizing","lang":"js"}}>
      
    </Example>,
  'Icon sprite variants': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { TextArea } from '@patternfly/react-core';\n\nIconSpriteTextArea = () => {\n  const [success, setSuccess] = React.useState('');\n  const [warning, setWarning] = React.useState('');\n  const [error, setError] = React.useState('');\n\n  return (\n    <>\n      <TextArea\n        validated={ValidatedOptions.success}\n        isIconSprite\n        type=\"text\"\n        onChange={value => setSuccess(value)}\n        aria-label=\"success icon sprite text area example\"\n      />\n      <br />\n      <br />\n      <TextArea\n        validated={ValidatedOptions.warning}\n        isIconSprite\n        type=\"text\"\n        onChange={value => setWarning(value)}\n        aria-label=\"warning icon sprite text input example\"\n      />\n      <br />\n      <br />\n      <TextArea\n        validated={ValidatedOptions.error}\n        isIconSprite\n        type=\"text\"\n        onChange={value => setError(value)}\n        aria-label=\"error icon sprite text area example\"\n      />\n    </>\n  );\n};","title":"Icon sprite variants","lang":"js","isBeta":true}}>
      
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
    {React.createElement(pageData.examples["Invalid"])}
    {React.createElement(pageData.examples["Validated"])}
    {React.createElement(pageData.examples["Vertically resizable text area"])}
    {React.createElement(pageData.examples["Horizontally resizable text area"])}
    {React.createElement(pageData.examples["Uncontrolled"])}
    {React.createElement(pageData.examples["Disabled"])}
    {React.createElement(pageData.examples["Auto resizing"])}
    {React.createElement(pageData.examples["Icon sprite variants"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsTextAreaReactDocs';
Component.pageData = pageData;

export default Component;
