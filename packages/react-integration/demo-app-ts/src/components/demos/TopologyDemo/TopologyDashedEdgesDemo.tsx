import React from 'react';
import {
  EdgeStyle,
  Model,
  TopologyView,
  useComponentFactory,
  useLayoutFactory,
  useVisualizationController,
  VisualizationProvider,
  VisualizationSurface
} from '@patternfly/react-topology';

import './TopologyDemo.css';

import stylesComponentFactory from './components/stylesComponentFactory';
import defaultLayoutFactory from './layouts/defaultLayoutFactory';
import defaultComponentFactory from './components/defaultComponentFactory';

const TopologyComponent = () => {
  const controller = useVisualizationController();

  useLayoutFactory(defaultLayoutFactory);
  useComponentFactory(defaultComponentFactory);
  useComponentFactory(stylesComponentFactory);

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
          height: 75
        },
        {
          id: 'node-1',
          label: 'Node 1',
          type: 'node',
          width: 75,
          height: 75
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

    controller.fromModel(model, false);
  }, [controller]);

  return (
    <TopologyView>
      <VisualizationSurface />
    </TopologyView>
  );
};

export const TopologyDashedEdgesDemo: React.FunctionComponent = React.memo(() => (
  <div className="pf-ri__topology-demo">
    <VisualizationProvider>
      <TopologyComponent />
    </VisualizationProvider>
  </div>
));

TopologyDashedEdgesDemo.displayName = 'TopologyDashedEdgesDemo';
