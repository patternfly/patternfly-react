import React from 'react';
import { default as Timer } from './Timer';
import { closest as closestPolyfill } from './closestPolyfill';
import { default as controlled } from './controlled';
import { patternfly, c3ChartDefaults, layout } from './patternfly';

/** Equivalent to calling `this.someMethod = this.someMethod.bind(this)` for every method name in the methods array. */
export const bindMethods = (context, methods) => {
  // eslint-disable-next-line no-console
  console.warn(`
   bindMethods usage is deprecated in favor of class methods.
   bindMethods will be removed in the next major release
   `);
  methods.forEach(method => {
    context[method] = context[method].bind(context);
  });
};

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

/** Returns true if propName is a non-null, defined property of the props object (can be any object, not just React props). */
export const propExists = (props, propName) => props && props.hasOwnProperty(propName) && props[propName] != null;

/** Given two objects (props and state), returns the value of propName from props if present, or from state otherwise. */
export const propOrState = (props, state, propName) =>
  propExists(props, propName) ? props[propName] : state[propName];

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

/** Filters the given React children prop with the given validator function. Returns an array of nodes. */
export const filterChildren = (children, validator) => {
  const array = childrenToArray(children);
  return array && array.filter(validator);
};

/** Given a React children prop, finds the first child node to pass the validator function. */
export const findChild = (children, validator) => {
  const array = childrenToArray(children);
  return array && array.find(validator);
};

/** Returns true if there is at least one of propNames with a different value in newProps than in oldProps. */
export const propsChanged = (propNames, oldProps, newProps) =>
  propNames.some(propName => oldProps[propName] !== newProps[propName]);

/** Returns true if the component has the desired displayName value */
export const hasDisplayName = (component, displayName) =>
  component && component.type && component.type.displayName === displayName;

/** Returns an object with the same keys as the given one, but all null values. */
export const nullValues = obj => selectKeys(obj, Object.keys(obj), () => null);

export const noop = Function.prototype;

export const KEY_CODES = {
  TAB_KEY: 9,
  ENTER_KEY: 13,
  ESCAPE_KEY: 27,
  SHIFT: 16,
  A: 65,
  Z: 90,
  NUMPAD: { 0: 97 },
  F11: 122
};
export const KEYS = {
  ENTER: 'Enter',
  CAPSLOCK: 'CapsLock',
  SPACE: ' ',
  ARROW_LEFT: 'ArrowLeft',
  ARROW_RIGHT: 'ArrowRight',
  ARROW_DOWN: 'ArrowDown',
  ARROW_UP: 'ArrowUp',
  HOME: 'Home',
  END: 'End'
};

export const helpers = {
  Timer,
  closestPolyfill,
  controlled,
  patternfly,
  c3ChartDefaults,
  layout,
  debounce,
  propExists,
  propOrState,
  selectKeys,
  filterKeys,
  excludeKeys,
  childrenToArray,
  filterChildren,
  findChild,
  propsChanged,
  hasDisplayName,
  nullValues,
  noop,
  KEY_CODES,
  KEYS
};

export default helpers;
