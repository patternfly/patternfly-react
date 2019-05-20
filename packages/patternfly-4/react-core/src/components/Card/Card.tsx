import * as React from 'react';
import styles from '@patternfly/patternfly/components/Card/card.css';
import { css } from '@patternfly/react-styles';

export interface CardProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the Card */
  children?: React.ReactNode; 
  /** Additional classes added to the Card */
  className?: string; 
  /** Sets the base component to render. defaults to article */
  component?: React.ReactNode;
  /** Modifies the card to include hover styles on :hover */
  isHoverable?: boolean;
}

export const Card: React.FunctionComponent<CardProps> = ({
  children = null,
  className = '',
  component = 'article',
  isHoverable = false, 
  ...props
}: CardProps) => {
  const Component = component as any;
  return (
  <Component className={css(styles.card, isHoverable && styles.modifiers.hoverable, className)} {...props}>
    {children}
  </Component>
)};
