import React from 'react';
import { Badge } from '@patternfly/react-core';

export const BadgeToggle: React.FunctionComponent = () => (
  <React.Fragment>
    <Badge key={1} screenReaderText="Unread Messages" isToggle>
      7
    </Badge>
    <Badge key={2} screenReaderText="Read Messages" isRead isToggle>
      7
    </Badge>
  </React.Fragment>
);
