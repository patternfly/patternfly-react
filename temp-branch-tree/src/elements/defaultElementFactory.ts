import { ElementFactory, GraphElement, ModelKind } from '../types';
import BaseEdge from './BaseEdge';
import BaseGraph from './BaseGraph';
import BaseNode from './BaseNode';

const defaultElementFactory: ElementFactory = (kind: ModelKind): GraphElement | undefined => {
  switch (kind) {
    case ModelKind.graph:
      return new BaseGraph();
    case ModelKind.node:
      return new BaseNode();
    case ModelKind.edge:
      return new BaseEdge();
    default:
      return undefined;
  }
};

export default defaultElementFactory;
