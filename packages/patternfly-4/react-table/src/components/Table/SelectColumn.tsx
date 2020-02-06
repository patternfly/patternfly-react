import * as React from 'react';

export interface SelectColumnProps {
  name?: string;
  children?: React.ReactNode;
  className?: string;
  onSelect?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SelectColumn: React.FunctionComponent<SelectColumnProps> = ({
  children = null as React.ReactNode,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  className = '',
  onSelect = null as (event: React.ChangeEvent<HTMLInputElement>) => void,
  ...props
}: SelectColumnProps) => (
  <React.Fragment>
    <input {...props} type="checkbox" onChange={onSelect} />
    {children}
  </React.Fragment>
);
