import { Card, CardBody, CardFooter, CardHeader } from '@patternfly/react-core';
import Simple from './examples/SimpleCard';
import NoFooter from './examples/NoFooterCard';
import NoHeader from './examples/NoHeaderCard';
import ContentOnly from './examples/ContentOnlyCard';

export default {
  title: 'Card',
  components: {
    Card,
    CardHeader,
    CardBody,
    CardFooter
  },
  variablesRoot: 'pf-c-card',
  examples: [
    { component: Simple, title: 'Card' },
    { component: NoFooter, title: 'Card with no footer' },
    { component: NoHeader, title: 'Card with no header' },
    { component: ContentOnly, title: 'Card with only a content section' }
  ]
};
