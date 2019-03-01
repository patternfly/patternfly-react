import Simple from './examples/SimpleBreadcrumbs';
import WithoutLinkBreadcrumbs from './examples/WithoutLinkBreadcrumbs';
import HeadingBreadcrumbs from './examples/HeadingBreadcrumbs';
import { Breadcrumb, BreadcrumbItem, BreadcrumbHeading } from '@patternfly/react-core';

export default {
  title: 'Breadcrumb',
  components: {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbHeading
  },
  variablesRoot: 'pf-c-breadcrumb',
  examples: [
    {
      component: Simple,
      title: 'Breadcrumb'
    },
    {
      component: WithoutLinkBreadcrumbs,
      title: 'Breadcrumb without Home Link'
    },
    {
      component: HeadingBreadcrumbs,
      title: 'Breadcrumb with Heading'
    }
  ]
};
