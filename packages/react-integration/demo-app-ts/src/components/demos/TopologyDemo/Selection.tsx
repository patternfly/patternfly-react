import * as React from 'react';
import {
  Model,
  ModelKind,
  NodeModel,
  withSelection,
  SELECTION_EVENT,
  SelectionEventListener,
  useComponentFactory,
  ComponentFactory,
  useModel,
  useEventListener,
  useVisualizationState,
  SELECTION_STATE
} from '@patternfly/react-topology';
import defaultComponentFactory from './components/defaultComponentFactory';
import withTopologySetup from './utils/withTopologySetup';

const twoNodeModel: Model = {
  graph: {
    id: 'g1',
    type: 'graph'
  },
  nodes: [
    {
      id: 'gr1',
      type: 'group',
      group: true,
      children: ['n1', 'n2'],
      style: {
        padding: 10
      }
    },
    {
      id: 'n1',
      type: 'node',
      x: 30,
      y: 30,
      width: 20,
      height: 20
    },
    {
      id: 'n2',
      type: 'node',
      x: 100,
      y: 30,
      width: 20,
      height: 20
    }
  ]
};

export const UncontrolledSelection: React.FC = withTopologySetup(() => {
  useComponentFactory(
    React.useCallback<ComponentFactory>((kind, type) => {
      const widget = defaultComponentFactory(kind, type);
      if (kind === ModelKind.node || kind === ModelKind.graph) {
        // TODO fix any type
        return withSelection({ multiSelect: false, controlled: false })(widget as any);
      }
      return widget;
    }, [])
  );
  useEventListener(
    SELECTION_EVENT,
    React.useCallback<SelectionEventListener>(([id]) => {
      // eslint-disable-next-line no-console
      console.log(`Selection event`, id);
    }, [])
  );
  useModel(twoNodeModel);
  return null;
});

export const ControlledSelection = withTopologySetup(() => {
  const [, setSelectedIds] = useVisualizationState(SELECTION_STATE);
  useComponentFactory(
    React.useCallback<ComponentFactory>((kind, type) => {
      const widget = defaultComponentFactory(kind, type);
      if (kind === ModelKind.node || kind === ModelKind.graph) {
        // TODO fix any type
        return withSelection({ multiSelect: false, controlled: true })(widget as any);
      }
      return widget;
    }, [])
  );
  useEventListener(
    SELECTION_EVENT,
    React.useCallback<SelectionEventListener>(
      ids => {
        // eslint-disable-next-line no-console
        console.log(`Selection event`, ids);
        setSelectedIds(ids);
      },
      [setSelectedIds]
    )
  );
  useModel(twoNodeModel);
  return null;
});

export const MultiSelect: React.FC = withTopologySetup(() => {
  useModel(twoNodeModel);
  useComponentFactory(
    React.useCallback<ComponentFactory>((kind, type) => {
      const widget = defaultComponentFactory(kind, type);
      if (kind === ModelKind.node || kind === ModelKind.graph) {
        // TODO fix any type
        return withSelection({ multiSelect: true, controlled: false })(widget as any);
      }
      return widget;
    }, [])
  );
  useEventListener(
    SELECTION_EVENT,
    React.useCallback<SelectionEventListener>(ids => {
      // eslint-disable-next-line no-console
      console.log(`Selection event`, ids);
    }, [])
  );
  return null;
});

const perfModel: Model = {
  graph: {
    id: 'g1',
    type: 'graph'
  },
  nodes: []
};
for (let i = 1; i <= 100; i++) {
  for (let j = 1; j <= 100; j++) {
    const node: NodeModel = {
      id: `${i}-${j}`,
      type: 'node',
      x: j * 20,
      y: i * 20,
      width: 10,
      height: 10
    };
    perfModel.nodes.push(node);
  }
}

export const Performance: React.FC = withTopologySetup(() => {
  useModel(perfModel);
  useComponentFactory(
    React.useCallback<ComponentFactory>((kind, type) => {
      const widget = defaultComponentFactory(kind, type);
      if (kind === ModelKind.node || kind === ModelKind.graph) {
        // TODO fix any type
        return withSelection({ multiSelect: true, controlled: false })(widget as any);
      }
      return widget;
    }, [])
  );
  return null;
});
