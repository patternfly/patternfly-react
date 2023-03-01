import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Card/card';

export interface CardActionsProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the card action */
  children?: React.ReactNode;
  /** Additional classes added to the action */
  className?: string;
  /** Flag indicating that the actions have no offset */
  hasNoOffset?: boolean;
}

export const CardActions: React.FunctionComponent<CardActionsProps> = ({
  children,
  className,
  hasNoOffset = false,
  ...props
}: CardActionsProps) => (
  <div className={css(styles.cardActions, hasNoOffset && styles.modifiers.noOffset, className)} {...props}>
    {children}
  </div>
);
CardActions.displayName = 'CardActions';
