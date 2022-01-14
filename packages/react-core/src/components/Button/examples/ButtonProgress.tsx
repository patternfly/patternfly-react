import React from 'react';
import { Button, Flex } from '@patternfly/react-core';

export const ButtonProgress: React.FunctionComponent = () => {
  const [isPrimaryLoading, setIsPrimaryLoading] = React.useState(true);
  const [isSecondaryLoading, setIsSecondaryLoading] = React.useState(true);

  return (
    <Flex>
      <Button
        isLoading={isPrimaryLoading}
        variant="primary"
        onClick={() => setIsPrimaryLoading(!isPrimaryLoading)}
        {...(isPrimaryLoading && { spinnerAriaValueText: 'Loading' })}
      >
        {isPrimaryLoading ? 'Click to stop loading' : 'Click to start loading'}
      </Button>

      <Button
        isLoading={isSecondaryLoading}
        variant="secondary"
        onClick={() => setIsSecondaryLoading(!isSecondaryLoading)}
        {...(isSecondaryLoading && { spinnerAriaValueText: 'Loading' })}
      >
        {isSecondaryLoading ? 'Click to stop loading' : 'Click to start loading'}
      </Button>
    </Flex>
  );
};
