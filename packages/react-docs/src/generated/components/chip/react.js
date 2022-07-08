import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Chip",
  "section": "components",
  "source": "react",
  "slug": "/components/chip/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/Chip/examples/Chip.md",
  "propComponents": [
    {
      "name": "Chip",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the chip text"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the chip item",
          "defaultValue": "''"
        },
        {
          "name": "closeBtnAriaLabel",
          "type": "string",
          "description": "Aria Label for close button",
          "defaultValue": "'close'"
        },
        {
          "name": "component",
          "type": "React.ReactNode",
          "description": "Component that will be used for chip. It is recommended that <button> or <li>  are used when the chip is an overflow chip.",
          "defaultValue": "'div'"
        },
        {
          "name": "isOverflowChip",
          "type": "boolean",
          "description": "Flag indicating if the chip is an overflow chip",
          "defaultValue": "false"
        },
        {
          "name": "isReadOnly",
          "type": "boolean",
          "description": "Flag indicating if chip is read only",
          "defaultValue": "false"
        },
        {
          "name": "onClick",
          "type": "(event: React.MouseEvent) => void",
          "description": "Function that is called when clicking on the chip close button",
          "defaultValue": "(_e: React.MouseEvent) => undefined as any"
        },
        {
          "name": "textMaxWidth",
          "type": "string",
          "description": "Css property expressed in percentage or any css unit that overrides the default value of the max-width of the chip's text"
        },
        {
          "name": "tooltipPosition",
          "type": "TooltipPosition\n| 'auto'\n| 'top'\n| 'bottom'\n| 'left'\n| 'right'\n| 'top-start'\n| 'top-end'\n| 'bottom-start'\n| 'bottom-end'\n| 'left-start'\n| 'left-end'\n| 'right-start'\n| 'right-end'",
          "description": "Position of the tooltip which is displayed if text is longer",
          "defaultValue": "'top'"
        }
      ]
    }
  ],
  "cssPrefix": [
    "pf-c-chip"
  ],
  "examples": [
    "Default"
  ]
};
pageData.examples = {
  'Default': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Badge, Chip } from '@patternfly/react-core';\n\nexport const ChipDefault: React.FunctionComponent = () => {\n  const [chips, setChips] = React.useState({\n    chip: {\n      name: 'Chip 1'\n    },\n    longchip: {\n      name: 'Really long chip that goes on and on'\n    },\n    badgechip: {\n      name: 'Chip',\n      isRead: true,\n      count: 7\n    },\n    readonlychip: {\n      name: 'Read-only chip'\n    },\n    overflowchip: {\n      name: 'Overflow chip'\n    }\n  });\n\n  const deleteItem = (id: string) => {\n    setChips({ ...chips, [id]: null });\n  };\n\n  const { chip, longchip, badgechip, readonlychip, overflowchip } = chips;\n  return (\n    <React.Fragment>\n      {chip && (\n        <React.Fragment>\n          <Chip key=\"chip1\" onClick={() => deleteItem('chip')}>\n            {chip.name}\n          </Chip>\n          <br /> <br />\n        </React.Fragment>\n      )}\n      {longchip && (\n        <React.Fragment>\n          <Chip key=\"chip2\" onClick={() => deleteItem('longchip')}>\n            {longchip.name}\n          </Chip>\n          <br /> <br />\n        </React.Fragment>\n      )}\n      {badgechip && (\n        <React.Fragment>\n          <Chip key=\"chip3\" onClick={() => deleteItem('badgechip')}>\n            {badgechip.name}\n            <Badge isRead={badgechip.isRead}>{badgechip.count}</Badge>\n          </Chip>\n          <br /> <br />\n        </React.Fragment>\n      )}\n      <Chip key=\"chip4\" onClick={() => deleteItem('readonlychip')} isReadOnly>\n        {readonlychip.name}\n      </Chip>\n      <br /> <br />\n      {overflowchip && (\n        <Chip key=\"chip5\" component=\"button\" onClick={() => deleteItem('overflowchip')} isOverflowChip>\n          {overflowchip.name}\n        </Chip>\n      )}\n    </React.Fragment>\n  );\n};\n","title":"Default","lang":"ts"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Default"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsChipReactDocs';
Component.pageData = pageData;

export default Component;
