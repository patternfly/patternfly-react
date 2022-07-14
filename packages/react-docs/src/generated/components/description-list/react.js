import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import { Button, DescriptionList, DescriptionListTerm, DescriptionListDescription, DescriptionListGroup, DescriptionListTermHelpText, DescriptionListTermHelpTextButton, Popover } from '@patternfly/react-core';
import PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';
import CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';
import BookIcon from '@patternfly/react-icons/dist/esm/icons/book-icon';
import KeyIcon from '@patternfly/react-icons/dist/esm/icons/key-icon';
import GlobeIcon from '@patternfly/react-icons/dist/esm/icons/globe-icon';
import FlagIcon from '@patternfly/react-icons/dist/esm/icons/flag-icon';
const pageData = {
  "id": "Description list",
  "section": "components",
  "source": "react",
  "slug": "/components/description-list/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/DescriptionList/examples/DescriptionList.md",
  "propComponents": [
    {
      "name": "DescriptionList",
      "description": "",
      "props": [
        {
          "name": "autoFitMinModifier",
          "type": "{\n  default?: string;\n  sm?: string;\n  md?: string;\n  lg?: string;\n  xl?: string;\n  '2xl'?: string;\n}",
          "description": "Sets the minimum column size for the auto-fit (isAutoFit) layout at various breakpoints."
        },
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Anything that can be rendered inside of the list",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the list",
          "defaultValue": "''"
        },
        {
          "name": "columnModifier",
          "type": "{\n  default?: '1Col' | '2Col' | '3Col';\n  sm?: '1Col' | '2Col' | '3Col';\n  md?: '1Col' | '2Col' | '3Col';\n  lg?: '1Col' | '2Col' | '3Col';\n  xl?: '1Col' | '2Col' | '3Col';\n  '2xl'?: '1Col' | '2Col' | '3Col';\n}",
          "description": "Sets the number of columns on the description list at various breakpoints"
        },
        {
          "name": "horizontalTermWidthModifier",
          "type": "{\n  default?: string;\n  sm?: string;\n  md?: string;\n  lg?: string;\n  xl?: string;\n  '2xl'?: string;\n}",
          "description": "Sets the horizontal description list's term column width at various breakpoints."
        },
        {
          "name": "isAutoColumnWidths",
          "type": "boolean",
          "description": "Sets the description list to format automatically."
        },
        {
          "name": "isAutoFit",
          "type": "boolean",
          "description": "Sets the description list to auto fit."
        },
        {
          "name": "isCompact",
          "type": "boolean",
          "description": "Sets the description list to compact styling."
        },
        {
          "name": "isFillColumns",
          "type": "boolean",
          "description": "Sets the the default placement of description list groups to fill from top to bottom."
        },
        {
          "name": "isFluid",
          "type": "boolean",
          "description": "Sets a horizontal description list to have fluid styling."
        },
        {
          "name": "isHorizontal",
          "type": "boolean",
          "description": "Sets the description list component term and description pair to a horizontal layout.",
          "defaultValue": "false"
        },
        {
          "name": "isInlineGrid",
          "type": "boolean",
          "description": "Modifies the description list display to inline-grid."
        },
        {
          "name": "orientation",
          "type": "{\n  sm?: 'vertical' | 'horizontal';\n  md?: 'vertical' | 'horizontal';\n  lg?: 'vertical' | 'horizontal';\n  xl?: 'vertical' | 'horizontal';\n  '2xl'?: 'vertical' | 'horizontal';\n}",
          "description": "Indicates how the menu will align at various breakpoints."
        }
      ]
    },
    {
      "name": "DescriptionListDescription",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Anything that can be rendered inside of list description",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the DescriptionListDescription"
        }
      ]
    },
    {
      "name": "DescriptionListGroup",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "any",
          "description": "Any elements that can be rendered in the list group"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the DescriptionListGroup"
        }
      ]
    },
    {
      "name": "DescriptionListTerm",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Anything that can be rendered inside of list term",
          "required": true
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the DescriptionListTerm"
        },
        {
          "name": "icon",
          "type": "React.ReactNode",
          "description": "Icon that is rendered inside of list term to the left side of the children"
        }
      ]
    },
    {
      "name": "DescriptionListTermHelpText",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Anything that can be rendered inside of list term",
          "required": true
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the DescriptionListTermHelpText"
        }
      ]
    },
    {
      "name": "DescriptionListTermHelpTextButton",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Anything that can be rendered inside of list term",
          "required": true
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the DescriptionListTerm"
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
    "pf-c-description-list"
  ],
  "examples": [
    "Basic",
    "Term help text",
    "Default 2 col",
    "Default 3 col on lg",
    "Horizontal",
    "Horizontal using custom term width modifier",
    "Horizontal 2 col",
    "Horizontal 3 col on lg",
    "Compact",
    "Compact horizontal",
    "Fluid horizontal",
    "Column fill",
    "Default responsive columns",
    "Horizontal responsive columns",
    "Responsive horizontal, vertical group layout",
    "Default auto column width",
    "Horizontal auto column width",
    "Default inline grid",
    "Auto-fit basic",
    "Auto-fit, min width modified grid template columns",
    "Auto-fit, min width modified, responsive grid template columns",
    "Icons on terms"
  ]
};
pageData.liveContext = {
  Button,
  DescriptionList,
  DescriptionListTerm,
  DescriptionListDescription,
  DescriptionListGroup,
  DescriptionListTermHelpText,
  DescriptionListTermHelpTextButton,
  Popover,
  PlusCircleIcon,
  CubeIcon,
  BookIcon,
  KeyIcon,
  GlobeIcon,
  FlagIcon
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Button,\n  DescriptionList,\n  DescriptionListTerm,\n  DescriptionListGroup,\n  DescriptionListDescription\n} from '@patternfly/react-core';\nimport PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';\n\nexport const DescriptionListBasic: React.FunctionComponent = () => (\n  <DescriptionList>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Name</DescriptionListTerm>\n      <DescriptionListDescription>Example</DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Namespace</DescriptionListTerm>\n      <DescriptionListDescription>\n        <a href=\"#\">mary-test</a>\n      </DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Labels</DescriptionListTerm>\n      <DescriptionListDescription>example</DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Pod selector</DescriptionListTerm>\n      <DescriptionListDescription>\n        <Button variant=\"link\" isInline icon={<PlusCircleIcon />}>\n          app=MyApp\n        </Button>\n      </DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Annotation</DescriptionListTerm>\n      <DescriptionListDescription>2 Annotations</DescriptionListDescription>\n    </DescriptionListGroup>\n  </DescriptionList>\n);\n","title":"Basic","lang":"ts"}}>
      
    </Example>,
  'Term help text': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Button,\n  DescriptionList,\n  DescriptionListGroup,\n  DescriptionListDescription,\n  DescriptionListTermHelpText,\n  DescriptionListTermHelpTextButton,\n  Popover\n} from '@patternfly/react-core';\nimport PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';\n\nexport const DescriptionListWithTermHelpText: React.FunctionComponent = () => (\n  <DescriptionList>\n    <DescriptionListGroup>\n      <DescriptionListTermHelpText>\n        <Popover headerContent={<div>Name</div>} bodyContent={<div>Additional name info</div>}>\n          <DescriptionListTermHelpTextButton> Name </DescriptionListTermHelpTextButton>\n        </Popover>\n      </DescriptionListTermHelpText>\n      <DescriptionListDescription>Example</DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTermHelpText>\n        <Popover headerContent={<div>Namespace</div>} bodyContent={<div>Additional namespace info</div>}>\n          <DescriptionListTermHelpTextButton> Namespace </DescriptionListTermHelpTextButton>\n        </Popover>\n      </DescriptionListTermHelpText>\n      <DescriptionListDescription>\n        <a href=\"#\">mary-test</a>\n      </DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTermHelpText>\n        <Popover headerContent={<div>Labels</div>} bodyContent={<div>Additional labels info</div>}>\n          <DescriptionListTermHelpTextButton> Labels </DescriptionListTermHelpTextButton>\n        </Popover>\n      </DescriptionListTermHelpText>\n      <DescriptionListDescription>example</DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTermHelpText>\n        <Popover headerContent={<div>Pod selector</div>} bodyContent={<div>Additional pod selector info</div>}>\n          <DescriptionListTermHelpTextButton> Pod selector </DescriptionListTermHelpTextButton>\n        </Popover>\n      </DescriptionListTermHelpText>\n      <DescriptionListDescription>\n        <Button variant=\"link\" isInline icon={<PlusCircleIcon />}>\n          app=MyApp\n        </Button>\n      </DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTermHelpText>\n        <Popover headerContent={<div>Annotation</div>} bodyContent={<div>Additional annotation info</div>}>\n          <DescriptionListTermHelpTextButton> Annotation </DescriptionListTermHelpTextButton>\n        </Popover>\n      </DescriptionListTermHelpText>\n      <DescriptionListDescription>2 Annotations</DescriptionListDescription>\n    </DescriptionListGroup>\n  </DescriptionList>\n);\n","title":"Term help text","lang":"ts"}}>
      
    </Example>,
  'Default 2 col': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Button,\n  DescriptionList,\n  DescriptionListTerm,\n  DescriptionListGroup,\n  DescriptionListDescription\n} from '@patternfly/react-core';\nimport PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';\n\nexport const DescriptionListDefaultTwoCol: React.FunctionComponent = () => (\n  <DescriptionList\n    columnModifier={{\n      default: '2Col'\n    }}\n  >\n    <DescriptionListGroup>\n      <DescriptionListTerm>Name</DescriptionListTerm>\n      <DescriptionListDescription>Example</DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Namespace</DescriptionListTerm>\n      <DescriptionListDescription>\n        <a href=\"#\">mary-test</a>\n      </DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Labels</DescriptionListTerm>\n      <DescriptionListDescription>example</DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Pod selector</DescriptionListTerm>\n      <DescriptionListDescription>\n        <Button variant=\"link\" isInline icon={<PlusCircleIcon />}>\n          app=MyApp\n        </Button>\n      </DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Annotation</DescriptionListTerm>\n      <DescriptionListDescription>2 Annotations</DescriptionListDescription>\n    </DescriptionListGroup>\n  </DescriptionList>\n);\n","title":"Default 2 col","lang":"ts"}}>
      
    </Example>,
  'Default 3 col on lg': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Button,\n  DescriptionList,\n  DescriptionListTerm,\n  DescriptionListGroup,\n  DescriptionListDescription\n} from '@patternfly/react-core';\nimport PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';\n\nexport const DescriptionListDefaultThreeColLg: React.FunctionComponent = () => (\n  <DescriptionList columnModifier={{ lg: '3Col' }}>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Name</DescriptionListTerm>\n      <DescriptionListDescription>Example</DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Namespace</DescriptionListTerm>\n      <DescriptionListDescription>\n        <a href=\"#\">mary-test</a>\n      </DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Labels</DescriptionListTerm>\n      <DescriptionListDescription>example</DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Pod selector</DescriptionListTerm>\n      <DescriptionListDescription>\n        <Button variant=\"link\" isInline icon={<PlusCircleIcon />}>\n          app=MyApp\n        </Button>\n      </DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Annotation</DescriptionListTerm>\n      <DescriptionListDescription>2 Annotations</DescriptionListDescription>\n    </DescriptionListGroup>\n  </DescriptionList>\n);\n","title":"Default 3 col on lg","lang":"ts"}}>
      
    </Example>,
  'Horizontal': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Button,\n  DescriptionList,\n  DescriptionListTerm,\n  DescriptionListGroup,\n  DescriptionListDescription\n} from '@patternfly/react-core';\nimport PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';\n\nexport const DescriptionListHorizontal: React.FunctionComponent = () => (\n  <DescriptionList isHorizontal>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Name</DescriptionListTerm>\n      <DescriptionListDescription>Example</DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Namespace</DescriptionListTerm>\n      <DescriptionListDescription>\n        <a href=\"#\">mary-test</a>\n      </DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Labels</DescriptionListTerm>\n      <DescriptionListDescription>example</DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Pod selector</DescriptionListTerm>\n      <DescriptionListDescription>\n        <Button variant=\"link\" isInline icon={<PlusCircleIcon />}>\n          app=MyApp\n        </Button>\n      </DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Annotation</DescriptionListTerm>\n      <DescriptionListDescription>2 Annotations</DescriptionListDescription>\n    </DescriptionListGroup>\n  </DescriptionList>\n);\n","title":"Horizontal","lang":"ts"}}>
      
    </Example>,
  'Horizontal using custom term width modifier': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Button,\n  DescriptionList,\n  DescriptionListTerm,\n  DescriptionListGroup,\n  DescriptionListDescription\n} from '@patternfly/react-core';\nimport PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';\n\nexport const DescriptionListHorizontalCustomTermWidth: React.FunctionComponent = () => (\n  <DescriptionList\n    isHorizontal\n    horizontalTermWidthModifier={{\n      default: '12ch',\n      sm: '15ch',\n      md: '20ch',\n      lg: '28ch',\n      xl: '30ch',\n      '2xl': '35ch'\n    }}\n  >\n    <DescriptionListGroup>\n      <DescriptionListTerm>Name longer than the default term width</DescriptionListTerm>\n      <DescriptionListDescription>Example</DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Namespace</DescriptionListTerm>\n      <DescriptionListDescription>\n        <a href=\"#\">mary-test</a>\n      </DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Labels</DescriptionListTerm>\n      <DescriptionListDescription>example</DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Pod selector</DescriptionListTerm>\n      <DescriptionListDescription>\n        <Button variant=\"link\" isInline icon={<PlusCircleIcon />}>\n          app=MyApp\n        </Button>\n      </DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Annotation</DescriptionListTerm>\n      <DescriptionListDescription>2 Annotations</DescriptionListDescription>\n    </DescriptionListGroup>\n  </DescriptionList>\n);\n","title":"Horizontal using custom term width modifier","lang":"ts"}}>
      
    </Example>,
  'Horizontal 2 col': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Button,\n  DescriptionList,\n  DescriptionListTerm,\n  DescriptionListGroup,\n  DescriptionListDescription\n} from '@patternfly/react-core';\nimport PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';\n\nexport const DescriptionListHorizontalTwoCol: React.FunctionComponent = () => (\n  <DescriptionList isHorizontal columnModifier={{ default: '2Col' }}>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Name</DescriptionListTerm>\n      <DescriptionListDescription>Example</DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Namespace</DescriptionListTerm>\n      <DescriptionListDescription>\n        <a href=\"#\">mary-test</a>\n      </DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Labels</DescriptionListTerm>\n      <DescriptionListDescription>example</DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Pod selector</DescriptionListTerm>\n      <DescriptionListDescription>\n        <Button variant=\"link\" isInline icon={<PlusCircleIcon />}>\n          app=MyApp\n        </Button>\n      </DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Annotation</DescriptionListTerm>\n      <DescriptionListDescription>2 Annotations</DescriptionListDescription>\n    </DescriptionListGroup>\n  </DescriptionList>\n);\n","title":"Horizontal 2 col","lang":"ts"}}>
      
    </Example>,
  'Horizontal 3 col on lg': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Button,\n  DescriptionList,\n  DescriptionListTerm,\n  DescriptionListGroup,\n  DescriptionListDescription\n} from '@patternfly/react-core';\nimport PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';\n\nexport const DescriptionListHorizontalThreeColLg: React.FunctionComponent = () => (\n  <DescriptionList isHorizontal columnModifier={{ lg: '3Col' }}>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Name</DescriptionListTerm>\n      <DescriptionListDescription>Example</DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Namespace</DescriptionListTerm>\n      <DescriptionListDescription>\n        <a href=\"#\">mary-test</a>\n      </DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Labels</DescriptionListTerm>\n      <DescriptionListDescription>example</DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Pod selector</DescriptionListTerm>\n      <DescriptionListDescription>\n        <Button variant=\"link\" isInline icon={<PlusCircleIcon />}>\n          app=MyApp\n        </Button>\n      </DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Annotation</DescriptionListTerm>\n      <DescriptionListDescription>2 Annotations</DescriptionListDescription>\n    </DescriptionListGroup>\n  </DescriptionList>\n);\n","title":"Horizontal 3 col on lg","lang":"ts"}}>
      
    </Example>,
  'Compact': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Button,\n  DescriptionList,\n  DescriptionListTerm,\n  DescriptionListGroup,\n  DescriptionListDescription\n} from '@patternfly/react-core';\nimport PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';\n\nexport const DescriptionListCompact: React.FunctionComponent = () => (\n  <DescriptionList isCompact>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Name</DescriptionListTerm>\n      <DescriptionListDescription>Example</DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Namespace</DescriptionListTerm>\n      <DescriptionListDescription>\n        <a href=\"#\">mary-test</a>\n      </DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Labels</DescriptionListTerm>\n      <DescriptionListDescription>example</DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Pod selector</DescriptionListTerm>\n      <DescriptionListDescription>\n        <Button variant=\"link\" isInline icon={<PlusCircleIcon />}>\n          app=MyApp\n        </Button>\n      </DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Annotation</DescriptionListTerm>\n      <DescriptionListDescription>2 Annotations</DescriptionListDescription>\n    </DescriptionListGroup>\n  </DescriptionList>\n);\n","title":"Compact","lang":"ts"}}>
      
    </Example>,
  'Compact horizontal': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Button,\n  DescriptionList,\n  DescriptionListTerm,\n  DescriptionListGroup,\n  DescriptionListDescription\n} from '@patternfly/react-core';\nimport PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';\n\nexport const DescriptionListCompactHorizontal: React.FunctionComponent = () => (\n  <DescriptionList isCompact isHorizontal>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Name</DescriptionListTerm>\n      <DescriptionListDescription>Example</DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Namespace</DescriptionListTerm>\n      <DescriptionListDescription>\n        <a href=\"#\">mary-test</a>\n      </DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Labels</DescriptionListTerm>\n      <DescriptionListDescription>example</DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Pod selector</DescriptionListTerm>\n      <DescriptionListDescription>\n        <Button variant=\"link\" isInline icon={<PlusCircleIcon />}>\n          app=MyApp\n        </Button>\n      </DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Annotation</DescriptionListTerm>\n      <DescriptionListDescription>2 Annotations</DescriptionListDescription>\n    </DescriptionListGroup>\n  </DescriptionList>\n);\n","title":"Compact horizontal","lang":"ts"}}>
      
    </Example>,
  'Fluid horizontal': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Button,\n  DescriptionList,\n  DescriptionListTerm,\n  DescriptionListGroup,\n  DescriptionListDescription\n} from '@patternfly/react-core';\nimport PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';\n\nexport const DescriptionListFluidHorizontal: React.FunctionComponent = () => (\n  <DescriptionList isHorizontal isFluid>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Name</DescriptionListTerm>\n      <DescriptionListDescription>Example</DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Namespace</DescriptionListTerm>\n      <DescriptionListDescription>\n        <a href=\"#\">mary-test</a>\n      </DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Labels</DescriptionListTerm>\n      <DescriptionListDescription>example</DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Pod selector</DescriptionListTerm>\n      <DescriptionListDescription>\n        <Button variant=\"link\" isInline icon={<PlusCircleIcon />}>\n          app=MyApp\n        </Button>\n      </DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Annotation</DescriptionListTerm>\n      <DescriptionListDescription>2 Annotations</DescriptionListDescription>\n    </DescriptionListGroup>\n  </DescriptionList>\n);\n","title":"Fluid horizontal","lang":"ts"}}>
      
    </Example>,
  'Column fill': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Button,\n  DescriptionList,\n  DescriptionListTerm,\n  DescriptionListGroup,\n  DescriptionListDescription\n} from '@patternfly/react-core';\nimport PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';\n\nexport const DescriptionListColumnFill: React.FunctionComponent = () => (\n  <DescriptionList isFillColumns columnModifier={{ default: '2Col', lg: '3Col' }}>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Name</DescriptionListTerm>\n      <DescriptionListDescription>\n        This is a long description that should wrap to multiple lines in a multi-column layout.\n      </DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Namespace</DescriptionListTerm>\n      <DescriptionListDescription>\n        <a href=\"#\">mary-test</a>\n      </DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Labels</DescriptionListTerm>\n      <DescriptionListDescription>example</DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Pod selector</DescriptionListTerm>\n      <DescriptionListDescription>\n        <Button variant=\"link\" isInline icon={<PlusCircleIcon />}>\n          app=MyApp\n        </Button>\n      </DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Annotation</DescriptionListTerm>\n      <DescriptionListDescription>2 Annotations</DescriptionListDescription>\n    </DescriptionListGroup>\n  </DescriptionList>\n);\n","title":"Column fill","lang":"ts"}}>
      
    </Example>,
  'Default responsive columns': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Button,\n  DescriptionList,\n  DescriptionListTerm,\n  DescriptionListGroup,\n  DescriptionListDescription\n} from '@patternfly/react-core';\nimport PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';\n\nexport const DescriptionListDefaultResponsiveColumns: React.FunctionComponent = () => (\n  <DescriptionList columnModifier={{ lg: '2Col', xl: '3Col' }}>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Name</DescriptionListTerm>\n      <DescriptionListDescription>Example</DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Namespace</DescriptionListTerm>\n      <DescriptionListDescription>\n        <a href=\"#\">mary-test</a>\n      </DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Labels</DescriptionListTerm>\n      <DescriptionListDescription>example</DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Pod selector</DescriptionListTerm>\n      <DescriptionListDescription>\n        <Button variant=\"link\" isInline icon={<PlusCircleIcon />}>\n          app=MyApp\n        </Button>\n      </DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Annotation</DescriptionListTerm>\n      <DescriptionListDescription>2 Annotations</DescriptionListDescription>\n    </DescriptionListGroup>\n  </DescriptionList>\n);\n","title":"Default responsive columns","lang":"ts"}}>
      
    </Example>,
  'Horizontal responsive columns': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Button,\n  DescriptionList,\n  DescriptionListTerm,\n  DescriptionListGroup,\n  DescriptionListDescription\n} from '@patternfly/react-core';\nimport PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';\n\nexport const DescriptionListHorizontalResponsiveColumns: React.FunctionComponent = () => (\n  <DescriptionList isHorizontal columnModifier={{ lg: '2Col', xl: '3Col' }}>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Name</DescriptionListTerm>\n      <DescriptionListDescription>Example</DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Namespace</DescriptionListTerm>\n      <DescriptionListDescription>\n        <a href=\"#\">mary-test</a>\n      </DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Labels</DescriptionListTerm>\n      <DescriptionListDescription>example</DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Pod selector</DescriptionListTerm>\n      <DescriptionListDescription>\n        <Button variant=\"link\" isInline icon={<PlusCircleIcon />}>\n          app=MyApp\n        </Button>\n      </DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Annotation</DescriptionListTerm>\n      <DescriptionListDescription>2 Annotations</DescriptionListDescription>\n    </DescriptionListGroup>\n  </DescriptionList>\n);\n","title":"Horizontal responsive columns","lang":"ts"}}>
      
    </Example>,
  'Responsive horizontal, vertical group layout': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Button,\n  DescriptionList,\n  DescriptionListTerm,\n  DescriptionListGroup,\n  DescriptionListDescription\n} from '@patternfly/react-core';\nimport PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';\n\nexport const DescriptionListResponsiveHoriVertGroup: React.FunctionComponent = () => (\n  <DescriptionList\n    isHorizontal\n    orientation={{\n      md: 'vertical',\n      lg: 'horizontal',\n      xl: 'vertical',\n      '2xl': 'horizontal'\n    }}\n  >\n    <DescriptionListGroup>\n      <DescriptionListTerm>Name</DescriptionListTerm>\n      <DescriptionListDescription>Example</DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Namespace</DescriptionListTerm>\n      <DescriptionListDescription>\n        <a href=\"#\">mary-test</a>\n      </DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Labels</DescriptionListTerm>\n      <DescriptionListDescription>example</DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Pod selector</DescriptionListTerm>\n      <DescriptionListDescription>\n        <Button variant=\"link\" isInline icon={<PlusCircleIcon />}>\n          app=MyApp\n        </Button>\n      </DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Annotation</DescriptionListTerm>\n      <DescriptionListDescription>2 Annotations</DescriptionListDescription>\n    </DescriptionListGroup>\n  </DescriptionList>\n);\n","title":"Responsive horizontal, vertical group layout","lang":"ts"}}>
      
    </Example>,
  'Default auto column width': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Button,\n  DescriptionList,\n  DescriptionListTerm,\n  DescriptionListGroup,\n  DescriptionListDescription\n} from '@patternfly/react-core';\nimport PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';\n\nexport const DescriptionListDefaultAutoColumn: React.FunctionComponent = () => (\n  <DescriptionList isAutoColumnWidths columnModifier={{ default: '3Col' }}>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Name</DescriptionListTerm>\n      <DescriptionListDescription>Example</DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Namespace</DescriptionListTerm>\n      <DescriptionListDescription>\n        <a href=\"#\">mary-test</a>\n      </DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Labels</DescriptionListTerm>\n      <DescriptionListDescription>example</DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Pod selector</DescriptionListTerm>\n      <DescriptionListDescription>\n        <Button variant=\"link\" isInline icon={<PlusCircleIcon />}>\n          app=MyApp\n        </Button>\n      </DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Annotation</DescriptionListTerm>\n      <DescriptionListDescription>2 Annotations</DescriptionListDescription>\n    </DescriptionListGroup>\n  </DescriptionList>\n);\n","title":"Default auto column width","lang":"ts"}}>
      
    </Example>,
  'Horizontal auto column width': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Button,\n  DescriptionList,\n  DescriptionListTerm,\n  DescriptionListGroup,\n  DescriptionListDescription\n} from '@patternfly/react-core';\nimport PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';\n\nexport const DescriptionListHorizontalAutoColumn: React.FunctionComponent = () => (\n  <DescriptionList isHorizontal isAutoColumnWidths columnModifier={{ lg: '2Col' }}>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Name</DescriptionListTerm>\n      <DescriptionListDescription>Example</DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Namespace</DescriptionListTerm>\n      <DescriptionListDescription>\n        <a href=\"#\">mary-test</a>\n      </DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Labels</DescriptionListTerm>\n      <DescriptionListDescription>example</DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Pod selector</DescriptionListTerm>\n      <DescriptionListDescription>\n        <Button variant=\"link\" isInline icon={<PlusCircleIcon />}>\n          app=MyApp\n        </Button>\n      </DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Annotation</DescriptionListTerm>\n      <DescriptionListDescription>2 Annotations</DescriptionListDescription>\n    </DescriptionListGroup>\n  </DescriptionList>\n);\n","title":"Horizontal auto column width","lang":"ts"}}>
      
    </Example>,
  'Default inline grid': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Button,\n  DescriptionList,\n  DescriptionListTerm,\n  DescriptionListGroup,\n  DescriptionListDescription\n} from '@patternfly/react-core';\nimport PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';\n\nexport const DescriptionListDefaultInlineGrid: React.FunctionComponent = () => (\n  <DescriptionList columnModifier={{ default: '3Col' }} isInlineGrid>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Name</DescriptionListTerm>\n      <DescriptionListDescription>Example</DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Namespace</DescriptionListTerm>\n      <DescriptionListDescription>\n        <a href=\"#\">mary-test</a>\n      </DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Labels</DescriptionListTerm>\n      <DescriptionListDescription>example</DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Pod selector</DescriptionListTerm>\n      <DescriptionListDescription>\n        <Button variant=\"link\" isInline icon={<PlusCircleIcon />}>\n          app=MyApp\n        </Button>\n      </DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Annotation</DescriptionListTerm>\n      <DescriptionListDescription>2 Annotations</DescriptionListDescription>\n    </DescriptionListGroup>\n  </DescriptionList>\n);\n","title":"Default inline grid","lang":"ts"}}>
      
    </Example>,
  'Auto-fit basic': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Button,\n  DescriptionList,\n  DescriptionListTerm,\n  DescriptionListGroup,\n  DescriptionListDescription\n} from '@patternfly/react-core';\nimport PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';\n\nexport const DescriptionListAutoFitBasic: React.FunctionComponent = () => (\n  <DescriptionList isAutoFit>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Name</DescriptionListTerm>\n      <DescriptionListDescription>example</DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Namespace</DescriptionListTerm>\n      <DescriptionListDescription>\n        <a href=\"#\">mary-test</a>\n      </DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Labels</DescriptionListTerm>\n      <DescriptionListDescription>example</DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Pod selector</DescriptionListTerm>\n      <DescriptionListDescription>\n        <Button variant=\"link\" isInline icon={<PlusCircleIcon />}>\n          app=MyApp\n        </Button>\n      </DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Annotation</DescriptionListTerm>\n      <DescriptionListDescription>2 Annotations</DescriptionListDescription>\n    </DescriptionListGroup>\n  </DescriptionList>\n);\n","title":"Auto-fit basic","lang":"ts"}}>
      
    </Example>,
  'Auto-fit, min width modified grid template columns': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Button,\n  DescriptionList,\n  DescriptionListTerm,\n  DescriptionListGroup,\n  DescriptionListDescription\n} from '@patternfly/react-core';\nimport PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';\n\nexport const DescriptionListAutoFitMinWidthModified: React.FunctionComponent = () => (\n  <DescriptionList isAutoFit autoFitMinModifier={{ default: '200px' }}>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Name</DescriptionListTerm>\n      <DescriptionListDescription>example</DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Namespace</DescriptionListTerm>\n      <DescriptionListDescription>\n        <a href=\"#\">mary-test</a>\n      </DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Labels</DescriptionListTerm>\n      <DescriptionListDescription>example</DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Pod selector</DescriptionListTerm>\n      <DescriptionListDescription>\n        <Button variant=\"link\" isInline icon={<PlusCircleIcon />}>\n          app=MyApp\n        </Button>\n      </DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Annotation</DescriptionListTerm>\n      <DescriptionListDescription>2 Annotations</DescriptionListDescription>\n    </DescriptionListGroup>\n  </DescriptionList>\n);\n","title":"Auto-fit, min width modified grid template columns","lang":"ts"}}>
      
    </Example>,
  'Auto-fit, min width modified, responsive grid template columns': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Button,\n  DescriptionList,\n  DescriptionListTerm,\n  DescriptionListGroup,\n  DescriptionListDescription\n} from '@patternfly/react-core';\nimport PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';\n\nexport const DescriptionListAutoFitMinWidthResponsive: React.FunctionComponent = () => (\n  <DescriptionList isAutoFit autoFitMinModifier={{ md: '100px', lg: '150px', xl: '200px', '2xl': '300px' }}>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Name</DescriptionListTerm>\n      <DescriptionListDescription>example</DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Namespace</DescriptionListTerm>\n      <DescriptionListDescription>\n        <a href=\"#\">mary-test</a>\n      </DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Labels</DescriptionListTerm>\n      <DescriptionListDescription>example</DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Pod selector</DescriptionListTerm>\n      <DescriptionListDescription>\n        <Button variant=\"link\" isInline icon={<PlusCircleIcon />}>\n          app=MyApp\n        </Button>\n      </DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm>Annotation</DescriptionListTerm>\n      <DescriptionListDescription>2 Annotations</DescriptionListDescription>\n    </DescriptionListGroup>\n  </DescriptionList>\n);\n","title":"Auto-fit, min width modified, responsive grid template columns","lang":"ts"}}>
      
    </Example>,
  'Icons on terms': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Button,\n  DescriptionList,\n  DescriptionListTerm,\n  DescriptionListGroup,\n  DescriptionListDescription\n} from '@patternfly/react-core';\nimport PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';\nimport CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';\nimport BookIcon from '@patternfly/react-icons/dist/esm/icons/book-icon';\nimport KeyIcon from '@patternfly/react-icons/dist/esm/icons/key-icon';\nimport GlobeIcon from '@patternfly/react-icons/dist/esm/icons/globe-icon';\nimport FlagIcon from '@patternfly/react-icons/dist/esm/icons/flag-icon';\n\nexport const DescriptionListIconsOnTerms: React.FunctionComponent = () => (\n  <DescriptionList>\n    <DescriptionListGroup>\n      <DescriptionListTerm icon={<CubeIcon />}>Name</DescriptionListTerm>\n      <DescriptionListDescription>Example</DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm icon={<BookIcon />}>Namespace</DescriptionListTerm>\n      <DescriptionListDescription>\n        <a href=\"#\">mary-test</a>\n      </DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm icon={<KeyIcon />}>Labels</DescriptionListTerm>\n      <DescriptionListDescription>example</DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm icon={<GlobeIcon />}>Pod selector</DescriptionListTerm>\n      <DescriptionListDescription>\n        <Button variant=\"link\" isInline icon={<PlusCircleIcon />}>\n          app=MyApp\n        </Button>\n      </DescriptionListDescription>\n    </DescriptionListGroup>\n    <DescriptionListGroup>\n      <DescriptionListTerm icon={<FlagIcon />}>Annotation</DescriptionListTerm>\n      <DescriptionListDescription>2 Annotations</DescriptionListDescription>\n    </DescriptionListGroup>\n  </DescriptionList>\n);\n","title":"Icons on terms","lang":"ts"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["Term help text"])}
    {React.createElement(pageData.examples["Default 2 col"])}
    {React.createElement(pageData.examples["Default 3 col on lg"])}
    {React.createElement(pageData.examples["Horizontal"])}
    {React.createElement(pageData.examples["Horizontal using custom term width modifier"])}
    {React.createElement(pageData.examples["Horizontal 2 col"])}
    {React.createElement(pageData.examples["Horizontal 3 col on lg"])}
    {React.createElement(pageData.examples["Compact"])}
    {React.createElement(pageData.examples["Compact horizontal"])}
    {React.createElement(pageData.examples["Fluid horizontal"])}
    {React.createElement(pageData.examples["Column fill"])}
    <AutoLinkHeader {...{"id":"responsive-column-definitions","size":"h2","className":"ws-title ws-h2"}}>
      {`Responsive column definitions`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Default responsive columns"])}
    {React.createElement(pageData.examples["Horizontal responsive columns"])}
    {React.createElement(pageData.examples["Responsive horizontal, vertical group layout"])}
    <AutoLinkHeader {...{"id":"auto-column-width","size":"h2","className":"ws-title ws-h2"}}>
      {`Auto-column-width`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Default auto column width"])}
    {React.createElement(pageData.examples["Horizontal auto column width"])}
    <AutoLinkHeader {...{"id":"inline-grid","size":"h2","className":"ws-title ws-h2"}}>
      {`Inline grid`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Default inline grid"])}
    <AutoLinkHeader {...{"id":"auto-fit","size":"h2","className":"ws-title ws-h2"}}>
      {`Auto fit`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Auto-fit basic"])}
    {React.createElement(pageData.examples["Auto-fit, min width modified grid template columns"])}
    {React.createElement(pageData.examples["Auto-fit, min width modified, responsive grid template columns"])}
    <AutoLinkHeader {...{"id":"with-icons","size":"h2","className":"ws-title ws-h2"}}>
      {`With icons`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Icons on terms"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsDescriptionListReactDocs';
Component.pageData = pageData;

export default Component;
