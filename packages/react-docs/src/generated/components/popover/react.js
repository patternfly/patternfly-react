import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';
import InfoCircleIcon from '@patternfly/react-icons/dist/esm/icons/info-circle-icon';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';
import ExclamationTriangleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-triangle-icon';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';
import BullhornIcon from '@patternfly/react-icons/dist/esm/icons/bullhorn-icon';
const pageData = {
  "id": "Popover",
  "section": "components",
  "source": "react",
  "slug": "/components/popover/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/Popover/examples/Popover.md",
  "propComponents": [
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
    "pf-c-popover"
  ],
  "examples": [
    "Basic",
    "Close popover from content (controlled)",
    "Close popover from content (uncontrolled)",
    "Without header/footer/close and no padding",
    "Width auto",
    "Popover react ref",
    "Popover selector ref",
    "Advanced",
    "Popover with icon in the title",
    "Alert popover"
  ]
};
pageData.liveContext = {
  BellIcon,
  InfoCircleIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  ExclamationCircleIcon,
  BullhornIcon
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Popover, PopoverPosition, Button } from '@patternfly/react-core';\n\nconst Basic = () => (\n  <div style={{ margin: '50px' }}>\n    <Popover\n      aria-label=\"Basic popover\"\n      headerContent={<div>Popover header</div>}\n      bodyContent={<div>Popovers are triggered by click rather than hover.</div>}\n      footerContent=\"Popover footer\"\n    >\n      <Button>Toggle popover</Button>\n    </Popover>\n  </div>\n)","title":"Basic","lang":"js"}}>
      
    </Example>,
  'Close popover from content (controlled)': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Popover, PopoverPosition, Button } from '@patternfly/react-core';\n\nPopoverCloseControlled = () => {\n  const [isVisible, setIsVisible] = React.useState(false);\n  return (\n    <div style={{ margin: '50px' }}>\n      <Popover\n        aria-label=\"Popover with button in the body that can close it\"\n        isVisible={isVisible}\n        shouldOpen={() => setIsVisible(true)}\n        shouldClose={() => setIsVisible(false)}\n        headerContent={<div>Popover header</div>}\n        bodyContent={\n          <div>\n            <div>\n              All the content props (headerContent, bodyContent, footerContent) can take a function which the popover\n              component passes the hide function to which can be used to close the popover after some user interaction.\n            </div>\n            <div>\n              <button onClick={() => setIsVisible(false)}>Close popover</button>\n            </div>\n          </div>\n        }\n        footerContent=\"Popover footer\"\n      >\n        <Button>Toggle popover</Button>\n      </Popover>\n    </div>\n  );\n};","title":"Close popover from content (controlled)","lang":"js"}}>
      
    </Example>,
  'Close popover from content (uncontrolled)': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Popover, PopoverPosition, Button } from '@patternfly/react-core';\n\nconst ClosePopoverFromContentuncontrolled = () => (\n  <div style={{ margin: '50px' }}>\n    <Popover\n      aria-label=\"Popover with button in the body that can close it\"\n      headerContent={<div>Popover header</div>}\n      bodyContent={hide => (\n        <div>\n          <div>\n            All the content props (headerContent, bodyContent, footerContent) can take a function which the popover\n            component passes the hide function to which can be used to close the popover after some user interaction.\n          </div>\n          <div>\n            <button onClick={hide}>Close popover</button>\n          </div>\n        </div>\n      )}\n      footerContent=\"Popover footer\"\n    >\n      <Button>Toggle popover</Button>\n    </Popover>\n  </div>\n)","title":"Close popover from content (uncontrolled)","lang":"js"}}>
      
      <p {...{"className":"ws-p"}}>
        {`Note: If you use the isVisible prop, either refer to the example above or if you want to use the hide callback from the content then be sure to keep isVisible in-sync.`}
      </p>
    </Example>,
  'Without header/footer/close and no padding': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Popover, PopoverPosition, Button } from '@patternfly/react-core';\n\nconst WithoutHeaderfootercloseAndNoPadding = () => (\n  <div style={{ margin: '50px' }}>\n    <Popover\n      aria-label=\"Popover with no header, footer, close button, and padding\"\n      hasNoPadding\n      showClose={false}\n      bodyContent={hide => (\n        <div>\n          This popover has no padding and is intended for use with content that has its own spacing and should touch the\n          edges of the popover container.\n        </div>\n      )}\n      withFocusTrap={false /* no focusable content in this example */}\n    >\n      <Button>Toggle popover</Button>\n    </Popover>\n  </div>\n)","title":"Without header/footer/close and no padding","lang":"js"}}>
      
    </Example>,
  'Width auto': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Popover, PopoverPosition, Button } from '@patternfly/react-core';\n\nconst WidthAuto = () => (\n  <div style={{ margin: '50px' }}>\n    <Popover\n      aria-label=\"Popover with auto-width\"\n      hasAutoWidth\n      bodyContent={hide => <div>Removes fixed-width and allows width to be defined by contents</div>}\n    >\n      <Button>Toggle popover</Button>\n    </Popover>\n  </div>\n)","title":"Width auto","lang":"js"}}>
      
    </Example>,
  'Popover react ref': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Popover } from '@patternfly/react-core';\n\nPopoverReactRef = () => {\n  const popoverRef = React.useRef();\n  return (\n    <div style={{ margin: '50px' }}>\n      <button ref={popoverRef}>Popover attached via react ref</button>\n      <Popover\n        aria-label=\"Popover with react reference example\"\n        headerContent={<div>Popover header</div>}\n        bodyContent={\n          <div>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.\n          </div>\n        }\n        footerContent=\"Popover footer\"\n        reference={popoverRef}\n      />\n    </div>\n  );\n};","title":"Popover react ref","lang":"js"}}>
      
    </Example>,
  'Popover selector ref': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Popover } from '@patternfly/react-core';\n\nconst PopoverSelectorRef = () => (\n  <div style={{ margin: '50px' }}>\n    <button id=\"popover-selector\">Popover attached via selector ref</button>\n    <Popover\n      aria-label=\"Popover with selector reference example\"\n      headerContent={<div>Popover header</div>}\n      bodyContent={\n        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.</div>\n      }\n      footerContent=\"Popover footer\"\n      reference={() => document.getElementById('popover-selector')}\n    />\n  </div>\n)","title":"Popover selector ref","lang":"js"}}>
      
    </Example>,
  'Advanced': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Popover, PopoverPosition, Checkbox, Button } from '@patternfly/react-core';\n\nclass AdvancedPopover extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      position: 'auto',\n      show: false,\n      keepInViewChecked: true\n    };\n    this.handleKeepInViewChange = checked => {\n      this.setState({ keepInViewChecked: checked });\n    };\n    this.handleProgrammaticChange = checked => {\n      this.setState({\n        show: checked\n      });\n    };\n    this.shouldClose = () => {\n      console.log('shouldClose');\n      this.setState({ show: false });\n    };\n    this.shouldOpen = () => {\n      console.log('shouldOpen');\n      this.setState({ show: true });\n    };\n  }\n\n  render() {\n    return (\n      <div>\n        <div>\n          <span style={{ paddingRight: '10px' }}>Popover position</span>\n          <select\n            aria-label=\"Popover position\"\n            onChange={event => {\n              this.setState({ position: event.target.value });\n            }}\n          >\n            {Object.values(PopoverPosition).map(position => (\n              <option key={position} value={position}>\n                {position}\n              </option>\n            ))}\n          </select>\n          <Checkbox\n            label=\"Flip popover if the position falls outside the view\"\n            isChecked={this.state.keepInViewChecked}\n            onChange={this.handleKeepInViewChange}\n            aria-label=\"Keep in view\"\n            id=\"check-3\"\n          />\n          <Checkbox\n            label=\"Toggle popover from outside\"\n            isChecked={this.state.show}\n            onChange={this.handleProgrammaticChange}\n            aria-label=\"Toggle popover from outside\"\n            id=\"check-4\"\n          />\n        </div>\n\n        <div style={{ margin: '50px' }}>\n          <Popover\n            aria-label=\"Advanced popover usages example\"\n            position={this.state.position}\n            hideOnOutsideClick={false}\n            isVisible={this.state.show}\n            shouldClose={this.shouldClose}\n            shouldOpen={this.shouldOpen}\n            enableFlip={this.state.keepInViewChecked}\n            appendTo={() => document.body}\n            headerContent={<div>Popover header</div>}\n            bodyContent={\n              <div>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.\n              </div>\n            }\n            footerContent=\"Popover footer\"\n          >\n            <Button>Toggle popover</Button>\n          </Popover>\n        </div>\n      </div>\n    );\n  }\n}","title":"Advanced","lang":"js"}}>
      
    </Example>,
  'Popover with icon in the title': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Popover, Button } from '@patternfly/react-core';\nimport BullhornIcon from '@patternfly/react-icons/dist/esm/icons/bullhorn-icon';\n\nconst PopoverWithIconInTheTitle = () => (\n  <div style={{ margin: '50px' }}>\n    <Popover\n      aria-label=\"Alert popover\"\n      headerContent=\"Popover with icon\"\n      headerIcon={<BullhornIcon />}\n      bodyContent={<div>Popovers are triggered by click rather than hover.</div>}\n      footerContent=\"Popover footer\"\n    >\n      <Button>Toggle popover</Button>\n    </Popover>\n  </div>\n)","title":"Popover with icon in the title","lang":"ts","isBeta":true}}>
      
    </Example>,
  'Alert popover': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Popover, Button } from '@patternfly/react-core';\nimport BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';\nimport InfoCircleIcon from '@patternfly/react-icons/dist/esm/icons/info-circle-icon';\nimport CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';\nimport ExclamationTriangleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-triangle-icon';\nimport ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';\n\nconst AlertPopover = () => {\n  const [alertSeverityVariant, setAlertSeverityVariant] = React.useState('default');\n  const alertIcons = {\n    default: <BellIcon />,\n    info: <InfoCircleIcon />,\n    success: <CheckCircleIcon />,\n    warning: <ExclamationTriangleIcon />,\n    danger: <ExclamationCircleIcon />\n  };\n\n  return (\n    <div>\n      <div>\n        <span style={{ paddingRight: '10px' }}>Alert variant:</span>\n        <select aria-label=\"Popover alert type\" onChange={event => setAlertSeverityVariant(event.target.value)}>\n          <option value=\"default\">default</option>\n          <option value=\"info\">info</option>\n          <option value=\"success\">success</option>\n          <option value=\"warning\">warning</option>\n          <option value=\"danger\">danger</option>\n        </select>\n      </div>\n      <div style={{ margin: '50px' }}>\n        <Popover\n          aria-label=\"Alert popover\"\n          alertSeverityVariant={alertSeverityVariant as 'default' | 'info' | 'warning' | 'success' | 'danger'}\n          headerContent=\"Default popover title\"\n          headerIcon={alertIcons[alertSeverityVariant]}\n          headerComponent=\"h1\"\n          bodyContent={<div>Popovers are triggered by click rather than hover.</div>}\n          footerContent=\"Popover footer\"\n        >\n          <Button>Toggle popover</Button>\n        </Popover>\n      </div>\n    </div>\n  );\n};","title":"Alert popover","lang":"ts","isBeta":true}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["Close popover from content (controlled)"])}
    {React.createElement(pageData.examples["Close popover from content (uncontrolled)"])}
    {React.createElement(pageData.examples["Without header/footer/close and no padding"])}
    {React.createElement(pageData.examples["Width auto"])}
    {React.createElement(pageData.examples["Popover react ref"])}
    {React.createElement(pageData.examples["Popover selector ref"])}
    {React.createElement(pageData.examples["Advanced"])}
    {React.createElement(pageData.examples["Popover with icon in the title"])}
    {React.createElement(pageData.examples["Alert popover"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsPopoverReactDocs';
Component.pageData = pageData;

export default Component;
