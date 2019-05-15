import * as React from 'react';
import styles from '@patternfly/patternfly/components/Card/card.css';
import { css } from '@patternfly/react-styles';

export interface CardBodyProps extends React.HTMLProps<HTMLDivElement> {
  /** content rendered inside the Card Body */
  children?: React.ReactNode; 
  /** additional classes added to the Card Body */
  className?: string; 
  /** Sets the base component to render. defaults to div */
  component?: React.ReactType;
  /** Enables the body Content to fill the height of the card */
  isFilled?: boolean;
}

export const CardBody: React.FunctionComponent<CardBodyProps> = ({
  children = null, 
  className = '', 
  component: Component = 'div', 
  isFilled = true, 
  ...props
}: CardBodyProps) => (
  <Component className={css(styles.cardBody, !isFilled && styles.modifiers.noFill, className)} {...props}>
    {children}
  </Component>
);
