/** Custom React hook to track whether a scroll parent has been scrolled (scrollTop > 0).
 * Useful for applying dynamic sticky styling when an element becomes "stuck" in a scroll container.
 */
import { useLayoutEffect, useState } from 'react';

export function useIsStuckFromScrollParent({
  shouldTrack,
  scrollParentRef
}: {
  /** Indicates whether to track the scroll top position of the scroll parent element */
  shouldTrack: boolean;
  /** Reference to the scroll parent element */
  scrollParentRef: React.RefObject<any>;
}): boolean {
  const [isStuck, setIsStuck] = useState(false);

  useLayoutEffect(() => {
    if (!shouldTrack) {
      setIsStuck(false);
      return;
    }

    const scrollElement = scrollParentRef.current;
    if (!scrollElement) {
      setIsStuck(false);
      return;
    }

    const syncFromScroll = () => {
      setIsStuck(scrollElement.scrollTop > 0);
    };
    syncFromScroll();
    scrollElement.addEventListener('scroll', syncFromScroll, { passive: true });
    return () => scrollElement.removeEventListener('scroll', syncFromScroll);
  }, [shouldTrack, scrollParentRef]);

  return isStuck;
}
