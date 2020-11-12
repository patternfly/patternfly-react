import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/ActionList/action-list';

export interface ActionListItemProps extends React.HTMLProps<HTMLDivElement> {
  /** Children of the action list item */
  children?: React.ReactNode;
}

export const ActionListItem: React.FunctionComponent<ActionListItemProps> = ({
  children,
  ...props
}: ActionListItemProps) => (
  <div className={css(styles.actionListItem)} {...props}>
    {children}
  </div>
);
ActionListItem.displayName = 'ActionListItem';
