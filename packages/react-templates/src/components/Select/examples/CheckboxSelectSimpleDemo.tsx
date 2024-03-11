import React from 'react';
import { CheckboxSelectSimple, CheckboxSelectSimpleOption } from '@patternfly/react-templates';

export const SelectBasic: React.FunctionComponent = () => {
  const initialOptions: CheckboxSelectSimpleOption[] = [
    { content: 'Option 1', value: 'option-1' },
    { content: 'Option 2', value: 'option-2' },
    { content: 'Option 3', value: 'option-3', isDisabled: true },
    { content: 'Option 4', value: 'option-4' }
  ];

  return <CheckboxSelectSimple initialOptions={initialOptions} />;
};
