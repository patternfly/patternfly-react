import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import { Button, Drawer, DrawerActions, DrawerCloseButton, DrawerColorVariant,
DrawerContent, DrawerContentBody, DrawerHead, DrawerPanelContent, DrawerSection, Wizard, WizardFooter, WizardContextConsumer, ModalVariant, Alert, EmptyState, EmptyStateIcon, EmptyStateBody, EmptyStateSecondaryActions, Title, Progress } from '@patternfly/react-core';
import ExternalLinkAltIcon from '@patternfly/react-icons/dist/esm/icons/external-link-alt-icon';
import SlackHashIcon from '@patternfly/react-icons/dist/esm/icons/slack-hash-icon';
import FinishedStep from '../../../../../react-core/src/components/Wizard/examples/./FinishedStep';
import SampleForm from '../../../../../react-core/src/components/Wizard/examples/./SampleForm';
const pageData = {
  "id": "Wizard",
  "section": "components",
  "source": "react",
  "slug": "/components/wizard/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/Wizard/examples/Wizard.md",
  "propComponents": [
    {
      "name": "Wizard",
      "description": "",
      "props": [
        {
          "name": "appendTo",
          "type": "HTMLElement | (() => HTMLElement)",
          "description": "The parent container to append the modal to. Defaults to document.body",
          "defaultValue": "null"
        },
        {
          "name": "backButtonText",
          "type": "React.ReactNode",
          "description": "(Unused if footer is controlled) The Back button text",
          "defaultValue": "'Back'"
        },
        {
          "name": "cancelButtonText",
          "type": "React.ReactNode",
          "description": "(Unused if footer is controlled) The Cancel button text",
          "defaultValue": "'Cancel'"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes spread to the Wizard",
          "defaultValue": "''"
        },
        {
          "name": "closeButtonAriaLabel",
          "type": "string",
          "description": "(Unused if footer is controlled) aria-label for the close button",
          "defaultValue": "'Close'"
        },
        {
          "name": "description",
          "type": "React.ReactNode",
          "description": "The wizard description",
          "defaultValue": "''"
        },
        {
          "name": "descriptionComponent",
          "type": "'div' | 'p'",
          "description": "Component type of the description",
          "defaultValue": "'p'"
        },
        {
          "name": "descriptionId",
          "type": "string",
          "description": "An optional id for the description"
        },
        {
          "name": "footer",
          "type": "React.ReactNode",
          "description": "(Use to control the footer) Passing in a footer component lets you control the buttons yourself",
          "defaultValue": "null"
        },
        {
          "name": "hasDrawer",
          "type": "boolean",
          "description": "Flag indicating the wizard has a drawer for at least one of the wizard steps",
          "defaultValue": "false",
          "beta": true
        },
        {
          "name": "hasNoBodyPadding",
          "type": "boolean",
          "description": "Can remove the default padding around the main body content by setting this to true",
          "defaultValue": "false"
        },
        {
          "name": "height",
          "type": "number | string",
          "description": "Custom height of the wizard",
          "defaultValue": "null"
        },
        {
          "name": "hideClose",
          "type": "boolean",
          "description": "Flag indicating whether the close button should be in the header",
          "defaultValue": "false"
        },
        {
          "name": "isDrawerExpanded",
          "type": "boolean",
          "description": "Flag indicating the wizard drawer is expanded",
          "defaultValue": "false",
          "beta": true
        },
        {
          "name": "isNavExpandable",
          "type": "boolean",
          "description": "Flag indicating nav items with sub steps are expandable",
          "defaultValue": "false"
        },
        {
          "name": "isOpen",
          "type": "boolean",
          "description": "Flag indicating Wizard modal is open. Wizard will be placed into a modal if this prop is provided",
          "defaultValue": "undefined"
        },
        {
          "name": "mainAriaLabel",
          "type": "string",
          "description": "Aria-label for the main element",
          "defaultValue": "null"
        },
        {
          "name": "mainAriaLabelledBy",
          "type": "string",
          "description": "Sets aria-labelledby on the main element",
          "defaultValue": "null"
        },
        {
          "name": "navAriaLabel",
          "type": "string",
          "description": "Aria-label for the Nav",
          "defaultValue": "null"
        },
        {
          "name": "navAriaLabelledBy",
          "type": "string",
          "description": "Sets aria-labelledby on nav element",
          "defaultValue": "null"
        },
        {
          "name": "nextButtonText",
          "type": "React.ReactNode",
          "description": "(Unused if footer is controlled) The Next button text",
          "defaultValue": "'Next'"
        },
        {
          "name": "onBack",
          "type": "(\n  newStep: { id?: string | number; name: React.ReactNode },\n  prevStep: { prevId?: string | number; prevName: React.ReactNode }\n) => void",
          "description": "(Unused if footer is controlled) Callback function after Back button is clicked",
          "defaultValue": "null"
        },
        {
          "name": "onClose",
          "type": "() => void",
          "description": "Callback function to close the wizard",
          "defaultValue": "() => undefined as any"
        },
        {
          "name": "onGoToStep",
          "type": "(\n  newStep: { id?: string | number; name: React.ReactNode },\n  prevStep: { prevId?: string | number; prevName: React.ReactNode }\n) => void",
          "description": "Callback function when a step in the nav is clicked",
          "defaultValue": "null"
        },
        {
          "name": "onNext",
          "type": "(\n  newStep: { id?: string | number; name: React.ReactNode },\n  prevStep: { prevId?: string | number; prevName: React.ReactNode }\n) => void",
          "description": "(Unused if footer is controlled) Callback function after Next button is clicked",
          "defaultValue": "null"
        },
        {
          "name": "onSave",
          "type": "() => void",
          "description": "(Unused if footer is controlled) Callback function to save at the end of the wizard, if not specified uses onClose"
        },
        {
          "name": "startAtStep",
          "type": "number",
          "description": "The current step the wizard is on (1 or higher)",
          "defaultValue": "1"
        },
        {
          "name": "steps",
          "type": "WizardStep[]",
          "description": "The wizard steps configuration object",
          "required": true
        },
        {
          "name": "title",
          "type": "string",
          "description": "The wizard title to display if header is desired",
          "defaultValue": "null"
        },
        {
          "name": "titleId",
          "type": "string",
          "description": "An optional id for the title"
        },
        {
          "name": "width",
          "type": "number | string",
          "description": "Custom width of the wizard",
          "defaultValue": "null"
        }
      ]
    },
    {
      "name": "WizardNav",
      "description": "",
      "props": [
        {
          "name": "aria-label",
          "type": "string",
          "description": "Aria-label applied to the nav element"
        },
        {
          "name": "aria-labelledby",
          "type": "string",
          "description": "Sets the aria-labelledby attribute on the nav element"
        },
        {
          "name": "children",
          "type": "any",
          "description": "children should be WizardNavItem components"
        },
        {
          "name": "isOpen",
          "type": "boolean",
          "description": "Whether the nav is expanded",
          "defaultValue": "false"
        },
        {
          "name": "returnList",
          "type": "boolean",
          "description": "True to return the inner list without the wrapping nav element",
          "defaultValue": "false"
        }
      ]
    },
    {
      "name": "WizardNavItem",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Can nest a WizardNav component for substeps",
          "defaultValue": "null"
        },
        {
          "name": "content",
          "type": "React.ReactNode",
          "description": "The content to display in the nav item",
          "defaultValue": "''"
        },
        {
          "name": "href",
          "type": "string",
          "description": "An optional url to use for when using an anchor component",
          "defaultValue": "null"
        },
        {
          "name": "id",
          "type": "string | number",
          "description": "The id for the nav item"
        },
        {
          "name": "isCurrent",
          "type": "boolean",
          "description": "Whether the nav item is the currently active item",
          "defaultValue": "false"
        },
        {
          "name": "isDisabled",
          "type": "boolean",
          "description": "Whether the nav item is disabled",
          "defaultValue": "false"
        },
        {
          "name": "isExpandable",
          "type": "boolean",
          "description": "Flag indicating that this NavItem has child steps and is expandable",
          "defaultValue": "false"
        },
        {
          "name": "navItemComponent",
          "type": "'button' | 'a'",
          "description": "Component used to render WizardNavItem",
          "defaultValue": "'button'"
        },
        {
          "name": "onNavItemClick",
          "type": "(step: number) => any",
          "description": "Callback for when the nav item is clicked",
          "defaultValue": "() => undefined"
        },
        {
          "name": "step",
          "type": "number",
          "description": "The step passed into the onNavItemClick callback",
          "required": true
        }
      ]
    },
    {
      "name": "WizardHeader",
      "description": "",
      "props": [
        {
          "name": "closeButtonAriaLabel",
          "type": "string",
          "description": "Aria-label applied to the X (Close) button"
        },
        {
          "name": "description",
          "type": "React.ReactNode",
          "description": "Description of the wizard"
        },
        {
          "name": "descriptionComponent",
          "type": "'div' | 'p'",
          "description": "Component type of the description",
          "defaultValue": "'p'"
        },
        {
          "name": "descriptionId",
          "type": "string",
          "description": "id for the description"
        },
        {
          "name": "hideClose",
          "type": "boolean",
          "description": "Flag indicating whether the close button should be in the header"
        },
        {
          "name": "onClose",
          "type": "() => void",
          "description": "Callback function called when the X (Close) button is clicked",
          "defaultValue": "() => undefined"
        },
        {
          "name": "title",
          "type": "string",
          "description": "Title of the wizard",
          "required": true
        },
        {
          "name": "titleId",
          "type": "string",
          "description": "id for the title"
        }
      ]
    },
    {
      "name": "WizardBody",
      "description": "",
      "props": [
        {
          "name": "activeStep",
          "type": "WizardStep",
          "description": "The currently active WizardStep",
          "required": true
        },
        {
          "name": "aria-label",
          "type": "string",
          "description": "An aria-label to use for the main element"
        },
        {
          "name": "aria-labelledby",
          "type": "string",
          "description": "Sets the aria-labelledby attribute for the main element",
          "required": true
        },
        {
          "name": "children",
          "type": "any",
          "description": "Anything that can be rendered in the Wizard body",
          "required": true
        },
        {
          "name": "hasDrawer",
          "type": "boolean",
          "description": ""
        },
        {
          "name": "hasNoBodyPadding",
          "type": "boolean",
          "description": "Set to true to remove the default body padding",
          "defaultValue": "false"
        },
        {
          "name": "isDrawerExpanded",
          "type": "boolean",
          "description": "Flag indicating the wizard drawer is expanded"
        },
        {
          "name": "mainComponent",
          "type": "React.ElementType",
          "description": "Component used as the primary content container",
          "defaultValue": "'div'"
        }
      ]
    },
    {
      "name": "WizardFooter",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "any",
          "description": "Buttons in the footer",
          "required": true
        }
      ]
    },
    {
      "name": "WizardToggle",
      "description": "",
      "props": [
        {
          "name": "activeStep",
          "type": "WizardStep",
          "description": "The currently active WizardStep",
          "required": true
        },
        {
          "name": "aria-label",
          "type": "string",
          "description": "The button's aria-label",
          "defaultValue": "'Wizard Toggle'"
        },
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "The WizardFooter"
        },
        {
          "name": "hasDrawer",
          "type": "boolean",
          "description": "Flag indicating the wizard has a drawer for at least one of the wizard steps",
          "beta": true
        },
        {
          "name": "hasNoBodyPadding",
          "type": "boolean",
          "description": "Set to true to remove body padding",
          "defaultValue": "false"
        },
        {
          "name": "isDrawerExpanded",
          "type": "boolean",
          "description": "Flag indicating the wizard drawer is expanded",
          "beta": true
        },
        {
          "name": "isInPage",
          "type": "boolean",
          "description": "If the wizard is in-page",
          "defaultValue": "true"
        },
        {
          "name": "isNavOpen",
          "type": "boolean",
          "description": "If the nav is open",
          "required": true
        },
        {
          "name": "mainAriaLabel",
          "type": "string",
          "description": "The main's aria-label",
          "defaultValue": "null"
        },
        {
          "name": "mainAriaLabelledBy",
          "type": "string",
          "description": "Sets aria-labelledby on the main element",
          "defaultValue": "null"
        },
        {
          "name": "nav",
          "type": "(isWizardNavOpen: boolean) => React.ReactElement",
          "description": "Function that returns the WizardNav component",
          "required": true
        },
        {
          "name": "onNavToggle",
          "type": "(isOpen: boolean) => void",
          "description": "Callback function for when the nav is toggled",
          "required": true
        },
        {
          "name": "steps",
          "type": "WizardStep[]",
          "description": "The wizard steps",
          "required": true
        }
      ]
    },
    {
      "name": "WizardStep",
      "description": "",
      "props": [
        {
          "name": "canJumpTo",
          "type": "boolean",
          "description": "Enables or disables the step in the navigation. Enabled by default."
        },
        {
          "name": "component",
          "type": "any",
          "description": "The component to render in the main body"
        },
        {
          "name": "drawerPanelContent",
          "type": "any",
          "description": ""
        },
        {
          "name": "drawerToggleButton",
          "type": "React.ReactNode",
          "description": ""
        },
        {
          "name": "enableNext",
          "type": "boolean",
          "description": "(Unused if footer is controlled) The condition needed to enable the Next button"
        },
        {
          "name": "hideBackButton",
          "type": "boolean",
          "description": "(Unused if footer is controlled) True to hide the Back button"
        },
        {
          "name": "hideCancelButton",
          "type": "boolean",
          "description": "(Unused if footer is controlled) True to hide the Cancel button"
        },
        {
          "name": "id",
          "type": "string | number",
          "description": "Optional identifier"
        },
        {
          "name": "isFinishedStep",
          "type": "boolean",
          "description": "Setting to true hides the side nav and footer"
        },
        {
          "name": "name",
          "type": "React.ReactNode",
          "description": "The name of the step",
          "required": true
        },
        {
          "name": "nextButtonText",
          "type": "React.ReactNode",
          "description": "(Unused if footer is controlled) Can change the Next button text. If nextButtonText is also set for the Wizard, this step specific one overrides it."
        },
        {
          "name": "stepNavItemProps",
          "type": "React.HTMLProps<HTMLButtonElement | HTMLAnchorElement> | WizardNavItemProps",
          "description": "Props to pass to the WizardNavItem"
        },
        {
          "name": "steps",
          "type": "WizardStep[]",
          "description": "Sub steps"
        }
      ]
    }
  ],
  "cssPrefix": [
    "pf-c-wizard"
  ],
  "examples": [
    "Basic",
    "Anchors for nav items",
    "Incrementally enabled steps",
    "Expandable steps",
    "Finished",
    "Enabled on form validation",
    "Validate on button press",
    "Progressive steps",
    "Remember last step",
    "Wizard in modal",
    "Wizard with drawer"
  ]
};
pageData.liveContext = {
  Button,
  Drawer,
  DrawerActions,
  DrawerCloseButton,
  DrawerColorVariant,
  DrawerContent,
  DrawerContentBody,
  DrawerHead,
  DrawerPanelContent,
  DrawerSection,
  Wizard,
  WizardFooter,
  WizardContextConsumer,
  ModalVariant,
  Alert,
  EmptyState,
  EmptyStateIcon,
  EmptyStateBody,
  EmptyStateSecondaryActions,
  Title,
  Progress,
  ExternalLinkAltIcon,
  SlackHashIcon,
  FinishedStep,
  SampleForm
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Button, Wizard } from '@patternfly/react-core';\n\nclass SimpleWizard extends React.Component {\n  constructor(props) {\n    super(props);\n  }\n\n  render() {\n    const steps = [\n      { name: 'First step', component: <p>Step 1 content</p> },\n      { name: 'Second step', component: <p>Step 2 content</p> },\n      { name: 'Third step', component: <p>Step 3 content</p> },\n      { name: 'Fourth step', component: <p>Step 4 content</p> },\n      { name: 'Review', component: <p>Review step content</p>, nextButtonText: 'Finish' }\n    ];\n    const title = 'Basic wizard';\n    return <Wizard navAriaLabel={`${title} steps`} mainAriaLabel={`${title} content`} steps={steps} height={400} />;\n  }\n}","title":"Basic","lang":"js"}}>
      
    </Example>,
  'Anchors for nav items': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Button, Wizard } from '@patternfly/react-core';\nimport ExternalLinkAltIcon from '@patternfly/react-icons/dist/esm/icons/external-link-alt-icon';\nimport SlackHashIcon from '@patternfly/react-icons/dist/esm/icons/slack-hash-icon';\n\nclass WizardWithNavAnchors extends React.Component {\n  constructor(props) {\n    super(props);\n  }\n\n  render() {\n    const steps = [\n      {\n        name: (\n          <div>\n            <ExternalLinkAltIcon /> PF3\n          </div>\n        ),\n        component: <p>Step 1: Read about PF3</p>,\n        stepNavItemProps: { navItemComponent: 'a', href: 'https://www.patternfly.org/v3/', target: '_blank' }\n      },\n      {\n        name: (\n          <div>\n            <ExternalLinkAltIcon /> PF4\n          </div>\n        ),\n        component: <p>Step 2: Read about PF4</p>,\n        stepNavItemProps: { navItemComponent: 'a', href: 'https://www.patternfly.org/v4/', target: '_blank' }\n      },\n      {\n        name: (\n          <div>\n            <SlackHashIcon /> Join us on slack\n          </div>\n        ),\n        component: (\n          <Button variant=\"link\" component=\"a\" target=\"_blank\" href=\"https://patternfly.slack.com/\">\n            Join the conversation\n          </Button>\n        ),\n        stepNavItemProps: { navItemComponent: 'a', href: 'https://patternfly.slack.com/', target: '_blank' }\n      }\n    ];\n    const title = 'Anchor link wizard';\n    return <Wizard navAriaLabel={`${title} steps`} mainAriaLabel={`${title} content`} steps={steps} height={400} />;\n  }\n}","title":"Anchors for nav items","lang":"js"}}>
      
    </Example>,
  'Incrementally enabled steps': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Button, Wizard } from '@patternfly/react-core';\n\nclass IncrementallyEnabledStepsWizard extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      stepIdReached: 1\n    };\n    this.onNext = ({ id }) => {\n      this.setState({\n        stepIdReached: this.state.stepIdReached < id ? id : this.state.stepIdReached\n      });\n    };\n    this.closeWizard = () => {\n      console.log('close wizard');\n    };\n  }\n\n  render() {\n    const { stepIdReached } = this.state;\n\n    const steps = [\n      { id: 1, name: 'First step', component: <p>Step 1 content</p> },\n      { id: 2, name: 'Second step', component: <p>Step 2 content</p>, canJumpTo: stepIdReached >= 2 },\n      { id: 3, name: 'Third step', component: <p>Step 3 content</p>, canJumpTo: stepIdReached >= 3 },\n      { id: 4, name: 'Fourth step', component: <p>Step 4 content</p>, canJumpTo: stepIdReached >= 4 },\n      {\n        id: 5,\n        name: 'Review',\n        component: <p>Review step content</p>,\n        nextButtonText: 'Finish',\n        canJumpTo: stepIdReached >= 5\n      }\n    ];\n    const title = 'Incrementally enabled wizard';\n    return (\n      <Wizard\n        navAriaLabel={`${title} steps`}\n        mainAriaLabel={`${title} content`}\n        onClose={this.closeWizard}\n        steps={steps}\n        onNext={this.onNext}\n        height={400}\n      />\n    );\n  }\n}","title":"Incrementally enabled steps","lang":"js"}}>
      
    </Example>,
  'Expandable steps': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Button, Wizard } from '@patternfly/react-core';\n\nclass SimpleWizard extends React.Component {\n  constructor(props) {\n    super(props);\n  }\n\n  render() {\n    const steps = [\n      {\n        name: 'First step',\n        steps: [\n          { name: 'Substep A', component: <p>Substep A content</p> },\n          { name: 'Substep B', component: <p>Substep B content</p> }\n        ]\n      },\n      { name: 'Second step', component: <p>Step 2 content</p> },\n      {\n        name: 'Third step',\n        steps: [\n          { name: 'Substep C', component: <p>Substep C content</p> },\n          { name: 'Substep D', component: <p>Substep D content</p> }\n        ]\n      },\n      { name: 'Fourth step', component: <p>Step 4 content</p> },\n      { name: 'Review', component: <p>Review step content</p>, nextButtonText: 'Finish' }\n    ];\n    const title = 'Basic wizard';\n    return (\n      <Wizard\n        navAriaLabel={`${title} steps`}\n        mainAriaLabel={`${title} content`}\n        steps={steps}\n        height={400}\n        isNavExpandable\n      />\n    );\n  }\n}","title":"Expandable steps","lang":"js"}}>
      
    </Example>,
  'Finished': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Button, Wizard } from '@patternfly/react-core';\nimport FinishedStep from './examples/FinishedStep';\n\nclass FinishedStepWizard extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.closeWizard = () => {\n      console.log('close wizard');\n    };\n  }\n\n  render() {\n    const steps = [\n      { name: 'First step', component: <p>Step 1 content</p> },\n      { name: 'Second step', component: <p>Step 2 content</p> },\n      { name: 'Third step', component: <p>Step 3 content</p> },\n      { name: 'Fourth step', component: <p>Step 4 content</p> },\n      { name: 'Review', component: <p>Review step content</p>, nextButtonText: 'Finish' },\n      { name: 'Finish', component: <FinishedStep onClose={this.closeWizard} />, isFinishedStep: true }\n    ];\n    const title = 'Finished wizard';\n    return (\n      <Wizard\n        navAriaLabel={`${title} steps`}\n        mainAriaLabel={`${title} content`}\n        onClose={this.closeWizard}\n        steps={steps}\n        height={400}\n      />\n    );\n  }\n}","title":"Finished","lang":"js"}}>
      
    </Example>,
  'Enabled on form validation': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Button, Wizard, Form, FormGroup, TextInput } from '@patternfly/react-core';\nimport SampleForm from './examples/SampleForm';\n\nclass ValidationWizard extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      isFormValid: false,\n      formValue: 'Thirty',\n      allStepsValid: false,\n      stepIdReached: 1\n    };\n\n    this.closeWizard = () => {\n      console.log('close wizard');\n    };\n\n    this.onFormChange = (isValid, value) => {\n      this.setState(\n        {\n          isFormValid: isValid,\n          formValue: value\n        },\n        this.areAllStepsValid\n      );\n    };\n\n    this.areAllStepsValid = () => {\n      this.setState({\n        allStepsValid: this.state.isFormValid\n      });\n    };\n\n    this.onNext = ({ id, name }, { prevId, prevName }) => {\n      console.log(`current id: ${id}, current name: ${name}, previous id: ${prevId}, previous name: ${prevName}`);\n      this.setState({\n        stepIdReached: this.state.stepIdReached < id ? id : this.state.stepIdReached\n      });\n      this.areAllStepsValid();\n    };\n\n    this.onBack = ({ id, name }, { prevId, prevName }) => {\n      console.log(`current id: ${id}, current name: ${name}, previous id: ${prevId}, previous name: ${prevName}`);\n      this.areAllStepsValid();\n    };\n\n    this.onGoToStep = ({ id, name }, { prevId, prevName }) => {\n      console.log(`current id: ${id}, current name: ${name}, previous id: ${prevId}, previous name: ${prevName}`);\n    };\n\n    this.onSave = () => {\n      console.log('Saved and closed the wizard');\n      this.setState({\n        isOpen: false\n      });\n    };\n  }\n\n  render() {\n    const { isFormValid, formValue, allStepsValid, stepIdReached } = this.state;\n\n    const steps = [\n      { id: 1, name: 'Information', component: <p>Step 1 content</p> },\n      {\n        name: 'Configuration',\n        steps: [\n          {\n            id: 2,\n            name: 'Substep A with validation',\n            component: <SampleForm formValue={formValue} isFormValid={isFormValid} onChange={this.onFormChange} />,\n            enableNext: isFormValid,\n            canJumpTo: stepIdReached >= 2\n          },\n          { id: 3, name: 'Substep B', component: <p>Substep B</p>, canJumpTo: stepIdReached >= 3 }\n        ]\n      },\n      {\n        id: 4,\n        name: 'Additional',\n        component: <p>Step 3 content</p>,\n        enableNext: allStepsValid,\n        canJumpTo: stepIdReached >= 4\n      },\n      {\n        id: 5,\n        name: 'Review',\n        component: <p>Step 4 content</p>,\n        nextButtonText: 'Close',\n        canJumpTo: stepIdReached >= 5\n      }\n    ];\n    const title = 'Enabled on form validation wizard';\n    return (\n      <Wizard\n        navAriaLabel={`${title} steps`}\n        mainAriaLabel={`${title} content`}\n        onClose={this.closeWizard}\n        onSave={this.onSave}\n        steps={steps}\n        onNext={this.onNext}\n        onBack={this.onBack}\n        onGoToStep={this.onGoToStep}\n        height={400}\n      />\n    );\n  }\n}","title":"Enabled on form validation","lang":"js"}}>
      
    </Example>,
  'Validate on button press': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Button, Wizard, WizardFooter, WizardContextConsumer, Alert } from '@patternfly/react-core';\nimport SampleForm from './examples/SampleForm';\nimport FinishedStep from './examples/FinishedStep';\n\nclass ValidateButtonPressWizard extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      stepsValid: 0\n    };\n\n    this.closeWizard = () => {\n      console.log('close wizard');\n    };\n\n    this.validateLastStep = onNext => {\n      const { stepsValid } = this.state;\n      if (stepsValid !== 1) {\n        this.setState({\n          stepsValid: 1\n        });\n      } else {\n        onNext();\n      }\n    };\n  }\n\n  render() {\n    const { stepsValid } = this.state;\n\n    const steps = [\n      { name: 'First step', component: <p>Step 1 content</p> },\n      { name: 'Second step', component: <p>Step 2 content</p> },\n      {\n        name: 'Final Step',\n        component: (\n          <>\n            {stepsValid === 1 && (\n              <div style={{ padding: '15px 0' }}>\n                <Alert variant=\"warning\" title=\"Validation failed, please try again\" />\n              </div>\n            )}\n            <SampleForm formValue=\"Validating on button press\" isFormValid={stepsValid !== 1} />\n          </>\n        )\n      },\n      { name: 'Finish', component: <FinishedStep onClose={this.closeWizard} />, isFinishedStep: true }\n    ];\n\n    const CustomFooter = (\n      <WizardFooter>\n        <WizardContextConsumer>\n          {({ activeStep, goToStepByName, goToStepById, onNext, onBack, onClose }) => {\n            if (activeStep.name !== 'Final Step') {\n              return (\n                <>\n                  <Button variant=\"primary\" type=\"submit\" onClick={onNext}>\n                    Forward\n                  </Button>\n                  <Button\n                    variant=\"secondary\"\n                    onClick={onBack}\n                    className={activeStep.name === 'Step 1' ? 'pf-m-disabled' : ''}\n                  >\n                    Backward\n                  </Button>\n                  <Button variant=\"link\" onClick={onClose}>\n                    Cancel\n                  </Button>\n                </>\n              );\n            }\n            // Final step buttons\n            return (\n              <>\n                <Button onClick={() => this.validateLastStep(onNext)}>Validate</Button>\n                <Button onClick={() => goToStepByName('Step 1')}>Go to Beginning</Button>\n              </>\n            );\n          }}\n        </WizardContextConsumer>\n      </WizardFooter>\n    );\n    const title = 'Validate on button press wizard';\n    return (\n      <Wizard\n        navAriaLabel={`${title} steps`}\n        mainAriaLabel={`${title} content`}\n        onClose={this.closeWizard}\n        footer={CustomFooter}\n        steps={steps}\n        height={400}\n      />\n    );\n  }\n}","title":"Validate on button press","lang":"js"}}>
      
      <p {...{"className":"ws-p"}}>
        {`This example demonstrates how to use the `}
        
        <code {...{"className":"ws-code"}}>
          {`WizardContextConsumer`}
        </code>
        {` to consume the `}
        
        <code {...{"className":"ws-code"}}>
          {`WizardContext`}
        </code>
        {`. `}
        
        <code {...{"className":"ws-code"}}>
          {`WizardContext`}
        </code>
        {` can be used to imperatively move to a specific wizard step.`}
      </p>
      
      <p {...{"className":"ws-p"}}>
        {`The definition of the `}
        
        <code {...{"className":"ws-code"}}>
          {`WizardContext`}
        </code>
        {` is as follows:`}
      </p>
      
      <Example {...{"code":"interface WizardContext {\n  goToStepById: (stepId: number | string) => void;\n  goToStepByName: (stepName: string) => void;\n  onNext: () => void;\n  onBack: () => void;\n  onClose: () => void;\n  activeStep: WizardStep;\n}"}}>
        
      </Example>
    </Example>,
  'Progressive steps': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Button, Radio, Wizard, WizardFooter, WizardContextConsumer, Alert } from '@patternfly/react-core';\nimport SampleForm from './examples/SampleForm';\nimport FinishedStep from './examples/FinishedStep';\n\nclass ProgressiveWizard extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      showCreateStep: false,\n      showUpdateStep: false,\n      showOptionsStep: false,\n      showReviewStep: false,\n      getStartedStepRadio: 'Create',\n      createStepRadio: 'Quick',\n      updateStepRadio: 'Quick'\n    };\n    this.closeWizard = () => {\n      console.log('close wizard');\n    };\n    this.onGoToStep = ({ id, name }, { prevId, prevName }) => {\n      // Remove steps after the currently clicked step\n      if (name === 'Get started') {\n        this.setState({\n          showReviewStep: false,\n          showOptionsStep: false,\n          showCreateStep: false,\n          showUpdateStep: false\n        });\n      } else if (name === 'Create options' || name === 'Update options') {\n        this.setState({\n          showReviewStep: false,\n          showOptionsStep: false\n        });\n      } else if (name.indexOf('Substep') > -1) {\n        this.setState({\n          showReviewStep: false\n        });\n      }\n    };\n    this.getNextStep = (activeStep, callback) => {\n      if (activeStep.name === 'Get started') {\n        if (this.state.getStartedStepRadio === 'Create') {\n          this.setState(\n            {\n              showCreateStep: true,\n              showUpdateStep: false,\n              showOptionsStep: false,\n              showReviewStep: false\n            },\n            () => {\n              callback();\n            }\n          );\n        } else {\n          this.setState(\n            {\n              showCreateStep: false,\n              showUpdateStep: true,\n              showOptionsStep: false,\n              showReviewStep: false\n            },\n            () => {\n              callback();\n            }\n          );\n        }\n      } else if (activeStep.name === 'Create options' || activeStep.name === 'Update options') {\n        this.setState(\n          {\n            showOptionsStep: true,\n            showReviewStep: false\n          },\n          () => {\n            callback();\n          }\n        );\n      } else if (activeStep.name === 'Substep 3') {\n        this.setState(\n          {\n            showReviewStep: true\n          },\n          () => {\n            callback();\n          }\n        );\n      } else {\n        callback();\n      }\n    };\n    this.getPreviousStep = (activeStep, callback) => {\n      if (activeStep.name === 'Review') {\n        this.setState(\n          {\n            showReviewStep: false\n          },\n          () => {\n            callback();\n          }\n        );\n      } else if (activeStep.name === 'Substep 1') {\n        this.setState(\n          {\n            showOptionsStep: false\n          },\n          () => {\n            callback();\n          }\n        );\n      } else if (activeStep.name === 'Create options') {\n        this.setState(\n          {\n            showCreateStep: false\n          },\n          () => {\n            callback();\n          }\n        );\n      } else if (activeStep.name === 'Update options') {\n        this.setState(\n          {\n            showUpdateStep: false\n          },\n          () => {\n            callback();\n          }\n        );\n      } else {\n        callback();\n      }\n    };\n  }\n\n  render() {\n    const {\n      stepsValid,\n      getStartedStepRadio,\n      createStepRadio,\n      updateStepRadio,\n      showCreateStep,\n      showUpdateStep,\n      showOptionsStep,\n      showReviewStep\n    } = this.state;\n\n    const getStartedStep = {\n      name: 'Get started',\n      component: (\n        <div>\n          <Radio\n            value=\"Create\"\n            isChecked={getStartedStepRadio === 'Create'}\n            onChange={(_, event) => this.setState({ getStartedStepRadio: event.currentTarget.value })}\n            label=\"Create a new thing\"\n            name=\"radio-step-start\"\n            id=\"radio-step-start-1\"\n          />{' '}\n          <Radio\n            value=\"Update\"\n            isChecked={getStartedStepRadio === 'Update'}\n            onChange={(_, event) => this.setState({ getStartedStepRadio: event.currentTarget.value })}\n            label=\"Update an existing thing\"\n            name=\"radio-step-start\"\n            id=\"radio-step-start-2\"\n          />\n        </div>\n      )\n    };\n\n    const createStep = {\n      name: 'Create options',\n      component: (\n        <div>\n          <Radio\n            value=\"Quick\"\n            isChecked={createStepRadio === 'Quick'}\n            onChange={(_, event) => this.setState({ createStepRadio: event.currentTarget.value })}\n            label=\"Quick create\"\n            name=\"radio-step-create\"\n            id=\"radio-step-create-1\"\n          />{' '}\n          <Radio\n            value=\"Custom\"\n            isChecked={createStepRadio === 'Custom'}\n            onChange={(_, event) => this.setState({ createStepRadio: event.currentTarget.value })}\n            label=\"Custom create\"\n            name=\"radio-step-create\"\n            id=\"radio-step-create-2\"\n          />\n        </div>\n      )\n    };\n\n    const updateStep = {\n      name: 'Update options',\n      component: (\n        <div>\n          <Radio\n            value=\"Quick\"\n            isChecked={updateStepRadio === 'Quick'}\n            onChange={(_, event) => this.setState({ updateStepRadio: event.currentTarget.value })}\n            label=\"Quick update\"\n            name=\"radio-step-update\"\n            id=\"radio-step-update-1\"\n          />{' '}\n          <Radio\n            value=\"Custom\"\n            isChecked={updateStepRadio === 'Custom'}\n            onChange={(_, event) => this.setState({ updateStepRadio: event.currentTarget.value })}\n            label=\"Custom update\"\n            name=\"radio-step-update\"\n            id=\"radio-step-update-2\"\n          />\n        </div>\n      )\n    };\n\n    const optionsStep = {\n      name: showCreateStep ? `${createStepRadio} Options` : `${updateStepRadio} Options`,\n      steps: [\n        {\n          name: 'Substep 1',\n          component: 'Substep 1'\n        },\n        {\n          name: 'Substep 2',\n          component: 'Substep 2'\n        },\n        {\n          name: 'Substep 3',\n          component: 'Substep 3'\n        }\n      ]\n    };\n\n    const reviewStep = {\n      name: 'Review',\n      component: (\n        <div>\n          <div>First choice: {getStartedStepRadio}</div>\n          <div>Second choice: {showCreateStep ? createStepRadio : updateStepRadio}</div>\n        </div>\n      )\n    };\n\n    const steps = [\n      getStartedStep,\n      ...(showCreateStep ? [createStep] : []),\n      ...(showUpdateStep ? [updateStep] : []),\n      ...(showOptionsStep ? [optionsStep] : []),\n      ...(showReviewStep ? [reviewStep] : [])\n    ];\n\n    const CustomFooter = (\n      <WizardFooter>\n        <WizardContextConsumer>\n          {({ activeStep, goToStepByName, goToStepById, onNext, onBack, onClose }) => {\n            return (\n              <>\n                <Button variant=\"primary\" type=\"submit\" onClick={() => this.getNextStep(activeStep, onNext)}>\n                  {activeStep.name === 'Review' ? 'Finish' : 'Next'}\n                </Button>\n                <Button\n                  variant=\"secondary\"\n                  onClick={() => this.getPreviousStep(activeStep, onBack)}\n                  className={activeStep.name === 'Get Started' ? 'pf-m-disabled' : ''}\n                >\n                  Back\n                </Button>\n                <Button variant=\"link\" onClick={onClose}>\n                  Cancel\n                </Button>\n              </>\n            );\n          }}\n        </WizardContextConsumer>\n      </WizardFooter>\n    );\n    const title = 'Progressive wizard';\n    return (\n      <Wizard\n        navAriaLabel={`${title} steps`}\n        mainAriaLabel={`${title} content`}\n        onClose={this.closeWizard}\n        footer={CustomFooter}\n        onGoToStep={this.onGoToStep}\n        steps={steps}\n        height={400}\n      />\n    );\n  }\n}","title":"Progressive steps","lang":"js"}}>
      
    </Example>,
  'Remember last step': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Button, Wizard } from '@patternfly/react-core';\n\nclass RememberLastStepWizard extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      step: 1\n    };\n    this.closeWizard = () => {\n      console.log('close wizard');\n    };\n    this.onMove = (curr, prev) => {\n      this.setState({\n        step: curr.id\n      });\n    };\n    this.onSave = () => {\n      this.setState({\n        step: 1\n      });\n    };\n  }\n\n  render() {\n    const { step } = this.state;\n\n    const steps = [\n      { id: 1, name: 'First step', component: <p>Step 1 content</p> },\n      { id: 2, name: 'Second step', component: <p>Step 2 content</p> },\n      { id: 3, name: 'Third step', component: <p>Step 3 content</p> },\n      { id: 4, name: 'Fourth step', component: <p>Step 4 content</p> },\n      { id: 5, name: 'Review', component: <p>Review step content</p>, nextButtonText: 'Finish' }\n    ];\n    const title = 'Remember last step wizard';\n    return (\n      <Wizard\n        navAriaLabel={`${title} steps`}\n        mainAriaLabel={`${title} content`}\n        startAtStep={step}\n        onNext={this.onMove}\n        onBack={this.onMove}\n        onSave={this.onSave}\n        onClose={this.closeWizard}\n        description=\"Simple Wizard Description\"\n        steps={steps}\n        height={400}\n      />\n    );\n  }\n}","title":"Remember last step","lang":"js"}}>
      
    </Example>,
  'Wizard in modal': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Button, Wizard } from '@patternfly/react-core';\n\nclass WizardInModal extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      isOpen: false\n    };\n    this.handleModalToggle = () => {\n      this.setState(({ isOpen }) => ({\n        isOpen: !isOpen\n      }));\n    };\n  }\n\n  render() {\n    const { isOpen } = this.state;\n\n    const steps = [\n      { name: 'First step', component: <p>Step 1 content</p> },\n      { name: 'Second step', component: <p>Step 2 content</p> },\n      { name: 'Third step', component: <p>Step 3 content</p> },\n      { name: 'Fourth step', component: <p>Step 4 content</p> },\n      { name: 'Review', component: <p>Review step content</p>, nextButtonText: 'Finish' }\n    ];\n    const title = 'Wizard in modal';\n    return (\n      <React.Fragment>\n        <Button variant=\"primary\" onClick={this.handleModalToggle}>\n          Show Modal\n        </Button>\n        <Wizard\n          title={title}\n          description=\"Simple Wizard Description\"\n          descriptionComponent=\"div\"\n          steps={steps}\n          onClose={this.handleModalToggle}\n          isOpen={isOpen}\n        />\n      </React.Fragment>\n    );\n  }\n}","title":"Wizard in modal","lang":"js"}}>
      
    </Example>,
  'Wizard with drawer': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Button,\n  DrawerActions,\n  DrawerCloseButton,\n  DrawerHead,\n  DrawerPanelContent,\n  Text,\n  TextContent,\n  Wizard\n} from '@patternfly/react-core';\n\nclass WizardWithDrawer extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      isOpen: false,\n      isDrawerExpanded: false,\n      sectionGray: false,\n      panelGray: true,\n      contentGray: false\n    };\n\n    this.drawerRef = React.createRef();\n\n    this.onExpand = () => {\n      this.drawerRef.current && this.drawerRef.current.focus();\n    };\n\n    this.onOpenClick = () => {\n      this.setState({\n        isDrawerExpanded: true\n      });\n    };\n\n    this.onCloseClick = () => {\n      this.setState({\n        isDrawerExpanded: false\n      });\n    };\n  }\n\n  render() {\n    const { isDrawerExpanded } = this.state;\n\n    const panel1Content = (\n      <DrawerPanelContent widths={{ default: 'width_33' }} colorVariant={DrawerColorVariant.light200}>\n        <DrawerHead>\n          <span tabIndex={isDrawerExpanded ? 0 : -1} ref={this.drawerRef}>\n            drawer-panel-1 content\n          </span>\n          <DrawerActions>\n            <DrawerCloseButton onClick={this.onCloseClick} />\n          </DrawerActions>\n        </DrawerHead>\n      </DrawerPanelContent>\n    );\n\n    const panel2Content = (\n      <DrawerPanelContent widths={{ default: 'width_33' }} colorVariant={DrawerColorVariant.light200}>\n        <DrawerHead>\n          <span tabIndex={0} ref={this.drawerRef}>\n            drawer-panel-2 content\n          </span>\n          <DrawerActions>\n            <DrawerCloseButton onClick={this.onCloseClick} />\n          </DrawerActions>\n        </DrawerHead>\n      </DrawerPanelContent>\n    );\n\n    const panel3Content = (\n      <DrawerPanelContent widths={{ default: 'width_33' }} colorVariant={DrawerColorVariant.light200}>\n        <DrawerHead>\n          <span tabIndex={0} ref={this.drawerRef}>\n            drawer-panel-3 content\n          </span>\n          <DrawerActions>\n            <DrawerCloseButton onClick={this.onCloseClick} />\n          </DrawerActions>\n        </DrawerHead>\n      </DrawerPanelContent>\n    );\n\n    const drawerToggleButton = (\n      <Button isInline variant=\"link\" onClick={this.onOpenClick}>\n        Open Drawer\n      </Button>\n    );\n\n    const steps = [\n      {\n        name: 'Information',\n        component: <p>Information step content</p>,\n        drawerPanelContent: panel1Content,\n        drawerToggleButton: drawerToggleButton\n      },\n      {\n        name: 'Configuration',\n        steps: [\n          {\n            name: 'Substep A',\n            component: <p>Substep A content</p>,\n            drawerPanelContent: panel2Content,\n            drawerToggleButton: drawerToggleButton\n          },\n          {\n            name: 'Substep B',\n            component: <p>Substep B content</p>,\n            drawerPanelContent: panel2Content,\n            drawerToggleButton: drawerToggleButton\n          },\n          {\n            name: 'Substep C',\n            component: <p>Substep C content</p>,\n            drawerPanelContent: panel2Content,\n            drawerToggleButton: drawerToggleButton\n          }\n        ]\n      },\n      {\n        name: 'Additional',\n        component: <p>Additional step content</p>,\n        drawerPanelContent: panel3Content,\n        drawerToggleButton: drawerToggleButton\n      },\n      {\n        name: 'Review',\n        component: <p>Review step content</p>,\n        nextButtonText: 'Finish'\n      }\n    ];\n\n    const title = 'Wizard with drawer';\n\n    return (\n      <React.Fragment>\n        <Wizard\n          height={400}\n          isDrawerExpanded={isDrawerExpanded}\n          hasDrawer\n          navAriaLabel={`${title} steps`}\n          steps={steps}\n        />\n      </React.Fragment>\n    );\n  }\n}","title":"Wizard with drawer","lang":"js","isBeta":true}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["Anchors for nav items"])}
    {React.createElement(pageData.examples["Incrementally enabled steps"])}
    {React.createElement(pageData.examples["Expandable steps"])}
    {React.createElement(pageData.examples["Finished"])}
    {React.createElement(pageData.examples["Enabled on form validation"])}
    {React.createElement(pageData.examples["Validate on button press"])}
    {React.createElement(pageData.examples["Progressive steps"])}
    {React.createElement(pageData.examples["Remember last step"])}
    {React.createElement(pageData.examples["Wizard in modal"])}
    {React.createElement(pageData.examples["Wizard with drawer"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsWizardReactDocs';
Component.pageData = pageData;

export default Component;
