import { HTMLProps, ReactNode, Ref, forwardRef } from 'react';
import styles from '@patternfly/react-styles/css/components/Menu/menu';
import { css } from '@patternfly/react-styles';

export interface MenuSearchProps extends HTMLProps<HTMLElement> {
  /** Items within search */
  children?: ReactNode;
  /** @hide Forwarded ref */
  innerRef?: Ref<any>;
}

export const MenuSearch = forwardRef((props: MenuSearchProps, ref: Ref<HTMLDivElement>) => (
  <div {...props} className={css(styles.menuSearch, props.className)} ref={ref} />
));
MenuSearch.displayName = 'MenuSearch';
