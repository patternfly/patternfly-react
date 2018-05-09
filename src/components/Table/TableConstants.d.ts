export enum TABLE_ALIGN {
  CENTER = 'center',
  RIGHT = 'right',
  DEFAULT = ''
}
export const TABLE_ALIGNMENT_TYPES: [
  TABLE_ALIGN.CENTER,
  TABLE_ALIGN.RIGHT,
  TABLE_ALIGN.DEFAULT
];

export enum TABLE_SORT_DIRECTION {
  ASC = 'asc',
  DESC = 'desc',
  DEFAULT = ''
}
export const TABLE_SORT_DIRECTIONS: [
  TABLE_SORT_DIRECTION.ASC,
  TABLE_SORT_DIRECTION.DESC,
  TABLE_SORT_DIRECTION.DEFAULT
];

export const defaultSortingOrder: {
  FIRST: TABLE_SORT_DIRECTION.ASC;
  asc: TABLE_SORT_DIRECTION.DESC;
  desc: TABLE_SORT_DIRECTION.ASC;
};
