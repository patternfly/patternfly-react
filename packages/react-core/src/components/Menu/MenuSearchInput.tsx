import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Menu/menu';

export interface MenuSearchInputProps extends React.HTMLProps<HTMLElement> {
  /** Items within input */
  children?: React.ReactNode;
  /** @hide Forwarded ref */
  innerRef?: React.Ref<any>;
}

export const MenuSearchInput = React.forwardRef((props: MenuSearchInputProps, ref: React.Ref<HTMLDivElement>) => (
  // Update to use the styles object when core adds the class
  <div {...props} className={css(`${styles.menuSearch}-input`, props.className)} ref={ref} />
));
MenuSearchInput.displayName = 'MenuSearchInput';
