import styles from '@patternfly/react-styles/css/components/Drawer/drawer';
import { css } from '@patternfly/react-styles';
import { DrawerColorVariant } from './Drawer';

export interface DrawerSectionProps extends React.HTMLProps<HTMLDivElement> {
  /** Additional classes added to the drawer section. */
  className?: string;
  /** Content to be rendered in the drawer section. */
  children?: React.ReactNode;
  /**
   * Color variant of the background of the drawer section.
   * The `no-background` value is deprecated; use the `isPlain` prop instead.
   */
  colorVariant?: DrawerColorVariant | 'no-background' | 'default' | 'secondary';
  /** @beta Flag indicating that the drawer section should use plain styles. */
  isPlain?: boolean;
}

export const DrawerSection: React.FunctionComponent<DrawerSectionProps> = ({
  className = '',
  children,
  colorVariant = DrawerColorVariant.default,
  isPlain = false,
  ...props
}: DrawerSectionProps) => (
  <div
    className={css(
      styles.drawerSection,
      isPlain && styles.modifiers.plain,
      colorVariant === DrawerColorVariant.noBackground && styles.modifiers.noBackground,
      colorVariant === DrawerColorVariant.secondary && styles.modifiers.secondary,
      className
    )}
    {...props}
  >
    {children}
  </div>
);
DrawerSection.displayName = 'DrawerSection';
