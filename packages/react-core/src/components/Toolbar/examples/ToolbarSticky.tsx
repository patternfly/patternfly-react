import React from 'react';
import { Toolbar, ToolbarItem, ToolbarContent, SearchInput, Checkbox } from '@patternfly/react-core';

export const ToolbarSticky: React.FunctionComponent = () => {
  const [isSticky, setIsSticky] = React.useState(true);
  const [showEvenOnly, setShowEvenOnly] = React.useState(true);
  const array = Array.from(Array(30), (_, x) => x); // create array of numbers from 1-30 for demo purposes
  const numbers = showEvenOnly ? array.filter(number => number % 2 === 0) : array;

  return (
    <React.Fragment>
      <div style={{ overflowY: 'scroll', height: '200px' }}>
        <Toolbar id="toolbar-sticky" inset={{ default: 'insetNone' }} isSticky={isSticky}>
          <ToolbarContent>
            <ToolbarItem>
              <SearchInput aria-label="Sticky example search input" />
            </ToolbarItem>
            <ToolbarItem>
              <Checkbox
                label="Show only even number items"
                isChecked={showEvenOnly}
                onChange={setShowEvenOnly}
                id="showOnlyEvenCheckbox"
              />
            </ToolbarItem>
          </ToolbarContent>
        </Toolbar>
        <ul>
          {numbers.map(number => (
            <li key={number}>{`item ${number}`}</li>
          ))}
        </ul>
      </div>
      <Checkbox label="Is toolbar sticky" isChecked={isSticky} onChange={setIsSticky} id="isStickyCheckbox" />
    </React.Fragment>
  );
};
