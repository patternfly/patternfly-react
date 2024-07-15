import React from 'react';
import { Checkbox } from '@patternfly/react-core';
import { SimpleSelect, SimpleSelectOption } from '@patternfly/react-templates';

const Options: SimpleSelectOption[] = [
  { content: 'Option 1', value: 'Option1' },
  { content: 'Option 2', value: 'Option2', description: 'Option with description' },
  { content: 'Option 3', value: 'Option3' }
];

export const SelectSimpleDemo: React.FunctionComponent = () => {
  const [isDisabled, setIsDisabled] = React.useState<boolean>(false);
  const [selected, setSelected] = React.useState<string | undefined>('Option1');

  const initialOptions = React.useMemo<SimpleSelectOption[]>(
    () => Options.map((o) => ({ ...o, selected: o.value === selected })),
    [selected]
  );

  return (
    <React.Fragment>
      <Checkbox
        id="toggle-disabled"
        label="isDisabled"
        isChecked={isDisabled}
        onChange={(_event, checked) => setIsDisabled(checked)}
        style={{ marginBottom: 20 }}
      />
      <SimpleSelect
        initialOptions={initialOptions}
        isDisabled={isDisabled}
        onSelect={(_ev, selection) => setSelected(String(selection))}
      />
    </React.Fragment>
  );
};
