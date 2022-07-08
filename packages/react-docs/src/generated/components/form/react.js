import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import {
Button,
Form,
FormGroup,
Popover,
TextInput,
TextArea,
FormSelect,
FormHelperText,
FormFieldGroup,
FormFieldGroupHeader,
FormFieldGroupExpandable,
Checkbox,
ActionGroup,
Radio
} from '@patternfly/react-core';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';
import HelpIcon from '@patternfly/react-icons/dist/esm/icons/help-icon';
import TrashIcon from '@patternfly/react-icons/dist/esm/icons/trash-icon';
const pageData = {
  "id": "Form",
  "section": "components",
  "source": "react",
  "slug": "/components/form/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/Form/examples/Form.md",
  "propComponents": [
    {
      "name": "ActionGroup",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Anything that can be rendered as ActionGroup content.",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the ActionGroup.",
          "defaultValue": "''"
        }
      ]
    },
    {
      "name": "Form",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Anything that can be rendered as Form content.",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the Form.",
          "defaultValue": "''"
        },
        {
          "name": "isHorizontal",
          "type": "boolean",
          "description": "Sets the Form to horizontal.",
          "defaultValue": "false"
        },
        {
          "name": "isWidthLimited",
          "type": "boolean",
          "description": "Limits the max-width of the form.",
          "defaultValue": "false"
        },
        {
          "name": "maxWidth",
          "type": "string",
          "description": "Sets a custom max-width for the form.",
          "defaultValue": "''"
        }
      ]
    },
    {
      "name": "FormGroup",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Anything that can be rendered as FormGroup content.",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the FormGroup.",
          "defaultValue": "''"
        },
        {
          "name": "fieldId",
          "type": "string",
          "description": "ID of an individual field or a group of multiple fields. Required when a role of \"group\" or \"radiogroup\" is passed in.\nIf only one field is included, its ID attribute and this prop must be the same."
        },
        {
          "name": "hasNoPaddingTop",
          "type": "boolean",
          "description": "Removes top spacer from label.",
          "defaultValue": "false"
        },
        {
          "name": "helperText",
          "type": "React.ReactNode",
          "description": "Helper text regarding the field. It can be a simple text or an object."
        },
        {
          "name": "helperTextIcon",
          "type": "React.ReactNode",
          "description": "Icon displayed to the left of the helper text."
        },
        {
          "name": "helperTextInvalid",
          "type": "React.ReactNode",
          "description": "Helper text after the field when the field is invalid. It can be a simple text or an object."
        },
        {
          "name": "helperTextInvalidIcon",
          "type": "React.ReactNode",
          "description": "Icon displayed to the left of the helper text when the field is invalid."
        },
        {
          "name": "isHelperTextBeforeField",
          "type": "boolean",
          "description": "Flag to position the helper text before the field. False by default",
          "defaultValue": "false"
        },
        {
          "name": "isInline",
          "type": "boolean",
          "description": "Sets the FormGroup isInline.",
          "defaultValue": "false"
        },
        {
          "name": "isRequired",
          "type": "boolean",
          "description": "Sets the FormGroup required.",
          "defaultValue": "false"
        },
        {
          "name": "isStack",
          "type": "boolean",
          "description": "Sets the FormGroupControl to be stacked",
          "defaultValue": "false"
        },
        {
          "name": "label",
          "type": "React.ReactNode",
          "description": "Label text before the field."
        },
        {
          "name": "labelIcon",
          "type": "React.ReactElement",
          "description": "Sets an icon for the label. For providing additional context. Host element for Popover"
        },
        {
          "name": "labelInfo",
          "type": "React.ReactNode",
          "description": "Additional label information displayed after the label."
        },
        {
          "name": "role",
          "type": "string",
          "description": "Sets the role of the form group. Pass in \"radiogroup\" when the form group contains multiple\nradio inputs, or pass in \"group\" when the form group contains multiple of any other input type."
        },
        {
          "name": "validated",
          "type": "'success' | 'warning' | 'error' | 'default'",
          "description": "Sets the FormGroup validated. If you set to success, text color of helper text will be modified to indicate valid state.\nIf set to error, text color of helper text will be modified to indicate error state.\nIf set to warning, text color of helper text will be modified to indicate warning state.",
          "defaultValue": "'default'"
        }
      ]
    },
    {
      "name": "FormSection",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the section"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the section",
          "defaultValue": "''"
        },
        {
          "name": "title",
          "type": "React.ReactNode",
          "description": "Title for the section",
          "defaultValue": "''"
        },
        {
          "name": "titleElement",
          "type": "'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'",
          "description": "Element to wrap the section title",
          "defaultValue": "'div'"
        }
      ]
    },
    {
      "name": "FormHelperText",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the Helper Text Item",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the Helper Text Item",
          "defaultValue": "''"
        },
        {
          "name": "component",
          "type": "'p' | 'div'",
          "description": "Component type of the form helper text",
          "defaultValue": "'p'"
        },
        {
          "name": "icon",
          "type": "React.ReactNode",
          "description": "Icon displayed to the left of the helper text.",
          "defaultValue": "null"
        },
        {
          "name": "isError",
          "type": "boolean",
          "description": "Adds error styling to the Helper Text  *",
          "defaultValue": "false"
        },
        {
          "name": "isHidden",
          "type": "boolean",
          "description": "Hides the helper text *",
          "defaultValue": "true"
        }
      ]
    },
    {
      "name": "FormFieldGroup",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Anything that can be rendered as form field group content."
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the form field group."
        },
        {
          "name": "header",
          "type": "React.ReactNode",
          "description": "Form field group header"
        }
      ]
    },
    {
      "name": "FormFieldGroupExpandable",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Anything that can be rendered as form field group content."
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the form field group."
        },
        {
          "name": "header",
          "type": "React.ReactNode",
          "description": "Form field group header"
        },
        {
          "name": "isExpanded",
          "type": "boolean",
          "description": "Flag indicating if the form field group is initially expanded",
          "defaultValue": "false"
        },
        {
          "name": "toggleAriaLabel",
          "type": "string",
          "description": "Aria-label to use on the form field group toggle button"
        }
      ]
    },
    {
      "name": "FormFieldGroupHeader",
      "description": "",
      "props": [
        {
          "name": "actions",
          "type": "React.ReactNode",
          "description": "Field group header actions"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the section"
        },
        {
          "name": "titleDescription",
          "type": "React.ReactNode",
          "description": "Field group header title description"
        },
        {
          "name": "titleText",
          "type": "FormFieldGroupHeaderTitleTextObject",
          "description": "Field group header title text"
        }
      ]
    },
    {
      "name": "FormFieldGroupHeaderTitleTextObject",
      "description": "",
      "props": []
    },
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
    },
    {
      "name": "Popover",
      "description": "",
      "props": [
        {
          "name": "alertSeverityScreenReaderText",
          "type": "string",
          "description": "Text announced by screen reader when alert severity variant is set to indicate severity level",
          "beta": true
        },
        {
          "name": "alertSeverityVariant",
          "type": "'default' | 'info' | 'warning' | 'success' | 'danger'",
          "description": "Severity variants for an alert popover. This modifies the color of the header to match the severity.",
          "beta": true
        },
        {
          "name": "animationDuration",
          "type": "number",
          "description": "CSS fade transition animation duration",
          "defaultValue": "300"
        },
        {
          "name": "appendTo",
          "type": "HTMLElement | ((ref?: HTMLElement) => HTMLElement)",
          "description": "The element to append the popover to, defaults to body",
          "defaultValue": "() => document.body"
        },
        {
          "name": "aria-label",
          "type": "string",
          "description": "Accessible label, required when header is not present",
          "defaultValue": "''"
        },
        {
          "name": "bodyContent",
          "type": "React.ReactNode | ((hide: () => void) => React.ReactNode)",
          "description": "Body content\nIf you want to close the popover after an action within the bodyContent, you can use the isVisible prop for manual control,\nor you can provide a function which will receive a callback as an argument to hide the popover\ni.e. bodyContent={hide => <Button onClick={() => hide()}>Close</Button>}",
          "required": true
        },
        {
          "name": "boundary",
          "type": "'scrollParent' | 'window' | 'viewport' | HTMLElement",
          "description": "- no longer used. if you want to constrain the popper to a specific element use the appendTo prop instead",
          "deprecated": true
        },
        {
          "name": "children",
          "type": "ReactElement<any>",
          "description": "The reference element to which the Popover is relatively placed to.\nIf you cannot wrap the reference with the Popover, you can use the reference prop instead.\nUsage: <Popover><Button>Reference</Button></Popover>"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Popover additional class",
          "defaultValue": "''"
        },
        {
          "name": "closeBtnAriaLabel",
          "type": "string",
          "description": "Aria label for the Close button",
          "defaultValue": "'Close'"
        },
        {
          "name": "distance",
          "type": "number",
          "description": "Distance of the popover to its target, defaults to 25",
          "defaultValue": "25"
        },
        {
          "name": "enableFlip",
          "type": "boolean",
          "description": "If true, tries to keep the popover in view by flipping it if necessary.\nIf the position is set to 'auto', this prop is ignored",
          "defaultValue": "true"
        },
        {
          "name": "flipBehavior",
          "type": "'flip'\n| (\n    | 'top'\n    | 'bottom'\n    | 'left'\n    | 'right'\n    | 'top-start'\n    | 'top-end'\n    | 'bottom-start'\n    | 'bottom-end'\n    | 'left-start'\n    | 'left-end'\n    | 'right-start'\n    | 'right-end'\n  )[]",
          "description": "The desired position to flip the popover to if the initial position is not possible.\nBy setting this prop to 'flip' it attempts to flip the popover to the opposite side if there is no space.\nYou can also pass an array of positions that determines the flip order. It should contain the initial position\nfollowed by alternative positions if that position is unavailable.\nExample: Initial position is 'top'. Button with popover is in the top right corner. 'flipBehavior' is set to\n['top', 'right', 'left']. Since there is no space to the top, it checks if right is available. There's also no\nspace to the right, so it finally shows the popover on the left.",
          "defaultValue": "['top', 'right', 'bottom', 'left', 'top', 'right', 'bottom']"
        },
        {
          "name": "footerContent",
          "type": "React.ReactNode | ((hide: () => void) => React.ReactNode)",
          "description": "Footer content\nIf you want to close the popover after an action within the bodyContent, you can use the isVisible prop for manual control,\nor you can provide a function which will receive a callback as an argument to hide the popover\ni.e. footerContent={hide => <Button onClick={() => hide()}>Close</Button>}",
          "defaultValue": "null"
        },
        {
          "name": "hasAutoWidth",
          "type": "boolean",
          "description": "Removes fixed-width and allows width to be defined by contents",
          "defaultValue": "false"
        },
        {
          "name": "hasNoPadding",
          "type": "boolean",
          "description": "Allows content to touch edges of popover container",
          "defaultValue": "false"
        },
        {
          "name": "headerComponent",
          "type": "'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'",
          "description": "Sets the heading level to use for the popover header. Default is h6.",
          "defaultValue": "'h6'"
        },
        {
          "name": "headerContent",
          "type": "React.ReactNode | ((hide: () => void) => React.ReactNode)",
          "description": "Simple header content to be placed within a title.\nIf you want to close the popover after an action within the bodyContent, you can use the isVisible prop for manual control,\nor you can provide a function which will receive a callback as an argument to hide the popover\ni.e. headerContent={hide => <Button onClick={() => hide()}>Close</Button>}",
          "defaultValue": "null"
        },
        {
          "name": "headerIcon",
          "type": "React.ReactNode",
          "description": "Icon to be displayed in the popover header *",
          "defaultValue": "null",
          "beta": true
        },
        {
          "name": "hideOnOutsideClick",
          "type": "boolean",
          "description": "Hides the popover when a click occurs outside (only works if isVisible is not controlled by the user)",
          "defaultValue": "true"
        },
        {
          "name": "id",
          "type": "string",
          "description": "id used as part of the various popover elements (popover-${id}-header/body/footer)"
        },
        {
          "name": "isVisible",
          "type": "boolean",
          "description": "True to show the popover programmatically. Used in conjunction with the shouldClose prop.\nBy default, the popover child element handles click events automatically. If you want to control this programmatically,\nthe popover will not auto-close if the Close button is clicked, ESC key is used, or if a click occurs outside the popover.\nInstead, the consumer is responsible for closing the popover themselves by adding a callback listener for the shouldClose prop.",
          "defaultValue": "null"
        },
        {
          "name": "maxWidth",
          "type": "string",
          "description": "Maximum width of the popover (default 18.75rem)",
          "defaultValue": "popoverMaxWidth && popoverMaxWidth.value"
        },
        {
          "name": "minWidth",
          "type": "string",
          "description": "Minimum width of the popover (default 6.25rem)",
          "defaultValue": "popoverMinWidth && popoverMinWidth.value"
        },
        {
          "name": "onHidden",
          "type": "(tip?: TippyInstance) => void",
          "description": "Lifecycle function invoked when the popover has fully transitioned out.\nNote: The tip argument is no longer passed and has been deprecated.",
          "defaultValue": "(): void => null"
        },
        {
          "name": "onHide",
          "type": "(tip?: TippyInstance) => void",
          "description": "Lifecycle function invoked when the popover begins to transition out.\nNote: The tip argument is no longer passed and has been deprecated.",
          "defaultValue": "(): void => null"
        },
        {
          "name": "onMount",
          "type": "(tip?: TippyInstance) => void",
          "description": "Lifecycle function invoked when the popover has been mounted to the DOM.\nNote: The tip argument is no longer passed and has been deprecated.",
          "defaultValue": "(): void => null"
        },
        {
          "name": "onShow",
          "type": "(tip?: TippyInstance) => void",
          "description": "Lifecycle function invoked when the popover begins to transition in.\nNote: The tip argument is no longer passed and has been deprecated.",
          "defaultValue": "(): void => null"
        },
        {
          "name": "onShown",
          "type": "(tip?: TippyInstance) => void",
          "description": "Lifecycle function invoked when the popover has fully transitioned in.\nNote: The tip argument is no longer passed and has been deprecated.",
          "defaultValue": "(): void => null"
        },
        {
          "name": "position",
          "type": "PopoverPosition\n| 'auto'\n| 'top'\n| 'bottom'\n| 'left'\n| 'right'\n| 'top-start'\n| 'top-end'\n| 'bottom-start'\n| 'bottom-end'\n| 'left-start'\n| 'left-end'\n| 'right-start'\n| 'right-end'",
          "description": "Popover position. Note: With 'enableFlip' set to true,\nit will change the position if there is not enough space for the starting position.\nThe behavior of where it flips to can be controlled through the flipBehavior prop.",
          "defaultValue": "'top'"
        },
        {
          "name": "reference",
          "type": "HTMLElement | (() => HTMLElement) | React.RefObject<any>",
          "description": "The reference element to which the Popover is relatively placed to.\nIf you can wrap the reference with the Popover, you can use the children prop instead.\nUsage: <Popover reference={() => document.getElementById('reference-element')} />"
        },
        {
          "name": "shouldClose",
          "type": "(tip?: TippyInstance, hideFunction?: () => void, event?: MouseEvent | KeyboardEvent) => void",
          "description": "Callback function that is only invoked when isVisible is also controlled. Called when the popover Close button is\nclicked, Enter key was used on it, or the ESC key is used.\nNote: The tip argument is no longer passed and has been deprecated.",
          "defaultValue": "(): void => null"
        },
        {
          "name": "shouldOpen",
          "type": "(showFunction?: () => void, event?: MouseEvent | KeyboardEvent) => void",
          "description": "Callback function that is only invoked when isVisible is also controlled. Called when the Enter key is\nused on the focused trigger",
          "defaultValue": "(): void => null"
        },
        {
          "name": "showClose",
          "type": "boolean",
          "description": "Whether to show the close button",
          "defaultValue": "true"
        },
        {
          "name": "tippyProps",
          "type": "Partial<TippyProps>",
          "description": "- no longer used",
          "deprecated": true
        },
        {
          "name": "withFocusTrap",
          "type": "boolean",
          "description": "Whether to trap focus in the popover"
        },
        {
          "name": "zIndex",
          "type": "number",
          "description": "z-index of the popover",
          "defaultValue": "9999"
        }
      ]
    }
  ],
  "cssPrefix": [
    "pf-c-form"
  ],
  "examples": [
    "Basic",
    "Horizontal",
    "Limit width",
    "Invalid",
    "Invalid with form alert",
    "Validated",
    "Horizontal stacked no padding top",
    "Horizontal stacked helper text on top",
    "Form group with additional label info",
    "Form Sections",
    "Grid form",
    "Field Groups"
  ]
};
pageData.liveContext = {
  Button,
  Form,
  FormGroup,
  Popover,
  TextInput,
  TextArea,
  FormSelect,
  FormHelperText,
  FormFieldGroup,
  FormFieldGroupHeader,
  FormFieldGroupExpandable,
  Checkbox,
  ActionGroup,
  Radio,
  ExclamationCircleIcon,
  HelpIcon,
  TrashIcon
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Form, FormGroup, TextInput, Checkbox, Popover, ActionGroup, Button, Radio } from '@patternfly/react-core';\nimport HelpIcon from '@patternfly/react-icons/dist/esm/icons/help-icon';\n\nexport const FormBasic: React.FunctionComponent = () => {\n  const [name, setName] = React.useState('');\n  const [email, setEmail] = React.useState('');\n  const [phone, setPhone] = React.useState('');\n\n  const handleNameChange = (name: string) => {\n    setName(name);\n  };\n\n  const handleEmailChange = (email: string) => {\n    setEmail(email);\n  };\n\n  const handlePhoneChange = (phone: string) => {\n    setPhone(phone);\n  };\n\n  return (\n    <Form>\n      <FormGroup\n        label=\"Full name\"\n        labelIcon={\n          <Popover\n            headerContent={\n              <div>\n                The{' '}\n                <a href=\"https://schema.org/name\" target=\"_blank\" rel=\"noreferrer\">\n                  name\n                </a>{' '}\n                of a{' '}\n                <a href=\"https://schema.org/Person\" target=\"_blank\" rel=\"noreferrer\">\n                  Person\n                </a>\n              </div>\n            }\n            bodyContent={\n              <div>\n                Often composed of{' '}\n                <a href=\"https://schema.org/givenName\" target=\"_blank\" rel=\"noreferrer\">\n                  givenName\n                </a>{' '}\n                and{' '}\n                <a href=\"https://schema.org/familyName\" target=\"_blank\" rel=\"noreferrer\">\n                  familyName\n                </a>\n                .\n              </div>\n            }\n          >\n            <button\n              type=\"button\"\n              aria-label=\"More info for name field\"\n              onClick={e => e.preventDefault()}\n              aria-describedby=\"simple-form-name-01\"\n              className=\"pf-c-form__group-label-help\"\n            >\n              <HelpIcon noVerticalAlign />\n            </button>\n          </Popover>\n        }\n        isRequired\n        fieldId=\"simple-form-name-01\"\n        helperText=\"Include your middle name if you have one.\"\n      >\n        <TextInput\n          isRequired\n          type=\"text\"\n          id=\"simple-form-name-01\"\n          name=\"simple-form-name-01\"\n          aria-describedby=\"simple-form-name-01-helper\"\n          value={name}\n          onChange={handleNameChange}\n        />\n      </FormGroup>\n      <FormGroup label=\"Email\" isRequired fieldId=\"simple-form-email-01\">\n        <TextInput\n          isRequired\n          type=\"email\"\n          id=\"simple-form-email-01\"\n          name=\"simple-form-email-01\"\n          value={email}\n          onChange={handleEmailChange}\n        />\n      </FormGroup>\n      <FormGroup label=\"Phone number\" isRequired fieldId=\"simple-form-phone-01\">\n        <TextInput\n          isRequired\n          type=\"tel\"\n          id=\"simple-form-phone-01\"\n          name=\"simple-form-phone-01\"\n          placeholder=\"555-555-5555\"\n          value={phone}\n          onChange={handlePhoneChange}\n        />\n      </FormGroup>\n      <FormGroup role=\"group\" isInline fieldId=\"basic-form-checkbox-group\" label=\"How can we contact you?\">\n        <Checkbox label=\"Email\" aria-label=\"Email\" id=\"inlinecheck01\" />\n        <Checkbox label=\"Phone\" aria-label=\"Phone\" id=\"inlinecheck02\" />\n        <Checkbox label=\"Mail\" aria-label=\"Mail\" id=\"inlinecheck03\" />\n      </FormGroup>\n      <FormGroup role=\"radiogroup\" isInline fieldId=\"basic-form-radio-group\" label=\"Time zone\">\n        <Radio name=\"basic-inline-radio\" label=\"Eastern\" id=\"basic-inline-radio-01\" />\n        <Radio name=\"basic-inline-radio\" label=\"Central\" id=\"basic-inline-radio-02\" />\n        <Radio name=\"basic-inline-radio\" label=\"Pacific\" id=\"basic-inline-radio-03\" />\n      </FormGroup>\n      <FormGroup label=\"Additional note\" fieldId=\"simple-form-note-01\">\n        <TextInput isDisabled type=\"text\" id=\"simple-form-note-01\" name=\"simple-form-number\" value=\"disabled\" />\n      </FormGroup>\n      <FormGroup fieldId=\"checkbox01\">\n        <Checkbox label=\"I'd like updates via email.\" id=\"checkbox01\" name=\"checkbox01\" aria-label=\"Update via email\" />\n      </FormGroup>\n      <ActionGroup>\n        <Button variant=\"primary\">Submit</Button>\n        <Button variant=\"link\">Cancel</Button>\n      </ActionGroup>\n    </Form>\n  );\n};\n","title":"Basic","lang":"ts"}}>
      
    </Example>,
  'Horizontal': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Form,\n  FormGroup,\n  TextInput,\n  TextArea,\n  FormSelect,\n  FormSelectOption,\n  Checkbox,\n  ActionGroup,\n  Button,\n  Radio\n} from '@patternfly/react-core';\n\nexport const FormHorizontal: React.FunctionComponent = () => {\n  const [name, setName] = React.useState('');\n  const [email, setEmail] = React.useState('');\n  const [experience, setExperience] = React.useState('');\n  const [option, setOption] = React.useState('please choose');\n\n  const handleNameChange = (name: string) => {\n    setName(name);\n  };\n\n  const handleEmailChange = (email: string) => {\n    setEmail(email);\n  };\n\n  const handleExperienceChange = (experience: string) => {\n    setExperience(experience);\n  };\n\n  const handleOptionChange = (value: string, _event: React.FormEvent<HTMLSelectElement>) => {\n    setOption(value);\n  };\n\n  const options = [\n    { value: 'select one', label: 'Select one', disabled: false },\n    { value: 'mr', label: 'Mr', disabled: false },\n    { value: 'miss', label: 'Miss', disabled: false },\n    { value: 'mrs', label: 'Mrs', disabled: false },\n    { value: 'ms', label: 'Ms', disabled: false },\n    { value: 'dr', label: 'Dr', disabled: false },\n    { value: 'other', label: 'Other', disabled: false }\n  ];\n\n  return (\n    <Form isHorizontal>\n      <FormGroup\n        label=\"Full name\"\n        isRequired\n        fieldId=\"horizontal-form-name\"\n        helperText=\"Include your middle name if you have one.\"\n      >\n        <TextInput\n          value={name}\n          isRequired\n          type=\"text\"\n          id=\"horizontal-form-name\"\n          aria-describedby=\"horizontal-form-name-helper\"\n          name=\"horizontal-form-name\"\n          onChange={handleNameChange}\n        />\n      </FormGroup>\n      <FormGroup label=\"Email\" isRequired fieldId=\"horizontal-form-email\">\n        <TextInput\n          value={email}\n          isRequired\n          type=\"email\"\n          id=\"horizontal-form-email\"\n          name=\"horizontal-form-email\"\n          onChange={handleEmailChange}\n        />\n      </FormGroup>\n      <FormGroup label=\"Your title\" fieldId=\"horizontal-form-title\">\n        <FormSelect\n          value={option}\n          onChange={handleOptionChange}\n          id=\"horizontal-form-title\"\n          name=\"horizontal-form-title\"\n          aria-label=\"Your title\"\n        >\n          {options.map((option, index) => (\n            <FormSelectOption isDisabled={option.disabled} key={index} value={option.value} label={option.label} />\n          ))}\n        </FormSelect>\n      </FormGroup>\n      <FormGroup label=\"Your experience\" fieldId=\"horizontal-form-exp\">\n        <TextArea\n          value={experience}\n          onChange={handleExperienceChange}\n          id=\"horizontal-form-exp\"\n          name=\"horizontal-form-exp\"\n        />\n      </FormGroup>\n      <FormGroup\n        label=\"How can we contact you?\"\n        isStack\n        fieldId=\"horizontal-form-checkbox-group\"\n        hasNoPaddingTop\n        role=\"group\"\n      >\n        <Checkbox label=\"Email\" id=\"alt-form-checkbox-1\" name=\"alt-form-checkbox-1\" />\n        <Checkbox label=\"Phone\" id=\"alt-form-checkbox-2\" name=\"alt-form-checkbox-2\" />\n        <Checkbox label=\"Mail\" id=\"alt-form-checkbox-3\" name=\"alt-form-checkbox-3\" />\n      </FormGroup>\n      <FormGroup role=\"radiogroup\" isStack fieldId=\"horizontal-form-radio-group\" hasNoPaddingTop label=\"Time zone\">\n        <Radio name=\"horizontal-inline-radio\" label=\"Eastern\" id=\"horizontal-inline-radio-01\" />\n        <Radio name=\"horizontal-inline-radio\" label=\"Central\" id=\"horizontal-inline-radio-02\" />\n        <Radio name=\"horizontal-inline-radio\" label=\"Pacific\" id=\"horizontal-inline-radio-03\" />\n      </FormGroup>\n      <ActionGroup>\n        <Button variant=\"primary\">Submit</Button>\n        <Button variant=\"link\">Cancel</Button>\n      </ActionGroup>\n    </Form>\n  );\n};\n","title":"Horizontal","lang":"ts"}}>
      
    </Example>,
  'Limit width': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Form, FormGroup, TextInput, Checkbox, Popover, ActionGroup, Button, Radio } from '@patternfly/react-core';\nimport HelpIcon from '@patternfly/react-icons/dist/esm/icons/help-icon';\n\nexport const FormLimitWidth: React.FunctionComponent = () => {\n  const [name, setName] = React.useState('');\n  const [email, setEmail] = React.useState('');\n  const [phone, setPhone] = React.useState('');\n\n  const handleNameChange = (name: string) => {\n    setName(name);\n  };\n\n  const handleEmailChange = (email: string) => {\n    setEmail(email);\n  };\n\n  const handlePhoneChange = (phone: string) => {\n    setPhone(phone);\n  };\n\n  return (\n    <Form isWidthLimited>\n      <FormGroup\n        label=\"Full name\"\n        labelIcon={\n          <Popover\n            headerContent={\n              <div>\n                The{' '}\n                <a href=\"https://schema.org/name\" target=\"_blank\" rel=\"noreferrer\">\n                  name\n                </a>{' '}\n                of a{' '}\n                <a href=\"https://schema.org/Person\" target=\"_blank\" rel=\"noreferrer\">\n                  Person\n                </a>\n              </div>\n            }\n            bodyContent={\n              <div>\n                Often composed of{' '}\n                <a href=\"https://schema.org/givenName\" target=\"_blank\" rel=\"noreferrer\">\n                  givenName\n                </a>{' '}\n                and{' '}\n                <a href=\"https://schema.org/familyName\" target=\"_blank\" rel=\"noreferrer\">\n                  familyName\n                </a>\n                .\n              </div>\n            }\n          >\n            <button\n              type=\"button\"\n              aria-label=\"More info for name field\"\n              onClick={e => e.preventDefault()}\n              aria-describedby=\"simple-form-name-02\"\n              className=\"pf-c-form__group-label-help\"\n            >\n              <HelpIcon noVerticalAlign />\n            </button>\n          </Popover>\n        }\n        isRequired\n        fieldId=\"simple-form-name-02\"\n        helperText=\"Include your middle name if you have one.\"\n      >\n        <TextInput\n          isRequired\n          type=\"text\"\n          id=\"simple-form-name-02\"\n          name=\"simple-form-name-02\"\n          aria-describedby=\"simple-form-name-02-helper\"\n          value={name}\n          onChange={handleNameChange}\n        />\n      </FormGroup>\n      <FormGroup label=\"Email\" isRequired fieldId=\"simple-form-email-02\">\n        <TextInput\n          isRequired\n          type=\"email\"\n          id=\"simple-form-email-02\"\n          name=\"simple-form-email-02\"\n          value={email}\n          onChange={handleEmailChange}\n        />\n      </FormGroup>\n      <FormGroup label=\"Phone number\" isRequired fieldId=\"simple-form-number\">\n        <TextInput\n          isRequired\n          type=\"tel\"\n          placeholder=\"555-555-5555\"\n          id=\"simple-form-number\"\n          name=\"simple-form-number\"\n          value={phone}\n          onChange={handlePhoneChange}\n        />\n      </FormGroup>\n      <FormGroup role=\"group\" isInline fieldId=\"limit-width-form-checkbox-group\" label=\"How can we contact you?\">\n        <Checkbox label=\"Email\" aria-label=\"Email\" id=\"inlinecheck04\" />\n        <Checkbox label=\"Phone\" aria-label=\"Phone\" id=\"inlinecheck05\" />\n        <Checkbox label=\"Mail\" aria-label=\"Mail\" id=\"inlinecheck06\" />\n      </FormGroup>\n      <FormGroup role=\"radiogroup\" isInline fieldId=\"limit-width-form-radio-group\" label=\"Time zone\">\n        <Radio name=\"limit-width-radio\" label=\"Eastern\" id=\"limit-width-inline-radio-01\" />\n        <Radio name=\"limit-width-radio\" label=\"Central\" id=\"limit-width-inline-radio-02\" />\n        <Radio name=\"limit-width-radio\" label=\"Pacific\" id=\"limit-width-inline-radio-03\" />\n      </FormGroup>\n      <FormGroup label=\"Additional note\" fieldId=\"simple-form-note-02\">\n        <TextInput isDisabled type=\"text\" id=\"simple-form-note-02\" name=\"simple-form-number\" value=\"disabled\" />\n      </FormGroup>\n      <FormGroup fieldId=\"checkbox02\">\n        <Checkbox label=\"I'd like updates via email.\" id=\"checkbox02\" name=\"checkbox02\" aria-label=\"Update via email\" />\n      </FormGroup>\n      <ActionGroup>\n        <Button variant=\"primary\">Submit</Button>\n        <Button variant=\"link\">Cancel</Button>\n      </ActionGroup>\n    </Form>\n  );\n};\n","title":"Limit width","lang":"ts"}}>
      
    </Example>,
  'Invalid': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Form, FormGroup, TextInput, FormHelperText } from '@patternfly/react-core';\nimport ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';\n\nexport const FormInvalid: React.FunctionComponent = () => {\n  type validate = 'success' | 'warning' | 'error' | 'default';\n\n  const [age, setAge] = React.useState('Five');\n  const [validated, setValidated] = React.useState<validate>('error');\n\n  const handleAgeChange = (age: string, _event: React.FormEvent<HTMLInputElement>) => {\n    setAge(age);\n    if (age === '') {\n      setValidated('default');\n    } else if (/^\\d+$/.test(age)) {\n      setValidated('success');\n    } else {\n      setValidated('error');\n    }\n  };\n\n  return (\n    <Form>\n      <FormGroup\n        label=\"Age\"\n        type=\"number\"\n        helperText={\n          <FormHelperText icon={<ExclamationCircleIcon />} isHidden={validated !== 'default'}>\n            Please enter your age\n          </FormHelperText>\n        }\n        helperTextInvalid=\"Must be a number\"\n        helperTextInvalidIcon={<ExclamationCircleIcon />}\n        fieldId=\"age-1\"\n        validated={validated}\n      >\n        <TextInput\n          validated={validated}\n          value={age}\n          id=\"age-1\"\n          aria-describedby=\"age-1-helper\"\n          onChange={handleAgeChange}\n        />\n      </FormGroup>\n    </Form>\n  );\n};\n","title":"Invalid","lang":"ts"}}>
      
    </Example>,
  'Invalid with form alert': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Alert, Form, FormAlert, FormGroup, TextInput, FormHelperText } from '@patternfly/react-core';\nimport ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';\n\nexport const FormInvalidWithAlert: React.FunctionComponent = () => {\n  type validate = 'success' | 'warning' | 'error' | 'default';\n\n  const [age, setAge] = React.useState('Five');\n  const [validated, setValidated] = React.useState<validate>('error');\n\n  const handleAgeChange = (age: string, _event: React.FormEvent<HTMLInputElement>) => {\n    setAge(age);\n    if (age === '') {\n      setValidated('default');\n    } else if (/^\\d+$/.test(age)) {\n      setValidated('success');\n    } else {\n      setValidated('error');\n    }\n  };\n\n  return (\n    <Form>\n      {validated === 'error' && (\n        <FormAlert>\n          <Alert variant=\"danger\" title=\"Fill out all required fields before continuing.\" aria-live=\"polite\" isInline />\n        </FormAlert>\n      )}\n      <FormGroup\n        label=\"Age\"\n        type=\"number\"\n        helperText={\n          <FormHelperText icon={<ExclamationCircleIcon />} isHidden={validated !== 'default'}>\n            Please enter your age\n          </FormHelperText>\n        }\n        helperTextInvalid=\"Must be a number\"\n        helperTextInvalidIcon={<ExclamationCircleIcon />}\n        fieldId=\"age-2\"\n        validated={validated}\n      >\n        <TextInput\n          validated={validated}\n          value={age}\n          id=\"age-2\"\n          aria-describedby=\"age-2-helper\"\n          onChange={handleAgeChange}\n        />\n      </FormGroup>\n    </Form>\n  );\n};\n","title":"Invalid with form alert","lang":"ts"}}>
      
    </Example>,
  'Validated': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Form, FormGroup, TextInput } from '@patternfly/react-core';\nimport ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';\n\nexport const FormValidated: React.FunctionComponent = () => {\n  type validate = 'success' | 'warning' | 'error' | 'default';\n\n  const [age, setAge] = React.useState('Five');\n  const [invalidText, setInvalidText] = React.useState('Must be a number');\n  const [validated, setValidated] = React.useState<validate>('default');\n  const [helperText, setHelperText] = React.useState('Enter your age to continue');\n\n  const handleAgeChange = (age: string, _event: React.FormEvent<HTMLInputElement>) => {\n    setAge(age);\n    setValidated('default');\n    setHelperText('Validating...');\n  };\n\n  // useEffect is used to simulate a server call to validate the age 2000ms after the user has entered a value, preventing calling the server on every keystroke\n  React.useEffect(() => {\n    const timer = setTimeout(() => {\n      if (/^\\d+$/.test(age)) {\n        if (parseInt(age) >= 21) {\n          setValidated('success');\n          setHelperText('Enjoy your stay');\n        } else {\n          setValidated('warning');\n          setHelperText('You must be at least 21 years old to continue');\n        }\n      } else {\n        setValidated('error');\n        setInvalidText('Must be a number');\n      }\n    }, 2000);\n\n    return () => clearTimeout(timer);\n  }, [age]);\n\n  return (\n    <Form>\n      <FormGroup\n        label=\"Age\"\n        type=\"number\"\n        helperText={helperText}\n        helperTextInvalid={invalidText}\n        helperTextInvalidIcon={<ExclamationCircleIcon />}\n        fieldId=\"age-3\"\n        validated={validated}\n      >\n        <TextInput\n          validated={validated}\n          value={age}\n          id=\"age-3\"\n          aria-describedby=\"age-3-helper\"\n          onChange={handleAgeChange}\n        />\n      </FormGroup>\n    </Form>\n  );\n};\n","title":"Validated","lang":"ts"}}>
      
    </Example>,
  'Horizontal stacked no padding top': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Form, FormGroup, Checkbox } from '@patternfly/react-core';\n\nexport const FormHorizontalStacked: React.FunctionComponent = () => (\n  <Form isHorizontal>\n    <FormGroup role=\"group\" label=\"Label\" hasNoPaddingTop fieldId=\"horizontal-form-stacked-options\" isStack>\n      <Checkbox label=\"option 1\" id=\"option-01\" />\n      <Checkbox label=\"option 2\" id=\"option-02\" />\n    </FormGroup>\n  </Form>\n);\n","title":"Horizontal stacked no padding top","lang":"ts"}}>
      
    </Example>,
  'Horizontal stacked helper text on top': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Form, FormGroup, Checkbox } from '@patternfly/react-core';\n\nexport const FormHorizontalFormHelperText: React.FunctionComponent = () => {\n  const [helperText] = React.useState('Select all that apply:');\n\n  return (\n    <Form isHorizontal>\n      <FormGroup\n        label=\"Label\"\n        helperText={helperText}\n        isHelperTextBeforeField\n        hasNoPaddingTop\n        isStack\n        fieldId=\"horizontal-form-helper-options\"\n        role=\"group\"\n      >\n        <Checkbox label=\"Option 1\" id=\"option-03\" />\n        <Checkbox label=\"Option 2\" id=\"option-04\" />\n      </FormGroup>\n    </Form>\n  );\n};\n","title":"Horizontal stacked helper text on top","lang":"ts"}}>
      
    </Example>,
  'Form group with additional label info': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Form, FormGroup, TextInput, Popover } from '@patternfly/react-core';\nimport HelpIcon from '@patternfly/react-icons/dist/esm/icons/help-icon';\n\nexport const FormGroupLabelInfo: React.FunctionComponent = () => {\n  const [name, setName] = React.useState('');\n\n  const handleNameChange = (name: string, _event: React.FormEvent<HTMLInputElement>) => {\n    setName(name);\n  };\n\n  return (\n    <Form>\n      <FormGroup\n        label=\"Full name\"\n        labelInfo=\"Additional label info\"\n        labelIcon={\n          <Popover\n            headerContent={\n              <div>\n                The{' '}\n                <a href=\"https://schema.org/name\" target=\"_blank\" rel=\"noreferrer\">\n                  name\n                </a>{' '}\n                of a{' '}\n                <a href=\"https://schema.org/Person\" target=\"_blank\" rel=\"noreferrer\">\n                  Person\n                </a>\n              </div>\n            }\n            bodyContent={\n              <div>\n                Often composed of{' '}\n                <a href=\"https://schema.org/givenName\" target=\"_blank\" rel=\"noreferrer\">\n                  givenName\n                </a>{' '}\n                and{' '}\n                <a href=\"https://schema.org/familyName\" target=\"_blank\" rel=\"noreferrer\">\n                  familyName\n                </a>\n                .\n              </div>\n            }\n          >\n            <button\n              type=\"button\"\n              aria-label=\"More info for name field\"\n              onClick={e => e.preventDefault()}\n              aria-describedby=\"form-group-label-info\"\n              className=\"pf-c-form__group-label-help\"\n            >\n              <HelpIcon noVerticalAlign />\n            </button>\n          </Popover>\n        }\n        isRequired\n        fieldId=\"form-group-label-info\"\n        helperText=\"Include your middle name if you have one.\"\n      >\n        <TextInput\n          isRequired\n          type=\"text\"\n          id=\"form-group-label-info\"\n          name=\"form-group-label-info\"\n          aria-describedby=\"form-group-label-info-helper\"\n          value={name}\n          onChange={handleNameChange}\n        />\n      </FormGroup>\n    </Form>\n  );\n};\n","title":"Form group with additional label info","lang":"ts"}}>
      
    </Example>,
  'Form Sections': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Form, FormGroup, FormSection, TextInput } from '@patternfly/react-core';\n\nexport const FormSections: React.FunctionComponent = () => {\n  const [input1, setInput1] = React.useState('');\n  const [input2, setInput2] = React.useState('');\n\n  const handleInputChange1 = (input1: string, _event: React.FormEvent<HTMLInputElement>) => {\n    setInput1(input1);\n  };\n\n  const handleInputChange2 = (input2: string, _event: React.FormEvent<HTMLInputElement>) => {\n    setInput2(input2);\n  };\n\n  return (\n    <Form>\n      <FormSection>\n        <FormGroup label=\"Form section 1 input\" isRequired fieldId=\"simple-form-section-1-input\">\n          <TextInput\n            isRequired\n            type=\"text\"\n            id=\"simple-form-section-1-input\"\n            name=\"simple-form-section-1-input\"\n            value={input1}\n            onChange={handleInputChange1}\n          />\n        </FormGroup>\n      </FormSection>\n      <FormSection title=\"Form section 2 (optional title)\" titleElement=\"h2\">\n        <FormGroup label=\"Form section 2 input\" isRequired fieldId=\"simple-form-section-2-input\">\n          <TextInput\n            isRequired\n            type=\"text\"\n            id=\"simple-form-section-2-input\"\n            name=\"simple-form-section-2-input\"\n            value={input2}\n            onChange={handleInputChange2}\n          />\n        </FormGroup>\n      </FormSection>\n    </Form>\n  );\n};\n","title":"Form Sections","lang":"ts"}}>
      
    </Example>,
  'Grid form': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Form, FormGroup, TextInput, Grid, GridItem } from '@patternfly/react-core';\n\nexport const FormGrid: React.FunctionComponent = () => {\n  const [name, setName] = React.useState('');\n  const [email, setEmail] = React.useState('');\n  const [phone, setPhone] = React.useState('');\n\n  const handleNameChange = (name: string) => {\n    setName(name);\n  };\n\n  const handleEmailChange = (email: string) => {\n    setEmail(email);\n  };\n\n  const handlePhoneChange = (phone: string) => {\n    setPhone(phone);\n  };\n\n  return (\n    <Form>\n      <Grid hasGutter md={6}>\n        <GridItem span={12}>\n          <FormGroup\n            label=\"Full name\"\n            isRequired\n            fieldId=\"grid-form-name-01\"\n            helperText=\"Include your middle name if you have one.\"\n          >\n            <TextInput\n              isRequired\n              type=\"text\"\n              id=\"grid-form-name-01\"\n              name=\"grid-form-name-01\"\n              aria-describedby=\"grid-form-name-01-helper\"\n              value={name}\n              onChange={handleNameChange}\n            />\n          </FormGroup>\n        </GridItem>\n        <FormGroup label=\"Email\" isRequired fieldId=\"grid-form-email-01\">\n          <TextInput\n            isRequired\n            type=\"email\"\n            id=\"grid-form-email-01\"\n            name=\"grid-form-email-01\"\n            value={email}\n            onChange={handleEmailChange}\n          />\n        </FormGroup>\n        <FormGroup label=\"Phone number\" isRequired fieldId=\"grid-form-number-01\">\n          <TextInput\n            isRequired\n            type=\"tel\"\n            id=\"grid-form-number-01\"\n            placeholder=\"555-555-5555\"\n            name=\"grid-form-number-01\"\n            value={phone}\n            onChange={handlePhoneChange}\n          />\n        </FormGroup>\n      </Grid>\n    </Form>\n  );\n};\n","title":"Grid form","lang":"ts"}}>
      
    </Example>,
  'Field Groups': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Form,\n  FormGroup,\n  FormFieldGroup,\n  FormFieldGroupExpandable,\n  FormFieldGroupHeader,\n  TextInput,\n  Button\n} from '@patternfly/react-core';\nimport TrashIcon from '@patternfly/react-icons/dist/esm/icons/trash-icon';\n\nexport const FormFieldGroups: React.FunctionComponent = () => {\n  const initialValues = {\n    '0-label1': '',\n    '0-label2': '',\n    '1-expanded-group1-label1': '',\n    '1-expanded-group1-label2': '',\n    '1-expanded-group2-label1': '',\n    '1-expanded-group2-label2': '',\n    '1-expanded-group3-label1': '',\n    '1-expanded-group3-label2': '',\n    '1-group1-label1': '',\n    '1-group1-label2': '',\n    '2-label1': '',\n    '2-label2': '',\n    '3-label1': '',\n    '3-label2': '',\n    '3-nonexpand-group1-label1': '',\n    '3-nonexpand-group1-label2': '',\n    '3-nonexpand-group2-label1': '',\n    '3-nonexpand-group2-label2': '',\n    '4-nonexpand-label1': '',\n    '4-nonexpand-label2': '',\n    '0-label3': '',\n    '0-label4': ''\n  };\n\n  const [inputValues, setInputValues] = React.useState(initialValues);\n\n  const handleChange = (value: string, event: React.FormEvent<HTMLInputElement>) => {\n    const { name } = event.currentTarget;\n    setInputValues({ ...inputValues, [name]: value });\n  };\n\n  return (\n    <Form>\n      <FormGroup label=\"Label 1\" isRequired fieldId=\"0-label1\">\n        <TextInput isRequired id=\"0-label1\" name=\"0-label1\" value={inputValues['0-label1']} onChange={handleChange} />\n      </FormGroup>\n      <FormGroup label=\"Label 2\" isRequired fieldId=\"0-label2\">\n        <TextInput isRequired id=\"0-label2\" name=\"0-label2\" value={inputValues['0-label2']} onChange={handleChange} />\n      </FormGroup>\n      <FormFieldGroupExpandable\n        isExpanded\n        toggleAriaLabel=\"Details\"\n        header={\n          <FormFieldGroupHeader\n            titleText={{ text: 'Field group 1', id: 'field-group1-titleText-id' }}\n            titleDescription=\"Field group 1 description text.\"\n            actions={\n              <>\n                <Button variant=\"link\">Delete all</Button> <Button variant=\"secondary\">Add parameter</Button>\n              </>\n            }\n          />\n        }\n      >\n        <FormFieldGroupExpandable\n          isExpanded\n          toggleAriaLabel=\"Details\"\n          header={\n            <FormFieldGroupHeader\n              titleText={{ text: 'Nested field group 1', id: 'nested-field-group1-titleText-id' }}\n              titleDescription=\"Nested field group 1 description text.\"\n              actions={\n                <Button variant=\"plain\" aria-label=\"Remove\">\n                  <TrashIcon />\n                </Button>\n              }\n            />\n          }\n        >\n          <FormGroup label=\"Label 1\" isRequired fieldId=\"1-expanded-group1-label1\">\n            <TextInput\n              isRequired\n              id=\"1-expanded-group1-label1\"\n              name=\"1-expanded-group1-label1\"\n              value={inputValues['1-expanded-group1-label1']}\n              onChange={handleChange}\n            />\n          </FormGroup>\n          <FormGroup label=\"Label 2\" isRequired fieldId=\"1-expanded-group1-label2\">\n            <TextInput\n              isRequired\n              id=\"1-expanded-group1-label2\"\n              name=\"1-expanded-group1-label2\"\n              value={inputValues['1-expanded-group1-label2']}\n              onChange={handleChange}\n            />\n          </FormGroup>\n        </FormFieldGroupExpandable>\n        <FormFieldGroupExpandable\n          toggleAriaLabel=\"Details\"\n          header={\n            <FormFieldGroupHeader\n              titleText={{ text: 'Nested field group 2', id: 'nested-field-group2-titleText-id' }}\n              actions={\n                <Button variant=\"plain\" aria-label=\"Remove\">\n                  <TrashIcon />\n                </Button>\n              }\n            />\n          }\n        >\n          <FormGroup label=\"Label 1\" isRequired fieldId=\"1-expanded-group2-label1\">\n            <TextInput\n              isRequired\n              id=\"1-expanded-group2-label1\"\n              name=\"1-expanded-group2-label1\"\n              value={inputValues['1-expanded-group2-label1']}\n              onChange={handleChange}\n            />\n          </FormGroup>\n          <FormGroup label=\"Label 2\" isRequired fieldId=\"1-expanded-group2-label2\">\n            <TextInput\n              isRequired\n              id=\"1-expanded-group2-label2\"\n              name=\"1-expanded-group2-label2\"\n              value={inputValues['1-expanded-group2-label2']}\n              onChange={handleChange}\n            />\n          </FormGroup>\n        </FormFieldGroupExpandable>\n        <FormFieldGroupExpandable\n          toggleAriaLabel=\"Details\"\n          header={\n            <FormFieldGroupHeader\n              titleText={{ text: 'Nested field group 3', id: 'nested-field-group3-titleText-id' }}\n              titleDescription=\"Field group 3 description text.\"\n              actions={\n                <Button variant=\"plain\" aria-label=\"Remove\">\n                  <TrashIcon />\n                </Button>\n              }\n            />\n          }\n        >\n          <FormGroup label=\"Label 1\" isRequired fieldId=\"1-expanded-group3-label1\">\n            <TextInput\n              isRequired\n              id=\"1-expanded-group3-label1\"\n              name=\"1-expanded-group3-label1\"\n              value={inputValues['1-expanded-group3-label1']}\n              onChange={handleChange}\n            />\n          </FormGroup>\n          <FormGroup label=\"Label 2\" isRequired fieldId=\"1-expanded-group3-label2\">\n            <TextInput\n              isRequired\n              id=\"1-expanded-group3-label2\"\n              name=\"1-expanded-group3-label2\"\n              value={inputValues['1-expanded-group3-label2']}\n              onChange={handleChange}\n            />\n          </FormGroup>\n        </FormFieldGroupExpandable>\n        <FormGroup label=\"Label 1\" isRequired fieldId=\"1-group1-label1\">\n          <TextInput\n            isRequired\n            id=\"1-group1-label1\"\n            name=\"1-group1-label1\"\n            value={inputValues['1-group1-label1']}\n            onChange={handleChange}\n          />\n        </FormGroup>\n        <FormGroup label=\"Label 2\" isRequired fieldId=\"1-group1-label2\">\n          <TextInput\n            isRequired\n            id=\"1-group1-label2\"\n            name=\"1-group1-label2\"\n            value={inputValues['1-group1-label2']}\n            onChange={handleChange}\n          />\n        </FormGroup>\n      </FormFieldGroupExpandable>\n      <FormFieldGroupExpandable\n        toggleAriaLabel=\"Details\"\n        header={\n          <FormFieldGroupHeader\n            titleText={{ text: 'Field group 2', id: 'field-group2-titleText-id' }}\n            titleDescription=\"Field group 2 description text.\"\n            actions={\n              <>\n                <Button variant=\"link\">Delete all</Button> <Button variant=\"secondary\">Add parameter</Button>\n              </>\n            }\n          />\n        }\n      >\n        <FormGroup label=\"Label 1\" isRequired fieldId=\"2-label1\">\n          <TextInput isRequired id=\"2-label1\" name=\"2-label1\" value={inputValues['2-label1']} onChange={handleChange} />\n        </FormGroup>\n        <FormGroup label=\"Label 2\" isRequired fieldId=\"2-label2\">\n          <TextInput isRequired id=\"2-label2\" name=\"2-label2\" value={inputValues['2-label2']} onChange={handleChange} />\n        </FormGroup>\n      </FormFieldGroupExpandable>\n      <FormFieldGroupExpandable\n        isExpanded\n        toggleAriaLabel=\"Details\"\n        header={\n          <FormFieldGroupHeader\n            titleText={{ text: 'Field group 3', id: 'field-group3-titleText-id' }}\n            titleDescription=\"Field group 3 description text.\"\n          />\n        }\n      >\n        <FormGroup label=\"Label 1\" isRequired fieldId=\"3-label1\">\n          <TextInput isRequired id=\"3-label1\" name=\"3-label1\" value={inputValues['3-label1']} onChange={handleChange} />\n        </FormGroup>\n        <FormGroup label=\"Label 2\" isRequired fieldId=\"3-label2\">\n          <TextInput isRequired id=\"3-label2\" name=\"3-label2\" value={inputValues['3-label2']} onChange={handleChange} />\n        </FormGroup>\n        <FormFieldGroup\n          header={\n            <FormFieldGroupHeader\n              titleText={{\n                text: 'Nested field group 1 (non-expandable)',\n                id: 'nested-field-group1-non-expandable-titleText-id'\n              }}\n            />\n          }\n        >\n          <FormGroup label=\"Label 1\" isRequired fieldId=\"3-nonexpand-group1-label1\">\n            <TextInput\n              isRequired\n              id=\"3-nonexpand-group1-label1\"\n              name=\"3-nonexpand-group1-label1\"\n              value={inputValues['3-nonexpand-group1-label1']}\n              onChange={handleChange}\n            />\n          </FormGroup>\n          <FormGroup label=\"Label 2\" isRequired fieldId=\"3-nonexpand-group1-label2\">\n            <TextInput\n              isRequired\n              id=\"3-nonexpand-group1-label2\"\n              name=\"3-nonexpand-group1-label2\"\n              value={inputValues['3-nonexpand-group1-label2']}\n              onChange={handleChange}\n            />\n          </FormGroup>\n        </FormFieldGroup>\n        <FormFieldGroup\n          header={\n            <FormFieldGroupHeader\n              titleText={{\n                text: 'Nested field group 2 (non-expandable)',\n                id: 'nested-field-group2-non-expandable-titleText-id'\n              }}\n              titleDescription=\"Field group 2 description text.\"\n            />\n          }\n        >\n          <FormGroup label=\"Label 1\" isRequired fieldId=\"3-nonexpand-group2-label1\">\n            <TextInput\n              isRequired\n              id=\"3-nonexpand-group2-label1\"\n              name=\"3-nonexpand-group2-label1\"\n              value={inputValues['3-nonexpand-group2-label1']}\n              onChange={handleChange}\n            />\n          </FormGroup>\n          <FormGroup label=\"Label 2\" isRequired fieldId=\"3-nonexpand-group2-label2\">\n            <TextInput\n              isRequired\n              id=\"3-nonexpand-group2-label2\"\n              name=\"3-nonexpand-group2-label2\"\n              value={inputValues['3-nonexpand-group2-label2']}\n              onChange={handleChange}\n            />\n          </FormGroup>\n        </FormFieldGroup>\n      </FormFieldGroupExpandable>\n      <FormFieldGroup\n        header={\n          <FormFieldGroupHeader\n            titleText={{ text: 'Field group 4 (non-expandable)', id: 'field-group4-non-expandable-titleText-id' }}\n            titleDescription=\"Field group 4 description text.\"\n            actions={\n              <>\n                <Button variant=\"link\">Delete all</Button> <Button variant=\"secondary\">Add parameter</Button>\n              </>\n            }\n          />\n        }\n      >\n        <FormGroup label=\"Label 1\" isRequired fieldId=\"4-nonexpand-label1\">\n          <TextInput\n            isRequired\n            id=\"4-nonexpand-label1\"\n            name=\"4-nonexpand-label1\"\n            value={inputValues['4-nonexpand-label1']}\n            onChange={handleChange}\n          />\n        </FormGroup>\n        <FormGroup label=\"Label 2\" isRequired fieldId=\"4-nonexpand-label2\">\n          <TextInput\n            isRequired\n            id=\"4-nonexpand-label2\"\n            name=\"4-nonexpand-label2\"\n            value={inputValues['4-nonexpand-label2']}\n            onChange={handleChange}\n          />\n        </FormGroup>\n      </FormFieldGroup>\n      <FormGroup label=\"Label 3\" isRequired fieldId=\"0-label3\">\n        <TextInput isRequired id=\"0-label3\" name=\"0-label3\" value={inputValues['0-label3']} onChange={handleChange} />\n      </FormGroup>\n      <FormGroup label=\"Label 4\" isRequired fieldId=\"0-label4\">\n        <TextInput isRequired id=\"0-label4\" name=\"0-label4\" value={inputValues['0-label4']} onChange={handleChange} />\n      </FormGroup>\n    </Form>\n  );\n};\n","title":"Field Groups","lang":"ts"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["Horizontal"])}
    {React.createElement(pageData.examples["Limit width"])}
    {React.createElement(pageData.examples["Invalid"])}
    {React.createElement(pageData.examples["Invalid with form alert"])}
    {React.createElement(pageData.examples["Validated"])}
    {React.createElement(pageData.examples["Horizontal stacked no padding top"])}
    {React.createElement(pageData.examples["Horizontal stacked helper text on top"])}
    {React.createElement(pageData.examples["Form group with additional label info"])}
    {React.createElement(pageData.examples["Form Sections"])}
    {React.createElement(pageData.examples["Grid form"])}
    {React.createElement(pageData.examples["Field Groups"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsFormReactDocs';
Component.pageData = pageData;

export default Component;
