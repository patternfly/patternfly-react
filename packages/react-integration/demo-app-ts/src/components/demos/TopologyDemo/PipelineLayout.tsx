import React from 'react';
import {
  Graph,
  Layout,
  PipelineDagreLayout,
  Visualization,
  VisualizationProvider,
  useEventListener,
  SelectionEventListener,
  SELECTION_EVENT,
  TopologyView,
  VisualizationSurface,
  useVisualizationController,
  NODE_SEPARATION_HORIZONTAL,
  GRAPH_LAYOUT_END_EVENT,
  getSpacerNodes,
  getEdgesFromNodes,
  DEFAULT_EDGE_TYPE,
  DEFAULT_SPACER_NODE_TYPE,
  DEFAULT_FINALLY_NODE_TYPE
} from '@patternfly/react-topology';
import '@patternfly/react-styles/css/components/Topology/topology-components.css';
import pipelineComponentFactory, { GROUPED_EDGE_TYPE } from './components/pipelineComponentFactory';
import { usePipelineOptions } from './usePipelineOptions';
import { useDemoPipelineNodes } from './useDemoPipelineNodes';
import { GROUPED_PIPELINE_NODE_SEPARATION_HORIZONTAL } from './components/DemoTaskGroupEdge';

export const PIPELINE_NODE_SEPARATION_VERTICAL = 65;

export const LAYOUT_TITLE = 'Layout';

const PIPELINE_LAYOUT = 'PipelineLayout';
const GROUPED_PIPELINE_LAYOUT = 'GroupedPipelineLayout';

const TopologyPipelineLayout: React.FC = () => {
  const [selectedIds, setSelectedIds] = React.useState<string[]>();

  const controller = useVisualizationController();
  const { contextToolbar, showContextMenu, showBadges, showIcons, showGroups, badgeTooltips } = usePipelineOptions(
    true
  );
  const pipelineNodes = useDemoPipelineNodes(
    showContextMenu,
    showBadges,
    showIcons,
    badgeTooltips,
    'PipelineDagreLayout',
    showGroups
  );

  React.useEffect(() => {
    const spacerNodes = getSpacerNodes(pipelineNodes);
    const nodes = [...pipelineNodes, ...spacerNodes];
    const edgeType = showGroups ? GROUPED_EDGE_TYPE : DEFAULT_EDGE_TYPE;
    const edges = getEdgesFromNodes(
      nodes.filter(n => !n.group),
      DEFAULT_SPACER_NODE_TYPE,
      edgeType,
      edgeType,
      [DEFAULT_FINALLY_NODE_TYPE],
      edgeType
    );

    controller.fromModel(
      {
        graph: {
          id: 'g1',
          type: 'graph',
          x: 25,
          y: 25,
          layout: showGroups ? GROUPED_PIPELINE_LAYOUT : PIPELINE_LAYOUT
        },
        nodes,
        edges
      },
      true
    );
    controller.getGraph().layout();
  }, [controller, pipelineNodes, showGroups]);

  useEventListener<SelectionEventListener>(SELECTION_EVENT, ids => {
    setSelectedIds(ids);
  });

  return (
    <TopologyView contextToolbar={contextToolbar}>
      <VisualizationSurface state={{ selectedIds }} />
    </TopologyView>
  );
};

TopologyPipelineLayout.displayName = 'TopologyPipelineLayout';

export const PipelineLayout = React.memo(() => {
  const controller = new Visualization();
  controller.setFitToScreenOnLayout(true);
  controller.registerComponentFactory(pipelineComponentFactory);
  controller.registerLayoutFactory(
    (type: string, graph: Graph): Layout | undefined =>
      new PipelineDagreLayout(graph, {
        nodesep: PIPELINE_NODE_SEPARATION_VERTICAL,
        ranksep:
          type === GROUPED_PIPELINE_LAYOUT ? GROUPED_PIPELINE_NODE_SEPARATION_HORIZONTAL : NODE_SEPARATION_HORIZONTAL,
        ignoreGroups: true
      })
  );
  controller.fromModel(
    {
      graph: {
        id: 'g1',
        type: 'graph',
        x: 25,
        y: 25,
        layout: PIPELINE_LAYOUT
      }
    },
    false
  );
  controller.addEventListener(GRAPH_LAYOUT_END_EVENT, () => {
    controller.getGraph().fit(75);
  });

  return (
    <VisualizationProvider controller={controller}>
      <TopologyPipelineLayout />
    </VisualizationProvider>
  );
});
