import * as React from 'react';
import styles from '@patternfly/patternfly/components/Popover/popover.css';
import { css } from '@patternfly/react-styles';

export const PopoverArrow: React.FunctionComponent<PopoverArrowProps> = ({ className='', ...props }) => 
  <div className={css(styles.popoverArrow, className)} {...props} />;

export interface PopoverArrowProps extends React.HTMLProps<HTMLDivElement> {
  /** Popover arrow additional className */
  className?: string;
}
