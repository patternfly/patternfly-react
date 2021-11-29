import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Popover/popover';

export interface PopoverHeaderTextProps extends React.HTMLProps<HTMLDivElement> {
  /** Content of the header text */
  children: React.ReactNode;
}

export const PopoverHeaderText: React.FunctionComponent<PopoverHeaderTextProps> = ({
  children,
  ...props
}: PopoverHeaderTextProps) => (
  <span className={css(styles.popoverTitleText)} {...props}>
    {children}
  </span>
);
PopoverHeaderText.displayName = 'PopoverHeaderText';
