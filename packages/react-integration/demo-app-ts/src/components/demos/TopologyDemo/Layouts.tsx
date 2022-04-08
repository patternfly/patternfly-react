import * as React from 'react';
import {
  Model,
  ModelKind,
  withPanZoom,
  GraphComponent,
  withDragNode,
  useComponentFactory,
  useLayoutFactory,
  useModel,
  ComponentFactory
} from '@patternfly/react-topology';
import defaultLayoutFactory from './layouts/defaultLayoutFactory';
import defaultComponentFactory from './components/defaultComponentFactory';
import GroupHull from './components/GroupHull';
import Group from './components/DefaultGroup';
import DemoDefaultNode from './components/DemoDefaultNode';
import withTopologySetup from './utils/withTopologySetup';
import { generateDataModel } from './data/generator';
import stylesComponentFactory from './components/stylesComponentFactory';

const getModel = (layout: string): Model => {
  // create nodes from data
  const model = generateDataModel(200, 5, 20);
  model.graph = {
    id: 'g1',
    type: 'graph',
    layout
  };

  return model;
};

const layoutStory = (model: Model): React.FunctionComponent => () => {
  useLayoutFactory(defaultLayoutFactory);
  useComponentFactory(defaultComponentFactory);
  useComponentFactory(stylesComponentFactory);

  // support pan zoom and drag
  useComponentFactory(
    React.useCallback<ComponentFactory>((kind: string, type: string) => {
      if (kind === ModelKind.graph) {
        return withPanZoom()(GraphComponent);
      }
      if (type === 'group-hull') {
        return withDragNode()(GroupHull);
      }
      if (type === 'group') {
        return withDragNode()(Group);
      }
      if (kind === ModelKind.node) {
        return withDragNode()(DemoDefaultNode);
      }
      return undefined;
    }, [])
  );
  useModel(model);
  return null;
};

export const Force = withTopologySetup(layoutStory(getModel('Force')));
export const Dagre = withTopologySetup(layoutStory(getModel('Dagre')));
export const Cola = withTopologySetup(layoutStory(getModel('Cola')));
