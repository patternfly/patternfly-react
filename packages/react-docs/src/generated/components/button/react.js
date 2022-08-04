import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';
import PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';
import ExternalLinkSquareAltIcon from '@patternfly/react-icons/dist/esm/icons/external-link-square-alt-icon';
import CopyIcon from '@patternfly/react-icons/dist/esm/icons/copy-icon';
import ArrowRightIcon from '@patternfly/react-icons/dist/esm/icons/arrow-right-icon';
import UploadIcon from '@patternfly/react-icons/dist/esm/icons/upload-icon';
import { Link } from '@reach/router';
const pageData = {
  "id": "Button",
  "section": "components",
  "source": "react",
  "slug": "/components/button/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/Button/examples/Button.md",
  "propComponents": [
    {
      "name": "Button",
      "description": "",
      "props": [
        {
          "name": "aria-label",
          "type": "string",
          "description": "Adds accessible text to the button."
        },
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the button"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the button"
        },
        {
          "name": "component",
          "type": "React.ElementType<any> | React.ComponentType<any>",
          "description": "Sets the base component to render. defaults to button"
        },
        {
          "name": "icon",
          "type": "React.ReactNode | null",
          "description": "Icon for the button. Usable by all variants except for plain."
        },
        {
          "name": "iconPosition",
          "type": "'left' | 'right'",
          "description": "Sets position of the link icon"
        },
        {
          "name": "innerRef",
          "type": "React.Ref<any>",
          "description": "Forwarded ref"
        },
        {
          "name": "inoperableEvents",
          "type": "string[]",
          "description": "Events to prevent when the button is in an aria-disabled state"
        },
        {
          "name": "isActive",
          "type": "boolean",
          "description": "Adds active styling to button."
        },
        {
          "name": "isAriaDisabled",
          "type": "boolean",
          "description": "Adds disabled styling and communicates that the button is disabled using the aria-disabled html attribute"
        },
        {
          "name": "isBlock",
          "type": "boolean",
          "description": "Adds block styling to button"
        },
        {
          "name": "isDanger",
          "type": "boolean",
          "description": "Adds danger styling to secondary or link button variants"
        },
        {
          "name": "isDisabled",
          "type": "boolean",
          "description": "Adds disabled styling and disables the button using the disabled html attribute"
        },
        {
          "name": "isInline",
          "type": "boolean",
          "description": "Adds inline styling to a link button"
        },
        {
          "name": "isLarge",
          "type": "boolean",
          "description": "Adds large styling to the button"
        },
        {
          "name": "isLoading",
          "type": "boolean",
          "description": "Adds progress styling to button"
        },
        {
          "name": "isSmall",
          "type": "boolean",
          "description": "Adds small styling to the button"
        },
        {
          "name": "spinnerAriaLabel",
          "type": "string",
          "description": "Accessible label for the spinner to describe what is loading"
        },
        {
          "name": "spinnerAriaLabelledBy",
          "type": "string",
          "description": "Id of element which describes what is being loaded"
        },
        {
          "name": "spinnerAriaValueText",
          "type": "string",
          "description": "Text describing that current loading status or progress"
        },
        {
          "name": "tabIndex",
          "type": "number",
          "description": "Sets the button tabindex."
        },
        {
          "name": "type",
          "type": "'button' | 'submit' | 'reset'",
          "description": "Sets button type"
        },
        {
          "name": "variant",
          "type": "'primary' | 'secondary' | 'tertiary' | 'danger' | 'warning' | 'link' | 'plain' | 'control'",
          "description": "Adds button variant styles"
        }
      ]
    }
  ],
  "cssPrefix": [
    "pf-c-button"
  ],
  "examples": [
    "Variations",
    "Disabled",
    "Aria disabled",
    "Aria disabled button with tooltip",
    "Aria disabled link as button with tooltip",
    "Links as buttons",
    "Inline link as span",
    "Block level",
    "Types",
    "Small",
    "Call to action",
    "Progress",
    "Router link"
  ]
};
pageData.liveContext = {
  TimesIcon,
  PlusCircleIcon,
  ExternalLinkSquareAltIcon,
  CopyIcon,
  ArrowRightIcon,
  UploadIcon,
  Link
};
pageData.examples = {
  'Variations': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Button } from '@patternfly/react-core';\nimport TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';\nimport PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';\nimport ExternalLinkSquareAltIcon from '@patternfly/react-icons/dist/esm/icons/external-link-square-alt-icon';\nimport CopyIcon from '@patternfly/react-icons/dist/esm/icons/copy-icon';\n\nexport const ButtonVariations: React.FunctionComponent = () => (\n  <React.Fragment>\n    <Button variant=\"primary\">Primary</Button> <Button variant=\"secondary\">Secondary</Button>{' '}\n    <Button variant=\"secondary\" isDanger>\n      Danger Secondary\n    </Button>{' '}\n    <Button variant=\"tertiary\">Tertiary</Button> <Button variant=\"danger\">Danger</Button>{' '}\n    <Button variant=\"warning\">Warning</Button>\n    <br />\n    <br />\n    <Button variant=\"link\" icon={<PlusCircleIcon />}>\n      Link\n    </Button>{' '}\n    <Button variant=\"link\" icon={<ExternalLinkSquareAltIcon />} iconPosition=\"right\">\n      Link\n    </Button>{' '}\n    <Button variant=\"link\" isInline>\n      Inline link\n    </Button>{' '}\n    <Button variant=\"link\" isDanger>\n      Danger link\n    </Button>\n    <br />\n    <br />\n    <Button variant=\"plain\" aria-label=\"Action\">\n      <TimesIcon />\n    </Button>\n    <br />\n    <br />\n    <Button variant=\"control\">Control</Button>{' '}\n    <Button variant=\"control\" aria-label=\"Copy\">\n      <CopyIcon />\n    </Button>\n  </React.Fragment>\n);\n","title":"Variations","lang":"ts"}}>
      
    </Example>,
  'Disabled': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Button } from '@patternfly/react-core';\nimport TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';\nimport PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';\n\nexport const ButtonDisabled: React.FunctionComponent = () => (\n  <React.Fragment>\n    <Button isDisabled>Primary disabled</Button> <Button isDisabled>Secondary disabled</Button>{' '}\n    <Button variant=\"secondary\" isDanger isDisabled>\n      Danger secondary disabled\n    </Button>{' '}\n    <Button isDisabled variant=\"tertiary\">\n      Tertiary disabled\n    </Button>{' '}\n    <Button isDisabled variant=\"danger\">\n      Danger disabled\n    </Button>{' '}\n    <Button isDisabled variant=\"warning\">\n      Warning disabled\n    </Button>\n    <br />\n    <br />\n    <Button isDisabled variant=\"link\" icon={<PlusCircleIcon />}>\n      Link disabled\n    </Button>{' '}\n    <Button isDisabled variant=\"link\" isInline>\n      Inline link disabled\n    </Button>{' '}\n    <Button variant=\"link\" isDanger isDisabled>\n      Danger link disabled\n    </Button>{' '}\n    <Button isDisabled variant=\"plain\" aria-label=\"Action\">\n      <TimesIcon />\n    </Button>{' '}\n    <Button isDisabled variant=\"control\">\n      Control disabled\n    </Button>\n  </React.Fragment>\n);\n","title":"Disabled","lang":"ts"}}>
      
    </Example>,
  'Aria disabled': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Button } from '@patternfly/react-core';\nimport TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';\nimport PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';\n\nexport const ButtonAriaDisabled: React.FunctionComponent = () => (\n  <React.Fragment>\n    <Button isAriaDisabled>Primary aria disabled</Button> <Button isAriaDisabled>Secondary aria disabled</Button>{' '}\n    <Button variant=\"secondary\" isDanger isAriaDisabled>\n      Danger secondary aria disabled\n    </Button>{' '}\n    <Button isAriaDisabled variant=\"tertiary\">\n      Tertiary aria disabled\n    </Button>{' '}\n    <Button isAriaDisabled variant=\"danger\">\n      Danger disabled\n    </Button>{' '}\n    <Button isAriaDisabled variant=\"warning\">\n      Warning disabled\n    </Button>\n    <br />\n    <br />\n    <Button isAriaDisabled variant=\"link\" icon={<PlusCircleIcon />}>\n      Link aria disabled\n    </Button>{' '}\n    <Button isAriaDisabled variant=\"link\" isInline>\n      Inline link aria disabled\n    </Button>{' '}\n    <Button variant=\"link\" isDanger isAriaDisabled>\n      Danger link disabled\n    </Button>{' '}\n    <Button isAriaDisabled variant=\"plain\" aria-label=\"Action\">\n      <TimesIcon />\n    </Button>{' '}\n    <Button isAriaDisabled variant=\"control\">\n      Control aria disabled\n    </Button>\n  </React.Fragment>\n);\n","title":"Aria disabled","lang":"ts"}}>
      
    </Example>,
  'Aria disabled button with tooltip': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Button, Tooltip } from '@patternfly/react-core';\n\nexport const ButtonAriaDisabledTooltip: React.FunctionComponent = () => (\n  <Tooltip content=\"Aria-disabled buttons are like disabled buttons, but focusable. Allows for tooltip support.\">\n    <Button isAriaDisabled variant=\"secondary\">\n      Secondary button to core docs\n    </Button>\n  </Tooltip>\n);\n","title":"Aria disabled button with tooltip","lang":"ts"}}>
      
    </Example>,
  'Aria disabled link as button with tooltip': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Button, Tooltip } from '@patternfly/react-core';\n\nexport const ButtonAriaDisabledLinkTooltip: React.FunctionComponent = () => (\n  <Tooltip content=\"Aria-disabled link as button with tooltip\">\n    <Button component=\"a\" isAriaDisabled href=\"https://pf4.patternfly.org/\" target=\"_blank\" variant=\"tertiary\">\n      Tertiary link as button to core docs\n    </Button>\n  </Tooltip>\n);\n","title":"Aria disabled link as button with tooltip","lang":"ts"}}>
      
    </Example>,
  'Links as buttons': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Button } from '@patternfly/react-core';\n\nexport const ButtonLinks: React.FunctionComponent = () => (\n  <React.Fragment>\n    <Button component=\"a\" href=\"https://pf4.patternfly.org/\" target=\"_blank\" variant=\"primary\">\n      Link to core docs\n    </Button>{' '}\n    <Button component=\"a\" href=\"https://pf4.patternfly.org/\" target=\"_blank\" variant=\"secondary\">\n      Secondary link to core docs\n    </Button>{' '}\n    <Button isDisabled component=\"a\" href=\"https://pf4.patternfly.org/\" target=\"_blank\" variant=\"tertiary\">\n      Tertiary link to core docs\n    </Button>{' '}\n    <Button component=\"a\" href=\"https://pf4.patternfly.org/contribution/#modifiers\" variant=\"link\">\n      Jump to modifiers in contribution guidelines\n    </Button>\n  </React.Fragment>\n);\n","title":"Links as buttons","lang":"ts"}}>
      
    </Example>,
  'Inline link as span': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Button } from '@patternfly/react-core';\n\nconst handleKeydown = (event: React.KeyboardEvent<HTMLButtonElement>) => {\n  const { key } = event;\n  const isEnterKey: boolean = key === 'Enter';\n  const isEnterOrSpaceKey: boolean = isEnterKey || key === 'Space';\n\n  if (isEnterOrSpaceKey) {\n    event.preventDefault();\n    alert(`${isEnterKey ? 'Enter' : 'Space'} key default behavior stopped by onKeyDown`);\n  }\n};\n\nexport const ButtonInlineSpanLink: React.FunctionComponent = () => (\n  <React.Fragment>\n    <p>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n      <Button variant=\"link\" isInline component=\"span\">\n        This is long button text that needs to be a span so that it will wrap inline with the text around it.\n      </Button>\n      Sed hendrerit nisi in cursus maximus. Ut malesuada nisi turpis, in condimentum velit elementum non.\n    </p>\n\n    <br />\n\n    <p>\n      Note that using a <b>span</b> as a button does not fire the <b>onclick</b> event for Enter or Space keys.\n      <Button variant=\"link\" isInline component=\"span\" onKeyDown={handleKeydown}>\n        An <b>onKeyDown</b> event listener is needed for Enter and Space key presses to prevent their default behavior\n        and trigger your code.\n      </Button>\n      Pressing the Enter or Space keys on the inline link as span above demonstrates this by triggering an alert.\n    </p>\n  </React.Fragment>\n);\n","title":"Inline link as span","lang":"ts"}}>
      
    </Example>,
  'Block level': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Button } from '@patternfly/react-core';\n\nexport const ButtonBlock: React.FunctionComponent = () => <Button isBlock>Block level button</Button>;\n","title":"Block level","lang":"ts"}}>
      
    </Example>,
  'Types': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Button } from '@patternfly/react-core';\n\nexport const ButtonTypes: React.FunctionComponent = () => (\n  <React.Fragment>\n    <Button type=\"submit\">Submit</Button> <Button type=\"reset\">Reset</Button> <Button>Default</Button>\n  </React.Fragment>\n);\n","title":"Types","lang":"ts"}}>
      
    </Example>,
  'Small': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Button } from '@patternfly/react-core';\n\nexport const ButtonSmall: React.FunctionComponent = () => (\n  <React.Fragment>\n    <Button variant=\"primary\" isSmall>\n      Primary\n    </Button>{' '}\n    <Button variant=\"secondary\" isSmall>\n      Secondary\n    </Button>{' '}\n    <Button variant=\"tertiary\" isSmall>\n      Tertiary\n    </Button>{' '}\n    <Button variant=\"danger\" isSmall>\n      Danger\n    </Button>{' '}\n    <Button variant=\"warning\" isSmall>\n      Warning\n    </Button>\n    <br />\n    <br />\n  </React.Fragment>\n);\n","title":"Small","lang":"ts"}}>
      
    </Example>,
  'Call to action': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Button } from '@patternfly/react-core';\nimport ArrowRightIcon from '@patternfly/react-icons/dist/esm/icons/arrow-right-icon';\n\nexport const ButtonCallToAction: React.FunctionComponent = () => (\n  <React.Fragment>\n    <Button variant=\"primary\" isLarge>\n      Call to action\n    </Button>{' '}\n    <Button variant=\"secondary\" isLarge>\n      Call to action\n    </Button>{' '}\n    <Button variant=\"tertiary\" isLarge>\n      Call to action\n    </Button>{' '}\n    <Button variant=\"link\" isLarge>\n      Call to action <ArrowRightIcon />\n    </Button>\n    <br />\n    <br />\n  </React.Fragment>\n);\n","title":"Call to action","lang":"ts"}}>
      
    </Example>,
  'Progress': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Button } from '@patternfly/react-core';\nimport UploadIcon from '@patternfly/react-icons/dist/esm/icons/upload-icon';\n\ninterface LoadingPropsType {\n  spinnerAriaValueText: string;\n  spinnerAriaLabelledBy?: string;\n  spinnerAriaLabel?: string;\n  isLoading: boolean;\n}\n\nexport const ButtonProgress: React.FunctionComponent = () => {\n  const [isPrimaryLoading, setIsPrimaryLoading] = React.useState<boolean>(true);\n  const [isSecondaryLoading, setIsSecondaryLoading] = React.useState<boolean>(true);\n  const [isUploading, setIsUploading] = React.useState<boolean>(false);\n\n  const primaryLoadingProps = {} as LoadingPropsType;\n  if (isPrimaryLoading) {\n    primaryLoadingProps.spinnerAriaValueText = 'Loading';\n    primaryLoadingProps.spinnerAriaLabelledBy = 'primary-loading-button';\n    primaryLoadingProps.isLoading = true;\n  }\n  const secondaryLoadingProps = {} as LoadingPropsType;\n  if (isSecondaryLoading) {\n    secondaryLoadingProps.spinnerAriaValueText = 'Loading';\n    secondaryLoadingProps.spinnerAriaLabel = 'Content being loaded';\n    secondaryLoadingProps.isLoading = true;\n  }\n  const uploadingProps = {} as LoadingPropsType;\n  if (isUploading) {\n    uploadingProps.spinnerAriaValueText = 'Loading';\n    uploadingProps.isLoading = true;\n    uploadingProps.spinnerAriaLabel = 'Uploading data';\n  }\n\n  return (\n    <React.Fragment>\n      <Button\n        variant=\"primary\"\n        id=\"primary-loading-button\"\n        onClick={() => setIsPrimaryLoading(!isPrimaryLoading)}\n        {...primaryLoadingProps}\n      >\n        {isPrimaryLoading ? 'Pause loading logs' : 'Resume loading logs'}\n      </Button>{' '}\n      <Button variant=\"secondary\" onClick={() => setIsSecondaryLoading(!isSecondaryLoading)} {...secondaryLoadingProps}>\n        {isSecondaryLoading ? 'Click to stop loading' : 'Click to start loading'}\n      </Button>{' '}\n      <Button\n        variant=\"plain\"\n        {...(!isUploading && { 'aria-label': 'Upload' })}\n        onClick={() => setIsUploading(!isUploading)}\n        icon={<UploadIcon />}\n        {...uploadingProps}\n      />\n      <br />\n      <br />\n    </React.Fragment>\n  );\n};\n","title":"Progress","lang":"ts"}}>
      
    </Example>,
  'Router link': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Button } from '@patternfly/react-core';\nimport { Link } from '@reach/router';\n\nexport const ButtonRouterLink: React.FunctionComponent = () => (\n  <Button variant=\"link\" component={(props: any) => <Link {...props} to=\"#\" />}>\n    Router link\n  </Button>\n);\n","title":"Router link","lang":"ts"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Variations"])}
    {React.createElement(pageData.examples["Disabled"])}
    {React.createElement(pageData.examples["Aria disabled"])}
    {React.createElement(pageData.examples["Aria disabled button with tooltip"])}
    {React.createElement(pageData.examples["Aria disabled link as button with tooltip"])}
    {React.createElement(pageData.examples["Links as buttons"])}
    {React.createElement(pageData.examples["Inline link as span"])}
    {React.createElement(pageData.examples["Block level"])}
    {React.createElement(pageData.examples["Types"])}
    {React.createElement(pageData.examples["Small"])}
    {React.createElement(pageData.examples["Call to action"])}
    {React.createElement(pageData.examples["Progress"])}
    {React.createElement(pageData.examples["Router link"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsButtonReactDocs';
Component.pageData = pageData;

export default Component;
