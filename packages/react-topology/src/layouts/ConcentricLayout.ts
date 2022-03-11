import { Edge, Graph, Layout, Node } from '../types';
import { BaseLayout } from './BaseLayout';
import { LayoutOptions } from './LayoutOptions';
import { LayoutNode } from './LayoutNode';
import { LayoutLink } from './LayoutLink';
import { ConcentricNode } from './ConcentricNode';
import { ConcentricLink } from './ConcentricLink';
import { ConcentricGroup } from './ConcentricGroup';

export type ConcentricLayoutOptions = LayoutOptions & {
  splitLevel?: number;
};

export class ConcentricLayout extends BaseLayout implements Layout {
  private concentricOptions: ConcentricLayoutOptions;

  constructor(graph: Graph, options?: Partial<ConcentricLayoutOptions>) {
    super(graph, options);
    this.concentricOptions = {
      ...this.options,
      ...options
    };
  }

  protected createLayoutNode(node: Node, nodeDistance: number, index: number) {
    return new ConcentricNode(node, nodeDistance, index);
  }

  protected createLayoutLink(edge: Edge, source: LayoutNode, target: LayoutNode, isFalse: boolean): LayoutLink {
    return new ConcentricLink(edge, source, target, isFalse);
  }

  protected createLayoutGroup(node: Node, padding: number, index: number) {
    return new ConcentricGroup(node, padding, index);
  }

  protected startLayout(graph: Graph, initialRun: boolean, addingNodes: boolean): void {
    if (initialRun || addingNodes) {
      const weights = {};
      this.nodes.forEach(node => {
        weights[node.id] = { in: 0, out: 0, total: 0 };
      });
      this.edges.forEach(edge => {
        weights[edge.target.id].in++;
        weights[edge.target.id].total++;
        weights[edge.source.id].out++;
        weights[edge.source.id].total++;
      });

      const nodesWeight = Object.keys(weights).map(k => ({ id: k, total: weights[k].total }));
      nodesWeight.sort((a: any, b: any) => b.total - a.total);

      const splitLevel = this.concentricOptions.splitLevel ? this.concentricOptions.splitLevel : 4;
      const levelWidth = nodesWeight.length > 0 ? nodesWeight[0].total / splitLevel : 0;
      const levels: any = [[]];
      let currentLevel = levels[0];
      nodesWeight.forEach(n => {
        if (currentLevel.length > 0) {
          const diff = Math.abs(currentLevel[0].total - n.total);
          if (diff >= levelWidth) {
            currentLevel = [];
            levels.push(currentLevel);
          }
        }

        currentLevel.push(n);
      });

      let innerR = 0;
      let maxWH = 0;
      // This padding should be configurable
      const padding = maxWH;
      if (levels.length > 0) {
        let maxWidth = 0;
        let maxHeight = 0;
        levels[0].forEach((n: any) => {
          const node = this.nodesMap[n.id];
          if (maxWidth < node.width) {
            maxWidth = node.width;
          }
          if (maxHeight < node.height) {
            maxHeight = node.height;
          }
        });
        maxWH = Math.max(maxWidth, maxHeight);
        innerR = Math.round((levels[0].length * maxWH) / (2 * Math.PI));
      }
      const outerR = levels.length * (maxWH + padding) + innerR;
      const center = {
        x: outerR + maxWH,
        y: outerR + maxWH
      };

      let r = innerR;
      for (const level of levels) {
        const theta = (2 * Math.PI) / level.length;
        for (let j = 0; j < level.length; j++) {
          const node = this.nodesMap[level[j].id];
          node.x = center.x + r * Math.cos(theta * j);
          node.y = center.y + r * Math.sin(theta * j);
          node.update();
        }
        r += maxWH + padding;
      }
    }
  }
}
