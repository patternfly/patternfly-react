import * as React from 'react';
import { IExtra, IFormatterValueType, ITransform } from '../../TableTypes';
import { DraggableCell } from '../../DraggableCell';

export const draggable: ITransform = (value: IFormatterValueType, { rowData }: IExtra) => {
  const { id } = rowData;

  return {
    className: '',
    children: <DraggableCell id={id} />
  };
};
