import React from 'react';
import { Button } from '@patternfly/react-core';

export const ButtonProgress: React.FunctionComponent = () => {
  const [isPrimaryLoading, setIsPrimaryLoading] = React.useState<boolean>(true);
  const [isSecondaryLoading, setIsSecondaryLoading] = React.useState<boolean>(true);

  return (
    <React.Fragment>
      <Button
        spinnerAriaValueText={isPrimaryLoading ? 'Loading' : undefined}
        isLoading={isPrimaryLoading}
        variant="primary"
        onClick={() => setIsPrimaryLoading(!isPrimaryLoading)}
        {...(isPrimaryLoading && { spinnerAriaValueText: 'Loading' })}
      >
        {isPrimaryLoading ? 'Click to stop loading' : 'Click to start loading'}
      </Button>{' '}
      <Button
        spinnerAriaValueText={isSecondaryLoading ? 'Loading' : undefined}
        isLoading={isSecondaryLoading}
        variant="secondary"
        onClick={() => setIsSecondaryLoading(!isSecondaryLoading)}
        {...(isSecondaryLoading && { spinnerAriaValueText: 'Loading' })}
      >
        {isSecondaryLoading ? 'Click to stop loading' : 'Click to start loading'}
      </Button>
      <br />
      <br />
    </React.Fragment>
  );
};
