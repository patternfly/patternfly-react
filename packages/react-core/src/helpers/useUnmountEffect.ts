import { EffectCallback, useEffect, useRef } from 'react';

/**
 * A `useEffect`-like hook that only triggers when a component unmounts. Does not require a dependency list, as the effect callback will always be kept up to date.
 */
export function useUnmountEffect(effect: EffectCallback) {
  // Always use the latest effect callback so that it can reference the latest props and state.
  const effectRef = useRef(effect);
  effectRef.current = effect;

  // Trigger the effect callback when the component unmounts.
  useEffect(
    () => () => {
      effectRef.current();
    },
    []
  );
}
