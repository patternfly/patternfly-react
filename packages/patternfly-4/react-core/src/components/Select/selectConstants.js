import React from 'react';

export const SelectContext = React.createContext({
  onSelect: () => {}
});

export const SelectVariant = {
  single: 'single'
};

export const KeyTypes = {
  Tab: 'Tab',
  Space: ' ',
  Escape: 'Escape',
  Enter: 'Enter'
};
