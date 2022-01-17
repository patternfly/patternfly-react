import React from 'react';
import { Button } from '@patternfly/react-core';
import UploadIcon from '@patternfly/react-icons/dist/esm/icons/upload-icon';

export const ButtonProgress: React.FunctionComponent = () => {
  const [isPrimaryLoading, setIsPrimaryLoading] = React.useState<boolean>(true);
  const [isSecondaryLoading, setIsSecondaryLoading] = React.useState<boolean>(true);
  const [isUploading, setIsUploading] = React.useState(true);

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
      </Button>{' '}
      <Button
        spinnerAriaValueText={isUploading ? 'Loading' : undefined}
        isLoading={isUploading}
        variant="plain"
        onClick={() => setIsUploading(!isUploading)}
        icon={<UploadIcon />}
      />
      <br />
      <br />
    </React.Fragment>
  );
};
