import React from 'react';
import { Hint, HintTitle, HintBody, Button, Checkbox } from '@patternfly/react-core';

export const HintActionsWithNoOffset: React.FunctionComponent = () => {
  const [hasNoOffset, setHasNoOffset] = React.useState<boolean>(false);

  const toggleOffset = (checked: boolean) => {
    setHasNoOffset(checked);
  };

  const actions = <Button variant="primary">Action</Button>;
  return (
    <>
      <Checkbox
        label="actions hasNoOffset"
        isChecked={hasNoOffset}
        onChange={(_event, checked) => toggleOffset(checked)}
        aria-label="remove actions offset"
        id="toggle-actions-offset"
        name="toggle-actions-offset"
      />
      <div style={{ marginTop: '15px' }}>
        <Hint actions={actions} hasNoOffset={hasNoOffset}>
          <HintTitle>Do more with Find it Fix it capabilities</HintTitle>
          <HintBody>
            Upgrade to Red Hat Smart Management to remediate all your systems across regions and geographies.
          </HintBody>
        </Hint>
      </div>
    </>
  );
};
