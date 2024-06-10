import React from 'react';
import { TypeaheadSelect, TypeaheadSelectOption } from '@patternfly/react-templates';

export const SelectTypeaheadDemo: React.FunctionComponent = () => {
  const initialOptions: TypeaheadSelectOption[] = [
    { content: 'Alabama', value: 'option1' },
    { content: 'Florida', value: 'option2' },
    { content: 'New Jersey', value: 'option3' },
    { content: 'New Mexico', value: 'option4' },
    { content: 'New York', value: 'option5' },
    { content: 'North Carolina', value: 'option6' }
  ];

  return (
    <TypeaheadSelect
      initialOptions={initialOptions}
      placeholder="Select a state"
      noOptionsFoundMessage={(filter) => `No state was found for "${filter}"`}
    />
  );
};
