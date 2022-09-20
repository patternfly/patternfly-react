import React from 'react';
import {
  EdgeStyle,
  Model,
  TopologyView,
  useVisualizationController,
  VisualizationProvider,
  VisualizationSurface,
  ComponentFactory,
  useComponentFactory,
  useLayoutFactory,
  DefaultNode,
  DefaultEdge,
  ModelKind
} from '@patternfly/react-topology';

import defaultLayoutFactory from './layouts/defaultLayoutFactory';
import defaultComponentFactory from './components/defaultComponentFactory';

import './TopologyDemo.css';

const TopologyComponent = () => {
  useLayoutFactory(defaultLayoutFactory);
  useComponentFactory(defaultComponentFactory);
  useComponentFactory(
    React.useCallback<ComponentFactory>((kind, type) => {
      if (type === ModelKind.node) {
        return DefaultNode;
      }
      if (type === ModelKind.edge) {
        return DefaultEdge;
      }
      return undefined;
    }, [])
  );

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
