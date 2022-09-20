import React from 'react';
import {
  EdgeStyle,
  Model,
  TopologyView,
  VisualizationProvider,
  VisualizationSurface,
  useComponentFactory,
  useLayoutFactory,
  EdgeTerminalType,
  NodeShape,
  NodeStatus,
  useModel
} from '@patternfly/react-topology';

import defaultLayoutFactory from './layouts/defaultLayoutFactory';
import defaultComponentFactory from './components/defaultComponentFactory';
import stylesComponentFactory from '../../../utils/stylesComponentFactory';

import './TopologyDemo.css';

const model: Model = {
  graph: {
    id: 'g1',
    type: 'graph'
  },
  nodes: [
    {
      data: {
        column: 1,
        dataType: 'Default',
        id: 'default-1',
        label: 'Node 1',
        row: 1,
        shape: 'ellipse'
      },
      height: 75,
      width: 75,
      id: 'default-1',
      label: 'Node 1',
      labelPosition: undefined,
      shape: NodeShape.ellipse,
      status: NodeStatus.default,
      type: 'node',
      x: 60,
      y: 20
    },
    {
      data: {
        column: 4,
        dataType: 'Default',
        id: 'default-2',
        label: 'Node 2',
        row: 1,
        shape: 'ellipse'
      },
      height: 75,
      width: 75,
      id: 'default-2',
      label: 'Node 2',
      labelPosition: undefined,
      shape: NodeShape.ellipse,
      status: NodeStatus.default,
      type: 'node',
      x: 360,
      y: 20
    }
  ],
  edges: [
    {
      id: 'edge-default-1-default-2',
      type: 'edge',
      source: 'default-1',
      target: 'default-2',
      edgeStyle: EdgeStyle.default,
      data: {
        endTerminalType: EdgeTerminalType.directional,
        tag: 'UDP: 43',
        tagStatus: 'default'
      }
    }
  ]
};
const TopologyComponent = () => {
  useLayoutFactory(defaultLayoutFactory);
  useComponentFactory(defaultComponentFactory);
  useComponentFactory(stylesComponentFactory);

  useModel(model);

  return (
    <TopologyView>
      <VisualizationSurface />
    </TopologyView>
  );
};

export const TopologyEdgeTerminalDemo: React.FunctionComponent = React.memo(() => (
  <div className="pf-ri__topology-demo">
    <VisualizationProvider>
      <TopologyComponent />
    </VisualizationProvider>
  </div>
));

TopologyEdgeTerminalDemo.displayName = 'TopologyEdgeTerminalDemo';
