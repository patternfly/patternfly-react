import * as React from 'react';
import styles from '@patternfly/patternfly/components/Card/card.css';
import { css } from '@patternfly/react-styles';

export interface CardProps extends React.HTMLProps<HTMLDivElement> {
  children?: React.ReactNode; 
  className?: string; 
  component?: React.ReactType<CardProps>;
  isHoverable?: boolean;
}

export const Card: React.FunctionComponent<CardProps> = ({
  children = null,
  className = '',
  component: Component = 'article',
  isHoverable = false, 
  ...props
}) => (
  <Component className={css(styles.card, isHoverable && styles.modifiers.hoverable, className)} {...props}>
    {children}
  </Component>
);
