import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';
import { IExtra, IFormatterValueType, ITransform } from '../../TableTypes';
import { DraggableCell } from '../../DraggableCell';

export const draggable: ITransform = (
  value: IFormatterValueType,
  { rowIndex, column, rowData }: IExtra
) => {
  const { extraParams: { onSomethingClick } } = column;
  const { id } = rowData;

  /**
   * @param {React.MouseEvent} event - Mouse event
   */
  function onClick(event: React.MouseEvent<HTMLButtonElement>) {
    // tslint:disable-next-line:no-unused-expression
    onSomethingClick && onSomethingClick(event, id);
  }

  return {
    className: "pf-c-table__draggable",
    children: (
      <DraggableCell
        id={id}
        onClick={onClick}
      />
    )
  };
};
