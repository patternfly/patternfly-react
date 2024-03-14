import React from 'react';
import { SelectOption, Checkbox } from '@patternfly/react-core';
import { SelectSimple } from '@patternfly/react-templates';

export const SelectSimpleDemo: React.FunctionComponent = () => {
  const [isDisabled, setIsDisabled] = React.useState<boolean>(false);

  const initialOptions = [
    <SelectOption value="Option 1" key={0}>
      Option 1
    </SelectOption>,
    <SelectOption value="Option 2" key={1}>
      Option 2
    </SelectOption>,
    <SelectOption value="Option 3" key={2}>
      Option 3
    </SelectOption>
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
