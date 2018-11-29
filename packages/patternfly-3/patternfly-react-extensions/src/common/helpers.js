import React from 'react';

/** Implementation of the debounce function */
export const debounce = (func, wait) => {
  let timeout;
  function innerFunc(...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  }
  return innerFunc;
};

/** Returns a subset of the given object including only the given keys, with values optionally replaced by a fn. */
export const selectKeys = (obj, keys, fn = val => val) =>
  keys.reduce((values, key) => ({ ...values, [key]: fn(obj[key]) }), {});

/** Returns a subset of the given object with a validator function applied to its keys. */
export const filterKeys = (obj, validator) => selectKeys(obj, Object.keys(obj).filter(validator));

/** Returns a subset of the given object with the given keys left out. */
export const excludeKeys = (obj, keys) => filterKeys(obj, key => !keys.includes(key));

/** Returns the given React children prop as a regular array of React nodes. */
export const childrenToArray = children =>
  children && React.Children.count(children) > 0 && React.Children.toArray(children);

/** Returns true if the component has the desired displayName value */
export const hasDisplayName = (component, displayName) =>
  component && component.type && component.type.displayName === displayName;

export const noop = Function.prototype;

export const helpers = {
  debounce,
  selectKeys,
  filterKeys,
  excludeKeys,
  childrenToArray,
  hasDisplayName,
  noop
};

export default helpers;
