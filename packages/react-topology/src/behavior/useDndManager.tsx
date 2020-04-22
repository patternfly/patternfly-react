import * as React from 'react';
import { computed, observable } from 'mobx';
import ControllerContext from '../utils/ControllerContext';
import {
  DndManager,
  Identifier,
  DropTarget,
  DragEvent,
  DndStore,
  DragSource,
  Unregister,
  DndState,
  DndStateContainer,
  DragOperationWithType,
} from './dnd-types';

let nextUniqueId = 0;

const getNextUniqueId = (): number => {
  return nextUniqueId++;
};

export const matchesType = (
  targetType: Identifier | Identifier[] | undefined,
  draggedItemType: Identifier | undefined,
): boolean => {
  if (draggedItemType === null) {
    return targetType === null;
  }
  return Array.isArray(targetType)
    ? targetType.some((t) => t === draggedItemType)
    : targetType === draggedItemType;
};

export class DndManagerImpl implements DndManager {
  private state: DndState;

  constructor(state: DndState) {
    this.state = state;
  }

  // TODO are these really required to be observable?
  @observable.shallow
  private sources: { [key: string]: DragSource } = {};

  @observable.shallow
  private targets: { [key: string]: DropTarget } = {};

  @computed
  get dropHints(): string[] {
    return this.state.targetIds
      ? (this.state.targetIds
          .map((id) => {
            const target = this.getTarget(id);
            return target ? target.dropHint(this) : [];
          })
          .filter((x) => x) as string[])
      : [];
  }

  registerSource(source: DragSource): [string, Unregister] {
    const key = `S${getNextUniqueId()}`;
    this.sources[key] = source;
    return [
      key,
      () => {
        delete this.sources[key];
      },
    ];
  }

  registerTarget(target: DropTarget): [string, Unregister] {
    const key = `T${getNextUniqueId()}`;
    this.targets[key] = target;
    return [
      key,
      () => {
        delete this.targets[key];
      },
    ];
  }

  getDropHints(): string[] {
    return this.dropHints;
  }

  canDragSource(sourceId: string | undefined): boolean {
    const source = this.getSource(sourceId);
    if (!source || this.isDragging()) {
      return false;
    }
    return source && source.canDrag(this);
  }

  canDropOnTarget(targetId: string | undefined): boolean {
    const target = this.getTarget(targetId);
    if (!target || !this.isDragging() || this.didDrop()) {
      return false;
    }

    const draggedItemType = this.getItemType();
    return matchesType(target.type, draggedItemType) && target.canDrop(this);
  }

  isDragging(): boolean {
    return !!this.state.isDragging;
  }

  isDraggingSource(sourceId: string | undefined): boolean {
    return this.state.sourceId != null && this.state.sourceId === sourceId;
  }

  isOverTarget(targetId: string | undefined, options = { shallow: false }): boolean {
    if (!targetId) {
      return false;
    }

    const { shallow } = options;
    if (!this.isDragging()) {
      return false;
    }

    const target = this.targets[targetId];
    const draggedItemType = this.getItemType();
    if (draggedItemType && !matchesType(target.type, draggedItemType)) {
      return false;
    }

    const targetIds = this.getTargetIds();
    if (!targetIds.length) {
      return false;
    }

    const index = targetIds.indexOf(targetId);
    if (shallow) {
      return index === targetIds.length - 1;
    }
    return index > -1;
  }

  getItemType(): Identifier | undefined {
    return this.state.itemType;
  }

  getItem(): any {
    return this.state.item;
  }

  getSourceId(): string | undefined {
    return this.state.sourceId;
  }

  getTargetIds(): string[] {
    return this.state.targetIds || [];
  }

  hasDropTarget(): boolean {
    return !!this.getTargetIds().find((id) => this.canDropOnTarget(id));
  }

  getDropResult(): any {
    return this.state.dropResult;
  }

  didDrop(): boolean {
    return !!this.state.didDrop;
  }

  getDragEvent(): DragEvent | undefined {
    return this.state.event;
  }

  getOperation(): DragOperationWithType | undefined {
    return this.state.operation;
  }

  isCancelled(): boolean {
    return !!this.state.cancelled;
  }

  beginDrag(
    sourceIds: string | string[],
    operation: DragOperationWithType | undefined,
    x: number,
    y: number,
    pageX: number,
    pageY: number,
  ): void {
    const ids = Array.isArray(sourceIds) ? sourceIds : [sourceIds];
    if (ids.length) {
      let sourceId: string | null = null;
      for (let i = ids.length - 1; i >= 0; i--) {
        if (this.canDragSource(ids[i])) {
          sourceId = ids[i];
          break;
        }
      }
      if (sourceId) {
        const source = this.getSource(sourceId);
        if (source) {
          this.state.sourceId = sourceId;
          this.state.itemType = source.type;
          this.state.event = {
            initialPageX: pageX,
            initialPageY: pageY,
            pageX,
            pageY,
            initialX: x,
            initialY: y,
            x,
            y,
            dx: 0,
            dy: 0,
          };
          this.state.operation = operation;
          this.state.isDragging = true;
          this.state.item = source.beginDrag(this);
        }
      }
    }
    this.performHitTests();
  }

  hover(targetIds: string[]): void {
    const ids: string[] = targetIds.filter((id) => this.getTarget(id));
    this.state.targetIds = ids;
    ids.forEach((id) => {
      const target = this.getTarget(id);
      if (target) {
        target.hover(this);
      }
    });
  }

  async endDrag(): Promise<void> {
    const source = this.getSource(this.getSourceId());
    try {
      if (source) {
        await source.endDrag(this);
      }
    } finally {
      // clear state
      delete this.state.didDrop;
      delete this.state.dropResult;
      delete this.state.event;
      delete this.state.isDragging;
      delete this.state.item;
      delete this.state.sourceId;
      delete this.state.targetIds;
      delete this.state.operation;
      delete this.state.cancelled;
    }
  }

  drop(): void {
    this.getTargetIds()
      .filter((id) => this.canDropOnTarget(id))
      .reverse()
      .forEach((id, idx) => {
        const target = this.getTarget(id);
        if (target) {
          let result = target.drop(this);
          if (typeof result === 'undefined') {
            result = idx === 0 ? {} : this.state.dropResult;
          }
          this.state.dropResult = result;
          this.state.didDrop = true;
        }
      });
  }

  drag(x: number, y: number, pageX: number, pageY: number): void {
    if (!this.state.event) {
      throw new Error('Drag event not initialized');
    }
    this.state.event.dx = x - this.state.event.x;
    this.state.event.dy = y - this.state.event.y;
    this.state.event.x = x;
    this.state.event.y = y;
    this.state.event.pageX = pageX;
    this.state.event.pageY = pageY;

    const source = this.getSource(this.getSourceId());
    if (source) {
      source.drag(this);
    }
    this.performHitTests();
  }

  cancel(): boolean {
    if (!this.state.event) {
      throw new Error('Drag event not initialized');
    }
    if (this.state.cancelled) {
      return true;
    }
    const source = this.getSource(this.getSourceId());
    if (source && source.canCancel(this)) {
      this.state.cancelled = true;
      this.drag(
        this.state.event.initialX,
        this.state.event.initialY,
        this.state.event.pageX,
        this.state.event.pageY,
      );
      return true;
    }
    return false;
  }

  private performHitTests(): void {
    const draggedItemType = this.getItemType();
    const event = this.getDragEvent();
    if (event && draggedItemType) {
      const targetIds: string[] = [];
      Object.keys(this.targets).forEach((targetId) => {
        const target = this.getTarget(targetId);
        if (
          target &&
          matchesType(target.type, draggedItemType) &&
          target.hitTest(event.x, event.y)
        ) {
          targetIds.push(targetId);
        }
      });

      this.hover(targetIds);
    }
  }

  private getSource(sourceId: string | undefined): DragSource | undefined {
    return sourceId ? this.sources[sourceId] : undefined;
  }

  private getTarget(targetId: string | undefined): DropTarget | undefined {
    return targetId ? this.targets[targetId] : undefined;
  }
}

export const useDndManager = () => {
  const controller = React.useContext(ControllerContext);
  const store = controller.getStore<DndStore>();
  let { dndManager } = store;
  if (!dndManager) {
    const state = controller.getState<DndStateContainer>();
    let { dragDrop } = state;
    if (!dragDrop) {
      dragDrop = observable.object<DndState>({});
      state.dragDrop = dragDrop;
    }
    dndManager = new DndManagerImpl(dragDrop);
    store.dndManager = dndManager;
  }
  return dndManager;
};
