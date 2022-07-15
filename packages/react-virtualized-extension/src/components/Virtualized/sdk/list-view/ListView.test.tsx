import { screen, render, fireEvent } from '@testing-library/react';
import * as React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { testData as data, TestRow as Row, testColumns as columns, testFilters } from '../table/test-data';
import ListView, { filterDefault } from './ListView';

describe('TableView', () => {
  it('should render with data', () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: '/hac' }]}>
        <div style={{ overflow: 'scroll' }}>
          <ListView
            data={data}
            columns={columns}
            Row={Row}
            filters={testFilters}
            loaded
            isRowSelected={undefined}
            onSelect={undefined}
            onFilter={undefined}
            loadError={undefined}
            CustomEmptyState={undefined}
            emptyStateDescription={undefined}
            CustomNoDataEmptyState={undefined}
            aria-label={undefined}
          />
        </div>
      </MemoryRouter>
    );
    data.forEach((item, index) => {
      expect(screen.getByTestId(`col-name-${index}`).textContent).toEqual(item.name);
      expect(screen.getByTestId(`col-prs-${index}`).textContent).toEqual(item.prs);
      expect(screen.getByTestId(`col-workspaces-${index}`).textContent).toEqual(String(item.workspaces));
      expect(screen.getByTestId(`col-branches-${index}`).textContent).toEqual(item.branches);
    });
  });

  it('should show/hide chips & clear all button on search/clear', () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: '/hac' }]}>
        <div style={{ overflow: 'scroll' }}>
          <ListView
            data={data}
            columns={columns}
            Row={Row}
            filters={testFilters}
            loaded
            isRowSelected={undefined}
            onSelect={undefined}
            onFilter={undefined}
            loadError={undefined}
            CustomEmptyState={undefined}
            emptyStateDescription={undefined}
            CustomNoDataEmptyState={undefined}
            aria-label={undefined}
          />
        </div>
      </MemoryRouter>
    );
    data.forEach((item, index) => {
      expect(screen.getByTestId(`col-name-${index}`).textContent).toEqual(item.name);
      expect(screen.getByTestId(`col-prs-${index}`).textContent).toEqual(item.prs);
      expect(screen.getByTestId(`col-workspaces-${index}`).textContent).toEqual(String(item.workspaces));
      expect(screen.getByTestId(`col-branches-${index}`).textContent).toEqual(item.branches);
    });
    expect(screen.queryByText('X')).not.toBeInTheDocument();
    expect(screen.queryByText('Clear filters')).not.toBeInTheDocument();
    fireEvent.change(screen.getByPlaceholderText('Filter by Name'), {
      target: { value: 'X' }
    });
    expect(screen.getByText('X')).toBeInTheDocument();
    expect(screen.getByText('Clear filters')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Clear filters'));
    expect(screen.queryByText('X')).not.toBeInTheDocument();
    expect(screen.queryByText('Clear filters')).not.toBeInTheDocument();
  });

  it('should call onFilter if passed', () => {
    const onFilter = jest.fn();
    render(
      <MemoryRouter initialEntries={[{ pathname: '/hac' }]}>
        <div style={{ overflow: 'scroll' }}>
          <ListView
            data={data}
            columns={columns}
            Row={Row}
            filters={testFilters}
            onFilter={onFilter}
            loaded
            isRowSelected={undefined}
            onSelect={undefined}
            loadError={undefined}
            CustomEmptyState={undefined}
            emptyStateDescription={undefined}
            CustomNoDataEmptyState={undefined}
            aria-label={undefined}
          />
        </div>
      </MemoryRouter>
    );
    expect(onFilter).toHaveBeenCalledTimes(1);
    fireEvent.change(screen.getByPlaceholderText('Filter by Name'), {
      target: { value: 'X' }
    });
    expect(onFilter).toHaveBeenCalledTimes(2);
  });

  it('should be able to toggle filters', () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: '/hac' }]}>
        <div style={{ overflow: 'scroll' }}>
          <ListView
            data={data}
            columns={columns}
            Row={Row}
            filters={testFilters}
            loaded
            isRowSelected={undefined}
            onSelect={undefined}
            onFilter={undefined}
            loadError={undefined}
            CustomEmptyState={undefined}
            emptyStateDescription={undefined}
            CustomNoDataEmptyState={undefined}
            aria-label={undefined}
          />
        </div>
      </MemoryRouter>
    );
    expect(screen.getByPlaceholderText('Filter by Name')).toBeVisible();
    fireEvent.click(screen.getAllByRole('button')[0]);
    fireEvent.click(screen.getAllByRole('option')[1]);
    expect(screen.queryByPlaceholderText('Filter by Name')).not.toBeInTheDocument();
    expect(screen.getByPlaceholderText('Filter by Branches')).toBeInTheDocument();
  });

  it('should filter rows correctly by default', () => {
    const filteredName = filterDefault([...data], {
      name: ['name-X'],
      branches: [],
      workspaces: []
    });
    expect(filteredName.length).toEqual(1);
    expect(filteredName[0].name).toEqual(data[2].name);
    const filteredNameBranches = filterDefault([...data], {
      name: ['name-X'],
      branches: ['invalid-value'],
      workspaces: []
    });
    expect(filteredNameBranches.length).toEqual(0);
  });
});
