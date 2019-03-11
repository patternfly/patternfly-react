import React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly/components/Table/table.css';
import ActionsColumn from '../../ActionsColumn';

const resolveOrDefault = (resolver, defaultValue, ...data) =>
  typeof resolver === 'function' ? resolver(...data) : defaultValue;

export default (actions, actionResolver, areActionsDisabled) => (
  label,
  {
    rowData,
    column,
    rowIndex,
    columnIndex,
    column: {
      extraParams: { dropdownPosition, dropdownDirection }
    }
  }
) => {
  const extraParams = {
    rowIndex,
    columnIndex,
    column
  };
  const resolvedActions = resolveOrDefault(actionResolver, actions, rowData, extraParams);
  const resolvedIsDisabled = resolveOrDefault(
    areActionsDisabled,
    rowData && rowData.disableActions,
    rowData,
    extraParams
  );

  const renderProps =
    resolvedActions && resolvedActions.length > 0
      ? {
          children: (
            <ActionsColumn
              items={resolvedActions}
              dropdownPosition={dropdownPosition}
              dropdownDirection={dropdownDirection}
              isDisabled={resolvedIsDisabled}
              rowData={rowData}
              extraParams={extraParams}
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
