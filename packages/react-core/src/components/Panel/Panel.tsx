import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Panel/panel';
import { css } from '@patternfly/react-styles';

export interface PanelProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the panel */
  children?: React.ReactNode;
  /** Class to add to outer div */
  className?: string;
  /** Adds panel variant styles */
  variant?: 'raised' | 'bordered';
  /** Flag to add scrollable styling to the panel */
  isScrollable?: boolean;
}

export const Panel: React.FunctionComponent<PanelProps> = ({
  className,
  children,
  variant,
  isScrollable,
  ...props
}: PanelProps) => (
  <div
    className={css(
      styles.panel,
      variant === 'raised' && styles.modifiers.raised,
      variant === 'bordered' && styles.modifiers.bordered,
      isScrollable && styles.modifiers.scrollable,
      className
    )}
    {...props}
  >
    {children}
  </div>
);

Panel.displayName = 'Panel';
