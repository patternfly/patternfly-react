import * as React from 'react';

export function withInnerRef<R, P extends { innerRef?: React.Ref<R> }>(
  WrappedComponent: React.ComponentType<P>
): React.ForwardRefExoticComponent<React.PropsWithoutRef<P> & React.RefAttributes<R>> {
  return React.forwardRef<R, P>((props, ref) => <WrappedComponent {...props} innerRef={ref} />);
}
