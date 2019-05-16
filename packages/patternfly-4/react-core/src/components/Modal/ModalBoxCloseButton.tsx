import * as React from 'react';
import { Button } from '../Button';
import { TimesIcon } from '@patternfly/react-icons';

export interface ModalBoxCloseButtonProps {
  /** additional classes added to the close button */
  className?: string;
  /** A callback for when the close button is clicked */
  onClose?(): void;
}

export const ModalBoxCloseButton: React.FunctionComponent<ModalBoxCloseButtonProps> = ({
  className = '',
  onClose = () => undefined,
  ...props
}) => (
  <React.Fragment>
    <Button className={className} variant="plain" onClick={onClose} aria-label="Close" {...props}>
      <TimesIcon />
    </Button>
  </React.Fragment>
);

export default ModalBoxCloseButton;
