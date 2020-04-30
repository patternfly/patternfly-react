import { computed, observable } from 'mobx';
import Rect from '../geom/Rect';
import Point from '../geom/Point';
import Dimensions from '../geom/Dimensions';
import { DEFAULT_LAYERS } from '../const';
import { Graph, Edge, Node, GraphModel, ModelKind, isNode, isEdge, Layout } from '../types';
import BaseElement from './BaseElement';

export default class BaseGraph<E extends GraphModel = GraphModel, D = any> extends BaseElement<E, D>
  implements Graph<E, D> {
  @observable.ref
  private layers = DEFAULT_LAYERS;

  @observable
  private scale = 1;

  @observable
  private layoutType?: string;

  @observable.ref
  private dimensions = new Dimensions();

  @observable.ref
  private position = new Point();

  private currentLayout?: Layout;

  @computed
  private get edges(): Edge[] {
    return this.getChildren().filter(isEdge);
  }

  @computed
  private get nodes(): Node[] {
    return this.getChildren().filter(isNode);
  }

  getKind(): ModelKind {
    return ModelKind.graph;
  }

  getLayers(): string[] {
    return this.layers;
  }

  setLayers(layers: string[]): void {
    this.layers = layers;
  }

  getBounds(): Rect {
    const {
      position: { x, y },
      dimensions: { width, height },
    } = this;
    return new Rect(x, y, width, height);
  }

  setBounds(bounds: Rect): void {
    const { width, height } = this.dimensions;
    if (bounds.width !== width || bounds.height !== height) {
      this.dimensions = new Dimensions(bounds.width, bounds.height);
    }
    const { x, y } = this.position;
    if (bounds.x !== x || bounds.y !== y) {
      this.position = new Point(bounds.x, bounds.y);
    }
  }

  getPosition(): Point {
    return this.position;
  }

  setPosition(point: Point): void {
    this.position = point;
  }

  getDimensions(): Dimensions {
    return this.dimensions;
  }

  setDimensions(dimensions: Dimensions): void {
    this.dimensions = dimensions;
  }

  getNodes(): Node[] {
    return this.nodes;
  }

  getEdges(): Edge[] {
    return this.edges;
  }

  getLayout(): string | undefined {
    return this.layoutType;
  }

  setLayout(layout: string | undefined): void {
    if (layout === this.layoutType) {
      return;
    }

    if (this.currentLayout) {
      this.currentLayout.destroy();
    }

    this.layoutType = layout;
    this.currentLayout = layout ? this.getController().getLayout(layout) : undefined;
  }

  layout(): void {
    if (this.currentLayout) {
      this.currentLayout.layout();
    }
  }

  getScale(): number {
    return this.scale;
  }

  setScale(scale: number): void {
    this.scale = scale;
  }

  reset(): void {
    this.scale = 1;
    this.position = new Point(0, 0);
  }

  scaleBy(scale: number, location?: Point): void {
    const b = this.getBounds();
    let { x, y } = b;
    const c = location || b.getCenter().translate(-x, -y);
    x = (c.x - x) / this.scale;
    y = (c.y - y) / this.scale;
    this.scale *= scale;
    x = c.x - x * this.scale;
    y = c.y - y * this.scale;
    this.position = new Point(x, y);
  }

  fit(padding = 0): void {
    let rect: Rect | undefined;
    this.getNodes().forEach((c) => {
      const b = c.getBounds();
      if (!rect) {
        rect = b.clone();
      } else {
        rect.union(b);
      }
    });
    if (!rect) {
      return;
    }

    const { width, height } = rect;

    if (width === 0 || height === 0) {
      return;
    }

    const { width: fullWidth, height: fullHeight } = this.getDimensions();
    const midX = rect.x + width / 2;
    const midY = rect.y + height / 2;

    // set the max scale to be the current zoom level or 1
    const maxScale = Math.max(this.getScale(), 1);

    // compute the scale
    const scale = Math.min(
      1 /
        Math.max(
          width / Math.max(1, fullWidth - padding),
          height / Math.max(1, fullHeight - padding),
        ),
      maxScale,
    );

    // translate to center
    const tx = fullWidth / 2 - midX * scale;
    const ty = fullHeight / 2 - midY * scale;

    // TODO should scale and bound be kept in a single geom Transform object instead of separately?
    this.scale = scale;
    this.position = new Point(tx, ty);
  }

  panIntoView = (
    nodeElement: Node,
    { offset = 0, minimumVisible = 0 }: { offset?: number; minimumVisible?: number } = {},
  ): void => {
    if (!nodeElement) {
      return;
    }
    const { x: viewX, y: viewY, width: viewWidth, height: viewHeight } = this.getBounds();
    const boundingBox = nodeElement
      .getBounds()
      .clone()
      .scale(this.scale)
      .translate(viewX, viewY);
    const { x, y, width, height } = boundingBox;
    let move = false;
    const panOffset = offset * this.scale;
    const minVisibleSize = minimumVisible * this.scale;

    const newLocation = {
      x: viewX,
      y: viewY,
    };

    if (x + width - minVisibleSize < 0) {
      newLocation.x -= x - panOffset;
      move = true;
    }
    if (x + minVisibleSize > viewWidth) {
      newLocation.x -= x + width - viewWidth + panOffset;
      move = true;
    }
    if (y + height - minVisibleSize < 0) {
      newLocation.y -= y - panOffset;
      move = true;
    }
    if (y + minVisibleSize > viewHeight) {
      newLocation.y -= y + height - viewHeight + panOffset;
      move = true;
    }

    if (move) {
      this.setBounds(new Rect(newLocation.x, newLocation.y, viewWidth, viewHeight));
    }
  };

  setModel(model: E): void {
    super.setModel(model);

    if ('layers' in model && model.layers) {
      this.setLayers(model.layers);
    }
    if ('layout' in model) {
      this.setLayout(model.layout);
    }
    if ('scale' in model && typeof model.scale === 'number') {
      this.setScale(+model.scale);
    }
    let p: Point | undefined;
    if ('x' in model && model.x != null) {
      if (!p) {
        p = this.position.clone();
      }
      p.x = model.x;
    }
    if ('y' in model && model.y != null) {
      if (!p) {
        p = this.position.clone();
      }
      p.y = model.y;
    }
    if (p) {
      this.setPosition(p);
    }
  }

  translateToAbsolute(): void {
    // do nothing
  }

  translateFromAbsolute(): void {
    // do nothing
  }

  destroy(): void {
    if (this.currentLayout) {
      this.currentLayout.destroy();
    }
  }
}
