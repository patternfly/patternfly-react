import * as React from 'react';
import { observer } from 'mobx-react';
import { useDndDrag } from './useDndDrag';
import {
  ConnectDragSource,
  DragObjectWithType,
  DragOperationWithType,
  DragSourceSpec,
  DragSpecOperationType
} from './dnd-types';

export interface WithSourceDragProps {
  sourceDragRef: ConnectDragSource;
}

export const withSourceDrag = <
  DragObject extends DragObjectWithType = DragObjectWithType,
  DropResult = any,
  CollectedProps extends {} = {},
  Props extends {} = {}
>(
  spec: DragSourceSpec<DragObject, DragSpecOperationType<DragOperationWithType>, DropResult, CollectedProps, Props>
) => <P extends WithSourceDragProps & CollectedProps & Props>(WrappedComponent: React.ComponentType<P>) => {
  const Component: React.FunctionComponent<Omit<P, keyof WithSourceDragProps & CollectedProps>> = props => {
    // TODO fix cast to any
    const [dndDragProps, dndDragRef] = useDndDrag(spec, props as any);
    return <WrappedComponent {...(props as any)} sourceDragRef={dndDragRef} {...dndDragProps} />;
  };
  Component.displayName = `withSourceDrag(${WrappedComponent.displayName || WrappedComponent.name})`;
  return observer(Component);
};

export interface WithTargetDragProps {
  targetDragRef: ConnectDragSource;
}

export const withTargetDrag = <
  DragObject extends DragObjectWithType = DragObjectWithType,
  DropResult = any,
  CollectedProps extends {} = {},
  Props extends {} = {}
>(
  spec: DragSourceSpec<DragObject, DragSpecOperationType<DragOperationWithType>, DropResult, CollectedProps, Props>
) => <P extends WithSourceDragProps & CollectedProps & Props>(WrappedComponent: React.ComponentType<P>) => {
  const Component: React.FunctionComponent<Omit<P, keyof WithSourceDragProps & CollectedProps>> = props => {
    // TODO fix cast to any
    const [dndDragProps, dndDragRef] = useDndDrag(spec, props as any);
    return <WrappedComponent {...(props as any)} targetDragRef={dndDragRef} {...dndDragProps} />;
  };
  Component.displayName = `withTargetDrag(${WrappedComponent.displayName || WrappedComponent.name})`;
  return observer(Component);
};
