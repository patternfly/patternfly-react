import { useRef, useCallback } from 'react';

/**
 * @param rawCallback
 */
export default function useCallbackRef<T extends (...args: any[]) => any>(rawCallback: T) {
  const cleanupRef = useRef<(() => any) | null>(null);
  const callback = useCallback<T>(
    (node => {
      if (cleanupRef.current) {
        cleanupRef.current();
        cleanupRef.current = null;
      }
      if (node) {
        cleanupRef.current = rawCallback(node);
      }
    }) as T,
    [rawCallback]
  );

  return callback;
}
