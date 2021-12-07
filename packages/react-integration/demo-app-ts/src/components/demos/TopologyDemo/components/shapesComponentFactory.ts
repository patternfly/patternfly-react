import { ComponentType } from 'react';
import { GraphElement, ComponentFactory, withCustomNodeShape, ModelKind } from '@patternfly/react-topology';
import DemoDefaultNode from './DemoDefaultNode';
import Path from './shapes/Path';
import Polygon from './shapes/Polygon';

const shapesComponentFactory: ComponentFactory = (
  kind: ModelKind,
  type: string
): ComponentType<{ element: GraphElement }> | undefined => {
  switch (type) {
    case 'node':
      return DemoDefaultNode;
    case 'node-path':
      return withCustomNodeShape(() => Path)(DemoDefaultNode);
    case 'node-polygon':
      return withCustomNodeShape(() => Polygon)(DemoDefaultNode);
    default:
      return undefined;
  }
};

export default shapesComponentFactory;
