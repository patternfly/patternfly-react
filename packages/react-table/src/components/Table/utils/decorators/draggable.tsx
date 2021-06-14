import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';
import { IExtra, IFormatterValueType, ITransform } from '../../TableTypes';
import { DraggableCell } from '../../DraggableCell';

export const draggable: ITransform = (value: IFormatterValueType, { column, rowData }: IExtra) => {
  const {
    extraParams: { onSomethingClick }
  } = column;
  const { id } = rowData;

  /**
   * @param {React.MouseEvent} event - Mouse event
   */
  function onClick(event: React.MouseEvent<HTMLButtonElement>) {
    // tslint:disable-next-line:no-unused-expression
    onSomethingClick && onSomethingClick(event, id);
  }

  return {
    className: css(styles.tableDraggable),
    children: <DraggableCell id={id} onClick={onClick} />
  };
};
