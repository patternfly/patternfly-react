import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';
import CodeBranchIcon from '@patternfly/react-icons/dist/esm/icons/code-branch-icon';
import CodeIcon from '@patternfly/react-icons/dist/esm/icons/code-icon';
import CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';
import LeafIcon from '@patternfly/react-icons/dist/esm/icons/leaf-icon';
import FolderIcon from '@patternfly/react-icons/dist/esm/icons/folder-icon';
import FolderOpenIcon from '@patternfly/react-icons/dist/esm/icons/folder-open-icon';
import SortAmountDownIcon from '@patternfly/react-icons/dist/esm/icons/sort-amount-down-icon';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';
const pageData = {
  "id": "Table",
  "section": "components",
  "source": "react-legacy",
  "slug": "/components/table/react-legacy",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-table/src/components/Table/examples/Table.md",
  "propComponents": [
    {
      "name": "Table",
      "description": "",
      "props": [
        {
          "name": "actionResolver",
          "type": "IActionsResolver",
          "description": "Resolver for the given action"
        },
        {
          "name": "actions",
          "type": "IActions",
          "description": "Actions to add to the Table"
        },
        {
          "name": "actionsToggle",
          "type": "(props: CustomActionsToggleProps) => React.ReactNode",
          "description": "The toggle of the actions menu dropdown. A KebabToggle or DropdownToggle component"
        },
        {
          "name": "areActionsDisabled",
          "type": "IAreActionsDisabled",
          "description": "Specifies if the Kebab for actions is disabled"
        },
        {
          "name": "aria-label",
          "type": "string",
          "description": "Adds an accessible name for the Table",
          "defaultValue": "undefined"
        },
        {
          "name": "bodyWrapper",
          "type": "Function",
          "description": "Wrapper for the body"
        },
        {
          "name": "borders",
          "type": "boolean",
          "description": "Render borders\nBorders can only currently be disabled if the variant is set to 'compact'\nhttps://github.com/patternfly/patternfly/issues/3650",
          "defaultValue": "true"
        },
        {
          "name": "canCollapseAll",
          "type": "boolean",
          "description": "Enables or disables the ability to expand all",
          "defaultValue": "false"
        },
        {
          "name": "canSelectAll",
          "type": "boolean",
          "description": "Enables or disables the ability to select all - this is mutually exclusive with radio button select variant",
          "defaultValue": "true"
        },
        {
          "name": "canSortFavorites",
          "type": "boolean",
          "description": "Along with the onSort prop, enables favorites sorting, defaults to true",
          "defaultValue": "true"
        },
        {
          "name": "caption",
          "type": "React.ReactNode",
          "description": "Component used for caption",
          "defaultValue": "undefined"
        },
        {
          "name": "cells",
          "type": "(ICell | string)[]",
          "description": "Cell/column data",
          "required": true
        },
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the Table",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the Table",
          "defaultValue": "''"
        },
        {
          "name": "collapseAllAriaLabel",
          "type": "string",
          "description": "An optional alternative aria label for the expand collapse all table header",
          "defaultValue": "''"
        },
        {
          "name": "contentId",
          "type": "string",
          "description": "ID for content",
          "defaultValue": "'expanded-content'"
        },
        {
          "name": "dropdownDirection",
          "type": "'up' | 'down'",
          "description": "The desired direction to show the dropdown when clicking on the actions Kebab. Can only be used together with `actions` property",
          "defaultValue": "DropdownDirection.down"
        },
        {
          "name": "dropdownPosition",
          "type": "'right' | 'left'",
          "description": "The desired position to show the dropdown when clicking on the actions Kebab. Can only be used together with `actions` property",
          "defaultValue": "DropdownPosition.right"
        },
        {
          "name": "expandId",
          "type": "string",
          "description": "ID for expand",
          "defaultValue": "'expandable-toggle'"
        },
        {
          "name": "gridBreakPoint",
          "type": "'' | 'grid' | 'grid-md' | 'grid-lg' | 'grid-xl' | 'grid-2xl'",
          "description": "Specifies the grid breakpoints",
          "defaultValue": "TableGridBreakpoint.gridMd"
        },
        {
          "name": "header",
          "type": "React.ReactNode",
          "description": "Component to place in the header",
          "defaultValue": "undefined"
        },
        {
          "name": "isExpandable",
          "type": "boolean",
          "description": "Flag indicating this table contains expandable rows to maintain proper striping"
        },
        {
          "name": "isHeaderSelectDisabled",
          "type": "boolean",
          "description": "Flag indicating the select all checkbox is disabled",
          "defaultValue": "false"
        },
        {
          "name": "isNested",
          "type": "boolean",
          "description": "Flag indicating this table is nested within another table",
          "defaultValue": "false"
        },
        {
          "name": "isStickyHeader",
          "type": "boolean",
          "description": "If set to true, the table header sticks to the top of its container",
          "defaultValue": "false"
        },
        {
          "name": "isStriped",
          "type": "boolean",
          "description": "Flag indicating this table is striped"
        },
        {
          "name": "isTreeTable",
          "type": "boolean",
          "description": "Flag indicating table is a tree table",
          "defaultValue": "false"
        },
        {
          "name": "onCollapse",
          "type": "OnCollapse",
          "description": "Function triggered when an expandable content is collapsed. When this is used, one expandable toggle button will be positioned in the first cell of a non-expandable row, preceding an expandable row"
        },
        {
          "name": "onExpand",
          "type": "OnExpand",
          "description": "Function triggered when a compound expandable item is clicked"
        },
        {
          "name": "onFavorite",
          "type": "OnFavorite",
          "description": "Enables favorites column\nCallback triggered when a row is favorited/unfavorited"
        },
        {
          "name": "onRowEdit",
          "type": "OnRowEdit",
          "description": "Function triggered when a row's inline edit is activated. Adds a column for inline edit when present."
        },
        {
          "name": "onSelect",
          "type": "OnSelect",
          "description": "Function triggered when a row's checkbox is selected. When this is used, one checkbox/radio button will be positioned in the first or second cell of a non-expandable row"
        },
        {
          "name": "onSort",
          "type": "OnSort",
          "description": "Function triggered when sort icon is clicked"
        },
        {
          "name": "ouiaSafe",
          "type": "No type info",
          "defaultValue": "true"
        },
        {
          "name": "role",
          "type": "string",
          "description": "A valid WAI-ARIA role to be applied to the table element",
          "defaultValue": "'grid'"
        },
        {
          "name": "rowLabeledBy",
          "type": "string",
          "description": "label for row",
          "defaultValue": "'simple-node'"
        },
        {
          "name": "rows",
          "type": "(IRow | string[])[]",
          "description": "Row data",
          "required": true
        },
        {
          "name": "rowWrapper",
          "type": "(props: RowWrapperProps) => JSX.Element",
          "description": "Wrapper for the row"
        },
        {
          "name": "selectVariant",
          "type": "'checkbox' | 'radio'",
          "description": "Specifies the type of the select element variant - can be one of checkbox or radio button",
          "defaultValue": "'checkbox'"
        },
        {
          "name": "sortBy",
          "type": "ISortBy",
          "description": "Specifies the initial sorting pattern for the table - asc/desc and the index of the column to sort by"
        },
        {
          "name": "variant",
          "type": "literal",
          "description": "Style variant for the Table",
          "defaultValue": "null"
        }
      ]
    },
    {
      "name": "TableHeader",
      "description": "",
      "props": [
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the TableHeader"
        }
      ]
    },
    {
      "name": "TableBody",
      "description": "",
      "props": [
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the TableBody",
          "defaultValue": "''"
        },
        {
          "name": "isEvenStriped",
          "type": "boolean",
          "description": "Flag indicating the <tbody> contains evenly striped rows."
        },
        {
          "name": "isOddStriped",
          "type": "boolean",
          "description": "Flag indicating the <tbody> contains oddly striped rows."
        },
        {
          "name": "onRowClick",
          "type": "(\n  event: React.KeyboardEvent | React.MouseEvent,\n  row: IRow,\n  rowProps: IExtraRowData,\n  computedData: IComputedData\n) => void",
          "description": "A click handler for the row",
          "defaultValue": "(\n  event: React.MouseEvent | React.KeyboardEvent,\n  row: IRow,\n  rowProps: IExtraRowData,\n  computedData: IComputedData\n) =>\n  /* eslint-enable @typescript-eslint/no-unused-vars */\n  undefined as OnRowClick"
        }
      ]
    },
    {
      "name": "ISortBy",
      "description": "",
      "props": [
        {
          "name": "defaultDirection",
          "type": "'asc' | 'desc'",
          "description": "Defaulting sorting direction. Defaults to \"asc\"."
        },
        {
          "name": "direction",
          "type": "'asc' | 'desc'",
          "description": "Current sort direction"
        },
        {
          "name": "index",
          "type": "number",
          "description": "Index of the current sorted column"
        }
      ]
    }
  ],
  "cssPrefix": [
    "pf-c-table"
  ],
  "examples": [
    "Basic",
    "Custom row wrapper",
    "Sortable & wrapping column headers",
    "Sortable - custom control",
    "Selectable with checkbox",
    "Selectable radio input",
    "Hoverable rows, selectable rows, and header cell tooltips/popovers",
    "Actions and first cell in body rows as th",
    "Expandable",
    "Compound expandable",
    "With width and breakpoint visibility modifiers",
    "Controlling text",
    "Modifiers with table text",
    "Empty state",
    "Editable rows",
    "Favoritable (implemented with sortable and selectable)",
    "Tree table",
    "Striped",
    "Striped expandable",
    "Striped custom tr"
  ]
};
pageData.liveContext = {
  SearchIcon,
  CodeBranchIcon,
  CodeIcon,
  CubeIcon,
  LeafIcon,
  FolderIcon,
  FolderOpenIcon,
  SortAmountDownIcon,
  css,
  styles
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Table, TableHeader, TableBody, TableProps } from '@patternfly/react-table';\nimport { ToggleGroup, ToggleGroupItem, ToggleGroupItemProps } from '@patternfly/react-core';\ninterface Repository {\n  name: string;\n  branches: string;\n  prs: string;\n  workspaces: string;\n  lastCommit: string;\n}\n\ntype ExampleType = 'default' | 'compact' | 'compactBorderless';\n\nexport const LegacyTableBasic: React.FunctionComponent = () => {\n  // In real usage, this data would come from some external source like an API via props.\n  const repositories: Repository[] = [\n    {\n      name: 'Repository one',\n      branches: 'Branch one',\n      prs: 'PR one',\n      workspaces: 'Workspace one',\n      lastCommit: 'Commit one'\n    },\n    {\n      name: 'Repository two',\n      branches: 'Branch two',\n      prs: 'PR two',\n      workspaces: 'Workspace two',\n      lastCommit: 'Commit two'\n    },\n    {\n      name: 'Repository three',\n      branches: 'Branch three',\n      prs: 'PR three',\n      workspaces: 'Workspace three',\n      lastCommit: 'Commit three'\n    }\n  ];\n\n  // This state is just for the ToggleGroup in this example and isn't necessary for TableComposable usage.\n  const [exampleChoice, setExampleChoice] = React.useState<ExampleType>('default');\n  const onExampleTypeChange: ToggleGroupItemProps['onChange'] = (_isSelected, event) => {\n    const id = event.currentTarget.id;\n    setExampleChoice(id as ExampleType);\n  };\n\n  const columns: TableProps['cells'] = ['Repositories', 'Branches', 'Pull requests', 'Workspaces', 'Last commit'];\n  const rows: TableProps['rows'] = repositories.map(repo => [\n    repo.name,\n    repo.branches,\n    repo.prs,\n    repo.workspaces,\n    repo.lastCommit\n  ]);\n\n  return (\n    <React.Fragment>\n      <ToggleGroup aria-label=\"Default with single selectable\">\n        <ToggleGroupItem\n          text=\"Default\"\n          buttonId=\"default\"\n          isSelected={exampleChoice === 'default'}\n          onChange={onExampleTypeChange}\n        />\n        <ToggleGroupItem\n          text=\"Compact\"\n          buttonId=\"compact\"\n          isSelected={exampleChoice === 'compact'}\n          onChange={onExampleTypeChange}\n        />\n        <ToggleGroupItem\n          text=\"Compact borderless\"\n          buttonId=\"compactBorderless\"\n          isSelected={exampleChoice === 'compactBorderless'}\n          onChange={onExampleTypeChange}\n        />\n      </ToggleGroup>\n      <Table\n        aria-label=\"Simple Table\"\n        variant={exampleChoice !== 'default' ? 'compact' : undefined}\n        borders={exampleChoice !== 'compactBorderless'}\n        cells={columns}\n        rows={rows}\n      >\n        <TableHeader />\n        <TableBody />\n      </Table>\n    </React.Fragment>\n  );\n};\n","title":"Basic","lang":"ts"}}>
      
    </Example>,
  'Custom row wrapper': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Table, TableHeader, TableBody, TableProps } from '@patternfly/react-table';\nimport { css } from '@patternfly/react-styles';\n\ninterface Repository {\n  name: string;\n  branches: string | null;\n  prs: string | null;\n  workspaces: string;\n  lastCommit: string;\n}\n\nexport const LegacyTableMisc: React.FunctionComponent = () => {\n  // In real usage, this data would come from some external source like an API via props.\n  const repositories: Repository[] = [\n    { name: 'one', branches: 'two', prs: 'three', workspaces: 'four', lastCommit: 'five' },\n    { name: 'one - 2', branches: null, prs: null, workspaces: 'four - 2', lastCommit: 'five - 2' },\n    { name: 'one - 3', branches: 'two - 3', prs: 'three - 3', workspaces: 'four - 3', lastCommit: 'five - 3' }\n  ];\n\n  const columns: TableProps['cells'] = ['Repositories', 'Branches', 'Pull requests', 'Workspaces', 'Last commit'];\n  const rows: TableProps['rows'] = repositories.map(repo => [\n    repo.name,\n    repo.branches || '',\n    repo.prs || '',\n    repo.workspaces,\n    repo.lastCommit\n  ]);\n\n  const customRowWrapper: TableProps['rowWrapper'] = ({ trRef, className, rowProps, row: _row, ...props }) => {\n    const isOddRow = rowProps ? !!((rowProps.rowIndex + 1) % 2) : true;\n    const customStyle = {\n      borderLeft: '3px solid var(--pf-global--primary-color--100)'\n    };\n    return (\n      <tr\n        {...props}\n        ref={trRef as React.LegacyRef<HTMLTableRowElement>}\n        className={css(className, isOddRow ? 'odd-row-class' : 'even-row-class', 'custom-static-class')}\n        style={isOddRow ? customStyle : {}}\n      />\n    );\n  };\n\n  return (\n    <Table\n      caption=\"Table with custom row wrapper that styles odd rows\"\n      cells={columns}\n      rows={rows}\n      rowWrapper={customRowWrapper}\n    >\n      <TableHeader />\n      <TableBody />\n    </Table>\n  );\n};\n","title":"Custom row wrapper","lang":"ts"}}>
      
      <p {...{"className":"ws-p"}}>
        {`Custom row wrappers are passed to the `}
        
        <code {...{"className":"ws-code"}}>
          {`Table`}
        </code>
        {` component via the `}
        
        <code {...{"className":"ws-code"}}>
          {`rowWrapper`}
        </code>
        {` prop.
Each `}
        
        <code {...{"className":"ws-code"}}>
          {`rowWrapper`}
        </code>
        {` should return a tr element.`}
      </p>
      
      <Example {...{"code":"rowWrapper?: (props: RowWrapperProps) => JSX.Element;"}}>
        
      </Example>
      
      <p {...{"className":"ws-p"}}>
        {`RowWrapperProps:`}
      </p>
      
      <Example {...{"code":"interface RowWrapperProps {\n  trRef?: React.Ref<any> | Function;\n  className?: string;\n  onScroll?: React.UIEventHandler;\n  onResize?: React.UIEventHandler;\n  row?: IRow;\n  rowProps?: {\n    rowIndex: number;\n    rowKey: string;\n  };\n  children?: React.ReactNode;\n}"}}>
        
      </Example>
    </Example>,
  'Sortable & wrapping column headers': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  TableProps,\n  sortable,\n  info,\n  cellWidth,\n  wrappable,\n  Table,\n  TableBody,\n  TableHeader\n} from '@patternfly/react-table';\n\ninterface Repository {\n  name: string;\n  branches: string;\n  prs: string;\n  workspaces: string;\n  lastCommit: string;\n}\n\nexport const LegacyTableSortable: React.FunctionComponent = () => {\n  // In real usage, this data would come from some external source like an API via props.\n  const repositories: Repository[] = [\n    { name: 'one', branches: 'two', prs: 'a', workspaces: 'four', lastCommit: 'five' },\n    { name: 'a', branches: 'two', prs: 'k', workspaces: 'four', lastCommit: 'five' },\n    { name: 'p', branches: 'two', prs: 'b', workspaces: 'four', lastCommit: 'five' }\n  ];\n\n  // Index of the currently sorted column\n  // Note: if you intend to make columns reorderable, you may instead want to use a non-numeric key\n  // as the identifier of the sorted column. See the \"Compound expandable\" example.\n  const [activeSortIndex, setActiveSortIndex] = React.useState<number | null>(null);\n\n  // Sort direction of the currently sorted column\n  const [activeSortDirection, setActiveSortDirection] = React.useState<'asc' | 'desc' | null>(null);\n\n  // Since OnSort specifies sorted columns by index, we need sortable values for our object by column index.\n  // This example is trivial since our data objects just contain strings, but if the data was more complex\n  // this would be a place to return simplified string or number versions of each column to sort by.\n  const getSortableRowValues = (repo: Repository): (string | number)[] => {\n    const { name, branches, prs, workspaces, lastCommit } = repo;\n    return [name, branches, prs, workspaces, lastCommit];\n  };\n\n  // Note that we perform the sort as part of the component's render logic and not in onSort.\n  // We shouldn't store the list of data in state because we don't want to have to sync that with props.\n  let sortedRepositories = repositories;\n  if (activeSortIndex !== null) {\n    sortedRepositories = repositories.sort((a, b) => {\n      const aValue = getSortableRowValues(a)[activeSortIndex];\n      const bValue = getSortableRowValues(b)[activeSortIndex];\n      if (typeof aValue === 'number') {\n        // Numeric sort\n        if (activeSortDirection === 'asc') {\n          return (aValue as number) - (bValue as number);\n        }\n        return (bValue as number) - (aValue as number);\n      } else {\n        // String sort\n        if (activeSortDirection === 'asc') {\n          return (aValue as string).localeCompare(bValue as string);\n        }\n        return (bValue as string).localeCompare(aValue as string);\n      }\n    });\n  }\n\n  const columns: TableProps['cells'] = [\n    { title: 'Repositories', transforms: [sortable] },\n    {\n      title: 'Branches',\n      transforms: [\n        info({\n          tooltip: 'More information about branches'\n        }),\n        sortable\n      ]\n    },\n    { title: 'Pull requests', transforms: [sortable] },\n    {\n      title: 'Workspaces - Also this long header will wrap since we have applied the wrappable transform',\n      transforms: [sortable, wrappable, cellWidth(20)]\n    },\n    {\n      title: 'Last commit',\n      transforms: [\n        info({\n          tooltip: 'More information about commits'\n        })\n      ]\n    }\n  ];\n  const rows: TableProps['rows'] = sortedRepositories.map(repo => [\n    repo.name,\n    repo.branches,\n    repo.prs,\n    repo.workspaces,\n    repo.lastCommit\n  ]);\n\n  return (\n    <Table\n      aria-label=\"Sortable Table\"\n      sortBy={{\n        index: activeSortIndex,\n        direction: activeSortDirection,\n        defaultDirection: 'asc' // starting sort direction when first sorting a column. Defaults to 'asc'\n      }}\n      onSort={(_event, index, direction) => {\n        setActiveSortIndex(index);\n        setActiveSortDirection(direction);\n      }}\n      cells={columns}\n      rows={rows}\n    >\n      <TableHeader />\n      <TableBody />\n    </Table>\n  );\n};\n","title":"Sortable & wrapping column headers","lang":"ts"}}>
      
      <p {...{"className":"ws-p"}}>
        {`To implement sortable columns:`}
      </p>
      
      <ol {...{"className":"ws-ol"}}>
        

        
        <li {...{"className":"ws-li"}}>
          {`Import and apply the `}
          
          <code {...{"className":"ws-code"}}>
            {`sortable`}
          </code>
          {` transform to the desired column.`}
        </li>
        

        
        <li {...{"className":"ws-li"}}>
          {`Pass a managed `}
          
          <code {...{"className":"ws-code"}}>
            {`sortBy`}
          </code>
          {` prop to the `}
          
          <code {...{"className":"ws-code"}}>
            {`Table`}
          </code>
          {` component.
`}
          
          <code {...{"className":"ws-code"}}>
            {`\`sortBy\` - Specifies the initial sorting pattern for the table - asc/desc and the index of the column to sort by`}
          </code>
        </li>
        

        
        <li {...{"className":"ws-li"}}>
          {`Pass an `}
          
          <code {...{"className":"ws-code"}}>
            {`onSort`}
          </code>
          {` callback to the `}
          
          <code {...{"className":"ws-code"}}>
            {`Table`}
          </code>
          {` component
`}
          
          <code {...{"className":"ws-code"}}>
            {`\`onSort\` - (event: React.MouseEvent, columnIndex: number, sortByDirection: SortByDirection, extraData: IExtraColumnData) => void;`}
          </code>
        </li>
        

      </ol>
      
      <p {...{"className":"ws-p"}}>
        {`Note: If you want to add a tooltip/popover to a sortable header, in the `}
        
        <code {...{"className":"ws-code"}}>
          {`transforms`}
        </code>
        {` array the `}
        
        <code {...{"className":"ws-code"}}>
          {`info`}
        </code>
        {` transform has to precede the `}
        
        <code {...{"className":"ws-code"}}>
          {`sortable`}
        </code>
        {` transform.`}
      </p>
      
      <p {...{"className":"ws-p"}}>
        {`The built in display for sorting is not fully responsive, as the column headers will be displayed per row when the screen size is small. The example below showcases how sorting may have a custom control display that can be used for small screen sizes.`}
      </p>
    </Example>,
  'Sortable - custom control': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { TableProps, sortable, info, Table, TableBody, TableHeader } from '@patternfly/react-table';\nimport {\n  Toolbar,\n  ToolbarContent,\n  ToolbarItem,\n  OptionsMenu,\n  OptionsMenuItemGroup,\n  OptionsMenuItem,\n  OptionsMenuSeparator,\n  OptionsMenuToggle\n} from '@patternfly/react-core';\nimport SortAmountDownIcon from '@patternfly/react-icons/dist/esm/icons/sort-amount-down-icon';\n\ninterface Repository {\n  name: string;\n  branches: string;\n  prs: string;\n  workspaces: string;\n  lastCommit: string;\n}\n\nexport const LegacyTableSortableCustom: React.FunctionComponent = () => {\n  // In real usage, this data would come from some external source like an API via props.\n  const repositories: Repository[] = [\n    { name: 'one', branches: 'two', prs: 'a', workspaces: 'four', lastCommit: 'five' },\n    { name: 'a', branches: 'two', prs: 'k', workspaces: 'four', lastCommit: 'five' },\n    { name: 'p', branches: 'two', prs: 'b', workspaces: 'four', lastCommit: 'five' }\n  ];\n\n  const columnNames = {\n    name: 'Repositories',\n    branches: 'Branches',\n    prs: 'Pull requests',\n    workspaces: 'Workspaces',\n    lastCommit: 'Last commit'\n  };\n\n  // Index of the currently sorted column\n  // Note: if you intend to make columns reorderable, you may instead want to use a non-numeric key\n  // as the identifier of the sorted column. See the \"Compound expandable\" example.\n  const [activeSortIndex, setActiveSortIndex] = React.useState<number | null>(null);\n\n  // Sort direction of the currently sorted column\n  const [activeSortDirection, setActiveSortDirection] = React.useState<'asc' | 'desc' | null>(null);\n\n  // Sort dropdown expansion\n  const [isSortDropdownOpen, setIsSortDropdownOpen] = React.useState(false);\n\n  // Since OnSort specifies sorted columns by index, we need sortable values for our object by column index.\n  // This example is trivial since our data objects just contain strings, but if the data was more complex\n  // this would be a place to return simplified string or number versions of each column to sort by.\n  const getSortableRowValues = (repo: Repository): (string | number)[] => {\n    const { name, branches, prs, workspaces, lastCommit } = repo;\n    return [name, branches, prs, workspaces, lastCommit];\n  };\n\n  // Note that we perform the sort as part of the component's render logic and not in onSort.\n  // We shouldn't store the list of data in state because we don't want to have to sync that with props.\n  let sortedRepositories = repositories;\n  if (activeSortIndex !== null) {\n    sortedRepositories = repositories.sort((a, b) => {\n      const aValue = getSortableRowValues(a)[activeSortIndex];\n      const bValue = getSortableRowValues(b)[activeSortIndex];\n      if (typeof aValue === 'number') {\n        // Numeric sort\n        if (activeSortDirection === 'asc') {\n          return (aValue as number) - (bValue as number);\n        }\n        return (bValue as number) - (aValue as number);\n      } else {\n        // String sort\n        if (activeSortDirection === 'asc') {\n          return (aValue as string).localeCompare(bValue as string);\n        }\n        return (bValue as string).localeCompare(aValue as string);\n      }\n    });\n  }\n\n  const columns: TableProps['cells'] = [\n    { title: 'Repositories', transforms: [sortable] },\n    {\n      title: 'Branches',\n      transforms: [\n        info({\n          tooltip: 'More information about branches'\n        }),\n        sortable\n      ]\n    },\n    { title: 'Pull requests', transforms: [sortable] },\n    {\n      title: 'Workspaces',\n      transforms: [sortable]\n    },\n    {\n      title: 'Last commit',\n      transforms: [\n        info({\n          tooltip: 'More information about commits'\n        }),\n        sortable\n      ]\n    }\n  ];\n  const rows: TableProps['rows'] = sortedRepositories.map(repo => [\n    repo.name,\n    repo.branches,\n    repo.prs,\n    repo.workspaces,\n    repo.lastCommit\n  ]);\n\n  return (\n    <React.Fragment>\n      <Toolbar id=\"toolbar\">\n        <ToolbarContent>\n          <ToolbarItem>\n            <OptionsMenu\n              id=\"options-menu-multiple-options-example\"\n              menuItems={[\n                <OptionsMenuItemGroup key=\"first group\" aria-label=\"Sort column\">\n                  {Object.values(columnNames).map((columnName, columnIndex) => (\n                    <OptionsMenuItem\n                      key={columnName}\n                      isSelected={activeSortIndex === columnIndex}\n                      onSelect={() => {\n                        setActiveSortIndex(columnIndex);\n                        setActiveSortDirection(activeSortDirection !== null ? activeSortDirection : 'asc');\n                      }}\n                    >\n                      {columnName}\n                    </OptionsMenuItem>\n                  ))}\n                </OptionsMenuItemGroup>,\n                <OptionsMenuSeparator key=\"separator\" />,\n                <OptionsMenuItemGroup key=\"second group\" aria-label=\"Sort direction\">\n                  <OptionsMenuItem\n                    onSelect={() => setActiveSortDirection('asc')}\n                    isSelected={activeSortDirection === 'asc'}\n                    id=\"ascending\"\n                    key=\"ascending\"\n                  >\n                    Ascending\n                  </OptionsMenuItem>\n                  <OptionsMenuItem\n                    onSelect={() => setActiveSortDirection('desc')}\n                    isSelected={activeSortDirection === 'desc'}\n                    id=\"descending\"\n                    key=\"descending\"\n                  >\n                    Descending\n                  </OptionsMenuItem>\n                </OptionsMenuItemGroup>\n              ]}\n              isOpen={isSortDropdownOpen}\n              toggle={\n                <OptionsMenuToggle\n                  hideCaret\n                  onToggle={() => setIsSortDropdownOpen(!isSortDropdownOpen)}\n                  toggleTemplate={<SortAmountDownIcon />}\n                />\n              }\n              isPlain\n              isGrouped\n            />\n          </ToolbarItem>\n        </ToolbarContent>\n      </Toolbar>\n      <Table\n        aria-label=\"Sortable Table with Custom Toolbar\"\n        sortBy={{\n          index: activeSortIndex,\n          direction: activeSortDirection\n        }}\n        onSort={(_event, index, direction) => {\n          setActiveSortIndex(index);\n          setActiveSortDirection(direction);\n        }}\n        cells={columns}\n        rows={rows}\n      >\n        <TableHeader />\n        <TableBody />\n      </Table>\n    </React.Fragment>\n  );\n};\n","title":"Sortable - custom control","lang":"ts"}}>
      
      <p {...{"className":"ws-p"}}>
        {`Sorting a table may also be controlled with a toolbar. This toolbar item may also be hidden at large screen sizes and only displayed when the screen size is small to support responsive tables.`}
      </p>
    </Example>,
  'Selectable with checkbox': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Table, TableBody, TableHeader, headerCol, TableProps } from '@patternfly/react-table';\nimport { Checkbox } from '@patternfly/react-core';\n\ninterface Repository {\n  name: string;\n  branches: string;\n  prs: string;\n  workspaces: string;\n  lastCommit: string;\n}\n\nexport const LegacyTableSelectable: React.FunctionComponent = () => {\n  // In real usage, this data would come from some external source like an API via props.\n  const repositories: Repository[] = [\n    { name: 'one', branches: 'two', prs: 'a', workspaces: 'four', lastCommit: 'five' },\n    { name: 'a', branches: 'two', prs: 'k', workspaces: 'four', lastCommit: 'five' },\n    { name: 'b', branches: 'two', prs: 'k', workspaces: 'four', lastCommit: 'five' },\n    { name: 'c', branches: 'two', prs: 'k', workspaces: 'four', lastCommit: 'five' },\n    { name: 'd', branches: 'two', prs: 'k', workspaces: 'four', lastCommit: 'five' },\n    { name: 'e', branches: 'two', prs: 'b', workspaces: 'four', lastCommit: 'five' }\n  ];\n\n  const isRepoSelectable = (repo: Repository) => repo.name !== 'a'; // Arbitrary logic for this example\n  const selectableRepos = repositories.filter(isRepoSelectable);\n\n  // In this example, selected rows are tracked by the repo names from each row. This could be any unique identifier.\n  // This is to prevent state from being based on row order index in case we later add sorting.\n  const [selectedRepoNames, setSelectedRepoNames] = React.useState<string[]>([]);\n  const setRepoSelected = (repo: Repository, isSelecting = true) =>\n    setSelectedRepoNames(prevSelected => {\n      const otherSelectedRepoNames = prevSelected.filter(r => r !== repo.name);\n      return isSelecting && isRepoSelectable(repo) ? [...otherSelectedRepoNames, repo.name] : otherSelectedRepoNames;\n    });\n  const selectAllRepos = (isSelecting = true) =>\n    setSelectedRepoNames(isSelecting ? selectableRepos.map(r => r.name) : []);\n  const isRepoSelected = (repo: Repository) => selectedRepoNames.includes(repo.name);\n\n  const [canSelectAll, setCanSelectAll] = React.useState(true);\n\n  // To allow shift+click to select/deselect multiple rows\n  const [recentSelectedRowIndex, setRecentSelectedRowIndex] = React.useState<number | null>(null);\n  const [shifting, setShifting] = React.useState(false);\n\n  const onSelectRepo = (repo: Repository, rowIndex: number, isSelecting: boolean) => {\n    // If the user is shift + selecting the checkboxes, then all intermediate checkboxes should be selected\n    if (shifting && recentSelectedRowIndex !== null) {\n      const numberSelected = rowIndex - recentSelectedRowIndex;\n      const intermediateIndexes =\n        numberSelected > 0\n          ? Array.from(new Array(numberSelected + 1), (_x, i) => i + recentSelectedRowIndex)\n          : Array.from(new Array(Math.abs(numberSelected) + 1), (_x, i) => i + rowIndex);\n      intermediateIndexes.forEach(index => setRepoSelected(repositories[index], isSelecting));\n    } else {\n      setRepoSelected(repo, isSelecting);\n    }\n    setRecentSelectedRowIndex(rowIndex);\n  };\n\n  React.useEffect(() => {\n    const onKeyDown = (e: KeyboardEvent) => {\n      if (e.key === 'Shift') {\n        setShifting(true);\n      }\n    };\n    const onKeyUp = (e: KeyboardEvent) => {\n      if (e.key === 'Shift') {\n        setShifting(false);\n      }\n    };\n\n    document.addEventListener('keydown', onKeyDown);\n    document.addEventListener('keyup', onKeyUp);\n\n    return () => {\n      document.removeEventListener('keydown', onKeyDown);\n      document.removeEventListener('keyup', onKeyUp);\n    };\n  }, []);\n\n  const columns: TableProps['cells'] = [\n    { title: 'Repositories', cellTransforms: [headerCol()] },\n    'Branches',\n    { title: 'Pull requests' },\n    'Workspaces',\n    'Last commit'\n  ];\n  const rows: TableProps['rows'] = repositories.map(repo => ({\n    cells: [repo.name, repo.branches, repo.prs, repo.workspaces, repo.lastCommit],\n    selected: isRepoSelected(repo),\n    disableSelection: !isRepoSelectable(repo)\n  }));\n\n  return (\n    <div>\n      <Checkbox\n        label=\"Can select all\"\n        className=\"pf-u-mb-lg\"\n        isChecked={canSelectAll}\n        onChange={checked => setCanSelectAll(checked)}\n        aria-label=\"toggle select all checkbox\"\n        id=\"toggle-select-all\"\n        name=\"toggle-select-all\"\n      />\n      <Table\n        onSelect={(_event, isSelecting, rowIndex) => {\n          if (rowIndex === -1) {\n            selectAllRepos(isSelecting);\n          } else {\n            const repo = repositories[rowIndex];\n            onSelectRepo(repo, rowIndex, isSelecting);\n          }\n        }}\n        canSelectAll={canSelectAll}\n        aria-label=\"Selectable Table\"\n        cells={columns}\n        rows={rows}\n      >\n        <TableHeader />\n        <TableBody />\n      </Table>\n    </div>\n  );\n};\n","title":"Selectable with checkbox","lang":"ts"}}>
      
      <p {...{"className":"ws-p"}}>
        {`To enable row selection, set the `}
        
        <code {...{"className":"ws-code"}}>
          {`onSelect`}
        </code>
        {` callback prop on the Table.`}
      </p>
      
      <p {...{"className":"ws-p"}}>
        {`To control whether a row is selected or not, the Table looks for `}
        
        <code {...{"className":"ws-code"}}>
          {`selected: true | falsy`}
        </code>
        {` on the row definition.`}
      </p>
      
      <p {...{"className":"ws-p"}}>
        {`To disable selection for a row, set `}
        
        <code {...{"className":"ws-code"}}>
          {`disableSelection: true`}
        </code>
        {` on the row definition.`}
      </p>
      
      <p {...{"className":"ws-p"}}>
        {`To include a 'select all' checkbox in the header row, pass `}
        
        <code {...{"className":"ws-code"}}>
          {`true`}
        </code>
        {` to the`}
        
        <code {...{"className":"ws-code"}}>
          {`canSelectAll`}
        </code>
        {` prop on the Table.`}
      </p>
      
      <p {...{"className":"ws-p"}}>
        {`Note: this example also demonstrates the use of the `}
        
        <code {...{"className":"ws-code"}}>
          {`headerCol`}
        </code>
        {` transformation being applied to the first
column via the `}
        
        <code {...{"className":"ws-code"}}>
          {`cellTransforms`}
        </code>
        {` in the column definition. `}
        
        <code {...{"className":"ws-code"}}>
          {`headerCol`}
        </code>
        {` transforms the column so that instead
of using `}
        
        <code {...{"className":"ws-code"}}>
          {`td`}
        </code>
        {` elements, the cells in that column use `}
        
        <code {...{"className":"ws-code"}}>
          {`th`}
        </code>
        {` elements.`}
      </p>
      
      <p {...{"className":"ws-p"}}>
        
        <strong>
          {`Note:`}
        </strong>
        {` This example has a `}
        
        <code {...{"className":"ws-code"}}>
          {`shift + select`}
        </code>
        {` feature where holding shift while
checking checkboxes will check intermediate rows' checkboxes.`}
      </p>
    </Example>,
  'Selectable radio input': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Table, TableHeader, TableBody, headerCol, TableProps } from '@patternfly/react-table';\n\ninterface Repository {\n  name: string;\n  branches: string;\n  prs: string;\n  workspaces: string;\n  lastCommit: string;\n}\n\nexport const LegacyTableSelectableRadio: React.FunctionComponent = () => {\n  // In real usage, this data would come from some external source like an API via props.\n  const repositories: Repository[] = [\n    { name: 'one', branches: 'two', prs: 'a', workspaces: 'four', lastCommit: 'five' },\n    { name: 'a', branches: 'two', prs: 'k', workspaces: 'four', lastCommit: 'five' },\n    { name: 'p', branches: 'two', prs: 'b', workspaces: 'four', lastCommit: 'five' }\n  ];\n\n  const isRepoSelectable = (repo: Repository) => repo.name !== 'a'; // Arbitrary logic for this example\n\n  // In this example, selected rows are tracked by the repo names from each row. This could be any unique identifier.\n  // This is to prevent state from being based on row order index in case we later add sorting.\n  const [selectedRepoName, setSelectedRepoName] = React.useState<string | null>(null);\n\n  const columns: TableProps['cells'] = [\n    { title: 'Repositories', cellTransforms: [headerCol('selectable-radio')] },\n    'Branches',\n    { title: 'Pull requests' },\n    'Workspaces',\n    'Last commit'\n  ];\n  const rows: TableProps['rows'] = repositories.map(repo => ({\n    cells: [repo.name, repo.branches, repo.prs, repo.workspaces, repo.lastCommit],\n    selected: selectedRepoName === repo.name,\n    disableSelection: !isRepoSelectable(repo)\n  }));\n\n  return (\n    <Table\n      onSelect={(_event, _isSelecting, rowIndex) => {\n        const repo = repositories[rowIndex];\n        setSelectedRepoName(repo.name);\n      }}\n      selectVariant=\"radio\"\n      aria-label=\"Selectable Table with Radio Buttons\"\n      cells={columns}\n      rows={rows}\n    >\n      <TableHeader />\n      <TableBody />\n    </Table>\n  );\n};\n","title":"Selectable radio input","lang":"ts"}}>
      
      <p {...{"className":"ws-p"}}>
        {`To enable row radio selection, set the `}
        
        <code {...{"className":"ws-code"}}>
          {`onSelect`}
        </code>
        {` callback prop on the Table, and set
`}
        
        <code {...{"className":"ws-code"}}>
          {`RowSelectVariant.radio`}
        </code>
        {` or `}
        
        <code {...{"className":"ws-code"}}>
          {`"radio"`}
        </code>
        {` as the `}
        
        <code {...{"className":"ws-code"}}>
          {`selectVariant`}
        </code>
        {` prop on the Table.`}
      </p>
      
      <p {...{"className":"ws-p"}}>
        {`To disable selection for a row, set `}
        
        <code {...{"className":"ws-code"}}>
          {`disableSelection: true`}
        </code>
        {` on the row definition.`}
      </p>
    </Example>,
  'Hoverable rows, selectable rows, and header cell tooltips/popovers': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Table, TableHeader, TableBody, info, textCenter, TableProps, ICell } from '@patternfly/react-table';\nimport styles from '@patternfly/react-styles/css/components/Table/table';\n\ninterface Repository {\n  name: string;\n  branches: string | null;\n  prs: string | null;\n  workspaces: string;\n  lastCommit: string;\n}\n\nexport const LegacyTableHoverable: React.FunctionComponent = () => {\n  // In real usage, this data would come from some external source like an API via props.\n  const repositories: Repository[] = [\n    {\n      name: 'Repository one',\n      branches: 'Branch one',\n      prs: 'PR one',\n      workspaces: 'Workspace one',\n      lastCommit: 'Commit one'\n    },\n    { name: 'one - 2', branches: null, prs: null, workspaces: 'four - 2', lastCommit: 'five - 2' },\n    {\n      name: 'one - 3',\n      branches: 'two - 3',\n      prs: 'three - 3',\n      workspaces: 'four - 3',\n      lastCommit: 'five - 3 (not centered)'\n    }\n  ];\n\n  // In this example, selected rows are tracked by the repo names from each row. This could be any unique identifier.\n  // This is to prevent state from being based on row order index in case we later add sorting.\n  const [selectedRepoNames, setSelectedRepoNames] = React.useState<string[]>([]);\n  const setRepoSelected = (repo: Repository, isSelecting = true) =>\n    setSelectedRepoNames(prevSelected => {\n      const otherSelectedRepoNames = prevSelected.filter(r => r !== repo.name);\n      return isSelecting ? [...otherSelectedRepoNames, repo.name] : otherSelectedRepoNames;\n    });\n  const isRepoSelected = (repo: Repository) => selectedRepoNames.includes(repo.name);\n\n  const columns: TableProps['cells'] = [\n    {\n      title: 'Repositories',\n      transforms: [\n        info({\n          tooltip: 'More information about repositories',\n          className: 'repositories-info-tip',\n          tooltipProps: {\n            isContentLeftAligned: true\n          }\n        })\n      ]\n    },\n    'Branches',\n    {\n      title: 'Pull requests',\n      transforms: [\n        info({\n          popover: (\n            <div>\n              More <strong>information</strong> on pull requests\n            </div>\n          ),\n          ariaLabel: 'More information on pull requests',\n          popoverProps: {\n            headerContent: 'Pull requests',\n            footerContent: <a href=\"#\">Click here for even more info</a>\n          }\n        })\n      ]\n    },\n    'Workspaces',\n    {\n      title: 'Last commit',\n      transforms: [textCenter],\n      cellTransforms: [textCenter]\n    }\n  ];\n  const rows: TableProps['rows'] = repositories.map(repo => {\n    let cells: (string | ICell)[] = [repo.name, repo.branches || '', repo.prs || '', repo.workspaces, repo.lastCommit];\n    // These rows have arbitrary differences for this example, but these could be based on some other conditions\n    if (repo.name === 'one - 2') {\n      cells = [\n        {\n          title: <div>{repo.name}</div>,\n          props: { title: 'hover title', colSpan: 3 }\n        },\n        repo.workspaces,\n        repo.lastCommit\n      ];\n    } else if (repo.name === 'five - 3 (not centrered)') {\n      cells = [\n        repo.name,\n        repo.branches || '',\n        repo.prs || '',\n        repo.workspaces,\n        {\n          title: repo.lastCommit,\n          props: { textCenter: false }\n        }\n      ];\n    }\n    return {\n      cells,\n      isHoverable: true,\n      isRowSelected: isRepoSelected(repo)\n    };\n  });\n\n  return (\n    <Table caption=\"Row click handler table\" cells={columns} rows={rows}>\n      <TableHeader className={styles.modifiers.nowrap} />\n      <TableBody\n        onRowClick={(_event, row, rowProps) => {\n          if (rowProps) {\n            const repo = repositories[rowProps.rowIndex];\n            setRepoSelected(repo, !isRepoSelected(repo));\n          }\n        }}\n      />\n    </Table>\n  );\n};\n","title":"Hoverable rows, selectable rows, and header cell tooltips/popovers","lang":"ts"}}>
      
      <p {...{"className":"ws-p"}}>
        {`This selectable rows feature is intended for use when a table is used to present a list of objects in a Primary-detail view.`}
      </p>
    </Example>,
  'Actions and first cell in body rows as th': props => 
    <Example {...pageData} {...props} {...{"code":"/* eslint-disable no-console */\nimport React from 'react';\nimport {\n  Button,\n  Checkbox,\n  DropdownToggle,\n  ToggleGroup,\n  ToggleGroupItem,\n  ToggleGroupItemProps,\n  Toolbar,\n  ToolbarContent,\n  ToolbarItem\n} from '@patternfly/react-core';\nimport {\n  CustomActionsToggleProps,\n  fitContent,\n  headerCol,\n  TableProps,\n  IActions,\n  IActionsResolver,\n  Table,\n  TableBody,\n  TableHeader,\n  TableText\n} from '@patternfly/react-table';\n\ninterface Repository {\n  name: string;\n  branches: string;\n  prs: string;\n  workspaces: string;\n  lastCommit: string;\n  singleAction: string;\n}\n\ntype ExampleType = 'actions' | 'actionResolver';\n\nexport const LegacyTableActions: React.FunctionComponent = () => {\n  // In real usage, this data would come from some external source like an API via props.\n  const repositories: Repository[] = [\n    { name: 'a', branches: 'two', prs: '1', workspaces: 'four', lastCommit: 'five', singleAction: 'Start' },\n    { name: 'disable actions', branches: 'two', prs: '3', workspaces: 'four', lastCommit: 'five', singleAction: '' },\n    { name: 'green actions', branches: 'two', prs: '4', workspaces: 'four', lastCommit: 'five', singleAction: 'Start' },\n    {\n      name: 'extra action props',\n      branches: 'two',\n      prs: '5',\n      workspaces: 'four',\n      lastCommit: 'five',\n      singleAction: 'Start'\n    },\n    { name: 'blue actions', branches: 'two', prs: '6', workspaces: 'four', lastCommit: 'five', singleAction: 'Start' }\n  ];\n\n  // This state is just for the ToggleGroup in this example and isn't necessary for Table usage.\n  const [propToUse, setPropToUse] = React.useState<ExampleType>('actions');\n  const onPropToUseChange: ToggleGroupItemProps['onChange'] = (_isSelected, event) => {\n    const id = event.currentTarget.id;\n    setPropToUse(id as ExampleType);\n  };\n\n  const [useCustomToggle, setUseCustomToggle] = React.useState(false);\n\n  const customActionsToggle = (props: CustomActionsToggleProps) => (\n    <DropdownToggle onToggle={props.onToggle} isDisabled={props.isDisabled}>\n      Actions\n    </DropdownToggle>\n  );\n\n  const columns: TableProps['cells'] = [\n    { title: 'Repositories', cellTransforms: [headerCol('actions')] },\n    'Branches',\n    'Pull requests',\n    'Workspaces',\n    'Last commit',\n    { title: '', dataLabel: 'Action', cellTransforms: [fitContent] }\n  ];\n\n  const rows: TableProps['rows'] = repositories.map(repo => {\n    let singleActionButton = null;\n    if (repo.singleAction !== '') {\n      singleActionButton = (\n        <TableText>\n          <Button variant=\"secondary\">{repo.singleAction}</Button>\n        </TableText>\n      );\n    }\n\n    const cells = [repo.name, repo.branches, repo.prs, repo.workspaces, repo.lastCommit, singleActionButton];\n\n    // These rows have arbitrary differences for this example, but these could be based on some other conditions\n    if (repo.name === 'disable actions') {\n      return { cells, disableActions: true };\n    }\n    if (repo.name === 'green actions') {\n      return { cells, type: 'green' };\n    }\n    if (repo.name === 'extra action props') {\n      return { cells, actionProps: { 'data-specific-attr': 'some-value' } };\n    }\n    if (repo.name === 'blue actions') {\n      return { cells, type: 'blue' };\n    }\n    return { cells };\n  });\n\n  const actions: IActions = [\n    {\n      title: 'Some action',\n      onClick: (_event, rowId, rowData, extra) => console.log('clicked on Some action, on row: ', rowId, rowData, extra)\n    },\n    {\n      title: <a href=\"#\">Link action</a>\n    },\n    {\n      isSeparator: true\n    },\n    {\n      title: 'Third action',\n      onClick: (_event, rowId, rowData, extra) =>\n        console.log('clicked on Third action, on row: ', rowId, rowData, extra)\n    }\n  ];\n\n  /**\n   * Use actions or actionResolver, not both\n   */\n  const actionResolver: IActionsResolver = (rowData, { rowIndex }) => {\n    if (rowIndex === 1) {\n      return [];\n    }\n\n    const thirdAction: IActions = [\n      {\n        isSeparator: true\n      },\n      {\n        title: `${rowData.type} action`,\n        onClick: (_event, rowId, rowData, extra) =>\n          console.log(`clicked on ${rowData.type} action, on row ${rowId} of type ${rowData.type}`, extra)\n      }\n    ];\n\n    return [\n      {\n        title: 'actionResolver action',\n        onClick: (_event, rowId, rowData, extra) =>\n          console.log(`clicked on Some action, on row ${rowId} of type ${rowData.type}`, extra)\n      },\n      {\n        title: <div>Another action</div>,\n        onClick: (_event, rowId, rowData, extra) =>\n          console.log(`clicked on Another action, on row ${rowId} of type ${rowData.type}`, extra)\n      },\n      ...(rowData.type ? thirdAction : [])\n    ];\n  };\n\n  return (\n    <React.Fragment>\n      <Toolbar>\n        <ToolbarContent>\n          <ToolbarItem>\n            <ToggleGroup aria-label=\"actions or actionResolver\">\n              <ToggleGroupItem\n                text=\"Use actions prop\"\n                buttonId=\"actions\"\n                isSelected={propToUse === 'actions'}\n                onChange={onPropToUseChange}\n              />\n              <ToggleGroupItem\n                text=\"Use actionResolver prop\"\n                buttonId=\"actionResolver\"\n                isSelected={propToUse === 'actionResolver'}\n                onChange={onPropToUseChange}\n              />\n            </ToggleGroup>\n          </ToolbarItem>\n          <ToolbarItem>\n            <Checkbox\n              label=\"Use custom actions toggle\"\n              isChecked={useCustomToggle}\n              onChange={setUseCustomToggle}\n              aria-label=\"toggle use of custom actions toggle\"\n              id=\"toggle-custom-actions-toggle\"\n              name=\"toggle-custom-actions-toggle\"\n            />\n          </ToolbarItem>\n        </ToolbarContent>\n      </Toolbar>\n      <Table\n        aria-label=\"Actions table\"\n        cells={columns}\n        rows={rows}\n        {...(propToUse === 'actions' && { actions })}\n        {...(propToUse === 'actionResolver' && { actionResolver })}\n        areActionsDisabled={rowData => !!rowData.disableActions}\n        dropdownPosition=\"left\"\n        dropdownDirection=\"down\"\n        actionsToggle={useCustomToggle ? customActionsToggle : undefined}\n      >\n        <TableHeader />\n        <TableBody />\n      </Table>\n    </React.Fragment>\n  );\n};\n","title":"Actions and first cell in body rows as th","lang":"ts"}}>
      
      <p {...{"className":"ws-p"}}>
        {`To use actions you can either specify an array of actions and pass that into the `}
        
        <code {...{"className":"ws-code"}}>
          {`Table`}
        </code>
        {`'s `}
        
        <code {...{"className":"ws-code"}}>
          {`actions`}
        </code>
        {` prop, or for more control you can use the `}
        
        <code {...{"className":"ws-code"}}>
          {`actionResolver`}
        </code>
        {` callback prop to add actions conditionally.`}
      </p>
    </Example>,
  'Expandable': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Table, TableBody, TableHeader, TableVariant, TableProps, expandable, IRowCell } from '@patternfly/react-table';\nimport { Checkbox } from '@patternfly/react-core';\n\ninterface Repository {\n  name: string;\n  branches: string;\n  prs: string;\n  workspaces: string;\n  details?: {\n    detail1?: string;\n    detail2?: string;\n    detail3?: string;\n    detailFormat: 0 | 1 | 2 | 3;\n  };\n}\n\nexport const LegacyTableExpandable: React.FunctionComponent = () => {\n  // In real usage, this data would come from some external source like an API via props.\n  const repositories: Repository[] = [\n    { name: 'one', branches: 'two', prs: 'a', workspaces: 'four' },\n    {\n      name: 'parent 1',\n      branches: 'two',\n      prs: 'k',\n      workspaces: 'four',\n      // This `details` structure is just for this example. You can drive expanded content from any kind of data.\n      details: { detailFormat: 0, detail1: 'single cell' }\n    },\n    {\n      name: 'parent 2',\n      branches: 'two',\n      prs: 'b',\n      workspaces: 'four',\n      details: { detailFormat: 1, detail1: 'single cell - fullWidth' }\n    },\n    {\n      name: 'parent 3',\n      branches: '2',\n      prs: 'b',\n      workspaces: 'four',\n      details: { detailFormat: 2, detail1: 'single cell - noPadding' }\n    },\n    {\n      name: 'parent 4',\n      branches: '2',\n      prs: 'b',\n      workspaces: 'four',\n      details: { detailFormat: 3, detail1: 'single cell - fullWidth & noPadding' }\n    },\n    {\n      name: 'parent 5',\n      branches: '2',\n      prs: 'b',\n      workspaces: 'four',\n      details: {\n        detailFormat: 0,\n        detail1: \"spans 'Repositories and 'Branches'\",\n        detail2: \"spans 'Pull requests' and 'Workspaces', and 'Last commit'\"\n      }\n    },\n    {\n      name: 'parent 6',\n      branches: '2',\n      prs: 'b',\n      workspaces: 'four',\n      details: {\n        detailFormat: 1,\n        detail1: \"fullWidth, spans the collapsible column and 'Repositories'\",\n        detail2: \"fullWidth, spans 'Branches' and 'Pull requests'\",\n        detail3: 'fullWidth, spans the empty column'\n      }\n    }\n  ];\n\n  // In this example, expanded rows are tracked by the repo names from each row. This could be any unique identifier.\n  // This is to prevent state from being based on row order index in case we later add sorting.\n  // Note that this behavior is very similar to selection state.\n  const initialExpandedRepoNames = repositories.filter(repo => !!repo.details).map(repo => repo.name); // Default to all expanded\n  const [expandedRepoNames, setExpandedRepoNames] = React.useState<string[]>(initialExpandedRepoNames);\n  const setRepoExpanded = (repo: Repository, isExpanding = true) =>\n    setExpandedRepoNames(prevExpanded => {\n      const otherExpandedRepoNames = prevExpanded.filter(r => r !== repo.name);\n      return isExpanding ? [...otherExpandedRepoNames, repo.name] : otherExpandedRepoNames;\n    });\n  const isRepoExpanded = (repo: Repository) => expandedRepoNames.includes(repo.name);\n\n  const [isExampleCompact, setIsExampleCompact] = React.useState(true);\n\n  // We want to be able to reference the original data object based on row index. But because an expanded\n  // row takes up two row indexes, repositories[rowIndex] will not be accurate like it would in a normal table.\n  // One solution to this is to create an array of data objects indexed by the displayed row index.\n  const reposByRowIndex: (Repository | null)[] = [];\n\n  const columns: TableProps['cells'] = [\n    {\n      title: 'Repositories',\n      cellFormatters: [expandable]\n    },\n    'Branches',\n    { title: 'Pull requests' },\n    { title: '' /* deliberately empty */, dataLabel: 'Label for mobile view' }\n  ];\n  const rows: TableProps['rows'] = [];\n  repositories.forEach(repo => {\n    rows.push({\n      ...(repo.details ? { isOpen: isRepoExpanded(repo) } : {}),\n      cells: [repo.name, repo.branches, repo.prs, repo.workspaces]\n    });\n    reposByRowIndex.push(repo);\n    if (repo.details) {\n      // Some arbitrary examples of how you could customize the child row based on your needs\n      const { detail1, detail2, detail3, detailFormat } = repo.details;\n      const numColumns = 5;\n      const childIsFullWidth = [1, 3].includes(detailFormat);\n      const childHasNoPadding = [2, 3].includes(detailFormat);\n      let detailColSpans = [1, 1, 1];\n      if (detail1 && !detail2 && !detail3) {\n        detailColSpans = [childIsFullWidth ? numColumns : numColumns + 1]; // Account for toggle column\n      } else if (detail1 && detail2 && !detail3) {\n        detailColSpans = [2, childIsFullWidth ? 3 : 4];\n      } else if (detail1 && detail2 && detail3) {\n        detailColSpans = [2, 2, childIsFullWidth ? 1 : 2];\n      }\n      const cells: IRowCell[] = [];\n      [detail1, detail2, detail3].forEach((detail, index) => {\n        if (detail) {\n          cells.push({\n            title: detail1,\n            props: {\n              colSpan: detailColSpans[index]\n            }\n          });\n        }\n      });\n      rows.push({\n        parent: rows.length - 1,\n        cells,\n        fullWidth: childIsFullWidth,\n        noPadding: childHasNoPadding\n      });\n      reposByRowIndex.push(null);\n    }\n  });\n\n  return (\n    <React.Fragment>\n      <Checkbox\n        label=\"Compact\"\n        isChecked={isExampleCompact}\n        onChange={checked => setIsExampleCompact(checked)}\n        aria-label=\"toggle compact variation\"\n        id=\"toggle-compact\"\n        name=\"toggle-compact\"\n      />\n      <Table\n        aria-label=\"Expandable table\"\n        variant={isExampleCompact ? TableVariant.compact : undefined}\n        onCollapse={(_event, rowIndex, isOpen) => {\n          if (reposByRowIndex[rowIndex]) {\n            setRepoExpanded(reposByRowIndex[rowIndex], isOpen);\n          }\n        }}\n        rows={rows}\n        cells={columns}\n        expandId=\"expandable-table-toggle\"\n        contentId=\"expandable-table-content\"\n      >\n        <TableHeader />\n        <TableBody />\n      </Table>\n    </React.Fragment>\n  );\n};\n","title":"Expandable","lang":"ts"}}>
      
      <p {...{"className":"ws-p"}}>
        {`To make an exapandable row, define a child row with the `}
        
        <code {...{"className":"ws-code"}}>
          {`parent`}
        </code>
        {` field set to its parent's row index.
The parent row can have an `}
        
        <code {...{"className":"ws-code"}}>
          {`isOpen`}
        </code>
        {` field for managing the expanded state of the parent row.`}
      </p>
      
      <p {...{"className":"ws-p"}}>
        {`Also, pass an `}
        
        <code {...{"className":"ws-code"}}>
          {`onCollapse`}
        </code>
        {` event handler via the prop on the Table`}
      </p>
    </Example>,
  'Compound expandable': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Table, TableHeader, TableBody, compoundExpand, TableProps } from '@patternfly/react-table';\n\nimport CodeBranchIcon from '@patternfly/react-icons/dist/esm/icons/code-branch-icon';\nimport CodeIcon from '@patternfly/react-icons/dist/esm/icons/code-icon';\nimport CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';\n\ninterface Repository {\n  name: string;\n  branches: number;\n  prs: number;\n  workspaces: number;\n  lastCommit: string;\n}\n\nexport const LegacyTableCompoundExpandable: React.FunctionComponent = () => {\n  // In real usage, this data would come from some external source like an API via props.\n  const repositories: Repository[] = [\n    { name: 'siemur/test-space', branches: 10, prs: 4, workspaces: 4, lastCommit: '20 minutes' },\n    { name: 'siemur/test-space-2', branches: 3, prs: 4, workspaces: 4, lastCommit: '20 minutes' }\n  ];\n\n  // In this example, expanded cells are tracked by the repo and property names from each row. This could be any pair of unique identifiers.\n  // This is to prevent state from being based on row and column order index in case we later add sorting and rearranging columns.\n  // Note that these columnKeys must be in the same order as the `columns` below, because columnIndex will be used to look up the matching key.\n  type ColumnKey = 'name' | 'branches' | 'prs' | 'workspaces' | 'lastCommit'; // For typechecking\n  const columnKeys: ColumnKey[] = ['name', 'branches', 'prs', 'workspaces', 'lastCommit']; // For indexed order\n  const [expandedCells, setExpandedCells] = React.useState<Record<string, ColumnKey>>({\n    'siemur/test-space': 'branches' // Default to the first cell of the first row being expanded\n  });\n  const setCellExpanded = (repo: Repository, columnKey: ColumnKey, isExpanding = true) => {\n    const newExpandedCells = { ...expandedCells };\n    if (isExpanding) {\n      newExpandedCells[repo.name] = columnKey;\n    } else {\n      delete newExpandedCells[repo.name];\n    }\n    setExpandedCells(newExpandedCells);\n  };\n\n  // We want to be able to reference the original data object based on row index. But because parent/child rows are\n  // multiple elements in the rows array, repositories[rowIndex] will not be accurate like it would in a normal table.\n  // One solution to this is to create an array of data objects indexed by the displayed row index.\n  const reposByRowIndex: (Repository | null)[] = [];\n\n  const columns: TableProps['cells'] = [\n    'Repositories',\n    {\n      title: 'Branches',\n      cellTransforms: [compoundExpand]\n    },\n    {\n      title: 'Pull requests',\n      cellTransforms: [compoundExpand]\n    },\n    {\n      title: 'Workspaces',\n      cellTransforms: [compoundExpand]\n    },\n    'Last Commit',\n    {\n      title: '',\n      dataLabel: 'Action'\n    }\n  ];\n  const rows: TableProps['rows'] = [];\n  repositories.forEach(repo => {\n    const expandedCellKey = expandedCells[repo.name];\n    const isRowExpanded = !!expandedCellKey;\n    rows.push({\n      isOpen: isRowExpanded,\n      cells: [\n        { title: <a href=\"#\">{repo.name}</a>, props: { component: 'th' } },\n        {\n          title: (\n            <React.Fragment>\n              <CodeBranchIcon key=\"icon\" /> {repo.branches}\n            </React.Fragment>\n          ),\n          props: {\n            isOpen: expandedCellKey === 'branches',\n            ariaControls: `compound-expansion-table-${repo.name}-1`\n          }\n        },\n        {\n          title: (\n            <React.Fragment>\n              <CodeIcon key=\"icon\" /> {repo.prs}\n            </React.Fragment>\n          ),\n          props: {\n            isOpen: expandedCellKey === 'prs',\n            ariaControls: `compound-expansion-table-${repo.name}-2`\n          }\n        },\n        {\n          title: (\n            <React.Fragment>\n              <CubeIcon key=\"icon\" /> {repo.branches}\n            </React.Fragment>\n          ),\n          props: {\n            isOpen: expandedCellKey === 'workspaces',\n            ariaControls: `compound-expansion-table-${repo.name}-3`\n          }\n        },\n        repo.lastCommit,\n        { title: <a href=\"#\">Open in Github</a> }\n      ]\n    });\n    reposByRowIndex.push(repo);\n    const parentIndex = rows.length - 1;\n    rows.push({\n      parent: parentIndex,\n      compoundParent: 1,\n      cells: [\n        {\n          title: (\n            <div className=\"pf-u-m-md\" id={`compound-expansion-table-${repo.name}-1`}>\n              Expanded content for {repo.name}: Branches goes here!\n            </div>\n          ),\n          props: { colSpan: 6, className: 'pf-m-no-padding' }\n        }\n      ]\n    });\n    reposByRowIndex.push(null);\n    rows.push({\n      parent: parentIndex,\n      compoundParent: 2,\n      cells: [\n        {\n          title: (\n            <div className=\"pf-u-m-md\" id={`compound-expansion-table-${repo.name}-2`}>\n              Expanded content for {repo.name}: Pull requests goes here!\n            </div>\n          ),\n          props: { colSpan: 6, className: 'pf-m-no-padding' }\n        }\n      ]\n    });\n    reposByRowIndex.push(null);\n    rows.push({\n      parent: parentIndex,\n      compoundParent: 3,\n      cells: [\n        {\n          title: (\n            <div className=\"pf-u-m-md\" id={`compound-expansion-table-${repo.name}-3`}>\n              Expanded content for {repo.name}: Workspaces goes here!\n            </div>\n          ),\n          props: { colSpan: 6, className: 'pf-m-no-padding' }\n        }\n      ]\n    });\n    reposByRowIndex.push(null);\n  });\n\n  return (\n    <Table\n      aria-label=\"Compound expandable table\"\n      onExpand={(_event, rowIndex, colIndex, isOpen) => {\n        if (reposByRowIndex[rowIndex]) {\n          setCellExpanded(reposByRowIndex[rowIndex], columnKeys[colIndex], !isOpen);\n        }\n      }}\n      rows={rows}\n      cells={columns}\n      expandId=\"compound-expandable-table-toggle\"\n      contentId=\"compound-expandable-table-content\"\n    >\n      <TableHeader />\n      <TableBody />\n    </Table>\n  );\n};\n","title":"Compound expandable","lang":"ts"}}>
      
      <p {...{"className":"ws-p"}}>
        {`To build a compound expandable table:`}
      </p>
      
      <ol {...{"className":"ws-ol"}}>
        

        
        <li {...{"className":"ws-li"}}>
          {`Pass the `}
          
          <code {...{"className":"ws-code"}}>
            {`compoundExpand`}
          </code>
          {` transformation via the `}
          
          <code {...{"className":"ws-code"}}>
            {`cellTransforms`}
          </code>
          {` field in the column definition for each column that will have an expanded section.`}
        </li>
        

        
        <li {...{"className":"ws-li"}}>
          {`For each expandable parent row, the cells in the expandable columns should:`}
          

          
          <ol {...{"className":"ws-ol"}}>
            

            
            <li {...{"className":"ws-li"}}>
              {`have a managed `}
              
              <code {...{"className":"ws-code"}}>
                {`isOpen`}
              </code>
              {` prop passed to the cell definition`}
            </li>
            

            
            <li {...{"className":"ws-li"}}>
              {`have an `}
              
              <code {...{"className":"ws-code"}}>
                {`ariaControls`}
              </code>
              {` value which matches the `}
              
              <code {...{"className":"ws-code"}}>
                {`id`}
              </code>
              {` of it’s child row`}
            </li>
            

          </ol>
          

        </li>
        

        
        <li {...{"className":"ws-li"}}>
          {`For each expandable child row, the row definition needs:`}
          

          
          <ol {...{"className":"ws-ol"}}>
            

            
            <li {...{"className":"ws-li"}}>
              {`A `}
              
              <code {...{"className":"ws-code"}}>
                {`parent`}
              </code>
              {` field set to its parent’s row index`}
            </li>
            

            
            <li {...{"className":"ws-li"}}>
              {`A `}
              
              <code {...{"className":"ws-code"}}>
                {`compoundParent`}
              </code>
              {` field set to the cell index which will control the expanding/collapsing of this row`}
            </li>
            

          </ol>
          

        </li>
        

        
        <li {...{"className":"ws-li"}}>
          {`An `}
          
          <code {...{"className":"ws-code"}}>
            {`onExpand`}
          </code>
          {` event handler prop should be passed to the Table.`}
        </li>
        

      </ol>
    </Example>,
  'With width and breakpoint visibility modifiers': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Table, TableHeader, TableBody, classNames, cellWidth, Visibility, TableProps } from '@patternfly/react-table';\n\ninterface Repository {\n  name: string;\n  branches: string;\n  prs: string;\n  workspaces: string;\n  lastCommit: string;\n}\n\nexport const LegacyTableCellWidth: React.FunctionComponent = () => {\n  // In real usage, this data would come from some external source like an API via props.\n  const repositories: Repository[] = [\n    {\n      name: 'one - 1',\n      branches: 'two - 1 (visible only on md)',\n      prs: 'three - 1 (hidden only on md)',\n      workspaces: 'four - 1 (hidden on xs)',\n      lastCommit: 'five - 1'\n    },\n    {\n      name: 'one - 2',\n      branches: 'two - 2 (visible only on md)',\n      prs: 'three - 2 (hidden only on md)',\n      workspaces: 'four - 2 (hidden on xs)',\n      lastCommit: 'five - 2'\n    }\n  ];\n\n  const columns: TableProps['cells'] = [\n    { title: 'Header cell', transforms: [cellWidth(10)] },\n    {\n      title: 'Branches (visible only on md and 2Xl)',\n      columnTransforms: [\n        classNames(Visibility.hidden, Visibility.visibleOnMd, Visibility.hiddenOnLg, Visibility.visibleOn2Xl)\n      ]\n    },\n    {\n      title: 'Pull requests (hidden only on md)',\n      columnTransforms: [classNames(Visibility.hiddenOnMd, Visibility.visibleOnLg)]\n    },\n    {\n      title: 'Workspaces (hidden on xs)',\n      columnTransforms: [classNames(Visibility.hidden, Visibility.visibleOnSm)]\n    },\n    {\n      title: 'Last commit',\n      transforms: [cellWidth(30)]\n    }\n  ];\n  const rows: TableProps['rows'] = repositories.map(repo => [\n    repo.name,\n    repo.branches,\n    repo.prs,\n    repo.workspaces,\n    repo.lastCommit\n  ]);\n\n  return (\n    <Table aria-label=\"Table with width and breakpoint visibility modifiers\" cells={columns} rows={rows}>\n      <TableHeader />\n      <TableBody />\n    </Table>\n  );\n};\n","title":"With width and breakpoint visibility modifiers","lang":"ts"}}>
      
    </Example>,
  'Controlling text': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Table,\n  TableHeader,\n  TableBody,\n  cellWidth,\n  truncate,\n  breakWord,\n  wrappable,\n  fitContent,\n  nowrap,\n  TableProps\n} from '@patternfly/react-table';\n\n// This example has been simplified to focus on the text modifier props. In real usage,\n// you may want to derive your rows from typed underlying data and minimal state. See other examples.\n\nexport const LegacyTableControllingText: React.FunctionComponent = () => {\n  const columns: TableProps['cells'] = [\n    { title: 'Truncate (width 20%)', transforms: [cellWidth(20)], cellTransforms: [truncate] },\n    { title: 'Break word', cellTransforms: [breakWord] },\n    { title: 'Wrapping table header text. This th text will wrap instead of truncate.', transforms: [wrappable] },\n    { title: 'Fit content', transforms: [fitContent] },\n    { title: '', cellTransforms: [nowrap] }\n  ];\n  const rows: TableProps['rows'] = [\n    [\n      'This text will truncate instead of wrap.',\n      { title: <a href=\"#\">http://thisisaverylongurlthatneedstobreakusethebreakwordmodifier.org</a> },\n      {\n        title: (\n          <p>\n            By default,\n            <code>thead</code> cells will truncate and\n            <code>tbody</code> cells will wrap. Use\n            <code>transforms</code> and/or <code>cellTransforms</code> to change the behavior.\n          </p>\n        )\n      },\n      \"This cell's content will adjust itself to the parent th width. This modifier only affects table layouts.\",\n      { title: <a href=\"#\">No wrap</a> }\n    ]\n  ];\n\n  return (\n    <Table aria-label=\"Controlling text\" cells={columns} rows={rows}>\n      <TableHeader />\n      <TableBody />\n    </Table>\n  );\n};\n","title":"Controlling text","lang":"ts"}}>
      
    </Example>,
  'Modifiers with table text': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Table, TableHeader, TableBody, cellWidth, TableText, TableProps } from '@patternfly/react-table';\n\n// This example has been simplified to focus on the text modifier props. In real usage,\n// you may want to derive your rows from typed underlying data and minimal state. See other examples.\n\nexport const LegacyTableTextModifiers: React.FunctionComponent = () => {\n  const columns: TableProps['cells'] = [\n    { title: 'Truncating text', transforms: [cellWidth(30)] },\n    { title: 'Wrapping table header text. This th text will wrap instead of truncate.' }\n  ];\n  const rows: TableProps['rows'] = [\n    [\n      { title: <TableText wrapModifier=\"truncate\">This text will truncate instead of wrap.</TableText> },\n      {\n        title: (\n          <TableText wrapModifier=\"nowrap\">\n            <a href=\"#\">This is a link that needs to be on one line and fully readable.</a>\n          </TableText>\n        )\n      }\n    ]\n  ];\n\n  return (\n    <Table aria-label=\"Table text with modifiers\" cells={columns} rows={rows}>\n      <TableHeader />\n      <TableBody />\n    </Table>\n  );\n};\n","title":"Modifiers with table text","lang":"ts"}}>
      
    </Example>,
  'Empty state': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Table, TableHeader, TableBody, TableProps } from '@patternfly/react-table';\nimport {\n  Bullseye,\n  EmptyState,\n  EmptyStateVariant,\n  EmptyStateIcon,\n  Title,\n  EmptyStateBody,\n  Button\n} from '@patternfly/react-core';\nimport SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';\n\n// This example has been simplified to focus on the empty state. In real usage,\n// you may want to derive your rows from typed underlying data and minimal state. See other examples.\n\nexport const LegacyTableEmptyState: React.FunctionComponent = () => {\n  const columns: TableProps['cells'] = ['Repositories', 'Branches', 'Pull requests', 'Workspaces', 'Last commit'];\n  const rows: TableProps['rows'] = [\n    {\n      heightAuto: true,\n      cells: [\n        {\n          props: { colSpan: 8 },\n          title: (\n            <Bullseye>\n              <EmptyState variant={EmptyStateVariant.small}>\n                <EmptyStateIcon icon={SearchIcon} />\n                <Title headingLevel=\"h2\" size=\"lg\">\n                  No results found\n                </Title>\n                <EmptyStateBody>Clear all filters and try again.</EmptyStateBody>\n                <Button variant=\"link\">Clear all filters</Button>\n              </EmptyState>\n            </Bullseye>\n          )\n        }\n      ]\n    }\n  ];\n\n  return (\n    <Table aria-label=\"Table text with modifiers\" cells={columns} rows={rows}>\n      <TableHeader />\n      <TableBody />\n    </Table>\n  );\n};\n","title":"Empty state","lang":"ts"}}>
      
    </Example>,
  'Editable rows': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { SelectOption } from '@patternfly/react-core';\nimport {\n  Table,\n  TableHeader,\n  TableBody,\n  TableVariant,\n  cancelCellEdits,\n  validateCellEdits,\n  applyCellEdits,\n  EditableTextCell,\n  EditableSelectInputCell\n} from '@patternfly/react-table';\n\nclass EditableRowsTable extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      columns: ['Text input col 1', 'Disabled text input col 2', 'Text input col 3', 'Text input col 4'],\n      actions: [\n        {\n          title: 'Some action',\n          onClick: (event, rowId, rowData, extra) => console.log('clicked on Some action, on row: ', rowId)\n        }\n      ],\n      rows: [\n        {\n          rowEditBtnAriaLabel: idx => `Edit row ${idx}`,\n          rowSaveBtnAriaLabel: idx => `Save edits for row ${idx}`,\n          rowCancelBtnAriaLabel: idx => `Cancel edits for row ${idx}`,\n          rowEditValidationRules: [\n            {\n              name: 'required',\n              validator: value => value.trim() !== '',\n              errorText: 'This field is required'\n            }\n          ],\n          cells: [\n            {\n              title: (value, rowIndex, cellIndex, props) => (\n                <EditableTextCell\n                  value={value}\n                  rowIndex={rowIndex}\n                  cellIndex={cellIndex}\n                  props={props}\n                  handleTextInputChange={this.handleTextInputChange}\n                  inputAriaLabel=\"Row 1 cell 1 content\"\n                />\n              ),\n              props: {\n                value: 'Row 1 cell 1 content',\n                name: 'uniqueIdRow1Cell1'\n              }\n            },\n            {\n              title: (value, rowIndex, cellIndex, props) => (\n                <EditableTextCell\n                  value={value}\n                  rowIndex={rowIndex}\n                  cellIndex={cellIndex}\n                  props={props}\n                  handleTextInputChange={this.handleTextInputChange}\n                  isDisabled\n                  inputAriaLabel=\"Row 1 cell 2 content\"\n                />\n              ),\n              props: {\n                value: 'Row 1 cell 2, disabled content',\n                name: 'uniqueIdRow1Cell2'\n              }\n            },\n            {\n              title: (value, rowIndex, cellIndex, props) => (\n                <EditableTextCell\n                  value={value}\n                  rowIndex={rowIndex}\n                  cellIndex={cellIndex}\n                  props={props}\n                  handleTextInputChange={this.handleTextInputChange}\n                  inputAriaLabel=\"Row 1 cell 3 content\"\n                />\n              ),\n              props: {\n                value: 'Row 1 cell 3 content',\n                name: 'uniqueIdRow1Cell3'\n              }\n            },\n            {\n              title: (value, rowIndex, cellIndex, props) => (\n                <EditableSelectInputCell\n                  value={value}\n                  rowIndex={rowIndex}\n                  cellIndex={cellIndex}\n                  props={props}\n                  onSelect={this.onSelect}\n                  isOpen={props.isSelectOpen}\n                  options={props.options.map((option, index) => (\n                    <SelectOption\n                      key={index}\n                      value={option.value}\n                      id={'uniqueIdRow1Cell4Option' + index}\n                      isPlaceholder={option.isPlaceholder}\n                    />\n                  ))}\n                  onToggle={isOpen => {\n                    this.onToggle(isOpen, rowIndex, cellIndex);\n                  }}\n                  selections={props.selected}\n                />\n              ),\n              props: {\n                value: ['Option 1'],\n                name: 'uniqueIdRow1Cell4',\n                isSelectOpen: props.isSelectOpen || false,\n                selected: props.selected || ['Option 1'],\n                options: [\n                  { value: 'Placeholder...', isPlaceholder: true },\n                  { value: 'Option 1' },\n                  { value: 'Option 2' },\n                  { value: 'Option 3' },\n                  { value: 'Option 4' },\n                  { value: 'Option 5' }\n                ],\n                editableSelectProps: {\n                  variant: 'single',\n                  'aria-label': 'Row 1 cell 4 content'\n                }\n              }\n            }\n          ]\n        },\n        {\n          cells: [\n            {\n              title: (value, rowIndex, cellIndex, props) => (\n                <EditableTextCell\n                  value={value}\n                  rowIndex={rowIndex}\n                  cellIndex={cellIndex}\n                  props={props}\n                  handleTextInputChange={this.handleTextInputChange}\n                  inputAriaLabel=\"Row 2 cell 1 content\"\n                />\n              ),\n              props: {\n                value: 'Row 2 cell 1 content',\n                name: 'uniqueIdRow2Cell1'\n              }\n            },\n            {\n              title: (value, rowIndex, cellIndex, props) => (\n                <EditableTextCell\n                  value={value}\n                  rowIndex={rowIndex}\n                  cellIndex={cellIndex}\n                  props={props}\n                  handleTextInputChange={this.handleTextInputChange}\n                  isDisabled\n                  inputAriaLabel=\"Row 2 cell 2 content\"\n                />\n              ),\n              props: {\n                value: 'Row 2 cell 2, disabled content',\n                name: 'uniqueIdRow2Cell2'\n              }\n            },\n            {\n              title: (value, rowIndex, cellIndex, props) => (\n                <EditableTextCell\n                  value={value}\n                  rowIndex={rowIndex}\n                  cellIndex={cellIndex}\n                  props={props}\n                  handleTextInputChange={this.handleTextInputChange}\n                  inputAriaLabel=\"Row 2 cell 3 content\"\n                />\n              ),\n              props: {\n                value: 'Row 2 cell 3 content',\n                name: 'uniqueIdRow2Cell3'\n              }\n            },\n            {\n              title: (value, rowIndex, cellIndex, props) => (\n                <EditableSelectInputCell\n                  value={value}\n                  rowIndex={rowIndex}\n                  cellIndex={cellIndex}\n                  props={props}\n                  onSelect={this.onSelect}\n                  clearSelection={this.clearSelection}\n                  isOpen={props.isSelectOpen}\n                  options={props.options.map((option, index) => {\n                    return (\n                      <SelectOption\n                        key={index}\n                        value={option.value}\n                        id={'uniqueIdRow2Cell4Option' + index}\n                        isPlaceholder={option.isPlaceholder}\n                      />\n                    );\n                  })}\n                  onToggle={isOpen => {\n                    this.onToggle(isOpen, rowIndex, cellIndex);\n                  }}\n                  selections={props.selected}\n                />\n              ),\n              props: {\n                value: ['Placeholder...'],\n                name: 'uniqueIdRow2Cell4',\n                isSelectOpen: props.isSelectOpen || false,\n                selected: props.selected || [],\n                options: [\n                  { value: 'Placeholder...', isPlaceholder: true },\n                  { value: 'Option 1' },\n                  { value: 'Option 2' },\n                  { value: 'Option 3' },\n                  { value: 'Option 4' },\n                  { value: 'Option 5' }\n                ],\n                editableSelectProps: {\n                  variant: 'typeaheadmulti',\n                  'aria-label': 'Row 2 cell 4 content',\n                  toggleId: 'editable-toggle'\n                }\n              }\n            }\n          ]\n        },\n        {\n          rowEditValidationRules: [\n            {\n              name: 'required',\n              validator: value => value.trim() !== '',\n              errorText: 'This field is required'\n            },\n            {\n              name: 'notFoo',\n              validator: value => value.trim().toLowerCase() !== 'foo',\n              errorText: 'Value cannot be \"foo\"'\n            },\n            {\n              name: 'minLength',\n              validator: value => value.trim().length >= 7,\n              errorText: 'Value must be at least 7 characters'\n            },\n            {\n              name: 'notXyz',\n              validator: value => value.trim().toLowerCase() !== 'xyz',\n              errorText: 'Value cannot be xyz'\n            }\n          ],\n          cells: [\n            {\n              title: (value, rowIndex, cellIndex, props) => (\n                <EditableTextCell\n                  value={value}\n                  rowIndex={rowIndex}\n                  cellIndex={cellIndex}\n                  props={props}\n                  handleTextInputChange={this.handleTextInputChange}\n                  inputAriaLabel=\"Row 3 cell 1 content\"\n                />\n              ),\n              props: {\n                value: 'Row 3 cell 1 content',\n                name: 'uniqueIdRow3Cell1'\n              }\n            },\n            {\n              title: (value, rowIndex, cellIndex, props) => (\n                <EditableTextCell\n                  value={value}\n                  rowIndex={rowIndex}\n                  cellIndex={cellIndex}\n                  props={props}\n                  handleTextInputChange={this.handleTextInputChange}\n                  isDisabled\n                  inputAriaLabel=\"Row 3 cell 2 content\"\n                />\n              ),\n              props: {\n                value: 'Row 3 cell 2, disabled content',\n                name: 'uniqueIdRow3Cell2'\n              }\n            },\n            {\n              title: (value, rowIndex, cellIndex, props) => (\n                <EditableTextCell\n                  value={value}\n                  rowIndex={rowIndex}\n                  cellIndex={cellIndex}\n                  props={props}\n                  handleTextInputChange={this.handleTextInputChange}\n                  inputAriaLabel=\"Row 3 cell 3 content\"\n                />\n              ),\n              props: {\n                value: 'Row 3 cell 3 content',\n                name: 'uniqueIdRow3Cell3'\n              }\n            },\n            {\n              title: (value, rowIndex, cellIndex, props) => (\n                <EditableSelectInputCell\n                  value={value}\n                  rowIndex={rowIndex}\n                  cellIndex={cellIndex}\n                  props={props}\n                  onSelect={this.onSelect}\n                  clearSelection={this.clearSelection}\n                  isOpen={props.isSelectOpen}\n                  options={props.options.map((option, index) => (\n                    <SelectOption\n                      key={index}\n                      value={option.value}\n                      id={'uniqueIdRow3Cell4Option' + index}\n                      isPlaceholder={option.isPlaceholder}\n                    />\n                  ))}\n                  onToggle={isOpen => {\n                    this.onToggle(isOpen, rowIndex, cellIndex);\n                  }}\n                  selections={props.selected}\n                />\n              ),\n              props: {\n                value: ['Option 3'],\n                name: 'uniqueIdRow3Cell4',\n                isSelectOpen: props.isSelectOpen || false,\n                selected: props.selected || ['Option 3'],\n                options: [\n                  { value: 'Placeholder...', isPlaceholder: true },\n                  { value: 'Option 1' },\n                  { value: 'Option 2' },\n                  { value: 'Option 3' },\n                  { value: 'Option 4' },\n                  { value: 'Option 5' }\n                ],\n                editableSelectProps: {\n                  variant: 'checkbox',\n                  'aria-label': 'Row 3 cell 4 content'\n                }\n              }\n            }\n          ]\n        }\n      ]\n    };\n\n    this.updateEditableRows = (evt, type, isEditable, rowIndex, validationErrors) => {\n      let newRows = Array.from(this.state.rows);\n\n      if (validationErrors && Object.keys(validationErrors).length) {\n        newRows[rowIndex] = validateCellEdits(newRows[rowIndex], type, validationErrors);\n        this.setState({ rows: newRows });\n        return;\n      }\n\n      if (type === 'cancel') {\n        newRows[rowIndex] = cancelCellEdits(newRows[rowIndex]);\n        this.setState({ rows: newRows });\n        return;\n      }\n\n      newRows[rowIndex] = applyCellEdits(newRows[rowIndex], type);\n\n      this.setState({ rows: newRows });\n    };\n\n    this.handleTextInputChange = (newValue, evt, rowIndex, cellIndex) => {\n      let newRows = Array.from(this.state.rows);\n      newRows[rowIndex].cells[cellIndex].props.editableValue = newValue;\n      this.setState({\n        rows: newRows\n      });\n    };\n\n    this.onSelect = (newValue, evt, rowIndex, cellIndex, isPlaceholder) => {\n      const newRows = Array.from(this.state.rows);\n      const newCellProps = newRows[rowIndex].cells[cellIndex].props;\n\n      if (isPlaceholder) {\n        newCellProps.editableValue = [];\n        newCellProps.selected = [];\n      } else {\n        if (newCellProps.editableValue === undefined) {\n          newCellProps.editableValue = [];\n        }\n\n        let newSelected = Array.from(newCellProps.selected);\n\n        switch (newCellProps.editableSelectProps.variant) {\n          case 'typeaheadmulti':\n          case 'checkbox': {\n            if (!newSelected.includes(newValue)) {\n              newSelected.push(newValue);\n            } else {\n              newSelected = newSelected.filter(el => el !== newValue);\n            }\n            break;\n          }\n          default: {\n            newSelected = newValue;\n          }\n        }\n\n        newCellProps.editableValue = newSelected;\n        newCellProps.selected = newSelected;\n      }\n\n      this.setState({\n        rows: newRows\n      });\n    };\n\n    this.clearSelection = (rowIndex, cellIndex) => {\n      const newRows = Array.from(this.state.rows);\n      const newCellProps = newRows[rowIndex].cells[cellIndex].props;\n      newCellProps.editableValue = [];\n      newCellProps.selected = [];\n      this.setState({\n        rows: newRows\n      });\n    };\n\n    this.onToggle = (isOpen, rowIndex, cellIndex) => {\n      let newRows = Array.from(this.state.rows);\n      newRows[rowIndex].cells[cellIndex].props.isSelectOpen = isOpen;\n      this.setState({\n        rows: newRows\n      });\n    };\n  }\n\n  render() {\n    const { columns, rows, actions } = this.state;\n\n    return (\n      <Table\n        actions={actions}\n        onRowEdit={this.updateEditableRows}\n        aria-label=\"Editable Rows Table\"\n        variant={TableVariant.compact}\n        cells={columns}\n        rows={rows}\n      >\n        <TableHeader />\n        <TableBody />\n      </Table>\n    );\n  }\n}","title":"Editable rows","lang":"js"}}>
      
      <p {...{"className":"ws-p"}}>
        {`To make a table row editable:`}
      </p>
      
      <ol {...{"className":"ws-ol"}}>
        

        
        <li {...{"className":"ws-li"}}>
          {`Pass a callback to Table via the `}
          
          <code {...{"className":"ws-code"}}>
            {`onRowEdit`}
          </code>
          {` prop.`}
        </li>
        

        
        <li {...{"className":"ws-li"}}>
          {`Define the title for the editable cells using the RowCellContent type function.`}
        </li>
        

        
        <li {...{"className":"ws-li"}}>
          {`Have the function return an `}
          
          <code {...{"className":"ws-code"}}>
            {`EditableTextCell`}
          </code>
          {`.`}
        </li>
        

        
        <li {...{"className":"ws-li"}}>
          {`Pass the `}
          
          <code {...{"className":"ws-code"}}>
            {`value`}
          </code>
          {` and `}
          
          <code {...{"className":"ws-code"}}>
            {`name`}
          </code>
          {` of the cell's input to the `}
          
          <code {...{"className":"ws-code"}}>
            {`EditableTextCell`}
          </code>
          {` via the cell's `}
          
          <code {...{"className":"ws-code"}}>
            {`props`}
          </code>
          {` field, which is
defined as being of type `}
          
          <code {...{"className":"ws-code"}}>
            {`EditableTextCellProps`}
          </code>
          {`.`}
        </li>
        

      </ol>
      
      <p {...{"className":"ws-p"}}>
        {`Example:`}
      </p>
      
      <Example {...{"code":"{\n  title: (value, rowIndex, cellIndex, props) => (\n    <EditableTextCell\n      value={value}\n      rowIndex={rowIndex}\n      cellIndex={cellIndex}\n      props={props}\n      handleTextInputChange={this.handleTextInputChange}\n      inputAriaLabel=\"Row 1 cell 1 content\"\n    />\n  ),\n  props: {\n    value: 'Row 1 cell 1 content',\n    name: 'uniqueIdRow1Cell1'\n  }\n},"}}>
        
      </Example>
    </Example>,
  'Favoritable (implemented with sortable and selectable)': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Table, TableHeader, TableBody, sortable, TableProps } from '@patternfly/react-table';\nimport { Checkbox } from '@patternfly/react-core';\n\ninterface Repository {\n  name: string;\n  branches: string;\n  prs: string;\n  workspaces: string;\n  lastCommit: string;\n}\n\nexport const LegacyTableFavoritable: React.FunctionComponent = () => {\n  // In real usage, this data would come from some external source like an API via props.\n  const repositories: Repository[] = [\n    { name: 'one', branches: 'two', prs: 'a', workspaces: 'four', lastCommit: 'five' },\n    { name: 'a', branches: 'two', prs: 'k', workspaces: 'four', lastCommit: 'five' },\n    { name: 'p', branches: 'two', prs: 'b', workspaces: 'four', lastCommit: 'five' }\n  ];\n\n  // Index of the currently sorted column\n  // Note: if you intend to make columns reorderable, you may instead want to use a non-numeric key\n  // as the identifier of the sorted column. See the \"Compound expandable\" example.\n  const [activeSortIndex, setActiveSortIndex] = React.useState<number | null>(null);\n\n  // Sort direction of the currently sorted column\n  const [activeSortDirection, setActiveSortDirection] = React.useState<'asc' | 'desc' | null>(null);\n\n  // Favorite state is similar to selection state. See selectedRepoNames and associated code below.\n  const [favoriteRepoNames, setFavoriteRepoNames] = React.useState<string[]>([]);\n  const setRepoFavorited = (repo: Repository, isFavoriting = true) =>\n    setFavoriteRepoNames(prevFavorites => {\n      const otherFavorites = prevFavorites.filter(r => r !== repo.name);\n      return isFavoriting ? [...otherFavorites, repo.name] : otherFavorites;\n    });\n  const isRepoFavorited = (repo: Repository) => favoriteRepoNames.includes(repo.name);\n\n  // Since OnSort specifies sorted columns by index, we need sortable values for our object by column index.\n  // Note: We also memoize the sortable values with useCallback to prevent rows jumping around when you change\n  // the favorites while sorting on that column. Only updating the sort state will reorder the rows.\n  const getSortableRowValues = React.useCallback(\n    (repo: Repository): (boolean | string | number)[] => {\n      const { name, branches, prs, workspaces, lastCommit } = repo;\n      // Blank value for first column (select checkboxes)\n      return ['', isRepoFavorited(repo), name, branches, prs, workspaces, lastCommit];\n    },\n    [activeSortIndex, activeSortDirection]\n  );\n\n  // Note that we perform the sort as part of the component's render logic and not in onSort.\n  // We shouldn't store the list of data in state because we don't want to have to sync that with props.\n  let sortedRepositories = repositories;\n  if (activeSortIndex !== null) {\n    sortedRepositories = repositories.sort((a, b) => {\n      const aValue = getSortableRowValues(a)[activeSortIndex];\n      const bValue = getSortableRowValues(b)[activeSortIndex];\n      if (typeof aValue === 'number' || typeof aValue === 'boolean') {\n        // Numeric sort\n        if (activeSortDirection === 'asc') {\n          return (aValue as number) - (bValue as number);\n        }\n        return (bValue as number) - (aValue as number);\n      } else {\n        // String sort\n        if (activeSortDirection === 'asc') {\n          return (aValue as string).localeCompare(bValue as string);\n        }\n        return (bValue as string).localeCompare(aValue as string);\n      }\n    });\n  }\n\n  const isRepoSelectable = (repo: Repository) => repo.name !== 'a'; // Arbitrary logic for this example\n  const selectableRepos = repositories.filter(isRepoSelectable);\n\n  // In this example, selected rows are tracked by the repo names from each row. This could be any unique identifier.\n  // This is to prevent state from being based on row order index in case we later add sorting.\n  const [selectedRepoNames, setSelectedRepoNames] = React.useState<string[]>([]);\n  const setRepoSelected = (repo: Repository, isSelecting = true) =>\n    setSelectedRepoNames(prevSelected => {\n      const otherSelectedRepoNames = prevSelected.filter(r => r !== repo.name);\n      return isSelecting && isRepoSelectable(repo) ? [...otherSelectedRepoNames, repo.name] : otherSelectedRepoNames;\n    });\n  const selectAllRepos = (isSelecting = true) =>\n    setSelectedRepoNames(isSelecting ? selectableRepos.map(r => r.name) : []);\n  const isRepoSelected = (repo: Repository) => selectedRepoNames.includes(repo.name);\n\n  const columns: TableProps['cells'] = [\n    { title: 'Repositories', transforms: [sortable] },\n    'Branches',\n    'Pull requests',\n    'Workspaces',\n    'Last commit'\n  ];\n  const rows: TableProps['rows'] = sortedRepositories.map(repo => {\n    const favorited = isRepoFavorited(repo);\n    return {\n      favorited,\n      // The favorites button has defaults that can be overriden\n      favoritesProps: {\n        'aria-label': favorited ? 'Favorited' : 'Not favorited', // Defaults to 'Starred' / 'Not starred'\n        id: `favorites-button-${repo.name}`, // Defaults to `favorites-button-${rowIndex}`\n        'aria-labelledby': `favorites-button-${repo.name}` // Defaults to `favorites-button-${rowIndex}`\n      },\n      selected: isRepoSelected(repo),\n      disableSelection: !isRepoSelectable(repo),\n      cells: [repo.name, repo.branches, repo.prs, repo.workspaces, repo.lastCommit]\n    };\n  });\n\n  const [canSortFavorites, setCanSortFavorites] = React.useState(true);\n\n  return (\n    <div>\n      <Checkbox\n        label=\"Can sort favorites\"\n        isChecked={canSortFavorites}\n        onChange={setCanSortFavorites}\n        aria-label=\"toggle can sort favorites checkbox\"\n        id=\"toggle-can-sort-favorites\"\n        name=\"toggle-can-sort-favorites\"\n      />\n      <Table\n        // using this prop enables the favorites column\n        onFavorite={(_event, isFavoriting, rowIndex) => {\n          const repo = sortedRepositories[rowIndex];\n          setRepoFavorited(repo, isFavoriting);\n        }}\n        // if the onSort prop is detected, favorites can be sorted\n        // if you want to exclude favorites from sorting you can use this prop with a value of `false`\n        canSortFavorites={canSortFavorites}\n        onSelect={(_event, isSelecting, rowIndex) => {\n          if (rowIndex === -1) {\n            selectAllRepos(isSelecting);\n          } else {\n            const repo = sortedRepositories[rowIndex];\n            setRepoSelected(repo, isSelecting);\n          }\n        }}\n        onSort={(_event, index, direction) => {\n          setActiveSortIndex(index);\n          setActiveSortDirection(direction);\n        }}\n        sortBy={{\n          index: activeSortIndex,\n          direction: activeSortDirection\n        }}\n        aria-label=\"Favoritable Table\"\n        cells={columns}\n        rows={rows}\n      >\n        <TableHeader />\n        <TableBody />\n      </Table>\n    </div>\n  );\n};\n","title":"Favoritable (implemented with sortable and selectable)","lang":"ts"}}>
      
      <p {...{"className":"ws-p"}}>
        {`To enable favoriting of a row, set the `}
        
        <code {...{"className":"ws-code"}}>
          {`onFavorite`}
        </code>
        {` callback prop on the Table.`}
      </p>
      
      <p {...{"className":"ws-p"}}>
        {`To control whether a row is favorited or not, the Table looks for `}
        
        <code {...{"className":"ws-code"}}>
          {`favorited: true | falsy`}
        </code>
        {` on the row definition.`}
      </p>
      
      <p {...{"className":"ws-p"}}>
        {`When you also pass a sort callback through the `}
        
        <code {...{"className":"ws-code"}}>
          {`onSort`}
        </code>
        {` prop, favorites sorting is also enabled.`}
      </p>
      
      <p {...{"className":"ws-p"}}>
        {`If you want to exclude favorites from sorting, set `}
        
        <code {...{"className":"ws-code"}}>
          {`canSortFavorites={false}`}
        </code>
        {` on the Table.`}
      </p>
    </Example>,
  'Tree table': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Table,\n  TableHeader,\n  TableBody,\n  treeRow,\n  IRow,\n  OnTreeRowCollapse,\n  OnCheckChange,\n  OnToggleRowDetails\n} from '@patternfly/react-table';\nimport LeafIcon from '@patternfly/react-icons/dist/esm/icons/leaf-icon';\nimport FolderIcon from '@patternfly/react-icons/dist/esm/icons/folder-icon';\nimport FolderOpenIcon from '@patternfly/react-icons/dist/esm/icons/folder-open-icon';\n\ninterface RepositoriesTreeNode {\n  name: string;\n  branches: string;\n  pullRequests: string;\n  workspaces: string;\n  children?: RepositoriesTreeNode[];\n}\n\nexport const LegacyTableTree: React.FunctionComponent = () => {\n  // In real usage, this data would come from some external source like an API via props.\n  const data: RepositoriesTreeNode[] = [\n    {\n      name: 'Repositories one',\n      branches: 'Branch one',\n      pullRequests: 'Pull request one',\n      workspaces: 'Workplace one',\n      children: [\n        {\n          name: 'Repositories two',\n          branches: 'Branch two',\n          pullRequests: 'Pull request two',\n          workspaces: 'Workplace two',\n          children: [\n            {\n              name: 'Repositories three',\n              branches: 'Branch three',\n              pullRequests: 'Pull request three',\n              workspaces: 'Workplace three'\n            },\n            {\n              name: 'Repositories four',\n              branches: 'Branch four',\n              pullRequests: 'Pull request four',\n              workspaces: 'Workplace four'\n            }\n          ]\n        },\n        {\n          name: 'Repositories five',\n          branches: 'Branch five',\n          pullRequests: 'Pull request five',\n          workspaces: 'Workplace five'\n        },\n        {\n          name: 'Repositories six',\n          branches: 'Branch six',\n          pullRequests: 'Pull request six',\n          workspaces: 'Workplace six'\n        }\n      ]\n    },\n    {\n      name: 'Repositories seven',\n      branches: 'Branch seven',\n      pullRequests: 'Pull request seven',\n      workspaces: 'Workplace seven',\n      children: [\n        {\n          name: 'Repositories eight',\n          branches: 'Branch eight',\n          pullRequests: 'Pull request eight',\n          workspaces: 'Workplace eight'\n        }\n      ]\n    },\n    {\n      name: 'Repositories nine',\n      branches: 'Branch nine',\n      pullRequests: 'Pull request nine',\n      workspaces: 'Workplace nine'\n    }\n  ];\n\n  const [expandedNodeNames, setExpandedNodeNames] = React.useState<string[]>(['Repositories one']);\n  const [expandedDetailsNodeNames, setExpandedDetailsNodeNames] = React.useState<string[]>([]);\n  const [selectedNodeNames, setSelectedNodeNames] = React.useState<string[]>([]);\n\n  const getDescendants = (node: RepositoriesTreeNode): RepositoriesTreeNode[] =>\n    [node].concat(...(node.children ? node.children.map(getDescendants) : []));\n  const areAllDescendantsSelected = (node: RepositoriesTreeNode) =>\n    getDescendants(node).every(n => selectedNodeNames.includes(n.name));\n  const areSomeDescendantsSelected = (node: RepositoriesTreeNode) =>\n    getDescendants(node).some(n => selectedNodeNames.includes(n.name));\n\n  const isNodeChecked = (node: RepositoriesTreeNode) => {\n    if (areAllDescendantsSelected(node)) {\n      return true;\n    }\n    if (areSomeDescendantsSelected(node)) {\n      return null;\n    }\n    return false;\n  };\n\n  // We index the tree nodes in the order of the table rows, for looking up by rowIndex\n  const flattenedNodes: RepositoriesTreeNode[] = [];\n\n  /** \n    Recursive function which flattens the data into an array of flattened IRow objects\n    params: \n      - nodes - array of a single level of tree nodes\n      - level - number representing how deeply nested the current row is\n      - posinset - position of the row relative to this row's siblings\n      - isHidden - defaults to false, true if this row's parent is expanded\n      - currentRowIndex - position of the row relative to the entire table\n  */\n  const buildRows = (\n    [node, ...remainingNodes]: RepositoriesTreeNode[],\n    level = 1,\n    posinset = 1,\n    rowIndex = 0,\n    isHidden = false\n  ): IRow[] => {\n    if (!node) {\n      return [];\n    }\n    const isExpanded = expandedNodeNames.includes(node.name);\n    const isDetailsExpanded = expandedDetailsNodeNames.includes(node.name);\n    const isChecked = isNodeChecked(node);\n    let icon = <LeafIcon />;\n    if (node.children) {\n      icon = isExpanded ? <FolderOpenIcon aria-hidden /> : <FolderIcon aria-hidden />;\n    }\n    flattenedNodes.push(node);\n\n    const childRows =\n      node.children && node.children.length\n        ? buildRows(node.children, level + 1, 1, rowIndex + 1, !isExpanded || isHidden)\n        : [];\n\n    return [\n      {\n        cells: [node.name, node.branches, node.pullRequests, node.workspaces],\n        props: {\n          isExpanded,\n          isDetailsExpanded,\n          isHidden,\n          'aria-level': level,\n          'aria-posinset': posinset,\n          'aria-setsize': node.children ? node.children.length : 0,\n          isChecked,\n          icon\n        }\n      },\n      ...childRows,\n      ...buildRows(remainingNodes, level, posinset + 1, rowIndex + 1 + childRows.length, isHidden)\n    ];\n  };\n\n  const onCollapse: OnTreeRowCollapse = (_event, rowIndex) => {\n    const node = flattenedNodes[rowIndex];\n    const isExpanded = expandedNodeNames.includes(node.name);\n    setExpandedNodeNames(prevExpanded => {\n      const otherExpandedNodeNames = prevExpanded.filter(name => name !== node.name);\n      return isExpanded ? otherExpandedNodeNames : [...otherExpandedNodeNames, node.name];\n    });\n  };\n\n  const onCheck: OnCheckChange = (_event, isChecking, rowIndex) => {\n    const node = flattenedNodes[rowIndex];\n    const nodeNamesToCheck = getDescendants(node).map(n => n.name);\n    setSelectedNodeNames(prevSelected => {\n      const otherSelectedNodeNames = prevSelected.filter(name => !nodeNamesToCheck.includes(name));\n      return !isChecking ? otherSelectedNodeNames : [...otherSelectedNodeNames, ...nodeNamesToCheck];\n    });\n  };\n\n  const onToggleRowDetails: OnToggleRowDetails = (_event, rowIndex) => {\n    const node = flattenedNodes[rowIndex];\n    const isDetailsExpanded = expandedDetailsNodeNames.includes(node.name);\n    setExpandedDetailsNodeNames(prevDetailsExpanded => {\n      const otherDetailsExpandedNodeNames = prevDetailsExpanded.filter(name => name !== node.name);\n      return isDetailsExpanded ? otherDetailsExpandedNodeNames : [...otherDetailsExpandedNodeNames, node.name];\n    });\n  };\n\n  return (\n    <Table\n      isTreeTable\n      aria-label=\"Tree table\"\n      cells={[\n        {\n          title: 'Repositories',\n          cellTransforms: [treeRow(onCollapse, onCheck, onToggleRowDetails)]\n        },\n        'Branches',\n        'Pull requests',\n        'Workspaces'\n      ]}\n      rows={buildRows(data)}\n    >\n      <TableHeader />\n      <TableBody />\n    </Table>\n  );\n};\n","title":"Tree table","lang":"ts","isBeta":true}}>
      
      <p {...{"className":"ws-p"}}>
        {`To enable a tree table:`}
      </p>
      
      <ol {...{"className":"ws-ol"}}>
        

        
        <li {...{"className":"ws-li"}}>
          {`Pass the `}
          
          <code {...{"className":"ws-code"}}>
            {`isTreeTable`}
          </code>
          {` prop to the `}
          
          <code {...{"className":"ws-code"}}>
            {`Table`}
          </code>
          {` component`}
        </li>
        

        
        <li {...{"className":"ws-li"}}>
          {`Pass the following props to each row:`}
          

          
          <ul {...{"className":"ws-ul"}}>
            

            
            <li {...{"className":"ws-li"}}>
              
              <code {...{"className":"ws-code"}}>
                {`isExpanded`}
              </code>
              {` - Flag indicating the node is expanded and its children are visible`}
            </li>
            

            
            <li {...{"className":"ws-li"}}>
              
              <code {...{"className":"ws-code"}}>
                {`isDetailsExpanded`}
              </code>
              {` - (optional) Flag indicating the row's details are visible in responsive view`}
            </li>
            

            
            <li {...{"className":"ws-li"}}>
              
              <code {...{"className":"ws-code"}}>
                {`isHidden`}
              </code>
              {` - Flag indicating the node's parent is expanded and this node is visible`}
            </li>
            

            
            <li {...{"className":"ws-li"}}>
              
              <code {...{"className":"ws-code"}}>
                {`aria-level`}
              </code>
              {` - number representing how many levels deep this node is nested`}
            </li>
            

            
            <li {...{"className":"ws-li"}}>
              
              <code {...{"className":"ws-code"}}>
                {`aria-posinset`}
              </code>
              {` - number representing where in the order this node sits amongst its siblings`}
            </li>
            

            
            <li {...{"className":"ws-li"}}>
              
              <code {...{"className":"ws-code"}}>
                {`aria-setsize`}
              </code>
              {` - number representing the number of children this node has`}
            </li>
            

            
            <li {...{"className":"ws-li"}}>
              
              <code {...{"className":"ws-code"}}>
                {`isChecked`}
              </code>
              {` - (optional) boolean used if this row uses checkboxes, flag indicating the checkbox checked`}
            </li>
            

            
            <li {...{"className":"ws-li"}}>
              
              <code {...{"className":"ws-code"}}>
                {`icon`}
              </code>
              {` - (optional) ReactNode icon to display before the row title`}
            </li>
            

            
            <li {...{"className":"ws-li"}}>
              
              <code {...{"className":"ws-code"}}>
                {`toggleAriaLabel`}
              </code>
              {` - (optional) accessible label for the expand/collapse children rows toggle arrow`}
            </li>
            

            
            <li {...{"className":"ws-li"}}>
              
              <code {...{"className":"ws-code"}}>
                {`checkAriaLabel`}
              </code>
              {` - (optional) accessible label for the checkbox`}
            </li>
            

            
            <li {...{"className":"ws-li"}}>
              
              <code {...{"className":"ws-code"}}>
                {`showDetailsAriaLabel`}
              </code>
              {` - (optional) accessible label for the show row details button in the responsive view`}
            </li>
            

          </ul>
          

        </li>
        

        
        <li {...{"className":"ws-li"}}>
          {`Use the `}
          
          <code {...{"className":"ws-code"}}>
            {`treeRow`}
          </code>
          {` cellTransform in the first column of the table. `}
          
          <code {...{"className":"ws-code"}}>
            {`treeRow`}
          </code>
          {` expects one or two callbacks as params.`}
          

          
          <ul {...{"className":"ws-ul"}}>
            

            
            <li {...{"className":"ws-li"}}>
              
              <code {...{"className":"ws-code"}}>
                {`onCollapse`}
              </code>
              {` - Callback when user expands/collapses a row to reveal/hide the row's children.`}
            </li>
            

            
            <li {...{"className":"ws-li"}}>
              
              <code {...{"className":"ws-code"}}>
                {`onCheckChange`}
              </code>
              {` - (optional) Callback when user changes the checkbox on a row.`}
            </li>
            

            
            <li {...{"className":"ws-li"}}>
              
              <code {...{"className":"ws-code"}}>
                {`onToggleRowDetails`}
              </code>
              {` - (optional) Callback when user shows/hides the row details in responsive view.`}
            </li>
            

          </ul>
          

        </li>
        

      </ol>
      
      <p {...{"className":"ws-p"}}>
        {`Note: If this table is going to be tested using axe-core, the tests will flag the use of aria-level,
aria-posinset, and aria-setsize as violations. This is an intentional choice at this time so that
the voice over technologies will recognize the flat table structure as a tree.`}
      </p>
    </Example>,
  'Striped': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Table, TableHeader, TableBody, TableProps } from '@patternfly/react-table';\ninterface Repository {\n  name: string;\n  branches: string;\n  prs: string;\n  workspaces: string;\n  lastCommit: string;\n}\n\nexport const LegacyTableStriped: React.FunctionComponent = () => {\n  // In real usage, this data would come from some external source like an API via props.\n  const repositories: Repository[] = [\n    {\n      name: 'Repository one',\n      branches: 'Branch one',\n      prs: 'PR one',\n      workspaces: 'Workspace one',\n      lastCommit: 'Commit one'\n    },\n    {\n      name: 'Repository two',\n      branches: 'Branch two',\n      prs: 'PR two',\n      workspaces: 'Workspace two',\n      lastCommit: 'Commit two'\n    },\n    {\n      name: 'Repository three',\n      branches: 'Branch three',\n      prs: 'PR three',\n      workspaces: 'Workspace three',\n      lastCommit: 'Commit three'\n    }\n  ];\n\n  const columns: TableProps['cells'] = ['Repositories', 'Branches', 'Pull requests', 'Workspaces', 'Last commit'];\n  const rows: TableProps['rows'] = repositories.map(repo => [\n    repo.name,\n    repo.branches,\n    repo.prs,\n    repo.workspaces,\n    repo.lastCommit\n  ]);\n\n  return (\n    <Table aria-label=\"Simple Table\" cells={columns} rows={rows} isStriped>\n      <TableHeader />\n      <TableBody />\n    </Table>\n  );\n};\n","title":"Striped","lang":"ts"}}>
      
      <p {...{"className":"ws-p"}}>
        {`To apply striping to a basic table, add the `}
        
        <code {...{"className":"ws-code"}}>
          {`isStriped`}
        </code>
        {` property to `}
        
        <code {...{"className":"ws-code"}}>
          {`Table`}
        </code>
        {`.`}
      </p>
    </Example>,
  'Striped expandable': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Table, TableBody, TableHeader, TableVariant, TableProps, expandable, IRowCell } from '@patternfly/react-table';\nimport { Checkbox } from '@patternfly/react-core';\n\ninterface Repository {\n  name: string;\n  branches: string;\n  prs: string;\n  workspaces: string;\n  details?: {\n    detail1?: string;\n    detail2?: string;\n    detail3?: string;\n    detailFormat: 0 | 1 | 2 | 3;\n  };\n}\n\nexport const LegacyTableStripedExpandable: React.FunctionComponent = () => {\n  // In real usage, this data would come from some external source like an API via props.\n  const repositories: Repository[] = [\n    { name: 'one', branches: 'two', prs: 'a', workspaces: 'four' },\n    {\n      name: 'parent 1',\n      branches: 'two',\n      prs: 'k',\n      workspaces: 'four',\n      // This `details` structure is just for this example. You can drive expanded content from any kind of data.\n      details: { detailFormat: 0, detail1: 'single cell' }\n    },\n    {\n      name: 'parent 2',\n      branches: 'two',\n      prs: 'b',\n      workspaces: 'four',\n      details: { detailFormat: 1, detail1: 'single cell - fullWidth' }\n    },\n    {\n      name: 'parent 3',\n      branches: '2',\n      prs: 'b',\n      workspaces: 'four',\n      details: { detailFormat: 2, detail1: 'single cell - noPadding' }\n    },\n    {\n      name: 'parent 4',\n      branches: '2',\n      prs: 'b',\n      workspaces: 'four',\n      details: { detailFormat: 3, detail1: 'single cell - fullWidth & noPadding' }\n    },\n    {\n      name: 'parent 5',\n      branches: '2',\n      prs: 'b',\n      workspaces: 'four',\n      details: {\n        detailFormat: 0,\n        detail1: \"spans 'Repositories and 'Branches'\",\n        detail2: \"spans 'Pull requests' and 'Workspaces', and 'Last commit'\"\n      }\n    },\n    {\n      name: 'parent 6',\n      branches: '2',\n      prs: 'b',\n      workspaces: 'four',\n      details: {\n        detailFormat: 1,\n        detail1: \"fullWidth, spans the collapsible column and 'Repositories'\",\n        detail2: \"fullWidth, spans 'Branches' and 'Pull requests'\",\n        detail3: 'fullWidth, spans the empty column'\n      }\n    }\n  ];\n\n  // In this example, expanded rows are tracked by the repo names from each row. This could be any unique identifier.\n  // This is to prevent state from being based on row order index in case we later add sorting.\n  // Note that this behavior is very similar to selection state.\n  const initialExpandedRepoNames = repositories.filter(repo => !!repo.details).map(repo => repo.name); // Default to all expanded\n  const [expandedRepoNames, setExpandedRepoNames] = React.useState<string[]>(initialExpandedRepoNames);\n  const setRepoExpanded = (repo: Repository, isExpanding = true) =>\n    setExpandedRepoNames(prevExpanded => {\n      const otherExpandedRepoNames = prevExpanded.filter(r => r !== repo.name);\n      return isExpanding ? [...otherExpandedRepoNames, repo.name] : otherExpandedRepoNames;\n    });\n  const isRepoExpanded = (repo: Repository) => expandedRepoNames.includes(repo.name);\n\n  const [isExampleCompact, setIsExampleCompact] = React.useState(true);\n\n  // We want to be able to reference the original data object based on row index. But because an expanded\n  // row takes up two row indexes, repositories[rowIndex] will not be accurate like it would in a normal table.\n  // One solution to this is to create an array of data objects indexed by the displayed row index.\n  const reposByRowIndex: (Repository | null)[] = [];\n\n  const columns: TableProps['cells'] = [\n    {\n      title: 'Repositories',\n      cellFormatters: [expandable]\n    },\n    'Branches',\n    { title: 'Pull requests' },\n    { title: '' /* deliberately empty */, dataLabel: 'Label for mobile view' }\n  ];\n  const rows: TableProps['rows'] = [];\n  repositories.forEach(repo => {\n    rows.push({\n      ...(repo.details ? { isOpen: isRepoExpanded(repo) } : {}),\n      cells: [repo.name, repo.branches, repo.prs, repo.workspaces]\n    });\n    reposByRowIndex.push(repo);\n    if (repo.details) {\n      // Some arbitrary examples of how you could customize the child row based on your needs\n      const { detail1, detail2, detail3, detailFormat } = repo.details;\n      const numColumns = 5;\n      const childIsFullWidth = [1, 3].includes(detailFormat);\n      const childHasNoPadding = [2, 3].includes(detailFormat);\n      let detailColSpans = [1, 1, 1];\n      if (detail1 && !detail2 && !detail3) {\n        detailColSpans = [childIsFullWidth ? numColumns : numColumns + 1]; // Account for toggle column\n      } else if (detail1 && detail2 && !detail3) {\n        detailColSpans = [2, childIsFullWidth ? 3 : 4];\n      } else if (detail1 && detail2 && detail3) {\n        detailColSpans = [2, 2, childIsFullWidth ? 1 : 2];\n      }\n      const cells: IRowCell[] = [];\n      [detail1, detail2, detail3].forEach((detail, index) => {\n        if (detail) {\n          cells.push({\n            title: detail1,\n            props: {\n              colSpan: detailColSpans[index]\n            }\n          });\n        }\n      });\n      rows.push({\n        parent: rows.length - 1,\n        cells,\n        fullWidth: childIsFullWidth,\n        noPadding: childHasNoPadding\n      });\n      reposByRowIndex.push(null);\n    }\n  });\n\n  return (\n    <React.Fragment>\n      <Checkbox\n        label=\"Compact\"\n        isChecked={isExampleCompact}\n        onChange={checked => setIsExampleCompact(checked)}\n        aria-label=\"toggle striped compact variation\"\n        id=\"toggle-compact-striped\"\n        name=\"toggle-compact-striped\"\n      />\n      <Table\n        aria-label=\"Expandable table\"\n        variant={isExampleCompact ? TableVariant.compact : undefined}\n        onCollapse={(_event, rowIndex, isOpen) => {\n          if (reposByRowIndex[rowIndex]) {\n            setRepoExpanded(reposByRowIndex[rowIndex], isOpen);\n          }\n        }}\n        rows={rows}\n        cells={columns}\n        isStriped\n        isExpandable\n      >\n        <TableHeader />\n        <TableBody />\n      </Table>\n    </React.Fragment>\n  );\n};\n","title":"Striped expandable","lang":"ts"}}>
      
      <p {...{"className":"ws-p"}}>
        {`To apply striping to an expandable table, add the `}
        
        <code {...{"className":"ws-code"}}>
          {`isStriped`}
        </code>
        {` and `}
        
        <code {...{"className":"ws-code"}}>
          {`isExpandable`}
        </code>
        {` properties to `}
        
        <code {...{"className":"ws-code"}}>
          {`Table`}
        </code>
        {`.`}
      </p>
    </Example>,
  'Striped custom tr': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Table, TableHeader, TableBody, TableProps } from '@patternfly/react-table';\nimport { css } from '@patternfly/react-styles';\n\ninterface Repository {\n  name: string;\n  branches: string | null;\n  prs: string | null;\n  workspaces: string;\n  lastCommit: string;\n}\n\nexport const LegacyTableStripedCustomTr: React.FunctionComponent = () => {\n  // In real usage, this data would come from some external source like an API via props.\n  const repositories: Repository[] = [\n    { name: 'one', branches: 'two', prs: 'three', workspaces: 'four', lastCommit: 'five' },\n    { name: 'one - 2', branches: null, prs: null, workspaces: 'four - 2', lastCommit: 'five - 2' },\n    { name: 'one - 3', branches: 'two - 3', prs: 'three - 3', workspaces: 'four - 3', lastCommit: 'five - 3' }\n  ];\n\n  const columns: TableProps['cells'] = ['Repositories', 'Branches', 'Pull requests', 'Workspaces', 'Last commit'];\n  const rows: TableProps['rows'] = repositories.map(repo => [\n    repo.name,\n    repo.branches || '',\n    repo.prs || '',\n    repo.workspaces,\n    repo.lastCommit\n  ]);\n\n  const customRowWrapper: TableProps['rowWrapper'] = ({ trRef, className, rowProps, row: _row, ...props }) => {\n    const isOddRow = rowProps ? !!((rowProps.rowIndex + 1) % 2) : true;\n    return (\n      <tr\n        {...props}\n        ref={trRef as React.LegacyRef<HTMLTableRowElement>}\n        className={css(className, isOddRow && 'pf-m-striped')}\n      />\n    );\n  };\n\n  return (\n    <Table\n      caption=\"Table with custom row wrapper that stripes odd rows\"\n      cells={columns}\n      rows={rows}\n      rowWrapper={customRowWrapper}\n    >\n      <TableHeader />\n      <TableBody />\n    </Table>\n  );\n};\n","title":"Striped custom tr","lang":"ts"}}>
      
      <p {...{"className":"ws-p"}}>
        {`To manually control striping, use a custom row wrapper that applies the `}
        
        <code {...{"className":"ws-code"}}>
          {`pf-m-striped`}
        </code>
        {` css class for each desired row.`}
      </p>
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"legacy-table","size":"h1","className":"ws-title ws-h1"}}>
      {`Legacy Table`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Note: Table lives in its own package at `}
      <PatternflyThemeLink {...{"to":"https://www.npmjs.com/package/@patternfly/react-table"}}>
        {`@patternfly/react-table`}
      </PatternflyThemeLink>
      {`!`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`PatternFly has two implementations of a React table.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`The first is the newer `}
      <code {...{"className":"ws-code"}}>
        {`TableComposable`}
      </code>
      {` component. It takes a more explicit and declarative approach, and its implementation more closely mirrors that of an html table. Generally, updates and new feature requests are implemented in the `}
      <code {...{"className":"ws-code"}}>
        {`ComposableTable`}
      </code>
      {`.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`The second is the original `}
      <code {...{"className":"ws-code"}}>
        {`Table`}
      </code>
      {` component. It is configuration based and takes a less declarative and more implicit approach about laying out the table structure, such as the rows and cells within it.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`For most common use cases, we recommend using `}
        <code {...{"className":"ws-code"}}>
          {`TableComposable`}
        </code>
        {`. Both implementations are supported and fully maintained.`}
      </strong>
    </p>
    <AutoLinkHeader {...{"id":"table-columns","size":"h2","className":"ws-title ws-h2"}}>
      {`Table Columns`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Array items for columns provided to the `}
      <code {...{"className":"ws-code"}}>
        {`Table`}
      </code>
      {`'s `}
      <code {...{"className":"ws-code"}}>
        {`cells`}
      </code>
      {` prop, can be simple strings or objects.`}
    </p>
    <Example {...{"code":"cells: (ICell | string)[];"}}>
    </Example>
    <p {...{"className":"ws-p"}}>
      <code {...{"className":"ws-code"}}>
        {`ICell`}
      </code>
      {` (excerpt):`}
    </p>
    <Example {...{"code":"interface ICell {\n  /* cell contents */\n  title?: string | React.ReactNode;\n  /** transformations applied to the header cell */\n  transforms?: ITransform[];\n  /** transformations applied to the cells within the column's body */\n  cellTransforms?: ITransform[];\n  /** transformations applied to the entire column */\n  columnTransforms?: ITransform[];\n  /** Additional header props, it contains the info prop as well which can be used to add tooltip/popover */\n  header?: HeaderType;\n  /** Additional props passed into the rendered column header element */\n  props?: any;\n  /** Text to display when data from this column is rendered in mobile view */\n  dataLabel?: string;\n}"}}>
    </Example>
    <p {...{"className":"ws-p"}}>
      {`If you wish to enable other built in features, use `}
      <code {...{"className":"ws-code"}}>
        {`transforms`}
      </code>
      {` to apply them to
column headers or `}
      <code {...{"className":"ws-code"}}>
        {`cellTransforms`}
      </code>
      {` to apply them to every cell in that column.`}
    </p>
    <Example {...{"code":"// simple\ncolumns: ['Repositories', 'Branches', 'Pull requests', 'Workspaces', 'Last commit']\n// with tooltip\ncolumns: [\n  {\n    title: 'Repositories',\n    transforms: [\n      info({\n        tooltip: 'More information about repositories'\n      })\n    ]\n  }\n]\n// center header and body cells within the column\ncolumns: [\n  {\n    title: 'Last commit',\n    transforms: [textCenter],\n    cellTransforms: [textCenter]\n  }\n]"}}>
    </Example>
    <p {...{"className":"ws-p"}}>
      {`Many of the subsequent examples demonstrate how to apply different transformations to enable `}
      <code {...{"className":"ws-code"}}>
        {`Table`}
      </code>
      {` features.`}
    </p>
    <AutoLinkHeader {...{"id":"table-rows","size":"h2","className":"ws-title ws-h2"}}>
      {`Table Rows`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Array items for rows provided to the `}
      <code {...{"className":"ws-code"}}>
        {`Table`}
      </code>
      {`'s `}
      <code {...{"className":"ws-code"}}>
        {`rows`}
      </code>
      {` prop, can be simple strings or objects.`}
    </p>
    <Example {...{"code":"rows: (IRow | string[])[]"}}>
    </Example>
    <p {...{"className":"ws-p"}}>
      <code {...{"className":"ws-code"}}>
        {`IRow`}
      </code>
      {` (excerpt):`}
    </p>
    <Example {...{"code":"interface IRow extends RowType {\n  cells?: (React.ReactNode | IRowCell)[];\n  props?: any;\n  fullWidth?: boolean;\n  noPadding?: boolean;\n}\ninterface IRowCell {\n  title?: string | React.ReactNode | RowCellContent;\n  props?: any;\n  formatters?: IFormatter[];\n}"}}>
    </Example>
    <AutoLinkHeader {...{"id":"table-examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Table examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["Custom row wrapper"])}
    {React.createElement(pageData.examples["Sortable & wrapping column headers"])}
    {React.createElement(pageData.examples["Sortable - custom control"])}
    {React.createElement(pageData.examples["Selectable with checkbox"])}
    {React.createElement(pageData.examples["Selectable radio input"])}
    {React.createElement(pageData.examples["Hoverable rows, selectable rows, and header cell tooltips/popovers"])}
    {React.createElement(pageData.examples["Actions and first cell in body rows as th"])}
    {React.createElement(pageData.examples["Expandable"])}
    {React.createElement(pageData.examples["Compound expandable"])}
    {React.createElement(pageData.examples["With width and breakpoint visibility modifiers"])}
    {React.createElement(pageData.examples["Controlling text"])}
    {React.createElement(pageData.examples["Modifiers with table text"])}
    {React.createElement(pageData.examples["Empty state"])}
    {React.createElement(pageData.examples["Editable rows"])}
    {React.createElement(pageData.examples["Favoritable (implemented with sortable and selectable)"])}
    {React.createElement(pageData.examples["Tree table"])}
    {React.createElement(pageData.examples["Striped"])}
    {React.createElement(pageData.examples["Striped expandable"])}
    {React.createElement(pageData.examples["Striped custom tr"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsTableReactLegacyDocs';
Component.pageData = pageData;

export default Component;
