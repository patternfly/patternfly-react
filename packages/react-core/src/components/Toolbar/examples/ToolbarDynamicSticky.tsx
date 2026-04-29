import { useState, useRef } from 'react';
import {
  Toolbar,
  ToolbarItem,
  ToolbarContent,
  SearchInput,
  Checkbox,
  useIsStuckFromScrollParent
} from '@patternfly/react-core';

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
