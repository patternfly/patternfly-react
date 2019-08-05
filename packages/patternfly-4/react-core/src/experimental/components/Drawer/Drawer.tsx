import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Drawer/drawer';
import { css } from '@patternfly/react-styles';
import { DrawerPanelContent } from './DrawerPanelContent';

export interface DrawerProps extends React.HTMLProps<HTMLDivElement> {
  /** Additional classes added to the Drawer. */
  className?: string;
  /** Content rendered inside the button */
  children?: React.ReactNode;
  /** Indicate if the drawer is expanded */
  isExpanded: boolean;
  /** Indicates if the content element and panel element are displayed side by side. */
  isInline: boolean;
  /** Content to rendered in the left hand panel */
  panelContent?: React.ReactNode;
}

export const Drawer: React.SFC<DrawerProps> = ({
  className = '',
  children,
  isExpanded = false,
  isInline = false,
  panelContent,
  ...props
}: DrawerProps) => (
  <div {...props} className={css(styles.drawer,
    isExpanded && styles.modifiers.expanded,
    isInline && styles.modifiers.inline,
    className)}>
     <div className={css(
       styles.drawerContent)}> { children } </div>
     { panelContent }
  </div>
);
