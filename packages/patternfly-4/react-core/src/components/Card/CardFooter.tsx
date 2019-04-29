import * as React from 'react';
import styles from '@patternfly/patternfly/components/Card/card.css';
import { css } from '@patternfly/react-styles';

export interface CardFooterProps extends React.HTMLProps<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string; 
  component?: React.ReactType<CardFooterProps>;
}

export const CardFooter: React.FunctionComponent<CardFooterProps> = ({
  children = null, 
  className = '', 
  component: Component = 'div', 
  ...props 
}) => (
  <Component className={css(styles.cardFooter, className)} {...props}>
    {children}
  </Component>
);

