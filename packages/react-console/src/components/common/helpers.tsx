import React from 'react';

export const child = (children: React.ReactNode, index: number) => {
  const childrenArray = React.Children.toArray(children);
  return (childrenArray && childrenArray.length > index && childrenArray[index]) || null;
};
