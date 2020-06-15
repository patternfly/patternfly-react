import * as React from 'react';

export interface ListItemProps extends React.HTMLProps<HTMLLIElement> {
  /** Anything that can be rendered inside of list item */
  children: React.ReactNode;
}

/**
 *
 */
export function ListItem({ children = null, ...props }: ListItemProps) {
  return <li {...props}>{children}</li>;
}
