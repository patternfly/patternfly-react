// import { /* sortable, */ Td } from '@patternfly/react-table';
import * as React from 'react';
import { FilterItem } from '../list-view/ListView';
import { TableColumn } from './VirtualizedTableBody';

export const testData: TableTestItem[] = [
  {
    name: 'name-Y',
    prs: 'prs-Y',
    branches: 'branches-Y',
    workspaces: 3
  },
  {
    name: 'name-Z',
    prs: 'prs-Z',
    branches: 'branches-Z',
    workspaces: 1
  },
  {
    name: 'name-X',
    prs: 'prs-X',
    branches: 'branches-X',
    workspaces: 2
  }
];

export const testFilters: FilterItem[] = [
  {
    id: 'name',
    label: 'Name'
  },
  {
    id: 'branches',
    label: 'Branches'
  },
  {
    id: 'workspaces',
    label: 'Workspaces'
  }
];

export const testColumns: TableColumn<TableTestItem>[] = [
  {
    title: 'Name',
    id: 'name',
    // transforms: [sortable],
    sort: 'name'
  },
  {
    title: 'PRs',
    id: 'prs',
    sort: 'prs'
  },
  {
    title: 'Branches',
    id: 'branches'
  },
  {
    title: 'Workspaces',
    id: 'workspaces',
    sort: 'workspaces'
  }
];

interface RowProps<D> {
  obj: D;
  index: number;
}

export interface TableTestItem {
  name: string;
  prs: string;
  branches: string;
  workspaces: number;
}

export const TestRow: React.FC<RowProps<TableTestItem>> = ({ obj, index }) => (
  <>
    <td data-testid={`col-name-${index}`} /* dataLabel={obj.name}*/>{obj.name}</td>
    <td data-testid={`col-prs-${index}`} /* </>dataLabel={obj.prs}*/>{obj.prs}</td>
    <td data-testid={`col-branches-${index}`} /* dataLabel={obj.branches}*/>{obj.branches}</td>
    <td data-testid={`col-workspaces-${index}`} /* dataLabel={String(obj.workspaces)}*/>{obj.workspaces}</td>
  </>
);
TestRow.displayName = 'TestRow';
