import React from 'react';
import { Badge } from '@patternfly/react-core';
import getContainerProps from './common/getContainerProps';

class ReadBadge extends React.Component {
  static title = 'Read Badge';
  static getContainerProps = getContainerProps;

  render() {
    return (
      <React.Fragment>
        <Badge isRead>7</Badge>
        <Badge isRead>24</Badge>
        <Badge isRead>240</Badge>
        <Badge isRead>999+</Badge>
      </React.Fragment>
    );
  }
}

export default ReadBadge;
