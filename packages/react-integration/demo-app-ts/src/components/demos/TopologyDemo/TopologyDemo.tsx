import React from 'react';
import { Tab, Tabs, TabTitleText } from '@patternfly/react-core';
import { Shapes } from './Shapes';
import { SingleNode, SingleEdge, Group, GroupHull, MultiEdge, AutoSizeNode } from './Basics';
import { ControlledSelection, MultiSelect, Performance, UncontrolledSelection } from './Selection';
import { PanZoom } from './PanZoom';
import { Cola, Dagre, Force } from './Layouts';
import { Anchors, CreateConnector, Reconnect } from './Connectors';
import { Dnd, DndShiftRegroup } from './DragDrop';
import { ContextMenuOnNode, ControlledContextMenu, UncontrolledContextMenu } from './ContextMenus';
import { Topology, WithResizableSideBar, WithSideBar } from './TopologyPackage';
import { ComplexGroup } from './Groups';
import { CollapsibleGroups } from './CollapsibleGroups';
import {
  NodeHoverStyles,
  NodeLabelHoverStyles,
  NodeLabelSelectedStyles,
  NodeLabelStyles,
  NodeHorizontalLabelStyles,
  NodeSelectedStyles,
  NodeStyles,
  NodeBadgedLabelStyles,
  NodeContextMenuLabelStyles,
  NodeIconLabelStyles,
  NodeStatusDecoratorStyles,
  NodeDecoratorStyles,
  NodeSecondaryLabelStyles,
  GroupStyles,
  GroupSelectedStyles,
  GroupHoverStyles,
  GroupDropTargetStyles,
  GroupedGroupsStyles,
  CollapsibleGroupStyles,
  EdgeStyles,
  EdgeAnimationStyles,
  EdgeTerminalStyles,
  EdgeTerminalStatusStyles,
  EdgeTerminalTagStyles
} from './Styles';

import './TopologyDemo.css';

const BASIC = 0;
const STYLES = 1;
const SELECTION = 2;
const PAN_ZOOM = 3;
const LAYOUT = 4;
const CONNECTOR = 5;
const DRAG_AND_DROP = 6;
const SHAPES = 7;
const CONTEXT_MENU = 8;
const TOPOLOGY_PACKAGE = 9;
const COMPLEX_GROUP = 10;
const COLLAPSIBLE_GROUPS = 11;

export const TopologyDemo: React.FunctionComponent = () => {
  const [activeKey, setActiveKey] = React.useState<number>(STYLES);
  const [activeSecondaryKey, setActiveSecondaryKey] = React.useState<number>(0);
  const [activeTertiaryKey, setActiveTertiaryKey] = React.useState<number>(0);

  const handleTabClick = (_event: React.MouseEvent<HTMLElement, MouseEvent>, tabIndex: number) => {
    setActiveKey(tabIndex);
    setActiveSecondaryKey(0);
    setActiveTertiaryKey(0);
  };

  const handleSecondaryTabClick = (_event: React.MouseEvent<HTMLElement, MouseEvent>, tabIndex: number) => {
    setActiveSecondaryKey(tabIndex);
    setActiveTertiaryKey(0);
  };

  const handleTertiaryTabClick = (_event: React.MouseEvent<HTMLElement, MouseEvent>, tabIndex: number) => {
    setActiveTertiaryKey(tabIndex);
  };

  return (
    <div className="pf-ri__topology-demo">
      <Tabs unmountOnExit activeKey={activeKey} onSelect={handleTabClick}>
        <Tab eventKey={BASIC} title={<TabTitleText>Basic</TabTitleText>}>
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
        <Tab eventKey={STYLES} title={<TabTitleText>Styles</TabTitleText>}>
          <Tabs unmountOnExit activeKey={activeSecondaryKey} onSelect={handleSecondaryTabClick}>
            <Tab eventKey={0} title={<TabTitleText>Nodes</TabTitleText>}>
              <Tabs unmountOnExit activeKey={activeTertiaryKey} onSelect={handleTertiaryTabClick}>
                <Tab eventKey={0} title={<TabTitleText>Nodes</TabTitleText>}>
                  <NodeStyles />
                </Tab>
                <Tab eventKey={1} title={<TabTitleText>Hover Nodes</TabTitleText>}>
                  <NodeHoverStyles />
                </Tab>
                <Tab eventKey={2} title={<TabTitleText>Selected Nodes</TabTitleText>}>
                  <NodeSelectedStyles />
                </Tab>
                <Tab eventKey={3} title={<TabTitleText>Status Decorators</TabTitleText>}>
                  <NodeStatusDecoratorStyles />
                </Tab>
                <Tab eventKey={4} title={<TabTitleText>Decorators</TabTitleText>}>
                  <NodeDecoratorStyles />
                </Tab>
              </Tabs>
            </Tab>
            <Tab eventKey={1} title={<TabTitleText>Labels</TabTitleText>}>
              <Tabs unmountOnExit activeKey={activeTertiaryKey} onSelect={handleTertiaryTabClick}>
                <Tab eventKey={0} title={<TabTitleText>Node Labels</TabTitleText>}>
                  <NodeLabelStyles />
                </Tab>
                <Tab eventKey={1} title={<TabTitleText>Hover Labels</TabTitleText>}>
                  <NodeLabelHoverStyles />
                </Tab>
                <Tab eventKey={2} title={<TabTitleText>Selected Labels</TabTitleText>}>
                  <NodeLabelSelectedStyles />
                </Tab>
                <Tab eventKey={3} title={<TabTitleText>Horizontal Labels</TabTitleText>}>
                  <NodeHorizontalLabelStyles />
                </Tab>
                <Tab eventKey={4} title={<TabTitleText>Badged Labels</TabTitleText>}>
                  <NodeBadgedLabelStyles />
                </Tab>
                <Tab eventKey={5} title={<TabTitleText>Context Menu Labels</TabTitleText>}>
                  <NodeContextMenuLabelStyles />
                </Tab>
                <Tab eventKey={6} title={<TabTitleText>Icon Labels</TabTitleText>}>
                  <NodeIconLabelStyles />
                </Tab>
                <Tab eventKey={7} title={<TabTitleText>Secondary Labels</TabTitleText>}>
                  <NodeSecondaryLabelStyles />
                </Tab>
              </Tabs>
            </Tab>
            <Tab eventKey={2} title={<TabTitleText>Groups</TabTitleText>}>
              <Tabs unmountOnExit activeKey={activeTertiaryKey} onSelect={handleTertiaryTabClick}>
                <Tab eventKey={0} title={<TabTitleText>Group</TabTitleText>}>
                  <GroupStyles />
                </Tab>
                <Tab eventKey={1} title={<TabTitleText>Hover Group</TabTitleText>}>
                  <GroupHoverStyles />
                </Tab>
                <Tab eventKey={2} title={<TabTitleText>Selected Group</TabTitleText>}>
                  <GroupSelectedStyles />
                </Tab>
                <Tab eventKey={3} title={<TabTitleText>Drop Target Group</TabTitleText>}>
                  <GroupDropTargetStyles />
                </Tab>
                <Tab eventKey={4} title={<TabTitleText>Grouped Groups</TabTitleText>}>
                  <GroupedGroupsStyles />
                </Tab>
                <Tab eventKey={5} title={<TabTitleText>Collapsible Groups</TabTitleText>}>
                  <CollapsibleGroupStyles />
                </Tab>
              </Tabs>
            </Tab>
            <Tab eventKey={3} title={<TabTitleText>Edges</TabTitleText>}>
              <Tabs unmountOnExit activeKey={activeTertiaryKey} onSelect={handleTertiaryTabClick}>
                <Tab eventKey={0} title={<TabTitleText>Edge Styles</TabTitleText>}>
                  <EdgeStyles />
                </Tab>
                <Tab eventKey={1} title={<TabTitleText>Animated Edges</TabTitleText>}>
                  <EdgeAnimationStyles />
                </Tab>
                <Tab eventKey={2} title={<TabTitleText>Edge Terminal Types</TabTitleText>}>
                  <EdgeTerminalStyles />
                </Tab>
                <Tab eventKey={3} title={<TabTitleText>Edge Terminal Status</TabTitleText>}>
                  <EdgeTerminalStatusStyles />
                </Tab>
                <Tab eventKey={4} title={<TabTitleText>Edge Terminal Tags</TabTitleText>}>
                  <EdgeTerminalTagStyles />
                </Tab>
              </Tabs>
            </Tab>
          </Tabs>
        </Tab>
        <Tab eventKey={SELECTION} title={<TabTitleText>Selection</TabTitleText>}>
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
        <Tab eventKey={PAN_ZOOM} title={<TabTitleText>Pan Zoom</TabTitleText>}>
          <PanZoom />
        </Tab>
        <Tab eventKey={LAYOUT} title={<TabTitleText>Layout</TabTitleText>}>
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
        <Tab eventKey={CONNECTOR} title={<TabTitleText>Connector</TabTitleText>}>
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
        <Tab eventKey={DRAG_AND_DROP} title={<TabTitleText>Drag and Drop</TabTitleText>}>
          <Tabs unmountOnExit activeKey={activeSecondaryKey} onSelect={handleSecondaryTabClick}>
            <Tab eventKey={0} title={<TabTitleText>Dnd</TabTitleText>}>
              <Dnd />
            </Tab>
            <Tab eventKey={1} title={<TabTitleText>Dnd Shift Regroup</TabTitleText>}>
              <DndShiftRegroup />
            </Tab>
          </Tabs>
        </Tab>
        <Tab eventKey={SHAPES} title={<TabTitleText>Shapes</TabTitleText>}>
          <Shapes />
        </Tab>
        <Tab eventKey={CONTEXT_MENU} title={<TabTitleText>Context Menu</TabTitleText>}>
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
        <Tab eventKey={TOPOLOGY_PACKAGE} title={<TabTitleText>Topology Package</TabTitleText>}>
          <Tabs unmountOnExit activeKey={activeSecondaryKey} onSelect={handleSecondaryTabClick}>
            <Tab eventKey={0} title={<TabTitleText>Topology</TabTitleText>}>
              <Topology />
            </Tab>
            <Tab eventKey={1} title={<TabTitleText>With Side Bar</TabTitleText>}>
              <WithSideBar />
            </Tab>
            <Tab eventKey={2} title={<TabTitleText>With Resizeable Side Bar</TabTitleText>}>
              <WithResizableSideBar />
            </Tab>
          </Tabs>
        </Tab>
        <Tab eventKey={COMPLEX_GROUP} title={<TabTitleText>Complex Group</TabTitleText>}>
          <ComplexGroup />
        </Tab>
        <Tab eventKey={COLLAPSIBLE_GROUPS} title={<TabTitleText>Collapsible Groups</TabTitleText>}>
          <CollapsibleGroups />
        </Tab>
      </Tabs>
    </div>
  );
};
TopologyDemo.displayName = 'TopologyDemo';
