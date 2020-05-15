import { ComponentType } from 'react';
import { GraphElement, ComponentFactory } from '@patternfly/react-topology';
import Node from './DefaultNode';
import NodeRect from './NodeRect';
import NodePath from './NodePath';
import NodePolygon from './NodePolygon';

const shapesComponentFactory: ComponentFactory = (kind, type): ComponentType<{ element: GraphElement }> | undefined => {
  switch (type) {
    case 'node-rect':
      return NodeRect;
    case 'node-ellipse':
      return Node;
    case 'node-path':
      return NodePath;
    case 'node-polygon':
      return NodePolygon;
    default:
      return undefined;
  }
};

export default shapesComponentFactory;
