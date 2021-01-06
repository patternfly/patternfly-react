import { useLayoutEffect, useState, useCallback, RefObject } from 'react';

export interface ResizeObserverEntry {
  target: HTMLElement;
  contentRect: DOMRectReadOnly;
}

export const useResizeObserver = (ref: RefObject<HTMLElement>, callback?: (entry: DOMRectReadOnly) => void) => {
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();

  const handleResize = useCallback(
    (entries: ResizeObserverEntry[]) => {
      if (!Array.isArray(entries)) {
        return;
      }

      const entry = entries[0];
      setWidth(entry.contentRect.width);
      setHeight(entry.contentRect.height);

      if (callback) {
        callback(entry.contentRect);
      }
    },
    [callback]
  );

  useLayoutEffect(() => {
    if (!ref.current) {
      return;
    }

    let RO = new ResizeObserver((entries: ResizeObserverEntry[]) => handleResize(entries));
    RO.observe(ref.current);

    return () => {
      RO.disconnect();
      RO = null;
    };
  }, [ref]);

  return [width, height];
};
