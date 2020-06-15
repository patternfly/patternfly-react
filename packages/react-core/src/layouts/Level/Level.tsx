import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/layouts/Level/level';

export interface LevelProps extends React.HTMLProps<HTMLDivElement> {
  /** Adds space between children. */
  hasGutter?: boolean;
  /** additional classes added to the Level layout */
  className?: string;
  /** content rendered inside the Level layout */
  children?: React.ReactNode;
}

/**
 *
 */
export function Level({ hasGutter, className = '', children = null, ...props }: LevelProps) {
  return (
    <div {...props} className={css(styles.level, hasGutter && styles.modifiers.gutter, className)}>
      {children}
    </div>
  );
}
