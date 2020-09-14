import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Menu/menu';
import { css } from '@patternfly/react-styles';

export interface MenuGroupProps extends React.HTMLProps<HTMLDivElement> {
  /** Items within group */
  children?: React.ReactNode;
  /** Additional classes added to the MenuGroup */
  className?: string;
  /** Group label */
  label?: string;
  /** ID for title label */
  titleId?: string;
}

export const MenuGroup: React.FunctionComponent<MenuGroupProps> = ({
  children = [] as React.ReactElement[],
  className = '',
  label = '',
  titleId = '',
  ...props
}: MenuGroupProps) => (
  <div {...props} className={'pf-c-menu__group' + css(className)}>
    <div className={css(styles.menuGroupTitle)} id={titleId} aria-hidden>
      {label}
    </div>
    {children}
  </div>
);
MenuGroup.displayName = 'MenuGroup';
