import React from 'react';
import { Visualization, VisualizationProvider, VisualizationSurface } from '@patternfly/react-topology';

import defaultLayoutFactory from '../../../utils/defaultLayoutFactory';
import defaultComponentFactory from '../../../utils/defaultComponentFactory';

export const TopologySimpleGraphClassDemo: React.FunctionComponent = React.memo(() => {
  const controller = new Visualization();
  controller.registerLayoutFactory(defaultLayoutFactory);
  controller.registerComponentFactory(defaultComponentFactory);
  controller.fromModel({
    graph: {
      id: 'g1',
      type: 'graph',
      layout: 'Cola'
    },
    nodes: [
      {
        id: 'n1',
        type: 'node',
        width: 20,
        height: 20
      },
      {
        id: 'n2',
        type: 'node',
        width: 20,
        height: 20
      },
      {
        id: 'n3',
        type: 'node',
        width: 20,
        height: 20
      }
    ],
    edges: [
      {
        id: 'e1',
        type: 'edge',
        source: 'n1',
        target: 'n3'
      },
      {
        id: 'e2',
        type: 'edge',
        source: 'n2',
        target: 'n1'
      }
    ]
  });

  return (
    <VisualizationProvider controller={controller}>
      <VisualizationSurface />
    </VisualizationProvider>
  );
});

TopologySimpleGraphClassDemo.displayName = 'TopologySimpleGraphClassDemo';
