import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/OverflowMenu/overflow-menu';

export interface OverflowMenuGroupProps extends React.HTMLProps<HTMLDivElement> {
  children: any;
  className?: string;
  persistent?: boolean;
  groupType?: string;
}

export const OverflowMenuGroup: React.SFC<OverflowMenuGroupProps> = ({
  className,
  children,
  persistent = false,
  groupType = '',
  ...props
}) => (
  <div {...props} className={css(
    styles.overflowMenuGroup,
    groupType === 'button' && styles.modifiers.buttonGroup,
    groupType === 'icon' && styles.modifiers.iconButtonGroup,
    persistent && styles.modifiers.persistent,
    className
  )}>
    {children}
  </div>
);