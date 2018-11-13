import { Badge } from '@patternfly/react-core';
import Read from './examples/ReadBadge';
import Unread from './examples/UnreadBadge';
import getContainerProps from './examples/common/getContainerProps';

export default {
  title: 'Badge',
  components: {
    Badge
  },
  examples: [
    {
      component: Unread,
      title: 'Unread Badge',
      getContainerProps
    },
    {
      component: Read,
      title: 'Read Badge',
      getContainerProps
    }
  ]
};
