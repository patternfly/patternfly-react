import * as React from 'react';
import CloseIcon from '@patternfly/react-icons/dist/js/icons/close-icon';
import { Button, ButtonProps } from '@patternfly/react-core';

/**
 *
 */
export function CancelButton({ variant = 'plain', ...props }: ButtonProps) {
  return (
    <Button variant={variant} {...props}>
      <CloseIcon />
    </Button>
  );
}
