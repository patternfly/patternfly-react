import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Menu/menu';
import { css } from '@patternfly/react-styles';

export interface MenuSearchProps extends React.HTMLProps<HTMLElement> {
  /** Items within search */
  children?: React.ReactNode;
  /** @hide Forwarded ref */
  innerRef?: React.Ref<any>;
}

export const MenuSearch = React.forwardRef((props: MenuSearchProps, ref: React.Ref<HTMLDivElement>) => (
  <div {...props} className={css(styles.menuSearch, props.className)} ref={ref} />
));
MenuSearch.displayName = 'MenuSearch';
