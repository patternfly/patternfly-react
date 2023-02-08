import * as React from 'react';

// eslint-disable-next-line patternfly-react/import-tokens-icons
import { RegionsIcon as Icon1 } from '@patternfly/react-icons';
// eslint-disable-next-line patternfly-react/import-tokens-icons
import { FolderOpenIcon as Icon2 } from '@patternfly/react-icons';

import {
  BadgeLocation,
  ColaLayout,
  DefaultEdge,
  DefaultGroup,
  DefaultNode,
  EdgeStyle,
  GeneratorNodeOptions,
  GraphComponent,
  LabelPosition,
  ModelKind,
  NodeModel,
  NodeShape,
  observer,
  SELECTION_EVENT,
  TopologyView,
  Visualization,
  VisualizationProvider,
  VisualizationSurface
} from '@patternfly/react-topology';
import { ComponentFactory, Graph, Layout, LayoutFactory, Model, Node, NodeStatus } from '@patternfly/react-topology';
import { Select, SelectOption, SelectVariant, ToolbarItem } from '@patternfly/react-core';

export const DefaultNodeOptions: GeneratorNodeOptions = {
  shapes: [NodeShape.ellipse],
  statuses: [NodeStatus.default],
  statusDecorators: false,
  showDecorators: false,
  nodeLabels: true,
  nodeBadges: false,
  smallNodes: false
};

export const NODE_STATUSES = [
  NodeStatus.danger,
  NodeStatus.success,
  NodeStatus.warning,
  NodeStatus.info,
  NodeStatus.default
];
export const NODE_SHAPES = [
  NodeShape.ellipse,
  NodeShape.rect,
  NodeShape.rhombus,
  NodeShape.trapezoid,
  NodeShape.hexagon,
  NodeShape.octagon,
  NodeShape.stadium
];

interface CustomNodeProps {
  element: Node;
}

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

const customLayoutFactory: LayoutFactory = (type: string, graph: Graph): Layout | undefined => {
  switch (type) {
    case 'Cola':
      return new ColaLayout(graph);
    default:
      return new ColaLayout(graph, { layoutOnDrag: false });
  }
};

export const ToolbarDemo: React.FC = () => {
  const [nodeOptionsOpen, setNodeOptionsOpen] = React.useState<boolean>(false);
  const [nodeOptions, setNodeOptions] = React.useState<GeneratorNodeOptions>(DefaultNodeOptions);
  const [selectedIds, setSelectedIds] = React.useState<string[]>([]);

  const CustomNode: React.FC<CustomNodeProps> = observer(({ element }) => {
    const data = element.getData();
    const Icon = data.alternate ? Icon2 : Icon1;
    const badgeColors = BadgeColors.find(badgeColor => badgeColor.name === data.badge);

    return (
      <DefaultNode
        element={element}
        showStatusDecorator={data.showStatusDecorator}
        badge={data.badge}
        badgeColor={badgeColors?.badgeColor}
        badgeTextColor={badgeColors?.badgeTextColor}
        badgeBorderColor={badgeColors?.badgeBorderColor}
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

  const NODE_DIAMETER = 75;

  const NODES: NodeModel[] = [
    {
      id: 'node-0',
      type: 'node',
      label: nodeOptions.nodeLabels ? 'Node 0' : '',
      width: NODE_DIAMETER,
      height: NODE_DIAMETER,
      shape: NodeShape.ellipse,
      status: nodeOptions.statuses[0],
      data: {
        badge: 'B',
        showBadge: nodeOptions.nodeBadges,
        showStatusDecorator: nodeOptions.statusDecorators,
        isAlternate: false
      }
    },
    {
      id: 'node-1',
      type: 'node',
      label: nodeOptions.nodeLabels ? 'Node 1' : '',
      width: NODE_DIAMETER,
      height: NODE_DIAMETER,
      shape: NodeShape.hexagon,
      status: nodeOptions.statuses[1],
      data: {
        badge: 'B',
        showBadge: nodeOptions.nodeBadges,
        showStatusDecorator: nodeOptions.statusDecorators,
        isAlternate: false
      }
    },
    {
      id: 'node-2',
      type: 'node',
      label: nodeOptions.nodeLabels ? 'Node 2' : '',
      width: NODE_DIAMETER,
      height: NODE_DIAMETER,
      shape: NodeShape.octagon,
      status: nodeOptions.statuses[2],
      data: {
        badge: 'A',
        showBadge: nodeOptions.nodeBadges,
        showStatusDecorator: nodeOptions.showDecorators,
        isAlternate: true
      }
    },
    {
      id: 'node-3',
      type: 'node',
      label: nodeOptions.nodeLabels ? 'Node 3' : '',
      width: NODE_DIAMETER,
      height: NODE_DIAMETER,
      shape: NodeShape.rhombus,
      status: nodeOptions.statuses[3],
      data: {
        badge: 'A',
        showBadge: nodeOptions.nodeBadges,
        showStatusDecorator: nodeOptions.statusDecorators,
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
      status: nodeOptions.statuses[4],
      data: {
        badge: 'C',
        showBadge: nodeOptions.nodeBadges,
        showStatusDecorator: nodeOptions.statusDecorators,
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
        showBadge: nodeOptions.nodeBadges,
        showStatusDecorator: nodeOptions.statusDecorators,
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

  const getNodeOptions = (
    index: number,
    nodeCreationOptions: GeneratorNodeOptions
  ): {
    status?: NodeStatus;
    shape?: NodeShape;
    label?: string;
    badge?: string;
    showStatusDecorator?: boolean;
    showDecorators?: boolean;
    showContextMenu?: boolean;
  } => {
    const shapeEnumIndex = Math.round(Math.random() * ((nodeCreationOptions.shapes ?? []).length - 1));
    return {
      status: nodeCreationOptions.statuses?.[index % nodeCreationOptions.statuses.length],
      shape: nodeCreationOptions.shapes?.[shapeEnumIndex],
      label: nodeCreationOptions.nodeLabels ? `Node ${index} Title` : undefined,
      showDecorators: nodeCreationOptions.showDecorators,
      showContextMenu: nodeCreationOptions.contextMenus,
      badge: nodeCreationOptions.nodeBadges ? NODES[index].data.badge : undefined,
      showStatusDecorator: nodeCreationOptions.statusDecorators
    };
  };

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

  const createNode = (options: {
    id: string;
    type?: string;
    label?: string;
    labelPosition?: LabelPosition;
    badge?: string;
    badgeColor?: string;
    badgeTextColor?: string;
    badgeBorderColor?: string;
    badgeClassName?: string;
    badgeLocation?: BadgeLocation;
    row?: number;
    column?: number;
    shape?: NodeShape;
    status?: NodeStatus;
    showStatusDecorator?: boolean;
    statusDecoratorTooltip?: React.ReactNode;
    showDecorators?: boolean;
    selected?: boolean;
    hover?: boolean;
    x?: number;
    y?: number;
    showContextMenu?: boolean;
    labelIconClass?: string;
    marginX?: number;
    truncateLength?: number;
    setLocation?: boolean;
  }): NodeModel => {
    const shape = options.shape || NodeShape.ellipse;

    const nodeModel: NodeModel = {
      id: options.id,
      type: options.type || 'node',
      label: options.label,
      shape,
      status: options.status || NodeStatus.default,
      labelPosition: options.labelPosition,
      // data items are used to pass to the component to show various option, demo purposes only
      data: {
        ...options,
        showDecorators: options.showDecorators
      }
    };
    return nodeModel;
  };

  const generateNode = (index: number, nodeCreationOptions: GeneratorNodeOptions): NodeModel => {
    const nodeId = `node-${index}`;
    const nodeOptions = getNodeOptions(index, nodeCreationOptions);

    return createNode({
      id: nodeId,
      ...nodeOptions
    });
  };

  React.useEffect(() => {
    const currentModel = controller.toModel();
    const nodes = currentModel.nodes;
    if (nodes?.length) {
      const updatedNodes: NodeModel[] = nodes.map((node, index) => {
        if (node.group) {
          return node;
        }
        return {
          ...node,
          ...generateNode(index, nodeOptions)
        };
      });
      controller.fromModel({ nodes: updatedNodes, edges: currentModel.edges });
    }
    // Don't update on controller change
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nodeOptions]);

  React.useEffect(() => {
    const currentModel = controller.toModel();
    const nodes = currentModel.nodes;
    if (nodes?.length) {
      const updatedNodes: NodeModel[] = nodes.map(node => {
        if (node.group) {
          return node;
        }
        return {
          ...node
        };
      });
      controller.fromModel({ nodes: updatedNodes, edges: currentModel.edges });
    }
    // Don't update on controller change
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nodeOptions]);

  const renderNodeOptionsDropdown = () => {
    const selectContent = (
      <div>
        <SelectOption
          value="Labels"
          isChecked={nodeOptions.nodeLabels}
          onClick={() => setNodeOptions(prev => ({ ...prev, nodeLabels: !prev.nodeLabels }))}
        />
        <SelectOption
          value="Status"
          isChecked={(nodeOptions.statuses?.length ?? 0) > 1}
          onClick={() =>
            setNodeOptions(prev => ({
              ...prev,
              statuses: (prev.statuses?.length ?? 0) > 1 ? DefaultNodeOptions.statuses : NODE_STATUSES
            }))
          }
        />
        <SelectOption
          value="Decorators"
          isDisabled={!((nodeOptions.statuses?.length ?? 0) > 1)}
          isChecked={nodeOptions.statusDecorators}
          onClick={() =>
            setNodeOptions(prev => ({
              ...prev,
              statusDecorators: !prev.statusDecorators,
              showDecorators: !prev.showDecorators
            }))
          }
        />
        <SelectOption
          value="Badges"
          isChecked={nodeOptions.nodeBadges}
          onClick={() => setNodeOptions(prev => ({ ...prev, nodeBadges: !prev.nodeBadges }))}
        />
      </div>
    );

    return (
      <Select
        variant={SelectVariant.checkbox}
        customContent={selectContent}
        onToggle={() => setNodeOptionsOpen(prev => !prev)}
        onSelect={() => {}}
        isCheckboxSelectionBadgeHidden
        isOpen={nodeOptionsOpen}
        placeholderText="Node options"
      />
    );
  };

  const contextToolbar = (
    <>
      <ToolbarItem>{renderNodeOptionsDropdown()}</ToolbarItem>
    </>
  );

  return (
    <TopologyView contextToolbar={contextToolbar}>
      <VisualizationProvider controller={controller}>
        <VisualizationSurface state={{ selectedIds }} />
      </VisualizationProvider>
    </TopologyView>
  );
};
