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
import { BaseCellProps } from './TableComposable';

export interface ThProps
  extends BaseCellProps,
    Omit<React.HTMLProps<HTMLTableHeaderCellElement>, 'onSelect' | 'width'> {
  /** The selectable variant */
  selectVariant?: 'checkbox';
  /** Wraps the content in a button and adds a sort icon - Click callback on the sortable cell */
  onSort?: Function;
  /** Sort direction of the currently sorted column */
  activeSortDirection?: SortByDirection | 'asc' | 'desc' | 'none';
  /** Index of the currently sorted column */
  activeSortIndex?: number;
  /**
   * Tooltip to show on the header cell
   * Note: If the header cell is truncated and has simple string content, it will already attempt to display the header text
   * If you want to show a tooltip that differs from the header text, you can set it here
   * To disable it completely you can set it to null
   */
  tooltip?: React.ReactNode;
  /** Callback on mouse enter */
  onMouseEnter?: (event: any) => void;
}

const ThBase: React.FunctionComponent<ThProps> = ({
  children,
  className,
  component = 'th',
  textCenter = false,
  onSort,
  activeSortDirection = 'none',
  activeSortIndex,
  columnIndex,
  modifier,
  onSelect,
  selectVariant = 'checkbox',
  isSelected,
  tooltip = '',
  onMouseEnter: onMouseEnterProp = () => {},
  width,
  visibility,
  innerRef,
  ...props
}: ThProps) => {
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
            allRowsSelected: isSelected
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

export const Th = React.forwardRef((props: ThProps, ref: React.Ref<HTMLTableHeaderCellElement>) => (
  <ThBase {...props} innerRef={ref} />
));
Th.displayName = 'Th';
