import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Chip group",
  "section": "components",
  "source": "react",
  "slug": "/components/chip-group/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/ChipGroup/examples/ChipGroup.md",
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
    },
    {
      "name": "ChipGroup",
      "description": "",
      "props": [
        {
          "name": "aria-label",
          "type": "string",
          "description": "Aria label for chip group that does not have a category name",
          "defaultValue": "'Chip group category'"
        },
        {
          "name": "categoryName",
          "type": "string",
          "description": "Category name text for the chip group category.  If this prop is supplied the chip group with have a label and category styling applied",
          "defaultValue": "''"
        },
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the chip group. Should be <Chip> elements."
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the chip item"
        },
        {
          "name": "closeBtnAriaLabel",
          "type": "string",
          "description": "Aria label for close button",
          "defaultValue": "'Close chip group'"
        },
        {
          "name": "collapsedText",
          "type": "string",
          "description": "Customizeable template string. Use variable \"${remaining}\" for the overflow chip count.",
          "defaultValue": "'${remaining} more'"
        },
        {
          "name": "defaultIsOpen",
          "type": "boolean",
          "description": "Flag for having the chip group default to expanded",
          "defaultValue": "false"
        },
        {
          "name": "expandedText",
          "type": "string",
          "description": "Customizable \"Show Less\" text string",
          "defaultValue": "'Show Less'"
        },
        {
          "name": "isClosable",
          "type": "boolean",
          "description": "Flag if chip group can be closed",
          "defaultValue": "false"
        },
        {
          "name": "numChips",
          "type": "number",
          "description": "Set number of chips to show before overflow",
          "defaultValue": "3"
        },
        {
          "name": "onClick",
          "type": "(event: React.MouseEvent) => void",
          "description": "Function that is called when clicking on the chip group close button",
          "defaultValue": "(_e: React.MouseEvent) => undefined as any"
        },
        {
          "name": "onOverflowChipClick",
          "type": "(event: React.MouseEvent) => void",
          "description": "Function that is called when clicking on the overflow (expand/collapse) chip button",
          "defaultValue": "(_e: React.MouseEvent) => undefined as any"
        },
        {
          "name": "tooltipPosition",
          "type": "TooltipPosition\n| 'auto'\n| 'top'\n| 'bottom'\n| 'left'\n| 'right'\n| 'top-start'\n| 'top-end'\n| 'bottom-start'\n| 'bottom-end'\n| 'left-start'\n| 'left-end'\n| 'right-start'\n| 'right-end'",
          "description": "Position of the tooltip which is displayed if the category name text is longer",
          "defaultValue": "'top'"
        }
      ]
    }
  ],
  "cssPrefix": [
    "pf-c-chip-group"
  ],
  "examples": [
    "Simple inline",
    "With categories",
    "With removable categories"
  ]
};
pageData.examples = {
  'Simple inline': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Chip, ChipGroup } from '@patternfly/react-core';\n\nexport const ChipGroupInline: React.FunctionComponent = () => {\n  const [chips, setChips] = React.useState([\n    'Chip one',\n    'Really long chip that goes on and on',\n    'Chip three',\n    'Chip four',\n    'Chip five'\n  ]);\n\n  const deleteItem = (id: string) => {\n    const copyOfChips = [...chips];\n    const filteredCopy = copyOfChips.filter(chip => chip !== id);\n    setChips(filteredCopy);\n  };\n\n  return (\n    <ChipGroup>\n      {chips.map(currentChip => (\n        <Chip key={currentChip} onClick={() => deleteItem(currentChip)}>\n          {currentChip}\n        </Chip>\n      ))}\n    </ChipGroup>\n  );\n};\n","title":"Simple inline","lang":"ts"}}>
      
    </Example>,
  'With categories': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Chip, ChipGroup } from '@patternfly/react-core';\n\nexport const ChipGroupWithCategories: React.FunctionComponent = () => {\n  const [chips, setChips] = React.useState([\n    'Chip one',\n    'Really long chip that goes on and on',\n    'Chip three',\n    'Chip four',\n    'Chip five'\n  ]);\n\n  const deleteItem = (id: string) => {\n    const copyOfChips = [...chips];\n    const filteredCopy = copyOfChips.filter(chip => chip !== id);\n    setChips(filteredCopy);\n  };\n\n  return (\n    <ChipGroup categoryName=\"Category one\">\n      {chips.map(currentChip => (\n        <Chip key={currentChip} onClick={() => deleteItem(currentChip)}>\n          {currentChip}\n        </Chip>\n      ))}\n    </ChipGroup>\n  );\n};\n","title":"With categories","lang":"ts"}}>
      
    </Example>,
  'With removable categories': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Chip, ChipGroup } from '@patternfly/react-core';\n\nexport const ChipGroupRemovableCategories: React.FunctionComponent = () => {\n  const [chipGroup1, setChipGroup1] = React.useState(['Chip one', 'Chip two', 'Chip three']);\n  const [chipGroup2, setChipGroup2] = React.useState(['Chip one', 'Chip two', 'Chip three', 'Chip four']);\n\n  const deleteItem = (id: string, group: string[]) => {\n    const copyOfChips = [...group];\n    const filteredCopy = copyOfChips.filter(chip => chip !== id);\n\n    if (group === chipGroup1) {\n      setChipGroup1(filteredCopy);\n    } else {\n      setChipGroup2(filteredCopy);\n    }\n  };\n\n  const deleteCategory = (group: string[]) => {\n    if (group === chipGroup1) {\n      setChipGroup1([]);\n    } else {\n      setChipGroup2([]);\n    }\n  };\n\n  return (\n    <React.Fragment>\n      <ChipGroup categoryName=\"Category one\" isClosable onClick={() => deleteCategory(chipGroup1)}>\n        {chipGroup1.map(currentChip => (\n          <Chip key={currentChip} onClick={() => deleteItem(currentChip, chipGroup1)}>\n            {currentChip}\n          </Chip>\n        ))}\n      </ChipGroup>\n      <br /> <br />\n      <ChipGroup categoryName=\"Category two has a very long name\" isClosable onClick={() => deleteCategory(chipGroup2)}>\n        {chipGroup2.map(currentChip => (\n          <Chip key={currentChip} onClick={() => deleteItem(currentChip, chipGroup2)}>\n            {currentChip}\n          </Chip>\n        ))}\n      </ChipGroup>\n    </React.Fragment>\n  );\n};\n","title":"With removable categories","lang":"ts"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Simple inline"])}
    {React.createElement(pageData.examples["With categories"])}
    {React.createElement(pageData.examples["With removable categories"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsChipGroupReactDocs';
Component.pageData = pageData;

export default Component;
