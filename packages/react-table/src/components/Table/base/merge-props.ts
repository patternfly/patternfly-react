/**
 * merge-props.js
 *
 * Forked from reactabular-table version 8.14.0
 * https://github.com/reactabular/reactabular/tree/v8.14.0/packages/reactabular-table/src
 */
import * as React from 'react';
import mergeWith from 'lodash/mergeWith';
import { css } from '@patternfly/react-styles';

/**
 * @param {any} props - Props
 */
export function mergeProps(...props: any) {
  const firstProps = props[0];
  const restProps = props.slice(1);

  if (!restProps.length) {
    return mergeWith({}, firstProps);
  }

  // Avoid mutating the first prop collection
  return mergeWith(mergeWith({}, firstProps), ...restProps, (a: any, b: any, key: any) => {
    if (key === 'children') {
      if (a && b) {
        // compose the two
        return React.cloneElement(a, {
          children: b
        });
      }

      // Children have to be merged in reverse order for Reactabular
      // logic to work.
      return { ...b, ...a };
    }

    if (key === 'className') {
      // Process class names through classNames to merge properly
      // as a string.
      return css(a, b);
    }

    return undefined;
  });
}
