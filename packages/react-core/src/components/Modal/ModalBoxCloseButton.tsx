import * as React from 'react';
import { Button } from '../Button';
import TimesIcon from '@patternfly/react-icons/dist/js/icons/times-icon';

export interface ModalBoxCloseButtonProps {
  /** Additional classes added to the close button */
  className?: string;
  /** A callback for when the close button is clicked */
  onClose?: () => void;
  /** Adds disabled styling and disables the button using the disabled html attribute */
  isDisabled?: boolean;
}

export const ModalBoxCloseButton: React.FunctionComponent<ModalBoxCloseButtonProps> = ({
  className = '',
  onClose = () => undefined as any,
  isDisabled = false,
  ...props
}: ModalBoxCloseButtonProps) => (
  <Button className={className} variant="plain" onClick={onClose} aria-label="Close" isDisabled={isDisabled} {...props}>
    <TimesIcon />
  </Button>
);
ModalBoxCloseButton.displayName = 'ModalBoxCloseButton';
