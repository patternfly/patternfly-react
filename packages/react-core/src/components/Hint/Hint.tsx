import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Hint/hint';
import { css } from '@patternfly/react-styles';

export interface HintProps {
  /** Content rendered inside the hint. */
  children?: React.ReactNode;
  /** Additional classes applied to the hint. */
  className?: string;
  /** Actions of the hint. */
  actions?: React.ReactNode;
  /** Flag indicating that the actions have no offset */
  hasNoActionsOffset?: boolean;
}

export const Hint: React.FunctionComponent<HintProps> = ({
  children,
  className,
  actions,
  hasNoActionsOffset = false,
  ...props
}: HintProps) => (
  <div className={css(styles.hint, className)} {...props}>
    {actions && (
      <div className={css(styles.hintActions, hasNoActionsOffset && styles.modifiers.noOffset)}>{actions}</div>
    )}
    {children}
  </div>
);
Hint.displayName = 'Hint';
