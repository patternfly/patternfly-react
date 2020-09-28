import * as React from 'react';

export interface LightTableRowProps {
  /** Content rendered inside the <tr> row */
  children?: React.ReactNode;
  /** Additional classes added to the <tr> row  */
  className?: string;
}

export const LightTableRow: React.FunctionComponent<LightTableRowProps> = ({
  children,
  className,
  ...props
}: LightTableRowProps) => (
  <tr role="row" className={className} {...props}>
    {children}
  </tr>
);
LightTableRow.displayName = 'LightTableRow';
