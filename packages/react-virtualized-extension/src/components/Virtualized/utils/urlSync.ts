import { URLSearchParamsInit } from 'react-router-dom';

export const setFiltersToURL = (
  searchParams: URLSearchParams,
  setSearchParams: (
    nextInit: URLSearchParamsInit,
    navigateOptions?:
      | {
          replace?: boolean | undefined;
          state?: unknown;
        }
      | undefined
  ) => void,
  keys: string[],
  filterValues: Record<string, string[]>
) => {
  keys.forEach((key: string) => {
    searchParams.delete(key);
    if (filterValues[key]) {
      filterValues[key].map(value => searchParams.append(key, value));
    }
  });

  setSearchParams(searchParams);
};

export const parseFiltersFromURL = (searchParams: URLSearchParams, keys: string[]): Record<string, string[]> =>
  keys.reduce((acc, key) => {
    const values = searchParams.getAll(key);
    return {
      ...acc,
      [key]: values
    };
  }, {});
