import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Popover/popover';
import { Button } from '../Button';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';

export const PopoverCloseButton: React.FunctionComponent<PopoverCloseButtonProps> = ({
  onClose = () => undefined as void,
  ...props
}: PopoverCloseButtonProps) => (
  <div className={css(styles.popoverClose)}>
    <Button
      onClick={onClose}
      variant="plain"
      aria-label
      {...props}
      style={{ pointerEvents: 'auto' }}
      icon={<TimesIcon />}
    />
  </div>
);

PopoverCloseButton.displayName = 'PopoverCloseButton';

export interface PopoverCloseButtonProps {
  /** PopoverCloseButton onClose function */
  onClose?: (event: any) => void;
  /** Aria label for the Close button */
  'aria-label': string;
}
