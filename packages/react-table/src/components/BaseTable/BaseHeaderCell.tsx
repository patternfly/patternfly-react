import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';
import {
  SortByDirection,
  sortable,
  selectable,
  OnSelect,
  IFormatterValueType,
  IColumn,
  ISortBy,
  OnSort,
  cellWidth,
  Visibility,
  classNames
} from '../Table';
import { IVisibility } from '../Table/utils/decorators/classNames';
import { Tooltip } from '@patternfly/react-core/dist/js/components/Tooltip/Tooltip';

export interface BaseHeaderCellProps extends Omit<React.HTMLProps<HTMLTableHeaderCellElement>, 'onSelect'> {
  /** Content rendered inside the <th> header cell */
  children?: React.ReactNode;
  /** Additional classes added to the <th> header cell  */
  className?: string;
  /** Element to render */
  component?: React.ReactNode;
  /** Modifies cell to center its contents. */
  textCenter?: boolean;
  /** Wraps the content in a button and adds a sort icon - Click callback on the sortable cell */
  onSort?: Function;
  /** Sort direction of the currently sorted column */
  activeSortDirection?: SortByDirection | 'asc' | 'desc' | 'none';
  /** Index of the currently sorted column */
  activeSortIndex?: number;
  /** Adds data-label attribute */
  dataLabel?: string;
  /** The column index */
  columnIndex?: number;
  /** Style modifier to apply */
  modifier?: 'breakWord' | 'fitContent' | 'nowrap' | 'truncate' | 'wrap';
  /** Transforms the cell into a selectable cell - Click callback on select */
  onSelect?: OnSelect;
  /** The selectable variant */
  selectVariant?: 'checkbox' | 'radio';
  /** Whether all rows are selected */
  allRowsSelected?: boolean;
  /**
   * Tooltip to show on the header cell
   * Note: If the header cell is truncated and has simple string content, it will already attempt to display the header text
   * If you want to show a tooltip that differs from the header text, you can set it here
   * To disable it completely you can set it to null
   */
  tooltip?: React.ReactNode;
  /** Callback on mouse enter */
  onMouseEnter?: (event: any) => void;
  /** Width percentage modifier */
  width?: 10 | 15 | 20 | 25 | 30 | 35 | 40 | 45 | 50 | 60 | 70 | 80 | 90 | 100;
  /** Visibility breakpoint modifiers */
  visibility?: (keyof IVisibility)[];
  /** Forwarded ref */
  innerRef?: React.Ref<any>;
}

const BaseHeaderCellBase: React.FunctionComponent<BaseHeaderCellProps> = ({
  children,
  className,
  component = 'th',
  textCenter = false,
  onSort,
  activeSortDirection = 'none',
  activeSortIndex,
  dataLabel,
  columnIndex,
  modifier,
  onSelect,
  selectVariant = 'checkbox',
  allRowsSelected,
  tooltip = '',
  onMouseEnter: onMouseEnterProp = () => {},
  width,
  visibility,
  innerRef,
  ...props
}: BaseHeaderCellProps) => {
  const [showTooltip, setShowTooltip] = React.useState(false);
  const onMouseEnter = (event: any) => {
    if (event.target.offsetWidth < event.target.scrollWidth) {
      !showTooltip && setShowTooltip(true);
    } else {
      showTooltip && setShowTooltip(false);
    }
    onMouseEnterProp(event);
  };
  const sortParams = onSort
    ? sortable(children as IFormatterValueType, {
        columnIndex,
        column: {
          extraParams: {
            sortBy: {
              index: activeSortIndex,
              direction: activeSortDirection
            } as ISortBy,
            onSort: onSort as OnSort
          }
        } as IColumn
      })
    : null;
  const selectParams = onSelect
    ? selectable(children as IFormatterValueType, {
        columnIndex,
        column: {
          extraParams: {
            onSelect: onSelect as OnSelect,
            selectVariant: selectVariant as 'checkbox' | 'radio',
            allRowsSelected
          }
        }
      })
    : null;
  const widthParams = width ? cellWidth(width)() : null;
  const visibilityParams = visibility
    ? classNames(...visibility.map((vis: keyof IVisibility) => Visibility[vis]))()
    : null;
  const Component: any = (sortParams && sortParams.component) || (selectParams && selectParams.component) || component;
  const transformedChildren =
    (sortParams && sortParams.children) || (selectParams && selectParams.children) || children;
  const cell = (
    <Component
      onMouseEnter={tooltip !== null ? onMouseEnter : onMouseEnterProp}
      scope="col"
      aria-sort={sortParams ? (sortParams['aria-sort'] as 'none' | 'ascending' | 'descending') : null}
      ref={innerRef}
      data-label={dataLabel || (typeof children === 'string' ? children : null)}
      data-key={columnIndex}
      className={css(
        className,
        textCenter && styles.modifiers.center,
        sortParams && sortParams.className,
        selectParams && selectParams.className,
        modifier && styles.modifiers[modifier as 'breakWord' | 'fitContent' | 'nowrap' | 'truncate' | 'wrap'],
        widthParams && widthParams.className,
        visibilityParams && visibilityParams.className
      )}
      {...props}
    >
      {transformedChildren}
    </Component>
  );

  const canDefault = tooltip === '' ? typeof children === 'string' : true;
  return tooltip !== null && canDefault && showTooltip ? (
    <Tooltip content={tooltip || (tooltip === '' && children)} isVisible>
      {cell}
    </Tooltip>
  ) : (
    cell
  );
};

export const BaseHeaderCell = React.forwardRef(
  (props: BaseHeaderCellProps, ref: React.Ref<HTMLTableHeaderCellElement>) => (
    <BaseHeaderCellBase {...props} innerRef={ref} />
  )
);
BaseHeaderCell.displayName = 'BaseHeaderCell';
