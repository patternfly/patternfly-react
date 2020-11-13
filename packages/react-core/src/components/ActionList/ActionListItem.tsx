import * as React from 'react';

export interface ActionListItemProps extends React.HTMLProps<HTMLDivElement> {
  /** Children of the action list item */
  children?: React.ReactNode;
}

export const ActionListItem: React.FunctionComponent<ActionListItemProps> = ({
  children,
  ...props
}: ActionListItemProps) => (
  <div className="pf-c-action-list__item" {...props}>
    {children}
  </div>
);
ActionListItem.displayName = 'ActionListItem';
