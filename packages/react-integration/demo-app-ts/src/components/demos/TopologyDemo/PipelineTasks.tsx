import React from 'react';
import { Flex, FlexItem, Radio, ToolbarItem } from '@patternfly/react-core';
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
import { createFinallyTasks, createStatusTasks, setWhenStatus } from './utils/pipelineUtils';

export const TASKS_TITLE = 'Tasks';

export const PipelineTasks: React.FC = () => {
  const [showContext, setShowContext] = React.useState<boolean>(false);
  const [showBadges, setShowBadges] = React.useState<boolean>(false);
  const [showIcons, setShowIcons] = React.useState<boolean>(false);
  const [selectedIds, setSelectedIds] = React.useState<string[]>();

  const controller = useVisualizationController();

  React.useEffect(() => {
    const tasks = createStatusTasks('task', 4, undefined, false, false, showContext, showBadges, showIcons);
    setWhenStatus(tasks);
    const finallyNodes = createFinallyTasks('finally', 2, tasks);
    const finallyGroup = {
      id: 'finally-group',
      type: 'finally-group',
      children: finallyNodes.map(n => n.id),
      group: true,
      style: { padding: 17 }
    };
    const model = {
      graph: {
        id: 'g1',
        type: 'graph',
        x: 25,
        y: 25
      },
      nodes: [...tasks, ...finallyNodes, finallyGroup]
    };
    controller.fromModel(model, false);
  }, [controller, showBadges, showContext, showIcons]);

  useEventListener<SelectionEventListener>(SELECTION_EVENT, ids => {
    setSelectedIds(ids);
  });

  const contextToolbar = (
    <>
      <ToolbarItem>
        <Flex alignItems={{ default: 'alignItemsCenter' }}>
          <FlexItem>Icons:</FlexItem>
          <FlexItem>
            <Radio
              id="show-icons"
              aria-label="Show icons"
              label="Show"
              name="show-icons"
              isChecked={showIcons}
              onChange={checked => checked && setShowIcons(true)}
            />
          </FlexItem>
          <FlexItem>
            <Radio
              id="hide-icons"
              aria-label="Hide icons"
              label="Hide"
              name="hide-icons"
              isChecked={!showIcons}
              onChange={checked => checked && setShowIcons(false)}
            />
          </FlexItem>
        </Flex>
      </ToolbarItem>
      <ToolbarItem>
        <Flex alignItems={{ default: 'alignItemsCenter' }}>
          <FlexItem>Badges:</FlexItem>
          <FlexItem>
            <Radio
              id="show-badges"
              aria-label="Show badges"
              label="Show"
              name="show-badges"
              isChecked={showBadges}
              onChange={checked => checked && setShowBadges(true)}
            />
          </FlexItem>
          <FlexItem>
            <Radio
              id="hide-badges"
              aria-label="Hide badges"
              label="Hide"
              name="hide-badges"
              isChecked={!showBadges}
              onChange={checked => checked && setShowBadges(false)}
            />
          </FlexItem>
        </Flex>
      </ToolbarItem>
      <ToolbarItem>
        <Flex alignItems={{ default: 'alignItemsCenter' }}>
          <FlexItem>Context menus:</FlexItem>
          <FlexItem>
            <Radio
              id="show-menus"
              aria-label="Show context menus"
              label="Show"
              name="show-menus"
              isChecked={showContext}
              onChange={checked => checked && setShowContext(true)}
            />
          </FlexItem>
          <FlexItem>
            <Radio
              id="hide-context"
              aria-label="Hide context menus"
              label="Hide"
              name="hide-context"
              isChecked={!showContext}
              onChange={checked => checked && setShowContext(false)}
            />
          </FlexItem>
        </Flex>
      </ToolbarItem>
    </>
  );

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
