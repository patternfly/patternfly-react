import * as React from 'react';
import { css } from '@patternfly/react-styles';

export interface CardHeadMainProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the Card Head Main */
  children?: React.ReactNode;
  /** Additional classes added to the Card Head Main */
  className?: string;
}

/**
 *
 */
export function CardHeadMain({ children = null, className = '', ...props }: CardHeadMainProps) {
  return (
    <div className={css('pf-c-card__head-main', className)} {...props}>
      {children}
    </div>
  );
}
