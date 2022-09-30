import React from 'react';
import { Icon, Spinner, Checkbox } from '@patternfly/react-core';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';

export const IconProgress: React.FunctionComponent = () => {
  const [isInProgress, setIsInProgress] = React.useState<boolean>(false);
  return (
    <React.Fragment>
      <div style={{ marginBottom: '12px' }}>
        <Checkbox
          label="Toggle in progress state"
          isChecked={isInProgress}
          onChange={checked => setIsInProgress(checked)}
          aria-label="set icon progress state"
          id="toggle-icon-progress"
          name="toggle-icon-progress"
        />
      </div>
      <Icon
        isInProgress={isInProgress}
        progressIcon={<Spinner size="md" diameter="1em" isSVG aria-label="Loading..." />}
      >
        <CheckCircleIcon />
      </Icon>
    </React.Fragment>
  );
};
