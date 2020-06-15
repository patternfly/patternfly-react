import * as React from 'react';
import CheckIcon from '@patternfly/react-icons/dist/js/icons/check-icon';
import { Button, ButtonProps } from '@patternfly/react-core';

/**
 *
 */
export function ConfirmButton({ variant = 'primary', ...props }: ButtonProps) {
  return (
    <Button variant={variant} {...props}>
      <CheckIcon />
    </Button>
  );
}
