import { HTMLProps, ReactNode, Ref, forwardRef } from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Menu/menu';

export interface MenuSearchInputProps extends HTMLProps<HTMLElement> {
  /** Items within input */
  children?: ReactNode;
  /** @hide Forwarded ref */
  innerRef?: Ref<any>;
}

export const MenuSearchInput = forwardRef((props: MenuSearchInputProps, ref: Ref<HTMLDivElement>) => (
  // Update to use the styles object when core adds the class
  <div {...props} className={css(`${styles.menuSearch}-input`, props.className)} ref={ref} />
));
MenuSearchInput.displayName = 'MenuSearchInput';
