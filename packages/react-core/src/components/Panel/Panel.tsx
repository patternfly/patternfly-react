import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Panel/panel';
import { css } from '@patternfly/react-styles';

export interface PanelProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside Panel */
  children?: React.ReactNode;
  /** Class to add to outer div */
  className?: string;
  /** Flag to add raised styling to the panel */
  isRaised?: boolean;
  /** Flag to add bordered styling to the panel */
  isBordered?: boolean;
  /** Flag to add scrollable styling to the panel */
  isScrollable?: boolean;
}

export const Panel: React.FunctionComponent<PanelProps> = ({
  className,
  children,
  isRaised,
  isBordered,
  isScrollable,
  ...props
}: PanelProps) => (
  <div
    className={css(
      styles.panel,
      isRaised && styles.modifiers.raised,
      isBordered && styles.modifiers.bordered,
      isScrollable && styles.modifiers.scrollable,
      className
    )}
    {...props}
  >
    {children}
  </div>
);

Panel.displayName = 'Panel';
