import { HTMLProps, ReactNode, FunctionComponent } from 'react';
import styles from '@patternfly/react-styles/css/components/Popover/popover';
import { css } from '@patternfly/react-styles';

export interface PopoverBodyProps extends HTMLProps<HTMLDivElement> {
  /** Popover body id */
  id: string;
  /** Popover body content */
  children: ReactNode;
  /** Classes to be applied to the popover body. */
  className?: string;
}

export const PopoverBody: FunctionComponent<PopoverBodyProps> = ({
  children,
  id,
  className,
  ...props
}: PopoverBodyProps) => (
  <div className={css(styles.popoverBody, className)} id={id} {...props}>
    {children}
  </div>
);
PopoverBody.displayName = 'PopoverBody';
