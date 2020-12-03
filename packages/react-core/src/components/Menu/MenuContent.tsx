import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Menu/menu';
import { css } from '@patternfly/react-styles';

export interface MenuContentProps extends React.HTMLProps<HTMLElement> {
  /** Items within group */
  children?: React.ReactNode;
  /** Forwarded ref */
  innerRef?: React.Ref<any>;
}

const MenuContentBase: React.FunctionComponent<MenuContentProps> = ({ children }: MenuContentProps) => (
  <div className={css(styles.menuContent)}>{children}</div>
);

export const MenuContent = React.forwardRef((props: MenuContentProps, ref: React.Ref<HTMLElement>) => (
  <MenuContentBase {...props} innerRef={ref} />
));
MenuContent.displayName = 'MenuContent';
