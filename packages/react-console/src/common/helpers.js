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

export const child = (children, index) => {
  const childrenArray = React.Children.toArray(children);
  return (childrenArray && childrenArray.length > index && childrenArray[index]) || null;
};
