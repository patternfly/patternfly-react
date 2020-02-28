export const resources = [
  { id: '1', name: 'Host 1', url: '#' },
  { id: '2', name: 'Host 2', url: '#' },
  { id: '3', name: 'Host 3 with a very very very very very long name', url: '#' },
  {
    id: '4',
    name: 'Host 4',
    url: undefined,
    onClick: Function.prototype
  },
  {
    id: '5',
    name: 'Host 5',
    url: '#',
    onClick: undefined
  }
];

export const switcherProps = {
  searchDebounceTimeout: 250,
  currentPage: 2,
  totalPages: 3,
  resources
};
