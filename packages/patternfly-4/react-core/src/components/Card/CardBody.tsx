import * as React from 'react';
import styles from '@patternfly/patternfly/components/Card/card.css';
import { css } from '@patternfly/react-styles';

export interface CardBodyProps extends React.HTMLProps<HTMLDivElement> {
  children?: React.ReactNode; 
  className?: string; 
  component?: React.ReactType<CardBodyProps>;
  isFilled?: boolean;
}

export const CardBody: React.FunctionComponent<CardBodyProps> = ({
  children = null, 
  className = '', 
  component: Component = 'div', 
  isFilled = true, 
  ...props
}) => (
  <Component className={css(styles.cardBody, !isFilled && styles.modifiers.noFill, className)} {...props}>
    {children}
  </Component>
);
