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
import BlueprintIcon from '@patternfly/react-icons/dist/esm/icons/blueprint-icon';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';
const pageData = {
  "id": "Table",
  "section": "components",
  "source": "react-composable",
  "slug": "/components/table/react-composable",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-table/src/components/TableComposable/examples/ComposableTable.md",
  "propComponents": [
    {
      "name": "TableComposable",
      "description": "",
      "props": [
        {
          "name": "aria-label",
          "type": "string",
          "description": "Adds an accessible name for the Table"
        },
        {
          "name": "borders",
          "type": "boolean",
          "description": "Render borders"
        },
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the Table"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the Table"
        },
        {
          "name": "gridBreakPoint",
          "type": "'' | 'grid' | 'grid-md' | 'grid-lg' | 'grid-xl' | 'grid-2xl'",
          "description": "Specifies the grid breakpoints"
        },
        {
          "name": "hasSelectableRowCaption",
          "type": "boolean",
          "description": "Flag to apply a caption element with visually hidden instructions that improves a11y for tables with selectable rows. If this prop is set to true other caption elements should not be passed as children of this table, and you should instead use the selectableRowCaptionText prop."
        },
        {
          "name": "innerRef",
          "type": "React.RefObject<any>",
          "description": "Forwarded ref"
        },
        {
          "name": "isExpandable",
          "type": "boolean",
          "description": "Flag indicating this table contains expandable rows to maintain proper striping"
        },
        {
          "name": "isNested",
          "type": "boolean",
          "description": "Flag indicating this table is nested within another table"
        },
        {
          "name": "isStickyHeader",
          "type": "boolean",
          "description": "If set to true, the table header sticks to the top of its container"
        },
        {
          "name": "isStriped",
          "type": "boolean",
          "description": "Flag indicating this table should be striped. This property works best for a single <tbody> table. Striping may also be done manually by applying this property to Tbody and Tr components."
        },
        {
          "name": "isTreeTable",
          "type": "boolean",
          "description": "Flag indicating table is a tree table"
        },
        {
          "name": "nestedHeaderColumnSpans",
          "type": "number[]",
          "description": "Collection of column spans for nested headers. Deprecated: see https://github.com/patternfly/patternfly/issues/4584"
        },
        {
          "name": "role",
          "type": "string",
          "description": "A valid WAI-ARIA role to be applied to the table element"
        },
        {
          "name": "selectableRowCaptionText",
          "type": "string",
          "description": "Visible text to add alongside the hidden a11y caption for tables with selectable rows. This prop must be used to add custom caption content to the table when the hasSelectableRowCaption prop is set to true."
        },
        {
          "name": "variant",
          "type": "TableVariant | 'compact'",
          "description": "Style variant for the Table\ncompact: Reduces spacing and makes the table more compact"
        }
      ]
    },
    {
      "name": "Thead",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the <thead> row group"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the <thead> element"
        },
        {
          "name": "hasNestedHeader",
          "type": "boolean",
          "description": "Indicates the <thead> contains a nested header"
        },
        {
          "name": "innerRef",
          "type": "React.Ref<any>",
          "description": "Forwarded ref"
        },
        {
          "name": "noWrap",
          "type": "boolean",
          "description": "Won't wrap the table head if true"
        }
      ]
    },
    {
      "name": "Tbody",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the <tbody> row group"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the <tbody> element"
        },
        {
          "name": "innerRef",
          "type": "React.Ref<any>",
          "description": "Forwarded ref"
        },
        {
          "name": "isEvenStriped",
          "type": "boolean",
          "description": "Flag indicating the <tbody> contains evenly striped rows."
        },
        {
          "name": "isExpanded",
          "type": "boolean",
          "description": "Modifies the body to allow for expandable rows"
        },
        {
          "name": "isOddStriped",
          "type": "boolean",
          "description": "Flag indicating the <tbody> contains oddly striped rows."
        }
      ]
    },
    {
      "name": "Tr",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the <tr> row"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the <tr> row"
        },
        {
          "name": "innerRef",
          "type": "React.Ref<any>",
          "description": "Forwarded ref"
        },
        {
          "name": "isBorderRow",
          "type": "boolean",
          "description": "Flag indicating the row will act as a border. This is typically used for a table with a nested and sticky header."
        },
        {
          "name": "isEditable",
          "type": "boolean",
          "description": "Only applicable to Tr within the Tbody: Whether the row is editable"
        },
        {
          "name": "isExpanded",
          "type": "boolean",
          "description": "Only applicable to Tr within the Tbody: Makes the row expandable and determines if it's expanded or not.\nTo prevent column widths from responding automatically when expandable rows are toggled, the width prop must also be passed into either the th or td component"
        },
        {
          "name": "isHidden",
          "type": "boolean",
          "description": "Flag indicating the Tr is hidden"
        },
        {
          "name": "isHoverable",
          "type": "boolean",
          "description": "Flag which adds hover styles for the table row"
        },
        {
          "name": "isRowSelected",
          "type": "boolean",
          "description": "Flag indicating the row is selected - adds selected styling"
        },
        {
          "name": "isSelectable",
          "type": "boolean",
          "description": "Flag indicating that the row is selectable"
        },
        {
          "name": "isStriped",
          "type": "boolean",
          "description": "Flag indicating the row is striped"
        },
        {
          "name": "onRowClick",
          "type": "(event?: React.KeyboardEvent | React.MouseEvent) => void",
          "description": "An event handler for the row"
        },
        {
          "name": "resetOffset",
          "type": "boolean",
          "description": "Flag indicating the spacing offset of the first cell should be reset"
        }
      ]
    },
    {
      "name": "Th",
      "description": "",
      "props": [
        {
          "name": "dataLabel",
          "type": "string",
          "description": "The column header the cell corresponds to. Applicable when this component is used as a direct child to <Tr>.\nThis attribute replaces table header in mobile viewport. It is rendered by ::before pseudo element."
        },
        {
          "name": "expand",
          "type": "ThExpandType",
          "description": "Renders a chevron so that all row chevrons can be expanded/collapsed"
        },
        {
          "name": "hasRightBorder",
          "type": "boolean",
          "description": "Adds a border to the right side of the cell"
        },
        {
          "name": "info",
          "type": "ThInfoType",
          "description": "Adds tooltip/popover info button"
        },
        {
          "name": "isStickyColumn",
          "type": "boolean",
          "description": "Indicates the header column should be sticky"
        },
        {
          "name": "isSubheader",
          "type": "boolean",
          "description": "Indicates the <th> is part of a subheader of a nested header"
        },
        {
          "name": "onMouseEnter",
          "type": "(event: any) => void",
          "description": "Callback on mouse enter"
        },
        {
          "name": "scope",
          "type": "string",
          "description": "Adds scope to the column to associate header cells with data cells"
        },
        {
          "name": "select",
          "type": "ThSelectType",
          "description": "Renders a checkbox select so that all row checkboxes can be selected/deselected"
        },
        {
          "name": "sort",
          "type": "ThSortType",
          "description": "Formats the header so that its column will be sortable"
        },
        {
          "name": "stickyLeftOffset",
          "type": "string",
          "description": "Left offset of a sticky column. This will typically be equal to the combined value set by stickyMinWidth of any sticky columns that precede the current sticky column."
        },
        {
          "name": "stickyMinWidth",
          "type": "string",
          "description": "Minimum width for a sticky column"
        },
        {
          "name": "tooltip",
          "type": "React.ReactNode",
          "description": "Tooltip to show on the header cell\nNote: If the header cell is truncated and has simple string content, it will already attempt to display the header text\nIf you want to show a tooltip that differs from the header text, you can set it here\nTo disable it completely you can set it to null"
        }
      ]
    },
    {
      "name": "Td",
      "description": "",
      "props": [
        {
          "name": "actions",
          "type": "TdActionsType",
          "description": "Turns the cell into an actions cell"
        },
        {
          "name": "compoundExpand",
          "type": "TdCompoundExpandType",
          "description": "Turns the cell into a compound expansion toggle"
        },
        {
          "name": "dataLabel",
          "type": "string",
          "description": "The column header the cell corresponds to.\nThis attribute replaces table header in mobile viewport. It is rendered by ::before pseudo element."
        },
        {
          "name": "draggableRow",
          "type": "TdDraggableType",
          "description": "Turns the cell into the first cell in a draggable row"
        },
        {
          "name": "expand",
          "type": "TdExpandType",
          "description": "Turns the cell into an expansion toggle and determines if the corresponding expansion row is open"
        },
        {
          "name": "favorites",
          "type": "TdFavoritesType",
          "description": "Turns the cell into a favorites cell with a star button"
        },
        {
          "name": "isActionCell",
          "type": "boolean",
          "description": "Applies pf-c-table__action to td"
        },
        {
          "name": "noPadding",
          "type": "boolean",
          "description": "True to remove padding"
        },
        {
          "name": "select",
          "type": "TdSelectType",
          "description": "Renders a checkbox or radio select"
        },
        {
          "name": "treeRow",
          "type": "TdTreeRowType",
          "description": "Turns the cell into the first cell in a tree table row"
        }
      ]
    },
    {
      "name": "Caption",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the caption"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the caption"
        }
      ]
    },
    {
      "name": "TableText",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered within the table text",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the table text",
          "defaultValue": "''"
        },
        {
          "name": "onMouseEnter",
          "type": "(event: any) => void",
          "description": "callback used to create the tooltip if text is truncated",
          "defaultValue": "() => {}"
        },
        {
          "name": "tooltip",
          "type": "string",
          "description": "text to display on the tooltip",
          "defaultValue": "''"
        },
        {
          "name": "tooltipProps",
          "type": "Omit<TooltipProps, 'content'>",
          "description": "other props to pass to the tooltip",
          "defaultValue": "{}"
        },
        {
          "name": "variant",
          "type": "TableTextVariant | 'span' | 'div'",
          "description": "Determines which element to render as a table text",
          "defaultValue": "'span'"
        },
        {
          "name": "wrapModifier",
          "type": "WrapModifier | 'wrap' | 'nowrap' | 'truncate' | 'breakWord' | 'fitContent'",
          "description": "Determines which wrapping modifier to apply to the table text",
          "defaultValue": "null"
        }
      ]
    },
    {
      "name": "TdActionsType",
      "description": "",
      "props": [
        {
          "name": "actionsToggle",
          "type": "(props: CustomActionsToggleProps) => React.ReactNode",
          "description": "Custom toggle for the actions menu"
        },
        {
          "name": "disable",
          "type": "boolean",
          "description": "Whether to disable the actions"
        },
        {
          "name": "dropdownDirection",
          "type": "DropdownDirection",
          "description": "Actions dropdown direction"
        },
        {
          "name": "dropdownPosition",
          "type": "DropdownPosition",
          "description": "Actions dropdown position"
        },
        {
          "name": "items",
          "type": "IActions",
          "description": "Cell actions",
          "required": true
        },
        {
          "name": "rowIndex",
          "type": "number",
          "description": "The row index"
        }
      ]
    },
    {
      "name": "TdSelectType",
      "description": "",
      "props": [
        {
          "name": "disable",
          "type": "boolean",
          "description": "Whether to disable the selection"
        },
        {
          "name": "isSelected",
          "type": "boolean",
          "description": "Whether the cell is selected",
          "required": true
        },
        {
          "name": "onSelect",
          "type": "OnSelect",
          "description": "Callback on select"
        },
        {
          "name": "props",
          "type": "any",
          "description": "Additional props forwarded to select rowData"
        },
        {
          "name": "rowIndex",
          "type": "number",
          "description": "The row index",
          "required": true
        },
        {
          "name": "variant",
          "type": "'checkbox' | 'radio'",
          "description": "The selectable variant"
        }
      ]
    },
    {
      "name": "ThSelectType",
      "description": "",
      "props": [
        {
          "name": "isHeaderSelectDisabled",
          "type": "boolean",
          "description": "Flag indicating the select checkbox in the th is disabled"
        },
        {
          "name": "isSelected",
          "type": "boolean",
          "description": "Whether the cell is selected",
          "required": true
        },
        {
          "name": "onSelect",
          "type": "OnSelect",
          "description": "Callback on select"
        }
      ]
    },
    {
      "name": "TdTreeRowType",
      "description": "",
      "props": [
        {
          "name": "onCheckChange",
          "type": "OnCheckChange",
          "description": "(optional) Callback when user changes the checkbox on a row"
        },
        {
          "name": "onCollapse",
          "type": "OnTreeRowCollapse",
          "description": "Callback when user expands/collapses a row to reveal/hide the row's children",
          "required": true
        },
        {
          "name": "onToggleRowDetails",
          "type": "OnToggleRowDetails",
          "description": "(optional) Callback when user shows/hides the row details in responsive view."
        },
        {
          "name": "props",
          "type": "any",
          "description": "Additional props forwarded to the title cell of the tree row"
        },
        {
          "name": "rowIndex",
          "type": "number",
          "description": "The row index"
        }
      ]
    },
    {
      "name": "TdCompoundExpandType",
      "description": "",
      "props": [
        {
          "name": "columnIndex",
          "type": "number",
          "description": "The column index"
        },
        {
          "name": "expandId",
          "type": "string",
          "description": "Id prefix for expandable cells *"
        },
        {
          "name": "isExpanded",
          "type": "boolean",
          "description": "determines if the corresponding expansion row is open",
          "required": true
        },
        {
          "name": "onToggle",
          "type": "OnExpand",
          "description": "Callback on toggling of the expansion"
        },
        {
          "name": "rowIndex",
          "type": "number",
          "description": "The row index"
        }
      ]
    },
    {
      "name": "TdFavoritesType",
      "description": "",
      "props": [
        {
          "name": "isFavorited",
          "type": "boolean",
          "description": "Whether the corresponding row is favorited",
          "required": true
        },
        {
          "name": "onFavorite",
          "type": "OnFavorite",
          "description": "Callback on clicking the favorites button"
        },
        {
          "name": "props",
          "type": "any",
          "description": "Additional props forwarded to the FavoritesCell"
        },
        {
          "name": "rowIndex",
          "type": "number",
          "description": "The row index"
        }
      ]
    },
    {
      "name": "TdDraggableType",
      "description": "",
      "props": [
        {
          "name": "id",
          "type": "string",
          "description": "Id of the draggable row",
          "required": true
        }
      ]
    },
    {
      "name": "ThInfoType",
      "description": "",
      "props": [
        {
          "name": "ariaLabel",
          "type": "string",
          "description": null
        },
        {
          "name": "className",
          "type": "string",
          "description": null
        },
        {
          "name": "popover",
          "type": "React.ReactNode",
          "description": null
        },
        {
          "name": "popoverProps",
          "type": "Omit<PopoverProps, 'bodyContent'>",
          "description": null
        },
        {
          "name": "tooltip",
          "type": "React.ReactNode",
          "description": null
        },
        {
          "name": "tooltipProps",
          "type": "Omit<TooltipProps, 'content'>",
          "description": null
        }
      ]
    },
    {
      "name": "TdExpandType",
      "description": "",
      "props": [
        {
          "name": "columnIndex",
          "type": "number",
          "description": "The column index"
        },
        {
          "name": "expandId",
          "type": "string",
          "description": "Id prefix for expandable rows *"
        },
        {
          "name": "isExpanded",
          "type": "boolean",
          "description": "Flag indicating the child row associated with this cell is expanded",
          "required": true
        },
        {
          "name": "onToggle",
          "type": "OnCollapse",
          "description": "On toggling the expansion"
        },
        {
          "name": "rowIndex",
          "type": "number",
          "description": "The row index",
          "required": true
        }
      ]
    },
    {
      "name": "ThExpandType",
      "description": "",
      "props": [
        {
          "name": "areAllExpanded",
          "type": "boolean",
          "description": "Whether all are expanded",
          "required": true
        },
        {
          "name": "collapseAllAriaLabel",
          "type": "''",
          "description": "Alternative aria label",
          "required": true
        },
        {
          "name": "onToggle",
          "type": "OnCollapse",
          "description": "On toggling the expansion"
        }
      ]
    },
    {
      "name": "EditableSelectInputCell",
      "description": "",
      "props": [
        {
          "name": "cellIndex",
          "type": "number",
          "description": "Cell index of this select input cell",
          "required": true
        },
        {
          "name": "clearSelection",
          "type": "(rowIndex: number, cellIndex: number, event?: React.MouseEvent) => void",
          "description": "Event handler which fires when the user clears the selections"
        },
        {
          "name": "isDisabled",
          "type": "boolean",
          "description": "Flag indicating the select input is disabled"
        },
        {
          "name": "isOpen",
          "type": "boolean",
          "description": "Flag indicating the select menu is open",
          "defaultValue": "false"
        },
        {
          "name": "onSelect",
          "type": "(\n  newValue: string | SelectOptionObject,\n  event: React.MouseEvent | React.ChangeEvent,\n  rowIndex: number,\n  cellIndex: number,\n  isPlaceholder?: boolean\n) => void",
          "description": "Event handler which fires when user selects an option in this cell",
          "defaultValue": "() => {}"
        },
        {
          "name": "onToggle",
          "type": "(isExpanded: boolean) => void",
          "description": "Event handler which fires when the select toggle is toggled",
          "defaultValue": "() => {}"
        },
        {
          "name": "options",
          "type": "React.ReactElement[]",
          "description": "Options to display in the expandable select menu",
          "defaultValue": "[]"
        },
        {
          "name": "props",
          "type": "EditableSelectInputProps",
          "description": "Props to build the select component",
          "required": true
        },
        {
          "name": "rowIndex",
          "type": "number",
          "description": "Row index of this select input cell",
          "required": true
        },
        {
          "name": "selections",
          "type": "string | SelectOptionObject | (string | SelectOptionObject)[]",
          "description": "Current selected options to display as the read only value of the table cell",
          "defaultValue": "['']"
        }
      ]
    },
    {
      "name": "EditableTextCell",
      "description": "",
      "props": [
        {
          "name": "cellIndex",
          "type": "number",
          "description": "Cell index of this text cell",
          "required": true
        },
        {
          "name": "handleTextInputChange",
          "type": "(\n  newValue: string,\n  event: React.FormEvent<HTMLInputElement>,\n  rowIndex: number,\n  cellIndex: number\n) => void",
          "description": "Event handler which fires when user changes the text in this cell",
          "required": true
        },
        {
          "name": "inputAriaLabel",
          "type": "string",
          "description": "accessible label of the text input",
          "required": true
        },
        {
          "name": "isDisabled",
          "type": "boolean",
          "description": "flag indicating if the text input is disabled",
          "defaultValue": "false"
        },
        {
          "name": "props",
          "type": "EditableTextCellProps",
          "description": "Props to build the input",
          "required": true
        },
        {
          "name": "rowIndex",
          "type": "number",
          "description": "Row index of this text cell",
          "required": true
        },
        {
          "name": "value",
          "type": "string",
          "description": "The current value of the text input",
          "required": true
        }
      ]
    },
    {
      "name": "EditableSelectInputProps",
      "description": "",
      "props": [
        {
          "name": "[key: string]",
          "type": "any",
          "description": "arbitrary data to pass to the internal select component in the editable select input cell",
          "required": true
        },
        {
          "name": "editableSelectProps",
          "type": "SelectProps",
          "description": "Props to be passed down to the Select component"
        },
        {
          "name": "isSelectOpen",
          "type": "boolean",
          "description": "Flag controlling isOpen state of select",
          "required": true
        },
        {
          "name": "name",
          "type": "string",
          "description": "Name of the select input",
          "required": true
        },
        {
          "name": "options",
          "type": "React.ReactElement[]",
          "description": "Array of react elements to display in the select menu",
          "required": true
        },
        {
          "name": "selected",
          "type": "string | SelectOptionObject | (string | SelectOptionObject)[]",
          "description": "String or SelectOptionObject, or array of strings or SelectOptionObjects representing current selections",
          "required": true
        },
        {
          "name": "value",
          "type": "string | string[]",
          "description": "Value to display in the cell",
          "required": true
        }
      ]
    },
    {
      "name": "EditableTextCellProps",
      "description": "",
      "props": [
        {
          "name": "[key: string]",
          "type": "any",
          "description": "arbitrary data to pass to the internal text input in the editable text cell",
          "required": true
        },
        {
          "name": "name",
          "type": "string",
          "description": "Name of the input",
          "required": true
        },
        {
          "name": "value",
          "type": "string",
          "description": "Value to display in the cell",
          "required": true
        }
      ]
    },
    {
      "name": "ThSortType",
      "description": "",
      "props": [
        {
          "name": "columnIndex",
          "type": "number",
          "description": "The column index",
          "required": true
        },
        {
          "name": "isFavorites",
          "type": "boolean",
          "description": "True to make this a favoritable sorting cell"
        },
        {
          "name": "onSort",
          "type": "OnSort",
          "description": "Wraps the content in a button and adds a sort icon - Click callback on the sortable cell"
        },
        {
          "name": "sortBy",
          "type": "ISortBy",
          "description": "Provide the currently active column's index and direction",
          "required": true
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
    },
    {
      "name": "InnerScrollContainer",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the inner scroll container"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the container"
        }
      ]
    },
    {
      "name": "OuterScrollContainer",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the outer scroll container"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the container"
        }
      ]
    }
  ],
  "cssPrefix": [
    "pf-c-table"
  ],
  "examples": [
    "Composable: Basic",
    "Composable: Custom row wrapper, header tooltips & popovers",
    "Composable: Sortable & wrapping headers",
    "Composable: Sortable - custom control",
    "Composable: Selectable with checkbox",
    "Composable: Selectable radio input",
    "Composable: Row click handler, hoverable & selected rows",
    "Composable: Actions",
    "Composable: Actions Overflow",
    "Composable: Expandable",
    "Composable: Compound expandable",
    "Composable: Cell width, breakpoint modifiers",
    "Composable: Controlling text",
    "Composable: Modifiers with table text",
    "Composable: Empty state",
    "Composable: Favoritable (implemented with sortable)",
    "Composable: Tree table",
    "Composable: Draggable row table",
    "Composable: Sticky column",
    "Composable: Multiple sticky columns",
    "Composable: Sticky columns and header",
    "Composable: Nested column headers",
    "Composable: Nested column headers and expandable rows",
    "Composable: Expandable with nested table",
    "Composable: Nested sticky header",
    "Composable: Striped",
    "Composable: Striped expandable",
    "Composable: Striped multiple tobdy",
    "Composable: Striped tr"
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
  BlueprintIcon,
  css,
  styles
};
pageData.examples = {
  'Composable: Basic': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ToggleGroup, ToggleGroupItem, ToggleGroupItemProps } from '@patternfly/react-core';\nimport { TableComposable, Caption, Thead, Tr, Th, Tbody, Td } from '@patternfly/react-table';\n\ninterface Repository {\n  name: string;\n  branches: string | null;\n  prs: string | null;\n  workspaces: string;\n  lastCommit: string;\n}\n\ntype ExampleType = 'default' | 'compact' | 'compactBorderless';\n\nexport const ComposableTableBasic: React.FunctionComponent = () => {\n  // In real usage, this data would come from some external source like an API via props.\n  const repositories: Repository[] = [\n    { name: 'one', branches: 'two', prs: 'three', workspaces: 'four', lastCommit: 'five' },\n    { name: 'one - 2', branches: null, prs: null, workspaces: 'four - 2', lastCommit: 'five - 2' },\n    { name: 'one - 3', branches: 'two - 3', prs: 'three - 3', workspaces: 'four - 3', lastCommit: 'five - 3' }\n  ];\n\n  const columnNames = {\n    name: 'Repositories',\n    branches: 'Branches',\n    prs: 'Pull requests',\n    workspaces: 'Workspaces',\n    lastCommit: 'Last commit'\n  };\n\n  // This state is just for the ToggleGroup in this example and isn't necessary for TableComposable usage.\n  const [exampleChoice, setExampleChoice] = React.useState<ExampleType>('default');\n  const onExampleTypeChange: ToggleGroupItemProps['onChange'] = (_isSelected, event) => {\n    const id = event.currentTarget.id;\n    setExampleChoice(id as ExampleType);\n  };\n\n  return (\n    <React.Fragment>\n      <ToggleGroup aria-label=\"Default with single selectable\">\n        <ToggleGroupItem\n          text=\"Default\"\n          buttonId=\"default\"\n          isSelected={exampleChoice === 'default'}\n          onChange={onExampleTypeChange}\n        />\n        <ToggleGroupItem\n          text=\"Compact\"\n          buttonId=\"compact\"\n          isSelected={exampleChoice === 'compact'}\n          onChange={onExampleTypeChange}\n        />\n        <ToggleGroupItem\n          text=\"Compact borderless\"\n          buttonId=\"compactBorderless\"\n          isSelected={exampleChoice === 'compactBorderless'}\n          onChange={onExampleTypeChange}\n        />\n      </ToggleGroup>\n      <TableComposable\n        aria-label=\"Simple table\"\n        variant={exampleChoice !== 'default' ? 'compact' : undefined}\n        borders={exampleChoice !== 'compactBorderless'}\n      >\n        <Caption>Simple table using composable components</Caption>\n        <Thead>\n          <Tr>\n            <Th>{columnNames.name}</Th>\n            <Th>{columnNames.branches}</Th>\n            <Th>{columnNames.prs}</Th>\n            <Th>{columnNames.workspaces}</Th>\n            <Th>{columnNames.lastCommit}</Th>\n          </Tr>\n        </Thead>\n        <Tbody>\n          {repositories.map(repo => (\n            <Tr key={repo.name}>\n              <Td dataLabel={columnNames.name}>{repo.name}</Td>\n              <Td dataLabel={columnNames.branches}>{repo.branches}</Td>\n              <Td dataLabel={columnNames.prs}>{repo.prs}</Td>\n              <Td dataLabel={columnNames.workspaces}>{repo.workspaces}</Td>\n              <Td dataLabel={columnNames.lastCommit}>{repo.lastCommit}</Td>\n            </Tr>\n          ))}\n        </Tbody>\n      </TableComposable>\n    </React.Fragment>\n  );\n};\n","title":"Composable: Basic","lang":"ts"}}>
      
    </Example>,
  'Composable: Custom row wrapper, header tooltips & popovers': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { TableComposable, Thead, Tr, Th, Tbody, Td } from '@patternfly/react-table';\n\ninterface Repository {\n  name: string;\n  branches: string | null;\n  prs: string | null;\n  workspaces: string;\n  lastCommit: string;\n}\n\nexport const ComposableTableMisc: React.FunctionComponent = () => {\n  // In real usage, this data would come from some external source like an API via props.\n  const repositories: Repository[] = [\n    { name: 'one', branches: 'two', prs: 'three', workspaces: 'four', lastCommit: 'five' },\n    { name: 'one - 2', branches: null, prs: null, workspaces: 'four - 2', lastCommit: 'five - 2' },\n    { name: 'one - 3', branches: 'two - 3', prs: 'three - 3', workspaces: 'four - 3', lastCommit: 'five - 3' }\n  ];\n\n  const columnNames = {\n    name: 'Repositories',\n    branches: 'Branches',\n    prs: 'Pull requests',\n    workspaces: 'Workspaces',\n    lastCommit: 'Last commit'\n  };\n\n  return (\n    <TableComposable aria-label=\"Misc table\">\n      <Thead noWrap>\n        <Tr>\n          <Th\n            info={{\n              tooltip: 'More information about repositories',\n              className: 'repositories-info-tip',\n              tooltipProps: {\n                isContentLeftAligned: true\n              }\n            }}\n          >\n            {columnNames.name}\n          </Th>\n          <Th>{columnNames.branches}</Th>\n          <Th\n            info={{\n              popover: (\n                <div>\n                  More <strong>information</strong> on pull requests\n                </div>\n              ),\n              ariaLabel: 'More information on pull requests',\n              popoverProps: {\n                headerContent: columnNames.prs,\n                footerContent: <a href=\"#\">Click here for even more info</a>\n              }\n            }}\n          >\n            {columnNames.prs}\n          </Th>\n          <Th>{columnNames.workspaces}</Th>\n          <Th textCenter>{columnNames.lastCommit}</Th>\n        </Tr>\n      </Thead>\n      <Tbody>\n        {repositories.map((repo, rowIndex) => {\n          const isOddRow = (rowIndex + 1) % 2;\n          const customStyle = {\n            borderLeft: '3px solid var(--pf-global--primary-color--100)'\n          };\n          // Some arbitrary logic to demonstrate that cell styles can be based on anything\n          const nameColSpan = repo.branches === null && repo.prs === null ? 3 : 1;\n          const lastCommitTextCenter = rowIndex !== 2;\n          return (\n            <Tr\n              key={repo.name}\n              className={isOddRow ? 'odd-row-class' : 'even-row-class'}\n              style={isOddRow ? customStyle : {}}\n            >\n              <Td dataLabel={columnNames.name} colSpan={nameColSpan}>\n                {repo.name}\n              </Td>\n              <Td dataLabel={columnNames.branches}>{repo.branches}</Td>\n              <Td dataLabel={columnNames.prs}></Td>\n              <Td dataLabel={columnNames.workspaces}></Td>\n              <Td dataLabel={columnNames.lastCommit} textCenter={lastCommitTextCenter}></Td>\n            </Tr>\n          );\n        })}\n      </Tbody>\n    </TableComposable>\n  );\n};\n","title":"Composable: Custom row wrapper, header tooltips & popovers","lang":"ts"}}>
      
      <ul {...{"className":"ws-ul"}}>
        

        
        <li {...{"className":"ws-li"}}>
          {`If you add the `}
          
          <code {...{"className":"ws-code"}}>
            {`noWrap`}
          </code>
          {` prop to `}
          
          <code {...{"className":"ws-code"}}>
            {`Thead`}
          </code>
          {`, it won't wrap it if there is no space`}
        </li>
        

        
        <li {...{"className":"ws-li"}}>
          {`You can add the `}
          
          <code {...{"className":"ws-code"}}>
            {`textCenter`}
          </code>
          {` prop to `}
          
          <code {...{"className":"ws-code"}}>
            {`Th`}
          </code>
          {` or `}
          
          <code {...{"className":"ws-code"}}>
            {`Td`}
          </code>
          {` to center the contents`}
        </li>
        

        
        <li {...{"className":"ws-li"}}>
          {`You can pass `}
          
          <code {...{"className":"ws-code"}}>
            {`className`}
          </code>
          {`, `}
          
          <code {...{"className":"ws-code"}}>
            {`style`}
          </code>
          {` and more to `}
          
          <code {...{"className":"ws-code"}}>
            {`Tr`}
          </code>
        </li>
        

      </ul>
      
      <p {...{"className":"ws-p"}}>
        {`To add a header tooltip or popover to `}
        
        <code {...{"className":"ws-code"}}>
          {`Th`}
        </code>
        {`, pass a `}
        
        <code {...{"className":"ws-code"}}>
          {`ThInfoType`}
        </code>
        {` object via the `}
        
        <code {...{"className":"ws-code"}}>
          {`info`}
        </code>
        {` prop.`}
      </p>
    </Example>,
  'Composable: Sortable & wrapping headers': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { TableComposable, Thead, Tr, Th, Tbody, Td, ThProps } from '@patternfly/react-table';\n\ninterface Repository {\n  name: string;\n  branches: string;\n  prs: string;\n  workspaces: string;\n  lastCommit: string;\n}\n\nexport const ComposableTableSortable: React.FunctionComponent = () => {\n  // In real usage, this data would come from some external source like an API via props.\n  const repositories: Repository[] = [\n    { name: 'one', branches: 'two', prs: 'a', workspaces: 'four', lastCommit: 'five' },\n    { name: 'a', branches: 'two', prs: 'k', workspaces: 'four', lastCommit: 'five' },\n    { name: 'p', branches: 'two', prs: 'b', workspaces: 'four', lastCommit: 'five' }\n  ];\n\n  const columnNames = {\n    name: 'Repositories table header that goes on for a long time.',\n    branches: 'Branches table header that goes on for a long time.',\n    prs: 'Pull requests table header that goes on for a long time.',\n    workspaces: 'Workspaces table header that goes on for a long time.',\n    lastCommit: 'Last commit table header that goes on for a long time.'\n  };\n\n  // Index of the currently sorted column\n  // Note: if you intend to make columns reorderable, you may instead want to use a non-numeric key\n  // as the identifier of the sorted column. See the \"Compound expandable\" example.\n  const [activeSortIndex, setActiveSortIndex] = React.useState<number | null>(null);\n\n  // Sort direction of the currently sorted column\n  const [activeSortDirection, setActiveSortDirection] = React.useState<'asc' | 'desc' | null>(null);\n\n  // Since OnSort specifies sorted columns by index, we need sortable values for our object by column index.\n  // This example is trivial since our data objects just contain strings, but if the data was more complex\n  // this would be a place to return simplified string or number versions of each column to sort by.\n  const getSortableRowValues = (repo: Repository): (string | number)[] => {\n    const { name, branches, prs, workspaces, lastCommit } = repo;\n    return [name, branches, prs, workspaces, lastCommit];\n  };\n\n  // Note that we perform the sort as part of the component's render logic and not in onSort.\n  // We shouldn't store the list of data in state because we don't want to have to sync that with props.\n  let sortedRepositories = repositories;\n  if (activeSortIndex !== null) {\n    sortedRepositories = repositories.sort((a, b) => {\n      const aValue = getSortableRowValues(a)[activeSortIndex];\n      const bValue = getSortableRowValues(b)[activeSortIndex];\n      if (typeof aValue === 'number') {\n        // Numeric sort\n        if (activeSortDirection === 'asc') {\n          return (aValue as number) - (bValue as number);\n        }\n        return (bValue as number) - (aValue as number);\n      } else {\n        // String sort\n        if (activeSortDirection === 'asc') {\n          return (aValue as string).localeCompare(bValue as string);\n        }\n        return (bValue as string).localeCompare(aValue as string);\n      }\n    });\n  }\n\n  const getSortParams = (columnIndex: number): ThProps['sort'] => ({\n    sortBy: {\n      index: activeSortIndex,\n      direction: activeSortDirection,\n      defaultDirection: 'asc' // starting sort direction when first sorting a column. Defaults to 'asc'\n    },\n    onSort: (_event, index, direction) => {\n      setActiveSortIndex(index);\n      setActiveSortDirection(direction);\n    },\n    columnIndex\n  });\n\n  // In this example, we wrap all but the 1st column and make the 1st and 3rd columns sortable just to demonstrate.\n  return (\n    <TableComposable aria-label=\"Sortable table\">\n      <Thead>\n        <Tr>\n          <Th sort={getSortParams(0)}>{columnNames.name}</Th>\n          <Th modifier=\"wrap\">{columnNames.branches}</Th>\n          <Th modifier=\"wrap\" sort={getSortParams(2)} info={{ tooltip: 'More information ' }}>\n            {columnNames.prs}\n          </Th>\n          <Th modifier=\"wrap\">{columnNames.workspaces}</Th>\n          <Th modifier=\"wrap\">{columnNames.lastCommit}</Th>\n        </Tr>\n      </Thead>\n      <Tbody>\n        {sortedRepositories.map((repo, rowIndex) => (\n          <Tr key={rowIndex}>\n            <Td dataLabel={columnNames.name}>{repo.name}</Td>\n            <Td dataLabel={columnNames.branches}>{repo.branches}</Td>\n            <Td dataLabel={columnNames.prs}>{repo.prs}</Td>\n            <Td dataLabel={columnNames.workspaces}>{repo.workspaces}</Td>\n            <Td dataLabel={columnNames.lastCommit}>{repo.lastCommit}</Td>\n          </Tr>\n        ))}\n      </Tbody>\n    </TableComposable>\n  );\n};\n","title":"Composable: Sortable & wrapping headers","lang":"ts"}}>
      
      <p {...{"className":"ws-p"}}>
        {`To make a column sortable, pass a `}
        
        <code {...{"className":"ws-code"}}>
          {`ThSortType`}
        </code>
        {` object via the `}
        
        <code {...{"className":"ws-code"}}>
          {`sort`}
        </code>
        {` prop on a column's `}
        
        <code {...{"className":"ws-code"}}>
          {`Th`}
        </code>
        {`.`}
      </p>
      
      <p {...{"className":"ws-p"}}>
        
        <code {...{"className":"ws-code"}}>
          {`ThSortType`}
        </code>
        {` includes an `}
        
        <code {...{"className":"ws-code"}}>
          {`OnSort`}
        </code>
        {` event handler which has the following signature:`}
      </p>
      
      <Example {...{"code":"type OnSort = (\n  event: React.MouseEvent,\n  columnIndex: number,\n  sortByDirection: SortByDirection,\n  extraData: IExtraColumnData\n) => void;"}}>
        
      </Example>
      
      <p {...{"className":"ws-p"}}>
        {`The built in display for sorting is not fully responsive, as the column headers will be displayed per row when the screen size is small. To see a full page demo of a responsive sortable table, utilizing a toolbar item to control sorting for small screens, view the `}
        
        <code {...{"className":"ws-code"}}>
          {`Sortable - responsive`}
        </code>
        {` demo in the `}
        
        <code {...{"className":"ws-code"}}>
          {`React demos`}
        </code>
        {` tab.`}
      </p>
    </Example>,
  'Composable: Sortable - custom control': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { TableComposable, Thead, Tr, Th, Tbody, Td, ThProps } from '@patternfly/react-table';\nimport {\n  Toolbar,\n  ToolbarContent,\n  ToolbarItem,\n  OptionsMenu,\n  OptionsMenuItemGroup,\n  OptionsMenuItem,\n  OptionsMenuSeparator,\n  OptionsMenuToggle\n} from '@patternfly/react-core';\nimport SortAmountDownIcon from '@patternfly/react-icons/dist/esm/icons/sort-amount-down-icon';\n\ninterface Repository {\n  name: string;\n  branches: string;\n  prs: string;\n  workspaces: string;\n  lastCommit: string;\n}\n\nexport const ComposableTableSortableCustom: React.FunctionComponent = () => {\n  // In real usage, this data would come from some external source like an API via props.\n  const repositories: Repository[] = [\n    { name: 'one', branches: 'two', prs: 'a', workspaces: 'four', lastCommit: 'five' },\n    { name: 'a', branches: 'two', prs: 'k', workspaces: 'four', lastCommit: 'five' },\n    { name: 'p', branches: 'two', prs: 'b', workspaces: 'four', lastCommit: 'five' }\n  ];\n\n  const columnNames = {\n    name: 'Repositories',\n    branches: 'Branches',\n    prs: 'Pull requests',\n    workspaces: 'Workspaces',\n    lastCommit: 'Last commit'\n  };\n\n  // Index of the currently sorted column\n  // Note: if you intend to make columns reorderable, you may instead want to use a non-numeric key\n  // as the identifier of the sorted column. See the \"Compound expandable\" example.\n  const [activeSortIndex, setActiveSortIndex] = React.useState<number | null>(null);\n\n  // Sort direction of the currently sorted column\n  const [activeSortDirection, setActiveSortDirection] = React.useState<'asc' | 'desc' | null>(null);\n\n  // Sort dropdown expansion\n  const [isSortDropdownOpen, setIsSortDropdownOpen] = React.useState(false);\n\n  // Since OnSort specifies sorted columns by index, we need sortable values for our object by column index.\n  // This example is trivial since our data objects just contain strings, but if the data was more complex\n  // this would be a place to return simplified string or number versions of each column to sort by.\n  const getSortableRowValues = (repo: Repository): (string | number)[] => {\n    const { name, branches, prs, workspaces, lastCommit } = repo;\n    return [name, branches, prs, workspaces, lastCommit];\n  };\n\n  // Note that we perform the sort as part of the component's render logic and not in onSort.\n  // We shouldn't store the list of data in state because we don't want to have to sync that with props.\n  let sortedRepositories = repositories;\n  if (activeSortIndex !== null) {\n    sortedRepositories = repositories.sort((a, b) => {\n      const aValue = getSortableRowValues(a)[activeSortIndex];\n      const bValue = getSortableRowValues(b)[activeSortIndex];\n      if (typeof aValue === 'number') {\n        // Numeric sort\n        if (activeSortDirection === 'asc') {\n          return (aValue as number) - (bValue as number);\n        }\n        return (bValue as number) - (aValue as number);\n      } else {\n        // String sort\n        if (activeSortDirection === 'asc') {\n          return (aValue as string).localeCompare(bValue as string);\n        }\n        return (bValue as string).localeCompare(aValue as string);\n      }\n    });\n  }\n\n  const getSortParams = (columnIndex: number): ThProps['sort'] => ({\n    sortBy: {\n      index: activeSortIndex,\n      direction: activeSortDirection\n    },\n    onSort: (_event, index, direction) => {\n      setActiveSortIndex(index);\n      setActiveSortDirection(direction);\n    },\n    columnIndex\n  });\n\n  return (\n    <React.Fragment>\n      <Toolbar id=\"toolbar\">\n        <ToolbarContent>\n          <ToolbarItem>\n            <OptionsMenu\n              id=\"options-menu-multiple-options-example\"\n              menuItems={[\n                <OptionsMenuItemGroup key=\"first group\" aria-label=\"Sort column\">\n                  {Object.values(columnNames).map((columnName, columnIndex) => (\n                    <OptionsMenuItem\n                      key={columnName}\n                      isSelected={activeSortIndex === columnIndex}\n                      onSelect={() => {\n                        setActiveSortIndex(columnIndex);\n                        setActiveSortDirection(activeSortDirection !== null ? activeSortDirection : 'asc');\n                      }}\n                    >\n                      {columnName}\n                    </OptionsMenuItem>\n                  ))}\n                </OptionsMenuItemGroup>,\n                <OptionsMenuSeparator key=\"separator\" />,\n                <OptionsMenuItemGroup key=\"second group\" aria-label=\"Sort direction\">\n                  <OptionsMenuItem\n                    onSelect={() => setActiveSortDirection('asc')}\n                    isSelected={activeSortDirection === 'asc'}\n                    id=\"ascending\"\n                    key=\"ascending\"\n                  >\n                    Ascending\n                  </OptionsMenuItem>\n                  <OptionsMenuItem\n                    onSelect={() => setActiveSortDirection('desc')}\n                    isSelected={activeSortDirection === 'desc'}\n                    id=\"descending\"\n                    key=\"descending\"\n                  >\n                    Descending\n                  </OptionsMenuItem>\n                </OptionsMenuItemGroup>\n              ]}\n              isOpen={isSortDropdownOpen}\n              toggle={\n                <OptionsMenuToggle\n                  hideCaret\n                  onToggle={() => setIsSortDropdownOpen(!isSortDropdownOpen)}\n                  toggleTemplate={<SortAmountDownIcon />}\n                />\n              }\n              isPlain\n              isGrouped\n            />\n          </ToolbarItem>\n        </ToolbarContent>\n      </Toolbar>\n      <TableComposable aria-label=\"Sortable table custom toolbar\">\n        <Thead>\n          <Tr>\n            <Th sort={getSortParams(0)}>{columnNames.name}</Th>\n            <Th sort={getSortParams(1)}>{columnNames.branches}</Th>\n            <Th sort={getSortParams(2)} info={{ tooltip: 'More information ' }}>\n              {columnNames.prs}\n            </Th>\n            <Th sort={getSortParams(3)}>{columnNames.workspaces}</Th>\n            <Th sort={getSortParams(4)}>{columnNames.lastCommit}</Th>\n          </Tr>\n        </Thead>\n        <Tbody>\n          {sortedRepositories.map((repo, rowIndex) => (\n            <Tr key={rowIndex}>\n              <Td dataLabel={columnNames.name}>{repo.name}</Td>\n              <Td dataLabel={columnNames.branches}>{repo.branches}</Td>\n              <Td dataLabel={columnNames.prs}>{repo.prs}</Td>\n              <Td dataLabel={columnNames.workspaces}>{repo.workspaces}</Td>\n              <Td dataLabel={columnNames.lastCommit}>{repo.lastCommit}</Td>\n            </Tr>\n          ))}\n        </Tbody>\n      </TableComposable>\n    </React.Fragment>\n  );\n};\n","title":"Composable: Sortable - custom control","lang":"ts"}}>
      
      <p {...{"className":"ws-p"}}>
        {`Sorting a table may also be controlled manually with a toolbar control. To see a full page demo of a responsive table, view the `}
        
        <code {...{"className":"ws-code"}}>
          {`Sortable - responsive`}
        </code>
        {` demo in the `}
        
        <code {...{"className":"ws-code"}}>
          {`React demos`}
        </code>
        {` tab.`}
      </p>
    </Example>,
  'Composable: Selectable with checkbox': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { TableComposable, Thead, Tr, Th, Tbody, Td } from '@patternfly/react-table';\n\ninterface Repository {\n  name: string;\n  branches: string;\n  prs: string;\n  workspaces: string;\n  lastCommit: string;\n}\n\nexport const ComposableTableSelectable: React.FunctionComponent = () => {\n  // In real usage, this data would come from some external source like an API via props.\n  const repositories: Repository[] = [\n    { name: 'one', branches: 'two', prs: 'a', workspaces: 'four', lastCommit: 'five' },\n    { name: 'a', branches: 'two', prs: 'k', workspaces: 'four', lastCommit: 'five' },\n    { name: 'b', branches: 'two', prs: 'k', workspaces: 'four', lastCommit: 'five' },\n    { name: 'c', branches: 'two', prs: 'k', workspaces: 'four', lastCommit: 'five' },\n    { name: 'd', branches: 'two', prs: 'k', workspaces: 'four', lastCommit: 'five' },\n    { name: 'e', branches: 'two', prs: 'b', workspaces: 'four', lastCommit: 'five' }\n  ];\n\n  const columnNames = {\n    name: 'Repositories',\n    branches: 'Branches',\n    prs: 'Pull requests',\n    workspaces: 'Workspaces',\n    lastCommit: 'Last commit'\n  };\n\n  const isRepoSelectable = (repo: Repository) => repo.name !== 'a'; // Arbitrary logic for this example\n  const selectableRepos = repositories.filter(isRepoSelectable);\n\n  // In this example, selected rows are tracked by the repo names from each row. This could be any unique identifier.\n  // This is to prevent state from being based on row order index in case we later add sorting.\n  const [selectedRepoNames, setSelectedRepoNames] = React.useState<string[]>([]);\n  const setRepoSelected = (repo: Repository, isSelecting = true) =>\n    setSelectedRepoNames(prevSelected => {\n      const otherSelectedRepoNames = prevSelected.filter(r => r !== repo.name);\n      return isSelecting && isRepoSelectable(repo) ? [...otherSelectedRepoNames, repo.name] : otherSelectedRepoNames;\n    });\n  const selectAllRepos = (isSelecting = true) =>\n    setSelectedRepoNames(isSelecting ? selectableRepos.map(r => r.name) : []);\n  const areAllReposSelected = selectedRepoNames.length === selectableRepos.length;\n  const isRepoSelected = (repo: Repository) => selectedRepoNames.includes(repo.name);\n\n  // To allow shift+click to select/deselect multiple rows\n  const [recentSelectedRowIndex, setRecentSelectedRowIndex] = React.useState<number | null>(null);\n  const [shifting, setShifting] = React.useState(false);\n\n  const onSelectRepo = (repo: Repository, rowIndex: number, isSelecting: boolean) => {\n    // If the user is shift + selecting the checkboxes, then all intermediate checkboxes should be selected\n    if (shifting && recentSelectedRowIndex !== null) {\n      const numberSelected = rowIndex - recentSelectedRowIndex;\n      const intermediateIndexes =\n        numberSelected > 0\n          ? Array.from(new Array(numberSelected + 1), (_x, i) => i + recentSelectedRowIndex)\n          : Array.from(new Array(Math.abs(numberSelected) + 1), (_x, i) => i + rowIndex);\n      intermediateIndexes.forEach(index => setRepoSelected(repositories[index], isSelecting));\n    } else {\n      setRepoSelected(repo, isSelecting);\n    }\n    setRecentSelectedRowIndex(rowIndex);\n  };\n\n  React.useEffect(() => {\n    const onKeyDown = (e: KeyboardEvent) => {\n      if (e.key === 'Shift') {\n        setShifting(true);\n      }\n    };\n    const onKeyUp = (e: KeyboardEvent) => {\n      if (e.key === 'Shift') {\n        setShifting(false);\n      }\n    };\n\n    document.addEventListener('keydown', onKeyDown);\n    document.addEventListener('keyup', onKeyUp);\n\n    return () => {\n      document.removeEventListener('keydown', onKeyDown);\n      document.removeEventListener('keyup', onKeyUp);\n    };\n  }, []);\n\n  return (\n    <TableComposable aria-label=\"Selectable table\">\n      <Thead>\n        <Tr>\n          <Th\n            select={{\n              onSelect: (_event, isSelecting) => selectAllRepos(isSelecting),\n              isSelected: areAllReposSelected\n            }}\n          />\n          <Th>{columnNames.name}</Th>\n          <Th>{columnNames.branches}</Th>\n          <Th>{columnNames.prs}</Th>\n          <Th>{columnNames.workspaces}</Th>\n          <Th>{columnNames.lastCommit}</Th>\n        </Tr>\n      </Thead>\n      <Tbody>\n        {repositories.map((repo, rowIndex) => (\n          <Tr key={repo.name}>\n            <Td\n              select={{\n                rowIndex,\n                onSelect: (_event, isSelecting) => onSelectRepo(repo, rowIndex, isSelecting),\n                isSelected: isRepoSelected(repo),\n                disable: !isRepoSelectable(repo)\n              }}\n            />\n            <Td dataLabel={columnNames.name}>{repo.name}</Td>\n            <Td dataLabel={columnNames.branches}>{repo.branches}</Td>\n            <Td dataLabel={columnNames.prs}>{repo.prs}</Td>\n            <Td dataLabel={columnNames.workspaces}>{repo.workspaces}</Td>\n            <Td dataLabel={columnNames.lastCommit}>{repo.lastCommit}</Td>\n          </Tr>\n        ))}\n      </Tbody>\n    </TableComposable>\n  );\n};\n","title":"Composable: Selectable with checkbox","lang":"ts"}}>
      
      <p {...{"className":"ws-p"}}>
        {`To make a row selectable, the table needs a selection column.
The selection column is just another column, but with selection specific props added.
We add it as the first header cell and also as the first body cell for each row.`}
      </p>
      
      <p {...{"className":"ws-p"}}>
        {`To make a column sortable, pass a `}
        
        <code {...{"className":"ws-code"}}>
          {`ThSelectType`}
        </code>
        {` object via the `}
        
        <code {...{"className":"ws-code"}}>
          {`select`}
        </code>
        {` prop on a column's `}
        
        <code {...{"className":"ws-code"}}>
          {`Th`}
        </code>
        {`.`}
      </p>
      
      <p {...{"className":"ws-p"}}>
        {`To make a row sortable, pass a `}
        
        <code {...{"className":"ws-code"}}>
          {`TdSelectType`}
        </code>
        {` object via the `}
        
        <code {...{"className":"ws-code"}}>
          {`select`}
        </code>
        {` prop on each rows's first `}
        
        <code {...{"className":"ws-code"}}>
          {`Td`}
        </code>
        {`.`}
      </p>
      
      <p {...{"className":"ws-p"}}>
        {`Both the `}
        
        <code {...{"className":"ws-code"}}>
          {`TdSelectType`}
        </code>
        {` and the `}
        
        <code {...{"className":"ws-code"}}>
          {`ThSelectType`}
        </code>
        {` expect an `}
        
        <code {...{"className":"ws-code"}}>
          {`OnSelect`}
        </code>
        {` event handler with the following signature:`}
      </p>
      
      <p {...{"className":"ws-p"}}>
        
        <code {...{"className":"ws-code"}}>
          {`OnSelect:`}
        </code>
      </p>
      
      <Example {...{"code":"type OnSelect = (\n  event: React.FormEvent<HTMLInputElement>,\n  isSelected: boolean,\n  rowIndex: number,\n  rowData: IRowData,\n  extraData: IExtraData\n) => void;"}}>
        
      </Example>
      
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
  'Composable: Selectable radio input': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { TableComposable, Thead, Tr, Th, Tbody, Td } from '@patternfly/react-table';\n\ninterface Repository {\n  name: string;\n  branches: string;\n  prs: string;\n  workspaces: string;\n  lastCommit: string;\n}\n\nexport const ComposableTableSelectableRadio: React.FunctionComponent = () => {\n  // In real usage, this data would come from some external source like an API via props.\n  const repositories: Repository[] = [\n    { name: 'one', branches: 'two', prs: 'a', workspaces: 'four', lastCommit: 'five' },\n    { name: 'a', branches: 'two', prs: 'k', workspaces: 'four', lastCommit: 'five' },\n    { name: 'p', branches: 'two', prs: 'b', workspaces: 'four', lastCommit: 'five' }\n  ];\n\n  const columnNames = {\n    name: 'Repositories',\n    branches: 'Branches',\n    prs: 'Pull requests',\n    workspaces: 'Workspaces',\n    lastCommit: 'Last commit'\n  };\n\n  const isRepoSelectable = (repo: Repository) => repo.name !== 'a'; // Arbitrary logic for this example\n\n  // In this example, selected rows are tracked by the repo names from each row. This could be any unique identifier.\n  // This is to prevent state from being based on row order index in case we later add sorting.\n  const [selectedRepoName, setSelectedRepoName] = React.useState<string | null>(null);\n\n  return (\n    <TableComposable aria-label=\"Selectable table\">\n      <Thead>\n        <Tr>\n          <Th />\n          <Th>{columnNames.name}</Th>\n          <Th>{columnNames.branches}</Th>\n          <Th>{columnNames.prs}</Th>\n          <Th>{columnNames.workspaces}</Th>\n          <Th>{columnNames.lastCommit}</Th>\n        </Tr>\n      </Thead>\n      <Tbody>\n        {repositories.map((repo, rowIndex) => (\n          <Tr key={repo.name}>\n            <Td\n              select={{\n                rowIndex,\n                onSelect: () => setSelectedRepoName(repo.name),\n                isSelected: selectedRepoName === repo.name,\n                disable: !isRepoSelectable(repo),\n                variant: 'radio'\n              }}\n            />\n            <Td dataLabel={columnNames.name}>{repo.name}</Td>\n            <Td dataLabel={columnNames.branches}>{repo.branches}</Td>\n            <Td dataLabel={columnNames.prs}>{repo.prs}</Td>\n            <Td dataLabel={columnNames.workspaces}>{repo.workspaces}</Td>\n            <Td dataLabel={columnNames.lastCommit}>{repo.lastCommit}</Td>\n          </Tr>\n        ))}\n      </Tbody>\n    </TableComposable>\n  );\n};\n","title":"Composable: Selectable radio input","lang":"ts"}}>
      
      <p {...{"className":"ws-p"}}>
        {`Similarly to the selectable example above, the radio buttons use the first column. The first header cell is empty, and each body row's first cell has radio button props.`}
      </p>
    </Example>,
  'Composable: Row click handler, hoverable & selected rows': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { TableComposable, Thead, Tr, Th, Tbody, Td } from '@patternfly/react-table';\n\ninterface Repository {\n  name: string;\n  branches: string | null;\n  prs: string | null;\n  workspaces: string;\n  lastCommit: string;\n}\n\nexport const ComposableTableHoverable: React.FunctionComponent = () => {\n  // In real usage, this data would come from some external source like an API via props.\n  const repositories: Repository[] = [\n    { name: 'one', branches: 'two', prs: 'three', workspaces: 'four', lastCommit: 'five' },\n    { name: 'one - 2', branches: null, prs: null, workspaces: 'four - 2', lastCommit: 'five - 2' },\n    { name: 'one - 3', branches: 'two - 3', prs: 'three - 3', workspaces: 'four - 3', lastCommit: 'five - 3' }\n  ];\n\n  const columnNames = {\n    name: 'Repositories',\n    branches: 'Branches',\n    prs: 'Pull requests',\n    workspaces: 'Workspaces',\n    lastCommit: 'Last commit'\n  };\n\n  // In this example, selected rows are tracked by the repo names from each row. This could be any unique identifier.\n  // This is to prevent state from being based on row order index in case we later add sorting.\n  const [selectedRepoNames, setSelectedRepoNames] = React.useState<string[]>([]);\n  const setRepoSelected = (repo: Repository, isSelecting = true) =>\n    setSelectedRepoNames(prevSelected => {\n      const otherSelectedRepoNames = prevSelected.filter(r => r !== repo.name);\n      return isSelecting ? [...otherSelectedRepoNames, repo.name] : otherSelectedRepoNames;\n    });\n  const isRepoSelected = (repo: Repository) => selectedRepoNames.includes(repo.name);\n\n  return (\n    <TableComposable aria-label=\"Hoverable table\" hasSelectableRowCaption>\n      <Thead>\n        <Tr>\n          <Th>{columnNames.name}</Th>\n          <Th>{columnNames.branches}</Th>\n          <Th>{columnNames.prs}</Th>\n          <Th>{columnNames.workspaces}</Th>\n          <Th>{columnNames.lastCommit}</Th>\n        </Tr>\n      </Thead>\n      <Tbody>\n        {repositories.map(repo => (\n          <Tr\n            key={repo.name}\n            onRowClick={() => setRepoSelected(repo, !isRepoSelected(repo))}\n            isSelectable\n            isHoverable\n            isRowSelected={isRepoSelected(repo)}\n          >\n            <Td dataLabel={columnNames.name}>{repo.name}</Td>\n            <Td dataLabel={columnNames.branches}>{repo.branches}</Td>\n            <Td dataLabel={columnNames.prs}>{repo.prs}</Td>\n            <Td dataLabel={columnNames.workspaces}>{repo.workspaces}</Td>\n            <Td dataLabel={columnNames.lastCommit}>{repo.lastCommit}</Td>\n          </Tr>\n        ))}\n      </Tbody>\n    </TableComposable>\n  );\n};\n","title":"Composable: Row click handler, hoverable & selected rows","lang":"ts"}}>
      
      <p {...{"className":"ws-p"}}>
        {`This selectable rows feature is intended for use when a table is used to present a list of objects in a Primary-detail view.`}
      </p>
    </Example>,
  'Composable: Actions': props => 
    <Example {...pageData} {...props} {...{"code":"/* eslint-disable no-console */\nimport React from 'react';\nimport { Button, DropdownToggle, ToggleGroup, ToggleGroupItem, ToggleGroupItemProps } from '@patternfly/react-core';\nimport {\n  TableComposable,\n  TableText,\n  Thead,\n  Tr,\n  Th,\n  Tbody,\n  Td,\n  CustomActionsToggleProps,\n  ActionsColumn,\n  IAction\n} from '@patternfly/react-table';\n\ninterface Repository {\n  name: string;\n  branches: string;\n  prs: string;\n  workspaces: string;\n  lastCommit: string;\n  singleAction: string;\n}\n\ntype ExampleType = 'defaultToggle' | 'customToggle';\n\nexport const ComposableTableActions: React.FunctionComponent = () => {\n  // In real usage, this data would come from some external source like an API via props.\n  const repositories: Repository[] = [\n    { name: 'one', branches: 'two', prs: 'a', workspaces: 'four', lastCommit: 'five', singleAction: 'Start' },\n    { name: 'a', branches: 'two', prs: 'k', workspaces: 'four', lastCommit: 'five', singleAction: '' },\n    { name: 'p', branches: 'two', prs: 'b', workspaces: 'four', lastCommit: 'five', singleAction: 'Start' },\n    { name: '4', branches: '2', prs: 'b', workspaces: 'four', lastCommit: 'five', singleAction: 'Start' },\n    { name: '5', branches: '2', prs: 'b', workspaces: 'four', lastCommit: 'five', singleAction: 'Start' }\n  ];\n\n  const columnNames = {\n    name: 'Repositories',\n    branches: 'Branches',\n    prs: 'Pull requests',\n    workspaces: 'Workspaces',\n    lastCommit: 'Last commit',\n    singleAction: 'Single action'\n  };\n\n  // This state is just for the ToggleGroup in this example and isn't necessary for TableComposable usage.\n  const [exampleChoice, setExampleChoice] = React.useState<ExampleType>('defaultToggle');\n  const onExampleTypeChange: ToggleGroupItemProps['onChange'] = (_isSelected, event) => {\n    const id = event.currentTarget.id;\n    setExampleChoice(id as ExampleType);\n  };\n\n  const customActionsToggle = (props: CustomActionsToggleProps) => (\n    <DropdownToggle onToggle={props.onToggle} isDisabled={props.isDisabled}>\n      Actions\n    </DropdownToggle>\n  );\n\n  const defaultActions = (repo: Repository): IAction[] => [\n    {\n      title: 'Some action',\n      onClick: () => console.log(`clicked on Some action, on row ${repo.name}`)\n    },\n    {\n      title: <a href=\"https://www.patternfly.org\">Link action</a>\n    },\n    {\n      isSeparator: true\n    },\n    {\n      title: 'Third action',\n      onClick: () => console.log(`clicked on Third action, on row ${repo.name}`)\n    }\n  ];\n\n  const lastRowActions = (repo: Repository): IAction[] => [\n    {\n      title: 'Some action',\n      onClick: () => console.log(`clicked on Some action, on row ${repo.name}`)\n    },\n    {\n      title: <div>Another action</div>,\n      onClick: () => console.log(`clicked on Another action, on row ${repo.name}`)\n    },\n    {\n      isSeparator: true\n    },\n    {\n      title: 'Third action',\n      onClick: () => console.log(`clicked on Third action, on row ${repo.name}`)\n    }\n  ];\n\n  return (\n    <React.Fragment>\n      <ToggleGroup aria-label=\"Default uses kebab toggle\">\n        <ToggleGroupItem\n          text=\"Default actions toggle\"\n          buttonId=\"defaultToggle\"\n          isSelected={exampleChoice === 'defaultToggle'}\n          onChange={onExampleTypeChange}\n        />\n        <ToggleGroupItem\n          text=\"Custom actions toggle\"\n          buttonId=\"customToggle\"\n          isSelected={exampleChoice === 'customToggle'}\n          onChange={onExampleTypeChange}\n        />\n      </ToggleGroup>\n      <TableComposable aria-label=\"Actions table\">\n        <Thead>\n          <Tr>\n            <Th>{columnNames.name}</Th>\n            <Th>{columnNames.branches}</Th>\n            <Th>{columnNames.prs}</Th>\n            <Th>{columnNames.workspaces}</Th>\n            <Th>{columnNames.lastCommit}</Th>\n            <Td></Td>\n            <Td></Td>\n          </Tr>\n        </Thead>\n        <Tbody>\n          {repositories.map(repo => {\n            // Arbitrary logic to determine which rows get which actions in this example\n            let rowActions: IAction[] | null = defaultActions(repo);\n            if (repo.name === 'a') {\n              rowActions = null;\n            }\n            if (repo.name === '5') {\n              rowActions = lastRowActions(repo);\n            }\n            let singleActionButton = null;\n            if (repo.singleAction !== '') {\n              singleActionButton = (\n                <TableText>\n                  <Button variant=\"secondary\">{repo.singleAction}</Button>\n                </TableText>\n              );\n            }\n\n            return (\n              <Tr key={repo.name}>\n                <Td dataLabel={columnNames.name}>{repo.name}</Td>\n                <Td dataLabel={columnNames.branches}>{repo.branches}</Td>\n                <Td dataLabel={columnNames.prs}>{repo.prs}</Td>\n                <Td dataLabel={columnNames.workspaces}>{repo.workspaces}</Td>\n                <Td dataLabel={columnNames.lastCommit}>{repo.lastCommit}</Td>\n                <Td dataLabel={columnNames.singleAction} modifier=\"fitContent\">\n                  {singleActionButton}\n                </Td>\n                <Td isActionCell>\n                  {rowActions ? (\n                    <ActionsColumn\n                      items={rowActions}\n                      isDisabled={repo.name === '4'} // Also arbitrary for the example\n                      actionsToggle={exampleChoice === 'customToggle' ? customActionsToggle : undefined}\n                    />\n                  ) : null}\n                </Td>\n              </Tr>\n            );\n          })}\n        </Tbody>\n      </TableComposable>\n    </React.Fragment>\n  );\n};\n","title":"Composable: Actions","lang":"ts"}}>
      
      <p {...{"className":"ws-p"}}>
        {`This example demonstrates adding actions as the last column. The header's last cell is an empty cell, and each body row's last cell is an action cell.`}
      </p>
      
      <p {...{"className":"ws-p"}}>
        {`To make a cell an action cell, render an `}
        
        <code {...{"className":"ws-code"}}>
          {`ActionsColumn`}
        </code>
        {` component inside a row's last `}
        
        <code {...{"className":"ws-code"}}>
          {`Td`}
        </code>
        {` and pass an array of `}
        
        <code {...{"className":"ws-code"}}>
          {`IAction`}
        </code>
        {` objects via the `}
        
        <code {...{"className":"ws-code"}}>
          {`items`}
        </code>
        {` prop of `}
        
        <code {...{"className":"ws-code"}}>
          {`ActionsColumn`}
        </code>
        {`.`}
      </p>
    </Example>,
  'Composable: Actions Overflow': props => 
    <Example {...pageData} {...props} {...{"code":"/* eslint-disable no-console */\nimport React from 'react';\nimport {\n  Button,\n  OverflowMenu,\n  OverflowMenuControl,\n  OverflowMenuContent,\n  OverflowMenuGroup,\n  OverflowMenuItem,\n  OverflowMenuDropdownItem,\n  Dropdown,\n  KebabToggle\n} from '@patternfly/react-core';\nimport { TableComposable, Thead, Tr, Th, Tbody, Td } from '@patternfly/react-table';\n\ninterface Repository {\n  name: string;\n  branches: string;\n  prs: string;\n  workspaces: string;\n  lastCommit: string;\n  isMenuOpen: boolean;\n}\n\nexport const ComposableTableActions: React.FunctionComponent = () => {\n  // In real usage, this data would come from some external source like an API via props.\n  const repositories: Repository[] = [\n    { name: 'one', branches: 'two', prs: 'a', workspaces: 'four', lastCommit: 'five', isMenuOpen: false },\n    { name: 'a', branches: 'two', prs: 'k', workspaces: 'four', lastCommit: 'five', isMenuOpen: false },\n    { name: 'p', branches: 'two', prs: 'b', workspaces: 'four', lastCommit: 'five', isMenuOpen: false },\n    { name: '4', branches: '2', prs: 'b', workspaces: 'four', lastCommit: 'five', isMenuOpen: false },\n    { name: '5', branches: '2', prs: 'b', workspaces: 'four', lastCommit: 'five', isMenuOpen: false }\n  ];\n\n  const [repos, setRepos] = React.useState(repositories);\n\n  const columnNames = {\n    name: 'Repositories',\n    branches: 'Branches',\n    prs: 'Pull requests',\n    workspaces: 'Workspaces',\n    lastCommit: 'Last commit'\n  };\n\n  const dropdownItems = [\n    <OverflowMenuDropdownItem key=\"item1\" isShared>\n      Pimary\n    </OverflowMenuDropdownItem>,\n    <OverflowMenuDropdownItem key=\"item2\" isShared>\n      Secondary\n    </OverflowMenuDropdownItem>,\n    <OverflowMenuDropdownItem key=\"item3\" isShared>\n      Tertiary\n    </OverflowMenuDropdownItem>\n  ];\n\n  return (\n    <React.Fragment>\n      <TableComposable aria-label=\"Actions table\">\n        <Thead>\n          <Tr>\n            <Th>{columnNames.name}</Th>\n            <Th>{columnNames.branches}</Th>\n            <Th>{columnNames.prs}</Th>\n            <Th>{columnNames.workspaces}</Th>\n            <Th>{columnNames.lastCommit}</Th>\n            <Td></Td>\n          </Tr>\n        </Thead>\n        <Tbody>\n          {repos.map(repo => (\n            <Tr key={repo.name}>\n              <Td dataLabel={columnNames.name}>{repo.name}</Td>\n              <Td dataLabel={columnNames.branches}>{repo.branches}</Td>\n              <Td dataLabel={columnNames.prs}>{repo.prs}</Td>\n              <Td dataLabel={columnNames.workspaces}>{repo.workspaces}</Td>\n              <Td dataLabel={columnNames.lastCommit}>{repo.lastCommit}</Td>\n              <Td isActionCell>\n                <OverflowMenu breakpoint=\"lg\">\n                  <OverflowMenuContent>\n                    <OverflowMenuGroup groupType=\"button\">\n                      <OverflowMenuItem>\n                        <Button variant=\"primary\">Primary</Button>\n                      </OverflowMenuItem>\n                      <OverflowMenuItem>\n                        <Button variant=\"secondary\">Secondary</Button>\n                      </OverflowMenuItem>\n                      <OverflowMenuItem>\n                        <Button variant=\"tertiary\">Tertiary</Button>\n                      </OverflowMenuItem>\n                    </OverflowMenuGroup>\n                  </OverflowMenuContent>\n                  <OverflowMenuControl>\n                    <Dropdown\n                      position=\"right\"\n                      onSelect={() =>\n                        setRepos(repos.map(r => (r.name !== repo.name ? r : { ...r, isMenuOpen: !r.isMenuOpen })))\n                      }\n                      toggle={\n                        <KebabToggle\n                          onToggle={open =>\n                            setRepos(repos.map(r => (r.name !== repo.name ? r : { ...r, isMenuOpen: open })))\n                          }\n                        />\n                      }\n                      isOpen={repo.isMenuOpen}\n                      isPlain\n                      dropdownItems={dropdownItems}\n                    />\n                  </OverflowMenuControl>\n                </OverflowMenu>\n              </Td>\n            </Tr>\n          ))}\n        </Tbody>\n      </TableComposable>\n    </React.Fragment>\n  );\n};\n","title":"Composable: Actions Overflow","lang":"ts"}}>
      
      <p {...{"className":"ws-p"}}>
        {`Useing an `}
        
        <code {...{"className":"ws-code"}}>
          {`OverflowMenu`}
        </code>
        {` in the actions column, allowing the actions to condense into a dropdown if necessary for space.`}
      </p>
    </Example>,
  'Composable: Expandable': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { TableComposable, Thead, Tr, Th, Tbody, Td, ExpandableRowContent } from '@patternfly/react-table';\nimport { Checkbox } from '@patternfly/react-core';\n\ninterface Repository {\n  name: string;\n  branches: string;\n  prs: string;\n  workspaces: string;\n  lastCommit: string;\n  details?: {\n    detail1?: string;\n    detail2?: string;\n    detail3?: string;\n    detailFormat: 0 | 1 | 2 | 3;\n  };\n}\n\n// eslint-disable-next-line @typescript-eslint/no-unused-vars\nexport const ComposableTableExpandable: React.FunctionComponent = () => {\n  // In real usage, this data would come from some external source like an API via props.\n  const repositories: Repository[] = [\n    { name: 'one', branches: 'two', prs: 'a', workspaces: 'four', lastCommit: 'five' },\n    {\n      name: 'parent 1',\n      branches: 'two',\n      prs: 'k',\n      workspaces: 'four',\n      lastCommit: 'five',\n      // This `details` structure is just for this example. You can drive expanded content from any kind of data.\n      details: { detailFormat: 0, detail1: 'single cell' }\n    },\n    {\n      name: 'parent 2',\n      branches: 'two',\n      prs: 'b',\n      workspaces: 'four',\n      lastCommit: 'five',\n      details: {\n        detailFormat: 1,\n        detail1:\n          'Lorem ipsum sit dolor. Lorem ipsum sit dolor. Lorem ipsum sit dolor. Lorem ipsum sit dolor. Lorem ipsum sit dolor. Lorem ipsum sit dolor. Lorem ipsum sit dolor. Lorem ipsum sit dolor. Lorem ipsum sit dolor. Lorem ipsum sit dolor. Lorem ipsum sit dolor. Lorem ipsum sit dolor. Lorem ipsum sit dolor. Lorem ipsum sit dolor. Lorem ipsum sit dolor. Lorem ipsum sit dolor. Lorem ipsum sit dolor. Lorem ipsum sit dolor. Lorem ipsum sit dolor. Lorem ipsum sit dolor. Lorem ipsum sit dolor. Lorem ipsum sit dolor. Lorem ipsum sit dolor. Lorem ipsum sit dolor. Lorem ipsum sit dolor. Lorem ipsum sit dolor. Lorem ipsum sit dolor. Lorem ipsum sit dolor. Lorem ipsum sit dolor. Lorem ipsum sit dolor. Lorem ipsum sit dolor. Lorem ipsum sit dolor. Lorem ipsum sit dolor. '\n      }\n    },\n    {\n      name: 'parent 3',\n      branches: '2',\n      prs: 'b',\n      workspaces: 'four',\n      lastCommit: 'five',\n      details: { detailFormat: 2, detail1: 'single cell - noPadding' }\n    },\n    {\n      name: 'parent 4',\n      branches: '2',\n      prs: 'b',\n      workspaces: 'four',\n      lastCommit: 'five',\n      details: { detailFormat: 3, detail1: 'single cell - fullWidth & noPadding' }\n    },\n    {\n      name: 'parent 5',\n      branches: '2',\n      prs: 'b',\n      workspaces: 'four',\n      lastCommit: 'five',\n      details: {\n        detailFormat: 0,\n        detail1: \"spans 'Repositories and 'Branches'\",\n        detail2: \"spans 'Pull requests' and 'Workspaces', and 'Last commit'\"\n      }\n    },\n    {\n      name: 'parent 6',\n      branches: '2',\n      prs: 'b',\n      workspaces: 'four',\n      lastCommit: 'five',\n      details: {\n        detailFormat: 1,\n        detail1: \"fullWidth, spans the collapsible column and 'Repositories'\",\n        detail2: \"fullWidth, spans 'Branches' and 'Pull requests'\",\n        detail3: \"fullWidth, spans 'Workspaces' and 'Last commit'\"\n      }\n    }\n  ];\n\n  const columnNames = {\n    name: 'Repositories',\n    branches: 'Branches',\n    prs: 'Pull requests',\n    workspaces: 'Workspaces',\n    lastCommit: 'Last commit'\n  };\n\n  // In this example, expanded rows are tracked by the repo names from each row. This could be any unique identifier.\n  // This is to prevent state from being based on row order index in case we later add sorting.\n  // Note that this behavior is very similar to selection state.\n  const initialExpandedRepoNames = repositories.filter(repo => !!repo.details).map(repo => repo.name); // Default to all expanded\n  const [expandedRepoNames, setExpandedRepoNames] = React.useState<string[]>(initialExpandedRepoNames);\n  const setRepoExpanded = (repo: Repository, isExpanding = true) =>\n    setExpandedRepoNames(prevExpanded => {\n      const otherExpandedRepoNames = prevExpanded.filter(r => r !== repo.name);\n      return isExpanding ? [...otherExpandedRepoNames, repo.name] : otherExpandedRepoNames;\n    });\n  const isRepoExpanded = (repo: Repository) => expandedRepoNames.includes(repo.name);\n\n  const [isExampleCompact, setIsExampleCompact] = React.useState(true);\n\n  return (\n    <React.Fragment>\n      <Checkbox\n        label=\"Compact\"\n        isChecked={isExampleCompact}\n        onChange={checked => setIsExampleCompact(checked)}\n        aria-label=\"toggle compact variation\"\n        id=\"toggle-compact\"\n        name=\"toggle-compact\"\n      />\n      <TableComposable aria-label=\"Expandable table\" variant={isExampleCompact ? 'compact' : undefined}>\n        <Thead>\n          <Tr>\n            <Th />\n            <Th width={25}>{columnNames.name}</Th>\n            <Th width={10}>{columnNames.branches}</Th>\n            <Th width={15}>{columnNames.prs}</Th>\n            <Th width={30}>{columnNames.workspaces}</Th>\n            <Th width={10}>{columnNames.lastCommit}</Th>\n          </Tr>\n        </Thead>\n        {repositories.map((repo, rowIndex) => {\n          // Some arbitrary examples of how you could customize the child row based on your needs\n          let childIsFullWidth = false;\n          let childHasNoPadding = false;\n          let detail1Colspan = 1;\n          let detail2Colspan = 1;\n          let detail3Colspan = 1;\n          if (repo.details) {\n            const { detail1, detail2, detail3, detailFormat } = repo.details;\n            const numColumns = 5;\n            childIsFullWidth = [1, 3].includes(detailFormat);\n            childHasNoPadding = [2, 3].includes(detailFormat);\n            if (detail1 && !detail2 && !detail3) {\n              detail1Colspan = !childIsFullWidth ? numColumns : numColumns + 1; // Account for toggle column\n            } else if (detail1 && detail2 && !detail3) {\n              detail1Colspan = 2;\n              detail2Colspan = !childIsFullWidth ? 3 : 4;\n            } else if (detail1 && detail2 && detail3) {\n              detail1Colspan = 2;\n              detail2Colspan = 2;\n              detail3Colspan = !childIsFullWidth ? 1 : 2;\n            }\n          }\n          return (\n            <Tbody key={repo.name} isExpanded={isRepoExpanded(repo)}>\n              <Tr>\n                <Td\n                  expand={\n                    repo.details\n                      ? {\n                          rowIndex,\n                          isExpanded: isRepoExpanded(repo),\n                          onToggle: () => setRepoExpanded(repo, !isRepoExpanded(repo)),\n                          expandId: 'composable-expandable-example'\n                        }\n                      : undefined\n                  }\n                />\n                <Td dataLabel={columnNames.name}>{repo.name}</Td>\n                <Td dataLabel={columnNames.branches}>{repo.branches}</Td>\n                <Td dataLabel={columnNames.prs}>{repo.prs}</Td>\n                <Td dataLabel={columnNames.workspaces}>{repo.workspaces}</Td>\n                <Td dataLabel={columnNames.lastCommit}>{repo.lastCommit}</Td>\n              </Tr>\n              {repo.details ? (\n                <Tr isExpanded={isRepoExpanded(repo)}>\n                  {!childIsFullWidth ? <Td /> : null}\n                  {repo.details.detail1 ? (\n                    <Td dataLabel=\"Repo detail 1\" noPadding={childHasNoPadding} colSpan={detail1Colspan}>\n                      <ExpandableRowContent>{repo.details.detail1}</ExpandableRowContent>\n                    </Td>\n                  ) : null}\n                  {repo.details.detail2 ? (\n                    <Td dataLabel=\"Repo detail 2\" noPadding={childHasNoPadding} colSpan={detail2Colspan}>\n                      <ExpandableRowContent>{repo.details.detail2}</ExpandableRowContent>\n                    </Td>\n                  ) : null}\n                  {repo.details.detail3 ? (\n                    <Td dataLabel=\"Repo detail 3\" noPadding={childHasNoPadding} colSpan={detail3Colspan}>\n                      <ExpandableRowContent>{repo.details.detail3}</ExpandableRowContent>\n                    </Td>\n                  ) : null}\n                </Tr>\n              ) : null}\n            </Tbody>\n          );\n        })}\n      </TableComposable>\n    </React.Fragment>\n  );\n};\n","title":"Composable: Expandable","lang":"ts"}}>
      
      <p {...{"className":"ws-p"}}>
        {`To make a parent/child row pair expandable:`}
      </p>
      
      <ol {...{"className":"ws-ol"}}>
        

        
        <li {...{"className":"ws-li"}}>
          {`Make the first cell in every row an expandable cell by passing `}
          
          <code {...{"className":"ws-code"}}>
            {`TdExpandType`}
          </code>
          {` object to the `}
          
          <code {...{"className":"ws-code"}}>
            {`expand`}
          </code>
          {` prop on the `}
          
          <code {...{"className":"ws-code"}}>
            {`Td`}
          </code>
        </li>
        

        
        <li {...{"className":"ws-li"}}>
          {`Wrap the content of each child row cell in `}
          
          <code {...{"className":"ws-code"}}>
            {`ExpandableRowContent`}
          </code>
          {`.`}
        </li>
        

        
        <li {...{"className":"ws-li"}}>
          {`Enclose each parent/child row pair in a `}
          
          <code {...{"className":"ws-code"}}>
            {`Tbody`}
          </code>
          {` component with an `}
          
          <code {...{"className":"ws-code"}}>
            {`isExpanded`}
          </code>
          {` prop.`}
        </li>
        

      </ol>
      
      <p {...{"className":"ws-p"}}>
        {`The `}
        
        <code {...{"className":"ws-code"}}>
          {`TdExpandType`}
        </code>
        {` expects an `}
        
        <code {...{"className":"ws-code"}}>
          {`OnCollapse`}
        </code>
        {` event handler that has the following signature:`}
      </p>
      
      <Example {...{"code":"type OnCollapse = (\n  event: React.MouseEvent,\n  rowIndex: number,\n  isOpen: boolean,\n  rowData: IRowData,\n  extraData: IExtraData\n) => void;"}}>
        
      </Example>
      
      <p {...{"className":"ws-p"}}>
        {`Note: Table column widths will respond automatically when toggling expanded rows. To retain column widths between expanded and collapsed states, column header and/or data cell widths must be set.`}
      </p>
    </Example>,
  'Composable: Compound expandable': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { TableComposable, Thead, Tr, Th, Tbody, Td, TdProps, ExpandableRowContent } from '@patternfly/react-table';\n\nimport CodeBranchIcon from '@patternfly/react-icons/dist/esm/icons/code-branch-icon';\nimport CodeIcon from '@patternfly/react-icons/dist/esm/icons/code-icon';\nimport CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';\n\ninterface Repository {\n  name: string;\n  branches: number;\n  prs: number;\n  workspaces: number;\n  lastCommit: string;\n}\n\nexport const ComposableTableCompoundExpandable: React.FunctionComponent = () => {\n  // In real usage, this data would come from some external source like an API via props.\n  const repositories: Repository[] = [\n    { name: 'siemur/test-space', branches: 10, prs: 4, workspaces: 4, lastCommit: '20 minutes' },\n    { name: 'siemur/test-space-2', branches: 3, prs: 4, workspaces: 4, lastCommit: '20 minutes' }\n  ];\n\n  const columnNames = {\n    name: 'Repositories',\n    branches: 'Branches',\n    prs: 'Pull requests',\n    workspaces: 'Workspaces',\n    lastCommit: 'Last commit'\n  };\n  type ColumnKey = keyof typeof columnNames;\n\n  // In this example, expanded cells are tracked by the repo and property names from each row. This could be any pair of unique identifiers.\n  // This is to prevent state from being based on row and column order index in case we later add sorting and rearranging columns.\n  // Note that this behavior is very similar to selection state.\n  const [expandedCells, setExpandedCells] = React.useState<Record<string, ColumnKey>>({\n    'siemur/test-space': 'branches' // Default to the first cell of the first row being expanded\n  });\n  const setCellExpanded = (repo: Repository, columnKey: ColumnKey, isExpanding = true) => {\n    const newExpandedCells = { ...expandedCells };\n    if (isExpanding) {\n      newExpandedCells[repo.name] = columnKey;\n    } else {\n      delete newExpandedCells[repo.name];\n    }\n    setExpandedCells(newExpandedCells);\n  };\n  const compoundExpandParams = (repo: Repository, columnKey: ColumnKey, rowIndex: number, columnIndex: number): TdProps['compoundExpand'] => ({\n    isExpanded: expandedCells[repo.name] === columnKey,\n    onToggle: () => setCellExpanded(repo, columnKey, expandedCells[repo.name] !== columnKey),\n    expandId: 'composable-compound-expandable-example',\n    rowIndex,\n    columnIndex\n  });\n\n  return (\n    <TableComposable aria-label=\"Compound expandable table\">\n      <Thead>\n        <Tr>\n          <Th>{columnNames.name}</Th>\n          <Th>{columnNames.branches}</Th>\n          <Th>{columnNames.prs}</Th>\n          <Th>{columnNames.workspaces}</Th>\n          <Th>{columnNames.lastCommit}</Th>\n          <Th />\n        </Tr>\n      </Thead>\n      {repositories.map((repo: Repository, rowIndex: number) => {\n        const expandedCellKey = expandedCells[repo.name];\n        const isRowExpanded = !!expandedCellKey;\n        return (\n          <Tbody key={repo.name} isExpanded={isRowExpanded}>\n            <Tr>\n              <Td width={25} dataLabel={columnNames.name} component=\"th\">\n                <a href=\"#\">{repo.name}</a>\n              </Td>\n              <Td width={10} dataLabel={columnNames.branches} compoundExpand={compoundExpandParams(repo, 'branches', rowIndex, 1)}>\n                <CodeBranchIcon key=\"icon\" /> {repo.branches}\n              </Td>\n              <Td width={10} dataLabel={columnNames.prs} compoundExpand={compoundExpandParams(repo, 'prs', rowIndex, 2)}>\n                <CodeIcon key=\"icon\" /> {repo.prs}\n              </Td>\n              <Td\n                width={10}\n                dataLabel={columnNames.workspaces}\n                compoundExpand={compoundExpandParams(repo, 'workspaces', rowIndex, 3)}\n              >\n                <CubeIcon key=\"icon\" /> {repo.workspaces}\n              </Td>\n              <Td width={15} dataLabel={columnNames.lastCommit}>\n                {repo.lastCommit}\n              </Td>\n              <Td width={30}>\n                <a href=\"#\">Open in GitHub</a>\n              </Td>\n            </Tr>\n            {isRowExpanded ? (\n              <Tr isExpanded={isRowExpanded}>\n                <Td dataLabel={columnNames[expandedCellKey]} noPadding colSpan={6}>\n                  <ExpandableRowContent>\n                    <div className=\"pf-u-m-md\">\n                      Lorem ipsum sit dolor. Lorem ipsum sit dolor. Lorem ipsum sit dolor. Lorem ipsum sit dolor. Lorem\n                      ipsum sit dolor. Lorem ipsum sit dolor. Lorem ipsum sit dolor. Lorem ipsum sit dolor. Lorem ipsum\n                      sit dolor. Lorem ipsum sit dolor. Lorem ipsum sit dolor. Lorem ipsum sit dolor. Lorem ipsum sit\n                      dolor. Lorem ipsum sit dolor. Lorem ipsum sit dolor. Lorem ipsum sit dolor. Lorem ipsum sit dolor.\n                      Lorem ipsum sit dolor. Lorem ipsum sit dolor. Lorem ipsum sit dolor. Lorem ipsum sit dolor. Lorem\n                      ipsum sit dolor. Lorem ipsum sit dolor. Lorem ipsum sit dolor. Lorem ipsum sit dolor. Lorem ipsum\n                      sit dolor. Lorem ipsum sit dolor. Lorem ipsum sit dolor. Lorem ipsum sit dolor. Lorem ipsum sit\n                      dolor. Lorem ipsum sit dolor. Lorem ipsum sit dolor. Lorem ipsum sit dolor.\n                    </div>\n                  </ExpandableRowContent>\n                </Td>\n              </Tr>\n            ) : null}\n          </Tbody>\n        );\n      })}\n    </TableComposable>\n  );\n};\n","title":"Composable: Compound expandable","lang":"ts"}}>
      
      <p {...{"className":"ws-p"}}>
        {`To make a parent/child row pair compound expandable:`}
      </p>
      
      <ol {...{"className":"ws-ol"}}>
        

        
        <li {...{"className":"ws-li"}}>
          {`Pass a `}
          
          <code {...{"className":"ws-code"}}>
            {`TdCompoundExpandType`}
          </code>
          {` object to the `}
          
          <code {...{"className":"ws-code"}}>
            {`compoundExpand`}
          </code>
          {` prop on any `}
          
          <code {...{"className":"ws-code"}}>
            {`Td`}
          </code>
          {` that has an expandable child row`}
        </li>
        

        
        <li {...{"className":"ws-li"}}>
          {`Wrap the content of each child row cell in `}
          
          <code {...{"className":"ws-code"}}>
            {`ExpandableRowContent`}
          </code>
          {`.`}
        </li>
        

        
        <li {...{"className":"ws-li"}}>
          {`Each child `}
          
          <code {...{"className":"ws-code"}}>
            {`Tr`}
          </code>
          {` has an `}
          
          <code {...{"className":"ws-code"}}>
            {`isExpanded`}
          </code>
          {` prop.`}
        </li>
        

      </ol>
      
      <p {...{"className":"ws-p"}}>
        {`The `}
        
        <code {...{"className":"ws-code"}}>
          {`TdCompoundExpandType`}
        </code>
        {` expects an `}
        
        <code {...{"className":"ws-code"}}>
          {`OnExpand`}
        </code>
        {` event handler with the following signature`}
      </p>
      
      <Example {...{"code":"export type OnExpand = (\n  event: React.MouseEvent,\n  rowIndex: number,\n  colIndex: number,\n  isOpen: boolean,\n  rowData: IRowData,\n  extraData: IExtraData\n) => void;"}}>
        
      </Example>
    </Example>,
  'Composable: Cell width, breakpoint modifiers': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { TableComposable, Thead, Tr, Th, Tbody, Td } from '@patternfly/react-table';\n\ninterface Repository {\n  name: string;\n  branches: string | null;\n  prs: string | null;\n  workspaces: string;\n  lastCommit: string;\n}\n\nexport const ComposableTableCellWidth: React.FunctionComponent = () => {\n  // In real usage, this data would come from some external source like an API via props.\n  const repositories: Repository[] = [\n    { name: 'one', branches: 'two', prs: 'three', workspaces: 'four', lastCommit: 'five' },\n    { name: 'one - 2', branches: null, prs: null, workspaces: 'four - 2', lastCommit: 'five - 2' },\n    { name: 'one - 3', branches: 'two - 3', prs: 'three - 3', workspaces: 'four - 3', lastCommit: 'five - 3' }\n  ];\n\n  const columnNames = {\n    name: 'Repositories',\n    branches: 'Branches',\n    prs: 'Pull requests',\n    workspaces: 'Workspaces',\n    lastCommit: 'Last commit'\n  };\n\n  return (\n    <TableComposable aria-label=\"Cell widths\">\n      <Thead>\n        <Tr>\n          <Th width={15}>{columnNames.name}</Th>\n          <Th width={15}>{columnNames.branches}</Th>\n          <Th width={40} visibility={['hiddenOnMd', 'visibleOnLg']}>\n            {columnNames.prs}\n          </Th>\n          <Th width={15}>{columnNames.workspaces}</Th>\n          <Th width={15}>{columnNames.lastCommit}</Th>\n        </Tr>\n      </Thead>\n      <Tbody>\n        {repositories.map(repo => (\n          <Tr key={repo.name}>\n            <Td dataLabel={columnNames.name}>{repo.name}</Td>\n            <Td dataLabel={columnNames.branches}>{repo.branches}</Td>\n            <Td dataLabel={columnNames.prs} visibility={['hiddenOnMd', 'visibleOnLg']}>\n              {repo.prs}\n            </Td>\n            <Td dataLabel={columnNames.workspaces}>{repo.workspaces}</Td>\n            <Td dataLabel={columnNames.lastCommit}>{repo.lastCommit}</Td>\n          </Tr>\n        ))}\n      </Tbody>\n    </TableComposable>\n  );\n};\n","title":"Composable: Cell width, breakpoint modifiers","lang":"ts"}}>
      
    </Example>,
  'Composable: Controlling text': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { TableComposable, Thead, Tr, Th, Tbody, Td } from '@patternfly/react-table';\n\n// This example has been simplified to focus on the text modifier props. In real usage,\n// you may want to derive your rows from typed underlying data and minimal state. See other examples.\n\nconst columnNames = {\n  truncate: 'Truncate (width 20%)',\n  break: 'Break word',\n  wrap: 'Wrapping table header text. This th text will wrap instead of truncate.',\n  fit: 'Fit content',\n  nowrap: 'No wrap'\n};\n\nexport const ComposableTableControllingText: React.FunctionComponent = () => (\n  <TableComposable aria-label=\"Controlling text\">\n    <Thead>\n      <Tr>\n        <Th width={20}>{columnNames.truncate}</Th>\n        <Th>{columnNames.break}</Th>\n        <Th modifier=\"wrap\">{columnNames.wrap}</Th>\n        <Th modifier=\"fitContent\">{columnNames.fit}</Th>\n        <Th>{columnNames.nowrap}</Th>\n      </Tr>\n    </Thead>\n    <Tbody>\n      <Tr>\n        <Td dataLabel={columnNames.truncate} modifier=\"truncate\">\n          This text will truncate instead of wrap.\n        </Td>\n        <Td dataLabel={columnNames.break} modifier=\"breakWord\">\n          <a>http://thisisaverylongurlthatneedstobreakusethebreakwordmodifier.org</a>\n        </Td>\n        <Td dataLabel={columnNames.wrap}>\n          <p>\n            By default,\n            <code>thead</code> cells will truncate and\n            <code>tbody</code> cells will wrap. Use\n            <code>.pf-m-wrap</code> on a<code>th</code> to change its behavior.\n          </p>\n        </Td>\n        <Td dataLabel={columnNames.fit}>\n          This cell's content will adjust itself to the parent th width. This modifier only affects table layouts.\n        </Td>\n        <Td dataLabel={columnNames.nowrap} modifier=\"nowrap\">\n          <a href=\"#\">No wrap</a>\n        </Td>\n      </Tr>\n    </Tbody>\n  </TableComposable>\n);\n","title":"Composable: Controlling text","lang":"ts"}}>
      
    </Example>,
  'Composable: Modifiers with table text': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { TableComposable, Thead, Tr, Th, Tbody, Td, TableText } from '@patternfly/react-table';\n\n// This example has been simplified to focus on the text modifier props. In real usage,\n// you may want to derive your rows from typed underlying data and minimal state. See other examples.\n\nconst columnNames = {\n  truncate: 'Truncating text',\n  wrap: 'Wrapping table header text. This th text will wrap instead of truncate.'\n};\n\nexport const ComposableTableText: React.FunctionComponent = () => (\n  <TableComposable aria-label=\"Table text\">\n    <Thead>\n      <Tr>\n        <Th width={30}>{columnNames.truncate}</Th>\n        <Th>{columnNames.wrap}</Th>\n      </Tr>\n    </Thead>\n    <Tbody>\n      <Tr>\n        <Td dataLabel={columnNames.truncate}>\n          <TableText wrapModifier=\"truncate\">This text will truncate instead of wrap.</TableText>\n        </Td>\n        <Td dataLabel={columnNames.wrap}>\n          <TableText wrapModifier=\"nowrap\">\n            <a href=\"#\">This is a link that needs to be on one line and fully readable.</a>\n          </TableText>\n        </Td>\n      </Tr>\n    </Tbody>\n  </TableComposable>\n);\n","title":"Composable: Modifiers with table text","lang":"ts"}}>
      
    </Example>,
  'Composable: Empty state': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { TableComposable, Thead, Tr, Th, Tbody, Td } from '@patternfly/react-table';\nimport {\n  Bullseye,\n  EmptyState,\n  EmptyStateVariant,\n  EmptyStateIcon,\n  Title,\n  EmptyStateBody,\n  Button\n} from '@patternfly/react-core';\nimport SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';\n\n// This example has been simplified to focus on the empty state. In real usage,\n// you may want to derive your rows from typed underlying data and minimal state. See other examples.\n\nexport const ComposableTableEmptyState: React.FunctionComponent = () => (\n  <TableComposable aria-label=\"Empty state table\">\n    <Thead>\n      <Tr>\n        <Th>Repositories</Th>\n        <Th>Branches</Th>\n        <Th>Pull requests</Th>\n        <Th>Workspaces</Th>\n        <Th>Last commit</Th>\n      </Tr>\n    </Thead>\n    <Tbody>\n      <Tr>\n        <Td colSpan={8}>\n          <Bullseye>\n            <EmptyState variant={EmptyStateVariant.small}>\n              <EmptyStateIcon icon={SearchIcon} />\n              <Title headingLevel=\"h2\" size=\"lg\">\n                No results found\n              </Title>\n              <EmptyStateBody>Clear all filters and try again.</EmptyStateBody>\n              <Button variant=\"link\">Clear all filters</Button>\n            </EmptyState>\n          </Bullseye>\n        </Td>\n      </Tr>\n    </Tbody>\n  </TableComposable>\n);\n","title":"Composable: Empty state","lang":"ts"}}>
      
    </Example>,
  'Composable: Favoritable (implemented with sortable)': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { TableComposable, Thead, Tr, Th, Tbody, Td, ThProps } from '@patternfly/react-table';\n\ninterface Repository {\n  name: string;\n  branches: string;\n  prs: string;\n  workspaces: string;\n  lastCommit: string;\n}\n\nexport const ComposableTableFavoritable: React.FunctionComponent = () => {\n  // In real usage, this data would come from some external source like an API via props.\n  const repositories: Repository[] = [\n    { name: 'one', branches: 'two', prs: 'a', workspaces: 'four', lastCommit: 'five' },\n    { name: 'a', branches: 'two', prs: 'k', workspaces: 'four', lastCommit: 'five' },\n    { name: 'p', branches: 'two', prs: 'b', workspaces: 'four', lastCommit: 'five' }\n  ];\n\n  const columnNames = {\n    name: 'Repositories',\n    branches: 'Branches',\n    prs: 'Pull requests',\n    workspaces: 'Workspaces',\n    lastCommit: 'Last commit'\n  };\n\n  // Index of the currently sorted column\n  // Note: if you intend to make columns reorderable, you may instead want to use a non-numeric key\n  // as the identifier of the sorted column. See the \"Compound expandable\" example.\n  const [activeSortIndex, setActiveSortIndex] = React.useState<number | null>(null);\n\n  // Sort direction of the currently sorted column\n  const [activeSortDirection, setActiveSortDirection] = React.useState<'asc' | 'desc' | null>(null);\n\n  // Favorite state is similar to selection state, see Composable: Selectable with checkbox.\n  const [favoriteRepoNames, setFavoriteRepoNames] = React.useState<string[]>([]);\n  const setRepoFavorited = (repo: Repository, isFavoriting = true) =>\n    setFavoriteRepoNames(prevFavorites => {\n      const otherFavorites = prevFavorites.filter(r => r !== repo.name);\n      return isFavoriting ? [...otherFavorites, repo.name] : otherFavorites;\n    });\n  const isRepoFavorited = (repo: Repository) => favoriteRepoNames.includes(repo.name);\n\n  // Since OnSort specifies sorted columns by index, we need sortable values for our object by column index.\n  // In this example we only deal with booleans here because we only sort on the favorites column.\n  // For more complex sorting, see Composable: Sortable.\n  // Note: We also memoize the sortable values with useCallback to prevent rows jumping around when you change\n  // the favorites while sorting on that column. Only updating the sort state will reorder the rows.\n  const getSortableRowValues = React.useCallback((repo: Repository): boolean[] => [isRepoFavorited(repo)], [\n    activeSortIndex,\n    activeSortDirection\n  ]);\n\n  // Note that we perform the sort as part of the component's render logic and not in onSort.\n  // We shouldn't store the list of data in state because we don't want to have to sync that with props.\n  let sortedRepositories = repositories;\n  if (activeSortIndex !== null) {\n    sortedRepositories = repositories.sort((a, b) => {\n      const aValue = getSortableRowValues(a)[activeSortIndex];\n      const bValue = getSortableRowValues(b)[activeSortIndex];\n      if (aValue === bValue) {\n        return 0;\n      }\n      if (activeSortDirection === 'asc') {\n        return aValue > bValue ? 1 : -1;\n      } else {\n        return bValue > aValue ? 1 : -1;\n      }\n    });\n  }\n\n  const getSortParams = (columnIndex: number): ThProps['sort'] => ({\n    isFavorites: columnIndex === 0, // Not just statically true in case we add sorting on other columns later\n    sortBy: {\n      index: activeSortIndex,\n      direction: activeSortDirection\n    },\n    onSort: (_event, index, direction) => {\n      setActiveSortIndex(index);\n      setActiveSortDirection(direction);\n    },\n    columnIndex\n  });\n\n  return (\n    <TableComposable aria-label=\"Favoritable table\" variant=\"compact\">\n      <Thead>\n        <Tr>\n          <Th sort={getSortParams(0)} />\n          <Th>{columnNames.name}</Th>\n          <Th>{columnNames.branches}</Th>\n          <Th>{columnNames.prs}</Th>\n          <Th>{columnNames.workspaces}</Th>\n          <Th>{columnNames.lastCommit}</Th>\n        </Tr>\n      </Thead>\n      <Tbody>\n        {sortedRepositories.map((repo, rowIndex) => (\n          <Tr key={rowIndex}>\n            <Td\n              favorites={{\n                isFavorited: isRepoFavorited(repo),\n                onFavorite: (_event, isFavoriting) => setRepoFavorited(repo, isFavoriting),\n                rowIndex\n              }}\n            />\n            <Td dataLabel={columnNames.name}>{repo.name}</Td>\n            <Td dataLabel={columnNames.branches}>{repo.branches}</Td>\n            <Td dataLabel={columnNames.prs}>{repo.prs}</Td>\n            <Td dataLabel={columnNames.workspaces}>{repo.workspaces}</Td>\n            <Td dataLabel={columnNames.lastCommit}>{repo.lastCommit}</Td>\n          </Tr>\n        ))}\n      </Tbody>\n    </TableComposable>\n  );\n};\n","title":"Composable: Favoritable (implemented with sortable)","lang":"ts"}}>
      
      <p {...{"className":"ws-p"}}>
        {`To make a row favoritable, the table needs a favoritable column.
Pass a `}
        
        <code {...{"className":"ws-code"}}>
          {`TdFavoritesType`}
        </code>
        {` object via the `}
        
        <code {...{"className":"ws-code"}}>
          {`favorites`}
        </code>
        {` prop on each rows's first `}
        
        <code {...{"className":"ws-code"}}>
          {`Td`}
        </code>
        {` in the favoritable column.`}
      </p>
      
      <p {...{"className":"ws-p"}}>
        {`The `}
        
        <code {...{"className":"ws-code"}}>
          {`TdFavoritesType`}
        </code>
        {` expects an `}
        
        <code {...{"className":"ws-code"}}>
          {`OnFavorite`}
        </code>
        {` event handler with the following signature:`}
      </p>
      
      <Example {...{"code":"type OnFavorite = (\n  event: React.MouseEvent,\n  isFavorited: boolean,\n  rowIndex: number,\n  rowData: IRowData,\n  extraData: IExtraData\n) => void;"}}>
        
      </Example>
      
      <p {...{"className":"ws-p"}}>
        {`To make a favoritable column sortable, pass a `}
        
        <code {...{"className":"ws-code"}}>
          {`ThSortType`}
        </code>
        {` object to the favoritable column's `}
        
        <code {...{"className":"ws-code"}}>
          {`Th`}
        </code>
        {` with `}
        
        <code {...{"className":"ws-code"}}>
          {`isFavorites`}
        </code>
        {` set to true.`}
      </p>
    </Example>,
  'Composable: Tree table': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { TableComposable, Thead, Tr, Th, Tbody, Td, TreeRowWrapper, TdProps } from '@patternfly/react-table';\nimport LeafIcon from '@patternfly/react-icons/dist/esm/icons/leaf-icon';\nimport FolderIcon from '@patternfly/react-icons/dist/esm/icons/folder-icon';\nimport FolderOpenIcon from '@patternfly/react-icons/dist/esm/icons/folder-open-icon';\n\ninterface RepositoriesTreeNode {\n  name: string;\n  branches: string;\n  pullRequests: string;\n  workspaces: string;\n  children?: RepositoriesTreeNode[];\n}\n\nexport const ComposableTableTree: React.FunctionComponent = () => {\n  // In real usage, this data would come from some external source like an API via props.\n  const data: RepositoriesTreeNode[] = [\n    {\n      name: 'Repositories one',\n      branches: 'Branch one',\n      pullRequests: 'Pull request one',\n      workspaces: 'Workplace one',\n      children: [\n        {\n          name: 'Repositories two',\n          branches: 'Branch two',\n          pullRequests: 'Pull request two',\n          workspaces: 'Workplace two',\n          children: [\n            {\n              name: 'Repositories three',\n              branches: 'Branch three',\n              pullRequests: 'Pull request three',\n              workspaces: 'Workplace three'\n            },\n            {\n              name: 'Repositories four',\n              branches: 'Branch four',\n              pullRequests: 'Pull request four',\n              workspaces: 'Workplace four'\n            }\n          ]\n        },\n        {\n          name: 'Repositories five',\n          branches: 'Branch five',\n          pullRequests: 'Pull request five',\n          workspaces: 'Workplace five'\n        },\n        {\n          name: 'Repositories six',\n          branches: 'Branch six',\n          pullRequests: 'Pull request six',\n          workspaces: 'Workplace six'\n        }\n      ]\n    },\n    {\n      name: 'Repositories seven',\n      branches: 'Branch seven',\n      pullRequests: 'Pull request seven',\n      workspaces: 'Workplace seven',\n      children: [\n        {\n          name: 'Repositories eight',\n          branches: 'Branch eight',\n          pullRequests: 'Pull request eight',\n          workspaces: 'Workplace eight'\n        }\n      ]\n    },\n    {\n      name: 'Repositories nine',\n      branches: 'Branch nine',\n      pullRequests: 'Pull request nine',\n      workspaces: 'Workplace nine'\n    }\n  ];\n\n  const columnNames = {\n    name: 'Repositories',\n    branches: 'Branches',\n    prs: 'Pull requests',\n    workspaces: 'Workspaces'\n  };\n\n  const [expandedNodeNames, setExpandedNodeNames] = React.useState<string[]>(['Repositories one']);\n  const [expandedDetailsNodeNames, setExpandedDetailsNodeNames] = React.useState<string[]>([]);\n  const [selectedNodeNames, setSelectedNodeNames] = React.useState<string[]>([]);\n\n  const getDescendants = (node: RepositoriesTreeNode): RepositoriesTreeNode[] =>\n    [node].concat(...(node.children ? node.children.map(getDescendants) : []));\n  const areAllDescendantsSelected = (node: RepositoriesTreeNode) =>\n    getDescendants(node).every(n => selectedNodeNames.includes(n.name));\n  const areSomeDescendantsSelected = (node: RepositoriesTreeNode) =>\n    getDescendants(node).some(n => selectedNodeNames.includes(n.name));\n\n  const isNodeChecked = (node: RepositoriesTreeNode) => {\n    if (areAllDescendantsSelected(node)) {\n      return true;\n    }\n    if (areSomeDescendantsSelected(node)) {\n      return null;\n    }\n    return false;\n  };\n\n  /** \n    Recursive function which flattens the data into an array of flattened TreeRowWrapper components\n    params: \n      - nodes - array of a single level of tree nodes\n      - level - number representing how deeply nested the current row is\n      - posinset - position of the row relative to this row's siblings\n      - currentRowIndex - position of the row relative to the entire table\n      - isHidden - defaults to false, true if this row's parent is expanded\n  */\n  const renderRows = (\n    [node, ...remainingNodes]: RepositoriesTreeNode[],\n    level = 1,\n    posinset = 1,\n    rowIndex = 0,\n    isHidden = false\n  ): React.ReactNode[] => {\n    if (!node) {\n      return [];\n    }\n    const isExpanded = expandedNodeNames.includes(node.name);\n    const isDetailsExpanded = expandedDetailsNodeNames.includes(node.name);\n    const isChecked = isNodeChecked(node);\n    let icon = <LeafIcon />;\n    if (node.children) {\n      icon = isExpanded ? <FolderOpenIcon aria-hidden /> : <FolderIcon aria-hidden />;\n    }\n\n    const treeRow: TdProps['treeRow'] = {\n      onCollapse: () =>\n        setExpandedNodeNames(prevExpanded => {\n          const otherExpandedNodeNames = prevExpanded.filter(name => name !== node.name);\n          return isExpanded ? otherExpandedNodeNames : [...otherExpandedNodeNames, node.name];\n        }),\n      onToggleRowDetails: () =>\n        setExpandedDetailsNodeNames(prevDetailsExpanded => {\n          const otherDetailsExpandedNodeNames = prevDetailsExpanded.filter(name => name !== node.name);\n          return isDetailsExpanded ? otherDetailsExpandedNodeNames : [...otherDetailsExpandedNodeNames, node.name];\n        }),\n      onCheckChange: (_event, isChecking) => {\n        const nodeNamesToCheck = getDescendants(node).map(n => n.name);\n        setSelectedNodeNames(prevSelected => {\n          const otherSelectedNodeNames = prevSelected.filter(name => !nodeNamesToCheck.includes(name));\n          return !isChecking ? otherSelectedNodeNames : [...otherSelectedNodeNames, ...nodeNamesToCheck];\n        });\n      },\n      rowIndex,\n      props: {\n        isExpanded,\n        isDetailsExpanded,\n        isHidden,\n        'aria-level': level,\n        'aria-posinset': posinset,\n        'aria-setsize': node.children ? node.children.length : 0,\n        isChecked,\n        checkboxId: `checkbox_id_${node.name.toLowerCase().replace(/\\s+/g, '_')}`,\n        icon\n      }\n    };\n\n    const childRows =\n      node.children && node.children.length\n        ? renderRows(node.children, level + 1, 1, rowIndex + 1, !isExpanded || isHidden)\n        : [];\n\n    return [\n      <TreeRowWrapper key={node.name} row={{ props: treeRow.props }}>\n        <Td dataLabel={columnNames.name} treeRow={treeRow}>\n          {node.name}\n        </Td>\n        <Td dataLabel={columnNames.branches}>{node.branches}</Td>\n        <Td dataLabel={columnNames.prs}>{node.pullRequests}</Td>\n        <Td dataLabel={columnNames.workspaces}>{node.workspaces}</Td>\n      </TreeRowWrapper>,\n      ...childRows,\n      ...renderRows(remainingNodes, level, posinset + 1, rowIndex + 1 + childRows.length, isHidden)\n    ];\n  };\n\n  return (\n    <TableComposable isTreeTable aria-label=\"Tree table\">\n      <Thead>\n        <Tr>\n          <Th width={40}>{columnNames.name}</Th>\n          <Th>{columnNames.branches}</Th>\n          <Th>{columnNames.prs}</Th>\n          <Th>{columnNames.workspaces}</Th>\n        </Tr>\n      </Thead>\n      <Tbody>{renderRows(data)}</Tbody>\n    </TableComposable>\n  );\n};\n","title":"Composable: Tree table","lang":"ts","isBeta":true}}>
      
      <p {...{"className":"ws-p"}}>
        {`To enable a tree table:`}
      </p>
      
      <ol {...{"className":"ws-ol"}}>
        

        
        <li {...{"className":"ws-li"}}>
          

          
          <p {...{"className":"ws-p"}}>
            {`Pass the `}
            
            <code {...{"className":"ws-code"}}>
              {`isTreeTable`}
            </code>
            {` prop to the `}
            
            <code {...{"className":"ws-code"}}>
              {`TableComposable`}
            </code>
            {` component`}
          </p>
          

        </li>
        

        
        <li {...{"className":"ws-li"}}>
          

          
          <p {...{"className":"ws-p"}}>
            {`Use a `}
            
            <code {...{"className":"ws-code"}}>
              {`TreeRowWrapper`}
            </code>
            {` rather than `}
            
            <code {...{"className":"ws-code"}}>
              {`Tr`}
            </code>
          </p>
          

        </li>
        

        
        <li {...{"className":"ws-li"}}>
          

          
          <p {...{"className":"ws-p"}}>
            {`Pass the following `}
            
            <code {...{"className":"ws-code"}}>
              {`props`}
            </code>
            {` to each row (both the `}
            
            <code {...{"className":"ws-code"}}>
              {`TreeRowWrapper`}
            </code>
            {` and the `}
            
            <code {...{"className":"ws-code"}}>
              {`treeRow`}
            </code>
            {` in the first column):`}
          </p>
          

          
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
              {` - (optional) if this row uses checkboxes, flag indicating the checkbox checked`}
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
          

          
          <p {...{"className":"ws-p"}}>
            {`The first `}
            
            <code {...{"className":"ws-code"}}>
              {`Td`}
            </code>
            {` in each row will pass the following to the `}
            
            <code {...{"className":"ws-code"}}>
              {`treeRow`}
            </code>
            {` prop:`}
          </p>
          

          
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
            

            
            <li {...{"className":"ws-li"}}>
              
              <code {...{"className":"ws-code"}}>
                {`props`}
              </code>
              {` - (as defined above)`}
            </li>
            

            
            <li {...{"className":"ws-li"}}>
              
              <code {...{"className":"ws-code"}}>
                {`rowIndex`}
              </code>
              {` - number representing the index of the row`}
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
  'Composable: Draggable row table': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { TableComposable, Thead, Tbody, Tr, Th, Td, TbodyProps, TrProps } from '@patternfly/react-table';\nimport styles from '@patternfly/react-styles/css/components/Table/table';\n\nexport const ComposableTableDraggable: React.FunctionComponent = () => {\n  const [draggedItemId, setDraggedItemId] = React.useState<string | null>(null);\n  const [draggingToItemIndex, setDraggingToItemIndex] = React.useState<number | null>(null);\n  const [isDragging, setIsDragging] = React.useState(false);\n  const [itemOrder, setItemOrder] = React.useState(['row1', 'row2', 'row3']);\n  const [tempItemOrder, setTempItemOrder] = React.useState<string[]>([]);\n\n  const bodyRef = React.useRef<HTMLTableSectionElement>();\n\n  const onDragStart: TrProps['onDragStart'] = evt => {\n    evt.dataTransfer.effectAllowed = 'move';\n    evt.dataTransfer.setData('text/plain', evt.currentTarget.id);\n    const draggedItemId = evt.currentTarget.id;\n\n    evt.currentTarget.classList.add(styles.modifiers.ghostRow);\n    evt.currentTarget.setAttribute('aria-pressed', 'true');\n\n    setDraggedItemId(draggedItemId);\n    setIsDragging(true);\n  };\n\n  const moveItem = (arr: string[], i1: string, toIndex: number) => {\n    const fromIndex = arr.indexOf(i1);\n    if (fromIndex === toIndex) {\n      return arr;\n    }\n    const temp = arr.splice(fromIndex, 1);\n    arr.splice(toIndex, 0, temp[0]);\n\n    return arr;\n  };\n\n  const move = (itemOrder: string[]) => {\n    const ulNode = bodyRef.current;\n    const nodes = Array.from(ulNode.children);\n    if (nodes.map(node => node.id).every((id, i) => id === itemOrder[i])) {\n      return;\n    }\n    while (ulNode.firstChild) {\n      ulNode.removeChild(ulNode.lastChild);\n    }\n\n    itemOrder.forEach(id => {\n      ulNode.appendChild(nodes.find(n => n.id === id));\n    });\n  };\n\n  const onDragCancel = () => {\n    Array.from(bodyRef.current.children).forEach(el => {\n      el.classList.remove(styles.modifiers.ghostRow);\n      el.setAttribute('aria-pressed', 'false');\n    });\n    setDraggedItemId(null);\n    setDraggingToItemIndex(null);\n    setIsDragging(false);\n  };\n\n  const onDragLeave: TbodyProps['onDragLeave'] = evt => {\n    if (!isValidDrop(evt)) {\n      move(itemOrder);\n      setDraggingToItemIndex(null);\n    }\n  };\n\n  const isValidDrop = (evt: React.DragEvent<HTMLTableSectionElement | HTMLTableRowElement>) => {\n    const ulRect = bodyRef.current.getBoundingClientRect();\n    return (\n      evt.clientX > ulRect.x &&\n      evt.clientX < ulRect.x + ulRect.width &&\n      evt.clientY > ulRect.y &&\n      evt.clientY < ulRect.y + ulRect.height\n    );\n  };\n\n  const onDrop: TrProps['onDrop'] = evt => {\n    if (isValidDrop(evt)) {\n      setItemOrder(tempItemOrder);\n    } else {\n      onDragCancel();\n    }\n  };\n\n  const onDragOver: TbodyProps['onDragOver'] = evt => {\n    evt.preventDefault();\n\n    const curListItem = (evt.target as HTMLTableSectionElement).closest('tr');\n    if (!curListItem || !bodyRef.current.contains(curListItem) || curListItem.id === draggedItemId) {\n      return null;\n    } else {\n      const dragId = curListItem.id;\n      const newDraggingToItemIndex = Array.from(bodyRef.current.children).findIndex(item => item.id === dragId);\n      if (newDraggingToItemIndex !== draggingToItemIndex) {\n        const tempItemOrder = moveItem([...itemOrder], draggedItemId, newDraggingToItemIndex);\n        move(tempItemOrder);\n        setDraggingToItemIndex(newDraggingToItemIndex);\n        setTempItemOrder(tempItemOrder);\n      }\n    }\n  };\n\n  const onDragEnd: TrProps['onDragEnd'] = evt => {\n    const target = evt.target as HTMLTableRowElement;\n    target.classList.remove(styles.modifiers.ghostRow);\n    target.setAttribute('aria-pressed', 'false');\n    setDraggedItemId(null);\n    setDraggingToItemIndex(null);\n    setIsDragging(false);\n  };\n\n  const columns = ['Repositories', 'Branches', 'Pull requests', 'Workspaces', 'Last commit'];\n  const rows = [\n    {\n      id: 'row1',\n      repository: 'one',\n      branch: 'two',\n      pullRequest: 'three',\n      workspace: 'four',\n      lastCommit: 'five'\n    },\n    {\n      id: 'row2',\n      repository: 'one -2',\n      branch: null,\n      pullRequest: null,\n      workspace: 'four -2',\n      lastCommit: 'five -2'\n    },\n    {\n      id: 'row3',\n      repository: 'one - 3',\n      branch: 'two - 3',\n      pullRequest: 'three - 3',\n      workspace: 'four - 3',\n      lastCommit: 'five - 3'\n    }\n  ];\n\n  return (\n    <TableComposable aria-label=\"Draggable table\" className={isDragging && styles.modifiers.dragOver}>\n      <Thead>\n        <Tr>\n          <Th />\n          {columns.map((column, columnIndex) => (\n            <Th key={columnIndex}>{column}</Th>\n          ))}\n        </Tr>\n      </Thead>\n      <Tbody ref={bodyRef} onDragOver={onDragOver} onDrop={onDragOver} onDragLeave={onDragLeave}>\n        {rows.map((row, rowIndex) => (\n          <Tr key={rowIndex} id={row.id} draggable onDrop={onDrop} onDragEnd={onDragEnd} onDragStart={onDragStart}>\n            <Td\n              draggableRow={{\n                id: `draggable-row-${row.id}`\n              }}\n            />\n            {Object.keys(row).map((key, keyIndex) => (\n              <Td key={`${rowIndex}_${keyIndex}`} dataLabel={columns[keyIndex]}>\n                {row[key]}\n              </Td>\n            ))}\n          </Tr>\n        ))}\n      </Tbody>\n    </TableComposable>\n  );\n};\n","title":"Composable: Draggable row table","lang":"ts","isBeta":true}}>
      
      <p {...{"className":"ws-p"}}>
        {`To make a row draggable:`}
      </p>
      
      <ol {...{"className":"ws-ol"}}>
        

        
        <li {...{"className":"ws-li"}}>
          {`The table needs a draggable column.`}
        </li>
        

        
        <li {...{"className":"ws-li"}}>
          {`Each draggable `}
          
          <code {...{"className":"ws-code"}}>
            {`Tr`}
          </code>
          {` needs to be passed `}
          
          <code {...{"className":"ws-code"}}>
            {`draggable`}
          </code>
          {`, `}
          
          <code {...{"className":"ws-code"}}>
            {`onDrop`}
          </code>
          {`, `}
          
          <code {...{"className":"ws-code"}}>
            {`onDragEnd`}
          </code>
          {`, and `}
          
          <code {...{"className":"ws-code"}}>
            {`onDragStart`}
          </code>
          {` props.`}
        </li>
        

        
        <li {...{"className":"ws-li"}}>
          {`The `}
          
          <code {...{"className":"ws-code"}}>
            {`Tbody`}
          </code>
          {` needs `}
          
          <code {...{"className":"ws-code"}}>
            {`onDragOver`}
          </code>
          {`, `}
          
          <code {...{"className":"ws-code"}}>
            {`onDrop`}
          </code>
          {`, and `}
          
          <code {...{"className":"ws-code"}}>
            {`onDragLeave`}
          </code>
          {` props.`}
        </li>
        

        
        <li {...{"className":"ws-li"}}>
          {`While the user is dragging a row, the \``}
          
          <code {...{"className":"ws-code"}}>
            {`class needs to be applied to`}
          </code>
          {`TableComposable\`.`}
        </li>
        

        
        <li {...{"className":"ws-li"}}>
          {`The draggable `}
          
          <code {...{"className":"ws-code"}}>
            {`Td`}
          </code>
          {` in each row needs a `}
          
          <code {...{"className":"ws-code"}}>
            {`TdDraggableType`}
          </code>
          {` object passed to its `}
          
          <code {...{"className":"ws-code"}}>
            {`draggable`}
          </code>
          {` prop.`}
        </li>
        

      </ol>
    </Example>,
  'Composable: Sticky column': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { TableComposable, Thead, Tr, Th, Tbody, Td, InnerScrollContainer, ThProps } from '@patternfly/react-table';\n\ninterface Fact {\n  name: string;\n  state: string;\n  detail1: string;\n  detail2: string;\n  detail3: string;\n  detail4: string;\n  detail5: string;\n  detail6: string;\n  detail7: string;\n}\n\nexport const ComposableTableStickyColumn: React.FunctionComponent = () => {\n  // In real usage, this data would come from some external source like an API via props.\n  const facts: Fact[] = Array.from({ length: 9 }, (_, index) => ({\n    name: `Fact ${index + 1}`,\n    state: `State ${index + 1}`,\n    detail1: `Test cell ${index + 1}-3`,\n    detail2: `Test cell ${index + 1}-4`,\n    detail3: `Test cell ${index + 1}-5`,\n    detail4: `Test cell ${index + 1}-6`,\n    detail5: `Test cell ${index + 1}-7`,\n    detail6: `Test cell ${index + 1}-8`,\n    detail7: `Test cell ${index + 1}-9`\n  }));\n\n  const columnNames = {\n    name: 'Fact',\n    state: 'State',\n    header3: 'Header 3',\n    header4: 'Header 4',\n    header5: 'Header 5',\n    header6: 'Header 6',\n    header7: 'Header 7',\n    header8: 'Header 8',\n    header9: 'Header 9'\n  };\n\n  // Index of the currently sorted column\n  // Note: if you intend to make columns reorderable, you may instead want to use a non-numeric key\n  // as the identifier of the sorted column. See the \"Compound expandable\" example.\n  const [activeSortIndex, setActiveSortIndex] = React.useState<number | null>(null);\n\n  // Sort direction of the currently sorted column\n  const [activeSortDirection, setActiveSortDirection] = React.useState<'asc' | 'desc' | null>(null);\n\n  // Since OnSort specifies sorted columns by index, we need sortable values for our object by column index.\n  // This example is trivial since our data objects just contain strings, but if the data was more complex\n  // this would be a place to return simplified string or number versions of each column to sort by.\n  const getSortableRowValues = (fact: Fact): (string | number)[] => {\n    const { name, state, detail1, detail2, detail3, detail4, detail5, detail6, detail7 } = fact;\n    return [name, state, detail1, detail2, detail3, detail4, detail5, detail6, detail7];\n  };\n\n  // Note that we perform the sort as part of the component's render logic and not in onSort.\n  // We shouldn't store the list of data in state because we don't want to have to sync that with props.\n  let sortedFacts = facts;\n  if (activeSortIndex !== null) {\n    sortedFacts = facts.sort((a, b) => {\n      const aValue = getSortableRowValues(a)[activeSortIndex];\n      const bValue = getSortableRowValues(b)[activeSortIndex];\n      if (aValue === bValue) {\n        return 0;\n      }\n      if (activeSortDirection === 'asc') {\n        return aValue > bValue ? 1 : -1;\n      } else {\n        return bValue > aValue ? 1 : -1;\n      }\n    });\n  }\n\n  const getSortParams = (columnIndex: number): ThProps['sort'] => ({\n    sortBy: {\n      index: activeSortIndex,\n      direction: activeSortDirection\n    },\n    onSort: (_event, index, direction) => {\n      setActiveSortIndex(index);\n      setActiveSortDirection(direction);\n    },\n    columnIndex\n  });\n\n  return (\n    <InnerScrollContainer>\n      <TableComposable aria-label=\"Sticky column table\" gridBreakPoint=\"\">\n        <Thead>\n          <Tr>\n            <Th isStickyColumn hasRightBorder modifier=\"truncate\" sort={getSortParams(0)}>\n              {columnNames.name}\n            </Th>\n            <Th modifier=\"truncate\" sort={getSortParams(1)}>\n              {columnNames.state}\n            </Th>\n            <Th modifier=\"truncate\">{columnNames.header3}</Th>\n            <Th modifier=\"truncate\">{columnNames.header4}</Th>\n            <Th modifier=\"truncate\">{columnNames.header5}</Th>\n            <Th modifier=\"truncate\">{columnNames.header6}</Th>\n            <Th modifier=\"truncate\">{columnNames.header7}</Th>\n            <Th modifier=\"truncate\">{columnNames.header8}</Th>\n            <Th modifier=\"truncate\">{columnNames.header9}</Th>\n          </Tr>\n        </Thead>\n        <Tbody>\n          {sortedFacts.map(fact => (\n            <Tr key={fact.name}>\n              <Th isStickyColumn hasRightBorder modifier=\"truncate\">\n                {fact.name}\n              </Th>\n              <Td modifier=\"nowrap\" dataLabel={columnNames.state}>\n                {fact.state}\n              </Td>\n              <Td modifier=\"nowrap\" dataLabel={columnNames.header3}>\n                {fact.detail1}\n              </Td>\n              <Td modifier=\"nowrap\" dataLabel={columnNames.header4}>\n                {fact.detail2}\n              </Td>\n              <Td modifier=\"nowrap\" dataLabel={columnNames.header5}>\n                {fact.detail3}\n              </Td>\n              <Td modifier=\"nowrap\" dataLabel={columnNames.header6}>\n                {fact.detail4}\n              </Td>\n              <Td modifier=\"nowrap\" dataLabel={columnNames.header7}>\n                {fact.detail5}\n              </Td>\n              <Td modifier=\"nowrap\" dataLabel={columnNames.header8}>\n                {fact.detail6}\n              </Td>\n              <Td modifier=\"nowrap\" dataLabel={columnNames.header9}>\n                {fact.detail7}\n              </Td>\n            </Tr>\n          ))}\n        </Tbody>\n      </TableComposable>\n    </InnerScrollContainer>\n  );\n};\n","title":"Composable: Sticky column","lang":"ts"}}>
      
      <p {...{"className":"ws-p"}}>
        {`To make a column sticky, wrap `}
        
        <code {...{"className":"ws-code"}}>
          {`TableComposable`}
        </code>
        {` with `}
        
        <code {...{"className":"ws-code"}}>
          {`InnerScrollContainer`}
        </code>
        {` and add the following properties to the `}
        
        <code {...{"className":"ws-code"}}>
          {`Th`}
        </code>
        {` that should be sticky: `}
        
        <code {...{"className":"ws-code"}}>
          {`isStickyColumn`}
        </code>
        {` and `}
        
        <code {...{"className":"ws-code"}}>
          {`hasRightBorder`}
        </code>
        {`. To prevent the default text wrapping behavior and allow horizontal scrolling, all `}
        
        <code {...{"className":"ws-code"}}>
          {`Th`}
        </code>
        {` should also have the `}
        
        <code {...{"className":"ws-code"}}>
          {`modifier="nowrap"`}
        </code>
        {` property. To set the minimum width of the sticky column, use the `}
        
        <code {...{"className":"ws-code"}}>
          {`stickyMinWidth`}
        </code>
        {` property.`}
      </p>
    </Example>,
  'Composable: Multiple sticky columns': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { TableComposable, Thead, Tr, Th, Tbody, Td, InnerScrollContainer, ThProps } from '@patternfly/react-table';\nimport BlueprintIcon from '@patternfly/react-icons/dist/esm/icons/blueprint-icon';\n\ninterface Fact {\n  name: string;\n  state: string;\n  detail1: string;\n  detail2: string;\n  detail3: string;\n  detail4: string;\n  detail5: string;\n  detail6: string;\n  detail7: string;\n}\n\nexport const ComposableTableMultipleStickyColumns: React.FunctionComponent = () => {\n  // In real usage, this data would come from some external source like an API via props.\n  const facts: Fact[] = Array.from({ length: 9 }, (_, index) => ({\n    name: `Fact ${index + 1}`,\n    state: `State ${index + 1}`,\n    detail1: `Test cell ${index + 1}-3`,\n    detail2: `Test cell ${index + 1}-4`,\n    detail3: `Test cell ${index + 1}-5`,\n    detail4: `Test cell ${index + 1}-6`,\n    detail5: `Test cell ${index + 1}-7`,\n    detail6: `Test cell ${index + 1}-8`,\n    detail7: `Test cell ${index + 1}-9`\n  }));\n\n  const columnNames = {\n    name: 'Fact',\n    state: 'State',\n    header3: 'Header 3',\n    header4: 'Header 4',\n    header5: 'Header 5',\n    header6: 'Header 6',\n    header7: 'Header 7',\n    header8: 'Header 8',\n    header9: 'Header 9'\n  };\n\n  // Index of the currently sorted column\n  // Note: if you intend to make columns reorderable, you may instead want to use a non-numeric key\n  // as the identifier of the sorted column. See the \"Compound expandable\" example.\n  const [activeSortIndex, setActiveSortIndex] = React.useState<number | null>(null);\n\n  // Sort direction of the currently sorted column\n  const [activeSortDirection, setActiveSortDirection] = React.useState<'asc' | 'desc' | null>(null);\n\n  // Since OnSort specifies sorted columns by index, we need sortable values for our object by column index.\n  // This example is trivial since our data objects just contain strings, but if the data was more complex\n  // this would be a place to return simplified string or number versions of each column to sort by.\n  const getSortableRowValues = (fact: Fact): (string | number)[] => {\n    const { name, state, detail1, detail2, detail3, detail4, detail5, detail6, detail7 } = fact;\n    return [name, state, detail1, detail2, detail3, detail4, detail5, detail6, detail7];\n  };\n\n  // Note that we perform the sort as part of the component's render logic and not in onSort.\n  // We shouldn't store the list of data in state because we don't want to have to sync that with props.\n  let sortedFacts = facts;\n  if (activeSortIndex !== null) {\n    sortedFacts = facts.sort((a, b) => {\n      const aValue = getSortableRowValues(a)[activeSortIndex];\n      const bValue = getSortableRowValues(b)[activeSortIndex];\n      if (aValue === bValue) {\n        return 0;\n      }\n      if (activeSortDirection === 'asc') {\n        return aValue > bValue ? 1 : -1;\n      } else {\n        return bValue > aValue ? 1 : -1;\n      }\n    });\n  }\n\n  const getSortParams = (columnIndex: number): ThProps['sort'] => ({\n    sortBy: {\n      index: activeSortIndex,\n      direction: activeSortDirection\n    },\n    onSort: (_event, index, direction) => {\n      setActiveSortIndex(index);\n      setActiveSortDirection(direction);\n    },\n    columnIndex\n  });\n\n  return (\n    <InnerScrollContainer>\n      <TableComposable aria-label=\"Multiple sticky column table\" gridBreakPoint=\"\">\n        <Thead>\n          <Tr>\n            <Th isStickyColumn modifier=\"truncate\" sort={getSortParams(0)}>\n              {columnNames.name}\n            </Th>\n            <Th\n              isStickyColumn\n              stickyMinWidth=\"120px\"\n              stickyLeftOffset=\"120px\"\n              hasRightBorder\n              modifier=\"truncate\"\n              sort={getSortParams(1)}\n            >\n              {columnNames.state}\n            </Th>\n            <Th modifier=\"truncate\">{columnNames.header3}</Th>\n            <Th modifier=\"truncate\">{columnNames.header4}</Th>\n            <Th modifier=\"truncate\">{columnNames.header5}</Th>\n            <Th modifier=\"truncate\">{columnNames.header6}</Th>\n            <Th modifier=\"truncate\">{columnNames.header7}</Th>\n            <Th modifier=\"truncate\">{columnNames.header8}</Th>\n            <Th modifier=\"truncate\">{columnNames.header9}</Th>\n          </Tr>\n        </Thead>\n        <Tbody>\n          {sortedFacts.map(fact => (\n            <Tr key={fact.name}>\n              <Th isStickyColumn modifier=\"truncate\">\n                {fact.name}\n              </Th>\n              <Th isStickyColumn stickyMinWidth=\"120px\" stickyLeftOffset=\"120px\" modifier=\"truncate\" hasRightBorder>\n                <BlueprintIcon />\n                {` ${fact.state}`}\n              </Th>\n              <Td modifier=\"nowrap\" dataLabel={columnNames.header3}>\n                {fact.detail1}\n              </Td>\n              <Td modifier=\"nowrap\" dataLabel={columnNames.header4}>\n                {fact.detail2}\n              </Td>\n              <Td modifier=\"nowrap\" dataLabel={columnNames.header5}>\n                {fact.detail3}\n              </Td>\n              <Td modifier=\"nowrap\" dataLabel={columnNames.header6}>\n                {fact.detail4}\n              </Td>\n              <Td modifier=\"nowrap\" dataLabel={columnNames.header7}>\n                {fact.detail5}\n              </Td>\n              <Td modifier=\"nowrap\" dataLabel={columnNames.header8}>\n                {fact.detail6}\n              </Td>\n              <Td modifier=\"nowrap\" dataLabel={columnNames.header9}>\n                {fact.detail7}\n              </Td>\n            </Tr>\n          ))}\n        </Tbody>\n      </TableComposable>\n    </InnerScrollContainer>\n  );\n};\n","title":"Composable: Multiple sticky columns","lang":"ts"}}>
      
      <p {...{"className":"ws-p"}}>
        {`To make multiple columns sticky, wrap `}
        
        <code {...{"className":"ws-code"}}>
          {`TableComposable`}
        </code>
        {` with `}
        
        <code {...{"className":"ws-code"}}>
          {`InnerScrollContainer`}
        </code>
        {` and add `}
        
        <code {...{"className":"ws-code"}}>
          {`isStickyColumn`}
        </code>
        {` to all columns that should be sticky. The rightmost column should also have the `}
        
        <code {...{"className":"ws-code"}}>
          {`hasRightBorder`}
        </code>
        {` property, and each sticky column after the first must define a `}
        
        <code {...{"className":"ws-code"}}>
          {`stickyLeftOffset`}
        </code>
        {` property that equals the combined width of the previous sticky columns - set by `}
        
        <code {...{"className":"ws-code"}}>
          {`stickyMinWidth`}
        </code>
        {`. To prevent the default text wrapping behavior and allow horizontal scrolling, all `}
        
        <code {...{"className":"ws-code"}}>
          {`Th`}
        </code>
        {` should also have the `}
        
        <code {...{"className":"ws-code"}}>
          {`modifier="nowrap"`}
        </code>
        {` property.`}
      </p>
    </Example>,
  'Composable: Sticky columns and header': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  TableComposable,\n  Thead,\n  Tr,\n  Th,\n  Tbody,\n  Td,\n  InnerScrollContainer,\n  OuterScrollContainer,\n  ThProps\n} from '@patternfly/react-table';\nimport BlueprintIcon from '@patternfly/react-icons/dist/esm/icons/blueprint-icon';\n\ninterface Fact {\n  name: string;\n  state: string;\n  detail1: string;\n  detail2: string;\n  detail3: string;\n  detail4: string;\n  detail5: string;\n  detail6: string;\n  detail7: string;\n}\n\nexport const ComposableTableStickyColumnsAndHeader: React.FunctionComponent = () => {\n  // In real usage, this data would come from some external source like an API via props.\n  const facts: Fact[] = Array.from({ length: 9 }, (_, index) => ({\n    name: `Fact ${index + 1}`,\n    state: `State ${index + 1}`,\n    detail1: `Test cell ${index + 1}-3`,\n    detail2: `Test cell ${index + 1}-4`,\n    detail3: `Test cell ${index + 1}-5`,\n    detail4: `Test cell ${index + 1}-6`,\n    detail5: `Test cell ${index + 1}-7`,\n    detail6: `Test cell ${index + 1}-8`,\n    detail7: `Test cell ${index + 1}-9`\n  }));\n\n  const columnNames = {\n    name: 'Fact',\n    state: 'State',\n    header3: 'Header 3',\n    header4: 'Header 4',\n    header5: 'Header 5',\n    header6: 'Header 6',\n    header7: 'Header 7',\n    header8: 'Header 8',\n    header9: 'Header 9'\n  };\n\n  // Index of the currently sorted column\n  // Note: if you intend to make columns reorderable, you may instead want to use a non-numeric key\n  // as the identifier of the sorted column. See the \"Compound expandable\" example.\n  const [activeSortIndex, setActiveSortIndex] = React.useState<number | null>(null);\n\n  // Sort direction of the currently sorted column\n  const [activeSortDirection, setActiveSortDirection] = React.useState<'asc' | 'desc' | null>(null);\n\n  // Since OnSort specifies sorted columns by index, we need sortable values for our object by column index.\n  // This example is trivial since our data objects just contain strings, but if the data was more complex\n  // this would be a place to return simplified string or number versions of each column to sort by.\n  const getSortableRowValues = (fact: Fact): (string | number)[] => {\n    const { name, state, detail1, detail2, detail3, detail4, detail5, detail6, detail7 } = fact;\n    return [name, state, detail1, detail2, detail3, detail4, detail5, detail6, detail7];\n  };\n\n  // Note that we perform the sort as part of the component's render logic and not in onSort.\n  // We shouldn't store the list of data in state because we don't want to have to sync that with props.\n  let sortedFacts = facts;\n  if (activeSortIndex !== null) {\n    sortedFacts = facts.sort((a, b) => {\n      const aValue = getSortableRowValues(a)[activeSortIndex];\n      const bValue = getSortableRowValues(b)[activeSortIndex];\n      if (aValue === bValue) {\n        return 0;\n      }\n      if (activeSortDirection === 'asc') {\n        return aValue > bValue ? 1 : -1;\n      } else {\n        return bValue > aValue ? 1 : -1;\n      }\n    });\n  }\n\n  const getSortParams = (columnIndex: number): ThProps['sort'] => ({\n    sortBy: {\n      index: activeSortIndex,\n      direction: activeSortDirection\n    },\n    onSort: (_event, index, direction) => {\n      setActiveSortIndex(index);\n      setActiveSortDirection(direction);\n    },\n    columnIndex\n  });\n\n  return (\n    <div style={{ height: '600px' }}>\n      <OuterScrollContainer>\n        <InnerScrollContainer>\n          <TableComposable aria-label=\"Sticky columns and header table\" gridBreakPoint=\"\" isStickyHeader>\n            <Thead>\n              <Tr>\n                <Th isStickyColumn modifier=\"truncate\" sort={getSortParams(0)}>\n                  {columnNames.name}\n                </Th>\n                <Th\n                  isStickyColumn\n                  stickyMinWidth=\"120px\"\n                  stickyLeftOffset=\"120px\"\n                  hasRightBorder\n                  modifier=\"truncate\"\n                  sort={getSortParams(1)}\n                >\n                  {columnNames.state}\n                </Th>\n                <Th modifier=\"truncate\">{columnNames.header3}</Th>\n                <Th modifier=\"truncate\">{columnNames.header4}</Th>\n                <Th modifier=\"truncate\">{columnNames.header5}</Th>\n                <Th modifier=\"truncate\">{columnNames.header6}</Th>\n                <Th modifier=\"truncate\">{columnNames.header7}</Th>\n                <Th modifier=\"truncate\">{columnNames.header8}</Th>\n                <Th modifier=\"truncate\">{columnNames.header9}</Th>\n              </Tr>\n            </Thead>\n            <Tbody>\n              {sortedFacts.map(fact => (\n                <Tr key={fact.name}>\n                  <Th isStickyColumn modifier=\"truncate\">\n                    {fact.name}\n                  </Th>\n                  <Th isStickyColumn stickyMinWidth=\"120px\" stickyLeftOffset=\"120px\" modifier=\"truncate\" hasRightBorder>\n                    <BlueprintIcon />\n                    {` ${fact.state}`}\n                  </Th>\n                  <Td modifier=\"nowrap\" dataLabel={columnNames.header3}>\n                    {fact.detail1}\n                  </Td>\n                  <Td modifier=\"nowrap\" dataLabel={columnNames.header4}>\n                    {fact.detail2}\n                  </Td>\n                  <Td modifier=\"nowrap\" dataLabel={columnNames.header5}>\n                    {fact.detail3}\n                  </Td>\n                  <Td modifier=\"nowrap\" dataLabel={columnNames.header6}>\n                    {fact.detail4}\n                  </Td>\n                  <Td modifier=\"nowrap\" dataLabel={columnNames.header7}>\n                    {fact.detail5}\n                  </Td>\n                  <Td modifier=\"nowrap\" dataLabel={columnNames.header8}>\n                    {fact.detail6}\n                  </Td>\n                  <Td modifier=\"nowrap\" dataLabel={columnNames.header9}>\n                    {fact.detail7}\n                  </Td>\n                </Tr>\n              ))}\n            </Tbody>\n          </TableComposable>\n        </InnerScrollContainer>\n      </OuterScrollContainer>\n    </div>\n  );\n};\n","title":"Composable: Sticky columns and header","lang":"ts"}}>
      
      <p {...{"className":"ws-p"}}>
        {`To maintain proper sticky behavior across sticky columns and header, `}
        
        <code {...{"className":"ws-code"}}>
          {`TableComposable`}
        </code>
        {` must be wrapped with `}
        
        <code {...{"className":"ws-code"}}>
          {`OuterScrollContainer`}
        </code>
        {` and `}
        
        <code {...{"className":"ws-code"}}>
          {`InnerScrollContainer`}
        </code>
        {` as shown in the example below.`}
      </p>
    </Example>,
  'Composable: Nested column headers': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { TableComposable, Thead, Tr, Th, Tbody, Td, InnerScrollContainer, ThProps } from '@patternfly/react-table';\nimport { Stack, StackItem } from '@patternfly/react-core';\n\ninterface PodConnection {\n  source: {\n    podName: string;\n    port: { num: number; protocol: string };\n  };\n  destination: {\n    podName: string;\n    port: { num: number; protocol: string };\n  };\n  timestamp: string;\n  protocol: string;\n  flowRate: string;\n  traffic: string;\n  packets: number;\n}\n\nexport const ComposableTableNestedHeaders: React.FunctionComponent = () => {\n  // In real usage, this data would come from some external source like an API via props.\n  const connections: PodConnection[] = [\n    {\n      source: { podName: 'api-pod-source-name', port: { num: 443, protocol: 'HTTPS' } },\n      destination: { podName: 'api-pod-destination-name', port: { num: 24, protocol: 'SMTP' } },\n      timestamp: '2021-06-22T19:58:24.000Z',\n      protocol: 'TCP',\n      flowRate: '1.9 Kbps',\n      traffic: '2.1 KB',\n      packets: 3\n    },\n    {\n      source: { podName: 'api-pod-source2-name', port: { num: 80, protocol: 'HTTP' } },\n      destination: { podName: 'api-pod-destination2-name', port: { num: 24, protocol: 'SMTP' } },\n      timestamp: '2021-06-22T21:42:01.000Z',\n      protocol: 'UDP',\n      flowRate: '3.4 Kbps',\n      traffic: '6.1 KB',\n      packets: 7\n    }\n  ];\n\n  const columnNames = {\n    pods: 'Pods',\n    source: 'Source',\n    destination: 'Destination',\n    datetime: 'Date & Time',\n    ports: 'Ports',\n    protocol: 'Protocol',\n    flowRate: 'Flow rate',\n    traffic: 'Traffic',\n    packets: 'Packets'\n  };\n\n  // Index of the currently sorted column\n  // Note: if you intend to make columns reorderable, you may instead want to use a non-numeric key\n  // as the identifier of the sorted column. See the \"Compound expandable\" example.\n  const [activeSortIndex, setActiveSortIndex] = React.useState<number | null>(null);\n\n  // Sort direction of the currently sorted column\n  const [activeSortDirection, setActiveSortDirection] = React.useState<'asc' | 'desc' | null>(null);\n\n  // Since OnSort specifies sorted columns by index, we need sortable values for our object by column index.\n  const getSortableRowValues = (connection: PodConnection): (string | number)[] => {\n    const { source, destination, timestamp, protocol, flowRate, traffic, packets } = connection;\n    return [\n      source.podName,\n      destination.podName,\n      timestamp,\n      source.port.num,\n      destination.port.num,\n      protocol,\n      flowRate,\n      traffic,\n      packets\n    ];\n  };\n\n  // Note that we perform the sort as part of the component's render logic and not in onSort.\n  // We shouldn't store the list of data in state because we don't want to have to sync that with props.\n  let sortedConnections = connections;\n  if (activeSortIndex !== null) {\n    sortedConnections = connections.sort((a, b) => {\n      const aValue = getSortableRowValues(a)[activeSortIndex];\n      const bValue = getSortableRowValues(b)[activeSortIndex];\n      if (typeof aValue === 'number') {\n        // Numeric sort\n        if (activeSortDirection === 'asc') {\n          return (aValue as number) - (bValue as number);\n        }\n        return (bValue as number) - (aValue as number);\n      } else {\n        // String sort\n        if (activeSortDirection === 'asc') {\n          return (aValue as string).localeCompare(bValue as string);\n        }\n        return (bValue as string).localeCompare(aValue as string);\n      }\n    });\n  }\n\n  const getSortParams = (columnIndex: number): ThProps['sort'] => ({\n    sortBy: {\n      index: activeSortIndex,\n      direction: activeSortDirection\n    },\n    onSort: (_event, index, direction) => {\n      setActiveSortIndex(index);\n      setActiveSortDirection(direction);\n    },\n    columnIndex\n  });\n\n  return (\n    <InnerScrollContainer>\n      <TableComposable aria-label=\"Nested column headers table\" gridBreakPoint=\"\">\n        <Thead hasNestedHeader>\n          <Tr>\n            <Th hasRightBorder colSpan={3}>\n              {columnNames.pods}\n            </Th>\n            <Th hasRightBorder colSpan={2}>\n              {columnNames.ports}\n            </Th>\n            <Th modifier=\"fitContent\" hasRightBorder rowSpan={2} sort={getSortParams(5)}>\n              {columnNames.protocol}\n            </Th>\n            <Th modifier=\"fitContent\" hasRightBorder rowSpan={2} sort={getSortParams(6)}>\n              {columnNames.flowRate}\n            </Th>\n            <Th modifier=\"fitContent\" hasRightBorder rowSpan={2} sort={getSortParams(7)}>\n              {columnNames.traffic}\n            </Th>\n            <Th modifier=\"fitContent\" rowSpan={2} sort={getSortParams(8)}>\n              {columnNames.packets}\n            </Th>\n          </Tr>\n          <Tr>\n            <Th isSubheader sort={getSortParams(0)}>\n              {columnNames.source}\n            </Th>\n            <Th isSubheader sort={getSortParams(1)}>\n              {columnNames.destination}\n            </Th>\n            <Th isSubheader modifier=\"fitContent\" hasRightBorder sort={getSortParams(2)}>\n              {columnNames.datetime}\n            </Th>\n            <Th isSubheader modifier=\"fitContent\" sort={getSortParams(3)}>\n              {columnNames.source}\n            </Th>\n            <Th isSubheader modifier=\"fitContent\" hasRightBorder sort={getSortParams(4)}>\n              {columnNames.destination}\n            </Th>\n          </Tr>\n        </Thead>\n        <Tbody>\n          {sortedConnections.map(connection => (\n            <Tr key={connection.source.podName}>\n              <Td dataLabel={columnNames.source}>{connection.source.podName}</Td>\n              <Td dataLabel={columnNames.destination}>{connection.destination.podName}</Td>\\\n              <Td dataLabel={columnNames.datetime}>\n                <div>\n                  <span>{new Date(connection.timestamp).toDateString()}</span>{' '}\n                  <span className=\"pf-u-color-200\">{new Date(connection.timestamp).toLocaleTimeString()}</span>\n                </div>\n              </Td>\n              <Td dataLabel={columnNames.source}>\n                <Stack>\n                  <StackItem>\n                    <span>{connection.source.port.num}</span>\n                  </StackItem>\n                  <StackItem>\n                    <span className=\"pf-u-color-200\">({connection.source.port.protocol})</span>\n                  </StackItem>\n                </Stack>\n              </Td>\n              <Td dataLabel={columnNames.destination}>\n                <Stack>\n                  <StackItem>\n                    <span>{connection.destination.port.num}</span>\n                  </StackItem>\n                  <StackItem>\n                    <span className=\"pf-u-color-200\">({connection.destination.port.protocol})</span>\n                  </StackItem>\n                </Stack>\n              </Td>\n              <Td dataLabel={columnNames.protocol}>{connection.protocol}</Td>\n              <Td dataLabel={columnNames.flowRate}>{connection.flowRate}</Td>\n              <Td dataLabel={columnNames.traffic}>{connection.traffic}</Td>\n              <Td dataLabel={columnNames.packets}>{connection.packets}</Td>\n            </Tr>\n          ))}\n        </Tbody>\n      </TableComposable>\n    </InnerScrollContainer>\n  );\n};\n","title":"Composable: Nested column headers","lang":"ts"}}>
      
    </Example>,
  'Composable: Nested column headers and expandable rows': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  TableComposable,\n  Thead,\n  Tr,\n  Th,\n  Tbody,\n  Td,\n  InnerScrollContainer,\n  ExpandableRowContent\n} from '@patternfly/react-table';\nimport { Button } from '@patternfly/react-core';\n\ninterface Team {\n  name: string;\n  members: {\n    lead: string;\n    interaction: string;\n    visual: string;\n  };\n  email: string;\n  description: string;\n}\n\nexport const ComposableTableNestedExpandable: React.FunctionComponent = () => {\n  // In real usage, this data would come from some external source like an API via props.\n  const teams: Team[] = [\n    {\n      name: 'Developer program 1',\n      members: { lead: 'Person 1', interaction: 'Person 2', visual: 'Person 3' },\n      email: 'devteam1@example.com',\n      description:\n        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'\n    },\n    {\n      name: 'Developer program 2',\n      members: { lead: 'Person A', interaction: 'Person B', visual: 'Person C' },\n      email: 'devteam2@example.com',\n      description:\n        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'\n    },\n    {\n      name: 'Developer program 3',\n      members: { lead: 'Person X', interaction: 'Person Y', visual: 'Person Z' },\n      email: 'devteam3@example.com',\n      description:\n        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'\n    }\n  ];\n\n  const columnNames = {\n    team: 'Team',\n    members: 'Members',\n    lead: 'Design Lead',\n    interaction: 'Interaction Designer',\n    visual: 'Visual Designer',\n    contact: 'Contact'\n  };\n\n  // In this example, expanded rows are tracked by the team names from each row. This could be any unique identifier.\n  // This is to prevent state from being based on row order index in case we later add sorting.\n  // Note that this behavior is very similar to selection state.\n  const [expandedTeamNames, setExpandedTeamNames] = React.useState<string[]>([]);\n  const setTeamExpanded = (team: Team, isExpanding = true) =>\n    setExpandedTeamNames(prevExpanded => {\n      const otherExpandedTeamNames = prevExpanded.filter(t => t !== team.name);\n      return isExpanding ? [...otherExpandedTeamNames, team.name] : otherExpandedTeamNames;\n    });\n  const isTeamExpanded = (team: Team) => expandedTeamNames.includes(team.name);\n\n  return (\n    <InnerScrollContainer>\n      <TableComposable aria-label=\"Nested column headers with expandable rows table\" gridBreakPoint=\"\">\n        <Thead hasNestedHeader>\n          <Tr>\n            <Th rowSpan={2} />\n            <Th width={35} rowSpan={2} hasRightBorder>\n              {columnNames.team}\n            </Th>\n            <Th colSpan={3} hasRightBorder>\n              {columnNames.members}\n            </Th>\n            <Th width={25} rowSpan={2}>\n              {columnNames.contact}\n            </Th>\n          </Tr>\n          <Tr resetOffset>\n            <Th isSubheader>{columnNames.lead}</Th>\n            <Th isSubheader>{columnNames.interaction}</Th>\n            <Th isSubheader hasRightBorder>\n              {columnNames.visual}\n            </Th>\n          </Tr>\n        </Thead>\n        {teams.map((team, rowIndex) => (\n          <Tbody key={team.name} isExpanded={isTeamExpanded(team)}>\n            <Tr>\n              <Td\n                expand={{\n                  rowIndex,\n                  isExpanded: isTeamExpanded(team),\n                  onToggle: () => setTeamExpanded(team, !isTeamExpanded(team)),\n                  expandId: 'composable-nested-expandable-example'\n                }}\n              />\n              <Td dataLabel={columnNames.team}>{team.name}</Td>\n              <Td dataLabel={columnNames.lead}>{team.members.lead}</Td>\n              <Td dataLabel={columnNames.interaction}>{team.members.interaction}</Td>\n              <Td dataLabel={columnNames.visual}>{team.members.visual}</Td>\n              <Td dataLabel={columnNames.contact}>\n                <Button variant=\"link\" component=\"a\" href={`mailto:${team.email}`} isInline>\n                  Email team {rowIndex}\n                </Button>\n              </Td>\n            </Tr>\n            <Tr isExpanded={isTeamExpanded(team)}>\n              <Td dataLabel={`Team ${team.name} description`} colSpan={6}>\n                <ExpandableRowContent>{team.description}</ExpandableRowContent>\n              </Td>\n            </Tr>\n          </Tbody>\n        ))}\n      </TableComposable>\n    </InnerScrollContainer>\n  );\n};\n","title":"Composable: Nested column headers and expandable rows","lang":"ts"}}>
      
    </Example>,
  'Composable: Expandable with nested table': props => 
    <Example {...pageData} {...props} {...{"code":"/* eslint-disable no-console */\nimport React from 'react';\nimport {\n  TableComposable,\n  Thead,\n  Tr,\n  Th,\n  Tbody,\n  Td,\n  ExpandableRowContent,\n  ActionsColumn,\n  IAction\n} from '@patternfly/react-table';\n\ninterface Repository {\n  name: string;\n  branches: string;\n  prs: string;\n  nestedComponent?: React.ReactNode;\n  link?: React.ReactNode;\n  noPadding?: boolean;\n}\ninterface NestedRepository {\n  name: string;\n  branches: string | null;\n  prs: string | null;\n  workspaces: string | null;\n  lastCommit: string | null;\n}\n\nconst NestedReposTable: React.FunctionComponent = () => {\n  // In real usage, this data would come from some external source like an API via props.\n  const prs: NestedRepository[] = [\n    { name: 'Repository 1', branches: '25', prs: '25', workspaces: '5', lastCommit: '2 days ago' },\n    { name: 'Repository 2', branches: '25', prs: '25', workspaces: '5', lastCommit: '2 days ago' },\n    { name: 'Repository 3', branches: '25', prs: '25', workspaces: '5', lastCommit: '2 days ago' },\n    { name: 'Repository 4', branches: '25', prs: '25', workspaces: '5', lastCommit: '2 days ago' }\n  ];\n\n  const columnNames = {\n    name: 'Repositories',\n    branches: 'Branches',\n    prs: 'Pull requests',\n    workspaces: 'Workspaces',\n    lastCommit: 'Last commit'\n  };\n\n  return (\n    <TableComposable aria-label=\"Simple table\" variant=\"compact\">\n      <Thead>\n        <Tr>\n          <Th>{columnNames.name}</Th>\n          <Th>{columnNames.branches}</Th>\n          <Th>{columnNames.prs}</Th>\n          <Th>{columnNames.workspaces}</Th>\n          <Th>{columnNames.lastCommit}</Th>\n        </Tr>\n      </Thead>\n      <Tbody>\n        {prs.map(repo => (\n          <Tr key={repo.name}>\n            <Td dataLabel={columnNames.name}>{repo.name}</Td>\n            <Td dataLabel={columnNames.branches}>{repo.branches}</Td>\n            <Td dataLabel={columnNames.prs}>{repo.prs}</Td>\n            <Td dataLabel={columnNames.workspaces}>{repo.workspaces}</Td>\n            <Td dataLabel={columnNames.lastCommit}>{repo.lastCommit}</Td>\n          </Tr>\n        ))}\n      </Tbody>\n    </TableComposable>\n  );\n};\n\nexport const ComposableTableExpandable: React.FunctionComponent = () => {\n  // In real usage, this data would come from some external source like an API via props.\n  const repositories: Repository[] = [\n    { name: 'Node 1', branches: '10', prs: '2', nestedComponent: <NestedReposTable />, link: <a>Link 1</a> },\n    { name: 'Node 2', branches: '3', prs: '4', link: <a>Link 2</a> },\n    {\n      name: 'Node 3',\n      branches: '11',\n      prs: '7',\n      nestedComponent: (\n        <p>\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id\n          est laborum.\n        </p>\n      ),\n      link: <a>Link 3</a>\n    },\n    {\n      name: 'Node 4',\n      branches: '11',\n      prs: '7',\n      nestedComponent: 'Expandable row content has no padding.',\n      link: <a>Link 4</a>,\n      noPadding: true\n    }\n  ];\n\n  const columnNames = {\n    name: 'Repositories',\n    branches: 'Branches',\n    prs: 'Pull requests',\n    link: 'Link',\n    action: 'Action'\n  };\n  // In this example, expanded rows are tracked by the repo names from each row. This could be any unique identifier.\n  // This is to prevent state from being based on row order index in case we later add sorting.\n  // Note that this behavior is very similar to selection state.\n  const initialExpandedRepoNames = repositories.filter(repo => !!repo.nestedComponent).map(repo => repo.name); // Default to all expanded\n  const [expandedRepoNames, setExpandedRepoNames] = React.useState<string[]>(initialExpandedRepoNames);\n  const setRepoExpanded = (repo: Repository, isExpanding = true) =>\n    setExpandedRepoNames(prevExpanded => {\n      const otherExpandedRepoNames = prevExpanded.filter(r => r !== repo.name);\n      return isExpanding ? [...otherExpandedRepoNames, repo.name] : otherExpandedRepoNames;\n    });\n  const isRepoExpanded = (repo: Repository) => expandedRepoNames.includes(repo.name);\n\n  const defaultActions = (repo: Repository): IAction[] => [\n    {\n      title: 'Some action',\n      onClick: () => console.log(`clicked on Some action, on row ${repo.name}`)\n    },\n    {\n      title: <a href=\"https://www.patternfly.org\">Link action</a>\n    },\n    {\n      isSeparator: true\n    },\n    {\n      title: 'Third action',\n      onClick: () => console.log(`clicked on Third action, on row ${repo.name}`)\n    }\n  ];\n\n  return (\n    <TableComposable aria-label=\"Simple table\">\n      <Thead>\n        <Tr>\n          <Td />\n          <Th width={20}>{columnNames.name}</Th>\n          <Th>{columnNames.branches}</Th>\n          <Th>{columnNames.prs}</Th>\n          <Th>{columnNames.link}</Th>\n          <Th>{columnNames.action}</Th>\n        </Tr>\n      </Thead>\n      {repositories.map((repo, rowIndex) => (\n        <Tbody key={repo.name} isExpanded={isRepoExpanded(repo)}>\n          <Tr>\n            <Td\n              expand={\n                repo.nestedComponent\n                  ? {\n                      rowIndex,\n                      isExpanded: isRepoExpanded(repo),\n                      onToggle: () => setRepoExpanded(repo, !isRepoExpanded(repo)),\n                      expandId: 'composable-nested-table-expandable-example'\n                    }\n                  : undefined\n              }\n            />\n            <Td dataLabel={columnNames.name}>{repo.name}</Td>\n            <Td dataLabel={columnNames.branches}>{repo.branches}</Td>\n            <Td dataLabel={columnNames.prs}>{repo.prs}</Td>\n            <Td dataLabel={columnNames.link}>{repo.link}</Td>\n            <Td dataLabel={columnNames.action}>\n              <ActionsColumn items={defaultActions(repo)} />\n            </Td>\n          </Tr>\n          {repo.nestedComponent ? (\n            <Tr isExpanded={isRepoExpanded(repo)}>\n              <Td\n                noPadding={repo.noPadding}\n                dataLabel={`${columnNames.name} expended`}\n                colSpan={Object.keys(columnNames).length + 1}\n              >\n                <ExpandableRowContent>{repo.nestedComponent}</ExpandableRowContent>\n              </Td>\n            </Tr>\n          ) : null}\n        </Tbody>\n      ))}\n    </TableComposable>\n  );\n};\n","title":"Composable: Expandable with nested table","lang":"ts"}}>
      
    </Example>,
  'Composable: Nested sticky header': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { TableComposable, Thead, Tr, Th, Tbody, Td, InnerScrollContainer, ThProps } from '@patternfly/react-table';\nimport { Stack, StackItem } from '@patternfly/react-core';\n\ninterface PodConnection {\n  source: {\n    podName: string;\n    port: { num: number; protocol: string };\n  };\n  destination: {\n    podName: string;\n    port: { num: number; protocol: string };\n  };\n  timestamp: string;\n  protocol: string;\n  flowRate: string;\n  traffic: string;\n  packets: number;\n}\n\nexport const ComposableTableNestedHeaders: React.FunctionComponent = () => {\n  // In real usage, this data would come from some external source like an API via props.\n  const connections: PodConnection[] = [\n    {\n      source: { podName: 'api-pod-source-name', port: { num: 443, protocol: 'HTTPS' } },\n      destination: { podName: 'api-pod-destination-name', port: { num: 24, protocol: 'SMTP' } },\n      timestamp: '2021-06-22T19:58:24.000Z',\n      protocol: 'TCP',\n      flowRate: '1.9 Kbps',\n      traffic: '2.1 KB',\n      packets: 3\n    },\n    {\n      source: { podName: 'api-pod-source2-name', port: { num: 80, protocol: 'HTTP' } },\n      destination: { podName: 'api-pod-destination2-name', port: { num: 24, protocol: 'SMTP' } },\n      timestamp: '2021-06-22T21:42:01.000Z',\n      protocol: 'UDP',\n      flowRate: '3.4 Kbps',\n      traffic: '6.1 KB',\n      packets: 7\n    }\n  ];\n\n  const columnNames = {\n    pods: 'Pods',\n    source: 'Source',\n    destination: 'Destination',\n    datetime: 'Date & Time',\n    ports: 'Ports',\n    protocol: 'Protocol',\n    flowRate: 'Flow rate',\n    traffic: 'Traffic',\n    packets: 'Packets'\n  };\n\n  // Index of the currently sorted column\n  // Note: if you intend to make columns reorderable, you may instead want to use a non-numeric key\n  // as the identifier of the sorted column. See the \"Compound expandable\" example.\n  const [activeSortIndex, setActiveSortIndex] = React.useState<number | null>(null);\n\n  // Sort direction of the currently sorted column\n  const [activeSortDirection, setActiveSortDirection] = React.useState<'asc' | 'desc' | null>(null);\n\n  // Since OnSort specifies sorted columns by index, we need sortable values for our object by column index.\n  const getSortableRowValues = (connection: PodConnection): (string | number)[] => {\n    const { source, destination, timestamp, protocol, flowRate, traffic, packets } = connection;\n    return [\n      source.podName,\n      destination.podName,\n      timestamp,\n      source.port.num,\n      destination.port.num,\n      protocol,\n      flowRate,\n      traffic,\n      packets\n    ];\n  };\n\n  // Note that we perform the sort as part of the component's render logic and not in onSort.\n  // We shouldn't store the list of data in state because we don't want to have to sync that with props.\n  let sortedConnections = connections;\n  if (activeSortIndex !== null) {\n    sortedConnections = connections.sort((a, b) => {\n      const aValue = getSortableRowValues(a)[activeSortIndex];\n      const bValue = getSortableRowValues(b)[activeSortIndex];\n      if (typeof aValue === 'number') {\n        // Numeric sort\n        if (activeSortDirection === 'asc') {\n          return (aValue as number) - (bValue as number);\n        }\n        return (bValue as number) - (aValue as number);\n      } else {\n        // String sort\n        if (activeSortDirection === 'asc') {\n          return (aValue as string).localeCompare(bValue as string);\n        }\n        return (bValue as string).localeCompare(aValue as string);\n      }\n    });\n  }\n\n  const getSortParams = (columnIndex: number): ThProps['sort'] => ({\n    sortBy: {\n      index: activeSortIndex as number,\n      direction: activeSortDirection as 'asc' | 'desc'\n    },\n    onSort: (_event, index, direction) => {\n      setActiveSortIndex(index);\n      setActiveSortDirection(direction);\n    },\n    columnIndex\n  });\n\n  return (\n    <InnerScrollContainer>\n      <TableComposable aria-label=\"Nested column headers table\" gridBreakPoint=\"\" isStickyHeader>\n        <Thead hasNestedHeader>\n          <Tr>\n            <Th hasRightBorder colSpan={3}>\n              {columnNames.pods}\n            </Th>\n            <Th hasRightBorder colSpan={2}>\n              {columnNames.ports}\n            </Th>\n            <Th modifier=\"fitContent\" hasRightBorder rowSpan={2} sort={getSortParams(5)}>\n              {columnNames.protocol}\n            </Th>\n            <Th modifier=\"fitContent\" hasRightBorder rowSpan={2} sort={getSortParams(6)}>\n              {columnNames.flowRate}\n            </Th>\n            <Th modifier=\"fitContent\" hasRightBorder rowSpan={2} sort={getSortParams(7)}>\n              {columnNames.traffic}\n            </Th>\n            <Th modifier=\"fitContent\" rowSpan={2} sort={getSortParams(8)}>\n              {columnNames.packets}\n            </Th>\n          </Tr>\n          <Tr>\n            <Th isSubheader sort={getSortParams(0)}>\n              {columnNames.source}\n            </Th>\n            <Th isSubheader sort={getSortParams(1)}>\n              {columnNames.destination}\n            </Th>\n            <Th isSubheader modifier=\"fitContent\" hasRightBorder sort={getSortParams(2)}>\n              {columnNames.datetime}\n            </Th>\n            <Th isSubheader modifier=\"fitContent\" sort={getSortParams(3)}>\n              {columnNames.source}\n            </Th>\n            <Th isSubheader modifier=\"fitContent\" hasRightBorder sort={getSortParams(4)}>\n              {columnNames.destination}\n            </Th>\n          </Tr>\n          <Tr isBorderRow aria-hidden=\"true\">\n            <Td colSpan={9}></Td>\n          </Tr>\n        </Thead>\n        <Tbody>\n          {sortedConnections.map(connection => (\n            <Tr key={connection.source.podName}>\n              <Td dataLabel={columnNames.source}>{connection.source.podName}</Td>\n              <Td dataLabel={columnNames.destination}>{connection.destination.podName}</Td>\\\n              <Td dataLabel={columnNames.datetime}>\n                <div>\n                  <span>{new Date(connection.timestamp).toDateString()}</span>{' '}\n                  <span className=\"pf-u-color-200\">{new Date(connection.timestamp).toLocaleTimeString()}</span>\n                </div>\n              </Td>\n              <Td dataLabel={columnNames.source}>\n                <Stack>\n                  <StackItem>\n                    <span>{connection.source.port.num}</span>\n                  </StackItem>\n                  <StackItem>\n                    <span className=\"pf-u-color-200\">({connection.source.port.protocol})</span>\n                  </StackItem>\n                </Stack>\n              </Td>\n              <Td dataLabel={columnNames.destination}>\n                <Stack>\n                  <StackItem>\n                    <span>{connection.destination.port.num}</span>\n                  </StackItem>\n                  <StackItem>\n                    <span className=\"pf-u-color-200\">({connection.destination.port.protocol})</span>\n                  </StackItem>\n                </Stack>\n              </Td>\n              <Td dataLabel={columnNames.protocol}>{connection.protocol}</Td>\n              <Td dataLabel={columnNames.flowRate}>{connection.flowRate}</Td>\n              <Td dataLabel={columnNames.traffic}>{connection.traffic}</Td>\n              <Td dataLabel={columnNames.packets}>{connection.packets}</Td>\n            </Tr>\n          ))}\n        </Tbody>\n      </TableComposable>\n    </InnerScrollContainer>\n  );\n};\n","title":"Composable: Nested sticky header","lang":"ts"}}>
      
    </Example>,
  'Composable: Striped': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { TableComposable, Caption, Thead, Tr, Th, Tbody, Td } from '@patternfly/react-table';\n\ninterface Repository {\n  name: string;\n  branches: number;\n  prs: number;\n  workspaces: number;\n  lastCommit: string;\n}\n\nexport const ComposableTableStriped: React.FunctionComponent = () => {\n  // In real usage, this data would come from some external source like an API via props.\n  const repositories: Repository[] = [\n    { name: 'Repository 1', branches: 10, prs: 25, workspaces: 5, lastCommit: '2 days ago' },\n    { name: 'Repository 2', branches: 10, prs: 25, workspaces: 5, lastCommit: '2 days ago' },\n    { name: 'Repository 3', branches: 10, prs: 25, workspaces: 5, lastCommit: '2 days ago' },\n    { name: 'Repository 4', branches: 10, prs: 25, workspaces: 5, lastCommit: '2 days ago' }\n  ];\n\n  const columnNames = {\n    name: 'Repositories',\n    branches: 'Branches',\n    prs: 'Pull requests',\n    workspaces: 'Workspaces',\n    lastCommit: 'Last commit'\n  };\n\n  return (\n    <TableComposable aria-label=\"Simple table\" isStriped>\n      <Caption>Simple striped table using composable components</Caption>\n      <Thead>\n        <Tr>\n          <Th>{columnNames.name}</Th>\n          <Th>{columnNames.branches}</Th>\n          <Th>{columnNames.prs}</Th>\n          <Th>{columnNames.workspaces}</Th>\n          <Th>{columnNames.lastCommit}</Th>\n        </Tr>\n      </Thead>\n      <Tbody>\n        {repositories.map(repo => (\n          <Tr key={repo.name}>\n            <Td dataLabel={columnNames.name}>{repo.name}</Td>\n            <Td dataLabel={columnNames.branches}>{repo.branches}</Td>\n            <Td dataLabel={columnNames.prs}>{repo.prs}</Td>\n            <Td dataLabel={columnNames.workspaces}>{repo.workspaces}</Td>\n            <Td dataLabel={columnNames.lastCommit}>{repo.lastCommit}</Td>\n          </Tr>\n        ))}\n      </Tbody>\n    </TableComposable>\n  );\n};\n","title":"Composable: Striped","lang":"ts"}}>
      
      <p {...{"className":"ws-p"}}>
        {`To apply striping to a basic table, add the `}
        
        <code {...{"className":"ws-code"}}>
          {`isStriped`}
        </code>
        {` property to `}
        
        <code {...{"className":"ws-code"}}>
          {`TableComposable`}
        </code>
        {`.`}
      </p>
    </Example>,
  'Composable: Striped expandable': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { TableComposable, Thead, Tr, Th, Tbody, Td, ExpandableRowContent } from '@patternfly/react-table';\nimport { Checkbox } from '@patternfly/react-core';\n\ninterface Repository {\n  name: string;\n  branches: string;\n  prs: string;\n  workspaces: string;\n  lastCommit: string;\n  details?: {\n    detail1?: string;\n    detail2?: string;\n    detail3?: string;\n    detailFormat: 0 | 1 | 2 | 3;\n  };\n}\n\nexport const ComposableTableStripedExpandable: React.FunctionComponent = () => {\n  // In real usage, this data would come from some external source like an API via props.\n  const repositories: Repository[] = [\n    { name: 'one', branches: 'two', prs: 'a', workspaces: 'four', lastCommit: 'five' },\n    {\n      name: 'parent 1',\n      branches: 'two',\n      prs: 'k',\n      workspaces: 'four',\n      lastCommit: 'five',\n      // This `details` structure is just for this example. You can drive expanded content from any kind of data.\n      details: { detailFormat: 0, detail1: 'single cell' }\n    },\n    {\n      name: 'parent 2',\n      branches: 'two',\n      prs: 'b',\n      workspaces: 'four',\n      lastCommit: 'five',\n      details: { detailFormat: 1, detail1: 'single cell - fullWidth' }\n    },\n    {\n      name: 'parent 3',\n      branches: '2',\n      prs: 'b',\n      workspaces: 'four',\n      lastCommit: 'five',\n      details: { detailFormat: 2, detail1: 'single cell - noPadding' }\n    },\n    {\n      name: 'parent 4',\n      branches: '2',\n      prs: 'b',\n      workspaces: 'four',\n      lastCommit: 'five',\n      details: { detailFormat: 3, detail1: 'single cell - fullWidth & noPadding' }\n    },\n    {\n      name: 'parent 5',\n      branches: '2',\n      prs: 'b',\n      workspaces: 'four',\n      lastCommit: 'five',\n      details: {\n        detailFormat: 0,\n        detail1: \"spans 'Repositories and 'Branches'\",\n        detail2: \"spans 'Pull requests' and 'Workspaces', and 'Last commit'\"\n      }\n    },\n    {\n      name: 'parent 6',\n      branches: '2',\n      prs: 'b',\n      workspaces: 'four',\n      lastCommit: 'five',\n      details: {\n        detailFormat: 1,\n        detail1: \"fullWidth, spans the collapsible column and 'Repositories'\",\n        detail2: \"fullWidth, spans 'Branches' and 'Pull requests'\",\n        detail3: \"fullWidth, spans 'Workspaces' and 'Last commit'\"\n      }\n    }\n  ];\n\n  const columnNames = {\n    name: 'Repositories',\n    branches: 'Branches',\n    prs: 'Pull requests',\n    workspaces: 'Workspaces',\n    lastCommit: 'Last commit'\n  };\n\n  // In this example, expanded rows are tracked by the repo names from each row. This could be any unique identifier.\n  // This is to prevent state from being based on row order index in case we later add sorting.\n  // Note that this behavior is very similar to selection state.\n  const initialExpandedRepoNames = repositories.filter(repo => !!repo.details).map(repo => repo.name); // Default to all expanded\n  const [expandedRepoNames, setExpandedRepoNames] = React.useState<string[]>(initialExpandedRepoNames);\n  const setRepoExpanded = (repo: Repository, isExpanding = true) =>\n    setExpandedRepoNames(prevExpanded => {\n      const otherExpandedRepoNames = prevExpanded.filter(r => r !== repo.name);\n      return isExpanding ? [...otherExpandedRepoNames, repo.name] : otherExpandedRepoNames;\n    });\n  const isRepoExpanded = (repo: Repository) => expandedRepoNames.includes(repo.name);\n\n  const [isExampleCompact, setIsExampleCompact] = React.useState(true);\n\n  return (\n    <React.Fragment>\n      <Checkbox\n        label=\"Compact\"\n        isChecked={isExampleCompact}\n        onChange={checked => setIsExampleCompact(checked)}\n        aria-label=\"toggle striped compact variation\"\n        id=\"toggle-compact-striped\"\n        name=\"toggle-compact-striped\"\n      />\n      <TableComposable\n        aria-label=\"Expandable table\"\n        variant={isExampleCompact ? 'compact' : undefined}\n        isStriped\n        isExpandable\n      >\n        <Thead>\n          <Tr>\n            <Th />\n            <Th width={25}>{columnNames.name}</Th>\n            <Th width={10}>{columnNames.branches}</Th>\n            <Th width={15}>{columnNames.prs}</Th>\n            <Th width={30}>{columnNames.workspaces}</Th>\n            <Th width={10}>{columnNames.lastCommit}</Th>\n          </Tr>\n        </Thead>\n        {repositories.map((repo, rowIndex) => {\n          // Some arbitrary examples of how you could customize the child row based on your needs\n          let childIsFullWidth = false;\n          let childHasNoPadding = false;\n          let detail1Colspan = 1;\n          let detail2Colspan = 1;\n          let detail3Colspan = 1;\n          if (repo.details) {\n            const { detail1, detail2, detail3, detailFormat } = repo.details;\n            const numColumns = 5;\n            childIsFullWidth = [1, 3].includes(detailFormat);\n            childHasNoPadding = [2, 3].includes(detailFormat);\n            if (detail1 && !detail2 && !detail3) {\n              detail1Colspan = childIsFullWidth ? numColumns : numColumns + 1; // Account for toggle column\n            } else if (detail1 && detail2 && !detail3) {\n              detail1Colspan = 2;\n              detail2Colspan = childIsFullWidth ? 3 : 4;\n            } else if (detail1 && detail2 && detail3) {\n              detail1Colspan = 2;\n              detail2Colspan = 2;\n              detail3Colspan = childIsFullWidth ? 1 : 2;\n            }\n          }\n          return (\n            <Tbody key={repo.name} isExpanded={isRepoExpanded(repo)}>\n              <Tr>\n                <Td\n                  expand={\n                    repo.details\n                      ? {\n                          rowIndex,\n                          isExpanded: isRepoExpanded(repo),\n                          onToggle: () => setRepoExpanded(repo, !isRepoExpanded(repo))\n                        }\n                      : undefined\n                  }\n                />\n                <Td dataLabel={columnNames.name}>{repo.name}</Td>\n                <Td dataLabel={columnNames.branches}>{repo.branches}</Td>\n                <Td dataLabel={columnNames.prs}>{repo.prs}</Td>\n                <Td dataLabel={columnNames.workspaces}>{repo.workspaces}</Td>\n                <Td dataLabel={columnNames.lastCommit}>{repo.lastCommit}</Td>\n              </Tr>\n              {repo.details ? (\n                <Tr isExpanded={isRepoExpanded(repo)}>\n                  {!childIsFullWidth ? <Td /> : null}\n                  {repo.details.detail1 ? (\n                    <Td dataLabel=\"Repo detail 1\" noPadding={childHasNoPadding} colSpan={detail1Colspan}>\n                      <ExpandableRowContent>{repo.details.detail1}</ExpandableRowContent>\n                    </Td>\n                  ) : null}\n                  {repo.details.detail2 ? (\n                    <Td dataLabel=\"Repo detail 2\" noPadding={childHasNoPadding} colSpan={detail2Colspan}>\n                      <ExpandableRowContent>{repo.details.detail2}</ExpandableRowContent>\n                    </Td>\n                  ) : null}\n                  {repo.details.detail3 ? (\n                    <Td dataLabel=\"Repo detail 3\" noPadding={childHasNoPadding} colSpan={detail3Colspan}>\n                      <ExpandableRowContent>{repo.details.detail3}</ExpandableRowContent>\n                    </Td>\n                  ) : null}\n                </Tr>\n              ) : null}\n            </Tbody>\n          );\n        })}\n      </TableComposable>\n    </React.Fragment>\n  );\n};\n","title":"Composable: Striped expandable","lang":"ts"}}>
      
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
          {`TableComposable`}
        </code>
        {`.`}
      </p>
    </Example>,
  'Composable: Striped multiple tobdy': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { TableComposable, Caption, Thead, Tr, Th, Tbody, Td } from '@patternfly/react-table';\n\ninterface Repository {\n  name: string;\n  branches: number;\n  description?: string;\n  prs: number;\n  workspaces: number;\n  lastCommit: string;\n}\n\nexport const ComposableTableStripedMultipleTbody: React.FunctionComponent = () => {\n  // In real usage, this data would come from some external source like an API via props.\n  const repositories1: Repository[] = [\n    {\n      name: 'tbody 1 - Repository 1',\n      description: '(odd rows striped)',\n      branches: 10,\n      prs: 25,\n      workspaces: 5,\n      lastCommit: '2 days ago'\n    },\n    { name: 'tbody 1 - Repository 2', branches: 10, prs: 25, workspaces: 5, lastCommit: '2 days ago' },\n    {\n      name: 'tbody 1 - Repository 3',\n      description: '(odd rows striped)',\n      branches: 10,\n      prs: 25,\n      workspaces: 5,\n      lastCommit: '2 days ago'\n    }\n  ];\n\n  const repositories2: Repository[] = [\n    { name: 'tbody 2 - Repository 4', branches: 10, prs: 25, workspaces: 5, lastCommit: '2 days ago' },\n    {\n      name: 'tbody 2 - Repository 5',\n      description: '(even rows striped)',\n      branches: 10,\n      prs: 25,\n      workspaces: 5,\n      lastCommit: '2 days ago'\n    },\n    { name: 'tbody 2 - Repository 6', branches: 10, prs: 25, workspaces: 5, lastCommit: '2 days ago' },\n    {\n      name: 'tbody 2 - Repository 7',\n      description: '(even rows striped)',\n      branches: 10,\n      prs: 25,\n      workspaces: 5,\n      lastCommit: '2 days ago'\n    }\n  ];\n\n  const columnNames = {\n    name: 'Repositories',\n    branches: 'Branches',\n    prs: 'Pull requests',\n    workspaces: 'Workspaces',\n    lastCommit: 'Last commit'\n  };\n\n  return (\n    <TableComposable aria-label=\"Simple table\">\n      <Caption>Striped table using multiple tbody components</Caption>\n      <Thead>\n        <Tr>\n          <Th>{columnNames.name}</Th>\n          <Th>{columnNames.branches}</Th>\n          <Th>{columnNames.prs}</Th>\n          <Th>{columnNames.workspaces}</Th>\n          <Th>{columnNames.lastCommit}</Th>\n        </Tr>\n      </Thead>\n      <Tbody isOddStriped>\n        {repositories1.map(repo => (\n          <Tr key={repo.name}>\n            <Td dataLabel={columnNames.name}>\n              {repo.description ? (\n                <React.Fragment>\n                  {repo.name}\n                  <br />\n                  <small>{repo.description}</small>\n                </React.Fragment>\n              ) : (\n                repo.name\n              )}\n            </Td>\n            <Td dataLabel={columnNames.branches}>{repo.branches}</Td>\n            <Td dataLabel={columnNames.prs}>{repo.prs}</Td>\n            <Td dataLabel={columnNames.workspaces}>{repo.workspaces}</Td>\n            <Td dataLabel={columnNames.lastCommit}>{repo.lastCommit}</Td>\n          </Tr>\n        ))}\n      </Tbody>\n      <Tbody isEvenStriped>\n        {repositories2.map(repo => (\n          <Tr key={repo.name}>\n            <Td dataLabel={columnNames.name}>\n              {repo.description ? (\n                <React.Fragment>\n                  {repo.name}\n                  <br />\n                  <small>{repo.description}</small>\n                </React.Fragment>\n              ) : (\n                repo.name\n              )}\n            </Td>\n            <Td dataLabel={columnNames.branches}>{repo.branches}</Td>\n            <Td dataLabel={columnNames.prs}>{repo.prs}</Td>\n            <Td dataLabel={columnNames.workspaces}>{repo.workspaces}</Td>\n            <Td dataLabel={columnNames.lastCommit}>{repo.lastCommit}</Td>\n          </Tr>\n        ))}\n      </Tbody>\n    </TableComposable>\n  );\n};\n","title":"Composable: Striped multiple tobdy","lang":"ts"}}>
      
      <p {...{"className":"ws-p"}}>
        {`When there are multiple `}
        
        <code {...{"className":"ws-code"}}>
          {`Tbody`}
        </code>
        {` components within a table, a more granular application of striping may be controlled by adding either the `}
        
        <code {...{"className":"ws-code"}}>
          {`isEvenStriped`}
        </code>
        {` or `}
        
        <code {...{"className":"ws-code"}}>
          {`isOddStriped`}
        </code>
        {` properties to `}
        
        <code {...{"className":"ws-code"}}>
          {`Tbody`}
        </code>
        {`. These properties will stripe even or odd rows within that `}
        
        <code {...{"className":"ws-code"}}>
          {`Tbody`}
        </code>
        {` respectively.`}
      </p>
    </Example>,
  'Composable: Striped tr': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { TableComposable, Caption, Thead, Tr, Th, Tbody, Td } from '@patternfly/react-table';\n\ninterface Repository {\n  name: string;\n  branches: number;\n  prs: number;\n  workspaces: number;\n  lastCommit: string;\n}\n\nexport const ComposableTableStripedTr: React.FunctionComponent = () => {\n  // In real usage, this data would come from some external source like an API via props.\n  const repositories: Repository[] = [\n    { name: 'Repository 1', branches: 10, prs: 25, workspaces: 5, lastCommit: '2 days ago' },\n    { name: 'Repository 2', branches: 10, prs: 25, workspaces: 5, lastCommit: '2 days ago' },\n    { name: 'Repository 3', branches: 10, prs: 25, workspaces: 5, lastCommit: '2 days ago' },\n    { name: 'Repository 4', branches: 10, prs: 25, workspaces: 5, lastCommit: '2 days ago' }\n  ];\n\n  const columnNames = {\n    name: 'Repositories',\n    branches: 'Branches',\n    prs: 'Pull requests',\n    workspaces: 'Workspaces',\n    lastCommit: 'Last commit'\n  };\n\n  return (\n    <TableComposable aria-label=\"Simple table\">\n      <Caption>Manually striped table using composable components</Caption>\n      <Thead>\n        <Tr>\n          <Th>{columnNames.name}</Th>\n          <Th>{columnNames.branches}</Th>\n          <Th>{columnNames.prs}</Th>\n          <Th>{columnNames.workspaces}</Th>\n          <Th>{columnNames.lastCommit}</Th>\n        </Tr>\n      </Thead>\n      <Tbody>\n        {repositories.map((repo, index) => (\n          <Tr key={repo.name} {...(index % 2 === 0 && { isStriped: true })}>\n            <Td dataLabel={columnNames.name}>{repo.name}</Td>\n            <Td dataLabel={columnNames.branches}>{repo.branches}</Td>\n            <Td dataLabel={columnNames.prs}>{repo.prs}</Td>\n            <Td dataLabel={columnNames.workspaces}>{repo.workspaces}</Td>\n            <Td dataLabel={columnNames.lastCommit}>{repo.lastCommit}</Td>\n          </Tr>\n        ))}\n      </Tbody>\n    </TableComposable>\n  );\n};\n","title":"Composable: Striped tr","lang":"ts"}}>
      
      <p {...{"className":"ws-p"}}>
        {`To manually control striping, add the `}
        
        <code {...{"className":"ws-code"}}>
          {`isStriped`}
        </code>
        {` property to each desired `}
        
        <code {...{"className":"ws-code"}}>
          {`Tr`}
        </code>
        {`. This replaces adding the `}
        
        <code {...{"className":"ws-code"}}>
          {`isStriped`}
        </code>
        {` property to `}
        
        <code {...{"className":"ws-code"}}>
          {`TableComposable`}
        </code>
        {`.`}
      </p>
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"table-composable","size":"h1","className":"ws-title ws-h1"}}>
      {`Table Composable`}
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
      {` component. It takes a more explicit and declarative approach, and its implementation more closely mirrors that of an HTML table. Generally, updates and new feature requests are implemented in the `}
      <code {...{"className":"ws-code"}}>
        {`TableComposable`}
      </code>
      {`.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`The second is the original `}
      <code {...{"className":"ws-code"}}>
        {`Table`}
      </code>
      {` component. It is configuration based and takes a less declarative and more implicit approach about laying out the table structure, such as the rows and cells within it. The documentation for the older table implementation can be found under the `}
      <PatternflyThemeLink {...{"to":"/components/table/react-legacy"}}>
        {`React legacy`}
      </PatternflyThemeLink>
      {` tab.`}
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
    <AutoLinkHeader {...{"id":"tablecomposable-examples","size":"h2","className":"ws-title ws-h2"}}>
      {`TableComposable examples`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The `}
      <code {...{"className":"ws-code"}}>
        {`TableComposable`}
      </code>
      {` component differs from the regular `}
      <code {...{"className":"ws-code"}}>
        {`Table`}
      </code>
      {` component, in that it allows you to compose the table by nesting the relevant `}
      <code {...{"className":"ws-code"}}>
        {`Thead`}
      </code>
      {`, `}
      <code {...{"className":"ws-code"}}>
        {`Tbody`}
      </code>
      {`, `}
      <code {...{"className":"ws-code"}}>
        {`Tr`}
      </code>
      {`, `}
      <code {...{"className":"ws-code"}}>
        {`Th`}
      </code>
      {` and `}
      <code {...{"className":"ws-code"}}>
        {`Td`}
      </code>
      {` components within it. For a less declarative and more implicit approach, use the `}
      <code {...{"className":"ws-code"}}>
        {`Table`}
      </code>
      {` component instead.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Some general notes:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Provide `}
        <code {...{"className":"ws-code"}}>
          {`dataLabel`}
        </code>
        {` prop to the `}
        <code {...{"className":"ws-code"}}>
          {`Td`}
        </code>
        {` components so that in mobile view the cell has a label to provide context.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`If you want a table caption, simply place a `}
        <code {...{"className":"ws-code"}}>
          {`<Caption>My caption</Caption>`}
        </code>
        {` as the first child within a `}
        <code {...{"className":"ws-code"}}>
          {`TableComposable`}
        </code>
        {`.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`You can set the `}
        <code {...{"className":"ws-code"}}>
          {`TableComposable`}
        </code>
        {` variant to `}
        <code {...{"className":"ws-code"}}>
          {`compact`}
        </code>
      </li>
    </ul>
    {React.createElement(pageData.examples["Composable: Basic"])}
    {React.createElement(pageData.examples["Composable: Custom row wrapper, header tooltips & popovers"])}
    {React.createElement(pageData.examples["Composable: Sortable & wrapping headers"])}
    {React.createElement(pageData.examples["Composable: Sortable - custom control"])}
    {React.createElement(pageData.examples["Composable: Selectable with checkbox"])}
    {React.createElement(pageData.examples["Composable: Selectable radio input"])}
    {React.createElement(pageData.examples["Composable: Row click handler, hoverable & selected rows"])}
    {React.createElement(pageData.examples["Composable: Actions"])}
    {React.createElement(pageData.examples["Composable: Actions Overflow"])}
    {React.createElement(pageData.examples["Composable: Expandable"])}
    {React.createElement(pageData.examples["Composable: Compound expandable"])}
    {React.createElement(pageData.examples["Composable: Cell width, breakpoint modifiers"])}
    {React.createElement(pageData.examples["Composable: Controlling text"])}
    <AutoLinkHeader {...{"id":"todo-distinguish-between-the-use-cases-for-modifier-on-td-vs-on-tabletext","size":"h4","className":"ws-title ws-h4"}}>
      {`TODO: distinguish between the use cases for modifier on Td vs on TableText?`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Composable: Modifiers with table text"])}
    {React.createElement(pageData.examples["Composable: Empty state"])}
    {React.createElement(pageData.examples["Composable: Favoritable (implemented with sortable)"])}
    {React.createElement(pageData.examples["Composable: Tree table"])}
    {React.createElement(pageData.examples["Composable: Draggable row table"])}
    <AutoLinkHeader {...{"id":"sticky-table-modifiers","size":"h2","className":"ws-title ws-h2"}}>
      {`Sticky table modifiers`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Note:`}
      </strong>
      {` Sticky table headers and columns have a higher `}
      <code {...{"className":"ws-code"}}>
        {`z-index`}
      </code>
      {` than the `}
      <code {...{"className":"ws-code"}}>
        {`z-index`}
      </code>
      {` used for menus (dropdown, select, etc). The intent is that the contents of a scrollable table will scroll under the sticky header/column, including any expanded menus. However, there may be use cases where a menu needs to appear on top of a sticky header/column, such as an expanded menu in a toolbar above a table with a sticky header.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`There are a few ways this can be handled:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Manipulate the `}
        <code {...{"className":"ws-code"}}>
          {`z-index`}
        </code>
        {` of the menu and/or table headers/columns manually.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Use the `}
        <code {...{"className":"ws-code"}}>
          {`menuAppendTo`}
        </code>
        {` prop in non-composable react components with menus to append the menu to an element outside of the table (e.g., the table's parent element) so that the menu has a higher stacking context than - and can appear on top of - sticky headers/columns as well as appear outside of any scrollable content in the table.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`In the case where the menu is outside of the table (e.g., above the table in a toolbar, or below the table and the menu expands up), assign the entire table a lower `}
        <code {...{"className":"ws-code"}}>
          {`z-index`}
        </code>
        {` than the `}
        <code {...{"className":"ws-code"}}>
          {`z-index`}
        </code>
        {` of the menu. This creates a lower stacking context for the entire table compared to the menu, while preserving the stacking context of the elements inside of the table.`}
      </li>
    </ul>
    {React.createElement(pageData.examples["Composable: Sticky column"])}
    {React.createElement(pageData.examples["Composable: Multiple sticky columns"])}
    {React.createElement(pageData.examples["Composable: Sticky columns and header"])}
    <AutoLinkHeader {...{"id":"nested-column-headers","size":"h2","className":"ws-title ws-h2"}}>
      {`Nested column headers`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`To make a nested column header:`}
    </p>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        {`Wrap `}
        <code {...{"className":"ws-code"}}>
          {`TableComposable`}
        </code>
        {` with `}
        <code {...{"className":"ws-code"}}>
          {`InnerScrollContainer`}
        </code>
        {`.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Pass `}
        <code {...{"className":"ws-code"}}>
          {`nestedHeaderColumnSpans`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`TableComposable`}
        </code>
        {`. `}
        <code {...{"className":"ws-code"}}>
          {`nestedHeaderColumnSpans`}
        </code>
        {` is an array of numbers representing the column spans of the top level columns to `}
        <code {...{"className":"ws-code"}}>
          {`TableComposable`}
        </code>
        {`, where each number is equal to the number of sub columns for a column, or `}
        <code {...{"className":"ws-code"}}>
          {`1`}
        </code>
        {` if a column contains no sub columns.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Pass `}
        <code {...{"className":"ws-code"}}>
          {`hasNestedHeader`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`Thead`}
        </code>
        {`.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Pass two `}
        <code {...{"className":"ws-code"}}>
          {`Tr`}
        </code>
        {` as children of `}
        <code {...{"className":"ws-code"}}>
          {`Thead`}
        </code>
        {`.`}
      </li>
    </ol>
    <p {...{"className":"ws-p"}}>
      {`The first `}
      <code {...{"className":"ws-code"}}>
        {`Tr`}
      </code>
      {` represents the top level of columns, and each must pass either `}
      <code {...{"className":"ws-code"}}>
        {`rowSpan`}
      </code>
      {` if the column does not contain sub columns or `}
      <code {...{"className":"ws-code"}}>
        {`colSpan`}
      </code>
      {` if the column contains sub columns. The value of `}
      <code {...{"className":"ws-code"}}>
        {`rowSpan`}
      </code>
      {` is equal to the number of rows the nested header will span, typically `}
      <code {...{"className":"ws-code"}}>
        {`2`}
      </code>
      {`, and the value of `}
      <code {...{"className":"ws-code"}}>
        {`colSpan`}
      </code>
      {` is equal to the number of sub columns in a column. Each `}
      <code {...{"className":"ws-code"}}>
        {`Th`}
      </code>
      {` except the last should also pass `}
      <code {...{"className":"ws-code"}}>
        {`hasRightBorder`}
      </code>
      {`.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`The second `}
      <code {...{"className":"ws-code"}}>
        {`Tr`}
      </code>
      {` represents the second level of sub columns. The `}
      <code {...{"className":"ws-code"}}>
        {`Th`}
      </code>
      {` in this row each should pass `}
      <code {...{"className":"ws-code"}}>
        {`isSubHeader`}
      </code>
      {`, and the last sub column of a column should also pass `}
      <code {...{"className":"ws-code"}}>
        {`hasRightBorder`}
      </code>
      {`.`}
    </p>
    {React.createElement(pageData.examples["Composable: Nested column headers"])}
    {React.createElement(pageData.examples["Composable: Nested column headers and expandable rows"])}
    {React.createElement(pageData.examples["Composable: Expandable with nested table"])}
    {React.createElement(pageData.examples["Composable: Nested sticky header"])}
    <AutoLinkHeader {...{"id":"striped","size":"h2","className":"ws-title ws-h2"}}>
      {`Striped`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Composable: Striped"])}
    {React.createElement(pageData.examples["Composable: Striped expandable"])}
    {React.createElement(pageData.examples["Composable: Striped multiple tobdy"])}
    {React.createElement(pageData.examples["Composable: Striped tr"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsTableReactComposableDocs';
Component.pageData = pageData;

export default Component;
