import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/OverflowMenu/overflow-menu';
import { OverflowMenuContentContext } from './OverflowMenuContexts';

export interface OverflowMenuContentItemProps extends React.HTMLProps<HTMLDivElement> {
  /** Any elements that can be rendered in the menu */
  children?: any;
  /** Additional classes added to the OverflowMenuItem */
  className?: string;
  /** Modifies the overflow menu item visibility */
  isPersistent?: boolean;
}

export const OverflowMenuContentItem: React.SFC<OverflowMenuContentItemProps> = ({
  className,
  children,
  isPersistent = false,
  ...props
}) => (
  <OverflowMenuContentContext.Consumer>
    {value => (
      <div hidden={!isPersistent && value.isHidden} className={css(
        styles.overflowMenuItem,
        isPersistent && styles.modifiers.persistent,
        className
      )}>
        {children}
      </div>
    )}
  </OverflowMenuContentContext.Consumer>
);
