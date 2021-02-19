import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Drawer/drawer';
import { css } from '@patternfly/react-styles';
import { DrawerMain } from './DrawerMain';
import { DrawerColorVariant } from './Drawer';

export interface DrawerContentProps extends React.HTMLProps<HTMLDivElement> {
  /** Additional classes added to the Drawer. */
  className?: string;
  /** Content to be rendered in the drawer. */
  children?: React.ReactNode;
  /** Content rendered in the drawer panel. */
  panelContent: React.ReactNode;
  /** Color variant of the background of the drawer panel */
  colorVariant?: DrawerColorVariant | 'light-200' | 'default';
}

export const DrawerContent: React.SFC<DrawerContentProps> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  className = '',
  children,
  panelContent,
  colorVariant = DrawerColorVariant.default,
  ...props
}: DrawerContentProps) => (
  <DrawerMain>
    <div
      className={css(
        styles.drawerContent,
        colorVariant === DrawerColorVariant.light200 && styles.modifiers.light_200,
        className
      )}
      {...props}
    >
      {children}
    </div>
    {panelContent}
  </DrawerMain>
);
DrawerContent.displayName = 'DrawerContent';
