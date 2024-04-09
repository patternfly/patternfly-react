import React from 'react';
import { Checkbox } from '@patternfly/react-core';
import { SelectSimple, SelectSimpleOption } from '@patternfly/react-templates';

export const SelectSimpleDemo: React.FunctionComponent = () => {
  const [isDisabled, setIsDisabled] = React.useState<boolean>(false);

  const initialOptions: SelectSimpleOption[] = [
    { content: 'Option 1', value: 'option1' },
    { content: 'Option 2', value: 'option2' },
    { content: 'Option 3', value: 'option3' }
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
