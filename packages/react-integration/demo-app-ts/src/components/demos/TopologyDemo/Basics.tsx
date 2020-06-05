import * as React from 'react';
import {
  action,
  observer,
  Model,
  ModelKind,
  withDragNode,
  useComponentFactory,
  useModel,
  useAnchor,
  RectAnchor,
  EllipseAnchor,
  Node,
  ComponentFactory
} from '@patternfly/react-topology';
import defaultComponentFactory from './components/defaultComponentFactory';
import DefaultNode from './components/DefaultNode';
import withTopologySetup from './utils/withTopologySetup';
import Dimensions from '@patternfly/react-topology/dist/js/geom/Dimensions';

export const SingleNode = withTopologySetup(() => {
  useComponentFactory(defaultComponentFactory);
  useModel(
    React.useMemo(
      (): Model => ({
        graph: {
          id: 'g1',
          type: 'graph'
        },
        nodes: [
          {
            id: 'n1',
            type: 'node',
            x: 50,
            y: 50,
            width: 20,
            height: 20
          }
        ]
      }),
      []
    )
  );
  return null;
});

export const SingleEdge = withTopologySetup(() => {
  useComponentFactory(defaultComponentFactory);
  useModel(
    React.useMemo(
      (): Model => ({
        graph: {
          id: 'g1',
          type: 'graph'
        },
        nodes: [
          {
            id: 'n1',
            type: 'node',
            x: 20,
            y: 20,
            width: 20,
            height: 20
          },
          {
            id: 'n2',
            type: 'node',
            x: 200,
            y: 50,
            width: 100,
            height: 30
          }
        ],
        edges: [
          {
            id: 'e1',
            type: 'edge',
            source: 'n1',
            target: 'n2',
            bendpoints: [[80, 30], [110, 10]]
          }
        ]
      }),
      []
    )
  );
  return null;
});

export const MultiEdge = withTopologySetup(() => {
  useComponentFactory(defaultComponentFactory);
  useComponentFactory(
    React.useCallback<ComponentFactory>(kind => {
      if (kind === ModelKind.node) {
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
          type: 'graph'
        },
        nodes: [
          {
            id: 'n1',
            type: 'node',
            x: 50,
            y: 50,
            width: 100,
            height: 100
          },
          {
            id: 'n2',
            type: 'node',
            x: 400,
            y: 50,
            width: 100,
            height: 100
          },
          {
            id: 'n3',
            type: 'node',
            x: 50,
            y: 200,
            width: 100,
            height: 100
          },
          {
            id: 'n4',
            type: 'node',
            x: 400,
            y: 200,
            width: 100,
            height: 100
          }
        ],
        edges: [
          {
            id: 'e1',
            type: 'multi-edge',
            source: 'n1',
            target: 'n2'
          },
          {
            id: 'e2',
            type: 'multi-edge',
            source: 'n1',
            target: 'n2'
          },
          {
            id: 'e3',
            type: 'multi-edge',
            source: 'n3',
            target: 'n4'
          },
          {
            id: 'e4',
            type: 'multi-edge',
            source: 'n3',
            target: 'n4'
          },
          {
            id: 'e5',
            type: 'multi-edge',
            source: 'n3',
            target: 'n4'
          },
          {
            id: 'e6',
            type: 'multi-edge',
            source: 'n3',
            target: 'n4'
          },
          {
            id: 'e7',
            type: 'multi-edge',
            source: 'n3',
            target: 'n4'
          }
        ]
      }),
      []
    )
  );
  return null;
});

const groupStory = (groupType: string): React.FC => () => {
  useComponentFactory(defaultComponentFactory);
  useModel(
    React.useMemo(
      (): Model => ({
        graph: {
          id: 'g1',
          type: 'graph'
        },
        nodes: [
          {
            id: 'gr1',
            type: groupType,
            group: true,
            children: ['n1', 'n2', 'n3'],
            style: {
              padding: 10
            }
          },
          {
            id: 'n1',
            type: 'node',
            x: 50,
            y: 50,
            width: 30,
            height: 30
          },
          {
            id: 'n2',
            type: 'node',
            x: 200,
            y: 20,
            width: 10,
            height: 10
          },
          {
            id: 'n3',
            type: 'node',
            x: 150,
            y: 100,
            width: 20,
            height: 20
          }
        ]
      }),
      []
    )
  );
  return null;
};

export const Group = withTopologySetup(groupStory('group'));
export const GroupHull = withTopologySetup(groupStory('group-hull'));

const CustomCircle: React.FC<{ element: Node }> = observer(({ element }) => {
  useAnchor(EllipseAnchor);
  React.useEffect(() => {
    // init height
    action(() => element.setDimensions(new Dimensions(40, 40)))();
  }, [element]);
  const r = element.getDimensions().width / 2;
  return (
    <circle
      cx={r}
      cy={r}
      r={r}
      fill="grey"
      strokeWidth={1}
      stroke="#333333"
      onClick={() => {
        const size = element.getDimensions().width === 40 ? 80 : 40;
        action(() => element.setDimensions(new Dimensions(size, size)))();
      }}
    />
  );
});

const CustomRect: React.FC = observer(() => {
  useAnchor(RectAnchor);
  return <rect x={0} y={0} width={100} height={20} fill="grey" strokeWidth={1} stroke="#333333" />;
});

export const AutoSizeNode = withTopologySetup(() => {
  useComponentFactory(defaultComponentFactory);
  useComponentFactory(
    React.useCallback<ComponentFactory>((kind, type) => {
      if (type === 'autoSize-circle') {
        return CustomCircle;
      }
      if (type === 'autoSize-rect') {
        return CustomRect;
      }
      return undefined;
    }, [])
  );
  useModel(
    React.useMemo(
      (): Model => ({
        graph: {
          id: 'g1',
          type: 'graph'
        },
        nodes: [
          {
            id: 'n1',
            type: 'autoSize-rect',
            x: 50,
            y: 50
          },

          {
            id: 'n2',
            type: 'autoSize-circle',
            x: 250,
            y: 200
          },

          {
            id: 'n3',
            type: 'autoSize-rect',
            x: 300,
            y: 70
          },
          {
            id: 'gr1',
            type: 'group',
            group: true,
            children: ['n1', 'n3'],
            style: {
              padding: 10
            }
          }
        ],
        edges: [
          {
            id: 'e1',
            type: 'edge',
            source: 'n1',
            target: 'n2'
          },
          {
            id: 'e2',
            type: 'edge',
            source: 'gr1',
            target: 'n2'
          }
        ]
      }),
      []
    )
  );
  return null;
});
