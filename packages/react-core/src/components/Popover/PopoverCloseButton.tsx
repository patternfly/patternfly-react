import * as React from 'react';
import { Button } from '../Button';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';

export const PopoverCloseButton: React.FunctionComponent<PopoverCloseButtonProps> = ({
  onClose = () => undefined as void,
  ...props
}: PopoverCloseButtonProps) => (
  <Button onClick={onClose} variant="plain" aria-label {...props} style={{ pointerEvents: 'auto' }}>
    <TimesIcon />
  </Button>
);

PopoverCloseButton.displayName = 'PopoverCloseButton';

export interface PopoverCloseButtonProps {
  /** PopoverCloseButton onClose function */
  onClose?: (event: any) => void;
  /** Aria label for the Close button */
  'aria-label': string;
}
