import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/OverflowMenu/overflow-menu';

export interface OverflowMenuGroupProps extends React.HTMLProps<HTMLDivElement> {
  /** Any elements that can be rendered in the menu */
  children?: any;
  /** Additional classes added to the OverflowMenuGroup */
  className?: string;
  /** Modifies the overflow menu group visibility */
  persistent?: boolean;
  /** Indicates a button or icon group */
  groupType?: string;
  isHidden?: boolean;
}

export const OverflowMenuGroup: React.SFC<OverflowMenuGroupProps> = ({
  className,
  children,
  persistent = false,
  groupType = '',
  isHidden,
  ...props
}) => (
  <div hidden={!persistent && isHidden} className={css(
    styles.overflowMenuGroup,
    groupType === 'button' && styles.modifiers.buttonGroup,
    groupType === 'icon' && styles.modifiers.iconButtonGroup,
    persistent && styles.modifiers.persistent,
    className
  )}>
    {React.Children.map(children, (menuItem: React.ReactElement<OverflowMenuGroupProps>) =>
      React.cloneElement(menuItem, {
        isHidden
      })
    )}
  </div>
);