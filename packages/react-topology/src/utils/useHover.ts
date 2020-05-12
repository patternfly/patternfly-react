import * as React from 'react';
import useCallbackRef from './useCallbackRef';

const useHover = <T extends Element>(
  delayIn: number = 200,
  delayOut: number = 200
): [boolean, (node: T) => (() => void) | undefined] => {
  const [hover, setHover] = React.useState<boolean>(false);
  const unmountRef = React.useRef(false);

  // need to ensure we do not start the unset timer on unmount
  React.useEffect(
    () => () => {
      unmountRef.current = true;
    },
    []
  );

  // The unset handle needs to be referred by listeners in different closures.
  const unsetHandle = React.useRef<number>();

  const callbackRef = useCallbackRef(
    React.useCallback(
      (node: T) => {
        if (node) {
          // store locally instead of a ref because it only needs to be referred by inner closures
          let delayHandle: any;

          const delayedStateChange = (newState: boolean, delay: number) => {
            clearTimeout(unsetHandle.current);
            clearTimeout(delayHandle);

            if (delay != null) {
              delayHandle = window.setTimeout(() => {
                clearTimeout(unsetHandle.current);
                setHover(newState);
              }, delay);
            } else {
              setHover(newState);
            }
          };

          const onMouseEnter = () => {
            delayedStateChange(true, delayIn);
          };

          const onMouseLeave = () => {
            delayedStateChange(false, delayOut);
          };

          node.addEventListener('mouseenter', onMouseEnter);
          node.addEventListener('mouseleave', onMouseLeave);

          return () => {
            node.removeEventListener('mouseenter', onMouseEnter);
            node.removeEventListener('mouseleave', onMouseLeave);
            clearTimeout(delayHandle);
            if (!unmountRef.current) {
              // Queue the unset in case reattaching to a new node in the same location.
              // This can happen with layers. Rendering a node to a new layer will unmount the old node
              // and remount a new node at the same location. This will prevent flickering and getting
              // stuck in a hover state.
              unsetHandle.current = window.setTimeout(() => setHover(false), Math.max(delayIn, delayOut));
            }
          };
        }
        return undefined;
      },
      [delayIn, delayOut]
    )
  );

  return [hover, callbackRef];
};

export default useHover;
