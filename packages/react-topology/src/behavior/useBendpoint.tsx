import * as React from 'react';
import { action } from 'mobx';
import * as d3 from 'd3';
import { observer } from 'mobx-react';
import Point from '../geom/Point';
import ElementContext from '../utils/ElementContext';
import { isEdge } from '../types';
import {
  ConnectDragSource,
  DragSourceSpec,
  DragObjectWithType,
  DragSpecOperationType,
  DragOperationWithType,
} from './dnd-types';
import { useDndDrag, WithDndDragProps } from './useDndDrag';

export type WithBendpoint = {
  sourceDragRef: ConnectDragSource;
};

export const useBendpoint = <DropResult, CollectedProps, Props = {}>(
  point: Point,
  spec?: Omit<
    DragSourceSpec<
      DragObjectWithType,
      DragSpecOperationType<DragOperationWithType>,
      DropResult,
      CollectedProps
    >,
    'type'
  >,
  props?: Props,
): [CollectedProps, ConnectDragSource] => {
  const element = React.useContext(ElementContext);
  if (!isEdge(element)) {
    throw new Error('useBendpoint must be used within the scope of an Edge');
  }
  const elementRef = React.useRef(element);
  elementRef.current = element;
  const pointRef = React.useRef(point);
  pointRef.current = point;

  const [connect, dragRef] = useDndDrag(
    React.useMemo(() => {
      const sourceSpec: DragSourceSpec<any, any, any, any, Props> = {
        item: { type: '#useBendpoint#' },
        begin: (monitor, p) => {
          return spec && spec.begin ? spec.begin(monitor, p) : undefined;
        },
        drag: (event, monitor, p) => {
          // assumes the edge is in absolute coordinate space
          pointRef.current.translate(event.dx, event.dy);
          elementRef.current.raise();
          spec && spec.drag && spec.drag(event, monitor, p);
        },
        canDrag: spec ? spec.canDrag : undefined,
        end: spec ? spec.end : undefined,
        collect: spec ? spec.collect : undefined,
      };
      return sourceSpec;
    }, [spec]),
    props,
  );

  // argh react events don't play nice with d3 pan zoom double click event
  const ref = React.useCallback(
    (node) => {
      d3.select(node).on(
        'click',
        action(() => {
          if (d3.event.shiftKey) {
            d3.event.stopPropagation();
            elementRef.current.removeBendpoint(pointRef.current);
          }
        }),
      );
      dragRef(node);
    },
    [dragRef],
  );
  return [connect, ref];
};

type HocProps = {
  point: Point;
};

export type WithBendpointProps = {
  dragNodeRef: WithDndDragProps['dndDragRef'];
};

export const WithBendpoint = <DropResult, CollectedProps, Props = {}>(
  spec?: Omit<
    DragSourceSpec<
      DragObjectWithType,
      DragSpecOperationType<DragOperationWithType>,
      DropResult,
      CollectedProps,
      Props
    >,
    'type'
  >,
) => <P extends WithBendpointProps & CollectedProps & Props>(
  WrappedComponent: React.ComponentType<P>,
) => {
  const Component: React.FC<Omit<P, keyof WithBendpointProps> & HocProps> = (props) => {
    const [dragProps, bendpointRef] = useBendpoint(props.point, spec, props);
    return <WrappedComponent {...(props as any)} bendpointRef={bendpointRef} {...dragProps} />;
  };
  return observer(Component);
};
