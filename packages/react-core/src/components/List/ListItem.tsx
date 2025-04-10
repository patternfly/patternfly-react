import styles from '@patternfly/react-styles/css/components/List/list';
import { css } from '@patternfly/react-styles';

export interface ListItemProps extends React.HTMLProps<HTMLLIElement> {
  /** Additional classes added to the list item */
  className?: string;
  /** Anything that can be rendered inside of list item */
  children: React.ReactNode;
  /** Icon for the list item */
  icon?: React.ReactNode | null;
}

export const ListItem: React.FunctionComponent<ListItemProps> = ({
  className,
  children = null,
  icon = null,
  ...props
}: ListItemProps) => (
  <li className={css(icon && styles.listItem, className)} {...props}>
    {icon && <span className={css(styles.listItemIcon)}>{icon}</span>}
    <span className={icon && css(`${styles.list}__item-text`)}>{children}</span>
  </li>
);
ListItem.displayName = 'ListItem';
