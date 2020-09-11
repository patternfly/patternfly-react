import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Card/card';

export interface CardTitleProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the CardTitle */
  children?: React.ReactNode;
  /** Additional classes added to the CardTitle */
  className?: string;
  /** Sets the base component to render. defaults to div */
  component?: keyof JSX.IntrinsicElements;
}

export const CardTitle: React.FunctionComponent<CardTitleProps> = ({
  children = null,
  className = '',
  component = 'div',
  ...props
}: CardTitleProps) => {
  const Component = component as any;
  return (
    <Component className={css(styles.cardTitle, className)} {...props}>
      {children}
    </Component>
  );
};
CardTitle.displayName = 'CardTitle';
