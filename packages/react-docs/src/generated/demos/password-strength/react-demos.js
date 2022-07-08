import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import HelpIcon from '@patternfly/react-icons/dist/esm/icons/help-icon';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';
import ExclamationTriangleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-triangle-icon';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';
const pageData = {
  "id": "Password strength",
  "section": "demos",
  "source": "react-demos",
  "slug": "/demos/password-strength/react-demos",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/demos/PasswordStrength.md",
  "examples": [
    "Basic validation"
  ]
};
pageData.liveContext = {
  HelpIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon
};
pageData.examples = {
  'Basic validation': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Form,\n  FormGroup,\n  FormHelperText,\n  HelperText,\n  Popover,\n  HelperTextItem,\n  TextInput\n} from '@patternfly/react-core';\nimport HelpIcon from '@patternfly/react-icons/dist/esm/icons/help-icon';\nimport ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';\nimport ExclamationTriangleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-triangle-icon';\nimport CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';\n\nclass PasswordStrengthDemo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      password: '',\n      ruleLength: 'indeterminate',\n      ruleContent: 'indeterminate',\n      ruleCharacters: 'indeterminate',\n      passStrength: { variant: 'error', icon: <ExclamationCircleIcon />, text: 'Weak' }\n    };\n\n    this.handlePasswordInput = password => {\n      this.setState({ password });\n      this.validate(password);\n    };\n\n    this.validate = password => {\n      if (password === '') {\n        this.setState({\n          ruleLength: 'indeterminate',\n          ruleContent: 'indeterminate',\n          ruleCharacters: 'indeterminate'\n        });\n        return;\n      }\n\n      if (password.length < 14) {\n        this.setState({ ruleLength: 'error' });\n      } else {\n        this.setState({ ruleLength: 'success' });\n      }\n\n      if (/redhat/gi.test(password)) {\n        this.setState({ ruleContent: 'error' });\n      } else {\n        this.setState({ ruleContent: 'success' });\n      }\n\n      let rulesCount = 0;\n      let strCount = 0;\n      if (/[a-z]/g.test(password)) {\n        rulesCount++;\n      }\n      if (/[A-Z]/g.test(password)) {\n        strCount += password.match(/[A-Z]/g).length;\n        rulesCount++;\n      }\n      if (/\\d/g.test(password)) {\n        strCount += password.match(/\\d/g).length;\n        rulesCount++;\n      }\n      if (/\\W/g.test(password)) {\n        strCount += password.match(/\\W/g).length;\n        rulesCount++;\n      }\n\n      if (rulesCount < 3) {\n        this.setState({ ruleCharacters: 'error' });\n      } else {\n        this.setState({ ruleCharacters: 'success' });\n      }\n\n      if (strCount < 3) {\n        this.setState({ passStrength: { variant: 'error', icon: <ExclamationCircleIcon />, text: 'Weak' } });\n      } else if (strCount < 5) {\n        this.setState({ passStrength: { variant: 'warning', icon: <ExclamationTriangleIcon />, text: 'Medium' } });\n      } else {\n        this.setState({ passStrength: { variant: 'success', icon: <CheckCircleIcon />, text: 'Strong' } });\n      }\n    };\n  }\n\n  render() {\n    const { password, ruleLength, ruleContent, ruleCharacters, passStrength } = this.state;\n\n    const iconPopover = (\n      <Popover headerContent={<div>Password Requirements</div>} bodyContent={<div>Password rules</div>}>\n        <button\n          type=\"button\"\n          aria-label=\"More info for name field\"\n          onClick={e => e.preventDefault()}\n          aria-describedby=\"password-field\"\n          className=\"pf-c-form__group-label-help\"\n        >\n          <HelpIcon noVerticalAlign />\n        </button>\n      </Popover>\n    );\n\n    let passStrLabel = (\n      <HelperText>\n        <HelperTextItem variant={passStrength.variant} icon={passStrength.icon}>\n          {passStrength.text}\n        </HelperTextItem>\n      </HelperText>\n    );\n\n    return (\n      <Form>\n        <FormGroup\n          label=\"Password\"\n          labelIcon={iconPopover}\n          isRequired\n          fieldId=\"password-field\"\n          {...(ruleLength === 'success' &&\n            ruleContent === 'success' &&\n            ruleCharacters === 'success' && {\n              labelInfo: passStrLabel\n            })}\n        >\n          <TextInput\n            isRequired\n            type=\"text\"\n            id=\"password-field\"\n            name=\"password-field\"\n            aria-describedby=\"password-field-helper\"\n            aria-invalid={ruleLength === 'error' || ruleContent === 'error' || ruleCharacters === 'error'}\n            value={password}\n            onChange={this.handlePasswordInput}\n          />\n          <FormHelperText isHidden={false} component=\"div\">\n            <HelperText component=\"ul\" aria-live=\"polite\" id=\"password-field-helper\">\n              <HelperTextItem isDynamic variant={ruleLength} component=\"li\">\n                Must be at least 14 characters\n              </HelperTextItem>\n              <HelperTextItem isDynamic variant={ruleContent} component=\"li\">\n                Cannot contain the word \"redhat\"\n              </HelperTextItem>\n              <HelperTextItem isDynamic variant={ruleCharacters} component=\"li\">\n                Must include at least 3 of the following: lowercase letter, uppercase letters, numbers, symbols\n              </HelperTextItem>\n            </HelperText>\n          </FormHelperText>\n        </FormGroup>\n      </Form>\n    );\n  }\n}","title":"Basic validation","lang":"js"}}>
      
      <p {...{"className":"ws-p"}}>
        {`Note, the validation and password strength rules are only examples, demonstrating the changes in the UI when certain conditions are met. We expect consumers will substitute their own, more robust, validation algorithm. In this demo the password strength is determined by how often validation rules are met. A good open-source password strength estimator, recommended by InfoSec, can be found here: `}
        
        <PatternflyThemeLink {...{"to":"https://github.com/dropbox/zxcvbn"}}>
          {`https://github.com/dropbox/zxcvbn`}
        </PatternflyThemeLink>
      </p>
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"demos","size":"h2","className":"ws-title ws-h2"}}>
      {`Demos`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic validation"])}
  </React.Fragment>
);
Component.displayName = 'DemosPasswordStrengthReactDemosDocs';
Component.pageData = pageData;

export default Component;
