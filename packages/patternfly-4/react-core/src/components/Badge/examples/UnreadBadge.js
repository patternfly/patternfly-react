import React from 'react';
import { Badge } from '@patternfly/react-core';

class UnreadBadge extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Badge>7</Badge>
        <Badge>24</Badge>
        <Badge>240</Badge>
        <Badge>999+</Badge>
      </React.Fragment>
    );
  }
}

export default UnreadBadge;
