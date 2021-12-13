import * as React from 'react';
import { observer } from 'mobx-react';
import { Node, TopologyQuadrant } from '../types';

export interface ShapeProps {
  className?: string;
  element: Node;
  width: number;
  height: number;
  filter?: string;
  sides?: number;
  hullPadding?: number;
  anchorRef?: (node: SVGElement | null) => void;
  dndDropRef?: (node: SVGElement | null) => void;
}

export interface WithNodeShapeProps {
  getCustomShape?: (node: Node) => React.FC<ShapeProps>;
  getShapeDecoratorCenter?: (quadrant: TopologyQuadrant, node: Node, radius: number) => { x: number; y: number };
}

export const useCustomNodeShape = (getCustomShape: () => React.FC<ShapeProps>): WithNodeShapeProps => ({
  getCustomShape
});

export const withCustomNodeShape = (getCustomShape: () => React.FC<ShapeProps>) => <P extends WithNodeShapeProps>(
  WrappedComponent: React.ComponentType<P>
) => {
  const Component: React.FC<Omit<P, keyof WithNodeShapeProps>> = props => {
    const shapeProps = useCustomNodeShape(getCustomShape);
    return <WrappedComponent {...(props as any)} {...shapeProps} />;
  };
  return observer(Component);
};
