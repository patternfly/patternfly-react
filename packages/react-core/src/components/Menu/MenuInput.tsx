import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Menu/menu';

export interface MenuInputProps extends React.HTMLProps<HTMLElement> {
  /** Items within input */
  children?: React.ReactNode;
  /** Forwarded ref */
  innerRef?: React.Ref<any>;
}

const MenuInputBase: React.FunctionComponent<MenuInputProps> = ({ children }: MenuInputProps) => (
  <div className={styles.menuSearch}>{children}</div>
);

export const MenuInput = React.forwardRef((props: MenuInputProps, ref: React.Ref<HTMLElement>) => (
  <MenuInputBase {...props} innerRef={ref} />
));
MenuInput.displayName = 'MenuInput';
