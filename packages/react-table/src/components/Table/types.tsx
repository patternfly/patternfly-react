import { TooltipProps, PopoverProps } from "@patternfly/react-core";
import { DropdownPosition, DropdownDirection } from "@patternfly/react-core/src/deprecated/components/Dropdown";
import { OnSelect, IActions, CustomActionsToggleProps, OnCollapse, OnExpand, OnFavorite, OnTreeRowCollapse, OnCheckChange, OnToggleRowDetails, OnSort, ISortBy } from "../../deprecated/components/Table";

// Cell Type
export interface CellType {
    property?: number | string;
    transforms?: transformsType;
    formatters?: formattersType;
    props?: object;
  }
  
  export interface TdSelectType {
    /** The selectable variant */
    variant?: 'checkbox' | 'radio';
    /** Callback on select */
    onSelect?: OnSelect;
    /** Whether the cell is selected */
    isSelected: boolean;
    /** Whether to disable the selection */
    disable?: boolean;
    /** The row index */
    rowIndex: number;
    /** Additional props forwarded to select rowData */
    props?: any;
  }
  
  export interface TdActionsType {
    /** The row index */
    rowIndex?: number;
    /** Cell actions */
    items: IActions;
    /** Whether to disable the actions */
    disable?: boolean;
    /** Actions dropdown position */
    dropdownPosition?: DropdownPosition;
    /** Actions dropdown direction */
    dropdownDirection?: DropdownDirection;
    /** The container to append the dropdown menu to. Defaults to 'inline'.
     * If your menu is being cut off you can append it to an element higher up the DOM tree.
     * Some examples:
     * menuAppendTo="parent"
     * menuAppendTo={() => document.body}
     * menuAppendTo={document.getElementById('target')}
     */
    menuAppendTo?: HTMLElement | (() => HTMLElement) | 'inline' | 'parent';
    /** Custom toggle for the actions menu */
    actionsToggle?: (props: CustomActionsToggleProps) => React.ReactNode;
  }
  
  export interface TdExpandType {
    /** Flag indicating the child row associated with this cell is expanded */
    isExpanded: boolean;
    /** The row index */
    rowIndex: number;
    /** The column index */
    columnIndex?: number;
    /** On toggling the expansion */
    onToggle?: OnCollapse;
    /** Id prefix for expandable rows **/
    expandId?: string;
  }
  
  export interface TdCompoundExpandType {
    /** determines if the corresponding expansion row is open */
    isExpanded: boolean;
    /** Callback on toggling of the expansion */
    onToggle?: OnExpand;
    /** Id prefix for expandable cells **/
    expandId?: string;
    /** The row index */
    rowIndex?: number;
    /** The column index */
    columnIndex?: number;
  }
  
  export interface TdFavoritesType {
    /** Whether the corresponding row is favorited */
    isFavorited: boolean;
    /** Callback on clicking the favorites button */
    onFavorite?: OnFavorite;
    /** The row index */
    rowIndex?: number;
    /** Additional props forwarded to the FavoritesCell */
    props?: any;
  }
  
  export interface TdTreeRowType {
    /** Callback when user expands/collapses a row to reveal/hide the row's children */
    onCollapse: OnTreeRowCollapse;
    /** (optional) Callback when user changes the checkbox on a row */
    onCheckChange?: OnCheckChange;
    /** (optional) Callback when user shows/hides the row details in responsive view. */
    onToggleRowDetails?: OnToggleRowDetails;
    /** The row index */
    rowIndex?: number;
    /** Additional props forwarded to the title cell of the tree row */
    props?: any;
  }
  
  export interface TdDraggableType {
    /** Id of the draggable row */
    id: string;
  }
  
  // Columns Types
  export type ColumnsType = ColumnType[] | any[];
  
  export interface ColumnType {
    property?: string;
    cell?: CellType;
    props?: object;
    header?: HeaderType;
  }
  export interface HeaderType {
    label?: string;
    transforms?: transformsType;
    formatters?: formattersType;
    props?: object;
    property?: string;
    info?: ThInfoType;
  }
  export interface ThInfoType {
    tooltip?: React.ReactNode;
    tooltipProps?: Omit<TooltipProps, 'content'>;
    popover?: React.ReactNode;
    popoverProps?: Omit<PopoverProps, 'bodyContent'>;
    ariaLabel?: string;
    className?: string;
  }
  
  export interface ThSortType {
    /** Wraps the content in a button and adds a sort icon - Click callback on the sortable cell */
    onSort?: OnSort;
    /** Provide the currently active column's index and direction */
    sortBy: ISortBy;
    /** The column index */
    columnIndex: number;
    /** True to make this a favoritable sorting cell */
    isFavorites?: boolean;
  }
  
  export interface ThSelectType {
    /** Callback on select */
    onSelect?: OnSelect;
    /** Whether the cell is selected */
    isSelected: boolean;
    /** Flag indicating the select checkbox in the th is disabled */
    isHeaderSelectDisabled?: boolean;
    /** Whether to disable the selection */
    isDisabled?: boolean;
    /** Additional props forwarded to select rowData */
    props?: any;
  }
  
  export interface ThExpandType {
    /** On toggling the expansion */
    onToggle?: OnCollapse;
    /** Whether all are expanded */
    areAllExpanded: boolean;
    /** Alternative aria label */
    collapseAllAriaLabel: string;
  }
  
  // Rows Types
  export type RowsType = RowType[] | [][];
  export type RowKeyType = Function | string;
  export interface RowType {
    header?: HeaderType;
    cell?: CellType;
    [key: string]: any;
  }
  
  // Table Defaults
  // export const TableDefaults = {
  //   renderers: {
  //     table: Table,
  //     header: {
  //       wrapper: Thead,
  //       row: Tr,
  //       cell: Th
  //     },
  //     body: {
  //       wrapper: Tbody,
  //       row: Tr,
  //       cell: Td
  //     }
  //   }
  // };

  // Formatters Types
export type formatterValueType = object | string | React.ElementType;
export interface ExtraParamsType {
  rowData?: RowType;
  column?: ColumnType;
  columnIndex?: number;
  property?: string;
  rowIndex?: number;
  rowKey?: RowKeyType;
}
export type formatterType = (value: string | object, extra: ExtraParamsType) => formatterValueType;
export type formattersType = formatterType[];

// Transforms Types
export type transformType = (value: string | object, extra: ExtraParamsType) => object;
export type transformsType = transformType[];

// Renderers Types
export type createElementType = string | React.ComponentClass<any, any> | React.FunctionComponent<any>;
export type rendererType =
  | string
  | Function
  | React.ComponentClass<any, any>
  | React.FunctionComponent<any>
  | React.Component<any, {}, any>;
export interface RendererType {
  wrapper?: rendererType;
  row?: rendererType;
  cell?: rendererType;
}
export interface RenderersTypes {
  columns: ColumnsType;
  renderers?: {
    table?: any;
    header?: RendererType;
    body?: RendererType;
  };
  components?: {
    table?: any;
    header?: {
      wrapper?: rendererType;
      row?: rendererType;
      cell?: rendererType;
    };
    body?: {
      wrapper?: rendererType;
      row?: rendererType;
      cell?: rendererType;
    };
  };
}