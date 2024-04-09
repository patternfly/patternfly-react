import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';
import scrollStyles from '@patternfly/react-styles/css/components/Table/table-scrollable';
import { info, sortable, sortableFavorites, selectable, collapsible, cellWidth, Visibility, classNames } from './utils';
import { ThInfoType, ThSelectType, ThExpandType, ThSortType, formatterValueType } from './base/types';
import { mergeProps } from './base/merge-props';
import { IVisibility } from './utils/decorators/classNames';
import { Tooltip, TooltipProps } from '@patternfly/react-core/dist/esm/components/Tooltip';
import { BaseCellProps } from './Table';
import { IFormatterValueType, IColumn } from './TableTypes';
import cssStickyCellMinWidth from '@patternfly/react-tokens/dist/esm/c_table__sticky_cell_MinWidth';
import cssStickyCellLeft from '@patternfly/react-tokens/dist/esm/c_table__sticky_cell_Left';
import cssStickyCellRight from '@patternfly/react-tokens/dist/esm/c_table__sticky_cell_Right';

export interface ThProps
  extends BaseCellProps,
    Omit<React.HTMLProps<HTMLTableHeaderCellElement>, 'onSelect' | 'width'> {
  /**
   * The column header the cell corresponds to. Applicable when this component is used as a direct child to <Tr>.
   * This attribute replaces table header in mobile viewport. It is rendered by ::before pseudo element.
   */
  dataLabel?: string;
  /** Renders a checkbox select so that all row checkboxes can be selected/deselected */
  select?: ThSelectType;
  /** Renders a chevron so that all row chevrons can be expanded/collapsed */
  expand?: ThExpandType;
  /** Formats the header so that its column will be sortable */
  sort?: ThSortType;
  /**
   * Tooltip to show on the header cell.
   * Note: If the header cell is truncated and has simple string content, it will already attempt to display the header text.
   * If you want to show a tooltip that differs from the header text, you can set it here.
   * To disable it completely you can set it to null.
   */
  tooltip?: React.ReactNode;
  /** other props to pass to the tooltip */
  tooltipProps?: Omit<TooltipProps, 'content'>;
  /** Callback on mouse enter */
  onMouseEnter?: (event: any) => void;
  /** Adds tooltip/popover info button */
  info?: ThInfoType;
  /** Adds scope to the column to associate header cells with data cells*/
  scope?: string;
  /** Indicates the header column should be sticky */
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
  /** Indicates the <th> is part of a subheader of a nested header */
  isSubheader?: boolean;
  /** Visually hidden text accessible only via assistive technologies. This must be passed in if the
   * th is intended to be visually empty, and must be conveyed as a column header text.
   */
  screenReaderText?: string;
  /** Provides an accessible name to the th. This should only be passed in when the th contains only non-text
   * content, such as a "select all" checkbox or "expand all" toggle.
   */
  'aria-label'?: string;
}

const ThBase: React.FunctionComponent<ThProps> = ({
  children,
  className,
  component = 'th',
  dataLabel,
  scope = 'col',
  textCenter = false,
  sort = null,
  modifier,
  select = null,
  expand: collapse = null,
  tooltip = '',
  tooltipProps,
  onMouseEnter: onMouseEnterProp = () => {},
  width,
  visibility,
  innerRef,
  info: infoProps,
  isStickyColumn = false,
  hasRightBorder = false,
  hasLeftBorder = false,
  stickyMinWidth = '120px',
  stickyLeftOffset,
  stickyRightOffset,
  isSubheader = false,
  screenReaderText,
  'aria-label': ariaLabel,
  ...props
}: ThProps) => {
  if (!children && !screenReaderText && !ariaLabel) {
    // eslint-disable-next-line no-console
    console.warn(
      'Th: Table headers must have an accessible name. If the Th is intended to be visually empty, pass in screenReaderText. If the Th contains only non-text, interactive content such as a checkbox or expand toggle, pass in an aria-label.'
    );
  }

  const [showTooltip, setShowTooltip] = React.useState(false);
  const [truncated, setTruncated] = React.useState(false);
  const cellRef = innerRef ? innerRef : React.createRef();
  const onMouseEnter = (event: any) => {
    if (event.target.offsetWidth < event.target.scrollWidth) {
      !showTooltip && setShowTooltip(true);
    } else {
      showTooltip && setShowTooltip(false);
    }
    onMouseEnterProp(event);
  };
  let sortParams = null;
  if (sort) {
    if (sort.isFavorites) {
      sortParams = sortableFavorites({
        onSort: sort?.onSort,
        columnIndex: sort.columnIndex,
        sortBy: sort.sortBy,
        tooltip: tooltip as string,
        tooltipProps
      })();
    } else {
      sortParams = sortable(children as IFormatterValueType, {
        columnIndex: sort.columnIndex,
        column: {
          extraParams: {
            sortBy: sort.sortBy,
            onSort: sort?.onSort
          }
        } as IColumn,
        tooltip: tooltip as string,
        tooltipProps
      });
    }
  }
  const selectParams = select
    ? selectable(children as IFormatterValueType, {
        rowData: {
          selected: select.isSelected,
          disableSelection: select?.isDisabled,
          props: select?.props
        },
        column: {
          extraParams: {
            onSelect: select?.onSelect,
            selectVariant: 'checkbox',
            allRowsSelected: select.isSelected,
            isHeaderSelectDisabled: !!select.isHeaderSelectDisabled
          }
        },
        tooltip: tooltip as string,
        tooltipProps
      })
    : null;
  const collapseParams = collapse
    ? collapsible(children as IFormatterValueType, {
        column: {
          extraParams: {
            onCollapse: collapse?.onToggle,
            allRowsExpanded: !collapse.areAllExpanded,
            collapseAllAriaLabel: ''
          }
        }
      })
    : null;
  const widthParams = width ? cellWidth(width)() : null;
  const visibilityParams = visibility
    ? classNames(...visibility.map((vis: keyof IVisibility) => Visibility[vis]))()
    : null;
  let transformedChildren = sortParams?.children || selectParams?.children || collapseParams?.children || children;
  // info can wrap other transformedChildren
  let infoParams = null;
  if (infoProps) {
    infoParams = info(infoProps)(transformedChildren as formatterValueType);
    transformedChildren = infoParams.children;
  }
  const merged = mergeProps(sortParams, selectParams, collapseParams, widthParams, visibilityParams, infoParams);
  const {
    // ignore the merged children since we transform them ourselves so we can wrap it with info
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    children: mergedChildren = null,
    // selectable adds this but we don't want it
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    isVisible = null,
    className: mergedClassName = '',
    component: MergedComponent = component,
    ...mergedProps
  } = merged;

  React.useEffect(() => {
    setTruncated(
      (cellRef as React.RefObject<HTMLElement>).current.offsetWidth <
        (cellRef as React.RefObject<HTMLElement>).current.scrollWidth
    );
  }, [cellRef]);

  const cell = (
    <MergedComponent
      tabIndex={sort || select || !truncated ? -1 : 0}
      onFocus={tooltip !== null ? onMouseEnter : onMouseEnterProp}
      onBlur={() => setShowTooltip(false)}
      data-label={dataLabel}
      onMouseEnter={tooltip !== null ? onMouseEnter : onMouseEnterProp}
      scope={component === 'th' ? scope : null}
      ref={cellRef}
      aria-label={ariaLabel}
      className={css(
        styles.tableTh,
        className,
        textCenter && styles.modifiers.center,
        isSubheader && styles.tableSubhead,
        isStickyColumn && scrollStyles.tableStickyCell,
        hasRightBorder && scrollStyles.modifiers.borderRight,
        hasLeftBorder && scrollStyles.modifiers.borderLeft,
        modifier && styles.modifiers[modifier as 'breakWord' | 'fitContent' | 'nowrap' | 'truncate' | 'wrap'],
        mergedClassName
      )}
      {...mergedProps}
      {...props}
      {...(isStickyColumn && {
        style: {
          [cssStickyCellMinWidth.name]: stickyMinWidth ? stickyMinWidth : undefined,
          [cssStickyCellLeft.name]: stickyLeftOffset ? stickyLeftOffset : 0,
          [cssStickyCellRight.name]: stickyRightOffset ? stickyRightOffset : 0,
          ...props.style
        } as React.CSSProperties
      })}
    >
      {transformedChildren || (screenReaderText && <span className="pf-v5-screen-reader">{screenReaderText}</span>)}
    </MergedComponent>
  );

  const canMakeDefaultTooltip = tooltip === '' ? typeof transformedChildren === 'string' : true;
  const childControlsTooltip = sortParams || selectParams;
  return tooltip !== null && canMakeDefaultTooltip && !childControlsTooltip && showTooltip ? (
    <>
      {cell}
      <Tooltip
        triggerRef={cellRef as React.RefObject<any>}
        content={tooltip || (tooltip === '' && children)}
        isVisible
        {...tooltipProps}
      />
    </>
  ) : (
    cell
  );
};

export const Th = React.forwardRef((props: ThProps, ref: React.Ref<HTMLTableHeaderCellElement>) => (
  <ThBase {...props} innerRef={ref} />
));
Th.displayName = 'Th';
