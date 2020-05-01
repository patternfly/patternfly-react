import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Card/card';

export interface CardTitleProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the CardTitle */
  children?: React.ReactNode;
  /** Additional classes added to the CardTitle */
  className?: string;
}

export const CardTitle: React.FunctionComponent<CardTitleProps> = ({
  children = null,
  className = '',
  ...props
}: CardTitleProps) => (
  <div className={css(styles.cardTitle, className)} {...props}>
    {children}
  </div>
);
