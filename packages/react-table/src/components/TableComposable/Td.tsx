import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';
import scrollStyles from '@patternfly/react-styles/css/components/Table/table-scrollable';
import { BaseCellProps } from './TableComposable';
import { cellActions } from '../Table/utils/decorators/cellActions';
import { selectable } from '../Table/utils/decorators/selectable';
import { collapsible } from '../Table/utils/decorators/collapsible';
import { compoundExpand } from '../Table/utils/decorators/compoundExpand';
import { cellWidth } from '../Table/utils/decorators/cellWidth';
import { Visibility, classNames } from './../Table/utils/decorators/classNames';
import { favoritable } from '../Table/utils/decorators/favoritable';
import { draggable } from '../Table/utils/decorators/draggable';
import { treeRow } from '../Table/utils/decorators/treeRow';
import { mergeProps } from '../Table/base/merge-props';
import { IVisibility } from '../Table/utils/decorators/classNames';
import { Tooltip } from '@patternfly/react-core/dist/esm/components/Tooltip/Tooltip';
import { IFormatterValueType, IExtra } from '../Table/TableTypes';
import {
  TdActionsType,
  TdCompoundExpandType,
  TdDraggableType,
  TdExpandType,
  TdFavoritesType,
  TdSelectType,
  TdTreeRowType
} from '../Table/base';
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
  /** Applies pf-c-table__action to td */
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
  /** Minimum width for a sticky column */
  stickyMinWidth?: string;
  /** Left offset of a sticky column. This will typically be equal to the combined value set by stickyMinWidth of any sticky columns that precede the current sticky column. */
  stickyLeftOffset?: string;
}

const TdBase: React.FunctionComponent<TdProps> = ({
  children,
  className,
  isActionCell = false,
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
  stickyMinWidth = '120px',
  stickyLeftOffset,
  ...props
}: TdProps) => {
  const [showTooltip, setShowTooltip] = React.useState(false);
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
          disableSelection: select?.disable,
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
          disableActions: actions?.disable
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
                onExpand: compoundExpandProp?.onToggle,
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
    (className && className.includes('pf-c-table__tree-view-title-cell')) ||
    (mergedClassName && mergedClassName.includes('pf-c-table__tree-view-title-cell'));

  const cell = (
    <MergedComponent
      {...(!treeTableTitleCell && { 'data-label': dataLabel })}
      onMouseEnter={tooltip !== null ? onMouseEnter : onMouseEnterProp}
      className={css(
        className,
        isActionCell && styles.tableAction,
        textCenter && styles.modifiers.center,
        noPadding && styles.modifiers.noPadding,
        isStickyColumn && scrollStyles.tableStickyColumn,
        hasRightBorder && scrollStyles.modifiers.borderRight,
        styles.modifiers[modifier as 'breakWord' | 'fitContent' | 'nowrap' | 'truncate' | 'wrap' | undefined],
        draggableParams && styles.tableDraggable,
        mergedClassName
      )}
      ref={innerRef}
      {...mergedProps}
      {...props}
      {...(isStickyColumn && {
        style: {
          '--pf-c-table__sticky-column--MinWidth': stickyMinWidth ? stickyMinWidth : undefined,
          '--pf-c-table__sticky-column--Left': stickyLeftOffset ? stickyLeftOffset : undefined,
          ...props.style
        } as React.CSSProperties
      })}
    >
      {mergedChildren || children}
    </MergedComponent>
  );

  const canMakeDefaultTooltip = tooltip === '' ? typeof children === 'string' : true;
  return tooltip !== null && canMakeDefaultTooltip && showTooltip ? (
    <Tooltip content={tooltip || (tooltip === '' && children)} isVisible>
      {cell}
    </Tooltip>
  ) : (
    cell
  );
};

export const Td = React.forwardRef((props: TdProps, ref: React.Ref<HTMLTableDataCellElement>) => (
  <TdBase {...props} innerRef={ref} />
));
Td.displayName = 'Td';
