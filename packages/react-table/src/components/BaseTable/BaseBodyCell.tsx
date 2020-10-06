import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';
import {
  OnSelect,
  selectable,
  cellActions,
  IAreActionsDisabled,
  IActionsResolver,
  IActions,
  IFormatterValueType
} from '../Table';
import {
  DropdownDirection,
  DropdownPosition
} from '@patternfly/react-core/dist/js/components/Dropdown/dropdownConstants';

export interface BaseBodyCellProps extends Omit<React.HTMLProps<HTMLTableDataCellElement>, 'onSelect'> {
  /** Content rendered inside the <td> body cell */
  children?: React.ReactNode;
  /** Additional classes added to the <td> body cell  */
  className?: string;
  /**
   * The column header the cell corresponds to.
   * This attribute replaces table header in mobile viewport. It is rendered by ::before pseudo element.
   */
  dataLabel?: string;
  /** The column index */
  columnIndex?: number;
  /** The row index */
  rowIndex?: number;
  /** Modifies cell to center its contents. */
  textCenter?: boolean;
  /** Style modifier to apply */
  modifier?: 'breakWord' | 'fitContent' | 'nowrap' | 'truncate' | 'wrap';
  /** Transforms the cell into a selectable cell - Click callback on select */
  onSelect?: OnSelect;
  /** Whether the checkbox is selected */
  isSelected?: boolean;
  /** The selectable variant */
  selectVariant?: 'checkbox' | 'radio';
  /** Whether all rows are selected */
  allRowsSelected?: boolean;
  /** Whether to disable the selection */
  disableSelection?: boolean;
  /** Cell actions */
  actions?: IActions;
  /** Whether to disable the actions */
  actionsDisabled?: boolean;
  /** Actions dropdown position */
  actionsDropdownPosition?: DropdownPosition;
  /** Actions dropdown direction */
  actionsDropdownDirection?: DropdownDirection;
  /** Forwarded ref */
  innerRef?: React.Ref<any>;
}

const BaseBodyCellBase: React.FunctionComponent<BaseBodyCellProps> = ({
  children,
  className,
  dataLabel,
  columnIndex,
  rowIndex,
  textCenter = false,
  modifier,
  onSelect,
  isSelected = false,
  selectVariant = 'checkbox',
  allRowsSelected,
  disableSelection = false,
  actions,
  actionsDisabled,
  actionsDropdownPosition,
  actionsDropdownDirection,
  innerRef,
  ...props
}: BaseBodyCellProps) => {
  const selectParams = onSelect
    ? selectable(children as IFormatterValueType, {
        columnIndex,
        rowIndex,
        rowData: {
          selected: isSelected,
          disableSelection
        },
        column: {
          extraParams: {
            onSelect: onSelect as OnSelect,
            selectVariant: selectVariant as 'checkbox' | 'radio',
            allRowsSelected
          }
        }
      })
    : null;
  const actionParamsFunc = actions ? cellActions(actions, null, null) : null;
  const actionParams = actionParamsFunc
    ? actionParamsFunc(null, {
        rowIndex,
        columnIndex,
        rowData: {
          disableActions: actionsDisabled
        },
        column: {
          extraParams: {
            dropdownPosition: actionsDropdownPosition,
            dropdownDirection: actionsDropdownDirection
          }
        }
      })
    : null;
  const Component: any = (selectParams && selectParams.component) || 'td';
  const transformedChildren =
    (selectParams && selectParams.children) || (actionParams && actionParams.children) || children;
  return (
    <Component
      data-label={dataLabel}
      data-key={columnIndex}
      className={css(
        className,
        textCenter && styles.modifiers.center,
        selectParams && selectParams.className,
        actionParams && actionParams.className,
        modifier && styles.modifiers[modifier as 'breakWord' | 'fitContent' | 'nowrap' | 'truncate' | 'wrap']
      )}
      ref={innerRef}
      {...props}
    >
      {transformedChildren}
    </Component>
  );
};

export const BaseBodyCell = React.forwardRef((props: BaseBodyCellProps, ref: React.Ref<HTMLTableDataCellElement>) => (
  <BaseBodyCellBase {...props} innerRef={ref} />
));
BaseBodyCell.displayName = 'BaseBodyCell';
