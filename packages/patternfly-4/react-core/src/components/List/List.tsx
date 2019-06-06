import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/List/list';
import { css, getModifier } from '@patternfly/react-styles';

export enum ListVariant {
  inline = 'inline'
}

export interface ListProps extends React.HTMLProps<HTMLUListElement> {
  /** Anything that can be rendered inside of the list */
  children?: React.ReactNode;
  /** Additional classes added to the list. */
  className?: string;
  /** Adds list variant styles */
  variant?: 'inline';
}

export const List: React.FunctionComponent<ListProps> = ({
  className = '',
  children = null,
  variant = null,
  ...props
}) => (
  <ul {...props} className={css(styles.list, variant && getModifier(styles.modifiers, variant), className)}>
    {children}
  </ul>
);
