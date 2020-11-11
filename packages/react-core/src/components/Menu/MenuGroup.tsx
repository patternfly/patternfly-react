import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Menu/menu';
import { css } from '@patternfly/react-styles';

export interface MenuGroupProps extends React.HTMLProps<HTMLDivElement> {
  /** Items within group */
  children?: React.ReactNode;
  /** Group label */
  label?: string;
  /** ID for title label */
  titleId?: string;
}

export const MenuGroup: React.FunctionComponent<MenuGroupProps> = ({
  children = [] as React.ReactElement[],
  label = '',
  titleId = '',
  ...props
}: MenuGroupProps) => (
  <section {...props} className={css(styles.MenuGroup)}>
    {label && (
      <h1 className={css(styles.menuGroupTitle)} id={titleId} aria-hidden>
        {label}
      </h1>
    )}
    {children}
  </section>
);
MenuGroup.displayName = 'MenuGroup';
