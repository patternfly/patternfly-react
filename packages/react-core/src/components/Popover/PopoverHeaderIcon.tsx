import { HTMLProps, ReactNode, FunctionComponent } from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Popover/popover';

export interface PopoverHeaderIconProps extends HTMLProps<HTMLSpanElement> {
  /** Content of the header icon */
  children: ReactNode;
  /** Class to be applied to the header icon */
  className?: string;
}

export const PopoverHeaderIcon: FunctionComponent<PopoverHeaderIconProps> = ({
  children,
  className,
  ...props
}: PopoverHeaderIconProps) => (
  <span className={css(styles.popoverTitleIcon, className)} {...props}>
    {children}
  </span>
);
PopoverHeaderIcon.displayName = 'PopoverHeaderIcon';
