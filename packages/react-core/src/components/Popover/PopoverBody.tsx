import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Popover/popover';
import { css } from '@patternfly/react-styles';

export const PopoverBody: React.FunctionComponent<PopoverBodyProps> = ({
  children,
  id,
  ...props
}: PopoverBodyProps) => (
  <div className={css(styles.popoverBody)} id={id} {...props}>
    {children}
  </div>
);
PopoverBody.displayName = 'PopoverBody';

export interface PopoverBodyProps extends React.HTMLProps<HTMLDivElement> {
  /** PopoverBody id */
  id: string;
  /** PopoverBody content */
  children: React.ReactNode;
}
