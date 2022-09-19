import React, { useState } from 'react';
import {
  EdgeStyle,
  Model,
  SELECTION_EVENT,
  TopologySideBar,
  TopologyView,
  useVisualizationController,
  Visualization,
  VisualizationProvider,
  VisualizationSurface
} from '@patternfly/react-topology';

import './TopologyDemo.css';

import stylesComponentFactory from './components/stylesComponentFactory';
import defaultLayoutFactory from './layouts/defaultLayoutFactory';
import defaultComponentFactory from './components/defaultComponentFactory';

const TopologyComponent = () => {
  const [selectedId, setSelectedId] = useState(null);

  const controller = useVisualizationController();

  React.useEffect(() => {
    const model: Model = {
      graph: {
        id: 'g1',
        type: 'graph',
        layout: 'ColaNoForce'
      },
      nodes: [
        {
          id: 'node-0',
          label: 'Node 0',
          type: 'node',
          width: 75,
          height: 75,
          data: {
            id: 'node-0',
            label: 'Node 0',
            type: 'node',
            width: 75,
            height: 75
          }
        },
        {
          id: 'node-1',
          label: 'Node 1',
          type: 'node',
          width: 75,
          height: 75,
          data: {
            id: 'node-1',
            label: 'Node 1',
            type: 'node',
            width: 75,
            height: 75
          }
        }
      ],
      edges: [
        {
          id: 'edge-0-1',
          type: 'edge',
          source: 'node-0',
          target: 'node-1',
          edgeStyle: EdgeStyle.dashed
        },
        {
          id: 'edge-1-0',
          type: 'edge',
          source: 'node-1',
          target: 'node-0',
          edgeStyle: EdgeStyle.dashed
        }
      ]
    };

    function onSelect(ids: string[]) {
      const newSelectedId = ids?.[0] || null;
      setSelectedId(newSelectedId);
    }

    controller.fromModel(model, false);
    controller.addEventListener(SELECTION_EVENT, onSelect);

    return () => {
      controller.removeEventListener(SELECTION_EVENT, onSelect);
    };
  }, [controller]);

  return (
    <TopologyView
      sideBar={
        <TopologySideBar show={!!selectedId} resizable onClose={() => setSelectedId(null)}>
          <div style={{ height: '100%' }}>{selectedId}</div>
        </TopologySideBar>
      }
      sideBarOpen={!!selectedId}
      sideBarResizable
    >
      <VisualizationSurface />
    </TopologyView>
  );
};

export const TopologyDashedEdgesDemo: React.FunctionComponent = React.memo(() => {
  const controller = new Visualization();
  controller.registerLayoutFactory(defaultLayoutFactory);
  controller.registerComponentFactory(defaultComponentFactory);
  controller.registerComponentFactory(stylesComponentFactory);

  return (
    <div className="pf-ri__topology-demo">
      <VisualizationProvider controller={controller}>
        <TopologyComponent />
      </VisualizationProvider>
    </div>
  );
});

TopologyDashedEdgesDemo.displayName = 'TopologyDashedEdgesDemo';
