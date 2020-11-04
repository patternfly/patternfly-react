import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';
import {
  sortable,
  selectable,
  OnSelect,
  IFormatterValueType,
  IColumn,
  ISortBy,
  OnSort,
  cellWidth,
  Visibility,
  classNames,
  info
} from '../Table';
import { InfoType, mergeProps } from '../Table/base';
import { IVisibility } from '../Table/utils/decorators/classNames';
import { Tooltip } from '@patternfly/react-core/dist/js/components/Tooltip/Tooltip';
import { BaseCellProps } from './TableComposable';

export interface ThProps
  extends BaseCellProps,
    Omit<React.HTMLProps<HTMLTableHeaderCellElement>, 'onSelect' | 'width'> {
  /** Renders a checkbox select so that all row checkboxes can be selected/deselected */
  select?: {
    /** Callback on select */
    onSelect?: OnSelect;
    /** Whether the cell is selected */
    isSelected: boolean;
  };
  sort?: {
    /** Wraps the content in a button and adds a sort icon - Click callback on the sortable cell */
    onSort?: OnSort;
    /** Provide the currently active column's index and direction */
    sortBy: ISortBy;
    /** The column index */
    columnIndex: number;
  };
  /**
   * Tooltip to show on the header cell
   * Note: If the header cell is truncated and has simple string content, it will already attempt to display the header text
   * If you want to show a tooltip that differs from the header text, you can set it here
   * To disable it completely you can set it to null
   */
  tooltip?: React.ReactNode;
  /** Callback on mouse enter */
  onMouseEnter?: (event: any) => void;
  /** Adds tooltip/popover info button */
  info?: InfoType;
}

const ThBase: React.FunctionComponent<ThProps> = ({
  children,
  className,
  component = 'th',
  textCenter = false,
  sort = null,
  modifier,
  select = null,
  tooltip = '',
  onMouseEnter: onMouseEnterProp = () => {},
  width,
  visibility,
  innerRef,
  info: infoProps,
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
  const sortParams = sort
    ? sortable(children as IFormatterValueType, {
        columnIndex: sort.columnIndex,
        column: {
          extraParams: {
            sortBy: sort.sortBy,
            onSort: sort?.onSort
          }
        } as IColumn
      })
    : null;
  const selectParams = select
    ? selectable(children as IFormatterValueType, {
        column: {
          extraParams: {
            onSelect: select?.onSelect,
            selectVariant: 'checkbox',
            allRowsSelected: select.isSelected
          }
        }
      })
    : null;
  const widthParams = width ? cellWidth(width)() : null;
  const visibilityParams = visibility
    ? classNames(...visibility.map((vis: keyof IVisibility) => Visibility[vis]))()
    : null;
  let transformedChildren = sortParams?.children || selectParams?.children || children;
  // info can wrap other transformedChildren
  let infoParams = null;
  if (infoProps) {
    infoParams = info(infoProps)(transformedChildren);
    transformedChildren = infoParams.children;
  }
  const merged = mergeProps(sortParams, selectParams, widthParams, visibilityParams, infoParams);
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

  const cell = (
    <MergedComponent
      onMouseEnter={tooltip !== null ? onMouseEnter : onMouseEnterProp}
      scope="col"
      ref={innerRef}
      className={css(
        className,
        textCenter && styles.modifiers.center,
        modifier && styles.modifiers[modifier as 'breakWord' | 'fitContent' | 'nowrap' | 'truncate' | 'wrap'],
        mergedClassName
      )}
      {...mergedProps}
      {...props}
    >
      {transformedChildren}
    </MergedComponent>
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
