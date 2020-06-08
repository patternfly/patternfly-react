import { Graph, Layout, LayoutFactory, ForceLayout, ColaLayout, DagreLayout } from '@patternfly/react-topology';

const defaultLayoutFactory: LayoutFactory = (type: string, graph: Graph): Layout | undefined => {
  switch (type) {
    case 'Cola':
      return new ColaLayout(graph);
    case 'Dagre':
      return new DagreLayout(graph);
    case 'Force':
      return new ForceLayout(graph);
    default:
      return undefined;
  }
};

export default defaultLayoutFactory;
