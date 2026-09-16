/**
 * merge-props.js
 *
 * Forked from reactabular-table version 8.14.0
 * https://github.com/reactabular/reactabular/tree/v8.14.0/packages/reactabular-table/src
 */
import { cloneElement, isValidElement } from 'react';
import mergeWith from 'lodash/mergeWith';
import { css } from '@patternfly/react-styles';

const customizer = (a: any, b: any, key: any) => {
  if (key === 'children') {
    if (a && b) {
      // compose the two
      return cloneElement(a, {
        children: b
      });
    }

    // React elements must be kept as-is; spreading them into plain objects
    // exposes their internals (e.g. the React 19 owner chain) to lodash's
    // deep merge, which then walks the entire element graph.
    if (isValidElement(a) || isValidElement(b) || a === undefined || b === undefined) {
      return b === undefined ? a : b;
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

  // React elements are atomic values; letting lodash recurse into their
  // internals hangs the merge under React 19.
  if (isValidElement(a) || isValidElement(b)) {
    return b === undefined ? a : b;
  }

  return undefined;
};

/**
 * @param {any} props - Props
 */
export function mergeProps(...props: any) {
  const firstProps = props[0];
  const restProps = props.slice(1);

  if (!restProps.length) {
    return mergeWith({}, firstProps, customizer);
  }

  // Avoid mutating the first prop collection
  return mergeWith(mergeWith({}, firstProps, customizer), ...restProps, customizer);
}
