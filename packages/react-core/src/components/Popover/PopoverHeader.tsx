import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Popover/popover';

export interface PopoverHeaderProps extends React.HTMLProps<HTMLHeadingElement> {
  /** Content of the popover header. */
  children: React.ReactNode;
  /** Indicates the header contains an icon. */
  hasIcon?: boolean;
  /** Class to be applied to the header. */
  className?: string;
}

export const PopoverHeader: React.FunctionComponent<PopoverHeaderProps> = ({
  children,
  hasIcon = false,
  className,
  ...props
}: PopoverHeaderProps) => (
  <header className={css('pf-c-popover__header', className)} {...props}>
    <h1 className={css(styles.popoverTitle, hasIcon && styles.modifiers.icon)}>{children}</h1>
  </header>
);
PopoverHeader.displayName = 'PopoverHeader';
