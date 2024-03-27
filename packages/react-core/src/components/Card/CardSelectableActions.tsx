import { HTMLProps, ReactNode, FunctionComponent } from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Card/card';

export interface CardActionsProps extends HTMLProps<HTMLDivElement> {
  /** Content rendered inside the card action */
  children?: ReactNode;
  /** Additional classes added to the action */
  className?: string;
}

export const CardSelectableActions: FunctionComponent<CardActionsProps> = ({
  children,
  className,
  ...props
}: CardActionsProps) => (
  <div className={css(styles.cardSelectableActions, className)} {...props}>
    {children}
  </div>
);
CardSelectableActions.displayName = 'CardSelectableActions';
