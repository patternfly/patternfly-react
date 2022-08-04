import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import InfoCircleIcon from '@patternfly/react-icons/dist/esm/icons/info-circle-icon';
import { Link } from '@reach/router';
const pageData = {
  "id": "Label",
  "section": "components",
  "source": "react",
  "slug": "/components/label/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/Label/examples/Label.md",
  "propComponents": [
    {
      "name": "Label",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the label."
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the label.",
          "defaultValue": "''"
        },
        {
          "name": "closeBtn",
          "type": "React.ReactNode",
          "description": "Node for custom close button."
        },
        {
          "name": "closeBtnAriaLabel",
          "type": "string",
          "description": "Aria label for close button"
        },
        {
          "name": "closeBtnProps",
          "type": "any",
          "description": "Additional properties for the default close button."
        },
        {
          "name": "color",
          "type": "'blue' | 'cyan' | 'green' | 'orange' | 'purple' | 'red' | 'grey' | 'gold'",
          "description": "Color of the label.",
          "defaultValue": "'grey'"
        },
        {
          "name": "editableProps",
          "type": "any",
          "description": "Additional props passed to the editable label text div. Optionally passing onInput and onBlur callbacks will allow finer custom text input control.",
          "beta": true
        },
        {
          "name": "href",
          "type": "string",
          "description": "Href for a label that is a link. If present, the label will change to an anchor element."
        },
        {
          "name": "icon",
          "type": "React.ReactNode",
          "description": "Icon added to the left of the label text."
        },
        {
          "name": "isCompact",
          "type": "boolean",
          "description": "Flag indicating the label is compact.",
          "defaultValue": "false"
        },
        {
          "name": "isEditable",
          "type": "boolean",
          "description": "Flag indicating the label is editable.",
          "defaultValue": "false",
          "beta": true
        },
        {
          "name": "isOverflowLabel",
          "type": "boolean",
          "description": "Flag indicating if the label is an overflow label"
        },
        {
          "name": "isTruncated",
          "type": "boolean",
          "description": "Flag indicating the label text should be truncated.",
          "defaultValue": "false"
        },
        {
          "name": "onClose",
          "type": "(event: React.MouseEvent) => void",
          "description": "Close click callback for removable labels. If present, label will have a close button."
        },
        {
          "name": "onEditCancel",
          "type": "(previousText: string) => void",
          "description": "Callback when an editable label cancels an edit.",
          "beta": true
        },
        {
          "name": "onEditComplete",
          "type": "(newText: string) => void",
          "description": "Callback when an editable label completes an edit.",
          "beta": true
        },
        {
          "name": "render",
          "type": "({\n  className,\n  content,\n  componentRef\n}: {\n  className: string;\n  content: React.ReactNode;\n  componentRef: any;\n}) => React.ReactNode",
          "description": "Forwards the label content and className to rendered function.  Use this prop for react router support."
        },
        {
          "name": "tooltipPosition",
          "type": "TooltipPosition\n| 'auto'\n| 'top'\n| 'bottom'\n| 'left'\n| 'right'\n| 'top-start'\n| 'top-end'\n| 'bottom-start'\n| 'bottom-end'\n| 'left-start'\n| 'left-end'\n| 'right-start'\n| 'right-end'",
          "description": "Position of the tooltip which is displayed if text is truncated"
        },
        {
          "name": "variant",
          "type": "'outline' | 'filled'",
          "description": "Variant of the label.",
          "defaultValue": "'filled'"
        }
      ]
    }
  ],
  "cssPrefix": [
    "pf-c-label"
  ],
  "examples": [
    "Filled",
    "Outline",
    "Compact",
    "Router link",
    "Editable"
  ]
};
pageData.liveContext = {
  InfoCircleIcon,
  Link
};
pageData.examples = {
  'Filled': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Label } from '@patternfly/react-core';\nimport InfoCircleIcon from '@patternfly/react-icons/dist/esm/icons/info-circle-icon';\n\nexport const LabelFilled: React.FunctionComponent = () => (\n  <React.Fragment>\n    <Label>Grey</Label> <Label icon={<InfoCircleIcon />}>Grey icon</Label>{' '}\n    <Label onClose={() => Function.prototype}>Grey removable</Label>{' '}\n    <Label icon={<InfoCircleIcon />} onClose={() => Function.prototype}>\n      Grey icon removable\n    </Label>{' '}\n    <Label href=\"#filled\">Grey link</Label>{' '}\n    <Label href=\"#filled\" onClose={() => Function.prototype}>\n      Grey link removable\n    </Label>\n    <Label icon={<InfoCircleIcon />} onClose={() => Function.prototype} isTruncated>\n      Grey label with icon that overflows\n    </Label>\n    <br />\n    <br />\n    <Label color=\"blue\">Blue</Label>{' '}\n    <Label color=\"blue\" icon={<InfoCircleIcon />}>\n      Blue icon\n    </Label>{' '}\n    <Label color=\"blue\" onClose={() => Function.prototype}>\n      Blue removable\n    </Label>{' '}\n    <Label color=\"blue\" icon={<InfoCircleIcon />} onClose={() => Function.prototype}>\n      Blue icon removable\n    </Label>{' '}\n    <Label color=\"blue\" href=\"#filled\">\n      Blue link\n    </Label>{' '}\n    <Label color=\"blue\" href=\"#filled\" onClose={() => Function.prototype}>\n      Blue link removable\n    </Label>\n    <Label color=\"blue\" icon={<InfoCircleIcon />} onClose={() => Function.prototype} isTruncated>\n      Blue label with icon that overflows\n    </Label>\n    <br />\n    <br />\n    <Label color=\"green\">Green</Label>{' '}\n    <Label color=\"green\" icon={<InfoCircleIcon />}>\n      Green icon\n    </Label>{' '}\n    <Label color=\"green\" onClose={() => Function.prototype}>\n      Green removable\n    </Label>{' '}\n    <Label color=\"green\" icon={<InfoCircleIcon />} onClose={() => Function.prototype}>\n      Green icon removable\n    </Label>{' '}\n    <Label color=\"green\" href=\"#filled\">\n      Green link\n    </Label>{' '}\n    <Label color=\"green\" href=\"#filled\" onClose={() => Function.prototype}>\n      Green link removable\n    </Label>\n    <Label color=\"green\" icon={<InfoCircleIcon />} onClose={() => Function.prototype} isTruncated>\n      Green label with icon that overflows\n    </Label>\n    <br />\n    <br />\n    <Label color=\"orange\">Orange</Label>{' '}\n    <Label color=\"orange\" icon={<InfoCircleIcon />}>\n      Orange icon\n    </Label>{' '}\n    <Label color=\"orange\" onClose={() => Function.prototype}>\n      Orange removable\n    </Label>{' '}\n    <Label color=\"orange\" icon={<InfoCircleIcon />} onClose={() => Function.prototype}>\n      Orange icon removable\n    </Label>{' '}\n    <Label color=\"orange\" href=\"#filled\">\n      Orange link\n    </Label>{' '}\n    <Label color=\"orange\" href=\"#filled\" onClose={() => Function.prototype}>\n      Orange link removable\n    </Label>\n    <Label color=\"orange\" icon={<InfoCircleIcon />} onClose={() => Function.prototype} isTruncated>\n      Orange label with icon that overflows\n    </Label>\n    <br />\n    <br />\n    <Label color=\"red\">Red</Label>{' '}\n    <Label color=\"red\" icon={<InfoCircleIcon />}>\n      Red icon\n    </Label>{' '}\n    <Label color=\"red\" onClose={() => Function.prototype}>\n      Red removable\n    </Label>{' '}\n    <Label color=\"red\" icon={<InfoCircleIcon />} onClose={() => Function.prototype}>\n      Red icon removable\n    </Label>{' '}\n    <Label color=\"red\" href=\"#filled\">\n      Red link\n    </Label>{' '}\n    <Label color=\"red\" href=\"#filled\" onClose={() => Function.prototype}>\n      Red link removable\n    </Label>\n    <Label color=\"red\" icon={<InfoCircleIcon />} onClose={() => Function.prototype} isTruncated>\n      Red label with icon that overflows\n    </Label>\n    <br />\n    <br />\n    <Label color=\"purple\">Purple</Label>{' '}\n    <Label color=\"purple\" icon={<InfoCircleIcon />}>\n      Purple icon\n    </Label>{' '}\n    <Label color=\"purple\" onClose={() => Function.prototype}>\n      Purple removable\n    </Label>{' '}\n    <Label color=\"purple\" icon={<InfoCircleIcon />} onClose={() => Function.prototype}>\n      Purple icon removable\n    </Label>{' '}\n    <Label color=\"purple\" href=\"#filled\">\n      Purple link\n    </Label>{' '}\n    <Label color=\"purple\" href=\"#filled\" onClose={() => Function.prototype}>\n      Purple link removable\n    </Label>\n    <Label color=\"purple\" icon={<InfoCircleIcon />} onClose={() => Function.prototype} isTruncated>\n      Purple label with icon that overflows\n    </Label>\n    <br />\n    <br />\n    <Label color=\"cyan\">Cyan</Label>{' '}\n    <Label color=\"cyan\" icon={<InfoCircleIcon />}>\n      Cyan icon\n    </Label>{' '}\n    <Label color=\"cyan\" onClose={() => Function.prototype}>\n      Cyan removable\n    </Label>{' '}\n    <Label color=\"cyan\" icon={<InfoCircleIcon />} onClose={() => Function.prototype}>\n      Cyan icon removable\n    </Label>{' '}\n    <Label color=\"cyan\" href=\"#filled\">\n      Cyan link\n    </Label>{' '}\n    <Label color=\"cyan\" href=\"#filled\" onClose={() => Function.prototype}>\n      Cyan link removable\n    </Label>\n    <Label color=\"cyan\" icon={<InfoCircleIcon />} onClose={() => Function.prototype} isTruncated>\n      Cyan label with icon that overflows\n    </Label>\n    <br />\n    <br />\n    <Label color=\"gold\">Gold</Label>{' '}\n    <Label color=\"gold\" icon={<InfoCircleIcon />}>\n      Gold icon\n    </Label>{' '}\n    <Label color=\"gold\" onClose={() => Function.prototype}>\n      Gold removable\n    </Label>{' '}\n    <Label color=\"gold\" icon={<InfoCircleIcon />} onClose={() => Function.prototype}>\n      Gold icon removable\n    </Label>{' '}\n    <Label color=\"gold\" href=\"#filled\">\n      Gold link\n    </Label>{' '}\n    <Label color=\"gold\" href=\"#filled\" onClose={() => Function.prototype}>\n      Gold link removable\n    </Label>\n    <Label color=\"gold\" icon={<InfoCircleIcon />} onClose={() => Function.prototype} isTruncated>\n      Gold label with icon that overflows\n    </Label>\n  </React.Fragment>\n);\n","title":"Filled","lang":"ts"}}>
      
    </Example>,
  'Outline': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Label } from '@patternfly/react-core';\nimport InfoCircleIcon from '@patternfly/react-icons/dist/esm/icons/info-circle-icon';\n\nexport const LabelOutline: React.FunctionComponent = () => (\n  <React.Fragment>\n    <Label variant=\"outline\">Grey</Label>{' '}\n    <Label variant=\"outline\" icon={<InfoCircleIcon />}>\n      Grey icon\n    </Label>{' '}\n    <Label variant=\"outline\" onClose={() => Function.prototype}>\n      Grey removable\n    </Label>{' '}\n    <Label variant=\"outline\" icon={<InfoCircleIcon />} onClose={() => Function.prototype}>\n      Grey icon removable\n    </Label>{' '}\n    <Label variant=\"outline\" href=\"#outline\">\n      Grey link\n    </Label>{' '}\n    <Label variant=\"outline\" href=\"#outline\" onClose={() => Function.prototype}>\n      Grey link removable\n    </Label>\n    <Label variant=\"outline\" icon={<InfoCircleIcon />} onClose={() => Function.prototype} isTruncated>\n      Grey label with icon that overflows\n    </Label>\n    <br />\n    <br />\n    <Label variant=\"outline\" color=\"blue\">\n      Blue\n    </Label>{' '}\n    <Label variant=\"outline\" color=\"blue\" icon={<InfoCircleIcon />}>\n      Blue icon\n    </Label>{' '}\n    <Label variant=\"outline\" color=\"blue\" onClose={() => Function.prototype}>\n      Blue removable\n    </Label>{' '}\n    <Label variant=\"outline\" color=\"blue\" icon={<InfoCircleIcon />} onClose={() => Function.prototype}>\n      Blue icon removable\n    </Label>{' '}\n    <Label variant=\"outline\" color=\"blue\" href=\"#outline\">\n      Blue link\n    </Label>{' '}\n    <Label variant=\"outline\" color=\"blue\" href=\"#outline\" onClose={() => Function.prototype}>\n      Blue link removable\n    </Label>\n    <Label variant=\"outline\" color=\"blue\" icon={<InfoCircleIcon />} onClose={() => Function.prototype} isTruncated>\n      Blue label with icon that overflows\n    </Label>\n    <br />\n    <br />\n    <Label variant=\"outline\" color=\"green\">\n      Green\n    </Label>{' '}\n    <Label variant=\"outline\" color=\"green\" icon={<InfoCircleIcon />}>\n      Green icon\n    </Label>{' '}\n    <Label variant=\"outline\" color=\"green\" onClose={() => Function.prototype}>\n      Green removable\n    </Label>{' '}\n    <Label variant=\"outline\" color=\"green\" icon={<InfoCircleIcon />} onClose={() => Function.prototype}>\n      Green icon removable\n    </Label>{' '}\n    <Label variant=\"outline\" color=\"green\" href=\"#outline\">\n      Green link\n    </Label>{' '}\n    <Label variant=\"outline\" color=\"green\" href=\"#outline\" onClose={() => Function.prototype}>\n      Green link removable\n    </Label>\n    <Label variant=\"outline\" color=\"green\" icon={<InfoCircleIcon />} onClose={() => Function.prototype} isTruncated>\n      Green label with icon that overflows\n    </Label>\n    <br />\n    <br />\n    <Label variant=\"outline\" color=\"orange\">\n      Orange\n    </Label>{' '}\n    <Label variant=\"outline\" color=\"orange\" icon={<InfoCircleIcon />}>\n      Orange icon\n    </Label>{' '}\n    <Label variant=\"outline\" color=\"orange\" onClose={() => Function.prototype}>\n      Orange removable\n    </Label>{' '}\n    <Label variant=\"outline\" color=\"orange\" icon={<InfoCircleIcon />} onClose={() => Function.prototype}>\n      Orange icon removable\n    </Label>{' '}\n    <Label variant=\"outline\" color=\"orange\" href=\"#outline\">\n      Orange link\n    </Label>{' '}\n    <Label variant=\"outline\" color=\"orange\" href=\"#outline\" onClose={() => Function.prototype}>\n      Orange link removable\n    </Label>\n    <Label variant=\"outline\" color=\"orange\" icon={<InfoCircleIcon />} onClose={() => Function.prototype} isTruncated>\n      Orange label with icon that overflows\n    </Label>\n    <br />\n    <br />\n    <Label variant=\"outline\" color=\"red\">\n      Red\n    </Label>{' '}\n    <Label variant=\"outline\" color=\"red\" icon={<InfoCircleIcon />}>\n      Red icon\n    </Label>{' '}\n    <Label variant=\"outline\" color=\"red\" onClose={() => Function.prototype}>\n      Red removable\n    </Label>{' '}\n    <Label variant=\"outline\" color=\"red\" icon={<InfoCircleIcon />} onClose={() => Function.prototype}>\n      Red icon removable\n    </Label>{' '}\n    <Label variant=\"outline\" color=\"red\" href=\"#outline\">\n      Red link\n    </Label>{' '}\n    <Label variant=\"outline\" color=\"red\" href=\"#outline\" onClose={() => Function.prototype}>\n      Red link removable\n    </Label>\n    <Label variant=\"outline\" color=\"red\" icon={<InfoCircleIcon />} onClose={() => Function.prototype} isTruncated>\n      Red label with icon that overflows\n    </Label>\n    <br />\n    <br />\n    <Label variant=\"outline\" color=\"purple\">\n      Purple\n    </Label>{' '}\n    <Label variant=\"outline\" color=\"purple\" icon={<InfoCircleIcon />}>\n      Purple icon\n    </Label>{' '}\n    <Label variant=\"outline\" color=\"purple\" onClose={() => Function.prototype}>\n      Purple removable\n    </Label>{' '}\n    <Label variant=\"outline\" color=\"purple\" icon={<InfoCircleIcon />} onClose={() => Function.prototype}>\n      Purple icon removable\n    </Label>{' '}\n    <Label variant=\"outline\" color=\"purple\" href=\"#outline\">\n      Purple link\n    </Label>{' '}\n    <Label variant=\"outline\" color=\"purple\" href=\"#outline\" onClose={() => Function.prototype}>\n      Purple link removable\n    </Label>\n    <Label variant=\"outline\" color=\"purple\" icon={<InfoCircleIcon />} onClose={() => Function.prototype} isTruncated>\n      Purple label with icon that overflows\n    </Label>\n    <br />\n    <br />\n    <Label variant=\"outline\" color=\"cyan\">\n      Cyan\n    </Label>{' '}\n    <Label variant=\"outline\" color=\"cyan\" icon={<InfoCircleIcon />}>\n      Cyan icon\n    </Label>{' '}\n    <Label variant=\"outline\" color=\"cyan\" onClose={() => Function.prototype}>\n      Cyan removable\n    </Label>{' '}\n    <Label variant=\"outline\" color=\"cyan\" icon={<InfoCircleIcon />} onClose={() => Function.prototype}>\n      Cyan icon removable\n    </Label>{' '}\n    <Label variant=\"outline\" color=\"cyan\" href=\"#outline\">\n      Cyan link\n    </Label>{' '}\n    <Label variant=\"outline\" color=\"cyan\" href=\"#outline\" onClose={() => Function.prototype}>\n      Cyan link removable\n    </Label>\n    <Label variant=\"outline\" color=\"cyan\" icon={<InfoCircleIcon />} onClose={() => Function.prototype} isTruncated>\n      Cyan label with icon that overflows\n    </Label>\n    <br />\n    <br />\n    <Label variant=\"outline\" color=\"gold\">\n      Gold\n    </Label>{' '}\n    <Label variant=\"outline\" color=\"gold\" icon={<InfoCircleIcon />}>\n      Gold icon\n    </Label>{' '}\n    <Label variant=\"outline\" color=\"gold\" onClose={() => Function.prototype}>\n      Gold removable\n    </Label>{' '}\n    <Label variant=\"outline\" color=\"gold\" icon={<InfoCircleIcon />} onClose={() => Function.prototype}>\n      Gold icon removable\n    </Label>{' '}\n    <Label variant=\"outline\" color=\"gold\" href=\"#outline\">\n      Gold link\n    </Label>{' '}\n    <Label variant=\"outline\" color=\"gold\" href=\"#outline\" onClose={() => Function.prototype}>\n      Gold link removable\n    </Label>\n    <Label variant=\"outline\" color=\"gold\" icon={<InfoCircleIcon />} onClose={() => Function.prototype} isTruncated>\n      Gold label with icon that overflows\n    </Label>\n  </React.Fragment>\n);\n","title":"Outline","lang":"ts"}}>
      
    </Example>,
  'Compact': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Label } from '@patternfly/react-core';\nimport InfoCircleIcon from '@patternfly/react-icons/dist/esm/icons/info-circle-icon';\n\nexport const LabelCompact: React.FunctionComponent = () => (\n  <React.Fragment>\n    <Label isCompact>Grey</Label>{' '}\n    <Label isCompact icon={<InfoCircleIcon />}>\n      Compact icon\n    </Label>{' '}\n    <Label isCompact onClose={() => Function.prototype}>\n      Compact removable\n    </Label>{' '}\n    <Label isCompact icon={<InfoCircleIcon />} onClose={() => Function.prototype}>\n      Compact icon removable\n    </Label>{' '}\n    <Label isCompact href=\"#outline\">\n      Compact link\n    </Label>{' '}\n    <Label isCompact href=\"#outline\" onClose={() => Function.prototype}>\n      Compact link removable\n    </Label>\n    <Label isCompact icon={<InfoCircleIcon />} onClose={() => Function.prototype} isTruncated>\n      Compact label with icon that overflows\n    </Label>\n  </React.Fragment>\n);\n","title":"Compact","lang":"ts"}}>
      
    </Example>,
  'Router link': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Label } from '@patternfly/react-core';\nimport InfoCircleIcon from '@patternfly/react-icons/dist/esm/icons/info-circle-icon';\nimport { Link } from '@reach/router';\n\nexport const LabelRouterLink: React.FunctionComponent = () => (\n  <Label\n    color=\"blue\"\n    icon={<InfoCircleIcon />}\n    onClose={() => Function.prototype}\n    isTruncated\n    render={({ className, content, componentRef }) => (\n      <Link to=\"/\" className={className} innerRef={componentRef}>\n        {content}\n      </Link>\n    )}\n  >\n    Blue label router link with icon that overflows\n  </Label>\n);\n","title":"Router link","lang":"ts"}}>
      
    </Example>,
  'Editable': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Label } from '@patternfly/react-core';\n\nexport const LabelEditable: React.FunctionComponent = () => {\n  const [labelText, setLabelText] = React.useState('Editable label');\n  const [compactLabelText, setCompactLabelText] = React.useState('Compact editable label');\n\n  const onEditCancel = (prevText: string) => {\n    setLabelText(prevText);\n  };\n\n  const onEditComplete = (text: string) => {\n    setLabelText(text);\n  };\n\n  const onCompactEditCancel = (prevText: string) => {\n    setCompactLabelText(prevText);\n  };\n\n  const onCompactEditComplete = (text: string) => {\n    setCompactLabelText(text);\n  };\n\n  return (\n    <React.Fragment>\n      <Label\n        color=\"blue\"\n        onClose={() => {}}\n        closeBtnAriaLabel=\"Custom close button for editable label\"\n        onEditCancel={onEditCancel}\n        onEditComplete={onEditComplete}\n        isEditable\n        editableProps={{\n          'aria-label': 'Editable text',\n          id: 'editable-label'\n        }}\n      >\n        {labelText}\n      </Label>\n      <Label\n        color=\"grey\"\n        isCompact\n        onClose={() => {}}\n        closeBtnAriaLabel=\"Custom close button for compact editable label\"\n        onEditCancel={onCompactEditCancel}\n        onEditComplete={onCompactEditComplete}\n        isEditable\n        editableProps={{\n          'aria-label': 'Compact editable text',\n          id: 'compact-editable-label'\n        }}\n      >\n        {compactLabelText}\n      </Label>\n    </React.Fragment>\n  );\n};\n","title":"Editable","lang":"ts","isBeta":true}}>
      
      <p {...{"className":"ws-p"}}>
        {`Click or press either enter or space to begin editing a label. After editing, click outside the label or press enter again to complete the edit. To cancel an edit, press escape.`}
      </p>
      
      <p {...{"className":"ws-p"}}>
        {`You can also customize any Label's close button aria-label as this example shows with `}
        
        <code {...{"className":"ws-code"}}>
          {`closeBtnAriaLabel`}
        </code>
        {`.`}
      </p>
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Filled"])}
    {React.createElement(pageData.examples["Outline"])}
    {React.createElement(pageData.examples["Compact"])}
    {React.createElement(pageData.examples["Router link"])}
    {React.createElement(pageData.examples["Editable"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsLabelReactDocs';
Component.pageData = pageData;

export default Component;
