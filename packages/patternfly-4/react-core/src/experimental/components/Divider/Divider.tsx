import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Divider/divider';

export enum DividerVariant {
  hr = 'hr',
  li = 'li',
  div = 'div'
}

export interface DividerProps extends React.HTMLProps<HTMLElement> {
  /** additional classes added to the Badge */
  className?: string;
  /** Adds a role to the divider for accessibility */
  'role'?: string;
  /** the component type to use */
  variant?: 'hr' | 'li' | 'div' ;
}

export const Divider: React.FunctionComponent<DividerProps> = ({
  className = '',
  'role': role = '',
  variant = 'hr',
  ...props
}: DividerProps) => {
  const Component: any = variant;

  return (
    <Component {...props} className={css(styles.divider, className)} role={role}/>
  );
};
