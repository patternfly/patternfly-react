/**
 * evaluate-transforms.ts
 *
 * Forked from reactabular-table version 8.14.0
 * https://github.com/reactabular/reactabular/tree/v8.14.0/packages/reactabular-table/src
 */
import { isFunction } from 'lodash';
import { mergeProps } from './merge-props';
import { transformsType, ExtraParamsType } from './types';

export function evaluateTransforms(transforms:transformsType = [], value: string | object, extraParameters:ExtraParamsType = {}) {
  if (process.env.NODE_ENV !== 'production') {
    if (!transforms.every(isFunction)) {
      throw new Error('All transforms weren\'t functions!');
    }
  }

  if (transforms.length === 0) {
    return {};
  }

  return mergeProps(...transforms.map(transform => transform(value, extraParameters)));
}
