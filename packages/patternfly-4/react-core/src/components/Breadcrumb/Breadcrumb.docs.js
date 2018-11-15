import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbItemDivider
} from '@patternfly/react-core';
import Heading from './examples/HeadingBreadcrumb';
import Homeless from './examples/HomelessBreadcrumb';

export default {
  title: 'Breadcrumb',
  components: {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbItemDivider
  },
  examples: [
    { component: Heading, title: 'Breadcrumb with Heading' },
    { component: Homeless, title: 'Breadcrumb without Home Link' }
  ]
};
