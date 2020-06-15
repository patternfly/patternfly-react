import * as React from 'react';

export interface LevelItemProps extends React.HTMLProps<HTMLDivElement> {
  /** content rendered inside the Level Layout Item */
  children?: React.ReactNode;
}

/**
 *
 */
export function LevelItem({ children = null, ...props }: LevelItemProps) {
  return <div {...props}>{children}</div>;
}
