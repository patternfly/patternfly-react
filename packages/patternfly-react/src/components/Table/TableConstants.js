export const TABLE_ALIGN = {
  CENTER: 'center',
  RIGHT: 'right',
  DEFAULT: ''
};

export const TABLE_ALIGNMENT_TYPES = [TABLE_ALIGN.CENTER, TABLE_ALIGN.RIGHT, TABLE_ALIGN.DEFAULT];

export const TABLE_SORT_DIRECTION = {
  ASC: 'asc',
  DESC: 'desc',
  DEFAULT: ''
};

export const TABLE_SORT_DIRECTIONS = [
  TABLE_SORT_DIRECTION.ASC,
  TABLE_SORT_DIRECTION.DESC,
  TABLE_SORT_DIRECTION.DEFAULT
];

// Reactabular sorting order allows you to specifiy sort asc/desc only and removes
// the unsorted state. This is consistent with current PF Data Table but should
// be better spelled out in our design docs.
// https://github.com/patternfly/patternfly-design/issues/516
// https://reactabular.js.org/#/data/sorting?a=customizing-sorting-order
export const defaultSortingOrder = {
  FIRST: 'asc',
  asc: 'desc',
  desc: 'asc'
};
