/* eslint-disable jsx-a11y/label-has-associated-control */
import * as React from 'react';
import { action } from 'mobx';
import * as _ from 'lodash';
import {
  TopologyView,
  TopologySideBar,
  TopologyControlBar,
  createTopologyControlButtons,
  defaultControlButtonsOptions,
  EdgeModel,
  Model,
  ModelKind,
  NodeModel,
  Controller,
  Visualization,
  withPanZoom,
  GraphComponent,
  withDragNode,
  VisualizationSurface,
  SELECTION_EVENT,
  SelectionEventListener,
  withSelection,
  VisualizationProvider,
  useEventListener
} from '@patternfly/react-topology';
import {
  ToolbarItem,
  Split,
  SplitItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownPosition,
  Button,
  Tooltip
} from '@patternfly/react-core';
import defaultLayoutFactory from './layouts/defaultLayoutFactory';
import data from './data/reasonable';
import GroupHull from './components/GroupHull';
import Group from './components/DefaultGroup';
import Node from './components/DefaultNode';
import defaultComponentFactory from './components/defaultComponentFactory';

import '@patternfly/patternfly/patternfly.css';
import '@patternfly/patternfly/patternfly-addons.css';

const GRAPH_LAYOUT_OPTIONS = ['x', 'y', 'visible', 'style', 'layout', 'scale', 'scaleExtent', 'layers'];
const NODE_LAYOUT_OPTIONS = ['x', 'y', 'visible', 'style', 'collapsed', 'width', 'height', 'shape'];

const getModel = (layout: string): Model => {
  // create nodes from data
  const nodes: NodeModel[] = data.nodes.map(d => {
    // randomize size somewhat
    const width = 50 + d.id.length + 40;
    const height = 50 + d.id.length;
    return {
      id: d.id,
      type: 'node',
      width,
      height,
      data: d
    };
  });

  // create groups from data
  const groupNodes: NodeModel[] = _.map(_.groupBy(nodes, n => n.data.group), (v, k) => ({
    type: 'group-hull',
    id: k,
    group: true,
    children: v.map((n: NodeModel) => n.id),
    label: `group-${k}`,
    style: {
      padding: 10
    }
  }));

  // create links from data
  const edges = data.links.map(
    (d): EdgeModel => ({
      data: d,
      source: d.source,
      target: d.target,
      id: `${d.source}_${d.target}`,
      type: 'edge'
    })
  );

  // create topology model
  const model: Model = {
    graph: {
      id: 'g1',
      type: 'graph',
      layout
    },
    nodes: [...nodes, ...groupNodes],
    edges
  };

  return model;
};

const getVisualization = (model: Model): Visualization => {
  const vis = new Visualization();

  vis.registerLayoutFactory(defaultLayoutFactory);
  vis.registerComponentFactory(defaultComponentFactory);

  // support pan zoom, drag, and selection
  vis.registerComponentFactory((kind, type) => {
    if (kind === ModelKind.graph) {
      return withPanZoom()(GraphComponent);
    }
    if (type === 'group-hull') {
      return withDragNode({ canCancel: false })(GroupHull);
    }
    if (type === 'group') {
      return withDragNode({ canCancel: false })(Group);
    }
    if (kind === ModelKind.node) {
      return withDragNode({ canCancel: false })(withSelection()(Node));
    }
    return undefined;
  });
  vis.fromModel(model);

  return vis;
};

interface TopologyViewComponentProps {
  vis: Controller;
  useSidebar: boolean;
}

const TopologyViewComponent: React.FC<TopologyViewComponentProps> = ({ vis, useSidebar }) => {
  const [selectedIds, setSelectedIds] = React.useState<string[]>();
  const [layoutDropdownOpen, setLayoutDropdownOpen] = React.useState(false);
  const [layout, setLayout] = React.useState('Force');
  const [savedModel, setSavedModel] = React.useState<Model>();
  const [modelSaved, setModelSaved] = React.useState<boolean>(false);
  const newNodeCount = React.useRef(0);

  useEventListener<SelectionEventListener>(SELECTION_EVENT, ids => {
    setSelectedIds(ids);
  });

  const topologySideBar = (
    <TopologySideBar show={_.size(selectedIds) > 0} onClose={() => setSelectedIds([])}>
      <div style={{ marginTop: 27, marginLeft: 20 }}>{_.head(selectedIds)}</div>
    </TopologySideBar>
  );

  const updateLayout = (newLayout: string) => {
    // FIXME reset followed by layout causes a flash of the reset prior to the layout
    vis.getGraph().reset();
    vis.getGraph().setLayout(newLayout);
    vis.getGraph().layout();
    setLayout(newLayout);
    setLayoutDropdownOpen(false);
  };

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
            <DropdownItem key={1} onClick={() => updateLayout('Force')}>
              Force
            </DropdownItem>,
            <DropdownItem key={2} onClick={() => updateLayout('Dagre')}>
              Dagre
            </DropdownItem>,
            <DropdownItem key={3} onClick={() => updateLayout('Cola')}>
              Cola
            </DropdownItem>
          ]}
        />
      </SplitItem>
    </Split>
  );

  const saveModel = () => {
    setSavedModel(vis.toModel());
    setModelSaved(true);
    window.setTimeout(() => {
      setModelSaved(false);
    }, 2000);
  };

  const restoreLayout = () => {
    if (savedModel) {
      const currentModel = vis.toModel();
      currentModel.graph = {
        ...currentModel.graph,
        ..._.pick(savedModel.graph, GRAPH_LAYOUT_OPTIONS)
      };
      currentModel.nodes = currentModel.nodes.map(n => {
        const savedNode = savedModel.nodes.find(sn => sn.id === n.id);
        if (!savedNode) {
          return n;
        }
        return {
          ...n,
          ..._.pick(savedNode, NODE_LAYOUT_OPTIONS)
        };
      });
      vis.fromModel(currentModel, false);

      if (savedModel.graph.layout !== layout) {
        setLayout(savedModel.graph.layout);
      }
    }
  };

  const addNode = () => {
    const newNode = {
      id: `new-node-${newNodeCount.current++}`,
      type: 'node',
      width: 100,
      height: 100,
      data: {}
    };
    const currentModel = vis.toModel();
    currentModel.nodes.push(newNode);
    vis.fromModel(currentModel);
  };

  const removeSelectedNode = () => {
    const currentModel = vis.toModel();
    const selectedIndex = currentModel.nodes.findIndex(n => n.id === selectedIds[0]);
    currentModel.nodes = [
      ...currentModel.nodes.slice(0, selectedIndex),
      ...currentModel.nodes.slice(selectedIndex + 1)
    ];
    const effectedEdges = currentModel.edges.filter(e => e.source === selectedIds[0] || e.target === selectedIds[0]);
    effectedEdges.forEach(e => {
      const effectedIndex = currentModel.edges.findIndex(edge => edge.id === e.id);
      currentModel.edges = [
        ...currentModel.edges.slice(0, effectedIndex),
        ...currentModel.edges.slice(effectedIndex + 1)
      ];
    });
    currentModel.nodes
      .filter(n => n.group)
      .forEach(g => {
        const childIndex = g.children.findIndex(c => c === selectedIds[0]);
        if (childIndex) {
          g.children = [...g.children.slice(0, childIndex), ...g.children.slice(childIndex + 1)];
        }
      });

    vis.fromModel(currentModel);
    setSelectedIds([]);
  };

  const viewToolbar = (
    <>
      <ToolbarItem>{layoutDropdown}</ToolbarItem>
      <ToolbarItem>
        <Tooltip content="Layout info saved" trigger="manual" isVisible={modelSaved}>
          <Button variant="secondary" onClick={saveModel}>
            Save Layout Info
          </Button>
        </Tooltip>
      </ToolbarItem>
      <ToolbarItem>
        <Button variant="secondary" onClick={restoreLayout}>
          Restore Layout Info
        </Button>
      </ToolbarItem>
      <ToolbarItem>
        <Button variant="secondary" onClick={addNode}>
          Add Node
        </Button>
      </ToolbarItem>
      <ToolbarItem>
        <Button variant="secondary" onClick={removeSelectedNode} isDisabled={!selectedIds || selectedIds.length === 0}>
          Remove Node
        </Button>
      </ToolbarItem>
    </>
  );

  return (
    <TopologyView
      controlBar={
        <TopologyControlBar
          controlButtons={createTopologyControlButtons({
            ...defaultControlButtonsOptions,
            zoomInCallback: action(() => {
              vis.getGraph().scaleBy(4 / 3);
            }),
            zoomOutCallback: action(() => {
              vis.getGraph().scaleBy(0.75);
            }),
            fitToScreenCallback: action(() => {
              vis.getGraph().fit(80);
            }),
            resetViewCallback: action(() => {
              vis.getGraph().reset();
              vis.getGraph().layout();
            }),
            legend: false
          })}
        />
      }
      viewToolbar={viewToolbar}
      sideBar={useSidebar && topologySideBar}
      sideBarOpen={useSidebar && _.size(selectedIds) > 0}
    >
      <VisualizationSurface state={{ selectedIds }} />
    </TopologyView>
  );
};

export const Topology = () => {
  const vis: Visualization = getVisualization(getModel('Force'));

  return (
    <VisualizationProvider controller={vis}>
      <TopologyViewComponent useSidebar={false} vis={vis} />
    </VisualizationProvider>
  );
};

export const WithSideBar = () => {
  const vis: Visualization = getVisualization(getModel('Force'));
  return (
    <VisualizationProvider controller={vis}>
      <TopologyViewComponent useSidebar vis={vis} />
    </VisualizationProvider>
  );
};
