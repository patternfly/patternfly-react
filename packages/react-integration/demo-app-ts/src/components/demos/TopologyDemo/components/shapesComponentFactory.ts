import { ComponentFactory } from '@patternfly/react-topology';
import DemoDefaultNode from './DemoDefaultNode';
import CustomPathNode from './CustomPathNode';
import CustomPolygonNode from './CustomPolygonNode';

const shapesComponentFactory: ComponentFactory = (type: string) => {
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
