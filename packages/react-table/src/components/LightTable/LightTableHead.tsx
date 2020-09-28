import * as React from 'react';

export interface LightTableHeadProps {
  /** Content rendered inside the <tr> row */
  children?: React.ReactNode;
  /** Additional classes added to the <tr> row  */
  className?: string;
}

export const LightTableHead: React.FunctionComponent<LightTableHeadProps> = ({
  children,
  className,
  ...props
}: LightTableHeadProps) => (
  <thead className={className} {...props}>
    {children}
  </thead>
);
LightTableHead.displayName = 'LightTableHead';
