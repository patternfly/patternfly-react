import * as React from 'react';
import styles from '@patternfly/patternfly/components/Card/card.css';
import { css } from '@patternfly/react-styles';

export interface CardProps extends React.HTMLProps<HTMLDivElement> {
  /** content rendered inside the Card */
  children?: React.ReactNode; 
  /** additional classes added to the Card */
  className?: string; 
  /** Sets the base component to render. defaults to article */
  component?: React.ReactType<CardProps>;
  /** Modifies the card to include hover styles on :hover */
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
