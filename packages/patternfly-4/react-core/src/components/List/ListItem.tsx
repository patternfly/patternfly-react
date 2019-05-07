import * as React from 'react';

export interface ListItemProps extends React.HTMLProps<HTMLLIElement> {
  /** Anything that can be rendered inside of list item */
  children: React.ReactNode;
  /** Additional props are spread to the container <li> */
}

export const ListItem: React.FunctionComponent<ListItemProps> = ({ children = null, ...props }) => <li {...props}>{children}</li>;
