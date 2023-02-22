import * as React from 'react';
import { Select, SelectOption, SelectVariant, ToolbarItem } from '@patternfly/react-core';
// eslint-disable-next-line patternfly-react/import-tokens-icons
import { RegionsIcon as Icon1, FolderOpenIcon as Icon2 } from '@patternfly/react-icons';
import {
  ColaLayout,
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
  Graph,
  Layout,
  LayoutFactory,
  Model,
  Node,
  NodeStatus
} from '@patternfly/react-topology';

export const NODE_STATUSES = [
  NodeStatus.danger,
  NodeStatus.success,
  NodeStatus.warning,
  NodeStatus.info,
  NodeStatus.default
];

const BadgeColors = [
  {
    name: 'A',
    badgeColor: '#ace12e',
    badgeTextColor: '#0f280d',
    badgeBorderColor: '#486b00'
  },
  {
    name: 'B',
    badgeColor: '#F2F0FC',
    badgeTextColor: '#5752d1',
    badgeBorderColor: '#CBC1FF'
  }
];

const NODE_DIAMETER = 75;

const NODES: NodeModel[] = [
  {
    id: 'node-0',
    type: 'node',
    label: 'Node 0',
    width: NODE_DIAMETER,
    height: NODE_DIAMETER,
    shape: NodeShape.ellipse,
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
    shape: NodeShape.hexagon,
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
    shape: NodeShape.octagon,
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
    shape: NodeShape.rhombus,
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
    shape: NodeShape.hexagon,
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
    shape: NodeShape.rect,
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
    case 'Cola':
      return new ColaLayout(graph);
    default:
      return new ColaLayout(graph, { layoutOnDrag: false });
  }
};

interface ControllerState {
  selectedIds: string[];
  viewOptions: ViewOptions;
}

interface CustomNodeProps {
  element: Node;
}

const CustomNode: React.FC<CustomNodeProps> = observer(({ element }) => {
  const data = element.getData();
  const Icon = data.isAlternate ? Icon2 : Icon1;
  const badgeColors = BadgeColors.find(badgeColor => badgeColor.name === data.badge);
  const { viewOptions } = element.getController().getState<ControllerState>();

  return (
    <DefaultNode
      element={element}
      showStatusBackground={viewOptions.showStatusBackground}
      showStatusDecorator={viewOptions.showDecorators}
      badge={viewOptions.showBadges ? data.badge : undefined}
      badgeColor={viewOptions.showBadges ? badgeColors?.badgeColor : undefined}
      badgeTextColor={viewOptions.showBadges ? badgeColors?.badgeTextColor : undefined}
      badgeBorderColor={viewOptions.showBadges ? badgeColors?.badgeBorderColor : undefined}
      showLabel={viewOptions.showLabels}
    >
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
export const ToolbarDemo: React.FC = () => {
  const [viewOptionsOpen, setViewOptionsOpen] = React.useState<boolean>(false);
  const [viewOptions, setViewOptions] = React.useState<ViewOptions>(DefaultViewOptions);
  const [selectedIds, setSelectedIds] = React.useState<string[]>([]);

  const controller = React.useMemo(() => {
    const model: Model = {
      nodes: NODES,
      edges: EDGES,
      graph: {
        id: 'g1',
        type: 'graph',
        layout: 'Cola'
      }
    };

    const newController = new Visualization();
    newController.registerLayoutFactory(customLayoutFactory);
    newController.registerComponentFactory(customComponentFactory);

    newController.addEventListener(SELECTION_EVENT, setSelectedIds);

    newController.fromModel(model, false);
    return newController;
  }, []);

  const contextToolbar = (
    <ToolbarItem>
      <Select
        variant={SelectVariant.checkbox}
        customContent={
          <div>
            <SelectOption
              value="Labels"
              isChecked={viewOptions.showLabels}
              onClick={() => setViewOptions(prev => ({ ...prev, showLabels: !prev.showLabels }))}
            />
            <SelectOption
              value="Badges"
              isDisabled={!viewOptions.showLabels}
              isChecked={viewOptions.showBadges}
              onClick={() => setViewOptions(prev => ({ ...prev, showBadges: !prev.showBadges }))}
            />
            <SelectOption
              value="Status background"
              isChecked={viewOptions.showStatusBackground}
              onClick={() => setViewOptions(prev => ({ ...prev, showStatusBackground: !prev.showStatusBackground }))}
            />
            <SelectOption
              value="Status decorators"
              isChecked={viewOptions.showDecorators}
              onClick={() => setViewOptions(prev => ({ ...prev, showDecorators: !prev.showDecorators }))}
            />
          </div>
        }
        onToggle={() => setViewOptionsOpen(prev => !prev)}
        onSelect={() => {}}
        isCheckboxSelectionBadgeHidden
        isOpen={viewOptionsOpen}
        placeholderText="Node options"
      />
    </ToolbarItem>
  );

  return (
    <TopologyView contextToolbar={contextToolbar}>
      <VisualizationProvider controller={controller}>
        <VisualizationSurface state={{ selectedIds, viewOptions }} />
      </VisualizationProvider>
    </TopologyView>
  );
};
