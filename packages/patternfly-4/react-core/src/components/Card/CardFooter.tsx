import * as React from 'react';
import styles from '@patternfly/patternfly/components/Card/card.css';
import { css } from '@patternfly/react-styles';

export interface CardFooterProps extends React.HTMLProps<HTMLDivElement> {
  /** content rendered inside the Card Footer */
  children?: React.ReactNode;
  /** additional classes added to the Footer */
  className?: string; 
  /** Sets the base component to render. defaults to div */
  component?: React.ReactType;
}

export const CardFooter: React.FunctionComponent<CardFooterProps> = ({
  children = null, 
  className = '', 
  component: Component = 'div', 
  ...props 
}: CardFooterProps) => (
  <Component className={css(styles.cardFooter, className)} {...props}>
    {children}
  </Component>
);

