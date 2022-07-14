import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import InfoIcon from '@patternfly/react-icons/dist/esm/icons/info-icon';
import QuestionIcon from '@patternfly/react-icons/dist/esm/icons/question-icon';
import CheckIcon from '@patternfly/react-icons/dist/esm/icons/check-icon';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';
import ExclamationIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-icon';
const pageData = {
  "id": "Helper text",
  "section": "components",
  "source": "react",
  "slug": "/components/helper-text/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/HelperText/examples/HelperText.md",
  "propComponents": [
    {
      "name": "HelperText",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the helper text container."
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes applied to the helper text container."
        },
        {
          "name": "component",
          "type": "'div' | 'ul'",
          "description": "Component type of the helper text container",
          "defaultValue": "'div'"
        }
      ]
    },
    {
      "name": "HelperTextItem",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the helper text item."
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes applied to the helper text item."
        },
        {
          "name": "component",
          "type": "'div' | 'li'",
          "description": "Sets the component type of the helper text item.",
          "defaultValue": "'div'"
        },
        {
          "name": "hasIcon",
          "type": "boolean",
          "description": "Flag indicating the helper text should have an icon. Dynamic helper texts include icons by default while static helper texts do not.",
          "defaultValue": "isDynamic"
        },
        {
          "name": "icon",
          "type": "React.ReactNode",
          "description": "Custom icon prefixing the helper text. This property will override the default icon paired with each helper text variant."
        },
        {
          "name": "isDynamic",
          "type": "boolean",
          "description": "Flag indicating the helper text item is dynamic.",
          "defaultValue": "false"
        },
        {
          "name": "variant",
          "type": "'default' | 'indeterminate' | 'warning' | 'success' | 'error'",
          "description": "Variant styling of the helper text item.",
          "defaultValue": "'default'"
        }
      ]
    }
  ],
  "cssPrefix": [
    "pf-c-helper-text"
  ],
  "examples": [
    "Static",
    "Static with default icons",
    "Static with custom icons",
    "Multiple static",
    "Dynamic",
    "Dynamic list"
  ]
};
pageData.liveContext = {
  InfoIcon,
  QuestionIcon,
  CheckIcon,
  TimesIcon,
  ExclamationIcon
};
pageData.examples = {
  'Static': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { HelperText, HelperTextItem } from '@patternfly/react-core';\n\nconst Static = () => (\n  <React.Fragment>\n    <HelperText>\n      <HelperTextItem>This is default helper text</HelperTextItem>\n    </HelperText>\n    <HelperText>\n      <HelperTextItem variant=\"indeterminate\">This is indeterminate helper text</HelperTextItem>\n    </HelperText>\n    <HelperText>\n      <HelperTextItem variant=\"warning\">This is warning helper text</HelperTextItem>\n    </HelperText>\n    <HelperText>\n      <HelperTextItem variant=\"success\">This is success helper text</HelperTextItem>\n    </HelperText>\n    <HelperText>\n      <HelperTextItem variant=\"error\">This is error helper text</HelperTextItem>\n    </HelperText>\n  </React.Fragment>\n)","title":"Static","lang":"js"}}>
      
    </Example>,
  'Static with default icons': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { HelperText, HelperTextItem } from '@patternfly/react-core';\nimport InfoIcon from '@patternfly/react-icons/dist/esm/icons/info-icon';\nimport QuestionIcon from '@patternfly/react-icons/dist/esm/icons/question-icon';\nimport ExclamationTriangleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-triangle-icon';\nimport CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';\nimport ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';\n\nconst StaticWithDefaultIcons = () => (\n  <React.Fragment>\n    <HelperText>\n      <HelperTextItem hasIcon>This is default helper text</HelperTextItem>\n    </HelperText>\n    <HelperText>\n      <HelperTextItem variant=\"indeterminate\" hasIcon>\n        This is indeterminate helper text\n      </HelperTextItem>\n    </HelperText>\n    <HelperText>\n      <HelperTextItem variant=\"warning\" hasIcon>\n        This is warning helper text\n      </HelperTextItem>\n    </HelperText>\n    <HelperText>\n      <HelperTextItem variant=\"success\" hasIcon>\n        This is success helper text\n      </HelperTextItem>\n    </HelperText>\n    <HelperText>\n      <HelperTextItem variant=\"error\" hasIcon>\n        This is error helper text\n      </HelperTextItem>\n    </HelperText>\n  </React.Fragment>\n)","title":"Static with default icons","lang":"js"}}>
      
    </Example>,
  'Static with custom icons': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { HelperText, HelperTextItem } from '@patternfly/react-core';\nimport InfoIcon from '@patternfly/react-icons/dist/esm/icons/info-icon';\nimport QuestionIcon from '@patternfly/react-icons/dist/esm/icons/question-icon';\nimport ExclamationIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-icon';\nimport CheckIcon from '@patternfly/react-icons/dist/esm/icons/check-icon';\nimport TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';\n\nconst StaticWithCustomIcons = () => (\n  <React.Fragment>\n    <HelperText>\n      <HelperTextItem icon={<InfoIcon />}>This is default helper text</HelperTextItem>\n    </HelperText>\n    <HelperText>\n      <HelperTextItem variant=\"indeterminate\" icon={<QuestionIcon />}>\n        This is indeterminate helper text\n      </HelperTextItem>\n    </HelperText>\n    <HelperText>\n      <HelperTextItem variant=\"warning\" icon={<ExclamationIcon />}>\n        This is warning helper text\n      </HelperTextItem>\n    </HelperText>\n    <HelperText>\n      <HelperTextItem variant=\"success\" icon={<CheckIcon />}>\n        This is success helper text\n      </HelperTextItem>\n    </HelperText>\n    <HelperText>\n      <HelperTextItem variant=\"error\" icon={<TimesIcon />}>\n        This is error helper text\n      </HelperTextItem>\n    </HelperText>\n  </React.Fragment>\n)","title":"Static with custom icons","lang":"js"}}>
      
    </Example>,
  'Multiple static': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { HelperText, HelperTextItem } from '@patternfly/react-core';\n\nconst MultipleStatic = () => (\n  <HelperText>\n    <HelperTextItem>This is default helper text</HelperTextItem>\n    <HelperTextItem>This is another default helper text in the same block</HelperTextItem>\n    <HelperTextItem>And this is more default text in the same block</HelperTextItem>\n  </HelperText>\n)","title":"Multiple static","lang":"js"}}>
      
    </Example>,
  'Dynamic': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { HelperText, HelperTextItem } from '@patternfly/react-core';\nimport TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';\n\nconst Dynamic = () => (\n  <React.Fragment>\n    <HelperText>\n      <HelperTextItem isDynamic>This is default helper text</HelperTextItem>\n    </HelperText>\n    <HelperText>\n      <HelperTextItem isDynamic variant=\"indeterminate\">\n        This is indeterminate helper text\n      </HelperTextItem>\n    </HelperText>\n    <HelperText>\n      <HelperTextItem isDynamic variant=\"warning\">\n        This is warning helper text\n      </HelperTextItem>\n    </HelperText>\n    <HelperText>\n      <HelperTextItem isDynamic variant=\"success\">\n        This is success helper text\n      </HelperTextItem>\n    </HelperText>\n    <HelperText>\n      <HelperTextItem isDynamic variant=\"error\">\n        This is error helper text\n      </HelperTextItem>\n    </HelperText>\n    <HelperText>\n      <HelperTextItem isDynamic variant=\"error\" icon={<TimesIcon />}>\n        This is error helper text with a custom icon\n      </HelperTextItem>\n    </HelperText>\n    <HelperText>\n      <HelperTextItem isDynamic variant=\"error\" hasIcon={false}>\n        This is error helper text with no icon\n      </HelperTextItem>\n    </HelperText>\n  </React.Fragment>\n)","title":"Dynamic","lang":"js"}}>
      
    </Example>,
  'Dynamic list': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { HelperText, HelperTextItem } from '@patternfly/react-core';\n\nconst DynamicList = () => (\n  <HelperText component=\"ul\">\n    <HelperTextItem isDynamic variant=\"success\" component=\"li\">\n      Must be at least 14 characters\n    </HelperTextItem>\n    <HelperTextItem isDynamic variant=\"error\" component=\"li\">\n      Cannot contain any variation of the word \"redhat\"\n    </HelperTextItem>\n    <HelperTextItem isDynamic variant=\"success\" component=\"li\">\n      Must include at least 3 of the following: lowercase letter, uppercase letters, numbers, symbols\n    </HelperTextItem>\n  </HelperText>\n)","title":"Dynamic list","lang":"js"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Static"])}
    {React.createElement(pageData.examples["Static with default icons"])}
    {React.createElement(pageData.examples["Static with custom icons"])}
    {React.createElement(pageData.examples["Multiple static"])}
    {React.createElement(pageData.examples["Dynamic"])}
    {React.createElement(pageData.examples["Dynamic list"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsHelperTextReactDocs';
Component.pageData = pageData;

export default Component;
