import * as React from 'react';
import { IExtra, IFormatterValueType } from '../../Table';

export const headerCol = (id: string = 'simple-node') => {
  // tslint:disable-next-line:no-shadowed-variable
  const headerCol = (value: IFormatterValueType, { rowIndex }:IExtra = {}) => {
    const result = typeof value === 'object' ? value.title : value;
    return {
      component: 'th',
      children: <div id={id + rowIndex}>{result}</div>
    };
  };

  return headerCol;
};
