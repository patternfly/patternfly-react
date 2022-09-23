import * as React from 'react';
import { useLayoutFactory, useComponentFactory, useModel, Model } from '@patternfly/react-topology';

import withTopologySetup from '../../../utils/withTopologySetup';
import defaultComponentFactory from '../../../utils/defaultComponentFactory';
import defaultLayoutFactory from '../../../utils/defaultLayoutFactory';
import stylesComponentFactory from '../../../utils/stylesComponentFactory';

const dataModel = {
  graph: {
    id: 'g1',
    type: 'graph',
    layout: 'ColaNoForce'
  },
  nodes: [
    {
      id: 'n1',
      type: 'node',
      width: 75,
      height: 75
    },
    {
      id: 'n2',
      type: 'node',
      width: 75,
      height: 75
    },
    {
      id: 'n3',
      type: 'node',
      width: 75,
      height: 75
    },
    {
      id: 'n4',
      type: 'node',
      width: 75,
      height: 75
    },
    {
      id: 'Group 1',
      type: 'group',
      children: ['n1', 'n2'],
      group: true,
      label: 'Group 1',
      style: { padding: 15 },
      data: {
        collapsible: false,
        showContextMenu: false
      }
    },
    {
      id: 'Group 2',
      type: 'group',
      children: ['n3', 'n4'],
      group: true,
      label: 'Group 2',
      style: { padding: 15 },
      data: {
        collapsible: true,
        showContextMenu: false
      }
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
};

export const TopologyNodeGroupDemo: React.FunctionComponent = withTopologySetup(() => {
  useComponentFactory(defaultComponentFactory);
  useLayoutFactory(defaultLayoutFactory);
  useComponentFactory(stylesComponentFactory);
  useModel(React.useMemo((): Model => dataModel, []));
  return null;
});

TopologyNodeGroupDemo.displayName = 'TopologyNodeGroupDemo';
