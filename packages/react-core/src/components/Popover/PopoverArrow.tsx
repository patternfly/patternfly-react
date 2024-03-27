import { FunctionComponent, HTMLProps } from 'react';
import styles from '@patternfly/react-styles/css/components/Popover/popover';
import { css } from '@patternfly/react-styles';

export const PopoverArrow: FunctionComponent<PopoverArrowProps> = ({ className = '', ...props }: PopoverArrowProps) => (
  <div className={css(styles.popoverArrow, className)} {...props} />
);
PopoverArrow.displayName = 'PopoverArrow';

export interface PopoverArrowProps extends HTMLProps<HTMLDivElement> {
  /** Popover arrow additional className */
  className?: string;
}
