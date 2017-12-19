// Reactabular sorting order allows you to specifiy sort asc/desc only and removes
// the unsorted state. This is consistent with current PF Data Table but should
// be better spelled out in our design docs.
// https://github.com/patternfly/patternfly-design/blob/master/pattern-library/content-views/table-view/design/design.md
// https://reactabular.js.org/#/data/sorting?a=customizing-sorting-order
export const defaultSortingOrder = {
  FIRST: 'asc',
  asc: 'desc',
  desc: 'asc'
};
