import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/OverflowMenu/overflow-menu';
import { DropdownItem } from '@patternfly/react-core';

export interface OverflowMenuDropdownItemProps extends React.HTMLProps<HTMLDivElement> {
  children: any;
  className?: string;
  shared?: boolean;
  persistent?: boolean;
}

export const OverflowMenuDropdownItem: React.SFC<OverflowMenuDropdownItemProps> = ({
  className,
  children,
  shared = false,
  persistent = false
}) => (
  <DropdownItem
    className={css(
      shared && styles.overflowMenuSharedItem,
      persistent && styles.modifiers.persistent,
      className)}
    component="button"
  >
    {children}
  </DropdownItem>
  // <h1>Test</h1>
);