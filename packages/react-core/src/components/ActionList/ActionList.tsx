import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/ActionList/action-list';

export interface ActionListProps extends React.HTMLProps<HTMLDivElement> {
  /** Children of the action list */
  children?: React.ReactNode;
  /** Flag indicating the action list contains multiple icons and item padding should be removed */
  isIconList?: boolean;
}

export const ActionList: React.FunctionComponent<ActionListProps> = ({
  children,
  isIconList,
  ...props
}: ActionListProps) => (
  <div className={css(styles.actionList, isIconList && styles.modifiers.icons)} {...props}>
    {children}
  </div>
);
ActionList.displayName = 'ActionList';
