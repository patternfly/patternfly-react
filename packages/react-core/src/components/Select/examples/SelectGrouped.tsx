import React from 'react';
import { Select, SelectOption, SelectList, SelectGroup, Divider } from '@patternfly/react-core';

export const SelectGrouped: React.FunctionComponent = () => (
  <Select id="single-grouped-select" placeholder="Select a value">
    <SelectGroup label="Group 1">
      <SelectList>
        <SelectOption value="Option 1">Option 1</SelectOption>
        <SelectOption value="Option 2">Option 2</SelectOption>
        <SelectOption value="Option 3">Option 3</SelectOption>
      </SelectList>
    </SelectGroup>
    <Divider />
    <SelectGroup label="Group 2">
      <SelectList>
        <SelectOption value="Option 4">Option 4</SelectOption>
        <SelectOption value="Option 5">Option 5</SelectOption>
        <SelectOption value="Option 6">Option 6</SelectOption>
      </SelectList>
    </SelectGroup>
  </Select>
);
