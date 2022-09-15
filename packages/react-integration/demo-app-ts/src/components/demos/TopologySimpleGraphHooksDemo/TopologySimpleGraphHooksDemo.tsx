import React from 'react';
import { useModel, useComponentFactory, Model, useLayoutFactory } from '@patternfly/react-topology';

import withTopologySetup from '../../../utils/withTopologySetup';
import defaultComponentFactory from '../../../utils/defaultComponentFactory';
import defaultLayoutFactory from '../../../utils/defaultLayoutFactory';

export const TopologySimpleGraphHooksDemo: React.FunctionComponent = withTopologySetup(() => {
  useComponentFactory(defaultComponentFactory);
  useLayoutFactory(defaultLayoutFactory);
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
            width: 20,
            height: 20
          },
          {
            id: 'n2',
            type: 'node',
            label: 'test',
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
      }),
      []
    )
  );
  return null;
});

TopologySimpleGraphHooksDemo.displayName = 'TopologySimpleGraphHooksDemo';
