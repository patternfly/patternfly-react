import * as React from 'react';
import styles from '@breakaway/react-styles/css/components/Popover/popover';
import { css } from '@breakaway/react-styles';

export const PopoverArrow: React.FunctionComponent<PopoverArrowProps> = ({
  className = '',
  ...props
}: PopoverArrowProps) => <div className={css(styles.popoverArrow, className)} {...props} />;
PopoverArrow.displayName = 'PopoverArrow';

export interface PopoverArrowProps extends React.HTMLProps<HTMLDivElement> {
  /** Popover arrow additional className */
  className?: string;
}
