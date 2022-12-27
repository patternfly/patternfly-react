import * as React from 'react';
import { IExtra, IFormatterValueType, ITransform } from '../../TableTypes';

export const headerCol = (id = 'simple-node') => {
  const headerColObj: ITransform = (value: IFormatterValueType, { rowIndex }: IExtra = {}) => {
    const result = typeof value === 'object' ? value.title : value;
    return {
      component: 'th',
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore: Fixed in next pf topology
      children: <div id={`${id}${rowIndex}`}>{result}</div>
    };
  };

  return headerColObj;
};
