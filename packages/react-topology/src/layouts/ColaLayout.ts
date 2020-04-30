import * as webcola from 'webcola';
import * as d3 from 'd3';
import { action } from 'mobx';
import { Edge, Graph, Layout, Node } from '../types';
import { getGroupPadding } from '../utils/element-utils';
import { BaseLayout, LayoutGroup, LayoutLink, LayoutNode, LayoutOptions } from './BaseLayout';

class ColaNode extends LayoutNode implements webcola.Node {
  // fixed is used by Cola during node additions: 1 for fixed
  public fixed: number = 0;

  constructor(node: Node, distance: number, index: number = -1) {
    super(node, distance, index);

    // TODO: Investigate why the issue with rectangular nodes causing the layout to become vertical
    //       this setting will be a problem if nodes can change size dynamically
    // Cola layout has issues with non-square nodes
    const maxDimension = Math.max(this.nodeWidth, this.nodeHeight);
    this.nodeWidth = maxDimension;
    this.nodeHeight = maxDimension;
  }
}

class ColaGroup extends LayoutGroup implements webcola.Group {}

class ColaLink extends LayoutLink implements webcola.Link<ColaNode | number> {
  constructor(edge: Edge, source: LayoutNode | number, target: LayoutNode | number) {
    super(edge, source as LayoutNode, target as LayoutNode);
  }
}

type ColaLayoutOptions = {
  maxTicks: number;
  initialUnconstrainedIterations: number;
  initialUserConstraintIterations: number;
  initialAllConstraintsIterations: number;
  gridSnapIterations: number;
};

const COLA_LAYOUT_DEFAULTS: ColaLayoutOptions = {
  maxTicks: 300,
  initialUnconstrainedIterations: 200,
  initialUserConstraintIterations: 50,
  initialAllConstraintsIterations: 150,
  gridSnapIterations: 50,
};

class ColaLayout extends BaseLayout implements Layout {
  private d3Cola: any;

  private colaOptions: ColaLayoutOptions;

  private tickCount = 0;

  private destroyed = false;

  constructor(graph: Graph, options?: Partial<ColaLayoutOptions & LayoutOptions>) {
    super(graph, options);
    this.colaOptions = {
      ...COLA_LAYOUT_DEFAULTS,
      ...options,
    };
    this.initializeLayout();
  }

  protected getLinkDistance = (link: ColaLink): number => {
    let distance = this.options.linkDistance + link.source.radius + link.target.radius;
    if (link.source.element.getParent() !== link.target.element.getParent()) {
      distance += getGroupPadding(link.source.element.getParent());
      distance += getGroupPadding(link.target.element.getParent());
    }

    return distance;
  };

  protected initializeLayout(): void {
    this.d3Cola = webcola.d3adaptor(d3);
    this.d3Cola.handleDisconnected(true);
    this.d3Cola.avoidOverlaps(true);
    this.d3Cola.linkDistance(this.getLinkDistance);
    this.d3Cola.on('tick', () => {
      if (this.tickCount++ % this.options.simulationSpeed === 0) {
        action(() => this.nodes.forEach((d) => d.update()))();
      }
      if (this.colaOptions.maxTicks >= 0 && this.tickCount > this.colaOptions.maxTicks) {
        this.d3Cola.stop();
      }
    });
    this.d3Cola.on('end', () => {
      action(() => {
        if (this.destroyed) {
          return;
        }
        this.nodes.forEach((d) => {
          d.update();
          (d as ColaNode).fixed = 0;
        });
        if (this.options.layoutOnDrag) {
          this.forceSimulation.useForceSimulation(
            this.nodes,
            this.edges,
            this.getFixedNodeDistance,
          );
        }
      })();
    });
  }

  destroy(): void {
    super.destroy();

    this.destroyed = true;
    this.d3Cola.stop();
  }

  initDrag() {
    // Set the alpha to 0 to halt any ticks that may be occurring
    this.d3Cola.alpha(0);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected getConstraints(nodes: ColaNode[], groups: ColaGroup[], edges: ColaLink[]): any[] {
    return [];
  }

  protected createLayoutNode(node: Node, nodeDistance: number, index: number) {
    return new ColaNode(node, nodeDistance, index);
  }

  protected createLayoutLink(edge: Edge, source: LayoutNode, target: LayoutNode): LayoutLink {
    return new ColaLink(edge, source, target);
  }

  protected createLayoutGroup(node: Node, padding: number, index: number) {
    return new ColaGroup(node, padding, index);
  }

  protected setupLayout(
    graph: Graph,
    nodes: LayoutNode[],
    edges: LayoutLink[],
    groups: LayoutGroup[],
  ): void {
    const { width, height } = graph.getBounds();
    this.d3Cola.size([width, height]);

    // Get any custom constraints
    this.d3Cola.constraints(this.getConstraints(nodes as ColaNode[], groups as ColaGroup[], edges));

    this.d3Cola.nodes(nodes);
    this.d3Cola.links(edges);
    this.d3Cola.groups(groups);
  }

  protected updateExistingNodes(existingNodes: LayoutNode[]) {
    existingNodes.forEach((n) => {
      (n as ColaNode).fixed = 1;
    });
  }

  protected startLayout(graph: Graph, initialRun: boolean, addingNodes: boolean): void {
    // start the layout
    this.d3Cola.alpha(0.2);
    this.d3Cola.start(
      addingNodes ? 0 : this.colaOptions.initialUnconstrainedIterations,
      addingNodes ? 0 : this.colaOptions.initialUserConstraintIterations,
      addingNodes ? 0 : this.colaOptions.initialAllConstraintsIterations,
      addingNodes ? 0 : this.colaOptions.gridSnapIterations,
      true,
      !addingNodes,
    );
  }
}

export { ColaLayout, ColaNode, ColaGroup, ColaLink, ColaLayoutOptions };
