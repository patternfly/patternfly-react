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
      width: 100,
      height: 100,
      label: 'node 2',
      data: {
        badge: 'D',
        showContextMenu: false
      }
    },
    {
      id: 'n2',
      type: 'node',
      width: 100,
      height: 100,
      label: 'node 1',
      data: {
        badge: 'D',
        showContextMenu: false
      }
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
        showContextMenu: false,
        badge: 'NS'
      }
    }
  ],
  edges: [
    {
      id: 'e1',
      type: 'edge',
      source: 'n2',
      target: 'n1'
    }
  ]
};

export const TopologyLabelSVGDemo: React.FunctionComponent = withTopologySetup(() => {
  useComponentFactory(defaultComponentFactory);
  useLayoutFactory(defaultLayoutFactory);
  useComponentFactory(stylesComponentFactory);
  useModel(React.useMemo((): Model => dataModel, []));
  return null;
});

TopologyLabelSVGDemo.displayName = 'TopologyLabelSVGDemo';
