import React from 'react';
import { Badge } from '@patternfly/react-core';
import getContainerProps from './common/getContainerProps';

class ReadBadge extends React.Component {
  static title = 'Read Badge';
  static getContainerProps = getContainerProps;

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

export default ReadBadge;
