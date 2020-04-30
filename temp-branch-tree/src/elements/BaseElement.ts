import { observable, computed } from 'mobx';
import * as _ from 'lodash';
import {
  ElementModel,
  Graph,
  GraphElement,
  isGraph,
  isNode,
  Controller,
  ModelKind,
  ADD_CHILD_EVENT,
  REMOVE_CHILD_EVENT,
} from '../types';
import Stateful from '../utils/Stateful';
import { Translatable } from '../geom/types';

export default abstract class BaseElement<E extends ElementModel = ElementModel, D = any>
  extends Stateful
  implements GraphElement<E, D> {
  private id: string = '';

  @observable
  private type: string = '';

  @observable.ref
  private data?: D;

  @observable.ref
  private parent?: GraphElement;

  @observable
  private visible: boolean = true;

  @observable.shallow
  private children: GraphElement[] = [];

  @observable.ref
  private controller?: Controller;

  @observable
  private label?: string;

  @observable
  private style: any = {};

  abstract getKind(): ModelKind;

  @computed({ equals: _.isEqual })
  private get ordering(): number[] {
    if (!this.parent) {
      return [];
    }
    const idx = this.parent.getChildren().indexOf(this);
    const result = [...this.parent.getOrderKey(), idx];
    return result;
  }

  getLabel(): string {
    return this.label || '';
  }

  setLabel(label: string): void {
    this.label = label;
  }

  getOrderKey(): number[] {
    return this.ordering;
  }

  getController(): Controller {
    if (!this.controller) {
      throw new Error(`GraphElement with ID '${this.getId()}' has no controller.`);
    }
    return this.controller;
  }

  setController(controller: Controller): void {
    this.controller = controller;
  }

  getGraph(): Graph {
    // TODO fix project eslint rules
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    let p: GraphElement = this;
    while (!isGraph(p)) {
      p = p.getParent();
    }
    return p;
  }

  getParent(): GraphElement {
    if (!this.parent) {
      throw new Error(`GraphElement with ID '${this.getId()}' has no parent.`);
    }
    return this.parent;
  }

  setParent(parent: GraphElement): void {
    if (this.parent !== parent) {
      if (this.parent) {
        this.remove();
      }
      this.parent = parent;
    }
  }

  hasParent(): boolean {
    return this.parent !== undefined;
  }

  getId(): string {
    return this.id;
  }

  setId(id: string): void {
    this.id = id;
  }

  getType(): string {
    return this.type;
  }

  setType(type: string): void {
    this.type = type;
  }

  setVisible(visible: boolean): void {
    this.visible = visible;
  }

  isVisible(): boolean {
    return (
      this.visible &&
      (!this.parent ||
        (this.parent.isVisible() && (!isNode(this.parent) || !this.parent.isCollapsed())))
    );
  }

  getData(): D | undefined {
    return this.data;
  }

  setData(data: D | undefined): void {
    this.data = data;
  }

  getStyle<T extends {}>(): T {
    return this.style;
  }

  getChildren(): GraphElement[] {
    return this.children;
  }

  insertChild(child: GraphElement, index: number) {
    if (
      this.children.length === 0 ||
      index >= this.children.length ||
      this.children[index] !== child
    ) {
      const idx = this.children.indexOf(child);
      if (idx !== -1) {
        this.children.splice(idx, 1);
        this.children.splice(index, 0, child);
      } else {
        // remove from old parent
        child.remove();
        child.setParent(this);
        this.children.splice(index, 0, child);

        if (this.controller) {
          this.controller.fireEvent(ADD_CHILD_EVENT, { target: this, child });
        }
      }
    }
  }

  appendChild(child: GraphElement) {
    if (this.children.length === 0 || this.children[this.children.length - 1] !== child) {
      const idx = this.children.indexOf(child);
      if (idx !== -1) {
        this.children.splice(idx, 1);
        this.children.push(child);
      } else {
        // remove from old parent
        child.remove();
        child.setParent(this);
        this.children.push(child);

        if (this.controller) {
          this.controller.fireEvent(ADD_CHILD_EVENT, { target: this, child });
        }
      }
    }
  }

  removeChild(child: GraphElement) {
    if (this.children) {
      const idx = this.children.indexOf(child);
      if (idx !== -1) {
        this.children.splice(idx, 1);
        child.setParent(undefined);

        if (this.controller) {
          this.controller.fireEvent(REMOVE_CHILD_EVENT, { target: this, child });
        }
      }
    }
  }

  remove(): void {
    if (this.parent) {
      this.parent.removeChild(this);
    }
  }

  setModel(model: E): void {
    if ('type' in model) {
      this.setType(model.type);
    }
    if ('visible' in model) {
      this.setVisible(!!model.visible);
    }
    if (Array.isArray(model.children)) {
      const controller = this.getController();

      const childElements = model.children.map((id) => {
        const element = controller.getElementById(id);
        if (!element) {
          throw new Error(`No element found with ID '${id}'.`);
        }
        return element;
      });

      // remove children
      _.difference(this.children, childElements).forEach((child) => this.removeChild(child));

      // add children
      const toAdd = _.difference(childElements, this.children);
      toAdd.reverse().forEach((child) => this.insertChild(child, 0));
    }
    if ('data' in model) {
      this.data = model.data;
    }
    if ('label' in model) {
      this.label = model.label;
    }
    if ('style' in model) {
      _.merge(this.style, model.style);
    }
  }

  raise(): void {
    const { parent } = this;
    if (parent) {
      parent.appendChild(this);
      parent.raise();
    }
  }

  translateToAbsolute(t: Translatable): void {
    this.translateToParent(t);
    const { parent } = this;
    if (parent) {
      parent.translateToAbsolute(t);
    }
  }

  translateFromAbsolute(t: Translatable): void {
    const { parent } = this;
    if (parent) {
      parent.translateFromAbsolute(t);
    }
    this.translateFromParent(t);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  translateToParent(t: Translatable): void {
    // nothing to do
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  translateFromParent(t: Translatable): void {
    // nothing to do
  }

  destroy(): void {
    // nothing to do
  }
}
