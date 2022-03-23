import {
  Graph,
  Layout,
  LayoutFactory,
  ForceLayout,
  ColaLayout,
  ConcentricLayout,
  DagreLayout,
  GridLayout
} from '@patternfly/react-topology';

const defaultLayoutFactory: LayoutFactory = (type: string, graph: Graph): Layout | undefined => {
  switch (type) {
    case 'Cola':
      return new ColaLayout(graph);
    case 'ColaNoForce':
      return new ColaLayout(graph, { layoutOnDrag: false });
    case 'Concentric':
      return new ConcentricLayout(graph);
    case 'Dagre':
      return new DagreLayout(graph);
    case 'Force':
      return new ForceLayout(graph);
    case 'Grid':
      return new GridLayout(graph);
    default:
      return new ColaLayout(graph, { layoutOnDrag: false });
  }
};

export default defaultLayoutFactory;
