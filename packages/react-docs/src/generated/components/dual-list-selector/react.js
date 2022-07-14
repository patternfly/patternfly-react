import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import AngleDoubleLeftIcon from '@patternfly/react-icons/dist/esm/icons/angle-double-left-icon';
import AngleLeftIcon from '@patternfly/react-icons/dist/esm/icons/angle-left-icon';
import AngleDoubleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-double-right-icon';
import AngleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-right-icon';
import PficonSortCommonAscIcon from '@patternfly/react-icons/dist/esm/icons/pficon-sort-common-asc-icon';
const pageData = {
  "id": "Dual list selector",
  "section": "components",
  "source": "react",
  "slug": "/components/dual-list-selector/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/DualListSelector/examples/DualListSelector.md",
  "propComponents": [
    {
      "name": "DualListSelector",
      "description": "",
      "props": [
        {
          "name": "addAll",
          "type": "(newAvailableOptions: React.ReactNode[], newChosenOptions: React.ReactNode[]) => void",
          "description": "Optional callback for the dynamically built add all button"
        },
        {
          "name": "addAllAriaLabel",
          "type": "string",
          "description": "Accessible label for the dynamically built add all button",
          "defaultValue": "'Add all'"
        },
        {
          "name": "addAllTooltip",
          "type": "React.ReactNode",
          "description": "Tooltip content for the dynamically built add all button"
        },
        {
          "name": "addAllTooltipProps",
          "type": "any",
          "description": "Additonal tooltip properties for the dynamically built add all tooltip"
        },
        {
          "name": "addSelected",
          "type": "(newAvailableOptions: React.ReactNode[], newChosenOptions: React.ReactNode[]) => void",
          "description": "Optional callback for the dynamically built add selected button"
        },
        {
          "name": "addSelectedAriaLabel",
          "type": "string",
          "description": "Accessible label for the dynamically built add selected button",
          "defaultValue": "'Add selected'"
        },
        {
          "name": "addSelectedTooltip",
          "type": "React.ReactNode",
          "description": "Tooltip content for the dynamically built add selected button"
        },
        {
          "name": "addSelectedTooltipProps",
          "type": "any",
          "description": "Additonal tooltip properties for the dynamically built add selected tooltip"
        },
        {
          "name": "availableOptions",
          "type": "React.ReactNode[] | DualListSelectorTreeItemData[]",
          "description": "Options to display in the dynamically built available options pane. When using trees, the options should be in the DualListSelectorTreeItemData[] format.",
          "defaultValue": "[]"
        },
        {
          "name": "availableOptionsActions",
          "type": "React.ReactNode[]",
          "description": "Actions to be displayed above the dynamically built available options pane."
        },
        {
          "name": "availableOptionsSearchAriaLabel",
          "type": "string",
          "description": "Accessible label for the search input on the dynamically built available options pane.",
          "defaultValue": "'Available search input'"
        },
        {
          "name": "availableOptionsStatus",
          "type": "string",
          "description": "Status message to display above the dynamically built available options pane."
        },
        {
          "name": "availableOptionsTitle",
          "type": "string",
          "description": "Title applied to the dynamically built available options pane.",
          "defaultValue": "'Available options'"
        },
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content to be rendered in the dual list selector. Panes & controls will not be built dynamically when children are provided.",
          "defaultValue": "''"
        },
        {
          "name": "chosenOptions",
          "type": "React.ReactNode[] | DualListSelectorTreeItemData[]",
          "description": "Options to display in the dynamically built chosen options pane. When using trees, the options should be in the DualListSelectorTreeItemData[] format.",
          "defaultValue": "[]"
        },
        {
          "name": "chosenOptionsActions",
          "type": "React.ReactNode[]",
          "description": "Actions to be displayed above the dynamically built chosen options pane."
        },
        {
          "name": "chosenOptionsSearchAriaLabel",
          "type": "string",
          "description": "Accessible label for the search input on the dynamically built chosen options pane.",
          "defaultValue": "'Chosen search input'"
        },
        {
          "name": "chosenOptionsStatus",
          "type": "string",
          "description": "Status message to display above the dynamically built chosen options pane."
        },
        {
          "name": "chosenOptionsTitle",
          "type": "string",
          "description": "Title applied to the dynamically built chosen options pane.",
          "defaultValue": "'Chosen options'"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes applied to the dual list selector."
        },
        {
          "name": "controlsAriaLabel",
          "type": "string",
          "description": "Accessible label for the dynamically built controls between the two panes.",
          "defaultValue": "'Selector controls'"
        },
        {
          "name": "filterOption",
          "type": "(option: React.ReactNode, input: string) => boolean",
          "description": "Optional filter function for custom filtering based on search string. Used with a dynamically built search input."
        },
        {
          "name": "id",
          "type": "string",
          "description": "Id of the dual list selector.",
          "defaultValue": "getUniqueId('dual-list-selector')"
        },
        {
          "name": "isDisabled",
          "type": "boolean",
          "description": "Flag indicating if the dual list selector is in a disabled state",
          "defaultValue": "false"
        },
        {
          "name": "isSearchable",
          "type": "boolean",
          "description": "Flag indicating a search bar should be included above both the dynamically built available and chosen panes."
        },
        {
          "name": "isTree",
          "type": "boolean",
          "description": "Flag indicating if the dual list selector uses trees instead of simple lists",
          "defaultValue": "false"
        },
        {
          "name": "onAvailableOptionsSearchInputChanged",
          "type": "(value: string, event: React.FormEvent<HTMLInputElement>) => void",
          "description": "A callback for when the search input value for the dynamically built available options changes."
        },
        {
          "name": "onChosenOptionsSearchInputChanged",
          "type": "(value: string, event: React.FormEvent<HTMLInputElement>) => void",
          "description": "A callback for when the search input value for the dynamically built chosen options changes."
        },
        {
          "name": "onListChange",
          "type": "(newAvailableOptions: React.ReactNode[], newChosenOptions: React.ReactNode[]) => void",
          "description": "Callback fired every time dynamically built options are chosen or removed"
        },
        {
          "name": "onOptionCheck",
          "type": "(\n  e: React.MouseEvent | React.ChangeEvent<HTMLInputElement> | React.KeyboardEvent,\n  checked: boolean,\n  checkedId: string,\n  newCheckedItems: string[]\n) => void",
          "description": "Optional callback fired when a dynamically built option is checked"
        },
        {
          "name": "onOptionSelect",
          "type": "(\n  e: React.MouseEvent | React.ChangeEvent | React.KeyboardEvent,\n  index: number,\n  isChosen: boolean,\n  id: string,\n  itemData: any,\n  parentData: any\n) => void",
          "description": "Optional callback fired when a dynamically built option is selected"
        },
        {
          "name": "removeAll",
          "type": "(newAvailableOptions: React.ReactNode[], newChosenOptions: React.ReactNode[]) => void",
          "description": "Optional callback for the dynamically built remove all button"
        },
        {
          "name": "removeAllAriaLabel",
          "type": "string",
          "description": "Accessible label for the dynamically built remove all button",
          "defaultValue": "'Remove all'"
        },
        {
          "name": "removeAllTooltip",
          "type": "React.ReactNode",
          "description": "Tooltip content for the dynamically built remove all button"
        },
        {
          "name": "removeAllTooltipProps",
          "type": "any",
          "description": "Additonal tooltip properties for the dynamically built remove all tooltip"
        },
        {
          "name": "removeSelected",
          "type": "(newAvailableOptions: React.ReactNode[], newChosenOptions: React.ReactNode[]) => void",
          "description": "Optional callback for the dynamically built remove selected button"
        },
        {
          "name": "removeSelectedAriaLabel",
          "type": "string",
          "description": "Accessible label for the dynamically built remove selected button",
          "defaultValue": "'Remove selected'"
        },
        {
          "name": "removeSelectedTooltip",
          "type": "React.ReactNode",
          "description": "Tooltip content for the dynamically built remove selected button"
        },
        {
          "name": "removeSelectedTooltipProps",
          "type": "any",
          "description": "Additonal tooltip properties for the dynamically built remove selected tooltip"
        }
      ]
    },
    {
      "name": "DualListSelectorPane",
      "description": "",
      "props": [
        {
          "name": "actions",
          "type": "React.ReactNode[]",
          "description": "Actions to place above the pane."
        },
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "A dual list selector list or dual list selector tree to be rendered in the pane."
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes applied to the dual list selector pane.",
          "defaultValue": "''"
        },
        {
          "name": "id",
          "type": "string",
          "description": "Id of the pane.",
          "defaultValue": "getUniqueId('dual-list-selector-pane')"
        },
        {
          "name": "isChosen",
          "type": "boolean",
          "description": "Flag indicating if this pane is the chosen pane.",
          "defaultValue": "false"
        },
        {
          "name": "isDisabled",
          "type": "boolean",
          "description": "Flag indicating whether the component is disabled.",
          "defaultValue": "false"
        },
        {
          "name": "onSearch",
          "type": "(event: React.ChangeEvent<HTMLInputElement>) => void",
          "description": "Callback for search input. To be used when isSearchable is true."
        },
        {
          "name": "searchInput",
          "type": "React.ReactNode",
          "description": "A search input placed above the list at the top of the pane, before actions."
        },
        {
          "name": "status",
          "type": "string",
          "description": "Status to display above the pane.",
          "defaultValue": "''"
        },
        {
          "name": "title",
          "type": "React.ReactNode",
          "description": "Title of the pane.",
          "defaultValue": "''"
        }
      ]
    },
    {
      "name": "DualListSelectorControl",
      "description": "",
      "props": [
        {
          "name": "aria-label",
          "type": "string",
          "description": "Accessible label for the dual list selector control."
        },
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content to be rendered in the dual list selector control."
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes applied to the dual list selector control."
        },
        {
          "name": "isDisabled",
          "type": "boolean",
          "description": "Flag indicating the control is disabled."
        },
        {
          "name": "onClick",
          "type": "(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void",
          "description": "Callback fired when dual list selector control is selected."
        },
        {
          "name": "tooltipContent",
          "type": "React.ReactNode",
          "description": "Content to be displayed in a tooltip on hover of control."
        },
        {
          "name": "tooltipProps",
          "type": "any",
          "description": "Additional tooltip properties passed to the tooltip."
        }
      ]
    },
    {
      "name": "DualListSelectorControlsWrapper",
      "description": "",
      "props": [
        {
          "name": "aria-label",
          "type": "string",
          "description": "Accessible label for the dual list selector controls wrapper."
        },
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Anything that can be rendered inside of the wrapper."
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the wrapper."
        }
      ]
    },
    {
      "name": "DualListSelectorTree",
      "description": "",
      "props": [
        {
          "name": "data",
          "type": "DualListSelectorTreeItemData[] | (() => DualListSelectorTreeItemData[])",
          "description": "Data of the tree view",
          "required": true
        },
        {
          "name": "defaultAllExpanded",
          "type": "boolean",
          "description": "Sets the default expanded behavior",
          "defaultValue": "false"
        },
        {
          "name": "hasBadges",
          "type": "boolean",
          "description": "Flag indicating if all options should have badges",
          "defaultValue": "false"
        },
        {
          "name": "id",
          "type": "string",
          "description": "ID of the tree view"
        },
        {
          "name": "isDisabled",
          "type": "boolean",
          "description": "Callback fired when an option is checked",
          "defaultValue": "false"
        },
        {
          "name": "onOptionCheck",
          "type": "(\n  event: React.MouseEvent | React.ChangeEvent<HTMLInputElement> | React.KeyboardEvent,\n  isChecked: boolean,\n  itemData: DualListSelectorTreeItemData\n) => void",
          "description": ""
        }
      ]
    },
    {
      "name": "DualListSelectorTreeItemData",
      "description": "",
      "props": [
        {
          "name": "badgeProps",
          "type": "any",
          "description": "Additional properties to pass to the option badge"
        },
        {
          "name": "checkProps",
          "type": "any",
          "description": "Additional properties to pass to the option checkbox"
        },
        {
          "name": "children",
          "type": "DualListSelectorTreeItemData[]",
          "description": "Content rendered inside the dual list selector."
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes applied to the dual list selector."
        },
        {
          "name": "defaultExpanded",
          "type": "boolean",
          "description": "Flag indicating this option is expanded by default."
        },
        {
          "name": "hasBadge",
          "type": "boolean",
          "description": "Flag indicating this option has a badge"
        },
        {
          "name": "id",
          "type": "string",
          "description": "ID of the option",
          "required": true
        },
        {
          "name": "isChecked",
          "type": "boolean",
          "description": "Checked state of the option",
          "required": true
        },
        {
          "name": "isDisabled",
          "type": "boolean",
          "description": "Flag indicating whether the component is disabled."
        },
        {
          "name": "onOptionCheck",
          "type": "(\n    event: React.MouseEvent | React.ChangeEvent<HTMLInputElement> | React.KeyboardEvent,\n    isChecked: boolean,\n    isChosen: boolean,\n    itemData: DualListSelectorTreeItemData\n  ) => void",
          "description": "Callback fired when an option is checked"
        },
        {
          "name": "parentId",
          "type": "string",
          "description": "Parent id of an option"
        },
        {
          "name": "text",
          "type": "string",
          "description": "Text of the option",
          "required": true
        }
      ]
    }
  ],
  "beta": true,
  "cssPrefix": [
    "pf-c-dual-list-selector"
  ],
  "examples": [
    "Basic",
    "Basic with tooltips",
    "Basic with search",
    "Using more complex options with actions",
    "Expandable options",
    "Composable dual list selector",
    "Reordering lists using drag and drop",
    "Composable dual list selector tree"
  ]
};
pageData.liveContext = {
  AngleDoubleLeftIcon,
  AngleLeftIcon,
  AngleDoubleRightIcon,
  AngleRightIcon,
  PficonSortCommonAscIcon
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { DualListSelector } from '@patternfly/react-core';\n\nclass BasicDualListSelector extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      availableOptions: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],\n      chosenOptions: []\n    };\n\n    this.onListChange = (newAvailableOptions, newChosenOptions) => {\n      this.setState({\n        availableOptions: newAvailableOptions.sort(),\n        chosenOptions: newChosenOptions.sort()\n      });\n    };\n  }\n\n  render() {\n    return (\n      <DualListSelector\n        availableOptions={this.state.availableOptions}\n        chosenOptions={this.state.chosenOptions}\n        onListChange={this.onListChange}\n        id=\"basicSelector\"\n      />\n    );\n  }\n}","title":"Basic","lang":"js"}}>
      
    </Example>,
  'Basic with tooltips': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { DualListSelector } from '@patternfly/react-core';\n\nclass BasicDualListSelector extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      availableOptions: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],\n      chosenOptions: []\n    };\n\n    this.onListChange = (newAvailableOptions, newChosenOptions) => {\n      this.setState({\n        availableOptions: newAvailableOptions.sort(),\n        chosenOptions: newChosenOptions.sort()\n      });\n    };\n  }\n\n  render() {\n    return (\n      <DualListSelector\n        availableOptions={this.state.availableOptions}\n        chosenOptions={this.state.chosenOptions}\n        onListChange={this.onListChange}\n        addAllTooltip=\"Add all options\"\n        addAllTooltipProps={{ position: 'top' }}\n        addSelectedTooltip=\"Add selected options\"\n        addSelectedTooltipProps={{ position: 'right' }}\n        removeSelectedTooltip=\"Remove selected options\"\n        removeSelectedTooltipProps={{ position: 'left' }}\n        removeAllTooltip=\"Remove all options\"\n        removeAllTooltipProps={{ position: 'bottom' }}\n        id=\"basicSelector\"\n      />\n    );\n  }\n}","title":"Basic with tooltips","lang":"js"}}>
      
    </Example>,
  'Basic with search': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { DualListSelector } from '@patternfly/react-core';\n\nclass BasicDualListSelectorWithSearch extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      availableOptions: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],\n      chosenOptions: []\n    };\n\n    this.onListChange = (newAvailableOptions, newChosenOptions) => {\n      this.setState({\n        availableOptions: newAvailableOptions.sort(),\n        chosenOptions: newChosenOptions.sort()\n      });\n    };\n  }\n\n  render() {\n    return (\n      <DualListSelector\n        isSearchable\n        availableOptions={this.state.availableOptions}\n        chosenOptions={this.state.chosenOptions}\n        onListChange={this.onListChange}\n        id=\"basicSelectorWithSearch\"\n      />\n    );\n  }\n}","title":"Basic with search","lang":"js"}}>
      
    </Example>,
  'Using more complex options with actions': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Button, ButtonVariant, Checkbox, Dropdown, DropdownItem, DualListSelector, KebabToggle } from '@patternfly/react-core';\nimport PficonSortCommonAscIcon from '@patternfly/react-icons/dist/esm/icons/pficon-sort-common-asc-icon';\n\nclass ComplexDualListSelector extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      availableOptions: [<span>Option 1</span>, <span>Option 3</span>, <span>Option 4</span>, <span>Option 2</span>],\n      chosenOptions: [],\n      isAvailableKebabOpen: false,\n      isChosenKebabOpen: false,\n      isDisabled: false\n    };\n\n    this.onSort = panel => {\n      if (panel === 'available') {\n        this.setState(prevState => {\n          const available = prevState.availableOptions.sort((a, b) => {\n            let returnValue = 0;\n            if (a.props.children > b.props.children) returnValue = 1;\n            if (a.props.children < b.props.children) returnValue = -1;\n            return returnValue;\n          });\n          return {\n            availableOptions: available\n          };\n        });\n      }\n\n      if (panel === 'chosen') {\n        this.setState(prevState => {\n          const chosen = prevState.chosenOptions.sort((a, b) => {\n            let returnValue = 0;\n            if (a.props.children > b.props.children) returnValue = 1;\n            if (a.props.children < b.props.children) returnValue = -1;\n            return returnValue;\n          });\n          return {\n            chosenOptions: chosen\n          };\n        });\n      }\n    };\n\n    this.onListChange = (newAvailableOptions, newChosenOptions) => {\n      this.setState({\n        availableOptions: newAvailableOptions,\n        chosenOptions: newChosenOptions\n      });\n    };\n\n    this.onToggle = (isOpen, pane) => {\n      this.setState(prevState => {\n        return {\n          isAvailableKebabOpen: pane === 'available' ? isOpen : prevState.isAvailableKebabOpen,\n          isChosenKebabOpen: pane === 'chosen' ? isOpen : prevState.isChosenKebabOpen\n        };\n      });\n    };\n\n    this.filterOption = (option, input) => {\n      return option.props.children.includes(input);\n    };\n  }\n\n  render() {\n    const dropdownItems = [\n      <DropdownItem key=\"link\">Link</DropdownItem>,\n      <DropdownItem key=\"action\" component=\"button\">\n        Action\n      </DropdownItem>,\n      <DropdownItem key=\"second action\" component=\"button\">\n        Second Action\n      </DropdownItem>\n    ];\n\n    const availableOptionsActions = [\n      <Button\n        variant={ButtonVariant.plain}\n        onClick={() => this.onSort('available')}\n        aria-label=\"Sort\"\n        key=\"availableSortButton\"\n        isDisabled={this.state.isDisabled}\n      >\n        <PficonSortCommonAscIcon />\n      </Button>,\n      <Dropdown\n        toggle={<KebabToggle isDisabled={this.state.isDisabled} onToggle={isOpen => this.onToggle(isOpen, 'available')} id=\"toggle-id-1\" />}\n        isOpen={this.state.isAvailableKebabOpen}\n        isPlain\n        dropdownItems={dropdownItems}\n        key=\"availableDropdown\"\n      />\n    ];\n\n    const chosenOptionsActions = [\n      <Button\n        variant={ButtonVariant.plain}\n        onClick={() => this.onSort('chosen')}\n        aria-label=\"Sort\"\n        key=\"chosenSortButton\"\n        isDisabled={this.state.isDisabled}\n      >\n        <PficonSortCommonAscIcon />\n      </Button>,\n      <Dropdown\n        toggle={<KebabToggle isDisabled={this.state.isDisabled} onToggle={isOpen => this.onToggle(isOpen, 'chosen')} id=\"toggle-id-2\" />}\n        isOpen={this.state.isChosenKebabOpen}\n        isPlain\n        dropdownItems={dropdownItems}\n        key=\"chosenDropdown\"\n      />\n    ];\n\n    return (\n      <React.Fragment>\n          <DualListSelector\n            isSearchable\n            availableOptions={this.state.availableOptions}\n            availableOptionsActions={availableOptionsActions}\n            chosenOptions={this.state.chosenOptions}\n            chosenOptionsActions={chosenOptionsActions}\n            addAll={this.onListChange}\n            removeAll={this.onListChange}\n            addSelected={this.onListChange}\n            removeSelected={this.onListChange}\n            filterOption={this.filterOption}\n            isDisabled={this.state.isDisabled}\n            id=\"withActions\"\n          />\n        <Checkbox\n          key=\"isDisabled\"\n          id=\"isDisabled\"\n          label=\"isDisabled\"\n          aria-label=\"isDisabled\"\n          isChecked={this.state.isDisabled}\n          onChange={() =>\n            this.setState({\n              isDisabled: !this.state.isDisabled\n            })\n          }\n        />\n      </React.Fragment>\n    );\n  }\n}","title":"Using more complex options with actions","lang":"js"}}>
      
    </Example>,
  'Expandable options': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { DualListSelector } from '@patternfly/react-core';\n\nclass TreeDualListSelector extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      chosenOptions: [\n        {\n          id: 'CF1',\n          text: 'Chosen Folder 1',\n          isChecked: false,\n          checkProps: { 'aria-label': 'Chosen Folder 1' },\n          hasBadge: true,\n          badgeProps: { isRead: true },\n          children: [\n            { id: 'CO1', text: 'Chosen Option 1', isChecked: false, checkProps: { 'aria-label': 'Chosen Option 1' } },\n            {\n              id: 'CF1A',\n              text: 'Chosen Folder 1A',\n              isChecked: false,\n              checkProps: { 'aria-label': 'Chosen Folder 1A' },\n              children: [\n                {\n                  id: 'CO2',\n                  text: 'Chosen Option 2',\n                  isChecked: false,\n                  checkProps: { 'aria-label': 'Chosen Option 2' }\n                },\n                {\n                  id: 'CO3',\n                  text: 'Chosen Option 3',\n                  isChecked: false,\n                  checkProps: { 'aria-label': 'Chosen Option 3' }\n                }\n              ]\n            },\n            { id: 'CO4', text: 'Chosen Option 4', isChecked: false, checkProps: { 'aria-label': 'Chosen Option 4' } }\n          ]\n        }\n      ],\n      availableOptions: [\n        {\n          id: 'F1',\n          text: 'Folder 1',\n          isChecked: false,\n          checkProps: { 'aria-label': 'Folder 1' },\n          hasBadge: true,\n          badgeProps: { isRead: true },\n          children: [\n            { id: 'O1', text: 'Option 1', isChecked: false, checkProps: { 'aria-label': 'Option 1' } },\n            {\n              id: 'F1A',\n              text: 'Folder 1A',\n              isChecked: false,\n              checkProps: { 'aria-label': 'Folder 1A' },\n              children: [\n                { id: 'O2', text: 'Option 2', isChecked: false, checkProps: { 'aria-label': 'Option 2' } },\n                { id: 'O3', text: 'Option 3', isChecked: false, checkProps: { 'aria-label': 'Option 3' } }\n              ]\n            },\n            { id: 'O4', text: 'Option 4', isChecked: false, checkProps: { 'aria-label': 'Option 4' } }\n          ]\n        },\n        { id: 'O5', text: 'Option 5', isChecked: false, checkProps: { 'aria-label': 'Option 5' } },\n        {\n          id: 'F2',\n          text: 'Folder 2',\n          isChecked: false,\n          checkProps: { 'aria-label': 'Folder 2' },\n          children: [\n            { id: 'O6', text: 'Option 6', isChecked: false, checkProps: { 'aria-label': 'Option 6' } },\n            { id: 'O7', text: 'Option 5', isChecked: false, checkProps: { 'aria-label': 'Option 5 duplicate' } }\n          ]\n        }\n      ]\n    };\n\n    this.onListChange = (newAvailableOptions, newChosenOptions) => {\n      this.setState({\n        availableOptions: newAvailableOptions,\n        chosenOptions: newChosenOptions\n      });\n    };\n  }\n\n  render() {\n    return (\n      <DualListSelector\n        availableOptions={this.state.availableOptions}\n        chosenOptions={this.state.chosenOptions}\n        onListChange={this.onListChange}\n        id=\"basicSelector\"\n        isSearchable\n        isTree\n      />\n    );\n  }\n}","title":"Expandable options","lang":"js"}}>
      
    </Example>,
  'Composable dual list selector': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { \n  Button,\n  ButtonVariant,\n  DualListSelector, \n  DualListSelectorPane,\n  DualListSelectorList,\n  DualListSelectorListItem,\n  DualListSelectorControlsWrapper,\n  DualListSelectorControl,\n  SearchInput\n} from '@patternfly/react-core';\nimport AngleDoubleLeftIcon from '@patternfly/react-icons/dist/esm/icons/angle-double-left-icon';\nimport AngleLeftIcon from '@patternfly/react-icons/dist/esm/icons/angle-left-icon';\nimport AngleDoubleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-double-right-icon';\nimport AngleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-right-icon';\nimport PficonSortCommonAscIcon from '@patternfly/react-icons/dist/esm/icons/pficon-sort-common-asc-icon';\n\nconst ComposableDualListSelector = () => {\n  const [availableOptions, setAvailableOptions] = React.useState([\n    { text: 'Apple', selected: false, isVisible: true },\n    { text: 'Banana', selected: false, isVisible: true },\n    { text: 'Pineapple', selected: false, isVisible: true },\n    { text: 'Orange', selected: false, isVisible: true },\n    { text: 'Grape', selected: false, isVisible: true },\n    { text: 'Peach', selected: false, isVisible: true },\n    { text: 'Strawberry', selected: false, isVisible: true }\n    ]);\n  const [chosenOptions, setChosenOptions] = React.useState([]);\n  const [availableFilter, setAvailableFilter] = React.useState('');\n  const [chosenFilter, setChosenFilter] = React.useState('');\n\n  // callback for moving selected options between lists\n  const moveSelected = (fromAvailable) => {\n    const sourceOptions = fromAvailable ? availableOptions : chosenOptions;\n    const destinationOptions = fromAvailable ? chosenOptions : availableOptions;\n    for (let i = 0; i < sourceOptions.length; i++) {\n      const option = sourceOptions[i];\n      if (option.selected && option.isVisible) {\n        sourceOptions.splice(i, 1);\n        destinationOptions.push(option);\n        option.selected = false;\n        i--;\n      }\n    }\n    if (fromAvailable) {\n      setAvailableOptions([...sourceOptions]);\n      setChosenOptions([...destinationOptions]);\n    } else {\n      setChosenOptions([...sourceOptions]);\n      setAvailableOptions([...destinationOptions]);\n    }\n  };\n  \n  // callback for moving all options between lists\n  const moveAll = (fromAvailable) => {\n    if (fromAvailable) {\n      setChosenOptions([...availableOptions.filter(x => x.isVisible), ...chosenOptions]);\n      setAvailableOptions([...availableOptions.filter(x => !x.isVisible)]);\n    } else {\n      setAvailableOptions([...chosenOptions.filter(x => x.isVisible), ...availableOptions]);\n      setChosenOptions([...chosenOptions.filter(x => !x.isVisible)]);\n    }\n  };\n  \n  // callback when option is selected\n  const onOptionSelect = (event, index, isChosen) => {\n    if (isChosen) {\n      const newChosen = [...chosenOptions];\n      newChosen[index].selected = !chosenOptions[index].selected;\n      setChosenOptions(newChosen);\n    } else {\n      const newAvailable = [...availableOptions];\n      newAvailable[index].selected = !availableOptions[index].selected;\n      setAvailableOptions(newAvailable);\n    }\n  };\n  \n  // builds a search input - used in each dual list selector pane\n  const buildSearchInput = (isAvailable) => {\n    const onChange = (value) => {\n      isAvailable ? setAvailableFilter(value) : setChosenFilter(value);\n      const toFilter = isAvailable ? [...availableOptions] : [...chosenOptions];\n      toFilter.forEach((option) => {\n        option.isVisible = value === '' || option.text.toLowerCase().includes(value.toLowerCase());\n      })\n    };\n    \n    return (\n      <SearchInput\n        value={isAvailable ? availableFilter : chosenFilter}\n        onChange={onChange}\n        onClear={() => onChange('')}\n      />\n    );\n  };\n  \n  // builds a sort control - passed to both dual list selector panes\n  const buildSort = (isAvailable) => {\n    const onSort = () => {\n      const toSort = isAvailable ? [...availableOptions] : [...chosenOptions];\n      toSort.sort((a,b) => {\n        if (a.text > b.text) return 1;\n        if (a.text < b.text) return -1;\n        return 0;\n      });\n      if (isAvailable) {\n        setAvailableOptions(toSort);\n      } else {\n        setChosenOptions(toSort);\n      }\n    };\n    \n    return (\n      <Button\n        variant={ButtonVariant.plain}\n        onClick={onSort}\n        aria-label=\"Sort\"\n        key=\"sortButton\"\n      >\n        <PficonSortCommonAscIcon />\n      </Button>\n    );\n  };\n\n  return (\n    <DualListSelector>\n      <DualListSelectorPane\n        title=\"Available\"\n        status={`${availableOptions.filter(x => x.selected && x.isVisible).length} of ${availableOptions.filter(x => x.isVisible).length} options selected`}\n        searchInput={buildSearchInput(true)}\n        actions={[buildSort(true)]}\n      >\n        <DualListSelectorList>\n          {availableOptions.map((option, index) => {\n            return option.isVisible ? (\n              <DualListSelectorListItem\n                key={index}\n                isSelected={option.selected}\n                id={`composable-option-${index}`}\n                onOptionSelect={(e) => onOptionSelect(e, index, false)}\n              >\n                {option.text}\n              </DualListSelectorListItem>\n            ) : null;\n          })}\n        </DualListSelectorList>\n      </DualListSelectorPane>\n      <DualListSelectorControlsWrapper\n        aria-label=\"Selector controls\"\n      >\n        <DualListSelectorControl\n          isDisabled={!availableOptions.some(option => option.selected)}\n          onClick={() => moveSelected(true)}\n          aria-label=\"Add selected\"\n          tooltipContent=\"Add selected\"\n        >\n          <AngleRightIcon />\n        </DualListSelectorControl>\n        <DualListSelectorControl\n          isDisabled={availableOptions.length === 0}\n          onClick={() => moveAll(true)}\n          aria-label=\"Add all\"\n          tooltipContent=\"Add all\"\n        >\n          <AngleDoubleRightIcon />\n        </DualListSelectorControl>\n        <DualListSelectorControl\n          isDisabled={chosenOptions.length === 0}\n          onClick={() => moveAll(false)}\n          aria-label=\"Remove all\"\n          tooltipContent=\"Remove all\"\n        >\n          <AngleDoubleLeftIcon />\n        </DualListSelectorControl>\n        <DualListSelectorControl\n          onClick={() => moveSelected(false)}\n          isDisabled={!chosenOptions.some(option => option.selected)}\n          aria-label=\"Remove selected\"\n          tooltipContent=\"Remove selected\"\n        >\n          <AngleLeftIcon />\n        </DualListSelectorControl>\n      </DualListSelectorControlsWrapper>\n      <DualListSelectorPane\n        title=\"Chosen\"\n        status={`${chosenOptions.filter(x => x.selected && x.isVisible).length} of ${chosenOptions.filter(x => x.isVisible).length} options selected`}\n        searchInput={buildSearchInput(false)}\n        actions={[buildSort(false)]}\n        isChosen\n      >\n        <DualListSelectorList>\n          {chosenOptions.map((option, index) => {\n            return option.isVisible ? (\n              <DualListSelectorListItem\n                key={index}\n                isSelected={option.selected}\n                id={`composable-option-${index}`}\n                onOptionSelect={(e) => onOptionSelect(e, index, true)}\n              >\n                {option.text}\n              </DualListSelectorListItem>\n            ) : null;\n          })}\n        </DualListSelectorList>\n      </DualListSelectorPane>\n    </DualListSelector>\n  );\n}","title":"Composable dual list selector","lang":"js"}}>
      
      <p {...{"className":"ws-p"}}>
        {`For more flexibility, a Dual list selector can be built using sub components. When doing so, the intended component
relationships are arranged as follows:`}
      </p>
      
      <Example {...{"code":"import React from 'react';\nimport { DualListSelector, DualListSelectorPane, DualListSelectorList, DualListSelectorListItem, DualListSelectorControlsWrapper, DualListSelectorControl } from '@patternfly/react-core';\n\n<DualListSelector>\n\n  <DualListSelectorPane>\n    <DualListSelectorList>\n      <DualListSelectorListItem/>\n    </DualListSelectorList>\n  </DualListSelectorPane>\n  \n  <DualListSelectorControlsWrapper>\n    <DualListSelectorControl/> {/* The standard Dual list selector has 4 controls */}\n  </DualListSelectorControlsWrapper>\n  \n  <DualListSelectorPane isChosen>\n    <DualListSelectorList>\n      <DualListSelectorListItem/>\n    </DualListSelectorList>\n  </DualListSelectorPane>\n  \n</DualListSelector>","lang":"js","noLive":true}}>
        
      </Example>
      
      <p {...{"className":"ws-p"}}>
        {`Note: Keyboard accessibility and screen reader accessibility for the `}
        
        <code {...{"className":"ws-code"}}>
          {`DragDrop`}
        </code>
        {` component are still in development.`}
      </p>
    </Example>,
  'Reordering lists using drag and drop': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { \n  DragDrop,\n  Droppable,\n  Draggable,\n  DualListSelector, \n  DualListSelectorPane,\n  DualListSelectorList,\n  DualListSelectorListItem,\n  DualListSelectorControlsWrapper,\n  DualListSelectorControl,\n} from '@patternfly/react-core';\nimport AngleDoubleLeftIcon from '@patternfly/react-icons/dist/esm/icons/angle-double-left-icon';\nimport AngleLeftIcon from '@patternfly/react-icons/dist/esm/icons/angle-left-icon';\nimport AngleDoubleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-double-right-icon';\nimport AngleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-right-icon';\n\nconst ComposableDualListSelector = () => {\n  const [ignoreNextOptionSelect, setIgnoreNextOptionSelect] = React.useState(false);\n  const [availableOptions, setAvailableOptions] = React.useState([\n    { text: 'Apple', selected: false, isVisible: true },\n    { text: 'Banana', selected: false, isVisible: true },\n    { text: 'Pineapple', selected: false, isVisible: true }\n  ]);\n  const [chosenOptions, setChosenOptions] = React.useState([\n    { text: 'Orange', selected: false, isVisible: true },\n    { text: 'Grape', selected: false, isVisible: true },\n    { text: 'Peach', selected: false, isVisible: true },\n    { text: 'Strawberry', selected: false, isVisible: true }\n  ]);\n\n  const moveSelected = (fromAvailable) => {\n    const sourceOptions = fromAvailable ? availableOptions : chosenOptions;\n    const destinationOptions = fromAvailable ? chosenOptions : availableOptions;\n    for (let i = 0; i < sourceOptions.length; i++) {\n      const option = sourceOptions[i];\n      if (option.selected && option.isVisible) {\n        sourceOptions.splice(i, 1);\n        destinationOptions.push(option);\n        option.selected = false;\n        i--;\n      }\n    }\n    if (fromAvailable) {\n      setAvailableOptions([...sourceOptions]);\n      setChosenOptions([...destinationOptions]);\n    } else {\n      setChosenOptions([...sourceOptions]);\n      setAvailableOptions([...destinationOptions]);\n    }\n  };\n  \n  const moveAll = (fromAvailable) => {\n    if (fromAvailable) {\n      setChosenOptions([...availableOptions.filter(x => x.isVisible), ...chosenOptions]);\n      setAvailableOptions([...availableOptions.filter(x => !x.isVisible)]);\n    } else {\n      setAvailableOptions([...chosenOptions.filter(x => x.isVisible), ...availableOptions]);\n      setChosenOptions([...chosenOptions.filter(x => !x.isVisible)]);\n    }\n  };\n  \n  const onOptionSelect = (event, index, isChosen) => {\n    if (ignoreNextOptionSelect) {\n      setIgnoreNextOptionSelect(false);\n      return;\n    }\n    if (isChosen) {\n      const newChosen = [...chosenOptions];\n      newChosen[index].selected = !chosenOptions[index].selected;\n      setChosenOptions(newChosen);\n    } else {\n      const newAvailable = [...availableOptions];\n      newAvailable[index].selected = !availableOptions[index].selected;\n      setAvailableOptions(newAvailable);\n    }\n  };\n  \n  const onDrop = (source, dest) => {\n    if (dest){\n      const newList = [...chosenOptions];\n      const [removed] = newList.splice(source.index, 1);\n      newList.splice(dest.index, 0, removed);\n      setChosenOptions(newList);\n      return true;\n    }\n    return false;\n  };\n\n  return (\n    <DualListSelector>\n      <DualListSelectorPane\n        title=\"Available\"\n        status={`${availableOptions.filter(x => x.selected && x.isVisible).length} of ${availableOptions.filter(x => x.isVisible).length} options selected`}\n      >\n        <DualListSelectorList>\n          {availableOptions.map((option, index) => {\n            return option.isVisible ? (\n              <DualListSelectorListItem\n                key={index}\n                isSelected={option.selected}\n                id={`composable-available-option-${index}`}\n                onOptionSelect={(e) => onOptionSelect(e, index, false)}\n              >\n                {option.text}\n              </DualListSelectorListItem>\n            ) : null;\n          })}\n        </DualListSelectorList>\n      </DualListSelectorPane>\n      <DualListSelectorControlsWrapper\n        aria-label=\"Selector controls\"\n      >\n        <DualListSelectorControl\n          isDisabled={!availableOptions.some(option => option.selected)}\n          onClick={() => moveSelected(true)}\n          aria-label=\"Add selected\"\n        >\n          <AngleRightIcon />\n        </DualListSelectorControl>\n        <DualListSelectorControl\n          isDisabled={availableOptions.length === 0}\n          onClick={() => moveAll(true)}\n          aria-label=\"Add all\"\n        >\n          <AngleDoubleRightIcon />\n        </DualListSelectorControl>\n        <DualListSelectorControl\n          isDisabled={chosenOptions.length === 0}\n          onClick={() => moveAll(false)}\n          aria-label=\"Remove all\"\n        >\n          <AngleDoubleLeftIcon />\n        </DualListSelectorControl>\n        <DualListSelectorControl\n          onClick={() => moveSelected(false)}\n          isDisabled={!chosenOptions.some(option => option.selected)}\n          aria-label=\"Remove selected\"\n        >\n          <AngleLeftIcon />\n        </DualListSelectorControl>\n      </DualListSelectorControlsWrapper>\n      <DragDrop onDrag={() => { setIgnoreNextOptionSelect(true); return true; }} onDrop={onDrop}>\n        <DualListSelectorPane\n          title=\"Chosen\"\n          status={`${chosenOptions.filter(x => x.selected && x.isVisible).length} of ${chosenOptions.filter(x => x.isVisible).length} options selected`}\n          isChosen\n        >\n          <Droppable hasNoWrapper>\n            <DualListSelectorList>\n            {chosenOptions.map((option, index) => {\n              return option.isVisible ? (\n                <Draggable key={index} hasNoWrapper>\n                  <DualListSelectorListItem\n                    isSelected={option.selected}\n                    id={`composable-chosen-option-${index}`}\n                    onOptionSelect={(e) => onOptionSelect(e, index, true)}\n                    isDraggable\n                  >\n                    {option.text}\n                  </DualListSelectorListItem>\n                </Draggable>\n              ) : null;\n            })}\n            </DualListSelectorList>\n          </Droppable>\n        </DualListSelectorPane>\n      </DragDrop>\n    </DualListSelector>\n  );\n}","title":"Reordering lists using drag and drop","lang":"js"}}>
      
      <p {...{"className":"ws-p"}}>
        {`To make a pane able to be reordered:`}
      </p>
      
      <ul {...{"className":"ws-ul"}}>
        

        
        <li {...{"className":"ws-li"}}>
          {`wrap the `}
          
          <code {...{"className":"ws-code"}}>
            {`DualListSelectorPane`}
          </code>
          {` in a `}
          
          <code {...{"className":"ws-code"}}>
            {`DragDrop`}
          </code>
          {` component`}
        </li>
        

        
        <li {...{"className":"ws-li"}}>
          {`wrap the `}
          
          <code {...{"className":"ws-code"}}>
            {`DualListSelectorList`}
          </code>
          {` in a `}
          
          <code {...{"className":"ws-code"}}>
            {`Droppable`}
          </code>
          {` component`}
        </li>
        

        
        <li {...{"className":"ws-li"}}>
          {`wrap the `}
          
          <code {...{"className":"ws-code"}}>
            {`DualListSelectorListItem`}
          </code>
          {` components in a `}
          
          <code {...{"className":"ws-code"}}>
            {`Draggable`}
          </code>
          {` component`}
        </li>
        

        
        <li {...{"className":"ws-li"}}>
          {`define an `}
          
          <code {...{"className":"ws-code"}}>
            {`onDrop`}
          </code>
          {` callback which reorders the sortable options.`}
          

          
          <ul {...{"className":"ws-ul"}}>
            

            
            <li {...{"className":"ws-li"}}>
              {`The `}
              
              <code {...{"className":"ws-code"}}>
                {`onDrop`}
              </code>
              {` function provides the starting location and destination location for a dragged item. It should return
true to enable the 'drop' animation in the new location and false to enable the 'drop' animation back to the item's
old position.`}
            </li>
            

            
            <li {...{"className":"ws-li"}}>
              {`define an `}
              
              <code {...{"className":"ws-code"}}>
                {`onDrag`}
              </code>
              {` callback which ensures that the drag event will not cross hairs with the `}
              
              <code {...{"className":"ws-code"}}>
                {`onOptionSelect`}
              </code>
              {` click
event set on the option. Note: the `}
              
              <code {...{"className":"ws-code"}}>
                {`ignoreNextOptionSelect`}
              </code>
              {` state value is used to prevent selection while dragging.`}
            </li>
            

          </ul>
          

        </li>
        

      </ul>
    </Example>,
  'Composable dual list selector tree': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  DualListSelector,\n  DualListSelectorPane,\n  DualListSelectorList,\n  DualListSelectorControlsWrapper,\n  DualListSelectorControl,\n  DualListSelectorTree,\n  DualListSelectorTreeItemData,\n  SearchInput\n} from '@patternfly/react-core';\nimport AngleDoubleLeftIcon from '@patternfly/react-icons/dist/esm/icons/angle-double-left-icon';\nimport AngleLeftIcon from '@patternfly/react-icons/dist/esm/icons/angle-left-icon';\nimport AngleDoubleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-double-right-icon';\nimport AngleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-right-icon';\n\ninterface FoodNode {\n  id: string;\n  text: string;\n  children?: FoodNode[];\n}\n\ninterface ExampleProps {\n  data: FoodNode[];\n}\n\nexport const ComposableDualListSelectorTree: React.FunctionComponent<ExampleProps> = ({ data }: ExampleProps) => {\n  const [checkedLeafIds, setCheckedLeafIds] = React.useState<string[]>([]);\n  const [chosenLeafIds, setChosenLeafIds] = React.useState<string[]>(['beans', 'beef', 'chicken', 'tofu']);\n  const [chosenFilter, setChosenFilter] = React.useState<string>('');\n  const [availableFilter, setAvailableFilter] = React.useState<string>('');\n  let hiddenChosen: string[] = [];\n  let hiddenAvailable: string[] = [];\n\n  // helper function to build memoized lists\n  const buildTextById = (node: FoodNode): { [key: string]: string } => {\n    let textById = {};\n    if (!node) {\n      return textById;\n    }\n    textById[node.id] = node.text;\n    if (node.children) {\n      node.children.forEach(child => {\n        textById = { ...textById, ...buildTextById(child) };\n      });\n    }\n    return textById;\n  };\n\n  // helper function to build memoized lists\n  const getDescendantLeafIds = (node: FoodNode): string[] => {\n    if (!node.children || !node.children.length) {\n      return [node.id];\n    } else {\n      let childrenIds = [];\n      node.children.forEach(child => {\n        childrenIds = [...childrenIds, ...getDescendantLeafIds(child)];\n      });\n      return childrenIds;\n    }\n  };\n\n  // helper function to build memoized lists\n  const getLeavesById = (node: FoodNode): { [key: string]: string[] } => {\n    let leavesById = {};\n    if (!node.children || !node.children.length) {\n      leavesById[node.id] = [node.id];\n    } else {\n      node.children.forEach(child => {\n        leavesById[node.id] = getDescendantLeafIds(node);\n        leavesById = { ...leavesById, ...getLeavesById(child) };\n      });\n    }\n    return leavesById;\n  };\n\n  // Builds a map of child leaf nodes by node id - memoized so that it only rebuilds the list if the data changes.\n  const { memoizedLeavesById, memoizedAllLeaves, memoizedNodeText } = React.useMemo(() => {\n    let leavesById = {};\n    let allLeaves = [];\n    let nodeTexts = {};\n    data.forEach(foodNode => {\n      nodeTexts = { ...nodeTexts, ...buildTextById(foodNode) };\n      leavesById = { ...leavesById, ...getLeavesById(foodNode) };\n      allLeaves = [...allLeaves, ...getDescendantLeafIds(foodNode)];\n    });\n    return {\n      memoizedLeavesById: leavesById,\n      memoizedAllLeaves: allLeaves,\n      memoizedNodeText: nodeTexts\n    };\n  }, [data]);\n\n  const moveChecked = (toChosen: boolean) => {\n    setChosenLeafIds(\n      prevChosenIds =>\n        toChosen\n          ? [...prevChosenIds, ...checkedLeafIds] // add checked ids to chosen list\n          : [...prevChosenIds.filter(x => !checkedLeafIds.includes(x))] // remove checked ids from chosen list\n    );\n\n    // uncheck checked ids that just moved\n    setCheckedLeafIds(prevChecked =>\n      toChosen\n        ? [...prevChecked.filter(x => chosenLeafIds.includes(x))]\n        : [...prevChecked.filter(x => !chosenLeafIds.includes(x))]\n    );\n  };\n\n  const moveAll = (toChosen: boolean) => {\n    if (toChosen) {\n      setChosenLeafIds(memoizedAllLeaves);\n    } else {\n      setChosenLeafIds([]);\n    }\n  };\n\n  const areAllDescendantsSelected = (node: FoodNode, isChosen: boolean) =>\n    memoizedLeavesById[node.id].every(\n      id => checkedLeafIds.includes(id) && (isChosen ? chosenLeafIds.includes(id) : !chosenLeafIds.includes(id))\n    );\n  const areSomeDescendantsSelected = (node: FoodNode, isChosen: boolean) =>\n    memoizedLeavesById[node.id].some(\n      id => checkedLeafIds.includes(id) && (isChosen ? chosenLeafIds.includes(id) : !chosenLeafIds.includes(id))\n    );\n\n  const isNodeChecked = (node: FoodNode, isChosen: boolean) => {\n    if (areAllDescendantsSelected(node, isChosen)) {\n      return true;\n    }\n    if (areSomeDescendantsSelected(node, isChosen)) {\n      return null;\n    }\n    return false;\n  };\n\n  const onOptionCheck = (\n    event: React.MouseEvent | React.ChangeEvent<HTMLInputElement> | React.KeyboardEvent,\n    isChecked: boolean,\n    node: DualListSelectorTreeItemData,\n    isChosen: boolean\n  ) => {\n    const nodeIdsToCheck = memoizedLeavesById[node.id].filter(id =>\n      isChosen\n        ? chosenLeafIds.includes(id) && !hiddenChosen.includes(id)\n        : !chosenLeafIds.includes(id) && !hiddenAvailable.includes(id)\n    );\n    if (isChosen) {\n      hiddenChosen = [];\n    } else {\n      hiddenAvailable = [];\n    }\n    setCheckedLeafIds(prevChecked => {\n      const otherCheckedNodeNames = prevChecked.filter(id => !nodeIdsToCheck.includes(id));\n      return !isChecked ? otherCheckedNodeNames : [...otherCheckedNodeNames, ...nodeIdsToCheck];\n    });\n  };\n\n  // builds a search input - used in each dual list selector pane\n  const buildSearchInput = (isChosen: boolean) => {\n    const onChange = value => (isChosen ? setChosenFilter(value) : setAvailableFilter(value));\n\n    return (\n      <SearchInput value={isChosen ? chosenFilter : availableFilter} onChange={onChange} onClear={() => onChange('')} />\n    );\n  };\n\n  // Builds the DualListSelectorTreeItems from the FoodNodes\n  const buildOptions = (\n    isChosen: boolean,\n    [node, ...remainingNodes]: FoodNode[],\n    hasParentMatch: boolean\n  ): DualListSelectorTreeItemData[] => {\n    if (!node) {\n      return [];\n    }\n\n    const isChecked = isNodeChecked(node, isChosen);\n\n    const filterValue = isChosen ? chosenFilter : availableFilter;\n    const descendentLeafIds = memoizedLeavesById[node.id];\n    const descendentsOnThisPane = isChosen\n      ? descendentLeafIds.filter(id => chosenLeafIds.includes(id))\n      : descendentLeafIds.filter(id => !chosenLeafIds.includes(id));\n\n    const hasMatchingChildren =\n      filterValue && descendentsOnThisPane.some(id => memoizedNodeText[id].includes(filterValue));\n    const isFilterMatch = filterValue && node.text.includes(filterValue) && descendentsOnThisPane.length > 0;\n\n    // A node is displayed if either of the following is true:\n    //   - There is no filter value and this node or its descendents belong on this pane\n    //   - There is a filter value and this node or one of this node's descendents or ancestors match on this pane\n    const isDisplayed =\n      (!filterValue && descendentsOnThisPane.length > 0) ||\n      hasMatchingChildren ||\n      (hasParentMatch && descendentsOnThisPane.length > 0) ||\n      isFilterMatch;\n\n    if (!isDisplayed) {\n      if (isChosen) {\n        hiddenChosen.push(node.id);\n      } else {\n        hiddenAvailable.push(node.id);\n      }\n    }\n\n    return [\n      ...(isDisplayed\n        ? [\n            {\n              id: node.id,\n              text: node.text,\n              isChecked,\n              checkProps: { 'aria-label': `Select ${node.text}` },\n              hasBadge: node.children && node.children.length > 0,\n              badgeProps: { isRead: true },\n              defaultExpanded: isChosen ? !!chosenFilter : !!availableFilter,\n              children: node.children\n                ? buildOptions(isChosen, node.children, isFilterMatch || hasParentMatch)\n                : undefined\n            }\n          ]\n        : []),\n      ...(!isDisplayed && node.children && node.children.length\n        ? buildOptions(isChosen, node.children, hasParentMatch)\n        : []),\n      ...(remainingNodes ? buildOptions(isChosen, remainingNodes, hasParentMatch) : [])\n    ];\n  };\n\n  const buildPane = (isChosen: boolean): React.ReactNode => {\n    const options: DualListSelectorTreeItemData[] = buildOptions(isChosen, data, false);\n    const numOptions = isChosen ? chosenLeafIds.length : memoizedAllLeaves.length - chosenLeafIds.length;\n    const numSelected = checkedLeafIds.filter(id =>\n      isChosen ? chosenLeafIds.includes(id) : !chosenLeafIds.includes(id)\n    ).length;\n    const status = `${numSelected} of ${numOptions} options selected`;\n    return (\n      <DualListSelectorPane\n        title={isChosen ? 'Chosen' : 'Available'}\n        status={status}\n        searchInput={buildSearchInput(isChosen)}\n        isChosen={isChosen}\n      >\n        <DualListSelectorList>\n          <DualListSelectorTree\n            data={options}\n            onOptionCheck={(e, isChecked, itemData) => onOptionCheck(e, isChecked, itemData, isChosen)}\n          />\n        </DualListSelectorList>\n      </DualListSelectorPane>\n    );\n  };\n\n  return (\n    <DualListSelector isTree>\n      {buildPane(false)}\n      <DualListSelectorControlsWrapper aria-label=\"Selector controls\">\n        <DualListSelectorControl\n          isDisabled={!checkedLeafIds.filter(x => !chosenLeafIds.includes(x)).length}\n          onClick={() => moveChecked(true)}\n          aria-label=\"Add selected\"\n        >\n          <AngleRightIcon />\n        </DualListSelectorControl>\n        <DualListSelectorControl\n          isDisabled={chosenLeafIds.length === memoizedAllLeaves.length}\n          onClick={() => moveAll(true)}\n          aria-label=\"Add all\"\n        >\n          <AngleDoubleRightIcon />\n        </DualListSelectorControl>\n        <DualListSelectorControl\n          isDisabled={chosenLeafIds.length === 0}\n          onClick={() => moveAll(false)}\n          aria-label=\"Remove all\"\n        >\n          <AngleDoubleLeftIcon />\n        </DualListSelectorControl>\n        <DualListSelectorControl\n          onClick={() => moveChecked(false)}\n          isDisabled={!checkedLeafIds.filter(x => !!chosenLeafIds.includes(x)).length}\n          aria-label=\"Remove selected\"\n        >\n          <AngleLeftIcon />\n        </DualListSelectorControl>\n      </DualListSelectorControlsWrapper>\n      {buildPane(true)}\n    </DualListSelector>\n  );\n};\n\nexport const ComposableDualListSelectorTreeExample: React.FunctionComponent = () => (\n  <ComposableDualListSelectorTree\n    data={[\n      {\n        id: 'fruits',\n        text: 'Fruits',\n        children: [\n          { id: 'apple', text: 'Apple' },\n          {\n            id: 'berries',\n            text: 'Berries',\n            children: [\n              { id: 'blueberry', text: 'Blueberry' },\n              { id: 'strawberry', text: 'Strawberry' }\n            ]\n          },\n          { id: 'banana', text: 'Banana' }\n        ]\n      },\n      { id: 'bread', text: 'Bread' },\n      {\n        id: 'vegetables',\n        text: 'Vegetables',\n        children: [\n          { id: 'broccoli', text: 'Broccoli' },\n          { id: 'cauliflower', text: 'Cauliflower' }\n        ]\n      },\n      {\n        id: 'proteins',\n        text: 'Proteins',\n        children: [\n          { id: 'beans', text: 'Beans' },\n          {\n            id: 'meats',\n            text: 'Meats',\n            children: [\n              {\n                id: 'beef',\n                text: 'Beef'\n              },\n              {\n                id: 'chicken',\n                text: 'Chicken'\n              }\n            ]\n          },\n          { id: 'tofu', text: 'Tofu' }\n        ]\n      }\n    ]}\n  />\n);\n","title":"Composable dual list selector tree","lang":"ts"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["Basic with tooltips"])}
    {React.createElement(pageData.examples["Basic with search"])}
    {React.createElement(pageData.examples["Using more complex options with actions"])}
    {React.createElement(pageData.examples["Expandable options"])}
    {React.createElement(pageData.examples["Composable dual list selector"])}
    {React.createElement(pageData.examples["Reordering lists using drag and drop"])}
    {React.createElement(pageData.examples["Composable dual list selector tree"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsDualListSelectorReactDocs';
Component.pageData = pageData;

export default Component;
