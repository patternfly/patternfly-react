import * as React from 'react';
import { action } from 'mobx';
import * as _ from 'lodash';
import {
  createTopologyControlButtons,
  defaultControlButtonsOptions,
  EdgeModel,
  NodeModel,
  SELECTION_EVENT,
  SelectionEventListener,
  TopologyControlBar,
  TopologySideBar,
  TopologyView,
  useEventListener,
  useVisualizationController,
  Visualization,
  VisualizationProvider,
  VisualizationSurface
} from '@patternfly/react-topology';
import stylesComponentFactory from './components/stylesComponentFactory';
import defaultLayoutFactory from './layouts/defaultLayoutFactory';
import defaultComponentFactory from './components/defaultComponentFactory';
import { generateDataModel, generateEdge, generateNode } from './data/generator';
import { useTopologyOptions } from './useTopologyOptions';

interface TopologyViewComponentProps {
  useSidebar: boolean;
  sideBarResizable?: boolean;
}

const TopologyViewComponent: React.FunctionComponent<TopologyViewComponentProps> = ({
  useSidebar,
  sideBarResizable = false
}) => {
  const [selectedIds, setSelectedIds] = React.useState<string[]>([]);
  const controller = useVisualizationController();

  const {
    layout,
    nodeOptions,
    edgeOptions,
    nestedLevel,
    creationCounts,
    medScale,
    lowScale,
    contextToolbar,
    viewToolbar
  } = useTopologyOptions(controller);

  React.useEffect(() => {
    const dataModel = generateDataModel(
      creationCounts.numNodes,
      creationCounts.numGroups,
      creationCounts.numEdges,
      nestedLevel,
      nodeOptions,
      edgeOptions
    );

    const model = {
      graph: {
        id: 'g1',
        type: 'graph',
        layout
      },
      ...dataModel
    };

    controller.fromModel(model, false);
    // Don't update on option changes, its handled differently to not re-layout
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [creationCounts, layout]);

  useEventListener<SelectionEventListener>(SELECTION_EVENT, ids => {
    setSelectedIds(ids);
  });

  React.useEffect(() => {
    controller.getGraph().setDetailsLevelThresholds({
      low: lowScale,
      medium: medScale
    });
  }, [controller, lowScale, medScale]);

  const topologySideBar = (
    <TopologySideBar show={_.size(selectedIds) > 0} resizable={sideBarResizable} onClose={() => setSelectedIds([])}>
      <div style={{ marginTop: 27, marginLeft: 20, height: '800px' }}>{_.head(selectedIds)}</div>
    </TopologySideBar>
  );

  React.useEffect(() => {
    const currentModel = controller.toModel();
    const nodes = currentModel.nodes;
    if (nodes.length) {
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
    const edges = currentModel.edges;
    if (edges.length) {
      const updatedEdges: EdgeModel[] = edges.map((edge, index) => ({
        ...edge,
        ...generateEdge(index, edge.source, edge.target, edgeOptions)
      }));
      controller.fromModel({ edges: updatedEdges, nodes: currentModel.nodes });
    }
  }, [edgeOptions, controller]);

  return (
    <TopologyView
      controlBar={
        <TopologyControlBar
          controlButtons={createTopologyControlButtons({
            ...defaultControlButtonsOptions,
            zoomInCallback: action(() => {
              controller.getGraph().scaleBy(4 / 3);
            }),
            zoomOutCallback: action(() => {
              controller.getGraph().scaleBy(0.75);
            }),
            fitToScreenCallback: action(() => {
              controller.getGraph().fit(80);
            }),
            resetViewCallback: action(() => {
              controller.getGraph().reset();
              controller.getGraph().layout();
            }),
            legend: false
          })}
        />
      }
      contextToolbar={contextToolbar}
      viewToolbar={viewToolbar}
      sideBar={useSidebar && topologySideBar}
      sideBarOpen={useSidebar && _.size(selectedIds) > 0}
      sideBarResizable={sideBarResizable}
    >
      <VisualizationSurface state={{ selectedIds }} />
    </TopologyView>
  );
};

export const Topology = React.memo(() => {
  const controller = new Visualization();
  controller.registerLayoutFactory(defaultLayoutFactory);
  controller.registerComponentFactory(defaultComponentFactory);
  controller.registerComponentFactory(stylesComponentFactory);

  return (
    <VisualizationProvider controller={controller}>
      <TopologyViewComponent useSidebar={false} />
    </VisualizationProvider>
  );
});

export const WithSideBar = React.memo(() => {
  const controller = new Visualization();
  controller.registerLayoutFactory(defaultLayoutFactory);
  controller.registerComponentFactory(defaultComponentFactory);
  controller.registerComponentFactory(stylesComponentFactory);

  return (
    <VisualizationProvider controller={controller}>
      <TopologyViewComponent useSidebar />
    </VisualizationProvider>
  );
});

export const WithResizableSideBar = React.memo(() => {
  const controller = new Visualization();
  controller.registerLayoutFactory(defaultLayoutFactory);
  controller.registerComponentFactory(defaultComponentFactory);
  controller.registerComponentFactory(stylesComponentFactory);
  return (
    <VisualizationProvider controller={controller}>
      <TopologyViewComponent useSidebar sideBarResizable />
    </VisualizationProvider>
  );
});
