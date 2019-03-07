import React, { MouseEvent } from 'react';
import { Button } from '../Button';
import { TimesIcon } from '@patternfly/react-icons';

export interface AlertActionCloseButtonProps {
  /** aria-label  */
  'aria-label': string;
  /** additional classes added to the AlertActionCloseButton  */
  className?: string;
  /** A callback for when the close button is clicked  */
  onClose?(event: MouseEvent<HTMLButtonElement>): void;
  /** title  */
  title: string;
  /** variantLabel  */
  variantLabel: string;
};

export const defaultAlertActionCloseButtonProps = {
  'aria-label': '',
  className: '',
  onClose: () => undefined
};

export const AlertActionCloseButton: React.FunctionComponent<AlertActionCloseButtonProps> = ({ className, onClose, 'aria-label': ariaLabel, title, variantLabel, ...props }: AlertActionCloseButtonProps) => (
  <Button
    variant="plain"
    onClick={onClose}
    aria-label={ariaLabel === '' ? `Close ${variantLabel} alert: ${title}` : ariaLabel}
    {...props}
  >
    <TimesIcon />
  </Button>
);

AlertActionCloseButton.defaultProps = defaultAlertActionCloseButtonProps;
