import * as React from 'react';
import {
  useLayoutFactory,
  useComponentFactory,
  useModel,
  Model,
  DefaultNode,
  DEFAULT_LAYER,
  GraphComponent,
  ComponentFactory,
  ModelKind,
  Layer,
  GraphElement,
  Node
} from '@patternfly/react-topology';
import CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';

import withTopologySetup from '../../../utils/withTopologySetup';
import defaultComponentFactory from '../../../utils/defaultComponentFactory';
import defaultLayoutFactory from '../../../utils/defaultLayoutFactory';

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
      height: 100
    },
    {
      id: 'n2',
      type: 'node',
      width: 100,
      height: 100
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

const ICON_PADDING = 20;
const iconSize = 100 - ICON_PADDING * 2;

const CustomNode = ({ element }: { element: Node }) => (
  <Layer id={DEFAULT_LAYER}>
    <g>
      <DefaultNode element={element}>
        <g transform={`translate(${(100 - iconSize) / 2}, ${(100 - iconSize) / 2})`}>
          <CubeIcon style={{ color: '#393F44' }} width={iconSize} height={iconSize} />
        </g>
      </DefaultNode>
    </g>
  </Layer>
);

const stylesComponentFactory: ComponentFactory = (
  kind: ModelKind,
  type: string
): React.ComponentType<{ element: GraphElement }> | undefined => {
  if (kind === ModelKind.graph) {
    return GraphComponent;
  }
  switch (type) {
    case 'node':
      return CustomNode;
    default:
      return undefined;
  }
};

export const TopologyNodeSVGDemo: React.FunctionComponent = withTopologySetup(() => {
  useComponentFactory(defaultComponentFactory);
  useLayoutFactory(defaultLayoutFactory);
  useComponentFactory(stylesComponentFactory);
  useModel(React.useMemo((): Model => dataModel, []));
  return null;
});

TopologyNodeSVGDemo.displayName = 'TopologyNodeSVGDemo';
