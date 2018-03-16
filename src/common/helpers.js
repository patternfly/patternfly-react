import React from 'react';

export const bindMethods = (context, methods) => {
  methods.forEach(method => {
    context[method] = context[method].bind(context);
  });
};

// Implementation of the debounce function
export const debounce = (func, wait) => {
  let timeout;
  function innerFunc(...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  }
  return innerFunc;
};

// Returns a subset of the given object including only the given keys, with values optionally replaced by a fn.
export const selectKeys = (obj, keys, fn = val => val) =>
  keys.reduce((values, key) => ({ ...values, [key]: fn(obj[key]) }), {});

// Returns a subset of the given object with a validator function applied to its keys.
export const filterKeys = (obj, validator) =>
  selectKeys(obj, Object.keys(obj).filter(validator));

export const childrenToArray = children =>
  children &&
  React.Children.count(children) > 0 &&
  React.Children.toArray(children);

export const filterChildren = (children, validator) => {
  const array = childrenToArray(children);
  return array && array.filter(validator);
};

export const findChild = (children, validator) => {
  const array = childrenToArray(children);
  return array && array.find(validator);
};

export const propsChanged = (propNames, oldProps, newProps) =>
  propNames.some(propName => oldProps[propName] !== newProps[propName]);

// Returns an object with the same keys as the given one, but all null values.
export const nullValues = obj => selectKeys(obj, Object.keys(obj), () => null);

export const noop = Function.prototype;

export const KEY_CODES = { TAB_KEY: 9, ENTER_KEY: 13, ESCAPE_KEY: 27 };
