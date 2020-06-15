import * as React from 'react';

export interface CardHeaderMainProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the Card Head Main */
  children?: React.ReactNode;
  /** Additional classes added to the Card Head Main */
  className?: string;
}

/**
 *
 */
export function CardHeaderMain({ children = null, className = '', ...props }: CardHeaderMainProps) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}
