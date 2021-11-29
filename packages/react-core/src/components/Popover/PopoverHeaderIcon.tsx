import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Popover/popover';

export interface PopoverHeaderIconProps extends React.HTMLProps<HTMLSpanElement> {
  /** Content of the header icon */
  children: React.ReactNode;
}

export const PopoverHeaderIcon: React.FunctionComponent<PopoverHeaderIconProps> = ({
  children,
  ...props
}: PopoverHeaderIconProps) => (
  <span className={css(styles.popoverTitleIcon)} {...props}>
    {children}
  </span>
);
PopoverHeaderIcon.displayName = 'PopoverHeaderIcon';
