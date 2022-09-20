import React from 'react';
import { useModel, useComponentFactory, Model, useLayoutFactory, NodeShape } from '@patternfly/react-topology';

import withTopologySetup from '../../../utils/withTopologySetup';
import defaultComponentFactory from '../../../utils/defaultComponentFactory';
import defaultLayoutFactory from '../../../utils/defaultLayoutFactory';
import stylesComponentFactory from '../../../utils/stylesComponentFactory';

export const TopologyNodeShapesDemo: React.FunctionComponent = withTopologySetup(() => {
  useComponentFactory(defaultComponentFactory);
  useLayoutFactory(defaultLayoutFactory);
  useComponentFactory(stylesComponentFactory);
  useModel(
    React.useMemo(
      (): Model => ({
        graph: {
          id: 'g1',
          type: 'graph',
          layout: 'Cola'
        },
        nodes: [
          {
            id: 'n1',
            type: 'node',
            shape: NodeShape.rect,
            width: 100,
            height: 100
          },
          {
            id: 'n2',
            type: 'node',
            shape: NodeShape.octagon,
            width: 100,
            height: 100
          },
          {
            id: 'n3',
            type: 'node',
            shape: NodeShape.ellipse,
            width: 120,
            height: 100
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
      }),
      []
    )
  );
  return null;
});

TopologyNodeShapesDemo.displayName = 'TopologyNodeShapesDemo';
