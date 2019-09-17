import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/OverflowMenu/overflow-menu';
import { css, getModifier } from '@patternfly/react-styles';

export interface OverflowMenuProps extends React.HTMLProps<HTMLDivElement> {
  /** Any elements that can be rendered in the menu */
  children?: any;
  /** Additional classes added to the OverflowMenu. */
  className?: string;
  /** Indicates breakpoint at which to switch between horizontal menu and vertical dropdown */
  breakpoint: 'Md' | 'Lg' | 'Xl';
}

export const OverflowMenu: React.SFC<OverflowMenuProps> = ({
  className,
  breakpoint,
  children,
  ...props
}) => (
  <div
    {...props}
    className={css(
      styles.overflowMenu,
      getModifier(styles.modifiers, `showOn${breakpoint}`),
      className
    )}
  >
    {React.Children.map(children, component =>
      React.cloneElement(component, {
        breakpoint
      })
    )}
  </div>
);