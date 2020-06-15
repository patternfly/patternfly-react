import * as React from 'react';

export interface SelectColumnProps {
  name?: string;
  children?: React.ReactNode;
  className?: string;
  onSelect?: (event: React.FormEvent<HTMLInputElement>) => void;
}

/**
 *
 */
export function SelectColumn({
  children = null as React.ReactNode,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  className,
  onSelect = null as (event: React.FormEvent<HTMLInputElement>) => void,
  ...props
}: SelectColumnProps) {
  return (
    <React.Fragment>
      <input {...props} type="checkbox" onChange={onSelect} />
      {children}
    </React.Fragment>
  );
}
