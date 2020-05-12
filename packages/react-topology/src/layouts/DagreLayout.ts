import * as dagre from 'dagre';
import * as _ from 'lodash';
import { Edge, Graph, Layout, Node } from '../types';
import { BaseLayout, LAYOUT_DEFAULTS } from './BaseLayout';
import { LayoutOpts } from './LayoutOpts';
import { LayoutLink } from './LayoutLink';
import { LayoutNode } from './LayoutNode';
import { DagreNode } from './DagreNode';
import { DagreGroup } from './DagreGroup';
import { DagreLink } from './DagreLink';

export type DagreLayoutOptions = LayoutOpts & dagre.GraphLabel;

export class DagreLayout extends BaseLayout implements Layout {
  private dagreOptions: DagreLayoutOptions;

  constructor(graph: Graph, options?: Partial<DagreLayoutOptions>) {
    super(graph, options);
    this.dagreOptions = {
      ...this.options,
      marginx: 0,
      marginy: 0,
      nodesep: this.options.nodeDistance,
      edgesep: this.options.linkDistance,
      ranker: 'tight-tree',
      rankdir: 'TB',
      ...options
    };
  }

  protected createLayoutNode(node: Node, nodeDistance: number, index: number) {
    return new DagreNode(node, nodeDistance, index);
  }

  protected createLayoutLink(edge: Edge, source: LayoutNode, target: LayoutNode, isFalse: boolean): LayoutLink {
    return new DagreLink(edge, source, target, isFalse);
  }

  protected createLayoutGroup(node: Node, padding: number, index: number) {
    return new DagreGroup(node, padding, index);
  }

  protected updateEdgeBendpoints(edges: DagreLink[]): void {
    _.forEach(edges, edge => {
      const link = edge as DagreLink;
      link.updateBendpoints();
    });
  }

  protected startLayout(graph: Graph, initialRun: boolean, addingNodes: boolean): void {
    if (initialRun || addingNodes) {
      const dagreGraph = new dagre.graphlib.Graph({ compound: true });
      dagreGraph.setGraph(_.omit(this.dagreOptions, Object.keys(LAYOUT_DEFAULTS)));

      _.forEach(this.groups, group => {
        dagreGraph.setNode(group.id, group);
        dagreGraph.setParent(group.id, group.element.getParent().getId());
      });

      const updatedNodes: dagre.Node[] = [];
      _.forEach(this.nodes, node => {
        const updateNode = (node as DagreNode).getUpdatableNode();
        updatedNodes.push(updateNode);
        dagreGraph.setNode(node.id, updateNode);
        dagreGraph.setParent(node.id, node.element.getParent().getId());
      });

      _.forEach(this.edges, dagreEdge => {
        dagreGraph.setEdge(dagreEdge.source.id, dagreEdge.target.id, dagreEdge);
      });

      dagre.layout(dagreGraph);
      this.nodes.forEach(node => {
        (node as DagreNode).updateToNode(updatedNodes.find(n => n.id === node.id));
      });

      this.updateEdgeBendpoints(this.edges as DagreLink[]);
    }

    if (this.options.layoutOnDrag) {
      this.forceSimulation.useForceSimulation(this.nodes, this.edges, this.getFixedNodeDistance);
    }
  }
}
