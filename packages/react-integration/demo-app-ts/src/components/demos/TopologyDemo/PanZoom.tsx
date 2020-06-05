import * as React from 'react';
import { reaction } from 'mobx';
import {
  Model,
  ModelKind,
  withPanZoom,
  GraphComponent,
  useComponentFactory,
  useVisualizationController,
  useModel,
  ComponentFactory
} from '@patternfly/react-topology';
import defaultComponentFactory from './components/defaultComponentFactory';
import withTopologySetup from './utils/withTopologySetup';

const model: Model = {
  graph: {
    id: 'g1',
    type: 'graph'
  },
  nodes: [
    {
      id: 'gr1',
      type: 'group-hull',
      group: true,
      children: ['n1', 'n2'],
      style: {
        padding: 10
      }
    },
    {
      id: 'n1',
      type: 'node',
      x: 200,
      y: 200,
      width: 50,
      height: 50
    },
    {
      id: 'n2',
      type: 'node',
      x: 300,
      y: 300,
      width: 100,
      height: 100
    }
  ]
};

export const PanZoom: React.FC = withTopologySetup(() => {
  useComponentFactory(defaultComponentFactory);
  useComponentFactory(
    React.useCallback<ComponentFactory>(kind => {
      if (kind === ModelKind.graph) {
        return withPanZoom()(GraphComponent);
      }
      return undefined;
    }, [])
  );
  const controller = useVisualizationController();

  React.useEffect(() => {
    reaction(
      () => ({
        x: controller.getGraph().getBounds().x,
        y: controller.getGraph().getBounds().y,
        k: controller.getGraph().getScale()
      }),
      transform => {
        // eslint-disable-next-line no-console
        console.log(`Pan zoom event`, transform);
      }
    );
  }, [controller]);
  useModel(model);
  return null;
});
