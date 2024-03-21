import { HTMLProps, ReactNode, FunctionComponent } from 'react';
import styles from '@patternfly/react-styles/css/components/List/list';
import { css } from '@patternfly/react-styles';

export interface ListItemProps extends HTMLProps<HTMLLIElement> {
  /** Icon for the list item */
  icon?: ReactNode | null;
  /** Anything that can be rendered inside of list item */
  children: ReactNode;
}

export const ListItem: FunctionComponent<ListItemProps> = ({
  icon = null,
  children = null,
  ...props
}: ListItemProps) => (
  <li className={css(icon && styles.listItem)} {...props}>
    {icon && <span className={css(styles.listItemIcon)}>{icon}</span>}
    {children}
  </li>
);
ListItem.displayName = 'ListItem';
