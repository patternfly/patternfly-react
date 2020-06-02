// TODO support Symbols
export type Identifier = string;

export type TargetType = Identifier | Identifier[];

export type SourceType = Identifier;

export interface DragObjectWithType {
  type: SourceType;
}

export type DragOperationType = Identifier;

export interface DragOperationWithType {
  type: DragOperationType;
}

export type DragEvent = {
  // in subject coordinates
  initialX: number;
  initialY: number;
  x: number;
  y: number;
  dx: number;
  dy: number;
  // in page coordinates
  initialPageX: number;
  initialPageY: number;
  pageX: number;
  pageY: number;
};

export type DragSource = {
  type: SourceType;
  canDrag(dndManager: DndManager): boolean;
  beginDrag(dndManager: DndManager): any;
  drag(dndManager: DndManager): void;
  endDrag(dndManager: DndManager): void | Promise<void>;
  canCancel(dndManager: DndManager): boolean;
};

export type DropTarget = {
  type: TargetType;
  dropHint(dndManager: DndManager): string | undefined;
  drop(dndManager: DndManager): any;
  hover(dndManager: DndManager): void;
  canDrop(dndManager: DndManager): boolean;
  hitTest(x: number, y: number): boolean;
};

export interface DndState {
  isDragging?: boolean;
  sourceId?: string;
  targetIds?: string[];
  itemType?: string;
  item?: any;
  dropResult?: any;
  didDrop?: boolean;
  event?: DragEvent;
  operation?: DragOperationWithType;
  cancelled?: boolean;
}

export type DndStateContainer = {
  dragDrop: DndState;
};

export type Unregister = () => void;

export interface DndManager {
  registerSource(source: DragSource): [string, Unregister];
  registerTarget(target: DropTarget): [string, Unregister];
  getDropHints(): string[];
  canDragSource(sourceId: string | undefined): boolean;
  canDropOnTarget(targetId: string | undefined): boolean;
  hasDropTarget(): boolean;
  isDragging(): boolean;
  isDraggingSource(sourceId: string | undefined): boolean;
  isOverTarget(
    targetId: string | undefined,
    options?: {
      shallow?: boolean;
    },
  ): boolean;
  isCancelled(): boolean;
  getItemType(): Identifier | undefined;
  getItem(): any;
  getSourceId(): string | undefined;
  getTargetIds(): string[];
  getDropResult(): any;
  didDrop(): boolean;
  getDragEvent(): DragEvent | undefined;
  getOperation(): DragOperationWithType | undefined;
  beginDrag(
    sourceIds: string | string[],
    operation: DragOperationWithType | undefined,
    x: number,
    y: number,
    pageX: number,
    pageY: number,
  ): void;
  hover(targetIds: string[]): void;
  endDrag(): Promise<void>;
  drag(x: number, y: number, pageX: number, pageY: number): void;
  drop(): void;
  cancel(): boolean;
}

export type DndStore = {
  dndManager: DndManager;
};

// TODO address type such that useRef work without cast to any
export type DragElementWrapper = (elementOrNode: Element | null) => void;
// | React.RefObject<Element>;

export type ConnectDragSource = DragElementWrapper;
export type ConnectDropTarget = DragElementWrapper;

export type DragSpecOperationType<T extends DragOperationWithType> =
  | T
  | { [ModifierFlags: number]: T };

export interface DragSourceSpec<
  DragObject extends DragObjectWithType = DragObjectWithType,
  DragSpecOperation extends DragSpecOperationType<DragOperationWithType> = DragSpecOperationType<
    DragOperationWithType
  >,
  DropResult = any,
  CollectedProps extends {} = {},
  Props extends {} = {}
> {
  item: DragObject;
  operation?: ((monitor: DragSourceMonitor, props: Props) => DragSpecOperation) | DragSpecOperation;
  begin?: (monitor: DragSourceMonitor, props: Props) => any;
  drag?: (event: DragEvent, monitor: DragSourceMonitor, props: Props) => void;
  end?: (
    dropResult: DropResult | undefined,
    monitor: DragSourceMonitor,
    props: Props,
  ) => void | Promise<void>;
  canDrag?: boolean | ((monitor: DragSourceMonitor, props: Props) => boolean);
  collect?: (monitor: DragSourceMonitor, props: Props) => CollectedProps;
  canCancel?: boolean | ((monitor: DragSourceMonitor, props: Props) => boolean);
}

export type DropTargetSpec<
  DragObject,
  DropResult,
  CollectedProps extends {} = {},
  Props extends {} = {}
> = {
  accept: TargetType;
  dropHint?:
    | string
    | ((item: DragObject, monitor: DropTargetMonitor, props: Props) => string | undefined);
  hitTest?: (x: number, y: number, props: Props) => boolean;
  drop?: (item: DragObject, monitor: DropTargetMonitor, props: Props) => DropResult | undefined;
  hover?: (item: DragObject, monitor: DropTargetMonitor, props: Props) => void;
  canDrop?: boolean | ((item: DragObject, monitor: DropTargetMonitor, props: Props) => boolean);
  collect?: (monitor: DropTargetMonitor, props: Props) => CollectedProps;
};

export interface HandlerManager {
  receiveHandlerId: (handlerId: string | undefined) => void;
  getHandlerId: () => string | undefined;
}

export interface DragSourceMonitor extends HandlerManager {
  getDropHints(): string[];
  canDrag(): boolean;
  isCancelled(): boolean;
  isDragging(): boolean;
  getItemType(): Identifier | undefined;
  getItem(): any;
  getDropResult(): any;
  didDrop(): boolean;
  getDragEvent(): DragEvent | undefined;
  getOperation(): DragOperationWithType | undefined;
}

export interface DropTargetMonitor extends HandlerManager {
  canDrop(): boolean;
  isCancelled(): boolean;
  isDragging(): boolean;
  isOver(options?: { shallow?: boolean }): boolean;
  hasDropTarget(): boolean;
  getDropHints(): string[];
  getItemType(): Identifier | undefined;
  getItem(): any;
  getDropResult(): any;
  didDrop(): boolean;
  getDragEvent(): DragEvent | undefined;
  getOperation(): DragOperationWithType | undefined;
}
