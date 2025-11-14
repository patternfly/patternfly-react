import { useEffect, useMemo, useState, FunctionComponent } from 'react';
import { TypeaheadSelect, TypeaheadSelectOption } from '@patternfly/react-templates';
import { Checkbox } from '@patternfly/react-core';

const Options = [
  { content: 'Alabama', value: 'option1' },
  { content: 'Florida', value: 'option2' },
  { content: 'New Jersey', value: 'option3' },
  { content: 'New Mexico', value: 'option4' },
  { content: 'New York', value: 'option5' },
  { content: 'North Carolina', value: 'option6' }
];

/* eslint-disable no-console */
export const SelectTypeaheadDemo: FunctionComponent = () => {
  const [selected, setSelected] = useState<string | undefined>();
  const [options, setOptions] = useState(Options);
  const [isCreatable, setIsCreatable] = useState<boolean>(false);
  const [isCreateOptionOnTop, setIsCreateOptionOnTop] = useState<boolean>(false);

  const initialOptions = useMemo<TypeaheadSelectOption[]>(
    () => options.map((o) => ({ ...o, selected: o.value === selected })),
    [options, selected]
  );

  useEffect(() => {
    console.log(`Selected: ${selected || 'none'}`);
  }, [selected]);

  return (
    <>
      <TypeaheadSelect
        initialOptions={initialOptions}
        placeholder="Select a state"
        noOptionsFoundMessage={(filter) => `No state was found for "${filter}"`}
        onClearSelection={() => setSelected(undefined)}
        onSelect={(_ev, selection) => {
          if (!options.find((o) => o.value === selection)) {
            setOptions([...options, { content: String(selection), value: String(selection) }]);
          }
          setSelected(String(selection));
        }}
        isCreatable={isCreatable}
        isCreateOptionOnTop={isCreateOptionOnTop}
      />
      <Checkbox
        className="pf-u-mt-sm"
        label="isCreatable"
        isChecked={isCreatable}
        onChange={(_event, checked) => setIsCreatable(checked)}
        aria-label="toggle creatable checkbox"
        id="toggle-creatable-typeahead"
        name="toggle-creatable-typeahead"
      />
      <Checkbox
        label="isCreateOptionOnTop"
        isChecked={isCreateOptionOnTop}
        onChange={(_event, checked) => setIsCreateOptionOnTop(checked)}
        aria-label="toggle createOptionOnTop checkbox"
        id="toggle-create-option-on-top-typeahead"
        name="toggle-create-option-on-top-typeahead"
      />
    </>
  );
};
