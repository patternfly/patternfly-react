import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/OverflowMenu/overflow-menu';
import { css, getModifier } from '@patternfly/react-styles';
import { OverflowMenuContext } from './OverflowMenuContexts';

export interface OverflowMenuProps extends React.HTMLProps<HTMLDivElement> {
  /** Any elements that can be rendered in the menu */
  children?: any;
  /** Additional classes added to the OverflowMenu. */
  className?: string;
  /** Indicates breakpoint at which to switch between horizontal menu and vertical dropdown */
  breakpoint: 'md' | 'lg' | 'xl';
}

export const OverflowMenu: React.SFC<OverflowMenuProps> = ({
  className,
  breakpoint,
  children,
  ...props
}) => {
  return (
    <div
      {...props}
      className={css(
        styles.overflowMenu,
        getModifier(styles.modifiers, `showOn ${breakpoint}`),
        className
      )}
    >
      <OverflowMenuContext.Provider value={{ breakpoint }}>
        { children }
      </OverflowMenuContext.Provider>
    </div>
  );
};
