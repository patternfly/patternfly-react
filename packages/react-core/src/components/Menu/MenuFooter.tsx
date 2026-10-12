import styles from '@rh-felt/react-styles/css/components/Menu/menu';
import { css } from '@rh-felt/react-styles';

export interface MenuFooterProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the footer */
  children?: React.ReactNode;
  /** Additional classes added to the footer */
  className?: string;
}

export const MenuFooter: React.FunctionComponent<MenuFooterProps> = ({
  children,
  className = '',
  ...props
}: MenuFooterProps) => (
  <div {...props} className={css(styles.menuFooter, className)}>
    {children}
  </div>
);

MenuFooter.displayName = 'MenuFooter';
