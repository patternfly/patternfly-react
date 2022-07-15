import { render, screen, fireEvent } from '@testing-library/react';
import * as React from 'react';
import { TableTestItem } from './test-data';
import { testData as data, TestRow as Row, testColumns as columns } from './test-data';

import VirtualizedTable, { sortData } from './VirtualizedTable';

describe('VirtualizedTable', () => {
  const emptyData: TableTestItem[] = [];

  it('should render loading', () => {
    render(<VirtualizedTable data={emptyData} columns={columns} Row={Row} loaded={false} />);
    expect(screen.getByRole('progressbar')).toBeDefined();
  });

  it('should render empty', () => {
    render(<VirtualizedTable data={emptyData} columns={columns} Row={Row} loaded emptyStateDescription="No data" />);
    expect(screen.getByText('No data')).toBeDefined();
  });

  it('should not render without scrollElement', () => {
    render(<VirtualizedTable data={[...data]} columns={columns} Row={Row} loaded />);
    expect(screen.queryByTestId('col-name-0')).not.toBeInTheDocument();
    expect(screen.queryByTestId('col-prs-1')).not.toBeInTheDocument();
    expect(screen.queryByTestId('col-workspaces-2')).not.toBeInTheDocument();
  });

  it('should render with data, correct sort indicators and no checkboxes', () => {
    const { container } = render(
      <div style={{ overflow: 'scroll' }}>
        <VirtualizedTable data={[...data]} columns={columns} Row={Row} loaded />
      </div>
    );
    data.forEach((item, index) => {
      expect(screen.getByTestId(`col-name-${index}`).textContent).toEqual(item.name);
      expect(screen.getByTestId(`col-prs-${index}`).textContent).toEqual(item.prs);
      expect(screen.getByTestId(`col-workspaces-${index}`).textContent).toEqual(String(item.workspaces));
      expect(screen.getByTestId(`col-branches-${index}`).textContent).toEqual(item.branches);
    });
    expect(container.getElementsByClassName('pf-c-table__sort-indicator')).toHaveLength(3);
    expect(screen.queryByTestId('check-row-0')).toEqual(null);
    expect(screen.queryByTestId('check-all-rows')).toEqual(null);
    expect(screen.getByTestId('col-name-0').textContent).toEqual(data[0].name);
    fireEvent.click(screen.getAllByRole('button')[0]);
    expect(screen.getByTestId('col-name-0').textContent).toEqual(data[2].name);
    expect(screen.getByTestId('col-name-2').textContent).toEqual(data[1].name);
    fireEvent.click(screen.getAllByRole('button')[0]);
    expect(screen.getByTestId('col-name-0').textContent).toEqual(data[1].name);
    expect(screen.getByTestId('col-name-2').textContent).toEqual(data[2].name);
  });

  it('should sort columns correctly', () => {
    const sortedByNameAsc = [...data].sort((a, b) => sortData(a.name, b.name, 'asc'));
    const sortedByNameDesc = [...data].sort((a, b) => sortData(a.name, b.name, 'desc'));
    const sortedByWorkspacesAsc = [...data].sort((a, b) => sortData(a.workspaces, b.workspaces, 'asc'));
    const sortedByWorkspacesDesc = [...data].sort((a, b) => sortData(a.workspaces, b.workspaces, 'desc'));
    expect(sortedByNameAsc[0].name).toEqual(data[2].name);
    expect(sortedByNameAsc[2].name).toEqual(data[1].name);
    expect(sortedByNameDesc[0].name).toEqual(data[1].name);
    expect(sortedByNameDesc[2].name).toEqual(data[2].name);
    expect(sortedByWorkspacesAsc[0].workspaces).toEqual(data[1].workspaces);
    expect(sortedByWorkspacesAsc[2].workspaces).toEqual(data[0].workspaces);
    expect(sortedByWorkspacesDesc[0].workspaces).toEqual(data[0].workspaces);
    expect(sortedByWorkspacesDesc[2].workspaces).toEqual(data[1].workspaces);
  });

  it('should render with checkboxes when onSelect passed and call isRowSelected', () => {
    const isRowSelected = jest.fn();
    render(
      <div style={{ overflow: 'scroll' }}>
        <VirtualizedTable
          data={data}
          columns={columns}
          isRowSelected={isRowSelected}
          onSelect={() => null}
          Row={Row}
          loaded
        />
      </div>
    );
    data.forEach((item, index) => {
      expect(screen.getByTestId(`check-row-${index}`)).toBeInTheDocument();
    });
    expect(screen.getByTestId('check-all-rows')).toBeInTheDocument();
    expect(isRowSelected).toHaveBeenCalled();
  });

  it('should call onSelect on checkbox click', () => {
    const onSelect = jest.fn();
    render(
      <div style={{ overflow: 'scroll' }}>
        <VirtualizedTable
          data={data}
          columns={columns}
          isRowSelected={() => true}
          onSelect={onSelect}
          Row={Row}
          loaded
        />
      </div>
    );
    expect(onSelect).toHaveBeenCalledTimes(0);
    fireEvent.click(screen.getAllByRole('checkbox')[0]);
    expect(onSelect).toHaveBeenCalledTimes(1);
    fireEvent.click(screen.getAllByRole('checkbox')[2]);
    expect(onSelect).toHaveBeenCalledTimes(2);
  });

  it('should render all checkboxes checked correctly', () => {
    render(
      <div style={{ overflow: 'scroll' }}>
        <VirtualizedTable
          data={data}
          columns={columns}
          isRowSelected={() => true}
          onSelect={() => null}
          Row={Row}
          loaded
        />
      </div>
    );
    expect((screen.getAllByRole('checkbox')[0] as HTMLInputElement).checked).toEqual(true);
    data.forEach((value, index) => {
      expect((screen.getAllByRole('checkbox')[index + 1] as HTMLInputElement).checked).toEqual(true);
    });
  });

  it('should render some checkboxes checked correctly', () => {
    render(
      <div style={{ overflow: 'scroll' }}>
        <VirtualizedTable
          data={data}
          columns={columns}
          isRowSelected={item => item.name === data[0].name}
          onSelect={() => null}
          Row={Row}
          loaded
        />
      </div>
    );
    expect((screen.getAllByRole('checkbox')[0] as HTMLInputElement).checked).toEqual(false);
    data.forEach((item, index) => {
      expect((screen.getAllByRole('checkbox')[index + 1] as HTMLInputElement).checked).toEqual(
        item.name === data[0].name
      );
    });
  });
});
