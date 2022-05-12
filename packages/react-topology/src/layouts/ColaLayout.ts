import * as webcola from 'webcola';
import * as d3 from 'd3';
import { action } from 'mobx';
import { Edge, Graph, Layout, Node } from '../types';
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
  maxTicks: 1000,
  initialUnconstrainedIterations: 200,
  initialUserConstraintIterations: 50,
  initialAllConstraintsIterations: 150,
  gridSnapIterations: 10
};

class ColaLayout extends BaseLayout implements Layout {
  protected d3Cola: any;

  protected colaOptions: ColaLayoutOptions;

  protected tickCount = 0;

  protected destroyed = false;

  protected simulationRunning = false;

  protected simulationStopped = false;

  protected restartOnEnd: boolean = undefined;

  protected addingNodes: boolean = false;

  protected onEnd: () => void;

  constructor(graph: Graph, options?: Partial<ColaLayoutOptions & LayoutOptions>) {
    super(graph, options);
    this.colaOptions = {
      ...COLA_LAYOUT_DEFAULTS,
      ...options
    };
    this.initializeLayout();
  }

  protected initializeLayout(): void {
    this.d3Cola = webcola.d3adaptor(d3);
    this.d3Cola.handleDisconnected(true);
    this.d3Cola.avoidOverlaps(true);

    this.d3Cola.on('tick', () => {
      this.tickCount++;
      if (this.tickCount >= 1 || this.tickCount % this.options.simulationSpeed === 0) {
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
          this.onEnd && this.onEnd();
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
            this.startColaLayout(false, this.restartOnEnd);
            delete this.restartOnEnd;
          }
        } else if (this.addingNodes) {
          // One round of simulation to adjust for new nodes
          this.forceSimulation.useForceSimulation(this.nodes, this.edges, this.getFixedNodeDistance);
          this.forceSimulation.restart();
        }
        this.onEnd && this.onEnd();
      })();
    });
  }

  protected onSimulationEnd = () => {
    if (this.addingNodes) {
      if (!this.options.layoutOnDrag) {
        this.forceSimulation.stopSimulation();
      }
      this.addingNodes = false;
    }
  };

  destroy(): void {
    super.destroy();

    this.destroyed = true;
    if (this.d3Cola) {
      this.d3Cola.stop();
    }
  }

  initDrag() {
    // Set the alpha to 0 to halt any ticks that may be occurring
    if (this.d3Cola) {
      this.d3Cola.alpha(0);
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected getConstraints(nodes: ColaNode[], groups: ColaGroup[], edges: ColaLink[]): any[] {
    return [];
  }

  protected stopSimulation(): void {
    if (this.simulationRunning) {
      this.simulationStopped = true;
      if (this.d3Cola) {
        this.d3Cola.stop();
      }
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

  protected getFauxEdges(): LayoutLink[] {
    return [];
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

  protected startColaLayout(initialRun: boolean, addingNodes: boolean): void {
    this.simulationRunning = true;
    this.d3Cola.alpha(0.2);
    this.tickCount = 0;
    this.addingNodes = addingNodes;

    this.d3Cola.start(
      addingNodes ? 0 : this.colaOptions.initialUnconstrainedIterations,
      addingNodes ? 0 : this.colaOptions.initialUserConstraintIterations,
      addingNodes ? 0 : this.colaOptions.initialAllConstraintsIterations,
      addingNodes ? 0 : this.colaOptions.gridSnapIterations,
      false,
      !addingNodes
    );
  }

  protected startLayout(graph: Graph, initialRun: boolean, addingNodes: boolean, onEnd?: () => void): void {
    this.onEnd = onEnd;
    if (!this.simulationStopped) {
      this.startColaLayout(initialRun, addingNodes);
    } else {
      this.restartOnEnd = addingNodes;
    }
  }
}

export { ColaLayout, ColaNode, ColaGroup, ColaLink };
