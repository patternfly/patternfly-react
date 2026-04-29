/** Custom React hook to track whether a scroll parent has been scrolled (scrollTop > 0).
 * Useful for applying dynamic sticky styling when an element becomes "stuck" in a scroll container.
 */
import { useLayoutEffect, useState } from 'react';

export function useIsStuckFromScrollParent({
  shouldTrack,
  scrollParentRef,
  position = 'top'
}: {
  /** Indicates whether to track the scroll top position of the scroll parent element */
  shouldTrack: boolean;
  /** Reference to the scroll parent element */
  scrollParentRef: React.RefObject<any>;
  /** Whether "stuck" should be measured from top or bottom edge */
  position?: 'top' | 'bottom';
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
      if (position === 'bottom') {
        setIsStuck(scrollElement.scrollTop + scrollElement.clientHeight < scrollElement.scrollHeight);
        return;
      }
      setIsStuck(scrollElement.scrollTop > 0);
    };
    syncFromScroll();
    scrollElement.addEventListener('scroll', syncFromScroll, { passive: true });
    return () => scrollElement.removeEventListener('scroll', syncFromScroll);
  }, [shouldTrack, scrollParentRef, position]);

  return isStuck;
}
