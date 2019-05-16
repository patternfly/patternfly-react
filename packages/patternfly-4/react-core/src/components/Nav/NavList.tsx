import * as React from 'react';
import { NavVariants } from './NavVariants';
import styles from '@patternfly/patternfly/components/Nav/nav.css';
import { css } from '@patternfly/react-styles';

export interface NavListProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
  /** Children nodes */
  children?: React.ReactNode;
  /** Additional classes added to the list */
  className?: string;
  /** Indicates the list type. */
  variant?: 'default' | 'simple' | 'horizontal' | 'tertiary';
}

export const NavList: React.FunctionComponent<NavListProps> = ({
  variant = 'default',
  children = null as React.ReactNode,
  className = '',
  ...props
}: NavListProps) => {
  const variantStyle = {
    [NavVariants.default]: styles.navList,
    [NavVariants.simple]: styles.navSimpleList,
    [NavVariants.horizontal]: styles.navHorizontalList,
    [NavVariants.tertiary]: styles.navTertiaryList
  };

  return (
    <ul className={css(variantStyle[variant], className)} {...props}>
      {children}
    </ul>
  );
}
