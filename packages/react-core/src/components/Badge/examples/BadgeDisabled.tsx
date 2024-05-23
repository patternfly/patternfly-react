import React from 'react';
import { Badge } from '@patternfly/react-core';

export const BadgeRead: React.FunctionComponent = () => (
  <React.Fragment>
    <Badge key={1} isDisabled isRead>
      7
    </Badge>
    <Badge key={2} isDisabled isRead>
      24
    </Badge>
    <Badge key={3} isDisabled>
      240
    </Badge>
    <Badge key={4} isDisabled>
      999+
    </Badge>
  </React.Fragment>
);
