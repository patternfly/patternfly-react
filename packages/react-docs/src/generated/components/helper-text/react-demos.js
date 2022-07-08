import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import MinusIcon from '@patternfly/react-icons/dist/esm/icons/minus-icon';
import ExclamationTriangleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-triangle-icon';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';
import CheckIcon from '@patternfly/react-icons/dist/esm/icons/check-icon';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';
const pageData = {
  "id": "Helper text",
  "section": "components",
  "source": "react-demos",
  "slug": "/components/helper-text/react-demos",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/demos/HelperText.md",
  "examples": [
    "Static variant with static text",
    "Static variant with dynamic text",
    "Dynamic variant with static text"
  ]
};
pageData.liveContext = {
  MinusIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  CheckIcon,
  TimesIcon
};
pageData.examples = {
  'Static variant with static text': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Form, FormGroup, FormHelperText, TextInput, HelperText, HelperTextItem } from '@patternfly/react-core';\n\nexport const HelperTextStaticVariantStaticText: React.FunctionComponent = () => {\n  const [value, setValue] = React.useState('');\n\n  const handleInputChange = (inputValue: string) => {\n    setValue(inputValue);\n  };\n\n  return (\n    <Form>\n      <FormGroup label=\"Middle Name\" fieldId=\"login-input-helper-text1\">\n        <TextInput\n          type=\"text\"\n          id=\"login-input-helper-text1\"\n          name=\"login-input-helper-text1\"\n          onChange={handleInputChange}\n          aria-describedby=\"helper-text1\"\n          value={value}\n        />\n        <FormHelperText isHidden={false} component=\"div\">\n          <HelperText id=\"helper-text1\">\n            <HelperTextItem variant={'default'}>Enter your middle name or your middle initial</HelperTextItem>\n          </HelperText>\n        </FormHelperText>\n      </FormGroup>\n    </Form>\n  );\n};\n","title":"Static variant with static text","lang":"ts"}}>
      
      <p {...{"className":"ws-p"}}>
        {`In this demo, the static variant of the helper text item component (the default) is used, and the text itself will always be visible to users and will never change.`}
      </p>
      
      <p {...{"className":"ws-p"}}>
        {`The `}
        
        <code {...{"className":"ws-code"}}>
          {`aria-describedby`}
        </code>
        {` attribute is passed into the text input component and is linked to the `}
        
        <code {...{"className":"ws-code"}}>
          {`id`}
        </code>
        {` of the helper text component. This allows assistive technologies to notify users of the helper text content when the input receives focus, which can be helpful if a user navigates away from and then back to the input.`}
      </p>
      
      <p {...{"className":"ws-p"}}>
        {`Note that this demo does not validate the text input component. When it would need to be validated, there are other steps that would need to be taken to make it accessible, such as passing in `}
        
        <code {...{"className":"ws-code"}}>
          {`aria-invalid`}
        </code>
        {` and `}
        
        <code {...{"className":"ws-code"}}>
          {`aria-live`}
        </code>
        {` attributes to the appropriate components.`}
      </p>
    </Example>,
  'Static variant with dynamic text': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Form, FormGroup, FormHelperText, TextInput, HelperText, HelperTextItem } from '@patternfly/react-core';\n\nexport const HelperTextStaticVariantDynamicText: React.FunctionComponent = () => {\n  const [value, setValue] = React.useState('');\n  const [inputValidation, setInputValidation] = React.useState('default');\n\n  const handleInputChange = (inputValue: string) => {\n    setValue(inputValue);\n  };\n\n  React.useEffect(() => {\n    if (value === '') {\n      setInputValidation('default');\n    } else if (value === 'johndoe') {\n      setInputValidation('error');\n    } else {\n      setInputValidation('success');\n    }\n  }, [value]);\n\n  return (\n    <Form>\n      <FormGroup label=\"Username\" isRequired fieldId=\"login-input-helper-text2\">\n        <TextInput\n          isRequired\n          type=\"text\"\n          id=\"login-input-helper-text2\"\n          name=\"login-input-helper-text2\"\n          onChange={handleInputChange}\n          aria-describedby=\"helper-text2\"\n          aria-invalid={inputValidation === 'error'}\n          value={value}\n        />\n        <FormHelperText isHidden={false} component=\"div\">\n          <HelperText id=\"helper-text2\" aria-live=\"polite\">\n            {inputValidation !== 'success' && (\n              <HelperTextItem variant={inputValidation as any} hasIcon={inputValidation === 'error'}>\n                {inputValidation === 'default' ? 'Please enter a username' : 'Username already exists'}\n              </HelperTextItem>\n            )}\n          </HelperText>\n        </FormHelperText>\n      </FormGroup>\n    </Form>\n  );\n};\n","title":"Static variant with dynamic text","lang":"ts"}}>
      
      <p {...{"className":"ws-p"}}>
        {`In this demo, the static variant of the helper text item component (the default) is used with the `}
        
        <code {...{"className":"ws-code"}}>
          {`hasIcon`}
        </code>
        {` prop passed in when there is an error, and the text itself dynamically updates based on the input value. When the input has a value of `}
        
        <code {...{"className":"ws-code"}}>
          {`johndoe`}
        </code>
        {`, an error is rendered to simulate a username already being taken, while an empty input renders other helper text. When the input is valid, no helper text is rendered.`}
      </p>
      
      <p {...{"className":"ws-p"}}>
        {`The `}
        
        <code {...{"className":"ws-code"}}>
          {`aria-describedby`}
        </code>
        {` attribute is passed into the text input component and is linked to the `}
        
        <code {...{"className":"ws-code"}}>
          {`id`}
        </code>
        {` of the helper text component. Similar to the static variant with static text demo, this allows assistive technologies to notify users of the helper text content when the navigating to the input.`}
      </p>
      
      <p {...{"className":"ws-p"}}>
        {`An `}
        
        <code {...{"className":"ws-code"}}>
          {`aria-live`}
        </code>
        {` region is passed into the helper text component, which allows assistive technologies to announce to users when any dynamic content within it updates, such as when the text content changes or gets rendered. Without this attribute, a user would have to navigate out of and back into the input field multiple times to check the status of their input.`}
      </p>
      
      <p {...{"className":"ws-p"}}>
        {`The `}
        
        <code {...{"className":"ws-code"}}>
          {`aria-invalid`}
        </code>
        {` attribute is also passed into the text input, which allows assistive technologies to notify users that an input is invalid. When this attribute is true, it's important that users are notified of what is causing the input to be invalid; in this case, `}
        
        <code {...{"className":"ws-code"}}>
          {`aria-describedby`}
        </code>
        {` and `}
        
        <code {...{"className":"ws-code"}}>
          {`aria-live`}
        </code>
        {` help accomplish this.`}
      </p>
    </Example>,
  'Dynamic variant with static text': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Form, FormGroup, FormHelperText, TextInput, HelperText, HelperTextItem } from '@patternfly/react-core';\n\nexport const HelperTextDynamicVariantDynamicText: React.FunctionComponent = () => {\n  const [value, setValue] = React.useState('');\n  const [inputValidation, setInputValidation] = React.useState({\n    ruleLength: 'indeterminate',\n    ruleCharacterTypes: 'indeterminate'\n  });\n  const { ruleLength, ruleCharacterTypes } = inputValidation;\n\n  React.useEffect(() => {\n    let lengthStatus = ruleLength;\n    let typeStatus = ruleCharacterTypes;\n\n    if (value === '') {\n      setInputValidation({\n        ruleLength: 'indeterminate',\n        ruleCharacterTypes: 'indeterminate'\n      });\n      return;\n    }\n\n    if (!/\\d/g.test(value)) {\n      typeStatus = 'error';\n    } else {\n      typeStatus = 'success';\n    }\n\n    if (value.length < 5) {\n      lengthStatus = 'error';\n    } else {\n      lengthStatus = 'success';\n    }\n\n    setInputValidation({ ruleLength: lengthStatus, ruleCharacterTypes: typeStatus });\n  }, [value, ruleLength, ruleCharacterTypes]);\n\n  const handleInputChange = (inputValue: string) => {\n    setValue(inputValue);\n  };\n\n  const filterValidations = () => Object.keys(inputValidation).filter(item => inputValidation[item] !== 'success');\n\n  return (\n    <Form>\n      <FormGroup label=\"Username\" isRequired fieldId=\"login-input-helper-text3\">\n        <TextInput\n          isRequired\n          type=\"text\"\n          id=\"login-input-helper-text3\"\n          name=\"login-input-helper-text3\"\n          onChange={handleInputChange}\n          aria-describedby={filterValidations().join(' ')}\n          aria-invalid={ruleCharacterTypes === 'error' || ruleLength === 'error'}\n          value={value}\n        />\n        <FormHelperText isHidden={false} component=\"div\">\n          <HelperText component=\"ul\">\n            <HelperTextItem component=\"li\" id=\"ruleLength\" isDynamic variant={ruleLength as any}>\n              Must be at least 5 characters in length\n            </HelperTextItem>\n            <HelperTextItem component=\"li\" id=\"ruleCharacterTypes\" isDynamic variant={ruleCharacterTypes as any}>\n              Must include at least 1 number\n            </HelperTextItem>\n          </HelperText>\n        </FormHelperText>\n      </FormGroup>\n    </Form>\n  );\n};\n","title":"Dynamic variant with static text","lang":"ts"}}>
      
      <p {...{"className":"ws-p"}}>
        {`In this demo, the helper text item components have the `}
        
        <code {...{"className":"ws-code"}}>
          {`isDynamic`}
        </code>
        {` prop passed in. While the text content of the components is static, the icons and styling will change as the validation of the input changes.`}
      </p>
      
      <p {...{"className":"ws-p"}}>
        {`The `}
        
        <code {...{"className":"ws-code"}}>
          {`aria-describedby`}
        </code>
        {` attribute is passed into the text input component and is linked to the id attribute of a helper text item that results in an invalid input. This will allow assistive technologies to only be notified of any outstanding criteria that has not been met when the input receives focus.`}
      </p>
      
      <p {...{"className":"ws-p"}}>
        {`Similar to the static variant with dynamic text example, the `}
        
        <code {...{"className":"ws-code"}}>
          {`aria-invalid`}
        </code>
        {` attribute is passed in, allowing assistive technologies to announce to users when at least 1 item is causing the input to be invalid.`}
      </p>
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"demos","size":"h2","className":"ws-title ws-h2"}}>
      {`Demos`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Static variant with static text"])}
    {React.createElement(pageData.examples["Static variant with dynamic text"])}
    {React.createElement(pageData.examples["Dynamic variant with static text"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsHelperTextReactDemosDocs';
Component.pageData = pageData;

export default Component;
