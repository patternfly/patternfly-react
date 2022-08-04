import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import CodeBranchIcon from '@patternfly/react-icons/dist/esm/icons/code-branch-icon';
import AngleDownIcon from '@patternfly/react-icons/dist/esm/icons/angle-down-icon';
import AngleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-right-icon';
import { css } from '@patternfly/react-styles';
const pageData = {
  "id": "Data list",
  "section": "components",
  "source": "react",
  "slug": "/components/data-list/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/DataList/examples/DataList.md",
  "propComponents": [
    {
      "name": "DataList",
      "description": "",
      "props": [
        {
          "name": "aria-label",
          "type": "string",
          "description": "Adds accessible text to the DataList list",
          "required": true
        },
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the DataList list",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the DataList list",
          "defaultValue": "''"
        },
        {
          "name": "gridBreakpoint",
          "type": "'none' | 'always' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",
          "description": "Specifies the grid breakpoints",
          "defaultValue": "'md'"
        },
        {
          "name": "isCompact",
          "type": "boolean",
          "description": "Flag indicating if DataList should have compact styling",
          "defaultValue": "false"
        },
        {
          "name": "itemOrder",
          "type": "string[]",
          "description": "Order of items in a draggable DataList",
          "deprecated": true
        },
        {
          "name": "onDragCancel",
          "type": "() => void",
          "description": "Optional informational callback for dragging, fired when dragging is cancelled",
          "deprecated": true
        },
        {
          "name": "onDragFinish",
          "type": "(newItemOrder: string[]) => void",
          "description": "Optional callback to make DataList draggable, fired when dragging ends",
          "deprecated": true
        },
        {
          "name": "onDragMove",
          "type": "(oldIndex: number, newIndex: number) => void",
          "description": "Optional informational callback for dragging, fired when an item moves",
          "deprecated": true
        },
        {
          "name": "onDragStart",
          "type": "(id: string) => void",
          "description": "Optional informational callback for dragging, fired when dragging starts",
          "deprecated": true
        },
        {
          "name": "onSelectDataListItem",
          "type": "(id: string) => void",
          "description": "Optional callback to make DataList selectable, fired when DataListItem selected"
        },
        {
          "name": "selectableRow",
          "type": "SelectableRowObject",
          "description": "Object that causes the data list to render hidden inputs which improve selectable item a11y",
          "beta": true
        },
        {
          "name": "selectedDataListItemId",
          "type": "string",
          "description": "Id of DataList item currently selected",
          "defaultValue": "''"
        },
        {
          "name": "wrapModifier",
          "type": "DataListWrapModifier | 'nowrap' | 'truncate' | 'breakWord'",
          "description": "Determines which wrapping modifier to apply to the DataList",
          "defaultValue": "null"
        }
      ]
    },
    {
      "name": "SelectableRowObject",
      "description": "",
      "props": [
        {
          "name": "onChange",
          "type": "(id: string, event: React.FormEvent<HTMLInputElement>) => void",
          "description": "Callback that executes when the screen reader accessible element receives a change event",
          "required": true
        },
        {
          "name": "type",
          "type": "'multiple' | 'single'",
          "description": "Determines if only one of the selectable rows should be selectable at a time",
          "required": true
        }
      ]
    },
    {
      "name": "DataListAction",
      "description": "",
      "props": [
        {
          "name": "aria-label",
          "type": "string",
          "description": "Adds accessible text to the DataList Action",
          "required": true
        },
        {
          "name": "aria-labelledby",
          "type": "string",
          "description": "Adds accessible text to the DataList Action",
          "required": true
        },
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered as DataList Action  (e.g <Button> or <Dropdown>)",
          "required": true
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the DataList Action"
        },
        {
          "name": "id",
          "type": "string",
          "description": "Identify the DataList toggle number",
          "required": true
        },
        {
          "name": "isPlainButtonAction",
          "type": "boolean",
          "description": "Flag to indicate that the action is a plain button (e.g. kebab dropdown toggle) so that styling is applied to align the button"
        },
        {
          "name": "visibility",
          "type": "{\n  default?: 'hidden' | 'visible';\n  sm?: 'hidden' | 'visible';\n  md?: 'hidden' | 'visible';\n  lg?: 'hidden' | 'visible';\n  xl?: 'hidden' | 'visible';\n  '2xl'?: 'hidden' | 'visible';\n}",
          "description": "What breakpoints to hide/show the data list action"
        }
      ]
    },
    {
      "name": "DataListCell",
      "description": "",
      "props": [
        {
          "name": "alignRight",
          "type": "boolean",
          "description": "Aligns the cell content to the right of its parent.",
          "defaultValue": "false"
        },
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the DataList cell",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the DataList cell",
          "defaultValue": "''"
        },
        {
          "name": "isFilled",
          "type": "boolean",
          "description": "Enables the body Content to fill the height of the card",
          "defaultValue": "true"
        },
        {
          "name": "isIcon",
          "type": "boolean",
          "description": "Set to true if the cell content is an Icon",
          "defaultValue": "false"
        },
        {
          "name": "width",
          "type": "1 | 2 | 3 | 4 | 5",
          "description": "Width (from 1-5) to the DataList cell",
          "defaultValue": "1"
        },
        {
          "name": "wrapModifier",
          "type": "DataListWrapModifier | 'nowrap' | 'truncate' | 'breakWord'",
          "description": "Determines which wrapping modifier to apply to the DataListCell",
          "defaultValue": "null"
        }
      ]
    },
    {
      "name": "DataListCheck",
      "description": "",
      "props": [
        {
          "name": "aria-labelledby",
          "type": "string",
          "description": "Aria-labelledby of the DataList checkbox",
          "required": true
        },
        {
          "name": "checked",
          "type": "boolean",
          "description": "Flag to show if the DataList checkbox is checked when it is controlled by React state. Both isChecked and checked are valid,\nbut only use one.\nTo make the DataList checkbox uncontrolled, instead use the defaultChecked prop, but do not use both.",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the DataList item checkbox",
          "defaultValue": "''"
        },
        {
          "name": "defaultChecked",
          "type": "boolean",
          "description": "Flag to set default value of DataList checkbox when it is uncontrolled by React state.\nTo make the DataList checkbox controlled, instead use the isChecked prop, but do not use both."
        },
        {
          "name": "isChecked",
          "type": "boolean",
          "description": "Flag to show if the DataList checkbox is checked when it is controlled by React state. Both isChecked and checked are valid,\nbut only use one.\nTo make the DataList checkbox uncontrolled, instead use the defaultChecked prop, but do not use both.",
          "defaultValue": "null"
        },
        {
          "name": "isDisabled",
          "type": "boolean",
          "description": "Flag to show if the DataList checkbox is disabled",
          "defaultValue": "false"
        },
        {
          "name": "isValid",
          "type": "boolean",
          "description": "Flag to show if the DataList checkbox selection is valid or invalid",
          "defaultValue": "true"
        },
        {
          "name": "onChange",
          "type": "(checked: boolean, event: React.FormEvent<HTMLInputElement>) => void",
          "description": "A callback for when the DataList checkbox selection changes",
          "defaultValue": "(checked: boolean, event: React.FormEvent<HTMLInputElement>) => {}"
        },
        {
          "name": "otherControls",
          "type": "boolean",
          "description": "Flag to indicate if other controls are used in the DataListItem",
          "defaultValue": "false"
        }
      ]
    },
    {
      "name": "DataListItem",
      "description": "",
      "props": [
        {
          "name": "aria-labelledby",
          "type": "string",
          "description": "Adds accessible text to the DataList item",
          "defaultValue": "''"
        },
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the DataList item",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the DataList item should be either <DataListItemRow> or <DataListContent>",
          "defaultValue": "''"
        },
        {
          "name": "id",
          "type": "string",
          "description": "Unique id for the DataList item",
          "defaultValue": "''"
        },
        {
          "name": "isExpanded",
          "type": "boolean",
          "description": "Flag to show if the expanded content of the DataList item is visible",
          "defaultValue": "false"
        },
        {
          "name": "selectableInputAriaLabel",
          "type": "string",
          "description": "Aria label to apply to the selectable input if one is rendered",
          "beta": true
        }
      ]
    },
    {
      "name": "DataListItemCells",
      "description": "",
      "props": [
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the DataList item Content Wrapper.  Children should be one ore more <DataListCell> nodes",
          "defaultValue": "''"
        },
        {
          "name": "dataListCells",
          "type": "React.ReactNode",
          "description": "Array of <DataListCell> nodes that are rendered one after the other."
        },
        {
          "name": "rowid",
          "type": "string",
          "description": "Id for the row",
          "defaultValue": "''"
        }
      ]
    },
    {
      "name": "DataListItemRow",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the DataListItemRow",
          "required": true
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the DataListItemRow",
          "defaultValue": "''"
        },
        {
          "name": "rowid",
          "type": "string",
          "description": "Id for the row item",
          "defaultValue": "''"
        },
        {
          "name": "wrapModifier",
          "type": "DataListWrapModifier | 'nowrap' | 'truncate' | 'breakWord'",
          "description": "Determines which wrapping modifier to apply to the DataListItemRow",
          "defaultValue": "null"
        }
      ]
    },
    {
      "name": "DataListToggle",
      "description": "",
      "props": [
        {
          "name": "aria-controls",
          "type": "string",
          "description": "Allows users of some screen readers to shift focus to the controlled element. Should be used when the controlled contents are not adjacent to the toggle that controls them.",
          "defaultValue": "''"
        },
        {
          "name": "aria-label",
          "type": "string",
          "description": "Adds accessible text to the DataList toggle",
          "defaultValue": "'Details'"
        },
        {
          "name": "aria-labelledby",
          "type": "string",
          "description": "Adds accessible text to the DataList toggle"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the DataList cell",
          "defaultValue": "''"
        },
        {
          "name": "id",
          "type": "string",
          "description": "Identify the DataList toggle number",
          "required": true
        },
        {
          "name": "isExpanded",
          "type": "boolean",
          "description": "Flag to show if the expanded content of the DataList item is visible",
          "defaultValue": "false"
        },
        {
          "name": "rowid",
          "type": "string",
          "description": "Id for the row",
          "defaultValue": "''"
        }
      ]
    },
    {
      "name": "DataListContent",
      "description": "",
      "props": [
        {
          "name": "aria-label",
          "type": "string",
          "description": "Adds accessible text to the DataList toggle",
          "required": true
        },
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the DataList item",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the DataList cell",
          "defaultValue": "''"
        },
        {
          "name": "hasNoPadding",
          "type": "boolean",
          "description": "Flag to remove padding from the expandable content",
          "defaultValue": "false"
        },
        {
          "name": "id",
          "type": "string",
          "description": "Identify the DataListContent item",
          "defaultValue": "''"
        },
        {
          "name": "isHidden",
          "type": "boolean",
          "description": "Flag to show if the expanded content of the DataList item is visible",
          "defaultValue": "false"
        },
        {
          "name": "rowid",
          "type": "string",
          "description": "Id for the row",
          "defaultValue": "''"
        }
      ]
    },
    {
      "name": "DataListDragButton",
      "description": "",
      "props": [
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the drag button",
          "defaultValue": "''"
        },
        {
          "name": "isDisabled",
          "type": "boolean",
          "description": "Flag indicating if drag is disabled for the item",
          "defaultValue": "false"
        },
        {
          "name": "type",
          "type": "'button' | 'submit' | 'reset'",
          "description": "Sets button type"
        }
      ]
    },
    {
      "name": "DataListControl",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Children of the data list control"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the DataList item control",
          "defaultValue": "''"
        }
      ]
    }
  ],
  "cssPrefix": [
    "pf-c-data-list"
  ],
  "examples": [
    "Basic",
    "Compact",
    "Checkboxes, actions and additional cells",
    "Actions: single and multiple",
    "Expandable",
    "Width modifiers",
    "Selectable rows",
    "Controlling text",
    "Draggable",
    "Small grid breakpoint"
  ]
};
pageData.liveContext = {
  CodeBranchIcon,
  AngleDownIcon,
  AngleRightIcon,
  css
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { DataList, DataListItem, DataListItemRow, DataListItemCells, DataListCell } from '@patternfly/react-core';\n\nexport const DataListBasic: React.FunctionComponent = () => (\n  <DataList aria-label=\"Simple data list example\">\n    <DataListItem aria-labelledby=\"simple-item1\">\n      <DataListItemRow>\n        <DataListItemCells\n          dataListCells={[\n            <DataListCell key=\"primary content\">\n              <span id=\"simple-item1\">Primary content</span>\n            </DataListCell>,\n            <DataListCell key=\"secondary content\">Secondary content</DataListCell>\n          ]}\n        />\n      </DataListItemRow>\n    </DataListItem>\n    <DataListItem aria-labelledby=\"simple-item2\">\n      <DataListItemRow>\n        <DataListItemCells\n          dataListCells={[\n            <DataListCell isFilled={false} key=\"secondary content fill\">\n              <span id=\"simple-item2\">Secondary content (pf-m-no-fill)</span>\n            </DataListCell>,\n            <DataListCell isFilled={false} alignRight key=\"secondary content align\">\n              Secondary content (pf-m-align-right pf-m-no-fill)\n            </DataListCell>\n          ]}\n        />\n      </DataListItemRow>\n    </DataListItem>\n  </DataList>\n);\n","title":"Basic","lang":"ts"}}>
      
    </Example>,
  'Compact': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { DataList, DataListItem, DataListItemRow, DataListItemCells, DataListCell } from '@patternfly/react-core';\n\nexport const DataListCompact: React.FunctionComponent = () => (\n  <DataList aria-label=\"Compact data list example\" isCompact>\n    <DataListItem aria-labelledby=\"simple-item1\">\n      <DataListItemRow>\n        <DataListItemCells\n          dataListCells={[\n            <DataListCell key=\"primary content\">\n              <span id=\"simple-item1\">Primary content</span>\n            </DataListCell>,\n            <DataListCell key=\"secondary content\">Secondary content</DataListCell>\n          ]}\n        />\n      </DataListItemRow>\n    </DataListItem>\n    <DataListItem aria-labelledby=\"simple-item2\">\n      <DataListItemRow>\n        <DataListItemCells\n          dataListCells={[\n            <DataListCell isFilled={false} key=\"secondary content fill\">\n              <span id=\"simple-item2\">Secondary content (pf-m-no-fill)</span>\n            </DataListCell>,\n            <DataListCell isFilled={false} alignRight key=\"secondary content align\">\n              Secondary content (pf-m-align-right pf-m-no-fill)\n            </DataListCell>\n          ]}\n        />\n      </DataListItemRow>\n    </DataListItem>\n  </DataList>\n);\n","title":"Compact","lang":"ts"}}>
      
    </Example>,
  'Checkboxes, actions and additional cells': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Button,\n  DataList,\n  DataListItem,\n  DataListItemCells,\n  DataListItemRow,\n  DataListCell,\n  DataListCheck,\n  DataListAction,\n  Dropdown,\n  DropdownItem,\n  DropdownPosition,\n  KebabToggle\n} from '@patternfly/react-core';\n\nexport const DataListCheckboxes: React.FunctionComponent = () => {\n  const [isOpen1, setIsOpen1] = React.useState(false);\n  const [isOpen2, setIsOpen2] = React.useState(false);\n  const [isOpen3, setIsOpen3] = React.useState(false);\n\n  const onToggle1 = isOpen1 => {\n    setIsOpen1(isOpen1);\n  };\n\n  const onSelect1 = () => {\n    setIsOpen1(!isOpen1);\n  };\n\n  const onToggle2 = isOpen2 => {\n    setIsOpen2(isOpen2);\n  };\n\n  const onSelect2 = () => {\n    setIsOpen2(!isOpen2);\n  };\n  const onToggle3 = isOpen3 => {\n    setIsOpen3(isOpen3);\n  };\n\n  const onSelect3 = () => {\n    setIsOpen3(!isOpen3);\n  };\n  return (\n    <DataList aria-label=\"Checkbox and action data list example\">\n      <DataListItem aria-labelledby=\"check-action-item1\">\n        <DataListItemRow>\n          <DataListCheck aria-labelledby=\"check-action-item1\" name=\"check-action-check1\" />\n          <DataListItemCells\n            dataListCells={[\n              <DataListCell key=\"primary content\">\n                <span id=\"check-action-item1\">Primary content</span> Dolor sit amet, consectetur adipisicing elit, sed\n                do eiusmod.\n              </DataListCell>,\n              <DataListCell key=\"secondary content 1\">\n                Secondary content. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.\n              </DataListCell>,\n              <DataListCell key=\"secondary content 2\">\n                <span>Tertiary content</span> Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.\n              </DataListCell>,\n              <DataListCell key=\"more content 1\">\n                <span>More content</span> Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.\n              </DataListCell>,\n              <DataListCell key=\"more content 2\">\n                <span>More content</span> Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.\n              </DataListCell>\n            ]}\n          />\n          <DataListAction\n            aria-labelledby=\"check-action-item1 check-action-action1\"\n            id=\"check-action-action1\"\n            aria-label=\"Actions\"\n            isPlainButtonAction\n          >\n            <Dropdown\n              isPlain\n              position={DropdownPosition.right}\n              isOpen={isOpen1}\n              onSelect={onSelect1}\n              toggle={<KebabToggle onToggle={onToggle1} />}\n              dropdownItems={[\n                <DropdownItem key=\"link\">Link</DropdownItem>,\n                <DropdownItem key=\"action\" component=\"button\">\n                  Action\n                </DropdownItem>,\n                <DropdownItem key=\"disabled link\" isDisabled>\n                  Disabled Link\n                </DropdownItem>\n              ]}\n            />\n          </DataListAction>\n        </DataListItemRow>\n      </DataListItem>\n      <DataListItem aria-labelledby=\"check-action-item2\">\n        <DataListItemRow>\n          <DataListCheck aria-labelledby=\"check-action-item2\" name=\"check-action-check2\" />\n          <DataListItemCells\n            dataListCells={[\n              <DataListCell key=\"primary content\">\n                <span id=\"check-action-item2\">Primary content - Lorem ipsum</span> dolor sit amet, consectetur\n                adipisicing elit, sed do eiusmod.\n              </DataListCell>,\n              <DataListCell key=\"secondary content\">\n                Secondary content. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.\n              </DataListCell>\n            ]}\n          />\n          <DataListAction\n            visibility={{ lg: 'hidden' }}\n            aria-labelledby=\"check-action-item2 check-action-action2\"\n            id=\"check-action-action2\"\n            aria-label=\"Actions\"\n            isPlainButtonAction\n          >\n            <Dropdown\n              isPlain\n              position={DropdownPosition.right}\n              isOpen={isOpen2}\n              onSelect={onSelect2}\n              toggle={<KebabToggle onToggle={onToggle2} />}\n              dropdownItems={[\n                <DropdownItem key=\"pri-action2\" component=\"button\">\n                  Primary\n                </DropdownItem>,\n                <DropdownItem key=\"sec-action2\" component=\"button\">\n                  Secondary\n                </DropdownItem>\n              ]}\n            />\n          </DataListAction>\n          <DataListAction\n            visibility={{ default: 'hidden', lg: 'visible' }}\n            aria-labelledby=\"check-action-item2 check-action-action2\"\n            id=\"check-action-action2\"\n            aria-label=\"Actions\"\n          >\n            <Button variant=\"primary\">Primary</Button>\n            <Button variant=\"secondary\">Secondary</Button>\n          </DataListAction>\n        </DataListItemRow>\n      </DataListItem>\n      <DataListItem aria-labelledby=\"check-action-item3\">\n        <DataListItemRow>\n          <DataListCheck aria-labelledby=\"check-action-item3\" name=\"check-action-check3\" />\n          <DataListItemCells\n            dataListCells={[\n              <DataListCell key=\"primary content\">\n                <span id=\"check-action-item3\">Primary content - Lorem ipsum</span> dolor sit amet, consectetur\n                adipisicing elit, sed do eiusmod.\n              </DataListCell>,\n              <DataListCell key=\"secondary content\">\n                Secondary content. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.\n              </DataListCell>\n            ]}\n          />\n          <DataListAction\n            visibility={{ xl: 'hidden' }}\n            aria-labelledby=\"check-action-item3 check-action-action3\"\n            id=\"check-actiokn-action3\"\n            aria-label=\"Actions\"\n            isPlainButtonAction\n          >\n            <Dropdown\n              isPlain\n              position={DropdownPosition.right}\n              isOpen={isOpen3}\n              onSelect={onSelect3}\n              toggle={<KebabToggle onToggle={onToggle3} />}\n              dropdownItems={[\n                <DropdownItem key=\"pri-action3\" component=\"button\">\n                  Primary\n                </DropdownItem>,\n                <DropdownItem key=\"sec1-action3\" component=\"button\">\n                  Secondary\n                </DropdownItem>,\n                <DropdownItem key=\"sec2-action3\" component=\"button\">\n                  Secondary\n                </DropdownItem>,\n                <DropdownItem key=\"sec3-action3\" component=\"button\">\n                  Secondary\n                </DropdownItem>\n              ]}\n            />\n          </DataListAction>\n          <DataListAction\n            visibility={{ default: 'hidden', xl: 'visible' }}\n            aria-labelledby=\"check-action-item3 check-action-action3\"\n            id=\"check-action-action3\"\n            aria-label=\"Actions\"\n          >\n            <Button variant=\"primary\">Primary</Button>\n            <Button variant=\"secondary\">Secondary</Button>\n            <Button variant=\"secondary\">Secondary</Button>\n            <Button variant=\"secondary\">Secondary</Button>\n          </DataListAction>\n        </DataListItemRow>\n      </DataListItem>\n    </DataList>\n  );\n};\n","title":"Checkboxes, actions and additional cells","lang":"ts"}}>
      
    </Example>,
  'Actions: single and multiple': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Button,\n  Dropdown,\n  DropdownItem,\n  DropdownPosition,\n  KebabToggle,\n  DataList,\n  DataListItem,\n  DataListCell,\n  DataListItemRow,\n  DataListItemCells,\n  DataListAction\n} from '@patternfly/react-core';\n\nexport const DataListActions: React.FunctionComponent = () => {\n  const [isOpen, setIsOpen] = React.useState(false);\n  const [isDeleted, setIsDeleted] = React.useState(false);\n\n  const onToggle = isOpen => {\n    setIsOpen(isOpen);\n  };\n\n  const onSelect = () => {\n    setIsOpen(!isOpen);\n  };\n\n  return (\n    <React.Fragment>\n      <DataList aria-label=\"single action data list example \">\n        {!isDeleted && (\n          <DataListItem aria-labelledby=\"single-action-item1\">\n            <DataListItemRow>\n              <DataListItemCells\n                dataListCells={[\n                  <DataListCell key=\"primary content\">\n                    <span id=\"single-action-item1\">Single actionable Primary content</span>\n                  </DataListCell>,\n                  <DataListCell key=\"secondary content\">Single actionable Secondary content</DataListCell>\n                ]}\n              />\n              <DataListAction\n                aria-labelledby=\"single-action-item1 single-action-action1\"\n                id=\"single-action-action1\"\n                aria-label=\"Actions\"\n              >\n                <Button\n                  onClick={() => {\n                    if (confirm('Are you sure?')) {\n                      setIsDeleted(true);\n                    }\n                  }}\n                  variant=\"primary\"\n                  key=\"delete-action\"\n                >\n                  Delete\n                </Button>\n              </DataListAction>\n            </DataListItemRow>\n          </DataListItem>\n        )}\n        <DataListItem aria-labelledby=\"multi-actions-item1\">\n          <DataListItemRow>\n            <DataListItemCells\n              dataListCells={[\n                <DataListCell key=\"primary content\">\n                  <span id=\"multi-actions-item1\">Multi actions Primary content</span>\n                </DataListCell>,\n                <DataListCell key=\"secondary content\">Multi actions Secondary content</DataListCell>\n              ]}\n            />\n            <DataListAction\n              aria-labelledby=\"multi-actions-item1 multi-actions-action1\"\n              id=\"multi-actions-action1\"\n              aria-label=\"Actions\"\n              isPlainButtonAction\n            >\n              <Dropdown\n                isPlain\n                position={DropdownPosition.right}\n                isOpen={isOpen}\n                onSelect={onSelect}\n                toggle={<KebabToggle onToggle={onToggle} />}\n                dropdownItems={[\n                  <DropdownItem key=\"link\">Link</DropdownItem>,\n                  <DropdownItem key=\"action\" component=\"button\">\n                    Action\n                  </DropdownItem>,\n                  <DropdownItem key=\"disabled link\" isDisabled>\n                    Disabled Link\n                  </DropdownItem>\n                ]}\n              />\n            </DataListAction>\n          </DataListItemRow>\n        </DataListItem>\n      </DataList>\n    </React.Fragment>\n  );\n};\n","title":"Actions: single and multiple","lang":"ts"}}>
      
    </Example>,
  'Expandable': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  DataList,\n  DataListItem,\n  DataListItemRow,\n  DataListCell,\n  DataListAction,\n  DataListToggle,\n  DataListContent,\n  DataListItemCells,\n  Dropdown,\n  DropdownItem,\n  DropdownPosition,\n  KebabToggle\n} from '@patternfly/react-core';\nimport CodeBranchIcon from '@patternfly/react-icons/dist/esm/icons/code-branch-icon';\n\nexport const DataListExpandable: React.FunctionComponent = () => {\n  const [isOpen1, setIsOpen1] = React.useState(false);\n  const [isOpen2, setIsOpen2] = React.useState(false);\n  const [isOpen3, setIsOpen3] = React.useState(false);\n  const [expanded, setExpanded] = React.useState(['ex-toggle1', 'ex-toggle3']);\n\n  const onToggle1 = isOpen1 => {\n    setIsOpen1(isOpen1);\n  };\n\n  const onSelect1 = () => {\n    setIsOpen1(!isOpen1);\n  };\n\n  const onToggle2 = isOpen2 => {\n    setIsOpen2(isOpen2);\n  };\n\n  const onSelect2 = () => {\n    setIsOpen2(!isOpen2);\n  };\n  const onToggle3 = isOpen3 => {\n    setIsOpen3(isOpen3);\n  };\n\n  const onSelect3 = () => {\n    setIsOpen3(!isOpen3);\n  };\n\n  const toggle = id => {\n    const index = expanded.indexOf(id);\n    const newExpanded =\n      index >= 0 ? [...expanded.slice(0, index), ...expanded.slice(index + 1, expanded.length)] : [...expanded, id];\n    setExpanded(newExpanded);\n  };\n  return (\n    <React.Fragment>\n      <DataList aria-label=\"Expandable data list example\">\n        <DataListItem aria-labelledby=\"ex-item1\" isExpanded={expanded.includes('ex-toggle1')}>\n          <DataListItemRow>\n            <DataListToggle\n              onClick={() => toggle('ex-toggle1')}\n              isExpanded={expanded.includes('ex-toggle1')}\n              id=\"ex-toggle1\"\n              aria-controls=\"ex-expand1\"\n            />\n            <DataListItemCells\n              dataListCells={[\n                <DataListCell isIcon key=\"icon\">\n                  <CodeBranchIcon />\n                </DataListCell>,\n                <DataListCell key=\"primary content\">\n                  <div id=\"ex-item1\">Primary content</div>\n                  <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>\n                  <a href=\"#\">link</a>\n                </DataListCell>,\n                <DataListCell key=\"secondary content\">\n                  <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>\n                </DataListCell>,\n                <DataListCell key=\"secondary content 2\">\n                  <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>\n                </DataListCell>\n              ]}\n            />\n            <DataListAction\n              aria-labelledby=\"ex-item1 ex-action1\"\n              id=\"ex-action1\"\n              aria-label=\"Actions\"\n              isPlainButtonAction\n            >\n              <Dropdown\n                isPlain\n                position={DropdownPosition.right}\n                isOpen={isOpen1}\n                onSelect={onSelect1}\n                toggle={<KebabToggle onToggle={onToggle1} />}\n                dropdownItems={[\n                  <DropdownItem key=\"link\">Link</DropdownItem>,\n                  <DropdownItem key=\"action\" component=\"button\">\n                    Action\n                  </DropdownItem>,\n                  <DropdownItem key=\"disabled link\" isDisabled>\n                    Disabled Link\n                  </DropdownItem>\n                ]}\n              />\n            </DataListAction>\n          </DataListItemRow>\n          <DataListContent\n            aria-label=\"Primary Content Details\"\n            id=\"ex-expand1\"\n            isHidden={!expanded.includes('ex-toggle1')}\n          >\n            <p>\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et\n              dolore magna aliqua.\n            </p>\n          </DataListContent>\n        </DataListItem>\n        <DataListItem aria-labelledby=\"ex-item2\" isExpanded={expanded.includes('ex-toggle2')}>\n          <DataListItemRow>\n            <DataListToggle\n              onClick={() => toggle('ex-toggle2')}\n              isExpanded={expanded.includes('ex-toggle2')}\n              id=\"ex-toggle2\"\n              aria-controls=\"ex-expand2\"\n            />\n            <DataListItemCells\n              dataListCells={[\n                <DataListCell isIcon key=\"icon\">\n                  <CodeBranchIcon />\n                </DataListCell>,\n                <DataListCell key=\"secondary content\">\n                  <div id=\"ex-item2\">Secondary content</div>\n                  <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>\n                </DataListCell>,\n                <DataListCell key=\"secondary content 2\">\n                  <span>Lorem ipsum dolor sit amet.</span>\n                </DataListCell>,\n                <DataListCell key=\"secondary content3\">\n                  <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>\n                </DataListCell>\n              ]}\n            />\n            <DataListAction\n              aria-labelledby=\"ex-item2 ex-action2\"\n              id=\"ex-action2\"\n              aria-label=\"Actions\"\n              isPlainButtonAction\n            >\n              <Dropdown\n                isPlain\n                position={DropdownPosition.right}\n                isOpen={isOpen2}\n                onSelect={onSelect2}\n                toggle={<KebabToggle onToggle={onToggle2} />}\n                dropdownItems={[\n                  <DropdownItem key=\"link\">Link</DropdownItem>,\n                  <DropdownItem key=\"action\" component=\"button\">\n                    Action\n                  </DropdownItem>,\n                  <DropdownItem key=\"disabled link\" isDisabled>\n                    Disabled Link\n                  </DropdownItem>\n                ]}\n              />\n            </DataListAction>\n          </DataListItemRow>\n          <DataListContent\n            aria-label=\"Primary Content Details\"\n            id=\"ex-expand2\"\n            isHidden={!expanded.includes('ex-toggle2')}\n          >\n            <p>\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et\n              dolore magna aliqua.\n            </p>\n          </DataListContent>\n        </DataListItem>\n        <DataListItem aria-labelledby=\"ex-item3\" isExpanded={expanded.includes('ex-toggle3')}>\n          <DataListItemRow>\n            <DataListToggle\n              onClick={() => toggle('ex-toggle3')}\n              isExpanded={expanded.includes('ex-toggle3')}\n              id=\"ex-toggle3\"\n              aria-controls=\"ex-expand3\"\n            />\n            <DataListItemCells\n              dataListCells={[\n                <DataListCell isIcon key=\"icon\">\n                  <CodeBranchIcon />\n                </DataListCell>,\n                <DataListCell key=\"tertiary content\">\n                  <div id=\"ex-item3\">Tertiary content</div>\n                  <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>\n                </DataListCell>,\n                <DataListCell key=\"secondary content\">\n                  <span>Lorem ipsum dolor sit amet.</span>\n                </DataListCell>,\n                <DataListCell key=\"secondary content 2\">\n                  <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>\n                </DataListCell>\n              ]}\n            />\n            <DataListAction\n              aria-labelledby=\"ex-item3 ex-action3\"\n              id=\"ex-action3\"\n              aria-label=\"Actions\"\n              isPlainButtonAction\n            >\n              <Dropdown\n                isPlain\n                position={DropdownPosition.right}\n                isOpen={isOpen3}\n                onSelect={onSelect3}\n                toggle={<KebabToggle onToggle={onToggle3} />}\n                dropdownItems={[\n                  <DropdownItem key=\"link\">Link</DropdownItem>,\n                  <DropdownItem key=\"action\" component=\"button\">\n                    Action\n                  </DropdownItem>,\n                  <DropdownItem key=\"disabled link\" isDisabled>\n                    Disabled Link\n                  </DropdownItem>\n                ]}\n              />\n            </DataListAction>\n          </DataListItemRow>\n          <DataListContent\n            aria-label=\"Primary Content Details\"\n            id=\"ex-expand3\"\n            isHidden={!expanded.includes('ex-toggle3')}\n            hasNoPadding\n          >\n            This expanded section has no padding.\n          </DataListContent>\n        </DataListItem>\n      </DataList>\n    </React.Fragment>\n  );\n};\n","title":"Expandable","lang":"ts"}}>
      
    </Example>,
  'Width modifiers': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  DataList,\n  DataListItem,\n  DataListCell,\n  DataListCheck,\n  DataListAction,\n  DataListToggle,\n  DataListContent,\n  DataListItemCells,\n  DataListItemRow,\n  Dropdown,\n  DropdownItem,\n  KebabToggle,\n  DropdownPosition,\n  Text,\n  TextVariants,\n  TextContent\n} from '@patternfly/react-core';\n\nexport const DataListWidthModifiers: React.FunctionComponent = () => {\n  const [show, setShow] = React.useState(true);\n  const [isOpen1, setIsOpen1] = React.useState(false);\n  const [isOpen2, setIsOpen2] = React.useState(false);\n\n  const onToggle1 = isOpen1 => {\n    setIsOpen1(isOpen1);\n  };\n\n  const onSelect1 = () => {\n    setIsOpen1(!isOpen1);\n  };\n\n  const onToggle2 = isOpen2 => {\n    setIsOpen2(isOpen2);\n  };\n\n  const onSelect2 = () => {\n    setIsOpen2(!isOpen2);\n  };\n\n  const previewPlaceholder = {\n    display: 'block',\n    width: '100%',\n    padding: '.25rem .5rem',\n    color: '#004e8a',\n    backgroundColor: '#def3ff',\n    border: '1px solid rgba(0,0,0,.1)',\n    borderRadius: '4px'\n  };\n\n  return (\n    <>\n      <div key=\"example-1\">\n        <TextContent>\n          <Text component={TextVariants.h4}>Default fitting - example 1</Text>\n        </TextContent>\n        <DataList aria-label=\"Width modifier data list example 1\">\n          <DataListItem aria-labelledby=\"width-ex1-item1\">\n            <DataListItemRow>\n              <DataListCheck aria-labelledby=\"width-ex1-item1\" name=\"width-ex1-item1\" />\n              <DataListItemCells\n                dataListCells={[\n                  <DataListCell key=\"default\">\n                    <div style={previewPlaceholder}>\n                      <b id=\"width-ex1-item1\">default</b>\n                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>\n                    </div>\n                  </DataListCell>,\n                  <DataListCell key=\"default2\">\n                    <div style={previewPlaceholder}>\n                      <b>default</b>\n                      <p>\n                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut\n                        labore et dolore magna aliqua.\n                      </p>\n                    </div>\n                  </DataListCell>\n                ]}\n              />\n            </DataListItemRow>\n          </DataListItem>\n        </DataList>\n      </div>\n      <div key=\"example-2\">\n        <TextContent>\n          <Text component={TextVariants.h4}>Flex modifiers - example 2</Text>\n        </TextContent>\n        <DataList aria-label=\"Width modifier data list example 2\">\n          <DataListItem aria-labelledby=\"width-ex2-item1\">\n            <DataListItemRow>\n              <DataListCheck aria-labelledby=\"width-ex2-item1\" name=\"width-ex2-item1\" />\n              <DataListItemCells\n                dataListCells={[\n                  <DataListCell width={2} key=\"width 2\">\n                    <div style={previewPlaceholder}>\n                      <b id=\"width-ex2-item1\">width 2</b>\n                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>\n                    </div>\n                  </DataListCell>,\n                  <DataListCell width={4} key=\"width 4\">\n                    <div style={previewPlaceholder}>\n                      <b>width 4</b>\n                      <p>Lorem ipsum dolor sit amet.</p>\n                    </div>\n                  </DataListCell>\n                ]}\n              />\n              <DataListAction\n                aria-labelledby=\"width-ex2-item1 width-ex2-action1\"\n                id=\"width-ex2-action1\"\n                aria-label=\"Actions\"\n                isPlainButtonAction\n              >\n                <Dropdown\n                  isPlain\n                  position={DropdownPosition.right}\n                  isOpen={isOpen1}\n                  onSelect={onSelect1}\n                  toggle={<KebabToggle onToggle={onToggle1} />}\n                  dropdownItems={[\n                    <DropdownItem key=\"link\">Link</DropdownItem>,\n                    <DropdownItem key=\"action\" component=\"button\">\n                      Action\n                    </DropdownItem>,\n                    <DropdownItem key=\"disabled link\" isDisabled>\n                      Disabled Link\n                    </DropdownItem>\n                  ]}\n                />\n              </DataListAction>\n            </DataListItemRow>\n          </DataListItem>\n        </DataList>\n      </div>\n      <div key=\"example-3\">\n        <TextContent>\n          <Text component={TextVariants.h4}>Flex modifiers - example 3</Text>\n        </TextContent>\n        <DataList aria-label=\"Width modifier data list example 3\">\n          <DataListItem aria-labelledby=\"width-ex3-item1\" isExpanded={show}>\n            <DataListItemRow>\n              <DataListToggle\n                isExpanded={show}\n                id=\"width-ex3-toggle1\"\n                aria-controls=\"width-ex3-expand1\"\n                onClick={() => setShow(!show)}\n              />\n              <DataListCheck aria-labelledby=\"width-ex3-item1\" name=\"width-ex3-item1\" />\n              <DataListItemCells\n                dataListCells={[\n                  <DataListCell width={5} key=\"width 5\">\n                    <div style={previewPlaceholder}>\n                      <b id=\"width-ex3-item1\">width 5</b>\n                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>\n                    </div>\n                  </DataListCell>,\n                  <DataListCell width={2} key=\"width 2\">\n                    <div style={previewPlaceholder}>\n                      <b>width 2</b>\n                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>\n                    </div>\n                  </DataListCell>,\n                  <DataListCell key=\"default\">\n                    <div style={previewPlaceholder}>default</div>\n                  </DataListCell>\n                ]}\n              />\n              <DataListAction\n                aria-labelledby=\"width-ex3-item1 width-ex3-action1\"\n                id=\"width-ex3-action1\"\n                aria-label=\"Actions\"\n                isPlainButtonAction\n              >\n                <Dropdown\n                  isPlain\n                  position={DropdownPosition.right}\n                  isOpen={isOpen2}\n                  onSelect={onSelect2}\n                  toggle={<KebabToggle onToggle={onToggle2} />}\n                  dropdownItems={[\n                    <DropdownItem key=\"link\">Link</DropdownItem>,\n                    <DropdownItem key=\"action\" component=\"button\">\n                      Action\n                    </DropdownItem>,\n                    <DropdownItem key=\"disabled link\" isDisabled>\n                      Disabled Link\n                    </DropdownItem>\n                  ]}\n                />\n              </DataListAction>\n            </DataListItemRow>\n            <DataListContent aria-label=\"Primary Content Details\" id=\"width-ex3-expand1\" isHidden={!show}>\n              <p>\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et\n                dolore magna aliqua.\n              </p>\n            </DataListContent>\n          </DataListItem>\n        </DataList>\n      </div>\n    </>\n  );\n};\n","title":"Width modifiers","lang":"ts"}}>
      
    </Example>,
  'Selectable rows': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Dropdown,\n  DropdownItem,\n  DropdownPosition,\n  KebabToggle,\n  DataList,\n  DataListItem,\n  DataListCell,\n  DataListItemRow,\n  DataListItemCells,\n  DataListAction\n} from '@patternfly/react-core';\n\nexport const DataListSelectableRows: React.FunctionComponent = () => {\n  const [isOpen1, setIsOpen1] = React.useState(false);\n  const [isOpen2, setIsOpen2] = React.useState(false);\n  const [selectedDataListItemId, setSelectedDataListItemId] = React.useState('');\n\n  const onToggle1 = isOpen1 => {\n    setIsOpen1(isOpen1);\n  };\n\n  const onSelect1 = () => {\n    setIsOpen1(!isOpen1);\n  };\n\n  const onToggle2 = isOpen2 => {\n    setIsOpen2(isOpen2);\n  };\n\n  const onSelect2 = () => {\n    setIsOpen2(!isOpen2);\n  };\n\n  const onSelectDataListItem = id => {\n    setSelectedDataListItemId(id);\n  };\n\n  const handleInputChange = (id: string, _event: React.FormEvent<HTMLInputElement>) => {\n    setSelectedDataListItemId(id);\n  };\n\n  return (\n    <React.Fragment>\n      <DataList\n        aria-label=\"selectable data list example\"\n        selectedDataListItemId={selectedDataListItemId}\n        onSelectDataListItem={onSelectDataListItem}\n        selectableRow={{ type: 'single', onChange: handleInputChange }}\n      >\n        <DataListItem aria-labelledby=\"selectable-action-item1\" id=\"item1\">\n          <DataListItemRow>\n            <DataListItemCells\n              dataListCells={[\n                <DataListCell key=\"primary content\">\n                  <span id=\"selectable-action-item1\">Single actionable Primary content</span>\n                </DataListCell>,\n                <DataListCell key=\"secondary content\">Single actionable Secondary content</DataListCell>\n              ]}\n            />\n            <DataListAction\n              aria-labelledby=\"selectable-action-item1 selectable-action-action1\"\n              id=\"selectable-action-action1\"\n              aria-label=\"Actions\"\n              isPlainButtonAction\n            >\n              <Dropdown\n                isPlain\n                position={DropdownPosition.right}\n                isOpen={isOpen1}\n                onSelect={onSelect1}\n                toggle={<KebabToggle onToggle={onToggle1} />}\n                dropdownItems={[\n                  <DropdownItem key=\"link\">Link</DropdownItem>,\n                  <DropdownItem key=\"action\" component=\"button\">\n                    Action\n                  </DropdownItem>,\n                  <DropdownItem key=\"disabled link\" isDisabled>\n                    Disabled Link\n                  </DropdownItem>\n                ]}\n              />\n            </DataListAction>\n          </DataListItemRow>\n        </DataListItem>\n        <DataListItem aria-labelledby=\"selectable-actions-item2\" id=\"item2\">\n          <DataListItemRow>\n            <DataListItemCells\n              dataListCells={[\n                <DataListCell key=\"primary content\">\n                  <span id=\"selectable-actions-item2\">Selectable actions Primary content</span>\n                </DataListCell>,\n                <DataListCell key=\"secondary content\">Selectable actions Secondary content</DataListCell>\n              ]}\n            />\n            <DataListAction\n              aria-labelledby=\"selectable-actions-item2 selectable-actions-action2\"\n              id=\"selectable-actions-action2\"\n              aria-label=\"Actions\"\n              isPlainButtonAction\n            >\n              <Dropdown\n                isPlain\n                position={DropdownPosition.right}\n                isOpen={isOpen2}\n                onSelect={onSelect2}\n                toggle={<KebabToggle onToggle={onToggle2} />}\n                dropdownItems={[\n                  <DropdownItem key=\"link\">Link</DropdownItem>,\n                  <DropdownItem key=\"action\" component=\"button\">\n                    Action\n                  </DropdownItem>,\n                  <DropdownItem key=\"disabled link\" isDisabled>\n                    Disabled Link\n                  </DropdownItem>\n                ]}\n              />\n            </DataListAction>\n          </DataListItemRow>\n        </DataListItem>\n      </DataList>\n    </React.Fragment>\n  );\n};\n","title":"Selectable rows","lang":"ts"}}>
      
    </Example>,
  'Controlling text': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  DataList,\n  DataListItem,\n  DataListItemRow,\n  DataListItemCells,\n  DataListCell,\n  DataListWrapModifier\n} from '@patternfly/react-core';\n\nexport const DataListControllingText: React.FunctionComponent = () => (\n  <DataList aria-label=\"Simple data list example\">\n    <DataListItem aria-labelledby=\"simple-item1\">\n      <DataListItemRow>\n        <DataListItemCells\n          dataListCells={[\n            <DataListCell key=\"primary content\" wrapModifier={DataListWrapModifier.breakWord}>\n              <span id=\"simple-item1\">Primary content</span>\n            </DataListCell>,\n            <DataListCell key=\"secondary content\" wrapModifier={DataListWrapModifier.truncate}>\n              Really really really really really really really really really really really really really really long\n              description that should be truncated before it ends\n            </DataListCell>\n          ]}\n        />\n      </DataListItemRow>\n    </DataListItem>\n  </DataList>\n);\n","title":"Controlling text","lang":"ts"}}>
      
    </Example>,
  'Draggable': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  DataList,\n  DataListItem,\n  DataListCell,\n  DataListItemRow,\n  DataListCheck,\n  DataListControl,\n  DataListDragButton,\n  DataListItemCells,\n  DragDrop,\n  Draggable,\n  Droppable\n} from '@patternfly/react-core';\n\ninterface ItemType {\n  id: string;\n  content: string;\n}\n\nconst getItems = (count: number) =>\n  Array.from({ length: count }, (_, idx) => idx).map(idx => ({\n    id: `item-${idx}`,\n    content: `item ${idx} `.repeat(idx === 4 ? 20 : 1)\n  }));\n\nconst reorder = (list: ItemType[], startIndex: number, endIndex: number) => {\n  const result = list;\n  const [removed] = result.splice(startIndex, 1);\n  result.splice(endIndex, 0, removed);\n  return result;\n};\n\nexport const DataListDraggable: React.FunctionComponent = () => {\n  const [items, setItems] = React.useState(getItems(10));\n  const [liveText, setLiveText] = React.useState('');\n\n  function onDrag(source) {\n    setLiveText(`Started dragging ${items[source.index].content}`);\n    // Return true to allow drag\n    return true;\n  }\n\n  function onDragMove(source, dest) {\n    const newText = dest ? `Move ${items[source.index].content} to ${items[dest.index].content}` : 'Invalid drop zone';\n    if (newText !== liveText) {\n      setLiveText(newText);\n    }\n  }\n\n  function onDrop(source, dest) {\n    if (dest) {\n      const newItems = reorder(items, source.index, dest.index);\n      setItems(newItems);\n\n      setLiveText('Dragging finished.');\n      return true; // Signal that this is a valid drop and not to animate the item returning home.\n    } else {\n      setLiveText('Dragging cancelled. List unchanged.');\n    }\n  }\n\n  return (\n    <DragDrop onDrag={onDrag} onDragMove={onDragMove} onDrop={onDrop}>\n      <Droppable hasNoWrapper>\n        <DataList aria-label=\"draggable data list example\" isCompact>\n          {items.map(({ id, content }) => (\n            <Draggable key={id} hasNoWrapper>\n              <DataListItem aria-labelledby={id} ref={React.createRef()}>\n                <DataListItemRow>\n                  <DataListControl>\n                    <DataListDragButton\n                      aria-label=\"Reorder\"\n                      aria-labelledby={id}\n                      aria-describedby=\"Press space or enter to begin dragging, and use the arrow keys to navigate up or down. Press enter to confirm the drag, or any other key to cancel the drag operation.\"\n                      aria-pressed=\"false\"\n                    />\n                    <DataListCheck aria-labelledby={id} name={id} otherControls />\n                  </DataListControl>\n                  <DataListItemCells\n                    dataListCells={[\n                      <DataListCell key={id}>\n                        <span id={id}>{content}</span>\n                      </DataListCell>\n                    ]}\n                  />\n                </DataListItemRow>\n              </DataListItem>\n            </Draggable>\n          ))}\n        </DataList>\n      </Droppable>\n      <div className=\"pf-screen-reader\" aria-live=\"assertive\">\n        {liveText}\n      </div>\n    </DragDrop>\n  );\n};\n","title":"Draggable","lang":"ts","isBeta":true}}>
      
      <p {...{"className":"ws-p"}}>
        {`Draggable data lists used to have their own HTML5-based API for drag and drop, which wasn't able to fulfill requirements such as custom styling on items being dragged. So we wrote generic `}
        
        <code {...{"className":"ws-code"}}>
          {`DragDrop`}
        </code>
        {`, `}
        
        <code {...{"className":"ws-code"}}>
          {`Draggable`}
        </code>
        {`, and `}
        
        <code {...{"className":"ws-code"}}>
          {`Droppable`}
        </code>
        {` components for this purpose. Use those new components instead of the deprecated (and buggy!) HTML5-based API.`}
      </p>
      
      <p {...{"className":"ws-p"}}>
        {`Note: Keyboard accessibility and screen reader accessibility for the `}
        
        <code {...{"className":"ws-code"}}>
          {`DragDrop`}
        </code>
        {` component are still in development.`}
      </p>
    </Example>,
  'Small grid breakpoint': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { DataList, DataListItem, DataListItemRow, DataListItemCells, DataListCell } from '@patternfly/react-core';\n\nexport const DataListSmGridBreakpoint: React.FunctionComponent = () => (\n  <DataList aria-label=\"Simple data list example\" gridBreakpoint=\"sm\">\n    <DataListItem aria-labelledby=\"simple-item1\">\n      <DataListItemRow>\n        <DataListItemCells\n          dataListCells={[\n            <DataListCell key=\"primary content\">\n              <span id=\"simple-item1\">Primary content</span>\n            </DataListCell>,\n            <DataListCell key=\"secondary content\">\n              Really really really really really really really really really really really really really really long\n              description that should be truncated before it ends\n            </DataListCell>\n          ]}\n        />\n      </DataListItemRow>\n    </DataListItem>\n  </DataList>\n);\n","title":"Small grid breakpoint","lang":"ts"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["Compact"])}
    {React.createElement(pageData.examples["Checkboxes, actions and additional cells"])}
    {React.createElement(pageData.examples["Actions: single and multiple"])}
    {React.createElement(pageData.examples["Expandable"])}
    {React.createElement(pageData.examples["Width modifiers"])}
    {React.createElement(pageData.examples["Selectable rows"])}
    {React.createElement(pageData.examples["Controlling text"])}
    {React.createElement(pageData.examples["Draggable"])}
    {React.createElement(pageData.examples["Small grid breakpoint"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsDataListReactDocs';
Component.pageData = pageData;

export default Component;
