import { ComponentType } from 'react';
import { GraphElement, ComponentFactory, withCustomNodeShape } from '@patternfly/react-topology';
import Node from './DemoDefaultNode';
import Path from './shapes/Path';
import Polygon from './shapes/Polygon';

const shapesComponentFactory: ComponentFactory = (kind, type): ComponentType<{ element: GraphElement }> | undefined => {
  switch (type) {
    case 'node':
      return Node;
    case 'node-path':
      return withCustomNodeShape(() => Path)(Node);
    case 'node-polygon':
      return withCustomNodeShape(() => Polygon)(Node);
    default:
      return undefined;
  }
};

export default shapesComponentFactory;
