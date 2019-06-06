import React from 'react';
import { css } from '@patternfly/react-styles';
import { Button } from '@patternfly/react-core';
import styles from '@patternfly/react-styles/css/components/Table/table';

export const compoundExpand = (value, { rowIndex, columnIndex, rowData, column, property }) => {
  if (!value) {
    return null;
  }
  const { title, props } = value;
  const {
    extraParams: { onExpand }
  } = column;
  const extraData = {
    rowIndex,
    columnIndex,
    column,
    property
  };

  function onToggle(event) {
    onExpand && onExpand(event, rowIndex, columnIndex, props.isOpen, rowData, extraData);
  }
  return {
    className: css(styles.tableCompoundExpansionToggle, props.isOpen && styles.modifiers.expanded),
    children: props.isOpen !== undefined && (
      <Button variant="link" onClick={onToggle} aria-expanded={props.isOpen} aria-controls={props.ariaControls}>
        {title}
      </Button>
    )
  };
};
