import { Badge } from '@patternfly/react-core';
import Read from './examples/ReadBadge';
import Unread from './examples/UnreadBadge';
import getContainerProps from './examples/common/getContainerProps';

export default {
  title: 'Badge',
  components: {
    Badge
  },
  variablesRoot: 'pf-c-badge',
  examples: [
    {
      component: Read,
      title: 'Read Badge',
      getContainerProps
    },
    {
      component: Unread,
      title: 'Unread Badge',
      getContainerProps
    }
  ]
};
