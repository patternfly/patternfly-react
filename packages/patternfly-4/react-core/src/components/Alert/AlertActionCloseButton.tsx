import * as React from 'react';
import { Button, ButtonVariant, ButtonProps } from '../Button';
import { TimesIcon } from '@patternfly/react-icons';

interface AlertActionCloseButtonProps extends ButtonProps {
  /** Additional classes added to the AlertActionCloseButton */
  className?: string;
  /** A callback for when the close button is clicked */
  onClose?: () => void;
  /** Aria Label for the Close button */
  'aria-label'?: string;
  /** Variant Label for the Close button */
  variantLabel?: string;
};

export const AlertActionCloseButton = ({
  className = '',
  onClose = () => undefined as any,
  'aria-label': ariaLabel = '',
  title,
  variantLabel = '',
  ...props
}: AlertActionCloseButtonProps) => (
  <Button
    variant={ButtonVariant.plain}
    onClick={onClose}
    aria-label={ariaLabel === '' ? `Close ${variantLabel} alert: ${title}` : ariaLabel}
    {...props}
  >
    <TimesIcon />
  </Button>
);
