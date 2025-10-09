import { useMemo, useState, FunctionComponent } from 'react';
import { CheckboxSelect, CheckboxSelectOption } from '@patternfly/react-templates';

const Options: { content: string; value: string; description?: string; isDisabled?: boolean }[] = [
  { content: 'Option 1', value: 'option-1' },
  { content: 'Option 2', value: 'option-2', description: 'Option with description' },
  { content: 'Option 3', value: 'option-3', isDisabled: true },
  { content: 'Option 4', value: 'option-4' }
];

export const SelectBasic: FunctionComponent = () => {
  const [selected, setSelected] = useState<string[]>(['option-2']);

  const initialOptions = useMemo<CheckboxSelectOption[]>(
    () => Options.map((o) => ({ ...o, selected: selected.includes(o.value) })),
    [selected]
  );

  return (
    <CheckboxSelect
      initialOptions={initialOptions}
      onSelect={(_ev, value) => {
        const val = String(value);
        setSelected((prevSelected) =>
          prevSelected.includes(val) ? prevSelected.filter((item) => item !== val) : [...prevSelected, String(val)]
        );
      }}
    />
  );
};
