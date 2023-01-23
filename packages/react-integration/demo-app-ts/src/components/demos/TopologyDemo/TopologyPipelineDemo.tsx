import React from 'react';
import { Tab, Tabs, TabTitleText } from '@patternfly/react-core';
import { TASKS_TITLE, TopologyPipelineTasks } from './PipelineTasks';
import { LAYOUT_TITLE, PipelineLayout } from './PipelineLayout';

import './TopologyDemo.css';

const TASKS = 0;
const LAYOUT = 1;

export const TopologyPipelineDemo: React.FunctionComponent = () => {
  const [activeKey, setActiveKey] = React.useState<number>(TASKS);

  const handleTabClick = (_event: React.MouseEvent<HTMLElement, MouseEvent>, tabIndex: number) => {
    setActiveKey(tabIndex);
  };

  return (
    <div className="pf-ri__topology-demo">
      <Tabs unmountOnExit activeKey={activeKey} onSelect={handleTabClick}>
        <Tab eventKey={TASKS} title={<TabTitleText>{TASKS_TITLE}</TabTitleText>}>
          <TopologyPipelineTasks />
        </Tab>
        <Tab eventKey={LAYOUT} title={<TabTitleText>{LAYOUT_TITLE}</TabTitleText>}>
          <PipelineLayout />
        </Tab>
      </Tabs>
    </div>
  );
};
TopologyPipelineDemo.displayName = 'TopologyPipelineDemo';
