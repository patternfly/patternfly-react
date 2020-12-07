import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Menu/menu';
import { css } from '@patternfly/react-styles';

export interface MenuContentProps extends React.HTMLProps<HTMLElement> {
  /** Items within group */
  children?: React.ReactNode;
  /** Forwarded ref */
  innerRef?: React.Ref<any>;
}

export const MenuContent = React.forwardRef((props: MenuContentProps, ref: React.Ref<HTMLDivElement>) => (
  <div {...props} className={css(styles.menuContent, props.className)} ref={ref} />
));
MenuContent.displayName = 'MenuContent';
