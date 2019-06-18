import * as React from 'react';
import { Button } from '../Button';
import { TimesIcon } from '@patternfly/react-icons';

export interface PopoverCloseButtonProps {
  /** PopoverCloseButton onClose function */
  onClose?: () => void;
  /** Aria label for the Close button */
  'aria-label': string;
}

export const PopoverCloseButton: React.FunctionComponent<PopoverCloseButtonProps> = ({
  onClose = () => undefined as void,
  ...props
  }) => (
  <Button onClick={onClose} variant="plain" aria-label {...props}>
    <TimesIcon />
  </Button>
);
