import * as React from 'react';
import { IExtra, IFormatterValueType, ITransform } from '../../base';

export const headerCol = (id = 'simple-node') => {
  const headerColObj: ITransform = (value: IFormatterValueType, { rowIndex }: IExtra = {}) => {
    const result = typeof value === 'object' ? value.title : value;
    return {
      component: 'th',
      children: <div id={`${id}${rowIndex}`}>{result}</div>
    };
  };

  return headerColObj;
};
