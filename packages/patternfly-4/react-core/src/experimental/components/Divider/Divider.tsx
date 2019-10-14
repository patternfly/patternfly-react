import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Divider/divider';
import { cpus } from 'os';

export enum DividerVariant {
  hr = 'hr',
  li = 'li',
  div = 'div'
}

export interface DividerProps extends React.HTMLProps<HTMLElement> {
  /** additional classes added to the Badge */
  className?: string;
  /** the component type to use */
  component?: 'hr' | 'li' | 'div' ;
}

export const Divider: React.FunctionComponent<DividerProps> = ({
  className = '',
  component = 'hr',
  ...props
}: DividerProps) => {
  const Component: any = component;

  return (
    <Component className={css(styles.divider, className)} {...(component != 'hr' && {role : 'separator' })} {...props}/>
  );
};
