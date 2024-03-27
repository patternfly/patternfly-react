import { HTMLProps, ReactNode, FunctionComponent } from 'react';

export interface LevelItemProps extends HTMLProps<HTMLDivElement> {
  /** content rendered inside the Level Layout Item */
  children?: ReactNode;
}

export const LevelItem: FunctionComponent<LevelItemProps> = ({ children = null, ...props }: LevelItemProps) => (
  <div {...props}>{children}</div>
);
LevelItem.displayName = 'LevelItem';
