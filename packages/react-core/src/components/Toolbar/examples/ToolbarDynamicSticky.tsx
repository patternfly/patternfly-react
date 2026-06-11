import { useLayoutEffect, useState, useRef } from 'react';
import { Toolbar, ToolbarItem, ToolbarContent, SearchInput, Checkbox } from '@patternfly/react-core';

const useIsStuckFromScrollParent = ({
  shouldTrack,
  scrollParentRef
}: {
  /** Indicates whether to track the scroll top position of the scroll parent element */
  shouldTrack: boolean;
  /** Reference to the scroll parent element */
  scrollParentRef: React.RefObject<any>;
}): boolean => {
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
};

export const ToolbarDynamicSticky = () => {
  const scrollParentRef = useRef<HTMLDivElement>(null);
  const isStickyStuck = useIsStuckFromScrollParent({ shouldTrack: true, scrollParentRef });
  const [showEvenOnly, setShowEvenOnly] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  const array = Array.from(Array(30), (_, x) => x); // create array of numbers from 1-30 for demo purposes
  const numbers = showEvenOnly ? array.filter((number) => number % 2 === 0) : array;

  return (
    <div id="dynamic-sticky-scroll-parent" ref={scrollParentRef} style={{ overflowY: 'scroll', height: '200px' }}>
      <Toolbar id="toolbar-dynamic-sticky" inset={{ default: 'insetNone' }} isStickyBase isStickyStuck={isStickyStuck}>
        <ToolbarContent>
          <ToolbarItem>
            <SearchInput
              aria-label="Sticky example search input"
              value={searchValue}
              onChange={(_event, value) => setSearchValue(value)}
              onClear={() => setSearchValue('')}
            />
          </ToolbarItem>
          <ToolbarItem alignSelf="center">
            <Checkbox
              label="Show only even number items"
              isChecked={showEvenOnly}
              onChange={(_event, checked) => setShowEvenOnly(checked)}
              id="showOnlyEvenCheckbox"
            />
          </ToolbarItem>
        </ToolbarContent>
      </Toolbar>
      <ul>
        {numbers.map((number) => (
          <li key={number}>{`item ${number}`}</li>
        ))}
      </ul>
    </div>
  );
};
