import React from 'react';
import { TableComposable, Thead, Tr, Th, Tbody, Td } from '@patternfly/react-table';

interface Repository {
  name: string;
  branches: string | null;
  prs: string | null;
  workspaces: string;
  lastCommit: string;
}

export const ComposableTableSelectable: React.FunctionComponent = () => {
  // In real usage, this data would come from some external source like an API via props.
  const repositories: Repository[] = [
    { name: 'one', branches: 'two', prs: 'a', workspaces: 'four', lastCommit: 'five' },
    { name: 'a', branches: 'two', prs: 'k', workspaces: 'four', lastCommit: 'five' },
    { name: 'b', branches: 'two', prs: 'k', workspaces: 'four', lastCommit: 'five' },
    { name: 'c', branches: 'two', prs: 'k', workspaces: 'four', lastCommit: 'five' },
    { name: 'd', branches: 'two', prs: 'k', workspaces: 'four', lastCommit: 'five' },
    { name: 'e', branches: 'two', prs: 'b', workspaces: 'four', lastCommit: 'five' }
  ];
  const isRepoSelectable = (repo: Repository) => repo.name !== 'a'; // Arbitrary logic for this example
  const selectableRepos = repositories.filter(isRepoSelectable);

  // In this example, selected rows are tracked by the repo names from each row. This could be any unique identifier.
  // This is to prevent state from being based on row order index in case we later add sorting.
  // TODO put the generic type param back when the TS parser is fixed.
  // const [selectedRepoNames, setSelectedRepoNames] = React.useState<string[]>([]);
  const [selectedRepoNames, setSelectedRepoNames] = React.useState([]);
  const setRepoSelected = (repo: Repository, isSelecting = true) =>
    setSelectedRepoNames(prevSelected => {
      const otherSelectedRepoNames = prevSelected.filter(r => r !== repo.name);
      return isSelecting && isRepoSelectable(repo) ? [...otherSelectedRepoNames, repo.name] : otherSelectedRepoNames;
    });
  const selectAllRepos = (isSelecting = true) =>
    setSelectedRepoNames(isSelecting ? selectableRepos.map(r => r.name) : []);
  const areAllReposSelected = selectedRepoNames.length === selectableRepos.length;
  const isRepoSelected = (repo: Repository) => selectedRepoNames.includes(repo.name);

  const [recentSelectedRowIndex, setRecentSelectedRowIndex] = React.useState<number | null>(null);
  const [shifting, setShifting] = React.useState(false);

  const onSelectRepo = (repo, rowIndex, isSelecting) => {
    // If the user is shift + selecting the checkboxes, then all intermediate checkboxes should be selected
    if (shifting && recentSelectedRowIndex !== null) {
      const numberSelected = rowIndex - recentSelectedRowIndex;
      const intermediateIndexes =
        numberSelected > 0
          ? Array.from(new Array(numberSelected + 1), (_x, i) => i + recentSelectedRowIndex)
          : Array.from(new Array(Math.abs(numberSelected) + 1), (_x, i) => i + rowIndex);
      intermediateIndexes.forEach(index => setRepoSelected(repositories[index], isSelecting));
    } else {
      setRepoSelected(repo, isSelecting);
    }
    setRecentSelectedRowIndex(rowIndex);
  };

  React.useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Shift') {
        setShifting(true);
      }
    };
    const onKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'Shift') {
        setShifting(false);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup', onKeyUp);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('keyup', onKeyUp);
    };
  }, []);

  return (
    <TableComposable aria-label="Selectable table">
      <Thead>
        <Tr>
          <Th
            select={{
              onSelect: (_event, isSelecting) => selectAllRepos(isSelecting),
              isSelected: areAllReposSelected
            }}
          />
          <Th>Repositories</Th>
          <Th>Branches</Th>
          <Th>Pull requests</Th>
          <Th>Workspaces</Th>
          <Th>Last commit</Th>
        </Tr>
      </Thead>
      <Tbody>
        {repositories.map((repo, rowIndex) => (
          <Tr key={repo.name}>
            <Td
              select={{
                rowIndex,
                onSelect: (_event, isSelecting) => onSelectRepo(repo, rowIndex, isSelecting),
                isSelected: isRepoSelected(repo),
                disable: !isRepoSelectable(repo)
              }}
            />
            <Td dataLabel="Repositories">{repo.name}</Td>
            <Td dataLabel="Branches">{repo.branches}</Td>
            <Td dataLabel="Pull requests">{repo.prs}</Td>
            <Td dataLabel="Workspaces">{repo.workspaces}</Td>
            <Td dataLabel="Last commit">{repo.lastCommit}</Td>
          </Tr>
        ))}
      </Tbody>
    </TableComposable>
  );
};
