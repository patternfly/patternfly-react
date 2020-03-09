import * as React from 'react';

/**
 * @param {React.ComponentType} WrappedComponent - React component
 */
export function withInnerRef<R, P extends { innerRef?: React.Ref<R> }>(
  WrappedComponent: React.ComponentType<P>
): React.ForwardRefExoticComponent<React.PropsWithoutRef<P> & React.RefAttributes<R>> {
  // eslint-disable-next-line react/display-name
  return React.forwardRef<R, P>((props, ref) => <WrappedComponent {...props} innerRef={ref} />);
}
