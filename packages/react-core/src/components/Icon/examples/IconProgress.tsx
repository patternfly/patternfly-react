import { Fragment, useState } from 'react';
import { Icon, Checkbox } from '@patternfly/react-core';
import RhUiCheckCircleFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-check-circle-fill-icon';

export const IconProgress: React.FunctionComponent = () => {
  const [isInProgress, setIsInProgress] = useState<boolean>(false);
  return (
    <Fragment>
      <div style={{ marginBottom: '12px' }}>
        <Checkbox
          label="Toggle in progress state"
          isChecked={isInProgress}
          onChange={(_event, checked) => setIsInProgress(checked)}
          aria-label="Set icon progress state"
          id="toggle-icon-progress"
          name="toggle-icon-progress"
        />
      </div>
      <Icon isInProgress={isInProgress}>
        <RhUiCheckCircleFillIcon />
      </Icon>
    </Fragment>
  );
};
