import { Graph, Layout } from '../types';
import { getGroupPadding } from '../utils/element-utils';
import { BaseLayout, LayoutLink, LayoutOptions } from './BaseLayout';

export default class ForceLayout extends BaseLayout implements Layout {
  constructor(graph: Graph, options?: Partial<LayoutOptions>) {
    super(graph, {
      ...options,
      layoutOnDrag: true,
    });
  }

  protected getLinkDistance = (e: LayoutLink) => {
    let distance = this.options.linkDistance + e.source.radius + e.target.radius;
    if (!e.isFalse && e.source.element.getParent() !== e.target.element.getParent()) {
      // find the group padding
      distance += getGroupPadding(e.source.element.getParent());
      distance += getGroupPadding(e.target.element.getParent());
    }

    return distance;
  };

  protected startLayout(graph: Graph): void {
    const { width, height } = graph.getBounds();
    const cx = width / 2;
    const cy = height / 2;
    this.forceSimulation.forceCenter(cx, cy);
    this.forceSimulation.alpha(1);
    this.forceSimulation.useForceSimulation(this.nodes, this.edges, this.getLinkDistance);
    this.forceSimulation.restart();
  }

  protected updateLayout(): void {
    this.forceSimulation.useForceSimulation(this.nodes, this.edges, this.getFixedNodeDistance);
    this.forceSimulation.alpha(0.2);
    this.forceSimulation.restart();
  }
}
