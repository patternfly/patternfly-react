import { HTMLProps, ReactNode, FunctionComponent } from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Card/card';

export interface CardHeaderMainProps extends HTMLProps<HTMLDivElement> {
  /** Content rendered inside the Card Head Main */
  children?: ReactNode;
  /** Additional classes added to the Card Head Main */
  className?: string;
}

export const CardHeaderMain: FunctionComponent<CardHeaderMainProps> = ({
  children,
  className,
  ...props
}: CardHeaderMainProps) => (
  <div className={css(styles.cardHeaderMain, className)} {...props}>
    {children}
  </div>
);
CardHeaderMain.displayName = 'CardHeaderMain';
