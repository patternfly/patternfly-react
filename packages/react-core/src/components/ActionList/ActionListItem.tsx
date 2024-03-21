import { HTMLProps, ReactNode, FunctionComponent } from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/ActionList/action-list';

export interface ActionListItemProps extends HTMLProps<HTMLDivElement> {
  /** Children of the action list item */
  children?: ReactNode;
  /** Additional classes added to the action list item */
  className?: string;
}

export const ActionListItem: FunctionComponent<ActionListItemProps> = ({
  children,
  className = '',
  ...props
}: ActionListItemProps) => (
  <div className={css(`${styles.actionList}__item`, className)} {...props}>
    {children}
  </div>
);
ActionListItem.displayName = 'ActionListItem';
