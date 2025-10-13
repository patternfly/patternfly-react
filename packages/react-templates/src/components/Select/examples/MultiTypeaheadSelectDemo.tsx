import { useMemo, useState, FunctionComponent } from 'react';
import { MultiTypeaheadSelect, MultiTypeaheadSelectOption } from '@patternfly/react-templates';

const Options = [
  { content: 'Alabama', value: 'option1' },
  { content: 'Arizona', value: 'option2' },
  { content: 'California', value: 'option3' },
  { content: 'Florida', value: 'option4' },
  { content: 'Massachusetts', value: 'option5' },
  { content: 'Maine', value: 'option6' },
  { content: 'New Jersey', value: 'option7' },
  { content: 'New Mexico', value: 'option8' },
  { content: 'New York', value: 'option9' },
  { content: 'North Carolina', value: 'option10' }
];

type SelectionsType = (string | number)[];

export const MultiSelectTypeaheadDemo: FunctionComponent = () => {
  const [selected, setSelected] = useState<SelectionsType>(['option5']);

  const initialOptions = useMemo<MultiTypeaheadSelectOption[]>(
    () => Options.map((o) => ({ ...o, selected: selected.includes(o.value) })),
    [selected]
  );

  return (
    <MultiTypeaheadSelect
      initialOptions={initialOptions}
      placeholder="Select a state"
      noOptionsFoundMessage={(filter) => `No state was found for "${filter}"`}
      onSelectionChange={(_ev, selections) => setSelected(selections)}
    />
  );
};
