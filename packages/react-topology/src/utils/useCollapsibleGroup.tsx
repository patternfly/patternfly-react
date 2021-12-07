import * as React from 'react';
import { observer } from 'mobx-react';
import { Node } from '../types';
import { ShapeProps } from './useCustomNodeShape';

export interface WithCollapsibleGroupProps {
  collapsible: boolean;
  collapsedWidth?: number;
  collapsedHeight?: number;
  onCollapseChange?: (group: Node, collapsed: boolean) => void;
  getCollapsedShape?: (node: Node) => React.FC<ShapeProps>;
  collapsedShadowOffset?: number; // defaults to 10
}

export const useCollapsibleGroup = (
  collapsedWidth: number,
  collapsedHeight: number,
  onCollapseChange?: (group: Node, collapsed: boolean) => void
): WithCollapsibleGroupProps => ({
  collapsible: true,
  collapsedWidth,
  collapsedHeight,
  onCollapseChange
});

export const withCollapsibleGroup = (
  collapsedWidth: number,
  collapsedHeight: number,
  onCollapseChange?: (group: Node, collapsed: boolean) => void
) => <P extends WithCollapsibleGroupProps>(WrappedComponent: React.ComponentType<P>) => {
  const Component: React.FC<Omit<P, keyof WithCollapsibleGroupProps>> = props => {
    const statusProps = useCollapsibleGroup(collapsedWidth, collapsedHeight, onCollapseChange);
    return <WrappedComponent {...(props as any)} {...statusProps} />;
  };
  return observer(Component);
};
