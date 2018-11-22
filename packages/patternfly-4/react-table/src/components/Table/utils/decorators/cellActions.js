import React from 'react';
import { css } from '@patternfly/react-styles';
import { tableAction } from '@patternfly/patternfly-next/components/Table/table.css';
import ActionsColumn from '../../ActionsColumn';

export default (actions) => {
  return (label, { rowIndex }) => ({
    className: css(tableAction),
    children: <ActionsColumn items={actions} rowId={rowIndex}>{label}</ActionsColumn>
  });

}
