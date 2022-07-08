import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import PlayIcon from '@patternfly/react-icons/dist/esm/icons/play-icon';
const pageData = {
  "id": "Clipboard copy",
  "section": "components",
  "source": "react",
  "slug": "/components/clipboard-copy/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/ClipboardCopy/examples/ClipboardCopy.md",
  "propComponents": [
    {
      "name": "ClipboardCopy",
      "description": "",
      "props": [
        {
          "name": "additionalActions",
          "type": "React.ReactNode",
          "description": "Additional actions for inline clipboard copy. Should be wrapped with ClipboardCopyAction.",
          "defaultValue": "null"
        },
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "The text which is copied.",
          "required": true
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the clipboard copy container."
        },
        {
          "name": "clickTip",
          "type": "string",
          "description": "Tooltip message to display when clicking the copy button",
          "defaultValue": "'Successfully copied to clipboard!'"
        },
        {
          "name": "entryDelay",
          "type": "number",
          "description": "Delay in ms before the tooltip appears.",
          "defaultValue": "300"
        },
        {
          "name": "exitDelay",
          "type": "number",
          "description": "Delay in ms before the tooltip disappears.",
          "defaultValue": "1600"
        },
        {
          "name": "hoverTip",
          "type": "string",
          "description": "Tooltip message to display when hover the copy button",
          "defaultValue": "'Copy to clipboard'"
        },
        {
          "name": "isBlock",
          "type": "boolean",
          "description": "Flag to determine if inline clipboard copy should be block styling"
        },
        {
          "name": "isCode",
          "type": "boolean",
          "description": "Flag to determine if clipboard copy content includes code",
          "defaultValue": "false"
        },
        {
          "name": "isExpanded",
          "type": "boolean",
          "description": "Flag to determine if clipboard copy is in the expanded state initially",
          "defaultValue": "false"
        },
        {
          "name": "isReadOnly",
          "type": "boolean",
          "description": "Flag to show if the input is read only.",
          "defaultValue": "false"
        },
        {
          "name": "maxWidth",
          "type": "string",
          "description": "Maximum width of the tooltip (default 150px).",
          "defaultValue": "'150px'"
        },
        {
          "name": "onChange",
          "type": "(text?: string | number) => void",
          "description": "A function that is triggered on changing the text.",
          "defaultValue": "(): any => undefined"
        },
        {
          "name": "onCopy",
          "type": "(event: React.ClipboardEvent<HTMLDivElement>, text?: React.ReactNode) => void",
          "description": "A function that is triggered on clicking the copy button.",
          "defaultValue": "(event: React.ClipboardEvent<HTMLDivElement>, text?: React.ReactNode) => {\n  const clipboard = event.currentTarget.parentElement;\n  const el = document.createElement('textarea');\n  el.value = text.toString();\n  clipboard.appendChild(el);\n  el.select();\n  document.execCommand('copy');\n  clipboard.removeChild(el);\n}"
        },
        {
          "name": "position",
          "type": "PopoverPosition\n| TooltipPosition\n| 'auto'\n| 'top'\n| 'bottom'\n| 'left'\n| 'right'\n| 'top-start'\n| 'top-end'\n| 'bottom-start'\n| 'bottom-end'\n| 'left-start'\n| 'left-end'\n| 'right-start'\n| 'right-end'",
          "description": "Copy button popover position.",
          "defaultValue": "PopoverPosition.top"
        },
        {
          "name": "switchDelay",
          "type": "number",
          "description": "Delay in ms before the tooltip message switch to hover tip.",
          "defaultValue": "2000"
        },
        {
          "name": "textAriaLabel",
          "type": "string",
          "description": "Aria-label to use on the TextInput.",
          "defaultValue": "'Copyable input'"
        },
        {
          "name": "toggleAriaLabel",
          "type": "string",
          "description": "Aria-label to use on the ClipboardCopyToggle.",
          "defaultValue": "'Show content'"
        },
        {
          "name": "variant",
          "type": "typeof ClipboardCopyVariant | 'inline' | 'expansion' | 'inline-compact'",
          "description": "Adds Clipboard Copy variant styles.",
          "defaultValue": "'inline'"
        }
      ]
    },
    {
      "name": "ClipboardCopyButton",
      "description": "",
      "props": [
        {
          "name": "aria-label",
          "type": "string",
          "description": "Aria-label for the copy button",
          "defaultValue": "'Copyable input'"
        },
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content of the copy button",
          "required": true
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the copy button"
        },
        {
          "name": "entryDelay",
          "type": "number",
          "description": "Entry delay on the copy button tooltip",
          "defaultValue": "300"
        },
        {
          "name": "exitDelay",
          "type": "number",
          "description": "Exit delay on the copy button tooltip",
          "defaultValue": "0"
        },
        {
          "name": "id",
          "type": "string",
          "description": "ID of the copy button",
          "required": true
        },
        {
          "name": "maxWidth",
          "type": "string",
          "description": "Max width of the copy button tooltip",
          "defaultValue": "'100px'"
        },
        {
          "name": "onClick",
          "type": "(event: React.MouseEvent) => void",
          "description": "Callback for the copy when the button is clicked",
          "required": true
        },
        {
          "name": "position",
          "type": "TooltipPosition\n| PopoverPosition\n| 'auto'\n| 'top'\n| 'bottom'\n| 'left'\n| 'right'\n| 'top-start'\n| 'top-end'\n| 'bottom-start'\n| 'bottom-end'\n| 'left-start'\n| 'left-end'\n| 'right-start'\n| 'right-end'",
          "description": "Position of the copy button tooltip",
          "defaultValue": "'top'"
        },
        {
          "name": "textId",
          "type": "string",
          "description": "ID of the content that is being copied",
          "required": true
        },
        {
          "name": "variant",
          "type": "'control' | 'plain'",
          "description": "Variant of the copy button",
          "defaultValue": "'control'"
        }
      ]
    }
  ],
  "cssPrefix": [
    "pf-c-copyclipboard"
  ],
  "examples": [
    "Basic",
    "Read Only",
    "Expanded",
    "Read only expanded",
    "Read only expanded by default",
    "Expanded with array",
    "JSON object (wrap code with pre)",
    "Inline compact",
    "Inline compact code",
    "Inline compact with additional action",
    "Inline compact in sentence"
  ]
};
pageData.liveContext = {
  PlayIcon
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ClipboardCopy } from '@patternfly/react-core';\n\nexport const ClipboardCopyBasic: React.FunctionComponent = () => (\n  <ClipboardCopy hoverTip=\"Copy\" clickTip=\"Copied\">\n    This is editable\n  </ClipboardCopy>\n);\n","title":"Basic","lang":"ts"}}>
      
    </Example>,
  'Read Only': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ClipboardCopy } from '@patternfly/react-core';\n\nexport const ClipboardCopyReadOnly: React.FunctionComponent = () => (\n  <ClipboardCopy isReadOnly hoverTip=\"Copy\" clickTip=\"Copied\">\n    This is read-only\n  </ClipboardCopy>\n);\n","title":"Read Only","lang":"ts"}}>
      
    </Example>,
  'Expanded': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ClipboardCopy, ClipboardCopyVariant } from '@patternfly/react-core';\n\nexport const ClipboardCopyExpanded: React.FunctionComponent = () => (\n  <ClipboardCopy hoverTip=\"Copy\" clickTip=\"Copied\" variant={ClipboardCopyVariant.expansion}>\n    Got a lot of text here, need to see all of it? Click that arrow on the left side and check out the resulting\n    expansion.\n  </ClipboardCopy>\n);\n","title":"Expanded","lang":"ts"}}>
      
    </Example>,
  'Read only expanded': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ClipboardCopy, ClipboardCopyVariant } from '@patternfly/react-core';\n\nexport const ClipboardCopyReadOnlyExpanded: React.FunctionComponent = () => (\n  <ClipboardCopy isReadOnly hoverTip=\"Copy\" clickTip=\"Copied\" variant={ClipboardCopyVariant.expansion}>\n    Got a lot of text here, need to see all of it? Click that arrow on the left side and check out the resulting\n    expansion.\n  </ClipboardCopy>\n);\n","title":"Read only expanded","lang":"ts"}}>
      
    </Example>,
  'Read only expanded by default': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ClipboardCopy, ClipboardCopyVariant } from '@patternfly/react-core';\n\nexport const ClipboardCopyReadOnlyExpandedByDefault: React.FunctionComponent = () => (\n  <ClipboardCopy isReadOnly isExpanded hoverTip=\"Copy\" clickTip=\"Copied\" variant={ClipboardCopyVariant.expansion}>\n    Got a lot of text here, need to see all of it? Click that arrow on the left side and check out the resulting\n    expansion.\n  </ClipboardCopy>\n);\n","title":"Read only expanded by default","lang":"ts"}}>
      
    </Example>,
  'Expanded with array': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ClipboardCopy, ClipboardCopyVariant } from '@patternfly/react-core';\n\nconst text = [\n  'Got a lot of text here,',\n  'need to see all of it?',\n  'Click that arrow on the left side and check out the resulting expansion.'\n];\n\nexport const ClipboardCopyExpandedWithArray: React.FunctionComponent = () => (\n  <ClipboardCopy hoverTip=\"Copy\" clickTip=\"Copied\" variant={ClipboardCopyVariant.expansion}>\n    {text.join(' ')}\n  </ClipboardCopy>\n);\n","title":"Expanded with array","lang":"ts"}}>
      
    </Example>,
  'JSON object (wrap code with pre)': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ClipboardCopy, ClipboardCopyVariant } from '@patternfly/react-core';\n\nexport const ClipboardCopyJSONObject: React.FunctionComponent = () => (\n  <ClipboardCopy isCode hoverTip=\"Copy\" clickTip=\"Copied\" variant={ClipboardCopyVariant.expansion}>\n    {`{ \"menu\": {\n    \"id\": \"file\",\n    \"value\": \"File\",\n    \"popup\": {\n      \"menuitem\": [\n        {\"value\": \"New\", \"onclick\": \"CreateNewDoc()\"},\n        {\"value\": \"Open\", \"onclick\": \"OpenDoc()\"},\n        {\"value\": \"Close\", \"onclick\": \"CloseDoc()\"}\n      ]\n    }\n  }} `}\n  </ClipboardCopy>\n);\n","title":"JSON object (wrap code with pre)","lang":"ts"}}>
      
    </Example>,
  'Inline compact': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ClipboardCopy } from '@patternfly/react-core';\nexport const ClipboardCopyInlineCompact: React.FunctionComponent = () => (\n  <ClipboardCopy hoverTip=\"Copy\" clickTip=\"Copied\" variant=\"inline-compact\">\n    2.3.4-2-redhat\n  </ClipboardCopy>\n);\n","title":"Inline compact","lang":"ts"}}>
      
    </Example>,
  'Inline compact code': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ClipboardCopy } from '@patternfly/react-core';\n\nexport const ClipboardCopyInlineCompactCode: React.FunctionComponent = () => (\n  <ClipboardCopy hoverTip=\"Copy\" clickTip=\"Copied\" variant=\"inline-compact\" isCode>\n    2.3.4-2-redhat\n  </ClipboardCopy>\n);\n","title":"Inline compact code","lang":"ts"}}>
      
    </Example>,
  'Inline compact with additional action': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ClipboardCopy, ClipboardCopyAction, Button } from '@patternfly/react-core';\nimport PlayIcon from '@patternfly/react-icons/dist/esm/icons/play-icon';\n\nexport const ClipboardCopyInlineCompactWithAdditionalAction: React.FunctionComponent = () => (\n  <ClipboardCopy\n    hoverTip=\"Copy\"\n    clickTip=\"Copied\"\n    variant=\"inline-compact\"\n    additionalActions={\n      <ClipboardCopyAction>\n        <Button variant=\"plain\" aria-label=\"Run in web terminal\">\n          <PlayIcon aria-hidden />\n        </Button>\n      </ClipboardCopyAction>\n    }\n  >\n    2.3.4-2-redhat\n  </ClipboardCopy>\n);\n","title":"Inline compact with additional action","lang":"ts"}}>
      
    </Example>,
  'Inline compact in sentence': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ClipboardCopy } from '@patternfly/react-core';\n\nexport const ClipboardCopyInlineCompactInSentence: React.FunctionComponent = () => (\n  <React.Fragment>\n    <b>Basic</b>\n    <br />\n    Lorem ipsum{' '}\n    {\n      <ClipboardCopy hoverTip=\"Copy\" clickTip=\"Copied\" variant=\"inline-compact\">\n        2.3.4-2-redhat\n      </ClipboardCopy>\n    }\n    dolor sit amet.\n    <br /> <br />\n    <b>Long copy string</b>\n    <br />\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}\n    {\n      <ClipboardCopy hoverTip=\"Copy\" clickTip=\"Copied\" variant=\"inline-compact\">\n        https://app.openshift.io/path/sub-path/sub-sub-path/?runtime=quarkus/12345678901234567890/abcdefghijklmnopqrstuvwxyz1234567890\n      </ClipboardCopy>\n    }{' '}\n    Mauris luctus, libero nec dapibus ultricies, urna purus pretium mauris, ullamcorper pharetra lacus nibh vitae enim.\n    <br /> <br />\n    <b>Long copy string in block</b>\n    <br />\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}\n    {\n      <ClipboardCopy hoverTip=\"Copy\" clickTip=\"Copied\" variant=\"inline-compact\" isBlock>\n        https://app.openshift.io/path/sub-path/sub-sub-path/?runtime=quarkus/12345678901234567890/abcdefghijklmnopqrstuvwxyz1234567890\n      </ClipboardCopy>\n    }{' '}\n    Mauris luctus, libero nec dapibus ultricies, urna purus pretium mauris, ullamcorper pharetra lacus nibh vitae enim.\n  </React.Fragment>\n);\n","title":"Inline compact in sentence","lang":"ts"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["Read Only"])}
    {React.createElement(pageData.examples["Expanded"])}
    {React.createElement(pageData.examples["Read only expanded"])}
    {React.createElement(pageData.examples["Read only expanded by default"])}
    {React.createElement(pageData.examples["Expanded with array"])}
    {React.createElement(pageData.examples["JSON object (wrap code with pre)"])}
    {React.createElement(pageData.examples["Inline compact"])}
    {React.createElement(pageData.examples["Inline compact code"])}
    {React.createElement(pageData.examples["Inline compact with additional action"])}
    {React.createElement(pageData.examples["Inline compact in sentence"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsClipboardCopyReactDocs';
Component.pageData = pageData;

export default Component;
