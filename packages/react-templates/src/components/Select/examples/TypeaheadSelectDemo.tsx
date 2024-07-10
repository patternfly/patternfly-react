import React from 'react';
import { TypeaheadSelect, TypeaheadSelectOption } from '@patternfly/react-templates';

const Options = [
  { content: 'Alabama', value: 'option1' },
  { content: 'Florida', value: 'option2' },
  { content: 'New Jersey', value: 'option3' },
  { content: 'New Mexico', value: 'option4' },
  { content: 'New York', value: 'option5' },
  { content: 'North Carolina', value: 'option6' }
];

/* eslint-disable no-console */
export const SelectTypeaheadDemo: React.FunctionComponent = () => {
  const [selected, setSelected] = React.useState<string | undefined>();

  const initialOptions = React.useMemo<TypeaheadSelectOption[]>(
    () => Options.map((o) => ({ ...o, selected: o.value === selected })),
    [selected]
  );

  React.useEffect(() => {
    console.log(`Selected: ${selected || 'none'}`);
  }, [selected]);

  return (
    <TypeaheadSelect
      initialOptions={initialOptions}
      placeholder="Select a state"
      noOptionsFoundMessage={(filter) => `No state was found for "${filter}"`}
      onClearSelection={() => setSelected(undefined)}
      onSelect={(_ev, selection) => setSelected(String(selection))}
    />
  );
};
