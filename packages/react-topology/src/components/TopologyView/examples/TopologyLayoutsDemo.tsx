import * as React from 'react';
import {
  Dropdown,
  DropdownItem,
  DropdownPosition,
  DropdownToggle,
  Split,
  SplitItem,
  ToolbarItem
} from '@patternfly/react-core';
// eslint-disable-next-line patternfly-react/import-tokens-icons
import { RegionsIcon as Icon1, FolderOpenIcon as Icon2 } from '@patternfly/react-icons';
import {
  DefaultEdge,
  DefaultGroup,
  DefaultNode,
  EdgeStyle,
  GraphComponent,
  ModelKind,
  NodeModel,
  NodeShape,
  observer,
  SELECTION_EVENT,
  TopologyView,
  Visualization,
  VisualizationProvider,
  VisualizationSurface,
  ComponentFactory,
  Model,
  Node,
  NodeStatus,
  Graph,
  Layout,
  LayoutFactory,
  ForceLayout,
  ColaLayout,
  ConcentricLayout,
  DagreLayout,
  GridLayout,
  BreadthFirstLayout,
  ColaGroupsLayout
} from '@patternfly/react-topology';

export const NODE_STATUSES = [
  NodeStatus.danger,
  NodeStatus.success,
  NodeStatus.warning,
  NodeStatus.info,
  NodeStatus.default
];

const NODE_DIAMETER = 75;
const NODE_SHAPE = NodeShape.ellipse;

const NODES: NodeModel[] = [
  {
    id: 'node-0',
    type: 'node',
    label: 'Node 0',
    width: NODE_DIAMETER,
    height: NODE_DIAMETER,
    shape: NODE_SHAPE,
    status: NODE_STATUSES[0],
    data: {
      badge: 'B',
      isAlternate: false
    }
  },
  {
    id: 'node-1',
    type: 'node',
    label: 'Node 1',
    width: NODE_DIAMETER,
    height: NODE_DIAMETER,
    shape: NODE_SHAPE,
    status: NODE_STATUSES[1],
    data: {
      badge: 'B',
      isAlternate: false
    }
  },
  {
    id: 'node-2',
    type: 'node',
    label: 'Node 2',
    width: NODE_DIAMETER,
    height: NODE_DIAMETER,
    shape: NODE_SHAPE,
    status: NODE_STATUSES[2],
    data: {
      badge: 'A',
      isAlternate: true
    }
  },
  {
    id: 'node-3',
    type: 'node',
    label: 'Node 3',
    width: NODE_DIAMETER,
    height: NODE_DIAMETER,
    shape: NODE_SHAPE,
    status: NODE_STATUSES[3],
    data: {
      badge: 'A',
      isAlternate: false
    }
  },
  {
    id: 'node-4',
    type: 'node',
    label: 'Node 4',
    width: NODE_DIAMETER,
    height: NODE_DIAMETER,
    shape: NODE_SHAPE,
    status: NODE_STATUSES[4],
    data: {
      badge: 'C',
      isAlternate: false
    }
  },
  {
    id: 'node-5',
    type: 'node',
    label: 'Node 5',
    width: NODE_DIAMETER,
    height: NODE_DIAMETER,
    shape: NODE_SHAPE,
    data: {
      badge: 'C',
      isAlternate: true
    }
  },
  {
    id: 'Group-1',
    children: ['node-0', 'node-1', 'node-2'],
    type: 'group',
    group: true,
    label: 'Group-1',
    style: {
      padding: 40
    }
  }
];

const EDGES = [
  {
    id: 'edge-node-4-node-5',
    type: 'edge',
    source: 'node-4',
    target: 'node-5',
    edgeStyle: EdgeStyle.default
  },
  {
    id: 'edge-node-0-node-2',
    type: 'edge',
    source: 'node-0',
    target: 'node-2',
    edgeStyle: EdgeStyle.default
  }
];

const customLayoutFactory: LayoutFactory = (type: string, graph: Graph): Layout | undefined => {
  switch (type) {
    case 'BreadthFirst':
      return new BreadthFirstLayout(graph);
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
    case 'ColaGroups':
      return new ColaGroupsLayout(graph, { layoutOnDrag: false });
    default:
      return new ColaLayout(graph, { layoutOnDrag: false });
  }
};

interface CustomNodeProps {
  element: Node;
}

const CustomNode: React.FC<CustomNodeProps> = observer(({ element }) => {
  const data = element.getData();
  const Icon = data.alternate ? Icon2 : Icon1;

  return (
    <DefaultNode element={element} showLabel>
      <g transform={`translate(25, 25)`}>
        <Icon style={{ color: '#393F44' }} width={25} height={25} />
      </g>
    </DefaultNode>
  );
});

const customComponentFactory: ComponentFactory = (kind: ModelKind, type: string) => {
  switch (type) {
    case 'group':
      return DefaultGroup;
    default:
      switch (kind) {
        case ModelKind.graph:
          return GraphComponent;
        case ModelKind.node:
          return CustomNode;
        case ModelKind.edge:
          return DefaultEdge;
        default:
          return undefined;
      }
  }
};

interface ViewOptions {
  showLabels: boolean;
  showStatusBackground: boolean;
  showDecorators: boolean;
  showBadges: boolean;
}

export const DefaultViewOptions: ViewOptions = {
  showLabels: false,
  showStatusBackground: false,
  showDecorators: false,
  showBadges: false
};
export const LayoutsDemo: React.FC = () => {
  const [selectedIds, setSelectedIds] = React.useState<string[]>([]);
  const [layoutDropdownOpen, setLayoutDropdownOpen] = React.useState(false);
  const [layout, setLayout] = React.useState<string>('ColaNoForce');

  const controller = React.useMemo(() => {
    const model: Model = {
      nodes: NODES,
      edges: EDGES,
      graph: {
        id: 'g1',
        type: 'graph',
        layout
      }
    };

    const newController = new Visualization();
    newController.registerLayoutFactory(customLayoutFactory);
    newController.registerComponentFactory(customComponentFactory);

    newController.addEventListener(SELECTION_EVENT, setSelectedIds);

    newController.fromModel(model, false);
    return newController;
  }, []);

  const updateLayout = (newLayout: string) => {
    setLayout(newLayout);
    setLayoutDropdownOpen(false);
  };

  React.useEffect(() => {
    const model: Model = {
      nodes: NODES,
      edges: EDGES,
      graph: {
        id: 'g1',
        type: 'graph',
        layout
      }
    };

    controller.fromModel(model, false);
    controller.getGraph().fit(80);
    // Don't update on option changes, its handled differently to not re-layout
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [layout]);

  const layoutDropdown = (
    <Split>
      <SplitItem>
        <label className="pf-u-display-inline-block pf-u-mr-md pf-u-mt-sm">Layout</label>
      </SplitItem>
      <SplitItem>
        <Dropdown
          position={DropdownPosition.right}
          toggle={<DropdownToggle onToggle={() => setLayoutDropdownOpen(!layoutDropdownOpen)}>{layout}</DropdownToggle>}
          isOpen={layoutDropdownOpen}
          dropdownItems={[
            <DropdownItem
              key={1}
              onClick={() => {
                updateLayout('Force');
              }}
            >
              Force
            </DropdownItem>,
            <DropdownItem
              key={2}
              onClick={() => {
                updateLayout('Dagre');
              }}
            >
              Dagre
            </DropdownItem>,
            <DropdownItem
              key={3}
              onClick={() => {
                updateLayout('Cola');
              }}
            >
              Cola
            </DropdownItem>,
            <DropdownItem
              key={8}
              onClick={() => {
                updateLayout('ColaGroups');
              }}
            >
              ColaGroups
            </DropdownItem>,
            <DropdownItem key={4} onClick={() => updateLayout('ColaNoForce')}>
              ColaNoForce
            </DropdownItem>,
            <DropdownItem key={5} onClick={() => updateLayout('Grid')}>
              Grid
            </DropdownItem>,
            <DropdownItem key={6} onClick={() => updateLayout('Concentric')}>
              Concentric
            </DropdownItem>,
            <DropdownItem key={7} onClick={() => updateLayout('BreadthFirst')}>
              BreadthFirst
            </DropdownItem>
          ]}
        />
      </SplitItem>
    </Split>
  );

  const viewToolbar = (
    <>
      <ToolbarItem>{layoutDropdown}</ToolbarItem>
    </>
  );

  return (
    <TopologyView viewToolbar={viewToolbar}>
      <VisualizationProvider controller={controller}>
        <VisualizationSurface state={{ selectedIds }} />
      </VisualizationProvider>
    </TopologyView>
  );
};
