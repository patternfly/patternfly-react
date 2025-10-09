import { Fragment, useMemo, useState, FunctionComponent } from 'react';
import { Checkbox } from '@patternfly/react-core';
import { SimpleSelect, SimpleSelectOption } from '@patternfly/react-templates';

const Options: SimpleSelectOption[] = [
  { content: 'Option 1', value: 'Option1' },
  { content: 'Option 2', value: 'Option2', description: 'Option with description' },
  { content: 'Option 3', value: 'Option3' }
];

export const SelectSimpleDemo: FunctionComponent = () => {
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [selected, setSelected] = useState<string | undefined>('Option1');

  const initialOptions = useMemo<SimpleSelectOption[]>(
    () => Options.map((o) => ({ ...o, selected: o.value === selected })),
    [selected]
  );

  return (
    <Fragment>
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
    </Fragment>
  );
};
