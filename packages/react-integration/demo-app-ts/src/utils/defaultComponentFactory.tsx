import { ComponentType } from 'react';
import { GraphElement, ComponentFactory, ModelKind, GraphComponent, DefaultNode } from '@patternfly/react-topology';
import Edge from './DefaultEdge';

const defaultComponentFactory: ComponentFactory = (
  kind: ModelKind,
  type: string
): ComponentType<{ element: GraphElement }> => {
  switch (type) {
    default:
      switch (kind) {
        case ModelKind.graph:
          return GraphComponent;
        case ModelKind.node:
          return DefaultNode;
        case ModelKind.edge:
          return Edge;
        default:
          return undefined;
      }
  }
};

export default defaultComponentFactory;
