import React from 'react';
import { TableVariant, expandable, IRowCell } from '@patternfly/react-table';
import { Table, TableHeader, TableBody, TableProps } from '@patternfly/react-table/deprecated';
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

export const LegacyTableExpandable: React.FunctionComponent = () => {
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
  const initialExpandedRepoNames = repositories.filter((repo) => !!repo.details).map((repo) => repo.name); // Default to all expanded
  const [expandedRepoNames, setExpandedRepoNames] = React.useState<string[]>(initialExpandedRepoNames);
  const setRepoExpanded = (repo: Repository, isExpanding = true) =>
    setExpandedRepoNames((prevExpanded) => {
      const otherExpandedRepoNames = prevExpanded.filter((r) => r !== repo.name);
      return isExpanding ? [...otherExpandedRepoNames, repo.name] : otherExpandedRepoNames;
    });
  const isRepoExpanded = (repo: Repository) => expandedRepoNames.includes(repo.name);

  const [isExampleCompact, setIsExampleCompact] = React.useState(true);

  // We want to be able to reference the original data object based on row index. But because an expanded
  // row takes up two row indexes, repositories[rowIndex] will not be accurate like it would in a normal table.
  // One solution to this is to create an array of data objects indexed by the displayed row index.
  const reposByRowIndex: (Repository | null)[] = [];

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
  repositories.forEach((repo) => {
    rows.push({
      ...(repo.details ? { isOpen: isRepoExpanded(repo) } : {}),
      cells: [repo.name, repo.branches, repo.prs, repo.workspaces]
    });
    reposByRowIndex.push(repo);
    if (repo.details) {
      // Some arbitrary examples of how you could customize the child row based on your needs
      const { detail1, detail2, detail3, detailFormat } = repo.details;
      const numColumns = 5;
      const childIsFullWidth = [1, 3].includes(detailFormat);
      const childHasNoPadding = [2, 3].includes(detailFormat);
      let detailColSpans = [1, 1, 1];
      if (detail1 && !detail2 && !detail3) {
        detailColSpans = [childIsFullWidth ? numColumns : numColumns + 1]; // Account for toggle column
      } else if (detail1 && detail2 && !detail3) {
        detailColSpans = [2, childIsFullWidth ? 3 : 4];
      } else if (detail1 && detail2 && detail3) {
        detailColSpans = [2, 2, childIsFullWidth ? 1 : 2];
      }
      const cells: IRowCell[] = [];
      [detail1, detail2, detail3].forEach((detail, index) => {
        if (detail) {
          cells.push({
            title: detail1,
            props: {
              colSpan: detailColSpans[index]
            }
          });
        }
      });
      rows.push({
        parent: rows.length - 1,
        cells,
        fullWidth: childIsFullWidth,
        noPadding: childHasNoPadding
      });
      reposByRowIndex.push(null);
    }
  });

  return (
    <React.Fragment>
      <Checkbox
        label="Compact"
        isChecked={isExampleCompact}
        onChange={(_event, checked) => setIsExampleCompact(checked)}
        aria-label="toggle compact variation"
        id="toggle-compact"
        name="toggle-compact"
      />
      <Table
        aria-label="Expandable table"
        variant={isExampleCompact ? TableVariant.compact : undefined}
        onCollapse={(_event, rowIndex, isOpen) => {
          if (reposByRowIndex[rowIndex]) {
            setRepoExpanded(reposByRowIndex[rowIndex], isOpen);
          }
        }}
        rows={rows}
        cells={columns}
        expandId="expandable-table-toggle"
        contentId="expandable-table-content"
      >
        <TableHeader />
        <TableBody />
      </Table>
    </React.Fragment>
  );
};
