import * as React from 'react';
import { observer } from 'mobx-react';
import {
  Model,
  Node,
  AnchorEnd,
  NodeShape,
  useSvgAnchor,
  withDragNode,
  WithDragNodeProps,
  useModel,
  useLayoutFactory,
  useComponentFactory,
  ComponentFactory
} from '@patternfly/react-topology';
import defaultComponentFactory from './components/defaultComponentFactory';
import DefaultGroup from './components/DefaultGroup';
import DefaultNode from './components/DefaultNode';
import defaultLayoutFactory from './layouts/defaultLayoutFactory';
import withTopologySetup from './utils/withTopologySetup';

const GroupWithDecorator: React.FC<{ element: Node } & WithDragNodeProps> = observer(props => {
  const trafficSourceRef = useSvgAnchor(AnchorEnd.source, 'traffic');
  const b = props.element.getBounds();
  return (
    <DefaultGroup {...(props as any)}>
      <circle
        ref={trafficSourceRef}
        cx={b.x + b.width}
        cy={b.y}
        r="12.5"
        fill="lightblue"
        strokeWidth={1}
        stroke="#333333"
      />
    </DefaultGroup>
  );
});

export const ComplexGroup = withTopologySetup(() => {
  useLayoutFactory(defaultLayoutFactory);
  useComponentFactory(defaultComponentFactory);
  useComponentFactory(
    React.useCallback<ComponentFactory>((kind, type) => {
      if (type === 'service') {
        return withDragNode()(GroupWithDecorator);
      }
      if (type === 'node') {
        return withDragNode()(DefaultNode);
      }
      return undefined;
    }, [])
  );

  useModel(
    React.useMemo(
      (): Model => ({
        graph: {
          id: 'g1',
          type: 'graph',
          layout: 'Force'
        },
        nodes: [
          {
            id: 'gr1',
            type: 'group-hull',
            group: true,
            children: ['n1', 'n2', 's1'],
            style: {
              padding: 50
            }
          },

          {
            id: 's1',
            type: 'service',
            group: true,
            children: ['r1', 'r2'],
            shape: NodeShape.rect,
            style: {
              padding: 25
            }
          },
          {
            id: 's2',
            type: 'service',
            group: true,
            shape: NodeShape.rect,
            width: 100,
            height: 100,
            style: {
              padding: 25
            }
          },
          {
            id: 'n1',
            type: 'node',
            x: 100,
            y: 150,
            width: 100,
            height: 100
          },
          {
            id: 'n2',
            type: 'node',
            x: 450,
            y: 100,
            width: 100,
            height: 100
          },
          {
            id: 'r1',
            type: 'node',
            x: 250,
            y: 300,
            width: 100,
            height: 100
          },
          {
            id: 'r2',
            type: 'node',
            x: 370,
            y: 320,
            width: 100,
            height: 100
          }
        ],
        edges: [
          {
            id: 't1',
            type: 'traffic',
            source: 's1',
            target: 'r1'
          },
          {
            id: 't2',
            type: 'traffic',
            source: 's1',
            target: 'r2'
          }
        ]
      }),
      []
    )
  );
  return null;
});
