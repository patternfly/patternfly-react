import * as React from 'react';
import CloseIcon from '@patternfly/react-icons/dist/esm/icons/close-icon';
import { Button, ButtonProps } from '@patternfly/react-core';

export const CancelButton: React.FunctionComponent<React.PropsWithChildren<ButtonProps>> = ({
  variant = 'plain',
  ...props
}: ButtonProps) => (
  <Button variant={variant} {...props}>
    <CloseIcon />
  </Button>
);
CancelButton.displayName = 'CancelButton';
