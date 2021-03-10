import * as React from 'react';
import {
  Drawer,
  DrawerContent,
  DrawerContentBody,
  DrawerPanelContent,
  Toolbar,
  ToolbarContent,
  ToolbarGroup,
  Divider,
  GenerateId,
  Stack,
  StackItem
} from '@patternfly/react-core';
import '@patternfly/react-styles/css/components/Topology/topology-view.css';

export interface TopologyViewProps extends React.HTMLProps<HTMLDivElement> {
  /** Additional classes added to the view */
  className?: string;
  /** Topology inner container (canvas)  */
  children?: React.ReactNode;
  /** Context toolbar to be displayed at the top of the view, should contain components for changing context */
  contextToolbar?: React.ReactNode;
  /** View toolbar to be displayed below the context toolbar, should contain components for changing view contents */
  viewToolbar?: React.ReactNode;
  /** Topology control bar (typically a TopologyControlBar), used to manipulate the graph layout */
  controlBar?: React.ReactNode;
  /** Topology side bar (typically a TopologySideBar), used to display information for elements in graph */
  sideBar?: React.ReactNode;
  /** Flag if side bar is open */
  sideBarOpen?: boolean;
  /** Flag if side bar is resizable, default false */
  sideBarResizable?: boolean;
  /** The starting size of the side bar, in either pixels or percentage. */
  defaultSideBarSize?: string;
  /** The minimum size of the side bar, in either pixels or percentage. */
  minSideBarSize?: string;
  /** The maximum size of the side bar, in either pixels or percentage. */
  maxSideBarSize?: string;
  /** Callback for side bar resize end. */
  onSideBarResize?: (width: number, id: string) => void;
}

export const TopologyView: React.FunctionComponent<TopologyViewProps> = ({
  className = '',
  contextToolbar = null,
  viewToolbar = null,
  children = null,
  controlBar = null,
  sideBar = null,
  sideBarResizable = false,
  sideBarOpen = false,
  defaultSideBarSize = '500px',
  minSideBarSize = '150px',
  maxSideBarSize = '100%',
  onSideBarResize,
  ...props
}: TopologyViewProps) => {
  const drawPanelContent = (
    <DrawerPanelContent
      isResizable={sideBarResizable}
      id="topology-resize-panel"
      defaultSize={defaultSideBarSize}
      minSize={minSideBarSize}
      maxSize={maxSideBarSize}
      onResize={onSideBarResize}
    >
      {sideBar}
    </DrawerPanelContent>
  );

  return (
    <Stack className={className} {...props}>
      <StackItem isFilled={false}>
        <GenerateId prefix="pf-topology-view-">
          {randomId => (
            <Toolbar id={randomId}>
              {contextToolbar && (
                <ToolbarContent>
                  <ToolbarGroup className="project-toolbar">{contextToolbar}</ToolbarGroup>
                </ToolbarContent>
              )}
              {viewToolbar && (
                <ToolbarContent>
                  <ToolbarGroup className="view-toolbar">{viewToolbar}</ToolbarGroup>
                </ToolbarContent>
              )}
              <Divider />
            </Toolbar>
          )}
        </GenerateId>
      </StackItem>
      <StackItem isFilled className="pf-topology-container">
        <Drawer isExpanded={sideBarOpen} isInline>
          <DrawerContent panelContent={drawPanelContent}>
            <DrawerContentBody>
              <div className="pf-topology-content">
                {children}
                {controlBar && <span className="pf-topology-control-bar">{controlBar}</span>}
              </div>
            </DrawerContentBody>
          </DrawerContent>
        </Drawer>
      </StackItem>
    </Stack>
  );
};
TopologyView.displayName = 'TopologyView';
