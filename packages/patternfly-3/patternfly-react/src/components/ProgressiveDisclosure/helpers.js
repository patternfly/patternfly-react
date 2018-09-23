import React from 'react';
import { ProgressiveDisclosureItem } from './ProgressiveDisclosureItem';

export const disclosureCount = children =>
  React.Children.count(children) > 0
    ? React.Children.map(children, (child, ix) => {
        switch (child.type) {
          case ProgressiveDisclosureItem:
            return true;
          default:
            return false;
        }
      }).filter(childBoolean => childBoolean === true).length
    : 0;

export const singlePick = (selected, ix) => {
  if (selected.includes(ix)) {
    return [];
  }
  return [ix];
};

export const multipPick = (selected, ix) => {
  if (selected.includes(ix)) {
    return selected.filter(v => v !== ix);
  }
  return [...selected, ix];
};
