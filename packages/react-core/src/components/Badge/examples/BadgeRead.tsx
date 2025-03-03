import { Fragment } from 'react';
import { Badge } from '@patternfly/react-core';

export const BadgeRead: React.FunctionComponent = () => (
  <Fragment>
    <Badge key={1} isRead>
      7
    </Badge>
    <Badge key={2} isRead>
      24
    </Badge>
    <Badge key={3} isRead>
      240
    </Badge>
    <Badge key={4} isRead>
      999+
    </Badge>
  </Fragment>
);
