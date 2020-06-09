import React from 'react';
import { Tab, Tabs, TabTitleText } from '@patternfly/react-core';
import '@patternfly/react-styles/css/components/Topology/topology-components.css';
import { Shapes } from './Shapes';
import { SingleNode, SingleEdge, Group, GroupHull, MultiEdge, AutoSizeNode } from './Basics';
import { ControlledSelection, MultiSelect, Performance, UncontrolledSelection } from './Selection';
import { PanZoom } from './PanZoom';
import { Cola, Dagre, Force } from './Layouts';
import { Anchors, CreateConnector, Reconnect } from './Connectors';
import { Dnd, DndShiftRegroup } from './DragDrop';
import { ContextMenuOnNode, ControlledContextMenu, UncontrolledContextMenu } from './ContextMenus';
import { Topology, WithSideBar } from './TopologyPackage';
import { ComplexGroup } from './Groups';
import { CollapsibleGroups } from './CollapsibleGroups';

import './TopologyDemo.css';

export const TopologyDemo: React.FC = () => {
  const [activeKey, setActiveKey] = React.useState<number>(0);
  const [activeSecondaryKey, setActiveSecondaryKey] = React.useState<number>(0);

  const handleTabClick = (_event: React.MouseEvent<HTMLElement, MouseEvent>, tabIndex: number) => {
    setActiveKey(tabIndex);
    setActiveSecondaryKey(0);
  };

  const handleSecondaryTabClick = (_event: React.MouseEvent<HTMLElement, MouseEvent>, tabIndex: number) => {
    setActiveSecondaryKey(tabIndex);
  };

  return (
    <div className="pf-ri__topology-demo">
      <Tabs unmountOnExit activeKey={activeKey} onSelect={handleTabClick}>
        <Tab eventKey={0} title={<TabTitleText>Basic</TabTitleText>}>
          <Tabs unmountOnExit activeKey={activeSecondaryKey} onSelect={handleSecondaryTabClick}>
            <Tab eventKey={0} title={<TabTitleText>Single Node</TabTitleText>}>
              <SingleNode />
            </Tab>
            <Tab eventKey={1} title={<TabTitleText>Single Edge</TabTitleText>}>
              <SingleEdge />
            </Tab>
            <Tab eventKey={2} title={<TabTitleText>Multi Edge</TabTitleText>}>
              <MultiEdge />
            </Tab>
            <Tab eventKey={3} title={<TabTitleText>Group</TabTitleText>}>
              <Group />
            </Tab>
            <Tab eventKey={4} title={<TabTitleText>Group Hull</TabTitleText>}>
              <GroupHull />
            </Tab>
            <Tab eventKey={5} title={<TabTitleText>Auto Size Node</TabTitleText>}>
              <AutoSizeNode />
            </Tab>
          </Tabs>
        </Tab>
        <Tab eventKey={1} title={<TabTitleText>Selection</TabTitleText>}>
          <Tabs unmountOnExit activeKey={activeSecondaryKey} onSelect={handleSecondaryTabClick}>
            <Tab eventKey={0} title={<TabTitleText>Uncontrolled</TabTitleText>}>
              <UncontrolledSelection />
            </Tab>
            <Tab eventKey={1} title={<TabTitleText>Controlled</TabTitleText>}>
              <ControlledSelection />
            </Tab>
            <Tab eventKey={2} title={<TabTitleText>Multi Select</TabTitleText>}>
              <MultiSelect />
            </Tab>
            <Tab eventKey={3} title={<TabTitleText>Performance</TabTitleText>}>
              <Performance />
            </Tab>
          </Tabs>
        </Tab>
        <Tab eventKey={3} title={<TabTitleText>Pan Zoom</TabTitleText>}>
          <PanZoom />
        </Tab>
        <Tab eventKey={4} title={<TabTitleText>Layout</TabTitleText>}>
          <Tabs unmountOnExit activeKey={activeSecondaryKey} onSelect={handleSecondaryTabClick}>
            <Tab eventKey={0} title={<TabTitleText>Force</TabTitleText>}>
              <Force />
            </Tab>
            <Tab eventKey={1} title={<TabTitleText>Dagre</TabTitleText>}>
              <Dagre />
            </Tab>
            <Tab eventKey={2} title={<TabTitleText>Cola</TabTitleText>}>
              <Cola />
            </Tab>
          </Tabs>
        </Tab>
        <Tab eventKey={5} title={<TabTitleText>Connector</TabTitleText>}>
          <Tabs unmountOnExit activeKey={activeSecondaryKey} onSelect={handleSecondaryTabClick}>
            <Tab eventKey={0} title={<TabTitleText>Reconnect</TabTitleText>}>
              <Reconnect />
            </Tab>
            <Tab eventKey={1} title={<TabTitleText>Create Connector</TabTitleText>}>
              <CreateConnector />
            </Tab>
            <Tab eventKey={2} title={<TabTitleText>Anchors</TabTitleText>}>
              <Anchors />
            </Tab>
          </Tabs>
        </Tab>
        <Tab eventKey={6} title={<TabTitleText>Drag and Drop</TabTitleText>}>
          <Tabs unmountOnExit activeKey={activeSecondaryKey} onSelect={handleSecondaryTabClick}>
            <Tab eventKey={0} title={<TabTitleText>Dnd</TabTitleText>}>
              <Dnd />
            </Tab>
            <Tab eventKey={1} title={<TabTitleText>Dnd Shift Regroup</TabTitleText>}>
              <DndShiftRegroup />
            </Tab>
          </Tabs>
        </Tab>
        <Tab eventKey={7} title={<TabTitleText>Shapes</TabTitleText>}>
          <Shapes />
        </Tab>
        <Tab eventKey={8} title={<TabTitleText>Context Menu</TabTitleText>}>
          <Tabs unmountOnExit activeKey={activeSecondaryKey} onSelect={handleSecondaryTabClick}>
            <Tab eventKey={0} title={<TabTitleText>Controlled Context Menu</TabTitleText>}>
              <ControlledContextMenu />
            </Tab>
            <Tab eventKey={1} title={<TabTitleText>Uncontrolled Context Menu</TabTitleText>}>
              <UncontrolledContextMenu />
            </Tab>
            <Tab eventKey={2} title={<TabTitleText>Context Menu on Node</TabTitleText>}>
              <ContextMenuOnNode />
            </Tab>
          </Tabs>
        </Tab>
        <Tab eventKey={9} title={<TabTitleText>Topology Package</TabTitleText>}>
          <Tabs unmountOnExit activeKey={activeSecondaryKey} onSelect={handleSecondaryTabClick}>
            <Tab eventKey={0} title={<TabTitleText>Topology</TabTitleText>}>
              <Topology />
            </Tab>
            <Tab eventKey={1} title={<TabTitleText>With Side Bar</TabTitleText>}>
              <WithSideBar />
            </Tab>
          </Tabs>
        </Tab>
        <Tab eventKey={10} title={<TabTitleText>Complex Group</TabTitleText>}>
          <ComplexGroup />
        </Tab>
        <Tab eventKey={11} title={<TabTitleText>Collapsible Groups</TabTitleText>}>
          <CollapsibleGroups />
        </Tab>
      </Tabs>
    </div>
  );
};
