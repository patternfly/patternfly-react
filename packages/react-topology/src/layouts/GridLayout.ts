import { Edge, Graph, Layout, Node } from '../types';
import { BaseLayout } from './BaseLayout';
import { LayoutOptions } from './LayoutOptions';
import { LayoutNode } from './LayoutNode';
import { LayoutLink } from './LayoutLink';
import { GridNode } from './GridNode';
import { GridLink } from './GridLink';
import { GridGroup } from './GridGroup';

export type GridLayoutOptions = LayoutOptions;

export class GridLayout extends BaseLayout implements Layout {
  private gridOptions: GridLayoutOptions;

  constructor(graph: Graph, options?: Partial<GridLayoutOptions>) {
    super(graph, options);
    this.gridOptions = {
      ...this.options,
      ...options
    };
  }

  protected createLayoutNode(node: Node, nodeDistance: number, index: number) {
    return new GridNode(node, nodeDistance, index);
  }

  protected createLayoutLink(edge: Edge, source: LayoutNode, target: LayoutNode, isFalse: boolean): LayoutLink {
    return new GridLink(edge, source, target, isFalse);
  }

  protected createLayoutGroup(node: Node, padding: number, index: number) {
    return new GridGroup(node, padding, index);
  }

  protected startLayout(graph: Graph, initialRun: boolean, addingNodes: boolean): void {
    if (initialRun || addingNodes) {
      this.nodes.sort((a, b) => a.id.localeCompare(b.id));
      const totalNodes = this.nodes.length;
      const maxPerRow = Math.round(Math.sqrt(totalNodes));
      let x = 0;
      let y = 0;
      let rowI = 0;
      let padX = 0;
      let padY = 0;
      for (let i = 0; i < totalNodes; i++) {
        const node = this.nodes[i];
        if (padX < node.width) {
          padX = node.width;
        }
        if (padY < node.height) {
          padY = node.height;
        }
      }
      for (let i = 0; i < totalNodes; i++) {
        const node = this.nodes[i];
        node.x = x;
        node.y = y;
        node.update();

        if (rowI < maxPerRow) {
          x += padX;
          rowI++;
        } else {
          rowI = 0;
          x = 0;
          y += padY;
        }
      }
    }
  }
}
