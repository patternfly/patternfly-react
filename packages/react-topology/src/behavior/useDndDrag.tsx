import * as React from 'react';
import * as d3 from 'd3';
import { action, computed, comparer, flow } from 'mobx';
import { observer } from 'mobx-react';
import ElementContext from '../utils/ElementContext';
import useCallbackRef from '../utils/useCallbackRef';
import {
  DragSourceSpec,
  ConnectDragSource,
  DragObjectWithType,
  DragSourceMonitor,
  Identifier,
  DragEvent,
  DragSpecOperationType,
  DragSource,
  DragOperationWithType,
} from './dnd-types';
import { useDndManager } from './useDndManager';

export const Modifiers = {
  DEFAULT: 0,
  ALT: 0x01,
  CTRL: 0x02,
  META: 0x04,
  SHIFT: 0x08,
};

const getModifiers = (event: MouseEvent | TouchEvent | KeyboardEvent): number => {
  let modifiers = Modifiers.DEFAULT;
  if (event.altKey) {
    // eslint-disable-next-line no-bitwise
    modifiers |= Modifiers.ALT;
  }
  if (event.ctrlKey) {
    // eslint-disable-next-line no-bitwise
    modifiers |= Modifiers.CTRL;
  }
  if (event.metaKey) {
    // eslint-disable-next-line no-bitwise
    modifiers |= Modifiers.META;
  }
  if (event.shiftKey) {
    // eslint-disable-next-line no-bitwise
    modifiers |= Modifiers.SHIFT;
  }
  return modifiers;
};

const getOperation = (
  operation: DragSpecOperationType<DragOperationWithType> | undefined,
): DragOperationWithType | undefined => {
  if (!operation) {
    return undefined;
  }
  if (operation.hasOwnProperty('type')) {
    return operation as DragOperationWithType;
  }
  return (
    operation[getModifiers((d3.event && d3.event.sourceEvent) || d3.event)] ||
    operation[Modifiers.DEFAULT]
  );
};

const hasOperation = (
  operation: DragSpecOperationType<DragOperationWithType> | undefined,
): boolean => {
  return !!(operation && (operation.hasOwnProperty('type') || Object.keys(operation).length > 0));
};

const EMPTY_PROPS = Object.freeze({});

export const useDndDrag = <
  DragObject extends DragObjectWithType = DragObjectWithType,
  DropResult = any,
  CollectedProps extends {} = {},
  Props extends {} = {}
>(
  spec: DragSourceSpec<
    DragObject,
    DragSpecOperationType<DragOperationWithType>,
    DropResult,
    CollectedProps,
    Props
  >,
  props?: Props,
): [CollectedProps, ConnectDragSource] => {
  const specRef = React.useRef(spec);
  specRef.current = spec;

  const propsRef = React.useRef<Props>(props != null ? props : (EMPTY_PROPS as Props));
  propsRef.current = props != null ? props : (EMPTY_PROPS as Props);

  const dndManager = useDndManager();

  const element = React.useContext(ElementContext);
  const elementRef = React.useRef(element);
  elementRef.current = element;

  const idRef = React.useRef<string>();

  // source monitor
  const monitor = React.useMemo(() => {
    const sourceMonitor: DragSourceMonitor = {
      getHandlerId: (): string | undefined => {
        return idRef.current;
      },
      receiveHandlerId: (sourceId: string | undefined): void => {
        idRef.current = sourceId;
      },
      getDropHints: (): string[] => {
        return dndManager.getDropHints();
      },
      canDrag: (): boolean => {
        return dndManager.canDragSource(idRef.current);
      },
      isDragging: (): boolean => {
        return dndManager.isDraggingSource(idRef.current);
      },
      getItemType: (): Identifier | undefined => {
        return dndManager.getItemType();
      },
      getItem: (): any => {
        return dndManager.getItem();
      },
      getDropResult: (): any => {
        return dndManager.getDropResult();
      },
      didDrop: (): boolean => {
        return dndManager.didDrop();
      },
      getDragEvent: (): DragEvent | undefined => {
        return dndManager.getDragEvent();
      },
      getOperation: (): DragOperationWithType | undefined => {
        return dndManager.getOperation();
      },
      isCancelled: (): boolean => {
        return dndManager.isCancelled();
      },
    };
    return sourceMonitor;
  }, [dndManager]);

  const refCallback = useCallbackRef(
    React.useCallback(
      (node: SVGElement | null) => {
        if (node) {
          let operationChangeEvents:
            | {
                begin: [number, number, number, number];
                drag: [number, number, number, number];
              }
            | undefined;
          let operation: DragSpecOperationType<DragOperationWithType> | undefined;
          d3.select(node).call(
            d3
              .drag()
              .container(
                // TODO bridge the gap between scene tree and dom tree
                () =>
                  d3
                    .select(node.ownerSVGElement)
                    .select('[data-surface="true"]')
                    .node() as any,
              )
              .on('start', function() {
                operation =
                  typeof specRef.current.operation === 'function'
                    ? specRef.current.operation(monitor, propsRef.current)
                    : specRef.current.operation;
                const updateOperation = async () => {
                  if (operation && idRef.current) {
                    const op = getOperation(operation);
                    if (dndManager.getOperation() !== op) {
                      // restart the drag with the new operation
                      if (dndManager.isDragging()) {
                        // copy the event otherwise it will be mutated by #cancel()
                        const event = { ...(dndManager.getDragEvent() as DragEvent) };
                        const cancelled = dndManager.cancel();
                        operationChangeEvents = {
                          begin: [
                            cancelled ? event.initialX : event.x,
                            cancelled ? event.initialY : event.y,
                            cancelled ? event.initialPageX : event.pageX,
                            cancelled ? event.initialPageY : event.pageY,
                          ],
                          drag: [event.x, event.y, event.pageX, event.pageY],
                        };
                        await dndManager.endDrag();
                      }
                      if (op && operationChangeEvents) {
                        dndManager.beginDrag(idRef.current, op, ...operationChangeEvents.begin);
                        dndManager.drag(...operationChangeEvents.drag);
                        operationChangeEvents = undefined;
                      }
                    }
                  }
                };
                d3.select(node.ownerDocument)
                  .on(
                    'keydown.useDndDrag',
                    flow(function*() {
                      const e = d3.event as KeyboardEvent;
                      if (e.key === 'Escape') {
                        if (dndManager.isDragging() && dndManager.cancel()) {
                          operationChangeEvents = undefined;
                          d3.select(d3.event.view).on('.drag', null);
                          d3.select(node.ownerDocument).on('.useDndDrag', null);
                          yield dndManager.endDrag();
                        }
                      } else {
                        yield updateOperation();
                      }
                    }),
                  )
                  .on(
                    'keyup.useDndDrag',
                    flow(function*() {
                      yield updateOperation();
                    }),
                  );
              })
              .on(
                'drag',
                action(() => {
                  const { pageX, pageY } = d3.event.sourceEvent;
                  const { x, y } = d3.event;
                  if (dndManager.isDragging()) {
                    dndManager.drag(x, y, pageX, pageY);
                  } else if (operationChangeEvents) {
                    operationChangeEvents.drag = [x, y, pageX, pageY];
                  } else {
                    const op = getOperation(operation);
                    if (op || !hasOperation(operation)) {
                      if (idRef.current) {
                        dndManager.beginDrag(idRef.current, op, x, y, pageX, pageY);
                      }
                    } else {
                      operationChangeEvents = {
                        begin: [x, y, pageX, pageY],
                        drag: [x, y, pageX, pageY],
                      };
                    }
                  }
                }),
              )
              .on(
                'end',
                flow(function*() {
                  operationChangeEvents = undefined;
                  operation = undefined;
                  d3.select(node.ownerDocument).on('.useDndDrag', null);
                  if (dndManager.isDragging()) {
                    dndManager.drop();
                    yield dndManager.endDrag();
                  }
                }),
              )
              .filter(
                () =>
                  !d3.event.ctrlKey && !d3.event.button && dndManager.canDragSource(idRef.current),
              ),
          );
        }
        return () => {
          node && d3.select(node).on('mousedown.drag', null);
        };
      },
      [dndManager, monitor],
    ),
  );

  React.useEffect(() => {
    const dragSource: DragSource = {
      type: spec.item.type,
      canCancel: () =>
        typeof specRef.current.canCancel === 'boolean'
          ? specRef.current.canCancel
          : typeof specRef.current.canCancel === 'function'
          ? specRef.current.canCancel(monitor, propsRef.current)
          : true,
      canDrag: () =>
        typeof specRef.current.canDrag === 'boolean'
          ? specRef.current.canDrag
          : typeof specRef.current.canDrag === 'function'
          ? specRef.current.canDrag(monitor, propsRef.current)
          : true,
      beginDrag: () =>
        specRef.current.begin ? specRef.current.begin(monitor, propsRef.current) : undefined,
      drag: () => {
        if (specRef.current.drag) {
          const event = monitor.getDragEvent();
          if (event) {
            specRef.current.drag(event, monitor, propsRef.current);
          }
        }
      },
      endDrag: () =>
        specRef.current.end
          ? specRef.current.end(monitor.getDropResult(), monitor, propsRef.current)
          : undefined,
    };
    const [sourceId, unregister] = dndManager.registerSource(dragSource);
    monitor.receiveHandlerId(sourceId);
    return unregister;
  }, [spec.item.type, dndManager, monitor]);

  const collected = React.useMemo(
    () =>
      computed(
        () =>
          spec.collect ? spec.collect(monitor, propsRef.current) : (({} as any) as CollectedProps),
        { equals: comparer.shallow },
      ),
    [monitor, spec],
  );

  return [collected.get(), refCallback];
};

export type WithDndDragProps = {
  dndDragRef: ConnectDragSource;
};

export const withDndDrag = <
  DragObject extends DragObjectWithType = DragObjectWithType,
  DropResult = any,
  CollectedProps extends {} = {},
  Props extends {} = {}
>(
  spec: DragSourceSpec<
    DragObject,
    DragSpecOperationType<DragOperationWithType>,
    DropResult,
    CollectedProps,
    Props
  >,
) => <P extends WithDndDragProps & CollectedProps & Props>(
  WrappedComponent: React.ComponentType<P>,
) => {
  const Component: React.FC<Omit<P, keyof WithDndDragProps & CollectedProps>> = (props) => {
    // TODO fix cast to any
    const [dndDragProps, dndDragRef] = useDndDrag(spec, props as any);
    return <WrappedComponent {...(props as any)} {...dndDragProps} dndDragRef={dndDragRef} />;
  };
  return observer(Component);
};
