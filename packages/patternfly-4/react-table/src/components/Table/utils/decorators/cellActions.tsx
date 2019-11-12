import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';
import { ActionsColumn } from '../../ActionsColumn';
import {
  IActions,
  IAction,
  IActionsResolver,
  IAreActionsDisabled,
  IExtra,
  IExtraData,
  IFormatterValueType,
  IRowData,
  ITransform
} from '../../Table';

const resolveOrDefault = (
  resolver: IActionsResolver | IAreActionsDisabled,
  defaultValue: IActions | boolean,
  rowData: IRowData,
  extraData: IExtraData
) => (typeof resolver === 'function' ? resolver(rowData, extraData) : defaultValue);

export const cellActions = (
  actions: IActions,
  actionResolver: IActionsResolver,
  areActionsDisabled: IAreActionsDisabled
): ITransform => (
  label: IFormatterValueType,
  {
    rowData,
    column,
    rowIndex,
    columnIndex,
    column: {
      extraParams: { dropdownPosition, dropdownDirection }
    },
    property
  }: IExtra
) => {
  const extraData = {
    rowIndex,
    columnIndex,
    column,
    property
  };
  const resolvedActions = resolveOrDefault(actionResolver, actions, rowData, extraData) as IAction[];
  const resolvedIsDisabled = resolveOrDefault(
    areActionsDisabled,
    rowData && rowData.disableActions,
    rowData,
    extraData
  ) as boolean;

  const renderProps =
    resolvedActions && (resolvedActions as []).length > 0
      ? {
          children: (
            <ActionsColumn
              items={resolvedActions}
              dropdownPosition={dropdownPosition}
              dropdownDirection={dropdownDirection}
              isDisabled={resolvedIsDisabled}
              rowData={rowData}
              extraData={extraData}
            >
              {label}
            </ActionsColumn>
          )
        }
      : {};

  return {
    className: css(styles.tableAction),
    isVisible: true,
    ...renderProps
  };
};
