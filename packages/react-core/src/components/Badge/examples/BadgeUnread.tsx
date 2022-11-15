import React from 'react';
import { Badge } from '@patternfly/react-core';

export const BadgeUnread: React.FunctionComponent = () => (
  <React.Fragment>
    <Badge key={1} screenReaderText="Unread Messages">
      7
    </Badge>
    <Badge key={2} screenReaderText="Unread Messages">
      24
    </Badge>
    <Badge key={3} screenReaderText="Unread Messages">
      240
    </Badge>
    <Badge key={4} screenReaderText="Unread Messages">
      999+
    </Badge>
  </React.Fragment>
);
