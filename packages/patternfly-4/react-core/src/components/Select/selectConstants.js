import React from 'react';

export const SelectContext = React.createContext({
  onSelect: () => {},
  onClose: () => {}
});

export const SelectVariant = {
  single: 'single',
  checkbox: 'checkbox',
  typeahead: 'typeahead',
  typeaheadMulti: 'typeaheadmulti'
};

export const KeyTypes = {
  Tab: 'Tab',
  Space: ' ',
  Escape: 'Escape',
  Enter: 'Enter',
  ArrowUp: 'ArrowUp',
  ArrowDown: 'ArrowDown'
};
