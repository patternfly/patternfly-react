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
          "description": "ID of the included field. It has to be the same for proper working.",
          "required": true
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
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Form, FormGroup, TextInput, Checkbox, Popover, ActionGroup, Button } from '@patternfly/react-core';\nimport HelpIcon from '@patternfly/react-icons/dist/esm/icons/help-icon';\n\nclass SimpleForm extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value1: '',\n      value2: '',\n      value3: ''\n    };\n    this.handleTextInputChange1 = value1 => {\n      this.setState({ value1 });\n    };\n    this.handleTextInputChange2 = value2 => {\n      this.setState({ value2 });\n    };\n    this.handleTextInputChange3 = value3 => {\n      this.setState({ value3 });\n    };\n  }\n\n  render() {\n    const { value1, value2, value3 } = this.state;\n\n    return (\n      <Form>\n        <FormGroup\n          label=\"Full name\"\n          labelIcon={\n            <Popover\n              headerContent={\n                <div>\n                  The{' '}\n                  <a href=\"https://schema.org/name\" target=\"_blank\">\n                    name\n                  </a>{' '}\n                  of a{' '}\n                  <a href=\"https://schema.org/Person\" target=\"_blank\">\n                    Person\n                  </a>\n                </div>\n              }\n              bodyContent={\n                <div>\n                  Often composed of{' '}\n                  <a href=\"https://schema.org/givenName\" target=\"_blank\">\n                    givenName\n                  </a>{' '}\n                  and{' '}\n                  <a href=\"https://schema.org/familyName\" target=\"_blank\">\n                    familyName\n                  </a>\n                  .\n                </div>\n              }\n            >\n              <button\n                type=\"button\"\n                aria-label=\"More info for name field\"\n                onClick={e => e.preventDefault()}\n                aria-describedby=\"simple-form-name-01\"\n                className=\"pf-c-form__group-label-help\"\n              >\n                <HelpIcon noVerticalAlign />\n              </button>\n            </Popover>\n          }\n          isRequired\n          fieldId=\"simple-form-name-01\"\n          helperText=\"Include your middle name if you have one.\"\n        >\n          <TextInput\n            isRequired\n            type=\"text\"\n            id=\"simple-form-name-01\"\n            name=\"simple-form-name-01\"\n            aria-describedby=\"simple-form-name-01-helper\"\n            value={value1}\n            onChange={this.handleTextInputChange1}\n          />\n        </FormGroup>\n        <FormGroup label=\"Email\" isRequired fieldId=\"simple-form-email-01\">\n          <TextInput\n            isRequired\n            type=\"email\"\n            id=\"simple-form-email-01\"\n            name=\"simple-form-email-01\"\n            value={value2}\n            onChange={this.handleTextInputChange2}\n          />\n        </FormGroup>\n        <FormGroup label=\"Phone number\" isRequired fieldId=\"simple-form-number-01\">\n          <TextInput\n            isRequired\n            type=\"tel\"\n            id=\"simple-form-number-01\"\n            placeholder=\"555-555-5555\"\n            name=\"simple-form-number-01\"\n            value={value3}\n            onChange={this.handleTextInputChange3}\n          />\n        </FormGroup>\n        <FormGroup isInline fieldId=\"simple-form-checkbox-group\" label=\"How can we contact you?\" isRequired>\n          <Checkbox label=\"Email\" aria-label=\"Email\" id=\"inlinecheck01\" />\n          <Checkbox label=\"Phone\" aria-label=\"Phone\" id=\"inlinecheck02\" />\n          <Checkbox label=\"Please don't contact me.\" aria-label=\"Please don't contact me.\" id=\"inlinecheck03\" />\n        </FormGroup>\n        <FormGroup label=\"Additional note\" fieldId=\"simple-form-note-01\">\n          <TextInput isDisabled type=\"text\" id=\"simple-form-note-01\" name=\"simple-form-number\" value=\"disabled\" />\n        </FormGroup>\n        <FormGroup fieldId=\"checkbox01\">\n          <Checkbox\n            label=\"I'd like updates via email.\"\n            id=\"checkbox01\"\n            name=\"checkbox01\"\n            aria-label=\"Update via email\"\n          />\n        </FormGroup>\n        <ActionGroup>\n          <Button variant=\"primary\">Submit</Button>\n          <Button variant=\"link\">Cancel</Button>\n        </ActionGroup>\n      </Form>\n    );\n  }\n}","title":"Basic","lang":"js"}}>
      
    </Example>,
  'Horizontal': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Form,\n  FormGroup,\n  TextInput,\n  TextArea,\n  FormSelect,\n  FormSelectOption,\n  Checkbox,\n  ActionGroup,\n  Button\n} from '@patternfly/react-core';\n\nclass HorizontalForm extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value: 'please choose',\n      value1: '',\n      value2: '',\n      value3: ''\n    };\n    this.onChange = (value, event) => {\n      this.setState({ value });\n    };\n    this.handleTextInputChange1 = value1 => {\n      this.setState({ value1 });\n    };\n    this.handleTextInputChange2 = value2 => {\n      this.setState({ value2 });\n    };\n    this.handleTextInputChange3 = value3 => {\n      this.setState({ value3 });\n    };\n    this.options = [\n      { value: 'select one', label: 'Select one', disabled: false },\n      { value: 'mr', label: 'Mr', disabled: false },\n      { value: 'miss', label: 'Miss', disabled: false },\n      { value: 'mrs', label: 'Mrs', disabled: false },\n      { value: 'ms', label: 'Ms', disabled: false },\n      { value: 'dr', label: 'Dr', disabled: false },\n      { value: 'other', label: 'Other', disabled: false }\n    ];\n  }\n\n  render() {\n    const { value1, value2, value3 } = this.state;\n\n    return (\n      <Form isHorizontal>\n        <FormGroup label=\"Full name\" isRequired fieldId=\"horizontal-form-name\" helperText=\"Include your middle name if you have one.\">\n          <TextInput\n            value={value1}\n            isRequired\n            type=\"text\"\n            id=\"horizontal-form-name\"\n            aria-describedby=\"horizontal-form-name-helper\"\n            name=\"horizontal-form-name\"\n            onChange={this.handleTextInputChange1}\n          />\n        </FormGroup>\n        <FormGroup label=\"Email\" isRequired fieldId=\"horizontal-form-email\">\n          <TextInput\n            value={value2}\n            onChange={this.handleTextInputChange2}\n            isRequired\n            type=\"email\"\n            id=\"horizontal-form-email\"\n            name=\"horizontal-form-email\"\n          />\n        </FormGroup>\n        <FormGroup label=\"Your title\" fieldId=\"horizontal-form-title\">\n          <FormSelect\n            value={this.state.value}\n            onChange={this.onChange}\n            id=\"horzontal-form-title\"\n            name=\"horizontal-form-title\"\n            aria-label=\"Your title\"\n          >\n            {this.options.map((option, index) => (\n              <FormSelectOption isDisabled={option.disabled} key={index} value={option.value} label={option.label} />\n            ))}\n          </FormSelect>\n        </FormGroup>\n        <FormGroup label=\"Your experience\" fieldId=\"horizontal-form-exp\">\n          <TextArea\n            value={value3}\n            onChange={this.handleTextInputChange3}\n            name=\"horizontal-form-exp\"\n            id=\"horizontal-form-exp\"\n          />\n        </FormGroup>\n        <FormGroup label=\"How can we contact you?\" isRequired isStack hasNoPaddingTop>\n          <Checkbox label=\"Email\" id=\"alt-form-checkbox-1\" name=\"alt-form-checkbox-1\" />\n          <Checkbox label=\"Phone\" id=\"alt-form-checkbox-2\" name=\"alt-form-checkbox-2\" />\n          <Checkbox label=\"Please don't contact me.\" id=\"alt-form-checkbox-3\" name=\"alt-form-checkbox-3\" />\n        </FormGroup>\n        <ActionGroup>\n          <Button variant=\"primary\">Submit</Button>\n          <Button variant=\"link\">Cancel</Button>\n        </ActionGroup>\n      </Form>\n    );\n  }\n}","title":"Horizontal","lang":"js"}}>
      
    </Example>,
  'Limit width': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Form, FormGroup, TextInput, Checkbox, Popover, ActionGroup, Button } from '@patternfly/react-core';\nimport HelpIcon from '@patternfly/react-icons/dist/esm/icons/help-icon';\n\nclass SimpleForm extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value1: '',\n      value2: '',\n      value3: ''\n    };\n    this.handleTextInputChange1 = value1 => {\n      this.setState({ value1 });\n    };\n    this.handleTextInputChange2 = value2 => {\n      this.setState({ value2 });\n    };\n    this.handleTextInputChange3 = value3 => {\n      this.setState({ value3 });\n    };\n  }\n\n  render() {\n    const { value1, value2, value3 } = this.state;\n\n    return (\n      <Form isWidthLimited>\n        <FormGroup\n          label=\"Full name\"\n          labelIcon={\n            <Popover\n              headerContent={\n                <div>\n                  The{' '}\n                  <a href=\"https://schema.org/name\" target=\"_blank\">\n                    name\n                  </a>{' '}\n                  of a{' '}\n                  <a href=\"https://schema.org/Person\" target=\"_blank\">\n                    Person\n                  </a>\n                </div>\n              }\n              bodyContent={\n                <div>\n                  Often composed of{' '}\n                  <a href=\"https://schema.org/givenName\" target=\"_blank\">\n                    givenName\n                  </a>{' '}\n                  and{' '}\n                  <a href=\"https://schema.org/familyName\" target=\"_blank\">\n                    familyName\n                  </a>\n                  .\n                </div>\n              }\n            >\n              <button\n                type=\"button\"\n                aria-label=\"More info for name field\"\n                onClick={e => e.preventDefault()}\n                aria-describedby=\"simple-form-name-02\"\n                className=\"pf-c-form__group-label-help\"\n              >\n                <HelpIcon noVerticalAlign />\n              </button>\n            </Popover>\n          }\n          isRequired\n          fieldId=\"simple-form-name-02\"\n          helperText=\"Include your middle name if you have one.\"\n        >\n          <TextInput\n            isRequired\n            type=\"text\"\n            id=\"simple-form-name-02\"\n            name=\"simple-form-name-02\"\n            aria-describedby=\"simple-form-name-02-helper\"\n            value={value1}\n            onChange={this.handleTextInputChange1}\n          />\n        </FormGroup>\n        <FormGroup label=\"Email\" isRequired fieldId=\"simple-form-email-02\">\n          <TextInput\n            isRequired\n            type=\"email\"\n            id=\"simple-form-email-02\"\n            name=\"simple-form-email-02\"\n            value={value2}\n            onChange={this.handleTextInputChange2}\n          />\n        </FormGroup>\n        <FormGroup label=\"Phone number\" isRequired fieldId=\"simple-form-number\">\n          <TextInput\n            isRequired\n            type=\"tel\"\n            id=\"simple-form-number\"\n            placeholder=\"555-555-5555\"\n            name=\"simple-form-number\"\n            value={value3}\n            onChange={this.handleTextInputChange3}\n          />\n        </FormGroup>\n        <FormGroup isInline label=\"How can we contact you?\" isRequired>\n          <Checkbox label=\"Email\" aria-label=\"Email\" id=\"inlinecheck04\" />\n          <Checkbox label=\"Phone\" aria-label=\"Phone\" id=\"inlinecheck05\" />\n          <Checkbox label=\"Please don't contact me.\" aria-label=\"Please don't contact me.\" id=\"inlinecheck06\" />\n        </FormGroup>\n        <FormGroup label=\"Additional note\" fieldId=\"simple-form-note-02\">\n          <TextInput isDisabled type=\"text\" id=\"simple-form-note-02\" name=\"simple-form-number\" value=\"disabled\" />\n        </FormGroup>\n        <FormGroup fieldId=\"checkbox02\">\n          <Checkbox\n            label=\"I'd like updates via email.\"\n            id=\"checkbox02\"\n            name=\"checkbox02\"\n            aria-label=\"Update via email\"\n          />\n        </FormGroup>\n        <ActionGroup>\n          <Button variant=\"primary\">Submit</Button>\n          <Button variant=\"link\">Cancel</Button>\n        </ActionGroup>\n      </Form>\n    );\n  }\n}","title":"Limit width","lang":"js"}}>
      
    </Example>,
  'Invalid': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Form, FormGroup, TextInput, FormHelperText } from '@patternfly/react-core';\nimport ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';\n\nclass InvalidForm extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value: 'Five',\n      validated: 'error'\n    };\n    this.handleTextInputChange = value => {\n      this.setState({ value, validated: value === '' ? 'noval' : /^\\d+$/.test(value) ? 'success' : 'error' });\n    };\n  }\n\n  render() {\n    const { value, validated } = this.state;\n\n    return (\n      <Form>\n        <FormGroup\n          label=\"Age\"\n          type=\"number\"\n          helperText={\n            <FormHelperText icon={<ExclamationCircleIcon />} isHidden={validated !== 'noval'}>\n              Please enter your age\n            </FormHelperText>\n          }\n          helperTextInvalid=\"Must be a number\"\n          helperTextInvalidIcon={<ExclamationCircleIcon />}\n          fieldId=\"age-1\"\n          validated={validated}\n        >\n          <TextInput\n            validated={validated}\n            value={value}\n            id=\"age-1\"\n            aria-describedby=\"age-1-helper\"\n            onChange={this.handleTextInputChange}\n          />\n        </FormGroup>\n      </Form>\n    );\n  }\n}","title":"Invalid","lang":"js"}}>
      
    </Example>,
  'Invalid with form alert': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Alert, Form, FormAlert, FormGroup, TextInput, FormHelperText } from '@patternfly/react-core';\nimport ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';\n\nclass InvalidFormWithFormAlert extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value: 'Five',\n      validated: 'error'\n    };\n    this.handleTextInputChange = value => {\n      this.setState({ value, validated: value === '' ? 'noval' : /^\\d+$/.test(value) ? 'success' : 'error' });\n    };\n  }\n\n  render() {\n    const { value, validated } = this.state;\n\n    return (\n      <Form>\n        {validated === 'error' && (\n          <FormAlert>\n            <Alert\n              variant=\"danger\"\n              title=\"Fill out all required fields before continuing.\"\n              aria-live=\"polite\"\n              isInline\n            />\n          </FormAlert>\n        )}\n        <FormGroup\n          label=\"Age\"\n          type=\"number\"\n          helperText={\n            <FormHelperText icon={<ExclamationCircleIcon />} isHidden={validated !== 'noval'}>\n              Please enter your age\n            </FormHelperText>\n          }\n          helperTextInvalid=\"Must be a number\"\n          helperTextInvalidIcon={<ExclamationCircleIcon />}\n          fieldId=\"age-2\"\n          validated={validated}\n        >\n          <TextInput\n            validated={validated}\n            value={value}\n            id=\"age-2\"\n            aria-describedby=\"age-2-helper\"\n            onChange={this.handleTextInputChange}\n          />\n        </FormGroup>\n      </Form>\n    );\n  }\n}","title":"Invalid with form alert","lang":"js"}}>
      
    </Example>,
  'Validated': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Form, FormGroup, TextInput } from '@patternfly/react-core';\nimport ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';\n\nclass InvalidForm extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value: '',\n      invalidText: 'Must be a number',\n      validated: 'default',\n      helperText: 'Enter your age to continue'\n    };\n\n    this.simulateNetworkCall = callback => {\n      setTimeout(callback, 2000);\n    };\n\n    this.handleTextInputChange = value => {\n      this.setState(\n        { value, validated: 'default', helperText: 'Validating...' },\n        this.simulateNetworkCall(() => {\n          if (/^\\d+$/.test(value)) {\n            if (parseInt(value, 10) >= 21) {\n              this.setState({ validated: 'success', helperText: 'Enjoy your stay' });\n            } else {\n              this.setState({ validated: 'warning', helperText: 'You must be at least 21 to continue' });\n            }\n          } else {\n            this.setState({ validated: 'error', invalidText: 'Must be a number' });\n          }\n        })\n      );\n    };\n  }\n\n  render() {\n    const { value, validated, helperText, invalidText } = this.state;\n\n    return (\n      <Form>\n        <FormGroup\n          label=\"Age\"\n          type=\"number\"\n          helperText={helperText}\n          helperTextInvalid={invalidText}\n          helperTextInvalidIcon={<ExclamationCircleIcon />}\n          fieldId=\"age-3\"\n          validated={validated}\n        >\n          <TextInput\n            validated={validated}\n            value={value}\n            id=\"age-3\"\n            aria-describedby=\"age-3-helper\"\n            onChange={this.handleTextInputChange}\n          />\n        </FormGroup>\n      </Form>\n    );\n  }\n}","title":"Validated","lang":"js"}}>
      
    </Example>,
  'Horizontal stacked no padding top': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Form, FormGroup, Checkbox } from '@patternfly/react-core';\n\nclass HorizontalForm extends React.Component {\n  render() {\n    return (\n      <Form isHorizontal>\n        <FormGroup label=\"Label\" hasNoPaddingTop fieldId=\"options\" isStack>\n          <Checkbox label=\"option 1\" id=\"option-01\" />\n          <Checkbox label=\"option 2\" id=\"option-02\" />\n        </FormGroup>\n      </Form>\n    );\n  }\n}","title":"Horizontal stacked no padding top","lang":"js"}}>
      
    </Example>,
  'Horizontal stacked helper text on top': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Form, FormGroup, Checkbox } from '@patternfly/react-core';\n\nclass HorizontalFormHelperTextOnTop extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      helperText: 'Select all that apply:'\n    };\n  }\n\n  render() {\n    return (\n      <Form isHorizontal>\n        <FormGroup\n          label=\"Label\"\n          helperText={this.state.helperText}\n          isHelperTextBeforeField\n          hasNoPaddingTop\n          fieldId=\"options\"\n          isStack\n        >\n          <Checkbox label=\"Option 1\" id=\"option-03\" />\n          <Checkbox label=\"Option 2\" id=\"option-04\" />\n        </FormGroup>\n      </Form>\n    );\n  }\n}","title":"Horizontal stacked helper text on top","lang":"js"}}>
      
    </Example>,
  'Form group with additional label info': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Form, FormGroup, TextInput, Popover } from '@patternfly/react-core';\nimport HelpIcon from '@patternfly/react-icons/dist/esm/icons/help-icon';\n\nclass FormGroupLabelInfo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value1: ''\n    };\n    this.handleTextInputChange1 = value1 => {\n      this.setState({ value1 });\n    };\n  }\n\n  render() {\n    const { value1 } = this.state;\n\n    return (\n      <Form>\n        <FormGroup\n          label=\"Full name\"\n          labelInfo=\"Additional label info\"\n          labelIcon={\n            <Popover\n              headerContent={\n                <div>\n                  The{' '}\n                  <a href=\"https://schema.org/name\" target=\"_blank\">\n                    name\n                  </a>{' '}\n                  of a{' '}\n                  <a href=\"https://schema.org/Person\" target=\"_blank\">\n                    Person\n                  </a>\n                </div>\n              }\n              bodyContent={\n                <div>\n                  Often composed of{' '}\n                  <a href=\"https://schema.org/givenName\" target=\"_blank\">\n                    givenName\n                  </a>{' '}\n                  and{' '}\n                  <a href=\"https://schema.org/familyName\" target=\"_blank\">\n                    familyName\n                  </a>\n                  .\n                </div>\n              }\n            >\n              <button\n                type=\"button\"\n                aria-label=\"More info for name field\"\n                onClick={e => e.preventDefault()}\n                aria-describedby=\"form-group-label-info\"\n                className=\"pf-c-form__group-label-help\"\n              >\n                <HelpIcon noVerticalAlign />\n              </button>\n            </Popover>\n          }\n          isRequired\n          fieldId=\"form-group-label-info\"\n          helperText=\"Include your middle name if you have one.\"\n        >\n          <TextInput\n            isRequired\n            type=\"text\"\n            id=\"form-group-label-info\"\n            name=\"form-group-label-info\"\n            aria-describedby=\"form-group-label-info-helper\"\n            value={value1}\n            onChange={this.handleTextInputChange1}\n          />\n        </FormGroup>\n      </Form>\n    );\n  }\n}","title":"Form group with additional label info","lang":"js"}}>
      
    </Example>,
  'Form Sections': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Form, FormGroup, FormSection, TextInput } from '@patternfly/react-core';\n\nclass FormSections extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value1: '',\n      value2: ''\n    };\n    this.handleTextInputChange1 = value1 => {\n      this.setState({ value1 });\n    };\n    this.handleTextInputChange2 = value2 => {\n      this.setState({ value2 });\n    };\n  }\n\n  render() {\n    const { value1, value2 } = this.state;\n\n    return (\n      <Form>\n        <FormSection>\n          <FormGroup label=\"Form section 1 input\" isRequired fieldId=\"simple-form-section-1-input\">\n            <TextInput\n              isRequired\n              type=\"section-1-input\"\n              id=\"simple-form-section-1-input\"\n              name=\"simple-form-section-1-input\"\n              value={value1}\n              onChange={this.handleTextInputChange1}\n            />\n          </FormGroup>\n        </FormSection>\n        <FormSection title=\"Form section 2 (optional title)\" titleElement=\"h2\">\n          <FormGroup label=\"Form section 2 input\" isRequired fieldId=\"simple-form-section-2-input\">\n            <TextInput\n              isRequired\n              type=\"section-2-input\"\n              id=\"simple-form-section-2-input\"\n              name=\"simple-form-section-2-input\"\n              value={value2}\n              onChange={this.handleTextInputChange2}\n            />\n          </FormGroup>\n        </FormSection>\n      </Form>\n    );\n  }\n}","title":"Form Sections","lang":"js"}}>
      
    </Example>,
  'Grid form': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Form, FormGroup, TextInput, Button, Grid, GridItem } from '@patternfly/react-core';\nimport HelpIcon from '@patternfly/react-icons/dist/esm/icons/help-icon';\n\nclass SimpleForm extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value1: '',\n      value2: '',\n      value3: ''\n    };\n    this.handleTextInputChange1 = value1 => {\n      this.setState({ value1 });\n    };\n    this.handleTextInputChange2 = value2 => {\n      this.setState({ value2 });\n    };\n    this.handleTextInputChange3 = value3 => {\n      this.setState({ value3 });\n    };\n  }\n\n  render() {\n    const { value1, value2, value3 } = this.state;\n\n    return (\n      <Form>\n        <Grid hasGutter md={6}>\n          <GridItem span={12}>\n            <FormGroup label=\"Full name\" isRequired fieldId=\"grid-form-name-01\" helperText=\"Include your middle name if you have one.\">\n              <TextInput\n                isRequired\n                type=\"text\"\n                id=\"grid-form-name-01\"\n                name=\"grid-form-name-01\"\n                aria-describedby=\"grid-form-name-01-helper\"\n                value={value1}\n                onChange={this.handleTextInputChange1}\n              />\n            </FormGroup>\n          </GridItem>\n          <FormGroup label=\"Email\" isRequired fieldId=\"grid-form-email-01\">\n            <TextInput\n              isRequired\n              type=\"email\"\n              id=\"grid-form-email-01\"\n              name=\"grid-form-email-01\"\n              value={value2}\n              onChange={this.handleTextInputChange2}\n            />\n          </FormGroup>\n          <FormGroup label=\"Phone number\" isRequired fieldId=\"grid-form-number-01\">\n            <TextInput\n              isRequired\n              type=\"tel\"\n              id=\"grid-form-number-01\"\n              placeholder=\"555-555-5555\"\n              name=\"grid-form-number-01\"\n              value={value3}\n              onChange={this.handleTextInputChange3}\n            />\n          </FormGroup>\n        </Grid>\n      </Form>\n    );\n  }\n}","title":"Grid form","lang":"js"}}>
      
    </Example>,
  'Field Groups': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Form,\n  FormGroup,\n  FormFieldGroup,\n  FormFieldGroupExpandable,\n  FormFieldGroupHeader,\n  TextInput,\n  Button\n} from '@patternfly/react-core';\nimport TrashIcon from '@patternfly/react-icons/dist/esm/icons/trash-icon';\n\nclass FieldGroups extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value1: '',\n      value2: '',\n      value3: '',\n      value4: '',\n      value5: '',\n      value6: '',\n      value7: '',\n      value8: '',\n      value9: '',\n      value10: '',\n      value11: '',\n      value12: '',\n      value13: '',\n      value14: '',\n      value15: '',\n      value16: '',\n      value17: '',\n      value18: '',\n      value19: '',\n      value20: '',\n      value21: '',\n      value22: ''\n    };\n    this.handleTextInputChange = value => {\n      this.setState(value);\n    };\n  }\n\n  render() {\n    const {\n      value1,\n      value2,\n      value3,\n      value4,\n      value5,\n      value6,\n      value7,\n      value8,\n      value9,\n      value10,\n      value11,\n      value12,\n      value13,\n      value14,\n      value15,\n      value16,\n      value17,\n      value18,\n      value19,\n      value20,\n      value21,\n      value22\n    } = this.state;\n\n    return (\n      <Form>\n        <FormGroup label=\"Label 1\" isRequired fieldId=\"form-expandable-field-groups-label1\">\n          <TextInput\n            isRequired\n            id=\"form-expandable-field-groups-label1\"\n            name=\"form-expandable-field-groups-label1\"\n            value={value1}\n            onChange={value => {\n              this.handleTextInputChange({ value1: value });\n            }}\n          />\n        </FormGroup>\n        <FormGroup label=\"Label 2\" isRequired fieldId=\"form-expandable-field-groups-label2\">\n          <TextInput\n            isRequired\n            id=\"form-expandable-field-groups-label2\"\n            name=\"form-expandable-field-groups-label2\"\n            value={value2}\n            onChange={value => {\n              this.handleTextInputChange({ value2: value });\n            }}\n          />\n        </FormGroup>\n        <FormFieldGroupExpandable\n          isExpanded\n          toggleAriaLabel=\"Details\"\n          header={\n            <FormFieldGroupHeader\n              titleText={{ text: 'Field group 1', id: 'field-group1-titleText-id' }}\n              titleDescription=\"Field group 1 description text.\"\n              actions={\n                <>\n                  <Button variant=\"link\">Delete all</Button> <Button variant=\"secondary\">Add parameter</Button>\n                </>\n              }\n            />\n          }\n        >\n          <FormFieldGroupExpandable\n            isExpanded\n            toggleAriaLabel=\"Details\"\n            header={\n              <FormFieldGroupHeader\n                titleText={{ text: 'Nested field group 1', id: 'nested-field-group1-titleText-id' }}\n                titleDescription=\"Nested field group 1 description text.\"\n                actions={\n                  <Button variant=\"plain\" aria-label=\"Remove\">\n                    <TrashIcon />\n                  </Button>\n                }\n              />\n            }\n          >\n            <FormGroup label=\"Label 1\" isRequired fieldId=\"form-expandable-field-groups-field-group1-label1\">\n              <TextInput\n                isRequired\n                id=\"form-expandable-field-groups-field-group1-label1\"\n                name=\"form-expandable-field-groups-field-group1-label1\"\n                value={value3}\n                onChange={value => {\n                  this.handleTextInputChange({ value3: value });\n                }}\n              />\n            </FormGroup>\n            <FormGroup label=\"Label 2\" isRequired fieldId=\"form-expandable-field-groups-field-group1-label2\">\n              <TextInput\n                isRequired\n                id=\"form-expandable-field-groups-field-group1-label2\"\n                name=\"form-expandable-field-groups-field-group1-label2\"\n                value={value4}\n                onChange={value => {\n                  this.handleTextInputChange({ value4: value });\n                }}\n              />\n            </FormGroup>\n          </FormFieldGroupExpandable>\n          <FormFieldGroupExpandable\n            toggleAriaLabel=\"Details\"\n            header={\n              <FormFieldGroupHeader\n                titleText={{ text: 'Nested field group 2', id: 'nested-field-group2-titleText-id' }}\n                actions={\n                  <Button variant=\"plain\" aria-label=\"Remove\">\n                    <TrashIcon />\n                  </Button>\n                }\n              />\n            }\n          >\n            <FormGroup label=\"Label 1\" isRequired fieldId=\"form-expandable-field-groups-field-group2-label1\">\n              <TextInput\n                isRequired\n                id=\"form-expandable-field-groups-field-group2-label1\"\n                name=\"form-expandable-field-groups-field-group2-label1\"\n                value={value5}\n                onChange={value => {\n                  this.handleTextInputChange({ value5: value });\n                }}\n              />\n            </FormGroup>\n            <FormGroup label=\"Label 2\" isRequired fieldId=\"form-expandable-field-groups-field-group2-label2\">\n              <TextInput\n                isRequired\n                id=\"form-expandable-field-groups-field-group2-label2\"\n                name=\"form-expandable-field-groups-field-group2-label2\"\n                value={value6}\n                onChange={value => {\n                  this.handleTextInputChange({ value6: value });\n                }}\n              />\n            </FormGroup>\n          </FormFieldGroupExpandable>\n          <FormFieldGroupExpandable\n            toggleAriaLabel=\"Details\"\n            header={\n              <FormFieldGroupHeader\n                titleText={{ text: 'Nested field group 3', id: 'nested-field-group3-titleText-id' }}\n                titleDescription=\"Field group 3 description text.\"\n                actions={\n                  <Button variant=\"plain\" aria-label=\"Remove\">\n                    <TrashIcon />\n                  </Button>\n                }\n              />\n            }\n          >\n            <FormGroup label=\"Label 1\" isRequired fieldId=\"form-expandable-field-groups-field-group3-label1\">\n              <TextInput\n                isRequired\n                id=\"form-expandable-field-groups-field-group3-label1\"\n                name=\"form-expandable-field-groups-field-group3-label1\"\n                value={value7}\n                onChange={value => {\n                  this.handleTextInputChange({ value7: value });\n                }}\n              />\n            </FormGroup>\n            <FormGroup label=\"Label 2\" isRequired fieldId=\"form-expandable-field-groups-field-group3-label2\">\n              <TextInput\n                isRequired\n                id=\"form-expandable-field-groups-field-group3-label2\"\n                name=\"form-expandable-field-groups-field-group3-label2\"\n                value={value8}\n                onChange={value => {\n                  this.handleTextInputChange({ value8: value });\n                }}\n              />\n            </FormGroup>\n          </FormFieldGroupExpandable>\n          <FormGroup\n            label=\"Label 1\"\n            isRequired\n            fieldId=\"form-expandable-field-groupsform-expandable-field-groups-field-group1-label1\"\n          >\n            <TextInput\n              isRequired\n              id=\"form-expandable-field-groupsform-expandable-field-groups-field-group1-label1\"\n              name=\"form-expandable-field-groupsform-expandable-field-groups-field-group1-label1\"\n              value={value9}\n              onChange={value => {\n                this.handleTextInputChange({ value9: value });\n              }}\n            />\n          </FormGroup>\n          <FormGroup\n            label=\"Label 2\"\n            isRequired\n            fieldId=\"form-expandable-field-groupsform-expandable-field-groups-field-group1-label2\"\n          >\n            <TextInput\n              isRequired\n              id=\"form-expandable-field-groupsform-expandable-field-groups-field-group1-label2\"\n              name=\"form-expandable-field-groupsform-expandable-field-groups-field-group1-label2\"\n              value={value10}\n              onChange={value => {\n                this.handleTextInputChange({ value10: value });\n              }}\n            />\n          </FormGroup>\n        </FormFieldGroupExpandable>\n        <FormFieldGroupExpandable\n          toggleAriaLabel=\"Details\"\n          header={\n            <FormFieldGroupHeader\n              titleText={{ text: 'Field group 2', id: 'field-group2-titleText-id' }}\n              titleDescription=\"Field group 2 description text.\"\n              actions={\n                <>\n                  <Button variant=\"link\">Delete all</Button> <Button variant=\"secondary\">Add parameter</Button>\n                </>\n              }\n            />\n          }\n        >\n          <FormGroup label=\"Label 1\" isRequired fieldId=\"form-expandable-field-group2-label1\">\n            <TextInput\n              isRequired\n              id=\"form-expandable-field-group2-label1\"\n              name=\"form-expandable-field-group2-label1\"\n              value={value11}\n              onChange={value => {\n                this.handleTextInputChange({ value11: value });\n              }}\n            />\n          </FormGroup>\n          <FormGroup label=\"Label 2\" isRequired fieldId=\"form-expandable-field-group2-label2\">\n            <TextInput\n              isRequired\n              id=\"form-expandable-field-group2-label2\"\n              name=\"form-expandable-field-group2-label2\"\n              value={value12}\n              onChange={value => {\n                this.handleTextInputChange({ value12: value });\n              }}\n            />\n          </FormGroup>\n        </FormFieldGroupExpandable>\n        <FormFieldGroupExpandable\n          isExpanded\n          toggleAriaLabel=\"Details\"\n          header={\n            <FormFieldGroupHeader\n              titleText={{ text: 'Field group 3', id: 'field-group3-titleText-id' }}\n              titleDescription=\"Field group 3 description text.\"\n            />\n          }\n        >\n          <FormGroup label=\"Label 1\" isRequired fieldId=\"form-expandable-field-group3-label1\">\n            <TextInput\n              isRequired\n              id=\"form-expandable-field-group3-label1\"\n              name=\"form-expandable-field-group3-label1\"\n              value={value13}\n              onChange={value => {\n                this.handleTextInputChange({ value13: value });\n              }}\n            />\n          </FormGroup>\n          <FormGroup label=\"Label 2\" isRequired fieldId=\"form-expandable-field-group3-label2\">\n            <TextInput\n              isRequired\n              id=\"form-expandable-field-group3-label2\"\n              name=\"form-expandable-field-group3-label2\"\n              value={value14}\n              onChange={value => {\n                this.handleTextInputChange({ value14: value });\n              }}\n            />\n          </FormGroup>\n          <FormFieldGroup\n            header={\n              <FormFieldGroupHeader\n                titleText={{\n                  text: 'Nested field group 1 (non-expandable)',\n                  id: 'nested-field-group1-non-expandable-titleText-id'\n                }}\n              />\n            }\n          >\n            <FormGroup label=\"Label 1\" isRequired fieldId=\"form-expandable-field-groups-field-group7-label1\">\n              <TextInput\n                isRequired\n                id=\"form-expandable-field-groups-field-group7-label1\"\n                name=\"form-expandable-field-groups-field-group7-label1\"\n                value={value15}\n                onChange={value => {\n                  this.handleTextInputChange({ value15: value });\n                }}\n              />\n            </FormGroup>\n            <FormGroup label=\"Label 2\" isRequired fieldId=\"form-expandable-field-groups-field-group7-label2\">\n              <TextInput\n                isRequired\n                id=\"form-expandable-field-groups-field-group7-label2\"\n                name=\"form-expandable-field-groups-field-group7-label2\"\n                value={value16}\n                onChange={value => {\n                  this.handleTextInputChange({ value16: value });\n                }}\n              />\n            </FormGroup>\n          </FormFieldGroup>\n          <FormFieldGroup\n            header={\n              <FormFieldGroupHeader\n                titleText={{\n                  text: 'Nested field group 2 (non-expandable)',\n                  id: 'nested-field-group2-non-expandable-titleText-id'\n                }}\n                titleDescription=\"Field group 2 description text.\"\n              />\n            }\n          >\n            <FormGroup label=\"Label 1\" isRequired fieldId=\"form-expandable-field-groups-field-group8-label1\">\n              <TextInput\n                isRequired\n                id=\"form-expandable-field-groups-field-group8-label1\"\n                name=\"form-expandable-field-groups-field-group8-label1\"\n                value={value17}\n                onChange={value => {\n                  this.handleTextInputChange({ value17: value });\n                }}\n              />\n            </FormGroup>\n            <FormGroup label=\"Label 2\" isRequired fieldId=\"form-expandable-field-groups-field-group8-label2\">\n              <TextInput\n                isRequired\n                id=\"form-expandable-field-groups-field-group8-label2\"\n                name=\"form-expandable-field-groups-field-group8-label2\"\n                value={value18}\n                onChange={value => {\n                  this.handleTextInputChange({ value18: value });\n                }}\n              />\n            </FormGroup>\n          </FormFieldGroup>\n        </FormFieldGroupExpandable>\n        <FormFieldGroup\n          header={\n            <FormFieldGroupHeader\n              titleText={{ text: 'Field group 4 (non-expandable)', id: 'field-group4-non-expandable-titleText-id' }}\n              titleDescription=\"Field group 4 description text.\"\n              actions={\n                <>\n                  <Button variant=\"link\">Delete all</Button> <Button variant=\"secondary\">Add parameter</Button>\n                </>\n              }\n            />\n          }\n        >\n          <FormGroup\n            label=\"Label 1\"\n            isRequired\n            fieldId=\"form-expandable-field-groupsform-expandable-field-groups-field-group10-label1\"\n          >\n            <TextInput\n              isRequired\n              id=\"form-expandable-field-groupsform-expandable-field-groups-field-group10-label1\"\n              name=\"form-expandable-field-groupsform-expandable-field-groups-field-group10-label1\"\n              value={value19}\n              onChange={value => {\n                this.handleTextInputChange({ value19: value });\n              }}\n            />\n          </FormGroup>\n          <FormGroup\n            label=\"Label 2\"\n            isRequired\n            fieldId=\"form-expandable-field-groupsform-expandable-field-groups-field-group10-label2\"\n          >\n            <TextInput\n              isRequired\n              id=\"form-expandable-field-groupsform-expandable-field-groups-field-group10-label2\"\n              name=\"form-expandable-field-groupsform-expandable-field-groups-field-group10-label2\"\n              value={value20}\n              onChange={value => {\n                this.handleTextInputChange({ value20: value });\n              }}\n            />\n          </FormGroup>\n        </FormFieldGroup>\n        <FormGroup label=\"Label 3\" isRequired fieldId=\"form-expandable-field-groups-label3\">\n          <TextInput\n            isRequired\n            id=\"form-expandable-field-groups-label3\"\n            name=\"form-expandable-field-groups-label3\"\n            value={value21}\n            onChange={value => {\n              this.handleTextInputChange({ value21: value });\n            }}\n          />\n        </FormGroup>\n        <FormGroup label=\"Label 4\" isRequired fieldId=\"form-expandable-field-groups-label4\">\n          <TextInput\n            isRequired\n            id=\"form-expandable-field-groups-label4\"\n            name=\"form-expandable-field-groups-label4\"\n            value={value22}\n            onChange={value => {\n              this.handleTextInputChange({ value22: value });\n            }}\n          />\n        </FormGroup>\n      </Form>\n    );\n  }\n}","title":"Field Groups","lang":"js"}}>
      
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
