import * as React from 'react';
import { css } from '@patternfly/react-styles';

export interface EmptyStatePrimaryProps extends React.HTMLProps<HTMLDivElement> {
  /** Additional classes added to the empty state primary */
  className?: string;
  /** Content rendered inside the empty state primary */
  children: React.ReactNode;
}

export const EmptyStatePrimary: React.FunctionComponent<EmptyStatePrimaryProps> = ({
  children,
  className,
  ...props
}: EmptyStatePrimaryProps) => (
  <div className={css(className)} {...props}>
    {children}
  </div>
);
EmptyStatePrimary.displayName = 'EmptyStatePrimary';
