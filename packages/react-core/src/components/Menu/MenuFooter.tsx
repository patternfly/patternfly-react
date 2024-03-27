import { HTMLProps, ReactNode, FunctionComponent } from 'react';
import styles from '@patternfly/react-styles/css/components/Menu/menu';
import { css } from '@patternfly/react-styles';

export interface MenuFooterProps extends HTMLProps<HTMLDivElement> {
  /** Content rendered inside the footer */
  children?: ReactNode;
  /** Additional classes added to the footer */
  className?: string;
}

export const MenuFooter: FunctionComponent<MenuFooterProps> = ({
  children,
  className = '',
  ...props
}: MenuFooterProps) => (
  <div {...props} className={css(styles.menuFooter, className)}>
    {children}
  </div>
);

MenuFooter.displayName = 'MenuFooter';
