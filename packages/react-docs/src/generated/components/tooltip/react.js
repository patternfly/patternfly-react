import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import OutlinedQuestionCircleIcon from '@patternfly/react-icons/dist/esm/icons/outlined-question-circle-icon';
import CopyIcon from '@patternfly/react-icons/dist/esm/icons/copy-icon';
import '../../../../../react-core/src/components/Tooltip/examples/./TooltipExamples.css';
const pageData = {
  "id": "Tooltip",
  "section": "components",
  "source": "react",
  "slug": "/components/tooltip/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/Tooltip/examples/Tooltip.md",
  "propComponents": [
    {
      "name": "Tooltip",
      "description": "",
      "props": [
        {
          "name": "animationDuration",
          "type": "number",
          "description": "CSS fade transition animation duration",
          "defaultValue": "300"
        },
        {
          "name": "appendTo",
          "type": "HTMLElement | ((ref?: HTMLElement) => HTMLElement)",
          "description": "The element to append the tooltip to, defaults to body",
          "defaultValue": "() => document.body"
        },
        {
          "name": "aria",
          "type": "'describedby' | 'labelledby' | 'none'",
          "description": "aria-labelledby or aria-describedby for tooltip.\nThe trigger will be cloned to add the aria attribute, and the corresponding id in the form of 'pf-tooltip-#' is added to the content container.\nIf you don't want that or prefer to add the aria attribute yourself on the trigger, set aria to 'none'.",
          "defaultValue": "'describedby'"
        },
        {
          "name": "aria-live",
          "type": "'off' | 'polite'",
          "description": "Determines whether the tooltip is an aria-live region. If the reference prop is passed in the\ndefault behavior is 'polite' in order to ensure the tooltip contents is announced to\nassistive technologies. Otherwise the default behavior is 'off'.",
          "defaultValue": "reference ? 'polite' : 'off'"
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
          "description": "The reference element to which the Tooltip is relatively placed to.\nIf you cannot wrap the reference with the Tooltip, you can use the reference prop instead.\nUsage: <Tooltip><Button>Reference</Button></Tooltip>"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Tooltip additional class",
          "defaultValue": "''"
        },
        {
          "name": "content",
          "type": "React.ReactNode",
          "description": "Tooltip content",
          "required": true
        },
        {
          "name": "distance",
          "type": "number",
          "description": "Distance of the tooltip to its target, defaults to 15",
          "defaultValue": "15"
        },
        {
          "name": "enableFlip",
          "type": "boolean",
          "description": "If true, tries to keep the tooltip in view by flipping it if necessary",
          "defaultValue": "true"
        },
        {
          "name": "entryDelay",
          "type": "number",
          "description": "Delay in ms before the tooltip appears",
          "defaultValue": "300"
        },
        {
          "name": "exitDelay",
          "type": "number",
          "description": "Delay in ms before the tooltip disappears, Avoid passing in a value of \"0\", as users should\nbe given ample time to move their mouse from the trigger to the tooltip content without the content\nbeing hidden.",
          "defaultValue": "300"
        },
        {
          "name": "flipBehavior",
          "type": "'flip'\n| (\n    | 'top'\n    | 'bottom'\n    | 'left'\n    | 'right'\n    | 'top-start'\n    | 'top-end'\n    | 'bottom-start'\n    | 'bottom-end'\n    | 'left-start'\n    | 'left-end'\n    | 'right-start'\n    | 'right-end'\n  )[]",
          "description": "The desired position to flip the tooltip to if the initial position is not possible.\nBy setting this prop to 'flip' it attempts to flip the tooltip to the opposite side if there is no space.\nYou can also pass an array of positions that determines the flip order. It should contain the initial position\nfollowed by alternative positions if that position is unavailable.\nExample: Initial position is 'top'. Button with tooltip is in the top right corner. 'flipBehavior' is set to\n['top', 'right', 'left']. Since there is no space to the top, it checks if right is available. There's also no\nspace to the right, so it finally shows the tooltip on the left.",
          "defaultValue": "['top', 'right', 'bottom', 'left', 'top', 'right', 'bottom']"
        },
        {
          "name": "id",
          "type": "string",
          "description": "id of the tooltip",
          "defaultValue": "`pf-tooltip-${pfTooltipIdCounter++}`"
        },
        {
          "name": "isAppLauncher",
          "type": "boolean",
          "description": "- no longer used",
          "deprecated": true
        },
        {
          "name": "isContentLeftAligned",
          "type": "boolean",
          "description": "Flag to indicate that the text content is left aligned",
          "defaultValue": "false"
        },
        {
          "name": "isVisible",
          "type": "boolean",
          "description": "value for visibility when trigger is 'manual'",
          "defaultValue": "false"
        },
        {
          "name": "maxWidth",
          "type": "string",
          "description": "Maximum width of the tooltip (default 18.75rem)",
          "defaultValue": "tooltipMaxWidth.value"
        },
        {
          "name": "position",
          "type": "TooltipPosition\n| 'auto'\n| 'top'\n| 'bottom'\n| 'left'\n| 'right'\n| 'top-start'\n| 'top-end'\n| 'bottom-start'\n| 'bottom-end'\n| 'left-start'\n| 'left-end'\n| 'right-start'\n| 'right-end'",
          "description": "Tooltip position. Note: With 'enableFlip' set to true,\nit will change the position if there is not enough space for the starting position.\nThe behavior of where it flips to can be controlled through the flipBehavior prop.\nThe 'auto' position chooses the side with the most space.\nThe 'auto' position requires the 'enableFlip' prop to be true.",
          "defaultValue": "'top'"
        },
        {
          "name": "reference",
          "type": "HTMLElement | (() => HTMLElement) | React.RefObject<any>",
          "description": "The reference element to which the Tooltip is relatively placed to.\nIf you can wrap the reference with the Tooltip, you can use the children prop instead.\nUsage: <Tooltip reference={() => document.getElementById('reference-element')} />"
        },
        {
          "name": "tippyProps",
          "type": "Partial<TippyProps>",
          "description": "- no longer used",
          "deprecated": true
        },
        {
          "name": "trigger",
          "type": "string",
          "description": "Tooltip trigger: click, mouseenter, focus, manual\nSet to manual to trigger tooltip programmatically (through the isVisible prop)",
          "defaultValue": "'mouseenter focus'"
        },
        {
          "name": "zIndex",
          "type": "number",
          "description": "z-index of the tooltip",
          "defaultValue": "9999"
        }
      ]
    }
  ],
  "cssPrefix": [
    "pf-c-tooltip"
  ],
  "examples": [
    "Basic",
    "Tooltip react ref",
    "Tooltip selector ref",
    "On icon with dynamic content",
    "Options"
  ]
};
pageData.liveContext = {
  OutlinedQuestionCircleIcon,
  CopyIcon
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Tooltip } from '@patternfly/react-core';\n\nconst Basic = () => (\n  <div style={{ margin: '100px' }}>\n    <Tooltip\n      content={\n        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.</div>\n      }\n    >\n      <span tabIndex=\"0\" style={{ border: '1px dashed' }}>\n        I have a tooltip!\n      </span>\n    </Tooltip>\n  </div>\n)","title":"Basic","lang":"js"}}>
      
    </Example>,
  'Tooltip react ref': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Tooltip } from '@patternfly/react-core';\n\nTooltipReactRef = () => {\n  const tooltipRef = React.useRef();\n  return (\n    <div style={{ margin: '100px' }}>\n      <button aria-describedby=\"tooltip-ref1\" ref={tooltipRef}>\n        Tooltip attached via react ref\n      </button>\n      <Tooltip\n        id=\"tooltip-ref1\"\n        content={\n          <div>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.\n          </div>\n        }\n        reference={tooltipRef}\n      />\n    </div>\n  );\n};","title":"Tooltip react ref","lang":"js"}}>
      
    </Example>,
  'Tooltip selector ref': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Tooltip } from '@patternfly/react-core';\n\nconst TooltipSelectorRef = () => (\n  <div style={{ margin: '100px' }}>\n    <button aria-describedby=\"tooltip-ref2\" id=\"tooltip-selector\">\n      Tooltip attached via selector ref\n    </button>\n    <Tooltip\n      id=\"tooltip-ref2\"\n      content={\n        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.</div>\n      }\n      reference={() => document.getElementById('tooltip-selector')}\n    />\n  </div>\n)","title":"Tooltip selector ref","lang":"js"}}>
      
    </Example>,
  'On icon with dynamic content': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Tooltip, Button } from '@patternfly/react-core';\nimport CopyIcon from '@patternfly/react-icons/dist/esm/icons/copy-icon';\n\nIconExample = () => {\n  const [showSuccessContent, setShowSuccessContent] = React.useState(false);\n  const copyText = 'Copy to clipboard';\n  const doneCopyText = 'Successfully copied to clipboard!';\n  const [content, setContent] = React.useState(copyText);\n  return (\n    <div style={{ margin: '100px' }}>\n      <Tooltip aria=\"none\" aria-live=\"polite\" content={showSuccessContent ? doneCopyText : copyText}>\n        <Button\n          aria-label=\"Clipboard\"\n          variant=\"plain\"\n          id=\"tt-ref\"\n          onClick={() => setShowSuccessContent(!showSuccessContent)}\n        >\n          <CopyIcon />\n        </Button>\n      </Tooltip>\n    </div>\n  );\n};","title":"On icon with dynamic content","lang":"js"}}>
      
      <p {...{"className":"ws-p"}}>
        {`When the tooltip is used as a wrapper and its content will dynamically update, the `}
        
        <code {...{"className":"ws-code"}}>
          {`aria`}
        </code>
        {` prop should have a value of "none" passed in. This prevents assistive technologies from announcing the tooltip contents more than once. Additionally, the `}
        
        <code {...{"className":"ws-code"}}>
          {`aria-live`}
        </code>
        {` prop should have a value of "polite" passed in, in order for assistive technologies to announce when the tooltip contents gets updated.`}
      </p>
      
      <p {...{"className":"ws-p"}}>
        {`When using a React or selector ref with a tooltip that has dynamic content, the `}
        
        <code {...{"className":"ws-code"}}>
          {`aria`}
        </code>
        {` and `}
        
        <code {...{"className":"ws-code"}}>
          {`aria-live`}
        </code>
        {` props do not need to be manually passed in.`}
      </p>
    </Example>,
  'Options': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Button, Tooltip, Checkbox, Select, SelectOption, TextInput } from '@patternfly/react-core';\n\nOptionsTooltip = () => {\n  const [trigger, setTrigger] = React.useState(['mouseenter', 'focus']);\n  const [isVisible, setIsVisible] = React.useState(true);\n  const [contentLeftAligned, setContentLeftAligned] = React.useState(false);\n  const [enableFlip, setEnableFlip] = React.useState(true);\n  const [position, setPosition] = React.useState('top');\n  const [positionSelectOpen, setPositionSelectOpen] = React.useState(false);\n  const [flipSelectOpen, setFlipSelectOpen] = React.useState(false);\n  const [flipBehavior, setFlipBehavior] = React.useState('flip');\n  const [entryDelayInput, setEntryDelayInput] = React.useState(0);\n  const [exitDelayInput, setExitDelayInput] = React.useState(0);\n  const [animationDuration, setAnimationDuration] = React.useState(300);\n  const tipBoxRef = React.useRef(null);\n\n  const scrollToRef = ref => {\n    if (ref && ref.current) {\n      ref.current.scrollTop = 400;\n      ref.current.scrollLeft = 300;\n    }\n  };\n\n  React.useEffect(() => {\n    scrollToRef(tipBoxRef);\n  }, []);\n\n  return (\n    <>\n      <div>\n        <div style={{ border: '1px solid' }}>\n          <Checkbox\n            label=\"trigger: mouseenter\"\n            isChecked={trigger.includes('mouseenter')}\n            onChange={checked => {\n              let updatedTrigger;\n              checked && (updatedTrigger = trigger.concat('mouseenter'));\n              !checked && (updatedTrigger = trigger.filter(t => t !== 'mouseenter'));\n              setIsVisible(false);\n              setTrigger(updatedTrigger);\n            }}\n            aria-label=\"trigger: mouseenter\"\n            id=\"trigger_mouseenter\"\n          />\n          <Checkbox\n            label=\"trigger: focus\"\n            isChecked={trigger.includes('focus')}\n            onChange={checked => {\n              let updatedTrigger;\n              checked && (updatedTrigger = trigger.concat('focus'));\n              !checked && (updatedTrigger = trigger.filter(t => t !== 'focus'));\n              setIsVisible(false);\n              setTrigger(updatedTrigger);\n            }}\n            aria-label=\"trigger: focus\"\n            id=\"trigger_focus\"\n          />\n          <Checkbox\n            label=\"trigger: click\"\n            isChecked={trigger.includes('click')}\n            onChange={checked => {\n              let updatedTrigger;\n              checked && (updatedTrigger = trigger.concat('click'));\n              !checked && (updatedTrigger = trigger.filter(t => t !== 'click'));\n              setIsVisible(false);\n              setTimeout(() => setTrigger(updatedTrigger));\n            }}\n            aria-label=\"trigger: click\"\n            id=\"trigger_click\"\n          />\n          <Checkbox\n            label=\"trigger: manual\"\n            isChecked={trigger.includes('manual')}\n            onChange={checked => {\n              let updatedTrigger;\n              checked && (updatedTrigger = trigger.concat('manual'));\n              !checked && (updatedTrigger = trigger.filter(t => t !== 'manual'));\n              setIsVisible(false);\n              setTrigger(updatedTrigger);\n            }}\n            aria-label=\"trigger: manual\"\n            id=\"trigger_manual\"\n          />\n        </div>\n        <div style={{ border: '1px solid' }}>\n          <Checkbox\n            label=\"content left-aligned\"\n            isChecked={contentLeftAligned}\n            onChange={checked => setContentLeftAligned(checked)}\n            aria-label=\"content left-aligned\"\n            id=\"content_left_aligned\"\n          />\n        </div>\n        <div style={{ border: '1px solid' }}>\n          <Checkbox\n            label=\"enableFlip\"\n            isChecked={enableFlip}\n            onChange={checked => setEnableFlip(checked)}\n            aria-label=\"enableFlip\"\n            id=\"enable_flip\"\n          />\n        </div>\n        <div style={{ border: '1px solid' }}>\n          position (will flip if enableFlip is true). The 'auto' position requires enableFlip to be set to true.\n          <Select\n            onToggle={() => setPositionSelectOpen(!positionSelectOpen)}\n            onSelect={(event, selection) => {\n              setPosition(selection);\n              setPositionSelectOpen(false);\n            }}\n            isOpen={positionSelectOpen}\n            selections={position}\n            menuAppendTo={() => document.body}\n          >\n            <SelectOption value=\"auto\" />\n            <SelectOption value=\"top\" />\n            <SelectOption value=\"bottom\" />\n            <SelectOption value=\"left\" />\n            <SelectOption value=\"right\" />\n            <SelectOption value=\"top-start\" />\n            <SelectOption value=\"top-end\" />\n            <SelectOption value=\"bottom-start\" />\n            <SelectOption value=\"bottom-end\" />\n            <SelectOption value=\"left-start\" />\n            <SelectOption value=\"left-end\" />\n            <SelectOption value=\"right-start\" />\n            <SelectOption value=\"right-end\" />\n          </Select>\n        </div>\n        <div style={{ border: '1px solid' }}>\n          <Checkbox\n            label=\"isVisible (also set trigger to only manual to programmatically control it)\"\n            isChecked={isVisible}\n            onChange={checked => setIsVisible(checked)}\n            aria-label=\"isVisible\"\n            id=\"is_visible\"\n          />\n        </div>\n        <div style={{ border: '1px solid' }}>\n          Entry delay (ms){' '}\n          <TextInput\n            value={entryDelayInput}\n            type=\"number\"\n            onChange={val => setEntryDelayInput(val)}\n            aria-label=\"entry delay\"\n          />\n          Exit delay (ms) <TextInput\n            value={exitDelayInput}\n            type=\"number\"\n            onChange={val => setExitDelayInput(val)}\n            aria-label=\"exit delay\"\n          />\n          Animation duration (ms){' '}\n          <TextInput\n            value={animationDuration}\n            type=\"number\"\n            onChange={val => setAnimationDuration(val)}\n            aria-label=\"animation duration\"\n          />\n        </div>\n        <div style={{ border: '1px solid' }}>\n          flip behavior examples (enableFlip has to be true). \"flip\" will try to flip the tooltip to the opposite of the\n          starting position. The second option ensures that there are 3 escape positions for every possible starting\n          position (default). This setting is ignored if position prop is set to 'auto'.\n          <Select\n            onToggle={() => setFlipSelectOpen(!flipSelectOpen)}\n            onSelect={(event, selection) => {\n              console.log(selection);\n              setFlipBehavior(selection);\n              setFlipSelectOpen(false);\n            }}\n            isOpen={flipSelectOpen}\n            selections={flipBehavior}\n            menuAppendTo={() => document.body}\n          >\n            <SelectOption value=\"flip\" />\n            <SelectOption value=\"clockwise\">['top', 'right', 'bottom', 'left', 'top', 'right', 'bottom']</SelectOption>\n          </Select>\n        </div>\n      </div>\n      <div id=\"tooltip-boundary\" className=\"tooltip-box\" ref={tipBoxRef}>\n        <Tooltip\n          content={\n            <div>\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.\n            </div>\n          }\n          trigger={trigger.join(' ')}\n          enableFlip={enableFlip}\n          flipBehavior={flipBehavior === 'flip' ? 'flip' : ['top', 'right', 'bottom', 'left', 'top', 'right', 'bottom']}\n          position={position}\n          isVisible={isVisible}\n          entryDelay={entryDelayInput}\n          exitDelay={exitDelayInput}\n          animationDuration={animationDuration}\n          isContentLeftAligned={contentLeftAligned}\n          appendTo={() => document.getElementById('tooltip-boundary')}\n        >\n          <Button className=\"tooltip-button\">Tooltip</Button>\n        </Tooltip>\n      </div>\n    </>\n  );\n};","title":"Options","lang":"js"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["Tooltip react ref"])}
    {React.createElement(pageData.examples["Tooltip selector ref"])}
    {React.createElement(pageData.examples["On icon with dynamic content"])}
    {React.createElement(pageData.examples["Options"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsTooltipReactDocs';
Component.pageData = pageData;

export default Component;
