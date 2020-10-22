import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';
import {
  OnSelect,
  selectable,
  cellActions,
  /* eslint-disable @typescript-eslint/no-unused-vars */
  IAreActionsDisabled,
  IActionsResolver,
  expandedRow,
  /* eslint-enable @typescript-eslint/no-unused-vars */
  IActions,
  IFormatterValueType,
  collapsible,
  IRowData,
  IExtraData,
  compoundExpand,
  cellWidth,
  Visibility,
  classNames
} from '../Table';
import { IVisibility } from '../Table/utils/decorators/classNames';
import {
  DropdownDirection,
  DropdownPosition
} from '@patternfly/react-core/dist/js/components/Dropdown/dropdownConstants';
import { BaseCellProps } from './TableComposable';

export interface TdProps extends BaseCellProps, Omit<React.HTMLProps<HTMLTableDataCellElement>, 'onSelect' | 'width'> {
  /** The selectable variant */
  selectVariant?: 'checkbox' | 'radio';
  /**
   * The column header the cell corresponds to.
   * This attribute replaces table header in mobile viewport. It is rendered by ::before pseudo element.
   */
  dataLabel?: string;
  /** The row index */
  rowIndex?: number;
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
  /** Turns the cell into an expansion toggle and determines if the corresponding expansion row is open */
  isExpanded?: boolean;
  /** Turns the cell into a compound expansion toggle and determines if the corresponding expansion row is open */
  isCompoundExpanded?: boolean;
  /** On toggling the expansion */
  onCollapse?: (
    event: React.MouseEvent,
    rowIndex: number,
    isOpen: boolean,
    rowData: IRowData,
    extraData: IExtraData
  ) => undefined;
  /** True to remove padding */
  noPadding?: boolean;
}

const TdBase: React.FunctionComponent<TdProps> = ({
  children,
  className,
  component = 'td',
  dataLabel,
  columnIndex,
  rowIndex,
  textCenter = false,
  modifier,
  onSelect,
  isSelected = false,
  selectVariant = 'checkbox',
  disableSelection = false,
  actions,
  actionsDisabled,
  actionsDropdownPosition,
  actionsDropdownDirection,
  isExpanded = null,
  isCompoundExpanded = null,
  onCollapse,
  noPadding,
  width,
  visibility,
  innerRef,
  ...props
}: TdProps) => {
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
            selectVariant: selectVariant as 'checkbox' | 'radio'
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
  const expandableParams =
    isExpanded !== null
      ? collapsible(null, {
          rowIndex,
          columnIndex,
          rowData: {
            isOpen: isExpanded
          },
          column: {
            extraParams: {
              onCollapse
            }
          }
        })
      : null;
  const compoundParams =
    isCompoundExpanded !== null
      ? compoundExpand(
          {
            title: children,
            props: {
              isOpen: isCompoundExpanded
            }
          } as IFormatterValueType,
          {
            columnIndex,
            rowIndex,
            column: {
              extraParams: {}
            }
          }
        )
      : null;
  const widthParams = width ? cellWidth(width)() : null;
  const visibilityParams = visibility
    ? classNames(...visibility.map((vis: keyof IVisibility) => Visibility[vis]))()
    : null;
  const Component: any = (selectParams && selectParams.component) || component;
  const transformedChildren =
    (selectParams && selectParams.children) ||
    (actionParams && actionParams.children) ||
    (expandableParams && expandableParams.children) ||
    (compoundParams && compoundParams.children) ||
    children;
  return (
    <Component
      data-label={dataLabel}
      data-key={columnIndex}
      className={css(
        className,
        textCenter && styles.modifiers.center,
        noPadding && styles.modifiers.noPadding,
        selectParams && selectParams.className,
        actionParams && actionParams.className,
        expandableParams && expandableParams.className,
        compoundParams && compoundParams.className,
        modifier && styles.modifiers[modifier as 'breakWord' | 'fitContent' | 'nowrap' | 'truncate' | 'wrap'],
        widthParams && widthParams.className,
        visibilityParams && visibilityParams.className
      )}
      ref={innerRef}
      {...props}
    >
      {transformedChildren}
    </Component>
  );
};

export const Td = React.forwardRef((props: TdProps, ref: React.Ref<HTMLTableDataCellElement>) => (
  <TdBase {...props} innerRef={ref} />
));
Td.displayName = 'Td';
