import React from 'react';
import { SelectOptionProps, SelectTypeahead } from '@patternfly/react-core';

const initialSelectOptions: SelectOptionProps[] = [
  { value: 'Alabama', children: 'Alabama' },
  { value: 'Florida', children: 'Florida' },
  { value: 'New Jersey', children: 'New Jersey' },
  { value: 'New Mexico', children: 'New Mexico' },
  { value: 'New York', children: 'New York' },
  { value: 'North Carolina', children: 'North Carolina' }
];

export const SelectTypeaheadDemo: React.FunctionComponent = () => {
  const onSelect = (value: string | number | undefined) => {
    // eslint-disable-next-line no-console
    console.log('selected:', value);
  };

  const onInput = (value: string) => {
    // eslint-disable-next-line no-console
    console.log('new input:', value);
  };

  return <SelectTypeahead initialOptions={initialSelectOptions} onSelect={onSelect} onInput={onInput} />;
};
