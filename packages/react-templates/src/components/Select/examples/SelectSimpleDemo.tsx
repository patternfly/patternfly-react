import React from 'react';
import { Checkbox } from '@patternfly/react-core';
import { SelectSimple, SelectSimpleOption } from '@patternfly/react-templates';

export const SelectSimpleDemo: React.FunctionComponent = () => {
  const [isDisabled, setIsDisabled] = React.useState<boolean>(false);

  const initialOptions: SelectSimpleOption[] = [
    { content: 'Option 1', value: 'Option 1' },
    { content: 'Option 2', value: 'Option 2', description: 'Option with description' },
    { content: 'Option 3', value: 'Option 3' }
  ];

  return (
    <React.Fragment>
      <Checkbox
        id="toggle-disabled"
        label="isDisabled"
        isChecked={isDisabled}
        onChange={(_event, checked) => setIsDisabled(checked)}
        style={{ marginBottom: 20 }}
      />
      <SelectSimple initialOptions={initialOptions} isDisabled={isDisabled} />
    </React.Fragment>
  );
};
