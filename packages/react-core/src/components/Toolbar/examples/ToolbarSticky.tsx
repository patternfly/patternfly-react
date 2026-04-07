import { Fragment, useLayoutEffect, useRef, useState } from 'react';
import { Toolbar, ToolbarItem, ToolbarContent, SearchInput, Checkbox } from '@patternfly/react-core';

const useTheadPinnedFromScrollParent = ({ track, scrollRootRef, theadRef }): { isPinned } => {
  const [isPinned, setIsPinned] = useState(false);

  useLayoutEffect(() => {
    if (!track) {
      setIsPinned(false);
      return;
    }

    const scrollRoot = scrollRootRef.current;
    if (!scrollRoot) {
      setIsPinned(false);
      return;
    }

    const syncFromScroll = () => {
      setIsPinned(scrollRoot.scrollTop > 0);
    };
    syncFromScroll();
    scrollRoot.addEventListener('scroll', syncFromScroll, { passive: true });
    return () => scrollRoot.removeEventListener('scroll', syncFromScroll);
  }, [track, scrollRootRef, theadRef]);

  return { isPinned };
};

export const ToolbarSticky = () => {
  const [isSticky, setIsSticky] = useState(true);
  const [showEvenOnly, setShowEvenOnly] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  const array = Array.from(Array(30), (_, x) => x); // create array of numbers from 1-30 for demo purposes
  const numbers = showEvenOnly ? array.filter((number) => number % 2 === 0) : array;

  const innerScrollRef = useRef<HTMLDivElement>(null);
  const toolbarRef = useRef<HTMLDivElement>(null);
  const { isPinned } = useTheadPinnedFromScrollParent({
    track: true,
    scrollRootRef: innerScrollRef,
    theadRef: toolbarRef
  });

  return (
    <Fragment>
      <div style={{ overflowY: 'scroll', height: '200px' }} ref={innerScrollRef}>
        <Toolbar
          className={isPinned ? 'PINNED' : ''}
          id="toolbar-sticky"
          inset={{ default: 'insetNone' }}
          isSticky={isSticky}
          ref={toolbarRef}
        >
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
      <Checkbox
        label="Is toolbar sticky"
        isChecked={isSticky}
        onChange={(_event, checked) => setIsSticky(checked)}
        id="isStickyCheckbox"
      />
    </Fragment>
  );
};
