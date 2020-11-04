import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';
import {
  OnSelect,
  selectable,
  cellActions,
  IActions,
  IFormatterValueType,
  collapsible,
  compoundExpand,
  OnExpand,
  cellWidth,
  Visibility,
  classNames,
  OnCollapse
} from '../Table';
import { mergeProps } from '../Table/base';
import { IVisibility } from '../Table/utils/decorators/classNames';
import {
  DropdownDirection,
  DropdownPosition
} from '@patternfly/react-core/dist/js/components/Dropdown/dropdownConstants';
import { BaseCellProps } from './TableComposable';

export interface TdProps extends BaseCellProps, Omit<React.HTMLProps<HTMLTableDataCellElement>, 'onSelect' | 'width'> {
  /**
   * The column header the cell corresponds to.
   * This attribute replaces table header in mobile viewport. It is rendered by ::before pseudo element.
   */
  dataLabel?: string;
  /** Renders a checkbox or radio select */
  select?: {
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
  };
  /** Turns the cell into an actions cell */
  actions?: {
    /** Cell actions */
    items: IActions;
    /** Whether to disable the actions */
    disable?: boolean;
    /** Actions dropdown position */
    dropdownPosition?: DropdownPosition;
    /** Actions dropdown direction */
    dropdownDirection?: DropdownDirection;
  };
  /** Turns the cell into an expansion toggle and determines if the corresponding expansion row is open */
  expand?: {
    isExpanded: boolean;
    /** The row index */
    rowIndex: number;
    /** The column index */
    columnIndex?: number;
    /** On toggling the expansion */
    onToggle?: OnCollapse;
  };
  /** Turns the cell into a compound expansion toggle */
  compoundExpand?: {
    /** determines if the corresponding expansion row is open */
    isExpanded: boolean;
    /** Callback on toggling of the expansion */
    onToggle?: OnExpand;
  };
  /** True to remove padding */
  noPadding?: boolean;
}

const TdBase: React.FunctionComponent<TdProps> = ({
  children,
  className,
  component = 'td',
  dataLabel,
  textCenter = false,
  modifier,
  select = null,
  actions = null,
  expand = null,
  compoundExpand: compoundExpandProp = null,
  noPadding,
  width,
  visibility,
  innerRef,
  ...props
}: TdProps) => {
  const selectParams = select
    ? selectable(children as IFormatterValueType, {
        rowIndex: select.rowIndex,
        rowData: {
          selected: select.isSelected,
          disableSelection: select?.disable
        },
        column: {
          extraParams: {
            onSelect: select?.onSelect,
            selectVariant: select.variant || 'checkbox'
          }
        }
      })
    : null;
  const actionParamsFunc = actions ? cellActions(actions.items, null, null) : null;
  const actionParams = actionParamsFunc
    ? actionParamsFunc(null, {
        rowData: {
          disableActions: actions?.disable
        },
        column: {
          extraParams: {
            dropdownPosition: actions?.dropdownPosition,
            dropdownDirection: actions?.dropdownDirection
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
              onCollapse: expand?.onToggle
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
            column: {
              extraParams: {
                onExpand: compoundExpandProp?.onToggle
              }
            }
          }
        )
      : null;
  const widthParams = width ? cellWidth(width)() : null;
  const visibilityParams = visibility
    ? classNames(...visibility.map((vis: keyof IVisibility) => Visibility[vis]))()
    : null;
  const merged = mergeProps(
    selectParams,
    actionParams,
    expandableParams,
    compoundParams,
    widthParams,
    visibilityParams
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
  return (
    <MergedComponent
      data-label={dataLabel}
      className={css(
        className,
        textCenter && styles.modifiers.center,
        noPadding && styles.modifiers.noPadding,
        styles.modifiers[modifier as 'breakWord' | 'fitContent' | 'nowrap' | 'truncate' | 'wrap' | undefined],
        mergedClassName
      )}
      ref={innerRef}
      {...mergedProps}
      {...props}
    >
      {mergedChildren || children}
    </MergedComponent>
  );
};

export const Td = React.forwardRef((props: TdProps, ref: React.Ref<HTMLTableDataCellElement>) => (
  <TdBase {...props} innerRef={ref} />
));
Td.displayName = 'Td';
