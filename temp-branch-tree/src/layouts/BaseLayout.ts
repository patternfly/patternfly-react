import * as _ from 'lodash';
import { action } from 'mobx';
import {
  Edge,
  Graph,
  Layout,
  Node,
  ADD_CHILD_EVENT,
  REMOVE_CHILD_EVENT,
  GRAPH_LAYOUT_END_EVENT,
  ElementChildEventListener,
  NODE_COLLAPSE_CHANGE_EVENT,
  NodeCollapseChangeEventListener,
  NodeStyle,
  ElementVisibilityChangeEventListener,
  ELEMENT_VISIBILITY_CHANGE_EVENT,
  ElementVisibilityChangeEvent,
} from '../types';
import {
  leafNodeElements,
  groupNodeElements,
  getClosestVisibleParent,
} from '../utils/element-utils';
import {
  DRAG_MOVE_OPERATION,
  DRAG_NODE_END_EVENT,
  DRAG_NODE_START_EVENT,
  DragEvent,
  DragNodeEventListener,
  DragOperationWithType,
} from '../behavior';
import { BaseEdge } from '../elements';
import { ForceSimulation } from './ForceSimulation';
import { Rect } from '../geom';

class LayoutNode {
  protected readonly node: Node;

  protected xx?: number;

  protected yy?: number;

  protected nodeWidth: number;

  protected nodeHeight: number;

  protected nodeRadius: number;

  public readonly distance: number;

  public parent: LayoutGroup;

  public index: number;

  // isFixed is used locally for Force simulation during drag events
  public isFixed: boolean = false;

  constructor(node: Node, distance: number, index: number = -1) {
    this.node = node;
    this.distance = distance;
    this.index = index;

    // Currently we support only fixed node sizes, this will need to change if/when dynamic node sizes are supported
    const bounds = this.nodeBounds;
    this.nodeWidth = bounds.width + this.distance * 2;
    this.nodeHeight = bounds.height + this.distance * 2;
    this.nodeRadius = Math.max(bounds.width, bounds.height) / 2;
  }

  get element(): Node {
    return this.node;
  }

  get id(): string {
    return this.node.getId();
  }

  get x(): number {
    return this.xx || this.node.getBounds().getCenter().x;
  }

  set x(x: number) {
    if (!Number.isNaN(x)) {
      this.xx = x;
    }
  }

  get y(): number {
    return this.yy || this.node.getBounds().getCenter().y;
  }

  set y(y: number) {
    if (!Number.isNaN(y)) {
      this.yy = y;
    }
  }

  get fx(): number | undefined {
    return this.isFixed ? this.node.getBounds().getCenter().x : undefined;
  }

  get fy(): number | undefined {
    return this.isFixed ? this.node.getBounds().getCenter().y : undefined;
  }

  setPosition(x: number, y: number) {
    this.node.setBounds(
      this.node
        .getBounds()
        .clone()
        .setCenter(x, y),
    );
  }

  get nodeBounds(): Rect {
    const { padding } = this.node.getStyle<NodeStyle>();
    // Currently non-group nodes do not include their padding in the bounds
    if (!this.node.isGroup() && padding) {
      return this.node
        .getBounds()
        .clone()
        .padding(padding);
    }
    return this.node.getBounds();
  }

  get width(): number {
    return this.nodeWidth;
  }

  get height(): number {
    return this.nodeHeight;
  }

  update() {
    if (this.xx != null && this.yy != null) {
      this.node.setBounds(
        this.node
          .getBounds()
          .clone()
          .setCenter(this.xx, this.yy),
      );
    }
    this.xx = undefined;
    this.yy = undefined;
  }

  get radius(): number {
    return this.nodeRadius;
  }

  get collisionRadius(): number {
    return this.radius + this.distance;
  }
}

class LayoutGroup {
  protected readonly node: Node;

  public leaves: LayoutNode[];

  public groups: LayoutGroup[];

  public parent: LayoutGroup;

  public padding: number;

  public index: number;

  constructor(node: Node, padding: number, index: number) {
    this.node = node;
    this.padding = padding;
    this.index = index;
  }

  get element(): Node {
    return this.node;
  }

  get id(): string {
    return this.node.getId();
  }
}

class LayoutLink {
  private readonly edge: Edge;

  public sourceNode: LayoutNode;

  public targetNode: LayoutNode;

  public isFalse: boolean;

  constructor(edge: Edge, source: LayoutNode, target: LayoutNode, isFalse: boolean = false) {
    this.edge = edge;
    this.sourceNode = source;
    this.targetNode = target;
    this.isFalse = isFalse;
  }

  get element(): Edge {
    return this.edge;
  }

  get id(): string {
    return this.edge.getId();
  }

  get source(): any {
    return this.sourceNode;
  }

  get target(): any {
    return this.targetNode;
  }
}

type LayoutOptions = {
  linkDistance: number;
  nodeDistance: number;
  groupDistance: number;
  collideDistance: number;
  simulationSpeed: number;
  chargeStrength: number;
  allowDrag: boolean;
  layoutOnDrag: boolean;
};

const LAYOUT_DEFAULTS: LayoutOptions = {
  linkDistance: 60,
  nodeDistance: 35,
  groupDistance: 35,
  collideDistance: 0,
  simulationSpeed: 10,
  chargeStrength: 0,
  allowDrag: true,
  layoutOnDrag: true,
};

class BaseLayout implements Layout {
  private graph: Graph;

  protected forceSimulation: ForceSimulation;

  protected options: LayoutOptions;

  protected scheduleHandle?: number;

  private scheduleRestart = false;

  protected nodes: LayoutNode[] = [];

  protected edges: LayoutLink[] = [];

  protected groups: LayoutGroup[] = [];

  protected nodesMap: { [id: string]: LayoutNode } = {};

  constructor(graph: Graph, options?: Partial<LayoutOptions>) {
    this.graph = graph;
    this.options = {
      ...LAYOUT_DEFAULTS,
      ...options,
    };

    if (this.options.allowDrag) {
      graph
        .getController()
        .addEventListener<DragNodeEventListener>(DRAG_NODE_START_EVENT, this.handleDragStart)
        .addEventListener<DragNodeEventListener>(DRAG_NODE_END_EVENT, this.handleDragEnd);
    }

    this.forceSimulation = new ForceSimulation(this.options);
  }

  destroy(): void {
    if (this.options.allowDrag) {
      this.graph
        .getController()
        .removeEventListener(DRAG_NODE_START_EVENT, this.handleDragStart)
        .removeEventListener(DRAG_NODE_END_EVENT, this.handleDragEnd);
    }

    this.stopListening();

    this.forceSimulation.destroy();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected initDrag(element: Node, event: DragEvent, operation: DragOperationWithType): void {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected endDrag(element: Node, event: DragEvent, operation: DragOperationWithType): void {}

  handleDragStart = (element: Node, event: DragEvent, operation: DragOperationWithType) => {
    this.initDrag(element, event, operation);

    if (!this.options.layoutOnDrag) {
      return;
    }

    if (operation.type !== DRAG_MOVE_OPERATION) {
      this.forceSimulation.stopSimulation();
      return;
    }

    const id = element.getId();
    let found = false;
    const dragNode: LayoutNode | undefined = this.nodes.find((node: LayoutNode) => node.id === id);
    if (dragNode) {
      dragNode.isFixed = true;
      found = true;
    }
    if (!found) {
      const dragGroup: LayoutGroup | undefined = this.groups.find(
        (group: LayoutGroup) => group.id === id,
      );
      if (dragGroup) {
        const groupNodes = dragGroup.leaves;
        groupNodes.forEach((node: LayoutNode) => {
          node.isFixed = true;
        });
        found = true;
      }
    }

    if (found) {
      this.forceSimulation.alphaTarget(0.1);
      this.forceSimulation.restart();
    }
  };

  handleDragEnd = (element: Node, event: DragEvent, operation: DragOperationWithType) => {
    this.endDrag(element, event, operation);

    if (!this.options.layoutOnDrag) {
      return;
    }

    if (operation.type !== DRAG_MOVE_OPERATION) {
      this.forceSimulation.restart();
      return;
    }

    const id = element.getId();
    const dragNode: LayoutNode | undefined = this.nodes.find((node: LayoutNode) => node.id === id);
    if (dragNode) {
      dragNode.isFixed = false;
    } else {
      const dragGroup: LayoutGroup | undefined = this.groups.find(
        (group: LayoutGroup) => group.id === id,
      );
      if (dragGroup) {
        const groupNodes = dragGroup.leaves;
        groupNodes.forEach((node: LayoutNode) => {
          node.isFixed = false;
        });
      }
    }
    this.forceSimulation.alphaTarget(0);
  };

  layout = () => {
    this.stopListening();

    this.runLayout(true);

    this.startListening();
  };

  private startListening(): void {
    const controller = this.graph.getController();
    if (controller) {
      controller.addEventListener(ADD_CHILD_EVENT, this.handleChildAdded);
      controller.addEventListener(REMOVE_CHILD_EVENT, this.handleChildRemoved);
      controller.addEventListener(
        ELEMENT_VISIBILITY_CHANGE_EVENT,
        this.handleElementVisibilityChange,
      );
      controller.addEventListener(NODE_COLLAPSE_CHANGE_EVENT, this.handleNodeCollapse);
    }
  }

  private stopListening(): void {
    const controller = this.graph.getController();
    if (this.scheduleHandle) {
      window.cancelAnimationFrame(this.scheduleHandle);
    }
    if (controller) {
      controller.removeEventListener(ADD_CHILD_EVENT, this.handleChildAdded);
      controller.removeEventListener(REMOVE_CHILD_EVENT, this.handleChildRemoved);
      controller.removeEventListener(
        ELEMENT_VISIBILITY_CHANGE_EVENT,
        this.handleElementVisibilityChange,
      );
      controller.removeEventListener(NODE_COLLAPSE_CHANGE_EVENT, this.handleNodeCollapse);
    }
  }

  protected handleChildAdded: ElementChildEventListener = ({ child }): void => {
    if (!this.nodesMap[child.getId()]) {
      this.scheduleRestart = true;
      this.scheduleLayout();
    }
  };

  protected handleChildRemoved: ElementChildEventListener = ({ child }): void => {
    if (this.nodesMap[child.getId()]) {
      this.scheduleRestart = true;
      this.scheduleLayout();
    }
  };

  protected handleElementVisibilityChange: ElementVisibilityChangeEventListener = (
    event: ElementVisibilityChangeEvent,
  ): void => {
    if (event.visible === (this.nodesMap[event.target.getId()] === undefined)) {
      this.scheduleRestart = true;
      this.scheduleLayout();
    }
  };

  private handleNodeCollapse: NodeCollapseChangeEventListener = ({ node }): void => {
    if (!node.isCollapsed()) {
      this.scheduleRestart = true;
      this.scheduleLayout();
    }
  };

  private scheduleLayout = (): void => {
    if (!this.scheduleHandle) {
      this.scheduleHandle = window.requestAnimationFrame(() => {
        delete this.scheduleHandle;
        this.runLayout(false, this.scheduleRestart);
        this.scheduleRestart = false;
      });
    }
  };

  protected getFixedNodeDistance = (link: LayoutLink): number => {
    return Math.sqrt(
      (link.sourceNode.x - link.targetNode.x) ** 2 + (link.sourceNode.y - link.targetNode.y) ** 2,
    );
  };

  protected getLayoutNode(nodes: LayoutNode[], node: Node | null): LayoutNode | undefined {
    if (!node) {
      return undefined;
    }

    let layoutNode = _.find(nodes, { id: node.getId() });
    if (!layoutNode && _.size(node.getChildren())) {
      layoutNode = _.find(nodes, { id: node.getChildren()[0].getId() });
    }
    if (!layoutNode) {
      layoutNode = this.getLayoutNode(nodes, getClosestVisibleParent(node));
    }

    return layoutNode;
  }

  protected getFauxEdges(groups: LayoutGroup[], nodes: LayoutNode[]): LayoutLink[] {
    const fauxEdges: LayoutLink[] = [];
    groups.forEach((group: LayoutGroup) => {
      const groupNodes = group.element.getNodes();
      for (let i = 0; i < groupNodes.length; i++) {
        for (let j = i + 1; j < groupNodes.length; j++) {
          const fauxEdge = new BaseEdge();
          const source = this.getLayoutNode(nodes, groupNodes[i]);
          const target = this.getLayoutNode(nodes, groupNodes[j]);
          if (source && target) {
            const link = this.createLayoutLink(fauxEdge, source, target, true);
            fauxEdge.setController(target.element.getController());
            fauxEdges.push(link);
          }
        }
      }
    });

    return fauxEdges;
  }

  protected createLayoutNode(node: Node, nodeDistance: number, index: number) {
    return new LayoutNode(node, nodeDistance, index);
  }

  protected createLayoutLink(
    edge: Edge,
    source: LayoutNode,
    target: LayoutNode,
    isFalse: boolean = false,
  ): LayoutLink {
    return new LayoutLink(edge, source, target, isFalse);
  }

  protected createLayoutGroup(node: Node, padding: number, index: number) {
    return new LayoutGroup(node, padding, index);
  }

  protected getNodes(leafNodes: Node[], nodeDistance: number): LayoutNode[] {
    return leafNodes.map((n, index) => this.createLayoutNode(n, nodeDistance, index));
  }

  // Default is to clear any initial bend points
  protected initializeEdgeBendpoints = (edge: Edge): void => {
    // remove any bendpoints
    if (edge.getBendpoints().length > 0) {
      edge.setBendpoints([]);
    }
  };

  protected getLinks(edges: Edge[]): LayoutLink[] {
    const links: LayoutLink[] = [];
    edges.forEach((e) => {
      const source = this.getLayoutNode(this.nodes, e.getSource());
      const target = this.getLayoutNode(this.nodes, e.getTarget());
      if (source && target) {
        this.initializeEdgeBendpoints(e);
        links.push(this.createLayoutLink(e, source, target));
      }
    });

    return links;
  }

  // Turn empty groups into nodes
  protected getNodesFromGroups(
    groups: Node[],
    nodeDistance: number,
    nodeCount: number,
  ): LayoutNode[] {
    let count = 0;
    const groupNodes: LayoutNode[] = [];
    groups.forEach((group: Node) => {
      if (group.getChildren().filter((c) => c.isVisible()).length === 0) {
        groupNodes.push(this.createLayoutNode(group, nodeDistance, nodeCount + count++));
      }
    });

    return groupNodes;
  }

  protected getGroups(groups: Node[], nodes: LayoutNode[], padding: number): LayoutGroup[] {
    let nodeIndex = nodes.length;
    // Create groups only for those with children
    const layoutGroups: LayoutGroup[] = groups
      .filter((g) => g.getChildren().filter((c) => c.isVisible()).length > 0)
      .map((group: Node) => this.createLayoutGroup(group, padding, nodeIndex++));

    layoutGroups.forEach((groupNode: LayoutGroup) => {
      const leaves: LayoutNode[] = [];
      const leafElements = groupNode.element
        .getChildren()
        .filter((node: Node) => !node.isGroup() || node.getChildren().length === 0);
      leafElements.forEach((leaf: Node) => {
        const layoutLeaf = nodes.find((n) => n.id === leaf.getId());
        if (layoutLeaf) {
          leaves.push(layoutLeaf);
          layoutLeaf.parent = groupNode;
        }
      });
      groupNode.leaves = leaves;
      const childGroups: LayoutGroup[] = [];
      const groupElements = groupNode.element
        .getChildren()
        .filter((node: Node) => node.isGroup() && !node.isCollapsed());
      groupElements.forEach((group: Node) => {
        const layoutGroup = layoutGroups.find((g) => g.id === group.getId());
        if (layoutGroup) {
          childGroups.push(layoutGroup);
          layoutGroup.parent = groupNode;
        }
      });
      groupNode.groups = childGroups;
    });

    return layoutGroups;
  }

  protected initializeNodePositions(
    newNodes: LayoutNode[],
    graph: Graph,
    force: boolean = false,
  ): void {
    const { width, height } = graph.getBounds();
    const cx = width / 2;
    const cy = height / 2;
    newNodes.forEach((node: LayoutNode) => {
      // only init position for nodes that are still at 0, 0
      const { x, y } = node.element.getPosition();
      if (force || (x === 0 && y === 0)) {
        node.setPosition(cx, cy);
      }
    });
  }

  protected setupLayout(
    graph: Graph, // eslint-disable-line @typescript-eslint/no-unused-vars
    nodes: LayoutNode[], // eslint-disable-line @typescript-eslint/no-unused-vars
    edges: LayoutLink[], // eslint-disable-line @typescript-eslint/no-unused-vars
    groups: LayoutGroup[], // eslint-disable-line @typescript-eslint/no-unused-vars
  ): void {}

  protected updateExistingNodes(existingNodes: LayoutNode[]): void {
    existingNodes.forEach((n) => {
      (n as LayoutNode).isFixed = true;
    });
  }

  protected stopSimulation(): void {
    this.forceSimulation.haltForceSimulation();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected startLayout(graph: Graph, initialRun: boolean, addingNodes: boolean): void {}

  protected updateLayout(): void {
    this.forceSimulation.useForceSimulation(this.nodes, this.edges, this.getFixedNodeDistance);
    this.forceSimulation.alpha(0.2);
  }

  @action
  private runLayout(initialRun: boolean, restart = true): void {
    const prevGroups = this.groups;

    // create datum
    const leafNodes = leafNodeElements(this.graph.getNodes()).filter((n) => n.isVisible());
    const groups = groupNodeElements(this.graph.getNodes()).filter((g) => g.isVisible());

    this.nodes = this.getNodes(leafNodes, this.options.nodeDistance);

    const groupNodes: LayoutNode[] = this.getNodesFromGroups(
      groups,
      this.options.nodeDistance,
      this.nodes.length,
    );
    if (groupNodes) {
      this.nodes.push(...groupNodes);
    }

    this.groups = this.getGroups(groups, this.nodes, this.options.groupDistance);

    const newNodes: LayoutNode[] = initialRun
      ? this.nodes
      : this.nodes.filter((node) => !this.nodesMap[node.element.getId()]);
    let addingNodes = restart && newNodes.length > 0;

    if (!initialRun && restart && !addingNodes) {
      this.groups.forEach((group) => {
        const prevGroup = prevGroups.find((g) => g.element.getId() === group.element.getId());
        if (!prevGroup) {
          addingNodes = true;
          newNodes.push(...group.leaves);
        } else {
          group.leaves.forEach((node) => {
            if (!prevGroup.leaves.find((l) => l.element.getId() === node.element.getId())) {
              newNodes.push(node);
            }
          });
        }
      });
      addingNodes = newNodes.length > 0;
    }

    this.edges = this.getLinks(this.graph.getEdges());

    // initialize new node positions
    this.initializeNodePositions(newNodes, this.graph, initialRun);

    // re-create the nodes map
    this.nodesMap = this.nodes.reduce((acc, n) => {
      acc[n.id] = n;
      return acc;
    }, {});

    // Add faux edges to keep grouped items together
    this.edges.push(...this.getFauxEdges(this.groups, this.nodes));

    this.setupLayout(this.graph, this.nodes, this.edges, this.groups);

    this.updateExistingNodes(this.nodes.filter((n) => !newNodes.includes(n)));

    if (initialRun || addingNodes) {
      // Reset the force simulation
      this.stopSimulation();

      this.startLayout(this.graph, initialRun, addingNodes);
    } else if (restart && this.options.layoutOnDrag) {
      this.updateLayout();
    }
    this.graph.getController().fireEvent(GRAPH_LAYOUT_END_EVENT, { graph: this.graph });
  }
}

export { BaseLayout, LayoutNode, LayoutGroup, LayoutLink, LayoutOptions, LAYOUT_DEFAULTS };
