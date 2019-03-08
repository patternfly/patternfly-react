import { Pagination, PaginationVariant, ToggleTamplate } from '@patternfly/react-core';
import PaginationTop from './examples/PaginationTop';
import PaginationBottom from './examples/PaginationBottom';

export default {
  title: 'Pagination',
  components: {
    Pagination,
    ToggleTamplate
  },
  enumValues: {
    'Object.values(PaginationVariant)': Object.values(PaginationVariant)
  },
  examples: [
    { component: PaginationTop, title: 'Pagination Top' },
    { component: PaginationBottom, title: 'Pagination Bottom' }
  ]
};
