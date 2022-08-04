import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import EditIcon from '@patternfly/react-icons/dist/esm/icons/edit-icon';
import CloneIcon from '@patternfly/react-icons/dist/esm/icons/clone-icon';
import SyncIcon from '@patternfly/react-icons/dist/esm/icons/sync-icon';
import FilterIcon from '@patternfly/react-icons/dist/esm/icons/filter-icon';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';
const pageData = {
  "id": "Toolbar",
  "section": "components",
  "source": "react",
  "slug": "/components/toolbar/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/Toolbar/examples/Toolbar.md",
  "propComponents": [
    {
      "name": "Toolbar",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content to be rendered as rows in the data toolbar"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Classes applied to root element of the data toolbar"
        },
        {
          "name": "clearAllFilters",
          "type": "() => void",
          "description": "Optional callback for clearing all filters in the toolbar"
        },
        {
          "name": "clearFiltersButtonText",
          "type": "string",
          "description": "Text to display in the clear all filters button"
        },
        {
          "name": "collapseListedFiltersBreakpoint",
          "type": "'all' | 'md' | 'lg' | 'xl' | '2xl'",
          "description": "The breakpoint at which the listed filters in chip groups are collapsed down to a summary"
        },
        {
          "name": "customChipGroupContent",
          "type": "React.ReactNode",
          "description": "Custom content appended to the filter generated chip group. To maintain spacing and styling, each node should be wrapped in a ToolbarItem or ToolbarGroup. This property will remove the default \"Clear all filters\" button."
        },
        {
          "name": "id",
          "type": "string",
          "description": "Id of the data toolbar"
        },
        {
          "name": "inset",
          "type": "{\n  default?: 'insetNone' | 'insetSm' | 'insetMd' | 'insetLg' | 'insetXl' | 'inset2xl';\n  sm?: 'insetNone' | 'insetSm' | 'insetMd' | 'insetLg' | 'insetXl' | 'inset2xl';\n  md?: 'insetNone' | 'insetSm' | 'insetMd' | 'insetLg' | 'insetXl' | 'inset2xl';\n  lg?: 'insetNone' | 'insetSm' | 'insetMd' | 'insetLg' | 'insetXl' | 'inset2xl';\n  xl?: 'insetNone' | 'insetSm' | 'insetMd' | 'insetLg' | 'insetXl' | 'inset2xl';\n  '2xl'?: 'insetNone' | 'insetSm' | 'insetMd' | 'insetLg' | 'insetXl' | 'inset2xl';\n}",
          "description": "Insets at various breakpoints."
        },
        {
          "name": "isExpanded",
          "type": "boolean",
          "description": "Flag indicating if a data toolbar toggle group's expandable content is expanded"
        },
        {
          "name": "isFullHeight",
          "type": "boolean",
          "description": "Flag indicating the toolbar height should expand to the full height of the container"
        },
        {
          "name": "isStatic",
          "type": "boolean",
          "description": "Flag indicating the toolbar is static"
        },
        {
          "name": "isSticky",
          "type": "boolean",
          "description": "Flag indicating the toolbar should stick to the top of its container"
        },
        {
          "name": "numberOfFiltersText",
          "type": "(numberOfFilters: number) => string",
          "description": "Text to display in the total number of applied filters ToolbarFilter"
        },
        {
          "name": "toggleIsExpanded",
          "type": "() => void",
          "description": "A callback for setting the isExpanded flag"
        },
        {
          "name": "usePageInsets",
          "type": "boolean",
          "description": "Flag indicating the toolbar should use the Page insets"
        }
      ]
    },
    {
      "name": "ToolbarContent",
      "description": "",
      "props": [
        {
          "name": "alignment",
          "type": "{\n  default?: 'alignRight' | 'alignLeft';\n  md?: 'alignRight' | 'alignLeft';\n  lg?: 'alignRight' | 'alignLeft';\n  xl?: 'alignRight' | 'alignLeft';\n  '2xl'?: 'alignRight' | 'alignLeft';\n}",
          "description": "Alignment at various breakpoints."
        },
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content to be rendered as children of the content row"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Classes applied to root element of the data toolbar content row"
        },
        {
          "name": "clearAllFilters",
          "type": "() => void",
          "description": "Optional callback for clearing all filters in the toolbar"
        },
        {
          "name": "clearFiltersButtonText",
          "type": "string",
          "description": "Text to display in the clear all filters button"
        },
        {
          "name": "isExpanded",
          "type": "boolean",
          "description": "Flag indicating if a data toolbar toggle group's expandable content is expanded",
          "defaultValue": "false"
        },
        {
          "name": "showClearFiltersButton",
          "type": "boolean",
          "description": "Flag indicating that the clear all filters button should be visible",
          "defaultValue": "false"
        },
        {
          "name": "toolbarId",
          "type": "string",
          "description": "Id of the parent Toolbar component"
        },
        {
          "name": "visibility",
          "type": "{\n  default?: 'hidden' | 'visible';\n  md?: 'hidden' | 'visible';\n  lg?: 'hidden' | 'visible';\n  xl?: 'hidden' | 'visible';\n  '2xl'?: 'hidden' | 'visible';\n}",
          "description": "Visibility at various breakpoints."
        },
        {
          "name": "visiblity",
          "type": "{\n  default?: 'hidden' | 'visible';\n  md?: 'hidden' | 'visible';\n  lg?: 'hidden' | 'visible';\n  xl?: 'hidden' | 'visible';\n  '2xl'?: 'hidden' | 'visible';\n}",
          "description": "prop misspelled",
          "deprecated": true
        }
      ]
    },
    {
      "name": "ToolbarGroup",
      "description": "",
      "props": [
        {
          "name": "alignment",
          "type": "{\n  default?: 'alignRight' | 'alignLeft';\n  md?: 'alignRight' | 'alignLeft';\n  lg?: 'alignRight' | 'alignLeft';\n  xl?: 'alignRight' | 'alignLeft';\n  '2xl'?: 'alignRight' | 'alignLeft';\n}",
          "description": "Alignment at various breakpoints."
        },
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content to be rendered inside the data toolbar group"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Classes applied to root element of the data toolbar group"
        },
        {
          "name": "innerRef",
          "type": "React.RefObject<any>",
          "description": "Reference to pass to this group if it has .pf-m-chip-container modifier"
        },
        {
          "name": "spaceItems",
          "type": "{\n  default?: 'spaceItemsNone' | 'spaceItemsSm' | 'spaceItemsMd' | 'spaceItemsLg';\n  md?: 'spaceItemsNone' | 'spaceItemsSm' | 'spaceItemsMd' | 'spaceItemsLg';\n  lg?: 'spaceItemsNone' | 'spaceItemsSm' | 'spaceItemsMd' | 'spaceItemsLg';\n  xl?: 'spaceItemsNone' | 'spaceItemsSm' | 'spaceItemsMd' | 'spaceItemsLg';\n  '2xl'?: 'spaceItemsNone' | 'spaceItemsSm' | 'spaceItemsMd' | 'spaceItemsLg';\n}",
          "description": "Space items at various breakpoints."
        },
        {
          "name": "spacer",
          "type": "{\n  default?: 'spacerNone' | 'spacerSm' | 'spacerMd' | 'spacerLg';\n  md?: 'spacerNone' | 'spacerSm' | 'spacerMd' | 'spacerLg';\n  lg?: 'spacerNone' | 'spacerSm' | 'spacerMd' | 'spacerLg';\n  xl?: 'spacerNone' | 'spacerSm' | 'spacerMd' | 'spacerLg';\n  '2xl'?: 'spacerNone' | 'spacerSm' | 'spacerMd' | 'spacerLg';\n}",
          "description": "Spacers at various breakpoints."
        },
        {
          "name": "variant",
          "type": "ToolbarGroupVariant | 'filter-group' | 'icon-button-group' | 'button-group'",
          "description": "A type modifier which modifies spacing specifically depending on the type of group"
        },
        {
          "name": "visibility",
          "type": "{\n  default?: 'hidden' | 'visible';\n  md?: 'hidden' | 'visible';\n  lg?: 'hidden' | 'visible';\n  xl?: 'hidden' | 'visible';\n  '2xl'?: 'hidden' | 'visible';\n}",
          "description": "Visibility at various breakpoints."
        },
        {
          "name": "visiblity",
          "type": "{\n  default?: 'hidden' | 'visible';\n  md?: 'hidden' | 'visible';\n  lg?: 'hidden' | 'visible';\n  xl?: 'hidden' | 'visible';\n  '2xl'?: 'hidden' | 'visible';\n}",
          "description": "prop misspelled",
          "deprecated": true
        }
      ]
    },
    {
      "name": "ToolbarItem",
      "description": "",
      "props": [
        {
          "name": "alignment",
          "type": "{\n  default?: 'alignRight' | 'alignLeft';\n  md?: 'alignRight' | 'alignLeft';\n  lg?: 'alignRight' | 'alignLeft';\n  xl?: 'alignRight' | 'alignLeft';\n  '2xl'?: 'alignRight' | 'alignLeft';\n}",
          "description": "Alignment at various breakpoints."
        },
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content to be rendered inside the data toolbar item"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Classes applied to root element of the data toolbar item"
        },
        {
          "name": "id",
          "type": "string",
          "description": "id for this data toolbar item"
        },
        {
          "name": "isAllExpanded",
          "type": "boolean",
          "description": "Flag indicating if the expand-all variant is expanded or not"
        },
        {
          "name": "spacer",
          "type": "{\n  default?: 'spacerNone' | 'spacerSm' | 'spacerMd' | 'spacerLg';\n  md?: 'spacerNone' | 'spacerSm' | 'spacerMd' | 'spacerLg';\n  lg?: 'spacerNone' | 'spacerSm' | 'spacerMd' | 'spacerLg';\n  xl?: 'spacerNone' | 'spacerSm' | 'spacerMd' | 'spacerLg';\n  '2xl'?: 'spacerNone' | 'spacerSm' | 'spacerMd' | 'spacerLg';\n}",
          "description": "Spacers at various breakpoints."
        },
        {
          "name": "variant",
          "type": "ToolbarItemVariant\n| 'bulk-select'\n| 'overflow-menu'\n| 'pagination'\n| 'search-filter'\n| 'label'\n| 'chip-group'\n| 'separator'\n| 'expand-all'",
          "description": "A type modifier which modifies spacing specifically depending on the type of item"
        },
        {
          "name": "visibility",
          "type": "{\n  default?: 'hidden' | 'visible';\n  md?: 'hidden' | 'visible';\n  lg?: 'hidden' | 'visible';\n  xl?: 'hidden' | 'visible';\n  '2xl'?: 'hidden' | 'visible';\n}",
          "description": "Visibility at various breakpoints."
        },
        {
          "name": "visiblity",
          "type": "{\n  default?: 'hidden' | 'visible';\n  md?: 'hidden' | 'visible';\n  lg?: 'hidden' | 'visible';\n  xl?: 'hidden' | 'visible';\n  '2xl'?: 'hidden' | 'visible';\n}",
          "description": "prop misspelled",
          "deprecated": true
        },
        {
          "name": "widths",
          "type": "{\n  default?: string;\n  sm?: string;\n  md?: string;\n  lg?: string;\n  xl?: string;\n  '2xl'?: string;\n}",
          "description": "Widths at various breakpoints."
        }
      ]
    },
    {
      "name": "ToolbarToggleGroup",
      "description": "",
      "props": [
        {
          "name": "alignment",
          "type": "{\n  default?: 'alignRight' | 'alignLeft';\n  md?: 'alignRight' | 'alignLeft';\n  lg?: 'alignRight' | 'alignLeft';\n  xl?: 'alignRight' | 'alignLeft';\n  '2xl'?: 'alignRight' | 'alignLeft';\n}",
          "description": "Alignment at various breakpoints."
        },
        {
          "name": "breakpoint",
          "type": "'md' | 'lg' | 'xl' | '2xl'",
          "description": "Controls when filters are shown and when the toggle button is hidden.",
          "required": true
        },
        {
          "name": "spaceItems",
          "type": "{\n  default?: 'spaceItemsNone' | 'spaceItemsSm' | 'spaceItemsMd' | 'spaceItemsLg';\n  md?: 'spaceItemsNone' | 'spaceItemsSm' | 'spaceItemsMd' | 'spaceItemsLg';\n  lg?: 'spaceItemsNone' | 'spaceItemsSm' | 'spaceItemsMd' | 'spaceItemsLg';\n  xl?: 'spaceItemsNone' | 'spaceItemsSm' | 'spaceItemsMd' | 'spaceItemsLg';\n  '2xl'?: 'spaceItemsNone' | 'spaceItemsSm' | 'spaceItemsMd' | 'spaceItemsLg';\n}",
          "description": "Space items at various breakpoints."
        },
        {
          "name": "spacer",
          "type": "{\n  default?: 'spacerNone' | 'spacerSm' | 'spacerMd' | 'spacerLg';\n  md?: 'spacerNone' | 'spacerSm' | 'spacerMd' | 'spacerLg';\n  lg?: 'spacerNone' | 'spacerSm' | 'spacerMd' | 'spacerLg';\n  xl?: 'spacerNone' | 'spacerSm' | 'spacerMd' | 'spacerLg';\n  '2xl'?: 'spacerNone' | 'spacerSm' | 'spacerMd' | 'spacerLg';\n}",
          "description": "Spacers at various breakpoints."
        },
        {
          "name": "toggleIcon",
          "type": "React.ReactNode",
          "description": "An icon to be rendered when the toggle group has collapsed down",
          "required": true
        },
        {
          "name": "visibility",
          "type": "{\n  default?: 'hidden' | 'visible';\n  md?: 'hidden' | 'visible';\n  lg?: 'hidden' | 'visible';\n  xl?: 'hidden' | 'visible';\n  '2xl'?: 'hidden' | 'visible';\n}",
          "description": "Visibility at various breakpoints."
        },
        {
          "name": "visiblity",
          "type": "{\n  default?: 'hidden' | 'visible';\n  md?: 'hidden' | 'visible';\n  lg?: 'hidden' | 'visible';\n  xl?: 'hidden' | 'visible';\n  '2xl'?: 'hidden' | 'visible';\n}",
          "description": "prop misspelled",
          "deprecated": true
        }
      ]
    },
    {
      "name": "ToolbarFilter",
      "description": "",
      "props": [
        {
          "name": "categoryName",
          "type": "string | ToolbarChipGroup",
          "description": "Unique category name to be used as a label for the chip group",
          "required": true
        },
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content to be rendered inside the data toolbar item associated with the chip group",
          "required": true
        },
        {
          "name": "chipGroupCollapsedText",
          "type": "string",
          "description": "Customizeable template string for the chip group. Use variable \"${remaining}\" for the overflow chip count."
        },
        {
          "name": "chipGroupExpandedText",
          "type": "string",
          "description": "Customizable \"Show Less\" text string for the chip group"
        },
        {
          "name": "chips",
          "type": "(string | ToolbarChip)[]",
          "description": "An array of strings to be displayed as chips in the expandable content",
          "defaultValue": "[]"
        },
        {
          "name": "deleteChip",
          "type": "(category: string | ToolbarChipGroup, chip: ToolbarChip | string) => void",
          "description": "Callback passed by consumer used to delete a chip from the chips[]"
        },
        {
          "name": "deleteChipGroup",
          "type": "(category: string | ToolbarChipGroup) => void",
          "description": "Callback passed by consumer used to close the entire chip group"
        },
        {
          "name": "showToolbarItem",
          "type": "boolean",
          "description": "Flag to show the toolbar item",
          "defaultValue": "true"
        }
      ]
    }
  ],
  "cssPrefix": [
    "pf-c-toolbar"
  ],
  "examples": [
    "Items",
    "Adjusting item spacers",
    "Adjusting item widths",
    "Adjusting toolbar inset",
    "Sticky",
    "Groups",
    "Component managed toggle groups",
    "Consumer managed toggle groups",
    "With filters",
    "With custom chip group content",
    "Stacked example"
  ]
};
pageData.liveContext = {
  EditIcon,
  CloneIcon,
  SyncIcon,
  FilterIcon,
  SearchIcon
};
pageData.examples = {
  'Items': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Toolbar, ToolbarItem, ToolbarContent } from '@patternfly/react-core';\nimport { Button, SearchInput } from '@patternfly/react-core';\n\nclass ToolbarItems extends React.Component {\n  constructor(props) {\n    super(props);\n  }\n\n  render() {\n    const items = (\n      <React.Fragment>\n        <ToolbarItem variant=\"search-filter\">\n          <SearchInput aria-label=\"search input example\" />\n        </ToolbarItem>\n        <ToolbarItem>\n          <Button variant=\"secondary\">Action</Button>\n        </ToolbarItem>\n        <ToolbarItem variant=\"separator\" />\n        <ToolbarItem>\n          <Button variant=\"primary\">Action</Button>\n        </ToolbarItem>\n      </React.Fragment>\n    );\n\n    return (\n      <Toolbar id=\"toolbar-items\">\n        <ToolbarContent>{items}</ToolbarContent>\n      </Toolbar>\n    );\n  }\n}","title":"Items","lang":"js"}}>
      
      <p {...{"className":"ws-p"}}>
        {`Toolbar items are individual components that can be placed inside of a toolbar. Buttons or select lists are examples of items. (Note: This example does not demonstrate the desired responsive behavior of the toolbar. That is handled in later examples.)`}
      </p>
    </Example>,
  'Adjusting item spacers': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Toolbar, ToolbarItem, ToolbarGroup, ToolbarContent } from '@patternfly/react-core';\nimport { Button } from '@patternfly/react-core';\n\nclass ToolbarSpacers extends React.Component {\n  constructor(props) {\n    super(props);\n  }\n\n  render() {\n    const firstSpacers = {\n      default: 'spacerNone'\n    };\n    const secondSpacers = {\n      default: 'spacerSm'\n    };\n    const thirdSpacers = {\n      default: 'spacerMd'\n    };\n    const fourthSpacers = {\n      default: 'spacerLg'\n    };\n    const fifthSpacers = {\n      default: 'spacerNone',\n      md: 'spacerSm',\n      lg: 'spacerMd',\n      xl: 'spacerLg'\n    };\n    const spaceItems = {\n      lg: 'spaceItemsLg'\n    };\n\n    const items = (\n      <React.Fragment>\n        <ToolbarItem spacer={firstSpacers}>\n          <Button variant=\"secondary\">Action</Button>\n        </ToolbarItem>\n        <ToolbarItem spacer={secondSpacers}>\n          <Button variant=\"secondary\">Action</Button>\n        </ToolbarItem>\n        <ToolbarItem spacer={thirdSpacers}>\n          <Button variant=\"secondary\">Action</Button>\n        </ToolbarItem>\n        <ToolbarItem spacer={fourthSpacers}>\n          <Button variant=\"secondary\">Action</Button>\n        </ToolbarItem>\n        <ToolbarItem variant=\"separator\"></ToolbarItem>\n        <ToolbarItem spacer={fifthSpacers}>\n          <Button variant=\"secondary\">Action</Button>\n        </ToolbarItem>\n        <ToolbarItem>\n          <Button variant=\"primary\">Action</Button>\n        </ToolbarItem>\n        <ToolbarItem variant=\"separator\"></ToolbarItem>\n        <ToolbarGroup spaceItems={spaceItems}>\n          <ToolbarItem>\n            <Button variant=\"secondary\">Action</Button>\n          </ToolbarItem>\n          <ToolbarItem>\n            <Button variant=\"secondary\">Action</Button>\n          </ToolbarItem>\n        </ToolbarGroup>\n      </React.Fragment>\n    );\n\n    return (\n      <Toolbar id=\"toolbar-spacers\">\n        <ToolbarContent>{items}</ToolbarContent>\n      </Toolbar>\n    );\n  }\n}","title":"Adjusting item spacers","lang":"js"}}>
      
    </Example>,
  'Adjusting item widths': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Toolbar, ToolbarItem, ToolbarContent } from '@patternfly/react-core';\nimport { Button } from '@patternfly/react-core';\n\nclass ToolbarWidths extends React.Component {\n  constructor(props) {\n    super(props);\n  }\n\n  render() {\n    const widths = {\n      default: '100px',\n      sm: '80px',\n      md: '150px',\n      lg: '200px',\n      xl: '250px',\n      '2xl': '300px'\n    };\n\n    const items = (\n      <React.Fragment>\n        <ToolbarItem widths={widths}>\n          <Button variant=\"secondary\" style={{ width: '100%' }}>\n            Action\n          </Button>\n        </ToolbarItem>\n      </React.Fragment>\n    );\n\n    return (\n      <Toolbar id=\"toolbar-widths\">\n        <ToolbarContent>{items}</ToolbarContent>\n      </Toolbar>\n    );\n  }\n}","title":"Adjusting item widths","lang":"js"}}>
      
    </Example>,
  'Adjusting toolbar inset': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Toolbar, ToolbarItem, ToolbarGroup, ToolbarContent } from '@patternfly/react-core';\nimport { Button } from '@patternfly/react-core';\n\nclass ToolbarSpacers extends React.Component {\n  constructor(props) {\n    super(props);\n  }\n\n  render() {\n    const items = (\n      <React.Fragment>\n        <ToolbarItem>\n          <Button variant=\"secondary\">Action</Button>\n        </ToolbarItem>\n        <ToolbarItem>\n          <Button variant=\"secondary\">Action</Button>\n        </ToolbarItem>\n        <ToolbarItem>\n          <Button variant=\"secondary\">Action</Button>\n        </ToolbarItem>\n        <ToolbarItem>\n          <Button variant=\"secondary\">Action</Button>\n        </ToolbarItem>\n        <ToolbarItem variant=\"separator\"></ToolbarItem>\n        <ToolbarItem>\n          <Button variant=\"secondary\">Action</Button>\n        </ToolbarItem>\n        <ToolbarItem>\n          <Button variant=\"primary\">Action</Button>\n        </ToolbarItem>\n        <ToolbarItem variant=\"separator\"></ToolbarItem>\n        <ToolbarGroup>\n          <ToolbarItem>\n            <Button variant=\"secondary\">Action</Button>\n          </ToolbarItem>\n          <ToolbarItem>\n            <Button variant=\"secondary\">Action</Button>\n          </ToolbarItem>\n        </ToolbarGroup>\n      </React.Fragment>\n    );\n\n    return (\n      <Toolbar\n        id=\"toolbar-spacers\"\n        inset={{\n          default: 'insetNone',\n          md: 'insetSm',\n          xl: 'inset2xl',\n          '2xl': 'insetLg'\n        }}\n      >\n        <ToolbarContent>{items}</ToolbarContent>\n      </Toolbar>\n    );\n  }\n}","title":"Adjusting toolbar inset","lang":"js"}}>
      
    </Example>,
  'Sticky': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Toolbar, ToolbarItem, ToolbarContent, SearchInput, Checkbox } from '@patternfly/react-core';\nimport SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';\n\nconst ToolbarItems = () => {\n  const [isSticky, setIsSticky] = React.useState(true);\n  const [showEvenOnly, setShowEvenOnly] = React.useState(true);\n  const array = [...Array(30).keys()];\n  const numbers = showEvenOnly ? array.filter(number => number % 2 === 0) : array;\n\n  return (\n    <React.Fragment>\n      <div style={{ overflowY: 'scroll', height: '200px' }}>\n        <Toolbar id=\"toolbar-spacers\" inset={{ default: 'insetNone' }} isSticky={isSticky}>\n          <ToolbarContent>\n            <ToolbarItem>\n              <SearchInput aria-label=\"search input example\" />\n            </ToolbarItem>\n            <ToolbarItem>\n              <Checkbox\n                label=\"Show only even number items\"\n                isChecked={showEvenOnly}\n                onChange={setShowEvenOnly}\n                aria-label=\"checkbox for showing only even numbers\"\n                id=\"showOnlyEvenCheckbox\"\n              />\n            </ToolbarItem>\n          </ToolbarContent>\n        </Toolbar>\n        <ul>\n          {numbers.map(number => (\n            <li key={number}>{`item ${number}`}</li>\n          ))}\n        </ul>\n      </div>\n      <Checkbox\n        label=\"Is toolbar sticky\"\n        isChecked={isSticky}\n        onChange={setIsSticky}\n        aria-label=\"checkbox for is sticky\"\n        id=\"isStickyCheckbox\"\n      />\n    </React.Fragment>\n  );\n};","title":"Sticky","lang":"js"}}>
      
    </Example>,
  'Groups': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Toolbar, ToolbarContent, ToolbarGroup, ToolbarItem } from '@patternfly/react-core';\nimport { Button, Select, SelectOption, SelectVariant } from '@patternfly/react-core';\nimport EditIcon from '@patternfly/react-icons/dist/esm/icons/edit-icon';\nimport CloneIcon from '@patternfly/react-icons/dist/esm/icons/clone-icon';\nimport SyncIcon from '@patternfly/react-icons/dist/esm/icons/sync-icon';\n\nclass ToolbarGroupTypes extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.firstOptions = [\n      { value: 'Filter 1', disabled: false, isPlaceholder: true },\n      { value: 'A', disabled: false },\n      { value: 'B', disabled: false },\n      { value: 'C', disabled: false }\n    ];\n\n    this.secondOptions = [\n      { value: 'Filter 2', disabled: false, isPlaceholder: true },\n      { value: '1', disabled: false },\n      { value: '2', disabled: false },\n      { value: '3', disabled: false }\n    ];\n\n    this.thirdOptions = [\n      { value: 'Filter 3', disabled: false, isPlaceholder: true },\n      { value: 'I', disabled: false },\n      { value: 'II', disabled: false },\n      { value: 'III', disabled: false }\n    ];\n\n    this.state = {\n      firstIsExpanded: false,\n      firstSelected: null,\n      secondIsExpanded: false,\n      secondSelected: null,\n      thirdIsExpanded: false,\n      thirdSelected: null\n    };\n\n    this.onFirstToggle = isExpanded => {\n      this.setState({\n        firstIsExpanded: isExpanded\n      });\n    };\n\n    this.onFirstSelect = (event, selection) => {\n      this.setState({\n        firstSelected: selection,\n        firstIsExpanded: false\n      });\n    };\n\n    this.onSecondToggle = isExpanded => {\n      this.setState({\n        secondIsExpanded: isExpanded\n      });\n    };\n\n    this.onSecondSelect = (event, selection) => {\n      this.setState({\n        secondSelected: selection,\n        secondIsExpanded: false\n      });\n    };\n\n    this.onThirdToggle = isExpanded => {\n      this.setState({\n        thirdIsExpanded: isExpanded\n      });\n    };\n\n    this.onThirdSelect = (event, selection) => {\n      this.setState({\n        thirdSelected: selection,\n        thirdIsExpanded: false\n      });\n    };\n  }\n\n  render() {\n    const {\n      firstIsExpanded,\n      firstSelected,\n      secondIsExpanded,\n      secondSelected,\n      thirdIsExpanded,\n      thirdSelected\n    } = this.state;\n\n    const filterGroupItems = (\n      <React.Fragment>\n        <ToolbarItem>\n          <Select\n            variant={SelectVariant.single}\n            aria-label=\"Select Input\"\n            onToggle={this.onFirstToggle}\n            onSelect={this.onFirstSelect}\n            selections={firstSelected}\n            isOpen={firstIsExpanded}\n          >\n            {this.firstOptions.map((option, index) => (\n              <SelectOption isDisabled={option.disabled} key={index} value={option.value} />\n            ))}\n          </Select>\n        </ToolbarItem>\n        <ToolbarItem>\n          <Select\n            variant={SelectVariant.single}\n            aria-label=\"Select Input\"\n            onToggle={this.onSecondToggle}\n            onSelect={this.onSecondSelect}\n            selections={secondSelected}\n            isOpen={secondIsExpanded}\n          >\n            {this.secondOptions.map((option, index) => (\n              <SelectOption isDisabled={option.disabled} key={index} value={option.value} />\n            ))}\n          </Select>\n        </ToolbarItem>\n        <ToolbarItem>\n          <Select\n            variant={SelectVariant.single}\n            aria-label=\"Select Input\"\n            onToggle={this.onThirdToggle}\n            onSelect={this.onThirdSelect}\n            selections={thirdSelected}\n            isOpen={thirdIsExpanded}\n          >\n            {this.thirdOptions.map((option, index) => (\n              <SelectOption isDisabled={option.disabled} key={index} value={option.value} />\n            ))}\n          </Select>\n        </ToolbarItem>\n      </React.Fragment>\n    );\n\n    const iconButtonGroupItems = (\n      <React.Fragment>\n        <ToolbarItem>\n          <Button variant=\"plain\" aria-label=\"edit\">\n            <EditIcon />\n          </Button>\n        </ToolbarItem>\n        <ToolbarItem>\n          <Button variant=\"plain\" aria-label=\"clone\">\n            <CloneIcon />\n          </Button>\n        </ToolbarItem>\n        <ToolbarItem>\n          <Button variant=\"plain\" aria-label=\"sync\">\n            <SyncIcon />\n          </Button>\n        </ToolbarItem>\n      </React.Fragment>\n    );\n\n    const buttonGroupItems = (\n      <React.Fragment>\n        <ToolbarItem>\n          <Button variant=\"primary\">Action</Button>\n        </ToolbarItem>\n        <ToolbarItem>\n          <Button variant=\"secondary\">Secondary</Button>\n        </ToolbarItem>\n        <ToolbarItem>\n          <Button variant=\"tertiary\">Tertiary</Button>\n        </ToolbarItem>\n      </React.Fragment>\n    );\n\n    const items = (\n      <React.Fragment>\n        <ToolbarGroup variant=\"filter-group\">{filterGroupItems}</ToolbarGroup>\n        <ToolbarGroup variant=\"icon-button-group\">{iconButtonGroupItems}</ToolbarGroup>\n        <ToolbarGroup variant=\"button-group\">{buttonGroupItems}</ToolbarGroup>\n      </React.Fragment>\n    );\n\n    return (\n      <Toolbar id=\"toolbar-group-types\">\n        <ToolbarContent>{items}</ToolbarContent>\n      </Toolbar>\n    );\n  }\n}","title":"Groups","lang":"js"}}>
      
      <p {...{"className":"ws-p"}}>
        {`Often, it makes sense to group sets of like items to create desired associations and to enable items to respond together to changes in viewport width. (Note: This example does not demonstrate the desired responsive behavior of the toolbar. That is handled in later examples.)`}
      </p>
    </Example>,
  'Component managed toggle groups': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Toolbar, ToolbarItem, ToolbarContent, ToolbarToggleGroup, ToolbarGroup } from '@patternfly/react-core';\nimport { Select, SelectOption, SelectVariant, SearchInput } from '@patternfly/react-core';\nimport FilterIcon from '@patternfly/react-icons/dist/esm/icons/filter-icon';\n\nclass ToolbarComponentMangedToggleGroup extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      inputValue: '',\n      statusIsExpanded: false,\n      statusSelected: null,\n      riskIsExpanded: false,\n      riskSelected: null\n    };\n\n    this.statusOptions = [\n      { value: 'Status', disabled: false, isPlaceholder: true },\n      { value: 'New', disabled: false },\n      { value: 'Pending', disabled: false },\n      { value: 'Running', disabled: false },\n      { value: 'Cancelled', disabled: false }\n    ];\n\n    this.riskOptions = [\n      { value: 'Risk', disabled: false, isPlaceholder: true },\n      { value: 'Low', disabled: false },\n      { value: 'Medium', disabled: false },\n      { value: 'High', disabled: false }\n    ];\n\n    this.onInputChange = newValue => {\n      this.setState({ inputValue: newValue });\n    };\n\n    this.onStatusToggle = isExpanded => {\n      this.setState({\n        statusIsExpanded: isExpanded\n      });\n    };\n\n    this.onStatusSelect = (event, selection, isPlaceholder) => {\n      if (isPlaceholder) this.clearStatusSelection();\n      this.setState({\n        statusSelected: selection,\n        statusIsExpanded: false\n      });\n    };\n\n    this.clearStatusSelection = () => {\n      this.setState({\n        statusSelected: null,\n        statusIsExpanded: false\n      });\n    };\n\n    this.onRiskToggle = isExpanded => {\n      this.setState({\n        riskIsExpanded: isExpanded\n      });\n    };\n\n    this.onRiskSelect = (event, selection, isPlaceholder) => {\n      if (isPlaceholder) this.clearRiskSelection();\n      this.setState({\n        riskSelected: selection,\n        riskIsExpanded: false\n      });\n    };\n\n    this.clearRiskSelection = () => {\n      this.setState({\n        riskSelected: null,\n        riskIsExpanded: false\n      });\n    };\n  }\n\n  render() {\n    const { inputValue, statusIsExpanded, statusSelected, riskIsExpanded, riskSelected } = this.state;\n\n    const toggleGroupItems = (\n      <React.Fragment>\n        <ToolbarItem variant=\"search-filter\">\n          <SearchInput\n            aria-label=\"search input example\"\n            onChange={this.onInputChange}\n            value={inputValue}\n            onClear={() => {\n              this.onInputChange('');\n            }}\n          />\n        </ToolbarItem>\n        <ToolbarGroup variant=\"filter-group\">\n          <ToolbarItem>\n            <Select\n              variant={SelectVariant.single}\n              aria-label=\"Select Input\"\n              onToggle={this.onStatusToggle}\n              onSelect={this.onStatusSelect}\n              selections={statusSelected}\n              isOpen={statusIsExpanded}\n            >\n              {this.statusOptions.map((option, index) => (\n                <SelectOption isDisabled={option.disabled} key={index} value={option.value} />\n              ))}\n            </Select>\n          </ToolbarItem>\n          <ToolbarItem>\n            <Select\n              variant={SelectVariant.single}\n              aria-label=\"Select Input\"\n              onToggle={this.onRiskToggle}\n              onSelect={this.onRiskSelect}\n              selections={riskSelected}\n              isOpen={riskIsExpanded}\n            >\n              {this.riskOptions.map((option, index) => (\n                <SelectOption isDisabled={option.disabled} key={index} value={option.value} />\n              ))}\n            </Select>\n          </ToolbarItem>\n        </ToolbarGroup>\n      </React.Fragment>\n    );\n\n    const items = (\n      <ToolbarToggleGroup toggleIcon={<FilterIcon />} breakpoint=\"xl\">\n        {toggleGroupItems}\n      </ToolbarToggleGroup>\n    );\n\n    return (\n      <Toolbar id=\"toolbar-component-managed-toggle-groups\" className=\"pf-m-toggle-group-container\">\n        <ToolbarContent>{items}</ToolbarContent>\n      </Toolbar>\n    );\n  }\n}","title":"Component managed toggle groups","lang":"js"}}>
      
    </Example>,
  'Consumer managed toggle groups': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Toolbar, ToolbarItem, ToolbarContent, ToolbarToggleGroup, ToolbarGroup } from '@patternfly/react-core';\nimport { Select, SelectOption, SelectVariant, SearchInput } from '@patternfly/react-core';\nimport FilterIcon from '@patternfly/react-icons/dist/esm/icons/filter-icon';\n\nclass ToolbarConsumerManagedToggleGroup extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      isExpanded: false,\n      inputValue: '',\n      statusIsExpanded: false,\n      statusSelected: null,\n      riskIsExpanded: false,\n      riskSelected: null\n    };\n\n    this.toggleIsExpanded = () => {\n      this.setState(prevState => ({\n        isExpanded: !prevState.isExpanded\n      }));\n    };\n\n    this.statusOptions = [\n      { value: 'Status', disabled: false, isPlaceholder: true },\n      { value: 'New', disabled: false },\n      { value: 'Pending', disabled: false },\n      { value: 'Running', disabled: false },\n      { value: 'Cancelled', disabled: false }\n    ];\n\n    this.riskOptions = [\n      { value: 'Risk', disabled: false, isPlaceholder: true },\n      { value: 'Low', disabled: false },\n      { value: 'Medium', disabled: false },\n      { value: 'High', disabled: false }\n    ];\n\n    this.onInputChange = newValue => {\n      this.setState({ inputValue: newValue });\n    };\n\n    this.onStatusToggle = isExpanded => {\n      this.setState({\n        statusIsExpanded: isExpanded\n      });\n    };\n\n    this.onStatusSelect = (event, selection, isPlaceholder) => {\n      if (isPlaceholder) this.clearStatusSelection();\n      this.setState({\n        statusSelected: selection,\n        statusIsExpanded: false\n      });\n    };\n\n    this.clearStatusSelection = () => {\n      this.setState({\n        statusSelected: null,\n        statusIsExpanded: false\n      });\n    };\n\n    this.onRiskToggle = isExpanded => {\n      this.setState({\n        riskIsExpanded: isExpanded\n      });\n    };\n\n    this.onRiskSelect = (event, selection, isPlaceholder) => {\n      if (isPlaceholder) this.clearRiskSelection();\n      this.setState({\n        riskSelected: selection,\n        riskIsExpanded: false\n      });\n    };\n\n    this.clearRiskSelection = () => {\n      this.setState({\n        riskSelected: null,\n        riskIsExpanded: false\n      });\n    };\n  }\n\n  render() {\n    const { isExpanded, inputValue, statusIsExpanded, statusSelected, riskIsExpanded, riskSelected } = this.state;\n\n    const toggleGroupItems = (\n      <React.Fragment>\n        <ToolbarItem variant=\"search-filter\">\n          <SearchInput\n            aria-label=\"search input example\"\n            onChange={this.onInputChange}\n            value={inputValue}\n            onClear={() => {\n              this.onInputChange('');\n            }}\n          />\n        </ToolbarItem>\n        <ToolbarGroup variant=\"filter-group\">\n          <ToolbarItem>\n            <Select\n              variant={SelectVariant.single}\n              aria-label=\"Select Input\"\n              onToggle={this.onStatusToggle}\n              onSelect={this.onStatusSelect}\n              selections={statusSelected}\n              isOpen={statusIsExpanded}\n            >\n              {this.statusOptions.map((option, index) => (\n                <SelectOption isDisabled={option.disabled} key={index} value={option.value} />\n              ))}\n            </Select>\n          </ToolbarItem>\n          <ToolbarItem>\n            <Select\n              variant={SelectVariant.single}\n              aria-label=\"Select Input\"\n              onToggle={this.onRiskToggle}\n              onSelect={this.onRiskSelect}\n              selections={riskSelected}\n              isOpen={riskIsExpanded}\n            >\n              {this.riskOptions.map((option, index) => (\n                <SelectOption isDisabled={option.disabled} key={index} value={option.value} />\n              ))}\n            </Select>\n          </ToolbarItem>\n        </ToolbarGroup>\n      </React.Fragment>\n    );\n\n    const items = (\n      <ToolbarToggleGroup toggleIcon={<FilterIcon />} breakpoint=\"xl\">\n        {toggleGroupItems}\n      </ToolbarToggleGroup>\n    );\n\n    return (\n      <Toolbar\n        id=\"toolbar-consumer-managed-toggle-groups\"\n        isExpanded={isExpanded}\n        className=\"pf-m-toggle-group-container\"\n        toggleIsExpanded={this.toggleIsExpanded}\n      >\n        <ToolbarContent>{items}</ToolbarContent>\n      </Toolbar>\n    );\n  }\n}","title":"Consumer managed toggle groups","lang":"js"}}>
      
      <p {...{"className":"ws-p"}}>
        {`If the consumer would prefer to manage the expanded state of the toggle group for smaller screen widths:`}
      </p>
      
      <ol {...{"className":"ws-ol"}}>
        

        
        <li {...{"className":"ws-li"}}>
          {`Add a toggleIsExpanded callback to Toolbar`}
        </li>
        

        
        <li {...{"className":"ws-li"}}>
          {`Pass in a boolean into the isExpanded prop to Toolbar`}
        </li>
        

      </ol>
      
      <ul {...{"className":"ws-ul"}}>
        

        
        <li {...{"className":"ws-li"}}>
          {`Note: Although the toggle group is aware of the consumer provided breakpoint, the expandable content is not. So if the expandable content is expanded and the screen width surpasses that of the breakpoint, then the expandable content will not know that and will remain open, this case should be considered and handled by the consumer as well.`}
        </li>
        

      </ul>
    </Example>,
  'With filters': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Toolbar,\n  ToolbarItem,\n  ToolbarContent,\n  ToolbarFilter,\n  ToolbarToggleGroup,\n  ToolbarGroup\n} from '@patternfly/react-core';\nimport {\n  Button,\n  Select,\n  SelectOption,\n  SelectVariant,\n  Dropdown,\n  DropdownItem,\n  DropdownSeparator,\n  DropdownPosition,\n  KebabToggle,\n  SearchInput\n} from '@patternfly/react-core';\nimport FilterIcon from '@patternfly/react-icons/dist/esm/icons/filter-icon';\nimport EditIcon from '@patternfly/react-icons/dist/esm/icons/edit-icon';\nimport CloneIcon from '@patternfly/react-icons/dist/esm/icons/clone-icon';\nimport SyncIcon from '@patternfly/react-icons/dist/esm/icons/sync-icon';\n\nclass ToolbarWithFilterExample extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      isExpanded: false,\n      inputValue: '',\n      statusIsExpanded: false,\n      riskIsExpanded: false,\n      filters: {\n        risk: ['Low'],\n        status: ['New', 'Pending']\n      },\n      kebabIsOpen: false\n    };\n\n    this.toggleIsExpanded = () => {\n      this.setState(prevState => ({\n        isExpanded: !prevState.isExpanded\n      }));\n    };\n\n    this.closeExpandableContent = () => {\n      this.setState(() => ({\n        isExpanded: false\n      }));\n    };\n\n    this.onInputChange = newValue => {\n      this.setState({ inputValue: newValue });\n    };\n\n    this.onSelect = (type, event, selection) => {\n      const checked = event.target.checked;\n      this.setState(prevState => {\n        const prevSelections = prevState.filters[type];\n        return {\n          filters: {\n            ...prevState.filters,\n            [type]: checked ? [...prevSelections, selection] : prevSelections.filter(value => value !== selection)\n          }\n        };\n      });\n    };\n\n    this.onStatusSelect = (event, selection) => {\n      this.onSelect('status', event, selection);\n    };\n\n    this.onRiskSelect = (event, selection) => {\n      this.onSelect('risk', event, selection);\n    };\n\n    this.onDelete = (type = '', id = '') => {\n      if (type) {\n        this.setState(prevState => {\n          const newState = Object.assign(prevState);\n          newState.filters[type.toLowerCase()] = newState.filters[type.toLowerCase()].filter(s => s !== id);\n          return {\n            filters: newState.filters\n          };\n        });\n      } else {\n        this.setState({\n          filters: {\n            risk: [],\n            status: []\n          }\n        });\n      }\n    };\n\n    this.onDeleteGroup = type => {\n      this.setState(prevState => {\n        prevState.filters[type.toLowerCase()] = [];\n        return {\n          filters: prevState.filters\n        };\n      });\n    };\n\n    this.onStatusToggle = isExpanded => {\n      this.setState({\n        statusIsExpanded: isExpanded\n      });\n    };\n\n    this.onRiskToggle = isExpanded => {\n      this.setState({\n        riskIsExpanded: isExpanded\n      });\n    };\n\n    this.onKebabToggle = isOpen => {\n      this.setState({\n        kebabIsOpen: isOpen\n      });\n    };\n  }\n\n  componentDidMount() {\n    window.addEventListener('resize', this.closeExpandableContent);\n  }\n\n  componentWillUnmount() {\n    window.removeEventListener('resize', this.closeExpandableContent);\n  }\n\n  render() {\n    const { inputValue, filters, statusIsExpanded, riskIsExpanded, kebabIsOpen } = this.state;\n\n    const statusMenuItems = [\n      <SelectOption key=\"statusNew\" value=\"New\" />,\n      <SelectOption key=\"statusPending\" value=\"Pending\" />,\n      <SelectOption key=\"statusRunning\" value=\"Running\" />,\n      <SelectOption key=\"statusCancelled\" value=\"Cancelled\" />\n    ];\n\n    const riskMenuItems = [\n      <SelectOption key=\"riskLow\" value=\"Low\" />,\n      <SelectOption key=\"riskMedium\" value=\"Medium\" />,\n      <SelectOption key=\"riskHigh\" value=\"High\" />\n    ];\n\n    const toggleGroupItems = (\n      <React.Fragment>\n        <ToolbarItem variant=\"search-filter\">\n          <SearchInput\n            aria-label=\"search input example\"\n            onChange={this.onInputChange}\n            value={inputValue}\n            onClear={() => {\n              this.onInputChange('');\n            }}\n          />\n        </ToolbarItem>\n        <ToolbarGroup variant=\"filter-group\">\n          <ToolbarFilter\n            chips={filters.status}\n            deleteChip={this.onDelete}\n            deleteChipGroup={this.onDeleteGroup}\n            categoryName=\"Status\"\n          >\n            <Select\n              variant={SelectVariant.checkbox}\n              aria-label=\"Status\"\n              onToggle={this.onStatusToggle}\n              onSelect={this.onStatusSelect}\n              selections={filters.status}\n              isOpen={statusIsExpanded}\n              placeholderText=\"Status\"\n            >\n              {statusMenuItems}\n            </Select>\n          </ToolbarFilter>\n          <ToolbarFilter chips={filters.risk} deleteChip={this.onDelete} categoryName=\"Risk\">\n            <Select\n              variant={SelectVariant.checkbox}\n              aria-label=\"Risk\"\n              onToggle={this.onRiskToggle}\n              onSelect={this.onRiskSelect}\n              selections={filters.risk}\n              isOpen={riskIsExpanded}\n              placeholderText=\"Risk\"\n            >\n              {riskMenuItems}\n            </Select>\n          </ToolbarFilter>\n        </ToolbarGroup>\n      </React.Fragment>\n    );\n\n    const dropdownItems = [\n      <DropdownItem key=\"link\">Link</DropdownItem>,\n      <DropdownItem key=\"action\" component=\"button\">\n        Action\n      </DropdownItem>,\n      <DropdownItem key=\"disabled link\" isDisabled>\n        Disabled Link\n      </DropdownItem>,\n      <DropdownItem key=\"disabled action\" isDisabled component=\"button\">\n        Disabled Action\n      </DropdownItem>,\n      <DropdownSeparator key=\"separator\" />,\n      <DropdownItem key=\"separated link\">Separated Link</DropdownItem>,\n      <DropdownItem key=\"separated action\" component=\"button\">\n        Separated Action\n      </DropdownItem>\n    ];\n\n    const toolbarItems = (\n      <React.Fragment>\n        <ToolbarToggleGroup toggleIcon={<FilterIcon />} breakpoint=\"xl\">\n          {toggleGroupItems}\n        </ToolbarToggleGroup>\n        <ToolbarGroup variant=\"icon-button-group\">\n          <ToolbarItem>\n            <Button variant=\"plain\" aria-label=\"edit\">\n              <EditIcon />\n            </Button>\n          </ToolbarItem>\n          <ToolbarItem>\n            <Button variant=\"plain\" aria-label=\"clone\">\n              <CloneIcon />\n            </Button>\n          </ToolbarItem>\n          <ToolbarItem>\n            <Button variant=\"plain\" aria-label=\"sync\">\n              <SyncIcon />\n            </Button>\n          </ToolbarItem>\n        </ToolbarGroup>\n        <ToolbarItem>\n          <Dropdown\n            toggle={<KebabToggle onToggle={this.onKebabToggle} />}\n            isOpen={kebabIsOpen}\n            isPlain\n            dropdownItems={dropdownItems}\n            position={DropdownPosition.right}\n          />\n        </ToolbarItem>\n      </React.Fragment>\n    );\n\n    return (\n      <Toolbar\n        id=\"toolbar-with-filter\"\n        className=\"pf-m-toggle-group-container\"\n        collapseListedFiltersBreakpoint=\"xl\"\n        clearAllFilters={this.onDelete}\n      >\n        <ToolbarContent>{toolbarItems}</ToolbarContent>\n      </Toolbar>\n    );\n  }\n}","title":"With filters","lang":"js"}}>
      
      <p {...{"className":"ws-p"}}>
        {`The ToolbarFilter component expects a consumer managed list of applied filters and a delete chip handler to be passed as props. Pass a deleteChipGroup prop to provide both a handler and visual styling to remove all chips in a group. Then the rendering of chips will be handled responsively by the Toolbar
When filters are applied, the toolbar will expand in height to make space for a row of filter chips. Upon clearing the applied filters, the toolbar will collapse to its default height.`}
      </p>
    </Example>,
  'With custom chip group content': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Toolbar,\n  ToolbarItem,\n  ToolbarContent,\n  ToolbarFilter,\n  ToolbarToggleGroup,\n  ToolbarGroup,\n  Button,\n  Select,\n  SelectOption,\n  SelectVariant\n} from '@patternfly/react-core';\nimport FilterIcon from '@patternfly/react-icons/dist/esm/icons/filter-icon';\nimport EditIcon from '@patternfly/react-icons/dist/esm/icons/edit-icon';\nimport CloneIcon from '@patternfly/react-icons/dist/esm/icons/clone-icon';\nimport SyncIcon from '@patternfly/react-icons/dist/esm/icons/sync-icon';\n\nexport const ToolbarCustomChipGroupContent: React.FunctionComponent = () => {\n  const [statusIsExpanded, setStatusIsExpanded] = React.useState<boolean>(false);\n  const [riskIsExpanded, setRiskIsExpanded] = React.useState<boolean>(false);\n  const [filters, setFilters] = React.useState({\n    risk: ['Low'],\n    status: ['New', 'Pending']\n  });\n\n  const onDelete = (type: string, id: string) => {\n    if (type === 'Risk') {\n      setFilters({ risk: filters.risk.filter((fil: string) => fil !== id), status: filters.status });\n    } else if (type === 'Status') {\n      setFilters({ risk: filters.risk, status: filters.status.filter((fil: string) => fil !== id) });\n    } else {\n      setFilters({ risk: [], status: [] });\n    }\n  };\n\n  const onDeleteGroup = (type: string) => {\n    if (type === 'Risk') {\n      setFilters({ risk: [], status: filters.status });\n    } else if (type === 'Status') {\n      setFilters({ risk: filters.risk, status: [] });\n    }\n  };\n\n  const onSelect = (type: 'Risk' | 'Status', event: React.MouseEvent | React.ChangeEvent, selection: string) => {\n    const checked = (event.target as any).checked;\n    if (type === 'Risk') {\n      setFilters({\n        risk: checked ? [...filters.risk, selection] : filters.risk.filter((fil: string) => fil !== selection),\n        status: filters.status\n      });\n    } else if (type === 'Status') {\n      setFilters({\n        risk: filters.risk,\n        status: checked ? [...filters.status, selection] : filters.status.filter((fil: string) => fil !== selection)\n      });\n    }\n  };\n\n  const statusMenuItems = [\n    <SelectOption key=\"statusNew\" value=\"New\" />,\n    <SelectOption key=\"statusPending\" value=\"Pending\" />,\n    <SelectOption key=\"statusRunning\" value=\"Running\" />,\n    <SelectOption key=\"statusCancelled\" value=\"Cancelled\" />\n  ];\n\n  const riskMenuItems = [\n    <SelectOption key=\"riskLow\" value=\"Low\" />,\n    <SelectOption key=\"riskMedium\" value=\"Medium\" />,\n    <SelectOption key=\"riskHigh\" value=\"High\" />\n  ];\n\n  const toggleGroupItems = (\n    <React.Fragment>\n      <ToolbarGroup variant=\"filter-group\">\n        <ToolbarFilter\n          chips={filters.status}\n          deleteChip={(category, chip) => onDelete(category as string, chip as string)}\n          deleteChipGroup={category => onDeleteGroup(category as string)}\n          categoryName=\"Status\"\n        >\n          <Select\n            variant={SelectVariant.checkbox}\n            aria-label=\"Status\"\n            onToggle={(isExpanded: boolean) => setStatusIsExpanded(isExpanded)}\n            onSelect={(event, selection) => onSelect('Status', event, selection as string)}\n            selections={filters.status}\n            isOpen={statusIsExpanded}\n            placeholderText=\"Status\"\n          >\n            {statusMenuItems}\n          </Select>\n        </ToolbarFilter>\n        <ToolbarFilter\n          chips={filters.risk}\n          deleteChip={(category, chip) => onDelete(category as string, chip as string)}\n          deleteChipGroup={category => onDeleteGroup(category as string)}\n          categoryName=\"Risk\"\n        >\n          <Select\n            variant={SelectVariant.checkbox}\n            aria-label=\"Risk\"\n            onToggle={(isExpanded: boolean) => setRiskIsExpanded(isExpanded)}\n            onSelect={(event, selection) => onSelect('Risk', event, selection as string)}\n            selections={filters.risk}\n            isOpen={riskIsExpanded}\n            placeholderText=\"Risk\"\n          >\n            {riskMenuItems}\n          </Select>\n        </ToolbarFilter>\n      </ToolbarGroup>\n    </React.Fragment>\n  );\n\n  const toolbarItems = (\n    <React.Fragment>\n      <ToolbarToggleGroup toggleIcon={<FilterIcon />} breakpoint=\"xl\">\n        {toggleGroupItems}\n      </ToolbarToggleGroup>\n      <ToolbarGroup variant=\"icon-button-group\">\n        <ToolbarItem>\n          <Button variant=\"plain\" aria-label=\"edit\">\n            <EditIcon />\n          </Button>\n        </ToolbarItem>\n        <ToolbarItem>\n          <Button variant=\"plain\" aria-label=\"clone\">\n            <CloneIcon />\n          </Button>\n        </ToolbarItem>\n        <ToolbarItem>\n          <Button variant=\"plain\" aria-label=\"sync\">\n            <SyncIcon />\n          </Button>\n        </ToolbarItem>\n      </ToolbarGroup>\n    </React.Fragment>\n  );\n\n  const customChipGroupContent = (\n    <React.Fragment>\n      <ToolbarItem>\n        <Button variant=\"link\" onClick={() => {}} isInline>\n          Save filters\n        </Button>\n      </ToolbarItem>\n      <ToolbarItem>\n        <Button variant=\"link\" onClick={() => onDelete('', '')} isInline>\n          Clear all filters\n        </Button>\n      </ToolbarItem>\n    </React.Fragment>\n  );\n\n  return (\n    <Toolbar\n      id=\"toolbar-with-filter\"\n      className=\"pf-m-toggle-group-container\"\n      collapseListedFiltersBreakpoint=\"xl\"\n      customChipGroupContent={customChipGroupContent}\n    >\n      <ToolbarContent>{toolbarItems}</ToolbarContent>\n    </Toolbar>\n  );\n};\n","title":"With custom chip group content","lang":"ts"}}>
      
      <p {...{"className":"ws-p"}}>
        {`The chip groups generated by toolbar filters may be further customized through the `}
        
        <code {...{"className":"ws-code"}}>
          {`customChipGroupContent`}
        </code>
        {` property, which will append to the filter chip groups. This property will remove the default `}
        
        <code {...{"className":"ws-code"}}>
          {`Clear all filters`}
        </code>
        {` button.`}
      </p>
    </Example>,
  'Stacked example': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Button,\n  KebabToggle,\n  Select,\n  SelectOption,\n  SelectVariant,\n  Pagination,\n  Dropdown,\n  DropdownSeparator,\n  DropdownToggle,\n  DropdownToggleCheckbox,\n  DropdownItem,\n  DropdownPosition,\n  Divider,\n  OverflowMenu,\n  OverflowMenuContent,\n  OverflowMenuControl,\n  OverflowMenuGroup,\n  OverflowMenuItem,\n  Toolbar,\n  ToolbarContent,\n  ToolbarToggleGroup,\n  ToolbarItem\n} from '@patternfly/react-core';\nimport FilterIcon from '@patternfly/react-icons/dist/esm/icons/filter-icon';\n\nclass ToolbarStacked extends React.Component {\n  constructor(props) {\n    super(props);\n\n    // toggle group - three option menus with labels, two icon buttons, Kebab menu - right aligned\n    // pagination - right aligned\n    this.resourceOptions = [\n      { value: 'All resources', disabled: false },\n      { value: 'Deployment', disabled: false },\n      { value: 'Pod', disabled: false }\n    ];\n\n    this.statusOptions = [\n      { value: 'Running', disabled: false },\n      { value: 'New', disabled: false },\n      { value: 'Pending', disabled: false },\n      { value: 'Cancelled', disabled: false }\n    ];\n\n    this.typeOptions = [\n      { value: 'Any type', disabled: false, isPlaceholder: true },\n      { value: 'No type', disabled: false }\n    ];\n\n    this.state = {\n      kebabIsOpen: false,\n      resourceIsExpanded: false,\n      resourceSelected: null,\n      statusIsExpanded: false,\n      statusSelected: null,\n      splitButtonDropdownIsOpen: false,\n      page: 1,\n      perPage: 20\n    };\n\n    this.onKebabToggle = isOpen => {\n      this.setState({\n        kebabIsOpen: isOpen\n      });\n    };\n\n    this.onResourceToggle = isExpanded => {\n      this.setState({\n        resourceIsExpanded: isExpanded\n      });\n    };\n\n    this.onResourceSelect = (event, selection) => {\n      this.setState({\n        resourceSelected: selection,\n        resourceIsExpanded: false\n      });\n    };\n\n    this.onStatusToggle = isExpanded => {\n      this.setState({\n        statusIsExpanded: isExpanded\n      });\n    };\n\n    this.onStatusSelect = (event, selection) => {\n      this.setState({\n        statusSelected: selection,\n        statusIsExpanded: false\n      });\n    };\n\n    this.onSetPage = (_event, pageNumber) => {\n      this.setState({\n        page: pageNumber\n      });\n    };\n\n    this.onPerPageSelect = (_event, perPage) => {\n      this.setState({\n        perPage\n      });\n    };\n\n    this.onSplitButtonToggle = isOpen => {\n      this.setState({\n        splitButtonDropdownIsOpen: isOpen\n      });\n    };\n\n    this.onSplitButtonSelect = event => {\n      this.setState({\n        splitButtonDropdownIsOpen: !this.state.splitButtonDropdownIsOpen\n      });\n    };\n  }\n\n  render() {\n    const {\n      kebabIsOpen,\n      resourceIsExpanded,\n      resourceSelected,\n      statusIsExpanded,\n      statusSelected,\n      splitButtonDropdownIsOpen\n    } = this.state;\n\n    const dropdownItems = [\n      <DropdownItem key=\"link\">Link</DropdownItem>,\n      <DropdownItem key=\"action\" component=\"button\">\n        Action\n      </DropdownItem>,\n      <DropdownItem key=\"disabled link\" isDisabled>\n        Disabled Link\n      </DropdownItem>,\n      <DropdownItem key=\"disabled action\" isDisabled component=\"button\">\n        Disabled Action\n      </DropdownItem>,\n      <DropdownSeparator key=\"separator\" />,\n      <DropdownItem key=\"separated link\">Separated Link</DropdownItem>,\n      <DropdownItem key=\"separated action\" component=\"button\">\n        Separated Action\n      </DropdownItem>\n    ];\n\n    const splitButtonDropdownItems = [\n      <DropdownItem key=\"link\">Link</DropdownItem>,\n      <DropdownItem key=\"action\" component=\"button\">\n        Action\n      </DropdownItem>,\n      <DropdownItem key=\"disabled link\" isDisabled>\n        Disabled Link\n      </DropdownItem>,\n      <DropdownItem key=\"disabled action\" isDisabled component=\"button\">\n        Disabled Action\n      </DropdownItem>\n    ];\n\n    const toggleGroupItems = (\n      <React.Fragment>\n        <ToolbarItem variant=\"label\" id=\"stacked-example-resource-select\">\n          Resource\n        </ToolbarItem>\n        <ToolbarItem>\n          <Select\n            variant={SelectVariant.single}\n            aria-label=\"Select Input\"\n            onToggle={this.onResourceToggle}\n            onSelect={this.onResourceSelect}\n            selections={resourceSelected}\n            isOpen={resourceIsExpanded}\n            ariaLabelledBy=\"stacked-example-resource-select\"\n          >\n            {this.resourceOptions.map((option, index) => (\n              <SelectOption isDisabled={option.disabled} key={index} value={option.value} />\n            ))}\n          </Select>\n        </ToolbarItem>\n        <ToolbarItem variant=\"label\" id=\"stacked-example-status-select\">\n          Status\n        </ToolbarItem>\n        <ToolbarItem>\n          <Select\n            variant={SelectVariant.single}\n            aria-label=\"Select Input\"\n            onToggle={this.onStatusToggle}\n            onSelect={this.onStatusSelect}\n            selections={statusSelected}\n            isOpen={statusIsExpanded}\n            ariaLabelledBy=\"stacked-example-status-select\"\n          >\n            {this.statusOptions.map((option, index) => (\n              <SelectOption isDisabled={option.disabled} key={index} value={option.value} />\n            ))}\n          </Select>\n        </ToolbarItem>\n      </React.Fragment>\n    );\n\n    const firstRowItems = (\n      <React.Fragment>\n        <Toolbar>\n          <ToolbarContent>\n            <ToolbarToggleGroup toggleIcon={<FilterIcon />} breakpoint=\"lg\">\n              {toggleGroupItems}\n            </ToolbarToggleGroup>\n            <ToolbarItem variant=\"overflow-menu\">\n              <OverflowMenu breakpoint=\"2xl\">\n                <OverflowMenuContent>\n                  <OverflowMenuGroup groupType=\"button\">\n                    <OverflowMenuItem>\n                      <Button variant={ButtonVariant.primary}>Primary</Button>\n                    </OverflowMenuItem>\n                    <OverflowMenuItem>\n                      <Button variant={ButtonVariant.secondary}>Secondary</Button>\n                    </OverflowMenuItem>\n                  </OverflowMenuGroup>\n                </OverflowMenuContent>\n                <OverflowMenuControl hasAdditionalOptions>\n                  <Dropdown\n                    onSelect={this.onResourceSelect}\n                    toggle={<KebabToggle onToggle={this.onKebabToggle} />}\n                    isOpen={kebabIsOpen}\n                    isPlain\n                    dropdownItems={dropdownItems}\n                    position={DropdownPosition.right}\n                  />\n                </OverflowMenuControl>\n              </OverflowMenu>\n            </ToolbarItem>\n          </ToolbarContent>\n        </Toolbar>\n      </React.Fragment>\n    );\n\n    const secondRowItems = (\n      <React.Fragment>\n        <Toolbar>\n          <ToolbarContent>\n            <ToolbarItem variant=\"bulk-select\">\n              <Dropdown\n                onSelect={this.onSplitButtonSelect}\n                toggle={\n                  <DropdownToggle\n                    id=\"stacked-example-toggle\"\n                    splitButtonItems={[\n                      <DropdownToggleCheckbox id=\"example-checkbox-1\" key=\"split-checkbox\" aria-label=\"Select all\" />\n                    ]}\n                    onToggle={this.onSplitButtonToggle}\n                  />\n                }\n                isOpen={splitButtonDropdownIsOpen}\n                dropdownItems={splitButtonDropdownItems}\n              />\n            </ToolbarItem>\n            <ToolbarItem variant=\"pagination\" align={{ default: 'alignRight' }}>\n              <Pagination\n                itemCount={37}\n                perPage={this.state.perPage}\n                page={this.state.page}\n                onSetPage={this.onSetPage}\n                widgetId=\"pagination-options-menu-top\"\n                onPerPageSelect={this.onPerPageSelect}\n              />\n            </ToolbarItem>\n          </ToolbarContent>\n        </Toolbar>\n      </React.Fragment>\n    );\n\n    return (\n      <React.Fragment>\n        {firstRowItems}\n        <Divider />\n        {secondRowItems}\n      </React.Fragment>\n    );\n  }\n}","title":"Stacked example","lang":"js"}}>
      
      <p {...{"className":"ws-p"}}>
        {`There may be situations where all of the required elements simply cannot fit in a single line.`}
      </p>
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Items"])}
    {React.createElement(pageData.examples["Adjusting item spacers"])}
    {React.createElement(pageData.examples["Adjusting item widths"])}
    {React.createElement(pageData.examples["Adjusting toolbar inset"])}
    {React.createElement(pageData.examples["Sticky"])}
    {React.createElement(pageData.examples["Groups"])}
    <AutoLinkHeader {...{"id":"examples-with-toggle-groups-and-filters","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples with toggle groups and filters`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`A toggle group can be used when you want to collapse a set of items into an overlay panel at a certain breakpoint. This allows complex toolbars with multiple items and groups of items to be responsive. A toggle group is useful for containing filter controls, for example. When the toolbar responds to adapt to a mobile viewport, the contents contained in a toggle group will collapse into an overlay panel that can be toggled by clicking the Filter icon.`}
    </p>
    {React.createElement(pageData.examples["Component managed toggle groups"])}
    {React.createElement(pageData.examples["Consumer managed toggle groups"])}
    {React.createElement(pageData.examples["With filters"])}
    {React.createElement(pageData.examples["With custom chip group content"])}
    {React.createElement(pageData.examples["Stacked example"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsToolbarReactDocs';
Component.pageData = pageData;

export default Component;
