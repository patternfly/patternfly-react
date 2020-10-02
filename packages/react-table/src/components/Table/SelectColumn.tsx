import * as React from 'react';
import { RowSelectVariant } from './Table';

export interface SelectColumnProps {
  name?: string;
  children?: React.ReactNode;
  className?: string;
  onSelect?: (event: React.FormEvent<HTMLInputElement>) => void;
  selectVariant?: RowSelectVariant;
}

export const SelectColumn: React.FunctionComponent<SelectColumnProps> = ({
  children = null as React.ReactNode,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  className,
  onSelect = null as (event: React.FormEvent<HTMLInputElement>) => void,
  selectVariant,
  ...props
}: SelectColumnProps) => (
  <React.Fragment>
    <input {...props} type={selectVariant} onChange={onSelect} />
    {children}
  </React.Fragment>
);
SelectColumn.displayName = 'SelectColumn';
