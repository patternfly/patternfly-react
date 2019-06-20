/**
 * evaluate-transforms.js
 *
 * Forked from reactabular-table version 8.14.0
 * https://github.com/reactabular/reactabular/tree/v8.14.0/packages/reactabular-table/src
 * */
import { isFunction } from 'lodash-es';
import mergeProps from './merge-props';

function evaluateTransforms(transforms = [], value, extraParameters = {}) {
  if (process.env.NODE_ENV !== 'production') {
    if (!transforms.every(isFunction)) {
      throw new Error("All transforms weren't functions!", transforms);
    }
  }

  if (transforms.length === 0) {
    return {};
  }

  return mergeProps(...transforms.map(transform => transform(value, extraParameters)));
}

export default evaluateTransforms;
