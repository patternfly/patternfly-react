import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Popover/popover';
import { css } from '@patternfly/react-styles';

/**
 *
 */
export function PopoverArrow({ className = '', ...props }: PopoverArrowProps) {
  return <div className={css(styles.popoverArrow, className)} {...props} />;
}

export interface PopoverArrowProps extends React.HTMLProps<HTMLDivElement> {
  /** Popover arrow additional className */
  className?: string;
}
