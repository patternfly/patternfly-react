import * as webcola from 'webcola';
import * as d3 from 'd3';
import { action } from 'mobx';
import { Edge, Graph, Layout, Node } from '../types';
import { getGroupPadding } from '../utils/element-utils';
import { BaseLayout } from './BaseLayout';
import { LayoutOptions } from './LayoutOptions';
import { LayoutLink } from './LayoutLink';
import { LayoutGroup } from './LayoutGroup';
import { LayoutNode } from './LayoutNode';
import { ColaNode } from './ColaNode';
import { ColaGroup } from './ColaGroup';
import { ColaLink } from './ColaLink';

export interface ColaLayoutOptions {
  maxTicks: number;
  initialUnconstrainedIterations: number;
  initialUserConstraintIterations: number;
  initialAllConstraintsIterations: number;
  gridSnapIterations: number;
}

const COLA_LAYOUT_DEFAULTS: ColaLayoutOptions = {
  maxTicks: 300,
  initialUnconstrainedIterations: 200,
  initialUserConstraintIterations: 50,
  initialAllConstraintsIterations: 150,
  gridSnapIterations: 50
};

class ColaLayout extends BaseLayout implements Layout {
  private d3Cola: any;

  private colaOptions: ColaLayoutOptions;

  private tickCount = 0;

  private destroyed = false;

  private simulationRunning = false;

  private simulationStopped = false;

  private restartOnEnd: boolean = undefined;

  constructor(graph: Graph, options?: Partial<ColaLayoutOptions & LayoutOptions>) {
    super(graph, options);
    this.colaOptions = {
      ...COLA_LAYOUT_DEFAULTS,
      ...options
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
      this.tickCount++;
      if (this.tickCount === 1 || this.tickCount % this.options.simulationSpeed === 0) {
        action(() => this.nodes.forEach(d => d.update()))();
      }
      if (this.colaOptions.maxTicks >= 0 && this.tickCount > this.colaOptions.maxTicks) {
        this.d3Cola.stop();
      }
    });
    this.d3Cola.on('end', () => {
      this.tickCount = 0;
      this.simulationRunning = false;
      action(() => {
        if (this.destroyed) {
          return;
        }
        this.nodes.forEach(d => {
          if (!this.simulationStopped) {
            d.update();
          }
          d.setFixed(false);
        });
        if (this.options.layoutOnDrag) {
          this.forceSimulation.useForceSimulation(this.nodes, this.edges, this.getFixedNodeDistance);
        }
        if (this.simulationStopped) {
          this.simulationStopped = false;
          if (this.restartOnEnd !== undefined) {
            this.startColaLayout(this.restartOnEnd);
            delete this.restartOnEnd;
          }
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

  protected stopSimulation(): void {
    if (this.simulationRunning) {
      this.simulationStopped = true;
      this.d3Cola.stop();
    }
    super.stopSimulation();
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

  protected setupLayout(graph: Graph, nodes: LayoutNode[], edges: LayoutLink[], groups: LayoutGroup[]): void {
    const { width, height } = graph.getBounds();
    this.d3Cola.size([width, height]);

    // Get any custom constraints
    this.d3Cola.constraints(this.getConstraints(nodes as ColaNode[], groups as ColaGroup[], edges));

    this.d3Cola.nodes(nodes);
    this.d3Cola.links(edges);
    this.d3Cola.groups(groups);
  }

  protected updateExistingNodes(existingNodes: LayoutNode[]) {
    existingNodes.forEach(n => {
      (n as ColaNode).fixed = 1;
    });
  }

  private startColaLayout(addingNodes: boolean): void {
    this.simulationRunning = true;
    this.d3Cola.alpha(0.2);
    this.tickCount = 0;
    this.d3Cola.start(
      addingNodes ? 0 : this.colaOptions.initialUnconstrainedIterations,
      addingNodes ? 0 : this.colaOptions.initialUserConstraintIterations,
      addingNodes ? 0 : this.colaOptions.initialAllConstraintsIterations,
      addingNodes ? 0 : this.colaOptions.gridSnapIterations,
      true,
      !addingNodes
    );
  }

  protected startLayout(graph: Graph, initialRun: boolean, addingNodes: boolean): void {
    if (!this.simulationStopped) {
      this.startColaLayout(addingNodes);
    } else {
      this.restartOnEnd = addingNodes;
    }
  }
}

export { ColaLayout, ColaNode, ColaGroup, ColaLink };
