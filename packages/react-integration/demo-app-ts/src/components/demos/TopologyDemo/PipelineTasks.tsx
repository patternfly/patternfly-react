import React from 'react';
import {
  TopologyView,
  Visualization,
  VisualizationProvider,
  VisualizationSurface,
  useEventListener,
  SelectionEventListener,
  SELECTION_EVENT,
  useVisualizationController
} from '@patternfly/react-topology';
import '@patternfly/react-styles/css/components/Topology/topology-components.css';
import pipelineComponentFactory from './components/pipelineComponentFactory';
import { usePipelineOptions } from './usePipelineOptions';
import { useDemoPipelineNodes } from './useDemoPipelineNodes';

export const TASKS_TITLE = 'Tasks';

export const PipelineTasks: React.FC = () => {
  const [selectedIds, setSelectedIds] = React.useState<string[]>();

  const controller = useVisualizationController();
  const { contextToolbar, showContextMenu, showBadges, showIcons, badgeTooltips } = usePipelineOptions();
  const pipelineNodes = useDemoPipelineNodes(showContextMenu, showBadges, showIcons, badgeTooltips);

  React.useEffect(() => {
    controller.fromModel(
      {
        graph: {
          id: 'g1',
          type: 'graph',
          x: 25,
          y: 25
        },
        nodes: pipelineNodes
      },
      false
    );
  }, [controller, pipelineNodes]);

  useEventListener<SelectionEventListener>(SELECTION_EVENT, ids => {
    setSelectedIds(ids);
  });

  return (
    <TopologyView contextToolbar={contextToolbar}>
      <VisualizationSurface state={{ selectedIds }} />
    </TopologyView>
  );
};

PipelineTasks.displayName = 'PipelineTasks';

export const TopologyPipelineTasks = React.memo(() => {
  const controller = new Visualization();
  controller.registerComponentFactory(pipelineComponentFactory);
  return (
    <VisualizationProvider controller={controller}>
      <PipelineTasks />
    </VisualizationProvider>
  );
});
