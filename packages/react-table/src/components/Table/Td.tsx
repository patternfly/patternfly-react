import { createRef, forwardRef, useEffect, useState, useContext } from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';
import scrollStyles from '@patternfly/react-styles/css/components/Table/table-scrollable';
import treeViewStyles from '@patternfly/react-styles/css/components/Table/table-tree-view';
import { BaseCellProps } from './Table';
import {
  cellActions,
  selectable,
  collapsible,
  compoundExpand,
  cellWidth,
  Visibility,
  classNames,
  favoritable
} from './utils';
import { IRowData, IExtraData } from './TableTypes';
import { draggable } from './utils/decorators/draggable';
import { treeRow } from './utils';
import { mergeProps } from './base/merge-props';
import { IVisibility } from './utils/decorators/classNames';
import { Tooltip } from '@patternfly/react-core/dist/esm/components/Tooltip/Tooltip';
import { IFormatterValueType, IExtra } from './TableTypes';
import {
  TdActionsType,
  TdCompoundExpandType,
  TdDraggableType,
  TdExpandType,
  TdFavoritesType,
  TdSelectType,
  TdTreeRowType
} from './base/types';
import { TableContext } from './Table';
import cssStickyCellMinWidth from '@patternfly/react-tokens/dist/esm/c_table__sticky_cell_MinWidth';
import cssStickyCellInlineStart from '@patternfly/react-tokens/dist/esm/c_table__sticky_cell_InsetInlineStart';
import cssStickyCellInlineEnd from '@patternfly/react-tokens/dist/esm/c_table__sticky_cell_InsetInlineEnd';

export interface TdProps extends BaseCellProps, Omit<React.HTMLProps<HTMLTableDataCellElement>, 'onSelect' | 'width'> {
  /**
   * The column header the cell corresponds to.
   * This attribute replaces table header in mobile viewport. It is rendered by ::before pseudo element.
   */
  dataLabel?: string;
  /** Renders a checkbox or radio select */
  select?: TdSelectType;
  /** Turns the cell into an actions cell. Recommended to use an ActionsColumn component as a child of the Td rather than this prop. */
  actions?: TdActionsType;
  /** Indicates the cell contains an interactive element and prevents that element's padding from increasing row height. Recommended when other cells in the same row contains text. */
  hasAction?: boolean;
  /** Turns the cell into an expansion toggle and determines if the corresponding expansion row is open */
  expand?: TdExpandType;
  /** Turns the cell into a compound expansion toggle */
  compoundExpand?: TdCompoundExpandType;
  /** Turns the cell into a favorites cell with a star button */
  favorites?: TdFavoritesType;
  /** Turns the cell into the first cell in a tree table row */
  treeRow?: TdTreeRowType;
  /** Turns the cell into the first cell in a draggable row*/
  draggableRow?: TdDraggableType;
  /** True to remove padding */
  noPadding?: boolean;
  /** Applies pf-v6-c-table__action to td */
  isActionCell?: boolean;
  /**
   * Tooltip to show on the body cell.
   * Note: If the body cell is truncated and has simple string content, it will already attempt to display the cell text.
   * If you want to show a tooltip that differs from the cell text, you can set it here.
   * To disable it completely you can set it to null.
   */
  tooltip?: React.ReactNode;
  /** Callback on mouse enter */
  onMouseEnter?: (event: any) => void;
  /** Indicates the column should be sticky */
  isStickyColumn?: boolean;
  /** Adds a border to the right side of the cell */
  hasRightBorder?: boolean;
  /** Adds a border to the left side of the cell */
  hasLeftBorder?: boolean;
  /** Minimum width for a sticky column */
  stickyMinWidth?: string;
  /** Left offset of a sticky column. This will typically be equal to the combined value set by stickyMinWidth of any sticky columns that precede the current sticky column. */
  stickyLeftOffset?: string;
  /** Right offset of a sticky column. This will typically be equal to the combined value set by stickyMinWidth of any sticky columns that come after the current sticky column. */
  stickyRightOffset?: string;
}

const TdBase: React.FunctionComponent<TdProps> = ({
  children,
  className,
  isActionCell = false,
  hasAction = false,
  component = 'td',
  dataLabel,
  textCenter = false,
  modifier,
  select = null,
  actions = null,
  expand = null,
  treeRow: treeRowProp = null,
  compoundExpand: compoundExpandProp = null,
  noPadding,
  width,
  visibility,
  innerRef,
  favorites = null,
  draggableRow: draggableRowProp = null,
  tooltip = '',
  onMouseEnter: onMouseEnterProp = () => {},
  isStickyColumn = false,
  hasRightBorder = false,
  hasLeftBorder = false,
  stickyMinWidth = '120px',
  stickyLeftOffset,
  stickyRightOffset,
  ...props
}: TdProps) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [truncated, setTruncated] = useState(false);
  const cellRef = innerRef ? innerRef : createRef();
  const onMouseEnter = (event: any) => {
    if (event.target.offsetWidth < event.target.scrollWidth) {
      !showTooltip && setShowTooltip(true);
    } else {
      showTooltip && setShowTooltip(false);
    }

    onMouseEnterProp(event);
  };

  const selectParams = select
    ? selectable(children as IFormatterValueType, {
        rowIndex: select.rowIndex,
        rowData: {
          selected: select.isSelected,
          disableSelection: select?.isDisabled,
          props: select?.props
        },
        column: {
          extraParams: {
            onSelect: select?.onSelect,
            selectVariant: select.variant || 'checkbox'
          }
        }
      })
    : null;
  const favoriteParams = favorites
    ? favoritable(null, {
        rowIndex: favorites?.rowIndex,
        rowData: {
          favorited: favorites.isFavorited,
          favoritesProps: favorites?.props
        },
        column: {
          extraParams: {
            onFavorite: favorites?.onFavorite
          }
        }
      })
    : null;
  const draggableParams =
    draggableRowProp !== null
      ? draggable(null, {
          rowData: {
            id: draggableRowProp.id
          }
        })
      : null;
  const actionParamsFunc = actions ? cellActions(actions.items, null, null) : null;
  const actionParams = actionParamsFunc
    ? actionParamsFunc(null, {
        rowIndex: actions?.rowIndex,
        rowData: {
          disableActions: actions?.isDisabled
        },
        column: {
          extraParams: {
            dropdownPosition: actions?.dropdownPosition,
            dropdownDirection: actions?.dropdownDirection,
            menuAppendTo: actions?.menuAppendTo,
            actionsToggle: actions?.actionsToggle
          }
        }
      })
    : null;
  const expandableParams =
    expand !== null
      ? collapsible(null, {
          rowIndex: expand.rowIndex,
          columnIndex: expand?.columnIndex,
          rowData: {
            isOpen: expand.isExpanded
          },
          column: {
            extraParams: {
              onCollapse: expand?.onToggle,
              expandId: expand?.expandId
            }
          }
        })
      : null;

  const { hasAnimations } = useContext(TableContext);
  const updateAnimationClass = () => {
    const ancestorControlRow = (cellRef as React.RefObject<HTMLElement | null>)?.current?.closest(
      `.${styles.tableTr}.${styles.tableControlRow}`
    );
    const isControlRowExpanded = ancestorControlRow.classList.contains(styles.modifiers.expanded);
    if (!isControlRowExpanded) {
      return;
    }

    const isCurrentCellExpanded = (cellRef as React.RefObject<HTMLElement | null>)?.current?.classList.contains(
      styles.modifiers.expanded
    );
    if (isCurrentCellExpanded) {
      ancestorControlRow.classList.remove(styles.modifiers.noAnimateExpand);
    } else {
      ancestorControlRow.classList.add(styles.modifiers.noAnimateExpand);
    }
  };

  const internalCompoundOnToggle = (
    event: React.MouseEvent,
    rowIndex: number,
    colIndex: number,
    isOpen: boolean,
    rowData: IRowData,
    extraData: IExtraData
  ) => {
    hasAnimations && updateAnimationClass();
    compoundExpandProp?.onToggle(event, rowIndex, colIndex, isOpen, rowData, extraData);
  };

  const compoundParams =
    compoundExpandProp !== null
      ? compoundExpand(
          {
            title: children,
            props: {
              isOpen: compoundExpandProp.isExpanded
            }
          } as IFormatterValueType,
          {
            rowIndex: compoundExpandProp?.rowIndex,
            columnIndex: compoundExpandProp?.columnIndex,
            column: {
              extraParams: {
                onExpand: internalCompoundOnToggle,
                expandId: compoundExpandProp?.expandId
              }
            }
          }
        )
      : null;
  const widthParams = width ? cellWidth(width)() : null;
  const visibilityParams = visibility
    ? classNames(...visibility.map((vis: keyof IVisibility) => Visibility[vis]))()
    : null;
  const treeRowParams =
    treeRowProp !== null
      ? treeRow(
          treeRowProp.onCollapse,
          treeRowProp.onCheckChange,
          treeRowProp.onToggleRowDetails
        )(
          {
            title: children
          } as IFormatterValueType,
          {
            rowIndex: treeRowProp.rowIndex,
            rowData: {
              props: treeRowProp.props
            }
          } as IExtra
        )
      : null;
  const merged = mergeProps(
    selectParams,
    actionParams,
    expandableParams,
    compoundParams,
    widthParams,
    visibilityParams,
    favoriteParams,
    treeRowParams,
    draggableParams
  );
  const {
    // selectable adds this but we don't want it
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    isVisible = null,
    children: mergedChildren = null,
    className: mergedClassName = '',
    component: MergedComponent = component,
    ...mergedProps
  } = merged;

  const treeTableTitleCell =
    (className && className.includes(treeViewStyles.tableTreeViewTitleCell)) ||
    (mergedClassName && mergedClassName.includes(treeViewStyles.tableTreeViewTitleCell));

  useEffect(() => {
    setTruncated(
      (cellRef as React.RefObject<HTMLElement | null>).current.offsetWidth <
        (cellRef as React.RefObject<HTMLElement | null>).current.scrollWidth
    );
  }, [cellRef]);

  const cell = (
    <MergedComponent
      tabIndex={(select || !truncated) && modifier !== 'truncate' ? -1 : 0}
      {...(!treeTableTitleCell && { 'data-label': dataLabel })}
      onFocus={tooltip !== null ? onMouseEnter : onMouseEnterProp}
      onBlur={() => setShowTooltip(false)}
      onMouseEnter={tooltip !== null ? onMouseEnter : onMouseEnterProp}
      className={css(
        styles.tableTd,
        className,
        isActionCell && styles.tableAction,
        hasAction && styles.modifiers.action,
        textCenter && styles.modifiers.center,
        noPadding && styles.modifiers.noPadding,
        isStickyColumn && scrollStyles.tableStickyCell,
        hasRightBorder && scrollStyles.modifiers.borderRight,
        hasLeftBorder && scrollStyles.modifiers.borderLeft,
        styles.modifiers[modifier as 'breakWord' | 'fitContent' | 'nowrap' | 'truncate' | 'wrap' | undefined],
        draggableParams && styles.tableDraggable,
        mergedClassName
      )}
      ref={cellRef}
      {...mergedProps}
      {...props}
      {...(isStickyColumn && {
        style: {
          [cssStickyCellMinWidth.name]: stickyMinWidth ? stickyMinWidth : undefined,
          [cssStickyCellInlineStart.name]: stickyLeftOffset ? stickyLeftOffset : 0,
          [cssStickyCellInlineEnd.name]: stickyRightOffset ? stickyRightOffset : 0,
          ...props.style
        } as React.CSSProperties
      })}
    >
      {mergedChildren || children}
    </MergedComponent>
  );

  const canMakeDefaultTooltip = tooltip === '' ? typeof children === 'string' : true;
  return tooltip !== null && canMakeDefaultTooltip && showTooltip ? (
    <>
      {cell}
      <Tooltip
        triggerRef={cellRef as React.RefObject<any>}
        content={tooltip || (tooltip === '' && children)}
        isVisible
      />
    </>
  ) : (
    cell
  );
};

export const Td = forwardRef((props: TdProps, ref: React.Ref<HTMLTableDataCellElement>) => (
  <TdBase {...props} innerRef={ref} />
));
Td.displayName = 'Td';
