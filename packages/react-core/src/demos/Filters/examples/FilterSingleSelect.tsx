import React from 'react';
import {
  Menu,
  MenuContent,
  MenuList,
  MenuItem,
  MenuToggle,
  MenuToggleCheckbox,
  Popper,
  Toolbar,
  ToolbarContent,
  ToolbarItem,
  Pagination
} from '@patternfly/react-core';
import { TableComposable, Thead, Tr, Th, Tbody, Td } from '@patternfly/react-table';
import FilterIcon from '@patternfly/react-icons/dist/esm/icons/filter-icon';

interface Repository {
  name: string;
  threads: string;
  apps: string;
  workspaces: string;
  status: string;
  location: string;
}

// In real usage, this data would come from some external source like an API via props.
const repositories: Repository[] = [
  { name: 'US-Node 1', threads: '5', apps: '25', workspaces: '5', status: 'Stopped', location: 'Raleigh' },
  { name: 'US-Node 2', threads: '5', apps: '30', workspaces: '2', status: 'Down', location: 'Westford' },
  { name: 'US-Node 3', threads: '13', apps: '35', workspaces: '12', status: 'Degraded', location: 'Boston' },
  { name: 'US-Node 4', threads: '2', apps: '5', workspaces: '18', status: 'Needs Maintenance', location: 'Raleigh' },
  { name: 'US-Node 5', threads: '7', apps: '30', workspaces: '5', status: 'Running', location: 'Boston' },
  { name: 'US-Node 6', threads: '5', apps: '20', workspaces: '15', status: 'Stopped', location: 'Raleigh' },
  { name: 'CZ-Node 1', threads: '12', apps: '48', workspaces: '13', status: 'Down', location: 'Brno' },
  { name: 'CZ-Node 2', threads: '3', apps: '8', workspaces: '20', status: 'Running', location: 'Brno' },
  { name: 'CZ-Remote-Node 1', threads: '1', apps: '15', workspaces: '20', status: 'Down', location: 'Brno' },
  { name: 'Bangalore-Node 1', threads: '1', apps: '20', workspaces: '20', status: 'Running', location: 'Bangalore' }
];

const columnNames = {
  name: 'Servers',
  threads: 'Threads',
  apps: 'Applications',
  workspaces: 'Workspaces',
  status: 'Status',
  location: 'Location'
};

/* eslint-disable patternfly-react/no-anonymous-functions */
export const FilterSingleSelect: React.FunctionComponent = () => {
  // Set up repo filtering
  const [searchValue, setSearchValue] = React.useState('');
  const onFilter = (repo: Repository) => {
    if (searchValue === 'all') {
      return true;
    }

    let input: RegExp;
    try {
      input = new RegExp(searchValue, 'i');
    } catch (err) {
      input = new RegExp(searchValue.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
    }
    return repo.status.search(input) >= 0;
  };

  const filteredRepos = repositories.filter(onFilter);

  // Set up table selection
  // In this example, selected rows are tracked by the repo names from each row. This could be any unique identifier.
  // This is to prevent state from being based on row order index in case we later add sorting.
  const isRepoSelectable = (repo: Repository) => repo.name !== 'a'; // Arbitrary logic for this example
  const [selectedRepoNames, setSelectedRepoNames] = React.useState<string[]>([]);
  const setRepoSelected = (repo: Repository, isSelecting = true) =>
    setSelectedRepoNames(prevSelected => {
      const otherSelectedRepoNames = prevSelected.filter(r => r !== repo.name);
      return isSelecting && isRepoSelectable(repo) ? [...otherSelectedRepoNames, repo.name] : otherSelectedRepoNames;
    });
  const selectAllRepos = (isSelecting = true) =>
    setSelectedRepoNames(isSelecting ? filteredRepos.map(r => r.name) : []);
  const areAllReposSelected = selectedRepoNames.length === filteredRepos.length && filteredRepos.length > 0;
  const areSomeReposSelected = selectedRepoNames.length > 0;
  const isRepoSelected = (repo: Repository) => selectedRepoNames.includes(repo.name);

  // To allow shift+click to select/deselect multiple rows
  const [recentSelectedRowIndex, setRecentSelectedRowIndex] = React.useState<number | null>(null);
  const [shifting, setShifting] = React.useState(false);

  const onSelectRepo = (repo: Repository, rowIndex: number, isSelecting: boolean) => {
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

  // Set up bulk selection menu
  const bulkSelectMenuRef = React.useRef<HTMLDivElement>(null);
  const bulkSelectToggleRef = React.useRef<any>(null);
  const bulkSelectContainerRef = React.useRef<HTMLDivElement>(null);

  const [isBulkSelectOpen, setIsBulkSelectOpen] = React.useState<boolean>(false);

  const handleBulkSelectClickOutside = (event: MouseEvent) => {
    if (isBulkSelectOpen && !bulkSelectMenuRef.current?.contains(event.target as Node)) {
      setIsBulkSelectOpen(false);
    }
  };

  const handleBulkSelectMenuKeys = (event: KeyboardEvent) => {
    if (!isBulkSelectOpen) {
      return;
    }
    if (
      bulkSelectMenuRef.current?.contains(event.target as Node) ||
      bulkSelectToggleRef.current?.contains(event.target as Node)
    ) {
      if (event.key === 'Escape' || event.key === 'Tab') {
        setIsBulkSelectOpen(!isBulkSelectOpen);
        bulkSelectToggleRef.current?.querySelector('button').focus();
      }
    }
  };

  React.useEffect(() => {
    window.addEventListener('keydown', handleBulkSelectMenuKeys);
    window.addEventListener('click', handleBulkSelectClickOutside);
    return () => {
      window.removeEventListener('keydown', handleBulkSelectMenuKeys);
      window.removeEventListener('click', handleBulkSelectClickOutside);
    };
  }, [isBulkSelectOpen, bulkSelectMenuRef]);

  const onBulkSelectToggleClick = (ev: React.MouseEvent) => {
    ev.stopPropagation(); // Stop handleClickOutside from handling
    setTimeout(() => {
      if (bulkSelectMenuRef.current) {
        const firstElement = bulkSelectMenuRef.current.querySelector('li > button:not(:disabled)');
        firstElement && (firstElement as HTMLElement).focus();
      }
    }, 0);
    setIsBulkSelectOpen(!isBulkSelectOpen);
  };

  let menuToggleCheckmark: boolean | null = false;
  if (areAllReposSelected) {
    menuToggleCheckmark = true;
  } else if (areSomeReposSelected) {
    menuToggleCheckmark = null;
  }

  const bulkSelectToggle = (
    <MenuToggle
      ref={bulkSelectToggleRef}
      onClick={onBulkSelectToggleClick}
      isExpanded={isBulkSelectOpen}
      splitButtonOptions={{
        items: [
          <MenuToggleCheckbox
            id="single-bulk-select"
            key="single-bulk-select"
            aria-label="Select all"
            isChecked={menuToggleCheckmark}
            onChange={(checked, _event) => selectAllRepos(checked)}
          />
        ]
      }}
      aria-label="Full table selection checkbox"
    />
  );

  const bulkSelectMenu = (
    <Menu
      ref={bulkSelectMenuRef}
      onSelect={(_ev, itemId) => {
        selectAllRepos(itemId === 1 || itemId === 2);
        setIsBulkSelectOpen(!isBulkSelectOpen);
        bulkSelectToggleRef.current?.querySelector('button').focus();
      }}
    >
      <MenuContent>
        <MenuList>
          <MenuItem itemId={0}>Select none (0 items)</MenuItem>
          <MenuItem itemId={1}>Select page ({repositories.length} items)</MenuItem>
          <MenuItem itemId={2}>Select all ({repositories.length} items)</MenuItem>
        </MenuList>
      </MenuContent>
    </Menu>
  );

  const toolbarBulkSelect = (
    <div ref={bulkSelectContainerRef}>
      <Popper
        trigger={bulkSelectToggle}
        popper={bulkSelectMenu}
        appendTo={bulkSelectContainerRef.current || undefined}
        isVisible={isBulkSelectOpen}
        popperMatchesTriggerWidth={false}
      />
    </div>
  );

  // Set up single select menu & state
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [menuSelection, setMenuSelection] = React.useState<string>('all');
  const toggleRef = React.useRef<HTMLButtonElement>(null);
  const menuRef = React.useRef<HTMLDivElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const handleMenuKeys = (event: KeyboardEvent) => {
    if (isOpen && menuRef.current?.contains(event.target as Node)) {
      if (event.key === 'Escape' || event.key === 'Tab') {
        setIsOpen(!isOpen);
        toggleRef.current?.focus();
      }
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (isOpen && !menuRef.current?.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('keydown', handleMenuKeys);
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('keydown', handleMenuKeys);
      window.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen, menuRef]);

  const onToggleClick = (ev: React.MouseEvent) => {
    ev.stopPropagation(); // Stop handleClickOutside from handling
    setTimeout(() => {
      if (menuRef.current) {
        const firstElement = menuRef.current.querySelector('li > button:not(:disabled)');
        firstElement && (firstElement as HTMLElement).focus();
      }
    }, 0);
    setIsOpen(!isOpen);
  };

  function onSelect(event: React.MouseEvent | undefined, itemId: string | number | undefined) {
    if (typeof itemId === 'undefined') {
      return;
    }

    setMenuSelection(itemId.toString());
    setSearchValue(itemId.toString());
    setIsOpen(!isOpen);
  }

  const menuToggleDisplay = {
    all: 'All statuses',
    down: 'Down',
    stopped: 'Stopped',
    degraded: 'Degraded',
    running: 'Running',
    maint: 'Needs maintenance'
  };

  const toggle = (
    <MenuToggle
      ref={toggleRef}
      onClick={onToggleClick}
      isExpanded={isOpen}
      icon={<FilterIcon />}
      style={
        {
          width: '200px'
        } as React.CSSProperties
      }
    >
      {menuToggleDisplay[menuSelection]}
    </MenuToggle>
  );

  const menu = (
    <Menu ref={menuRef} id="single-select-menu" onSelect={onSelect} selected={menuSelection}>
      <MenuContent>
        <MenuList>
          <MenuItem itemId="all">All statuses</MenuItem>
          <MenuItem itemId="stopped">Stopped</MenuItem>
          <MenuItem itemId="down">Down</MenuItem>
          <MenuItem itemId="degraded">Degraded</MenuItem>
          <MenuItem itemId="running">Running</MenuItem>
          <MenuItem itemId="maint">Needs maintenance</MenuItem>
        </MenuList>
      </MenuContent>
    </Menu>
  );

  const select = (
    <div ref={containerRef}>
      <Popper trigger={toggle} popper={menu} appendTo={containerRef.current || undefined} isVisible={isOpen} />
    </div>
  );

  // Set up pagination
  const toolbarPagination = (
    <Pagination
      titles={{ paginationTitle: 'Single select filter pagination' }}
      perPageComponent="button"
      itemCount={repositories.length}
      perPage={10}
      page={1}
      widgetId="single-select-mock-pagination"
      isCompact
    />
  );

  const toolbar = (
    <Toolbar id="single-select-filter-toolbar">
      <ToolbarContent>
        <ToolbarItem>{toolbarBulkSelect}</ToolbarItem>
        <ToolbarItem>{select}</ToolbarItem>
        <ToolbarItem variant="pagination">{toolbarPagination}</ToolbarItem>
      </ToolbarContent>
    </Toolbar>
  );

  return (
    <React.Fragment>
      {toolbar}
      <TableComposable aria-label="Selectable table">
        <Thead>
          <Tr>
            <Th />
            <Th width={20}>{columnNames.name}</Th>
            <Th width={10}>{columnNames.threads}</Th>
            <Th width={10}>{columnNames.apps}</Th>
            <Th width={10}>{columnNames.workspaces}</Th>
            <Th width={20}>{columnNames.status}</Th>
            <Th width={20}>{columnNames.location}</Th>
          </Tr>
        </Thead>
        <Tbody>
          {filteredRepos.map((repo, rowIndex) => (
            <Tr key={repo.name}>
              <Td
                select={{
                  rowIndex,
                  onSelect: (_event, isSelecting) => onSelectRepo(repo, rowIndex, isSelecting),
                  isSelected: isRepoSelected(repo),
                  disable: !isRepoSelectable(repo)
                }}
              />
              <Td dataLabel={columnNames.name} modifier="truncate">
                {repo.name}
              </Td>
              <Td dataLabel={columnNames.threads} modifier="truncate">
                {repo.threads}
              </Td>
              <Td dataLabel={columnNames.apps} modifier="truncate">
                {repo.apps}
              </Td>
              <Td dataLabel={columnNames.workspaces} modifier="truncate">
                {repo.workspaces}
              </Td>
              <Td dataLabel={columnNames.status} modifier="truncate">
                {repo.status}
              </Td>
              <Td dataLabel={columnNames.location} modifier="truncate">
                {repo.location}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </TableComposable>
    </React.Fragment>
  );
};
