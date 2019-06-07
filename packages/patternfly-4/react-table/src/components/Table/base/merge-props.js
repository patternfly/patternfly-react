/**
 * merge-props.js
 *
 * Forked from reactabular-table version 8.14.0
 * https://github.com/reactabular/reactabular/tree/v8.14.0/packages/reactabular-table/src
 * */
import { mergeWith } from 'lodash-es';
import classNames from 'classnames';

function mergePropPair(...props) {
  const firstProps = props[0];
  const restProps = props.slice(1);

  if (!restProps.length) {
    return mergeWith({}, firstProps);
  }

  // Avoid mutating the first prop collection
  return mergeWith(mergeWith({}, firstProps), ...restProps, (a, b, key) => {
    if (key === 'children') {
      // Children have to be merged in reverse order for Reactabular
      // logic to work.
      return { ...b, ...a };
    }

    if (key === 'className') {
      // Process class names through classNames to merge properly
      // as a string.
      return classNames(a, b);
    }

    return undefined;
  });
}

export default mergePropPair;
