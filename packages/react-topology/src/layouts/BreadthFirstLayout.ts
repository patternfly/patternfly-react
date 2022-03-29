import { Edge, Graph, Layout, Node } from '../types';
import { BaseLayout } from './BaseLayout';
import { LayoutOptions } from './LayoutOptions';
import { LayoutNode } from './LayoutNode';
import { LayoutLink } from './LayoutLink';
import { BreadthFirstNode } from './BreadthFirstNode';
import { BreadthFirstLink } from './BreadthFirstLink';
import { BreadthFirstGroup } from './BreadthFirstGroup';

export type BreadthFirstLayoutOptions = LayoutOptions;

export class BreadthFirstLayout extends BaseLayout implements Layout {
  private gridOptions: BreadthFirstLayoutOptions;

  constructor(graph: Graph, options?: Partial<BreadthFirstLayoutOptions>) {
    super(graph, options);
    this.gridOptions = {
      ...this.options,
      ...options
    };
  }

  protected createLayoutNode(node: Node, nodeDistance: number, index: number) {
    return new BreadthFirstNode(node, nodeDistance, index);
  }

  protected createLayoutLink(edge: Edge, source: LayoutNode, target: LayoutNode, isFalse: boolean): LayoutLink {
    return new BreadthFirstLink(edge, source, target, isFalse);
  }

  protected createLayoutGroup(node: Node, padding: number, index: number) {
    return new BreadthFirstGroup(node, padding, index);
  }

  protected startLayout(graph: Graph, initialRun: boolean, addingNodes: boolean): void {
    if (initialRun || addingNodes) {
      // Breath First algorithm

      // A node is visited in the order of levels
      const visited = {};
      // A node is used as a source/target, helper to detect duplicates/cycles.
      const processed = {};
      // The list of nodes that are roots in the graph
      const roots = {};
      // Helper map with target Ids
      const targetIds = {};
      // Helper map with the list of target Ids per source Id.
      const sourceIds = {};

      let padX = 0;
      let padY = 0;

      // Initial loop to populated the helpers
      for (const edge of this.edges) {
        if (!edge.isFalse) {
          const sourceId = edge.sourceNode.id;
          const targetId = edge.targetNode.id;
          if (!sourceIds[sourceId]) {
            sourceIds[sourceId] = [];
          }
          sourceIds[sourceId].push(targetId);
          targetIds[targetId] = true;
        }
      }

      for (const node of this.nodes) {
        const id = node.id;
        if (!targetIds[id]) {
          roots[id] = true;
        }
        if (padX < node.width) {
          padX = node.width;
        }
        if (padY < node.height) {
          padY = node.height;
        }
      }

      // Visiting all nodes to have an array of arrays with ids, organized by breath first levels
      const levels: any = [];
      levels.push(Object.keys(roots));
      let nl = 0;
      while (Object.keys(visited).length < this.nodes.length) {
        const nextLevel = {};
        for (const nodeId of levels[nl]) {
          if (!visited[nodeId]) {
            if (sourceIds[nodeId]) {
              for (const childId of sourceIds[nodeId]) {
                if (!processed[childId]) {
                  nextLevel[childId] = true;
                  processed[childId] = true;
                }
              }
            }
            visited[nodeId] = true;
            processed[nodeId] = true;
          }
        }
        const nextLevelKeys = Object.keys(nextLevel);
        if (nextLevelKeys.length > 0) {
          levels.push(nextLevelKeys);
        }
        nl++;
      }

      // Updating positions with levels
      let x = 0;
      let y = 0;
      for (const level of levels) {
        const sortedLevel = level.sort((a: string, b: string) => a.localeCompare(b));
        for (const nodeId of sortedLevel) {
          const node = this.nodesMap[nodeId];
          node.x = x;
          node.y = y;
          node.update();
          x += padX;
        }
        y += padY;
        x = 0;
      }
    }
  }
}
