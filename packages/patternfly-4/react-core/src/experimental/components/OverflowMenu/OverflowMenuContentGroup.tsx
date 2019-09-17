import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/OverflowMenu/overflow-menu';

export interface OverflowMenuContentGroupProps extends React.HTMLProps<HTMLDivElement> {
  /** Any elements that can be rendered in the menu */
  children?: any;
  /** Additional classes added to the OverflowMenuGroup */
  className?: string;
  /** Modifies the overflow menu group visibility */
  persistent?: boolean;
  /** Indicates a button or icon group */
  groupType?: string;
  /** Indicates that item is not visible */
  isHidden?: boolean;
}

export const OverflowMenuContentGroup: React.SFC<OverflowMenuContentGroupProps> = ({
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
    {React.Children.map(children, (menuItem: React.ReactElement<OverflowMenuContentGroupProps>) =>
      React.cloneElement(menuItem, {
        isHidden
      })
    )}
  </div>
);