import React from 'react';
import { Button } from '@patternfly/react-core';
import UploadIcon from '@patternfly/react-icons/dist/esm/icons/upload-icon';

interface LoadingPropsType {
  spinnerAriaValueText: string;
  spinnerAriaLabelledBy?: string;
  spinnerAriaLabel?: string;
  isLoading: boolean;
}

export const ButtonProgress: React.FunctionComponent = () => {
  const [isPrimaryLoading, setIsPrimaryLoading] = React.useState<boolean>(true);
  const [isSecondaryLoading, setIsSecondaryLoading] = React.useState<boolean>(true);
  const [isUploading, setIsUploading] = React.useState<boolean>(false);

  const primaryLoadingProps = {} as LoadingPropsType;
  primaryLoadingProps.spinnerAriaValueText = 'Loading';
  primaryLoadingProps.spinnerAriaLabelledBy = 'primary-loading-button';
  primaryLoadingProps.isLoading = isPrimaryLoading;

  const secondaryLoadingProps = {} as LoadingPropsType;
  secondaryLoadingProps.spinnerAriaValueText = 'Loading';
  secondaryLoadingProps.spinnerAriaLabel = 'Content being loaded';
  secondaryLoadingProps.isLoading = isSecondaryLoading;

  const uploadingProps = {} as LoadingPropsType;
  uploadingProps.spinnerAriaValueText = 'Loading';
  uploadingProps.spinnerAriaLabel = 'Uploading data';
  uploadingProps.isLoading = isUploading;

  return (
    <React.Fragment>
      <Button
        variant="primary"
        id="primary-loading-button"
        onClick={() => setIsPrimaryLoading(!isPrimaryLoading)}
        {...primaryLoadingProps}
      >
        {isPrimaryLoading ? 'Pause loading logs' : 'Resume loading logs'}
      </Button>{' '}
      <Button variant="secondary" onClick={() => setIsSecondaryLoading(!isSecondaryLoading)} {...secondaryLoadingProps}>
        {isSecondaryLoading ? 'Click to stop loading' : 'Click to start loading'}
      </Button>{' '}
      <Button
        variant="plain"
        {...(!isUploading && { 'aria-label': 'Upload' })}
        onClick={() => setIsUploading(!isUploading)}
        icon={<UploadIcon />}
        {...uploadingProps}
      />
    </React.Fragment>
  );
};
