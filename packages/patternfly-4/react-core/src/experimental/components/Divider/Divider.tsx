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
  /** the component type to use */
  variant?: 'hr' | 'li' | 'div' ;
}

export const Divider: React.FunctionComponent<DividerProps> = ({
  className = '',
  variant = 'hr',
  ...props
}: DividerProps) => {
  const Component: any = variant;

  return (
    <Component className={css(styles.divider, className)} role={ variant!='hr' ? 'separator' : undefined } {...props}/>
  );
};
