import { Pagination, PaginationVariant } from '@patternfly/react-core';
import PaginationTop from './examples/PaginationTop';
import PaginationBottom from './examples/PaginationBottom';

export default {
  title: 'Page',
  components: {
    Pagination
  },
  enumValues: {
    'Object.values(PaginationVariant)': Object.values(PaginationVariant)
  },
  examples: [
    { component: PaginationTop, title: 'Pagination Top' },
    { component: PaginationBottom, title: 'Pagination Bottom' }
  ]
};
