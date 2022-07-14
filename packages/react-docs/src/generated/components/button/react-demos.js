import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';
const pageData = {
  "id": "Button",
  "section": "components",
  "source": "react-demos",
  "slug": "/components/button/react-demos",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/demos/Button.md",
  "examples": [
    "Progress button"
  ]
};
pageData.liveContext = {
  CheckCircleIcon
};
pageData.examples = {
  'Progress button': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Form, FormGroup, ActionGroup, InputGroup, TextInput, Button } from '@patternfly/react-core';\nimport CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';\n\nconst ProgressButton: React.FunctionComponent = () => {\n  const [loginState, setLoginState] = React.useState<'notLoggedIn' | 'loading' | 'loggedIn'>('notLoggedIn');\n\n  return (\n    <Form>\n      <FormGroup label=\"Username\" isRequired fieldId=\"progress-button-initial-login\">\n        <TextInput\n          isRequired\n          type=\"text\"\n          id=\"progress-button-initial-login\"\n          name=\"progress-button-initial-login\"\n          value=\"johndoe\"\n          aria-label=\"username input\"\n        />\n      </FormGroup>\n      <FormGroup label=\"Password\" isRequired fieldId=\"progress-button-initial-password\">\n        <TextInput\n          isRequired\n          type=\"password\"\n          value=\"p@ssw0rd\"\n          id=\"progress-button-initial-password\"\n          name=\"progress-button-initial-password\"\n          aria-label=\"password input\"\n        />\n      </FormGroup>\n      <ActionGroup>\n        <Button\n          variant=\"primary\"\n          onClick={\n            loginState === 'notLoggedIn'\n              ? () => {\n                  setLoginState('loading');\n                  setTimeout(() => {\n                    setLoginState('loggedIn');\n                  }, 3000);\n                }\n              : null\n          }\n          isLoading={loginState === 'loading'}\n          icon={loginState === 'loggedIn' ? <CheckCircleIcon /> : null}\n          spinnerAriaValueText=\"Loading...\"\n        >\n          {loginState === 'notLoggedIn' && 'Link account and log in'}\n          {loginState === 'loading' && 'Linking account'}\n          {loginState === 'loggedIn' && 'Logged in'}\n        </Button>\n      </ActionGroup>\n    </Form>\n  );\n};","title":"Progress button","lang":"ts"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"demos","size":"h2","className":"ws-title ws-h2"}}>
      {`Demos`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Progress button"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsButtonReactDemosDocs';
Component.pageData = pageData;

export default Component;
