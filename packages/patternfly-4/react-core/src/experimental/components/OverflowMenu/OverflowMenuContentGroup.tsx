import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/OverflowMenu/overflow-menu';
import { OverflowMenuContentContext } from './OverflowMenuConstants';

export interface OverflowMenuContentGroupProps extends React.HTMLProps<HTMLDivElement> {
  /** Any elements that can be rendered in the menu */
  children?: any;
  /** Additional classes added to the OverflowMenuGroup */
  className?: string;
  /** Modifies the overflow menu group visibility */
  persistent?: boolean;
  /** Indicates a button or icon group */
  groupType?: string;
}

export const OverflowMenuContentGroup: React.SFC<OverflowMenuContentGroupProps> = ({
  className,
  children,
  persistent = false,
  groupType = '',
  ...props
}) => (
  <OverflowMenuContentContext.Consumer>
    {value => (
      <div hidden={!persistent && value.isHidden} className={css(
        styles.overflowMenuGroup,
        groupType === 'button' && styles.modifiers.buttonGroup,
        groupType === 'icon' && styles.modifiers.iconButtonGroup,
        persistent && styles.modifiers.persistent,
        className
      )}>
        { children }
      </div>
    )}
  </OverflowMenuContentContext.Consumer>
);