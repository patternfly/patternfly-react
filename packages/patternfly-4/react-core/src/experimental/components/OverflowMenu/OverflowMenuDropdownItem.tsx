import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/OverflowMenu/overflow-menu';
import { DropdownItem } from '../../../components/Dropdown';

export interface OverflowMenuDropdownItemProps extends React.HTMLProps<HTMLDivElement> {
  /** Any elements that can be rendered in the menu */
  children?: any;
  /** Indicates when a dropdown item shows and hides the corresponding list item */
  isShared?: boolean;
}

export const OverflowMenuDropdownItem: React.SFC<OverflowMenuDropdownItemProps> = ({
  children,
  isShared = false
}) => (
  <DropdownItem
    listItemClassName={css(isShared && styles.overflowMenuSharedItem) || null}
    component="button"
  >
    {children}
  </DropdownItem>
);
