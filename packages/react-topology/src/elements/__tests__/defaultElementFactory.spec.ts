import defaultElementFactory from '../defaultElementFactory';
import { ModelKind } from '../../types';
import BaseGraph from '../BaseGraph';
import BaseNode from '../BaseNode';
import BaseEdge from '../BaseEdge';

describe('defaultElementFactory', () => {
  it('should create base elements', () => {
    expect(defaultElementFactory(ModelKind.graph, '') instanceof BaseGraph).toBe(true);
    expect(defaultElementFactory(ModelKind.node, '') instanceof BaseNode).toBe(true);
    expect(defaultElementFactory(ModelKind.edge, '') instanceof BaseEdge).toBe(true);
  });
});
