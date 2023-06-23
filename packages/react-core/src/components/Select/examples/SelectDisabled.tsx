import React from 'react';
import { Select, SelectList, SelectOption } from '@patternfly/react-core';

export const SelectDisabled: React.FunctionComponent = () => (
  <Select id="select-basic" placeholder="Select a value" isDisabled>
    <SelectList>
      <SelectOption value="Option 1">Option 1</SelectOption>
      <SelectOption value="Option 2">Option 2</SelectOption>
      <SelectOption value="Option 3">Option 3</SelectOption>
    </SelectList>
  </Select>
);
