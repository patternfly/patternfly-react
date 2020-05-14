import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';
import { IExtra, IFormatterValueType, ITransform } from '../../Table';
import { TableText } from '../../TableText';

export const compoundExpand: ITransform = (
  value: IFormatterValueType,
  { rowIndex, columnIndex, rowData, column, property }: IExtra
) => {
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

  /**
   * @param {React.MouseEvent} event - Mouse event
   */
  function onToggle(event: React.MouseEvent) {
    // tslint:disable-next-line:no-unused-expression
    onExpand && onExpand(event, rowIndex, columnIndex, props.isOpen, rowData, extraData);
  }
  return {
    className: css(styles.tableCompoundExpansionToggle, props.isOpen && styles.modifiers.expanded),
    children: props.isOpen !== undefined && (
      <button
        className={css(styles.tableButton)}
        onClick={onToggle}
        aria-expanded={props.isOpen}
        aria-controls={props.ariaControls}
      >
        <TableText>{title}</TableText>
      </button>
    )
  };
};
