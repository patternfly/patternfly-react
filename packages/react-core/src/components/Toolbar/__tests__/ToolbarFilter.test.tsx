import { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { ToolbarContext } from '../ToolbarUtils';
import { ToolbarFilter } from '../ToolbarFilter';

describe('ToolbarFilter', () => {
  it('renders when ToolbarFilter is not under Toolbar or ToolbarContent (default context)', () => {
    const deleteLabel = jest.fn();
    const deleteLabelGroup = jest.fn();

    expect(() =>
      render(
        <ToolbarFilter
          labels={['one']}
          deleteLabel={deleteLabel}
          deleteLabelGroup={deleteLabelGroup}
          categoryName="Status"
        >
          filter content
        </ToolbarFilter>
      )
    ).not.toThrow();

    expect(screen.getByText('filter content')).toBeInTheDocument();
  });

  it('does not throw when labelGroupContentRef.current is still null while collapsed (listed filters)', () => {
    const labelGroupContentRef = createRef<HTMLDivElement>();
    expect(labelGroupContentRef.current).toBeNull();

    expect(() =>
      render(
        <ToolbarContext.Provider
          value={{
            isExpanded: false,
            toggleIsExpanded: () => {},
            labelGroupContentRef,
            updateNumberFilters: () => {},
            numberOfFilters: 0,
            clearAllFilters: () => {}
          }}
        >
          <ToolbarFilter labels={['one']} deleteLabel={jest.fn()} deleteLabelGroup={jest.fn()} categoryName="Status">
            filter content
          </ToolbarFilter>
        </ToolbarContext.Provider>
      )
    ).not.toThrow();

    expect(screen.getByText('filter content')).toBeInTheDocument();
  });
});
