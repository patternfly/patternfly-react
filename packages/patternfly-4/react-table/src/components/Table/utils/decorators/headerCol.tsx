import * as React from 'react';
import { IExtra, IFormatterValueType, ITransform } from '../../Table';

export const headerCol = (id = 'simple-node') => {
  // eslint-disable-next-line no-shadow
  const headerCol: ITransform = (value: IFormatterValueType, { rowIndex }: IExtra = {}) => {
    const result = typeof value === 'object' ? value.title : value;
    return {
      component: 'th',
      children: <div id={`${id}${rowIndex}`}>{result}</div>
    };
  };

  return headerCol;
};
