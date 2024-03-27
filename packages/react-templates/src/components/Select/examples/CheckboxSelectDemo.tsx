import React from 'react';
import { CheckboxSelect, CheckboxSelectOption } from '@patternfly/react-templates';

export const SelectBasic: React.FunctionComponent = () => {
  const initialOptions: CheckboxSelectOption[] = [
    { content: 'Option 1', value: 'option-1' },
    { content: 'Option 2', value: 'option-2' },
    { content: 'Option 3', value: 'option-3', isDisabled: true },
    { content: 'Option 4', value: 'option-4' }
  ];

  return <CheckboxSelect initialOptions={initialOptions} />;
};
