import React from 'react';
import {
  createTopologyControlButtons,
  defaultControlButtonsOptions,
  TopologyControlBar,
  TopologyView,
  Visualization,
  VisualizationProvider,
  VisualizationSurface
} from '@patternfly/react-topology';

import defaultComponentFactory from '../../../utils/defaultComponentFactory';
import defaultLayoutFactory from '../../../utils/defaultLayoutFactory';

export const TopologyControlBarDemo: React.FunctionComponent = React.memo(() => {
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
      <TopologyView
        controlBar={
          <TopologyControlBar
            controlButtons={createTopologyControlButtons({
              ...defaultControlButtonsOptions,
              zoomInCallback: () => {
                controller.getGraph().scaleBy(4 / 3);
              },
              zoomOutCallback: () => {
                controller.getGraph().scaleBy(0.75);
              },
              fitToScreenCallback: () => {
                controller.getGraph().fit(80);
              },
              resetViewCallback: () => {
                controller.getGraph().reset();
                controller.getGraph().layout();
              },
              legendCallback: () => {
                // console.log('hi');
              }
            })}
          />
        }
      >
        <VisualizationSurface />
      </TopologyView>
    </VisualizationProvider>
  );
});

TopologyControlBarDemo.displayName = 'TopologyControlBarDemo';
