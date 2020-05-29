import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Drawer/drawer';
import { css } from '@patternfly/react-styles';
import { DrawerContext } from './Drawer';
import { formatBreakpointMods } from '../../helpers/util';

export interface DrawerBreakpointMod {
  modifier:
    | 'width_25'
    | 'width_33'
    | 'width_50'
    | 'width_66'
    | 'width_75'
    | 'width_100'
  /** The breakpoint at which to apply the modifier */
  breakpoint?: 'lg' | 'xl' | '2xl';
}

export interface DrawerPanelContentProps extends React.HTMLProps<HTMLDivElement> {
  /** Additional classes added to the drawer. */
  className?: string;
  /** Content to be rendered in the drawer panel. */
  children?: React.ReactNode;
  /** Flag indicating that the drawer panel should not have a border. */
  hasNoBorder?: boolean;
  /** Default width for drawer panel */
  breakpointMods?: ({
    modifier:
    | 'width_25'
    | 'width_33'
    | 'width_50'
    | 'width_66'
    | 'width_75'
    | 'width_100',
    breakpoint?: 'lg' | 'xl' | '2xl'
  } | DrawerBreakpointMod)[];
}

export const DrawerPanelContent: React.SFC<DrawerPanelContentProps> = ({
  className = '',
  children,
  hasNoBorder = false,
  breakpointMods,
  ...props
}: DrawerPanelContentProps) => (
  <DrawerContext.Consumer>
    {({ isExpanded, isStatic }) => (
      <div
        className={css(
          styles.drawerPanel,
          hasNoBorder && styles.modifiers.noBorder,
          formatBreakpointMods(breakpointMods, styles),
          className
        )}
        hidden={isStatic ? false : !isExpanded}
        {...props}
      >
        {children}
      </div>
    )}
  </DrawerContext.Consumer>
);
