import * as React from 'react';

export interface LightTableBodyProps {
  /** Content rendered inside the <tr> row */
  children?: React.ReactNode;
  /** Additional classes added to the <tr> row  */
  className?: string;
}

export const LightTableBody: React.FunctionComponent<LightTableBodyProps> = ({
  children,
  className,
  ...props
}: LightTableBodyProps) => (
  <tbody role="rowgroup" className={className} {...props}>
    {children}
  </tbody>
);
LightTableBody.displayName = 'LightTableBody';
