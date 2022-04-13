import { ComponentType } from 'react';
import { GraphElement, ComponentFactory, ModelKind } from '@patternfly/react-topology';
import DemoDefaultNode from './DemoDefaultNode';
import CustomPathNode from './CustomPathNode';
import CustomPolygonNode from './CustomPolygonNode';

const shapesComponentFactory: ComponentFactory = (
  kind: ModelKind,
  type: string
): ComponentType<React.PropsWithChildren<{ element: GraphElement }>> | undefined => {
  switch (type) {
    case 'node':
      return DemoDefaultNode;
    case 'node-path':
      return CustomPathNode;
    case 'node-polygon':
      return CustomPolygonNode;
    default:
      return undefined;
  }
};

export default shapesComponentFactory;
