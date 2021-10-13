import React from 'react';
import { Table, TableBody, TableHeader, TableVariant, TableProps, expandable } from '@patternfly/react-table';
import { Checkbox } from '@patternfly/react-core';

interface Repository {
  name: string;
  branches: string;
  prs: string;
  workspaces: string;
  details?: {
    detail1?: string;
    detail2?: string;
    detail3?: string;
    detailFormat: 0 | 1 | 2 | 3;
  };
}

export const ComposableTableExpandable: React.FunctionComponent = () => {
  // In real usage, this data would come from some external source like an API via props.
  const repositories: Repository[] = [
    { name: 'one', branches: 'two', prs: 'a', workspaces: 'four' },
    {
      name: 'parent 1',
      branches: 'two',
      prs: 'k',
      workspaces: 'four',
      // This `details` structure is just for this example. You can drive expanded content from any kind of data.
      details: { detailFormat: 0, detail1: 'single cell' }
    },
    {
      name: 'parent 2',
      branches: 'two',
      prs: 'b',
      workspaces: 'four',
      details: { detailFormat: 1, detail1: 'single cell - fullWidth' }
    },
    {
      name: 'parent 3',
      branches: '2',
      prs: 'b',
      workspaces: 'four',
      details: { detailFormat: 2, detail1: 'single cell - noPadding' }
    },
    {
      name: 'parent 4',
      branches: '2',
      prs: 'b',
      workspaces: 'four',
      details: { detailFormat: 3, detail1: 'single cell - fullWidth & noPadding' }
    },
    {
      name: 'parent 5',
      branches: '2',
      prs: 'b',
      workspaces: 'four',
      details: {
        detailFormat: 0,
        detail1: "spans 'Repositories and 'Branches'",
        detail2: "spans 'Pull requests' and 'Workspaces', and 'Last commit'"
      }
    },
    {
      name: 'parent 6',
      branches: '2',
      prs: 'b',
      workspaces: 'four',
      details: {
        detailFormat: 1,
        detail1: "fullWidth, spans the collapsible column and 'Repositories'",
        detail2: "fullWidth, spans 'Branches' and 'Pull requests'",
        detail3: 'fullWidth, spans the empty column'
      }
    }
  ];

  // In this example, expanded rows are tracked by the repo names from each row. This could be any unique identifier.
  // This is to prevent state from being based on row order index in case we later add sorting.
  // Note that this behavior is very similar to selection state.
  const initialExpandedRepoNames = repositories.filter(repo => !!repo.details).map(repo => repo.name); // Default to all expanded
  const [expandedRepoNames, setExpandedRepoNames] = React.useState<string[]>(initialExpandedRepoNames);
  // TODO remove this
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const setRepoExpanded = (repo: Repository, isExpanding = true) =>
    setExpandedRepoNames(prevExpanded => {
      const otherExpandedRepoNames = prevExpanded.filter(r => r !== repo.name);
      return isExpanding ? [...otherExpandedRepoNames, repo.name] : otherExpandedRepoNames;
    });
  const isRepoExpanded = (repo: Repository) => expandedRepoNames.includes(repo.name);

  const [isExampleCompact, setIsExampleCompact] = React.useState(true);

  const columns: TableProps['cells'] = [
    {
      title: 'Repositories',
      cellFormatters: [expandable]
    },
    'Branches',
    { title: 'Pull requests' },
    { title: '' /* deliberately empty */, dataLabel: 'Label for mobile view' }
  ];
  const rows: TableProps['rows'] = [];
  repositories.forEach(repo => {
    rows.push({
      isOpen: isRepoExpanded(repo),
      cells: [repo.name, repo.branches, repo.prs, repo.workspaces]
    });
    if (repo.details) {
      rows.push({
        parent: rows.length - 1,
        cells: [repo.details.detail1] // TODO lay out cells depending on detailFormat
        // TODO noPadding, fullWidth based on detailFormat
      });
    }
  });

  return (
    <React.Fragment>
      <Checkbox
        label="Compact"
        isChecked={isExampleCompact}
        onChange={checked => setIsExampleCompact(checked)}
        aria-label="toggle compact variation"
        id="toggle-compact"
        name="toggle-compact"
      />
      <Table
        aria-label="Expandable table"
        variant={isExampleCompact ? TableVariant.compact : null}
        onCollapse={this.onCollapse} // TODO examine how these callbacks work in the old example
        rows={rows}
        cells={columns}
      >
        <TableHeader />
        <TableBody />
      </Table>
      {/*
      <TableComposable aria-label="Expandable table" variant={isExampleCompact ? 'compact' : null}>
        <Thead>
          <Tr>
            <Th />
            <Th>{columnNames.name}</Th>
            <Th>{columnNames.branches}</Th>
            <Th>{columnNames.prs}</Th>
            <Th>{columnNames.workspaces}</Th>
            <Th>{columnNames.lastCommit}</Th>
          </Tr>
        </Thead>
        {repositories.map((repo, rowIndex) => {
          // Some arbitrary examples of how you could customize the child row based on your needs
          let childIsFullWidth = false;
          let childHasNoPadding = false;
          let detail1Colspan = 1;
          let detail2Colspan = 1;
          let detail3Colspan = 1;
          if (repo.details) {
            const { detail1, detail2, detail3, detailFormat } = repo.details;
            const numColumns = 5;
            childIsFullWidth = [1, 3].includes(detailFormat);
            childHasNoPadding = [2, 3].includes(detailFormat);
            if (detail1 && !detail2 && !detail3) {
              detail1Colspan = childIsFullWidth ? numColumns : numColumns + 1; // Account for toggle column
            } else if (detail1 && detail2 && !detail3) {
              detail1Colspan = 2;
              detail2Colspan = childIsFullWidth ? 3 : 4;
            } else if (detail1 && detail2 && detail3) {
              detail1Colspan = 2;
              detail2Colspan = 2;
              detail3Colspan = childIsFullWidth ? 1 : 2;
            }
          }
          return (
            <Tbody key={repo.name} isExpanded={isRepoExpanded(repo)}>
              <Tr>
                <Td
                  expand={
                    repo.details
                      ? {
                          rowIndex,
                          isExpanded: isRepoExpanded(repo),
                          onToggle: () => setRepoExpanded(repo, !isRepoExpanded(repo))
                        }
                      : null
                  }
                />
                <Td dataLabel={columnNames.name}>{repo.name}</Td>
                <Td dataLabel={columnNames.branches}>{repo.branches}</Td>
                <Td dataLabel={columnNames.prs}>{repo.prs}</Td>
                <Td dataLabel={columnNames.workspaces}>{repo.workspaces}</Td>
                <Td dataLabel={columnNames.lastCommit}>{repo.lastCommit}</Td>
              </Tr>
              {repo.details ? (
                <Tr isExpanded={isRepoExpanded(repo)}>
                  {!childIsFullWidth ? <Td /> : null}
                  {repo.details.detail1 ? (
                    <Td dataLabel="Repo detail 1" noPadding={childHasNoPadding} colSpan={detail1Colspan}>
                      <ExpandableRowContent>{repo.details.detail1}</ExpandableRowContent>
                    </Td>
                  ) : null}
                  {repo.details.detail2 ? (
                    <Td dataLabel="Repo detail 2" noPadding={childHasNoPadding} colSpan={detail2Colspan}>
                      <ExpandableRowContent>{repo.details.detail2}</ExpandableRowContent>
                    </Td>
                  ) : null}
                  {repo.details.detail3 ? (
                    <Td dataLabel="Repo detail 3" noPadding={childHasNoPadding} colSpan={detail3Colspan}>
                      <ExpandableRowContent>{repo.details.detail3}</ExpandableRowContent>
                    </Td>
                  ) : null}
                </Tr>
              ) : null}
            </Tbody>
          );
        })}
      </TableComposable>
      */}
    </React.Fragment>
  );
};
