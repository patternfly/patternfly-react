import {
  SearchInput,
  Select,
  SelectOption,
  SelectVariant,
  Toolbar,
  ToolbarContent,
  ToolbarItem,
  ToolbarItemVariant
} from '@patternfly/react-core';
import FilterIcon from '@patternfly/react-icons/dist/esm/icons/filter-icon';
import { isEmpty, omit } from 'lodash-es';
import * as React from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { parseFiltersFromURL, setFiltersToURL } from '../../utils/urlSync';
import VirtualizedTable, { AnyObject, VirtualizedTableProps } from '../table/VirtualizedTable';
import FilterChips from './FilterChips';
import './list-view.css';

export interface FilterItem {
  /** Label of a parameter used for filtering. */
  label: string;
  /** Column name for given filtering parameter. */
  id: string;
}

export type ListViewProps<D> = VirtualizedTableProps<D> & {
  /** Optional custom onFilter callback. */
  onFilter?: (filterValues: Record<string, string[]>, activeFilter?: FilterItem) => D[];
  /** Optional array of filterBy options. */
  filters?: FilterItem[];
};

export function filterDefault<D>(data: D[], filterValues: Record<string, string[]>): D[] {
  return data.filter(item => {
    let isRelevant = true;
    Object.keys(filterValues).forEach(key => {
      if (
        filterValues[key].some(
          (filterValue: string) =>
            !((item as Record<string, unknown>)[key] as string)?.toLowerCase()?.includes(filterValue.toLowerCase())
        )
      ) {
        isRelevant = false;
      }
    });
    return isRelevant;
  });
}

const ListView = <D extends AnyObject>({
  columns,
  data,
  filters = [],
  isRowSelected,
  onSelect,
  onFilter,
  loadError,
  loaded,
  Row,
  CustomEmptyState,
  emptyStateDescription,
  CustomNoDataEmptyState,
  'aria-label': ariaLabel
}: ListViewProps<D>) => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeFilter, setActiveFilter] = React.useState<FilterItem | undefined>(filters?.[0]);
  const [filteredData, setFilteredData] = React.useState(data);
  const [isFilterSelectExpanded, setFilterSelectExpanded] = React.useState(false);
  const filterValues = React.useRef<Record<string, string[]>>({});

  React.useEffect(() => {
    filterValues.current = parseFiltersFromURL(
      new URLSearchParams(location.search),
      filters.map(filter => filter.id)
    );
    if (filters && !isEmpty(filterValues.current)) {
      setFilteredData(
        onFilter ? onFilter(filterValues.current, activeFilter) : filterDefault([...data], filterValues.current)
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <>
      <Toolbar>
        <ToolbarContent>
          {filters ? (
            <>
              <ToolbarItem key="filter-select">
                <Select
                  toggleIcon={<FilterIcon />}
                  variant={SelectVariant.single}
                  onToggle={value => setFilterSelectExpanded(value)}
                  onSelect={(e, selection) => {
                    setActiveFilter(filters.find(item => item.id === selection));
                    setFilterSelectExpanded(false);
                  }}
                  placeholderText={activeFilter?.label}
                  isOpen={isFilterSelectExpanded}
                >
                  {filters.map(option => (
                    <SelectOption key={option.id} value={option.id}>
                      {option.label}
                    </SelectOption>
                  ))}
                </Select>
              </ToolbarItem>
              <ToolbarItem variant={ToolbarItemVariant['search-filter']} key="search-filter">
                <SearchInput
                  className="dps-list-view__search"
                  onChange={value => {
                    if (activeFilter) {
                      const newValues =
                        value?.length > 0
                          ? { ...filterValues.current, [activeFilter.id]: [value] }
                          : omit(filterValues.current, activeFilter.id);
                      setFiltersToURL(
                        searchParams,
                        setSearchParams,
                        filters.map(filter => filter.id),
                        newValues
                      );
                    }
                  }}
                  value={activeFilter ? filterValues.current[activeFilter.id]?.[0] : ''}
                  placeholder={`Filter by ${activeFilter?.label}`}
                />
              </ToolbarItem>
            </>
          ) : null}
        </ToolbarContent>
        {Object.keys(filterValues.current)?.length > 0 && (
          <ToolbarContent className="dps-list-view__filters">
            <ToolbarItem>
              <FilterChips
                filters={filters}
                filterValues={filterValues.current}
                onDelete={key => {
                  setFiltersToURL(
                    searchParams,
                    setSearchParams,
                    filters.map(filter => filter.id),
                    key ? omit(filterValues.current, key) : {}
                  );
                }}
              />
            </ToolbarItem>
          </ToolbarContent>
        )}
      </Toolbar>
      <VirtualizedTable
        aria-label={ariaLabel}
        areFiltersApplied={Object.values(filterValues.current).some(value => value?.length > 0)}
        data={filters ? filteredData : data}
        loaded={loaded}
        columns={columns}
        isRowSelected={isRowSelected}
        onSelect={onSelect}
        Row={Row}
        emptyStateDescription={emptyStateDescription}
        CustomEmptyState={CustomEmptyState}
        loadError={loadError}
        CustomNoDataEmptyState={CustomNoDataEmptyState}
      />
    </>
  );
};

export default ListView;
